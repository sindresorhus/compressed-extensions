# compressed-extensions [![Build Status](https://travis-ci.org/sindresorhus/compressed-extensions.svg?branch=master)](https://travis-ci.org/sindresorhus/compressed-extensions)

> List of [compressed file extensions](http://en.wikipedia.org/wiki/List_of_archive_formats#Compression_only)

*The list is just a [JSON file](compressed-extensions.json) and can be used wherever.*


## Install

```
$ npm install --save compressed-extensions
```


## Usage

```js
var compressedExtensions = require('compressed-extensions');

console.log(compressedExtensions);
//=> ['7z', 'apk', ...]
```


## Related

- [is-compressed](https://github.com/sindresorhus/is-compressed) - Check if a filepath is a compressed file


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
