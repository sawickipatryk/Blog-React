export const SET_DATA = 'posts/SET_DATA'
export const CREATE_POST = 'posts/CREATE_POST'

export const createActionSetPosts = (data) => ({
  type: SET_DATA,
  payload: { data }
})
export const createActionCreatPost = (data) => ({
  type: CREATE_POST,
  payload: { data }
})

const initialState = {
  data: null
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload.data
      }
    case CREATE_POST:
      return {
        ...state,
        data: action.payload.data
      }
    default:
      return state
  }
}

export default reducer
