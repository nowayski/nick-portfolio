---
title: "Day 1: A beginners take on JS scope. Var vs Let vs Const."
date: "2022-07-03"
---

## I am a beginner.

So I have recently begun on my challenge to find a web dev role by the end of the year.
Along side this goal comes all the new and exciting things you have to learn, and one of the things that is incredibly important is understanding ES6 in all it's glory.

**So, what is the difference between Var, Let and Const?**

There are a fair few differences and use cases for each, and all are important but to properly answer this question you need to understand the concept of "scope".

**A brief aside about scope.**

Without getting into too much detail, scope is where variables in your code can be "accessed" or "referenced".

The three types of scope that are important here though, are **"Global", "Functional"**, and **"Block"** scope.

**Block scope** is anything that is surrounded by { } curly braces, more specifically an if/while/for statement might be where this arises:

```javascript
{
  let x = 2;
}
if (1 > 2) {
  const y = 5;
}
```

Both of the above are examples of block scope.

**Functional scope or Local Scope** (in JavaScript they are essentially the same) is when you declare your variables inside a function that cannot be accessed outside said function:

```javascript
function add(x, y) {
  var z = x + y;
  return z;
}
function subtract(x, y) {
  let z = x - y;
  return y;
}
function multiply(x, y) {
  const z = x * y;
  return y;
}
//z cannot be accessed here.
```

All of the three types of variable here seem to act the same as they cannot be accessed outside of the functions due to **Functional/Local scope**.

Last but not least is **global scope** which , as you can imagine, can be referenced anywhere your code as it is declared outside a function or block.

```javascript
let x = 0;
// x can be accessed here
function myFunction() {
  x++;
  // x can also be accessed here
}
```

Now that we understand what scope in JavaScript looks like, perhaps we should get back on track.

## Hurry up and tell me how Var, Let and Const are different!

Ok ok!

Well with the introduction of Let and Const in ES6, block scoping became a concern and also a benefit to using these keywords.
Quick Note:
To **declare** a variable is to create it with a keyword:

```javascript
var x;
let y;
```

To **define** a variable is to give it a value:

```javascript
var x = 1;
let y = 2;
const x = 3;
```

So in one sentence each:

**var** (the og variable) can be declared and defined as many times as you wish.

**let** can be declared a single time but defined as many times as you wish, it also has block scoping.

**const** can be declared and defined ONLY once, but it also has block scoping and MUST be defined and declared at the same time.

Easy eh?

**And now for the details**

**Var** is now **not** the variable you should declare as a default instinct because of it's global scope. Scoping is important for good practice code, so as your code gets bigger and longer and more complex, you might run into some redeclaration problems:

```javascript
var x = 0;
function myFunction() {
  var x = 2;
  //Do this and that
}
```

This is ALLOWED but it should be avoided as all costs, because it is confusing and generally leads to bad practice. Nowadays it is recommended to use the **let** keyword in var's place.

**Let** as mentioned previously has block scope, but can be redefined as many times as you wish:

```javascript
let x = 0;
x = 5;
x = 10;
//This is ok but...

let y = 0;
let y = 5;
//This is NOT ok
```

and now for block scope:

```javascript
if (check_something) {
  let y = 5;
  console.log(y);
  //Expected: 5;
}
console.log(y);
//Expected: undefined.
```

Finally, **const** is the most interesting keyword because it has block scoping, must be declared and defined at the same time, and cannot be redeclared or redefined at any point, but it still has so many use cases.
const should be used when \__defining arrays and objects_ because each value inside the array is not in fact a constant but the reference to the const ITSELF is constant.
Some examples:

```javascript
const names = ["Nick", "Emma", "Dan"];
names = ["Tim", "Tom", "Tam"];
//ERROR: this is a redefine so will not work.
const ages = [20, 30, 40];
const ages = [50, 60, 50];
//ERROR: this is a Redeclaration so will not work.
```

However, using an object and an array as an example these both are ok:

```javascript
const names = ["Nick", "Emma", "Dan"];
names[0] = "Not Nick";
const user = {name:"Nick, age:"29", hobby: "board games"};
user.age = 30;
//All valid code.
```

A final note is that const, like let, is block scoped but I won't bore you with more examples.

## That's all folks.

This has been me, as a beginner attempting to revise and explain briefly what scoping, and the three keywords var, let and const mean as simply as possible.
I am sure I've missed so many interesting points, but hey maybe next time!
For more details, read MDN or W3Schools as always ;).
