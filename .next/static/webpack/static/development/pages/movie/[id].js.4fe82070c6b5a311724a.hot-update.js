webpackHotUpdate("static\\development\\pages\\movie\\[id].js",{

/***/ "./components/ui/Cards/MediaCard.jsx":
/*!*******************************************!*\
  !*** ./components/ui/Cards/MediaCard.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _context_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/types */ "./components/context/types.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\Cards\\MediaCard.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "MediaCard__Styled",
  componentId: "ljn6mv-0"
})(["background:linear-gradient(rgba(0,0,0,0.25),rgba(0,0,0,0.2)),url(", ") no-repeat center;background-size:cover;object-fit:'cover';width:100%;height:200px;position:relative;display:flex;justify-content:center;align-items:center;.play--button{background-color:transparent;border:none;}.media--play,.media--scale{color:var(--accent-clr);font-size:2rem;transition:var(--ease--in--out--02s);&:hover,&:focus{opacity:0.9;transform:scale(0.9);}}.media--scale{font-size:1rem;}"], function (_ref) {
  var bgImg = _ref.bgImg,
      forMedia = _ref.forMedia;
  return forMedia === 'videos' ? "http://img.youtube.com/vi/".concat(bgImg, "/0.jpg") : "".concat(_context_types__WEBPACK_IMPORTED_MODULE_3__["IMG_URL"]).concat(bgImg);
});

var MediaCard = function MediaCard(_ref2) {
  var data = _ref2.data,
      _ref2$typeFor = _ref2.typeFor,
      typeFor = _ref2$typeFor === void 0 ? 'videos' : _ref2$typeFor,
      SetMedia = _ref2.SetMedia;
  console.log('type', typeFor);
  return __jsx(Styled, {
    className: "media--card ".concat(typeFor === 'videos' ? 'vid' : 'img'),
    forMedia: typeFor,
    bgImg: data.key || data.file_path,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("button", {
    className: "play--button",
    onClick: function onClick() {
      return SetMedia();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, typeFor === 'videos' ? __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaRegPlayCircle"], {
    className: "media--play",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }) : __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaSearch"], {
    className: "media--scale",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), ' '));
};

/* harmony default export */ __webpack_exports__["default"] = (MediaCard);

/***/ })

})
//# sourceMappingURL=[id].js.4fe82070c6b5a311724a.hot-update.js.map