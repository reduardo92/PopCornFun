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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _context_MovieContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/MovieContext */ "./components/context/MovieContext.js");
/* harmony import */ var _createPagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createPagination */ "./components/ui/Pagination/createPagination.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\Pagination\\Pagination.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ul {\n    list-style: none;\n    padding: 0px;\n    display: flex;\n    justify-content: center;\n    align-self: center;\n    width: 100%;\n\n    li {\n      margin-right: 4px;\n      border-radius: 4px;\n      font-family: sans-serif;\n      background: var(--white-clr);\n      font-size: 1.1rem;\n      font-weight: bold;\n      min-width: 20px;\n      text-align: center;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      .link--item {\n        display: block;\n        padding: 10px 15px;\n        color: var(--second-clr);\n      }\n\n      &:last-child {\n        margin-right: 0px;\n      }\n\n      &:not(.active):not(.disabled) {\n        cursor: pointer;\n      }\n      &:not(.active):not(.disabled):hover {\n        background: var(--bg-gradient);\n        .link--item {\n          color: var(--white-clr);\n        }\n      }\n\n      &:not(.active):not(.disabled):active {\n        background: rgb(245, 110, 67);\n        .link--item {\n          color: var(--white-clr);\n        }\n      }\n\n      &.active {\n        background: rgb(245, 110, 67);\n        .link--item {\n          color: var(--white-clr);\n        }\n      }\n      &.disabled {\n        background: #fbeaff;\n        pointer-events: none;\n      }\n    }\n  }\n\n  /* @media screen and (min-width: 768px) {\n    ", "\n  } */\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Styled = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject(), function (_ref) {
  var numberOfButtons = _ref.numberOfButtons;
  return numberOfButtons + 5;
});

