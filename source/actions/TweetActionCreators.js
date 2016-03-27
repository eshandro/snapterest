var AppDispatcher = require('../dispatcher/AppDispatcher');

function receiveTweet(tweet) {
	console.log('receiveTweet is called -- a new tweet was received by WebAPIUtils.initializeStream()');
	console.log('tweet ', tweet);
	console.log('tweet.text ', tweet.text);
	var action = {
		type: 'receive_tweet',
		tweet: tweet
	};
	AppDispatcher.dispatch(action);

}

module.exports = {
	receiveTweet: receiveTweet
};