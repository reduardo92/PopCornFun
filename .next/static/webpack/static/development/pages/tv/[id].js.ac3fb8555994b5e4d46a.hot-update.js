webpackHotUpdate("static\\development\\pages\\tv\\[id].js",{

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _context_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../context/types */ "./components/context/types.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\mediaProfile\\ProfileStats\\Facts.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Facts__Styled",
  componentId: "a62vcl-0"
})([".stat{text-transform:capitalize;margin-bottom:0.7em;}.stat--title{font-size:0.9rem;font-weight:bold;margin-bottom:0.1em;}.release--content{display:grid;grid-row-gap:1em;& >:first-child{margin-top:0.5em;}}.release--date,.certification{display:flex;align-items:center;justify-content:start;& >:first-child{margin-right:0.5em;}}.world{font-size:1.5rem;path{color:#535353;}}.rate{border-radius:2px;background-color:var(--primary-clr);color:#fff;padding:0.15em 0.5em;font-size:0.8rem;border-radius:5px;}.network--logo{width:60px;}"]);

var Facts = function Facts(_ref) {
  var data = _ref.data;
  var getReleaseType = {
    1: 'Premiere',
    2: 'Theatrical (limited)',
    3: 'Theatrical',
    4: 'Digital',
    5: 'Physical',
    6: 'Tv'
  }; // const release = data.r
  //   <>
  //   </>

  var networks = data.typeFor === 'tv' && data.networks.map(function (netWork) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      key: netWork.id,
      href: "/network/[id]",
      as: "/network/".concat(netWork.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx("img", {
      className: "network--logo",
      src: "".concat(_context_types__WEBPACK_IMPORTED_MODULE_7__["IMG_URL"]).concat(netWork.logo_path),
      alt: netWork.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }));
  });
  console.log('hello', data[data.typeFor === 'tv' ? 'content_ratings' : 'release_dates'].results.filter(function (item) {
    return item.iso_3166_1 === 'US';
  })[0][1]);
  return __jsx(Styled, {
    className: "profile--stats--facts",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("h3", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Facts"), __jsx("div", {
    className: "stat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("p", {
    className: "stat--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Status"), __jsx("span", {
    className: "stat--subtext",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, data.status)), __jsx("div", {
    className: "stat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx("p", {
    className: "stat--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, data.release_dates ? 'Release Information' : 'Networks'), __jsx("ul", {
    className: "release--content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, networks, data.typeFor === 'tv' && __jsx("p", {
    className: "stat--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Certification"))), data.typeFor === 'tv' && __jsx("div", {
    className: "stat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx("p", {
    className: "stat--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "Type"), __jsx("span", {
    className: "stat--subtext",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, data.type)), __jsx("div", {
    className: "stat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx("p", {
    className: "stat--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "Original Language"), __jsx("span", {
    className: "stat--subtext",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, data.original_language)), __jsx("div", {
    className: "stat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx("p", {
    className: "stat--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "Runtime"), __jsx("span", {
    className: "stat--subtext",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, Object(_utility_timeConvert__WEBPACK_IMPORTED_MODULE_2__["default"])(data.runtime || data.episode_run_time[0]))), data.typeFor === 'tv' ? null : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "stat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx("p", {
    className: "stat--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "Budget"), __jsx("span", {
    className: "stat--subtext",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, data.budget === 0 ? 'N/A' : "$".concat(Object(_utility_numberWithCommas__WEBPACK_IMPORTED_MODULE_3__["default"])(data.budget)))), __jsx("div", {
    className: "stat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, __jsx("p", {
    className: "stat--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "Revenue"), __jsx("span", {
    className: "stat--subtext",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, data.revenue === 0 ? 'N/A' : "$".concat(Object(_utility_numberWithCommas__WEBPACK_IMPORTED_MODULE_3__["default"])(data.revenue))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Facts);

/***/ })

})
//# sourceMappingURL=[id].js.ac3fb8555994b5e4d46a.hot-update.js.map