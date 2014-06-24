//place publications here
Meteor.publish('trackers', function() {
  var userId = this.userId;
  return Trackers.find({userId: userId});
});  
