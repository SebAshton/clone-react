import NARC from '../lib/index'
import assert from 'assert'

describe('NARC', () => {
  it('should be an object', () => {
    assert.equal((typeof NARC), 'object')
  })

  it('has a createElement function', () => {
    assert.equal(typeof NARC.createElement, 'function')
  })

  describe('createElement', () => {
    it('should create hash from 3 arguments', () => {
      const element = NARC.createElement(1, 2, 3)

      assert.deepEqual(element, { type: 1, props: 2, children: 3 })
    })
  })
})
