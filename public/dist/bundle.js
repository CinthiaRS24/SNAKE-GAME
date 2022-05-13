/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var myCanvas = document.getElementById('myCanvas');\nvar context = myCanvas.getContext('2d');\nvar SIZE = 20;\nvar head = {\n  x: 0,\n  y: 0\n};\nvar body = [];\nvar dx = 0;\nvar dy = 0;\nvar lastAxis; // 'X', 'Y'\n\nvar food = null;\nsetInterval(main, 150); // 1000ms = 1s\n\nfunction main() {\n  update();\n  draw();\n}\n\nfunction update() {\n  var collisionDetected = checkSnakeCollision();\n\n  if (collisionDetected) {\n    gameOver();\n    return;\n  } // salvar la posición última del último elemento de la serpiente\n\n\n  var prevX, prevY;\n\n  if (body.length >= 1) {\n    prevX = body[body.length - 1].x;\n    prevY = body[body.length - 1].y;\n  } else {\n    prevX = head.x;\n    prevY = head.y;\n  } // el cuerpo de la serpiente siga a la cabeza de la serpiente\n\n\n  for (var i = body.length - 1; i >= 1; i--) {\n    body[i].x = body[i - 1].x;\n    body[i].y = body[i - 1].y;\n  }\n\n  if (body.length >= 1) {\n    body[0].x = head.x;\n    body[0].y = head.y;\n  } // actualizar las coordenadas de la cabeza de la serpiente\n\n\n  head.x += dx;\n  head.y += dy; // determinamos en qué eje ha ocurrido el último movimiento\n\n  if (dx !== 0) {\n    lastAxis = 'X';\n  } else if (dy !== 0) {\n    lastAxis = 'Y';\n  } // detectar si la serpiente ha consumido el alimento\n\n\n  if (food && head.x === food.x && head.y === food.y) {\n    food = null; // aumentar el tamaño de la serpiente\n\n    increaseSnakeSize(prevX, prevY);\n  } // generar el alimento en caso que no exista\n\n\n  if (!food) {\n    food = randomFoodPosition();\n  }\n}\n\nfunction checkSnakeCollision() {\n  // coordenadas de la cabeza sean igual a las coordenadas de un elem del cuerpo\n  for (var i = 0; i < body.length; i++) {\n    if (head.x === body[i].x && head.y === body[i].y) {\n      return true;\n    }\n  } // verificar que la serpiente no se salga de los límites permitidos\n\n\n  var topCollision = head.y < 0;\n  var buttomCollision = head.y > 440;\n  var rightCollision = head.x > 380;\n  var leftCollision = head.x < 0;\n\n  if (topCollision || buttomCollision || rightCollision || leftCollision) {\n    return true;\n  }\n\n  return false;\n}\n\nfunction gameOver() {\n  alert('Has perdido');\n  head.x = 0;\n  head.y = 0;\n  dy = 0;\n  dx = 0;\n  body.length = 0;\n}\n\nfunction increaseSnakeSize(prevX, prevY) {\n  body.push({\n    x: prevX,\n    y: prevY\n  });\n}\n\nfunction randomFoodPosition() {\n  var position;\n\n  do {\n    position = {\n      x: getRandomX(),\n      y: getRandomY()\n    };\n  } while (checkFoodCollision(position));\n\n  return position;\n}\n\nfunction checkFoodCollision(position) {\n  // comparar las  coordenadas del alimento con las coordenadas de un elem del cuerpo\n  for (var i = 0; i < body.length; i++) {\n    if (position.x === body[i].x && position.y === body[i].y) {\n      return true;\n    }\n  } // comparar las  coordenadas del alimento con las coordenadas de la cabeza\n\n\n  if (position.x === head.x && position.y === head.y) {\n    return true;\n  }\n\n  return false;\n}\n\nfunction getRandomX() {\n  // 0, 20, 40, 60, ..., 380  \n  // 0, 1, 2, 3, ... 19    x20\n  return 20 * parseInt(Math.random() * 20);\n}\n\nfunction getRandomY() {\n  // 0, 20, 40, 60,  440 \n  // 0, 1, 2, 3,  22    x20\n  return 20 * parseInt(Math.random() * 23);\n}\n\nfunction draw() {\n  // definir un fondo negro\n  context.fillStyle = 'black';\n  context.fillRect(0, 0, myCanvas.width, myCanvas.height); // cabeza\n\n  drawObject(head, 'lime'); // cuerpo\n\n  body.forEach(function (elem) {\n    return drawObject(elem, 'lime');\n  }); // alimento\n\n  drawObject(food, 'white');\n}\n\nfunction drawObject(obj, color) {\n  context.fillStyle = color;\n  context.fillRect(obj.x, obj.y, SIZE, SIZE);\n}\n\ndocument.addEventListener('keydown', moveSnake);\n\nfunction moveSnake(event) {\n  switch (event.key) {\n    case 'ArrowUp':\n      if (lastAxis !== 'Y') {\n        dx = 0;\n        dy = -SIZE;\n        console.log('Mover hacia arriba');\n      }\n\n      break;\n\n    case 'ArrowDown':\n      if (lastAxis !== 'Y') {\n        dx = 0;\n        dy = +SIZE;\n        console.log('Mover hacia abajo');\n      }\n\n      break;\n\n    case 'ArrowRight':\n      if (lastAxis !== 'X') {\n        dx = +SIZE;\n        dy = 0;\n        console.log('Mover hacia la derecha');\n      }\n\n      break;\n\n    case 'ArrowLeft':\n      if (lastAxis !== 'X') {\n        dx = -SIZE;\n        dy = 0;\n        console.log('Mover hacia la izquierda');\n      }\n\n      break;\n  }\n}\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });