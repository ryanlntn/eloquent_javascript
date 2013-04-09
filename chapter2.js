// Chapter 2
// Basic JavaScript: values, variables, and control flow
//

// Inside the computer's world, there is only data. That which is not data, does not exist. 

// In JavaScript's system, most of this data is neatly separated into things called values. 
// Every value has a type, which determines the kind of role it can play. 
// There are six basic types of values: 
// Numbers, strings, booleans, objects, functions, and undefined values.

// Values of the type number are, as you might have deduced, numeric values. 
// They are written the way numbers are usually written:

144

// This is what 144 looks like in bits:

0100000001100010000000000000000000000000000000000000000000000000

// The number above has 64 bits. Numbers in JavaScript always do. This has one important repercussion: 
// There is a limited amount of different numbers that can be expressed. With three decimal digits, 
// only the numbers 0 to 999 can be written, which is 10^3 = 1000 different numbers. 
// With 64 binary digits, 264 different numbers can be written. This is a lot, more than 10^19

// Fractional numbers are written by using a dot.

9.81

// For very big or very small numbers, one can also use 'scientific' notation
// by adding an e, followed by the exponent of the number:

2.998e8

// Which is 2.998 * 108 = 299800000.

// Calculations with whole numbers (also called integers) that fit in 52 bits are guaranteed 
// to always be precise. Unfortunately, calculations with fractional numbers are generally not. 

// The main thing to do with numbers is arithmetic. Arithmetic operations such as addition 
// or multiplication take two number values and produce a new number from them. 
// Here is what they look like in JavaScript:

100 + 4 * 11

// Try to figure out what value this produces, and then run it to see if you were correct...
//
// Ex. 2.1

print((115 * 4 - 4 + 88 / 2) === 500);

// There is one more arithmetic operator which is probably less familiar to you. 
// The % symbol is used to represent the remainder operation. X % Y is the remainder 
// of dividing X by Y. For example 314 % 100 is 14, 10 % 3 is 1, and 144 % 12 is 0. 
// Remainder has the same precedence as multiplication and division.

// The next data type is the string. Its use is not as evident from its name as with numbers, 
// but it also fulfills a very basic role. Strings are used to represent text, the name supposedly 
// derives from the fact that it strings together a bunch of characters. Strings are written 
// by enclosing their content in quotes:

"Patch my boat with chewing gum."

// A quote that is preceded by a backslash will not end the string, but be part of it. 
// When an 'n' character occurs after a backslash, it is interpreted as a newline. 
// Similarly, a 't' after a backslash means a tab character.

"This is the first line\nAnd this is the second"

// There are of course situations where you want a backslash in a string to be just a 
// backslash, not a special code. If two backslashes follow each other, they will collapse 
// right into each other, and only one will be left in the resulting string value:

"A newline character is written like \"\\n\"."

// Strings can not be divided, multiplied, or subtracted. The + operator can be used on them. 
// It does not add, but it concatenates, it glues two strings together.

"con" + "cat" + "e" + "nate"

// Not all operators are symbols, some are written as words. For example, the typeof operator, which 
// produces a string value naming the type of the value you give it.

typeof 4.5

// The other operators we saw all operated on two values, typeof takes only one. 
// Operators that use two values are called binary operators, while those that 
// take one are called unary operators. The minus operator can be used both as a binary and a unary operator:

- (10 - 2)

// Then there are values of the boolean type. There are only two of 
// these: true and false. Here is one way to produce a true value:

3 > 2

// And false can be produced like this:

3 < 2

// Strings can be compared in the same way:

"Aardvark" < "Zoroaster"

// Other similar operators are >= ('is greater than or equal to'), <= (is less than or equal to), 
// == ('is equal to'), and != ('is not equal to').

"Itchy" != "Scratchy"
5e2 == 500

// There are also some useful operations that can be applied to boolean values themselves. 
// JavaScript supports three logical operators: and, or, and not. These can be used to 'reason' about booleans.

// The && operator represents logical and. It is a binary operator, and its result is only true if 
// both of the values given to it are true.

true && false

// || is the logical or, it is true if either of the values given to it is true:

true || false

// Not is written as an exclamation mark, !, it is a unary operator that flips the value 
// given to it, !true is false, and !false is true.

(4 >= 6 || "grass" != "green") &&
   !(12 * 2 == 144 && true)

// There exists a unit that is bigger than an expression. It is called a statement. 
// A program is built as a list of statements. Most statements end with a semicolon (;). 
// The simplest kind of statement is an expression with a semicolon after it. This is a program:

1;
!false;   

// To catch and hold values, JavaScript provides a thing called a variable.

var caught = 5 * 5;

