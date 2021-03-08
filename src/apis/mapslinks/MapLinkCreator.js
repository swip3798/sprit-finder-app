export default class GoogleMapsLink {
    constructor (lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }

    getUrl = (direction = true) => {
        if (direction) {
            return `https://www.google.com/maps?daddr=${this.lat},${this.lng}`;
        }
        return `https://www.google.com/maps/search/?api=1&query=${this.lat},${this.lng}`;
    }
}