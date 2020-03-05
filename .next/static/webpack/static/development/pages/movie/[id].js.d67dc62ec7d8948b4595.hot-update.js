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
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\mediaProfile\\ProfileStats\\ProfileStats.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "ProfileStats__Styled",
  componentId: "sc-1wmtszh-0"
})(["display:grid;grid-row-gap:1em;background-color:var(--accent-clr);padding:2em 1em;*{color:var(--second-clr);}.title{font-size:1.2rem;margin-bottom:1em;}"]);

var ProfileStats = function ProfileStats(_ref) {
  var data = _ref.data;
  return __jsx(Styled, {
    className: "profile--stats",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(_SocialLinks__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: data.external_ids,
    homepage: data.homepage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx(_Facts__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx(_Genre__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: data.genres,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ProfileStats);

/***/ })

})
//# sourceMappingURL=[id].js.d67dc62ec7d8948b4595.hot-update.js.map