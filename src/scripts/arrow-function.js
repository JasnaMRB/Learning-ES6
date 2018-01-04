"use strict";

var createGreeting = function(message, name) {
    return message + name;
};

// arrow version
var arrowGreeting1 = (message, name) => {
    return message + name;
};

// shortened arrow version
// If there are no curly braces, don't need `return` keyword
var arrowGreeting2 = (message, name) => message + name;

// if there is only one param (`message`), can be even shorter
var arrowGreeting3 = (message) => "hello";

// and without parentheses
var squared = x => x * x;

// a common scenario
var deliveryBoy = {
    name: "John",
    handleMessage: function (message, handler) {
        handler(message);
    },
    receive: function () {
        // you want to access `name` outside of this scope
        var that = this;
        this.handleMessage("Hello, ", function (message) {
            that.name; // get the proper name
            console.log(message + that.name);
        });
    }
};

deliveryBoy.receive(); // "Hello, John"

// arrow function version
var deliveryBoy2 = {
    name: "John",
    handleMessage: function (message, handler) {
        handler(message);
    },
    // you can use the arrow to access the outer scope; lexical scope `message` referred 
    receive: function () {
        this.handleMessage("V2: Hello, ", message => console.log(message + this.name));
    }
    
};

deliveryBoy2 .receive(); // "V2: Hello, John"