function getRandomDate() {
    const maxDate = Date.now();
    const timestamp = Math.floor(Math.random() * maxDate);
    return new Date(timestamp);
}

function getDate() {
    function randomDate(dateMin, dateMax) {
        function randomValueBetween(min, max) {
            return Math.random() * (max - min) + min;
        }

        dateMax = dateMax || new Date().toLocaleDateString();
        dateMin = new Date(dateMin).getTime();
        dateMax = new Date(dateMax).getTime();
        let options = {day: "numeric", month: "numeric", year: "numeric"}
        if (dateMin > dateMax) {
            return new Date(randomValueBetween(dateMax, dateMin)).toLocaleDateString(dateMax, options);
        } else {
            return new Date(randomValueBetween(dateMin, dateMax)).toLocaleDateString(dateMax, options);
        }
    }

    return randomDate("11/10/2022", "01/01/2020");
}

function DateNow() {
    let options = {day: "numeric", month: "numeric", year: "numeric"}
    return new Date().toLocaleDateString(Date.now(), options);
}

export {
    getDate,
    DateNow,
}