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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AboutUs\": function() { return /* binding */ AboutUs; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/hooks/useDevice */ \"./src/hooks/useDevice.ts\");\n/* harmony import */ var _about_us_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-us-card */ \"./src/components/about-us/about-us-card/index.tsx\");\n/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants */ \"./src/constants/index.ts\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.module.scss */ \"./src/components/about-us/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _assets_Handshake_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/Handshake.png */ \"./src/components/about-us/assets/Handshake.png\");\n/* harmony import */ var _assets_HandshakeMob_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/HandshakeMob.png */ \"./src/components/about-us/assets/HandshakeMob.png\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\nvar _jsxFileName = \"D:\\\\IXNOME\\\\evo-landing\\\\frontend\\\\src\\\\components\\\\about-us\\\\index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar AboutUs = function AboutUs() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1),\n      mainItemIndex = _useState[0],\n      setMainItemIndex = _useState[1];\n\n  var _useDevice = (0,src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_1__.useDevice)(),\n      isMobile = _useDevice.isMobile;\n\n  var blockRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var circleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      top = _useState2[0],\n      setTop = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var handleScroll = function handleScroll() {\n      console.log(mainItemIndex);\n\n      switch (mainItemIndex) {\n        case 0:\n          setTop(142);\n          break;\n\n        case 1:\n          setTop(447);\n          break;\n\n        case 2:\n          setTop(752);\n          break;\n\n        default:\n          setTop(function (prev) {\n            return prev;\n          });\n      }\n\n      if (blockRef.current) {\n        var position = blockRef.current.getBoundingClientRect();\n\n        if (position.y > 450) {\n          setMainItemIndex(-1);\n        }\n\n        if (position.y < -750) {\n          setMainItemIndex(-1);\n          setTop(position.height);\n        }\n      }\n    };\n\n    window.addEventListener('scroll', handleScroll);\n    return function () {\n      window.removeEventListener('scroll', handleScroll);\n    };\n  }, [mainItemIndex, blockRef, circleRef]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    switch (mainItemIndex) {\n      case 0:\n        setTop(142);\n        break;\n\n      case 1:\n        setTop(447);\n        break;\n\n      case 2:\n        setTop(752);\n        break;\n\n      default:\n        setTop(function (prev) {\n          return prev;\n        });\n    }\n  }, [mainItemIndex]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"article\", {\n    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().aboutUs),\n    id: isMobile ? \"\" : src_constants__WEBPACK_IMPORTED_MODULE_3__.NAV[1].link.replace(\"#\", \"\"),\n    children: [isMobile && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"span\", {\n      id: src_constants__WEBPACK_IMPORTED_MODULE_3__.NAV[1].link.replace(\"#\", \"\"),\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().anchor)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().elements__circleShadow)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().elements__circleShadowBottom)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().elements__circleShadowBottom2)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().aboutUs__container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"section\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().aboutUs__head),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"img\", {\n          loading: \"lazy\",\n          src: _assets_Handshake_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"].src,\n          srcSet: \"\".concat(_assets_HandshakeMob_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"].src, \" 600w, \").concat(_assets_Handshake_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"].src, \" 1000w\"),\n          alt: \"Robot and human handshake\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"h1\", {\n          children: \"About Us\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().aboutUs__list),\n        ref: blockRef,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n          className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().aboutUs__list__circle),\n          style: {\n            top: top\n          },\n          ref: circleRef\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 11\n        }, _this), src_constants__WEBPACK_IMPORTED_MODULE_3__.ABOUT_US.map(function (item, i) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_about_us_card__WEBPACK_IMPORTED_MODULE_2__.AboutUsCard, {\n            card: item,\n            index: i,\n            mainItemIndex: mainItemIndex,\n            setMainItemIndex: setMainItemIndex\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 103,\n            columnNumber: 13\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 77,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AboutUs, \"xF8uGGIKqWzMc09EKSVc0W8pETU=\", false, function () {\n  return [src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_1__.useDevice];\n});\n\n_c = AboutUs;\n\nvar _c;\n\n$RefreshReg$(_c, \"AboutUs\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hYm91dC11cy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBR08sSUFBTVUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtFQUFBOztFQUMzQixnQkFBMENSLCtDQUFRLENBQUMsQ0FBQyxDQUFGLENBQWxEO0VBQUEsSUFBT1MsYUFBUDtFQUFBLElBQXNCQyxnQkFBdEI7O0VBQ0EsaUJBQXFCVCw4REFBUyxFQUE5QjtFQUFBLElBQVFVLFFBQVIsY0FBUUEsUUFBUjs7RUFDQSxJQUFNQyxRQUFRLEdBQUdiLDZDQUFNLENBQWEsSUFBYixDQUF2QjtFQUNBLElBQU1jLFNBQVMsR0FBR2QsNkNBQU0sQ0FBYSxJQUFiLENBQXhCOztFQUNBLGlCQUFzQkMsK0NBQVEsQ0FBQyxDQUFELENBQTlCO0VBQUEsSUFBT2MsR0FBUDtFQUFBLElBQVlDLE1BQVo7O0VBRUFqQixnREFBUyxDQUFDLFlBQU07SUFDZCxJQUFNa0IsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtNQUN6QkMsT0FBTyxDQUFDQyxHQUFSLENBQVlULGFBQVo7O01BQ0EsUUFBT0EsYUFBUDtRQUNFLEtBQUssQ0FBTDtVQUNFTSxNQUFNLENBQUMsR0FBRCxDQUFOO1VBQ0E7O1FBQ0YsS0FBSyxDQUFMO1VBQ0VBLE1BQU0sQ0FBQyxHQUFELENBQU47VUFDQTs7UUFDRixLQUFLLENBQUw7VUFDRUEsTUFBTSxDQUFDLEdBQUQsQ0FBTjtVQUNBOztRQUNGO1VBQ0VBLE1BQU0sQ0FBQyxVQUFBSSxJQUFJO1lBQUEsT0FBSUEsSUFBSjtVQUFBLENBQUwsQ0FBTjtNQVhKOztNQWNBLElBQUdQLFFBQVEsQ0FBQ1EsT0FBWixFQUFxQjtRQUNuQixJQUFNQyxRQUFRLEdBQUdULFFBQVEsQ0FBQ1EsT0FBVCxDQUFpQkUscUJBQWpCLEVBQWpCOztRQUNBLElBQUdELFFB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QTtNQUFBO01BQUE7SUFBQSxTQWJGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURGO0FBdUNELENBbkdNOztHQUFNbEM7VUFFVVA7OztLQUZWTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hYm91dC11cy9pbmRleC50c3g/YjM3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGV2aWNlIH0gZnJvbSBcInNyYy9ob29rcy91c2VEZXZpY2VcIjtcclxuaW1wb3J0IHsgQWJvdXRVc0NhcmQgfSBmcm9tIFwiLi9hYm91dC11cy1jYXJkXCI7XHJcbmltcG9ydCB7IEFCT1VUX1VTLCBOQVYgfSBmcm9tIFwic3JjL2NvbnN0YW50c1wiO1xyXG5cclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcclxuaW1wb3J0IHsgTW91c2V3aGVlbCwgUGFnaW5hdGlvbiB9IGZyb20gXCJzd2lwZXJcIjtcclxuaW1wb3J0IFwic3dpcGVyL2Nzc1wiO1xyXG5pbXBvcnQgXCJzd2lwZXIvY3NzL3BhZ2luYXRpb25cIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCIuL2Fzc2V0cy9IYW5kc2hha2UucG5nXCI7XHJcbmltcG9ydCBJbWFnZU1vYiBmcm9tIFwiLi9hc3NldHMvSGFuZHNoYWtlTW9iLnBuZ1wiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFib3V0VXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW21haW5JdGVtSW5kZXgsIHNldE1haW5JdGVtSW5kZXhdID0gdXNlU3RhdGUoLTEpO1xyXG4gIGNvbnN0IHsgaXNNb2JpbGUgfSA9IHVzZURldmljZSgpO1xyXG4gIGNvbnN0IGJsb2NrUmVmID0gdXNlUmVmPGFueSB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IGNpcmNsZVJlZiA9IHVzZVJlZjxhbnkgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbdG9wLCBzZXRUb3BdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKG1haW5JdGVtSW5kZXgpXHJcbiAgICAgIHN3aXRjaChtYWluSXRlbUluZGV4KSB7XHJcbiAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgc2V0VG9wKDE0Mik7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICBzZXRUb3AoNDQ3KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgIHNldFRvcCg3NTIpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHNldFRvcChwcmV2ID0+IHByZXYpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihibG9ja1JlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBibG9ja1JlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGlmKHBvc2l0aW9uLnkgPiA0NTApIHtcclxuICAgICAgICAgIHNldE1haW5JdGVtSW5kZXgoLTEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYocG9zaXRpb24ueSA8IC03NTApIHtcclxuICAgICAgICAgIHNldE1haW5JdGVtSW5kZXgoLTEpO1xyXG4gICAgICAgICAgc2V0VG9wKHBvc2l0aW9uLmhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgfTtcclxuICB9LCBbbWFpbkl0ZW1JbmRleCwgYmxvY2tSZWYsIGNpcmNsZVJlZl0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc3dpdGNoKG1haW5JdGVtSW5kZXgpIHtcclxuICAgICAgY2FzZSAwOlxyXG4gICAgICAgIHNldFRvcCgxNDIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgc2V0VG9wKDQ0Nyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMjpcclxuICAgICAgICBzZXRUb3AoNzUyKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBzZXRUb3AocHJldiA9PiBwcmV2KTtcclxuICAgIH1cclxuICB9LCBbbWFpbkl0ZW1JbmRleF0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YXJ0aWNsZVxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5hYm91dFVzfVxyXG4gICAgICBpZD17aXNNb2JpbGUgPyBcIlwiIDogTkFWWzFdLmxpbmsucmVwbGFjZShcIiNcIiwgXCJcIil9XHJcbiAgICA+XHJcbiAgICAgIHtpc01vYmlsZSAmJiAoXHJcbiAgICAgICAgPHNwYW5cclxuICAgICAgICAgIGlkPXtOQVZbMV0ubGluay5yZXBsYWNlKFwiI1wiLCBcIlwiKX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFuY2hvcn1cclxuICAgICAgICA+PC9zcGFuPlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVsZW1lbnRzX19jaXJjbGVTaGFkb3d9PjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVsZW1lbnRzX19jaXJjbGVTaGFkb3dCb3R0b219PjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVsZW1lbnRzX19jaXJjbGVTaGFkb3dCb3R0b20yfT48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hYm91dFVzX19jb250YWluZXJ9PlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmFib3V0VXNfX2hlYWR9PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXHJcbiAgICAgICAgICAgIHNyYz17SW1hZ2Uuc3JjfVxyXG4gICAgICAgICAgICBzcmNTZXQ9e2Ake0ltYWdlTW9iLnNyY30gNjAwdywgJHtJbWFnZS5zcmN9IDEwMDB3YH1cclxuICAgICAgICAgICAgYWx0PVwiUm9ib3QgYW5kIGh1bWFuIGhhbmRzaGFrZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGgxPkFib3V0IFVzPC9oMT5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hYm91dFVzX19saXN0fSByZWY9e2Jsb2NrUmVmfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWJvdXRVc19fbGlzdF9fY2lyY2xlfSBzdHlsZT17e3RvcH19IHJlZj17Y2lyY2xlUmVmfT48L2Rpdj5cclxuICAgICAgICAgIHtBQk9VVF9VUy5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgPEFib3V0VXNDYXJkXHJcbiAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgIGNhcmQ9e2l0ZW19XHJcbiAgICAgICAgICAgICAgaW5kZXg9e2l9XHJcbiAgICAgICAgICAgICAgbWFpbkl0ZW1JbmRleD17bWFpbkl0ZW1JbmRleH1cclxuICAgICAgICAgICAgICBzZXRNYWluSXRlbUluZGV4PXtzZXRNYWluSXRlbUluZGV4fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZURldmljZSIsIkFib3V0VXNDYXJkIiwiQUJPVVRfVVMiLCJOQVYiLCJzdHlsZXMiLCJJbWFnZSIsIkltYWdlTW9iIiwiQWJvdXRVcyIsIm1haW5JdGVtSW5kZXgiLCJzZXRNYWluSXRlbUluZGV4IiwiaXNNb2JpbGUiLCJibG9ja1JlZiIsImNpcmNsZVJlZiIsInRvcCIsInNldFRvcCIsImhhbmRsZVNjcm9sbCIsImNvbnNvbGUiLCJsb2ciLCJwcmV2IiwiY3VycmVudCIsInBvc2l0aW9uIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieSIsImhlaWdodCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWJvdXRVcyIsImxpbmsiLCJyZXBsYWNlIiwiYW5jaG9yIiwiZWxlbWVudHNfX2NpcmNsZVNoYWRvdyIsImVsZW1lbnRzX19jaXJjbGVTaGFkb3dCb3R0b20iLCJlbGVtZW50c19fY2lyY2xlU2hhZG93Qm90dG9tMiIsImFib3V0VXNfX2NvbnRhaW5lciIsImFib3V0VXNfX2hlYWQiLCJzcmMiLCJhYm91dFVzX19saXN0IiwiYWJvdXRVc19fbGlzdF9fY2lyY2xlIiwibWFwIiwiaXRlbSIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/about-us/index.tsx\n"));

/***/ })

});