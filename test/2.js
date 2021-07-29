(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === "object" && typeof module === "object")
    module.exports = factory();
  else if (typeof define === "function" && define.amd) define([], factory);
  else if (typeof exports === "object") exports["ZM-COMP-BANNER"] = factory();
  else root["ZM-COMP-BANNER"] = factory();
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
      (__webpack_require__.s = "./src/components/banner/index.js")
    );
    /******/
  })(
    /************************************************************************/
    /******/ {
      /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/banner/src/index.vue?vue&type=script&lang=js&":
        /*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/banner/src/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_dom_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/dom/style */ "./src/components/banner/src/utils/dom/style.js");\n/* harmony import */ var _utils_dom_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/dom/event */ "./src/components/banner/src/utils/dom/event.js");\n/* harmony import */ var _utils_dom_raf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/dom/raf */ "./src/components/banner/src/utils/dom/raf.js");\n/* harmony import */ var _utils_format_number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/format/number */ "./src/components/banner/src/utils/format/number.js");\n/* harmony import */ var _mixins_bind_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mixins/bind-event */ "./src/components/banner/src/mixins/bind-event.js");\n/* harmony import */ var _item_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item.vue */ "./src/components/banner/src/item.vue");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// Utils\n\n\n\n // Mixins\n\n\n // components\n\n\nvar MIN_DISTANCE = 10;\n\nfunction getDirection(x, y) {\n  if (x > y && x > MIN_DISTANCE) {\n    return \'horizontal\';\n  }\n\n  if (y > x && y > MIN_DISTANCE) {\n    return \'vertical\';\n  }\n\n  return \'\';\n}\n\n/* harmony default export */ __webpack_exports__["default"] = ({\n  name: "banner",\n  mixins: [Object(_mixins_bind_event__WEBPACK_IMPORTED_MODULE_4__["BindEventMixin"])(function (bind, isBind) {\n    bind(window, \'resize\', this.resize, true);\n    bind(window, \'visibilitychange\', this.onVisibilityChange);\n\n    if (isBind) {\n      this.initialize();\n    } else {\n      this.clear();\n    }\n  })],\n  components: {\n    Item: _item_vue__WEBPACK_IMPORTED_MODULE_5__["default"]\n  },\n  props: {\n    imageList: {\n      type: Array,\n      default: function _default() {\n        return [];\n      }\n    },\n    width: {\n      type: [Number, String],\n      default: 375\n    },\n    //height: {\n    //    type: [Number, String],\n    //    default: 211,\n    //},\n    autoplay: {\n      type: [Number, String],\n      default: 3000\n    },\n    vertical: Boolean,\n    indicatorColor: {\n      type: [Number, String],\n      default: \'\'\n    },\n    loop: {\n      type: Boolean,\n      default: true\n    },\n    duration: {\n      type: [Number, String],\n      default: 500\n    },\n    touchable: {\n      type: Boolean,\n      default: true\n    },\n    initialSwipe: {\n      type: [Number, String],\n      default: 0\n    },\n    showIndicators: {\n      type: Boolean,\n      default: true\n    },\n    stopPropagation: {\n      type: Boolean,\n      default: true\n    }\n  },\n  data: function data() {\n    return {\n      computedWidth: 0,\n      computedHeight: 0,\n      offset: 0,\n      active: 0,\n      deltaX: 0,\n      deltaY: 0,\n      swipes: [],\n      swiping: false,\n      list: [],\n      direction: \'\',\n      imageHeightArr: [],\n      height: 211\n    };\n  },\n  watch: {\n    imageList: {\n      handler: function handler(val) {\n        if (val && val.length >= 0) {\n          this.list = val;\n          this.imageHeightArr = [];\n          this.getImageMaxHeight();\n        }\n      },\n      immediate: true\n    },\n    swipes: function swipes() {\n      this.initialize();\n    },\n    initialSwipe: function initialSwipe() {\n      this.initialize();\n    },\n    autoplay: function autoplay(_autoplay) {\n      if (_autoplay > 0) {//this.autoPlay();\n      } else {\n        this.clear();\n      }\n    }\n  },\n  computed: {\n    count: function count() {\n      return this.swipes.length;\n    },\n    delta: function delta() {\n      return this.vertical ? this.deltaY : this.deltaX;\n    },\n    size: function size() {\n      return this[this.vertical ? \'computedHeight\' : \'computedWidth\'];\n    },\n    trackSize: function trackSize() {\n      return this.count * this.size;\n    },\n    activeIndicator: function activeIndicator() {\n      return (this.active + this.count) % this.count;\n    },\n    isCorrectDirection: function isCorrectDirection() {\n      var expect = this.vertical ? \'vertical\' : \'horizontal\';\n      return this.direction === expect;\n    },\n    trackStyle: function trackStyle() {\n      var _ref;\n\n      var mainAxis = this.vertical ? \'height\' : \'width\';\n      var crossAxis = this.vertical ? \'width\' : \'height\';\n      return _ref = {}, _defineProperty(_ref, mainAxis, "".concat(this.trackSize / 37.5, "rem")), _defineProperty(_ref, crossAxis, this[crossAxis] ? "".concat(this[crossAxis] / 37.5, "rem") : \'\'), _defineProperty(_ref, "transitionDuration", "".concat(this.swiping ? 0 : this.duration, "ms")), _defineProperty(_ref, "transform", "translate".concat(this.vertical ? \'Y\' : \'X\', "(").concat(this.offset / 37.5, "rem)")), _ref;\n    },\n    indicatorStyle: function indicatorStyle() {\n      return {\n        backgroundColor: this.indicatorColor\n      };\n    },\n    minOffset: function minOffset() {\n      var rect = this.$el.getBoundingClientRect();\n      return (this.vertical ? rect.height : rect.width) - this.size * this.count;\n    }\n  },\n  mounted: function mounted() {\n    this.bindTouchEvent(this.$refs.track);\n  },\n  methods: {\n    // initialize swipe position\n    initialize: function initialize() {\n      var active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : +this.initialSwipe;\n      clearTimeout(this.timer);\n\n      if (this.$el && !Object(_utils_dom_style__WEBPACK_IMPORTED_MODULE_0__["isHidden"])(this.$el)) {\n        var rect = this.$el.getBoundingClientRect();\n        this.computedWidth = Math.round(+this.width || rect.width);\n        this.computedHeight = Math.round(+this.height || rect.height);\n      }\n\n      this.swiping = true;\n      this.active = active;\n      this.offset = this.count > 1 ? -this.size * this.active : 0;\n      this.swipes.forEach(function (swipe) {\n        swipe.offset = 0;\n      });\n      this.autoPlay();\n    },\n    // @exposed-api\n    resize: function resize() {\n      this.initialize(this.activeIndicator);\n    },\n    onVisibilityChange: function onVisibilityChange() {\n      if (document.hidden) {\n        this.clear();\n      } else {\n        this.autoPlay();\n      }\n    },\n    onTouchStart: function onTouchStart(event) {\n      if (!this.touchable) return;\n      this.clear();\n      this.touchStart(event);\n      this.correctPosition();\n    },\n    onTouchMove: function onTouchMove(event) {\n      if (!this.touchable || !this.swiping) return;\n      this.touchMove(event);\n\n      if (this.isCorrectDirection) {\n        Object(_utils_dom_event__WEBPACK_IMPORTED_MODULE_1__["preventDefault"])(event, this.stopPropagation);\n        this.move({\n          offset: this.delta\n        });\n      }\n    },\n    onTouchEnd: function onTouchEnd() {\n      if (!this.touchable || !this.swiping) return;\n\n      if (this.delta && this.isCorrectDirection) {\n        var offset = this.vertical ? this.offsetY : this.offsetX;\n        this.move({\n          pace: offset > 0 ? this.delta > 0 ? -1 : 1 : 0,\n          emitChange: true\n        });\n      }\n\n      this.swiping = false;\n      this.autoPlay();\n    },\n    getTargetActive: function getTargetActive(pace) {\n      var active = this.active,\n          count = this.count;\n\n      if (pace) {\n        if (this.loop) {\n          return Object(_utils_format_number__WEBPACK_IMPORTED_MODULE_3__["range"])(active + pace, -1, count);\n        }\n\n        return Object(_utils_format_number__WEBPACK_IMPORTED_MODULE_3__["range"])(active + pace, 0, count - 1);\n      }\n\n      return active;\n    },\n    getTargetOffset: function getTargetOffset(targetActive, offset) {\n      var currentPosition = targetActive * this.size;\n\n      if (!this.loop) {\n        currentPosition = Math.min(currentPosition, -this.minOffset);\n      }\n\n      var targetOffset = Math.round(offset - currentPosition);\n\n      if (!this.loop) {\n        targetOffset = Object(_utils_format_number__WEBPACK_IMPORTED_MODULE_3__["range"])(targetOffset, this.minOffset, 0);\n      }\n\n      return targetOffset;\n    },\n    move: function move(_ref2) {\n      var _ref2$pace = _ref2.pace,\n          pace = _ref2$pace === void 0 ? 0 : _ref2$pace,\n          _ref2$offset = _ref2.offset,\n          offset = _ref2$offset === void 0 ? 0 : _ref2$offset,\n          emitChange = _ref2.emitChange;\n      var loop = this.loop,\n          count = this.count,\n          active = this.active,\n          swipes = this.swipes,\n          trackSize = this.trackSize,\n          minOffset = this.minOffset;\n\n      if (count <= 1) {\n        return;\n      }\n\n      var targetActive = this.getTargetActive(pace);\n      var targetOffset = this.getTargetOffset(targetActive, offset); // auto move first and last swipe in loop mode\n\n      if (loop) {\n        if (swipes[0]) {\n          var outRightBound = targetOffset < minOffset;\n          swipes[0].offset = outRightBound ? trackSize : 0;\n        }\n\n        if (swipes[count - 1]) {\n          var outLeftBound = targetOffset > 0;\n          swipes[count - 1].offset = outLeftBound ? -trackSize : 0;\n        }\n      }\n\n      this.active = targetActive;\n      this.offset = targetOffset;\n\n      if (emitChange && targetActive !== active) {\n        this.$emit(\'change\', this.activeIndicator);\n      }\n    },\n    // @exposed-api\n    prev: function prev() {\n      var _this = this;\n\n      this.correctPosition();\n      this.resetTouchStatus();\n      Object(_utils_dom_raf__WEBPACK_IMPORTED_MODULE_2__["doubleRaf"])(function () {\n        _this.swiping = false;\n\n        _this.move({\n          pace: -1,\n          emitChange: true\n        });\n      });\n    },\n    // @exposed-api\n    next: function next() {\n      var _this2 = this;\n\n      this.correctPosition();\n      this.resetTouchStatus();\n      Object(_utils_dom_raf__WEBPACK_IMPORTED_MODULE_2__["doubleRaf"])(function () {\n        _this2.swiping = false;\n\n        _this2.move({\n          pace: 1,\n          emitChange: true\n        });\n      });\n    },\n    // @exposed-api\n    swipeTo: function swipeTo(index) {\n      var _this3 = this;\n\n      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      this.correctPosition();\n      this.resetTouchStatus();\n      Object(_utils_dom_raf__WEBPACK_IMPORTED_MODULE_2__["doubleRaf"])(function () {\n        var targetIndex;\n\n        if (_this3.loop && index === _this3.count) {\n          targetIndex = _this3.active === 0 ? 0 : index;\n        } else {\n          targetIndex = index % _this3.count;\n        }\n\n        if (options.immediate) {\n          Object(_utils_dom_raf__WEBPACK_IMPORTED_MODULE_2__["doubleRaf"])(function () {\n            _this3.swiping = false;\n          });\n        } else {\n          _this3.swiping = false;\n        }\n\n        _this3.move({\n          pace: targetIndex - _this3.active,\n          emitChange: true\n        });\n      });\n    },\n    correctPosition: function correctPosition() {\n      this.swiping = true;\n\n      if (this.active <= -1) {\n        this.move({\n          pace: this.count\n        });\n      }\n\n      if (this.active >= this.count) {\n        this.move({\n          pace: -this.count\n        });\n      }\n    },\n    clear: function clear() {\n      clearTimeout(this.timer);\n    },\n    autoPlay: function autoPlay() {\n      var _this4 = this;\n\n      var autoplay = this.autoplay;\n\n      if (autoplay > 0 && this.count > 1) {\n        this.clear();\n        this.timer = setTimeout(function () {\n          _this4.next();\n\n          _this4.autoPlay();\n        }, autoplay);\n      }\n    },\n    touchStart: function touchStart(event) {\n      this.resetTouchStatus();\n      this.startX = event.touches[0].clientX;\n      this.startY = event.touches[0].clientY;\n    },\n    touchMove: function touchMove(event) {\n      var touch = event.touches[0];\n      this.deltaX = touch.clientX - this.startX;\n      this.deltaY = touch.clientY - this.startY;\n      this.offsetX = Math.abs(this.deltaX);\n      this.offsetY = Math.abs(this.deltaY);\n      this.direction = this.direction || getDirection(this.offsetX, this.offsetY);\n    },\n    resetTouchStatus: function resetTouchStatus() {\n      this.direction = \'\';\n      this.deltaX = 0;\n      this.deltaY = 0;\n      this.offsetX = 0;\n      this.offsetY = 0;\n    },\n    // avoid Vue 2.6 event bubble issues by manually binding events\n    // https://github.com/youzan/vant/issues/3015\n    bindTouchEvent: function bindTouchEvent(el) {\n      var onTouchStart = this.onTouchStart,\n          onTouchMove = this.onTouchMove,\n          onTouchEnd = this.onTouchEnd;\n      Object(_utils_dom_event__WEBPACK_IMPORTED_MODULE_1__["on"])(el, \'touchstart\', onTouchStart);\n      Object(_utils_dom_event__WEBPACK_IMPORTED_MODULE_1__["on"])(el, \'touchmove\', onTouchMove);\n\n      if (onTouchEnd) {\n        Object(_utils_dom_event__WEBPACK_IMPORTED_MODULE_1__["on"])(el, \'touchend\', onTouchEnd);\n        Object(_utils_dom_event__WEBPACK_IMPORTED_MODULE_1__["on"])(el, \'touchcancel\', onTouchEnd);\n      }\n    },\n    handlerClick: function handlerClick(link) {\n      if (link) {\n        window.location.href = link;\n      }\n    },\n    getImageMaxHeight: function getImageMaxHeight() {\n      var _this5 = this;\n\n      this.imageList.forEach(function (_ref3) {\n        var img = _ref3.img;\n\n        _this5.getImageHeight(img);\n      });\n    },\n    getImageHeight: function getImageHeight(src) {\n      var _this6 = this;\n\n      var image = new Image();\n      image.src = src;\n\n      image.onload = function () {\n        var height = 0;\n\n        if (image.width <= 375) {\n          height = image.height;\n        } else {\n          height = image.height / (image.width / 375);\n        }\n\n        _this6.imageHeightArr.push(height);\n\n        _this6.height = Math.max.apply(Math, _toConsumableArray(_this6.imageHeightArr));\n      };\n    }\n  },\n  created: function created() {\n    this.getImageMaxHeight();\n  }\n});\n\n//# sourceURL=webpack://ZM-COMP-BANNER/./src/components/banner/src/index.vue?./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options'
          );

          /***/
        },

      /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/banner/src/item.vue?vue&type=script&lang=js&":
        /*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/banner/src/item.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            "__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'banner-item',\n  data: function data() {\n    return {\n      offset: 0\n    };\n  },\n  computed: {\n    style: function style() {\n      var _this$$parent = this.$parent,\n          vertical = _this$$parent.vertical,\n          computedWidth = _this$$parent.computedWidth;\n      var style = {\n        width: (computedWidth || 375) / 37.5 + 'rem' //height: vertical ? (computedHeight / 37.5) + 'rem' : '100%',\n\n      };\n\n      if (this.offset) {\n        style.transform = \"translate\".concat(vertical ? 'Y' : 'X', \"(\").concat(this.offset / 37.5, \"rem)\");\n      }\n\n      return style;\n    }\n  },\n  beforeCreate: function beforeCreate() {\n    this.$parent.swipes.push(this);\n  },\n  destroyed: function destroyed() {\n    this.$parent.swipes.splice(this.$parent.swipes.indexOf(this), 1);\n  }\n});\n\n//# sourceURL=webpack://ZM-COMP-BANNER/./src/components/banner/src/item.vue?./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options"
          );

          /***/
        },

      /***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/banner/src/index.vue?vue&type=style&index=0&id=4c478058&lang=scss&scoped=true&":
        /*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/banner/src/index.vue?vue&type=style&index=0&id=4c478058&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
        /*! no static exports found */
        /***/ function (module, exports, __webpack_require__) {
          eval(
            '// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, ".swipe[data-v-4c478058] {\\n  position: relative;\\n  overflow: hidden;\\n  cursor: -webkit-grab;\\n  cursor: grab;\\n  -webkit-user-select: none;\\n     -moz-user-select: none;\\n      -ms-user-select: none;\\n          user-select: none;\\n  width: 10rem;\\n}\\n.swipe-item[data-v-4c478058] {\\n  position: relative;\\n  -ms-flex-negative: 0;\\n      flex-shrink: 0;\\n  width: 100%;\\n  height: 100%;\\n}\\n.swipe-item img[data-v-4c478058] {\\n  width: 100%;\\n  height: 100%;\\n  -o-object-fit: fill;\\n     object-fit: fill;\\n}\\n.swipe__track[data-v-4c478058] {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  height: 100%;\\n}\\n.swipe__indicators[data-v-4c478058] {\\n  position: absolute;\\n  bottom: 0.2133333333rem;\\n  left: 50%;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-transform: translateX(-50%);\\n          transform: translateX(-50%);\\n}\\n.swipe__indicators--vertical[data-v-4c478058] {\\n  top: 50%;\\n  bottom: auto;\\n  left: 0.2133333333rem;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  -webkit-transform: translateY(-50%);\\n          transform: translateY(-50%);\\n}\\n.swipe__indicators--vertical .van-swipe__indicator[data-v-4c478058]:not(:last-child) {\\n  margin-bottom: 0.2666666667rem;\\n}\\n.swipe__indicator[data-v-4c478058] {\\n  width: 0.2666666667rem;\\n  height: 0.2666666667rem;\\n  background-color: #EAEAEA;\\n  border-radius: 100%;\\n  opacity: 0.3;\\n  -webkit-transition: opacity 0.2s;\\n  transition: opacity 0.2s;\\n}\\n.swipe__indicator[data-v-4c478058]:not(:last-child) {\\n  margin-right: 0.2666666667rem;\\n}\\n.swipe__indicator--active[data-v-4c478058] {\\n  background-color: #F32735;\\n  opacity: 1;\\n}", ""]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://ZM-COMP-BANNER/./src/components/banner/src/index.vue?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options'
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
            '\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return "@media ".concat(item[2], " {").concat(content, "}");\n      }\n\n      return content;\n    }).join(\'\');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === \'string\') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \'\']];\n    }\n\n    for (var i = 0; i < modules.length; i++) {\n      var item = [].concat(modules[i]);\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || \'\'; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === \'function\') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return "/*# sourceURL=".concat(cssMapping.sourceRoot || \'\').concat(source, " */");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join(\'\\n\');\n  }\n\n  return [content].join(\'\\n\');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);\n  return "/*# ".concat(data, " */");\n}\n\n//# sourceURL=webpack://ZM-COMP-BANNER/./node_modules/css-loader/dist/runtime/api.js?'
          );

          /***/
        },

      /***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/banner/src/index.vue?vue&type=style&index=0&id=4c478058&lang=scss&scoped=true&":
        /*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/banner/src/index.vue?vue&type=style&index=0&id=4c478058&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
        /*! no static exports found */
        /***/ function (module, exports, __webpack_require__) {
          eval(
            'var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=4c478058&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/banner/src/index.vue?vue&type=style&index=0&id=4c478058&lang=scss&scoped=true&");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === \'string\') {\n              content = [[module.i, content, \'\']];\n            }\n\nvar options = {};\n\noptions.insert = "head";\noptions.singleton = false;\n\nvar update = api(module.i, content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack://ZM-COMP-BANNER/./src/components/banner/src/index.vue?./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options'
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
            "\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = {};\n\nfunction modulesToDom(moduleId, list, options) {\n  for (var i = 0; i < list.length; i++) {\n    var part = {\n      css: list[i][1],\n      media: list[i][2],\n      sourceMap: list[i][3]\n    };\n\n    if (stylesInDom[moduleId][i]) {\n      stylesInDom[moduleId][i](part);\n    } else {\n      stylesInDom[moduleId].push(addStyle(part, options));\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (moduleId, list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  moduleId = options.base ? moduleId + options.base : moduleId;\n  list = list || [];\n\n  if (!stylesInDom[moduleId]) {\n    stylesInDom[moduleId] = [];\n  }\n\n  modulesToDom(moduleId, list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    if (!stylesInDom[moduleId]) {\n      stylesInDom[moduleId] = [];\n    }\n\n    modulesToDom(moduleId, newList, options);\n\n    for (var j = newList.length; j < stylesInDom[moduleId].length; j++) {\n      stylesInDom[moduleId][j]();\n    }\n\n    stylesInDom[moduleId].length = newList.length;\n\n    if (stylesInDom[moduleId].length === 0) {\n      delete stylesInDom[moduleId];\n    }\n  };\n};\n\n//# sourceURL=webpack://ZM-COMP-BANNER/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?"
          );

          /***/
        },

      /***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/banner/src/index.vue?vue&type=template&id=4c478058&scoped=true&":
        /*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/banner/src/index.vue?vue&type=template&id=4c478058&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
        /*! exports provided: render, staticRenderFns */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c("div", { staticClass: "swipe" }, [\n    _c(\n      "div",\n      { ref: "track", staticClass: "swipe__track", style: _vm.trackStyle },\n      _vm._l(_vm.list, function(item, index) {\n        return _c("item", { key: index }, [\n          _c("img", {\n            attrs: { src: item.img },\n            on: {\n              click: function($event) {\n                return _vm.handlerClick(item.link)\n              }\n            }\n          })\n        ])\n      }),\n      1\n    ),\n    _vm._v(" "),\n    _vm.showIndicators\n      ? _c(\n          "div",\n          {\n            staticClass: "swipe__indicators",\n            class: _vm.vertical ? "vertical" : ""\n          },\n          _vm._l(_vm.count, function(item, index) {\n            return _c("i", {\n              key: index,\n              staticClass: "swipe__indicator",\n              class:\n                index === _vm.activeIndicator ? "swipe__indicator--active" : "",\n              style: index === _vm.activeIndicator ? _vm.indicatorStyle : ""\n            })\n          }),\n          0\n        )\n      : _vm._e()\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://ZM-COMP-BANNER/./src/components/banner/src/index.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options'
          );

          /***/
        },

      /***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/banner/src/item.vue?vue&type=template&id=0460f981&":
        /*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/banner/src/item.vue?vue&type=template&id=0460f981& ***!
  \*********************************************************************************************************************************************************************************************************/
        /*! exports provided: render, staticRenderFns */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    "div",\n    {\n      staticClass: "swipe-item",\n      style: _vm.style,\n      on: { on: this.$listeners }\n    },\n    [_vm._t("default")],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://ZM-COMP-BANNER/./src/components/banner/src/item.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options'
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
            "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functioal component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack://ZM-COMP-BANNER/./node_modules/vue-loader/lib/runtime/componentNormalizer.js?"
          );

          /***/
        },

      /***/ "./src/components/banner/index.js":
        /*!****************************************!*\
  !*** ./src/components/banner/index.js ***!
  \****************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index.vue */ "./src/components/banner/src/index.vue");\n\n\n_src_index_vue__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (Vue) {\n  Vue.component(_src_index_vue__WEBPACK_IMPORTED_MODULE_0__["default"].name, _src_index_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);\n};\n\n_src_index_vue__WEBPACK_IMPORTED_MODULE_0__["default"].version = \'1.0.2\';\n_src_index_vue__WEBPACK_IMPORTED_MODULE_0__["default"].pickers = [//{\n//    pickerName: \'NumberPicker\',\n//    title: \'banner 高度\',\n//    prop: \'height\',\n//    value: 211\n//},\n{\n  pickerName: \'NumberPicker\',\n  title: \'滚动速度（ms）\',\n  prop: \'autoplay\',\n  value: 3000\n}, {\n  prop: \'imageList\',\n  pickerName: \'MultipleImgPicker\',\n  showKeys: [\'img\'],\n  title: \'banner 图片组\',\n  value: []\n}, {\n  pickerName: \'RadioPicker\',\n  noTitle: true,\n  prop: \'showIndicators\',\n  options: [{\n    "label": "不显示分页器",\n    "value": false\n  }, {\n    "label": "显示分页器",\n    "value": true\n  }],\n  value: true\n}];\n/* harmony default export */ __webpack_exports__["default"] = (_src_index_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack://ZM-COMP-BANNER/./src/components/banner/index.js?'
          );

          /***/
        },

      /***/ "./src/components/banner/src/index.vue":
        /*!*********************************************!*\
  !*** ./src/components/banner/src/index.vue ***!
  \*********************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_4c478058_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4c478058&scoped=true& */ "./src/components/banner/src/index.vue?vue&type=template&id=4c478058&scoped=true&");\n/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/components/banner/src/index.vue?vue&type=script&lang=js&");\n/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_4c478058_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=4c478058&lang=scss&scoped=true& */ "./src/components/banner/src/index.vue?vue&type=style&index=0&id=4c478058&lang=scss&scoped=true&");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(\n  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],\n  _index_vue_vue_type_template_id_4c478058_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],\n  _index_vue_vue_type_template_id_4c478058_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],\n  false,\n  null,\n  "4c478058",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = "src/components/banner/src/index.vue"\n/* harmony default export */ __webpack_exports__["default"] = (component.exports);\n\n//# sourceURL=webpack://ZM-COMP-BANNER/./src/components/banner/src/index.vue?'
          );

          /***/
        },

      /***/ "./src/components/banner/src/index.vue?vue&type=script&lang=js&":
        /*!**********************************************************************!*\
  !*** ./src/components/banner/src/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/banner/src/index.vue?vue&type=script&lang=js&");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); \n\n//# sourceURL=webpack://ZM-COMP-BANNER/./src/components/banner/src/index.vue?'
          );

          /***/
        },

      /***/ "./src/components/banner/src/index.vue?vue&type=style&index=0&id=4c478058&lang=scss&scoped=true&":
        /*!*******************************************************************************************************!*\
  !*** ./src/components/banner/src/index.vue?vue&type=style&index=0&id=4c478058&lang=scss&scoped=true& ***!
  \*******************************************************************************************************/
        /*! no static exports found */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4c478058_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=4c478058&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/banner/src/index.vue?vue&type=style&index=0&id=4c478058&lang=scss&scoped=true&");\n/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4c478058_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4c478058_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4c478058_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \'default\') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4c478058_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4c478058_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack://ZM-COMP-BANNER/./src/components/banner/src/index.vue?'
          );

          /***/
        },

      /***/ "./src/components/banner/src/index.vue?vue&type=template&id=4c478058&scoped=true&":
        /*!****************************************************************************************!*\
  !*** ./src/components/banner/src/index.vue?vue&type=template&id=4c478058&scoped=true& ***!
  \****************************************************************************************/
        /*! exports provided: render, staticRenderFns */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4c478058_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=4c478058&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/banner/src/index.vue?vue&type=template&id=4c478058&scoped=true&");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4c478058_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4c478058_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });\n\n\n\n//# sourceURL=webpack://ZM-COMP-BANNER/./src/components/banner/src/index.vue?'
          );

          /***/
        },

      /***/ "./src/components/banner/src/item.vue":
        /*!********************************************!*\
  !*** ./src/components/banner/src/item.vue ***!
  \********************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _item_vue_vue_type_template_id_0460f981___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.vue?vue&type=template&id=0460f981& */ "./src/components/banner/src/item.vue?vue&type=template&id=0460f981&");\n/* harmony import */ var _item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item.vue?vue&type=script&lang=js& */ "./src/components/banner/src/item.vue?vue&type=script&lang=js&");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(\n  _item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],\n  _item_vue_vue_type_template_id_0460f981___WEBPACK_IMPORTED_MODULE_0__["render"],\n  _item_vue_vue_type_template_id_0460f981___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = "src/components/banner/src/item.vue"\n/* harmony default export */ __webpack_exports__["default"] = (component.exports);\n\n//# sourceURL=webpack://ZM-COMP-BANNER/./src/components/banner/src/item.vue?'
          );

          /***/
        },

      /***/ "./src/components/banner/src/item.vue?vue&type=script&lang=js&":
        /*!*********************************************************************!*\
  !*** ./src/components/banner/src/item.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0!../../../../node_modules/vue-loader/lib??vue-loader-options!./item.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/banner/src/item.vue?vue&type=script&lang=js&");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); \n\n//# sourceURL=webpack://ZM-COMP-BANNER/./src/components/banner/src/item.vue?'
          );

          /***/
        },

      /***/ "./src/components/banner/src/item.vue?vue&type=template&id=0460f981&":
        /*!***************************************************************************!*\
  !*** ./src/components/banner/src/item.vue?vue&type=template&id=0460f981& ***!
  \***************************************************************************/
        /*! exports provided: render, staticRenderFns */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_template_id_0460f981___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./item.vue?vue&type=template&id=0460f981& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/banner/src/item.vue?vue&type=template&id=0460f981&");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_template_id_0460f981___WEBPACK_IMPORTED_MODULE_0__["render"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_template_id_0460f981___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });\n\n\n\n//# sourceURL=webpack://ZM-COMP-BANNER/./src/components/banner/src/item.vue?'
          );

          /***/
        },

      /***/ "./src/components/banner/src/mixins/bind-event.js":
        /*!********************************************************!*\
  !*** ./src/components/banner/src/mixins/bind-event.js ***!
  \********************************************************/
        /*! exports provided: BindEventMixin */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindEventMixin", function() { return BindEventMixin; });\n/* harmony import */ var _utils_dom_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/event */ "./src/components/banner/src/utils/dom/event.js");\n/**\r\n * Bind event when mounted or activated\r\n */\n\nfunction BindEventMixin(handler) {\n  function bind() {\n    if (!this.binded) {\n      handler.call(this, _utils_dom_event__WEBPACK_IMPORTED_MODULE_0__["on"], true);\n      this.binded = true;\n    }\n  }\n\n  function unbind() {\n    if (this.binded) {\n      handler.call(this, _utils_dom_event__WEBPACK_IMPORTED_MODULE_0__["off"], false);\n      this.binded = false;\n    }\n  }\n\n  return {\n    mounted: bind,\n    activated: bind,\n    deactivated: unbind,\n    beforeDestroy: unbind\n  };\n}\n\n//# sourceURL=webpack://ZM-COMP-BANNER/./src/components/banner/src/mixins/bind-event.js?'
          );

          /***/
        },

      /***/ "./src/components/banner/src/utils/dom/event.js":
        /*!******************************************************!*\
  !*** ./src/components/banner/src/utils/dom/event.js ***!
  \******************************************************/
        /*! exports provided: supportsPassive, on, off, stopPropagation, preventDefault */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsPassive", function() { return supportsPassive; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "off", function() { return off; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopPropagation", function() { return stopPropagation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preventDefault", function() { return preventDefault; });\nvar isServer = false; // eslint-disable-next-line import/no-mutable-exports\n\nvar supportsPassive = false;\n\nif (!isServer) {\n  try {\n    var opts = {};\n    Object.defineProperty(opts, \'passive\', {\n      // eslint-disable-next-line getter-return\n      get: function get() {\n        /* istanbul ignore next */\n        supportsPassive = true;\n      }\n    });\n    window.addEventListener(\'test-passive\', null, opts); // eslint-disable-next-line no-empty\n  } catch (e) {// console.log(e)\n  }\n}\n\nfunction on(target, event, handler) {\n  var passive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n\n  if (!isServer) {\n    target.addEventListener(event, handler, supportsPassive ? {\n      capture: false,\n      passive: passive\n    } : false);\n  }\n}\nfunction off(target, event, handler) {\n  if (!isServer) {\n    target.removeEventListener(event, handler);\n  }\n}\nfunction stopPropagation(event) {\n  event.stopPropagation();\n}\nfunction preventDefault(event, isStopPropagation) {\n  /* istanbul ignore else */\n  if (typeof event.cancelable !== \'boolean\' || event.cancelable) {\n    event.preventDefault();\n  }\n\n  if (isStopPropagation) {\n    stopPropagation(event);\n  }\n}\n\n//# sourceURL=webpack://ZM-COMP-BANNER/./src/components/banner/src/utils/dom/event.js?'
          );

          /***/
        },

      /***/ "./src/components/banner/src/utils/dom/raf.js":
        /*!****************************************************!*\
  !*** ./src/components/banner/src/utils/dom/raf.js ***!
  \****************************************************/
        /*! exports provided: raf, doubleRaf, cancelRaf */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raf", function() { return raf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doubleRaf", function() { return doubleRaf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelRaf", function() { return cancelRaf; });\n/**\r\n * requestAnimationFrame polyfill\r\n */\nvar prev = Date.now();\n/* istanbul ignore next */\n\nfunction fallback(fn) {\n  var curr = Date.now();\n  var ms = Math.max(0, 16 - (curr - prev));\n  var id = setTimeout(fn, ms);\n  prev = curr + ms;\n  return id;\n}\n/* istanbul ignore next */\n\n\nvar root = window;\n/* istanbul ignore next */\n\nvar iRaf = root.requestAnimationFrame || fallback;\n/* istanbul ignore next */\n\nvar iCancel = root.cancelAnimationFrame || root.clearTimeout;\nfunction raf(fn) {\n  return iRaf.call(root, fn);\n} // double raf for animation\n\nfunction doubleRaf(fn) {\n  raf(function () {\n    raf(fn);\n  });\n}\nfunction cancelRaf(id) {\n  iCancel.call(root, id);\n}\n\n//# sourceURL=webpack://ZM-COMP-BANNER/./src/components/banner/src/utils/dom/raf.js?'
          );

          /***/
        },

      /***/ "./src/components/banner/src/utils/dom/style.js":
        /*!******************************************************!*\
  !*** ./src/components/banner/src/utils/dom/style.js ***!
  \******************************************************/
        /*! exports provided: isHidden */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isHidden\", function() { return isHidden; });\nfunction isHidden(el) {\n  var style = window.getComputedStyle(el);\n  var hidden = style.display === 'none'; // offsetParent returns null in the following situations:\n  // 1. The element or its parent element has the display property set to none.\n  // 2. The element has the position property set to fixed\n\n  var parentHidden = el.offsetParent === null && style.position !== 'fixed';\n  return hidden || parentHidden;\n}\n\n//# sourceURL=webpack://ZM-COMP-BANNER/./src/components/banner/src/utils/dom/style.js?"
          );

          /***/
        },

      /***/ "./src/components/banner/src/utils/format/number.js":
        /*!**********************************************************!*\
  !*** ./src/components/banner/src/utils/format/number.js ***!
  \**********************************************************/
        /*! exports provided: range */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });\nfunction range(num, min, max) {\n  return Math.min(Math.max(num, min), max);\n}\n\n//# sourceURL=webpack://ZM-COMP-BANNER/./src/components/banner/src/utils/format/number.js?'
          );

          /***/
        },

      /******/
    }
  )["default"];
});
