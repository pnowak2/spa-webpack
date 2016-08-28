var _ = require('underscore'),
  Backbone = require('backbone'),
  Event = function() {};

_.extend(Event.prototype, Backbone.Events);

module.exports = Event;