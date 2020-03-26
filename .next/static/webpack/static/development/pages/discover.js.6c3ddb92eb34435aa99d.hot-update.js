webpackHotUpdate("static\\development\\pages\\discover.js",{

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Forms_DiscoverFrom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Forms/DiscoverFrom */ "./components/ui/Forms/DiscoverFrom.jsx");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\mediaProfile\\MediaSection.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  displayName: "MediaSection__Styled",
  componentId: "sc-1m2ky1s-0"
})(["background:var(--bg-dark-gradient);padding:150px 1em 5em 1em;.wrapper{max-width:1500px;margin:0 auto;.title{font-size:1.5rem;margin-bottom:1em;}}.content--container{display:grid;grid-gap:2em;margin:3em 0;justify-items:center;}.person--grid{display:grid;grid-template-columns:repeat(2,1fr);justify-items:center;grid-gap:1em;grid-row-gap:2em;margin:3em 0;}.head--tabs{display:flex;max-width:240px;justify-content:space-between;align-items:center;margin:0 auto 1.2em;&__tab{font-size:1.25rem;font-weight:bold;border-bottom:2px solid transparent;transition:var(--ease-12s);color:var(--white-clr);&:hover{opacity:0.5;border-bottom-color:var(--primary-clr);}&:first-child{}}.disabled{border-bottom-color:var(--primary-clr);pointer-events:none;}}@media screen and (min-width:768px){.head{display:flex;flex-wrap:wrap;.title{flex:100%;}.head--tabs{margin:0;margin-bottom:1em;flex:1;&__tab{margin-right:1em;}}}.content--container{grid-row-gap:3.5em;grid-template-columns:repeat(2,1fr);}.person--grid{grid-template-columns:repeat(3,1fr);}}@media screen and (min-width:1000px){.person--grid{grid-template-columns:repeat(4,1fr);}.head{.head--tabs{margin:0;flex:1;&__tab{margin-right:1em;}}}}@media screen and (min-width:1200px){.head{padding:0 2.2em 0 2em;}}"]);

var MediaSection = function MediaSection(_ref) {
  var mediaFor = _ref.mediaFor,
      forPage = _ref.forPage;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_MovieContext__WEBPACK_IMPORTED_MODULE_1__["default"]),
      paginate = _useContext.paginate,
      currentPage = _useContext.currentPage;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    paginate(mediaFor.page);
  }, [mediaFor.page]);

  var setLink = function setLink() {
    var mediaLink = "/".concat(mediaFor.typeFor, "?query=").concat(mediaFor.title.split(' ').join('_'), "&page=");
    var discLink = "/discover?query=".concat(mediaFor.typeFor, "&page=");
    return forPage === 'disc' ? discLink : mediaLink;
  };

  return __jsx(_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx(Styled, {
    className: "MediaSection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx("div", {
    className: "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx("div", {
    className: "head",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx("h2", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, forPage ? 'Discover New Movies & TV Shows' : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, mediaFor.title, '  ', mediaFor.typeFor === 'tv' ? 'TV' : mediaFor.typeFor)), forPage && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "head--tabs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/discover?query=movie&page=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, __jsx("a", {
    className: "head--tabs__tab ".concat(mediaFor.title === 'movie' && 'disabled'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, ' ', "Movies")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/discover?query=tv&page=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, __jsx("a", {
    className: "head--tabs__tab ".concat(mediaFor.title === 'tv' && 'disabled'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, "Tv Shows"))), __jsx(_Forms_DiscoverFrom__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }))), __jsx(_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_4__["default"], {
    numberOfArticles: mediaFor.total_pages,
    typeFor: setLink(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }), __jsx("div", {
    className: mediaFor.typeFor === 'person' ? 'person--grid' : 'content--container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, mediaFor.results.map(function (item) {
    return mediaFor.typeFor === 'person' ? __jsx(_Cards_PersonCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: item.id,
      data: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }) : __jsx(_Cards_CardTwo__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: item.id,
      data: item,
      typeFor: mediaFor.typeFor,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: this
    });
  })), __jsx(_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_4__["default"], {
    numberOfArticles: mediaFor.total_pages,
    typeFor: setLink(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MediaSection);

/***/ })

})
//# sourceMappingURL=discover.js.6c3ddb92eb34435aa99d.hot-update.js.map