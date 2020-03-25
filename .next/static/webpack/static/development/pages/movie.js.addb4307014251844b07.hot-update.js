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

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\Pagination\\Pagination.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  justify-content: center;\n  padding-top: 100px;\n  ul {\n    list-style: none;\n    padding: 0px;\n    display: flex;\n\n    li {\n      background: #845ec2;\n      padding: 10px 15px;\n      margin-right: 4px;\n      border-radius: 4px;\n      font-family: sans-serif;\n      color: #fff;\n      font-size: 1.1rem;\n      min-width: 20px;\n      text-align: center;\n      user-select: none;\n\n      &:last-child {\n        margin-right: 0px;\n      }\n\n      &:not(.active):not(.disabled) {\n        cursor: pointer;\n      }\n      &:not(.active):not(.disabled):hover {\n        background: #d65db1;\n      }\n      &:not(.active):not(.disabled):active {\n        background: #3e207c;\n      }\n\n      &.active {\n        background: #ff6f91;\n      }\n      &.disabled {\n        background: #fbeaff;\n        pointer-events: none;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());

var Pagination = function Pagination(props) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_MovieContext__WEBPACK_IMPORTED_MODULE_3__["default"]),
      paginate = _useContext.paginate,
      currentPage = _useContext.currentPage; // const pp = createPagination({
  //     numberOfArticles: 223,
  //     articlesPerPage: 12,
  //     numberOfButtons: 10,
  //     currentPage
  //   });


  var pagination = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return __jsx(Styled, {
    className: "pagination--section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("li", {
    className: "".concat(pagination[0] === currentPage && 'disabled'),
    onClick: function onClick() {
      return paginate(currentPage - 1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Prev"), pagination.map(function (page) {
    return __jsx("li", {
      className: "".concat(currentPage === page && 'active'),
      onClick: function onClick() {
        return paginate(page);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, page);
  }), __jsx("li", {
    className: "".concat(pagination.reverse()[0] === currentPage && 'disabled'),
    onClick: function onClick() {
      return paginate(currentPage + 1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Next")));
};

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ })

})
//# sourceMappingURL=movie.js.addb4307014251844b07.hot-update.js.map