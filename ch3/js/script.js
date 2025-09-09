// Chapter 3: Hoisting, Higher Order Functions, and Closures

function showHoistingExamples() {
    console.clear();
    // 1. Hoisting
    console.log("--- Hoisting ---");

    // Explanation:
    // Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope before code execution.
    // This means that you can use a variable or function before it has been declared in your code.
    // However, only the declarations are hoisted, not the initializations.

    // Example 1: Variable hoisting with var
    console.log("Example 1: Variable hoisting with var");
    console.log(myVar); // Outputs: undefined
    var myVar = 10;
    console.log(myVar); // Outputs: 10

    // Example 2: Function hoisting with function declarations
    console.log("\nExample 2: Function hoisting with function declarations");
    myFunction(); // Outputs: "Hello from myFunction!"

    function myFunction() {
      console.log("Hello from myFunction!");
    }

    // Example 3: let and const are not hoisted
    console.log("\nExample 3: let and const are not hoisted");
    try {
      console.log(myLet); // Throws ReferenceError
    } catch (e) {
      console.log(e.message);
    }
    let myLet = 20;

    try {
        console.log(myConst); // Throws ReferenceError
    } catch (e) {
        console.log(e.message);
    }
    const myConst = 30;
}

function showHigherOrderFunctionExamples() {
    console.clear();
    // 2. Higher Order Functions
    console.log("\n--- Higher Order Functions ---");

    // Explanation:
    // Higher-order functions are functions that operate on other functions, either by taking them as arguments or by returning them.
    // They are a fundamental concept in functional programming and are widely used in JavaScript.

    // Example 1: A function that takes another function as an argument
    console.log("Example 1: A function that takes another function as an argument");
    function operateOnArray(arr, operation) {
      let result = [];
      for (let i = 0; i < arr.length; i++) {
        result.push(operation(arr[i]));
      }
      return result;
    }

    const numbers = [1, 2, 3, 4, 5];
    const double = (x) => x * 2;
    const squared = (x) => x * x;

    console.log("Original array:", numbers);
    console.log("Doubled array:", operateOnArray(numbers, double));
    console.log("Squared array:", operateOnArray(numbers, squared));


    // Example 2: A function that returns another function
    console.log("\nExample 2: A function that returns another function");
    function createMultiplier(multiplier) {
      return function(x) {
        return x * multiplier;
      };
    }

    const multiplyBy5 = createMultiplier(5);
    const multiplyBy10 = createMultiplier(10);

    console.log("5 * 8 =", multiplyBy5(8));   // Outputs: 40
    console.log("10 * 8 =", multiplyBy10(8)); // Outputs: 80


    // Example 3: Using built-in higher-order functions like map
    console.log("\nExample 3: Using built-in higher-order functions like map");
    const words = ["hello", "world", "javascript"];
    const uppercasedWords = words.map(word => word.toUpperCase());

    console.log("Original words:", words);
    console.log("Uppercased words:", uppercasedWords);
}

function showClosureExamples() {
    console.clear();
    // 3. Lexical Scope & Closures
    console.log("\n--- Lexical Scope & Closures ---");

    // Explanation:
    // Lexical scope means that the scope of a variable is determined by its position in the source code.
    // A closure is the combination of a function and the lexical environment within which that function was declared.
    // This means that a function has access to the variables of its outer function, even after the outer function has returned.

    // Example 1: A simple closure with a counter
    console.log("Example 1: A simple closure with a counter");
    function createCounter() {
      let count = 0;
      return function() {
        count++;
        return count;
      };
    }

    const counter1 = createCounter();
    console.log(counter1()); // Outputs: 1
    console.log(counter1()); // Outputs: 2

    const counter2 = createCounter();
    console.log(counter2()); // Outputs: 1


    // Example 2: A closure for data privacy
    console.log("\nExample 2: A closure for data privacy");
    function createPerson(name) {
      let _name = name; // Private variable

      return {
        getName: function() {
          return _name;
        },
        setName: function(newName) {
          _name = newName;
        }
      };
    }

    const person = createPerson("Alice");
    console.log(person.getName()); // Outputs: Alice
    person.setName("Bob");
    console.log(person.getName()); // Outputs: Bob
    console.log(person._name);     // Outputs: undefined (cannot access private variable)


    // Example 3: A closure in an asynchronous context
    console.log("\nExample 3: A closure in an asynchronous context");
    function sayHelloAfterDelay(name, delay) {
        setTimeout(function() {
            console.log("Hello, " + name);
        }, delay);
    }

    sayHelloAfterDelay("World", 2000); // After 2 seconds, it will log "Hello, World"
    sayHelloAfterDelay("Alice", 1000); // After 1 second, it will log "Hello, Alice"
}