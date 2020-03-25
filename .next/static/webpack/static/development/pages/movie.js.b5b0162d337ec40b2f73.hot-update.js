webpackHotUpdate("static\\development\\pages\\movie.js",{

/***/ "./pages/movie/index.jsx":
/*!*******************************!*\
  !*** ./pages/movie/index.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_utility_movieDB__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/utility/movieDB */ "./components/utility/movieDB.js");
/* harmony import */ var _components_ui_Cards_CardTwo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ui/Cards/CardTwo */ "./components/ui/Cards/CardTwo.jsx");
/* harmony import */ var _components_context_MovieContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/context/MovieContext */ "./components/context/MovieContext.js");
/* harmony import */ var _components_ui_Pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/ui/Pagination */ "./components/ui/Pagination.jsx");


var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\pages\\movie\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var Styled = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].section.withConfig({
  displayName: "movie__Styled",
  componentId: "sc-1781jcz-0"
})(["background:var(--bg-dark-gradient);padding:150px 1em 5em 1em;.wrapper{max-width:1500px;margin:0 auto;.title{font-size:1.5rem;margin-bottom:1em;}}.content--container{display:grid;grid-gap:2em;margin-bottom:2em;}@media screen and (min-width:768px){.content--container{grid-row-gap:3.5em;grid-template-columns:repeat(2,1fr);}}"]);

var movie = function movie(_ref) {
  var movies = _ref.movies;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_components_context_MovieContext__WEBPACK_IMPORTED_MODULE_7__["default"]),
      paginate = _useContext.paginate;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      pageOfItems = _useState[0],
      setPageOfItems = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    paginate(movies.page);
  }, [movies.page]);
  var pageNumber = [];

  for (var i = 1; i <= movies.total_pages; i++) {
    pageNumber.push(i);
  }

  var onChangePage = function onChangePage(pageOfItems) {
    return setPageOfItems(pageOfItems);
  };

  var _Pagination = Object(_components_ui_Pagination__WEBPACK_IMPORTED_MODULE_8__["default"])({
    numberOfArticles: 223,
    articlesPerPage: 12,
    numberOfButtons: 10,
    currentPage: currentPage
  }),
      pagination = _Pagination.pagination;

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(Styled, {
    className: "movie--section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("div", {
    className: "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("h2", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, movies.title, " Movies"), __jsx("div", {
    className: "content--container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, movies.results.map(function (item) {
    return __jsx(_components_ui_Cards_CardTwo__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: item.id,
      data: item,
      typeFor: movies.typeFor,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    });
  })))));
};

movie.getInitialProps = function _callee(_ref2) {
  var query, queryLeng, movies;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = _ref2.query;
          queryLeng = Object.keys(query).length;
          _context.prev = 2;
          _context.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_components_utility_movieDB__WEBPACK_IMPORTED_MODULE_5__["default"])("movie/".concat(queryLeng === 0 ? 'popular' : query.query), "page=".concat(query.page ? query.page : 1)));

        case 5:
          movies = _context.sent;
          return _context.abrupt("return", {
            movies: _objectSpread({
              typeFor: 'movie',
              title: queryLeng === 0 ? 'popular' : query.query.split('_').join(' ')
            }, movies)
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
  }, null, null, [[2, 9]], Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (movie);

/***/ })

})
//# sourceMappingURL=movie.js.b5b0162d337ec40b2f73.hot-update.js.map