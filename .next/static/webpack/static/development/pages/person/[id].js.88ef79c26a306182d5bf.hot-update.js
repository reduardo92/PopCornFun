webpackHotUpdate("static\\development\\pages\\person\\[id].js",{

/***/ "./components/ui/mediaProfile/CreditsTabs.jsx":
/*!****************************************************!*\
  !*** ./components/ui/mediaProfile/CreditsTabs.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\mediaProfile\\CreditsTabs.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "CreditsTabs__Styled",
  componentId: "sc-13it1gi-0"
})([""]);

var CreditsTabs = function CreditsTabs(_ref) {
  var data = _ref.data,
      typeFor = _ref.typeFor;
  return __jsx(Styled, {
    className: "d-flex shadow-sm border border-light bg-light py-1 px-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("span", {
    className: "date text-dark mr-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, data.date === '' ? '-' : data.date)), __jsx("span", {
    className: "text-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/".concat(typeFor, "/[id]"),
    as: "/".concat(typeFor, "/").concat(data.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("a", {
    className: "text-dark font-weight-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, data.title || data.name)), __jsx("span", {
    className: "d-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, data.job ? data.job : data.character ? "as ".concat(data.character) : '')));
};

/* harmony default export */ __webpack_exports__["default"] = (CreditsTabs);

/***/ })

})
//# sourceMappingURL=[id].js.88ef79c26a306182d5bf.hot-update.js.map