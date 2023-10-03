"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Home() {\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (session) {\n            //check for token and navigate to homepage\n            router.push(\"/CreativeBriefList\");\n        } else {\n            router.push(\"/login\");\n        }\n    }, [\n        session,\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: \"Redirecting...\"\n    }, void 0, false, {\n        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/index.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBO0FBQTZDO0FBQ0w7QUFDTjtBQUNuQixTQUFTRyxJQUFJLEdBQUc7SUFFN0IsTUFBSyxFQUFFQyxJQUFJLEVBQUNDLE9BQU8sR0FBRSxHQUFHTCwyREFBVSxFQUFFO0lBQ3BDLE1BQU1NLE1BQU0sR0FBR0wsc0RBQVMsRUFBRTtJQUMxQkMsZ0RBQVMsQ0FBQyxJQUFNO1FBRWQsSUFBR0csT0FBTyxFQUFDO1lBQ1QsMENBQTBDO1lBQzFDQyxNQUFNLENBQUNDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3BDLE9BQU87WUFDTEQsTUFBTSxDQUFDQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEIsQ0FBQztJQUNILENBQUMsRUFBRTtRQUFDRixPQUFPO1FBQUVDLE1BQU07S0FBQyxDQUFDLENBQUM7SUFLdEIscUJBQ0UsOERBQUNFLE1BQUk7a0JBQUMsZ0JBRU47Ozs7O1lBQU8sQ0FDUjtBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jY20vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3R7IGRhdGE6c2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgIGlmKHNlc3Npb24pe1xuICAgICAgLy9jaGVjayBmb3IgdG9rZW4gYW5kIG5hdmlnYXRlIHRvIGhvbWVwYWdlXG4gICAgICByb3V0ZXIucHVzaCgnL0NyZWF0aXZlQnJpZWZMaXN0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgICB9XG4gIH0sIFtzZXNzaW9uLCByb3V0ZXJdKTtcblxuICBcblxuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICBSZWRpcmVjdGluZy4uLlxuICAgIDwvbWFpbj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJIb21lIiwiZGF0YSIsInNlc3Npb24iLCJyb3V0ZXIiLCJwdXNoIiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();