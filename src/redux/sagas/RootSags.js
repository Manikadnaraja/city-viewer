import { all } from 'redux-saga/effects';
import getCityDetails from './Saga';

export default function* rootSagas() {
    yield all([
        getCityDetails()
    ])
}