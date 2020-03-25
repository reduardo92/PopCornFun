webpackHotUpdate("static\\development\\pages\\person.js",{

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
})(["width:160px;.person--profile{.person--profile__link--img{transition:var(--ease--in--out--02s);}&:hover .person--profile__link--img{opacity:0.5;}}.name{font-weight:bold;transition:var(--ease--in--out--02s);&:hover,&:focus{color:var(--primary-clr);}}.job{display:block;}.know--for{font-size:0.7rem;&__item{margin-right:0.3em;transition:var(--ease--in--out--02s);&:hover,&:focus{color:var(--primary-clr);}}}@media screen and (min-width:768px){width:220px;.person--body__title{display:flex;align-items:center;}.name{font-size:1.1rem;}.job{display:inline-block;margin-left:auto;font-size:1rem;}}"]);

var PersonCard = function PersonCard(_ref) {
  var data = _ref.data;
  return __jsx(Styled, {
    className: "person--card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("div", {
    className: "person--profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/person/[id]",
    as: "/person/".concat(data.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("a", {
    className: "person--profile__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("img", {
    className: "person--profile__link--img",
    src: data.profile_path ? "".concat(_context_types__WEBPACK_IMPORTED_MODULE_3__["IMG_URL"]).concat(data.profile_path) : 'no_img.jpg',
    alt: data.title || data.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  })))), __jsx("div", {
    className: "person--body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("div", {
    className: "person--body__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/person/[id]",
    as: "/person/".concat(data.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("a", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, data.name)), __jsx("small", {
    className: "job",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "(", data.known_for_department, ")")), __jsx("div", {
    className: "know--for",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, !data.known_for ? 'N/A' : data.known_for.map(function (item, i) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      key: item.id,
      href: "/".concat(item.media_type, "/[id]"),
      as: "/".concat(item.media_type, "/").concat(item.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, __jsx("a", {
      className: "know--for__item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, item.name || item.title, data.known_for.length - 1 === i ? '' : ', '));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (PersonCard);

/***/ })

})
//# sourceMappingURL=person.js.50230dde249866dce898.hot-update.js.map