import CityReducer from './CityReducer';
import { combineReducers } from 'redux'

export const rootReducers = combineReducers({
    cityReducer: CityReducer
})