webpackHotUpdate("static\\development\\pages\\tv.js",{

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
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "person--profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(Link, {
    href: "/person/[id]",
    as: "/person/".concat(data.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("a", {
    className: "person--profile__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("img", {
    className: "person--profile__link--img",
    src: data.profile_path ? "".concat(_context_types__WEBPACK_IMPORTED_MODULE_2__["IMG_URL"]).concat(data.profile_path) : 'no_img.jpg',
    alt: data.title || data.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })))), __jsx("div", {
    className: "person--body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: "person--body__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(Link, {
    href: "/person/[id]",
    as: "/person/".concat(data.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("a", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, data.name)), __jsx("span", {
    className: "job",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, data.known_for_department)), __jsx("div", {
    className: "know--for",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, !data.known_for ? 'N/A' : data.known_for.map(function (item) {
    return __jsx(Link, {
      key: item.id,
      href: "/".concat(item.media_type, "/[id]"),
      as: "/".concat(item.media_type, "/").concat(item.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("a", {
      className: "known--for__item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, item.name || item.title));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (PersonCard);

/***/ }),

/***/ "./components/ui/mediaProfile/MediaSection.jsx":
/*!*****************************************************!*\
  !*** ./components/ui/mediaProfile/MediaSection.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_MovieContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/MovieContext */ "./components/context/MovieContext.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layout */ "./components/layout.js");
/* harmony import */ var _Pagination_Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Pagination/Pagination */ "./components/ui/Pagination/Pagination.jsx");
/* harmony import */ var _Cards_CardTwo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Cards/CardTwo */ "./components/ui/Cards/CardTwo.jsx");
/* harmony import */ var _Cards_PersonCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Cards/PersonCard */ "./components/ui/Cards/PersonCard.jsx");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\mediaProfile\\MediaSection.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  displayName: "MediaSection__Styled",
  componentId: "sc-1m2ky1s-0"
})(["background:var(--bg-dark-gradient);padding:150px 1em 5em 1em;.wrapper{max-width:1500px;margin:0 auto;.title{font-size:1.5rem;margin-bottom:1em;}}.content--container{display:grid;grid-gap:2em;margin:3em 0;}.person--grid{display:grid;grid-template-columns:repeat(2,1fr);grid-gap:0.5em;}@media screen and (min-width:768px){.content--container{grid-row-gap:3.5em;grid-template-columns:repeat(2,1fr);}.person--grid{grid-template-columns:repeat(3,1fr);}}@media screen and (min-width:1000px){.person--grid{grid-template-columns:repeat(4,1fr);}}"]);

var MediaSection = function MediaSection(_ref) {
  var mediaFor = _ref.mediaFor;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_MovieContext__WEBPACK_IMPORTED_MODULE_1__["default"]),
      paginate = _useContext.paginate;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    paginate(mediaFor.page);
  }, [mediaFor.page]);
  return __jsx(_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(Styled, {
    className: "MediaSection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("div", {
    className: "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("h2", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, mediaFor.title, ' ', mediaFor.typeFor === 'tv' ? 'TV' : mediaFor.typeFor), __jsx(_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_4__["default"], {
    numberOfArticles: mediaFor.total_pages,
    typeFor: "/".concat(mediaFor.typeFor, "?query=").concat(mediaFor.title.split(' ').join('_'), "&page="),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), __jsx("div", {
    className: mediaFor.typeFor === 'person' ? 'person--grid' : 'content--container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, mediaFor.results.map(function (item) {
    return mediaFor.typeFor === 'person' ? __jsx(_Cards_PersonCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: item.id,
      data: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }) : __jsx(_Cards_CardTwo__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: item.id,
      data: item,
      typeFor: mediaFor.typeFor,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    });
  })), __jsx(_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_4__["default"], {
    numberOfArticles: mediaFor.total_pages,
    typeFor: "/".concat(mediaFor.typeFor, "?query=").concat(mediaFor.title.split(' ').join('_'), "&page="),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MediaSection);

/***/ })

})
//# sourceMappingURL=tv.js.c76d591fdab2a598ece2.hot-update.js.map