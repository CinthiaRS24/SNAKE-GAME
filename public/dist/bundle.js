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

/***/ "./src/Snake.js":
/*!**********************!*\
  !*** ./src/Snake.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\n/* harmony import */ var _Square__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Square */ \"./src/Square.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar _default = /*#__PURE__*/function () {\n  function _default() {\n    _classCallCheck(this, _default);\n\n    this.head = new _Square__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 0);\n    this.body = [];\n  }\n\n  _createClass(_default, [{\n    key: \"addElement\",\n    value: function addElement(element) {\n      body.push(element); // por qué aquí no es necesario el this.?\n    }\n  }, {\n    key: \"move\",\n    value: function move(dx, dy) {\n      // el cuerpo de la serpiente siga a la cabeza de la serpiente\n      for (var i = this.body.length - 1; i >= 1; i--) {\n        this.body[i].x = this.body[i - 1].x;\n        this.body[i].y = this.body[i - 1].y;\n      }\n\n      if (this.body.length >= 1) {\n        this.body[0].x = this.head.x;\n        this.body[0].y = this.head.y;\n      } // actualizar las coordenadas de la cabeza de la serpiente\n\n\n      this.head.move(dx, dy);\n    }\n  }, {\n    key: \"getLastElement\",\n    value: function getLastElement() {\n      if (this.body.length >= 1) {\n        return this.body[this.body.length - 1];\n      } else {\n        return this.head;\n      }\n    }\n  }, {\n    key: \"hasCollided\",\n    value: function hasCollided() {\n      for (var i = 0; i < this.body.length; i++) {\n        if (this.body[i].checkCollision(this.head)) {\n          return true;\n        }\n      }\n    }\n  }, {\n    key: \"hasBrokenTheLimits\",\n    value: function hasBrokenTheLimits(x1, x2, y1, y2) {\n      var topCollision = this.head.y < y1;\n      var bottomCollision = this.head.y > y2;\n      var leftCollision = this.head.x < x1;\n      var rightCollision = this.head.x > x2;\n\n      if (topCollision || bottomCollision || rightCollision || leftCollision) {\n        return true;\n      }\n    }\n  }, {\n    key: \"checkFullCollision\",\n    value: function checkFullCollision(position) {\n      // comparar las  coordenadas del alimento con las coordenadas de un elem del cuerpo\n      for (var i = 0; i < this.body.length; i++) {\n        if (this.body[i].checkCollision(position)) {\n          return true;\n        }\n      } // comparar las  coordenadas del alimento con las coordenadas de la cabeza\n\n\n      if (this.head.checkCollision(position)) {\n        return true;\n      }\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      this.head.x = 0;\n      this.head.y = 0;\n      this.body.length = 0;\n    }\n  }]);\n\n  return _default;\n}();\n\n\n\n//# sourceURL=webpack:///./src/Snake.js?");

/***/ }),

