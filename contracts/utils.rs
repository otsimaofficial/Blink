// utils.rs
// Shared types and helpers used across Blink modules

use serde::{Deserialize, Serialize};

pub type UserId = String;
pub type TeamId = String;
pub type PredictionId = String; // Can be fixture_id or unique id composed by client

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Eq)]
pub enum Selection {
    Home,
    Away,
    Draw,
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Eq)]
pub enum Outcome {
    Home,
    Away,
    Draw,
    Void, // In case fixture canceled
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Prediction {
    pub prediction_id: PredictionId,
    pub fixture_id: String,
    pub user_id: UserId,
    pub team_id: Option<TeamId>,
    pub selection: Selection,
    pub placed_at_ms: u64,
    pub resolved: bool,
    pub won: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FixtureOdds {
    pub fixture_id: String,
    pub home_odds: f64,
    pub away_odds: f64,
    pub draw_odds: f64,
    pub start_time_ms: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum Event {
    PredictionSubmitted { prediction_id: PredictionId, user_id: UserId, fixture_id: String },
    PredictionResolved { prediction_id: PredictionId, won: bool },
    ScoreUpdated { user_id: UserId, delta: u64, new_score: u64 },
    TeamScoreUpdated { team_id: TeamId, delta: u64, new_score: u64 },
}

pub fn basic_scoring(won: bool) -> u64 {
    if won { 10 } else { 0 }
}

pub fn validate_non_empty(id: &str, label: &str) -> anyhow::Result<()> {
    if id.trim().is_empty() {
        anyhow::bail!("{} must not be empty", label);
    }
    Ok(())
}
