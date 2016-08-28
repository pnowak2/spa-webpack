var Component = require('app/core/component'),
  AdvancedSearchView = require('./views/advancedSearch.view');

module.exports = Component.extend({
  initialize: function() {
    this.view = new AdvancedSearchView();
  },

  getCriteria: function() {
    return this.view.getCriteria();
  },

  isDirty: function() {
    return this.view.isDirty();
  },

  update: function(criteria) {
    this.view.update(criteria);
  }
});