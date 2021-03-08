class Station {
    constructor(id, name, brand, lat, lng, street, place, houseNumber, postCode, dist, diesel, e5, e10, isOpen) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.street = street;
        this.place = place;
        this.houseNumber = houseNumber;
        this.postCode = postCode;
        this.lat = lat;
        this.lng = lng;
        this.dist = dist;
        this.diesel = diesel;
        this.e5 = e5;
        this.e10 = e10;
        this.isOpen = isOpen;
    }
}

export default Station;