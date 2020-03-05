webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/utility/setDateFormat.js":
/*!*********************************************!*\
  !*** ./components/utility/setDateFormat.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (date) {
  var months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var splitDate = date.split('-');
  var month = Math.floor(splitDate[1]) - 1;
  return "".concat(months[month], " ").concat(splitDate[2], " ").concat(splitDate[0]);
});

/***/ })

})
//# sourceMappingURL=index.js.d3955a331b523b5480a8.hot-update.js.map