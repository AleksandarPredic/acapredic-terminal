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
module.exports = __webpack_require__(8);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendor_terminal_terminal__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendor_terminal_terminal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vendor_terminal_terminal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__info__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isIos__ = __webpack_require__(7);
/**
 * Api documentation example
 *
 * @see https://swapi.co/documentation#root
 */

// https://github.com/sasadjolic/dom-terminal
// https://github.com/AleksandarPredic/dom-terminal




var terminal = new __WEBPACK_IMPORTED_MODULE_0__vendor_terminal_terminal___default.a('terminal', {
  scrollIntoViewAfter: __WEBPACK_IMPORTED_MODULE_2__isIos__["a" /* default */].isIOS() ? false : true
}, {
  execute: function execute(cmd, args) {

    var request = cmd.toLowerCase();

    if ('clear' === request) {
      terminal.clear();
      return '';
    } else if ('help' === request) {
      return '\n        <h4>Commands:</h4>\n        <ul>\n          <li>help</li>\n          <li>clear</li>\n          <li>basic (Basic info)</li>\n          <li>projects</li>\n          <li>projects/{id} (All details for single project.  Example: projects/1)</li>\n          <li>More help available <a class="external" href="#" target="_blank">here</a></li>\n        </ul>';
    } else if ('basic' === request) {
      return __WEBPACK_IMPORTED_MODULE_1__info__["a" /* default */].getBasicInfo();
    } else if ('projects' === request) {
      return __WEBPACK_IMPORTED_MODULE_1__info__["a" /* default */].getProjects();
    } else if (-1 !== request.indexOf('projects/')) {
      return __WEBPACK_IMPORTED_MODULE_1__info__["a" /* default */].getProject(parseInt(request.replace('projects/', '')));
    } else {
      return '404. Unknown command. Type help for info about available commands';
    }
  }
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

(function (global, undefined) {

	var Terminal = Terminal || function (containerID, options) {
		if (!containerID) return;

		var defaults = {
			welcome: '',
			prompt: '',
			separator: '&gt;',
			theme: 'interlaced',
			scrollIntoViewAfter: true
		};

		var options = options || defaults;
		options.welcome = options.welcome || defaults.welcome;
		options.prompt = options.prompt || defaults.prompt;
		options.separator = options.separator || defaults.separator;
		options.theme = options.theme || defaults.theme;
		// Added option to allow disabling scroll for iphone and some devices
		options.scrollIntoViewAfter = typeof options.scrollIntoViewAfter !== 'undefined' ? options.scrollIntoViewAfter : defaults.scrollIntoViewAfter;

		var extensions = Array.prototype.slice.call(arguments, 2);

		var _history = localStorage.history ? JSON.parse(localStorage.history) : [];
		var _histpos = _history.length;
		var _histtemp = '';

		// Create terminal and cache DOM nodes;
		var _terminal = document.getElementById(containerID);
		_terminal.classList.add('terminal');
		_terminal.classList.add('terminal-' + options.theme);
		_terminal.insertAdjacentHTML('beforeEnd', ['<div class="background"><div class="interlace"></div></div>', '<div class="container">', '<output></output>', '<table class="input-line">', '<tr><td nowrap><div class="prompt">' + options.prompt + options.separator + '</div></td><td width="100%"><input class="cmdline" spellcheck="false" autofocus /></td></tr>', '</table>', '</div>'].join(''));
		var _container = _terminal.querySelector('.container');
		var _inputLine = _container.querySelector('.input-line');
		var _cmdLine = _container.querySelector('.input-line .cmdline');
		var _output = _container.querySelector('output');
		var _prompt = _container.querySelector('.prompt');
		var _background = document.querySelector('.background');

		// Hackery to resize the interlace background image as the container grows.
		_output.addEventListener('DOMSubtreeModified', function (e) {
			// Works best with the scroll into view wrapped in a setTimeout.
			if (options.scrollIntoViewAfter) {
				setTimeout(function () {
					_cmdLine.scrollIntoView();
				}, 0);
			}
		}, false);

		if (options.welcome) {
			output(options.welcome);
		}

		window.addEventListener('click', function (e) {
			_cmdLine.focus();
		}, false);

		_output.addEventListener('click', function (e) {
			e.stopPropagation();
		}, false);

		// Always force text cursor to end of input line.
		_cmdLine.addEventListener('click', inputTextClick, false);
		_inputLine.addEventListener('click', function (e) {
			_cmdLine.focus();
		}, false);

		// Handle up/down key presses for shell history and enter for new command.
		_cmdLine.addEventListener('keyup', historyHandler, false);
		_cmdLine.addEventListener('keydown', processNewCommand, false);

		window.addEventListener('keyup', function (e) {
			_cmdLine.focus();
			e.stopPropagation();
			e.preventDefault();
		}, false);

		function inputTextClick(e) {
			this.value = this.value;
		}

		function historyHandler(e) {
			// Clear command-line on Escape key.
			if (e.keyCode == 27) {
				this.value = '';
				e.stopPropagation();
				e.preventDefault();
			}

			if (_history.length && (e.keyCode == 38 || e.keyCode == 40)) {
				if (_history[_histpos]) {
					_history[_histpos] = this.value;
				} else {
					_histtemp = this.value;
				}

				if (e.keyCode == 38) {
					// Up arrow key.
					_histpos--;
					if (_histpos < 0) {
						_histpos = 0;
					}
				} else if (e.keyCode == 40) {
					// Down arrow key.
					_histpos++;
					if (_histpos > _history.length) {
						_histpos = _history.length;
					}
				}

				this.value = _history[_histpos] ? _history[_histpos] : _histtemp;

				// Move cursor to end of input.
				this.value = this.value;
			}
		}

		function processNewCommand(e) {
			// Only handle the Enter key.
			if (e.keyCode != 13) return;

			var cmdline = this.value;

			// Save shell history.
			if (cmdline) {
				_history[_history.length] = cmdline;
				localStorage['history'] = JSON.stringify(_history);
				_histpos = _history.length;
			}

			// Duplicate current input and append to output section.
			var line = this.parentNode.parentNode.parentNode.parentNode.cloneNode(true);
			line.removeAttribute('id');
			line.classList.add('line');
			var input = line.querySelector('input.cmdline');
			input.autofocus = false;
			input.readOnly = true;
			input.insertAdjacentHTML('beforebegin', input.value);
			input.parentNode.removeChild(input);
			_output.appendChild(line);

			// Hide command line until we're done processing input.
			_inputLine.classList.add('hidden');

			// Clear/setup line for next input.
			this.value = '';

			// Parse out command, args, and trim off whitespace.
			if (cmdline && cmdline.trim()) {
				var args = cmdline.split(' ').filter(function (val, i) {
					return val;
				});
				var cmd = args[0];
				args = args.splice(1); // Remove cmd from arg list.
			}

			if (cmd) {
				var response = false;
				for (var index in extensions) {
					var ext = extensions[index];
					if (ext.execute) response = ext.execute(cmd, args);
					if (response !== false) break;
				}
				if (response === false) response = cmd + ': command not found';
				output(response);
			}

			// Show the command line.
			_inputLine.classList.remove('hidden');
		}

		function clear() {
			_output.innerHTML = '';
			_cmdLine.value = '';
			_background.style.minHeight = '';
		}

		function output(html) {
			_output.insertAdjacentHTML('beforeEnd', html);
			_cmdLine.scrollIntoView();
		}

		return {
			clear: clear,
			setPrompt: function setPrompt(prompt) {
				_prompt.innerHTML = prompt + options.separator;
			},
			getPrompt: function getPrompt() {
				return _prompt.innerHTML.replace(new RegExp(options.separator + '$'), '');
			},
			setTheme: function setTheme(theme) {
				_terminal.classList.remove('terminal-' + options.theme);options.theme = theme;_terminal.classList.add('terminal-' + options.theme);
			},
			getTheme: function getTheme() {
				return options.theme;
			}
		};
	};

	// node.js
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = Terminal;

		// web browsers
	} else {
		var oldTerminal = global.Terminal;
		Terminal.noConflict = function () {
			global.Terminal = oldTerminal;
			return Terminal;
		};
		global.Terminal = Terminal;
	}
})(this);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__crud__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project__ = __webpack_require__(6);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_js__ = __webpack_require__(5);
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
      name: 'WooCommerce external API integration - products import - custom WP plugin',
      url: 'https://grafomis.rs',
      shortDescription: 'WooCommerce was used as a base to import 6000+ products from external API.',
      description: '\n      WooCommerce was used as a base to import 6000+ products from external API. Custom WordPress plugin was created to handle authentication, \n      automatic import and synchronization of all data (taxonomies, post types, attributes...) for fully functional online shop. \n      Additionally, WooCommerce was customized on frontend to fit needs of printing company.\n      '
    },

    2: {
      id: 2,
      name: 'WordPress custom business solution',
      url: 'https://www.physicianpartnersofamerica.com',
      shortDescription: 'Custom WordPress solution heavily relying on Google maps javascript API.',
      description: '\n      Custom WordPress solution heavily relying on Google maps javascript API. Project included custom WP theme and plugins, integrating various external API\'s. \n\n      My role was a team lead of small dev team consisting of 3 members covering both frontend and backend tasks. Close cooperation with designer was also important for better design implementation. \n      \n      Performance-wise I write a lot of requested features to avoid using plugins that add extra functionalities which are not needed on the site.\n      \n      Used on project: PHP, jQuery, JavaScript, SCSS, Gulp, Composer, WordPress\n      \n      Website description: Doctors and clinics listing using Google maps displaying results by distance from visitor location. Live search on Google maps for locations. Other common website pages are also implemented and designed.\n      '
    },

    3: {
      id: 3,
      name: 'WordPress Widget Builder Framework',
      url: 'https://github.com/AleksandarPredic/WordPress-Widget-Builder',
      shortDescription: 'The WordPress Widget Builder serves as a framework to quickly build your WordPress widgets.',
      description: '\n      The WordPress Widget Builder serves as a framework to quickly build your WordPress widgets.\n\n      You can make configuration array of desired widget name, description, fields... and the framework will create widget admin part for you. Leaving you to worry only about widget frontend output.\n      '
    }
  }
});

