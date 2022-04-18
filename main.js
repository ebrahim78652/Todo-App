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
___CSS_LOADER_EXPORT___.push([module.id, "/*||Reset  */\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n@font-face {\r\n    font-family: \"Montserrat-Regular\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n\r\n}\r\n\r\n\r\n\r\n:root{\r\n    font-size:10px;\r\n    --header-footer-bgColor:#e07a5f;\r\n    --general-font-family: \"Montserrat-Regular\";\r\n    --main-bgColor: #fbf8cc;\r\n}\r\n\r\n\r\n\r\n.container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    height:100vh;\r\n}\r\n\r\nheader{\r\n    background-color: var(--header-footer-bgColor);\r\n    font-family: var(--general-font-family);\r\n    font-size: calc(4rem + 1.5vw);\r\n    padding-top: 3.5rem;\r\n    padding-bottom: 1rem;\r\n    padding-left: 1rem;\r\n    flex: 0 0 auto;\r\n\r\n\r\n}\r\n\r\nmain{\r\n    background-color: var(--main-bgColor);\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr;\r\n    flex: 1 1 auto;\r\n    font-family: var(--general-font-family);\r\n    gap: 2rem;\r\n    padding: 2rem;\r\n\r\n    \r\n}\r\n\r\nfooter{\r\n    flex: 0 0 auto;\r\n    font-family: var(--general-font-family);\r\n    background-color: var(--header-footer-bgColor);\r\n    padding-top:1rem;\r\n    padding-bottom: 1rem;\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n/*||Projects*/\r\n\r\n.project_sidebar, .task_container{\r\n    padding: 2rem;\r\n    border: 1px solid black;\r\n    border-radius:20px;\r\n}\r\n.project_sidebar_title, .tasks_title{\r\n    font-size: calc(1rem + 1.5vw);\r\n    font-weight: bold;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 2rem;\r\n    \r\n}\r\n\r\n.project_sidebar_body, .tasks_body{\r\n    font-size: calc(0.5rem + 1.0vw);\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    margin-top: 2rem;\r\n}\r\n\r\n.plus_symbol{\r\n    width: 3rem;\r\n    vertical-align: baseline;\r\n    cursor:pointer;\r\n   \r\n}\r\n\r\n.project:hover{\r\n    background-color: #e07a5f ;\r\n    cursor: pointer;\r\n}\r\n.project-clicked{\r\n    background-color: #e07a5f ;\r\n\r\n}\r\n\r\nlabel{\r\n    margin-left: 2rem;\r\n}\r\n\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA,YAAY;AACZ;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,iCAAiC;IACjC,4CAAsD;;AAE1D;;;;AAIA;IACI,cAAc;IACd,+BAA+B;IAC/B,2CAA2C;IAC3C,uBAAuB;AAC3B;;;;AAIA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,8CAA8C;IAC9C,uCAAuC;IACvC,6BAA6B;IAC7B,mBAAmB;IACnB,oBAAoB;IACpB,kBAAkB;IAClB,cAAc;;;AAGlB;;AAEA;IACI,qCAAqC;IACrC,aAAa;IACb,8BAA8B;IAC9B,cAAc;IACd,uCAAuC;IACvC,SAAS;IACT,aAAa;;;AAGjB;;AAEA;IACI,cAAc;IACd,uCAAuC;IACvC,8CAA8C;IAC9C,gBAAgB;IAChB,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA,aAAa;;AAEb;IACI,aAAa;IACb,uBAAuB;IACvB,kBAAkB;AACtB;AACA;IACI,6BAA6B;IAC7B,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,SAAS;;AAEb;;AAEA;IACI,+BAA+B;IAC/B,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,wBAAwB;IACxB,cAAc;;AAElB;;AAEA;IACI,0BAA0B;IAC1B,eAAe;AACnB;AACA;IACI,0BAA0B;;AAE9B;;AAEA;IACI,iBAAiB;AACrB","sourcesContent":["/*||Reset  */\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n@font-face {\r\n    font-family: \"Montserrat-Regular\";\r\n    src: url(./assets/fonts/static/Montserrat-Regular.ttf);\r\n\r\n}\r\n\r\n\r\n\r\n:root{\r\n    font-size:10px;\r\n    --header-footer-bgColor:#e07a5f;\r\n    --general-font-family: \"Montserrat-Regular\";\r\n    --main-bgColor: #fbf8cc;\r\n}\r\n\r\n\r\n\r\n.container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    height:100vh;\r\n}\r\n\r\nheader{\r\n    background-color: var(--header-footer-bgColor);\r\n    font-family: var(--general-font-family);\r\n    font-size: calc(4rem + 1.5vw);\r\n    padding-top: 3.5rem;\r\n    padding-bottom: 1rem;\r\n    padding-left: 1rem;\r\n    flex: 0 0 auto;\r\n\r\n\r\n}\r\n\r\nmain{\r\n    background-color: var(--main-bgColor);\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr;\r\n    flex: 1 1 auto;\r\n    font-family: var(--general-font-family);\r\n    gap: 2rem;\r\n    padding: 2rem;\r\n\r\n    \r\n}\r\n\r\nfooter{\r\n    flex: 0 0 auto;\r\n    font-family: var(--general-font-family);\r\n    background-color: var(--header-footer-bgColor);\r\n    padding-top:1rem;\r\n    padding-bottom: 1rem;\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n/*||Projects*/\r\n\r\n.project_sidebar, .task_container{\r\n    padding: 2rem;\r\n    border: 1px solid black;\r\n    border-radius:20px;\r\n}\r\n.project_sidebar_title, .tasks_title{\r\n    font-size: calc(1rem + 1.5vw);\r\n    font-weight: bold;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 2rem;\r\n    \r\n}\r\n\r\n.project_sidebar_body, .tasks_body{\r\n    font-size: calc(0.5rem + 1.0vw);\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    margin-top: 2rem;\r\n}\r\n\r\n.plus_symbol{\r\n    width: 3rem;\r\n    vertical-align: baseline;\r\n    cursor:pointer;\r\n   \r\n}\r\n\r\n.project:hover{\r\n    background-color: #e07a5f ;\r\n    cursor: pointer;\r\n}\r\n.project-clicked{\r\n    background-color: #e07a5f ;\r\n\r\n}\r\n\r\nlabel{\r\n    margin-left: 2rem;\r\n}\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
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










let makeHeader = function () {

    let header = (0,_DOMUtilities_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('header', undefined, "To-Do Application");
    return header;

}

let make_main = function () {

    let make_project_sidebar = function () {

        let project_sidebar = (0,_DOMUtilities_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', "project_sidebar", undefined);

        let project_sidebar_title = (0,_DOMUtilities_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', "project_sidebar_title", "Projects");

        let plus_symbol = new Image();
        plus_symbol.src = _assets_icons_plusSymbol_svg__WEBPACK_IMPORTED_MODULE_1__["default"];
        plus_symbol.classList.add("plus_symbol");
        plus_symbol.alt = "add-project"

        let project_sidebar_body = (0,_DOMUtilities_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', "project_sidebar_body", undefined);

        project_sidebar_title.append(plus_symbol);
        project_sidebar.append(project_sidebar_title, project_sidebar_body);

        return project_sidebar
        
    }

    let make_task_container = function () {

        let task_container = (0,_DOMUtilities_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)("div", "task_container", undefined);
        let tasks_title = (0,_DOMUtilities_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)("div", "tasks_title", "Tasks");
        let plus_symbol = new Image();
        plus_symbol.src = _assets_icons_plusSymbol_svg__WEBPACK_IMPORTED_MODULE_1__["default"];
        plus_symbol.classList.add("plus_symbol");
        plus_symbol.alt = "add task";
        let tasks_body = (0,_DOMUtilities_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)("div", "tasks_body", undefined);

        tasks_title.append(plus_symbol);
        task_container.append(tasks_title, tasks_body);

        return task_container

    }

    let main = (0,_DOMUtilities_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('main', undefined, undefined);
    main.append(make_project_sidebar(), make_task_container())
    return main;
}

let make_footer = function () {
    let footer = (0,_DOMUtilities_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)("footer", undefined, "with Love");
    return footer;
}

let makeHomePage = function () {

    let header = makeHeader();
    let main = make_main();
    let footer = make_footer();
    let container = document.querySelector(".container");
    container.append(header, main, footer);

    //adding listener for when window about to close
    //let button = makeElement("button", "button", "persist!!");

    window.addEventListener("beforeunload", () => {
        console.log("closing...");
        (0,_logic_js__WEBPACK_IMPORTED_MODULE_3__.persistData)();
    })

    if ((0,_logic_js__WEBPACK_IMPORTED_MODULE_3__.isDataAvailable)()) {
        (0,_logic_js__WEBPACK_IMPORTED_MODULE_3__.convertSavedDataToNormalData)();
        (0,_projectFront_js__WEBPACK_IMPORTED_MODULE_2__.displayPersistedProjects)();
        return;
    }


    //if we are switching the application for first time: 
    //add the default project in our logic
    (0,_logic_js__WEBPACK_IMPORTED_MODULE_3__.addDefaultProject)();
    //here make the UI for the default project. 
    (0,_projectFront_js__WEBPACK_IMPORTED_MODULE_2__.makeNewProjectDiv)("inbox");


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
/* harmony export */   "convertSavedDataToNormalData": () => (/* binding */ convertSavedDataToNormalData),
/* harmony export */   "getCurrentlySelectedProject": () => (/* binding */ getCurrentlySelectedProject),
/* harmony export */   "isDataAvailable": () => (/* binding */ isDataAvailable),
/* harmony export */   "persistData": () => (/* binding */ persistData),
/* harmony export */   "projectsArray": () => (/* binding */ projectsArray),
/* harmony export */   "removeTaskFromArray": () => (/* binding */ removeTaskFromArray),
/* harmony export */   "setCurrentlySelectedProject": () => (/* binding */ setCurrentlySelectedProject)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");




let projectsArray= [];
let currentlySelectedProject;


//below function adds the "inbox" project to the array
function addDefaultProject(){
    let defaultProject= new _project_js__WEBPACK_IMPORTED_MODULE_0__.Project("inbox");
    projectsArray.push(defaultProject);
    currentlySelectedProject= defaultProject;
    console.log(projectsArray);
    console.log(currentlySelectedProject);
}

//below function adds any new project to the array
function addNewProject(contentOfInput){
    console.log("new project added!.")
    console.log(contentOfInput);

    //make a new project and add to the projectsArray[]
    let newProject= new _project_js__WEBPACK_IMPORTED_MODULE_0__.Project(contentOfInput);
    projectsArray.push(newProject);
    console.log(projectsArray);

}

//below function sets the project which the user clicked on as the "currentlySelectedProject"
function setCurrentlySelectedProject(clickedProject){
console.log(`the project selected  is: ${clickedProject} `);
let temp = projectsArray.filter((element)=>{
    if(element.project_name==clickedProject){
        return true;
    }
})
    currentlySelectedProject= temp[0];
    console.log(currentlySelectedProject);
}

//below function returns the project currently selected by the user
function getCurrentlySelectedProject(){
    return currentlySelectedProject;
}

//adding a new task to the currently selected Project
function addnewTaskToCurrentProject(taskName){
    currentlySelectedProject.addTask(taskName);
}


function removeTaskFromArray(nameOfTask){
    console.log(currentlySelectedProject);
    console.log(nameOfTask);
    console.log(currentlySelectedProject.tasks);
    currentlySelectedProject.deleteTask(nameOfTask);
    console.log(currentlySelectedProject.tasks);

}

function persistData(){
    console.log("persisting data..!");
    let convertedProjectsToString= JSON.stringify(projectsArray);
    localStorage.setItem('projects', convertedProjectsToString);

}

//below function returns true if persisted data found on disk
//else it returns false
function isDataAvailable(){
    if(!localStorage.getItem("projects")){
       return false;
    }

    return true;
}

//below function converts JSON data to normal data
function convertSavedDataToNormalData(){

    let savedData= localStorage.getItem("projects");
    console.log(savedData);
    let parsedData= JSON.parse(savedData);
    console.log(parsedData);

    parsedData.forEach((element, index)=>{
        
        //setting the prototype of the tasks
        element.tasks.forEach(task=>{
            Object.setPrototypeOf(task, _task_js__WEBPACK_IMPORTED_MODULE_1__.Task.prototype)
            console.log(task)

        })

        //setting the prototype of the elements

        Object.setPrototypeOf(element, _project_js__WEBPACK_IMPORTED_MODULE_0__.Project.prototype);
        console.log(element);
        console.log(element.getNumberOfTasks());
    
    })

    projectsArray=parsedData;
    console.log(projectsArray);

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
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");


//here make the constructor for the project object. 

let Project = function (name) {
    this.project_name=name;
    this.tasks=[];
}

Project.prototype.addTask=  function addTask(task){
    this.tasks.push(new _task_js__WEBPACK_IMPORTED_MODULE_0__.Task(task));
}

Project.prototype.getNumberOfTasks= function getNumberOfTasks(){
    return this.tasks.length;
}

Project.prototype.deleteTask= function deleteTask(taskName){
    this.tasks.filter((element, index)=>{
       if(element.name==taskName){
           console.log(element)
           this.tasks.splice(index, 1);
       }
   })
} 

/***/ }),

/***/ "./src/projectFront.js":
/*!*****************************!*\
  !*** ./src/projectFront.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayPersistedProjects": () => (/* binding */ displayPersistedProjects),
/* harmony export */   "makeNewProjectDiv": () => (/* binding */ makeNewProjectDiv),
/* harmony export */   "setUpListeners": () => (/* binding */ setUpListeners)
/* harmony export */ });
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");
/* harmony import */ var _DOMUtilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMUtilities.js */ "./src/DOMUtilities.js");
/* harmony import */ var _taskFront_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskFront.js */ "./src/taskFront.js");





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

       switchCurrentProjectTo(newProject);

}

function addListenerOnProject(e) {

    console.log("project clicked!");
    let previouslyClickedProject = document.querySelector(".project-clicked");
    if (previouslyClickedProject) {
        previouslyClickedProject.classList.toggle("project-clicked");
    }
    e.target.classList.add("project-clicked");
    (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.setCurrentlySelectedProject)(e.target.textContent);

    //show the tasks only in the current project. 
    (0,_taskFront_js__WEBPACK_IMPORTED_MODULE_2__.displayAllTasks)()

}

function switchCurrentProjectTo(newProject) {

    let previouslyClickedProject = document.querySelector(".project-clicked");
    if (previouslyClickedProject) {
        previouslyClickedProject.classList.toggle("project-clicked");
    }
    newProject.classList.add("project-clicked");
    (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.setCurrentlySelectedProject)(newProject.textContent);

    //show the tasks only in the current project. 
    (0,_taskFront_js__WEBPACK_IMPORTED_MODULE_2__.displayAllTasks)()

}

function displayPersistedProjects(){

    //in this function trying to first show all the projects.
    _logic_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray.forEach((project)=>{
        makeNewProjectDiv(project.project_name);
    })

}

function setUpListeners() {
    addListenerOnPlusSign();
}

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });


