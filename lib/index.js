const Twitter = require('twitter');
const config = require('./config.js');

function post(object) {
  if (object.version === null || object.version === undefined) {
    return 'No version number passed';
  }
  if (object.link === null || object.link === undefined) {
    return 'No link passed';
  }
  if (object.tweet === null || object.tweet === undefined) {
    return 'No tweet passed';
  }
  let message = `${object.tweet} ${object.version} ${object.link}`;
  if (message.length > 280) {
    return 'tweet too big';
  }

  let T = new Twitter(config);

  var tweet = new Promise(function(resolve, reject) {
    T.post('statuses/update', message, function(error, tweet, response) {
      let responseObject = {
        url: '',
        message: ''
      };
      // If the favorite fails, log the error message
      if (error) {
        responseObject.tweet = error;
        return reject(error);
      }
      let username = response.user.screen_name;
      let tweetId = response.id_str;
      responseObject.url = `https://twitter.com/${username}/status/${tweetId}`;
      responseObject.tweet = 'success';
      return resolve(responseObject);
    });
  });

  return tweet
    .then(function(value) {
      return value;
    })
    .catch(function(error) {
      console.log(error);
      return error;
    });
}

exports.post = post;
