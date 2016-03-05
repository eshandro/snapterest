var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.react');
var Tweet = require('./Tweet.react');

var StreamTweet = React.createClass({

	getInitialState: function() {
		console.log('[Snapterest] StreamTweet: 1. Running getInitialState()');
		return {
			numberOfCharactersIsIncreasing: null,
			headerText: null
		};
	},

	componentWillMount: function() {
		console.log('[Snapterest] StreamTweet: 2. Running componentWillMount()');
		this.setState({
			numberOfCharactersIsIncreasing: true,
			headerText: 'Latest public photo from Twitter' 
		});

		window.snapterest = {
			numberOfRecivedTweets: 1,
			numberOfDisplayedTweets: 1
		};
	},

	render: function() {
		console.log('[Snapterest] StreamTweet: Running Render()');

		return (
			<section>
				<Header text={this.state.headerText} />
				<Tweet
					tweet={this.props.Tweet} 
					onImageClick={this.props.onAddTweetToCollection} />
			</section>
		);
	}

});

module.exports = StreamTweet;