var Pagination = function Pagination(_ref2) {
  var numberOfArticles = _ref2.numberOfArticles,
      _ref2$articlesPerPage = _ref2.articlesPerPage,
      articlesPerPage = _ref2$articlesPerPage === void 0 ? 1 : _ref2$articlesPerPage,
      _ref2$numberOfButtons = _ref2.numberOfButtons,
      numberOfButtons = _ref2$numberOfButtons === void 0 ? 5 : _ref2$numberOfButtons,
      typeFor = _ref2.typeFor;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_MovieContext__WEBPACK_IMPORTED_MODULE_4__["default"]),
      paginate = _useContext.paginate,
      currentPage = _useContext.currentPage;

  var _createPagination = Object(_createPagination__WEBPACK_IMPORTED_MODULE_5__["default"])({
    numberOfArticles: numberOfArticles,
    articlesPerPage: articlesPerPage,
    numberOfButtons: numberOfButtons,
    currentPage: currentPage
  }),
      pagination = _createPagination.pagination;

  return __jsx(Styled, {
    className: "pagination--section",
    numberOfButtons: numberOfButtons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-3783541350",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("li", {
    onClick: function onClick() {
      return paginate(currentPage - 1);
    },
    className: "jsx-3783541350" + " " + "".concat(pagination[0] === currentPage && 'disabled'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: currentPage === 1 ? typeFor + 1 : typeFor + (currentPage - 1),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3783541350" + " " + 'link--item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Prev"))), pagination.map(function (page) {
    return __jsx("li", {
      key: page,
      onClick: function onClick() {
        return paginate(page);
      },
      className: "jsx-3783541350" + " " + "".concat(currentPage === page && 'active'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: typeFor + page,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-3783541350" + " " + 'link--item',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, page)));
  }), __jsx("li", {
    onClick: function onClick() {
      return paginate(currentPage + 1);
    },
    className: "jsx-3783541350" + " " + "".concat(pagination.reverse()[0] === currentPage && 'disabled'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: typeFor + (currentPage + 1),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3783541350" + " " + 'link--item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "Next")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3783541350",
    __self: this
  }, ".ul.jsx-3783541350{background:red !important;}@media screen and (min-width:768px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRWR1YXJkbyBSaXZhc1xcRGVza3RvcFxccmVhY3RfU3R1ZHlcXHBvcGNvcm5GdW5cXGNvbXBvbmVudHNcXHVpXFxQYWdpbmF0aW9uXFxQYWdpbmF0aW9uLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2SGtCLEFBR3FDLDBCQUM1QiIsImZpbGUiOiJDOlxcVXNlcnNcXEVkdWFyZG8gUml2YXNcXERlc2t0b3BcXHJlYWN0X1N0dWR5XFxwb3Bjb3JuRnVuXFxjb21wb25lbnRzXFx1aVxcUGFnaW5hdGlvblxcUGFnaW5hdGlvbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBNb3ZpZUNvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC9Nb3ZpZUNvbnRleHQnO1xyXG5pbXBvcnQgY3JlYXRlUGFnaW5hdGlvbiBmcm9tICcuL2NyZWF0ZVBhZ2luYXRpb24nO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgU3R5bGVkID0gc3R5bGVkLmRpdmBcclxuICB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUtY2xyKTtcclxuICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBtaW4td2lkdGg6IDIwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgLmxpbmstLWl0ZW0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kLWNscik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC5hY3RpdmUpOm5vdCguZGlzYWJsZWQpIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgJjpub3QoLmFjdGl2ZSk6bm90KC5kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWdyYWRpZW50KTtcclxuICAgICAgICAubGluay0taXRlbSB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC5hY3RpdmUpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDI0NSwgMTEwLCA2Nyk7XHJcbiAgICAgICAgLmxpbmstLWl0ZW0ge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDI0NSwgMTEwLCA2Nyk7XHJcbiAgICAgICAgLmxpbmstLWl0ZW0ge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICYuZGlzYWJsZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmYmVhZmY7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAkeyh7IG51bWJlck9mQnV0dG9ucyB9KSA9PiB7XHJcbiAgICAgIHJldHVybiBudW1iZXJPZkJ1dHRvbnMgKyA1O1xyXG4gICAgfX1cclxuICB9ICovXHJcbmA7XHJcblxyXG5jb25zdCBQYWdpbmF0aW9uID0gKHtcclxuICBudW1iZXJPZkFydGljbGVzLFxyXG4gIGFydGljbGVzUGVyUGFnZSA9IDEsXHJcbiAgbnVtYmVyT2ZCdXR0b25zID0gNSxcclxuICB0eXBlRm9yXHJcbn0pID0+IHtcclxuICBjb25zdCB7IHBhZ2luYXRlLCBjdXJyZW50UGFnZSB9ID0gdXNlQ29udGV4dChNb3ZpZUNvbnRleHQpO1xyXG5cclxuICBjb25zdCB7IHBhZ2luYXRpb24gfSA9IGNyZWF0ZVBhZ2luYXRpb24oe1xyXG4gICAgbnVtYmVyT2ZBcnRpY2xlcyxcclxuICAgIGFydGljbGVzUGVyUGFnZSxcclxuICAgIG51bWJlck9mQnV0dG9ucyxcclxuICAgIGN1cnJlbnRQYWdlXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkIGNsYXNzTmFtZT0ncGFnaW5hdGlvbi0tc2VjdGlvbicgbnVtYmVyT2ZCdXR0b25zPXtudW1iZXJPZkJ1dHRvbnN9PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3BhZ2luYXRpb25bMF0gPT09IGN1cnJlbnRQYWdlICYmICdkaXNhYmxlZCd9YH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHBhZ2luYXRlKGN1cnJlbnRQYWdlIC0gMSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgaHJlZj17Y3VycmVudFBhZ2UgPT09IDEgPyB0eXBlRm9yICsgMSA6IHR5cGVGb3IgKyAoY3VycmVudFBhZ2UgLSAxKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdsaW5rLS1pdGVtJz5QcmV2PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAge3BhZ2luYXRpb24ubWFwKHBhZ2UgPT4gKFxyXG4gICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgIGtleT17cGFnZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjdXJyZW50UGFnZSA9PT0gcGFnZSAmJiAnYWN0aXZlJ31gfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwYWdpbmF0ZShwYWdlKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17dHlwZUZvciArIHBhZ2V9PlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbGluay0taXRlbSc+e3BhZ2V9PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxsaVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtwYWdpbmF0aW9uLnJldmVyc2UoKVswXSA9PT0gY3VycmVudFBhZ2UgJiYgJ2Rpc2FibGVkJ31gfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcGFnaW5hdGUoY3VycmVudFBhZ2UgKyAxKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TGluayBocmVmPXt0eXBlRm9yICsgKGN1cnJlbnRQYWdlICsgMSl9PlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9J2xpbmstLWl0ZW0nPk5leHQ8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAudWwge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmVkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9TdHlsZWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb247XHJcblxyXG57XHJcbiAgLyogPGxpXHJcbmNsYXNzTmFtZT17YCR7Y3VycmVudFBhZ2UgPT09IHBhZ2UgJiYgJ2FjdGl2ZSd9YH1cclxub25DbGljaz17KCkgPT4gcGFnaW5hdGUocGFnZSl9XHJcbj5cclxue3BhZ2V9XHJcbjwvbGk+ICovXHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Eduardo Rivas\\\\Desktop\\\\react_Study\\\\popcornFun\\\\components\\\\ui\\\\Pagination\\\\Pagination.jsx */"));
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
//# sourceMappingURL=movie.js.27445aec428c2a013658.hot-update.js.map