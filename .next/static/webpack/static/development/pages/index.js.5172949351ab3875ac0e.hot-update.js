webpackHotUpdate("static\\development\\pages\\index.js",{

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

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var IndexPage = function IndexPage(_ref) {
  var movieNowPlay = _ref.movieNowPlay,
      tvOnAir = _ref.tvOnAir,
      movieAction = _ref.movieAction,
      tvAnima = _ref.tvAnima,
      feturedMovie = _ref.feturedMovie,
      feturedTv = _ref.feturedTv,
      fetTV = _ref.fetTV;
  console.log(feturedMovie, feturedTv);
  console.log(fetTV);
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(_components_ui_VideoHero__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx(_components_ui_PopularSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: movieNowPlay,
    typeFor: "movie",
    title: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "in theaters ", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), " now to enjoy"),
    subtitle: "Most watched movies",
    toLink: "/movie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx(_components_ui_sectionCarousel_SectionCarousel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: movieAction,
    typeFor: "movie",
    title: "popular action movies",
    toLink: "/movie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx(_components_ui_FeturedSection_FeturedSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
    data: feturedMovie,
    typeFor: "movie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx(_components_ui_PopularSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: tvOnAir,
    typeFor: "tv",
    title: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "Popular TV ", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), "Series Right Now"),
    subtitle: "Most watched tv",
    toLink: "/tv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx(_components_ui_sectionCarousel_SectionCarousel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: tvAnima,
    typeFor: "tv",
    title: "animation to Enjoy",
    toLink: "/tv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx(_components_ui_FeturedSection_FeturedSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
    data: feturedTv,
    typeFor: "tv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), __jsx(_components_contact__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }));
};

IndexPage.getInitialProps = function _callee() {
  var tv, movie, movieAction, tvAnima, _ref2, feturedMovie, _ref3, feturedTv, fetTV;

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
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_components_utility_movieDB__WEBPACK_IMPORTED_MODULE_6__["default"])('trending/movie/week'));

        case 15:
          _ref2 = _context.sent;
          feturedMovie = _ref2.results;
          _context.next = 19;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_components_utility_movieDB__WEBPACK_IMPORTED_MODULE_6__["default"])('trending/tv/week'));

        case 19:
          _ref3 = _context.sent;
          feturedTv = _ref3.results;
          _context.next = 23;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_components_utility_movieDB__WEBPACK_IMPORTED_MODULE_6__["default"])("movie/".concat(feturedMovie[Object(_components_utility_randomNum__WEBPACK_IMPORTED_MODULE_8__["default"])(feturedMovie.length)], "/videos")));

        case 23:
          fetTV = _context.sent;
          console.log("https://api.themoviedb.org/3/movie/".concat(feturedMovie[Object(_components_utility_randomNum__WEBPACK_IMPORTED_MODULE_8__["default"])(feturedMovie.length)], "/videos??api_key=69a209b5d508b36379577751e571ebe9"));
          return _context.abrupt("return", {
            movieNowPlay: movie.results.slice(0, 12),
            tvOnAir: tv.results.slice(0, 12),
            movieAction: movieAction.results.slice(0, 10),
            tvAnima: tvAnima.results.slice(0, 10),
            feturedMovie: feturedMovie[Object(_components_utility_randomNum__WEBPACK_IMPORTED_MODULE_8__["default"])(feturedMovie.length)],
            feturedTv: feturedTv[Object(_components_utility_randomNum__WEBPACK_IMPORTED_MODULE_8__["default"])(feturedTv.length)],
            fetTV: fetTV
          });

        case 28:
          _context.prev = 28;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          return _context.abrupt("return", {
            movieNowPlay: null,
            tvOnAir: null
          });

        case 32:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 28]]);
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.5172949351ab3875ac0e.hot-update.js.map