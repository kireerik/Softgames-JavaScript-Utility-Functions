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
        Array.prototype.swap = function (index, otherIndex) {
            var valueAtIndex = this[index]

            this[index] = this[otherIndex]
            this[otherIndex] = valueAtIndex
        }

        const length = arr.length
        var result = [arr.slice()]

        for (let i = 1, heap = new Array(length).fill(0)
            ; i < length
        ;)
            if (heap[i] < i) {
                arr.swap(i, i % 2 && heap[i])
                result.push(arr.slice())
                heap[i]++
                i = 1
            } else {
                heap[i] = 0
                i++
            }

        return result
    }
  };
});