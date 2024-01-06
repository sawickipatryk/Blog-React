import { createStore, combineReducers } from 'redux'

import loadersReducer from './state/loaders'

const rootReducer = combineReducers({
  loaders: loadersReducer
})

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
