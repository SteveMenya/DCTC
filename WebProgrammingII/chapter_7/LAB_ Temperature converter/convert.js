window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
  // TODO: Complete the function
  const convertButton = document.getElementById("convertButton");
  convertButton.addEventListener("click", function () {
    const cInput = document.getElementById("cInput");
    const fInput = document.getElementById("fInput");

    if (cInput.value) {
      let ctemperature = cInput.value;
      if (isNaN(ctemperature)) {
        console.log(`${ctemperature} is not a number`);
        errorMessage.innerHTML = `${ctemperature} is not a number`;
        return;
      } else {
        errorMessage.innerHTML = "";
      }
      fInput.value = convertCtoF(parseFloat(cInput.value));
      updateImage(fInput.value);
    } else if (fInput.value) {
      let ctemperature = fInput.value;
      if (isNaN(ctemperature)) {
        console.log(`${ctemperature} is not a number`);
        errorMessage.innerHTML = `${ctemperature} is not a number`;
        return;
      } else {
        errorMessage.innerHTML = "";
      }
      cInput.value = convertFtoC(parseFloat(fInput.value));
      updateImage(fInput.value);
    }
  });

  const cInput = document.getElementById("cInput");
  cInput.addEventListener("input", function () {
    document.getElementById("fInput").value = "";
  });

  const fInput = document.getElementById("fInput");
  fInput.addEventListener("input", function () {
    document.getElementById("cInput").value = "";
  });
}

function updateImage(temperature) {
  const temperatureImage = document.getElementById("weatherImage");
  if (temperature <= 32) {
    temperatureImage.src = "cold.png";
  } else if (temperature > 32 && temperature <= 50) {
    temperatureImage.src = "cool.png";
  } else {
    temperatureImage.src = "warm.png";
  }
}

function convertCtoF(degreesCelsius) {
  // TODO: Complete the
  return (degreesCelsius * 9) / 5 + 32;
}

function convertFtoC(degreesFahrenheit) {
  // TODO: Complete the function
  return ((degreesFahrenheit - 32) * 5) / 9;
}
