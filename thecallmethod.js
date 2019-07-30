/*
 We'll be using the call() method to explicity set the value of the keyword this
 Note: The call, apply and bind methods only work with functions 
*/

var person = {
    firstName: "Colt",
    sayHi: function(){
        return "HI " + this.firstName;
    },

    determineContext : function(){
        return this === person;
    },

    dog: {
      sayHello : function(){
          return "Hello " + this.firstName;
      },
      
      determineContext: function(){
         return this === person;
      }
    }
}

console.log(person.firstName);

console.log(person.sayHi());

console.log(person.determineContext());

console.log(person.dog.sayHello());

console.log(person.dog.determineContext());

/*
 Explicity setting the value of this to the person object
*/

console.log(person.dog.sayHello.call(person));

console.log(person.dog.determineContext.call(person));


/*
  The below code shows us how call() is typicall used in the wild to solve code duplication problems
*/

var colt = {
    firstName : "Colt",
    sayHi: function(){
        return "Hi, my name is  " + this.firstName;
    }

}

var elie = {
    firstName: "Elie",

}

console.log(colt.sayHi());

//The below will print "Hi my name is elie"
console.log(colt.sayHi.call(elie));