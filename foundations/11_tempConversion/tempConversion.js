function round(number, base = 10) {
  return Math.round(number * base) / base;
}

const convertToCelsius = function (temp) {
  return round((temp - 32) * (5 / 9));
};

const convertToFahrenheit = function (temp) {
  return round((temp * 9) / 5 + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
