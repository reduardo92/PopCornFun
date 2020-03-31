webpackHotUpdate("static\\development\\pages\\signup.js",{

/***/ "./pages/signup.jsx":
/*!**************************!*\
  !*** ./pages/signup.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_ui_Forms_formstyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ui/Forms/formstyle */ "./components/ui/Forms/formstyle.js");
/* harmony import */ var _components_Hooks_useForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Hooks/useForm */ "./components/Hooks/useForm.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\pages\\signup.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-top: 150px;\n  color: var(--second-clr);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var Styled = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].section(_templateObject());

var signup = function signup() {
  var submit = function submit() {
    console.log(form);
  };

  var _useForm = Object(_components_Hooks_useForm__WEBPACK_IMPORTED_MODULE_4__["default"])({
    username: '',
    email: '',
    password: '',
    password2: ''
  }, submit),
      handleChange = _useForm.handleChange,
      handleSubmit = _useForm.handleSubmit,
      form = _useForm.form,
      setForm = _useForm.setForm;

  var username = form.username,
      email = form.email,
      password = form.password,
      password2 = form.password2;
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(Styled, {
    className: "sign--up container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("h2", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Sign up for an account"), __jsx("p", {
    className: "para",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Signing up for an account is free and easy. Fill out the form below to get started."), __jsx("form", {
    className: "form login--from",
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "username",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Username"), __jsx("input", {
    id: "username",
    name: "username",
    value: username,
    onChange: handleChange,
    type: "text",
    className: "form-control",
    "aria-describedby": "username",
    placeholder: "Enter username" // required
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
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
      lineNumber: 55
    },
    __self: this
  })), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
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
      lineNumber: 69
    },
    __self: this
  })), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "password2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
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
      lineNumber: 83
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    variant: "primary",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Sign Up"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("a", {
    className: "cancel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Cancel")))));
};

/* harmony default export */ __webpack_exports__["default"] = (signup);

/***/ })

})
//# sourceMappingURL=signup.js.d3f8b26b81ddbf65a4e3.hot-update.js.map