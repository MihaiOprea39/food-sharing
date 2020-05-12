import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
import FoodShareMarker from "./Marker";

const defaultProps = {
    center: {
        lat: -34.397,
        lng: 150.644
    },
    zoom: 11
}

const KEY = process.env.REACT_APP_MAPS_KEY;

const FoodShareMap = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${KEY}&v=3.exp&libraries=places`,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100vh` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)(({zoom = defaultProps.zoom, center = defaultProps.center, onMarkerClick}) => {
        const onMarkerInteract = () => {
            onMarkerClick();
        }

        return (
            <GoogleMap
                zoom={zoom}
                center={center}
            >
                <FoodShareMarker visible onMarkerClick={onMarkerInteract}>
                    <div>
                        <button className="btn btn-block btn-primary mt-4">Schedule pickup</button>
                    </div>
                </FoodShareMarker>
            </GoogleMap>
        );
    }
);


export default FoodShareMap;
