// ES5 way of concatenating strings

var salutation = "Hello";
var greeting = salutation + ", World";

console.log(greeting); // Hello, World

// In ES6, you can put variables inside your string

var greeting2 = `${salutation} , World`;

console.log(greeting2);

greeting2 = `

${salutation},
    You
        Crazy           WORLD
        How
    Are
        You
`;

console.log(greeting2); // ^ all the whitespace preserved


// You can also do expressions

var x = 1;
var y = 2;
var equation = `${ x } + ${ y } = ${ x + y }`;
console.log(equation); // 1 + 2 = 3

function tag(strings, ...values) {
    console.log(strings); // array
    console.log(values); // value of new Date()
    
    if (values[0] < 20) {
        values[1] = "awake";
    }
    
    return `${strings[0]}${values[0]}${strings[1]}${values[1]}`

}
var message = tag`It's ${new Date().getHours()}. I'm sleepy.`


