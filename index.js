'use strict';

var toString = Object.prototype.toString;

var regex = /^([+-]?(?:\d+|\d*\.\d+)?)\s?(months?|d(?:ays?)?|h(?:ours?)?|m(?:inutes?)?|s(?:econds?)?)$/;

/**
 * @param  {number | string} string
 * @return {number}
 *
 * @example
 * ms( '24 hours' ); // -> 86400000
 */
function milliseconds ( string ) {
  var milliseconds;

  if ( typeof string === 'number' ) {
    milliseconds = string * 1000;
  } else if ( typeof string === 'string' && regex.test( string ) ) {
    milliseconds = RegExp.$1
      ? Number( RegExp.$1 )
      : 1;

    switch ( RegExp.$2 ) {
      case 'months':
      case 'month':
        milliseconds *= 365 / 12;
        /* falls through */
      case 'days':
      case 'day':
      case 'd':
        milliseconds *= 24;
        /* falls through */
      case 'hours':
      case 'hour':
      case 'h':
        milliseconds *= 60;
        /* falls through */
      case 'minutes':
      case 'minute':
      case 'm':
        milliseconds *= 60;
        /* falls through */
      case 'seconds':
      case 'second':
      case 's':
        milliseconds *= 1000;
    }
  } else {
    throw new Error( 'could not convert ' + string + ' (' + toString.call( string ) + ') into milliseconds' );
  }

  return Number(milliseconds.toFixed(2)) || 0;
}

module.exports = milliseconds;
