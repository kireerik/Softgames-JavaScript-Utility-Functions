if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : async function(value) {
      return value
    },

    manipulateRemoteData : async function(url) {
      return (await (await fetch(url)).json()).people.map(({name}) => name).sort()
    }
  };
});