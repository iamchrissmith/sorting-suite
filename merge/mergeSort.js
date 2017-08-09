const pry = require('pryjs')

function mergeSort(unsorted) {
  this.unsorted = unsorted,
  this.run = () => {
    if (unsorted.length < 2) { return unsorted }

    let splitArray = []
    unsorted.forEach( (item, index) => splitArray[index] = [item] )
    while ( splitArray.length > 0 ) {
      iterations = Math.ceil((splitArray.length / 2.0))
      sorted = []
      for(let i = 0; i < iterations; i++) {
        if (typeof splitArray[1] === 'undefined'){
          let odd = this.compareArrays(splitArray[0], sorted[sorted.length-1])
          sorted.pop()
          sorted.push(odd)
          splitArray.pop()
        } else {
          sorted.push(this.compareArrays(splitArray[0], splitArray[1]))
          splitArray = splitArray.slice(2, splitArray.length)
        }
      }
      if (!(sorted.length === 1 && splitArray.length === 0)) {
        splitArray = sorted
      }
    }
    return sorted[0]
  },
  this.compareArrays = (first, second) => {
    combined = []
    while (first.length !== 0 && second.length !== 0) {
      if ( first[0] > second[0]) {
        combined.push(second.shift())
      } else {
        combined.push(first.shift())
      }
    }
    while (first.length !== 0) {
      combined.push(first.shift())
    }
    while (second.length !== 0) {
      combined.push(second.shift())
    }
    return combined
  }
}

module.exports = mergeSort

console.log(new mergeSort([ 5, 4, 3, 2, 1 ]).run())
