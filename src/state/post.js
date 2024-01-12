export const SET_DATA = 'post/SET_DATA'

export const createActionSetPost = (data) => ({
  type: SET_DATA,
  payload: { data }
})

const initialState = {
  data: {}
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload.data
      }
    default:
      return state
  }
}

export default reducer
