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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst SCFileUpload = (param)=>{\n    let { onFileSelected, fileLocation, onUploadComplete } = param;\n    _s();\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [uploadSuccess, setUploadSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [uploadedFileName, setUploadedFileName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleUploadClick = ()=>{\n        var _inputRef_current;\n        setErrorMessage(null);\n        setUploadSuccess(null); // Set to null to indicate uploading is in progress\n        (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.click();\n    };\n    const handleFileSelect = async ()=>{\n        if (inputRef.current && inputRef.current.files) {\n            const selectedFile = inputRef.current.files[0];\n            if (selectedFile) {\n                // Rest of your file handling code remains the same\n                // After successful upload, set the uploaded file name\n                setUploadedFileName(selectedFile.name);\n            }\n        }\n    };\n    const handleDeleteClick = ()=>{\n        // Add logic to delete the uploaded file if needed.\n        // You may want to clear the state and notify the parent component.\n        setUploadedFileName(null);\n    // Also, you can add logic to delete the file on the server here.\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sc-uploadContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"file\",\n                        accept: \".png\",\n                        style: {\n                            display: \"none\"\n                        },\n                        ref: inputRef,\n                        onChange: handleFileSelect\n                    }, void 0, false, {\n                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaCloudUploadAlt, {\n                        className: \"uploadIcon\",\n                        onClick: handleUploadClick\n                    }, void 0, false, {\n                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"upload-button\",\n                        onClick: handleUploadClick,\n                        children: \"Upload File\"\n                    }, void 0, false, {\n                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            uploadSuccess === false ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    alignItems: \"center\",\n                    color: \"black\",\n                    padding: \"10px\"\n                },\n                children: [\n                    \"Error: \",\n                    errorMessage\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, undefined) : uploadedFileName ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    color: \"black\",\n                    padding: \"10px\",\n                    border: \"1px solid #ccc\",\n                    borderRadius: \"5px\",\n                    marginTop: \"10px\",\n                    marginLeft: \"10px\"\n                },\n                children: [\n                    \"Uploaded File: \",\n                    uploadedFileName,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            marginLeft: \"10px\",\n                            background: \"none\",\n                            border: \"none\",\n                            cursor: \"pointer\"\n                        },\n                        onClick: handleDeleteClick,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            role: \"img\",\n                            \"aria-label\": \"Delete\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaRegTrashAlt, {}, void 0, false, {\n                                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, undefined) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SCFileUpload, \"CPbNccYMjg4J5O5BLqEm7Lb5nvA=\");\n_c = SCFileUpload;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SCFileUpload);\nvar _c;\n$RefreshReg$(_c, \"SCFileUpload\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TQ0ZpbGVVcGxvYWQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdEO0FBQ2lCO0FBUWpFLE1BQU1LLGVBQTRDO1FBQUMsRUFDakRDLGNBQWMsRUFDZEMsWUFBWSxFQUNaQyxnQkFBZ0IsRUFDakI7O0lBQ0MsTUFBTUMsV0FBV1IsNkNBQU1BLENBQW1CO0lBQzFDLE1BQU0sQ0FBQ1MsZUFBZUMsaUJBQWlCLEdBQUdULCtDQUFRQSxDQUFpQjtJQUNuRSxNQUFNLENBQUNVLGNBQWNDLGdCQUFnQixHQUFHWCwrQ0FBUUEsQ0FBZ0I7SUFDaEUsTUFBTSxDQUFDWSxrQkFBa0JDLG9CQUFvQixHQUFHYiwrQ0FBUUEsQ0FBZ0I7SUFFeEUsTUFBTWMsb0JBQW9CO1lBR3hCUDtRQUZBSSxnQkFBZ0I7UUFDaEJGLGlCQUFpQixPQUFPLG1EQUFtRDtTQUMzRUYsb0JBQUFBLFNBQVNRLE9BQU8sY0FBaEJSLHdDQUFBQSxrQkFBa0JTLEtBQUs7SUFDekI7SUFFQSxNQUFNQyxtQkFBbUI7UUFDdkIsSUFBSVYsU0FBU1EsT0FBTyxJQUFJUixTQUFTUSxPQUFPLENBQUNHLEtBQUssRUFBRTtZQUM5QyxNQUFNQyxlQUFlWixTQUFTUSxPQUFPLENBQUNHLEtBQUssQ0FBQyxFQUFFO1lBRTlDLElBQUlDLGNBQWM7Z0JBQ2hCLG1EQUFtRDtnQkFFbkQsc0RBQXNEO2dCQUN0RE4sb0JBQW9CTSxhQUFhQyxJQUFJO1lBQ3ZDO1FBQ0Y7SUFDRjtJQUVBLE1BQU1DLG9CQUFvQjtRQUN4QixtREFBbUQ7UUFDbkQsbUVBQW1FO1FBQ25FUixvQkFBb0I7SUFDcEIsaUVBQWlFO0lBQ25FO0lBRUEscUJBQ0UsOERBQUNTOzswQkFDQyw4REFBQ0E7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFDQ0MsTUFBSzt3QkFDTEMsUUFBTzt3QkFDUEMsT0FBTzs0QkFBRUMsU0FBUzt3QkFBTzt3QkFDekJDLEtBQUt0Qjt3QkFDTHVCLFVBQVViOzs7Ozs7a0NBRVosOERBQUNoQiw0REFBZ0JBO3dCQUFDc0IsV0FBVTt3QkFBYVEsU0FBU2pCOzs7Ozs7a0NBRWxELDhEQUFDa0I7d0JBQU9ULFdBQVU7d0JBQWdCUSxTQUFTakI7a0NBQW1COzs7Ozs7Ozs7Ozs7WUFLL0ROLGtCQUFrQixzQkFDakIsOERBQUNjO2dCQUFJSyxPQUFPO29CQUFFTSxZQUFZO29CQUFVQyxPQUFPO29CQUFTQyxTQUFTO2dCQUFPOztvQkFBRztvQkFDN0R6Qjs7Ozs7OzRCQUVSRSxpQ0FDRiw4REFBQ1U7Z0JBQ0NLLE9BQU87b0JBQ0xDLFNBQVM7b0JBQ1RLLFlBQVk7b0JBQ1pDLE9BQU87b0JBQ1BDLFNBQVM7b0JBQ1RDLFFBQVE7b0JBQ1JDLGNBQWM7b0JBQ2RDLFdBQVc7b0JBQ1hDLFlBQVk7Z0JBQ2Q7O29CQUNEO29CQUNpQjNCO2tDQUNoQiw4REFBQ29CO3dCQUNDTCxPQUFPOzRCQUFFWSxZQUFZOzRCQUFRQyxZQUFZOzRCQUFRSixRQUFROzRCQUFRSyxRQUFRO3dCQUFVO3dCQUNuRlYsU0FBU1Y7a0NBRVQsNEVBQUNxQjs0QkFBS0MsTUFBSzs0QkFBTUMsY0FBVztzQ0FDMUIsNEVBQUMxQyx5REFBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQUlsQjs7Ozs7OztBQUdWO0dBbkZNQztLQUFBQTtBQXFGTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TQ0ZpbGVVcGxvYWQudHN4P2ZkNzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGYUNsb3VkVXBsb2FkQWx0LCBGYVJlZ1RyYXNoQWx0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuXG5pbnRlcmZhY2UgU0NGaWxlVXBsb2FkUHJvcHMge1xuICBvbkZpbGVTZWxlY3RlZDogKGZpbGU6IEZpbGUpID0+IHZvaWQ7XG4gIGZpbGVMb2NhdGlvbjogc3RyaW5nO1xuICBvblVwbG9hZENvbXBsZXRlOiAoc3VjY2VzczogYm9vbGVhbikgPT4gdm9pZDtcbn1cblxuY29uc3QgU0NGaWxlVXBsb2FkOiBSZWFjdC5GQzxTQ0ZpbGVVcGxvYWRQcm9wcz4gPSAoe1xuICBvbkZpbGVTZWxlY3RlZCxcbiAgZmlsZUxvY2F0aW9uLFxuICBvblVwbG9hZENvbXBsZXRlLFxufSkgPT4ge1xuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcbiAgY29uc3QgW3VwbG9hZFN1Y2Nlc3MsIHNldFVwbG9hZFN1Y2Nlc3NdID0gdXNlU3RhdGU8Ym9vbGVhbiB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFt1cGxvYWRlZEZpbGVOYW1lLCBzZXRVcGxvYWRlZEZpbGVOYW1lXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZVVwbG9hZENsaWNrID0gKCkgPT4ge1xuICAgIHNldEVycm9yTWVzc2FnZShudWxsKTtcbiAgICBzZXRVcGxvYWRTdWNjZXNzKG51bGwpOyAvLyBTZXQgdG8gbnVsbCB0byBpbmRpY2F0ZSB1cGxvYWRpbmcgaXMgaW4gcHJvZ3Jlc3NcbiAgICBpbnB1dFJlZi5jdXJyZW50Py5jbGljaygpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUZpbGVTZWxlY3QgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKGlucHV0UmVmLmN1cnJlbnQgJiYgaW5wdXRSZWYuY3VycmVudC5maWxlcykge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRGaWxlID0gaW5wdXRSZWYuY3VycmVudC5maWxlc1swXTtcblxuICAgICAgaWYgKHNlbGVjdGVkRmlsZSkge1xuICAgICAgICAvLyBSZXN0IG9mIHlvdXIgZmlsZSBoYW5kbGluZyBjb2RlIHJlbWFpbnMgdGhlIHNhbWVcblxuICAgICAgICAvLyBBZnRlciBzdWNjZXNzZnVsIHVwbG9hZCwgc2V0IHRoZSB1cGxvYWRlZCBmaWxlIG5hbWVcbiAgICAgICAgc2V0VXBsb2FkZWRGaWxlTmFtZShzZWxlY3RlZEZpbGUubmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUNsaWNrID0gKCkgPT4ge1xuICAgIC8vIEFkZCBsb2dpYyB0byBkZWxldGUgdGhlIHVwbG9hZGVkIGZpbGUgaWYgbmVlZGVkLlxuICAgIC8vIFlvdSBtYXkgd2FudCB0byBjbGVhciB0aGUgc3RhdGUgYW5kIG5vdGlmeSB0aGUgcGFyZW50IGNvbXBvbmVudC5cbiAgICBzZXRVcGxvYWRlZEZpbGVOYW1lKG51bGwpO1xuICAgIC8vIEFsc28sIHlvdSBjYW4gYWRkIGxvZ2ljIHRvIGRlbGV0ZSB0aGUgZmlsZSBvbiB0aGUgc2VydmVyIGhlcmUuXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYy11cGxvYWRDb250YWluZXJcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgIGFjY2VwdD1cIi5wbmdcIlxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fVxuICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpbGVTZWxlY3R9XG4gICAgICAgIC8+XG4gICAgICAgIDxGYUNsb3VkVXBsb2FkQWx0IGNsYXNzTmFtZT1cInVwbG9hZEljb25cIiBvbkNsaWNrPXtoYW5kbGVVcGxvYWRDbGlja30gLz5cbiAgICAgICAgXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidXBsb2FkLWJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZVVwbG9hZENsaWNrfT5cbiAgICAgICAgICBVcGxvYWQgRmlsZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7dXBsb2FkU3VjY2VzcyA9PT0gZmFsc2UgPyAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIGNvbG9yOiAnYmxhY2snLCBwYWRkaW5nOiAnMTBweCcgfX0+XG4gICAgICAgICAgRXJyb3I6IHtlcnJvck1lc3NhZ2V9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IHVwbG9hZGVkRmlsZU5hbWUgPyAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjY2NjJyxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6ICcxMHB4JyxcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICcxMHB4J1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBVcGxvYWRlZCBGaWxlOiB7dXBsb2FkZWRGaWxlTmFtZX1cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMTBweCcsIGJhY2tncm91bmQ6ICdub25lJywgYm9yZGVyOiAnbm9uZScsIGN1cnNvcjogJ3BvaW50ZXInIH19XG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEZWxldGVDbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD1cIkRlbGV0ZVwiPlxuICAgICAgICAgICAgICA8RmFSZWdUcmFzaEFsdCAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU0NGaWxlVXBsb2FkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJGYUNsb3VkVXBsb2FkQWx0IiwiRmFSZWdUcmFzaEFsdCIsIlNDRmlsZVVwbG9hZCIsIm9uRmlsZVNlbGVjdGVkIiwiZmlsZUxvY2F0aW9uIiwib25VcGxvYWRDb21wbGV0ZSIsImlucHV0UmVmIiwidXBsb2FkU3VjY2VzcyIsInNldFVwbG9hZFN1Y2Nlc3MiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJ1cGxvYWRlZEZpbGVOYW1lIiwic2V0VXBsb2FkZWRGaWxlTmFtZSIsImhhbmRsZVVwbG9hZENsaWNrIiwiY3VycmVudCIsImNsaWNrIiwiaGFuZGxlRmlsZVNlbGVjdCIsImZpbGVzIiwic2VsZWN0ZWRGaWxlIiwibmFtZSIsImhhbmRsZURlbGV0ZUNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwiYWNjZXB0Iiwic3R5bGUiLCJkaXNwbGF5IiwicmVmIiwib25DaGFuZ2UiLCJvbkNsaWNrIiwiYnV0dG9uIiwiYWxpZ25JdGVtcyIsImNvbG9yIiwicGFkZGluZyIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJiYWNrZ3JvdW5kIiwiY3Vyc29yIiwic3BhbiIsInJvbGUiLCJhcmlhLWxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SCFileUpload.tsx\n"));

/***/ })

});