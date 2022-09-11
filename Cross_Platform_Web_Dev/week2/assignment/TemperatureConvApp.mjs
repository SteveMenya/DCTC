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
    console.log(theInput);
    let theSecondInput = parseInt(number2Input.value);
    console.log(theSecondInput);
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
    console.log(theInput);
    let theSecondInput = parseInt(number2Input.value);
    console.log(theSecondInput);
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

  const unitInput = document.getElementById("units").options[1].value;
  const tempInput = tempConversionController.querySelector("#temp");
  const convertTemperature = tempConversionController.querySelector(
    "#convertTemperatureButton"
  );

  convertTemperatureButton.addEventListener("click", () => {
    let theUnitInput = unitInput;
    let theTemperatureInput = parseInt(tempInput.value);
  });

  // conversionClass = new Temperature()
  // celcius
});
