import posts from '../data/posts'
import {combineReducers} from 'redux'

// function comments(state=[], action){
//     console.log('comments reducer')
// 
//     return state
// }

const postReducer = function posts(state = posts, action){
    
    // console.log('posts reducer')

switch(action.type){
    
    case 'REMOVE_POST': return [...state.slice(0, action.index), ...state.slice(action.index + 1 )]
    case 'ADD_POST': return [...state, action.post]
    default: return state
}

return state
}

// const rootReducer = combineReducers({posts, comments})

// export default rootReducer

export default postReducer