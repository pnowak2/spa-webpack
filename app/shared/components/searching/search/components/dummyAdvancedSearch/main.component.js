var Backbone = require('backbone'),
  Component = require('app/core/component');

module.exports = Component.extend({
  view: new(Backbone.View.extend())(),
  getCriteria: function() {},
  isDirty: function() {},
  update: function() {}
});