var React = require("react");
var ReactDOM = require('react-dom');

var tweetStyle = {
	position: 'relative',
	display: 'inline-block',
	width: '300px',
	height: '400px',
	margin: '10px'
};

var imageStyle = {
	maxHeight: '400px',
	boxShadow: '0 1px 1px 0 #aaa',
	border: '1px solid #fff'
};

var tweetTextStyle = {
	textAlign: 'left',
	marginTop: '.5em',
	fontWeight: '500',
	fontSize: '.9em'
}


var Tweet = React.createClass({
	propTypes: {
		tweet: function(properties, propertyName, componentName) {
			var tweet = properties[propertyName];

			if (!tweet) {
				return new Error('Tweet must be set.');
			}

			if (!tweet.media) {
				return new Error('Tweet must have an image.');
			}
		},

		onImageClick: React.PropTypes.func
	},

	handleImageClick: function() {
		var tweet = this.props.tweet;
		var onImageClick = this.props.onImageClick;

		if (onImageClick){
			onImageClick(tweet);
		}
	},

	render: function() {
		var tweet = this.props.tweet;
		var tweetMediaUrl = tweet.media[0].url;
		console.log('tweet=', tweet);
		var tweetText = tweet.text;

		return (
			<div style={tweetStyle}>
				<img src={tweetMediaUrl} onClick={this.handleImageClick} style={imageStyle} />
				<p style={tweetTextStyle}>{tweetText}</p>
			</div>
	 	);
	}
});

module.exports = Tweet;