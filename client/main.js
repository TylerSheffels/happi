Meteor.subscribe('trackers');
Meteor.subscribe('errors');

if(Meteor.isClient){
    Meteor.startup(function(){
      Hooks.init();

      // Need to reroute on login for some reason... probably a todo
      Hooks.onLoggedIn = function () { 
        console.log('hook called')
        Router.go('/myData') 
      }
    });
}

