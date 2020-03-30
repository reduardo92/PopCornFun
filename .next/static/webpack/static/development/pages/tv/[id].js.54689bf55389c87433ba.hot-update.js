webpackHotUpdate("static\\development\\pages\\tv\\[id].js",{

/***/ "./components/ui/ReviewSection.jsx":
/*!*****************************************!*\
  !*** ./components/ui/ReviewSection.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Cards_CardReview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cards/CardReview */ "./components/ui/Cards/CardReview.jsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SimpleFlex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SimpleFlex */ "./components/ui/SimpleFlex.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\ReviewSection.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // import { FaArrowAltCircleRight } from 'react-icons/fa';

var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "ReviewSection__Styled",
  componentId: "dlmh8n-0"
})(["padding:2em 0.5em;display:grid;grid-gap:0.2em;max-width:1000px;.simple--flex{& > div{&:first-child{margin-left:0.1em;}}}.noReviews{padding:1em 0;}"]);

var ReviewSection = function ReviewSection(_ref) {
  var data = _ref.data,
      movieId = _ref.movieId;
  return __jsx(Styled, {
    className: "review--section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("h3", {
    className: "subTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Reviews"), __jsx(_SimpleFlex__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "simple--flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, data.length > 0 ? data.map(function (item, i) {
    return i < 4 && __jsx(_Cards_CardReview__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: item.id,
      data: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    });
  }) : __jsx("div", {
    className: "noReviews",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "No reviews available")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/movie/[id]/reviews",
    as: "/movie/".concat(movieId, "/reviews"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("a", {
    className: "title redHover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Read All Reviews")));
};

/* harmony default export */ __webpack_exports__["default"] = (ReviewSection);

/***/ })

})
//# sourceMappingURL=[id].js.54689bf55389c87433ba.hot-update.js.map