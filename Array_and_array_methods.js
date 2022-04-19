// Arrays - variables taht hold multiple values


const numbers = new Array(1,2,3,4,5);

console.log(numbers);


const fruits = ['apples', 'oranges', 'pears'];

console.log(fruits);

const diff = ['apples', 'oranges', 'pears', 10, true];

console.log(diff);

console.log(fruits[1]);

fruits[3] = 'grapes';

console.log(fruits);

fruits.push('mangos'); // add element to last index

console.log(fruits);

fruits.unshift('strawberries'); // add element to index 0

console.log(fruits);

fruits.pop() // remove last element

console.log(fruits);

console.log(Array.isArray(fruits)) // check the variable type, it is array or not


console.log(fruits.indexOf('oranges'))