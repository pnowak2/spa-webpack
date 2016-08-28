require('styles/reset.css');

var $ = require('jquery'),
  styles = require('./styles/style.css'),
  Modernizr = require('modernizr'),
  SearchComponent = require('./app/shared/components/searching/search/main.component'),
  CEAdvancedSearchComponent = require('./app/ce/components/landing-page/searching/advanced-search/main.component'),
  searchComponent = new SearchComponent({
    advancedSearchComponent: new CEAdvancedSearchComponent()
  });


$('.search-container').html(searchComponent.render().view.el);