import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Node from '../src/node'
import Queue from '../src/queue'



chai.use(chaiChange)

describe.only('Queue', () => {
  'use strict'

  it('exists', () => {
    expect(Queue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element (the string "foo") to the back of the queue.', () => {
      const newQueue = new Queue()
      expect(() => newQueue.enqueue('block'))
        .to.alter(() => newQueue.newestIndex, { by: 1 })
    })
  })

  context( 'dequeue() ', () => {
      const newQueue = new Queue()
      it( 'returns and removes the front element in the queue', () => {
          newQueue.enqueue('block1')
          newQueue.enqueue('block2')
          newQueue.enqueue('block3')
          expect( newQueue.dequeue() ).to.equal( 'block1' )
      })
  })

  context( 'front()', () => {
      const newQueue = new Queue()
      newQueue.enqueue('block1')
      newQueue.enqueue('block2')
      newQueue.enqueue('block3')
      it( 'returns the front element in queue', () => {
          expect( newQueue.front() ).to.equal( 'block1' )
      })
  })

  context( 'back()', () => {
      const newQueue = new Queue()
      newQueue.enqueue('block1')
      newQueue.enqueue('block2')
      newQueue.enqueue('block3')
      it( 'returns the back element in the queue', () => {
          expect( newQueue.back() ).to.equal( 'block3')
      })
  })

  context( 'isEmpty()', () => {
      const newQueue = new Queue()
      it( 'returns true if the queue is empty', () => {
          expect( newQueue.isEmpty() ).to.equal( true )
      })
  })

  context( 'length()', () => {
      const newQueue = new Queue()
      newQueue.enqueue('block1')
      newQueue.enqueue('block2')
      newQueue.enqueue('block3')
      it( 'returns the number of elements in the queue', () => {
          expect()
      })
  })

})
