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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AboutUsCard\": function() { return /* binding */ AboutUsCard; }\n/* harmony export */ });\n/* harmony import */ var D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.scss */ \"./src/components/about-us/about-us-card/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"D:\\\\IXNOME\\\\evo-landing\\\\frontend\\\\src\\\\components\\\\about-us\\\\about-us-card\\\\index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar AboutUsCard = function AboutUsCard(props) {\n  _s();\n\n  var card = props.card,\n      mainIndex = props.mainIndex;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      main = _useState[0],\n      setMain = _useState[1];\n\n  var title = card.title,\n      text = card.text;\n  var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var handleScroll = function handleScroll() {\n      if (ref.current) {\n        console.log({\n          ref: ref.current.getBoundingClientRect().y,\n          win: window.scrollY\n        });\n\n        if (window.scrollY === ref.current.getBoundingClientRect().y) {\n          setMain(card);\n        }\n      }\n    };\n\n    window.addEventListener(\"scroll\", handleScroll);\n    return function () {\n      window.removeEventListener(\"scroll\", handleScroll);\n    };\n  }, [ref]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"section\", {\n    ref: ref,\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().aboutUsCard), (0,D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().aboutUsCard_main), main)),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().aboutUsCard__circleBox),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().aboutUsCard__circleBox__circle)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n      children: text\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AboutUsCard, \"HV2gxdIdT9ljJAn6CMkyEjtDIw8=\");\n\n_c = AboutUsCard;\n\nvar _c;\n\n$RefreshReg$(_c, \"AboutUsCard\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hYm91dC11cy9hYm91dC11cy1jYXJkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBOztBQU9PLElBQU1LLFdBQW1DLEdBQUcsU0FBdENBLFdBQXNDLENBQUNDLEtBQUQsRUFBVztFQUFBOztFQUM1RCxJQUFRQyxJQUFSLEdBQTRCRCxLQUE1QixDQUFRQyxJQUFSO0VBQUEsSUFBY0MsU0FBZCxHQUE0QkYsS0FBNUIsQ0FBY0UsU0FBZDs7RUFDQSxnQkFBd0JOLCtDQUFRLENBQUMsQ0FBRCxDQUFoQztFQUFBLElBQU9PLElBQVA7RUFBQSxJQUFhQyxPQUFiOztFQUNBLElBQVFDLEtBQVIsR0FBd0JKLElBQXhCLENBQVFJLEtBQVI7RUFBQSxJQUFlQyxJQUFmLEdBQXdCTCxJQUF4QixDQUFlSyxJQUFmO0VBQ0EsSUFBTUMsR0FBRyxHQUFHWiw2Q0FBTSxDQUFhLElBQWIsQ0FBbEI7RUFFQUQsZ0RBQVMsQ0FBQyxZQUFNO0lBQ2QsSUFBTWMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtNQUN6QixJQUFJRCxHQUFHLENBQUNFLE9BQVIsRUFBaUI7UUFDZkMsT0FBTyxDQUFDQyxHQUFSLENBQVk7VUFBQ0osR0FBRyxFQUFFQSxHQUFHLENBQUNFLE9BQUosQ0FBWUcscUJBQVosR0FBb0NDLENBQTFDO1VBQTZDQyxHQUFHLEVBQUVDLE1BQU0sQ0FBQ0M7UUFBekQsQ0FBWjs7UUFDQSxJQUFHRCxNQUFNLENBQUNDLE9BQVAsS0FBbUJULEdBQUcsQ0FBQ0UsT0FBSixDQUFZRyxxQkFBWixHQUFvQ0MsQ0FBMUQsRUFBNkQ7VUFDM0RULE9BQU8sQ0FBQ0gsSUFBRCxDQUFQO1FBQ0Q7TUFDRjtJQUNGLENBUEQ7O0lBU0FjLE1BQU0sQ0FBQ0UsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NULFlBQWxDO0lBRUEsT0FBTyxZQUFNO01BQ1hPLE1BQU0sQ0FBQ0csbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNWLFlBQXJDO0lBQ0QsQ0FGRDtFQUdELENBZlEsRUFlTixDQUFDRCxHQUFELENBZk0sQ0FBVDtFQWlCQSxvQkFDRTtJQUNFLEdBQUcsRUFBRUEsR0FEUDtJQUVFLFNBQVMsRUFBRVYsaURBQVUsQ0FBQ0MsdUVBQUQsNEpBQ2xCQSw0RUFEa0IsRUFDUUssSUFEUixFQUZ2QjtJQUFBLHdCQU1FO01BQUssU0FBUyxFQUFFTCxrRkFBaEI7TUFBQSx1QkFDRTtRQUFLLFNBQVMsRUFBRUEsMEZBQXFDd0I7TUFBckQ7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FORixlQVNFO01BQUEsVUFBS2pCO0lBQUw7TUFBQTtNQUFBO01BQUE7SUFBQSxTQVRGLGVBVUU7TUFBQSxVQUFJQztJQUFKO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FWRjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FERjtBQWNELENBckNNOztHQUFNUDs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYWJvdXQtdXMvYWJvdXQtdXMtY2FyZC9pbmRleC50c3g/ZWZkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHsgdXNlRGV2aWNlIH0gZnJvbSBcInNyYy9ob29rcy91c2VEZXZpY2VcIjtcclxuaW1wb3J0IHsgQUJPVVRfVVMsIE5BViB9IGZyb20gXCJzcmMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLnNjc3NcIjtcclxuXHJcbmludGVyZmFjZSBJQWJvdXRVc0NhcmQge1xyXG4gIGNhcmQ6IHR5cGVvZiBBQk9VVF9VU1swXTtcclxuICBtYWluSW5kZXg6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFib3V0VXNDYXJkOiBSZWFjdC5GQzxJQWJvdXRVc0NhcmQ+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjYXJkLCBtYWluSW5kZXggfSA9IHByb3BzO1xyXG4gIGNvbnN0IFttYWluLCBzZXRNYWluXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IHsgdGl0bGUsIHRleHQgfSA9IGNhcmQ7XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmPGFueSB8IG51bGw+KG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICBpZiAocmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh7cmVmOiByZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55LCB3aW46IHdpbmRvdy5zY3JvbGxZfSlcclxuICAgICAgICBpZih3aW5kb3cuc2Nyb2xsWSA9PT0gcmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueSkge1xyXG4gICAgICAgICAgc2V0TWFpbihjYXJkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgfTtcclxuICB9LCBbcmVmXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvblxyXG4gICAgICByZWY9e3JlZn1cclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5hYm91dFVzQ2FyZCwge1xyXG4gICAgICAgIFtzdHlsZXMuYWJvdXRVc0NhcmRfbWFpbl06IG1haW4sXHJcbiAgICAgIH0pfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFib3V0VXNDYXJkX19jaXJjbGVCb3h9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWJvdXRVc0NhcmRfX2NpcmNsZUJveF9fY2lyY2xlfT48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgPHA+e3RleHR9PC9wPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImNsYXNzTmFtZXMiLCJzdHlsZXMiLCJBYm91dFVzQ2FyZCIsInByb3BzIiwiY2FyZCIsIm1haW5JbmRleCIsIm1haW4iLCJzZXRNYWluIiwidGl0bGUiLCJ0ZXh0IiwicmVmIiwiaGFuZGxlU2Nyb2xsIiwiY3VycmVudCIsImNvbnNvbGUiLCJsb2ciLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ5Iiwid2luIiwid2luZG93Iiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWJvdXRVc0NhcmQiLCJhYm91dFVzQ2FyZF9tYWluIiwiYWJvdXRVc0NhcmRfX2NpcmNsZUJveCIsImFib3V0VXNDYXJkX19jaXJjbGVCb3hfX2NpcmNsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/about-us/about-us-card/index.tsx\n"));

/***/ })

});