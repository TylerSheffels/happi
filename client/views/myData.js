Template.myData.events({
  'click #newTracker' : function(e) {
    e.preventDefault();

    var trackerName = $("#newTrackerName").val();

    var trackerAttributes = {
      trackerName: trackerName,
      userId: Meteor.userId()
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
  },

  'click #dateForward' : function(e) {
    e.preventDefault();
    moveDate(1);
  },
  
  'click #dateBackward' : function(e) {
    e.preventDefault();
    moveDate(-1);
  },

})

var moveDate = function(days) {
  var oldDate = Session.get('currentDate');

  Session.set('currentDate', moment(oldDate).add('d', days).format("MMM DD, YYYY"))
}

Template.myData.activeTracker = function() {
  return Trackers.find()
}

Template.myData.currentDate = function() {
  //Grabs the current date if the session variable doesnt exist yet
  return moment(Session.get('currentDate')).format("MMM DD, YYYY")
}