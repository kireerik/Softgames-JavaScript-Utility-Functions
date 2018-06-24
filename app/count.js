if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count: function (start, end) {
      var execute = true

      ;(async () => {
        for (var i = start; i <= end && execute; i++, await new Promise(resolve => setTimeout(resolve, 100)))
          console.log(i)
      })()

      return {
        cancel: () => execute = false
      }
    }
  };
});