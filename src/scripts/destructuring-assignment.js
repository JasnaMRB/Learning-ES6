/*
to see the value of a field in an object in the console, typically you assign it inside a variable and reference it 
*/
var obj = {
    color: "blue"
}

console.log(obj.color); // blue

/*
    destructuring allows you to directly reference the field
*/

var {color2} = {
    color2: "red"
}

console.log(color2); // red

/*
    Works with multiple fields
*/

var {color3, position} = {
    color3:   "orange",
    name:     "John",
    state:    "New York",
    position: "forward"
}

console.log(color3); // orange
console.log(position); // forward

/*
 can use this with functions to only grab parts of a return value
*/

function generateObj() {
    return {
        color3:   "purple",
        name:     "Jill",
        state:    "Virginia",
        position: "backward"
    }
}

var {name, state} = generateObj();

console.log(name); // Jill
console.log(state); // Virginia

// can also rename them

var {name:firstName, state:loc} = generateObj();

console.log(firstName);
console.log(loc);