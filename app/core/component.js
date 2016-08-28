var Backbone = require('backbone'),
  Module = require('./module');

module.exports = Module.extend({
  view: new(Backbone.View.extend())(),

  render: function() {
    this.view.render();
    return this;
  },

  hide: function() {
    this.view.$el.hide();
    return this;
  },

  show: function() {
    this.view.$el.show();
    return this;
  },

  toggle: function(shouldBeVisible) {
    this.view.$el.toggle(shouldBeVisible);
    return this;
  }
});