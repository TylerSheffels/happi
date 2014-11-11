Router.configure({
  layoutTemplate: 'layout'
});

// Logged in
Router.route('/', {name: 'landing'});

Router.route('/setup', {name: 'setup'});
Router.route('/entry', {name: 'entry'});

var requireLogin = function() {
  if (! Meteor.user()) {
    this.render('accessDenied');
  } else {
    this.next();
  }
}

Router.onBeforeAction(requireLogin, {only: ['setup', 'entry', 'reports']});
