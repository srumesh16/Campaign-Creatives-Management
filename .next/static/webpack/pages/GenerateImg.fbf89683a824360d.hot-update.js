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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GenerateImg; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/header */ \"./src/components/header.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n// pages/result.tsx\n\nvar _s = $RefreshSig$();\n\n\n\nfunction GenerateImg() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { query } = router;\n    // Access the passed variables from the query object\n    const { targetAudience, gender, seasonal, regional, occasion, description, contentType, color, size, imageCount, loading } = query;\n    const [ta, setTa] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [noi, setNoi] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [selectedGenderValue, setSelectedGenderValue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const handleGenderClick = (value)=>{\n        setSelectedGenderValue(value);\n    };\n    const handleInputChange = (e)=>{\n        const { id, value } = e.target;\n        // Use a switch statement or if-else to determine which input field to update\n        switch(id){\n            case \"message\":\n                setMessage(value);\n                break;\n                break;\n            case \"noi\":\n                setNoi(value);\n                break;\n            case \"ta\":\n                setTa(value);\n                break;\n            default:\n                break;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"app-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"sidebar-container2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"banner-header2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"DALL\\xb7E 2 CONFIGURATIONS\"\n                            }, void 0, false, {\n                                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-padding\"\n                        }, void 0, false, {\n                            fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                            className: \"sidebar-divider\"\n                        }, void 0, false, {\n                            fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"form-side-container\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"form-side-contents\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        style: {\n                                            fontWeight: \"bold\",\n                                            fontStyle: \"italic\",\n                                            textAlign: \"center\"\n                                        },\n                                        children: \"AUDIENCE\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"form-row\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"targetAudience\",\n                                                children: [\n                                                    \"Target Audience\",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"required\",\n                                                        children: \"*\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                                                        lineNumber: 68,\n                                                        columnNumber: 80\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                className: \"basic-input-field\",\n                                                type: \"text\",\n                                                id: \"ta\",\n                                                placeholder: \"20-30 or 35-65\",\n                                                value: ta,\n                                                onChange: handleInputChange\n                                            }, void 0, false, {\n                                                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"form-row\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"gender\",\n                                                children: [\n                                                    \"Gender\",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"required\",\n                                                        children: \"*\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                                                        lineNumber: 73,\n                                                        columnNumber: 63\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"radiobuttonGroup2\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        className: selectedGenderValue === \"Male\" ? \"radiobuttonselected\" : \"radiobutton\",\n                                                        onClick: ()=>handleGenderClick(\"Male\"),\n                                                        children: \"Male\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                                                        lineNumber: 75,\n                                                        columnNumber: 37\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        className: selectedGenderValue === \"Female\" ? \"radiobuttonselected\" : \"radiobutton\",\n                                                        onClick: ()=>handleGenderClick(\"Female\"),\n                                                        children: \"Female\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                                                        lineNumber: 78,\n                                                        columnNumber: 37\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        className: selectedGenderValue === \"Both\" ? \"radiobuttonselected\" : \"radiobutton\",\n                                                        onClick: ()=>handleGenderClick(\"Both\"),\n                                                        children: \"Both\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                                                        lineNumber: 81,\n                                                        columnNumber: 37\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/GenerateImg.tsx\",\n        lineNumber: 54,\n        columnNumber: 9\n    }, this);\n}\n_s(GenerateImg, \"a+BYFb/6oIQOOy4S1mIGwC7tqPI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = GenerateImg;\nvar _c;\n$RefreshReg$(_c, \"GenerateImg\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0dlbmVyYXRlSW1nLnRzeD9lNThhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL3Jlc3VsdC50c3hcbmltcG9ydCBIZWFkZXIgZnJvbSAnQC9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdlbmVyYXRlSW1nKCkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHJvdXRlcjtcblxuICAgIC8vIEFjY2VzcyB0aGUgcGFzc2VkIHZhcmlhYmxlcyBmcm9tIHRoZSBxdWVyeSBvYmplY3RcbiAgICBjb25zdCB7XG4gICAgICAgIHRhcmdldEF1ZGllbmNlLFxuICAgICAgICBnZW5kZXIsXG4gICAgICAgIHNlYXNvbmFsLFxuICAgICAgICByZWdpb25hbCxcbiAgICAgICAgb2NjYXNpb24sXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBjb250ZW50VHlwZSxcbiAgICAgICAgY29sb3IsXG4gICAgICAgIHNpemUsXG4gICAgICAgIGltYWdlQ291bnQsXG4gICAgICAgIGxvYWRpbmdcbiAgICB9ID0gcXVlcnk7XG5cbiAgICBjb25zdCBbdGEsIHNldFRhXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW25vaSwgc2V0Tm9pXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIGNvbnN0IFtzZWxlY3RlZEdlbmRlclZhbHVlLCBzZXRTZWxlY3RlZEdlbmRlclZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IGhhbmRsZUdlbmRlckNsaWNrID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgc2V0U2VsZWN0ZWRHZW5kZXJWYWx1ZSh2YWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnN0IHsgaWQsIHZhbHVlIH0gPSBlLnRhcmdldDtcblxuICAgICAgICAvLyBVc2UgYSBzd2l0Y2ggc3RhdGVtZW50IG9yIGlmLWVsc2UgdG8gZGV0ZXJtaW5lIHdoaWNoIGlucHV0IGZpZWxkIHRvIHVwZGF0ZVxuICAgICAgICBzd2l0Y2ggKGlkKSB7XG4gICAgICAgICAgICBjYXNlICdtZXNzYWdlJzpcbiAgICAgICAgICAgICAgICBzZXRNZXNzYWdlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ25vaSc6XG4gICAgICAgICAgICAgICAgc2V0Tm9pKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3RhJzpcbiAgICAgICAgICAgICAgICBzZXRUYSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1jb250YWluZXIyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLWhlYWRlcjJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRBTEzCt0UgMiBDT05GSUdVUkFUSU9OUzwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UtcGFkZGluZ1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwic2lkZWJhci1kaXZpZGVyXCI+PC9ocj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXNpZGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tc2lkZS1jb250ZW50c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgZm9udFN0eWxlOiAnaXRhbGljJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5BVURJRU5DRTwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0YXJnZXRBdWRpZW5jZVwiPlRhcmdldCBBdWRpZW5jZTxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYmFzaWMtaW5wdXQtZmllbGRcIiB0eXBlPVwidGV4dFwiIGlkPVwidGFcIiBwbGFjZWhvbGRlcj1cIjIwLTMwIG9yIDM1LTY1XCIgdmFsdWU9e3RhfSBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZ2VuZGVyXCI+R2VuZGVyPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFkaW9idXR0b25Hcm91cDJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzZWxlY3RlZEdlbmRlclZhbHVlID09PSAnTWFsZScgPyBcInJhZGlvYnV0dG9uc2VsZWN0ZWRcIiA6IFwicmFkaW9idXR0b25cIn0gb25DbGljaz17KCkgPT4gaGFuZGxlR2VuZGVyQ2xpY2soJ01hbGUnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c2VsZWN0ZWRHZW5kZXJWYWx1ZSA9PT0gJ0ZlbWFsZScgPyBcInJhZGlvYnV0dG9uc2VsZWN0ZWRcIiA6IFwicmFkaW9idXR0b25cIn0gb25DbGljaz17KCkgPT4gaGFuZGxlR2VuZGVyQ2xpY2soJ0ZlbWFsZScpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGZW1hbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3NlbGVjdGVkR2VuZGVyVmFsdWUgPT09ICdCb3RoJyA/IFwicmFkaW9idXR0b25zZWxlY3RlZFwiIDogXCJyYWRpb2J1dHRvblwifSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVHZW5kZXJDbGljaygnQm90aCcpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tYWluPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZGVyIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkdlbmVyYXRlSW1nIiwicm91dGVyIiwicXVlcnkiLCJ0YXJnZXRBdWRpZW5jZSIsImdlbmRlciIsInNlYXNvbmFsIiwicmVnaW9uYWwiLCJvY2Nhc2lvbiIsImRlc2NyaXB0aW9uIiwiY29udGVudFR5cGUiLCJjb2xvciIsInNpemUiLCJpbWFnZUNvdW50IiwibG9hZGluZyIsInRhIiwic2V0VGEiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsIm5vaSIsInNldE5vaSIsInNlbGVjdGVkR2VuZGVyVmFsdWUiLCJzZXRTZWxlY3RlZEdlbmRlclZhbHVlIiwiaGFuZGxlR2VuZGVyQ2xpY2siLCJ2YWx1ZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsImlkIiwidGFyZ2V0IiwibWFpbiIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJociIsInN0eWxlIiwiZm9udFdlaWdodCIsImZvbnRTdHlsZSIsInRleHRBbGlnbiIsImxhYmVsIiwiaHRtbEZvciIsInNwYW4iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/GenerateImg.tsx\n"));

/***/ })

});