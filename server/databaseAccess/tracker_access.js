addTracker = function(trackerAttributes) {
  return Trackers.insert( {
    trackerName: trackerAttributes.trackerName
    , history: []
    , userID: trackerAttributes.userID
  });
};
addDataToTracker = function(attributes) {
  var date = attributes.date
  var vote = attributes.vote
  var data = [date, vote]
  return Trackers.update( {_id: attributes.trackerID},
      {$push: {history: data } } )
};