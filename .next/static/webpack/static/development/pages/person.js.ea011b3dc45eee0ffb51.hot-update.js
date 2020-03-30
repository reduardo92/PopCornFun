webpackHotUpdate("static\\development\\pages\\person.js",{

/***/ "./components/utility/movieDB.js":
/*!***************************************!*\
  !*** ./components/utility/movieDB.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/types */ "./components/context/types.js");




var movieDB = function movieDB(url) {
  var query,
      method,
      _ref,
      data,
      _args = arguments;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function movieDB$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = _args.length > 1 && _args[1] !== undefined ? _args[1] : '';
          method = _args.length > 2 && _args[2] !== undefined ? _args[2] : 'get';
          _context.prev = 2;
          _context.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_1___default.a[method]("".concat(_context_types__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"]).concat(url, "?").concat(_context_types__WEBPACK_IMPORTED_MODULE_2__["API_KEY"], "&language=en-US").concat(query == '' ? '' : "&".concat(query))));

        case 5:
          _ref = _context.sent;
          data = _ref.data;
          return _context.abrupt("return", data);

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](2);
          console.log(_context.t0);
          return _context.abrupt("return", {
            error: 'sorry something went wrong'
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 10]], Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (movieDB);

/***/ })

})
//# sourceMappingURL=person.js.ea011b3dc45eee0ffb51.hot-update.js.map