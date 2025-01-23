

// Importing module
// import { 
//     addToCart, 
//     totalPrice as price, 
//     tq 
// } from './shoppingCart.js';

// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// Default import/export
// Avoid this 
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';

import add, {cart} from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);
// Imports/Exports are a live connection, not a static copy
console.log(cart);

/*

// Simple top-level await
// console.log('Start fetch');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return {title: data.at(-1).title, text: data.at(-1).body};
}

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);

*/

// -------------------------------------

/*

const ShoppingCart2 = (function() {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function(product, quantity) {
        cart.push({product, quantity});
        console.log(`${quantity} ${product} added to cart (shipping cost is $${shippingCost})`);
        // ^^ Accessing the private shippingCost variable through closure
    };

    const orderStock = function(product, quantity) {
        cart.push({product, quantity});
        console.log(`${quantity} ${product} ordered from supplier`);
    };
    
    return {
        addToCart, 
        cart,
        totalPrice, 
        totalQuantity,
    };
})(); 
// ^^ Example of a closure
// Closures allow a function to have access to all of the variables that were present at it's birthplace

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);

*/

// -------------------------------------

/*

// CommonJS Modules
// Export
export.addToCart = function(product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} ordered from supplier`);
};

// Import - Used in NodeJS
const { addToCart } = require('./shoppingCart.js');

*/

// -------------------------------------


import cloneDeep from '../node_modules/lodash-es/cloneDeep.js';

const state = {
    cart: [
        { product: 'bread', quantity: 5 },
        { product: 'pizza', quantity: 5 },
    ],
    user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if(module.hot) {
    module.hot.accept();
}