var _ = require('underscore');
var Backbone = require('backbone');

module.exports = Backbone.View.extend({
  initialize: function() {
    this.text = 'hello world.';
  },

  render: function() {
    var tpl = _.template('<b><%= data %></b>');
    this.$el.html(tpl({
      data: this.text
    }));

    return this;
  }
});