"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Blog; }\n/* harmony export */ });\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/arrakeen/Repos/nextjs-blog/pages/blog.js\";\n\n\n\n\n\n\n\nvar calendar = function calendar(todate) {\n  return (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.formatRelative)((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.addDays)(new Date(todate), 1), new Date());\n}; // Blog page\n\n\nvar __N_SSG = true;\nfunction Blog(_ref) {\n  var _this = this;\n\n  var allPostsData = _ref.allPostsData;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_0__.default, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"section\", {\n      className: \"\".concat((_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().headingMd), \" \").concat((_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().padding1px)),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h2\", {\n        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().headingLg),\n        children: \"Blog\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().lightText),\n        children: \"just noise\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"ul\", {\n        className: \"\".concat((_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().list), \" \").concat((_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().spacing)),\n        children: allPostsData.map(function (_ref2) {\n          var id = _ref2.id,\n              date = _ref2.date,\n              title = _ref2.title;\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"li\", {\n            className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().listItem),\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n              href: \"/blog/\".concat(id),\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n                children: title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 22,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 21,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 24,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"small\", {\n              className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().lightText),\n              children: calendar(date)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 25,\n              columnNumber: 15\n            }, _this)]\n          }, id, true, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, this);\n}\n_c = Blog;\n\nvar _c;\n\n$RefreshReg$(_c, \"Blog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7O0FBRUEsSUFBTVMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsTUFBRDtBQUFBLFNBQVlQLHdEQUFjLENBQUNFLGlEQUFPLENBQUMsSUFBSU0sSUFBSixDQUFTRCxNQUFULENBQUQsRUFBbUIsQ0FBbkIsQ0FBUixFQUErQixJQUFJQyxJQUFKLEVBQS9CLENBQTFCO0FBQUEsQ0FBakIsRUFFQTs7OztBQUNlLFNBQVNDLElBQVQsT0FBZ0M7QUFBQTs7QUFBQSxNQUFoQkMsWUFBZ0IsUUFBaEJBLFlBQWdCO0FBQzdDLHNCQUNFLDhEQUFDLHVEQUFEO0FBQUEsMkJBQ0U7QUFBUyxlQUFTLFlBQUtQLDJFQUFMLGNBQTZCQSw0RUFBN0IsQ0FBbEI7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUVBLDJFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUVBLDJFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBSSxpQkFBUyxZQUFLQSxzRUFBTCxjQUF3QkEseUVBQXhCLENBQWI7QUFBQSxrQkFDR08sWUFBWSxDQUFDTyxHQUFiLENBQWlCO0FBQUEsY0FBR0MsRUFBSCxTQUFHQSxFQUFIO0FBQUEsY0FBT0MsSUFBUCxTQUFPQSxJQUFQO0FBQUEsY0FBYUMsS0FBYixTQUFhQSxLQUFiO0FBQUEsOEJBQ2hCO0FBQUkscUJBQVMsRUFBRWpCLDBFQUFmO0FBQUEsb0NBQ0UsOERBQUMsa0RBQUQ7QUFBTSxrQkFBSSxrQkFBV2UsRUFBWCxDQUFWO0FBQUEscUNBQ0U7QUFBQSwwQkFBSUU7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkYsZUFLRTtBQUFPLHVCQUFTLEVBQUVqQiwyRUFBbEI7QUFBQSx3QkFBeUNHLFFBQVEsQ0FBQ2EsSUFBRDtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxGO0FBQUEsYUFBeUNELEVBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGdCO0FBQUEsU0FBakI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUJEO0tBcEJ1QlQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy5qcz82MWI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgeyBmb3JtYXQsIGZvcm1hdERpc3RhbmNlLCBmb3JtYXRSZWxhdGl2ZSwgc3ViRGF5cywgYWRkRGF5cyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBnZXRTb3J0ZWRQb3N0c0RhdGEgfSBmcm9tIFwiLi4vbGliL3Bvc3RzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgY2FsZW5kYXIgPSAodG9kYXRlKSA9PiBmb3JtYXRSZWxhdGl2ZShhZGREYXlzKG5ldyBEYXRlKHRvZGF0ZSksIDEpLCBuZXcgRGF0ZSgpKTtcblxuLy8gQmxvZyBwYWdlXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKHsgYWxsUG9zdHNEYXRhIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgJHt1dGlsU3R5bGVzLmhlYWRpbmdNZH0gJHt1dGlsU3R5bGVzLnBhZGRpbmcxcHh9YH0+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ0xnfT5CbG9nPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3V0aWxTdHlsZXMubGlnaHRUZXh0fT5qdXN0IG5vaXNlPC9kaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e2Ake3V0aWxTdHlsZXMubGlzdH0gJHt1dGlsU3R5bGVzLnNwYWNpbmd9YH0+XG4gICAgICAgICAge2FsbFBvc3RzRGF0YS5tYXAoKHsgaWQsIGRhdGUsIHRpdGxlIH0pID0+IChcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3V0aWxTdHlsZXMubGlzdEl0ZW19IGtleT17aWR9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2Jsb2cvJHtpZH1gfT5cbiAgICAgICAgICAgICAgICA8YT57dGl0bGV9PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmxpZ2h0VGV4dH0+e2NhbGVuZGFyKGRhdGUpfTwvc21hbGw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IGFsbFBvc3RzRGF0YSA9IGdldFNvcnRlZFBvc3RzRGF0YSgpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGFsbFBvc3RzRGF0YSxcbiAgICB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkxheW91dCIsImZvcm1hdCIsImZvcm1hdERpc3RhbmNlIiwiZm9ybWF0UmVsYXRpdmUiLCJzdWJEYXlzIiwiYWRkRGF5cyIsInV0aWxTdHlsZXMiLCJMaW5rIiwiUmVhY3QiLCJjYWxlbmRhciIsInRvZGF0ZSIsIkRhdGUiLCJCbG9nIiwiYWxsUG9zdHNEYXRhIiwiaGVhZGluZ01kIiwicGFkZGluZzFweCIsImhlYWRpbmdMZyIsImxpZ2h0VGV4dCIsImxpc3QiLCJzcGFjaW5nIiwibWFwIiwiaWQiLCJkYXRlIiwidGl0bGUiLCJsaXN0SXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog.js\n");

/***/ })

});