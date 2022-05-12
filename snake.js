const myCanvas = document.getElementById('myCanvas');
const context = myCanvas.getContext('2d');

const SIZE = 20;

const head = { x: 0, y: 0 };
const body = [];

let dx = 0;
let dy = 0;

let lastAxis; // 'X', 'Y'

let food = null;

setInterval(main, 150); // 1000ms = 1s

function main () {
 	update();
 	draw();
 } 

function update() {

	const collisionDetected = checkSnakeCollision();
	if (collisionDetected) {
		gameOver();
		return;
	}

	// salvar la posición última del último elemento de la serpiente
	let prevX, prevY;
	if (body.length >= 1) {
		prevX = body[body.length-1].x;
		prevY = body[body.length-1].y;
	} else {
		prevX = head.x;
		prevY = head.y;
	}
	

	// el cuerpo de la serpiente siga a la cabeza de la serpiente
	for (let i = body.length - 1; i >= 1; i--) {
		body[i].x = body[i-1].x;
		body[i].y = body[i-1].y;
	}
	if (body.length >= 1) {
		body[0].x = head.x;
		body[0].y = head.y;
	}

	// actualizar las coordenadas de la cabeza de la serpiente
	head.x += dx;
	head.y += dy;

	// determinamos en qué eje ha ocurrido el último movimiento
	if (dx !== 0) {
		lastAxis = 'X';
	} else if (dy !== 0) {
		lastAxis = 'Y';
	}

	// detectar si la serpiente ha consumido el alimento
	if (food && head.x === food.x && head.y === food.y) {
		food = null;
		// aumentar el tamaño de la serpiente
		increaseSnakeSize(prevX, prevY);
	}

	// generar el alimento en caso que no exista
	if (!food) {
		food = randomFoodPosition();
	}
}

function checkSnakeCollision() {
	// coordenadas de la cabeza sean igual a las coordenadas de un elem del cuerpo
	for (let i = 0; i < body.length; i++) {
		if (head.x === body[i].x && head.y === body[i].y) {
			return true;
		}
	}

	// verificar que la serpiente no se salga de los límites permitidos
	const topCollision = (head.y < 0);
	const buttomCollision = (head.y > 440);
	const rightCollision = (head.x > 380);
	const leftCollision = (head.x < 0);
	if (topCollision || buttomCollision || rightCollision || leftCollision) {
		return true
	}

	return false;
}


function gameOver () {
	alert('Has perdido');
	head.x = 0;
	head.y = 0;
	dy = 0; dx = 0;
	body.length = 0;
}


function increaseSnakeSize(prevX, prevY) {
	body.push({
		x: prevX, y: prevY
	});
}

function randomFoodPosition() {
	let position;
	do {
		position = { x: getRandomX(), y: getRandomY() };
	} while (checkFoodCollision(position));
	return position;
}


function checkFoodCollision(position) {
	// comparar las  coordenadas del alimento con las coordenadas de un elem del cuerpo
	for (let i = 0; i < body.length; i++) {
		if (position.x === body[i].x && position.y === body[i].y) {
			return true;
		}
	}

	// comparar las  coordenadas del alimento con las coordenadas de la cabeza
	if (position.x === head.x && position.y === head.y) {
			return true;
		}
	
	return false;
}

function getRandomX() {
	// 0, 20, 40, 60, ..., 380  
	// 0, 1, 2, 3, ... 19    x20
	return 20 * parseInt(Math.random() * 20);
}

function getRandomY() {
	// 0, 20, 40, 60,  440 
 	// 0, 1, 2, 3,  22    x20
 	return 20 * parseInt(Math.random() * 23);
 }

function draw() {
	// definir un fondo negro
	context.fillStyle = 'black';
	context.fillRect(0, 0, myCanvas.width, myCanvas.height);

	// cabeza
	drawObject(head, 'lime');	

	// cuerpo
	body.forEach(
		elem => drawObject(elem, 'lime')
		);

	// alimento
	drawObject(food, 'white');
}

function drawObject(obj, color) {
	context.fillStyle = color;
	context.fillRect(obj.x, obj.y, SIZE, SIZE);
}

document.addEventListener('keydown', moveSnake);

function moveSnake (event) {
	switch (event.key) {
		case 'ArrowUp':
			if (lastAxis !== 'Y') {
				dx = 0;
				dy = -SIZE;
				console.log('Mover hacia arriba');
			}
			break;	
		case 'ArrowDown':
			if (lastAxis !== 'Y') {
				dx = 0;
				dy = +SIZE;
				console.log('Mover hacia abajo');
			}
			break;
		case 'ArrowRight':
			if (lastAxis !== 'X') {
				dx = +SIZE;
				dy = 0;
				console.log('Mover hacia la derecha');
			}
			break;	
		case 'ArrowLeft':
			if (lastAxis !== 'X') {
				dx = -SIZE
				dy = 0;	
				console.log('Mover hacia la izquierda');
			}	
			break;
	}
}