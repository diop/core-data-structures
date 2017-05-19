import Node from '../src/node'

'use strict'

export default class Stack {
  constructor(){
      this.oldestIndex = 1
      this.newestIndex = 1
      this.container = {}
  }

  enqueue(input){
    this.container[this.newestIndex] = input
    this.newestIndex++
    return this.newestIndex
  }

  dequeue() {
    if ( this.oldestIndex !== this.newestIndex) {
        let temp = container[this.oldestIndex]
        delete this.container[this.oldestIndex]
        this.oldestIndex++
        return temp
    } return null
   }


  front() {
      if ( this.oldestIndex !== this.newestIndex ) {
          return this.container[this.marker]
      }
      return null
  }

  back() {
      if ( this.oldestIndex !== this.newestIndex) {
        return this.conatiner[this.newestIndex - 1]
      }
      return null
  }

  isEmpty() {
      if ( this.oldestIndex === this.newestIndex ) {
        return true
      }
      return false
  }

  length() {
     return this.newestIndex - this.oldestIndex
  }
}
