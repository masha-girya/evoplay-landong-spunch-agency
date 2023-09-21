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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AboutUsCard\": function() { return /* binding */ AboutUsCard; }\n/* harmony export */ });\n/* harmony import */ var D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.scss */ \"./src/components/about-us/about-us-card/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/hooks/useDevice */ \"./src/hooks/useDevice.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"D:\\\\IXNOME\\\\evo-landing\\\\frontend\\\\src\\\\components\\\\about-us\\\\about-us-card\\\\index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar AboutUsCard = function AboutUsCard(props) {\n  _s();\n\n  var card = props.card,\n      index = props.index,\n      mainItemIndex = props.mainItemIndex,\n      setMainItemIndex = props.setMainItemIndex,\n      setTop = props.setTop;\n  var title = card.title,\n      text = card.text;\n  var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  var _useDevice = (0,src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_3__.useDevice)(),\n      isMobile = _useDevice.isMobile,\n      isTablet = _useDevice.isTablet;\n\n  var isElementInViewport = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (element) {\n    var rect = element.getBoundingClientRect();\n    var clientHeight = window.innerHeight;\n    return rect.top < clientHeight / 2 && rect.bottom > clientHeight / 2;\n  }, []);\n  var changeTopPosition = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (index) {\n    console.log(isMobile || isTablet);\n    var breakpoint1 = isMobile ? 73 : 142;\n    var breakpoint2 = isMobile ? 358 : 447;\n    var breakpoint3 = isMobile || isTablet ? 643 : 752;\n\n    switch (index) {\n      case 0:\n        setTop(breakpoint1);\n        break;\n\n      case 1:\n        setTop(breakpoint2);\n        break;\n\n      case 2:\n        setTop(breakpoint3);\n        break;\n\n      default:\n        setTop(function (prev) {\n          return prev;\n        });\n    }\n  }, [isMobile, isTablet]);\n  var goToSection = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {\n    if (ref.current) {\n      ref.current.scrollIntoView({\n        behavior: \"smooth\",\n        block: \"center\",\n        inline: \"center\"\n      });\n      setMainItemIndex(index);\n      changeTopPosition(index);\n    }\n  }, [ref, index]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var handleScroll = function handleScroll() {\n      if (ref.current) {\n        if (isElementInViewport(ref.current)) {\n          setMainItemIndex(index);\n          changeTopPosition(index);\n        }\n      }\n    };\n\n    window.addEventListener(\"scroll\", handleScroll);\n    return function () {\n      window.removeEventListener(\"scroll\", handleScroll);\n    };\n  }, [index]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container__circleBox),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container__circleBox__circle)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"section\", {\n      ref: ref,\n      onClick: goToSection,\n      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().aboutUsCard), (0,D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().aboutUsCard_main), mainItemIndex === index)),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h1\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: text\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 80,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AboutUsCard, \"K9YCUSSvBQgGqW9t0yHGjUr4EcQ=\", false, function () {\n  return [src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_3__.useDevice];\n});\n\n_c = AboutUsCard;\n\nvar _c;\n\n$RefreshReg$(_c, \"AboutUsCard\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hYm91dC11cy9hYm91dC11cy1jYXJkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQVVPLElBQU1NLFdBQW1DLEdBQUcsU0FBdENBLFdBQXNDLENBQUNDLEtBQUQsRUFBVztFQUFBOztFQUM1RCxJQUFRQyxJQUFSLEdBQWlFRCxLQUFqRSxDQUFRQyxJQUFSO0VBQUEsSUFBY0MsS0FBZCxHQUFpRUYsS0FBakUsQ0FBY0UsS0FBZDtFQUFBLElBQXFCQyxhQUFyQixHQUFpRUgsS0FBakUsQ0FBcUJHLGFBQXJCO0VBQUEsSUFBb0NDLGdCQUFwQyxHQUFpRUosS0FBakUsQ0FBb0NJLGdCQUFwQztFQUFBLElBQXNEQyxNQUF0RCxHQUFpRUwsS0FBakUsQ0FBc0RLLE1BQXREO0VBQ0EsSUFBUUMsS0FBUixHQUF3QkwsSUFBeEIsQ0FBUUssS0FBUjtFQUFBLElBQWVDLElBQWYsR0FBd0JOLElBQXhCLENBQWVNLElBQWY7RUFDQSxJQUFNQyxHQUFHLEdBQUdiLDZDQUFNLENBQWEsSUFBYixDQUFsQjs7RUFDQSxpQkFBK0JHLDhEQUFTLEVBQXhDO0VBQUEsSUFBUVcsUUFBUixjQUFRQSxRQUFSO0VBQUEsSUFBa0JDLFFBQWxCLGNBQWtCQSxRQUFsQjs7RUFFQSxJQUFNQyxtQkFBbUIsR0FBR2xCLGtEQUFXLENBQUMsVUFBQ21CLE9BQUQsRUFBa0I7SUFDeEQsSUFBTUMsSUFBSSxHQUFHRCxPQUFPLENBQUNFLHFCQUFSLEVBQWI7SUFDQSxJQUFNQyxZQUFZLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBNUI7SUFFQSxPQUFPSixJQUFJLENBQUNLLEdBQUwsR0FBV0gsWUFBWSxHQUFHLENBQTFCLElBQStCRixJQUFJLENBQUNNLE1BQUwsR0FBY0osWUFBWSxHQUFHLENBQW5FO0VBQ0QsQ0FMc0MsRUFLcEMsRUFMb0MsQ0FBdkM7RUFPQSxJQUFNSyxpQkFBaUIsR0FBRzNCLGtEQUFXLENBQUMsVUFBQ1MsS0FBRCxFQUFXO0lBQy9DbUIsT0FBTyxDQUFDQyxHQUFSLENBQVliLFFBQVEsSUFBSUMsUUFBeEI7SUFDQSxJQUFNYSxXQUFXLEdBQUlkLFFBQUQsR0FBYSxFQUFiLEdBQWtCLEdBQXRDO0lBQ0EsSUFBTWUsV0FBVyxHQUFJZixRQUFELEdBQWEsR0FBYixHQUFtQixHQUF2QztJQUNBLElBQU1nQixXQUFXLEdBQUloQixRQUFRLElBQUlDLFFBQWIsR0FBeUIsR0FBekIsR0FBK0IsR0FBbkQ7O0lBRUEsUUFBT1IsS0FBUDtNQUNFLEtBQUssQ0FBTDtRQUNFRyxNQUFNLENBQUNrQixXQUFELENBQU47UUFDQTs7TUFDRixLQUFLLENBQUw7UUFDRWxCLE1BQU0sQ0FBQ21CLFdBQUQsQ0FBTjtRQUNBOztNQUNGLEtBQUssQ0FBTDtRQUNFbkIsTUFBTSxDQUFDb0IsV0FBRCxDQUFOO1FBQ0E7O01BQ0Y7UUFDRXBCLE1BQU0sQ0FBQyxVQUFDcUIsSUFBRDtVQUFBLE9BQWtCQSxJQUFsQjtRQUFBLENBQUQsQ0FBTjtJQVhKO0VBYUQsQ0FuQm9DLEVBbUJsQyxDQUFDakIsUUFBRCxFQUFXQyxRQUFYLENBbkJrQyxDQUFyQztFQXFCQSxJQUFNaUIsV0FBVyxHQUFHbEMsa0RBQVcsQ0FBQyxZQUFNO0lBQ3BDLElBQUllLEdBQUcsQ0FBQ29CLE9BQVIsRUFBaUI7TUFDZnBCLEdBQUcsQ0FBQ29CLE9BQUosQ0FBWUMsY0FBWixDQUEyQjtRQUN6QkMsUUFBUSxFQUFFLFFBRGU7UUFFekJDLEtBQUssRUFBRSxRQUZrQjtRQUd6QkMsTUFBTSxFQUFFO01BSGlCLENBQTNCO01BTUE1QixnQkFBZ0IsQ0FBQ0YsS0FBRCxDQUFoQjtNQUNBa0IsaUJBQWlCLENBQUNsQixLQUFELENBQWpCO0lBQ0Q7RUFDRixDQVg4QixFQVc1QixDQUFDTSxHQUFELEVBQU1OLEtBQU4sQ0FYNEIsQ0FBL0I7RUFhQVIsZ0RBQVMsQ0FBQyxZQUFNO0lBQ2QsSUFBTXVDLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07TUFDekIsSUFBSXpCLEdBQUcsQ0FBQ29CLE9BQVIsRUFBaUI7UUFDZixJQUFJakIsbUJBQW1CLENBQUNILEdBQUcsQ0FBQ29CLE9BQUwsQ0FBdkIsRUFBc0M7VUFDcEN4QixnQkFBZ0IsQ0FBQ0YsS0FBRCxDQUFoQjtVQUNBa0IsaUJBQWlCLENBQUNsQixLQUFELENBQWpCO1FBQ0Q7TUFDRjtJQUNGLENBUEQ7O0lBU0FjLE1BQU0sQ0FBQ2tCLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDRCxZQUFsQztJQUVBLE9BQU8sWUFBTTtNQUNYakIsTUFBTSxDQUFDbUIsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNGLFlBQXJDO0lBQ0QsQ0FGRDtFQUdELENBZlEsRUFlTixDQUFDL0IsS0FBRCxDQWZNLENBQVQ7RUFpQkEsb0JBQ0U7SUFBSyxTQUFTLEVBQUVMLHFFQUFoQjtJQUFBLHdCQUNFO01BQUssU0FBUyxFQUFFQSxnRkFBaEI7TUFBQSx1QkFDRTtRQUFLLFNBQVMsRUFBRUEsd0ZBQW1DeUM7TUFBbkQ7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FERixlQUlFO01BQ0UsR0FBRyxFQUFFOUIsR0FEUDtNQUVFLE9BQU8sRUFBRW1CLFdBRlg7TUFHRSxTQUFTLEVBQUUvQixpREFBVSxDQUFDQyx1RUFBRCw0SkFDbEJBLDRFQURrQixFQUNRTSxhQUFhLEtBQUtELEtBRDFCLEVBSHZCO01BQUEsd0JBT0U7UUFBQSxVQUFLSTtNQUFMO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FQRixlQVFFO1FBQUEsVUFBSUM7TUFBSjtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBUkY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBSkY7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREY7QUFpQkQsQ0FqRk07O0dBQU1SO1VBSW9CRDs7O0tBSnBCQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hYm91dC11cy9hYm91dC11cy1jYXJkL2luZGV4LnRzeD9lZmQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgeyBBQk9VVF9VUyB9IGZyb20gXCJzcmMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgdXNlRGV2aWNlIH0gZnJvbSBcInNyYy9ob29rcy91c2VEZXZpY2VcIjtcclxuXHJcbmludGVyZmFjZSBJQWJvdXRVc0NhcmQge1xyXG4gIGNhcmQ6ICh0eXBlb2YgQUJPVVRfVVMpWzBdO1xyXG4gIGluZGV4OiBudW1iZXI7XHJcbiAgbWFpbkl0ZW1JbmRleDogbnVtYmVyO1xyXG4gIHNldE1haW5JdGVtSW5kZXg6IChtYWluSXRlbUluZGV4OiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgc2V0VG9wOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxudW1iZXI+PjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFib3V0VXNDYXJkOiBSZWFjdC5GQzxJQWJvdXRVc0NhcmQ+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjYXJkLCBpbmRleCwgbWFpbkl0ZW1JbmRleCwgc2V0TWFpbkl0ZW1JbmRleCwgc2V0VG9wIH0gPSBwcm9wcztcclxuICBjb25zdCB7IHRpdGxlLCB0ZXh0IH0gPSBjYXJkO1xyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZjxhbnkgfCBudWxsPihudWxsKTtcclxuICBjb25zdCB7IGlzTW9iaWxlLCBpc1RhYmxldCB9ID0gdXNlRGV2aWNlKCk7XHJcblxyXG4gIGNvbnN0IGlzRWxlbWVudEluVmlld3BvcnQgPSB1c2VDYWxsYmFjaygoZWxlbWVudDogYW55KSA9PiB7XHJcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IGNsaWVudEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgICByZXR1cm4gcmVjdC50b3AgPCBjbGllbnRIZWlnaHQgLyAyICYmIHJlY3QuYm90dG9tID4gY2xpZW50SGVpZ2h0IC8gMjtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGNoYW5nZVRvcFBvc2l0aW9uID0gdXNlQ2FsbGJhY2soKGluZGV4KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpc01vYmlsZSB8fCBpc1RhYmxldClcclxuICAgIGNvbnN0IGJyZWFrcG9pbnQxID0gKGlzTW9iaWxlKSA/IDczIDogMTQyO1xyXG4gICAgY29uc3QgYnJlYWtwb2ludDIgPSAoaXNNb2JpbGUpID8gMzU4IDogNDQ3O1xyXG4gICAgY29uc3QgYnJlYWtwb2ludDMgPSAoaXNNb2JpbGUgfHwgaXNUYWJsZXQpID8gNjQzIDogNzUyO1xyXG5cclxuICAgIHN3aXRjaChpbmRleCkge1xyXG4gICAgICBjYXNlIDA6XHJcbiAgICAgICAgc2V0VG9wKGJyZWFrcG9pbnQxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHNldFRvcChicmVha3BvaW50Mik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMjpcclxuICAgICAgICBzZXRUb3AoYnJlYWtwb2ludDMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHNldFRvcCgocHJldjogbnVtYmVyKSA9PiBwcmV2KTtcclxuICAgIH1cclxuICB9LCBbaXNNb2JpbGUsIGlzVGFibGV0XSk7XHJcblxyXG4gIGNvbnN0IGdvVG9TZWN0aW9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKHJlZi5jdXJyZW50KSB7XHJcbiAgICAgIHJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHtcclxuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcclxuICAgICAgICBibG9jazogXCJjZW50ZXJcIixcclxuICAgICAgICBpbmxpbmU6IFwiY2VudGVyXCIsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc2V0TWFpbkl0ZW1JbmRleChpbmRleCk7XHJcbiAgICAgIGNoYW5nZVRvcFBvc2l0aW9uKGluZGV4KVxyXG4gICAgfVxyXG4gIH0sIFtyZWYsIGluZGV4XSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChyZWYuY3VycmVudCkge1xyXG4gICAgICAgIGlmIChpc0VsZW1lbnRJblZpZXdwb3J0KHJlZi5jdXJyZW50KSkge1xyXG4gICAgICAgICAgc2V0TWFpbkl0ZW1JbmRleChpbmRleCk7XHJcbiAgICAgICAgICBjaGFuZ2VUb3BQb3NpdGlvbihpbmRleClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgfTtcclxuICB9LCBbaW5kZXhdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2NpcmNsZUJveH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2NpcmNsZUJveF9fY2lyY2xlfT48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzZWN0aW9uXHJcbiAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgb25DbGljaz17Z29Ub1NlY3Rpb259XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5hYm91dFVzQ2FyZCwge1xyXG4gICAgICAgICAgW3N0eWxlcy5hYm91dFVzQ2FyZF9tYWluXTogbWFpbkl0ZW1JbmRleCA9PT0gaW5kZXgsXHJcbiAgICAgICAgfSl9XHJcbiAgICAgID5cclxuICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgPHA+e3RleHR9PC9wPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJjbGFzc05hbWVzIiwic3R5bGVzIiwidXNlRGV2aWNlIiwiQWJvdXRVc0NhcmQiLCJwcm9wcyIsImNhcmQiLCJpbmRleCIsIm1haW5JdGVtSW5kZXgiLCJzZXRNYWluSXRlbUluZGV4Iiwic2V0VG9wIiwidGl0bGUiLCJ0ZXh0IiwicmVmIiwiaXNNb2JpbGUiLCJpc1RhYmxldCIsImlzRWxlbWVudEluVmlld3BvcnQiLCJlbGVtZW50IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudEhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwidG9wIiwiYm90dG9tIiwiY2hhbmdlVG9wUG9zaXRpb24iLCJjb25zb2xlIiwibG9nIiwiYnJlYWtwb2ludDEiLCJicmVha3BvaW50MiIsImJyZWFrcG9pbnQzIiwicHJldiIsImdvVG9TZWN0aW9uIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsImlubGluZSIsImhhbmRsZVNjcm9sbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29udGFpbmVyIiwiY29udGFpbmVyX19jaXJjbGVCb3giLCJjb250YWluZXJfX2NpcmNsZUJveF9fY2lyY2xlIiwiYWJvdXRVc0NhcmQiLCJhYm91dFVzQ2FyZF9tYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/about-us/about-us-card/index.tsx\n"));

/***/ })

});