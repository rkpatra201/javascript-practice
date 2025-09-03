runScript();


function runScript() {
  console.log("script loaded")
}


function example1() {
  console.log("var let const example");

  // var
  var a = 10;
  var a = 20; // allowed
  console.log(a); // 20

  // let
  let b = 5;
  // let b = 6; // ❌ error
  b = 6; // ✅ allowed

  // const
  const c = 100;
  // c = 200; // ❌ error
  const arr = [1, 2];
  arr.push(3); // ✅ allowed
  console.log(arr); // 1, 2, 3
}

// 1. var, let, const: reassigning and redeclaring
function ex1_m1() {
  console.log("1. var, let, const:");
  var a = 10;
  var a = 20; // Redeclaring with var is allowed
  console.log("var a (redeclared):", a);

  let b = 5;
  // let b = 6; // Redeclaring with let is NOT allowed
  b = 6; // Reassigning with let is allowed
  console.log("let b (reassigned):", b);

  const c = 100;
  // const c = 200; // Redeclaring with const is NOT allowed
  // c = 200; // Reassigning with const is NOT allowed
  console.log("const c:", c);

  console.log("var can be redeclared and reassigned.");
  console.log("let can be reassigned but not redeclared in the same scope.");
  console.log("const cannot be redeclared or reassigned.");
}

// 2. Block scope demonstration
function ex1_m2() {
  console.log("2. Block Scope:");
  {
    var x = "var in block";
    let y = "let in block";
    console.log("Inside block: x =", x, ", y =", y);
  }
  console.log("Outside block: x =", x);
  try {
    console.log("Outside block: y =", y);
  } catch (e) {
    console.log("Outside block: y is not accessible (ReferenceError)");
  }
  console.log("var is function-scoped, so x is accessible outside the block.");
  console.log("let is block-scoped, so y is NOT accessible outside the block.");
}

// 3. const object property change
function ex1_m3() {
  console.log("3. const object property change:");
  const obj = { name: "Alice" };
  obj.name = "Bob"; // Allowed: changing property
  console.log("obj.name changed to:", obj.name);
  console.log("const means the variable binding can't change, but object properties can be changed.");
}

function example2() {
  console.log("example2");
  // Primitive
  let x = 10;
  let y = x; // copy
  y = 20;
  console.log(x, y); // 10, 20

  // Reference
  let obj1 = { n: 1 };
  let obj2 = obj1; // reference
  obj2.n = 99;
  console.log(obj1.n); // 99 (affected)

}



function example2_m1() {
  console.log("1. Primitive vs Object assignment:");
  // Primitive
  let x = 10;
  let y = x; // copy value
  y = 20;
  console.log("Primitive: x =", x, ", y =", y); // x=10, y=20

  // Object
  let obj1 = { n: 1 };
  let obj2 = obj1; // reference
  obj2.n = 99;
  console.log("Object: obj1.n =", obj1.n, ", obj2.n =", obj2.n); // both 99
}

function example2_m2() {
  console.log("2. Function modifying object:");
  let person = { name: "Alice" };
  function changeName(obj) {
    obj.name = "Bob";
  }
  changeName(person);
  console.log("After function call, person.name =", person.name); // Bob
}

function example2_m3() {
  console.log("3. typeof null, typeof []:");
  console.log("typeof null:", typeof null); // object (historical JS bug)
  console.log("typeof []:", typeof []); // object (arrays are objects)
  console.log("Explanation: typeof null returns 'object' due to legacy reasons. Arrays are also objects in")
}



function example3() {
  console.log("Type Conversion & Coercion");

  // Explicit conversion
  let str = "123";
  let num = Number(str);
  console.log(num, typeof num); // 123 'number'

  // Coercion
  console.log("5" - 2); // 3
  console.log("5" + 2); // "52"

  // Type inference
  let n = 10; // inferred as number
  let txt = "hi"; // inferred as string

  // typeof
  console.log(typeof 42); // "number"
  console.log(typeof null); // "object"
  console.log(typeof function () { }); // "function"

}


function example3_m1() {
  console.log("1. Explicit and Implicit Conversion:");

  // Explicit conversion
  let str = "123";
  let num = Number(str);
  console.log('"123" explicitly to number:', num, typeof num);

  let n = 456;
  let s = String(n);
  console.log('456 explicitly to string:', s, typeof s);

  // Implicit conversion
  let implicitNum = +"123";
  console.log('"123" implicitly to number using +:', implicitNum, typeof implicitNum);

  let implicitStr = 456 + "";
  console.log('456 implicitly to string using + "":', implicitStr, typeof implicitStr);
}

function example3_m2() {
  console.log("2. Predict and Explain Results:");

  let res1 = "10" + 5;
  console.log('"10" + 5 =', res1, '// String concatenation, result: "105"');

  let res2 = "10" - 5;
  console.log('"10" - 5 =', res2, '// Subtraction, "10" is coerced to number, result: 5');

  let res3 = true + 1;
  console.log('true + 1 =', res3, '// true is coerced to 1, result: 2');
}

