webpackHotUpdate("static\\development\\pages\\person\\[id].js",{

/***/ "./components/ui/PersonProfile/MediaCredits.jsx":
/*!******************************************************!*\
  !*** ./components/ui/PersonProfile/MediaCredits.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _mediaProfile_CreditsTabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mediaProfile/CreditsTabs */ "./components/ui/mediaProfile/CreditsTabs.jsx");
/* harmony import */ var _utility_groupeCrew__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utility/groupeCrew */ "./components/utility/groupeCrew.js");
/* harmony import */ var _utility_groupByDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utility/groupByDate */ "./components/utility/groupByDate.js");

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\PersonProfile\\MediaCredits.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "MediaCredits__Styled",
  componentId: "sc-1z0m3bt-0"
})(["display:grid;grid-template-columns:repeat(2,1fr);align-items:center;justify-content:center;max-width:1022px;.tabs--container{flex-wrap:nowrap;}.subTitle{color:var(--white-clr);}.credit--inner{box-shadow:0px 7px 21px rgba(0,0,0,0.3);}.profile--media__credits--content{display:grid;grid-column:1 / 3;margin-top:1.2em;grid-gap:1.5em;}.grouped{& > div:first-child{padding-top:0.6em !important;}& > div:last-child{padding-bottom:0.6em !important;}.date{flex:0 0 9%;}}@media screen and (min-width:1000px){*{color:var(--second-clr);}.subTitle{color:var(--second-clr);}}"]);

var MediaCredits = function MediaCredits(_ref) {
  var data = _ref.data,
      tab = _ref.tab,
      setTab = _ref.setTab;

  var actingDiv = function actingDiv(arry, sortBy, media) {
    var data = Object(_utility_groupByDate__WEBPACK_IMPORTED_MODULE_5__["default"])(arry, sortBy);
    return Object.entries(data).sort(function (a, b) {
      return b[0] - a[0];
    }).map(function (_ref2) {
      var _ref3 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, 2),
          _ = _ref3[0],
          value = _ref3[1];

      return __jsx("div", {
        key: Math.random() * 10,
        className: "grouped border border-black ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, value.map(function (i) {
        return __jsx(_mediaProfile_CreditsTabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: Math.random() * 10,
          data: i,
          typeFor: media,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        });
      }));
    });
  };

  var crewDiv = function crewDiv(arr, sortBy, media) {
    var data = Object.entries(Object(_utility_groupeCrew__WEBPACK_IMPORTED_MODULE_4__["default"])(arr, 'department', sortBy));
    return data.map(function (_ref4, index) {
      var _ref5 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref4, 2),
          key = _ref5[0],
          _ = _ref5[1];

      return __jsx("div", {
        key: key,
        className: "credit--role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, __jsx("h3", {
        className: "subTitle my-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, key), __jsx("div", {
        className: "credit--inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, data.map(function (_ref6) {
        var _ref7 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref6, 2),
            _ = _ref7[0],
            value = _ref7[1];

        return value;
      })[index].map(function (item) {
        return item.map(function (i) {
          return __jsx("div", {
            key: Math.random() * 10,
            className: "grouped border border-black",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            },
            __self: this
          }, __jsx(_mediaProfile_CreditsTabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
            data: i,
            typeFor: media,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            },
            __self: this
          }));
        });
      })));
    });
  };

  return __jsx(Styled, {
    className: "profile--media__credits px-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("h3", {
    className: "subTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Credits"), __jsx("div", {
    className: "tabs--container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("button", {
    className: "tab ".concat(tab === 'movies' && 'activeTab'),
    onClick: function onClick() {
      return setTab('movies');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Movies"), __jsx("button", {
    className: "tab ".concat(tab === 'tv' && 'activeTab'),
    onClick: function onClick() {
      return setTab('tv');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Tv Shows")), __jsx("div", {
    className: "profile--media__credits--content table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx("div", {
    className: "credit--role",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, (data.movie_credits.cast || data.tv_credits.cast) && __jsx("h3", {
    className: "subTitle my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "Acting"), __jsx("div", {
    className: "credit--inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, tab === 'movies' ? actingDiv(data.movie_credits.cast, 'release_date', 'movie') : tab === 'tv' ? actingDiv(data.tv_credits.cast, 'first_air_date', 'tv') : __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "nothing available"))), tab === 'movies' ? crewDiv(data.movie_credits.crew, 'release_date', 'movie') : tab === 'tv' ? crewDiv(data.tv_credits.crew, 'first_air_date', 'tv') : __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "nothing available")));
};

/* harmony default export */ __webpack_exports__["default"] = (MediaCredits);

/***/ })

})
//# sourceMappingURL=[id].js.6104af8bbd27cafb9740.hot-update.js.map