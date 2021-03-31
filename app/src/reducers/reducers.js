import {
  UPDATE_QUOTE, 
  FETCHING_QUOTE, 
  FETCHING_SUCCESS, 
  FETCHING_FAILURE} 
  from '../actions/actions'

const initialState = {
  quoteTitle: '',
  quote: '',
  isFetching: false,
  error: ''
}

export const reducer = (state = initialState ,action) => {
  switch(action.type) {
    case UPDATE_QUOTE:
      return {
        ...state,
        quoteTitle: action.payload
      }
      case FETCHING_QUOTE:
        return {
          ...state,
          isFetching: true
        }
      case FETCHING_SUCCESS:
        return {
          ...state,
          isFetching: false,
          quote: action.payload
        }
      case FETCHING_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: action.payload
        }
    default:
      return state
  }
}