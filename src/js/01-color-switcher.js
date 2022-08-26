function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtnRef = document.querySelector('[data-start]');
const stopBtnRef = document.querySelector('[data-stop]');
let timerId = null;

stopBtnRef.disabled = true;

startBtnRef.addEventListener('click', startAction);
stopBtnRef.addEventListener('click', stopAction);

function startAction() {
  startBtnRef.disabled = true;
  stopBtnRef.disabled = false;
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopAction() {
  stopBtnRef.disabled = true;
  startBtnRef.disabled = false;
  clearInterval(timerId);
}
