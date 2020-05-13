import React, {useState} from "react"
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
import FoodShareMarker from "./Marker";
import mapStyle from './mapStyle';
import './map.scss';

const defaultProps = {
    center: {
        lat: 45.4211,
        lng: -75.6903
    },
    zoom: 11
}

function Map({markers, zoom = defaultProps.zoom, center = defaultProps.center}) {
    const [selectedMarker, setSelectedMarker] = useState(null);

    return (
        <GoogleMap
            defaultZoom={zoom}
            defaultCenter={center}
            defaultOptions={{ styles: mapStyle }}
        >
            {markers && markers.map((marker) => (
                <FoodShareMarker
                    marker={marker}
                    key={marker.id}
                    icon={{
                        url: `/assets/img/marker3.png`,
                        scaledSize: new window.google.maps.Size(60, 60)
                    }}
                    selected={selectedMarker && marker.id === selectedMarker.id}
                    position={{
                        lat: 45.4211,
                        lng: -75.6903
                    }}
                    onMarkerClick={(selectedMarker) => setSelectedMarker(selectedMarker)}
                />
            ))}
        </GoogleMap>
    );
}

const FoodShareMap = withScriptjs(withGoogleMap(Map));

export default FoodShareMap;
