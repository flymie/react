module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/forSSr.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/component/error/test/test/view.jsx":
/*!************************************************!*\
  !*** ./app/component/error/test/test/view.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar Page404 =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Page404, _React$Component);\n\n  function Page404() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Page404);\n\n    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Page404).apply(this, arguments));\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Page404, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {}\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {}\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {}\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"h1\", null, \"\\u6D4B\\u8BD5\\u591A\\u5C42\"));\n    }\n  }]);\n\n  return Page404;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page404);\n\n//# sourceURL=webpack:///./app/component/error/test/test/view.jsx?");

/***/ }),

/***/ "./app/component/error/view.jsx":
/*!**************************************!*\
  !*** ./app/component/error/view.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar Page404 =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Page404, _React$Component);\n\n  function Page404() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Page404);\n\n    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Page404).apply(this, arguments));\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Page404, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {}\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {}\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {}\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"h1\", null, \"404\\uFF0C\\u53EF\\u80FD\\u641E\\u9519\\u4E86\\uFF5E\"));\n    }\n  }]);\n\n  return Page404;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page404);\n\n//# sourceURL=webpack:///./app/component/error/view.jsx?");

/***/ }),

/***/ "./app/component/home/list/action.js":
/*!*******************************************!*\
  !*** ./app/component/home/list/action.js ***!
  \*******************************************/
/*! exports provided: changeData, increaseAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeData\", function() { return changeData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"increaseAction\", function() { return increaseAction; });\n/* harmony import */ var _lib_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/public */ \"./app/lib/public.js\");\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ \"./app/component/home/list/type.js\");\n\n\nvar changeData = Object(_lib_public__WEBPACK_IMPORTED_MODULE_0__[\"makeActionCreator\"])(_type__WEBPACK_IMPORTED_MODULE_1__[\"changeData\"], 'data');\nvar increaseAction = Object(_lib_public__WEBPACK_IMPORTED_MODULE_0__[\"makeActionCreator\"])(_type__WEBPACK_IMPORTED_MODULE_1__[\"increase\"], 'data');\n\n//# sourceURL=webpack:///./app/component/home/list/action.js?");

/***/ }),

/***/ "./app/component/home/list/reducer.js":
/*!********************************************!*\
  !*** ./app/component/home/list/reducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ \"./app/component/home/list/type.js\");\n\nvar defaultState = {\n  value: 0\n};\n\nvar home = function home() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _type__WEBPACK_IMPORTED_MODULE_0__[\"changeData\"]:\n      return Object.assign({}, state, action.data);\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (home);\n\n//# sourceURL=webpack:///./app/component/home/list/reducer.js?");

/***/ }),

/***/ "./app/component/home/list/saga.js":
/*!*****************************************!*\
  !*** ./app/component/home/list/saga.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/http */ \"./app/config/http.js\");\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type */ \"./app/component/home/list/type.js\");\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action */ \"./app/component/home/list/action.js\");\n\n\nvar _marked =\n/*#__PURE__*/\n_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getMusic),\n    _marked2 =\n/*#__PURE__*/\n_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(main);\n\n\n\n\n\n\nfunction getMusic(action) {\n  var result;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getMusic$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return _config_http__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get('/api/v2/music/search', action.data);\n\n        case 2:\n          result = _context.sent;\n\n          if (!(result.code === 0)) {\n            _context.next = 8;\n            break;\n          }\n\n          _context.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])(Object(_action__WEBPACK_IMPORTED_MODULE_4__[\"changeData\"])({\n            value: result.count\n          }));\n\n        case 6:\n          _context.next = 11;\n          break;\n\n        case 8:\n          console.log('else');\n          _context.next = 11;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])(Object(_action__WEBPACK_IMPORTED_MODULE_4__[\"changeData\"])({\n            value: result.count\n          }));\n\n        case 11:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked);\n}\n\n;\n\nfunction main() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function main$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])(_type__WEBPACK_IMPORTED_MODULE_3__[\"increase\"], getMusic);\n\n        case 2:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _marked2);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (main);\n\n//# sourceURL=webpack:///./app/component/home/list/saga.js?");

/***/ }),

