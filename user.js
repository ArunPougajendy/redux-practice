const { createStore } = require('redux')


const userIntialStateData = []
//Since we cant directly initialiaze an empty array or object to state so we are creating temp variabled with empty array and assigining to the state
const userReducer = (state = [], action)=>{
    switch(action.type) {
        case 'ADD_USER':
            //return state.concat.action.user
            return [...state,action.user]
        case 'DELETE_USER':
            return state.filter(user => user.id != action.id)
        case 'EDIT_USER':
            return state.map(user => {
                if(user.id == action.id) {
                    return Object.assign({},user,action.user)
                } else {
                    return user
                }
            })
        default: 
            return state
    }
}
const store = createStore(userReducer)

store.subscribe(()=>{
    console.log(store.getState())
})


//Action generators
const ADD_USER ='ADD_USER'
const DELETE_USER = 'DELETE_USER'
const addUser = (obj) => {
    return {
        type:ADD_USER,
        user: {
            id: obj.id,
            name: obj.name
        }
    }
}

const deleteUser = (id) => {
    return {
        type: DELETE_USER,
        id
    }
}

const editUser = (id,user) => {
    return {
        type: 'EDIT_USER',
        id,
        user
    }
}

store.dispatch(addUser({id:1,name:'arun'}))
store.dispatch(addUser({id:2,name:'gokul'}))
store.dispatch(addUser({id:3,name:'harshith'}))
store.dispatch(deleteUser(2))
store.dispatch(editUser(3,{name:'prashanth'}))
