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

/***/ "../../../api-utils/node":
/*!*****************************************************!*\
  !*** external "next/dist/server/api-utils/node.js" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ "../route-module":
/*!************************************************************************!*\
  !*** external "next/dist/server/future/route-modules/route-module.js" ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("openai");;

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("/**\n * Hoists a name from a module or promised module.\n *\n * @param module the module to hoist the name from\n * @param name the name to hoist\n * @returns the value on the module (or promised module)\n */ \nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"hoist\", ({\n    enumerable: true,\n    get: function() {\n        return hoist;\n    }\n}));\nfunction hoist(module, name) {\n    // If the name is available in the module, return it.\n    if (name in module) {\n        return module[name];\n    }\n    // If a property called `then` exists, assume it's a promise and\n    // return a promise that resolves to the name.\n    if (\"then\" in module && typeof module.then === \"function\") {\n        return module.then((mod)=>hoist(mod, name));\n    }\n    // If we're trying to hoise the default export, and the module is a function,\n    // return the module itself.\n    if (typeof module === \"function\" && name === \"default\") {\n        return module;\n    }\n    // Otherwise, return undefined.\n    return undefined;\n}\n\n//# sourceMappingURL=helpers.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9oZWxwZXJzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQWlCO0FBQ2pCLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLHlDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NjbS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2hlbHBlcnMuanM/NzA5YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEhvaXN0cyBhIG5hbWUgZnJvbSBhIG1vZHVsZSBvciBwcm9taXNlZCBtb2R1bGUuXG4gKlxuICogQHBhcmFtIG1vZHVsZSB0aGUgbW9kdWxlIHRvIGhvaXN0IHRoZSBuYW1lIGZyb21cbiAqIEBwYXJhbSBuYW1lIHRoZSBuYW1lIHRvIGhvaXN0XG4gKiBAcmV0dXJucyB0aGUgdmFsdWUgb24gdGhlIG1vZHVsZSAob3IgcHJvbWlzZWQgbW9kdWxlKVxuICovIFwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaG9pc3RcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGhvaXN0O1xuICAgIH1cbn0pO1xuZnVuY3Rpb24gaG9pc3QobW9kdWxlLCBuYW1lKSB7XG4gICAgLy8gSWYgdGhlIG5hbWUgaXMgYXZhaWxhYmxlIGluIHRoZSBtb2R1bGUsIHJldHVybiBpdC5cbiAgICBpZiAobmFtZSBpbiBtb2R1bGUpIHtcbiAgICAgICAgcmV0dXJuIG1vZHVsZVtuYW1lXTtcbiAgICB9XG4gICAgLy8gSWYgYSBwcm9wZXJ0eSBjYWxsZWQgYHRoZW5gIGV4aXN0cywgYXNzdW1lIGl0J3MgYSBwcm9taXNlIGFuZFxuICAgIC8vIHJldHVybiBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgbmFtZS5cbiAgICBpZiAoXCJ0aGVuXCIgaW4gbW9kdWxlICYmIHR5cGVvZiBtb2R1bGUudGhlbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBtb2R1bGUudGhlbigobW9kKT0+aG9pc3QobW9kLCBuYW1lKSk7XG4gICAgfVxuICAgIC8vIElmIHdlJ3JlIHRyeWluZyB0byBob2lzZSB0aGUgZGVmYXVsdCBleHBvcnQsIGFuZCB0aGUgbW9kdWxlIGlzIGEgZnVuY3Rpb24sXG4gICAgLy8gcmV0dXJuIHRoZSBtb2R1bGUgaXRzZWxmLlxuICAgIGlmICh0eXBlb2YgbW9kdWxlID09PSBcImZ1bmN0aW9uXCIgJiYgbmFtZSA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgICAgcmV0dXJuIG1vZHVsZTtcbiAgICB9XG4gICAgLy8gT3RoZXJ3aXNlLCByZXR1cm4gdW5kZWZpbmVkLlxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhlbHBlcnMuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js\n");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FimageGeneratorApioai&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2FimageGeneratorApioai.ts&middlewareConfigBase64=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FimageGeneratorApioai&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2FimageGeneratorApioai.ts&middlewareConfigBase64=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-route-loader/helpers */ \"(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js\");\n/* harmony import */ var _src_pages_api_imageGeneratorApioai_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/pages/api/imageGeneratorApioai.ts */ \"(api)/./src/pages/api/imageGeneratorApioai.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_pages_api_imageGeneratorApioai_ts__WEBPACK_IMPORTED_MODULE_3__]);\n_src_pages_api_imageGeneratorApioai_ts__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// @ts-ignore this need to be imported from next/dist to be external\n\n\n\nconst PagesAPIRouteModule = next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule;\n// Import the userland code.\n// @ts-expect-error - replaced by webpack/turbopack loader\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_imageGeneratorApioai_ts__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_imageGeneratorApioai_ts__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/imageGeneratorApioai\",\n        pathname: \"/api/imageGeneratorApioai\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _src_pages_api_imageGeneratorApioai_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmltYWdlR2VuZXJhdG9yQXBpb2FpJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGc3JjJTJGcGFnZXMlMkZhcGklMkZpbWFnZUdlbmVyYXRvckFwaW9haS50cyZtaWRkbGV3YXJlQ29uZmlnQmFzZTY0PWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNpRjtBQUNsQjtBQUNtQjtBQUNsRiw0QkFBNEIsdUdBQTBCO0FBQ3REO0FBQ0E7QUFDb0U7QUFDcEU7QUFDQSxpRUFBZSxnR0FBSyxDQUFDLG1FQUFRLFlBQVksRUFBQztBQUMxQztBQUNPLGVBQWUsZ0dBQUssQ0FBQyxtRUFBUTtBQUNwQztBQUNPO0FBQ1A7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsWUFBWTtBQUNaLENBQUM7O0FBRUQscUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jY20vP2EzYzYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQHRzLWlnbm9yZSB0aGlzIG5lZWQgdG8gYmUgaW1wb3J0ZWQgZnJvbSBuZXh0L2Rpc3QgdG8gYmUgZXh0ZXJuYWxcbmltcG9ydCAqIGFzIG1vZHVsZSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9wYWdlcy1hcGkvbW9kdWxlXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9oZWxwZXJzXCI7XG5jb25zdCBQYWdlc0FQSVJvdXRlTW9kdWxlID0gbW9kdWxlLlBhZ2VzQVBJUm91dGVNb2R1bGU7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG4vLyBAdHMtZXhwZWN0LWVycm9yIC0gcmVwbGFjZWQgYnkgd2VicGFjay90dXJib3BhY2sgbG9hZGVyXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9zcmMvcGFnZXMvYXBpL2ltYWdlR2VuZXJhdG9yQXBpb2FpLnRzXCI7XG4vLyBSZS1leHBvcnQgdGhlIGhhbmRsZXIgKHNob3VsZCBiZSB0aGUgZGVmYXVsdCBleHBvcnQpLlxuZXhwb3J0IGRlZmF1bHQgaG9pc3QodXNlcmxhbmQsIFwiZGVmYXVsdFwiKTtcbi8vIFJlLWV4cG9ydCBjb25maWcuXG5leHBvcnQgY29uc3QgY29uZmlnID0gaG9pc3QodXNlcmxhbmQsIFwiY29uZmlnXCIpO1xuLy8gQ3JlYXRlIGFuZCBleHBvcnQgdGhlIHJvdXRlIG1vZHVsZSB0aGF0IHdpbGwgYmUgY29uc3VtZWQuXG5leHBvcnQgY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgUGFnZXNBUElSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuUEFHRVNfQVBJLFxuICAgICAgICBwYWdlOiBcIi9hcGkvaW1hZ2VHZW5lcmF0b3JBcGlvYWlcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9pbWFnZUdlbmVyYXRvckFwaW9haVwiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcIlwiXG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLWFwaS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FimageGeneratorApioai&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2FimageGeneratorApioai.ts&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./src/pages/api/imageGeneratorApioai.ts":
/*!***********************************************!*\
  !*** ./src/pages/api/imageGeneratorApioai.ts ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([openai__WEBPACK_IMPORTED_MODULE_0__]);\nopenai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nasync function handler(req, res) {\n    try {\n        const prompt = req.query.prompt;\n        const n = parseInt(req.query.n, 10);\n        const size = req.query.size;\n        const response = await openai.images.generate({\n            prompt: prompt,\n            n: n,\n            size: \"1024x1024\"\n        });\n        //console.log(\"RESPONSE!!!!:\" , response);\n        res.status(200).json(response);\n    } catch (error) {\n        console.error(\"Error reading images directory:\", error);\n        res.status(500).json({\n            error: \"An error occurred\"\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2ltYWdlR2VuZXJhdG9yQXBpb2FpLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQzRCO0FBRzVCLE1BQU1DLFNBQVMsSUFBSUQsOENBQU1BO0FBRVYsZUFBZUUsUUFBUUMsR0FBbUIsRUFBRUMsR0FBb0I7SUFDM0UsSUFBSTtRQUVBLE1BQU1DLFNBQVNGLElBQUlHLEtBQUssQ0FBQ0QsTUFBTTtRQUMvQixNQUFNRSxJQUFJQyxTQUFTTCxJQUFJRyxLQUFLLENBQUNDLENBQUMsRUFBWTtRQUMxQyxNQUFNRSxPQUFPTixJQUFJRyxLQUFLLENBQUNHLElBQUk7UUFDM0IsTUFBTUMsV0FBVyxNQUFNVCxPQUFPVSxNQUFNLENBQUNDLFFBQVEsQ0FBQztZQUFFUCxRQUFRQTtZQUFRRSxHQUFFQTtZQUFHRSxNQUFLO1FBQVk7UUFDdEYsMENBQTBDO1FBQzFDTCxJQUFJUyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSjtJQUN6QixFQUFFLE9BQU9LLE9BQU87UUFDWkMsUUFBUUQsS0FBSyxDQUFDLG1DQUFtQ0E7UUFDakRYLElBQUlTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFvQjtJQUN0RDtBQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2NtLy4vc3JjL3BhZ2VzL2FwaS9pbWFnZUdlbmVyYXRvckFwaW9haS50cz80YjVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBPcGVuQUkgZnJvbSBcIm9wZW5haVwiO1xuaW1wb3J0IHsgU3RyaW5nTGl0ZXJhbCB9IGZyb20gJ3R5cGVzY3JpcHQnO1xuXG5jb25zdCBvcGVuYWkgPSBuZXcgT3BlbkFJKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgICB0cnkge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJvbXB0ID0gcmVxLnF1ZXJ5LnByb21wdCBhcyBzdHJpbmc7XG4gICAgICAgIGNvbnN0IG4gPSBwYXJzZUludChyZXEucXVlcnkubiBhcyBzdHJpbmcsIDEwKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHJlcS5xdWVyeS5zaXplIGFzIHN0cmluZztcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBvcGVuYWkuaW1hZ2VzLmdlbmVyYXRlKHsgcHJvbXB0OiBwcm9tcHQsIG46biwgc2l6ZTpcIjEwMjR4MTAyNFwiIH0pO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiUkVTUE9OU0UhISEhOlwiICwgcmVzcG9uc2UpO1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNwb25zZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcmVhZGluZyBpbWFnZXMgZGlyZWN0b3J5OicsIGVycm9yKTtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0FuIGVycm9yIG9jY3VycmVkJyB9KTtcbiAgICB9XG5cbn1cblxuXG5cblxuXG4iXSwibmFtZXMiOlsiT3BlbkFJIiwib3BlbmFpIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInByb21wdCIsInF1ZXJ5IiwibiIsInBhcnNlSW50Iiwic2l6ZSIsInJlc3BvbnNlIiwiaW1hZ2VzIiwiZ2VuZXJhdGUiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/imageGeneratorApioai.ts\n");

/***/ }),

