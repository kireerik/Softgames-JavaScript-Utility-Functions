if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function listFiles(data, dirName) {
        return data.files.reduce((result, item) => {
            result.push(...(
                typeof item.files != 'undefined' ?
                    listFiles(item)
                :
                    [item]
            ))

            return result
        }, [])
    },

    permute: function(arr) {

    }
  };
});