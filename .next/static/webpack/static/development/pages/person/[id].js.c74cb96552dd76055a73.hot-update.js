webpackHotUpdate("static\\development\\pages\\person\\[id].js",{

/***/ "./components/ui/Cards/CardOne.jsx":
/*!*****************************************!*\
  !*** ./components/ui/Cards/CardOne.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/types */ "./components/context/types.js");
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/go */ "./node_modules/react-icons/go/index.esm.js");
/* harmony import */ var _utility_setDateFormat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utility/setDateFormat */ "./components/utility/setDateFormat.js");
/* harmony import */ var _CirclePercentage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../CirclePercentage */ "./components/ui/CirclePercentage.jsx");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\Cards\\CardOne.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






 // const Styled = styled.figure`
//   width: 160px;
//   .card--poster {
//     position: relative;
//     transition: var(--ease--in--out--02s);
//     cursor: pointer;
//     background-color: var(--second-clr);
//     height: 240px;
//     border-radius: 10px;
//     img {
//       height: 100%;
//       object-fit: contain;
//       border-radius: 10px;
//     }
//     &::after {
//       content: 'View More';
//       transition: var(--ease--in--out--02s);
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       position: absolute;
//       font-size: 0.8rem;
//       font-weight: bold;
//       /* background-color: rgba(188, 49, 49, 0.85); */
//       background-color: var(--primary-clr-rgba);
//       height: 0;
//       width: 100%;
//       opacity: 0;
//       top: 0;
//       left: 0;
//       right: 0;
//     }
//     &:hover::after,
//     &:focus::after {
//       opacity: 1;
//       height: 100%;
//     }
//   }
//   .card--body {
//     &__info {
//       color: ${({ invert }) =>
//         invert ? 'var(--second-clr)' : 'var(--grey-clr)'};
//       display: flex;
//       align-items: baseline;
//       margin-top: 0.5em;
//       .info--top {
//         font-size: 0.9rem;
//       }
//     }
//     &__title a {
//       font-weight: bold;
//       color: ${({ invert }) => invert && 'var(--second-clr)'};
//       transition: var(--ease--in--out--02s);
//       &:hover,
//       &:focus {
//         color: var(--primary-clr);
//       }
//     }
//   }
//   @media screen and (min-width: 1280px) {
//     width: 180px;
//     .card--poster {
//       height: 270px;
//     }
//   }
// `;

var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].figure.withConfig({
  displayName: "CardOne__Styled",
  componentId: "e0m3r6-0"
})(["width:160px;.card--poster{position:relative;transition:var(--ease--in--out--02s);cursor:pointer;background-color:var(--second-clr);height:240px;border-radius:10px;img{height:100%;object-fit:cover;border-radius:10px;}&::after{content:'View More';transition:var(--ease--in--out--02s);display:flex;justify-content:center;align-items:center;position:absolute;font-size:0.8rem;font-weight:bold;background-color:var(--primary-clr-rgba);height:0;width:100%;opacity:0;top:0;left:0;right:0;border-radius:10px;}&:hover::after,&:focus::after{opacity:1;height:100%;}}.card--body{position:relative;display:grid;.CircularProgressbar{width:40px;margin-top:-1.65em;margin-left:0.45em;justify-self:auto;}&__info{color:", ";display:flex;align-items:baseline;.info--top{font-size:0.9rem;}}&__title a{font-weight:bold;color:", ";transition:var(--ease--in--out--02s);margin-top:0.5em;&:hover,&:focus{color:var(--primary-clr);}}}@media screen and (min-width:1280px){width:180px;.card--poster{height:270px;}}"], function (_ref) {
  var invert = _ref.invert;
  return invert ? 'var(--second-clr)' : 'var(--grey-clr)';
}, function (_ref2) {
  var invert = _ref2.invert;
  return invert && 'var(--second-clr)';
});

