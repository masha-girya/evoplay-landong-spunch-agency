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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AboutUsCard\": function() { return /* binding */ AboutUsCard; }\n/* harmony export */ });\n/* harmony import */ var D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.scss */ \"./src/components/about-us/about-us-card/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"D:\\\\IXNOME\\\\evo-landing\\\\frontend\\\\src\\\\components\\\\about-us\\\\about-us-card\\\\index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar AboutUsCard = function AboutUsCard(props) {\n  _s();\n\n  var card = props.card,\n      index = props.index,\n      mainItemIndex = props.mainItemIndex,\n      setMainItemIndex = props.setMainItemIndex;\n  var title = card.title,\n      text = card.text;\n  var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  var isElementInViewport = function isElementInViewport(element) {\n    var rect = element.getBoundingClientRect();\n\n    if (index === 1 && ref.current) {\n      console.log({\n        refTop: ref.current.getBoundingClientRect().top,\n        window: window.innerHeight\n      });\n    }\n\n    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth;\n  };\n\n  var goToSection = function goToSection() {\n    if (ref.current) {\n      ref.current.scrollIntoView({\n        behavior: \"smooth\",\n        block: \"center\",\n        inline: \"center\"\n      });\n      setMainItemIndex(index);\n    }\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var handleScroll = function handleScroll() {\n      if (ref.current) {\n        if (isElementInViewport(ref.current)) {\n          setMainItemIndex(index);\n        }\n      }\n    };\n\n    window.addEventListener(\"scroll\", handleScroll);\n    return function () {\n      window.removeEventListener(\"scroll\", handleScroll);\n    };\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container), (0,D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container_main), mainItemIndex === index)),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().aboutUsCard__circleBox),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().aboutUsCard__circleBox__circle)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"section\", {\n      ref: ref,\n      onClick: goToSection,\n      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().aboutUsCard), (0,D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().aboutUsCard_main), mainItemIndex === index)),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n        children: text\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AboutUsCard, \"8uVE59eA/r6b92xF80p7sH8rXLk=\");\n\n_c = AboutUsCard;\n\nvar _c;\n\n$RefreshReg$(_c, \"AboutUsCard\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hYm91dC11cy9hYm91dC11cy1jYXJkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQVNPLElBQU1JLFdBQW1DLEdBQUcsU0FBdENBLFdBQXNDLENBQUNDLEtBQUQsRUFBVztFQUFBOztFQUM1RCxJQUFRQyxJQUFSLEdBQXlERCxLQUF6RCxDQUFRQyxJQUFSO0VBQUEsSUFBY0MsS0FBZCxHQUF5REYsS0FBekQsQ0FBY0UsS0FBZDtFQUFBLElBQXFCQyxhQUFyQixHQUF5REgsS0FBekQsQ0FBcUJHLGFBQXJCO0VBQUEsSUFBb0NDLGdCQUFwQyxHQUF5REosS0FBekQsQ0FBb0NJLGdCQUFwQztFQUNBLElBQVFDLEtBQVIsR0FBd0JKLElBQXhCLENBQVFJLEtBQVI7RUFBQSxJQUFlQyxJQUFmLEdBQXdCTCxJQUF4QixDQUFlSyxJQUFmO0VBQ0EsSUFBTUMsR0FBRyxHQUFHWCw2Q0FBTSxDQUFhLElBQWIsQ0FBbEI7O0VBRUEsSUFBTVksbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxPQUFELEVBQWtCO0lBQzVDLElBQU1DLElBQUksR0FBR0QsT0FBTyxDQUFDRSxxQkFBUixFQUFiOztJQUVBLElBQUlULEtBQUssS0FBSyxDQUFWLElBQWVLLEdBQUcsQ0FBQ0ssT0FBdkIsRUFBZ0M7TUFDOUJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZO1FBQ1ZDLE1BQU0sRUFBRVIsR0FBRyxDQUFDSyxPQUFKLENBQVlELHFCQUFaLEdBQW9DSyxHQURsQztRQUVWQyxNQUFNLEVBQUVBLE1BQU0sQ0FBQ0M7TUFGTCxDQUFaO0lBSUQ7O0lBRUQsT0FDRVIsSUFBSSxDQUFDTSxHQUFMLElBQVksQ0FBWixJQUNBTixJQUFJLENBQUNTLElBQUwsSUFBYSxDQURiLElBRUFULElBQUksQ0FBQ1UsTUFBTCxJQUFlSCxNQUFNLENBQUNDLFdBRnRCLElBR0FSLElBQUksQ0FBQ1csS0FBTCxJQUFjSixNQUFNLENBQUNLLFVBSnZCO0VBTUQsQ0FoQkQ7O0VBa0JBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07SUFDeEIsSUFBSWhCLEdBQUcsQ0FBQ0ssT0FBUixFQUFpQjtNQUNmTCxHQUFHLENBQUNLLE9BQUosQ0FBWVksY0FBWixDQUEyQjtRQUN6QkMsUUFBUSxFQUFFLFFBRGU7UUFFekJDLEtBQUssRUFBRSxRQUZrQjtRQUd6QkMsTUFBTSxFQUFFO01BSGlCLENBQTNCO01BTUF2QixnQkFBZ0IsQ0FBQ0YsS0FBRCxDQUFoQjtJQUNEO0VBQ0YsQ0FWRDs7RUFZQVAsZ0RBQVMsQ0FBQyxZQUFNO0lBQ2QsSUFBTWlDLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07TUFDekIsSUFBSXJCLEdBQUcsQ0FBQ0ssT0FBUixFQUFpQjtRQUNmLElBQUlKLG1CQUFtQixDQUFDRCxHQUFHLENBQUNLLE9BQUwsQ0FBdkIsRUFBc0M7VUFDcENSLGdCQUFnQixDQUFDRixLQUFELENBQWhCO1FBQ0Q7TUFDRjtJQUNGLENBTkQ7O0lBUUFlLE1BQU0sQ0FBQ1ksZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NELFlBQWxDO0lBRUEsT0FBTyxZQUFNO01BQ1hYLE1BQU0sQ0FBQ2EsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNGLFlBQXJDO0lBQ0QsQ0FGRDtFQUdELENBZFEsRUFjTixFQWRNLENBQVQ7RUFnQkEsb0JBQ0U7SUFBSyxTQUFTLEVBQUUvQixpREFBVSxDQUFDQyxxRUFBRCw0SkFDdkJBLDBFQUR1QixFQUNDSyxhQUFhLEtBQUtELEtBRG5CLEVBQTFCO0lBQUEsd0JBR0U7TUFBSyxTQUFTLEVBQUVKLGtGQUFoQjtNQUFBLHVCQUNFO1FBQUssU0FBUyxFQUFFQSwwRkFBcUNvQztNQUFyRDtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUhGLGVBTUU7TUFDRSxHQUFHLEVBQUUzQixHQURQO01BRUUsT0FBTyxFQUFFZ0IsV0FGWDtNQUdFLFNBQVMsRUFBRTFCLGlEQUFVLENBQUNDLHVFQUFELDRKQUNsQkEsNEVBRGtCLEVBQ1FLLGFBQWEsS0FBS0QsS0FEMUIsRUFIdkI7TUFBQSx3QkFPRTtRQUFBLFVBQUtHO01BQUw7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQVBGLGVBUUU7UUFBQSxVQUFJQztNQUFKO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FSRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FORjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FERjtBQW1CRCxDQXRFTTs7R0FBTVA7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Fib3V0LXVzL2Fib3V0LXVzLWNhcmQvaW5kZXgudHN4P2VmZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHsgQUJPVVRfVVMgfSBmcm9tIFwic3JjL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5zY3NzXCI7XHJcblxyXG5pbnRlcmZhY2UgSUFib3V0VXNDYXJkIHtcclxuICBjYXJkOiAodHlwZW9mIEFCT1VUX1VTKVswXTtcclxuICBpbmRleDogbnVtYmVyO1xyXG4gIG1haW5JdGVtSW5kZXg6IG51bWJlcjtcclxuICBzZXRNYWluSXRlbUluZGV4OiAobWFpbkl0ZW1JbmRleDogbnVtYmVyKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQWJvdXRVc0NhcmQ6IFJlYWN0LkZDPElBYm91dFVzQ2FyZD4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNhcmQsIGluZGV4LCBtYWluSXRlbUluZGV4LCBzZXRNYWluSXRlbUluZGV4IH0gPSBwcm9wcztcclxuICBjb25zdCB7IHRpdGxlLCB0ZXh0IH0gPSBjYXJkO1xyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZjxhbnkgfCBudWxsPihudWxsKTtcclxuXHJcbiAgY29uc3QgaXNFbGVtZW50SW5WaWV3cG9ydCA9IChlbGVtZW50OiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgIGlmIChpbmRleCA9PT0gMSAmJiByZWYuY3VycmVudCkge1xyXG4gICAgICBjb25zb2xlLmxvZyh7XHJcbiAgICAgICAgcmVmVG9wOiByZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AsXHJcbiAgICAgICAgd2luZG93OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIHJlY3QudG9wID49IDAgJiZcclxuICAgICAgcmVjdC5sZWZ0ID49IDAgJiZcclxuICAgICAgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0ICYmXHJcbiAgICAgIHJlY3QucmlnaHQgPD0gd2luZG93LmlubmVyV2lkdGhcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ29Ub1NlY3Rpb24gPSAoKSA9PiB7XHJcbiAgICBpZiAocmVmLmN1cnJlbnQpIHtcclxuICAgICAgcmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoe1xyXG4gICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgICAgIGJsb2NrOiBcImNlbnRlclwiLFxyXG4gICAgICAgIGlubGluZTogXCJjZW50ZXJcIixcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZXRNYWluSXRlbUluZGV4KGluZGV4KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICBpZiAocmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBpZiAoaXNFbGVtZW50SW5WaWV3cG9ydChyZWYuY3VycmVudCkpIHtcclxuICAgICAgICAgIHNldE1haW5JdGVtSW5kZXgoaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5jb250YWluZXIsIHtcclxuICAgICAgW3N0eWxlcy5jb250YWluZXJfbWFpbl06IG1haW5JdGVtSW5kZXggPT09IGluZGV4LFxyXG4gICAgfSl9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFib3V0VXNDYXJkX19jaXJjbGVCb3h9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWJvdXRVc0NhcmRfX2NpcmNsZUJveF9fY2lyY2xlfT48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzZWN0aW9uXHJcbiAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgb25DbGljaz17Z29Ub1NlY3Rpb259XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5hYm91dFVzQ2FyZCwge1xyXG4gICAgICAgICAgW3N0eWxlcy5hYm91dFVzQ2FyZF9tYWluXTogbWFpbkl0ZW1JbmRleCA9PT0gaW5kZXgsXHJcbiAgICAgICAgfSl9XHJcbiAgICAgID5cclxuICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgPHA+e3RleHR9PC9wPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwiY2xhc3NOYW1lcyIsInN0eWxlcyIsIkFib3V0VXNDYXJkIiwicHJvcHMiLCJjYXJkIiwiaW5kZXgiLCJtYWluSXRlbUluZGV4Iiwic2V0TWFpbkl0ZW1JbmRleCIsInRpdGxlIiwidGV4dCIsInJlZiIsImlzRWxlbWVudEluVmlld3BvcnQiLCJlbGVtZW50IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImN1cnJlbnQiLCJjb25zb2xlIiwibG9nIiwicmVmVG9wIiwidG9wIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJpbm5lcldpZHRoIiwiZ29Ub1NlY3Rpb24iLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJpbmxpbmUiLCJoYW5kbGVTY3JvbGwiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnRhaW5lciIsImNvbnRhaW5lcl9tYWluIiwiYWJvdXRVc0NhcmRfX2NpcmNsZUJveCIsImFib3V0VXNDYXJkX19jaXJjbGVCb3hfX2NpcmNsZSIsImFib3V0VXNDYXJkIiwiYWJvdXRVc0NhcmRfbWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/about-us/about-us-card/index.tsx\n"));

/***/ })

});