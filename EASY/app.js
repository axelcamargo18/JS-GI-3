// Write a function that would allow you to do this:

// var run = exercise('running');

// console.log(run());     // prints "Today's exercise: running"

// var swim = exercise('swimming');
// console.log(swim()); // prints "Today's exercise: swimming"

// function exercise("running") {

function exercise(x) {
  return `Today's exercise is: ${x}`;
}

let run = exercise("running");
let swim = exercise("swimming");

console.log(exercise("running"));
console.log(exercise("swimming"));
