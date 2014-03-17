Template.tracker.events({
  'click #upVote' : function(e) {
    e.preventDefault();

    var attributes = {
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