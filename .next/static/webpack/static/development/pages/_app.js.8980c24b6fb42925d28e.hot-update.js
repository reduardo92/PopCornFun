webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/context/MovieProvider.js":
/*!*********************************************!*\
  !*** ./components/context/MovieProvider.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _MovieContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MovieContext */ "./components/context/MovieContext.js");
/* harmony import */ var _useMovieReducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useMovieReducer */ "./components/context/useMovieReducer.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./types */ "./components/context/types.js");







var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\context\\MovieProvider.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }





var log = console.log;
var movieInitalState = {
  current_page: 1,
  total_pages: 0,
  query: 'movie',
  movieDBData: {},
  pageData: {}
};

var StateProvider = function StateProvider(_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(0),
      windowSize = _useState[0],
      setWindowSize = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      toggle = _useState2[0],
      setToggle = _useState2[1];

  var navRef = Object(react__WEBPACK_IMPORTED_MODULE_7__["useRef"])();

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_7__["useReducer"])(_useMovieReducer__WEBPACK_IMPORTED_MODULE_9__["default"], movieInitalState),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  var setCarosuel = function setCarosuel() {
    var tablet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
    var laptop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
    var laptopLg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;

    if (windowSize < 768) {
      return 1;
    } else if (windowSize <= 768 || windowSize < 1280) {
      return tablet;
    } else if (windowSize <= 1280 || windowSize < 2000) {
      return laptop;
    } else if (windowSize >= 2000) {
      return laptopLg;
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    setWindowSize(window.innerWidth);
  }, []);
  log("api_key=69a209b5d508b36379577751e571ebe9");
  log(_types__WEBPACK_IMPORTED_MODULE_10__["API_KEY"]);
  return __jsx(_MovieContext__WEBPACK_IMPORTED_MODULE_8__["default"].Provider, {
    value: _objectSpread({
      windowSize: windowSize,
      setCarosuel: setCarosuel,
      toggle: toggle,
      setToggle: setToggle,
      navRef: navRef
    }, state),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (StateProvider);

/***/ }),

/***/ "./components/context/types.js":
/*!*************************************!*\
  !*** ./components/context/types.js ***!
  \*************************************/
/*! exports provided: API_KEY, BASE_URL, IMG_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_KEY", function() { return API_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMG_URL", function() { return IMG_URL; });
var API_KEY = "api_key=69a209b5d508b36379577751e571ebe9";
var BASE_URL = 'https://api.themoviedb.org/3/';
var IMG_URL = 'https://image.tmdb.org/t/p/w500/';

/***/ })

})
//# sourceMappingURL=_app.js.8980c24b6fb42925d28e.hot-update.js.map