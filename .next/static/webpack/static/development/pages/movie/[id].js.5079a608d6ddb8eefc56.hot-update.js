webpackHotUpdate("static\\development\\pages\\movie\\[id].js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/core-js/library/fn/object/define-properties.js":
false,

/***/ "./node_modules/core-js/library/fn/object/entries.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptors.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/core-js/library/modules/_create-property.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-to-array.js":
false,

/***/ "./node_modules/core-js/library/modules/_own-keys.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.define-properties.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.object.entries.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.object.get-own-property-descriptors.js":
false,

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
  }, __jsx("div", {
    className: "profile--header__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("div", {
    className: "head",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("div", {
    className: "profile--header__img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("img", {
    className: "poster",
    src: "".concat(_components_context_types__WEBPACK_IMPORTED_MODULE_4__["IMG_URL"]).concat(movie.poster_path || movie.profile_path),
    alt: movie.title || movie.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })), __jsx("h2", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, movie.title || movie.name, ' ', __jsx("span", {
    className: "year",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "(", movie.release_date.slice(0, 4), ")"))), __jsx("div", {
    className: "rating",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(_components_ui_CirclePercentage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: movie.vote_average * 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), __jsx(_components_ui_TagGroup__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  })), __jsx("div", {
    className: "meta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("span", {
    className: "release meta--tab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "2017"), __jsx("span", {
    className: "runtime meta--tab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "1h 02 mins"), __jsx("span", {
    className: "rating meta--tab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "R"), __jsx("span", {
    className: "genre meta--tab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Action,Drama,Sci-fi")), __jsx("div", {
    className: "overview",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("h3", {
    className: "subTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "OVERVIEW"), __jsx("p", {
    className: "overview--para",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, movie.overview)), __jsx("div", {
    className: "crew",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, credits(movie.credits.crew).map(function (c, i) {
    return i < 6 && __jsx("div", {
      key: c[0].id,
      className: "crew--person",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/person/[id]",
      as: "/person/".concat(c[0].id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, c[0].name), __jsx("small", {
      className: "d-block mt-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, c[0].department.join(', ')));
  })), __jsx(_components_ui_PlayButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onclick: function onclick() {
      return setModal(movie.videos.results[1].key);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }))), __jsx(_components_ui_TopBilledCast__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
//# sourceMappingURL=[id].js.5079a608d6ddb8eefc56.hot-update.js.map