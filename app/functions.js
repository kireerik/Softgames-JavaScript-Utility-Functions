if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  var getFunctionArguments = function (functionArguments) {
    var result = [...functionArguments];
    result.shift();

    return result;
  };

  return {
    argsAsArray: function(fn, arr) {
      return fn(...arr);
    },

    speak: function(fn, obj) {
      var currentThis = this;

      Object.entries(obj).forEach(function (object) {
        currentThis[object[0]] = object[1];
      });

      return fn.call(this);
    },

    functionFunction: function(str) {
      return function (str2) {return str + ', ' + str2;};
    },

    makeClosures: function(arr, fn) {
      return arr.map(function (number) {return function () {return Math.pow(number, 2);};});
    },

    partial: function(fn, str1, str2) {
      return function (part) {return fn(str1, str2, part);};
    },

    useArguments: function() {
      return [...arguments].reduce(function (sum, argument) {return sum + argument;});
    },

    callIt: function() {
      return arguments[0](...getFunctionArguments(arguments));
    },

    partialUsingArguments: function() {
      var mainFunction = arguments[0], functionArguments = arguments;

      return function() {
        return mainFunction(...getFunctionArguments(functionArguments), ...arguments);
      };
    },

    curryIt: function(fn) {
      return function (x) {return function (y) {return function (z) {return fn(x, y, z);};};};
    }
  };
});