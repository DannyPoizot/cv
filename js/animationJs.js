let circle = document.querySelector("#circle");

let xPos = 0;
let yPos = 0;
let angle = 0;

function animate() {
  xPos += 5;
  angle += .1;

  yPos = Math.round(20 * Math.sin(angle));

  // circle.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;

  if (Math.abs(xPos) >= 900) {
    xPos = -500;
  }

  if (angle > 2 * Math.PI) {
    angle = 0;
  }

  requestAnimationFrame(animate);
}
animate();
