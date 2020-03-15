webpackHotUpdate("static\\development\\pages\\movie\\[id].js",{

/***/ "./pages/movie/[id].jsx":
/*!******************************!*\
  !*** ./pages/movie/[id].jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_utility_movieDB__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/utility/movieDB */ "./components/utility/movieDB.js");
/* harmony import */ var _components_context_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/context/types */ "./components/context/types.js");
/* harmony import */ var _components_ui_TopBilledCast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ui/TopBilledCast */ "./components/ui/TopBilledCast.jsx");
/* harmony import */ var _components_ui_ReviewSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ui/ReviewSection */ "./components/ui/ReviewSection.jsx");
/* harmony import */ var _components_ui_MediaSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/ui/MediaSection */ "./components/ui/MediaSection.jsx");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_ui_mediaProfile_ProfileHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/ui/mediaProfile/ProfileHeader */ "./components/ui/mediaProfile/ProfileHeader.jsx");
/* harmony import */ var _components_ui_RecommenSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/ui/RecommenSection */ "./components/ui/RecommenSection.jsx");
/* harmony import */ var _components_ui_mediaProfile_ProfileStats_ProfileStats__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/ui/mediaProfile/ProfileStats/ProfileStats */ "./components/ui/mediaProfile/ProfileStats/ProfileStats.jsx");
/* harmony import */ var _components_context_MovieContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/context/MovieContext */ "./components/context/MovieContext.js");


var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\pages\\movie\\[id].jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













var Styled = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].section.withConfig({
  displayName: "id__Styled",
  componentId: "zlmctg-0"
})(["background:var(--bg-gradient);margin-top:110px;.profile--backdrop{background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url(", ") no-repeat center;background-color:black;min-height:400px;background-size:cover;background-position:top;object-fit:cover;position:relative;&__img{position:absolute;bottom:-20vw;left:20px;width:120px;}}.profile--header{position:relative;padding:2em 0.5em;max-width:750px;margin:0 auto;}@media screen and (min-width:768px){.profile--header{max-width:1100px;padding:2em 1em;}}"], function (_ref) {
  var bgImg = _ref.bgImg;
  return "".concat(_components_context_types__WEBPACK_IMPORTED_MODULE_5__["IMG_URL_OR"]).concat(bgImg);
});

var MovieProfile = function MovieProfile(_ref2) {
  var movie = _ref2.movie;
  // const { setData, clearData, mediaProfile } = useContext(MovieContext);
  // useEffect(() => {
  //   setData(SET_MEDIADATA, movie);
  //   return () => {
  //     clearData(CLEAR_MEDIADATA);
  //   };
  // }, [movie]);
  // console.log('from mediaProfile', mediaProfile);
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
  }, __jsx(_components_ui_mediaProfile_ProfileHeader__WEBPACK_IMPORTED_MODULE_10__["default"], {
    data: movie,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx(_components_ui_TopBilledCast__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: movie.credits.cast,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), __jsx(_components_ui_ReviewSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: movie.reviews.results,
    movieId: movie.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), __jsx(_components_ui_MediaSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
    videos: movie.videos.results,
    posters: movie.images.posters,
    backdrops: movie.images.backdrops,
    typeId: movie.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), __jsx(_components_ui_RecommenSection__WEBPACK_IMPORTED_MODULE_11__["default"], {
    data: movie,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  })), __jsx(_components_ui_mediaProfile_ProfileStats_ProfileStats__WEBPACK_IMPORTED_MODULE_12__["default"], {
    data: movie,
    keywords: Object.values(movie.keywords)[0],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  })));
};

MovieProfile.getInitialProps = function _callee(ctx) {
  var movie;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_components_utility_movieDB__WEBPACK_IMPORTED_MODULE_4__["default"])("movie/".concat(ctx.query.id || '454626'), 'append_to_response=account_states,external_ids,keywords,release_dates,videos,recommendations,reviews,credits,images&include_image_language=en,null'));

        case 3:
          movie = _context.sent;
          return _context.abrupt("return", {
            movie: _objectSpread({
              typeFor: 'movie'
            }, movie)
          });

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]], Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (MovieProfile);

/***/ })

})
//# sourceMappingURL=[id].js.05b2c8525fe05b41d6c6.hot-update.js.map