"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
function createProduct(n, p, desc) {
    return { id: (0, uuid_1.v4)(), name: n, price: p, description: desc };
}
function createUser(name, age) {
    return { id: (0, uuid_1.v4)(), name: name, age: age, cart: [] };
}
function addToCart(product, user) {
    return user.cart.push(product);
}
function removeFromCart(product, user) {
    let i = 0;
    while (i < user.cart.length) {
        if (user.cart[i] === product) {
            user.cart.splice(i, 1);
        }
        else {
            ++i;
        }
    }
    return user;
}
function removeQua(user, product, q) {
    let index = user.cart.indexOf(product);
    if (index > -1) {
        user.cart.splice(index, q);
    }
    return user;
}
function cartTotal(user) {
    let total = 0;
    for (let product of user.cart) {
        total += product.price;
    }
    return total;
}
function showTotal(user) {
    let total = 0;
    for (let product of user.cart) {
        total += product.price;
    }
    console.log(`You\'re current total is: $${total.toFixed(2)}`);
}
function printCart(user) {
    console.log('You\'re current cart:\n', user.cart);
}
//Create User
let theMan = createUser('Yvon Chouinard', 83);
console.log(theMan);
//Create 3 Items
let crewneck = createProduct('Crewneck', 32.99, 'Black crewneck with white logo on chest.');
console.log(crewneck);
let beanie = createProduct('Beanie', 19.99, 'Dark blue beanie with white logo stitched on center.');
console.log(beanie);
let hoodie = createProduct('Hoodie', 39.99, 'Olive green hoodie with white logo stitched on center.');
console.log(hoodie);
//Add 1 item to cart
addToCart(beanie, theMan);
addToCart(beanie, theMan);
console.log(theMan);
//Remove 1 instance of item(the yellow squiggly was bugging me lol)
removeQua(theMan, beanie, 1);
console.log(theMan);
//Print cart
printCart(theMan);
//Print total
showTotal(theMan);
//Add 3 items to cart
addToCart(beanie, theMan);
addToCart(crewneck, theMan);
addToCart(hoodie, theMan);
console.log(theMan);
//Print cart
printCart(theMan);
//Print Total
showTotal(theMan);
//Remove all items
removeFromCart(hoodie, theMan);
removeFromCart(beanie, theMan);
removeFromCart(crewneck, theMan);
console.log(theMan);
//Print total
cartTotal(theMan);
showTotal(theMan);
