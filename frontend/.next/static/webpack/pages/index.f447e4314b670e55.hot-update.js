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

/***/ "./src/components/header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/header/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/nav */ \"./src/components/nav/index.tsx\");\n/* harmony import */ var src_constants_socials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/constants/socials */ \"./src/constants/socials/index.tsx\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.module.scss */ \"./src/components/header/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var src_assets_images_Logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/images/Logo.png */ \"./src/assets/images/Logo.png\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"D:\\\\IXNOME\\\\evo-landing\\\\frontend\\\\src\\\\components\\\\header\\\\index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Header = function Header() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      menuOpen = _useState[0],\n      setMenuOpen = _useState[1];\n\n  var handleScrollTop = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {\n    window.scrollTo(0, 0);\n    setMenuOpen(false);\n    document.body.style.overflow = \"auto\";\n    document.body.style.position = \"static\";\n    document.getElementsByTagName(\"html\")[0].style.overflow = \"visible\";\n  }, []);\n\n  var handleMobileMenu = function handleMobileMenu() {\n    setMenuOpen(!menuOpen);\n\n    if (!menuOpen) {\n      document.body.style.overflow = \"hidden\";\n      document.body.style.position = \"relative\";\n      document.getElementsByTagName(\"html\")[0].style.overflow = \"hidden\";\n    } else {\n      document.body.style.overflow = \"auto\";\n      document.body.style.position = \"static\";\n      document.getElementsByTagName(\"html\")[0].style.overflow = \"visible\";\n    }\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    return function () {\n      document.body.style.overflow = \"auto\";\n      document.body.style.position = \"static\";\n      document.getElementsByTagName(\"html\")[0].style.overflow = \"visible\";\n    };\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"header\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header), (0,D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header_open), menuOpen)),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header__container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header__logo),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"img\", {\n          src: src_assets_images_Logo_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"].src,\n          alt: \"EVO Logo\",\n          onClick: handleScrollTop\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().burger),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"input\", {\n          onClick: handleMobileMenu,\n          type: \"checkbox\",\n          checked: menuOpen\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"span\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_nav__WEBPACK_IMPORTED_MODULE_3__.Nav, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().mobMenu), (0,D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().mobMenu_open), menuOpen)),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().mobMenu__nav),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_nav__WEBPACK_IMPORTED_MODULE_3__.Nav, {\n          isMobMenu: true,\n          closeMenu: handleMobileMenu\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().mobMenu__socials),\n        children: src_constants_socials__WEBPACK_IMPORTED_MODULE_4__.SOCIALS.map(function (item) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"a\", {\n            href: item.link,\n            title: item.title,\n            children: item.Icon\n          }, item.title, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Header, \"F5dPtiTNd5BBeC2TT6atIrgeqAs=\");\n\n_c = Header;\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBO1VBQUE7VUFBQTtRQUFBLFNBRkY7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBSkYsZUFRRSw4REFBQyxnREFBRDtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBUkY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBTEYsZUFlRTtNQUNFLFNBQVMsRUFBRU4saURBQVUsQ0FBQ0csbUVBQUQsNEpBQ2xCQSx3RUFEa0IsRUFDSUcsUUFESixFQUR2QjtNQUFBLHdCQUtFO1FBQUssU0FBUyxFQUFFSCx3RUFBaEI7UUFBQSx1QkFDRSw4REFBQyxnREFBRDtVQUFLLFNBQVMsTUFBZDtVQUFlLFNBQVMsRUFBRWM7UUFBMUI7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQURGO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FMRixlQVFFO1FBQUssU0FBUyxFQUFFZCw0RUFBaEI7UUFBQSxVQUNLRCw4REFBQSxDQUFZLFVBQUMyQixJQUFEO1VBQUEsb0JBQ1g7WUFBb0IsSUFBSSxFQUFFQSxJQUFJLENBQUNDLElBQS9CO1lBQXFDLEtBQUssRUFBRUQsSUFBSSxDQUFDRSxLQUFqRDtZQUFBLFVBQ0dGLElBQUksQ0FBQ0c7VUFEUixHQUFRSCxJQUFJLENBQUNFLEtBQWI7WUFBQTtZQUFBO1lBQUE7VUFBQSxTQURXO1FBQUEsQ0FBWjtNQURMO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FSRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FmRjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FERjtBQWtDRCxDQW5FTTs7R0FBTTFCOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaW5kZXgudHN4PzEyNDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHsgTmF2IH0gZnJvbSBcIkBjb21wb25lbnRzL25hdlwiO1xyXG5pbXBvcnQgeyBTT0NJQUxTIH0gZnJvbSBcInNyYy9jb25zdGFudHMvc29jaWFsc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCJzcmMvYXNzZXRzL2ltYWdlcy9Mb2dvLnBuZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBbbWVudU9wZW4sIHNldE1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2Nyb2xsVG9wID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgc2V0TWVudU9wZW4oZmFsc2UpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb3NpdGlvbiA9IFwic3RhdGljXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImh0bWxcIilbMF0uc3R5bGUub3ZlcmZsb3cgPSBcInZpc2libGVcIjtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vYmlsZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBzZXRNZW51T3BlbighbWVudU9wZW4pO1xyXG5cclxuICAgIGlmICghbWVudU9wZW4pIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaHRtbFwiKVswXS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9zaXRpb24gPSBcInN0YXRpY1wiO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImh0bWxcIilbMF0uc3R5bGUub3ZlcmZsb3cgPSBcInZpc2libGVcIjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvc2l0aW9uID0gXCJzdGF0aWNcIjtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJodG1sXCIpWzBdLnN0eWxlLm92ZXJmbG93ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXJcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5oZWFkZXIsIHtcclxuICAgICAgICBbc3R5bGVzLmhlYWRlcl9vcGVuXTogbWVudU9wZW4sXHJcbiAgICAgIH0pfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9fY29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9fbG9nb30+XHJcbiAgICAgICAgICA8aW1nIHNyYz17TG9nby5zcmN9IGFsdD1cIkVWTyBMb2dvXCIgb25DbGljaz17aGFuZGxlU2Nyb2xsVG9wfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnVyZ2VyfT5cclxuICAgICAgICAgIDxpbnB1dCBvbkNsaWNrPXtoYW5kbGVNb2JpbGVNZW51fSB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXttZW51T3Blbn0gLz5cclxuICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TmF2IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5tb2JNZW51LCB7XHJcbiAgICAgICAgICBbc3R5bGVzLm1vYk1lbnVfb3Blbl06IG1lbnVPcGVuLFxyXG4gICAgICAgIH0pfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2JNZW51X19uYXZ9PlxyXG4gICAgICAgICAgPE5hdiBpc01vYk1lbnUgY2xvc2VNZW51PXtoYW5kbGVNb2JpbGVNZW51fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9iTWVudV9fc29jaWFsc30+XHJcbiAgICAgICAgICAgIHtTT0NJQUxTLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxhIGtleT17aXRlbS50aXRsZX0gaHJlZj17aXRlbS5saW5rfSB0aXRsZT17aXRlbS50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS5JY29ufVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjbGFzc05hbWVzIiwiTmF2IiwiU09DSUFMUyIsInN0eWxlcyIsIkxvZ28iLCJIZWFkZXIiLCJtZW51T3BlbiIsInNldE1lbnVPcGVuIiwiaGFuZGxlU2Nyb2xsVG9wIiwid2luZG93Iiwic2Nyb2xsVG8iLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwicG9zaXRpb24iLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImhhbmRsZU1vYmlsZU1lbnUiLCJoZWFkZXIiLCJoZWFkZXJfb3BlbiIsImhlYWRlcl9fY29udGFpbmVyIiwiaGVhZGVyX19sb2dvIiwic3JjIiwiYnVyZ2VyIiwibW9iTWVudSIsIm1vYk1lbnVfb3BlbiIsIm1vYk1lbnVfX25hdiIsIm1vYk1lbnVfX3NvY2lhbHMiLCJtYXAiLCJpdGVtIiwibGluayIsInRpdGxlIiwiSWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/header/index.tsx\n"));

/***/ })

});