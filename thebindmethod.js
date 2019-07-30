/*
 We'll be using the bind() method to explicitly set the value of the this keyword. 
 Note: the call to bind() returns the functiond definition so unlike the call and apply methods that
 call the method immidiately, this is not the case with bind. We can call the function returned by calling the bind()
 method at a later date. Check the examples below
*/

var colt = {
    firstName: "Colt",
    addNumbers: function(a, b, c, d){
      return "Hi, " + this.firstName + " calculated " +  (a+b+c+d);
    }
}

var elie = {
    firstName: "Elie"
}

var calc1 = colt.addNumbers.bind(elie, 1,2,3,4);

console.log(calc1());

/*
 Note how we did not pass in all the arguments to the function up front
*/
var calc2 = colt.addNumbers.bind(elie, 10, 20);

//We called the calc2() function and passed the remaining parameters at a later time.
//The below will add it to 90
console.log(calc2(20, 40));
