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

/***/ "./src/components/services/assets/Robot.png":
/*!**************************************************!*\
  !*** ./src/components/services/assets/Robot.png ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\"src\":\"/_next/static/media/Robot.b6c2f9af.png\",\"height\":411,\"width\":446,\"blurDataURL\":\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRobot.b6c2f9af.png&w=8&q=70\",\"blurWidth\":8,\"blurHeight\":7});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZXJ2aWNlcy9hc3NldHMvUm9ib3QucG5nLmpzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxDQUFDLDhMQUE4TCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zZXJ2aWNlcy9hc3NldHMvUm9ib3QucG5nP2Q3NjUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL21lZGlhL1JvYm90LmI2YzJmOWFmLnBuZ1wiLFwiaGVpZ2h0XCI6NDExLFwid2lkdGhcIjo0NDYsXCJibHVyRGF0YVVSTFwiOlwiL19uZXh0L2ltYWdlP3VybD0lMkZfbmV4dCUyRnN0YXRpYyUyRm1lZGlhJTJGUm9ib3QuYjZjMmY5YWYucG5nJnc9OCZxPTcwXCIsXCJibHVyV2lkdGhcIjo4LFwiYmx1ckhlaWdodFwiOjd9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/services/assets/Robot.png\n"));

/***/ }),

