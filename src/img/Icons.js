import L from 'leaflet';
import marker from './marker-icon.png';
import person from './marker-person.png';
import retina from './marker-icon-2x.png';
import shadow from './marker-shadow.png';

const iconPerson = L.icon({
    iconUrl: person,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    shadowUrl: shadow,
    tooltipAnchor: [16, -28],
});

const iconNormal = L.icon({
    iconUrl: marker,
    iconRetinaUrl: retina,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    shadowUrl: shadow,
    tooltipAnchor: [16, -28],
});

export { iconPerson, iconNormal };