/***/ "./app/component/home/list/type.js":
/*!*****************************************!*\
  !*** ./app/component/home/list/type.js ***!
  \*****************************************/
/*! exports provided: changeData, increase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeData\", function() { return changeData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"increase\", function() { return increase; });\nvar changeData = Symbol('CHANGEDATA');\nvar increase = Symbol('INCREASE');\n\n//# sourceURL=webpack:///./app/component/home/list/type.js?");

/***/ }),

/***/ "./app/component/home/list/view.jsx":
/*!******************************************!*\
  !*** ./app/component/home/list/view.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./action */ \"./app/component/home/list/action.js\");\n\n\n\n\n\n\n\n\n\n\n\nvar Container =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Container, _React$Component);\n\n  function Container(props) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Container);\n\n    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Container).call(this, props));\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Container, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {}\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {}\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {}\n  }, {\n    key: \"render\",\n    value: function render() {\n      var arr = [1, 2, 3];\n      var _this$props = this.props,\n          value = _this$props.value,\n          dispatch = _this$props.dispatch;\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"a\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"span\", null, value), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"button\", {\n        onClick: function onClick() {\n          dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_9__[\"increaseAction\"])({\n            q: 'k'\n          }));\n        }\n      }, \"getMusic\")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"h1\", {\n        className: \"a_b\"\n      }, \"hello, world!\"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"p\", {\n        className: \"background\"\n      }, \"test speed\"), arr.map(function (v, index) {\n        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"p\", {\n          key: \"\".concat(index + 1)\n        }, v);\n      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"Link\"], {\n        to: \"/routerV4/1?a=\".concat(encodeURIComponent('4&&-.2'), \"&b=\").concat(encodeURIComponent('5=&'))\n      }, \"\\u4F20\\u5165param,query\"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"p\", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"Link\"], {\n        to: '/uRLSearchParams/1?a=4&&-.2)}&b=5=&'\n      }, \"\\u901A\\u8FC7URLSearchParams\\u89E3\\u6790\\u67E5\\u8BE2\\u7684\\u5B57\\u6BB5\")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"p\", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"Link\"], {\n        to: \"/home/list2\"\n      }, \"homeList2\")));\n    }\n  }]);\n\n  return Container;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\nContainer.propTypes = {\n  value: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,\n  // onIncreaseClick: PropTypes.func.isRequired,\n  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return Object.assign({}, state.homeList);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"connect\"])(mapStateToProps // mapDispatchToProps,\n)(Container));\n\n//# sourceURL=webpack:///./app/component/home/list/view.jsx?");

/***/ }),

/***/ "./app/component/home/list2/action.js":
/*!********************************************!*\
  !*** ./app/component/home/list2/action.js ***!
  \********************************************/
/*! exports provided: changeData, increaseAction, init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeData\", function() { return changeData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"increaseAction\", function() { return increaseAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _lib_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/public */ \"./app/lib/public.js\");\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ \"./app/component/home/list2/type.js\");\n\n\nvar changeData = Object(_lib_public__WEBPACK_IMPORTED_MODULE_0__[\"makeActionCreator\"])(_type__WEBPACK_IMPORTED_MODULE_1__[\"changeData\"], 'data');\nvar increaseAction = Object(_lib_public__WEBPACK_IMPORTED_MODULE_0__[\"makeActionCreator\"])(_type__WEBPACK_IMPORTED_MODULE_1__[\"increase\"], 'data');\nvar init = Object(_lib_public__WEBPACK_IMPORTED_MODULE_0__[\"makeActionCreator\"])(_type__WEBPACK_IMPORTED_MODULE_1__[\"init\"], 'data');\n\n//# sourceURL=webpack:///./app/component/home/list2/action.js?");

/***/ }),

/***/ "./app/component/home/list2/reducer.js":
/*!*********************************************!*\
  !*** ./app/component/home/list2/reducer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ \"./app/component/home/list2/type.js\");\n\nvar defaultState = {\n  value: 0,\n  q: 'k'\n};\n\nvar home = function home() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _type__WEBPACK_IMPORTED_MODULE_0__[\"init\"]:\n      return Object.assign(state, defaultState);\n\n    case _type__WEBPACK_IMPORTED_MODULE_0__[\"changeData\"]:\n      return Object.assign({}, state, action.data);\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (home);\n\n//# sourceURL=webpack:///./app/component/home/list2/reducer.js?");

/***/ }),

