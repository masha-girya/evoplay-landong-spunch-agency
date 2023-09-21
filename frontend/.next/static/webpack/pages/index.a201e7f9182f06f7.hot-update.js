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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Services\": function() { return /* binding */ Services; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/hooks/useDevice */ \"./src/hooks/useDevice.ts\");\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/button */ \"./src/components/button/index.tsx\");\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service */ \"./src/components/services/service/index.tsx\");\n/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/constants */ \"./src/constants/index.ts\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.module.scss */ \"./src/components/services/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _assets_Robot_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/Robot.png */ \"./src/components/services/assets/Robot.png\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"D:\\\\IXNOME\\\\evo-landing\\\\frontend\\\\src\\\\components\\\\services\\\\index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Services = function Services() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(src_constants__WEBPACK_IMPORTED_MODULE_5__.SERVICES[0]),\n      currService = _useState[0],\n      setCurrService = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      isOnChange = _useState2[0],\n      setIsOnChange = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      isVisible = _useState3[0],\n      setIsVisible = _useState3[1];\n\n  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n\n  var _useDevice = (0,src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_2__.useDevice)(),\n      isMobile = _useDevice.isMobile;\n\n  var handleChoose = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (item) {\n    // setIsOnChange(true);\n    setCurrService(null);\n    setTimeout(function () {\n      return setCurrService(item);\n    }, 400);\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var handleScroll = function handleScroll() {\n      if (ref.current) {\n        if (window.scrollY >= (isMobile ? 900 : 1200)) {\n          setIsVisible(true);\n        }\n      }\n    };\n\n    window.addEventListener(\"scroll\", handleScroll);\n    return function () {\n      window.removeEventListener(\"scroll\", handleScroll);\n    };\n  }, [ref, isMobile]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"article\", {\n    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().services),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().services__container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"ul\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().services__tabList),\n        children: src_constants__WEBPACK_IMPORTED_MODULE_5__.SERVICES.map(function (item) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n              name: item.tabTitle,\n              variant: \"textMain\",\n              isActive: (currService === null || currService === void 0 ? void 0 : currService.tabTitle) === item.tabTitle,\n              onClick: function onClick() {\n                return handleChoose(item);\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 15\n            }, _this)\n          }, item.tabTitle, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_service__WEBPACK_IMPORTED_MODULE_4__.Service, {\n        currService: currService,\n        isOnChange: isOnChange\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"section\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().services__generalContent),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h1\", {\n          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().services__generalContent__title), (_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().services__generalContent__title_mob)),\n          children: \"Lorem ipsum dolor sit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n          className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().services__generalContent__text),\n          ref: ref,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h1\", {\n            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().services__generalContent__title),\n            children: \"Lorem ipsum dolor sit\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().services__generalContent__text__pBox),\n            children: src_constants__WEBPACK_IMPORTED_MODULE_5__.SERVICES_TEXT.map(function (item, i) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"p\", {\n                children: item\n              }, i, false, {\n                fileName: _jsxFileName,\n                lineNumber: 70,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n          className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().services__generalContent__imgBox),\n          children: isVisible && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"img\", {\n            src: _assets_Robot_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"].src,\n            alt: \"Robot image\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 27\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().elements__circle)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().elements__circle2)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Services, \"6WwtsBPDYqfokeQR+c6tWsrsJlQ=\", false, function () {\n  return [src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_2__.useDevice];\n});\n\n_c = Services;\n\nvar _c;\n\n$RefreshReg$(_c, \"Services\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxHQUFHLEVBQUVTLEdBQTVEO1VBQUEsd0JBQ0U7WUFBSSxTQUFTLEVBQUVULDJGQUFmO1lBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBREYsZUFJRTtZQUFLLFNBQVMsRUFBRUEsZ0dBQWhCO1lBQUEsVUFDR0QsNERBQUEsQ0FBa0IsVUFBQ2EsSUFBRCxFQUFPa0IsQ0FBUDtjQUFBLG9CQUNqQjtnQkFBQSxVQUFZbEI7Y0FBWixHQUFRa0IsQ0FBUjtnQkFBQTtnQkFBQTtnQkFBQTtjQUFBLFNBRGlCO1lBQUEsQ0FBbEI7VUFESDtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBSkY7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBVEYsZUFtQkU7VUFBSyxTQUFTLEVBQUU5Qiw0RkFBaEI7VUFBQSxVQUNHTyxTQUFTLGlCQUFJO1lBQUssR0FBRyxFQUFFTiw2REFBVjtZQUF3QixHQUFHLEVBQUM7VUFBNUI7WUFBQTtZQUFBO1lBQUE7VUFBQTtRQURoQjtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBbkJGO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQWRGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxTQURGLGVBdUNFO01BQUssU0FBUyxFQUFFRCw0RUFBdUJpQztJQUF2QztNQUFBO01BQUE7TUFBQTtJQUFBLFNBdkNGLGVBd0NFO01BQUssU0FBUyxFQUFFakMsNkVBQXdCa0M7SUFBeEM7TUFBQTtNQUFBO01BQUE7SUFBQSxTQXhDRjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FERjtBQTRDRCxDQXpFTTs7R0FBTWhDO1VBS1VQOzs7S0FMVk8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VydmljZXMvaW5kZXgudHN4PzAwY2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgeyB1c2VEZXZpY2UgfSBmcm9tIFwic3JjL2hvb2tzL3VzZURldmljZVwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQGNvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNFUlZJQ0VTLCBTRVJWSUNFU19URVhUIH0gZnJvbSBcInNyYy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgUm9ib3RJbWcgZnJvbSBcIi4vYXNzZXRzL1JvYm90LnBuZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlcnZpY2VzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjdXJyU2VydmljZSwgc2V0Q3VyclNlcnZpY2VdID0gdXNlU3RhdGU8bnVsbCB8IHR5cGVvZiBTRVJWSUNFU1swXT4oU0VSVklDRVNbMF0pO1xyXG4gIGNvbnN0IFtpc09uQ2hhbmdlLCBzZXRJc09uQ2hhbmdlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNWaXNpYmxlLCBzZXRJc1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZjxhbnkgfCBudWxsPihudWxsKTtcclxuICBjb25zdCB7IGlzTW9iaWxlIH0gPSB1c2VEZXZpY2UoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hvb3NlID0gdXNlQ2FsbGJhY2soKGl0ZW06ICh0eXBlb2YgU0VSVklDRVMpWzBdKSA9PiB7XHJcbiAgICAvLyBzZXRJc09uQ2hhbmdlKHRydWUpO1xyXG4gICAgc2V0Q3VyclNlcnZpY2UobnVsbCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldEN1cnJTZXJ2aWNlKGl0ZW0pLCA0MDApO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgaWYgKHJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgaWYod2luZG93LnNjcm9sbFkgPj0gKGlzTW9iaWxlID8gOTAwIDogMTIwMCkpIHtcclxuICAgICAgICAgIHNldElzVmlzaWJsZSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgfTtcclxuICB9LCBbcmVmLCBpc01vYmlsZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMuc2VydmljZXN9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlcnZpY2VzX19jb250YWluZXJ9PlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5zZXJ2aWNlc19fdGFiTGlzdH0+XHJcbiAgICAgICAgICB7U0VSVklDRVMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0udGFiVGl0bGV9PlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIG5hbWU9e2l0ZW0udGFiVGl0bGV9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwidGV4dE1haW5cIlxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU9e2N1cnJTZXJ2aWNlPy50YWJUaXRsZSA9PT0gaXRlbS50YWJUaXRsZX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNob29zZShpdGVtKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8U2VydmljZSBjdXJyU2VydmljZT17Y3VyclNlcnZpY2V9IGlzT25DaGFuZ2U9e2lzT25DaGFuZ2V9IC8+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuc2VydmljZXNfX2dlbmVyYWxDb250ZW50fT5cclxuICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgc3R5bGVzLnNlcnZpY2VzX19nZW5lcmFsQ29udGVudF9fdGl0bGUsXHJcbiAgICAgICAgICAgICAgc3R5bGVzLnNlcnZpY2VzX19nZW5lcmFsQ29udGVudF9fdGl0bGVfbW9iXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdFxyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VydmljZXNfX2dlbmVyYWxDb250ZW50X190ZXh0fSByZWY9e3JlZn0+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5zZXJ2aWNlc19fZ2VuZXJhbENvbnRlbnRfX3RpdGxlfT5cclxuICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXRcclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXJ2aWNlc19fZ2VuZXJhbENvbnRlbnRfX3RleHRfX3BCb3h9PlxyXG4gICAgICAgICAgICAgIHtTRVJWSUNFU19URVhULm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHAga2V5PXtpfT57aXRlbX08L3A+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlcnZpY2VzX19nZW5lcmFsQ29udGVudF9faW1nQm94fT5cclxuICAgICAgICAgICAge2lzVmlzaWJsZSAmJiA8aW1nIHNyYz17Um9ib3RJbWcuc3JjfSBhbHQ9XCJSb2JvdCBpbWFnZVwiIC8+fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbGVtZW50c19fY2lyY2xlfT48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbGVtZW50c19fY2lyY2xlMn0+PC9kaXY+XHJcbiAgICA8L2FydGljbGU+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJjbGFzc05hbWVzIiwidXNlRGV2aWNlIiwiQnV0dG9uIiwiU2VydmljZSIsIlNFUlZJQ0VTIiwiU0VSVklDRVNfVEVYVCIsInN0eWxlcyIsIlJvYm90SW1nIiwiU2VydmljZXMiLCJjdXJyU2VydmljZSIsInNldEN1cnJTZXJ2aWNlIiwiaXNPbkNoYW5nZSIsInNldElzT25DaGFuZ2UiLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJyZWYiLCJpc01vYmlsZSIsImhhbmRsZUNob29zZSIsIml0ZW0iLCJzZXRUaW1lb3V0IiwiaGFuZGxlU2Nyb2xsIiwiY3VycmVudCIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNlcnZpY2VzIiwic2VydmljZXNfX2NvbnRhaW5lciIsInNlcnZpY2VzX190YWJMaXN0IiwibWFwIiwidGFiVGl0bGUiLCJzZXJ2aWNlc19fZ2VuZXJhbENvbnRlbnQiLCJzZXJ2aWNlc19fZ2VuZXJhbENvbnRlbnRfX3RpdGxlIiwic2VydmljZXNfX2dlbmVyYWxDb250ZW50X190aXRsZV9tb2IiLCJzZXJ2aWNlc19fZ2VuZXJhbENvbnRlbnRfX3RleHQiLCJzZXJ2aWNlc19fZ2VuZXJhbENvbnRlbnRfX3RleHRfX3BCb3giLCJpIiwic2VydmljZXNfX2dlbmVyYWxDb250ZW50X19pbWdCb3giLCJzcmMiLCJlbGVtZW50c19fY2lyY2xlIiwiZWxlbWVudHNfX2NpcmNsZTIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/services/index.tsx\n"));

/***/ })

});