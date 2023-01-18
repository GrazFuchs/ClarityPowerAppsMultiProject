/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ClarityCodeSnippet/index.ts":
/*!*************************************!*\
  !*** ./ClarityCodeSnippet/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.ClarityComponent = void 0;\nvar ClarityComponent = /** @class */function () {\n  function ClarityComponent() {}\n  /**\r\n   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.\r\n   * Data-set values are not initialized here, use updateView.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.\r\n   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.\r\n   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.\r\n   * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.\r\n   */\n  ClarityComponent.prototype.init = function (context, notifyOutputChanged, state, container) {\n    // retrieving id from input\n    this.context = context;\n    this.id = context.parameters.YourClarityProjectID.raw;\n    // add script tag to html header\n    var head = document.getElementsByTagName('head')[0];\n    var script = document.createElement('script');\n    script.setAttribute('id', 'clarityCode');\n    script.innerHTML = '(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src=\"https://www.clarity.ms/tag/\"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, \"clarity\", \"script\", \"' + this.id + '\");';\n    head.insertBefore(script, head.firstChild);\n    // a div for user information\n    var textDiv = \"<div>We track this app with Microsoft Clarity and project \" + this.id + \"</div>\";\n    this.container = document.createElement(\"div\");\n    this.container.id = \"ClarityDivID\";\n    this.container.innerHTML = textDiv;\n    container.appendChild(this.container);\n  };\n  /**\r\n   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions\r\n   */\n  ClarityComponent.prototype.updateView = function (context) {};\n  /**\r\n   * It is called by the framework prior to a control receiving new data.\r\n   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”\r\n   */\n  ClarityComponent.prototype.getOutputs = function () {\n    return {};\n  };\n  /**\r\n   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.\r\n   * i.e. cancelling any pending remote calls, removing listeners, etc.\r\n   */\n  ClarityComponent.prototype.destroy = function () {\n    // Add code to cleanup control if necessary\n  };\n  return ClarityComponent;\n}();\nexports.ClarityComponent = ClarityComponent;\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./ClarityCodeSnippet/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./ClarityCodeSnippet/index.ts"](0, __webpack_exports__);
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('ClarityNameSpace.ClarityComponent', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.ClarityComponent);
} else {
	var ClarityNameSpace = ClarityNameSpace || {};
	ClarityNameSpace.ClarityComponent = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.ClarityComponent;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}