if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext: function(fn, obj) {
      Object.entries(obj).forEach(object =>
        this[object[0]] = object[1]
      )

      return fn.call(this)
    },

    alterObjects: function(constructor, greeting) {
      constructor.prototype.greeting = greeting
    },

    iterate: function(obj) {
      return Object.entries(obj).map(object =>
        object[0] + ': ' + object[1]
      )
    }
  };
});