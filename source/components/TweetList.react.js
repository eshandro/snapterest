var React = require('react');
var ReactDOM = require('react-dom');
var Tweet = require('./Tweet.react');
const CollectionActionCreators = require('../actions/CollectionActionCreators');


var listStyle = {
	padding: '0'
};

var listItemStyle = {
	display: 'inline-block',
	listStyle: 'none'
};

var TweetList = React.createClass({
	removeTweetFromCollection: function(tweet) {
		CollectionActionCreators.removeTweetFromCollection(tweet.id);
	},

	getListOfTweetIds: function() {
		return Object.keys(this.props.tweets);
	},

	getTweetElement: function (tweetID) {
		var tweet = this.props.tweets[tweetID];

		// var handleRemoveTweetFromCollection = this.props.onRemoveTweetFromCollection;
		var handleRemoveTweetFromCollection = this.removeTweetFromCollection;

		var tweetElement;

		if (handleRemoveTweetFromCollection) {
			tweetElement = (
				<Tweet tweet={tweet} onImageClick={handleRemoveTweetFromCollection} />
			);
		} else {
			tweetElement = <Tweet tweet={tweet} />;
		}

		return <li style={listItemStyle} key={tweet.id}>{tweetElement}</li>;
	},

	render: function() {
		var tweetElements = this.getListOfTweetIds().map(this.getTweetElement);

		return (
			<ul style={listStyle}>
				{tweetElements}
			</ul>
		);
	}

});

module.exports = TweetList;