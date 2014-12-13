Alerts = new Mongo.Collection(null)

Template.alerts.helpers({
  alerts: function() {
    return Alerts.find();
  }
});

throwAlert = function(message, alertClass) {
  Alerts.insert({
    message: message,
    alertClass: alertClass
  });
};

throwError = function(message) {
  throwAlert(message, 'alert-danger')
}
