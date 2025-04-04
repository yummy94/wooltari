"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_onesignal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-onesignal */ \"(app-pages-browser)/./node_modules/react-onesignal/dist/index.es.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [language, setLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('en');\n    const [isOneSignalReady, setIsOneSignalReady] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    // Initialize OneSignal\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"Home.useEffect\": ()=>{\n            if (false) {}\n            console.log('[page.js] useEffect - Initializing OneSignal setup...');\n            const initOneSignal = {\n                \"Home.useEffect.initOneSignal\": async ()=>{\n                    try {\n                        await react_onesignal__WEBPACK_IMPORTED_MODULE_3__[\"default\"].init({\n                            appId: \"b43abeb1-cee4-49fb-b380-316cf45ad44a\",\n                            allowLocalhostAsSecureOrigin: true,\n                            notifyButton: {\n                                enable: false\n                            },\n                            promptOptions: {\n                                slidedown: {\n                                    enabled: true\n                                }\n                            }\n                        });\n                        console.log('[page.js] OneSignal initialized successfully');\n                        setIsOneSignalReady(true);\n                    } catch (error) {\n                        console.error('[page.js] OneSignal initialization error:', error);\n                    }\n                }\n            }[\"Home.useEffect.initOneSignal\"];\n            initOneSignal();\n        }\n    }[\"Home.useEffect\"], []); // Runs once on mount\n    // Handle sharing\n    const handleShare = ()=>{\n        if ( true && window.ReactNativeWebView) {\n            window.ReactNativeWebView.postMessage(JSON.stringify({\n                type: 'share',\n                data: {\n                    url: window.location.href,\n                    title: 'Wooltari App'\n                }\n            }));\n        } else if (navigator.share) {\n            navigator.share({\n                title: 'Wooltari App',\n                url: window.location.href\n            }).catch((err)=>console.error('Error sharing:', err));\n        } else {\n            alert('Share feature not supported on this browser');\n        }\n    };\n    // Handle language change\n    const handleLanguageChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)({\n        \"Home.useCallback[handleLanguageChange]\": (newLanguage)=>{\n            setLanguage(newLanguage);\n            if (isOneSignalReady) {\n                console.log(\"[page.js] Attempting to send tag 'language': \".concat(newLanguage));\n                try {\n                    // v3.2.2 API uses getTags/setTags not sendTag\n                    react_onesignal__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getTags().then({\n                        \"Home.useCallback[handleLanguageChange]\": (tags)=>{\n                            console.log('[page.js] Current tags:', tags);\n                            return react_onesignal__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setTags({\n                                language: newLanguage\n                            });\n                        }\n                    }[\"Home.useCallback[handleLanguageChange]\"]).then({\n                        \"Home.useCallback[handleLanguageChange]\": ()=>{\n                            console.log(\"[page.js] OneSignal language tag set to: \".concat(newLanguage));\n                        }\n                    }[\"Home.useCallback[handleLanguageChange]\"]).catch({\n                        \"Home.useCallback[handleLanguageChange]\": (error)=>{\n                            console.error(\"[page.js] Error setting tags for \".concat(newLanguage, \":\"), error);\n                        }\n                    }[\"Home.useCallback[handleLanguageChange]\"]);\n                } catch (error) {\n                    console.error(\"[page.js] Error with OneSignal tag operation:\", error);\n                }\n            } else {\n                console.warn(\"[page.js] OneSignal not ready when trying to set language to \".concat(newLanguage, \". isReady: \").concat(isOneSignalReady));\n            }\n            // Send message to React Native if applicable\n            if ( true && window.ReactNativeWebView) {\n                window.ReactNativeWebView.postMessage(JSON.stringify({\n                    type: 'languageChange',\n                    data: {\n                        language: newLanguage\n                    }\n                }));\n            }\n        }\n    }[\"Home.useCallback[handleLanguageChange]\"], [\n        isOneSignalReady\n    ]); // Depend on the ready state\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_1___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Wooltari Web App\"\n            }, void 0, false, {\n                fileName: \"/Users/hyunkyoyum/Desktop/wooltari_project/wooltari-web/app/page.js\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Language\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hyunkyoyum/Desktop/wooltari_project/wooltari-web/app/page.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_1___default().buttonGroup),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                id: \"lang-en\",\n                                className: \"\".concat((_page_module_css__WEBPACK_IMPORTED_MODULE_1___default().button), \" \").concat(language === 'en' ? (_page_module_css__WEBPACK_IMPORTED_MODULE_1___default().active) : ''),\n                                onClick: ()=>handleLanguageChange('en'),\n                                disabled: !isOneSignalReady,\n                                children: \"English\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hyunkyoyum/Desktop/wooltari_project/wooltari-web/app/page.js\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                id: \"lang-ko\",\n                                className: \"\".concat((_page_module_css__WEBPACK_IMPORTED_MODULE_1___default().button), \" \").concat(language === 'ko' ? (_page_module_css__WEBPACK_IMPORTED_MODULE_1___default().active) : ''),\n                                onClick: ()=>handleLanguageChange('ko'),\n                                disabled: !isOneSignalReady,\n                                children: \"Korean\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hyunkyoyum/Desktop/wooltari_project/wooltari-web/app/page.js\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hyunkyoyum/Desktop/wooltari_project/wooltari-web/app/page.js\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this),\n                    isOneSignalReady ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            fontSize: '0.8em',\n                            marginTop: '5px'\n                        },\n                        children: \"OneSignal Ready\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hyunkyoyum/Desktop/wooltari_project/wooltari-web/app/page.js\",\n                        lineNumber: 113,\n                        columnNumber: 29\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            fontSize: '0.8em',\n                            marginTop: '5px'\n                        },\n                        children: \"OneSignal Initializing...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hyunkyoyum/Desktop/wooltari_project/wooltari-web/app/page.js\",\n                        lineNumber: 113,\n                        columnNumber: 100\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hyunkyoyum/Desktop/wooltari_project/wooltari-web/app/page.js\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Share\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hyunkyoyum/Desktop/wooltari_project/wooltari-web/app/page.js\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        id: \"share-button\",\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_1___default().button),\n                        onClick: handleShare,\n                        children: \"Share\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hyunkyoyum/Desktop/wooltari_project/wooltari-web/app/page.js\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hyunkyoyum/Desktop/wooltari_project/wooltari-web/app/page.js\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hyunkyoyum/Desktop/wooltari_project/wooltari-web/app/page.js\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"oQ1rajtKK6uXJ4QCQJpeeMJOGSE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNFLDhEQUFDc0M7UUFBS0MsV0FBVy9DLDhEQUFXOzswQkFDMUIsOERBQUNnRDswQkFBRzs7Ozs7OzBCQUVKLDhEQUFDQztnQkFBSUYsV0FBVy9DLDhEQUFXOztrQ0FDekIsOERBQUNtRDtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDRjt3QkFBSUYsV0FBVy9DLHFFQUFrQjs7MENBQ2hDLDhEQUFDcUQ7Z0NBQ0NDLElBQUc7Z0NBQ0hQLFdBQVcsR0FBb0J6QyxPQUFqQk4sZ0VBQWEsRUFBQyxLQUEwQyxPQUF2Q00sYUFBYSxPQUFPTixnRUFBYSxHQUFHO2dDQUNuRXdELFNBQVMsSUFBTWpCLHFCQUFxQjtnQ0FDcENrQixVQUFVLENBQUNqRDswQ0FDWjs7Ozs7OzBDQUdELDhEQUFDNkM7Z0NBQ0NDLElBQUc7Z0NBQ0hQLFdBQVcsR0FBb0J6QyxPQUFqQk4sZ0VBQWEsRUFBQyxLQUEwQyxPQUF2Q00sYUFBYSxPQUFPTixnRUFBYSxHQUFHO2dDQUNuRXdELFNBQVMsSUFBTWpCLHFCQUFxQjtnQ0FDcENrQixVQUFVLENBQUNqRDswQ0FDWjs7Ozs7Ozs7Ozs7O29CQUtGQSxpQ0FBbUIsOERBQUNrRDt3QkFBRUMsT0FBTzs0QkFBQ0MsVUFBVTs0QkFBU0MsV0FBVzt3QkFBSztrQ0FBRzs7Ozs7NkNBQXNCLDhEQUFDSDt3QkFBRUMsT0FBTzs0QkFBQ0MsVUFBVTs0QkFBU0MsV0FBVzt3QkFBSztrQ0FBRzs7Ozs7Ozs7Ozs7OzBCQUc5SSw4REFBQ1o7Z0JBQUlGLFdBQVcvQyw4REFBVzs7a0NBQ3pCLDhEQUFDbUQ7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0U7d0JBQ0NDLElBQUc7d0JBQ0hQLFdBQVcvQyxnRUFBYTt3QkFDeEJ3RCxTQUFTbEM7a0NBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1UO0dBekh3QmpCO0tBQUFBIiwic291cmNlcyI6WyIvVXNlcnMvaHl1bmt5b3l1bS9EZXNrdG9wL3dvb2x0YXJpX3Byb2plY3Qvd29vbHRhcmktd2ViL2FwcC9wYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcGFnZS5tb2R1bGUuY3NzJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE9uZVNpZ25hbCBmcm9tICdyZWFjdC1vbmVzaWduYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbGFuZ3VhZ2UsIHNldExhbmd1YWdlXSA9IHVzZVN0YXRlKCdlbicpO1xuICBjb25zdCBbaXNPbmVTaWduYWxSZWFkeSwgc2V0SXNPbmVTaWduYWxSZWFkeV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gSW5pdGlhbGl6ZSBPbmVTaWduYWxcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjsgLy8gRG9uJ3QgcnVuIG9uIHNlcnZlclxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdbcGFnZS5qc10gdXNlRWZmZWN0IC0gSW5pdGlhbGl6aW5nIE9uZVNpZ25hbCBzZXR1cC4uLicpO1xuICAgIFxuICAgIGNvbnN0IGluaXRPbmVTaWduYWwgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBPbmVTaWduYWwuaW5pdCh7XG4gICAgICAgICAgYXBwSWQ6IFwiYjQzYWJlYjEtY2VlNC00OWZiLWIzODAtMzE2Y2Y0NWFkNDRhXCIsXG4gICAgICAgICAgYWxsb3dMb2NhbGhvc3RBc1NlY3VyZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgICBub3RpZnlCdXR0b246IHsgZW5hYmxlOiBmYWxzZSB9LFxuICAgICAgICAgIHByb21wdE9wdGlvbnM6IHsgc2xpZGVkb3duOiB7IGVuYWJsZWQ6IHRydWUgfSB9LFxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCdbcGFnZS5qc10gT25lU2lnbmFsIGluaXRpYWxpemVkIHN1Y2Nlc3NmdWxseScpO1xuICAgICAgICBzZXRJc09uZVNpZ25hbFJlYWR5KHRydWUpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignW3BhZ2UuanNdIE9uZVNpZ25hbCBpbml0aWFsaXphdGlvbiBlcnJvcjonLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICBpbml0T25lU2lnbmFsKCk7XG4gIH0sIFtdKTsgLy8gUnVucyBvbmNlIG9uIG1vdW50XG5cbiAgLy8gSGFuZGxlIHNoYXJpbmdcbiAgY29uc3QgaGFuZGxlU2hhcmUgPSAoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5SZWFjdE5hdGl2ZVdlYlZpZXcpIHtcbiAgICAgIHdpbmRvdy5SZWFjdE5hdGl2ZVdlYlZpZXcucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0eXBlOiAnc2hhcmUnLFxuICAgICAgICBkYXRhOiB7IHVybDogd2luZG93LmxvY2F0aW9uLmhyZWYsIHRpdGxlOiAnV29vbHRhcmkgQXBwJyB9XG4gICAgICB9KSk7XG4gICAgfSBlbHNlIGlmIChuYXZpZ2F0b3Iuc2hhcmUpIHtcbiAgICAgIG5hdmlnYXRvci5zaGFyZSh7XG4gICAgICAgIHRpdGxlOiAnV29vbHRhcmkgQXBwJyxcbiAgICAgICAgdXJsOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBzaGFyaW5nOicsIGVycikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydCgnU2hhcmUgZmVhdHVyZSBub3Qgc3VwcG9ydGVkIG9uIHRoaXMgYnJvd3NlcicpO1xuICAgIH1cbiAgfTtcblxuICAvLyBIYW5kbGUgbGFuZ3VhZ2UgY2hhbmdlXG4gIGNvbnN0IGhhbmRsZUxhbmd1YWdlQ2hhbmdlID0gdXNlQ2FsbGJhY2soKG5ld0xhbmd1YWdlKSA9PiB7XG4gICAgc2V0TGFuZ3VhZ2UobmV3TGFuZ3VhZ2UpO1xuICAgIFxuICAgIGlmIChpc09uZVNpZ25hbFJlYWR5KSB7XG4gICAgICBjb25zb2xlLmxvZyhgW3BhZ2UuanNdIEF0dGVtcHRpbmcgdG8gc2VuZCB0YWcgJ2xhbmd1YWdlJzogJHtuZXdMYW5ndWFnZX1gKTtcbiAgICAgIFxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gdjMuMi4yIEFQSSB1c2VzIGdldFRhZ3Mvc2V0VGFncyBub3Qgc2VuZFRhZ1xuICAgICAgICBPbmVTaWduYWwuZ2V0VGFncygpLnRoZW4oKHRhZ3MpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnW3BhZ2UuanNdIEN1cnJlbnQgdGFnczonLCB0YWdzKTtcbiAgICAgICAgICByZXR1cm4gT25lU2lnbmFsLnNldFRhZ3Moe2xhbmd1YWdlOiBuZXdMYW5ndWFnZX0pO1xuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgW3BhZ2UuanNdIE9uZVNpZ25hbCBsYW5ndWFnZSB0YWcgc2V0IHRvOiAke25ld0xhbmd1YWdlfWApO1xuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBbcGFnZS5qc10gRXJyb3Igc2V0dGluZyB0YWdzIGZvciAke25ld0xhbmd1YWdlfTpgLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgW3BhZ2UuanNdIEVycm9yIHdpdGggT25lU2lnbmFsIHRhZyBvcGVyYXRpb246YCwgZXJyb3IpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oYFtwYWdlLmpzXSBPbmVTaWduYWwgbm90IHJlYWR5IHdoZW4gdHJ5aW5nIHRvIHNldCBsYW5ndWFnZSB0byAke25ld0xhbmd1YWdlfS4gaXNSZWFkeTogJHtpc09uZVNpZ25hbFJlYWR5fWApO1xuICAgIH1cblxuICAgIC8vIFNlbmQgbWVzc2FnZSB0byBSZWFjdCBOYXRpdmUgaWYgYXBwbGljYWJsZVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuUmVhY3ROYXRpdmVXZWJWaWV3KSB7XG4gICAgICB3aW5kb3cuUmVhY3ROYXRpdmVXZWJWaWV3LnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdHlwZTogJ2xhbmd1YWdlQ2hhbmdlJyxcbiAgICAgICAgZGF0YTogeyBsYW5ndWFnZTogbmV3TGFuZ3VhZ2UgfVxuICAgICAgfSkpO1xuICAgIH1cbiAgfSwgW2lzT25lU2lnbmFsUmVhZHldKTsgLy8gRGVwZW5kIG9uIHRoZSByZWFkeSBzdGF0ZVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICA8aDE+V29vbHRhcmkgV2ViIEFwcDwvaDE+XG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgIDxoMj5MYW5ndWFnZTwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uR3JvdXB9PlxuICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICBpZD1cImxhbmctZW5cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYnV0dG9ufSAke2xhbmd1YWdlID09PSAnZW4nID8gc3R5bGVzLmFjdGl2ZSA6ICcnfWB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVMYW5ndWFnZUNoYW5nZSgnZW4nKX1cbiAgICAgICAgICAgIGRpc2FibGVkPXshaXNPbmVTaWduYWxSZWFkeX0gLy8gRGlzYWJsZSB1bnRpbCBTREsgaXMgY29uZmlybWVkIHJlYWR5XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRW5nbGlzaFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICBpZD1cImxhbmcta29cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYnV0dG9ufSAke2xhbmd1YWdlID09PSAna28nID8gc3R5bGVzLmFjdGl2ZSA6ICcnfWB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVMYW5ndWFnZUNoYW5nZSgna28nKX1cbiAgICAgICAgICAgIGRpc2FibGVkPXshaXNPbmVTaWduYWxSZWFkeX0gLy8gRGlzYWJsZSB1bnRpbCBTREsgaXMgY29uZmlybWVkIHJlYWR5XG4gICAgICAgICAgPlxuICAgICAgICAgICAgS29yZWFuXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogVUkgZmVlZGJhY2sgYmFzZWQgb24gdGhlIHJlYWR5IHN0YXRlICovfVxuICAgICAgICB7aXNPbmVTaWduYWxSZWFkeSA/IDxwIHN0eWxlPXt7Zm9udFNpemU6ICcwLjhlbScsIG1hcmdpblRvcDogJzVweCd9fT5PbmVTaWduYWwgUmVhZHk8L3A+IDogPHAgc3R5bGU9e3tmb250U2l6ZTogJzAuOGVtJywgbWFyZ2luVG9wOiAnNXB4J319Pk9uZVNpZ25hbCBJbml0aWFsaXppbmcuLi48L3A+fVxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgIDxoMj5TaGFyZTwvaDI+XG4gICAgICAgIDxidXR0b24gXG4gICAgICAgICAgaWQ9XCJzaGFyZS1idXR0b25cIlxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn1cbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTaGFyZX1cbiAgICAgICAgPlxuICAgICAgICAgIFNoYXJlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ2FsbGJhY2siLCJPbmVTaWduYWwiLCJIb21lIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsImlzT25lU2lnbmFsUmVhZHkiLCJzZXRJc09uZVNpZ25hbFJlYWR5IiwiY29uc29sZSIsImxvZyIsImluaXRPbmVTaWduYWwiLCJpbml0IiwiYXBwSWQiLCJhbGxvd0xvY2FsaG9zdEFzU2VjdXJlT3JpZ2luIiwibm90aWZ5QnV0dG9uIiwiZW5hYmxlIiwicHJvbXB0T3B0aW9ucyIsInNsaWRlZG93biIsImVuYWJsZWQiLCJlcnJvciIsImhhbmRsZVNoYXJlIiwid2luZG93IiwiUmVhY3ROYXRpdmVXZWJWaWV3IiwicG9zdE1lc3NhZ2UiLCJKU09OIiwic3RyaW5naWZ5IiwidHlwZSIsImRhdGEiLCJ1cmwiLCJsb2NhdGlvbiIsImhyZWYiLCJ0aXRsZSIsIm5hdmlnYXRvciIsInNoYXJlIiwiY2F0Y2giLCJlcnIiLCJhbGVydCIsImhhbmRsZUxhbmd1YWdlQ2hhbmdlIiwibmV3TGFuZ3VhZ2UiLCJnZXRUYWdzIiwidGhlbiIsInRhZ3MiLCJzZXRUYWdzIiwid2FybiIsIm1haW4iLCJjbGFzc05hbWUiLCJoMSIsImRpdiIsImNhcmQiLCJoMiIsImJ1dHRvbkdyb3VwIiwiYnV0dG9uIiwiaWQiLCJhY3RpdmUiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJwIiwic3R5bGUiLCJmb250U2l6ZSIsIm1hcmdpblRvcCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});