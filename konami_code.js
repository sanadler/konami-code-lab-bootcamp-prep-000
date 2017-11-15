const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


function init() {
  // Write your JavaScript code inside the init() function
  document.body.addEventListener('keydown', onKeyDownHandler(e));
}

let index = 0;

// This is the function that would be invoked by the event listener.
function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);

  if (key === code[index]) {
    index++;

    if (index === index.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
}
