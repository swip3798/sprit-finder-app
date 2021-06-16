import Prediction from './Prediction';

class PredictionApi {

    _createPrediction = (data, name, callback) => {
        let prediction = new Prediction(data.hourly_predictions.e5, data.hourly_predictions.e10, data.hourly_predictions.diesel, name);
        callback(prediction);
    }

    _verify = (data, callback) => {
        if (data.status === "OK") {
            callback();
        }
    }

    predictWithPerlman = (lat, lng, uuids, callback) => {
        const url = `https://predict.spritfinder.de/predict/perlman`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                location: [lat, lng],
                station_uuids: uuids.slice(0, 7)
            })
        })
            .then(res => res.json())
            .then((data) => {
                this._createPrediction(data, "perlman", callback);
            })
            .catch(error=>console.log(error));
    }

    predictWithHopper = (lat, lng, uuids, callback) => {
        const url = "https://predict.spritfinder.de/predict/hopper";
        const body = JSON.stringify({
            location: [lat, lng],
            station_uuids: uuids.slice(0,7)
        });
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: body
        })
            .then(res => res.json())
            .then((data) => {
                this._createPrediction(data, "hopper", callback);
            })
            .catch(error=>console.log(error));
    }

    isApiReachable = (callback) => {
        const url = `https://predict.spritfinder.de/status`;
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                this._verify(data, callback);
            })
    }
}

export default PredictionApi;