webpackHotUpdate("static\\development\\pages\\tv\\[id].js",{

/***/ "./components/ui/mediaProfile/ProfileStats/ReleaseContent.jsx":
/*!********************************************************************!*\
  !*** ./components/ui/mediaProfile/ProfileStats/ReleaseContent.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ti */ "./node_modules/react-icons/ti/index.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\mediaProfile\\ProfileStats\\ReleaseContent.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var ReleaseContent = function ReleaseContent(_ref) {
  var data = _ref.data,
      typeFor = _ref.typeFor;
  var networks = typeFor === 'tv' && data.networks.map(function (netWork) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: netWork.id,
      href: "/network/[id]",
      as: "/network/".concat(netWork.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("img", {
      className: "network--logo",
      src: "".concat(IMG_URL).concat(netWork.logo_path),
      alt: netWork.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }));
  });

  var setData = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(data[typeFor === 'tv' ? 'content_ratings' : 'release_dates'].results.filter(function (item) {
    return item.iso_3166_1 === 'US';
  })[0]);

  return __jsx("ul", {
    className: "release--content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, networks, data.typeFor === 'tv' && __jsx("p", {
    className: "stat--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Certification"), data.typeFor === 'tv' && __jsx("div", {
    className: "release--date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(react_icons_ti__WEBPACK_IMPORTED_MODULE_2__["TiWorld"], {
    className: "world",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("span", {
    className: "rate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, data.typeFor === 'tv' && setData)));
};

/* harmony default export */ __webpack_exports__["default"] = (ReleaseContent);
{
  /* <li key={i}>
  <div className='release--date'>
  <TiWorld className='world' />
  <span className='stat--subtext'>
    {setDateFormat(item.release_date.slice(0, 10))}
  </span>
  </div>
  <div className='certification'>
  <span className='rate'>{item.certification}</span>
  <span className='stat--subtext'>{getReleaseType[item.type]}</span>
  </div>
  </li> */
}

/***/ })

})
//# sourceMappingURL=[id].js.8c9602532e2759923c6a.hot-update.js.map