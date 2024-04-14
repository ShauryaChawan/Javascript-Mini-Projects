const buttons = Array.from(document.querySelectorAll(".button"));
const parent = document.querySelector(".parent");
// const canvas = document.getElementsByClassName("canvas");

// console.log(buttons);

// create a new text 'p' element
const p = document.createElement("p");
console.log(p);
// p.style.display = "inline";
// p.style.margin = 0;
// p.style.fontWeight = "bold";
p.style.cssText = "display:inline; margin:0; font-weight:bold;";


buttons.map((btn) => {
  console.log(btn);

  btn.addEventListener("click", (e) => {
    p.innerHTML = `#${e.target.id}`;
    parent.style.backgroundColor = e.target.id;
    btn.appendChild(p);
  });
});
