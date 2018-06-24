if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count: function (start, end) {
      var execute = true, timeout = function (resolve) {setTimeout(resolve, 100)};

      (async function () {
        for (var i = start; i <= end && execute; i++, await new Promise(timeout))
          console.log(i);
      })();

      return {
        cancel: () => execute = false
      }
    }
  };
});