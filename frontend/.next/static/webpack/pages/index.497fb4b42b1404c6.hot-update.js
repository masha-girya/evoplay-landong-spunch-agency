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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AboutUs\": function() { return /* binding */ AboutUs; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/hooks/useDevice */ \"./src/hooks/useDevice.ts\");\n/* harmony import */ var _about_us_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-us-card */ \"./src/components/about-us/about-us-card/index.tsx\");\n/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants */ \"./src/constants/index.ts\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.module.scss */ \"./src/components/about-us/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _assets_Handshake_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/Handshake.png */ \"./src/components/about-us/assets/Handshake.png\");\n/* harmony import */ var _assets_HandshakeMob_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/HandshakeMob.png */ \"./src/components/about-us/assets/HandshakeMob.png\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\nvar _jsxFileName = \"D:\\\\IXNOME\\\\evo-landing\\\\frontend\\\\src\\\\components\\\\about-us\\\\index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar AboutUs = function AboutUs() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1),\n      mainItemIndex = _useState[0],\n      setMainItemIndex = _useState[1];\n\n  var _useDevice = (0,src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_1__.useDevice)(),\n      isMobile = _useDevice.isMobile;\n\n  var blockRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var circleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      top = _useState2[0],\n      setTop = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var handleScroll = function handleScroll() {\n      console.log(mainItemIndex);\n\n      switch (mainItemIndex) {\n        case 0:\n          setTop(142);\n          break;\n\n        case 1:\n          setTop(447);\n          break;\n\n        case 2:\n          setTop(752);\n          break;\n\n        default:\n          setTop(function (prev) {\n            return prev;\n          });\n      } // if(blockRef.current) {\n      //   const position = blockRef.current.getBoundingClientRect();\n      //   if(position.y > 450) {\n      //     setMainItemIndex(-1);\n      //   }\n      //   if(position.y < -750) {\n      //     setMainItemIndex(-1);\n      //     setTop(position.height);\n      //   }\n      // }\n\n    };\n\n    window.addEventListener('scroll', handleScroll);\n    return function () {\n      window.removeEventListener('scroll', handleScroll);\n    };\n  }, [mainItemIndex]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"article\", {\n    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().aboutUs),\n    id: isMobile ? \"\" : src_constants__WEBPACK_IMPORTED_MODULE_3__.NAV[1].link.replace(\"#\", \"\"),\n    children: [isMobile && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"span\", {\n      id: src_constants__WEBPACK_IMPORTED_MODULE_3__.NAV[1].link.replace(\"#\", \"\"),\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().anchor)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().elements__circleShadow)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().elements__circleShadowBottom)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().elements__circleShadowBottom2)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().aboutUs__container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"section\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().aboutUs__head),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"img\", {\n          loading: \"lazy\",\n          src: _assets_Handshake_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"].src,\n          srcSet: \"\".concat(_assets_HandshakeMob_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"].src, \" 600w, \").concat(_assets_Handshake_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"].src, \" 1000w\"),\n          alt: \"Robot and human handshake\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"h1\", {\n          children: \"About Us\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().aboutUs__list),\n        ref: blockRef,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n          className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().aboutUs__list__circle),\n          style: {\n            top: top\n          },\n          ref: circleRef\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 11\n        }, _this), src_constants__WEBPACK_IMPORTED_MODULE_3__.ABOUT_US.map(function (item, i) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_about_us_card__WEBPACK_IMPORTED_MODULE_2__.AboutUsCard, {\n            card: item,\n            index: i,\n            mainItemIndex: mainItemIndex,\n            setMainItemIndex: setMainItemIndex\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 13\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 61,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AboutUs, \"gMNin8ydoSCmPvIZgxc6pf9xPfI=\", false, function () {\n  return [src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_1__.useDevice];\n});\n\n_c = AboutUs;\n\nvar _c;\n\n$RefreshReg$(_c, \"AboutUs\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWhCO1VBQThDLEtBQUssRUFBRTtZQUFDUyxHQUFHLEVBQUhBO1VBQUQsQ0FBckQ7VUFBNEQsR0FBRyxFQUFFRDtRQUFqRTtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBREYsRUFFR1YsdURBQUEsQ0FBYSxVQUFDaUMsSUFBRCxFQUFPQyxDQUFQO1VBQUEsb0JBQ1osOERBQUMsdURBQUQ7WUFFRSxJQUFJLEVBQUVELElBRlI7WUFHRSxLQUFLLEVBQUVDLENBSFQ7WUFJRSxhQUFhLEVBQUU1QixhQUpqQjtZQUtFLGdCQUFnQixFQUFFQztVQUxwQixHQUNPMkIsQ0FEUDtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBRFk7UUFBQSxDQUFiLENBRkg7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBVkY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBYkY7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREY7QUF1Q0QsQ0FuRk07O0dBQU03QjtVQUVVUDs7O0tBRlZPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Fib3V0LXVzL2luZGV4LnRzeD9iMzc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEZXZpY2UgfSBmcm9tIFwic3JjL2hvb2tzL3VzZURldmljZVwiO1xyXG5pbXBvcnQgeyBBYm91dFVzQ2FyZCB9IGZyb20gXCIuL2Fib3V0LXVzLWNhcmRcIjtcclxuaW1wb3J0IHsgQUJPVVRfVVMsIE5BViB9IGZyb20gXCJzcmMvY29uc3RhbnRzXCI7XHJcblxyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xyXG5pbXBvcnQgeyBNb3VzZXdoZWVsLCBQYWdpbmF0aW9uIH0gZnJvbSBcInN3aXBlclwiO1xyXG5pbXBvcnQgXCJzd2lwZXIvY3NzXCI7XHJcbmltcG9ydCBcInN3aXBlci9jc3MvcGFnaW5hdGlvblwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIi4vYXNzZXRzL0hhbmRzaGFrZS5wbmdcIjtcclxuaW1wb3J0IEltYWdlTW9iIGZyb20gXCIuL2Fzc2V0cy9IYW5kc2hha2VNb2IucG5nXCI7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQWJvdXRVcyA9ICgpID0+IHtcclxuICBjb25zdCBbbWFpbkl0ZW1JbmRleCwgc2V0TWFpbkl0ZW1JbmRleF0gPSB1c2VTdGF0ZSgtMSk7XHJcbiAgY29uc3QgeyBpc01vYmlsZSB9ID0gdXNlRGV2aWNlKCk7XHJcbiAgY29uc3QgYmxvY2tSZWYgPSB1c2VSZWY8YW55IHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgY2lyY2xlUmVmID0gdXNlUmVmPGFueSB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFt0b3AsIHNldFRvcF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cobWFpbkl0ZW1JbmRleClcclxuICAgICAgc3dpdGNoKG1haW5JdGVtSW5kZXgpIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICBzZXRUb3AoMTQyKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgIHNldFRvcCg0NDcpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgc2V0VG9wKDc1Mik7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgc2V0VG9wKHByZXYgPT4gcHJldik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGlmKGJsb2NrUmVmLmN1cnJlbnQpIHtcclxuICAgICAgLy8gICBjb25zdCBwb3NpdGlvbiA9IGJsb2NrUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIC8vICAgaWYocG9zaXRpb24ueSA+IDQ1MCkge1xyXG4gICAgICAvLyAgICAgc2V0TWFpbkl0ZW1JbmRleCgtMSk7XHJcbiAgICAgIC8vICAgfVxyXG5cclxuICAgICAgLy8gICBpZihwb3NpdGlvbi55IDwgLTc1MCkge1xyXG4gICAgICAvLyAgICAgc2V0TWFpbkl0ZW1JbmRleCgtMSk7XHJcbiAgICAgIC8vICAgICBzZXRUb3AocG9zaXRpb24uaGVpZ2h0KTtcclxuICAgICAgLy8gICB9XHJcbiAgICAgIC8vIH1cclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICB9O1xyXG4gIH0sIFttYWluSXRlbUluZGV4XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YXJ0aWNsZVxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5hYm91dFVzfVxyXG4gICAgICBpZD17aXNNb2JpbGUgPyBcIlwiIDogTkFWWzFdLmxpbmsucmVwbGFjZShcIiNcIiwgXCJcIil9XHJcbiAgICA+XHJcbiAgICAgIHtpc01vYmlsZSAmJiAoXHJcbiAgICAgICAgPHNwYW5cclxuICAgICAgICAgIGlkPXtOQVZbMV0ubGluay5yZXBsYWNlKFwiI1wiLCBcIlwiKX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFuY2hvcn1cclxuICAgICAgICA+PC9zcGFuPlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVsZW1lbnRzX19jaXJjbGVTaGFkb3d9PjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVsZW1lbnRzX19jaXJjbGVTaGFkb3dCb3R0b219PjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVsZW1lbnRzX19jaXJjbGVTaGFkb3dCb3R0b20yfT48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hYm91dFVzX19jb250YWluZXJ9PlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmFib3V0VXNfX2hlYWR9PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXHJcbiAgICAgICAgICAgIHNyYz17SW1hZ2Uuc3JjfVxyXG4gICAgICAgICAgICBzcmNTZXQ9e2Ake0ltYWdlTW9iLnNyY30gNjAwdywgJHtJbWFnZS5zcmN9IDEwMDB3YH1cclxuICAgICAgICAgICAgYWx0PVwiUm9ib3QgYW5kIGh1bWFuIGhhbmRzaGFrZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGgxPkFib3V0IFVzPC9oMT5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hYm91dFVzX19saXN0fSByZWY9e2Jsb2NrUmVmfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWJvdXRVc19fbGlzdF9fY2lyY2xlfSBzdHlsZT17e3RvcH19IHJlZj17Y2lyY2xlUmVmfT48L2Rpdj5cclxuICAgICAgICAgIHtBQk9VVF9VUy5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgPEFib3V0VXNDYXJkXHJcbiAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgIGNhcmQ9e2l0ZW19XHJcbiAgICAgICAgICAgICAgaW5kZXg9e2l9XHJcbiAgICAgICAgICAgICAgbWFpbkl0ZW1JbmRleD17bWFpbkl0ZW1JbmRleH1cclxuICAgICAgICAgICAgICBzZXRNYWluSXRlbUluZGV4PXtzZXRNYWluSXRlbUluZGV4fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZURldmljZSIsIkFib3V0VXNDYXJkIiwiQUJPVVRfVVMiLCJOQVYiLCJzdHlsZXMiLCJJbWFnZSIsIkltYWdlTW9iIiwiQWJvdXRVcyIsIm1haW5JdGVtSW5kZXgiLCJzZXRNYWluSXRlbUluZGV4IiwiaXNNb2JpbGUiLCJibG9ja1JlZiIsImNpcmNsZVJlZiIsInRvcCIsInNldFRvcCIsImhhbmRsZVNjcm9sbCIsImNvbnNvbGUiLCJsb2ciLCJwcmV2Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhYm91dFVzIiwibGluayIsInJlcGxhY2UiLCJhbmNob3IiLCJlbGVtZW50c19fY2lyY2xlU2hhZG93IiwiZWxlbWVudHNfX2NpcmNsZVNoYWRvd0JvdHRvbSIsImVsZW1lbnRzX19jaXJjbGVTaGFkb3dCb3R0b20yIiwiYWJvdXRVc19fY29udGFpbmVyIiwiYWJvdXRVc19faGVhZCIsInNyYyIsImFib3V0VXNfX2xpc3QiLCJhYm91dFVzX19saXN0X19jaXJjbGUiLCJtYXAiLCJpdGVtIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/about-us/index.tsx\n"));

/***/ })

});