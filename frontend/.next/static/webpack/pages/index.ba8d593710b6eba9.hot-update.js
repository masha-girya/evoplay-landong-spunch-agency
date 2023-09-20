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

/***/ "./src/components/services/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/services/index.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Services\": function() { return /* binding */ Services; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/button */ \"./src/components/button/index.tsx\");\n/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/constants */ \"./src/constants/index.ts\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.module.scss */ \"./src/components/services/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _assets_Robot_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/Robot.png */ \"./src/components/services/assets/Robot.png\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service */ \"./src/components/services/service/index.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"D:\\\\IXNOME\\\\evo-landing\\\\frontend\\\\src\\\\components\\\\services\\\\index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Services = function Services() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(src_constants__WEBPACK_IMPORTED_MODULE_2__.SERVICES[0]),\n      currService = _useState[0],\n      setCurrService = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      isOnChange = _useState2[0],\n      setIsOnChange = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      isVisible = _useState3[0],\n      setIsVisible = _useState3[1];\n\n  var handleChoose = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (item) {\n    setIsOnChange(true);\n    setCurrService(item);\n    setTimeout(function () {\n      return setIsOnChange(false);\n    }, 100);\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {}, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"article\", {\n    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().services),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().services__container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"ul\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().services__tabList),\n        children: src_constants__WEBPACK_IMPORTED_MODULE_2__.SERVICES.map(function (item) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n              name: item.tabTitle,\n              variant: \"textMain\",\n              isActive: currService.tabTitle === item.tabTitle,\n              onClick: function onClick() {\n                return handleChoose(item);\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 15\n            }, _this)\n          }, item.tabTitle, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_service__WEBPACK_IMPORTED_MODULE_5__.Service, {\n        currService: currService,\n        isOnChange: isOnChange\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"section\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().services__generalContent),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"h1\", {\n          className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().services__generalContent__title), (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().services__generalContent__title_mob)),\n          children: \"Lorem ipsum dolor sit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n          className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().services__generalContent__text),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"h1\", {\n            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().services__generalContent__title),\n            children: \"Lorem ipsum dolor sit\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().services__generalContent__text__pBox),\n            children: src_constants__WEBPACK_IMPORTED_MODULE_2__.SERVICES_TEXT.map(function (item, i) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"p\", {\n                children: item\n              }, i, false, {\n                fileName: _jsxFileName,\n                lineNumber: 56,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"img\", {\n          src: _assets_Robot_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"].src,\n          alt: \"Robot image\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().elements__circle)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().elements__circle2)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Services, \"RRBJEjrhToRn5I+UmaheT80a10o=\");\n\n_c = Services;\n\nvar _c;\n\n$RefreshReg$(_c, \"Services\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBO0lBQUEsU0FyQ0YsZUFzQ0U7TUFBSyxTQUFTLEVBQUUxQiw2RUFBd0IyQjtJQUF4QztNQUFBO01BQUE7TUFBQTtJQUFBLFNBdENGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURGO0FBMENELENBekRNOztHQUFNdkI7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NlcnZpY2VzL2luZGV4LnRzeD8wMGNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVHJhbnNpdGlvbiB9IGZyb20gXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAY29tcG9uZW50cy9idXR0b25cIjtcclxuaW1wb3J0IHsgU0VSVklDRVMsIFNFUlZJQ0VTX1RFWFQgfSBmcm9tIFwic3JjL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBSb2JvdEltZyBmcm9tIFwiLi9hc3NldHMvUm9ib3QucG5nXCI7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2VydmljZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2N1cnJTZXJ2aWNlLCBzZXRDdXJyU2VydmljZV0gPSB1c2VTdGF0ZShTRVJWSUNFU1swXSk7XHJcbiAgY29uc3QgW2lzT25DaGFuZ2UsIHNldElzT25DaGFuZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc1Zpc2libGUsIHNldElzVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNob29zZSA9IHVzZUNhbGxiYWNrKChpdGVtOiAodHlwZW9mIFNFUlZJQ0VTKVswXSkgPT4ge1xyXG4gICAgc2V0SXNPbkNoYW5nZSh0cnVlKTtcclxuICAgIHNldEN1cnJTZXJ2aWNlKGl0ZW0pO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRJc09uQ2hhbmdlKGZhbHNlKSwgMTAwKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMuc2VydmljZXN9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlcnZpY2VzX19jb250YWluZXJ9PlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5zZXJ2aWNlc19fdGFiTGlzdH0+XHJcbiAgICAgICAgICB7U0VSVklDRVMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0udGFiVGl0bGV9PlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIG5hbWU9e2l0ZW0udGFiVGl0bGV9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwidGV4dE1haW5cIlxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU9e2N1cnJTZXJ2aWNlLnRhYlRpdGxlID09PSBpdGVtLnRhYlRpdGxlfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2hvb3NlKGl0ZW0pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxTZXJ2aWNlIGN1cnJTZXJ2aWNlPXtjdXJyU2VydmljZX0gaXNPbkNoYW5nZT17aXNPbkNoYW5nZX0gLz5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5zZXJ2aWNlc19fZ2VuZXJhbENvbnRlbnR9PlxyXG4gICAgICAgICAgPGgxXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICBzdHlsZXMuc2VydmljZXNfX2dlbmVyYWxDb250ZW50X190aXRsZSxcclxuICAgICAgICAgICAgICBzdHlsZXMuc2VydmljZXNfX2dlbmVyYWxDb250ZW50X190aXRsZV9tb2JcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXJ2aWNlc19fZ2VuZXJhbENvbnRlbnRfX3RleHR9PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuc2VydmljZXNfX2dlbmVyYWxDb250ZW50X190aXRsZX0+XHJcbiAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VydmljZXNfX2dlbmVyYWxDb250ZW50X190ZXh0X19wQm94fT5cclxuICAgICAgICAgICAgICB7U0VSVklDRVNfVEVYVC5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxwIGtleT17aX0+e2l0ZW19PC9wPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGltZyBzcmM9e1JvYm90SW1nLnNyY30gYWx0PVwiUm9ib3QgaW1hZ2VcIiAvPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWxlbWVudHNfX2NpcmNsZX0+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWxlbWVudHNfX2NpcmNsZTJ9PjwvZGl2PlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICk7XHJcbn07Il0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJTRVJWSUNFUyIsIlNFUlZJQ0VTX1RFWFQiLCJzdHlsZXMiLCJSb2JvdEltZyIsImNsYXNzTmFtZXMiLCJTZXJ2aWNlIiwiU2VydmljZXMiLCJjdXJyU2VydmljZSIsInNldEN1cnJTZXJ2aWNlIiwiaXNPbkNoYW5nZSIsInNldElzT25DaGFuZ2UiLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJoYW5kbGVDaG9vc2UiLCJpdGVtIiwic2V0VGltZW91dCIsInNlcnZpY2VzIiwic2VydmljZXNfX2NvbnRhaW5lciIsInNlcnZpY2VzX190YWJMaXN0IiwibWFwIiwidGFiVGl0bGUiLCJzZXJ2aWNlc19fZ2VuZXJhbENvbnRlbnQiLCJzZXJ2aWNlc19fZ2VuZXJhbENvbnRlbnRfX3RpdGxlIiwic2VydmljZXNfX2dlbmVyYWxDb250ZW50X190aXRsZV9tb2IiLCJzZXJ2aWNlc19fZ2VuZXJhbENvbnRlbnRfX3RleHQiLCJzZXJ2aWNlc19fZ2VuZXJhbENvbnRlbnRfX3RleHRfX3BCb3giLCJpIiwic3JjIiwiZWxlbWVudHNfX2NpcmNsZSIsImVsZW1lbnRzX19jaXJjbGUyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/services/index.tsx\n"));

/***/ })

});