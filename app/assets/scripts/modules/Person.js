/*
function Person(fullName, favColor) {
  this.name = fullName;
  this.c = favColor;
  this.greet = function() {
    console.log(
      "My name is " + fullName + " and the color is " + favColor + "."
    );
  };
}*/

class Person {
  constructor(name, favColor) {
    this.name = name;
    this.favColor = favColor;
  }
  greet() {
    console.log(
      "My name is " + this.name + " and the color is " + this.favColor + "."
    );
  }
}

export default Person;
