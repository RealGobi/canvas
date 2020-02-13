 
// get canvas
const canvas = document.getElementById('canvas');

// get width and height of browswe window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// get context from canvas
const c = canvas.getContext('2d'); 

// variable
let mouse = {
  x: undefined,
  y:undefined
};
 const maxRadius = 45;

 let colorArray = [
   '#07485C',
   '#567987',
   '#F4857F',
   '#F9C0AD',
   '#F9C0AD',
 ]

 // eventliserners on mouse move and resize window
window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // call init to get the right effect on respan
  init()
});

// pure black magic
function Circle(x, y, dx, dy, radius){
  this.x = x;
  this.y = y;
  this.dx = dx
  this.dy = dy
  this.radius = radius
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
  this.minRadius = radius;

  this.draw = () => {

    // draw on canvas
    c.beginPath();
    c.arc(this.x, this.y, this.radius ,0 , Math.PI * 2, false);
    
    // add random color from color array
    c.fillStyle = this.color
    c.fill();
  }
  this.update = () => {
    // update to make the balls bounce on edges

    if (this.x + this.radius > innerWidth || this.x - this.radius < 0 ) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight ||this. y - this.radius < 0 ) {
      this.dy = - this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    // interactivity

    // make balls bigger close to mouse position
    if (mouse.x - this.x < 50 && mouse.x - this.x > -50
      && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
        if (this.radius < maxRadius) {
          this.radius += 1;
        }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }
    this.draw();
  }
}

let = circleArr = [];

function init() {
   // clear eferything
  circleArr = [];
  // add cicrels on random size and position
  for (let i = 0; i < 800; i++) {
  let radius = Math.random() * 5 + 1;
  let x = Math.random() * (innerWidth - radius * 2) + radius;
  let y = Math.random() * innerHeight;
  let dx = (Math.random() - 0.5);
  let dy = (Math.random() - 0.5);
    circleArr.push(new Circle(x, y, dx, dy, radius))
  };
};

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0,0, innerWidth, innerHeight);
  
    for (let i = 0; i < circleArr.length; i++) {
      circleArr[i].update();
    }
}
init();
 animate();