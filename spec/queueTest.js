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
        .to.alter(() => newQueue.newMarker, { by: 1 })
    })
  })

  context( 'dequeue() ', () => {
      const newQueue = new Queue()
      it( 'returns and removes the front element in the queue', () => {
          expect()
      })
  })

  context( 'front()', () => {
      const newQueue = new Queue()
      it( 'returns the front element in queue', () => {
          expect()
      })
  })

  context( 'back()', () => {
      const newQueue = new Queue()
      it( 'returns the back element in the queue', () => {
          expect()
      })
  })

  context( 'isEmpty()', () => {
      const newQueue = new Queue()
      it( 'returns true if the queue is empty', () => {
          expect()
      })
  })

  context( 'length()', () => {
      const newQueue = new Queue()
      it( 'returns the number of elements in the queue', () => {
          expect()
      })
  })

})
