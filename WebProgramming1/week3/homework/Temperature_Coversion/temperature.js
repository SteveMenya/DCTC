console.log("Begin");

class Temperature {
  celcius;
  fahrenheit;
  kelvin;

  constructor(unit, temp) {
    this.unit = unit;
    this.temp = temp;

    if (this.unit == "celcius") {
      this.fahrenheit = 9 / 5 * (this.temp)+ 32;
      this.kelvin = this.temp + 273;
    } else if (this.unit == "fahrenheit") {
      this.celcius = 5/9*(this.temp - 32);
      this.kelvin = 5/9*(this.temp - 32) + 273;
    } else if (this.unit == "kelvin"){
        this.fahrenheit =  9/5* (this.temp-273)+ 32;
        this.celcius = this.temp - 273;
    }
  }
}

const temp = new Temperature("celcius", -40);
console.log("celcius TO fahrenheit: " + temp.fahrenheit);
console.log("celcius to kelvin: " + temp.kelvin);

const temp2 = new Temperature("fahrenheit", 102);
console.log("C: " + temp2.celcius);
console.log("K: " + temp2.kelvin);

const temp3 = new Temperature("kelvin", 8);
console.log("kelvin to celcius:" + temp3.celcius);
console.log("kelvin to fahrenheit: " + temp3.fahrenheit);


// const Izo  = new Temperature("kelvin" ,40);
// console.log(Izo.celcius);
