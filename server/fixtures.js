if(Meteor.users.findOne({username: 'tyler'}) ) {
  Trackers.remove({})
  var myUserid = Meteor.users.findOne({username: 'tyler'})._id
  var tracker1 = addTracker({trackerName: 'Happiness', userId: myUserid})
  var tracker2 = addTracker({trackerName: 'Stress', userId: myUserid})
  var tracker3 = addTracker({trackerName: 'Back Pain', userId: myUserid})
  addTracker({trackerName: 'Invisible Tracker', userId: 'acbdfshsdfsdfb'})

  //Add demo data
  addDataToTracker({ userId: myUserid, trackerId: tracker1, vote: -1, date: new Date(2014,2,19) });
  addDataToTracker({ userId: myUserid, trackerId: tracker1, vote: 1, date: new Date(2014,2,20) });
  addDataToTracker({ userId: myUserid, trackerId: tracker1, vote: 1, date: new Date(2014,2,21) });
  addDataToTracker({ userId: myUserid, trackerId: tracker1, vote: -1, date: new Date(2014,2,22) });
  addDataToTracker({ userId: myUserid, trackerId: tracker1, vote: 1, date: new Date(2014,2,23) });
  addDataToTracker({ userId: myUserid, trackerId: tracker1, vote: -1, date: new Date(2014,2,24) });
  addDataToTracker({ userId: myUserid, trackerId: tracker1, vote: -1, date: new Date(2014,2,25) });
  addDataToTracker({ userId: myUserid, trackerId: tracker1, vote: -1, date: new Date(2014,2,26) });
  addDataToTracker({ userId: myUserid, trackerId: tracker1, vote: 1, date: new Date(2014,2,27) });
  addDataToTracker({ userId: myUserid, trackerId: tracker1, vote: 1, date: new Date(2014,2,28) });
  addDataToTracker({ userId: myUserid, trackerId: tracker1, vote: 1, date: new Date(2014,3,1) });
  addDataToTracker({ userId: myUserid, trackerId: tracker1, vote: 1, date: new Date(2014,3,2) });
  addDataToTracker({ userId: myUserid, trackerId: tracker1, vote: 1, date: new Date(2014,3,3) });
  addDataToTracker({ userId: myUserid, trackerId: tracker1, vote: 1, date: new Date(2014,3,4) });
  addDataToTracker({ userId: myUserid, trackerId: tracker1, vote: -1, date: new Date(2014,3,5) });
  addDataToTracker({ userId: myUserid, trackerId: tracker1, vote: -1, date: new Date(2014,3,6) });
  addDataToTracker({ userId: myUserid, trackerId: tracker1, vote: -1, date: new Date(2014,3,7) });
  addDataToTracker({ userId: myUserid, trackerId: tracker1, vote: -1, date: new Date(2014,3,8) });
  addDataToTracker({ userId: myUserid, trackerId: tracker1, vote: -1, date: new Date(2014,3,9) });
  addDataToTracker({ userId: myUserid, trackerId: tracker1, vote: -1, date: new Date(2014,3,10) });
  addDataToTracker({ userId: myUserid, trackerId: tracker1, vote: 1, date: new Date(2014,3,11) });
  addDataToTracker({ userId: myUserid, trackerId: tracker1, vote: -1, date: new Date(2014,3,12) });
  addDataToTracker({ userId: myUserid, trackerId: tracker1, vote: 1, date: new Date(2014,3,13) });
  addDataToTracker({ userId: myUserid, trackerId: tracker1, vote: 1, date: new Date(2014,3,14) });
  addDataToTracker({ userId: myUserid, trackerId: tracker1, vote: 0, date: new Date(2014,3,15) });
  addDataToTracker({ userId: myUserid, trackerId: tracker1, vote: -1, date: new Date(2014,3,16) });
  addDataToTracker({ userId: myUserid, trackerId: tracker1, vote: -1, date: new Date(2014,3,17) });

  addDataToTracker({ userId: myUserid, trackerId: tracker2, vote: -1, date: new Date(2014,2,19) })
  addDataToTracker({ userId: myUserid, trackerId: tracker2, vote: 1, date: new Date(2014,2,20) })
  addDataToTracker({ userId: myUserid, trackerId: tracker2, vote: 1, date: new Date(2014,2,21) })
  addDataToTracker({ userId: myUserid, trackerId: tracker2, vote: 1, date: new Date(2014,2,22) })
  addDataToTracker({ userId: myUserid, trackerId: tracker2, vote: 1, date: new Date(2014,2,23) })
  addDataToTracker({ userId: myUserid, trackerId: tracker2, vote: -1, date: new Date(2014,2,24) })
  addDataToTracker({ userId: myUserid, trackerId: tracker2, vote: -1, date: new Date(2014,2,25) })
  addDataToTracker({ userId: myUserid, trackerId: tracker2, vote: 1, date: new Date(2014,2,26) })
  addDataToTracker({ userId: myUserid, trackerId: tracker2, vote: -1, date: new Date(2014,2,27) })
  addDataToTracker({ userId: myUserid, trackerId: tracker2, vote: -1, date: new Date(2014,2,28) })
  addDataToTracker({ userId: myUserid, trackerId: tracker2, vote: -1, date: new Date(2014,3,1) })
  addDataToTracker({ userId: myUserid, trackerId: tracker2, vote: 1, date: new Date(2014,3,2) })
  addDataToTracker({ userId: myUserid, trackerId: tracker2, vote: -1, date: new Date(2014,3,3) })
  addDataToTracker({ userId: myUserid, trackerId: tracker2, vote: 1, date: new Date(2014,3,4) })
  addDataToTracker({ userId: myUserid, trackerId: tracker2, vote: -1, date: new Date(2014,3,5) })
  addDataToTracker({ userId: myUserid, trackerId: tracker2, vote: -1, date: new Date(2014,3,6) })
  addDataToTracker({ userId: myUserid, trackerId: tracker2, vote: -1, date: new Date(2014,3,7) })
  addDataToTracker({ userId: myUserid, trackerId: tracker2, vote: -1, date: new Date(2014,3,8) })
  addDataToTracker({ userId: myUserid, trackerId: tracker2, vote: -1, date: new Date(2014,3,9) })
  addDataToTracker({ userId: myUserid, trackerId: tracker2, vote: 1, date: new Date(2014,3,10) })
  addDataToTracker({ userId: myUserid, trackerId: tracker2, vote: 1, date: new Date(2014,3,11) })
  addDataToTracker({ userId: myUserid, trackerId: tracker2, vote: 1, date: new Date(2014,3,12) })
  addDataToTracker({ userId: myUserid, trackerId: tracker2, vote: 1, date: new Date(2014,3,13) })
  addDataToTracker({ userId: myUserid, trackerId: tracker2, vote: 1, date: new Date(2014,3,14) })
  addDataToTracker({ userId: myUserid, trackerId: tracker2, vote: 0 , date: new Date(2014,3,15) })
  addDataToTracker({ userId: myUserid, trackerId: tracker2, vote: 1, date: new Date(2014,3,16) })
  addDataToTracker({ userId: myUserid, trackerId: tracker2, vote: -1, date: new Date(2014,3,17) })

  addDataToTracker({ userId: myUserid, trackerId: tracker3, vote: -1, date: new Date(2014,2,19) })
  addDataToTracker({ userId: myUserid, trackerId: tracker3, vote: 1, date: new Date(2014,2,20) })
  addDataToTracker({ userId: myUserid, trackerId: tracker3, vote: 1, date: new Date(2014,2,21) })
  addDataToTracker({ userId: myUserid, trackerId: tracker3, vote: -1, date: new Date(2014,2,22) })
  addDataToTracker({ userId: myUserid, trackerId: tracker3, vote: -1, date: new Date(2014,2,23) })
  addDataToTracker({ userId: myUserid, trackerId: tracker3, vote: 1, date: new Date(2014,2,24) })
  addDataToTracker({ userId: myUserid, trackerId: tracker3, vote: 1, date: new Date(2014,2,25) })
  addDataToTracker({ userId: myUserid, trackerId: tracker3, vote: -1, date: new Date(2014,2,26) })
  addDataToTracker({ userId: myUserid, trackerId: tracker3, vote: -1, date: new Date(2014,2,27) })
  addDataToTracker({ userId: myUserid, trackerId: tracker3, vote: 1, date: new Date(2014,2,28) })
  addDataToTracker({ userId: myUserid, trackerId: tracker3, vote: -1, date: new Date(2014,3,1) })
  addDataToTracker({ userId: myUserid, trackerId: tracker3, vote: 1, date: new Date(2014,3,2) })
  addDataToTracker({ userId: myUserid, trackerId: tracker3, vote: 1, date: new Date(2014,3,3) })
  addDataToTracker({ userId: myUserid, trackerId: tracker3, vote: -1, date: new Date(2014,3,4) })
  addDataToTracker({ userId: myUserid, trackerId: tracker3, vote: -1, date: new Date(2014,3,5) })
  addDataToTracker({ userId: myUserid, trackerId: tracker3, vote: -1, date: new Date(2014,3,6) })
  addDataToTracker({ userId: myUserid, trackerId: tracker3, vote: -1, date: new Date(2014,3,7) })
  addDataToTracker({ userId: myUserid, trackerId: tracker3, vote: -1, date: new Date(2014,3,8) })
  addDataToTracker({ userId: myUserid, trackerId: tracker3, vote: 1, date: new Date(2014,3,9) })
  addDataToTracker({ userId: myUserid, trackerId: tracker3, vote: 1, date: new Date(2014,3,10) })
  addDataToTracker({ userId: myUserid, trackerId: tracker3, vote: 1, date: new Date(2014,3,11) })
  addDataToTracker({ userId: myUserid, trackerId: tracker3, vote: 1, date: new Date(2014,3,12) })
  addDataToTracker({ userId: myUserid, trackerId: tracker3, vote: 1, date: new Date(2014,3,13) })
  addDataToTracker({ userId: myUserid, trackerId: tracker3, vote: 1, date: new Date(2014,3,14) })
  addDataToTracker({ userId: myUserid, trackerId: tracker3, vote: 0 , date: new Date(2014,3,15) })
  addDataToTracker({ userId: myUserid, trackerId: tracker3, vote: 1, date: new Date(2014,3,16) })
  addDataToTracker({ userId: myUserid, trackerId: tracker3, vote: -1, date: new Date(2014,3,17) })
}