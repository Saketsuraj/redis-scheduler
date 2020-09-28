var Scheduler = require('redis-scheduler');
var scheduler = new Scheduler({ host: 'localhost', port: 6379 });
var expirationTime = 8000;

function eventTriggered(err, key) {
  console.log('Notification: '+ key + ' triggered');
}

scheduler.schedule({ key: 'test-key', expire: expirationTime, handler: eventTriggered }, function (err) {
  console.log("Event scheduled, Please wait for the key to expire");
});
