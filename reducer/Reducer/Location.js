import Axios from "axios";
const POST_MY_LOCATION = 'POST_MY_LOCATION'
const POST_MY_LOCATION_SUCCESS = 'POST_MY_LOCATION_SUCCESS'
const POST_MY_LOCATION_FAILURE = 'POST_MY_LOCATION_FAILURE'

export const postMyLocation = () => ({ type : POST_MY_LOCATION})
export const postMyLocationSuccess = () => ({type: POST_MY_LOCATION_SUCCESS})
export const postMyLocationFailure =() => ({type: POST_MY_LOCATION_FAILURE})


const initialState = {
    location: {
        status: 'init'
    }
}

export default (state = initialState, action) => {
    switch (action.type) {

        case POST_MY_LOCATION:
            return {
                ...state,
                status: 'loading'
            }
        case POST_MY_LOCATION_SUCCESS:
            return {
                ...state,
            }
        case POST_MY_LOCATION_FAILURE:
            return {
                ...state,
            }
        default:
            return state
    }
}
export const postMyLoactionRequest = (data) => (dispatch) => {
    dispatch(postMyLocation());
    Axios.post(`http://61.97.187.57:3000/location`, {data})
        .then(() => {
            dispatch(postMyLocationSuccess())
        })
        .catch(() => {
            dispatch(postMyLocationFailure());
        })
}