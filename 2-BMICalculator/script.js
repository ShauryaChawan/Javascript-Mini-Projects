// formula
// bmi = weight / (height)*(height)
// weight in kg, height in meters

// const summitBtn = document.getElementsByTagName("button");
const summitBtn = document.querySelector("button");

// console.log(summitBtn);

summitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const result = document.getElementById("result");

  // console.log(height);
  // console.log(weight);
  // console.log(result);

  if (height == "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }

});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const height = parseInt(document.querySelector("#height").value);
//   const weight = parseInt(document.querySelector("#weight").value);
//   const results = document.querySelector("#results");

//   if (height === "" || height < 0 || isNaN(height)) {
//     results.innerHTML = `Please give a valid height ${height}`;
//   } else if (weight === "" || weight < 0 || isNaN(weight)) {
//     results.innerHTML = `Please give a valid weight ${weight}`;
//   } else {
//     const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//     //show the result
//     results.innerHTML = `<span>${bmi}</span>`;
//   }
// });
