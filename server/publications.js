//place publications here
Meteor.publish('trends', function() {
  var userId = this.userId;
  return Trends.find({userId: userId});
});  
