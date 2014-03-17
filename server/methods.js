Meteor.methods({
  createTracker: function(trackerAttributes) {
    //check for things like a name already existing, or invalid characters
    trackerID = addTracker(trackerAttributes);
  },
  addData: function(attributes) {
    //check for anything other than 1, -1. How to get dates?
    trackerID = addDataToTracker(attributes);
    console.log(Trackers.find().fetch())
  }
})