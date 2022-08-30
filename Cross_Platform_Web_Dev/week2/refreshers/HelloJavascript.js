console.log('External javascript')

//single line comments

/* Multiline
comments */

//variables, statements can end in a semicolon

let myVariable = 'Hello Variables';
let semiColonOptional = 'Hello ASI'
var dontHaveToDoThisAnymore;


//constants
const myConstant = 'Hello World!'
//myConstant = 3; `const` is a signal that the identifier won't be reassigned

//functions are pieces of data!

function myNamedFunction() {

}

//variable declaration syntax
let myFunctionVariable = function () {

}

let myNamedFunctionNowStoredInVariable = myNamedFunction;
let myArrayOfFunctions = [myNamedFunction, myFunctionVariable, myNamedFunctionNowStoredInVariable,
    function () {},
    function () {
        console.log('Hi!')
    }
];

//immediately invoked function execution
//IIFE
(function () {
    //thi sis an iife
    //all variables are scoped in here now
    var myScopedVariable = 'Hi'
    window.myScopedVariable = myScopedVariable
})();
console.log(this)
console.log(myScopedVariable)

let myFunction = function (myArg) {
    return myArg + 3
}

let myArrowFunctions = (myArg) => {
    return myArg + 3
}
console.log(myArrowFunctions(9))

let mySingleReturn = (myArg) => myArg + 3;
console.log(mySingleReturn(5))

let mySingleArg = myArg => {
    return myArg + 3
}

let tinyArrow = myArg => myArg + 3;

/**Destructuring */
let fruits = ['Apple', 'Orange', 'Peach']
let aApple = fruits[0]
let aOrange = fruits[1]
let aPeach = fruits[2]


let [apple, orange, peach] = fruits;


function logMyFruits(ar) {

}

function sayHello([firstName, lastName, greetings]){
    console.log(firstName, lastName, greetings)
}


let personGreeting = ['JJ', 'Okotcha', 'Nade']

sayHello(personGreeting)

let person = {
    firstName: 'JJ',
    lastName: 'Okotcha',
    greeting: 'Udhi maber!'
};

let{greeting, firstName,lastName} = person
console.log(person)


function sayHelloToObjectDestructuring({greeting, firstName, lastName}) {
    console.log(greeting,firstName,lastName)
}

