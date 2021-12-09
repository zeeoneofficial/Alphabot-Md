const
	chai = require('chai'),
	{ expect } = chai;

const Instagram = require('.');

const {
	SESSION_ID,
	PUBLIC_PROFILE,
	PUBLIC_PROFILE_ID,
	PRIVATE_PROFILE,
	STORY_PROFILE_ID,
	STORY_PROFILE_USERNAME,
	HASHTAG = 'cat',
	LOCATION_ID = '6889842',
	POST,
	SEARCH_PROFILE,
	SEARCH_HASHTAG = 'cats',
	SEARCH_LOCATION = 'Paris',
	GET_COUNT = 20
} = process.env;

chai.use(require('chai-as-promised'));

describe('scraper-instagram', () => {
	describe('Authentication', () => {
		(SESSION_ID ? describe : describe.skip)('By session ID', () => {
			let client;
			before(() => client = new Instagram());
			it('authenticates', () => expect(client.authBySessionId(SESSION_ID)).to.be.fulfilled);
			describe('Get own profile', () => {
				let profile;
				it(
					'gets profile',
					async () => expect(profile = await client.getProfile()).to.be.an('object')
				);
				it('has access', () => expect(profile.access).to.be.true);
			});
			describe('Account', () => {
				it('gets notifications', () => expect(client.getAccountNotifications()).to.be.fulfilled);
				it('gets stories', () => expect(client.getAccountStories()).to.be.fulfilled).timeout(5000);
			});
		});
	});
	describe('Get profile', () => {
		let client;
		before(() => client = new Instagram());
		(PUBLIC_PROFILE ? describe : describe.skip)('Get public profile', () => {
			let profile;
			it(
				'gets profile',
				async () => expect(profile = await client.getProfile(PUBLIC_PROFILE)).to.be.an('object')
			);
			it('has access', () => expect(profile.access).to.be.true);
		});
		(PRIVATE_PROFILE ? describe : describe.skip)('Get private profile', () => {
			describe('Without authentication', () => {
				let profile;
				it(
					'gets profile',
					async () => expect(profile = await client.getProfile(PRIVATE_PROFILE)).to.be.an('object')
				);
				it('has no access', () => expect(profile.access).to.be.false);
			});
			(SESSION_ID ? describe : describe.skip)('With authentication', () => {
				before(async () => await client.authBySessionId(SESSION_ID));
				let profile;
				it(
					'gets profile',
					async () => expect(profile = await client.getProfile(PRIVATE_PROFILE)).to.be.an('object')
				);
				it('has access', () => expect(profile.access).to.be.true);
			});
		});
	});
	(SESSION_ID ? describe : describe.skip)('Get profile story', () => {
		let client;
		before(async () => {
			client = new Instagram();
			await client.authBySessionId(SESSION_ID);
		});
		(STORY_PROFILE_ID ? it : it.skip)('gets story by ID', () => expect(client.getProfileStoryById(STORY_PROFILE_ID)).to.be.fulfilled).timeout(5000);
		(STORY_PROFILE_USERNAME ? it : it.skip)('gets story by username', () => expect(client.getProfileStory(STORY_PROFILE_USERNAME)).to.be.fulfilled).timeout(5000);
	});
	(SESSION_ID ? describe : describe.skip)('Get profile posts', () => {
		let client;
		before(async () => {
			client = new Instagram();
			await client.authBySessionId(SESSION_ID);
		});
		(PUBLIC_PROFILE ? it : it.skip)('gets posts by ID', () => expect(client.getProfilePostsById(PUBLIC_PROFILE_ID, +GET_COUNT)).to.be.fulfilled).timeout(5000);
		(PUBLIC_PROFILE_ID ? it : it.skip)('gets posts by username', () => expect(client.getProfilePosts(PUBLIC_PROFILE, +GET_COUNT)).to.be.fulfilled).timeout(5000);
	});
	describe('Get hashtag', () => {
		let client;
		before(() => client = new Instagram());
		it('gets hashtag', () => expect(client.getHashtag(HASHTAG)).to.be.fulfilled).timeout(5000);
		(SESSION_ID ? it : it.skip)('gets hashtag posts', () => {
			before(async () => await client.authBySessionId(SESSION_ID));
			expect(client.getHashtagPosts(HASHTAG, +GET_COUNT)).to.be.fulfilled;
		});
	});
	describe('Get location', () => {
		let client;
		before(() => client = new Instagram());
		it('gets location by ID', () => expect(client.getLocation(LOCATION_ID)).to.be.fulfilled).timeout(8000);
		(SESSION_ID ? it : it.skip)('gets location posts by ID', () => {
			before(async () => await client.authBySessionId(SESSION_ID));
			expect(client.getLocationPostsById(LOCATION_ID, +GET_COUNT)).to.be.fulfilled;
		});
	});
	(POST ? describe : describe.skip)('Get post', () => {
		let client;
		before(() => client = new Instagram());
		it('gets post', () => expect(client.getPost(POST)).to.be.fulfilled);
		(SESSION_ID ? it : it.skip)('gets post comments', () => {
			before(async () => await client.authBySessionId(SESSION_ID));
			expect(client.getPostComments(POST, +GET_COUNT)).to.be.fulfilled;
		});
	});
	describe('Search', () => {
		let client;
		before(() => client = new Instagram());
		(SEARCH_PROFILE ? it : it.skip)('searches profile', () => expect(client.searchProfile(SEARCH_PROFILE)).to.be.fulfilled);
		(SEARCH_HASHTAG ? it : it.skip)('searches hashtag', () => expect(client.searchHashtag(SEARCH_HASHTAG)).to.be.fulfilled);
		(SEARCH_LOCATION ? it : it.skip)('searches location', () => expect(client.searchLocation(SEARCH_LOCATION)).to.be.fulfilled);
	});
});