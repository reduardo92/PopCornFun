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
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
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
      lineNumber: 103
    },
    __self: this
  }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    collapseOnSelect: true,
    expand: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx("a", {
    className: "navbar-brand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("img", {
    src: "/popcorn_logo.png",
    alt: "popcorn logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), "PopCorn Fun")), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"].Toggle, {
    "aria-controls": "responsive-navbar-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"].Collapse, {
    id: "responsive-navbar-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "mr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx("a", {
    className: "nav-link",
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "Home")), __jsx(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/discover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx("a", {
    className: "nav-link",
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "Discover")), __jsx("div", {
    className: "dropdown nav-item nav--dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/movie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx("a", {
    className: "nav-link dropdown--link",
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "Movies ", __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosArrowDown"], {
    className: "nav--arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }))), __jsx("button", {
    className: "nav-link dropdown--btn",
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "Movies ", __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosArrowDown"], {
    className: "nav--arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  })), __jsx("div", {
    className: "dropdown-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/movie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx("a", {
    className: "dropdown-item",
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "Popular")), __jsx(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/movie?query=top_rated",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx("a", {
    className: "dropdown-item",
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "Top Rated")), __jsx(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/movie?query=upcoming",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx("a", {
    className: "dropdown-item",
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "Upcoming")), __jsx(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/movie?query=now_playing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx("a", {
    className: "dropdown-item",
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "Now Playing")))), __jsx(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/tv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, __jsx("a", {
    className: "nav-link",
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "Tv Shows")), __jsx(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/person",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, __jsx("a", {
    className: "nav-link",
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "People"))), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, __jsx("a", {
    className: "nav-link",
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, "Log In")), __jsx(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/signup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, __jsx("a", {
    className: "nav-link",
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, "Sign Up"))))), __jsx(_ui_SearchFrom__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (NavCustom);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
false,

/***/ "./node_modules/@restart/hooks/esm/useCallbackRef.js":
false,

/***/ "./node_modules/@restart/hooks/esm/useMounted.js":
false,

/***/ "./node_modules/@restart/hooks/esm/usePrevious.js":
false,

/***/ "./node_modules/@restart/hooks/esm/useTimeout.js":
false,

/***/ "./node_modules/@restart/hooks/esm/useUpdatedRef.js":
false,

/***/ "./node_modules/@restart/hooks/esm/useWillUnmount.js":
false,

/***/ "./node_modules/dom-helpers/esm/activeElement.js":
false,

/***/ "./node_modules/dom-helpers/esm/addClass.js":
false,

/***/ "./node_modules/dom-helpers/esm/contains.js":
false,

/***/ "./node_modules/dom-helpers/esm/hasClass.js":
false,

/***/ "./node_modules/dom-helpers/esm/isDocument.js":
false,

/***/ "./node_modules/dom-helpers/esm/isWindow.js":
false,

/***/ "./node_modules/dom-helpers/esm/matches.js":
false,

/***/ "./node_modules/dom-helpers/esm/removeClass.js":
false,

/***/ "./node_modules/dom-helpers/esm/scrollbarSize.js":
false,

/***/ "./node_modules/popper.js/dist/esm/popper.js":
false,

/***/ "./node_modules/prop-types-extra/lib/isRequiredForA11y.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Accordion.js":
false,

/***/ "./node_modules/react-bootstrap/esm/AccordionCollapse.js":
false,

/***/ "./node_modules/react-bootstrap/esm/AccordionContext.js":
false,

/***/ "./node_modules/react-bootstrap/esm/AccordionToggle.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Alert.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Badge.js":
false,

/***/ "./node_modules/react-bootstrap/esm/BootstrapModalManager.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Breadcrumb.js":
false,

/***/ "./node_modules/react-bootstrap/esm/BreadcrumbItem.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Button.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ButtonGroup.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ButtonToolbar.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Card.js":
false,

/***/ "./node_modules/react-bootstrap/esm/CardColumns.js":
false,

/***/ "./node_modules/react-bootstrap/esm/CardDeck.js":
false,

/***/ "./node_modules/react-bootstrap/esm/CardGroup.js":
false,

/***/ "./node_modules/react-bootstrap/esm/CardImg.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Carousel.js":
false,

/***/ "./node_modules/react-bootstrap/esm/CarouselCaption.js":
false,

/***/ "./node_modules/react-bootstrap/esm/CarouselItem.js":
false,

/***/ "./node_modules/react-bootstrap/esm/CloseButton.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Container.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Dropdown.js":
false,

/***/ "./node_modules/react-bootstrap/esm/DropdownButton.js":
false,

/***/ "./node_modules/react-bootstrap/esm/DropdownItem.js":
false,

/***/ "./node_modules/react-bootstrap/esm/DropdownMenu.js":
false,

/***/ "./node_modules/react-bootstrap/esm/DropdownToggle.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ElementChildren.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Fade.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Figure.js":
false,

/***/ "./node_modules/react-bootstrap/esm/FigureCaption.js":
false,

/***/ "./node_modules/react-bootstrap/esm/FigureImage.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Image.js":
false,

/***/ "./node_modules/react-bootstrap/esm/InputGroup.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Jumbotron.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ListGroup.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ListGroupItem.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Media.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Modal.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ModalBody.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ModalContext.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ModalDialog.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ModalFooter.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ModalHeader.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ModalTitle.js":
false,

/***/ "./node_modules/react-bootstrap/esm/NavDropdown.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Overlay.js":
false,

/***/ "./node_modules/react-bootstrap/esm/OverlayTrigger.js":
false,

/***/ "./node_modules/react-bootstrap/esm/PageItem.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Pagination.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Popover.js":
false,

/***/ "./node_modules/react-bootstrap/esm/PopoverContent.js":
false,

/***/ "./node_modules/react-bootstrap/esm/PopoverTitle.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ProgressBar.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ResponsiveEmbed.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Row.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Spinner.js":
false,

/***/ "./node_modules/react-bootstrap/esm/SplitButton.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Tab.js":
false,

/***/ "./node_modules/react-bootstrap/esm/TabContainer.js":
false,

/***/ "./node_modules/react-bootstrap/esm/TabContent.js":
false,

/***/ "./node_modules/react-bootstrap/esm/TabPane.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Table.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Tabs.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Toast.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ToastBody.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ToastContext.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ToastHeader.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ToggleButton.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ToggleButtonGroup.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Tooltip.js":
false,

/***/ "./node_modules/react-bootstrap/esm/divWithClassName.js":
false,

/***/ "./node_modules/react-bootstrap/esm/index.js":
false,

/***/ "./node_modules/react-bootstrap/esm/useWrappedRefWithWarning.js":
false,

/***/ "./node_modules/react-overlays/esm/Dropdown.js":
false,

/***/ "./node_modules/react-overlays/esm/DropdownContext.js":
false,

/***/ "./node_modules/react-overlays/esm/DropdownMenu.js":
false,

/***/ "./node_modules/react-overlays/esm/DropdownToggle.js":
false,

/***/ "./node_modules/react-overlays/esm/Modal.js":
false,

/***/ "./node_modules/react-overlays/esm/ModalManager.js":
false,

/***/ "./node_modules/react-overlays/esm/Overlay.js":
false,

/***/ "./node_modules/react-overlays/esm/usePopper.js":
false,

/***/ "./node_modules/react-overlays/esm/useRootClose.js":
false,

/***/ "./node_modules/react-overlays/esm/utils/isOverflowing.js":
false,

/***/ "./node_modules/react-overlays/esm/utils/manageAriaHidden.js":
false,

/***/ "./node_modules/react-overlays/esm/utils/ownerDocument.js":
false,

/***/ "./node_modules/react-overlays/esm/utils/useWaitForDOMRef.js":
false,

/***/ "./node_modules/webpack/buildin/global.js":
false

})
//# sourceMappingURL=_app.js.c52260c470203347d5f9.hot-update.js.map