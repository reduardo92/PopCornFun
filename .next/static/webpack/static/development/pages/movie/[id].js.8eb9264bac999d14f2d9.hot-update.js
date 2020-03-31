webpackHotUpdate("static\\development\\pages\\movie\\[id].js",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_MovieContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context/MovieContext */ "./components/context/MovieContext.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var _context_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context/types */ "./components/context/types.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Layout = function Layout(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_MovieContext__WEBPACK_IMPORTED_MODULE_1__["default"]),
      clearData = _useContext.clearData,
      isModal = _useContext.isModal;

  return __jsx("main", {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, children, ' ', __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    centered: true,
    size: "lg",
    show: isModal.toggle,
    onHide: function onHide() {
      return clearData(_context_types__WEBPACK_IMPORTED_MODULE_3__["RESET_MODAL_MEDIA"]);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, isModal["for"] !== 'videos' ? __jsx("img", {
    className: "modal--img",
    src: "".concat(_context_types__WEBPACK_IMPORTED_MODULE_3__["IMG_URL"]).concat(isModal.media),
    alt: isModal.media,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }) : __jsx("div", {
    className: "embed-responsive embed-responsive-16by9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("iframe", {
    className: "embed-responsive-item",
    src: "https://www.youtube.com/embed/".concat(isModal.media),
    allowFullScreen: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=[id].js.8eb9264bac999d14f2d9.hot-update.js.map