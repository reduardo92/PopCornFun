webpackHotUpdate("static\\development\\pages\\movie\\[id].js",{

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
  return getdata[0].release_dates; //   const ff = getdata.find(({ certification }) =>
  //     certification !== '' ? certification : 'n/a'
  //   );
}); // .release_dates.find(({ certification }) => certification !== '')
//         .certification

/***/ })

})
//# sourceMappingURL=[id].js.553ad429b2c5b202ab2d.hot-update.js.map