import * as R from 'ramda'
import { Person } from './m'
const log = console.log
const alert = console.log

// --------------------------------------------- //

function doAction(state = initialState, action) {
  let newState = {};
  switch (action.type) {
    case "CREATE":
      // update state, generating newState,
      // depending on the action data
      // to create a new item
      return newState;

    case "DELETE":
      // update state, generating newState,
      // after deleting an item
      return newState;

    case "UPDATE":
      // update an item,
      // and generate an updated state
      return newState;

    default:
      return state;
  }
}

// 

const dispatchTable = {
  CREATE: (state, action) => {
    // update state, generating newState,
    // depending on the action data
    // to create a new item
    return newState;
  },

  DELETE: (state, action) => {
    // update state, generating newState,
    // after deleting an item
    return newState;
  },

  UPDATE: (state, action) => {
    // update an item,
    // and generate an updated state
    return newState;
  }
};

function doAction2(state = initialState, action) {
  return dispatchTable[action.type]
    ? dispatchTable[action.type](state, action)
    : state;
}


const x = doAction2(['a'], 'CREATE')

log(x)