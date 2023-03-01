/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/style.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/style.scss ***!
  \*******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/greatvibes-regular-webfont.woff2 */ "./src/assets/fonts/greatvibes-regular-webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/greatvibes-regular-webfont.woff */ "./src/assets/fonts/greatvibes-regular-webfont.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "[class$=-board] button, #game-over button, #difficulties .difficulty button {\n  appearance: none;\n  border: none;\n  outline: none;\n  background-color: unset;\n}\n\n#game-over button, #difficulties .difficulty button {\n  cursor: pointer;\n  border: 1px solid black;\n  padding: 4px 16px;\n  border-radius: 999px;\n  letter-spacing: 1px;\n  font-family: \"Courier New\", Courier, monospace;\n  text-transform: capitalize;\n  width: fit-content;\n}\n\n@font-face {\n  font-family: \"great_vibes\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\nbody {\n  margin: 0;\n  font-family: great_vibes, sans-serif;\n  background-color: rgb(246, 246, 246);\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\nh1,\nh2,\nh3 {\n  font-weight: 500;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\na,\np {\n  margin: 0;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.logo {\n  text-align: center;\n  font-size: 3rem;\n  margin: 8px 0;\n  font-weight: 500;\n}\n\n.alive-ships {\n  display: flex;\n  justify-content: center;\n  gap: 4px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.alive-ships .alive-ship {\n  display: flex;\n}\n.alive-ships .alive-ship .ship-block {\n  width: 1vw;\n  height: 1vw;\n  border: 1px solid black;\n}\n.alive-ships .alive-ship .ship-block:not(:first-child) {\n  border-left: none;\n}\n\n#game-boards {\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n\n[class$=-board] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n[class$=-board] .row {\n  display: flex;\n  gap: 2px;\n}\n[class$=-board] button {\n  width: 4vw;\n  height: 4vw;\n  border: 1px solid black;\n  border-radius: 4px;\n  background-color: white;\n}\n[class$=-board] button.attacked::after {\n  content: \"X\";\n  color: rgb(50, 50, 50);\n  font-weight: bold;\n}\n[class$=-board]:nth-of-type(1) button.has-ship {\n  background-color: lightblue;\n}\n[class$=-board]:nth-of-type(1) .alive-ships .ship-block {\n  background-color: #d4ebf2;\n}\n[class$=-board]:nth-of-type(2) button:hover,\n[class$=-board]:nth-of-type(2) button:focus {\n  background-color: lightgrey;\n}\n[class$=-board]:nth-of-type(2) button.has-ship {\n  background-color: lightcoral;\n}\n[class$=-board]:nth-of-type(2) .alive-ships .ship-block {\n  background-color: #f5aeae;\n}\n\n#game-over {\n  margin: 16px 0;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n#game-over h2 {\n  font-size: 2rem;\n  font-weight: 500;\n}\n#game-over button:hover, #game-over button:focus {\n  background-color: #e6e6e6;\n}\n\nfooter {\n  font-size: 1.5rem;\n  min-height: 64px;\n  background-color: rgb(250, 250, 250);\n  margin-top: auto;\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nfooter a {\n  text-decoration: none;\n  color: lightcoral;\n}\nfooter a:hover {\n  text-decoration: line-through;\n}\n\n@media (max-width: 576px) {\n  #game-boards {\n    flex-direction: column;\n    align-items: center;\n  }\n  [class$=-board] button {\n    width: 8vw;\n    height: 8vw;\n  }\n  footer {\n    min-height: 48px;\n  }\n  .ship-block {\n    width: 2vw !important;\n    height: 2vw !important;\n  }\n  #game-over {\n    margin-bottom: 32px;\n  }\n}\n#choose-difficulty {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  gap: 32px;\n  margin-top: 10vh;\n}\n#choose-difficulty h2 {\n  text-align: center;\n  font-size: 2.5rem;\n}\n\n#difficulties {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n#difficulties .difficulty.easy button {\n  background-color: lightgreen;\n}\n#difficulties .difficulty.easy button:focus, #difficulties .difficulty.easy button:hover {\n  background-color: #bcf5bc;\n}\n#difficulties .difficulty.medium button {\n  background-color: #ffffad;\n}\n#difficulties .difficulty.medium button:focus, #difficulties .difficulty.medium button:hover {\n  background-color: lightyellow;\n}\n#difficulties .difficulty.hard button {\n  background-color: lightcoral;\n}\n#difficulties .difficulty.hard button:focus, #difficulties .difficulty.hard button:hover {\n  background-color: #f5aeae;\n}", "",{"version":3,"sources":["webpack://./src/assets/styles/_config.scss","webpack://./src/assets/styles/style.scss"],"names":[],"mappings":"AAAA;EACE,gBAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;ACCF;;ADEA;EAEE,eAAA;EACA,uBAAA;EACA,iBAAA;EACA,oBAAA;EACA,mBAAA;EACA,8CAAA;EACA,0BAAA;EACA,kBAAA;ACAF;;AAdA;EACE,0BAAA;EACA,oHAAA;EAEA,mBAAA;EACA,kBAAA;AAgBF;AAbA;EACE,SAAA;EACA,oCAAA;EACA,oCAAA;EACA,aAAA;EAEA,aAAA;EACA,sBAAA;AAcF;;AAXA;;;EAGE,gBAAA;AAcF;;AAXA;;;;;;;;EAQE,SAAA;AAcF;;AAXA;EACE,SAAA;EACA,UAAA;EACA,gBAAA;AAcF;;AAXA;EACE,kBAAA;EACA,eAAA;EACA,aAAA;EACA,gBAAA;AAcF;;AAXA;EACE,aAAA;EACA,uBAAA;EACA,QAAA;EACA,mBAAA;EACA,eAAA;AAcF;AAZE;EACE,aAAA;AAcJ;AAZI;EACE,UAAA;EACA,WAAA;EACA,uBAAA;AAcN;AAZM;EACE,iBAAA;AAcR;;AARA;EACE,aAAA;EACA,uBAAA;EACA,qBAAA;EACA,SAAA;EACA,eAAA;AAWF;;AARA;EAEE,aAAA;EACA,sBAAA;EACA,QAAA;AAUF;AARE;EACE,aAAA;EACA,QAAA;AAUJ;AAPE;EAEE,UAAA;EACA,WAAA;EACA,uBAAA;EACA,kBAAA;EACA,uBAAA;AAQJ;AALM;EACE,YAAA;EACA,sBAAA;EACA,iBAAA;AAOR;AAAI;EACE,2BAAA;AAEN;AACI;EACE,yBAAA;AACN;AAKI;;EAEE,2BAAA;AAHN;AAMI;EACE,4BAAA;AAJN;AAOI;EACE,yBAAA;AALN;;AAUA;EACE,cAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;AAPF;AASE;EACE,eAAA;EACA,gBAAA;AAPJ;AAaI;EAEE,yBAAA;AAZN;;AAiBA;EACE,iBAAA;EACA,gBAAA;EACA,oCAAA;EACA,gBAAA;EACA,2CAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAdF;AAgBE;EACE,qBAAA;EACA,iBAAA;AAdJ;AAgBI;EACE,6BAAA;AAdN;;AAmBA;EACE;IACE,sBAAA;IACA,mBAAA;EAhBF;EAmBA;IACE,UAAA;IACA,WAAA;EAjBF;EAoBA;IACE,gBAAA;EAlBF;EAqBA;IACE,qBAAA;IACA,sBAAA;EAnBF;EAsBA;IACE,mBAAA;EApBF;AACF;AAuBA;EACE,aAAA;EACA,uBAAA;EACA,sBAAA;EACA,SAAA;EACA,gBAAA;AArBF;AAuBE;EACE,kBAAA;EACA,iBAAA;AArBJ;;AAyBA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;AAtBF;AA6BI;EACE,4BAAA;AA3BN;AA6BM;EAEE,yBAAA;AA5BR;AAgCI;EACE,yBAAA;AA9BN;AAgCM;EAEE,6BAAA;AA/BR;AAmCI;EACE,4BAAA;AAjCN;AAmCM;EAEE,yBAAA;AAlCR","sourcesContent":["%reset-appearance {\n  appearance: none;\n  border: none;\n  outline: none;\n  background-color: unset;\n}\n\n%button {\n  @extend %reset-appearance;\n  cursor: pointer;\n  border: 1px solid black;\n  padding: 4px 16px;\n  border-radius: 999px;\n  letter-spacing: 1px;\n  font-family: 'Courier New', Courier, monospace;\n  text-transform: capitalize;\n  width: fit-content;\n}\n","@use 'config';\n\n@font-face {\n  font-family: 'great_vibes';\n  src: url('../fonts/greatvibes-regular-webfont.woff2') format('woff2'),\n    url('../fonts/greatvibes-regular-webfont.woff') format('woff');\n  font-weight: normal;\n  font-style: normal;\n}\n\nbody {\n  margin: 0;\n  font-family: great_vibes, sans-serif;\n  background-color: rgb(246, 246, 246);\n  height: 100vh;\n\n  display: flex;\n  flex-direction: column;\n}\n\nh1,\nh2,\nh3 {\n  font-weight: 500;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\na,\np {\n  margin: 0;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.logo {\n  text-align: center;\n  font-size: 3rem;\n  margin: 8px 0;\n  font-weight: 500;\n}\n\n.alive-ships {\n  display: flex;\n  justify-content: center;\n  gap: 4px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n\n  .alive-ship {\n    display: flex;\n\n    .ship-block {\n      width: 1vw;\n      height: 1vw;\n      border: 1px solid black;\n\n      &:not(:first-child) {\n        border-left: none;\n      }\n    }\n  }\n}\n\n#game-boards {\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n\n[class$='-board'] {\n  // human-board, computer-board\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n\n  .row {\n    display: flex;\n    gap: 2px;\n  }\n\n  button {\n    @extend %reset-appearance;\n    width: 4vw;\n    height: 4vw;\n    border: 1px solid black;\n    border-radius: 4px;\n    background-color: white;\n\n    &.attacked {\n      &::after {\n        content: 'X';\n        color: rgb(50, 50, 50);\n        font-weight: bold;\n      }\n    }\n  }\n\n  // HUMAN\n  &:nth-of-type(1) {\n    button.has-ship {\n      background-color: lightblue;\n    }\n\n    .alive-ships .ship-block {\n      background-color: lighten(lightblue, 10%);\n    }\n  }\n\n  // COMPUTER\n  &:nth-of-type(2) {\n    button:hover,\n    button:focus {\n      background-color: lightgrey;\n    }\n\n    button.has-ship {\n      background-color: lightcoral;\n    }\n\n    .alive-ships .ship-block {\n      background-color: lighten(lightcoral, 10%);\n    }\n  }\n}\n\n#game-over {\n  margin: 16px 0;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n\n  h2 {\n    font-size: 2rem;\n    font-weight: 500;\n  }\n\n  button {\n    @extend %button;\n\n    &:hover,\n    &:focus {\n      background-color: darken(white, 10%);\n    }\n  }\n}\n\nfooter {\n  font-size: 1.5rem;\n  min-height: 64px;\n  background-color: rgb(250, 250, 250);\n  margin-top: auto;\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  a {\n    text-decoration: none;\n    color: lightcoral;\n\n    &:hover {\n      text-decoration: line-through;\n    }\n  }\n}\n\n@media (max-width: 576px) {\n  #game-boards {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  [class$='-board'] button {\n    width: 8vw;\n    height: 8vw;\n  }\n\n  footer {\n    min-height: 48px;\n  }\n\n  .ship-block {\n    width: 2vw !important;\n    height: 2vw !important;\n  }\n\n  #game-over {\n    margin-bottom: 32px;\n  }\n}\n\n#choose-difficulty {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  gap: 32px;\n  margin-top: 10vh;\n\n  h2 {\n    text-align: center;\n    font-size: 2.5rem;\n  }\n}\n\n#difficulties {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n\n  .difficulty {\n    button {\n      @extend %button;\n    }\n\n    &.easy button {\n      background-color: lightgreen;\n\n      &:focus,\n      &:hover {\n        background-color: lighten(lightgreen, 10%);\n      }\n    }\n\n    &.medium button {\n      background-color: darken(lightyellow, 10%);\n\n      &:focus,\n      &:hover {\n        background-color: lightyellow;\n      }\n    }\n\n    &.hard button {\n      background-color: lightcoral;\n\n      &:focus,\n      &:hover {\n        background-color: lighten(lightcoral, 10%);\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/styles/style.scss":
/*!**************************************!*\
  !*** ./src/assets/styles/style.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/fonts/greatvibes-regular-webfont.woff":
/*!**********************************************************!*\
  !*** ./src/assets/fonts/greatvibes-regular-webfont.woff ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c33fcb3618b796362839.woff";

/***/ }),

/***/ "./src/assets/fonts/greatvibes-regular-webfont.woff2":
/*!***********************************************************!*\
  !*** ./src/assets/fonts/greatvibes-regular-webfont.woff2 ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "492be58d356b21d13534.woff2";

/***/ }),

/***/ "./src/assets/images/favicon-16x16.png":
/*!*********************************************!*\
  !*** ./src/assets/images/favicon-16x16.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b90909ff3016f218744e.png";

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DomController": () => (/* binding */ DomController),
/* harmony export */   "DomGame": () => (/* binding */ DomGame)
/* harmony export */ });
/* harmony import */ var _game_gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/gameboard.js */ "./src/game/gameboard.js");
/* harmony import */ var _pages_choose_difficulty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/choose_difficulty.js */ "./src/pages/choose_difficulty.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/* eslint-disable import/no-cycle */



