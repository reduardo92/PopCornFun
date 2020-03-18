webpackHotUpdate("static\\development\\pages\\person\\[id].js",{

/***/ "./pages/person/[id].jsx":
/*!*******************************!*\
  !*** ./pages/person/[id].jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_context_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/context/types */ "./components/context/types.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_utility_movieDB__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/utility/movieDB */ "./components/utility/movieDB.js");
/* harmony import */ var _components_ui_PersonProfile_KnownFor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ui/PersonProfile/KnownFor */ "./components/ui/PersonProfile/KnownFor.jsx");
/* harmony import */ var _components_ui_PersonProfile_MediaCredits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/ui/PersonProfile/MediaCredits */ "./components/ui/PersonProfile/MediaCredits.jsx");
/* harmony import */ var _components_ui_PersonProfile_PersonFacts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/ui/PersonProfile/PersonFacts */ "./components/ui/PersonProfile/PersonFacts.jsx");
/* harmony import */ var _components_ui_PersonProfile_Biography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/ui/PersonProfile/Biography */ "./components/ui/PersonProfile/Biography.jsx");


var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\pages\\person\\[id].jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var Styled = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].section.withConfig({
  displayName: "id__Styled",
  componentId: "sc-1s2kqjg-0"
})(["background:var(--bg-dark-gradient);margin-top:110px;.profile--person{max-width:300px;margin:0 auto;}@media screen and (min-width:1000px){margin-top:70px;display:grid;grid-template-areas:'pp bio .' 'pf pm .';grid-template-columns:600px 1fr 7em;.profile--person{grid-area:pp;justify-self:end;max-width:355px;margin:0;margin-bottom:-5em;z-index:10;}.profile--biography{grid-area:bio;align-self:center;justify-self:center;}.profile--media{grid-area:pm;max-width:1000px;justify-self:center;}.profile--facts{grid-area:pf;}}"]);

var PersonProfile = function PersonProfile(_ref) {
  var person = _ref.person;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('movies'),
      tab = _useState[0],
      setTab = _useState[1]; // const { setModal } = useContext(MovieContext);


  var knonwFor = person && person.combined_credits.cast.sort(function (a, b) {
    return b.vote_count - a.vote_count;
  }).slice(0, 8);
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(Styled, {
    className: "profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("div", {
    className: "profile--person pt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("img", {
    src: person.profile_path ? "".concat(_components_context_types__WEBPACK_IMPORTED_MODULE_3__["IMG_URL"]).concat(person.profile_path) : 'no_img.jpg',
    alt: person.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  })), __jsx(_components_ui_PersonProfile_Biography__WEBPACK_IMPORTED_MODULE_10__["default"], {
    name: person.name,
    bio: person.biography,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx("div", {
    className: "profile--media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(_components_ui_PersonProfile_KnownFor__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: knonwFor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), __jsx(_components_ui_PersonProfile_MediaCredits__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: person,
    tab: tab,
    setTab: setTab,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  })), __jsx(_components_ui_PersonProfile_PersonFacts__WEBPACK_IMPORTED_MODULE_9__["default"], {
    data: person,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  })));
};

PersonProfile.getInitialProps = function _callee(ctx) {
  var person;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_components_utility_movieDB__WEBPACK_IMPORTED_MODULE_6__["default"])("person/".concat(ctx.query.id || '85'), 'append_to_response=movie_credits,tv_credits,combined_credits,external_ids,images&include_image_language=en,null'));

        case 3:
          person = _context.sent;
          return _context.abrupt("return", {
            person: _objectSpread({
              typeFor: 'person'
            }, person)
          });

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]], Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (PersonProfile);

/***/ })

})
//# sourceMappingURL=[id].js.f5749033f6ef827d680b.hot-update.js.map