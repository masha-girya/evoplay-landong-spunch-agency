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

/***/ "./src/components/services/service/index.tsx":
/*!***************************************************!*\
  !*** ./src/components/services/service/index.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Service\": function() { return /* binding */ Service; }\n/* harmony export */ });\n/* harmony import */ var D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/react-transition-group/esm/index.js\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.scss */ \"./src/components/services/service/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"D:\\\\IXNOME\\\\evo-landing\\\\frontend\\\\src\\\\components\\\\services\\\\service\\\\index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\nvar Service = function Service(props) {\n  _s();\n\n  var currService = props.currService;\n  var transRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n  var duration = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {\n    return 100;\n  }, []);\n  var defaultStyles = {\n    opacity: 0,\n    transition: \"opacity \".concat(duration, \"ms ease-in\")\n  };\n  var transitionStyles = {\n    entering: {\n      opacity: 1\n    },\n    entered: {\n      opacity: 1\n    },\n    exiting: {\n      opacity: 0\n    },\n    exited: {\n      opacity: 0\n    }\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"section\", {\n    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().service),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_transition_group__WEBPACK_IMPORTED_MODULE_4__.Transition, {\n      \"in\": currService !== null,\n      nodeRef: transRef,\n      timeout: duration,\n      children: function children(state) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          ref: transRef,\n          className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().service__box),\n          style: _objectSpread(_objectSpread({}, defaultStyles), transitionStyles[state]),\n          children: [currService && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n            src: currService.image.src,\n            alt: currService.tabTitle,\n            loading: \"lazy\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().service__box__text),\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n              children: currService === null || currService === void 0 ? void 0 : currService.imageTitle\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n              children: currService === null || currService === void 0 ? void 0 : currService.imageText\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, _this);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Service, \"O6jZUoaEkpwraLT6nW4VjOFeHVw=\");\n\n_c = Service;\n\nvar _c;\n\n$RefreshReg$(_c, \"Service\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZXJ2aWNlcy9zZXJ2aWNlL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQU1PLElBQU1JLE9BQTJCLEdBQUcsU0FBOUJBLE9BQThCLENBQUNDLEtBQUQsRUFBVztFQUFBOztFQUNwRCxJQUFRQyxXQUFSLEdBQXdCRCxLQUF4QixDQUFRQyxXQUFSO0VBQ0EsSUFBTUMsUUFBUSxHQUFHTiw2Q0FBTSxDQUFhLElBQWIsQ0FBdkI7RUFFQSxJQUFNTyxRQUFRLEdBQUdSLDhDQUFPLENBQUMsWUFBTTtJQUM3QixPQUFPLEdBQVA7RUFDRCxDQUZ1QixFQUVyQixFQUZxQixDQUF4QjtFQUlBLElBQU1TLGFBQWEsR0FBRztJQUNwQkMsT0FBTyxFQUFFLENBRFc7SUFFcEJDLFVBQVUsb0JBQWFILFFBQWI7RUFGVSxDQUF0QjtFQUtBLElBQU1JLGdCQUFxQixHQUFHO0lBQzVCQyxRQUFRLEVBQUU7TUFBRUgsT0FBTyxFQUFFO0lBQVgsQ0FEa0I7SUFFNUJJLE9BQU8sRUFBRTtNQUFFSixPQUFPLEVBQUU7SUFBWCxDQUZtQjtJQUc1QkssT0FBTyxFQUFFO01BQUVMLE9BQU8sRUFBRTtJQUFYLENBSG1CO0lBSTVCTSxNQUFNLEVBQUU7TUFBRU4sT0FBTyxFQUFFO0lBQVg7RUFKb0IsQ0FBOUI7RUFPQSxvQkFDRTtJQUFTLFNBQVMsRUFBRVAsbUVBQXBCO0lBQUEsdUJBQ0UsOERBQUMsOERBQUQ7TUFDRSxNQUFJRyxXQUFXLEtBQUssSUFEdEI7TUFFRSxPQUFPLEVBQUVDLFFBRlg7TUFHRSxPQUFPLEVBQUVDLFFBSFg7TUFBQSxVQUtHLGtCQUFDVSxLQUFEO1FBQUEsb0JBQ0M7VUFDRSxHQUFHLEVBQUVYLFFBRFA7VUFFRSxTQUFTLEVBQUVKLHdFQUZiO1VBR0UsS0FBSyxrQ0FBT00sYUFBUCxHQUF5QkcsZ0JBQWdCLENBQUNNLEtBQUQsQ0FBekMsQ0FIUDtVQUFBLFdBS0daLFdBQVcsaUJBQ1Y7WUFDRSxHQUFHLEVBQUVBLFdBQVcsQ0FBQ2MsS0FBWixDQUFrQkMsR0FEekI7WUFFRSxHQUFHLEVBQUVmLFdBQVcsQ0FBQ2dCLFFBRm5CO1lBR0UsT0FBTyxFQUFDO1VBSFY7WUFBQTtZQUFBO1lBQUE7VUFBQSxTQU5KLGVBWUU7WUFBSyxTQUFTLEVBQUVuQiw4RUFBaEI7WUFBQSx3QkFDRTtjQUFBLFVBQUtHLFdBQUwsYUFBS0EsV0FBTCx1QkFBS0EsV0FBVyxDQUFFa0I7WUFBbEI7Y0FBQTtjQUFBO2NBQUE7WUFBQSxTQURGLGVBRUU7Y0FBQSxVQUFJbEIsV0FBSixhQUFJQSxXQUFKLHVCQUFJQSxXQUFXLENBQUVtQjtZQUFqQjtjQUFBO2NBQUE7Y0FBQTtZQUFBLFNBRkY7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBWkY7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBREQ7TUFBQTtJQUxIO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFERjtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREY7QUE2QkQsQ0FqRE07O0dBQU1yQjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VydmljZXMvc2VydmljZS9pbmRleC50c3g/M2VhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNZW1vLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVHJhbnNpdGlvbiB9IGZyb20gXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCI7XHJcbmltcG9ydCB7IFNFUlZJQ0VTIH0gZnJvbSBcInNyYy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuaW50ZXJmYWNlIElTZXJ2aWNlIHtcclxuICBjdXJyU2VydmljZTogKHR5cGVvZiBTRVJWSUNFUylbMF0gfCBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU2VydmljZTogUmVhY3QuRkM8SVNlcnZpY2U+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjdXJyU2VydmljZSB9ID0gcHJvcHM7XHJcbiAgY29uc3QgdHJhbnNSZWYgPSB1c2VSZWY8YW55IHwgbnVsbD4obnVsbCk7XHJcblxyXG4gIGNvbnN0IGR1cmF0aW9uID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICByZXR1cm4gMTAwO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZGVmYXVsdFN0eWxlcyA9IHtcclxuICAgIG9wYWNpdHk6IDAsXHJcbiAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAke2R1cmF0aW9ufW1zIGVhc2UtaW5gLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRyYW5zaXRpb25TdHlsZXM6IGFueSA9IHtcclxuICAgIGVudGVyaW5nOiB7IG9wYWNpdHk6IDEgfSxcclxuICAgIGVudGVyZWQ6IHsgb3BhY2l0eTogMSB9LFxyXG4gICAgZXhpdGluZzogeyBvcGFjaXR5OiAwIH0sXHJcbiAgICBleGl0ZWQ6IHsgb3BhY2l0eTogMCB9LFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5zZXJ2aWNlfT5cclxuICAgICAgPFRyYW5zaXRpb25cclxuICAgICAgICBpbj17Y3VyclNlcnZpY2UgIT09IG51bGx9XHJcbiAgICAgICAgbm9kZVJlZj17dHJhbnNSZWZ9XHJcbiAgICAgICAgdGltZW91dD17ZHVyYXRpb259XHJcbiAgICAgID5cclxuICAgICAgICB7KHN0YXRlKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHJlZj17dHJhbnNSZWZ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlcnZpY2VfX2JveH1cclxuICAgICAgICAgICAgc3R5bGU9e3sgLi4uZGVmYXVsdFN0eWxlcywgLi4udHJhbnNpdGlvblN0eWxlc1tzdGF0ZV0gfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2N1cnJTZXJ2aWNlICYmIChcclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e2N1cnJTZXJ2aWNlLmltYWdlLnNyY31cclxuICAgICAgICAgICAgICAgIGFsdD17Y3VyclNlcnZpY2UudGFiVGl0bGV9XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXJ2aWNlX19ib3hfX3RleHR9PlxyXG4gICAgICAgICAgICAgIDxoMT57Y3VyclNlcnZpY2U/LmltYWdlVGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICA8cD57Y3VyclNlcnZpY2U/LmltYWdlVGV4dH08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9UcmFuc2l0aW9uPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ1c2VNZW1vIiwidXNlUmVmIiwiVHJhbnNpdGlvbiIsInN0eWxlcyIsIlNlcnZpY2UiLCJwcm9wcyIsImN1cnJTZXJ2aWNlIiwidHJhbnNSZWYiLCJkdXJhdGlvbiIsImRlZmF1bHRTdHlsZXMiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25TdHlsZXMiLCJlbnRlcmluZyIsImVudGVyZWQiLCJleGl0aW5nIiwiZXhpdGVkIiwic2VydmljZSIsInN0YXRlIiwic2VydmljZV9fYm94IiwiaW1hZ2UiLCJzcmMiLCJ0YWJUaXRsZSIsInNlcnZpY2VfX2JveF9fdGV4dCIsImltYWdlVGl0bGUiLCJpbWFnZVRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/services/service/index.tsx\n"));

/***/ })

});