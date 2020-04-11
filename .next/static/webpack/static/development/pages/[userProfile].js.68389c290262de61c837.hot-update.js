webpackHotUpdate("static\\development\\pages\\[userProfile].js",{

/***/ "./pages/[userProfile]/index.jsx":
/*!***************************************!*\
  !*** ./pages/[userProfile]/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_ui_userProfile_userProfileTabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ui/userProfile/userProfileTabs */ "./components/ui/userProfile/userProfileTabs.jsx");
/* harmony import */ var _components_ui_userProfile_UserProfileHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ui/userProfile/UserProfileHead */ "./components/ui/userProfile/UserProfileHead.jsx");
/* harmony import */ var _components_context_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/context/types */ "./components/context/types.js");
/* harmony import */ var _components_utility_setAuthToken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/utility/setAuthToken */ "./components/utility/setAuthToken.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\pages\\[userProfile]\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  displayName: "userProfile__Styled",
  componentId: "loe5t3-0"
})(["margin-top:6em;"]);

var userProfile = function userProfile(_ref) {
  var watchlist = _ref.watchlist,
      favorites = _ref.favorites,
      ratings = _ref.ratings;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(AuthContext),
      isAuthentucated = _useContext.isAuthentucated;

  console.log(watchlist, favorites, ratings);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (isAuthentucated) return;
    next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/');
  }, []);
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(Styled, {
    className: "userProfile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(_components_ui_userProfile_UserProfileHead__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx(_components_ui_userProfile_userProfileTabs__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("div", {
    className: "userProfile--mainContet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Hello")));
};

/* harmony default export */ __webpack_exports__["default"] = (userProfile);

userProfile.getInitialProps = function _callee(ctx) {
  var _ctx$req;

  var cookie, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          cookie = (_ctx$req = ctx.req) === null || _ctx$req === void 0 ? void 0 : _ctx$req.headers.cookie;
          _context.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a;
          _context.t1 = axios__WEBPACK_IMPORTED_MODULE_8___default.a;
          _context.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("".concat(_components_context_types__WEBPACK_IMPORTED_MODULE_6__["SITE_URL"], "/api/watchlist")));

        case 5:
          _context.t2 = _context.sent;
          _context.next = 8;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("".concat(_components_context_types__WEBPACK_IMPORTED_MODULE_6__["SITE_URL"], "/api/favorites")));

        case 8:
          _context.t3 = _context.sent;
          _context.next = 11;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("".concat(_components_context_types__WEBPACK_IMPORTED_MODULE_6__["SITE_URL"], "/api/ratings")));

        case 11:
          _context.t4 = _context.sent;
          _context.t5 = [_context.t2, _context.t3, _context.t4];
          _context.t6 = {
            headers: {
              cookie: cookie
            }
          };
          _context.t7 = _context.t1.all.call(_context.t1, _context.t5, _context.t6);
          _context.next = 17;
          return _context.t0.awrap.call(_context.t0, _context.t7);

        case 17:
          data = _context.sent;

          if (!(data.status === 401 && !ctx.req)) {
            _context.next = 21;
            break;
          }

          next_router__WEBPACK_IMPORTED_MODULE_9___default.a.replace('/login');
          return _context.abrupt("return", {});

        case 21:
          if (!(data.status === 401 && ctx.req)) {
            _context.next = 25;
            break;
          }

          ctx.res.writeHead(302, {
            Location: "".concat(_components_context_types__WEBPACK_IMPORTED_MODULE_6__["SITE_URL"], "/login")
          });
          ctx.res.end();
          return _context.abrupt("return");

        case 25:
          return _context.abrupt("return", {
            watchlist: data[0].data,
            favorites: data[1].data,
            ratings: data[2].data
          });

        case 26:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/***/ })

})
//# sourceMappingURL=[userProfile].js.68389c290262de61c837.hot-update.js.map