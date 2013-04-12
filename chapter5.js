// Chapter 5
// Error Handling

// Writing programs that work when everything goes as expected is a good start.
// Making your programs behave properly when encountering unexpected conditions is where it really gets challenging.

// Users won't always use your program as intended.
// It's important to try to catch user errors and handle them accordingly.

// Some useful JavaScript constructs for dealing with errors are:
// try catch throw

throw new Error("Fire!");

// When an exception goes all the way to the bottom of the stack without
// being caught, it gets handled by the environment. What this means differs between
// the different browsers, sometimes a description of the error is written to some
// kind of log, sometimes a window pops up describing the error.

// The errors produced by entering code in the console on this page are always caught
// by the console, and displayed among the other output.

// Error handlers are really just another form of flow control. But it's best to use them as intended.