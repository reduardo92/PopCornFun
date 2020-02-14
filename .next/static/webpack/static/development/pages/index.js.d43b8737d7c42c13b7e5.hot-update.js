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
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\CardTitle.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "CardTitle__Styled",
  componentId: "sc-1sk6yp9-0"
})(["grid-column:", ";text-align:center;width:100%;position:relative;padding:1em 0;color:", ";&::before{content:'';position:absolute;top:0;left:0;right:0;width:100px;margin:0 auto;border-top:1px solid ", ";}.title{text-transform:capitalize;font-weight:bold;}.subtitle{color:var(--grey-clr);}.button--simple{display:block;border-top:1px solid ", ";padding-top:1em;}@media screen and (min-width:1000px){max-width:300px;margin-right:auto;text-align:left;&::before{margin:0;}.button--simple{text-align:left;}}"], function (_ref) {
  var gridColum = _ref.gridColum;
  return gridColum;
}, function (_ref2) {
  var invert = _ref2.invert;
  return invert && 'black';
}, function (_ref3) {
  var invert = _ref3.invert;
  return invert ? 'black' : ' rgba(255, 255, 255, 0.6)';
}, function (_ref4) {
  var invert = _ref4.invert;
  return invert ? 'black' : ' rgba(255, 255, 255, 0.6)';
});

var CardTitle = function CardTitle(_ref5) {
  var title = _ref5.title,
      subtitle = _ref5.subtitle,
      children = _ref5.children,
      gridColum = _ref5.gridColum,
      invert = _ref5.invert;
  return __jsx(Styled, {
    className: "card--title",
    gridColum: gridColum,
    invert: invert,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("h2", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, title), __jsx("p", {
    className: "subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, subtitle), children);
};

/* harmony default export */ __webpack_exports__["default"] = (CardTitle);

/***/ })

})
//# sourceMappingURL=index.js.d43b8737d7c42c13b7e5.hot-update.js.map