webpackHotUpdate("static\\development\\pages\\discover.js",{

/***/ "./pages/discover/index.jsx":
/*!**********************************!*\
  !*** ./pages/discover/index.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_utility_movieDB__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/utility/movieDB */ "./components/utility/movieDB.js");
/* harmony import */ var _components_ui_mediaProfile_MediaSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ui/mediaProfile/MediaSection */ "./components/ui/mediaProfile/MediaSection.jsx");


var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\pages\\discover\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var discover = function discover(_ref) {
  var discover = _ref.discover;
  return __jsx(_components_ui_mediaProfile_MediaSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    mediaFor: discover,
    forPage: "disc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  });
};

discover.getInitialProps = function _callee(_ref2) {
  var query, page, sort_by, year, genres, _discover;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = _ref2.query;
          page = "&page=".concat(query.page ? query.page : 1);
          sort_by = "sort_by=".concat(query.sort_by ? query.sort_by : 'popularity.desc');
          year = query.year ? "&".concat(query.query === 'movie' ? 'primary_release_year' : 'first_air_date_year', "=").concat(query.year) : '';
          genres = query.genres ? "&with_genres=".concat(query.genres) : '';
          console.log('from query', year, genres);
          _context.prev = 6;
          _context.next = 9;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_components_utility_movieDB__WEBPACK_IMPORTED_MODULE_3__["default"])("discover/".concat(query.query), "".concat(sort_by).concat(year).concat(genres).concat(page)));

        case 9:
          _discover = _context.sent;
          return _context.abrupt("return", {
            discover: _objectSpread({
              typeFor: query.query,
              title: query.query
            }, _discover)
          });

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](6);
          console.log(_context.t0);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[6, 13]], Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (discover);

/***/ })

})
//# sourceMappingURL=discover.js.c2e961c77b74daf47afb.hot-update.js.map