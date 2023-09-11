"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/step2",{

/***/ "./src/components/FileUpload.tsx":
/*!***************************************!*\
  !*** ./src/components/FileUpload.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst FileUpload = (param)=>{\n    let { onFileSelected, fileLocation, onUploadComplete } = param;\n    _s();\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleFileSelect = async ()=>{\n        if (inputRef.current && inputRef.current.files) {\n            const selectedFile = inputRef.current.files[0];\n            if (selectedFile) {\n                onFileSelected(selectedFile);\n                // Create a FormData object to send the file\n                const formData = new FormData();\n                formData.append(\"file\", selectedFile);\n                // Make a POST request to your API with the fileLocation query parameter\n                try {\n                    const response = await fetch(\"/api/upload?fileLocation=\".concat(encodeURIComponent(fileLocation)), {\n                        method: \"POST\",\n                        body: formData\n                    });\n                    if (response.ok) {\n                        const data = await response.json();\n                        console.log(data);\n                        onUploadComplete();\n                    } else {\n                        console.error(\"Failed to upload the file.\");\n                    }\n                } catch (error) {\n                    console.error(\"Error uploading the file:\", error);\n                }\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"file\",\n                accept: \".png\",\n                style: {\n                    display: \"none\"\n                },\n                ref: inputRef,\n                onChange: handleFileSelect\n            }, void 0, false, {\n                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/FileUpload.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{\n                    var _inputRef_current;\n                    return (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.click();\n                },\n                children: \"Upload Template\"\n            }, void 0, false, {\n                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/FileUpload.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/FileUpload.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FileUpload, \"iD9XNNsNOlNDckBemnvlLS+aHYk=\");\n_c = FileUpload;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FileUpload);\nvar _c;\n$RefreshReg$(_c, \"FileUpload\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GaWxlVXBsb2FkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXNDO0FBUXRDLE1BQU1FLGFBQXdDO1FBQUMsRUFBRUMsY0FBYyxFQUFFQyxZQUFZLEVBQUVDLGdCQUFnQixFQUFFOztJQUMvRixNQUFNQyxXQUFXTCw2Q0FBTUEsQ0FBbUI7SUFFMUMsTUFBTU0sbUJBQW1CO1FBQ3ZCLElBQUlELFNBQVNFLE9BQU8sSUFBSUYsU0FBU0UsT0FBTyxDQUFDQyxLQUFLLEVBQUU7WUFDOUMsTUFBTUMsZUFBZUosU0FBU0UsT0FBTyxDQUFDQyxLQUFLLENBQUMsRUFBRTtZQUM5QyxJQUFJQyxjQUFjO2dCQUNoQlAsZUFBZU87Z0JBRWYsNENBQTRDO2dCQUM1QyxNQUFNQyxXQUFXLElBQUlDO2dCQUNyQkQsU0FBU0UsTUFBTSxDQUFDLFFBQVFIO2dCQUV4Qix3RUFBd0U7Z0JBQ3hFLElBQUk7b0JBQ0YsTUFBTUksV0FBVyxNQUFNQyxNQUFNLDRCQUE2RCxPQUFqQ0MsbUJBQW1CWixnQkFBaUI7d0JBQzNGYSxRQUFRO3dCQUNSQyxNQUFNUDtvQkFDUjtvQkFFQSxJQUFJRyxTQUFTSyxFQUFFLEVBQUU7d0JBQ2YsTUFBTUMsT0FBTyxNQUFNTixTQUFTTyxJQUFJO3dCQUNoQ0MsUUFBUUMsR0FBRyxDQUFDSDt3QkFDWmY7b0JBQ0YsT0FBTzt3QkFDTGlCLFFBQVFFLEtBQUssQ0FBQztvQkFDaEI7Z0JBQ0YsRUFBRSxPQUFPQSxPQUFPO29CQUNkRixRQUFRRSxLQUFLLENBQUMsNkJBQTZCQTtnQkFDN0M7WUFDRjtRQUNGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDQztnQkFDQ0MsTUFBSztnQkFDTEMsUUFBTztnQkFDUEMsT0FBTztvQkFBRUMsU0FBUztnQkFBTztnQkFDekJDLEtBQUt6QjtnQkFDTDBCLFVBQVV6Qjs7Ozs7OzBCQUVaLDhEQUFDMEI7Z0JBQU9DLFNBQVM7d0JBQU01Qjs0QkFBQUEsb0JBQUFBLFNBQVNFLE9BQU8sY0FBaEJGLHdDQUFBQSxrQkFBa0I2QixLQUFLOzswQkFBSTs7Ozs7Ozs7Ozs7O0FBR3hEO0dBOUNNakM7S0FBQUE7QUFnRE4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmlsZVVwbG9hZC50c3g/Njk0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgRmlsZVVwbG9hZFByb3BzIHtcbiAgb25GaWxlU2VsZWN0ZWQ6IChmaWxlOiBGaWxlKSA9PiB2b2lkO1xuICBmaWxlTG9jYXRpb246IHN0cmluZzsgLy8gQWRkIGEgZmlsZUxvY2F0aW9uIHByb3BcbiAgb25VcGxvYWRDb21wbGV0ZTogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgRmlsZVVwbG9hZDogUmVhY3QuRkM8RmlsZVVwbG9hZFByb3BzPiA9ICh7IG9uRmlsZVNlbGVjdGVkLCBmaWxlTG9jYXRpb24sIG9uVXBsb2FkQ29tcGxldGUgfSkgPT4ge1xuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcblxuICBjb25zdCBoYW5kbGVGaWxlU2VsZWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChpbnB1dFJlZi5jdXJyZW50ICYmIGlucHV0UmVmLmN1cnJlbnQuZmlsZXMpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRmlsZSA9IGlucHV0UmVmLmN1cnJlbnQuZmlsZXNbMF07XG4gICAgICBpZiAoc2VsZWN0ZWRGaWxlKSB7XG4gICAgICAgIG9uRmlsZVNlbGVjdGVkKHNlbGVjdGVkRmlsZSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGEgRm9ybURhdGEgb2JqZWN0IHRvIHNlbmQgdGhlIGZpbGVcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgc2VsZWN0ZWRGaWxlKTtcblxuICAgICAgICAvLyBNYWtlIGEgUE9TVCByZXF1ZXN0IHRvIHlvdXIgQVBJIHdpdGggdGhlIGZpbGVMb2NhdGlvbiBxdWVyeSBwYXJhbWV0ZXJcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL3VwbG9hZD9maWxlTG9jYXRpb249JHtlbmNvZGVVUklDb21wb25lbnQoZmlsZUxvY2F0aW9uKX1gLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBvblVwbG9hZENvbXBsZXRlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byB1cGxvYWQgdGhlIGZpbGUuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwbG9hZGluZyB0aGUgZmlsZTonLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgYWNjZXB0PVwiLnBuZ1wiXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fVxuICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlRmlsZVNlbGVjdH1cbiAgICAgIC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGlucHV0UmVmLmN1cnJlbnQ/LmNsaWNrKCl9PlVwbG9hZCBUZW1wbGF0ZTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsZVVwbG9hZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsIkZpbGVVcGxvYWQiLCJvbkZpbGVTZWxlY3RlZCIsImZpbGVMb2NhdGlvbiIsIm9uVXBsb2FkQ29tcGxldGUiLCJpbnB1dFJlZiIsImhhbmRsZUZpbGVTZWxlY3QiLCJjdXJyZW50IiwiZmlsZXMiLCJzZWxlY3RlZEZpbGUiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicmVzcG9uc2UiLCJmZXRjaCIsImVuY29kZVVSSUNvbXBvbmVudCIsIm1ldGhvZCIsImJvZHkiLCJvayIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiZGl2IiwiaW5wdXQiLCJ0eXBlIiwiYWNjZXB0Iiwic3R5bGUiLCJkaXNwbGF5IiwicmVmIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwiY2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/FileUpload.tsx\n"));

/***/ })

});