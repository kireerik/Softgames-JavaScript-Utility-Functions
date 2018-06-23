if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function listFiles(data, dirName) {
        const isSearchedDirecory = data.dir == dirName

        return data.files.reduce((result, item) => {
            if (typeof item.files != 'undefined')
                result.push(...listFiles(item, isSearchedDirecory ? '' : dirName))
            else if (isSearchedDirecory || !dirName)
                result.push(item)

            return result
        }, [])
    },

    permute: function(arr) {

    }
  };
});