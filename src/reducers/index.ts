import { combineReducers } from 'redux'
import introReducer from './intro-reducer'
import postsReducer from './posts-reducer'

const rootReducer = combineReducers({
  intro: introReducer,
  posts: postsReducer,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
