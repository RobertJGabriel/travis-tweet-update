const travisTweetUpdate = require('../index.js');
let object = {
  version: 1,
  name: 'api docs',
  tweet: 'message',
  link: 'link'
};

describe('Object testing', () => {
  it('Check for version number', () => {
    delete object.version;
    expect.assertions(1);
    const testResult = expect(travisTweetUpdate.post(object)).toEqual(
      'No version number passed'
    );
    object.version = 1;
    return testResult;
  });

  it('Check for  tweet', () => {
    delete object.tweet;
    expect.assertions(1);
    const testResult = expect(travisTweetUpdate.post(object)).toEqual('No tweet passed');
    object.tweet = 'Update a new version of my api.';
    return testResult;
  });

  it('Check for link', () => {
    delete object.link;
    const testResult = expect(travisTweetUpdate.post(object)).toEqual('No link passed');
    object.link = 'https://www.robertgabriel.ninja';
    return testResult;
  });
});

describe('Twitter Limits', () => {
  it('Check if message is too big', () => {
    object.version = 1111111;
    object.tweet =
      '1111111 ksksksksks ksksksksk skskskk s1111111 ksksksksks' +
      'ksksksksk skskskk s1111111 ksksksksks ksksksksk skskskk s1111111 ksksksksks ksksksksk skskskk s1111111 ksksksksks ksksksksk skskskk s1111111 ksksksksks ksksksksk skskskk s1111111 ksksksksks ksksksksk skskskk s1111111 ksksksksks ksksksksk skskskk s';
    object.link = 'https://www.robertgabriel.ninja';
    const testResult = expect(travisTweetUpdate.post(object)).toEqual('tweet too big');
    return testResult;
  });

  it('Fail to Post', () => {
    object.version = 1;
    object.tweet = 'This is a test tweet';
    object.link = 'https://www.robertgabriel.ninja';
    const testResult = travisTweetUpdate
      .post(object)
      .then(data => expect(data[0].message).toEqual('Bad Authentication data.'));
    return testResult;
  });

  it('Successful post', () => {
    object.version = 1;
    object.tweet = 'This is a test tweet';
    object.link = 'https://www.robertgabriel.ninja';
    const testResult = travisTweetUpdate
      .post(object)
      .then(data => expect(data[0].message).toEqual('success'));
    return testResult;
  });
});
