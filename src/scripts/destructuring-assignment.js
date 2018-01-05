/*
to see the value of a field in an object in the console, typically you assign it inside a variable and reference it 
*/
let obj = {
    color: "blue"
}

console.log("obj.color:", obj.color); // obj.color: blue

/*
    destructuring allows you to directly reference the field
*/

let {color2} = {
    color2: "red"
}

console.log("color2:", color2); // color2: red

/*
    Works with multiple fields
*/

let {color3, position} = {
    color3:   "orange",
    name:     "John",
    state:    "New York",
    position: "forward"
}

console.log("color3:", color3); // color3: orange
console.log("position:", position); // position: forward

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

let {name, state} = generateObj();

console.log("name:", name); // name: Jill
console.log("state:", state); // state: Virginia

// can also rename them
let {name:firstName, state:loc} = generateObj();

// aside: class originally had `state:location`, but this would
// make my browser try to redirect to `src/Virginia`!

console.log("firstName:", firstName); // firstName: Jill
console.log("loc:", loc); // loc: Virginia


// If you want to pick and choose elements from a long array...


let [first,,,,fifth] = ["red", "yellow", "green", "blue", "orange"];

console.log("first:", first); // first: red
console.log("fifth:", fifth); // fifth: orange

// Some more crazy stuff

let people = [
  {
    "firstName": "Clinton",
    "lastName": "Ruiz",
    "phone": "1-403-985-0449",
    "email": "pharetra@facilisislorem.org",
    "address": "Ap #829-3443 Nec St."
  },
  {
    "firstName": "Skyler",
    "lastName": "Carroll",
    "phone": "1-429-754-5027",
    "email": "Cras.vehicula.alique@diamProin.ca",
    "address": "P.O. Box 171, 1135 Feugiat St."
  },
  {
    "firstName": "Kylynn",
    "lastName": "Madden",
    "phone": "1-637-627-2810",
    "email": "mollis.Duis@ante.co.uk",
    "address": "993-6353 Aliquet, Street"
  },
  {
    "firstName": "Chaney",
    "lastName": "Edwards",
    "phone": "1-397-181-4501",
    "email": "rutrum@Nullamlobortis.net",
    "address": "P.O. Box 342, 9574 Egestas Street"
  }
]

people.forEach(({firstName}) => console.log("first name:", firstName));
/* first name: Clinton
*  first name: Skyler
*  first name: Kylynn
*  first name: Chaney
*/


let [,secondPers] = people; // get the second obj in the array

function logEmail({email}) { // get the email property
    console.log(email);
}

logEmail(secondPers); // Cras.vehicula.alique@diamProin.ca