const clock = document.getElementById("clock");
// const clock = document.querySelector('#clock')

let date = new Date();
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toJSON());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());
console.log(date.toLocaleTimeString());
console.log(date.toString());
console.log(date.toTimeString());
console.log(date.toUTCString());

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
