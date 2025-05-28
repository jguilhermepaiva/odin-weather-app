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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Reset básico e configurações globais */\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    color: #333;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n    padding: 20px;\n    line-height: 1.6;\n    transition: background-color 0.5s ease; /* Transição suave para o body */\n}\n\nbody.warm{\n    background-color:rgb(252, 221, 221); \n}\n\nbody.cold {\n    background-color: rgb(240, 248, 255); /* Azul claro */\n}\n/* Estilos base para o container do app */\n.app-container {\n    padding: 30px 40px;\n    border-radius: 15px;\n    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);\n    width: 100%;\n    max-width: 550px;\n    text-align: center;\n    transition: background 0.5s ease; /* Transição suave para o degradê */\n}\n\n/* --- TEMA FRIO (AZULADO) --- */\n/* O .app-container.cold terá o degradê que você definiu */\n.app-container.cold {\n    background: linear-gradient(135deg, #f0f8ff 0%, rgb(116, 175, 238) 100%);\n}\n/* Estilos padrão (que também servem para o tema frio) */\n.app-container header h1, .app-container.cold header h1 {\n    color: #003366;\n    margin-bottom: 25px;\n    font-size: 2.2em;\n    font-weight: 600;\n}\n\n.app-container .search-container, .app-container.cold .search-container { /* Adicionado .app-container para especificidade */\n    display: flex;\n    gap: 10px;\n    margin-bottom: 30px;\n}\n\n.app-container #city-input, .app-container.cold #city-input {\n    flex-grow: 1;\n    padding: 12px 15px;\n    border: 1px solid #b0c4de;\n    border-radius: 8px;\n    font-size: 1em;\n    outline: none;\n    transition: border-color 0.3s ease, box-shadow 0.3s ease;\n}\n\n.app-container #city-input:focus, .app-container.cold #city-input:focus {\n    border-color: #4a90e2;\n    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);\n}\n\n.app-container #search-btn, .app-container.cold #search-btn,\n.app-container #change-btn, .app-container.cold #change-btn {\n    padding: 12px 20px;\n    background-color: #4a90e2;\n    color: white;\n    border: none;\n    border-radius: 8px;\n    font-size: 1em;\n    cursor: pointer;\n    transition: background-color 0.3s ease, transform 0.2s ease;\n    font-weight: 500;\n}\n\n.app-container #search-btn:hover, .app-container.cold #search-btn:hover,\n.app-container #change-btn:hover, .app-container.cold #change-btn:hover {\n    background-color: #357abd;\n    transform: translateY(-1px);\n}\n\n.flex-div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 15px;\n}\n.app-container .weather-info-container, .app-container.cold .weather-info-container {\n    margin-top: 20px;\n    padding: 20px;\n    background-color: rgba(255, 255, 255, 0.75);\n    border-radius: 10px;\n    border: 1px solid #d0e0f0;\n}\n\n.app-container #city-name, .app-container.cold #city-name {\n    color: #004080;\n    font-size: 1.8em;\n    font-weight: bold;\n    margin-bottom: 10px;\n}\n\n.app-container #current-temp, .app-container.cold #current-temp {\n    font-size: 3.5em;\n    font-weight: bold;\n    color: #0059b3;\n    margin: 5px 0;\n}\n\n.app-container #current-condition, .app-container.cold #current-condition {\n    font-size: 1.2em;\n    color: #335c81;\n    margin-bottom: 15px;\n    text-transform: capitalize;\n}\n\n.app-container .temp-range, .app-container.cold .temp-range {\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n    font-size: 1.1em;\n    color: #204060;\n}\n\n.app-container .controls-container, .app-container.cold .controls-container {\n    margin-top: 25px;\n}\n\n/* Ajustes para o botão de toggle no tema frio (caso precise de alguma especificidade) */\n.app-container.cold #change-btn {\n    background-color: #5dade2; /* Um azul um pouco diferente */\n}\n.app-container.cold #change-btn:hover {\n    background-color: #4a90e2;\n}\n\n/* --- TEMA QUENTE (AVERMELHADO) --- */\n.app-container.warm {\n    background: linear-gradient(135deg, rgb(255, 240, 240) 0%, rgb(238, 116, 116) 100%);\n}\n\n.app-container.warm header h1 {\n    color: #b22222; /* Vermelho escuro (firebrick) */\n}\n\n.app-container.warm #city-input {\n    border-color: #f5c6cb; /* Rosa claro para borda */\n}\n\n.app-container.warm #city-input:focus {\n    border-color: #ee7474; /* Vermelho do seu degradê */\n    box-shadow: 0 0 0 3px rgba(238, 116, 116, 0.3);\n}\n\n.app-container.warm #search-btn,\n.app-container.warm #change-btn {\n    background-color: #e74c3c; /* Vermelho mais vibrante */\n    color: white;\n}\n\n.app-container.warm #search-btn:hover,\n.app-container.warm #change-btn:hover {\n    background-color: #c0392b; /* Vermelho mais escuro no hover */\n}\n\n.app-container.warm .weather-info-container {\n    background-color: rgba(255, 235, 230, 0.8); /* Fundo branco com leve tom rosado */\n    border-color: #f5c6cb; /* Rosa claro */\n}\n\n.app-container.warm #city-name {\n    color: #c0392b; /* Vermelho escuro */\n}\n\n.app-container.warm #current-temp {\n    font-size: 3.5em; /* Mantém o tamanho, muda a cor */\n    font-weight: bold;\n    color: #d9534f; /* Vermelho */\n    margin: 5px 0;\n}\n\n.app-container.warm #current-condition {\n    color: #a94442; /* Vermelho mais suave */\n    text-transform: capitalize;\n}\n\n.app-container.warm .temp-range {\n    color: #a94442; /* Vermelho mais suave */\n}\n\n.app-container.warm .controls-container {\n    margin-top: 25px;\n}\n\n\n/* Rodapé (geralmente fora do .app-container, então pode não ser afetado diretamente pelas classes .warm/.cold) */\nfooter {\n    margin-top: 30px;\n    color: #507090;\n    font-size: 0.9em;\n    text-align: center; /* Adicionado para garantir centralização do texto */\n}\n/* Se o footer estiver DENTRO do .app-container, você pode adicionar: */\n/*\n.app-container.warm footer p {\n    color: #a06060;\n}\n.app-container.cold footer p {\n    color: #507090;\n}\n*/\n\n\n/* Botão desabilitado (genérico para ambos os temas, se necessário) */\n.app-container #change-btn:disabled {\n    background-color: #cccccc;\n    border-color: #cccccc;\n    color: #666666;\n    cursor: not-allowed;\n    transform: none;\n}\n\n\n/* Ajustes para telas menores (mantidos) */\n@media (max-width: 600px) {\n    .app-container {\n        margin: 15px;\n        padding: 20px;\n    }\n\n    header h1, .app-container.cold header h1, .app-container.warm header h1 {\n        font-size: 1.8em;\n    }\n\n    .app-container .search-container, .app-container.cold .search-container, .app-container.warm .search-container {\n        flex-direction: column;\n    }\n\n    .app-container #city-input, .app-container.cold #city-input, .app-container.warm #city-input,\n    .app-container #search-btn, .app-container.cold #search-btn, .app-container.warm #search-btn,\n    .app-container #change-btn, .app-container.cold #change-btn, .app-container.warm #change-btn {\n        width: 100%;\n    }\n\n    .app-container #current-temp, .app-container.cold #current-temp, .app-container.warm #current-temp {\n        font-size: 2.8em;\n    }\n\n    .app-container #city-name, .app-container.cold #city-name, .app-container.warm #city-name {\n        font-size: 1.5em;\n    }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/moon.png":
/*!*****************************!*\
  !*** ./src/assets/moon.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4bbe2c885a570c8c1e36.png\";\n\n//# sourceURL=webpack:///./src/assets/moon.png?");

/***/ }),

