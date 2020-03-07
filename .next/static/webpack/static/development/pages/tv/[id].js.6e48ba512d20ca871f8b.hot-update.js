webpackHotUpdate("static\\development\\pages\\tv\\[id].js",{

/***/ "./components/utility/getRating.js":
/*!*****************************************!*\
  !*** ./components/utility/getRating.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (data) {
  var getdata = data.filter(function (item) {
    return item.iso_3166_1 === 'US';
  });
  if (getdata.length === 0) return 'N/A';
  console.log(getdata); // const getdatace = getdata[0].release_dates.filter(
  //   ({ certification }) => certification !== ''
  // );
  // if (getdatace.length === 0) return 'N/A';
  // return getdatace[0].certification;
});

/***/ })

})
//# sourceMappingURL=[id].js.6e48ba512d20ca871f8b.hot-update.js.map