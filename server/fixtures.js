Trackers.remove({})
var myUserid = Meteor.users.findOne({username: 'tyler'})._id
var tracker1 = addTracker({trackerName: 'Happiness', userID: myUserid})
var tracker2 = addTracker({trackerName: 'Stress', userID: myUserid})
var tracker3 = addTracker({trackerName: 'Back Pain', userID: myUserid})
addTracker({trackerName: 'Invisible Tracker', userID: 'acbdfshsdfsdfb'})

//Add demo data
addDataToTracker({ userID: myUserid, trackerID: tracker1, vote: -1, date: new Date(2014,2,19) });
addDataToTracker({ userID: myUserid, trackerID: tracker1, vote: 1, date: new Date(2014,2,20) });
addDataToTracker({ userID: myUserid, trackerID: tracker1, vote: 1, date: new Date(2014,2,21) });
addDataToTracker({ userID: myUserid, trackerID: tracker1, vote: -1, date: new Date(2014,2,22) });
addDataToTracker({ userID: myUserid, trackerID: tracker1, vote: 1, date: new Date(2014,2,23) });
addDataToTracker({ userID: myUserid, trackerID: tracker1, vote: -1, date: new Date(2014,2,24) });
addDataToTracker({ userID: myUserid, trackerID: tracker1, vote: -1, date: new Date(2014,2,25) });
addDataToTracker({ userID: myUserid, trackerID: tracker1, vote: -1, date: new Date(2014,2,26) });
addDataToTracker({ userID: myUserid, trackerID: tracker1, vote: 1, date: new Date(2014,2,27) });
addDataToTracker({ userID: myUserid, trackerID: tracker1, vote: 1, date: new Date(2014,2,28) });
addDataToTracker({ userID: myUserid, trackerID: tracker1, vote: 1, date: new Date(2014,3,1) });
addDataToTracker({ userID: myUserid, trackerID: tracker1, vote: 1, date: new Date(2014,3,2) });
addDataToTracker({ userID: myUserid, trackerID: tracker1, vote: 1, date: new Date(2014,3,3) });
addDataToTracker({ userID: myUserid, trackerID: tracker1, vote: 1, date: new Date(2014,3,4) });
addDataToTracker({ userID: myUserid, trackerID: tracker1, vote: -1, date: new Date(2014,3,5) });
addDataToTracker({ userID: myUserid, trackerID: tracker1, vote: -1, date: new Date(2014,3,6) });
addDataToTracker({ userID: myUserid, trackerID: tracker1, vote: -1, date: new Date(2014,3,7) });
addDataToTracker({ userID: myUserid, trackerID: tracker1, vote: -1, date: new Date(2014,3,8) });
addDataToTracker({ userID: myUserid, trackerID: tracker1, vote: -1, date: new Date(2014,3,9) });
addDataToTracker({ userID: myUserid, trackerID: tracker1, vote: -1, date: new Date(2014,3,10) });
addDataToTracker({ userID: myUserid, trackerID: tracker1, vote: 1, date: new Date(2014,3,11) });
addDataToTracker({ userID: myUserid, trackerID: tracker1, vote: -1, date: new Date(2014,3,12) });
addDataToTracker({ userID: myUserid, trackerID: tracker1, vote: 1, date: new Date(2014,3,13) });
addDataToTracker({ userID: myUserid, trackerID: tracker1, vote: 1, date: new Date(2014,3,14) });
addDataToTracker({ userID: myUserid, trackerID: tracker1, vote: 0, date: new Date(2014,3,15) });
addDataToTracker({ userID: myUserid, trackerID: tracker1, vote: -1, date: new Date(2014,3,16) });
addDataToTracker({ userID: myUserid, trackerID: tracker1, vote: -1, date: new Date(2014,3,17) });

