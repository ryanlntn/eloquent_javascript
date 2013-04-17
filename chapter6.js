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

// Build a function splitParagraph which, given a paragraph string, returns an array of paragraph
// fragments. Think of a good way to represent the fragments.

// The method indexOf, which searches for a character or sub-string in a string and returns its
// position, or -1 if not found, will probably be useful in some way here.

// This is a tricky algorithm, and there are many not-quite-correct or way-too-long ways to
// describe it. If you run into problems, just think about it for a minute. Try to write inner
// functions that perform the smaller actions that make up the algorithm.
//
// Ex. 6.3

function splitParagraph(text) {
  function indexOrEnd(character) {
    var index = text.indexOf(character);
    return index == -1 ? text.length : index;
  }

  function takeNormal() {
    var end = reduce(Math.min, text.length,
                     map(indexOrEnd, ["*", "{"]));
    var part = text.slice(0, end);
    text = text.slice(end);
    return part;
  }

  function takeUpTo(character) {
    var end = text.indexOf(character, 1);
    if (end == -1)
      throw new Error("Missing closing '" + character + "'");
    var part = text.slice(1, end);
    text = text.slice(end + 1);
    return part;
  }

  var fragments = [];

  while (text != "") {
    if (text.charAt(0) == "*")
      fragments.push({type: "emphasised",
                      content: takeUpTo("*")});
    else if (text.charAt(0) == "{")
      fragments.push({type: "footnote",
                      content: takeUpTo("}")});
    else
      fragments.push({type: "normal",
                      content: takeNormal()});
  }
  return fragments;
}

// Looking back at the example HTML document if necessary, write an image function which, when
// given the location of an image file, will create an img HTML element.
//
// Ex. 6.4

function image(src) {
  return tag("img", [], {src: src});
}


// Write a function renderFragment, and use that to implement another function
// renderParagraph, which takes a paragraph object (with the footnotes already filtered out), and produces
// the correct HTML element (which might be a paragraph or a header, depending
// on the type property of the paragraph object).

// This function might come in useful for rendering the footnote references:

function footnote(number) {
  return tag("sup", [link("#footnote" + number,
                          String(number))]);
}
// A sup tag will show its content as 'superscript', which
// means it will be smaller and a little higher than other text. The target of the link
// will be something like "#footnote1". Links that contain a '#' character refer
// to 'anchors' within a page, and in this case we will use them to make it so that
// clicking on the footnote link will take the reader to the bottom of the page, where the footnotes live.

// The tag to render emphasised fragments with is em, and normal text can be rendered without any extra tags.
//
// Ex. 6.5

function renderParagraph(paragraph) {
  return tag(paragraph.type, map(renderFragment,
                                 paragraph.content));
}

function renderFragment(fragment) {
  if (fragment.type == "reference")
    return footnote(fragment.number);
  else if (fragment.type == "emphasised")
    return tag("em", [fragment.content]);
  else if (fragment.type == "normal")
    return fragment.content;
}