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
  })[0].release_dates;
  var ff = getdata.find(function (_ref) {
    var certification = _ref.certification;
    return certification !== '' ? certification : 'n/a';
  });
  return ff;
}); // .release_dates.find(({ certification }) => certification !== '')
//         .certification

/***/ })

})
//# sourceMappingURL=[id].js.2dc60cb735ccc5824da8.hot-update.js.map