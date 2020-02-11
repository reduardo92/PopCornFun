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
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./button */ "./components/ui/button.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\PopularSection.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "PopularSection__Styled",
  componentId: "aqfo1s-0"
})(["background:var(--bg-gradient);padding:4em 1em;.content--container{display:grid;grid-template-columns:repeat(2,1fr);grid-auto-rows:auto;justify-items:center;}.btn--container{position:relative;display:flex;justify-content:center;width:100%;&::before{position:absolute;content:'';top:50%;left:0;right:0;width:100vw;height:1px;background-color:rgba(255,255,255,0.6);}}.card--title{grid-column:1 / 3;justify-self:center;margin-bottom:3em;}.title{text-transform:capitalize;font-weight:bold;}.subtitle{color:var(--grey-clr);}@media screen and (min-width:768px){.content--container{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:auto;justify-items:center;}.card--title{grid-column:1 / 5;}}@media screen and (min-width:1000px){.content--container{grid-template-columns:repeat(auto-fit,minmax(200px,1fr));}.card--title{grid-column:1 / 3;}}"]);

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
      lineNumber: 82
    },
    __self: this
  }, __jsx("div", {
    className: "max-width content--container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(_CardTitle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: title,
    subtitle: subtitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(_ButtonSimple__WEBPACK_IMPORTED_MODULE_4__["default"], {
    toLink: toLink,
    title: btnTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  })), data.map(function (item, i) {
    return i <= 11 && __jsx(_Cards_CardOne__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: item.id,
      data: item,
      typeFor: typeFor,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    });
  })), __jsx("div", {
    className: "btn--container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    toLink: toLink,
    title: "view more",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PopularSection);

/***/ })

})
//# sourceMappingURL=index.js.bc5014441f030e897605.hot-update.js.map