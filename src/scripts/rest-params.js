// rest parameters vs. arguments keyword
// `arguments` returns array-like object of all arguments passed into a function

function myFunc() {
    //Since it is array-like, some functions from arrays are available
    // on `arguments`.
    console.log(arguments.length);

    // But not everything is available...
    // DOES NOT WORK
    /* arguments.forEach(function(v, i, a) {
        console.log(v);
    })
    */
    return console.log(arguments);
}

myFunc(1, 2, 3);


function Store() {
    var aisle = {
        fruit: [],
        vegetable: []
    }
    return {
        // In ES5, we had to transform `arguments` into an array and split 
        // unrelated arguments up manually
        addEs5: function(category) {
            var items = [].splice.call(arguments, 1);
            console.log(items);
            items.forEach(function (value, index, array) {
                aisle[category].push(value); 
            });
        },
        // In Es6, we can use the spread operator, which already 
        // returns an array and is also separated from `category`
        addEs6: function(category, ...items) {
            console.log(items);
            items.forEach(function (value, index, array) {
                aisle[category].push(value); 
            });
        },
        aisle: aisle
    }
}

var myGroceryStore = Store();
myGroceryStore.addEs5('fruit', 'apples', 'oranges');
myGroceryStore.addEs6('vegetable', 'carrots', 'broccoli', 'cauliflour');
