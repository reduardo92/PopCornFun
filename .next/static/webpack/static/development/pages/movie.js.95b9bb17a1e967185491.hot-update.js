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

  var numty = false;

  var numberBB = function numberBB(num) {
    return numberOfButtons = numberOfButtons + num;
  };

  var _createPagination = Object(_createPagination__WEBPACK_IMPORTED_MODULE_5__["default"])({
    numberOfArticles: numberOfArticles,
    articlesPerPage: articlesPerPage,
    numberOfButtons: numty ? numberBB(5) : numberOfButtons,
    currentPage: currentPage
  }),
      pagination = _createPagination.pagination;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(Styled, {
    className: "pagination--section",
    numberOfButtons: numberOfButtons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["54230838", [numberOfButtons === 5 && numberOfButtons + 5, numty = true]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx("li", {
    onClick: function onClick() {
      return paginate(currentPage - 1);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["54230838", [numberOfButtons === 5 && numberOfButtons + 5, numty = true]]]) + " " + "".concat(pagination[0] === currentPage && 'disabled'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: currentPage === 1 ? typeFor + 1 : typeFor + (currentPage - 1),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["54230838", [numberOfButtons === 5 && numberOfButtons + 5, numty = true]]]) + " " + 'link--item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "Prev"))), pagination.map(function (page) {
    return __jsx("li", {
      key: page,
      onClick: function onClick() {
        return paginate(page);
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["54230838", [numberOfButtons === 5 && numberOfButtons + 5, numty = true]]]) + " " + "".concat(currentPage === page && 'active'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: typeFor + page,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["54230838", [numberOfButtons === 5 && numberOfButtons + 5, numty = true]]]) + " " + 'link--item',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, page)));
  }), __jsx("li", {
    onClick: function onClick() {
      return paginate(currentPage + 1);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["54230838", [numberOfButtons === 5 && numberOfButtons + 5, numty = true]]]) + " " + "".concat(pagination.reverse()[0] === currentPage && 'disabled'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: typeFor + (currentPage + 1),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["54230838", [numberOfButtons === 5 && numberOfButtons + 5, numty = true]]]) + " " + 'link--item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "Next"))))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["54230838", [numberOfButtons === 5 && numberOfButtons + 5, numty = true]]]) + " " + 'test',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "hhhee"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "54230838",
    dynamic: [numberOfButtons === 5 && numberOfButtons + 5, numty = true],
    __self: this
  }, ".test.__jsx-style-dynamic-selector{padding:20px;".concat(numberOfButtons === 5 && numberOfButtons + 5, ";}@media screen and(max-width:768px){.__jsx-style-dynamic-selector{").concat(numty = true, ";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRWR1YXJkbyBSaXZhc1xcRGVza3RvcFxccmVhY3RfU3R1ZHlcXHBvcGNvcm5GdW5cXGNvbXBvbmVudHNcXHVpXFxQYWdpbmF0aW9uXFxQYWdpbmF0aW9uLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1SWtCLEFBR3dCLEFBT2xCLGFBSkUsZ0JBSUQsYUFKRSIsImZpbGUiOiJDOlxcVXNlcnNcXEVkdWFyZG8gUml2YXNcXERlc2t0b3BcXHJlYWN0X1N0dWR5XFxwb3Bjb3JuRnVuXFxjb21wb25lbnRzXFx1aVxcUGFnaW5hdGlvblxcUGFnaW5hdGlvbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBNb3ZpZUNvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC9Nb3ZpZUNvbnRleHQnO1xyXG5pbXBvcnQgY3JlYXRlUGFnaW5hdGlvbiBmcm9tICcuL2NyZWF0ZVBhZ2luYXRpb24nO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFN0eWxlZCA9IHN0eWxlZC5kaXZgXHJcbiAgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGxpIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlLWNscik7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbWluLXdpZHRoOiAyMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgIC5saW5rLS1pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZC1jbHIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCguYWN0aXZlKTpub3QoLmRpc2FibGVkKSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcbiAgICAgICY6bm90KC5hY3RpdmUpOm5vdCguZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ncmFkaWVudCk7XHJcbiAgICAgICAgLmxpbmstLWl0ZW0ge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCguYWN0aXZlKTpub3QoLmRpc2FibGVkKTphY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyNDUsIDExMCwgNjcpO1xyXG4gICAgICAgIC5saW5rLS1pdGVtIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyNDUsIDExMCwgNjcpO1xyXG4gICAgICAgIC5saW5rLS1pdGVtIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmLmRpc2FibGVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmJlYWZmO1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgJHsoeyBudW1iZXJPZkJ1dHRvbnMgfSkgPT4ge1xyXG4gICAgICByZXR1cm4gbnVtYmVyT2ZCdXR0b25zICsgNTtcclxuICAgIH19XHJcbiAgfSAqL1xyXG5gO1xyXG5cclxuY29uc3QgUGFnaW5hdGlvbiA9ICh7XHJcbiAgbnVtYmVyT2ZBcnRpY2xlcyxcclxuICBhcnRpY2xlc1BlclBhZ2UgPSAxLFxyXG4gIG51bWJlck9mQnV0dG9ucyA9IDUsXHJcbiAgdHlwZUZvclxyXG59KSA9PiB7XHJcbiAgY29uc3QgeyBwYWdpbmF0ZSwgY3VycmVudFBhZ2UgfSA9IHVzZUNvbnRleHQoTW92aWVDb250ZXh0KTtcclxuXHJcbiAgbGV0IG51bXR5ID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0IG51bWJlckJCID0gbnVtID0+IChudW1iZXJPZkJ1dHRvbnMgPSBudW1iZXJPZkJ1dHRvbnMgKyBudW0pO1xyXG5cclxuICBjb25zdCB7IHBhZ2luYXRpb24gfSA9IGNyZWF0ZVBhZ2luYXRpb24oe1xyXG4gICAgbnVtYmVyT2ZBcnRpY2xlcyxcclxuICAgIGFydGljbGVzUGVyUGFnZSxcclxuICAgIG51bWJlck9mQnV0dG9uczogbnVtdHkgPyBudW1iZXJCQig1KSA6IG51bWJlck9mQnV0dG9ucyxcclxuICAgIGN1cnJlbnRQYWdlXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8U3R5bGVkIGNsYXNzTmFtZT0ncGFnaW5hdGlvbi0tc2VjdGlvbicgbnVtYmVyT2ZCdXR0b25zPXtudW1iZXJPZkJ1dHRvbnN9PlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3BhZ2luYXRpb25bMF0gPT09IGN1cnJlbnRQYWdlICYmICdkaXNhYmxlZCd9YH1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcGFnaW5hdGUoY3VycmVudFBhZ2UgLSAxKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBocmVmPXtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlID09PSAxID8gdHlwZUZvciArIDEgOiB0eXBlRm9yICsgKGN1cnJlbnRQYWdlIC0gMSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2xpbmstLWl0ZW0nPlByZXY8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICB7cGFnaW5hdGlvbi5tYXAocGFnZSA9PiAoXHJcbiAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgIGtleT17cGFnZX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2N1cnJlbnRQYWdlID09PSBwYWdlICYmICdhY3RpdmUnfWB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcGFnaW5hdGUocGFnZSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXt0eXBlRm9yICsgcGFnZX0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2xpbmstLWl0ZW0nPntwYWdlfTwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3BhZ2luYXRpb24ucmV2ZXJzZSgpWzBdID09PSBjdXJyZW50UGFnZSAmJlxyXG4gICAgICAgICAgICAgICdkaXNhYmxlZCd9YH1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcGFnaW5hdGUoY3VycmVudFBhZ2UgKyAxKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17dHlwZUZvciArIChjdXJyZW50UGFnZSArIDEpfT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2xpbmstLWl0ZW0nPk5leHQ8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9TdHlsZWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXN0Jz5oaGhlZTwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnRlc3Qge1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgIC8vICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgICAgICAgJHtudW1iZXJPZkJ1dHRvbnMgPT09IDUgJiYgbnVtYmVyT2ZCdXR0b25zICsgNX1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgJHsobnVtdHkgPSB0cnVlKX1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb247XHJcblxyXG57XHJcbiAgLyogPGxpXHJcbmNsYXNzTmFtZT17YCR7Y3VycmVudFBhZ2UgPT09IHBhZ2UgJiYgJ2FjdGl2ZSd9YH1cclxub25DbGljaz17KCkgPT4gcGFnaW5hdGUocGFnZSl9XHJcbj5cclxue3BhZ2V9XHJcbjwvbGk+ICovXHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Eduardo Rivas\\\\Desktop\\\\react_Study\\\\popcornFun\\\\components\\\\ui\\\\Pagination\\\\Pagination.jsx */")));
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
//# sourceMappingURL=movie.js.95b9bb17a1e967185491.hot-update.js.map