var React = require('react');
var Stream = require('./Stream.react');
var Collection = require('./Collection.react');

var Application = React.createClass({

	// All of this now handled in the CollectionStore
	// getInitialState: function() {
	// 	return {
	// 		collectionTweets: {}
	// 	};
	// },

	// addTweetToCollection: function(tweet) {
	// 	var collectionTweets = this.state.collectionTweets;

	// 	collectionTweets[tweet.id] = tweet;

	// 	this.setState({
	// 		collectionTweets: collectionTweets
	// 	});
	// },

	// removeTweetFromCollection: function (tweet) {
	// 	var collectionTweets = this.state.collectionTweets;

	// 	delete collectionTweets[tweet.id];

	// 	this.setState({
	// 		collectionTweets: collectionTweets
	// 	});
	// },

	// removeAllTweetsFromCollection: function() {
	// 	this.setState({
	// 		collectionTweets: {}
	// 	});
	// },

	render: function() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-4 text-center">
						{/* <Stream onAddTweetToCollection={this.addTweetToCollection} /> */}
						<Stream />
					</div>
					<div className="col-md-8">
						{/* <Collection*/}
						{/* 	tweets={this.state.collectionTweets} */}
						{/* 	onRemoveTweetFromCollection={this.state.removeTweetFromCollection} */}
						{/* 	onRemoveAllTweetsFromCollection={this.removeAllTweetsFromCollection} />*/}
						<Collection />
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Application;