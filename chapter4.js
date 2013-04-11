// Chapter 4
// Data structures: Objects and Arrays

// First, let me tell you about properties. A lot of JavaScript values have other values associated with them. 
// These associations are called properties. Every string has a property called length, which refers to a 
// number, the amount of characters in that string.

// Properties can be accessed in two ways:

var text = "purple haze";
show(text["length"]);
show(text.length);

// The values null and undefined do not have any properties. Trying to read properties from such a value 
// produces an error. Try the following code, if only to get an idea about the kind of error-message your 
// browser produces in such a case (which, for some browsers, can be rather cryptic).

var nothing = null;
// show(nothing.length);

// An object can be written like this:

var cat = {colour: "grey", name: "Spot", size: 46};
cat.size = 47;
show(cat.size);
delete cat.size;
show(cat.size);
show(cat);

// The keyword delete cuts off properties. Trying to read a non-existent property gives the value undefined.

// If a property that does not yet exist is set with the = operator, it is added to the object.

var empty = {};
empty.notReally = 1000;
show(empty.notReally);

// Properties whose names are not valid variable names have to be quoted when creating the object, and approached using brackets:

var thing = {"gabba gabba": "hey", "5": 10};
show(thing["5"]);
thing["5"] = 20;
show(thing[2 + 3]);
delete thing["gabba gabba"];

// As you can see, the part between the brackets can be any expression. It is converted to a string to 
// determine the property name it refers to. One can even use variables to name properties:

var propertyName = "length";
var text = "mainline";
show(text[propertyName]);

// The operator in can be used to test whether an object has a certain property. It produces a boolean.

var chineseBox = {};
chineseBox.content = chineseBox;
show("content" in chineseBox);
show("content" in chineseBox.content);

// The solution for the cat problem talks about a 'set' of names. A set is a collection of values in which no 
// value may occur more than once. If names are strings, can you think of a way to use an object to represent a set of names?

// Show how a name can be added to this set, how one can be removed, and how you can check whether a name occurs in it.
//
// Ex. 4.1

var names = {};
names["Spot"] = "2";
delete names["Spot"];
show("Spot" in names);

// When we have two numbers, 120 and 120, they can for all practical purposes be considered the precise same number. 
// With objects, there is a difference between having two references to the same object and having two different objects 
// that contain the same properties. Consider the following code:

var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

show(object1 == object2);
show(object1 == object3);

object1.value = 15;
show(object2.value);
show(object3.value);

// object1 and object2 are two variables grasping the same value. There is only one actual object, which is why 
// changing object1 also changes the value of object2. The variable object3 points to another object, which initially 
// contains the same properties as object1, but lives a separate life.

// Collections of things are what objects are used for. One could make an object like this:

var mailArchive = {"the first e-mail": "Dear nephew, ...",
                   "the second e-mail": "..."
                   /* and so on ... */};

// But that makes it hard to go over the e-mails from start to end ― how does the program guess the name of these 
// properties? This can be solved by more predictable property names:

var mailArchive = {0: "Dear nephew, ... (mail number 1)",
                   1: "(mail number 2)",
                   2: "(mail number 3)"};

for (var current = 0; current in mailArchive; current++)
  print("Processing e-mail #", current, ": ", mailArchive[current]);

// New arrays can be created using brackets ([ and ]):

var mailArchive = ["mail one", "mail two", "mail three"];

for (var current = 0; current < mailArchive.length; current++)
  print("Processing e-mail #", current, ": ", mailArchive[current]);

// Write a function range that takes one argument, a positive number, and returns an array containing all numbers 
// from 0 up to and including the given number.

// An empty array can be created by simply typing []. Also remember that adding properties to an object, and thus 
// also to an array, can be done by assigning them a value with the = operator. The length property is automatically 
// updated when elements are added.
//
// Ex. 4.2

function range(number) {
  var a = [];
  for (var i = 0; i <= number; i++) {
    a.push(i);
  }
  return a;
}

print(range(10));

// Both string and array objects contain, in addition to the length property, a number of properties that refer to function values.

var doh = "Doh";
print(typeof doh.toUpperCase);
print(doh.toUpperCase());

// Properties that contain functions are generally called methods, as in 'toUpperCase is a method of a string object'.

var mack = [];
mack.push("Mack");
mack.push("the");
mack.push("Knife");
show(mack.join(" "));
show(mack.pop());
show(mack);

// split and join are not precisely each other's inverse. string.split(x).join(x) always produces the original 
// value, but array.join(x).split(x) does not. Can you give an example of an array where .join(" ").split(" ") 
// produces a different value?
//
// Ex. 4.3

var a = ['happy', 3, { "mexico": 1 }];
print(a);
print(a.join(" ").split(" "));

// Write a function called startsWith that takes two arguments, both strings. It returns true when the first 
// argument starts with the characters in the second argument, and false otherwise.
//
// Ex. 4.4

