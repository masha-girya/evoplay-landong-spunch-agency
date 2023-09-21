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

/***/ "./src/components/services/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/services/index.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Services\": function() { return /* binding */ Services; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/hooks/useDevice */ \"./src/hooks/useDevice.ts\");\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/button */ \"./src/components/button/index.tsx\");\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service */ \"./src/components/services/service/index.tsx\");\n/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/constants */ \"./src/constants/index.ts\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.module.scss */ \"./src/components/services/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _assets_Robot_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/Robot.png */ \"./src/components/services/assets/Robot.png\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"D:\\\\IXNOME\\\\evo-landing\\\\frontend\\\\src\\\\components\\\\services\\\\index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Services = function Services() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(src_constants__WEBPACK_IMPORTED_MODULE_5__.SERVICES[0]),\n      currService = _useState[0],\n      setCurrService = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      isOnChange = _useState2[0],\n      setIsOnChange = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      isVisible = _useState3[0],\n      setIsVisible = _useState3[1];\n\n  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n\n  var _useDevice = (0,src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_2__.useDevice)(),\n      isMobile = _useDevice.isMobile;\n\n  var handleChoose = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (item) {\n    setIsOnChange(true);\n    setCurrService(item);\n    setTimeout(function () {\n      return setIsOnChange(false);\n    }, 300);\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var handleScroll = function handleScroll() {\n      if (ref.current) {\n        if (window.scrollY >= (isMobile ? 900 : 1200)) {\n          setIsVisible(true);\n        }\n      }\n    };\n\n    window.addEventListener(\"scroll\", handleScroll);\n    return function () {\n      window.removeEventListener(\"scroll\", handleScroll);\n    };\n  }, [ref, isMobile]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"article\", {\n    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().services),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().services__container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"ul\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().services__tabList),\n        children: src_constants__WEBPACK_IMPORTED_MODULE_5__.SERVICES.map(function (item) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n              name: item.tabTitle,\n              variant: \"textMain\",\n              isActive: currService.tabTitle === item.tabTitle,\n              onClick: function onClick() {\n                return handleChoose(item);\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 15\n            }, _this)\n          }, item.tabTitle, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_service__WEBPACK_IMPORTED_MODULE_4__.Service, {\n        currService: currService,\n        isOnChange: isOnChange\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"section\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().services__generalContent),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h1\", {\n          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().services__generalContent__title), (_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().services__generalContent__title_mob)),\n          children: \"Lorem ipsum dolor sit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n          className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().services__generalContent__text),\n          ref: ref,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h1\", {\n            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().services__generalContent__title),\n            children: \"Lorem ipsum dolor sit\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().services__generalContent__text__pBox),\n            children: src_constants__WEBPACK_IMPORTED_MODULE_5__.SERVICES_TEXT.map(function (item, i) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"p\", {\n                children: item\n              }, i, false, {\n                fileName: _jsxFileName,\n                lineNumber: 70,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n          className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().services__generalContent__imgBox),\n          children: isVisible && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"img\", {\n            src: _assets_Robot_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"].src,\n            alt: \"Robot image\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 27\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().elements__circle)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().elements__circle2)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Services, \"6WwtsBPDYqfokeQR+c6tWsrsJlQ=\", false, function () {\n  return [src_hooks_useDevice__WEBPACK_IMPORTED_MODULE_2__.useDevice];\n});\n\n_c = Services;\n\nvar _c;\n\n$RefreshReg$(_c, \"Services\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZXJ2aWNlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxJQUFNWSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0VBQUE7O0VBQzVCLGdCQUFzQ1QsK0NBQVEsQ0FBSUssc0RBQUosQ0FBOUM7RUFBQSxJQUFPSyxXQUFQO0VBQUEsSUFBb0JDLGNBQXBCOztFQUNBLGlCQUFvQ1gsK0NBQVEsQ0FBQyxLQUFELENBQTVDO0VBQUEsSUFBT1ksVUFBUDtFQUFBLElBQW1CQyxhQUFuQjs7RUFDQSxpQkFBa0NiLCtDQUFRLENBQUMsS0FBRCxDQUExQztFQUFBLElBQU9jLFNBQVA7RUFBQSxJQUFrQkMsWUFBbEI7O0VBQ0EsSUFBTUMsR0FBRyxHQUFHakIsNkNBQU0sQ0FBYSxJQUFiLENBQWxCOztFQUNBLGlCQUFxQkcsOERBQVMsRUFBOUI7RUFBQSxJQUFRZSxRQUFSLGNBQVFBLFFBQVI7O0VBRUEsSUFBTUMsWUFBWSxHQUFHckIsa0RBQVcsQ0FBQyxVQUFDc0IsSUFBRCxFQUFnQztJQUMvRE4sYUFBYSxDQUFDLElBQUQsQ0FBYjtJQUNBRixjQUFjLENBQUNRLElBQUQsQ0FBZDtJQUNBQyxVQUFVLENBQUM7TUFBQSxPQUFNUCxhQUFhLENBQUMsS0FBRCxDQUFuQjtJQUFBLENBQUQsRUFBNkIsR0FBN0IsQ0FBVjtFQUNELENBSitCLEVBSTdCLEVBSjZCLENBQWhDO0VBTUFmLGdEQUFTLENBQUMsWUFBTTtJQUNkLElBQU11QixZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO01BQ3pCLElBQUlMLEdBQUcsQ0FBQ00sT0FBUixFQUFpQjtRQUNmLElBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxLQUFtQlAsUUFBUSxHQUFHLEdBQUgsR0FBUyxJQUFwQyxDQUFILEVBQThDO1VBQzVDRixZQUFZLENBQUMsSUFBRCxDQUFaO1FBQ0Q7TUFDRjtJQUNGLENBTkQ7O0lBUUFRLE1BQU0sQ0FBQ0UsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NKLFlBQWxDO0lBRUEsT0FBTyxZQUFNO01BQ1hFLE1BQU0sQ0FBQ0csbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNMLFlBQXJDO0lBQ0QsQ0FGRDtFQUdELENBZFEsRUFjTixDQUFDTCxHQUFELEVBQU1DLFFBQU4sQ0FkTSxDQUFUO0VBZ0JBLG9CQUNFO0lBQVMsU0FBUyxFQUFFVixvRUFBcEI7SUFBQSx3QkFDRTtNQUFLLFNBQVMsRUFBRUEsK0VBQWhCO01BQUEsd0JBQ0U7UUFBSSxTQUFTLEVBQUVBLDZFQUFmO1FBQUEsVUFDR0YsdURBQUEsQ0FBYSxVQUFDYyxJQUFEO1VBQUEsb0JBQ1o7WUFBQSx1QkFDRSw4REFBQyxzREFBRDtjQUNFLElBQUksRUFBRUEsSUFBSSxDQUFDWSxRQURiO2NBRUUsT0FBTyxFQUFDLFVBRlY7Y0FHRSxRQUFRLEVBQUVyQixXQUFXLENBQUNxQixRQUFaLEtBQXlCWixJQUFJLENBQUNZLFFBSDFDO2NBSUUsT0FBTyxFQUFFO2dCQUFBLE9BQU1iLFlBQVksQ0FBQ0MsSUFBRCxDQUFsQjtjQUFBO1lBSlg7Y0FBQTtjQUFBO2NBQUE7WUFBQTtVQURGLEdBQVNBLElBQUksQ0FBQ1ksUUFBZDtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBRFk7UUFBQSxDQUFiO01BREg7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQURGLGVBYUUsOERBQUMsNkNBQUQ7UUFBUyxXQUFXLEVBQUVyQixXQUF0QjtRQUFtQyxVQUFVLEVBQUVFO01BQS9DO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FiRixlQWNFO1FBQVMsU0FBUyxFQUFFTCxvRkFBcEI7UUFBQSx3QkFDRTtVQUNFLFNBQVMsRUFBRU4saURBQVUsQ0FDbkJNLDJGQURtQixFQUVuQkEsK0ZBRm1CLENBRHZCO1VBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBREYsZUFTRTtVQUFLLFNBQVMsRUFBRUEsMEZBQWhCO1VBQXVELEdBQUcsRUFBRVMsR0FBNUQ7VUFBQSx3QkFDRTtZQUFJLFNBQVMsRUFBRVQsMkZBQWY7WUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUEsU0FERixlQUlFO1lBQUssU0FBUyxFQUFFQSxnR0FBaEI7WUFBQSxVQUNHRCw0REFBQSxDQUFrQixVQUFDYSxJQUFELEVBQU9rQixDQUFQO2NBQUEsb0JBQ2pCO2dCQUFBLFVBQVlsQjtjQUFaLEdBQVFrQixDQUFSO2dCQUFBO2dCQUFBO2dCQUFBO2NBQUEsU0FEaUI7WUFBQSxDQUFsQjtVQURIO1lBQUE7WUFBQTtZQUFBO1VBQUEsU0FKRjtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FURixlQW1CRTtVQUFLLFNBQVMsRUFBRTlCLDRGQUFoQjtVQUFBLFVBQ0dPLFNBQVMsaUJBQUk7WUFBSyxHQUFHLEVBQUVOLDZEQUFWO1lBQXdCLEdBQUcsRUFBQztVQUE1QjtZQUFBO1lBQUE7WUFBQTtVQUFBO1FBRGhCO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FuQkY7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBZEY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBREYsZUF1Q0U7TUFBSyxTQUFTLEVBQUVELDRFQUF1QmlDO0lBQXZDO01BQUE7TUFBQTtNQUFBO0lBQUEsU0F2Q0YsZUF3Q0U7TUFBSyxTQUFTLEVBQUVqQyw2RUFBd0JrQztJQUF4QztNQUFBO01BQUE7TUFBQTtJQUFBLFNBeENGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURGO0FBNENELENBekVNOztHQUFNaEM7VUFLVVA7OztLQUxWTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zZXJ2aWNlcy9pbmRleC50c3g/MDBjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7IHVzZURldmljZSB9IGZyb20gXCJzcmMvaG9va3MvdXNlRGV2aWNlXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAY29tcG9uZW50cy9idXR0b25cIjtcclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VcIjtcclxuaW1wb3J0IHsgU0VSVklDRVMsIFNFUlZJQ0VTX1RFWFQgfSBmcm9tIFwic3JjL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBSb2JvdEltZyBmcm9tIFwiLi9hc3NldHMvUm9ib3QucG5nXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2VydmljZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2N1cnJTZXJ2aWNlLCBzZXRDdXJyU2VydmljZV0gPSB1c2VTdGF0ZTxuPihTRVJWSUNFU1swXSk7XHJcbiAgY29uc3QgW2lzT25DaGFuZ2UsIHNldElzT25DaGFuZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc1Zpc2libGUsIHNldElzVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmPGFueSB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IHsgaXNNb2JpbGUgfSA9IHVzZURldmljZSgpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaG9vc2UgPSB1c2VDYWxsYmFjaygoaXRlbTogKHR5cGVvZiBTRVJWSUNFUylbMF0pID0+IHtcclxuICAgIHNldElzT25DaGFuZ2UodHJ1ZSk7XHJcbiAgICBzZXRDdXJyU2VydmljZShpdGVtKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0SXNPbkNoYW5nZShmYWxzZSksIDMwMCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICBpZiAocmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBpZih3aW5kb3cuc2Nyb2xsWSA+PSAoaXNNb2JpbGUgPyA5MDAgOiAxMjAwKSkge1xyXG4gICAgICAgICAgc2V0SXNWaXNpYmxlKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICB9O1xyXG4gIH0sIFtyZWYsIGlzTW9iaWxlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlcy5zZXJ2aWNlc30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VydmljZXNfX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLnNlcnZpY2VzX190YWJMaXN0fT5cclxuICAgICAgICAgIHtTRVJWSUNFUy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPGxpIGtleT17aXRlbS50YWJUaXRsZX0+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgbmFtZT17aXRlbS50YWJUaXRsZX1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXh0TWFpblwiXHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17Y3VyclNlcnZpY2UudGFiVGl0bGUgPT09IGl0ZW0udGFiVGl0bGV9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDaG9vc2UoaXRlbSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPFNlcnZpY2UgY3VyclNlcnZpY2U9e2N1cnJTZXJ2aWNlfSBpc09uQ2hhbmdlPXtpc09uQ2hhbmdlfSAvPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnNlcnZpY2VzX19nZW5lcmFsQ29udGVudH0+XHJcbiAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgIHN0eWxlcy5zZXJ2aWNlc19fZ2VuZXJhbENvbnRlbnRfX3RpdGxlLFxyXG4gICAgICAgICAgICAgIHN0eWxlcy5zZXJ2aWNlc19fZ2VuZXJhbENvbnRlbnRfX3RpdGxlX21vYlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXRcclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlcnZpY2VzX19nZW5lcmFsQ29udGVudF9fdGV4dH0gcmVmPXtyZWZ9PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuc2VydmljZXNfX2dlbmVyYWxDb250ZW50X190aXRsZX0+XHJcbiAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VydmljZXNfX2dlbmVyYWxDb250ZW50X190ZXh0X19wQm94fT5cclxuICAgICAgICAgICAgICB7U0VSVklDRVNfVEVYVC5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxwIGtleT17aX0+e2l0ZW19PC9wPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXJ2aWNlc19fZ2VuZXJhbENvbnRlbnRfX2ltZ0JveH0+XHJcbiAgICAgICAgICAgIHtpc1Zpc2libGUgJiYgPGltZyBzcmM9e1JvYm90SW1nLnNyY30gYWx0PVwiUm9ib3QgaW1hZ2VcIiAvPn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWxlbWVudHNfX2NpcmNsZX0+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWxlbWVudHNfX2NpcmNsZTJ9PjwvZGl2PlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiY2xhc3NOYW1lcyIsInVzZURldmljZSIsIkJ1dHRvbiIsIlNlcnZpY2UiLCJTRVJWSUNFUyIsIlNFUlZJQ0VTX1RFWFQiLCJzdHlsZXMiLCJSb2JvdEltZyIsIlNlcnZpY2VzIiwiY3VyclNlcnZpY2UiLCJzZXRDdXJyU2VydmljZSIsImlzT25DaGFuZ2UiLCJzZXRJc09uQ2hhbmdlIiwiaXNWaXNpYmxlIiwic2V0SXNWaXNpYmxlIiwicmVmIiwiaXNNb2JpbGUiLCJoYW5kbGVDaG9vc2UiLCJpdGVtIiwic2V0VGltZW91dCIsImhhbmRsZVNjcm9sbCIsImN1cnJlbnQiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXJ2aWNlcyIsInNlcnZpY2VzX19jb250YWluZXIiLCJzZXJ2aWNlc19fdGFiTGlzdCIsIm1hcCIsInRhYlRpdGxlIiwic2VydmljZXNfX2dlbmVyYWxDb250ZW50Iiwic2VydmljZXNfX2dlbmVyYWxDb250ZW50X190aXRsZSIsInNlcnZpY2VzX19nZW5lcmFsQ29udGVudF9fdGl0bGVfbW9iIiwic2VydmljZXNfX2dlbmVyYWxDb250ZW50X190ZXh0Iiwic2VydmljZXNfX2dlbmVyYWxDb250ZW50X190ZXh0X19wQm94IiwiaSIsInNlcnZpY2VzX19nZW5lcmFsQ29udGVudF9faW1nQm94Iiwic3JjIiwiZWxlbWVudHNfX2NpcmNsZSIsImVsZW1lbnRzX19jaXJjbGUyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/services/index.tsx\n"));

/***/ })

});