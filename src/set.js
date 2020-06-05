const log = console.log

// Object.entries
// Object.keys
// Objecct.values
// Object.prototype.hasOwnProperty()

class Set {
  constructor() {
    this.items = {}
  }

  add(element) {
    if (Object.keys(this.items).length === 0) {
      this.items = Object.assign({}, { [element]: element })
    } else {
      this.items = Object.assign({}, this.items, { [element]: element })
    }
  }

  delete(element) {
    const entries = Object.entries(this.items)
    newItems = entries.filter((e) => e[0] !== element)
    this.items = newItems
  }

  has(element) {
    return Object.keys(this.items).includes(element)
  }

  clear() {
    this.items = {}
  }

  size() {
    return Object.keys(this.items).length
  }

  values() {
    const a = Object.values(this.items)
    return Object.values(this.items)
  }

  intersection(otherSet) {
    const thisValues = Object.values(this.items)
    const bValues = Object.values(b.items)
    const setOne = thisValues.filter((e) => bValues.includes(e))
    return setOne
  }

  union(otherSet) {
    const unionSet = new Set() // {1}
    this.values().forEach((value) => unionSet.add(value)) // {2}
    otherSet.values().forEach((value) => unionSet.add(value)) // {3}
    return unionSet
  }

  difference(otherSet) {
    const diffSet = new Set()
    const thisValues = this.values()
    const otherValues = otherSet.values()

    const diff = thisValues.filter(v => !otherValues.includes(v))
    diff.forEach(v => diffSet.add(v))
    return diffSet
  }

  isSubsetOf(otherSet) {
    const thisValues = this.values()
    const otherValues = otherSet.values()
    return thisValues.every(v => otherValues.includes(v))
  }
}


const setA = new Set(); 
setA.add(1); 
setA.add(2); 
 
const setB = new Set(); 
setB.add(1); 
setB.add(2); 
setB.add(3); 
 
const setC = new Set(); 
setC.add(2); 
setC.add(3); 
setC.add(4); 
 
console.log(setA.isSubsetOf(setB)); 
console.log(setA.isSubsetOf(setC)); 
// const setA = new Set(); 
// setA.add(1); 
// setA.add(2); 
// setA.add(3); 
 
// const setB = new Set(); 
// setB.add(2); 
// setB.add(3); 
// setB.add(4); 
 
// const differenceAB = setA.difference(setB); 
// console.log(differenceAB.values()); 

// const a = new Set()
// const b = new Set()

// a.add('one')
// a.add('three')
// a.add('five')
// //
// a.add('four')
// // log('a.values', a.values())

// b.add('two')
// b.add('four')
// b.add('six')
// //
// b.add('three')
// // log('b.values', b.values())
// log('-------------------------------')
// // log(a.intersection(b))

// log(a.difference(b))

// const set = new Set()
// set.add('one')
// log(set)
// set.add('two')
// log(set)
// log(set.has('one')) // true
// log(set.has('z')) // false
// set.clear()
// log(set)
// log(set.size())
// log(set.values())

// const aa = {
//   one: 1,
//   three: 3,
//   five: 5,
//   seven: 7,
//   nine: 9,
//   eleven: 11,
//   //
//   four: 4
// }

// const bb = {
//   two: 2,
//   four: 4,
//   six: 6,
//   eight: 8,
//   ten: 10,
//   tweleve: 12,
//   //
//   five: 5
// }




