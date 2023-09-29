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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst SCFileUpload = (param)=>{\n    let { onFileUpload } = param;\n    _s();\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [uploadSuccess, setUploadSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [uploadedFileName, setUploadedFileName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [fileUrl, setFileUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleUploadClick = ()=>{\n        var _inputRef_current;\n        setErrorMessage(null);\n        setUploadSuccess(null); // Set to null to indicate uploading is in progress\n        (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.click();\n    };\n    const handleFileSelect = async ()=>{\n        if (inputRef.current && inputRef.current.files) {\n            const selectedFile = inputRef.current.files[0];\n            if (selectedFile) {\n                // Assume you have a function to upload the file and get its URL\n                // Replace this with your actual file upload logic\n                // const uploadFileAndGetUrl = async (selectedFile: File) => {\n                // };\n                // Set the uploaded file name\n                setUploadedFileName(selectedFile.name);\n            }\n        }\n    };\n    const handleDeleteClick = ()=>{\n        // Add logic to delete the uploaded file if needed.\n        // You may want to clear the state and notify the parent component.\n        setFileUrl(null);\n        setUploadedFileName(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sc-uploadContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"file\",\n                        accept: \".png\",\n                        style: {\n                            display: \"none\"\n                        },\n                        ref: inputRef,\n                        onChange: handleFileSelect\n                    }, void 0, false, {\n                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaCloudUploadAlt, {\n                        className: \"uploadIcon\",\n                        onClick: handleUploadClick\n                    }, void 0, false, {\n                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"upload-button\",\n                        onClick: handleUploadClick,\n                        children: \"Upload File\"\n                    }, void 0, false, {\n                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            uploadSuccess === false ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    alignItems: \"center\",\n                    color: \"black\",\n                    padding: \"10px\"\n                },\n                children: [\n                    \"Error: \",\n                    errorMessage\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, undefined) : uploadedFileName ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    color: \"black\",\n                    padding: \"10px\",\n                    border: \"1px solid #ccc\",\n                    borderRadius: \"5px\",\n                    marginTop: \"10px\",\n                    marginLeft: \"50px\"\n                },\n                children: [\n                    \"Uploaded File: \",\n                    uploadedFileName,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            marginLeft: \"10px\",\n                            background: \"none\",\n                            border: \"none\",\n                            cursor: \"pointer\"\n                        },\n                        onClick: handleDeleteClick,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            role: \"img\",\n                            \"aria-label\": \"Delete\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaRegTrashAlt, {}, void 0, false, {\n                                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, undefined) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SCFileUpload, \"I5YIP9UKYJO5xVnrcr9bn4Lx500=\");\n_c = SCFileUpload;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SCFileUpload);\nvar _c;\n$RefreshReg$(_c, \"SCFileUpload\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TQ0ZpbGVVcGxvYWQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdEO0FBQ2lCO0FBTWpFLE1BQU1LLGVBQTRDO1FBQUMsRUFBRUMsWUFBWSxFQUFFOztJQUNqRSxNQUFNQyxXQUFXTiw2Q0FBTUEsQ0FBbUI7SUFDMUMsTUFBTSxDQUFDTyxlQUFlQyxpQkFBaUIsR0FBR1AsK0NBQVFBLENBQWlCO0lBQ25FLE1BQU0sQ0FBQ1EsY0FBY0MsZ0JBQWdCLEdBQUdULCtDQUFRQSxDQUFnQjtJQUNoRSxNQUFNLENBQUNVLGtCQUFrQkMsb0JBQW9CLEdBQUdYLCtDQUFRQSxDQUFnQjtJQUN4RSxNQUFNLENBQUNZLFNBQVNDLFdBQVcsR0FBR2IsK0NBQVFBLENBQWdCO0lBRXRELE1BQU1jLG9CQUFvQjtZQUd4QlQ7UUFGQUksZ0JBQWdCO1FBQ2hCRixpQkFBaUIsT0FBTyxtREFBbUQ7U0FDM0VGLG9CQUFBQSxTQUFTVSxPQUFPLGNBQWhCVix3Q0FBQUEsa0JBQWtCVyxLQUFLO0lBQ3pCO0lBRUEsTUFBTUMsbUJBQW1CO1FBQ3ZCLElBQUlaLFNBQVNVLE9BQU8sSUFBSVYsU0FBU1UsT0FBTyxDQUFDRyxLQUFLLEVBQUU7WUFDOUMsTUFBTUMsZUFBZWQsU0FBU1UsT0FBTyxDQUFDRyxLQUFLLENBQUMsRUFBRTtZQUU5QyxJQUFJQyxjQUFjO2dCQUNoQixnRUFBZ0U7Z0JBQ2hFLGtEQUFrRDtnQkFDbkQsOERBQThEO2dCQUU1RCxLQUFLO2dCQUtOLDZCQUE2QjtnQkFDN0JSLG9CQUFvQlEsYUFBYUMsSUFBSTtZQUN2QztRQUNGO0lBQ0Y7SUFFQSxNQUFNQyxvQkFBb0I7UUFDeEIsbURBQW1EO1FBQ25ELG1FQUFtRTtRQUNuRVIsV0FBVztRQUNYRixvQkFBb0I7SUFDdEI7SUFFQSxxQkFDRSw4REFBQ1c7OzBCQUNDLDhEQUFDQTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUNDQyxNQUFLO3dCQUNMQyxRQUFPO3dCQUNQQyxPQUFPOzRCQUFFQyxTQUFTO3dCQUFPO3dCQUN6QkMsS0FBS3hCO3dCQUNMeUIsVUFBVWI7Ozs7OztrQ0FFWiw4REFBQ2hCLDREQUFnQkE7d0JBQUNzQixXQUFVO3dCQUFhUSxTQUFTakI7Ozs7OztrQ0FFbEQsOERBQUNrQjt3QkFBT1QsV0FBVTt3QkFBZ0JRLFNBQVNqQjtrQ0FBbUI7Ozs7Ozs7Ozs7OztZQUsvRFIsa0JBQWtCLHNCQUNqQiw4REFBQ2dCO2dCQUFJSyxPQUFPO29CQUFFTSxZQUFZO29CQUFVQyxPQUFPO29CQUFTQyxTQUFTO2dCQUFPOztvQkFBRztvQkFDN0QzQjs7Ozs7OzRCQUVSRSxpQ0FDRiw4REFBQ1k7Z0JBQ0NLLE9BQU87b0JBQ0xDLFNBQVM7b0JBQ1RLLFlBQVk7b0JBQ1pDLE9BQU87b0JBQ1BDLFNBQVM7b0JBQ1RDLFFBQVE7b0JBQ1JDLGNBQWM7b0JBQ2RDLFdBQVc7b0JBQ1hDLFlBQVk7Z0JBQ2Q7O29CQUNEO29CQUNpQjdCO2tDQUNoQiw4REFBQ3NCO3dCQUNDTCxPQUFPOzRCQUFFWSxZQUFZOzRCQUFRQyxZQUFZOzRCQUFRSixRQUFROzRCQUFRSyxRQUFRO3dCQUFVO3dCQUNuRlYsU0FBU1Y7a0NBRVQsNEVBQUNxQjs0QkFBS0MsTUFBSzs0QkFBTUMsY0FBVztzQ0FDMUIsNEVBQUMxQyx5REFBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQUlsQjs7Ozs7OztBQUdWO0dBdkZNQztLQUFBQTtBQXlGTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TQ0ZpbGVVcGxvYWQudHN4P2ZkNzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGYUNsb3VkVXBsb2FkQWx0LCBGYVJlZ1RyYXNoQWx0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuXG5pbnRlcmZhY2UgU0NGaWxlVXBsb2FkUHJvcHMge1xuICBvbkZpbGVVcGxvYWQ6ICh1cmw6IHN0cmluZykgPT4gdm9pZDsgLy8gRnVuY3Rpb24gdG8gcGFzcyB0aGUgVVJMIHRvIHRoZSBwYXJlbnQgY29tcG9uZW50XG59XG5cbmNvbnN0IFNDRmlsZVVwbG9hZDogUmVhY3QuRkM8U0NGaWxlVXBsb2FkUHJvcHM+ID0gKHsgb25GaWxlVXBsb2FkIH0pID0+IHtcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IFt1cGxvYWRTdWNjZXNzLCBzZXRVcGxvYWRTdWNjZXNzXSA9IHVzZVN0YXRlPGJvb2xlYW4gfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbdXBsb2FkZWRGaWxlTmFtZSwgc2V0VXBsb2FkZWRGaWxlTmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2ZpbGVVcmwsIHNldEZpbGVVcmxdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlVXBsb2FkQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0RXJyb3JNZXNzYWdlKG51bGwpO1xuICAgIHNldFVwbG9hZFN1Y2Nlc3MobnVsbCk7IC8vIFNldCB0byBudWxsIHRvIGluZGljYXRlIHVwbG9hZGluZyBpcyBpbiBwcm9ncmVzc1xuICAgIGlucHV0UmVmLmN1cnJlbnQ/LmNsaWNrKCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRmlsZVNlbGVjdCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoaW5wdXRSZWYuY3VycmVudCAmJiBpbnB1dFJlZi5jdXJyZW50LmZpbGVzKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZEZpbGUgPSBpbnB1dFJlZi5jdXJyZW50LmZpbGVzWzBdO1xuXG4gICAgICBpZiAoc2VsZWN0ZWRGaWxlKSB7XG4gICAgICAgIC8vIEFzc3VtZSB5b3UgaGF2ZSBhIGZ1bmN0aW9uIHRvIHVwbG9hZCB0aGUgZmlsZSBhbmQgZ2V0IGl0cyBVUkxcbiAgICAgICAgLy8gUmVwbGFjZSB0aGlzIHdpdGggeW91ciBhY3R1YWwgZmlsZSB1cGxvYWQgbG9naWNcbiAgICAgICAvLyBjb25zdCB1cGxvYWRGaWxlQW5kR2V0VXJsID0gYXN5bmMgKHNlbGVjdGVkRmlsZTogRmlsZSkgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAvLyB9O1xuICAgICAgICAgIFxuXG4gICAgICAgXG5cbiAgICAgICAgLy8gU2V0IHRoZSB1cGxvYWRlZCBmaWxlIG5hbWVcbiAgICAgICAgc2V0VXBsb2FkZWRGaWxlTmFtZShzZWxlY3RlZEZpbGUubmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUNsaWNrID0gKCkgPT4ge1xuICAgIC8vIEFkZCBsb2dpYyB0byBkZWxldGUgdGhlIHVwbG9hZGVkIGZpbGUgaWYgbmVlZGVkLlxuICAgIC8vIFlvdSBtYXkgd2FudCB0byBjbGVhciB0aGUgc3RhdGUgYW5kIG5vdGlmeSB0aGUgcGFyZW50IGNvbXBvbmVudC5cbiAgICBzZXRGaWxlVXJsKG51bGwpO1xuICAgIHNldFVwbG9hZGVkRmlsZU5hbWUobnVsbCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYy11cGxvYWRDb250YWluZXJcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgIGFjY2VwdD1cIi5wbmdcIlxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fVxuICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpbGVTZWxlY3R9XG4gICAgICAgIC8+XG4gICAgICAgIDxGYUNsb3VkVXBsb2FkQWx0IGNsYXNzTmFtZT1cInVwbG9hZEljb25cIiBvbkNsaWNrPXtoYW5kbGVVcGxvYWRDbGlja30gLz5cblxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInVwbG9hZC1idXR0b25cIiBvbkNsaWNrPXtoYW5kbGVVcGxvYWRDbGlja30+XG4gICAgICAgICAgVXBsb2FkIEZpbGVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAge3VwbG9hZFN1Y2Nlc3MgPT09IGZhbHNlID8gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBjb2xvcjogJ2JsYWNrJywgcGFkZGluZzogJzEwcHgnIH19PlxuICAgICAgICAgIEVycm9yOiB7ZXJyb3JNZXNzYWdlfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiB1cGxvYWRlZEZpbGVOYW1lID8gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI2NjYycsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgICAgICAgICAgbWFyZ2luVG9wOiAnMTBweCcsXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiAnNTBweCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFVwbG9hZGVkIEZpbGU6IHt1cGxvYWRlZEZpbGVOYW1lfVxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxMHB4JywgYmFja2dyb3VuZDogJ25vbmUnLCBib3JkZXI6ICdub25lJywgY3Vyc29yOiAncG9pbnRlcicgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZUNsaWNrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwiRGVsZXRlXCI+XG4gICAgICAgICAgICAgIDxGYVJlZ1RyYXNoQWx0IC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTQ0ZpbGVVcGxvYWQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkZhQ2xvdWRVcGxvYWRBbHQiLCJGYVJlZ1RyYXNoQWx0IiwiU0NGaWxlVXBsb2FkIiwib25GaWxlVXBsb2FkIiwiaW5wdXRSZWYiLCJ1cGxvYWRTdWNjZXNzIiwic2V0VXBsb2FkU3VjY2VzcyIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsInVwbG9hZGVkRmlsZU5hbWUiLCJzZXRVcGxvYWRlZEZpbGVOYW1lIiwiZmlsZVVybCIsInNldEZpbGVVcmwiLCJoYW5kbGVVcGxvYWRDbGljayIsImN1cnJlbnQiLCJjbGljayIsImhhbmRsZUZpbGVTZWxlY3QiLCJmaWxlcyIsInNlbGVjdGVkRmlsZSIsIm5hbWUiLCJoYW5kbGVEZWxldGVDbGljayIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsImFjY2VwdCIsInN0eWxlIiwiZGlzcGxheSIsInJlZiIsIm9uQ2hhbmdlIiwib25DbGljayIsImJ1dHRvbiIsImFsaWduSXRlbXMiLCJjb2xvciIsInBhZGRpbmciLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwiYmFja2dyb3VuZCIsImN1cnNvciIsInNwYW4iLCJyb2xlIiwiYXJpYS1sYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SCFileUpload.tsx\n"));

/***/ })

});