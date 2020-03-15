webpackHotUpdate("static\\development\\pages\\movie\\[id].js",{

/***/ "./components/context/types.js":
/*!*************************************!*\
  !*** ./components/context/types.js ***!
  \*************************************/
/*! exports provided: API_KEY, BASE_URL, IMG_URL, IMG_URL_OR, SET_MODAL_MEDIA, RESET_MODAL_MEDIA, getMovie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_KEY", function() { return API_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMG_URL", function() { return IMG_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMG_URL_OR", function() { return IMG_URL_OR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_MODAL_MEDIA", function() { return SET_MODAL_MEDIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_MODAL_MEDIA", function() { return RESET_MODAL_MEDIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovie", function() { return getMovie; });
/* harmony import */ var _utility_movieDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/movieDB */ "./components/utility/movieDB.js");

var API_KEY = "api_key=69a209b5d508b36379577751e571ebe9";
var BASE_URL = 'https://api.themoviedb.org/3/';
var IMG_URL = 'https://image.tmdb.org/t/p/w500';
var IMG_URL_OR = 'https://image.tmdb.org/t/p/original';
var SET_MODAL_MEDIA = ' SET_MODAL_MEDIA';
var RESET_MODAL_MEDIA = ' RESET_MODAL_MEDIA'; // DATA
// Movie DB

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

/***/ })

})
//# sourceMappingURL=[id].js.64666315af9b1cfcc68a.hot-update.js.map