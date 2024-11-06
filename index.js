import { add, reset, subtract } from "./actions.js"
import { tallyReducer, } from "./reducer.js"
import { createStore, } from "./store.js"

const store = createStore(tallyReducer)

store.subscribe(() => console.log('count:', store.getState()))

console.log(store.getState())
store.dispatch(add())
store.dispatch(add())
store.dispatch(subtract())
store.dispatch(reset())