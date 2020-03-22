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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\Navbar.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].header.withConfig({
  displayName: "Navbar__Styled",
  componentId: "z1ydwt-0"
})(["position:fixed;top:0;right:0;left:0;z-index:1030;background-image:var(--bg-dark-gradient);.navbar{max-width:1500px;margin:0 auto;}.navbar-toggler{background-color:var(--white-clr);}.navbar-nav .nav-link{color:var(--white-clr);font-weight:bold;border-bottom:2px solid transparent;transition:var(--ease--in--out--02s);&:hover{color:var(--white-clr);border-bottom-color:var(--primary-clr);}}.selected{border-bottom-color:var(--primary-clr) !important;color:var(--white-clr) !important;}.navbar-brand{width:30px;font-size:1rem;display:flex;align-items:center;color:var(--white-clr);font-weight:bold;cursor:pointer;&:hover,&:focus{color:inherit;}img{display:inline-block;margin-right:0.5em;}}.nav--dropdown:hover .dropdown-menu{display:block;}.dropdown--link{display:none;}.dropdown--btn{display:block;width:100%;text-align:left;outline-color:transparent;}@media screen and (min-width:1000px){.dropdown--btn{display:none;}.dropdown--link{display:block;}}@media screen and (min-width:1000px){.navbar-collapse{margin-left:13em;}.navbar-brand{width:40px;}}"]);

var NavCustom = function NavCustom() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_MovieContext__WEBPACK_IMPORTED_MODULE_1__["default"]),
      navScroll = _useContext.navScroll,
      navRef = _useContext.navRef;

  return __jsx(Styled, {
    className: "header",
    ref: navRef,
    navScroll: navScroll,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    collapseOnSelect: true,
    expand: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("a", {
    className: "navbar-brand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx("img", {
    src: "/popcorn_logo.png",
    alt: "popcorn logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }), "PopCorn Fun")), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"].Toggle, {
    "aria-controls": "responsive-navbar-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"].Collapse, {
    id: "responsive-navbar-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "mr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx("a", {
    className: "nav-link",
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "Home")), __jsx(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/discover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx("a", {
    className: "nav-link",
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "Discover")), __jsx("div", {
    className: "dropdown nav-item nav--dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/movie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx("a", {
    className: "nav-link dropdown--link",
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "Movies ", __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_9__["IoIosArrowDown"], {
    className: "nav--arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }))), __jsx("button", {
    className: "nav-link dropdown--btn",
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "Movies ", __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_9__["IoIosArrowDown"], {
    className: "nav--arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  })), __jsx("div", {
    className: "dropdown-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/movie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx("a", {
    className: "dropdown-item",
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "Popular")), __jsx(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/movie?top_rated",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx("a", {
    className: "dropdown-item",
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "Top Rated")), __jsx(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/movie?upcoming",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx("a", {
    className: "dropdown-item",
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "Upcoming")), __jsx(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/movie?now_playing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, __jsx("a", {
    className: "dropdown-item",
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "Now Playing")))), __jsx(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/tv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, __jsx("a", {
    className: "nav-link",
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, "Tv Shows")), __jsx(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/person",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, __jsx("a", {
    className: "nav-link",
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, "People"))), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, __jsx("a", {
    className: "nav-link",
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, "Log In")), __jsx(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/signup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, __jsx("a", {
    className: "nav-link",
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, "Sign Up"))))), __jsx(_ui_SearchFrom__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (NavCustom);

/***/ })

})
//# sourceMappingURL=_app.js.1274525f4f088971342c.hot-update.js.map