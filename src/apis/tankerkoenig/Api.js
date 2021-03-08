import Station from './Station';

class Api {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    _createStations = (data, callback) => {
        let stations = [];
        data.stations.forEach(stationData => {
            stations.push(new Station(
                stationData.id, 
                stationData.name, 
                stationData.brand, 
                stationData.lat, 
                stationData.lng, 
                stationData.street, 
                stationData.place, 
                stationData.houseNumber, 
                stationData.postCode, 
                stationData.dist, 
                stationData.diesel, 
                stationData.e5, 
                stationData.e10, 
                stationData.isOpen
            ));
        });
        callback(stations);
    }

    _verify = (data, callback) => {
        if (data.ok) {
            callback();
        }
    }

    searchByLocation = (lat, lng, rad, callback) => {
        const url = `https://creativecommons.tankerkoenig.de/json/list.php?lat=${lat}&lng=${lng}&rad=${rad}&sort=dist&type=all&apikey=${this.apiKey}`;
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                this._createStations(data, callback);
            })
            .catch();
    }

    isApiReachable = (callback) => {
        const url = `https://creativecommons.tankerkoenig.de/json/list.php?lat=52.521&lng=13.438&rad=1.0&sort=dist&type=all&apikey=${this.apiKey}`;
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                this._verify(data, callback);
            })
    }
}

export default Api;