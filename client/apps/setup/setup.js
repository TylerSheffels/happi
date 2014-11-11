Template.setup.helpers({
  currentTrend: function() {
    return Trends.find()
  }
});

Template.setup.events({
  'submit form': function(e) {
    e.preventDefault();

console.log('triggered')
    var trendName = $(e.target).find('[name=newTrendName]').val()
    var trendAttributes = {
      trendName: trendName,
      userId: Meteor.userId()
    }

    Meteor.call('createTrend', trendAttributes,
      function(e, a) {
        if(e){
          console.log("Error creating trend");
          console.log(e);
        }
        $('#newTrendName').val(undefined)
      })
  },
})