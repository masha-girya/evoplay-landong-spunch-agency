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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AboutUs\": function() { return /* binding */ AboutUs; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/hooks/useDevice */ \"./src/hooks/useDevice.ts\");\n/* harmony import */ var _about_us_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-us-card */ \"./src/components/about-us/about-us-card/index.tsx\");\n/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants */ \"./src/constants/index.ts\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.module.scss */ \"./src/components/about-us/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _assets_Handshake_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/Handshake.png */ \"./src/components/about-us/assets/Handshake.png\");\n/* harmony import */ var _assets_HandshakeMob_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/HandshakeMob.png */ \"./src/components/about-us/assets/HandshakeMob.png\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\nvar _jsxFileName = \"D:\\\\IXNOME\\\\evo-landing\\\\frontend\\\\src\\\\components\\\\about-us\\\\index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar AboutUs = function AboutUs() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1),\n      mainItemIndex = _useState[0],\n      setMainItemIndex = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      circleTop = _useState2[0],\n      setCircleTop = _useState2[1];\n\n  var _useDevice = (0,src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_1__.useDevice)(),\n      isMobile = _useDevice.isMobile;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var handleScroll = function handleScroll() {\n      if (ref.current) {\n        if (isElementInViewport(ref.current)) {\n          setMainItemIndex(index);\n        }\n      }\n    };\n\n    window.addEventListener(\"scroll\", handleScroll);\n    return function () {\n      window.removeEventListener(\"scroll\", handleScroll);\n    };\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"article\", {\n    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().aboutUs),\n    id: isMobile ? \"\" : src_constants__WEBPACK_IMPORTED_MODULE_3__.NAV[1].link.replace(\"#\", \"\"),\n    children: [isMobile && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"span\", {\n      id: src_constants__WEBPACK_IMPORTED_MODULE_3__.NAV[1].link.replace(\"#\", \"\"),\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().anchor)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().elements__circleShadow)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().elements__circleShadowBottom)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().elements__circleShadowBottom2)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().aboutUs__container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"section\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().aboutUs__head),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"img\", {\n          loading: \"lazy\",\n          src: _assets_Handshake_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"].src,\n          srcSet: \"\".concat(_assets_HandshakeMob_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"].src, \" 600w, \").concat(_assets_Handshake_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"].src, \" 1000w\"),\n          alt: \"Robot and human handshake\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"h1\", {\n          children: \"About Us\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().aboutUs__list),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n          className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().aboutUs__list__circle),\n          style: {\n            top: circleTop\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 11\n        }, _this), src_constants__WEBPACK_IMPORTED_MODULE_3__.ABOUT_US.map(function (item, i) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_about_us_card__WEBPACK_IMPORTED_MODULE_2__.AboutUsCard, {\n            card: item,\n            index: i,\n            mainItemIndex: mainItemIndex,\n            setMainItemIndex: setMainItemIndex\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 13\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AboutUs, \"XULr/C5WNYtqdUmARgotxCp3UXw=\", false, function () {\n  return [src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_1__.useDevice];\n});\n\n_c = AboutUs;\n\nvar _c;\n\n$RefreshReg$(_c, \"AboutUs\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hYm91dC11cy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRU8sSUFBTVMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtFQUFBOztFQUMzQixnQkFBMENSLCtDQUFRLENBQUMsQ0FBQyxDQUFGLENBQWxEO0VBQUEsSUFBT1MsYUFBUDtFQUFBLElBQXNCQyxnQkFBdEI7O0VBQ0EsaUJBQWtDViwrQ0FBUSxDQUFDLENBQUQsQ0FBMUM7RUFBQSxJQUFPVyxTQUFQO0VBQUEsSUFBa0JDLFlBQWxCOztFQUNBLGlCQUFxQlgsOERBQVMsRUFBOUI7RUFBQSxJQUFRWSxRQUFSLGNBQVFBLFFBQVI7O0VBRUFkLGdEQUFTLENBQUMsWUFBTTtJQUNkLElBQU1lLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07TUFDekIsSUFBSUMsR0FBRyxDQUFDQyxPQUFSLEVBQWlCO1FBQ2YsSUFBSUMsbUJBQW1CLENBQUNGLEdBQUcsQ0FBQ0MsT0FBTCxDQUF2QixFQUFzQztVQUNwQ04sZ0JBQWdCLENBQUNRLEtBQUQsQ0FBaEI7UUFDRDtNQUNGO0lBQ0YsQ0FORDs7SUFRQUMsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ04sWUFBbEM7SUFFQSxPQUFPLFlBQU07TUFDWEssTUFBTSxDQUFDRSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ1AsWUFBckM7SUFDRCxDQUZEO0VBR0QsQ0FkUSxFQWNOLEVBZE0sQ0FBVDtFQWdCQSxvQkFDRTtJQUNFLFNBQVMsRUFBRVQsbUVBRGI7SUFFRSxFQUFFLEVBQUVRLFFBQVEsR0FBRyxFQUFILEdBQVFULDhEQUFBLENBQW9CLEdBQXBCLEVBQXlCLEVBQXpCLENBRnRCO0lBQUEsV0FJR1MsUUFBUSxpQkFDUDtNQUNFLEVBQUUsRUFBRVQsOERBQUEsQ0FBb0IsR0FBcEIsRUFBeUIsRUFBekIsQ0FETjtNQUVFLFNBQVMsRUFBRUMsa0VBQWFvQjtJQUYxQjtNQUFBO01BQUE7TUFBQTtJQUFBLFNBTEosZUFVRTtNQUFLLFNBQVMsRUFBRXBCLGtGQUE2QnFCO0lBQTdDO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FWRixlQVdFO01BQUssU0FBUyxFQUFFckIsd0ZBQW1Dc0I7SUFBbkQ7TUFBQTtNQUFBO01BQUE7SUFBQSxTQVhGLGVBWUU7TUFBSyxTQUFTLEVBQUV0Qix5RkFBb0N1QjtJQUFwRDtNQUFBO01BQUE7TUFBQTtJQUFBLFNBWkYsZUFhRTtNQUFLLFNBQVMsRUFBRXZCLDhFQUFoQjtNQUFBLHdCQUNFO1FBQVMsU0FBUyxFQUFFQSx5RUFBcEI7UUFBQSx3QkFDRTtVQUNFLE9BQU8sRUFBQyxNQURWO1VBRUUsR0FBRyxFQUFFQyxpRUFGUDtVQUdFLE1BQU0sWUFBS0Msb0VBQUwsb0JBQTJCRCxpRUFBM0IsV0FIUjtVQUlFLEdBQUcsRUFBQztRQUpOO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FERixlQU9FO1VBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBUEY7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBREYsZUE2QkU7UUFBSyxTQUFTLEVBQUVELHlFQUFoQjtRQUFBLHdCQUNFO1VBQUssU0FBUyxFQUFFQSxpRkFBaEI7VUFBOEMsS0FBSyxFQUFFO1lBQUM2QixHQUFHLEVBQUV2QjtVQUFOO1FBQXJEO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FERixFQUVHUix1REFBQSxDQUFhLFVBQUNpQyxJQUFELEVBQU9DLENBQVA7VUFBQSxvQkFDWiw4REFBQyx1REFBRDtZQUVFLElBQUksRUFBRUQsSUFGUjtZQUdFLEtBQUssRUFBRUMsQ0FIVDtZQUlFLGFBQWEsRUFBRTVCLGFBSmpCO1lBS0UsZ0JBQWdCLEVBQUVDO1VBTHBCLEdBQ08yQixDQURQO1lBQUE7WUFBQTtZQUFBO1VBQUEsU0FEWTtRQUFBLENBQWIsQ0FGSDtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsU0E3QkY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBYkY7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREY7QUEwREQsQ0EvRU07O0dBQU03QjtVQUdVUDs7O0tBSFZPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Fib3V0LXVzL2luZGV4LnRzeD9iMzc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGV2aWNlIH0gZnJvbSBcInNyYy9ob29rcy91c2VEZXZpY2VcIjtcclxuaW1wb3J0IHsgQWJvdXRVc0NhcmQgfSBmcm9tIFwiLi9hYm91dC11cy1jYXJkXCI7XHJcbmltcG9ydCB7IEFCT1VUX1VTLCBOQVYgfSBmcm9tIFwic3JjL2NvbnN0YW50c1wiO1xyXG5cclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcclxuaW1wb3J0IHsgTW91c2V3aGVlbCwgUGFnaW5hdGlvbiB9IGZyb20gXCJzd2lwZXJcIjtcclxuaW1wb3J0IFwic3dpcGVyL2Nzc1wiO1xyXG5pbXBvcnQgXCJzd2lwZXIvY3NzL3BhZ2luYXRpb25cIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCIuL2Fzc2V0cy9IYW5kc2hha2UucG5nXCI7XHJcbmltcG9ydCBJbWFnZU1vYiBmcm9tIFwiLi9hc3NldHMvSGFuZHNoYWtlTW9iLnBuZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFib3V0VXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW21haW5JdGVtSW5kZXgsIHNldE1haW5JdGVtSW5kZXhdID0gdXNlU3RhdGUoLTEpO1xyXG4gIGNvbnN0IFtjaXJjbGVUb3AsIHNldENpcmNsZVRvcF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCB7IGlzTW9iaWxlIH0gPSB1c2VEZXZpY2UoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgaWYgKHJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgaWYgKGlzRWxlbWVudEluVmlld3BvcnQocmVmLmN1cnJlbnQpKSB7XHJcbiAgICAgICAgICBzZXRNYWluSXRlbUluZGV4KGluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YXJ0aWNsZVxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5hYm91dFVzfVxyXG4gICAgICBpZD17aXNNb2JpbGUgPyBcIlwiIDogTkFWWzFdLmxpbmsucmVwbGFjZShcIiNcIiwgXCJcIil9XHJcbiAgICA+XHJcbiAgICAgIHtpc01vYmlsZSAmJiAoXHJcbiAgICAgICAgPHNwYW5cclxuICAgICAgICAgIGlkPXtOQVZbMV0ubGluay5yZXBsYWNlKFwiI1wiLCBcIlwiKX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFuY2hvcn1cclxuICAgICAgICA+PC9zcGFuPlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVsZW1lbnRzX19jaXJjbGVTaGFkb3d9PjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVsZW1lbnRzX19jaXJjbGVTaGFkb3dCb3R0b219PjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVsZW1lbnRzX19jaXJjbGVTaGFkb3dCb3R0b20yfT48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hYm91dFVzX19jb250YWluZXJ9PlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmFib3V0VXNfX2hlYWR9PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXHJcbiAgICAgICAgICAgIHNyYz17SW1hZ2Uuc3JjfVxyXG4gICAgICAgICAgICBzcmNTZXQ9e2Ake0ltYWdlTW9iLnNyY30gNjAwdywgJHtJbWFnZS5zcmN9IDEwMDB3YH1cclxuICAgICAgICAgICAgYWx0PVwiUm9ib3QgYW5kIGh1bWFuIGhhbmRzaGFrZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGgxPkFib3V0IFVzPC9oMT5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgey8qIDxTd2lwZXJcclxuICAgICAgICAgIGRpcmVjdGlvbj17XCJ2ZXJ0aWNhbFwifVxyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldz17MX1cclxuICAgICAgICAgIHNwYWNlQmV0d2Vlbj17MH1cclxuICAgICAgICAgIG1vdXNld2hlZWw9e3RydWV9XHJcbiAgICAgICAgICBtb2R1bGVzPXtbTW91c2V3aGVlbF19XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hYm91dFVzX19saXN0fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtBQk9VVF9VUy5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgPFN3aXBlclNsaWRlIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgPEFib3V0VXNDYXJkXHJcbiAgICAgICAgICAgICAgICBjYXJkPXtpdGVtfVxyXG4gICAgICAgICAgICAgICAgaW5kZXg9e2l9XHJcbiAgICAgICAgICAgICAgICBtYWluSXRlbUluZGV4PXttYWluSXRlbUluZGV4fVxyXG4gICAgICAgICAgICAgICAgc2V0TWFpbkl0ZW1JbmRleD17c2V0TWFpbkl0ZW1JbmRleH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9Td2lwZXI+ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWJvdXRVc19fbGlzdH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFib3V0VXNfX2xpc3RfX2NpcmNsZX0gc3R5bGU9e3t0b3A6IGNpcmNsZVRvcH19PjwvZGl2PlxyXG4gICAgICAgICAge0FCT1VUX1VTLm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8QWJvdXRVc0NhcmRcclxuICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgY2FyZD17aXRlbX1cclxuICAgICAgICAgICAgICBpbmRleD17aX1cclxuICAgICAgICAgICAgICBtYWluSXRlbUluZGV4PXttYWluSXRlbUluZGV4fVxyXG4gICAgICAgICAgICAgIHNldE1haW5JdGVtSW5kZXg9e3NldE1haW5JdGVtSW5kZXh9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2FydGljbGU+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlRGV2aWNlIiwiQWJvdXRVc0NhcmQiLCJBQk9VVF9VUyIsIk5BViIsInN0eWxlcyIsIkltYWdlIiwiSW1hZ2VNb2IiLCJBYm91dFVzIiwibWFpbkl0ZW1JbmRleCIsInNldE1haW5JdGVtSW5kZXgiLCJjaXJjbGVUb3AiLCJzZXRDaXJjbGVUb3AiLCJpc01vYmlsZSIsImhhbmRsZVNjcm9sbCIsInJlZiIsImN1cnJlbnQiLCJpc0VsZW1lbnRJblZpZXdwb3J0IiwiaW5kZXgiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFib3V0VXMiLCJsaW5rIiwicmVwbGFjZSIsImFuY2hvciIsImVsZW1lbnRzX19jaXJjbGVTaGFkb3ciLCJlbGVtZW50c19fY2lyY2xlU2hhZG93Qm90dG9tIiwiZWxlbWVudHNfX2NpcmNsZVNoYWRvd0JvdHRvbTIiLCJhYm91dFVzX19jb250YWluZXIiLCJhYm91dFVzX19oZWFkIiwic3JjIiwiYWJvdXRVc19fbGlzdCIsImFib3V0VXNfX2xpc3RfX2NpcmNsZSIsInRvcCIsIm1hcCIsIml0ZW0iLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/about-us/index.tsx\n"));

/***/ })

});