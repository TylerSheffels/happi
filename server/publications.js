//place publications here
Meteor.publish('trends', function() {
  // var userId = this.userId;
  // return trends.find({userId: userId});
  return Trends.find({});
});  
