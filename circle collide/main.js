// Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let cirMouse = {
  color: "blue",
  r: 35,
  x: 200,
  y: 300,
};

let cir = {
  color: "orange",
  r: 75,
  x: 650,
  y: 300,
};

let mouseX, mouseY;

requestAnimationFrame(draw);
function draw() {
  // Update Variables

  // Calculate distance between mouse and circle center
  let mouseDis = Math.sqrt((mouseX - cir.x)  ,2 + (mouseY - cir.y)  ,2);

  // Detect if Mouse is in Circle
  if (mouseDis < cir.r + cirMouse.r) {
    cir.x = Math.random() * (725 - 75) + 75;
    cir.y = Math.random() * (525 - 75) + 75;
  }

  // Clear Backgroung
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Draw Circle Yellow
  ctx.fillStyle = cir.color;
  ctx.beginPath();
  ctx.arc(cir.x, cir.y, cir.r, 0, 2 * Math.PI);
  ctx.fill();

  // Draw Circle Blue Mouse
  ctx.fillStyle = cirMouse.color;
  ctx.beginPath();
  ctx.arc(mouseX, mouseY, cirMouse.r, 0, 2 * Math.PI);
  ctx.fill();

  // Request Animation Frame
  requestAnimationFrame(draw);
}

// Event Key
document.addEventListener("mousemove", mouseMoveHandler);

// Getting mouse coordinates
function mouseMoveHandler(event) {
  let cnvRect = cnv.getBoundingClientRect();
  mouseX = event.x - cnvRect.x;
  mouseY = event.y - cnvRect.y;
}