/***/ "(api)/./node_modules/next/dist/server/future/route-kind.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/server/future/route-kind.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"RouteKind\", ({\n    enumerable: true,\n    get: function() {\n        return RouteKind;\n    }\n}));\nvar RouteKind;\n(function(RouteKind) {\n    RouteKind[/**\n   * `PAGES` represents all the React pages that are under `pages/`.\n   */ \"PAGES\"] = \"PAGES\";\n    RouteKind[/**\n   * `PAGES_API` represents all the API routes under `pages/api/`.\n   */ \"PAGES_API\"] = \"PAGES_API\";\n    RouteKind[/**\n   * `APP_PAGE` represents all the React pages that are under `app/` with the\n   * filename of `page.{j,t}s{,x}`.\n   */ \"APP_PAGE\"] = \"APP_PAGE\";\n    RouteKind[/**\n   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the\n   * filename of `route.{j,t}s{,x}`.\n   */ \"APP_ROUTE\"] = \"APP_ROUTE\";\n})(RouteKind || (RouteKind = {}));\n\n//# sourceMappingURL=route-kind.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLDZDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLElBQUksRUFBRSxHQUFHO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixJQUFJLEVBQUUsR0FBRztBQUNsQztBQUNBLENBQUMsOEJBQThCOztBQUUvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2NjbS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kLmpzP2I3YjQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSb3V0ZUtpbmRcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFJvdXRlS2luZDtcbiAgICB9XG59KTtcbnZhciBSb3V0ZUtpbmQ7XG4oZnVuY3Rpb24oUm91dGVLaW5kKSB7XG4gICAgUm91dGVLaW5kWy8qKlxuICAgKiBgUEFHRVNgIHJlcHJlc2VudHMgYWxsIHRoZSBSZWFjdCBwYWdlcyB0aGF0IGFyZSB1bmRlciBgcGFnZXMvYC5cbiAgICovIFwiUEFHRVNcIl0gPSBcIlBBR0VTXCI7XG4gICAgUm91dGVLaW5kWy8qKlxuICAgKiBgUEFHRVNfQVBJYCByZXByZXNlbnRzIGFsbCB0aGUgQVBJIHJvdXRlcyB1bmRlciBgcGFnZXMvYXBpL2AuXG4gICAqLyBcIlBBR0VTX0FQSVwiXSA9IFwiUEFHRVNfQVBJXCI7XG4gICAgUm91dGVLaW5kWy8qKlxuICAgKiBgQVBQX1BBR0VgIHJlcHJlc2VudHMgYWxsIHRoZSBSZWFjdCBwYWdlcyB0aGF0IGFyZSB1bmRlciBgYXBwL2Agd2l0aCB0aGVcbiAgICogZmlsZW5hbWUgb2YgYHBhZ2Uue2osdH1zeyx4fWAuXG4gICAqLyBcIkFQUF9QQUdFXCJdID0gXCJBUFBfUEFHRVwiO1xuICAgIFJvdXRlS2luZFsvKipcbiAgICogYEFQUF9ST1VURWAgcmVwcmVzZW50cyBhbGwgdGhlIEFQSSByb3V0ZXMgYW5kIG1ldGFkYXRhIHJvdXRlcyB0aGF0IGFyZSB1bmRlciBgYXBwL2Agd2l0aCB0aGVcbiAgICogZmlsZW5hbWUgb2YgYHJvdXRlLntqLHR9c3sseH1gLlxuICAgKi8gXCJBUFBfUk9VVEVcIl0gPSBcIkFQUF9ST1VURVwiO1xufSkoUm91dGVLaW5kIHx8IChSb3V0ZUtpbmQgPSB7fSkpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1raW5kLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/server/future/route-kind.js\n");

