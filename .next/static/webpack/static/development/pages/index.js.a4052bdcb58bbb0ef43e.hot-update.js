webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ui/carousel/carousel.jsx":
/*!*********************************************!*\
  !*** ./components/ui/carousel/carousel.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _brainhubeu_react_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @brainhubeu/react-carousel */ "./node_modules/@brainhubeu/react-carousel/lib/react-carousel.js");
/* harmony import */ var _brainhubeu_react_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_brainhubeu_react_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _context_MovieContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/MovieContext */ "./components/context/MovieContext.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\carousel\\carousel.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Styled = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_brainhubeu_react_carousel__WEBPACK_IMPORTED_MODULE_1___default.a).withConfig({
  displayName: "carousel__Styled",
  componentId: "zxhpn4-0"
})(["width:100%;height:fit-content;padding:0 1em;ul{display:flex;li{flex-shrink:0;}}@media screen and (min-width:760px){}"]);

var Carousell = function Carousell(_ref) {
  var children = _ref.children;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_MovieContext__WEBPACK_IMPORTED_MODULE_3__["default"]),
      setCarosuel = _useContext.setCarosuel;

  return __jsx(Styled, {
    className: "carousel",
    slidesPerPage: setCarosuel(),
    infinite: true,
    autoPlay: 5000,
    animationSpeed: 3000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Carousell);

/***/ })

})
//# sourceMappingURL=index.js.a4052bdcb58bbb0ef43e.hot-update.js.map