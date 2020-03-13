webpackHotUpdate("static\\development\\pages\\movie\\[id].js",{

/***/ "./components/ui/mediaProfile/CrewTab.jsx":
/*!************************************************!*\
  !*** ./components/ui/mediaProfile/CrewTab.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\mediaProfile\\CrewTab.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  .crew--person__link {\n    cursor: pointer;\n    transition: var(--ease--in--out--02s);\n\n    &:hover,\n    &:focus {\n      color: var(--primary-clr);\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Styled = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());

var CrewTab = function CrewTab(_ref) {
  var crew = _ref.crew;
  return __jsx(Styled, {
    className: "crew--person",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/person/[id]",
    as: "/person/".concat(crew.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("a", {
    className: "crew--person__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, crew.name)), __jsx("small", {
    className: "d-block mt-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
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
//# sourceMappingURL=[id].js.37a4fdf8b009c6346d78.hot-update.js.map