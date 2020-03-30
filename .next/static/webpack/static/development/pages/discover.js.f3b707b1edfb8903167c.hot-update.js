webpackHotUpdate("static\\development\\pages\\discover.js",{

/***/ "./components/ui/Forms/DiscoverFrom.jsx":
/*!**********************************************!*\
  !*** ./components/ui/Forms/DiscoverFrom.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _context_MovieContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/MovieContext */ "./components/context/MovieContext.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var _utility_getYears__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utility/getYears */ "./components/utility/getYears.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\Forms\\DiscoverFrom.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "DiscoverFrom__Styled",
  componentId: "sc-1qw32to-0"
})(["@media screen and (min-width:768px){flex:100%;margin-bottom:1em;.discover--from{display:flex;justify-content:space-between;& > div{flex:1;margin-right:1em;}& >:last-child{margin-right:0;}}}.genre--control .tv{display:", ";}@media screen and (min-width:1000px){flex:1;margin-left:2em;.discover--from{display:flex;justify-content:space-between;& > div{flex:1;margin-right:1em;}& >:last-child{margin-right:0;}}}"], function (_ref) {
  var genre = _ref.genre;
  return genre && 'none';
});

var DiscoverForm = function DiscoverForm(_ref2) {
  var typeFor = _ref2.typeFor;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_MovieContext__WEBPACK_IMPORTED_MODULE_3__["default"]),
      _useContext$discoverF = _useContext.discoverForm,
      handleChange = _useContext$discoverF.handleChange,
      handleSubmit = _useContext$discoverF.handleSubmit,
      form = _useContext$discoverF.form;

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])(),
      query = _useRouter.query,
      push = _useRouter.push;

  var year = form.year,
      sort_by = form.sort_by,
      genre = form.genre;
  var sortBy = [{
    id: uuid__WEBPACK_IMPORTED_MODULE_6___default.a.v4(),
    value: 'popularity.desc',
    name: 'popularity descending'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_6___default.a.v4(),
    value: 'popularity.asc',
    name: 'popularity ascending'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_6___default.a.v4(),
    value: 'vote_average.desc',
    name: 'rating descending'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_6___default.a.v4(),
    value: 'vote_average.asc',
    name: 'rating ascending'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_6___default.a.v4(),
    value: 'primary_release_date.desc',
    name: 'release date descending'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_6___default.a.v4(),
    value: '"primary_release_date.asc',
    name: 'release date ascending'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_6___default.a.v4(),
    value: 'title.asc',
    name: 'title (A-Z)'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_6___default.a.v4(),
    value: 'title.desc',
    name: 'title (Z-A)'
  }];
  var genres = [{
    id: 28,
    name: 'Action'
  }, {
    id: 12,
    name: 'Adventure'
  }, {
    id: 10759,
    name: 'Action & Adventure',
    "for": 'tv'
  }, {
    id: 16,
    name: 'Animation'
  }, {
    id: 35,
    name: 'Comedy'
  }, {
    id: 80,
    name: 'Crime'
  }, {
    id: 99,
    name: 'Documentary'
  }, {
    id: 18,
    name: 'Drama'
  }, {
    id: 10751,
    name: 'Family'
  }, {
    id: 14,
    name: 'Fantasy'
  }, {
    id: 36,
    name: 'History'
  }, {
    id: 27,
    name: 'Horror'
  }, {
    id: 10762,
    name: 'Kids',
    "for": 'tv'
  }, {
    id: 10402,
    name: 'Music'
  }, {
    id: 9648,
    name: 'Mystery'
  }, {
    id: 10749,
    name: 'Romance'
  }, {
    id: 10763,
    name: 'News',
    "for": 'tv'
  }, {
    id: 10764,
    name: 'Reality',
    "for": 'tv'
  }, {
    id: 10770,
    name: 'Tv Movie'
  }, {
    id: 53,
    name: 'Thriller'
  }, {
    id: 878,
    name: 'Sci-Fi & Fantasy'
  }, {
    id: 10766,
    name: 'Soap',
    "for": 'tv'
  }, {
    id: 10767,
    name: 'Talk',
    "for": 'tv'
  }, {
    id: 10768,
    name: 'War & Politics',
    "for": 'tv'
  }, {
    id: 10752,
    name: 'War'
  }, {
    id: 37,
    name: 'Western'
  }];
  var sortQuery = sort_by === 'popularity.desc' ? '' : "&sort_by=".concat(sort_by);
  var yearQuery = year === '' ? '' : "&year=".concat(year);
  var genreQuery = genre === '' ? '' : "&genres=".concat(genre);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (year === '' && sort_by === 'popularity.desc' && genre === '') {
      push("/discover?query=".concat(typeFor).concat(sortQuery).concat(yearQuery).concat(genreQuery, "&page=").concat(query.page));
      return;
    } else {
      if (genre === '') {
        push("/discover?query=".concat(query.query).concat(sortQuery).concat(yearQuery, "&page=").concat(query.page));
      }

      if (year === '') {
        push("/discover?query=".concat(query.query).concat(sortQuery).concat(genreQuery, "&page=").concat(query.page));
      }

      push("/discover?query=".concat(query.query).concat(sortQuery).concat(yearQuery).concat(genreQuery, "&page=").concat(query.page));
    }
  }, [form]);
  return __jsx(Styled, {
    className: "discover--form--section",
    genre: query.query === 'movie' && true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "discover--from",
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__["default"].Group, {
    controlId: "year",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__["default"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "Year"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__["default"].Control, {
    as: "select",
    name: "year",
    value: year,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }), Object(_utility_getYears__WEBPACK_IMPORTED_MODULE_5__["default"])().reverse().map(function (year) {
    return __jsx("option", {
      key: year,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, year);
  }))), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__["default"].Group, {
    controlId: "sort_by",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__["default"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "Sort By"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__["default"].Control, {
    as: "select",
    name: "sort_by",
    value: sort_by,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, sortBy.map(function (_ref3) {
    var id = _ref3.id,
        value = _ref3.value,
        name = _ref3.name;
    return __jsx("option", {
      key: id,
      value: value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, name);
  }))), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__["default"].Group, {
    controlId: "genres",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__["default"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, "Genres"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__["default"].Control, {
    className: "genre--control",
    as: "select",
    name: "genre",
    value: genre,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }), genres.map(function (genre) {
    return __jsx("option", {
      key: genre.id,
      value: genre.id,
      className: !genre["for"] ? 'both' : 'tv',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }, genre.name);
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (DiscoverForm);

/***/ })

})
//# sourceMappingURL=discover.js.f3b707b1edfb8903167c.hot-update.js.map