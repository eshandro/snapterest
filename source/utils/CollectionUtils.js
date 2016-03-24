function getNumberOfTweetsInCollection(collection) {
	var TweetUtils = require('./TweetUtils');
	console.log('TweetUtils', TweetUtils);

	var listOfCollectionTweetIds = TweetUtils.getListOfTweetIds(collection);
	console.log('listOfCollectionTweetIds ', listOfCollectionTweetIds);
	return listOfCollectionTweetIds.length;
}

function isEmptyCollection(collection) {
	return (getNumberOfTweetsInCollection(collection) === 0);
}

module.exports = {
	getNumberOfTweetsInCollection: getNumberOfTweetsInCollection,
	isEmptyCollection: isEmptyCollection
};