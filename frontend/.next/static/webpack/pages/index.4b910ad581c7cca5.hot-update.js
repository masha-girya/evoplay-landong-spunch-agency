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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AboutUsCard\": function() { return /* binding */ AboutUsCard; }\n/* harmony export */ });\n/* harmony import */ var D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.scss */ \"./src/components/about-us/about-us-card/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"D:\\\\IXNOME\\\\evo-landing\\\\frontend\\\\src\\\\components\\\\about-us\\\\about-us-card\\\\index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar AboutUsCard = function AboutUsCard(props) {\n  _s();\n\n  var card = props.card,\n      index = props.index,\n      mainItemIndex = props.mainItemIndex,\n      setMainItemIndex = props.setMainItemIndex,\n      setTop = props.setTop;\n  var title = card.title,\n      text = card.text;\n  var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  var isElementInViewport = function isElementInViewport(element) {\n    var rect = element.getBoundingClientRect();\n\n    if (index === 1 && ref.current) {// console.log({\n      //   refTop: ref.current.getBoundingClientRect().top,\n      //   window: window.innerHeight,\n      // });\n    } // return (\n    //   rect.top >= 0 &&\n    //   rect.left >= 0 &&\n    //   rect.bottom <= window.innerHeight &&\n    //   rect.right <= window.innerWidth\n    // );\n\n\n    return rect.top < viewportHeight / 2 && rect.bottom > viewportHeight / 2;\n  };\n\n  var goToSection = function goToSection() {\n    if (ref.current) {\n      ref.current.scrollIntoView({\n        behavior: \"smooth\",\n        block: \"center\",\n        inline: \"center\"\n      });\n      setMainItemIndex(index);\n\n      switch (index) {\n        case 0:\n          setTop(142);\n          break;\n\n        case 1:\n          setTop(447);\n          break;\n\n        case 2:\n          setTop(752);\n          break;\n\n        default:\n          setTop(function (prev) {\n            return prev;\n          });\n      }\n    }\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var handleScroll = function handleScroll() {\n      if (ref.current) {\n        if (isElementInViewport(ref.current)) {\n          setMainItemIndex(index);\n\n          switch (index) {\n            case 0:\n              setTop(142);\n              break;\n\n            case 1:\n              setTop(447);\n              break;\n\n            case 2:\n              setTop(752);\n              break;\n\n            default:\n              setTop(function (prev) {\n                return prev;\n              });\n          }\n        }\n      }\n    };\n\n    window.addEventListener(\"scroll\", handleScroll);\n    return function () {\n      window.removeEventListener(\"scroll\", handleScroll);\n    };\n  }, [index]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container__circleBox),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container__circleBox__circle)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"section\", {\n      ref: ref,\n      onClick: goToSection,\n      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().aboutUsCard), (0,D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().aboutUsCard_main), mainItemIndex === index)),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n        children: text\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 94,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AboutUsCard, \"8uVE59eA/r6b92xF80p7sH8rXLk=\");\n\n_c = AboutUsCard;\n\nvar _c;\n\n$RefreshReg$(_c, \"AboutUsCard\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hYm91dC11cy9hYm91dC11cy1jYXJkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQVVPLElBQU1JLFdBQW1DLEdBQUcsU0FBdENBLFdBQXNDLENBQUNDLEtBQUQsRUFBVztFQUFBOztFQUM1RCxJQUFRQyxJQUFSLEdBQWlFRCxLQUFqRSxDQUFRQyxJQUFSO0VBQUEsSUFBY0MsS0FBZCxHQUFpRUYsS0FBakUsQ0FBY0UsS0FBZDtFQUFBLElBQXFCQyxhQUFyQixHQUFpRUgsS0FBakUsQ0FBcUJHLGFBQXJCO0VBQUEsSUFBb0NDLGdCQUFwQyxHQUFpRUosS0FBakUsQ0FBb0NJLGdCQUFwQztFQUFBLElBQXNEQyxNQUF0RCxHQUFpRUwsS0FBakUsQ0FBc0RLLE1BQXREO0VBQ0EsSUFBUUMsS0FBUixHQUF3QkwsSUFBeEIsQ0FBUUssS0FBUjtFQUFBLElBQWVDLElBQWYsR0FBd0JOLElBQXhCLENBQWVNLElBQWY7RUFDQSxJQUFNQyxHQUFHLEdBQUdaLDZDQUFNLENBQWEsSUFBYixDQUFsQjs7RUFFQSxJQUFNYSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNDLE9BQUQsRUFBa0I7SUFDNUMsSUFBTUMsSUFBSSxHQUFHRCxPQUFPLENBQUNFLHFCQUFSLEVBQWI7O0lBRUEsSUFBSVYsS0FBSyxLQUFLLENBQVYsSUFBZU0sR0FBRyxDQUFDSyxPQUF2QixFQUFnQyxDQUM5QjtNQUNBO01BQ0E7TUFDQTtJQUNELENBUjJDLENBVTVDO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7O0lBRUEsT0FBT0YsSUFBSSxDQUFDRyxHQUFMLEdBQVdDLGNBQWMsR0FBRyxDQUE1QixJQUFpQ0osSUFBSSxDQUFDSyxNQUFMLEdBQWNELGNBQWMsR0FBRyxDQUF2RTtFQUNELENBbEJEOztFQW9CQSxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0lBQ3hCLElBQUlULEdBQUcsQ0FBQ0ssT0FBUixFQUFpQjtNQUNmTCxHQUFHLENBQUNLLE9BQUosQ0FBWUssY0FBWixDQUEyQjtRQUN6QkMsUUFBUSxFQUFFLFFBRGU7UUFFekJDLEtBQUssRUFBRSxRQUZrQjtRQUd6QkMsTUFBTSxFQUFFO01BSGlCLENBQTNCO01BTUFqQixnQkFBZ0IsQ0FBQ0YsS0FBRCxDQUFoQjs7TUFDQSxRQUFPQSxLQUFQO1FBQ0UsS0FBSyxDQUFMO1VBQ0VHLE1BQU0sQ0FBQyxHQUFELENBQU47VUFDQTs7UUFDRixLQUFLLENBQUw7VUFDRUEsTUFBTSxDQUFDLEdBQUQsQ0FBTjtVQUNBOztRQUNGLEtBQUssQ0FBTDtVQUNFQSxNQUFNLENBQUMsR0FBRCxDQUFOO1VBQ0E7O1FBQ0Y7VUFDRUEsTUFBTSxDQUFDLFVBQUNpQixJQUFEO1lBQUEsT0FBa0JBLElBQWxCO1VBQUEsQ0FBRCxDQUFOO01BWEo7SUFhRDtFQUNGLENBdkJEOztFQXlCQTNCLGdEQUFTLENBQUMsWUFBTTtJQUNkLElBQU00QixZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO01BQ3pCLElBQUlmLEdBQUcsQ0FBQ0ssT0FBUixFQUFpQjtRQUNmLElBQUlKLG1CQUFtQixDQUFDRCxHQUFHLENBQUNLLE9BQUwsQ0FBdkIsRUFBc0M7VUFDcENULGdCQUFnQixDQUFDRixLQUFELENBQWhCOztVQUNBLFFBQU9BLEtBQVA7WUFDRSxLQUFLLENBQUw7Y0FDRUcsTUFBTSxDQUFDLEdBQUQsQ0FBTjtjQUNBOztZQUNGLEtBQUssQ0FBTDtjQUNFQSxNQUFNLENBQUMsR0FBRCxDQUFOO2NBQ0E7O1lBQ0YsS0FBSyxDQUFMO2NBQ0VBLE1BQU0sQ0FBQyxHQUFELENBQU47Y0FDQTs7WUFDRjtjQUNFQSxNQUFNLENBQUMsVUFBQ2lCLElBQUQ7Z0JBQUEsT0FBa0JBLElBQWxCO2NBQUEsQ0FBRCxDQUFOO1VBWEo7UUFhRDtNQUNGO0lBQ0YsQ0FuQkQ7O0lBcUJBRSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDRixZQUFsQztJQUVBLE9BQU8sWUFBTTtNQUNYQyxNQUFNLENBQUNFLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDSCxZQUFyQztJQUNELENBRkQ7RUFHRCxDQTNCUSxFQTJCTixDQUFDckIsS0FBRCxDQTNCTSxDQUFUO0VBNkJBLG9CQUNFO0lBQUssU0FBUyxFQUFFSixxRUFBaEI7SUFBQSx3QkFDRTtNQUFLLFNBQVMsRUFBRUEsZ0ZBQWhCO01BQUEsdUJBQ0U7UUFBSyxTQUFTLEVBQUVBLHdGQUFtQytCO01BQW5EO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFERjtNQUFBO01BQUE7TUFBQTtJQUFBLFNBREYsZUFJRTtNQUNFLEdBQUcsRUFBRXJCLEdBRFA7TUFFRSxPQUFPLEVBQUVTLFdBRlg7TUFHRSxTQUFTLEVBQUVwQixpREFBVSxDQUFDQyx1RUFBRCw0SkFDbEJBLDRFQURrQixFQUNRSyxhQUFhLEtBQUtELEtBRDFCLEVBSHZCO01BQUEsd0JBT0U7UUFBQSxVQUFLSTtNQUFMO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FQRixlQVFFO1FBQUEsVUFBSUM7TUFBSjtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBUkY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBSkY7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREY7QUFpQkQsQ0FoR007O0dBQU1SOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hYm91dC11cy9hYm91dC11cy1jYXJkL2luZGV4LnRzeD9lZmQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7IEFCT1VUX1VTIH0gZnJvbSBcInNyYy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuaW50ZXJmYWNlIElBYm91dFVzQ2FyZCB7XHJcbiAgY2FyZDogKHR5cGVvZiBBQk9VVF9VUylbMF07XHJcbiAgaW5kZXg6IG51bWJlcjtcclxuICBtYWluSXRlbUluZGV4OiBudW1iZXI7XHJcbiAgc2V0TWFpbkl0ZW1JbmRleDogKG1haW5JdGVtSW5kZXg6IG51bWJlcikgPT4gdm9pZDtcclxuICBzZXRUb3A6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPG51bWJlcj4+O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQWJvdXRVc0NhcmQ6IFJlYWN0LkZDPElBYm91dFVzQ2FyZD4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNhcmQsIGluZGV4LCBtYWluSXRlbUluZGV4LCBzZXRNYWluSXRlbUluZGV4LCBzZXRUb3AgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHsgdGl0bGUsIHRleHQgfSA9IGNhcmQ7XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmPGFueSB8IG51bGw+KG51bGwpO1xyXG5cclxuICBjb25zdCBpc0VsZW1lbnRJblZpZXdwb3J0ID0gKGVsZW1lbnQ6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgaWYgKGluZGV4ID09PSAxICYmIHJlZi5jdXJyZW50KSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHtcclxuICAgICAgLy8gICByZWZUb3A6IHJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCxcclxuICAgICAgLy8gICB3aW5kb3c6IHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmV0dXJuIChcclxuICAgIC8vICAgcmVjdC50b3AgPj0gMCAmJlxyXG4gICAgLy8gICByZWN0LmxlZnQgPj0gMCAmJlxyXG4gICAgLy8gICByZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQgJiZcclxuICAgIC8vICAgcmVjdC5yaWdodCA8PSB3aW5kb3cuaW5uZXJXaWR0aFxyXG4gICAgLy8gKTtcclxuXHJcbiAgICByZXR1cm4gcmVjdC50b3AgPCB2aWV3cG9ydEhlaWdodCAvIDIgJiYgcmVjdC5ib3R0b20gPiB2aWV3cG9ydEhlaWdodCAvIDI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ29Ub1NlY3Rpb24gPSAoKSA9PiB7XHJcbiAgICBpZiAocmVmLmN1cnJlbnQpIHtcclxuICAgICAgcmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoe1xyXG4gICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgICAgIGJsb2NrOiBcImNlbnRlclwiLFxyXG4gICAgICAgIGlubGluZTogXCJjZW50ZXJcIixcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZXRNYWluSXRlbUluZGV4KGluZGV4KTtcclxuICAgICAgc3dpdGNoKGluZGV4KSB7XHJcbiAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgc2V0VG9wKDE0Mik7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICBzZXRUb3AoNDQ3KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgIHNldFRvcCg3NTIpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHNldFRvcCgocHJldjogbnVtYmVyKSA9PiBwcmV2KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChyZWYuY3VycmVudCkge1xyXG4gICAgICAgIGlmIChpc0VsZW1lbnRJblZpZXdwb3J0KHJlZi5jdXJyZW50KSkge1xyXG4gICAgICAgICAgc2V0TWFpbkl0ZW1JbmRleChpbmRleCk7XHJcbiAgICAgICAgICBzd2l0Y2goaW5kZXgpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgIHNldFRvcCgxNDIpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgc2V0VG9wKDQ0Nyk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICBzZXRUb3AoNzUyKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICBzZXRUb3AoKHByZXY6IG51bWJlcikgPT4gcHJldik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW2luZGV4XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19jaXJjbGVCb3h9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19jaXJjbGVCb3hfX2NpcmNsZX0+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c2VjdGlvblxyXG4gICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgIG9uQ2xpY2s9e2dvVG9TZWN0aW9ufVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuYWJvdXRVc0NhcmQsIHtcclxuICAgICAgICAgIFtzdHlsZXMuYWJvdXRVc0NhcmRfbWFpbl06IG1haW5JdGVtSW5kZXggPT09IGluZGV4LFxyXG4gICAgICAgIH0pfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICAgIDxwPnt0ZXh0fTwvcD5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsImNsYXNzTmFtZXMiLCJzdHlsZXMiLCJBYm91dFVzQ2FyZCIsInByb3BzIiwiY2FyZCIsImluZGV4IiwibWFpbkl0ZW1JbmRleCIsInNldE1haW5JdGVtSW5kZXgiLCJzZXRUb3AiLCJ0aXRsZSIsInRleHQiLCJyZWYiLCJpc0VsZW1lbnRJblZpZXdwb3J0IiwiZWxlbWVudCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjdXJyZW50IiwidG9wIiwidmlld3BvcnRIZWlnaHQiLCJib3R0b20iLCJnb1RvU2VjdGlvbiIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsImlubGluZSIsInByZXYiLCJoYW5kbGVTY3JvbGwiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnRhaW5lciIsImNvbnRhaW5lcl9fY2lyY2xlQm94IiwiY29udGFpbmVyX19jaXJjbGVCb3hfX2NpcmNsZSIsImFib3V0VXNDYXJkIiwiYWJvdXRVc0NhcmRfbWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/about-us/about-us-card/index.tsx\n"));

/***/ })

});