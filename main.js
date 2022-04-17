/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/static/Montserrat-Regular.ttf */ "./src/assets/fonts/static/Montserrat-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*||Reset  */\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n@font-face {\r\n    font-family: \"Montserrat-Regular\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n\r\n}\r\n\r\n\r\n\r\n:root{\r\n    font-size:10px;\r\n    --header-footer-bgColor:#e07a5f;\r\n    --general-font-family: \"Montserrat-Regular\";\r\n    --main-bgColor: #fbf8cc;\r\n}\r\n\r\n\r\n\r\n.container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    height:100vh;\r\n}\r\n\r\nheader{\r\n    background-color: var(--header-footer-bgColor);\r\n    font-family: var(--general-font-family);\r\n    font-size: calc(4rem + 1.5vw);\r\n    padding-top: 3.5rem;\r\n    padding-bottom: 1rem;\r\n    padding-left: 1rem;\r\n    flex: 0 0 auto;\r\n\r\n\r\n}\r\n\r\nmain{\r\n    background-color: var(--main-bgColor);\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr;\r\n    flex: 1 1 auto;\r\n    font-family: var(--general-font-family);\r\n    gap: 2rem;\r\n    padding: 2rem;\r\n\r\n    \r\n}\r\n\r\nfooter{\r\n    flex: 0 0 auto;\r\n    font-family: var(--general-font-family);\r\n    background-color: var(--header-footer-bgColor);\r\n    padding-top:1rem;\r\n    padding-bottom: 1rem;\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n/*||Projects*/\r\n\r\n.project_sidebar, .task_container{\r\n    padding: 2rem;\r\n    border: 1px solid black;\r\n    border-radius:20px;\r\n}\r\n.project_sidebar_title, .tasks_title{\r\n    font-size: calc(1rem + 1.5vw);\r\n    font-weight: bold;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 2rem;\r\n    \r\n}\r\n\r\n.project_sidebar_body, .tasks_body{\r\n    font-size: calc(0.5rem + 1.0vw);\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    margin-top: 2rem;\r\n}\r\n\r\n.plus_symbol{\r\n    width: 3rem;\r\n    vertical-align: baseline;\r\n    cursor:pointer;\r\n   \r\n}\r\n\r\n.project:hover{\r\n    background-color: #e07a5f ;\r\n    cursor: pointer;\r\n}\r\n.project-clicked{\r\n    background-color: #e07a5f ;\r\n\r\n}\r\n\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA,YAAY;AACZ;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,iCAAiC;IACjC,4CAAsD;;AAE1D;;;;AAIA;IACI,cAAc;IACd,+BAA+B;IAC/B,2CAA2C;IAC3C,uBAAuB;AAC3B;;;;AAIA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,8CAA8C;IAC9C,uCAAuC;IACvC,6BAA6B;IAC7B,mBAAmB;IACnB,oBAAoB;IACpB,kBAAkB;IAClB,cAAc;;;AAGlB;;AAEA;IACI,qCAAqC;IACrC,aAAa;IACb,8BAA8B;IAC9B,cAAc;IACd,uCAAuC;IACvC,SAAS;IACT,aAAa;;;AAGjB;;AAEA;IACI,cAAc;IACd,uCAAuC;IACvC,8CAA8C;IAC9C,gBAAgB;IAChB,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA,aAAa;;AAEb;IACI,aAAa;IACb,uBAAuB;IACvB,kBAAkB;AACtB;AACA;IACI,6BAA6B;IAC7B,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,SAAS;;AAEb;;AAEA;IACI,+BAA+B;IAC/B,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,wBAAwB;IACxB,cAAc;;AAElB;;AAEA;IACI,0BAA0B;IAC1B,eAAe;AACnB;AACA;IACI,0BAA0B;;AAE9B","sourcesContent":["/*||Reset  */\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n@font-face {\r\n    font-family: \"Montserrat-Regular\";\r\n    src: url(./assets/fonts/static/Montserrat-Regular.ttf);\r\n\r\n}\r\n\r\n\r\n\r\n:root{\r\n    font-size:10px;\r\n    --header-footer-bgColor:#e07a5f;\r\n    --general-font-family: \"Montserrat-Regular\";\r\n    --main-bgColor: #fbf8cc;\r\n}\r\n\r\n\r\n\r\n.container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    height:100vh;\r\n}\r\n\r\nheader{\r\n    background-color: var(--header-footer-bgColor);\r\n    font-family: var(--general-font-family);\r\n    font-size: calc(4rem + 1.5vw);\r\n    padding-top: 3.5rem;\r\n    padding-bottom: 1rem;\r\n    padding-left: 1rem;\r\n    flex: 0 0 auto;\r\n\r\n\r\n}\r\n\r\nmain{\r\n    background-color: var(--main-bgColor);\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr;\r\n    flex: 1 1 auto;\r\n    font-family: var(--general-font-family);\r\n    gap: 2rem;\r\n    padding: 2rem;\r\n\r\n    \r\n}\r\n\r\nfooter{\r\n    flex: 0 0 auto;\r\n    font-family: var(--general-font-family);\r\n    background-color: var(--header-footer-bgColor);\r\n    padding-top:1rem;\r\n    padding-bottom: 1rem;\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n/*||Projects*/\r\n\r\n.project_sidebar, .task_container{\r\n    padding: 2rem;\r\n    border: 1px solid black;\r\n    border-radius:20px;\r\n}\r\n.project_sidebar_title, .tasks_title{\r\n    font-size: calc(1rem + 1.5vw);\r\n    font-weight: bold;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 2rem;\r\n    \r\n}\r\n\r\n.project_sidebar_body, .tasks_body{\r\n    font-size: calc(0.5rem + 1.0vw);\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    margin-top: 2rem;\r\n}\r\n\r\n.plus_symbol{\r\n    width: 3rem;\r\n    vertical-align: baseline;\r\n    cursor:pointer;\r\n   \r\n}\r\n\r\n.project:hover{\r\n    background-color: #e07a5f ;\r\n    cursor: pointer;\r\n}\r\n.project-clicked{\r\n    background-color: #e07a5f ;\r\n\r\n}\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/icons/plusSymbol.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/plusSymbol.svg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "1177e6ac987d0ad856284c68f4484240.svg");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/DOMUtilities.js":
/*!*****************************!*\
  !*** ./src/DOMUtilities.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeElement": () => (/* binding */ makeElement)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
 
 
 
 let makeElement =  function(elementType, elementClass, elementContent){
    let newElement = document.createElement(elementType);

    if(elementClass){
        newElement.classList.add(elementClass);
    }

    if(elementContent){
        newElement.textContent = elementContent;
    }

    return newElement;
}




