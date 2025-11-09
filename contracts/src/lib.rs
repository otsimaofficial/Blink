// Central library wiring the Blink Linera application.
// We include the three module files from the project root to avoid relocating files.

#[path = "../utils.rs"]
pub mod utils;

#[path = "../BlinkPrediction.rs"]
pub mod blink_prediction;

#[path = "../Leaderboard.rs"]
pub mod leaderboard;

use async_trait::async_trait;
use linera_sdk::base::WithContractAbi;
use linera_sdk::contract::system_api::SystemRuntime;
use linera_sdk::contract::Contract;
use linera_sdk::service::Service;
use linera_sdk::views::ViewStorageContext;
use linera_sdk::{self, views::View};
use serde::{Deserialize, Serialize};

use blink_prediction::{BlinkOperation, BlinkState, BlinkSystemMessage, BlinkView};
use leaderboard::{LeaderboardQuery, LeaderboardResponse};

// Contract implementation
#[cfg(feature = "contract")]
#[derive(WithContractAbi)]
pub struct BlinkContract;

#[cfg(feature = "contract")]
#[async_trait]
impl Contract for BlinkContract {
    type Message = BlinkSystemMessage;
    type InstantiationArgument = ();
    type Operation = BlinkOperation;
    type ApplicationCall = ();

    async fn load(_runtime: &mut SystemRuntime) -> anyhow::Result<Self> {
        Ok(Self)
    }

    async fn instantiate(&mut self, _runtime: &mut SystemRuntime, _argument: Self::InstantiationArgument) -> anyhow::Result<()> {
        let context = ViewStorageContext::default();
        let mut state = BlinkState::load(context).await?;
        state.save().await?;
        Ok(())
    }

    async fn execute_operation(&mut self, _runtime: &mut SystemRuntime, operation: Self::Operation) -> anyhow::Result<()> {
        let context = ViewStorageContext::default();
        let mut state = BlinkState::load(context).await?;
        blink_prediction::handle_operation(&mut state, operation).await?;
        state.save().await?;
        Ok(())
    }

    async fn execute_message(&mut self, _runtime: &mut SystemRuntime, message: Self::Message) -> anyhow::Result<()> {
        let context = ViewStorageContext::default();
        let mut state = BlinkState::load(context).await?;
        blink_prediction::handle_message(&mut state, message).await?;
        state.save().await?;
        Ok(())
    }
}

// Service implementation (read-only queries)
#[cfg(feature = "service")]
#[derive(WithContractAbi)]
pub struct BlinkService;

#[cfg(feature = "service")]
#[async_trait]
impl Service for BlinkService {
    type Query = LeaderboardQuery;
    type QueryResponse = LeaderboardResponse;

    async fn handle_query(&self, _runtime: &mut linera_sdk::service::system_api::SystemRuntime, query: Self::Query) -> anyhow::Result<Self::QueryResponse> {
        let context = ViewStorageContext::default();
        let state = BlinkState::load(context).await?;
        let response = leaderboard::handle_query(&state, query).await?;
        Ok(response)
    }
}


