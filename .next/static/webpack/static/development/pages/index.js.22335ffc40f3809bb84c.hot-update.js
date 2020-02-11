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
/* harmony import */ var _Cards_CardOne__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cards/CardOne */ "./components/ui/Cards/CardOne.jsx");
/* harmony import */ var _CardTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CardTitle */ "./components/ui/CardTitle.jsx");
/* harmony import */ var _ButtonSimple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ButtonSimple */ "./components/ui/ButtonSimple.jsx");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\PopularSection.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "PopularSection__Styled",
  componentId: "aqfo1s-0"
})(["background:var(--bg-gradient);padding:4em 1em;.content--container{display:grid;grid-template-columns:repeat(2,1fr);grid-auto-rows:auto;justify-items:center;}.card--title{grid-column:1 / 3;justify-self:center;margin-bottom:3em;}.title{text-transform:capitalize;font-weight:bold;}.subtitle{color:var(--grey-clr);}@media screen and (min-width:768px){.card--title{grid-column:1 / 5;}}@media screen and (min-width:1024px){.content--container{grid-template-columns:repeat(auto-fit,minmax(200px,1fr));}}"]);

var PopularSection = function PopularSection(_ref) {
  var data = _ref.data,
      typeFor = _ref.typeFor,
      title = _ref.title,
      subtitle = _ref.subtitle,
      toLink = _ref.toLink,
      btnTitle = _ref.btnTitle;
  return __jsx(Styled, {
    className: "popular--section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("div", {
    className: "max-width content--container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(_CardTitle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: title,
    subtitle: subtitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(_ButtonSimple__WEBPACK_IMPORTED_MODULE_4__["default"], {
    toLink: toLink,
    title: btnTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })), data.map(function (item, i) {
    return i <= 11 && __jsx(_Cards_CardOne__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: item.id,
      data: item,
      typeFor: typeFor,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PopularSection);

/***/ })

})
//# sourceMappingURL=index.js.22335ffc40f3809bb84c.hot-update.js.map