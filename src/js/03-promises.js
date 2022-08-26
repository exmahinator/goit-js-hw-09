import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

// ---------------------------------------------------------------------------------------------------------

const formRef = document.querySelector('.form');

formRef.addEventListener('input', onEnter);

function onEnter(event) {
  console.log(event.target);
}

function onClick() {
  console.log("Hey! I'm clicking!");
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
//       timeout: 3000,
//     });
//   })
//   .catch(({ position, delay }) => {
//     Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
//       timeout: 3000,
//     });
//   });
