/*
 we want to highlight prices less than $10 on client side
*/

// this is type NodeList
// Problem: like an array but not so it doesn't have typical methods like filter, forEach, reduce
const products = document.querySelectorAll('.product');

console.log(products);

// Now we have a native way to convert this to an array

const products2 = 
      Array.from(products);

products2
    .filter(product => parseFloat(product.innerHTML) < 10)
    .forEach(product => product.style.color = 'red');

console.log(products2);
