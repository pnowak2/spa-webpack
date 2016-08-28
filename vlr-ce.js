var $ = require('jquery'),
  styles = require('./styles/style.css');
Modernizr = require('modernizr'),
SearchBoxComponent = require('./app/shared/components/searching/search-box/main.component'),
searchBoxComponent = new SearchBoxComponent();

$('body').html(searchBoxComponent.render().view.el);