require('./styles/style.css');

var $ = require('jquery'),
  HelloView = require('./app/content.js'),
  helloView = new HelloView();

$('body').html(helloView.render().el);