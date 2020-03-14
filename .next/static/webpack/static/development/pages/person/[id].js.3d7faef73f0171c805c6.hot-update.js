webpackHotUpdate("static\\development\\pages\\person\\[id].js",{

/***/ "./components/ui/PersonProfile/KnownFor.jsx":
/*!**************************************************!*\
  !*** ./components/ui/PersonProfile/KnownFor.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _SimpleFlex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SimpleFlex */ "./components/ui/SimpleFlex.js");
/* harmony import */ var _Cards_RecommenCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Cards/RecommenCard */ "./components/ui/Cards/RecommenCard.jsx");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\PersonProfile\\KnownFor.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "KnownFor__Styled",
  componentId: "sc-1fqp2dp-0"
})([""]);

var KnownFor = function KnownFor(_ref) {
  var data = _ref.data;
  return __jsx(Styled, {
    className: "profile--media__knownFor px-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("h3", {
    className: "subTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Known For"), data.length === 0 ? __jsx("p", {
    className: "my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Sorry Nothing Available") : __jsx(_SimpleFlex__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "knonwFor--content",
    setWidth: "160px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, data.map(function (item) {
    return __jsx(_Cards_RecommenCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: Math.random() * 10,
      data: item,
      typeFor: item.media_type,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (KnownFor);

/***/ })

})
//# sourceMappingURL=[id].js.3d7faef73f0171c805c6.hot-update.js.map