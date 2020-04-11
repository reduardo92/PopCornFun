webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/context/MovieProvider.js":
/*!*********************************************!*\
  !*** ./components/context/MovieProvider.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MovieContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MovieContext */ "./components/context/MovieContext.js");
/* harmony import */ var _useMovieReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useMovieReducer */ "./components/context/useMovieReducer.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types */ "./components/context/types.js");
/* harmony import */ var _utility_movieDB__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utility/movieDB */ "./components/utility/movieDB.js");
/* harmony import */ var _Hooks_useForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Hooks/useForm */ "./components/Hooks/useForm.js");
/* harmony import */ var _utility_configHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utility/configHeader */ "./components/utility/configHeader.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\context\\MovieProvider.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var movieInitalState = {
  searchQuery: '',
  searchData: null,
  pageData: {},
  discForm: {
    year: '',
    sort_by: 'popularity.desc',
    genre: ''
  },
  isModal: {
    media: null,
    toggle: false,
    "for": null
  },
  currentPage: 1,
  itemPerPage: 20,
  total_pages: null,
  watchlist: null,
  favorites: null,
  ratings: null
};

var MovieProvider = function MovieProvider(_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      windowSize = _useState[0],
      setWindowSize = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      toggle = _useState2[0],
      setToggle = _useState2[1];

  var navRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(_useMovieReducer__WEBPACK_IMPORTED_MODULE_4__["default"], movieInitalState),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  var setCarosuel = function setCarosuel() {
    var phone = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
    var tablet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
    var laptop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
    var laptopLg = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 7;

    if (windowSize < 768) {
      return phone;
    } else if (windowSize <= 768) {
      return tablet;
    } else if (windowSize <= 1024 || windowSize < 2000) {
      return laptop;
    } else if (windowSize >= 2000) {
      return laptopLg;
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setWindowSize(window.innerWidth);
  }, [windowSize]); // Actions

  var setData = function setData(type, data) {
    return dispatch({
      type: type,
      payload: data
    });
  };

  var setModal = function setModal(data) {
    var typeFor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'videos';
    return dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_5__["SET_MODAL_MEDIA"],
      payload: data,
      typeFor: typeFor
    });
  };

  var clearData = function clearData(type) {
    return dispatch({
      type: type
    });
  };

  var getSearchData = function getSearchData(search) {
    var _ref2, results;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getSearchData$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Object(_utility_movieDB__WEBPACK_IMPORTED_MODULE_6__["default"])('search/multi', "page=1&include_adult=false&query=".concat(search)));

          case 3:
            _ref2 = _context.sent;
            results = _ref2.results;
            dispatch({
              type: _types__WEBPACK_IMPORTED_MODULE_5__["SET_SEARCH_DATA"],
              payload: results
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 8]], Promise);
  }; // Discover Form


  var discoverForm = Object(_Hooks_useForm__WEBPACK_IMPORTED_MODULE_7__["default"])({
    year: '',
    sort_by: 'popularity.desc',
    genre: ''
  }); // Change page

  var paginate = function paginate(pageNumber) {
    return dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_5__["SET_CURRENT_PAGE"],
      payload: pageNumber
    });
  }; // Add Media


  var setMedia = function setMedia(media, typeFor) {
    var types, _ref3, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function setMedia$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            types = {
              watchlist: '/api/watchlist',
              favorites: '/api/favorites',
              ratings: '/api/ratings'
            };
            console.log('from state', typeof media.media_id);
            _context2.prev = 2;
            _context2.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_9___default.a.post(types[typeFor], media, _utility_configHeader__WEBPACK_IMPORTED_MODULE_8__["default"]));

          case 5:
            _ref3 = _context2.sent;
            data = _ref3.data;
            console.log(data); // dispatch({ type: SET_EXERCISE, typeFor, payload: data });

            _context2.next = 13;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](2);
            console.log(_context2.t0); // dispatch({ type: SET_ERROR, payload: error.response.data.msg });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[2, 10]], Promise);
  }; // console.log(state);


  return __jsx(_MovieContext__WEBPACK_IMPORTED_MODULE_3__["default"].Provider, {
    value: _objectSpread({
      windowSize: windowSize,
      setCarosuel: setCarosuel,
      toggle: toggle,
      setToggle: setToggle,
      setData: setData,
      setModal: setModal,
      clearData: clearData,
      navRef: navRef,
      getSearchData: getSearchData,
      discoverForm: discoverForm,
      paginate: paginate,
      setMedia: setMedia
    }, state),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (MovieProvider);

/***/ })

})
//# sourceMappingURL=_app.js.da5db69c1020ec5877ec.hot-update.js.map