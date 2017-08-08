const assert = require('chai').assert
const bubbleSort = require('../bubbleSort.js')

describe('', () => {
  context('when sorted', () => {
    it('it returns original array of letters', () => {
      const results = new bubbleSort(['a', 'b']).run()
      assert.deepEqual(results, ['a', 'b'])
    })

    it('it returns original array of numbers', () => {
      const results = new bubbleSort([0, 1]).run()
      assert.deepEqual(results, [0, 1])
    })
  })

  context('when out of order', () => {
    it('it can sort a two element array', () => {
      const results = new bubbleSort(['b', 'a']).run()
      assert.deepEqual(results, ['a', 'b'])
    })

    it('it can sort 4 letters', () => {
      const results = new bubbleSort(['b', 'a', 'c', 'd']).run()
      assert.deepEqual(results, ['a', 'b', 'c', 'd'])
    })

    xit('it can sort 4 numbers', () => {

    })
  })
})
