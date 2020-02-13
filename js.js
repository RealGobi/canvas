 const canvas = document.getElementById('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const c = canvas.getContext('2d'); 
/* 
//rect

c.fillStyle = 'green';
c.fillRect(100, 100, 100, 100);
c.fillStyle = '#eee';
c.fillRect(300, 400, 100, 100);
c.fillStyle = '#00efff';
c.fillRect(300, 100, 100, 100);

// Line

c.beginPath();
c.moveTo(50, 400);
c.lineTo(300, 100);
c.lineTo(400, 350);
c.strokeStyle = '#ff0000';
c.stroke();

//arc

c.beginPath();
c.arc(300,300,30, 0, Math.PI * 2, false );
c.strokeStyle = 'orange'
c.stroke();

for (let i = 0; i < 25; i++) {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
c.beginPath();
c.arc(x,y,50, 0, Math.PI * 2, false );
c.strokeStyle = 'red';
c.stroke();
}
 */

let x = Math.random() * innerWidth;
let y = Math.random() * innerHeight;
let dx = (Math.random() - 0.5) * 8;
let dy = (Math.random() - 0.5) * 8;
let radius = 30;
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0,0, innerWidth, innerHeight);
  c.beginPath();
  c.arc(x, y, radius ,0 , Math.PI * 2, false);
  c.strokeStyle = 'green';
  c.stroke();

  if (x + radius > innerWidth || x - radius < 0 ) {
    dx = -dx;
  }
  if (y + radius > innerHeight || y - radius < 0 ) {
    dy = - dy;
  }
  x += dx;
  y += dy;

  }


 animate();