Meteor.methods({
  createTrend: function(trendAttributes) {
    //check for things like a name already existing, or invalid characters
    trendId = addTrend(trendAttributes);
  },
})