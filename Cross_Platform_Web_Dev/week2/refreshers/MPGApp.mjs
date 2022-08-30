import {calculateMPG} from './MPGCalculation.mjs'


const mpgApp = document.querySelector('#mpgApp');
const distanceInput = mpgApp.querySelector('#distanceInput');
const gasUsed = mpgApp.querySelector('#gasUsed');
const calculateButton = mpgApp.querySelector('#calculateButton');
const result = mpgApp.querySelector('#result');
const mpgOut = mpgApp.querySelector('#mpgOut');
debugger;


calculateButton.addEventListener('click', () => {
    let distance = parseFloat(distanceInput.value)
    let gasUsed = parseFloat(gasUsed.value)
    const mpg = calculateMPG(distance, gasUsed)
    mpgOut.textContent = mpg;
    result.style.display = "block"
});