/***/ "./src/Square.js":
/*!***********************!*\
  !*** ./src/Square.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar _default = /*#__PURE__*/function () {\n  function _default(x, y) {\n    _classCallCheck(this, _default);\n\n    this.x = x;\n    this.y = y;\n  }\n\n  _createClass(_default, [{\n    key: \"draw\",\n    value: function draw() {}\n  }, {\n    key: \"move\",\n    value: function move(dx, dy) {\n      this.x += dx;\n      this.y += dy;\n    }\n  }, {\n    key: \"checkCollision\",\n    value: function checkCollision(obj) {\n      return this.x === obj.x && this.y === obj.y;\n    }\n  }]);\n\n  return _default;\n}();\n\n\n\n//# sourceURL=webpack:///./src/Square.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Square_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Square.js */ \"./src/Square.js\");\n/* harmony import */ var _Snake_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Snake.js */ \"./src/Snake.js\");\n\n\nconsole.log('Iniciando juego ...');\nvar myCanvas = document.getElementById('myCanvas');\nvar context = myCanvas.getContext('2d');\nvar snake = new _Snake_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nvar SIZE = 20;\nvar dx = 0;\nvar dy = 0;\nvar lastAxis; // 'X', 'Y'\n\nvar food = null;\nsetInterval(main, 150); // 1000ms = 1s\n\nfunction main() {\n  update(); // actualizar las variables del juego\n\n  draw(); // dibujar todos los objetos del juego\n}\n\nfunction update() {\n  var collisionDetected = checkSnakeCollision();\n\n  if (collisionDetected) {\n    gameOver();\n    return;\n  } // salvar la posición última del último elemento de la serpiente\n\n\n  var prevX, prevY;\n  var lastElement = snake.getLastElement();\n  prevX = lastElement.x;\n  prevY = lastElement.y;\n  snake.move(dx, dy); // determinamos en qué eje ha ocurrido el último movimiento\n\n  if (dx !== 0) {\n    lastAxis = 'X';\n  } else if (dy !== 0) {\n    lastAxis = 'Y';\n  } // detectar si la serpiente ha consumido el alimento\n\n\n  if (food && snake.head.checkCollision(food)) {\n    food = null; // aumentar el tamaño de la serpiente\n\n    snake.addElement(new _Square_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](prevX, prevY));\n  } // generar el alimento en caso que no exista\n\n\n  if (!food) {\n    food = generateFood();\n  }\n}\n\nfunction checkSnakeCollision() {\n  // coordenadas de la cabeza sean igual a las coordenadas de un elem del cuerpo\n  if (snake.hasCollided()) return true; // verificar que la serpiente no se salga de los límites permitidos\n\n  if (snake.hasBrokenTheLimits(0, myCanvas.width - SIZE, 0, myCanvas.height - SIZE)) return true;\n  return false;\n}\n\nfunction gameOver() {\n  alert('Has perdido');\n  dy = 0;\n  dx = 0;\n  snake.reset();\n}\n\nfunction generateFood() {\n  var position;\n\n  do {\n    position = new _Square_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](getRandomX(), getRandomY());\n  } while (snake.checkFullCollision(position));\n\n  return position;\n}\n\nfunction getRandomX() {\n  // 0, 20, 40, 60, ..., 380  \n  // 0, 1, 2, 3, ... 19    x20\n  return 20 * parseInt(Math.random() * 20);\n}\n\nfunction getRandomY() {\n  // 0, 20, 40, 60,  440 \n  // 0, 1, 2, 3,  22    x20\n  return 20 * parseInt(Math.random() * 23);\n}\n\nfunction draw() {\n  // definir un fondo negro\n  context.fillStyle = 'black';\n  context.fillRect(0, 0, myCanvas.width, myCanvas.height); // cabeza\n\n  drawObject(snake.head, 'lime'); // cuerpo\n\n  snake.body.forEach(function (elem) {\n    return drawObject(elem, 'lime');\n  }); // alimento\n\n  drawObject(food, 'white');\n}\n\nfunction drawObject(obj, color) {\n  context.fillStyle = color;\n  context.fillRect(obj.x, obj.y, SIZE, SIZE);\n}\n\ndocument.addEventListener('keydown', moveSnake);\n\nfunction moveSnake(event) {\n  switch (event.key) {\n    case 'ArrowUp':\n      if (lastAxis !== 'Y') {\n        dx = 0;\n        dy = -SIZE;\n        console.log('Mover hacia arriba');\n      }\n\n      break;\n\n    case 'ArrowDown':\n      if (lastAxis !== 'Y') {\n        dx = 0;\n        dy = +SIZE;\n        console.log('Mover hacia abajo');\n      }\n\n      break;\n\n    case 'ArrowRight':\n      if (lastAxis !== 'X') {\n        dx = +SIZE;\n        dy = 0;\n        console.log('Mover hacia la derecha');\n      }\n\n      break;\n\n    case 'ArrowLeft':\n      if (lastAxis !== 'X') {\n        dx = -SIZE;\n        dy = 0;\n        console.log('Mover hacia la izquierda');\n      }\n\n      break;\n  }\n}\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });