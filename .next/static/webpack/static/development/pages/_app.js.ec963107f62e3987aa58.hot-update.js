webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/react-circular-progressbar/dist/styles.css":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??__nextjs_postcss!./node_modules/react-circular-progressbar/dist/styles.css ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "/*\n * react-circular-progressbar styles\n * All of the styles in this file are configurable!\n */\n\n.CircularProgressbar {\n  /*\n   * This fixes an issue where the CircularProgressbar svg has\n   * 0 width inside a \"display: flex\" container, and thus not visible.\n   */\n  width: 100%;\n  /*\n   * This fixes a centering issue with CircularProgressbarWithChildren:\n   * https://github.com/kevinsqi/react-circular-progressbar/issues/94\n   */\n  vertical-align: middle;\n}\n\n.CircularProgressbar .CircularProgressbar-path {\n  stroke: #3e98c7;\n  stroke-linecap: round;\n  transition: stroke-dashoffset 0.5s ease 0s;\n}\n\n.CircularProgressbar .CircularProgressbar-trail {\n  stroke: #d6d6d6;\n  /* Used when trail is not full diameter, i.e. when props.circleRatio is set */\n  stroke-linecap: round;\n}\n\n.CircularProgressbar .CircularProgressbar-text {\n  fill: #3e98c7;\n  font-size: 20px;\n  dominant-baseline: middle;\n  text-anchor: middle;\n}\n\n.CircularProgressbar .CircularProgressbar-background {\n  fill: #d6d6d6;\n}\n\n/*\n * Sample background styles. Use these with e.g.:\n *\n *   <CircularProgressbar\n *     className=\"CircularProgressbar-inverted\"\n *     background\n *     percentage={50}\n *   />\n */\n.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-background {\n  fill: #3e98c7;\n}\n\n.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-text {\n  fill: #fff;\n}\n\n.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-path {\n  stroke: #fff;\n}\n\n.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-trail {\n  stroke: transparent;\n}\n", "",{"version":3,"sources":["styles.css"],"names":[],"mappings":"AAAA;;;EAGE;;AAEF;EACE;;;IAGE;EACF,WAAW;EACX;;;IAGE;EACF,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,qBAAqB;EAErB,0CAA0C;AAC5C;;AAEA;EACE,eAAe;EACf,6EAA6E;EAC7E,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;;;;;;;;EAQE;AACF;EACE,aAAa;AACf;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB","file":"styles.css","sourcesContent":["/*\n * react-circular-progressbar styles\n * All of the styles in this file are configurable!\n */\n\n.CircularProgressbar {\n  /*\n   * This fixes an issue where the CircularProgressbar svg has\n   * 0 width inside a \"display: flex\" container, and thus not visible.\n   */\n  width: 100%;\n  /*\n   * This fixes a centering issue with CircularProgressbarWithChildren:\n   * https://github.com/kevinsqi/react-circular-progressbar/issues/94\n   */\n  vertical-align: middle;\n}\n\n.CircularProgressbar .CircularProgressbar-path {\n  stroke: #3e98c7;\n  stroke-linecap: round;\n  -webkit-transition: stroke-dashoffset 0.5s ease 0s;\n  transition: stroke-dashoffset 0.5s ease 0s;\n}\n\n.CircularProgressbar .CircularProgressbar-trail {\n  stroke: #d6d6d6;\n  /* Used when trail is not full diameter, i.e. when props.circleRatio is set */\n  stroke-linecap: round;\n}\n\n.CircularProgressbar .CircularProgressbar-text {\n  fill: #3e98c7;\n  font-size: 20px;\n  dominant-baseline: middle;\n  text-anchor: middle;\n}\n\n.CircularProgressbar .CircularProgressbar-background {\n  fill: #d6d6d6;\n}\n\n/*\n * Sample background styles. Use these with e.g.:\n *\n *   <CircularProgressbar\n *     className=\"CircularProgressbar-inverted\"\n *     background\n *     percentage={50}\n *   />\n */\n.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-background {\n  fill: #3e98c7;\n}\n\n.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-text {\n  fill: #fff;\n}\n\n.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-path {\n  stroke: #fff;\n}\n\n.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-trail {\n  stroke: transparent;\n}\n"]}]);


/***/ }),

/***/ "./node_modules/react-circular-progressbar/dist/styles.css":
/*!*****************************************************************!*\
  !*** ./node_modules/react-circular-progressbar/dist/styles.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../postcss-loader/src??__nextjs_postcss!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/react-circular-progressbar/dist/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../postcss-loader/src??__nextjs_postcss!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/react-circular-progressbar/dist/styles.css",
      function () {
        var newContent = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../postcss-loader/src??__nextjs_postcss!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/react-circular-progressbar/dist/styles.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_context_MovieProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/context/MovieProvider */ "./components/context/MovieProvider.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.jsx");
/* harmony import */ var react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-circular-progressbar/dist/styles.css */ "./node_modules/react-circular-progressbar/dist/styles.css");
/* harmony import */ var react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../global.css */ "./global.css");
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_global_css__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var MyApp = function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "PopCorn Fun"), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Montserrat:400,700|Roboto:300,400&display=swap",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
    integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    key: "viewport",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), __jsx(_components_context_MovieProvider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ })

})
//# sourceMappingURL=_app.js.ec963107f62e3987aa58.hot-update.js.map