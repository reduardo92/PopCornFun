webpackHotUpdate("static\\development\\pages\\signup.js",{

/***/ "./pages/signup.jsx":
/*!**************************!*\
  !*** ./pages/signup.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_ui_Forms_formstyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ui/Forms/formstyle */ "./components/ui/Forms/formstyle.js");
/* harmony import */ var _components_Hooks_useForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Hooks/useForm */ "./components/Hooks/useForm.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\pages\\signup.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var signup = function signup() {
  var submit = function submit() {
    console.log(form);
  };

  var _useForm = Object(_components_Hooks_useForm__WEBPACK_IMPORTED_MODULE_3__["default"])({
    name: '',
    email: '',
    password: '',
    password2: ''
  }, submit),
      handleChange = _useForm.handleChange,
      handleSubmit = _useForm.handleSubmit,
      form = _useForm.form,
      setForm = _useForm.setForm;

  var name = form.name,
      email = form.email,
      password = form.password,
      password2 = form.password2;
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("form", {
    className: "form login--from",
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Name"), __jsx("input", {
    id: "name",
    name: "name",
    value: name,
    onChange: handleChange,
    type: "text",
    className: "form-control",
    "aria-describedby": "name",
    placeholder: "Enter name" // required
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Email address"), __jsx("input", {
    id: "email",
    name: "email",
    value: email,
    onChange: handleChange,
    type: "email",
    className: "form-control",
    "aria-describedby": "emailHelp",
    placeholder: "Enter email" // required
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Password"), __jsx("input", {
    id: "password",
    name: "password",
    value: password,
    onChange: handleChange,
    type: "password",
    className: "form-control",
    placeholder: "Enter password",
    minLength: "6" // required
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  })), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "password2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Confirm password"), __jsx("input", {
    id: "password2",
    name: "password2",
    value: password2,
    onChange: handleChange,
    type: "password",
    className: "form-control",
    placeholder: "Enter password again",
    minLength: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "primary",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Sign Up"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "primary",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Cancel"))));
};

/* harmony default export */ __webpack_exports__["default"] = (signup);

/***/ })

})
//# sourceMappingURL=signup.js.2592e344a1dd264e1283.hot-update.js.map