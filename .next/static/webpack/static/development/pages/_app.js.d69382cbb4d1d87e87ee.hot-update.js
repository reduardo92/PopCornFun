webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/context/useMovieReducer.js":
/*!***********************************************!*\
  !*** ./components/context/useMovieReducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./components/context/types.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var useMovieReducer = function useMovieReducer(state, action) {
  switch (action.type) {
    // Set Modal Media
    case _types__WEBPACK_IMPORTED_MODULE_1__["SET_MODAL_MEDIA"]:
      return _objectSpread({}, state, {
        isModal: {
          media: action.payload,
          toggle: true,
          "for": action.typeFor
        }
      });
    // Clear Modal Media

    case _types__WEBPACK_IMPORTED_MODULE_1__["RESET_MODAL_MEDIA"]:
      return _objectSpread({}, state, {
        isModal: {
          media: null,
          toggle: false,
          "for": null
        }
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (useMovieReducer);

/***/ })

})
//# sourceMappingURL=_app.js.d69382cbb4d1d87e87ee.hot-update.js.map