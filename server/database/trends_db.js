addTrend = function(trendAttributes) {
  return Trends.insert({
    trendName: trendAttributes.trendName
    , history: []
    //, userId: trendAttributes.userId
  });
}