/***/ "./app/component/home/list2/saga.js":
/*!******************************************!*\
  !*** ./app/component/home/list2/saga.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/http */ \"./app/config/http.js\");\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type */ \"./app/component/home/list2/type.js\");\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action */ \"./app/component/home/list2/action.js\");\n\n\nvar _marked =\n/*#__PURE__*/\n_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(initFn),\n    _marked2 =\n/*#__PURE__*/\n_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getMusic),\n    _marked3 =\n/*#__PURE__*/\n_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(main);\n\n\n\n\n\n\nfunction initFn(action) {\n  var result;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function initFn$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return _config_http__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get('https://api.douban.com/v2/music/search', action.data);\n\n        case 2:\n          result = _context.sent;\n\n          if (!(result.code === 0)) {\n            _context.next = 8;\n            break;\n          }\n\n          _context.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])(Object(_action__WEBPACK_IMPORTED_MODULE_4__[\"changeData\"])({\n            value: result.count\n          }));\n\n        case 6:\n          _context.next = 10;\n          break;\n\n        case 8:\n          _context.next = 10;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])(Object(_action__WEBPACK_IMPORTED_MODULE_4__[\"changeData\"])({\n            value: result.count\n          }));\n\n        case 10:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked);\n}\n\n;\n\nfunction getMusic(action) {\n  var result;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getMusic$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.next = 2;\n          return _config_http__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get('/api/v2/music/search', action.data);\n\n        case 2:\n          result = _context2.sent;\n\n          if (!(result.code === 0)) {\n            _context2.next = 8;\n            break;\n          }\n\n          _context2.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])(Object(_action__WEBPACK_IMPORTED_MODULE_4__[\"changeData\"])({\n            value: result.count\n          }));\n\n        case 6:\n          _context2.next = 11;\n          break;\n\n        case 8:\n          console.log('else');\n          _context2.next = 11;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])(Object(_action__WEBPACK_IMPORTED_MODULE_4__[\"changeData\"])({\n            value: result.count\n          }));\n\n        case 11:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _marked2);\n}\n\n;\n\nfunction main() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function main$(_context3) {\n    while (1) {\n      switch (_context3.prev = _context3.next) {\n        case 0:\n          _context3.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])(_type__WEBPACK_IMPORTED_MODULE_3__[\"init\"], initFn);\n\n        case 2:\n          _context3.next = 4;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])(_type__WEBPACK_IMPORTED_MODULE_3__[\"increase\"], getMusic);\n\n        case 4:\n        case \"end\":\n          return _context3.stop();\n      }\n    }\n  }, _marked3);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (main);\n\n//# sourceURL=webpack:///./app/component/home/list2/saga.js?");

/***/ }),

/***/ "./app/component/home/list2/type.js":
/*!******************************************!*\
  !*** ./app/component/home/list2/type.js ***!
  \******************************************/
/*! exports provided: changeData, increase, init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeData\", function() { return changeData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"increase\", function() { return increase; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\nvar changeData = Symbol('CHANGEDATA');\nvar increase = Symbol('INCREASE');\nvar init = Symbol('INIT');\n\n//# sourceURL=webpack:///./app/component/home/list2/type.js?");

/***/ }),

/***/ "./app/component/home/list2/view.jsx":
/*!*******************************************!*\
  !*** ./app/component/home/list2/view.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./action */ \"./app/component/home/list2/action.js\");\n\n\n\n\n\n\n\n\n\n\nvar Container =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Container, _React$Component);\n\n  function Container(props) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Container);\n\n    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Container).call(this, props));\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Container, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {}\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {}\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {}\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          value = _this$props.value,\n          dispatch = _this$props.dispatch;\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"a\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"span\", null, value), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"button\", {\n        onClick: function onClick() {\n          dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_8__[\"increaseAction\"])({\n            q: 'k'\n          }));\n        }\n      }, \"getMusic\")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"h1\", {\n        className: \"a_b\"\n      }, \"homeList2\"));\n    }\n  }], [{\n    key: \"asyncData\",\n    value: function asyncData(store, ctx) {\n      store.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_8__[\"init\"])({\n        q: ctx.params.a\n      }));\n    }\n  }]);\n\n  return Container;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\nContainer.propTypes = {\n  value: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number.isRequired,\n  // onIncreaseClick: PropTypes.func.isRequired,\n  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return Object.assign({}, state.homeList2);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"connect\"])(mapStateToProps // mapDispatchToProps,\n)(Container));\n\n//# sourceURL=webpack:///./app/component/home/list2/view.jsx?");

