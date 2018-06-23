if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {

    },

    base10: function(str) {
        return parseInt(str, 2)
    },

    convertToBinary: function(num) {
        return ('000000000' + (num >>> 0).toString(2)).substr(-8)
    },

    multiply: function(a, b) {
        return Number((a * b).toFixed(8))
    }
  };
});

