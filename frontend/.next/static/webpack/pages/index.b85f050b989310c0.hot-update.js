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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AboutUsCard\": function() { return /* binding */ AboutUsCard; }\n/* harmony export */ });\n/* harmony import */ var D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.scss */ \"./src/components/about-us/about-us-card/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"D:\\\\IXNOME\\\\evo-landing\\\\frontend\\\\src\\\\components\\\\about-us\\\\about-us-card\\\\index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar AboutUsCard = function AboutUsCard(props) {\n  _s();\n\n  var card = props.card,\n      index = props.index,\n      mainItemIndex = props.mainItemIndex,\n      setMainItemIndex = props.setMainItemIndex,\n      setTop = props.setTop;\n  var title = card.title,\n      text = card.text;\n  var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n  var _use = use,\n      isMobile = _use.isMobile;\n  var isElementInViewport = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (element) {\n    var rect = element.getBoundingClientRect();\n    var clientHeight = window.innerHeight;\n    return rect.top < clientHeight / 2 && rect.bottom > clientHeight / 2;\n  }, []);\n  var changeTopPosition = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (index) {\n    switch (index) {\n      case 0:\n        setTop(142);\n        break;\n\n      case 1:\n        setTop(447);\n        break;\n\n      case 2:\n        setTop(752);\n        break;\n\n      default:\n        setTop(function (prev) {\n          return prev;\n        });\n    }\n  }, []);\n  var goToSection = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {\n    if (ref.current) {\n      ref.current.scrollIntoView({\n        behavior: \"smooth\",\n        block: \"center\",\n        inline: \"center\"\n      });\n      setMainItemIndex(index);\n      changeTopPosition(index);\n    }\n  }, [ref, index]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var handleScroll = function handleScroll() {\n      if (ref.current) {\n        if (isElementInViewport(ref.current)) {\n          setMainItemIndex(index);\n          changeTopPosition(index);\n        }\n      }\n    };\n\n    window.addEventListener(\"scroll\", handleScroll);\n    return function () {\n      window.removeEventListener(\"scroll\", handleScroll);\n    };\n  }, [index]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container__circleBox),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container__circleBox__circle)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"section\", {\n      ref: ref,\n      onClick: goToSection,\n      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().aboutUsCard), (0,D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().aboutUsCard_main), mainItemIndex === index)),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n        children: text\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 74,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AboutUsCard, \"C3X2hFeFJpo07fgcbDedUx+r9Ik=\");\n\n_c = AboutUsCard;\n\nvar _c;\n\n$RefreshReg$(_c, \"AboutUsCard\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hYm91dC11cy9hYm91dC11cy1jYXJkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQVVPLElBQU1LLFdBQW1DLEdBQUcsU0FBdENBLFdBQXNDLENBQUNDLEtBQUQsRUFBVztFQUFBOztFQUM1RCxJQUFRQyxJQUFSLEdBQWlFRCxLQUFqRSxDQUFRQyxJQUFSO0VBQUEsSUFBY0MsS0FBZCxHQUFpRUYsS0FBakUsQ0FBY0UsS0FBZDtFQUFBLElBQXFCQyxhQUFyQixHQUFpRUgsS0FBakUsQ0FBcUJHLGFBQXJCO0VBQUEsSUFBb0NDLGdCQUFwQyxHQUFpRUosS0FBakUsQ0FBb0NJLGdCQUFwQztFQUFBLElBQXNEQyxNQUF0RCxHQUFpRUwsS0FBakUsQ0FBc0RLLE1BQXREO0VBQ0EsSUFBUUMsS0FBUixHQUF3QkwsSUFBeEIsQ0FBUUssS0FBUjtFQUFBLElBQWVDLElBQWYsR0FBd0JOLElBQXhCLENBQWVNLElBQWY7RUFDQSxJQUFNQyxHQUFHLEdBQUdaLDZDQUFNLENBQWEsSUFBYixDQUFsQjtFQUNBLFdBQXFCYSxHQUFyQjtFQUFBLElBQVFDLFFBQVIsUUFBUUEsUUFBUjtFQUVBLElBQU1DLG1CQUFtQixHQUFHakIsa0RBQVcsQ0FBQyxVQUFDa0IsT0FBRCxFQUFrQjtJQUN4RCxJQUFNQyxJQUFJLEdBQUdELE9BQU8sQ0FBQ0UscUJBQVIsRUFBYjtJQUNBLElBQU1DLFlBQVksR0FBR0MsTUFBTSxDQUFDQyxXQUE1QjtJQUVBLE9BQU9KLElBQUksQ0FBQ0ssR0FBTCxHQUFXSCxZQUFZLEdBQUcsQ0FBMUIsSUFBK0JGLElBQUksQ0FBQ00sTUFBTCxHQUFjSixZQUFZLEdBQUcsQ0FBbkU7RUFDRCxDQUxzQyxFQUtwQyxFQUxvQyxDQUF2QztFQU9BLElBQU1LLGlCQUFpQixHQUFHMUIsa0RBQVcsQ0FBQyxVQUFDUSxLQUFELEVBQVc7SUFDL0MsUUFBT0EsS0FBUDtNQUNFLEtBQUssQ0FBTDtRQUNFRyxNQUFNLENBQUMsR0FBRCxDQUFOO1FBQ0E7O01BQ0YsS0FBSyxDQUFMO1FBQ0VBLE1BQU0sQ0FBQyxHQUFELENBQU47UUFDQTs7TUFDRixLQUFLLENBQUw7UUFDRUEsTUFBTSxDQUFDLEdBQUQsQ0FBTjtRQUNBOztNQUNGO1FBQ0VBLE1BQU0sQ0FBQyxVQUFDZ0IsSUFBRDtVQUFBLE9BQWtCQSxJQUFsQjtRQUFBLENBQUQsQ0FBTjtJQVhKO0VBYUQsQ0Fkb0MsRUFjbEMsRUFka0MsQ0FBckM7RUFnQkEsSUFBTUMsV0FBVyxHQUFHNUIsa0RBQVcsQ0FBQyxZQUFNO0lBQ3BDLElBQUljLEdBQUcsQ0FBQ2UsT0FBUixFQUFpQjtNQUNmZixHQUFHLENBQUNlLE9BQUosQ0FBWUMsY0FBWixDQUEyQjtRQUN6QkMsUUFBUSxFQUFFLFFBRGU7UUFFekJDLEtBQUssRUFBRSxRQUZrQjtRQUd6QkMsTUFBTSxFQUFFO01BSGlCLENBQTNCO01BTUF2QixnQkFBZ0IsQ0FBQ0YsS0FBRCxDQUFoQjtNQUNBa0IsaUJBQWlCLENBQUNsQixLQUFELENBQWpCO0lBQ0Q7RUFDRixDQVg4QixFQVc1QixDQUFDTSxHQUFELEVBQU1OLEtBQU4sQ0FYNEIsQ0FBL0I7RUFhQVAsZ0RBQVMsQ0FBQyxZQUFNO0lBQ2QsSUFBTWlDLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07TUFDekIsSUFBSXBCLEdBQUcsQ0FBQ2UsT0FBUixFQUFpQjtRQUNmLElBQUlaLG1CQUFtQixDQUFDSCxHQUFHLENBQUNlLE9BQUwsQ0FBdkIsRUFBc0M7VUFDcENuQixnQkFBZ0IsQ0FBQ0YsS0FBRCxDQUFoQjtVQUNBa0IsaUJBQWlCLENBQUNsQixLQUFELENBQWpCO1FBQ0Q7TUFDRjtJQUNGLENBUEQ7O0lBU0FjLE1BQU0sQ0FBQ2EsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NELFlBQWxDO0lBRUEsT0FBTyxZQUFNO01BQ1haLE1BQU0sQ0FBQ2MsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNGLFlBQXJDO0lBQ0QsQ0FGRDtFQUdELENBZlEsRUFlTixDQUFDMUIsS0FBRCxDQWZNLENBQVQ7RUFpQkEsb0JBQ0U7SUFBSyxTQUFTLEVBQUVKLHFFQUFoQjtJQUFBLHdCQUNFO01BQUssU0FBUyxFQUFFQSxnRkFBaEI7TUFBQSx1QkFDRTtRQUFLLFNBQVMsRUFBRUEsd0ZBQW1DbUM7TUFBbkQ7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FERixlQUlFO01BQ0UsR0FBRyxFQUFFekIsR0FEUDtNQUVFLE9BQU8sRUFBRWMsV0FGWDtNQUdFLFNBQVMsRUFBRXpCLGlEQUFVLENBQUNDLHVFQUFELDRKQUNsQkEsNEVBRGtCLEVBQ1FLLGFBQWEsS0FBS0QsS0FEMUIsRUFIdkI7TUFBQSx3QkFPRTtRQUFBLFVBQUtJO01BQUw7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQVBGLGVBUUU7UUFBQSxVQUFJQztNQUFKO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FSRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FKRjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FERjtBQWlCRCxDQTVFTTs7R0FBTVI7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Fib3V0LXVzL2Fib3V0LXVzLWNhcmQvaW5kZXgudHN4P2VmZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7IEFCT1VUX1VTIH0gZnJvbSBcInNyYy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuaW50ZXJmYWNlIElBYm91dFVzQ2FyZCB7XHJcbiAgY2FyZDogKHR5cGVvZiBBQk9VVF9VUylbMF07XHJcbiAgaW5kZXg6IG51bWJlcjtcclxuICBtYWluSXRlbUluZGV4OiBudW1iZXI7XHJcbiAgc2V0TWFpbkl0ZW1JbmRleDogKG1haW5JdGVtSW5kZXg6IG51bWJlcikgPT4gdm9pZDtcclxuICBzZXRUb3A6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPG51bWJlcj4+O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQWJvdXRVc0NhcmQ6IFJlYWN0LkZDPElBYm91dFVzQ2FyZD4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNhcmQsIGluZGV4LCBtYWluSXRlbUluZGV4LCBzZXRNYWluSXRlbUluZGV4LCBzZXRUb3AgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHsgdGl0bGUsIHRleHQgfSA9IGNhcmQ7XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmPGFueSB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IHsgaXNNb2JpbGUgfSA9IHVzZVxyXG5cclxuICBjb25zdCBpc0VsZW1lbnRJblZpZXdwb3J0ID0gdXNlQ2FsbGJhY2soKGVsZW1lbnQ6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCBjbGllbnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG4gICAgcmV0dXJuIHJlY3QudG9wIDwgY2xpZW50SGVpZ2h0IC8gMiAmJiByZWN0LmJvdHRvbSA+IGNsaWVudEhlaWdodCAvIDI7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBjaGFuZ2VUb3BQb3NpdGlvbiA9IHVzZUNhbGxiYWNrKChpbmRleCkgPT4ge1xyXG4gICAgc3dpdGNoKGluZGV4KSB7XHJcbiAgICAgIGNhc2UgMDpcclxuICAgICAgICBzZXRUb3AoMTQyKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHNldFRvcCg0NDcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDI6XHJcbiAgICAgICAgc2V0VG9wKDc1Mik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgc2V0VG9wKChwcmV2OiBudW1iZXIpID0+IHByZXYpO1xyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBnb1RvU2VjdGlvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmIChyZWYuY3VycmVudCkge1xyXG4gICAgICByZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgICAgICAgYmxvY2s6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgaW5saW5lOiBcImNlbnRlclwiLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNldE1haW5JdGVtSW5kZXgoaW5kZXgpO1xyXG4gICAgICBjaGFuZ2VUb3BQb3NpdGlvbihpbmRleClcclxuICAgIH1cclxuICB9LCBbcmVmLCBpbmRleF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICBpZiAocmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBpZiAoaXNFbGVtZW50SW5WaWV3cG9ydChyZWYuY3VycmVudCkpIHtcclxuICAgICAgICAgIHNldE1haW5JdGVtSW5kZXgoaW5kZXgpO1xyXG4gICAgICAgICAgY2hhbmdlVG9wUG9zaXRpb24oaW5kZXgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW2luZGV4XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19jaXJjbGVCb3h9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19jaXJjbGVCb3hfX2NpcmNsZX0+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c2VjdGlvblxyXG4gICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgIG9uQ2xpY2s9e2dvVG9TZWN0aW9ufVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuYWJvdXRVc0NhcmQsIHtcclxuICAgICAgICAgIFtzdHlsZXMuYWJvdXRVc0NhcmRfbWFpbl06IG1haW5JdGVtSW5kZXggPT09IGluZGV4LFxyXG4gICAgICAgIH0pfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICAgIDxwPnt0ZXh0fTwvcD5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiY2xhc3NOYW1lcyIsInN0eWxlcyIsIkFib3V0VXNDYXJkIiwicHJvcHMiLCJjYXJkIiwiaW5kZXgiLCJtYWluSXRlbUluZGV4Iiwic2V0TWFpbkl0ZW1JbmRleCIsInNldFRvcCIsInRpdGxlIiwidGV4dCIsInJlZiIsInVzZSIsImlzTW9iaWxlIiwiaXNFbGVtZW50SW5WaWV3cG9ydCIsImVsZW1lbnQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50SGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ0b3AiLCJib3R0b20iLCJjaGFuZ2VUb3BQb3NpdGlvbiIsInByZXYiLCJnb1RvU2VjdGlvbiIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJpbmxpbmUiLCJoYW5kbGVTY3JvbGwiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnRhaW5lciIsImNvbnRhaW5lcl9fY2lyY2xlQm94IiwiY29udGFpbmVyX19jaXJjbGVCb3hfX2NpcmNsZSIsImFib3V0VXNDYXJkIiwiYWJvdXRVc0NhcmRfbWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/about-us/about-us-card/index.tsx\n"));

/***/ })

});