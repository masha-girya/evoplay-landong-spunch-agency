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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AboutUs\": function() { return /* binding */ AboutUs; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/hooks/useDevice */ \"./src/hooks/useDevice.ts\");\n/* harmony import */ var _about_us_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-us-card */ \"./src/components/about-us/about-us-card/index.tsx\");\n/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants */ \"./src/constants/index.ts\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.module.scss */ \"./src/components/about-us/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _assets_Handshake_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/Handshake.png */ \"./src/components/about-us/assets/Handshake.png\");\n/* harmony import */ var _assets_HandshakeMob_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/HandshakeMob.png */ \"./src/components/about-us/assets/HandshakeMob.png\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\nvar _jsxFileName = \"D:\\\\IXNOME\\\\evo-landing\\\\frontend\\\\src\\\\components\\\\about-us\\\\index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar AboutUs = function AboutUs() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1),\n      mainItemIndex = _useState[0],\n      setMainItemIndex = _useState[1];\n\n  var _useDevice = (0,src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_1__.useDevice)(),\n      isMobile = _useDevice.isMobile;\n\n  var blockRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var circleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      prevScrollY = _useState2[0],\n      setPrevScrollY = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      top = _useState3[0],\n      setTop = _useState3[1]; // useEffect(() => {\n  //   const handleScroll = () => {\n  //     if(blockRef.current) {\n  //       const position = blockRef.current.getBoundingClientRect();\n  //       if(position.y > 450) {\n  //         setMainItemIndex(-1);\n  //       }\n  //       if(position.y < -750) {\n  //         setMainItemIndex(-1);\n  //         setTop(position.height);\n  //       }\n  //     }\n  //   };\n  //   window.addEventListener('scroll', handleScroll);\n  //   return () => {\n  //     window.removeEventListener('scroll', handleScroll);\n  //   };\n  // }, [prevScrollY, top]);\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    switch (mainItemIndex) {\n      case 0:\n        setTop(142);\n        break;\n\n      case 1:\n        setTop(447);\n        break;\n\n      case 2:\n        setTop(752);\n        break;\n\n      default:\n    }\n\n    if (mainItemIndex === 0) {\n      setTop(142);\n      return;\n    } else if (mainItemIndex === 1) {\n      setTop(447);\n      return;\n    } else if (mainItemIndex === 2) {\n      setTop(752);\n    }\n  }, [mainItemIndex]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"article\", {\n    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().aboutUs),\n    id: isMobile ? \"\" : src_constants__WEBPACK_IMPORTED_MODULE_3__.NAV[1].link.replace(\"#\", \"\"),\n    children: [isMobile && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"span\", {\n      id: src_constants__WEBPACK_IMPORTED_MODULE_3__.NAV[1].link.replace(\"#\", \"\"),\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().anchor)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().elements__circleShadow)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().elements__circleShadowBottom)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().elements__circleShadowBottom2)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().aboutUs__container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"section\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().aboutUs__head),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"img\", {\n          loading: \"lazy\",\n          src: _assets_Handshake_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"].src,\n          srcSet: \"\".concat(_assets_HandshakeMob_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"].src, \" 600w, \").concat(_assets_Handshake_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"].src, \" 1000w\"),\n          alt: \"Robot and human handshake\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"h1\", {\n          children: \"About Us\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().aboutUs__list),\n        ref: blockRef,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n          className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().aboutUs__list__circle),\n          style: {\n            top: top\n          },\n          ref: circleRef\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 11\n        }, _this), src_constants__WEBPACK_IMPORTED_MODULE_3__.ABOUT_US.map(function (item, i) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_about_us_card__WEBPACK_IMPORTED_MODULE_2__.AboutUsCard, {\n            card: item,\n            index: i,\n            mainItemIndex: mainItemIndex,\n            setMainItemIndex: setMainItemIndex\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 118,\n            columnNumber: 13\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 73,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AboutUs, \"3tlQX5JMtmhsRiC6vP5xFiXlL5c=\", false, function () {\n  return [src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_1__.useDevice];\n});\n\n_c = AboutUs;\n\nvar _c;\n\n$RefreshReg$(_c, \"AboutUs\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hYm91dC11cy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBR08sSUFBTVUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtFQUFBOztFQUMzQixnQkFBMENSLCtDQUFRLENBQUMsQ0FBQyxDQUFGLENBQWxEO0VBQUEsSUFBT1MsYUFBUDtFQUFBLElBQXNCQyxnQkFBdEI7O0VBQ0EsaUJBQXFCVCw4REFBUyxFQUE5QjtFQUFBLElBQVFVLFFBQVIsY0FBUUEsUUFBUjs7RUFDQSxJQUFNQyxRQUFRLEdBQUdiLDZDQUFNLENBQWEsSUFBYixDQUF2QjtFQUNBLElBQU1jLFNBQVMsR0FBR2QsNkNBQU0sQ0FBYSxJQUFiLENBQXhCOztFQUNBLGlCQUFzQ0MsK0NBQVEsQ0FBQyxDQUFELENBQTlDO0VBQUEsSUFBT2MsV0FBUDtFQUFBLElBQW9CQyxjQUFwQjs7RUFDQSxpQkFBc0JmLCtDQUFRLENBQUMsQ0FBRCxDQUE5QjtFQUFBLElBQU9nQixHQUFQO0VBQUEsSUFBWUMsTUFBWixpQkFOMkIsQ0FRM0I7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFFQTtFQUVBO0VBQ0E7RUFDQTtFQUNBOzs7RUFFQW5CLGdEQUFTLENBQUMsWUFBTTtJQUNkLFFBQU9XLGFBQVA7TUFDRSxLQUFLLENBQUw7UUFDRVEsTUFBTSxDQUFDLEdBQUQsQ0FBTjtRQUNBOztNQUNGLEtBQUssQ0FBTDtRQUNFQSxNQUFNLENBQUMsR0FBRCxDQUFOO1FBQ0E7O01BQ0YsS0FBSyxDQUFMO1FBQ0VBLE1BQU0sQ0FBQyxHQUFELENBQU47UUFDQTs7TUFDQTtJQVZKOztJQWNBLElBQUdSLGFBQWEsS0FBSyxDQUFyQixFQUF3QjtNQUN0QlEsTUFBTSxDQUFDLEdBQUQsQ0FBTjtNQUNBO0lBQ0QsQ0FIRCxNQUdPLElBQUdSLGFBQWEsS0FBSyxDQUFyQixFQUF3QjtNQUM3QlEsTUFBTSxDQUFDLEdBQUQsQ0FBTjtNQUNBO0lBQ0QsQ0FITSxNQUdBLElBQUdSLGFBQWEsS0FBSyxDQUFyQixFQUF3QjtNQUM3QlEsTUFBTSxDQUFDLEdBQUQsQ0FBTjtJQUNEO0VBQ0YsQ0F4QlEsRUF3Qk4sQ0FBQ1IsYUFBRCxDQXhCTSxDQUFUO0VBMEJBLG9CQUNFO0lBQ0UsU0FBUyxFQUFFSixtRUFEYjtJQUVFLEVBQUUsRUFBRU0sUUFBUSxHQUFHLEVBQUgsR0FBUVAsOERBQUEsQ0FBb0IsR0FBcEIsRUFBeUIsRUFBekIsQ0FGdEI7SUFBQSxXQUlHTyxRQUFRLGlCQUNQO01BQ0UsRUFBRSxFQUFFUCw4REFBQSxDQUFvQixHQUFwQixFQUF5QixFQUF6QixDQUROO01BRUUsU0FBUyxFQUFFQyxrRUFBYWdCO0lBRjFCO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FMSixlQVVFO01BQUssU0FBUyxFQUFFaEIsa0ZBQTZCaUI7SUFBN0M7TUFBQTtNQUFBO01BQUE7SUFBQSxTQVZGLGVBV0U7TUFBSyxTQUFTLEVBQUVqQix3RkFBbUNrQjtJQUFuRDtNQUFBO01BQUE7TUFBQTtJQUFBLFNBWEYsZUFZRTtNQUFLLFNBQVMsRUFBRWxCLHlGQUFvQ21CO0lBQXBEO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FaRixlQWFFO01BQUssU0FBUyxFQUFFbkIsOEVBQWhCO01BQUEsd0JBQ0U7UUFBUyxTQUFTLEVBQUVBLHlFQUFwQjtRQUFBLHdCQUNFO1VBQ0UsT0FBTyxFQUFDLE1BRFY7VUFFRSxHQUFHLEVBQUVDLGlFQUZQO1VBR0UsTUFBTSxZQUFLQyxvRUFBTCxvQkFBMkJELGlFQUEzQixXQUhSO1VBSUUsR0FBRyxFQUFDO1FBSk47VUFBQTtVQUFBO1VBQUE7UUFBQSxTQURGLGVBT0U7VUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FQRjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FERixlQTZCRTtRQUFLLFNBQVMsRUFBRUQseUVBQWhCO1FBQXNDLEdBQUcsRUFBRU8sUUFBM0M7UUFBQSx3QkFDRTtVQUFLLFNBQVMsRUFBRVAsaUZBQWhCO1VBQThDLEtBQUssRUFBRTtZQUFDVyxHQUFHLEVBQUhBO1VBQUQsQ0FBckQ7VUFBNEQsR0FBRyxFQUFFSDtRQUFqRTtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBREYsRUFFR1YsdURBQUEsQ0FBYSxVQUFDNEIsSUFBRCxFQUFPQyxDQUFQO1VBQUEsb0JBQ1osOERBQUMsdURBQUQ7WUFFRSxJQUFJLEVBQUVELElBRlI7WUFHRSxLQUFLLEVBQUVDLENBSFQ7WUFJRSxhQUFhLEVBQUV2QixhQUpqQjtZQUtFLGdCQUFnQixFQUFFQztVQUxwQixHQUNPc0IsQ0FEUDtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBRFk7UUFBQSxDQUFiLENBRkg7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBN0JGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxTQWJGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURGO0FBMERELENBbEhNOztHQUFNeEI7VUFFVVA7OztLQUZWTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hYm91dC11cy9pbmRleC50c3g/YjM3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGV2aWNlIH0gZnJvbSBcInNyYy9ob29rcy91c2VEZXZpY2VcIjtcclxuaW1wb3J0IHsgQWJvdXRVc0NhcmQgfSBmcm9tIFwiLi9hYm91dC11cy1jYXJkXCI7XHJcbmltcG9ydCB7IEFCT1VUX1VTLCBOQVYgfSBmcm9tIFwic3JjL2NvbnN0YW50c1wiO1xyXG5cclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcclxuaW1wb3J0IHsgTW91c2V3aGVlbCwgUGFnaW5hdGlvbiB9IGZyb20gXCJzd2lwZXJcIjtcclxuaW1wb3J0IFwic3dpcGVyL2Nzc1wiO1xyXG5pbXBvcnQgXCJzd2lwZXIvY3NzL3BhZ2luYXRpb25cIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCIuL2Fzc2V0cy9IYW5kc2hha2UucG5nXCI7XHJcbmltcG9ydCBJbWFnZU1vYiBmcm9tIFwiLi9hc3NldHMvSGFuZHNoYWtlTW9iLnBuZ1wiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFib3V0VXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW21haW5JdGVtSW5kZXgsIHNldE1haW5JdGVtSW5kZXhdID0gdXNlU3RhdGUoLTEpO1xyXG4gIGNvbnN0IHsgaXNNb2JpbGUgfSA9IHVzZURldmljZSgpO1xyXG4gIGNvbnN0IGJsb2NrUmVmID0gdXNlUmVmPGFueSB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IGNpcmNsZVJlZiA9IHVzZVJlZjxhbnkgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbcHJldlNjcm9sbFksIHNldFByZXZTY3JvbGxZXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt0b3AsIHNldFRvcF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAvLyAgICAgaWYoYmxvY2tSZWYuY3VycmVudCkge1xyXG4gIC8vICAgICAgIGNvbnN0IHBvc2l0aW9uID0gYmxvY2tSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAvLyAgICAgICBpZihwb3NpdGlvbi55ID4gNDUwKSB7XHJcbiAgLy8gICAgICAgICBzZXRNYWluSXRlbUluZGV4KC0xKTtcclxuICAvLyAgICAgICB9XHJcblxyXG4gIC8vICAgICAgIGlmKHBvc2l0aW9uLnkgPCAtNzUwKSB7XHJcbiAgLy8gICAgICAgICBzZXRNYWluSXRlbUluZGV4KC0xKTtcclxuICAvLyAgICAgICAgIHNldFRvcChwb3NpdGlvbi5oZWlnaHQpO1xyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgfVxyXG4gIC8vICAgfTtcclxuXHJcbiAgLy8gICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuXHJcbiAgLy8gICByZXR1cm4gKCkgPT4ge1xyXG4gIC8vICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICAvLyAgIH07XHJcbiAgLy8gfSwgW3ByZXZTY3JvbGxZLCB0b3BdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHN3aXRjaChtYWluSXRlbUluZGV4KSB7XHJcbiAgICAgIGNhc2UgMDpcclxuICAgICAgICBzZXRUb3AoMTQyKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHNldFRvcCg0NDcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDI6XHJcbiAgICAgICAgc2V0VG9wKDc1Mik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgXHJcblxyXG4gICAgfVxyXG4gICAgaWYobWFpbkl0ZW1JbmRleCA9PT0gMCkge1xyXG4gICAgICBzZXRUb3AoMTQyKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIGlmKG1haW5JdGVtSW5kZXggPT09IDEpIHtcclxuICAgICAgc2V0VG9wKDQ0Nyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSBpZihtYWluSXRlbUluZGV4ID09PSAyKSB7XHJcbiAgICAgIHNldFRvcCg3NTIpO1xyXG4gICAgfVxyXG4gIH0sIFttYWluSXRlbUluZGV4XSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxhcnRpY2xlXHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFib3V0VXN9XHJcbiAgICAgIGlkPXtpc01vYmlsZSA/IFwiXCIgOiBOQVZbMV0ubGluay5yZXBsYWNlKFwiI1wiLCBcIlwiKX1cclxuICAgID5cclxuICAgICAge2lzTW9iaWxlICYmIChcclxuICAgICAgICA8c3BhblxyXG4gICAgICAgICAgaWQ9e05BVlsxXS5saW5rLnJlcGxhY2UoXCIjXCIsIFwiXCIpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYW5jaG9yfVxyXG4gICAgICAgID48L3NwYW4+XHJcbiAgICAgICl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWxlbWVudHNfX2NpcmNsZVNoYWRvd30+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWxlbWVudHNfX2NpcmNsZVNoYWRvd0JvdHRvbX0+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWxlbWVudHNfX2NpcmNsZVNoYWRvd0JvdHRvbTJ9PjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFib3V0VXNfX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuYWJvdXRVc19faGVhZH0+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcclxuICAgICAgICAgICAgc3JjPXtJbWFnZS5zcmN9XHJcbiAgICAgICAgICAgIHNyY1NldD17YCR7SW1hZ2VNb2Iuc3JjfSA2MDB3LCAke0ltYWdlLnNyY30gMTAwMHdgfVxyXG4gICAgICAgICAgICBhbHQ9XCJSb2JvdCBhbmQgaHVtYW4gaGFuZHNoYWtlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aDE+QWJvdXQgVXM8L2gxPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICB7LyogPFN3aXBlclxyXG4gICAgICAgICAgZGlyZWN0aW9uPXtcInZlcnRpY2FsXCJ9XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3PXsxfVxyXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuPXswfVxyXG4gICAgICAgICAgbW91c2V3aGVlbD17dHJ1ZX1cclxuICAgICAgICAgIG1vZHVsZXM9e1tNb3VzZXdoZWVsXX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFib3V0VXNfX2xpc3R9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge0FCT1VUX1VTLm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtpfT5cclxuICAgICAgICAgICAgICA8QWJvdXRVc0NhcmRcclxuICAgICAgICAgICAgICAgIGNhcmQ9e2l0ZW19XHJcbiAgICAgICAgICAgICAgICBpbmRleD17aX1cclxuICAgICAgICAgICAgICAgIG1haW5JdGVtSW5kZXg9e21haW5JdGVtSW5kZXh9XHJcbiAgICAgICAgICAgICAgICBzZXRNYWluSXRlbUluZGV4PXtzZXRNYWluSXRlbUluZGV4fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1N3aXBlcj4gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hYm91dFVzX19saXN0fSByZWY9e2Jsb2NrUmVmfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWJvdXRVc19fbGlzdF9fY2lyY2xlfSBzdHlsZT17e3RvcH19IHJlZj17Y2lyY2xlUmVmfT48L2Rpdj5cclxuICAgICAgICAgIHtBQk9VVF9VUy5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgPEFib3V0VXNDYXJkXHJcbiAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgIGNhcmQ9e2l0ZW19XHJcbiAgICAgICAgICAgICAgaW5kZXg9e2l9XHJcbiAgICAgICAgICAgICAgbWFpbkl0ZW1JbmRleD17bWFpbkl0ZW1JbmRleH1cclxuICAgICAgICAgICAgICBzZXRNYWluSXRlbUluZGV4PXtzZXRNYWluSXRlbUluZGV4fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZURldmljZSIsIkFib3V0VXNDYXJkIiwiQUJPVVRfVVMiLCJOQVYiLCJzdHlsZXMiLCJJbWFnZSIsIkltYWdlTW9iIiwiQWJvdXRVcyIsIm1haW5JdGVtSW5kZXgiLCJzZXRNYWluSXRlbUluZGV4IiwiaXNNb2JpbGUiLCJibG9ja1JlZiIsImNpcmNsZVJlZiIsInByZXZTY3JvbGxZIiwic2V0UHJldlNjcm9sbFkiLCJ0b3AiLCJzZXRUb3AiLCJhYm91dFVzIiwibGluayIsInJlcGxhY2UiLCJhbmNob3IiLCJlbGVtZW50c19fY2lyY2xlU2hhZG93IiwiZWxlbWVudHNfX2NpcmNsZVNoYWRvd0JvdHRvbSIsImVsZW1lbnRzX19jaXJjbGVTaGFkb3dCb3R0b20yIiwiYWJvdXRVc19fY29udGFpbmVyIiwiYWJvdXRVc19faGVhZCIsInNyYyIsImFib3V0VXNfX2xpc3QiLCJhYm91dFVzX19saXN0X19jaXJjbGUiLCJtYXAiLCJpdGVtIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/about-us/index.tsx\n"));

/***/ })

});