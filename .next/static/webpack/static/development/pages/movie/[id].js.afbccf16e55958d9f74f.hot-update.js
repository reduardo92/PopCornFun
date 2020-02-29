webpackHotUpdate("static\\development\\pages\\movie\\[id].js",{

/***/ "./components/ui/MediaSection.jsx":
/*!****************************************!*\
  !*** ./components/ui/MediaSection.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _SimpleFlex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SimpleFlex */ "./components/ui/SimpleFlex.js");
/* harmony import */ var _Cards_MediaCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cards/MediaCard */ "./components/ui/Cards/MediaCard.jsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_MovieContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/MovieContext */ "./components/context/MovieContext.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\MediaSection.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "MediaSection__Styled",
  componentId: "ubdtc5-0"
})(["padding:2em 0.5em;.head--container{display:flex;justify-content:space-between;align-items:center;}.tabs--container{display:flex;flex-wrap:wrap;align-items:center;}.tab{color:var(--white-clr);border-bottom:3px solid transparent;text-transform:capitalize;font-weight:600;padding-bottom:5px;margin-right:1em;}.activeTab{border-bottom:3px solid var(--primary-clr);}"]);

var MediaSection = function MediaSection(_ref) {
  var data = _ref.data,
      videos = _ref.videos,
      posters = _ref.posters,
      backdrops = _ref.backdrops,
      typeId = _ref.typeId,
      typeFor = _ref.typeFor;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('videos'),
      tab = _useState[0],
      setTab = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_MovieContext__WEBPACK_IMPORTED_MODULE_5__["default"]),
      setData = _useContext.setData;

  console.log(data);
  var media = {
    videos: videos,
    posters: posters,
    backdrops: backdrops
  };
  return __jsx(Styled, {
    className: "media--section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("div", {
    className: "head--container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("h3", {
    className: "subTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Media"), __jsx("div", {
    className: "tabs--container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("button", {
    className: "tab ".concat(tab === 'videos' && 'activeTab'),
    onClick: function onClick() {
      return setTab('videos');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "videos"), __jsx("button", {
    className: "tab ".concat(tab === 'posters' && 'activeTab'),
    onClick: function onClick() {
      return setTab('posters');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "posters"), __jsx("button", {
    className: "tab ".concat(tab === 'backdrops' && 'activeTab'),
    onClick: function onClick() {
      return setTab('backdrops');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "backdrops"))), __jsx(_SimpleFlex__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, media[tab].map(function (item) {
    return __jsx(_Cards_MediaCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: item.id,
      data: item,
      typeFor: tab === 'videos' ? 'movie' : '',
      SetMedia: function SetMedia() {
        return setData(item.key);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    });
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/movie/[id]/media",
    as: "/movie/".concat(typeId, "/media"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("a", {
    className: "title redHover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "See All Media")));
};

/* harmony default export */ __webpack_exports__["default"] = (MediaSection);

/***/ })

})
//# sourceMappingURL=[id].js.afbccf16e55958d9f74f.hot-update.js.map