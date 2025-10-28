/*const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

//Define function to calculate based on button clicked.
const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    //If output has '%', replace with '/100' before evaluating.
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    //If DEL button is clicked, remove the last character from the output.
    output = output.toString().slice(0, -1);
  } else {
    //If output is empty and button is specialChars then return
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

//Add event listener to buttons, call calculate() on click.
buttons.forEach((button) => {
  //Button click listener calls calculate() with dataset value as argument.
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});*/





// Select elements
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const body = document.querySelector("body");

// Background images to rotate after every result
const bgImages = [
  "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80')",
  "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80')",
  "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=80')",
  "url('https://images.unsplash.com/photo-1526401281623-2b6d74eb6f60?auto=format&fit=crop&w=1920&q=80')"
];
let currentBg = 0;

let input = "";

// Button click logic
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.dataset.value;

    // Add pressed effect
    btn.classList.add("active-press");
    setTimeout(() => btn.classList.remove("active-press"), 150);

    if (value === "AC") {
      input = "";
      display.value = "";
    } else if (value === "DEL") {
      input = input.slice(0, -1);
      display.value = input;
    } else if (value === "=") {
      try {
        let result = eval(input);
        display.value = result;
        input = result.toString();

        // Change background after showing result
        currentBg = (currentBg + 1) % bgImages.length;
        body.style.background = `
          linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.65)),
          ${bgImages[currentBg]} center center/cover no-repeat
        `;
        body.style.transition = "background 1s ease-in-out";

      } catch {
        display.value = "Error";
        input = "";
      }
    } else {
      input += value;
      display.value = input;
    }
  });
});

const screen = document.querySelector(".display");
const keys = document.querySelectorAll("button");

let expression = "";

keys.forEach((key) => {
  key.addEventListener("click", () => {
    const keyValue = key.dataset.value;

    // --- Button color change animation ---
    key.classList.add("active");
    setTimeout(() => key.classList.remove("active"), 150);
    // -------------------------------------

    if (keyValue === "AC") {
      expression = "";
      screen.value = "";
    } else if (keyValue === "DEL") {
      expression = expression.slice(0, -1);
      screen.value = expression;
    } else if (keyValue === "=") {
      try {
        expression = eval(expression).toString();
        screen.value = expression;
      } catch {
        screen.value = "Error";
        expression = "";
      }
    } else {
      expression += keyValue;
      screen.value = expression;
    }
  });
});
