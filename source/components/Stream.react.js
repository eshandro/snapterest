var React = require('react');
// No longer need this with Flux architecture
// var SnapkiteStreamClient = require('snapkite-stream-client');
var StreamTweet = require('./StreamTweet.react');
var Header = require('./Header.react');
const TweetStore = require('../stores/TweetStore');

var Stream = React.createClass({

	getInitialState: function () {
		return {
			// tweet: null
			tweet: TweetStore.getTweet()
		}
	},

	componentDidMount: function() {
		// The below was used prior to adding Flux architecture
		// SnapkiteStreamClient.initializeStream(this.handleNewTweet);
		TweetStore.addChangeListener(this.onTweetChange);
	},

	componentWillUnmount: function() {
		// SnapkiteStreamClient.destroyStream();
		TweetStore.removeChangeListener(this.onTweetChange);
	},

	// handleNewTweet: function (tweet) {
	// 	console.log('initializeStream() callback runs');
	// 	this.setState({
	// 		tweet: tweet 
	// 	});
	// },

	onTweetChange: function () {
		this.setState({
			tweet: TweetStore.getTweet() 
		});
	},

	render: function() {
		var tweet = this.state.tweet;

		if (tweet) {
			// console.log('In Stream.react.js render tweet exists');
			return (
				<StreamTweet tweet={tweet} />
			);
		}

		// console.log('In Stream.react.js render tweet does not exist');
		return (
			<Header text="Waiting for public photos from Twitter..." />
		);
			
	}

});

module.exports = Stream;
