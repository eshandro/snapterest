var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');
var CollectionControls = require('./CollectionControls.react');
var TweetList = require('./TweetList.react');
var Header = require('./Header.react');



var Collection = React.createClass({
	createHTMLMarkupStringofTweetList: function () {
		var htmlString = ReactDOMServer.renderToStaticMarkup(
			<TweetList tweets={this.props.tweets} />);

		var htmlMarkup = {
			html: htmlString
		};

		return JSON.stringify(htmlMarkup);
	},

	getListOfTweetIds: function() {
		return Object.keys(this.props.tweets);
	},

	getNumberofTweetsInCollection: function () {
		return this.getListOfTweetIds().length;
	},

	render: function() {
		var numberofTweetsInCollection = this.getNumberofTweetsInCollection();

		if (numberofTweetsInCollection > 0) {

			var tweets = this.props.tweets;
			var htmlMarkup = this.createHTMLMarkupStringofTweetList();
			var removeAllTweetsFromCollection = this.props.onRemoveAllTweetsFromCollection;
			var handleRemoveTweetFromCollection = this.props.onRemoveTweetFromCollection;

			return (
				<div>
					<CollectionControls numberofTweetsInCollection={numberofTweetsInCollection} htmlMarkup={htmlMarkup} 
					onRemoveAllTweetsFromCollection={removeAllTweetsFromCollection} />
					<TweetList tweets={tweets} onRemoveTweetFromCollection={handleRemoveTweetFromCollection} />
				</div>
			);
		}

		return (
			<Header text="Your colleciton is empty" />
		);
	}
});

module.exports = Collection;