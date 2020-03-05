webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./global.css":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??__nextjs_postcss!./global.css ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ":root {\r\n  /* Colors */\r\n  --primary-clr: #bc3131;\r\n  --second-clr: #212122;\r\n  --accent-clr: #e7e6e5;\r\n  --white-clr: #fff;\r\n  --grey-clr: #efefef;\r\n  --hover--clr: #5d5e5e;\r\n\r\n  /* Gradient  */\r\n  --bg-gradient: linear-gradient(\r\n    to top,\r\n    #240808,\r\n    #210707,\r\n    #1d0707,\r\n    #190606,\r\n    #140505\r\n  );\r\n\r\n  /* Box Shadow */\r\n  --shadow: 3px 2px 7px rgba(0, 0, 0, 1);\r\n\r\n  /* Fonts */\r\n  --fn-monterrat: 'Montserrat', sans-serif;\r\n  --fn-roboto: 'Roboto', sans-serif;\r\n  /* font weight */\r\n  --fw-bold: 900;\r\n  --fw-medium: 500;\r\n  --fw-regular: 400;\r\n  --fs-italic: italic;\r\n\r\n  /* Transitions */\r\n  --ease--in--out--02s: all 0.2s ease-in-out;\r\n}\r\n\r\nhtml {\r\n  line-height: 1.15; /* 1 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  /* height: 100vh; */\r\n}\r\n\r\n@media screen and (min-width: 1000px) {\r\n  ::-webkit-scrollbar {\r\n    height: 10px;\r\n    width: 10px;\r\n    background-color: #f5f5f5;\r\n  }\r\n\r\n  ::-webkit-scrollbar-thumb {\r\n    background: var(--bg-gradient);\r\n  }\r\n\r\n  ::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n    background-color: #f5f5f5;\r\n  }\r\n}\r\n\r\nmain {\r\n  display: block;\r\n}\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n\r\nhr {\r\n  box-sizing: content-box; /* 1 */\r\n  height: 0; /* 1 */\r\n  overflow: visible; /* 2 */\r\n}\r\n\r\npre {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\na {\r\n  background-color: transparent;\r\n}\r\na:hover,\r\na:focus {\r\n  text-decoration: none;\r\n}\r\n\r\nabbr[title] {\r\n  border-bottom: none; /* 1 */\r\n  text-decoration: underline; /* 2 */\r\n  -webkit-text-decoration: underline dotted;\r\n          text-decoration: underline dotted; /* 2 */\r\n}\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font size in all browsers.\r\n */\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\nimg {\r\n  border-style: none;\r\n  width: 100%;\r\n  display: block;\r\n}\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: inherit; /* 1 */\r\n  font-size: 100%; /* 1 */\r\n  line-height: 1.15; /* 1 */\r\n  margin: 0; /* 2 */\r\n}\r\n\r\nbutton,\r\ninput {\r\n  /* 1 */\r\n  overflow: visible;\r\n}\r\n\r\nbutton,\r\nselect {\r\n  /* 1 */\r\n  text-transform: none;\r\n}\r\n\r\nbutton {\r\n  background-color: transparent;\r\n  border: none;\r\n}\r\n\r\nbutton,\r\n[type='button'],\r\n[type='reset'],\r\n[type='submit'] {\r\n  -webkit-appearance: button;\r\n}\r\n\r\nbutton::-moz-focus-inner,\r\n[type='button']::-moz-focus-inner,\r\n[type='reset']::-moz-focus-inner,\r\n[type='submit']::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\r\n}\r\n\r\nbutton:-moz-focusring,\r\n[type='button']:-moz-focusring,\r\n[type='reset']:-moz-focusring,\r\n[type='submit']:-moz-focusring {\r\n  outline: 1px dotted ButtonText;\r\n}\r\n\r\nfieldset {\r\n  padding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\nlegend {\r\n  box-sizing: border-box; /* 1 */\r\n  color: inherit; /* 2 */\r\n  display: table; /* 1 */\r\n  max-width: 100%; /* 1 */\r\n  padding: 0; /* 3 */\r\n  white-space: normal; /* 1 */\r\n}\r\n\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * 1. Add the correct box sizing in IE 10.\r\n * 2. Remove the padding in IE 10.\r\n */\r\n\r\n[type='checkbox'],\r\n[type='radio'] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\r\n\r\n[type='number']::-webkit-inner-spin-button,\r\n[type='number']::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\r\n\r\n[type='search'] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  outline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the inner padding in Chrome and Safari on macOS.\r\n */\r\n\r\n[type='search']::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button; /* 1 */\r\n  font: inherit; /* 2 */\r\n}\r\n\r\n/* Interactive\r\n   ========================================================================== */\r\n\r\n/*\r\n * Add the correct display in Edge, IE 10+, and Firefox.\r\n */\r\n\r\ndetails {\r\n  display: block;\r\n}\r\n\r\n/*\r\n * Add the correct display in all browsers.\r\n */\r\n\r\nsummary {\r\n  display: list-item;\r\n}\r\n\r\n/* Misc\r\n   ========================================================================== */\r\n\r\n/**\r\n * Add the correct display in IE 10+.\r\n */\r\n\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/**\r\n * Add the correct display in IE 10.\r\n */\r\n\r\n[hidden] {\r\n  display: none;\r\n}\r\n\r\n*,\r\n*::after,\r\n*::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  line-height: 1.6;\r\n  text-decoration: none;\r\n  list-style: none;\r\n}\r\n\r\nbody,\r\nhtml {\r\n  font-family: var(--fn-monterrat);\r\n  font-family: 1.1rem;\r\n  overflow-x: hidden;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n  color: var(--white-clr);\r\n}\r\n\r\np,\r\na {\r\n  color: var(--white-clr);\r\n}\r\n\r\n#__next {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n}\r\n\r\nmain,\r\nheader {\r\n  flex: 1 0 auto;\r\n}\r\n\r\n.mr-a {\r\n  margin: 5em auto;\r\n}\r\n\r\n.max-width {\r\n  max-width: 1500px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.title {\r\n  font-weight: bold;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.subTitle {\r\n  font-size: 1.15rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.redHover {\r\n  color: var(--white-clr);\r\n  transition: var(--ease--in--out--02s);\r\n}\r\n.redHover:hover,\r\n.redHover:focus {\r\n  color: var(--primary-clr);\r\n}\r\n\r\n/* Card container global style */\r\n.card--container {\r\n  margin-top: 4em;\r\n  padding: 0 1em;\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n  text-align: center;\r\n  grid-gap: 5em;\r\n  align-items: end;\r\n  justify-items: center;\r\n}\r\n\r\n/* Start Rating */\r\n.rating--star {\r\n  justify-self: end;\r\n  display: flex;\r\n  align-items: center;\r\n  margin-left: auto;\r\n}\r\n.rating--star .star {\r\n  color: yellow;\r\n  margin-left: 0.1em;\r\n  font-size: 1.2rem;\r\n  -webkit-filter: drop-shadow(0 0 0.1rem rgb(41, 41, 41, 0.5));\r\n          filter: drop-shadow(0 0 0.1rem rgb(41, 41, 41, 0.5));\r\n}\r\n\r\n.modal-content:has(img) {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  margin: 0 auto;\r\n}\r\n\r\n@media screen and (min-width: 760px) and (max-width: 1200px) {\r\n  .card--container > :last-child {\r\n    grid-column: 1/3;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["global.css"],"names":[],"mappings":"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","file":"global.css","sourcesContent":[":root {\r\n  /* Colors */\r\n  --primary-clr: #bc3131;\r\n  --second-clr: #212122;\r\n  --accent-clr: #e7e6e5;\r\n  --white-clr: #fff;\r\n  --grey-clr: #efefef;\r\n  --hover--clr: #5d5e5e;\r\n\r\n  /* Gradient  */\r\n  --bg-gradient: linear-gradient(\r\n    to top,\r\n    #240808,\r\n    #210707,\r\n    #1d0707,\r\n    #190606,\r\n    #140505\r\n  );\r\n\r\n  /* Box Shadow */\r\n  --shadow: 3px 2px 7px rgba(0, 0, 0, 1);\r\n\r\n  /* Fonts */\r\n  --fn-monterrat: 'Montserrat', sans-serif;\r\n  --fn-roboto: 'Roboto', sans-serif;\r\n  /* font weight */\r\n  --fw-bold: 900;\r\n  --fw-medium: 500;\r\n  --fw-regular: 400;\r\n  --fs-italic: italic;\r\n\r\n  /* Transitions */\r\n  --ease--in--out--02s: all 0.2s ease-in-out;\r\n}\r\n\r\nhtml {\r\n  line-height: 1.15; /* 1 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  /* height: 100vh; */\r\n}\r\n\r\n@media screen and (min-width: 1000px) {\r\n  ::-webkit-scrollbar {\r\n    height: 10px;\r\n    width: 10px;\r\n    background-color: #f5f5f5;\r\n  }\r\n\r\n  ::-webkit-scrollbar-thumb {\r\n    background: var(--bg-gradient);\r\n  }\r\n\r\n  ::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n    background-color: #f5f5f5;\r\n  }\r\n}\r\n\r\nmain {\r\n  display: block;\r\n}\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n\r\nhr {\r\n  box-sizing: content-box; /* 1 */\r\n  height: 0; /* 1 */\r\n  overflow: visible; /* 2 */\r\n}\r\n\r\npre {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\na {\r\n  background-color: transparent;\r\n}\r\na:hover,\r\na:focus {\r\n  text-decoration: none;\r\n}\r\n\r\nabbr[title] {\r\n  border-bottom: none; /* 1 */\r\n  text-decoration: underline; /* 2 */\r\n  text-decoration: underline dotted; /* 2 */\r\n}\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font size in all browsers.\r\n */\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\nimg {\r\n  border-style: none;\r\n  width: 100%;\r\n  display: block;\r\n}\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: inherit; /* 1 */\r\n  font-size: 100%; /* 1 */\r\n  line-height: 1.15; /* 1 */\r\n  margin: 0; /* 2 */\r\n}\r\n\r\nbutton,\r\ninput {\r\n  /* 1 */\r\n  overflow: visible;\r\n}\r\n\r\nbutton,\r\nselect {\r\n  /* 1 */\r\n  text-transform: none;\r\n}\r\n\r\nbutton {\r\n  background-color: transparent;\r\n  border: none;\r\n}\r\n\r\nbutton,\r\n[type='button'],\r\n[type='reset'],\r\n[type='submit'] {\r\n  -webkit-appearance: button;\r\n}\r\n\r\nbutton::-moz-focus-inner,\r\n[type='button']::-moz-focus-inner,\r\n[type='reset']::-moz-focus-inner,\r\n[type='submit']::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\r\n}\r\n\r\nbutton:-moz-focusring,\r\n[type='button']:-moz-focusring,\r\n[type='reset']:-moz-focusring,\r\n[type='submit']:-moz-focusring {\r\n  outline: 1px dotted ButtonText;\r\n}\r\n\r\nfieldset {\r\n  padding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\nlegend {\r\n  box-sizing: border-box; /* 1 */\r\n  color: inherit; /* 2 */\r\n  display: table; /* 1 */\r\n  max-width: 100%; /* 1 */\r\n  padding: 0; /* 3 */\r\n  white-space: normal; /* 1 */\r\n}\r\n\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * 1. Add the correct box sizing in IE 10.\r\n * 2. Remove the padding in IE 10.\r\n */\r\n\r\n[type='checkbox'],\r\n[type='radio'] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\r\n\r\n[type='number']::-webkit-inner-spin-button,\r\n[type='number']::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\r\n\r\n[type='search'] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  outline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the inner padding in Chrome and Safari on macOS.\r\n */\r\n\r\n[type='search']::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button; /* 1 */\r\n  font: inherit; /* 2 */\r\n}\r\n\r\n/* Interactive\r\n   ========================================================================== */\r\n\r\n/*\r\n * Add the correct display in Edge, IE 10+, and Firefox.\r\n */\r\n\r\ndetails {\r\n  display: block;\r\n}\r\n\r\n/*\r\n * Add the correct display in all browsers.\r\n */\r\n\r\nsummary {\r\n  display: list-item;\r\n}\r\n\r\n/* Misc\r\n   ========================================================================== */\r\n\r\n/**\r\n * Add the correct display in IE 10+.\r\n */\r\n\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/**\r\n * Add the correct display in IE 10.\r\n */\r\n\r\n[hidden] {\r\n  display: none;\r\n}\r\n\r\n*,\r\n*::after,\r\n*::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  line-height: 1.6;\r\n  text-decoration: none;\r\n  list-style: none;\r\n}\r\n\r\nbody,\r\nhtml {\r\n  font-family: var(--fn-monterrat);\r\n  font-family: 1.1rem;\r\n  overflow-x: hidden;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n  color: var(--white-clr);\r\n}\r\n\r\np,\r\na {\r\n  color: var(--white-clr);\r\n}\r\n\r\n#__next {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n}\r\n\r\nmain,\r\nheader {\r\n  flex: 1 0 auto;\r\n}\r\n\r\n.mr-a {\r\n  margin: 5em auto;\r\n}\r\n\r\n.max-width {\r\n  max-width: 1500px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.title {\r\n  font-weight: bold;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.subTitle {\r\n  font-size: 1.15rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.redHover {\r\n  color: var(--white-clr);\r\n  transition: var(--ease--in--out--02s);\r\n}\r\n.redHover:hover,\r\n.redHover:focus {\r\n  color: var(--primary-clr);\r\n}\r\n\r\n/* Card container global style */\r\n.card--container {\r\n  margin-top: 4em;\r\n  padding: 0 1em;\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n  text-align: center;\r\n  grid-gap: 5em;\r\n  align-items: end;\r\n  justify-items: center;\r\n}\r\n\r\n/* Start Rating */\r\n.rating--star {\r\n  justify-self: end;\r\n  display: flex;\r\n  align-items: center;\r\n  margin-left: auto;\r\n}\r\n.rating--star .star {\r\n  color: yellow;\r\n  margin-left: 0.1em;\r\n  font-size: 1.2rem;\r\n  filter: drop-shadow(0 0 0.1rem rgb(41, 41, 41, 0.5));\r\n}\r\n\r\n.modal-content:has(img) {\r\n  width: fit-content;\r\n  margin: 0 auto;\r\n}\r\n\r\n@media screen and (min-width: 760px) and (max-width: 1200px) {\r\n  .card--container > :last-child {\r\n    grid-column: 1/3;\r\n  }\r\n}\r\n"]}]);


/***/ })

})
//# sourceMappingURL=_app.js.bf032ee69d597b439e46.hot-update.js.map