webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/context/types.js":
/*!*************************************!*\
  !*** ./components/context/types.js ***!
  \*************************************/
/*! exports provided: API_KEY, BASE_URL, IMG_URL, IMG_URL_OR, SET_MODAL_MEDIA, RESET_MODAL_MEDIA, SET_MEDIADATA, CLEAR_MEDIADATA, SET_PERSONDATA, CLEAR_PERSONDATA, getMovie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_KEY", function() { return API_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMG_URL", function() { return IMG_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMG_URL_OR", function() { return IMG_URL_OR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_MODAL_MEDIA", function() { return SET_MODAL_MEDIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_MODAL_MEDIA", function() { return RESET_MODAL_MEDIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_MEDIADATA", function() { return SET_MEDIADATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_MEDIADATA", function() { return CLEAR_MEDIADATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PERSONDATA", function() { return SET_PERSONDATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_PERSONDATA", function() { return CLEAR_PERSONDATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovie", function() { return getMovie; });
/* harmony import */ var _utility_movieDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/movieDB */ "./components/utility/movieDB.js");

var API_KEY = "api_key=69a209b5d508b36379577751e571ebe9";
var BASE_URL = 'https://api.themoviedb.org/3/';
var IMG_URL = 'https://image.tmdb.org/t/p/w500';
var IMG_URL_OR = 'https://image.tmdb.org/t/p/original';
var SET_MODAL_MEDIA = ' SET_MODAL_MEDIA';
var RESET_MODAL_MEDIA = ' RESET_MODAL_MEDIA'; // DATA

var SET_MEDIADATA = 'SET_MEDIADATA';
var CLEAR_MEDIADATA = 'CLEAR_MEDIADATA';
var SET_PERSONDATA = 'SET_PERSONDATA';
var CLEAR_PERSONDATA = 'CLEAR_PERSONDATA '; // Movie DB

function getMovie(id, param) {
  var movie = {
    details: "/movie/".concat(id),
    accStates: "/movie/".concat(id, "/account_states"),
    alterTitles: "/movie/".concat(id, "/alternative_titles"),
    changes: "/movie/".concat(id, "/changes"),
    credits: "/movie/".concat(id, "/credits"),
    externalId: "/movie/".concat(id, "/external_ids"),
    images: "/movie/".concat(id, "/images"),
    Keywords: "/movie/".concat(id, "/keywords"),
    ReleaseDate: "/movie/".concat(id, "/release_dates"),
    videos: "/movie/".concat(id, "/videos"),
    translations: "/movie/".concat(id, "/translations"),
    recommend: "/movie/".concat(id, "/recommendations"),
    similar: "/movie/".concat(id, "/similar"),
    reviews: "/movie/".concat(id, "/reviews"),
    list: "/movie/".concat(id, "/lists"),
    rate: "/movie/".concat(id, "/rating"),
    rating: "/movie/".concat(id, "/rating"),
    latest: "/movie/latest",
    now_playing: "/movie/now_playing",
    popular: "/movie/popular",
    top_rated: "/movie/top_rated",
    upcoming: "/movie/upcoming"
  };
  var tv = {
    details: "/tv/".concat(id)
  };
  return movie[param];
}

/***/ }),

/***/ "./components/context/useMovieReducer.js":
/*!***********************************************!*\
  !*** ./components/context/useMovieReducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types */ "./components/context/types.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }



var useMovieReducer = function useMovieReducer(state, action) {
  switch (action.type) {
    // Set Media for tv & movie profile
    case _types__WEBPACK_IMPORTED_MODULE_7__["SET_MEDIADATA"]:
      return _objectSpread({}, state, {
        mediaProfile: action.payload
      });
    // Clear Media for tv & movie profile

    case _types__WEBPACK_IMPORTED_MODULE_7__["CLEAR_MEDIADATA"]:
      return _objectSpread({}, state, {
        mediaProfile: null
      });
    // Set Person Data profile

    case _types__WEBPACK_IMPORTED_MODULE_7__["SET_PERSONDATA"]:
      return _objectSpread({}, state, {
        personProfile: action.payload
      });
    // Clear Person Data profile

    case _types__WEBPACK_IMPORTED_MODULE_7__["CLEAR_PERSONDATA"]:
      return _objectSpread({}, state, {
        personProfile: null
      });
    // Set Modal Media

    case _types__WEBPACK_IMPORTED_MODULE_7__["SET_MODAL_MEDIA"]:
      return _objectSpread({}, state, {
        isModal: {
          media: action.payload,
          toggle: true,
          "for": action.typeFor
        }
      });
    // Clear Modal Media

    case _types__WEBPACK_IMPORTED_MODULE_7__["RESET_MODAL_MEDIA"]:
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
//# sourceMappingURL=_app.js.35f2287a08680b26c869.hot-update.js.map