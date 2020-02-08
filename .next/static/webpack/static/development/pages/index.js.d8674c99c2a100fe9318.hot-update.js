webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ui/VideoHero.jsx":
/*!*************************************!*\
  !*** ./components/ui/VideoHero.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\VideoHero.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "VideoHero__Styled",
  componentId: "sc-8il28s-0"
})(["position:relative;min-width:100%;min-height:100%;display:flex;align-items:center;justify-content:center;&::before{content:'';position:absolute;top:0;right:0;bottom:0;left:0;background-color:", ";z-index:-1;}.myVideo{position:fixed;right:0;bottom:0;height:100%;width:100%;}.content{}"], function (props) {
  return props.heroOpacity || 'rgba(0, 0, 0, 0.65)';
});

var VideoHero = function VideoHero() {
  return __jsx(Styled, {
    className: "video--bg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("video", {
    autoplay: true,
    muted: true,
    loop: true,
    className: "myVideo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("source", {
    src: "/theater.mp4",
    type: "video/mp4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), __jsx("div", {
    "class": "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("h1", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "ENTERTAINMENT TO SNACK ON")));
};

/* harmony default export */ __webpack_exports__["default"] = (VideoHero);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_ui_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ui/hero */ "./components/ui/hero.js");
/* harmony import */ var _components_ui_banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ui/banner */ "./components/ui/banner.js");
/* harmony import */ var _components_ui_VideoHero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ui/VideoHero */ "./components/ui/VideoHero.jsx");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // import Carousell from '../components/ui/carousel/carousel';

var IndexPage = function IndexPage() {
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(_components_ui_VideoHero__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx(_components_ui_hero__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(_components_ui_banner__WEBPACK_IMPORTED_MODULE_3__["default"], {
    banner: "home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.d8674c99c2a100fe9318.hot-update.js.map