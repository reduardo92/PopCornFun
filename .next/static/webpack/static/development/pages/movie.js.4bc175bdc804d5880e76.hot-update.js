webpackHotUpdate("static\\development\\pages\\movie.js",{

/***/ "./components/ui/Pagination/Pagination.jsx":
/*!*************************************************!*\
  !*** ./components/ui/Pagination/Pagination.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _context_MovieContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/MovieContext */ "./components/context/MovieContext.js");
/* harmony import */ var _createPagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createPagination */ "./components/ui/Pagination/createPagination.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\Pagination\\Pagination.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  justify-content: center;\n\n  ul {\n    list-style: none;\n    padding: 0px;\n    display: flex;\n    justify-content: center;\n    width: 100%;\n\n    li {\n      margin-right: 4px;\n      border-radius: 4px;\n      font-family: sans-serif;\n      background: var(--white-clr);\n      font-size: 1.1rem;\n      font-weight: bold;\n      min-width: 20px;\n      text-align: center;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      .link--item {\n        display: block;\n        padding: 10px 15px;\n        color: var(--second-clr);\n      }\n\n      &:last-child {\n        margin-right: 0px;\n      }\n\n      &:not(.active):not(.disabled) {\n        cursor: pointer;\n      }\n      &:not(.active):not(.disabled):hover {\n        background: var(--bg-gradient);\n        .link--item {\n          color: var(--white-clr);\n        }\n      }\n\n      &:not(.active):not(.disabled):active {\n        background: rgb(245, 110, 67);\n        .link--item {\n          color: var(--white-clr);\n        }\n      }\n\n      &.active {\n        background: rgb(245, 110, 67);\n        .link--item {\n          color: var(--white-clr);\n        }\n      }\n      &.disabled {\n        background: #fbeaff;\n        pointer-events: none;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());

var Pagination = function Pagination(_ref) {
  var numberOfArticles = _ref.numberOfArticles,
      _ref$articlesPerPage = _ref.articlesPerPage,
      articlesPerPage = _ref$articlesPerPage === void 0 ? 1 : _ref$articlesPerPage,
      _ref$numberOfButtons = _ref.numberOfButtons,
      numberOfButtons = _ref$numberOfButtons === void 0 ? 5 : _ref$numberOfButtons,
      typeFor = _ref.typeFor;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_MovieContext__WEBPACK_IMPORTED_MODULE_3__["default"]),
      paginate = _useContext.paginate,
      currentPage = _useContext.currentPage;

  var _createPagination = Object(_createPagination__WEBPACK_IMPORTED_MODULE_4__["default"])({
    numberOfArticles: numberOfArticles,
    articlesPerPage: articlesPerPage,
    numberOfButtons: numberOfButtons,
    currentPage: currentPage
  }),
      pagination = _createPagination.pagination;

  return __jsx(Styled, {
    className: "pagination--section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("li", {
    className: "".concat(pagination[0] === currentPage && 'disabled'),
    onClick: function onClick() {
      return paginate(currentPage - 1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: currentPage === 1 ? typeFor + 1 : typeFor + (currentPage - 1),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("a", {
    className: "link--item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Prev"))), pagination.map(function (page) {
    return __jsx("li", {
      key: page,
      className: "".concat(currentPage === page && 'active'),
      onClick: function onClick() {
        return paginate(page);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: typeFor + page,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, __jsx("a", {
      className: "link--item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, page)));
  }), __jsx("li", {
    className: "".concat(pagination.reverse()[0] === currentPage && 'disabled'),
    onClick: function onClick() {
      return paginate(currentPage + 1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: typeFor + (currentPage + 1),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx("a", {
    className: "link--item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Next")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Pagination);
{
  /* <li
  className={`${currentPage === page && 'active'}`}
  onClick={() => paginate(page)}
  >
  {page}
  </li> */
}

/***/ })

})
//# sourceMappingURL=movie.js.4bc175bdc804d5880e76.hot-update.js.map