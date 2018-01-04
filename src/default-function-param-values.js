function greet(greeting, name) {
    console.log(greeting + ", " + name);
}

greet(); // undefined, undefined

function greet2(greeting, name = "John") {
    console.log(greeting + ", " + name);
}

greet2(); // undefined, John

greet2("Hello"); // Hello, John
greet2("Hello", "Bill"); // Hello, Bill


// passing a function as a parameter
function receive(complete) {
    complete();
}

receive(function () {
    console.log("complete");
}); // complete

// setting a default function for the parameter
function receive2(complete = function () {
    console.log("complete!");
}){
    complete();
};

receive2(); // complete!

// using arrow syntax, make it even shorter. But then it doesn't look like JS anymore...
let receive3 = (complete = () => console.log("complete")) => complete();

receive3();