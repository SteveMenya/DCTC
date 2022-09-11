import {
  calculateSum,
  calculateDifference,
  convertTemperatureFunc,
} from "./TemperatureConv.mjs";

const mathAppController = document.querySelector("#MathApp");

const additionController = document.querySelector("#additionApp");
const addButton = mathAppController.querySelector("#addition");

const subtractionController = document.querySelector("#subtractionApp");
const subtractionButton = mathAppController.querySelector("#subtraction");

const tempConversionController = document.querySelector(
  "#temperatureConversionsApp"
);
const tccButton = mathAppController.querySelector("#temperatureConversions");

addButton.addEventListener("click", () => {
  additionController.style.display = "block";
  addButton.style.display = "none";
  subtractionButton.style.display = "none";
  tccButton.style.display = "none";

  const number1Input = additionController.querySelector("#inputOne");
  const number2Input = additionController.querySelector("#inputTwo");
  const calculateButton = additionController.querySelector("#calculateButton");
  const result = additionController.querySelector("#result");
  const calculationOut = additionController.querySelector("#calculationOut");

  calculateButton.addEventListener("click", () => {
    let theInput = parseInt(number1Input.value);
    let theSecondInput = parseInt(number2Input.value);
    const total = calculateSum(theInput, theSecondInput);
    calculationOut.textContent = total;
    result.style.display = "block";
  });
});

subtractionButton.addEventListener("click", () => {
  subtractionController.style.display = "block";
  additionController.style.display = "none";
  addButton.style.display = "none";
  subtractionButton.style.display = "none";
  tccButton.style.display = "none";

  const number1Input = subtractionController.querySelector("#subTractOne");
  const number2Input = subtractionController.querySelector("#subTractTwo");
  const calculateButton =
    subtractionController.querySelector("#calculateButton");
  const result = subtractionController.querySelector("#result");
  const calculationOut = subtractionController.querySelector("#calculationOut");

  calculateButton.addEventListener("click", () => {
    let theInput = parseInt(number1Input.value);
    let theSecondInput = parseInt(number2Input.value);
    const total = calculateDifference(theInput, theSecondInput);
    calculationOut.textContent = total;
    result.style.display = "block";
  });
});

tccButton.addEventListener("click", () => {
  tempConversionController.style.display = "block";
  subtractionController.style.display = "none";
  additionController.style.display = "none";
  addButton.style.display = "none";
  subtractionButton.style.display = "none";
  tccButton.style.display = "none";

  const tempInput = tempConversionController.querySelector("#temp");
  const conversionOneOut =
    tempConversionController.querySelector("#conversionOneOut");
  const conversionTwoOut =
    tempConversionController.querySelector("#conversionTwoOut");
  const result = tempConversionController.querySelector(
    "#resultForCelciusConversion"
  );
  const unitOneOut = tempConversionController.querySelector("#unitOneOut");
  const unitTwoOut = tempConversionController.querySelector("#unitTwoOut");
  const selectedUnitout =
    tempConversionController.querySelector("#selectedUnitOut");

  const selectedUnitoutTwo = tempConversionController.querySelector(
    "#selectedUnitOutTwo"
  );

  convertTemperatureButton.addEventListener("click", () => {
    var x = document.getElementById("units").selectedIndex;
    var y = document.getElementById("units").options;
    var selectedValue = y[x].text;

    let theUnitInput = selectedValue;
    let theTemperatureInput = parseInt(tempInput.value);

    let response = convertTemperatureFunc(theUnitInput, theTemperatureInput);

    let conversionTwoItem;
    let conversionOneItem;
    if (selectedValue == "celcius") {
      conversionOneItem = response.fahrenheit;
      conversionTwoItem = response.kelvin;
    } else if (selectedValue == "fahrenheit") {
      conversionOneItem = response.celcius;
      conversionTwoItem = response.kelvin;
    } else if (selectedValue == "kelvin") {
      conversionOneItem = response.fahrenheit;
      conversionTwoItem = response.celcius;
    }
    let myKeys = Object.keys(response);
    let key1 = myKeys[0];
    let key2 = myKeys[1];
    conversionOneOut.textContent = conversionOneItem;
    conversionTwoOut.textContent = conversionTwoItem;
    unitOneOut.textContent = key1;
    unitTwoOut.textContent = key2;
    selectedUnitout.textContent = selectedValue;
    selectedUnitoutTwo.textContent = selectedValue;

    result.style.display = "block";
  });
});
