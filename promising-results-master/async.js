// ## Promising.then() Section Chaining using ES5 functions
// slowMath.add(6, 2)
// .then(function(sum) {
//     console.log(sum);
//     return slowMath.multiply(sum, 2);
// }) .then(function(product) {
//     console.log(product);
//     return slowMath.divide(product, 4);
// }) .then(function(quotient) {
//     console.log(quotient);
//     return slowMath.subtract(quotient, 3);
// }) .then(function(difference) {
//     console.log(difference);
//     return slowMath.add(difference, 98);
// }) .then(function(sum) {
//     console.log(sum);
//     return slowMath.remainder(sum, 2)
// }) .then(function(remains) {
//     console.log(remains);
//     return slowMath.multiply(remains, 50);
// }) .then(function(quotient) {
//     console.log(quotient);
//     return slowMath.remainder(quotient, 40);
// }) .then(function(remains) {
//     console.log(remains);
//     return slowMath.add(remains, 32)
// }) .then(function(sum) {
//     console.log(`The final result is ${sum}`);
// }) .catch(function(err) {
//     console.log(err);
// })

// ## Promising.then() Section Chaining using ES6 functions
// slowMath.add(6, 2)
// .then((sum) => {
//     console.log(sum);
//     return slowMath.multiply(sum, 2);
// }) .then((product) => {
//     console.log(product);
//     return slowMath.divide(product, 4);
// }) .then((quotient) => {
//     console.log(quotient);
//     return slowMath.subtract(quotient, 3);
// }) .then((difference) => {
//     console.log(difference);
//     return slowMath.add(difference, 98);
// }) .then((sum) => {
//     console.log(sum);
//     return slowMath.remainder(sum, 2)
// }) .then((remains) => {
//     console.log(remains);
//     return slowMath.multiply(remains, 50);
// }) .then((quotient) => {
//     console.log(quotient);
//     return slowMath.remainder(quotient, 40);
// }) .then(function(remains) {
//     console.log(remains);
//     return slowMath.add(remains, 32)
// }) .then((sum) => {
//     console.log(`The final result is ${sum}`);
// }) .catch((err) => {
//     console.log(err);
// })

// ## Async/Await Section
async function doMath() {
    try {
        let sum = await slowMath.add(6, 2);
        console.log(sum);
        let product = await slowMath.multiply(`${sum}`, 2);
        console.log(product);
        let quotient = await slowMath.divide(`${product}`, 4);
        console.log(quotient);
        let difference = await slowMath.subtract(`${quotient}`, 3);
        console.log(difference);
        sum = await slowMath.add(`${difference}`, 98);
        console.log(sum)
        let remains = await slowMath.remainder(`${sum}`, 2);
        console.log(remains);
        product = await slowMath.multiply(`${remains}`, 50);
        console.log(product);
        remains = await slowMath.remainder(`${product}`, 40);
        console.log(remains);
        sum = await slowMath.add(`${remains}`, 32);
        console.log(`The final result is ${sum}`);
    } catch (err) {
        console.log(err);
    }  
}
doMath();
