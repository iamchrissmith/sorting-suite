const assert = require('chai').assert
const sorter = require('../insertionSort.js')

describe('insertionSort', () => {
  context('when sorted', () => {
    it('it returns original array of letters', () => {
      const results = new sorter(['a', 'b']).run()
      assert.deepEqual(results, ['a', 'b'])
    })

    it('it returns original array of numbers', () => {
      const results = new sorter([0, 1]).run()
      assert.deepEqual(results, [0, 1])
    })
  })

  context('when out of order', () => {
    it('it can sort a two element array', () => {
      const results = new sorter(['b', 'a']).run()
      assert.deepEqual(results, ['a', 'b'])
    })

    it('it can sort 4 letters', () => {
      const results = new sorter(['b', 'a', 'c', 'd']).run()
      assert.deepEqual(results, ['a', 'b', 'c', 'd'])
    })

    it('it can sort 4 numbers', () => {
      const results = new sorter([4,3,2,1]).run()
      assert.deepEqual(results, [1,2,3,4])
    })
  })
})
