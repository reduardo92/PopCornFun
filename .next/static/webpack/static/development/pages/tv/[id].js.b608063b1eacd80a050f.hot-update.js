webpackHotUpdate("static\\development\\pages\\tv\\[id].js",{

/***/ "./components/ui/mediaProfile/ProfileHeader.jsx":
/*!******************************************************!*\
  !*** ./components/ui/mediaProfile/ProfileHeader.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _context_MovieContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/MovieContext */ "./components/context/MovieContext.js");
/* harmony import */ var _context_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/types */ "./components/context/types.js");
/* harmony import */ var _utility_groupCredits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utility/groupCredits */ "./components/utility/groupCredits.js");
/* harmony import */ var _utility_timeConvert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utility/timeConvert */ "./components/utility/timeConvert.js");
/* harmony import */ var _CirclePercentage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../CirclePercentage */ "./components/ui/CirclePercentage.jsx");
/* harmony import */ var _TagGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../TagGroup */ "./components/ui/TagGroup.jsx");
/* harmony import */ var _PlayButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../PlayButton */ "./components/ui/PlayButton.jsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utility_getRating__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utility/getRating */ "./components/utility/getRating.js");
/* harmony import */ var _CrewTab__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CrewTab */ "./components/ui/mediaProfile/CrewTab.jsx");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\mediaProfile\\ProfileHeader.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ProfileHeader__Styled",
  componentId: "sc-1pa4id6-0"
})([".inner--content{display:grid;grid-template-columns:auto 1fr;grid-gap:1.7em 0.2em;}.rating,.meta,.overview,.crew,.play--button{grid-column:1/ 3;}.rating{svg{margin-right:1em;}}.title{align-self:center;font-size:calc(0.5em + 3vw);}.profile--content__img{width:120px;margin-top:-8em;align-self:flex-end;}.year{opacity:0.6;font-weight:400;}.rating,.meta{display:flex;align-items:center;padding:0 0.5em;}.tag--group{border-left:1px solid #7b7b7b;padding-left:1.5em;}.meta{justify-content:space-between;font-size:0.85rem;align-items:stretch;&--tab{border-right:1px solid #7b7b7b;padding:0 2em;text-align:center;display:flex;align-items:center;justify-content:center;}&--tab:last-child{border:none;padding:0;padding-left:1em;flex-wrap:wrap;justify-content:space-evenly;}}.crew{display:grid;grid-template-columns:repeat(2,1fr);grid-gap:1em;font-weight:bold;.subTitle{grid-column:1 / 3;margin-bottom:-0.1em;}}.play--button{width:fit-content;}@media screen and (min-width:768px){.profile--header{max-width:1100px;padding:2em 1em;}.inner--content{grid-gap:1.7em 0.2em;}.profile--content__img{width:160px;justify-self:center;}.rating{grid-column:1 /2;}.meta{grid-column:2 /3;}.overview,.crew{grid-column:1/ 3;}.play--button{flex-direction:row;font-size:1.1rem;&::before{width:auto;margin:auto;transform-origin:left;}svg{font-size:2rem;order:1;margin-left:5px;}&:hover svg,&:focus svg{margin-left:15px;margin-bottom:0;transform:scale(0.98);}}.CircularProgressbar{width:66px;}}@media screen and (min-width:1000px){background:linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)),url(", ") no-repeat center;background-color:black;background-size:cover;background-position:top;object-fit:cover;position:relative;padding:8em 1em;.inner--content{max-width:1500px;margin:0 auto;grid-template-areas:'prImg title title' 'prImg rating play' 'prImg meta meta' 'prImg overV overV' 'prImg crew crew';grid-template-columns:500px 1fr 1.7fr;grid-gap:2em;}.profile--content__img{grid-area:prImg;width:100%;align-self:end;height:100%;justify-self:center;img{height:100%;object-fit:contain;}}.title{grid-area:title;font-size:3.5rem;margin-bottom:-0.3em;.year{font-size:smaller;}}.rating{grid-area:rating;}.meta{grid-area:meta;justify-self:start;align-self:center;&--tab{padding:1em 2em;}.genre--tab{margin:0 0.45em;}}.overview{grid-area:overV;&--para{max-width:90%;}}.crew{grid-area:crew;grid-template-columns:repeat(3,1fr);align-self:baseline;.subTitle{grid-column:1 / 4;}}.play--button{grid-area:play;align-self:center;}}"], function (_ref) {
  var bgImg = _ref.bgImg;
  return "".concat(_context_types__WEBPACK_IMPORTED_MODULE_3__["IMG_URL_OR"]).concat(bgImg);
});

