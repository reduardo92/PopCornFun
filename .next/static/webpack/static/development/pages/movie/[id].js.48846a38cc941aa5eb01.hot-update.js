webpackHotUpdate("static\\development\\pages\\movie\\[id].js",{

/***/ "./components/ui/mediaProfile/ProfileStats/Facts.jsx":
/*!***********************************************************!*\
  !*** ./components/ui/mediaProfile/ProfileStats/Facts.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utility_timeConvert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utility/timeConvert */ "./components/utility/timeConvert.js");
/* harmony import */ var _utility_numberWithCommas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utility/numberWithCommas */ "./components/utility/numberWithCommas.js");
/* harmony import */ var _utility_setDateFormat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utility/setDateFormat */ "./components/utility/setDateFormat.js");
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ti */ "./node_modules/react-icons/ti/index.esm.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\mediaProfile\\ProfileStats\\Facts.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Facts__Styled",
  componentId: "a62vcl-0"
})([".stat{text-transform:capitalize;margin-bottom:0.7em;}.stat--title{font-size:0.9rem;font-weight:bold;margin-bottom:0.1em;}.release--content{display:grid;grid-row-gap:1em;& >:first-child{margin-top:0.5em;}}.release--date,.certification{display:flex;align-items:center;justify-content:start;& >:first-child{margin-right:0.5em;}}.world{font-size:1.5rem;}.rate{border-radius:2px;background-color:#081c25;color:#fff;padding:0.3em 0.6em;font-size:0.8rem;}"]);

var Facts = function Facts(_ref) {
  var data = _ref.data;
  var getReleaseType = {
    1: 'Premiere',
    2: 'Theatrical (limited)',
    3: 'Theatrical',
    4: 'Digital',
    5: 'Physical',
    6: 'Tv'
  };
  return __jsx(Styled, {
    className: "profile--stats--facts",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("h3", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Facts"), __jsx("div", {
    className: "stat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("p", {
    className: "stat--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Status"), __jsx("span", {
    className: "stat--subtext",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, data.status)), __jsx("div", {
    className: "stat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("p", {
    className: "stat--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Release Information"), __jsx("ul", {
    className: "release--content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, data.release_dates.results.filter(function (item) {
    return item.iso_3166_1 === 'US';
  })[0].release_dates.map(function (item, i) {
    return __jsx("li", {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx("div", {
      className: "release--date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx(react_icons_ti__WEBPACK_IMPORTED_MODULE_5__["TiWorld"], {
      className: "world",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }), __jsx("span", {
      className: "stat--subtext",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, Object(_utility_setDateFormat__WEBPACK_IMPORTED_MODULE_4__["default"])(item.release_date.slice(0, 10)))), __jsx("div", {
      className: "certification",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx("span", {
      className: "rate",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, item.certification), __jsx("span", {
      className: "stat--subtext",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, getReleaseType[item.type])));
  }))), __jsx("div", {
    className: "stat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("p", {
    className: "stat--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Original Language"), __jsx("span", {
    className: "stat--subtext",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, data.original_language)), __jsx("div", {
    className: "stat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("p", {
    className: "stat--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Runtime"), __jsx("span", {
    className: "stat--subtext",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, Object(_utility_timeConvert__WEBPACK_IMPORTED_MODULE_2__["default"])(data.runtime))), __jsx("div", {
    className: "stat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx("p", {
    className: "stat--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "Budget"), __jsx("span", {
    className: "stat--subtext",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, data.revenue === 0 ? 'N/A' : "$".concat(Object(_utility_numberWithCommas__WEBPACK_IMPORTED_MODULE_3__["default"])(data.revenue)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Facts);

/***/ })

})
//# sourceMappingURL=[id].js.48846a38cc941aa5eb01.hot-update.js.map