/***/ }),

/***/ "./app/component/routerV4/uRLSearchParams.jsx":
/*!****************************************************!*\
  !*** ./app/component/routerV4/uRLSearchParams.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nvar RouterV4 =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(RouterV4, _React$Component);\n\n  function RouterV4() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, RouterV4);\n\n    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(RouterV4).apply(this, arguments));\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(RouterV4, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      console.log(this.props);\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {}\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {}\n  }, {\n    key: \"render\",\n    value: function render() {\n      var params = this.props.match.params;\n      var search = this.props.location.search;\n      var searchParams = new URLSearchParams(search);\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"h1\", null, \"\\u6574\\u7406\\u4E00\\u4E9B\\u5173\\u4E8Ereact-router v4 \\u7684\\u4E00\\u4E9B\\u4F7F\\u7528\"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"h2\", null, \"URLSearchParams \\u4F7F\\u7528\\u6709\\u517C\\u5BB9\\u95EE\\u9898\"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"p\", null, \"\\u4F20\\u56DE\\u7684\\u53C2\\u6570id=\".concat(params.id)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", null, \"\\u4F7F\\u7528URLSearchParams.get(key)\\u83B7\\u53D6\", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"p\", null, \"a:\", searchParams.get('a'))));\n    }\n  }]);\n\n  return RouterV4;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\nRouterV4.propTypes = {\n  match: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape(),\n  location: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape()\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (RouterV4);\n\n//# sourceURL=webpack:///./app/component/routerV4/uRLSearchParams.jsx?");

/***/ }),

/***/ "./app/component/routerV4/view.jsx":
/*!*****************************************!*\
  !*** ./app/component/routerV4/view.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _lib_public__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/public */ \"./app/lib/public.js\");\n\n\n\n\n\n\n\n\n\nvar RouterV4 =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(RouterV4, _React$Component);\n\n  function RouterV4() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, RouterV4);\n\n    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(RouterV4).apply(this, arguments));\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(RouterV4, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      console.log(this.props);\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {}\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {}\n  }, {\n    key: \"render\",\n    value: function render() {\n      var params = this.props.match.params;\n      var search = this.props.location.search;\n      var searchObj = Object(_lib_public__WEBPACK_IMPORTED_MODULE_7__[\"searchToYouWantFn\"])(search);\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"h1\", null, \"\\u6574\\u7406\\u4E00\\u4E9B\\u5173\\u4E8Ereact-router v4 \\u7684\\u4E00\\u4E9B\\u4F7F\\u7528\"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"p\", null, \"\\u4F20\\u56DE\\u7684\\u53C2\\u6570id=\".concat(params.id)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", null, Object.keys(searchObj).map(function (v, key) {\n        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"p\", {\n          key: \"\".concat(key + 1)\n        }, \"\".concat(v, \": \").concat(searchObj[v]));\n      })));\n    }\n  }]);\n\n  return RouterV4;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\nRouterV4.propTypes = {\n  match: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape(),\n  location: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape()\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (RouterV4);\n\n//# sourceURL=webpack:///./app/component/routerV4/view.jsx?");

/***/ }),

