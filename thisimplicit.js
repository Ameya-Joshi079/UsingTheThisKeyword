//Using the this keyword inside a declared object

var person = {
    firstName: "Elie",

    sayHi: function(){
        return "Hi" + this.firstName;
    },

    determineContext : function(){
        return this === person;
    }
}

console.log(person.sayHi());

//Will return print out true since this references the person object i.e..
//the this is in the person context
console.log(person.determineContext());


/*
 Let's see what happens when we use nested objects
*/

var person2 = {
    firstName : "Colt",

    sayHi: function(){
        return "Hi " + this.firstName;
    },

    determineContext: function(){
        return this === person;
    },

    dog: {
     
        sayHello : function(){
            return "Hello " + this.firstName;
        },

        determineContext : function(){
            return this === person2;
        }
    }
}

console.log(person2.sayHi());

console.log(person2.determineContext());

//The below will print Hello undefined --> Since, this in this case will refernce the dog object
//There is no property called firstName in the dog object
console.log(person2.dog.sayHello());

//The below code will print out false since this does not reference the person2 object but the dog object
console.log(person2.dog.determineContext());
