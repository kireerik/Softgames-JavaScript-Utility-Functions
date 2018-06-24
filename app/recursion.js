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

      var result = [arr.slice()]

      const length = arr.length

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

      /*Array.prototype.permutation = function permutation(array, n) {
        array = array || this
        n = n || array.length

        var result = []

        if (n == 1)
          result = [array.slice()]
        else {
          const nextN = n - 1

          for (var i = 0; i < nextN; i++) {
            result.push(...permutation(array, nextN))
            array.swap(Number(!(n % 2)) && i, nextN)
          }

          result.push(...permutation(array, nextN))
        }

        return result
      }

      return arr.permutation()*/
    }
  };
});