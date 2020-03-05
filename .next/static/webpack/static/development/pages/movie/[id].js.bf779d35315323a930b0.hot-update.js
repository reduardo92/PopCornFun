webpackHotUpdate("static\\development\\pages\\movie\\[id].js",{

/***/ "./components/ui/mediaProfile/ProfileStats/Genre.jsx":
/*!***********************************************************!*\
  !*** ./components/ui/mediaProfile/ProfileStats/Genre.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Tab */ "./components/ui/Tab.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\mediaProfile\\ProfileStats\\Genre.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Genre__Styled",
  componentId: "sc-5zo2i4-0"
})([".profile--stats--genres__genre{background-color:#fff;border:1px solid #d7d7d7;color:#000;padding:4px 10px;border-radius:4px;}"]);

var Genre = function Genre(_ref) {
  var data = _ref.data;
  return __jsx(Styled, {
    className: "profile--stats--genres",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("h3", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Genres"), data.genre.map(function (item) {
    return __jsx(_Tab__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: item,
      typeFor: data.typeFor,
      key: item.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Genre);

/***/ })

})
//# sourceMappingURL=[id].js.bf779d35315323a930b0.hot-update.js.map