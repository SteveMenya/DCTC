import {calculateSum} from './TemperatureConv.mjs'

const mathApp = document.querySelector('#myCalculationApp');
const number1Input = mathApp.querySelector('#addition');
const number2Input = mathApp.querySelector('#plusSign');
const calculateButton = mathApp.querySelector('#calculateButton');
const result = mathApp.querySelector('#results')
const calculationOut = mathApp.querySelector('#calculationOut')

calculateButton.addEventListener('click', ()=> {
    let number1 = parseFloat(number1Input.value);
    let number2 = parseFloat(number2Input.value);
    const calculation = calculateSum(number1, number2)
    calculationOut.textContent =calculation;
    result.style.display = 'block'
})