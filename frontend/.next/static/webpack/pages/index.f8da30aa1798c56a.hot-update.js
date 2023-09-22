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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AboutUsCard\": function() { return /* binding */ AboutUsCard; }\n/* harmony export */ });\n/* harmony import */ var D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/hooks/useDevice */ \"./src/hooks/useDevice.ts\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.scss */ \"./src/components/about-us/about-us-card/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"D:\\\\IXNOME\\\\evo-landing\\\\frontend\\\\src\\\\components\\\\about-us\\\\about-us-card\\\\index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar AboutUsCard = function AboutUsCard(props) {\n  _s();\n\n  var card = props.card,\n      index = props.index,\n      mainItemIndex = props.mainItemIndex,\n      setMainItemIndex = props.setMainItemIndex,\n      setTop = props.setTop;\n  var title = card.title,\n      text = card.text;\n  var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n  var refCircle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  var _useDevice = (0,src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_3__.useDevice)(),\n      isMobile = _useDevice.isMobile,\n      isTablet = _useDevice.isTablet,\n      isDesktop = _useDevice.isDesktop,\n      isSmallNote = _useDevice.isSmallNote;\n\n  var isElementInViewport = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (element) {\n    var rect = element.getBoundingClientRect();\n    var clientHeight = window.innerHeight;\n    return rect.top < clientHeight / 2 && rect.bottom > clientHeight / 2;\n  }, []);\n  var getRefPosition = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (ref) {\n    var refHeight = ref.current.getBoundingClientRect().height;\n    var gap = isMobile || isTablet ? 120 : 180;\n    var padding = isDesktop ? 80 : 60;\n\n    var diag = function diag() {\n      if (isSmallNote) return 4;\n      if (isDesktop) return 1;\n      return 5;\n    };\n\n    var first = Math.floor(refHeight / 2) + padding - 0;\n    var firstMob = padding + 13;\n    return {\n      refHeight: refHeight,\n      gap: gap,\n      first: first,\n      firstMob: firstMob\n    };\n  }, [isMobile, isTablet, isSmallNote, isDesktop]);\n  var changeTopPosition = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (index) {\n    if (ref.current && refCircle.current) {\n      var _getRefPosition = getRefPosition(ref),\n          refHeight = _getRefPosition.refHeight,\n          first = _getRefPosition.first,\n          firstMob = _getRefPosition.firstMob,\n          gap = _getRefPosition.gap;\n\n      var breakpoint1 = isMobile || isTablet ? firstMob : first;\n      var breakpoint2 = Math.floor(refHeight + breakpoint1 + gap);\n      var breakpoint3 = Math.round(refHeight + breakpoint2 + gap);\n\n      switch (index) {\n        case -1:\n        case 0:\n          setTop(breakpoint1);\n          break;\n\n        case 1:\n          setTop(breakpoint2);\n          break;\n\n        case 2:\n        case 100:\n          setTop(breakpoint3);\n          break;\n\n        default:\n          setTop(function (prev) {\n            return prev;\n          });\n      }\n    }\n  }, [isMobile, isTablet, isDesktop, ref]);\n  var goToSection = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {\n    if (ref.current) {\n      ref.current.scrollIntoView({\n        behavior: \"smooth\",\n        block: \"center\"\n      });\n      setMainItemIndex(index);\n      changeTopPosition(index);\n    }\n  }, [ref, index, isMobile, isTablet, isDesktop]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (ref.current) {\n      var _getRefPosition2 = getRefPosition(ref),\n          first = _getRefPosition2.first,\n          firstMob = _getRefPosition2.firstMob;\n\n      setTop(isMobile || isTablet ? firstMob : first);\n    }\n  }, [ref, isMobile, isTablet, isSmallNote, isDesktop]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var handleScroll = function handleScroll() {\n      // if(refCircle.current) {\n      //   console.log(refCircle.current.getBoundingClientRect());\n      // }\n      if (ref.current) {\n        if (isElementInViewport(ref.current)) {\n          setMainItemIndex(index);\n          changeTopPosition(index);\n        }\n      }\n    };\n\n    window.addEventListener(\"scroll\", handleScroll);\n    return function () {\n      window.removeEventListener(\"scroll\", handleScroll);\n    };\n  }, [index, isMobile, isTablet, isDesktop]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),\n    ref: ref,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container__circleBox),\n      ref: refCircle,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container__circleBox__circle)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"section\", {\n      onClick: goToSection,\n      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().aboutUsCard), (0,D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().aboutUsCard_main), mainItemIndex === index)),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h1\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 128,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: text\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 118,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AboutUsCard, \"+RSudrRWbbVGQwpvYlsVHgoni/s=\", false, function () {\n  return [src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_3__.useDevice];\n});\n\n_c = AboutUsCard;\n\nvar _c;\n\n$RefreshReg$(_c, \"AboutUsCard\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hYm91dC11cy9hYm91dC11cy1jYXJkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQVVPLElBQU1NLFdBQW1DLEdBQUcsU0FBdENBLFdBQXNDLENBQUNDLEtBQUQsRUFBVztFQUFBOztFQUM1RCxJQUFRQyxJQUFSLEdBQWlFRCxLQUFqRSxDQUFRQyxJQUFSO0VBQUEsSUFBY0MsS0FBZCxHQUFpRUYsS0FBakUsQ0FBY0UsS0FBZDtFQUFBLElBQXFCQyxhQUFyQixHQUFpRUgsS0FBakUsQ0FBcUJHLGFBQXJCO0VBQUEsSUFBb0NDLGdCQUFwQyxHQUFpRUosS0FBakUsQ0FBb0NJLGdCQUFwQztFQUFBLElBQXNEQyxNQUF0RCxHQUFpRUwsS0FBakUsQ0FBc0RLLE1BQXREO0VBQ0EsSUFBUUMsS0FBUixHQUF3QkwsSUFBeEIsQ0FBUUssS0FBUjtFQUFBLElBQWVDLElBQWYsR0FBd0JOLElBQXhCLENBQWVNLElBQWY7RUFDQSxJQUFNQyxHQUFHLEdBQUdiLDZDQUFNLENBQWEsSUFBYixDQUFsQjtFQUNBLElBQU1jLFNBQVMsR0FBR2QsNkNBQU0sQ0FBYSxJQUFiLENBQXhCOztFQUNBLGlCQUF1REUsOERBQVMsRUFBaEU7RUFBQSxJQUFRYSxRQUFSLGNBQVFBLFFBQVI7RUFBQSxJQUFrQkMsUUFBbEIsY0FBa0JBLFFBQWxCO0VBQUEsSUFBNEJDLFNBQTVCLGNBQTRCQSxTQUE1QjtFQUFBLElBQXVDQyxXQUF2QyxjQUF1Q0EsV0FBdkM7O0VBRUEsSUFBTUMsbUJBQW1CLEdBQUdyQixrREFBVyxDQUFDLFVBQUNzQixPQUFELEVBQWtCO0lBQ3hELElBQU1DLElBQUksR0FBR0QsT0FBTyxDQUFDRSxxQkFBUixFQUFiO0lBQ0EsSUFBTUMsWUFBWSxHQUFHQyxNQUFNLENBQUNDLFdBQTVCO0lBRUEsT0FBT0osSUFBSSxDQUFDSyxHQUFMLEdBQVdILFlBQVksR0FBRyxDQUEx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QkFDRTtJQUFLLFNBQVMsRUFBRWQscUVBQWhCO0lBQWtDLEdBQUcsRUFBRVUsR0FBdkM7SUFBQSx3QkFDRTtNQUFLLFNBQVMsRUFBRVYsZ0ZBQWhCO01BQTZDLEdBQUcsRUFBRVcsU0FBbEQ7TUFBQSx1QkFDRTtRQUFLLFNBQVMsRUFBRVgsd0ZBQW1DbUQ7TUFBbkQ7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FERixlQUlFO01BQ0UsT0FBTyxFQUFFVCxXQURYO01BRUUsU0FBUyxFQUFFNUMsaURBQVUsQ0FBQ0UsdUVBQUQsNEpBQ2xCQSw0RUFEa0IsRUFDUUssYUFBYSxLQUFLRCxLQUQxQixFQUZ2QjtNQUFBLHdCQU1FO1FBQUEsVUFBS0k7TUFBTDtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBTkYsZUFPRTtRQUFBLFVBQUlDO01BQUo7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQVBGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUpGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURGO0FBZ0JELENBdEhNOztHQUFNUjtVQUs0Q0Y7OztLQUw1Q0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYWJvdXQtdXMvYWJvdXQtdXMtY2FyZC9pbmRleC50c3g/ZWZkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHsgdXNlRGV2aWNlIH0gZnJvbSBcInNyYy9ob29rcy91c2VEZXZpY2VcIjtcclxuaW1wb3J0IHsgQUJPVVRfVVMgfSBmcm9tIFwic3JjL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5zY3NzXCI7XHJcblxyXG5pbnRlcmZhY2UgSUFib3V0VXNDYXJkIHtcclxuICBjYXJkOiAodHlwZW9mIEFCT1VUX1VTKVswXTtcclxuICBpbmRleDogbnVtYmVyO1xyXG4gIG1haW5JdGVtSW5kZXg6IG51bWJlcjtcclxuICBzZXRNYWluSXRlbUluZGV4OiAobWFpbkl0ZW1JbmRleDogbnVtYmVyKSA9PiB2b2lkO1xyXG4gIHNldFRvcDogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248bnVtYmVyPj47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBYm91dFVzQ2FyZDogUmVhY3QuRkM8SUFib3V0VXNDYXJkPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2FyZCwgaW5kZXgsIG1haW5JdGVtSW5kZXgsIHNldE1haW5JdGVtSW5kZXgsIHNldFRvcCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgeyB0aXRsZSwgdGV4dCB9ID0gY2FyZDtcclxuICBjb25zdCByZWYgPSB1c2VSZWY8YW55IHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgcmVmQ2lyY2xlID0gdXNlUmVmPGFueSB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IHsgaXNNb2JpbGUsIGlzVGFibGV0LCBpc0Rlc2t0b3AsIGlzU21hbGxOb3RlIH0gPSB1c2VEZXZpY2UoKTtcclxuXHJcbiAgY29uc3QgaXNFbGVtZW50SW5WaWV3cG9ydCA9IHVzZUNhbGxiYWNrKChlbGVtZW50OiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgY2xpZW50SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuICAgIHJldHVybiByZWN0LnRvcCA8IGNsaWVudEhlaWdodCAvIDIgJiYgcmVjdC5ib3R0b20gPiBjbGllbnRIZWlnaHQgLyAyO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZ2V0UmVmUG9zaXRpb24gPSB1c2VDYWxsYmFjayhcclxuICAgIChyZWY6IGFueSkgPT4ge1xyXG4gICAgICBjb25zdCByZWZIZWlnaHQgPSByZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XHJcbiAgICAgIGNvbnN0IGdhcCA9IGlzTW9iaWxlIHx8IGlzVGFibGV0ID8gMTIwIDogMTgwO1xyXG4gICAgICBjb25zdCBwYWRkaW5nID0gaXNEZXNrdG9wID8gODAgOiA2MDtcclxuICAgICAgY29uc3QgZGlhZyA9ICgpID0+IHtcclxuICAgICAgICBpZiAoaXNTbWFsbE5vdGUpIHJldHVybiA0O1xyXG4gICAgICAgIGlmIChpc0Rlc2t0b3ApIHJldHVybiAxO1xyXG4gICAgICAgIHJldHVybiA1O1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgZmlyc3QgPSBNYXRoLmZsb29yKHJlZkhlaWdodCAvIDIpICsgcGFkZGluZyAtIDA7XHJcbiAgICAgIGNvbnN0IGZpcnN0TW9iID0gcGFkZGluZyArIDEzO1xyXG5cclxuICAgICAgcmV0dXJuIHsgcmVmSGVpZ2h0LCBnYXAsIGZpcnN0LCBmaXJzdE1vYiB9O1xyXG4gICAgfSxcclxuICAgIFtpc01vYmlsZSwgaXNUYWJsZXQsIGlzU21hbGxOb3RlLCBpc0Rlc2t0b3BdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgY2hhbmdlVG9wUG9zaXRpb24gPSB1c2VDYWxsYmFjayhcclxuICAgIChpbmRleCkgPT4ge1xyXG4gICAgICBpZiAocmVmLmN1cnJlbnQgJiYgcmVmQ2lyY2xlLmN1cnJlbnQpIHtcclxuICAgICAgICBjb25zdCB7IHJlZkhlaWdodCwgZmlyc3QsIGZpcnN0TW9iLCBnYXAgfSA9IGdldFJlZlBvc2l0aW9uKHJlZik7XHJcblxyXG4gICAgICAgIGNvbnN0IGJyZWFrcG9pbnQxID0gaXNNb2JpbGUgfHwgaXNUYWJsZXQgPyBmaXJzdE1vYiA6IGZpcnN0O1xyXG4gICAgICAgIGNvbnN0IGJyZWFrcG9pbnQyID0gTWF0aC5mbG9vcihyZWZIZWlnaHQgKyBicmVha3BvaW50MSArIGdhcCk7XHJcbiAgICAgICAgY29uc3QgYnJlYWtwb2ludDMgPSBNYXRoLnJvdW5kKHJlZkhlaWdodCArIGJyZWFrcG9pbnQyICsgZ2FwKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChpbmRleCkge1xyXG4gICAgICAgICAgY2FzZSAtMTpcclxuICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgc2V0VG9wKGJyZWFrcG9pbnQxKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgIHNldFRvcChicmVha3BvaW50Mik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgY2FzZSAxMDA6XHJcbiAgICAgICAgICAgIHNldFRvcChicmVha3BvaW50Myk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgc2V0VG9wKChwcmV2OiBudW1iZXIpID0+IHByZXYpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFtpc01vYmlsZSwgaXNUYWJsZXQsIGlzRGVza3RvcCwgcmVmXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGdvVG9TZWN0aW9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKHJlZi5jdXJyZW50KSB7XHJcbiAgICAgIHJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHtcclxuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcclxuICAgICAgICBibG9jazogXCJjZW50ZXJcIixcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZXRNYWluSXRlbUluZGV4KGluZGV4KTtcclxuICAgICAgY2hhbmdlVG9wUG9zaXRpb24oaW5kZXgpO1xyXG4gICAgfVxyXG4gIH0sIFtyZWYsIGluZGV4LCBpc01vYmlsZSwgaXNUYWJsZXQsIGlzRGVza3RvcF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJlZi5jdXJyZW50KSB7XHJcbiAgICAgIGNvbnN0IHsgZmlyc3QsIGZpcnN0TW9iIH0gPSBnZXRSZWZQb3NpdGlvbihyZWYpO1xyXG5cclxuICAgICAgc2V0VG9wKGlzTW9iaWxlIHx8IGlzVGFibGV0ID8gZmlyc3RNb2IgOiBmaXJzdCk7XHJcbiAgICB9XHJcbiAgfSwgW3JlZiwgaXNNb2JpbGUsIGlzVGFibGV0LCBpc1NtYWxsTm90ZSwgaXNEZXNrdG9wXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgIC8vIGlmKHJlZkNpcmNsZS5jdXJyZW50KSB7XHJcbiAgICAgIC8vICAgY29uc29sZS5sb2cocmVmQ2lyY2xlLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIGlmIChyZWYuY3VycmVudCkge1xyXG4gICAgICAgIGlmIChpc0VsZW1lbnRJblZpZXdwb3J0KHJlZi5jdXJyZW50KSkge1xyXG4gICAgICAgICAgc2V0TWFpbkl0ZW1JbmRleChpbmRleCk7XHJcbiAgICAgICAgICBjaGFuZ2VUb3BQb3NpdGlvbihpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW2luZGV4LCBpc01vYmlsZSwgaXNUYWJsZXQsIGlzRGVza3RvcF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9IHJlZj17cmVmfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2NpcmNsZUJveH0gcmVmPXtyZWZDaXJjbGV9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19jaXJjbGVCb3hfX2NpcmNsZX0+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c2VjdGlvblxyXG4gICAgICAgIG9uQ2xpY2s9e2dvVG9TZWN0aW9ufVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuYWJvdXRVc0NhcmQsIHtcclxuICAgICAgICAgIFtzdHlsZXMuYWJvdXRVc0NhcmRfbWFpbl06IG1haW5JdGVtSW5kZXggPT09IGluZGV4LFxyXG4gICAgICAgIH0pfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICAgIDxwPnt0ZXh0fTwvcD5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiY2xhc3NOYW1lcyIsInVzZURldmljZSIsInN0eWxlcyIsIkFib3V0VXNDYXJkIiwicHJvcHMiLCJjYXJkIiwiaW5kZXgiLCJtYWluSXRlbUluZGV4Iiwic2V0TWFpbkl0ZW1JbmRleCIsInNldFRvcCIsInRpdGxlIiwidGV4dCIsInJlZiIsInJlZkNpcmNsZSIsImlzTW9iaWxlIiwiaXNUYWJsZXQiLCJpc0Rlc2t0b3AiLCJpc1NtYWxsTm90ZSIsImlzRWxlbWVudEluVmlld3BvcnQiLCJlbGVtZW50IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudEhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwidG9wIiwiYm90dG9tIiwiZ2V0UmVmUG9zaXRpb24iLCJyZWZIZWlnaHQiLCJjdXJyZW50IiwiaGVpZ2h0IiwiZ2FwIiwicGFkZGluZyIsImRpYWciLCJmaXJzdCIsIk1hdGgiLCJmbG9vciIsImZpcnN0TW9iIiwiY2hhbmdlVG9wUG9zaXRpb24iLCJicmVha3BvaW50MSIsImJyZWFrcG9pbnQyIiwiYnJlYWtwb2ludDMiLCJyb3VuZCIsInByZXYiLCJnb1RvU2VjdGlvbiIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsImhhbmRsZVNjcm9sbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29udGFpbmVyIiwiY29udGFpbmVyX19jaXJjbGVCb3giLCJjb250YWluZXJfX2NpcmNsZUJveF9fY2lyY2xlIiwiYWJvdXRVc0NhcmQiLCJhYm91dFVzQ2FyZF9tYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/about-us/about-us-card/index.tsx\n"));

/***/ })

});