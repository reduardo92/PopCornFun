webpackHotUpdate("static\\development\\pages\\person\\[id].js",{

/***/ "./components/utility/groupeCrew.js":
/*!******************************************!*\
  !*** ./components/utility/groupeCrew.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (arr, sortBy) {
  return arr.reduce(function (acc, obj) {
    var key = obj[sortBy];

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(obj);
    return {
      acc: acc
    };
  }, []);
});

/***/ })

})
//# sourceMappingURL=[id].js.1d7b0ac53094920c2442.hot-update.js.map