var ProfileHeader = function ProfileHeader(_ref2) {
  var data = _ref2.data,
      bgImg = _ref2.bgImg;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_MovieContext__WEBPACK_IMPORTED_MODULE_2__["default"]),
      setModal = _useContext.setModal;

  var getGenres = function getGenres() {
    return data.genres.map(function (item, i) {
      return __jsx("span", {
        className: "genre--tab",
        key: item.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, item.name, data.genres.length - 1 === i ? '' : ', ');
    });
  };

  var crew = __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, data.created_by && data.created_by.map(function (item) {
    return __jsx(_CrewTab__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: item.id,
      crew: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258
      },
      __self: this
    });
  }), Object(_utility_groupCredits__WEBPACK_IMPORTED_MODULE_4__["default"])(data.credits.crew).slice(0, 6).map(function (item) {
    return __jsx(_CrewTab__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: item[0].id,
      crew: item[0],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262
      },
      __self: this
    });
  }));

  return __jsx(Styled, {
    className: "profile--content px-2",
    bgImg: bgImg,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, __jsx("div", {
    className: "inner--content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }, __jsx("div", {
    className: "profile--content__img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, __jsx("img", {
    className: "poster",
    src: "".concat(_context_types__WEBPACK_IMPORTED_MODULE_3__["IMG_URL"]).concat(data.poster_path || data.profile_path),
    alt: data.title || data.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  })), __jsx("h2", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  }, data.title || data.name, ' ', __jsx("span", {
    className: "year",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, "(", data.release_date ? data.release_date.slice(0, 4) : data.first_air_date.slice(0, 4), ")")), __jsx("div", {
    className: "rating",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }, __jsx(_CirclePercentage__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: data.vote_average * 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }), __jsx(_TagGroup__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  })), __jsx("div", {
    className: "meta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }, __jsx("span", {
    className: "release meta--tab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, data.release_date ? data.release_date.slice(0, 4) : data.first_air_date.slice(0, 4)), __jsx("span", {
    className: "runtime meta--tab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  }, Object(_utility_timeConvert__WEBPACK_IMPORTED_MODULE_5__["default"])(data.typeFor === 'movie' ? data.runtime : data.episode_run_time[0])), __jsx("span", {
    className: "rating meta--tab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }, data.release_date ? Object(_utility_getRating__WEBPACK_IMPORTED_MODULE_10__["default"])(data.release_dates.results) : Object(_utility_getRating__WEBPACK_IMPORTED_MODULE_10__["default"])(data.content_ratings.results)), __jsx("span", {
    className: "genre meta--tab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    },
    __self: this
  }, getGenres())), __jsx("div", {
    className: "overview",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  }, __jsx("h3", {
    className: "subTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: this
  }, "OVERVIEW"), __jsx("p", {
    className: "overview--para",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  }, data.overview)), __jsx("div", {
    className: "crew",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  }, __jsx("h3", {
    className: "subTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: this
  }, "Featured Crew"), crew), __jsx(_PlayButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onclick: function onclick() {
      return setModal(data.videos.results[0].key);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ProfileHeader);

/***/ })

})
//# sourceMappingURL=[id].js.b608063b1eacd80a050f.hot-update.js.map