import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PriorityNode from '../src/priority_node'

chai.use(chaiChange)

describe('PriorityNode', () => {
  'use strict'

  it('is a function', () => {
    expect(PriorityNode).to.be.a('function')
  })

  const levelZero = new PriorityNode({data: 'level0', priority: 0})
  const level0 = new PriorityNode({data: 0, priority: 0})
  const levelArrayNum = new PriorityNode({data: [1, 2], priority: 0})
  const levelArrayString = new PriorityNode({data: ['a', 'b'], priority: 0})
  const levelObj = new PriorityNode({data: {'a': 1, 'b': 2}, priority: 0})
  const priUnd = new PriorityNode({data: 'level0'})
  const levelUnd = new PriorityNode({priority: 0})
  const levZPriZ = new PriorityNode({data: 'level0', priority: 'zero'})

  context('getData()', () => {
    it('returns the correct type, if a string', () => {
      expect(levelZero.getData()).to.be.a('string')
    })
    it('returns the correct value, if a string', () => {
      expect(levelZero.getData()).to.be.equal('level0')
    })
    it('returns the correct type, if a number', () => {
      expect(level0.getData()).to.be.a('number')
    })
    it('returns the correct value, if a number', () => {
      expect(level0.getData()).to.be.equal(0)
    })
    it('returns the correct type, if an array', () => {
      expect(Array.isArray(levelArrayNum.getData())).to.be.true
    })
    it('returns the correct value, if an array', () => {
      expect(levelArrayString.getData()).to.be.deep.equal(['a', 'b'])
    })
    it('returns the correct type, if an object', () => {
      expect(levelObj.getData()).to.be.an('object')
    })
    it('returns the correct value, if an object', () => {
      expect(levelObj.getData()).to.be.deep.equal({'a': 1, 'b': 2})
    })
    it('returns an object with a retrievable property, if an object', () => {
      expect(levelObj.getData().a).to.be.equal(1)
    })
    it('returns the correct value, if priority is unspecified', () => {
      expect(priUnd.getData()).to.be.equal('level0')
    })
    it('returns undefined, if undefined', () => {
      expect(levelUnd.getData()).to.be.undefined
    })
    it('returns undefined, if priority is not a number', () => {
      expect(levZPriZ.getData()).to.be.undefined
    })
  })
})
