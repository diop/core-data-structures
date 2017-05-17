import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Node from '../src/node'
import LinkedList from '../src/linkedList'

chai.use(chaiChange)

describe('LinkedList', () => {
    'use strict'
    const list = new LinkedList()
    list.insert( 'apple')
    list.insert ( 'banana' )

    it('is a function', () => {
        expect( LinkedList ).to.be.a( 'function' )
    })

    context( 'getHeadNode', () => {
        it( 'returns the first node in the list', () => {
            expect ( list.getHeadNode().data ).to.equal( 'apple' )
        })
    })

    context( 'getTailNode', () => {
        it( 'returns the lastnode in the list', () => {
            expect( list.getTailNode().data ).to.equal( 'banana')
        })
    })

    context( 'insert()', () => {
        it( 'inserts node to the tail', () => {
            list.insert( 'papaya' )
            expect( list.tail.data ).to.equal( 'papaya')
        })
    })

    context( 'contains()', () => {
        it( 'determines wether ir not the list contains the provided data', () => {
            expect( list.contains( 'cherry' ) ).to.equal( false )
        })
    })






})