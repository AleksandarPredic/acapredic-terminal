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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendor_dom_terminal_dist_terminal_1_0_2_min__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendor_dom_terminal_dist_terminal_1_0_2_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vendor_dom_terminal_dist_terminal_1_0_2_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__info__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isIos__ = __webpack_require__(7);
/**
 * Api documentation example
 *
 * @see https://swapi.co/documentation#root
 *
 * icons: https://simpleicons.org/
 */

/**
 * TODO: Add og and twitter and google tags in index.html
 */

// https://github.com/sasadjolic/dom-terminal
// https://github.com/AleksandarPredic/dom-terminal




var terminal = new __WEBPACK_IMPORTED_MODULE_0__vendor_dom_terminal_dist_terminal_1_0_2_min___default.a('terminal', {
  scrollIntoViewAfter: __WEBPACK_IMPORTED_MODULE_2__isIos__["a" /* default */].isIOS() ? false : true
}, {
  execute: function execute(cmd, args) {

    var request = cmd.toLowerCase();

    if ('clear' === request) {
      terminal.clear();
      return '';
    } else if ('help' === request) {
      return '\n        <h4>Commands:</h4>\n        <h5>Type command and press enter.</h5>\n        <ul>\n          <li>help</li>\n          <li>clear</li>\n          <li>basic</li>\n          <li>projects</li>\n          <li>projects/{id}</li>\n          <li>experiences</li>\n          <li>experiences/{id}</li>\n          <li>education</li>\n          <li>Don\'t like command prompts? <a class="external" href="https://www.linkedin.com/in/aleksandarpredic" target="_blank">visit my LinkedIn profile</a></li>\n        </ul>';
    } else if ('basic' === request) {
      return __WEBPACK_IMPORTED_MODULE_1__info__["a" /* default */].getBasicInfo();
    } else if ('projects' === request) {
      return __WEBPACK_IMPORTED_MODULE_1__info__["a" /* default */].getProjects();
    } else if (request.includes('projects/')) {
      return __WEBPACK_IMPORTED_MODULE_1__info__["a" /* default */].getProject(parseInt(request.replace('projects/', '')));
    } else if ('experiences' === request) {
      return __WEBPACK_IMPORTED_MODULE_1__info__["a" /* default */].getExperiences();
    } else if (request.includes('experiences/')) {
      return __WEBPACK_IMPORTED_MODULE_1__info__["a" /* default */].getExperience(parseInt(request.replace('experiences/', '')));
    } else if ('education' === request) {
      return __WEBPACK_IMPORTED_MODULE_1__info__["a" /* default */].getEducation();
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
      var c = { welcome: "", prompt: "", separator: "&gt;", theme: "interlaced", scrollIntoViewAfter: !0 },
          a = a || c;a.welcome = a.welcome || c.welcome;a.prompt = a.prompt || c.prompt;a.separator = a.separator || c.separator;a.theme = a.theme || c.theme;a.scrollIntoViewAfter = "undefined" !== typeof a.scrollIntoViewAfter ? a.scrollIntoViewAfter : c.scrollIntoViewAfter;var i = Array.prototype.slice.call(arguments, 2),
          e = localStorage.history ? JSON.parse(localStorage.history) : [],
          f = e.length,
          m = "",
          g = document.getElementById(d);
      g.classList.add("terminal");g.classList.add("terminal-" + a.theme);g.insertAdjacentHTML("beforeEnd", ['<div class="background"><div class="interlace"></div></div><div class="container"><output></output><table class="input-line">', '<tr><td nowrap><div class="prompt">' + a.prompt + a.separator + '</div></td><td width="100%"><input class="cmdline" spellcheck="false" autofocus /></td></tr>', "</table></div>"].join(""));var c = g.querySelector(".container"),
          l = c.querySelector(".input-line"),
          h = c.querySelector(".input-line .cmdline"),
          j = c.querySelector("output"),
          n = c.querySelector(".prompt"),
          k = document.querySelector(".background");j.addEventListener("DOMSubtreeModified", function () {
        a.scrollIntoViewAfter && setTimeout(function () {
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
          }var a = this.parentNode.parentNode.parentNode.parentNode.cloneNode(true);
          a.removeAttribute("id");a.classList.add("line");var c = a.querySelector("input.cmdline");c.autofocus = false;c.readOnly = true;c.insertAdjacentHTML("beforebegin", c.value);c.parentNode.removeChild(c);j.appendChild(a);l.classList.add("hidden");this.value = "";if (b && b.trim()) var d = b.split(" ").filter(function (a) {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__experience__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__education__ = __webpack_require__(14);
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
            this.experiences = this.data.experiences;
            this.education = this.data.education;
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

                        var singleProject = new __WEBPACK_IMPORTED_MODULE_1__project__["a" /* default */](project.id, project.name, project.url, project.shortDescription);

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

                  var singleProject = new __WEBPACK_IMPORTED_MODULE_1__project__["a" /* default */]('', project.name, project.url, '', project.description, project.stack);

                  return singleProject.displayLong();
            }
      }, {
            key: 'getExperiences',
            value: function getExperiences() {

                  var list = ['<h2>Experiences</h2>'];

                  Object.values(this.experiences).forEach(function (experience) {

                        var singleExperience = new __WEBPACK_IMPORTED_MODULE_2__experience__["a" /* default */](experience.id, experience.position, '', experience.companyName);

                        list.push(singleExperience.displayShort());
                  });

                  return list.join('');
            }
      }, {
            key: 'getExperience',
            value: function getExperience(id) {

                  var experience = this.experiences[id];

                  if (typeof experience === "undefined") {
                        return '404. Experience with requested id <strong>' + id + '</strong> doesn\'t exists';
                  }

                  var singleExperience = new __WEBPACK_IMPORTED_MODULE_2__experience__["a" /* default */](experience.id, experience.position, experience.dates, experience.companyName, experience.companyUrl, experience.description);

                  console.log(singleExperience);

                  return singleExperience.displayLong();
            }
      }, {
            key: 'getEducation',
            value: function getEducation() {

                  var list = ['<h2>Education</h2>'];

                  Object.values(this.education).forEach(function (education) {

                        var singleEducation = new __WEBPACK_IMPORTED_MODULE_3__education__["a" /* default */](education.id, education.name, education.institution, education.dates, education.description);

                        list.push(singleEducation.display());
                  });

                  return list.join('');
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
      stack: 'PHP, HTML, CSS, JS, REST API, WooCommerce, WordPress',
      url: 'https://grafomis.rs',
      shortDescription: 'WooCommerce was used as a base to import 6000+ products from external API.',
      description: '\n      WooCommerce was used as a base to import 6000+ products from external API. Custom WordPress plugin was created to handle authentication, \n      automatic import and synchronization of all data (taxonomies, post types, attributes...) for fully functional online shop. \n      Additionally, WooCommerce was customized on frontend to fit needs of printing company.\n      '
    },

    2: {
      id: 2,
      name: 'WordPress custom business solution',
      stack: 'PHP, HTML, CSS, JS, WordPress',
      url: 'https://www.physicianpartnersofamerica.com',
      shortDescription: 'Custom WordPress solution heavily relying on Google maps javascript API.',
      description: '\n      Custom WordPress solution heavily relying on Google maps javascript API. Project included custom WP theme and plugins, integrating various external API\'s. \n\n      My role was a team lead of small dev team consisting of 3 members covering both frontend and backend tasks. Close cooperation with designer was also important for better design implementation. \n      \n      Performance-wise I write a lot of requested features to avoid using plugins that add extra functionalities which are not needed on the site.\n      \n      Used on project: PHP, jQuery, JavaScript, SCSS, Gulp, Composer, WordPress\n      \n      Website description: Doctors and clinics listing using Google maps displaying results by distance from visitor location. Live search on Google maps for locations. Other common website pages are also implemented and designed.\n      '
    },

    3: {
      id: 3,
      name: 'WordPress Widget Builder Framework',
      stack: 'PHP, HTML, CSS, JS, WordPress',
      url: 'https://github.com/AleksandarPredic/WordPress-Widget-Builder',
      shortDescription: 'The WordPress Widget Builder serves as a framework to quickly build your WordPress widgets.',
      description: '\n      The WordPress Widget Builder serves as a framework to quickly build your WordPress widgets.\n\n      You can make configuration array of desired widget name, description, fields... and the framework will create widget admin part for you. Leaving you to worry only about widget frontend output.\n      '
    }
  },
  experiences: {
    1: {
      id: 1,
      position: 'Web development team lead, lead WordPress developer',
      dates: 'Oct 2017 – Present',
      companyName: 'Shindiri Studio',
      companyUrl: 'https://www.shindiristudio.com',
      description: '\n      <ul>\n        <li>PHP, HTML, CSS, JavaScript, WordPress themes and plugin development.</li>\n        <li>Clients custom solutions development.</li>\n        <li>Create, coordinate, estimate and support all tasks within the development team.</li>\n        <li>Work together with product management, business and design teams to ensure fluent development workflow.</li>\n        <li>Lead the day to day coding.</li>\n      </ul>'
    },
    2: {
      id: 2,
      position: 'PHP Web Developer, WordPress Developer',
      dates: 'Oct 2014 – Oct 2017',
      companyName: 'Shindiri Studio',
      companyUrl: 'https://www.shindiristudio.com',
      description: '\n      <ul>\n        <li>HTML, CSS, JavaScript.</li>\n        <li>PHP, WordPress themes and plugin development.</li>\n        <li>WordPress design patterns.</li>\n        <li>Isolate and resolve current issues.</li>\n      </ul>'
    },
    3: {
      id: 3,
      position: 'WordPress course lecturer. Development of WordPress themes and plugins. PSD to WP.',
      dates: 'Mar 2017 – Oct 2017',
      companyName: 'IT Centar',
      companyUrl: 'https://itcentar.rs',
      description: '\n      <ul>\n        <li>WordPress course. Development of WordPress themes and plugins. PSD to WP conversion.</li>\n      </ul>'
    },
    4: {
      id: 4,
      position: 'Web developer',
      dates: 'Jul 2014 – Oct 2014',
      companyName: 'ApexSQL',
      companyUrl: 'https://www.apexsql.com',
      description: '\n      <ul>\n        <li>Work within a small local team using Scrum software development methodologies.</li>\n        <li>Update and improve company website and internal web applications.</li>\n        <li>Maintain WordPress websites</li>\n      </ul>'
    },
    5: {
      id: 5,
      position: 'PHP / Web developer',
      dates: 'May 2014 – Jul 2014',
      companyName: 'Freelancer',
      companyUrl: '',
      description: '\n      <ul>\n        <li>Frontend Development - HTML, CSS, jQuery</li>\n        <li>Backend Development PHP, MySQL</li>\n        <li>Development of Magento 1 theme</li>\n      </ul>'
    },
    6: {
      id: 6,
      position: 'Administrator and content manager',
      dates: 'Jul 2012 – May 2014',
      companyName: 'Inter Casa Ambienta',
      companyUrl: 'http://www.adriatiko.com/o-nama.htm',
      description: '\n      <ul>\n        <li>\n          Administration of high ranked web sites:\n          <ul>\n            <li><a href="https://www.tvarenasport.com" target="_blank">Arena sport</a></li>\n            <li><a href="https://www.aerogaga.com" target="_blank">Aerogaga</a></li>\n            <li><a href="https://www.stetoskop.info" target="_blank">Stetoskop</a></li>\n          </ul>\n        </li>\n        <li>Brand development, web site traffic growth, web site and advertising revenue.</li>\n      </ul>'
    }
  },
  education: {
    1: {
      id: 1,
      name: 'Php web programming Field Of StudyPHP, MySql, OOP',
      institution: 'IT centar Niš',
      dates: 'year 2013'
    },
    2: {
      id: 2,
      name: 'Banking and Finance Field Of StudyEconomics',
      institution: 'Management Faculty ”Megatrend”, Zajecar, Serbia',
      dates: '2013'
    },
    3: {
      id: 3,
      name: 'Management',
      institution: 'Business School of Management “Megatrend”, Belgrade, Serbia',
      dates: '2002 – 2004'
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
    var stack = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';

    _classCallCheck(this, Project);

    this.id = id;
    this.name = name;
    this.stack = stack;
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

      return '\n    <section>\n    <h4>Project name: ' + this.name + '</h4>\n    <p><strong>Stack:</strong> ' + this.stack + '</p>\n    <p>\n      <ul>\n        <li><strong>Url:</strong> <a href="' + this.url + '" target="_blank">' + this.url + '</a></li>\n        <li><strong>Description:</strong> ' + this.description + '</li>\n      </ul>\n    </p>\n    </section>\n    ';
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

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Experience = function () {
  function Experience(id, position, dates, companyName) {
    var companyUrl = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
    var description = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';

    _classCallCheck(this, Experience);

    this.id = id;
    this.position = position;
    this.dates = dates;
    this.companyName = companyName;
    this.companyUrl = companyUrl;
    this.description = description;
  }

  _createClass(Experience, [{
    key: 'displayShort',
    value: function displayShort() {

      return '\n    <section>\n    <p>\n      <ul>\n        <li><strong>Id:</strong> ' + this.id + '</li>\n        <li><strong>Position:</strong> ' + this.position + '</li>\n        <li><strong>Company name:</strong> ' + this.companyName + '</li>\n      </ul>\n    </p>\n    </section>\n    ';
    }
  }, {
    key: 'displayLong',
    value: function displayLong() {

      return '\n    <section>\n    <h4>Position: ' + this.position + '</h4>\n    <p><strong>Company:</strong> ' + this.companyName + '</p>\n    <p><strong>Dates:</strong> ' + this.dates + '</p>\n    <p><strong>Company website:</strong> <a href="' + this.companyUrl + '" target="_blank">' + this.companyUrl + '</a></p>\n    <p>\n      <ul>\n        <li><strong>Description:</strong> ' + this.description + '</li>\n      </ul>\n    </p>\n    </section>\n    ';
    }
  }]);

  return Experience;
}();

/* harmony default export */ __webpack_exports__["a"] = (Experience);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Education = function () {
  function Education(id, name, institution, dates) {
    var description = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';

    _classCallCheck(this, Education);

    this.id = id;
    this.name = name;
    this.institution = institution;
    this.dates = dates;
  }

  _createClass(Education, [{
    key: 'display',
    value: function display() {

      return '\n    <section>\n    <p>\n      <ul>\n        <li><strong>Name:</strong> ' + this.name + '</li>\n        <li><strong>Institution:</strong> ' + this.institution + '</li>\n        <li><strong>Dates:</strong> ' + this.dates + '</li>\n      </ul>\n    </p>\n    </section>\n    ';
    }
  }]);

  return Education;
}();

/* harmony default export */ __webpack_exports__["a"] = (Education);

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map