import { v4 as uuidv4 } from 'uuid'

const initialState = []

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'posts/postAdded':
      return [
        ...state,
        {
          ...action.payload.content,
          id: uuidv4(),
        },
      ]
    case 'posts/postRemoved': {
      const postIndex = state.find(({ id }) => id === action.payload.id)
      return [
        ...state.slice(0, postIndex),
        ...state.slice(postIndex),
      ]
    }
    case 'posts/postModified': {
      const postIndex = state.find(({ id }) => id === action.payload.id)
      return [
        ...state.slice(0, postIndex),
        {
          ...state[postIndex],
          ...action.payload.content,
        },
        ...state.slice(postIndex),
      ]
    }
    default:
      return state
  }
}

export default postsReducer
