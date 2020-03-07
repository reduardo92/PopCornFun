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
  var getdatace = getdata[0].release_dates.filter(function (_ref) {
    var certification = _ref.certification;
    return certification !== '';
  });
  if (getdatace.length === 0) return 'N/A';
  return getdatace[0].certification;
});

/***/ })

})
//# sourceMappingURL=[id].js.b69bc0cbc946058540c9.hot-update.js.map