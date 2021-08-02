import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { GET_DETAILS, SET_DETAILS_ERROR, SET_DETAILS_LOADING, SET_DETAILS_SUCCESS } from './../../constants/actionTypes';
import { map as _map } from 'lodash';


const triggerApicall = function* ({ payLoad }) {

    const { city, country, state } = payLoad;
    console.log(city, country, state)
    let data;
    yield put({ type: SET_DETAILS_LOADING, payLoad: data })

    yield axios.get(`http://api.zippopotam.us/${country}/${state}/${city}`).then(res => {

        const { places } = res.data;
        const latitude = _map(places, 'latitude').sort((a, b) => a + b);
        const longitude = _map(places, 'longitude').sort((a, b) => a - b);
        res.data['position'] = [latitude[0], longitude[0]]
        data = res.data;
    }, err => data = null);
    if (data) {
        yield put({ type: SET_DETAILS_SUCCESS, payLoad: data })

    } else {
        yield put({ type: SET_DETAILS_ERROR, payLoad: data })

    }


}

export default function* getCityDetails() {
    yield takeLatest(GET_DETAILS, triggerApicall)
}

