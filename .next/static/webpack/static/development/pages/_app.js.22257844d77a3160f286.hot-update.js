webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/ui/SearchFrom.jsx":
/*!**************************************!*\
  !*** ./components/ui/SearchFrom.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_MovieContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/MovieContext */ "./components/context/MovieContext.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _context_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/types */ "./components/context/types.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\SearchFrom.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var Styled = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "SearchFrom__Styled",
  componentId: "fc5opr-0"
})(["background-color:var(--white-clr);padding:0;.form{max-width:920px;margin:0 auto;padding:0 1em;position:relative;}.form-group{display:flex;margin:0;}.form-label{margin-right:0.5em;display:flex;align-items:center;justify-content:center;svg{color:var(--grey-clr);}}.form--clear{position:absolute;top:50%;right:2%;transform:translate(-2%,-50%);color:var(--primary-clr);font-weight:bold;font-size:1.5rem;cursor:pointer;transition:var(--ease--in--out--02s);&:hover{opacity:0.7;}}.form-control{border:0;color:var(--grey-clr);&::placeholder{font-size:0.9rem;}}.search--content{height:auto;display:block;}.search--content--item{border-top:1px solid rgba(0,0,0,0.1);padding:0.1em 1em;transition:var(--ease--in--out--02s);cursor:pointer;&:hover{background-color:rgba(196,196,196,0.4);}&__name{color:var(--second-clr);margin-bottom:0;margin-left:1em;.media--in{color:rgb(151,151,151);margin-left:0.3em;}}&:hover .search--content--item__name,&:hover .search--content--item__icon{color:var(--primary-clr);}}.wrapper{margin:0 auto;max-width:920px;display:flex;align-items:center;font-size:0.9em;color:var(--second-clr);text-transform:capitalize;}.closee{display:none;}"]);

var SearchFrom = function SearchFrom() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_MovieContext__WEBPACK_IMPORTED_MODULE_3__["default"]),
      getSearchData = _useContext.getSearchData,
      clearData = _useContext.clearData,
      searchData = _useContext.searchData;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      search = _useState[0],
      setSearch = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isFocus = _useState2[0],
      setIsFocus = _useState2[1];

  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var handleChange = function handleChange(e) {
    return setSearch(e.target.value);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (search === '') {
      console.log('emty', search);
      clearData(_context_types__WEBPACK_IMPORTED_MODULE_8__["CLEAR_SEARCH_DATA"]);
      return;
    } else {
      getSearchData(search);
      console.log('sea', search);
      setSearch('');
    }
  }, [search]);

  var handleSubmit = function handleSubmit(e) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSubmit$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();

            if (search === '') {
              console.log('enter something');
            } else {
              console.log('loged', search);
              router.push('/search/[query]', "/search/".concat(search));
            }

            setSearch('');

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  return __jsx(Styled, {
    classname: "search form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "form",
    onClick: function onClick() {
      return setIsFocus(true);
    },
    onBlur: function onBlur() {
      return setTimeout(function () {
        return setIsFocus(false);
      }, 100);
    },
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__["default"].Group, {
    controlId: "search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__["default"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaSearch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__["default"].Control, {
    ref: inputRef,
    type: "text",
    name: "search",
    value: search,
    onChange: handleChange,
    placeholder: "Search for a movie, tv show, person...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }), isFocus && __jsx("span", {
    onClick: function onClick() {
      return setSearch('');
    },
    className: "form--clear",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, "x"))), __jsx("div", {
    className: "search--content ".concat(isFocus ? 'showw' : 'closee'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, searchData && searchData.map(function (item) {
    return __jsx("div", {
      key: item.id,
      className: "search--content--item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
      href: "/".concat(item.media_type, "/[id]"),
      as: "/".concat(item.media_type, "/").concat(item.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, __jsx("div", {
      className: "wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, item.media_type === 'movie' ? __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_7__["MdLocalMovies"], {
      className: "search--content--item__icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }) : item.media_type === 'tv' ? __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_7__["MdTv"], {
      className: "search--content--item__icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }) : __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_7__["MdPerson"], {
      className: "search--content--item__icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }), __jsx("p", {
      className: "search--content--item__name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, item.name || item.title, __jsx("span", {
      className: "media--in",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, "in", ' ', item.media_type === 'person' ? 'People' : item.media_type)))));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchFrom);

/***/ })

})
//# sourceMappingURL=_app.js.22257844d77a3160f286.hot-update.js.map