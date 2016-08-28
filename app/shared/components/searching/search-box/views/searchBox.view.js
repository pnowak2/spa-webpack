var Backbone = require('backbone'),
  Mustache = require('mustache'),
  constants = require('app/shared/util/constants'),
  SearchBoxModel = require('../models/searchBox.model'),
  tpl = require('../templates/searchBox.tpl.html');
require('../styles/styles.css');

module.exports = Backbone.View.extend({
  className: 'vlr-searchbox',

  events: {
    'click .vlr-searchbox__search-button': 'didClickSearchButton',
    'click .vlr-searchbox__more-button': 'didClickMoreButton',
    'keypress .vlr-searchbox__input': 'didPressKey'
  },

  initialize: function() {
    this.model = new SearchBoxModel();
    this.listenTo(this.model, 'change', this.didModelChange);
  },

  didClickSearchButton: function(e) {
    e.preventDefault();
    this.requestSearch();
  },

  didClickMoreButton: function(e) {
    e.preventDefault();
    this.toggleMoreButtonState();
    this.trigger('search-box:more');
  },

  didPressKey: function(e) {
    if (e.which === constants.keys.ENTER) {
      e.preventDefault();
      this.requestSearch();
    } else {
      this.trigger('search-box:key-down', e.which);
    }
  },

  toggleMoreButtonStateToClosed: function() {
    this.getMoreButton().removeClass('vlr-searchbox__more-button--open');
  },

  toggleMoreButtonStateToOpened: function() {
    this.getMoreButton().addClass('vlr-searchbox__more-button--open');
  },

  toggleMoreButtonState: function() {
    this.getMoreButton().toggleClass('vlr-searchbox__more-button--open');
  },

  getMoreButton: function() {
    return this.$el.find('.vlr-searchbox__more-button');
  },

  getFormData: function() {
    return {
      keyword: this.keywordInput.val()
    };
  },

  requestSearch: function() {
    this.model.set(this.getFormData());
    this.toggleMoreButtonStateToClosed();
    this.trigger('search-box:search', this.model.toJSON());
  },

  update: function(criteria) {
    if (this.keywordInput) {
      this.keywordInput.val(criteria.keyword);
    }
  },

  render: function() {
    var html = tpl(this.model.toJSON());
    this.$el.html(html);
    this.keywordInput = this.$el.find('input');

    return this;
  }
});