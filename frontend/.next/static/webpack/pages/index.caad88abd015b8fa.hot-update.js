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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AboutUsCard\": function() { return /* binding */ AboutUsCard; }\n/* harmony export */ });\n/* harmony import */ var D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.scss */ \"./src/components/about-us/about-us-card/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/hooks/useDevice */ \"./src/hooks/useDevice.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"D:\\\\IXNOME\\\\evo-landing\\\\frontend\\\\src\\\\components\\\\about-us\\\\about-us-card\\\\index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar AboutUsCard = function AboutUsCard(props) {\n  _s();\n\n  var card = props.card,\n      index = props.index,\n      mainItemIndex = props.mainItemIndex,\n      setMainItemIndex = props.setMainItemIndex,\n      setTop = props.setTop;\n  var title = card.title,\n      text = card.text;\n  var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  var _useDevice = (0,src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_3__.useDevice)(),\n      isMobile = _useDevice.isMobile,\n      isTablet = _useDevice.isTablet,\n      isDesktop = _useDevice.isDesktop,\n      isSmallNote = _useDevice.isSmallNote;\n\n  var isElementInViewport = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (element) {\n    var rect = element.getBoundingClientRect();\n    var clientHeight = window.innerHeight;\n    return rect.top < clientHeight / 2 && rect.bottom > clientHeight / 2;\n  }, []);\n  var getRefPosition = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (ref) {\n    var refHeight = ref.current.getBoundingClientRect().height;\n    var gap = isMobile || isTablet ? 120 : 180;\n    var padding = isDesktop ? 80 : 60;\n\n    var diag = function diag() {\n      if (isSmallNote) return 4;\n      if (isDesktop) return 1;\n      return 5;\n    };\n\n    var first = Math.round(refHeight / 2) + padding - diag();\n    var firstMob = padding + 13;\n    return {\n      refHeight: refHeight,\n      gap: gap,\n      first: first,\n      firstMob: firstMob\n    };\n  }, [isMobile, isTablet, isSmallNote, isDesktop]);\n  var changeTopPosition = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (index) {\n    if (ref.current) {\n      var _getRefPosition = getRefPosition(ref),\n          refHeight = _getRefPosition.refHeight,\n          first = _getRefPosition.first,\n          firstMob = _getRefPosition.firstMob,\n          gap = _getRefPosition.gap;\n\n      var breakpoint1 = isMobile || isTablet ? firstMob : first;\n      var breakpoint2 = Math.round(refHeight + breakpoint1 + gap);\n      var breakpoint3 = Math.round(refHeight + breakpoint2 + gap);\n\n      switch (index) {\n        case -1:\n        case 0:\n          setTop(breakpoint1);\n          break;\n\n        case 1:\n          setTop(breakpoint2);\n          break;\n\n        case 2:\n        case 100:\n          setTop(breakpoint3);\n          break;\n\n        default:\n          setTop(function (prev) {\n            return prev;\n          });\n      }\n    }\n  }, [isMobile, isTablet, isDesktop, ref]);\n  var goToSection = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {\n    if (ref.current) {\n      ref.current.scrollIntoView({\n        behavior: \"smooth\",\n        block: \"center\"\n      });\n      setMainItemIndex(index);\n      changeTopPosition(index);\n    }\n  }, [ref, index, isMobile, isTablet, isDesktop]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (ref.current) {\n      var _getRefPosition2 = getRefPosition(ref),\n          first = _getRefPosition2.first,\n          firstMob = _getRefPosition2.firstMob;\n\n      setTop(isMobile || isTablet ? firstMob : first);\n    }\n  }, [ref, isMobile, isTablet, isSmallNote, isDesktop]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var handleScroll = function handleScroll() {\n      if (ref.current) {\n        if (isElementInViewport(ref.current)) {\n          setMainItemIndex(index);\n          changeTopPosition(index);\n        }\n      }\n    };\n\n    window.addEventListener(\"scroll\", handleScroll);\n    return function () {\n      window.removeEventListener(\"scroll\", handleScroll);\n    };\n  }, [index, isMobile, isTablet, isDesktop]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),\n    ref: ref,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container__circleBox),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container__circleBox__circle)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"section\", {\n      onClick: goToSection,\n      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().aboutUsCard), (0,D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().aboutUsCard_main), mainItemIndex === index)),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h1\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: text\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 114,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AboutUsCard, \"nLIoks436ixOtPF/kAfxXFylvMI=\", false, function () {\n  return [src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_3__.useDevice];\n});\n\n_c = AboutUsCard;\n\nvar _c;\n\n$RefreshReg$(_c, \"AboutUsCard\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hYm91dC11cy9hYm91dC11cy1jYXJkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQVVPLElBQU1NLFdBQW1DLEdBQUcsU0FBdENBLFdBQXNDLENBQUNDLEtBQUQsRUFBVztFQUFBOztFQUM1RCxJQUFRQyxJQUFSLEdBQWlFRCxLQUFqRSxDQUFRQyxJQUFSO0VBQUEsSUFBY0MsS0FBZCxHQUFpRUYsS0FBakUsQ0FBY0UsS0FBZDtFQUFBLElBQXFCQyxhQUFyQixHQUFpRUgsS0FBakUsQ0FBcUJHLGFBQXJCO0VBQUEsSUFBb0NDLGdCQUFwQyxHQUFpRUosS0FBakUsQ0FBb0NJLGdCQUFwQztFQUFBLElBQXNEQyxNQUF0RCxHQUFpRUwsS0FBakUsQ0FBc0RLLE1BQXREO0VBQ0EsSUFBUUMsS0FBUixHQUF3QkwsSUFBeEIsQ0FBUUssS0FBUjtFQUFBLElBQWVDLElBQWYsR0FBd0JOLElBQXhCLENBQWVNLElBQWY7RUFDQSxJQUFNQyxHQUFHLEdBQUdiLDZDQUFNLENBQWEsSUFBYixDQUFsQjs7RUFDQSxpQkFBdURHLDhEQUFTLEVBQWhFO0VBQUEsSUFBUVcsUUFBUixjQUFRQSxRQUFSO0VBQUEsSUFBa0JDLFFBQWxCLGNBQWtCQSxRQUFsQjtFQUFBLElBQTRCQyxTQUE1QixjQUE0QkEsU0FBNUI7RUFBQSxJQUF1Q0MsV0FBdkMsY0FBdUNBLFdBQXZDOztFQUVBLElBQU1DLG1CQUFtQixHQUFHcEIsa0RBQVcsQ0FBQyxVQUFDcUIsT0FBRCxFQUFrQjtJQUN4RCxJQUFNQyxJQUFJLEdBQUdELE9BQU8sQ0FBQ0UscUJBQVIsRUFBYjtJQUNBLElBQU1DLFlBQVksR0FBR0MsTUFBTSxDQUFDQyxXQUE1QjtJQUVBLE9BQU9KLElBQUksQ0FBQ0ssR0FBTCxHQUFXSCxZQUFZLEdBQUcsQ0FBMUIsSUFBK0JGLElBQUksQ0FBQ00sTUFBTCxHQUFjSixZQUFZLEdBQUcsQ0FB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QUFBLHVCQUNFO1FBQUssU0FBUyxFQUFFQSx3RkFBbUNrRDtNQUFuRDtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQSxTQURGLGVBSUU7TUFDRSxPQUFPLEVBQUVULFdBRFg7TUFFRSxTQUFTLEVBQUUxQyxpREFBVSxDQUFDQyx1RUFBRCw0SkFDbEJBLDRFQURrQixFQUNRTSxhQUFhLEtBQUtELEtBRDFCLEVBRnZCO01BQUEsd0JBTUU7UUFBQSxVQUFLSTtNQUFMO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FORixlQU9FO1FBQUEsVUFBSUM7TUFBSjtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBUEY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBSkY7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREY7QUFnQkQsQ0FsSE07O0dBQU1SO1VBSTRDRDs7O0tBSjVDQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hYm91dC11cy9hYm91dC11cy1jYXJkL2luZGV4LnRzeD9lZmQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgeyBBQk9VVF9VUyB9IGZyb20gXCJzcmMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgdXNlRGV2aWNlIH0gZnJvbSBcInNyYy9ob29rcy91c2VEZXZpY2VcIjtcclxuXHJcbmludGVyZmFjZSBJQWJvdXRVc0NhcmQge1xyXG4gIGNhcmQ6ICh0eXBlb2YgQUJPVVRfVVMpWzBdO1xyXG4gIGluZGV4OiBudW1iZXI7XHJcbiAgbWFpbkl0ZW1JbmRleDogbnVtYmVyO1xyXG4gIHNldE1haW5JdGVtSW5kZXg6IChtYWluSXRlbUluZGV4OiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgc2V0VG9wOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxudW1iZXI+PjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFib3V0VXNDYXJkOiBSZWFjdC5GQzxJQWJvdXRVc0NhcmQ+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjYXJkLCBpbmRleCwgbWFpbkl0ZW1JbmRleCwgc2V0TWFpbkl0ZW1JbmRleCwgc2V0VG9wIH0gPSBwcm9wcztcclxuICBjb25zdCB7IHRpdGxlLCB0ZXh0IH0gPSBjYXJkO1xyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZjxhbnkgfCBudWxsPihudWxsKTtcclxuICBjb25zdCB7IGlzTW9iaWxlLCBpc1RhYmxldCwgaXNEZXNrdG9wLCBpc1NtYWxsTm90ZSB9ID0gdXNlRGV2aWNlKCk7XHJcblxyXG4gIGNvbnN0IGlzRWxlbWVudEluVmlld3BvcnQgPSB1c2VDYWxsYmFjaygoZWxlbWVudDogYW55KSA9PiB7XHJcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IGNsaWVudEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgICByZXR1cm4gcmVjdC50b3AgPCBjbGllbnRIZWlnaHQgLyAyICYmIHJlY3QuYm90dG9tID4gY2xpZW50SGVpZ2h0IC8gMjtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGdldFJlZlBvc2l0aW9uID0gdXNlQ2FsbGJhY2soXHJcbiAgICAocmVmOiBhbnkpID0+IHtcclxuICAgICAgY29uc3QgcmVmSGVpZ2h0ID0gcmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xyXG4gICAgICBjb25zdCBnYXAgPSBpc01vYmlsZSB8fCBpc1RhYmxldCA/IDEyMCA6IDE4MDtcclxuICAgICAgY29uc3QgcGFkZGluZyA9IGlzRGVza3RvcCA/IDgwIDogNjA7XHJcbiAgICAgIGNvbnN0IGRpYWcgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzU21hbGxOb3RlKSByZXR1cm4gNDtcclxuICAgICAgICBpZiAoaXNEZXNrdG9wKSByZXR1cm4gMTtcclxuICAgICAgICByZXR1cm4gNTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGZpcnN0ID0gTWF0aC5yb3VuZChyZWZIZWlnaHQgLyAyKSArIHBhZGRpbmcgLSBkaWFnKCk7XHJcbiAgICAgIGNvbnN0IGZpcnN0TW9iID0gcGFkZGluZyArIDEzO1xyXG5cclxuICAgICAgcmV0dXJuIHsgcmVmSGVpZ2h0LCBnYXAsIGZpcnN0LCBmaXJzdE1vYiB9O1xyXG4gICAgfSxcclxuICAgIFtpc01vYmlsZSwgaXNUYWJsZXQsIGlzU21hbGxOb3RlLCBpc0Rlc2t0b3BdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgY2hhbmdlVG9wUG9zaXRpb24gPSB1c2VDYWxsYmFjayhcclxuICAgIChpbmRleCkgPT4ge1xyXG4gICAgICBpZiAocmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBjb25zdCB7IHJlZkhlaWdodCwgZmlyc3QsIGZpcnN0TW9iLCBnYXAgfSA9IGdldFJlZlBvc2l0aW9uKHJlZik7XHJcblxyXG4gICAgICAgIGNvbnN0IGJyZWFrcG9pbnQxID0gaXNNb2JpbGUgfHwgaXNUYWJsZXQgPyBmaXJzdE1vYiA6IGZpcnN0O1xyXG4gICAgICAgIGNvbnN0IGJyZWFrcG9pbnQyID0gTWF0aC5yb3VuZChyZWZIZWlnaHQgKyBicmVha3BvaW50MSArIGdhcCk7XHJcbiAgICAgICAgY29uc3QgYnJlYWtwb2ludDMgPSBNYXRoLnJvdW5kKHJlZkhlaWdodCArIGJyZWFrcG9pbnQyICsgZ2FwKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChpbmRleCkge1xyXG4gICAgICAgICAgY2FzZSAtMTpcclxuICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgc2V0VG9wKGJyZWFrcG9pbnQxKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgIHNldFRvcChicmVha3BvaW50Mik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgY2FzZSAxMDA6XHJcbiAgICAgICAgICAgIHNldFRvcChicmVha3BvaW50Myk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgc2V0VG9wKChwcmV2OiBudW1iZXIpID0+IHByZXYpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFtpc01vYmlsZSwgaXNUYWJsZXQsIGlzRGVza3RvcCwgcmVmXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGdvVG9TZWN0aW9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKHJlZi5jdXJyZW50KSB7XHJcbiAgICAgIHJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHtcclxuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcclxuICAgICAgICBibG9jazogXCJjZW50ZXJcIixcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZXRNYWluSXRlbUluZGV4KGluZGV4KTtcclxuICAgICAgY2hhbmdlVG9wUG9zaXRpb24oaW5kZXgpO1xyXG4gICAgfVxyXG4gIH0sIFtyZWYsIGluZGV4LCBpc01vYmlsZSwgaXNUYWJsZXQsIGlzRGVza3RvcF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJlZi5jdXJyZW50KSB7XHJcbiAgICAgIGNvbnN0IHsgZmlyc3QsIGZpcnN0TW9iIH0gPSBnZXRSZWZQb3NpdGlvbihyZWYpO1xyXG5cclxuICAgICAgc2V0VG9wKGlzTW9iaWxlIHx8IGlzVGFibGV0ID8gZmlyc3RNb2IgOiBmaXJzdCk7XHJcbiAgICB9XHJcbiAgfSwgW3JlZiwgaXNNb2JpbGUsIGlzVGFibGV0LCBpc1NtYWxsTm90ZSwgaXNEZXNrdG9wXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChyZWYuY3VycmVudCkge1xyXG4gICAgICAgIGlmIChpc0VsZW1lbnRJblZpZXdwb3J0KHJlZi5jdXJyZW50KSkge1xyXG4gICAgICAgICAgc2V0TWFpbkl0ZW1JbmRleChpbmRleCk7XHJcbiAgICAgICAgICBjaGFuZ2VUb3BQb3NpdGlvbihpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW2luZGV4LCBpc01vYmlsZSwgaXNUYWJsZXQsIGlzRGVza3RvcF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9IHJlZj17cmVmfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2NpcmNsZUJveH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2NpcmNsZUJveF9fY2lyY2xlfT48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzZWN0aW9uXHJcbiAgICAgICAgb25DbGljaz17Z29Ub1NlY3Rpb259XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5hYm91dFVzQ2FyZCwge1xyXG4gICAgICAgICAgW3N0eWxlcy5hYm91dFVzQ2FyZF9tYWluXTogbWFpbkl0ZW1JbmRleCA9PT0gaW5kZXgsXHJcbiAgICAgICAgfSl9XHJcbiAgICAgID5cclxuICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgPHA+e3RleHR9PC9wPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJjbGFzc05hbWVzIiwic3R5bGVzIiwidXNlRGV2aWNlIiwiQWJvdXRVc0NhcmQiLCJwcm9wcyIsImNhcmQiLCJpbmRleCIsIm1haW5JdGVtSW5kZXgiLCJzZXRNYWluSXRlbUluZGV4Iiwic2V0VG9wIiwidGl0bGUiLCJ0ZXh0IiwicmVmIiwiaXNNb2JpbGUiLCJpc1RhYmxldCIsImlzRGVza3RvcCIsImlzU21hbGxOb3RlIiwiaXNFbGVtZW50SW5WaWV3cG9ydCIsImVsZW1lbnQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50SGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ0b3AiLCJib3R0b20iLCJnZXRSZWZQb3NpdGlvbiIsInJlZkhlaWdodCIsImN1cnJlbnQiLCJoZWlnaHQiLCJnYXAiLCJwYWRkaW5nIiwiZGlhZyIsImZpcnN0IiwiTWF0aCIsInJvdW5kIiwiZmlyc3RNb2IiLCJjaGFuZ2VUb3BQb3NpdGlvbiIsImJyZWFrcG9pbnQxIiwiYnJlYWtwb2ludDIiLCJicmVha3BvaW50MyIsInByZXYiLCJnb1RvU2VjdGlvbiIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsImhhbmRsZVNjcm9sbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29udGFpbmVyIiwiY29udGFpbmVyX19jaXJjbGVCb3giLCJjb250YWluZXJfX2NpcmNsZUJveF9fY2lyY2xlIiwiYWJvdXRVc0NhcmQiLCJhYm91dFVzQ2FyZF9tYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/about-us/about-us-card/index.tsx\n"));

/***/ })

});