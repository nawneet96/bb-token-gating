import { combineReducers } from 'redux'
import { navbarReducer } from './navbar.reducer'
import { notificationReducer } from './notification.reducer'

const rootReducer = combineReducers({
  navbar: navbarReducer,
  notification: notificationReducer,
})
export default rootReducer
