import React, {useEffect} from "react"
import {InfoWindow, Marker} from "react-google-maps";
import parse from "html-react-parser";
import Checkbox from "@material-ui/core/Checkbox";
import {useHistory} from "react-router-dom";
import CalculateStarRating from "../../../services/calculate-star-rating";

const defaultPosition = {lat: -34.397, lng: 150.644};

export default function FoodShareMarker({marker, position = defaultPosition, selected, icon = null, togglePickup = false, onTogglePickup, onMarkerClick}) {
    const history = useHistory();

    const handleScheduleInteract = (id) => {
        history.push(`/pick-up?restaurant=${id}`);
    }

    const onMarkerInteract = (marker) => {
        onMarkerClick(marker);
    };

    useEffect(() => {
        const escapeKeyListener = event => {
            if (event.key === "Escape") {
                onMarkerClick(null);
            }
        };
        window.addEventListener("keydown", escapeKeyListener);

        return () => window.removeEventListener("keydown", escapeKeyListener);
    }, []);

    return (
        <Marker
            position={position}
            icon={icon}
            onClick={() => onMarkerInteract(marker)}>

            {selected && (
                <InfoWindow
                    onCloseClick={() => onMarkerInteract(null)}
                    position={position}
                >
                    <div className="foodshare-info-window-wrapper">
                        <h3>{marker.name} - {marker.id}</h3>
                        <ul className="marker-field-container">
                            <li>
                                <div><span className="marker-field meta-property">Address</span> <span
                                    className="marker-field meta-value">{marker.address}</span>
                                </div>
                            </li>
                            <li>
                                <div><span className="marker-field meta-property">Rating</span>
                                    <span
                                        className="marker-field meta-value">{parse(CalculateStarRating(Number(marker.rating)))}
                                    </span>
                                </div>
                            </li>
                            {togglePickup && (
                                <li>
                                    <div><span className="marker-field meta-property">Pick-up</span>
                                        <Checkbox
                                            onChange={(event) => onTogglePickup(event, marker.id)}
                                            checked={marker.readyForPickup}
                                            color="primary"
                                        />
                                    </div>
                                </li>
                            )}
                        </ul>
                        {!togglePickup && (
                            <div>
                                <button
                                    className="btn btn-primary animate-up-2 schedule-pickup"
                                    onClick={() => handleScheduleInteract(marker.id)}
                                >Schedule pickup
                                </button>
                            </div>
                        )}
                    </div>
                </InfoWindow>
            )}
        </Marker>
    );
}
