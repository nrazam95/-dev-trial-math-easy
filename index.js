function capitalize(str) {
    return str.charAt(0) + str.slice(1).toLowerCase();
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
    capitalize,
    getRandomInt,
};