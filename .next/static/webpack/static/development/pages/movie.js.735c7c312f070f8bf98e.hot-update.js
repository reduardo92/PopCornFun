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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      num = _useState[0],
      setNum = _useState[1];

  var numberBB = function numberBB() {
    if (num) {
      return numberOfButtons = numberOfButtons + num;
    } else {
      return numberOfButtons;
    }
  };

  var _createPagination = Object(_createPagination__WEBPACK_IMPORTED_MODULE_5__["default"])({
    numberOfArticles: numberOfArticles,
    articlesPerPage: articlesPerPage,
    numberOfButtons: numberBB(),
    currentPage: currentPage
  }),
      pagination = _createPagination.pagination;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(Styled, {
    className: "pagination--section",
    numberOfButtons: numberOfButtons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1912185868", [numberOfButtons === 5 && numberOfButtons + 5]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx("li", {
    onClick: function onClick() {
      return paginate(currentPage - 1);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1912185868", [numberOfButtons === 5 && numberOfButtons + 5]]]) + " " + "".concat(pagination[0] === currentPage && 'disabled'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: currentPage === 1 ? typeFor + 1 : typeFor + (currentPage - 1),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1912185868", [numberOfButtons === 5 && numberOfButtons + 5]]]) + " " + 'link--item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "Prev"))), pagination.map(function (page) {
    return __jsx("li", {
      key: page,
      onClick: function onClick() {
        return paginate(page);
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1912185868", [numberOfButtons === 5 && numberOfButtons + 5]]]) + " " + "".concat(currentPage === page && 'active'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: typeFor + page,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1912185868", [numberOfButtons === 5 && numberOfButtons + 5]]]) + " " + 'link--item',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, page)));
  }), __jsx("li", {
    onClick: function onClick() {
      return paginate(currentPage + 1);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1912185868", [numberOfButtons === 5 && numberOfButtons + 5]]]) + " " + "".concat(pagination.reverse()[0] === currentPage && 'disabled'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: typeFor + (currentPage + 1),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1912185868", [numberOfButtons === 5 && numberOfButtons + 5]]]) + " " + 'link--item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "Next"))))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1912185868", [numberOfButtons === 5 && numberOfButtons + 5]]]) + " " + 'test',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, "hhhee"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1912185868",
    dynamic: [numberOfButtons === 5 && numberOfButtons + 5],
    __self: this
  }, ".test.__jsx-style-dynamic-selector{padding:20px;".concat(numberOfButtons === 5 && numberOfButtons + 5, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRWR1YXJkbyBSaXZhc1xcRGVza3RvcFxccmVhY3RfU3R1ZHlcXHBvcGNvcm5GdW5cXGNvbXBvbmVudHNcXHVpXFxQYWdpbmF0aW9uXFxQYWdpbmF0aW9uLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0SWtCLEFBR3dCLGFBR2hCLDZCQUFDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRWR1YXJkbyBSaXZhc1xcRGVza3RvcFxccmVhY3RfU3R1ZHlcXHBvcGNvcm5GdW5cXGNvbXBvbmVudHNcXHVpXFxQYWdpbmF0aW9uXFxQYWdpbmF0aW9uLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IE1vdmllQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L01vdmllQ29udGV4dCc7XHJcbmltcG9ydCBjcmVhdGVQYWdpbmF0aW9uIGZyb20gJy4vY3JlYXRlUGFnaW5hdGlvbic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgU3R5bGVkID0gc3R5bGVkLmRpdmBcclxuICB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUtY2xyKTtcclxuICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBtaW4td2lkdGg6IDIwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgLmxpbmstLWl0ZW0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kLWNscik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC5hY3RpdmUpOm5vdCguZGlzYWJsZWQpIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgJjpub3QoLmFjdGl2ZSk6bm90KC5kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWdyYWRpZW50KTtcclxuICAgICAgICAubGluay0taXRlbSB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC5hY3RpdmUpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDI0NSwgMTEwLCA2Nyk7XHJcbiAgICAgICAgLmxpbmstLWl0ZW0ge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDI0NSwgMTEwLCA2Nyk7XHJcbiAgICAgICAgLmxpbmstLWl0ZW0ge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICYuZGlzYWJsZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmYmVhZmY7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAkeyh7IG51bWJlck9mQnV0dG9ucyB9KSA9PiB7XHJcbiAgICAgIHJldHVybiBudW1iZXJPZkJ1dHRvbnMgKyA1O1xyXG4gICAgfX1cclxuICB9ICovXHJcbmA7XHJcblxyXG5jb25zdCBQYWdpbmF0aW9uID0gKHtcclxuICBudW1iZXJPZkFydGljbGVzLFxyXG4gIGFydGljbGVzUGVyUGFnZSA9IDEsXHJcbiAgbnVtYmVyT2ZCdXR0b25zID0gNSxcclxuICB0eXBlRm9yXHJcbn0pID0+IHtcclxuICBjb25zdCB7IHBhZ2luYXRlLCBjdXJyZW50UGFnZSB9ID0gdXNlQ29udGV4dChNb3ZpZUNvbnRleHQpO1xyXG4gIGNvbnN0IFtudW0sIHNldE51bV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgbnVtYmVyQkIgPSAoKSA9PiB7XHJcbiAgICBpZiAobnVtKSB7XHJcbiAgICAgIHJldHVybiAobnVtYmVyT2ZCdXR0b25zID0gbnVtYmVyT2ZCdXR0b25zICsgbnVtKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudW1iZXJPZkJ1dHRvbnM7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgeyBwYWdpbmF0aW9uIH0gPSBjcmVhdGVQYWdpbmF0aW9uKHtcclxuICAgIG51bWJlck9mQXJ0aWNsZXMsXHJcbiAgICBhcnRpY2xlc1BlclBhZ2UsXHJcbiAgICBudW1iZXJPZkJ1dHRvbnM6IG51bWJlckJCKCksXHJcbiAgICBjdXJyZW50UGFnZVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFN0eWxlZCBjbGFzc05hbWU9J3BhZ2luYXRpb24tLXNlY3Rpb24nIG51bWJlck9mQnV0dG9ucz17bnVtYmVyT2ZCdXR0b25zfT5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwYWdpbmF0aW9uWzBdID09PSBjdXJyZW50UGFnZSAmJiAnZGlzYWJsZWQnfWB9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHBhZ2luYXRlKGN1cnJlbnRQYWdlIC0gMSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgaHJlZj17XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZSA9PT0gMSA/IHR5cGVGb3IgKyAxIDogdHlwZUZvciArIChjdXJyZW50UGFnZSAtIDEpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdsaW5rLS1pdGVtJz5QcmV2PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAge3BhZ2luYXRpb24ubWFwKHBhZ2UgPT4gKFxyXG4gICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICBrZXk9e3BhZ2V9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjdXJyZW50UGFnZSA9PT0gcGFnZSAmJiAnYWN0aXZlJ31gfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHBhZ2luYXRlKHBhZ2UpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17dHlwZUZvciArIHBhZ2V9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdsaW5rLS1pdGVtJz57cGFnZX08L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwYWdpbmF0aW9uLnJldmVyc2UoKVswXSA9PT0gY3VycmVudFBhZ2UgJiZcclxuICAgICAgICAgICAgICAnZGlzYWJsZWQnfWB9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHBhZ2luYXRlKGN1cnJlbnRQYWdlICsgMSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3R5cGVGb3IgKyAoY3VycmVudFBhZ2UgKyAxKX0+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdsaW5rLS1pdGVtJz5OZXh0PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvU3R5bGVkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndGVzdCc+aGhoZWU8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC50ZXN0IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAvLyAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgICAgICAgICR7bnVtYmVyT2ZCdXR0b25zID09PSA1ICYmIG51bWJlck9mQnV0dG9ucyArIDV9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcclxuXHJcbntcclxuICAvKiA8bGlcclxuY2xhc3NOYW1lPXtgJHtjdXJyZW50UGFnZSA9PT0gcGFnZSAmJiAnYWN0aXZlJ31gfVxyXG5vbkNsaWNrPXsoKSA9PiBwYWdpbmF0ZShwYWdlKX1cclxuPlxyXG57cGFnZX1cclxuPC9saT4gKi9cclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Eduardo Rivas\\\\Desktop\\\\react_Study\\\\popcornFun\\\\components\\\\ui\\\\Pagination\\\\Pagination.jsx */")));
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
//# sourceMappingURL=movie.js.735c7c312f070f8bf98e.hot-update.js.map