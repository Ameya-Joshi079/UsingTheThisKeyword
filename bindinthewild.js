/*
  The below example shows how we can loose the context of this when using asyncrhonous functions and
  how to use the bind() method to fix the problem
*/

var colt = {
    firstName: "Colt",
    sayHi: function(){
        setTimeout(function() {
            console.log("Hello " + this.firstName);
            console.log(this);
        }, 10000);

        console.log("extra code here");

        console.log("some more extra code here");

        console.log("Also, some more extra code here");
    }
}

//The below will print hello undefined as the context of this is now set to the window object
//as the sayHi() method's execution is over as soon as we hit the last console.log() statement in the sayHi() function
//This is because the setTimeOut() function is an asynchronous function which doesn't block the code execution while waiting
//for 10 seconds, during which time, the context of this is no longer set to the colt object
colt.sayHi();

/*
 The below code shows how helpful the bind() function is when using asynchronous functions
*/

var colt2 = {
    firstName: "Colt Steele",
    sayHi: function(){
        setTimeout(function(){
          console.log("Hello " + this.firstName);
          console.log(this);  
        }.bind(this), 10000);

        console.log("More code here");
        console.log("More code here");
        console.log("More code here");
        console.log("More code here");
        console.log("More code here");
        console.log("More code here");
    }
}

//The below will print hello Colt Steele as we have bound the context of this to the colt object to this function when
//it is called at a later date
colt2.sayHi();