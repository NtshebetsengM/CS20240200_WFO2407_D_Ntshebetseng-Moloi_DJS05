//show how it will happen

import { ADD , RESET, SUBTRACT } from "./actions.js"

export function tallyReducer(state = 0,action){
    switch(action.type){
    case ADD:
        return state + 1
    case SUBTRACT:
        return state - 1
    case RESET:
        return state = 0
    default:
        return state
    }
    
}