function startsWith(string, pattern) {
  return string.slice(0, pattern.length) === pattern;
}

print(startsWith("Hello", "Hell"));
print(startsWith("Heaven", "You"));

// Can you write a function catNames that takes a paragraph as an argument and returns an array of names?
// Strings have an indexOf method that can be used to find the (first) position of a character or sub-string 
// within that string. Also, when slice is given only one argument, it will return the part of the string from
// the given position all the way to the end.
// It can be helpful to use the console to 'explore' functions. For example, type "foo: bar".indexOf(":") and see what you get.
//
// Ex. 4.5

function catNames(paragraph) {
  return paragraph.slice(paragraph.indexOf(":") + 2).split(", ");
}

// To start with the dates: What would be a good way to store a date? We could make an object with 
// three properties, year, month, and day, and store numbers in them.

var when = {year: 1980, month: 2, day: 1};

// But JavaScript already provides a kind of object for this purpose. Such an object can be created by using the keyword new:

var when = new Date(1980, 1, 1);
show(when);

// The month numbers these objects use go from 0 to 11, which can be confusing. Especially since day numbers do start from 1.

// The content of a Date object can be inspected with a number of get... methods.

var today = new Date();
print("Year: ", today.getFullYear(), ", month: ",
      today.getMonth(), ", day: ", today.getDate());
print("Hour: ", today.getHours(), ", minutes: ",
      today.getMinutes(), ", seconds: ", today.getSeconds());
print("Day of week: ", today.getDay());

// All of these, except for getDay, also have a set... variant that can be used to change the value of the date object.

// The getTimezoneOffset function of a Date can be used to find out how many minutes it differs from GMT (Greenwich Mean Time).

var now = new Date();
print(now.getTimezoneOffset());

// The date part is always in the exact same place of a paragraph. How convenient. Write a function extractDate 
// that takes such a paragraph as its argument, extracts the date, and returns it as a date object.
//
// Ex. 4.6

function extractDate(paragraph) {
  var start = paragraph.indexOf("died ") + 5;
  var d = paragraph.slice(start, start + 10).split("/");
  return new Date(d[2], d[1] - 1, d[0]);
}

print(extractDate("died 27/04/2006: Black Leclère"));

// The thing that extractMother does can be expressed in a more general way. Write a function between that takes three 
// arguments, all of which are strings. It will return the part of the first argument that occurs between the patterns
// given by the second and the third arguments.
// So between("born 15/11/2003 (mother Spot): White Fang", "(mother ", ")") gives "Spot".
// between("bu ] boo [ bah ] gzz", "[ ", " ]") returns "bah".
// To make that second test work, it can be useful to know that indexOf can be given a second, optional parameter that 
// specifies at which point it should start searching.
//
// Ex. 4.7

function between(s1, s2, s3) {
  var start = s1.indexOf(s2) + s2.length;
  var end = s1.indexOf(s3);
  return s1.slice(start, end);
}

print(between("born 15/11/2003 (mother Spot): White Fang", "(mother ", ")"));

// The formatDate function used by catInfo does not add a zero before the month and the day part when 
// these are only one digit long. Write a new version that does this.
//
// Ex. 4.8

function formatDate(date) {
  var month = date.getMonth() + 1;
  var day = date.getDate();
  if (month < 10)
    month = "0" + month;
  if (day < 10)
    day = "0" + day;
  return day + "/" + month + "/" + date.getFullYear();
}

var dday = new Date(1944, 5, 6);
print(formatDate(dday));

// Write a function oldestCat which, given an object containing cats as its argument, returns the name of the oldest living cat.

function oldestCat(data) {
  var oldest = null;

  for (var name in data) {
    var cat = data[name];
    if (!("death" in cat) &&
        (oldest == null || oldest.birth > cat.birth))
      oldest = cat;
  }

  if (oldest == null)
    return null;
  else
    return oldest.name;
}

// print(oldestCat(catData));

// Extend the range function from exercise 4.2 to take a second, optional argument. If only one argument is given, it behaves 
// as earlier and produces a range from 0 to the given number. If two arguments are given, the first indicates the start of the 
// range, the second the end.
//
// Ex. 4.9

function range(n1, n2) {
  var a = [];
  if (arguments.length > 1) {
    var start = n1;
    var end = n2;
  } else {
    var start = 0;
    var end = n1;
  }
  for (var i = start; i <= end; i++) {
      a.push(i);
  }
  return a;
}

print(range(5, 10));

// You may remember this line of code from the introduction:

//print(sum(range(1, 10)));

// We have range now. All we need to make this line work is a sum function. This function takes an array of numbers, and 
// returns their sum. Write it, it should be easy.
//
// Ex. 4.10

function sum(nums) {
  return nums.reduce(function(a, b) { return a + b; });
}

print(sum(range(1,10)));
