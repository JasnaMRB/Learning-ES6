// Allows you to perform asynchronous operations in a synchronous-like manner.

var d = new Promise((resolve, reject) => {
    if (true) {
        resolve('hello world 1');
    } else {
        reject('no bueno 1');
    }
});

d.then((data) => console.log('success: ', data)); 
d.catch((error) => console.log('error : ', error));

var c = new Promise((resolve, reject) => {
    if (true) {
        resolve('hello world 2');
    } else {
        reject('no bueno 2');
    }
});

// can be chained together
c.then((data) => {
    console.log('success: ', data);
    return "foo bar";
    })
 .then((data) => {
     console.log("success 2: ", data);
    })
 .catch((error) => console.log('error : ', error));


// Shows logs after 3 seconds
var e = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true) {
            throw new Error("An error!!!"); // immediately stops everything here
            resolve('hello world 3');
        } else {
            reject('no bueno 3');
        }
    }, 3000);
});

// alternative `catch` syntax
e.then((data) => console.log('success: ', data), (error) => {
    console.log("New error message: ", error);
});



