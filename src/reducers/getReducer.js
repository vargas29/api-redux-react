import * as actions from '../actions/getsActions'

export const initialState = {
  users: [],
  loading: false,
  hasErrors: false,
}

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_ALL:
      return { ...state, loading: true }
    case actions.GET_ALL_SUCCESS:
      return { users: action.payload, loading: false, hasErrors: false }
    case actions.GET_ALL_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}