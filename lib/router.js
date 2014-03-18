Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('landing', {path: '/'});
});
var requireLogin = function() {
  if (! Meteor.user()) {
    this.render('accessDenied');
    this.stop();
  }
};
Router.before(requireLogin, {only: ['landing']});
Router.before(function() { clearErrors(); });