/***/ }),

/***/ "(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.js":
/*!********************************************************************************!*\
  !*** ./node_modules/next/dist/server/future/route-modules/pages-api/module.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n0 && (0);\nfunction _export(target, all) {\n    for(var name in all)Object.defineProperty(target, name, {\n        enumerable: true,\n        get: all[name]\n    });\n}\n_export(exports, {\n    PagesAPIRouteModule: function() {\n        return PagesAPIRouteModule;\n    },\n    default: function() {\n        return _default;\n    }\n});\nconst _routemodule = __webpack_require__(/*! ../route-module */ \"../route-module\");\nconst _node = __webpack_require__(/*! ../../../api-utils/node */ \"../../../api-utils/node\");\nclass PagesAPIRouteModule extends _routemodule.RouteModule {\n    /**\n   *\n   * @param req the incoming server request\n   * @param res the outgoing server response\n   * @param context the context for the render\n   */ async render(req, res, context) {\n        await (0, _node.apiResolver)(req, res, context.query, this.userland, {\n            ...context.previewProps,\n            revalidate: context.revalidate,\n            trustHostHeader: context.trustHostHeader,\n            allowedRevalidateHeaderKeys: context.allowedRevalidateHeaderKeys,\n            hostname: context.hostname\n        }, context.minimalMode, context.dev, context.page);\n    }\n}\nconst _default = PagesAPIRouteModule;\n\n//# sourceMappingURL=module.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9wYWdlcy1hcGkvbW9kdWxlLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsTUFBTSxDQUdMO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELHFCQUFxQixtQkFBTyxDQUFDLHdDQUFpQjtBQUM5QyxjQUFjLG1CQUFPLENBQUMsd0RBQXlCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NjbS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL3BhZ2VzLWFwaS9tb2R1bGUuanM/YjI1NSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbjAgJiYgKG1vZHVsZS5leHBvcnRzID0ge1xuICAgIFBhZ2VzQVBJUm91dGVNb2R1bGU6IG51bGwsXG4gICAgZGVmYXVsdDogbnVsbFxufSk7XG5mdW5jdGlvbiBfZXhwb3J0KHRhcmdldCwgYWxsKSB7XG4gICAgZm9yKHZhciBuYW1lIGluIGFsbClPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGdldDogYWxsW25hbWVdXG4gICAgfSk7XG59XG5fZXhwb3J0KGV4cG9ydHMsIHtcbiAgICBQYWdlc0FQSVJvdXRlTW9kdWxlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFBhZ2VzQVBJUm91dGVNb2R1bGU7XG4gICAgfSxcbiAgICBkZWZhdWx0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9kZWZhdWx0O1xuICAgIH1cbn0pO1xuY29uc3QgX3JvdXRlbW9kdWxlID0gcmVxdWlyZShcIi4uL3JvdXRlLW1vZHVsZVwiKTtcbmNvbnN0IF9ub2RlID0gcmVxdWlyZShcIi4uLy4uLy4uL2FwaS11dGlscy9ub2RlXCIpO1xuY2xhc3MgUGFnZXNBUElSb3V0ZU1vZHVsZSBleHRlbmRzIF9yb3V0ZW1vZHVsZS5Sb3V0ZU1vZHVsZSB7XG4gICAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSByZXEgdGhlIGluY29taW5nIHNlcnZlciByZXF1ZXN0XG4gICAqIEBwYXJhbSByZXMgdGhlIG91dGdvaW5nIHNlcnZlciByZXNwb25zZVxuICAgKiBAcGFyYW0gY29udGV4dCB0aGUgY29udGV4dCBmb3IgdGhlIHJlbmRlclxuICAgKi8gYXN5bmMgcmVuZGVyKHJlcSwgcmVzLCBjb250ZXh0KSB7XG4gICAgICAgIGF3YWl0ICgwLCBfbm9kZS5hcGlSZXNvbHZlcikocmVxLCByZXMsIGNvbnRleHQucXVlcnksIHRoaXMudXNlcmxhbmQsIHtcbiAgICAgICAgICAgIC4uLmNvbnRleHQucHJldmlld1Byb3BzLFxuICAgICAgICAgICAgcmV2YWxpZGF0ZTogY29udGV4dC5yZXZhbGlkYXRlLFxuICAgICAgICAgICAgdHJ1c3RIb3N0SGVhZGVyOiBjb250ZXh0LnRydXN0SG9zdEhlYWRlcixcbiAgICAgICAgICAgIGFsbG93ZWRSZXZhbGlkYXRlSGVhZGVyS2V5czogY29udGV4dC5hbGxvd2VkUmV2YWxpZGF0ZUhlYWRlcktleXMsXG4gICAgICAgICAgICBob3N0bmFtZTogY29udGV4dC5ob3N0bmFtZVxuICAgICAgICB9LCBjb250ZXh0Lm1pbmltYWxNb2RlLCBjb250ZXh0LmRldiwgY29udGV4dC5wYWdlKTtcbiAgICB9XG59XG5jb25zdCBfZGVmYXVsdCA9IFBhZ2VzQVBJUm91dGVNb2R1bGU7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vZHVsZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FimageGeneratorApioai&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2FimageGeneratorApioai.ts&middlewareConfigBase64=e30%3D!"));
module.exports = __webpack_exports__;

})();