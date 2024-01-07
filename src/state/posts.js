export const SET_DATA = 'posts/SET_DATA'

export const createActionSetCart = (data) => ({
  type: SET_DATA,
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
    default:
      return state
  }
}

export default reducer
