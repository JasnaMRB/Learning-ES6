// Make a generator with the asterisk after `function`
function* greet() {
    console.log(`You called 'next()'`);
    yield "hello";
}

let greeter = greet();
console.log(greeter);
let next = greeter.next();
console.log(next);
let done = greeter.next();
console.log(done);


function* greet2() {
    console.log(`Gernators are "lazy"`);
    yield "How";
    console.log(`I am not called until the second next.`);
    yield "are";
    console.log(`Call me before "you?"`);
    yield "you?";
}

let greeter2 = greet2();
console.log(greeter2);

// Let you go through steps of an object lazily
// yielded things are only created when called upon
// Help you with infinite sequences