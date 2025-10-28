// leaderboard_service.js - aggregates & updates leaderboards (placeholder)

const leaderboard = [];

exports.record = function(user, points) {
  leaderboard.push({ user, points, timestamp: Date.now() });
};

exports.topN = function(n) {
  return leaderboard
    .slice()
    .sort((a,b) => b.points - a.points)
    .slice(0,n);
};
