import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

let timeLeft = null;
let timeFromInput = null;
let timerId = null;
const startBtnRef = document.querySelector('[data-start]');
const daysToDate = document.querySelector('[data-days]');
const hoursToDate = document.querySelector('[data-hours]');
const minutesToDate = document.querySelector('[data-minutes]');
const secondsToDate = document.querySelector('[data-seconds]');

startBtnRef.disabled = true;

// ------------------------------------------------------------------------------------------------------------

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  //   Main part of counter:
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      startBtnRef.disabled = true;
      Notiflix.Notify.failure(
        'Sorry... Could you please choose a date in the future?',
        {
          timeout: 3000,
        }
      );
      return;
    }
    Notiflix.Notify.success("Let's rock'n'roll!", {
      timeout: 3000,
    });
    startBtnRef.disabled = false;
    timeFromInput = selectedDates[0];
    // console.log(selectedDates[0]);
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

flatpickr('#datetime-picker', options);

// ------------------------------------------------------------------------------------------------------------

convertMs();

startBtnRef.addEventListener('click', countdownToDate);

function countdownToDate() {
  startBtnRef.disabled = true;
  document.getElementById('datetime-picker').disabled = true;
  timerId = setInterval(() => {
    timeLeft = convertMs(timeFromInput - Date.now());

    if (
      !timeLeft.days &&
      !timeLeft.hours &&
      !timeLeft.minutes &&
      !timeLeft.seconds
    ) {
      Notiflix.Notify.success('Hurray!!! We did it!!', {
        timeout: 3000,
      });
      clearInterval(timerId);
      startBtnRef.disabled = false;
      document.getElementById('datetime-picker').disabled = false;
      //   location.reload();
    }

    console.log(timeLeft);

    daysToDate.textContent = addLeadingZero(timeLeft.days);
    hoursToDate.textContent = addLeadingZero(timeLeft.hours);
    minutesToDate.textContent = addLeadingZero(timeLeft.minutes);
    secondsToDate.textContent = addLeadingZero(timeLeft.seconds);
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart('2', 0);
}
