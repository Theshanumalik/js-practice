// storage

// local storage
// localStorage.setItem("name", "John");
let count = localStorage.getItem("count") || 0;
const counter = document.getElementById("counter");
const stop = document.getElementById("stop");
const start = document.getElementById("start");
const reset = document.getElementById("reset");
let interval;

stop.addEventListener("click", () => {
  clearInterval(interval);
});

start.addEventListener("click", () => {
  interval = setInterval(() => {
    counter.innerText = count;
    count++;
    localStorage.setItem("count", count);
  }, 1000);
});

reset.addEventListener("click", () => {
  localStorage.removeItem("count");
  count = 0;
  clearInterval(interval);
  counter.innerText = count;
});

// session storage
