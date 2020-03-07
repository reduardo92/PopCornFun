webpackHotUpdate("static\\development\\pages\\movie\\[id].js",{

/***/ "./components/ui/mediaProfile/ProfileStats/Keyords.jsx":
/*!*************************************************************!*\
  !*** ./components/ui/mediaProfile/ProfileStats/Keyords.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Tab */ "./components/ui/Tab.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\mediaProfile\\ProfileStats\\Keyords.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import styled from 'styled-components';

 // const Styled = styled.div``;

var Keyords = function Keyords(_ref) {
  var data = _ref.data;
  return __jsx(Styled, {
    className: "profile--stats--genres",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("h3", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Keywords"), __jsx("div", {
    className: "flex-w-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, data.keywords.keywords.map(function (item) {
    return __jsx(_Tab__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: item,
      typeFor: data.typeFor,
      key: item.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Keyords);

/***/ })

})
//# sourceMappingURL=[id].js.c8edf371104f4d196533.hot-update.js.map