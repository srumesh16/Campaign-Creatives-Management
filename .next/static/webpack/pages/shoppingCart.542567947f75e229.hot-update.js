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

/***/ "./src/components/SCFileUpload.tsx":
/*!*****************************************!*\
  !*** ./src/components/SCFileUpload.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst SCFileUpload = (param)=>{\n    let { onFileUpload } = param;\n    _s();\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [uploadSuccess, setUploadSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [uploadedFileName, setUploadedFileName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [fileUrl, setFileUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleUploadClick = ()=>{\n        var _inputRef_current;\n        setErrorMessage(null);\n        setUploadSuccess(null); // Set to null to indicate uploading is in progress\n        (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.click();\n    };\n    const handleFileSelect = async ()=>{\n        if (inputRef.current && inputRef.current.files) {\n            const selectedFile = inputRef.current.files[0];\n            if (selectedFile) {\n                setUploadedFileName(selectedFile.name);\n            }\n        }\n    };\n    const handleDeleteClick = ()=>{\n        // Add logic to delete the uploaded file if needed.\n        // You may want to clear the state and notify the parent component.\n        setFileUrl(null);\n        setUploadedFileName(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sc-uploadContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"file\",\n                        accept: \".png\",\n                        style: {\n                            display: \"none\"\n                        },\n                        ref: inputRef,\n                        onChange: handleFileSelect\n                    }, void 0, false, {\n                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaCloudUploadAlt, {\n                        className: \"uploadIcon\",\n                        onClick: handleUploadClick\n                    }, void 0, false, {\n                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"upload-button\",\n                        onClick: handleUploadClick,\n                        children: \"Upload File\"\n                    }, void 0, false, {\n                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            uploadSuccess === false ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    alignItems: \"center\",\n                    color: \"black\",\n                    padding: \"10px\"\n                },\n                children: [\n                    \"Error: \",\n                    errorMessage\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, undefined) : uploadedFileName ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    color: \"black\",\n                    padding: \"10px\",\n                    border: \"1px solid #ccc\",\n                    borderRadius: \"5px\",\n                    marginTop: \"10px\",\n                    marginLeft: \"50px\"\n                },\n                children: [\n                    \"Uploaded File: \",\n                    uploadedFileName,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            marginLeft: \"10px\",\n                            background: \"none\",\n                            border: \"none\",\n                            cursor: \"pointer\"\n                        },\n                        onClick: handleDeleteClick,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            role: \"img\",\n                            \"aria-label\": \"Delete\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaRegTrashAlt, {}, void 0, false, {\n                                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, undefined) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SCFileUpload, \"I5YIP9UKYJO5xVnrcr9bn4Lx500=\");\n_c = SCFileUpload;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SCFileUpload);\nvar _c;\n$RefreshReg$(_c, \"SCFileUpload\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TQ0ZpbGVVcGxvYWQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdEO0FBQ2lCO0FBTWpFLE1BQU1LLGVBQTRDO1FBQUMsRUFBRUMsWUFBWSxFQUFFOztJQUNqRSxNQUFNQyxXQUFXTiw2Q0FBTUEsQ0FBbUI7SUFDMUMsTUFBTSxDQUFDTyxlQUFlQyxpQkFBaUIsR0FBR1AsK0NBQVFBLENBQWlCO0lBQ25FLE1BQU0sQ0FBQ1EsY0FBY0MsZ0JBQWdCLEdBQUdULCtDQUFRQSxDQUFnQjtJQUNoRSxNQUFNLENBQUNVLGtCQUFrQkMsb0JBQW9CLEdBQUdYLCtDQUFRQSxDQUFnQjtJQUN4RSxNQUFNLENBQUNZLFNBQVNDLFdBQVcsR0FBR2IsK0NBQVFBLENBQWdCO0lBRXRELE1BQU1jLG9CQUFvQjtZQUd4QlQ7UUFGQUksZ0JBQWdCO1FBQ2hCRixpQkFBaUIsT0FBTyxtREFBbUQ7U0FDM0VGLG9CQUFBQSxTQUFTVSxPQUFPLGNBQWhCVix3Q0FBQUEsa0JBQWtCVyxLQUFLO0lBQ3pCO0lBRUEsTUFBTUMsbUJBQW1CO1FBQ3ZCLElBQUlaLFNBQVNVLE9BQU8sSUFBSVYsU0FBU1UsT0FBTyxDQUFDRyxLQUFLLEVBQUU7WUFDOUMsTUFBTUMsZUFBZWQsU0FBU1UsT0FBTyxDQUFDRyxLQUFLLENBQUMsRUFBRTtZQUU5QyxJQUFJQyxjQUFjO2dCQU9oQlIsb0JBQW9CUSxhQUFhQyxJQUFJO1lBQ3ZDO1FBQ0Y7SUFDRjtJQUVBLE1BQU1DLG9CQUFvQjtRQUN4QixtREFBbUQ7UUFDbkQsbUVBQW1FO1FBQ25FUixXQUFXO1FBQ1hGLG9CQUFvQjtJQUN0QjtJQUVBLHFCQUNFLDhEQUFDVzs7MEJBQ0MsOERBQUNBO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQ0NDLE1BQUs7d0JBQ0xDLFFBQU87d0JBQ1BDLE9BQU87NEJBQUVDLFNBQVM7d0JBQU87d0JBQ3pCQyxLQUFLeEI7d0JBQ0x5QixVQUFVYjs7Ozs7O2tDQUVaLDhEQUFDaEIsNERBQWdCQTt3QkFBQ3NCLFdBQVU7d0JBQWFRLFNBQVNqQjs7Ozs7O2tDQUVsRCw4REFBQ2tCO3dCQUFPVCxXQUFVO3dCQUFnQlEsU0FBU2pCO2tDQUFtQjs7Ozs7Ozs7Ozs7O1lBSy9EUixrQkFBa0Isc0JBQ2pCLDhEQUFDZ0I7Z0JBQUlLLE9BQU87b0JBQUVNLFlBQVk7b0JBQVVDLE9BQU87b0JBQVNDLFNBQVM7Z0JBQU87O29CQUFHO29CQUM3RDNCOzs7Ozs7NEJBRVJFLGlDQUNGLDhEQUFDWTtnQkFDQ0ssT0FBTztvQkFDTEMsU0FBUztvQkFDVEssWUFBWTtvQkFDWkMsT0FBTztvQkFDUEMsU0FBUztvQkFDVEMsUUFBUTtvQkFDUkMsY0FBYztvQkFDZEMsV0FBVztvQkFDWEMsWUFBWTtnQkFDZDs7b0JBQ0Q7b0JBQ2lCN0I7a0NBQ2hCLDhEQUFDc0I7d0JBQ0NMLE9BQU87NEJBQUVZLFlBQVk7NEJBQVFDLFlBQVk7NEJBQVFKLFFBQVE7NEJBQVFLLFFBQVE7d0JBQVU7d0JBQ25GVixTQUFTVjtrQ0FFVCw0RUFBQ3FCOzRCQUFLQyxNQUFLOzRCQUFNQyxjQUFXO3NDQUMxQiw0RUFBQzFDLHlEQUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBSWxCOzs7Ozs7O0FBR1Y7R0FuRk1DO0tBQUFBO0FBcUZOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NDRmlsZVVwbG9hZC50c3g/ZmQ3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZhQ2xvdWRVcGxvYWRBbHQsIEZhUmVnVHJhc2hBbHQgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5cbmludGVyZmFjZSBTQ0ZpbGVVcGxvYWRQcm9wcyB7XG4gIG9uRmlsZVVwbG9hZDogKHVybDogc3RyaW5nKSA9PiB2b2lkOyAvLyBGdW5jdGlvbiB0byBwYXNzIHRoZSBVUkwgdG8gdGhlIHBhcmVudCBjb21wb25lbnRcbn1cblxuY29uc3QgU0NGaWxlVXBsb2FkOiBSZWFjdC5GQzxTQ0ZpbGVVcGxvYWRQcm9wcz4gPSAoeyBvbkZpbGVVcGxvYWQgfSkgPT4ge1xuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcbiAgY29uc3QgW3VwbG9hZFN1Y2Nlc3MsIHNldFVwbG9hZFN1Y2Nlc3NdID0gdXNlU3RhdGU8Ym9vbGVhbiB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFt1cGxvYWRlZEZpbGVOYW1lLCBzZXRVcGxvYWRlZEZpbGVOYW1lXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbZmlsZVVybCwgc2V0RmlsZVVybF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBoYW5kbGVVcGxvYWRDbGljayA9ICgpID0+IHtcbiAgICBzZXRFcnJvck1lc3NhZ2UobnVsbCk7XG4gICAgc2V0VXBsb2FkU3VjY2VzcyhudWxsKTsgLy8gU2V0IHRvIG51bGwgdG8gaW5kaWNhdGUgdXBsb2FkaW5nIGlzIGluIHByb2dyZXNzXG4gICAgaW5wdXRSZWYuY3VycmVudD8uY2xpY2soKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVGaWxlU2VsZWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChpbnB1dFJlZi5jdXJyZW50ICYmIGlucHV0UmVmLmN1cnJlbnQuZmlsZXMpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRmlsZSA9IGlucHV0UmVmLmN1cnJlbnQuZmlsZXNbMF07XG5cbiAgICAgIGlmIChzZWxlY3RlZEZpbGUpIHtcbiAgICAgICAgXG4gICAgICAgICAgXG5cbiAgICAgICBcblxuICAgICAgICBcbiAgICAgICAgc2V0VXBsb2FkZWRGaWxlTmFtZShzZWxlY3RlZEZpbGUubmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUNsaWNrID0gKCkgPT4ge1xuICAgIC8vIEFkZCBsb2dpYyB0byBkZWxldGUgdGhlIHVwbG9hZGVkIGZpbGUgaWYgbmVlZGVkLlxuICAgIC8vIFlvdSBtYXkgd2FudCB0byBjbGVhciB0aGUgc3RhdGUgYW5kIG5vdGlmeSB0aGUgcGFyZW50IGNvbXBvbmVudC5cbiAgICBzZXRGaWxlVXJsKG51bGwpO1xuICAgIHNldFVwbG9hZGVkRmlsZU5hbWUobnVsbCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYy11cGxvYWRDb250YWluZXJcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgIGFjY2VwdD1cIi5wbmdcIlxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fVxuICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpbGVTZWxlY3R9XG4gICAgICAgIC8+XG4gICAgICAgIDxGYUNsb3VkVXBsb2FkQWx0IGNsYXNzTmFtZT1cInVwbG9hZEljb25cIiBvbkNsaWNrPXtoYW5kbGVVcGxvYWRDbGlja30gLz5cblxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInVwbG9hZC1idXR0b25cIiBvbkNsaWNrPXtoYW5kbGVVcGxvYWRDbGlja30+XG4gICAgICAgICAgVXBsb2FkIEZpbGVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAge3VwbG9hZFN1Y2Nlc3MgPT09IGZhbHNlID8gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBjb2xvcjogJ2JsYWNrJywgcGFkZGluZzogJzEwcHgnIH19PlxuICAgICAgICAgIEVycm9yOiB7ZXJyb3JNZXNzYWdlfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiB1cGxvYWRlZEZpbGVOYW1lID8gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI2NjYycsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgICAgICAgICAgbWFyZ2luVG9wOiAnMTBweCcsXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiAnNTBweCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFVwbG9hZGVkIEZpbGU6IHt1cGxvYWRlZEZpbGVOYW1lfVxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxMHB4JywgYmFja2dyb3VuZDogJ25vbmUnLCBib3JkZXI6ICdub25lJywgY3Vyc29yOiAncG9pbnRlcicgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZUNsaWNrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwiRGVsZXRlXCI+XG4gICAgICAgICAgICAgIDxGYVJlZ1RyYXNoQWx0IC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTQ0ZpbGVVcGxvYWQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkZhQ2xvdWRVcGxvYWRBbHQiLCJGYVJlZ1RyYXNoQWx0IiwiU0NGaWxlVXBsb2FkIiwib25GaWxlVXBsb2FkIiwiaW5wdXRSZWYiLCJ1cGxvYWRTdWNjZXNzIiwic2V0VXBsb2FkU3VjY2VzcyIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsInVwbG9hZGVkRmlsZU5hbWUiLCJzZXRVcGxvYWRlZEZpbGVOYW1lIiwiZmlsZVVybCIsInNldEZpbGVVcmwiLCJoYW5kbGVVcGxvYWRDbGljayIsImN1cnJlbnQiLCJjbGljayIsImhhbmRsZUZpbGVTZWxlY3QiLCJmaWxlcyIsInNlbGVjdGVkRmlsZSIsIm5hbWUiLCJoYW5kbGVEZWxldGVDbGljayIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsImFjY2VwdCIsInN0eWxlIiwiZGlzcGxheSIsInJlZiIsIm9uQ2hhbmdlIiwib25DbGljayIsImJ1dHRvbiIsImFsaWduSXRlbXMiLCJjb2xvciIsInBhZGRpbmciLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwiYmFja2dyb3VuZCIsImN1cnNvciIsInNwYW4iLCJyb2xlIiwiYXJpYS1sYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SCFileUpload.tsx\n"));

/***/ })

});