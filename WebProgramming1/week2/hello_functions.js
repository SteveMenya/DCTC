function myNamedFunction(argumentOne, argumentTwo) {
    //this is a function block
    const functionVariable = argumentOne + argumentTwo;
    return functionVariable;
}
myNamedFunction(1, 1);
myNamedFunction();
myNamedFunction(1, 2, 3, 4, 5, 6, 7, 8);

const theResult = myNamedFunction(1, 1);
console.log(theResult);

const myRandomVariable = myNamedFunction;
const theOtherResult = myRandomVariable(3,3);
console.log(theOtherResult);

function math(mathFunc, a, b){
    const result = mathFunc(1, 2);
    return result;
}
function add(a,b){
    return a + b;
}

const mathResult = math(add);
console.log(mathResult);
const subResult = math(function(a,b) {
    return a = b;
})

console.log(subResult);

const divide = function(a,b) {
    return a/b;
}
const divideResult = math(divide);
console.log('divide Results', divideResult);

function myFullFunction(argument) {
    return "hello world";
}

const arrowFunction = (argument) => {
    return "Hello World";
}

const oneArg = argument => {
    return "Hello World";
}

const oneStatement = (argument) => "Hello World!";
const oneStatementOneArguement = argument => "Hello World!";