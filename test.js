//Using this inside a function without using the strict mode

function testing(){
    this.person = "elie";
    
    age = 25;
}

testing();

//Will print out "Elie" this we created a property called person in the global object that is the Window object
console.log(person);

console.log(this);

//The below will print the value "Elie" the code runs in the browser. The this will point to the window object
//However, when you run the code using node test.js, the below will print an empty object as {}
//SO NOTE- The this in global scope will having different references depending on where it runs
console.log(this.person);


//Note how age when assiged a value without the use of the keyword var inside the function becomes a global variable
//ALERT ---> This is not a good practice
console.log(this.age);
