import { v4 as uuidv4 } from 'uuid'
import { IdentifiedPostData } from '../types'

const initialState: IdentifiedPostData[] = []

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'posts/added':
      return [
        ...state,
        {
          ...action.payload.content,
          id: uuidv4(),
        },
      ]
    case 'posts/removed': {
      const postIndex = state.findIndex(({ id }) => id === action.payload.id)
      return [...state.slice(0, postIndex), ...state.slice(postIndex + 1)]
    }
    case 'posts/updated': {
      const postIndex = state.findIndex(({ id }) => id === action.payload.id)
      return [
        ...state.slice(0, postIndex),
        {
          ...state[postIndex],
          ...action.payload.content,
        },
        ...state.slice(postIndex + 1),
      ]
    }
    default:
      return state
  }
}

export default postsReducer
