const input = document.querySelector("input");
const form = document.querySelector("form");
const output = document.getElementById("output");
const lastThala = document.getElementById("last-thala");

let thalaInStorage = localStorage.getItem("thala") || "";
// let thalaInStorage = sessionStorage.getItem("thala") || "";

if (thalaInStorage) {
  lastThala.innerHTML = `<h3>Last Thala was ${thalaInStorage}</h3>`;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkThala(input.value);
});

function checkThala(text) {
  const number = parseInt(text);

  if (isNaN(number)) {
    thalaString(text);
    return;
  } else {
    thalaNumber(text);
  }
}

function thalaString(text) {
  if (text.length === 7) {
    output.innerHTML = `<h3>${text} is thala for a reason</h3>`;
    localStorage.setItem("thala", text);
    lastThala.innerHTML = `<h3>Last Thala was ${text}</h3>`;
  } else {
    output.innerHTML = `<h3>${text} isn't thala for a reason</h3>`;
  }
}

function thalaNumber(text) {
  const numbers = text.split("");
  let sum = 0;

  for (number of numbers) {
    sum += parseInt(number);
  }

  if (sum % 7 === 0) {
    output.innerHTML = `<h3>${text} is thala for a reason</h3>`;
    localStorage.setItem("thala", text);
    lastThala.innerHTML = `<h3>Last Thala was ${text}</h3>`;
  } else {
    output.innerHTML = `<h3>${text} isn't thala for a reason</h3>`;
  }
}
