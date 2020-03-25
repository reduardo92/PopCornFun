webpackHotUpdate("static\\development\\pages\\movie.js",{

/***/ "./components/ui/Pagination.jsx":
/*!**************************************!*\
  !*** ./components/ui/Pagination.jsx ***!
  \**************************************/
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
var Pagination = function Pagination(params) {
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

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
false

})
//# sourceMappingURL=movie.js.164d34f10e49017d41a3.hot-update.js.map