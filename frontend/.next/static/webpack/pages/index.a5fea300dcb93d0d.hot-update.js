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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AboutUsCard\": function() { return /* binding */ AboutUsCard; }\n/* harmony export */ });\n/* harmony import */ var D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectDestructuringEmpty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.module.scss */ \"./src/components/about-us/about-us-card/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/hooks/useDevice */ \"./src/hooks/useDevice.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _jsxFileName = \"D:\\\\IXNOME\\\\evo-landing\\\\frontend\\\\src\\\\components\\\\about-us\\\\about-us-card\\\\index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar AboutUsCard = function AboutUsCard(props) {\n  _s();\n\n  var card = props.card,\n      index = props.index,\n      mainItemIndex = props.mainItemIndex,\n      setMainItemIndex = props.setMainItemIndex,\n      setTop = props.setTop;\n  var title = card.title,\n      text = card.text;\n  var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n\n  var _useDevice = (0,src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_4__.useDevice)(),\n      isMobile = _useDevice.isMobile,\n      isTablet = _useDevice.isTablet,\n      isDesktop = _useDevice.isDesktop,\n      isSmallNote = _useDevice.isSmallNote;\n\n  var isElementInViewport = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (element) {\n    var rect = element.getBoundingClientRect();\n    var clientHeight = window.innerHeight;\n    return rect.top < clientHeight / 2 && rect.bottom > clientHeight / 2;\n  }, []);\n  var getRefPosition = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (ref) {\n    var refHeight = ref.current.getBoundingClientRect().height;\n    var gap = isMobile || isTablet ? 120 : 180;\n    var padding = isDesktop ? 80 : 60;\n\n    var diag = function diag() {\n      if (isSmallNote) return 4;\n      if (isDesktop) return 1;\n      return 5;\n      return {\n        refHeight: refHeight,\n        gap: gap,\n        padding: padding,\n        diag: diag\n      };\n    };\n  }, [isMobile, isDesktop]);\n  var changeTopPosition = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (index) {\n    if (ref.current) {\n      // const refHeight = ref.current.getBoundingClientRect().height;\n      // const gap = (isMobile || isTablet) ? 120 : 180;\n      // const padding = isDesktop ? 80 : 60;\n      // const diag = () => {\n      //   if(isSmallNote) return 4;\n      //   if(isDesktop) return 1;\n      //   return 5;\n      // };\n      var _getRefPosition = getRefPosition();\n\n      (0,D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_getRefPosition);\n\n      var first = Math.round(refHeight / 2) + padding - diag();\n      var firstMob = padding + 13;\n      var breakpoint1 = isMobile || isTablet ? firstMob : first;\n      var breakpoint2 = Math.round(refHeight + breakpoint1 + gap);\n      var breakpoint3 = Math.round(refHeight + breakpoint2 + gap);\n\n      switch (index) {\n        case -1:\n        case 0:\n          setTop(breakpoint1);\n          break;\n\n        case 1:\n          setTop(breakpoint2);\n          break;\n\n        case 2:\n        case 100:\n          setTop(breakpoint3);\n          break;\n\n        default:\n          setTop(function (prev) {\n            return prev;\n          });\n      }\n    }\n  }, [isMobile, isTablet, isDesktop, ref]);\n  var goToSection = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {\n    if (ref.current) {\n      ref.current.scrollIntoView({\n        behavior: \"smooth\",\n        block: \"center\"\n      });\n      setMainItemIndex(index);\n      changeTopPosition(index);\n    }\n  }, [ref, index, isMobile, isTablet, isDesktop]);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (ref.current) {\n      var _refHeight = ref.current.getBoundingClientRect().height;\n\n      var _padding = isDesktop ? 80 : 60;\n\n      var first = Math.round(_refHeight / 2) + _padding - diag();\n      var firstMob = _padding + 13;\n      setTop();\n    }\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var handleScroll = function handleScroll() {\n      if (ref.current) {\n        if (isElementInViewport(ref.current)) {\n          setMainItemIndex(index);\n          changeTopPosition(index);\n        }\n      }\n    };\n\n    window.addEventListener(\"scroll\", handleScroll);\n    return function () {\n      window.removeEventListener(\"scroll\", handleScroll);\n    };\n  }, [index, isMobile, isTablet, isDesktop]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),\n    ref: ref,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container__circleBox),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container__circleBox__circle)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"section\", {\n      onClick: goToSection,\n      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default().aboutUsCard), (0,D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, (_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default().aboutUsCard_main), mainItemIndex === index)),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h1\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 131,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n        children: text\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 132,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 121,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AboutUsCard, \"nLIoks436ixOtPF/kAfxXFylvMI=\", false, function () {\n  return [src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_4__.useDevice];\n});\n\n_c = AboutUsCard;\n\nvar _c;\n\n$RefreshReg$(_c, \"AboutUsCard\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hYm91dC11cy9hYm91dC11cy1jYXJkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBVU8sSUFBTU0sV0FBbUMsR0FBRyxTQUF0Q0EsV0FBc0MsQ0FBQ0MsS0FBRCxFQUFXO0VBQUE7O0VBQzVELElBQVFDLElBQVIsR0FBaUVELEtBQWpFLENBQVFDLElBQVI7RUFBQSxJQUFjQyxLQUFkLEdBQWlFRixLQUFqRSxDQUFjRSxLQUFkO0VBQUEsSUFBcUJDLGFBQXJCLEdBQWlFSCxLQUFqRSxDQUFxQkcsYUFBckI7RUFBQSxJQUFvQ0MsZ0JBQXBDLEdBQWlFSixLQUFqRSxDQUFvQ0ksZ0JBQXBDO0VBQUEsSUFBc0RDLE1BQXRELEdBQWlFTCxLQUFqRSxDQUFzREssTUFBdEQ7RUFDQSxJQUFRQyxLQUFSLEdBQXdCTCxJQUF4QixDQUFRSyxLQUFSO0VBQUEsSUFBZUMsSUFBZixHQUF3Qk4sSUFBeEIsQ0FBZU0sSUFBZjtFQUNBLElBQU1DLEdBQUcsR0FBR2IsNkNBQU0sQ0FBYSxJQUFiLENBQWxCOztFQUNBLGlCQUF1REcsOERBQVMsRUFBaEU7RUFBQSxJQUFRVyxRQUFSLGNBQVFBLFFBQVI7RUFBQSxJQUFrQkMsUUFBbEIsY0FBa0JBLFFBQWxCO0VBQUEsSUFBNEJDLFNBQTVCLGNBQTRCQSxTQUE1QjtFQUFBLElBQXVDQyxXQUF2QyxjQUF1Q0EsV0FBdkM7O0VBRUEsSUFBTUMsbUJBQW1CLEdBQUdwQixrREFBVyxDQUFDLFVBQUNxQixPQUFELEVBQWtCO0lBQ3hELElBQU1DLElBQUksR0FBR0QsT0FBTyxDQUFDRSxxQkFBUixFQUFiO0lBQ0EsSUFBTUMsWUFBWSxHQUFHQyxNQUFNLENBQUNDLFdBQTVCO0lBRUEsT0FBT0osSUFBSSxDQUFDSyxHQUFMLEdBQVdILFlBQVksR0FBRyxDQUExQixJQUErQkYsSUFBSSxDQUFDTSxNQUFMLEdBQWNKLFlBQVksR0FBRyxD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QSxTQURGLGVBSUU7TUFDRSxPQUFPLEVBQUVULFdBRFg7TUFFRSxTQUFTLEVBQUUxQyxpREFBVSxDQUFDQyx1RUFBRCw0SkFDbEJBLDRFQURrQixFQUNRTSxhQUFhLEtBQUtELEtBRDFCLEVBRnZCO01BQUEsd0JBTUU7UUFBQSxVQUFLSTtNQUFMO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FORixlQU9FO1FBQUEsVUFBSUM7TUFBSjtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBUEY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBSkY7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREY7QUFnQkQsQ0F6SE07O0dBQU1SO1VBSTRDRDs7O0tBSjVDQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hYm91dC11cy9hYm91dC11cy1jYXJkL2luZGV4LnRzeD9lZmQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgeyBBQk9VVF9VUyB9IGZyb20gXCJzcmMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgdXNlRGV2aWNlIH0gZnJvbSBcInNyYy9ob29rcy91c2VEZXZpY2VcIjtcclxuXHJcbmludGVyZmFjZSBJQWJvdXRVc0NhcmQge1xyXG4gIGNhcmQ6ICh0eXBlb2YgQUJPVVRfVVMpWzBdO1xyXG4gIGluZGV4OiBudW1iZXI7XHJcbiAgbWFpbkl0ZW1JbmRleDogbnVtYmVyO1xyXG4gIHNldE1haW5JdGVtSW5kZXg6IChtYWluSXRlbUluZGV4OiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgc2V0VG9wOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxudW1iZXI+PjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFib3V0VXNDYXJkOiBSZWFjdC5GQzxJQWJvdXRVc0NhcmQ+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjYXJkLCBpbmRleCwgbWFpbkl0ZW1JbmRleCwgc2V0TWFpbkl0ZW1JbmRleCwgc2V0VG9wIH0gPSBwcm9wcztcclxuICBjb25zdCB7IHRpdGxlLCB0ZXh0IH0gPSBjYXJkO1xyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZjxhbnkgfCBudWxsPihudWxsKTtcclxuICBjb25zdCB7IGlzTW9iaWxlLCBpc1RhYmxldCwgaXNEZXNrdG9wLCBpc1NtYWxsTm90ZSB9ID0gdXNlRGV2aWNlKCk7XHJcblxyXG4gIGNvbnN0IGlzRWxlbWVudEluVmlld3BvcnQgPSB1c2VDYWxsYmFjaygoZWxlbWVudDogYW55KSA9PiB7XHJcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IGNsaWVudEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgICByZXR1cm4gcmVjdC50b3AgPCBjbGllbnRIZWlnaHQgLyAyICYmIHJlY3QuYm90dG9tID4gY2xpZW50SGVpZ2h0IC8gMjtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGdldFJlZlBvc2l0aW9uID0gdXNlQ2FsbGJhY2soKHJlZjogYW55KSA9PiB7XHJcbiAgICBjb25zdCByZWZIZWlnaHQgPSByZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XHJcbiAgICBjb25zdCBnYXAgPSAoaXNNb2JpbGUgfHwgaXNUYWJsZXQpID8gMTIwIDogMTgwO1xyXG4gICAgY29uc3QgcGFkZGluZyA9IGlzRGVza3RvcCA/IDgwIDogNjA7XHJcbiAgICBjb25zdCBkaWFnID0gKCkgPT4ge1xyXG4gICAgICBpZihpc1NtYWxsTm90ZSkgcmV0dXJuIDQ7XHJcbiAgICAgIGlmKGlzRGVza3RvcCkgcmV0dXJuIDE7XHJcbiAgICAgIHJldHVybiA1O1xyXG5cclxuICAgICAgcmV0dXJuIHsgcmVmSGVpZ2h0LCBnYXAsIHBhZGRpbmcsIGRpYWd9XHJcbiAgICB9XHJcbiAgfSwgW2lzTW9iaWxlLCBpc0Rlc2t0b3BdKTtcclxuXHJcbiAgY29uc3QgY2hhbmdlVG9wUG9zaXRpb24gPSB1c2VDYWxsYmFjaygoaW5kZXgpID0+IHtcclxuICAgIGlmKHJlZi5jdXJyZW50KSB7XHJcbiAgICAgIC8vIGNvbnN0IHJlZkhlaWdodCA9IHJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcclxuICAgICAgLy8gY29uc3QgZ2FwID0gKGlzTW9iaWxlIHx8IGlzVGFibGV0KSA/IDEyMCA6IDE4MDtcclxuICAgICAgLy8gY29uc3QgcGFkZGluZyA9IGlzRGVza3RvcCA/IDgwIDogNjA7XHJcbiAgICAgIC8vIGNvbnN0IGRpYWcgPSAoKSA9PiB7XHJcbiAgICAgIC8vICAgaWYoaXNTbWFsbE5vdGUpIHJldHVybiA0O1xyXG4gICAgICAvLyAgIGlmKGlzRGVza3RvcCkgcmV0dXJuIDE7XHJcbiAgICAgIC8vICAgcmV0dXJuIDU7XHJcbiAgICAgIC8vIH07XHJcbiAgICAgIGNvbnN0IHsgfSA9IGdldFJlZlBvc2l0aW9uKClcclxuXHJcbiAgICAgIGNvbnN0IGZpcnN0ID0gTWF0aC5yb3VuZChyZWZIZWlnaHQgLyAyKSArIHBhZGRpbmcgLSBkaWFnKCk7XHJcbiAgICAgIGNvbnN0IGZpcnN0TW9iID0gcGFkZGluZyArIDEzO1xyXG5cclxuICAgICAgY29uc3QgYnJlYWtwb2ludDEgPSAoaXNNb2JpbGUgfHwgaXNUYWJsZXQpID8gZmlyc3RNb2IgOiBmaXJzdDtcclxuICAgICAgY29uc3QgYnJlYWtwb2ludDIgPSBNYXRoLnJvdW5kKHJlZkhlaWdodCArIGJyZWFrcG9pbnQxICsgZ2FwKTtcclxuICAgICAgY29uc3QgYnJlYWtwb2ludDMgPSBNYXRoLnJvdW5kKHJlZkhlaWdodCArIGJyZWFrcG9pbnQyICsgZ2FwKTtcclxuICBcclxuICAgICAgc3dpdGNoKGluZGV4KSB7XHJcbiAgICAgICAgY2FzZSAtMTpcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICBzZXRUb3AoYnJlYWtwb2ludDEpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgc2V0VG9wKGJyZWFrcG9pbnQyKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICBjYXNlIDEwMDpcclxuICAgICAgICAgIHNldFRvcChicmVha3BvaW50Myk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgc2V0VG9wKChwcmV2OiBudW1iZXIpID0+IHByZXYpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH0sIFtpc01vYmlsZSwgaXNUYWJsZXQsIGlzRGVza3RvcCwgcmVmXSk7XHJcblxyXG4gIGNvbnN0IGdvVG9TZWN0aW9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKHJlZi5jdXJyZW50KSB7XHJcbiAgICAgIHJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHtcclxuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcclxuICAgICAgICBibG9jazogXCJjZW50ZXJcIixcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZXRNYWluSXRlbUluZGV4KGluZGV4KTtcclxuICAgICAgY2hhbmdlVG9wUG9zaXRpb24oaW5kZXgpXHJcbiAgICB9XHJcbiAgfSwgW3JlZiwgaW5kZXgsIGlzTW9iaWxlLCBpc1RhYmxldCwgaXNEZXNrdG9wXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZihyZWYuY3VycmVudCkge1xyXG4gICAgICBjb25zdCByZWZIZWlnaHQgPSByZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XHJcbiAgICAgIGNvbnN0IHBhZGRpbmcgPSBpc0Rlc2t0b3AgPyA4MCA6IDYwO1xyXG5cclxuICAgICAgY29uc3QgZmlyc3QgPSBNYXRoLnJvdW5kKHJlZkhlaWdodCAvIDIpICsgcGFkZGluZyAtIGRpYWcoKTtcclxuICAgICAgY29uc3QgZmlyc3RNb2IgPSBwYWRkaW5nICsgMTM7XHJcblxyXG4gICAgICBzZXRUb3AoKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICBpZiAocmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBpZiAoaXNFbGVtZW50SW5WaWV3cG9ydChyZWYuY3VycmVudCkpIHtcclxuICAgICAgICAgIHNldE1haW5JdGVtSW5kZXgoaW5kZXgpO1xyXG4gICAgICAgICAgY2hhbmdlVG9wUG9zaXRpb24oaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICB9O1xyXG4gIH0sIFtpbmRleCwgaXNNb2JpbGUsIGlzVGFibGV0LCBpc0Rlc2t0b3BdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSByZWY9e3JlZn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19jaXJjbGVCb3h9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19jaXJjbGVCb3hfX2NpcmNsZX0+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c2VjdGlvblxyXG4gICAgICAgIG9uQ2xpY2s9e2dvVG9TZWN0aW9ufVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuYWJvdXRVc0NhcmQsIHtcclxuICAgICAgICAgIFtzdHlsZXMuYWJvdXRVc0NhcmRfbWFpbl06IG1haW5JdGVtSW5kZXggPT09IGluZGV4LFxyXG4gICAgICAgIH0pfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICAgIDxwPnt0ZXh0fTwvcD5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiY2xhc3NOYW1lcyIsInN0eWxlcyIsInVzZURldmljZSIsIkFib3V0VXNDYXJkIiwicHJvcHMiLCJjYXJkIiwiaW5kZXgiLCJtYWluSXRlbUluZGV4Iiwic2V0TWFpbkl0ZW1JbmRleCIsInNldFRvcCIsInRpdGxlIiwidGV4dCIsInJlZiIsImlzTW9iaWxlIiwiaXNUYWJsZXQiLCJpc0Rlc2t0b3AiLCJpc1NtYWxsTm90ZSIsImlzRWxlbWVudEluVmlld3BvcnQiLCJlbGVtZW50IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudEhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwidG9wIiwiYm90dG9tIiwiZ2V0UmVmUG9zaXRpb24iLCJyZWZIZWlnaHQiLCJjdXJyZW50IiwiaGVpZ2h0IiwiZ2FwIiwicGFkZGluZyIsImRpYWciLCJjaGFuZ2VUb3BQb3NpdGlvbiIsImZpcnN0IiwiTWF0aCIsInJvdW5kIiwiZmlyc3RNb2IiLCJicmVha3BvaW50MSIsImJyZWFrcG9pbnQyIiwiYnJlYWtwb2ludDMiLCJwcmV2IiwiZ29Ub1NlY3Rpb24iLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJoYW5kbGVTY3JvbGwiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnRhaW5lciIsImNvbnRhaW5lcl9fY2lyY2xlQm94IiwiY29udGFpbmVyX19jaXJjbGVCb3hfX2NpcmNsZSIsImFib3V0VXNDYXJkIiwiYWJvdXRVc0NhcmRfbWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/about-us/about-us-card/index.tsx\n"));

/***/ })

});