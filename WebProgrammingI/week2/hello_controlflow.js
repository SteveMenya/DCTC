//if statements
let condition = '';
if(condition) {
    console.log('The condition is true');
}
else{
    console.log('The condition is false');
}

//if there are two ifs next to eachother
//they are both evaluated
if(condition){
    console.log('Block 1 executed');
}
else{
    console.log('Block 2 executed');
}

//Have to join them with if else
if(condition) {
    console.log('Mut block 1 executed');
}
else if(false) {
    console.log('Mut block 2 executed');
}
else {
    console.log('No mut block executed');
}


//logic n
let myName = 'Brian';
if (myName === 'JJ'){
    console.log('My name is JJ!');
}else {
    if(myName !== 'JJ'){
        console.log('My name is not JJ!!');
    }
}

let comparisonResult = !(3<2 || 10 >= 15 && !(3 || 2) || (2 === 'cat') && 5 != 8 && 2 === 2);
console.log('this is the comp result', comparisonResult);

if(comparisonResult) {
    console.log ('the result was true');
}
else if ( 3 > 2){
    console.log('3 > 2')
}


//loops
for(let i = 0; i < 10; i++) {
    console.log('i', i);
}