webpackHotUpdate("static\\development\\pages\\person\\[id].js",{

/***/ "./components/ui/PersonProfile/MediaCredits.jsx":
/*!******************************************************!*\
  !*** ./components/ui/PersonProfile/MediaCredits.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _mediaProfile_CreditsTabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mediaProfile/CreditsTabs */ "./components/ui/mediaProfile/CreditsTabs.jsx");
/* harmony import */ var _utility_groupeCrew__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utility/groupeCrew */ "./components/utility/groupeCrew.js");
/* harmony import */ var _utility_groupByDate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utility/groupByDate */ "./components/utility/groupByDate.js");


var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\PersonProfile\\MediaCredits.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var Styled = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "MediaCredits__Styled",
  componentId: "sc-1z0m3bt-0"
})(["display:grid;grid-template-columns:repeat(2,1fr);align-items:center;justify-content:center;.tabs--container{flex-wrap:nowrap;}.profile--media__credits--content{display:grid;grid-column:1 / 3;margin-top:1.2em;grid-gap:1.5em;}.grouped{& > div:first-child{padding-top:0.6em !important;}& > div:last-child{padding-bottom:0.6em !important;}.date{flex:0 0 9%;}}"]);

var MediaCredits = function MediaCredits(_ref) {
  var data = _ref.data,
      tab = _ref.tab,
      setTab = _ref.setTab;

  var actingDiv = function actingDiv(arry, sortBy, media) {
    var data = Object(_utility_groupByDate__WEBPACK_IMPORTED_MODULE_6__["default"])(arry, sortBy);
    return _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(data).sort(function (a, b) {
      return b[0] - a[0];
    }).map(function (_ref2) {
      var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, 2),
          _ = _ref3[0],
          value = _ref3[1];

      return __jsx("div", {
        key: Math.random() * 10,
        className: "grouped border border-black ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, value.map(function (i) {
        return __jsx(_mediaProfile_CreditsTabs__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: Math.random() * 10,
          data: i,
          typeFor: media,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        });
      }));
    });
  };

  var crewDiv = function crewDiv(arr, sortBy, media) {
    var data = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(Object(_utility_groupeCrew__WEBPACK_IMPORTED_MODULE_5__["default"])(arr, 'department', sortBy));

    return data.map(function (_ref4, index) {
      var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref4, 2),
          key = _ref5[0],
          _ = _ref5[1];

      return __jsx("div", {
        key: key,
        className: "credit--role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("h3", {
        className: "subTitle text-light my-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, key), data.map(function (_ref6) {
        var _ref7 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref6, 2),
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
              lineNumber: 61
            },
            __self: this
          }, __jsx(_mediaProfile_CreditsTabs__WEBPACK_IMPORTED_MODULE_4__["default"], {
            data: i,
            typeFor: media,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            },
            __self: this
          }));
        });
      }));
    });
  };

  return __jsx(Styled, {
    className: "profile--media__credits",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("h3", {
    className: "subTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Credits"), __jsx("div", {
    className: "tabs--container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("button", {
    className: "tab ".concat(tab === 'movies' && 'activeTab'),
    onClick: function onClick() {
      return setTab('movies');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Movies"), __jsx("button", {
    className: "tab ".concat(tab === 'tv' && 'activeTab'),
    onClick: function onClick() {
      return setTab('tv');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Tv Shows")), __jsx("div", {
    className: "profile--media__credits--content table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("div", {
    className: "credit--role",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, data.movie_credits.cast || data.tv_credits.cast && __jsx("h3", {
    className: "subTitle text-light my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Acting"), tab === 'movies' ? actingDiv(data.movie_credits.cast, 'release_date', 'movie') : tab === 'tv' ? actingDiv(data.tv_credits.cast, 'first_air_date', 'tv') : __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "nothing available")), tab === 'movies' ? crewDiv(data.movie_credits.crew, 'release_date', 'movie') : tab === 'tv' ? crewDiv(data.tv_credits.crew, 'first_air_date', 'tv') : __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "nothing available")));
};

/* harmony default export */ __webpack_exports__["default"] = (MediaCredits);

/***/ })

})
//# sourceMappingURL=[id].js.cff1930ca30777ecbdcc.hot-update.js.map