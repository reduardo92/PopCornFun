webpackHotUpdate("static\\development\\pages\\movie\\[id].js",{

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
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\mediaProfile\\ProfileHeader.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ProfileHeader__Styled",
  componentId: "sc-1pa4id6-0"
})(["display:grid;grid-gap:1.7em;grid-auto-columns:auto;.rating{svg{margin-right:calc(3vw + 0.5em);}}.head{display:grid;grid-template-columns:auto 1fr;grid-gap:1em;padding:0 1em 0.5em;.title{align-self:center;font-size:calc(0.5em + 3vw);}}.profile--content__img{width:120px;margin-top:-8em;align-self:flex-end;}.year{opacity:0.6;font-weight:400;}.rating,.meta{display:flex;align-items:center;padding:0 0.5em;}.tag--group{border-left:1px solid #7b7b7b;padding-left:1.5em;}.meta{justify-content:space-between;font-size:0.85rem;align-items:stretch;&--tab{border-right:1px solid #7b7b7b;padding:0 1em;text-align:center;display:flex;align-items:center;justify-content:center;}&--tab:last-child{border:none;padding:0;flex-wrap:wrap;justify-content:space-evenly;}}.crew{display:grid;grid-template-columns:repeat(2,1fr);grid-gap:1em;font-weight:bold;}.play--button{width:fit-content;}@media screen and (min-width:768px){.profile--header{max-width:1100px;padding:2em 1em;}.head .profile--content__img{width:160px;}.rating{grid-column:1 /2;}.meta{grid-column:2 /3;}.head,.overview,.crew{grid-column:1/ 3;}.play--button{flex-direction:row;font-size:1.1rem;&::before{width:auto;margin:auto;transform-origin:left;}svg{font-size:2rem;order:1;margin-left:5px;}&:hover svg,&:focus svg{margin-left:15px;margin-bottom:0;transform:scale(0.98);}}.CircularProgressbar{width:66px;}}"]);

var ProfileHeader = function ProfileHeader(_ref) {
  var data = _ref.data;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_MovieContext__WEBPACK_IMPORTED_MODULE_2__["default"]),
      setModal = _useContext.setModal;

  var getGenres = function getGenres() {
    return data.genres.map(function (item, i) {
      return __jsx("span", {
        className: "genre--tab",
        key: item.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, item.name, data.genres.length - 1 === i ? '' : ', ');
    });
  };

  return __jsx(Styled, {
    className: "profile--content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, __jsx("div", {
    className: "head",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, __jsx("div", {
    className: "profile--content__img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, __jsx("img", {
    className: "poster",
    src: "".concat(_context_types__WEBPACK_IMPORTED_MODULE_3__["IMG_URL"]).concat(data.poster_path || data.profile_path),
    alt: data.title || data.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  })), __jsx("h2", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, data.title || data.name, ' ', __jsx("span", {
    className: "year",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "(", data.release_date ? data.release_date.slice(0, 4) : data.first_air_date.slice(0, 4), ")"))), __jsx("div", {
    className: "rating",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, __jsx(_CirclePercentage__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: data.vote_average * 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }), __jsx(_TagGroup__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  })), __jsx("div", {
    className: "meta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, __jsx("span", {
    className: "release meta--tab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, data.release_date ? data.release_date.slice(0, 4) : data.first_air_date.slice(0, 4)), __jsx("span", {
    className: "runtime meta--tab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, Object(_utility_timeConvert__WEBPACK_IMPORTED_MODULE_5__["default"])(data.runtime || data.episode_run_time[0])), __jsx("span", {
    className: "rating meta--tab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, Object(_utility_getRating__WEBPACK_IMPORTED_MODULE_10__["default"])(data.content_ratings.results || data.release_dates.results)), __jsx("span", {
    className: "genre meta--tab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, getGenres())), __jsx("div", {
    className: "overview",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, __jsx("h3", {
    className: "subTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, "OVERVIEW"), __jsx("p", {
    className: "overview--para",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, data.overview)), __jsx("div", {
    className: "crew",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, Object(_utility_groupCredits__WEBPACK_IMPORTED_MODULE_4__["default"])(data.credits.crew).map(function (c, i) {
    return i < 6 && __jsx("div", {
      key: c[0].id,
      className: "crew--person",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
      href: "/person/[id]",
      as: "/person/".concat(c[0].id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210
      },
      __self: this
    }, c[0].name)), __jsx("small", {
      className: "d-block mt-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    }, c[0].department.join(', ')));
  })), __jsx(_PlayButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onclick: function onclick() {
      return setModal(data.videos.results[1].key);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ProfileHeader);

/***/ })

})
//# sourceMappingURL=[id].js.37bd9fe0415e76369431.hot-update.js.map