// When a variable points at a value, that does not mean it is tied to that value forever. 
// At any time, the = operator can be used on existing variables to yank them away from their 
// current value and make them point to a new one.

caught = 4 * 4;

// A lot of the values provided by the standard environment have the type 'function'. 
// A function is a piece of program wrapped in a value. Generally, this piece of program 
// does something useful, which can be invoked using the function value that contains it. 

// In a browser environment, the variable alert holds a function that shows a little dialog 
// window with a message. It is used like this:

alert("Avocados");

// Showing a dialog window is a side effect. A lot of functions are useful because of the side effects they produce. 
// It is also possible for a function to produce a value, in which case it does not need to have a side effect to be useful. 
// For example, there is a function Math.max, which takes any number of numeric arguments and gives back the greatest:

alert(Math.max(2, 4));

// When a function produces a value, it is said to return it. Because things that produce values are always 
// expressions in JavaScript, function calls can be used as a part of bigger expressions:

alert(Math.min(2, 4) + 100);

// print is not a standard JavaScript function, browsers do not provide it for you, 
// but it is made available by this book, so you can use it on these pages.

print("N");

// A similar function, also provided on these pages, is show. While print will display 
// its argument as flat text, show tries to display it the way it would look in a program, 
// which can give more information about the type of the value. For example, string values 
// keep their quotes when given to show:

show("N");

// The standard environment provided by browsers contains a few more functions for popping up windows. 
// You can ask the user an OK/Cancel question using confirm. This returns a boolean, true if the user presses 
// 'OK', and false if he presses 'Cancel'.

show(confirm("Shall we, then?"));

// prompt can be used to ask an 'open' question. The first argument is the question, the second one is 
// the text that the user starts with. A line of text can be typed into the window, and the function will return this as a string.

show(prompt("Tell us everything you know.", "..."));

// It is possible to give almost every variable in the environment a new value. 
// This can be useful, but also dangerous. If you give print the value 8, you won't be able to print things anymore. 
// Fortunately, there is a big 'Reset' button on the console, which will reset the environment to its original state.

// One-line programs are not very interesting. When you put more than one statement into a program, the statements are, 
// predictably, executed one at a time, from top to bottom.

var theNumber = Number(prompt("Pick a number", ""));
print("Your number is the square root of " +
      (theNumber * theNumber));

// The function Number converts a value to a number, which is needed in this case because the result of prompt is a string value. 
// There are similar functions called String and Boolean which convert values to those types.

// Consider a program that prints out all even numbers from 0 to 12. One way to write this is:

print(0);
print(2);
print(4);
print(6);
print(8);
print(10);
print(12);

// That works, but the idea of writing a program is to make something less work, not more. 
// If we needed all even numbers below 1000, the above would be unworkable. 
// What we need is a way to automatically repeat some code.

var currentNumber = 0;
while (currentNumber <= 12) {
  print(currentNumber);
  currentNumber = currentNumber + 2;
}

// The third part of a while statement is another statement. This is the body of the loop, 
// the action or actions that must take place multiple times. If we did not have to print 
// the numbers, the program could have been:

var currentNumber = 0;
while (currentNumber <= 12)
  currentNumber = currentNumber + 2;

// Use the techniques shown so far to write a program that calculates and shows the value of 210 (2 to the 10th power). 
// You are, obviously, not allowed to use a cheap trick like just writing 2 * 2 * ....
// If you are having trouble with this, try to see it in terms of the even-numbers example. 
// The program must perform an action a certain amount of times. A counter variable with a while 
// loop can be used for that. Instead of printing the counter, the program must multiply something by 2. 
// This something should be another variable, in which the result value is built up.

// Don't worry if you don't quite see how this would work yet. Even if you perfectly understand all the 
// techniques this chapter covers, it can be hard to apply them to a specific problem. Reading and writing 
// code will help develop a feeling for this, so study the solution, and try the next exercise.
//
// Ex. 2.2

function power(number, exponent) {
  if (exponent == 1)
    return number;
  else
    return number * power(number, exponent - 1);
}

print(power(2, 10));

// With some slight modifications, the solution to the previous exercise can be made to draw a triangle. 
// And when I say 'draw a triangle' I mean 'print out some text that almost looks like a triangle when you squint'.
// Print out ten lines. On the first line there is one '#' character. On the second there are two. And so on.
// How does one get a string with X '#' characters in it? One way is to build it every time it is needed 
// with an 'inner loop' ― a loop inside a loop. A simpler way is to reuse the string that the previous iteration 
// of the loop used, and add one character to it.
//
// Ex. 2.3

function print_triangle(size) {
  var s = '#'
  for (var i = 1; i <= size; i++) {
    print(s);
    s += '#';
  }
}

