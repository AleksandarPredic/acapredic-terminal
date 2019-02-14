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
      return '\n        <h4>Commands:</h4>\n        <h5>Type command and press enter.</h5>\n        <ul>\n          <li>help</li>\n          <li>clear</li>\n          <li>basic</li>\n          <li>projects</li>\n          <li>projects/{id}</li>\n          <li>experiences</li>\n          <li>experiences/{id}</li>\n          <li>education</li>\n          <li>skills</li>\n          <li>volunteer</li>\n          <li>Don\'t like command prompts? <a class="external" href="https://www.linkedin.com/in/aleksandarpredic" target="_blank" rel="nofollow">visit my LinkedIn profile</a></li>\n        </ul>';
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
    } else if ('skills' === request) {
      return __WEBPACK_IMPORTED_MODULE_1__info__["a" /* default */].getSkills();
    } else if ('volunteer' === request) {
      return __WEBPACK_IMPORTED_MODULE_1__info__["a" /* default */].getVolunteer();
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__volunteer__ = __webpack_require__(16);
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
            this.skills = this.data.skills;
            this.volunteer = this.data.volunteer;
      }

      _createClass(Info, [{
            key: 'getBasicInfo',
            value: function getBasicInfo() {

                  return '\n      <section>\n        <h3>Basic info</h3>\n        <p><strong>First Name:</strong> ' + this.name + '</p>\n        <p><strong>Last Name:</strong> ' + this.lastName + '</p>\n        <p><strong>Email:</strong> ' + this.email + '</p>\n      </section>\n      ';
            }
      }, {
            key: 'getProjects',
            value: function getProjects() {

                  var list = ['<h3>Projects</h3>'];

                  Object.values(this.projects).forEach(function (project) {

                        var singleProject = new __WEBPACK_IMPORTED_MODULE_1__project__["a" /* default */](project.id, project.name, '', project.url, project.shortDescription);

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

                  var singleProject = new __WEBPACK_IMPORTED_MODULE_1__project__["a" /* default */]('', project.name, project.dates, project.url, '', project.description, project.stack);

                  return singleProject.displayLong();
            }
      }, {
            key: 'getExperiences',
            value: function getExperiences() {

                  var list = ['<h3>Experiences</h3>'];

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

                  var list = ['<h3>Education</h3>'];

                  Object.values(this.education).forEach(function (education) {

                        var singleEducation = new __WEBPACK_IMPORTED_MODULE_3__education__["a" /* default */](education.id, education.name, education.institution, education.dates, education.description);

                        list.push(singleEducation.display());
                  });

                  return list.join('');
            }
      }, {
            key: 'getSkills',
            value: function getSkills() {

                  var list = [];

                  Object.values(this.skills.list).forEach(function (skill) {
                        return list.push('<li>' + skill + '</li>');
                  });

                  return '<h3>Skills</h3><ul>' + list.join('') + '</ul>';
            }
      }, {
            key: 'getVolunteer',
            value: function getVolunteer() {

                  var list = ['<h3>Volunteer Experience</h3>'];

                  Object.values(this.volunteer).forEach(function (volunteer) {

                        var singleVolunteer = new __WEBPACK_IMPORTED_MODULE_4__volunteer__["a" /* default */](volunteer.id, volunteer.name, volunteer.company, volunteer.description);

                        list.push(singleVolunteer.display());
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
      dates: 'Oct 2018 – Dec 2018',
      stack: 'PHP, HTML, CSS, JS, REST API, WooCommerce, WordPress',
      url: 'https://grafomis.rs',
      shortDescription: 'WooCommerce was used as a base to import 6000+ products from external API.',
      description: '\n      WooCommerce was used as a base to import 6000+ products from external API. Custom WordPress plugin was created to handle authentication, \n      automatic import and synchronization of all data (taxonomies, post types, attributes...) for fully functional online shop. \n      Additionally, WooCommerce was customized on frontend to fit needs of printing company.\n      '
    },

    2: {
      id: 2,
      name: 'WordPress custom business solution',
      dates: 'Dec 2017 – Feb 2018',
      stack: 'PHP, HTML, CSS, JS, WordPress',
      url: 'https://www.physicianpartnersofamerica.com',
      shortDescription: 'Custom WordPress solution heavily relying on Google maps javascript API.',
      description: '\n      Custom WordPress solution heavily relying on Google maps javascript API. Project included custom WP theme and plugins, integrating various external API\'s. \n      My role was a team lead of small dev team consisting of 3 members covering both frontend and backend tasks. Close cooperation with designer was also important for better design implementation. \n      Performance-wise I write a lot of requested features to avoid using plugins that add extra functionalities which are not needed on the site.\n      Used on project: PHP, jQuery, JavaScript, SCSS, Gulp, Composer, WordPress.\n      Website description: Doctors and clinics listing using Google maps displaying results by distance from visitor location. Live search on Google maps for locations. Other common website pages are also implemented and designed.\n      '
    },

    3: {
      id: 3,
      name: 'WordPress Widget Builder Framework',
      dates: 'Mar 2017',
      stack: 'PHP, HTML, CSS, JS, WordPress',
      url: 'https://github.com/AleksandarPredic/WordPress-Widget-Builder',
      shortDescription: 'The WordPress Widget Builder serves as a framework to quickly build your WordPress widgets.',
      description: '\n      The WordPress Widget Builder serves as a framework to quickly build your WordPress widgets.\n      You can make configuration array of desired widget name, description, fields... and the framework will create widget admin part for you. Leaving you to worry only about widget frontend output.\n      '
    },
    4: {
      id: 4,
      name: 'Woo Shop Slider - WordPress plugin',
      dates: 'Feb 2016',
      stack: 'PHP, HTML, CSS, JS, WordPress',
      url: 'http://codecanyon.net/item/woo-shop-slider-woocommerce-slider-for-products-single-product-and-categories/14840747',
      shortDescription: 'With this WordPress plugin You can create amazing content with one of 8 totally different WooCommerce slider styles.',
      description: '\n      With this WordPress plugin You can create amazing content with one of 8 totally different WooCommerce slider styles. Woo Shop Slider is slider for products, single product and categories from Your WooCommerce shop.\n      In this project I was in charge of both frontend and backend development following Marjan Tosic designs.\n      Free lite version of the plugin can be downloaded here: https://wordpress.org/plugins/woo-shop-slider-lite/\n      '
    },
    5: {
      id: 5,
      name: 'WordPress Test HQ service',
      dates: 'Feb 2016',
      stack: 'PHP, HTML, CSS, JS, WordPress',
      url: '',
      shortDescription: 'WordPress test headquarters is a service where clients can test any WordPress theme or plugin before purchase.',
      description: '\n      Project descriptionWordPress test headquarters is a service where clients can test any WordPress theme or plugin before purchase. \n      It is built for premium theme and plugin developers and offer instant creation of demo site for limited time.\n      '
    },
    6: {
      id: 6,
      name: 'FashionPress - WordPress Theme for Fashion Bloggers',
      dates: 'Oct 2015',
      stack: 'PHP, HTML, CSS, JS, WordPress',
      url: 'http://themeforest.net/item/fashionpress-wordpress-theme-for-fashion-bloggers-responsive-and-creative-blog-template/13026365',
      shortDescription: 'FashionPress is a stylish and creative WordPress fashion blog template.',
      description: '\n      FashionPress is a stylish and creative WordPress fashion blog template packed with everything that you need to create a perfect personal fashion blog for you. \n      <br />\n      I was responsible for backend development and fulfilling Themeforest\'s WordPress theme submission requirements. WordPress theme supports WooCommerce and shop frontend coding was also my task. \n      Nikola Randjelovic worked on backend, while Milos Ristic was responsible for frontend and some backend development. Design was done by Vladimir Devic and Marjan Tosic who was also a team leader.\n      '
    },
    7: {
      id: 7,
      name: 'HotMag – WordPress News And Magazine Responsive Theme',
      dates: 'Jun 2015',
      stack: 'PHP, HTML, CSS, JS, WordPress',
      url: 'http://themeforest.net/item/hotmag-wordpress-news-magazine-responsive-theme/11657078',
      shortDescription: 'Hotmag is a responsive and retina ready news and magazine WordPress template.',
      description: '\n      Hotmag is a responsive and retina ready news and magazine WordPress template. \n      It is intuitive and friendly for beginners but it also allows professional users to create some amazing stuff.\n      '
    },
    8: {
      id: 8,
      name: 'Alfa - Responsive Parallax WordPress Theme',
      dates: 'Apr 2015',
      stack: 'PHP, HTML, CSS, JS, WordPress',
      url: 'http://themeforest.net/item/alfa-responsive-parallax-wordpress-theme/10764656',
      shortDescription: 'Alfa is a clean and professional, responsive one-page portfolio WordPress theme.',
      description: '\n      As a part of backend development team I contributed publishing this project. Alfa is a clean and professional, responsive one-page portfolio \n      WordPress theme made for freelance web designers, freelancers, web agencies, artists and other creatives and entrepreneurs.\n      '
    },
    9: {
      id: 9,
      name: 'Glyph - Responsive News, Blog & Magazine WP Theme',
      dates: 'Apr 2015',
      stack: 'PHP, HTML, CSS, JS, WordPress',
      url: 'http://themeforest.net/item/glyph-responsive-news-blog-magazine-wp-theme/11156144',
      shortDescription: 'Glyph is a clean WordPress premium theme perfect for news, blog or magazine.',
      description: '\n      Thanks to Shindiri development team Glyph WordPress premium theme was created. I was in charge of backend development, colleague (Aleksandar Blagotic) took care of frontend part of the project. \n      Thanks to our Designer, Glyph look so great and clean perfect for news, blog or magazine theme.\n      '
    },
    10: {
      id: 10,
      name: 'Online shop',
      dates: 'Jan 2015',
      stack: 'PHP, HTML, CSS, JS, WordPress',
      url: 'http://greencentar.com',
      shortDescription: 'Online WooCommerce shop development.',
      description: '\n      Online shop development. Shop is based on WooCommerce and WordPress. I was responsible for backend development and some frontend adjustments, \n      while collaborator (Nikola Mladenovic) was in charge for products pages design and site promotion.\n      '
    },
    11: {
      id: 11,
      name: 'Sierra - One Page Responsive WordPress Theme',
      dates: 'Dec 2014',
      stack: 'PHP, HTML, CSS, JS, WordPress',
      url: 'http://themeforest.net/item/sierra-one-page-responsive-wordpress-theme/10302986',
      shortDescription: 'One Page Responsive WordPress agency theme.',
      description: '\n      My first WP template published on themeforest.net. In Sierra project I developed whole backend of the WordPress theme. Our designer created theme design, colleague \n      frontend developer, created html theme and my task was converting the html theme into WordPress premium theme. Sierra One-Page Portfolio WordPress Theme is easy to use \n      one page wp template. With very little modification, this flexible, responsive WordPress theme can be used to create Agency website, Freelancer, Photography, Creative, Fashion, \n      Magazine or Blog website. Sierra WP theme uses Visual Composer packed with custom shortcodes designed for Sierra template.\n      '
    },
    12: {
      id: 12,
      name: 'Backend development of an online shop',
      dates: 'Dec 2013',
      stack: 'PHP, HTML, CSS',
      url: 'http://www.jezdicrakija.com',
      shortDescription: 'Custom MVC framework development for an online shop.',
      description: '\n      In cooperation with company designer, who was responsible for fronted design, I developed an online shop site www.jezdicrakija.com using custom made MVC framework.\n      '
    }
  },
  experiences: {
    1: {
      id: 1,
      position: 'Web development team lead, lead WordPress developer',
      dates: 'Oct 2017 – Present',
      companyName: 'Shindiri Studio',
      companyUrl: 'https://www.shindiristudio.com',
      description: ['PHP, HTML, CSS, JavaScript, WordPress themes and plugin development.', 'Clients custom solutions development.', 'Create, coordinate, estimate and support all tasks within the development team.', 'Work together with product management, business and design teams to ensure fluent development workflow.', 'Lead the day to day coding.']
    },
    2: {
      id: 2,
      position: 'PHP Web Developer, WordPress Developer',
      dates: 'Oct 2014 – Oct 2017',
      companyName: 'Shindiri Studio',
      companyUrl: 'https://www.shindiristudio.com',
      description: ['HTML, CSS, JavaScript.', 'PHP, WordPress themes and plugin development.', 'WordPress design patterns.', 'Isolate and resolve current issues.']
    },
    3: {
      id: 3,
      position: 'WordPress course lecturer. Development of WordPress themes and plugins. PSD to WP.',
      dates: 'Mar 2017 – Oct 2017',
      companyName: 'IT Centar',
      companyUrl: 'https://itcentar.rs',
      description: ['WordPress course. Development of WordPress themes and plugins. PSD to WP conversion.']
    },
    4: {
      id: 4,
      position: 'Web developer',
      dates: 'Jul 2014 – Oct 2014',
      companyName: 'ApexSQL',
      companyUrl: 'https://www.apexsql.com',
      description: ['Work within a small local team using Scrum software development methodologies.', 'Update and improve company website and internal web applications.', 'Maintain WordPress websites.']
    },
    5: {
      id: 5,
      position: 'PHP / Web developer',
      dates: 'May 2014 – Jul 2014',
      companyName: 'Freelancer',
      companyUrl: '',
      description: ['Frontend Development - HTML, CSS, jQuery.', 'Backend Development PHP, MySQL.', 'Development of Magento 1 theme.']
    },
    6: {
      id: 6,
      position: 'Administrator and content manager',
      dates: 'Jul 2012 – May 2014',
      companyName: 'Inter Casa Ambienta',
      companyUrl: 'http://www.adriatiko.com/o-nama.htm',
      description: ['Administration of high ranked web sites:\n        <ul>\n          <li><a href="https://www.tvarenasport.com" target="_blank" rel="nofollow">Arena sport</a></li>\n          <li><a href="https://www.aerogaga.com" target="_blank" rel="nofollow">Aerogaga</a></li>\n          <li><a href="https://www.stetoskop.info" target="_blank" rel="nofollow">Stetoskop</a></li>\n        </ul>', 'Brand development, web site traffic growth, web site and advertising revenue.']
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
  },
  skills: {
    list: ['PHP', 'OOP', 'MySQl', 'HTML', 'CSS', 'SCSS', 'LESS', 'JS', 'ECMAScript', 'jQuery', 'Webpack', 'Gulp', 'WordPress', 'Basic Laravel', 'Web development', 'Backend development', 'Frontend development', 'JIRA', 'Basic photoshop']
  },
  volunteer: {
    1: {
      id: 1,
      name: 'Community - meetup organizer',
      company: 'WordPress',
      description: [{
        name: '#WPNis',
        dates: 'May 2016 – Present.',
        url: 'https://www.meetup.com/wordpress-nis',
        description: 'Founder of Nis WordPress community as part of WPSerbia community. With help of colleague Milan Djordjevic we started #WPNis to promote WordPress in our town.'
      }]
    },
    2: {
      id: 3,
      name: 'WordCamps and community',
      company: 'WordPress',
      description: [{
        name: 'WordCamp Belgrade, Serbia - #WCBDG 2017',
        dates: 'May 2017',
        url: 'https://2017.belgrade.wordcamp.org/speaker/aleksandar-predic',
        description: 'Volunteer and speaker'
      }, {
        name: 'WordCamp Europe, Belgrade, Serbia - #WCEU 2018',
        dates: 'June 2018',
        url: 'https://2018.europe.wordcamp.org/organizers',
        description: 'Organizer - local team'
      }, {
        name: 'WordCamp Europe, Berlin, Germany - #WCEU 2019',
        dates: 'June 2019',
        url: 'https://2019.europe.wordcamp.org/organisers',
        description: 'Organizer - community team'
      }]
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
  function Project(id, name, dates) {
    var url = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
    var shortDescription = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
    var description = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
    var stack = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '';

    _classCallCheck(this, Project);

    this.id = id;
    this.name = name;
    this.dates = dates;
    this.stack = stack;
    this.url = url;
    this.shortDescription = shortDescription;
    this.description = description;
  }

  _createClass(Project, [{
    key: 'displayShort',
    value: function displayShort() {

      var url = this.url ? '<li><strong>Url:</strong> <a href="' + this.url + '" target="_blank" rel="nofollow">' + this.url + '</a></li>' : '';

      return '\n    <section>\n    <ul>\n      <li><strong>Id:</strong> ' + this.id + '</li>\n      <li><strong>Project name:</strong> ' + this.name + '</li>\n      <li><strong>Short description:</strong> ' + this.shortDescription + '</li>\n      ' + url + '\n    </ul>\n    </section>\n    ';
    }
  }, {
    key: 'displayLong',
    value: function displayLong() {

      var url = this.url ? '<li><strong>Url:</strong> <a href="' + this.url + '" target="_blank" rel="nofollow">' + this.url + '</a></li>' : '';

      return '\n    <section>\n    <h4>Project name: ' + this.name + '</h4>\n    <p><strong>Dates:</strong> ' + this.dates + '</p>\n    <ul>\n      ' + url + '\n      <li><strong>Stack:</strong> ' + this.stack + '</li>\n      <li><strong>Description:</strong> ' + this.description + '</li>\n    </ul>\n    </section>\n    ';
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

      return '\n    <section>\n    <ul>\n      <li><strong>Id:</strong> ' + this.id + '</li>\n      <li><strong>Position:</strong> ' + this.position + '</li>\n      <li><strong>Company name:</strong> ' + this.companyName + '</li>\n    </ul>\n    </section>\n    ';
    }
  }, {
    key: 'displayLong',
    value: function displayLong() {

      var list = this.description.map(function (description) {
        return '<li>' + description + '</li>';
      }).join('');

      return '\n    <section>\n    <h4>Position: ' + this.position + '</h4>\n    <p><strong>Company:</strong> ' + this.companyName + '</p>\n    <p><strong>Dates:</strong> ' + this.dates + '</p>\n    <p><strong>Company website:</strong> <a href="' + this.companyUrl + '" target="_blank" rel="nofollow">' + this.companyUrl + '</a></p>\n    <ul>\n      <li><strong>Description:</strong> <ul>' + list + '</ul></li>\n    </ul>\n    </section>\n    ';
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
    _classCallCheck(this, Education);

    this.id = id;
    this.name = name;
    this.institution = institution;
    this.dates = dates;
  }

  _createClass(Education, [{
    key: "display",
    value: function display() {

      return "\n    <section>\n    <ul>\n      <li><strong>Name:</strong> " + this.name + "</li>\n      <li><strong>Institution:</strong> " + this.institution + "</li>\n      <li><strong>Dates:</strong> " + this.dates + "</li>\n    </ul>\n    </section>\n    ";
    }
  }]);

  return Education;
}();

/* harmony default export */ __webpack_exports__["a"] = (Education);

/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Volunteer = function () {
  function Volunteer(id, name, company) {
    var description = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    _classCallCheck(this, Volunteer);

    this.id = id;
    this.name = name;
    this.company = company;
    this.description = description;
  }

  _createClass(Volunteer, [{
    key: 'display',
    value: function display() {

      var list = [];

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.description[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var description = _step.value;


          list.push('<ul>\n          <li><strong>Name:</strong>' + description.name + '</li>\n          <li><strong>Dates:</strong>' + description.dates + '</li>\n          <li><strong>Url:</strong>' + description.url + '</li>\n          <li><strong>Description:</strong>' + description.description + '</li>\n        </ul>');
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return '\n    <section>\n      <ul>\n        <li><strong>Name:</strong> ' + this.name + '</li>\n        <li><strong>Company:</strong> ' + this.company + '</li>\n        <li><strong>Causes:</strong> ' + list.join('') + '</li>\n      </ul>\n    </section>\n    ';
    }
  }]);

  return Volunteer;
}();

/* harmony default export */ __webpack_exports__["a"] = (Volunteer);

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map