var DomController = function () {
  var newElement = function newElement(type) {
    var cls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var text = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
    var element = document.createElement(type);
    element.setAttribute('class', cls);
    element.id = id;
    element.textContent = text;
    return element;
  };
  var addChildrenTo = function addChildrenTo(element, children) {
    children.forEach(function (child) {
      return element.appendChild(child);
    });
  };
  var byId = function byId(id) {
    return document.getElementById(id);
  };
  return {
    newElement: newElement,
    addChildrenTo: addChildrenTo,
    byId: byId
  };
}();
var DomGame = function () {
  var markupForBoard = function markupForBoard(board, name) {
    var boardEl = DomController.newElement('section', "".concat(name, "-board"));
    for (var row = 0; row < board.length; row++) {
      var rowEl = DomController.newElement('div', 'row');
      for (var col = 0; col < board[0].length; col++) {
        var tileBtn = DomController.newElement('button');
        tileBtn.id = "".concat(name, "_").concat(row, "_").concat(col);
        rowEl.appendChild(tileBtn);
      }
      boardEl.appendChild(rowEl);
    }
    return boardEl;
  };
  var markupForAliveShips = function markupForAliveShips(player) {
    var playerAliveShipsEl = DomController.newElement('div', 'alive-ships');
    _game_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.GameboardService.aliveShipsOf(player.gameBoard).forEach(function (ship) {
      var aliveShipEl = DomController.newElement('div', 'alive-ship');
      aliveShipEl.setAttribute('aria-label', "".concat(player.name, " alive ship of length ").concat(ship.length));
      for (var i = 0; i < ship.length; i++) {
        var shipBlock = DomController.newElement('span', 'ship-block');
        aliveShipEl.appendChild(shipBlock);
      }
      playerAliveShipsEl.appendChild(aliveShipEl);
    });
    return playerAliveShipsEl;
  };
  var updateAliveShipsFor = function updateAliveShipsFor(player, aliveShipsEl) {
    var lastSunkShip = player.gameBoard.getLastSunkShip();
    if (lastSunkShip) {
      Array.from(aliveShipsEl.children).some(function (aliveShipEl) {
        if (aliveShipEl.children.length === lastSunkShip.length) {
          aliveShipEl.remove();
          return true;
        }
        return false;
      });
    }
  };
  var newRoundUpdate = function newRoundUpdate(player1, p1Row, p1Col, player2, p2Row, p2Col) {
    var aliveShipsEls = Array.from(document.getElementsByClassName('alive-ships'));
    updateAliveShipsFor(player1, aliveShipsEls[0]);
    updateAliveShipsFor(player2, aliveShipsEls[1]);

    // if p1Row and p1Col are falsey, the player won therefore the computer can't make a move
    if (p1Row !== null && p1Col !== null) {
      // updating the player's board
      var player1TileBtn = DomController.byId("".concat(player1.name, "_").concat(p1Row, "_").concat(p1Col));
      player1TileBtn.classList.add('attacked');
      player1TileBtn.setAttribute('aria-label', "".concat(player1TileBtn.getAttribute('aria-label'), " attacked"));
    }

    // updating the computer's board
    var player2TileBtn = DomController.byId("".concat(player2.name, "_").concat(p2Row, "_").concat(p2Col));
    if (player2.gameBoard.board[p2Row][p2Col]) {
      player2TileBtn.classList.add('has-ship');
      player2TileBtn.setAttribute('aria-label', "".concat(player2TileBtn.getAttribute('aria-label'), " with ship"));
    }
    player2TileBtn.classList.add('attacked');
    player2TileBtn.setAttribute('aria-label', "".concat(player2TileBtn.getAttribute('aria-label'), " attacked"));
    player2TileBtn.setAttribute('tabindex', '-1');
  };
  var displayGameOver = function displayGameOver(isHuman) {
    var message = isHuman ? '🎉🎉 You won this battle! 🎉🎉' : '🤖🤖 The computer wins this time! 🤖🤖';
    var messageEl = DomController.newElement('h2', '', '', message);
    var playAgainBtn = DomController.newElement('button', '', '', 'Play again');
    playAgainBtn.addEventListener('click', function () {
      DomController.byId('content').innerHTML = '';
      (0,_pages_choose_difficulty_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    });
    DomController.addChildrenTo(DomController.byId('game-over'), [messageEl, playAgainBtn]);
  };
  var displayUndestroyedShipsOf = function displayUndestroyedShipsOf(player) {
    var shipsCoordinates = [];
    var gameBoard = player.gameBoard;
    for (var row = 0; row < gameBoard.board.length; row++) {
      for (var col = 0; col < gameBoard.board[0].length; col++) {
        if (gameBoard.board[row][col] && !_game_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.GameboardService.alreadyAttacked(row, col, gameBoard)) {
          shipsCoordinates.push([row, col]);
        }
      }
    }
    for (var i = 0; i < shipsCoordinates.length; i++) {
      var _shipsCoordinates$i = _slicedToArray(shipsCoordinates[i], 2),
        _row = _shipsCoordinates$i[0],
        _col = _shipsCoordinates$i[1];
      var tileEl = DomController.byId("".concat(player.name, "_").concat(_row, "_").concat(_col));
      tileEl === null || tileEl === void 0 ? void 0 : tileEl.classList.add('has-ship');
      tileEl === null || tileEl === void 0 ? void 0 : tileEl.setAttribute('tabindex', '-1');
      tileEl === null || tileEl === void 0 ? void 0 : tileEl.setAttribute('aria-label', "".concat(tileEl.getAttribute('aria-label'), " with ship"));
    }
  };
  return {
    markupForBoard: markupForBoard,
    markupForAliveShips: markupForAliveShips,
    newRoundUpdate: newRoundUpdate,
    displayGameOver: displayGameOver,
    displayUndestroyedShipsOf: displayUndestroyedShipsOf
  };
}();

/***/ }),

/***/ "./src/game/computer_player.js":
/*!*************************************!*\
  !*** ./src/game/computer_player.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComputerPlayerService": () => (/* binding */ ComputerPlayerService),
/* harmony export */   "default": () => (/* binding */ ComputerPlayer)
/* harmony export */ });
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ "./src/game/gameboard.js");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ "./src/game/game.js");
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship.js */ "./src/game/ship.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/* eslint-disable operator-linebreak, no-lonely-if, no-continue */




var ComputerPlayerService = function () {
  var easyAlgoGetCoordinates = function easyAlgoGetCoordinates(gameBoard) {
    for (var i = 0; i < gameBoard.hitAttacks.length; i++) {
      var _gameBoard$hitAttacks = _slicedToArray(gameBoard.hitAttacks[i], 2),
        hitRow = _gameBoard$hitAttacks[0],
        hitCol = _gameBoard$hitAttacks[1];
      for (var j = -1; j <= 1; j += 2) {
        if (!_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.GameboardService.alreadyAttacked(hitRow + j, hitCol, gameBoard)) {
          if (hitRow + j > -1 && hitRow + j < gameBoard.board.length) return [hitRow + j, hitCol];
        }
        if (!_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.GameboardService.alreadyAttacked(hitRow, hitCol + j, gameBoard)) {
          if (hitCol + j > -1 && hitCol + j < gameBoard.board[0].length) return [hitRow, hitCol + j];
        }
      }
    }
    return [-1, -1];
  };
  var hardAlgoGetCoordinates = function hardAlgoGetCoordinates(gameBoard) {
    for (var i = 0; i < gameBoard.hitAttacks.length; i++) {
      var _gameBoard$hitAttacks2 = _slicedToArray(gameBoard.hitAttacks[i], 2),
        hitRow = _gameBoard$hitAttacks2[0],
        hitCol = _gameBoard$hitAttacks2[1];
      var hitShip = gameBoard.board[hitRow][hitCol];
      if (_ship_js__WEBPACK_IMPORTED_MODULE_2__.ShipService.isSunk(hitShip)) continue;

      // if the ship has been hit only once, we have no way of telling which direction it goes
      if (hitShip.hits.filter(function (pos) {
        return pos === true;
      }).length === 1) {
        // traverse all 4 neighbors
        for (var j = -1; j <= 1; j += 2) {
          if (_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.GameboardService.validToPlay(hitRow + j, hitCol, gameBoard)) {
            if (!_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.GameboardService.neighborsVisibleShip(hitRow + j, hitCol, gameBoard, hitShip)) {
              return [hitRow + j, hitCol];
            }
          }
          if (_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.GameboardService.validToPlay(hitRow, hitCol + j, gameBoard)) {
            if (!_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.GameboardService.neighborsVisibleShip(hitRow, hitCol + j, gameBoard, hitShip)) {
              return [hitRow, hitCol + j];
            }
          }
        }
      } else {
        // traverse only 2 neighbors in the correct direction (vertical or horizontal)
        var _ref = hitShip.isVertical ? [1, 0] : [0, 1],
          _ref2 = _slicedToArray(_ref, 2),
          rowOffset = _ref2[0],
          colOffset = _ref2[1];
        for (var _j = -1; _j <= 1; _j += 2) {
          if (_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.GameboardService.validToPlay(hitRow + _j * rowOffset, hitCol + _j * colOffset, gameBoard)) {
            if (!_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.GameboardService.neighborsVisibleShip(hitRow + _j * rowOffset, hitCol + _j * colOffset, gameBoard, hitShip)) {
              return [hitRow + _j * rowOffset, hitCol + _j * colOffset];
            }
          }
        }
      }
    }
    return [-1, -1];
  };
  return {
    easyAlgoGetCoordinates: easyAlgoGetCoordinates,
    hardAlgoGetCoordinates: hardAlgoGetCoordinates
  };
}();
function ComputerPlayer(name) {
  var gameBoard = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  function randomPlay(game) {
    var avoidShips = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var enemyBoard = _game_js__WEBPACK_IMPORTED_MODULE_1__.GameService.otherPlayerThan(this, game).gameBoard;
    var randomRow = Math.floor(Math.random() * enemyBoard.board.length);
    var randomCol = Math.floor(Math.random() * enemyBoard.board[0].length);
    if (_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.GameboardService.alreadyAttacked(randomRow, randomCol, enemyBoard)) {
      return this.randomPlay(game, avoidShips);
    }
    if (avoidShips && _gameboard_js__WEBPACK_IMPORTED_MODULE_0__.GameboardService.neighborsVisibleShip(randomRow, randomCol, enemyBoard)) {
      return this.randomPlay(game, true);
    }
    enemyBoard.receiveAttack(randomRow, randomCol);
    return [randomRow, randomCol];
  }

  // The computer finds a tile that's part of a ship and then traverses all neighboring tiles and attacks them
  function easyAlgoPlay(game) {
    var enemyBoard = _game_js__WEBPACK_IMPORTED_MODULE_1__.GameService.otherPlayerThan(this, game).gameBoard;
    var _ComputerPlayerServic = ComputerPlayerService.easyAlgoGetCoordinates(enemyBoard),
      _ComputerPlayerServic2 = _slicedToArray(_ComputerPlayerServic, 2),
      row = _ComputerPlayerServic2[0],
      col = _ComputerPlayerServic2[1];
    if (row === -1 && col === -1) return this.randomPlay(game);
    enemyBoard.receiveAttack(row, col);
    return [row, col];
  }

  // The computer finds a tile that's part of a ship, then based on whether it sank the ship, it traverses it's
  // neighboring tiles in the correct direction and, once the ship is sunk, it never picks it's neighboring tiles,
  // because another ship can't be there
  function hardAlgoPlay(game) {
    var enemyBoard = _game_js__WEBPACK_IMPORTED_MODULE_1__.GameService.otherPlayerThan(this, game).gameBoard;
    var _ComputerPlayerServic3 = ComputerPlayerService.hardAlgoGetCoordinates(enemyBoard),
      _ComputerPlayerServic4 = _slicedToArray(_ComputerPlayerServic3, 2),
      row = _ComputerPlayerServic4[0],
      col = _ComputerPlayerServic4[1];
    if (row === -1 && col === -1) return this.randomPlay(game, true);
    enemyBoard.receiveAttack(row, col);
    return [row, col];
  }
  return {
    name: name,
    gameBoard: gameBoard,
    randomPlay: randomPlay,
    easyAlgoPlay: easyAlgoPlay,
    hardAlgoPlay: hardAlgoPlay
  };
}

/***/ }),

/***/ "./src/game/game.js":
/*!**************************!*\
  !*** ./src/game/game.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameService": () => (/* binding */ GameService),
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ "./src/game/gameboard.js");
/* eslint-disable operator-linebreak */


var GameService = function () {
  var otherPlayerThan = function otherPlayerThan(player, game) {
    var _ref = [game.player1, game.player2],
      player1 = _ref[0],
      player2 = _ref[1];
    return player1 === player ? player2 : player1;
  };
  var isGameOverIn = function isGameOverIn(game) {
    var _ref2 = [game.player1, game.player2],
      player1 = _ref2[0],
      player2 = _ref2[1];
    return _gameboard_js__WEBPACK_IMPORTED_MODULE_0__.GameboardService.allShipsSunkIn(player1.gameBoard.board) || _gameboard_js__WEBPACK_IMPORTED_MODULE_0__.GameboardService.allShipsSunkIn(player2.gameBoard.board);
  };
  return {
    otherPlayerThan: otherPlayerThan,
    isGameOverIn: isGameOverIn
  };
}();
function Game(player1, player2) {
  var round = 1;
  var nextRound = function nextRound() {
    round = 2;
    return round;
  };
  var getRound = function getRound() {
    return round;
  };
  return {
    player1: player1,
    player2: player2,
    getRound: getRound,
    nextRound: nextRound
  };
}

/***/ }),

/***/ "./src/game/gameboard.js":
/*!*******************************!*\
  !*** ./src/game/gameboard.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameboardService": () => (/* binding */ GameboardService),
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/game/ship.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/* eslint-disable operator-linebreak, implicit-arrow-linebreak */


