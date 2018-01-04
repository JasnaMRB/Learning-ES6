let firstName = "John";
let lastName = "Lindquist";

// This syntax lets you create named properties quickly and easily
let person = {firstName, lastName};

console.log(person); // { firstName: 'John', lastName: 'Lindquist' }

let mascot = "Moose"; 

let team = {person, mascot};
console.log(team); /*
{
    person: {
        firstName: 'John',
        lastName: 'Lindquist'
    },
    mascot: 'Moose'
}
*/



