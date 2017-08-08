var pry = require('pryjs');

function bubbleSort(unsorted) {
  this.unsorted = unsorted,
  this.run = () => {
    if (unsorted.length == 1) { return unsorted }

    let number_sorted = 1

    while (number_sorted < unsorted.length) {

      unsorted.forEach( this.compareItems )

      number_sorted++
    }
    return unsorted
  },
  this.compareItems = (item, index) => {
    let compare = unsorted[index+1]
    if (item > compare) {
      this.swapItems(index)
    }
  },
  this.swapItems = (index) => {
    let temp = unsorted[index]
    unsorted[index] = unsorted[index+1]
    unsorted[index+1] = temp
  }
}

module.exports = bubbleSort

console.log(new bubbleSort([ 5, 4, 3, 2, 1 ]).run())
