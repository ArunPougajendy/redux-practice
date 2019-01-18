const { createStore,combineReducers } = require('redux')
// const { addUser,removeUser,editUser } = require('./actions/user')

const userIntialStateData = []
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


const store = createStore(combineReducers({
    users: userReducer
}))

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(addUser({id:1,name:'arun'}))