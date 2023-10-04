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
exports.id = "pages/CreativeBriefList";
exports.ids = ["pages/CreativeBriefList"];
exports.modules = {

/***/ "./src/components/header.tsx":
/*!***********************************!*\
  !*** ./src/components/header.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst header = ({ selectedImageCount , selectedImages  })=>{\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const handleSignOut = async ()=>{\n        await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut)({\n            callbackUrl: \"/login\"\n        });\n    };\n    const handleShoppingCartClick = ()=>{\n        const formData = {\n            url: selectedImages,\n            count: selectedImageCount\n        };\n        router.push({\n            pathname: \"/shoppingCart\",\n            query: formData\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"frame-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"frame-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"frame-1000004664\",\n                        src: \"img/frame-1000004664.svg\",\n                        alt: \"Frame 1000004664\"\n                    }, void 0, false, {\n                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/header.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"line-1 line\",\n                        src: \"img/line-1.svg\",\n                        alt: \"Line 1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/header.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"product-support\",\n                        children: \"Campaign Creatives Management\"\n                    }, void 0, false, {\n                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/header.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/header.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"frame-2-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            width: \"25px\",\n                            height: \"25px\",\n                            position: \"relative\"\n                        },\n                        onClick: handleShoppingCartClick,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                viewBox: \"0 0 576 512\",\n                                fill: \"currentColor\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    d: \"M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/header.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/header.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, undefined),\n                            selectedImageCount > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    color: \"white\",\n                                    width: \"10px\",\n                                    height: \"1.5rem\",\n                                    position: \"absolute\",\n                                    bottom: 0,\n                                    right: 0,\n                                    transform: \"translate(25%, 25%)\"\n                                },\n                                children: selectedImageCount\n                            }, void 0, false, {\n                                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/header.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 14\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/header.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"name\",\n                        children: session?.user?.name\n                    }, void 0, false, {\n                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/header.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSignOut,\n                        className: \"logout-button\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaSignOutAlt, {\n                            height: \"14px\",\n                            width: \"14px\",\n                            color: \"white\"\n                        }, void 0, false, {\n                            fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/header.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/header.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/header.tsx\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/header.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VDtBQUNILENBQUM7QUFFRCxpRUFBZWhDLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jY20vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIudHN4PzEzMTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRmFTaWduT3V0QWx0LCBGYVNob3BwaW5nQ2FydCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbk91dCB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbnR5cGUgSGVhZGVyUHJvcHMgPSB7XG4gIHNlbGVjdGVkSW1hZ2VDb3VudDogbnVtYmVyO1xuICBzZWxlY3RlZEltYWdlczogc3RyaW5nW10gfCBudWxsXG59O1xuXG5cblxuY29uc3QgaGVhZGVyOiBSZWFjdC5GQzxIZWFkZXJQcm9wcz4gPSAoe3NlbGVjdGVkSW1hZ2VDb3VudCwgc2VsZWN0ZWRJbWFnZXN9KSA9PiB7XG5cbiAgY29uc3R7ZGF0YTpzZXNzaW9ufSA9IHVzZVNlc3Npb24oKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlU2lnbk91dCA9IGFzeW5jKCkgPT57XG4gICAgYXdhaXQgc2lnbk91dCh7IGNhbGxiYWNrVXJsOiBcIi9sb2dpblwifSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2hvcHBpbmdDYXJ0Q2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybURhdGEgPSB7XG4gICAgICB1cmw6IHNlbGVjdGVkSW1hZ2VzLFxuICAgICAgY291bnQ6IHNlbGVjdGVkSW1hZ2VDb3VudFxuICAgIH07XG5cbiAgICByb3V0ZXIucHVzaCh7XG4gICAgICBwYXRobmFtZTogJy9zaG9wcGluZ0NhcnQnLFxuICAgICAgcXVlcnk6IGZvcm1EYXRhXG4gICAgfSk7XG4gIH1cbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmcmFtZS0yXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnJhbWUtM1wiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZyYW1lLTEwMDAwMDQ2NjRcIlxuICAgICAgICAgICAgICAgIHNyYz1cImltZy9mcmFtZS0xMDAwMDA0NjY0LnN2Z1wiXG4gICAgICAgICAgICAgICAgYWx0PVwiRnJhbWUgMTAwMDAwNDY2NFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsaW5lLTEgbGluZVwiIHNyYz1cImltZy9saW5lLTEuc3ZnXCIgYWx0PVwiTGluZSAxXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1zdXBwb3J0XCI+Q2FtcGFpZ24gQ3JlYXRpdmVzIE1hbmFnZW1lbnQ8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyYW1lLTItMVwiPlxuICAgICAgICAgICAgXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjVweFwiLCBoZWlnaHQ6IFwiMjVweFwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19XG4gICAgICAgICAgICBvbkNsaWNrID0ge2hhbmRsZVNob3BwaW5nQ2FydENsaWNrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTc2IDUxMlwiXG4gICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTk2IDBDMTA3LjUgMCAxMTcuNCA4LjE5IDExOS42IDE5LjUxTDEyMS4xIDMySDU0MS44QzU2Mi4xIDMyIDU3OC4zIDUyLjI1IDU3Mi42IDcyLjY2TDUxOC42IDI2NC43QzUxNC43IDI3OC41IDUwMi4xIDI4OCA0ODcuOCAyODhIMTcwLjdMMTc5LjkgMzM2SDQ4OEM1MDEuMyAzMzYgNTEyIDM0Ni43IDUxMiAzNjBDNTEyIDM3My4zIDUwMS4zIDM4NCA0ODggMzg0SDE1OS4xQzE0OC41IDM4NCAxMzguNiAzNzUuOCAxMzYuNCAzNjQuNUw3Ni4xNCA0OEgyNEMxMC43NSA0OCAwIDM3LjI1IDAgMjRDMCAxMC43NSAxMC43NSAwIDI0IDBIOTZ6TTEyOCA0NjRDMTI4IDQzNy41IDE0OS41IDQxNiAxNzYgNDE2QzIwMi41IDQxNiAyMjQgNDM3LjUgMjI0IDQ2NEMyMjQgNDkwLjUgMjAyLjUgNTEyIDE3NiA1MTJDMTQ5LjUgNTEyIDEyOCA0OTAuNSAxMjggNDY0ek01MTIgNDY0QzUxMiA0OTAuNSA0OTAuNSA1MTIgNDY0IDUxMkM0MzcuNSA1MTIgNDE2IDQ5MC41IDQxNiA0NjRDNDE2IDQzNy41IDQzNy41IDQxNiA0NjQgNDE2QzQ5MC41IDQxNiA1MTIgNDM3LjUgNTEyIDQ2NHpcIiAvPlxuICAgICAgICAgICAgPC9zdmc+XG5cbiAgICAgICAgICAgIHtzZWxlY3RlZEltYWdlQ291bnQgPiAwICYmIFxuICAgICAgICAgICAgKDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMS41cmVtXCIsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgyNSUsIDI1JSlcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3NlbGVjdGVkSW1hZ2VDb3VudH1cbiAgICAgICAgICAgIDwvZGl2Pil9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj57c2Vzc2lvbj8udXNlcj8ubmFtZX08L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID17aGFuZGxlU2lnbk91dH0gY2xhc3NOYW1lPVwibG9nb3V0LWJ1dHRvblwiPiBcbiAgICAgICAgICAgIDxGYVNpZ25PdXRBbHQgaGVpZ2h0PVwiMTRweFwiIHdpZHRoPVwiMTRweFwiIGNvbG9yPVwid2hpdGVcIi8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIFxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRlclxuXG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkZhU2lnbk91dEFsdCIsInVzZVNlc3Npb24iLCJzaWduT3V0IiwidXNlUm91dGVyIiwiaGVhZGVyIiwic2VsZWN0ZWRJbWFnZUNvdW50Iiwic2VsZWN0ZWRJbWFnZXMiLCJkYXRhIiwic2Vzc2lvbiIsInJvdXRlciIsImhhbmRsZVNpZ25PdXQiLCJjYWxsYmFja1VybCIsImhhbmRsZVNob3BwaW5nQ2FydENsaWNrIiwiZm9ybURhdGEiLCJ1cmwiLCJjb3VudCIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwiYnV0dG9uIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsInBvc2l0aW9uIiwib25DbGljayIsInN2ZyIsInhtbG5zIiwidmlld0JveCIsImZpbGwiLCJwYXRoIiwiZCIsImNvbG9yIiwiYm90dG9tIiwicmlnaHQiLCJ0cmFuc2Zvcm0iLCJ1c2VyIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/header.tsx\n");

/***/ }),

