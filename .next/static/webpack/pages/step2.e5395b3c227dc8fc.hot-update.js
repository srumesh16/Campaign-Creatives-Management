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

/***/ "./src/components/ImageGallery2.tsx":
/*!******************************************!*\
  !*** ./src/components/ImageGallery2.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst ImageGallery = (param)=>{\n    let { onImageSelect, fileLocation, refresh } = param;\n    _s();\n    const [imageUrls, setImageUrls] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedImage, setSelectedImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [filesFound, setFilesFound] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        //if(refresh){\n        async function fetchImageUrls() {\n            try {\n                const response = await fetch(\"/api/images?fileLocation=\" + fileLocation);\n                const data = await response.json();\n                if (data.imageUrls === undefined) {\n                    console.log(\"inside imageUrls undefined\");\n                    setFilesFound(false);\n                } else {\n                    console.log(\"inside imageUrls undefined\");\n                    setImageUrls(data.imageUrls);\n                    setFilesFound(true);\n                }\n            } catch (error) {\n                console.error(\"Error fetching image URLs:\", error);\n            }\n        }\n        fetchImageUrls();\n    }, []);\n    const handleImageClick = (imageUrl)=>{\n        const imageName = imageUrl.substring(imageUrl.lastIndexOf(\"/\") + 1);\n        setSelectedImage(imageName);\n        onImageSelect(imageName);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: filesFound ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: imageUrls.map((imageUrl, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: \"img\",\n                    src: imageUrl,\n                    alt: \"Image \".concat(index),\n                    onClick: ()=>handleImageClick(imageUrl)\n                }, index, false, {\n                    fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/ImageGallery2.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 21\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/ImageGallery2.tsx\",\n            lineNumber: 48,\n            columnNumber: 17\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"bold-white-center \",\n            children: \"NO TEMPLATES AVAILABLE\"\n        }, void 0, false, {\n            fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/ImageGallery2.tsx\",\n            lineNumber: 60,\n            columnNumber: 17\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/suchi_bigmac/Documents/Campaign-Creatives-Management/src/components/ImageGallery2.tsx\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ImageGallery, \"1AftLc8TngBltSOMTjSKh7OwOwc=\");\n_c = ImageGallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageGallery);\nvar _c;\n$RefreshReg$(_c, \"ImageGallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9JbWFnZUdhbGxlcnkyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW1EO0FBUW5ELE1BQU1HLGVBQTRDO1FBQUMsRUFBRUMsYUFBYSxFQUFFQyxZQUFZLEVBQUVDLE9BQU8sRUFBRTs7SUFDdkYsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdOLCtDQUFRQSxDQUFXLEVBQUU7SUFDdkQsTUFBTSxDQUFDTyxlQUFlQyxpQkFBaUIsR0FBR1IsK0NBQVFBLENBQWdCO0lBQ2xFLE1BQU0sQ0FBQ1MsWUFBWUMsY0FBYyxHQUFHViwrQ0FBUUEsQ0FBVTtJQUV0REQsZ0RBQVNBLENBQUM7UUFDTixjQUFjO1FBQ2QsZUFBZVk7WUFDWCxJQUFJO2dCQUNBLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSw4QkFBOEJWO2dCQUMzRCxNQUFNVyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7Z0JBQ2hDLElBQUdELEtBQUtULFNBQVMsS0FBS1csV0FBVTtvQkFDNUJDLFFBQVFDLEdBQUcsQ0FBQztvQkFDWlIsY0FBYztnQkFDbEIsT0FBTztvQkFDSE8sUUFBUUMsR0FBRyxDQUFDO29CQUNaWixhQUFhUSxLQUFLVCxTQUFTO29CQUMzQkssY0FBYztnQkFDbEI7WUFFSixFQUFFLE9BQU9TLE9BQU87Z0JBQ1pGLFFBQVFFLEtBQUssQ0FBQyw4QkFBOEJBO1lBQ2hEO1FBQ0o7UUFDQVI7SUFDSixHQUFHLEVBQUU7SUFHTCxNQUFNUyxtQkFBbUIsQ0FBQ0M7UUFDdEIsTUFBTUMsWUFBWUQsU0FBU0UsU0FBUyxDQUFDRixTQUFTRyxXQUFXLENBQUMsT0FBTztRQUNqRWhCLGlCQUFpQmM7UUFDakJwQixjQUFjb0I7SUFDbEI7SUFJQSxxQkFDSSw4REFBQ0c7a0JBQ0loQiwyQkFDRyw4REFBQ2dCO3NCQUNBcEIsVUFBVXFCLEdBQUcsQ0FBQyxDQUFDTCxVQUFVTSxzQkFDdEIsOERBQUNDO29CQUNHQyxXQUFVO29CQUVWQyxLQUFLVDtvQkFDTFUsS0FBSyxTQUFlLE9BQU5KO29CQUNkSyxTQUFTLElBQU1aLGlCQUFpQkM7bUJBSDNCTTs7Ozs7Ozs7O3NDQVFiLDhEQUFDTTtZQUFFSixXQUFVO3NCQUFxQjs7Ozs7Ozs7Ozs7QUFNbEQ7R0F6RE01QjtLQUFBQTtBQTJETiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9JbWFnZUdhbGxlcnkyLnRzeD85OTBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgSW1hZ2VHYWxsZXJ5UHJvcHMge1xuICAgIG9uSW1hZ2VTZWxlY3Q6IChpbWFnZU5hbWU6IHN0cmluZykgPT4gdm9pZDtcbiAgICBmaWxlTG9jYXRpb246IHN0cmluZztcbiAgICByZWZyZXNoOiBib29sZWFuO1xufVxuXG5jb25zdCBJbWFnZUdhbGxlcnk6IFJlYWN0LkZDPEltYWdlR2FsbGVyeVByb3BzPiA9ICh7IG9uSW1hZ2VTZWxlY3QsIGZpbGVMb2NhdGlvbiwgcmVmcmVzaCB9KSA9PiB7XG4gICAgY29uc3QgW2ltYWdlVXJscywgc2V0SW1hZ2VVcmxzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gICAgY29uc3QgW3NlbGVjdGVkSW1hZ2UsIHNldFNlbGVjdGVkSW1hZ2VdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3QgW2ZpbGVzRm91bmQsIHNldEZpbGVzRm91bmRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vaWYocmVmcmVzaCl7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoSW1hZ2VVcmxzKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2ltYWdlcz9maWxlTG9jYXRpb249JyArIGZpbGVMb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBpZihkYXRhLmltYWdlVXJscyA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbnNpZGUgaW1hZ2VVcmxzIHVuZGVmaW5lZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0RmlsZXNGb3VuZChmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbnNpZGUgaW1hZ2VVcmxzIHVuZGVmaW5lZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0SW1hZ2VVcmxzKGRhdGEuaW1hZ2VVcmxzKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0RmlsZXNGb3VuZCh0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGltYWdlIFVSTHM6JywgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgICAgICBmZXRjaEltYWdlVXJscygpO1xuICAgIH0sIFtdKTtcblxuXG4gICAgY29uc3QgaGFuZGxlSW1hZ2VDbGljayA9IChpbWFnZVVybDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IGltYWdlTmFtZSA9IGltYWdlVXJsLnN1YnN0cmluZyhpbWFnZVVybC5sYXN0SW5kZXhPZignLycpICsgMSk7XG4gICAgICAgIHNldFNlbGVjdGVkSW1hZ2UoaW1hZ2VOYW1lKTtcbiAgICAgICAgb25JbWFnZVNlbGVjdChpbWFnZU5hbWUpO1xuICAgIH07XG5cbiAgICBcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7ZmlsZXNGb3VuZCA/IChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtpbWFnZVVybHMubWFwKChpbWFnZVVybCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgSW1hZ2UgJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlSW1hZ2VDbGljayhpbWFnZVVybCl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj4gKTpcbiAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYm9sZC13aGl0ZS1jZW50ZXIgXCI+Tk8gVEVNUExBVEVTIEFWQUlMQUJMRTwvcD5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZUdhbGxlcnk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlR2FsbGVyeSIsIm9uSW1hZ2VTZWxlY3QiLCJmaWxlTG9jYXRpb24iLCJyZWZyZXNoIiwiaW1hZ2VVcmxzIiwic2V0SW1hZ2VVcmxzIiwic2VsZWN0ZWRJbWFnZSIsInNldFNlbGVjdGVkSW1hZ2UiLCJmaWxlc0ZvdW5kIiwic2V0RmlsZXNGb3VuZCIsImZldGNoSW1hZ2VVcmxzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiaGFuZGxlSW1hZ2VDbGljayIsImltYWdlVXJsIiwiaW1hZ2VOYW1lIiwic3Vic3RyaW5nIiwibGFzdEluZGV4T2YiLCJkaXYiLCJtYXAiLCJpbmRleCIsImltZyIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsIm9uQ2xpY2siLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ImageGallery2.tsx\n"));

/***/ })

});