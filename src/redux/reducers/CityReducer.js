import { SET_DETAILS_LOADING, SET_DETAILS_ERROR, SET_DETAILS_SUCCESS } from './../../constants/actionTypes';



const initialState = {
    cityDetails: { error: false, loading: false, data: null }
}


function CityReducer(state = initialState, action) {

    switch (action.type) {
        case SET_DETAILS_LOADING:
            return {
                ...state,
                cityDetails: { error: false, loading: true, data: null }
            }
        case SET_DETAILS_ERROR:
            return {
                ...state,
                cityDetails: { error: true, loading: false, data: null }
            }
        case SET_DETAILS_SUCCESS:
            return {
                ...state,
                cityDetails: { error: false, loading: false, data: action.payLoad }
            }
        default:
            return state
    }
}


export default CityReducer
