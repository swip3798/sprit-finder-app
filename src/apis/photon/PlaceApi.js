import Place from "./Place";
//
class PlaceApi {
    _createPlaces = (data, callback) => {
        this.lastRequest = new Date().getTime() / 1000;
        let places = [];
        data.features.forEach(placeData => {
            places.push(new Place(
                placeData.properties.osm_id,
                placeData.properties.name,
                placeData.properties.street,
                placeData.properties.city,
                placeData.properties.postcode,
                placeData.properties.country,
                placeData.properties.state,
                placeData.properties.countrycode,
                placeData.properties.type,
                placeData.geometry.coordinates[1],
                placeData.geometry.coordinates[0],
            ));
        });
        callback(places);
    }

    _verify = (data, callback) => {
        if (data.features) {
            callback();
        }
    }

    searchByText = (text, callback) => {
        const url = `https://photon.komoot.io/api/?q=${text}&lang=de&limit=8`;
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                this._createPlaces(data, callback);
            })
            .catch();
    }

    isApiReachable = (callback) => {
        const url = `https://photon.komoot.io/api/?q=berlin&lang=de&limit=2`;
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                this._verify(data, callback);
            })
    }
}

export default PlaceApi;