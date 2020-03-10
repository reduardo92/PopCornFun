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
  return arr.map(function (i) {
    var year = i[sortBy];
    i[year] = i[year] === undefined || i[year] === null ? '' : i[year].slice(0, 4);
    return {
      i: i,
      date: year
    };
  }).sort(function (a, b) {
    return b.date - a.date;
  });
}); // arr.reduce((acc, obj) => {
//   let key = obj[sortBy];
//   if (!acc[key]) {
//     acc[key] = [];
//   }
//   acc[key].push(obj);
//   return acc;
// }, []);}

/***/ })

})
//# sourceMappingURL=[id].js.1329b87a86e53a777738.hot-update.js.map