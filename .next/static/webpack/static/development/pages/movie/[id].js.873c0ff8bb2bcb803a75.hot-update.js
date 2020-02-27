webpackHotUpdate("static\\development\\pages\\movie\\[id].js",{

/***/ "./components/ui/Cards/CastCard.jsx":
/*!******************************************!*\
  !*** ./components/ui/Cards/CastCard.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/types */ "./components/context/types.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\Cards\\CastCard.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "CastCard__Styled",
  componentId: "sc-4vs9ca-0"
})([".card--poster{width:100%;height:230px;cursor:pointer;transition:var(--ease--in--out--02s);&:hover,&:focus{opacity:0.8;}img{height:100%;object-fit:cover;}}.name{font-weight:bold;font-size:1rem;margin:1em 0 0.4em;cursor:pointer;transition:var(--ease--in--out--02s);&:hover,&:focus{opacity:0.8;}}.character{font-size:12px;opacity:0.8;}"]);

var CastCard = function CastCard(_ref) {
  var data = _ref.data;
  return __jsx(Styled, {
    className: "cast--card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/person/[id]",
    as: "/person/".concat(data.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    className: "card--poster",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("img", {
    className: "cast--card__img",
    src: "".concat(_context_types__WEBPACK_IMPORTED_MODULE_3__["IMG_URL"]).concat(data.profile_path),
    alt: data.title || data.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/person/[id]",
    as: "/person/".concat(data.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("h4", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, data.name)), __jsx("div", {
    className: "character",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, data.character));
};

/* harmony default export */ __webpack_exports__["default"] = (CastCard);

/***/ }),

/***/ "./components/ui/Cards/castCard.jsx":
false,

/***/ "./components/ui/TopBilledCast.jsx":
/*!*****************************************!*\
  !*** ./components/ui/TopBilledCast.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _SimpleFlex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SimpleFlex */ "./components/ui/SimpleFlex.js");
/* harmony import */ var _Cards_CastCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Cards/CastCard */ "./components/ui/Cards/CastCard.jsx");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\TopBilledCast.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "TopBilledCast__Styled",
  componentId: "s5a97-0"
})(["padding:1em 0.5em;.subTitle{margin-bottom:1.5em;}.view--more{display:flex;align-items:center;font-weight:bold;transition:var(--ease--in--out--02s);cursor:pointer;a{letter-spacing:0.8px;color:var(--white-clr);}svg{transition:var(--ease--in--out--02s);font-size:1rem;}&:hover,&:focus{opacity:0.8;margin-bottom:1em;}&:hover svg,&:focus svg{margin-left:0.2em;}}"]);

var TopBilledCast = function TopBilledCast(_ref) {
  var data = _ref.data;
  return __jsx(Styled, {
    className: "top--billed--cast",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("h3", {
    className: "subTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Top Billed Cast"), __jsx(_SimpleFlex__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "simple--flex",
    setWidth: "150px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, data.map(function (item, i) {
    return i < 6 && __jsx(_Cards_CastCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: item.id,
      data: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    });
  }), __jsx("div", {
    className: "view--more",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/movie/[id]/cast",
    as: "/movie/".concat(data.id, "/cast"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "View More ", __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaArrowAltCircleRight"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }))))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/movie/[id]/cast",
    as: "/movie/".concat(data.id, "/cast"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("a", {
    className: "title redHover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Full Cast & Crew")));
};

/* harmony default export */ __webpack_exports__["default"] = (TopBilledCast);

/***/ })

})
//# sourceMappingURL=[id].js.873c0ff8bb2bcb803a75.hot-update.js.map