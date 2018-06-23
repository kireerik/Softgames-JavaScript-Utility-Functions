if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn(...arr)
    },

    speak : function(fn, obj) {
        Object.entries(obj).forEach((object) =>
            this[object[0]] = object[1]
        )

        return fn.call(this)
    },

    functionFunction : function(str) {
        return str2 => str + ', ' + str2
    },

    makeClosures : function(arr, fn) {

    },

    partial : function(fn, str1, str2) {

    },

    useArguments : function() {
        return [...arguments].reduce((sum, argument) => sum + argument)
    },

    callIt : function() {
        var functionArguments = [...arguments]
        functionArguments.shift()

        return arguments[0](...functionArguments)
    },

    partialUsingArguments : function() {
        const mainFunction = arguments[0]

        var functionArguments = [...arguments]
        functionArguments.shift()

        return function() {
            return mainFunction(...functionArguments, ...arguments)
        }
    },

    curryIt : function(fn) {

    }
  };
});