/***/ "./app/config/http.js":
/*!****************************!*\
  !*** ./app/config/http.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qs */ \"qs\");\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar $http = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create(); // 添加请求拦截器\n\n$http.interceptors.request.use(function (config) {\n  // 在发送请求之前做些什么\n  return config;\n}, function (error) {\n  // 对请求错误做些什么\n  return Promise.reject(error);\n}); // 添加响应拦截器\n\n$http.interceptors.response.use(function (response) {\n  // 对响应数据做点什么\n  return response;\n}, function (error) {\n  // 对响应错误做点什么\n  return Promise.reject(error);\n});\nvar $api = {\n  // get 请求\n  get: function () {\n    var _get = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n    /*#__PURE__*/\n    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url, data) {\n      var type,\n          config,\n          res,\n          _args = arguments;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              type = _args.length > 2 && _args[2] !== undefined ? _args[2] : 'get';\n              config = _args.length > 3 && _args[3] !== undefined ? _args[3] : {};\n              _context.prev = 2;\n              _context.next = 5;\n              return $http[type](url, Object.assign({}, config, {\n                params: data\n              }));\n\n            case 5:\n              res = _context.sent;\n              return _context.abrupt(\"return\", new Promise(function (resolve, reject) {\n                if (res.status === 200) {\n                  resolve(res.data);\n                } else {\n                  reject(res);\n                }\n              })[\"catch\"](function (e) {\n                console.log(e);\n              }));\n\n            case 9:\n              _context.prev = 9;\n              _context.t0 = _context[\"catch\"](2);\n              alert('服务器出错');\n              console.log(_context.t0);\n\n            case 13:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[2, 9]]);\n    }));\n\n    function get(_x, _x2) {\n      return _get.apply(this, arguments);\n    }\n\n    return get;\n  }(),\n  // post/patch\n  post: function () {\n    var _post = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n    /*#__PURE__*/\n    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(url, data) {\n      var type,\n          config,\n          res,\n          _args2 = arguments;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              type = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : 'post';\n              config = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : {};\n              _context2.prev = 2;\n              _context2.next = 5;\n              return $http[type](url, data, Object.assign({}, config, {\n                transformResponse: [function (param) {\n                  return qs__WEBPACK_IMPORTED_MODULE_3___default.a.stringify(param);\n                }]\n              }));\n\n            case 5:\n              res = _context2.sent;\n              return _context2.abrupt(\"return\", new Promise(function (resolve, reject) {\n                if (res.status === 200) {\n                  resolve(res.data);\n                } else {\n                  reject(res);\n                }\n              })[\"catch\"](function (e) {\n                console.log(e);\n              }));\n\n            case 9:\n              _context2.prev = 9;\n              _context2.t0 = _context2[\"catch\"](2);\n              alert('服务器出错');\n              console.log(_context2.t0);\n\n            case 13:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[2, 9]]);\n    }));\n\n    function post(_x3, _x4) {\n      return _post.apply(this, arguments);\n    }\n\n    return post;\n  }()\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ($api);\n\n//# sourceURL=webpack:///./app/config/http.js?");

/***/ }),

/***/ "./app/createStore.js":
/*!****************************!*\
  !*** ./app/createStore.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _middleware_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middleware/logger */ \"./app/middleware/logger.js\");\n/* harmony import */ var _rootSagas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rootSagas */ \"./app/rootSagas.js\");\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers */ \"./app/reducers.js\");\n // import thunkMiddleware from 'redux-thunk';\n\n\n\n\n\nvar defaultStore;\n\nif (typeof window !== 'undefined') {\n  defaultStore = window.__STORE__ || {};\n}\n\nvar rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])(_reducers__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nvar middlewares = [];\nvar sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()(_rootSagas__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nmiddlewares.push(sagaMiddleware);\n\nif (true) {\n  middlewares.push(_middleware_logger__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n}\n\nvar middlewareEnhancer = redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"].apply(void 0, middlewares);\nvar composedEnhancers = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"compose\"])(middlewareEnhancer);\nvar store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(rootReducer, defaultStore, composedEnhancers);\nsagaMiddleware.run(_rootSagas__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\n\n//# sourceURL=webpack:///./app/createStore.js?");

/***/ }),

/***/ "./app/forSSr.js":
/*!***********************!*\
  !*** ./app/forSSr.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createStore */ \"./app/createStore.js\");\n/* harmony import */ var _routes_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/index */ \"./app/routes/index.js\");\n// import { renderRoutes } from 'react-router-config';\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  store: _createStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  router: _routes_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"] // router: renderRoutes(router),\n\n});\n\n//# sourceURL=webpack:///./app/forSSr.js?");

/***/ }),

/***/ "./app/lib/public.js":
/*!***************************!*\
  !*** ./app/lib/public.js ***!
  \***************************/
