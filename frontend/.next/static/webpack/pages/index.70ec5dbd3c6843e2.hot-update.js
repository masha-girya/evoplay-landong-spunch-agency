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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AboutUs\": function() { return /* binding */ AboutUs; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/hooks/useDevice */ \"./src/hooks/useDevice.ts\");\n/* harmony import */ var _about_us_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-us-card */ \"./src/components/about-us/about-us-card/index.tsx\");\n/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants */ \"./src/constants/index.ts\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.module.scss */ \"./src/components/about-us/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _assets_Handshake_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/Handshake.png */ \"./src/components/about-us/assets/Handshake.png\");\n/* harmony import */ var _assets_HandshakeMob_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/HandshakeMob.png */ \"./src/components/about-us/assets/HandshakeMob.png\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\nvar _jsxFileName = \"D:\\\\IXNOME\\\\evo-landing\\\\frontend\\\\src\\\\components\\\\about-us\\\\index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar AboutUs = function AboutUs() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1),\n      mainItemIndex = _useState[0],\n      setMainItemIndex = _useState[1];\n\n  var _useDevice = (0,src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_1__.useDevice)(),\n      isMobile = _useDevice.isMobile;\n\n  var blockRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var circleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      prevScrollY = _useState2[0],\n      setPrevScrollY = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      top = _useState3[0],\n      setTop = _useState3[1]; // useEffect(() => {\n  //   const handleScroll = () => {\n  //     if(blockRef.current) {\n  //       const position = blockRef.current.getBoundingClientRect();\n  //       if(position.y > 450) {\n  //         setMainItemIndex(-1);\n  //       }\n  //       if(position.y < -750) {\n  //         setMainItemIndex(-1);\n  //         setTop(position.height);\n  //       }\n  //     }\n  //   };\n  //   window.addEventListener('scroll', handleScroll);\n  //   return () => {\n  //     window.removeEventListener('scroll', handleScroll);\n  //   };\n  // }, [prevScrollY, top]);\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    switch (mainItemIndex) {\n      case 0:\n        setTop(142);\n        break;\n\n      case 1:\n        setTop(447);\n        break;\n\n      case 2:\n        setTop(752);\n    }\n\n    if (mainItemIndex === 0) {\n      setTop(142);\n      return;\n    } else if (mainItemIndex === 1) {\n      setTop(447);\n      return;\n    } else if (mainItemIndex === 2) {\n      setTop(752);\n    }\n  }, [mainItemIndex]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"article\", {\n    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().aboutUs),\n    id: isMobile ? \"\" : src_constants__WEBPACK_IMPORTED_MODULE_3__.NAV[1].link.replace(\"#\", \"\"),\n    children: [isMobile && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"span\", {\n      id: src_constants__WEBPACK_IMPORTED_MODULE_3__.NAV[1].link.replace(\"#\", \"\"),\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().anchor)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().elements__circleShadow)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().elements__circleShadowBottom)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().elements__circleShadowBottom2)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().aboutUs__container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"section\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().aboutUs__head),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"img\", {\n          loading: \"lazy\",\n          src: _assets_Handshake_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"].src,\n          srcSet: \"\".concat(_assets_HandshakeMob_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"].src, \" 600w, \").concat(_assets_Handshake_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"].src, \" 1000w\"),\n          alt: \"Robot and human handshake\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"h1\", {\n          children: \"About Us\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().aboutUs__list),\n        ref: blockRef,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n          className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().aboutUs__list__circle),\n          style: {\n            top: top\n          },\n          ref: circleRef\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 11\n        }, _this), src_constants__WEBPACK_IMPORTED_MODULE_3__.ABOUT_US.map(function (item, i) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_about_us_card__WEBPACK_IMPORTED_MODULE_2__.AboutUsCard, {\n            card: item,\n            index: i,\n            mainItemIndex: mainItemIndex,\n            setMainItemIndex: setMainItemIndex\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 114,\n            columnNumber: 13\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 69,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AboutUs, \"3tlQX5JMtmhsRiC6vP5xFiXlL5c=\", false, function () {\n  return [src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_1__.useDevice];\n});\n\n_c = AboutUs;\n\nvar _c;\n\n$RefreshReg$(_c, \"AboutUs\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hYm91dC11cy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBR08sSUFBTVUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtFQUFBOztFQUMzQixnQkFBMENSLCtDQUFRLENBQUMsQ0FBQyxDQUFGLENBQWxEO0VBQUEsSUFBT1MsYUFBUDtFQUFBLElBQXNCQyxnQkFBdEI7O0VBQ0EsaUJBQXFCVCw4REFBUyxFQUE5QjtFQUFBLElBQVFVLFFBQVIsY0FBUUEsUUFBUjs7RUFDQSxJQUFNQyxRQUFRLEdBQUdiLDZDQUFNLENBQWEsSUFBYixDQUF2QjtFQUNBLElBQU1jLFNBQVMsR0FBR2QsNkNBQU0sQ0FBYSxJQUFiLENBQXhCOztFQUNBLGlCQUFzQ0MsK0NBQVEsQ0FBQyxDQUFELENBQTlDO0VBQUEsSUFBT2MsV0FBUDtFQUFBLElBQW9CQyxjQUFwQjs7RUFDQSxpQkFBc0JmLCtDQUFRLENBQUMsQ0FBRCxDQUE5QjtFQUFBLElBQU9nQixHQUFQO0VBQUEsSUFBWUMsTUFBWixpQkFOMkIsQ0FRM0I7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFFQTtFQUVBO0VBQ0E7RUFDQTtFQUNBOzs7RUFFQW5CLGdEQUFTLENBQUMsWUFBTTtJQUNkLFFBQU9XLGFBQVA7TUFDRSxLQUFLLENBQUw7UUFDRVEsTUFBTSxDQUFDLEdBQUQsQ0FBTjtRQUNBOztNQUNGLEtBQUssQ0FBTDtRQUNFQSxNQUFNLENBQUMsR0FBRCxDQUFOO1FBQ0E7O01BQ0YsS0FBSyxDQUFMO1FBQ0VBLE1BQU0sQ0FBQyxHQUFELENBQU47SUFSSjs7SUFVQSxJQUFHUixhQUFhLEtBQUssQ0FBckIsRUFBd0I7TUFDdEJRLE1BQU0sQ0FBQyxHQUFELENBQU47TUFDQTtJQUNELENBSEQsTUFHTyxJQUFHUixhQUFhLEtBQUssQ0FBckIsRUFBd0I7TUFDN0JRLE1BQU0sQ0FBQyxHQUFELENBQU47TUFDQTtJQUNELENBSE0sTUFHQSxJQUFHUixhQUFhLEtBQUssQ0FBckIsRUFBd0I7TUFDN0JRLE1BQU0sQ0FBQyxHQUFELENBQU47SUFDRDtFQUNGLENBcEJRLEVBb0JOLENBQUNSLGFBQUQsQ0FwQk0sQ0FBVDtFQXNCQSxvQkFDRTtJQUNFLFNBQVMsRUFBRUosbUVBRGI7SUFFRSxFQUFFLEVBQUVNLFFBQVEsR0FBRyxFQUFILEdBQVFQLDhEQUFBLENBQW9CLEdBQXBCLEVBQXlCLEVBQXpCLENBRnRCO0lBQUEsV0FJR08sUUFBUSxpQkFDUDtNQUNFLEVBQUUsRUFBRVAsOERBQUEsQ0FBb0IsR0FBcEIsRUFBeUIsRUFBekIsQ0FETjtNQUVFLFNBQVMsRUFBRUMsa0VBQWFnQjtJQUYxQjtNQUFBO01BQUE7TUFBQTtJQUFBLFNBTEosZUFVRTtNQUFLLFNBQVMsRUFBRWhCLGtGQUE2QmlCO0lBQTdDO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FWRixlQVdFO01BQUssU0FBUyxFQUFFakIsd0ZBQW1Da0I7SUFBbkQ7TUFBQTtNQUFBO01BQUE7SUFBQSxTQVhGLGVBWUU7TUFBSyxTQUFTLEVBQUVsQix5RkFBb0NtQjtJQUFwRDtNQUFBO01BQUE7TUFBQTtJQUFBLFNBWkYsZUFhRTtNQUFLLFNBQVMsRUFBRW5CLDhFQUFoQjtNQUFBLHdCQUNFO1FBQVMsU0FBUyxFQUFFQSx5RUFBcEI7UUFBQSx3QkFDRTtVQUNFLE9BQU8sRUFBQyxNQURWO1VBRUUsR0FBRyxFQUFFQyxpRUFGUDtVQUdFLE1BQU0sWUFBS0Msb0VBQUwsb0JBQTJCRCxpRUFBM0IsV0FIUjtVQUlFLEdBQUcsRUFBQztRQUpOO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FERixlQU9FO1VBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBUEY7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBREYsZUE2QkU7UUFBSyxTQUFTLEVBQUVELHlFQUFoQjtRQUFzQyxHQUFHLEVBQUVPLFFBQTNDO1FBQUEsd0JBQ0U7VUFBSyxTQUFTLEVBQUVQLGlGQUFoQjtVQUE4QyxLQUFLLEVBQUU7WUFBQ1csR0FBRyxFQUFIQTtVQUFELENBQXJEO1VBQTRELEdBQUcsRUFBRUg7UUFBakU7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQURGLEVBRUdWLHVEQUFBLENBQWEsVUFBQzRCLElBQUQsRUFBT0MsQ0FBUDtVQUFBLG9CQUNaLDhEQUFDLHVEQUFEO1lBRUUsSUFBSSxFQUFFRCxJQUZSO1lBR0UsS0FBSyxFQUFFQyxDQUhUO1lBSUUsYUFBYSxFQUFFdkIsYUFKakI7WUFLRSxnQkFBZ0IsRUFBRUM7VUFMcEIsR0FDT3NCLENBRFA7WUFBQTtZQUFBO1lBQUE7VUFBQSxTQURZO1FBQUEsQ0FBYixDQUZIO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQTdCRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FiRjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FERjtBQTBERCxDQTlHTTs7R0FBTXhCO1VBRVVQOzs7S0FGVk8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYWJvdXQtdXMvaW5kZXgudHN4P2IzNzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURldmljZSB9IGZyb20gXCJzcmMvaG9va3MvdXNlRGV2aWNlXCI7XHJcbmltcG9ydCB7IEFib3V0VXNDYXJkIH0gZnJvbSBcIi4vYWJvdXQtdXMtY2FyZFwiO1xyXG5pbXBvcnQgeyBBQk9VVF9VUywgTkFWIH0gZnJvbSBcInNyYy9jb25zdGFudHNcIjtcclxuXHJcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XHJcbmltcG9ydCB7IE1vdXNld2hlZWwsIFBhZ2luYXRpb24gfSBmcm9tIFwic3dpcGVyXCI7XHJcbmltcG9ydCBcInN3aXBlci9jc3NcIjtcclxuaW1wb3J0IFwic3dpcGVyL2Nzcy9wYWdpbmF0aW9uXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwiLi9hc3NldHMvSGFuZHNoYWtlLnBuZ1wiO1xyXG5pbXBvcnQgSW1hZ2VNb2IgZnJvbSBcIi4vYXNzZXRzL0hhbmRzaGFrZU1vYi5wbmdcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBYm91dFVzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFttYWluSXRlbUluZGV4LCBzZXRNYWluSXRlbUluZGV4XSA9IHVzZVN0YXRlKC0xKTtcclxuICBjb25zdCB7IGlzTW9iaWxlIH0gPSB1c2VEZXZpY2UoKTtcclxuICBjb25zdCBibG9ja1JlZiA9IHVzZVJlZjxhbnkgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBjaXJjbGVSZWYgPSB1c2VSZWY8YW55IHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW3ByZXZTY3JvbGxZLCBzZXRQcmV2U2Nyb2xsWV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdG9wLCBzZXRUb3BdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgLy8gICAgIGlmKGJsb2NrUmVmLmN1cnJlbnQpIHtcclxuICAvLyAgICAgICBjb25zdCBwb3NpdGlvbiA9IGJsb2NrUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgLy8gICAgICAgaWYocG9zaXRpb24ueSA+IDQ1MCkge1xyXG4gIC8vICAgICAgICAgc2V0TWFpbkl0ZW1JbmRleCgtMSk7XHJcbiAgLy8gICAgICAgfVxyXG5cclxuICAvLyAgICAgICBpZihwb3NpdGlvbi55IDwgLTc1MCkge1xyXG4gIC8vICAgICAgICAgc2V0TWFpbkl0ZW1JbmRleCgtMSk7XHJcbiAgLy8gICAgICAgICBzZXRUb3AocG9zaXRpb24uaGVpZ2h0KTtcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH07XHJcblxyXG4gIC8vICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcblxyXG4gIC8vICAgcmV0dXJuICgpID0+IHtcclxuICAvLyAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcbiAgLy8gICB9O1xyXG4gIC8vIH0sIFtwcmV2U2Nyb2xsWSwgdG9wXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzd2l0Y2gobWFpbkl0ZW1JbmRleCkge1xyXG4gICAgICBjYXNlIDA6XHJcbiAgICAgICAgc2V0VG9wKDE0Mik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICBzZXRUb3AoNDQ3KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAyOlxyXG4gICAgICAgIHNldFRvcCg3NTIpXHJcbiAgICB9XHJcbiAgICBpZihtYWluSXRlbUluZGV4ID09PSAwKSB7XHJcbiAgICAgIHNldFRvcCgxNDIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2UgaWYobWFpbkl0ZW1JbmRleCA9PT0gMSkge1xyXG4gICAgICBzZXRUb3AoNDQ3KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIGlmKG1haW5JdGVtSW5kZXggPT09IDIpIHtcclxuICAgICAgc2V0VG9wKDc1Mik7XHJcbiAgICB9XHJcbiAgfSwgW21haW5JdGVtSW5kZXhdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGFydGljbGVcclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWJvdXRVc31cclxuICAgICAgaWQ9e2lzTW9iaWxlID8gXCJcIiA6IE5BVlsxXS5saW5rLnJlcGxhY2UoXCIjXCIsIFwiXCIpfVxyXG4gICAgPlxyXG4gICAgICB7aXNNb2JpbGUgJiYgKFxyXG4gICAgICAgIDxzcGFuXHJcbiAgICAgICAgICBpZD17TkFWWzFdLmxpbmsucmVwbGFjZShcIiNcIiwgXCJcIil9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hbmNob3J9XHJcbiAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgKX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbGVtZW50c19fY2lyY2xlU2hhZG93fT48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbGVtZW50c19fY2lyY2xlU2hhZG93Qm90dG9tfT48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbGVtZW50c19fY2lyY2xlU2hhZG93Qm90dG9tMn0+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWJvdXRVc19fY29udGFpbmVyfT5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5hYm91dFVzX19oZWFkfT5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxyXG4gICAgICAgICAgICBzcmM9e0ltYWdlLnNyY31cclxuICAgICAgICAgICAgc3JjU2V0PXtgJHtJbWFnZU1vYi5zcmN9IDYwMHcsICR7SW1hZ2Uuc3JjfSAxMDAwd2B9XHJcbiAgICAgICAgICAgIGFsdD1cIlJvYm90IGFuZCBodW1hbiBoYW5kc2hha2VcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxoMT5BYm91dCBVczwvaDE+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIHsvKiA8U3dpcGVyXHJcbiAgICAgICAgICBkaXJlY3Rpb249e1widmVydGljYWxcIn1cclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc9ezF9XHJcbiAgICAgICAgICBzcGFjZUJldHdlZW49ezB9XHJcbiAgICAgICAgICBtb3VzZXdoZWVsPXt0cnVlfVxyXG4gICAgICAgICAgbW9kdWxlcz17W01vdXNld2hlZWxdfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWJvdXRVc19fbGlzdH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7QUJPVVRfVVMubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgIDxBYm91dFVzQ2FyZFxyXG4gICAgICAgICAgICAgICAgY2FyZD17aXRlbX1cclxuICAgICAgICAgICAgICAgIGluZGV4PXtpfVxyXG4gICAgICAgICAgICAgICAgbWFpbkl0ZW1JbmRleD17bWFpbkl0ZW1JbmRleH1cclxuICAgICAgICAgICAgICAgIHNldE1haW5JdGVtSW5kZXg9e3NldE1haW5JdGVtSW5kZXh9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU3dpcGVyPiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFib3V0VXNfX2xpc3R9IHJlZj17YmxvY2tSZWZ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hYm91dFVzX19saXN0X19jaXJjbGV9IHN0eWxlPXt7dG9wfX0gcmVmPXtjaXJjbGVSZWZ9PjwvZGl2PlxyXG4gICAgICAgICAge0FCT1VUX1VTLm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8QWJvdXRVc0NhcmRcclxuICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgY2FyZD17aXRlbX1cclxuICAgICAgICAgICAgICBpbmRleD17aX1cclxuICAgICAgICAgICAgICBtYWluSXRlbUluZGV4PXttYWluSXRlbUluZGV4fVxyXG4gICAgICAgICAgICAgIHNldE1haW5JdGVtSW5kZXg9e3NldE1haW5JdGVtSW5kZXh9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2FydGljbGU+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlRGV2aWNlIiwiQWJvdXRVc0NhcmQiLCJBQk9VVF9VUyIsIk5BViIsInN0eWxlcyIsIkltYWdlIiwiSW1hZ2VNb2IiLCJBYm91dFVzIiwibWFpbkl0ZW1JbmRleCIsInNldE1haW5JdGVtSW5kZXgiLCJpc01vYmlsZSIsImJsb2NrUmVmIiwiY2lyY2xlUmVmIiwicHJldlNjcm9sbFkiLCJzZXRQcmV2U2Nyb2xsWSIsInRvcCIsInNldFRvcCIsImFib3V0VXMiLCJsaW5rIiwicmVwbGFjZSIsImFuY2hvciIsImVsZW1lbnRzX19jaXJjbGVTaGFkb3ciLCJlbGVtZW50c19fY2lyY2xlU2hhZG93Qm90dG9tIiwiZWxlbWVudHNfX2NpcmNsZVNoYWRvd0JvdHRvbTIiLCJhYm91dFVzX19jb250YWluZXIiLCJhYm91dFVzX19oZWFkIiwic3JjIiwiYWJvdXRVc19fbGlzdCIsImFib3V0VXNfX2xpc3RfX2NpcmNsZSIsIm1hcCIsIml0ZW0iLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/about-us/index.tsx\n"));

/***/ })

});