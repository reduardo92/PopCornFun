webpackHotUpdate("static\\development\\pages\\movie.js",{

/***/ "./components/utility/setDateFormat.js":
/*!*********************************************!*\
  !*** ./components/utility/setDateFormat.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  var splitDate = date.split('-');
  var month = Math.floor(splitDate[1]) - 1;
  return "".concat(months[month], " ").concat(splitDate[2], ", ").concat(splitDate[0]);
});

/***/ })

})
//# sourceMappingURL=movie.js.b2935e10946d2431cb75.hot-update.js.map