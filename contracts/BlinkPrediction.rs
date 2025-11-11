// BlinkPrediction.rs
// Core contract state and operations for predictions; integrates with LeaderboardView

use async_trait::async_trait;
use linera_sdk::views::{LogView, MapView, View};
use serde::{Deserialize, Serialize};

use crate::leaderboard::LeaderboardView;
use crate::utils::{basic_scoring, validate_non_empty, Event, Outcome, Prediction, PredictionId, Selection, TeamId, UserId};

#[derive(View)]
pub struct BlinkState {
    pub predictions: MapView<PredictionId, Prediction>,
    pub leaderboard: LeaderboardView,
    pub events: LogView<Event>,
}

// Operations that frontend/backend will submit as transactions
#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum BlinkOperation {
    SubmitPrediction {
        prediction_id: PredictionId,
        fixture_id: String,
        user_id: UserId,
        team_id: Option<TeamId>,
        selection: Selection,
        placed_at_ms: u64,
    },
    ResolveOutcome {
        prediction_id: PredictionId,
        outcome: Outcome,
    },
}

// Internal system message type (unused in this MVP but reserved for future cross-shard)
#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum BlinkSystemMessage {}

pub async fn handle_operation(state: &mut BlinkState, operation: BlinkOperation) -> anyhow::Result<()> {
    match operation {
        BlinkOperation::SubmitPrediction { prediction_id, fixture_id, user_id, team_id, selection, placed_at_ms } => {
            validate_non_empty(&prediction_id, "prediction_id")?;
            validate_non_empty(&fixture_id, "fixture_id")?;
            validate_non_empty(&user_id, "user_id")?;

            if state.predictions.get(&prediction_id).await?.is_some() {
                anyhow::bail!("prediction_id already exists");
            }

            let prediction = Prediction {
                prediction_id: prediction_id.clone(),
                fixture_id: fixture_id.clone(),
                user_id: user_id.clone(),
                team_id,
                selection,
                placed_at_ms,
                resolved: false,
                won: None,
            };
            state.predictions.insert(&prediction_id, prediction).await?;
            state.events.push(&Event::PredictionSubmitted { prediction_id, user_id, fixture_id }).await?;
        }
        BlinkOperation::ResolveOutcome { prediction_id, outcome } => {
            let mut entry = state
                .predictions
                .get_mut(&prediction_id)
                .await?
                .ok_or_else(|| anyhow::anyhow!("prediction not found"))?;

            if entry.resolved {
                anyhow::bail!("prediction already resolved");
            }

            let won = match (&entry.selection, &outcome) {
                (Selection::Home, Outcome::Home) => true,
                (Selection::Away, Outcome::Away) => true,
                (Selection::Draw, Outcome::Draw) => true,
                _ => false,
            };

            entry.resolved = true;
            entry.won = Some(won);

            // scoring
            let delta = basic_scoring(won);
            let new_user_score = state.leaderboard.add_user_points(&entry.user_id, delta).await?;
            state.events.push(&Event::ScoreUpdated { user_id: entry.user_id.clone(), delta, new_score: new_user_score }).await?;

            if let Some(ref team) = entry.team_id {
                let new_team_score = state.leaderboard.add_team_points(team, delta).await?;
                state.events.push(&Event::TeamScoreUpdated { team_id: team.clone(), delta, new_score: new_team_score }).await?;
            }

            state.events.push(&Event::PredictionResolved { prediction_id, won }).await?;
        }
    }
    Ok(())
}

pub async fn handle_message(_state: &mut BlinkState, _message: BlinkSystemMessage) -> anyhow::Result<()> {
    // No cross-application messages in MVP
    Ok(())
}

// Exposed types the frontend/backend will use
// - BlinkOperation::SubmitPrediction
// - BlinkOperation::ResolveOutcome
// - Service queries in LeaderboardQuery / LeaderboardResponse
