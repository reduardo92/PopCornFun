webpackHotUpdate("static\\development\\pages\\movie\\[id].js",{

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ti */ "./node_modules/react-icons/ti/index.esm.js");
/* harmony import */ var _context_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../context/types */ "./components/context/types.js");
/* harmony import */ var _utility_setDateFormat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utility/setDateFormat */ "./components/utility/setDateFormat.js");

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\mediaProfile\\ProfileStats\\ReleaseContent.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var ReleaseContent = function ReleaseContent(_ref) {
  var data = _ref.data,
      typeFor = _ref.typeFor;
  var getReleaseType = {
    1: 'Premiere',
    2: 'Theatrical (limited)',
    3: 'Theatrical',
    4: 'Digital',
    5: 'Physical',
    6: 'Tv'
  };
  var networks = data.typeFor === 'tv' && data.networks.map(function (netWork) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      key: netWork.id,
      href: "/network/[id]",
      as: "/network/".concat(netWork.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("img", {
      className: "network--logo",
      src: "".concat(_context_types__WEBPACK_IMPORTED_MODULE_4__["IMG_URL"]).concat(netWork.logo_path),
      alt: netWork.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }));
  });

  var setData = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(data[data.typeFor === 'tv' ? 'content_ratings' : 'release_dates'].results.filter(function (item) {
    return item.iso_3166_1 === 'US';
  })[0])[1];

  console.log(setData);
  return __jsx("ul", {
    className: "release--content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, networks, data.typeFor === 'tv' && __jsx("p", {
    className: "stat--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Certification"), data.typeFor === 'tv' ? __jsx("div", {
    className: "release--date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(react_icons_ti__WEBPACK_IMPORTED_MODULE_3__["TiWorld"], {
    className: "world",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("span", {
    className: "rate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, data.typeFor === 'tv' && setData)) : setData.map(function (item) {
    return __jsx("li", {
      key: item.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("div", {
      className: "release--date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx(react_icons_ti__WEBPACK_IMPORTED_MODULE_3__["TiWorld"], {
      className: "world",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }), __jsx("span", {
      className: "stat--subtext",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, Object(_utility_setDateFormat__WEBPACK_IMPORTED_MODULE_5__["default"])(item.release_date.slice(0, 10)))), __jsx("div", {
      className: "certification",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx("span", {
      className: "rate",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, item.certification), __jsx("span", {
      className: "stat--subtext",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, getReleaseType[item.type])));
  }));
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
//# sourceMappingURL=[id].js.e4817be157e7b6d886a0.hot-update.js.map