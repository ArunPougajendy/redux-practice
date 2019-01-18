const { createStore } = require('redux');
/*STORE
ACTION
ACTION GENERATOR
DISPATCH
SUBSCRIBE
REDUCER*/

const numberReducer = ( state = {value:0},action )=>{
    switch(action.type) {
        case 'INCREMENT':
            return {
                value: state.value + 1
            }
        case 'DECREMENT':
            return {
                value: state.value - 1
            }
        case 'RESET':
            return {
                value: 0
            }
        default: 
            return state
    }
};

const store = createStore(numberReducer);

store.subscribe(()=>{
    console.log(store.getState())
})
//action generators which responsible for creating the actions

const increment  = () => {
    return {
        type: 'INCREMENT'
    }
}

const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}


store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'DECREMENT'})
store.dispatch({type: 'RESET'})
store.dispatch({type: 'DECREMENT'})

store.dispatch(increment())
store.dispatch(decrement())