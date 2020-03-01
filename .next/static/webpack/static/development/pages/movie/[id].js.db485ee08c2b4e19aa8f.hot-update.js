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
  })[0].release_dates; //   const ff = getdata.find(({ certification }) =>
  //     certification !== '' ? certification : 'n/a'
  //   );

  return getdata;
}); // .release_dates.find(({ certification }) => certification !== '')
//         .certification

/***/ })

})
//# sourceMappingURL=[id].js.db485ee08c2b4e19aa8f.hot-update.js.map