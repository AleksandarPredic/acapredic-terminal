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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(4);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendor_terminal_terminal_1_0_2_min__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendor_terminal_terminal_1_0_2_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vendor_terminal_terminal_1_0_2_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__info__ = __webpack_require__(3);
// https://github.com/sasadjolic/dom-terminal
// https://github.com/AleksandarPredic/dom-terminal



// Convert the 'terminal' DOM element into a live terminal.
// This example defines several custom commands for the terminal.
var MyInfo = new __WEBPACK_IMPORTED_MODULE_1__info__["a" /* default */]();
var terminal = new __WEBPACK_IMPORTED_MODULE_0__vendor_terminal_terminal_1_0_2_min___default.a('terminal', {}, {
    execute: function execute(cmd, args) {
        switch (cmd) {
            case 'clear':
                terminal.clear();
                return '';

            case 'name':
                return MyInfo.getName();

            case 'help':
                return 'Commands: clear, help, theme, ver or version<br>More help available <a class="external" href="http://github.com/SDA/terminal" target="_blank">here</a>';

            case 'theme':
                if (args && args[0]) {
                    if (args.length > 1) return 'Too many arguments';else if (args[0].match(/^interlaced|modern|white$/)) {
                        terminal.setTheme(args[0]);return '';
                    } else return 'Invalid theme';
                }
                return terminal.getTheme();

            case 'ver':
            case 'version':
                return '1.0.0';

            default:
                return 'Unknown command. Type help for info about available commands';
            //return false;
        };
    }
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

(function (i) {
  var d = d || function (d, a) {
    if (d) {
      var c = { welcome: "", prompt: "", separator: "&gt;", theme: "interlaced" },
          a = a || c;a.welcome = a.welcome || c.welcome;a.prompt = a.prompt || c.prompt;a.separator = a.separator || c.separator;a.theme = a.theme || c.theme;var i = Array.prototype.slice.call(arguments, 2),
          e = localStorage.history ? JSON.parse(localStorage.history) : [],
          f = e.length,
          m = "",
          g = document.getElementById(d);g.classList.add("terminal");g.classList.add("terminal-" + a.theme);g.insertAdjacentHTML("beforeEnd", ['<div class="background"><div class="interlace"></div></div><div class="container"><output></output><table class="input-line">', '<tr><td nowrap><div class="prompt">' + a.prompt + a.separator + '</div></td><td width="100%"><input class="cmdline" spellcheck="false" autofocus /></td></tr>', "</table></div>"].join(""));var c = g.querySelector(".container"),
          l = c.querySelector(".input-line"),
          h = c.querySelector(".input-line .cmdline"),
          j = c.querySelector("output"),
          n = c.querySelector(".prompt"),
          k = document.querySelector(".background");j.addEventListener("DOMSubtreeModified", function () {
        setTimeout(function () {
          h.scrollIntoView();
        }, 0);
      }, !1);a.welcome && (j.insertAdjacentHTML("beforeEnd", a.welcome), h.scrollIntoView());window.addEventListener("click", function () {
        h.focus();
      }, !1);j.addEventListener("click", function (b) {
        b.stopPropagation();
      }, !1);h.addEventListener("click", function () {
        this.value = this.value;
      }, !1);l.addEventListener("click", function () {
        h.focus();
      }, !1);h.addEventListener("keyup", function (b) {
        if (b.keyCode == 27) {
          this.value = "";b.stopPropagation();b.preventDefault();
        }if (e.length && (b.keyCode == 38 || b.keyCode == 40)) {
          e[f] ? e[f] = this.value : m = this.value;if (b.keyCode == 38) {
            f--;f < 0 && (f = 0);
          } else if (b.keyCode == 40) {
            f++;if (f > e.length) f = e.length;
          }this.value = this.value = e[f] ? e[f] : m;
        }
      }, !1);h.addEventListener("keydown", function (b) {
        if (b.keyCode == 13) {
          if (b = this.value) {
            e[e.length] = b;localStorage.history = JSON.stringify(e);f = e.length;
          }var a = this.parentNode.parentNode.parentNode.parentNode.cloneNode(true);a.removeAttribute("id");a.classList.add("line");var c = a.querySelector("input.cmdline");c.autofocus = false;c.readOnly = true;c.insertAdjacentHTML("beforebegin", c.value);c.parentNode.removeChild(c);
          j.appendChild(a);l.classList.add("hidden");this.value = "";if (b && b.trim()) var d = b.split(" ").filter(function (a) {
            return a;
          }),
              g = d[0],
              d = d.splice(1);if (g) {
            var b = false,
                k;for (k in i) {
              a = i[k];a.execute && (b = a.execute(g, d));if (b !== false) break;
            }b === false && (b = g + ": command not found");j.insertAdjacentHTML("beforeEnd", b);h.scrollIntoView();
          }l.classList.remove("hidden");
        }
      }, !1);window.addEventListener("keyup", function (a) {
        h.focus();a.stopPropagation();a.preventDefault();
      }, !1);return { clear: function clear() {
          j.innerHTML = "";h.value = "";k.style.minHeight = "";
        }, setPrompt: function setPrompt(b) {
          n.innerHTML = b + a.separator;
        }, getPrompt: function getPrompt() {
          return n.innerHTML.replace(RegExp(a.separator + "$"), "");
        }, setTheme: function setTheme(b) {
          g.classList.remove("terminal-" + a.theme);a.theme = b;g.classList.add("terminal-" + a.theme);
        }, getTheme: function getTheme() {
          return a.theme;
        } };
    }
  };if ("undefined" !== typeof module && module.exports) module.exports = d;else {
    var k = i.Terminal;d.noConflict = function () {
      i.Terminal = k;return d;
    };i.Terminal = d;
  }
})(this);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Info = function () {
    function Info() {
        _classCallCheck(this, Info);

        this.name = 'Aca';
        this.lastName = 'Predic';
    }

    _createClass(Info, [{
        key: 'getName',
        value: function getName() {
            return this.name;
        }
    }]);

    return Info;
}();

/* harmony default export */ __webpack_exports__["a"] = (Info);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);