import { Stopwatch } from "./Stopwatch.js";

const startButton = document.getElementById("start-button");
const endButton = document.getElementById("end-button");
const resetButton = document.getElementById("reset-button");
const duration = document.getElementById("duration");

const watch = new Stopwatch();

startButton.addEventListener("click", function (e) {
  watch.start();
});

endButton.addEventListener("click", function (e) {
  watch.stop();
  duration.innerText = watch.duration.toFixed(1);
});

resetButton.addEventListener("click", () => {
  duration.innerText = "";
  watch.reset();
});
