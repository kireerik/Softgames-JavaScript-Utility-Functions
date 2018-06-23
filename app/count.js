if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : async function (start, end) {
        for (var i = start; i <= end; i++, await new Promise(resolve => setTimeout(resolve, 100)))
            console.log(i)
    }
  };
});