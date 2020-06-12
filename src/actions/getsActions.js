
export const GET_ALL = 'GET ALL'
export const GET_ALL_SUCCESS = 'GET_ALL_SUCCESS'
export const GET_ALL_FAILURE = 'GET_ALL_FAILURE'

export const getAll = () => ({
    type: GET_ALL,
  })
  
  export const getAllSuccess = users => ({
    type: GET_ALL_SUCCESS,
    payload: users,
  })
  
  export const getAllFailure = () => ({
    type: GET_ALL_FAILURE,
  })


  export default function getData() {
    
    return async dispatch => {
      dispatch(getAll())
  
      try {
        const response = await fetch('https://gorest.co.in/public-api/users?_format=json&access-token=nL6p7nrqP2ivDEKY7dtSEECsN0a7ehywZMaE')
        const data = await response.json()
  
        dispatch(getAllSuccess(data))
        
      } catch (error) {
        dispatch(getAllFailure())
      }
    }
  }