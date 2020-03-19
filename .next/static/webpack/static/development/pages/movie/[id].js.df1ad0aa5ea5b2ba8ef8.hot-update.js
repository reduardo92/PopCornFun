webpackHotUpdate("static\\development\\pages\\movie\\[id].js",{

/***/ "./components/ui/mediaProfile/ProfileStats/ProfileStats.jsx":
/*!******************************************************************!*\
  !*** ./components/ui/mediaProfile/ProfileStats/ProfileStats.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _SocialLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../SocialLinks */ "./components/ui/SocialLinks.jsx");
/* harmony import */ var _Facts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Facts */ "./components/ui/mediaProfile/ProfileStats/Facts.jsx");
/* harmony import */ var _Genre__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Genre */ "./components/ui/mediaProfile/ProfileStats/Genre.jsx");
/* harmony import */ var _Keyords__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Keyords */ "./components/ui/mediaProfile/ProfileStats/Keyords.jsx");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\mediaProfile\\ProfileStats\\ProfileStats.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "ProfileStats__Styled",
  componentId: "sc-1wmtszh-0"
})(["background-color:#e2e2e2;position:relative;*{color:var(--second-clr);}.inner--content{display:grid;grid-row-gap:1em;padding:2em 1em;}.title{font-size:1.2rem;margin-bottom:1em;}@media screen and (min-width:1000px){z-index:1;&::before{content:'';background:linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)),url('/theater_sets2.jpg') no-repeat center;background-color:black;min-height:800px;position:absolute;top:0;left:calc(375px - -10px);right:0;bottom:0;background-size:cover;background-position:0 65%;background-attachment:fixed;object-fit:cover;z-index:-1;}.inner--content{padding:2em;}}"]);

var ProfileStats = function ProfileStats(_ref) {
  var data = _ref.data,
      keywords = _ref.keywords;
  return __jsx(Styled, {
    className: "profile--stats",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("div", {
    className: "inner--content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(_SocialLinks__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: data.external_ids,
    homepage: data.homepage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx(_Facts__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), __jsx(_Genre__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: data.genres,
    typeFor: data.typeFor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), __jsx(_Keyords__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: keywords,
    typeFor: data.typeFor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ProfileStats);

/***/ })

})
//# sourceMappingURL=[id].js.df1ad0aa5ea5b2ba8ef8.hot-update.js.map