"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./src/pages/login.tsx":
/*!*****************************!*\
  !*** ./src/pages/login.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Login = ()=>{\n    //Google Handler Function\n    async function handleGoogleSignIn() {\n        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"google\", {\n            callbackUrl: \"http://localhost:3000\"\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"login-container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"login-box\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Campaign Creatives Management\"\n                }, void 0, false, {\n                    fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/login.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"input-field\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"username\",\n                            children: \"Username:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/login.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"username\",\n                            name: \"username\"\n                        }, void 0, false, {\n                            fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/login.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/login.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"input-field\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"password\",\n                            children: \"Password:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/login.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            id: \"password\",\n                            name: \"password\"\n                        }, void 0, false, {\n                            fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/login.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/login.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"button-align-center work-bench-button2\",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/login.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"space-padding\"\n                }, void 0, false, {\n                    fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/login.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                    className: \"sidebar-divider\"\n                }, void 0, false, {\n                    fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/login.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"space-padding\"\n                }, void 0, false, {\n                    fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/login.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"google-sign-in-button\",\n                    onClick: handleGoogleSignIn,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: {\n                            display: \"flex\",\n                            alignItems: \"center\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Sign in with Google\"\n                            }, void 0, false, {\n                                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/login.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"img/google.svg\",\n                                alt: \"Google Logo\",\n                                style: {\n                                    marginLeft: \"10px\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/login.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/login.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/login.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/login.tsx\",\n            lineNumber: 17,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/login.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9naW4udHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QztBQUd6QyxNQUFNQyxRQUFRO0lBRVYseUJBQXlCO0lBRXpCLGVBQWVDO1FBQ1hGLHVEQUFNQSxDQUFDLFVBQVM7WUFBRUcsYUFBYTtRQUF1QjtJQUUxRDtJQUlGLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNYLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDWCw4REFBQ0M7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ0Y7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDRTs0QkFBTUMsU0FBUTtzQ0FBVzs7Ozs7O3NDQUMxQiw4REFBQ0M7NEJBQU1DLE1BQUs7NEJBQU9DLElBQUc7NEJBQVdDLE1BQUs7Ozs7Ozs7Ozs7Ozs4QkFFMUMsOERBQUNSO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0U7NEJBQU1DLFNBQVE7c0NBQVc7Ozs7OztzQ0FDMUIsOERBQUNDOzRCQUFNQyxNQUFLOzRCQUFXQyxJQUFHOzRCQUFXQyxNQUFLOzs7Ozs7Ozs7Ozs7OEJBRzlDLDhEQUFDQztvQkFBT1IsV0FBVTs4QkFBMEM7Ozs7Ozs4QkFDNUQsOERBQUNEO29CQUFJQyxXQUFVOzs7Ozs7OEJBQ2YsOERBQUNTO29CQUFHVCxXQUFVOzs7Ozs7OEJBQ2QsOERBQUNEO29CQUFJQyxXQUFVOzs7Ozs7OEJBQ2YsOERBQUNRO29CQUFPUixXQUFVO29CQUF3QlUsU0FBU2I7OEJBQy9DLDRFQUFDYzt3QkFBS0MsT0FBTzs0QkFBRUMsU0FBUzs0QkFBUUMsWUFBWTt3QkFBUzs7MENBQ2pELDhEQUFDSDswQ0FBSzs7Ozs7OzBDQUNOLDhEQUFDSTtnQ0FBSUMsS0FBSTtnQ0FBaUJDLEtBQUk7Z0NBQWNMLE9BQU87b0NBQUVNLFlBQVk7Z0NBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPNUY7S0F0Q010QjtBQXdDTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbG9naW4udHN4PzExZTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2lnbkluIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcblxuXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcblxuICAgIC8vR29vZ2xlIEhhbmRsZXIgRnVuY3Rpb25cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUdvb2dsZVNpZ25JbigpIHtcbiAgICAgICAgc2lnbkluKCdnb29nbGUnLHsgY2FsbGJhY2tVcmw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCJ9KTtcblxuICAgIH07XG5cblxuICAgICAgICAgICAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1ib3hcIj5cbiAgICAgICAgICAgIDxoMj5DYW1wYWlnbiBDcmVhdGl2ZXMgTWFuYWdlbWVudDwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VybmFtZVwiIG5hbWU9XCJ1c2VybmFtZVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi1hbGlnbi1jZW50ZXIgd29yay1iZW5jaC1idXR0b24yXCIgPkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXBhZGRpbmdcIj48L2Rpdj5cbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJzaWRlYmFyLWRpdmlkZXJcIj48L2hyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS1wYWRkaW5nXCI+PC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImdvb2dsZS1zaWduLWluLWJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUdvb2dsZVNpZ25Jbn0+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+U2lnbiBpbiB3aXRoIEdvb2dsZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvZ29vZ2xlLnN2Z1wiIGFsdD1cIkdvb2dsZSBMb2dvXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzEwcHgnIH19IC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIFxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iXSwibmFtZXMiOlsic2lnbkluIiwiTG9naW4iLCJoYW5kbGVHb29nbGVTaWduSW4iLCJjYWxsYmFja1VybCIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJuYW1lIiwiYnV0dG9uIiwiaHIiLCJvbkNsaWNrIiwic3BhbiIsInN0eWxlIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJpbWciLCJzcmMiLCJhbHQiLCJtYXJnaW5MZWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/login.tsx\n"));

/***/ })

});