/***/ "./src/pages/CreativeBriefList.tsx":
/*!*****************************************!*\
  !*** ./src/pages/CreativeBriefList.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CreativeBriefList)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/header */ \"./src/components/header.tsx\");\n\n\n\n\nfunction CreativeBriefList() {\n    const selectedImageCount = 0;\n    const url = [];\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleButtonClick = ()=>{\n        router.push(\"/homepage\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                selectedImageCount: selectedImageCount,\n                selectedImages: url\n            }, void 0, false, {\n                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/CreativeBriefList.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"chat-container2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"header-banner\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"header-heading\",\n                            children: \"CREATIVE BRIEF LIST\"\n                        }, void 0, false, {\n                            fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/CreativeBriefList.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/CreativeBriefList.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-padding\"\n                    }, void 0, false, {\n                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/CreativeBriefList.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"new-button\",\n                        onClick: handleButtonClick,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"New Creative Brief\"\n                        }, void 0, false, {\n                            fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/CreativeBriefList.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/CreativeBriefList.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"cb-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"sc-sidebar-container\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                                    className: \"creative-brief-table\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        children: \"ID\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/CreativeBriefList.tsx\",\n                                                        lineNumber: 30,\n                                                        columnNumber: 17\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        children: \"Offering Message\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/CreativeBriefList.tsx\",\n                                                        lineNumber: 31,\n                                                        columnNumber: 17\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        children: \"Product Image\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/CreativeBriefList.tsx\",\n                                                        lineNumber: 32,\n                                                        columnNumber: 17\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        children: \"Brand Image\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/CreativeBriefList.tsx\",\n                                                        lineNumber: 33,\n                                                        columnNumber: 17\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        children: \"Creative List\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/CreativeBriefList.tsx\",\n                                                        lineNumber: 34,\n                                                        columnNumber: 17\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        children: \"Assigned To\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/CreativeBriefList.tsx\",\n                                                        lineNumber: 35,\n                                                        columnNumber: 17\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        children: \"Action\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/CreativeBriefList.tsx\",\n                                                        lineNumber: 36,\n                                                        columnNumber: 17\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/CreativeBriefList.tsx\",\n                                                lineNumber: 29,\n                                                columnNumber: 15\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/CreativeBriefList.tsx\",\n                                            lineNumber: 28,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {}, void 0, false, {\n                                            fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/CreativeBriefList.tsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 13\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/CreativeBriefList.tsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 11\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/CreativeBriefList.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"sc-sidebar-container\"\n                            }, void 0, false, {\n                                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/CreativeBriefList.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/CreativeBriefList.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/CreativeBriefList.tsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/pages/CreativeBriefList.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvQ3JlYXRpdmVCcmllZkxpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBK0Q7QUFDdkI7QUFDQztBQUUxQixTQUFTRyxpQkFBaUIsR0FBRztJQUMxQyxNQUFNQyxrQkFBa0IsR0FBRyxDQUFDO0lBQzVCLE1BQU1DLEdBQUcsR0FBYSxFQUFFO0lBQ3hCLE1BQU1DLE1BQU0sR0FBR0wsc0RBQVMsRUFBRTtJQUMxQixNQUFNTSxpQkFBaUIsR0FBRyxJQUFNO1FBQzlCRCxNQUFNLENBQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQscUJBQ0UsOERBQUNDLEtBQUc7OzBCQUNGLDhEQUFDUCwwREFBTTtnQkFBQ0Usa0JBQWtCLEVBQUVBLGtCQUFrQjtnQkFBRU0sY0FBYyxFQUFFTCxHQUFHOzs7OztvQkFBSTswQkFFckUsOERBQUNJLEtBQUc7Z0JBQUNFLFNBQVMsRUFBQyxpQkFBaUI7O2tDQUNoQyw4REFBQ0YsS0FBRzt3QkFBQ0UsU0FBUyxFQUFDLGVBQWU7a0NBQzVCLDRFQUFDRixLQUFHOzRCQUFDRSxTQUFTLEVBQUMsZ0JBQWdCO3NDQUFDLHFCQUFtQjs7Ozs7Z0NBQU07Ozs7OzRCQUNyRDtrQ0FDTiw4REFBQ0YsS0FBRzt3QkFBQ0UsU0FBUyxFQUFDLGVBQWU7Ozs7OzRCQUFPO2tDQUNyQyw4REFBQ0MsUUFBTTt3QkFBQ0QsU0FBUyxFQUFDLFlBQVk7d0JBQUNFLE9BQU8sRUFBRU4saUJBQWlCO2tDQUNuRCw0RUFBQ08sR0FBQztzQ0FBQyxvQkFBa0I7Ozs7O2dDQUFJOzs7Ozs0QkFDdEI7a0NBQ1QsOERBQUNMLEtBQUc7d0JBQUNFLFNBQVMsRUFBQyxjQUFjOzswQ0FDM0IsOERBQUNGLEtBQUc7Z0NBQUNFLFNBQVMsRUFBQyxzQkFBc0I7MENBQ3JDLDRFQUFDSSxPQUFLO29DQUFDSixTQUFTLEVBQUMsc0JBQXNCOztzREFDckMsOERBQUNLLE9BQUs7c0RBQ0osNEVBQUNDLElBQUU7O2tFQUNELDhEQUFDQyxJQUFFO2tFQUFDLElBQUU7Ozs7OzREQUFLO2tFQUNYLDhEQUFDQSxJQUFFO2tFQUFDLGtCQUFnQjs7Ozs7NERBQUs7a0VBQ3pCLDhEQUFDQSxJQUFFO2tFQUFDLGVBQWE7Ozs7OzREQUFLO2tFQUN0Qiw4REFBQ0EsSUFBRTtrRUFBQyxhQUFXOzs7Ozs0REFBSztrRUFDcEIsOERBQUNBLElBQUU7a0VBQUMsZUFBYTs7Ozs7NERBQUs7a0VBQ3RCLDhEQUFDQSxJQUFFO2tFQUFDLGFBQVc7Ozs7OzREQUFLO2tFQUNwQiw4REFBQ0EsSUFBRTtrRUFBQyxRQUFNOzs7Ozs0REFBSzs7Ozs7O29EQUNaOzs7OztnREFDQztzREFDUiw4REFBQ0MsT0FBSzs7OztnREFBUzs7Ozs7O3dDQUNUOzs7OztvQ0FFRjswQ0FDTiw4REFBQ1YsS0FBRztnQ0FBQ0UsU0FBUyxFQUFDLHNCQUFzQjs7Ozs7b0NBQzdCOzs7Ozs7NEJBQ0o7Ozs7OztvQkFJQTs7Ozs7O1lBRUosQ0FDTjtBQUVKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jY20vLi9zcmMvcGFnZXMvQ3JlYXRpdmVCcmllZkxpc3QudHN4P2NkMGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgSGVhZGVyIGZyb20gJ0AvY29tcG9uZW50cy9oZWFkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGl2ZUJyaWVmTGlzdCgpIHtcbiAgY29uc3Qgc2VsZWN0ZWRJbWFnZUNvdW50ID0gMDtcbiAgY29uc3QgdXJsOiBzdHJpbmdbXSA9IFtdO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgaGFuZGxlQnV0dG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgcm91dGVyLnB1c2goJy9ob21lcGFnZScpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkZXIgc2VsZWN0ZWRJbWFnZUNvdW50PXtzZWxlY3RlZEltYWdlQ291bnR9IHNlbGVjdGVkSW1hZ2VzPXt1cmx9IC8+XG4gICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWNvbnRhaW5lcjJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItYmFubmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItaGVhZGluZ1wiPkNSRUFUSVZFIEJSSUVGIExJU1Q8L2Rpdj4gICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS1wYWRkaW5nXCI+PC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmV3LWJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUJ1dHRvbkNsaWNrfT5cbiAgICAgICAgICAgICAgPHA+TmV3IENyZWF0aXZlIEJyaWVmPC9wPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYi1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjLXNpZGViYXItY29udGFpbmVyXCI+XG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImNyZWF0aXZlLWJyaWVmLXRhYmxlXCI+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGg+SUQ8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5PZmZlcmluZyBNZXNzYWdlPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+UHJvZHVjdCBJbWFnZTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPkJyYW5kIEltYWdlPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+Q3JlYXRpdmUgTGlzdDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPkFzc2lnbmVkIFRvPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+QWN0aW9uPC90aD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+PC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYy1zaWRlYmFyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPC9kaXY+ICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICBcbiAgICA8L2Rpdj5cbiAgKTtcbiAgXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJIZWFkZXIiLCJDcmVhdGl2ZUJyaWVmTGlzdCIsInNlbGVjdGVkSW1hZ2VDb3VudCIsInVybCIsInJvdXRlciIsImhhbmRsZUJ1dHRvbkNsaWNrIiwicHVzaCIsImRpdiIsInNlbGVjdGVkSW1hZ2VzIiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsInAiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/CreativeBriefList.tsx\n");

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

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("react-icons/fa");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/CreativeBriefList.tsx"));
module.exports = __webpack_exports__;

})();