/***/ "./src/assets/sun.png":
/*!****************************!*\
  !*** ./src/assets/sun.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"62ff243cd1281581d0d4.png\";\n\n//# sourceURL=webpack:///./src/assets/sun.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _assets_sun_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/sun.png */ \"./src/assets/sun.png\");\n/* harmony import */ var _assets_moon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/moon.png */ \"./src/assets/moon.png\");\n\n \n\n\n// --- VARIÁVEIS GLOBAIS PARA MANTER O ESTADO ---\nlet currentWeatherData = null; // Armazena os dados da API (sempre em Celsius)\nlet currentUnit = 'C';       // Unidade de exibição atual: 'C' ou 'F'\nlet lastCitySearched = 'Recife'; // Cidade padrão ou última pesquisada\n\n// --- FUNÇÃO PARA BUSCAR DADOS DA API (Sua versão, com a chave e tratamento de erro) ---\nasync function getWeatherData(city) {\n    const apiKey = 'XTZYBFUFSXQBJ3ZHED9CZ3BH5'; // Sua chave da API\n    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json`;\n\n\n\n    let alertWasShown = false;\n\n    try {\n        const response = await fetch(apiUrl, { mode: 'cors' });\n\n        if (!response.ok) {\n            let errorMessage = `Erro HTTP: ${response.status}`;\n            try {\n                const errorData = await response.json();\n                if (errorData && errorData.message) {\n                    errorMessage = errorData.message;\n                } else if (response.statusText) {\n                    errorMessage = response.statusText;\n                }\n\n                if (response.status === 400 && (errorMessage.includes(\"Invalid location\") || errorMessage.includes(\"Bad data\"))) {\n                    alert(`Cidade \"${city}\" não encontrada ou inválida. Verifique o nome e tente novamente.`);\n                    alertWasShown = true;\n                } else if (response.status === 401 || response.status === 403) {\n                    alert('Erro de autenticação com o serviço de clima. Verifique a sua chave da API.');\n                    alertWasShown = true;\n                }\n            } catch (e) {\n                console.warn(\"[getWeatherData] Não foi possível analisar a resposta de erro como JSON.\", e);\n                const errorText = await response.text().catch(() => \"Não foi possível ler o corpo do erro como texto.\");\n            }\n            console.error(`[getWeatherData] Falha ao buscar dados para \"${city}\". Status: ${response.status}, Mensagem: ${errorMessage}`);\n            if (!alertWasShown) {\n                alert(`Não foi possível obter os dados do clima para \"${city}\". Verifique o console para mais detalhes.`);\n            }\n            return null;\n        }\n        const data = await response.json();\n        // console.log('[getWeatherData] Sucesso! Dados JSON recebidos:', data);\n        return data;\n    } catch (error) {\n        console.error(\"[getWeatherData] Erro no bloco catch (ex: problema de rede):\", error);\n        alert(\"Ocorreu um erro de conexão ao tentar buscar os dados do clima. Verifique sua internet.\");\n        return null;\n    }\n}\n\n// --- FUNÇÃO UTILITÁRIA PARA CONVERTER TEMPERATURA ---\nfunction convertCelsiusToFahrenheit(tempCelsius) {\n    return (tempCelsius * 9/5) + 32;\n}\n\n// --- FUNÇÃO PARA ATUALIZAR O DOM COM OS DADOS E A UNIDADE CORRETA ---\nfunction renderWeatherDisplay() {\n    const changeBtn = document.getElementById('change-btn');\n\n    if (!currentWeatherData) {\n        document.getElementById('city-name').textContent = 'Busque por uma cidade';\n        document.getElementById('current-temp').textContent = '-';\n        document.getElementById('current-condition').textContent = '';\n        document.getElementById('high-temp').textContent = 'Máx: -';\n        document.getElementById('low-temp').textContent = 'Mín: -';\n        if (changeBtn) changeBtn.disabled = true; // Desabilita o botão se não há dados\n        return;\n    }\n\n    if (changeBtn) changeBtn.disabled = false; // Habilita o botão se há dados\n\n    const currentConditions = currentWeatherData.currentConditions;\n    const forecastToday = currentWeatherData.days && currentWeatherData.days[0];\n\n    if (!currentConditions || !forecastToday) {\n        console.error('Estrutura de dados do clima inválida em currentWeatherData.');\n        document.getElementById('city-name').textContent = `Erro ao processar dados para ${lastCitySearched}.`;\n        // Limpar outros campos...\n        return;\n    }\n\n    // As temperaturas em currentWeatherData.currentConditions.temp, etc., estão SEMPRE em Celsius\n    let displayTemp = parseFloat(currentConditions.temp);\n    let displayTempMax = parseFloat(forecastToday.tempmax);\n    let displayTempMin = parseFloat(forecastToday.tempmin);\n    let unitSymbol = '°C';\n\n    if (currentUnit === 'F') {\n        displayTemp = convertCelsiusToFahrenheit(displayTemp);\n        displayTempMax = convertCelsiusToFahrenheit(displayTempMax);\n        displayTempMin = convertCelsiusToFahrenheit(displayTempMin);\n        unitSymbol = '°F';\n    }\n    // Se currentUnit for 'C', não fazemos nada, pois os valores já estão corretos.\n\n    const round = (num) => Math.round(num * 10) / 10;\n\n    document.getElementById('city-name').textContent = currentWeatherData.resolvedAddress || lastCitySearched;\n    document.getElementById('current-temp').textContent = `${round(displayTemp)}${unitSymbol}`;\n    document.getElementById('current-condition').textContent = currentConditions.conditions;\n    document.getElementById('high-temp').textContent = `Máx: ${round(displayTempMax)}${unitSymbol}`;\n    document.getElementById('low-temp').textContent = `Mín: ${round(displayTempMin)}${unitSymbol}`;\n\n    changeTemperatureStyle(); // Chama a função para aplicar o estilo baseado na temperatura\n    updateToggleButtonText();\n}\n\n// --- FUNÇÃO PARA ATUALIZAR O TEXTO DO BOTÃO DE ALTERNÂNCIA DE UNIDADE ---\nfunction updateToggleButtonText() {\n    const toggleButton = document.getElementById('change-btn');\n    if (toggleButton) {\n        toggleButton.textContent = `Mudar para ${currentUnit === 'C' ? '°F' : '°C'}`;\n    }\n}\n\n// --- FUNÇÃO PRINCIPAL PARA BUSCAR NOVOS DADOS E INICIAR A EXIBIÇÃO ---\nasync function fetchAndDisplayWeather(city) {\n    lastCitySearched = city; // Atualiza a última cidade pesquisada\n\n    document.getElementById('city-name').textContent = `Carregando dados para ${city}...`;\n    document.getElementById('current-temp').textContent = '';\n    document.getElementById('current-condition').textContent = '';\n    document.getElementById('high-temp').textContent = '';\n    document.getElementById('low-temp').textContent = '';\n    const changeBtn = document.getElementById('change-btn');\n    if (changeBtn) changeBtn.disabled = true;\n\n    const dataFromAPI = await getWeatherData(city); // Busca os dados\n\n    if (dataFromAPI) {\n        currentWeatherData = dataFromAPI; // ARMAZENA os dados globalmente (em Celsius)\n        currentUnit = 'C';                // SEMPRE que novos dados são buscados, resetamos para Celsius\n        renderWeatherDisplay();           // Chama a função para exibir no DOM\n    } else {\n        // Se getWeatherData falhou, currentWeatherData pode já ser null ou podemos explicitamente\n        currentWeatherData = null; // Garante que está nulo se a busca falhar\n        renderWeatherDisplay(); // Chama render para limpar a tela ou mostrar msg de erro\n    }\n    // O botão será reabilitado dentro de renderWeatherDisplay se currentWeatherData for válido\n    \n}\n\n// --- FUNÇÃO PARA ALTERNAR A UNIDADE DE TEMPERATURA (NÃO BUSCA NOVOS DADOS) ---\nfunction toggleTemperatureUnit() {\n    if (!currentWeatherData) { // Só faz algo se já tivermos dados carregados\n        alert(\"Por favor, busque os dados de uma cidade primeiro.\");\n        return;\n    }\n\n    currentUnit = (currentUnit === 'C') ? 'F' : 'C';\n\n    renderWeatherDisplay();\n}\n\nasync function changeTemperatureStyle (){\n    const currentConditions = currentWeatherData.currentConditions;\n    const container = document.querySelector('.app-container');\n    const weatherIcon = document.querySelector('.weather-icon');\n    if(currentConditions.temp >= 20) {\n        weatherIcon.src = _assets_sun_png__WEBPACK_IMPORTED_MODULE_1__; \n        document.body.classList.add('warm');\n        container.classList.add('warm');\n        document.body.classList.remove('cold');\n        container.classList.remove('cold');\n    } else {\n        weatherIcon.src = _assets_moon_png__WEBPACK_IMPORTED_MODULE_2__;\n        document.body.classList.add('cold');\n        container.classList.add('cold');\n        document.body.classList.remove('warm');\n        container.classList.remove('warm');\n    }\n}\n\n// --- CONFIGURAÇÃO DOS EVENT LISTENERS QUANDO O DOM ESTIVER PRONTO ---\ndocument.addEventListener('DOMContentLoaded', () => {\n    const searchButton = document.getElementById('search-btn');\n    const cityInput = document.getElementById('city-input');\n    const changeUnitButton = document.getElementById('change-btn'); // Botão para alternar unidade\n\n    // Carrega dados da cidade padrão ao iniciar e atualiza o texto do botão\n    if (lastCitySearched) {\n        fetchAndDisplayWeather(lastCitySearched);\n    } else {\n        updateToggleButtonText(); // Garante que o texto do botão está correto mesmo sem dados\n        renderWeatherDisplay(); // Limpa a tela se não houver cidade padrão\n    }\n\n    if (searchButton && cityInput) {\n        searchButton.addEventListener('click', () => {\n            const city = cityInput.value.trim();\n            if (city) {\n                fetchAndDisplayWeather(city);\n            } else {\n                alert('Por favor, digite o nome de uma cidade.');\n            }\n        });\n\n        cityInput.addEventListener('keypress', (event) => {\n            if (event.key === 'Enter') {\n                event.preventDefault();\n                searchButton.click();\n            }\n        });\n    } else {\n        if (!searchButton) console.error(\"Elemento com id 'search-btn' não encontrado.\");\n        if (!cityInput) console.error(\"Elemento com id 'city-input' não encontrado.\");\n    }\n\n    if (changeUnitButton) {\n        changeUnitButton.addEventListener('click', toggleTemperatureUnit);\n    } else {\n        console.error(\"Elemento com id 'change-btn' não encontrado.\");\n    }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/styles.css?");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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