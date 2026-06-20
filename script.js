const welcomeButton = document.querySelector('#welcomeButton');
const welcomeMessage = document.querySelector('#welcomeMessage');

welcomeButton.addEventListener('click', () => {
  welcomeMessage.textContent = '欢迎来到我的第一个 AI 项目！';
});
