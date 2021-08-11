import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import {contactReducer} from './reducers/contactReducer'
import { userReducer } from './reducers/userReducer';
// import { userReducer } from './reducers/userReducer';

// Connecting redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Combining reducers into one
const rootReducer = combineReducers({
  contactsModule: contactReducer,
  userModule:userReducer
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))