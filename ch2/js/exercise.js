function arrayExercises() {
  console.log("--- Array Exercises ---");

  // 1. Given [2, 4, 6, 8], use map to create an array of squares.
  const numbers1 = [2, 4, 6, 8];
  const squares = numbers1.map(n => n * n);
  console.log("1. Squares:", squares);

  // 2. Filter out all odd numbers from [1,2,3,4,5,6].
  const numbers2 = [1, 2, 3, 4, 5, 6];
  const evens = numbers2.filter(n => n % 2 === 0);
  console.log("2. Even numbers:", evens);

  // 3. Use reduce to find the maximum number in [10, 25, 5, 40, 30].
  const numbers3 = [10, 25, 5, 40, 30];
  const max = numbers3.reduce((acc, n) => (n > acc ? n : acc), numbers3[0]);
  console.log("3. Maximum number:", max);

  // 4. Count how many times each word appears: ["apple", "banana", "apple", "orange", "banana", "apple"].
  const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
  const wordCount = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});
  console.log("4. Word count:", wordCount);

  // 5. Flatten an array of arrays [[1,2],[3,4],[5]] into [1,2,3,4,5] using reduce.
  const nestedArray = [[1, 2], [3, 4], [5]];
  const flattened = nestedArray.reduce((acc, arr) => acc.concat(arr), []);
  console.log("5. Flattened array:", flattened);
}

function objectExercises() {
  console.log("--- Object Exercises ---");

  // 1. Create an object car = { brand: "Tesla", model: "X", year: 2023 }. Print all keys and values separately.
  const car = { brand: "Tesla", model: "X", year: 2023 };
  console.log("1. Car keys:", Object.keys(car));
  console.log("1. Car values:", Object.values(car));

  // 2. Write a function that swaps keys and values: {a:1, b:2} → {1:"a", 2:"b"}.
  function swapKeysAndValues(obj) {
    const swapped = {};
    for (const key in obj) {
      swapped[obj[key]] = key;
    }
    return swapped;
  }
  const objToSwap = { a: 1, b: 2 };
  console.log("2. Swapped object:", swapKeysAndValues(objToSwap));

  // 3. Count how many properties an object has without using Object.keys().length.
  let count = 0;
  for (const key in car) {
    if (car.hasOwnProperty(key)) {
      count++;
    }
  }
  console.log("3. Property count:", count);

  // 4. Merge two objects: {name:"Alice"} and {age:25} into one.
  const objA = { name: "Alice" };
  const objB = { age: 25 };
  const mergedObj = { ...objA, ...objB };
  console.log("4. Merged object:", mergedObj);

  // 5. Write a function that converts an object to a query string:
  function toQueryString(obj) {
    return Object.entries(obj)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
  }
  const queryObj = { name: "Alice", age: 25 };
  console.log("5. Query string:", toQueryString(queryObj));
}

function functionExercises() {
  console.log("--- Function Exercises ---");

  // 1. Write a function declaration to calculate factorial.
  function factorialDeclaration(n) {
    if (n === 0) return 1;
    return n * factorialDeclaration(n - 1);
  }
  console.log("1. Factorial (declaration):", factorialDeclaration(5));

  // 2. Convert it into a function expression.
  const factorialExpression = function(n) {
    if (n === 0) return 1;
    return n * factorialExpression(n - 1);
  };
  console.log("2. Factorial (expression):", factorialExpression(5));

  // 3. Convert it into an arrow function.
  const factorialArrow = n => {
    if (n === 0) return 1;
    return n * factorialArrow(n - 1);
  };
  console.log("3. Factorial (arrow):", factorialArrow(5));

  // 4. Write an arrow function isEven that returns true if a number is even.
  const isEven = n => n % 2 === 0;
  console.log("4. Is 4 even?", isEven(4));
  console.log("4. Is 5 even?", isEven(5));

  // 5. Create an IIFE that prints "Hello IIFE!".
  (function() {
    console.log("5. Hello IIFE!");
  })();
}

function paramsExercises() {
  console.log("--- Params Exercises ---");

  // 1. Write a function greet(name="Guest") that prints "Hello, <name>". Call it with and without an argument.
  function greet(name = "Guest") {
    console.log(`1. Hello, ${name}`);
  }
  greet();
  greet("World");

  // 2. Write a function sum(...nums) that returns the total of all arguments.
  function sum(...nums) {
    return nums.reduce((acc, n) => acc + n, 0);
  }
  console.log("2. Sum:", sum(1, 2, 3, 4, 5));

  // 3. Merge two arrays [1,2,3] and [4,5,6] using spread.
  const arrA = [1, 2, 3];
  const arrB = [4, 5, 6];
  const mergedArr = [...arrA, ...arrB];
  console.log("3. Merged array:", mergedArr);

  // 4. Copy an object using spread and add a new property.
  const user = { name: "Bob" };
  const userWithAge = { ...user, age: 30 };
  console.log("4. Copied and extended object:", userWithAge);

  // 5. Write a function that takes two arrays as arguments and returns a single merged array without duplicates using spread + Set.
  function mergeWithoutDuplicates(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
  }
  const arrC = [1, 2, 3];
  const arrD = [3, 4, 5];
  console.log("5. Merged without duplicates:", mergeWithoutDuplicates(arrC, arrD));
}

function scopeExercises() {
  console.log("--- Scope Exercises ---");

  // 1. Write a function with a variable inside it. Try accessing it outside the function. What happens?
  function scopeTest1() {
    const localVar = "I am local";
  }
  scopeTest1();
  try {
    console.log("1.", localVar);
  } catch (e) {
    console.log("1. Error accessing local variable:", e.message);
  }

  // 2. Inside an if block, declare a variable with var and another with let. Check which one is accessible outside.
  if (true) {
    var varVar = "I am var";
    let letVar = "I am let";
  }
  console.log("2. varVar is accessible:", typeof varVar !== "undefined");
  try {
    console.log("2. letVar is accessible:", typeof letVar !== "undefined");
  } catch (e) {
    console.log("2. Error accessing letVar:", e.message);
  }


  // 3. Try using a variable before it is declared with let. Observe the error (Temporal Dead Zone).
  try {
    console.log("3.", tdzVar);
    let tdzVar = "I am in the TDZ";
  } catch (e) {
    console.log("3. Error from TDZ:", e.message);
  }
}
