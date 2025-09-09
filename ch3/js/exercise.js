// Hoisting Exercises
function hoistingExercise1() {
    console.clear();
    console.log("--- Hoisting Exercise 1 ---");
    // Prediction: undefined, then undefined inside the function.
    // Explanation: The declaration `var x = 5;` is function-scoped to `hoistingExercise1`. Its declaration is hoisted to the top of `hoistingExercise1`, so the first `console.log(x)` prints `undefined`.
    // Inside `test`, a new `var x = 10;` is function-scoped to `test`. Its declaration is hoisted to the top of `test`, so `console.log(x)` inside `test` also prints `undefined`.
    console.log(x);
    var x = 5;
    function test() {
      console.log(x);
      var x = 10;
    }
    test();
}

function hoistingExercise2() {
    console.clear();
    console.log("--- Hoisting Exercise 2 ---");
    // This is how JavaScript interprets the code from Exercise 1.
    var x;
    console.log(x); // undefined
    x = 5;
    function test() {
      var x;
      console.log(x); // undefined
      x = 10;
    }
    test();
}

function hoistingExercise3() {
    console.clear();
    console.log("--- Hoisting Exercise 3 (with let) ---");
    // Prediction: ReferenceError for both console.log statements.
    // Explanation: `let` and `const` are not hoisted in the same way as `var`. They are in a "temporal dead zone" from the start of the block until the declaration is encountered.
    try {
        console.log(x);
        let x = 5;
    } catch (e) {
        console.log("Cannot access 'x' before initialization");
    }
    function test() {
        try {
            console.log(x);
            let x = 10;
        } catch (e) {
            console.log("Cannot access 'x' before initialization inside test");
        }
    }
    test();
}

// Higher-Order Functions Exercises
function higherOrderFunctionsExercise1() {
    console.clear();
    console.log("--- Higher-Order Functions Exercise 1 ---");
    // Prediction: 9
    // Explanation: The `applyTwice` function takes a function `fn` and a `value`. It applies `fn` to the `value` and then applies `fn` again to the result.
    const applyTwice = (fn, value) => fn(fn(value));
    console.log("applyTwice(x => x + 2, 5) =>", applyTwice(x => x + 2, 5));
}

function higherOrderFunctionsExercise2() {
    console.clear();
    console.log("--- Higher-Order Functions Exercise 2 ---");
    // Prediction: [2, 4, 6]
    // Explanation: The `filter` method creates a new array with all elements that pass the test implemented by the provided function.
    const filterEven = (numbers) => numbers.filter(n => n % 2 === 0);
    console.log("filterEven([1, 2, 3, 4, 5, 6]) =>", filterEven([1, 2, 3, 4, 5, 6]));
}

function higherOrderFunctionsExercise3() {
    console.clear();
    console.log("--- Higher-Order Functions Exercise 3 ---");
    // Prediction: "Hi Alice"
    // Explanation: `makeGreeter` is a higher-order function that returns a new function. The returned function is a closure that remembers the `greeting` string.
    const makeGreeter = (greeting) => (name) => `${greeting} ${name}`;
    const sayHi = makeGreeter("Hi");
    console.log(sayHi("Alice"));
}

// Closures Exercises
function closuresExercise1() {
    console.clear();
    console.log("--- Closures Exercise 1 ---");
    // Prediction: 6, 7, 6
    // Explanation: `createCounter` returns an object with two methods, `increment` and `decrement`. These methods form a closure over the `count` variable.
    const createCounter = (start) => {
        let count = start;
        return {
            increment: () => ++count,
            decrement: () => --count,
        };
    };
    const counter = createCounter(5);
    console.log("counter.increment() =>", counter.increment());
    console.log("counter.increment() =>", counter.increment());
    console.log("counter.decrement() =>", counter.decrement());
}

function closuresExercise2() {
    console.clear();
    console.log("--- Closures Exercise 2 ---");
    // Prediction: 5, then 5 again.
    // Explanation: The `once` function ensures that the passed function `fn` is only executed once. It uses a closure to keep track of whether `fn` has been called.
    const once = (fn) => {
        let hasBeenCalled = false;
        let result;
        return (...args) => {
            if (!hasBeenCalled) {
                hasBeenCalled = true;
                result = fn(...args);
            }
            return result;
        };
    };
    const myFunction = (a, b) => a + b;
    const onceFn = once(myFunction);
    console.log("onceFn(2, 3) =>", onceFn(2, 3));
    console.log("onceFn(4, 5) =>", onceFn(4, 5));
}

function closuresExercise3() {
    console.clear();
    console.log("--- Closures Exercise 3 ---");
    // Prediction: false, true
    // Explanation: `passwordChecker` returns a function that checks if the provided `attempt` matches the original `password`. The returned function is a closure that remembers the `password`.
    const passwordChecker = (password) => (attempt) => password === attempt;
    const checkPassword = passwordChecker("secret");
    console.log("checkPassword('wrong') =>", checkPassword('wrong'));
    console.log("checkPassword('secret') =>", checkPassword('secret'));
}