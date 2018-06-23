if (typeof define !== 'function') { var define = require('amdefine')(module); }

const remove = (arr, item) => {
    const getIndex = () => arr.indexOf(item)

    for (var index = getIndex(); index != -1; index = getIndex())
        arr.splice(index, 1)

    return arr
}

define(function() {
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

    },

    truncate : function(arr) {

    },

    prepend : function(arr, item) {

    },

    curtail : function(arr) {

    },

    concat : function(arr1, arr2) {

    },

    insert : function(arr, item, index) {

    },

    count : function(arr, item) {

    },

    duplicates : function(arr) {

    },

    square : function(arr) {

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
