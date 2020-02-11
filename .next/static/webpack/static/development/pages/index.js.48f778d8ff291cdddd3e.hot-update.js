webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ui/PopularSection.jsx":
/*!******************************************!*\
  !*** ./components/ui/PopularSection.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ButtonSimple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ButtonSimple */ "./components/ui/ButtonSimple.jsx");
/* harmony import */ var _Cards_CardOne__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cards/CardOne */ "./components/ui/Cards/CardOne.jsx");
/* harmony import */ var _CardTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CardTitle */ "./components/ui/CardTitle.jsx");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\PopularSection.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "PopularSection__Styled",
  componentId: "aqfo1s-0"
})(["background:var(--bg-gradient);padding:5em 1em;.content--container{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));grid-auto-rows:auto;justify-items:center;}.popular--header{grid-column:1 / 3;}.title{text-transform:capitalize;font-weight:bold;}.subtitle{color:var(--grey-clr);}"]);

var PopularSection = function PopularSection(_ref) {
  var data = _ref.data,
      _ref$typeFor = _ref.typeFor,
      typeFor = _ref$typeFor === void 0 ? 'tv' : _ref$typeFor,
      title = _ref.title,
      subtitle = _ref.subtitle;
  return __jsx(Styled, {
    className: "popular--section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "max-width content--container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_CardTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: title,
    subtitle: subtitle,
    toLink: toLink // btnTitle='view more'
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), data.map(function (item, i) {
    return i <= 11 && __jsx(_Cards_CardOne__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: item.id,
      data: item,
      typeFor: typeFor,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PopularSection);

/***/ })

})
//# sourceMappingURL=index.js.48f778d8ff291cdddd3e.hot-update.js.map