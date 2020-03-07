webpackHotUpdate("static\\development\\pages\\tv\\[id].js",{

/***/ "./components/utility/getRating.js":
/*!*****************************************!*\
  !*** ./components/utility/getRating.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (data) {
  var getdata = data ? data.filter(function (item) {
    return item.iso_3166_1 === 'US';
  }) : [];
  if (getdata.length === 0) return data[0].rating || data[0].certification;

  if (_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(getdata[0])[1] === 'rating') {
    return getdata[0].rating;
  } else {
    var getdatace = getdata[0].release_dates.filter(function (_ref) {
      var certification = _ref.certification;
      return certification !== '';
    });
    if (getdatace.length === 0) return 'N/A';
    return getdatace[0].certification;
  }
});

/***/ })

})
//# sourceMappingURL=[id].js.49c2205fb13cedb92c92.hot-update.js.map