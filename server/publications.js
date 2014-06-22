//place publications here
Meteor.publish('trackers', function() {
  var userId = Meteor.users.findOne(this.userId)._id;
  return Trackers.find({userId: userId});
});  
