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

/***/ "./src/hooks/useDevice.ts":
/*!********************************!*\
  !*** ./src/hooks/useDevice.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useDevice\": function() { return /* binding */ useDevice; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\n\nvar useDevice = function useDevice() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      isMobile = _useState[0],\n      setIsMobile = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      isSmallNote = _useState2[0],\n      setIsSmallNote = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      isTablet = _useState3[0],\n      setIsTablet = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      isDesktop = _useState4[0],\n      setIsDesktop = _useState4[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var handleResize = function handleResize() {\n      setIsMobile(window.innerWidth < 480);\n      setIsTablet(window.innerWidth < 680 && window.innerWidth >= 480);\n      setIsSmallNote(window.innerWidth < 1200 && window.innerWidth >= 680);\n      setIsDesktop(window.innerWidth >= 1200);\n    };\n\n    handleResize();\n    window.addEventListener(\"resize\", handleResize);\n    return function () {\n      window.removeEventListener(\"resize\", handleResize);\n    };\n  }, []);\n  return {\n    isMobile: isMobile,\n    isSmallNote: isSmallNote,\n    isTablet: isTablet,\n    isDesktop: isDesktop\n  };\n};\n\n_s(useDevice, \"e+Jb/I/zW1Q9A0P2mKTY2CSN1G8=\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlRGV2aWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0VBQUE7O0VBQzdCLGdCQUFnQ0QsK0NBQVEsQ0FBQyxLQUFELENBQXhDO0VBQUEsSUFBT0UsUUFBUDtFQUFBLElBQWlCQyxXQUFqQjs7RUFDQSxpQkFBc0NILCtDQUFRLENBQUMsS0FBRCxDQUE5QztFQUFBLElBQU9JLFdBQVA7RUFBQSxJQUFvQkMsY0FBcEI7O0VBQ0EsaUJBQWdDTCwrQ0FBUSxDQUFDLEtBQUQsQ0FBeEM7RUFBQSxJQUFPTSxRQUFQO0VBQUEsSUFBaUJDLFdBQWpCOztFQUNBLGlCQUFrQ1AsK0NBQVEsQ0FBQyxLQUFELENBQTFDO0VBQUEsSUFBT1EsU0FBUDtFQUFBLElBQWtCQyxZQUFsQjs7RUFFQVYsZ0RBQVMsQ0FBQyxZQUFNO0lBQ2QsSUFBTVcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtNQUN6QlAsV0FBVyxDQUFDUSxNQUFNLENBQUNDLFVBQVAsR0FBb0IsR0FBckIsQ0FBWDtNQUNBTCxXQUFXLENBQUNJLE1BQU0sQ0FBQ0MsVUFBUCxHQUFvQixHQUFwQixJQUEyQkQsTUFBTSxDQUFDQyxVQUFQLElBQXFCLEdBQWpELENBQVg7TUFDQVAsY0FBYyxDQUFDTSxNQUFNLENBQUNDLFVBQVAsR0FBb0IsSUFBcEIsSUFBNEJELE1BQU0sQ0FBQ0MsVUFBUCxJQUFxQixHQUFsRCxDQUFkO01BQ0FILFlBQVksQ0FBQ0UsTUFBTSxDQUFDQyxVQUFQLElBQXFCLElBQXRCLENBQVo7SUFDRCxDQUxEOztJQU9BRixZQUFZO0lBRVpDLE1BQU0sQ0FBQ0UsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NILFlBQWxDO0lBRUEsT0FBTyxZQUFNO01BQ1hDLE1BQU0sQ0FBQ0csbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNKLFlBQXJDO0lBQ0QsQ0FGRDtFQUdELENBZlEsRUFlTixFQWZNLENBQVQ7RUFpQkEsT0FBTztJQUFFUixRQUFRLEVBQVJBLFFBQUY7SUFBWUUsV0FBVyxFQUFYQSxXQUFaO0lBQXlCRSxRQUFRLEVBQVJBLFFBQXpCO0lBQW1DRSxTQUFTLEVBQVRBO0VBQW5DLENBQVA7QUFDRCxDQXhCTTs7R0FBTVAiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZURldmljZS50cz8zYjEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VEZXZpY2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lzTW9iaWxlLCBzZXRJc01vYmlsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzU21hbGxOb3RlLCBzZXRJc1NtYWxsTm90ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzVGFibGV0LCBzZXRJc1RhYmxldF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzRGVza3RvcCwgc2V0SXNEZXNrdG9wXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgc2V0SXNNb2JpbGUod2luZG93LmlubmVyV2lkdGggPCA0ODApO1xyXG4gICAgICBzZXRJc1RhYmxldCh3aW5kb3cuaW5uZXJXaWR0aCA8IDY4MCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+PSA0ODApO1xyXG4gICAgICBzZXRJc1NtYWxsTm90ZSh3aW5kb3cuaW5uZXJXaWR0aCA8IDEyMDAgJiYgd2luZG93LmlubmVyV2lkdGggPj0gNjgwKTtcclxuICAgICAgc2V0SXNEZXNrdG9wKHdpbmRvdy5pbm5lcldpZHRoID49IDEyMDApO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVSZXNpemUoKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIHsgaXNNb2JpbGUsIGlzU21hbGxOb3RlLCBpc1RhYmxldCwgaXNEZXNrdG9wIH07XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZURldmljZSIsImlzTW9iaWxlIiwic2V0SXNNb2JpbGUiLCJpc1NtYWxsTm90ZSIsInNldElzU21hbGxOb3RlIiwiaXNUYWJsZXQiLCJzZXRJc1RhYmxldCIsImlzRGVza3RvcCIsInNldElzRGVza3RvcCIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/useDevice.ts\n"));

/***/ })

});