function displayFruits(fruits) {
  let apple = fruits[0];
  let orange = fruits[1];

  console.log(apple);
  console.log(orange);
}

function greet(person) {
  //   let f_name = person.f;
  //   let l_name = person.l;

  let { f, l } = person;
  console.log(f);
  console.log(l);
}

const person = { f: "JJ", l: "Menya", color: "black" };

greet(person);

let fruits = ["apple", "orange", "kiwi"];
fruits.map(function (fruit) {
  let test = "Hi " + fruit;
  console.log(test);

  return test;
});


let nums = [2,7 ,34,5,7,7,8,4,3,4,6,75,45,3,2,34,5,67,6,5,64,5344,34,2];
runningTotal = 2
nums.reduce((runningTotal = 2, nextNum) => (runningTotal + nextNum));
//console.log(nums)