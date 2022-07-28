import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import usersReducer from './users/users.reducer'
import formsReducer from './forms/forms.reducer'

const allReducers = combineReducers({
  users: usersReducer,
  forms: formsReducer,
})

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export default createStore(allReducers, composeEnhancers( applyMiddleware(thunk) ))

