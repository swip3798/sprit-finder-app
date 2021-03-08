import React from 'react';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import StationMarker from './StationMarker';
import DraggableMarker from './DraggableMarker';


export default function TankMap(props) {
    const personMarker = <DraggableMarker  position={props.center} onPositionChanged={props.onPositionChanged} />

    const handleMapCreate = (map) => {
        if (props.whenCreated) {
            props.whenCreated(map);
        }
    }

    const stations = Array.isArray(props.stations) ? props.stations.map(station => (
        <StationMarker station={station} mainFuelType={props.mainFuelType} key={"StationMarker:" + station.id} />
    )) : [];


    return (
        <MapContainer center={props.center} zoom={13} scrollWheelZoom={true} whenCreated={handleMapCreate} zoomControl={false}>
            <ZoomControl position="topright" />
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {stations}
            {props.isLocated && personMarker}


        </MapContainer>
    );
}