console.log("Hello");
WishMe();
sayHi();

setTimeout(function () {
  console.log("5 secs left");
}, 0);

// new Promise(function (resolve, reject) {

// })

// Callback

// function callme(func) {
//   func();
// }

// function demo() {
//   console.log("this is demo");
// }

// callme(demo);

// const obj = {
//   name: "ali",
//   question: "diffrent type of loops",
//   father: ["manish", "malik"],
// };

// for (let a in arr) {
//   console.log(a);
// }

// for (const values of arr) {
//   console.log(values);
// }
const arr = [1, 3, 5, 6];

// arr.forEach(function (value) {
//   console.log(value);
// });

// function customForEach(givenArray, callbackFun) {
//   for (const element of givenArray) {
//     callbackFun(element);
//   }
// }

// customForEach(arr, function (value) {
//   console.log("this is ", value);
// });

function Hello() {
  return function () {
    console.log("Hello Ji");
    return "Namaste";
  };
}

const output = Hello();

console.log(output());

// console.log(Hello());

// arrow

// const a = function (num) {
//   console.log("HI i am a regular func", num);
//   return true;
// };

// const b = (num) => {
//   console.log("Hi I am an arrow function", num);
//   return true;
// };

// const c = (a, b) => a + b;
// const e = (arg) => arg + 4;

// a(4);
// b(7);
// console.log(c(2, 5));

// console.log(e(8));

function WishMe() {
  console.log("F U");
}

const sayHi = () => console.log("HIii");
