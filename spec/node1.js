
import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Node from '../src/node1'

chai.use(chaiChange)

describe('Node1', () => {
  'use strict'

  it('is a function', () => {
      expect(Node).to.be.a('function')
  })

  context('getData()', () => {
      const nodeA = new Node( {data: 'apple'})
      it('gets the data from the node.', () => {
          expect( nodeA.getData() ).to.equal('apple')
    })
  })

  context('setNext()', () => {
     const nodeA = new Node( {data: 'apple'} )
     const nodeB = new Node( {data: 'banana'} )
     const nodeC = new Node( {data: 'orange'} )
     it('points the reference to the next node.', () => {
         expect( () => nodeA.setNext(nodeB) ).to.alter( () => nodeA.next, { from: null, to: nodeB } )
    })
    it('returns the original.', () => {
        expect( nodeA.setNext(nodeB) ).to.equal(nodeA)
    })
  })

  context('getNext()', () => {
      const nodeA = new Node( {data: 'apple'} )
      const nodeB = new Node( {data: 'banana'} )
      const nodeC = new Node( {data: 'orange'} )
    it('returns the next node', () => {
        nodeA.setNext(nodeB)
        expect( nodeA.getNext() ).to.equal(nodeB)
    })
    it('returns null if no next node.', () => {
        expect( nodeB.getNext() ).to.equal(null)
    })
  })
})
