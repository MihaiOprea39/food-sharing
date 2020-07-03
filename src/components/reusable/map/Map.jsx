import React, {useContext, useState} from "react"
import {withScriptjs, withGoogleMap, GoogleMap} from "react-google-maps"
import FoodShareMarker from "./Marker";
import mapStyle from './mapStyle';
import './map.scss';
import {AuthContext} from "../../../contexts/AuthContext";

const defaultProps = {
    center: {
        lat: 34.10,
        lng: -118.33
    },
    zoom: 11
}

function Map({markers, zoom = defaultProps.zoom, center = defaultProps.center, togglePickup = false, onTogglePickup}) {
    const [selectedMarker, setSelectedMarker] = useState(null);

    return (
        <GoogleMap
            defaultZoom={zoom}
            center={center}
            defaultOptions={{styles: mapStyle}}
        >
            {markers && markers.map((marker) => (
                <FoodShareMarker
                    marker={marker}
                    key={marker.id}
                    icon={!marker.readyForPickup ?
                        {
                            url: `/assets/img/marker.png`,
                            scaledSize: new window.google.maps.Size(50, 50)
                        } : {
                            url: `/assets/img/marker-active.png`,
                            scaledSize: new window.google.maps.Size(60, 60)
                        }
                    }
                    togglePickup={togglePickup}
                    selected={selectedMarker && marker.id === selectedMarker.id}
                    position={{
                        lat: marker.latitude,
                        lng: marker.longitude
                    }}
                    onMarkerClick={(selectedMarker) => setSelectedMarker(selectedMarker)}
                    onTogglePickup={(event, marker) => onTogglePickup(event, marker)}
                />
            ))}
        </GoogleMap>
    );
}

const FoodShareMap = withScriptjs(withGoogleMap(Map));

export default FoodShareMap;
