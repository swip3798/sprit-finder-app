class Prediction {
    constructor(e5, e10, diesel, model_name) {
        this.e5 = e5;
        this.e10 = e10;
        this.diesel = diesel;
        this.model_name = model_name
    }

    getRechartsData = () => {
        let data = [];
        for (let i = 0; i < 24; i++) {
            data.push({
                name: i + ":00",
                e5: Math.round(this.e5[i] * 100) / 100,
                e10: Math.round(this.e10[i] * 100) / 100,
                diesel: Math.round(this.diesel[i] * 100) / 100,
            });
        }
        return data;
    }

    isCurrentUpwardTrend = () => {
        let currentDate = new Date();
        let currentHour = currentDate.getHours();
        return {
            e5: this.e5[currentHour + 1] > this.e5[currentHour],
            e10: this.e10[currentHour + 1] > this.e10[currentHour],
            diesel: this.diesel[currentHour + 1] > this.diesel[currentHour]
        }
    }
}

export default Prediction;