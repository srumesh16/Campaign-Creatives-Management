"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/GenerateImg",{

/***/ "./src/pages/GenerateImg.tsx":
/*!***********************************!*\
  !*** ./src/pages/GenerateImg.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GenerateImg; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/header */ \"./src/components/header.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n// pages/result.tsx\n\nvar _s = $RefreshSig$();\n\n\n\nfunction GenerateImg() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { query } = router;\n    // Access the passed variables from the query object\n    const { targetAudience, gender, seasonal, regional, occasion, description, contentType, color, size, imageCount, loading } = query;\n    const [ta, setTa] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [noi, setNoi] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [selectedGenderValue, setSelectedGenderValue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const handleGenderClick = (value)=>{\n        setSelectedGenderValue(value);\n    };\n    const handleInputChange = (e)=>{\n        const { id, value } = e.target;\n        // Use a switch statement or if-else to determine which input field to update\n        switch(id){\n            case \"message\":\n                setMessage(value);\n                break;\n                break;\n            case \"noi\":\n                setNoi(value);\n                break;\n            case \"ta\":\n                setTa(value);\n                break;\n            default:\n                break;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"app-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"sidebar-container2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"banner-header2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"DALL\\xb7E 2 CONFIGURATIONS\"\n                            }, void 0, false, {\n                                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-padding\"\n                        }, void 0, false, {\n                            fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                            className: \"sidebar-divider\"\n                        }, void 0, false, {\n                            fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"form-side-container\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    style: {\n                                        fontWeight: \"bold\",\n                                        fontStyle: \"italic\"\n                                    },\n                                    children: \"AUDIENCE\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"form-row\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"targetAudience\",\n                                            children: [\n                                                \"Target Audience\",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"required\",\n                                                    children: \"*\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 76\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            className: \"basic-input-field\",\n                                            type: \"text\",\n                                            id: \"ta\",\n                                            placeholder: \"20-30 or 35-65\",\n                                            value: ta,\n                                            onChange: handleInputChange\n                                        }, void 0, false, {\n                                            fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"form-row\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"gender\",\n                                            children: [\n                                                \"Gender\",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"required\",\n                                                    children: \"*\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 59\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"radiobuttonGroup2\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: selectedGenderValue === \"Male\" ? \"radiobuttonselected\" : \"radiobutton\",\n                                                    onClick: ()=>handleGenderClick(\"Male\"),\n                                                    children: \"Male\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 33\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: selectedGenderValue === \"Female\" ? \"radiobuttonselected\" : \"radiobutton\",\n                                                    onClick: ()=>handleGenderClick(\"Female\"),\n                                                    children: \"Female\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                                                    lineNumber: 76,\n                                                    columnNumber: 33\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: selectedGenderValue === \"Both\" ? \"radiobuttonselected\" : \"radiobutton\",\n                                                    onClick: ()=>handleGenderClick(\"Both\"),\n                                                    children: \"Both\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                                                    lineNumber: 79,\n                                                    columnNumber: 33\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n        lineNumber: 54,\n        columnNumber: 9\n    }, this);\n}\n_s(GenerateImg, \"a+BYFb/6oIQOOy4S1mIGwC7tqPI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = GenerateImg;\nvar _c;\n$RefreshReg$(_c, \"GenerateImg\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bWcudHN4P2U1OGEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvcmVzdWx0LnRzeFxuaW1wb3J0IEhlYWRlciBmcm9tICdAL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2VuZXJhdGVJbWcoKSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgeyBxdWVyeSB9ID0gcm91dGVyO1xuXG4gICAgLy8gQWNjZXNzIHRoZSBwYXNzZWQgdmFyaWFibGVzIGZyb20gdGhlIHF1ZXJ5IG9iamVjdFxuICAgIGNvbnN0IHtcbiAgICAgICAgdGFyZ2V0QXVkaWVuY2UsXG4gICAgICAgIGdlbmRlcixcbiAgICAgICAgc2Vhc29uYWwsXG4gICAgICAgIHJlZ2lvbmFsLFxuICAgICAgICBvY2Nhc2lvbixcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGNvbnRlbnRUeXBlLFxuICAgICAgICBjb2xvcixcbiAgICAgICAgc2l6ZSxcbiAgICAgICAgaW1hZ2VDb3VudCxcbiAgICAgICAgbG9hZGluZ1xuICAgIH0gPSBxdWVyeTtcblxuICAgIGNvbnN0IFt0YSwgc2V0VGFdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbbm9pLCBzZXROb2ldID0gdXNlU3RhdGUoJycpO1xuXG4gICAgY29uc3QgW3NlbGVjdGVkR2VuZGVyVmFsdWUsIHNldFNlbGVjdGVkR2VuZGVyVmFsdWVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3QgaGFuZGxlR2VuZGVyQ2xpY2sgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZEdlbmRlclZhbHVlKHZhbHVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgeyBpZCwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIFxuICAgICAgICAvLyBVc2UgYSBzd2l0Y2ggc3RhdGVtZW50IG9yIGlmLWVsc2UgdG8gZGV0ZXJtaW5lIHdoaWNoIGlucHV0IGZpZWxkIHRvIHVwZGF0ZVxuICAgICAgICBzd2l0Y2ggKGlkKSB7XG4gICAgICAgICAgY2FzZSAnbWVzc2FnZSc6XG4gICAgICAgICAgICBzZXRNZXNzYWdlKHZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnbm9pJzpcbiAgICAgICAgICAgIHNldE5vaSh2YWx1ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICd0YSc6XG4gICAgICAgICAgICBzZXRUYSh2YWx1ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItY29udGFpbmVyMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1oZWFkZXIyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5EQUxMwrdFIDIgQ09ORklHVVJBVElPTlM8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXBhZGRpbmdcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInNpZGViYXItZGl2aWRlclwiPjwvaHI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1zaWRlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBmb250U3R5bGU6ICdpdGFsaWMnIH19PkFVRElFTkNFPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGFyZ2V0QXVkaWVuY2VcIj5UYXJnZXQgQXVkaWVuY2U8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYmFzaWMtaW5wdXQtZmllbGRcIiB0eXBlPVwidGV4dFwiIGlkPVwidGFcIiBwbGFjZWhvbGRlcj1cIjIwLTMwIG9yIDM1LTY1XCIgdmFsdWU9e3RhfSBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZ2VuZGVyXCI+R2VuZGVyPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYWRpb2J1dHRvbkdyb3VwMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c2VsZWN0ZWRHZW5kZXJWYWx1ZSA9PT0gJ01hbGUnID8gXCJyYWRpb2J1dHRvbnNlbGVjdGVkXCIgOiBcInJhZGlvYnV0dG9uXCJ9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUdlbmRlckNsaWNrKCdNYWxlJyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3NlbGVjdGVkR2VuZGVyVmFsdWUgPT09ICdGZW1hbGUnID8gXCJyYWRpb2J1dHRvbnNlbGVjdGVkXCIgOiBcInJhZGlvYnV0dG9uXCJ9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUdlbmRlckNsaWNrKCdGZW1hbGUnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGZW1hbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzZWxlY3RlZEdlbmRlclZhbHVlID09PSAnQm90aCcgPyBcInJhZGlvYnV0dG9uc2VsZWN0ZWRcIiA6IFwicmFkaW9idXR0b25cIn0gb25DbGljaz17KCkgPT4gaGFuZGxlR2VuZGVyQ2xpY2soJ0JvdGgnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21haW4+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwiR2VuZXJhdGVJbWciLCJyb3V0ZXIiLCJxdWVyeSIsInRhcmdldEF1ZGllbmNlIiwiZ2VuZGVyIiwic2Vhc29uYWwiLCJyZWdpb25hbCIsIm9jY2FzaW9uIiwiZGVzY3JpcHRpb24iLCJjb250ZW50VHlwZSIsImNvbG9yIiwic2l6ZSIsImltYWdlQ291bnQiLCJsb2FkaW5nIiwidGEiLCJzZXRUYSIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwibm9pIiwic2V0Tm9pIiwic2VsZWN0ZWRHZW5kZXJWYWx1ZSIsInNldFNlbGVjdGVkR2VuZGVyVmFsdWUiLCJoYW5kbGVHZW5kZXJDbGljayIsInZhbHVlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwiaWQiLCJ0YXJnZXQiLCJtYWluIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImhyIiwic3R5bGUiLCJmb250V2VpZ2h0IiwiZm9udFN0eWxlIiwibGFiZWwiLCJodG1sRm9yIiwic3BhbiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/GenerateImg.tsx\n"));

/***/ })

});