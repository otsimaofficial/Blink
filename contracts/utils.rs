// utils.rs
// Common helpers for contracts (placeholder)

pub fn calculate_score(prediction_accuracy: f64) -> u32 {
    // simple scoring: scale accuracy to 0..100
    (prediction_accuracy * 100.0) as u32
}
