webpackHotUpdate("static\\development\\pages\\movie\\[id].js",{

/***/ "./components/ui/MediaSection.jsx":
/*!****************************************!*\
  !*** ./components/ui/MediaSection.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _SimpleFlex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SimpleFlex */ "./components/ui/SimpleFlex.js");
/* harmony import */ var _Cards_MediaCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Cards/MediaCard */ "./components/ui/Cards/MediaCard.jsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context_MovieContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/MovieContext */ "./components/context/MovieContext.js");

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\MediaSection.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  displayName: "MediaSection__Styled",
  componentId: "ubdtc5-0"
})(["padding:2em 0.5em;.head--container{display:flex;justify-content:space-between;align-items:center;}.simple--flex{scroll-snap-points-x:repeat(200px);margin-bottom:1.2em;& > div{margin:0 0.5em;}.vid{width:350px;}.img{width:200px;margin:0 0.3em;}& > div:first-child{margin-left:0;}}"]);

var MediaSection = function MediaSection(_ref) {
  var videos = _ref.videos,
      posters = _ref.posters,
      backdrops = _ref.backdrops,
      typeId = _ref.typeId,
      typeFor = _ref.typeFor;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('videos'),
      tab = _useState[0],
      setTab = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_MovieContext__WEBPACK_IMPORTED_MODULE_6__["default"]),
      setModal = _useContext.setModal;

  var media = {
    videos: videos,
    posters: posters,
    backdrops: backdrops
  };
  return __jsx(Styled, {
    className: "media--section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    className: "head--container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("h3", {
    className: "subTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Media"), __jsx("div", {
    className: "tabs--container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("button", {
    className: "tab ".concat(tab === 'videos' && 'activeTab'),
    onClick: function onClick() {
      return setTab('videos');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "videos"), __jsx("button", {
    className: "tab ".concat(tab === 'posters' && 'activeTab'),
    onClick: function onClick() {
      return setTab('posters');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "posters"), __jsx("button", {
    className: "tab ".concat(tab === 'backdrops' && 'activeTab'),
    onClick: function onClick() {
      return setTab('backdrops');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "backdrops"))), __jsx(_SimpleFlex__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "simple--flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, media[tab].map(function (item, i) {
    var _jsx;

    return i < 8 && __jsx(_Cards_MediaCard__WEBPACK_IMPORTED_MODULE_4__["default"], (_jsx = {
      key: item.id || i,
      data: item,
      typeFor: tab === 'videos' ? 'movie' : '',
      SetMedia: function SetMedia() {
        return setModal(tab === 'videos' ? item.key : item.file_path, tab);
      }
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "typeFor", tab), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
      fileName: _jsxFileName,
      lineNumber: 78
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), _jsx));
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/movie/[id]/media",
    as: "/movie/".concat(typeId, "/media"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("a", {
    className: "title redHover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "See All Media")));
};

/* harmony default export */ __webpack_exports__["default"] = (MediaSection);

/***/ })

})
//# sourceMappingURL=[id].js.6b82ed1dc064c19838b8.hot-update.js.map