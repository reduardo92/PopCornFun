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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var _utility_getYears__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utility/getYears */ "./components/utility/getYears.js");
/* harmony import */ var _hooks_useForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useForm */ "./components/hooks/useForm.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\Forms\\DiscoverFrom.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "DiscoverFrom__Styled",
  componentId: "sc-1qw32to-0"
})(["@media screen and (min-width:768px){flex:1;margin-left:2em;.discover--from{display:flex;justify-content:space-between;& > div{flex:1;margin-right:1em;}& >:last-child{margin-right:0;}}}"]);

var DiscoverForm = function DiscoverForm(props) {
  var _useForm = Object(_hooks_useForm__WEBPACK_IMPORTED_MODULE_4__["default"])({
    year: 'none',
    sort_by: 'popularity descending',
    genre: '',
    keywords: ''
  }),
      handleChange = _useForm.handleChange,
      handleSubmit = _useForm.handleSubmit,
      form = _useForm.form,
      setForm = _useForm.setForm;

  var year = form.year,
      sort_by = form.sort_by,
      genre = form.genre;
  var sortBy = ['popularity descending', 'popularity ascending', 'rating descending', 'rating ascending', 'release date descending', 'release date ascending', 'title (A-Z)', 'title (Z-A)'];
  var genres = ['Action & Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Kids', 'Mystery', 'News', 'Reality', 'Sci-Fi & Fantasy', 'Soap', 'Talk', 'War & Politics', 'Western'];
  return __jsx(Styled, {
    className: "discover--form--section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "discover--from",
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__["default"].Group, {
    controlId: "year",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__["default"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Year"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__["default"].Control, {
    as: "select",
    value: year,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "none"), Object(_utility_getYears__WEBPACK_IMPORTED_MODULE_3__["default"])().reverse().map(function (year) {
    return __jsx("option", {
      key: year,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, year);
  }))), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__["default"].Group, {
    controlId: "sort_by",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__["default"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Sort By"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__["default"].Control, {
    as: "select",
    value: sort_by,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, sortBy.map(function (sort) {
    return __jsx("option", {
      key: sort,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, sort);
  }))), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__["default"].Group, {
    controlId: "genres",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__["default"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Genres"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__["default"].Control, {
    as: "select",
    value: genre,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("option", {
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), genres.map(function (genre) {
    return __jsx("option", {
      key: genre,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, genre);
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (DiscoverForm);
{
  /* <option value='popularity.desc' selected='selected'>
              Popularity Descending
            </option>
            <option value='popularity.asc'>Popularity Ascending</option>
            <option value='vote_average.desc'>Rating Descending</option>
            <option value='vote_average.asc'>Rating Ascending</option>
            <option value='primary_release_date.desc'>
              Release Date Descending
            </option>
            <option value='primary_release_date.asc'>
              Release Date Ascending
            </option>
            <option value='title.asc'>Title (A-Z)</option>
            <option value='title.desc'>Title (Z-A)</option> */
}

/***/ })

})
//# sourceMappingURL=discover.js.0dab61720cc130ca5826.hot-update.js.map