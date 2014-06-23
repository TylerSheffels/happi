Template.tracker.events({
  'click #upVote' : function(e) {
    e.preventDefault();

    currentDate = Session.get('currentDate') || moment().format("MMM DD, YYYY")

    var attributes = {
      userId: Meteor.userId(),
      trackerId: this._id,
      vote: 1,
      date: currentDate
    }

    Meteor.call('addData', attributes,
      function(e, a) {
        if(e) {
          throwError(e.reason);
          Router.go('landing');
        }
      })
  }
})