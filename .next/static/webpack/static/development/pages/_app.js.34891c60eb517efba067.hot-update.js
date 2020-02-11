webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Navbar.jsx":
/*!*******************************!*\
  !*** ./components/Navbar.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_MovieContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context/MovieContext */ "./components/context/MovieContext.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Link */ "./components/Link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ui_SearchFrom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/SearchFrom */ "./components/ui/SearchFrom.jsx");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\Navbar.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].header.withConfig({
  displayName: "Navbar__Styled",
  componentId: "z1ydwt-0"
})(["position:fixed;top:0;right:0;left:0;z-index:1030;background-image:var(--bg-gradient);.navbar{max-width:1500px;margin:0 auto;}.navbar-collapse{margin-left:13em;}.navbar-nav .nav-link,.navbar-brand{color:var(--white-clr);font-weight:bold;&:hover,&:focus{color:var(--primary-clr);}}.selected{color:var(--primary-clr) !important;}.navbar-brand{width:45px;img{display:inline-block;margin-right:0.5em;}}@media screen and (min-width:1200px){}"]);

var NavCustom = function NavCustom() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_MovieContext__WEBPACK_IMPORTED_MODULE_1__["default"]),
      navScroll = _useContext.navScroll,
      navRef = _useContext.navRef;

  return __jsx(Styled, {
    className: "header",
    ref: navRef,
    navScroll: navScroll,
    bg: "light",
    variant: "light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    collapseOnSelect: true,
    expand: "lg",
    bg: "dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("a", {
    className: "navbar-brand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("img", {
    src: "/popcorn_logo.png",
    alt: "popcorn logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), "PopCorn Fun")), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"].Toggle, {
    "aria-controls": "responsive-navbar-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"].Collapse, {
    id: "responsive-navbar-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "mr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/discover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("a", {
    className: "nav-link",
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Discover")), __jsx(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/movie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("a", {
    className: "nav-link",
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Movies")), __jsx(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/tv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("a", {
    className: "nav-link",
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Tv Shows")), __jsx(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/person",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("a", {
    className: "nav-link",
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "People"))), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("a", {
    className: "nav-link",
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Log In")), __jsx(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/signup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("a", {
    className: "nav-link",
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Sign Up"))))), __jsx(_ui_SearchFrom__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (NavCustom);

/***/ })

})
//# sourceMappingURL=_app.js.34891c60eb517efba067.hot-update.js.map