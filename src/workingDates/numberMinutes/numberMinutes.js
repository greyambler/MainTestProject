function numberMinutes(iputDate, currentDay) {
    if (currentDay === undefined) {
        currentDay = Date.now();
    }
    const raz = (currentDay - iputDate) / 1000 / 60;
    return raz.toFixed(0)
}

module.exports = numberMinutes;
