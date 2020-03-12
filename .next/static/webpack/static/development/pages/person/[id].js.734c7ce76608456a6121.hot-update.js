webpackHotUpdate("static\\development\\pages\\person\\[id].js",{

/***/ "./components/utility/groupeCrew.js":
/*!******************************************!*\
  !*** ./components/utility/groupeCrew.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");

/* harmony default export */ __webpack_exports__["default"] = (function (arr, sortBy) {
  return arr.reduce(function (acc, obj) {
    var key = obj[sortBy];

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(obj);
    return Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sortBy, acc);
  }, []);
});

/***/ })

})
//# sourceMappingURL=[id].js.734c7ce76608456a6121.hot-update.js.map