function example3_m3() {
  console.log("3. typeof checks:");
  console.log('typeof null =', typeof null); // "object" (legacy bug)
  console.log('typeof undefined =', typeof undefined); // "undefined"
  console.log('typeof NaN =', typeof NaN); // "number"
  console.log('typeof [] =', typeof []); // "object"

}

function example4() {
  console.log("Operators");
  // Arithmetic
  console.log(5 + 2); // 7
  console.log(5 % 2); // 1

  // Comparison
  console.log(5 == "5"); // true
  console.log(5 === "5"); // false

  // Logical
  let age = 18;
  console.log(age >= 18 && age < 60); // true

  // Nullish coalescing
  let val = null ?? "default";
  console.log(val); // "default"

}

function example4_m1() {
  console.log("1. Compare 5 == '5' vs 5 === '5':");
  console.log("5 == '5':", 5 == "5"); // true, type coercion
  console.log("5 === '5':", 5 === "5"); // false, strict equality
  console.log("== does type conversion, === checks both value and type.");
}

function example4_m2() {
  console.log("2. Logical operators: Check if a number is between 50 and 100:");
  let num = 75;
  let isBetween = num >= 50 && num <= 100;
  console.log("Is", num, "between 50 and 100?", isBetween);
}

function example4_m3() {
  console.log("3. Use ?? to assign default when variable is undefined:");
  let val;
  let result = val ?? "default value";
  console.log("Value is:", result);
}


function example5() {
  console.log("Truthy & Falsy");
  if (" ") console.log("truthy"); // runs
  if ("") console.log("falsy"); // not run

  console.log(Boolean(0)); // false
  console.log(Boolean([])); // true



  // OR (||) : First truthy value
  console.log("false || 42:", false || 42); // 42
  console.log("0 || 'hello':", 0 || "hello"); // "hello"
  console.log("'' || 'default':", "" || "default"); // "default"

  // AND (&&) : First falsy value or last truty value
  console.log("42 && 34:", 42 && 34); // 34
  console.log("0 && 34:", 0 && 34); // 0
  console.log("true && 'yes':", true && "yes"); // "yes"

  // Nullish Coalescing (??): First defined value (not null/undefined)
  console.log("undefined ?? 'fallback':", undefined ?? "fallback"); // "fallback"
  console.log("null ?? 'fallback':", null ?? "fallback"); // "fallback"
  console.log("false ?? 'fallback':", false ?? "fallback"); // false
  console.log("0 ?? 'fallback':", 0 ?? "fallback"); // 0

}

function example5_m1(value) {
  if (value) {
    console.log("truthy");
  } else {
    console.log("falsy");
  }
}

function example5_m2() {
  console.log("Testing all falsy values:");
  if (!false) console.log("false is falsy");
  if (!0) console.log("0 is falsy");
  if (!-0) console.log("-0 is falsy");
  if (!0n) console.log("0n is falsy");
  if (!"") console.log('"" is falsy');
  if (!null) console.log("null is falsy");
  if (!undefined) console.log("undefined is falsy");
  if (!NaN) console.log("NaN is falsy");
}

function example5_m3() {
  console.log("Difference between || and ??:");
  let a = 0;
  let b = null;
  let c = undefined;

  console.log("a || 42:", a || 42); // 42 (because 0 is falsy)
  console.log("a ?? 42:", a ?? 42); // 0 (because 0 is not null/undefined)

  console.log("b || 'default':", b || "default"); // "default"
  console.log("b ?? 'default':", b ?? "default"); // "default"

  console.log("c || 'default':", c || "default"); // "default"
  console.log("c ?? 'default':", c ?? "default"); // "default"
}

function example6() {
  console.log("String methods and literals");
  let s = "  JavaScript  ";
  console.log(s.trim()); // "JavaScript"
  console.log(s.toUpperCase()); // "  JAVASCRIPT  "
  console.log(s.slice(2, 6)); // "Java"  note that slice is similar to substring of java

  let name = "Alice";
  console.log(`Hello ${name}, welcome!`);
  // multi-line
  console.log(`Line 1
Line 2`);

}


function example6_m1() {
  let str = " Hello JS ";
  let trimmed = str.trim();
  let lower = trimmed.toLowerCase();
  let firstFive = lower.slice(0, 5); // this gives "hello"
  console.log('Trimmed:', trimmed);
  console.log('Lowercase:', lower); // this gives "hello js"
  console.log('First 5 chars:', firstFive);
}

function example6_m2() {
  const name = "Your Name";
  const message = `My name is ${name}
I am learning JavaScript
`;
  console.log(message);
}

function example6_m3() {
  let colors = "red,green,blue";
  let arr = colors.split(","); // this gives array ['red', 'green', 'blue']
  let joined = arr.join("-"); // this gives "red-green-blue"
  console.log('Array:', arr);
  console.log('Joined with "-":', joined);
}
