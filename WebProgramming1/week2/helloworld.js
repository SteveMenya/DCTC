console.log('Hello World');

//variable!
//should be able to avoid the var keyword
var myVariable;

//should be fine to use let

let myOtherVariable

//cannot use let again :( 
//no types in javascript, but types used under the hood
let anythingGoes = 'my string value';
anythingGoes = false;
anythingGoes = 3;
anythingGoes = 3.14;
console.log = anythingGoes;

//Constants
const doesNotChange = 123;
