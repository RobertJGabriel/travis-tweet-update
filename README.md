# Tweet Build Update

> Tweet out when a successful update/roll out has been released.

This is ideally run after travis or your build system.

## Install

```js
  npm install travis-tweet-update
```

<a href="https://www.patreon.com/robertjamesgabriel">
	<img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## Usage

```js
const tweet = require('travis-tweet-update');

  console.log(tweet.post());
  // Returns an object with success or failure.
```

## Twitter API Keys

In the config for this module. You will need to set env variables for twitter.

```js
module.exports = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};


```

## API

### post(object)

Returns a object on success or failure to tweet.

#### Success

```js
{
  url: `https://twitter.com/${username}/status/${tweetId}`,
  message: 'success'
}

```

#### Failure

```js
{
  url: '',
  message: '{reason here}'
}

```

#### object

Type: `Object`

```js
let object = {
  version: 1, // Init Version number or the update
  name: 'api docs', // Name of the project
  tweet: 'message', // Tweet
  link: 'link' // Link to blog, website or update.
};
```

## License

MIT © [Robert James Gabriel](https://robertgabriel.ninja)