var CardOne = function CardOne(_ref3) {
  var data = _ref3.data,
      typeFor = _ref3.typeFor,
      invert = _ref3.invert;
  return __jsx(Styled, {
    className: "card--one",
    invert: invert,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/".concat(typeFor, "/[id]"),
    as: "/".concat(typeFor, "/").concat(data.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, __jsx("div", {
    className: "card--poster",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, __jsx("img", {
    className: "poster__img",
    src: data.poster_path || data.profile_path ? "".concat(_context_types__WEBPACK_IMPORTED_MODULE_3__["IMG_URL"]).concat(data.poster_path || data.profile_path) : 'no_img.jpg',
    alt: data.title || data.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }))), __jsx("div", {
    className: "card--body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, (data.release_date || data.first_air_date) && __jsx(_CirclePercentage__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "percentege",
    value: data.vote_average * 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }), __jsx("div", {
    className: "card--body__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/".concat(typeFor, "/[id]"),
    as: "/".concat(typeFor, "/").concat(data.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, data.title || data.name))), __jsx("div", {
    className: "card--body__info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, __jsx("span", {
    className: "info--top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, data.release_date ? Object(_utility_setDateFormat__WEBPACK_IMPORTED_MODULE_5__["default"])(data.release_date) : data.first_air_date ? Object(_utility_setDateFormat__WEBPACK_IMPORTED_MODULE_5__["default"])(data.first_air_date) : data.known_for_department))));
};

/* harmony default export */ __webpack_exports__["default"] = (CardOne);
{
  /* <Styled className='card--one' invert={invert}>
  <Link href={`/${typeFor}/[id]`} as={`/${typeFor}/${data.id}`}>
  <div className='card--poster'>
    <img
      className='poster__img'
      src={
        data.poster_path || data.profile_path
          ? `${IMG_URL}${data.poster_path || data.profile_path}`
          : 'no_img.jpg'
      }
      alt={data.title || data.name}
    />
  </div>
  </Link>
  <div className='card--body'>
  <div className='card--body__info'>
    <span className='info--top'>
      {data.release_date
        ? setDateFormat(data.release_date)
        : data.first_air_date
        ? setDateFormat(data.first_air_date)
        : data.known_for_department}
    </span>
    {(data.release_date || data.first_air_date) && (
      <span className='rating--star'>
        {data.vote_average}
        <GoStar className='star' />
      </span>
    )}
  </div>
  <div className='card--body__title'>
    <Link href={`/${typeFor}/[id]`} as={`/${typeFor}/${data.id}`}>
      <a>{data.title || data.name}</a>
    </Link>
  </div>
  </div>
  </Styled> */
}

/***/ }),

/***/ "./components/ui/PersonProfile/KnownFor.jsx":
/*!**************************************************!*\
  !*** ./components/ui/PersonProfile/KnownFor.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _SimpleFlex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SimpleFlex */ "./components/ui/SimpleFlex.js");
/* harmony import */ var _Cards_RecommenCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Cards/RecommenCard */ "./components/ui/Cards/RecommenCard.jsx");
/* harmony import */ var _Cards_CardOne__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Cards/CardOne */ "./components/ui/Cards/CardOne.jsx");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\PersonProfile\\KnownFor.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "KnownFor__Styled",
  componentId: "sc-1fqp2dp-0"
})(["@media screen and (min-width:1000px){.knonwFor--content{all:unset;display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));grid-gap:2.7em 1em;padding-top:1.2em;div{margin:0;}}}@media screen and (min-width:1000px){.subTitle,.rating--star{color:var(--second-clr);}.recommend--card__content--name{color:var(--second-clr);}}"]);

var KnownFor = function KnownFor(_ref) {
  var data = _ref.data;
  return __jsx(Styled, {
    className: "profile--media__knownFor px-2 pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("h3", {
    className: "subTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Known For"), data.length === 0 ? __jsx("p", {
    className: "my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Sorry Nothing Available") : __jsx(_SimpleFlex__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "knonwFor--content",
    setWidth: "160px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, data.map(function (item) {
    return (// <RecommenCard
      //   key={Math.random() * 10}
      //   data={item}
      //   typeFor={item.media_type}
      // />
      __jsx(_Cards_CardOne__WEBPACK_IMPORTED_MODULE_4__["default"], {
        key: Math.random() * 10,
        data: item,
        typeFor: item.media_type,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      })
    );
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (KnownFor);

/***/ })

})
//# sourceMappingURL=[id].js.c74cb96552dd76055a73.hot-update.js.map