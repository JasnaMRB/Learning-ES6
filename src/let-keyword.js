// a common gotcha: `var` can be easily overwritten. convenient but dangerous.
var message = "hi";

{
    var message = "bye";
}

console.log(message) // "bye"!!!

// There IS function scope in ES5, so this does not overwrite `message` above
function greet() {
    var message = "yo!"
}

console.log(message) // still "bye"

/**
*    USE BLOCK SCOPING WITH `let`
**/

let message2 = "hi hi";

{
    let message2 = "bye bye";
}

console.log(message2) // "hi hi"

// another exampl with for loops

var fs = [];

for (var i = 0; i < 10; i++) {
    fs.push(function () {
        console.log(i);
    });
}

fs.forEach(function (f) {
    f(); // 10, 10, 10, 10, 10, 10, 10, 10, 10, 10
    // the `i` is the same `i` being used and reassigned each time
}); 


var ts = [];

for (let i = 0; i < 10; i++) {
    ts.push(function () {
        console.log(i);
    });
}

ts.forEach(function (f) {
    f(); 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    // this is creating a new `i` each time you go through the `for` loop
});


// another example

function varFunc(){
  var previous = 0;
  var current = 1;
  var i;
  var temp;
  
  for(i = 0; i < 10; i+=1){
    temp = previous;
    previous = current;
    current = temp + current;
  }
  console.log(current);
}

function letFunc(){
  let previous = 0;
  let current = 1;
  
  for(let i = 0; i < 10; i+=1){
    let temp = previous;
    previous = current;
    current = temp + current;
  }
  
  console.log(current);
}

varFunc(); // 89
letFunc(); // 89



