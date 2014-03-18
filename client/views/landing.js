Template.landing.events({
  'click #newTracker' : function(e) {
    e.preventDefault();

    var trackerName = $("#newTrackerName").val();

    var trackerAttributes = {
      trackerName: trackerName
    }

    Meteor.call('createTracker', trackerAttributes,
      function(e, a) {
        if(e) {
          throwError(e.reason);
          Router.go('test');
        }
      })
  }
})

Template.landing.activeTracker = function() {
  return Trackers.find()
}