print_triangle(3);
print_triangle(10);

// The uses of while we have seen so far all show the same pattern. First, a 'counter' variable is created. 
// This variable tracks the progress of the loop. The while itself contains a check, usually to see whether the 
// counter has reached some boundary yet. Then, at the end of the loop body, the counter is updated.

// A lot of loops fall into this pattern. For this reason, JavaScript, and similar languages, also provide 
// a slightly shorter and more comprehensive form:

for (var number = 0; number <= 12; number = number + 2)
  show(number)

// Note that names that have a special meaning, such as var, while, and for may not be used as variable names. 
// These are called keywords. There are also a number of words which are 'reserved for use' in future versions 
// of JavaScript. These are also officially not allowed to be used as variable names, though some browsers do 
// allow them. The full list is rather long:

// abstract boolean break byte case catch char class const continue
// debugger default delete do double else enum export extends false
// final finally float for function goto if implements import in
// instanceof int interface long native new null package private
// protected public return short static super switch synchronized
// this throw throws transient true try typeof var void volatile
// while with

// Rewrite the solutions of the previous two exercises to use for instead of while.
// Ex. 2.4

// Oops! I didn't use for while for either... I guess I will use while now...

function power(number, exponent) {
  var result = 1;
  var counter = 0;
  while (counter < 10) {
    result = result * number;
    counter = counter + 1;
  }
  return result;
}

print(power(2, 10));

function print_triangle(size) {
  var s = '#';
  var i = 1;
  while (i <= size) {
    print(s);
    s += '#';
    i++;
  }
}

print_triangle(3);
print_triangle(10);

// Loops are said to affect the control flow of a program. They change the order in which statements are executed. 
// In many cases, another kind of flow is useful: skipping statements.

// We want to show all numbers below 20 which are divisible both by 3 and by 4.

for (var counter = 0; counter < 20; counter++) {
  if (counter % 3 == 0 && counter % 4 == 0)
    show(counter);
}

// If we wanted to print all numbers below 20, but put parentheses around the ones that are not divisible 
// by 4, we can do it like this:

for (var counter = 0; counter < 20; counter++) {
  if (counter % 4 == 0)
    print(counter);
  if (counter % 4 != 0)
    print("(" + counter + ")");
}  

// But now the program has to determine whether counter is divisible by 4 two times. The same effect can be obtained 
// by appending an else part after an if statement. The else statement is executed only when the if's condition is false.

for (var counter = 0; counter < 20; counter++) {
  if (counter % 4 == 0)
    print(counter);
  else
    print("(" + counter + ")");
}

// To stretch this trivial example a bit further, we now want to print these same numbers, but add two stars 
// after them when they are greater than 15, one star when they are greater than 10 (but not greater than 15), 
// and no stars otherwise.

for (var counter = 0; counter < 20; counter++) {
  if (counter > 15)
    print(counter + "**");
  else if (counter > 10)
    print(counter + "*");
  else
    print(counter);
}

// This demonstrates that you can chain if statements together. In this case, the program first looks if 
// counter is greater than 15. If it is, the two stars are printed and the other tests are skipped. 
// If it is not, we continue to check if counter is greater than 10. Only if counter is also not greater 
// than 10 does it arrive at the last print statement.

// Write a program to ask yourself, using prompt, what the value of 2 + 2 is. If the answer is "4", use alert 
// to say something praising. If it is "3" or "5", say "Almost!". In other cases, say something mean.
//
// Ex. 2.5

var ans = prompt("What is 2 + 2?");
if (ans == 4)
  alert("Damn smart!");
else if (ans == 3 || ans == 5)
  alert("Damn close!");
else
  alert("Damn stupid!");

// Add a while and optionally a break to your solution for the previous exercise, 
// so that it keeps repeating the question until a correct answer is given.

// Note that while (true) ... can be used to create a loop that does not end on its own account. 
// This is a bit silly, you ask the program to loop as long as true is true, but it is a useful trick.
//
// Ex. 2.6

var ans = prompt("What is 2 + 2?");
while (ans != 4) {
  if (ans == 4) {
    alert("Damn smart!");
  } else if (ans == 3 || ans == 5) {
    alert("Damn close!");
    ans = prompt("What is 2 + 2?");
  } else {
    alert("Damn stupid!");   
    ans = prompt("What is 2 + 2?");
  }
}

// Consider this example:

var input = prompt("What is your name?", "Kilgore Trout");
print("Well hello " + (input || "dear"));

// In the case of true || X, no matter what X is, the result will be true, so X is never evaluated, 
// and if it has side effects they never happen. The same goes for false && X.

false || alert("I'm happening!");
true || alert("Not me.");