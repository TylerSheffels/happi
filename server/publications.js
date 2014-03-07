//place publications here
Meteor.publish('trackers', function() {
  return Trackers.find();
});
