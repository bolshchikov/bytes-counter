# bytes-counter
[![Build Status](https://secure.travis-ci.org/bolshchikov/bytes-counter.svg?branch=master)](https://travis-ci.org/bolshchikov/bytes-counter) [![NPM version](https://badge.fury.io/js/bytes-counter.svg)](http://badge.fury.io/js/bytes-counter) [![Bower version](https://badge.fury.io/bo/bytes-counter.svg)](http://badge.fury.io/bo/bytes-counter) [![david-dm](https://david-dm.org/bolshchikov/bytes-counter.svg?theme=shields.io)](https://david-dm.org/bolshchikov/bytes-counter/)
[![david-dm](https://david-dm.org/bolshchikov/bytes-counter/dev-status.svg?theme=shields.io)](https://david-dm.org/bolshchikov/bytes-counter#info=devDependencies&view=table)

> Calculates the amount of bytes in JS string

## Installation 
    $ npm install bytes-counter
    $ bower install bytes-counter

## Use
The usage of the lib is very straight forward. Call the `count` method of bytesCounter and pass the `string`.
In case other type is passed, the method will try to `JSON.stringify` the passed argument. 

```js
var bytes = bytesCounter.count(str);
```

## Testing
### Install global dependencies

    $ npm install -g grunt-cli bower

#### Run unit tests

    $ grunt test

#### Run code coverage

    $ grunt cover

#### Run all tests with reports for ci systems

    $ grunt ci

## Contributing
Instead of us handing out a formal style guide, simply stick to the existing programming style. Please create descriptive commit messages.
We use a git hook to validate the commit messages against these [rules](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.uyo6cb12dt6w).
Easily expand Baboon with your own extensions or changes in the functionality of Baboon itself. Use this workflow:

1. Write your functionality
2. Write unit tests for your functionality
3. Create an example of your functionality in the sample application (optional)
4. Document your functionality in the documentation section of example app
5. Write unit tests for the example
6. Add end to end tests for the example
7. All tests should be successful
8. Check your test coverage (90 - 100%)
9. Make a pull request

We will check the tests, the example and test coverage. In case your changes are useful and well tested, we will merge your requests.

### Release a new version
We use [grunt-bump](https://github.com/vojtajina/grunt-bump) and [grunt-conventional-changelog](https://github.com/btford/grunt-conventional-changelog) internally to manage our releases.
To handle the workflow, we created a grunt task `release`. This happens:

* Bump version in package.json
* Update the CHANGELOG.md file
* Commit in git with message "chore: release v[`the new version number`]"
* Create a git tag v[`the new version number`]

#### Create a new release
Release a new patch

    $ grunt release

Release a new minor version

    $ grunt release:minor

Release a new major version

    $ grunt release:major

## Author
[Sergey N. Bolshchikov](http://bolshchikov.net)

## License
Copyright (C) 2014 Sergey N. Bolshchikov <sergey@bolshchikov.net>
Licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
