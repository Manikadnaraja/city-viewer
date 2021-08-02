import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Alert from 'react-bootstrap/Alert'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { map as _map } from 'lodash';

import MapView from './MapView'

function Map() {

    const { cityDetails } = useSelector((state) => state.cityReducer);

    return (
        <div>
            {cityDetails?.loading && <ProgressBar animated now={100} />}

            {cityDetails?.error && <Alert variant="danger">
                Location Could not found
            </Alert>}

            {cityDetails?.data && <MapView data={cityDetails.data}></MapView>}
        </div>
    )
}

export default Map
