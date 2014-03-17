var assert = require('assert');

suite('Trackers', function(){

  test('Adding a tracker', function(done, server) {
    server.eval(function(){
      var trackerAttributes = {
        trackerName: 'trackerName'
      };

      addTracker(trackerAttributes);

      emit('options', Trackers.findOne())
    })

    server.once('options', function(options) {
      assert.equal(options.length, 1);
      done();
    });
  });
})