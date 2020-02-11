webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ui/CardTitle.jsx":
/*!*************************************!*\
  !*** ./components/ui/CardTitle.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ButtonSimple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ButtonSimple */ "./components/ui/ButtonSimple.jsx");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\CardTitle.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "CardTitle__Styled",
  componentId: "sc-1sk6yp9-0"
})(["grid-column:", ";.title{text-transform:capitalize;font-weight:bold;}.subtitle{color:var(--grey-clr);}"], function (_ref) {
  var gridColum = _ref.gridColum;
  return gridColum;
});

var CardTitle = function CardTitle(_ref2) {
  var title = _ref2.title,
      subtitle = _ref2.subtitle,
      children = _ref2.children,
      toLink = _ref2.toLink,
      btnTitle = _ref2.btnTitle,
      _ref2$gridColum = _ref2.gridColum,
      gridColum = _ref2$gridColum === void 0 ? '1 / 3' : _ref2$gridColum;
  return __jsx(Styled, {
    className: "card--title",
    gridColum: gridColum,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("h2", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, title), __jsx("p", {
    className: "subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, subtitle)), children);
};

/* harmony default export */ __webpack_exports__["default"] = (CardTitle);

/***/ })

})
//# sourceMappingURL=index.js.740c2014641d877eadba.hot-update.js.map