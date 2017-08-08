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
  this.compareItems = (item, index, unsorted) => {
    let compare = unsorted[index+1]
    if (item > compare) {
      unsorted = this.swap_items(index, unsorted)
    }
  },
  this.swap_items = (index, items) => {
    let temp = items[index]
    items[index] = items[index+1]
    items[index+1] = temp
    return items
  }
}

module.exports = bubbleSort

console.log(new bubbleSort(['b', 'a', 'c', 'd']).run())
