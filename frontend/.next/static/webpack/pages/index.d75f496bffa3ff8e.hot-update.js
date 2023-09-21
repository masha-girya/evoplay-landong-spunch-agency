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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AboutUsCard\": function() { return /* binding */ AboutUsCard; }\n/* harmony export */ });\n/* harmony import */ var D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.scss */ \"./src/components/about-us/about-us-card/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/hooks/useDevice */ \"./src/hooks/useDevice.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"D:\\\\IXNOME\\\\evo-landing\\\\frontend\\\\src\\\\components\\\\about-us\\\\about-us-card\\\\index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar AboutUsCard = function AboutUsCard(props) {\n  _s();\n\n  var card = props.card,\n      index = props.index,\n      mainItemIndex = props.mainItemIndex,\n      setMainItemIndex = props.setMainItemIndex,\n      setTop = props.setTop;\n  var title = card.title,\n      text = card.text;\n  var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  var _useDevice = (0,src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_3__.useDevice)(),\n      isMobile = _useDevice.isMobile,\n      isTablet = _useDevice.isTablet,\n      isDesktop = _useDevice.isDesktop;\n\n  var isElementInViewport = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (element) {\n    var rect = element.getBoundingClientRect();\n    var clientHeight = window.innerHeight;\n    return rect.top < clientHeight / 2 && rect.bottom > clientHeight / 2;\n  }, []);\n  var changeTopPosition = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (index) {\n    if (ref.current) {\n      var refHeight = ref.current.getBoundingClientRect().height;\n      var gap = isMobile || isTablet ? 120 : 180;\n      var padding = isDesktop ? 80 : 60;\n      var diag = isDesktop ? 3 : 5;\n      var first = Math.round(refHeight / 2) + padding - diag;\n      var firstMob = padding + 13;\n      var breakpoint1 = isMobile || isTablet ? firstMob : first;\n      var breakpoint2 = Math.round(refHeight + breakpoint1 + gap);\n      var breakpoint3 = Math.round(refHeight + breakpoint2 + gap);\n\n      switch (index) {\n        case 0:\n          setTop(breakpoint1);\n          break;\n\n        case 1:\n          setTop(breakpoint2);\n          break;\n\n        case 2:\n          setTop(breakpoint3);\n          break;\n\n        default:\n          setTop(function (prev) {\n            return prev;\n          });\n      }\n    }\n  }, [isMobile, isTablet, isDesktop, ref]);\n  var goToSection = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {\n    if (ref.current) {\n      ref.current.scrollIntoView({\n        behavior: \"smooth\",\n        block: \"center\"\n      });\n      setMainItemIndex(index);\n      changeTopPosition(index);\n    }\n  }, [ref, index, isMobile, isTablet, isDesktop]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var handleScroll = function handleScroll() {\n      if (ref.current) {\n        if (isElementInViewport(ref.current)) {\n          setMainItemIndex(index);\n          changeTopPosition(index);\n        }\n      }\n    };\n\n    window.addEventListener(\"scroll\", handleScroll);\n    return function () {\n      window.removeEventListener(\"scroll\", handleScroll);\n    };\n  }, [index, isMobile, isTablet, isDesktop]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),\n    ref: ref,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container__circleBox),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container__circleBox__circle)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"section\", {\n      onClick: goToSection,\n      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().aboutUsCard), (0,D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().aboutUsCard_main), mainItemIndex === index)),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h1\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: text\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 89,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AboutUsCard, \"QNeVwexNrq2gb5JIYWLpiLFS38c=\", false, function () {\n  return [src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_3__.useDevice];\n});\n\n_c = AboutUsCard;\n\nvar _c;\n\n$RefreshReg$(_c, \"AboutUsCard\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hYm91dC11cy9hYm91dC11cy1jYXJkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQVVPLElBQU1NLFdBQW1DLEdBQUcsU0FBdENBLFdBQXNDLENBQUNDLEtBQUQsRUFBVztFQUFBOztFQUM1RCxJQUFRQyxJQUFSLEdBQWlFRCxLQUFqRSxDQUFRQyxJQUFSO0VBQUEsSUFBY0MsS0FBZCxHQUFpRUYsS0FBakUsQ0FBY0UsS0FBZDtFQUFBLElBQXFCQyxhQUFyQixHQUFpRUgsS0FBakUsQ0FBcUJHLGFBQXJCO0VBQUEsSUFBb0NDLGdCQUFwQyxHQUFpRUosS0FBakUsQ0FBb0NJLGdCQUFwQztFQUFBLElBQXNEQyxNQUF0RCxHQUFpRUwsS0FBakUsQ0FBc0RLLE1BQXREO0VBQ0EsSUFBUUMsS0FBUixHQUF3QkwsSUFBeEIsQ0FBUUssS0FBUjtFQUFBLElBQWVDLElBQWYsR0FBd0JOLElBQXhCLENBQWVNLElBQWY7RUFDQSxJQUFNQyxHQUFHLEdBQUdiLDZDQUFNLENBQWEsSUFBYixDQUFsQjs7RUFDQSxpQkFBMENHLDhEQUFTLEVBQW5EO0VBQUEsSUFBUVcsUUFBUixjQUFRQSxRQUFSO0VBQUEsSUFBa0JDLFFBQWxCLGNBQWtCQSxRQUFsQjtFQUFBLElBQTRCQyxTQUE1QixjQUE0QkEsU0FBNUI7O0VBRUEsSUFBTUMsbUJBQW1CLEdBQUduQixrREFBVyxDQUFDLFVBQUNvQixPQUFELEVBQWtCO0lBQ3hELElBQU1DLElBQUksR0FBR0QsT0FBTyxDQUFDRSxxQkFBUixFQUFiO0lBQ0EsSUFBTUMsWUFBWSxHQUFHQyxNQUFNLENBQUNDLFdBQTVCO0lBRUEsT0FBT0osSUFBSSxDQUFDSyxHQUFMLEdBQVdILFlBQVksR0FBRyxDQUExQixJQUErQkYsSUFBSSxDQUFDTSxNQUFMLEdBQWNKLFlBQVksR0FBRyxDQUFuRTtFQUNELENBTHNDLEVBS3BDLEVBTG9DLENBQXZD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LHdCQUNFO01BQUssU0FBUyxFQUFFWCxnRkFBaEI7TUFBQSx1QkFDRTtRQUFLLFNBQVMsRUFBRUEsd0ZBQW1DZ0Q7TUFBbkQ7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FERixlQUlFO01BQ0UsT0FBTyxFQUFFVCxXQURYO01BRUUsU0FBUyxFQUFFeEMsaURBQVUsQ0FBQ0MsdUVBQUQsNEpBQ2xCQSw0RUFEa0IsRUFDUU0sYUFBYSxLQUFLRCxLQUQxQixFQUZ2QjtNQUFBLHdCQU1FO1FBQUEsVUFBS0k7TUFBTDtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBTkYsZUFPRTtRQUFBLFVBQUlDO01BQUo7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQVBGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUpGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURGO0FBZ0JELENBekZNOztHQUFNUjtVQUkrQkQ7OztLQUovQkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYWJvdXQtdXMvYWJvdXQtdXMtY2FyZC9pbmRleC50c3g/ZWZkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHsgQUJPVVRfVVMgfSBmcm9tIFwic3JjL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IHVzZURldmljZSB9IGZyb20gXCJzcmMvaG9va3MvdXNlRGV2aWNlXCI7XHJcblxyXG5pbnRlcmZhY2UgSUFib3V0VXNDYXJkIHtcclxuICBjYXJkOiAodHlwZW9mIEFCT1VUX1VTKVswXTtcclxuICBpbmRleDogbnVtYmVyO1xyXG4gIG1haW5JdGVtSW5kZXg6IG51bWJlcjtcclxuICBzZXRNYWluSXRlbUluZGV4OiAobWFpbkl0ZW1JbmRleDogbnVtYmVyKSA9PiB2b2lkO1xyXG4gIHNldFRvcDogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248bnVtYmVyPj47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBYm91dFVzQ2FyZDogUmVhY3QuRkM8SUFib3V0VXNDYXJkPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2FyZCwgaW5kZXgsIG1haW5JdGVtSW5kZXgsIHNldE1haW5JdGVtSW5kZXgsIHNldFRvcCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgeyB0aXRsZSwgdGV4dCB9ID0gY2FyZDtcclxuICBjb25zdCByZWYgPSB1c2VSZWY8YW55IHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgeyBpc01vYmlsZSwgaXNUYWJsZXQsIGlzRGVza3RvcCB9ID0gdXNlRGV2aWNlKCk7XHJcblxyXG4gIGNvbnN0IGlzRWxlbWVudEluVmlld3BvcnQgPSB1c2VDYWxsYmFjaygoZWxlbWVudDogYW55KSA9PiB7XHJcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IGNsaWVudEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgICByZXR1cm4gcmVjdC50b3AgPCBjbGllbnRIZWlnaHQgLyAyICYmIHJlY3QuYm90dG9tID4gY2xpZW50SGVpZ2h0IC8gMjtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGNoYW5nZVRvcFBvc2l0aW9uID0gdXNlQ2FsbGJhY2soKGluZGV4KSA9PiB7XHJcbiAgICBpZihyZWYuY3VycmVudCkge1xyXG4gICAgICBjb25zdCByZWZIZWlnaHQgPSByZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XHJcbiAgICAgIGNvbnN0IGdhcCA9IChpc01vYmlsZSB8fCBpc1RhYmxldCkgPyAxMjAgOiAxODA7XHJcbiAgICAgIGNvbnN0IHBhZGRpbmcgPSBpc0Rlc2t0b3AgPyA4MCA6IDYwO1xyXG4gICAgICBjb25zdCBkaWFnID0gaXNEZXNrdG9wID8gMyA6IDU7XHJcblxyXG4gICAgICBjb25zdCBmaXJzdCA9IE1hdGgucm91bmQocmVmSGVpZ2h0IC8gMikgKyBwYWRkaW5nIC0gZGlhZztcclxuICAgICAgY29uc3QgZmlyc3RNb2IgPSBwYWRkaW5nICsgMTM7XHJcblxyXG4gICAgICBjb25zdCBicmVha3BvaW50MSA9IChpc01vYmlsZSB8fCBpc1RhYmxldCkgPyBmaXJzdE1vYiA6IGZpcnN0O1xyXG4gICAgICBjb25zdCBicmVha3BvaW50MiA9IE1hdGgucm91bmQocmVmSGVpZ2h0ICsgYnJlYWtwb2ludDEgKyBnYXApO1xyXG4gICAgICBjb25zdCBicmVha3BvaW50MyA9IE1hdGgucm91bmQocmVmSGVpZ2h0ICsgYnJlYWtwb2ludDIgKyBnYXApO1xyXG4gIFxyXG4gICAgICBzd2l0Y2goaW5kZXgpIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICBzZXRUb3AoYnJlYWtwb2ludDEpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgc2V0VG9wKGJyZWFrcG9pbnQyKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgIHNldFRvcChicmVha3BvaW50Myk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgc2V0VG9wKChwcmV2OiBudW1iZXIpID0+IHByZXYpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH0sIFtpc01vYmlsZSwgaXNUYWJsZXQsIGlzRGVza3RvcCwgcmVmXSk7XHJcblxyXG4gIGNvbnN0IGdvVG9TZWN0aW9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKHJlZi5jdXJyZW50KSB7XHJcbiAgICAgIHJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHtcclxuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcclxuICAgICAgICBibG9jazogXCJjZW50ZXJcIixcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZXRNYWluSXRlbUluZGV4KGluZGV4KTtcclxuICAgICAgY2hhbmdlVG9wUG9zaXRpb24oaW5kZXgpXHJcbiAgICB9XHJcbiAgfSwgW3JlZiwgaW5kZXgsIGlzTW9iaWxlLCBpc1RhYmxldCwgaXNEZXNrdG9wXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChyZWYuY3VycmVudCkge1xyXG4gICAgICAgIGlmIChpc0VsZW1lbnRJblZpZXdwb3J0KHJlZi5jdXJyZW50KSkge1xyXG4gICAgICAgICAgc2V0TWFpbkl0ZW1JbmRleChpbmRleCk7XHJcbiAgICAgICAgICBjaGFuZ2VUb3BQb3NpdGlvbihpbmRleClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgfTtcclxuICB9LCBbaW5kZXgsIGlzTW9iaWxlLCBpc1RhYmxldCwgaXNEZXNrdG9wXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gcmVmPXtyZWZ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fY2lyY2xlQm94fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fY2lyY2xlQm94X19jaXJjbGV9PjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHNlY3Rpb25cclxuICAgICAgICBvbkNsaWNrPXtnb1RvU2VjdGlvbn1cclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmFib3V0VXNDYXJkLCB7XHJcbiAgICAgICAgICBbc3R5bGVzLmFib3V0VXNDYXJkX21haW5dOiBtYWluSXRlbUluZGV4ID09PSBpbmRleCxcclxuICAgICAgICB9KX1cclxuICAgICAgPlxyXG4gICAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgICA8cD57dGV4dH08L3A+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVJlZiIsImNsYXNzTmFtZXMiLCJzdHlsZXMiLCJ1c2VEZXZpY2UiLCJBYm91dFVzQ2FyZCIsInByb3BzIiwiY2FyZCIsImluZGV4IiwibWFpbkl0ZW1JbmRleCIsInNldE1haW5JdGVtSW5kZXgiLCJzZXRUb3AiLCJ0aXRsZSIsInRleHQiLCJyZWYiLCJpc01vYmlsZSIsImlzVGFibGV0IiwiaXNEZXNrdG9wIiwiaXNFbGVtZW50SW5WaWV3cG9ydCIsImVsZW1lbnQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50SGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ0b3AiLCJib3R0b20iLCJjaGFuZ2VUb3BQb3NpdGlvbiIsImN1cnJlbnQiLCJyZWZIZWlnaHQiLCJoZWlnaHQiLCJnYXAiLCJwYWRkaW5nIiwiZGlhZyIsImZpcnN0IiwiTWF0aCIsInJvdW5kIiwiZmlyc3RNb2IiLCJicmVha3BvaW50MSIsImJyZWFrcG9pbnQyIiwiYnJlYWtwb2ludDMiLCJwcmV2IiwiZ29Ub1NlY3Rpb24iLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJoYW5kbGVTY3JvbGwiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnRhaW5lciIsImNvbnRhaW5lcl9fY2lyY2xlQm94IiwiY29udGFpbmVyX19jaXJjbGVCb3hfX2NpcmNsZSIsImFib3V0VXNDYXJkIiwiYWJvdXRVc0NhcmRfbWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/about-us/about-us-card/index.tsx\n"));

/***/ })

});