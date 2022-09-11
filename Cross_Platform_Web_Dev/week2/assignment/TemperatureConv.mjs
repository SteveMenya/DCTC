function calculateSum(num1, num2) {
  return num1 + num2;
}

function calculateDifference(num1, num2) {
  return num1 - num2;
}

function convertTemperatureFunc(unit, temperature) {
  if (unit == "celcius") {
    let fahrenheit = (9 / 5) * temperature + 32;
    let kelvin = temperature + 273;
    let response = {
      fahrenheit: fahrenheit,
      kelvin: kelvin,
    };
    return response;
  } else if (unit == "fahrenheit") {
    let celcius = (5 / 9) * (temperature - 32);
    let kelvin = (5 / 9) * (temperature - 32) + 273;
    let response = {
      celcius: celcius,
      kelvin: kelvin,
    };
    return response;
  } else if (unit == "kelvin") {
    let fahrenheit = (9 / 5) * (temperature - 273) + 32;
    let celcius = temperature - 273;

    let response = {
      fahrenheit: fahrenheit,
      celcius: celcius,
    };
    return response;
  }
}

export { calculateSum, calculateDifference, convertTemperatureFunc };
