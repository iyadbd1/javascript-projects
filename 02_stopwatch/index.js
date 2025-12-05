/**
 * creates a sw with private variables:
 * hours, minutes and seconds and with closures:
 *
 */
function createStopwatch(hours = 0, minutes = 0, seconds = 0, cseconds = 0) {
  // initialize stopwatch state to off
  state = false;

  // method to reset time to 0
  const resetTime = () => {
    hours = minutes = seconds = cseconds = 0;
  };
  // method to get current time in the format HH:MM:SS
  const getTime = function () {
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${cseconds
      .toString()
      .padStart(2, "0")}`;
  };

  // method to increment time by 1 second
  const updateTime = () => {
    if (cseconds < 99) {
      cseconds++;
    } else {
      cseconds = 0;
      if (seconds < 60) {
        seconds++;
      } else {
        seconds = 0;
        if (minutes < 60) {
          minutes++;
        } else {
          minutes = 0;
          if (hours < 99) {
            hours++;
          } else {
            seconds = 59;
            minutes = 59;
            stopSw();
          }
        }
      }
    }
  };

  return {
    resetTime,
    getTime,
    updateTime,
    state,
  };
}

// get stopwatch element
const sw = document.getElementById("sw");

// create a stopwatch
const myStopwatch = createStopwatch();
sw.textContent = myStopwatch.getTime();
let intervalID;

function startSw() {
  // return if stopwatch is already on
  if (myStopwatch.state === true) {
    stopSw();
    return;
  }
  myStopwatch.state = true;

  //   display time
  sw.textContent = myStopwatch.getTime();
  myStopwatch.updateTime();

  intervalID = setInterval(function () {
    if (myStopwatch.state === true) {
      // display time
      sw.textContent = myStopwatch.getTime();
      // update time (increment by one second)
      myStopwatch.updateTime();
    } else {
      stopSw();
    }
  }, 10);
}

function resetSw() {
  myStopwatch.resetTime();
  // display time
  sw.textContent = myStopwatch.getTime();
}

function stopSw() {
  // if stopwatch is off return
  if (myStopwatch.state === false) return;
  // set stopwatch state to off
  myStopwatch.state = false;
  clearInterval(intervalID);
}
