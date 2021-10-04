

//Multiplication by addition

function multiply(a, b) {
  var loop = 1;
  var result = 0;
  //if a or be is 0 return o

  //check to see if its o

  while (true) {
    result = result + a;
    if (loop == b) {
      break;
    }
    loop++;
  }
  return console.log(result);
}

//Dividion by Subtraction  *****this was a challenging one as well.
function divide(a, b) {
  var divisor = a;
  var dividend = b;

  var results = 1;

  if (b == 0) {
    return console.log("Undefined");
  }
  while (true) {
    divisor = divisor - dividend;

    if (divisor == 0) {
      break;
    }
    results = results + 1;
  }
  return console.log(results);
}

//examples of multiplication by addition
multiply(9, 5);
multiply(6, 100);
multiply(6, 4);

divide(2, 0);
divide(5, 0);
divide(100, 0);

console.log("------------" + "subraction")
//examples for division by subtraction
divide(4,2)
divide(10, 5 );
divide(20, 5);
divide(100, 2);
