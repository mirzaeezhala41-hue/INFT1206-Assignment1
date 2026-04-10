// Get canvas and context
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// Set canvas size to browser window
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// Helper functions for random numbers and colors
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRGB() {
  return `rgb(${random(0,255)} ${random(0,255)} ${random(0,255)})`;
}

// Ball class
class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

  
  // Update the ball's position
  update() {
    if (this.x + this.size >= width || this.x - this.size <= 0) this.velX = -this.velX;
    if (this.y + this.size >= height || this.y - this.size <= 0) this.velY = -this.velY;

    this.x += this.velX;
    this.y += this.velY;
  }

  // Check for collision with other balls
  collisionDetect() {
    for (const ball of balls) {
      if (this !== ball) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
}

// Create array of balls
const balls = [];
while (balls.length < 25) {
  const size = random(10, 20);
  balls.push(new Ball(
    random(size, width - size),
    random(size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size
  ));
}

// Animation loop
function loop() {
  // Draw semi-transparent background to create trails
  ctx.fillStyle = "rgba(0,0,0,0.25)";
  ctx.fillRect(0, 0, width, height);

  // Draw and update each ball
  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect();
  }

  // Repeat the loop
  requestAnimationFrame(loop);
}

// Start the animation
loop();