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
/* harmony import */ var _Cards_CardOne__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Cards/CardOne */ "./components/ui/Cards/CardOne.jsx");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\RecommenSection.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "RecommenSection__Styled",
  componentId: "hey7bf-0"
})(["padding:1em 0em;max-width:1000px;.subTitle{margin-bottom:1.5em;}.simple--flex{& >:first-child{padding-left:1em;}}.card--one{flex:0 0 160px;margin-right:1.5em;}@media screen and (min-width:1280px){.card--one{flex:0 0 180px;margin-right:1.5em;}}"]);

var RecommenSection = function RecommenSection(_ref) {
  var data = _ref.data;
  return __jsx(Styled, {
    className: "recommendations--section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("h3", {
    className: "subTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Recommendations"), __jsx(_SimpleFlex__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "simple--flex",
    setWidth: "180px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, data.recommendations.results.slice(0, 10).map(function (item) {
    return (// <RecommenCard key={item.id} data={item} typeFor={data.typeFor} />
      __jsx(_Cards_CardOne__WEBPACK_IMPORTED_MODULE_4__["default"], {
        key: item.id,
        data: item,
        typeFor: data.typeFor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })
    );
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (RecommenSection);

/***/ })

})
//# sourceMappingURL=[id].js.a5491db5c0eb7253f605.hot-update.js.map