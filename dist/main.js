/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  font-family: 'Playfair Display', serif;\\n}\\n\\nbody {\\n  background-color: #ffe4b5;\\n}\\n\\n.container {\\n  background-color: #fff;\\n  padding-left: 45px;\\n  padding-right: 45px;\\n  padding-top: 15px;\\n  padding-bottom: 15px;\\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\\n  border-radius: 10px;\\n}\\n\\n.navbar {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 0;\\n  margin: 0;\\n  width: 100%;\\n  background-color: transparent;\\n  position: sticky;\\n  top: 0;\\n}\\n\\n.navbar-nav {\\n  list-style: none;\\n  display: flex;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n.nav-link {\\n  margin-right: 20px;\\n  text-decoration: none;\\n  color: #333;\\n}\\n\\n.nav-link.active {\\n  font-weight: bold;\\n}\\n\\n.container-fluid {\\n  position: relative;\\n  transition: top 0.3s ease;\\n}\\n\\n.container-fluid.fixed {\\n  position: fixed;\\n  top: 0;\\n  width: 100%;\\n  background-color: #fff;\\n  z-index: 1000;\\n}\\n\\n.meals-num {\\n  padding: 5px 10px;\\n  border-radius: 5px;\\n  animation: blink 1s infinite alternate;\\n\\n  /* Use the \\\"blink\\\" animation */\\n}\\n\\n@keyframes blink {\\n  0% {\\n    background-color: #ffd700;\\n  }\\n\\n  100% {\\n    background-color: transparent;\\n  }\\n}\\n\\n.meals-num:hover {\\n  animation: none;\\n  background-color: #dc143c;\\n  color: #fff;\\n}\\n\\n.scn-scn {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.ncs-ncs {\\n  display: flex;\\n  flex-direction: row;\\n}\\n\\nul {\\n  list-style: none;\\n}\\n\\nbutton:hover,\\n.heart:hover {\\n  cursor: pointer;\\n}\\n\\nfooter {\\n  font-size: larger;\\n  font-weight: bolder;\\n  font-style: normal;\\n  color: #ffd700;\\n  background-color: #789;\\n  padding: 10px;\\n  position: relative;\\n  left: 0;\\n  bottom: 0;\\n  width: 100%;\\n}\\n\\n@media only screen and (min-width: 320px) {\\n  header {\\n    width: 100%;\\n    justify-content: space-between;\\n    align-items: center;\\n    padding-top: 10px;\\n    position: fixed;\\n  }\\n\\n  ul {\\n    width: 65%;\\n    column-gap: 5%;\\n  }\\n\\n  ul li:nth-child(1) {\\n    text-decoration: underline;\\n    color: #ffffed;\\n  }\\n\\n  ul li a {\\n    color: #2beb83;\\n    text-decoration: none;\\n  }\\n\\n  section.menu {\\n    width: 100%;\\n    padding-top: 60px;\\n    gap: 10px;\\n  }\\n\\n  .food-card {\\n    width: 80%;\\n    justify-content: center;\\n    margin: 0 5%;\\n    row-gap: 30px;\\n  }\\n\\n  .image-box {\\n    width: 100%;\\n  }\\n\\n  .image-box img {\\n    width: 100%;\\n    border-radius: 15px;\\n  }\\n\\n  .image-box img:hover {\\n    width: 103%;\\n    border-radius: 15px;\\n  }\\n\\n  .ppup-area {\\n    margin-top: -30px;\\n    justify-content: space-between;\\n  }\\n\\n  .ppup-area h2 {\\n    font-size: 1.2rem;\\n    width: 67%;\\n  }\\n\\n  .ppup-area span {\\n    margin-top: 10%;\\n    font-size: 1.1rem;\\n    color: #483d8b;\\n  }\\n\\n  .press-feature {\\n    justify-content: space-between;\\n    margin-top: -20px;\\n  }\\n\\n  button {\\n    width: 30%;\\n    padding: 10px 20px;\\n    font-size: 16px;\\n    font-weight: bold;\\n    border: 2px solid #008b8b;\\n  }\\n\\n  .opinion-header {\\n    color: #b22222;\\n  }\\n\\n  .modal-backdrop {\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100%;\\n    background-color: rgba(0, 0, 0, 0.5);\\n    z-index: 10;\\n    display: none;\\n  }\\n\\n  .card-enclose {\\n    width: 95%;\\n    max-width: 600px;\\n    position: fixed;\\n    top: 50%;\\n    left: 50%;\\n    transform: translate(-50%, -50%);\\n    background-color: white;\\n    border-radius: 20px;\\n    z-index: 11;\\n    padding: 20px;\\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\\n    overflow-y: scroll;\\n    max-height: 80%;\\n  }\\n\\n  i.minimize-card:hover {\\n    cursor: pointer;\\n  }\\n\\n  .card-enclose h2 {\\n    font-size: 1.2rem;\\n    margin-top: 0;\\n  }\\n\\n  h2.enter-opinion {\\n    margin-top: 30px;\\n  }\\n\\n  .popup-window i {\\n    margin: 15px 10% 15px 90%;\\n  }\\n\\n  .food-drn {\\n    width: 100%;\\n    align-items: center;\\n  }\\n\\n  .expand-box {\\n    width: 90%;\\n    align-items: center;\\n  }\\n\\n  img.expand-photo {\\n    width: 100%;\\n    border-radius: 15px;\\n  }\\n\\n  h2.expand-id {\\n    margin-top: 10px;\\n  }\\n\\n  .food-dscrptn {\\n    display: grid;\\n    grid-template-columns: auto auto;\\n    width: 90%;\\n    margin-top: 10px;\\n  }\\n\\n  .food-dscrptn span {\\n    font-weight: bolder;\\n  }\\n\\n  .recipeArea {\\n    grid-column: 1 / span 2;\\n    margin-top: 10px;\\n    text-align: justify;\\n  }\\n\\n  .opinion-area {\\n    display: flex;\\n    margin-top: 30px;\\n    width: 90%;\\n    justify-content: center;\\n    margin-left: 5%;\\n  }\\n\\n  .opinion-scn p {\\n    font-size: 0.9rem;\\n    margin-top: 5px;\\n    font-style: italic;\\n  }\\n\\n  .add-opinion {\\n    width: 100%;\\n    align-items: center;\\n  }\\n\\n  form.enter-opinion {\\n    width: 90%;\\n    row-gap: 5px;\\n  }\\n\\n  input.user-name {\\n    height: 25px;\\n  }\\n\\n  textarea.insights {\\n    height: 60px;\\n  }\\n\\n  input.user-name:focus,\\n  textarea.insights:focus {\\n    outline-color: #00ff7f;\\n    padding: 3%;\\n  }\\n\\n  ::placeholder {\\n    padding-left: 2%;\\n  }\\n}\\n\\n@media only screen and (min-width: 375px) {\\n  header ul {\\n    width: 100%;\\n    column-gap: 5%;\\n    margin-left: 15%;\\n  }\\n\\n  .ppup-area h2 {\\n    width: 70%;\\n  }\\n}\\n\\n@media only screen and (min-width: 425px) {\\n  header ul {\\n    width: 100%;\\n    column-gap: 5%;\\n    margin-left: 18%;\\n  }\\n\\n  section.menu {\\n    padding-top: 80px;\\n  }\\n\\n  .ppup-area h2 {\\n    width: 75%;\\n  }\\n\\n  button {\\n    width: 20%;\\n  }\\n}\\n\\n@media only screen and (min-width: 768px) {\\n  .logo {\\n    width: 90%;\\n  }\\n\\n  header ul {\\n    width: 100%;\\n    column-gap: 5%;\\n    margin-left: 40%;\\n  }\\n\\n  section.menu {\\n    width: 100%;\\n    padding-top: 100px;\\n    display: grid;\\n    grid-template-columns: 49% 49%;\\n    grid-template-columns: auto auto;\\n  }\\n\\n  button {\\n    width: 25%;\\n  }\\n\\n  button.your-opionion {\\n    width: 30%;\\n    padding: 10px 20px;\\n    font-size: 16px;\\n    font-weight: bold;\\n    border: 3px solid #008b8b;\\n  }\\n\\n    .menu .heart {\\n      font-size: larger;\\n      position: relative;\\n      top: 78%;\\n      left: 10px;\\n      transition: transform 0.2s ease-in-out;\\n    }\\n  \\n    .menu .heart:hover {\\n      transform: scale(1.2);\\n    }\\n\\n  .menu .comment {\\n    position: relative;\\n    top: -40px;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Cooking_Masters/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://Cooking_Masters/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://Cooking_Masters/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://Cooking_Masters/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Cooking_Masters/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://Cooking_Masters/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://Cooking_Masters/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://Cooking_Masters/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://Cooking_Masters/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://Cooking_Masters/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _module_mealDetails_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/mealDetails.js */ \"./src/module/mealDetails.js\");\n\n\n\nconst foodDescr = await (0,_module_mealDetails_js__WEBPACK_IMPORTED_MODULE_1__.fetchFoodInfo)();\nconst metricsInfo = await (0,_module_mealDetails_js__WEBPACK_IMPORTED_MODULE_1__.fetchInfo)();\n(0,_module_mealDetails_js__WEBPACK_IMPORTED_MODULE_1__.enterMeals)(foodDescr);\nfoodDescr.forEach((element) => {\n  (0,_module_mealDetails_js__WEBPACK_IMPORTED_MODULE_1__.showInfo)(metricsInfo, `M${element.idMeal}`);\n});\n\nconst popupWindow = document.querySelector('.popup-window');\npopupWindow.addEventListener('click', (e) => {\n  if (e.target && e.target.matches('i.minimize-card')) {\n    popupWindow.innerHTML = '';\n  }\n});\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://Cooking_Masters/./src/index.js?");

/***/ }),

