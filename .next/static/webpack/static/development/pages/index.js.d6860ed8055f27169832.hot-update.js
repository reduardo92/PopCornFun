webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/utility/movieDB.js":
/*!***************************************!*\
  !*** ./components/utility/movieDB.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/types */ "./components/context/types.js");




var movieDB = function movieDB(url) {
  var query,
      method,
      type,
      _ref,
      data,
      _args = arguments;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function movieDB$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = _args.length > 1 && _args[1] !== undefined ? _args[1] : '';
          method = _args.length > 2 && _args[2] !== undefined ? _args[2] : 'get';
          type = {
            movie: {
              details: "/movie/".concat(id),
              accStates: "/movie/".concat(id, "/account_states"),
              alterTitles: "/movie/".concat(id, "/alternative_titles"),
              changes: "/movie/".concat(id, "/changes"),
              credits: "/movie/".concat(id, "/credits"),
              externalId: "/movie/".concat(id, "/external_ids"),
              images: "/movie/".concat(id, "/images"),
              Keywords: "/movie/".concat(id, "/keywords"),
              ReleaseDate: "/movie/".concat(id, "/release_dates"),
              videos: "/movie/".concat(id, "/videos"),
              translations: "/movie/".concat(id, "/translations"),
              recommend: "/movie/".concat(id, "/recommendations"),
              similar: "/movie/".concat(id, "/similar"),
              reviews: "/movie/".concat(id, "/reviews"),
              list: "/movie/".concat(id, "/lists"),
              rate: "/movie/".concat(id, "/rating"),
              rating: "/movie/".concat(id, "/rating"),
              latest: "/movie/latest",
              now_playing: "/movie/now_playing",
              popular: "/movie/popular",
              top_rated: "/movie/top_rated",
              upcoming: "/movie/upcoming"
            }
          };
          _context.prev = 3;
          _context.next = 6;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_1___default.a[method]("".concat(_context_types__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"]).concat(url, "?").concat(_context_types__WEBPACK_IMPORTED_MODULE_2__["API_KEY"], "&language=en-US").concat(query == '' ? '' : "&".concat(query))));

        case 6:
          _ref = _context.sent;
          data = _ref.data;
          return _context.abrupt("return", data);

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](3);
          console.log(_context.t0);
          return _context.abrupt("return", {
            error: 'sorry something went wrong'
          });

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 11]]);
};

/* harmony default export */ __webpack_exports__["default"] = (movieDB);

/***/ })

})
//# sourceMappingURL=index.js.d6860ed8055f27169832.hot-update.js.map