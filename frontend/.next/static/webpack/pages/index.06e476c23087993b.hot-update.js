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

/***/ "./src/components/about-us/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/about-us/index.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AboutUs\": function() { return /* binding */ AboutUs; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/hooks/useDevice */ \"./src/hooks/useDevice.ts\");\n/* harmony import */ var _about_us_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-us-card */ \"./src/components/about-us/about-us-card/index.tsx\");\n/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants */ \"./src/constants/index.ts\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.module.scss */ \"./src/components/about-us/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _assets_Handshake_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/Handshake.png */ \"./src/components/about-us/assets/Handshake.png\");\n/* harmony import */ var _assets_HandshakeMob_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/HandshakeMob.png */ \"./src/components/about-us/assets/HandshakeMob.png\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\nvar _jsxFileName = \"D:\\\\IXNOME\\\\evo-landing\\\\frontend\\\\src\\\\components\\\\about-us\\\\index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar AboutUs = function AboutUs() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1),\n      mainItemIndex = _useState[0],\n      setMainItemIndex = _useState[1];\n\n  var _useDevice = (0,src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_1__.useDevice)(),\n      isMobile = _useDevice.isMobile;\n\n  var blockRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var circleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      prevScrollY = _useState2[0],\n      setPrevScrollY = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      top = _useState3[0],\n      setTop = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var handleScroll = function handleScroll() {\n      if (blockRef.current && circleRef.current) {\n        if (mainItemIndex === 0) {\n          setTop(142);\n        } else if (mainItemIndex === 1) {\n          setTop(447);\n        } else if (mainItemIndex === 2) {\n          setTop(752);\n        } else {\n          setTop(0);\n        }\n      }\n    };\n\n    window.addEventListener('scroll', handleScroll);\n    return function () {\n      window.removeEventListener('scroll', handleScroll);\n    };\n  }, [prevScrollY, top]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (blockRef.current && circleRef.current) {\n      if (mainItemIndex === 0) {\n        setTop(142);\n      } else if (mainItemIndex === 1) {\n        setTop(447);\n      } else if (mainItemIndex === 2) {\n        setTop(752);\n      } else {\n        setTop(0);\n      }\n    }\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"article\", {\n    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().aboutUs),\n    id: isMobile ? \"\" : src_constants__WEBPACK_IMPORTED_MODULE_3__.NAV[1].link.replace(\"#\", \"\"),\n    children: [isMobile && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"span\", {\n      id: src_constants__WEBPACK_IMPORTED_MODULE_3__.NAV[1].link.replace(\"#\", \"\"),\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().anchor)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().elements__circleShadow)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().elements__circleShadowBottom)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().elements__circleShadowBottom2)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().aboutUs__container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"section\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().aboutUs__head),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"img\", {\n          loading: \"lazy\",\n          src: _assets_Handshake_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"].src,\n          srcSet: \"\".concat(_assets_HandshakeMob_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"].src, \" 600w, \").concat(_assets_Handshake_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"].src, \" 1000w\"),\n          alt: \"Robot and human handshake\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"h1\", {\n          children: \"About Us\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().aboutUs__list),\n        ref: blockRef,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n          className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().aboutUs__list__circle),\n          style: {\n            top: top\n          },\n          ref: circleRef\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 11\n        }, _this), src_constants__WEBPACK_IMPORTED_MODULE_3__.ABOUT_US.map(function (item, i) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_about_us_card__WEBPACK_IMPORTED_MODULE_2__.AboutUsCard, {\n            card: item,\n            index: i,\n            mainItemIndex: mainItemIndex,\n            setMainItemIndex: setMainItemIndex\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 106,\n            columnNumber: 13\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 61,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AboutUs, \"xrPe9GlOwG7BS63iQ35JRLUt7y0=\", false, function () {\n  return [src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_1__.useDevice];\n});\n\n_c = AboutUs;\n\nvar _c;\n\n$RefreshReg$(_c, \"AboutUs\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZGV4LnRzeD9iMzc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEZXZpY2UgfSBmcm9tIFwic3JjL2hvb2tzL3VzZURldmljZVwiO1xyXG5pbXBvcnQgeyBBYm91dFVzQ2FyZCB9IGZyb20gXCIuL2Fib3V0LXVzLWNhcmRcIjtcclxuaW1wb3J0IHsgQUJPVVRfVVMsIE5BViB9IGZyb20gXCJzcmMvY29uc3RhbnRzXCI7XHJcblxyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xyXG5pbXBvcnQgeyBNb3VzZXdoZWVsLCBQYWdpbmF0aW9uIH0gZnJvbSBcInN3aXBlclwiO1xyXG5pbXBvcnQgXCJzd2lwZXIvY3NzXCI7XHJcbmltcG9ydCBcInN3aXBlci9jc3MvcGFnaW5hdGlvblwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIi4vYXNzZXRzL0hhbmRzaGFrZS5wbmdcIjtcclxuaW1wb3J0IEltYWdlTW9iIGZyb20gXCIuL2Fzc2V0cy9IYW5kc2hha2VNb2IucG5nXCI7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQWJvdXRVcyA9ICgpID0+IHtcclxuICBjb25zdCBbbWFpbkl0ZW1JbmRleCwgc2V0TWFpbkl0ZW1JbmRleF0gPSB1c2VTdGF0ZSgtMSk7XHJcbiAgY29uc3QgeyBpc01vYmlsZSB9ID0gdXNlRGV2aWNlKCk7XHJcbiAgY29uc3QgYmxvY2tSZWYgPSB1c2VSZWY8YW55IHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgY2lyY2xlUmVmID0gdXNlUmVmPGFueSB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtwcmV2U2Nyb2xsWSwgc2V0UHJldlNjcm9sbFldID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3RvcCwgc2V0VG9wXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICBpZihibG9ja1JlZi5jdXJyZW50ICYmIGNpcmNsZVJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgaWYobWFpbkl0ZW1JbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgc2V0VG9wKDE0Mik7XHJcbiAgICAgICAgfSBlbHNlIGlmKG1haW5JdGVtSW5kZXggPT09IDEpIHtcclxuICAgICAgICAgIHNldFRvcCg0NDcpXHJcbiAgICAgICAgfSBlbHNlIGlmKG1haW5JdGVtSW5kZXggPT09IDIpIHtcclxuICAgICAgICAgIHNldFRvcCg3NTIpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldFRvcCgwKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW3ByZXZTY3JvbGxZLCB0b3BdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKGJsb2NrUmVmLmN1cnJlbnQgJiYgY2lyY2xlUmVmLmN1cnJlbnQpIHtcclxuICAgICAgaWYobWFpbkl0ZW1JbmRleCA9PT0gMCkge1xyXG4gICAgICAgIHNldFRvcCgxNDIpO1xyXG4gICAgICB9IGVsc2UgaWYobWFpbkl0ZW1JbmRleCA9PT0gMSkge1xyXG4gICAgICAgIHNldFRvcCg0NDcpXHJcbiAgICAgIH0gZWxzZSBpZihtYWluSXRlbUluZGV4ID09PSAyKSB7XHJcbiAgICAgICAgc2V0VG9wKDc1MilcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRUb3AoMClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YXJ0aWNsZVxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5hYm91dFVzfVxyXG4gICAgICBpZD17aXNNb2JpbGUgPyBcIlwiIDogTkFWWzFdLmxpbmsucmVwbGFjZShcIiNcIiwgXCJcIil9XHJcbiAgICA+XHJcbiAgICAgIHtpc01vYmlsZSAmJiAoXHJcbiAgICAgICAgPHNwYW5cclxuICAgICAgICAgIGlkPXtOQVZbMV0ubGluay5yZXBsYWNlKFwiI1wiLCBcIlwiKX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFuY2hvcn1cclxuICAgICAgICA+PC9zcGFuPlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVsZW1lbnRzX19jaXJjbGVTaGFkb3d9PjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVsZW1lbnRzX19jaXJjbGVTaGFkb3dCb3R0b219PjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVsZW1lbnRzX19jaXJjbGVTaGFkb3dCb3R0b20yfT48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hYm91dFVzX19jb250YWluZXJ9PlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmFib3V0VXNfX2hlYWR9PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXHJcbiAgICAgICAgICAgIHNyYz17SW1hZ2Uuc3JjfVxyXG4gICAgICAgICAgICBzcmNTZXQ9e2Ake0ltYWdlTW9iLnNyY30gNjAwdywgJHtJbWFnZS5zcmN9IDEwMDB3YH1cclxuICAgICAgICAgICAgYWx0PVwiUm9ib3QgYW5kIGh1bWFuIGhhbmRzaGFrZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGgxPkFib3V0IFVzPC9oMT5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgey8qIDxTd2lwZXJcclxuICAgICAgICAgIGRpcmVjdGlvbj17XCJ2ZXJ0aWNhbFwifVxyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldz17MX1cclxuICAgICAgICAgIHNwYWNlQmV0d2Vlbj17MH1cclxuICAgICAgICAgIG1vdXNld2hlZWw9e3RydWV9XHJcbiAgICAgICAgICBtb2R1bGVzPXtbTW91c2V3aGVlbF19XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hYm91dFVzX19saXN0fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtBQk9VVF9VUy5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgPFN3aXBlclNsaWRlIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgPEFib3V0VXNDYXJkXHJcbiAgICAgICAgICAgICAgICBjYXJkPXtpdGVtfVxyXG4gICAgICAgICAgICAgICAgaW5kZXg9e2l9XHJcbiAgICAgICAgICAgICAgICBtYWluSXRlbUluZGV4PXttYWluSXRlbUluZGV4fVxyXG4gICAgICAgICAgICAgICAgc2V0TWFpbkl0ZW1JbmRleD17c2V0TWFpbkl0ZW1JbmRleH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9Td2lwZXI+ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWJvdXRVc19fbGlzdH0gcmVmPXtibG9ja1JlZn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFib3V0VXNfX2xpc3RfX2NpcmNsZX0gc3R5bGU9e3t0b3B9fSByZWY9e2NpcmNsZVJlZn0+PC9kaXY+XHJcbiAgICAgICAgICB7QUJPVVRfVVMubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxBYm91dFVzQ2FyZFxyXG4gICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICBjYXJkPXtpdGVtfVxyXG4gICAgICAgICAgICAgIGluZGV4PXtpfVxyXG4gICAgICAgICAgICAgIG1haW5JdGVtSW5kZXg9e21haW5JdGVtSW5kZXh9XHJcbiAgICAgICAgICAgICAgc2V0TWFpbkl0ZW1JbmRleD17c2V0TWFpbkl0ZW1JbmRleH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYXJ0aWNsZT5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VEZXZpY2UiLCJBYm91dFVzQ2FyZCIsIkFCT1VUX1VTIiwiTkFWIiwic3R5bGVzIiwiSW1hZ2UiLCJJbWFnZU1vYiIsIkFib3V0VXMiLCJtYWluSXRlbUluZGV4Iiwic2V0TWFpbkl0ZW1JbmRleCIsImlzTW9iaWxlIiwiYmxvY2tSZWYiLCJjaXJjbGVSZWYiLCJwcmV2U2Nyb2xsWSIsInNldFByZXZTY3JvbGxZIiwidG9wIiwic2V0VG9wIiwiaGFuZGxlU2Nyb2xsIiwiY3VycmVudCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWJvdXRVcyIsImxpbmsiLCJyZXBsYWNlIiwiYW5jaG9yIiwiZWxlbWVudHNfX2NpcmNsZVNoYWRvdyIsImVsZW1lbnRzX19jaXJjbGVTaGFkb3dCb3R0b20iLCJlbGVtZW50c19fY2lyY2xlU2hhZG93Qm90dG9tMiIsImFib3V0VXNfX2NvbnRhaW5lciIsImFib3V0VXNfX2hlYWQiLCJzcmMiLCJhYm91dFVzX19saXN0IiwiYWJvdXRVc19fbGlzdF9fY2lyY2xlIiwibWFwIiwiaXRlbSIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/about-us/index.tsx\n"));

/***/ })

});