/*! exports provided: makeActionCreator, convertImgToBase64, searchToYouWantFn, filterEmptyProp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeActionCreator\", function() { return makeActionCreator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertImgToBase64\", function() { return convertImgToBase64; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchToYouWantFn\", function() { return searchToYouWantFn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterEmptyProp\", function() { return filterEmptyProp; });\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"@babel/runtime/helpers/typeof\");\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);\n\n// 用于生成 action creator 的函数\nvar makeActionCreator = function makeActionCreator(type) {\n  for (var _len = arguments.length, argNames = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    argNames[_key - 1] = arguments[_key];\n  }\n\n  return function () {\n    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      args[_key2] = arguments[_key2];\n    }\n\n    var action = {\n      type: type\n    };\n    argNames.forEach(function (arg, index) {\n      action[argNames[index]] = args[index];\n    });\n    return action;\n  };\n}; // 把图片转化为base64\n\nvar convertImgToBase64 = function convertImgToBase64(url, callback) {\n  var outputFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'image/png';\n  var canvas = document.createElement('CANVAS');\n  var ctx = canvas.getContext('2d');\n  var image = new Image();\n  image.crossOrigin = 'Anonymous';\n\n  image.onload = function () {\n    canvas.height = image.height;\n    canvas.width = image.width;\n    ctx.drawImage(image, 0, 0);\n    var dataURL = canvas.toDataURL(outputFormat);\n    callback.call(this, dataURL);\n    canvas = null;\n  };\n\n  image.src = url;\n}; // 从url的search拿字段\n\nvar searchToYouWantFn = function searchToYouWantFn(str) {\n  var queryObj = {};\n  var searchStr = str.match(new RegExp('\\\\?(.*)'))[1];\n  var reg = /([^=&]+)=([^&]*)/g;\n  var querys = searchStr.match(reg);\n\n  if (querys) {\n    querys.forEach(function (v) {\n      var query = v.match(new RegExp('([^=]*)=(.*)'));\n      var key = query[1];\n      var value = query[2].replace(/(^\")|(\"$)/g, '');\n      queryObj[key] = decodeURIComponent(value);\n    });\n  }\n\n  return queryObj;\n};\nvar filterEmptyProp = function filterEmptyProp(obj) {\n  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj) !== 'object') return obj;\n  var result = {};\n  var keys = Object.keys(obj);\n\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i];\n\n    if (obj[key] !== '') {\n      result[key] = filterEmptyProp(obj[key]);\n    }\n  }\n\n  return result;\n};\n/**\n * 这是工作用于fetch post文件下载文件的方式。\n */\n// * downloadTemplate(action) {\n//   const res = yield downloadTemplateApi(action.props);\n//   res.blob().then((blob) => {\n//     const elink = document.createElement('a');\n//     elink.style.display = 'none';\n//     elink.href = window.URL.createObjectURL(blob);\n//     document.body.appendChild(elink);\n//     const fileName = res.headers.get('Content-Disposition');\n//     elink.download = fileName;\n//     elink.click();\n//     window.URL.revokeObjectURL(elink.href);\n//     document.body.removeChild(elink);\n//   });\n// };\n\n//# sourceURL=webpack:///./app/lib/public.js?");

/***/ }),

/***/ "./app/middleware/logger.js":
/*!**********************************!*\
  !*** ./app/middleware/logger.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar logger = function logger(store) {\n  return function (next) {\n    return function (action) {\n      // console.group(action.type);\n      // console.info('dispatching', action);\n      var result = next(action); // console.log('next state', store.getState());\n      // console.groupEnd();\n\n      return result;\n    };\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (logger);\n\n//# sourceURL=webpack:///./app/middleware/logger.js?");

/***/ }),

/***/ "./app/reducers.js":
/*!*************************!*\
  !*** ./app/reducers.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_home_list_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/home/list/reducer */ \"./app/component/home/list/reducer.js\");\n/* harmony import */ var _component_home_list2_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/home/list2/reducer */ \"./app/component/home/list2/reducer.js\");\n\n\nvar reducers = {\n  homeList: _component_home_list_reducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  homeList2: _component_home_list2_reducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducers);\n\n//# sourceURL=webpack:///./app/reducers.js?");

