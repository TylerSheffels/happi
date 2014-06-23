addTracker = function(trackerAttributes) {
  return Trackers.insert( {
    trackerName: trackerAttributes.trackerName
    , history: []
    , userId: trackerAttributes.userId
  });
};
addDataToTracker = function(attributes) {
  var date = roundDate(attributes.date)
  var vote = attributes.vote
  var data = [date, vote]
  
  //extract the old history
  prevHistory = Trackers.findOne( {_id: attributes.trackerId} ).history || []

  //Remove an old entry for this date
  newHistory = _.reject(prevHistory, function(item) {
    return item[0] === date;
  })

  //Insert the new value
  indexToInsertAt = _.sortedIndex(newHistory, data, function(item) {
    return item[0]
  })

  newHistory.splice(indexToInsertAt, 0, data)

  return Trackers.update( {_id: attributes.trackerId},
      {$set: {history: newHistory } } )
};


//helpers
var roundDate = function(date) {
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);

  return date;
}