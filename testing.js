const x = undefined;
const y = null;

if (x) {
  console.log("undefined is truthy");
} else {
  console.log("undefined is falsy");
}

if (y) {
  console.log("null is truthy");
} else {
  console.log("null is falsy");
}
