webpackHotUpdate("static\\development\\pages\\movie\\[id].js",{

/***/ "./components/ui/CirclePercentage.jsx":
false,

/***/ "./components/ui/PlayButton.jsx":
false,

/***/ "./components/ui/TagGroup.jsx":
false,

/***/ "./components/ui/mediaProfile/ProfileHeader.jsx":
/*!******************************************************!*\
  !*** ./components/ui/mediaProfile/ProfileHeader.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _context_MovieContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/MovieContext */ "./components/context/MovieContext.js");
/* harmony import */ var _utility_groupCredits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utility/groupCredits */ "./components/utility/groupCredits.js");
/* harmony import */ var _context_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/types */ "./components/context/types.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\mediaProfile\\ProfileHeader.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ProfileHeader__Styled",
  componentId: "sc-1pa4id6-0"
})(["display:grid;grid-gap:1.7em;grid-auto-columns:auto;.rating{svg{margin-right:calc(3vw + 0.5em);}}.head{display:grid;grid-template-columns:auto 1fr;grid-gap:1em;padding:0 1em 0.5em;.title{align-self:center;font-size:calc(0.5em + 3vw);}}.profile--header__img{width:120px;margin-top:-8em;align-self:flex-end;}.year{opacity:0.6;font-weight:400;}.rating,.meta{display:flex;align-items:center;padding:0 0.5em;}.tag--group{border-left:1px solid #7b7b7b;padding-left:1.5em;}.meta{justify-content:space-between;font-size:0.85rem;&--tab{border-right:1px solid #7b7b7b;padding-right:1em;text-align:center;}&--tab:last-child{border:none;}}.crew{display:grid;grid-template-columns:repeat(2,1fr);grid-gap:1em;font-weight:bold;}.play--button{width:fit-content;}@media screen and (min-width:768px){.profile--header{max-width:1100px;padding:2em 1em;}.head .profile--header__img{width:160px;}.rating{grid-column:1 /2;}.meta{grid-column:2 /3;}.head,.overview,.crew{grid-column:1/ 3;}.play--button{flex-direction:row;font-size:1.1rem;&::before{width:auto;margin:auto;transform-origin:left;}svg{font-size:2rem;order:1;margin-left:5px;}&:hover svg,&:focus svg{margin-left:15px;margin-bottom:0;transform:scale(0.98);}}.CircularProgressbar{width:66px;}}"]);

