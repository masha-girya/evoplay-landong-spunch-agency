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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/nav */ \"./src/components/nav/index.tsx\");\n/* harmony import */ var src_constants_socials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/constants/socials */ \"./src/constants/socials/index.tsx\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.module.scss */ \"./src/components/header/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var src_assets_images_Logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/images/Logo.png */ \"./src/assets/images/Logo.png\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"D:\\\\IXNOME\\\\evo-landing\\\\frontend\\\\src\\\\components\\\\header\\\\index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Header = function Header() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      menuOpen = _useState[0],\n      setMenuOpen = _useState[1];\n\n  var handleScrollTop = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {\n    window.scrollTo(0, 0);\n    setMenuOpen(false);\n  }, []);\n\n  var handleMobileMenu = function handleMobileMenu() {\n    setMenuOpen(!menuOpen);\n\n    if (!menuOpen) {\n      document.body.style.overflow = \"hidden\";\n      document.body.style.position = \"relative\";\n      document.getElementsByTagName(\"html\")[0].style.overflow = \"hidden\";\n    } else {\n      document.body.style.overflow = \"auto\";\n      document.body.style.position = \"static\";\n      document.getElementsByTagName(\"html\")[0].style.overflow = \"visible\";\n    }\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    return function () {\n      document.body.style.overflow = \"auto\";\n      document.body.style.position = \"static\";\n      document.getElementsByTagName(\"html\")[0].style.overflow = \"visible\";\n    };\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"header\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header), (0,D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header_open), menuOpen)),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header__container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header__logo),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"img\", {\n          src: src_assets_images_Logo_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"].src,\n          alt: \"EVO Logo\",\n          onClick: handleScrollTop\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().burger),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"input\", {\n          onClick: handleMobileMenu,\n          type: \"checkbox\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"span\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_nav__WEBPACK_IMPORTED_MODULE_3__.Nav, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().mobMenu), (0,D_IXNOME_evo_landing_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().mobMenu_open), menuOpen)),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().mobMenu__nav),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_nav__WEBPACK_IMPORTED_MODULE_3__.Nav, {\n          isMobMenu: true,\n          closeMenu: handleMobileMenu\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().mobMenu__socials),\n        children: src_constants_socials__WEBPACK_IMPORTED_MODULE_4__.SOCIALS.map(function (item) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"a\", {\n            href: item.link,\n            title: item.title,\n            children: item.Icon\n          }, item.title, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Header, \"F5dPtiTNd5BBeC2TT6atIrgeqAs=\");\n\n_c = Header;\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0VBQWhCO1FBQUEsdUJBQ0UsOERBQUMsZ0RBQUQ7VUFBSyxTQUFTLE1BQWQ7VUFBZSxTQUFTLEVBQUVRO1FBQTFCO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFERjtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBTEYsZUFRRTtRQUFLLFNBQVMsRUFBRVIsNEVBQWhCO1FBQUEsVUFDS0QsOERBQUEsQ0FBWSxVQUFDMkIsSUFBRDtVQUFBLG9CQUNYO1lBQW9CLElBQUksRUFBRUEsSUFBSSxDQUFDQyxJQUEvQjtZQUFxQyxLQUFLLEVBQUVELElBQUksQ0FBQ0UsS0FBakQ7WUFBQSxVQUNHRixJQUFJLENBQUNHO1VBRFIsR0FBUUgsSUFBSSxDQUFDRSxLQUFiO1lBQUE7WUFBQTtZQUFBO1VBQUEsU0FEVztRQUFBLENBQVo7TUFETDtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBUkY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBZkY7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREY7QUFrQ0QsQ0FoRU07O0dBQU0xQjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LnRzeD8xMjQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7IE5hdiB9IGZyb20gXCJAY29tcG9uZW50cy9uYXZcIjtcclxuaW1wb3J0IHsgU09DSUFMUyB9IGZyb20gXCJzcmMvY29uc3RhbnRzL3NvY2lhbHNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwic3JjL2Fzc2V0cy9pbWFnZXMvTG9nby5wbmdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW21lbnVPcGVuLCBzZXRNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNjcm9sbFRvcCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgIHNldE1lbnVPcGVuKGZhbHNlKVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW9iaWxlTWVudSA9ICgpID0+IHtcclxuICAgIHNldE1lbnVPcGVuKCFtZW51T3Blbik7XHJcblxyXG4gICAgaWYgKCFtZW51T3Blbikge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJodG1sXCIpWzBdLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb3NpdGlvbiA9IFwic3RhdGljXCI7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaHRtbFwiKVswXS5zdHlsZS5vdmVyZmxvdyA9IFwidmlzaWJsZVwiO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9zaXRpb24gPSBcInN0YXRpY1wiO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImh0bWxcIilbMF0uc3R5bGUub3ZlcmZsb3cgPSBcInZpc2libGVcIjtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlclxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmhlYWRlciwge1xyXG4gICAgICAgIFtzdHlsZXMuaGVhZGVyX29wZW5dOiBtZW51T3BlbixcclxuICAgICAgfSl9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX19jb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX19sb2dvfT5cclxuICAgICAgICAgIDxpbWcgc3JjPXtMb2dvLnNyY30gYWx0PVwiRVZPIExvZ29cIiBvbkNsaWNrPXtoYW5kbGVTY3JvbGxUb3B9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXJnZXJ9PlxyXG4gICAgICAgICAgPGlucHV0IG9uQ2xpY2s9e2hhbmRsZU1vYmlsZU1lbnV9IHR5cGU9XCJjaGVja2JveFwiIC8+XHJcbiAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE5hdiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMubW9iTWVudSwge1xyXG4gICAgICAgICAgW3N0eWxlcy5tb2JNZW51X29wZW5dOiBtZW51T3BlbixcclxuICAgICAgICB9KX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9iTWVudV9fbmF2fT5cclxuICAgICAgICAgIDxOYXYgaXNNb2JNZW51IGNsb3NlTWVudT17aGFuZGxlTW9iaWxlTWVudX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vYk1lbnVfX3NvY2lhbHN9PlxyXG4gICAgICAgICAgICB7U09DSUFMUy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICA8YSBrZXk9e2l0ZW0udGl0bGV9IGhyZWY9e2l0ZW0ubGlua30gdGl0bGU9e2l0ZW0udGl0bGV9PlxyXG4gICAgICAgICAgICAgICAge2l0ZW0uSWNvbn1cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY2xhc3NOYW1lcyIsIk5hdiIsIlNPQ0lBTFMiLCJzdHlsZXMiLCJMb2dvIiwiSGVhZGVyIiwibWVudU9wZW4iLCJzZXRNZW51T3BlbiIsImhhbmRsZVNjcm9sbFRvcCIsIndpbmRvdyIsInNjcm9sbFRvIiwiaGFuZGxlTW9iaWxlTWVudSIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJwb3NpdGlvbiIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaGVhZGVyIiwiaGVhZGVyX29wZW4iLCJoZWFkZXJfX2NvbnRhaW5lciIsImhlYWRlcl9fbG9nbyIsInNyYyIsImJ1cmdlciIsIm1vYk1lbnUiLCJtb2JNZW51X29wZW4iLCJtb2JNZW51X19uYXYiLCJtb2JNZW51X19zb2NpYWxzIiwibWFwIiwiaXRlbSIsImxpbmsiLCJ0aXRsZSIsIkljb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/header/index.tsx\n"));

/***/ })

});