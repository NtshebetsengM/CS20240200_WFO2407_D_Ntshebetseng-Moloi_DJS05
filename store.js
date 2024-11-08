export function createStore(reducer){
    let state
    let listeners= []

    const getState = () => JSON.stringify(state)

    const dispatch = (action) =>{
        state = reducer(state,action)
        listeners.forEach(listener => listener())
    }
    const subscribe = (listener) => {
        listeners.push(listener)
        return ()=> {
            listeners = listeners.filter(l => l !== listener)
        }
    }
    dispatch({})
    
    return {getState, dispatch, subscribe}
}