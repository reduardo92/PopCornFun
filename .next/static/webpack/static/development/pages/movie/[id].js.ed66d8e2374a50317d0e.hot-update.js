webpackHotUpdate("static\\development\\pages\\movie\\[id].js",{

/***/ "./components/ui/Tab.js":
/*!******************************!*\
  !*** ./components/ui/Tab.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\Tab.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "Tab__Styled",
  componentId: "sc-14z81p6-0"
})(["background-color:#fff;border:1px solid #d7d7d7;color:#000;padding:4px 10px;border-radius:4px;transition:var(--ease--in--out--02s);cursor:pointer;font-size:0.9rem;&:hover,&focus{opacity:0.8;}"]);

var Tab = function Tab(_ref) {
  var data = _ref.data,
      typeFor = _ref.typeFor,
      addCls = _ref.addCls;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/genre/[id]/[name]/".concat(typeFor),
    as: "/genre/".concat(data.id, "/").concat(data.name, "/").concat(typeFor),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(Styled, {
    className: "tab--link ".concat(addCls),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, data.name));
};

/* harmony default export */ __webpack_exports__["default"] = (Tab);

/***/ })

})
//# sourceMappingURL=[id].js.ed66d8e2374a50317d0e.hot-update.js.map