if (typeof define !== 'function') { var define = require('amdefine')(module); }


define(function() {
  const toBinary = (num) =>
    ('000000000' + (num >>> 0).toString(2)).substr(-8)

  return {
    valueAtBit: function(num, bit) {
      return parseInt(toBinary(num).split('')[8 - bit])
    },

    base10: function(str) {
      return parseInt(str, 2)
    },

    convertToBinary: function(num) {
      return toBinary(num)
    },

    multiply: function(a, b) {
      return Number((a * b).toFixed(8))
    }
  };
});