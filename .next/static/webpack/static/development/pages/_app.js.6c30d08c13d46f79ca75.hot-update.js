webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/context/auth/AuthState.js":
/*!**********************************************!*\
  !*** ./components/context/auth/AuthState.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useAuthReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useAuthReducer */ "./components/context/auth/useAuthReducer.js");
/* harmony import */ var _AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AuthContext */ "./components/context/auth/AuthContext.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../types */ "./components/context/types.js");
/* harmony import */ var _utility_configHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utility/configHeader */ "./components/utility/configHeader.js");


var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\context\\auth\\AuthState.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var authInitialState = {
  isAuthentucated: null,
  loading: true,
  user: null,
  error: null,
  msg: null
};

var AuthState = function AuthState(_ref) {
  var children = _ref.children;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(_useAuthReducer__WEBPACK_IMPORTED_MODULE_3__["default"], authInitialState),
      state = _useReducer[0],
      dispatch = _useReducer[1]; // Load User


  var loadUser = function loadUser() {
    var res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function loadUser$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_5___default.a.get('/api/auth'));

          case 3:
            res = _context.sent;
            dispatch({
              type: _types__WEBPACK_IMPORTED_MODULE_6__["USER_LOADED"],
              payload: res.data
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            dispatch({
              type: _types__WEBPACK_IMPORTED_MODULE_6__["AUTH_ERROR"],
              payload: _context.t0.response.data.msg
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 7]], Promise);
  };

  var registerUser = function registerUser(formData) {
    var _ref2, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function registerUser$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("/api/user", formData, _utility_configHeader__WEBPACK_IMPORTED_MODULE_7__["default"]));

          case 3:
            _ref2 = _context2.sent;
            data = _ref2.data;
            dispatch({
              type: _types__WEBPACK_IMPORTED_MODULE_6__["REGISTER_SUCCESS"],
              payload: data.msg
            }); // Load User
            // loadUser();

            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            dispatch({
              type: _types__WEBPACK_IMPORTED_MODULE_6__["REGISTER_FAIL"],
              payload: _context2.t0.response.data.msg
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 8]], Promise);
  }; // Login User


  var loginUser = function loginUser(formData) {
    var _ref3, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function loginUser$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("/api/auth", formData, _utility_configHeader__WEBPACK_IMPORTED_MODULE_7__["default"]));

          case 3:
            _ref3 = _context3.sent;
            data = _ref3.data;
            dispatch({
              type: _types__WEBPACK_IMPORTED_MODULE_6__["LOGIN_SUCCESS"],
              payload: data.msg
            }); // Load User

            loadUser();
            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            dispatch({
              type: _types__WEBPACK_IMPORTED_MODULE_6__["LOGIN_FAIL"],
              payload: _context3.t0.response.data.msg
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 9]], Promise);
  }; // Logout


  var logout = function logout() {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_6__["LOGOUT"]
    });
  }; // Clear Erros


  var clearErros = function clearErros() {
    return dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_6__["CLEAR_ERRORS"]
    });
  };

  return __jsx(_AuthContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: _objectSpread({}, state, {
      loadUser: loadUser,
      registerUser: registerUser,
      loginUser: loginUser,
      logout: logout,
      clearErros: clearErros
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (AuthState);

/***/ })

})
//# sourceMappingURL=_app.js.6c30d08c13d46f79ca75.hot-update.js.map