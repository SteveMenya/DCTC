let words = ["ban", "babble", "make", "flab", "ste@gmail.org", "1-800-555-2468", "800-555-2468"];

// let re = /ab/;
// let re = /\w+@\w+\.org$/
let re =/1?\d{3}-\d{3}-\d{4}$/;

words.forEach(function(word) {
   if (re.test(word)) {
      console.log(word + " matches!");
   }
});

let playerNameWidget = document.getElementById("playerName");
let difficultyLevelWidget = document.getElementById("diffLevel");

console.log('heee')
if (localStorage.getItem("playerName")) {              
   playerNameWidget.value = localStorage.getItem("playerName");
   difficultyLevelWidget.value = localStorage.getItem("difficultyLevel");
}
        
document.getElementById("saveBtn").addEventListener("click", function() {
    console.log('sdfasdf')
   localStorage.setItem("playerName", playerNameWidget.value);
   localStorage.setItem("difficultyLevel", difficultyLevelWidget.value);
   sessionStorage.setItem("playerName", playerNameWidget.value);
   sessionStorage.setItem("difficultyLevel", difficultyLevelWidget.value);
});


// let canvas = document.getElementById("myCanvas");
// let context = canvas.getContext("2d");

// context.beginPath();
// context.moveTo(50, 90);
// context.lineTo(100, 10);
// context.lineTo(150, 90);
// context.closePath();
// context.fillStyle = "yellow";
// context.fill();
// context.strokeStyle = "red";
// context.lineWidth = 3;
// context.stroke();


const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(100, 50);
ctx.lineTo(50, 150);
ctx.lineTo(150, 150);
ctx.closePath();

ctx.fillStyle = "red";
ctx.fill();

ctx.font = "bold 48px sans-serif";
ctx.fillStyle = "white";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillText("STOP", 100, 100);