const button = document.querySelector('#welcomeButton');
const message = document.querySelector('#message');

button.addEventListener('click', () => {
  message.textContent = '欢迎来到你的第一个 AI 网页项目！';
});