/***/ "./src/components/services/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/services/index.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Services\": function() { return /* binding */ Services; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/button */ \"./src/components/button/index.tsx\");\n/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/constants */ \"./src/constants/index.ts\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.module.scss */ \"./src/components/services/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _assets_Robot_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/Robot.png */ \"./src/components/services/assets/Robot.png\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service */ \"./src/components/services/service/index.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"D:\\\\IXNOME\\\\evo-landing\\\\frontend\\\\src\\\\components\\\\services\\\\index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Services = function Services() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(src_constants__WEBPACK_IMPORTED_MODULE_2__.SERVICES[0]),\n      currService = _useState[0],\n      setCurrService = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      isOnChange = _useState2[0],\n      setIsOnChange = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      isVisible = _useState3[0],\n      setIsVisible = _useState3[1];\n\n  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var handleChoose = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (item) {\n    setIsOnChange(true);\n    setCurrService(item);\n    setTimeout(function () {\n      return setIsOnChange(false);\n    }, 100);\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var handleScroll = function handleScroll() {\n      if (ref.current) {\n        console.log({\n          ref: ref.current.getBoundingClientRect().y,\n          win: window.scrollY\n        });\n\n        if (window.scrollY >= 1100) {\n          setIsVisible(true);\n        }\n      }\n    };\n\n    window.addEventListener(\"scroll\", handleScroll);\n    return function () {\n      window.removeEventListener(\"scroll\", handleScroll);\n    };\n  }, [ref]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"article\", {\n    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().services),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().services__container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"ul\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().services__tabList),\n        children: src_constants__WEBPACK_IMPORTED_MODULE_2__.SERVICES.map(function (item) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n              name: item.tabTitle,\n              variant: \"textMain\",\n              isActive: currService.tabTitle === item.tabTitle,\n              onClick: function onClick() {\n                return handleChoose(item);\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 15\n            }, _this)\n          }, item.tabTitle, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_service__WEBPACK_IMPORTED_MODULE_5__.Service, {\n        currService: currService,\n        isOnChange: isOnChange\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"section\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().services__generalContent),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"h1\", {\n          className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().services__generalContent__title), (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().services__generalContent__title_mob)),\n          children: \"Lorem ipsum dolor sit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n          className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().services__generalContent__text),\n          ref: ref,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"h1\", {\n            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().services__generalContent__title),\n            children: \"Lorem ipsum dolor sit\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().services__generalContent__text__pBox),\n            children: src_constants__WEBPACK_IMPORTED_MODULE_2__.SERVICES_TEXT.map(function (item, i) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"p\", {\n                children: item\n              }, i, false, {\n                fileName: _jsxFileName,\n                lineNumber: 70,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n          children: isVisible && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"img\", {\n            src: _assets_Robot_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"].src,\n            alt: \"Robot image\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().elements__circle)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().elements__circle2)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Services, \"fYWZUZ55tVXVuTII+9nrHfn5U7Y=\");\n\n_c = Services;\n\nvar _c;\n\n$RefreshReg$(_c, \"Services\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQSwwRkFBaEI7VUFBdUQsR0FBRyxFQUFFVyxHQUE1RDtVQUFBLHdCQUNFO1lBQUksU0FBUyxFQUFFWCwyRkFBZjtZQUFBO1VBQUE7WUFBQTtZQUFBO1lBQUE7VUFBQSxTQURGLGVBSUU7WUFBSyxTQUFTLEVBQUVBLGdHQUFoQjtZQUFBLFVBQ0dELDREQUFBLENBQWtCLFVBQUNjLElBQUQsRUFBT3VCLENBQVA7Y0FBQSxvQkFDakI7Z0JBQUEsVUFBWXZCO2NBQVosR0FBUXVCLENBQVI7Z0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQSxTQURpQjtZQUFBLENBQWxCO1VBREg7WUFBQTtZQUFBO1lBQUE7VUFBQSxTQUpGO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQVRGLGVBbUJFO1VBQUEsVUFDQzNCLFNBQVMsaUJBQUk7WUFBSyxHQUFHLEVBQUVSLDZEQUFWO1lBQXdCLEdBQUcsRUFBQztVQUE1QjtZQUFBO1lBQUE7WUFBQTtVQUFBO1FBRGQ7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQW5CRjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FkRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FERixlQXVDRTtNQUFLLFNBQVMsRUFBRUQsNEVBQXVCc0M7SUFBdkM7TUFBQTtNQUFBO01BQUE7SUFBQSxTQXZDRixlQXdDRTtNQUFLLFNBQVMsRUFBRXRDLDZFQUF3QnVDO0lBQXhDO01BQUE7TUFBQTtNQUFBO0lBQUEsU0F4Q0Y7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREY7QUE0Q0QsQ0F6RU07O0dBQU1uQzs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VydmljZXMvaW5kZXgudHN4PzAwY2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUcmFuc2l0aW9uIH0gZnJvbSBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBjb21wb25lbnRzL2J1dHRvblwiO1xyXG5pbXBvcnQgeyBTRVJWSUNFUywgU0VSVklDRVNfVEVYVCB9IGZyb20gXCJzcmMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IFJvYm90SW1nIGZyb20gXCIuL2Fzc2V0cy9Sb2JvdC5wbmdcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTZXJ2aWNlcyA9ICgpID0+IHtcclxuICBjb25zdCBbY3VyclNlcnZpY2UsIHNldEN1cnJTZXJ2aWNlXSA9IHVzZVN0YXRlKFNFUlZJQ0VTWzBdKTtcclxuICBjb25zdCBbaXNPbkNoYW5nZSwgc2V0SXNPbkNoYW5nZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCByZWYgPSB1c2VSZWY8YW55IHwgbnVsbD4obnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNob29zZSA9IHVzZUNhbGxiYWNrKChpdGVtOiAodHlwZW9mIFNFUlZJQ0VTKVswXSkgPT4ge1xyXG4gICAgc2V0SXNPbkNoYW5nZSh0cnVlKTtcclxuICAgIHNldEN1cnJTZXJ2aWNlKGl0ZW0pO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRJc09uQ2hhbmdlKGZhbHNlKSwgMTAwKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChyZWYuY3VycmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHtyZWY6IHJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnksIHdpbjogd2luZG93LnNjcm9sbFl9KVxyXG4gICAgICAgIGlmKHdpbmRvdy5zY3JvbGxZID49IDExMDApIHtcclxuICAgICAgICAgIHNldElzVmlzaWJsZSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgfTtcclxuICB9LCBbcmVmXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlcy5zZXJ2aWNlc30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VydmljZXNfX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLnNlcnZpY2VzX190YWJMaXN0fT5cclxuICAgICAgICAgIHtTRVJWSUNFUy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPGxpIGtleT17aXRlbS50YWJUaXRsZX0+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgbmFtZT17aXRlbS50YWJUaXRsZX1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXh0TWFpblwiXHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17Y3VyclNlcnZpY2UudGFiVGl0bGUgPT09IGl0ZW0udGFiVGl0bGV9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDaG9vc2UoaXRlbSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPFNlcnZpY2UgY3VyclNlcnZpY2U9e2N1cnJTZXJ2aWNlfSBpc09uQ2hhbmdlPXtpc09uQ2hhbmdlfSAvPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnNlcnZpY2VzX19nZW5lcmFsQ29udGVudH0+XHJcbiAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgIHN0eWxlcy5zZXJ2aWNlc19fZ2VuZXJhbENvbnRlbnRfX3RpdGxlLFxyXG4gICAgICAgICAgICAgIHN0eWxlcy5zZXJ2aWNlc19fZ2VuZXJhbENvbnRlbnRfX3RpdGxlX21vYlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXRcclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlcnZpY2VzX19nZW5lcmFsQ29udGVudF9fdGV4dH0gcmVmPXtyZWZ9PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuc2VydmljZXNfX2dlbmVyYWxDb250ZW50X190aXRsZX0+XHJcbiAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VydmljZXNfX2dlbmVyYWxDb250ZW50X190ZXh0X19wQm94fT5cclxuICAgICAgICAgICAgICB7U0VSVklDRVNfVEVYVC5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxwIGtleT17aX0+e2l0ZW19PC9wPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtpc1Zpc2libGUgJiYgPGltZyBzcmM9e1JvYm90SW1nLnNyY30gYWx0PVwiUm9ib3QgaW1hZ2VcIiAvPn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWxlbWVudHNfX2NpcmNsZX0+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWxlbWVudHNfX2NpcmNsZTJ9PjwvZGl2PlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQnV0dG9uIiwiU0VSVklDRVMiLCJTRVJWSUNFU19URVhUIiwic3R5bGVzIiwiUm9ib3RJbWciLCJjbGFzc05hbWVzIiwiU2VydmljZSIsIlNlcnZpY2VzIiwiY3VyclNlcnZpY2UiLCJzZXRDdXJyU2VydmljZSIsImlzT25DaGFuZ2UiLCJzZXRJc09uQ2hhbmdlIiwiaXNWaXNpYmxlIiwic2V0SXNWaXNpYmxlIiwicmVmIiwiaGFuZGxlQ2hvb3NlIiwiaXRlbSIsInNldFRpbWVvdXQiLCJoYW5kbGVTY3JvbGwiLCJjdXJyZW50IiwiY29uc29sZSIsImxvZyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInkiLCJ3aW4iLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXJ2aWNlcyIsInNlcnZpY2VzX19jb250YWluZXIiLCJzZXJ2aWNlc19fdGFiTGlzdCIsIm1hcCIsInRhYlRpdGxlIiwic2VydmljZXNfX2dlbmVyYWxDb250ZW50Iiwic2VydmljZXNfX2dlbmVyYWxDb250ZW50X190aXRsZSIsInNlcnZpY2VzX19nZW5lcmFsQ29udGVudF9fdGl0bGVfbW9iIiwic2VydmljZXNfX2dlbmVyYWxDb250ZW50X190ZXh0Iiwic2VydmljZXNfX2dlbmVyYWxDb250ZW50X190ZXh0X19wQm94IiwiaSIsInNyYyIsImVsZW1lbnRzX19jaXJjbGUiLCJlbGVtZW50c19fY2lyY2xlMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/services/index.tsx\n"));

/***/ })

});