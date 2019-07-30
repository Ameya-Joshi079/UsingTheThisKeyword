"use strict"

//The this will reference the window object since we're in the global scope
console.log(this);

function testing2(){

    this.person = "JOhn";

    age = 25;

}

testing2();

//The below 2 lines will lead to an error since we're using the strict mode, hence, the this 
//inside the above function will be undefined
//The error is TypeError: this is undefined

console.log(this.person);

console.log(person);

console.log(age);