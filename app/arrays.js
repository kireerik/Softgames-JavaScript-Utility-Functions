if (typeof define !== 'function') { var define = require('amdefine')(module); }


define(function() {
  const remove = (arr, item) => {
      const getIndex = () => arr.indexOf(item)

      for (var index = getIndex(); index != -1; index = getIndex())
          arr.splice(index, 1)

      return arr
  }

  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item)
    },

    sum : function(arr) {
        return arr.reduce((sum, value) => sum + value)
    },

    remove : function(arr, item) {
        return remove(arr, item)
    },

    removeWithoutCopy : function(arr, item) {
        return remove(arr, item)
    },

    append : function(arr, item) {
        arr.push(item)

        return arr
    },

    truncate : function(arr) {
        arr.pop()

        return arr
    },

    prepend : function(arr, item) {
        arr.unshift(item)

        return arr
    },

    curtail : function(arr) {
        arr.shift()

        return arr
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2)
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item)

        return arr
    },

    count : function(arr, item) {
        return arr.filter(value => value == item).length
    },

    duplicates : function(arr) {
        return arr.reduce((result, value, index) => {
            if (arr.indexOf(value) != index && !result.includes(value))
                result.push(value)

            return result
        }, [])
    },

    square : function(arr) {
        return arr.map(value => Math.pow(value, 2))
    },

    findAllOccurrences : function(arr, target) {
        return arr.reduce((result, value, index) => {
            if (value == target)
                result.push(index)

            return result
        }, [])
    }
  };
});