addDataToTracker({ userID: myUserid, trackerID: tracker2, vote: -1, date: new Date(2014,2,19) })
addDataToTracker({ userID: myUserid, trackerID: tracker2, vote: 1, date: new Date(2014,2,20) })
addDataToTracker({ userID: myUserid, trackerID: tracker2, vote: 1, date: new Date(2014,2,21) })
addDataToTracker({ userID: myUserid, trackerID: tracker2, vote: 1, date: new Date(2014,2,22) })
addDataToTracker({ userID: myUserid, trackerID: tracker2, vote: 1, date: new Date(2014,2,23) })
addDataToTracker({ userID: myUserid, trackerID: tracker2, vote: -1, date: new Date(2014,2,24) })
addDataToTracker({ userID: myUserid, trackerID: tracker2, vote: -1, date: new Date(2014,2,25) })
addDataToTracker({ userID: myUserid, trackerID: tracker2, vote: 1, date: new Date(2014,2,26) })
addDataToTracker({ userID: myUserid, trackerID: tracker2, vote: -1, date: new Date(2014,2,27) })
addDataToTracker({ userID: myUserid, trackerID: tracker2, vote: -1, date: new Date(2014,2,28) })
addDataToTracker({ userID: myUserid, trackerID: tracker2, vote: -1, date: new Date(2014,3,1) })
addDataToTracker({ userID: myUserid, trackerID: tracker2, vote: 1, date: new Date(2014,3,2) })
addDataToTracker({ userID: myUserid, trackerID: tracker2, vote: -1, date: new Date(2014,3,3) })
addDataToTracker({ userID: myUserid, trackerID: tracker2, vote: 1, date: new Date(2014,3,4) })
addDataToTracker({ userID: myUserid, trackerID: tracker2, vote: -1, date: new Date(2014,3,5) })
addDataToTracker({ userID: myUserid, trackerID: tracker2, vote: -1, date: new Date(2014,3,6) })
addDataToTracker({ userID: myUserid, trackerID: tracker2, vote: -1, date: new Date(2014,3,7) })
addDataToTracker({ userID: myUserid, trackerID: tracker2, vote: -1, date: new Date(2014,3,8) })
addDataToTracker({ userID: myUserid, trackerID: tracker2, vote: -1, date: new Date(2014,3,9) })
addDataToTracker({ userID: myUserid, trackerID: tracker2, vote: 1, date: new Date(2014,3,10) })
addDataToTracker({ userID: myUserid, trackerID: tracker2, vote: 1, date: new Date(2014,3,11) })
addDataToTracker({ userID: myUserid, trackerID: tracker2, vote: 1, date: new Date(2014,3,12) })
addDataToTracker({ userID: myUserid, trackerID: tracker2, vote: 1, date: new Date(2014,3,13) })
addDataToTracker({ userID: myUserid, trackerID: tracker2, vote: 1, date: new Date(2014,3,14) })
addDataToTracker({ userID: myUserid, trackerID: tracker2, vote: 0 , date: new Date(2014,3,15) })
addDataToTracker({ userID: myUserid, trackerID: tracker2, vote: 1, date: new Date(2014,3,16) })
addDataToTracker({ userID: myUserid, trackerID: tracker2, vote: -1, date: new Date(2014,3,17) })

addDataToTracker({ userID: myUserid, trackerID: tracker3, vote: -1, date: new Date(2014,2,19) })
addDataToTracker({ userID: myUserid, trackerID: tracker3, vote: 1, date: new Date(2014,2,20) })
addDataToTracker({ userID: myUserid, trackerID: tracker3, vote: 1, date: new Date(2014,2,21) })
addDataToTracker({ userID: myUserid, trackerID: tracker3, vote: -1, date: new Date(2014,2,22) })
addDataToTracker({ userID: myUserid, trackerID: tracker3, vote: -1, date: new Date(2014,2,23) })
addDataToTracker({ userID: myUserid, trackerID: tracker3, vote: 1, date: new Date(2014,2,24) })
addDataToTracker({ userID: myUserid, trackerID: tracker3, vote: 1, date: new Date(2014,2,25) })
addDataToTracker({ userID: myUserid, trackerID: tracker3, vote: -1, date: new Date(2014,2,26) })
addDataToTracker({ userID: myUserid, trackerID: tracker3, vote: -1, date: new Date(2014,2,27) })
addDataToTracker({ userID: myUserid, trackerID: tracker3, vote: 1, date: new Date(2014,2,28) })
addDataToTracker({ userID: myUserid, trackerID: tracker3, vote: -1, date: new Date(2014,3,1) })
addDataToTracker({ userID: myUserid, trackerID: tracker3, vote: 1, date: new Date(2014,3,2) })
addDataToTracker({ userID: myUserid, trackerID: tracker3, vote: 1, date: new Date(2014,3,3) })
addDataToTracker({ userID: myUserid, trackerID: tracker3, vote: -1, date: new Date(2014,3,4) })
addDataToTracker({ userID: myUserid, trackerID: tracker3, vote: -1, date: new Date(2014,3,5) })
addDataToTracker({ userID: myUserid, trackerID: tracker3, vote: -1, date: new Date(2014,3,6) })
addDataToTracker({ userID: myUserid, trackerID: tracker3, vote: -1, date: new Date(2014,3,7) })
addDataToTracker({ userID: myUserid, trackerID: tracker3, vote: -1, date: new Date(2014,3,8) })
addDataToTracker({ userID: myUserid, trackerID: tracker3, vote: 1, date: new Date(2014,3,9) })
addDataToTracker({ userID: myUserid, trackerID: tracker3, vote: 1, date: new Date(2014,3,10) })
addDataToTracker({ userID: myUserid, trackerID: tracker3, vote: 1, date: new Date(2014,3,11) })
addDataToTracker({ userID: myUserid, trackerID: tracker3, vote: 1, date: new Date(2014,3,12) })
addDataToTracker({ userID: myUserid, trackerID: tracker3, vote: 1, date: new Date(2014,3,13) })
addDataToTracker({ userID: myUserid, trackerID: tracker3, vote: 1, date: new Date(2014,3,14) })
addDataToTracker({ userID: myUserid, trackerID: tracker3, vote: 0 , date: new Date(2014,3,15) })
addDataToTracker({ userID: myUserid, trackerID: tracker3, vote: 1, date: new Date(2014,3,16) })
addDataToTracker({ userID: myUserid, trackerID: tracker3, vote: -1, date: new Date(2014,3,17) })
