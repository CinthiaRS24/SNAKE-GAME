import Square from './Square.js'
import Snake from './Snake.js'

console.log('Iniciando juego ...')

const myCanvas = document.getElementById('myCanvas');
const context = myCanvas.getContext('2d');

const snake = new Snake();

const SIZE = 20;

let dx = 0;
let dy = 0;

let lastAxis; // 'X', 'Y'

let food = null;

setInterval(main, 150); // 1000ms = 1s

function main () {
 	update();	// actualizar las variables del juego
 	draw();		// dibujar todos los objetos del juego
 } 

function update() {

	const collisionDetected = checkSnakeCollision();
	if (collisionDetected) {
		gameOver();
		return;
	}

	// salvar la posición última del último elemento de la serpiente
	let prevX, prevY;
	if (snake.body.length >= 1) {
		prevX = snake.body[snake.body.length-1].x;
		prevY = snake.body[snake.body.length-1].y;
	} else {
		prevX = snake.head.x;
		prevY = snake.head.y;
	}
	

	// el cuerpo de la serpiente siga a la cabeza de la serpiente
	for (let i = snake.body.length - 1; i >= 1; i--) {
		snake.body[i].x = snake.body[i-1].x;
		snake.body[i].y = snake.body[i-1].y;
	}
	if (snake.body.length >= 1) {
		snake.body[0].x = snake.head.x;
		snake.body[0].y = snake.head.y;
	}

	// actualizar las coordenadas de la cabeza de la serpiente
	snake.head.move(dx, dy);

	// determinamos en qué eje ha ocurrido el último movimiento
	if (dx !== 0) {
		lastAxis = 'X';
	} else if (dy !== 0) {
		lastAxis = 'Y';
	}

	// detectar si la serpiente ha consumido el alimento
	if (food && snake.head.checkCollision(food)) {
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
	if (snake.hasCollided())
		return true;

	// verificar que la serpiente no se salga de los límites permitidos
	if(snake.hasBrokenTheLimits(0, myCanvas.width-SIZE, 0, myCanvas.height-SIZE))
		return true;

	return false;
}


function gameOver () {
	alert('Has perdido');
	dy = 0; dx = 0;
	snake.reset();
}


function increaseSnakeSize(prevX, prevY) {
	snake.body.push(
		new Square(prevX, prevY)
	);
}

function randomFoodPosition() {
	let position;
	do {
		position = new Square(getRandomX(), getRandomY());
	} while (checkFoodCollision(position));
	return position;
}


function checkFoodCollision(position) {
	if(snake.checkFullCollision(position))
		return true;
	
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
	drawObject(snake.head, 'lime');	

	// cuerpo
	snake.body.forEach(
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