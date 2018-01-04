var color = "red";
var speed = 10;

// as learned in shorthand props,
// same as { color: color, speed: speed }
var car = { color, speed };

console.log(car.color);
console.log(car.speed);


function go() {
    console.log("vroom");
};

// Also works for functions
var car2 = {
    color,
    speed,
    go
};

car2.go();

// this is the same: you can directly declare functions inside objects

var car3 = {
    color,
    speed,
    goo() {
        console.log("vrooom");
    }
}

car3.goo();

// ES5 way

var car4 = {
    color: color,
    speed: speed,
    goo: function() {
        console.log("vroom!");
    }
}
car4.goo();


// a computed property
var drive = "go";
var car5 = {
    color,
    speed,
    [drive]: function() {
        console.log("vroom vroom!");
    }
};

car5.go(); // still works