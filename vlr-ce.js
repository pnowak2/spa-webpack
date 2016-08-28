var $ = require('jquery'),
  Modernizr = require('modernizr'),
  SearchBoxComponent = require('./app/shared/components/searching/search-box/main.component'),
  searchBoxComponent = new SearchBoxComponent();

$('body').html(searchBoxComponent.render().view.el);
console.log(Modernizr);