/***/ }),

/***/ "./src/homePageCreator.js":
/*!********************************!*\
  !*** ./src/homePageCreator.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeHeader": () => (/* binding */ makeHeader),
/* harmony export */   "makeHomePage": () => (/* binding */ makeHomePage),
/* harmony export */   "make_main": () => (/* binding */ make_main)
/* harmony export */ });
/* harmony import */ var _DOMUtilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMUtilities.js */ "./src/DOMUtilities.js");
/* harmony import */ var _assets_icons_plusSymbol_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/icons/plusSymbol.svg */ "./src/assets/icons/plusSymbol.svg");
/* harmony import */ var _projectFront_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectFront.js */ "./src/projectFront.js");
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");









 let makeHeader= function(){

    let header = (0,_DOMUtilities_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('header', undefined, "To-Do Application");

    return header;

 }

 let make_main= function(){
    
    
     let make_project_sidebar= function(){
         let project_sidebar = (0,_DOMUtilities_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', "project_sidebar", undefined);
    
         let project_sidebar_title = (0,_DOMUtilities_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', "project_sidebar_title", "Projects" );
    
         let plus_symbol = new Image();
         plus_symbol.src = _assets_icons_plusSymbol_svg__WEBPACK_IMPORTED_MODULE_1__["default"];
         plus_symbol.classList.add("plus_symbol");
         plus_symbol.alt="add-project"
    
         let project_sidebar_body= (0,_DOMUtilities_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', "project_sidebar_body", undefined);
    
          project_sidebar_title.append(plus_symbol);
          project_sidebar.append(project_sidebar_title, project_sidebar_body);

          

    
          return project_sidebar
     }

     let make_task_container= function(){
         let task_container= (0,_DOMUtilities_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)("div", "task_container", undefined);
         let tasks_title = (0,_DOMUtilities_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)("div", "tasks_title", "Tasks");
         let plus_symbol= new Image();
         plus_symbol.src= _assets_icons_plusSymbol_svg__WEBPACK_IMPORTED_MODULE_1__["default"];
         plus_symbol.classList.add("plus_symbol");
         plus_symbol.alt="add task";
         let tasks_body= (0,_DOMUtilities_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)("div", "tasks_body", undefined);

         tasks_title.append(plus_symbol);
         task_container.append(tasks_title, tasks_body);

         return task_container

     }

     
     let main= (0,_DOMUtilities_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('main', undefined, undefined);
     main.append(make_project_sidebar(), make_task_container())
     return main;
 }

 let make_footer = function (){
     let footer = (0,_DOMUtilities_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)("footer", undefined, "with Love");
     return footer;
 }

 let makeHomePage = function(){
     
    let header= makeHeader();
    let main= make_main();
    let footer = make_footer();

    let container= document.querySelector(".container");
    container.append(header, main, footer);

    //here make the UI for the default project. 
    (0,_projectFront_js__WEBPACK_IMPORTED_MODULE_2__.makeNewProjectDiv)("inbox");
    //add the default project in our logic
    (0,_logic_js__WEBPACK_IMPORTED_MODULE_3__.addDefaultProject)();
    

 }

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addDefaultProject": () => (/* binding */ addDefaultProject),
/* harmony export */   "addNewProject": () => (/* binding */ addNewProject),
/* harmony export */   "addnewTaskToCurrentProject": () => (/* binding */ addnewTaskToCurrentProject),
/* harmony export */   "getCurrentlySelectedProject": () => (/* binding */ getCurrentlySelectedProject),
/* harmony export */   "setCurrentlySelectedProject": () => (/* binding */ setCurrentlySelectedProject)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");


let projectsArray= [];
let currentlySelectedProject;

function addDefaultProject(){
    let defaultProject= (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.Project)("inbox");
    projectsArray.push(defaultProject);
    currentlySelectedProject= defaultProject;
    console.log(projectsArray);
    console.log(currentlySelectedProject);
}

function addNewProject(contentOfInput){
    console.log("new project added!.")
    console.log(contentOfInput);

    //make a new project and add to the projectsArray[]
    let newProject= (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.Project)(contentOfInput);
    projectsArray.push(newProject);
    console.log(projectsArray);

}

function setCurrentlySelectedProject(clickedProject){
console.log(`the project selected  is: ${clickedProject} `);

currentlySelectedProject= projectsArray.filter((element)=>{
    if(element.name==clickedProject){
        return true;
    }
})

console.log(currentlySelectedProject);
}

function getCurrentlySelectedProject(){
    return currentlySelectedProject;
}

function addnewTaskToCurrentProject(taskName){
    currentlySelectedProject.addTask(taskName);
}

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
//here make the constructor for the project object. 

let Project = function (name) {


    let project_name=name;
    let tasks=[];

    function addTask(task){
        tasks.push(task);
    }

    function getNumberOfTasks(){
        return tasks.length;
    }

    return {project_name, addTask, tasks, getNumberOfTasks};

}



/***/ }),

/***/ "./src/projectFront.js":
/*!*****************************!*\
  !*** ./src/projectFront.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeNewProjectDiv": () => (/* binding */ makeNewProjectDiv),
/* harmony export */   "setUpListeners": () => (/* binding */ setUpListeners)
/* harmony export */ });
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");
/* harmony import */ var _DOMUtilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMUtilities.js */ "./src/DOMUtilities.js");