var ProfileHeader = function ProfileHeader(_ref) {
  var data = _ref.data;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_MovieContext__WEBPACK_IMPORTED_MODULE_2__["default"]),
      setModal = _useContext.setModal;

  return __jsx(Styled, {
    className: "profile--content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx("div", {
    className: "head",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx("div", {
    className: "profile--content__img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx("img", {
    className: "poster",
    src: "".concat(_context_types__WEBPACK_IMPORTED_MODULE_4__["IMG_URL"]).concat(data.poster_path || data.profile_path),
    alt: data.title || data.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  })), __jsx("h2", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, data.title || data.name, ' ', __jsx("span", {
    className: "year",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "(", data.release_date.slice(0, 4), ")"))), __jsx("div", {
    className: "rating",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx(CirclePercentage, {
    value: data.vote_average * 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }), __jsx(TagGroup, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  })), __jsx("div", {
    className: "meta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx("span", {
    className: "release meta--tab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, data.release_date.slice(0, 4)), __jsx("span", {
    className: "runtime meta--tab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "1h 02 mins"), __jsx("span", {
    className: "rating meta--tab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "R"), __jsx("span", {
    className: "genre meta--tab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, "Action,Drama,Sci-fi")), __jsx("div", {
    className: "overview",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, __jsx("h3", {
    className: "subTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, "OVERVIEW"), __jsx("p", {
    className: "overview--para",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, data.overview)), __jsx("div", {
    className: "crew",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, Object(_utility_groupCredits__WEBPACK_IMPORTED_MODULE_3__["default"])(data.credits.crew).map(function (c, i) {
    return i < 6 && __jsx("div", {
      key: c[0].id,
      className: "crew--person",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, __jsx(Link, {
      href: "/person/[id]",
      as: "/person/".concat(c[0].id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, c[0].name), __jsx("small", {
      className: "d-block mt-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, c[0].department.join(', ')));
  })), __jsx(PlayButton, {
    onclick: function onclick() {
      return setModal(data.videos.results[1].key);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ProfileHeader);

/***/ }),

/***/ "./components/utility/groupCredits.js":
/*!********************************************!*\
  !*** ./components/utility/groupCredits.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_8__);










function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

/* harmony default export */ __webpack_exports__["default"] = (function (arry) {
  var arrData = arry.reduce(function (acc, obj) {
    var key = obj.name;

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(obj);
    return acc;
  }, []);

  var joinData = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_8___default()(arrData).map(function (_ref) {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    var department = value.map(function (item) {
      return item.department;
    });
    var item = arrData[key].map(function (item) {
      return _objectSpread({}, item, {
        department: department
      });
    });
    return item;
  }).sort(function (a, b) {
    return b.length - a.length;
  });

  return joinData;
});

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/entries.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/entries */ "./node_modules/core-js/library/fn/object/entries.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArrayLimit(arr, i) {
  if (!(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(arr)) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/entries.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/entries.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.object.entries */ "./node_modules/core-js/library/modules/es7.object.entries.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.entries;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-to-array.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-to-array.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var isEnum = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.object.entries.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.object.entries.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var $entries = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/library/modules/_object-to-array.js")(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),

/***/ "./node_modules/react-circular-progressbar/dist/index.esm.js":
false,

/***/ "./node_modules/react-icons/io/index.esm.js":
false,

/***/ "./node_modules/react-icons/md/index.esm.js":
false,

/***/ "./pages/movie/[id].jsx":
/*!******************************!*\
  !*** ./pages/movie/[id].jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_utility_movieDB__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/utility/movieDB */ "./components/utility/movieDB.js");
/* harmony import */ var _components_context_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/context/types */ "./components/context/types.js");
/* harmony import */ var _components_ui_TopBilledCast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ui/TopBilledCast */ "./components/ui/TopBilledCast.jsx");
/* harmony import */ var _components_ui_ReviewSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ui/ReviewSection */ "./components/ui/ReviewSection.jsx");
/* harmony import */ var _components_ui_MediaSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ui/MediaSection */ "./components/ui/MediaSection.jsx");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_ui_mediaProfile_ProfileHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/ui/mediaProfile/ProfileHeader */ "./components/ui/mediaProfile/ProfileHeader.jsx");

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\pages\\movie\\[id].jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  displayName: "id__Styled",
  componentId: "zlmctg-0"
})(["background:var(--bg-gradient);margin-top:110px;.profile--backdrop{background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url(", ") no-repeat center;background-color:black;min-height:400px;background-size:cover;background-position:top;object-fit:cover;position:relative;&__img{position:absolute;bottom:-20vw;left:20px;width:120px;}}.profile--header{position:relative;padding:2em 0.5em;max-width:750px;margin:0 auto;}@media screen and (min-width:768px){.profile--header{max-width:1100px;padding:2em 1em;}}"], function (_ref) {
  var bgImg = _ref.bgImg;
  return "".concat(_components_context_types__WEBPACK_IMPORTED_MODULE_4__["IMG_URL_OR"]).concat(bgImg);
});

var MovieProfile = function MovieProfile(_ref2) {
  var movie = _ref2.movie,
      typeFor = _ref2.typeFor;
  console.log(movie);
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(Styled, {
    className: "profile",
    bgImg: movie.backdrop_path,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("div", {
    className: "profile--backdrop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx("div", {
    className: "profile--header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(_components_ui_mediaProfile_ProfileHeader__WEBPACK_IMPORTED_MODULE_9__["default"], {
    data: movie,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  })), __jsx(_components_ui_TopBilledCast__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: movie.credits.cast,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx(_components_ui_ReviewSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: movie.reviews.results,
    movieId: movie.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx(_components_ui_MediaSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    videos: movie.videos.results,
    posters: movie.images.posters,
    backdrops: movie.images.backdrops,
    typeId: movie.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })));
};

MovieProfile.getInitialProps = function _callee(ctx) {
  var movie;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(ctx.query, 'ID');
          console.log(ctx);
          _context.prev = 2;
          _context.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_components_utility_movieDB__WEBPACK_IMPORTED_MODULE_3__["default"])("movie/".concat(ctx.query.id || '454626'), 'append_to_response=account_states,external_ids,keywords,release_dates,videos,recommendations,reviews,credits,images&include_image_language=en,null'));

        case 5:
          movie = _context.sent;
          return _context.abrupt("return", {
            movie: movie
          });

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](2);
          console.log(_context.t0);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 9]]);
};

/* harmony default export */ __webpack_exports__["default"] = (MovieProfile);

/***/ })

})
//# sourceMappingURL=[id].js.20ece7cdc251dfbca6d9.hot-update.js.map