(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === "object" && typeof module === "object")
    module.exports = factory();
  else if (typeof define === "function" && define.amd) define([], factory);
  else if (typeof exports === "object")
    exports["ZM-COMP-QUES-RADIO"] = factory();
  else root["ZM-COMP-QUES-RADIO"] = factory();
})(window, function () {
  return /******/ (function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {};
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports;
        /******/
      }
      /******/ // Create a new module (and put it into the cache)
      /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {},
        /******/
      });
      /******/
      /******/ // Execute the module function
      /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      );
      /******/
      /******/ // Flag the module as loaded
      /******/ module.l = true;
      /******/
      /******/ // Return the exports of the module
      /******/ return module.exports;
      /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/ __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/ __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/ __webpack_require__.d = function (exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, {
          enumerable: true,
          get: getter,
        });
        /******/
      }
      /******/
    };
    /******/
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = function (exports) {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/ __webpack_require__.t = function (value, mode) {
      /******/ if (mode & 1) value = __webpack_require__(value);
      /******/ if (mode & 8) return value;
      /******/ if (
        mode & 4 &&
        typeof value === "object" &&
        value &&
        value.__esModule
      )
        return value;
      /******/ var ns = Object.create(null);
      /******/ __webpack_require__.r(ns);
      /******/ Object.defineProperty(ns, "default", {
        enumerable: true,
        value: value,
      });
      /******/ if (mode & 2 && typeof value != "string")
        for (var key in value)
          __webpack_require__.d(
            ns,
            key,
            function (key) {
              return value[key];
            }.bind(null, key)
          );
      /******/ return ns;
      /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = function (module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module["default"];
            }
          : /******/ function getModuleExports() {
              return module;
            };
      /******/ __webpack_require__.d(getter, "a", getter);
      /******/ return getter;
      /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/ __webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/ __webpack_require__.p = "";
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/ return __webpack_require__(
      (__webpack_require__.s = "./src/components/ques-radio/index.js")
    );
    /******/
  })(
    /************************************************************************/
    /******/ {
      /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ques-radio/src/ques-radio.vue?vue&type=script&lang=js&":
        /*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ques-radio/src/ques-radio.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_enums_eventName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/enums/eventName */ "./src/lib/enums/eventName.js");\n/* harmony import */ var _lib_enums_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/enums/name */ "./src/lib/enums/name.js");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__["default"] = ({\n  name: "QuesRadio",\n  props: {\n    questionId: {\n      type: Number,\n      default: null\n    },\n    questionType: {\n      type: Number,\n      default: null\n    },\n    questionNumber: {\n      type: Number,\n      default: null\n    },\n    questionTitle: {\n      type: String,\n      default: "请选择"\n    },\n    fillTip: {\n      type: String,\n      default: null\n    },\n    questionOptions: {\n      type: Array,\n      default: function _default() {\n        return [{\n          optionContent: "是",\n          manualFill: true,\n          answerHandwritten: null\n        }, {\n          optionContent: "否",\n          manualFill: false,\n          answerHandwritten: null\n        }];\n      }\n    },\n    random: {\n      type: Boolean,\n      default: false\n    },\n    required: {\n      type: Boolean,\n      default: true\n    }\n  },\n  data: function data() {\n    return {\n      activeValue: null\n    };\n  },\n  created: function created() {\n    var _this = this;\n\n    this.$msg && this.$msg.subscribe(_lib_enums_eventName__WEBPACK_IMPORTED_MODULE_0__["QUES_SUBMIT_EVENT"], function () {\n      var selectOption = _this.activeValue != null && _this.comOptionList[_this.activeValue];\n      var answerContent = selectOption && selectOption.optionContent;\n      var answerHandwritten = selectOption && selectOption.manualFill ? selectOption.answerHandwritten : null;\n\n      if (_this.required && (!answerContent || selectOption && selectOption.manualFill && !answerHandwritten)) {\n        _this.$msg.send({\n          msgName: _lib_enums_eventName__WEBPACK_IMPORTED_MODULE_0__["QUES_ERROR_EVENT"],\n          content: {\n            questionId: _this.questionId,\n            errorMsg: "\\u7B2C".concat(_this.questionNumber + 1, "\\u9898\\u672A\\u7B54\\uFF01")\n          }\n        });\n      } else if (answerContent) {\n        _this.$msg.send({\n          msgName: _lib_enums_eventName__WEBPACK_IMPORTED_MODULE_0__["QUES_SUCCESS_EVENT"],\n          content: {\n            questionId: _this.questionId,\n            questionType: _this.questionType,\n            answerContent: answerContent,\n            answerHandwritten: answerHandwritten\n          }\n        });\n      }\n    });\n  },\n  computed: {\n    comOptionList: function comOptionList() {\n      var arr = this.questionOptions.map(function (i) {\n        return i;\n      });\n      return this.random ? arr.sort(function () {\n        return Math.random() - 0.5;\n      }) : arr;\n    },\n    quesId: function quesId() {\n      return _lib_enums_name__WEBPACK_IMPORTED_MODULE_1__["QuesDomPreId"] + this.questionId;\n    }\n  },\n  methods: {\n    chose: function chose(index) {\n      if (this.activeValue === index) return;\n      this.activeValue = index;\n      this.$msg.send({\n        msgName: _lib_enums_eventName__WEBPACK_IMPORTED_MODULE_0__["QUES_CHENGE_EVENT"],\n        content: {\n          questionId: this.questionId,\n          optionid: this.comOptionList[index] && this.comOptionList[index].optionid\n        }\n      });\n      this.comOptionList.forEach(function (i) {\n        return i.answerHandwritten = null;\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack://ZM-COMP-QUES-RADIO/./src/components/ques-radio/src/ques-radio.vue?./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options'
          );

          /***/
        },

      /***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/ques-radio/src/ques-radio.vue?vue&type=style&index=0&id=11253bcc&lang=scss&scoped=true&":
        /*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ques-radio/src/ques-radio.vue?vue&type=style&index=0&id=11253bcc&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
        /*! no static exports found */
        /***/ function (module, exports, __webpack_require__) {
          eval(
            '// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, ".icon-important[data-v-11253bcc] {\\n  display: inline-block;\\n  width: 0.32rem;\\n  color: #e81e43;\\n}\\n.radio-content[data-v-11253bcc] {\\n  background: #fff;\\n  border-radius: 0.2666666667rem;\\n  margin-bottom: 0.2666666667rem;\\n  -webkit-box-sizing: border-box;\\n          box-sizing: border-box;\\n  padding: 0.2666666667rem 0.2666666667rem 0;\\n  font-size: 0.4266666667rem;\\n}\\n.radio-content .radio-title[data-v-11253bcc] {\\n  line-height: 2;\\n  font-weight: bold;\\n}\\n.radio-content .radio-fillTip[data-v-11253bcc] {\\n  margin: 0.1333333333rem 0 0 0.32rem;\\n  line-height: 1.2;\\n  font-size: 0.32rem;\\n  color: #999;\\n}\\n.radio-content .radio-box[data-v-11253bcc] {\\n  margin-top: 0.2666666667rem;\\n  border-radius: 4px;\\n}\\n.radio-content .radio-box .radio-item[data-v-11253bcc] {\\n  width: 9.4133333333rem;\\n  color: #333;\\n}\\n.radio-content .radio-box .radio-item[data-v-11253bcc]:nth-of-type(1) {\\n  border-top: none;\\n}\\n.radio-content .radio-box .radio-item .radio-item-box[data-v-11253bcc] {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  min-height: 1.0666666667rem;\\n}\\n.radio-content .radio-box .radio-item .radio-item-box .radio-icon[data-v-11253bcc] {\\n  position: relative;\\n  height: 0.5333333333rem;\\n  width: 0.5333333333rem;\\n  -webkit-box-sizing: border-box;\\n          box-sizing: border-box;\\n  margin: 0.4266666667rem 0.2666666667rem;\\n  border: 1px solid #bcbbbb;\\n  border-radius: 50%;\\n  background-color: #ffffff;\\n}\\n.radio-content .radio-box .radio-item .radio-item-box .radio-icon.active[data-v-11253bcc]::after {\\n  content: \\"\\";\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  -webkit-transform: translate3d(-50%, -50%, 0);\\n          transform: translate3d(-50%, -50%, 0);\\n  display: block;\\n  width: 0.2666666667rem;\\n  height: 0.2666666667rem;\\n  border-radius: 50%;\\n  background: #f32735;\\n}\\n.radio-content .radio-box .radio-item .radio-item-box .radio-optionContent[data-v-11253bcc] {\\n  width: 8.5333333333rem;\\n  line-height: 0.5333333333rem;\\n  padding: 0.2133333333rem 0;\\n  color: #666;\\n}\\n.radio-content .radio-box .radio-item .radio-text-box[data-v-11253bcc] {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  height: 0.8rem;\\n  width: 9.0666666667rem;\\n  margin: 0.1333333333rem 0 0.5333333333rem;\\n}\\n.radio-content .radio-box .radio-item .radio-text-box .icon-important[data-v-11253bcc] {\\n  height: 0.8rem;\\n  width: 0.8rem;\\n  line-height: 0.8rem;\\n  text-align: center;\\n}\\n.radio-content .radio-box .radio-item .radio-text-box .radio-text[data-v-11253bcc] {\\n  height: 100%;\\n  width: 8.2666666667rem;\\n  border: 1px solid #bcbbbb;\\n  border-radius: 0.0533333333rem;\\n  font-size: 0.4266666667rem;\\n  text-indent: 0.2666666667rem;\\n}", ""]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://ZM-COMP-QUES-RADIO/./src/components/ques-radio/src/ques-radio.vue?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options'
          );

          /***/
        },

      /***/ "./node_modules/css-loader/dist/runtime/api.js":
        /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
        /*! no static exports found */
        /***/ function (module, exports, __webpack_require__) {
          "use strict";
          eval(
            '\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return "@media ".concat(item[2], " {").concat(content, "}");\n      }\n\n      return content;\n    }).join(\'\');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === \'string\') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \'\']];\n    }\n\n    for (var i = 0; i < modules.length; i++) {\n      var item = [].concat(modules[i]);\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || \'\'; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === \'function\') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return "/*# sourceURL=".concat(cssMapping.sourceRoot || \'\').concat(source, " */");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join(\'\\n\');\n  }\n\n  return [content].join(\'\\n\');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);\n  return "/*# ".concat(data, " */");\n}\n\n//# sourceURL=webpack://ZM-COMP-QUES-RADIO/./node_modules/css-loader/dist/runtime/api.js?'
          );

          /***/
        },

      /***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/ques-radio/src/ques-radio.vue?vue&type=style&index=0&id=11253bcc&lang=scss&scoped=true&":
        /*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ques-radio/src/ques-radio.vue?vue&type=style&index=0&id=11253bcc&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
        /*! no static exports found */
        /***/ function (module, exports, __webpack_require__) {
          eval(
            'var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./ques-radio.vue?vue&type=style&index=0&id=11253bcc&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/ques-radio/src/ques-radio.vue?vue&type=style&index=0&id=11253bcc&lang=scss&scoped=true&");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === \'string\') {\n              content = [[module.i, content, \'\']];\n            }\n\nvar options = {};\n\noptions.insert = "head";\noptions.singleton = false;\n\nvar update = api(module.i, content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack://ZM-COMP-QUES-RADIO/./src/components/ques-radio/src/ques-radio.vue?./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options'
          );

          /***/
        },

      /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
        /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
        /*! no static exports found */
        /***/ function (module, exports, __webpack_require__) {
          "use strict";
          eval(
            "\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = {};\n\nfunction modulesToDom(moduleId, list, options) {\n  for (var i = 0; i < list.length; i++) {\n    var part = {\n      css: list[i][1],\n      media: list[i][2],\n      sourceMap: list[i][3]\n    };\n\n    if (stylesInDom[moduleId][i]) {\n      stylesInDom[moduleId][i](part);\n    } else {\n      stylesInDom[moduleId].push(addStyle(part, options));\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (moduleId, list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  moduleId = options.base ? moduleId + options.base : moduleId;\n  list = list || [];\n\n  if (!stylesInDom[moduleId]) {\n    stylesInDom[moduleId] = [];\n  }\n\n  modulesToDom(moduleId, list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    if (!stylesInDom[moduleId]) {\n      stylesInDom[moduleId] = [];\n    }\n\n    modulesToDom(moduleId, newList, options);\n\n    for (var j = newList.length; j < stylesInDom[moduleId].length; j++) {\n      stylesInDom[moduleId][j]();\n    }\n\n    stylesInDom[moduleId].length = newList.length;\n\n    if (stylesInDom[moduleId].length === 0) {\n      delete stylesInDom[moduleId];\n    }\n  };\n};\n\n//# sourceURL=webpack://ZM-COMP-QUES-RADIO/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?"
          );

          /***/
        },

      /***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ques-radio/src/ques-radio.vue?vue&type=template&id=11253bcc&scoped=true&":
        /*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ques-radio/src/ques-radio.vue?vue&type=template&id=11253bcc&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
        /*! exports provided: render, staticRenderFns */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    "div",\n    { staticClass: "radio-content", attrs: { id: _vm.quesId } },\n    [\n      _c("p", { staticClass: "radio-title" }, [\n        _c("i", { staticClass: "icon-important" }, [\n          _vm._v(_vm._s(_vm.required ? "*" : ""))\n        ]),\n        _vm._v(\n          "\\n        " +\n            _vm._s(\n              _vm.questionNumber == null ? "" : _vm.questionNumber + 1 + "."\n            ) +\n            _vm._s(_vm.questionTitle) +\n            "\\n    "\n        )\n      ]),\n      _vm._v(" "),\n      _vm.fillTip && _vm.fillTip.length > 0\n        ? _c("p", { staticClass: "radio-fillTip" }, [\n            _vm._v(_vm._s(_vm.fillTip))\n          ])\n        : _vm._e(),\n      _vm._v(" "),\n      _vm.comOptionList && _vm.comOptionList.length > 0\n        ? _c(\n            "div",\n            { staticClass: "radio-box" },\n            _vm._l(_vm.comOptionList, function(item, index) {\n              return _c(\n                "div",\n                {\n                  key: index,\n                  staticClass: "radio-item",\n                  on: {\n                    click: function($event) {\n                      return _vm.chose(index)\n                    }\n                  }\n                },\n                [\n                  _c("div", { staticClass: "radio-item-box" }, [\n                    _c("span", {\n                      staticClass: "radio-icon",\n                      class: { active: _vm.activeValue === index }\n                    }),\n                    _vm._v(" "),\n                    _c("span", { staticClass: "radio-optionContent" }, [\n                      _vm._v(_vm._s(item.optionContent))\n                    ])\n                  ]),\n                  _vm._v(" "),\n                  item.manualFill\n                    ? _c("div", { staticClass: "radio-text-box" }, [\n                        _c("i", { staticClass: "icon-important" }, [\n                          _vm._v("*")\n                        ]),\n                        _vm._v(" "),\n                        _c("input", {\n                          directives: [\n                            {\n                              name: "model",\n                              rawName: "v-model",\n                              value: item.answerHandwritten,\n                              expression: "item.answerHandwritten"\n                            }\n                          ],\n                          staticClass: "radio-text",\n                          attrs: { maxlength: "50" },\n                          domProps: { value: item.answerHandwritten },\n                          on: {\n                            input: function($event) {\n                              if ($event.target.composing) {\n                                return\n                              }\n                              _vm.$set(\n                                item,\n                                "answerHandwritten",\n                                $event.target.value\n                              )\n                            }\n                          }\n                        })\n                      ])\n                    : _vm._e()\n                ]\n              )\n            }),\n            0\n          )\n        : _vm._e()\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://ZM-COMP-QUES-RADIO/./src/components/ques-radio/src/ques-radio.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options'
          );

          /***/
        },

      /***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
        /*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functioal component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack://ZM-COMP-QUES-RADIO/./node_modules/vue-loader/lib/runtime/componentNormalizer.js?"
          );

          /***/
        },

      /***/ "./src/components/ques-radio/index.js":
        /*!********************************************!*\
  !*** ./src/components/ques-radio/index.js ***!
  \********************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_ques_radio_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/ques-radio.vue */ \"./src/components/ques-radio/src/ques-radio.vue\");\n\n_src_ques_radio_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].version = '1.0.0';\n_src_ques_radio_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pickers = [{\n  pickerName: 'TextPicker',\n  prop: 'questionTitle',\n  title: '题目',\n  placeholder: '请填写题目',\n  rows: 2,\n  limit: 500\n}, {\n  pickerName: 'TextPicker',\n  prop: 'fillTip',\n  title: '填写提示',\n  placeholder: '填写提示',\n  rows: 2,\n  limit: 500\n}, {\n  pickerName: 'OptionListPicker',\n  prop: 'questionOptions',\n  title: '选项设置'\n}, {\n  pickerName: 'SwitchPicker',\n  prop: 'random',\n  title: '选项随机乱序',\n  inactive: '否',\n  active: '是'\n}, {\n  pickerName: 'SwitchPicker',\n  prop: 'required',\n  title: '填写校验',\n  inactive: '非必填',\n  active: '必填'\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (_src_ques_radio_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://ZM-COMP-QUES-RADIO/./src/components/ques-radio/index.js?"
          );

          /***/
        },

      /***/ "./src/components/ques-radio/src/ques-radio.vue":
        /*!******************************************************!*\
  !*** ./src/components/ques-radio/src/ques-radio.vue ***!
  \******************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ques_radio_vue_vue_type_template_id_11253bcc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ques-radio.vue?vue&type=template&id=11253bcc&scoped=true& */ "./src/components/ques-radio/src/ques-radio.vue?vue&type=template&id=11253bcc&scoped=true&");\n/* harmony import */ var _ques_radio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ques-radio.vue?vue&type=script&lang=js& */ "./src/components/ques-radio/src/ques-radio.vue?vue&type=script&lang=js&");\n/* empty/unused harmony star reexport *//* harmony import */ var _ques_radio_vue_vue_type_style_index_0_id_11253bcc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ques-radio.vue?vue&type=style&index=0&id=11253bcc&lang=scss&scoped=true& */ "./src/components/ques-radio/src/ques-radio.vue?vue&type=style&index=0&id=11253bcc&lang=scss&scoped=true&");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(\n  _ques_radio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],\n  _ques_radio_vue_vue_type_template_id_11253bcc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],\n  _ques_radio_vue_vue_type_template_id_11253bcc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],\n  false,\n  null,\n  "11253bcc",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = "src/components/ques-radio/src/ques-radio.vue"\n/* harmony default export */ __webpack_exports__["default"] = (component.exports);\n\n//# sourceURL=webpack://ZM-COMP-QUES-RADIO/./src/components/ques-radio/src/ques-radio.vue?'
          );

          /***/
        },

      /***/ "./src/components/ques-radio/src/ques-radio.vue?vue&type=script&lang=js&":
        /*!*******************************************************************************!*\
  !*** ./src/components/ques-radio/src/ques-radio.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ques_radio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ques-radio.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ques-radio/src/ques-radio.vue?vue&type=script&lang=js&");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ques_radio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); \n\n//# sourceURL=webpack://ZM-COMP-QUES-RADIO/./src/components/ques-radio/src/ques-radio.vue?'
          );

          /***/
        },

      /***/ "./src/components/ques-radio/src/ques-radio.vue?vue&type=style&index=0&id=11253bcc&lang=scss&scoped=true&":
        /*!****************************************************************************************************************!*\
  !*** ./src/components/ques-radio/src/ques-radio.vue?vue&type=style&index=0&id=11253bcc&lang=scss&scoped=true& ***!
  \****************************************************************************************************************/
        /*! no static exports found */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ques_radio_vue_vue_type_style_index_0_id_11253bcc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./ques-radio.vue?vue&type=style&index=0&id=11253bcc&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/ques-radio/src/ques-radio.vue?vue&type=style&index=0&id=11253bcc&lang=scss&scoped=true&");\n/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ques_radio_vue_vue_type_style_index_0_id_11253bcc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ques_radio_vue_vue_type_style_index_0_id_11253bcc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ques_radio_vue_vue_type_style_index_0_id_11253bcc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \'default\') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ques_radio_vue_vue_type_style_index_0_id_11253bcc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ques_radio_vue_vue_type_style_index_0_id_11253bcc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack://ZM-COMP-QUES-RADIO/./src/components/ques-radio/src/ques-radio.vue?'
          );

          /***/
        },

      /***/ "./src/components/ques-radio/src/ques-radio.vue?vue&type=template&id=11253bcc&scoped=true&":
        /*!*************************************************************************************************!*\
  !*** ./src/components/ques-radio/src/ques-radio.vue?vue&type=template&id=11253bcc&scoped=true& ***!
  \*************************************************************************************************/
        /*! exports provided: render, staticRenderFns */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ques_radio_vue_vue_type_template_id_11253bcc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ques-radio.vue?vue&type=template&id=11253bcc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ques-radio/src/ques-radio.vue?vue&type=template&id=11253bcc&scoped=true&");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ques_radio_vue_vue_type_template_id_11253bcc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ques_radio_vue_vue_type_template_id_11253bcc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });\n\n\n\n//# sourceURL=webpack://ZM-COMP-QUES-RADIO/./src/components/ques-radio/src/ques-radio.vue?'
          );

          /***/
        },

      /***/ "./src/lib/enums/eventName.js":
        /*!************************************!*\
  !*** ./src/lib/enums/eventName.js ***!
  \************************************/
        /*! exports provided: ZM_JSSDK_EVENT, BAIDU_SDK_EVENT, OPE_XCX_H5_EVENTID, QUES_SUBMIT_EVENT, SEND_QUES_ANSWER_EVENT, QUES_SUCCESS_EVENT, QUES_ERROR_EVENT, QUES_SUBMIT_SUCCESS, QUES_SUBMIT_FAIL, QUES_CHENGE_EVENT, TOAST_EVENT, REFERRAL_EVENT */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ZM_JSSDK_EVENT\", function() { return ZM_JSSDK_EVENT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BAIDU_SDK_EVENT\", function() { return BAIDU_SDK_EVENT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OPE_XCX_H5_EVENTID\", function() { return OPE_XCX_H5_EVENTID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QUES_SUBMIT_EVENT\", function() { return QUES_SUBMIT_EVENT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SEND_QUES_ANSWER_EVENT\", function() { return SEND_QUES_ANSWER_EVENT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QUES_SUCCESS_EVENT\", function() { return QUES_SUCCESS_EVENT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QUES_ERROR_EVENT\", function() { return QUES_ERROR_EVENT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QUES_SUBMIT_SUCCESS\", function() { return QUES_SUBMIT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QUES_SUBMIT_FAIL\", function() { return QUES_SUBMIT_FAIL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QUES_CHENGE_EVENT\", function() { return QUES_CHENGE_EVENT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TOAST_EVENT\", function() { return TOAST_EVENT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REFERRAL_EVENT\", function() { return REFERRAL_EVENT; });\nvar ZM_JSSDK_EVENT = 'ZM_JSSDK_EVENT';\nvar BAIDU_SDK_EVENT = 'BAIDU_SDK_EVENT';\nvar OPE_XCX_H5_EVENTID = 'OPE_XCX_H5_EVENTID';\nvar QUES_SUBMIT_EVENT = 'QUES_SUBMIT_EVENT';\nvar SEND_QUES_ANSWER_EVENT = 'SEND_QUES_ANSWER_EVENT';\nvar QUES_SUCCESS_EVENT = 'QUES_SUCCESS_EVENT';\nvar QUES_ERROR_EVENT = 'QUES_ERROR_EVENT';\nvar QUES_SUBMIT_SUCCESS = 'QUES_SUBMIT_SUCCESS';\nvar QUES_SUBMIT_FAIL = 'QUES_SUBMIT_FAIL';\nvar QUES_CHENGE_EVENT = 'QUES_CHENGE_EVENT'; // export const SUBMIT_RESULT_EVENT = 'SUBMIT_RESULT_EVENT'\n\nvar TOAST_EVENT = 'TOAST_EVENT'; // 转介绍埋点事件\n\nvar REFERRAL_EVENT = {\n  CLICK_SUBMIT_FORM: 'Click_referral_submit_Form',\n  HOMEPAGE_SIGNUP_SUCCESS: 'referral_homepage_Signup_success',\n  HOMEPAGE_SIGNUP_FAIL: 'referral_homepage_Signup_fail',\n  POPUPCODE_SUBMIT: 'enter_referral_popupcode_submit',\n  ONE_V_ONE_RECOMMENDER_ENTER: '1v1-recommender-enter',\n  ONE_V_ONE_RECOMMENDER_SUBMIT_CLICK: '1v1-recommender-submit-click'\n};\n\n//# sourceURL=webpack://ZM-COMP-QUES-RADIO/./src/lib/enums/eventName.js?"
          );

          /***/
        },

      /***/ "./src/lib/enums/name.js":
        /*!*******************************!*\
  !*** ./src/lib/enums/name.js ***!
  \*******************************/
        /*! exports provided: EngineName, ShareApiName, CompPrefName, CompDomPreId, QuesDomPreId, AppRootDomId, LifeCycleMap, ComponentTypeName, QuesComponentTypeName, BizType, ActionTypes, NodeTypes */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EngineName\", function() { return EngineName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ShareApiName\", function() { return ShareApiName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CompPrefName\", function() { return CompPrefName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CompDomPreId\", function() { return CompDomPreId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QuesDomPreId\", function() { return QuesDomPreId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppRootDomId\", function() { return AppRootDomId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LifeCycleMap\", function() { return LifeCycleMap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ComponentTypeName\", function() { return ComponentTypeName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QuesComponentTypeName\", function() { return QuesComponentTypeName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BizType\", function() { return BizType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ActionTypes\", function() { return ActionTypes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NodeTypes\", function() { return NodeTypes; });\nvar EngineName = 'ZM_RENDER_ENGINE';\nvar ShareApiName = 'ZM_WX_SHARE_INIT'; // export const EngineInstance = 'ZM_RENDER_INSTANCE'\n\nvar CompPrefName = 'ZM-COMP-';\nvar CompDomPreId = 'ZM_COMP_SEQUENCE_';\nvar QuesDomPreId = 'ZM_QUES_COMP_';\nvar AppRootDomId = 'APP';\nvar LifeCycleMap = {\n  BeforeFetch: 'beforeFetch',\n  Fetched: 'fetched',\n  BeforeMount: 'beforeMount',\n  Mounted: 'mounted'\n};\nvar ComponentTypeName = {\n  1: {\n    id: 1,\n    txt: 'web组件'\n  },\n  2: {\n    id: 2,\n    txt: '业务组件'\n  },\n  3: {\n    id: 3,\n    txt: '活动组件'\n  },\n  4: {\n    id: 4,\n    txt: 'Html片段组件'\n  },\n  5: {\n    id: 5,\n    txt: '问答题组件'\n  }\n};\nvar QuesComponentTypeName = {\n  1: {\n    id: 1,\n    txt: '单选组件'\n  },\n  2: {\n    id: 2,\n    txt: '多选组件'\n  },\n  3: {\n    id: 3,\n    txt: '单下拉框组件'\n  },\n  4: {\n    id: 4,\n    txt: '问答题组件'\n  },\n  5: {\n    id: 5,\n    txt: 'NPS组件'\n  },\n  6: {\n    id: 6,\n    txt: 'NPS矩阵组件'\n  },\n  7: {\n    id: 7,\n    txt: '地址组件'\n  },\n  8: {\n    id: 8,\n    txt: '提交按钮组件'\n  },\n  9: {\n    id: 9,\n    txt: '评分组件'\n  },\n  10: {\n    id: 10,\n    txt: '评分矩阵组件'\n  }\n};\nvar BizType = {\n  COMMON: null,\n  REFERRAL: 1\n};\nvar ActionTypes = {\n  INIT: 'init',\n  // 初始化\n  SELECT: 'select',\n  // 选择组件\n  MOVE: 'move',\n  // 移动组件\n  REMOVE: 'remove',\n  // 删除组件\n  ADD: 'add',\n  // 添加组件\n  UPDATECOMPONENTPROP: 'updateProp',\n  // 更新组件 prop\n  BULKUPDATECOMPONENTPROP: 'bulkUpdateProp',\n  // 批量更新组件 prop\n  UPDATECOMPONENTLAYOUT: 'updateLayout',\n  // 更新组件布局\n  UPDATEPAGELAYOUT: 'updatePageLayout',\n  // 更新页面布局\n\n  /****** 以下事件为子窗口向父窗口发送，没有回调消息事件 ******/\n  UPDATESIZE: 'updateSize' // 更新（页面or当前选择组件）变动高度\n\n}; // 节点类型\n\nvar NodeTypes = {\n  ELEMENT_NODE: 1,\n  TEXT_NODE: 3,\n  CDATA_SECTION_NODE: 4,\n  PROCESSING_INSTRUCTION_NODE: 7,\n  COMMENT_NODE: 8,\n  DOCUMENT_NODE: 9,\n  DOCUMENT_TYPE_NODE: 10,\n  DOCUMENT_FRAGMENT_NODE: 11\n};\n\n//# sourceURL=webpack://ZM-COMP-QUES-RADIO/./src/lib/enums/name.js?"
          );

          /***/
        },

      /******/
    }
  );
});
