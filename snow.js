const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let flakes = Array.from({ length: 120 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 2 + 1.2,
  d: Math.random() * 0.8 + 0.4
}));

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
  ctx.beginPath();

  flakes.forEach(f => {
    ctx.moveTo(f.x, f.y);
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
  });

  ctx.fill();
  update();
}

let angle = 0;
function update() {
  angle += 0.002;

  flakes.forEach(f => {
    f.y += f.d;
    f.x += Math.sin(angle) * 0.3;

    if (f.y > canvas.height) {
      f.y = -5;
      f.x = Math.random() * canvas.width;
    }
  });
}

setInterval(draw, 33);
