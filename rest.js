module.exports = function average(...values) {
    let sum = 0;

    values.forEach(value => {sum += value});

    return sum/values.length;
};
