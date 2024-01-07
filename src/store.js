import { createStore, combineReducers } from 'redux'

import loadersReducer from './state/loaders'
import authReducer from './state/auth'
import postsReducer from './state/posts'

const rootReducer = combineReducers({
  loaders: loadersReducer,
  auth: authReducer,
  posts: postsReducer
})

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
