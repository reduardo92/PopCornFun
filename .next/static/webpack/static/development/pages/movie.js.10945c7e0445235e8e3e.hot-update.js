webpackHotUpdate("static\\development\\pages\\movie.js",{

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
})(["background:var(--bg-dark-gradient);padding:150px 1em 5em 1em;.wrapper{max-width:1500px;margin:0 auto;.title{font-size:1.5rem;margin-bottom:1em;}}.content--container{display:grid;grid-gap:2em;margin:3em 0;justify-items:center;}.person--grid{display:grid;grid-template-columns:repeat(2,1fr);justify-items:center;grid-gap:0.5em;width:100%;}@media screen and (min-width:768px){.content--container{grid-row-gap:3.5em;grid-template-columns:repeat(2,1fr);}.person--grid{grid-template-columns:repeat(3,1fr);}}@media screen and (min-width:1000px){.person--grid{grid-template-columns:repeat(4,1fr);}}"]);

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
      lineNumber: 64
    },
    __self: this
  }, __jsx(Styled, {
    className: "MediaSection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("div", {
    className: "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("h2", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, mediaFor.title, ' ', mediaFor.typeFor === 'tv' ? 'TV' : mediaFor.typeFor), __jsx(_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_4__["default"], {
    numberOfArticles: mediaFor.total_pages,
    typeFor: "/".concat(mediaFor.typeFor, "?query=").concat(mediaFor.title.split(' ').join('_'), "&page="),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), __jsx("div", {
    className: mediaFor.typeFor === 'person' ? 'person--grid' : 'content--container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, mediaFor.results.map(function (item) {
    return mediaFor.typeFor === 'person' ? __jsx(_Cards_PersonCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: item.id,
      data: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }) : __jsx(_Cards_CardTwo__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: item.id,
      data: item,
      typeFor: mediaFor.typeFor,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    });
  })), __jsx(_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_4__["default"], {
    numberOfArticles: mediaFor.total_pages,
    typeFor: "/".concat(mediaFor.typeFor, "?query=").concat(mediaFor.title.split(' ').join('_'), "&page="),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MediaSection);

/***/ })

})
//# sourceMappingURL=movie.js.10945c7e0445235e8e3e.hot-update.js.map