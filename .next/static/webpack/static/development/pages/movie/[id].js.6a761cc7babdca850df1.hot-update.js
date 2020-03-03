webpackHotUpdate("static\\development\\pages\\movie\\[id].js",{

/***/ "./components/ui/RecommenSection.jsx":
/*!*******************************************!*\
  !*** ./components/ui/RecommenSection.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Cards_RecommenCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cards/RecommenCard */ "./components/ui/Cards/RecommenCard.jsx");
/* harmony import */ var _SimpleFlex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SimpleFlex */ "./components/ui/SimpleFlex.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\RecommenSection.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "RecommenSection__Styled",
  componentId: "hey7bf-0"
})(["padding:1em 0.5em;.subTitle{margin-bottom:1.5em;}.simple--flex{}"]);

var RecommenSection = function RecommenSection(_ref) {
  var data = _ref.data,
      _ref$typeFor = _ref.typeFor,
      typeFor = _ref$typeFor === void 0 ? 'movie' : _ref$typeFor;
  return __jsx(Styled, {
    className: "recommendations--section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("h3", {
    className: "subTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Recommendations"), __jsx(_SimpleFlex__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "simple--flex",
    setWidth: "160px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, data.map(function (item) {
    return __jsx(_Cards_RecommenCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: item.id,
      data: item,
      typeFor: typeFor,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (RecommenSection);

/***/ })

})
//# sourceMappingURL=[id].js.6a761cc7babdca850df1.hot-update.js.map