function Task(taskName){

 this.name=taskName

}

/***/ }),

/***/ "./src/taskFront.js":
/*!**************************!*\
  !*** ./src/taskFront.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayAllTasks": () => (/* binding */ displayAllTasks),
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

                //change below line in the end
            (0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.addnewTaskToCurrentProject)(input_box.value);

            //function call here
            newTaskDiv(input_box.value);
        }
    })

}

function newTaskDiv(taskName) {

    let taskdiv = (0,_DOMUtilities_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)("div", "task", undefined);
    let currentlySelectedProject = (0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentlySelectedProject)();
    console.log(currentlySelectedProject);
    console.log("the number of tasks in currently selected project is")
    console.log(currentlySelectedProject.getNumberOfTasks());

    //most of the logic below not needed. delete later.
    let numberOftasksInCurrentlySelectedProject = currentlySelectedProject.getNumberOfTasks();
    let checkBoxInput = (0,_DOMUtilities_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)("input", undefined, undefined);
    
    checkBoxInput.setAttribute("type", "checkbox");
    //add listener to the checkbox
    checkBoxInput.addEventListener("change", removeTask)
    console.log(checkBoxInput);

    //change the name of the task here.
    let label = (0,_DOMUtilities_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)("label", undefined, taskName);
    label.setAttribute("for", numberOftasksInCurrentlySelectedProject);

    taskdiv.append(checkBoxInput, label);
    let tasks_body = document.querySelector(".tasks_body");
    tasks_body.append(taskdiv);

}

