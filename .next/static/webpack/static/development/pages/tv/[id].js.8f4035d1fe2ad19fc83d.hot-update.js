webpackHotUpdate("static\\development\\pages\\tv\\[id].js",{

/***/ "./components/utility/timeConvert.js":
/*!*******************************************!*\
  !*** ./components/utility/timeConvert.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (time) {
  var hours = time / 60;
  var rhours = Math.floor(hours);
  var minutes = Math.round((hours - rhours) * 60);
  return rhours === 0 ? "".concat(minutes, "m") : "".concat(rhours, "h ").concat(minutes, "m");
});

/***/ })

})
//# sourceMappingURL=[id].js.8f4035d1fe2ad19fc83d.hot-update.js.map