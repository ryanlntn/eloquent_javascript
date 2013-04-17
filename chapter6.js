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

function count(test, array) {
  return reduce(function(total, element) {
    return total + (test(element) ? 1 : 0);
  }, 0, array);
}

function equals(x) {
  return function(element) {return x === element;};
}

function countZeroes(array) {
  return count(equals(0), array);
}

var a = [0,0,1,2];
print(countZeroes(a));
print(count(equals(1, a)));

// Write a function processParagraph that, when given a paragraph string as its argument, checks whether
// this paragraph is a header. If it is, it strips off the '%' characters and counts their number.
// Then, it returns an object with two properties, content, which contains the text inside the paragraph, and
// type, which contains the tag that this paragraph must be wrapped in, "p" for regular paragraphs, "h1" for
// headers with one '%', and "hX" for headers with X '%' characters.
//
// Remember that strings have a charAt method that can be used to look at a specific character inside them.
//
// Ex. 6.2

function processParagraph(paragraph) {
  var header = 0;
  while (paragraph.charAt(0) == "%") {
    paragraph = paragraph.slice(1);
    header++;
  }

  return {type: (header == 0 ? "p" : "h" + header),
          content: paragraph};
}

show(processParagraph(paragraphs[0]));