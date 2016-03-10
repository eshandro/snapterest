var React = require('react');
var ReactDOM = require('react-dom');
var Tweet = require('./Tweet.react');

var listStyle = {
	padding: '0'
};

var listItemStyle = {
	display: 'inline-block',
	listStyle: 'none'
};

var TweetList = React.createClass({
	getListOfTweetIds: function() {
		return Object.keys(this.props.tweets);
	},

	getTweetElement: function (tweetID) {
		var tweet = this.props.tweets[tweetID];

		var handleRemoveTweetFromCollection = this.props.onRemoveTweetFromCollection;

		var tweetElement;

		if (handleRemoveTweetFromCollection) {
			tweetElement = {
				<Tweet tweet={tweet} onImageClick={handleRemoveTweetFromCollection} />
			};
		} else {
			tweetElement = <Tweet tweet={tweet} />;
		}

		return <li style={listItemStyle} key={tweet.id}>{tweetElement}</li>;
	},

	

})