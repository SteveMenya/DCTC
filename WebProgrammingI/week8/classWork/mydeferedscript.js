console.log('mydeferedscript called!')
const myHeading = document.querySelector('h1');
//This overwrites the current html with the html in the string
myHeading.innerHTML = " I <em>like</em turtles";

const something = document.querySelector('#something');
//This overwrites the current html with the text in the string 
//something.textContent = 'This <strong>won\'t</strong> show HTML markup';


const parentElement = document.querySelector('ul');
//We can use elements to query for their children
const childElement = parentElement.querySelector('li');
childElement.textContent = 'Hello subtree!';
setInterval(function(){
   // childElement.classList.toggle('yellow')
},100);

let countClick = 0;
const button = document.querySelector('button');
button.addEventListener('click', function(){
    console.log("The button clicked!")
    button.textContent = ++countClick;
    button.classList.toggle('yellow')
});

const allLi = document.querySelectorAll('li')
allLi.forEach(function(liElement) {
    liElement.textContent = 'Changed in the  loop';
})

