"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/about-us/about-us-card/index.tsx":
/*!*********************************************************!*\
  !*** ./src/components/about-us/about-us-card/index.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AboutUsCard\": function() { return /* binding */ AboutUsCard; }\n/* harmony export */ });\n/* harmony import */ var D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.scss */ \"./src/components/about-us/about-us-card/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/hooks/useDevice */ \"./src/hooks/useDevice.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"D:\\\\IXNOME\\\\evo-landing\\\\frontend\\\\src\\\\components\\\\about-us\\\\about-us-card\\\\index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar AboutUsCard = function AboutUsCard(props) {\n  _s();\n\n  var card = props.card,\n      index = props.index,\n      mainItemIndex = props.mainItemIndex,\n      setMainItemIndex = props.setMainItemIndex,\n      setTop = props.setTop;\n  var title = card.title,\n      text = card.text;\n  var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  var _useDevice = (0,src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_3__.useDevice)(),\n      isMobile = _useDevice.isMobile,\n      isTablet = _useDevice.isTablet,\n      isDesktop = _useDevice.isDesktop,\n      isSmallNote = _useDevice.isSmallNote;\n\n  var isElementInViewport = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (element) {\n    var rect = element.getBoundingClientRect();\n    var clientHeight = window.innerHeight;\n    return rect.top < clientHeight / 2 && rect.bottom > clientHeight / 2;\n  }, []);\n\n  var getFirstPosition = function getFirstPosition() {};\n\n  var changeTopPosition = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (index) {\n    if (ref.current) {\n      var refHeight = ref.current.getBoundingClientRect().height;\n      var gap = isMobile || isTablet ? 120 : 180;\n      var padding = isDesktop ? 80 : 60;\n\n      var _diag = function _diag() {\n        if (isSmallNote) return 4;\n        if (isDesktop) return 1;\n        return 5;\n      };\n\n      var first = Math.round(refHeight / 2) + padding - _diag();\n\n      var firstMob = padding + 13;\n      var breakpoint1 = isMobile || isTablet ? firstMob : first;\n      var breakpoint2 = Math.round(refHeight + breakpoint1 + gap);\n      var breakpoint3 = Math.round(refHeight + breakpoint2 + gap);\n\n      switch (index) {\n        case -1:\n        case 0:\n          setTop(breakpoint1);\n          break;\n\n        case 1:\n          setTop(breakpoint2);\n          break;\n\n        case 2:\n        case 100:\n          setTop(breakpoint3);\n          break;\n\n        default:\n          setTop(function (prev) {\n            return prev;\n          });\n      }\n    }\n  }, [isMobile, isTablet, isDesktop, ref]);\n  var goToSection = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {\n    if (ref.current) {\n      ref.current.scrollIntoView({\n        behavior: \"smooth\",\n        block: \"center\"\n      });\n      setMainItemIndex(index);\n      changeTopPosition(index);\n    }\n  }, [ref, index, isMobile, isTablet, isDesktop]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (ref.current) {\n      var refHeight = ref.current.getBoundingClientRect().height;\n      var padding = isDesktop ? 80 : 60;\n      var first = Math.round(refHeight / 2) + padding - diag();\n      var firstMob = padding + 13;\n      setTop();\n    }\n  }, [ref, isMobile, isDesktop]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var handleScroll = function handleScroll() {\n      if (ref.current) {\n        if (isElementInViewport(ref.current)) {\n          setMainItemIndex(index);\n          changeTopPosition(index);\n        }\n      }\n    };\n\n    window.addEventListener(\"scroll\", handleScroll);\n    return function () {\n      window.removeEventListener(\"scroll\", handleScroll);\n    };\n  }, [index, isMobile, isTablet, isDesktop]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),\n    ref: ref,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container__circleBox),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container__circleBox__circle)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"section\", {\n      onClick: goToSection,\n      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().aboutUsCard), (0,D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().aboutUsCard_main), mainItemIndex === index)),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h1\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: text\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 111,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AboutUsCard, \"DLQXQgfapUQxXSfYCdULsMDTmVk=\", false, function () {\n  return [src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_3__.useDevice];\n});\n\n_c = AboutUsCard;\n\nvar _c;\n\n$RefreshReg$(_c, \"AboutUsCard\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hYm91dC11cy9hYm91dC11cy1jYXJkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQVVPLElBQU1NLFdBQW1DLEdBQUcsU0FBdENBLFdBQXNDLENBQUNDLEtBQUQsRUFBVztFQUFBOztFQUM1RCxJQUFRQyxJQUFSLEdBQWlFRCxLQUFqRSxDQUFRQyxJQUFSO0VBQUEsSUFBY0MsS0FBZCxHQUFpRUYsS0FBakUsQ0FBY0UsS0FBZDtFQUFBLElBQXFCQyxhQUFyQixHQUFpRUgsS0FBakUsQ0FBcUJHLGFBQXJCO0VBQUEsSUFBb0NDLGdCQUFwQyxHQUFpRUosS0FBakUsQ0FBb0NJLGdCQUFwQztFQUFBLElBQXNEQyxNQUF0RCxHQUFpRUwsS0FBakUsQ0FBc0RLLE1BQXREO0VBQ0EsSUFBUUMsS0FBUixHQUF3QkwsSUFBeEIsQ0FBUUssS0FBUjtFQUFBLElBQWVDLElBQWYsR0FBd0JOLElBQXhCLENBQWVNLElBQWY7RUFDQSxJQUFNQyxHQUFHLEdBQUdiLDZDQUFNLENBQWEsSUFBYixDQUFsQjs7RUFDQSxpQkFBdURHLDhEQUFTLEVBQWhFO0VBQUEsSUFBUVcsUUFBUixjQUFRQSxRQUFSO0VBQUEsSUFBa0JDLFFBQWxCLGNBQWtCQSxRQUFsQjtFQUFBLElBQTRCQyxTQUE1QixjQUE0QkEsU0FBNUI7RUFBQSxJQUF1Q0MsV0FBdkMsY0FBdUNBLFdBQXZDOztFQUVBLElBQU1DLG1CQUFtQixHQUFHcEIsa0RBQVcsQ0FBQyxVQUFDcUIsT0FBRCxFQUFrQjtJQUN4RCxJQUFNQyxJQUFJLEdBQUdELE9BQU8sQ0FBQ0UscUJBQVIsRUFBYjtJQUNBLElBQU1DLFlBQVksR0FBR0MsTUFBTSxDQUFDQyxXQUE1QjtJQUVBLE9BQU9KLElBQUksQ0FBQ0ssR0FBTCxHQUFXSCxZQUFZLEdBQUcsQ0FBMUIsSUFBK0JGLElBQUksQ0FBQ00sTUFBTCxHQUFjSixZQUFZLEdBQUcsQ0FB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O1FBQUE7UUFBQTtNQUFBLFNBUEY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBSkY7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREY7QUFnQkQsQ0EvR007O0dBQU1SO1VBSTRDRDs7O0tBSjVDQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hYm91dC11cy9hYm91dC11cy1jYXJkL2luZGV4LnRzeD9lZmQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgeyBBQk9VVF9VUyB9IGZyb20gXCJzcmMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgdXNlRGV2aWNlIH0gZnJvbSBcInNyYy9ob29rcy91c2VEZXZpY2VcIjtcclxuXHJcbmludGVyZmFjZSBJQWJvdXRVc0NhcmQge1xyXG4gIGNhcmQ6ICh0eXBlb2YgQUJPVVRfVVMpWzBdO1xyXG4gIGluZGV4OiBudW1iZXI7XHJcbiAgbWFpbkl0ZW1JbmRleDogbnVtYmVyO1xyXG4gIHNldE1haW5JdGVtSW5kZXg6IChtYWluSXRlbUluZGV4OiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgc2V0VG9wOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxudW1iZXI+PjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFib3V0VXNDYXJkOiBSZWFjdC5GQzxJQWJvdXRVc0NhcmQ+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjYXJkLCBpbmRleCwgbWFpbkl0ZW1JbmRleCwgc2V0TWFpbkl0ZW1JbmRleCwgc2V0VG9wIH0gPSBwcm9wcztcclxuICBjb25zdCB7IHRpdGxlLCB0ZXh0IH0gPSBjYXJkO1xyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZjxhbnkgfCBudWxsPihudWxsKTtcclxuICBjb25zdCB7IGlzTW9iaWxlLCBpc1RhYmxldCwgaXNEZXNrdG9wLCBpc1NtYWxsTm90ZSB9ID0gdXNlRGV2aWNlKCk7XHJcblxyXG4gIGNvbnN0IGlzRWxlbWVudEluVmlld3BvcnQgPSB1c2VDYWxsYmFjaygoZWxlbWVudDogYW55KSA9PiB7XHJcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IGNsaWVudEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgICByZXR1cm4gcmVjdC50b3AgPCBjbGllbnRIZWlnaHQgLyAyICYmIHJlY3QuYm90dG9tID4gY2xpZW50SGVpZ2h0IC8gMjtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGdldEZpcnN0UG9zaXRpb24gPSAoKCkgPT4ge1xyXG5cclxuICB9KVxyXG5cclxuICBjb25zdCBjaGFuZ2VUb3BQb3NpdGlvbiA9IHVzZUNhbGxiYWNrKChpbmRleCkgPT4ge1xyXG4gICAgaWYocmVmLmN1cnJlbnQpIHtcclxuICAgICAgY29uc3QgcmVmSGVpZ2h0ID0gcmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xyXG4gICAgICBjb25zdCBnYXAgPSAoaXNNb2JpbGUgfHwgaXNUYWJsZXQpID8gMTIwIDogMTgwO1xyXG4gICAgICBjb25zdCBwYWRkaW5nID0gaXNEZXNrdG9wID8gODAgOiA2MDtcclxuICAgICAgY29uc3QgZGlhZyA9ICgpID0+IHtcclxuICAgICAgICBpZihpc1NtYWxsTm90ZSkgcmV0dXJuIDQ7XHJcbiAgICAgICAgaWYoaXNEZXNrdG9wKSByZXR1cm4gMTtcclxuICAgICAgICByZXR1cm4gNTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGZpcnN0ID0gTWF0aC5yb3VuZChyZWZIZWlnaHQgLyAyKSArIHBhZGRpbmcgLSBkaWFnKCk7XHJcbiAgICAgIGNvbnN0IGZpcnN0TW9iID0gcGFkZGluZyArIDEzO1xyXG5cclxuICAgICAgY29uc3QgYnJlYWtwb2ludDEgPSAoaXNNb2JpbGUgfHwgaXNUYWJsZXQpID8gZmlyc3RNb2IgOiBmaXJzdDtcclxuICAgICAgY29uc3QgYnJlYWtwb2ludDIgPSBNYXRoLnJvdW5kKHJlZkhlaWdodCArIGJyZWFrcG9pbnQxICsgZ2FwKTtcclxuICAgICAgY29uc3QgYnJlYWtwb2ludDMgPSBNYXRoLnJvdW5kKHJlZkhlaWdodCArIGJyZWFrcG9pbnQyICsgZ2FwKTtcclxuICBcclxuICAgICAgc3dpdGNoKGluZGV4KSB7XHJcbiAgICAgICAgY2FzZSAtMTpcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICBzZXRUb3AoYnJlYWtwb2ludDEpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgc2V0VG9wKGJyZWFrcG9pbnQyKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICBjYXNlIDEwMDpcclxuICAgICAgICAgIHNldFRvcChicmVha3BvaW50Myk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgc2V0VG9wKChwcmV2OiBudW1iZXIpID0+IHByZXYpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH0sIFtpc01vYmlsZSwgaXNUYWJsZXQsIGlzRGVza3RvcCwgcmVmXSk7XHJcblxyXG4gIGNvbnN0IGdvVG9TZWN0aW9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKHJlZi5jdXJyZW50KSB7XHJcbiAgICAgIHJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHtcclxuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcclxuICAgICAgICBibG9jazogXCJjZW50ZXJcIixcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZXRNYWluSXRlbUluZGV4KGluZGV4KTtcclxuICAgICAgY2hhbmdlVG9wUG9zaXRpb24oaW5kZXgpXHJcbiAgICB9XHJcbiAgfSwgW3JlZiwgaW5kZXgsIGlzTW9iaWxlLCBpc1RhYmxldCwgaXNEZXNrdG9wXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZihyZWYuY3VycmVudCkge1xyXG4gICAgICBjb25zdCByZWZIZWlnaHQgPSByZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XHJcbiAgICAgIGNvbnN0IHBhZGRpbmcgPSBpc0Rlc2t0b3AgPyA4MCA6IDYwO1xyXG5cclxuICAgICAgY29uc3QgZmlyc3QgPSBNYXRoLnJvdW5kKHJlZkhlaWdodCAvIDIpICsgcGFkZGluZyAtIGRpYWcoKTtcclxuICAgICAgY29uc3QgZmlyc3RNb2IgPSBwYWRkaW5nICsgMTM7XHJcblxyXG4gICAgICBzZXRUb3AoKVxyXG4gICAgfVxyXG4gIH0sIFtyZWYsIGlzTW9iaWxlLCBpc0Rlc2t0b3BdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICBpZiAocmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBpZiAoaXNFbGVtZW50SW5WaWV3cG9ydChyZWYuY3VycmVudCkpIHtcclxuICAgICAgICAgIHNldE1haW5JdGVtSW5kZXgoaW5kZXgpO1xyXG4gICAgICAgICAgY2hhbmdlVG9wUG9zaXRpb24oaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICB9O1xyXG4gIH0sIFtpbmRleCwgaXNNb2JpbGUsIGlzVGFibGV0LCBpc0Rlc2t0b3BdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSByZWY9e3JlZn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19jaXJjbGVCb3h9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19jaXJjbGVCb3hfX2NpcmNsZX0+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c2VjdGlvblxyXG4gICAgICAgIG9uQ2xpY2s9e2dvVG9TZWN0aW9ufVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuYWJvdXRVc0NhcmQsIHtcclxuICAgICAgICAgIFtzdHlsZXMuYWJvdXRVc0NhcmRfbWFpbl06IG1haW5JdGVtSW5kZXggPT09IGluZGV4LFxyXG4gICAgICAgIH0pfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICAgIDxwPnt0ZXh0fTwvcD5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiY2xhc3NOYW1lcyIsInN0eWxlcyIsInVzZURldmljZSIsIkFib3V0VXNDYXJkIiwicHJvcHMiLCJjYXJkIiwiaW5kZXgiLCJtYWluSXRlbUluZGV4Iiwic2V0TWFpbkl0ZW1JbmRleCIsInNldFRvcCIsInRpdGxlIiwidGV4dCIsInJlZiIsImlzTW9iaWxlIiwiaXNUYWJsZXQiLCJpc0Rlc2t0b3AiLCJpc1NtYWxsTm90ZSIsImlzRWxlbWVudEluVmlld3BvcnQiLCJlbGVtZW50IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudEhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwidG9wIiwiYm90dG9tIiwiZ2V0Rmlyc3RQb3NpdGlvbiIsImNoYW5nZVRvcFBvc2l0aW9uIiwiY3VycmVudCIsInJlZkhlaWdodCIsImhlaWdodCIsImdhcCIsInBhZGRpbmciLCJkaWFnIiwiZmlyc3QiLCJNYXRoIiwicm91bmQiLCJmaXJzdE1vYiIsImJyZWFrcG9pbnQxIiwiYnJlYWtwb2ludDIiLCJicmVha3BvaW50MyIsInByZXYiLCJnb1RvU2VjdGlvbiIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsImhhbmRsZVNjcm9sbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29udGFpbmVyIiwiY29udGFpbmVyX19jaXJjbGVCb3giLCJjb250YWluZXJfX2NpcmNsZUJveF9fY2lyY2xlIiwiYWJvdXRVc0NhcmQiLCJhYm91dFVzQ2FyZF9tYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/about-us/about-us-card/index.tsx\n"));

/***/ })

});