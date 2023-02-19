function Stopwatch() {
  let startTime = 0;
  let endTime = 0;
  let running = false;
  let duration = 0;

  this.start = () => {
    if (!running) {
      running = true;
      startTime = new Date();
    } else {
      console.log("Stopwatch already running");
    }
  };
  this.stop = () => {
    if (running) {
      running = false;
      endTime = new Date();
    } else {
      console.log("Stopwatch already stopped");
    }
    const seconds = (endTime - startTime) / 1000;
    duration += seconds;
  };
  this.reset = () => {
    if (running) {
      startTime = 0;
      endTime = 0;
      running = 0;
      duration = 0;
    } else {
      console.log("Stopwatch already running");
    }
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

const startButton = document.getElementById("start-button");
const endButton = document.getElementById("end-button");
const duration = document.getElementById("duration");

const watch = new Stopwatch();

startButton.addEventListener("click", function (e) {
  watch.start();
  setInterval(() => {
    duration.innerText = watch.duration;
  }, 1000);
});

endButton.addEventListener("click", function (e) {
  watch.stop();
  // duration.innerText = Math.floor(watch.duration);
});
