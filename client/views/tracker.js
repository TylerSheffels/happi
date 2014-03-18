Template.tracker.events({
  'click #upVote' : function(e) {
    e.preventDefault();

    var attributes = {
      userID: Meteor.userId(),
      trackerID: this._id,
      vote: 1,
      date: Date()
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