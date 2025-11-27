

function add(a, b) {
  console.log("Sum:", a + b);
}
add(5, 3);


function counter() {
  let count = 0;
  return function() {
    count++;
    console.log("Counter:", count);
  };
}
let c = counter();
c();
c();

(function() {
  console.log("IIFE executed automatically!");
})();

