import axios from 'axios';

export const UPDATE_QUOTE = 'UPDATE_QUOTE';
export const FETCHING_QUOTE = 'FETCHING_QUOTE';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';

export const getAnimeQuote = () => (dispatch) => {
  dispatch( {type: FETCHING_QUOTE} );

  axios.get('https://animechan.vercel.app/api/random')
    .then(res => {
      console.log(res)
      dispatch({
        type: FETCHING_SUCCESS,
        payload: res.data
      })
    })
    .catch(err=> {
      console.log(err)
      dispatch({type: FETCHING_FAILURE, 
      payload: err.data
      })
    })
}