/***/ }),
/* 6 */
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

      return '\n    <section>\n    <p>\n      <ul>\n        <li><strong>Id:</strong> ' + this.id + '</li>\n        <li><strong>Project name:</strong> ' + this.name + '</li>\n        <li><strong>Short description:</strong> ' + this.shortDescription + '</li>\n        <li><strong>Url:</strong> <a href="' + this.url + '" target="_blank">' + this.url + '</a></li>\n      </ul>\n    </p>\n    </section>\n    ';
    }
  }, {
    key: 'displayLong',
    value: function displayLong() {

      return '\n    <section>\n    <h3>Project name: ' + this.name + '</h3>\n    <p>\n      <ul>\n        <li><strong>Url:</strong> <a href="' + this.url + '" target="_blank">' + this.url + '</a></li>\n        <li><strong>Description:</strong> ' + this.description + '</li>\n      </ul>\n    </p>\n    </section>\n    ';
    }
  }]);

  return Project;
}();

/* harmony default export */ __webpack_exports__["a"] = (Project);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DetectIOS = function () {
  function DetectIOS() {
    _classCallCheck(this, DetectIOS);

    this.isIphone = navigator.userAgent.indexOf("iPhone") != -1;
    this.isIod = navigator.userAgent.indexOf("iPod") != -1;
    this.isIpad = navigator.userAgent.indexOf("iPad") != -1;
  }

  _createClass(DetectIOS, [{
    key: "isIOS",
    value: function isIOS() {

      return this.isIphone || this.isIod || this.isIpad;
    }
  }]);

  return DetectIOS;
}();

var isIOS = new DetectIOS();

/* harmony default export */ __webpack_exports__["a"] = (isIOS);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map