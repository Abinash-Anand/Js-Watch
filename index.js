setInterval(() => {
  let time;
  time = new Date();
  time.getHours() +
    ":" +
    time.getSeconds() +
    ":" +
    time.getSeconds() +
    ":" +
    time.getMilliseconds();
  document.querySelector(".time").innerHTML = time;
}, 1000);
