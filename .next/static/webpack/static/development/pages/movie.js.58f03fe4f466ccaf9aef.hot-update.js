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
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\mediaProfile\\MediaSection.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  displayName: "MediaSection__Styled",
  componentId: "sc-1m2ky1s-0"
})(["background:var(--bg-dark-gradient);padding:150px 1em 5em 1em;.wrapper{max-width:1500px;margin:0 auto;.title{font-size:1.5rem;margin-bottom:1em;}}.content--container{display:grid;grid-gap:2em;margin:3em 0;}@media screen and (min-width:768px){.content--container{grid-row-gap:3.5em;grid-template-columns:repeat(2,1fr);}}"]);

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
      lineNumber: 44
    },
    __self: this
  }, __jsx(Styled, {
    className: "MediaSection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("div", {
    className: "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("h2", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, mediaFor.title, ' ', mediaFor.typeFor === 'tv' ? 'TV' : mediaFor.typeFor), __jsx(_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_4__["default"], {
    numberOfArticles: mediaFor.total_pages,
    typeFor: "/".concat(mediaFor.typeFor, "?query=").concat(mediaFor.title.split(' ').join('_'), "&page="),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("div", {
    className: "content--container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, mediaFor.results.map(function (item) {
    return __jsx(_Cards_CardTwo__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: item.id,
      data: item,
      typeFor: mediaFor.typeFor,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    });
  })), __jsx(_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_4__["default"], {
    numberOfArticles: mediaFor.total_pages,
    typeFor: "/".concat(mediaFor.typeFor, "?query=").concat(mediaFor.title.split(' ').join('_'), "&page="),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MediaSection);

/***/ })

})
//# sourceMappingURL=movie.js.58f03fe4f466ccaf9aef.hot-update.js.map