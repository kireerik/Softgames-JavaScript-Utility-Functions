if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        return /\d/.test(str)
    },

    containsRepeatingLetter : function(str) {
        return /(\D)\1+/.test(str)
    },

    endsWithVowel : function(str) {
        return (/[aeiou]$/i).test(str)
    },

    captureThreeNumbers : function(str) {
        const match = str.match(/(\d){3}/)

        return match ? match[0] : false
    },

    matchesPattern : function(str) {
        return /^(\d{3}-){2}(\d){4}$/.test(str)
    },
    isUSD : function(str) {
        return /^\$\d+(,\d{3})*\.?([\d]{2})?$/.test(str)
    }
  };
});