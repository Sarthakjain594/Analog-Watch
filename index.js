// Spherical animation analog-clock

const numberdial = document.querySelector(".number-dial");
const main = document.querySelector(".main-base");
const Spherical = document.querySelector(".spherical-animation");

numberdial.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 16;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 16;
  main.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  spherical.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  numberdial.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

  numberdial.addEventListener("mouseout", (e) => {
    main.style.transform = `rotateY(-${xAxis}deg) rotateX(-${yAxis}deg)`;
    spherical.style.transform = `rotateY(-${xAxis}deg) rotateX(-${yAxis}deg)`;
  });
});

// working of clock :-

setInterval(() => {
  const hrhand = document.querySelector(".hour-hand");
  const minhand = document.querySelector(".min-hand");
  const sechand = document.querySelector(".second-hand");
  let currentDate = new Date();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();
  let hourMove = 30 * hours + minutes / 2;
  let minMove = 6 * minutes;
  let secMove = 6 * seconds;
  hrhand.style.transform = `rotate(${hourMove}deg)`;
  minhand.style.transform = `rotate(${minMove}deg)`;
  sechand.style.transform = `rotate(${secMove}deg)`;
  // console.log(hours, minutes, seconds);
}, 1000);
