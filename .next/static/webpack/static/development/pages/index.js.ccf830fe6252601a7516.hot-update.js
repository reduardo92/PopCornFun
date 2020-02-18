webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ui/CirclePercentage.jsx":
/*!********************************************!*\
  !*** ./components/ui/CirclePercentage.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-circular-progressbar */ "./node_modules/react-circular-progressbar/dist/index.esm.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\CirclePercentage.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Styled = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_2__["CircularProgressbar"]).withConfig({
  displayName: "CirclePercentage__Styled",
  componentId: "sc-1ov29ur-0"
})([".CircularProgressbar-path{stroke:", ";}.CircularProgressbar-trail{stroke:var(--white-clr);}.CircularProgressbar-text{fill:var(--white-clr);font-weight:bold;}.CircularProgressbar-background{fill:#383838;}"], function (_ref) {
  var value = _ref.value;

  if (value >= 60) {
    return '#09b560';
  } else if (value < 60 || value > 40) {
    return '#D2D531';
  } else if (value == 30) {
    return 'red';
  }
});

var CirclePercentage = function CirclePercentage(_ref2) {
  var value = _ref2.value;
  return __jsx(Styled, {
    value: value,
    text: "".concat(value, "%"),
    minValue: 1,
    maxValue: 100,
    background: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (CirclePercentage);

/***/ })

})
//# sourceMappingURL=index.js.ccf830fe6252601a7516.hot-update.js.map