//now add listener to the add sign. 

function addListenerOnPlusSign() {

    //listener on the plus sign for the project

    let project_sidebar_title = document.querySelector(".project_sidebar_title");

    let plus_symbol = project_sidebar_title.querySelector(".plus_symbol");

    plus_symbol.addEventListener("click", () => {
        console.log("plus sign was clicked");
        //make an input box;
        makeAnInputBox();
    })

}


  //function to make an input box;
function makeAnInputBox(){
    let project_sidebar_body = document.querySelector(".project_sidebar_body");
    let input_box = (0,_DOMUtilities_js__WEBPACK_IMPORTED_MODULE_1__.makeElement)("input", "project_input", undefined);
    project_sidebar_body.appendChild(input_box);
    input_box.focus();
    addListenerOnInputBox(input_box);
}

function addListenerOnInputBox(input_box) {
    //add a new div and add the project to the array.
    input_box.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            console.log("enter key pressed!");
            (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.addNewProject)(input_box.value);
            input_box.remove();

            //function call here
            makeNewProjectDiv(input_box.value);
        }
    })
}

function makeNewProjectDiv(nameOfProject){
       //making new div
       let newProject = (0,_DOMUtilities_js__WEBPACK_IMPORTED_MODULE_1__.makeElement)("div", "project", nameOfProject);
       //add listener on project 
       newProject.addEventListener("click", addListenerOnProject);
       let project_sidebar_body = document.querySelector(".project_sidebar_body");
       project_sidebar_body.append(newProject);
}


function addListenerOnProject(e) {
    console.log("project clicked!");
    let previouslyClickedProject = document.querySelector(".project-clicked");
    if (previouslyClickedProject) {
        previouslyClickedProject.classList.toggle("project-clicked");
    }
    e.target.classList.add("project-clicked");
    (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.setCurrentlySelectedProject)(e.target.textContent);
}




function setUpListeners() {
    addListenerOnPlusSign();
}

/***/ }),

/***/ "./src/taskFront.js":
/*!**************************!*\
  !*** ./src/taskFront.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setUpListenerTask": () => (/* binding */ setUpListenerTask)
/* harmony export */ });
/* harmony import */ var _DOMUtilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMUtilities.js */ "./src/DOMUtilities.js");
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");




function setUpListenerTask() {
    let task_title = document.querySelector(".tasks_title");
    let plus_symbol = task_title.querySelector(".plus_symbol");
    plus_symbol.addEventListener("click", addNewTask);

}

function addNewTask() {
    console.log("plus sign tasks clicked!");
    //add new task to the UI first
    makeAnInputBox();
}

function makeAnInputBox() {
    let tasks_body = document.querySelector(".tasks_body");
    let input_box = (0,_DOMUtilities_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)("input", "project_input", undefined);
    tasks_body.appendChild(input_box);
    input_box.focus();
    addListenerOnInputBox(input_box);
}

function addListenerOnInputBox(input_box) {
    //add a new div and add the project to the array.
    input_box.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            console.log("enter key pressed!");
            input_box.remove();

            //function call here
            newTaskDiv(input_box.value);
        }
    })
}

function newTaskDiv(taskName) {
    let taskdiv = (0,_DOMUtilities_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)("div", "task", undefined);
    let currentlySelectedProject = (0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentlySelectedProject)()
    console.log(currentlySelectedProject);
    console.log("the number of tasks in currently selected project is")
    console.log(currentlySelectedProject.getNumberOfTasks());

    let numberOftasksInCurrentlySelectedProject = currentlySelectedProject.getNumberOfTasks();
    let checkBoxInput = (0,_DOMUtilities_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)("input", undefined, undefined);
    checkBoxInput.setAttribute("type", "checkbox");
    checkBoxInput.setAttribute("data", numberOftasksInCurrentlySelectedProject);
    checkBoxInput.setAttribute("id", numberOftasksInCurrentlySelectedProject);
    console.log(checkBoxInput);

    //change below line in the end
    (0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.addnewTaskToCurrentProject)(taskName);

    //change the name of the task here.
    let label = (0,_DOMUtilities_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)("label", undefined, taskName);
    label.setAttribute("for", numberOftasksInCurrentlySelectedProject);

    taskdiv.append(checkBoxInput, label);
    let tasks_body = document.querySelector(".tasks_body");
    tasks_body.append(taskdiv);




}

/***/ }),

/***/ "./src/assets/fonts/static/Montserrat-Regular.ttf":
/*!********************************************************!*\
  !*** ./src/assets/fonts/static/Montserrat-Regular.ttf ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ac98a5f5ca71180fe293.ttf";

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homePageCreator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePageCreator.js */ "./src/homePageCreator.js");
/* harmony import */ var _projectFront_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectFront.js */ "./src/projectFront.js");
/* harmony import */ var _taskFront_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskFront.js */ "./src/taskFront.js");

 


