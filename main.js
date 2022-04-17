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
/* harmony export */   "getCurrentlySelectedProject": () => (/* binding */ getCurrentlySelectedProject),
/* harmony export */   "removeTaskFromArray": () => (/* binding */ removeTaskFromArray),
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
let temp = projectsArray.filter((element)=>{
    if(element.project_name==clickedProject){
        return true;
    }
})
    currentlySelectedProject= temp[0];
    console.log(currentlySelectedProject);
}

function getCurrentlySelectedProject(){
    return currentlySelectedProject;
}

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


    let project_name=name;
    let tasks=[];

    function addTask(task){
        tasks.push((0,_task_js__WEBPACK_IMPORTED_MODULE_0__.Task)(task));
    }

    function getNumberOfTasks(){
        return tasks.length;
    }

    function deleteTask(taskName){
         tasks.filter((element, index)=>{
            if(element.name==taskName){
                console.log(element)
                tasks.splice(index, 1);
            }
        })
    } 

    return {project_name, addTask, tasks, getNumberOfTasks, deleteTask};

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

    let name=taskName

    return {name}

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
    checkBoxInput.setAttribute("data", numberOftasksInCurrentlySelectedProject);
    checkBoxInput.setAttribute("id", numberOftasksInCurrentlySelectedProject);
    //add listener to the checkbox
    checkBoxInput.addEventListener("change", removeTask)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7O0FDckJvRDtBQUNKO0FBQ0M7QUFDakQ7QUFDQSxpRUFBWTtBQUNaLGdFQUFjO0FBQ2QsZ0VBQWlCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvYXNzZXRzL2ljb25zL3BsdXNTeW1ib2wuc3ZnIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9ET01VdGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9ob21lUGFnZUNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9wcm9qZWN0RnJvbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvdGFza0Zyb250LmpzIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvc3RhdGljL01vbnRzZXJyYXQtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKnx8UmVzZXQgICovXFxyXFxuKntcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0LVJlZ3VsYXJcXFwiO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbjpyb290e1xcclxcbiAgICBmb250LXNpemU6MTBweDtcXHJcXG4gICAgLS1oZWFkZXItZm9vdGVyLWJnQ29sb3I6I2UwN2E1ZjtcXHJcXG4gICAgLS1nZW5lcmFsLWZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdC1SZWd1bGFyXFxcIjtcXHJcXG4gICAgLS1tYWluLWJnQ29sb3I6ICNmYmY4Y2M7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGhlaWdodDoxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItZm9vdGVyLWJnQ29sb3IpO1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tZ2VuZXJhbC1mb250LWZhbWlseSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYyg0cmVtICsgMS41dncpO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMy41cmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgICBmbGV4OiAwIDAgYXV0bztcXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxubWFpbntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZ0NvbG9yKTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcclxcbiAgICBmbGV4OiAxIDEgYXV0bztcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWdlbmVyYWwtZm9udC1mYW1pbHkpO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuXFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5mb290ZXJ7XFxyXFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tZ2VuZXJhbC1mb250LWZhbWlseSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1mb290ZXItYmdDb2xvcik7XFxyXFxuICAgIHBhZGRpbmctdG9wOjFyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKnx8UHJvamVjdHMqL1xcclxcblxcclxcbi5wcm9qZWN0X3NpZGViYXIsIC50YXNrX2NvbnRhaW5lcntcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6MjBweDtcXHJcXG59XFxyXFxuLnByb2plY3Rfc2lkZWJhcl90aXRsZSwgLnRhc2tzX3RpdGxle1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoMXJlbSArIDEuNXZ3KTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Rfc2lkZWJhcl9ib2R5LCAudGFza3NfYm9keXtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDAuNXJlbSArIDEuMHZ3KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucGx1c19zeW1ib2x7XFxyXFxuICAgIHdpZHRoOiAzcmVtO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxuICAgIGN1cnNvcjpwb2ludGVyO1xcclxcbiAgIFxcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdDpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwN2E1ZiA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLnByb2plY3QtY2xpY2tlZHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwN2E1ZiA7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbmxhYmVse1xcclxcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsWUFBWTtBQUNaO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsNENBQXNEOztBQUUxRDs7OztBQUlBO0lBQ0ksY0FBYztJQUNkLCtCQUErQjtJQUMvQiwyQ0FBMkM7SUFDM0MsdUJBQXVCO0FBQzNCOzs7O0FBSUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw4Q0FBOEM7SUFDOUMsdUNBQXVDO0lBQ3ZDLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixjQUFjOzs7QUFHbEI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2QsdUNBQXVDO0lBQ3ZDLFNBQVM7SUFDVCxhQUFhOzs7QUFHakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsdUNBQXVDO0lBQ3ZDLDhDQUE4QztJQUM5QyxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUEsYUFBYTs7QUFFYjtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFNBQVM7O0FBRWI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHdCQUF3QjtJQUN4QixjQUFjOztBQUVsQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSwwQkFBMEI7O0FBRTlCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qfHxSZXNldCAgKi9cXHJcXG4qe1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXQtUmVndWxhclxcXCI7XFxyXFxuICAgIHNyYzogdXJsKC4vYXNzZXRzL2ZvbnRzL3N0YXRpYy9Nb250c2VycmF0LVJlZ3VsYXIudHRmKTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuOnJvb3R7XFxyXFxuICAgIGZvbnQtc2l6ZToxMHB4O1xcclxcbiAgICAtLWhlYWRlci1mb290ZXItYmdDb2xvcjojZTA3YTVmO1xcclxcbiAgICAtLWdlbmVyYWwtZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0LVJlZ3VsYXJcXFwiO1xcclxcbiAgICAtLW1haW4tYmdDb2xvcjogI2ZiZjhjYztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgaGVpZ2h0OjEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1mb290ZXItYmdDb2xvcik7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1nZW5lcmFsLWZvbnQtZmFtaWx5KTtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDRyZW0gKyAxLjV2dyk7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAzLjVyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcclxcblxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5tYWlue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnQ29sb3IpO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxyXFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tZ2VuZXJhbC1mb250LWZhbWlseSk7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG5cXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbmZvb3RlcntcXHJcXG4gICAgZmxleDogMCAwIGF1dG87XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1nZW5lcmFsLWZvbnQtZmFtaWx5KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWZvb3Rlci1iZ0NvbG9yKTtcXHJcXG4gICAgcGFkZGluZy10b3A6MXJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi8qfHxQcm9qZWN0cyovXFxyXFxuXFxyXFxuLnByb2plY3Rfc2lkZWJhciwgLnRhc2tfY29udGFpbmVye1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czoyMHB4O1xcclxcbn1cXHJcXG4ucHJvamVjdF9zaWRlYmFyX3RpdGxlLCAudGFza3NfdGl0bGV7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYygxcmVtICsgMS41dncpO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdF9zaWRlYmFyX2JvZHksIC50YXNrc19ib2R5e1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoMC41cmVtICsgMS4wdncpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5wbHVzX3N5bWJvbHtcXHJcXG4gICAgd2lkdGg6IDNyZW07XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxyXFxuICAgXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0OmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTA3YTVmIDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ucHJvamVjdC1jbGlja2Vke1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTA3YTVmIDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxubGFiZWx7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMTE3N2U2YWM5ODdkMGFkODU2Mjg0YzY4ZjQ0ODQyNDAuc3ZnXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiIFxyXG4gaW1wb3J0ICcuL3N0eWxlcy5jc3MnXHJcbiBcclxuIGV4cG9ydCBsZXQgbWFrZUVsZW1lbnQgPSAgZnVuY3Rpb24oZWxlbWVudFR5cGUsIGVsZW1lbnRDbGFzcywgZWxlbWVudENvbnRlbnQpe1xyXG4gICAgbGV0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKTtcclxuXHJcbiAgICBpZihlbGVtZW50Q2xhc3Mpe1xyXG4gICAgICAgIG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChlbGVtZW50Q2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGVsZW1lbnRDb250ZW50KXtcclxuICAgICAgICBuZXdFbGVtZW50LnRleHRDb250ZW50ID0gZWxlbWVudENvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBtYWtlRWxlbWVudCB9IGZyb20gJy4vRE9NVXRpbGl0aWVzLmpzJ1xyXG5pbXBvcnQgcGx1c1N5bWJvbCBmcm9tIFwiLi9hc3NldHMvaWNvbnMvcGx1c1N5bWJvbC5zdmdcIjtcclxuaW1wb3J0IHsgbWFrZU5ld1Byb2plY3REaXYgfSBmcm9tIFwiLi9wcm9qZWN0RnJvbnQuanNcIjtcclxuaW1wb3J0IHsgYWRkRGVmYXVsdFByb2plY3QgfSBmcm9tIFwiLi9sb2dpYy5qc1wiXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGxldCBtYWtlSGVhZGVyID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGxldCBoZWFkZXIgPSBtYWtlRWxlbWVudCgnaGVhZGVyJywgdW5kZWZpbmVkLCBcIlRvLURvIEFwcGxpY2F0aW9uXCIpO1xyXG5cclxuICAgIHJldHVybiBoZWFkZXI7XHJcblxyXG59XHJcblxyXG5leHBvcnQgbGV0IG1ha2VfbWFpbiA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgbGV0IG1ha2VfcHJvamVjdF9zaWRlYmFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBwcm9qZWN0X3NpZGViYXIgPSBtYWtlRWxlbWVudCgnZGl2JywgXCJwcm9qZWN0X3NpZGViYXJcIiwgdW5kZWZpbmVkKTtcclxuXHJcbiAgICAgICAgbGV0IHByb2plY3Rfc2lkZWJhcl90aXRsZSA9IG1ha2VFbGVtZW50KCdkaXYnLCBcInByb2plY3Rfc2lkZWJhcl90aXRsZVwiLCBcIlByb2plY3RzXCIpO1xyXG5cclxuICAgICAgICBsZXQgcGx1c19zeW1ib2wgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBwbHVzX3N5bWJvbC5zcmMgPSBwbHVzU3ltYm9sO1xyXG4gICAgICAgIHBsdXNfc3ltYm9sLmNsYXNzTGlzdC5hZGQoXCJwbHVzX3N5bWJvbFwiKTtcclxuICAgICAgICBwbHVzX3N5bWJvbC5hbHQgPSBcImFkZC1wcm9qZWN0XCJcclxuXHJcbiAgICAgICAgbGV0IHByb2plY3Rfc2lkZWJhcl9ib2R5ID0gbWFrZUVsZW1lbnQoJ2RpdicsIFwicHJvamVjdF9zaWRlYmFyX2JvZHlcIiwgdW5kZWZpbmVkKTtcclxuXHJcbiAgICAgICAgcHJvamVjdF9zaWRlYmFyX3RpdGxlLmFwcGVuZChwbHVzX3N5bWJvbCk7XHJcbiAgICAgICAgcHJvamVjdF9zaWRlYmFyLmFwcGVuZChwcm9qZWN0X3NpZGViYXJfdGl0bGUsIHByb2plY3Rfc2lkZWJhcl9ib2R5KTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHByb2plY3Rfc2lkZWJhclxyXG4gICAgfVxyXG5cclxuICAgIGxldCBtYWtlX3Rhc2tfY29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCB0YXNrX2NvbnRhaW5lciA9IG1ha2VFbGVtZW50KFwiZGl2XCIsIFwidGFza19jb250YWluZXJcIiwgdW5kZWZpbmVkKTtcclxuICAgICAgICBsZXQgdGFza3NfdGl0bGUgPSBtYWtlRWxlbWVudChcImRpdlwiLCBcInRhc2tzX3RpdGxlXCIsIFwiVGFza3NcIik7XHJcbiAgICAgICAgbGV0IHBsdXNfc3ltYm9sID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgcGx1c19zeW1ib2wuc3JjID0gcGx1c1N5bWJvbDtcclxuICAgICAgICBwbHVzX3N5bWJvbC5jbGFzc0xpc3QuYWRkKFwicGx1c19zeW1ib2xcIik7XHJcbiAgICAgICAgcGx1c19zeW1ib2wuYWx0ID0gXCJhZGQgdGFza1wiO1xyXG4gICAgICAgIGxldCB0YXNrc19ib2R5ID0gbWFrZUVsZW1lbnQoXCJkaXZcIiwgXCJ0YXNrc19ib2R5XCIsIHVuZGVmaW5lZCk7XHJcblxyXG4gICAgICAgIHRhc2tzX3RpdGxlLmFwcGVuZChwbHVzX3N5bWJvbCk7XHJcbiAgICAgICAgdGFza19jb250YWluZXIuYXBwZW5kKHRhc2tzX3RpdGxlLCB0YXNrc19ib2R5KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRhc2tfY29udGFpbmVyXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsZXQgbWFpbiA9IG1ha2VFbGVtZW50KCdtYWluJywgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xyXG4gICAgbWFpbi5hcHBlbmQobWFrZV9wcm9qZWN0X3NpZGViYXIoKSwgbWFrZV90YXNrX2NvbnRhaW5lcigpKVxyXG4gICAgcmV0dXJuIG1haW47XHJcbn1cclxuXHJcbmxldCBtYWtlX2Zvb3RlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBmb290ZXIgPSBtYWtlRWxlbWVudChcImZvb3RlclwiLCB1bmRlZmluZWQsIFwid2l0aCBMb3ZlXCIpO1xyXG4gICAgcmV0dXJuIGZvb3RlcjtcclxufVxyXG5cclxuZXhwb3J0IGxldCBtYWtlSG9tZVBhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgbGV0IGhlYWRlciA9IG1ha2VIZWFkZXIoKTtcclxuICAgIGxldCBtYWluID0gbWFrZV9tYWluKCk7XHJcbiAgICBsZXQgZm9vdGVyID0gbWFrZV9mb290ZXIoKTtcclxuXHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kKGhlYWRlciwgbWFpbiwgZm9vdGVyKTtcclxuXHJcblxyXG4gICAgLy9hZGQgdGhlIGRlZmF1bHQgcHJvamVjdCBpbiBvdXIgbG9naWNcclxuICAgIGFkZERlZmF1bHRQcm9qZWN0KCk7XHJcbiAgICAvL2hlcmUgbWFrZSB0aGUgVUkgZm9yIHRoZSBkZWZhdWx0IHByb2plY3QuIFxyXG4gICAgbWFrZU5ld1Byb2plY3REaXYoXCJpbmJveFwiKTtcclxuXHJcblxyXG5cclxufSIsImltcG9ydCB7UHJvamVjdH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xyXG5cclxubGV0IHByb2plY3RzQXJyYXk9IFtdO1xyXG5sZXQgY3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZERlZmF1bHRQcm9qZWN0KCl7XHJcbiAgICBsZXQgZGVmYXVsdFByb2plY3Q9IFByb2plY3QoXCJpbmJveFwiKTtcclxuICAgIHByb2plY3RzQXJyYXkucHVzaChkZWZhdWx0UHJvamVjdCk7XHJcbiAgICBjdXJyZW50bHlTZWxlY3RlZFByb2plY3Q9IGRlZmF1bHRQcm9qZWN0O1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdHNBcnJheSk7XHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50bHlTZWxlY3RlZFByb2plY3QpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3UHJvamVjdChjb250ZW50T2ZJbnB1dCl7XHJcbiAgICBjb25zb2xlLmxvZyhcIm5ldyBwcm9qZWN0IGFkZGVkIS5cIilcclxuICAgIGNvbnNvbGUubG9nKGNvbnRlbnRPZklucHV0KTtcclxuXHJcbiAgICAvL21ha2UgYSBuZXcgcHJvamVjdCBhbmQgYWRkIHRvIHRoZSBwcm9qZWN0c0FycmF5W11cclxuICAgIGxldCBuZXdQcm9qZWN0PSBQcm9qZWN0KGNvbnRlbnRPZklucHV0KTtcclxuICAgIHByb2plY3RzQXJyYXkucHVzaChuZXdQcm9qZWN0KTtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RzQXJyYXkpO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdChjbGlja2VkUHJvamVjdCl7XHJcbmNvbnNvbGUubG9nKGB0aGUgcHJvamVjdCBzZWxlY3RlZCAgaXM6ICR7Y2xpY2tlZFByb2plY3R9IGApO1xyXG5sZXQgdGVtcCA9IHByb2plY3RzQXJyYXkuZmlsdGVyKChlbGVtZW50KT0+e1xyXG4gICAgaWYoZWxlbWVudC5wcm9qZWN0X25hbWU9PWNsaWNrZWRQcm9qZWN0KXtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufSlcclxuICAgIGN1cnJlbnRseVNlbGVjdGVkUHJvamVjdD0gdGVtcFswXTtcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QoKXtcclxuICAgIHJldHVybiBjdXJyZW50bHlTZWxlY3RlZFByb2plY3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRuZXdUYXNrVG9DdXJyZW50UHJvamVjdCh0YXNrTmFtZSl7XHJcbiAgICBjdXJyZW50bHlTZWxlY3RlZFByb2plY3QuYWRkVGFzayh0YXNrTmFtZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUYXNrRnJvbUFycmF5KG5hbWVPZlRhc2spe1xyXG4gICAgY29uc29sZS5sb2coY3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0KTtcclxuICAgIGNvbnNvbGUubG9nKG5hbWVPZlRhc2spO1xyXG4gICAgY29uc29sZS5sb2coY3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0LnRhc2tzKTtcclxuICAgIGN1cnJlbnRseVNlbGVjdGVkUHJvamVjdC5kZWxldGVUYXNrKG5hbWVPZlRhc2spO1xyXG4gICAgY29uc29sZS5sb2coY3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0LnRhc2tzKTtcclxuXHJcblxyXG59IiwiXHJcbmltcG9ydCB7VGFza30gZnJvbSBcIi4vdGFzay5qc1wiXHJcbi8vaGVyZSBtYWtlIHRoZSBjb25zdHJ1Y3RvciBmb3IgdGhlIHByb2plY3Qgb2JqZWN0LiBcclxuXHJcbmV4cG9ydCBsZXQgUHJvamVjdCA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcblxyXG5cclxuICAgIGxldCBwcm9qZWN0X25hbWU9bmFtZTtcclxuICAgIGxldCB0YXNrcz1bXTtcclxuXHJcbiAgICBmdW5jdGlvbiBhZGRUYXNrKHRhc2spe1xyXG4gICAgICAgIHRhc2tzLnB1c2goVGFzayh0YXNrKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0TnVtYmVyT2ZUYXNrcygpe1xyXG4gICAgICAgIHJldHVybiB0YXNrcy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlVGFzayh0YXNrTmFtZSl7XHJcbiAgICAgICAgIHRhc2tzLmZpbHRlcigoZWxlbWVudCwgaW5kZXgpPT57XHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnQubmFtZT09dGFza05hbWUpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudClcclxuICAgICAgICAgICAgICAgIHRhc2tzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSBcclxuXHJcbiAgICByZXR1cm4ge3Byb2plY3RfbmFtZSwgYWRkVGFzaywgdGFza3MsIGdldE51bWJlck9mVGFza3MsIGRlbGV0ZVRhc2t9O1xyXG5cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgYWRkTmV3UHJvamVjdCwgc2V0Q3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0IH0gZnJvbSBcIi4vbG9naWMuanNcIlxyXG5pbXBvcnQgeyBtYWtlRWxlbWVudCB9IGZyb20gJy4vRE9NVXRpbGl0aWVzLmpzJ1xyXG5pbXBvcnQge2Rpc3BsYXlBbGxUYXNrc30gZnJvbSBcIi4vdGFza0Zyb250LmpzXCJcclxuXHJcblxyXG4vL25vdyBhZGQgbGlzdGVuZXIgdG8gdGhlIGFkZCBzaWduLiBcclxuXHJcbmZ1bmN0aW9uIGFkZExpc3RlbmVyT25QbHVzU2lnbigpIHtcclxuXHJcbiAgICAvL2xpc3RlbmVyIG9uIHRoZSBwbHVzIHNpZ24gZm9yIHRoZSBwcm9qZWN0XHJcblxyXG4gICAgbGV0IHByb2plY3Rfc2lkZWJhcl90aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdF9zaWRlYmFyX3RpdGxlXCIpO1xyXG5cclxuICAgIGxldCBwbHVzX3N5bWJvbCA9IHByb2plY3Rfc2lkZWJhcl90aXRsZS5xdWVyeVNlbGVjdG9yKFwiLnBsdXNfc3ltYm9sXCIpO1xyXG5cclxuICAgIHBsdXNfc3ltYm9sLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwbHVzIHNpZ24gd2FzIGNsaWNrZWRcIik7XHJcbiAgICAgICAgLy9tYWtlIGFuIGlucHV0IGJveDtcclxuICAgICAgICBtYWtlQW5JbnB1dEJveCgpO1xyXG4gICAgfSlcclxuXHJcbn1cclxuXHJcblxyXG4gIC8vZnVuY3Rpb24gdG8gbWFrZSBhbiBpbnB1dCBib3g7XHJcbmZ1bmN0aW9uIG1ha2VBbklucHV0Qm94KCl7XHJcbiAgICBsZXQgcHJvamVjdF9zaWRlYmFyX2JvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3Rfc2lkZWJhcl9ib2R5XCIpO1xyXG4gICAgbGV0IGlucHV0X2JveCA9IG1ha2VFbGVtZW50KFwiaW5wdXRcIiwgXCJwcm9qZWN0X2lucHV0XCIsIHVuZGVmaW5lZCk7XHJcbiAgICBwcm9qZWN0X3NpZGViYXJfYm9keS5hcHBlbmRDaGlsZChpbnB1dF9ib3gpO1xyXG4gICAgaW5wdXRfYm94LmZvY3VzKCk7XHJcbiAgICBhZGRMaXN0ZW5lck9uSW5wdXRCb3goaW5wdXRfYm94KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkTGlzdGVuZXJPbklucHV0Qm94KGlucHV0X2JveCkge1xyXG4gICAgLy9hZGQgYSBuZXcgZGl2IGFuZCBhZGQgdGhlIHByb2plY3QgdG8gdGhlIGFycmF5LlxyXG4gICAgaW5wdXRfYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW50ZXIga2V5IHByZXNzZWQhXCIpO1xyXG4gICAgICAgICAgICBhZGROZXdQcm9qZWN0KGlucHV0X2JveC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGlucHV0X2JveC5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vZnVuY3Rpb24gY2FsbCBoZXJlXHJcbiAgICAgICAgICAgIG1ha2VOZXdQcm9qZWN0RGl2KGlucHV0X2JveC52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VOZXdQcm9qZWN0RGl2KG5hbWVPZlByb2plY3Qpe1xyXG4gICAgICAgLy9tYWtpbmcgbmV3IGRpdlxyXG4gICAgICAgbGV0IG5ld1Byb2plY3QgPSBtYWtlRWxlbWVudChcImRpdlwiLCBcInByb2plY3RcIiwgbmFtZU9mUHJvamVjdCk7XHJcbiAgICAgICAvL2FkZCBsaXN0ZW5lciBvbiBwcm9qZWN0IFxyXG4gICAgICAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkTGlzdGVuZXJPblByb2plY3QpO1xyXG4gICAgICAgbGV0IHByb2plY3Rfc2lkZWJhcl9ib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0X3NpZGViYXJfYm9keVwiKTtcclxuICAgICAgIHByb2plY3Rfc2lkZWJhcl9ib2R5LmFwcGVuZChuZXdQcm9qZWN0KTtcclxuXHJcbiAgICAgICBzd2l0Y2hDdXJyZW50UHJvamVjdFRvKG5ld1Byb2plY3QpO1xyXG5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZExpc3RlbmVyT25Qcm9qZWN0KGUpIHtcclxuICAgIGNvbnNvbGUubG9nKFwicHJvamVjdCBjbGlja2VkIVwiKTtcclxuICAgIGxldCBwcmV2aW91c2x5Q2xpY2tlZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY2xpY2tlZFwiKTtcclxuICAgIGlmIChwcmV2aW91c2x5Q2xpY2tlZFByb2plY3QpIHtcclxuICAgICAgICBwcmV2aW91c2x5Q2xpY2tlZFByb2plY3QuY2xhc3NMaXN0LnRvZ2dsZShcInByb2plY3QtY2xpY2tlZFwiKTtcclxuICAgIH1cclxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNsaWNrZWRcIik7XHJcbiAgICBzZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QoZS50YXJnZXQudGV4dENvbnRlbnQpO1xyXG5cclxuICAgIC8vc2hvdyB0aGUgdGFza3Mgb25seSBpbiB0aGUgY3VycmVudCBwcm9qZWN0LiBcclxuICAgIGRpc3BsYXlBbGxUYXNrcygpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN3aXRjaEN1cnJlbnRQcm9qZWN0VG8obmV3UHJvamVjdCkge1xyXG4gICAgbGV0IHByZXZpb3VzbHlDbGlja2VkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jbGlja2VkXCIpO1xyXG4gICAgaWYgKHByZXZpb3VzbHlDbGlja2VkUHJvamVjdCkge1xyXG4gICAgICAgIHByZXZpb3VzbHlDbGlja2VkUHJvamVjdC5jbGFzc0xpc3QudG9nZ2xlKFwicHJvamVjdC1jbGlja2VkXCIpO1xyXG4gICAgfVxyXG4gICAgbmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jbGlja2VkXCIpO1xyXG4gICAgc2V0Q3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0KG5ld1Byb2plY3QudGV4dENvbnRlbnQpO1xyXG5cclxuICAgIC8vc2hvdyB0aGUgdGFza3Mgb25seSBpbiB0aGUgY3VycmVudCBwcm9qZWN0LiBcclxuICAgIGRpc3BsYXlBbGxUYXNrcygpXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFVwTGlzdGVuZXJzKCkge1xyXG4gICAgYWRkTGlzdGVuZXJPblBsdXNTaWduKCk7XHJcbn0iLCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUYXNrKHRhc2tOYW1lKXtcclxuXHJcbiAgICBsZXQgbmFtZT10YXNrTmFtZVxyXG5cclxuICAgIHJldHVybiB7bmFtZX1cclxuXHJcbn0iLCJpbXBvcnQgeyBtYWtlRWxlbWVudCB9IGZyb20gJy4vRE9NVXRpbGl0aWVzLmpzJ1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QsIGFkZG5ld1Rhc2tUb0N1cnJlbnRQcm9qZWN0LCByZW1vdmVUYXNrRnJvbUFycmF5IH0gZnJvbSBcIi4vbG9naWMuanNcIlxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRVcExpc3RlbmVyVGFzaygpIHtcclxuICAgIGxldCB0YXNrX3RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc190aXRsZVwiKTtcclxuICAgIGxldCBwbHVzX3N5bWJvbCA9IHRhc2tfdGl0bGUucXVlcnlTZWxlY3RvcihcIi5wbHVzX3N5bWJvbFwiKTtcclxuICAgIHBsdXNfc3ltYm9sLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGROZXdUYXNrKTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZE5ld1Rhc2soKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInBsdXMgc2lnbiB0YXNrcyBjbGlja2VkIVwiKTtcclxuICAgIC8vYWRkIG5ldyB0YXNrIHRvIHRoZSBVSSBmaXJzdFxyXG4gICAgbWFrZUFuSW5wdXRCb3goKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFrZUFuSW5wdXRCb3goKSB7XHJcbiAgICBsZXQgdGFza3NfYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NfYm9keVwiKTtcclxuICAgIGxldCBpbnB1dF9ib3ggPSBtYWtlRWxlbWVudChcImlucHV0XCIsIFwicHJvamVjdF9pbnB1dFwiLCB1bmRlZmluZWQpO1xyXG4gICAgdGFza3NfYm9keS5hcHBlbmRDaGlsZChpbnB1dF9ib3gpO1xyXG4gICAgaW5wdXRfYm94LmZvY3VzKCk7XHJcbiAgICBhZGRMaXN0ZW5lck9uSW5wdXRCb3goaW5wdXRfYm94KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkTGlzdGVuZXJPbklucHV0Qm94KGlucHV0X2JveCkge1xyXG4gICAgLy9hZGQgYSBuZXcgZGl2IGFuZCBhZGQgdGhlIHByb2plY3QgdG8gdGhlIGFycmF5LlxyXG4gICAgaW5wdXRfYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW50ZXIga2V5IHByZXNzZWQhXCIpO1xyXG4gICAgICAgICAgICBpbnB1dF9ib3gucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICAvL2Z1bmN0aW9uIGNhbGwgaGVyZVxyXG4gICAgICAgICAgICBuZXdUYXNrRGl2KGlucHV0X2JveC52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gbmV3VGFza0Rpdih0YXNrTmFtZSkge1xyXG4gICAgbGV0IHRhc2tkaXYgPSBtYWtlRWxlbWVudChcImRpdlwiLCBcInRhc2tcIiwgdW5kZWZpbmVkKTtcclxuXHJcblxyXG4gICAgbGV0IGN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCA9IGdldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCgpO1xyXG4gICAgY29uc29sZS5sb2coY3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0KTtcclxuICAgIGNvbnNvbGUubG9nKFwidGhlIG51bWJlciBvZiB0YXNrcyBpbiBjdXJyZW50bHkgc2VsZWN0ZWQgcHJvamVjdCBpc1wiKVxyXG4gICAgY29uc29sZS5sb2coY3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0LmdldE51bWJlck9mVGFza3MoKSk7XHJcblxyXG4gICAgLy9tb3N0IG9mIHRoZSBsb2dpYyBiZWxvdyBub3QgbmVlZGVkLiBkZWxldGUgbGF0ZXIuXHJcblxyXG4gICAgbGV0IG51bWJlck9mdGFza3NJbkN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCA9IGN1cnJlbnRseVNlbGVjdGVkUHJvamVjdC5nZXROdW1iZXJPZlRhc2tzKCk7XHJcbiAgICBsZXQgY2hlY2tCb3hJbnB1dCA9IG1ha2VFbGVtZW50KFwiaW5wdXRcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xyXG5cclxuICAgIGNoZWNrQm94SW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xyXG4gICAgY2hlY2tCb3hJbnB1dC5zZXRBdHRyaWJ1dGUoXCJkYXRhXCIsIG51bWJlck9mdGFza3NJbkN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCk7XHJcbiAgICBjaGVja0JveElucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIG51bWJlck9mdGFza3NJbkN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCk7XHJcbiAgICAvL2FkZCBsaXN0ZW5lciB0byB0aGUgY2hlY2tib3hcclxuICAgIGNoZWNrQm94SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCByZW1vdmVUYXNrKVxyXG4gICAgY29uc29sZS5sb2coY2hlY2tCb3hJbnB1dCk7XHJcblxyXG4gICAgLy9jaGFuZ2UgYmVsb3cgbGluZSBpbiB0aGUgZW5kXHJcbiAgICBhZGRuZXdUYXNrVG9DdXJyZW50UHJvamVjdCh0YXNrTmFtZSk7XHJcblxyXG4gICAgLy9jaGFuZ2UgdGhlIG5hbWUgb2YgdGhlIHRhc2sgaGVyZS5cclxuICAgIGxldCBsYWJlbCA9IG1ha2VFbGVtZW50KFwibGFiZWxcIiwgdW5kZWZpbmVkLCB0YXNrTmFtZSk7XHJcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgbnVtYmVyT2Z0YXNrc0luQ3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0KTtcclxuXHJcbiAgICB0YXNrZGl2LmFwcGVuZChjaGVja0JveElucHV0LCBsYWJlbCk7XHJcbiAgICBsZXQgdGFza3NfYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NfYm9keVwiKTtcclxuICAgIHRhc2tzX2JvZHkuYXBwZW5kKHRhc2tkaXYpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVUYXNrKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKFwidHJ5aW5nIHRvIHJlbW92ZSB0YXNrXCIpO1xyXG4gICAgbGV0IG5hbWVPZlRhc2tUb0RlbGV0ZSA9IGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy50ZXh0Q29udGVudDtcclxuICAgIGNvbnNvbGUubG9nKGBuYW1lIG9mIHRoZSB0YXNrIHRvIGJlIGRlbGV0ZWQgJHtuYW1lT2ZUYXNrVG9EZWxldGV9YCk7XHJcbiAgICByZW1vdmVUYXNrRnJvbUFycmF5KG5hbWVPZlRhc2tUb0RlbGV0ZSk7XHJcbiAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlBbGxUYXNrcygpIHtcclxuXHJcblxyXG4gICAgbGV0IGRpdnNUb1JlbW92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKTtcclxuXHJcbiAgICBpZiAoZGl2c1RvUmVtb3ZlICE9IG51bGwpIHtcclxuICAgICAgICBBcnJheS5mcm9tKGRpdnNUb1JlbW92ZSkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGxldCB0YXNrcyA9IGdldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCgpLnRhc2tzO1xyXG4gICAgdGFza3MuZm9yRWFjaChmdW5jdGlvbiAodGFzaywgaW5kZXgpIHtcclxuXHJcbiAgICAgICAgbGV0IHRhc2tkaXYgPSBtYWtlRWxlbWVudChcImRpdlwiLCBcInRhc2tcIiwgdW5kZWZpbmVkKTtcclxuXHJcbiAgICAgICAgbGV0IGNoZWNrQm94SW5wdXQgPSBtYWtlRWxlbWVudChcImlucHV0XCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcclxuICAgICAgICBjaGVja0JveElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcclxuICAgICAgICBjaGVja0JveElucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGluZGV4KTtcclxuICAgICAgICAgICAgLy9hZGQgbGlzdGVuZXIgdG8gdGhlIGNoZWNrYm94XHJcbiAgICAgICAgY2hlY2tCb3hJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHJlbW92ZVRhc2spXHJcblxyXG4gICAgICAgIGxldCBsYWJlbCA9IG1ha2VFbGVtZW50KFwibGFiZWxcIiwgdW5kZWZpbmVkLCB0YXNrLm5hbWUpO1xyXG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBpbmRleCk7XHJcblxyXG4gICAgICAgIHRhc2tkaXYuYXBwZW5kKGNoZWNrQm94SW5wdXQsIGxhYmVsKTtcclxuICAgICAgICBsZXQgdGFza3NfYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NfYm9keVwiKTtcclxuICAgICAgICB0YXNrc19ib2R5LmFwcGVuZCh0YXNrZGl2KTtcclxuICAgIH0pXHJcblxyXG59XHJcblxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgeyBtYWtlSG9tZVBhZ2UgfSBmcm9tIFwiLi9ob21lUGFnZUNyZWF0b3IuanNcIjtcclxuaW1wb3J0IHtzZXRVcExpc3RlbmVyc30gZnJvbSBcIi4vcHJvamVjdEZyb250LmpzXCIgXHJcbmltcG9ydCB7c2V0VXBMaXN0ZW5lclRhc2t9IGZyb20gXCIuL3Rhc2tGcm9udC5qc1wiO1xyXG5cclxubWFrZUhvbWVQYWdlKCk7XHJcbnNldFVwTGlzdGVuZXJzKCk7XHJcbnNldFVwTGlzdGVuZXJUYXNrKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9