var Component = require('app/core/component'),
  SearchBoxView = require('./views/searchBox.view');

module.exports = Component.extend({
  initialize: function() {
    this.view = new SearchBoxView();

    this.listenTo(this.view, 'search-box:search', function(searchCriteria) {
      this.trigger('search-box:search', searchCriteria);
    });

    this.listenTo(this.view, 'search-box:more', function() {
      this.trigger('search-box:more');
    });

    this.listenTo(this.view, 'search-box:key-down', function(keyCode) {
      this.trigger('search-box:key-down', keyCode);
    });
  },

  toggleMoreButtonStateToOpened: function() {
    this.view.toggleMoreButtonStateToOpened();
  },

  toggleMoreButtonStateToClosed: function() {
    this.view.toggleMoreButtonStateToClosed();
  },

  update: function(criteria) {
    this.view.update(criteria);
  }
});