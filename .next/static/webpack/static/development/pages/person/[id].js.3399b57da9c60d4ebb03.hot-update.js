webpackHotUpdate("static\\development\\pages\\person\\[id].js",{

/***/ "./components/ui/PersonProfile/Biography.jsx":
/*!***************************************************!*\
  !*** ./components/ui/PersonProfile/Biography.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\PersonProfile\\Biography.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Biography__Styled",
  componentId: "qujsc4-0"
})(["margin:2em 0;display:grid;max-width:1020px;.profile--biography__name{font-weight:bold;margin-bottom:1em;text-align:center;}.read--more{display:flex;align-items:center;margin:0 auto;background-color:var(--primary-clr);border-radius:50%;padding:0.25em;font-size:1.7rem;transition:var(--ease--in--out--02s);color:var(--white-clr);&:hover{opacity:0.8;transform:scale(0.9);}}@media screen and (min-width:1000px){justify-self:start;align-self:center;margin-left:2em;.profile--biography__name{text-align:left;}}"]);

var Biography = function Biography(_ref) {
  var name = _ref.name,
      bio = _ref.bio;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      bioActive = _useState[0],
      setBioActive = _useState[1];

  var bioCondetion = bio.length === 0 ? 'Sorry Nothing Available' : bio.length <= 600 ? bio : "".concat(bio.slice(0, 600), "...");
  return __jsx(Styled, {
    className: "profile--biography px-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("h2", {
    className: "profile--biography__name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, name), __jsx("h3", {
    className: "subTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Biography"), __jsx("p", {
    className: "profile--biography__bio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, bioActive ? bio : bioCondetion), bio.length >= 600 && __jsx("a", {
    href: "#" // onClick={() => setModal(person.biography, 'person')}
    ,
    onClick: function onClick() {
      return setBioActive(!bioActive);
    },
    className: "read--more",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, bioActive ? __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosArrowUp"], {
    className: "read--more__arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }) : __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosArrowDown"], {
    className: "read--more__arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Biography);

/***/ })

})
//# sourceMappingURL=[id].js.3399b57da9c60d4ebb03.hot-update.js.map