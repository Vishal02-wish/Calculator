const calculator = document.querySelector("#calculator");
const display = calculator.querySelector(".display");
const buttons = calculator.querySelectorAll("button");
const maxDisplayLength = 15;  // Maximum characters the display can hold

buttons.forEach(button => {
  button.addEventListener("click", function() {
    let value = this.value;
    let text = display.textContent.trim();
    
    if (value === "clear") {
      display.textContent = "0";
    } else if (value === "backspace") {
      display.textContent = text.substring(0, text.length - 1);
    } else if (value === "=") {
      try {
        display.textContent = eval(text);
      } catch (e) {
        display.textContent = "Error"; // Handle errors from eval
      }
    } else if (value === "+/-") {
      display.textContent = text.startsWith("-") ? text.substring(1) : `-${text}`;
    } else {
      if (text === "0") {
        display.textContent = value;
      } else if (text.length < maxDisplayLength) {
        display.textContent = text + value;
      } // No else part, ignore inputs if max length reached
    }
  });
});
