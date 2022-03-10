import {combineReducers} from 'redux'


const authUser = (state = {},  action:any) => {
    switch (action.type) {
        case 'SET_AUTH_USER':
            return action.payload;
        default:
            return state
    }
}


const reducers = combineReducers({
    authUser: authUser
})


export default reducers;
