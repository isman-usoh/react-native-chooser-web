# react-native-chooser-web

This package can be used as a drop-in replacement for [react-native-chooser](https://github.com/gs-akhan/react-native-chooser) when targeting the web, or as a mock for [jest](https://github.com/facebook/jest) when testing react-native applications.

### Targeting the Web

Add the following to your webpack configuration:

``` javascript
module.exports = {
  ..., /* the existing configuration */

  resolve: {
    alias: {
      'react-native-chooser': 'react-native-chooser-web'
    }
  }
};
```

### Mocking with Jest

Add the following to your `package.json`.

``` json
{
  "jest": {
    "setupFiles": [
      "./jest/mocks/react-native-chooser.js"
    ]
  }
};
```

And then create a file `./jest/mocks/react-native-chooser.js`:

``` javascript
jest.mock('react-native-chooser', () => require('react-native-chooser-web'));
```