var GameboardService = function () {
  var display = function display(board) {
    return board.map(function (boardRow) {
      return boardRow.map(function (pos) {
        return pos === 0 ? 0 : 1;
      });
    });
  };
  var positionValidFor = function positionValidFor(ship, row, col, board) {
    var _ref = ship.isVertical ? [1, 0] : [0, 1],
      _ref2 = _slicedToArray(_ref, 2),
      rowOffset = _ref2[0],
      colOffset = _ref2[1];
    for (var i = 0; i < ship.length; i++) {
      var _board, _board2, _board3, _board4;
      if (row + i * rowOffset >= 10 || col + i * colOffset >= 10 || board[row + i * rowOffset][col + i * colOffset] !== 0) {
        return false;
      }

      // checking whether it's next to an existing ship
      if ((_board = board[row + i * rowOffset + 1]) !== null && _board !== void 0 && _board[col + i * colOffset] || (_board2 = board[row + i * rowOffset - 1]) !== null && _board2 !== void 0 && _board2[col + i * colOffset] || (_board3 = board[row + i * rowOffset]) !== null && _board3 !== void 0 && _board3[col + i * colOffset + 1] || (_board4 = board[row + i * rowOffset]) !== null && _board4 !== void 0 && _board4[col + i * colOffset - 1]) {
        return false;
      }
    }
    return true;
  };
  var allShipsSunkIn = function allShipsSunkIn(board) {
    for (var row = 0; row < board.length; row++) {
      for (var col = 0; col < board[0].length; col++) {
        if (board[row][col] && !_ship_js__WEBPACK_IMPORTED_MODULE_0__.ShipService.isSunk(board[row][col])) {
          return false;
        }
      }
    }
    return true;
  };
  var alreadyAttacked = function alreadyAttacked(row, col, gameBoard) {
    if (row < 0 || row >= gameBoard.board.length || col >= gameBoard.board.length || col < 0) return false;
    var attacks = gameBoard.allAttacks;
    for (var i = 0; i < attacks.length; i++) {
      var _attacks$i = _slicedToArray(attacks[i], 2),
        r = _attacks$i[0],
        c = _attacks$i[1];
      if (r === row && c === col) {
        return true;
      }
    }
    return false;
  };

  // Valid coordinates and not already attacked
  var validToPlay = function validToPlay(row, col, gameBoard) {
    return !alreadyAttacked(row, col, gameBoard) && row > -1 && row < gameBoard.board.length && col > -1 && col < gameBoard.board[0].length;
  };
  var neighborsVisibleShip = function neighborsVisibleShip(row, col, gameBoard) {
    var except = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    for (var i = -1; i <= 1; i += 2) {
      var _gameBoard$board$ship, _gameBoard$board$row;
      var shipRow = row + i;
      var shipCol = col + i;
      var ship1 = (_gameBoard$board$ship = gameBoard.board[shipRow]) === null || _gameBoard$board$ship === void 0 ? void 0 : _gameBoard$board$ship[col];
      var ship2 = (_gameBoard$board$row = gameBoard.board[row]) === null || _gameBoard$board$row === void 0 ? void 0 : _gameBoard$board$row[shipCol];
      if (ship1 && ship1 !== except && alreadyAttacked(shipRow, col, gameBoard) || ship2 && ship2 !== except && alreadyAttacked(row, shipCol, gameBoard)) {
        return true;
      }
    }
    return false;
  };
  var aliveShipsOf = function aliveShipsOf(gameBoard) {
    return _toConsumableArray(gameBoard.aliveShips);
  };
  return {
    display: display,
    positionValidFor: positionValidFor,
    allShipsSunkIn: allShipsSunkIn,
    alreadyAttacked: alreadyAttacked,
    aliveShipsOf: aliveShipsOf,
    validToPlay: validToPlay,
    neighborsVisibleShip: neighborsVisibleShip
  };
}();
function Gameboard() {
  var board = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
  var missedAttacks = [];
  var allAttacks = [];
  var hitAttacks = [];
  var allShips = [];
  var aliveShips = new Set();
  var lastSunkShip;
  var getLastSunkShip = function getLastSunkShip() {
    return lastSunkShip;
  };
  var placeShip = function placeShip(ship) {
    var row = Math.floor(Math.random() * 10);
    var col = Math.floor(Math.random() * 10);
    while (!GameboardService.positionValidFor(ship, row, col, board)) {
      row = Math.floor(Math.random() * 10);
      col = Math.floor(Math.random() * 10);
    }
    for (var i = 0; i < ship.length; i++) {
      board[row + i * ship.isVertical][col + i * !ship.isVertical] = ship;
    }
  };
  var placeShipsInitial = function placeShipsInitial() {
    var shipSizes = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
    shipSizes.forEach(function (size) {
      var ship = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__["default"])(size, Math.random() >= 0.5);
      placeShip(ship);
      allShips.push(ship);
      aliveShips.add(ship);
    });
  };
  function receiveAttack(row, col) {
    if (GameboardService.alreadyAttacked(row, col, this)) return false;
    allAttacks.push([row, col]);
    if (board[row][col]) {
      hitAttacks.push([row, col]);
      var ship = board[row][col];
      ship.hit(_ship_js__WEBPACK_IMPORTED_MODULE_0__.ShipService.hitPosition(row, col, board));
      if (_ship_js__WEBPACK_IMPORTED_MODULE_0__.ShipService.isSunk(ship)) {
        aliveShips.delete(ship);
        lastSunkShip = ship;
      } else {
        lastSunkShip = null;
      }
    } else {
      missedAttacks.push([row, col]);
      lastSunkShip = null;
    }
    return true;
  }
  placeShipsInitial();
  return {
    board: board,
    receiveAttack: receiveAttack,
    missedAttacks: missedAttacks,
    allAttacks: allAttacks,
    hitAttacks: hitAttacks,
    allShips: allShips,
    aliveShips: aliveShips,
    lastSunkShip: lastSunkShip,
    getLastSunkShip: getLastSunkShip
  };
}

/***/ }),

/***/ "./src/game/player.js":
/*!****************************!*\
  !*** ./src/game/player.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ "./src/game/game.js");
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard.js */ "./src/game/gameboard.js");


function Player(name) {
  var gameBoard = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  function play(game, row, col) {
    var enemyBoard = _game_js__WEBPACK_IMPORTED_MODULE_0__.GameService.otherPlayerThan(this, game).gameBoard;
    return enemyBoard.receiveAttack(row, col);
  }
  return {
    name: name,
    gameBoard: gameBoard,
    play: play
  };
}

/***/ }),

/***/ "./src/game/ship.js":
/*!**************************!*\
  !*** ./src/game/ship.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShipService": () => (/* binding */ ShipService),
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ShipService = function () {
  var isSunk = function isSunk(ship) {
    return ship.hits.every(function (position) {
      return position === true;
    });
  };
  var hitPosition = function hitPosition(row, col, board) {
    var ship = board[row][col];
    var _ref = ship.isVertical ? [1, 0] : [0, 1],
      _ref2 = _slicedToArray(_ref, 2),
      rowOffset = _ref2[0],
      colOffset = _ref2[1];
    var shipCoordinates = [];
    for (var i = 0; i < ship.length; i++) {
      var _board, _board2;
      if (((_board = board[row + i * rowOffset]) === null || _board === void 0 ? void 0 : _board[col + i * colOffset]) === ship) {
        shipCoordinates.push([row + i * rowOffset, col + i * colOffset]);
      }
      if (((_board2 = board[row - i * rowOffset]) === null || _board2 === void 0 ? void 0 : _board2[col - i * colOffset]) === ship) {
        shipCoordinates.push([row - i * rowOffset, col - i * colOffset]);
      }
    }
    shipCoordinates.sort(ship.isVertical ? function (a, b) {
      return a[0] - b[0];
    } : function (a, b) {
      return a[1] - b[1];
    });
    for (var _i2 = 0; _i2 < shipCoordinates.length; _i2++) {
      var _shipCoordinates$_i = _slicedToArray(shipCoordinates[_i2], 2),
        r = _shipCoordinates$_i[0],
        c = _shipCoordinates$_i[1];
      if (r === row && c === col) {
        return _i2;
      }
    }
    return false;
  };
  return {
    isSunk: isSunk,
    hitPosition: hitPosition
  };
}();
function Ship(length) {
  var isVertical = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var hits = new Array(length).fill(false);
  var hit = function hit(position) {
    hits[position] = true;
  };
  return {
    length: length,
    hits: hits,
    hit: hit,
    isVertical: isVertical
  };
}

/***/ }),

/***/ "./src/pages/choose_difficulty.js":
/*!****************************************!*\
  !*** ./src/pages/choose_difficulty.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ paintChooseDifficultyPage)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom.js */ "./src/dom.js");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ "./src/pages/game.js");
/* harmony import */ var _game_game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game/game.js */ "./src/game/game.js");
/* harmony import */ var _game_player_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game/player.js */ "./src/game/player.js");
/* harmony import */ var _game_computer_player_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game/computer_player.js */ "./src/game/computer_player.js");





function paintChooseDifficultyPage() {
  var contentEl = _dom_js__WEBPACK_IMPORTED_MODULE_0__.DomController.byId('content');
  var chooseDifficultyEl = _dom_js__WEBPACK_IMPORTED_MODULE_0__.DomController.newElement('div', '', 'choose-difficulty');
  var heading = _dom_js__WEBPACK_IMPORTED_MODULE_0__.DomController.newElement('h2', '', '', 'Choose a difficulty:');
  var difficultiesEl = _dom_js__WEBPACK_IMPORTED_MODULE_0__.DomController.newElement('ul', '', 'difficulties');
  var difficulties = ['easy', 'medium', 'hard'];
  difficulties.forEach(function (difficulty) {
    var difficultyEl = _dom_js__WEBPACK_IMPORTED_MODULE_0__.DomController.newElement('li', "difficulty ".concat(difficulty), '');
    var difficultyBtn = _dom_js__WEBPACK_IMPORTED_MODULE_0__.DomController.newElement('button', '', '', difficulty);
    difficultyBtn.addEventListener('click', function () {
      contentEl.innerHTML = '';
      (0,_game_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_game_game_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_game_player_js__WEBPACK_IMPORTED_MODULE_3__["default"])('human'), (0,_game_computer_player_js__WEBPACK_IMPORTED_MODULE_4__["default"])('computer')), difficulty);
    });
    difficultyEl.appendChild(difficultyBtn);
    difficultiesEl.appendChild(difficultyEl);
  });
  _dom_js__WEBPACK_IMPORTED_MODULE_0__.DomController.addChildrenTo(chooseDifficultyEl, [heading, difficultiesEl]);
  contentEl.appendChild(chooseDifficultyEl);
}

/***/ }),

/***/ "./src/pages/game.js":
/*!***************************!*\
  !*** ./src/pages/game.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ paintGamePage)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom.js */ "./src/dom.js");
/* harmony import */ var _game_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/game.js */ "./src/game/game.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/* eslint-disable no-extra-semi, import/no-cycle */



function paintGamePage(game, difficulty) {
  var contentEl = _dom_js__WEBPACK_IMPORTED_MODULE_0__.DomController.byId('content');
  var gameboardsEl = _dom_js__WEBPACK_IMPORTED_MODULE_0__.DomController.newElement('div', '', 'game-boards');
  var gameOverEl = _dom_js__WEBPACK_IMPORTED_MODULE_0__.DomController.newElement('div', '', 'game-over');
  _dom_js__WEBPACK_IMPORTED_MODULE_0__.DomController.addChildrenTo(contentEl, [gameboardsEl, gameOverEl]);
  var _ref = [game.player1, game.player2],
    player1 = _ref[0],
    player2 = _ref[1];
  var gameOver = false;
  var handleTileClick = function handleTileClick(row, col) {
    if (gameOver) return;
    if (player1.play(game, row, col)) {
      if (_game_game_js__WEBPACK_IMPORTED_MODULE_1__.GameService.isGameOverIn(game)) {
        // the player won
        gameOver = true;
        _dom_js__WEBPACK_IMPORTED_MODULE_0__.DomGame.newRoundUpdate(player1, null, null, player2, row, col);
        _dom_js__WEBPACK_IMPORTED_MODULE_0__.DomGame.displayGameOver(true);
      } else {
        var randomRow;
        var randomCol;

        // computer taking turn
        switch (difficulty) {
          case 'easy':
            ;
            var _player2$randomPlay = player2.randomPlay(game);
            var _player2$randomPlay2 = _slicedToArray(_player2$randomPlay, 2);
            randomRow = _player2$randomPlay2[0];
            randomCol = _player2$randomPlay2[1];
            break;
          case 'medium':
            ;
            var _player2$easyAlgoPlay = player2.easyAlgoPlay(game);
            var _player2$easyAlgoPlay2 = _slicedToArray(_player2$easyAlgoPlay, 2);
            randomRow = _player2$easyAlgoPlay2[0];
            randomCol = _player2$easyAlgoPlay2[1];
            break;
          case 'hard':
            ;
            var _player2$hardAlgoPlay = player2.hardAlgoPlay(game);
            var _player2$hardAlgoPlay2 = _slicedToArray(_player2$hardAlgoPlay, 2);
            randomRow = _player2$hardAlgoPlay2[0];
            randomCol = _player2$hardAlgoPlay2[1];
            break;
          default:
            ;
            var _player2$randomPlay3 = player2.randomPlay(game);
            var _player2$randomPlay4 = _slicedToArray(_player2$randomPlay3, 2);
            randomRow = _player2$randomPlay4[0];
            randomCol = _player2$randomPlay4[1];
        }
        if (_game_game_js__WEBPACK_IMPORTED_MODULE_1__.GameService.isGameOverIn(game)) {
          // the computer won
          gameOver = true;
          _dom_js__WEBPACK_IMPORTED_MODULE_0__.DomGame.displayGameOver(false);
          _dom_js__WEBPACK_IMPORTED_MODULE_0__.DomGame.displayUndestroyedShipsOf(player2);
        }
        _dom_js__WEBPACK_IMPORTED_MODULE_0__.DomGame.newRoundUpdate(player1, randomRow, randomCol, player2, row, col);
      }
    }
  };
  var player1BoardEl = _dom_js__WEBPACK_IMPORTED_MODULE_0__.DomGame.markupForBoard(player1.gameBoard.board, player1.name);
  var player2BoardEl = _dom_js__WEBPACK_IMPORTED_MODULE_0__.DomGame.markupForBoard(player2.gameBoard.board, player2.name);
  player1BoardEl.prepend(_dom_js__WEBPACK_IMPORTED_MODULE_0__.DomGame.markupForAliveShips(player1));
  player2BoardEl.prepend(_dom_js__WEBPACK_IMPORTED_MODULE_0__.DomGame.markupForAliveShips(player2));
  _dom_js__WEBPACK_IMPORTED_MODULE_0__.DomController.byId('game-boards').appendChild(player1BoardEl);
  _dom_js__WEBPACK_IMPORTED_MODULE_0__.DomController.byId('game-boards').appendChild(player2BoardEl);
  var _loop = function _loop(r) {
    var _loop2 = function _loop2(c) {
      var player1TileBtn = _dom_js__WEBPACK_IMPORTED_MODULE_0__.DomController.byId("".concat(player1.name, "_").concat(r, "_").concat(c));
      player1TileBtn.setAttribute('tabindex', '-1');
      player1TileBtn.setAttribute('aria-label', 'My tile');
      if (player1.gameBoard.board[r][c]) {
        player1TileBtn.classList.add('has-ship');
        player1TileBtn.setAttribute('aria-label', 'My tile with ship');
      }
      var player2TileBtn = _dom_js__WEBPACK_IMPORTED_MODULE_0__.DomController.byId("".concat(player2.name, "_").concat(r, "_").concat(c));
      player2TileBtn.setAttribute('aria-label', 'Enemy tile');
      player2TileBtn.addEventListener('click', function () {
        return handleTileClick(r, c);
      });
    };
    for (var c = 0; c < player1.gameBoard.board[0].length; c++) {
      _loop2(c);
    }
  };
  for (var r = 0; r < player1.gameBoard.board.length; r++) {
    _loop(r);
  }
}

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/style.scss */ "./src/assets/styles/style.scss");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _pages_choose_difficulty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/choose_difficulty.js */ "./src/pages/choose_difficulty.js");
/* harmony import */ var _assets_images_favicon_16x16_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/favicon-16x16.png */ "./src/assets/images/favicon-16x16.png");




