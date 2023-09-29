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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst SCFileUpload = (param)=>{\n    let { fileLocation } = param;\n    _s();\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [uploadSuccess, setUploadSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [uploadedFileName, setUploadedFileName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleUploadClick = ()=>{\n        var _inputRef_current;\n        setErrorMessage(null);\n        setUploadSuccess(null); // Set to null to indicate uploading is in progress\n        (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.click();\n    };\n    const handleFileSelect = async ()=>{\n        if (inputRef.current && inputRef.current.files) {\n            const selectedFile = inputRef.current.files[0];\n            if (selectedFile) {\n                // Rest of your file handling code remains the same\n                // After successful upload, set the uploaded file name\n                setUploadedFileName(selectedFile.name);\n            }\n        }\n    };\n    const handleDeleteClick = ()=>{\n        // Add logic to delete the uploaded file if needed.\n        // You may want to clear the state and notify the parent component.\n        setUploadedFileName(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sc-uploadContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"file\",\n                        accept: \".png\",\n                        style: {\n                            display: \"none\"\n                        },\n                        ref: inputRef,\n                        onChange: handleFileSelect\n                    }, void 0, false, {\n                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaCloudUploadAlt, {\n                        className: \"uploadIcon\",\n                        onClick: handleUploadClick\n                    }, void 0, false, {\n                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"upload-button\",\n                        onClick: handleUploadClick,\n                        children: \"Upload File\"\n                    }, void 0, false, {\n                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            uploadSuccess === false ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    alignItems: \"center\",\n                    color: \"black\",\n                    padding: \"10px\"\n                },\n                children: [\n                    \"Error: \",\n                    errorMessage\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, undefined) : uploadedFileName ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    color: \"black\",\n                    padding: \"10px\",\n                    border: \"1px solid #ccc\",\n                    borderRadius: \"5px\",\n                    marginTop: \"10px\",\n                    marginLeft: \"50px\"\n                },\n                children: [\n                    \"Uploaded File: \",\n                    uploadedFileName,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            marginLeft: \"10px\",\n                            background: \"none\",\n                            border: \"none\",\n                            cursor: \"pointer\"\n                        },\n                        onClick: handleDeleteClick,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            role: \"img\",\n                            \"aria-label\": \"Delete\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaRegTrashAlt, {}, void 0, false, {\n                                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, undefined) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/SCFileUpload.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SCFileUpload, \"CPbNccYMjg4J5O5BLqEm7Lb5nvA=\");\n_c = SCFileUpload;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SCFileUpload);\nvar _c;\n$RefreshReg$(_c, \"SCFileUpload\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TQ0ZpbGVVcGxvYWQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdEO0FBQ2lCO0FBUWpFLE1BQU1LLGVBQTRDO1FBQUMsRUFFakRDLFlBQVksRUFFYjs7SUFDQyxNQUFNQyxXQUFXTiw2Q0FBTUEsQ0FBbUI7SUFDMUMsTUFBTSxDQUFDTyxlQUFlQyxpQkFBaUIsR0FBR1AsK0NBQVFBLENBQWlCO0lBQ25FLE1BQU0sQ0FBQ1EsY0FBY0MsZ0JBQWdCLEdBQUdULCtDQUFRQSxDQUFnQjtJQUNoRSxNQUFNLENBQUNVLGtCQUFrQkMsb0JBQW9CLEdBQUdYLCtDQUFRQSxDQUFnQjtJQUV4RSxNQUFNWSxvQkFBb0I7WUFHeEJQO1FBRkFJLGdCQUFnQjtRQUNoQkYsaUJBQWlCLE9BQU8sbURBQW1EO1NBQzNFRixvQkFBQUEsU0FBU1EsT0FBTyxjQUFoQlIsd0NBQUFBLGtCQUFrQlMsS0FBSztJQUN6QjtJQUVBLE1BQU1DLG1CQUFtQjtRQUN2QixJQUFJVixTQUFTUSxPQUFPLElBQUlSLFNBQVNRLE9BQU8sQ0FBQ0csS0FBSyxFQUFFO1lBQzlDLE1BQU1DLGVBQWVaLFNBQVNRLE9BQU8sQ0FBQ0csS0FBSyxDQUFDLEVBQUU7WUFFOUMsSUFBSUMsY0FBYztnQkFDaEIsbURBQW1EO2dCQUVuRCxzREFBc0Q7Z0JBQ3RETixvQkFBb0JNLGFBQWFDLElBQUk7WUFDdkM7UUFDRjtJQUNGO0lBRUEsTUFBTUMsb0JBQW9CO1FBQ3hCLG1EQUFtRDtRQUNuRCxtRUFBbUU7UUFDbkVSLG9CQUFvQjtJQUV0QjtJQUVBLHFCQUNFLDhEQUFDUzs7MEJBQ0MsOERBQUNBO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQ0NDLE1BQUs7d0JBQ0xDLFFBQU87d0JBQ1BDLE9BQU87NEJBQUVDLFNBQVM7d0JBQU87d0JBQ3pCQyxLQUFLdEI7d0JBQ0x1QixVQUFVYjs7Ozs7O2tDQUVaLDhEQUFDZCw0REFBZ0JBO3dCQUFDb0IsV0FBVTt3QkFBYVEsU0FBU2pCOzs7Ozs7a0NBRWxELDhEQUFDa0I7d0JBQU9ULFdBQVU7d0JBQWdCUSxTQUFTakI7a0NBQW1COzs7Ozs7Ozs7Ozs7WUFLL0ROLGtCQUFrQixzQkFDakIsOERBQUNjO2dCQUFJSyxPQUFPO29CQUFFTSxZQUFZO29CQUFVQyxPQUFPO29CQUFTQyxTQUFTO2dCQUFPOztvQkFBRztvQkFDN0R6Qjs7Ozs7OzRCQUVSRSxpQ0FDRiw4REFBQ1U7Z0JBQ0NLLE9BQU87b0JBQ0xDLFNBQVM7b0JBQ1RLLFlBQVk7b0JBQ1pDLE9BQU87b0JBQ1BDLFNBQVM7b0JBQ1RDLFFBQVE7b0JBQ1JDLGNBQWM7b0JBQ2RDLFdBQVc7b0JBQ1hDLFlBQVk7Z0JBQ2Q7O29CQUNEO29CQUNpQjNCO2tDQUNoQiw4REFBQ29CO3dCQUNDTCxPQUFPOzRCQUFFWSxZQUFZOzRCQUFRQyxZQUFZOzRCQUFRSixRQUFROzRCQUFRSyxRQUFRO3dCQUFVO3dCQUNuRlYsU0FBU1Y7a0NBRVQsNEVBQUNxQjs0QkFBS0MsTUFBSzs0QkFBTUMsY0FBVztzQ0FDMUIsNEVBQUN4Qyx5REFBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQUlsQjs7Ozs7OztBQUdWO0dBbkZNQztLQUFBQTtBQXFGTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TQ0ZpbGVVcGxvYWQudHN4P2ZkNzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGYUNsb3VkVXBsb2FkQWx0LCBGYVJlZ1RyYXNoQWx0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuXG5pbnRlcmZhY2UgU0NGaWxlVXBsb2FkUHJvcHMge1xuICBcbiAgZmlsZUxvY2F0aW9uOiBzdHJpbmc7XG4gIFxufVxuXG5jb25zdCBTQ0ZpbGVVcGxvYWQ6IFJlYWN0LkZDPFNDRmlsZVVwbG9hZFByb3BzPiA9ICh7XG4gXG4gIGZpbGVMb2NhdGlvblxuICBcbn0pID0+IHtcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IFt1cGxvYWRTdWNjZXNzLCBzZXRVcGxvYWRTdWNjZXNzXSA9IHVzZVN0YXRlPGJvb2xlYW4gfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbdXBsb2FkZWRGaWxlTmFtZSwgc2V0VXBsb2FkZWRGaWxlTmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBoYW5kbGVVcGxvYWRDbGljayA9ICgpID0+IHtcbiAgICBzZXRFcnJvck1lc3NhZ2UobnVsbCk7XG4gICAgc2V0VXBsb2FkU3VjY2VzcyhudWxsKTsgLy8gU2V0IHRvIG51bGwgdG8gaW5kaWNhdGUgdXBsb2FkaW5nIGlzIGluIHByb2dyZXNzXG4gICAgaW5wdXRSZWYuY3VycmVudD8uY2xpY2soKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVGaWxlU2VsZWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChpbnB1dFJlZi5jdXJyZW50ICYmIGlucHV0UmVmLmN1cnJlbnQuZmlsZXMpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRmlsZSA9IGlucHV0UmVmLmN1cnJlbnQuZmlsZXNbMF07XG5cbiAgICAgIGlmIChzZWxlY3RlZEZpbGUpIHtcbiAgICAgICAgLy8gUmVzdCBvZiB5b3VyIGZpbGUgaGFuZGxpbmcgY29kZSByZW1haW5zIHRoZSBzYW1lXG5cbiAgICAgICAgLy8gQWZ0ZXIgc3VjY2Vzc2Z1bCB1cGxvYWQsIHNldCB0aGUgdXBsb2FkZWQgZmlsZSBuYW1lXG4gICAgICAgIHNldFVwbG9hZGVkRmlsZU5hbWUoc2VsZWN0ZWRGaWxlLm5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGVDbGljayA9ICgpID0+IHtcbiAgICAvLyBBZGQgbG9naWMgdG8gZGVsZXRlIHRoZSB1cGxvYWRlZCBmaWxlIGlmIG5lZWRlZC5cbiAgICAvLyBZb3UgbWF5IHdhbnQgdG8gY2xlYXIgdGhlIHN0YXRlIGFuZCBub3RpZnkgdGhlIHBhcmVudCBjb21wb25lbnQuXG4gICAgc2V0VXBsb2FkZWRGaWxlTmFtZShudWxsKTtcbiAgICBcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjLXVwbG9hZENvbnRhaW5lclwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgYWNjZXB0PVwiLnBuZ1wiXG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19XG4gICAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRmlsZVNlbGVjdH1cbiAgICAgICAgLz5cbiAgICAgICAgPEZhQ2xvdWRVcGxvYWRBbHQgY2xhc3NOYW1lPVwidXBsb2FkSWNvblwiIG9uQ2xpY2s9e2hhbmRsZVVwbG9hZENsaWNrfSAvPlxuICAgICAgICBcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ1cGxvYWQtYnV0dG9uXCIgb25DbGljaz17aGFuZGxlVXBsb2FkQ2xpY2t9PlxuICAgICAgICAgIFVwbG9hZCBGaWxlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHt1cGxvYWRTdWNjZXNzID09PSBmYWxzZSA/IChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgY29sb3I6ICdibGFjaycsIHBhZGRpbmc6ICcxMHB4JyB9fT5cbiAgICAgICAgICBFcnJvcjoge2Vycm9yTWVzc2FnZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogdXBsb2FkZWRGaWxlTmFtZSA/IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICAgICAgcGFkZGluZzogJzEwcHgnLFxuICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNjY2MnLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgICAgICAgIG1hcmdpblRvcDogJzEwcHgnLFxuICAgICAgICAgICAgbWFyZ2luTGVmdDogJzUwcHgnXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFVwbG9hZGVkIEZpbGU6IHt1cGxvYWRlZEZpbGVOYW1lfVxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxMHB4JywgYmFja2dyb3VuZDogJ25vbmUnLCBib3JkZXI6ICdub25lJywgY3Vyc29yOiAncG9pbnRlcicgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZUNsaWNrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwiRGVsZXRlXCI+XG4gICAgICAgICAgICAgIDxGYVJlZ1RyYXNoQWx0IC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTQ0ZpbGVVcGxvYWQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkZhQ2xvdWRVcGxvYWRBbHQiLCJGYVJlZ1RyYXNoQWx0IiwiU0NGaWxlVXBsb2FkIiwiZmlsZUxvY2F0aW9uIiwiaW5wdXRSZWYiLCJ1cGxvYWRTdWNjZXNzIiwic2V0VXBsb2FkU3VjY2VzcyIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsInVwbG9hZGVkRmlsZU5hbWUiLCJzZXRVcGxvYWRlZEZpbGVOYW1lIiwiaGFuZGxlVXBsb2FkQ2xpY2siLCJjdXJyZW50IiwiY2xpY2siLCJoYW5kbGVGaWxlU2VsZWN0IiwiZmlsZXMiLCJzZWxlY3RlZEZpbGUiLCJuYW1lIiwiaGFuZGxlRGVsZXRlQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJhY2NlcHQiLCJzdHlsZSIsImRpc3BsYXkiLCJyZWYiLCJvbkNoYW5nZSIsIm9uQ2xpY2siLCJidXR0b24iLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJwYWRkaW5nIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsImJhY2tncm91bmQiLCJjdXJzb3IiLCJzcGFuIiwicm9sZSIsImFyaWEtbGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SCFileUpload.tsx\n"));

/***/ })

});