var React = require('react');
var ReactDOM = require('react-dom');

// Create React Elements and Render
// var h1 = React.createElement('h1', {className: 'header', key: 'header'}, "REACT.JS");
// var p = React.createElement('p', {className: 'content', key:'content'}, "And this is how we do it.");
// var reactFragment = [h1, p];
// var section = React.createElement('section', {className: 'container'}, reactFragment);

// ReactDOM.render(section, document.getElementById('react-application'));

// Create React Elements using JSX
// var headerJSX = <h2>Using JSX</h2>;
// var listJSX =	<ul class="list-of-items">
						// <li class="list-item">Item 1</li>
						// <li class="list-item">Item 2</li>
						// <li class="list-item">Item 3</li>
					// </ul>;
// var reactFragment = [h1, p, headerJSX, listJSX];
// var section = React.createElement('section', {className: 'container'}, reactFragment);

// ReactDOM.render(section, document.getElementById('react-application'));

// Create React Component
// var ReactClass = React.createClass({
// 	render: function() {
// 		// console.log('this.props = ', this.props);
// 		return React.createElement('h1', { className: 'header'}, 'ReactComponent');
// 	}
// });

// var reactComponentElement = React.createElement(ReactClass);
// var reactComponent = ReactDOM.render(reactComponentElement, document.getElementById('react-application'));

// Stateful React reactComponent
 var ReactClass = React.createClass({
	getInitialState: function() {
		return {
			isHeaderHidden: false,
			title: 'Statefule React Component',
			buttonText: 'Hide Header'
		};
	},

	handleClick: function() {
		console.log('handleClick fired');
		console.log('isHeaderHidden before this.setState ', this.state.isHeaderHidden);
		this.setState({
			isHeaderHidden: !this.state.isHeaderHidden
		});
		console.log('isHeaderHidden after this.setState ', this.state.isHeaderHidden);

		console.log('this.buttonText before if ', this.state.buttonText);
		if (!this.state.isHeaderHidden) {
			console.log('if ', this.state.isHeaderHidden);
			this.setState({
				buttonText: 'Show Header'
			});
		} else {
			console.log('else ', this.state.isHeaderHidden);
			this.setState({
				buttonText: 'Hide Header'
			});			
		}
		console.log('this.buttonText after if ', this.state.buttonText);
	},

	render: function() {
		var headerElement = React.createElement('h1', {className: 'header', key: 'header'}, this.state.title);

		var buttonElement = React.createElement('button', {className: 'btn btn-default', onClick: this.handleClick, key:'button'}, this.state.buttonText)

		console.log('buttonElement ', buttonElement);
		console.log('isHeaderHidden ', this.state.isHeaderHidden);
		if (this.state.isHeaderHidden) {
			return React.createElement('div', null, [buttonElement]);
		}

		return React.createElement('div', null,  [buttonElement, headerElement]);
	}
});

var reactComponentElement = React.createElement(ReactClass);
var reactComponent = ReactDOM.render(reactComponentElement, document.getElementById('react-application'));
