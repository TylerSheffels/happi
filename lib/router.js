Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('landing', {
    path: '/',
    waitOn: function() { return Meteor.subscribe('trackers')},
    action: function() {
      if(this.ready())
        this.render()
      else
        this.render('loading')
    }
  });
});
var requireLogin = function() {
  if (! Meteor.user()) {
    this.render('accessDenied');
    this.pause();
  }
};
//Router.onBeforeAction(requireLogin, {only: ['landing']});
Router.onBeforeAction(function() { clearErrors(); });
