webpackHotUpdate("static\\development\\pages\\movie\\[id].js",{

/***/ "./components/ui/Cards/RecommenCard.jsx":
/*!**********************************************!*\
  !*** ./components/ui/Cards/RecommenCard.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _context_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/types */ "./components/context/types.js");
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/go */ "./node_modules/react-icons/go/index.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\Cards\\RecommenCard.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "RecommenCard__Styled",
  componentId: "sc-8rijlz-0"
})([".recommend--card--poster{position:relative;&__release{position:absolute;bottom:0;left:0;right:0;color:var(--white-clr);background-color:var(--primary-clr);padding:0.5em 0;text-align:center;font-weight:bold;font-size:0.9rem;display:flex;align-items:center;justify-content:center;.calendar{margin-right:0.5em;font-size:1.2rem;}.date{margin-right:0.5em;}}}.recommend--card__content{display:grid;grid-template-columns:auto auto;align-items:baseline;margin-top:0.5em;&--name{font-weight:bold;}.rating{justify-self:end;display:flex;align-items:center;.star{color:yellow;}}}"]);

var RecommenCard = function RecommenCard(_ref) {
  var data = _ref.data,
      typeFor = _ref.typeFor;
  return __jsx(Styled, {
    className: "recommend--card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/".concat(typeFor, "/[id]"),
    as: "/".concat(typeFor, "/").concat(data.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("div", {
    className: "recommend--card--poster",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("img", {
    className: "recommend--card--poster__img",
    src: "".concat(_context_types__WEBPACK_IMPORTED_MODULE_2__["IMG_URL"]).concat(data.poster_path),
    alt: data.title || data.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), __jsx("div", {
    className: "recommend--card--poster__release",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(react_icons_go__WEBPACK_IMPORTED_MODULE_3__["GoCalendar"], {
    className: "calendar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx("span", {
    className: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, data.release_date)))), __jsx("div", {
    className: "recommend--card__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/".concat(typeFor, "/[id]"),
    as: "/".concat(typeFor, "/").concat(data.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("a", {
    className: "recommend--card__content--name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, data.title)), __jsx("span", {
    className: "rating",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, data.vote_average, __jsx(react_icons_go__WEBPACK_IMPORTED_MODULE_3__["GoStar"], {
    className: "star",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (RecommenCard);

/***/ })

})
//# sourceMappingURL=[id].js.9d8d61cb855af3c725ba.hot-update.js.map