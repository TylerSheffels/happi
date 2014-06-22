Meteor.methods({
  createTracker: function(trackerAttributes) {
    //check for things like a name already existing, or invalid characters
    trackerId = addTracker(trackerAttributes);
  },
  addData: function(attributes) {
    //check for anything other than 1, -1. How to get dates?
    trackerId = addDataToTracker(attributes);
    console.log(Trackers.find().fetch())
  }
})