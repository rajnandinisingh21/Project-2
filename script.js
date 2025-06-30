const display = document.getElementById("display");

function appendNumber(num) {
  if (display.textContent === "0") {
    display.textContent = num;
  } else {
    display.textContent += num;
  }
}

function appendOperator(op) {
  const lastChar = display.textContent.slice(-1);
  if ("+-*/".includes(lastChar)) {
    display.textContent = display.textContent.slice(0, -1) + op;
  } else {
    display.textContent += op;
  }
}

function clearDisplay() {
  display.textContent = "0";
}

function deleteChar() {
  if (display.textContent.length > 1) {
    display.textContent = display.textContent.slice(0, -1);
  } else {
    display.textContent = "0";
  }
}

function calculateResult() {
  try {
    const result = eval(display.textContent);
    display.textContent = Number(result.toFixed(2)); // Limit to 2 decimals
  } catch {
    display.textContent = "Error";
  }
}
