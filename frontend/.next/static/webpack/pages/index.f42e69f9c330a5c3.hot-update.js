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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AboutUs\": function() { return /* binding */ AboutUs; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/hooks/useDevice */ \"./src/hooks/useDevice.ts\");\n/* harmony import */ var _about_us_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-us-card */ \"./src/components/about-us/about-us-card/index.tsx\");\n/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants */ \"./src/constants/index.ts\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.module.scss */ \"./src/components/about-us/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _assets_Handshake_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/Handshake.png */ \"./src/components/about-us/assets/Handshake.png\");\n/* harmony import */ var _assets_HandshakeMob_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/HandshakeMob.png */ \"./src/components/about-us/assets/HandshakeMob.png\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\nvar _jsxFileName = \"D:\\\\IXNOME\\\\evo-landing\\\\frontend\\\\src\\\\components\\\\about-us\\\\index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar AboutUs = function AboutUs() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1),\n      mainItemIndex = _useState[0],\n      setMainItemIndex = _useState[1];\n\n  var _useDevice = (0,src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_1__.useDevice)(),\n      isMobile = _useDevice.isMobile;\n\n  var blockRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var circleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      top = _useState2[0],\n      setTop = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var handleScroll = function handleScroll() {\n      switch (mainItemIndex) {\n        case 0:\n          setTop(142);\n          break;\n\n        case 1:\n          setTop(447);\n          break;\n\n        case 2:\n          setTop(752);\n          break;\n\n        default:\n          setTop(0);\n      }\n\n      if (blockRef.current) {\n        var position = blockRef.current.getBoundingClientRect();\n\n        if (position.y > 450) {\n          setMainItemIndex(-1);\n        }\n\n        if (position.y < -750) {\n          setMainItemIndex(-1);\n          setTop(position.height);\n        }\n      }\n    };\n\n    window.addEventListener('scroll', handleScroll);\n    return function () {\n      window.removeEventListener('scroll', handleScroll);\n    };\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {}, [mainItemIndex]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"article\", {\n    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().aboutUs),\n    id: isMobile ? \"\" : src_constants__WEBPACK_IMPORTED_MODULE_3__.NAV[1].link.replace(\"#\", \"\"),\n    children: [isMobile && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"span\", {\n      id: src_constants__WEBPACK_IMPORTED_MODULE_3__.NAV[1].link.replace(\"#\", \"\"),\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().anchor)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().elements__circleShadow)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().elements__circleShadowBottom)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().elements__circleShadowBottom2)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().aboutUs__container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"section\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().aboutUs__head),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"img\", {\n          loading: \"lazy\",\n          src: _assets_Handshake_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"].src,\n          srcSet: \"\".concat(_assets_HandshakeMob_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"].src, \" 600w, \").concat(_assets_Handshake_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"].src, \" 1000w\"),\n          alt: \"Robot and human handshake\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"h1\", {\n          children: \"About Us\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().aboutUs__list),\n        ref: blockRef,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n          className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().aboutUs__list__circle),\n          style: {\n            top: top\n          },\n          ref: circleRef\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 11\n        }, _this), src_constants__WEBPACK_IMPORTED_MODULE_3__.ABOUT_US.map(function (item, i) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_about_us_card__WEBPACK_IMPORTED_MODULE_2__.AboutUsCard, {\n            card: item,\n            index: i,\n            mainItemIndex: mainItemIndex,\n            setMainItemIndex: setMainItemIndex\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 109,\n            columnNumber: 13\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 64,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AboutUs, \"xF8uGGIKqWzMc09EKSVc0W8pETU=\", false, function () {\n  return [src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_1__.useDevice];\n});\n\n_c = AboutUs;\n\nvar _c;\n\n$RefreshReg$(_c, \"AboutUs\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sWUFBS0Msb0VBQUwsb0JBQTJCRCxpRUFBM0IsV0FIUjtVQUlFLEdBQUcsRUFBQztRQUpOO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FERixlQU9FO1VBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBUEY7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBREYsZUE2QkU7UUFBSyxTQUFTLEVBQUVELHlFQUFoQjtRQUFzQyxHQUFHLEVBQUVPLFFBQTNDO1FBQUEsd0JBQ0U7VUFBSyxTQUFTLEVBQUVQLGlGQUFoQjtVQUE4QyxLQUFLLEVBQUU7WUFBQ1MsR0FBRyxFQUFIQTtVQUFELENBQXJEO1VBQTRELEdBQUcsRUFBRUQ7UUFBakU7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQURGLEVBRUdWLHVEQUFBLENBQWEsVUFBQ21DLElBQUQsRUFBT0MsQ0FBUDtVQUFBLG9CQUNaLDhEQUFDLHVEQUFEO1lBRUUsSUFBSSxFQUFFRCxJQUZSO1lBR0UsS0FBSyxFQUFFQyxDQUhUO1lBSUUsYUFBYSxFQUFFOUIsYUFKakI7WUFLRSxnQkFBZ0IsRUFBRUM7VUFMcEIsR0FDTzZCLENBRFA7WUFBQTtZQUFBO1lBQUE7VUFBQSxTQURZO1FBQUEsQ0FBYixDQUZIO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQTdCRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FiRjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FERjtBQTBERCxDQXpHTTs7R0FBTS9CO1VBRVVQOzs7S0FGVk8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYWJvdXQtdXMvaW5kZXgudHN4P2IzNzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURldmljZSB9IGZyb20gXCJzcmMvaG9va3MvdXNlRGV2aWNlXCI7XHJcbmltcG9ydCB7IEFib3V0VXNDYXJkIH0gZnJvbSBcIi4vYWJvdXQtdXMtY2FyZFwiO1xyXG5pbXBvcnQgeyBBQk9VVF9VUywgTkFWIH0gZnJvbSBcInNyYy9jb25zdGFudHNcIjtcclxuXHJcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XHJcbmltcG9ydCB7IE1vdXNld2hlZWwsIFBhZ2luYXRpb24gfSBmcm9tIFwic3dpcGVyXCI7XHJcbmltcG9ydCBcInN3aXBlci9jc3NcIjtcclxuaW1wb3J0IFwic3dpcGVyL2Nzcy9wYWdpbmF0aW9uXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwiLi9hc3NldHMvSGFuZHNoYWtlLnBuZ1wiO1xyXG5pbXBvcnQgSW1hZ2VNb2IgZnJvbSBcIi4vYXNzZXRzL0hhbmRzaGFrZU1vYi5wbmdcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBYm91dFVzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFttYWluSXRlbUluZGV4LCBzZXRNYWluSXRlbUluZGV4XSA9IHVzZVN0YXRlKC0xKTtcclxuICBjb25zdCB7IGlzTW9iaWxlIH0gPSB1c2VEZXZpY2UoKTtcclxuICBjb25zdCBibG9ja1JlZiA9IHVzZVJlZjxhbnkgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBjaXJjbGVSZWYgPSB1c2VSZWY8YW55IHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW3RvcCwgc2V0VG9wXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICBzd2l0Y2gobWFpbkl0ZW1JbmRleCkge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgIHNldFRvcCgxNDIpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgc2V0VG9wKDQ0Nyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICBzZXRUb3AoNzUyKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBzZXRUb3AoMCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKGJsb2NrUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGJsb2NrUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgaWYocG9zaXRpb24ueSA+IDQ1MCkge1xyXG4gICAgICAgICAgc2V0TWFpbkl0ZW1JbmRleCgtMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihwb3NpdGlvbi55IDwgLTc1MCkge1xyXG4gICAgICAgICAgc2V0TWFpbkl0ZW1JbmRleCgtMSk7XHJcbiAgICAgICAgICBzZXRUb3AocG9zaXRpb24uaGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIFxyXG4gIH0sIFttYWluSXRlbUluZGV4XSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxhcnRpY2xlXHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFib3V0VXN9XHJcbiAgICAgIGlkPXtpc01vYmlsZSA/IFwiXCIgOiBOQVZbMV0ubGluay5yZXBsYWNlKFwiI1wiLCBcIlwiKX1cclxuICAgID5cclxuICAgICAge2lzTW9iaWxlICYmIChcclxuICAgICAgICA8c3BhblxyXG4gICAgICAgICAgaWQ9e05BVlsxXS5saW5rLnJlcGxhY2UoXCIjXCIsIFwiXCIpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYW5jaG9yfVxyXG4gICAgICAgID48L3NwYW4+XHJcbiAgICAgICl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWxlbWVudHNfX2NpcmNsZVNoYWRvd30+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWxlbWVudHNfX2NpcmNsZVNoYWRvd0JvdHRvbX0+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWxlbWVudHNfX2NpcmNsZVNoYWRvd0JvdHRvbTJ9PjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFib3V0VXNfX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuYWJvdXRVc19faGVhZH0+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcclxuICAgICAgICAgICAgc3JjPXtJbWFnZS5zcmN9XHJcbiAgICAgICAgICAgIHNyY1NldD17YCR7SW1hZ2VNb2Iuc3JjfSA2MDB3LCAke0ltYWdlLnNyY30gMTAwMHdgfVxyXG4gICAgICAgICAgICBhbHQ9XCJSb2JvdCBhbmQgaHVtYW4gaGFuZHNoYWtlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aDE+QWJvdXQgVXM8L2gxPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICB7LyogPFN3aXBlclxyXG4gICAgICAgICAgZGlyZWN0aW9uPXtcInZlcnRpY2FsXCJ9XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3PXsxfVxyXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuPXswfVxyXG4gICAgICAgICAgbW91c2V3aGVlbD17dHJ1ZX1cclxuICAgICAgICAgIG1vZHVsZXM9e1tNb3VzZXdoZWVsXX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFib3V0VXNfX2xpc3R9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge0FCT1VUX1VTLm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtpfT5cclxuICAgICAgICAgICAgICA8QWJvdXRVc0NhcmRcclxuICAgICAgICAgICAgICAgIGNhcmQ9e2l0ZW19XHJcbiAgICAgICAgICAgICAgICBpbmRleD17aX1cclxuICAgICAgICAgICAgICAgIG1haW5JdGVtSW5kZXg9e21haW5JdGVtSW5kZXh9XHJcbiAgICAgICAgICAgICAgICBzZXRNYWluSXRlbUluZGV4PXtzZXRNYWluSXRlbUluZGV4fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1N3aXBlcj4gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hYm91dFVzX19saXN0fSByZWY9e2Jsb2NrUmVmfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWJvdXRVc19fbGlzdF9fY2lyY2xlfSBzdHlsZT17e3RvcH19IHJlZj17Y2lyY2xlUmVmfT48L2Rpdj5cclxuICAgICAgICAgIHtBQk9VVF9VUy5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgPEFib3V0VXNDYXJkXHJcbiAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgIGNhcmQ9e2l0ZW19XHJcbiAgICAgICAgICAgICAgaW5kZXg9e2l9XHJcbiAgICAgICAgICAgICAgbWFpbkl0ZW1JbmRleD17bWFpbkl0ZW1JbmRleH1cclxuICAgICAgICAgICAgICBzZXRNYWluSXRlbUluZGV4PXtzZXRNYWluSXRlbUluZGV4fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZURldmljZSIsIkFib3V0VXNDYXJkIiwiQUJPVVRfVVMiLCJOQVYiLCJzdHlsZXMiLCJJbWFnZSIsIkltYWdlTW9iIiwiQWJvdXRVcyIsIm1haW5JdGVtSW5kZXgiLCJzZXRNYWluSXRlbUluZGV4IiwiaXNNb2JpbGUiLCJibG9ja1JlZiIsImNpcmNsZVJlZiIsInRvcCIsInNldFRvcCIsImhhbmRsZVNjcm9sbCIsImN1cnJlbnQiLCJwb3NpdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInkiLCJoZWlnaHQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFib3V0VXMiLCJsaW5rIiwicmVwbGFjZSIsImFuY2hvciIsImVsZW1lbnRzX19jaXJjbGVTaGFkb3ciLCJlbGVtZW50c19fY2lyY2xlU2hhZG93Qm90dG9tIiwiZWxlbWVudHNfX2NpcmNsZVNoYWRvd0JvdHRvbTIiLCJhYm91dFVzX19jb250YWluZXIiLCJhYm91dFVzX19oZWFkIiwic3JjIiwiYWJvdXRVc19fbGlzdCIsImFib3V0VXNfX2xpc3RfX2NpcmNsZSIsIm1hcCIsIml0ZW0iLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/about-us/index.tsx\n"));

/***/ })

});