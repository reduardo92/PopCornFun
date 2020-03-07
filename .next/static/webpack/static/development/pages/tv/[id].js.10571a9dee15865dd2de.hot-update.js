webpackHotUpdate("static\\development\\pages\\tv\\[id].js",{

/***/ "./components/ui/mediaProfile/CrewTab.jsx":
/*!************************************************!*\
  !*** ./components/ui/mediaProfile/CrewTab.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\mediaProfile\\CrewTab.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var CrewTab = function CrewTab(_ref) {
  var crew = _ref.crew;
  return __jsx("div", {
    className: "crew--person",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/person/[id]",
    as: "/person/".concat(crew.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, crew.name)), __jsx("small", {
    className: "d-block mt-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, crew.department ? crew.department.join(', ') : 'Creator'));
};

/* harmony default export */ __webpack_exports__["default"] = (CrewTab);
{
  /* <div className='crew--person'>
  <Link href='/person/[id]' as={`/person/${crew[0].id}`}>
  <a>{crew[0].name}</a>
  </Link>
  <small className='d-block mt-1'>{crew[0].department.join(', ')}</small>
  </div> */
}

/***/ })

})
//# sourceMappingURL=[id].js.10571a9dee15865dd2de.hot-update.js.map