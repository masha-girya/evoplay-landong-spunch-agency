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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AboutUs\": function() { return /* binding */ AboutUs; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/hooks/useDevice */ \"./src/hooks/useDevice.ts\");\n/* harmony import */ var _about_us_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-us-card */ \"./src/components/about-us/about-us-card/index.tsx\");\n/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants */ \"./src/constants/index.ts\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.module.scss */ \"./src/components/about-us/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _assets_Handshake_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/Handshake.png */ \"./src/components/about-us/assets/Handshake.png\");\n/* harmony import */ var _assets_HandshakeMob_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/HandshakeMob.png */ \"./src/components/about-us/assets/HandshakeMob.png\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);\nvar _jsxFileName = \"D:\\\\IXNOME\\\\evo-landing\\\\frontend\\\\src\\\\components\\\\about-us\\\\index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nvar AboutUs = function AboutUs() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1),\n      mainItemIndex = _useState[0],\n      setMainItemIndex = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      circleTop = _useState2[0],\n      setCircleTop = _useState2[1];\n\n  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n\n  var _useDevice = (0,src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_1__.useDevice)(),\n      isMobile = _useDevice.isMobile;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var handleScroll = function handleScroll() {\n      if (ref.current) {\n        var pos = ref.current.getBoundingClientRect();\n        console.log(pos); // if(pos.top < 50) {\n        //   setCircleTop(prev => prev + 1)\n        // }\n      }\n    };\n\n    window.addEventListener(\"scroll\", handleScroll);\n    return function () {\n      window.removeEventListener(\"scroll\", handleScroll);\n    };\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"article\", {\n    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().aboutUs),\n    id: isMobile ? \"\" : src_constants__WEBPACK_IMPORTED_MODULE_3__.NAV[1].link.replace(\"#\", \"\"),\n    children: [isMobile && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"span\", {\n      id: src_constants__WEBPACK_IMPORTED_MODULE_3__.NAV[1].link.replace(\"#\", \"\"),\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().anchor)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().elements__circleShadow)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().elements__circleShadowBottom)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().elements__circleShadowBottom2)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().aboutUs__container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"section\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().aboutUs__head),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"img\", {\n          loading: \"lazy\",\n          src: _assets_Handshake_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"].src,\n          srcSet: \"\".concat(_assets_HandshakeMob_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"].src, \" 600w, \").concat(_assets_Handshake_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"].src, \" 1000w\"),\n          alt: \"Robot and human handshake\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"h1\", {\n          children: \"About Us\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().aboutUs__list),\n        ref: ref,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n          className: classnames__WEBPACK_IMPORTED_MODULE_8___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().aboutUs__list__circle), {})\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 11\n        }, _this), src_constants__WEBPACK_IMPORTED_MODULE_3__.ABOUT_US.map(function (item, i) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_about_us_card__WEBPACK_IMPORTED_MODULE_2__.AboutUsCard, {\n            card: item,\n            index: i,\n            mainItemIndex: mainItemIndex,\n            setMainItemIndex: setMainItemIndex\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 13\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AboutUs, \"kcd3RTPy47seG/31NttmovNUc9s=\", false, function () {\n  return [src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_1__.useDevice];\n});\n\n_c = AboutUs;\n\nvar _c;\n\n$RefreshReg$(_c, \"AboutUs\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RFA7WUFBQTtZQUFBO1lBQUE7VUFBQSxTQURZO1FBQUEsQ0FBYixDQUZIO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQTdCRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FiRjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FERjtBQTBERCxDQW5GTTs7R0FBTTlCO1VBSVVSOzs7S0FKVlEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYWJvdXQtdXMvaW5kZXgudHN4P2IzNzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURldmljZSB9IGZyb20gXCJzcmMvaG9va3MvdXNlRGV2aWNlXCI7XHJcbmltcG9ydCB7IEFib3V0VXNDYXJkIH0gZnJvbSBcIi4vYWJvdXQtdXMtY2FyZFwiO1xyXG5pbXBvcnQgeyBBQk9VVF9VUywgTkFWIH0gZnJvbSBcInNyYy9jb25zdGFudHNcIjtcclxuXHJcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XHJcbmltcG9ydCB7IE1vdXNld2hlZWwsIFBhZ2luYXRpb24gfSBmcm9tIFwic3dpcGVyXCI7XHJcbmltcG9ydCBcInN3aXBlci9jc3NcIjtcclxuaW1wb3J0IFwic3dpcGVyL2Nzcy9wYWdpbmF0aW9uXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwiLi9hc3NldHMvSGFuZHNoYWtlLnBuZ1wiO1xyXG5pbXBvcnQgSW1hZ2VNb2IgZnJvbSBcIi4vYXNzZXRzL0hhbmRzaGFrZU1vYi5wbmdcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBYm91dFVzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFttYWluSXRlbUluZGV4LCBzZXRNYWluSXRlbUluZGV4XSA9IHVzZVN0YXRlKC0xKTtcclxuICBjb25zdCBbY2lyY2xlVG9wLCBzZXRDaXJjbGVUb3BdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmPGFueSB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IHsgaXNNb2JpbGUgfSA9IHVzZURldmljZSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICBpZiAocmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBjb25zdCBwb3MgPSByZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwb3MpXHJcblxyXG4gICAgICAgIC8vIGlmKHBvcy50b3AgPCA1MCkge1xyXG4gICAgICAgIC8vICAgc2V0Q2lyY2xlVG9wKHByZXYgPT4gcHJldiArIDEpXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGFydGljbGVcclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWJvdXRVc31cclxuICAgICAgaWQ9e2lzTW9iaWxlID8gXCJcIiA6IE5BVlsxXS5saW5rLnJlcGxhY2UoXCIjXCIsIFwiXCIpfVxyXG4gICAgPlxyXG4gICAgICB7aXNNb2JpbGUgJiYgKFxyXG4gICAgICAgIDxzcGFuXHJcbiAgICAgICAgICBpZD17TkFWWzFdLmxpbmsucmVwbGFjZShcIiNcIiwgXCJcIil9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hbmNob3J9XHJcbiAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgKX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbGVtZW50c19fY2lyY2xlU2hhZG93fT48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbGVtZW50c19fY2lyY2xlU2hhZG93Qm90dG9tfT48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbGVtZW50c19fY2lyY2xlU2hhZG93Qm90dG9tMn0+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWJvdXRVc19fY29udGFpbmVyfT5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5hYm91dFVzX19oZWFkfT5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxyXG4gICAgICAgICAgICBzcmM9e0ltYWdlLnNyY31cclxuICAgICAgICAgICAgc3JjU2V0PXtgJHtJbWFnZU1vYi5zcmN9IDYwMHcsICR7SW1hZ2Uuc3JjfSAxMDAwd2B9XHJcbiAgICAgICAgICAgIGFsdD1cIlJvYm90IGFuZCBodW1hbiBoYW5kc2hha2VcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxoMT5BYm91dCBVczwvaDE+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIHsvKiA8U3dpcGVyXHJcbiAgICAgICAgICBkaXJlY3Rpb249e1widmVydGljYWxcIn1cclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc9ezF9XHJcbiAgICAgICAgICBzcGFjZUJldHdlZW49ezB9XHJcbiAgICAgICAgICBtb3VzZXdoZWVsPXt0cnVlfVxyXG4gICAgICAgICAgbW9kdWxlcz17W01vdXNld2hlZWxdfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWJvdXRVc19fbGlzdH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7QUJPVVRfVVMubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgIDxBYm91dFVzQ2FyZFxyXG4gICAgICAgICAgICAgICAgY2FyZD17aXRlbX1cclxuICAgICAgICAgICAgICAgIGluZGV4PXtpfVxyXG4gICAgICAgICAgICAgICAgbWFpbkl0ZW1JbmRleD17bWFpbkl0ZW1JbmRleH1cclxuICAgICAgICAgICAgICAgIHNldE1haW5JdGVtSW5kZXg9e3NldE1haW5JdGVtSW5kZXh9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU3dpcGVyPiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFib3V0VXNfX2xpc3R9IHJlZj17cmVmfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5hYm91dFVzX19saXN0X19jaXJjbGUsIHt9KX0+PC9kaXY+XHJcbiAgICAgICAgICB7QUJPVVRfVVMubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxBYm91dFVzQ2FyZFxyXG4gICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICBjYXJkPXtpdGVtfVxyXG4gICAgICAgICAgICAgIGluZGV4PXtpfVxyXG4gICAgICAgICAgICAgIG1haW5JdGVtSW5kZXg9e21haW5JdGVtSW5kZXh9XHJcbiAgICAgICAgICAgICAgc2V0TWFpbkl0ZW1JbmRleD17c2V0TWFpbkl0ZW1JbmRleH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYXJ0aWNsZT5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VEZXZpY2UiLCJBYm91dFVzQ2FyZCIsIkFCT1VUX1VTIiwiTkFWIiwic3R5bGVzIiwiSW1hZ2UiLCJJbWFnZU1vYiIsImNsYXNzTmFtZXMiLCJBYm91dFVzIiwibWFpbkl0ZW1JbmRleCIsInNldE1haW5JdGVtSW5kZXgiLCJjaXJjbGVUb3AiLCJzZXRDaXJjbGVUb3AiLCJyZWYiLCJpc01vYmlsZSIsImhhbmRsZVNjcm9sbCIsImN1cnJlbnQiLCJwb3MiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhYm91dFVzIiwibGluayIsInJlcGxhY2UiLCJhbmNob3IiLCJlbGVtZW50c19fY2lyY2xlU2hhZG93IiwiZWxlbWVudHNfX2NpcmNsZVNoYWRvd0JvdHRvbSIsImVsZW1lbnRzX19jaXJjbGVTaGFkb3dCb3R0b20yIiwiYWJvdXRVc19fY29udGFpbmVyIiwiYWJvdXRVc19faGVhZCIsInNyYyIsImFib3V0VXNfX2xpc3QiLCJhYm91dFVzX19saXN0X19jaXJjbGUiLCJtYXAiLCJpdGVtIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/about-us/index.tsx\n"));

/***/ })

});