webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/utility/getFeturedMedia.js":
/*!***********************************************!*\
  !*** ./components/utility/getFeturedMedia.js ***!
  \***********************************************/
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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");









function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

/* harmony default export */ __webpack_exports__["default"] = (function _callee(typeFor) {
  var time,
      _ref,
      results,
      item,
      getvideos,
      _args = arguments;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          time = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'week';
          _context.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.awrap(movieDB("trending/".concat(typeFor, "/").concat(time)));

        case 3:
          _ref = _context.sent;
          results = _ref.results;
          item = results[randomNum(results.length)].id;
          _context.next = 8;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.awrap(movieDB("".concat(typeFor, "/").concat(item.id, "/videos")));

        case 8:
          getvideos = _context.sent;
          return _context.abrupt("return", _objectSpread({}, item, {
            videos: getvideos.results[0]
          }));

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_ui_VideoHero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ui/VideoHero */ "./components/ui/VideoHero.jsx");
/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/contact */ "./components/contact.jsx");
/* harmony import */ var _components_ui_PopularSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ui/PopularSection */ "./components/ui/PopularSection.jsx");
/* harmony import */ var _components_utility_movieDB__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/utility/movieDB */ "./components/utility/movieDB.js");
/* harmony import */ var _components_ui_sectionCarousel_SectionCarousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ui/sectionCarousel/SectionCarousel */ "./components/ui/sectionCarousel/SectionCarousel.jsx");
/* harmony import */ var _components_utility_randomNum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/utility/randomNum */ "./components/utility/randomNum.js");
/* harmony import */ var _components_ui_FeturedSection_FeturedSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ui/FeturedSection/FeturedSection */ "./components/ui/FeturedSection/FeturedSection.jsx");
/* harmony import */ var _components_utility_getFeturedMedia__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/utility/getFeturedMedia */ "./components/utility/getFeturedMedia.js");

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var IndexPage = function IndexPage(_ref) {
  var movieNowPlay = _ref.movieNowPlay,
      tvOnAir = _ref.tvOnAir,
      movieAction = _ref.movieAction,
      tvAnima = _ref.tvAnima,
      feturedMovie = _ref.feturedMovie,
      feturedTv = _ref.feturedTv;
  console.log(feturedMovie, feturedTv);
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(_components_ui_VideoHero__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx(_components_ui_PopularSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: movieNowPlay,
    typeFor: "movie",
    title: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "in theaters ", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }), " now to enjoy"),
    subtitle: "Most watched movies",
    toLink: "/movie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx(_components_ui_sectionCarousel_SectionCarousel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: movieAction,
    typeFor: "movie",
    title: "popular action movies",
    toLink: "/movie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx(_components_ui_FeturedSection_FeturedSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
    data: feturedMovie,
    typeFor: "movie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx(_components_ui_PopularSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: tvOnAir,
    typeFor: "tv",
    title: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "Popular TV ", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), "Series Right Now"),
    subtitle: "Most watched tv",
    toLink: "/tv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx(_components_ui_sectionCarousel_SectionCarousel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: tvAnima,
    typeFor: "tv",
    title: "animation to Enjoy",
    toLink: "/tv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx(_components_ui_FeturedSection_FeturedSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
    data: feturedTv,
    typeFor: "tv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), __jsx(_components_contact__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }));
};

IndexPage.getInitialProps = function _callee() {
  var tv, movie, movieAction, tvAnima, feturedMovie, feturedTv;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_components_utility_movieDB__WEBPACK_IMPORTED_MODULE_6__["default"])('tv/on_the_air'));

        case 3:
          tv = _context.sent;
          _context.next = 6;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_components_utility_movieDB__WEBPACK_IMPORTED_MODULE_6__["default"])('movie/now_playing'));

        case 6:
          movie = _context.sent;
          _context.next = 9;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_components_utility_movieDB__WEBPACK_IMPORTED_MODULE_6__["default"])('discover/movie', 'with_genres=28&sort_by=vote_count.desc'));

        case 9:
          movieAction = _context.sent;
          _context.next = 12;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_components_utility_movieDB__WEBPACK_IMPORTED_MODULE_6__["default"])('discover/tv', 'with_genres=16'));

        case 12:
          tvAnima = _context.sent;
          _context.next = 15;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_components_utility_getFeturedMedia__WEBPACK_IMPORTED_MODULE_10__["default"])('movie'));

        case 15:
          feturedMovie = _context.sent;
          _context.next = 18;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_components_utility_getFeturedMedia__WEBPACK_IMPORTED_MODULE_10__["default"])('tv'));

        case 18:
          feturedTv = _context.sent;
          return _context.abrupt("return", {
            movieNowPlay: movie.results.slice(0, 12),
            tvOnAir: tv.results.slice(0, 12),
            movieAction: movieAction.results.slice(0, 10),
            tvAnima: tvAnima.results.slice(0, 10),
            feturedMovie: feturedMovie,
            feturedTv: feturedTv
          });

        case 22:
          _context.prev = 22;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          return _context.abrupt("return", {
            movieNowPlay: null,
            tvOnAir: null
          });

        case 26:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 22]]);
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.24434e0ebd96564f9b39.hot-update.js.map