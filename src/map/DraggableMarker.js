import React, { useState, useRef, useMemo } from 'react';
import { Marker, useMapEvent } from 'react-leaflet';
import { iconPerson } from '../img/Icons';

export default function DraggableMarker(props) {
    const [position, setPosition] = useState(props.position);
    const [firstRendered, setFirstRendered] = useState(true);
    const markerRef = useRef(null);

    const onPositionChanged = (location) => {
        props.onPositionChanged(location);
    }

    const map = useMapEvent('moveend', () => {
        if (map._setViewWasCalled) {
            setPosition(map.getCenter());
            map._setViewWasCalled = false;
        }
    })

    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current;
                if (marker != null) {
                    setPosition(marker.getLatLng());
                    onPositionChanged(marker.getLatLng());
                }
            },
        }),
        [],
    );
    if (firstRendered) {
        map._setViewWasCalled = false;
        setFirstRendered(false);
    }

    return (
        <Marker
            draggable={true}
            eventHandlers={eventHandlers}
            position={position}
            ref={markerRef}
            key="userLocation"
            icon={iconPerson}
        />
    )
}