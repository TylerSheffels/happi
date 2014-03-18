//place publications here
Meteor.publish('trackers', function() {
  var userID = Meteor.users.findOne(this.userId)._id;
  return Trackers.find({userID: userID});
});
