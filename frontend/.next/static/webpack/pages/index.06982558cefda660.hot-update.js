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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AboutUsCard\": function() { return /* binding */ AboutUsCard; }\n/* harmony export */ });\n/* harmony import */ var D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.scss */ \"./src/components/about-us/about-us-card/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"D:\\\\IXNOME\\\\evo-landing\\\\frontend\\\\src\\\\components\\\\about-us\\\\about-us-card\\\\index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar AboutUsCard = function AboutUsCard(props) {\n  _s();\n\n  var card = props.card,\n      index = props.index,\n      mainItemIndex = props.mainItemIndex,\n      setMainItemIndex = props.setMainItemIndex,\n      setTop = props.setTop;\n  var title = card.title,\n      text = card.text;\n  var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  var isElementInViewport = function isElementInViewport(element) {\n    var rect = element.getBoundingClientRect();\n    var clientHeight = window.innerHeight;\n    return rect.top < clientHeight / 2 && rect.bottom > window.innerHeight / 2;\n  };\n\n  var goToSection = function goToSection() {\n    if (ref.current) {\n      ref.current.scrollIntoView({\n        behavior: \"smooth\",\n        block: \"center\",\n        inline: \"center\"\n      });\n      setMainItemIndex(index);\n\n      switch (index) {\n        case 0:\n          setTop(142);\n          break;\n\n        case 1:\n          setTop(447);\n          break;\n\n        case 2:\n          setTop(752);\n          break;\n\n        default:\n          setTop(function (prev) {\n            return prev;\n          });\n      }\n    }\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var handleScroll = function handleScroll() {\n      if (ref.current) {\n        if (isElementInViewport(ref.current)) {\n          setMainItemIndex(index);\n\n          switch (index) {\n            case 0:\n              setTop(142);\n              break;\n\n            case 1:\n              setTop(447);\n              break;\n\n            case 2:\n              setTop(752);\n              break;\n\n            default:\n              setTop(function (prev) {\n                return prev;\n              });\n          }\n        }\n      }\n    };\n\n    window.addEventListener(\"scroll\", handleScroll);\n    return function () {\n      window.removeEventListener(\"scroll\", handleScroll);\n    };\n  }, [index]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container__circleBox),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container__circleBox__circle)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"section\", {\n      ref: ref,\n      onClick: goToSection,\n      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().aboutUsCard), (0,D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().aboutUsCard_main), mainItemIndex === index)),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n        children: text\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 81,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AboutUsCard, \"8uVE59eA/r6b92xF80p7sH8rXLk=\");\n\n_c = AboutUsCard;\n\nvar _c;\n\n$RefreshReg$(_c, \"AboutUsCard\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hYm91dC11cy9hYm91dC11cy1jYXJkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQVVPLElBQU1JLFdBQW1DLEdBQUcsU0FBdENBLFdBQXNDLENBQUNDLEtBQUQsRUFBVztFQUFBOztFQUM1RCxJQUFRQyxJQUFSLEdBQWlFRCxLQUFqRSxDQUFRQyxJQUFSO0VBQUEsSUFBY0MsS0FBZCxHQUFpRUYsS0FBakUsQ0FBY0UsS0FBZDtFQUFBLElBQXFCQyxhQUFyQixHQUFpRUgsS0FBakUsQ0FBcUJHLGFBQXJCO0VBQUEsSUFBb0NDLGdCQUFwQyxHQUFpRUosS0FBakUsQ0FBb0NJLGdCQUFwQztFQUFBLElBQXNEQyxNQUF0RCxHQUFpRUwsS0FBakUsQ0FBc0RLLE1BQXREO0VBQ0EsSUFBUUMsS0FBUixHQUF3QkwsSUFBeEIsQ0FBUUssS0FBUjtFQUFBLElBQWVDLElBQWYsR0FBd0JOLElBQXhCLENBQWVNLElBQWY7RUFDQSxJQUFNQyxHQUFHLEdBQUdaLDZDQUFNLENBQWEsSUFBYixDQUFsQjs7RUFFQSxJQUFNYSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNDLE9BQUQsRUFBa0I7SUFDNUMsSUFBTUMsSUFBSSxHQUFHRCxPQUFPLENBQUNFLHFCQUFSLEVBQWI7SUFDQSxJQUFNQyxZQUFZLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBNUI7SUFFQSxPQUFPSixJQUFJLENBQUNLLEdBQUwsR0FBV0gsWUFBWSxHQUFHLENBQTFCLElBQStCRixJQUFJLENBQUNNLE1BQUwsR0FBY0gsTUFBTSxDQUFDQyxXQUFQLEdBQXFCLENBQXpFO0VBQ0QsQ0FMRDs7RUFPQSxJQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0lBQ3hCLElBQUlWLEdBQUcsQ0FBQ1csT0FBUixFQUFpQjtNQUNmWCxHQUFHLENBQUNXLE9BQUosQ0FBWUMsY0FBWixDQUEyQjtRQUN6QkMsUUFBUSxFQUFFLFFBRGU7UUFFekJDLEtBQUssRUFBRSxRQUZrQjtRQUd6QkMsTUFBTSxFQUFFO01BSGlCLENBQTNCO01BTUFuQixnQkFBZ0IsQ0FBQ0YsS0FBRCxDQUFoQjs7TUFDQSxRQUFPQSxLQUFQO1FBQ0UsS0FBSyxDQUFMO1VBQ0VHLE1BQU0sQ0FBQyxHQUFELENBQU47VUFDQTs7UUFDRixLQUFLLENBQUw7VUFDRUEsTUFBTSxDQUFDLEdBQUQsQ0FBTjtVQUNBOztRQUNGLEtBQUssQ0FBTDtVQUNFQSxNQUFNLENBQUMsR0FBRCxDQUFOO1VBQ0E7O1FBQ0Y7VUFDRUEsTUFBTSxDQUFDLFVBQUNtQixJQUFEO1lBQUEsT0FBa0JBLElBQWxCO1VBQUEsQ0FBRCxDQUFOO01BWEo7SUFhRDtFQUNGLENBdkJEOztFQXlCQTdCLGdEQUFTLENBQUMsWUFBTTtJQUNkLElBQU04QixZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO01BQ3pCLElBQUlqQixHQUFHLENBQUNXLE9BQVIsRUFBaUI7UUFDZixJQUFJVixtQkFBbUIsQ0FBQ0QsR0FBRyxDQUFDVyxPQUFMLENBQXZCLEVBQXNDO1VBQ3BDZixnQkFBZ0IsQ0FBQ0YsS0FBRCxDQUFoQjs7VUFDQSxRQUFPQSxLQUFQO1lBQ0UsS0FBSyxDQUFMO2NBQ0VHLE1BQU0sQ0FBQyxHQUFELENBQU47Y0FDQTs7WUFDRixLQUFLLENBQUw7Y0FDRUEsTUFBTSxDQUFDLEdBQUQsQ0FBTjtjQUNBOztZQUNGLEtBQUssQ0FBTDtjQUNFQSxNQUFNLENBQUMsR0FBRCxDQUFOO2NBQ0E7O1lBQ0Y7Y0FDRUEsTUFBTSxDQUFDLFVBQUNtQixJQUFEO2dCQUFBLE9BQWtCQSxJQUFsQjtjQUFBLENBQUQsQ0FBTjtVQVhKO1FBYUQ7TUFDRjtJQUNGLENBbkJEOztJQXFCQVYsTUFBTSxDQUFDWSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0QsWUFBbEM7SUFFQSxPQUFPLFlBQU07TUFDWFgsTUFBTSxDQUFDYSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0YsWUFBckM7SUFDRCxDQUZEO0VBR0QsQ0EzQlEsRUEyQk4sQ0FBQ3ZCLEtBQUQsQ0EzQk0sQ0FBVDtFQTZCQSxvQkFDRTtJQUFLLFNBQVMsRUFBRUoscUVBQWhCO0lBQUEsd0JBQ0U7TUFBSyxTQUFTLEVBQUVBLGdGQUFoQjtNQUFBLHVCQUNFO1FBQUssU0FBUyxFQUFFQSx3RkFBbUNnQztNQUFuRDtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQSxTQURGLGVBSUU7TUFDRSxHQUFHLEVBQUV0QixHQURQO01BRUUsT0FBTyxFQUFFVSxXQUZYO01BR0UsU0FBUyxFQUFFckIsaURBQVUsQ0FBQ0MsdUVBQUQsNEpBQ2xCQSw0RUFEa0IsRUFDUUssYUFBYSxLQUFLRCxLQUQxQixFQUh2QjtNQUFBLHdCQU9FO1FBQUEsVUFBS0k7TUFBTDtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBUEYsZUFRRTtRQUFBLFVBQUlDO01BQUo7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQVJGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUpGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURGO0FBaUJELENBbkZNOztHQUFNUjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYWJvdXQtdXMvYWJvdXQtdXMtY2FyZC9pbmRleC50c3g/ZWZkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgeyBBQk9VVF9VUyB9IGZyb20gXCJzcmMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLnNjc3NcIjtcclxuXHJcbmludGVyZmFjZSBJQWJvdXRVc0NhcmQge1xyXG4gIGNhcmQ6ICh0eXBlb2YgQUJPVVRfVVMpWzBdO1xyXG4gIGluZGV4OiBudW1iZXI7XHJcbiAgbWFpbkl0ZW1JbmRleDogbnVtYmVyO1xyXG4gIHNldE1haW5JdGVtSW5kZXg6IChtYWluSXRlbUluZGV4OiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgc2V0VG9wOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxudW1iZXI+PjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFib3V0VXNDYXJkOiBSZWFjdC5GQzxJQWJvdXRVc0NhcmQ+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjYXJkLCBpbmRleCwgbWFpbkl0ZW1JbmRleCwgc2V0TWFpbkl0ZW1JbmRleCwgc2V0VG9wIH0gPSBwcm9wcztcclxuICBjb25zdCB7IHRpdGxlLCB0ZXh0IH0gPSBjYXJkO1xyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZjxhbnkgfCBudWxsPihudWxsKTtcclxuXHJcbiAgY29uc3QgaXNFbGVtZW50SW5WaWV3cG9ydCA9IChlbGVtZW50OiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgY2xpZW50SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuICAgIHJldHVybiByZWN0LnRvcCA8IGNsaWVudEhlaWdodCAvIDIgJiYgcmVjdC5ib3R0b20gPiB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdvVG9TZWN0aW9uID0gKCkgPT4ge1xyXG4gICAgaWYgKHJlZi5jdXJyZW50KSB7XHJcbiAgICAgIHJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHtcclxuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcclxuICAgICAgICBibG9jazogXCJjZW50ZXJcIixcclxuICAgICAgICBpbmxpbmU6IFwiY2VudGVyXCIsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc2V0TWFpbkl0ZW1JbmRleChpbmRleCk7XHJcbiAgICAgIHN3aXRjaChpbmRleCkge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgIHNldFRvcCgxNDIpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgc2V0VG9wKDQ0Nyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICBzZXRUb3AoNzUyKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBzZXRUb3AoKHByZXY6IG51bWJlcikgPT4gcHJldik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICBpZiAocmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBpZiAoaXNFbGVtZW50SW5WaWV3cG9ydChyZWYuY3VycmVudCkpIHtcclxuICAgICAgICAgIHNldE1haW5JdGVtSW5kZXgoaW5kZXgpO1xyXG4gICAgICAgICAgc3dpdGNoKGluZGV4KSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICBzZXRUb3AoMTQyKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgIHNldFRvcCg0NDcpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgc2V0VG9wKDc1Mik7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgc2V0VG9wKChwcmV2OiBudW1iZXIpID0+IHByZXYpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICB9O1xyXG4gIH0sIFtpbmRleF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fY2lyY2xlQm94fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fY2lyY2xlQm94X19jaXJjbGV9PjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHNlY3Rpb25cclxuICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICBvbkNsaWNrPXtnb1RvU2VjdGlvbn1cclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmFib3V0VXNDYXJkLCB7XHJcbiAgICAgICAgICBbc3R5bGVzLmFib3V0VXNDYXJkX21haW5dOiBtYWluSXRlbUluZGV4ID09PSBpbmRleCxcclxuICAgICAgICB9KX1cclxuICAgICAgPlxyXG4gICAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgICA8cD57dGV4dH08L3A+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJjbGFzc05hbWVzIiwic3R5bGVzIiwiQWJvdXRVc0NhcmQiLCJwcm9wcyIsImNhcmQiLCJpbmRleCIsIm1haW5JdGVtSW5kZXgiLCJzZXRNYWluSXRlbUluZGV4Iiwic2V0VG9wIiwidGl0bGUiLCJ0ZXh0IiwicmVmIiwiaXNFbGVtZW50SW5WaWV3cG9ydCIsImVsZW1lbnQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50SGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ0b3AiLCJib3R0b20iLCJnb1RvU2VjdGlvbiIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJpbmxpbmUiLCJwcmV2IiwiaGFuZGxlU2Nyb2xsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb250YWluZXIiLCJjb250YWluZXJfX2NpcmNsZUJveCIsImNvbnRhaW5lcl9fY2lyY2xlQm94X19jaXJjbGUiLCJhYm91dFVzQ2FyZCIsImFib3V0VXNDYXJkX21haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/about-us/about-us-card/index.tsx\n"));

/***/ })

});