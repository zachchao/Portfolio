input = "1 1 0 0\n1 1 0 3\n1 1 1 0\n1 1 1 1\n1 1 1 2\n1 1 1 3\n1 1 2 0\n1 2 2 1\n1 1 2 3\n2 1 3 0\n2 2 3 1\n2 1 3 3"
class Block(length, width, row, column){
	console.log(length);
	
}


function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
	lines = input.split("\n")
	for (i = 0; i < lines.length; i++){
		params = lines[i].split(" ");
		drawRect(parseInt(params[0]), parseInt(params[1]),
						 parseInt(params[2]), parseInt(params[3]), i);
	}
	textSize(32);
	for (i = 0; i < lines.length; i++){
		params = lines[i].split(" ");
		
	}
	noLoop();
}

function drawRect(length, width, row, column, num){
	console.log(row + " " + column + " " + i);
	textSize(32);
	rect(column * 100, row * 100, width * 100, length * 100);
	text(i, (column * 100) + (width * 100 / 2), (row * 100) + (length * 100 / 2));
	//text(i, column * 100, row * 100);
}
