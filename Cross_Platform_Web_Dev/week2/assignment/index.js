const hidded_div = document.getElementById('hidden_default');

const btn = document.getElementById('main_app');

btn.addEventListener('click', () => {
  const boxes = document.getElementsByClassName('box');

  for (const box of boxes) {
    box.style.display = 'none';
  }
});