function removeTask(e) {

    console.log("trying to remove task");
    let nameOfTaskToDelete = e.target.nextElementSibling.textContent;
    console.log(`name of the task to be deleted ${nameOfTaskToDelete}`);
    (0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.removeTaskFromArray)(nameOfTaskToDelete);
    e.target.parentElement.remove();

}

function displayAllTasks() {


    let divsToRemove = document.querySelectorAll(".task");
    if (divsToRemove != null) {
        Array.from(divsToRemove).forEach((element) => {
            element.remove();
        })
    }


    let tasks = (0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentlySelectedProject)().tasks;
    tasks.forEach(function (task, index) {

        let taskdiv = (0,_DOMUtilities_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)("div", "task", undefined);

        let checkBoxInput = (0,_DOMUtilities_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)("input", undefined, undefined);
        checkBoxInput.setAttribute("type", "checkbox");
        checkBoxInput.setAttribute("id", index);
            //add listener to the checkbox
        checkBoxInput.addEventListener("change", removeTask)

        let label = (0,_DOMUtilities_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)("label", undefined, task.name);
        label.setAttribute("for", index);

        taskdiv.append(checkBoxInput, label);
        let tasks_body = document.querySelector(".tasks_body");
        tasks_body.append(taskdiv);
    })

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixzRUFBMkI7QUFDM0M7QUFDQTtBQUNBLHNCQUFzQiw2REFBVztBQUNqQztBQUNBLDRCQUE0Qiw2REFBVztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDZEQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7QUNyQm9EO0FBQ0o7QUFDQztBQUNqRDtBQUNBLGlFQUFZO0FBQ1osZ0VBQWM7QUFDZCxnRUFBaUIsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9hcHAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9hc3NldHMvaWNvbnMvcGx1c1N5bWJvbC5zdmciLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL0RPTVV0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL2hvbWVQYWdlQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL2xvZ2ljLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL3Byb2plY3RGcm9udC5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy90YXNrRnJvbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9zdGF0aWMvTW9udHNlcnJhdC1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qfHxSZXNldCAgKi9cXHJcXG4qe1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXQtUmVndWxhclxcXCI7XFxyXFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuOnJvb3R7XFxyXFxuICAgIGZvbnQtc2l6ZToxMHB4O1xcclxcbiAgICAtLWhlYWRlci1mb290ZXItYmdDb2xvcjojZTA3YTVmO1xcclxcbiAgICAtLWdlbmVyYWwtZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0LVJlZ3VsYXJcXFwiO1xcclxcbiAgICAtLW1haW4tYmdDb2xvcjogI2ZiZjhjYztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgaGVpZ2h0OjEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1mb290ZXItYmdDb2xvcik7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1nZW5lcmFsLWZvbnQtZmFtaWx5KTtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDRyZW0gKyAxLjV2dyk7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAzLjVyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcclxcblxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5tYWlue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnQ29sb3IpO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxyXFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tZ2VuZXJhbC1mb250LWZhbWlseSk7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG5cXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbmZvb3RlcntcXHJcXG4gICAgZmxleDogMCAwIGF1dG87XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1nZW5lcmFsLWZvbnQtZmFtaWx5KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWZvb3Rlci1iZ0NvbG9yKTtcXHJcXG4gICAgcGFkZGluZy10b3A6MXJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi8qfHxQcm9qZWN0cyovXFxyXFxuXFxyXFxuLnByb2plY3Rfc2lkZWJhciwgLnRhc2tfY29udGFpbmVye1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czoyMHB4O1xcclxcbn1cXHJcXG4ucHJvamVjdF9zaWRlYmFyX3RpdGxlLCAudGFza3NfdGl0bGV7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYygxcmVtICsgMS41dncpO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdF9zaWRlYmFyX2JvZHksIC50YXNrc19ib2R5e1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoMC41cmVtICsgMS4wdncpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5wbHVzX3N5bWJvbHtcXHJcXG4gICAgd2lkdGg6IDNyZW07XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxyXFxuICAgXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0OmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTA3YTVmIDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ucHJvamVjdC1jbGlja2Vke1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTA3YTVmIDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxubGFiZWx7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxZQUFZO0FBQ1o7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyw0Q0FBc0Q7O0FBRTFEOzs7O0FBSUE7SUFDSSxjQUFjO0lBQ2QsK0JBQStCO0lBQy9CLDJDQUEyQztJQUMzQyx1QkFBdUI7QUFDM0I7Ozs7QUFJQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDhDQUE4QztJQUM5Qyx1Q0FBdUM7SUFDdkMsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGNBQWM7OztBQUdsQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGNBQWM7SUFDZCx1Q0FBdUM7SUFDdkMsU0FBUztJQUNULGFBQWE7OztBQUdqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx1Q0FBdUM7SUFDdkMsOENBQThDO0lBQzlDLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQSxhQUFhOztBQUViO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsU0FBUzs7QUFFYjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLGNBQWM7O0FBRWxCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLDBCQUEwQjs7QUFFOUI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyp8fFJlc2V0ICAqL1xcclxcbip7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdC1SZWd1bGFyXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoLi9hc3NldHMvZm9udHMvc3RhdGljL01vbnRzZXJyYXQtUmVndWxhci50dGYpO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG46cm9vdHtcXHJcXG4gICAgZm9udC1zaXplOjEwcHg7XFxyXFxuICAgIC0taGVhZGVyLWZvb3Rlci1iZ0NvbG9yOiNlMDdhNWY7XFxyXFxuICAgIC0tZ2VuZXJhbC1mb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXQtUmVndWxhclxcXCI7XFxyXFxuICAgIC0tbWFpbi1iZ0NvbG9yOiAjZmJmOGNjO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBoZWlnaHQ6MTAwdmg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWZvb3Rlci1iZ0NvbG9yKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWdlbmVyYWwtZm9udC1mYW1pbHkpO1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoNHJlbSArIDEuNXZ3KTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDMuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gICAgZmxleDogMCAwIGF1dG87XFxyXFxuXFxyXFxuXFxyXFxufVxcclxcblxcclxcbm1haW57XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmdDb2xvcik7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXHJcXG4gICAgZmxleDogMSAxIGF1dG87XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1nZW5lcmFsLWZvbnQtZmFtaWx5KTtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcblxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVye1xcclxcbiAgICBmbGV4OiAwIDAgYXV0bztcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWdlbmVyYWwtZm9udC1mYW1pbHkpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItZm9vdGVyLWJnQ29sb3IpO1xcclxcbiAgICBwYWRkaW5nLXRvcDoxcmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyp8fFByb2plY3RzKi9cXHJcXG5cXHJcXG4ucHJvamVjdF9zaWRlYmFyLCAudGFza19jb250YWluZXJ7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOjIwcHg7XFxyXFxufVxcclxcbi5wcm9qZWN0X3NpZGViYXJfdGl0bGUsIC50YXNrc190aXRsZXtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDFyZW0gKyAxLjV2dyk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0X3NpZGViYXJfYm9keSwgLnRhc2tzX2JvZHl7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYygwLjVyZW0gKyAxLjB2dyk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsdXNfc3ltYm9se1xcclxcbiAgICB3aWR0aDogM3JlbTtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbiAgICBjdXJzb3I6cG9pbnRlcjtcXHJcXG4gICBcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Q6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMDdhNWYgO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5wcm9qZWN0LWNsaWNrZWR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMDdhNWYgO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5sYWJlbHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxMTc3ZTZhYzk4N2QwYWQ4NTYyODRjNjhmNDQ4NDI0MC5zdmdcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIgXHJcbiBpbXBvcnQgJy4vc3R5bGVzLmNzcydcclxuIFxyXG4gZXhwb3J0IGxldCBtYWtlRWxlbWVudCA9ICBmdW5jdGlvbihlbGVtZW50VHlwZSwgZWxlbWVudENsYXNzLCBlbGVtZW50Q29udGVudCl7XHJcbiAgICBsZXQgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpO1xyXG5cclxuICAgIGlmKGVsZW1lbnRDbGFzcyl7XHJcbiAgICAgICAgbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKGVsZW1lbnRDbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoZWxlbWVudENvbnRlbnQpe1xyXG4gICAgICAgIG5ld0VsZW1lbnQudGV4dENvbnRlbnQgPSBlbGVtZW50Q29udGVudDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3RWxlbWVudDtcclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7IG1ha2VFbGVtZW50IH0gZnJvbSAnLi9ET01VdGlsaXRpZXMuanMnXHJcbmltcG9ydCBwbHVzU3ltYm9sIGZyb20gXCIuL2Fzc2V0cy9pY29ucy9wbHVzU3ltYm9sLnN2Z1wiO1xyXG5pbXBvcnQgeyBtYWtlTmV3UHJvamVjdERpdiwgZGlzcGxheVBlcnNpc3RlZFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdEZyb250LmpzXCI7XHJcbmltcG9ydCB7IGFkZERlZmF1bHRQcm9qZWN0LCBwZXJzaXN0RGF0YSwgaXNEYXRhQXZhaWxhYmxlLCBjb252ZXJ0U2F2ZWREYXRhVG9Ob3JtYWxEYXRhIH0gZnJvbSBcIi4vbG9naWMuanNcIlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgbGV0IG1ha2VIZWFkZXIgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgbGV0IGhlYWRlciA9IG1ha2VFbGVtZW50KCdoZWFkZXInLCB1bmRlZmluZWQsIFwiVG8tRG8gQXBwbGljYXRpb25cIik7XHJcbiAgICByZXR1cm4gaGVhZGVyO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGxldCBtYWtlX21haW4gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgbGV0IG1ha2VfcHJvamVjdF9zaWRlYmFyID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBsZXQgcHJvamVjdF9zaWRlYmFyID0gbWFrZUVsZW1lbnQoJ2RpdicsIFwicHJvamVjdF9zaWRlYmFyXCIsIHVuZGVmaW5lZCk7XHJcblxyXG4gICAgICAgIGxldCBwcm9qZWN0X3NpZGViYXJfdGl0bGUgPSBtYWtlRWxlbWVudCgnZGl2JywgXCJwcm9qZWN0X3NpZGViYXJfdGl0bGVcIiwgXCJQcm9qZWN0c1wiKTtcclxuXHJcbiAgICAgICAgbGV0IHBsdXNfc3ltYm9sID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgcGx1c19zeW1ib2wuc3JjID0gcGx1c1N5bWJvbDtcclxuICAgICAgICBwbHVzX3N5bWJvbC5jbGFzc0xpc3QuYWRkKFwicGx1c19zeW1ib2xcIik7XHJcbiAgICAgICAgcGx1c19zeW1ib2wuYWx0ID0gXCJhZGQtcHJvamVjdFwiXHJcblxyXG4gICAgICAgIGxldCBwcm9qZWN0X3NpZGViYXJfYm9keSA9IG1ha2VFbGVtZW50KCdkaXYnLCBcInByb2plY3Rfc2lkZWJhcl9ib2R5XCIsIHVuZGVmaW5lZCk7XHJcblxyXG4gICAgICAgIHByb2plY3Rfc2lkZWJhcl90aXRsZS5hcHBlbmQocGx1c19zeW1ib2wpO1xyXG4gICAgICAgIHByb2plY3Rfc2lkZWJhci5hcHBlbmQocHJvamVjdF9zaWRlYmFyX3RpdGxlLCBwcm9qZWN0X3NpZGViYXJfYm9keSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwcm9qZWN0X3NpZGViYXJcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbWFrZV90YXNrX2NvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgbGV0IHRhc2tfY29udGFpbmVyID0gbWFrZUVsZW1lbnQoXCJkaXZcIiwgXCJ0YXNrX2NvbnRhaW5lclwiLCB1bmRlZmluZWQpO1xyXG4gICAgICAgIGxldCB0YXNrc190aXRsZSA9IG1ha2VFbGVtZW50KFwiZGl2XCIsIFwidGFza3NfdGl0bGVcIiwgXCJUYXNrc1wiKTtcclxuICAgICAgICBsZXQgcGx1c19zeW1ib2wgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBwbHVzX3N5bWJvbC5zcmMgPSBwbHVzU3ltYm9sO1xyXG4gICAgICAgIHBsdXNfc3ltYm9sLmNsYXNzTGlzdC5hZGQoXCJwbHVzX3N5bWJvbFwiKTtcclxuICAgICAgICBwbHVzX3N5bWJvbC5hbHQgPSBcImFkZCB0YXNrXCI7XHJcbiAgICAgICAgbGV0IHRhc2tzX2JvZHkgPSBtYWtlRWxlbWVudChcImRpdlwiLCBcInRhc2tzX2JvZHlcIiwgdW5kZWZpbmVkKTtcclxuXHJcbiAgICAgICAgdGFza3NfdGl0bGUuYXBwZW5kKHBsdXNfc3ltYm9sKTtcclxuICAgICAgICB0YXNrX2NvbnRhaW5lci5hcHBlbmQodGFza3NfdGl0bGUsIHRhc2tzX2JvZHkpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGFza19jb250YWluZXJcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG1haW4gPSBtYWtlRWxlbWVudCgnbWFpbicsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcclxuICAgIG1haW4uYXBwZW5kKG1ha2VfcHJvamVjdF9zaWRlYmFyKCksIG1ha2VfdGFza19jb250YWluZXIoKSlcclxuICAgIHJldHVybiBtYWluO1xyXG59XHJcblxyXG5sZXQgbWFrZV9mb290ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgZm9vdGVyID0gbWFrZUVsZW1lbnQoXCJmb290ZXJcIiwgdW5kZWZpbmVkLCBcIndpdGggTG92ZVwiKTtcclxuICAgIHJldHVybiBmb290ZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgbWFrZUhvbWVQYWdlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGxldCBoZWFkZXIgPSBtYWtlSGVhZGVyKCk7XHJcbiAgICBsZXQgbWFpbiA9IG1ha2VfbWFpbigpO1xyXG4gICAgbGV0IGZvb3RlciA9IG1ha2VfZm9vdGVyKCk7XHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kKGhlYWRlciwgbWFpbiwgZm9vdGVyKTtcclxuXHJcbiAgICAvL2FkZGluZyBsaXN0ZW5lciBmb3Igd2hlbiB3aW5kb3cgYWJvdXQgdG8gY2xvc2VcclxuICAgIC8vbGV0IGJ1dHRvbiA9IG1ha2VFbGVtZW50KFwiYnV0dG9uXCIsIFwiYnV0dG9uXCIsIFwicGVyc2lzdCEhXCIpO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNsb3NpbmcuLi5cIik7XHJcbiAgICAgICAgcGVyc2lzdERhdGEoKTtcclxuICAgIH0pXHJcblxyXG4gICAgaWYgKGlzRGF0YUF2YWlsYWJsZSgpKSB7XHJcbiAgICAgICAgY29udmVydFNhdmVkRGF0YVRvTm9ybWFsRGF0YSgpO1xyXG4gICAgICAgIGRpc3BsYXlQZXJzaXN0ZWRQcm9qZWN0cygpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy9pZiB3ZSBhcmUgc3dpdGNoaW5nIHRoZSBhcHBsaWNhdGlvbiBmb3IgZmlyc3QgdGltZTogXHJcbiAgICAvL2FkZCB0aGUgZGVmYXVsdCBwcm9qZWN0IGluIG91ciBsb2dpY1xyXG4gICAgYWRkRGVmYXVsdFByb2plY3QoKTtcclxuICAgIC8vaGVyZSBtYWtlIHRoZSBVSSBmb3IgdGhlIGRlZmF1bHQgcHJvamVjdC4gXHJcbiAgICBtYWtlTmV3UHJvamVjdERpdihcImluYm94XCIpO1xyXG5cclxuXHJcbn0iLCJpbXBvcnQge1Byb2plY3R9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcclxuaW1wb3J0IHtUYXNrfSBmcm9tIFwiLi90YXNrLmpzXCJcclxuXHJcblxyXG5leHBvcnQgbGV0IHByb2plY3RzQXJyYXk9IFtdO1xyXG5sZXQgY3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0O1xyXG5cclxuXHJcbi8vYmVsb3cgZnVuY3Rpb24gYWRkcyB0aGUgXCJpbmJveFwiIHByb2plY3QgdG8gdGhlIGFycmF5XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGREZWZhdWx0UHJvamVjdCgpe1xyXG4gICAgbGV0IGRlZmF1bHRQcm9qZWN0PSBuZXcgUHJvamVjdChcImluYm94XCIpO1xyXG4gICAgcHJvamVjdHNBcnJheS5wdXNoKGRlZmF1bHRQcm9qZWN0KTtcclxuICAgIGN1cnJlbnRseVNlbGVjdGVkUHJvamVjdD0gZGVmYXVsdFByb2plY3Q7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5KTtcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCk7XHJcbn1cclxuXHJcbi8vYmVsb3cgZnVuY3Rpb24gYWRkcyBhbnkgbmV3IHByb2plY3QgdG8gdGhlIGFycmF5XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdQcm9qZWN0KGNvbnRlbnRPZklucHV0KXtcclxuICAgIGNvbnNvbGUubG9nKFwibmV3IHByb2plY3QgYWRkZWQhLlwiKVxyXG4gICAgY29uc29sZS5sb2coY29udGVudE9mSW5wdXQpO1xyXG5cclxuICAgIC8vbWFrZSBhIG5ldyBwcm9qZWN0IGFuZCBhZGQgdG8gdGhlIHByb2plY3RzQXJyYXlbXVxyXG4gICAgbGV0IG5ld1Byb2plY3Q9IG5ldyBQcm9qZWN0KGNvbnRlbnRPZklucHV0KTtcclxuICAgIHByb2plY3RzQXJyYXkucHVzaChuZXdQcm9qZWN0KTtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RzQXJyYXkpO1xyXG5cclxufVxyXG5cclxuLy9iZWxvdyBmdW5jdGlvbiBzZXRzIHRoZSBwcm9qZWN0IHdoaWNoIHRoZSB1c2VyIGNsaWNrZWQgb24gYXMgdGhlIFwiY3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0XCJcclxuZXhwb3J0IGZ1bmN0aW9uIHNldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdChjbGlja2VkUHJvamVjdCl7XHJcbmNvbnNvbGUubG9nKGB0aGUgcHJvamVjdCBzZWxlY3RlZCAgaXM6ICR7Y2xpY2tlZFByb2plY3R9IGApO1xyXG5sZXQgdGVtcCA9IHByb2plY3RzQXJyYXkuZmlsdGVyKChlbGVtZW50KT0+e1xyXG4gICAgaWYoZWxlbWVudC5wcm9qZWN0X25hbWU9PWNsaWNrZWRQcm9qZWN0KXtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufSlcclxuICAgIGN1cnJlbnRseVNlbGVjdGVkUHJvamVjdD0gdGVtcFswXTtcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCk7XHJcbn1cclxuXHJcbi8vYmVsb3cgZnVuY3Rpb24gcmV0dXJucyB0aGUgcHJvamVjdCBjdXJyZW50bHkgc2VsZWN0ZWQgYnkgdGhlIHVzZXJcclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCgpe1xyXG4gICAgcmV0dXJuIGN1cnJlbnRseVNlbGVjdGVkUHJvamVjdDtcclxufVxyXG5cclxuLy9hZGRpbmcgYSBuZXcgdGFzayB0byB0aGUgY3VycmVudGx5IHNlbGVjdGVkIFByb2plY3RcclxuZXhwb3J0IGZ1bmN0aW9uIGFkZG5ld1Rhc2tUb0N1cnJlbnRQcm9qZWN0KHRhc2tOYW1lKXtcclxuICAgIGN1cnJlbnRseVNlbGVjdGVkUHJvamVjdC5hZGRUYXNrKHRhc2tOYW1lKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUYXNrRnJvbUFycmF5KG5hbWVPZlRhc2spe1xyXG4gICAgY29uc29sZS5sb2coY3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0KTtcclxuICAgIGNvbnNvbGUubG9nKG5hbWVPZlRhc2spO1xyXG4gICAgY29uc29sZS5sb2coY3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0LnRhc2tzKTtcclxuICAgIGN1cnJlbnRseVNlbGVjdGVkUHJvamVjdC5kZWxldGVUYXNrKG5hbWVPZlRhc2spO1xyXG4gICAgY29uc29sZS5sb2coY3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0LnRhc2tzKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwZXJzaXN0RGF0YSgpe1xyXG4gICAgY29uc29sZS5sb2coXCJwZXJzaXN0aW5nIGRhdGEuLiFcIik7XHJcbiAgICBsZXQgY29udmVydGVkUHJvamVjdHNUb1N0cmluZz0gSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBcnJheSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBjb252ZXJ0ZWRQcm9qZWN0c1RvU3RyaW5nKTtcclxuXHJcbn1cclxuXHJcbi8vYmVsb3cgZnVuY3Rpb24gcmV0dXJucyB0cnVlIGlmIHBlcnNpc3RlZCBkYXRhIGZvdW5kIG9uIGRpc2tcclxuLy9lbHNlIGl0IHJldHVybnMgZmFsc2VcclxuZXhwb3J0IGZ1bmN0aW9uIGlzRGF0YUF2YWlsYWJsZSgpe1xyXG4gICAgaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpe1xyXG4gICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG4vL2JlbG93IGZ1bmN0aW9uIGNvbnZlcnRzIEpTT04gZGF0YSB0byBub3JtYWwgZGF0YVxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFNhdmVkRGF0YVRvTm9ybWFsRGF0YSgpe1xyXG5cclxuICAgIGxldCBzYXZlZERhdGE9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIik7XHJcbiAgICBjb25zb2xlLmxvZyhzYXZlZERhdGEpO1xyXG4gICAgbGV0IHBhcnNlZERhdGE9IEpTT04ucGFyc2Uoc2F2ZWREYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKHBhcnNlZERhdGEpO1xyXG5cclxuICAgIHBhcnNlZERhdGEuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9zZXR0aW5nIHRoZSBwcm90b3R5cGUgb2YgdGhlIHRhc2tzXHJcbiAgICAgICAgZWxlbWVudC50YXNrcy5mb3JFYWNoKHRhc2s9PntcclxuICAgICAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRhc2ssIFRhc2sucHJvdG90eXBlKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrKVxyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvL3NldHRpbmcgdGhlIHByb3RvdHlwZSBvZiB0aGUgZWxlbWVudHNcclxuXHJcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGVsZW1lbnQsIFByb2plY3QucHJvdG90eXBlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50LmdldE51bWJlck9mVGFza3MoKSk7XHJcbiAgICBcclxuICAgIH0pXHJcblxyXG4gICAgcHJvamVjdHNBcnJheT1wYXJzZWREYXRhO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdHNBcnJheSk7XHJcblxyXG59XHJcblxyXG4iLCJcclxuaW1wb3J0IHtUYXNrfSBmcm9tIFwiLi90YXNrLmpzXCJcclxuLy9oZXJlIG1ha2UgdGhlIGNvbnN0cnVjdG9yIGZvciB0aGUgcHJvamVjdCBvYmplY3QuIFxyXG5cclxuZXhwb3J0IGxldCBQcm9qZWN0ID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgIHRoaXMucHJvamVjdF9uYW1lPW5hbWU7XHJcbiAgICB0aGlzLnRhc2tzPVtdO1xyXG59XHJcblxyXG5Qcm9qZWN0LnByb3RvdHlwZS5hZGRUYXNrPSAgZnVuY3Rpb24gYWRkVGFzayh0YXNrKXtcclxuICAgIHRoaXMudGFza3MucHVzaChuZXcgVGFzayh0YXNrKSk7XHJcbn1cclxuXHJcblByb2plY3QucHJvdG90eXBlLmdldE51bWJlck9mVGFza3M9IGZ1bmN0aW9uIGdldE51bWJlck9mVGFza3MoKXtcclxuICAgIHJldHVybiB0aGlzLnRhc2tzLmxlbmd0aDtcclxufVxyXG5cclxuUHJvamVjdC5wcm90b3R5cGUuZGVsZXRlVGFzaz0gZnVuY3Rpb24gZGVsZXRlVGFzayh0YXNrTmFtZSl7XHJcbiAgICB0aGlzLnRhc2tzLmZpbHRlcigoZWxlbWVudCwgaW5kZXgpPT57XHJcbiAgICAgICBpZihlbGVtZW50Lm5hbWU9PXRhc2tOYW1lKXtcclxuICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50KVxyXG4gICAgICAgICAgIHRoaXMudGFza3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgIH1cclxuICAgfSlcclxufSAiLCJpbXBvcnQgeyBhZGROZXdQcm9qZWN0LCBzZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QsIHByb2plY3RzQXJyYXkgfSBmcm9tIFwiLi9sb2dpYy5qc1wiXHJcbmltcG9ydCB7IG1ha2VFbGVtZW50IH0gZnJvbSAnLi9ET01VdGlsaXRpZXMuanMnXHJcbmltcG9ydCB7ZGlzcGxheUFsbFRhc2tzfSBmcm9tIFwiLi90YXNrRnJvbnQuanNcIlxyXG5cclxuXHJcbi8vbm93IGFkZCBsaXN0ZW5lciB0byB0aGUgYWRkIHNpZ24uIFxyXG5cclxuZnVuY3Rpb24gYWRkTGlzdGVuZXJPblBsdXNTaWduKCkge1xyXG5cclxuICAgIC8vbGlzdGVuZXIgb24gdGhlIHBsdXMgc2lnbiBmb3IgdGhlIHByb2plY3RcclxuICAgIGxldCBwcm9qZWN0X3NpZGViYXJfdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3Rfc2lkZWJhcl90aXRsZVwiKTtcclxuXHJcbiAgICBsZXQgcGx1c19zeW1ib2wgPSBwcm9qZWN0X3NpZGViYXJfdGl0bGUucXVlcnlTZWxlY3RvcihcIi5wbHVzX3N5bWJvbFwiKTtcclxuXHJcbiAgICBwbHVzX3N5bWJvbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGx1cyBzaWduIHdhcyBjbGlja2VkXCIpO1xyXG4gICAgICAgIC8vbWFrZSBhbiBpbnB1dCBib3g7XHJcbiAgICAgICAgbWFrZUFuSW5wdXRCb3goKTtcclxuICAgIH0pXHJcblxyXG59XHJcblxyXG4gIC8vZnVuY3Rpb24gdG8gbWFrZSBhbiBpbnB1dCBib3g7XHJcbmZ1bmN0aW9uIG1ha2VBbklucHV0Qm94KCl7XHJcblxyXG4gICAgbGV0IHByb2plY3Rfc2lkZWJhcl9ib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0X3NpZGViYXJfYm9keVwiKTtcclxuICAgIGxldCBpbnB1dF9ib3ggPSBtYWtlRWxlbWVudChcImlucHV0XCIsIFwicHJvamVjdF9pbnB1dFwiLCB1bmRlZmluZWQpO1xyXG4gICAgcHJvamVjdF9zaWRlYmFyX2JvZHkuYXBwZW5kQ2hpbGQoaW5wdXRfYm94KTtcclxuICAgIGlucHV0X2JveC5mb2N1cygpO1xyXG4gICAgYWRkTGlzdGVuZXJPbklucHV0Qm94KGlucHV0X2JveCk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRMaXN0ZW5lck9uSW5wdXRCb3goaW5wdXRfYm94KSB7XHJcblxyXG4gICAgLy9hZGQgYSBuZXcgZGl2IGFuZCBhZGQgdGhlIHByb2plY3QgdG8gdGhlIGFycmF5LlxyXG4gICAgaW5wdXRfYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW50ZXIga2V5IHByZXNzZWQhXCIpO1xyXG4gICAgICAgICAgICBhZGROZXdQcm9qZWN0KGlucHV0X2JveC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGlucHV0X2JveC5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vZnVuY3Rpb24gY2FsbCBoZXJlXHJcbiAgICAgICAgICAgIG1ha2VOZXdQcm9qZWN0RGl2KGlucHV0X2JveC52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlTmV3UHJvamVjdERpdihuYW1lT2ZQcm9qZWN0KXtcclxuXHJcbiAgICAgICAvL21ha2luZyBuZXcgZGl2XHJcbiAgICAgICBsZXQgbmV3UHJvamVjdCA9IG1ha2VFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdFwiLCBuYW1lT2ZQcm9qZWN0KTtcclxuICAgICAgIC8vYWRkIGxpc3RlbmVyIG9uIHByb2plY3QgXHJcbiAgICAgICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRMaXN0ZW5lck9uUHJvamVjdCk7XHJcbiAgICAgICBsZXQgcHJvamVjdF9zaWRlYmFyX2JvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3Rfc2lkZWJhcl9ib2R5XCIpO1xyXG4gICAgICAgcHJvamVjdF9zaWRlYmFyX2JvZHkuYXBwZW5kKG5ld1Byb2plY3QpO1xyXG5cclxuICAgICAgIHN3aXRjaEN1cnJlbnRQcm9qZWN0VG8obmV3UHJvamVjdCk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRMaXN0ZW5lck9uUHJvamVjdChlKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJwcm9qZWN0IGNsaWNrZWQhXCIpO1xyXG4gICAgbGV0IHByZXZpb3VzbHlDbGlja2VkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jbGlja2VkXCIpO1xyXG4gICAgaWYgKHByZXZpb3VzbHlDbGlja2VkUHJvamVjdCkge1xyXG4gICAgICAgIHByZXZpb3VzbHlDbGlja2VkUHJvamVjdC5jbGFzc0xpc3QudG9nZ2xlKFwicHJvamVjdC1jbGlja2VkXCIpO1xyXG4gICAgfVxyXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY2xpY2tlZFwiKTtcclxuICAgIHNldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdChlLnRhcmdldC50ZXh0Q29udGVudCk7XHJcblxyXG4gICAgLy9zaG93IHRoZSB0YXNrcyBvbmx5IGluIHRoZSBjdXJyZW50IHByb2plY3QuIFxyXG4gICAgZGlzcGxheUFsbFRhc2tzKClcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN3aXRjaEN1cnJlbnRQcm9qZWN0VG8obmV3UHJvamVjdCkge1xyXG5cclxuICAgIGxldCBwcmV2aW91c2x5Q2xpY2tlZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY2xpY2tlZFwiKTtcclxuICAgIGlmIChwcmV2aW91c2x5Q2xpY2tlZFByb2plY3QpIHtcclxuICAgICAgICBwcmV2aW91c2x5Q2xpY2tlZFByb2plY3QuY2xhc3NMaXN0LnRvZ2dsZShcInByb2plY3QtY2xpY2tlZFwiKTtcclxuICAgIH1cclxuICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY2xpY2tlZFwiKTtcclxuICAgIHNldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdChuZXdQcm9qZWN0LnRleHRDb250ZW50KTtcclxuXHJcbiAgICAvL3Nob3cgdGhlIHRhc2tzIG9ubHkgaW4gdGhlIGN1cnJlbnQgcHJvamVjdC4gXHJcbiAgICBkaXNwbGF5QWxsVGFza3MoKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlQZXJzaXN0ZWRQcm9qZWN0cygpe1xyXG5cclxuICAgIC8vaW4gdGhpcyBmdW5jdGlvbiB0cnlpbmcgdG8gZmlyc3Qgc2hvdyBhbGwgdGhlIHByb2plY3RzLlxyXG4gICAgcHJvamVjdHNBcnJheS5mb3JFYWNoKChwcm9qZWN0KT0+e1xyXG4gICAgICAgIG1ha2VOZXdQcm9qZWN0RGl2KHByb2plY3QucHJvamVjdF9uYW1lKTtcclxuICAgIH0pXHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0VXBMaXN0ZW5lcnMoKSB7XHJcbiAgICBhZGRMaXN0ZW5lck9uUGx1c1NpZ24oKTtcclxufSIsIlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRhc2sodGFza05hbWUpe1xyXG5cclxuIHRoaXMubmFtZT10YXNrTmFtZVxyXG5cclxufSIsImltcG9ydCB7IG1ha2VFbGVtZW50IH0gZnJvbSAnLi9ET01VdGlsaXRpZXMuanMnXHJcbmltcG9ydCB7IGdldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCwgYWRkbmV3VGFza1RvQ3VycmVudFByb2plY3QsIHJlbW92ZVRhc2tGcm9tQXJyYXkgfSBmcm9tIFwiLi9sb2dpYy5qc1wiXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFVwTGlzdGVuZXJUYXNrKCkge1xyXG5cclxuICAgIGxldCB0YXNrX3RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc190aXRsZVwiKTtcclxuICAgIGxldCBwbHVzX3N5bWJvbCA9IHRhc2tfdGl0bGUucXVlcnlTZWxlY3RvcihcIi5wbHVzX3N5bWJvbFwiKTtcclxuICAgIHBsdXNfc3ltYm9sLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGROZXdUYXNrKTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZE5ld1Rhc2soKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJwbHVzIHNpZ24gdGFza3MgY2xpY2tlZCFcIik7XHJcbiAgICAvL2FkZCBuZXcgdGFzayB0byB0aGUgVUkgZmlyc3RcclxuICAgIG1ha2VBbklucHV0Qm94KCk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlQW5JbnB1dEJveCgpIHtcclxuXHJcbiAgICBsZXQgdGFza3NfYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NfYm9keVwiKTtcclxuICAgIGxldCBpbnB1dF9ib3ggPSBtYWtlRWxlbWVudChcImlucHV0XCIsIFwicHJvamVjdF9pbnB1dFwiLCB1bmRlZmluZWQpO1xyXG4gICAgdGFza3NfYm9keS5hcHBlbmRDaGlsZChpbnB1dF9ib3gpO1xyXG4gICAgaW5wdXRfYm94LmZvY3VzKCk7XHJcbiAgICBhZGRMaXN0ZW5lck9uSW5wdXRCb3goaW5wdXRfYm94KTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZExpc3RlbmVyT25JbnB1dEJveChpbnB1dF9ib3gpIHtcclxuXHJcbiAgICAvL2FkZCBhIG5ldyBkaXYgYW5kIGFkZCB0aGUgcHJvamVjdCB0byB0aGUgYXJyYXkuXHJcbiAgICBpbnB1dF9ib3guYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbnRlciBrZXkgcHJlc3NlZCFcIik7XHJcbiAgICAgICAgICAgIGlucHV0X2JveC5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2NoYW5nZSBiZWxvdyBsaW5lIGluIHRoZSBlbmRcclxuICAgICAgICAgICAgYWRkbmV3VGFza1RvQ3VycmVudFByb2plY3QoaW5wdXRfYm94LnZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIC8vZnVuY3Rpb24gY2FsbCBoZXJlXHJcbiAgICAgICAgICAgIG5ld1Rhc2tEaXYoaW5wdXRfYm94LnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gbmV3VGFza0Rpdih0YXNrTmFtZSkge1xyXG5cclxuICAgIGxldCB0YXNrZGl2ID0gbWFrZUVsZW1lbnQoXCJkaXZcIiwgXCJ0YXNrXCIsIHVuZGVmaW5lZCk7XHJcbiAgICBsZXQgY3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0ID0gZ2V0Q3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50bHlTZWxlY3RlZFByb2plY3QpO1xyXG4gICAgY29uc29sZS5sb2coXCJ0aGUgbnVtYmVyIG9mIHRhc2tzIGluIGN1cnJlbnRseSBzZWxlY3RlZCBwcm9qZWN0IGlzXCIpXHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50bHlTZWxlY3RlZFByb2plY3QuZ2V0TnVtYmVyT2ZUYXNrcygpKTtcclxuXHJcbiAgICAvL21vc3Qgb2YgdGhlIGxvZ2ljIGJlbG93IG5vdCBuZWVkZWQuIGRlbGV0ZSBsYXRlci5cclxuICAgIGxldCBudW1iZXJPZnRhc2tzSW5DdXJyZW50bHlTZWxlY3RlZFByb2plY3QgPSBjdXJyZW50bHlTZWxlY3RlZFByb2plY3QuZ2V0TnVtYmVyT2ZUYXNrcygpO1xyXG4gICAgbGV0IGNoZWNrQm94SW5wdXQgPSBtYWtlRWxlbWVudChcImlucHV0XCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcclxuICAgIFxyXG4gICAgY2hlY2tCb3hJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XHJcbiAgICAvL2FkZCBsaXN0ZW5lciB0byB0aGUgY2hlY2tib3hcclxuICAgIGNoZWNrQm94SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCByZW1vdmVUYXNrKVxyXG4gICAgY29uc29sZS5sb2coY2hlY2tCb3hJbnB1dCk7XHJcblxyXG4gICAgLy9jaGFuZ2UgdGhlIG5hbWUgb2YgdGhlIHRhc2sgaGVyZS5cclxuICAgIGxldCBsYWJlbCA9IG1ha2VFbGVtZW50KFwibGFiZWxcIiwgdW5kZWZpbmVkLCB0YXNrTmFtZSk7XHJcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgbnVtYmVyT2Z0YXNrc0luQ3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0KTtcclxuXHJcbiAgICB0YXNrZGl2LmFwcGVuZChjaGVja0JveElucHV0LCBsYWJlbCk7XHJcbiAgICBsZXQgdGFza3NfYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NfYm9keVwiKTtcclxuICAgIHRhc2tzX2JvZHkuYXBwZW5kKHRhc2tkaXYpO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlVGFzayhlKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJ0cnlpbmcgdG8gcmVtb3ZlIHRhc2tcIik7XHJcbiAgICBsZXQgbmFtZU9mVGFza1RvRGVsZXRlID0gZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50O1xyXG4gICAgY29uc29sZS5sb2coYG5hbWUgb2YgdGhlIHRhc2sgdG8gYmUgZGVsZXRlZCAke25hbWVPZlRhc2tUb0RlbGV0ZX1gKTtcclxuICAgIHJlbW92ZVRhc2tGcm9tQXJyYXkobmFtZU9mVGFza1RvRGVsZXRlKTtcclxuICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUFsbFRhc2tzKCkge1xyXG5cclxuXHJcbiAgICBsZXQgZGl2c1RvUmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpO1xyXG4gICAgaWYgKGRpdnNUb1JlbW92ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgQXJyYXkuZnJvbShkaXZzVG9SZW1vdmUpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsZXQgdGFza3MgPSBnZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QoKS50YXNrcztcclxuICAgIHRhc2tzLmZvckVhY2goZnVuY3Rpb24gKHRhc2ssIGluZGV4KSB7XHJcblxyXG4gICAgICAgIGxldCB0YXNrZGl2ID0gbWFrZUVsZW1lbnQoXCJkaXZcIiwgXCJ0YXNrXCIsIHVuZGVmaW5lZCk7XHJcblxyXG4gICAgICAgIGxldCBjaGVja0JveElucHV0ID0gbWFrZUVsZW1lbnQoXCJpbnB1dFwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgY2hlY2tCb3hJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XHJcbiAgICAgICAgY2hlY2tCb3hJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpbmRleCk7XHJcbiAgICAgICAgICAgIC8vYWRkIGxpc3RlbmVyIHRvIHRoZSBjaGVja2JveFxyXG4gICAgICAgIGNoZWNrQm94SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCByZW1vdmVUYXNrKVxyXG5cclxuICAgICAgICBsZXQgbGFiZWwgPSBtYWtlRWxlbWVudChcImxhYmVsXCIsIHVuZGVmaW5lZCwgdGFzay5uYW1lKTtcclxuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaW5kZXgpO1xyXG5cclxuICAgICAgICB0YXNrZGl2LmFwcGVuZChjaGVja0JveElucHV0LCBsYWJlbCk7XHJcbiAgICAgICAgbGV0IHRhc2tzX2JvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzX2JvZHlcIik7XHJcbiAgICAgICAgdGFza3NfYm9keS5hcHBlbmQodGFza2Rpdik7XHJcbiAgICB9KVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgeyBtYWtlSG9tZVBhZ2UgfSBmcm9tIFwiLi9ob21lUGFnZUNyZWF0b3IuanNcIjtcclxuaW1wb3J0IHtzZXRVcExpc3RlbmVyc30gZnJvbSBcIi4vcHJvamVjdEZyb250LmpzXCIgXHJcbmltcG9ydCB7c2V0VXBMaXN0ZW5lclRhc2t9IGZyb20gXCIuL3Rhc2tGcm9udC5qc1wiO1xyXG5cclxubWFrZUhvbWVQYWdlKCk7XHJcbnNldFVwTGlzdGVuZXJzKCk7XHJcbnNldFVwTGlzdGVuZXJUYXNrKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9