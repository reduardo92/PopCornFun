webpackHotUpdate("static\\development\\pages\\movie.js",{

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
/* harmony import */ var _context_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/types */ "./components/context/types.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\Cards\\PersonCard.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PersonCard__Styled",
  componentId: "sc-10zmgx9-0"
})([""]);

var PersonCard = function PersonCard(_ref) {
  var data = _ref.data;
  return __jsx(Styled, {
    className: "person--card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "person--profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/person/[id]",
    as: "/person/".concat(data.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("a", {
    className: "person--profile__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("img", {
    className: "person--profile__link--img",
    src: data.profile_path ? "".concat(_context_types__WEBPACK_IMPORTED_MODULE_2__["IMG_URL"]).concat(data.profile_path) : 'no_img.jpg',
    alt: data.title || data.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })))), __jsx("div", {
    className: "person--body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: "person--body__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/person/[id]",
    as: "/person/".concat(data.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("a", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, data.name)), __jsx("span", {
    className: "job",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, data.known_for_department)), __jsx("div", {
    className: "know--for",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, !data.known_for ? 'N/A' : data.known_for.map(function (item) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: item.id,
      href: "/".concat(item.media_type, "/[id]"),
      as: "/".concat(item.media_type, "/").concat(item.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("a", {
      className: "known--for__item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, item.name || item.title));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (PersonCard);

/***/ })

})
//# sourceMappingURL=movie.js.ce7f492c2487d12765ba.hot-update.js.map