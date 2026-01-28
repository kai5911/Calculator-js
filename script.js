// test
console.log("Hello")

const display = document.getElementById('display')

function appendToDisplay(value) {
  if (display.value === '0' && value !== '.') {
    display.value = value;
  } else {
    display.value += value;
  }
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = '0';
} 

function deleteLast() {
  if (display.value.length > 1) {
    display.value = display.value.slice(0, -1);
  } else {
    display.value = '0';
  }
}