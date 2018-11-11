const travisTweetUpdate = require('../index.js');
let object = {
  version: 1,
  name: 'api docs',
  message: 'message',
  link: 'link'
};

describe('Object testing', () => {
  it('Check for version number', () => {
    delete object.version;
    expect.assertions(1);
    const testResult = expect(travisTweetUpdate.update(object)).toEqual(
      'No version number passed'
    );
    object.version = 1;
    return testResult;
  });

  it('Check for  message', () => {
    delete object.message;
    expect.assertions(1);
    const testResult = expect(travisTweetUpdate.update(object)).toEqual(
      'No message passed'
    );
    object.message = 'Update a new version of my api.';
    return testResult;
  });

  it('Check for link', () => {
    delete object.link;
    const testResult = expect(travisTweetUpdate.update(object)).toEqual('No link passed');
    object.link = 'https://www.robertgabriel.ninja';
    return testResult;
  });
});

describe('Object testing', () => {
  it('Check if message is too big', () => {
    object.version = 1111111;
    object.message =
      '1111111 ksksksksks ksksksksk skskskk s1111111 ksksksksks' +
      'ksksksksk skskskk s1111111 ksksksksks ksksksksk skskskk s1111111 ksksksksks ksksksksk skskskk s1111111 ksksksksks ksksksksk skskskk s1111111 ksksksksks ksksksksk skskskk s1111111 ksksksksks ksksksksk skskskk s1111111 ksksksksks ksksksksk skskskk s';
    object.link = 'https://www.robertgabriel.ninja';
    const testResult = expect(travisTweetUpdate.update(object)).toEqual(
      'message too big'
    );
    return testResult;
  });
});
