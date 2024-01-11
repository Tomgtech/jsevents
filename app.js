console.log("hello");
const button = document.querySelector("button");
console.log(button.textContent);
button.addEventListener("click", function (event) {
  console.log(event);
});

function changeColour() {
  if (document.body.style.background == "red") {
    document.body.style.background = "steelblue";
  } else {
    document.body.style.background = "red";
  }
}

colorbtn.addEventListener("click", changeColour);