(0,_pages_choose_difficulty_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
var favicon = _dom_js__WEBPACK_IMPORTED_MODULE_1__.DomController.newElement('link');
favicon.setAttribute('rel', 'icon');
favicon.setAttribute('type', 'image/x-icon');
favicon.setAttribute('href', _assets_images_favicon_16x16_png__WEBPACK_IMPORTED_MODULE_3__);
document.head.appendChild(favicon);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDO0FBQzVDeUosT0FBTyxDQUFDekosWUFBWSxDQUFDLE1BQU0sRUFBRXdKLDZEQUFPLENBQUM7QUFDckMxSixRQUFRLENBQUM0SixJQUFJLENBQUNwSixXQUFXLENBQUNtSixPQUFPLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXNzZXRzL3N0eWxlcy9zdHlsZS5zY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Fzc2V0cy9zdHlsZXMvc3R5bGUuc2Nzcz9kODIyIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL2NvbXB1dGVyX3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wYWdlcy9jaG9vc2VfZGlmZmljdWx0eS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BhZ2VzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9ncmVhdHZpYmVzLXJlZ3VsYXItd2ViZm9udC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL2dyZWF0dmliZXMtcmVndWxhci13ZWJmb250LndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiW2NsYXNzJD0tYm9hcmRdIGJ1dHRvbiwgI2dhbWUtb3ZlciBidXR0b24sICNkaWZmaWN1bHRpZXMgLmRpZmZpY3VsdHkgYnV0dG9uIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XFxufVxcblxcbiNnYW1lLW92ZXIgYnV0dG9uLCAjZGlmZmljdWx0aWVzIC5kaWZmaWN1bHR5IGJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDRweCAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDb3VyaWVyIE5ld1xcXCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiZ3JlYXRfdmliZXNcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IGdyZWF0X3ZpYmVzLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NiwgMjQ2LCAyNDYpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5hLFxcbnAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG51bCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgbWFyZ2luOiA4cHggMDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5hbGl2ZS1zaGlwcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDRweDtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi5hbGl2ZS1zaGlwcyAuYWxpdmUtc2hpcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uYWxpdmUtc2hpcHMgLmFsaXZlLXNoaXAgLnNoaXAtYmxvY2sge1xcbiAgd2lkdGg6IDF2dztcXG4gIGhlaWdodDogMXZ3O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcbi5hbGl2ZS1zaGlwcyAuYWxpdmUtc2hpcCAuc2hpcC1ibG9jazpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG59XFxuXFxuI2dhbWUtYm9hcmRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGdhcDogMjRweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuW2NsYXNzJD0tYm9hcmRdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycHg7XFxufVxcbltjbGFzcyQ9LWJvYXJkXSAucm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDJweDtcXG59XFxuW2NsYXNzJD0tYm9hcmRdIGJ1dHRvbiB7XFxuICB3aWR0aDogNHZ3O1xcbiAgaGVpZ2h0OiA0dnc7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5bY2xhc3MkPS1ib2FyZF0gYnV0dG9uLmF0dGFja2VkOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiWFxcXCI7XFxuICBjb2xvcjogcmdiKDUwLCA1MCwgNTApO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbltjbGFzcyQ9LWJvYXJkXTpudGgtb2YtdHlwZSgxKSBidXR0b24uaGFzLXNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbn1cXG5bY2xhc3MkPS1ib2FyZF06bnRoLW9mLXR5cGUoMSkgLmFsaXZlLXNoaXBzIC5zaGlwLWJsb2NrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGViZjI7XFxufVxcbltjbGFzcyQ9LWJvYXJkXTpudGgtb2YtdHlwZSgyKSBidXR0b246aG92ZXIsXFxuW2NsYXNzJD0tYm9hcmRdOm50aC1vZi10eXBlKDIpIGJ1dHRvbjpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxufVxcbltjbGFzcyQ9LWJvYXJkXTpudGgtb2YtdHlwZSgyKSBidXR0b24uaGFzLXNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG59XFxuW2NsYXNzJD0tYm9hcmRdOm50aC1vZi10eXBlKDIpIC5hbGl2ZS1zaGlwcyAuc2hpcC1ibG9jayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVhZWFlO1xcbn1cXG5cXG4jZ2FtZS1vdmVyIHtcXG4gIG1hcmdpbjogMTZweCAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxNnB4O1xcbn1cXG4jZ2FtZS1vdmVyIGgyIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbiNnYW1lLW92ZXIgYnV0dG9uOmhvdmVyLCAjZ2FtZS1vdmVyIGJ1dHRvbjpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBtaW4taGVpZ2h0OiA2NHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5mb290ZXIgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogbGlnaHRjb3JhbDtcXG59XFxuZm9vdGVyIGE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xcbiAgI2dhbWUtYm9hcmRzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIFtjbGFzcyQ9LWJvYXJkXSBidXR0b24ge1xcbiAgICB3aWR0aDogOHZ3O1xcbiAgICBoZWlnaHQ6IDh2dztcXG4gIH1cXG4gIGZvb3RlciB7XFxuICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XFxuICB9XFxuICAuc2hpcC1ibG9jayB7XFxuICAgIHdpZHRoOiAydncgIWltcG9ydGFudDtcXG4gICAgaGVpZ2h0OiAydncgIWltcG9ydGFudDtcXG4gIH1cXG4gICNnYW1lLW92ZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xcbiAgfVxcbn1cXG4jY2hvb3NlLWRpZmZpY3VsdHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMzJweDtcXG4gIG1hcmdpbi10b3A6IDEwdmg7XFxufVxcbiNjaG9vc2UtZGlmZmljdWx0eSBoMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuI2RpZmZpY3VsdGllcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDE2cHg7XFxufVxcbiNkaWZmaWN1bHRpZXMgLmRpZmZpY3VsdHkuZWFzeSBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuI2RpZmZpY3VsdGllcyAuZGlmZmljdWx0eS5lYXN5IGJ1dHRvbjpmb2N1cywgI2RpZmZpY3VsdGllcyAuZGlmZmljdWx0eS5lYXN5IGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNmNWJjO1xcbn1cXG4jZGlmZmljdWx0aWVzIC5kaWZmaWN1bHR5Lm1lZGl1bSBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZhZDtcXG59XFxuI2RpZmZpY3VsdGllcyAuZGlmZmljdWx0eS5tZWRpdW0gYnV0dG9uOmZvY3VzLCAjZGlmZmljdWx0aWVzIC5kaWZmaWN1bHR5Lm1lZGl1bSBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHR5ZWxsb3c7XFxufVxcbiNkaWZmaWN1bHRpZXMgLmRpZmZpY3VsdHkuaGFyZCBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG59XFxuI2RpZmZpY3VsdGllcyAuZGlmZmljdWx0eS5oYXJkIGJ1dHRvbjpmb2N1cywgI2RpZmZpY3VsdGllcyAuZGlmZmljdWx0eS5oYXJkIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVhZWFlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9fY29uZmlnLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUVFLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQ0FGOztBQWRBO0VBQ0UsMEJBQUE7RUFDQSxvSEFBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7QUFnQkY7QUFiQTtFQUNFLFNBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtBQWNGOztBQVhBOzs7RUFHRSxnQkFBQTtBQWNGOztBQVhBOzs7Ozs7OztFQVFFLFNBQUE7QUFjRjs7QUFYQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFjRjs7QUFYQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQWNGOztBQVhBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQWNGO0FBWkU7RUFDRSxhQUFBO0FBY0o7QUFaSTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUFjTjtBQVpNO0VBQ0UsaUJBQUE7QUFjUjs7QUFSQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFXRjs7QUFSQTtFQUVFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUFVRjtBQVJFO0VBQ0UsYUFBQTtFQUNBLFFBQUE7QUFVSjtBQVBFO0VBRUUsVUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFRSjtBQUxNO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFPUjtBQUFJO0VBQ0UsMkJBQUE7QUFFTjtBQUNJO0VBQ0UseUJBQUE7QUFDTjtBQUtJOztFQUVFLDJCQUFBO0FBSE47QUFNSTtFQUNFLDRCQUFBO0FBSk47QUFPSTtFQUNFLHlCQUFBO0FBTE47O0FBVUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFQRjtBQVNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBUEo7QUFhSTtFQUVFLHlCQUFBO0FBWk47O0FBaUJBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBZEY7QUFnQkU7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0FBZEo7QUFnQkk7RUFDRSw2QkFBQTtBQWROOztBQW1CQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSxtQkFBQTtFQWhCRjtFQW1CQTtJQUNFLFVBQUE7SUFDQSxXQUFBO0VBakJGO0VBb0JBO0lBQ0UsZ0JBQUE7RUFsQkY7RUFxQkE7SUFDRSxxQkFBQTtJQUNBLHNCQUFBO0VBbkJGO0VBc0JBO0lBQ0UsbUJBQUE7RUFwQkY7QUFDRjtBQXVCQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBckJGO0FBdUJFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQXJCSjs7QUF5QkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUF0QkY7QUE2Qkk7RUFDRSw0QkFBQTtBQTNCTjtBQTZCTTtFQUVFLHlCQUFBO0FBNUJSO0FBZ0NJO0VBQ0UseUJBQUE7QUE5Qk47QUFnQ007RUFFRSw2QkFBQTtBQS9CUjtBQW1DSTtFQUNFLDRCQUFBO0FBakNOO0FBbUNNO0VBRUUseUJBQUE7QUFsQ1JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJXJlc2V0LWFwcGVhcmFuY2Uge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcXG59XFxuXFxuJWJ1dHRvbiB7XFxuICBAZXh0ZW5kICVyZXNldC1hcHBlYXJhbmNlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiA0cHggMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXCIsXCJAdXNlICdjb25maWcnO1xcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdncmVhdF92aWJlcyc7XFxuICBzcmM6IHVybCgnLi4vZm9udHMvZ3JlYXR2aWJlcy1yZWd1bGFyLXdlYmZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgIHVybCgnLi4vZm9udHMvZ3JlYXR2aWJlcy1yZWd1bGFyLXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogZ3JlYXRfdmliZXMsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ2LCAyNDYsIDI0Nik7XFxuICBoZWlnaHQ6IDEwMHZoO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbmEsXFxucCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbnVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ubG9nbyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBtYXJnaW46IDhweCAwO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmFsaXZlLXNoaXBzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG5cXG4gIC5hbGl2ZS1zaGlwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgLnNoaXAtYmxvY2sge1xcbiAgICAgIHdpZHRoOiAxdnc7XFxuICAgICAgaGVpZ2h0OiAxdnc7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFxuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuI2dhbWUtYm9hcmRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGdhcDogMjRweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuW2NsYXNzJD0nLWJvYXJkJ10ge1xcbiAgLy8gaHVtYW4tYm9hcmQsIGNvbXB1dGVyLWJvYXJkXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnB4O1xcblxcbiAgLnJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnB4O1xcbiAgfVxcblxcbiAgYnV0dG9uIHtcXG4gICAgQGV4dGVuZCAlcmVzZXQtYXBwZWFyYW5jZTtcXG4gICAgd2lkdGg6IDR2dztcXG4gICAgaGVpZ2h0OiA0dnc7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcbiAgICAmLmF0dGFja2VkIHtcXG4gICAgICAmOjphZnRlciB7XFxuICAgICAgICBjb250ZW50OiAnWCc7XFxuICAgICAgICBjb2xvcjogcmdiKDUwLCA1MCwgNTApO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAvLyBIVU1BTlxcbiAgJjpudGgtb2YtdHlwZSgxKSB7XFxuICAgIGJ1dHRvbi5oYXMtc2hpcCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgICB9XFxuXFxuICAgIC5hbGl2ZS1zaGlwcyAuc2hpcC1ibG9jayB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbihsaWdodGJsdWUsIDEwJSk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC8vIENPTVBVVEVSXFxuICAmOm50aC1vZi10eXBlKDIpIHtcXG4gICAgYnV0dG9uOmhvdmVyLFxcbiAgICBidXR0b246Zm9jdXMge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gICAgfVxcblxcbiAgICBidXR0b24uaGFzLXNoaXAge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxuICAgIH1cXG5cXG4gICAgLmFsaXZlLXNoaXBzIC5zaGlwLWJsb2NrIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKGxpZ2h0Y29yYWwsIDEwJSk7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuI2dhbWUtb3ZlciB7XFxuICBtYXJnaW46IDE2cHggMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTZweDtcXG5cXG4gIGgyIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgfVxcblxcbiAgYnV0dG9uIHtcXG4gICAgQGV4dGVuZCAlYnV0dG9uO1xcblxcbiAgICAmOmhvdmVyLFxcbiAgICAmOmZvY3VzIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4od2hpdGUsIDEwJSk7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuZm9vdGVyIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbWluLWhlaWdodDogNjRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDI1MCwgMjUwKTtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiBsaWdodGNvcmFsO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcXG4gICNnYW1lLWJvYXJkcyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICBbY2xhc3MkPSctYm9hcmQnXSBidXR0b24ge1xcbiAgICB3aWR0aDogOHZ3O1xcbiAgICBoZWlnaHQ6IDh2dztcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XFxuICB9XFxuXFxuICAuc2hpcC1ibG9jayB7XFxuICAgIHdpZHRoOiAydncgIWltcG9ydGFudDtcXG4gICAgaGVpZ2h0OiAydncgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gICNnYW1lLW92ZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xcbiAgfVxcbn1cXG5cXG4jY2hvb3NlLWRpZmZpY3VsdHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMzJweDtcXG4gIG1hcmdpbi10b3A6IDEwdmg7XFxuXFxuICBoMiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICB9XFxufVxcblxcbiNkaWZmaWN1bHRpZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxNnB4O1xcblxcbiAgLmRpZmZpY3VsdHkge1xcbiAgICBidXR0b24ge1xcbiAgICAgIEBleHRlbmQgJWJ1dHRvbjtcXG4gICAgfVxcblxcbiAgICAmLmVhc3kgYnV0dG9uIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcblxcbiAgICAgICY6Zm9jdXMsXFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKGxpZ2h0Z3JlZW4sIDEwJSk7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgICYubWVkaXVtIGJ1dHRvbiB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKGxpZ2h0eWVsbG93LCAxMCUpO1xcblxcbiAgICAgICY6Zm9jdXMsXFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHllbGxvdztcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgJi5oYXJkIGJ1dHRvbiB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG5cXG4gICAgICAmOmZvY3VzLFxcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbihsaWdodGNvcmFsLCAxMCUpO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuXG5pbXBvcnQgeyBHYW1lYm9hcmRTZXJ2aWNlIH0gZnJvbSAnLi9nYW1lL2dhbWVib2FyZC5qcydcbmltcG9ydCBwYWludENob29zZURpZmZpY3VsdHlQYWdlIGZyb20gJy4vcGFnZXMvY2hvb3NlX2RpZmZpY3VsdHkuanMnXG5cbmV4cG9ydCBjb25zdCBEb21Db250cm9sbGVyID0gKCgpID0+IHtcbiAgY29uc3QgbmV3RWxlbWVudCA9ICh0eXBlLCBjbHMgPSAnJywgaWQgPSAnJywgdGV4dCA9ICcnKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSlcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbHMpXG4gICAgZWxlbWVudC5pZCA9IGlkXG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHRcblxuICAgIHJldHVybiBlbGVtZW50XG4gIH1cblxuICBjb25zdCBhZGRDaGlsZHJlblRvID0gKGVsZW1lbnQsIGNoaWxkcmVuKSA9PiB7XG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpKVxuICB9XG5cbiAgY29uc3QgYnlJZCA9IChpZCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXG5cbiAgcmV0dXJuIHsgbmV3RWxlbWVudCwgYWRkQ2hpbGRyZW5UbywgYnlJZCB9XG59KSgpXG5cbmV4cG9ydCBjb25zdCBEb21HYW1lID0gKCgpID0+IHtcbiAgY29uc3QgbWFya3VwRm9yQm9hcmQgPSAoYm9hcmQsIG5hbWUpID0+IHtcbiAgICBjb25zdCBib2FyZEVsID0gRG9tQ29udHJvbGxlci5uZXdFbGVtZW50KCdzZWN0aW9uJywgYCR7bmFtZX0tYm9hcmRgKVxuXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgYm9hcmQubGVuZ3RoOyByb3crKykge1xuICAgICAgY29uc3Qgcm93RWwgPSBEb21Db250cm9sbGVyLm5ld0VsZW1lbnQoJ2RpdicsICdyb3cnKVxuXG4gICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBib2FyZFswXS5sZW5ndGg7IGNvbCsrKSB7XG4gICAgICAgIGNvbnN0IHRpbGVCdG4gPSBEb21Db250cm9sbGVyLm5ld0VsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIHRpbGVCdG4uaWQgPSBgJHtuYW1lfV8ke3Jvd31fJHtjb2x9YFxuICAgICAgICByb3dFbC5hcHBlbmRDaGlsZCh0aWxlQnRuKVxuICAgICAgfVxuXG4gICAgICBib2FyZEVsLmFwcGVuZENoaWxkKHJvd0VsKVxuICAgIH1cblxuICAgIHJldHVybiBib2FyZEVsXG4gIH1cblxuICBjb25zdCBtYXJrdXBGb3JBbGl2ZVNoaXBzID0gKHBsYXllcikgPT4ge1xuICAgIGNvbnN0IHBsYXllckFsaXZlU2hpcHNFbCA9IERvbUNvbnRyb2xsZXIubmV3RWxlbWVudCgnZGl2JywgJ2FsaXZlLXNoaXBzJylcbiAgICBHYW1lYm9hcmRTZXJ2aWNlLmFsaXZlU2hpcHNPZihwbGF5ZXIuZ2FtZUJvYXJkKS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBjb25zdCBhbGl2ZVNoaXBFbCA9IERvbUNvbnRyb2xsZXIubmV3RWxlbWVudCgnZGl2JywgJ2FsaXZlLXNoaXAnKVxuICAgICAgYWxpdmVTaGlwRWwuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgYCR7cGxheWVyLm5hbWV9IGFsaXZlIHNoaXAgb2YgbGVuZ3RoICR7c2hpcC5sZW5ndGh9YClcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHNoaXBCbG9jayA9IERvbUNvbnRyb2xsZXIubmV3RWxlbWVudCgnc3BhbicsICdzaGlwLWJsb2NrJylcbiAgICAgICAgYWxpdmVTaGlwRWwuYXBwZW5kQ2hpbGQoc2hpcEJsb2NrKVxuICAgICAgfVxuXG4gICAgICBwbGF5ZXJBbGl2ZVNoaXBzRWwuYXBwZW5kQ2hpbGQoYWxpdmVTaGlwRWwpXG4gICAgfSlcblxuICAgIHJldHVybiBwbGF5ZXJBbGl2ZVNoaXBzRWxcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZUFsaXZlU2hpcHNGb3IgPSAocGxheWVyLCBhbGl2ZVNoaXBzRWwpID0+IHtcbiAgICBjb25zdCBsYXN0U3Vua1NoaXAgPSBwbGF5ZXIuZ2FtZUJvYXJkLmdldExhc3RTdW5rU2hpcCgpXG4gICAgaWYgKGxhc3RTdW5rU2hpcCkge1xuICAgICAgQXJyYXkuZnJvbShhbGl2ZVNoaXBzRWwuY2hpbGRyZW4pLnNvbWUoKGFsaXZlU2hpcEVsKSA9PiB7XG4gICAgICAgIGlmIChhbGl2ZVNoaXBFbC5jaGlsZHJlbi5sZW5ndGggPT09IGxhc3RTdW5rU2hpcC5sZW5ndGgpIHtcbiAgICAgICAgICBhbGl2ZVNoaXBFbC5yZW1vdmUoKVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgY29uc3QgbmV3Um91bmRVcGRhdGUgPSAocGxheWVyMSwgcDFSb3csIHAxQ29sLCBwbGF5ZXIyLCBwMlJvdywgcDJDb2wpID0+IHtcbiAgICBjb25zdCBhbGl2ZVNoaXBzRWxzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhbGl2ZS1zaGlwcycpKVxuICAgIHVwZGF0ZUFsaXZlU2hpcHNGb3IocGxheWVyMSwgYWxpdmVTaGlwc0Vsc1swXSlcbiAgICB1cGRhdGVBbGl2ZVNoaXBzRm9yKHBsYXllcjIsIGFsaXZlU2hpcHNFbHNbMV0pXG5cbiAgICAvLyBpZiBwMVJvdyBhbmQgcDFDb2wgYXJlIGZhbHNleSwgdGhlIHBsYXllciB3b24gdGhlcmVmb3JlIHRoZSBjb21wdXRlciBjYW4ndCBtYWtlIGEgbW92ZVxuICAgIGlmIChwMVJvdyAhPT0gbnVsbCAmJiBwMUNvbCAhPT0gbnVsbCkge1xuICAgICAgLy8gdXBkYXRpbmcgdGhlIHBsYXllcidzIGJvYXJkXG4gICAgICBjb25zdCBwbGF5ZXIxVGlsZUJ0biA9IERvbUNvbnRyb2xsZXIuYnlJZChgJHtwbGF5ZXIxLm5hbWV9XyR7cDFSb3d9XyR7cDFDb2x9YClcbiAgICAgIHBsYXllcjFUaWxlQnRuLmNsYXNzTGlzdC5hZGQoJ2F0dGFja2VkJylcbiAgICAgIHBsYXllcjFUaWxlQnRuLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGAke3BsYXllcjFUaWxlQnRuLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpfSBhdHRhY2tlZGApXG4gICAgfVxuXG4gICAgLy8gdXBkYXRpbmcgdGhlIGNvbXB1dGVyJ3MgYm9hcmRcbiAgICBjb25zdCBwbGF5ZXIyVGlsZUJ0biA9IERvbUNvbnRyb2xsZXIuYnlJZChgJHtwbGF5ZXIyLm5hbWV9XyR7cDJSb3d9XyR7cDJDb2x9YClcbiAgICBpZiAocGxheWVyMi5nYW1lQm9hcmQuYm9hcmRbcDJSb3ddW3AyQ29sXSkge1xuICAgICAgcGxheWVyMlRpbGVCdG4uY2xhc3NMaXN0LmFkZCgnaGFzLXNoaXAnKVxuICAgICAgcGxheWVyMlRpbGVCdG4uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgYCR7cGxheWVyMlRpbGVCdG4uZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJyl9IHdpdGggc2hpcGApXG4gICAgfVxuXG4gICAgcGxheWVyMlRpbGVCdG4uY2xhc3NMaXN0LmFkZCgnYXR0YWNrZWQnKVxuICAgIHBsYXllcjJUaWxlQnRuLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGAke3BsYXllcjJUaWxlQnRuLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpfSBhdHRhY2tlZGApXG4gICAgcGxheWVyMlRpbGVCdG4uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpXG4gIH1cblxuICBjb25zdCBkaXNwbGF5R2FtZU92ZXIgPSAoaXNIdW1hbikgPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBpc0h1bWFuID8gJ/Cfjonwn46JIFlvdSB3b24gdGhpcyBiYXR0bGUhIPCfjonwn46JJyA6ICfwn6SW8J+kliBUaGUgY29tcHV0ZXIgd2lucyB0aGlzIHRpbWUhIPCfpJbwn6SWJ1xuICAgIGNvbnN0IG1lc3NhZ2VFbCA9IERvbUNvbnRyb2xsZXIubmV3RWxlbWVudCgnaDInLCAnJywgJycsIG1lc3NhZ2UpXG4gICAgY29uc3QgcGxheUFnYWluQnRuID0gRG9tQ29udHJvbGxlci5uZXdFbGVtZW50KCdidXR0b24nLCAnJywgJycsICdQbGF5IGFnYWluJylcbiAgICBwbGF5QWdhaW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBEb21Db250cm9sbGVyLmJ5SWQoJ2NvbnRlbnQnKS5pbm5lckhUTUwgPSAnJ1xuICAgICAgcGFpbnRDaG9vc2VEaWZmaWN1bHR5UGFnZSgpXG4gICAgfSlcblxuICAgIERvbUNvbnRyb2xsZXIuYWRkQ2hpbGRyZW5UbyhEb21Db250cm9sbGVyLmJ5SWQoJ2dhbWUtb3ZlcicpLCBbbWVzc2FnZUVsLCBwbGF5QWdhaW5CdG5dKVxuICB9XG5cbiAgY29uc3QgZGlzcGxheVVuZGVzdHJveWVkU2hpcHNPZiA9IChwbGF5ZXIpID0+IHtcbiAgICBjb25zdCBzaGlwc0Nvb3JkaW5hdGVzID0gW11cbiAgICBjb25zdCB7IGdhbWVCb2FyZCB9ID0gcGxheWVyXG5cbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBnYW1lQm9hcmQuYm9hcmQubGVuZ3RoOyByb3crKykge1xuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgZ2FtZUJvYXJkLmJvYXJkWzBdLmxlbmd0aDsgY29sKyspIHtcbiAgICAgICAgaWYgKGdhbWVCb2FyZC5ib2FyZFtyb3ddW2NvbF0gJiYgIUdhbWVib2FyZFNlcnZpY2UuYWxyZWFkeUF0dGFja2VkKHJvdywgY29sLCBnYW1lQm9hcmQpKSB7XG4gICAgICAgICAgc2hpcHNDb29yZGluYXRlcy5wdXNoKFtyb3csIGNvbF0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzQ29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBzaGlwc0Nvb3JkaW5hdGVzW2ldXG4gICAgICBjb25zdCB0aWxlRWwgPSBEb21Db250cm9sbGVyLmJ5SWQoYCR7cGxheWVyLm5hbWV9XyR7cm93fV8ke2NvbH1gKVxuICAgICAgdGlsZUVsPy5jbGFzc0xpc3QuYWRkKCdoYXMtc2hpcCcpXG4gICAgICB0aWxlRWw/LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKVxuICAgICAgdGlsZUVsPy5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBgJHt0aWxlRWwuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJyl9IHdpdGggc2hpcGApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtYXJrdXBGb3JCb2FyZCxcbiAgICBtYXJrdXBGb3JBbGl2ZVNoaXBzLFxuICAgIG5ld1JvdW5kVXBkYXRlLFxuICAgIGRpc3BsYXlHYW1lT3ZlcixcbiAgICBkaXNwbGF5VW5kZXN0cm95ZWRTaGlwc09mLFxuICB9XG59KSgpXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBvcGVyYXRvci1saW5lYnJlYWssIG5vLWxvbmVseS1pZiwgbm8tY29udGludWUgKi9cblxuaW1wb3J0IEdhbWVib2FyZCwgeyBHYW1lYm9hcmRTZXJ2aWNlIH0gZnJvbSAnLi9nYW1lYm9hcmQuanMnXG5pbXBvcnQgeyBHYW1lU2VydmljZSB9IGZyb20gJy4vZ2FtZS5qcydcbmltcG9ydCB7IFNoaXBTZXJ2aWNlIH0gZnJvbSAnLi9zaGlwLmpzJ1xuXG5leHBvcnQgY29uc3QgQ29tcHV0ZXJQbGF5ZXJTZXJ2aWNlID0gKCgpID0+IHtcbiAgY29uc3QgZWFzeUFsZ29HZXRDb29yZGluYXRlcyA9IChnYW1lQm9hcmQpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVCb2FyZC5oaXRBdHRhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBbaGl0Um93LCBoaXRDb2xdID0gZ2FtZUJvYXJkLmhpdEF0dGFja3NbaV1cblxuICAgICAgZm9yIChsZXQgaiA9IC0xOyBqIDw9IDE7IGogKz0gMikge1xuICAgICAgICBpZiAoIUdhbWVib2FyZFNlcnZpY2UuYWxyZWFkeUF0dGFja2VkKGhpdFJvdyArIGosIGhpdENvbCwgZ2FtZUJvYXJkKSkge1xuICAgICAgICAgIGlmIChoaXRSb3cgKyBqID4gLTEgJiYgaGl0Um93ICsgaiA8IGdhbWVCb2FyZC5ib2FyZC5sZW5ndGgpIHJldHVybiBbaGl0Um93ICsgaiwgaGl0Q29sXVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFHYW1lYm9hcmRTZXJ2aWNlLmFscmVhZHlBdHRhY2tlZChoaXRSb3csIGhpdENvbCArIGosIGdhbWVCb2FyZCkpIHtcbiAgICAgICAgICBpZiAoaGl0Q29sICsgaiA+IC0xICYmIGhpdENvbCArIGogPCBnYW1lQm9hcmQuYm9hcmRbMF0ubGVuZ3RoKSByZXR1cm4gW2hpdFJvdywgaGl0Q29sICsgal1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBbLTEsIC0xXVxuICB9XG5cbiAgY29uc3QgaGFyZEFsZ29HZXRDb29yZGluYXRlcyA9IChnYW1lQm9hcmQpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVCb2FyZC5oaXRBdHRhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBbaGl0Um93LCBoaXRDb2xdID0gZ2FtZUJvYXJkLmhpdEF0dGFja3NbaV1cbiAgICAgIGNvbnN0IGhpdFNoaXAgPSBnYW1lQm9hcmQuYm9hcmRbaGl0Um93XVtoaXRDb2xdXG5cbiAgICAgIGlmIChTaGlwU2VydmljZS5pc1N1bmsoaGl0U2hpcCkpIGNvbnRpbnVlXG5cbiAgICAgIC8vIGlmIHRoZSBzaGlwIGhhcyBiZWVuIGhpdCBvbmx5IG9uY2UsIHdlIGhhdmUgbm8gd2F5IG9mIHRlbGxpbmcgd2hpY2ggZGlyZWN0aW9uIGl0IGdvZXNcbiAgICAgIGlmIChoaXRTaGlwLmhpdHMuZmlsdGVyKChwb3MpID0+IHBvcyA9PT0gdHJ1ZSkubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIC8vIHRyYXZlcnNlIGFsbCA0IG5laWdoYm9yc1xuICAgICAgICBmb3IgKGxldCBqID0gLTE7IGogPD0gMTsgaiArPSAyKSB7XG4gICAgICAgICAgaWYgKEdhbWVib2FyZFNlcnZpY2UudmFsaWRUb1BsYXkoaGl0Um93ICsgaiwgaGl0Q29sLCBnYW1lQm9hcmQpKSB7XG4gICAgICAgICAgICBpZiAoIUdhbWVib2FyZFNlcnZpY2UubmVpZ2hib3JzVmlzaWJsZVNoaXAoaGl0Um93ICsgaiwgaGl0Q29sLCBnYW1lQm9hcmQsIGhpdFNoaXApKSB7XG4gICAgICAgICAgICAgIHJldHVybiBbaGl0Um93ICsgaiwgaGl0Q29sXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChHYW1lYm9hcmRTZXJ2aWNlLnZhbGlkVG9QbGF5KGhpdFJvdywgaGl0Q29sICsgaiwgZ2FtZUJvYXJkKSkge1xuICAgICAgICAgICAgaWYgKCFHYW1lYm9hcmRTZXJ2aWNlLm5laWdoYm9yc1Zpc2libGVTaGlwKGhpdFJvdywgaGl0Q29sICsgaiwgZ2FtZUJvYXJkLCBoaXRTaGlwKSkge1xuICAgICAgICAgICAgICByZXR1cm4gW2hpdFJvdywgaGl0Q29sICsgal1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRyYXZlcnNlIG9ubHkgMiBuZWlnaGJvcnMgaW4gdGhlIGNvcnJlY3QgZGlyZWN0aW9uICh2ZXJ0aWNhbCBvciBob3Jpem9udGFsKVxuICAgICAgICBjb25zdCBbcm93T2Zmc2V0LCBjb2xPZmZzZXRdID0gaGl0U2hpcC5pc1ZlcnRpY2FsID8gWzEsIDBdIDogWzAsIDFdXG4gICAgICAgIGZvciAobGV0IGogPSAtMTsgaiA8PSAxOyBqICs9IDIpIHtcbiAgICAgICAgICBpZiAoR2FtZWJvYXJkU2VydmljZS52YWxpZFRvUGxheShoaXRSb3cgKyBqICogcm93T2Zmc2V0LCBoaXRDb2wgKyBqICogY29sT2Zmc2V0LCBnYW1lQm9hcmQpKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICFHYW1lYm9hcmRTZXJ2aWNlLm5laWdoYm9yc1Zpc2libGVTaGlwKGhpdFJvdyArIGogKiByb3dPZmZzZXQsIGhpdENvbCArIGogKiBjb2xPZmZzZXQsIGdhbWVCb2FyZCwgaGl0U2hpcClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICByZXR1cm4gW2hpdFJvdyArIGogKiByb3dPZmZzZXQsIGhpdENvbCArIGogKiBjb2xPZmZzZXRdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFstMSwgLTFdXG4gIH1cblxuICByZXR1cm4geyBlYXN5QWxnb0dldENvb3JkaW5hdGVzLCBoYXJkQWxnb0dldENvb3JkaW5hdGVzIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tcHV0ZXJQbGF5ZXIobmFtZSwgZ2FtZUJvYXJkID0gR2FtZWJvYXJkKCkpIHtcbiAgZnVuY3Rpb24gcmFuZG9tUGxheShnYW1lLCBhdm9pZFNoaXBzID0gZmFsc2UpIHtcbiAgICBjb25zdCBlbmVteUJvYXJkID0gR2FtZVNlcnZpY2Uub3RoZXJQbGF5ZXJUaGFuKHRoaXMsIGdhbWUpLmdhbWVCb2FyZFxuICAgIGNvbnN0IHJhbmRvbVJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVuZW15Qm9hcmQuYm9hcmQubGVuZ3RoKVxuICAgIGNvbnN0IHJhbmRvbUNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVuZW15Qm9hcmQuYm9hcmRbMF0ubGVuZ3RoKVxuXG4gICAgaWYgKEdhbWVib2FyZFNlcnZpY2UuYWxyZWFkeUF0dGFja2VkKHJhbmRvbVJvdywgcmFuZG9tQ29sLCBlbmVteUJvYXJkKSkge1xuICAgICAgcmV0dXJuIHRoaXMucmFuZG9tUGxheShnYW1lLCBhdm9pZFNoaXBzKVxuICAgIH1cblxuICAgIGlmIChhdm9pZFNoaXBzICYmIEdhbWVib2FyZFNlcnZpY2UubmVpZ2hib3JzVmlzaWJsZVNoaXAocmFuZG9tUm93LCByYW5kb21Db2wsIGVuZW15Qm9hcmQpKSB7XG4gICAgICByZXR1cm4gdGhpcy5yYW5kb21QbGF5KGdhbWUsIHRydWUpXG4gICAgfVxuXG4gICAgZW5lbXlCb2FyZC5yZWNlaXZlQXR0YWNrKHJhbmRvbVJvdywgcmFuZG9tQ29sKVxuICAgIHJldHVybiBbcmFuZG9tUm93LCByYW5kb21Db2xdXG4gIH1cblxuICAvLyBUaGUgY29tcHV0ZXIgZmluZHMgYSB0aWxlIHRoYXQncyBwYXJ0IG9mIGEgc2hpcCBhbmQgdGhlbiB0cmF2ZXJzZXMgYWxsIG5laWdoYm9yaW5nIHRpbGVzIGFuZCBhdHRhY2tzIHRoZW1cbiAgZnVuY3Rpb24gZWFzeUFsZ29QbGF5KGdhbWUpIHtcbiAgICBjb25zdCBlbmVteUJvYXJkID0gR2FtZVNlcnZpY2Uub3RoZXJQbGF5ZXJUaGFuKHRoaXMsIGdhbWUpLmdhbWVCb2FyZFxuICAgIGNvbnN0IFtyb3csIGNvbF0gPSBDb21wdXRlclBsYXllclNlcnZpY2UuZWFzeUFsZ29HZXRDb29yZGluYXRlcyhlbmVteUJvYXJkKVxuXG4gICAgaWYgKHJvdyA9PT0gLTEgJiYgY29sID09PSAtMSkgcmV0dXJuIHRoaXMucmFuZG9tUGxheShnYW1lKVxuXG4gICAgZW5lbXlCb2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sKVxuICAgIHJldHVybiBbcm93LCBjb2xdXG4gIH1cblxuICAvLyBUaGUgY29tcHV0ZXIgZmluZHMgYSB0aWxlIHRoYXQncyBwYXJ0IG9mIGEgc2hpcCwgdGhlbiBiYXNlZCBvbiB3aGV0aGVyIGl0IHNhbmsgdGhlIHNoaXAsIGl0IHRyYXZlcnNlcyBpdCdzXG4gIC8vIG5laWdoYm9yaW5nIHRpbGVzIGluIHRoZSBjb3JyZWN0IGRpcmVjdGlvbiBhbmQsIG9uY2UgdGhlIHNoaXAgaXMgc3VuaywgaXQgbmV2ZXIgcGlja3MgaXQncyBuZWlnaGJvcmluZyB0aWxlcyxcbiAgLy8gYmVjYXVzZSBhbm90aGVyIHNoaXAgY2FuJ3QgYmUgdGhlcmVcbiAgZnVuY3Rpb24gaGFyZEFsZ29QbGF5KGdhbWUpIHtcbiAgICBjb25zdCBlbmVteUJvYXJkID0gR2FtZVNlcnZpY2Uub3RoZXJQbGF5ZXJUaGFuKHRoaXMsIGdhbWUpLmdhbWVCb2FyZFxuICAgIGNvbnN0IFtyb3csIGNvbF0gPSBDb21wdXRlclBsYXllclNlcnZpY2UuaGFyZEFsZ29HZXRDb29yZGluYXRlcyhlbmVteUJvYXJkKVxuXG4gICAgaWYgKHJvdyA9PT0gLTEgJiYgY29sID09PSAtMSkgcmV0dXJuIHRoaXMucmFuZG9tUGxheShnYW1lLCB0cnVlKVxuXG4gICAgZW5lbXlCb2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sKVxuICAgIHJldHVybiBbcm93LCBjb2xdXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5hbWUsXG4gICAgZ2FtZUJvYXJkLFxuICAgIHJhbmRvbVBsYXksXG4gICAgZWFzeUFsZ29QbGF5LFxuICAgIGhhcmRBbGdvUGxheSxcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgb3BlcmF0b3ItbGluZWJyZWFrICovXG5cbmltcG9ydCB7IEdhbWVib2FyZFNlcnZpY2UgfSBmcm9tICcuL2dhbWVib2FyZC5qcydcblxuZXhwb3J0IGNvbnN0IEdhbWVTZXJ2aWNlID0gKCgpID0+IHtcbiAgY29uc3Qgb3RoZXJQbGF5ZXJUaGFuID0gKHBsYXllciwgZ2FtZSkgPT4ge1xuICAgIGNvbnN0IFtwbGF5ZXIxLCBwbGF5ZXIyXSA9IFtnYW1lLnBsYXllcjEsIGdhbWUucGxheWVyMl1cbiAgICByZXR1cm4gcGxheWVyMSA9PT0gcGxheWVyID8gcGxheWVyMiA6IHBsYXllcjFcbiAgfVxuXG4gIGNvbnN0IGlzR2FtZU92ZXJJbiA9IChnYW1lKSA9PiB7XG4gICAgY29uc3QgW3BsYXllcjEsIHBsYXllcjJdID0gW2dhbWUucGxheWVyMSwgZ2FtZS5wbGF5ZXIyXVxuICAgIHJldHVybiAoXG4gICAgICBHYW1lYm9hcmRTZXJ2aWNlLmFsbFNoaXBzU3Vua0luKHBsYXllcjEuZ2FtZUJvYXJkLmJvYXJkKSB8fFxuICAgICAgR2FtZWJvYXJkU2VydmljZS5hbGxTaGlwc1N1bmtJbihwbGF5ZXIyLmdhbWVCb2FyZC5ib2FyZClcbiAgICApXG4gIH1cblxuICByZXR1cm4geyBvdGhlclBsYXllclRoYW4sIGlzR2FtZU92ZXJJbiB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWUocGxheWVyMSwgcGxheWVyMikge1xuICBsZXQgcm91bmQgPSAxXG5cbiAgY29uc3QgbmV4dFJvdW5kID0gKCkgPT4ge1xuICAgIHJvdW5kID0gMlxuICAgIHJldHVybiByb3VuZFxuICB9XG5cbiAgY29uc3QgZ2V0Um91bmQgPSAoKSA9PiByb3VuZFxuXG4gIHJldHVybiB7XG4gICAgcGxheWVyMSxcbiAgICBwbGF5ZXIyLFxuICAgIGdldFJvdW5kLFxuICAgIG5leHRSb3VuZCxcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgb3BlcmF0b3ItbGluZWJyZWFrLCBpbXBsaWNpdC1hcnJvdy1saW5lYnJlYWsgKi9cblxuaW1wb3J0IFNoaXAsIHsgU2hpcFNlcnZpY2UgfSBmcm9tICcuL3NoaXAuanMnXG5cbmV4cG9ydCBjb25zdCBHYW1lYm9hcmRTZXJ2aWNlID0gKCgpID0+IHtcbiAgY29uc3QgZGlzcGxheSA9IChib2FyZCkgPT4gYm9hcmQubWFwKChib2FyZFJvdykgPT4gYm9hcmRSb3cubWFwKChwb3MpID0+IChwb3MgPT09IDAgPyAwIDogMSkpKVxuXG4gIGNvbnN0IHBvc2l0aW9uVmFsaWRGb3IgPSAoc2hpcCwgcm93LCBjb2wsIGJvYXJkKSA9PiB7XG4gICAgY29uc3QgW3Jvd09mZnNldCwgY29sT2Zmc2V0XSA9IHNoaXAuaXNWZXJ0aWNhbCA/IFsxLCAwXSA6IFswLCAxXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHJvdyArIGkgKiByb3dPZmZzZXQgPj0gMTAgfHxcbiAgICAgICAgY29sICsgaSAqIGNvbE9mZnNldCA+PSAxMCB8fFxuICAgICAgICBib2FyZFtyb3cgKyBpICogcm93T2Zmc2V0XVtjb2wgKyBpICogY29sT2Zmc2V0XSAhPT0gMFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICAvLyBjaGVja2luZyB3aGV0aGVyIGl0J3MgbmV4dCB0byBhbiBleGlzdGluZyBzaGlwXG4gICAgICBpZiAoXG4gICAgICAgIGJvYXJkW3JvdyArIGkgKiByb3dPZmZzZXQgKyAxXT8uW2NvbCArIGkgKiBjb2xPZmZzZXRdIHx8XG4gICAgICAgIGJvYXJkW3JvdyArIGkgKiByb3dPZmZzZXQgLSAxXT8uW2NvbCArIGkgKiBjb2xPZmZzZXRdIHx8XG4gICAgICAgIGJvYXJkW3JvdyArIGkgKiByb3dPZmZzZXRdPy5bY29sICsgaSAqIGNvbE9mZnNldCArIDFdIHx8XG4gICAgICAgIGJvYXJkW3JvdyArIGkgKiByb3dPZmZzZXRdPy5bY29sICsgaSAqIGNvbE9mZnNldCAtIDFdXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGNvbnN0IGFsbFNoaXBzU3Vua0luID0gKGJvYXJkKSA9PiB7XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgYm9hcmQubGVuZ3RoOyByb3crKykge1xuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgYm9hcmRbMF0ubGVuZ3RoOyBjb2wrKykge1xuICAgICAgICBpZiAoYm9hcmRbcm93XVtjb2xdICYmICFTaGlwU2VydmljZS5pc1N1bmsoYm9hcmRbcm93XVtjb2xdKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGNvbnN0IGFscmVhZHlBdHRhY2tlZCA9IChyb3csIGNvbCwgZ2FtZUJvYXJkKSA9PiB7XG4gICAgaWYgKHJvdyA8IDAgfHwgcm93ID49IGdhbWVCb2FyZC5ib2FyZC5sZW5ndGggfHwgY29sID49IGdhbWVCb2FyZC5ib2FyZC5sZW5ndGggfHwgY29sIDwgMCkgcmV0dXJuIGZhbHNlXG5cbiAgICBjb25zdCBhdHRhY2tzID0gZ2FtZUJvYXJkLmFsbEF0dGFja3NcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0YWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgW3IsIGNdID0gYXR0YWNrc1tpXVxuXG4gICAgICBpZiAociA9PT0gcm93ICYmIGMgPT09IGNvbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gVmFsaWQgY29vcmRpbmF0ZXMgYW5kIG5vdCBhbHJlYWR5IGF0dGFja2VkXG4gIGNvbnN0IHZhbGlkVG9QbGF5ID0gKHJvdywgY29sLCBnYW1lQm9hcmQpID0+XG4gICAgIWFscmVhZHlBdHRhY2tlZChyb3csIGNvbCwgZ2FtZUJvYXJkKSAmJlxuICAgIHJvdyA+IC0xICYmXG4gICAgcm93IDwgZ2FtZUJvYXJkLmJvYXJkLmxlbmd0aCAmJlxuICAgIGNvbCA+IC0xICYmXG4gICAgY29sIDwgZ2FtZUJvYXJkLmJvYXJkWzBdLmxlbmd0aFxuXG4gIGNvbnN0IG5laWdoYm9yc1Zpc2libGVTaGlwID0gKHJvdywgY29sLCBnYW1lQm9hcmQsIGV4Y2VwdCA9IG51bGwpID0+IHtcbiAgICBmb3IgKGxldCBpID0gLTE7IGkgPD0gMTsgaSArPSAyKSB7XG4gICAgICBjb25zdCBzaGlwUm93ID0gcm93ICsgaVxuICAgICAgY29uc3Qgc2hpcENvbCA9IGNvbCArIGlcblxuICAgICAgY29uc3Qgc2hpcDEgPSBnYW1lQm9hcmQuYm9hcmRbc2hpcFJvd10/Lltjb2xdXG4gICAgICBjb25zdCBzaGlwMiA9IGdhbWVCb2FyZC5ib2FyZFtyb3ddPy5bc2hpcENvbF1cblxuICAgICAgaWYgKFxuICAgICAgICAoc2hpcDEgJiYgc2hpcDEgIT09IGV4Y2VwdCAmJiBhbHJlYWR5QXR0YWNrZWQoc2hpcFJvdywgY29sLCBnYW1lQm9hcmQpKSB8fFxuICAgICAgICAoc2hpcDIgJiYgc2hpcDIgIT09IGV4Y2VwdCAmJiBhbHJlYWR5QXR0YWNrZWQocm93LCBzaGlwQ29sLCBnYW1lQm9hcmQpKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBjb25zdCBhbGl2ZVNoaXBzT2YgPSAoZ2FtZUJvYXJkKSA9PiBbLi4uZ2FtZUJvYXJkLmFsaXZlU2hpcHNdXG5cbiAgcmV0dXJuIHtcbiAgICBkaXNwbGF5LFxuICAgIHBvc2l0aW9uVmFsaWRGb3IsXG4gICAgYWxsU2hpcHNTdW5rSW4sXG4gICAgYWxyZWFkeUF0dGFja2VkLFxuICAgIGFsaXZlU2hpcHNPZixcbiAgICB2YWxpZFRvUGxheSxcbiAgICBuZWlnaGJvcnNWaXNpYmxlU2hpcCxcbiAgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lYm9hcmQoKSB7XG4gIGNvbnN0IGJvYXJkID0gW1xuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgXVxuXG4gIGNvbnN0IG1pc3NlZEF0dGFja3MgPSBbXVxuICBjb25zdCBhbGxBdHRhY2tzID0gW11cbiAgY29uc3QgaGl0QXR0YWNrcyA9IFtdXG5cbiAgY29uc3QgYWxsU2hpcHMgPSBbXVxuICBjb25zdCBhbGl2ZVNoaXBzID0gbmV3IFNldCgpXG5cbiAgbGV0IGxhc3RTdW5rU2hpcFxuXG4gIGNvbnN0IGdldExhc3RTdW5rU2hpcCA9ICgpID0+IGxhc3RTdW5rU2hpcFxuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwKSA9PiB7XG4gICAgbGV0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgIGxldCBjb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcblxuICAgIHdoaWxlICghR2FtZWJvYXJkU2VydmljZS5wb3NpdGlvblZhbGlkRm9yKHNoaXAsIHJvdywgY29sLCBib2FyZCkpIHtcbiAgICAgIHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBib2FyZFtyb3cgKyBpICogc2hpcC5pc1ZlcnRpY2FsXVtjb2wgKyBpICogIXNoaXAuaXNWZXJ0aWNhbF0gPSBzaGlwXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGxhY2VTaGlwc0luaXRpYWwgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcFNpemVzID0gWzQsIDMsIDMsIDIsIDIsIDIsIDEsIDEsIDEsIDFdXG4gICAgc2hpcFNpemVzLmZvckVhY2goKHNpemUpID0+IHtcbiAgICAgIGNvbnN0IHNoaXAgPSBTaGlwKHNpemUsIE1hdGgucmFuZG9tKCkgPj0gMC41KVxuICAgICAgcGxhY2VTaGlwKHNoaXApXG4gICAgICBhbGxTaGlwcy5wdXNoKHNoaXApXG4gICAgICBhbGl2ZVNoaXBzLmFkZChzaGlwKVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHJvdywgY29sKSB7XG4gICAgaWYgKEdhbWVib2FyZFNlcnZpY2UuYWxyZWFkeUF0dGFja2VkKHJvdywgY29sLCB0aGlzKSkgcmV0dXJuIGZhbHNlXG5cbiAgICBhbGxBdHRhY2tzLnB1c2goW3JvdywgY29sXSlcblxuICAgIGlmIChib2FyZFtyb3ddW2NvbF0pIHtcbiAgICAgIGhpdEF0dGFja3MucHVzaChbcm93LCBjb2xdKVxuICAgICAgY29uc3Qgc2hpcCA9IGJvYXJkW3Jvd11bY29sXVxuICAgICAgc2hpcC5oaXQoU2hpcFNlcnZpY2UuaGl0UG9zaXRpb24ocm93LCBjb2wsIGJvYXJkKSlcbiAgICAgIGlmIChTaGlwU2VydmljZS5pc1N1bmsoc2hpcCkpIHtcbiAgICAgICAgYWxpdmVTaGlwcy5kZWxldGUoc2hpcClcbiAgICAgICAgbGFzdFN1bmtTaGlwID0gc2hpcFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFzdFN1bmtTaGlwID0gbnVsbFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtaXNzZWRBdHRhY2tzLnB1c2goW3JvdywgY29sXSlcbiAgICAgIGxhc3RTdW5rU2hpcCA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgcGxhY2VTaGlwc0luaXRpYWwoKVxuXG4gIHJldHVybiB7XG4gICAgYm9hcmQsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBtaXNzZWRBdHRhY2tzLFxuICAgIGFsbEF0dGFja3MsXG4gICAgaGl0QXR0YWNrcyxcbiAgICBhbGxTaGlwcyxcbiAgICBhbGl2ZVNoaXBzLFxuICAgIGxhc3RTdW5rU2hpcCxcbiAgICBnZXRMYXN0U3Vua1NoaXAsXG4gIH1cbn1cbiIsImltcG9ydCB7IEdhbWVTZXJ2aWNlIH0gZnJvbSAnLi9nYW1lLmpzJ1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZC5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxheWVyKG5hbWUsIGdhbWVCb2FyZCA9IEdhbWVib2FyZCgpKSB7XG4gIGZ1bmN0aW9uIHBsYXkoZ2FtZSwgcm93LCBjb2wpIHtcbiAgICBjb25zdCBlbmVteUJvYXJkID0gR2FtZVNlcnZpY2Uub3RoZXJQbGF5ZXJUaGFuKHRoaXMsIGdhbWUpLmdhbWVCb2FyZFxuICAgIHJldHVybiBlbmVteUJvYXJkLnJlY2VpdmVBdHRhY2socm93LCBjb2wpXG4gIH1cblxuICByZXR1cm4geyBuYW1lLCBnYW1lQm9hcmQsIHBsYXkgfVxufVxuIiwiZXhwb3J0IGNvbnN0IFNoaXBTZXJ2aWNlID0gKCgpID0+IHtcbiAgY29uc3QgaXNTdW5rID0gKHNoaXApID0+IHNoaXAuaGl0cy5ldmVyeSgocG9zaXRpb24pID0+IHBvc2l0aW9uID09PSB0cnVlKVxuXG4gIGNvbnN0IGhpdFBvc2l0aW9uID0gKHJvdywgY29sLCBib2FyZCkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBib2FyZFtyb3ddW2NvbF1cbiAgICBjb25zdCBbcm93T2Zmc2V0LCBjb2xPZmZzZXRdID0gc2hpcC5pc1ZlcnRpY2FsID8gWzEsIDBdIDogWzAsIDFdXG4gICAgY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gW11cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGJvYXJkW3JvdyArIGkgKiByb3dPZmZzZXRdPy5bY29sICsgaSAqIGNvbE9mZnNldF0gPT09IHNoaXApIHtcbiAgICAgICAgc2hpcENvb3JkaW5hdGVzLnB1c2goW3JvdyArIGkgKiByb3dPZmZzZXQsIGNvbCArIGkgKiBjb2xPZmZzZXRdKVxuICAgICAgfVxuXG4gICAgICBpZiAoYm9hcmRbcm93IC0gaSAqIHJvd09mZnNldF0/Lltjb2wgLSBpICogY29sT2Zmc2V0XSA9PT0gc2hpcCkge1xuICAgICAgICBzaGlwQ29vcmRpbmF0ZXMucHVzaChbcm93IC0gaSAqIHJvd09mZnNldCwgY29sIC0gaSAqIGNvbE9mZnNldF0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgc2hpcENvb3JkaW5hdGVzLnNvcnQoc2hpcC5pc1ZlcnRpY2FsID8gKGEsIGIpID0+IGFbMF0gLSBiWzBdIDogKGEsIGIpID0+IGFbMV0gLSBiWzFdKVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwQ29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IFtyLCBjXSA9IHNoaXBDb29yZGluYXRlc1tpXVxuICAgICAgaWYgKHIgPT09IHJvdyAmJiBjID09PSBjb2wpIHtcbiAgICAgICAgcmV0dXJuIGlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiB7IGlzU3VuaywgaGl0UG9zaXRpb24gfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGlwKGxlbmd0aCwgaXNWZXJ0aWNhbCA9IGZhbHNlKSB7XG4gIGNvbnN0IGhpdHMgPSBuZXcgQXJyYXkobGVuZ3RoKS5maWxsKGZhbHNlKVxuXG4gIGNvbnN0IGhpdCA9IChwb3NpdGlvbikgPT4ge1xuICAgIGhpdHNbcG9zaXRpb25dID0gdHJ1ZVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsZW5ndGgsXG4gICAgaGl0cyxcbiAgICBoaXQsXG4gICAgaXNWZXJ0aWNhbCxcbiAgfVxufVxuIiwiaW1wb3J0IHsgRG9tQ29udHJvbGxlciB9IGZyb20gJy4uL2RvbS5qcydcbmltcG9ydCBwYWludEdhbWVQYWdlIGZyb20gJy4vZ2FtZS5qcydcbmltcG9ydCBHYW1lIGZyb20gJy4uL2dhbWUvZ2FtZS5qcydcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vZ2FtZS9wbGF5ZXIuanMnXG5pbXBvcnQgQ29tcHV0ZXJQbGF5ZXIgZnJvbSAnLi4vZ2FtZS9jb21wdXRlcl9wbGF5ZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhaW50Q2hvb3NlRGlmZmljdWx0eVBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnRFbCA9IERvbUNvbnRyb2xsZXIuYnlJZCgnY29udGVudCcpXG4gIGNvbnN0IGNob29zZURpZmZpY3VsdHlFbCA9IERvbUNvbnRyb2xsZXIubmV3RWxlbWVudCgnZGl2JywgJycsICdjaG9vc2UtZGlmZmljdWx0eScpXG4gIGNvbnN0IGhlYWRpbmcgPSBEb21Db250cm9sbGVyLm5ld0VsZW1lbnQoJ2gyJywgJycsICcnLCAnQ2hvb3NlIGEgZGlmZmljdWx0eTonKVxuICBjb25zdCBkaWZmaWN1bHRpZXNFbCA9IERvbUNvbnRyb2xsZXIubmV3RWxlbWVudCgndWwnLCAnJywgJ2RpZmZpY3VsdGllcycpXG5cbiAgY29uc3QgZGlmZmljdWx0aWVzID0gWydlYXN5JywgJ21lZGl1bScsICdoYXJkJ11cbiAgZGlmZmljdWx0aWVzLmZvckVhY2goKGRpZmZpY3VsdHkpID0+IHtcbiAgICBjb25zdCBkaWZmaWN1bHR5RWwgPSBEb21Db250cm9sbGVyLm5ld0VsZW1lbnQoJ2xpJywgYGRpZmZpY3VsdHkgJHtkaWZmaWN1bHR5fWAsICcnKVxuICAgIGNvbnN0IGRpZmZpY3VsdHlCdG4gPSBEb21Db250cm9sbGVyLm5ld0VsZW1lbnQoJ2J1dHRvbicsICcnLCAnJywgZGlmZmljdWx0eSlcbiAgICBkaWZmaWN1bHR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29udGVudEVsLmlubmVySFRNTCA9ICcnXG4gICAgICBwYWludEdhbWVQYWdlKEdhbWUoUGxheWVyKCdodW1hbicpLCBDb21wdXRlclBsYXllcignY29tcHV0ZXInKSksIGRpZmZpY3VsdHkpXG4gICAgfSlcblxuICAgIGRpZmZpY3VsdHlFbC5hcHBlbmRDaGlsZChkaWZmaWN1bHR5QnRuKVxuICAgIGRpZmZpY3VsdGllc0VsLmFwcGVuZENoaWxkKGRpZmZpY3VsdHlFbClcbiAgfSlcblxuICBEb21Db250cm9sbGVyLmFkZENoaWxkcmVuVG8oY2hvb3NlRGlmZmljdWx0eUVsLCBbaGVhZGluZywgZGlmZmljdWx0aWVzRWxdKVxuXG4gIGNvbnRlbnRFbC5hcHBlbmRDaGlsZChjaG9vc2VEaWZmaWN1bHR5RWwpXG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1leHRyYS1zZW1pLCBpbXBvcnQvbm8tY3ljbGUgKi9cblxuaW1wb3J0IHsgRG9tR2FtZSwgRG9tQ29udHJvbGxlciB9IGZyb20gJy4uL2RvbS5qcydcbmltcG9ydCB7IEdhbWVTZXJ2aWNlIH0gZnJvbSAnLi4vZ2FtZS9nYW1lLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWludEdhbWVQYWdlKGdhbWUsIGRpZmZpY3VsdHkpIHtcbiAgY29uc3QgY29udGVudEVsID0gRG9tQ29udHJvbGxlci5ieUlkKCdjb250ZW50JylcbiAgY29uc3QgZ2FtZWJvYXJkc0VsID0gRG9tQ29udHJvbGxlci5uZXdFbGVtZW50KCdkaXYnLCAnJywgJ2dhbWUtYm9hcmRzJylcbiAgY29uc3QgZ2FtZU92ZXJFbCA9IERvbUNvbnRyb2xsZXIubmV3RWxlbWVudCgnZGl2JywgJycsICdnYW1lLW92ZXInKVxuICBEb21Db250cm9sbGVyLmFkZENoaWxkcmVuVG8oY29udGVudEVsLCBbZ2FtZWJvYXJkc0VsLCBnYW1lT3ZlckVsXSlcblxuICBjb25zdCBbcGxheWVyMSwgcGxheWVyMl0gPSBbZ2FtZS5wbGF5ZXIxLCBnYW1lLnBsYXllcjJdXG4gIGxldCBnYW1lT3ZlciA9IGZhbHNlXG5cbiAgY29uc3QgaGFuZGxlVGlsZUNsaWNrID0gKHJvdywgY29sKSA9PiB7XG4gICAgaWYgKGdhbWVPdmVyKSByZXR1cm5cblxuICAgIGlmIChwbGF5ZXIxLnBsYXkoZ2FtZSwgcm93LCBjb2wpKSB7XG4gICAgICBpZiAoR2FtZVNlcnZpY2UuaXNHYW1lT3ZlckluKGdhbWUpKSB7XG4gICAgICAgIC8vIHRoZSBwbGF5ZXIgd29uXG4gICAgICAgIGdhbWVPdmVyID0gdHJ1ZVxuICAgICAgICBEb21HYW1lLm5ld1JvdW5kVXBkYXRlKHBsYXllcjEsIG51bGwsIG51bGwsIHBsYXllcjIsIHJvdywgY29sKVxuICAgICAgICBEb21HYW1lLmRpc3BsYXlHYW1lT3Zlcih0cnVlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHJhbmRvbVJvd1xuICAgICAgICBsZXQgcmFuZG9tQ29sXG5cbiAgICAgICAgLy8gY29tcHV0ZXIgdGFraW5nIHR1cm5cbiAgICAgICAgc3dpdGNoIChkaWZmaWN1bHR5KSB7XG4gICAgICAgICAgY2FzZSAnZWFzeSc6XG4gICAgICAgICAgICA7W3JhbmRvbVJvdywgcmFuZG9tQ29sXSA9IHBsYXllcjIucmFuZG9tUGxheShnYW1lKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjYXNlICdtZWRpdW0nOlxuICAgICAgICAgICAgO1tyYW5kb21Sb3csIHJhbmRvbUNvbF0gPSBwbGF5ZXIyLmVhc3lBbGdvUGxheShnYW1lKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjYXNlICdoYXJkJzpcbiAgICAgICAgICAgIDtbcmFuZG9tUm93LCByYW5kb21Db2xdID0gcGxheWVyMi5oYXJkQWxnb1BsYXkoZ2FtZSlcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIDtbcmFuZG9tUm93LCByYW5kb21Db2xdID0gcGxheWVyMi5yYW5kb21QbGF5KGdhbWUpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoR2FtZVNlcnZpY2UuaXNHYW1lT3ZlckluKGdhbWUpKSB7XG4gICAgICAgICAgLy8gdGhlIGNvbXB1dGVyIHdvblxuICAgICAgICAgIGdhbWVPdmVyID0gdHJ1ZVxuICAgICAgICAgIERvbUdhbWUuZGlzcGxheUdhbWVPdmVyKGZhbHNlKVxuICAgICAgICAgIERvbUdhbWUuZGlzcGxheVVuZGVzdHJveWVkU2hpcHNPZihwbGF5ZXIyKVxuICAgICAgICB9XG5cbiAgICAgICAgRG9tR2FtZS5uZXdSb3VuZFVwZGF0ZShwbGF5ZXIxLCByYW5kb21Sb3csIHJhbmRvbUNvbCwgcGxheWVyMiwgcm93LCBjb2wpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGxheWVyMUJvYXJkRWwgPSBEb21HYW1lLm1hcmt1cEZvckJvYXJkKHBsYXllcjEuZ2FtZUJvYXJkLmJvYXJkLCBwbGF5ZXIxLm5hbWUpXG4gIGNvbnN0IHBsYXllcjJCb2FyZEVsID0gRG9tR2FtZS5tYXJrdXBGb3JCb2FyZChwbGF5ZXIyLmdhbWVCb2FyZC5ib2FyZCwgcGxheWVyMi5uYW1lKVxuXG4gIHBsYXllcjFCb2FyZEVsLnByZXBlbmQoRG9tR2FtZS5tYXJrdXBGb3JBbGl2ZVNoaXBzKHBsYXllcjEpKVxuICBwbGF5ZXIyQm9hcmRFbC5wcmVwZW5kKERvbUdhbWUubWFya3VwRm9yQWxpdmVTaGlwcyhwbGF5ZXIyKSlcblxuICBEb21Db250cm9sbGVyLmJ5SWQoJ2dhbWUtYm9hcmRzJykuYXBwZW5kQ2hpbGQocGxheWVyMUJvYXJkRWwpXG4gIERvbUNvbnRyb2xsZXIuYnlJZCgnZ2FtZS1ib2FyZHMnKS5hcHBlbmRDaGlsZChwbGF5ZXIyQm9hcmRFbClcblxuICBmb3IgKGxldCByID0gMDsgciA8IHBsYXllcjEuZ2FtZUJvYXJkLmJvYXJkLmxlbmd0aDsgcisrKSB7XG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCBwbGF5ZXIxLmdhbWVCb2FyZC5ib2FyZFswXS5sZW5ndGg7IGMrKykge1xuICAgICAgY29uc3QgcGxheWVyMVRpbGVCdG4gPSBEb21Db250cm9sbGVyLmJ5SWQoYCR7cGxheWVyMS5uYW1lfV8ke3J9XyR7Y31gKVxuICAgICAgcGxheWVyMVRpbGVCdG4uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpXG4gICAgICBwbGF5ZXIxVGlsZUJ0bi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnTXkgdGlsZScpXG5cbiAgICAgIGlmIChwbGF5ZXIxLmdhbWVCb2FyZC5ib2FyZFtyXVtjXSkge1xuICAgICAgICBwbGF5ZXIxVGlsZUJ0bi5jbGFzc0xpc3QuYWRkKCdoYXMtc2hpcCcpXG4gICAgICAgIHBsYXllcjFUaWxlQnRuLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdNeSB0aWxlIHdpdGggc2hpcCcpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBsYXllcjJUaWxlQnRuID0gRG9tQ29udHJvbGxlci5ieUlkKGAke3BsYXllcjIubmFtZX1fJHtyfV8ke2N9YClcbiAgICAgIHBsYXllcjJUaWxlQnRuLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdFbmVteSB0aWxlJylcbiAgICAgIHBsYXllcjJUaWxlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaGFuZGxlVGlsZUNsaWNrKHIsIGMpKVxuICAgIH1cbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9hc3NldHMvc3R5bGVzL3N0eWxlLnNjc3MnXG5pbXBvcnQgeyBEb21Db250cm9sbGVyIH0gZnJvbSAnLi9kb20uanMnXG5pbXBvcnQgcGFpbnRDaG9vc2VEaWZmaWN1bHR5UGFnZSBmcm9tICcuL3BhZ2VzL2Nob29zZV9kaWZmaWN1bHR5LmpzJ1xuaW1wb3J0IEZhdmljb24gZnJvbSAnLi9hc3NldHMvaW1hZ2VzL2Zhdmljb24tMTZ4MTYucG5nJ1xuXG5wYWludENob29zZURpZmZpY3VsdHlQYWdlKClcblxuY29uc3QgZmF2aWNvbiA9IERvbUNvbnRyb2xsZXIubmV3RWxlbWVudCgnbGluaycpXG5mYXZpY29uLnNldEF0dHJpYnV0ZSgncmVsJywgJ2ljb24nKVxuZmF2aWNvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnaW1hZ2UveC1pY29uJylcbmZhdmljb24uc2V0QXR0cmlidXRlKCdocmVmJywgRmF2aWNvbilcbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZmF2aWNvbilcbiJdLCJuYW1lcyI6WyJHYW1lYm9hcmRTZXJ2aWNlIiwicGFpbnRDaG9vc2VEaWZmaWN1bHR5UGFnZSIsIkRvbUNvbnRyb2xsZXIiLCJuZXdFbGVtZW50IiwidHlwZSIsImNscyIsImlkIiwidGV4dCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJ0ZXh0Q29udGVudCIsImFkZENoaWxkcmVuVG8iLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZCIsImFwcGVuZENoaWxkIiwiYnlJZCIsImdldEVsZW1lbnRCeUlkIiwiRG9tR2FtZSIsIm1hcmt1cEZvckJvYXJkIiwiYm9hcmQiLCJuYW1lIiwiYm9hcmRFbCIsInJvdyIsImxlbmd0aCIsInJvd0VsIiwiY29sIiwidGlsZUJ0biIsIm1hcmt1cEZvckFsaXZlU2hpcHMiLCJwbGF5ZXIiLCJwbGF5ZXJBbGl2ZVNoaXBzRWwiLCJhbGl2ZVNoaXBzT2YiLCJnYW1lQm9hcmQiLCJzaGlwIiwiYWxpdmVTaGlwRWwiLCJpIiwic2hpcEJsb2NrIiwidXBkYXRlQWxpdmVTaGlwc0ZvciIsImFsaXZlU2hpcHNFbCIsImxhc3RTdW5rU2hpcCIsImdldExhc3RTdW5rU2hpcCIsIkFycmF5IiwiZnJvbSIsInNvbWUiLCJyZW1vdmUiLCJuZXdSb3VuZFVwZGF0ZSIsInBsYXllcjEiLCJwMVJvdyIsInAxQ29sIiwicGxheWVyMiIsInAyUm93IiwicDJDb2wiLCJhbGl2ZVNoaXBzRWxzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInBsYXllcjFUaWxlQnRuIiwiY2xhc3NMaXN0IiwiYWRkIiwiZ2V0QXR0cmlidXRlIiwicGxheWVyMlRpbGVCdG4iLCJkaXNwbGF5R2FtZU92ZXIiLCJpc0h1bWFuIiwibWVzc2FnZSIsIm1lc3NhZ2VFbCIsInBsYXlBZ2FpbkJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbm5lckhUTUwiLCJkaXNwbGF5VW5kZXN0cm95ZWRTaGlwc09mIiwic2hpcHNDb29yZGluYXRlcyIsImFscmVhZHlBdHRhY2tlZCIsInB1c2giLCJ0aWxlRWwiLCJHYW1lYm9hcmQiLCJHYW1lU2VydmljZSIsIlNoaXBTZXJ2aWNlIiwiQ29tcHV0ZXJQbGF5ZXJTZXJ2aWNlIiwiZWFzeUFsZ29HZXRDb29yZGluYXRlcyIsImhpdEF0dGFja3MiLCJoaXRSb3ciLCJoaXRDb2wiLCJqIiwiaGFyZEFsZ29HZXRDb29yZGluYXRlcyIsImhpdFNoaXAiLCJpc1N1bmsiLCJoaXRzIiwiZmlsdGVyIiwicG9zIiwidmFsaWRUb1BsYXkiLCJuZWlnaGJvcnNWaXNpYmxlU2hpcCIsImlzVmVydGljYWwiLCJyb3dPZmZzZXQiLCJjb2xPZmZzZXQiLCJDb21wdXRlclBsYXllciIsInJhbmRvbVBsYXkiLCJnYW1lIiwiYXZvaWRTaGlwcyIsImVuZW15Qm9hcmQiLCJvdGhlclBsYXllclRoYW4iLCJyYW5kb21Sb3ciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21Db2wiLCJyZWNlaXZlQXR0YWNrIiwiZWFzeUFsZ29QbGF5IiwiaGFyZEFsZ29QbGF5IiwiaXNHYW1lT3ZlckluIiwiYWxsU2hpcHNTdW5rSW4iLCJHYW1lIiwicm91bmQiLCJuZXh0Um91bmQiLCJnZXRSb3VuZCIsIlNoaXAiLCJkaXNwbGF5IiwibWFwIiwiYm9hcmRSb3ciLCJwb3NpdGlvblZhbGlkRm9yIiwiYXR0YWNrcyIsImFsbEF0dGFja3MiLCJyIiwiYyIsImV4Y2VwdCIsInNoaXBSb3ciLCJzaGlwQ29sIiwic2hpcDEiLCJzaGlwMiIsImFsaXZlU2hpcHMiLCJtaXNzZWRBdHRhY2tzIiwiYWxsU2hpcHMiLCJTZXQiLCJwbGFjZVNoaXAiLCJwbGFjZVNoaXBzSW5pdGlhbCIsInNoaXBTaXplcyIsInNpemUiLCJoaXQiLCJoaXRQb3NpdGlvbiIsImRlbGV0ZSIsIlBsYXllciIsInBsYXkiLCJldmVyeSIsInBvc2l0aW9uIiwic2hpcENvb3JkaW5hdGVzIiwic29ydCIsImEiLCJiIiwiZmlsbCIsInBhaW50R2FtZVBhZ2UiLCJjb250ZW50RWwiLCJjaG9vc2VEaWZmaWN1bHR5RWwiLCJoZWFkaW5nIiwiZGlmZmljdWx0aWVzRWwiLCJkaWZmaWN1bHRpZXMiLCJkaWZmaWN1bHR5IiwiZGlmZmljdWx0eUVsIiwiZGlmZmljdWx0eUJ0biIsImdhbWVib2FyZHNFbCIsImdhbWVPdmVyRWwiLCJnYW1lT3ZlciIsImhhbmRsZVRpbGVDbGljayIsInBsYXllcjFCb2FyZEVsIiwicGxheWVyMkJvYXJkRWwiLCJwcmVwZW5kIiwiRmF2aWNvbiIsImZhdmljb24iLCJoZWFkIl0sInNvdXJjZVJvb3QiOiIifQ==