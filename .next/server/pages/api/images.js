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
exports.id = "pages/api/images";
exports.ids = ["pages/api/images"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./src/pages/api/images.ts":
/*!*********************************!*\
  !*** ./src/pages/api/images.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction handler(req, res) {\n    try {\n        const fileLocation = req.query.fileLocation;\n        const imagesDirectory = \"\";\n        if (fileLocation.includes(\"/\")) {\n            const [parentFolder, childFolder] = fileLocation.split(\"/\");\n            const imagesDirectory1 = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), \"public\", parentFolder, childFolder);\n            const imageFiles = fs__WEBPACK_IMPORTED_MODULE_1___default().readdirSync(imagesDirectory1);\n            const imageUrls = imageFiles.map((filename)=>`/${parentFolder}/${childFolder}/${filename}`);\n            //console.log(imageUrls);\n            res.status(200).json({\n                imageUrls\n            });\n        } else {\n            const imagesDirectory2 = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), \"public\", fileLocation);\n            const imageFiles1 = fs__WEBPACK_IMPORTED_MODULE_1___default().readdirSync(imagesDirectory2);\n            const imageUrls1 = imageFiles1.map((filename)=>`/${fileLocation}/${filename}`);\n            //console.log(imageUrls);\n            res.status(200).json({\n                imageUrls: imageUrls1\n            });\n        }\n    } catch (error) {\n        console.error(\"Error reading images directory:\", error);\n        res.status(500).json({\n            error: \"An error occurred\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2ltYWdlcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUN3QjtBQUNMO0FBRUosU0FBU0UsT0FBTyxDQUFDQyxHQUFtQixFQUFFQyxHQUFvQixFQUFFO0lBQ3ZFLElBQUk7UUFDQSxNQUFNQyxZQUFZLEdBQUlGLEdBQUcsQ0FBQ0csS0FBSyxDQUFDRCxZQUFZO1FBQzVDLE1BQU1FLGVBQWUsR0FBRyxFQUFFO1FBQzFCLElBQUdGLFlBQVksQ0FBQ0csUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzNCLE1BQUssQ0FBQ0MsWUFBWSxFQUFFQyxXQUFXLENBQUMsR0FBR0wsWUFBWSxDQUFDTSxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQzFELE1BQU1KLGdCQUFlLEdBQUdQLGdEQUFTLENBQUNhLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFDTCxZQUFZLEVBQUVDLFdBQVcsQ0FBQztZQUNwRixNQUFNSyxVQUFVLEdBQUdkLHFEQUFjLENBQUNNLGdCQUFlLENBQUM7WUFDbEQsTUFBTVUsU0FBUyxHQUFHRixVQUFVLENBQUNHLEdBQUcsQ0FBQyxDQUFDQyxRQUFRLEdBQUssQ0FBQyxDQUFDLEVBQUVWLFlBQVksQ0FBQyxDQUFDLEVBQUVDLFdBQVcsQ0FBQyxDQUFDLEVBQUVTLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDN0YseUJBQXlCO1lBQ3pCZixHQUFHLENBQUNnQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUosU0FBUzthQUFFLENBQUMsQ0FBQztRQUN4QyxPQUNLO1lBQ0QsTUFBTVYsZ0JBQWUsR0FBR1AsZ0RBQVMsQ0FBQ2EsT0FBTyxDQUFDQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUNULFlBQVksQ0FBQztZQUN2RSxNQUFNVSxXQUFVLEdBQUdkLHFEQUFjLENBQUNNLGdCQUFlLENBQUM7WUFDbEQsTUFBTVUsVUFBUyxHQUFHRixXQUFVLENBQUNHLEdBQUcsQ0FBQyxDQUFDQyxRQUFRLEdBQUssQ0FBQyxDQUFDLEVBQUVkLFlBQVksQ0FBQyxDQUFDLEVBQUVjLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDOUUseUJBQXlCO1lBQ3pCZixHQUFHLENBQUNnQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUosU0FBUyxFQUFUQSxVQUFTO2FBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7SUFDTCxFQUFFLE9BQU9LLEtBQUssRUFBRTtRQUNaQyxPQUFPLENBQUNELEtBQUssQ0FBQyxpQ0FBaUMsRUFBRUEsS0FBSyxDQUFDLENBQUM7UUFDeERsQixHQUFHLENBQUNnQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxLQUFLLEVBQUUsbUJBQW1CO1NBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7QUFFTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2NtLy4vc3JjL3BhZ2VzL2FwaS9pbWFnZXMudHM/M2M0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBmcyBmcm9tICdmcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbGVMb2NhdGlvbiAgPSByZXEucXVlcnkuZmlsZUxvY2F0aW9uIGFzIHN0cmluZztcbiAgICAgICAgY29uc3QgaW1hZ2VzRGlyZWN0b3J5ID0gXCJcIjtcbiAgICAgICAgaWYoZmlsZUxvY2F0aW9uLmluY2x1ZGVzKFwiL1wiKSkge1xuICAgICAgICAgICAgY29uc3RbcGFyZW50Rm9sZGVyLCBjaGlsZEZvbGRlcl0gPSBmaWxlTG9jYXRpb24uc3BsaXQoXCIvXCIpO1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VzRGlyZWN0b3J5ID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdwdWJsaWMnLHBhcmVudEZvbGRlciwgY2hpbGRGb2xkZXIpO1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VGaWxlcyA9IGZzLnJlYWRkaXJTeW5jKGltYWdlc0RpcmVjdG9yeSk7XG4gICAgICAgICAgICBjb25zdCBpbWFnZVVybHMgPSBpbWFnZUZpbGVzLm1hcCgoZmlsZW5hbWUpID0+IGAvJHtwYXJlbnRGb2xkZXJ9LyR7Y2hpbGRGb2xkZXJ9LyR7ZmlsZW5hbWV9YCk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGltYWdlVXJscyk7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGltYWdlVXJscyB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlc0RpcmVjdG9yeSA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAncHVibGljJyxmaWxlTG9jYXRpb24pO1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VGaWxlcyA9IGZzLnJlYWRkaXJTeW5jKGltYWdlc0RpcmVjdG9yeSk7XG4gICAgICAgICAgICBjb25zdCBpbWFnZVVybHMgPSBpbWFnZUZpbGVzLm1hcCgoZmlsZW5hbWUpID0+IGAvJHtmaWxlTG9jYXRpb259LyR7ZmlsZW5hbWV9YCk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGltYWdlVXJscyk7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGltYWdlVXJscyB9KTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJlYWRpbmcgaW1hZ2VzIGRpcmVjdG9yeTonLCBlcnJvcik7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdBbiBlcnJvciBvY2N1cnJlZCcgfSk7XG4gICAgfVxuXG59Il0sIm5hbWVzIjpbInBhdGgiLCJmcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJmaWxlTG9jYXRpb24iLCJxdWVyeSIsImltYWdlc0RpcmVjdG9yeSIsImluY2x1ZGVzIiwicGFyZW50Rm9sZGVyIiwiY2hpbGRGb2xkZXIiLCJzcGxpdCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiaW1hZ2VGaWxlcyIsInJlYWRkaXJTeW5jIiwiaW1hZ2VVcmxzIiwibWFwIiwiZmlsZW5hbWUiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/images.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/images.ts"));
module.exports = __webpack_exports__;

})();