"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/shoppingCart",{

/***/ "./src/pages/shoppingCart.tsx":
/*!************************************!*\
  !*** ./src/pages/shoppingCart.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ShoppingCart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/header */ \"./src/components/header.tsx\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction ShoppingCart() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { query } = router;\n    const { url, count } = query;\n    const selectedImageCount = parseInt(count, 10) || 0;\n    const urlList = Array.isArray(url) ? url : [\n        url\n    ];\n    const handleSelectedImagesCountChange = ()=>{};\n    const handleBackClick = ()=>{\n        router.push(\"/homepage\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                selectedImageCount: selectedImageCount,\n                selectedImages: urlList\n            }, void 0, false, {\n                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/shoppingCart.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"app-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"chat-container2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaArrowLeft, {\n                            className: \"left-arrow\",\n                            onClick: handleBackClick\n                        }, void 0, false, {\n                            fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/shoppingCart.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"header-banner\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"header-heading\",\n                                children: \"CREATIVE BRIEF\"\n                            }, void 0, false, {\n                                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/shoppingCart.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/shoppingCart.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/shoppingCart.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/shoppingCart.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/shoppingCart.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(ShoppingCart, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ShoppingCart;\nvar _c;\n$RefreshReg$(_c, \"ShoppingCart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc2hvcHBpbmdDYXJ0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRDtBQUN2QjtBQUNDO0FBRUs7QUFHL0IsU0FBU0k7O0lBQ3RCLE1BQU1DLFNBQVNKLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVLLEtBQUssRUFBRSxHQUFHRDtJQUNsQixNQUFNLEVBQUVFLEdBQUcsRUFBRUMsS0FBSyxFQUFFLEdBQUdGO0lBQ3ZCLE1BQU1HLHFCQUFxQkMsU0FBU0YsT0FBTyxPQUFPO0lBR2xELE1BQU1HLFVBQVVDLE1BQU1DLE9BQU8sQ0FBQ04sT0FBT0EsTUFBTTtRQUFDQTtLQUFJO0lBRWhELE1BQU1PLGtDQUFrQyxLQUFPO0lBQy9DLE1BQU1DLGtCQUFrQjtRQUN0QlYsT0FBT1csSUFBSSxDQUFDO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDZiwwREFBTUE7Z0JBQUNPLG9CQUFvQkE7Z0JBQW9CUyxnQkFBZ0JQOzs7Ozs7MEJBQ2hFLDhEQUFDTTtnQkFBSUUsV0FBVTswQkFDYiw0RUFBQ0Y7b0JBQUlFLFdBQVU7O3NDQUNmLDhEQUFDaEIsdURBQVdBOzRCQUFDZ0IsV0FBVTs0QkFBYUMsU0FBU0w7Ozs7OztzQ0FDN0MsOERBQUNFOzRCQUFJRSxXQUFVO3NDQUNiLDRFQUFDRjtnQ0FBSUUsV0FBVTswQ0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPMUM7R0E1QndCZjs7UUFDUEgsa0RBQVNBOzs7S0FERkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Nob3BwaW5nQ2FydC50c3g/ZTZlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnQC9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgU2hvcHBpbmdDYXJ0SW1hZ2VzIGZyb20gJ0AvY29tcG9uZW50cy9zaG9wcGluZ0NhcnRJbWFnZXMnO1xuaW1wb3J0IHsgRmFBcnJvd0xlZnQgIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNob3BwaW5nQ2FydCgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgcXVlcnkgfSA9IHJvdXRlcjtcbiAgY29uc3QgeyB1cmwsIGNvdW50IH0gPSBxdWVyeTtcbiAgY29uc3Qgc2VsZWN0ZWRJbWFnZUNvdW50ID0gcGFyc2VJbnQoY291bnQsIDEwKSB8fCAwO1xuXG4gIFxuICBjb25zdCB1cmxMaXN0ID0gQXJyYXkuaXNBcnJheSh1cmwpID8gdXJsIDogW3VybF07XG5cbiAgY29uc3QgaGFuZGxlU2VsZWN0ZWRJbWFnZXNDb3VudENoYW5nZSA9ICgpID0+IHt9O1xuICBjb25zdCBoYW5kbGVCYWNrQ2xpY2sgPSAoKSA9PiB7XG4gICAgcm91dGVyLnB1c2goJy9ob21lcGFnZScpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlciBzZWxlY3RlZEltYWdlQ291bnQ9e3NlbGVjdGVkSW1hZ2VDb3VudH0gc2VsZWN0ZWRJbWFnZXM9e3VybExpc3R9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWNvbnRhaW5lcjJcIj5cbiAgICAgICAgPEZhQXJyb3dMZWZ0IGNsYXNzTmFtZT1cImxlZnQtYXJyb3dcIiBvbkNsaWNrPXtoYW5kbGVCYWNrQ2xpY2t9Lz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItYmFubmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItaGVhZGluZ1wiPkNSRUFUSVZFIEJSSUVGPC9kaXY+ICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJIZWFkZXIiLCJGYUFycm93TGVmdCIsIlNob3BwaW5nQ2FydCIsInJvdXRlciIsInF1ZXJ5IiwidXJsIiwiY291bnQiLCJzZWxlY3RlZEltYWdlQ291bnQiLCJwYXJzZUludCIsInVybExpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJoYW5kbGVTZWxlY3RlZEltYWdlc0NvdW50Q2hhbmdlIiwiaGFuZGxlQmFja0NsaWNrIiwicHVzaCIsImRpdiIsInNlbGVjdGVkSW1hZ2VzIiwiY2xhc3NOYW1lIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/shoppingCart.tsx\n"));

/***/ })

});