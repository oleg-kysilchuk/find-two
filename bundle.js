/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/check.png":
/*!******************************!*\
  !*** ./src/assets/check.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/check.png";

/***/ }),

/***/ "./src/assets/fries.png":
/*!******************************!*\
  !*** ./src/assets/fries.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fries.png";

/***/ }),

/***/ "./src/assets/hamburger.png":
/*!**********************************!*\
  !*** ./src/assets/hamburger.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/hamburger.png";

/***/ }),

/***/ "./src/assets/hotdog.png":
/*!*******************************!*\
  !*** ./src/assets/hotdog.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/hotdog.png";

/***/ }),

/***/ "./src/assets/pizza.png":
/*!******************************!*\
  !*** ./src/assets/pizza.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/pizza.png";

/***/ }),

/***/ "./src/assets/question.png":
/*!*********************************!*\
  !*** ./src/assets/question.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/question.png";

/***/ }),

/***/ "./src/assets/soda.png":
/*!*****************************!*\
  !*** ./src/assets/soda.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/soda.png";

/***/ }),

/***/ "./src/assets/taco.png":
/*!*****************************!*\
  !*** ./src/assets/taco.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/taco.png";

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _assets_question_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/question.png */ "./src/assets/question.png");
/* harmony import */ var _assets_check_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/check.png */ "./src/assets/check.png");
/* harmony import */ var _assets_fries_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/fries.png */ "./src/assets/fries.png");
/* harmony import */ var _assets_hamburger_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/hamburger.png */ "./src/assets/hamburger.png");
/* harmony import */ var _assets_hotdog_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/hotdog.png */ "./src/assets/hotdog.png");
/* harmony import */ var _assets_pizza_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/pizza.png */ "./src/assets/pizza.png");
/* harmony import */ var _assets_soda_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/soda.png */ "./src/assets/soda.png");
/* harmony import */ var _assets_taco_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/taco.png */ "./src/assets/taco.png");









document.addEventListener('DOMContentLoaded', function () {
  var cardsArray = [{
    name: 'fries',
    image: 'assets/fries.png'
  }, {
    name: 'fries',
    image: 'assets/fries.png'
  }, {
    name: 'hamburger',
    image: 'assets/hamburger.png'
  }, {
    name: 'hamburger',
    image: 'assets/hamburger.png'
  }, {
    name: 'hotdog',
    image: 'assets/hotdog.png'
  }, {
    name: 'hotdog',
    image: 'assets/hotdog.png'
  }, {
    name: 'pizza',
    image: 'assets/pizza.png'
  }, {
    name: 'pizza',
    image: 'assets/pizza.png'
  }, {
    name: 'soda',
    image: 'assets/soda.png'
  }, {
    name: 'soda',
    image: 'assets/soda.png'
  }, {
    name: 'taco',
    image: 'assets/taco.png'
  }, {
    name: 'taco',
    image: 'assets/taco.png'
  }];
  cardsArray.sort(function () {
    return Math.random() - 0.5;
  });
  var grid = document.querySelector('.game-grid');
  var chosenCards = [];
  var chosenCardsId = [];
  var cardsMatched = [];

  function createCards() {
    for (var i = 0, j = cardsArray.length; i < j; i++) {
      var card = document.createElement('img');
      card.setAttribute('src', 'assets/question.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flip, false);
      grid.appendChild(card);
    }
  }

  ;

  function matchCheck() {
    var cards = document.querySelectorAll('img');
    var firstCard = chosenCardsId[0];
    var secondCard = chosenCardsId[1];

    if (chosenCards[0] === chosenCards[1]) {
      alert('You got a match!');
      cards[firstCard].setAttribute('src', 'assets/check.png');
      cards[firstCard].style.pointerEvents = "none";
      cards[secondCard].setAttribute('src', 'assets/check.png');
      cards[secondCard].style.pointerEvents = "none";
      cardsMatched.push(chosenCards);
    } else {
      cards[firstCard].setAttribute('src', 'assets/question.png');
      cards[secondCard].setAttribute('src', 'assets/question.png');
      alert('Try again');
    }

    chosenCards = [];
    chosenCardsId = [];
  }

  ;

  function flip() {
    var cardId = this.getAttribute('data-id');
    chosenCards.push(cardsArray[cardId].name);
    chosenCardsId.push(cardId);
    this.setAttribute('src', cardsArray[cardId].image);

    if (chosenCards.length === 2) {
      setTimeout(matchCheck, 300);
    }
  }

  createCards();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map