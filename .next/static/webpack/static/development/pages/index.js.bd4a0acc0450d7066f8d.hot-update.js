webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ui/FeturedSection/FeturedSection.jsx":
/*!*********************************************************!*\
  !*** ./components/ui/FeturedSection/FeturedSection.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button */ "./components/ui/button.js");
/* harmony import */ var _context_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/types */ "./components/context/types.js");
/* harmony import */ var _CirclePercentage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CirclePercentage */ "./components/ui/CirclePercentage.jsx");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\FeturedSection\\FeturedSection.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "FeturedSection__Styled",
  componentId: "sc-1un1zrn-0"
})(["position:relative;padding:4em 0;background:linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)),url(", ") no-repeat center;background-size:cover;object-fit:cover;width:100%;display:flex;align-items:center;justify-content:center;.max-width{padding:0 1em;display:grid;}.fetured--content{width:100%;max-width:480px;display:grid;grid-gap:1em;text-align:left;justify-items:left;}.heading{display:flex;width:100%;align-items:flex-end;}.title{margin-bottom:0;margin-right:0.5em;}@media screen and (min-width:768px){min-height:50vh;}"], function (_ref) {
  var bgImg = _ref.bgImg;
  return "".concat(_context_types__WEBPACK_IMPORTED_MODULE_3__["IMG_URL_OR"]).concat(bgImg);
});

var FeturedSection = function FeturedSection(_ref2) {
  var data = _ref2.data,
      typeFor = _ref2.typeFor;
  return __jsx(Styled, {
    className: "fetured",
    bgImg: data.backdrop_path,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("div", {
    className: "max-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("div", {
    className: "fetured--content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("div", {
    className: "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("h2", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, data.title || data.name), __jsx(_CirclePercentage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: data.vote_average * 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  })), __jsx("p", {
    className: "subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, data.overview), __jsx("div", {
    className: "btn--group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    toLink: "/".concat(typeFor, "/").concat(data.id),
    title: "view more",
    bgclr: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }))), __jsx("div", {
    className: "fetured--action",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaPlayCircle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (FeturedSection);

/***/ })

})
//# sourceMappingURL=index.js.bd4a0acc0450d7066f8d.hot-update.js.map