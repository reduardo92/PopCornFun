webpackHotUpdate("static\\development\\pages\\movie.js",{

/***/ "./components/ui/Pagination/Pagination.jsx":
/*!*************************************************!*\
  !*** ./components/ui/Pagination/Pagination.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _context_MovieContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/MovieContext */ "./components/context/MovieContext.js");
/* harmony import */ var _createPagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createPagination */ "./components/ui/Pagination/createPagination.js");

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\popcornFun\\components\\ui\\Pagination\\Pagination.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  justify-content: center;\n  padding-top: 100px;\n  ul {\n    list-style: none;\n    padding: 0px;\n    display: flex;\n\n    li {\n      background: #845ec2;\n      padding: 10px 15px;\n      margin-right: 4px;\n      border-radius: 4px;\n      font-family: sans-serif;\n      color: #fff;\n      font-size: 1.1rem;\n      min-width: 20px;\n      text-align: center;\n      user-select: none;\n\n      &:last-child {\n        margin-right: 0px;\n      }\n\n      &:not(.active):not(.disabled) {\n        cursor: pointer;\n      }\n      &:not(.active):not(.disabled):hover {\n        background: #d65db1;\n      }\n      &:not(.active):not(.disabled):active {\n        background: #3e207c;\n      }\n\n      &.active {\n        background: #ff6f91;\n      }\n      &.disabled {\n        background: #fbeaff;\n        pointer-events: none;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());

var Pagination = function Pagination(_ref) {
  var numberOfArticles = _ref.numberOfArticles,
      _ref$articlesPerPage = _ref.articlesPerPage,
      articlesPerPage = _ref$articlesPerPage === void 0 ? 20 : _ref$articlesPerPage,
      _ref$numberOfButtons = _ref.numberOfButtons,
      numberOfButtons = _ref$numberOfButtons === void 0 ? 10 : _ref$numberOfButtons;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_MovieContext__WEBPACK_IMPORTED_MODULE_3__["default"]),
      paginate = _useContext.paginate,
      currentPage = _useContext.currentPage;

  var _createPagination = Object(_createPagination__WEBPACK_IMPORTED_MODULE_4__["default"])({
    numberOfArticles: numberOfArticles,
    articlesPerPage: articlesPerPage,
    numberOfButtons: numberOfButtons,
    currentPage: currentPage
  }),
      pagination = _createPagination.pagination;

  return __jsx(Styled, {
    className: "pagination--section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("li", {
    className: "".concat(pagination[0] === currentPage && 'disabled'),
    onClick: function onClick() {
      return paginate(currentPage - 1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Prev"), pagination.map(function (page) {
    return __jsx("li", {
      className: "".concat(currentPage === page && 'active'),
      onClick: function onClick() {
        return paginate(page);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, page);
  }), __jsx("li", {
    className: "".concat(pagination.reverse()[0] === currentPage && 'disabled'),
    onClick: function onClick() {
      return paginate(currentPage + 1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Next")));
};

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./components/ui/Pagination/createPagination.js":
/*!******************************************************!*\
  !*** ./components/ui/Pagination/createPagination.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");


// import React, { useContext } from 'react';
// import styled from 'styled-components';
// import MovieContext from '../context/MovieContext';
// import Link from 'next/link';
// const Styled = styled.nav`
//   .pagination {
//     justify-content: center;
//     flex-wrap: wrap;
//   }
//   .page-link {
//     color: var(--primary-clr);
//     font-weight: bold;
//     /* font-family: var(--primary--fn); */
//     border: 1px solid var(--primary--clr);
//     cursor: pointer;
//     &:hover,
//     &:focus,
//     &.active {
//       background-color: var(--primary--clr);
//     }
//   }
//   /* .pagination  */
//   .page-item + .page-item {
//     margin-left: 0.8em;
//   }
//   .page-item {
//     padding: 0.5em 0;
//   }
// `;
// const Pagination = ({ total_pages, typeFor }) => {
//   const { itemPerPage, paginate, currentPage } = useContext(MovieContext);
//   const pageNumbers = [];
//     let prev = '';
//     let next = '';
//   for (let i = 1; i <= total_pages; i++) {
//     pageNumbers.push(i);
//     }
//   return (
//     <Styled className='pagination-nav'>
//       <ul className='pagination'>
//         {pageNumbers.length === 1
//           ? ''
//           : pageNumbers.map(number => (
//               <li key={number} className='page-item'>
//                 <Link href={typeFor + number}>
//                   <div
//                     onClick={() => paginate(number)}
//                     className={`page-link ${
//                       number === currentPage ? 'active' : ''
//                     }`}
//                   >
//                     {number}
//                   </div>
//                 </Link>
//               </li>
//             ))}
//       </ul>
//     </Styled>
//   );
// };
// export default Pagination;

/* Pagination Component 
-------------------------------------------------*/
// Pagination.propTypes = propTypes;
var createPagination = function createPagination(params) {
  var numberOfArticles = params.numberOfArticles,
      articlesPerPage = params.articlesPerPage,
      currentPage = params.currentPage,
      numberOfButtons = params.numberOfButtons;
  var numberOfPages = Math.ceil(numberOfArticles / articlesPerPage);
  if (currentPage > numberOfPages || currentPage < 1) return {
    pagination: [],
    currentPage: currentPage
  };
  var buttons = Array(numberOfPages).fill(1).map(function (e, i) {
    return e + i;
  });
  var sideButtons = numberOfButtons % 2 === 0 ? numberOfButtons / 2 : (numberOfButtons - 1) / 2;

  var calculLeft = function calculLeft() {
    var rest = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return {
      array: buttons.slice(0, currentPage - 1).reverse().slice(0, sideButtons + rest).reverse(),
      rest: function rest() {
        return sideButtons - this.array.length;
      }
    };
  };

  var calculRight = function calculRight() {
    var rest = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return {
      array: buttons.slice(currentPage).slice(0, sideButtons + rest),
      rest: function rest() {
        return sideButtons - this.array.length;
      }
    };
  };

  var leftButtons = calculLeft(calculRight().rest()).array;
  var rightButtons = calculRight(calculLeft().rest()).array;
  return {
    pagination: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(leftButtons), [currentPage], Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(rightButtons)),
    currentPage: currentPage
  };
};

/* harmony default export */ __webpack_exports__["default"] = (createPagination);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ })

})
//# sourceMappingURL=movie.js.2cb7198e6ec1f2f28951.hot-update.js.map