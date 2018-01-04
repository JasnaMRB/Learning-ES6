var VALUE = 'hello world';
VALUE = 'FooBar';
console.log('value: ', VALUE); // value: FooBar

const WORLD = {};
WORLD.foo = 'bar'; // reassigning a key's value is fine. The reference for WORLD is the same.
console.log(WORLD) // value: { foo: 'bar' }

// If you try to reassign WORLD directly, it will throw a read-only error:
// WORLD = 'bar';

// It is conventional to make consts ALL_CAPS.

if (true) {
    const foo = 'bar';
    console.log('foo', foo); // foo bar
}

// This will be out of block scope, so you'll get an undefined error, like `let`
// console.log(foo)



