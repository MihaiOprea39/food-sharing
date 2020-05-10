import React from "react";
import GoogleMapReact, {Marker} from 'google-map-react';

const defaultProps = {
    center: {
        lat: 59.95,
        lng: 30.33
    },
    zoom: 11
}

const FoodShareMarker = ({ text }) => <div>{text}</div>;

export default function FoodShareMap({center = defaultProps.center, zoom = defaultProps.zoom}) {
    console.log(process.env.REACT_APP_MAPS_KEY);

    return (
        <div style={{height: '100vh', width: '100%'}}>
            <GoogleMapReact
                bootstrapURLKeys={{key: process.env.REACT_APP_MAPS_KEY}}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {/*<Marker*/}
                {/*    lat={59.955413}*/}
                {/*    lng={30.337844}*/}
                {/*    name="My Marker"*/}
                {/*/>*/}
            </GoogleMapReact>
        </div>);

}
