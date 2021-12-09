# ig-scraper

Scrape data from Instagram without applying for the authenticated API.

## Getting started

### Prerequisites

- NodeJS
- NPM
- Yarn

### Install

From [npm](https://www.npmjs.com/package/scraper-instagram)

`yarn add scraper-instagram`

or

`npm i scraper-instagram --save`

### Test

- `git clone https://git.kaki87.net/KaKi87/ig-scraper.git`
- `yarn install` or `npm install`
- `yarn test` or `npm run test`

Optional environment variables for more complete testing :
- `SESSION_ID` : a session ID for authentication test and authenticated tests
- `PUBLIC_PROFILE` : a public profile to access
- `PRIVATE_PROFILE` : a private profile to access
- `STORY_PROFILE_ID` : a profile ID with a story to read
- `STORY_PROFILE_USERNAME` : a profile username with a story to read
- `HASHTAG` (default value : `cat`) : a hashtag to fetch
- `LOCATION_ID` (default value : `6889842` aka. Paris) : a location to fetch
- `POST` : a post to fetch
- `SEARCH_PROFILE` : a profile to search for
- `SEARCH_HASHTAG` (default value : `cats`) : a hashtag to search for
- `SEARCH_LOCATION` (default value : `Paris`) : a location to search for

Methods not covered by tests :
- `subscribeUserPosts`
- `subscribeHashtagPosts`
- `subscribeAccountNotifications`

### Usage

```js
const Insta = require('scraper-instagram');
const InstaClient = new Insta();
```

#### Authentication

Authentication allows you to access private profile as long as you follow them.

##### Importing your session ID

- Go to instagram.com
- Login *(if not already logged in)*
- Open development tools *(`Ctrl` + `Shift` + `I`)*
- Get the `sessionid` cookie value
	- For chromium-based browsers : `application` tab
	- For firefox-based browsers : `storage` tab

##### Code

```js
InstaClient.authBySessionId(yourSessionId)
	.then(account => console.log(account))
	.catch(err => console.error(err));
```

If authentication is successfull, you'll get the form data from `accounts/edit` :

```json
{
	"first_name": "",
	"last_name": "",
	"email": "",
	"is_email_confirmed": true,
	"is_phone_confirmed": true,
	"username": "",
	"phone_number": "",
	"gender": 1,
	"birthday": null,
	"biography": "",
	"external_url": "",
	"chaining_enabled": true,
	"presence_disabled": false,
	"business_account": false,
	"usertag_review_enabled": false
}
```

If your session ID is invalid, you'll get the `401` error.

*Username/password authentication may be supported in the future.*

#### Get

These methods allows you to get specific elements from Instagram while you know exactly what you're looking for.

##### Errors handling

`get` may return errors in the two following cases.

- Request error : failed to get data from Instagram (HTTP code)
- Parsing error : failed to parse data returned by Instagram (`406`)
- No content : nothing to parse (`204`)
- Authentication required : session ID required to access data (`401`)
- Too many requests : rate limit exceeded (`429`)
- Conflict : automation detected, password reset required (`409`)

##### Get profile by username

```js
InstaClient.getProfile(username)
	.then(profile => console.log(profile))
	.catch(err => console.error(err));
```

Result

- `id` *string* - Instagram identifier, only used for stories
- `name` *string* - public full [name](https://help.instagram.com/583107688369069)
- `pic` *url* - public profile [picture](https://help.instagram.com/557544397610546)
- `bio` *string* - public biography
<br>`website` *url* - public website
<br>[more info about bio & website](https://help.instagram.com/362497417173378)
- `private` *boolean* - account [private state](https://help.instagram.com/448523408565555)
- `access` *boolean* - access to the profile's feed
<br>In order to have access to a private account's feed, you must have sent him a follow request that he accepted.
- `verified` *boolean* - account [verified state](https://help.instagram.com/854227311295302)
- `followers` *integer* - number of users following this profile
- `following` *integer* - number of users this profile follows
- `posts` *integer* - number of posts this profile published
- `lastPosts` *array of posts* - last posts
<br>This property is empty (`[]`) when the profile doesn't have any post but `null` if `access` is `false` (denied).
- `link` *url* - link to the profile's page
- `business` *string* - business category (when applicable and profile unblocked)
- `user` *object* - user relevant properties **(while authenticated)** :
	- `mutualFollowers` *array of usernames* - people following you and this profile
	- `blocking` *boolean* - you blocked this profile
	- `blocked` *boolean* - this profile blocked you (only available property in `user` while `true`)
	- `requesting` *boolean* - you sent a follow request to this profile (if private)
	- `requested` *boolean* - this profile sent you a follow request (if yours is private)
	- `following` *boolean* - you're following this profile
	- `followed` *boolean* - this profile follows you

##### Get profile story (requires authentication)

##### Using profile ID

```js
InstaClient.getProfileStoryById(id)
    .then(profile => console.log(profile))
    	.catch(err => console.error(err));
```

##### Using profile username (will automatically request profile ID)

```js
InstaClient.getProfileStory(username)
    .then(profile => console.log(profile))
    	.catch(err => console.error(err));
```

##### Result

- `unread` *boolean* - profile story is unread
- `author` *object* - a subset of profile
    - `username`
    - `pic`
- `user` *object* - user relevant properties
    - `requesting`
    - `following`
- `items` *array of stories* - profile stories
    - `url` *string* - link to original story file (`jpg`, `mp4`, ...)
    - `type` *string* - story type : `photo` or `video`
    - `timestamp` *epoch*
    - `expirationTimestamp` *epoch*

*Those methods will return `null` when a profile has no story.*

Note : calling this method will not mark the story as read.

##### Get hashtag

```js
InstaClient.getHashtag(hashtag)
	.then(hashtag => console.log(hashtag))
	.catch(err => console.error(err));
```

Result

- `pic` *url* - hashtag profile pic (can't find out how it is chosen)
- `posts` *integer* - number of posts containing this hashtag
- `featuredPosts` *array of posts* - featured posts published with this hashtag
<br>`lastPosts` *array of posts* - last posts published with this hashtag
<br>[more info about hashtag posts](https://help.instagram.com/777754038986618)
- `link` *url* - link to the hashtag's page
- `user` *object* - user relevant properties **(while authenticated)** :
	- `following` *boolean* - you [subscribed](https://help.instagram.com/2003408499915301) to this hashtag (receiving posts in your personal feed)

##### Get location by ID

Unfortunately, using IDs is currently the only way to get a location, at least for now.

```js
InstaClient.getLocation(id)
	.then(location => console.log(location))
	.catch(err => console.error(err));
```

Result

- `pic` *url* - location profile pic
- `posts` *integer* - posts published from that location
- `address` *object*
	- `street` *string*
	- `zipCode` *string*
	- `city` *string*
	- `latitude` *float*
	- `longitude` *float*
- `website` *url* - place's website
- `phone` *string* - place's contact phone number
- `featuredPosts` *array of posts* - featured posts published from this location
<br>`lastPosts` *array of posts* - last posts published from this location
- `link` *url* - link to this location's page

##### Array of posts

This is a subset of a real post, containing the following properties :

- `shortcode` *string* - post identifier
- `caption` *string* - post description
- `comments` *integer* - number of comments
- `likes` *integer* - number of likes
- `thumbnail` *url* - post thumbnail
<br>Always static image wether it's a photo or a video post, lower quality.

##### Get post by shortcode

The shortcode is the post's identifier : the link to a post is instagram.com/p/shortcode.

```js
InstaClient.getPost(shortcode)
	.then(post => console.log(post))
	.catch(err => console.error(err));
```

Result

- `author` *object* - a subset of a profile's properties.
	- `username` *string*
	- `name` *string*
	- `pic` *url*
	- `verified` *boolean*
	- `link` *url*
- `location`
	- `name` *string*
	- `city` *string*
- `contents` *array of posts*
	- `type` *string* - post type : `photo` or `video`
	- `url` *string* - link to original post file (`jpg`, `mp4`, ...)
	- if `type` is `video` :
	<br>`thumbnail` *string* - link to thumbnail
	<br>`views` *integer* - number of views
- `tagged` *array of usernames* - people tagged in post contents
- `likes` *integer* - number of likes
- `caption` *string* - post description
- `hashtags` *array of hashtags* - hashtags mentioned in post description
- `mentions` *array of usernames* - people mentioned in post description
- `edited` *boolean* - caption edited
- `comments` *array of objects* (Max 40)
	- `user` *string* - comment author's username
	- `content` *string* - comment content
	- `timestamp` *epoch*
	- `hashtags` *array of hashtags*
	- `mentions` *array of usernames*
	- `likes` *integer*
- `commentCount` *integer*
- `timestamp` *epoch*
- `link` *string* - link to the post

#### Paginated getters (require authentication)

Paginated getters allows bulk data downloads.

Params :
- `maxCount` *integer* - max number of items to return
- `pageId` *string* (optional) - page navigation identifier

Result : array + `nextPageId` property

Sample :
```js
(async () => {
	const page0 = await somePaginatedGetter(someId, 50);
	const page1 = await somePaginatedGetter(someId, 50, page0.nextPageId);
	const page2 = await somePaginatedGetter(someId, 50, page1.nextPageId);
})();
```

The `pageId`/`nextPageId` property may contain a string of digits, a base64 string, or a JSON string, but always must be leaved untouched.

##### Get profile posts

Result in array : full post object

###### Using profile ID

```js
InstaClient.getProfilePostsById(profileId, maxCount, pageId)
    .then(posts => console.log(posts))
    	.catch(err => console.error(err));
```

###### Using profile username (will automatically request profile ID)

```js
InstaClient.getProfilePosts(profileUsername, maxCount, pageId)
    .then(posts => console.log(posts))
    	.catch(err => console.error(err));
```

##### Get post comments

```js
InstaClient.getPostComments(shortcode, maxCount, pageId)
	.then(posts => console.log(posts))
	.catch(err => console.error(err));
```

Result in array : comment object

##### Get hashtag posts

```js
InstaClient.getHashtagPosts(hashtag, maxCount, pageId)
	.then(posts => console.log(posts))
	.catch(err => console.error(err));
```

Result in array : partial post object

##### Get location posts

```js
InstaClient.getLocationPostsById(locationId, maxCount, pageId)
	.then(posts => console.log(posts))
	.catch(err => console.error(err));
```

Result in array : partial post object

#### Search

##### Search profile

```js
InstaClient.searchProfile(query)
	.then(profiles => console.log(profiles))
	.catch(err => console.error(err));
```

Result in array : a subset of profile.

- `username`
- `name`
- `pic`
- `private`
- `verified`
- `followers`
- `user`
	- `following`

##### Search hashtag

```js
InstaClient.searchHashtag(hashtag)
	.then(hashtags => console.log(hashtags))
	.catch(err => console.error(err));
```

Result in array : a subset of hashtag.

- `name`
- `posts`

##### Search location

```js
InstaClient.searchLocation(location)
	.then(locations => console.log(locations))
	.catch(err => console.error(err));
```

Result in array : a subset of location.

- `id`
- `name`
- `address`
	- `street`
	- `city`
	- `latitude`
	- `longitude`

#### Subscribe to posts

- `options` *object* (optional)
    - `interval` *integer* (optional) - time in seconds between requests. **Default : 30**
    - `lastPostShortcode` *string* (optional) - shortcode from which to begin if not the next one to be published.
    - `fullPosts` *boolean* (optional) - fetch full post data, additional request required

##### From user

```js
InstaClient.subscribeUserPosts(username, (post, err) => {
    if(post)
        console.log(post.shortcode);
    else
        console.error(err);
}, {
    interval,
    lastPostShortcode,
    fullPosts
});
```

##### From hashtag

```js
InstaClient.subscribeHashtagPosts(hashtag, (post, err) => {
    if(post)
        console.log(post.shortcode);
    else
        console.error(err);
}, {
    interval,
    lastPostShortcode,
    fullPosts
});
```

#### Account requests (user-relevant methods)

##### Get account notifications

```js
InstaClient.getAccountNotifications()
	.then(notifications => console.log(notifications))
	.catch(err => console.error(err));
```

Result in array : notification

- `id` *string* - Notification identifier
- `timestamp` *epoch*
- `type` *string* - Notification type : `like`, `mention`, `comment`, `follow`
- `post`
	- `shortcode`
	- `thumbnail`
- `by`
	- `username`
	- `name`
	- `pic`
- `content` *string* - Comment content (when applicable)

##### Subscribe to account notifications

- `options` *object* (optional)
    - `interval` *integer* (optional) - time in seconds between requests. **Default : 30**
    - `lastNotificationId` *string* (optional) - Notification ID

```js
InstaClient.subscribeAccountNotifications((post, err) => {
    if(post)
        console.log(post.shortcode);
    else
        console.error(err);
}, {
    interval,
    lastNotificationId
});
```

##### Get account stories

```js
InstaClient.getAccountStories()
    .then(stories => console.log(stories))
    .catch(err => console.error(err));
```

Result in array : inbox-like

- `unread`
- `author` *object* - a subset of a profile's properties.
    - `id`
    - `username`
    - `pic`
- `user` *object* - user relevant properties
    - `requesting`
    - `following`

## Changelog

* `1.0.0` (2019-03-26) • Initial release
* `1.0.1` (2019-03-27)
	- Fixed throw error scope
	- Fixed single photo post wrongly structured
	- Added support for comments
	- Added support for hashtags, mentions and tags in posts and comments
	- Added posts subscriptions feature from users (untested) and hashtags
* `1.0.2` (2019-03-27) • Added support for videos
* `1.0.4` (2019-03-27)
	- Fixed video post thumbnail & views count
	- Using promises & observable
* `1.0.5` (2019-03-27) • Added proper error for private accounts
* `1.0.6` (2019-03-31) • Private account access doesn't require mutual follow
* `1.0.7` (2019-04-03) • Added profile's last posts analytics #1 + more
* `1.0.8` (2019-04-14)
	- Using classes
	- Added support for authentication using session cookie (only allows to access friend profile)
	- Added support for locations
	- Added search feature for profiles, hashtags & locations
	- Added user-relevant properties
	- Added support for notifications history & subscription
	- Fixed subscriptions since *#1*
	- Removed useless `id` properties
* `1.0.9`
	- Added `business` property to profile (when applicable)
	- Automatically access public profile anonymously when user blocked
* `1.0.10` (2020-01-26) • Fixed post comments on anonymous session
* `1.0.11` (2020-04-18)
    - Improved subscriptions
        - Using async/await
        - Using simple callbacks instead of observables
        - Using object parameter for options
        - Added full post fetching option
        - Added subscription unsubscribe method
    - Improved `401` detection
    - Improved parsing
        - Using RegExp
        - Removed JSDOM dependency
    - Added support for edited post captions
* `1.0.12` (2020-06-16) • Small fix & refactor
* `1.0.13` (2020-07-10) • Added support for stories
* `1.0.14` (2020-10-17) • Fixed access to own private profile
* `1.0.15` (2020-12-19)
	- Removed Request dependency
	- Improved `429` detection
	- Added unit tests
* `1.0.16` (2020-12-25)
    - Added full post `commentCount` property
	- Added partial post `timestamp` property
	- Added post comment `id` property
	- Added profile IDs memoization
    - Added `getProfilePostsById` & `getProfilePosts` methods
    - Added `getPostComments` method
    - Added `getHashtagPosts` method
    - Added `getLocationPostsById` method
	- Added `409` detection
    - Improved `401` detection
	- Restored full post `shortcode` property
* `1.0.17` (2021-01-2?)
  	- Fixed error on empty profile story
    - Fixed `409` detection
  	- Added profile story external link
* `2.0.0` (202?-??-??)
    - Refactored names
    - Refactored scopes
    - Refactored promises
    - Refactored errors
    - Refactored indents
	- Renamed `getLocation` to `getLocationById`
    - Reverse subscribe methods `post` & `error` parameters
    - Improved unit tests coverage
	- Added JSDoc