const { createStore,combineReducers } = require('redux')

const taskStateData =[
        {id:1, name:'Task1', isCompleted:true},
        {id:2, name:'Task2', isCompleted:true},
        {id:3, name:'Task3', isCompleted:false},
        {id:4, name:'Task4', isCompleted:true},
        {id:5, name:'Task5', isCompleted:false}
    ]
const taskReducer = (state = taskStateData , action) => {
    switch(action.type) {
        case 'REMOVE_TASK':
            return state.filter(task => task.id != action.id)
        case 'EDIT_TASK':
            let task = state.find(task => task.id == action.id )
            task.isCompleted = action.status 
        default:
            return state
    }
}

const REMOVE_TASK = 'REMOVE_TASK'
const EDIT_TASK = 'EDIT_TASK'

const removeTask = (id) => {
    return {
        type: REMOVE_TASK,
        id
    }
}

const editTask = (id, status) => {
    return {
        type: EDIT_TASK,
        id,
        status
    }
}

const store = createStore(taskReducer)

store.subscribe(()=>{
    console.log(store.getState())
})


store.dispatch(removeTask(1))
store.dispatch(editTask(2,false))



