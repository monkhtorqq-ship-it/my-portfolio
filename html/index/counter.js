let count = 0;

function updateCounter() {
  document.getElementById('counter-value').textContent = count;
}

function increment() {
  count++;
  updateCounter();
}

function decrement() {
  count--;
  updateCounter();
}

function resetCounter() {
  count = 0;
  updateCounter();
}