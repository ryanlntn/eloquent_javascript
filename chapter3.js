// Chapter 3
// Functions
//

// A program often needs to do the same thing in different places. Repeating all the necessary statements
// every time is tedious and error-prone. It would be better to put them in one place, and have the program 
// take a detour through there whenever necessary. This is what functions were invented for: 
// They are canned code that a program can go through whenever it wants.

// The defining properties of pure functions are that they always return the same value when given the same 
// arguments, and never have side effects. They take some arguments, return a value based on these arguments, 
// and do not monkey around with anything else.

// In JavaScript, addition is an operator, but it could be wrapped in a function like 
// this (and as pointless as this looks, we will come across situations where it is actually useful):

function add(a, b) {
  return a + b;
}

show(add(2, 2));

// The keyword function is always used when creating a new function.

// The keyword return, followed by an expression, is used to determine the value the function returns.

// A body can, of course, have more than one statement in it. Here is a function for computing 
// powers (with positive, integer exponents):

function power(base, exponent) {
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
}

show(power(2, 10));

// Write a function called absolute, which returns the absolute value of the number it is given as its argument. 
// The absolute value of a negative number is the positive version of that same number, and the absolute value 
// of a positive number (or zero) is that number itself.
//
// Ex. 3.1

function absolute(n) {
  if (n < 0)
    return -n;
  else
    return n;
}

show(absolute(-144));

// Functions with side effects do not have to contain a return statement. If no return statement is 
// encountered, the function returns undefined.

function yell(message) {
  alert(message + "!!");
}

yell("Yow");

// When looking up a variable inside a function, the local environment is checked first, and only if 
// the variable does not exist there is it looked up in the top-level environment. This makes it possible for 
// variables inside a function to 'shadow' top-level variables that have the same name.

function alertIsPrint(value) {
  var alert = print;
  alert(value);
}

alertIsPrint("Troglodites");

// The variables in this local environment are only visible to the code inside the function. If this function 
// calls another function, the newly called function does not see the variables inside the first function:

var variable = "top-level";

function printVariable() {
  print("inside printVariable, the variable holds '" +
        variable + "'.");
}

function test() {
  var variable = "local";
  print("inside test, the variable holds '" + variable + "'.");
  printVariable();
}

test();

// However, and this is a subtle but extremely useful phenomenon, when a function is defined 
// inside another function, its local environment will be based on the local environment that 
// surrounds it instead of the top-level environment.

var variable = "top-level";
function parentFunction() {
  var variable = "local";
  function childFunction() {
    print(variable);
  }
  childFunction();
}
parentFunction();

// People who have experience with other programming languages might expect that a block of 
// code (between braces) also produces a new local environment. Not in JavaScript. Functions are the 
// only things that create a new scope. You are allowed to use free-standing blocks like this...

var something = 1;
{
  var something = 2;
  print("Inside: " + something);
}
print("Outside: " + something);

// Here is a case that might surprise you:

var variable = "top-level";
function parentFunction() {
  var variable = "local";
  function childFunction() {
    print(variable);
  }
  return childFunction;
}

var child = parentFunction();
child();

// parentFunction returns its internal function, and the code at the bottom calls this function. 
// Even though parentFunction has finished executing at this point, the local environment where 
// variable has the value "local" still exists, and childFunction still uses it. This phenomenon 
// is called closure.

// By using some of the variables from an enclosing function, an inner function can be made to do 
// different things. Imagine we need a few different but similar functions, one that adds 2 to its 
// argument, one that adds 5, and so on.

function makeAddFunction(amount) {
  function add(number) {
    return number + amount;
  }
  return add;
}

var addTwo = makeAddFunction(2);
var addFive = makeAddFunction(5);
show(addTwo(1) + addFive(1)); // 9

// To wrap your head around this, you should consider functions to not just package up a 
// computation, but also an environment. Top-level functions simply execute in the top-level 
// environment, that much is obvious. But a function defined inside another function retains 
// access to the environment that existed in that function at the point when it was defined.

// On top of the fact that different functions can contain variables of the same name without 
// getting tangled up, these scoping rules also allow functions to call themselves without running 
// into problems. A function that calls itself is called recursive. Recursion allows for some interesting 
// definitions. Look at this implementation of power:

function power(base, exponent) {
  if (exponent == 0)
    return 1;
  else
    return base * power(base, exponent - 1);
}

// Even though function definitions occur as statements between the rest of the 
// program, they are not part of the same time-line:

print("The future says: ", future());

function future() {
  return "We STILL have no flying cars.";
}

// There is another way to define function values, which more closely resembles the way other values are created. 
// When the function keyword is used in a place where an expression is expected, it is treated as an expression 
// producing a function value. Functions created in this way do not have to be given a name (though it is allowed to give them one).

var add = function(a, b) {
  return a + b;
};
show(add(5, 5));

// Note the semicolon after the definition of add. Normal function definitions do not need these, but this 
// statement has the same general structure as var add = 22;, and thus requires the semicolon.

// This kind of function value is called an anonymous function, because it does not have a name. Sometimes 
// it is useless to give a function a name, like in the makeAddFunction example we saw earlier:

function makeAddFunction(amount) {
  return function (number) {
    return number + amount;
  };
}

// Since the function named add in the first version of makeAddFunction was referred to only once, the 
// name does not serve any purpose and we might as well directly return the function value.

// Write a function greaterThan, which takes one argument, a number, and returns a function that represents 
// a test. When this returned function is called with a single number as argument, it returns a boolean: 
// true if the given number is greater than the number that was used to create the test function, and false otherwise.
//
// Ex. 3.2

function greaterThan(number) {
  return function(n) {
    return n > number;
  }
}

var moreThan5 = greaterThan(5);
print(moreThan5(6));