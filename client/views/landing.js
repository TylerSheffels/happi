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
  },

  'click #addDate' : function(e) {
    e.preventDefault();

    var newDateUnscrubbed = $("#dateSelector").val();

    var newDate = moment(newDateUnscrubbed).format("MMM DD, YYYY")

    Session.set('currentDate', newDate);
  }
})

Template.landing.activeTracker = function() {
  return Trackers.find()
}

Template.landing.currentDate = function() {
  //Grabs the current date if the session variable doesnt exist yet
  return moment(Session.get('currentDate')).format("MMM DD, YYYY")
}