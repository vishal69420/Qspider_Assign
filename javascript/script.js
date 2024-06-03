// console.log("start");
// var b = 20;
// const c = 30;
// {
//   let a = 100;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log("end");
// ======================================================================================
// output ------------------------->
// start
// 100
// 20
// 30
// C:\Users\stark\Desktop\Qspider\WEB TECHNOLOGY\javascript\script.js:10
// console.log(a);

// ReferenceError: a is not defined

// question 5
console.log("start");
let a = 10;
var b = 20;
const c = 30;
{
  let a = 10;
  console.log(a);
  const c = 300;
  console.log(b);
  b = 200;
  c = 30;
  console.log(b);
}
console.log(a);
console.log(b);
console.log("end");


// output 
// 10
// 20
// C:\Users\stark\Desktop\Qspider\WEB TECHNOLOGY\javascript\script.js:35
//   c = 30;
//     ^

// TypeError: Assignment to constant variable.
