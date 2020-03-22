webpackHotUpdate("static\\development\\pages\\movie.js",{

/***/ "./components/ui/Cards/CardTwo.jsx":
/*!*****************************************!*\
  !*** ./components/ui/Cards/CardTwo.jsx ***!
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
/* harmony import */ var _CirclePercentage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CirclePercentage */ "./components/ui/CirclePercentage.jsx");
/* harmony import */ var _context_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/types */ "./components/context/types.js");
/* harmony import */ var _utility_setDateFormat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utility/setDateFormat */ "./components/utility/setDateFormat.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\Cards\\CardTwo.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "CardTwo__Styled",
  componentId: "sc-1cfe07e-0"
})(["display:flex;flex-direction:column;.card--body__overview,.more--info,.poster__img{display:none;}.card--poster{.card--poster--link img{transition:var(--ease--in--out--02s);height:100%;object-fit:cover;}.backdrop__img{max-height:197.82px;}&:hover .card--poster--link img{opacity:0.5;}}.card--body{background:var(--bg-gradient);border-radius:0 0 3px 3px;height:100%;&__head{display:flex;align-items:center;padding:0.5em 0;padding-left:0.5em;height:inherit;.CircularProgressbar{width:2.8em;flex:0 0 2.8em;margin-right:1em;}}&__overview{font-size:0.9rem;padding:0 0.5em;}}.title--section{.title{font-size:1.1rem;color:var(--white-clr);&:hover{opacity:0.7;}}.release--date{color:rgba(255,255,255,0.68);}}.more--info{border-top:1px solid rgba(191,191,191,0.52);padding:0.8em 0.8em;font-size:0.9rem;&:hover .more--info__link{opacity:0.7;}}@media screen and (min-width:1000px){flex-direction:row;.card--body__overview,.more--info,.poster__img{display:block;}.backdrop__img{display:none;}.card--poster{flex:0 0 34%;width:34%;}.card--body{height:auto;display:flex;flex-direction:column;justify-content:space-around;&__head{padding:0.5em 0.5em 0;height:auto;}}}"]);

var CardTwo = function CardTwo(_ref) {
  var data = _ref.data,
      typeFor = _ref.typeFor;
  console.log(data.title, data.overview.length);
  return __jsx(Styled, {
    className: "card--two",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx("div", {
    className: "card--poster",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/".concat(typeFor, "/[id]"),
    as: "/".concat(typeFor, "/").concat(data.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx("a", {
    className: "card--poster--link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx("img", {
    className: "poster__img",
    src: data.poster_path || data.profile_path ? "".concat(_context_types__WEBPACK_IMPORTED_MODULE_4__["IMG_URL"]).concat(data.poster_path || data.profile_path) : 'no_img.jpg',
    alt: data.title || data.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }), __jsx("img", {
    className: "backdrop__img",
    src: data.backdrop_path ? "".concat(_context_types__WEBPACK_IMPORTED_MODULE_4__["IMG_URL"]).concat(data.backdrop_path) : 'no_img.jpg',
    alt: data.title || data.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  })))), __jsx("div", {
    className: "card--body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx("div", {
    className: "card--body__head",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx(_CirclePercentage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "percentege",
    value: data.vote_average * 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }), __jsx("div", {
    className: "title--section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/".concat(typeFor, "/[id]"),
    as: "/".concat(typeFor, "/").concat(data.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx("a", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, data.title || data.name)), __jsx("div", {
    className: "release--date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, data.release_date ? Object(_utility_setDateFormat__WEBPACK_IMPORTED_MODULE_5__["default"])(data.release_date) : data.first_air_date ? Object(_utility_setDateFormat__WEBPACK_IMPORTED_MODULE_5__["default"])(data.first_air_date) : data.known_for_department))), __jsx("p", {
    className: "card--body__overview",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, data.overview.length >= 170 ? "".concat(data.overview.slice(0, 170), "...") : data.overview), __jsx("div", {
    className: "more--info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/".concat(typeFor, "/[id]"),
    as: "/".concat(typeFor, "/").concat(data.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, __jsx("a", {
    className: "more--info__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "More Info")))));
};

/* harmony default export */ __webpack_exports__["default"] = (CardTwo);

/***/ })

})
//# sourceMappingURL=movie.js.3ccfb6ae41b9e8675fd7.hot-update.js.map