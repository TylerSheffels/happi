Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('landing', {
    path: '/*',
    waitOn: function() { return Meteor.subscribe('trackers')},
    action: function() {
      //If someone is logged in they are seeing data or waiting
      if(Meteor.userId()) {
        if(this.ready())
          this.render('myData')
        else
          this.render('loading')
      } else {
        this.render('landing')
      }
    }
  });
});
var requireLogin = function() {
  if (! Meteor.user()) {
    this.render('accessDenied');
    this.pause();
  }
};

Router.onBeforeAction(function() { clearErrors(); });
