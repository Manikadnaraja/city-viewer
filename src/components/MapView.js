import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function MapView({data}) {
    console.log(data);
    return (
        <MapContainer center={data.position} zoom={10} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {data?.places.map(place => (
                <Marker key={place['post code']} position={[place.latitude, place.longitude]}>
                    <Popup position={[place.latitude, place.longitude]}>
                        <div>Country: {data.country}</div>
                        <div>Name: {place['place name']}</div>
                        <div>Post Code: {place['post code']}</div>
                    </Popup>
                </Marker>
            ))
            }
        </MapContainer>
    )
}

export default MapView
