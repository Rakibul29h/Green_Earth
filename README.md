
### 1)What is the difference between var, let, and const?

var has functional or global scope. It can be re-declared and updated in the same scope.

let has block scope. It can be updated but cannot be redeclared in the same scope.

const has block scope but it can neither be updated or re-declared in any scope.

### 2)What is the difference between map(), forEach(), and filter()?

map() executes a function on every element in an array and returns a new array with the updated elements.

forEach() executes a function on every element in an array and does not return any value.

filter() executes a function on every element in an array and return an new array containing only those element that satisfy the given condition.

###  3)What are arrow functions in ES6?

In ES6, arrow function are a shorter way to write traditional function. For example:

function sum(a,b){
    return a+b;
}

can be written as
const sum=(a,b)=>a+b;

### 4) How does destructuring assignment work in ES6?

Destructuring assignments allows to extract values from arrays or objects and assign them to variable.
For example:

const number=[1,2,3];

const [a,b,c]=number;

if we console a , b , c then the output will be 1 2 3.
here 1 assign to a 2 assign to b and 3 assign to c.
like that objects can be extracted.

### 5) Explain template literals in ES6. How are they different from string concatenation?
Template literals in ES6 is a new way to declear string. In template literals backticks are used instead of single or double quotes.

In string we cannot use variable inside the quotes and for multiline their need \n . But in template literals We can use variable inside the string by using ${} and this support multiline directly.
