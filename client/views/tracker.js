Template.tracker.events({
  'click #upVote' : function(e) {
    e.preventDefault();

    addDataToTracker(1, this._id)
  },

  'click #downVote' : function(e) {
    e.preventDefault();

    addDataToTracker(-1, this._id)
  },
})

var addDataToTracker = function (vote, _id) {
  currentDate = moment(Session.get('currentDate'))

  var attributes = {
    userId: Meteor.userId(),
    trackerId: _id,
    vote: vote,
    date: currentDate._d
  }

  Meteor.call('addData', attributes,
    function(e, a) {
      if(e) {
        throwError(e.reason);
        Router.go('landing');
      }
    }
  )
}