/***/ "./src/module/mealDetails.js":
/*!***********************************!*\
  !*** ./src/module/mealDetails.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createInstance: () => (/* binding */ createInstance),\n/* harmony export */   enterMeals: () => (/* binding */ enterMeals),\n/* harmony export */   expandedCard: () => (/* binding */ expandedCard),\n/* harmony export */   fetchFoodInfo: () => (/* binding */ fetchFoodInfo),\n/* harmony export */   fetchInfo: () => (/* binding */ fetchInfo),\n/* harmony export */   fetchOpinions: () => (/* binding */ fetchOpinions),\n/* harmony export */   fillOpinions: () => (/* binding */ fillOpinions),\n/* harmony export */   mealsnumber: () => (/* binding */ mealsnumber),\n/* harmony export */   oneLike: () => (/* binding */ oneLike),\n/* harmony export */   opinionCount: () => (/* binding */ opinionCount),\n/* harmony export */   opinionQty: () => (/* binding */ opinionQty),\n/* harmony export */   opinionsNumber: () => (/* binding */ opinionsNumber),\n/* harmony export */   showInfo: () => (/* binding */ showInfo),\n/* harmony export */   showMeals: () => (/* binding */ showMeals),\n/* harmony export */   warningArea: () => (/* binding */ warningArea)\n/* harmony export */ });\nconst fetchFoodInfo = async () => {\n  const request = new Request('https://themealdb.com/api/json/v1/1/search.php?f=c');\n  const response = await fetch(request);\n  const data = await response.json();\n  return data.meals;\n};\n\nconst enterMeals = async (foodDescr) => {\n  const mealArea = document.querySelector('.menu');\n  foodDescr.forEach((element) => {\n    const mealAccrdn = document.createElement('div');\n    mealAccrdn.classList.add('food-card', 'scn-scn');\n    mealAccrdn.innerHTML = `<div class = 'image-box'><img src = '${element.strMealThumb}' alt = 'meal'></div>\n                          <div class = 'ncs-ncs ppup-area'>\n                            <h2 class = 'expand-id'>${element.strMeal}</h2>\n                            <i id =\"M${element.idMeal}\" class=\"fa-sharp fa-solid fa-heart heart\" style=\"color: red;\"></i><span id =\"L${element.idMeal}\" class =\"likes\">0 Likes</span>\n                          </div>\n                          <div class = \"press-feature ncs-ncs\">\n                            <button id = \"opinionFtr${element.idMeal}\" class = 'comment'>Comments</button>\n                          </div>\n                          <hr>\n                          `;\n    mealArea.appendChild(mealAccrdn);\n  });\n};\n\nconst createInstance = async () => {\n  const request = new Request('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/');\n  await fetch(request, {\n    method: 'POST',\n  });\n};\n\nconst oneLike = async (uniqueID) => {\n  const request = new Request('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AyieX5e6xBkjrE1kOdfK/likes/');\n  await fetch(request, {\n    headers: {\n      'Content-type': 'application/json',\n    },\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: uniqueID,\n    }),\n  });\n};\n\nconst fetchInfo = async () => {\n  const request = new Request('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AyieX5e6xBkjrE1kOdfK/likes/');\n  const response = await fetch(request);\n  const data = await response.json();\n  return data;\n};\n\nconst showInfo = async (metricsInfo, metricID) => {\n  metricsInfo.forEach((element) => {\n    if (element.item_id === metricID) {\n      const likeUnique = metricID.replace('M', 'L');\n      const span = document.querySelector(`#${likeUnique}`);\n      span.textContent = `${element.likes} likes`;\n    }\n  });\n};\n\nconst mealsnumber = async () => {\n  const request = new Request('https://themealdb.com/api/json/v1/1/search.php?f=c');\n  const response = await fetch(request);\n  const data = await response.json();\n  return data.meals.length;\n};\n\nconst showMeals = (opinionsNo) => {\n  const li = document.querySelector('li.meals-num');\n  li.textContent = `Meals(${opinionsNo})`;\n};\n\nconst expandedCard = (data, id) => {\n  const expandCard = document.querySelector('.popup-window');\n  data.forEach((element) => {\n    if (element.idMeal === id) {\n      expandCard.innerHTML = `<div class = \"card-enclose scn-scn\">\n                              <i class=\"fa-solid fa-xmark minimize-card\"></i>\n                              <section class = \"food-drn scn-scn\">\n                                <div class = 'expand-box scn-scn'>\n                                  <img class = \"expand-photo\" src = '${element.strMealThumb}' alt = 'meal'>\n                                  <h2 class = \"expand-id\">${element.strMeal}</h2>\n                                </div>\n                                <div class = \"food-dscrptn\">\n                                  <div><span>Area:</span> ${element.strArea}</div>\n                                  <div><span>Category:</span> ${element.strCategory}</div>\n                                  <div class = \"recipeArea\"><span>Instructions:</span> ${element.strInstructions}</div>\n                                </div>\n                              </section>\n                              <hr>\n                              <section class = \"opinion-area scn-scn\">\n                                <h2 class = \"opinion-header\">Comments (0)</h2>\n                                <div class = \"opinion-scn scn-scn\"></div>\n                              </section>\n                              <hr>\n                              <section class = \"add-opinion scn-scn\">\n                                <h2 class = \"enter-opinion\">Add a comment</h2>\n                                <form class = \"enter-opinion scn-scn\">\n                                  <label for = \"userName\"></label>\n                                  <input id = \"userName\" class = \"user-name\" type = \"text\", required, placeholder = \"Your name\">\n                                  <p class = \"wrong-name\"></p>\n                                  <label for = \"textArea\"></label>\n                                  <textarea id = \"textarea\" class = \"insights\" required, placeholder = \"Your insights\"></textarea>\n                                  <p class = \"insights-error\"></p>\n                                  <button class = \"your-opionion\">Comment</button>\n                                </form>\n                              </section>\n                            </div>\n                            `;\n    }\n  });\n};\n\nconst warningArea = (userName, insights) => {\n  const p1 = document.querySelector('p.wrong-name');\n  const p2 = document.querySelector('p.insights-error');\n  if (!userName) {\n    p1.innerHTML = 'required field';\n    p1.style.color = 'orange';\n    p1.style.fontSize = '1rem';\n  } else {\n    p1.innerHTML = '';\n  }\n  if (!insights) {\n    p2.innerHTML = 'required field';\n    p2.style.color = 'orange';\n    p2.style.fontSize = '1rem';\n  } else {\n    p2.innerHTML = '';\n  }\n};\n\nconst opinionCount = async (id, userName, insights) => {\n  const request = new Request('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AyieX5e6xBkjrE1kOdfK/comments');\n  await fetch(request, {\n    headers: {\n      'Content-type': 'application/json',\n    },\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: id,\n      username: userName,\n      comment: insights,\n    }),\n  });\n};\n\nconst fetchOpinions = async (id) => {\n  const request = new Request(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AyieX5e6xBkjrE1kOdfK/comments?item_id=${id}`);\n  const response = await fetch(request);\n  const data = await response.json();\n  return data;\n};\n\nconst fillOpinions = (data) => {\n  const opinionFld = document.querySelector('div.opinion-scn');\n  data.forEach((element) => {\n    if (element.creation_date && element.username && element.comment) {\n      const p = document.createElement('p');\n      p.textContent = `${element.creation_date} ${element.username}: ${element.comment}`;\n      opinionFld.appendChild(p);\n    }\n  });\n};\n\nconst opinionsNumber = async (id) => {\n  const request = new Request(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AyieX5e6xBkjrE1kOdfK/comments?item_id=${id}`);\n  const response = await fetch(request);\n  const data = await response.json();\n  let a = 0;\n  if (data.length) {\n    data.forEach((element) => {\n      if (element.creation_date && element.username && element.comment) {\n        a += 1;\n      }\n    });\n  }\n  return a;\n};\n\nconst opinionQty = (opinionsNo) => {\n  const h2 = document.querySelector('h2.opinion-header');\n  h2.textContent = `Number of Comments (${opinionsNo})`;\n};\n\n//# sourceURL=webpack://Cooking_Masters/./src/module/mealDetails.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && !queue.d) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = 1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;