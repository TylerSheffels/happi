addTracker = function(trackerAttributes) {
  return Trackers.insert( {
    trackerName: trackerAttributes.trackerName
    , history: []
    , userId: trackerAttributes.userId
  });
};
addDataToTracker = function(attributes) {
  var date = attributes.date
  var vote = attributes.vote
  var data = [date, vote]
  return Trackers.update( {_id: attributes.trackerId},
      {$push: {history: data } } )
};