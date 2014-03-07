Meteor.methods({
  createTracker: function(trackerAttributes) {
    trackerId = addTracker(trackerAttributes);
  }
})