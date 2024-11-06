
//action types - like the label of the action
export const ADD = "ADD"
export const SUBTRACT = "SUBTRACT"
export const RESET = "RESET"

//action creators- 
//functions that return/create action objects
//describes specific change or event in the app
export const add = () => ({type: ADD})
export const subtract = () => ({type: SUBTRACT})
export const reset = () => ({type: RESET})