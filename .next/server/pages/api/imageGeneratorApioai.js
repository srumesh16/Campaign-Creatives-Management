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
exports.id = "pages/api/imageGeneratorApioai";
exports.ids = ["pages/api/imageGeneratorApioai"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("openai");;

/***/ }),

/***/ "(api)/./src/pages/api/imageGeneratorApioai.ts":
/*!***********************************************!*\
  !*** ./src/pages/api/imageGeneratorApioai.ts ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([openai__WEBPACK_IMPORTED_MODULE_0__]);\nopenai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nasync function handler(req, res) {\n    try {\n        const prompt = req.query.prompt;\n        const n = parseInt(req.query.n, 10);\n        const size = req.query.size;\n        const response = await openai.images.generate({\n            prompt: prompt,\n            n: n,\n            size: \"1024x1024\"\n        });\n        //console.log(\"RESPONSE!!!!:\" , response);\n        res.status(200).json(response);\n    } catch (error) {\n        console.error(\"Error reading images directory:\", error);\n        res.status(500).json({\n            error: \"An error occurred\"\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2ltYWdlR2VuZXJhdG9yQXBpb2FpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQzRCO0FBRzVCLE1BQU1DLE1BQU0sR0FBRyxJQUFJRCw4Q0FBTSxFQUFFO0FBRVosZUFBZUUsT0FBTyxDQUFDQyxHQUFtQixFQUFFQyxHQUFvQixFQUFFO0lBQzdFLElBQUk7UUFFQSxNQUFNQyxNQUFNLEdBQUdGLEdBQUcsQ0FBQ0csS0FBSyxDQUFDRCxNQUFNO1FBQy9CLE1BQU1FLENBQUMsR0FBR0MsUUFBUSxDQUFDTCxHQUFHLENBQUNHLEtBQUssQ0FBQ0MsQ0FBQyxFQUFZLEVBQUUsQ0FBQztRQUM3QyxNQUFNRSxJQUFJLEdBQUdOLEdBQUcsQ0FBQ0csS0FBSyxDQUFDRyxJQUFJO1FBQzNCLE1BQU1DLFFBQVEsR0FBRyxNQUFNVCxNQUFNLENBQUNVLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDO1lBQUVQLE1BQU0sRUFBRUEsTUFBTTtZQUFFRSxDQUFDLEVBQUNBLENBQUM7WUFBRUUsSUFBSSxFQUFDLFdBQVc7U0FBRSxDQUFDO1FBQ3hGLDBDQUEwQztRQUMxQ0wsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0osUUFBUSxDQUFDLENBQUM7SUFDbkMsRUFBRSxPQUFPSyxLQUFLLEVBQUU7UUFDWkMsT0FBTyxDQUFDRCxLQUFLLENBQUMsaUNBQWlDLEVBQUVBLEtBQUssQ0FBQyxDQUFDO1FBQ3hEWCxHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLEtBQUssRUFBRSxtQkFBbUI7U0FBRSxDQUFDLENBQUM7SUFDekQsQ0FBQztBQUVMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jY20vLi9zcmMvcGFnZXMvYXBpL2ltYWdlR2VuZXJhdG9yQXBpb2FpLnRzPzRiNWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IE9wZW5BSSBmcm9tIFwib3BlbmFpXCI7XG5pbXBvcnQgeyBTdHJpbmdMaXRlcmFsIH0gZnJvbSAndHlwZXNjcmlwdCc7XG5cbmNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUkoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICAgIHRyeSB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcm9tcHQgPSByZXEucXVlcnkucHJvbXB0IGFzIHN0cmluZztcbiAgICAgICAgY29uc3QgbiA9IHBhcnNlSW50KHJlcS5xdWVyeS5uIGFzIHN0cmluZywgMTApO1xuICAgICAgICBjb25zdCBzaXplID0gcmVxLnF1ZXJ5LnNpemUgYXMgc3RyaW5nO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG9wZW5haS5pbWFnZXMuZ2VuZXJhdGUoeyBwcm9tcHQ6IHByb21wdCwgbjpuLCBzaXplOlwiMTAyNHgxMDI0XCIgfSk7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJSRVNQT05TRSEhISE6XCIgLCByZXNwb25zZSk7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3BvbnNlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZWFkaW5nIGltYWdlcyBkaXJlY3Rvcnk6JywgZXJyb3IpO1xuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnQW4gZXJyb3Igb2NjdXJyZWQnIH0pO1xuICAgIH1cblxufVxuXG5cblxuXG5cbiJdLCJuYW1lcyI6WyJPcGVuQUkiLCJvcGVuYWkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicHJvbXB0IiwicXVlcnkiLCJuIiwicGFyc2VJbnQiLCJzaXplIiwicmVzcG9uc2UiLCJpbWFnZXMiLCJnZW5lcmF0ZSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/imageGeneratorApioai.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/imageGeneratorApioai.ts"));
module.exports = __webpack_exports__;

})();