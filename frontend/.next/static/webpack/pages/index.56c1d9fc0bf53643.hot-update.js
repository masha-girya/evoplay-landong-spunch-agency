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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AboutUsCard\": function() { return /* binding */ AboutUsCard; }\n/* harmony export */ });\n/* harmony import */ var D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.scss */ \"./src/components/about-us/about-us-card/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"D:\\\\IXNOME\\\\evo-landing\\\\frontend\\\\src\\\\components\\\\about-us\\\\about-us-card\\\\index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar AboutUsCard = function AboutUsCard(props) {\n  _s();\n\n  var card = props.card,\n      index = props.index,\n      mainItemIndex = props.mainItemIndex,\n      setMainItemIndex = props.setMainItemIndex;\n  var title = card.title,\n      text = card.text;\n  var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  var isElementInViewport = function isElementInViewport(element) {\n    var rect = element.getBoundingClientRect(); // Check if the element is fully visible\n\n    if (index === 1) {\n      console.log({\n        bot: rect.bottom,\n        winH: window.innerHeight\n      });\n    }\n\n    return rect.top >= 0 && rect.left >= 0 && rect.bottom + window.innerHeight / 2 <= window.innerHeight && rect.right <= window.innerWidth;\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var handleScroll = function handleScroll() {\n      if (ref.current) {\n        if (isElementInViewport(ref.current)) {\n          setMainItemIndex(index);\n        }\n      }\n    };\n\n    window.addEventListener(\"scroll\", handleScroll);\n    return function () {\n      window.removeEventListener(\"scroll\", handleScroll);\n    };\n  }, [ref]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"section\", {\n    ref: ref,\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().aboutUsCard), (0,D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().aboutUsCard_main), mainItemIndex === index)),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().aboutUsCard__circleBox),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().aboutUsCard__circleBox__circle)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n      children: text\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AboutUsCard, \"8uVE59eA/r6b92xF80p7sH8rXLk=\");\n\n_c = AboutUsCard;\n\nvar _c;\n\n$RefreshReg$(_c, \"AboutUsCard\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hYm91dC11cy9hYm91dC11cy1jYXJkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBOztBQVNPLElBQU1JLFdBQW1DLEdBQUcsU0FBdENBLFdBQXNDLENBQUNDLEtBQUQsRUFBVztFQUFBOztFQUM1RCxJQUFRQyxJQUFSLEdBQXlERCxLQUF6RCxDQUFRQyxJQUFSO0VBQUEsSUFBY0MsS0FBZCxHQUF5REYsS0FBekQsQ0FBY0UsS0FBZDtFQUFBLElBQXFCQyxhQUFyQixHQUF5REgsS0FBekQsQ0FBcUJHLGFBQXJCO0VBQUEsSUFBb0NDLGdCQUFwQyxHQUF5REosS0FBekQsQ0FBb0NJLGdCQUFwQztFQUNBLElBQVFDLEtBQVIsR0FBd0JKLElBQXhCLENBQVFJLEtBQVI7RUFBQSxJQUFlQyxJQUFmLEdBQXdCTCxJQUF4QixDQUFlSyxJQUFmO0VBQ0EsSUFBTUMsR0FBRyxHQUFHWCw2Q0FBTSxDQUFhLElBQWIsQ0FBbEI7O0VBRUEsSUFBTVksbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxPQUFELEVBQWtCO0lBQzVDLElBQU1DLElBQUksR0FBR0QsT0FBTyxDQUFDRSxxQkFBUixFQUFiLENBRDRDLENBRzVDOztJQUNBLElBQUdULEtBQUssS0FBSyxDQUFiLEVBQWdCO01BQ2RVLE9BQU8sQ0FBQ0MsR0FBUixDQUFhO1FBQUNDLEdBQUcsRUFBRUosSUFBSSxDQUFDSyxNQUFYO1FBQW1CQyxJQUFJLEVBQUVDLE1BQU0sQ0FBQ0M7TUFBaEMsQ0FBYjtJQUNEOztJQUVELE9BQ0VSLElBQUksQ0FBQ1MsR0FBTCxJQUFZLENBQVosSUFDQVQsSUFBSSxDQUFDVSxJQUFMLElBQWEsQ0FEYixJQUVBVixJQUFJLENBQUNLLE1BQUwsR0FBZUUsTUFBTSxDQUFDQyxXQUFQLEdBQXFCLENBQXBDLElBQTBDRCxNQUFNLENBQUNDLFdBRmpELElBR0FSLElBQUksQ0FBQ1csS0FBTCxJQUFjSixNQUFNLENBQUNLLFVBSnZCO0VBTUQsQ0FkRDs7RUFpQkEzQixnREFBUyxDQUFDLFlBQU07SUFDZCxJQUFNNEIsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtNQUN6QixJQUFJaEIsR0FBRyxDQUFDaUIsT0FBUixFQUFpQjtRQUVmLElBQUdoQixtQkFBbUIsQ0FBQ0QsR0FBRyxDQUFDaUIsT0FBTCxDQUF0QixFQUFxQztVQUNuQ3BCLGdCQUFnQixDQUFDRixLQUFELENBQWhCO1FBQ0Q7TUFDRjtJQUNGLENBUEQ7O0lBU0FlLE1BQU0sQ0FBQ1EsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NGLFlBQWxDO0lBRUEsT0FBTyxZQUFNO01BQ1hOLE1BQU0sQ0FBQ1MsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNILFlBQXJDO0lBQ0QsQ0FGRDtFQUdELENBZlEsRUFlTixDQUFDaEIsR0FBRCxDQWZNLENBQVQ7RUFpQkEsb0JBQ0U7SUFDRSxHQUFHLEVBQUVBLEdBRFA7SUFFRSxTQUFTLEVBQUVWLGlEQUFVLENBQUNDLHVFQUFELDRKQUNsQkEsNEVBRGtCLEVBQ1FLLGFBQWEsS0FBS0QsS0FEMUIsRUFGdkI7SUFBQSx3QkFNRTtNQUFLLFNBQVMsRUFBRUosa0ZBQWhCO01BQUEsdUJBQ0U7UUFBSyxTQUFTLEVBQUVBLDBGQUFxQ2dDO01BQXJEO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFERjtNQUFBO01BQUE7TUFBQTtJQUFBLFNBTkYsZUFTRTtNQUFBLFVBQUt6QjtJQUFMO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FURixlQVVFO01BQUEsVUFBSUM7SUFBSjtNQUFBO01BQUE7TUFBQTtJQUFBLFNBVkY7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREY7QUFjRCxDQXJETTs7R0FBTVA7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Fib3V0LXVzL2Fib3V0LXVzLWNhcmQvaW5kZXgudHN4P2VmZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7IHVzZURldmljZSB9IGZyb20gXCJzcmMvaG9va3MvdXNlRGV2aWNlXCI7XHJcbmltcG9ydCB7IEFCT1VUX1VTLCBOQVYgfSBmcm9tIFwic3JjL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5zY3NzXCI7XHJcblxyXG5pbnRlcmZhY2UgSUFib3V0VXNDYXJkIHtcclxuICBjYXJkOiB0eXBlb2YgQUJPVVRfVVNbMF07XHJcbiAgaW5kZXg6IG51bWJlcjtcclxuICBtYWluSXRlbUluZGV4OiBudW1iZXI7XHJcbiAgc2V0TWFpbkl0ZW1JbmRleDogKG1haW5JdGVtSW5kZXg6IG51bWJlcikgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFib3V0VXNDYXJkOiBSZWFjdC5GQzxJQWJvdXRVc0NhcmQ+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjYXJkLCBpbmRleCwgbWFpbkl0ZW1JbmRleCwgc2V0TWFpbkl0ZW1JbmRleCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgeyB0aXRsZSwgdGV4dCB9ID0gY2FyZDtcclxuICBjb25zdCByZWYgPSB1c2VSZWY8YW55IHwgbnVsbD4obnVsbCk7XHJcblxyXG4gIGNvbnN0IGlzRWxlbWVudEluVmlld3BvcnQgPSAoZWxlbWVudDogYW55KSA9PiB7XHJcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiB0aGUgZWxlbWVudCBpcyBmdWxseSB2aXNpYmxlXHJcbiAgICBpZihpbmRleCA9PT0gMSkge1xyXG4gICAgICBjb25zb2xlLmxvZygge2JvdDogcmVjdC5ib3R0b20sIHdpbkg6IHdpbmRvdy5pbm5lckhlaWdodH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgcmVjdC50b3AgPj0gMCAmJlxyXG4gICAgICByZWN0LmxlZnQgPj0gMCAmJlxyXG4gICAgICByZWN0LmJvdHRvbSArKCB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQgJiZcclxuICAgICAgcmVjdC5yaWdodCA8PSB3aW5kb3cuaW5uZXJXaWR0aFxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgaWYgKHJlZi5jdXJyZW50KSB7XHJcblxyXG4gICAgICAgIGlmKGlzRWxlbWVudEluVmlld3BvcnQocmVmLmN1cnJlbnQpKSB7XHJcbiAgICAgICAgICBzZXRNYWluSXRlbUluZGV4KGluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgfTtcclxuICB9LCBbcmVmXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvblxyXG4gICAgICByZWY9e3JlZn1cclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5hYm91dFVzQ2FyZCwge1xyXG4gICAgICAgIFtzdHlsZXMuYWJvdXRVc0NhcmRfbWFpbl06IG1haW5JdGVtSW5kZXggPT09IGluZGV4LFxyXG4gICAgICB9KX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hYm91dFVzQ2FyZF9fY2lyY2xlQm94fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFib3V0VXNDYXJkX19jaXJjbGVCb3hfX2NpcmNsZX0+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aDE+e3RpdGxlfTwvaDE+XHJcbiAgICAgIDxwPnt0ZXh0fTwvcD5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwiY2xhc3NOYW1lcyIsInN0eWxlcyIsIkFib3V0VXNDYXJkIiwicHJvcHMiLCJjYXJkIiwiaW5kZXgiLCJtYWluSXRlbUluZGV4Iiwic2V0TWFpbkl0ZW1JbmRleCIsInRpdGxlIiwidGV4dCIsInJlZiIsImlzRWxlbWVudEluVmlld3BvcnQiLCJlbGVtZW50IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNvbnNvbGUiLCJsb2ciLCJib3QiLCJib3R0b20iLCJ3aW5IIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJpbm5lcldpZHRoIiwiaGFuZGxlU2Nyb2xsIiwiY3VycmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWJvdXRVc0NhcmQiLCJhYm91dFVzQ2FyZF9tYWluIiwiYWJvdXRVc0NhcmRfX2NpcmNsZUJveCIsImFib3V0VXNDYXJkX19jaXJjbGVCb3hfX2NpcmNsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/about-us/about-us-card/index.tsx\n"));

/***/ })

});