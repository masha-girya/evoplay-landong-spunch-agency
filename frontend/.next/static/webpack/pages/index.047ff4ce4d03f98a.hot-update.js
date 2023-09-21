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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Services\": function() { return /* binding */ Services; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/button */ \"./src/components/button/index.tsx\");\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service */ \"./src/components/services/service/index.tsx\");\n/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/constants */ \"./src/constants/index.ts\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.module.scss */ \"./src/components/services/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _assets_Robot_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/Robot.png */ \"./src/components/services/assets/Robot.png\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"D:\\\\IXNOME\\\\evo-landing\\\\frontend\\\\src\\\\components\\\\services\\\\index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Services = function Services() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(src_constants__WEBPACK_IMPORTED_MODULE_4__.SERVICES[0]),\n      currService = _useState[0],\n      setCurrService = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      isOnChange = _useState2[0],\n      setIsOnChange = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      isVisible = _useState3[0],\n      setIsVisible = _useState3[1];\n\n  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n\n  var _useDevice = useDevice(),\n      isMobile = _useDevice.isMobile;\n\n  var handleChoose = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (item) {\n    setIsOnChange(true);\n    setCurrService(item);\n    setTimeout(function () {\n      return setIsOnChange(false);\n    }, 100);\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var handleScroll = function handleScroll() {\n      if (ref.current) {\n        if (window.scrollY >= (isMobile ? 900 : 1200)) {\n          setIsVisible(true);\n        }\n      }\n    };\n\n    window.addEventListener(\"scroll\", handleScroll);\n    return function () {\n      window.removeEventListener(\"scroll\", handleScroll);\n    };\n  }, [ref, isMobile]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"article\", {\n    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().services),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().services__container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"ul\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().services__tabList),\n        children: src_constants__WEBPACK_IMPORTED_MODULE_4__.SERVICES.map(function (item) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n              name: item.tabTitle,\n              variant: \"textMain\",\n              isActive: currService.tabTitle === item.tabTitle,\n              onClick: function onClick() {\n                return handleChoose(item);\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 44,\n              columnNumber: 15\n            }, _this)\n          }, item.tabTitle, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_service__WEBPACK_IMPORTED_MODULE_3__.Service, {\n        currService: currService,\n        isOnChange: isOnChange\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"section\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().services__generalContent),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"h1\", {\n          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().services__generalContent__title), (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().services__generalContent__title_mob)),\n          children: \"Lorem ipsum dolor sit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n          className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().services__generalContent__text),\n          ref: ref,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"h1\", {\n            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().services__generalContent__title),\n            children: \"Lorem ipsum dolor sit\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().services__generalContent__text__pBox),\n            children: src_constants__WEBPACK_IMPORTED_MODULE_4__.SERVICES_TEXT.map(function (item, i) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"p\", {\n                children: item\n              }, i, false, {\n                fileName: _jsxFileName,\n                lineNumber: 69,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n          className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().services__generalContent__imgBox),\n          children: isVisible && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"img\", {\n            src: _assets_Robot_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"].src,\n            alt: \"Robot image\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 27\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().elements__circle)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().elements__circle2)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Services, \"6WwtsBPDYqfokeQR+c6tWsrsJlQ=\", true);\n\n_c = Services;\n\nvar _c;\n\n$RefreshReg$(_c, \"Services\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDRTtZQUFJLFNBQVMsRUFBRVQsMkZBQWY7WUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUEsU0FERixlQUlFO1lBQUssU0FBUyxFQUFFQSxnR0FBaEI7WUFBQSxVQUNHRCw0REFBQSxDQUFrQixVQUFDYyxJQUFELEVBQU9rQixDQUFQO2NBQUEsb0JBQ2pCO2dCQUFBLFVBQVlsQjtjQUFaLEdBQVFrQixDQUFSO2dCQUFBO2dCQUFBO2dCQUFBO2NBQUEsU0FEaUI7WUFBQSxDQUFsQjtVQURIO1lBQUE7WUFBQTtZQUFBO1VBQUEsU0FKRjtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FURixlQW1CRTtVQUFLLFNBQVMsRUFBRS9CLDRGQUFoQjtVQUFBLFVBQ0dPLFNBQVMsaUJBQUk7WUFBSyxHQUFHLEVBQUVOLDZEQUFWO1lBQXdCLEdBQUcsRUFBQztVQUE1QjtZQUFBO1lBQUE7WUFBQTtVQUFBO1FBRGhCO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FuQkY7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBZEY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBREYsZUF1Q0U7TUFBSyxTQUFTLEVBQUVELDRFQUF1QmtDO0lBQXZDO01BQUE7TUFBQTtNQUFBO0lBQUEsU0F2Q0YsZUF3Q0U7TUFBSyxTQUFTLEVBQUVsQyw2RUFBd0JtQztJQUF4QztNQUFBO01BQUE7TUFBQTtJQUFBLFNBeENGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURGO0FBNENELENBekVNOztHQUFNakM7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NlcnZpY2VzL2luZGV4LnRzeD8wMGNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBjb21wb25lbnRzL2J1dHRvblwiO1xyXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTRVJWSUNFUywgU0VSVklDRVNfVEVYVCB9IGZyb20gXCJzcmMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IFJvYm90SW1nIGZyb20gXCIuL2Fzc2V0cy9Sb2JvdC5wbmdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTZXJ2aWNlcyA9ICgpID0+IHtcclxuICBjb25zdCBbY3VyclNlcnZpY2UsIHNldEN1cnJTZXJ2aWNlXSA9IHVzZVN0YXRlKFNFUlZJQ0VTWzBdKTtcclxuICBjb25zdCBbaXNPbkNoYW5nZSwgc2V0SXNPbkNoYW5nZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCByZWYgPSB1c2VSZWY8YW55IHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgeyBpc01vYmlsZSB9ID0gdXNlRGV2aWNlKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNob29zZSA9IHVzZUNhbGxiYWNrKChpdGVtOiAodHlwZW9mIFNFUlZJQ0VTKVswXSkgPT4ge1xyXG4gICAgc2V0SXNPbkNoYW5nZSh0cnVlKTtcclxuICAgIHNldEN1cnJTZXJ2aWNlKGl0ZW0pO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRJc09uQ2hhbmdlKGZhbHNlKSwgMTAwKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChyZWYuY3VycmVudCkge1xyXG4gICAgICAgIGlmKHdpbmRvdy5zY3JvbGxZID49IChpc01vYmlsZSA/IDkwMCA6IDEyMDApKSB7XHJcbiAgICAgICAgICBzZXRJc1Zpc2libGUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW3JlZiwgaXNNb2JpbGVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLnNlcnZpY2VzfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXJ2aWNlc19fY29udGFpbmVyfT5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuc2VydmljZXNfX3RhYkxpc3R9PlxyXG4gICAgICAgICAge1NFUlZJQ0VTLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtpdGVtLnRhYlRpdGxlfT5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBuYW1lPXtpdGVtLnRhYlRpdGxlfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInRleHRNYWluXCJcclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtjdXJyU2VydmljZS50YWJUaXRsZSA9PT0gaXRlbS50YWJUaXRsZX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNob29zZShpdGVtKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8U2VydmljZSBjdXJyU2VydmljZT17Y3VyclNlcnZpY2V9IGlzT25DaGFuZ2U9e2lzT25DaGFuZ2V9IC8+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuc2VydmljZXNfX2dlbmVyYWxDb250ZW50fT5cclxuICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgc3R5bGVzLnNlcnZpY2VzX19nZW5lcmFsQ29udGVudF9fdGl0bGUsXHJcbiAgICAgICAgICAgICAgc3R5bGVzLnNlcnZpY2VzX19nZW5lcmFsQ29udGVudF9fdGl0bGVfbW9iXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdFxyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VydmljZXNfX2dlbmVyYWxDb250ZW50X190ZXh0fSByZWY9e3JlZn0+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5zZXJ2aWNlc19fZ2VuZXJhbENvbnRlbnRfX3RpdGxlfT5cclxuICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXRcclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXJ2aWNlc19fZ2VuZXJhbENvbnRlbnRfX3RleHRfX3BCb3h9PlxyXG4gICAgICAgICAgICAgIHtTRVJWSUNFU19URVhULm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHAga2V5PXtpfT57aXRlbX08L3A+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlcnZpY2VzX19nZW5lcmFsQ29udGVudF9faW1nQm94fT5cclxuICAgICAgICAgICAge2lzVmlzaWJsZSAmJiA8aW1nIHNyYz17Um9ib3RJbWcuc3JjfSBhbHQ9XCJSb2JvdCBpbWFnZVwiIC8+fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbGVtZW50c19fY2lyY2xlfT48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbGVtZW50c19fY2lyY2xlMn0+PC9kaXY+XHJcbiAgICA8L2FydGljbGU+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJjbGFzc05hbWVzIiwiQnV0dG9uIiwiU2VydmljZSIsIlNFUlZJQ0VTIiwiU0VSVklDRVNfVEVYVCIsInN0eWxlcyIsIlJvYm90SW1nIiwiU2VydmljZXMiLCJjdXJyU2VydmljZSIsInNldEN1cnJTZXJ2aWNlIiwiaXNPbkNoYW5nZSIsInNldElzT25DaGFuZ2UiLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJyZWYiLCJ1c2VEZXZpY2UiLCJpc01vYmlsZSIsImhhbmRsZUNob29zZSIsIml0ZW0iLCJzZXRUaW1lb3V0IiwiaGFuZGxlU2Nyb2xsIiwiY3VycmVudCIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNlcnZpY2VzIiwic2VydmljZXNfX2NvbnRhaW5lciIsInNlcnZpY2VzX190YWJMaXN0IiwibWFwIiwidGFiVGl0bGUiLCJzZXJ2aWNlc19fZ2VuZXJhbENvbnRlbnQiLCJzZXJ2aWNlc19fZ2VuZXJhbENvbnRlbnRfX3RpdGxlIiwic2VydmljZXNfX2dlbmVyYWxDb250ZW50X190aXRsZV9tb2IiLCJzZXJ2aWNlc19fZ2VuZXJhbENvbnRlbnRfX3RleHQiLCJzZXJ2aWNlc19fZ2VuZXJhbENvbnRlbnRfX3RleHRfX3BCb3giLCJpIiwic2VydmljZXNfX2dlbmVyYWxDb250ZW50X19pbWdCb3giLCJzcmMiLCJlbGVtZW50c19fY2lyY2xlIiwiZWxlbWVudHNfX2NpcmNsZTIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/services/index.tsx\n"));

/***/ })

});