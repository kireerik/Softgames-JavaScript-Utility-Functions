if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext: function(fn, obj) {
      var currentThis = this;

      Object.entries(obj).forEach(function (object) {
        currentThis[object[0]] = object[1];
      });

      return fn.call(this);
    },

    alterObjects: function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
    },

    iterate: function(obj) {
      return Object.entries(obj).map(function (object) {
        return object[0] + ': ' + object[1];
      });
    }
  };
});