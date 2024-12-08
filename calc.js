let currentInput = "";

function appendValue(value) {
  currentInput += value;
  document.getElementById('display').textContent = currentInput;
}

function clearDisplay() {
  currentInput = "";
  document.getElementById('display').textContent = "";
}

function calculateResult() {
  try {
    currentInput = eval(currentInput).toString();
    document.getElementById('display').textContent = currentInput;
  } catch (e) {
    currentInput = "Error";
    document.getElementById('display').textContent = currentInput;
  }
}
