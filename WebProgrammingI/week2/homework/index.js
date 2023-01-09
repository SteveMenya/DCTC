class BMI {
   BMI;
    constructor(weight, height) {
        this.weight = weight;
        this.height = height;
    }
    calculate(){
       return  ((this.weight/this.height)/this.height * 703);
       
    }

    display() {
        if (this.calculate() > 30) {
            console.log('Obese');
        }
        else if(this.calculate() > 25) {
            console.log('Overweight');
        }
        else if(this.calculate() > 18.5) {
            console.log('Normal or Healthy Weight');
        }
        else {
            console.log('Underweight');
        }
    }
}


console.log('Homework Assignment Tests:');

const underweightBMI = new BMI(130, 72);
underweightBMI.display();
const normalBMI = new BMI(150, 65);
normalBMI.display();
const overBMI = new BMI(180, 70);
overBMI.display();
const obeseBMI = new BMI(300, 50);
obeseBMI.display();


