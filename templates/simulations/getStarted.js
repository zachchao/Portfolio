var x; 
var y;
var xSpeed;
var ySpeed;
var width;
var height;
var colorNum;
var cycleSize;
function setup() {
	width = window.innerWidth;
	height = window.innerHeight;
	colorNum = 0;
	cycleSize = 12;
	x = int(random(width));
	y = int(random(height));
	xSpeed = int(random(9)) + 1;
	ySpeed = int(random(9)) + 1;
	createCanvas(width, height);
}

function draw() { 
	x = x + xSpeed;
	y = y + ySpeed;
	colorNum = colorNum + 1;
  ellipse(x, y, 80, 80);
  let red   = sin_to_hex(colorNum, 0 * Math.PI * 2/3); // 0   deg
  let blue  = sin_to_hex(colorNum, 1 * Math.PI * 2/3); // 120 deg
  let green = sin_to_hex(colorNum, 2 * Math.PI * 2/3); // 240 deg

 	let colorString = "#"+ red + green + blue;
  fill(colorString);
  if (x > width || x < 0){
  	xSpeed = (xSpeed * -1);
  }
  if (y > height || y < 0){
  	ySpeed = (ySpeed * -1);
  }
  if(colorNum >= cycleSize){
  	colorNum = 0;
  }
}

function sin_to_hex(i, phase) {
  var sin = Math.sin(Math.PI / cycleSize * 2 * i + phase);
  var int = Math.floor(sin * 127) + 128;
  var hex = int.toString(16);

  return hex.length === 1 ? "0"+hex : hex;
}