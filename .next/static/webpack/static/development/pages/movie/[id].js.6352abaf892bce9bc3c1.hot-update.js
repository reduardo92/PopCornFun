webpackHotUpdate("static\\development\\pages\\movie\\[id].js",{

/***/ "./pages/movie/[id].jsx":
/*!******************************!*\
  !*** ./pages/movie/[id].jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_utility_movieDB__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/utility/movieDB */ "./components/utility/movieDB.js");
/* harmony import */ var _components_context_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/context/types */ "./components/context/types.js");
/* harmony import */ var _components_ui_CirclePercentage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ui/CirclePercentage */ "./components/ui/CirclePercentage.jsx");
/* harmony import */ var _components_ui_TagGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ui/TagGroup */ "./components/ui/TagGroup.jsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_ui_PlayButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/ui/PlayButton */ "./components/ui/PlayButton.jsx");
/* harmony import */ var _components_ui_TopBilledCast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/ui/TopBilledCast */ "./components/ui/TopBilledCast.jsx");
/* harmony import */ var _components_ui_ReviewSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/ui/ReviewSection */ "./components/ui/ReviewSection.jsx");
/* harmony import */ var _components_ui_MediaSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/ui/MediaSection */ "./components/ui/MediaSection.jsx");
/* harmony import */ var _components_context_MovieContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/context/MovieContext */ "./components/context/MovieContext.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\pages\\movie\\[id].jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;













var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  displayName: "id__Styled",
  componentId: "zlmctg-0"
})(["background:var(--bg-gradient);margin-top:110px;.profile--backdrop{background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url(", ") no-repeat center;background-color:black;min-height:400px;background-size:cover;background-position:top;object-fit:cover;position:relative;&__img{position:absolute;bottom:-20vw;left:20px;width:120px;}}.profile--header{position:relative;padding:2em 0.5em;max-width:750px;margin:0 auto;}@media screen and (min-width:768px){.profile--header{max-width:1100px;padding:2em 1em;}}"], function (_ref) {
  var bgImg = _ref.bgImg;
  return "".concat(_components_context_types__WEBPACK_IMPORTED_MODULE_4__["IMG_URL_OR"]).concat(bgImg);
});

var MovieProfile = function MovieProfile(_ref2) {
  var movie = _ref2.movie,
      typeFor = _ref2.typeFor;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_components_context_MovieContext__WEBPACK_IMPORTED_MODULE_12__["default"]),
      setModal = _useContext.setModal;

  console.log(movie);
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(Styled, {
    className: "profile",
    bgImg: movie.backdrop_path,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("div", {
    className: "profile--backdrop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), __jsx("div", {
    className: "profile--header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), __jsx(_components_ui_TopBilledCast__WEBPACK_IMPORTED_MODULE_9__["default"], {
    data: movie.credits.cast,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), __jsx(_components_ui_ReviewSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
    data: movie.reviews.results,
    movieId: movie.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }), __jsx(_components_ui_MediaSection__WEBPACK_IMPORTED_MODULE_11__["default"], {
    videos: movie.videos.results,
    posters: movie.images.posters,
    backdrops: movie.images.backdrops,
    typeId: movie.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  })));
};

MovieProfile.getInitialProps = function _callee(ctx) {
  var movie;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(ctx.query, 'ID');
          console.log(ctx);
          _context.prev = 2;
          _context.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_components_utility_movieDB__WEBPACK_IMPORTED_MODULE_3__["default"])("movie/".concat(ctx.query.id || '454626'), 'append_to_response=account_states,external_ids,keywords,release_dates,videos,recommendations,reviews,credits,images&include_image_language=en,null'));

        case 5:
          movie = _context.sent;
          return _context.abrupt("return", {
            movie: movie
          });

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](2);
          console.log(_context.t0);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 9]]);
};

/* harmony default export */ __webpack_exports__["default"] = (MovieProfile);

/***/ })

})
//# sourceMappingURL=[id].js.6352abaf892bce9bc3c1.hot-update.js.map