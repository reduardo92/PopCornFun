webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ui/Cards/CardOne.jsx":
/*!*****************************************!*\
  !*** ./components/ui/Cards/CardOne.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/types */ "./components/context/types.js");
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/go */ "./node_modules/react-icons/go/index.esm.js");
/* harmony import */ var _utility_setDateFormat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utility/setDateFormat */ "./components/utility/setDateFormat.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\Cards\\CardOne.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].figure.withConfig({
  displayName: "CardOne__Styled",
  componentId: "e0m3r6-0"
})(["width:160px;.card--poster{position:relative;transition:var(--ease--in--out--02s);cursor:pointer;background-color:var(--grey-clr);&::after{content:'View More';transition:var(--ease--in--out--02s);display:flex;justify-content:center;align-items:center;position:absolute;font-size:0.8rem;font-weight:bold;background-color:rgba(188,49,49,0.85);height:0;width:100%;opacity:0;top:0;left:0;right:0;}&:hover::after,&:focus::after{opacity:1;height:100%;}}.card--body{&__info{color:", ";display:flex;align-items:baseline;margin-top:0.5em;.info--top{font-size:0.9rem;}}&__title a{font-weight:bold;color:", ";transition:var(--ease--in--out--02s);&:hover,&:focus{color:var(--primary-clr);}}}@media screen and (min-width:1280px){width:180px;}"], function (_ref) {
  var invert = _ref.invert;
  return invert ? 'var(--second-clr)' : 'var(--grey-clr)';
}, function (_ref2) {
  var invert = _ref2.invert;
  return invert && 'var(--second-clr)';
});

var CardOne = function CardOne(_ref3) {
  var data = _ref3.data,
      typeFor = _ref3.typeFor,
      invert = _ref3.invert;
  return __jsx(Styled, {
    className: "card--one",
    invert: invert,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/".concat(typeFor, "/[id]"),
    as: "/".concat(typeFor, "/").concat(data.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("div", {
    className: "card--poster",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("img", {
    className: "poster__img",
    src: data.poster_path || data.profile_path ? "".concat(_context_types__WEBPACK_IMPORTED_MODULE_3__["IMG_URL"]).concat(data.poster_path || data.profile_path) : 'no_img.jpg',
    alt: data.title || data.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }))), __jsx("div", {
    className: "card--body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("div", {
    className: "card--body__info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("span", {
    className: "info--top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, data.release_date ? Object(_utility_setDateFormat__WEBPACK_IMPORTED_MODULE_5__["default"])(data.release_date) : data.first_air_date ? Object(_utility_setDateFormat__WEBPACK_IMPORTED_MODULE_5__["default"])(data.first_air_date) : data.known_for_department), (data.release_date || data.first_air_date) && __jsx("span", {
    className: "rating--star",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, data.vote_average, __jsx(react_icons_go__WEBPACK_IMPORTED_MODULE_4__["GoStar"], {
    className: "star",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }))), __jsx("div", {
    className: "card--body__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/".concat(typeFor, "/[id]"),
    as: "/".concat(typeFor, "/").concat(data.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, data.title || data.name))));
};

/* harmony default export */ __webpack_exports__["default"] = (CardOne);

/***/ })

})
//# sourceMappingURL=index.js.f3184cdcfbba52ee55ed.hot-update.js.map