webpackHotUpdate("static\\development\\pages\\tv\\[id].js",{

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
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Tab */ "./components/ui/Tab.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\mediaProfile\\ProfileStats\\Genre.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Genre__Styled",
  componentId: "sc-5zo2i4-0"
})([""]);

var Genre = function Genre(_ref) {
  var data = _ref.data,
      typeFor = _ref.typeFor;
  return __jsx(Styled, {
    className: "profile--stats--genres",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("h3", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Genres"), __jsx("div", {
    className: "flex-w-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, data.map(function (item) {
    return __jsx(_Tab__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: item,
      typeFor: typeFor,
      key: item.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Genre);

/***/ })

})
//# sourceMappingURL=[id].js.6b0f0f7161e6e2a9bd0e.hot-update.js.map