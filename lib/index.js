const Twitter = require('twitter');
const config = require('./config.js');

exports.update = function(object) {
  if (object.version === null || object.version === undefined) {
    return 'No version number passed';
  }
  if (object.link === null || object.link === undefined) {
    return 'No link passed';
  }
  if (object.message === null || object.message === undefined) {
    return 'No message passed';
  }
  let message = `${object.message} ${object.version} ${object.link}`;
  if (message.length > 280) {
    return 'message too big';
  }

  const T = new Twitter(config);

  T.post('statuses/update', object.name, function(error, tweet, response) {
    // If the favorite fails, log the error message
    if (error) {
      return `error, check logs`;
    }
    let username = response.user.screen_name;
    let tweetId = response.id_str;
    return `https://twitter.com/${username}/status/${tweetId}`;
  });
};
