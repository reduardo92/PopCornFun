webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/ui/SearchFrom.jsx":
/*!**************************************!*\
  !*** ./components/ui/SearchFrom.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Hooks_useForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Hooks/useForm */ "./components/Hooks/useForm.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\SearchFrom.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SearchFrom__Styled",
  componentId: "fc5opr-0"
})(["background-color:var(--white-clr);.form;"]);

var SearchFrom = function SearchFrom() {
  var submit = function submit() {
    if (form.search === '') {
      setAlert('Please search something...', 'danger');
    } else {
      console.log('loged', form.search);
      setForm({
        search: ''
      });
    }
  };

  var _useForm = Object(_Hooks_useForm__WEBPACK_IMPORTED_MODULE_2__["default"])({
    search: ''
  }, submit),
      handleChange = _useForm.handleChange,
      handleSubmit = _useForm.handleSubmit,
      form = _useForm.form,
      setForm = _useForm.setForm;

  return __jsx(Styled, {
    classname: "search form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onSubmit: handleSubmit,
    validated: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__["default"].Group, {
    controlId: "search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__["default"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaSearch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__["default"].Control, {
    type: "text",
    name: "search",
    value: form.search,
    onChange: handleChange,
    placeholder: "Search for a movie, tv show, person...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchFrom);

/***/ })

})
//# sourceMappingURL=_app.js.670b9d6c91a53e563ced.hot-update.js.map