/***/ }),

/***/ "./app/rootSagas.js":
/*!**************************!*\
  !*** ./app/rootSagas.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return rootSaga; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_home_list_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/home/list/saga */ \"./app/component/home/list/saga.js\");\n/* harmony import */ var _component_home_list2_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/home/list2/saga */ \"./app/component/home/list2/saga.js\");\n\n\nvar _marked =\n/*#__PURE__*/\n_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);\n\n\n\n\nfunction rootSaga() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"all\"])([Object(_component_home_list_saga__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), Object(_component_home_list2_saga__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()]);\n\n        case 2:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked);\n}\n\n//# sourceURL=webpack:///./app/rootSagas.js?");

/***/ }),

/***/ "./app/routes/error.js":
/*!*****************************!*\
  !*** ./app/routes/error.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_error_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/error/view */ \"./app/component/error/view.jsx\");\n/* harmony import */ var _component_error_test_test_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/error/test/test/view */ \"./app/component/error/test/test/view.jsx\");\n\n\nvar error = [{\n  exact: true,\n  path: '/error',\n  component: _component_error_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}, {\n  exact: true,\n  path: '/error/test/test',\n  component: _component_error_test_test_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (error);\n\n//# sourceURL=webpack:///./app/routes/error.js?");

/***/ }),

/***/ "./app/routes/home.js":
/*!****************************!*\
  !*** ./app/routes/home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_home_list_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/home/list/view */ \"./app/component/home/list/view.jsx\");\n/* harmony import */ var _component_home_list2_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/home/list2/view */ \"./app/component/home/list2/view.jsx\");\n\n\nvar home = [{\n  exact: true,\n  path: '/home',\n  component: _component_home_list_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}, {\n  exact: true,\n  path: '/home/list2/:a',\n  component: _component_home_list2_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (home);\n\n//# sourceURL=webpack:///./app/routes/home.js?");

/***/ }),

/***/ "./app/routes/index.js":
/*!*****************************!*\
  !*** ./app/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"@babel/runtime/helpers/toConsumableArray\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./app/routes/home.js\");\n/* harmony import */ var _routerV4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routerV4 */ \"./app/routes/routerV4.js\");\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error */ \"./app/routes/error.js\");\n\n\n\n\nvar routes = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"]), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_routerV4__WEBPACK_IMPORTED_MODULE_2__[\"default\"]), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_error__WEBPACK_IMPORTED_MODULE_3__[\"default\"]));\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./app/routes/index.js?");

/***/ }),

/***/ "./app/routes/routerV4.js":
/*!********************************!*\
  !*** ./app/routes/routerV4.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_routerV4_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/routerV4/view */ \"./app/component/routerV4/view.jsx\");\n/* harmony import */ var _component_routerV4_uRLSearchParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/routerV4/uRLSearchParams */ \"./app/component/routerV4/uRLSearchParams.jsx\");\n\n\nvar routerV4 = [{\n  exact: true,\n  path: '/routerV4/:id',\n  component: _component_routerV4_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}, {\n  exact: true,\n  path: '/uRLSearchParams/:id',\n  component: _component_routerV4_uRLSearchParams__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (routerV4);\n\n//# sourceURL=webpack:///./app/routes/routerV4.js?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/asyncToGenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/classCallCheck\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/classCallCheck%22?");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/createClass\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/createClass%22?");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/getPrototypeOf\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/getPrototypeOf%22?");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/inherits\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/inherits%22?");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/possibleConstructorReturn\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/possibleConstructorReturn%22?");

/***/ }),

/***/ "@babel/runtime/helpers/toConsumableArray":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/toConsumableArray" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/toConsumableArray\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/toConsumableArray%22?");

/***/ }),

/***/ "@babel/runtime/helpers/typeof":
/*!************************************************!*\
  !*** external "@babel/runtime/helpers/typeof" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/typeof\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/typeof%22?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"qs\");\n\n//# sourceURL=webpack:///external_%22qs%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga\");\n\n//# sourceURL=webpack:///external_%22redux-saga%22?");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga/effects\");\n\n//# sourceURL=webpack:///external_%22redux-saga/effects%22?");

/***/ })

/******/ });