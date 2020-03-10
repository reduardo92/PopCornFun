webpackHotUpdate("static\\development\\pages\\person\\[id].js",{

/***/ "./components/utility/groupCrew.js":
/*!*****************************************!*\
  !*** ./components/utility/groupCrew.js ***!
  \*****************************************/
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
    return acc;
  }, []);
});

/***/ })

})
//# sourceMappingURL=[id].js.5680fd747234bbba76e5.hot-update.js.map