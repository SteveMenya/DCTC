import { calculateMPG } from "./MPGCalculation.mjs";

const mpgApp = document.querySelector("#mpgApp");
const distanceInput = mpgApp.querySelector("#distanceInput");
const gasUsedInput = mpgApp.querySelector("#gasUsed");
const calculateButton = mpgApp.querySelector("#calculateButton");
const result = mpgApp.querySelector("#result");
const mpgOut = mpgApp.querySelector("#mpgOut");

calculateButton.addEventListener("click", () => {
  let distance = parseFloat(distanceInput.value);
  console.log(distance);
  let gasUsed = parseFloat(gasUsedInput.value);
  console.log(gasUsed);
  const mpg = calculateMPG(distance, gasUsed);
  console.log(mpg);
  mpgOut.textContent = mpg;
  result.style.display = "block";
});
