const initialState = {
  image: '',
  description: '',
}

const introReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'intro/updated':
      return {
        ...state,
        image: action.payload.image,
        description: action.payload.description,
      }
    default:
      return state
  }
}

export default introReducer
