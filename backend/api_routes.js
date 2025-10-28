// api_routes.js - Express-like route handlers (placeholder)

// NOTE: This file provides handler functions. Wire them into an Express app as
// needed.

exports.submitPrediction = function (req, res) {
  // req.body: { user, prediction }
  res.json({ ok: true, message: 'prediction received' });
};

exports.getPredictions = function (req, res) {
  res.json({ predictions: [] });
};
