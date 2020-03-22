# string-milliseconds

This function lets you convert a human-readable time string to milliseconds number.

## Install

`npm i git+https://github.com/tikhiy/string-milliseconds#v2.0.1`

## Import

```js
// (TypeScript declaration file included as well)
import ms from 'string-milliseconds';
```

## Example

```js
// syntax
ms( '60 seconds' ); // -> 60000
ms( '60 minutes' ); // -> 3600000
ms( '24 hours' );   // -> 86400000
ms( '30 days' );    // -> 2592000000
ms( '12 months' );  // -> 31536000000

// supports . (point)
ms( '1.1s' );       // -> 1100
ms( '1.1m' );       // -> 66000
ms( '1.1h' );       // -> 3960000
ms( '1.1d' );       // -> 95040000
ms( '1.1 month' );  // -> 2890800000

// supports [+-] sign
ms( '-s' );         // -> -1000
ms( '-m' );         // -> -60000
ms( '-h' );         // -> -3600000
ms( '-d' );         // -> -86400000
ms( '-month' );     // -> -2628000000
```
