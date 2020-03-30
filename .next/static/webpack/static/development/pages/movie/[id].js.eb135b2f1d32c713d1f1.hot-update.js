webpackHotUpdate("static\\development\\pages\\movie\\[id].js",{

/***/ "./components/ui/Cards/CastCard.jsx":
/*!******************************************!*\
  !*** ./components/ui/Cards/CastCard.jsx ***!
  \******************************************/
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
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\Cards\\CastCard.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "CastCard__Styled",
  componentId: "sc-4vs9ca-0"
})([".card--poster{width:100%;height:230px;cursor:pointer;transition:var(--ease--in--out--02s);&:hover,&:focus{opacity:0.5;}img{height:100%;object-fit:cover;}}.name{font-weight:bold;font-size:1rem;margin:1em 0 0.4em;cursor:pointer;transition:var(--ease--in--out--02s);&:hover,&:focus{opacity:0.8;}}.character{font-size:12px;opacity:0.8;}"]);

var CastCard = function CastCard(_ref) {
  var data = _ref.data;
  return __jsx(Styled, {
    className: "cast--card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/person/[id]",
    as: "/person/".concat(data.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    className: "card--poster",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("img", {
    className: "cast--card__img" // src={`${IMG_URL}${data.profile_path}`}
    ,
    alt: data.title || data.name,
    src: data.profile_path ? "".concat(_context_types__WEBPACK_IMPORTED_MODULE_3__["IMG_URL"]).concat(data.profile_path) : 'blank_Person.svg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/person/[id]",
    as: "/person/".concat(data.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("h4", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, data.name)), __jsx("div", {
    className: "character",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, data.character));
};

/* harmony default export */ __webpack_exports__["default"] = (CastCard);

/***/ })

})
//# sourceMappingURL=[id].js.eb135b2f1d32c713d1f1.hot-update.js.map