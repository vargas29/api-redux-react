import { combineReducers } from 'redux'

import getReducer from './getReducer'

const rootReducer = combineReducers({
  users: getReducer,
})

export default rootReducer