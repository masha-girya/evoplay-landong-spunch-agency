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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AboutUsCard\": function() { return /* binding */ AboutUsCard; }\n/* harmony export */ });\n/* harmony import */ var D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/hooks/useDevice */ \"./src/hooks/useDevice.ts\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.scss */ \"./src/components/about-us/about-us-card/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"D:\\\\IXNOME\\\\evo-landing\\\\frontend\\\\src\\\\components\\\\about-us\\\\about-us-card\\\\index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar AboutUsCard = function AboutUsCard(props) {\n  _s();\n\n  var card = props.card,\n      index = props.index,\n      mainItemIndex = props.mainItemIndex,\n      setMainItemIndex = props.setMainItemIndex,\n      setTop = props.setTop;\n  var title = card.title,\n      text = card.text;\n  var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n  var refCircle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  var _useDevice = (0,src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_3__.useDevice)(),\n      isMobile = _useDevice.isMobile,\n      isTablet = _useDevice.isTablet,\n      isDesktop = _useDevice.isDesktop,\n      isSmallNote = _useDevice.isSmallNote;\n\n  var isElementInViewport = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (element) {\n    var rect = element.getBoundingClientRect();\n    var clientHeight = window.innerHeight;\n    return rect.top < clientHeight / 2 && rect.bottom > clientHeight / 2;\n  }, []);\n  var getRefPosition = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (ref) {\n    var refHeight = ref.current.getBoundingClientRect().height;\n    var gap = isMobile || isTablet ? 120 : 180;\n    var padding = isDesktop ? 83 : 60;\n\n    var diag = function diag() {\n      if (window.innerWidth) return 4;\n      if (isDesktop) return 1;\n      return 5;\n    };\n\n    if (index === 1) {\n      console.log({\n        refHeight: refHeight,\n        gap: gap,\n        padding: padding,\n        first: refHeight / 2 + padding,\n        isDesktop: isDesktop\n      });\n    }\n\n    var first = refHeight / 2 + padding - 3;\n    var firstMob = padding + 13;\n    return {\n      refHeight: refHeight,\n      gap: gap,\n      first: first,\n      firstMob: firstMob\n    };\n  }, [isMobile, isTablet, isSmallNote, isDesktop]);\n  var changeTopPosition = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (index) {\n    if (ref.current && refCircle.current) {\n      var _getRefPosition = getRefPosition(ref),\n          refHeight = _getRefPosition.refHeight,\n          first = _getRefPosition.first,\n          firstMob = _getRefPosition.firstMob,\n          gap = _getRefPosition.gap;\n\n      var breakpoint1 = isMobile || isTablet ? firstMob : first;\n      var breakpoint2 = refHeight + breakpoint1 + gap;\n      var breakpoint3 = refHeight + breakpoint2 + gap;\n\n      switch (index) {\n        case -1:\n        case 0:\n          setTop(breakpoint1);\n          break;\n\n        case 1:\n          setTop(breakpoint2);\n          break;\n\n        case 2:\n        case 100:\n          setTop(breakpoint3);\n          break;\n\n        default:\n          setTop(function (prev) {\n            return prev;\n          });\n      }\n    }\n  }, [isMobile, isTablet, isDesktop, ref]);\n  var goToSection = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {\n    if (ref.current) {\n      ref.current.scrollIntoView({\n        behavior: \"smooth\",\n        block: \"center\"\n      });\n      setMainItemIndex(index);\n      changeTopPosition(index);\n    }\n  }, [ref, index, isMobile, isTablet, isDesktop]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (ref.current) {\n      var _getRefPosition2 = getRefPosition(ref),\n          first = _getRefPosition2.first,\n          firstMob = _getRefPosition2.firstMob;\n\n      setTop(isMobile || isTablet ? firstMob : first);\n    }\n  }, [ref, isMobile, isTablet, isSmallNote, isDesktop]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var handleScroll = function handleScroll() {\n      // if(refCircle.current) {\n      //   console.log(refCircle.current.getBoundingClientRect());\n      // }\n      if (ref.current) {\n        if (isElementInViewport(ref.current)) {\n          setMainItemIndex(index);\n          changeTopPosition(index);\n        }\n      }\n    };\n\n    window.addEventListener(\"scroll\", handleScroll);\n    return function () {\n      window.removeEventListener(\"scroll\", handleScroll);\n    };\n  }, [index, isMobile, isTablet, isDesktop]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),\n    ref: ref,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container__circleBox),\n      ref: refCircle,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container__circleBox__circle)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"section\", {\n      onClick: goToSection,\n      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().aboutUsCard), (0,D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().aboutUsCard_main), mainItemIndex === index)),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h1\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 132,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: text\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 122,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AboutUsCard, \"+RSudrRWbbVGQwpvYlsVHgoni/s=\", false, function () {\n  return [src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_3__.useDevice];\n});\n\n_c = AboutUsCard;\n\nvar _c;\n\n$RefreshReg$(_c, \"AboutUsCard\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hYm91dC11cy9hYm91dC11cy1jYXJkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQVVPLElBQU1NLFdBQW1DLEdBQUcsU0FBdENBLFdBQXNDLENBQUNDLEtBQUQsRUFBVztFQUFBOztFQUM1RCxJQUFRQyxJQUFSLEdBQWlFRCxLQUFqRSxDQUFRQyxJQUFSO0VBQUEsSUFBY0MsS0FBZCxHQUFpRUYsS0FBakUsQ0FBY0UsS0FBZDtFQUFBLElBQXFCQyxhQUFyQixHQUFpRUgsS0FBakUsQ0FBcUJHLGFBQXJCO0VBQUEsSUFBb0NDLGdCQUFwQyxHQUFpRUosS0FBakUsQ0FBb0NJLGdCQUFwQztFQUFBLElBQXNEQyxNQUF0RCxHQUFpRUwsS0FBakUsQ0FBc0RLLE1BQXREO0VBQ0EsSUFBUUMsS0FBUixHQUF3QkwsSUFBeEIsQ0FBUUssS0FBUjtFQUFBLElBQWVDLElBQWYsR0FBd0JOLElBQXhCLENBQWVNLElBQWY7RUFDQSxJQUFNQyxHQUFHLEdBQUdiLDZDQUFNLENBQWEsSUFBYixDQUFsQjtFQUNBLElBQU1jLFNBQVMsR0FBR2QsNkNBQU0sQ0FBYSxJQUFiLENBQXhCOztFQUNBLGlCQUF1REUsOERBQVMsRUFBaEU7RUFBQSxJQUFRYSxRQUFSLGNBQVFBLFFBQVI7RUFBQSxJQUFrQkMsUUFBbEIsY0FBa0JBLFFBQWxCO0VBQUEsSUFBNEJDLFNBQTVCLGNBQTRCQSxTQUE1QjtFQUFBLElBQXVDQyxXQUF2QyxjQUF1Q0EsV0FBdkM7O0VBRUEsSUFBTUMsbUJBQW1CLEdBQUdyQixrREFBVyxDQUFDLFVBQUNzQixPQUFELEVBQWtCO0lBQ3hELElBQU1DLElBQUksR0FBR0QsT0FBTyxDQUFDRSxxQkFBUixFQUFiO0lBQ0EsSUFBTUMsWUFBWSxHQUFHQyxNQUFNLENBQUNDLFdBQTVCO0lBRUEsT0FBT0osSUFBSSxDQUFDSyxHQUFMLEdBQVdILFlBQVksR0FBRyxDQUEx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Q1h6QixNQUFNLENBQUMyQixtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0YsWUFBckM7SUFDRCxDQUZEO0VBR0QsQ0FsQlEsRUFrQk4sQ0FBQzFDLEtBQUQsRUFBUVEsUUFBUixFQUFrQkMsUUFBbEIsRUFBNEJDLFNBQTVCLENBbEJNLENBQVQ7RUFvQkEsb0JBQ0U7SUFBSyxTQUFTLEVBQUVkLHFFQUFoQjtJQUFrQyxHQUFHLEVBQUVVLEdBQXZDO0lBQUEsd0JBQ0U7TUFBSyxTQUFTLEVBQUVWLGdGQUFoQjtNQUE2QyxHQUFHLEVBQUVXLFNBQWxEO01BQUEsdUJBQ0U7UUFBSyxTQUFTLEVBQUVYLHdGQUFtQ21EO01BQW5EO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFERjtNQUFBO01BQUE7TUFBQTtJQUFBLFNBREYsZUFJRTtNQUNFLE9BQU8sRUFBRVQsV0FEWDtNQUVFLFNBQVMsRUFBRTVDLGlEQUFVLENBQUNFLHVFQUFELDRKQUNsQkEsNEVBRGtCLEVBQ1FLLGFBQWEsS0FBS0QsS0FEMUIsRUFGdkI7TUFBQSx3QkFNRTtRQUFBLFVBQUtJO01BQUw7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQU5GLGVBT0U7UUFBQSxVQUFJQztNQUFKO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FQRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FKRjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FERjtBQWdCRCxDQTFITTs7R0FBTVI7VUFLNENGOzs7S0FMNUNFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Fib3V0LXVzL2Fib3V0LXVzLWNhcmQvaW5kZXgudHN4P2VmZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7IHVzZURldmljZSB9IGZyb20gXCJzcmMvaG9va3MvdXNlRGV2aWNlXCI7XHJcbmltcG9ydCB7IEFCT1VUX1VTIH0gZnJvbSBcInNyYy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuaW50ZXJmYWNlIElBYm91dFVzQ2FyZCB7XHJcbiAgY2FyZDogKHR5cGVvZiBBQk9VVF9VUylbMF07XHJcbiAgaW5kZXg6IG51bWJlcjtcclxuICBtYWluSXRlbUluZGV4OiBudW1iZXI7XHJcbiAgc2V0TWFpbkl0ZW1JbmRleDogKG1haW5JdGVtSW5kZXg6IG51bWJlcikgPT4gdm9pZDtcclxuICBzZXRUb3A6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPG51bWJlcj4+O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQWJvdXRVc0NhcmQ6IFJlYWN0LkZDPElBYm91dFVzQ2FyZD4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNhcmQsIGluZGV4LCBtYWluSXRlbUluZGV4LCBzZXRNYWluSXRlbUluZGV4LCBzZXRUb3AgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHsgdGl0bGUsIHRleHQgfSA9IGNhcmQ7XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmPGFueSB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IHJlZkNpcmNsZSA9IHVzZVJlZjxhbnkgfCBudWxsPihudWxsKTtcclxuICBjb25zdCB7IGlzTW9iaWxlLCBpc1RhYmxldCwgaXNEZXNrdG9wLCBpc1NtYWxsTm90ZSB9ID0gdXNlRGV2aWNlKCk7XHJcblxyXG4gIGNvbnN0IGlzRWxlbWVudEluVmlld3BvcnQgPSB1c2VDYWxsYmFjaygoZWxlbWVudDogYW55KSA9PiB7XHJcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IGNsaWVudEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgICByZXR1cm4gcmVjdC50b3AgPCBjbGllbnRIZWlnaHQgLyAyICYmIHJlY3QuYm90dG9tID4gY2xpZW50SGVpZ2h0IC8gMjtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGdldFJlZlBvc2l0aW9uID0gdXNlQ2FsbGJhY2soXHJcbiAgICAocmVmOiBhbnkpID0+IHtcclxuICAgICAgY29uc3QgcmVmSGVpZ2h0ID0gcmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xyXG4gICAgICBjb25zdCBnYXAgPSBpc01vYmlsZSB8fCBpc1RhYmxldCA/IDEyMCA6IDE4MDtcclxuICAgICAgY29uc3QgcGFkZGluZyA9IGlzRGVza3RvcCA/IDgzIDogNjA7XHJcbiAgICAgIGNvbnN0IGRpYWcgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoICkgcmV0dXJuIDQ7XHJcbiAgICAgICAgaWYgKGlzRGVza3RvcCkgcmV0dXJuIDE7XHJcbiAgICAgICAgcmV0dXJuIDU7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZihpbmRleCA9PT0xKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coeyByZWZIZWlnaHQsIGdhcCwgcGFkZGluZywgZmlyc3Q6IChyZWZIZWlnaHQgLyAyICkrIHBhZGRpbmcsIGlzRGVza3RvcH0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGZpcnN0ID0gKHJlZkhlaWdodCAvIDIpICsgcGFkZGluZyAtIDM7XHJcbiAgICAgIGNvbnN0IGZpcnN0TW9iID0gcGFkZGluZyArIDEzO1xyXG5cclxuICAgICAgcmV0dXJuIHsgcmVmSGVpZ2h0LCBnYXAsIGZpcnN0LCBmaXJzdE1vYiB9O1xyXG4gICAgfSxcclxuICAgIFtpc01vYmlsZSwgaXNUYWJsZXQsIGlzU21hbGxOb3RlLCBpc0Rlc2t0b3BdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgY2hhbmdlVG9wUG9zaXRpb24gPSB1c2VDYWxsYmFjayhcclxuICAgIChpbmRleCkgPT4ge1xyXG4gICAgICBpZiAocmVmLmN1cnJlbnQgJiYgcmVmQ2lyY2xlLmN1cnJlbnQpIHtcclxuICAgICAgICBjb25zdCB7IHJlZkhlaWdodCwgZmlyc3QsIGZpcnN0TW9iLCBnYXAgfSA9IGdldFJlZlBvc2l0aW9uKHJlZik7XHJcblxyXG4gICAgICAgIGNvbnN0IGJyZWFrcG9pbnQxID0gKGlzTW9iaWxlIHx8IGlzVGFibGV0KSA/IGZpcnN0TW9iIDogZmlyc3Q7XHJcbiAgICAgICAgY29uc3QgYnJlYWtwb2ludDIgPSByZWZIZWlnaHQgKyBicmVha3BvaW50MSArIGdhcDtcclxuICAgICAgICBjb25zdCBicmVha3BvaW50MyA9IHJlZkhlaWdodCArIGJyZWFrcG9pbnQyICsgZ2FwO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGluZGV4KSB7XHJcbiAgICAgICAgICBjYXNlIC0xOlxyXG4gICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICBzZXRUb3AoYnJlYWtwb2ludDEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgc2V0VG9wKGJyZWFrcG9pbnQyKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICBjYXNlIDEwMDpcclxuICAgICAgICAgICAgc2V0VG9wKGJyZWFrcG9pbnQzKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBzZXRUb3AoKHByZXY6IG51bWJlcikgPT4gcHJldik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW2lzTW9iaWxlLCBpc1RhYmxldCwgaXNEZXNrdG9wLCByZWZdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZ29Ub1NlY3Rpb24gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAocmVmLmN1cnJlbnQpIHtcclxuICAgICAgcmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoe1xyXG4gICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgICAgIGJsb2NrOiBcImNlbnRlclwiLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNldE1haW5JdGVtSW5kZXgoaW5kZXgpO1xyXG4gICAgICBjaGFuZ2VUb3BQb3NpdGlvbihpbmRleCk7XHJcbiAgICB9XHJcbiAgfSwgW3JlZiwgaW5kZXgsIGlzTW9iaWxlLCBpc1RhYmxldCwgaXNEZXNrdG9wXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocmVmLmN1cnJlbnQpIHtcclxuICAgICAgY29uc3QgeyBmaXJzdCwgZmlyc3RNb2IgfSA9IGdldFJlZlBvc2l0aW9uKHJlZik7XHJcblxyXG4gICAgICBzZXRUb3AoaXNNb2JpbGUgfHwgaXNUYWJsZXQgPyBmaXJzdE1vYiA6IGZpcnN0KTtcclxuICAgIH1cclxuICB9LCBbcmVmLCBpc01vYmlsZSwgaXNUYWJsZXQsIGlzU21hbGxOb3RlLCBpc0Rlc2t0b3BdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgLy8gaWYocmVmQ2lyY2xlLmN1cnJlbnQpIHtcclxuICAgICAgLy8gICBjb25zb2xlLmxvZyhyZWZDaXJjbGUuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSk7XHJcbiAgICAgIC8vIH1cclxuICAgICAgaWYgKHJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgaWYgKGlzRWxlbWVudEluVmlld3BvcnQocmVmLmN1cnJlbnQpKSB7XHJcbiAgICAgICAgICBzZXRNYWluSXRlbUluZGV4KGluZGV4KTtcclxuICAgICAgICAgIGNoYW5nZVRvcFBvc2l0aW9uKGluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgfTtcclxuICB9LCBbaW5kZXgsIGlzTW9iaWxlLCBpc1RhYmxldCwgaXNEZXNrdG9wXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gcmVmPXtyZWZ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fY2lyY2xlQm94fSByZWY9e3JlZkNpcmNsZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2NpcmNsZUJveF9fY2lyY2xlfT48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzZWN0aW9uXHJcbiAgICAgICAgb25DbGljaz17Z29Ub1NlY3Rpb259XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5hYm91dFVzQ2FyZCwge1xyXG4gICAgICAgICAgW3N0eWxlcy5hYm91dFVzQ2FyZF9tYWluXTogbWFpbkl0ZW1JbmRleCA9PT0gaW5kZXgsXHJcbiAgICAgICAgfSl9XHJcbiAgICAgID5cclxuICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgPHA+e3RleHR9PC9wPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJjbGFzc05hbWVzIiwidXNlRGV2aWNlIiwic3R5bGVzIiwiQWJvdXRVc0NhcmQiLCJwcm9wcyIsImNhcmQiLCJpbmRleCIsIm1haW5JdGVtSW5kZXgiLCJzZXRNYWluSXRlbUluZGV4Iiwic2V0VG9wIiwidGl0bGUiLCJ0ZXh0IiwicmVmIiwicmVmQ2lyY2xlIiwiaXNNb2JpbGUiLCJpc1RhYmxldCIsImlzRGVza3RvcCIsImlzU21hbGxOb3RlIiwiaXNFbGVtZW50SW5WaWV3cG9ydCIsImVsZW1lbnQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50SGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ0b3AiLCJib3R0b20iLCJnZXRSZWZQb3NpdGlvbiIsInJlZkhlaWdodCIsImN1cnJlbnQiLCJoZWlnaHQiLCJnYXAiLCJwYWRkaW5nIiwiZGlhZyIsImlubmVyV2lkdGgiLCJjb25zb2xlIiwibG9nIiwiZmlyc3QiLCJmaXJzdE1vYiIsImNoYW5nZVRvcFBvc2l0aW9uIiwiYnJlYWtwb2ludDEiLCJicmVha3BvaW50MiIsImJyZWFrcG9pbnQzIiwicHJldiIsImdvVG9TZWN0aW9uIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiaGFuZGxlU2Nyb2xsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb250YWluZXIiLCJjb250YWluZXJfX2NpcmNsZUJveCIsImNvbnRhaW5lcl9fY2lyY2xlQm94X19jaXJjbGUiLCJhYm91dFVzQ2FyZCIsImFib3V0VXNDYXJkX21haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/about-us/about-us-card/index.tsx\n"));

/***/ })

});