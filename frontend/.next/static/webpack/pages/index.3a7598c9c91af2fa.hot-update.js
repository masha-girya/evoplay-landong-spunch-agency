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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/nav */ \"./src/components/nav/index.tsx\");\n/* harmony import */ var src_constants_socials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/constants/socials */ \"./src/constants/socials/index.tsx\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.module.scss */ \"./src/components/header/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var src_assets_images_Logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/images/Logo.png */ \"./src/assets/images/Logo.png\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"D:\\\\IXNOME\\\\evo-landing\\\\frontend\\\\src\\\\components\\\\header\\\\index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Header = function Header() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      menuOpen = _useState[0],\n      setMenuOpen = _useState[1];\n\n  var handleScrollTop = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {\n    window.scrollTo(0, 0);\n  }, []);\n\n  var handleMobileMenu = function handleMobileMenu() {\n    setMenuOpen(!menuOpen);\n\n    if (!menuOpen) {\n      document.body.style.overflow = \"hidden\";\n      document.body.style.position = \"relative\";\n      document.getElementsByTagName(\"html\")[0].style.overflow = \"hidden\";\n    } else {\n      document.body.style.overflow = \"auto\";\n      document.body.style.position = \"static\";\n      document.getElementsByTagName(\"html\")[0].style.overflow = \"visible\";\n    }\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    return function () {\n      document.body.style.overflow = \"auto\";\n      document.body.style.position = \"static\";\n      document.getElementsByTagName(\"html\")[0].style.overflow = \"visible\";\n    };\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"header\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header), (0,D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header_open), menuOpen)),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header__container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"img\", {\n          src: src_assets_images_Logo_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"].src,\n          alt: \"EVO Logo\",\n          onClick: handleScrollTop\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().burger),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"input\", {\n          onClick: handleMobileMenu,\n          type: \"checkbox\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"span\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_nav__WEBPACK_IMPORTED_MODULE_3__.Nav, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().mobMenu), (0,D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().mobMenu_open), menuOpen)),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().mobMenu__nav),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_nav__WEBPACK_IMPORTED_MODULE_3__.Nav, {\n          isMobMenu: true,\n          closeMenu: handleMobileMenu\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().mobMenu__socials),\n        children: src_constants_socials__WEBPACK_IMPORTED_MODULE_4__.SOCIALS.map(function (item) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"a\", {\n            href: item.link,\n            title: item.title,\n            children: item.Icon\n          }, item.title, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Header, \"F5dPtiTNd5BBeC2TT6atIrgeqAs=\");\n\n_c = Header;\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsRUFBRVE7UUFBMUI7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQURGO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FMRixlQVFFO1FBQUssU0FBUyxFQUFFUiw0RUFBaEI7UUFBQSxVQUNLRCw4REFBQSxDQUFZLFVBQUMwQixJQUFEO1VBQUEsb0JBQ1g7WUFBb0IsSUFBSSxFQUFFQSxJQUFJLENBQUNDLElBQS9CO1lBQXFDLEtBQUssRUFBRUQsSUFBSSxDQUFDRSxLQUFqRDtZQUFBLFVBQ0dGLElBQUksQ0FBQ0c7VUFEUixHQUFRSCxJQUFJLENBQUNFLEtBQWI7WUFBQTtZQUFBO1lBQUE7VUFBQSxTQURXO1FBQUEsQ0FBWjtNQURMO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FSRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FmRjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FERjtBQWtDRCxDQS9ETTs7R0FBTXpCOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaW5kZXgudHN4PzEyNDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHsgTmF2IH0gZnJvbSBcIkBjb21wb25lbnRzL25hdlwiO1xyXG5pbXBvcnQgeyBTT0NJQUxTIH0gZnJvbSBcInNyYy9jb25zdGFudHMvc29jaWFsc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCJzcmMvYXNzZXRzL2ltYWdlcy9Mb2dvLnBuZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBbbWVudU9wZW4sIHNldE1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2Nyb2xsVG9wID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW9iaWxlTWVudSA9ICgpID0+IHtcclxuICAgIHNldE1lbnVPcGVuKCFtZW51T3Blbik7XHJcblxyXG4gICAgaWYgKCFtZW51T3Blbikge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJodG1sXCIpWzBdLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb3NpdGlvbiA9IFwic3RhdGljXCI7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaHRtbFwiKVswXS5zdHlsZS5vdmVyZmxvdyA9IFwidmlzaWJsZVwiO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9zaXRpb24gPSBcInN0YXRpY1wiO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImh0bWxcIilbMF0uc3R5bGUub3ZlcmZsb3cgPSBcInZpc2libGVcIjtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlclxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmhlYWRlciwge1xyXG4gICAgICAgIFtzdHlsZXMuaGVhZGVyX29wZW5dOiBtZW51T3BlbixcclxuICAgICAgfSl9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX19jb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW1nIHNyYz17TG9nby5zcmN9IGFsdD1cIkVWTyBMb2dvXCIgb25DbGljaz17aGFuZGxlU2Nyb2xsVG9wfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnVyZ2VyfT5cclxuICAgICAgICAgIDxpbnB1dCBvbkNsaWNrPXtoYW5kbGVNb2JpbGVNZW51fSB0eXBlPVwiY2hlY2tib3hcIiAvPlxyXG4gICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxOYXYgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLm1vYk1lbnUsIHtcclxuICAgICAgICAgIFtzdHlsZXMubW9iTWVudV9vcGVuXTogbWVudU9wZW4sXHJcbiAgICAgICAgfSl9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vYk1lbnVfX25hdn0+XHJcbiAgICAgICAgICA8TmF2IGlzTW9iTWVudSBjbG9zZU1lbnU9e2hhbmRsZU1vYmlsZU1lbnV9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2JNZW51X19zb2NpYWxzfT5cclxuICAgICAgICAgICAge1NPQ0lBTFMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGEga2V5PXtpdGVtLnRpdGxlfSBocmVmPXtpdGVtLmxpbmt9IHRpdGxlPXtpdGVtLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgIHtpdGVtLkljb259XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNsYXNzTmFtZXMiLCJOYXYiLCJTT0NJQUxTIiwic3R5bGVzIiwiTG9nbyIsIkhlYWRlciIsIm1lbnVPcGVuIiwic2V0TWVudU9wZW4iLCJoYW5kbGVTY3JvbGxUb3AiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsImhhbmRsZU1vYmlsZU1lbnUiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwicG9zaXRpb24iLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImhlYWRlciIsImhlYWRlcl9vcGVuIiwiaGVhZGVyX19jb250YWluZXIiLCJzcmMiLCJidXJnZXIiLCJtb2JNZW51IiwibW9iTWVudV9vcGVuIiwibW9iTWVudV9fbmF2IiwibW9iTWVudV9fc29jaWFscyIsIm1hcCIsIml0ZW0iLCJsaW5rIiwidGl0bGUiLCJJY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/header/index.tsx\n"));

/***/ })

});