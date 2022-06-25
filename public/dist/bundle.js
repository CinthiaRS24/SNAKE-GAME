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

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\n/* harmony import */ var _Square__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Square */ \"./src/Square.js\");\n/* harmony import */ var _Snake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Snake */ \"./src/Snake.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\n\nvar _default = /*#__PURE__*/function () {\n  function _default(idCanvasElement) {\n    var standardSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;\n\n    _classCallCheck(this, _default);\n\n    this.myCanvas = document.getElementById(idCanvasElement);\n    this.context = myCanvas.getContext('2d');\n    this.SIZE = standardSize;\n    this.food = null;\n    this.snake = new _Snake__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.dx = 0;\n    this.dy = 0;\n    this.lastAxis; // 'X', 'Y'\n\n    document.addEventListener('keydown', this.moveSnake.bind(this));\n  }\n\n  _createClass(_default, [{\n    key: \"update\",\n    value: function update() {\n      if (this.snakeHasCollided()) {\n        this.gameOver();\n        return;\n      } // salvar la posición última del último elemento de la serpiente\n\n\n      var lastElement = this.snake.getLastElement();\n      var prevX = lastElement.x;\n      var prevY = lastElement.y;\n      this.snake.move(this.dx, this.dy); // determinamos en qué eje ha ocurrido el último movimiento\n\n      if (this.dx !== 0) {\n        this.lastAxis = 'X';\n      } else if (this.dy !== 0) {\n        this.lastAxis = 'Y';\n      } // detectar si la serpiente ha consumido el alimento\n\n\n      if (this.food && this.snake.head.checkCollision(this.food)) {\n        this.food = null; // aumentar el tamaño de la serpiente\n\n        this.snake.addElement(new _Square__WEBPACK_IMPORTED_MODULE_0__[\"default\"](prevX, prevY));\n      } // generar el alimento en caso que no exista\n\n\n      this.generateFoodIfNeeded();\n    }\n  }, {\n    key: \"snakeHasCollided\",\n    value: function snakeHasCollided() {\n      // coordenadas de la cabeza sean igual a las coordenadas de un elem del cuerpo\n      if (this.snake.hasCollided()) return true; // verificar que la serpiente no se salga de los límites permitidos\n\n      if (this.snake.hasBrokenTheLimits(0, this.myCanvas.width - this.SIZE, 0, this.myCanvas.height - this.SIZE)) return true;\n      return false;\n    }\n  }, {\n    key: \"gameOver\",\n    value: function gameOver() {\n      alert('Has perdido');\n      this.dy = 0;\n      this.dx = 0;\n      this.snake.reset();\n    }\n  }, {\n    key: \"generateFoodIfNeeded\",\n    value: function generateFoodIfNeeded() {\n      if (this.food) return;\n\n      do {\n        this.food = new _Square__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.getRandomX(), this.getRandomY());\n      } while (this.snake.checkFullCollision(this.food));\n    }\n  }, {\n    key: \"getRandomX\",\n    value: function getRandomX() {\n      // 0, 20, 40, 60, ..., 380  \n      // 0, 1, 2, 3, ... 19    x20\n      return this.SIZE * parseInt(Math.random() * 20);\n    }\n  }, {\n    key: \"getRandomY\",\n    value: function getRandomY() {\n      // 0, 20, 40, 60,  440 \n      // 0, 1, 2, 3,  22    x20\n      return this.SIZE * parseInt(Math.random() * 23);\n    }\n  }, {\n    key: \"draw\",\n    value: function draw() {\n      var _this = this;\n\n      // definir un fondo negro\n      this.context.fillStyle = 'black';\n      this.context.fillRect(0, 0, this.myCanvas.width, this.myCanvas.height); // cabeza\n\n      this.drawObject(this.snake.head, 'lime'); // cuerpo\n\n      this.snake.body.forEach(function (elem) {\n        return _this.drawObject(elem, 'lime');\n      }); // alimento\n\n      this.drawObject(this.food, 'white');\n    }\n  }, {\n    key: \"drawObject\",\n    value: function drawObject(obj, color) {\n      this.context.fillStyle = color;\n      this.context.fillRect(obj.x, obj.y, this.SIZE, this.SIZE);\n    }\n  }, {\n    key: \"moveSnake\",\n    value: function moveSnake(event) {\n      switch (event.key) {\n        case 'ArrowUp':\n          if (this.lastAxis !== 'Y') {\n            this.dx = 0;\n            this.dy = -this.SIZE;\n            console.log('Mover hacia arriba');\n          }\n\n          break;\n\n        case 'ArrowDown':\n          if (this.lastAxis !== 'Y') {\n            this.dx = 0;\n            this.dy = +this.SIZE;\n            console.log('Mover hacia abajo');\n          }\n\n          break;\n\n        case 'ArrowRight':\n          if (this.lastAxis !== 'X') {\n            this.dx = +this.SIZE;\n            this.dy = 0;\n            console.log('Mover hacia la derecha');\n          }\n\n          break;\n\n        case 'ArrowLeft':\n          if (this.lastAxis !== 'X') {\n            this.dx = -this.SIZE;\n            this.dy = 0;\n            console.log('Mover hacia la izquierda');\n          }\n\n          break;\n      }\n    }\n  }]);\n\n  return _default;\n}();\n\n\n\n//# sourceURL=webpack:///./src/Game.js?");

