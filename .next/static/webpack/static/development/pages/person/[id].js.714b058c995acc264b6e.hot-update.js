webpackHotUpdate("static\\development\\pages\\person\\[id].js",{

/***/ "./components/ui/Cards/RecommenCard.jsx":
/*!**********************************************!*\
  !*** ./components/ui/Cards/RecommenCard.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _context_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/types */ "./components/context/types.js");
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/go */ "./node_modules/react-icons/go/index.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\Cards\\RecommenCard.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "RecommenCard__Styled",
  componentId: "sc-8rijlz-0"
})([".recommend--card--poster{position:relative;width:160px;height:240px;cursor:pointer;&::after{content:'View More';transition:var(--ease--in--out--02s);display:flex;justify-content:center;align-items:center;position:absolute;font-size:0.8rem;font-weight:bold;background-color:var(--primary-clr-rgba);height:0;width:100%;opacity:0;top:0;left:0;right:0;}&:hover::after,&:focus::after{opacity:1;height:100%;}&__release{position:absolute;bottom:0;left:0;right:0;color:var(--white-clr);background-color:var(--primary-clr);padding:0.5em 0;text-align:center;font-weight:bold;font-size:0.9rem;display:flex;align-items:center;justify-content:center;z-index:1;.calendar{margin-right:0.5em;font-size:1.2rem;}.date{margin-right:0.5em;}}}.recommend--card__content{display:flex;align-items:baseline;margin-top:0.5em;&--name{font-weight:bold;transition:var(--ease--in--out--02s);&:hover,&:focus{color:var(--primary-clr);}}}@media screen and (min-width:1280px){.recommend--card--poster{width:180px;height:270px;}}"]);

var RecommenCard = function RecommenCard(_ref) {
  var data = _ref.data,
      typeFor = _ref.typeFor;
  return __jsx(Styled, {
    className: "recommend--card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/".concat(typeFor, "/[id]"),
    as: "/".concat(typeFor, "/").concat(data.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("div", {
    className: "recommend--card--poster",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("img", {
    className: "recommend--card--poster__img",
    src: "".concat(_context_types__WEBPACK_IMPORTED_MODULE_2__["IMG_URL"]).concat(data.poster_path),
    alt: data.title || data.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), __jsx("div", {
    className: "recommend--card--poster__release",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx(react_icons_go__WEBPACK_IMPORTED_MODULE_3__["GoCalendar"], {
    className: "calendar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), __jsx("span", {
    className: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, data.release_date || data.first_air_date)))), __jsx("div", {
    className: "recommend--card__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/".concat(typeFor, "/[id]"),
    as: "/".concat(typeFor, "/").concat(data.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("a", {
    className: "recommend--card__content--name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, data.title || data.name)), __jsx("span", {
    className: "rating--star",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, data.vote_average, __jsx(react_icons_go__WEBPACK_IMPORTED_MODULE_3__["GoStar"], {
    className: "star",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (RecommenCard);

/***/ }),

/***/ "./components/ui/PersonProfile/KnownFor.jsx":
/*!**************************************************!*\
  !*** ./components/ui/PersonProfile/KnownFor.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _SimpleFlex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SimpleFlex */ "./components/ui/SimpleFlex.js");
/* harmony import */ var _Cards_RecommenCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Cards/RecommenCard */ "./components/ui/Cards/RecommenCard.jsx");
/* harmony import */ var _Cards_CardOne__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Cards/CardOne */ "./components/ui/Cards/CardOne.jsx");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\PersonProfile\\KnownFor.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "KnownFor__Styled",
  componentId: "sc-1fqp2dp-0"
})([".card--one{flex:0 0 160px;margin-right:1.5em;}@media screen and (min-width:1000px){.knonwFor--content{all:unset;display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));grid-gap:2.7em 1em;padding-top:1.2em;div{margin:0;}}}@media screen and (min-width:1000px){.subTitle,.rating--star{color:var(--second-clr);}.recommend--card__content--name{color:var(--second-clr);}}"]);

var KnownFor = function KnownFor(_ref) {
  var data = _ref.data;
  return __jsx(Styled, {
    className: "profile--media__knownFor px-2 pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("h3", {
    className: "subTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Known For"), data.length === 0 ? __jsx("p", {
    className: "my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Sorry Nothing Available") : __jsx(_SimpleFlex__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "knonwFor--content",
    setWidth: "160px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, data.map(function (item) {
    return (// <RecommenCard
      //   key={Math.random() * 10}
      //   data={item}
      //   typeFor={item.media_type}
      // />
      __jsx(_Cards_CardOne__WEBPACK_IMPORTED_MODULE_4__["default"], {
        key: Math.random() * 10,
        data: item,
        typeFor: item.media_type,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      })
    );
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (KnownFor);

/***/ })

})
//# sourceMappingURL=[id].js.714b058c995acc264b6e.hot-update.js.map