import {combineReducers} from 'redux'

const authUser = (state = {},  action) => {
    switch (action.type) {
        case 'SET_AUTH_USER':
            return action.payload;
        default:
            return state
    }
}


const currSchool = (state = {},  action) => {
    switch (action.type) {
        case 'SET_CURR_SCHOOL':
            return action.payload;
        default:
            return state
    }
}

const reducers = combineReducers({
    authUser: authUser,
    currSchool:currSchool
})


export default reducers;
