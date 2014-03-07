Template.tracker.events({
  'click #upVote' : function(e) {
    e.preventDefault();

    console.log(this._id);
    var attributes = {
      trackerID: this._id,
      vote: 1
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