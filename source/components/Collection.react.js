var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');
var CollectionControls = require('./CollectionControls.react');
var TweetList = require('./TweetList.react');
var Header = require('./Header.react');
const CollectionUtils = require('../utils/CollectionUtils');
const CollectionStore = require('../stores/CollectionStore');


var Collection = React.createClass({
	// Prior to Flux architecture
	// createHTMLMarkupStringofTweetList: function () {
	// 	var htmlString = ReactDOMServer.renderToStaticMarkup(
	// 		<TweetList tweets={this.props.tweets} />);

	// 	var htmlMarkup = {
	// 		html: htmlString
	// 	};

	// 	return JSON.stringify(htmlMarkup);
	// },

	// getListOfTweetIds: function() {
	// 	return Object.keys(this.props.tweets);
	// },

	// getNumberOfTweetsInCollection: function () {
	// 	return this.getListOfTweetIds().length;
	// },

	// render: function() {
	// 	var numberOfTweetsInCollection = this.getNumberOfTweetsInCollection();

	// 	if (numberOfTweetsInCollection > 0) {

	// 		var tweets = this.props.tweets;
	// 		var htmlMarkup = this.createHTMLMarkupStringofTweetList();
	// 		var removeAllTweetsFromCollection = this.props.onRemoveAllTweetsFromCollection;
	// 		var handleRemoveTweetFromCollection = this.props.onRemoveTweetFromCollection;

	// 		return (
	// 			<div>
	// 				<CollectionControls numberOfTweetsInCollection={numberOfTweetsInCollection} htmlMarkup={htmlMarkup} 
	// 				onRemoveAllTweetsFromCollection={removeAllTweetsFromCollection} />
	// 				<TweetList tweets={tweets} onRemoveTweetFromCollection={handleRemoveTweetFromCollection} />
	// 			</div>
	// 		);
	// 	}

	// 	return (
	// 		<Header text="Your collection is empty" />
	// 	);
	// }
	
	getInitialState: function() {
		return {
			collectionTweets: CollectionStore.getCollectionTweets() 
		};
	},

	componentDidMount: function() {
		CollectionStore.addChangeListener(this.onCollectionChange);
	},

	componentWillUnmount: function() {
		CollectionStore.removeChangeListener(this.onCollectionChange);
	},

	onCollectionChange: function() {
		this.setState({
			collectionTweets: CollectionStore.getCollectionTweets() 
		});
	},

	createHTMLMarkupStringofTweetList: function() {
		var htmlString = ReactDOMServer.renderToStaticMarkup(
			<TweetList tweets={this.state.collectionTweets} />
		);

		var htmlMarkup = {
			html: htmlString
		};

		return JSON.stringify(htmlMarkup);
	},

	render: function() {

		var collectionTweets = this.state.collectionTweets;
		var numberOfTweetsInCollection = CollectionUtils.getNumberOfTweetsInCollection(collectionTweets);
		var htmlMarkup;

		if (numberOfTweetsInCollection > 0) {

			htmlMarkup = this.createHTMLMarkupStringofTweetList();

			return (
				<div>
					<CollectionControls
						numberOfTweetsInCollection={numberOfTweetsInCollection} 
						htmlMarkup={htmlMarkup} />
					<TweetList tweets={collectionTweets} />

				</div>
			);
		}
		return <Header text="Your collection is empty" />;
	}

});

module.exports = Collection;