(0,_homePageCreator_js__WEBPACK_IMPORTED_MODULE_0__.makeHomePage)();
(0,_projectFront_js__WEBPACK_IMPORTED_MODULE_1__.setUpListeners)();
(0,_taskFront_js__WEBPACK_IMPORTED_MODULE_2__.setUpListenerTask)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7O0FDckJvRDtBQUNKO0FBQ0M7QUFDakQ7QUFDQSxpRUFBWTtBQUNaLGdFQUFjO0FBQ2QsZ0VBQWlCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvYXNzZXRzL2ljb25zL3BsdXNTeW1ib2wuc3ZnIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9ET01VdGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9ob21lUGFnZUNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9wcm9qZWN0RnJvbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy90YXNrRnJvbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9zdGF0aWMvTW9udHNlcnJhdC1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qfHxSZXNldCAgKi9cXHJcXG4qe1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXQtUmVndWxhclxcXCI7XFxyXFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuOnJvb3R7XFxyXFxuICAgIGZvbnQtc2l6ZToxMHB4O1xcclxcbiAgICAtLWhlYWRlci1mb290ZXItYmdDb2xvcjojZTA3YTVmO1xcclxcbiAgICAtLWdlbmVyYWwtZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0LVJlZ3VsYXJcXFwiO1xcclxcbiAgICAtLW1haW4tYmdDb2xvcjogI2ZiZjhjYztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgaGVpZ2h0OjEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1mb290ZXItYmdDb2xvcik7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1nZW5lcmFsLWZvbnQtZmFtaWx5KTtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDRyZW0gKyAxLjV2dyk7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAzLjVyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcclxcblxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5tYWlue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnQ29sb3IpO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxyXFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tZ2VuZXJhbC1mb250LWZhbWlseSk7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG5cXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbmZvb3RlcntcXHJcXG4gICAgZmxleDogMCAwIGF1dG87XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1nZW5lcmFsLWZvbnQtZmFtaWx5KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWZvb3Rlci1iZ0NvbG9yKTtcXHJcXG4gICAgcGFkZGluZy10b3A6MXJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi8qfHxQcm9qZWN0cyovXFxyXFxuXFxyXFxuLnByb2plY3Rfc2lkZWJhciwgLnRhc2tfY29udGFpbmVye1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czoyMHB4O1xcclxcbn1cXHJcXG4ucHJvamVjdF9zaWRlYmFyX3RpdGxlLCAudGFza3NfdGl0bGV7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYygxcmVtICsgMS41dncpO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdF9zaWRlYmFyX2JvZHksIC50YXNrc19ib2R5e1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoMC41cmVtICsgMS4wdncpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5wbHVzX3N5bWJvbHtcXHJcXG4gICAgd2lkdGg6IDNyZW07XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxyXFxuICAgXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0OmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTA3YTVmIDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ucHJvamVjdC1jbGlja2Vke1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTA3YTVmIDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsWUFBWTtBQUNaO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsNENBQXNEOztBQUUxRDs7OztBQUlBO0lBQ0ksY0FBYztJQUNkLCtCQUErQjtJQUMvQiwyQ0FBMkM7SUFDM0MsdUJBQXVCO0FBQzNCOzs7O0FBSUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw4Q0FBOEM7SUFDOUMsdUNBQXVDO0lBQ3ZDLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixjQUFjOzs7QUFHbEI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2QsdUNBQXVDO0lBQ3ZDLFNBQVM7SUFDVCxhQUFhOzs7QUFHakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsdUNBQXVDO0lBQ3ZDLDhDQUE4QztJQUM5QyxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUEsYUFBYTs7QUFFYjtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFNBQVM7O0FBRWI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHdCQUF3QjtJQUN4QixjQUFjOztBQUVsQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSwwQkFBMEI7O0FBRTlCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qfHxSZXNldCAgKi9cXHJcXG4qe1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXQtUmVndWxhclxcXCI7XFxyXFxuICAgIHNyYzogdXJsKC4vYXNzZXRzL2ZvbnRzL3N0YXRpYy9Nb250c2VycmF0LVJlZ3VsYXIudHRmKTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuOnJvb3R7XFxyXFxuICAgIGZvbnQtc2l6ZToxMHB4O1xcclxcbiAgICAtLWhlYWRlci1mb290ZXItYmdDb2xvcjojZTA3YTVmO1xcclxcbiAgICAtLWdlbmVyYWwtZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0LVJlZ3VsYXJcXFwiO1xcclxcbiAgICAtLW1haW4tYmdDb2xvcjogI2ZiZjhjYztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgaGVpZ2h0OjEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1mb290ZXItYmdDb2xvcik7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1nZW5lcmFsLWZvbnQtZmFtaWx5KTtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDRyZW0gKyAxLjV2dyk7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAzLjVyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcclxcblxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5tYWlue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnQ29sb3IpO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxyXFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tZ2VuZXJhbC1mb250LWZhbWlseSk7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG5cXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbmZvb3RlcntcXHJcXG4gICAgZmxleDogMCAwIGF1dG87XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1nZW5lcmFsLWZvbnQtZmFtaWx5KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWZvb3Rlci1iZ0NvbG9yKTtcXHJcXG4gICAgcGFkZGluZy10b3A6MXJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi8qfHxQcm9qZWN0cyovXFxyXFxuXFxyXFxuLnByb2plY3Rfc2lkZWJhciwgLnRhc2tfY29udGFpbmVye1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czoyMHB4O1xcclxcbn1cXHJcXG4ucHJvamVjdF9zaWRlYmFyX3RpdGxlLCAudGFza3NfdGl0bGV7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYygxcmVtICsgMS41dncpO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdF9zaWRlYmFyX2JvZHksIC50YXNrc19ib2R5e1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoMC41cmVtICsgMS4wdncpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5wbHVzX3N5bWJvbHtcXHJcXG4gICAgd2lkdGg6IDNyZW07XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxyXFxuICAgXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0OmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTA3YTVmIDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ucHJvamVjdC1jbGlja2Vke1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTA3YTVmIDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjExNzdlNmFjOTg3ZDBhZDg1NjI4NGM2OGY0NDg0MjQwLnN2Z1wiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIiBcclxuIGltcG9ydCAnLi9zdHlsZXMuY3NzJ1xyXG4gXHJcbiBleHBvcnQgbGV0IG1ha2VFbGVtZW50ID0gIGZ1bmN0aW9uKGVsZW1lbnRUeXBlLCBlbGVtZW50Q2xhc3MsIGVsZW1lbnRDb250ZW50KXtcclxuICAgIGxldCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSk7XHJcblxyXG4gICAgaWYoZWxlbWVudENsYXNzKXtcclxuICAgICAgICBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoZWxlbWVudENsYXNzKTtcclxuICAgIH1cclxuXHJcbiAgICBpZihlbGVtZW50Q29udGVudCl7XHJcbiAgICAgICAgbmV3RWxlbWVudC50ZXh0Q29udGVudCA9IGVsZW1lbnRDb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXdFbGVtZW50O1xyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHttYWtlRWxlbWVudH0gZnJvbSAnLi9ET01VdGlsaXRpZXMuanMnXHJcbmltcG9ydCBwbHVzU3ltYm9sIGZyb20gXCIuL2Fzc2V0cy9pY29ucy9wbHVzU3ltYm9sLnN2Z1wiO1xyXG5pbXBvcnQge21ha2VOZXdQcm9qZWN0RGl2fSBmcm9tIFwiLi9wcm9qZWN0RnJvbnQuanNcIjtcclxuaW1wb3J0IHthZGREZWZhdWx0UHJvamVjdH0gZnJvbSBcIi4vbG9naWMuanNcIlxyXG5cclxuXHJcblxyXG5cclxuXHJcbiBleHBvcnQgbGV0IG1ha2VIZWFkZXI9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgbGV0IGhlYWRlciA9IG1ha2VFbGVtZW50KCdoZWFkZXInLCB1bmRlZmluZWQsIFwiVG8tRG8gQXBwbGljYXRpb25cIik7XHJcblxyXG4gICAgcmV0dXJuIGhlYWRlcjtcclxuXHJcbiB9XHJcblxyXG4gZXhwb3J0IGxldCBtYWtlX21haW49IGZ1bmN0aW9uKCl7XHJcbiAgICBcclxuICAgIFxyXG4gICAgIGxldCBtYWtlX3Byb2plY3Rfc2lkZWJhcj0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgbGV0IHByb2plY3Rfc2lkZWJhciA9IG1ha2VFbGVtZW50KCdkaXYnLCBcInByb2plY3Rfc2lkZWJhclwiLCB1bmRlZmluZWQpO1xyXG4gICAgXHJcbiAgICAgICAgIGxldCBwcm9qZWN0X3NpZGViYXJfdGl0bGUgPSBtYWtlRWxlbWVudCgnZGl2JywgXCJwcm9qZWN0X3NpZGViYXJfdGl0bGVcIiwgXCJQcm9qZWN0c1wiICk7XHJcbiAgICBcclxuICAgICAgICAgbGV0IHBsdXNfc3ltYm9sID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgIHBsdXNfc3ltYm9sLnNyYyA9IHBsdXNTeW1ib2w7XHJcbiAgICAgICAgIHBsdXNfc3ltYm9sLmNsYXNzTGlzdC5hZGQoXCJwbHVzX3N5bWJvbFwiKTtcclxuICAgICAgICAgcGx1c19zeW1ib2wuYWx0PVwiYWRkLXByb2plY3RcIlxyXG4gICAgXHJcbiAgICAgICAgIGxldCBwcm9qZWN0X3NpZGViYXJfYm9keT0gbWFrZUVsZW1lbnQoJ2RpdicsIFwicHJvamVjdF9zaWRlYmFyX2JvZHlcIiwgdW5kZWZpbmVkKTtcclxuICAgIFxyXG4gICAgICAgICAgcHJvamVjdF9zaWRlYmFyX3RpdGxlLmFwcGVuZChwbHVzX3N5bWJvbCk7XHJcbiAgICAgICAgICBwcm9qZWN0X3NpZGViYXIuYXBwZW5kKHByb2plY3Rfc2lkZWJhcl90aXRsZSwgcHJvamVjdF9zaWRlYmFyX2JvZHkpO1xyXG5cclxuICAgICAgICAgIFxyXG5cclxuICAgIFxyXG4gICAgICAgICAgcmV0dXJuIHByb2plY3Rfc2lkZWJhclxyXG4gICAgIH1cclxuXHJcbiAgICAgbGV0IG1ha2VfdGFza19jb250YWluZXI9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgIGxldCB0YXNrX2NvbnRhaW5lcj0gbWFrZUVsZW1lbnQoXCJkaXZcIiwgXCJ0YXNrX2NvbnRhaW5lclwiLCB1bmRlZmluZWQpO1xyXG4gICAgICAgICBsZXQgdGFza3NfdGl0bGUgPSBtYWtlRWxlbWVudChcImRpdlwiLCBcInRhc2tzX3RpdGxlXCIsIFwiVGFza3NcIik7XHJcbiAgICAgICAgIGxldCBwbHVzX3N5bWJvbD0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgIHBsdXNfc3ltYm9sLnNyYz0gcGx1c1N5bWJvbDtcclxuICAgICAgICAgcGx1c19zeW1ib2wuY2xhc3NMaXN0LmFkZChcInBsdXNfc3ltYm9sXCIpO1xyXG4gICAgICAgICBwbHVzX3N5bWJvbC5hbHQ9XCJhZGQgdGFza1wiO1xyXG4gICAgICAgICBsZXQgdGFza3NfYm9keT0gbWFrZUVsZW1lbnQoXCJkaXZcIiwgXCJ0YXNrc19ib2R5XCIsIHVuZGVmaW5lZCk7XHJcblxyXG4gICAgICAgICB0YXNrc190aXRsZS5hcHBlbmQocGx1c19zeW1ib2wpO1xyXG4gICAgICAgICB0YXNrX2NvbnRhaW5lci5hcHBlbmQodGFza3NfdGl0bGUsIHRhc2tzX2JvZHkpO1xyXG5cclxuICAgICAgICAgcmV0dXJuIHRhc2tfY29udGFpbmVyXHJcblxyXG4gICAgIH1cclxuXHJcbiAgICAgXHJcbiAgICAgbGV0IG1haW49IG1ha2VFbGVtZW50KCdtYWluJywgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xyXG4gICAgIG1haW4uYXBwZW5kKG1ha2VfcHJvamVjdF9zaWRlYmFyKCksIG1ha2VfdGFza19jb250YWluZXIoKSlcclxuICAgICByZXR1cm4gbWFpbjtcclxuIH1cclxuXHJcbiBsZXQgbWFrZV9mb290ZXIgPSBmdW5jdGlvbiAoKXtcclxuICAgICBsZXQgZm9vdGVyID0gbWFrZUVsZW1lbnQoXCJmb290ZXJcIiwgdW5kZWZpbmVkLCBcIndpdGggTG92ZVwiKTtcclxuICAgICByZXR1cm4gZm9vdGVyO1xyXG4gfVxyXG5cclxuIGV4cG9ydCBsZXQgbWFrZUhvbWVQYWdlID0gZnVuY3Rpb24oKXtcclxuICAgICBcclxuICAgIGxldCBoZWFkZXI9IG1ha2VIZWFkZXIoKTtcclxuICAgIGxldCBtYWluPSBtYWtlX21haW4oKTtcclxuICAgIGxldCBmb290ZXIgPSBtYWtlX2Zvb3RlcigpO1xyXG5cclxuICAgIGxldCBjb250YWluZXI9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZChoZWFkZXIsIG1haW4sIGZvb3Rlcik7XHJcblxyXG4gICAgLy9oZXJlIG1ha2UgdGhlIFVJIGZvciB0aGUgZGVmYXVsdCBwcm9qZWN0LiBcclxuICAgIG1ha2VOZXdQcm9qZWN0RGl2KFwiaW5ib3hcIik7XHJcbiAgICAvL2FkZCB0aGUgZGVmYXVsdCBwcm9qZWN0IGluIG91ciBsb2dpY1xyXG4gICAgYWRkRGVmYXVsdFByb2plY3QoKTtcclxuICAgIFxyXG5cclxuIH0iLCJpbXBvcnQge1Byb2plY3R9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcclxuXHJcbmxldCBwcm9qZWN0c0FycmF5PSBbXTtcclxubGV0IGN1cnJlbnRseVNlbGVjdGVkUHJvamVjdDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGREZWZhdWx0UHJvamVjdCgpe1xyXG4gICAgbGV0IGRlZmF1bHRQcm9qZWN0PSBQcm9qZWN0KFwiaW5ib3hcIik7XHJcbiAgICBwcm9qZWN0c0FycmF5LnB1c2goZGVmYXVsdFByb2plY3QpO1xyXG4gICAgY3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0PSBkZWZhdWx0UHJvamVjdDtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RzQXJyYXkpO1xyXG4gICAgY29uc29sZS5sb2coY3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1Byb2plY3QoY29udGVudE9mSW5wdXQpe1xyXG4gICAgY29uc29sZS5sb2coXCJuZXcgcHJvamVjdCBhZGRlZCEuXCIpXHJcbiAgICBjb25zb2xlLmxvZyhjb250ZW50T2ZJbnB1dCk7XHJcblxyXG4gICAgLy9tYWtlIGEgbmV3IHByb2plY3QgYW5kIGFkZCB0byB0aGUgcHJvamVjdHNBcnJheVtdXHJcbiAgICBsZXQgbmV3UHJvamVjdD0gUHJvamVjdChjb250ZW50T2ZJbnB1dCk7XHJcbiAgICBwcm9qZWN0c0FycmF5LnB1c2gobmV3UHJvamVjdCk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5KTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QoY2xpY2tlZFByb2plY3Qpe1xyXG5jb25zb2xlLmxvZyhgdGhlIHByb2plY3Qgc2VsZWN0ZWQgIGlzOiAke2NsaWNrZWRQcm9qZWN0fSBgKTtcclxuXHJcbmN1cnJlbnRseVNlbGVjdGVkUHJvamVjdD0gcHJvamVjdHNBcnJheS5maWx0ZXIoKGVsZW1lbnQpPT57XHJcbiAgICBpZihlbGVtZW50Lm5hbWU9PWNsaWNrZWRQcm9qZWN0KXtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufSlcclxuXHJcbmNvbnNvbGUubG9nKGN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QoKXtcclxuICAgIHJldHVybiBjdXJyZW50bHlTZWxlY3RlZFByb2plY3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRuZXdUYXNrVG9DdXJyZW50UHJvamVjdCh0YXNrTmFtZSl7XHJcbiAgICBjdXJyZW50bHlTZWxlY3RlZFByb2plY3QuYWRkVGFzayh0YXNrTmFtZSk7XHJcbn0iLCIvL2hlcmUgbWFrZSB0aGUgY29uc3RydWN0b3IgZm9yIHRoZSBwcm9qZWN0IG9iamVjdC4gXHJcblxyXG5leHBvcnQgbGV0IFByb2plY3QgPSBmdW5jdGlvbiAobmFtZSkge1xyXG5cclxuXHJcbiAgICBsZXQgcHJvamVjdF9uYW1lPW5hbWU7XHJcbiAgICBsZXQgdGFza3M9W107XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkVGFzayh0YXNrKXtcclxuICAgICAgICB0YXNrcy5wdXNoKHRhc2spO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldE51bWJlck9mVGFza3MoKXtcclxuICAgICAgICByZXR1cm4gdGFza3MubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7cHJvamVjdF9uYW1lLCBhZGRUYXNrLCB0YXNrcywgZ2V0TnVtYmVyT2ZUYXNrc307XHJcblxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBhZGROZXdQcm9qZWN0LCBzZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QgfSBmcm9tIFwiLi9sb2dpYy5qc1wiXHJcbmltcG9ydCB7IG1ha2VFbGVtZW50IH0gZnJvbSAnLi9ET01VdGlsaXRpZXMuanMnXHJcblxyXG5cclxuLy9ub3cgYWRkIGxpc3RlbmVyIHRvIHRoZSBhZGQgc2lnbi4gXHJcblxyXG5mdW5jdGlvbiBhZGRMaXN0ZW5lck9uUGx1c1NpZ24oKSB7XHJcblxyXG4gICAgLy9saXN0ZW5lciBvbiB0aGUgcGx1cyBzaWduIGZvciB0aGUgcHJvamVjdFxyXG5cclxuICAgIGxldCBwcm9qZWN0X3NpZGViYXJfdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3Rfc2lkZWJhcl90aXRsZVwiKTtcclxuXHJcbiAgICBsZXQgcGx1c19zeW1ib2wgPSBwcm9qZWN0X3NpZGViYXJfdGl0bGUucXVlcnlTZWxlY3RvcihcIi5wbHVzX3N5bWJvbFwiKTtcclxuXHJcbiAgICBwbHVzX3N5bWJvbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGx1cyBzaWduIHdhcyBjbGlja2VkXCIpO1xyXG4gICAgICAgIC8vbWFrZSBhbiBpbnB1dCBib3g7XHJcbiAgICAgICAgbWFrZUFuSW5wdXRCb3goKTtcclxuICAgIH0pXHJcblxyXG59XHJcblxyXG5cclxuICAvL2Z1bmN0aW9uIHRvIG1ha2UgYW4gaW5wdXQgYm94O1xyXG5mdW5jdGlvbiBtYWtlQW5JbnB1dEJveCgpe1xyXG4gICAgbGV0IHByb2plY3Rfc2lkZWJhcl9ib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0X3NpZGViYXJfYm9keVwiKTtcclxuICAgIGxldCBpbnB1dF9ib3ggPSBtYWtlRWxlbWVudChcImlucHV0XCIsIFwicHJvamVjdF9pbnB1dFwiLCB1bmRlZmluZWQpO1xyXG4gICAgcHJvamVjdF9zaWRlYmFyX2JvZHkuYXBwZW5kQ2hpbGQoaW5wdXRfYm94KTtcclxuICAgIGlucHV0X2JveC5mb2N1cygpO1xyXG4gICAgYWRkTGlzdGVuZXJPbklucHV0Qm94KGlucHV0X2JveCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZExpc3RlbmVyT25JbnB1dEJveChpbnB1dF9ib3gpIHtcclxuICAgIC8vYWRkIGEgbmV3IGRpdiBhbmQgYWRkIHRoZSBwcm9qZWN0IHRvIHRoZSBhcnJheS5cclxuICAgIGlucHV0X2JveC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVudGVyIGtleSBwcmVzc2VkIVwiKTtcclxuICAgICAgICAgICAgYWRkTmV3UHJvamVjdChpbnB1dF9ib3gudmFsdWUpO1xyXG4gICAgICAgICAgICBpbnB1dF9ib3gucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICAvL2Z1bmN0aW9uIGNhbGwgaGVyZVxyXG4gICAgICAgICAgICBtYWtlTmV3UHJvamVjdERpdihpbnB1dF9ib3gudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlTmV3UHJvamVjdERpdihuYW1lT2ZQcm9qZWN0KXtcclxuICAgICAgIC8vbWFraW5nIG5ldyBkaXZcclxuICAgICAgIGxldCBuZXdQcm9qZWN0ID0gbWFrZUVsZW1lbnQoXCJkaXZcIiwgXCJwcm9qZWN0XCIsIG5hbWVPZlByb2plY3QpO1xyXG4gICAgICAgLy9hZGQgbGlzdGVuZXIgb24gcHJvamVjdCBcclxuICAgICAgIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZExpc3RlbmVyT25Qcm9qZWN0KTtcclxuICAgICAgIGxldCBwcm9qZWN0X3NpZGViYXJfYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdF9zaWRlYmFyX2JvZHlcIik7XHJcbiAgICAgICBwcm9qZWN0X3NpZGViYXJfYm9keS5hcHBlbmQobmV3UHJvamVjdCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBhZGRMaXN0ZW5lck9uUHJvamVjdChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInByb2plY3QgY2xpY2tlZCFcIik7XHJcbiAgICBsZXQgcHJldmlvdXNseUNsaWNrZWRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNsaWNrZWRcIik7XHJcbiAgICBpZiAocHJldmlvdXNseUNsaWNrZWRQcm9qZWN0KSB7XHJcbiAgICAgICAgcHJldmlvdXNseUNsaWNrZWRQcm9qZWN0LmNsYXNzTGlzdC50b2dnbGUoXCJwcm9qZWN0LWNsaWNrZWRcIik7XHJcbiAgICB9XHJcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jbGlja2VkXCIpO1xyXG4gICAgc2V0Q3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0KGUudGFyZ2V0LnRleHRDb250ZW50KTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFVwTGlzdGVuZXJzKCkge1xyXG4gICAgYWRkTGlzdGVuZXJPblBsdXNTaWduKCk7XHJcbn0iLCJpbXBvcnQgeyBtYWtlRWxlbWVudCB9IGZyb20gJy4vRE9NVXRpbGl0aWVzLmpzJ1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QsIGFkZG5ld1Rhc2tUb0N1cnJlbnRQcm9qZWN0IH0gZnJvbSBcIi4vbG9naWMuanNcIlxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRVcExpc3RlbmVyVGFzaygpIHtcclxuICAgIGxldCB0YXNrX3RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc190aXRsZVwiKTtcclxuICAgIGxldCBwbHVzX3N5bWJvbCA9IHRhc2tfdGl0bGUucXVlcnlTZWxlY3RvcihcIi5wbHVzX3N5bWJvbFwiKTtcclxuICAgIHBsdXNfc3ltYm9sLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGROZXdUYXNrKTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZE5ld1Rhc2soKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInBsdXMgc2lnbiB0YXNrcyBjbGlja2VkIVwiKTtcclxuICAgIC8vYWRkIG5ldyB0YXNrIHRvIHRoZSBVSSBmaXJzdFxyXG4gICAgbWFrZUFuSW5wdXRCb3goKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFrZUFuSW5wdXRCb3goKSB7XHJcbiAgICBsZXQgdGFza3NfYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NfYm9keVwiKTtcclxuICAgIGxldCBpbnB1dF9ib3ggPSBtYWtlRWxlbWVudChcImlucHV0XCIsIFwicHJvamVjdF9pbnB1dFwiLCB1bmRlZmluZWQpO1xyXG4gICAgdGFza3NfYm9keS5hcHBlbmRDaGlsZChpbnB1dF9ib3gpO1xyXG4gICAgaW5wdXRfYm94LmZvY3VzKCk7XHJcbiAgICBhZGRMaXN0ZW5lck9uSW5wdXRCb3goaW5wdXRfYm94KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkTGlzdGVuZXJPbklucHV0Qm94KGlucHV0X2JveCkge1xyXG4gICAgLy9hZGQgYSBuZXcgZGl2IGFuZCBhZGQgdGhlIHByb2plY3QgdG8gdGhlIGFycmF5LlxyXG4gICAgaW5wdXRfYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW50ZXIga2V5IHByZXNzZWQhXCIpO1xyXG4gICAgICAgICAgICBpbnB1dF9ib3gucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICAvL2Z1bmN0aW9uIGNhbGwgaGVyZVxyXG4gICAgICAgICAgICBuZXdUYXNrRGl2KGlucHV0X2JveC52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gbmV3VGFza0Rpdih0YXNrTmFtZSkge1xyXG4gICAgbGV0IHRhc2tkaXYgPSBtYWtlRWxlbWVudChcImRpdlwiLCBcInRhc2tcIiwgdW5kZWZpbmVkKTtcclxuICAgIGxldCBjdXJyZW50bHlTZWxlY3RlZFByb2plY3QgPSBnZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QoKVxyXG4gICAgY29uc29sZS5sb2coY3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0KTtcclxuICAgIGNvbnNvbGUubG9nKFwidGhlIG51bWJlciBvZiB0YXNrcyBpbiBjdXJyZW50bHkgc2VsZWN0ZWQgcHJvamVjdCBpc1wiKVxyXG4gICAgY29uc29sZS5sb2coY3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0LmdldE51bWJlck9mVGFza3MoKSk7XHJcblxyXG4gICAgbGV0IG51bWJlck9mdGFza3NJbkN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCA9IGN1cnJlbnRseVNlbGVjdGVkUHJvamVjdC5nZXROdW1iZXJPZlRhc2tzKCk7XHJcbiAgICBsZXQgY2hlY2tCb3hJbnB1dCA9IG1ha2VFbGVtZW50KFwiaW5wdXRcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xyXG4gICAgY2hlY2tCb3hJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XHJcbiAgICBjaGVja0JveElucHV0LnNldEF0dHJpYnV0ZShcImRhdGFcIiwgbnVtYmVyT2Z0YXNrc0luQ3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0KTtcclxuICAgIGNoZWNrQm94SW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgbnVtYmVyT2Z0YXNrc0luQ3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0KTtcclxuICAgIGNvbnNvbGUubG9nKGNoZWNrQm94SW5wdXQpO1xyXG5cclxuICAgIC8vY2hhbmdlIGJlbG93IGxpbmUgaW4gdGhlIGVuZFxyXG4gICAgYWRkbmV3VGFza1RvQ3VycmVudFByb2plY3QodGFza05hbWUpO1xyXG5cclxuICAgIC8vY2hhbmdlIHRoZSBuYW1lIG9mIHRoZSB0YXNrIGhlcmUuXHJcbiAgICBsZXQgbGFiZWwgPSBtYWtlRWxlbWVudChcImxhYmVsXCIsIHVuZGVmaW5lZCwgdGFza05hbWUpO1xyXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIG51bWJlck9mdGFza3NJbkN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCk7XHJcblxyXG4gICAgdGFza2Rpdi5hcHBlbmQoY2hlY2tCb3hJbnB1dCwgbGFiZWwpO1xyXG4gICAgbGV0IHRhc2tzX2JvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzX2JvZHlcIik7XHJcbiAgICB0YXNrc19ib2R5LmFwcGVuZCh0YXNrZGl2KTtcclxuXHJcblxyXG5cclxuXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCB7IG1ha2VIb21lUGFnZSB9IGZyb20gXCIuL2hvbWVQYWdlQ3JlYXRvci5qc1wiO1xyXG5pbXBvcnQge3NldFVwTGlzdGVuZXJzfSBmcm9tIFwiLi9wcm9qZWN0RnJvbnQuanNcIiBcclxuaW1wb3J0IHtzZXRVcExpc3RlbmVyVGFza30gZnJvbSBcIi4vdGFza0Zyb250LmpzXCI7XHJcblxyXG5tYWtlSG9tZVBhZ2UoKTtcclxuc2V0VXBMaXN0ZW5lcnMoKTtcclxuc2V0VXBMaXN0ZW5lclRhc2soKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=