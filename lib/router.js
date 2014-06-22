Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('landing', {
    path: '/'
  });
});
var requireLogin = function() {
  if (! Meteor.user()) {
    this.render('accessDenied');
    this.pause();
  }
};
Router.onBeforeAction(requireLogin, {only: ['landing']});
Router.onBeforeAction(function() { clearErrors(); });
