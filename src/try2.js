import * as R from 'ramda'
import list from './data/randomArrayOfNumbers'
const assert = require('assert').strict
const log = console.log

// ============================================ //

// const ex = callback(
//   accumulator,
//   currentValue,
//   index,
//   array
// )

class Person {
  constructor(name) {
    this._name = name // {1}
  }
  get name() {
    // {2}
    return this._name
  }
  set name(value) {
    // {3}
    this._name = value
  }
}

let lotrChar = new Person('Frodo')
// console.log(lotrChar.name) // {4}
lotrChar.name = 'Gandalf' // {5}
// console.log(lotrChar.name)
lotrChar._name = 'Sam' // {6}
// console.log(lotrChar.name)

log(lotrChar._name)

