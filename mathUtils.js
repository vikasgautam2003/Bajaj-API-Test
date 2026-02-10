const getFibonacci = (n) => {
    if (typeof n !== 'number' || n < 0) throw new Error("Input must be a non-negative integer");
    if (n === 0) return [];
    if (n === 1) return [0];

    let series = [0, 1];
    while (series.length < n) {
        series.push(series[series.length - 1] + series[series.length - 2]);
    }
    return series;
};

const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const getPrimes = (arr) => {
    if (!Array.isArray(arr)) throw new Error("Input must be an array of integers");
    return arr.filter(num => Number.isInteger(num) && isPrime(num));
};

const gcd = (a, b) => (!b ? a : gcd(b, a % b));

const lcm = (a, b) => {
    if (a === 0 || b === 0) return 0;
    return Math.abs((a * b) / gcd(a, b));
};

const getHCF = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) throw new Error("Input must be a non-empty array");
    return arr.reduce((a, b) => gcd(a, b));
};

const getLCM = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) throw new Error("Input must be a non-empty array");
    return arr.reduce((a, b) => lcm(a, b));
};

module.exports = { getFibonacci, getPrimes, getHCF, getLCM };
