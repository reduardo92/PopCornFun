webpackHotUpdate("static\\development\\pages\\person\\[id].js",{

/***/ "./components/ui/PersonProfile/PersonFacts.jsx":
/*!*****************************************************!*\
  !*** ./components/ui/PersonProfile/PersonFacts.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utility_setDateFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utility/setDateFormat */ "./components/utility/setDateFormat.js");

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\PersonProfile\\PersonFacts.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PersonFacts__Styled",
  componentId: "sc-9rx50k-0"
})([""]);

var PersonFacts = function PersonFacts(_ref) {
  var data = _ref.data;
  return __jsx(Styled, {
    className: "profile--facts",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("h3", {
    className: "subTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Personal Info"), __jsx("div", {
    className: "stat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("p", {
    className: "stat--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Know For"), __jsx("span", {
    className: "stat--subtext",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, data.known_for_department)), __jsx("div", {
    className: "stat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("p", {
    className: "stat--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Gender"), __jsx("span", {
    className: "stat--subtext",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, data.gender === 1 ? 'Female' : 'Male')), __jsx("div", {
    className: "stat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("p", {
    className: "stat--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Know Credits"), __jsx("span", {
    className: "stat--subtext",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(data.combined_credits.cast.length - 1) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(data.combined_credits.crew.length - 1))), __jsx("div", {
    className: "stat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("p", {
    className: "stat--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Birthday"), __jsx("span", {
    className: "stat--subtext",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, Object(_utility_setDateFormat__WEBPACK_IMPORTED_MODULE_3__["default"])(data.birthday))), __jsx("div", {
    className: "stat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("p", {
    className: "stat--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Place of Birth"), __jsx("span", {
    className: "stat--subtext",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, data.place_of_birth)), __jsx("div", {
    className: "stat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("p", {
    className: "stat--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Official Site"), __jsx("span", {
    className: "stat--subtext",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, data.homepage ? data.homepage : '-')), __jsx("div", {
    className: "stat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("p", {
    className: "stat--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Also Know As"), __jsx("div", {
    className: "stat--subtext",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, data.also_known_as)));
};

/* harmony default export */ __webpack_exports__["default"] = (PersonFacts);

/***/ })

})
//# sourceMappingURL=[id].js.a869b9c8404f88424b5f.hot-update.js.map