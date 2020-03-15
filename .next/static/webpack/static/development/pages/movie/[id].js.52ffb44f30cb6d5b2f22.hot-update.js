webpackHotUpdate("static\\development\\pages\\movie\\[id].js",{

/***/ "./pages/movie/[id].jsx":
/*!******************************!*\
  !*** ./pages/movie/[id].jsx ***!
  \******************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_context_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/context/types */ "./components/context/types.js");
/* harmony import */ var _components_ui_TopBilledCast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ui/TopBilledCast */ "./components/ui/TopBilledCast.jsx");
/* harmony import */ var _components_ui_ReviewSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ui/ReviewSection */ "./components/ui/ReviewSection.jsx");
/* harmony import */ var _components_ui_MediaSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ui/MediaSection */ "./components/ui/MediaSection.jsx");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_ui_mediaProfile_ProfileHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ui/mediaProfile/ProfileHeader */ "./components/ui/mediaProfile/ProfileHeader.jsx");
/* harmony import */ var _components_ui_RecommenSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/ui/RecommenSection */ "./components/ui/RecommenSection.jsx");
/* harmony import */ var _components_ui_mediaProfile_ProfileStats_ProfileStats__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/ui/mediaProfile/ProfileStats/ProfileStats */ "./components/ui/mediaProfile/ProfileStats/ProfileStats.jsx");
/* harmony import */ var _components_context_MovieContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/context/MovieContext */ "./components/context/MovieContext.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\pages\\movie\\[id].jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "id__Styled",
  componentId: "zlmctg-0"
})(["background:var(--bg-gradient);margin-top:110px;.profile--backdrop{background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url(", ") no-repeat center;background-color:black;min-height:400px;background-size:cover;background-position:top;object-fit:cover;position:relative;&__img{position:absolute;bottom:-20vw;left:20px;width:120px;}}.profile--header{position:relative;padding:2em 0.5em;max-width:750px;margin:0 auto;}@media screen and (min-width:768px){.profile--header{max-width:1100px;padding:2em 1em;}}"], function (_ref) {
  var bgImg = _ref.bgImg;
  return "".concat(_components_context_types__WEBPACK_IMPORTED_MODULE_2__["IMG_URL_OR"]).concat(bgImg);
});

var MovieProfile = function MovieProfile(_ref2) {
  var movie = _ref2.movie;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_components_context_MovieContext__WEBPACK_IMPORTED_MODULE_10__["default"]),
      setData = _useContext.setData,
      clearData = _useContext.clearData,
      mediaProfile = _useContext.mediaProfile;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setData(_components_context_types__WEBPACK_IMPORTED_MODULE_2__["SET_MEDIADATA"], movie);
    return function () {
      clearData(_components_context_types__WEBPACK_IMPORTED_MODULE_2__["CLEAR_MEDIADATA"]);
    };
  }, [movie]); // console.log('from mediaProfile', mediaProfile);

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(Styled, {
    className: "profile",
    bgImg: movie.backdrop_path,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("div", {
    className: "profile--backdrop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx("div", {
    className: "profile--header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(_components_ui_mediaProfile_ProfileHeader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: movie,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx(_components_ui_TopBilledCast__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: movie.credits.cast,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), __jsx(_components_ui_ReviewSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: movie.reviews.results,
    movieId: movie.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), __jsx(_components_ui_MediaSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
    videos: movie.videos.results,
    posters: movie.images.posters,
    backdrops: movie.images.backdrops,
    typeId: movie.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), __jsx(_components_ui_RecommenSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: movie,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  })), __jsx(_components_ui_mediaProfile_ProfileStats_ProfileStats__WEBPACK_IMPORTED_MODULE_9__["default"], {
    data: movie,
    keywords: Object.values(movie.keywords)[0],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  })));
}; // MovieProfile.getInitialProps = async ctx => {
//   console.log(ctx.query, 'ID');
//   console.log(ctx);
//   try {
//     const movie = await movieDB(
//       `movie/${ctx.query.id || '454626'}`,
//       'append_to_response=account_states,external_ids,keywords,release_dates,videos,recommendations,reviews,credits,images&include_image_language=en,null'
//     );
//     return {
//       movie: { typeFor: 'movie', ...movie }
//     };
//   } catch (error) {
//     console.log(error);
//   }
// };


var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (MovieProfile);

/***/ })

})
//# sourceMappingURL=[id].js.52ffb44f30cb6d5b2f22.hot-update.js.map