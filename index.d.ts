/**
List of [compressed file extensions](https://en.wikipedia.org/wiki/List_of_archive_formats#Compression_only).

@example
```
import compressedExtensions from 'compressed-extensions';

console.log(compressedExtensions);
//=> ['7z', 'apk', …]
```
*/
declare const compressedExtensions: readonly string[];

export default compressedExtensions;
