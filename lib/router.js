Router.configure({
  layoutTemplate: 'layout'
});

// Logged in
Router.route('/', {name: 'landing'});

Router.route('/setup', {name: 'setup'});
Router.route('/entry', {name: 'entry'});

