if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function listFiles(data, dirName) {
        return data.files.reduce((result, item) => {
            if (typeof item.files != 'undefined')
                result.push(...listFiles(item))
            else
                result.push(item)

            return result
        }, [])
    },

    permute: function(arr) {

    }
  };
});