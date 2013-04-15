// Chapter 6
// Functional Programming

// Functional programming is one of many abstraction paradigms.

// Write a function countZeroes, which takes an array of numbers as its argument
// and returns the amount of zeroes that occur in it. Use reduce.

function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}

function reduce(combine, base, array) {
  forEach(array, function (element) {
    base = combine(base, element);
  });
  return base;
}

// Then, write the higher-order function count, which takes an array and a test
// function as arguments, and returns the amount of elements in the array for
// which the test function returned true. Re-implement countZeroes using this function.
//
// Ex. 6.1

function countZeroes(array) {
  function counter(total, element) {
    return total + (element === 0 ? 1 : 0);
  }
  return reduce(counter, 0, array);
}

var a = [0,0,1,2];
print(countZeroes(a));