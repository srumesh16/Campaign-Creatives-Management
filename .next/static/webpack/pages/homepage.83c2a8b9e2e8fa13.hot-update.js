"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/homepage",{

/***/ "./src/components/generatedImages2.tsx":
/*!*********************************************!*\
  !*** ./src/components/generatedImages2.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst GeneratedImages2 = (param)=>{\n    let { data } = param;\n    const handleDownload = (url, index)=>{\n        if (url) {\n            const link = document.createElement(\"a\");\n            link.href = url;\n            link.download = \"DalleImage_\".concat(index + 1, \".png\");\n            link.click();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"gallery-container\",\n        children: data.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"gallery-item\",\n                children: item.url ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: item.url,\n                    alt: \"Image \".concat(index)\n                }, void 0, false, {\n                    fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/generatedImages2.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 13\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Error: URL is null\"\n                }, void 0, false, {\n                    fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/generatedImages2.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 13\n                }, undefined)\n            }, index, false, {\n                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/generatedImages2.tsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/generatedImages2.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_c = GeneratedImages2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GeneratedImages2);\nvar _c;\n$RefreshReg$(_c, \"GeneratedImages2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9nZW5lcmF0ZWRJbWFnZXMyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0M7QUFNeEMsTUFBTUMsbUJBQW1EO1FBQUMsRUFBRUMsSUFBSSxFQUFFO0lBRWhFLE1BQU1DLGlCQUFpQixDQUFDQyxLQUFvQkM7UUFDMUMsSUFBR0QsS0FBSztZQUNOLE1BQU1FLE9BQU9DLFNBQVNDLGFBQWEsQ0FBQztZQUNwQ0YsS0FBS0csSUFBSSxHQUFHTDtZQUNaRSxLQUFLSSxRQUFRLEdBQUcsY0FBd0IsT0FBVkwsUUFBUSxHQUFFO1lBQ3hDQyxLQUFLSyxLQUFLO1FBQ1o7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNaWCxLQUFLWSxHQUFHLENBQUMsQ0FBQ0MsTUFBTVYsc0JBQ2YsOERBQUNPO2dCQUFJQyxXQUFVOzBCQUNaRSxLQUFLWCxHQUFHLGlCQUNQLDhEQUFDWTtvQkFBSUMsS0FBS0YsS0FBS1gsR0FBRztvQkFBRWMsS0FBSyxTQUFlLE9BQU5iOzs7Ozs4Q0FFbEMsOERBQUNjOzhCQUFFOzs7Ozs7ZUFKNEJkOzs7Ozs7Ozs7O0FBVTNDO0tBeEJNSjtBQTBCTiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2dlbmVyYXRlZEltYWdlczIudHN4Pzc3YzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgR2VuZXJhdGVkSW1hZ2VzUHJvcHMge1xuICBkYXRhOiB7IHVybDogc3RyaW5nIHwgbnVsbCB9W107XG59XG5cbmNvbnN0IEdlbmVyYXRlZEltYWdlczI6IFJlYWN0LkZDPEdlbmVyYXRlZEltYWdlc1Byb3BzPiA9ICh7IGRhdGEgfSkgPT4ge1xuICBcbiAgY29uc3QgaGFuZGxlRG93bmxvYWQgPSAodXJsOiBzdHJpbmcgfCBudWxsLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgaWYodXJsKSB7XG4gICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgbGluay5ocmVmID0gdXJsO1xuICAgICAgbGluay5kb3dubG9hZCA9IGBEYWxsZUltYWdlXyR7aW5kZXggKyAxfS5wbmdgO1xuICAgICAgbGluay5jbGljaygpO1xuICAgIH1cbiAgfTtcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5LWNvbnRhaW5lclwiPlxuICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnktaXRlbVwiIGtleT17aW5kZXh9PlxuICAgICAgICAgIHtpdGVtLnVybCA/IChcbiAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLnVybH0gYWx0PXtgSW1hZ2UgJHtpbmRleH1gfSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8cD5FcnJvcjogVVJMIGlzIG51bGw8L3A+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdlbmVyYXRlZEltYWdlczI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJHZW5lcmF0ZWRJbWFnZXMyIiwiZGF0YSIsImhhbmRsZURvd25sb2FkIiwidXJsIiwiaW5kZXgiLCJsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImRvd25sb2FkIiwiY2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwiaW1nIiwic3JjIiwiYWx0IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/generatedImages2.tsx\n"));

/***/ })

});