/***/ }),

/***/ "./src/Snake.js":
/*!**********************!*\
  !*** ./src/Snake.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\n/* harmony import */ var _Square__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Square */ \"./src/Square.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar _default = /*#__PURE__*/function () {\n  function _default() {\n    _classCallCheck(this, _default);\n\n    this.head = new _Square__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 0);\n    this.body = [];\n  }\n\n  _createClass(_default, [{\n    key: \"addElement\",\n    value: function addElement(element) {\n      this.body.push(element);\n    }\n  }, {\n    key: \"move\",\n    value: function move(dx, dy) {\n      // el cuerpo de la serpiente siga a la cabeza de la serpiente\n      for (var i = this.body.length - 1; i >= 1; i--) {\n        this.body[i].x = this.body[i - 1].x;\n        this.body[i].y = this.body[i - 1].y;\n      }\n\n      if (this.body.length >= 1) {\n        this.body[0].x = this.head.x;\n        this.body[0].y = this.head.y;\n      } // actualizar las coordenadas de la cabeza de la serpiente\n\n\n      this.head.move(dx, dy);\n    }\n  }, {\n    key: \"getLastElement\",\n    value: function getLastElement() {\n      if (this.body.length >= 1) {\n        return this.body[this.body.length - 1];\n      } else {\n        return this.head;\n      }\n    }\n  }, {\n    key: \"hasCollided\",\n    value: function hasCollided() {\n      for (var i = 0; i < this.body.length; i++) {\n        if (this.body[i].checkCollision(this.head)) {\n          return true;\n        }\n      }\n    }\n  }, {\n    key: \"hasBrokenTheLimits\",\n    value: function hasBrokenTheLimits(x1, x2, y1, y2) {\n      var topCollision = this.head.y < y1;\n      var bottomCollision = this.head.y > y2;\n      var leftCollision = this.head.x < x1;\n      var rightCollision = this.head.x > x2;\n\n      if (topCollision || bottomCollision || rightCollision || leftCollision) {\n        return true;\n      }\n    }\n  }, {\n    key: \"checkFullCollision\",\n    value: function checkFullCollision(position) {\n      // comparar las  coordenadas del alimento con las coordenadas de un elem del cuerpo\n      for (var i = 0; i < this.body.length; i++) {\n        if (this.body[i].checkCollision(position)) {\n          return true;\n        }\n      } // comparar las  coordenadas del alimento con las coordenadas de la cabeza\n\n\n      if (this.head.checkCollision(position)) {\n        return true;\n      }\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      this.head.x = 0;\n      this.head.y = 0;\n      this.body.length = 0;\n    }\n  }]);\n\n  return _default;\n}();\n\n\n\n//# sourceURL=webpack:///./src/Snake.js?");

/***/ }),

/***/ "./src/Square.js":
/*!***********************!*\
  !*** ./src/Square.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar _default = /*#__PURE__*/function () {\n  function _default(x, y) {\n    _classCallCheck(this, _default);\n\n    this.x = x;\n    this.y = y;\n  }\n\n  _createClass(_default, [{\n    key: \"move\",\n    value: function move(dx, dy) {\n      this.x += dx;\n      this.y += dy;\n    }\n  }, {\n    key: \"checkCollision\",\n    value: function checkCollision(obj) {\n      return this.x === obj.x && this.y === obj.y;\n    }\n  }]);\n\n  return _default;\n}();\n\n\n\n//# sourceURL=webpack:///./src/Square.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game.js */ \"./src/Game.js\");\n\nconsole.log('Iniciando juego ...');\nsetInterval(main, 150); // 1000ms = 1s\n\nvar game = new _Game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('myCanvas');\n\nfunction main() {\n  game.update(); // actualizar las variables del juego\n\n  game.draw(); // dibujar todos los objetos del juego\n}\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });