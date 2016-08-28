var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  defaults: {
    id: '',
    title: '',
    hint: '',
    selected: false,
    disabled: false
  },

  select: function() {
    this.set('selected', true);
  },

  unselect: function() {
    this.set('selected', false);
  },

  isSelected: function() {
    return this.get('selected');
  }
});