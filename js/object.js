// let human = {
//   name: "",
//   height: 5,
//   weight: 60,
//   walk: function () {
//     console.log("I am walking");
//   },
//   eat: function () {
//     console.log("I am eating");
//   },
//   sleep: function () {
//     console.log("I am sleeping");
//   },
// };

// let chair = {
//   color: "",
//   price: "",
//   material: "",
//   holdWeight: function () {
//     console.log("Sitting");
//   },
// };

// // console.log(human.height);
// // console.log(human.weight);

// console.log(human["height"]);
// human.sleep();

// const student = {
//   name: "Ali Chauhan",
//   fathersName: "md rafique",
//   course: "MCA",
//   attendance: function () {
//     //
//   },
// };

// student.college = "SS Jain Subodh";

// student.attendance();

// student.fathersName = "Manish Sharma";
// student

// console.log(student);

// let name = "Shanu Malik";

// console.log(name["length"]);

// const newObj = {
//   say: function (text) {
//     console.log(text);
//   },
//   say(text) {
//     console.log(text);
//   },
// };

// newObj.say("Hello world");

const print = {
  text: "Some text",
  setText: function (input) {
    this.text = input;
  },
  exec: function () {
    console.log(this.text);
  },
};

print.setText("override");

print.exec();
