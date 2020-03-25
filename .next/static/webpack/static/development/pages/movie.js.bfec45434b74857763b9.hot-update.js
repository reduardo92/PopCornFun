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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["884311531", [function (_ref3) {
      var numberOfButtons = _ref3.numberOfButtons;
      console.log(numberOfButtons + 5);
      return numberOfButtons + 5;
    }]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("li", {
    onClick: function onClick() {
      return paginate(currentPage - 1);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["884311531", [function (_ref3) {
      var numberOfButtons = _ref3.numberOfButtons;
      console.log(numberOfButtons + 5);
      return numberOfButtons + 5;
    }]]]) + " " + "".concat(pagination[0] === currentPage && 'disabled'),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["884311531", [function (_ref3) {
      var numberOfButtons = _ref3.numberOfButtons;
      console.log(numberOfButtons + 5);
      return numberOfButtons + 5;
    }]]]) + " " + 'link--item',
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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["884311531", [function (_ref3) {
        var numberOfButtons = _ref3.numberOfButtons;
        console.log(numberOfButtons + 5);
        return numberOfButtons + 5;
      }]]]) + " " + "".concat(currentPage === page && 'active'),
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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["884311531", [function (_ref3) {
        var numberOfButtons = _ref3.numberOfButtons;
        console.log(numberOfButtons + 5);
        return numberOfButtons + 5;
      }]]]) + " " + 'link--item',
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["884311531", [function (_ref3) {
      var numberOfButtons = _ref3.numberOfButtons;
      console.log(numberOfButtons + 5);
      return numberOfButtons + 5;
    }]]]) + " " + "".concat(pagination.reverse()[0] === currentPage && 'disabled'),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["884311531", [function (_ref3) {
      var numberOfButtons = _ref3.numberOfButtons;
      console.log(numberOfButtons + 5);
      return numberOfButtons + 5;
    }]]]) + " " + 'link--item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "Next")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "884311531",
    dynamic: [function (_ref3) {
      var numberOfButtons = _ref3.numberOfButtons;
      console.log(numberOfButtons + 5);
      return numberOfButtons + 5;
    }],
    __self: this
  }, "@media screen and (min-width:768px){.__jsx-style-dynamic-selector{".concat(function (_ref4) {
    var numberOfButtons = _ref4.numberOfButtons;
    console.log(numberOfButtons + 5);
    return numberOfButtons + 5;
  }, ";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRWR1YXJkbyBSaXZhc1xcRGVza3RvcFxccmVhY3RfU3R1ZHlcXHBvcGNvcm5GdW5cXGNvbXBvbmVudHNcXHVpXFxQYWdpbmF0aW9uXFxQYWdpbmF0aW9uLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2SGtCLEFBSVEsNkJBQUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxFZHVhcmRvIFJpdmFzXFxEZXNrdG9wXFxyZWFjdF9TdHVkeVxccG9wY29ybkZ1blxcY29tcG9uZW50c1xcdWlcXFBhZ2luYXRpb25cXFBhZ2luYXRpb24uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgTW92aWVDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvTW92aWVDb250ZXh0JztcclxuaW1wb3J0IGNyZWF0ZVBhZ2luYXRpb24gZnJvbSAnLi9jcmVhdGVQYWdpbmF0aW9uJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IFN0eWxlZCA9IHN0eWxlZC5kaXZgXHJcbiAgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGxpIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlLWNscik7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbWluLXdpZHRoOiAyMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgIC5saW5rLS1pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZC1jbHIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCguYWN0aXZlKTpub3QoLmRpc2FibGVkKSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcbiAgICAgICY6bm90KC5hY3RpdmUpOm5vdCguZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ncmFkaWVudCk7XHJcbiAgICAgICAgLmxpbmstLWl0ZW0ge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCguYWN0aXZlKTpub3QoLmRpc2FibGVkKTphY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyNDUsIDExMCwgNjcpO1xyXG4gICAgICAgIC5saW5rLS1pdGVtIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyNDUsIDExMCwgNjcpO1xyXG4gICAgICAgIC5saW5rLS1pdGVtIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmLmRpc2FibGVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmJlYWZmO1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgJHsoeyBudW1iZXJPZkJ1dHRvbnMgfSkgPT4ge1xyXG4gICAgICByZXR1cm4gbnVtYmVyT2ZCdXR0b25zICsgNTtcclxuICAgIH19XHJcbiAgfSAqL1xyXG5gO1xyXG5cclxuY29uc3QgUGFnaW5hdGlvbiA9ICh7XHJcbiAgbnVtYmVyT2ZBcnRpY2xlcyxcclxuICBhcnRpY2xlc1BlclBhZ2UgPSAxLFxyXG4gIG51bWJlck9mQnV0dG9ucyA9IDUsXHJcbiAgdHlwZUZvclxyXG59KSA9PiB7XHJcbiAgY29uc3QgeyBwYWdpbmF0ZSwgY3VycmVudFBhZ2UgfSA9IHVzZUNvbnRleHQoTW92aWVDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgeyBwYWdpbmF0aW9uIH0gPSBjcmVhdGVQYWdpbmF0aW9uKHtcclxuICAgIG51bWJlck9mQXJ0aWNsZXMsXHJcbiAgICBhcnRpY2xlc1BlclBhZ2UsXHJcbiAgICBudW1iZXJPZkJ1dHRvbnMsXHJcbiAgICBjdXJyZW50UGFnZVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZCBjbGFzc05hbWU9J3BhZ2luYXRpb24tLXNlY3Rpb24nIG51bWJlck9mQnV0dG9ucz17bnVtYmVyT2ZCdXR0b25zfT5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtwYWdpbmF0aW9uWzBdID09PSBjdXJyZW50UGFnZSAmJiAnZGlzYWJsZWQnfWB9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwYWdpbmF0ZShjdXJyZW50UGFnZSAtIDEpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIGhyZWY9e2N1cnJlbnRQYWdlID09PSAxID8gdHlwZUZvciArIDEgOiB0eXBlRm9yICsgKGN1cnJlbnRQYWdlIC0gMSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbGluay0taXRlbSc+UHJldjwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIHtwYWdpbmF0aW9uLm1hcChwYWdlID0+IChcclxuICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICBrZXk9e3BhZ2V9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y3VycmVudFBhZ2UgPT09IHBhZ2UgJiYgJ2FjdGl2ZSd9YH1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcGFnaW5hdGUocGFnZSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3R5cGVGb3IgKyBwYWdlfT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2xpbmstLWl0ZW0nPntwYWdlfTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgICA8bGlcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7cGFnaW5hdGlvbi5yZXZlcnNlKClbMF0gPT09IGN1cnJlbnRQYWdlICYmICdkaXNhYmxlZCd9YH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHBhZ2luYXRlKGN1cnJlbnRQYWdlICsgMSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17dHlwZUZvciArIChjdXJyZW50UGFnZSArIDEpfT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdsaW5rLS1pdGVtJz5OZXh0PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICR7KHsgbnVtYmVyT2ZCdXR0b25zIH0pID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobnVtYmVyT2ZCdXR0b25zICsgNSk7XHJcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJPZkJ1dHRvbnMgKyA1O1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvU3R5bGVkPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uO1xyXG5cclxue1xyXG4gIC8qIDxsaVxyXG5jbGFzc05hbWU9e2Ake2N1cnJlbnRQYWdlID09PSBwYWdlICYmICdhY3RpdmUnfWB9XHJcbm9uQ2xpY2s9eygpID0+IHBhZ2luYXRlKHBhZ2UpfVxyXG4+XHJcbntwYWdlfVxyXG48L2xpPiAqL1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Eduardo Rivas\\\\Desktop\\\\react_Study\\\\popcornFun\\\\components\\\\ui\\\\Pagination\\\\Pagination.jsx */")));
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
//# sourceMappingURL=movie.js.bfec45434b74857763b9.hot-update.js.map