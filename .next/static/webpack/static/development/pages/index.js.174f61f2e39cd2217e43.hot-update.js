webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ui/sectionCarousel/SectionCarousel.jsx":
/*!***********************************************************!*\
  !*** ./components/ui/sectionCarousel/SectionCarousel.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Cards_CardOne__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Cards/CardOne */ "./components/ui/Cards/CardOne.jsx");
/* harmony import */ var _CardTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CardTitle */ "./components/ui/CardTitle.jsx");
/* harmony import */ var _ButtonSimple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ButtonSimple */ "./components/ui/ButtonSimple.jsx");
/* harmony import */ var _carousel_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../carousel/carousel */ "./components/ui/carousel/carousel.jsx");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\sectionCarousel\\SectionCarousel.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "SectionCarousel__Styled",
  componentId: "sc-1rtx4p8-0"
})(["padding:2em 0.5em 0;@media screen and (min-width:1200px){display:grid;grid-template-columns:", ";grid-gap:1em;.card--title{order:", ";align-self:center;margin-top:5em;}}"], function (_ref) {
  var order = _ref.order;
  return order ? 'auto 300px' : '300px auto';
}, function (_ref2) {
  var order = _ref2.order;
  return order ? 1 : 0;
});

var SectionCarousel = function SectionCarousel(_ref3) {
  var data = _ref3.data,
      typeFor = _ref3.typeFor,
      title = _ref3.title,
      toLink = _ref3.toLink,
      btnTitle = _ref3.btnTitle,
      order = _ref3.order;
  return __jsx(Styled, {
    className: "section--carousel--media max-width",
    order: order,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(_CardTitle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: title,
    invert: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(_ButtonSimple__WEBPACK_IMPORTED_MODULE_4__["default"], {
    toLink: toLink,
    title: btnTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), __jsx(_carousel_carousel__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, data.map(function (item) {
    return __jsx(_Cards_CardOne__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: item.id,
      data: item,
      typeFor: typeFor,
      invert: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SectionCarousel);

/***/ })

})
//# sourceMappingURL=index.js.174f61f2e39cd2217e43.hot-update.js.map