webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ui/FeturedSection/FeturedSection.jsx":
/*!*********************************************************!*\
  !*** ./components/ui/FeturedSection/FeturedSection.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button */ "./components/ui/button.js");
/* harmony import */ var _context_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/types */ "./components/context/types.js");
/* harmony import */ var _CirclePercentage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CirclePercentage */ "./components/ui/CirclePercentage.jsx");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\FeturedSection\\FeturedSection.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "FeturedSection__Styled",
  componentId: "sc-1un1zrn-0"
})(["position:relative;min-height:85vh;background:linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)),url(", ") no-repeat center;background-size:cover;object-fit:cover;width:100%;display:flex;align-items:center;justify-content:center;.max-width{padding:0 1em;}@media screen and (min-width:768px){min-height:50vh;}"], function (_ref) {
  var bgImg = _ref.bgImg;
  return "".concat(_context_types__WEBPACK_IMPORTED_MODULE_3__["IMG_URL_OR"]).concat(bgImg);
});

var FeturedSection = function FeturedSection(_ref2) {
  var data = _ref2.data,
      typeFor = _ref2.typeFor;
  return __jsx(Styled, {
    className: "fetured",
    bgImg: data.backdrop_path,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    className: "max-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "fetured--content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_CirclePercentage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: "40",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("h2", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, data.title || data.name), __jsx("p", {
    className: "subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, data.overview), __jsx("div", {
    className: "btn--group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    toLink: "/".concat(typeFor, "/").concat(data.id),
    title: "view more",
    bgclr: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }))), __jsx("div", {
    className: "fetured--action",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Play Trailer")));
};

/* harmony default export */ __webpack_exports__["default"] = (FeturedSection);

/***/ })

})
//# sourceMappingURL=index.js.8d054ef9cd266b1548d6.hot-update.js.map