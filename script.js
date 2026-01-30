// display

const display = document.getElementById('display')

// basic function

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

// advanced function

function square() {
  const numSq = parseFloat(display.value);
  if (!isNaN(num)) {
    const resultSq = numSq * numSq;
    display.value = resultSq.toString();
  }
}

function inverse() {
  const numIv = parseFloat(display.value);
  if (!isNaN(numIv) && numIv !== 0) {
    const resultIv = 1 / numIv;
    display.value = resultIv.toString();
  } else {
    display.value = "Error";
  }
}

function squareRoot() {
  const numSr = parseFloat(display.value);
  if (!isNaN(numSr)) {
    const resultSr = Math.sqrt(numSr);
    display.value = resultSr.toString();
  } else {
    display.value = "Error";
  }
}