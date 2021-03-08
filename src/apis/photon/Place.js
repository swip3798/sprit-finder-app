class Place {
    constructor(id, name, street, city, postcode, country, state, countryCode, type, lat, lng) {
        this.id = id;
        this.name = name;
        this.street = street;
        this.city = city;
        this.postcode = postcode;
        this.type = type;
        this.lat = lat;
        this.lng = lng;
        this.country = country;
        this.state = state;
        this.countryCode = countryCode;
    }

    getPlaceString = () => {
        const properties = [this.name, this.postcode, this.city, this.state, this.countryCode];
        const filtered = properties.filter(function (value) {
            return value;
        });
        return filtered.join(", ");
    }
}

export default Place;