var React = require('react');
var SnapkiteStreamClient = require('snapkite-stream-client');
var StreamTweet = require('./StreamTweet.react');
var Header = require('./Header.react');

var Stream = React.createClass({

	getInitialState: function () {
		return {
			tweet: null
		}
	},

	componentDidMount: function() {
		SnapkiteStreamClient.initializeStream(this.handleNewTweet);
	},

	componentWillUnmount: function() {
		SnapkiteStreamClient.destroyStream();
	},

	handleNewTweet: function (tweet) {
		console.log('initializeStream() callback runs');
		this.setState({
			tweet: tweet 
		});
	},

	render: function() {
		var tweet = this.state.tweet;

		if (tweet) {
			// console.log('In Stream.react.js render tweet exists');
			return (
				<StreamTweet tweet={tweet} onAddTweetToCollection={this.props.onAddTweetToCollection} />
			);
		}

		// console.log('In Stream.react.js render tweet does not exist');
		return (
			<Header text="Waiting for public photos from Twitter..." />
		);
			
	}

});

module.exports = Stream;
