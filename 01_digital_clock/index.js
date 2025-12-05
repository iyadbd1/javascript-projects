/**
 * Displays current time in a given html element
 *
 * @param {HTMLElement} element an html text element
 */
/* function displayTime(element) {
  // get current time
  const now = new Date();

  // format curret time "HH:MM:SS XM"
  const time = now.toLocaleTimeString();

  // display time
  element.textContent = time;
}

// get the element in which time is displayed
const clock = document.getElementById("clock");

// call displayTime each second
setInterval(displayTime(clock), 1000);
 */

const clock = document.getElementById("clock");
const displayClock = () =>
  (clock.textContent = new Date().toLocaleTimeString());

displayClock;
setInterval(displayClock), 1000;
