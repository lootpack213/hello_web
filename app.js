const statusEl = document.getElementById('status');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

startBtn.addEventListener('click', () => {
  statusEl.textContent = 'Status: Started';
});

resetBtn.addEventListener('click', () => {
  statusEl.textContent = 'Status: Ready';
});
