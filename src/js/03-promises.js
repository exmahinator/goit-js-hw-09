import Notiflix from 'notiflix';

// --------------------------------------------------------------------------------------------------------

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

// ---------------------------------------------------------------------------------------------------------

const formRef = document.querySelector('.form');
let savedData = {};

formRef.addEventListener('input', onInput);
formRef.addEventListener('submit', onSubmit);

function onInput(event) {
  const { name, value } = event.target;
  savedData[name] = Number(value);
}

function onSubmit(event) {
  event.preventDefault();
  const { firstDelay, delay, position } = savedData;
  for (let i = 0; i < position; i += 1) {
    const timeToNext = firstDelay + delay * i;
    createPromise(i + 1, timeToNext)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`,
          {
            timeout: 3000,
          }
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`,
          {
            timeout: 3000,
          }
        );
      });
  }
}
