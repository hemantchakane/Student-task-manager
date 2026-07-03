// Count how many logs exist for each action.
db.activity_logs.aggregate([
  {
    $group: {
      _id: '$action',
      total: { $sum: 1 }
    }
  }
]);

// Show latest activities first.
db.activity_logs.aggregate([
  {
    $sort: {
      timestamp: -1
    }
  }
]);

// Count all activity logs.
db.activity_logs.aggregate([
  {
    $count: 'totalActivities'
  }
]);

