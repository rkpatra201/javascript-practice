let globalVar = "I'm a global variable";

function example() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // map: double each number
  const doubled = numbers.map(n => n * 2);
  console.log('Doubled numbers:', doubled);

  // filter: get only even numbers
  const evens = numbers.filter(n => n % 2 === 0);
  console.log('Even numbers:', evens);

  // reduce: sum all numbers
  const sum = numbers.reduce((acc, n) => acc + n, 0);
  console.log('Sum of numbers:', sum);
}

function objectExample() {
  const user = {
    name: 'John Doe',
    age: 30,
    isAdmin: true
  };

  console.log('User object:', user);

  // Accessing properties
  console.log('User name:', user.name);
  console.log('User age:', user['age']);

  // Object.keys
  console.log('Object keys:', Object.keys(user));

  // Object.values
  console.log('Object values:', Object.values(user));

  // Object.entries
  console.log('Object entries:', Object.entries(user));

  // Object.freeze
  const frozenUser = Object.freeze(user);
  console.log('Is user frozen?', Object.isFrozen(frozenUser));

  // Try to modify the frozen object (this will fail silently in non-strict mode)
  try {
    frozenUser.age = 31;
    console.log('User age after trying to modify:', frozenUser.age);
  } catch (e) {
    console.error('Error trying to modify frozen object:', e);
  }
}

function functionExample() {
  // Function Declaration
  function declaredFunction() {
    console.log('This is a function declaration.');
  }
  declaredFunction();

  // Function Expression
  const expressedFunction = function() {
    console.log('This is a function expression.');
  };
  expressedFunction();

  // Arrow Function
  const arrowFunction = () => {
    console.log('This is an arrow function.');
  };
  arrowFunction();
}

function paramsExample() {
  // Default Parameters
  function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
  }
  greet();
  greet('John');

  // Rest Parameter
  function sum(...numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
  }
  console.log('Sum:', sum(1, 2, 3, 4, 5));

  // Spread Operator
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const combined = [...arr1, ...arr2];
  console.log('Combined array:', combined);

  const obj1 = { a: 1, b: 2 };
  const obj2 = { c: 3, d: 4 };
  const merged = { ...obj1, ...obj2 };
  console.log('Merged object:', merged);
}

function scopeExample() {
  console.log("--- Scope Examples ---");

  // Function scope
  function functionScopeExample() {
    var functionVar = "I'm a function-scoped variable";
    console.log(globalVar); // Accessible
    console.log(functionVar); // Accessible
  }
  functionScopeExample();
  // console.log(functionVar); // Uncaught ReferenceError: functionVar is not defined

  // Block scope
  if (true) {
    let blockVar = "I'm a block-scoped variable";
    const blockConst = "I'm also block-scoped";
    console.log(blockVar); // Accessible
    console.log(blockConst); // Accessible
  }
  // console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined
  // console.log(blockConst); // Uncaught ReferenceError: blockConst is not defined

  console.log(globalVar); // Accessible

  console.log("--- Difference between block scope (let) and function scope (var) ---");
  function scopeDifference() {
    if (true) {
      var varInBlock = "I'm a var in a block (function scope)";
      let letInBlock = "I'm a let in a block (block scope)";
    }
    console.log(varInBlock); // Accessible
    try {
      console.log(letInBlock); // Uncaught ReferenceError: letInBlock is not defined
    } catch (e) {
      console.error(e.message);
    }
  }
  scopeDifference();

  // can you access varInBlock here?
  // console.log(varInBlock); // Uncaught ReferenceError: varInBlock is not defined
}

function iifeExample() {
  console.log("--- IIFE Examples ---");

  const addResult = (function add(a, b) { return a + b; })(10, 20);
  console.log('Addition Result:', addResult);

  const multiplyResult = (function(a, b) { return a * b; })(10, 20);
  console.log('Multiplication Result:', multiplyResult);

  const squareResult = (n => n * n)(10);
  console.log('Square Result:', squareResult);
}