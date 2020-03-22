"use strict";
exports.__esModule = true;
var regex = /^([+-]?(?:\d+|\d*\.\d+)?)\s?(months?|d(?:ays?)?|h(?:ours?)?|m(?:inutes?)?|s(?:econds?)?)$/;
/**
 * @param  {number | string} string
 * @return {number}
 *
 * @example
 * ms( '24 hours' ); // -> 86400000
 */
function ms(string) {
    var ms;
    if (typeof string === 'number') {
        ms = string * 1000;
    }
    else if (typeof string === 'string' && regex.test(string)) {
        ms = RegExp.$1
            ? Number(RegExp.$1)
            : 1;
        switch (RegExp.$2) {
            case 'months':
            case 'month':
                ms *= 365 / 12;
            /* falls through */
            case 'days':
            case 'day':
            case 'd':
                ms *= 24;
            /* falls through */
            case 'hours':
            case 'hour':
            case 'h':
                ms *= 60;
            /* falls through */
            case 'minutes':
            case 'minute':
            case 'm':
                ms *= 60;
            /* falls through */
            case 'seconds':
            case 'second':
            case 's':
                ms *= 1000;
        }
    }
    else {
        throw new Error('could not convert ' + string + ' (' + Object.prototype.toString.call(string) + ') into milliseconds');
    }
    return Number(ms.toFixed(2)) || 0;
}
exports["default"] = ms;
