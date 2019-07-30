/*
 We'll be using the apply() method to explicitly set the value of the this keyword
*/

var colt = {
    firstName: "Colt",

    addNumbers: function(a, b, c, d){
      return "Hi, " + this.firstName + " just calculated " + (a+b+c+d);
    }
}

var elie = {
    firstName: "Elie"
}

console.log(colt.addNumbers(1,2,3,4));

console.log(colt.addNumbers.call(elie, 1,2,3,4) + " using the call() method");

/*
 When we use the apply() method, we pass the arguments as part of an array
*/

console.log(colt.addNumbers.apply(elie, [10, 10, 10, 10]) + " using the apply() method");