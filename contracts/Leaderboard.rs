// Leaderboard.rs
// Leaderboard state and queries

use async_trait::async_trait;
use linera_sdk::views::{MapView, RegisterView, View, ViewStorageContext};
use serde::{Deserialize, Serialize};

use crate::utils::{TeamId, UserId};

#[derive(View)]
pub struct LeaderboardView {
    pub user_scores: MapView<UserId, RegisterView<u64>>,
    pub team_scores: MapView<TeamId, RegisterView<u64>>,
}

impl LeaderboardView {
    pub async fn add_user_points(&mut self, user_id: &UserId, delta: u64) -> anyhow::Result<u64> {
        let mut reg = self.user_scores.get_mut(user_id).await?;
        let current = reg.get().await.unwrap_or(0);
        let new_score = current.saturating_add(delta);
        reg.set(new_score);
        Ok(new_score)
    }

    pub async fn add_team_points(&mut self, team_id: &TeamId, delta: u64) -> anyhow::Result<u64> {
        let mut reg = self.team_scores.get_mut(team_id).await?;
        let current = reg.get().await.unwrap_or(0);
        let new_score = current.saturating_add(delta);
        reg.set(new_score);
        Ok(new_score)
    }

    pub async fn top_users(&self, n: usize) -> anyhow::Result<Vec<(UserId, u64)>> {
        let mut entries: Vec<(UserId, u64)> = Vec::new();
        for key in self.user_scores.indices().await? {
            if let Some(val) = self.user_scores.get(&key).await?.get().await {
                entries.push((key.clone(), val));
            }
        }
        entries.sort_by(|a, b| b.1.cmp(&a.1));
        entries.truncate(n);
        Ok(entries)
    }

    pub async fn top_teams(&self, n: usize) -> anyhow::Result<Vec<(TeamId, u64)>> {
        let mut entries: Vec<(TeamId, u64)> = Vec::new();
        for key in self.team_scores.indices().await? {
            if let Some(val) = self.team_scores.get(&key).await?.get().await {
                entries.push((key.clone(), val));
            }
        }
        entries.sort_by(|a, b| b.1.cmp(&a.1));
        entries.truncate(n);
        Ok(entries)
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum LeaderboardQuery {
    TopUsers { n: u32 },
    TopTeams { n: u32 },
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum LeaderboardResponse {
    Users(Vec<(UserId, u64)>),
    Teams(Vec<(TeamId, u64)>),
}

pub async fn handle_query(state: &crate::blink_prediction::BlinkState, query: LeaderboardQuery) -> anyhow::Result<LeaderboardResponse> {
    match query {
        LeaderboardQuery::TopUsers { n } => {
            let users = state.leaderboard.top_users(n as usize).await?;
            Ok(LeaderboardResponse::Users(users))
        }
        LeaderboardQuery::TopTeams { n } => {
            let teams = state.leaderboard.top_teams(n as usize).await?;
            Ok(LeaderboardResponse::Teams(teams))
        }
    }
}
