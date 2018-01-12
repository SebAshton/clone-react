import NARC from '../lib/index'
import assert from 'assert'

describe('NARC', () => {
  it('should be an object', () => {
    assert.equal((typeof NARC), 'object')
  })

  it('has a createVirtualElement function', () => {
    assert.equal(typeof NARC.createVirtualElement, 'function')
  })

  describe('createVirtualElement', () => {
    it('should create hash from 3 arguments', () => {
      const element = NARC.createVirtualElement(1, 2)

      assert.deepEqual(element, { type: 1, props: 2, children: [] })
    })
  })

  describe('createElement', () => {
    it('should create a simple DOM node', () => {
      const virtualDOM = NARC.createVirtualElement('div', '', '');
      const result = NARC.createElement(virtualDOM);

      assert.equal(result.nodeName, 'DIV')
    })

    it('should create a complex DOM node', () => {
      const virtualDOM = NARC.createVirtualElement(
        'div',
        '',
        NARC.createVirtualElement('a', '', 'click me')
      );

      const result = NARC.createElement(virtualDOM);

      assert.equal(result.childNodes[0].nodeName, 'A');
      assert.equal(result.childNodes[0].childNodes[0].nodeValue, 'click me');
    })
  });
})
