webpackHotUpdate("static\\development\\pages\\movie\\[id].js",{

/***/ "./components/ui/mediaProfile/ProfileStats/ReleaseContent.jsx":
/*!********************************************************************!*\
  !*** ./components/ui/mediaProfile/ProfileStats/ReleaseContent.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\mediaProfile\\ProfileStats\\ReleaseContent.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ReleaseContent = function ReleaseContent(_ref) {
  var data = _ref.data,
      typeFor = _ref.typeFor;
  var networks = typeFor === 'tv' && data.networks.map(function (netWork) {
    return __jsx(Link, {
      key: netWork.id,
      href: "/network/[id]",
      as: "/network/".concat(netWork.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx("img", {
      className: "network--logo",
      src: "".concat(IMG_URL).concat(netWork.logo_path),
      alt: netWork.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }));
  });
  var releaseData = data[data.typeFor === 'tv' ? 'content_ratings' : 'release_dates'].results.filter(function (item) {
    return item.iso_3166_1 === 'US';
  })[0];
  return __jsx("ul", {
    className: "release--content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, networks, data.typeFor === 'tv' && __jsx("p", {
    className: "stat--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Certification"));
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
//# sourceMappingURL=[id].js.3887b2c6c39616bd9f84.hot-update.js.map