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
const wrapper = document.getElementById("wrapper");

// call displayTime each second
setInterval(displayTime(wrapper), 1000);
 */

const wrapper = document.getElementById("wrapper");
setInterval(
  () => (wrapper.textContent = new Date().toLocaleTimeString()),
  1000
);
