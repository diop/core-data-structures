import Node from '../src/node'

'use strict'

export default class Stack {
  constructor(){
      this.marker = 1
      this.newMarker = 1
      this.container = []
  }

  enqueue(input){
    this.container[this.newMarker] = input
    this.newMarker++
    return this.newMarker
  }

  dequeue() {

  }

  front() {

  }

  back() {

  }

  isEmpty() {

  }

  length() {

  }
}
