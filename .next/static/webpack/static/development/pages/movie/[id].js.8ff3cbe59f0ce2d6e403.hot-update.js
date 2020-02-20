webpackHotUpdate("static\\development\\pages\\movie\\[id].js",{

/***/ "./pages/movie/[id].jsx":
/*!******************************!*\
  !*** ./pages/movie/[id].jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_utility_movieDB__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/utility/movieDB */ "./components/utility/movieDB.js");
/* harmony import */ var _components_context_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/context/types */ "./components/context/types.js");

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\pages\\movie\\[id].jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  displayName: "id__Styled",
  componentId: "zlmctg-0"
})([".profile--backdrop{background-image:url(", ");min-height:400px;background:#1c212e;background-size:cover;background-position:center;}"], function (_ref) {
  var bgImg = _ref.bgImg;
  return "".concat(_components_context_types__WEBPACK_IMPORTED_MODULE_4__["IMG_URL_OR"]).concat(bgImg);
});

var MovieProfile = function MovieProfile(_ref2) {
  var movie = _ref2.movie,
      typeFor = _ref2.typeFor;
  console.log('profile', movie);
  return __jsx(Styled, {
    className: "profile",
    bgImg: movie.backdrop_path,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: "profile--backdrop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx("div", {
    className: "profile--header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    className: "profile--header__img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("img", {
    src: "",
    alt: "",
    className: "poster",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }))));
};

MovieProfile.getInitialProps = function _callee(_ref3) {
  var asPath, movie;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          asPath = _ref3.asPath;
          _context.prev = 1;
          _context.next = 4;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_components_utility_movieDB__WEBPACK_IMPORTED_MODULE_3__["default"])(asPath.slice(1), 'append_to_response=account_states,external_ids,images,keywords,release_dates,videos,recommendations,reviews,credits'));

        case 4:
          movie = _context.sent;
          return _context.abrupt("return", {
            movie: movie
          });

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

/* harmony default export */ __webpack_exports__["default"] = (MovieProfile);

/***/ })

})
//# sourceMappingURL=[id].js.8ff3cbe59f0ce2d6e403.hot-update.js.map