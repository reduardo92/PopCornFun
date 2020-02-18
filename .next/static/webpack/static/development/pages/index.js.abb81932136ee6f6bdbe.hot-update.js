webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ui/button.js":
/*!*********************************!*\
  !*** ./components/ui/button.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\button.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "button__Styled",
  componentId: "smtp0v-0"
})(["display:inline-block;font-family:var(--fn-monterrat);font-weight:var(--fw-bold);font-size:0.9rem;text-align:center;background-color:", ";color:", ";text-transform:uppercase;padding:1em 3em;border-radius:5px;border:2px solid var(--primary-clr);position:relative;transition:var(--ease--in--out--02s);cursor:pointer;&:hover,&:focus{transform:scale(0.95);background-color:", ";border-color:var(--primary-clr);color:", ";cursor:pointer;}"], function (props) {
  return props.bgclr ? 'var(--primary-clr)' : 'transparent';
}, function (props) {
  return props.invert ? 'var(--second-clr)' : 'var(--white-clr)';
}, function (props) {
  return props.bgclr ? 'transparent' : 'var(--primary-clr)';
}, function (props) {
  return props.hoverclr ? 'var(--white-clr)' : 'var(--second-clr)';
});

var Button = function Button(_ref) {
  var toLink = _ref.toLink,
      title = _ref.title,
      hoverclr = _ref.hoverclr,
      bgclr = _ref.bgclr,
      invert = _ref.invert;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: toLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(Styled, {
    hoverclr: hoverclr,
    bgclr: bgclr,
    invert: invert,
    className: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, title));
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ })

})
//# sourceMappingURL=index.js.abb81932136ee6f6bdbe.hot-update.js.map