class Person{
    firstName;
    lastName;
    constructor(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }
    printFullName(){
        console.log(this.firstName, this.lastName);
    }
}

const JJ = new Person('JJ', 'Okotcha');
const Brian = new Person('JJ', 'Brian');
const bill = new Person('Bill', 'Rogers');

JJ.printFullName();
Brian.printFullName();
bill.printFullName();

var s = 'steve';
var j = 'jj';
var b = 'brian'

var s = 'stephen';
var j = 'jazmin';
var b = 'bond'

console.log(s);
console.log(j);
console.log(b);

