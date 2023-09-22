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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AboutUsCard\": function() { return /* binding */ AboutUsCard; }\n/* harmony export */ });\n/* harmony import */ var D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.scss */ \"./src/components/about-us/about-us-card/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/hooks/useDevice */ \"./src/hooks/useDevice.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"D:\\\\IXNOME\\\\evo-landing\\\\frontend\\\\src\\\\components\\\\about-us\\\\about-us-card\\\\index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar AboutUsCard = function AboutUsCard(props) {\n  _s();\n\n  var card = props.card,\n      index = props.index,\n      mainItemIndex = props.mainItemIndex,\n      setMainItemIndex = props.setMainItemIndex,\n      setTop = props.setTop;\n  var title = card.title,\n      text = card.text;\n  var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  var _useDevice = (0,src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_3__.useDevice)(),\n      isMobile = _useDevice.isMobile,\n      isTablet = _useDevice.isTablet,\n      isDesktop = _useDevice.isDesktop,\n      isSmallNote = _useDevice.isSmallNote;\n\n  var isElementInViewport = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (element) {\n    var rect = element.getBoundingClientRect();\n    var clientHeight = window.innerHeight;\n    return rect.top < clientHeight / 2 && rect.bottom > clientHeight / 2;\n  }, []);\n  var getRefPosition = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (ref) {\n    var refHeight = ref.current.getBoundingClientRect().height;\n    var gap = isMobile || isTablet ? 120 : 180;\n    var padding = isDesktop ? 80 : 60;\n\n    var diag = function diag() {\n      if (isSmallNote) return 4;\n      if (isDesktop) return 1;\n      return 5;\n    };\n\n    console.log({\n      refHeight: refHeight,\n      gap: gap,\n      padding: padding,\n      diag: diag\n    });\n    return {\n      refHeight: refHeight,\n      gap: gap,\n      padding: padding,\n      diag: diag\n    };\n  }, [isMobile, isTablet, isSmallNote, isDesktop]);\n  var changeTopPosition = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (index) {\n    if (ref.current) {\n      // const refHeight = ref.current.getBoundingClientRect().height;\n      // const gap = (isMobile || isTablet) ? 120 : 180;\n      // const padding = isDesktop ? 80 : 60;\n      // const diag = () => {\n      //   if(isSmallNote) return 4;\n      //   if(isDesktop) return 1;\n      //   return 5;\n      // };\n      var _getRefPosition = getRefPosition(ref),\n          refHeight = _getRefPosition.refHeight,\n          padding = _getRefPosition.padding,\n          diag = _getRefPosition.diag,\n          gap = _getRefPosition.gap;\n\n      var first = Math.round(refHeight / 2) + padding - diag();\n      var firstMob = padding + 13;\n      var breakpoint1 = isMobile || isTablet ? firstMob : first;\n      var breakpoint2 = Math.round(refHeight + breakpoint1 + gap);\n      var breakpoint3 = Math.round(refHeight + breakpoint2 + gap);\n\n      switch (index) {\n        case -1:\n        case 0:\n          setTop(breakpoint1);\n          break;\n\n        case 1:\n          setTop(breakpoint2);\n          break;\n\n        case 2:\n        case 100:\n          setTop(breakpoint3);\n          break;\n\n        default:\n          setTop(function (prev) {\n            return prev;\n          });\n      }\n    }\n  }, [isMobile, isTablet, isDesktop, ref]);\n  var goToSection = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {\n    if (ref.current) {\n      ref.current.scrollIntoView({\n        behavior: \"smooth\",\n        block: \"center\"\n      });\n      setMainItemIndex(index);\n      changeTopPosition(index);\n    }\n  }, [ref, index, isMobile, isTablet, isDesktop]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (ref.current) {\n      var _getRefPosition2 = getRefPosition(ref),\n          refHeight = _getRefPosition2.refHeight,\n          padding = _getRefPosition2.padding,\n          diag = _getRefPosition2.diag,\n          gap = _getRefPosition2.gap;\n\n      var first = Math.round(refHeight / 2) + padding - diag();\n      var firstMob = padding + 13;\n      setTop(isMobile || isTablet ? firstMob : first);\n    }\n  }, [ref, isMobile, isTablet, isDesktop]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var handleScroll = function handleScroll() {\n      if (ref.current) {\n        if (isElementInViewport(ref.current)) {\n          setMainItemIndex(index);\n          changeTopPosition(index);\n        }\n      }\n    };\n\n    window.addEventListener(\"scroll\", handleScroll);\n    return function () {\n      window.removeEventListener(\"scroll\", handleScroll);\n    };\n  }, [index, isMobile, isTablet, isDesktop]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),\n    ref: ref,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container__circleBox),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container__circleBox__circle)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"section\", {\n      onClick: goToSection,\n      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().aboutUsCard), (0,D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().aboutUsCard_main), mainItemIndex === index)),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h1\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 135,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: text\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 136,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 125,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AboutUsCard, \"nLIoks436ixOtPF/kAfxXFylvMI=\", false, function () {\n  return [src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_3__.useDevice];\n});\n\n_c = AboutUsCard;\n\nvar _c;\n\n$RefreshReg$(_c, \"AboutUsCard\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hYm91dC11cy9hYm91dC11cy1jYXJkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQVVPLElBQU1NLFdBQW1DLEdBQUcsU0FBdENBLFdBQXNDLENBQUNDLEtBQUQsRUFBVztFQUFBOztFQUM1RCxJQUFRQyxJQUFSLEdBQWlFRCxLQUFqRSxDQUFRQyxJQUFSO0VBQUEsSUFBY0MsS0FBZCxHQUFpRUYsS0FBakUsQ0FBY0UsS0FBZDtFQUFBLElBQXFCQyxhQUFyQixHQUFpRUgsS0FBakUsQ0FBcUJHLGFBQXJCO0VBQUEsSUFBb0NDLGdCQUFwQyxHQUFpRUosS0FBakUsQ0FBb0NJLGdCQUFwQztFQUFBLElBQXNEQyxNQUF0RCxHQUFpRUwsS0FBakUsQ0FBc0RLLE1BQXREO0VBQ0EsSUFBUUMsS0FBUixHQUF3QkwsSUFBeEIsQ0FBUUssS0FBUjtFQUFBLElBQWVDLElBQWYsR0FBd0JOLElBQXhCLENBQWVNLElBQWY7RUFDQSxJQUFNQyxHQUFHLEdBQUdiLDZDQUFNLENBQWEsSUFBYixDQUFsQjs7RUFDQSxpQkFBdURHLDhEQUFTLEVBQWhFO0VBQUEsSUFBUVcsUUFBUixjQUFRQSxRQUFSO0VBQUEsSUFBa0JDLFFBQWxCLGNBQWtCQSxRQUFsQjtFQUFBLElBQTRCQyxTQUE1QixjQUE0QkEsU0FBNUI7RUFBQSxJQUF1Q0MsV0FBdkMsY0FBdUNBLFdBQXZDOztFQUVBLElBQU1DLG1CQUFtQixHQUFHcEIsa0RBQVcsQ0FBQyxVQUFDcUIsT0FBRCxFQUFrQjtJQUN4RCxJQUFNQyxJQUFJLEdBQUdELE9BQU8sQ0FBQ0UscUJBQVIsRUFBYjtJQUNBLElBQU1DLFlBQVksR0FBR0MsTUFBTSxDQUFDQyxXQUE1QjtJQUVBLE9BQU9KLElBQUksQ0FBQ0ssR0FBTCxHQUFXSCxZQUFZLEdBQUcsQ0FBMUIsSUFBK0JGLElBQUksQ0FBQ00sTUFBTCxHQUFjSixZQUFZLEdBQUcsQ0FB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O1VBQ0E2QixpQkFBaUIsQ0FBQzdCLEtBQUQsQ0FBakI7UUFDRDtNQUNGO0lBQ0YsQ0FQRDs7SUFTQWdCLE1BQU0sQ0FBQzJCLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDRCxZQUFsQztJQUVBLE9BQU8sWUFBTTtNQUNYMUIsTUFBTSxDQUFDNEIsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNGLFlBQXJDO0lBQ0QsQ0FGRDtFQUdELENBZlEsRUFlTixDQUFDMUMsS0FBRCxFQUFRTyxRQUFSLEVBQWtCQyxRQUFsQixFQUE0QkMsU0FBNUIsQ0FmTSxDQUFUO0VBaUJBLG9CQUNFO0lBQUssU0FBUyxFQUFFZCxxRUFBaEI7SUFBa0MsR0FBRyxFQUFFVyxHQUF2QztJQUFBLHdCQUNFO01BQUssU0FBUyxFQUFFWCxnRkFBaEI7TUFBQSx1QkFDRTtRQUFLLFNBQVMsRUFBRUEsd0ZBQW1Db0Q7TUFBbkQ7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FERixlQUlFO01BQ0UsT0FBTyxFQUFFVCxXQURYO01BRUUsU0FBUyxFQUFFNUMsaURBQVUsQ0FBQ0MsdUVBQUQsNEpBQ2xCQSw0RUFEa0IsRUFDUU0sYUFBYSxLQUFLRCxLQUQxQixFQUZ2QjtNQUFBLHdCQU1FO1FBQUEsVUFBS0k7TUFBTDtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBTkYsZUFPRTtRQUFBLFVBQUlDO01BQUo7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQVBGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUpGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURGO0FBZ0JELENBN0hNOztHQUFNUjtVQUk0Q0Q7OztLQUo1Q0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYWJvdXQtdXMvYWJvdXQtdXMtY2FyZC9pbmRleC50c3g/ZWZkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHsgQUJPVVRfVVMgfSBmcm9tIFwic3JjL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IHVzZURldmljZSB9IGZyb20gXCJzcmMvaG9va3MvdXNlRGV2aWNlXCI7XHJcblxyXG5pbnRlcmZhY2UgSUFib3V0VXNDYXJkIHtcclxuICBjYXJkOiAodHlwZW9mIEFCT1VUX1VTKVswXTtcclxuICBpbmRleDogbnVtYmVyO1xyXG4gIG1haW5JdGVtSW5kZXg6IG51bWJlcjtcclxuICBzZXRNYWluSXRlbUluZGV4OiAobWFpbkl0ZW1JbmRleDogbnVtYmVyKSA9PiB2b2lkO1xyXG4gIHNldFRvcDogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248bnVtYmVyPj47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBYm91dFVzQ2FyZDogUmVhY3QuRkM8SUFib3V0VXNDYXJkPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2FyZCwgaW5kZXgsIG1haW5JdGVtSW5kZXgsIHNldE1haW5JdGVtSW5kZXgsIHNldFRvcCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgeyB0aXRsZSwgdGV4dCB9ID0gY2FyZDtcclxuICBjb25zdCByZWYgPSB1c2VSZWY8YW55IHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgeyBpc01vYmlsZSwgaXNUYWJsZXQsIGlzRGVza3RvcCwgaXNTbWFsbE5vdGUgfSA9IHVzZURldmljZSgpO1xyXG5cclxuICBjb25zdCBpc0VsZW1lbnRJblZpZXdwb3J0ID0gdXNlQ2FsbGJhY2soKGVsZW1lbnQ6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCBjbGllbnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG4gICAgcmV0dXJuIHJlY3QudG9wIDwgY2xpZW50SGVpZ2h0IC8gMiAmJiByZWN0LmJvdHRvbSA+IGNsaWVudEhlaWdodCAvIDI7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBnZXRSZWZQb3NpdGlvbiA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKHJlZjogYW55KSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlZkhlaWdodCA9IHJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcclxuICAgICAgY29uc3QgZ2FwID0gaXNNb2JpbGUgfHwgaXNUYWJsZXQgPyAxMjAgOiAxODA7XHJcbiAgICAgIGNvbnN0IHBhZGRpbmcgPSBpc0Rlc2t0b3AgPyA4MCA6IDYwO1xyXG4gICAgICBjb25zdCBkaWFnID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc1NtYWxsTm90ZSkgcmV0dXJuIDQ7XHJcbiAgICAgICAgaWYgKGlzRGVza3RvcCkgcmV0dXJuIDE7XHJcbiAgICAgICAgcmV0dXJuIDU7XHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnNvbGUubG9nKHsgcmVmSGVpZ2h0LCBnYXAsIHBhZGRpbmcsIGRpYWcgfSlcclxuXHJcbiAgICAgIHJldHVybiB7IHJlZkhlaWdodCwgZ2FwLCBwYWRkaW5nLCBkaWFnIH07XHJcbiAgICB9LFxyXG4gICAgW2lzTW9iaWxlLCBpc1RhYmxldCwgaXNTbWFsbE5vdGUsIGlzRGVza3RvcF1cclxuICApO1xyXG5cclxuICBjb25zdCBjaGFuZ2VUb3BQb3NpdGlvbiA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChyZWYuY3VycmVudCkge1xyXG4gICAgICAgIC8vIGNvbnN0IHJlZkhlaWdodCA9IHJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcclxuICAgICAgICAvLyBjb25zdCBnYXAgPSAoaXNNb2JpbGUgfHwgaXNUYWJsZXQpID8gMTIwIDogMTgwO1xyXG4gICAgICAgIC8vIGNvbnN0IHBhZGRpbmcgPSBpc0Rlc2t0b3AgPyA4MCA6IDYwO1xyXG4gICAgICAgIC8vIGNvbnN0IGRpYWcgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gICBpZihpc1NtYWxsTm90ZSkgcmV0dXJuIDQ7XHJcbiAgICAgICAgLy8gICBpZihpc0Rlc2t0b3ApIHJldHVybiAxO1xyXG4gICAgICAgIC8vICAgcmV0dXJuIDU7XHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgICBjb25zdCB7IHJlZkhlaWdodCwgcGFkZGluZywgZGlhZywgZ2FwIH0gPSBnZXRSZWZQb3NpdGlvbihyZWYpO1xyXG5cclxuICAgICAgICBjb25zdCBmaXJzdCA9IE1hdGgucm91bmQocmVmSGVpZ2h0IC8gMikgKyBwYWRkaW5nIC0gZGlhZygpO1xyXG4gICAgICAgIGNvbnN0IGZpcnN0TW9iID0gcGFkZGluZyArIDEzO1xyXG5cclxuICAgICAgICBjb25zdCBicmVha3BvaW50MSA9IGlzTW9iaWxlIHx8IGlzVGFibGV0ID8gZmlyc3RNb2IgOiBmaXJzdDtcclxuICAgICAgICBjb25zdCBicmVha3BvaW50MiA9IE1hdGgucm91bmQocmVmSGVpZ2h0ICsgYnJlYWtwb2ludDEgKyBnYXApO1xyXG4gICAgICAgIGNvbnN0IGJyZWFrcG9pbnQzID0gTWF0aC5yb3VuZChyZWZIZWlnaHQgKyBicmVha3BvaW50MiArIGdhcCk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoaW5kZXgpIHtcclxuICAgICAgICAgIGNhc2UgLTE6XHJcbiAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgIHNldFRvcChicmVha3BvaW50MSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICBzZXRUb3AoYnJlYWtwb2ludDIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgIGNhc2UgMTAwOlxyXG4gICAgICAgICAgICBzZXRUb3AoYnJlYWtwb2ludDMpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHNldFRvcCgocHJldjogbnVtYmVyKSA9PiBwcmV2KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBbaXNNb2JpbGUsIGlzVGFibGV0LCBpc0Rlc2t0b3AsIHJlZl1cclxuICApO1xyXG5cclxuICBjb25zdCBnb1RvU2VjdGlvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmIChyZWYuY3VycmVudCkge1xyXG4gICAgICByZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgICAgICAgYmxvY2s6IFwiY2VudGVyXCIsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc2V0TWFpbkl0ZW1JbmRleChpbmRleCk7XHJcbiAgICAgIGNoYW5nZVRvcFBvc2l0aW9uKGluZGV4KTtcclxuICAgIH1cclxuICB9LCBbcmVmLCBpbmRleCwgaXNNb2JpbGUsIGlzVGFibGV0LCBpc0Rlc2t0b3BdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChyZWYuY3VycmVudCkge1xyXG4gICAgICBjb25zdCB7IHJlZkhlaWdodCwgcGFkZGluZywgZGlhZywgZ2FwIH0gPSBnZXRSZWZQb3NpdGlvbihyZWYpO1xyXG4gICAgICBjb25zdCBmaXJzdCA9IE1hdGgucm91bmQocmVmSGVpZ2h0IC8gMikgKyBwYWRkaW5nIC0gZGlhZygpO1xyXG4gICAgICBjb25zdCBmaXJzdE1vYiA9IHBhZGRpbmcgKyAxMztcclxuXHJcbiAgICAgIHNldFRvcChpc01vYmlsZSB8fCBpc1RhYmxldCA/IGZpcnN0TW9iIDogZmlyc3QpO1xyXG4gICAgfVxyXG4gIH0sIFtyZWYsIGlzTW9iaWxlLCBpc1RhYmxldCwgaXNEZXNrdG9wXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChyZWYuY3VycmVudCkge1xyXG4gICAgICAgIGlmIChpc0VsZW1lbnRJblZpZXdwb3J0KHJlZi5jdXJyZW50KSkge1xyXG4gICAgICAgICAgc2V0TWFpbkl0ZW1JbmRleChpbmRleCk7XHJcbiAgICAgICAgICBjaGFuZ2VUb3BQb3NpdGlvbihpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW2luZGV4LCBpc01vYmlsZSwgaXNUYWJsZXQsIGlzRGVza3RvcF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9IHJlZj17cmVmfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2NpcmNsZUJveH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2NpcmNsZUJveF9fY2lyY2xlfT48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzZWN0aW9uXHJcbiAgICAgICAgb25DbGljaz17Z29Ub1NlY3Rpb259XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5hYm91dFVzQ2FyZCwge1xyXG4gICAgICAgICAgW3N0eWxlcy5hYm91dFVzQ2FyZF9tYWluXTogbWFpbkl0ZW1JbmRleCA9PT0gaW5kZXgsXHJcbiAgICAgICAgfSl9XHJcbiAgICAgID5cclxuICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgPHA+e3RleHR9PC9wPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJjbGFzc05hbWVzIiwic3R5bGVzIiwidXNlRGV2aWNlIiwiQWJvdXRVc0NhcmQiLCJwcm9wcyIsImNhcmQiLCJpbmRleCIsIm1haW5JdGVtSW5kZXgiLCJzZXRNYWluSXRlbUluZGV4Iiwic2V0VG9wIiwidGl0bGUiLCJ0ZXh0IiwicmVmIiwiaXNNb2JpbGUiLCJpc1RhYmxldCIsImlzRGVza3RvcCIsImlzU21hbGxOb3RlIiwiaXNFbGVtZW50SW5WaWV3cG9ydCIsImVsZW1lbnQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50SGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ0b3AiLCJib3R0b20iLCJnZXRSZWZQb3NpdGlvbiIsInJlZkhlaWdodCIsImN1cnJlbnQiLCJoZWlnaHQiLCJnYXAiLCJwYWRkaW5nIiwiZGlhZyIsImNvbnNvbGUiLCJsb2ciLCJjaGFuZ2VUb3BQb3NpdGlvbiIsImZpcnN0IiwiTWF0aCIsInJvdW5kIiwiZmlyc3RNb2IiLCJicmVha3BvaW50MSIsImJyZWFrcG9pbnQyIiwiYnJlYWtwb2ludDMiLCJwcmV2IiwiZ29Ub1NlY3Rpb24iLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJoYW5kbGVTY3JvbGwiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnRhaW5lciIsImNvbnRhaW5lcl9fY2lyY2xlQm94IiwiY29udGFpbmVyX19jaXJjbGVCb3hfX2NpcmNsZSIsImFib3V0VXNDYXJkIiwiYWJvdXRVc0NhcmRfbWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/about-us/about-us-card/index.tsx\n"));

/***/ })

});