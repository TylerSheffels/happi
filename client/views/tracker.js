Template.tracker.events({
  'click #upVote' : function(e) {
    e.preventDefault();

    currentDate = moment(Session.get('currentDate'))

    var attributes = {
      userId: Meteor.userId(),
      trackerId: this._id,
      vote: 1,
      date: currentDate._d
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