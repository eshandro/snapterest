jest.autoMockOff();

describe('Collection Utils module', function() {

	var CollectionUtils = require('../CollectionUtils');
	console.log('CollectionUtils ', CollectionUtils);
	var collectionTweetsMock = {
		collectionTweet7: {},
		collectionTweet8: {},
		collectionTweet9: {}
	};
	console.log('collectionTweetsMock ', collectionTweetsMock);

	it('returns a number of tweets in collection', function getNumberOfTweetsInCollection() {
		var actualNumberOfTweetsInCollection = CollectionUtils.getNumberOfTweetsInCollection(collectionTweetsMock);
		var expectedNumberOfTweetsInCollection = 3;

		expect(actualNumberOfTweetsInCollection).toBe(expectedNumberOfTweetsInCollection);
	});

	it ('checks if collection is empty', function isNotEmptyCollection() {
		var actualIsEmptyCollectionValue = CollectionUtils.isEmptyCollection(collectionTweetsMock);
		// var expectedIsEmptyCollectionValue = true;
		
		expect(actualIsEmptyCollectionValue).toBeDefined();
		expect(actualIsEmptyCollectionValue).toBe(false);
		expect(actualIsEmptyCollectionValue).not.toBe(true);
	});

});