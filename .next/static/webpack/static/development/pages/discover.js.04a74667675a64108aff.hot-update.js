webpackHotUpdate("static\\development\\pages\\discover.js",{

/***/ "./components/ui/Cards/PersonCard.jsx":
/*!********************************************!*\
  !*** ./components/ui/Cards/PersonCard.jsx ***!
  \********************************************/
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
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\Cards\\PersonCard.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PersonCard__Styled",
  componentId: "sc-10zmgx9-0"
})(["width:160px;display:flex;flex-direction:column;.person--profile{flex:0 0 80%;.person--profile__link--img{transition:var(--ease--in--out--02s);}&:hover .person--profile__link--img{opacity:0.5;}}.name{font-weight:bold;transition:var(--ease--in--out--02s);&:hover,&:focus{color:var(--primary-clr);}}.job{display:block;}.know--for{font-size:0.7rem;margin-top:0.1em;&__item{margin-right:0.3em;transition:var(--ease--in--out--02s);&:hover,&:focus{color:var(--primary-clr);}}}@media screen and (min-width:768px){width:100%;max-width:300px;.person--body__title{display:flex;align-items:baseline;}.name{font-size:1.1rem;}.job{display:inline-block;margin-left:auto;font-size:0.9rem;}.know--for{font-size:0.8rem;}}@media screen and (min-width:1000px){.name{font-size:1.3rem;}.job{font-size:1rem;}.know--for{font-size:0.9rem;}}"]);

var PersonCard = function PersonCard(_ref) {
  var data = _ref.data;
  return __jsx(Styled, {
    className: "person--card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("div", {
    className: "person--profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/person/[id]",
    as: "/person/".concat(data.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx("a", {
    className: "person--profile__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("img", {
    className: "person--profile__link--img",
    src: data.profile_path ? "".concat(_context_types__WEBPACK_IMPORTED_MODULE_3__["IMG_URL"]).concat(data.profile_path) : 'no_img.jpg',
    alt: data.title || data.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  })))), __jsx("div", {
    className: "person--body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx("div", {
    className: "person--body__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/person/[id]",
    as: "/person/".concat(data.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx("a", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, data.name)), __jsx("small", {
    className: "job",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "(", data.known_for_department, ")")), __jsx("div", {
    className: "know--for",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, !data.known_for ? 'N/A' : data.known_for.map(function (item, i) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      key: item.id,
      href: "/".concat(item.media_type, "/[id]"),
      as: "/".concat(item.media_type, "/").concat(item.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, __jsx("a", {
      className: "know--for__item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, item.name || item.title, data.known_for.length - 1 === i ? '' : ', '));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (PersonCard);

/***/ })

})
//# sourceMappingURL=discover.js.04a74667675a64108aff.hot-update.js.map