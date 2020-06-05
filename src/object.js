const log = console.log

// Object.entries
// Object.keys
// Objecct.values
// Object.prototype.hasOwnProperty()

const o = {
  a: 1,
  b: 2
}

log('o', o)
// o { a: 1, b: 2 }
log('entries', Object.entries(o))
// entries [ [ 'a', 1 ], [ 'b', 2 ] ]
log('keys', Object.keys(o))
// keys [ 'a', 'b' ]
log('values', Object.values(o))
// values [ 1, 2 ]
log('hasOwnProperty', o.hasOwnProperty('a'))
// hasOwnProperty true
