webpackHotUpdate("static\\development\\pages\\discover.js",{

/***/ "./components/ui/Pagination/Pagination.jsx":
/*!*************************************************!*\
  !*** ./components/ui/Pagination/Pagination.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _context_MovieContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/MovieContext */ "./components/context/MovieContext.js");
/* harmony import */ var _createPagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createPagination */ "./components/ui/Pagination/createPagination.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\Pagination\\Pagination.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Pagination__Styled",
  componentId: "sc-1vc2buy-0"
})(["ul{list-style:none;padding:0px;display:flex;justify-content:center;align-self:center;width:100%;li{margin-right:4px;border-radius:4px;font-family:sans-serif;background:var(--white-clr);font-size:1rem;font-weight:bold;min-width:20px;text-align:center;user-select:none;display:flex;justify-content:center;align-items:center;.link--item{display:block;padding:5px 11px;color:var(--second-clr);}.controls{font-size:0.9rem;}&:last-child{margin-right:0px;}&:not(.active):not(.disabled){cursor:pointer;}&:not(.active):not(.disabled):hover{background:var(--bg-gradient);.link--item{color:var(--white-clr);}}&:not(.active):not(.disabled):active{background:rgb(245,110,67);.link--item{color:var(--white-clr);}}&.active{background:rgb(245,110,67);.link--item{color:var(--white-clr);}}&.disabled{background:#fbeaff;pointer-events:none;}}}"]);

var Pagination = function Pagination(_ref) {
  var numberOfArticles = _ref.numberOfArticles,
      _ref$articlesPerPage = _ref.articlesPerPage,
      articlesPerPage = _ref$articlesPerPage === void 0 ? 1 : _ref$articlesPerPage,
      _ref$numberOfButtons = _ref.numberOfButtons,
      numberOfButtons = _ref$numberOfButtons === void 0 ? 5 : _ref$numberOfButtons,
      typeFor = _ref.typeFor;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_MovieContext__WEBPACK_IMPORTED_MODULE_2__["default"]),
      paginate = _useContext.paginate,
      currentPage = _useContext.currentPage,
      windowSize = _useContext.windowSize;

  var numberBB = function numberBB() {
    return windowSize >= 768 ? numberOfButtons + 5 : numberOfButtons;
  };

  var _createPagination = Object(_createPagination__WEBPACK_IMPORTED_MODULE_3__["default"])({
    numberOfArticles: numberOfArticles,
    articlesPerPage: articlesPerPage,
    numberOfButtons: numberBB(),
    currentPage: currentPage
  }),
      pagination = _createPagination.pagination;

  return __jsx(Styled, {
    className: "pagination--section",
    numberOfButtons: numberOfButtons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("li", {
    className: "".concat(pagination[0] === currentPage && 'disabled d-none'),
    onClick: function onClick() {
      return paginate(1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: typeFor + 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("a", {
    className: "link--item controls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__["MdFirstPage"], {
    className: "icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  })))), __jsx("li", {
    className: "".concat(pagination[0] === currentPage && 'disabled d-none'),
    onClick: function onClick() {
      return paginate(currentPage - 1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: currentPage === 1 ? typeFor + 1 : typeFor + (currentPage - 1),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx("a", {
    className: "link--item controls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "Prev"))), pagination.length === 1 ? '' : pagination.map(function (page) {
    return __jsx("li", {
      key: page,
      className: "".concat(currentPage === page && 'active'),
      onClick: function onClick() {
        return paginate(page);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: typeFor + page,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, __jsx("a", {
      className: "link--item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, page)));
  }), __jsx("li", {
    className: "".concat(pagination.reverse()[0] === currentPage && 'disabled d-none'),
    onClick: function onClick() {
      return paginate(currentPage + 1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: typeFor + (currentPage + 1),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx("a", {
    className: "link--item controls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "Next"))), __jsx("li", {
    className: "".concat(numberOfArticles === currentPage && 'disabled d-none'),
    onClick: function onClick() {
      return paginate(numberOfArticles);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: typeFor + numberOfArticles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx("a", {
    className: "link--item controls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__["MdLastPage"], {
    className: "icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ })

})
//# sourceMappingURL=discover.js.0ef3da8c65240f6760dc.hot-update.js.map