var pry = require('pryjs');

function insertionSort(unsorted) {
  this.unsorted = unsorted,
  this.sorted = [],
  this.run = () => {
    this.sorted.unshift(unsorted.shift())
    while (unsorted.length > 0) {
      let toPlace = unsorted.shift()
      this.insertSorted(toPlace)
    }
    return this.sorted
  },
  this.insertSorted = (toPlace) => {
    for( let [index, placed] of this.sorted.entries() ) {
      if (placed > toPlace) {
        this.sorted.splice(index,0,toPlace)
        break
      } else {
        this.sorted.push(toPlace)
        break
      }
    }
  }
}

module.exports = insertionSort
