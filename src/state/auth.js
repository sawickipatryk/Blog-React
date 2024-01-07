const SET_IS_USER_LOGGED_IN = 'auth/SET_IS_USER_LOGGED_IN'
const REMOVE_IS_USER_LOGGED_IN = 'auth/REMOVE_IS_USER_LOGGED_IN'
const SET_USER_ID = 'auth/SET_USER_ID'
const REMOVE_USER_ID = 'auth/REMOVE_USER_ID'
const SET_USER_DISPLAY_NAME = 'auth/SET_USER_DISPLAY_NAME'
const REMOVE_USER_DISPLAY_NAME = 'auth/REMOVE_USER_DISPLAY_NAME'
const SET_USER_EMAIL = 'auth/SET_USER_EMAIL'
const REMOVE_USER_EMAIL = 'auth/REMOVE_USER_EMAIL'
const SET_USER_AVATAR = 'auth/SET_USER_AVATAR'
const REMOVE_USER_AVATAR = 'auth/REMOVE_USER_AVATAR'

export const createActionSetIsUserLoggedId = () => ({
  type: SET_IS_USER_LOGGED_IN
})
export const createActionRemoveIsUserLoggedId = () => ({
  type: REMOVE_IS_USER_LOGGED_IN
})
export const createActionSetUserId = (message) => ({
  type: SET_USER_ID,
  payload: { message }
})
export const createActionRemoveUserId = (message) => ({
  type: REMOVE_USER_ID,
  payload: { message }
})
export const createActionSetUserDisplayName = (message) => ({
  type: SET_USER_DISPLAY_NAME,
  payload: { message }
})
export const createActionRemoveUserDisplayName = (message) => ({
  type: REMOVE_USER_DISPLAY_NAME,
  payload: { message }
})
export const createActionSetUserEmail = (message) => ({
  type: SET_USER_EMAIL,
  payload: { message }
})
export const createActionRemoveUserEmail = (message) => ({
  type: REMOVE_USER_EMAIL,
  payload: { message }
})
export const createActionSetUserAvatar = (message) => ({
  type: SET_USER_AVATAR,
  payload: { message }
})
export const createActionRemoveUserAvatar = (message) => ({
  type: REMOVE_USER_AVATAR,
  payload: { message }
})

const initialState = {
  isUserLoggedIn: false,
  userId: '',
  userDisplayName: '',
  userEmail: '',
  userAvatar: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_USER_LOGGED_IN:
      return {
        ...state,
        isUserLoggedIn: true
      }
    case REMOVE_IS_USER_LOGGED_IN:
      return {
        ...state,
        isUserLoggedIn: false
      }
    case SET_USER_ID:
      return {
        ...state,
        userId: action.payload.message
      }
    case REMOVE_USER_ID:
      return {
        ...state,
        userId: initialState.userId
      }
    case SET_USER_DISPLAY_NAME:
      return {
        ...state,
        userDisplayName: action.payload.message
      }
    case REMOVE_USER_DISPLAY_NAME:
      return {
        ...state,
        userDisplayName: initialState.userDisplayName
      }
    case SET_USER_EMAIL:
      return {
        ...state,
        userEmail: action.payload.message
      }
    case REMOVE_USER_EMAIL:
      return {
        ...state,
        userEmail: initialState.userEmail
      }
    case SET_USER_AVATAR:
      return {
        ...state,
        userAvatar: action.payload.message
      }
    case REMOVE_USER_AVATAR:
      return {
        ...state,
        userAvatar: initialState.userAvatar
      }
    default:
      return state
  }
}
export default reducer
