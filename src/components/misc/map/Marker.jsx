import React, {Fragment, useState, useEffect} from "react"
import {Marker, InfoWindow} from "react-google-maps";

const defaultPosition = {lat: -34.397, lng: 150.644};

export default function FoodShareMarker({visible, position = defaultPosition, popup = true, onMarkerClick, children}) {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const onMarkerInteract = () => {
        setIsPopupVisible(true);
        onMarkerClick();
    };

    useEffect(() => {
        const escapeKeyListener = event => {
            if (event.key === "Escape") {
                setIsPopupVisible(false);
            }
        };
        window.addEventListener("keydown", escapeKeyListener);

        return () => window.removeEventListener("keydown", escapeKeyListener);
    },[]);

    return (
        <Fragment>
            {visible &&
            <Marker position={position} onClick={onMarkerInteract}>
                {popup && isPopupVisible &&
                <InfoWindow onCloseClick={() => setIsPopupVisible(false)}>
                    {children}
                </InfoWindow>
                }
            </Marker>
            }
        </Fragment>
    );
}
