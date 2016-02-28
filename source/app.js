var React = require('react');
var ReactDOM = require('react-dom');

var h1 = React.createElement('h1', {className: 'header', key: 'header'}, "REACT.JS");
var p = React.createElement('p', {className: 'content', key:'content'}, "And this is how we do it.");
// var reactFragment = [h1, p];
// var section = React.createElement('section', {className: 'container'}, reactFragment);

// ReactDOM.render(section, document.getElementById('react-application'));

var headerJSX = <h2>Using JSX</h2>;
var listJSX =	<ul class="list-of-items">
						<li class="list-item">Item 1</li>
						<li class="list-item">Item 2</li>
						<li class="list-item">Item 3</li>
					</ul>;
var reactFragment = [h1, p, headerJSX, listJSX];
var section = React.createElement('section', {className: 'container'}, reactFragment);

ReactDOM.render(section, document.getElementById('react-application'));