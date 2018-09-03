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
module.exports = __webpack_require__(5);


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



var terminal = new __WEBPACK_IMPORTED_MODULE_0__vendor_terminal_terminal_1_0_2_min___default.a('terminal', {}, {
  execute: function execute(cmd, args) {

    if ('clear' === cmd) {
      terminal.clear();
      return '';
    } else if ('help' === cmd) {
      return '\n        Commands: <br />\n        <ul>\n          <li>help</li>\n          <li>clear</li>\n          <li>basic (Basic info)</li>\n          <li>More help available <a class="external" href="http://github.com/SDA/terminal" target="_blank">here</a></li>\n        </ul>';
    } else if ('basic' === cmd) {
      return __WEBPACK_IMPORTED_MODULE_1__info__["a" /* default */].getBasicInfo();
    } else if ('projects' === cmd) {
      return __WEBPACK_IMPORTED_MODULE_1__info__["a" /* default */].getProjects();
    } else if (-1 !== cmd.indexOf('project/')) {
      return __WEBPACK_IMPORTED_MODULE_1__info__["a" /* default */].getProject(parseInt(cmd.replace('project/', '')));
    } else {
      return '404. Unknown command. Type help for info about available commands';
    }
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__crud__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project__ = __webpack_require__(12);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Info = function () {
      function Info() {
            _classCallCheck(this, Info);

            this.data = new __WEBPACK_IMPORTED_MODULE_0__crud__["a" /* default */]('./data.json').getJson();

            // All data we'll ever need
            this.name = this.data.basic.name;
            this.lastName = this.data.basic.lastName;
            this.email = this.data.basic.email;
            this.projects = this.data.projects;
      }

      _createClass(Info, [{
            key: 'getBasicInfo',
            value: function getBasicInfo() {
                  return '\n        <h2>Basic info</h2>\n        First Name: ' + this.name + ', <br />\n        Last Name: ' + this.lastName + ', <br />\n        Email: ' + this.email + '\n        ';
            }
      }, {
            key: 'getProjects',
            value: function getProjects() {

                  var list = ['<h2>Projects</h2>'];

                  Object.values(this.projects).forEach(function (project) {

                        var singleProject = new __WEBPACK_IMPORTED_MODULE_1__project__["a" /* default */](project.id, project.name, '', project.shortDescription);

                        list.push(singleProject.displayShort());
                  });

                  return list.join('');
            }
      }, {
            key: 'getProject',
            value: function getProject(id) {

                  var project = this.projects[id];

                  if (typeof project === "undefined") {
                        return '404. Project with requested id <strong>' + id + '</strong> doesn\'t exists';
                  }

                  var singleProject = new __WEBPACK_IMPORTED_MODULE_1__project__["a" /* default */]('', project.name, project.url, '', project.description);

                  return singleProject.displayLong();
            }
      }]);

      return Info;
}();

var info = new Info();

/* harmony default export */ __webpack_exports__["a"] = (info);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_js__ = __webpack_require__(11);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Crud = function () {
  function Crud(filePath) {
    _classCallCheck(this, Crud);

    this.filePath = filePath;
  }

  _createClass(Crud, [{
    key: 'getJson',
    value: function getJson() {

      return __WEBPACK_IMPORTED_MODULE_0__data_js__["a" /* default */];
    }
  }]);

  return Crud;
}();

/* harmony default export */ __webpack_exports__["a"] = (Crud);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  basic: {
    name: 'Aleksandar',
    lastName: 'Predic',
    email: 'info@acapredic.com',
    position: 'Web development team Lead, lead WP developer at Shindiri Studio | #WCEU organizing team | #WPNis community Co-organizer'
  },
  projects: {
    1: {
      id: 1,
      name: 'WordPress custom business solution',
      url: 'https://www.physicianpartnersofamerica.com',
      shortDescription: ' Custom WordPress solution heavily relying on Google maps javascript API.',
      description: '\n      Custom WordPress solution heavily relying on Google maps javascript API. Project included custom WP theme and plugins, integrating various external API\'s. \n\n      My role was a team lead of small dev team consisting of 3 members covering both frontend and backend tasks. Close cooperation with designer was also important for better design implementation. \n      \n      Performance-wise I write a lot of requested features to avoid using plugins that add extra functionalities which are not needed on the site.\n      \n      Used on project: PHP, jQuery, JavaScript, SCSS, Gulp, Composer, WordPress\n      \n      Website description: Doctors and clinics listing using Google maps displaying results by distance from visitor location. Live search on Google maps for locations. Other common website pages are also implemented and designed.\n      '
    },

    2: {
      id: 2,
      name: 'WordPress Widget Builder Framework',
      url: 'https://github.com/AleksandarPredic/WordPress-Widget-Builder',
      shortDescription: 'The WordPress Widget Builder serves as a framework to quickly build your WordPress widgets.',
      description: '\n      The WordPress Widget Builder serves as a framework to quickly build your WordPress widgets.\n\nYou can make configuration array of desired widget name, description, fields... and the framework will create widget admin part for you. Leaving you to worry only about widget frontend output.\n      '
    }
  }
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Project = function () {
  function Project(id, name) {
    var url = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var shortDescription = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
    var description = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';

    _classCallCheck(this, Project);

    this.id = id;
    this.name = name;
    this.url = url;
    this.shortDescription = shortDescription;
    this.description = description;
  }

  _createClass(Project, [{
    key: 'displayShort',
    value: function displayShort() {

      return '\n    <section>\n    <p>\n      <ul>\n        <li><strong>Id:</strong> ' + this.id + '</li>\n        <li><strong>Project name:</strong> ' + this.name + '</li>\n        <li><strong>Short description:</strong> ' + this.shortDescription + '</li>\n      </ul>\n    </p>\n    </section>\n    ';
    }
  }, {
    key: 'displayLong',
    value: function displayLong() {

      return '\n    <section>\n    <h3>Project name: ' + this.name + '</h3>\n    <p>\n      <ul>\n        <li><strong>Url:</strong> ' + this.url + '</li>\n        <li><strong>Description:</strong> ' + this.description + '</li>\n      </ul>\n    </p>\n    </section>\n    ';
    }
  }]);

  return Project;
}();

/* harmony default export */ __webpack_exports__["a"] = (Project);

/***/ })
/******/ ]);