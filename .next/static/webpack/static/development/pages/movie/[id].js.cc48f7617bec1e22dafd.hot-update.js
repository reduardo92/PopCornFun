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

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\pages\\movie\\[id].jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  displayName: "id__Styled",
  componentId: "zlmctg-0"
})([""]);

var MovieProfile = function MovieProfile(_ref) {
  var movie = _ref.movie,
      typeFor = _ref.typeFor;
  console.log('profile', movie);
  return __jsx(Styled, {
    className: "profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Moviess fsdafa asfasfa");
};

MovieProfile.getInitialProps = function _callee(ctx) {
  var _ref2, movie;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(ctx);
          _context.prev = 1;
          _context.next = 4;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(movieDB("movie/".concat(ctx.query.id)));

        case 4:
          _ref2 = _context.sent;
          movie = _ref2.results;
          return _context.abrupt("return", {
            movie: movie
          });

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 9]]);
};

/* harmony default export */ __webpack_exports__["default"] = (MovieProfile);

/***/ })

})
//# sourceMappingURL=[id].js.cc48f7617bec1e22dafd.hot-update.js.map