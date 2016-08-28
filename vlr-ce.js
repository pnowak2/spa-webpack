require('styles/reset.css');
var React = require('react');
var ReactDom = require('react-dom');

var ind = require('./index.jsx');

var $ = require('jquery'),
  styles = require('./styles/style.css'),
  Modernizr = require('modernizr'),
  SearchComponent = require('./app/shared/components/searching/search/main.component'),
  CEAdvancedSearchComponent = require('./app/ce/components/landing-page/searching/advanced-search/main.component'),
  searchComponent = new SearchComponent({
    advancedSearchComponent: new CEAdvancedSearchComponent()
  });

$('.search-container').html(searchComponent.render().view.el);
ReactDom.render(React.createElement(ind.App), document.getElementById('react-container'));