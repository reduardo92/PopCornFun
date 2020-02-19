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
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\FeturedSection\\FeturedSection.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "FeturedSection__Styled",
  componentId: "sc-1un1zrn-0"
})(["position:relative;min-height:85vh;background:linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)),url(", ") no-repeat center;background-size:cover;object-fit:cover;width:100%;display:flex;align-items:center;justify-content:center;.max-width{padding:0 1em;display:grid;grid-gap:2.2em;}.fetured--content{width:100%;max-width:540px;display:grid;grid-gap:1em;text-align:left;justify-items:left;}.button{}.btn--group{width:100%;display:grid;justify-items:start;grid-gap:1.5em;}}.tags--group{display:flex;justify-content:space-between;width:200px;.tag{border:2px solid var(--white-clr);box-sizing:border-box;background:rgba(0,0,0,.20);color:#000;border-radius:50%;width:35px;height:35px;padding:6px;color:var(--white-clr);&:hover,&:focus{color:var(--second-clr);background-color:var(--white-clr);}}}.fetured--action{margin-left:8px;button{position:relative;display:flex;justify-content:flex-start;align-items:center;background:transparent;border:none;outline:none;color:var(--white-clr);font-weight:bold;transition:var(--ease--in--out--02s);&::before{content:'';position:absolute;bottom:0;left:0;right:0;height:1px;width:100%;transition:var(--ease--in--out--02s);background-color:var(--primary-clr);transform:scale(0);transform-origin:left;}svg{margin-left:5px;font-size:2rem;color:var(--primary-clr);transition:var(--ease--in--out--02s);}}&:hover button,&:focus button{opacity:0.8;}&:hover button::before,&:focus button::before{transform:scale(1);}&:hover svg,&:focus svg{opacity:0.8;margin-left:15px;}}.heading{display:flex;width:100%;align-items:center;}.title{margin-bottom:0;margin-right:0.5em;}@media screen and (min-width:768px){min-height:60vh;.max-width{grid-template-columns:1fr 1fr;justify-items:center;align-items:center;width:100%;}.heading svg{width:75px;flex:0 0 75px;}.title{font-size:2.5rem;}.fetured--action{button{flex-direction:column;padding-bottom:10px;font-size:1.2rem;&::before{width:110px;margin:0 auto;height:2px;transform-origin:bottom;}svg{font-size:12rem;order:-1;margin:0;}}&:hover svg,&:focus svg{margin-left:0;margin-bottom:10px;transform:scale(0.98);}}}@media screen and (min-width:1200px){min-height:600px;background-position:unset;.fetured--action{button{font-size:1.1rem;}}}"], function (_ref) {
  var bgImg = _ref.bgImg;
  return "".concat(_context_types__WEBPACK_IMPORTED_MODULE_3__["IMG_URL_OR"]).concat(bgImg);
});

var FeturedSection = function FeturedSection(_ref2) {
  var data = _ref2.data,
      typeFor = _ref2.typeFor;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      toggle = _useState[0],
      setToggle = _useState[1];

  return __jsx(Styled, {
    className: "fetured",
    bgImg: data.backdrop_path,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, __jsx("div", {
    className: "max-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, __jsx("div", {
    className: "fetured--content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, __jsx("div", {
    className: "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, __jsx("h2", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, data.title || data.name), __jsx(_CirclePercentage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: data.vote_average * 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  })), __jsx("p", {
    className: "subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, data.overview.length > 545 ? "".concat(data.overview.slice(0, 545), "...") : data.overview), __jsx("div", {
    className: "btn--group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    toLink: "/".concat(typeFor, "/").concat(data.id),
    title: "view more",
    bgclr: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }), __jsx("div", {
    className: "tags--group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__["MdFormatListBulleted"], {
    className: "tag",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_6__["IoMdHeart"], {
    className: "tag",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_6__["IoMdBookmark"], {
    className: "tag",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }), __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__["MdStar"], {
    className: "tag",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  })))), __jsx("div", {
    className: "fetured--action",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      setToggle(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, "play Trailer", __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__["MdPlayCircleOutline"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  })))), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    centered: true,
    size: "lg",
    show: toggle,
    onHide: function onHide() {
      return setToggle(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, __jsx("div", {
    className: "embed-responsive embed-responsive-16by9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, __jsx("iframe", {
    className: "embed-responsive-item",
    src: "https://www.youtube.com/embed/".concat(data.videos.key),
    allowFullScreen: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (FeturedSection);

/***/ })

})
//# sourceMappingURL=index.js.fec2db66c400e93c70b8.hot-update.js.map