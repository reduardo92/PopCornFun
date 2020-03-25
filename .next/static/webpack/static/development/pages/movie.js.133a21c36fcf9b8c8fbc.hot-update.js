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

  var numberBB = function numberBB(num) {
    if (num) {
      return numberOfButtons = numberOfButtons + num;
    } else {
      numberOfButtons;
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
      lineNumber: 102
    },
    __self: this
  }, __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1912185868", [numberOfButtons === 5 && numberOfButtons + 5]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("li", {
    onClick: function onClick() {
      return paginate(currentPage - 1);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1912185868", [numberOfButtons === 5 && numberOfButtons + 5]]]) + " " + "".concat(pagination[0] === currentPage && 'disabled'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: currentPage === 1 ? typeFor + 1 : typeFor + (currentPage - 1),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1912185868", [numberOfButtons === 5 && numberOfButtons + 5]]]) + " " + 'link--item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
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
        lineNumber: 117
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: typeFor + page,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1912185868", [numberOfButtons === 5 && numberOfButtons + 5]]]) + " " + 'link--item',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
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
      lineNumber: 127
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: typeFor + (currentPage + 1),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1912185868", [numberOfButtons === 5 && numberOfButtons + 5]]]) + " " + 'link--item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "Next"))))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1912185868", [numberOfButtons === 5 && numberOfButtons + 5]]]) + " " + 'test',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "hhhee"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1912185868",
    dynamic: [numberOfButtons === 5 && numberOfButtons + 5],
    __self: this
  }, ".test.__jsx-style-dynamic-selector{padding:20px;".concat(numberOfButtons === 5 && numberOfButtons + 5, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRWR1YXJkbyBSaXZhc1xcRGVza3RvcFxccmVhY3RfU3R1ZHlcXHBvcGNvcm5GdW5cXGNvbXBvbmVudHNcXHVpXFxQYWdpbmF0aW9uXFxQYWdpbmF0aW9uLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwSWtCLEFBR3dCLGFBR2hCLDZCQUFDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRWR1YXJkbyBSaXZhc1xcRGVza3RvcFxccmVhY3RfU3R1ZHlcXHBvcGNvcm5GdW5cXGNvbXBvbmVudHNcXHVpXFxQYWdpbmF0aW9uXFxQYWdpbmF0aW9uLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IE1vdmllQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L01vdmllQ29udGV4dCc7XHJcbmltcG9ydCBjcmVhdGVQYWdpbmF0aW9uIGZyb20gJy4vY3JlYXRlUGFnaW5hdGlvbic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBTdHlsZWQgPSBzdHlsZWQuZGl2YFxyXG4gIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBsaSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZS1jbHIpO1xyXG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIG1pbi13aWR0aDogMjBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAubGluay0taXRlbSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmQtY2xyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLmFjdGl2ZSk6bm90KC5kaXNhYmxlZCkge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAmOm5vdCguYWN0aXZlKTpub3QoLmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctZ3JhZGllbnQpO1xyXG4gICAgICAgIC5saW5rLS1pdGVtIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLmFjdGl2ZSk6bm90KC5kaXNhYmxlZCk6YWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ1LCAxMTAsIDY3KTtcclxuICAgICAgICAubGluay0taXRlbSB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ1LCAxMTAsIDY3KTtcclxuICAgICAgICAubGluay0taXRlbSB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZiZWFmZjtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyogQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICR7KHsgbnVtYmVyT2ZCdXR0b25zIH0pID0+IHtcclxuICAgICAgcmV0dXJuIG51bWJlck9mQnV0dG9ucyArIDU7XHJcbiAgICB9fVxyXG4gIH0gKi9cclxuYDtcclxuXHJcbmNvbnN0IFBhZ2luYXRpb24gPSAoe1xyXG4gIG51bWJlck9mQXJ0aWNsZXMsXHJcbiAgYXJ0aWNsZXNQZXJQYWdlID0gMSxcclxuICBudW1iZXJPZkJ1dHRvbnMgPSA1LFxyXG4gIHR5cGVGb3JcclxufSkgPT4ge1xyXG4gIGNvbnN0IHsgcGFnaW5hdGUsIGN1cnJlbnRQYWdlIH0gPSB1c2VDb250ZXh0KE1vdmllQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IG51bWJlckJCID0gbnVtID0+IHtcclxuICAgIGlmIChudW0pIHtcclxuICAgICAgcmV0dXJuIChudW1iZXJPZkJ1dHRvbnMgPSBudW1iZXJPZkJ1dHRvbnMgKyBudW0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbnVtYmVyT2ZCdXR0b25zO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHsgcGFnaW5hdGlvbiB9ID0gY3JlYXRlUGFnaW5hdGlvbih7XHJcbiAgICBudW1iZXJPZkFydGljbGVzLFxyXG4gICAgYXJ0aWNsZXNQZXJQYWdlLFxyXG4gICAgbnVtYmVyT2ZCdXR0b25zOiBudW1iZXJCQigpLFxyXG4gICAgY3VycmVudFBhZ2VcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTdHlsZWQgY2xhc3NOYW1lPSdwYWdpbmF0aW9uLS1zZWN0aW9uJyBudW1iZXJPZkJ1dHRvbnM9e251bWJlck9mQnV0dG9uc30+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cGFnaW5hdGlvblswXSA9PT0gY3VycmVudFBhZ2UgJiYgJ2Rpc2FibGVkJ31gfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwYWdpbmF0ZShjdXJyZW50UGFnZSAtIDEpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIGhyZWY9e1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2UgPT09IDEgPyB0eXBlRm9yICsgMSA6IHR5cGVGb3IgKyAoY3VycmVudFBhZ2UgLSAxKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbGluay0taXRlbSc+UHJldjwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIHtwYWdpbmF0aW9uLm1hcChwYWdlID0+IChcclxuICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAga2V5PXtwYWdlfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y3VycmVudFBhZ2UgPT09IHBhZ2UgJiYgJ2FjdGl2ZSd9YH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwYWdpbmF0ZShwYWdlKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3R5cGVGb3IgKyBwYWdlfT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbGluay0taXRlbSc+e3BhZ2V9PC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cGFnaW5hdGlvbi5yZXZlcnNlKClbMF0gPT09IGN1cnJlbnRQYWdlICYmXHJcbiAgICAgICAgICAgICAgJ2Rpc2FibGVkJ31gfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwYWdpbmF0ZShjdXJyZW50UGFnZSArIDEpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXt0eXBlRm9yICsgKGN1cnJlbnRQYWdlICsgMSl9PlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbGluay0taXRlbSc+TmV4dDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L1N0eWxlZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Rlc3QnPmhoaGVlPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAudGVzdCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgLy8gICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICAgICAgICAke251bWJlck9mQnV0dG9ucyA9PT0gNSAmJiBudW1iZXJPZkJ1dHRvbnMgKyA1fVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb247XHJcblxyXG57XHJcbiAgLyogPGxpXHJcbmNsYXNzTmFtZT17YCR7Y3VycmVudFBhZ2UgPT09IHBhZ2UgJiYgJ2FjdGl2ZSd9YH1cclxub25DbGljaz17KCkgPT4gcGFnaW5hdGUocGFnZSl9XHJcbj5cclxue3BhZ2V9XHJcbjwvbGk+ICovXHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Eduardo Rivas\\\\Desktop\\\\react_Study\\\\popcornFun\\\\components\\\\ui\\\\Pagination\\\\Pagination.jsx */")));
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
//# sourceMappingURL=movie.js.133a21c36fcf9b8c8fbc.hot-update.js.map