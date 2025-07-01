// Botões de Acessibilidade
const increaseFont = document.getElementById('increase-font');
const decreaseFont = document.getElementById('decrease-font');
const resetFont = document.getElementById('reset-font');
const toggleDyslexia = document.getElementById('toggle-dyslexia');
const themeToggle = document.getElementById('theme-toggle');

// Controle de fonte
let fontSize = 100;

increaseFont.addEventListener('click', () => {
  fontSize += 10;
  document.body.style.fontSize = fontSize + '%';
});

decreaseFont.addEventListener('click', () => {
  fontSize = Math.max(50, fontSize - 10);
  document.body.style.fontSize = fontSize + '%';
});

resetFont.addEventListener('click', () => {
  fontSize = 100;
  document.body.style.fontSize = '100%';
});

// Fonte para dislexia
toggleDyslexia.addEventListener('click', () => {
  document.body.classList.toggle('dyslexia-font');
});

// Tema claro/escuro via botão do sol/lua
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  themeToggle.querySelector('i').classList.toggle('fa-sun');
  themeToggle.querySelector('i').classList.toggle('fa-moon');
});
