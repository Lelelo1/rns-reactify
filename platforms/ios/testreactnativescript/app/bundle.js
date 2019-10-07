require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.scss": "./app.scss"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Reactified/ExtraProps.ts": "./Reactified/ExtraProps.ts",
	"./Reactified/Implementation/CustomNodeHierarchyManager/__customHostConfigAppendChildImpl.ts": "./Reactified/Implementation/CustomNodeHierarchyManager/__customHostConfigAppendChildImpl.ts",
	"./Reactified/Implementation/CustomNodeHierarchyManager/__customHostConfigInsertBeforeImpl.ts": "./Reactified/Implementation/CustomNodeHierarchyManager/__customHostConfigInsertBeforeImpl.ts",
	"./Reactified/Implementation/CustomNodeHierarchyManager/__customHostConfigRemoveChildImpl.ts": "./Reactified/Implementation/CustomNodeHierarchyManager/__customHostConfigRemoveChildImpl.ts",
	"./Reactified/Implementation/Helpers.ts": "./Reactified/Implementation/Helpers.ts",
	"./Reactified/Implementation/React/componentDidMountImpl.ts": "./Reactified/Implementation/React/componentDidMountImpl.ts",
	"./Reactified/Implementation/React/componentWillUnmountImpl.ts": "./Reactified/Implementation/React/componentWillUnmountImpl.ts",
	"./Reactified/Implementation/React/renderImpl.ts": "./Reactified/Implementation/React/renderImpl.ts",
	"./Reactified/Implementation/React/shouldComponentUpdateImpl.ts": "./Reactified/Implementation/React/shouldComponentUpdateImpl.ts",
	"./Reactified/Implementation/Types.ts": "./Reactified/Implementation/Types.ts",
	"./Reactified/Implementation/Unique/onDataChangeImpl.ts": "./Reactified/Implementation/Unique/onDataChangeImpl.ts",
	"./Reactified/Implementation/Unique/onSelectedIndexChangeImpl.ts": "./Reactified/Implementation/Unique/onSelectedIndexChangeImpl.ts",
	"./Reactified/Implementation/Unique/onTextChangeImpl.ts": "./Reactified/Implementation/Unique/onTextChangeImpl.ts",
	"./Reactified/Implementation/Unique/onToggleImpl.ts": "./Reactified/Implementation/Unique/onToggleImpl.ts",
	"./Reactified/Implementation/Unique/onValueChangeImpl.ts": "./Reactified/Implementation/Unique/onValueChangeImpl.ts",
	"./Reactified/Implementation/getCurrentRefImpl.ts": "./Reactified/Implementation/getCurrentRefImpl.ts",
	"./Reactified/Implementation/updateListenersHelperImpl.ts": "./Reactified/Implementation/updateListenersHelperImpl.ts",
	"./Reactified/Implementation/updateListenersImpl.ts": "./Reactified/Implementation/updateListenersImpl.ts",
	"./Reactified/Reactified.ts": "./Reactified/Reactified.ts",
	"./app.scss": "./app.scss",
	"./app.ts": "./app.ts",
	"./components/AppContainer.scss": "./components/AppContainer.scss"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./Reactified/ExtraProps.ts":
/***/ (function(module, exports, __webpack_require__) {

// inside https://github.com/shirakaba/react-nativescript/blob/master/react-nativescript/src/components/Switch.ts
// can listener be attached to this:PROPS.onToggle ?; 
if (false ) {} 

/***/ }),

/***/ "./Reactified/Implementation/CustomNodeHierarchyManager/__customHostConfigAppendChildImpl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__customHostConfigAppendChildImpl", function() { return __customHostConfigAppendChildImpl; });
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react-nativescript/dist/client/ElementRegistry.js");
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_text_formatted_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/text/formatted-string.js");
/* harmony import */ var tns_core_modules_text_formatted_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_text_formatted_string__WEBPACK_IMPORTED_MODULE_1__);


var __customHostConfigAppendChildImpl = function (parent, child) {
  return textBaseImpl(parent, child);
};

var textBaseImpl = function (parent, child) {
  if (parent instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["TextBase"]) {
    if (child instanceof tns_core_modules_text_formatted_string__WEBPACK_IMPORTED_MODULE_1__["FormattedString"]) {
      parent.formattedText = child;
      return true;
    }
  } // i.e. defer to Host Config.


  return false;
};; 
if (false ) {} 

/***/ }),

/***/ "./Reactified/Implementation/CustomNodeHierarchyManager/__customHostConfigInsertBeforeImpl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__customHostConfigInsertBeforeImpl", function() { return __customHostConfigInsertBeforeImpl; });
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react-nativescript/dist/client/ElementRegistry.js");
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_text_formatted_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/text/formatted-string.js");
/* harmony import */ var tns_core_modules_text_formatted_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_text_formatted_string__WEBPACK_IMPORTED_MODULE_1__);


var __customHostConfigInsertBeforeImpl = function (parent, child, beforeChild) {
  return textBaseImpl(parent, child, beforeChild);
};

var textBaseImpl = function (parent, child, beforeChild) {
  if (parent instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["TextBase"]) {
    if (child instanceof tns_core_modules_text_formatted_string__WEBPACK_IMPORTED_MODULE_1__["FormattedString"]) {
      parent.formattedText = child;
      return true;
    }
  } // i.e. defer to Host Config.


  return false;
};; 
if (false ) {} 

/***/ }),

/***/ "./Reactified/Implementation/CustomNodeHierarchyManager/__customHostConfigRemoveChildImpl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__customHostConfigRemoveChildImpl", function() { return __customHostConfigRemoveChildImpl; });
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react-nativescript/dist/client/ElementRegistry.js");
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_text_formatted_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/text/formatted-string.js");
/* harmony import */ var tns_core_modules_text_formatted_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_text_formatted_string__WEBPACK_IMPORTED_MODULE_1__);


var __customHostConfigRemoveChildImpl = function (parent, child) {
  return textBaseImpl(parent, child);
};

var textBaseImpl = function (parent, child) {
  if (parent instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["TextBase"]) {
    if (child instanceof tns_core_modules_text_formatted_string__WEBPACK_IMPORTED_MODULE_1__["FormattedString"]) {
      parent.formattedText = null;
      return true;
    } // i.e. defer to Host Config.


    return false;
  }
};; 
if (false ) {} 

/***/ }),

/***/ "./Reactified/Implementation/Helpers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nameOf", function() { return nameOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstLetterLowercase", function() { return firstLetterLowercase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "executeInOrder", function() { return executeInOrder; });
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react-nativescript/dist/client/ElementRegistry.js");
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__);

function nameOf(object) {
  return object.constructor.name;
}
function firstLetterLowercase(name) {
  return name.charAt(0).toLowerCase() + name.slice(1);
}
var implMethodRegistry = [];
console.log("all elements in element registry");

for (var elementName in react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["elementMap"]) {
  implMethodRegistry.push(elementName + "Impl");
}

var executeInOrder = function (implMethods) {
  var args = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }

  var returnValue = undefined;
  var run = undefined;
  run = implMethods.find(function (method) {
    return method.name === "genericImpl";
  });

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "observableImpl";
  });

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "viewBaseImpl";
  }); // extends Observable...

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "viewImpl";
  }); // extends ViewBase...

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "actionItemImpl";
  });

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "pageImpl";
  }); // extends View...

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "textBaseImpl";
  });

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "datePickerImpl";
  });

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "frameImpl";
  });

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "htmlViewImpl";
  });

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "listPickerImpl";
  });

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "placeholderImpl";
  });

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "searchBarImpl";
  });

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "segmentedBarImpl";
  });

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "sliderImpl";
  });

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "switchImpl";
  });

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "contentViewImpl";
  });

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "scrollViewImpl";
  }); // extends ContentView...

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "buttonImpl";
  }); // extends TextBase...

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "labelImpl";
  });

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "editableTextBaseImpl";
  });

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "textFieldImpl";
  }); // extends EditableTextBase...

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  return returnValue;
};
var hierarchyMap = {
  "AbsoluteLayout": "LayoutBase",
  "ActionBar": "View",
  "ActionItem": "ViewBase",
  "ActivityIndicator": "ViewBase"
};; 
if (false ) {} 

/***/ }),

/***/ "./Reactified/Implementation/React/componentDidMountImpl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentDidMountImpl", function() { return componentDidMountImpl; });
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./Reactified/Implementation/Helpers.ts");

var componentDidMountImpl = function (instance) {
  Object(_Helpers__WEBPACK_IMPORTED_MODULE_0__["executeInOrder"])([observableImpl, datePickerImpl, listPickerImpl, searchBarImpl, sliderImpl, switchImpl], instance);
};

var observableImpl = function (instance) {
  Reflect.get(instance, "updateListenersHelper")(true);
};

var datePickerImpl = function (instance) {
  var node = Reflect.get(instance, "getCurrentRef")();

  if (!node) {
    console.warn("React ref to NativeScript View lost, so unable to update event listeners.");
    return;
  }

  node.on("dateChange", Reflect.get(instance, "onDateChange"));
};

var listPickerImpl = function (instance) {
  var node = Reflect.get(instance, "getCurrentRef")();

  if (!node) {
    console.warn("React ref to NativeScript View lost, so unable to update event listeners.");
    return;
  }

  node.on("selectedIndexChange", Reflect.get(instance, "onSelectedIndexChange"));
};

var searchBarImpl = function (instance) {
  var node = Reflect.get(instance, "getCurrentRef")();

  if (!node) {
    console.warn("React ref to NativeScript View lost, so unable to update event listeners.");
    return;
  }

  node.on("textChange", Reflect.get(instance, "onTextChange"));
};

var sliderImpl = function (instance) {
  var node = Reflect.get(instance, "getCurrentRef")();

  if (!node) {
    console.warn("React ref to NativeScript View lost, so unable to update event listeners.");
    return;
  }

  node.on("valueChange", Reflect.get(instance, "onValueChange"));
};

var switchImpl = function (instance) {
  var node = Reflect.get(instance, "getCurrentRef")();

  if (!node) {
    console.warn("React ref to NativeScript View lost, so unable to update event listeners.");
    return;
  }

  node.on("checkedChange", Reflect.get(instance, "onToggle"));
};; 
if (false ) {} 

/***/ }),

/***/ "./Reactified/Implementation/React/componentWillUnmountImpl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentWillUnmountImpl", function() { return componentWillUnmountImpl; });
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./Reactified/Implementation/Helpers.ts");
var _this = undefined;


var componentWillUnmountImpl = function (instance) {
  Object(_Helpers__WEBPACK_IMPORTED_MODULE_0__["executeInOrder"])([observableImpl, datePickerImpl, listPickerImpl, searchBarImpl, sliderImpl, switchImpl], instance);
};

var observableImpl = function (instance) {
  Reflect.get(instance, "updateListenersHelper")(false);
};

var datePickerImpl = function (instance) {
  var node = Reflect.get(instance, "getCurrentRef")();

  if (!node) {
    console.warn("React ref to NativeScript View lost, so unable to update event listeners.");
    return;
  }

  node.off("dateChange", Reflect.get(instance, "onDateChange"));
};

var listPickerImpl = function (instance) {
  var node = _this.getCurrentRef();

  if (!node) {
    console.warn("React ref to NativeScript View lost, so unable to update event listeners.");
    return;
  }

  node.off("selectedIndexChange", Reflect.get(instance, "onSelectedIndexChange"));
};

var searchBarImpl = function (instance) {
  var node = Reflect.get(instance, "getCurrentRef")();

  if (!node) {
    console.warn("React ref to NativeScript View lost, so unable to update event listeners.");
    return;
  }

  node.off("textChange", Reflect.get(instance, "onTextChange"));
};
/* (this slider impl not the same as the others. Is probably an error) */


var sliderImpl = function (instance) {
  var node = Reflect.get(instance, "getCurrentRef")();

  if (!node) {
    node.off("valueChange", Reflect.get(instance, "onValueChange"));
    return;
  }

  console.warn("React ref to NativeScript View lost, so unable to update event listeners.");
};

var switchImpl = function (instance) {
  var node = Reflect.get(instance, "getCurrentRef")();

  if (!node) {
    console.warn("React ref to NativeScript View lost, so unable to update event listeners.");
    return;
  }

  node.off("checkedChange", Reflect.get(instance, "onToggle"));
};; 
if (false ) {} 

/***/ }),

/***/ "./Reactified/Implementation/React/renderImpl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderImpl", function() { return renderImpl; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/react-nativescript/dist/client/ElementRegistry.js");
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./Reactified/Implementation/Helpers.ts");



var renderImpl = function (name, instance, observable) {
  return Object(_Helpers__WEBPACK_IMPORTED_MODULE_2__["executeInOrder"])([genericImpl, buttonImpl, textFieldImpl, htmlViewImpl, labelImpl], name, instance, observable);
};

var genericImpl = function (name, instance, observable) {
  console.log("generic render");

  var _a = instance.props,
      forwardedRef = _a.forwardedRef,
      children = _a.children,
      rest = __rest(_a, ["forwardedRef", "children"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](name, __assign({}, rest, {
    ref: forwardedRef || Reflect.get(instance, "myRef")
  }), children);
};

var buttonImpl = function (name, instance, observable) {
  var _a;

  if (observable instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_1__["Button"]) {
    console.log("buttonImpl");

    var _b = instance.props,
        forwardedRef = _b.forwardedRef,
        text = _b.text,
        formattedText = _b.formattedText,
        children = _b.children,
        rest = __rest(_b, ["forwardedRef", "text", "formattedText", "children"]);

    if (text && formattedText) {
      console.warn("Both text and formattedText provided; shall use formattedText.");
    }

    var textContent = (_a = {}, _a[formattedText ? "formattedText" : "text"] = formattedText || text, _a);
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](name, __assign({
      className: "btn btn-primary btn-active"
    }, rest, textContent, {
      ref: forwardedRef || Reflect.get(instance, "myRef")
    }), children // Weird that a button may contain children, but what do I know.
    );
  }

  return undefined;
};

var textFieldImpl = function (name, instance, observable) {
  var _a;

  if (observable instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_1__["TextField"]) {
    var _b = instance.props,
        forwardedRef = _b.forwardedRef,
        text = _b.text,
        formattedText = _b.formattedText,
        children = _b.children,
        rest = __rest(_b, ["forwardedRef", "text", "formattedText", "children"]);

    if (text && formattedText) {
      console.warn("Both text and formattedText provided; shall use formattedText.");
    }

    var textContent = (_a = {}, _a[formattedText ? "formattedText" : "text"] = formattedText || text, _a);
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](name, __assign({}, rest, textContent, {
      ref: forwardedRef || Reflect.get(instance, "myRef")
    }), children // Weird that a TextField may contain children, but what do I know.
    );
  }

  return undefined;
};

var htmlViewImpl = function (name, instance, observable) {
  if (observable instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_1__["HtmlView"]) {
    var _a = instance.props,
        forwardedRef = _a.forwardedRef,
        children = _a.children,
        rest = __rest(_a, ["forwardedRef", "children"]);

    if (children) {
      console.warn("Ignoring 'children' prop on HtmlView; not permitted");
    }

    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](name, __assign({}, rest, {
      ref: forwardedRef || Reflect.get(instance, "myRef")
    }), null);
  }

  return undefined;
};

var labelImpl = function (name, instance, observable) {
  var _a;

  if (observable instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_1__["Label"]) {
    console.log("label impl");

    var _b = instance.props,
        forwardedRef = _b.forwardedRef,
        onLoaded = _b.onLoaded,
        onUnloaded = _b.onUnloaded,
        onAndroidBackPressed = _b.onAndroidBackPressed,
        onShowingModally = _b.onShowingModally,
        onShownModally = _b.onShownModally,
        onTap = _b.onTap,
        onDoubleTap = _b.onDoubleTap,
        onPinch = _b.onPinch,
        onPan = _b.onPan,
        onSwipe = _b.onSwipe,
        onRotation = _b.onRotation,
        onLongPress = _b.onLongPress,
        onTouch = _b.onTouch,
        onPropertyChange = _b.onPropertyChange,
        text = _b.text,
        formattedText = _b.formattedText,
        children = _b.children,
        rest = __rest(_b, ["forwardedRef", "onLoaded", "onUnloaded", "onAndroidBackPressed", "onShowingModally", "onShownModally", "onTap", "onDoubleTap", "onPinch", "onPan", "onSwipe", "onRotation", "onLongPress", "onTouch", "onPropertyChange", "text", "formattedText", "children"]);

    if (text && formattedText) {
      console.warn("Both text and formattedText provided; shall use formattedText.");
    }

    var textContent = (_a = {}, _a[formattedText ? "formattedText" : "text"] = formattedText || text, _a);
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](name, __assign({}, rest, textContent, {
      ref: forwardedRef || Reflect.get(instance, "myRef")
    }), children // Weird that a Label may contain children, but what do I know.
    );
  }

  return undefined;
};; 
if (false ) {} 

/***/ }),

/***/ "./Reactified/Implementation/React/shouldComponentUpdateImpl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldComponentUpdateImpl", function() { return shouldComponentUpdateImpl; });
/* harmony import */ var react_nativescript_dist_client_shallowEqual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react-nativescript/dist/client/shallowEqual.js");
/* harmony import */ var react_nativescript_dist_client_shallowEqual__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_nativescript_dist_client_shallowEqual__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined;


var shouldComponentUpdateImpl = function (instance, nextProps, nextState) {
  return observableImpl(instance, nextProps, nextState);
};

var observableImpl = function (instance, nextProps, nextState) {
  // console.log(`Observable's shouldComponentUpdate`);
  var shouldUpdate = !Object(react_nativescript_dist_client_shallowEqual__WEBPACK_IMPORTED_MODULE_0__["shallowEqual"])(_this.props, nextProps) || !Object(react_nativescript_dist_client_shallowEqual__WEBPACK_IMPORTED_MODULE_0__["shallowEqual"])(_this.state, nextState); // console.log(`[shouldComponentUpdate] shouldUpdate: ${shouldUpdate}.`);

  Reflect.get(instance, "updateListenersHelper")(null, nextProps); // https://lucybain.com/blog/2018/react-js-pure-component/

  return shouldUpdate;
};; 
if (false ) {} 

/***/ }),

/***/ "./Reactified/Implementation/Types.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryCast", function() { return tryCast; });
/*
export type Observable<T> = T extends Observable ? Reactify<Observable> : Empty

export type ViewBase<T> = T extends ViewBase ? Reactify<ViewBase> : Empty;

export type View<T> = T extends View ? Reactify<View> : Empty;

interface Empty {

}
*/

/*
export const tryCast = <T extends Observable>(instance: Reactify<T>) => {
    if((instance.props) as Props<T>) {
        console.log("Was instance");
        return instance;
    }
    console.log("Was not instance");
    return null;
}
*/
// https://stackoverflow.com/questions/17392349/how-can-i-check-if-element-is-an-instanceof-u

/*
export function tryCast<T>(instance: any) {
    if(instance instanceof T) {
        console.log("was");
        return instance;
    }
    console.log("was not");
    return null;
}
*/
// https://stackoverflow.com/questions/23533374/compare-types-in-generic-function-using-typescript
// helper method to be able to cast Reactify<Observable> to Reactify<View>  etc
// helper method to be able to cast Reactify<Observable> to Reactify<View>  etc 
var tryCast = function (parameter) {
  return parameter;
};; 
if (false ) {} 

/***/ }),

/***/ "./Reactified/Implementation/Unique/onDataChangeImpl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDataChangeImpl", function() { return onDataChangeImpl; });
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./Reactified/Implementation/Helpers.ts");

var onDataChangeImpl = function (instance, args) {
  Object(_Helpers__WEBPACK_IMPORTED_MODULE_0__["executeInOrder"])([datePickerImpl], instance, args);
};

var datePickerImpl = function (instance, args) {
  var date = args.object.date;
  instance.props.onDateChange && instance.props.onDateChange(date);
};; 
if (false ) {} 

/***/ }),

/***/ "./Reactified/Implementation/Unique/onSelectedIndexChangeImpl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSelectIndexChangeImpl", function() { return onSelectIndexChangeImpl; });
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./Reactified/Implementation/Helpers.ts");

var onSelectIndexChangeImpl = function (instance, args) {
  Object(_Helpers__WEBPACK_IMPORTED_MODULE_0__["executeInOrder"])([listPickerImpl], instance, args);
};

var listPickerImpl = function (instance, args) {
  var selectedIndex = args.object.selectedIndex;
  instance.props.onSelectedIndexChange && instance.props.onSelectedIndexChange(selectedIndex);
};; 
if (false ) {} 

/***/ }),

/***/ "./Reactified/Implementation/Unique/onTextChangeImpl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onTextChangeImpl", function() { return onTextChangeImpl; });
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./Reactified/Implementation/Helpers.ts");

var onTextChangeImpl = function (instance, args) {
  Object(_Helpers__WEBPACK_IMPORTED_MODULE_0__["executeInOrder"])([searchBarImpl], instance, args);
};

var searchBarImpl = function (instance, args) {
  var text = args.object.text;
  instance.props.onTextChange && instance.props.onTextChange(text);
};; 
if (false ) {} 

/***/ }),

/***/ "./Reactified/Implementation/Unique/onToggleImpl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onToggleImpl", function() { return onToggleImpl; });
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./Reactified/Implementation/Helpers.ts");

var onToggleImpl = function (instance, args) {
  Object(_Helpers__WEBPACK_IMPORTED_MODULE_0__["executeInOrder"])([switchImpl], instance, args);
};

var switchImpl = function (instance, args) {
  var checked = args.object.checked;
  instance.props.onToggle && instance.props.onToggle(checked);
};; 
if (false ) {} 

/***/ }),

/***/ "./Reactified/Implementation/Unique/onValueChangeImpl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onValueChangeImpl", function() { return onValueChangeImpl; });
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./Reactified/Implementation/Helpers.ts");

var onValueChangeImpl = function (instance, args) {
  Object(_Helpers__WEBPACK_IMPORTED_MODULE_0__["executeInOrder"])([sliderImpl], instance, args);
};
/* typo found in https://github.com/shirakaba/react-nativescript/blob/master/react-nativescript/src/components/Slider.ts */

var sliderImpl = function (instance, args) {
  var sliderValue = args.object.value;
  instance.props.onValueChange && instance.props.onValueChange(sliderValue);
};; 
if (false ) {} 

/***/ }),

/***/ "./Reactified/Implementation/getCurrentRefImpl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentRefImpl", function() { return getCurrentRefImpl; });
function getCurrentRefImpl(instance) {
  var ref = (instance.props.forwardedRef || Reflect.get(instance, "myRef")).current;
  console.log("getCurrentRefImpl: " + ref);
  return ref;
}; 
if (false ) {} 

/***/ }),

/***/ "./Reactified/Implementation/updateListenersHelperImpl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateListenersHelperImpl", function() { return updateListenersHelperImpl; });
// import { Reactify } from "./Types";

/*
export const observableImpl = <T extends Observable>(instance: React.Component<T & ExtraProps<T>>, attach: boolean | null, nextProps?: P) => {
    
}
*/
var updateListenersHelperImpl = function (instance, attach, nextProps) {
  observableImpl(instance, attach, nextProps);
};

var observableImpl = function (instance, attach, nextProps) {
  var node = Reflect.get(instance, "getCurrentRef")();

  if (node === null) {
    // console.warn(`React ref to NativeScript View lost, so unable to update event listeners.`);
    return;
  }

  Reflect.get(instance, "updateListeners")(node, attach, nextProps);
};; 
if (false ) {} 

/***/ }),

/***/ "./Reactified/Implementation/updateListenersImpl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateListenersImpl", function() { return updateListenersImpl; });
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react-nativescript/dist/client/ElementRegistry.js");
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/react-nativescript/dist/client/EventHandling.js");
/* harmony import */ var react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/tns-core-modules/ui/gestures/gestures.js");
/* harmony import */ var tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./Reactified/Implementation/Helpers.ts");
var _this = undefined;





var updateListenersImpl = function (instance, node, attach, nextProps) {
  /* implementation for any rns component here - or on reactify class body*/
  Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["executeInOrder"])([pageImpl, viewImpl, observableImpl, actionItemImpl, editableTextBaseImpl, frameImpl, placeholderImpl, scrollViewImpl, searchBarImpl, segmentedBarImpl], instance, node, attach);
};

var observableImpl = function (instance, node, attach, nextProps) {
  console.log("observableImpl");

  if (attach === null) {
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "propertyChange", instance.props.onPropertyChange, nextProps.onPropertyChange);
  } else {
    var method = (attach ? node.on : node.off).bind(node);
    if (instance.props.onPropertyChange) method("propertyChange", instance.props.onPropertyChange);
  }
}; // https://github.com/shirakaba/react-nativescript/blob/master/react-nativescript/src/components/View.ts


var viewImpl = function (instance, node, attach, nextProps) {
  if (node instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["View"]) {
    console.log("view impl");

    if (attach === null) {
      Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "loaded", instance.props.onLoaded, nextProps.onLoaded);
      Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "unloaded", instance.props.onUnloaded, nextProps.onUnloaded);
      Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "androidBackPressed", instance.props.onAndroidBackPressed, nextProps.onAndroidBackPressed);
      Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "showingModally", instance.props.onShowingModally, nextProps.onShowingModally);
      Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "shownModally", instance.props.onShownModally, nextProps.onShownModally);
      Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_2__["GestureTypes"].tap, instance.props.onTap, nextProps.onTap, "tap");
      Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_2__["GestureTypes"].doubleTap, instance.props.onDoubleTap, nextProps.onDoubleTap, "doubleTap");
      Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_2__["GestureTypes"].pinch, instance.props.onPinch, nextProps.onPinch, "pinch");
      Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_2__["GestureTypes"].pan, instance.props.onPan, nextProps.onPan, "pan");
      Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_2__["GestureTypes"].swipe, instance.props.onSwipe, nextProps.onSwipe, "swipe");
      Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_2__["GestureTypes"].rotation, instance.props.onRotation, nextProps.onRotation, "rotation");
      Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_2__["GestureTypes"].longPress, instance.props.onLongPress, nextProps.onLongPress, "longPress");
      Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_2__["GestureTypes"].touch, instance.props.onTouch, nextProps.onTouch, "touch");
    } else {
      var method = (attach ? node.on : node.off).bind(node);
      if (instance.props.onLoaded) method("loaded", instance.props.onLoaded);
      if (instance.props.onUnloaded) method("unloaded", instance.props.onUnloaded);
      if (instance.props.onAndroidBackPressed) method("androidBackPressed", instance.props.onAndroidBackPressed);
      if (instance.props.onShowingModally) method("showingModally", instance.props.onShowingModally);
      if (instance.props.onShownModally) method("shownModally", instance.props.onShownModally);
      if (instance.props.onTap) method(tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_2__["GestureTypes"].tap, instance.props.onTap);
      if (instance.props.onDoubleTap) method(tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_2__["GestureTypes"].doubleTap, instance.props.onDoubleTap);
      if (instance.props.onPinch) method(tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_2__["GestureTypes"].pinch, instance.props.onPinch);
      if (instance.props.onPan) method(tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_2__["GestureTypes"].pan, instance.props.onPan);
      if (instance.props.onSwipe) method(tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_2__["GestureTypes"].swipe, instance.props.onSwipe);
      if (instance.props.onRotation) method(tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_2__["GestureTypes"].rotation, instance.props.onRotation);
      if (instance.props.onLongPress) method(tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_2__["GestureTypes"].longPress, instance.props.onLongPress);
      if (instance.props.onTouch) method(tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_2__["GestureTypes"].touch, instance.props.onTouch);
    }
  }
};

var actionItemImpl = function (instance, node, attach, nextProps) {
  /* tap assigning tap on actionitem crashes */

  /* should be conditionally ran so that two tap gesture recognizers aren't added*/
  if (node instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["ActionItem"]) {
    console.log("actionItemImpl");

    if (attach === null) {
      Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "tap", instance.props.onTap, nextProps.onTap);
    } else {
      var method = (attach ? node.on : node.off).bind(node);
      if (instance.props.onTap) method("tap", instance.props.onTap);
    }
  }
};

var pageImpl = function (instance, node, attach, nextProps) {
  console.log("pageImpl");

  if (attach === null) {
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "navigatedFrom", instance.props.onNavigatedFrom, nextProps.onNavigatedFrom);
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "navigatedTo", instance.props.onNavigatedTo, nextProps.onNavigatedTo);
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "navigatingFrom", instance.props.onNavigatingFrom, nextProps.onNavigatingFrom);
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "navigatingTo", instance.props.onNavigatingTo, nextProps.onNavigatingTo);
  } else {
    var method = (attach ? node.on : node.off).bind(node);
    if (instance.props.onNavigatedFrom) method("navigatedFrom", instance.props.onNavigatedFrom);
    if (instance.props.onNavigatedTo) method("navigatedTo", instance.props.onNavigatedTo);
    if (instance.props.onNavigatingFrom) method("navigatingFrom", instance.props.onNavigatingFrom);
    if (instance.props.onNavigatingTo) method("navigatingTo", instance.props.onNavigatingTo);
  }
};

var editableTextBaseImpl = function (instance, node, attach, nextProps) {
  if (attach === null) {
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "blur", instance.props.onBlur, nextProps.onBlur);
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "focus", instance.props.onFocus, nextProps.onFocus);
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "textChange", instance.props.onTextChange, nextProps.onTextChange);
  } else {
    var method = (attach ? node.on : node.off).bind(node);
    if (instance.props.onBlur) method("blur", instance.props.onBlur);
    if (instance.props.onFocus) method("focus", instance.props.onFocus);
    if (instance.props.onTextChange) method("textChange", instance.props.onTextChange);
  }
};

var frameImpl = function (instance, node, attach, nextProps) {
  if (attach === null) {
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "optionSelected", instance.props.onOptionSelected, nextProps.onOptionSelected);
  } else {
    var method = (attach ? node.on : node.off).bind(node);
    if (instance.props.onOptionSelected) method("optionSelected", instance.props.onOptionSelected);
  }
};

var placeholderImpl = function (instance, node, attach, nextProps) {
  if (attach === null) {
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "creatingView", instance.props.onCreatingView, nextProps.onCreatingView);
  } else {
    var method = (attach ? node.on : node.off).bind(node);
    if (instance.props.onCreatingView) method("creatingView", instance.props.onCreatingView);
  }
};

var scrollViewImpl = function (instance, node, attach, nextProps) {
  if (attach === null) {
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "scroll", _this.props.onScroll, nextProps.onScroll);
  } else {
    var method = (attach ? node.on : node.off).bind(node);
    if (instance.props.onScroll) method("scroll", instance.props.onScroll);
  }
};

var searchBarImpl = function (instance, node, attach, nextProps) {
  if (attach === null) {
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "submit", instance.props.onSubmit, nextProps.onSubmit);
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "close", instance.props.onClose, nextProps.onClose);
  } else {
    var method = (attach ? node.on : node.off).bind(node);
    if (instance.props.onSubmit) method("submit", instance.props.onSubmit);
    if (instance.props.onClose) method("close", instance.props.onClose);
  }
};

var segmentedBarImpl = function (instance, node, attach, nextProps) {
  if (attach === null) {
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "selectedIndexChanged", instance.props.onSelectedIndexChanged, nextProps.onSelectedIndexChanged);
  } else {
    var method = (attach ? node.on : node.off).bind(node);
    if (instance.props.onSelectedIndexChanged) method("selectedIndexChanged", instance.props.onSelectedIndexChanged);
  }
};; 
if (false ) {} 

/***/ }),

/***/ "./Reactified/Reactified.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reactified", function() { return Reactified; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/react-nativescript/dist/client/ElementRegistry.js");
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Implementation_Helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./Reactified/Implementation/Helpers.ts");
/* harmony import */ var _Implementation_React_renderImpl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./Reactified/Implementation/React/renderImpl.ts");
/* harmony import */ var _Implementation_updateListenersImpl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./Reactified/Implementation/updateListenersImpl.ts");
/* harmony import */ var _Implementation_React_componentDidMountImpl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./Reactified/Implementation/React/componentDidMountImpl.ts");
/* harmony import */ var _Implementation_React_shouldComponentUpdateImpl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./Reactified/Implementation/React/shouldComponentUpdateImpl.ts");
/* harmony import */ var _Implementation_React_componentWillUnmountImpl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./Reactified/Implementation/React/componentWillUnmountImpl.ts");
/* harmony import */ var _Implementation_CustomNodeHierarchyManager_customHostConfigAppendChildImpl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./Reactified/Implementation/CustomNodeHierarchyManager/__customHostConfigAppendChildImpl.ts");
/* harmony import */ var _Implementation_CustomNodeHierarchyManager_customHostConfigRemoveChildImpl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./Reactified/Implementation/CustomNodeHierarchyManager/__customHostConfigRemoveChildImpl.ts");
/* harmony import */ var _Implementation_CustomNodeHierarchyManager_customHostConfigInsertBeforeImpl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./Reactified/Implementation/CustomNodeHierarchyManager/__customHostConfigInsertBeforeImpl.ts");
/* harmony import */ var _Implementation_Unique_onDataChangeImpl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./Reactified/Implementation/Unique/onDataChangeImpl.ts");
/* harmony import */ var _Implementation_updateListenersHelperImpl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./Reactified/Implementation/updateListenersHelperImpl.ts");
/* harmony import */ var _Implementation_Unique_onSelectedIndexChangeImpl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./Reactified/Implementation/Unique/onSelectedIndexChangeImpl.ts");
/* harmony import */ var _Implementation_Unique_onTextChangeImpl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./Reactified/Implementation/Unique/onTextChangeImpl.ts");
/* harmony import */ var _Implementation_Unique_onValueChangeImpl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./Reactified/Implementation/Unique/onValueChangeImpl.ts");
/* harmony import */ var _Implementation_Unique_onToggleImpl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./Reactified/Implementation/Unique/onToggleImpl.ts");

















function Reactified(observable, name) {
  if (!name) {
    name = Object(_Implementation_Helpers__WEBPACK_IMPORTED_MODULE_2__["firstLetterLowercase"])(Object(_Implementation_Helpers__WEBPACK_IMPORTED_MODULE_2__["nameOf"])(observable));
  }

  console.log("registering " + name);
  Object(react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_1__["register"])(name, function () {
    return observable;
  }); // let self: Reactify = null;

  var Reactify =
  /** @class */
  function (_super) {
    __extends(Reactify, _super);

    function Reactify() {
      var _this = _super !== null && _super.apply(this, arguments) || this; // static defaultProps = {... observable } 

      /*
      constructor(props: T & ExtraProps<T>) {
          super(props);
          Reactify.countOfInstances ++;
          console.log("constructing instance " + Reactify.countOfInstances);
      }
      */


      _this.myRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();

      _this.getCurrentRef = function () {
        return (_this.props.forwardedRef || _this.myRef).current;
      };
      /**
      * Helper method for updateListeners: simply gets the current ref to pass on to it.
      * @param attach true: attach; false: detach; null: update
      */


      _this.updateListenersHelper = function (attach, nextProps) {
        Object(_Implementation_updateListenersHelperImpl__WEBPACK_IMPORTED_MODULE_12__["updateListenersHelperImpl"])(_this, attach, nextProps);
      };
      /**
      *
      * @param attach true: attach; false: detach; null: update
      */


      _this.updateListeners = function (node, attach, nextProps) {
        Object(_Implementation_updateListenersImpl__WEBPACK_IMPORTED_MODULE_4__["updateListenersImpl"])(_this, node, attach, nextProps);
      };

      _this.componentDidMount = function () {
        Object(_Implementation_React_componentDidMountImpl__WEBPACK_IMPORTED_MODULE_5__["componentDidMountImpl"])(_this);
      };
      /**
      * PureComponent's shouldComponentUpdate() method is ignored and replaced with a shallowEqual()
      * comparison of props and state. We'll implement our Component's shouldComponentUpdate() to
      * match the way PureComponent is handled.
      */


      _this.shouldComponentUpdate = function (nextProps, nextState) {
        return Object(_Implementation_React_shouldComponentUpdateImpl__WEBPACK_IMPORTED_MODULE_6__["shouldComponentUpdateImpl"])(_this, nextProps, nextState);
      };

      _this.componentWillUnmount = function () {
        // this.updateListenersHelper(false);
        Object(_Implementation_React_componentWillUnmountImpl__WEBPACK_IMPORTED_MODULE_7__["componentWillUnmountImpl"])(_this);
      };

      _this.render = function () {
        return Object(_Implementation_React_renderImpl__WEBPACK_IMPORTED_MODULE_3__["renderImpl"])(name, _this, observable);
      };

      _this.__customHostConfigAppendChild = function (parentInstance, child) {
        return Object(_Implementation_CustomNodeHierarchyManager_customHostConfigAppendChildImpl__WEBPACK_IMPORTED_MODULE_8__["__customHostConfigAppendChildImpl"])(parentInstance, child);
      };

      _this.__customHostConfigRemoveChild = function (parentInstance, child) {
        return Object(_Implementation_CustomNodeHierarchyManager_customHostConfigRemoveChildImpl__WEBPACK_IMPORTED_MODULE_9__["__customHostConfigRemoveChildImpl"])(parentInstance, child);
      };

      _this.__customHostConfigInsertBefore = function (parentInstance, child, beforeChild) {
        return Object(_Implementation_CustomNodeHierarchyManager_customHostConfigInsertBeforeImpl__WEBPACK_IMPORTED_MODULE_10__["__customHostConfigInsertBeforeImpl"])(parentInstance, child, beforeChild);
      };
      /* unique/ completely custom stuff... */


      _this.onDateChange = function (args) {
        Object(_Implementation_Unique_onDataChangeImpl__WEBPACK_IMPORTED_MODULE_11__["onDataChangeImpl"])(_this, args);
      };

      _this.onSelectedIndexChange = function (args) {
        Object(_Implementation_Unique_onSelectedIndexChangeImpl__WEBPACK_IMPORTED_MODULE_13__["onSelectIndexChangeImpl"])(_this, args);
      };

      _this.onTextChange = function (args) {
        Object(_Implementation_Unique_onTextChangeImpl__WEBPACK_IMPORTED_MODULE_14__["onTextChangeImpl"])(_this, args);
      };

      _this.onValueChange = function (args) {
        Object(_Implementation_Unique_onValueChangeImpl__WEBPACK_IMPORTED_MODULE_15__["onValueChangeImpl"])(_this, args);
      };

      _this.onToggle = function (args) {
        Object(_Implementation_Unique_onToggleImpl__WEBPACK_IMPORTED_MODULE_16__["onToggleImpl"])(_this, args);
      };

      return _this;
    }

    Reactify.countOfInstances = 0;
    return Reactify;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

  return Reactify; // have to declare class name to make decorators work  // https://github.com/microsoft/TypeScript/issues/7342
} // React.Component<T & ExtraProps<T>

/*
// Are not actually needed ?!
function JSX<T extends Observable>(observable: new(...args: any[]) => React.Component<T & ExtraProps<T>>) {
    return React.forwardRef<T, PropsWithoutForwardedRef<T & ExtraProps<T>>>(
        (props: React.PropsWithChildren<PropsWithoutForwardedRef<T & ExtraProps<T>>>, ref: React.RefObject<T>) => {
            const { children, ...rest } = props;
            return React.createElement(
                observable
                ,
                {
                    ...rest,
                    forwardedRef: ref,
                },
                children
            );
        }
    )
}
*/
// export const MyObservable: React.ComponentType<PropsWithoutForwardedRef<Observable> & ExtraProps<Observable>> & React.ClassAttributes<Observable> = JSX(new Observable());
// export const MyButton = JSX(new Button());
// export const MyContentView: React.ComponentType<PropsWithoutForwardedRef<ContentView & ExtraProps<ContentView>>> & React.ClassAttributes<ContentView> = JSX(new ContentView());; 
if (false ) {} 

/***/ }),

/***/ "./app.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/**\r\n * Convenient single import for light variables\r\n * Includes base variables with light overrides\r\n **/\n/**\r\n * Light variable overrides\r\n **/\n/**\n * Theme variables overrides\n**/\n/**\r\n * Color classes\r\n * The following creates this pattern:\r\n * .c-grey{color:#e0e0e0}.c-bg-grey{background-color:#e0e0e0}\r\n**/\n.c-white {\n  color: #fff; }\n\n.c-bg-white {\n  background-color: #fff; }\n\n.c-black {\n  color: #000; }\n\n.c-bg-black {\n  background-color: #000; }\n\n.c-aqua {\n  color: #00caab; }\n\n.c-bg-aqua {\n  background-color: #00caab; }\n\n.c-blue {\n  color: #3d5afe; }\n\n.c-bg-blue {\n  background-color: #3d5afe; }\n\n.c-charcoal {\n  color: #303030; }\n\n.c-bg-charcoal {\n  background-color: #303030; }\n\n.c-brown {\n  color: #795548; }\n\n.c-bg-brown {\n  background-color: #795548; }\n\n.c-forest {\n  color: #006968; }\n\n.c-bg-forest {\n  background-color: #006968; }\n\n.c-grey {\n  color: #e0e0e0; }\n\n.c-bg-grey {\n  background-color: #e0e0e0; }\n\n.c-grey-light {\n  color: #bababa; }\n\n.c-bg-grey-light {\n  background-color: #bababa; }\n\n.c-grey-dark {\n  color: #5c687c; }\n\n.c-bg-grey-dark {\n  background-color: #5c687c; }\n\n.c-purple {\n  color: #8130ff; }\n\n.c-bg-purple {\n  background-color: #8130ff; }\n\n.c-lemon {\n  color: #ffea00; }\n\n.c-bg-lemon {\n  background-color: #ffea00; }\n\n.c-lime {\n  color: #aee406; }\n\n.c-bg-lime {\n  background-color: #aee406; }\n\n.c-orange {\n  color: #f57c00; }\n\n.c-bg-orange {\n  background-color: #f57c00; }\n\n.c-ruby {\n  color: #ff1744; }\n\n.c-bg-ruby {\n  background-color: #ff1744; }\n\n.c-sky {\n  color: #30bcff; }\n\n.c-bg-sky {\n  background-color: #30bcff; }\n\n/* Width/Height */\n.w-full {\n  width: 100%; }\n\n.w-100 {\n  width: 100; }\n\n.h-full {\n  height: 100%; }\n\n.h-100 {\n  height: 100; }\n\n/**\r\n * Margin and Padding\r\n * The following creates this pattern:\r\n * .m-0{margin:0}.m-t-0{margin-top:0}.m-r-0{margin-right:0}.m-b-0{margin-bottom:0}.m-l-0{margin-left:0}.m-x-0{margin-right:0;margin-left:0}.m-y-0{margin-top:0;margin-bottom:0}\r\n * Same for Padding (using the 'p' abbreviation)\r\n * From 0, 2, 5, 10, 15, 20, 25, 30\r\n**/\n.m-0 {\n  margin: 0; }\n\n.m-t-0 {\n  margin-top: 0; }\n\n.m-r-0 {\n  margin-right: 0; }\n\n.m-b-0 {\n  margin-bottom: 0; }\n\n.m-l-0 {\n  margin-left: 0; }\n\n.m-x-0 {\n  margin-right: 0;\n  margin-left: 0; }\n\n.m-y-0 {\n  margin-top: 0;\n  margin-bottom: 0; }\n\n.m-2 {\n  margin: 2; }\n\n.m-t-2 {\n  margin-top: 2; }\n\n.m-r-2 {\n  margin-right: 2; }\n\n.m-b-2 {\n  margin-bottom: 2; }\n\n.m-l-2 {\n  margin-left: 2; }\n\n.m-x-2 {\n  margin-right: 2;\n  margin-left: 2; }\n\n.m-y-2 {\n  margin-top: 2;\n  margin-bottom: 2; }\n\n.m-4 {\n  margin: 4; }\n\n.m-t-4 {\n  margin-top: 4; }\n\n.m-r-4 {\n  margin-right: 4; }\n\n.m-b-4 {\n  margin-bottom: 4; }\n\n.m-l-4 {\n  margin-left: 4; }\n\n.m-x-4 {\n  margin-right: 4;\n  margin-left: 4; }\n\n.m-y-4 {\n  margin-top: 4;\n  margin-bottom: 4; }\n\n.m-5 {\n  margin: 5; }\n\n.m-t-5 {\n  margin-top: 5; }\n\n.m-r-5 {\n  margin-right: 5; }\n\n.m-b-5 {\n  margin-bottom: 5; }\n\n.m-l-5 {\n  margin-left: 5; }\n\n.m-x-5 {\n  margin-right: 5;\n  margin-left: 5; }\n\n.m-y-5 {\n  margin-top: 5;\n  margin-bottom: 5; }\n\n.m-8 {\n  margin: 8; }\n\n.m-t-8 {\n  margin-top: 8; }\n\n.m-r-8 {\n  margin-right: 8; }\n\n.m-b-8 {\n  margin-bottom: 8; }\n\n.m-l-8 {\n  margin-left: 8; }\n\n.m-x-8 {\n  margin-right: 8;\n  margin-left: 8; }\n\n.m-y-8 {\n  margin-top: 8;\n  margin-bottom: 8; }\n\n.m-10 {\n  margin: 10; }\n\n.m-t-10 {\n  margin-top: 10; }\n\n.m-r-10 {\n  margin-right: 10; }\n\n.m-b-10 {\n  margin-bottom: 10; }\n\n.m-l-10 {\n  margin-left: 10; }\n\n.m-x-10 {\n  margin-right: 10;\n  margin-left: 10; }\n\n.m-y-10 {\n  margin-top: 10;\n  margin-bottom: 10; }\n\n.m-12 {\n  margin: 12; }\n\n.m-t-12 {\n  margin-top: 12; }\n\n.m-r-12 {\n  margin-right: 12; }\n\n.m-b-12 {\n  margin-bottom: 12; }\n\n.m-l-12 {\n  margin-left: 12; }\n\n.m-x-12 {\n  margin-right: 12;\n  margin-left: 12; }\n\n.m-y-12 {\n  margin-top: 12;\n  margin-bottom: 12; }\n\n.m-15 {\n  margin: 15; }\n\n.m-t-15 {\n  margin-top: 15; }\n\n.m-r-15 {\n  margin-right: 15; }\n\n.m-b-15 {\n  margin-bottom: 15; }\n\n.m-l-15 {\n  margin-left: 15; }\n\n.m-x-15 {\n  margin-right: 15;\n  margin-left: 15; }\n\n.m-y-15 {\n  margin-top: 15;\n  margin-bottom: 15; }\n\n.m-16 {\n  margin: 16; }\n\n.m-t-16 {\n  margin-top: 16; }\n\n.m-r-16 {\n  margin-right: 16; }\n\n.m-b-16 {\n  margin-bottom: 16; }\n\n.m-l-16 {\n  margin-left: 16; }\n\n.m-x-16 {\n  margin-right: 16;\n  margin-left: 16; }\n\n.m-y-16 {\n  margin-top: 16;\n  margin-bottom: 16; }\n\n.m-20 {\n  margin: 20; }\n\n.m-t-20 {\n  margin-top: 20; }\n\n.m-r-20 {\n  margin-right: 20; }\n\n.m-b-20 {\n  margin-bottom: 20; }\n\n.m-l-20 {\n  margin-left: 20; }\n\n.m-x-20 {\n  margin-right: 20;\n  margin-left: 20; }\n\n.m-y-20 {\n  margin-top: 20;\n  margin-bottom: 20; }\n\n.m-24 {\n  margin: 24; }\n\n.m-t-24 {\n  margin-top: 24; }\n\n.m-r-24 {\n  margin-right: 24; }\n\n.m-b-24 {\n  margin-bottom: 24; }\n\n.m-l-24 {\n  margin-left: 24; }\n\n.m-x-24 {\n  margin-right: 24;\n  margin-left: 24; }\n\n.m-y-24 {\n  margin-top: 24;\n  margin-bottom: 24; }\n\n.m-25 {\n  margin: 25; }\n\n.m-t-25 {\n  margin-top: 25; }\n\n.m-r-25 {\n  margin-right: 25; }\n\n.m-b-25 {\n  margin-bottom: 25; }\n\n.m-l-25 {\n  margin-left: 25; }\n\n.m-x-25 {\n  margin-right: 25;\n  margin-left: 25; }\n\n.m-y-25 {\n  margin-top: 25;\n  margin-bottom: 25; }\n\n.m-28 {\n  margin: 28; }\n\n.m-t-28 {\n  margin-top: 28; }\n\n.m-r-28 {\n  margin-right: 28; }\n\n.m-b-28 {\n  margin-bottom: 28; }\n\n.m-l-28 {\n  margin-left: 28; }\n\n.m-x-28 {\n  margin-right: 28;\n  margin-left: 28; }\n\n.m-y-28 {\n  margin-top: 28;\n  margin-bottom: 28; }\n\n.m-30 {\n  margin: 30; }\n\n.m-t-30 {\n  margin-top: 30; }\n\n.m-r-30 {\n  margin-right: 30; }\n\n.m-b-30 {\n  margin-bottom: 30; }\n\n.m-l-30 {\n  margin-left: 30; }\n\n.m-x-30 {\n  margin-right: 30;\n  margin-left: 30; }\n\n.m-y-30 {\n  margin-top: 30;\n  margin-bottom: 30; }\n\n.p-0 {\n  padding: 0; }\n\n.p-t-0 {\n  padding-top: 0; }\n\n.p-r-0 {\n  padding-right: 0; }\n\n.p-b-0 {\n  padding-bottom: 0; }\n\n.p-l-0 {\n  padding-left: 0; }\n\n.p-x-0 {\n  padding-right: 0;\n  padding-left: 0; }\n\n.p-y-0 {\n  padding-top: 0;\n  padding-bottom: 0; }\n\n.p-2 {\n  padding: 2; }\n\n.p-t-2 {\n  padding-top: 2; }\n\n.p-r-2 {\n  padding-right: 2; }\n\n.p-b-2 {\n  padding-bottom: 2; }\n\n.p-l-2 {\n  padding-left: 2; }\n\n.p-x-2 {\n  padding-right: 2;\n  padding-left: 2; }\n\n.p-y-2 {\n  padding-top: 2;\n  padding-bottom: 2; }\n\n.p-4 {\n  padding: 4; }\n\n.p-t-4 {\n  padding-top: 4; }\n\n.p-r-4 {\n  padding-right: 4; }\n\n.p-b-4 {\n  padding-bottom: 4; }\n\n.p-l-4 {\n  padding-left: 4; }\n\n.p-x-4 {\n  padding-right: 4;\n  padding-left: 4; }\n\n.p-y-4 {\n  padding-top: 4;\n  padding-bottom: 4; }\n\n.p-5 {\n  padding: 5; }\n\n.p-t-5 {\n  padding-top: 5; }\n\n.p-r-5 {\n  padding-right: 5; }\n\n.p-b-5 {\n  padding-bottom: 5; }\n\n.p-l-5 {\n  padding-left: 5; }\n\n.p-x-5 {\n  padding-right: 5;\n  padding-left: 5; }\n\n.p-y-5 {\n  padding-top: 5;\n  padding-bottom: 5; }\n\n.p-8 {\n  padding: 8; }\n\n.p-t-8 {\n  padding-top: 8; }\n\n.p-r-8 {\n  padding-right: 8; }\n\n.p-b-8 {\n  padding-bottom: 8; }\n\n.p-l-8 {\n  padding-left: 8; }\n\n.p-x-8 {\n  padding-right: 8;\n  padding-left: 8; }\n\n.p-y-8 {\n  padding-top: 8;\n  padding-bottom: 8; }\n\n.p-10 {\n  padding: 10; }\n\n.p-t-10 {\n  padding-top: 10; }\n\n.p-r-10 {\n  padding-right: 10; }\n\n.p-b-10 {\n  padding-bottom: 10; }\n\n.p-l-10 {\n  padding-left: 10; }\n\n.p-x-10 {\n  padding-right: 10;\n  padding-left: 10; }\n\n.p-y-10 {\n  padding-top: 10;\n  padding-bottom: 10; }\n\n.p-12 {\n  padding: 12; }\n\n.p-t-12 {\n  padding-top: 12; }\n\n.p-r-12 {\n  padding-right: 12; }\n\n.p-b-12 {\n  padding-bottom: 12; }\n\n.p-l-12 {\n  padding-left: 12; }\n\n.p-x-12 {\n  padding-right: 12;\n  padding-left: 12; }\n\n.p-y-12 {\n  padding-top: 12;\n  padding-bottom: 12; }\n\n.p-15 {\n  padding: 15; }\n\n.p-t-15 {\n  padding-top: 15; }\n\n.p-r-15 {\n  padding-right: 15; }\n\n.p-b-15 {\n  padding-bottom: 15; }\n\n.p-l-15 {\n  padding-left: 15; }\n\n.p-x-15 {\n  padding-right: 15;\n  padding-left: 15; }\n\n.p-y-15 {\n  padding-top: 15;\n  padding-bottom: 15; }\n\n.p-16 {\n  padding: 16; }\n\n.p-t-16 {\n  padding-top: 16; }\n\n.p-r-16 {\n  padding-right: 16; }\n\n.p-b-16 {\n  padding-bottom: 16; }\n\n.p-l-16 {\n  padding-left: 16; }\n\n.p-x-16 {\n  padding-right: 16;\n  padding-left: 16; }\n\n.p-y-16 {\n  padding-top: 16;\n  padding-bottom: 16; }\n\n.p-20 {\n  padding: 20; }\n\n.p-t-20 {\n  padding-top: 20; }\n\n.p-r-20 {\n  padding-right: 20; }\n\n.p-b-20 {\n  padding-bottom: 20; }\n\n.p-l-20 {\n  padding-left: 20; }\n\n.p-x-20 {\n  padding-right: 20;\n  padding-left: 20; }\n\n.p-y-20 {\n  padding-top: 20;\n  padding-bottom: 20; }\n\n.p-24 {\n  padding: 24; }\n\n.p-t-24 {\n  padding-top: 24; }\n\n.p-r-24 {\n  padding-right: 24; }\n\n.p-b-24 {\n  padding-bottom: 24; }\n\n.p-l-24 {\n  padding-left: 24; }\n\n.p-x-24 {\n  padding-right: 24;\n  padding-left: 24; }\n\n.p-y-24 {\n  padding-top: 24;\n  padding-bottom: 24; }\n\n.p-25 {\n  padding: 25; }\n\n.p-t-25 {\n  padding-top: 25; }\n\n.p-r-25 {\n  padding-right: 25; }\n\n.p-b-25 {\n  padding-bottom: 25; }\n\n.p-l-25 {\n  padding-left: 25; }\n\n.p-x-25 {\n  padding-right: 25;\n  padding-left: 25; }\n\n.p-y-25 {\n  padding-top: 25;\n  padding-bottom: 25; }\n\n.p-28 {\n  padding: 28; }\n\n.p-t-28 {\n  padding-top: 28; }\n\n.p-r-28 {\n  padding-right: 28; }\n\n.p-b-28 {\n  padding-bottom: 28; }\n\n.p-l-28 {\n  padding-left: 28; }\n\n.p-x-28 {\n  padding-right: 28;\n  padding-left: 28; }\n\n.p-y-28 {\n  padding-top: 28;\n  padding-bottom: 28; }\n\n.p-30 {\n  padding: 30; }\n\n.p-t-30 {\n  padding-top: 30; }\n\n.p-r-30 {\n  padding-right: 30; }\n\n.p-b-30 {\n  padding-bottom: 30; }\n\n.p-l-30 {\n  padding-left: 30; }\n\n.p-x-30 {\n  padding-right: 30;\n  padding-left: 30; }\n\n.p-y-30 {\n  padding-top: 30;\n  padding-bottom: 30; }\n\n/* Dividers */\n.hr-light {\n  height: 1;\n  background-color: #e0e0e0;\n  width: 100%; }\n\n.hr-dark {\n  height: 1;\n  background-color: #303030;\n  width: 100%; }\n\n/* Alignment */\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-lowercase {\n  text-transform: lowercase; }\n\n.text-uppercase {\n  text-transform: uppercase; }\n\n.text-capitalize {\n  text-transform: capitalize; }\n\n.font-weight-normal {\n  font-weight: normal; }\n\n.font-weight-bold {\n  font-weight: bold; }\n\n.font-italic {\n  font-style: italic; }\n\n/**\r\n * Font size\r\n * The following creates this pattern:\r\n * .t-10{font-size:10}\r\n * From 10, 12, 14, 15, 16, 17, 18, 19, 20\r\n**/\n.t-10 {\n  font-size: 10; }\n\n.t-12 {\n  font-size: 12; }\n\n.t-14 {\n  font-size: 14; }\n\n.t-15 {\n  font-size: 15; }\n\n.t-16 {\n  font-size: 16; }\n\n.t-17 {\n  font-size: 17; }\n\n.t-18 {\n  font-size: 18; }\n\n.t-19 {\n  font-size: 19; }\n\n.t-20 {\n  font-size: 20; }\n\n.t-25 {\n  font-size: 25; }\n\n.t-30 {\n  font-size: 30; }\n\n.img-rounded {\n  border-radius: 5; }\n\n.img-circle {\n  border-radius: 20; }\n\n.img-thumbnail {\n  border-radius: 0; }\n\n.invisible {\n  visibility: collapse; }\n\n.pull-left {\n  horizontal-align: left; }\n\n.pull-right {\n  horizontal-align: right; }\n\n.m-x-auto {\n  horizontal-align: center; }\n\n.m-y-auto {\n  vertical-align: center; }\n\n.text-primary {\n  color: #3A53FF; }\n\n.text-danger {\n  color: #ED473F; }\n\n.text-muted {\n  color: #9e9e9e; }\n\n.bg-primary {\n  background-color: #3A53FF;\n  color: #fff; }\n\n.bg-danger {\n  background-color: #ED473F;\n  color: #fff; }\n\n.action-bar {\n  background-color: #3A53FF;\n  color: #fff; }\n  .action-bar .action-bar-title {\n    font-weight: bold;\n    font-size: 17;\n    vertical-align: center; }\n  .action-bar .action-item {\n    font-weight: normal; }\n\n.activity-indicator {\n  color: #3A53FF;\n  width: 30;\n  height: 30; }\n\n.btn {\n  color: #3A53FF;\n  background-color: transparent;\n  min-height: 36;\n  min-width: 64;\n  padding: 10 10 10 10;\n  font-size: 18;\n  margin: 8 16 8 16; }\n  .btn.btn-active:highlighted {\n    color: #fff;\n    background-color: #6d80ff; }\n\n.btn-primary {\n  background-color: #3A53FF;\n  border-color: #3A53FF;\n  color: #fff; }\n  .btn-primary.btn-active:highlighted {\n    background-color: #0726ff;\n    border-color: #0726ff; }\n  .btn-primary.btn-aqua {\n    background-color: #00caab; }\n  .btn-primary.btn-blue {\n    background-color: #3d5afe; }\n  .btn-primary.btn-brown {\n    background-color: #795548; }\n  .btn-primary.btn-forest {\n    background-color: #006968; }\n  .btn-primary.btn-grey {\n    background-color: #5c687c; }\n  .btn-primary.btn-lemon {\n    background-color: #ffea00;\n    color: #000; }\n  .btn-primary.btn-lime {\n    background-color: #aee406;\n    color: #000; }\n  .btn-primary.btn-orange {\n    background-color: #f57c00; }\n  .btn-primary.btn-purple {\n    background-color: #8130ff; }\n  .btn-primary.btn-ruby {\n    background-color: #ff1744; }\n  .btn-primary.btn-sky {\n    background-color: #30bcff; }\n\n.btn-outline {\n  background-color: transparent;\n  border-color: #3A53FF;\n  color: #3A53FF; }\n  .btn-outline.btn-active:highlighted {\n    background-color: #6d80ff; }\n\n.btn[isEnabled=false] {\n  color: #a4a4a4;\n  background-color: #e0e0e0;\n  border-color: #e0e0e0; }\n\n.fa {\n  font-family: FontAwesome, fontawesome-webfont; }\n\n.form .input {\n  padding: 16 8 16 8;\n  background-color: transparent; }\n  .form .input.input-border {\n    border-width: 1;\n    border-color: #e0e0e0;\n    border-radius: 2;\n    padding: 16; }\n  .form .input.input-rounded {\n    border-width: 1;\n    border-color: #e0e0e0;\n    border-radius: 28;\n    padding: 16; }\n  .form .input[isEnabled='false'] {\n    background-color: #fafafa; }\n\n.form .input-field {\n  margin: 8; }\n  .form .input-field .label {\n    font-size: 12;\n    color: #bababa; }\n  .form .input-field .input {\n    padding: 0;\n    margin: 0 0 8 0; }\n  .form .input-field .hr-light.active,\n  .form .input-field .hr-dark.active {\n    background-color: #3A53FF; }\n  .form .input-field.input-sides .label {\n    font-size: 18;\n    margin: 0 0 8 0; }\n\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 4;\n  font-weight: normal;\n  color: #022734; }\n\n.body,\n.body2,\n.footnote {\n  font-weight: normal;\n  color: #022734; }\n\n.h1 {\n  font-size: 32; }\n\n.h2 {\n  font-size: 22; }\n\n.h3 {\n  font-size: 15; }\n\n.h4 {\n  font-size: 12; }\n\n.h5 {\n  font-size: 11; }\n\n.h6 {\n  font-size: 10; }\n\n.body {\n  font-size: 14; }\n\n.body2 {\n  font-size: 17; }\n\n.footnote {\n  font-size: 13; }\n\n.list-group .list-group-item {\n  color: #212121;\n  font-size: 16;\n  margin: 0;\n  padding: 16; }\n  .list-group .list-group-item Label {\n    vertical-align: center; }\n  .list-group .list-group-item .thumb {\n    stretch: fill;\n    width: 40;\n    height: 40;\n    margin-right: 16; }\n  .list-group .list-group-item.active {\n    background-color: #e0e0e0; }\n  .list-group .list-group-item .list-group-item-text {\n    color: #022734;\n    font-size: 14; }\n\n.page {\n  background-color: #fff; }\n\n.progress {\n  color: #3A53FF;\n  background-color: #bababa; }\n\n.segmented-bar {\n  font-size: 13;\n  background-color: #fff;\n  color: #212121;\n  selected-background-color: #3A53FF; }\n\n.sidedrawer-left, .sidedrawer-center {\n  background-color: #FFFFFF; }\n\n.sidedrawer-header {\n  background-color: #fafafa;\n  height: 148;\n  width: 100%; }\n\n.sidedrawer-left .sidedrawer-header {\n  padding: 16 16 0 16; }\n\n.sidedrawer-center .sidedrawer-header {\n  padding: 20 15 0 15; }\n\n.sidedrawer-header-image {\n  background-color: #e0e0e0; }\n\n.sidedrawer-left .sidedrawer-header-image {\n  height: 64;\n  width: 64;\n  border-radius: 32;\n  horizontal-align: left;\n  margin-bottom: 36; }\n\n.sidedrawer-center .sidedrawer-header-image {\n  height: 74;\n  width: 74;\n  border-radius: 37;\n  horizontal-align: center;\n  margin-bottom: 24; }\n\n.sidedrawer-header-brand {\n  color: #737373; }\n\n.sidedrawer-left .sidedrawer-header-brand {\n  horizontal-align: left;\n  font-size: 14; }\n\n.sidedrawer-center .sidedrawer-header-brand {\n  horizontal-align: center;\n  font-size: 15; }\n\n.sidedrawer-list-item {\n  height: 48;\n  horizontal-align: left;\n  width: 100%;\n  orientation: horizontal; }\n  .sidedrawer-list-item .sidedrawer-list-item-icon {\n    width: 24;\n    text-align: center;\n    font-size: 20;\n    height: 48;\n    vertical-align: center; }\n  .sidedrawer-list-item.active {\n    color: #3A53FF;\n    background-color: #F8F8F8; }\n    .sidedrawer-list-item.active .sidedrawer-list-item-icon {\n      color: #3A53FF; }\n\n.sidedrawer-left .sidedrawer-list-item-icon {\n  margin: 0 16 0 16; }\n\n.sidedrawer-center .sidedrawer-list-item-icon {\n  margin: 0 0 0 15; }\n\n.sidedrawer-list-item-text {\n  horizontal-align: left;\n  text-align: left;\n  font-size: 15;\n  background-color: transparent;\n  border-width: 0.1;\n  width: 80%;\n  vertical-align: center; }\n\n.sidedrawer-left .sidedrawer-list-item-text {\n  padding-left: 16; }\n\n.sidedrawer-center .sidedrawer-list-item-text {\n  padding-left: 15; }\n\n.slider {\n  background-color: #3A53FF; }\n  .slider[isEnabled=false] {\n    background-color: #e0e0e0;\n    color: #e0e0e0; }\n\n.switch[checked=true] {\n  background-color: #3A53FF;\n  color: #3A53FF; }\n\n.switch[checked=true][isEnabled=false] {\n  background-color: #e0e0e0;\n  color: #fff; }\n\n.switch[isEnabled=false] {\n  background-color: #e0e0e0;\n  color: #e0e0e0; }\n\n.tab-view {\n  /*color: $secondary;*/\n  selected-color: #30bcff;\n  tabs-background-color: #fff; }\n  .tab-view .tab-view-item {\n    background-color: #fff;\n    tabs-background-color: #fff; }\n\n#login-background {\n  margin-top: -20;\n  background-size: cover;\n  background-position: center; }\n\n.login-wrap {\n  padding: 0 40; }\n\n.logo-wrap {\n  margin: 60 0 10 0;\n  padding: 20 0; }\n  .logo-wrap .login-logo {\n    text-align: center;\n    font-size: 30;\n    font-weight: bold;\n    margin-bottom: 10;\n    opacity: 1;\n    color: #212121;\n    opacity: .9; }\n  .logo-wrap .login-logo-sub {\n    color: #212121;\n    opacity: .8;\n    text-align: center; }\n\n.login-wrapper {\n  padding: 20;\n  background-color: #fff;\n  border-radius: 3; }\n  .login-wrapper TextField {\n    padding: 10 10;\n    margin: 10 0 0 0; }\n\n.go-back {\n  font-size: 14;\n  text-align: center;\n  color: #212121;\n  margin-top: 10; }\n\n/**\r\n * Import all platform specific files here\r\n */\n.btn {\n  border-width: 0;\n  font-family: 'SF UI Text Medium';\n  font-size: 15; }\n\n.btn-outline {\n  border-width: 1; }\n\n.btn-rounded-sm {\n  border-radius: 4; }\n\n.btn-rounded-lg {\n  border-radius: 19; }\n\n.form {\n  font-family: 'SF UI Text Regular'; }\n  .form .input {\n    font-size: 15; }\n    .form .input.input-rounded {\n      border-radius: 27; }\n\n/* This is here temporarily because _index.ios.scss cannot be empty */\n.h1 {\n  font-size: 32; }\n\n.slider {\n  margin: 10 15; }\n\n.sidedrawer-list-item-icon, .sidedrawer-list-item {\n  color: #022734; }\n\n.switch {\n  margin: 8 15; }\n\n.list-group .list-group-item {\n  padding: 16 15 16 15; }\n  .list-group .list-group-item .thumb {\n    margin-right: 15; }\n  .list-group .list-group-item .list-group-item-heading {\n    margin-bottom: 5; }\n\n.segmented-bar {\n  margin: 0 15;\n  color: #3A53FF; }\n\n.fa {\n  font-family: \"FontAwesome\"; }\n", ""]);

; 
if (false ) {} 

/***/ }),

/***/ "./app.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootRef", function() { return rootRef; });
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react-hot-loader/index.js");
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_nativescript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/react-nativescript/dist/index.js");
/* harmony import */ var react_nativescript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_nativescript__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AppContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/AppContainer.tsx");

            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (false) {}
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (false) {}
            
        __webpack_require__("../node_modules/tns-core-modules/bundle-entry-points.js");
         // Must be imported before React and ReactNativeScript.


/* Controls react-nativescript log verbosity. true: all logs; false: only error logs. */

Object.defineProperty(global, '__DEV__', {
  value: false
});


var rootRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
react_nativescript__WEBPACK_IMPORTED_MODULE_2__["start"](react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_AppContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
  forwardedRef: rootRef
}, null),
/* This ref MUST match the ref that you pass into the base component of your app container. */
rootRef);; 
if (false ) {} 
    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./components/AppContainer.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/**\r\n * Convenient single import for light variables\r\n * Includes base variables with light overrides\r\n **/\n/**\r\n * Light variable overrides\r\n **/\n/**\n * Theme variables overrides\n**/\n.fa {\n  color: #3A53FF; }\n\n.info {\n  font-size: 20; }\n", ""]);

; 
if (false ) {} 

/***/ }),

/***/ "./components/AppContainer.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react-hot-loader/root.js");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_nativescript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/react-nativescript/dist/index.js");
/* harmony import */ var react_nativescript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_nativescript__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Reactified_Reactified__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./Reactified/Reactified.ts");
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/react-nativescript/dist/client/ElementRegistry.js");
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_4__);




 // import { Button } from 'tns-core-modules/ui/button/button';

var MyFancyButton =
/** @class */
function (_super) {
  __extends(MyFancyButton, _super);

  function MyFancyButton() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return MyFancyButton;
}(react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_4__["Button"]); // const MyButton = Reactified(new Button(), "button");


var MyComponent = Object(_Reactified_Reactified__WEBPACK_IMPORTED_MODULE_3__["Reactified"])(new react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_4__["ActionItem"]());

var AppContainer =
/** @class */
function (_super) {
  __extends(AppContainer, _super);

  function AppContainer() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.pageRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
    _this.myFancyButtonRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
    _this.myDatePickerRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
    _this.myEditableTextBaseRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"](); // (won't show)

    return _this;
  }

  AppContainer.prototype.componentDidMount = function () {
    var _this = this;

    var frame = this.props.forwardedRef.current;
    frame.navigate({
      create: function () {
        var page = _this.pageRef.current;
        page.addCssFile("./components/AppContainer.scss"); // Path is relative to the 'app' folder; not relative to this file!

        return page;
      }
    });
    setTimeout(function () {
      /*
      const myFancyButton = this.myFancyButtonRef.current;
      myFancyButton.backgroundColor = new Color("silver");
      myFancyButton.on("tap", (event) => {
          console.log("tap");
      })
      */

      /*
      const myDatePicker = this.myDatePickerRef.current;
      myDatePicker.backgroundColor = new Color("green");
      myDatePicker.on("tap", (event) => {
          console.log("taaap!");
      })
      */
    }, 2000);
  };

  AppContainer.prototype.render = function () {
    var forwardedRef = this.props.forwardedRef;
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_nativescript__WEBPACK_IMPORTED_MODULE_2__["$Frame"], {
      ref: forwardedRef
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_nativescript__WEBPACK_IMPORTED_MODULE_2__["$Page"], {
      ref: this.pageRef,
      className: "page",
      actionBarHidden: false
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_nativescript__WEBPACK_IMPORTED_MODULE_2__["$ActionBar"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_nativescript__WEBPACK_IMPORTED_MODULE_2__["$ActionItem"], {
      text: "Check this out",
      onTap: function () {
        console.log("tap");
      }
    }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](MyComponent, {
      text: "my component!",
      onTap: function () {
        console.log("tap");
      }
    })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_nativescript__WEBPACK_IMPORTED_MODULE_2__["$StackLayout"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_nativescript__WEBPACK_IMPORTED_MODULE_2__["$Switch"], {
      onToggle: function (checked) {
        console.log("checked: " + checked);
      },
      onTap: function () {
        console.log("tap");
      }
    }))));
  };

  return AppContainer;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]); // export default AppContainer;


/* harmony default export */ __webpack_exports__["default"] = (Object(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__["hot"])(AppContainer)); // Replace this line with the above line if you want to remove hot loading.

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"main":"app.js","android":{"v8Flags":"--expose_gc","markingMode":"none"},"devDependencies":{"@types/react-mixin":"^2.0.32"}};

/***/ })

},[["./app.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vUmVhY3RpZmllZC9FeHRyYVByb3BzLnRzIiwid2VicGFjazovLy8uL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vQ3VzdG9tTm9kZUhpZXJhcmNoeU1hbmFnZXIvX19jdXN0b21Ib3N0Q29uZmlnQXBwZW5kQ2hpbGRJbXBsLnRzIiwid2VicGFjazovLy8uL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vQ3VzdG9tTm9kZUhpZXJhcmNoeU1hbmFnZXIvX19jdXN0b21Ib3N0Q29uZmlnSW5zZXJ0QmVmb3JlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL0N1c3RvbU5vZGVIaWVyYXJjaHlNYW5hZ2VyL19fY3VzdG9tSG9zdENvbmZpZ1JlbW92ZUNoaWxkSW1wbC50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL0hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9SZWFjdC9jb21wb25lbnREaWRNb3VudEltcGwudHMiLCJ3ZWJwYWNrOi8vLy4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9SZWFjdC9jb21wb25lbnRXaWxsVW5tb3VudEltcGwudHMiLCJ3ZWJwYWNrOi8vLy4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9SZWFjdC9yZW5kZXJJbXBsLnRzIiwid2VicGFjazovLy8uL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vUmVhY3Qvc2hvdWxkQ29tcG9uZW50VXBkYXRlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1R5cGVzLnRzIiwid2VicGFjazovLy8uL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vVW5pcXVlL29uRGF0YUNoYW5nZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9VbmlxdWUvb25TZWxlY3RlZEluZGV4Q2hhbmdlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1VuaXF1ZS9vblRleHRDaGFuZ2VJbXBsLnRzIiwid2VicGFjazovLy8uL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vVW5pcXVlL29uVG9nZ2xlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1VuaXF1ZS9vblZhbHVlQ2hhbmdlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL2dldEN1cnJlbnRSZWZJbXBsLnRzIiwid2VicGFjazovLy8uL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vdXBkYXRlTGlzdGVuZXJzSGVscGVySW1wbC50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL3VwZGF0ZUxpc3RlbmVyc0ltcGwudHMiLCJ3ZWJwYWNrOi8vLy4vUmVhY3RpZmllZC9SZWFjdGlmaWVkLnRzIiwid2VicGFjazovLy8uL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcENvbnRhaW5lci5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUU7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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LEVBQUUsWUFBWSxvQkFBb0IsbUJBQW1CLEVBQUUsWUFBWSxrQkFBa0IscUJBQXFCLEVBQUUsVUFBVSxjQUFjLEVBQUUsWUFBWSxrQkFBa0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLG9CQUFvQixtQkFBbUIsRUFBRSxZQUFZLGtCQUFrQixxQkFBcUIsRUFBRSxVQUFVLGNBQWMsRUFBRSxZQUFZLGtCQUFrQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVksb0JBQW9CLG1CQUFtQixFQUFFLFlBQVksa0JBQWtCLHFCQUFxQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFVBQVUsZUFBZSxFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLHNCQUFzQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsb0JBQW9CLEVBQUUsWUFBWSxtQkFBbUIsc0JBQXNCLEVBQUUsVUFBVSxlQUFlLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksc0JBQXNCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixvQkFBb0IsRUFBRSxZQUFZLG1CQUFtQixzQkFBc0IsRUFBRSxVQUFVLGVBQWUsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxzQkFBc0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLG9CQUFvQixFQUFFLFlBQVksbUJBQW1CLHNCQUFzQixFQUFFLFVBQVUsZUFBZSxFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLHNCQUFzQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsb0JBQW9CLEVBQUUsWUFBWSxtQkFBbUIsc0JBQXNCLEVBQUUsVUFBVSxlQUFlLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksc0JBQXNCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixvQkFBb0IsRUFBRSxZQUFZLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGdCQUFnQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLHVCQUF1QixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IscUJBQXFCLEVBQUUsYUFBYSxvQkFBb0IsdUJBQXVCLEVBQUUsV0FBVyxnQkFBZ0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSx1QkFBdUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLHFCQUFxQixFQUFFLGFBQWEsb0JBQW9CLHVCQUF1QixFQUFFLFdBQVcsZ0JBQWdCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsdUJBQXVCLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixxQkFBcUIsRUFBRSxhQUFhLG9CQUFvQix1QkFBdUIsRUFBRSxXQUFXLGdCQUFnQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLHVCQUF1QixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IscUJBQXFCLEVBQUUsYUFBYSxvQkFBb0IsdUJBQXVCLEVBQUUsV0FBVyxnQkFBZ0IsRUFBRSxh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VkosQ0FESixDQURKO0FBeUJILEdBNUJEOztBQTZCSjtBQUFDLENBaEVELENBQTJCLCtDQUEzQixFLENBaUVBOzs7QUFDZSxnSUFBRyxDQUFDLFlBQUQsQ0FBbEIsRSxDQUFrQywyRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLnNjc3NcIjogXCIuL2FwcC5zY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyBeXFxcXC5cXFxcL2FwcFxcXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL1JlYWN0aWZpZWQvRXh0cmFQcm9wcy50c1wiOiBcIi4vUmVhY3RpZmllZC9FeHRyYVByb3BzLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL0N1c3RvbU5vZGVIaWVyYXJjaHlNYW5hZ2VyL19fY3VzdG9tSG9zdENvbmZpZ0FwcGVuZENoaWxkSW1wbC50c1wiOiBcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9DdXN0b21Ob2RlSGllcmFyY2h5TWFuYWdlci9fX2N1c3RvbUhvc3RDb25maWdBcHBlbmRDaGlsZEltcGwudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vQ3VzdG9tTm9kZUhpZXJhcmNoeU1hbmFnZXIvX19jdXN0b21Ib3N0Q29uZmlnSW5zZXJ0QmVmb3JlSW1wbC50c1wiOiBcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9DdXN0b21Ob2RlSGllcmFyY2h5TWFuYWdlci9fX2N1c3RvbUhvc3RDb25maWdJbnNlcnRCZWZvcmVJbXBsLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL0N1c3RvbU5vZGVIaWVyYXJjaHlNYW5hZ2VyL19fY3VzdG9tSG9zdENvbmZpZ1JlbW92ZUNoaWxkSW1wbC50c1wiOiBcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9DdXN0b21Ob2RlSGllcmFyY2h5TWFuYWdlci9fX2N1c3RvbUhvc3RDb25maWdSZW1vdmVDaGlsZEltcGwudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vSGVscGVycy50c1wiOiBcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9IZWxwZXJzLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1JlYWN0L2NvbXBvbmVudERpZE1vdW50SW1wbC50c1wiOiBcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9SZWFjdC9jb21wb25lbnREaWRNb3VudEltcGwudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vUmVhY3QvY29tcG9uZW50V2lsbFVubW91bnRJbXBsLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1JlYWN0L2NvbXBvbmVudFdpbGxVbm1vdW50SW1wbC50c1wiLFxuXHRcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9SZWFjdC9yZW5kZXJJbXBsLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1JlYWN0L3JlbmRlckltcGwudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vUmVhY3Qvc2hvdWxkQ29tcG9uZW50VXBkYXRlSW1wbC50c1wiOiBcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9SZWFjdC9zaG91bGRDb21wb25lbnRVcGRhdGVJbXBsLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1R5cGVzLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1R5cGVzLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1VuaXF1ZS9vbkRhdGFDaGFuZ2VJbXBsLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1VuaXF1ZS9vbkRhdGFDaGFuZ2VJbXBsLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1VuaXF1ZS9vblNlbGVjdGVkSW5kZXhDaGFuZ2VJbXBsLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1VuaXF1ZS9vblNlbGVjdGVkSW5kZXhDaGFuZ2VJbXBsLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1VuaXF1ZS9vblRleHRDaGFuZ2VJbXBsLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1VuaXF1ZS9vblRleHRDaGFuZ2VJbXBsLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1VuaXF1ZS9vblRvZ2dsZUltcGwudHNcIjogXCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vVW5pcXVlL29uVG9nZ2xlSW1wbC50c1wiLFxuXHRcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9VbmlxdWUvb25WYWx1ZUNoYW5nZUltcGwudHNcIjogXCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vVW5pcXVlL29uVmFsdWVDaGFuZ2VJbXBsLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL2dldEN1cnJlbnRSZWZJbXBsLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL2dldEN1cnJlbnRSZWZJbXBsLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL3VwZGF0ZUxpc3RlbmVyc0hlbHBlckltcGwudHNcIjogXCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vdXBkYXRlTGlzdGVuZXJzSGVscGVySW1wbC50c1wiLFxuXHRcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi91cGRhdGVMaXN0ZW5lcnNJbXBsLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL3VwZGF0ZUxpc3RlbmVyc0ltcGwudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvUmVhY3RpZmllZC50c1wiOiBcIi4vUmVhY3RpZmllZC9SZWFjdGlmaWVkLnRzXCIsXG5cdFwiLi9hcHAuc2Nzc1wiOiBcIi4vYXBwLnNjc3NcIixcblx0XCIuL2FwcC50c1wiOiBcIi4vYXBwLnRzXCIsXG5cdFwiLi9jb21wb25lbnRzL0FwcENvbnRhaW5lci5zY3NzXCI6IFwiLi9jb21wb25lbnRzL0FwcENvbnRhaW5lci5zY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgKD88IVxcXFxiQXBwX1Jlc291cmNlc1xcXFxiLiopXFxcXC4oeG1sfGNzc3xqc3woPzwhXFxcXC5kXFxcXC4pdHN8KD88IVxcXFxiX1tcXFxcdy1dKlxcXFwuKXNjc3MpJFwiOyIsIlxuaW1wb3J0IHsgRXZlbnREYXRhfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgRG9jayB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvZG9jay1sYXlvdXQvZG9jay1sYXlvdXRcIjtcbmltcG9ydCB7IFNob3duTW9kYWxseURhdGF9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlldy92aWV3XCI7XG5pbXBvcnQge1xuICAgIEdlc3R1cmVFdmVudERhdGEsXG4gICAgR2VzdHVyZVR5cGVzLFxuICAgIFRvdWNoR2VzdHVyZUV2ZW50RGF0YSxcbiAgICBTd2lwZUdlc3R1cmVFdmVudERhdGEsXG4gICAgUm90YXRpb25HZXN0dXJlRXZlbnREYXRhLFxuICAgIFBpbmNoR2VzdHVyZUV2ZW50RGF0YSxcbiAgICBQYW5HZXN0dXJlRXZlbnREYXRhLFxufSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlcy9nZXN0dXJlc1wiO1xuXG5pbXBvcnQgeyBcbiAgICBPYnNlcnZhYmxlLFxuICAgIFZpZXdCYXNlLFxuICAgIFZpZXcsXG4gICAgUGFnZSxcbiAgICBBY3Rpb25JdGVtLFxuICAgIERhdGVQaWNrZXIsXG4gICAgRWRpdGFibGVUZXh0QmFzZSxcbiAgICBGcmFtZSxcbiAgICBHcmlkTGF5b3V0LFxuICAgIEh0bWxWaWV3LFxuICAgIExpc3RQaWNrZXIsXG4gICAgU3dpdGNoLFxuICAgIFNjcm9sbFZpZXcsXG4gICAgU2VhcmNoQmFyLFxuICAgIFNlZ21lbnRlZEJhcixcbiAgICBTbGlkZXIsXG59IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5XCI7XG5cbmltcG9ydCB7IFBhZ2VOYXZpZ2F0aW9uRXZlbnRIYW5kbGVyIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L2NvbXBvbmVudHMvUGFnZVwiO1xuaW1wb3J0IHsgSXRlbVNwZWMgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2dyaWQtbGF5b3V0L2dyaWQtbGF5b3V0XCI7XG5pbXBvcnQgeyBJdGVtc1NvdXJjZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3QtcGlja2VyL2xpc3QtcGlja2VyXCI7XG5pbXBvcnQgeyBDcmVhdGVWaWV3RXZlbnREYXRhLCBQbGFjZWhvbGRlciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BsYWNlaG9sZGVyL3BsYWNlaG9sZGVyXCI7XG5pbXBvcnQgeyBTY3JvbGxFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zY3JvbGwtdmlldy9zY3JvbGwtdmlld1wiO1xuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWdtZW50ZWQtYmFyL3NlZ21lbnRlZC1iYXJcIjtcblxuXG4vLyBleHBvcnQgdHlwZSBFeHRyYVByb3BzPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPiA9IE9ic2VydmFibGVQcm9wczxUPiAmIFZpZXdCYXNlUHJvcHM8VD4gJiBWaWV3UHJvcHM8VD4gJiBQYWdlUHJvcHM8VD4gJiBBY3Rpb25JdGVtUHJvcHM8VD47XG5leHBvcnQgdHlwZSBFeHRyYVByb3BzPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPiA9IE9ic2VydmFibGVQcm9wczxUPiAmIFZpZXdCYXNlUHJvcHM8VD4gJiBWaWV3UHJvcHM8VD5cbiAmIFBhZ2VQcm9wczxUPiAmIEFjdGlvbkl0ZW1Qcm9wczxUPiAmIERhdGVQaWNrZXJQcm9wczxUPiAmIEVkaXRhYmxlVGV4dEJhc2VQcm9wczxUPiAmIEZyYW1lUHJvcHM8VD5cbiAmIEdyaWRMYXlvdXRQcm9wczxUPiAmIEh0bWxWaWV3UHJvcHM8VD4gJiBMaXN0UGlja2VyUHJvcHM8VD4gJiBQbGFjZWhvbGRlclByb3BzPFQ+ICYgU2Nyb2xsVmlld1Byb3BzPFQ+XG4gJiBTZWFyY2hCYXJQcm9wczxUPiAmIFNlZ21lbnRlZEJhclByb3BzPFQ+ICYgU2xpZGVyUHJvcHM8VD4gJiBTd2l0Y2hQcm9wczxUPjtcblxuLy8gdXNpbmcgY29uZGl0aW9uYWwgc28gdGhhdCBSTlNCdXR0b24gZG9uJ3QgZ2V0IG5hdmlnYXRlZFRvIChQYWdlUHJvcHMpIFxuXG5cbi8qIFxuIFNob3VsZCBnZXQgT2JzZXJ2YWJsZVByb3BzXG4gd2l0aCBnZXR0ZXIvb25kaXRpb25hbCB0eXBpbmcgLSBzaW5jZSB0aGUgbnMgY29tcG9uZW50XG4gbXVzdCBiZSBvZiB0eXBlIE9ic2VydmFibGUuIHVzaW5nIGJlbG93IGNvbmlkdGlvbmFsIHR5cGVcbiBhbHNvIGNhdXNlIGFuIHR5cGUgZXJyb3IgaW4gZ2V0Q3VycmVudFJlZkltcGxcbiAqL1xuLy8gdHlwZSBPYnNlcnZhYmxlUHJvcHM8VCBleHRlbmRzIE9ic2VydmFibGU+ID0gVCBleHRlbmRzIE9ic2VydmFibGUgPyBJT2JzZXJ2YWJsZTxUPiA6IEVtcHR5XG5cbmludGVyZmFjZSBPYnNlcnZhYmxlUHJvcHM8VCBleHRlbmRzIE9ic2VydmFibGU+IHtcbiAgICBlbGVtZW50S2V5Pzogc3RyaW5nIC8vIGFkZGVkXG4gICAgZm9yd2FyZGVkUmVmPzogUmVhY3QuUmVmT2JqZWN0PFQ+O1xuICAgIG9uUHJvcGVydHlDaGFuZ2U/OiAoZGF0YTogRXZlbnREYXRhKSA9PiB2b2lkO1xufVxuXG4vKiByZXN0IGlzIHVzaW5nIGNvbmRpdGlvbmFsIHR5cGUgXCJnZXR0ZXJzXCIgc28gdGhhdCBidXR0b24gZG9uJ3QgYWNjZXNzIGdldCBwYWdlJ3MgcHJvcHMgZXRjKi9cblxudHlwZSBWaWV3QmFzZVByb3BzPFQ+ID0gVCBleHRlbmRzIFZpZXdCYXNlID8gSVZpZXdCYXNlIDogRW1wdHlcbmludGVyZmFjZSBJVmlld0Jhc2Uge1xuICAgIF9fcm5zX19ub2RlVHJlZVJvbGU/OiBzdHJpbmc7XG4gICAgZG9jaz86IERvY2s7XG59XG5cbnR5cGUgVmlld1Byb3BzPFQ+ID0gVCBleHRlbmRzIFZpZXcgPyBJVmlldyA6IEVtcHR5O1xuaW50ZXJmYWNlIElWaWV3IHtcbiAgICAvKiBGcm9tIFZpZXcuICovXG4gICAgb25Mb2FkZWQ/OiAoYXJnczogRXZlbnREYXRhKSA9PiB2b2lkO1xuICAgIG9uVW5sb2FkZWQ/OiAoYXJnczogRXZlbnREYXRhKSA9PiB2b2lkO1xuICAgIG9uQW5kcm9pZEJhY2tQcmVzc2VkPzogKGFyZ3M6IEV2ZW50RGF0YSkgPT4gdm9pZDtcbiAgICBvblNob3dpbmdNb2RhbGx5PzogKGFyZ3M6IFNob3duTW9kYWxseURhdGEpID0+IHZvaWQ7XG4gICAgb25TaG93bk1vZGFsbHk/OiAoYXJnczogU2hvd25Nb2RhbGx5RGF0YSkgPT4gdm9pZDtcblxuICAgIC8qIFRoZSBnZXN0dXJlIGhhbmRsZXJzLiAqL1xuICAgIG9uVGFwPzogKGFyZ3M6IEdlc3R1cmVFdmVudERhdGEpID0+IHZvaWQ7XG4gICAgb25Eb3VibGVUYXA/OiAoYXJnczogR2VzdHVyZUV2ZW50RGF0YSkgPT4gdm9pZDtcbiAgICBvblBpbmNoPzogKGFyZ3M6IFBpbmNoR2VzdHVyZUV2ZW50RGF0YSkgPT4gdm9pZDtcbiAgICBvblBhbj86IChhcmdzOiBQYW5HZXN0dXJlRXZlbnREYXRhKSA9PiB2b2lkO1xuICAgIG9uU3dpcGU/OiAoYXJnczogU3dpcGVHZXN0dXJlRXZlbnREYXRhKSA9PiB2b2lkO1xuICAgIG9uUm90YXRpb24/OiAoYXJnczogUm90YXRpb25HZXN0dXJlRXZlbnREYXRhKSA9PiB2b2lkO1xuICAgIG9uTG9uZ1ByZXNzPzogKGFyZ3M6IEdlc3R1cmVFdmVudERhdGEpID0+IHZvaWQ7XG4gICAgb25Ub3VjaD86IChhcmdzOiBUb3VjaEdlc3R1cmVFdmVudERhdGEpID0+IHZvaWQ7XG5cbiAgICAvKiBUaGVzZSBhcmUgdG8gYmUgb3ZlcnJpZGRlbiBpbiBzdWJjbGFzc2VzIG9mIFZpZXcsIHNvIHVubGlrZWx5IHRvIGJlIGFwcHJvcHJpYXRlLiAqL1xuICAgIC8vIG9uTGF5b3V0PzogKGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIsIHJpZ2h0OiBudW1iZXIsIGJvdHRvbTogbnVtYmVyKSA9PiB2b2lkO1xuICAgIC8vIG9uTWVhc3VyZT86ICh3aWR0aE1lYXN1cmVTcGVjOiBudW1iZXIsIGhlaWdodE1lYXN1cmVTcGVjOiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbnR5cGUgUGFnZVByb3BzPFQ+ID0gVCBleHRlbmRzIFBhZ2UgPyBJUGFnZSA6IEVtcHR5XG5pbnRlcmZhY2UgSVBhZ2Uge1xuICAgIG9uTmF2aWdhdGluZ1RvPzogUGFnZU5hdmlnYXRpb25FdmVudEhhbmRsZXI7XG4gICAgb25OYXZpZ2F0ZWRUbz86IFBhZ2VOYXZpZ2F0aW9uRXZlbnRIYW5kbGVyO1xuICAgIG9uTmF2aWdhdGluZ0Zyb20/OiBQYWdlTmF2aWdhdGlvbkV2ZW50SGFuZGxlcjtcbiAgICBvbk5hdmlnYXRlZEZyb20/OiBQYWdlTmF2aWdhdGlvbkV2ZW50SGFuZGxlcjtcbn1cblxudHlwZSBBY3Rpb25JdGVtUHJvcHM8VD4gPSBUIGV4dGVuZHMgQWN0aW9uSXRlbSA/IElBY3Rpb25JdGVtIDogRW1wdHlcbmludGVyZmFjZSBJQWN0aW9uSXRlbSB7XG4gICAgb25UYXA/OiAoYXJnczogR2VzdHVyZUV2ZW50RGF0YSkgPT4gdm9pZDtcbn1cblxudHlwZSBEYXRlUGlja2VyUHJvcHM8VD4gPSBUIGV4dGVuZHMgRGF0ZVBpY2tlciA/IElEYXRlUGlja2VyIDogRW1wdHlcbmludGVyZmFjZSBJRGF0ZVBpY2tlciB7XG4gICAgb25EYXRlQ2hhbmdlPzogKGRhdGU6IERhdGUpID0+IHZvaWQ7XG59XG50eXBlIEVkaXRhYmxlVGV4dEJhc2VQcm9wczxUPj0gVCBleHRlbmRzIEVkaXRhYmxlVGV4dEJhc2UgPyBJRWRpdGFibGVUZXh0QmFzZSA6IEVtcHR5XG5pbnRlcmZhY2UgSUVkaXRhYmxlVGV4dEJhc2Uge1xuICAgIG9uQmx1cj86IChhcmdzOiBFdmVudERhdGEpID0+IHZvaWQ7XG4gICAgb25Gb2N1cz86IChhcmdzOiBFdmVudERhdGEpID0+IHZvaWQ7XG4gICAgb25UZXh0Q2hhbmdlPzogKGFyZ3M6IEV2ZW50RGF0YSkgPT4gdm9pZDtcbn1cbnR5cGUgRnJhbWVQcm9wczxUPiA9IFQgZXh0ZW5kcyBGcmFtZSA/IElGcmFtZSA6IEVtcHR5O1xuaW50ZXJmYWNlIElGcmFtZSB7XG4gICAgb25PcHRpb25TZWxlY3RlZD86IChhcmdzOiBFdmVudERhdGEpID0+IHZvaWQ7XG59XG50eXBlIEdyaWRMYXlvdXRQcm9wczxUPiA9IFQgZXh0ZW5kcyBHcmlkTGF5b3V0ID8gSUdyaWRMYXlvdXQgOiBFbXB0eTtcbmludGVyZmFjZSBJR3JpZExheW91dCB7XG4gICAgLyogRWFjaCBjb25zdGl0dWVudCB2aWV3IHBhc3NlZCBpbiBtdXN0IGJlYXIgXCJyb3dcIiBhbmQgXCJjb2xcIiBQcm9wcy4gKi9cbiAgICAgICAgLyogcm93cyBhbmQgY29sdW1ucyB3aWxsIGJlIGFkZGVkIGluIG9yZGVyIHNwZWNpZmllZC4gKi9cbiAgICByb3dzPzogSXRlbVNwZWNbXTtcbiAgICBjb2x1bW5zPzogSXRlbVNwZWNbXTtcbn1cblxudHlwZSBIdG1sVmlld1Byb3BzPFQ+ID0gVCBleHRlbmRzIEh0bWxWaWV3ID8gSUh0bWxWaWV3IDogRW1wdHlcbmludGVyZmFjZSBJSHRtbFZpZXcge1xuICAgIGh0bWw6IHN0cmluZztcbn1cblxudHlwZSBMaXN0UGlja2VyUHJvcHM8VD4gPSBUIGV4dGVuZHMgTGlzdFBpY2tlciA/IElMaXN0UGlja2VyIDogRW1wdHk7XG5pbnRlcmZhY2UgSUxpc3RQaWNrZXIge1xuICAgIGl0ZW1zOiBhbnlbXSB8IEl0ZW1zU291cmNlO1xuICAgIG9uU2VsZWN0ZWRJbmRleENoYW5nZT86IChzZWxlY3RlZEluZGV4OiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbnR5cGUgUGxhY2Vob2xkZXJQcm9wczxUPiA9IFQgZXh0ZW5kcyBQbGFjZWhvbGRlciA/IElQbGFjZWhvbGRlciA6IEVtcHR5XG5pbnRlcmZhY2UgSVBsYWNlaG9sZGVyIHtcbiAgICBvbkNyZWF0aW5nVmlldz8oYXJnczogQ3JlYXRlVmlld0V2ZW50RGF0YSk6IHZvaWQ7XG59XG5cbnR5cGUgU2Nyb2xsVmlld1Byb3BzPFQ+ID0gVCBleHRlbmRzIFNjcm9sbFZpZXcgPyBJU2Nyb2xsVmlldyA6IEVtcHR5O1xuaW50ZXJmYWNlIElTY3JvbGxWaWV3IHtcbiAgICBvblNjcm9sbD86IChhcmdzOiBTY3JvbGxFdmVudERhdGEpID0+IHZvaWQ7XG59XG5cbnR5cGUgU2VhcmNoQmFyUHJvcHM8VD4gPSBUIGV4dGVuZHMgU2VhcmNoQmFyID8gSVNlYXJjaEJhciA6IEVtcHR5O1xuaW50ZXJmYWNlIElTZWFyY2hCYXIge1xuICAgIG9uVGV4dENoYW5nZT86ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgb25TdWJtaXQ/OiAoYXJnczogRXZlbnREYXRhKSA9PiB2b2lkO1xuICAgIG9uQ2xvc2U/OiAoYXJnczogRXZlbnREYXRhKSA9PiB2b2lkO1xufVxuXG50eXBlIFNlZ21lbnRlZEJhclByb3BzPFQ+ID0gVCBleHRlbmRzIFNlZ21lbnRlZEJhciA/IElTZWdtZW50ZWRCYXIgOiBFbXB0eVxuaW50ZXJmYWNlIElTZWdtZW50ZWRCYXIge1xuICAgIG9uU2VsZWN0ZWRJbmRleENoYW5nZWQ/OiAoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpID0+IHZvaWQ7XG59XG5cbnR5cGUgU2xpZGVyUHJvcHM8VD4gPSBUIGV4dGVuZHMgU2xpZGVyID8gSVNsaWRlciA6IEVtcHR5O1xuaW50ZXJmYWNlIElTbGlkZXIge1xuICAgIG9uVmFsdWVDaGFuZ2U/OiAoYXJnczogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG50eXBlIFN3aXRjaFByb3BzPFQ+ID0gVCBleHRlbmRzIFN3aXRjaCA/IElTd2l0Y2ggOiBFbXB0eTtcbmludGVyZmFjZSBJU3dpdGNoIHtcbiAgICBvblRvZ2dsZT86IChjaGVja2VkOiBib29sZWFuKSA9PiB2b2lkO1xufVxuXG4vKiBjb3VsZCBiZSB1c2VkIHNldCBwcm9wcyBmb3IgZXZlcnkgc2luZ2xlIFJOUyBDb21wb25lbnQqL1xuaW50ZXJmYWNlIEVtcHR5IHtcblxufVxuXG4vLyBpbnNpZGUgaHR0cHM6Ly9naXRodWIuY29tL3NoaXJha2FiYS9yZWFjdC1uYXRpdmVzY3JpcHQvYmxvYi9tYXN0ZXIvcmVhY3QtbmF0aXZlc2NyaXB0L3NyYy9jb21wb25lbnRzL1N3aXRjaC50c1xuLy8gY2FuIGxpc3RlbmVyIGJlIGF0dGFjaGVkIHRvIHRoaXM6UFJPUFMub25Ub2dnbGUgPyIsImltcG9ydCB7IFRleHRCYXNlIGFzIE5hdGl2ZVNjcmlwdFRleHRCYXNlLCBPYnNlcnZhYmxlfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3QvY2xpZW50L0VsZW1lbnRSZWdpc3RyeVwiO1xuaW1wb3J0IHsgSW5zdGFuY2UsIFRleHRJbnN0YW5jZSB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9zaGFyZWQvSG9zdENvbmZpZ1R5cGVzXCI7XG5pbXBvcnQgeyBGb3JtYXR0ZWRTdHJpbmcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy90ZXh0L2Zvcm1hdHRlZC1zdHJpbmdcIlxuZXhwb3J0IGNvbnN0IF9fY3VzdG9tSG9zdENvbmZpZ0FwcGVuZENoaWxkSW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4ocGFyZW50OiBULCBjaGlsZDogSW5zdGFuY2UgfCBUZXh0SW5zdGFuY2UpOiBib29sZWFuID0+IHtcbiAgICByZXR1cm4gdGV4dEJhc2VJbXBsKHBhcmVudCwgY2hpbGQpO1xufVxuXG5jb25zdCB0ZXh0QmFzZUltcGwgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KHBhcmVudDogVCwgY2hpbGQ6IEluc3RhbmNlIHwgVGV4dEluc3RhbmNlKSA9PiB7XG4gICAgaWYocGFyZW50IGluc3RhbmNlb2YgTmF0aXZlU2NyaXB0VGV4dEJhc2UpIHtcbiAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgRm9ybWF0dGVkU3RyaW5nKSB7XG4gICAgICAgICAgICBwYXJlbnQuZm9ybWF0dGVkVGV4dCA9IGNoaWxkO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gaS5lLiBkZWZlciB0byBIb3N0IENvbmZpZy5cbiAgICByZXR1cm4gZmFsc2U7XG59IiwiaW1wb3J0IHsgVGV4dEJhc2UgYXMgTmF0aXZlU2NyaXB0VGV4dEJhc2UsIE9ic2VydmFibGV9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBJbnN0YW5jZSwgVGV4dEluc3RhbmNlIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L3NoYXJlZC9Ib3N0Q29uZmlnVHlwZXNcIjtcbmltcG9ydCB7IEZvcm1hdHRlZFN0cmluZyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3RleHQvZm9ybWF0dGVkLXN0cmluZ1wiXG5cblxuZXhwb3J0IGNvbnN0IF9fY3VzdG9tSG9zdENvbmZpZ0luc2VydEJlZm9yZUltcGwgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KFxuICAgIHBhcmVudDogVCxcbiAgICBjaGlsZDogSW5zdGFuY2UgfCBUZXh0SW5zdGFuY2UsXG4gICAgYmVmb3JlQ2hpbGQ6IEluc3RhbmNlIHwgVGV4dEluc3RhbmNlXG4pOiBib29sZWFuID0+IHtcbiAgICByZXR1cm4gdGV4dEJhc2VJbXBsKHBhcmVudCwgY2hpbGQsIGJlZm9yZUNoaWxkKTtcbn1cbmNvbnN0IHRleHRCYXNlSW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oXG4gICAgcGFyZW50OiBULFxuICAgIGNoaWxkOiBJbnN0YW5jZSB8IFRleHRJbnN0YW5jZSxcbiAgICBiZWZvcmVDaGlsZDogSW5zdGFuY2UgfCBUZXh0SW5zdGFuY2VcbikgOiBib29sZWFuID0+IHtcbiAgICBpZihwYXJlbnQgaW5zdGFuY2VvZiBOYXRpdmVTY3JpcHRUZXh0QmFzZSkge1xuICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBGb3JtYXR0ZWRTdHJpbmcpIHtcbiAgICAgICAgICAgIHBhcmVudC5mb3JtYXR0ZWRUZXh0ID0gY2hpbGQ7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGkuZS4gZGVmZXIgdG8gSG9zdCBDb25maWcuXG4gICAgcmV0dXJuIGZhbHNlO1xufSIsImltcG9ydCB7IFRleHRCYXNlIGFzIE5hdGl2ZVNjcmlwdFRleHRCYXNlLCBPYnNlcnZhYmxlfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3QvY2xpZW50L0VsZW1lbnRSZWdpc3RyeVwiO1xuaW1wb3J0IHsgSW5zdGFuY2UsIFRleHRJbnN0YW5jZSB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9zaGFyZWQvSG9zdENvbmZpZ1R5cGVzXCI7XG5pbXBvcnQgeyBGb3JtYXR0ZWRTdHJpbmcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy90ZXh0L2Zvcm1hdHRlZC1zdHJpbmdcIlxuXG5leHBvcnQgY29uc3QgX19jdXN0b21Ib3N0Q29uZmlnUmVtb3ZlQ2hpbGRJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihwYXJlbnQ6IFQsIGNoaWxkOiBJbnN0YW5jZSB8IFRleHRJbnN0YW5jZSk6IGJvb2xlYW4gPT4ge1xuICAgIHJldHVybiB0ZXh0QmFzZUltcGwocGFyZW50LCBjaGlsZCk7XG59XG5cbmNvbnN0IHRleHRCYXNlSW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4ocGFyZW50OiBULCBjaGlsZDogSW5zdGFuY2UgfCBUZXh0SW5zdGFuY2UpOiBib29sZWFuID0+IHtcbiAgICBpZihwYXJlbnQgaW5zdGFuY2VvZiBOYXRpdmVTY3JpcHRUZXh0QmFzZSkge1xuICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBGb3JtYXR0ZWRTdHJpbmcpIHtcbiAgICAgICAgICAgIHBhcmVudC5mb3JtYXR0ZWRUZXh0ID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBpLmUuIGRlZmVyIHRvIEhvc3QgQ29uZmlnLlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgeyBcbiAgICBlbGVtZW50TWFwLFxuICAgIEFic29sdXRlTGF5b3V0LFxuICAgIEFjdGlvbkJhcixcbiAgICBBY3Rpb25JdGVtLFxuICAgIEFjdGl2aXR5SW5kaWNhdG9yLFxuICAgIEFuaW1hdGlvbixcbiAgICBPYnNlcnZhYmxlXG59ZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L2NsaWVudC9FbGVtZW50UmVnaXN0cnlcIjtcblxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZU9mKG9iamVjdDogT2JqZWN0KTogc3RyaW5nIHtcbiAgICByZXR1cm4gb2JqZWN0LmNvbnN0cnVjdG9yLm5hbWU7XG59XG5leHBvcnQgZnVuY3Rpb24gZmlyc3RMZXR0ZXJMb3dlcmNhc2UobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5hbWUuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpO1xufVxuXG5jb25zdCBpbXBsTWV0aG9kUmVnaXN0cnk6IHN0cmluZ1tdID0gW107IFxuY29uc29sZS5sb2coXCJhbGwgZWxlbWVudHMgaW4gZWxlbWVudCByZWdpc3RyeVwiKVxuZm9yKGxldCBlbGVtZW50TmFtZSBpbiBlbGVtZW50TWFwKSB7XG4gICAgaW1wbE1ldGhvZFJlZ2lzdHJ5LnB1c2goZWxlbWVudE5hbWUgKyBcIkltcGxcIik7XG59XG5cbnR5cGUgSW1wbE1ldGhvZCA9ICguLi5hcmdzOiBhbnkpID0+IGFueVxuZXhwb3J0IGNvbnN0IGV4ZWN1dGVJbk9yZGVyID0gKGltcGxNZXRob2RzOiBJbXBsTWV0aG9kW10sIC4uLmFyZ3M6IGFueSkgPT4geyBcbiAgICBsZXQgcmV0dXJuVmFsdWUgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgbGV0IHJ1biA9IHVuZGVmaW5lZDtcblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwiZ2VuZXJpY0ltcGxcIik7XG4gICAgaWYocnVuKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVuKC4uLmFyZ3MpO1xuICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBydW4gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcnVuID0gaW1wbE1ldGhvZHMuZmluZCgobWV0aG9kKSA9PiBtZXRob2QubmFtZSA9PT0gXCJvYnNlcnZhYmxlSW1wbFwiKTtcbiAgICBpZihydW4pIHsgXG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVuKC4uLmFyZ3MpO1xuICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBydW4gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcnVuID0gaW1wbE1ldGhvZHMuZmluZCgobWV0aG9kKSA9PiBtZXRob2QubmFtZSA9PT0gXCJ2aWV3QmFzZUltcGxcIik7IC8vIGV4dGVuZHMgT2JzZXJ2YWJsZS4uLlxuICAgIFxuICAgIGlmKHJ1bikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1biguLi5hcmdzKTtcbiAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcnVuID0gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgcnVuID0gaW1wbE1ldGhvZHMuZmluZCgobWV0aG9kKSA9PiBtZXRob2QubmFtZSA9PT0gXCJ2aWV3SW1wbFwiKTsgLy8gZXh0ZW5kcyBWaWV3QmFzZS4uLlxuICAgIGlmKHJ1bikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1biguLi5hcmdzKTtcbiAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcnVuID0gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgcnVuID0gaW1wbE1ldGhvZHMuZmluZCgobWV0aG9kKSA9PiBtZXRob2QubmFtZSA9PT0gXCJhY3Rpb25JdGVtSW1wbFwiKTtcbiAgICBpZihydW4pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBydW4gPSBpbXBsTWV0aG9kcy5maW5kKChtZXRob2QpID0+IG1ldGhvZC5uYW1lID09PSBcInBhZ2VJbXBsXCIpIC8vIGV4dGVuZHMgVmlldy4uLlxuICAgIGlmKHJ1bikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1biguLi5hcmdzKTtcbiAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcnVuID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwidGV4dEJhc2VJbXBsXCIpO1xuICAgIGlmKHJ1bikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1biguLi5hcmdzKTtcbiAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcnVuID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwiZGF0ZVBpY2tlckltcGxcIik7XG4gICAgaWYocnVuKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVuKC4uLmFyZ3MpO1xuICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBydW4gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcnVuID0gaW1wbE1ldGhvZHMuZmluZCgobWV0aG9kKSA9PiBtZXRob2QubmFtZSA9PT0gXCJmcmFtZUltcGxcIik7XG4gICAgaWYocnVuKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVuKC4uLmFyZ3MpO1xuICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBydW4gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcnVuID0gaW1wbE1ldGhvZHMuZmluZCgobWV0aG9kKSA9PiBtZXRob2QubmFtZSA9PT0gXCJodG1sVmlld0ltcGxcIik7XG4gICAgaWYocnVuKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVuKC4uLmFyZ3MpO1xuICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBydW4gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcnVuID0gaW1wbE1ldGhvZHMuZmluZCgobWV0aG9kKSA9PiBtZXRob2QubmFtZSA9PT0gXCJsaXN0UGlja2VySW1wbFwiKTtcbiAgICBpZihydW4pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBydW4gPSBpbXBsTWV0aG9kcy5maW5kKChtZXRob2QpID0+IG1ldGhvZC5uYW1lID09PSBcInBsYWNlaG9sZGVySW1wbFwiKTtcbiAgICBpZihydW4pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBydW4gPSBpbXBsTWV0aG9kcy5maW5kKChtZXRob2QpID0+IG1ldGhvZC5uYW1lID09PSBcInNlYXJjaEJhckltcGxcIik7XG4gICAgaWYocnVuKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVuKC4uLmFyZ3MpO1xuICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBydW4gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcnVuID0gaW1wbE1ldGhvZHMuZmluZCgobWV0aG9kKSA9PiBtZXRob2QubmFtZSA9PT0gXCJzZWdtZW50ZWRCYXJJbXBsXCIpO1xuICAgIGlmKHJ1bikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1biguLi5hcmdzKTtcbiAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcnVuID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwic2xpZGVySW1wbFwiKTtcbiAgICBpZihydW4pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBydW4gPSBpbXBsTWV0aG9kcy5maW5kKChtZXRob2QpID0+IG1ldGhvZC5uYW1lID09PSBcInN3aXRjaEltcGxcIik7XG4gICAgaWYocnVuKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVuKC4uLmFyZ3MpO1xuICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBydW4gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcnVuID0gaW1wbE1ldGhvZHMuZmluZCgobWV0aG9kKSA9PiBtZXRob2QubmFtZSA9PT0gXCJjb250ZW50Vmlld0ltcGxcIik7XG4gICAgaWYocnVuKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVuKC4uLmFyZ3MpO1xuICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBydW4gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcnVuID0gaW1wbE1ldGhvZHMuZmluZCgobWV0aG9kKSA9PiBtZXRob2QubmFtZSA9PT0gXCJzY3JvbGxWaWV3SW1wbFwiKTsgLy8gZXh0ZW5kcyBDb250ZW50Vmlldy4uLlxuICAgIGlmKHJ1bikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1biguLi5hcmdzKTtcbiAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcnVuID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwiYnV0dG9uSW1wbFwiKTsgLy8gZXh0ZW5kcyBUZXh0QmFzZS4uLlxuICAgIGlmKHJ1bikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1biguLi5hcmdzKTtcbiAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcnVuID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwibGFiZWxJbXBsXCIpO1xuICAgIGlmKHJ1bikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1biguLi5hcmdzKTtcbiAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcnVuID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwiZWRpdGFibGVUZXh0QmFzZUltcGxcIik7XG4gICAgaWYocnVuKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVuKC4uLmFyZ3MpO1xuICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBydW4gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcnVuID0gaW1wbE1ldGhvZHMuZmluZCgobWV0aG9kKSA9PiBtZXRob2QubmFtZSA9PT0gXCJ0ZXh0RmllbGRJbXBsXCIpOyAvLyBleHRlbmRzIEVkaXRhYmxlVGV4dEJhc2UuLi5cbiAgICBpZihydW4pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG59XG5cbmNvbnN0IGhpZXJhcmNoeU1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgICBcIkFic29sdXRlTGF5b3V0XCIgOiBcIkxheW91dEJhc2VcIixcbiAgICBcIkFjdGlvbkJhclwiIDogXCJWaWV3XCIsXG4gICAgXCJBY3Rpb25JdGVtXCIgOiBcIlZpZXdCYXNlXCIsXG4gICAgXCJBY3Rpdml0eUluZGljYXRvclwiIDogXCJWaWV3QmFzZVwiLFxufTsiLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlL29ic2VydmFibGVcIjtcbmltcG9ydCB7IERhdGVQaWNrZXIsIExpc3RQaWNrZXIsIFNlYXJjaEJhciwgU2xpZGVyLCBTd2l0Y2ggfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3QvY2xpZW50L0VsZW1lbnRSZWdpc3RyeVwiO1xuaW1wb3J0IHsgZXhlY3V0ZUluT3JkZXIgfSBmcm9tIFwiLi4vSGVscGVyc1wiO1xuaW1wb3J0IHsgUmVhY3RpZnkgfSBmcm9tIFwiLi4vVHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudERpZE1vdW50SW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+KSA9PiB7XG4gICAgZXhlY3V0ZUluT3JkZXIoXG4gICAgICAgIFtvYnNlcnZhYmxlSW1wbCxcbiAgICAgICAgZGF0ZVBpY2tlckltcGwsXG4gICAgICAgIGxpc3RQaWNrZXJJbXBsLFxuICAgICAgICBzZWFyY2hCYXJJbXBsLFxuICAgICAgICBzbGlkZXJJbXBsLFxuICAgICAgICBzd2l0Y2hJbXBsXSxcbiAgICAgICAgaW5zdGFuY2UpO1xuICAgIFxufVxuXG5jb25zdCBvYnNlcnZhYmxlSW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+KSA9PiB7XG4gICAgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwidXBkYXRlTGlzdGVuZXJzSGVscGVyXCIpKHRydWUpO1xufVxuY29uc3QgZGF0ZVBpY2tlckltcGwgPSA8VCBleHRlbmRzIERhdGVQaWNrZXI+KGluc3RhbmNlOiBSZWFjdGlmeTxUPikgPT4ge1xuICAgIGNvbnN0IG5vZGU6IFQgfCBudWxsID0gUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwiZ2V0Q3VycmVudFJlZlwiKSgpO1xuICAgICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgUmVhY3QgcmVmIHRvIE5hdGl2ZVNjcmlwdCBWaWV3IGxvc3QsIHNvIHVuYWJsZSB0byB1cGRhdGUgZXZlbnQgbGlzdGVuZXJzLmApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUub24oXCJkYXRlQ2hhbmdlXCIsIFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcIm9uRGF0ZUNoYW5nZVwiKSk7XG59XG5jb25zdCBsaXN0UGlja2VySW1wbCA9IDxUIGV4dGVuZHMgTGlzdFBpY2tlcj4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+KSA9PiB7XG4gICAgY29uc3Qgbm9kZTogVCB8IG51bGwgPSBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJnZXRDdXJyZW50UmVmXCIpKCk7XG4gICAgICAgIGlmICghbm9kZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBSZWFjdCByZWYgdG8gTmF0aXZlU2NyaXB0IFZpZXcgbG9zdCwgc28gdW5hYmxlIHRvIHVwZGF0ZSBldmVudCBsaXN0ZW5lcnMuYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5vbihcInNlbGVjdGVkSW5kZXhDaGFuZ2VcIiwgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwib25TZWxlY3RlZEluZGV4Q2hhbmdlXCIpKTtcbn1cblxuY29uc3Qgc2VhcmNoQmFySW1wbCA9IDxUIGV4dGVuZHMgU2VhcmNoQmFyPihpbnN0YW5jZTogUmVhY3RpZnk8VD4pID0+IHtcbiAgICBjb25zdCBub2RlOiBUIHwgbnVsbCA9IFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKTtcbiAgICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFJlYWN0IHJlZiB0byBOYXRpdmVTY3JpcHQgVmlldyBsb3N0LCBzbyB1bmFibGUgdG8gdXBkYXRlIGV2ZW50IGxpc3RlbmVycy5gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBub2RlLm9uKFwidGV4dENoYW5nZVwiLCBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJvblRleHRDaGFuZ2VcIikpO1xufVxuXG5jb25zdCBzbGlkZXJJbXBsID0gPFQgZXh0ZW5kcyBTbGlkZXI+KGluc3RhbmNlOiBSZWFjdGlmeTxUPikgPT4ge1xuICAgIGNvbnN0IG5vZGU6IFQgfCBudWxsID0gUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwiZ2V0Q3VycmVudFJlZlwiKSgpO1xuICAgICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgUmVhY3QgcmVmIHRvIE5hdGl2ZVNjcmlwdCBWaWV3IGxvc3QsIHNvIHVuYWJsZSB0byB1cGRhdGUgZXZlbnQgbGlzdGVuZXJzLmApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUub24oXCJ2YWx1ZUNoYW5nZVwiLCBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJvblZhbHVlQ2hhbmdlXCIpKTtcbn1cbmNvbnN0IHN3aXRjaEltcGwgPSA8VCBleHRlbmRzIFN3aXRjaD4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+KSA9PiB7XG4gICAgY29uc3Qgbm9kZTogVCB8IG51bGwgPSBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJnZXRDdXJyZW50UmVmXCIpKCk7XG4gICAgICAgIGlmICghbm9kZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBSZWFjdCByZWYgdG8gTmF0aXZlU2NyaXB0IFZpZXcgbG9zdCwgc28gdW5hYmxlIHRvIHVwZGF0ZSBldmVudCBsaXN0ZW5lcnMuYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5vbihcImNoZWNrZWRDaGFuZ2VcIiwgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwib25Ub2dnbGVcIikpO1xufVxuXG4iLCJpbXBvcnQgeyBPYnNlcnZhYmxlLCBEYXRlUGlja2VyLCBMaXN0UGlja2VyLCBTZWFyY2hCYXIsIFNsaWRlciwgU3dpdGNoIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L2NsaWVudC9FbGVtZW50UmVnaXN0cnlcIjtcbmltcG9ydCB7IGV4ZWN1dGVJbk9yZGVyIH0gZnJvbSBcIi4uL0hlbHBlcnNcIjtcbmltcG9ydCB7IFJlYWN0aWZ5IH0gZnJvbSBcIi4uL1R5cGVzXCI7XG5cblxuXG5leHBvcnQgY29uc3QgY29tcG9uZW50V2lsbFVubW91bnRJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3RpZnk8VD4pID0+IHtcbiAgICBleGVjdXRlSW5PcmRlcihcbiAgICAgICAgW29ic2VydmFibGVJbXBsLFxuICAgICAgICBkYXRlUGlja2VySW1wbCxcbiAgICAgICAgbGlzdFBpY2tlckltcGwsXG4gICAgICAgIHNlYXJjaEJhckltcGwsXG4gICAgICAgIHNsaWRlckltcGwsXG4gICAgICAgIHN3aXRjaEltcGxdLCBcbiAgICAgICAgaW5zdGFuY2UpO1xufVxuXG5jb25zdCBvYnNlcnZhYmxlSW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+KSA9PiB7XG4gICAgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwidXBkYXRlTGlzdGVuZXJzSGVscGVyXCIpKGZhbHNlKTtcbn1cbmNvbnN0IGRhdGVQaWNrZXJJbXBsID0gPFQgZXh0ZW5kcyBEYXRlUGlja2VyPihpbnN0YW5jZTogUmVhY3RpZnk8VD4pID0+IHtcbiAgICBjb25zdCBub2RlOiBUIHwgbnVsbCA9IFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKTtcbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBSZWFjdCByZWYgdG8gTmF0aXZlU2NyaXB0IFZpZXcgbG9zdCwgc28gdW5hYmxlIHRvIHVwZGF0ZSBldmVudCBsaXN0ZW5lcnMuYCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbm9kZS5vZmYoXCJkYXRlQ2hhbmdlXCIsIFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcIm9uRGF0ZUNoYW5nZVwiKSk7XG59XG5jb25zdCBsaXN0UGlja2VySW1wbCA9IDxUIGV4dGVuZHMgTGlzdFBpY2tlcj4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+KSA9PiB7XG4gICAgY29uc3Qgbm9kZTogVCB8IG51bGwgPSB0aGlzLmdldEN1cnJlbnRSZWYoKTtcbiAgICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFJlYWN0IHJlZiB0byBOYXRpdmVTY3JpcHQgVmlldyBsb3N0LCBzbyB1bmFibGUgdG8gdXBkYXRlIGV2ZW50IGxpc3RlbmVycy5gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBub2RlLm9mZihcInNlbGVjdGVkSW5kZXhDaGFuZ2VcIiwgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwib25TZWxlY3RlZEluZGV4Q2hhbmdlXCIpKTtcbn1cbmNvbnN0IHNlYXJjaEJhckltcGwgPSA8VCBleHRlbmRzIFNlYXJjaEJhcj4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+KSA9PiB7XG4gICAgY29uc3Qgbm9kZTogVCB8IG51bGwgPSBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJnZXRDdXJyZW50UmVmXCIpKCk7XG4gICAgICAgIGlmICghbm9kZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBSZWFjdCByZWYgdG8gTmF0aXZlU2NyaXB0IFZpZXcgbG9zdCwgc28gdW5hYmxlIHRvIHVwZGF0ZSBldmVudCBsaXN0ZW5lcnMuYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5vZmYoXCJ0ZXh0Q2hhbmdlXCIsIFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcIm9uVGV4dENoYW5nZVwiKSk7XG59XG5cbi8qICh0aGlzIHNsaWRlciBpbXBsIG5vdCB0aGUgc2FtZSBhcyB0aGUgb3RoZXJzLiBJcyBwcm9iYWJseSBhbiBlcnJvcikgKi9cbmNvbnN0IHNsaWRlckltcGwgPSA8VCBleHRlbmRzIFNsaWRlcj4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+KSA9PiB7XG4gICAgY29uc3Qgbm9kZTogVCB8IG51bGwgPSBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJnZXRDdXJyZW50UmVmXCIpKCk7XG4gICAgICAgIGlmICghbm9kZSkge1xuICAgICAgICAgICAgbm9kZS5vZmYoXCJ2YWx1ZUNoYW5nZVwiLCBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJvblZhbHVlQ2hhbmdlXCIpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLndhcm4oYFJlYWN0IHJlZiB0byBOYXRpdmVTY3JpcHQgVmlldyBsb3N0LCBzbyB1bmFibGUgdG8gdXBkYXRlIGV2ZW50IGxpc3RlbmVycy5gKVxufVxuY29uc3Qgc3dpdGNoSW1wbCA9IDxUIGV4dGVuZHMgU3dpdGNoPihpbnN0YW5jZTogUmVhY3RpZnk8VD4pID0+IHtcbiAgICBjb25zdCBub2RlOiBUIHwgbnVsbCA9IFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKTtcbiAgICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFJlYWN0IHJlZiB0byBOYXRpdmVTY3JpcHQgVmlldyBsb3N0LCBzbyB1bmFibGUgdG8gdXBkYXRlIGV2ZW50IGxpc3RlbmVycy5gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBub2RlLm9mZihcImNoZWNrZWRDaGFuZ2VcIiwgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwib25Ub2dnbGVcIikpO1xufSIsIlxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCdXR0b24sIFRleHRGaWVsZCwgSHRtbFZpZXcsIExhYmVsIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L2NsaWVudC9FbGVtZW50UmVnaXN0cnlcIjtcbmltcG9ydCB7IGV4ZWN1dGVJbk9yZGVyIH0gZnJvbSBcIi4uL0hlbHBlcnNcIjtcbmltcG9ydCB7IFJlYWN0aWZ5IH0gZnJvbSBcIi4uL1R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCByZW5kZXJJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihuYW1lOnN0cmluZywgaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBvYnNlcnZhYmxlOiBUKTogUmVhY3QuUmVhY3ROb2RlID0+IHtcbiAgICByZXR1cm4gZXhlY3V0ZUluT3JkZXIoW2dlbmVyaWNJbXBsLCBidXR0b25JbXBsLCB0ZXh0RmllbGRJbXBsLCBodG1sVmlld0ltcGwsIGxhYmVsSW1wbF0sIG5hbWUsIGluc3RhbmNlLCBvYnNlcnZhYmxlKTtcbn1cbmNvbnN0IGdlbmVyaWNJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihuYW1lOiBzdHJpbmcsIGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgb2JzZXJ2YWJsZTogVCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiZ2VuZXJpYyByZW5kZXJcIik7XG4gICAgY29uc3QgeyBmb3J3YXJkZWRSZWYsIGNoaWxkcmVuLCAuLi5yZXN0IH0gPSBpbnN0YW5jZS5wcm9wc1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBuYW1lLFxuICAgICAgICB7XG4gICAgICAgIC4uLnJlc3QsXG4gICAgICAgIHJlZjogZm9yd2FyZGVkUmVmIHx8IFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcIm15UmVmXCIpLFxuICAgICAgICB9LFxuICAgICAgICBjaGlsZHJlblxuICAgICk7XG59XG5cbmNvbnN0IGJ1dHRvbkltcGwgPSAobmFtZTpzdHJpbmcsIGluc3RhbmNlOiBSZWFjdGlmeTxCdXR0b24+LCBvYnNlcnZhYmxlOiBCdXR0b24pID0+IHtcbiAgICBpZihvYnNlcnZhYmxlIGluc3RhbmNlb2YgQnV0dG9uKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYnV0dG9uSW1wbFwiKTtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZm9yd2FyZGVkUmVmLFxuICAgICAgICAgICAgdGV4dCxcbiAgICAgICAgICAgIGZvcm1hdHRlZFRleHQsXG4gICAgICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgICAgIC4uLnJlc3RcbiAgICAgICAgfSA9IGluc3RhbmNlLnByb3BzO1xuICAgIFxuICAgICAgICBpZiAodGV4dCAmJiBmb3JtYXR0ZWRUZXh0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEJvdGggdGV4dCBhbmQgZm9ybWF0dGVkVGV4dCBwcm92aWRlZDsgc2hhbGwgdXNlIGZvcm1hdHRlZFRleHQuYCk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY29uc3QgdGV4dENvbnRlbnQgPSB7XG4gICAgICAgICAgICBbZm9ybWF0dGVkVGV4dCA/IFwiZm9ybWF0dGVkVGV4dFwiIDogXCJ0ZXh0XCJdOiBmb3JtYXR0ZWRUZXh0IHx8IHRleHQsXG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1hY3RpdmVcIiwgLy8gTmF0aXZlU2NyaXB0IGRlZmF1bHRzIGZyb20gZG9jdW1lbnRhdGlvblxuICAgICAgICAgICAgICAgIC4uLnJlc3QsXG4gICAgICAgICAgICAgICAgLi4udGV4dENvbnRlbnQsXG4gICAgICAgICAgICAgICAgcmVmOiBmb3J3YXJkZWRSZWYgfHwgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwibXlSZWZcIiksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hpbGRyZW4gLy8gV2VpcmQgdGhhdCBhIGJ1dHRvbiBtYXkgY29udGFpbiBjaGlsZHJlbiwgYnV0IHdoYXQgZG8gSSBrbm93LlxuICAgICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5jb25zdCB0ZXh0RmllbGRJbXBsID0gKG5hbWU6c3RyaW5nLCBpbnN0YW5jZTogUmVhY3RpZnk8VGV4dEZpZWxkPiwgb2JzZXJ2YWJsZTogVGV4dEZpZWxkKSA9PiB7XG4gICAgaWYob2JzZXJ2YWJsZSBpbnN0YW5jZW9mIFRleHRGaWVsZCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBmb3J3YXJkZWRSZWYsXG4gICAgXG4gICAgXG4gICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgZm9ybWF0dGVkVGV4dCxcbiAgICAgICAgICAgIGNoaWxkcmVuLFxuICAgICAgICAgICAgLi4ucmVzdFxuICAgICAgICB9ID0gaW5zdGFuY2UucHJvcHM7XG4gICAgXG4gICAgICAgIGlmICh0ZXh0ICYmIGZvcm1hdHRlZFRleHQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgQm90aCB0ZXh0IGFuZCBmb3JtYXR0ZWRUZXh0IHByb3ZpZGVkOyBzaGFsbCB1c2UgZm9ybWF0dGVkVGV4dC5gKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCB0ZXh0Q29udGVudCA9IHtcbiAgICAgICAgICAgIFtmb3JtYXR0ZWRUZXh0ID8gXCJmb3JtYXR0ZWRUZXh0XCIgOiBcInRleHRcIl06IGZvcm1hdHRlZFRleHQgfHwgdGV4dCxcbiAgICAgICAgfTtcbiAgICBcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC4uLnJlc3QsXG4gICAgICAgICAgICAgICAgLi4udGV4dENvbnRlbnQsXG4gICAgICAgICAgICAgICAgcmVmOiBmb3J3YXJkZWRSZWYgfHwgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwibXlSZWZcIiksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hpbGRyZW4gLy8gV2VpcmQgdGhhdCBhIFRleHRGaWVsZCBtYXkgY29udGFpbiBjaGlsZHJlbiwgYnV0IHdoYXQgZG8gSSBrbm93LlxuICAgICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5jb25zdCBodG1sVmlld0ltcGwgPSAobmFtZTpzdHJpbmcsIGluc3RhbmNlOiBSZWFjdGlmeTxIdG1sVmlldz4sIG9ic2VydmFibGU6IEh0bWxWaWV3KSA9PiB7XG4gICAgaWYob2JzZXJ2YWJsZSBpbnN0YW5jZW9mIEh0bWxWaWV3KSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGZvcndhcmRlZFJlZixcbiAgICAgICAgICAgIGNoaWxkcmVuLFxuICAgIFxuICAgICAgICAgICAgLi4ucmVzdFxuICAgICAgICB9ID0gaW5zdGFuY2UucHJvcHM7XG4gICAgXG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiSWdub3JpbmcgJ2NoaWxkcmVuJyBwcm9wIG9uIEh0bWxWaWV3OyBub3QgcGVybWl0dGVkXCIpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAuLi5yZXN0LFxuICAgICAgICAgICAgICAgIHJlZjogZm9yd2FyZGVkUmVmIHx8IFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcIm15UmVmXCIpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG51bGxcbiAgICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuY29uc3QgbGFiZWxJbXBsID0gKG5hbWU6c3RyaW5nLCBpbnN0YW5jZTogUmVhY3RpZnk8TGFiZWw+LCBvYnNlcnZhYmxlOiBMYWJlbCkgPT4ge1xuICAgIGlmKG9ic2VydmFibGUgaW5zdGFuY2VvZiBMYWJlbCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImxhYmVsIGltcGxcIik7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGZvcndhcmRlZFJlZixcbiAgICBcbiAgICAgICAgICAgIG9uTG9hZGVkLFxuICAgICAgICAgICAgb25VbmxvYWRlZCxcbiAgICAgICAgICAgIG9uQW5kcm9pZEJhY2tQcmVzc2VkLFxuICAgICAgICAgICAgb25TaG93aW5nTW9kYWxseSxcbiAgICAgICAgICAgIG9uU2hvd25Nb2RhbGx5LFxuICAgIFxuICAgICAgICAgICAgb25UYXAsXG4gICAgICAgICAgICBvbkRvdWJsZVRhcCxcbiAgICAgICAgICAgIG9uUGluY2gsXG4gICAgICAgICAgICBvblBhbixcbiAgICAgICAgICAgIG9uU3dpcGUsXG4gICAgICAgICAgICBvblJvdGF0aW9uLFxuICAgICAgICAgICAgb25Mb25nUHJlc3MsXG4gICAgICAgICAgICBvblRvdWNoLFxuICAgIFxuICAgICAgICAgICAgb25Qcm9wZXJ0eUNoYW5nZSxcbiAgICBcbiAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICBmb3JtYXR0ZWRUZXh0LFxuICAgICAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgICAgICAuLi5yZXN0XG4gICAgICAgIH0gPSBpbnN0YW5jZS5wcm9wcztcbiAgICBcbiAgICAgICAgaWYgKHRleHQgJiYgZm9ybWF0dGVkVGV4dCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBCb3RoIHRleHQgYW5kIGZvcm1hdHRlZFRleHQgcHJvdmlkZWQ7IHNoYWxsIHVzZSBmb3JtYXR0ZWRUZXh0LmApO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGNvbnN0IHRleHRDb250ZW50ID0ge1xuICAgICAgICAgICAgW2Zvcm1hdHRlZFRleHQgPyBcImZvcm1hdHRlZFRleHRcIiA6IFwidGV4dFwiXTogZm9ybWF0dGVkVGV4dCB8fCB0ZXh0LFxuICAgICAgICB9O1xuICAgIFxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLi4ucmVzdCxcbiAgICAgICAgICAgICAgICAuLi50ZXh0Q29udGVudCxcbiAgICAgICAgICAgICAgICByZWY6IGZvcndhcmRlZFJlZiB8fCBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJteVJlZlwiKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGlsZHJlbiAvLyBXZWlyZCB0aGF0IGEgTGFiZWwgbWF5IGNvbnRhaW4gY2hpbGRyZW4sIGJ1dCB3aGF0IGRvIEkga25vdy5cbiAgICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlL29ic2VydmFibGVcIjtcblxuaW1wb3J0IHsgRXh0cmFQcm9wcyB9IGZyb20gXCJ+L1JlYWN0aWZpZWQvRXh0cmFQcm9wc1wiO1xuaW1wb3J0IHsgc2hhbGxvd0VxdWFsIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L2NsaWVudC9zaGFsbG93RXF1YWxcIjtcbmltcG9ydCB7IFJlYWN0aWZ5IH0gZnJvbSBcIi4uL1R5cGVzXCI7XG5cblxuZXhwb3J0IGNvbnN0IHNob3VsZENvbXBvbmVudFVwZGF0ZUltcGwgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgbmV4dFByb3BzOiBUICYgRXh0cmFQcm9wczxUPiwgbmV4dFN0YXRlOiBhbnkpOiBib29sZWFuID0+IHtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZUltcGwoaW5zdGFuY2UsIG5leHRQcm9wcywgbmV4dFN0YXRlKTtcbn1cbmNvbnN0IG9ic2VydmFibGVJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3RpZnk8VD4sIG5leHRQcm9wczogVCAmIEV4dHJhUHJvcHM8VD4sIG5leHRTdGF0ZTogYW55KSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coYE9ic2VydmFibGUncyBzaG91bGRDb21wb25lbnRVcGRhdGVgKTtcbiAgICBjb25zdCBzaG91bGRVcGRhdGU6IGJvb2xlYW4gPSAhc2hhbGxvd0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcykgfHwgIXNoYWxsb3dFcXVhbCh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpO1xuICAgIC8vIGNvbnNvbGUubG9nKGBbc2hvdWxkQ29tcG9uZW50VXBkYXRlXSBzaG91bGRVcGRhdGU6ICR7c2hvdWxkVXBkYXRlfS5gKTtcbiAgICBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJ1cGRhdGVMaXN0ZW5lcnNIZWxwZXJcIikobnVsbCwgbmV4dFByb3BzKTtcbiAgICAvLyBodHRwczovL2x1Y3liYWluLmNvbS9ibG9nLzIwMTgvcmVhY3QtanMtcHVyZS1jb21wb25lbnQvXG4gICAgcmV0dXJuIHNob3VsZFVwZGF0ZTtcbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlLCBWaWV3QmFzZSwgVmlldywgUGFnZSB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBFeHRyYVByb3BzIH0gZnJvbSBcIi4uL0V4dHJhUHJvcHNcIjtcblxuZXhwb3J0IHR5cGUgUmVhY3RpZnk8VCBleHRlbmRzIE9ic2VydmFibGU+ID0gUmVhY3QuQ29tcG9uZW50PFQgJiBFeHRyYVByb3BzPFQ+LCBhbnk+O1xuXG5leHBvcnQgdHlwZSBQcm9wczxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4gPSBUICYgRXh0cmFQcm9wczxUPjtcblxuXG4vKlxuZXhwb3J0IHR5cGUgT2JzZXJ2YWJsZTxUPiA9IFQgZXh0ZW5kcyBPYnNlcnZhYmxlID8gUmVhY3RpZnk8T2JzZXJ2YWJsZT4gOiBFbXB0eVxuXG5leHBvcnQgdHlwZSBWaWV3QmFzZTxUPiA9IFQgZXh0ZW5kcyBWaWV3QmFzZSA/IFJlYWN0aWZ5PFZpZXdCYXNlPiA6IEVtcHR5O1xuXG5leHBvcnQgdHlwZSBWaWV3PFQ+ID0gVCBleHRlbmRzIFZpZXcgPyBSZWFjdGlmeTxWaWV3PiA6IEVtcHR5O1xuXG5pbnRlcmZhY2UgRW1wdHkge1xuXG59XG4qL1xuLypcbmV4cG9ydCBjb25zdCB0cnlDYXN0ID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3RpZnk8VD4pID0+IHtcbiAgICBpZigoaW5zdGFuY2UucHJvcHMpIGFzIFByb3BzPFQ+KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiV2FzIGluc3RhbmNlXCIpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiV2FzIG5vdCBpbnN0YW5jZVwiKTtcbiAgICByZXR1cm4gbnVsbDtcbn1cbiovXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNzM5MjM0OS9ob3ctY2FuLWktY2hlY2staWYtZWxlbWVudC1pcy1hbi1pbnN0YW5jZW9mLXVcbi8qXG5leHBvcnQgZnVuY3Rpb24gdHJ5Q2FzdDxUPihpbnN0YW5jZTogYW55KSB7XG4gICAgaWYoaW5zdGFuY2UgaW5zdGFuY2VvZiBUKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwid2FzXCIpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwid2FzIG5vdFwiKTtcbiAgICByZXR1cm4gbnVsbDtcbn1cbiovXG5cbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIzNTMzMzc0L2NvbXBhcmUtdHlwZXMtaW4tZ2VuZXJpYy1mdW5jdGlvbi11c2luZy10eXBlc2NyaXB0XG4vLyBoZWxwZXIgbWV0aG9kIHRvIGJlIGFibGUgdG8gY2FzdCBSZWFjdGlmeTxPYnNlcnZhYmxlPiB0byBSZWFjdGlmeTxWaWV3PiAgZXRjXG5cblxuLy8gaGVscGVyIG1ldGhvZCB0byBiZSBhYmxlIHRvIGNhc3QgUmVhY3RpZnk8T2JzZXJ2YWJsZT4gdG8gUmVhY3RpZnk8Vmlldz4gIGV0YyBcbmV4cG9ydCBjb25zdCB0cnlDYXN0ID0gPFQ+KHBhcmFtZXRlcjogYW55KSA9PiB7XG4gICAgcmV0dXJuIHBhcmFtZXRlciBhcyBUO1xufVxuIiwiXG5pbXBvcnQgeyBFdmVudERhdGEsIE9ic2VydmFibGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBleGVjdXRlSW5PcmRlciB9IGZyb20gXCIuLi9IZWxwZXJzXCI7XG5pbXBvcnQgeyBSZWFjdGlmeSB9IGZyb20gXCIuLi9UeXBlc1wiO1xuXG5leHBvcnQgY29uc3Qgb25EYXRhQ2hhbmdlSW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBhcmdzOiBFdmVudERhdGEgKSA9PiB7XG4gICAgZXhlY3V0ZUluT3JkZXIoW2RhdGVQaWNrZXJJbXBsXSwgaW5zdGFuY2UsIGFyZ3MpO1xufVxuXG5jb25zdCBkYXRlUGlja2VySW1wbCA9IDxUIGV4dGVuZHMgRGF0ZVBpY2tlcj4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBhcmdzOiBFdmVudERhdGEpID0+IHtcbiAgICBjb25zdCBkYXRlOiBEYXRlID0gKDxEYXRlUGlja2VyPmFyZ3Mub2JqZWN0KS5kYXRlO1xuICAgIGluc3RhbmNlLnByb3BzLm9uRGF0ZUNoYW5nZSAmJiBpbnN0YW5jZS5wcm9wcy5vbkRhdGVDaGFuZ2UoZGF0ZSk7XG59XG4iLCJpbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgTGlzdFBpY2tlciB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBSZWFjdGlmeSB9IGZyb20gXCIuLi9UeXBlc1wiO1xuaW1wb3J0IHsgZXhlY3V0ZUluT3JkZXIgfSBmcm9tIFwiLi4vSGVscGVyc1wiO1xuXG5leHBvcnQgY29uc3Qgb25TZWxlY3RJbmRleENoYW5nZUltcGwgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgYXJnczogRXZlbnREYXRhKSA9PiB7XG4gICAgZXhlY3V0ZUluT3JkZXIoW2xpc3RQaWNrZXJJbXBsXSwgaW5zdGFuY2UsIGFyZ3MpO1xufVxuY29uc3QgbGlzdFBpY2tlckltcGwgPSA8VCBleHRlbmRzIExpc3RQaWNrZXI+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgYXJnczogRXZlbnREYXRhKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRJbmRleDogbnVtYmVyID0gKDxMaXN0UGlja2VyPmFyZ3Mub2JqZWN0KS5zZWxlY3RlZEluZGV4O1xuICAgIGluc3RhbmNlLnByb3BzLm9uU2VsZWN0ZWRJbmRleENoYW5nZSAmJiBpbnN0YW5jZS5wcm9wcy5vblNlbGVjdGVkSW5kZXhDaGFuZ2Uoc2VsZWN0ZWRJbmRleCk7XG59IiwiaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlL29ic2VydmFibGVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIFNlYXJjaEJhciB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBSZWFjdGlmeSB9IGZyb20gXCIuLi9UeXBlc1wiO1xuaW1wb3J0IHsgZXhlY3V0ZUluT3JkZXIgfSBmcm9tIFwiLi4vSGVscGVyc1wiO1xuXG5leHBvcnQgY29uc3Qgb25UZXh0Q2hhbmdlSW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBhcmdzOiBFdmVudERhdGEpID0+IHtcbiAgICBleGVjdXRlSW5PcmRlcihbc2VhcmNoQmFySW1wbF0sIGluc3RhbmNlLCBhcmdzKTtcbn1cbmNvbnN0IHNlYXJjaEJhckltcGwgPSA8VCBleHRlbmRzIFNlYXJjaEJhcj4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBhcmdzOiBFdmVudERhdGEpID0+IHtcbiAgICBjb25zdCB0ZXh0OiBzdHJpbmcgPSAoPFNlYXJjaEJhcj5hcmdzLm9iamVjdCkudGV4dDtcbiAgICBpbnN0YW5jZS5wcm9wcy5vblRleHRDaGFuZ2UgJiYgaW5zdGFuY2UucHJvcHMub25UZXh0Q2hhbmdlKHRleHQpO1xufSIsImltcG9ydCB7IEV2ZW50RGF0YSwgT2JzZXJ2YWJsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBTd2l0Y2ggfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3QvY2xpZW50L0VsZW1lbnRSZWdpc3RyeVwiO1xuaW1wb3J0IHsgZXhlY3V0ZUluT3JkZXIgfSBmcm9tIFwiLi4vSGVscGVyc1wiO1xuaW1wb3J0IHsgUmVhY3RpZnkgfSBmcm9tIFwiLi4vVHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IG9uVG9nZ2xlSW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBhcmdzOiBFdmVudERhdGEgKSA9PiB7XG4gICAgZXhlY3V0ZUluT3JkZXIoW3N3aXRjaEltcGxdLCBpbnN0YW5jZSwgYXJncyk7XG59XG5cbmNvbnN0IHN3aXRjaEltcGwgPSA8VCBleHRlbmRzIFN3aXRjaD4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBhcmdzOiBFdmVudERhdGEpID0+IHtcbiAgICBjb25zdCBjaGVja2VkOiBib29sZWFuID0gKDxTd2l0Y2g+YXJncy5vYmplY3QpLmNoZWNrZWQ7XG5cbiAgICAgICAgaW5zdGFuY2UucHJvcHMub25Ub2dnbGUgJiYgaW5zdGFuY2UucHJvcHMub25Ub2dnbGUoY2hlY2tlZCk7XG59IiwiaW1wb3J0IHsgRXZlbnREYXRhLCBPYnNlcnZhYmxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlL29ic2VydmFibGVcIjtcbmltcG9ydCB7IFNsaWRlciB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBleGVjdXRlSW5PcmRlciB9IGZyb20gXCIuLi9IZWxwZXJzXCI7XG5pbXBvcnQgeyBSZWFjdGlmeSB9IGZyb20gXCIuLi9UeXBlc1wiO1xuXG5leHBvcnQgY29uc3Qgb25WYWx1ZUNoYW5nZUltcGwgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgYXJnczogRXZlbnREYXRhICkgPT4ge1xuICAgIGV4ZWN1dGVJbk9yZGVyKFtzbGlkZXJJbXBsXSwgaW5zdGFuY2UsIGFyZ3MpO1xufVxuLyogdHlwbyBmb3VuZCBpbiBodHRwczovL2dpdGh1Yi5jb20vc2hpcmFrYWJhL3JlYWN0LW5hdGl2ZXNjcmlwdC9ibG9iL21hc3Rlci9yZWFjdC1uYXRpdmVzY3JpcHQvc3JjL2NvbXBvbmVudHMvU2xpZGVyLnRzICovXG5jb25zdCBzbGlkZXJJbXBsID0gPFQgZXh0ZW5kcyBTbGlkZXI+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgYXJnczogRXZlbnREYXRhKSA9PiB7XG4gICAgY29uc3Qgc2xpZGVyVmFsdWU6IG51bWJlciA9ICg8U2xpZGVyPmFyZ3Mub2JqZWN0KS52YWx1ZTtcblxuICAgICAgICBpbnN0YW5jZS5wcm9wcy5vblZhbHVlQ2hhbmdlICYmIGluc3RhbmNlLnByb3BzLm9uVmFsdWVDaGFuZ2Uoc2xpZGVyVmFsdWUpO1xufSIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlL29ic2VydmFibGVcIjtcbi8vIGltcG9ydCB7IFJlYWN0aWZ5IH0gZnJvbSBcIi4vVHlwZXNcIjtcbmltcG9ydCB7IEV4dHJhUHJvcHMgfSBmcm9tIFwiLi4vRXh0cmFQcm9wc1wiO1xuaW1wb3J0IHsgUmVhY3RpZnkgfSBmcm9tIFwiLi9UeXBlc1wiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50UmVmSW1wbCA8VCBleHRlbmRzIE9ic2VydmFibGU+KGluc3RhbmNlOiBSZWFjdGlmeTxUPik6IFQgfCBudWxsIHtcbiAgICBjb25zdCByZWYgPSAoaW5zdGFuY2UucHJvcHMuZm9yd2FyZGVkUmVmIHx8IFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcIm15UmVmXCIpKS5jdXJyZW50O1xuICAgIGNvbnNvbGUubG9nKFwiZ2V0Q3VycmVudFJlZkltcGw6IFwiICsgcmVmKTtcbiAgICByZXR1cm4gcmVmO1xufVxuXG5cblxuIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBFeHRyYVByb3BzIH0gZnJvbSBcIi4uL0V4dHJhUHJvcHNcIjtcbmltcG9ydCB7IFJlYWN0aWZ5IH0gZnJvbSBcIi4vVHlwZXNcIjtcbi8vIGltcG9ydCB7IFJlYWN0aWZ5IH0gZnJvbSBcIi4vVHlwZXNcIjtcblxuLypcbmV4cG9ydCBjb25zdCBvYnNlcnZhYmxlSW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0LkNvbXBvbmVudDxUICYgRXh0cmFQcm9wczxUPj4sIGF0dGFjaDogYm9vbGVhbiB8IG51bGwsIG5leHRQcm9wcz86IFApID0+IHtcbiAgICBcbn1cbiovXG5leHBvcnQgY29uc3QgdXBkYXRlTGlzdGVuZXJzSGVscGVySW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBhdHRhY2g6IGJvb2xlYW4gfCBudWxsLCBuZXh0UHJvcHM/OiBUICYgRXh0cmFQcm9wczxUPikgPT4ge1xuICAgIG9ic2VydmFibGVJbXBsKGluc3RhbmNlLCBhdHRhY2gsIG5leHRQcm9wcyk7XG59XG5cbmNvbnN0IG9ic2VydmFibGVJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3RpZnk8VD4sIGF0dGFjaDogYm9vbGVhbiB8IG51bGwsIG5leHRQcm9wcz86IFQgJiBFeHRyYVByb3BzPFQ+KSA9PiB7XG4gICAgY29uc3Qgbm9kZTogVCB8IG51bGwgPSBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJnZXRDdXJyZW50UmVmXCIpKCk7XG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgIC8vIGNvbnNvbGUud2FybihgUmVhY3QgcmVmIHRvIE5hdGl2ZVNjcmlwdCBWaWV3IGxvc3QsIHNvIHVuYWJsZSB0byB1cGRhdGUgZXZlbnQgbGlzdGVuZXJzLmApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcInVwZGF0ZUxpc3RlbmVyc1wiKShub2RlLCBhdHRhY2gsIG5leHRQcm9wcyk7XG59IiwiXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHtcbiAgICBPYnNlcnZhYmxlLFxuICAgIFZpZXcsXG4gICAgUGFnZSxcbiAgICBBY3Rpb25JdGVtLFxuICAgIEVkaXRhYmxlVGV4dEJhc2UsXG4gICAgRnJhbWUsXG4gICAgUGxhY2Vob2xkZXIsXG4gICAgU2Nyb2xsVmlldyxcbiAgICBTZWFyY2hCYXIsXG4gICAgU2VnbWVudGVkQmFyXG59IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5XCI7XG5cbmltcG9ydCB7IEV4dHJhUHJvcHMgfSBmcm9tIFwiLi4vRXh0cmFQcm9wc1wiO1xuaW1wb3J0IHsgdXBkYXRlTGlzdGVuZXIgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3QvY2xpZW50L0V2ZW50SGFuZGxpbmdcIjtcbmltcG9ydCB7IEdlc3R1cmVUeXBlcyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzL2dlc3R1cmVzXCI7XG5pbXBvcnQgeyB0cnlDYXN0LCBQcm9wcywgUmVhY3RpZnkgfSBmcm9tIFwiLi9UeXBlc1wiO1xuaW1wb3J0IHsgZXhlY3V0ZUluT3JkZXIgfSBmcm9tIFwiLi9IZWxwZXJzXCI7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVMaXN0ZW5lcnNJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3RpZnk8VD4gLG5vZGU6IFQsIGF0dGFjaDogYm9vbGVhbiB8IG51bGwsIG5leHRQcm9wcz86IFByb3BzPFQ+KSA9PiB7XG4gICAgXG4gICAgLyogaW1wbGVtZW50YXRpb24gZm9yIGFueSBybnMgY29tcG9uZW50IGhlcmUgLSBvciBvbiByZWFjdGlmeSBjbGFzcyBib2R5Ki9cbiAgICBleGVjdXRlSW5PcmRlcihcbiAgICAgICAgW3BhZ2VJbXBsLFxuICAgICAgICB2aWV3SW1wbCxcbiAgICAgICAgb2JzZXJ2YWJsZUltcGwsXG4gICAgICAgIGFjdGlvbkl0ZW1JbXBsLFxuICAgICAgICBlZGl0YWJsZVRleHRCYXNlSW1wbCxcbiAgICAgICAgZnJhbWVJbXBsLFxuICAgICAgICBwbGFjZWhvbGRlckltcGwsXG4gICAgICAgIHNjcm9sbFZpZXdJbXBsLFxuICAgICAgICBzZWFyY2hCYXJJbXBsLFxuICAgICAgICBzZWdtZW50ZWRCYXJJbXBsXG4gICAgXSxcbiAgICBpbnN0YW5jZSwgbm9kZSwgYXR0YWNoKTtcbn1cblxuY29uc3Qgb2JzZXJ2YWJsZUltcGwgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KGluc3RhbmNlOiBSZWFjdGlmeTxPYnNlcnZhYmxlPiwgbm9kZTogVCwgYXR0YWNoOiBib29sZWFuIHwgbnVsbCwgbmV4dFByb3BzPzogVCAmIEV4dHJhUHJvcHM8VD4pID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIm9ic2VydmFibGVJbXBsXCIpO1xuICAgIGlmIChhdHRhY2ggPT09IG51bGwpIHtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgXCJwcm9wZXJ0eUNoYW5nZVwiLCBpbnN0YW5jZS5wcm9wcy5vblByb3BlcnR5Q2hhbmdlLCBuZXh0UHJvcHMub25Qcm9wZXJ0eUNoYW5nZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWV0aG9kID0gKGF0dGFjaCA/IG5vZGUub24gOiBub2RlLm9mZikuYmluZChub2RlKTtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uUHJvcGVydHlDaGFuZ2UpIG1ldGhvZChcInByb3BlcnR5Q2hhbmdlXCIsIGluc3RhbmNlLnByb3BzLm9uUHJvcGVydHlDaGFuZ2UpO1xuICAgIH1cbiAgICBcbn1cblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3NoaXJha2FiYS9yZWFjdC1uYXRpdmVzY3JpcHQvYmxvYi9tYXN0ZXIvcmVhY3QtbmF0aXZlc2NyaXB0L3NyYy9jb21wb25lbnRzL1ZpZXcudHNcbmNvbnN0IHZpZXdJbXBsID0gPFQgZXh0ZW5kcyBWaWV3PihpbnN0YW5jZTogUmVhY3RpZnk8VD4sIG5vZGU6IFQsIGF0dGFjaDogYm9vbGVhbiB8IG51bGwsIG5leHRQcm9wcz86IFQgJiBFeHRyYVByb3BzPFQ+KSA9PiB7XG4gICAgaWYobm9kZSBpbnN0YW5jZW9mIFZpZXcgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidmlldyBpbXBsXCIpO1xuICAgICAgICBpZiAoYXR0YWNoID09PSBudWxsKSB7XG4gICAgICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBcImxvYWRlZFwiLCBpbnN0YW5jZS5wcm9wcy5vbkxvYWRlZCwgbmV4dFByb3BzLm9uTG9hZGVkKTtcbiAgICAgICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIFwidW5sb2FkZWRcIiwgaW5zdGFuY2UucHJvcHMub25VbmxvYWRlZCwgbmV4dFByb3BzLm9uVW5sb2FkZWQpO1xuICAgICAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgXCJhbmRyb2lkQmFja1ByZXNzZWRcIiwgaW5zdGFuY2UucHJvcHMub25BbmRyb2lkQmFja1ByZXNzZWQsIG5leHRQcm9wcy5vbkFuZHJvaWRCYWNrUHJlc3NlZCk7XG4gICAgICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBcInNob3dpbmdNb2RhbGx5XCIsIGluc3RhbmNlLnByb3BzLm9uU2hvd2luZ01vZGFsbHksIG5leHRQcm9wcy5vblNob3dpbmdNb2RhbGx5KTtcbiAgICAgICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIFwic2hvd25Nb2RhbGx5XCIsIGluc3RhbmNlLnByb3BzLm9uU2hvd25Nb2RhbGx5LCBuZXh0UHJvcHMub25TaG93bk1vZGFsbHkpO1xuICAgICAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgR2VzdHVyZVR5cGVzLnRhcCwgaW5zdGFuY2UucHJvcHMub25UYXAsIG5leHRQcm9wcy5vblRhcCwgXCJ0YXBcIik7XG4gICAgICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBHZXN0dXJlVHlwZXMuZG91YmxlVGFwLCBpbnN0YW5jZS5wcm9wcy5vbkRvdWJsZVRhcCwgbmV4dFByb3BzLm9uRG91YmxlVGFwLCBcImRvdWJsZVRhcFwiKTtcbiAgICAgICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIEdlc3R1cmVUeXBlcy5waW5jaCwgaW5zdGFuY2UucHJvcHMub25QaW5jaCwgbmV4dFByb3BzLm9uUGluY2gsIFwicGluY2hcIik7XG4gICAgICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBHZXN0dXJlVHlwZXMucGFuLCBpbnN0YW5jZS5wcm9wcy5vblBhbiwgbmV4dFByb3BzLm9uUGFuLCBcInBhblwiKTtcbiAgICAgICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIEdlc3R1cmVUeXBlcy5zd2lwZSwgaW5zdGFuY2UucHJvcHMub25Td2lwZSwgbmV4dFByb3BzLm9uU3dpcGUsIFwic3dpcGVcIik7XG4gICAgICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBHZXN0dXJlVHlwZXMucm90YXRpb24sIGluc3RhbmNlLnByb3BzLm9uUm90YXRpb24sIG5leHRQcm9wcy5vblJvdGF0aW9uLCBcInJvdGF0aW9uXCIpO1xuICAgICAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgR2VzdHVyZVR5cGVzLmxvbmdQcmVzcywgaW5zdGFuY2UucHJvcHMub25Mb25nUHJlc3MsIG5leHRQcm9wcy5vbkxvbmdQcmVzcywgXCJsb25nUHJlc3NcIik7XG4gICAgICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBHZXN0dXJlVHlwZXMudG91Y2gsIGluc3RhbmNlLnByb3BzLm9uVG91Y2gsIG5leHRQcm9wcy5vblRvdWNoLCBcInRvdWNoXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbWV0aG9kID0gKGF0dGFjaCA/IG5vZGUub24gOiBub2RlLm9mZikuYmluZChub2RlKTtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vbkxvYWRlZCkgbWV0aG9kKFwibG9hZGVkXCIsIGluc3RhbmNlLnByb3BzLm9uTG9hZGVkKTtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblVubG9hZGVkKSBtZXRob2QoXCJ1bmxvYWRlZFwiLCBpbnN0YW5jZS5wcm9wcy5vblVubG9hZGVkKTtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vbkFuZHJvaWRCYWNrUHJlc3NlZCkgbWV0aG9kKFwiYW5kcm9pZEJhY2tQcmVzc2VkXCIsIGluc3RhbmNlLnByb3BzLm9uQW5kcm9pZEJhY2tQcmVzc2VkKTtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblNob3dpbmdNb2RhbGx5KSBtZXRob2QoXCJzaG93aW5nTW9kYWxseVwiLCBpbnN0YW5jZS5wcm9wcy5vblNob3dpbmdNb2RhbGx5KTtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblNob3duTW9kYWxseSkgbWV0aG9kKFwic2hvd25Nb2RhbGx5XCIsIGluc3RhbmNlLnByb3BzLm9uU2hvd25Nb2RhbGx5KTtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblRhcCkgbWV0aG9kKEdlc3R1cmVUeXBlcy50YXAsIGluc3RhbmNlLnByb3BzLm9uVGFwKTtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vbkRvdWJsZVRhcCkgbWV0aG9kKEdlc3R1cmVUeXBlcy5kb3VibGVUYXAsIGluc3RhbmNlLnByb3BzLm9uRG91YmxlVGFwKTtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblBpbmNoKSBtZXRob2QoR2VzdHVyZVR5cGVzLnBpbmNoLCBpbnN0YW5jZS5wcm9wcy5vblBpbmNoKTtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblBhbikgbWV0aG9kKEdlc3R1cmVUeXBlcy5wYW4sIGluc3RhbmNlLnByb3BzLm9uUGFuKTtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblN3aXBlKSBtZXRob2QoR2VzdHVyZVR5cGVzLnN3aXBlLCBpbnN0YW5jZS5wcm9wcy5vblN3aXBlKTtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblJvdGF0aW9uKSBtZXRob2QoR2VzdHVyZVR5cGVzLnJvdGF0aW9uLCBpbnN0YW5jZS5wcm9wcy5vblJvdGF0aW9uKTtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vbkxvbmdQcmVzcykgbWV0aG9kKEdlc3R1cmVUeXBlcy5sb25nUHJlc3MsIGluc3RhbmNlLnByb3BzLm9uTG9uZ1ByZXNzKTtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblRvdWNoKSBtZXRob2QoR2VzdHVyZVR5cGVzLnRvdWNoLCBpbnN0YW5jZS5wcm9wcy5vblRvdWNoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgYWN0aW9uSXRlbUltcGwgPSA8VCBleHRlbmRzIEFjdGlvbkl0ZW0+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgbm9kZTogVCwgYXR0YWNoOiBib29sZWFuIHwgbnVsbCwgbmV4dFByb3BzPzogVCAmIEV4dHJhUHJvcHM8VD4pID0+IHtcbiAgICAvKiB0YXAgYXNzaWduaW5nIHRhcCBvbiBhY3Rpb25pdGVtIGNyYXNoZXMgKi9cbiAgICAvKiBzaG91bGQgYmUgY29uZGl0aW9uYWxseSByYW4gc28gdGhhdCB0d28gdGFwIGdlc3R1cmUgcmVjb2duaXplcnMgYXJlbid0IGFkZGVkKi9cbiAgICBpZihub2RlIGluc3RhbmNlb2YgQWN0aW9uSXRlbSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImFjdGlvbkl0ZW1JbXBsXCIpXG4gICAgICAgIGlmIChhdHRhY2ggPT09IG51bGwpIHtcbiAgICAgICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIFwidGFwXCIsIGluc3RhbmNlLnByb3BzLm9uVGFwLCBuZXh0UHJvcHMub25UYXApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbWV0aG9kID0gKGF0dGFjaCA/IG5vZGUub24gOiBub2RlLm9mZikuYmluZChub2RlKTtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblRhcCkgbWV0aG9kKFwidGFwXCIsIGluc3RhbmNlLnByb3BzLm9uVGFwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbn1cbmNvbnN0IHBhZ2VJbXBsID0gPFQgZXh0ZW5kcyBQYWdlPihpbnN0YW5jZTogUmVhY3RpZnk8VD4sIG5vZGU6IFQsIGF0dGFjaDogYm9vbGVhbiB8IG51bGwsIG5leHRQcm9wcz86IFQgJiBFeHRyYVByb3BzPFQ+KSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJwYWdlSW1wbFwiKTtcbiAgICBpZiAoYXR0YWNoID09PSBudWxsKSB7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIFwibmF2aWdhdGVkRnJvbVwiLCBpbnN0YW5jZS5wcm9wcy5vbk5hdmlnYXRlZEZyb20sIG5leHRQcm9wcy5vbk5hdmlnYXRlZEZyb20pO1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBcIm5hdmlnYXRlZFRvXCIsIGluc3RhbmNlLnByb3BzLm9uTmF2aWdhdGVkVG8sIG5leHRQcm9wcy5vbk5hdmlnYXRlZFRvKTtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgXCJuYXZpZ2F0aW5nRnJvbVwiLCBpbnN0YW5jZS5wcm9wcy5vbk5hdmlnYXRpbmdGcm9tLCBuZXh0UHJvcHMub25OYXZpZ2F0aW5nRnJvbSk7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIFwibmF2aWdhdGluZ1RvXCIsIGluc3RhbmNlLnByb3BzLm9uTmF2aWdhdGluZ1RvLCBuZXh0UHJvcHMub25OYXZpZ2F0aW5nVG8pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IChhdHRhY2ggPyBub2RlLm9uIDogbm9kZS5vZmYpLmJpbmQobm9kZSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25OYXZpZ2F0ZWRGcm9tKSBtZXRob2QoXCJuYXZpZ2F0ZWRGcm9tXCIsIGluc3RhbmNlLnByb3BzLm9uTmF2aWdhdGVkRnJvbSk7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vbk5hdmlnYXRlZFRvKSBtZXRob2QoXCJuYXZpZ2F0ZWRUb1wiLCBpbnN0YW5jZS5wcm9wcy5vbk5hdmlnYXRlZFRvKTtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uTmF2aWdhdGluZ0Zyb20pIG1ldGhvZChcIm5hdmlnYXRpbmdGcm9tXCIsIGluc3RhbmNlLnByb3BzLm9uTmF2aWdhdGluZ0Zyb20pO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25OYXZpZ2F0aW5nVG8pIG1ldGhvZChcIm5hdmlnYXRpbmdUb1wiLCBpbnN0YW5jZS5wcm9wcy5vbk5hdmlnYXRpbmdUbyk7XG4gICAgfVxufVxuXG5jb25zdCBlZGl0YWJsZVRleHRCYXNlSW1wbCA9IDxUIGV4dGVuZHMgRWRpdGFibGVUZXh0QmFzZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBub2RlOiBULCBhdHRhY2g6IGJvb2xlYW4gfCBudWxsLCBuZXh0UHJvcHM/OiBUICYgRXh0cmFQcm9wczxUPikgPT4ge1xuICAgIGlmIChhdHRhY2ggPT09IG51bGwpIHtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgXCJibHVyXCIsIGluc3RhbmNlLnByb3BzLm9uQmx1ciwgbmV4dFByb3BzLm9uQmx1cik7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIFwiZm9jdXNcIiwgaW5zdGFuY2UucHJvcHMub25Gb2N1cywgbmV4dFByb3BzLm9uRm9jdXMpO1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBcInRleHRDaGFuZ2VcIiwgaW5zdGFuY2UucHJvcHMub25UZXh0Q2hhbmdlLCBuZXh0UHJvcHMub25UZXh0Q2hhbmdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBtZXRob2QgPSAoYXR0YWNoID8gbm9kZS5vbiA6IG5vZGUub2ZmKS5iaW5kKG5vZGUpO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25CbHVyKSBtZXRob2QoXCJibHVyXCIsIGluc3RhbmNlLnByb3BzLm9uQmx1cik7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vbkZvY3VzKSBtZXRob2QoXCJmb2N1c1wiLCBpbnN0YW5jZS5wcm9wcy5vbkZvY3VzKTtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uVGV4dENoYW5nZSkgbWV0aG9kKFwidGV4dENoYW5nZVwiLCBpbnN0YW5jZS5wcm9wcy5vblRleHRDaGFuZ2UpO1xuICAgIH1cbn1cbmNvbnN0IGZyYW1lSW1wbCA9IDxUIGV4dGVuZHMgRnJhbWU+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgbm9kZTogVCwgYXR0YWNoOiBib29sZWFuIHwgbnVsbCwgbmV4dFByb3BzPzogVCAmIEV4dHJhUHJvcHM8VD4pID0+IHtcbiAgICBpZiAoYXR0YWNoID09PSBudWxsKSB7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIFwib3B0aW9uU2VsZWN0ZWRcIiwgaW5zdGFuY2UucHJvcHMub25PcHRpb25TZWxlY3RlZCwgbmV4dFByb3BzLm9uT3B0aW9uU2VsZWN0ZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IChhdHRhY2ggPyBub2RlLm9uIDogbm9kZS5vZmYpLmJpbmQobm9kZSk7XG5cbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uT3B0aW9uU2VsZWN0ZWQpIG1ldGhvZChcIm9wdGlvblNlbGVjdGVkXCIsIGluc3RhbmNlLnByb3BzLm9uT3B0aW9uU2VsZWN0ZWQpO1xuICAgIH1cbn1cbmNvbnN0IHBsYWNlaG9sZGVySW1wbCA9IDxUIGV4dGVuZHMgUGxhY2Vob2xkZXI+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgbm9kZTogVCwgYXR0YWNoOiBib29sZWFuIHwgbnVsbCwgbmV4dFByb3BzPzogVCAmIEV4dHJhUHJvcHM8VD4pID0+IHsgXG4gICAgaWYgKGF0dGFjaCA9PT0gbnVsbCkge1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBcImNyZWF0aW5nVmlld1wiLCBpbnN0YW5jZS5wcm9wcy5vbkNyZWF0aW5nVmlldywgbmV4dFByb3BzLm9uQ3JlYXRpbmdWaWV3KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBtZXRob2QgPSAoYXR0YWNoID8gbm9kZS5vbiA6IG5vZGUub2ZmKS5iaW5kKG5vZGUpO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25DcmVhdGluZ1ZpZXcpIG1ldGhvZChcImNyZWF0aW5nVmlld1wiLCBpbnN0YW5jZS5wcm9wcy5vbkNyZWF0aW5nVmlldyk7XG4gICAgfVxufVxuY29uc3Qgc2Nyb2xsVmlld0ltcGwgPSA8VCBleHRlbmRzIFNjcm9sbFZpZXc+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgbm9kZTogVCwgYXR0YWNoOiBib29sZWFuIHwgbnVsbCwgbmV4dFByb3BzPzogVCAmIEV4dHJhUHJvcHM8VD4pID0+IHsgXG4gICAgaWYgKGF0dGFjaCA9PT0gbnVsbCkge1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBcInNjcm9sbFwiLCB0aGlzLnByb3BzLm9uU2Nyb2xsLCBuZXh0UHJvcHMub25TY3JvbGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IChhdHRhY2ggPyBub2RlLm9uIDogbm9kZS5vZmYpLmJpbmQobm9kZSk7XG4gICAgXG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblNjcm9sbCkgbWV0aG9kKFwic2Nyb2xsXCIsIGluc3RhbmNlLnByb3BzLm9uU2Nyb2xsKTtcbiAgICB9XG59XG5jb25zdCBzZWFyY2hCYXJJbXBsID0gPFQgZXh0ZW5kcyBTZWFyY2hCYXI+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgbm9kZTogVCwgYXR0YWNoOiBib29sZWFuIHwgbnVsbCwgbmV4dFByb3BzPzogVCAmIEV4dHJhUHJvcHM8VD4pID0+IHsgXG4gICAgaWYgKGF0dGFjaCA9PT0gbnVsbCkge1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBcInN1Ym1pdFwiLCBpbnN0YW5jZS5wcm9wcy5vblN1Ym1pdCwgbmV4dFByb3BzLm9uU3VibWl0KTtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgXCJjbG9zZVwiLCBpbnN0YW5jZS5wcm9wcy5vbkNsb3NlLCBuZXh0UHJvcHMub25DbG9zZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWV0aG9kID0gKGF0dGFjaCA/IG5vZGUub24gOiBub2RlLm9mZikuYmluZChub2RlKTtcblxuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25TdWJtaXQpIG1ldGhvZChcInN1Ym1pdFwiLCBpbnN0YW5jZS5wcm9wcy5vblN1Ym1pdCk7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vbkNsb3NlKSBtZXRob2QoXCJjbG9zZVwiLCBpbnN0YW5jZS5wcm9wcy5vbkNsb3NlKTtcbiAgICB9XG59XG5jb25zdCBzZWdtZW50ZWRCYXJJbXBsID0gPFQgZXh0ZW5kcyBTZWdtZW50ZWRCYXI+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgbm9kZTogVCwgYXR0YWNoOiBib29sZWFuIHwgbnVsbCwgbmV4dFByb3BzPzogVCAmIEV4dHJhUHJvcHM8VD4pID0+IHsgXG4gICAgaWYgKGF0dGFjaCA9PT0gbnVsbCkge1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihcbiAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICBcInNlbGVjdGVkSW5kZXhDaGFuZ2VkXCIsXG4gICAgICAgICAgICBpbnN0YW5jZS5wcm9wcy5vblNlbGVjdGVkSW5kZXhDaGFuZ2VkLFxuICAgICAgICAgICAgbmV4dFByb3BzLm9uU2VsZWN0ZWRJbmRleENoYW5nZWRcbiAgICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBtZXRob2QgPSAoYXR0YWNoID8gbm9kZS5vbiA6IG5vZGUub2ZmKS5iaW5kKG5vZGUpO1xuXG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblNlbGVjdGVkSW5kZXhDaGFuZ2VkKSBtZXRob2QoXCJzZWxlY3RlZEluZGV4Q2hhbmdlZFwiLCBpbnN0YW5jZS5wcm9wcy5vblNlbGVjdGVkSW5kZXhDaGFuZ2VkKTtcbiAgICB9XG59XG5cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlL29ic2VydmFibGVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIHJlZ2lzdGVyLCBDb250ZW50VmlldyB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBuYW1lT2YsIGZpcnN0TGV0dGVyTG93ZXJjYXNlIH0gZnJvbSBcIi4vSW1wbGVtZW50YXRpb24vSGVscGVyc1wiO1xuaW1wb3J0IHsgcmVuZGVySW1wbCB9IGZyb20gXCIuL0ltcGxlbWVudGF0aW9uL1JlYWN0L3JlbmRlckltcGxcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRSZWZJbXBsIH0gZnJvbSBcIi4vSW1wbGVtZW50YXRpb24vZ2V0Q3VycmVudFJlZkltcGxcIjtcbmltcG9ydCB7IEV4dHJhUHJvcHMgfSBmcm9tIFwiLi9FeHRyYVByb3BzXCI7XG5pbXBvcnQgeyB1cGRhdGVMaXN0ZW5lcnNJbXBsIH0gZnJvbSBcIi4vSW1wbGVtZW50YXRpb24vdXBkYXRlTGlzdGVuZXJzSW1wbFwiO1xuaW1wb3J0IHsgY29tcG9uZW50RGlkTW91bnRJbXBsIH0gZnJvbSBcIi4vSW1wbGVtZW50YXRpb24vUmVhY3QvY29tcG9uZW50RGlkTW91bnRJbXBsXCI7XG5pbXBvcnQgeyBzaG91bGRDb21wb25lbnRVcGRhdGVJbXBsIH0gZnJvbSBcIi4vSW1wbGVtZW50YXRpb24vUmVhY3Qvc2hvdWxkQ29tcG9uZW50VXBkYXRlSW1wbFwiO1xuaW1wb3J0IHsgY29tcG9uZW50V2lsbFVubW91bnRJbXBsIH0gZnJvbSBcIi4vSW1wbGVtZW50YXRpb24vUmVhY3QvY29tcG9uZW50V2lsbFVubW91bnRJbXBsXCI7XG5pbXBvcnQgeyBfX2N1c3RvbUhvc3RDb25maWdBcHBlbmRDaGlsZEltcGwgfSBmcm9tIFwiLi9JbXBsZW1lbnRhdGlvbi9DdXN0b21Ob2RlSGllcmFyY2h5TWFuYWdlci9fX2N1c3RvbUhvc3RDb25maWdBcHBlbmRDaGlsZEltcGxcIjtcbmltcG9ydCB7IF9fY3VzdG9tSG9zdENvbmZpZ1JlbW92ZUNoaWxkSW1wbCB9IGZyb20gXCIuL0ltcGxlbWVudGF0aW9uL0N1c3RvbU5vZGVIaWVyYXJjaHlNYW5hZ2VyL19fY3VzdG9tSG9zdENvbmZpZ1JlbW92ZUNoaWxkSW1wbFwiO1xuaW1wb3J0IHsgX19jdXN0b21Ib3N0Q29uZmlnSW5zZXJ0QmVmb3JlSW1wbCB9IGZyb20gXCIuL0ltcGxlbWVudGF0aW9uL0N1c3RvbU5vZGVIaWVyYXJjaHlNYW5hZ2VyL19fY3VzdG9tSG9zdENvbmZpZ0luc2VydEJlZm9yZUltcGxcIjtcbmltcG9ydCB7IG9uRGF0YUNoYW5nZUltcGwgfSBmcm9tIFwiLi9JbXBsZW1lbnRhdGlvbi9VbmlxdWUvb25EYXRhQ2hhbmdlSW1wbFwiO1xuaW1wb3J0IHsgQ3VzdG9tTm9kZUhpZXJhcmNoeU1hbmFnZXIgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3Qvc2hhcmVkL0hvc3RDb25maWdUeXBlc1wiO1xuaW1wb3J0IHsgdXBkYXRlTGlzdGVuZXJzSGVscGVySW1wbCB9IGZyb20gXCIuL0ltcGxlbWVudGF0aW9uL3VwZGF0ZUxpc3RlbmVyc0hlbHBlckltcGxcIjtcbmltcG9ydCB7IG9uU2VsZWN0SW5kZXhDaGFuZ2VJbXBsIH0gZnJvbSBcIi4vSW1wbGVtZW50YXRpb24vVW5pcXVlL29uU2VsZWN0ZWRJbmRleENoYW5nZUltcGxcIjtcbmltcG9ydCB7IG9uVGV4dENoYW5nZUltcGwgfSBmcm9tIFwiLi9JbXBsZW1lbnRhdGlvbi9VbmlxdWUvb25UZXh0Q2hhbmdlSW1wbFwiO1xuaW1wb3J0IHsgb25WYWx1ZUNoYW5nZUltcGwgfSBmcm9tIFwiLi9JbXBsZW1lbnRhdGlvbi9VbmlxdWUvb25WYWx1ZUNoYW5nZUltcGxcIjtcbmltcG9ydCB7IG9uVG9nZ2xlSW1wbCB9IGZyb20gXCIuL0ltcGxlbWVudGF0aW9uL1VuaXF1ZS9vblRvZ2dsZUltcGxcIjtcblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBSZWFjdGlmaWVkPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihvYnNlcnZhYmxlOiBULCBuYW1lPzogc3RyaW5nKSB7IFxuXG4gICAgaWYoIW5hbWUpIHtcbiAgICAgICAgbmFtZSA9IGZpcnN0TGV0dGVyTG93ZXJjYXNlKG5hbWVPZihvYnNlcnZhYmxlKSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwicmVnaXN0ZXJpbmcgXCIgKyBuYW1lKTtcbiAgICByZWdpc3RlcihuYW1lLCAoKSA9PiB7XG4gICAgICAgcmV0dXJuIG9ic2VydmFibGU7XG4gICAgfSk7XG4gICAgLy8gbGV0IHNlbGY6IFJlYWN0aWZ5ID0gbnVsbDtcbiAgICBjbGFzcyBSZWFjdGlmeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxUICYgRXh0cmFQcm9wczxUPiwgYW55PiBpbXBsZW1lbnRzIEN1c3RvbU5vZGVIaWVyYXJjaHlNYW5hZ2VyPFQ+IHtcbiAgICAgICAgc3RhdGljIGNvdW50T2ZJbnN0YW5jZXMgPSAwO1xuICAgICAgICAvLyBzdGF0aWMgZGVmYXVsdFByb3BzID0gey4uLiBvYnNlcnZhYmxlIH0gXG4gICAgICAgIC8qXG4gICAgICAgIGNvbnN0cnVjdG9yKHByb3BzOiBUICYgRXh0cmFQcm9wczxUPikge1xuICAgICAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICAgICAgUmVhY3RpZnkuY291bnRPZkluc3RhbmNlcyArKztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29uc3RydWN0aW5nIGluc3RhbmNlIFwiICsgUmVhY3RpZnkuY291bnRPZkluc3RhbmNlcyk7XG4gICAgICAgIH1cbiAgICAgICAgKi9cbiAgICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IG15UmVmOiBSZWFjdC5SZWZPYmplY3Q8VD4gPSBSZWFjdC5jcmVhdGVSZWY8VD4oKTtcbiAgICAgICAgcHJvdGVjdGVkIGdldEN1cnJlbnRSZWYgPSAoKTogVCB8IG51bGwgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLnByb3BzLmZvcndhcmRlZFJlZiB8fCB0aGlzLm15UmVmKS5jdXJyZW50O1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAqIEhlbHBlciBtZXRob2QgZm9yIHVwZGF0ZUxpc3RlbmVyczogc2ltcGx5IGdldHMgdGhlIGN1cnJlbnQgcmVmIHRvIHBhc3Mgb24gdG8gaXQuXG4gICAgICAgICogQHBhcmFtIGF0dGFjaCB0cnVlOiBhdHRhY2g7IGZhbHNlOiBkZXRhY2g7IG51bGw6IHVwZGF0ZVxuICAgICAgICAqL1xuICAgICAgICBwcm90ZWN0ZWQgdXBkYXRlTGlzdGVuZXJzSGVscGVyID0gKGF0dGFjaDogYm9vbGVhbiB8IG51bGwsIG5leHRQcm9wcz86IFQgJiBFeHRyYVByb3BzPFQ+KTogdm9pZCAgPT4ge1xuICAgICAgICAgICAgdXBkYXRlTGlzdGVuZXJzSGVscGVySW1wbCh0aGlzLCBhdHRhY2gsIG5leHRQcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICpcbiAgICAgICAgKiBAcGFyYW0gYXR0YWNoIHRydWU6IGF0dGFjaDsgZmFsc2U6IGRldGFjaDsgbnVsbDogdXBkYXRlXG4gICAgICAgICovXG4gICAgXG4gICAgICAgIHByb3RlY3RlZCB1cGRhdGVMaXN0ZW5lcnMgPSAobm9kZTogVCwgYXR0YWNoOiBib29sZWFuIHwgbnVsbCwgbmV4dFByb3BzPzogVCAmIEV4dHJhUHJvcHM8VD4pOiB2b2lkID0+IHtcbiAgICAgICAgICAgIHVwZGF0ZUxpc3RlbmVyc0ltcGwodGhpcywgbm9kZSwgYXR0YWNoLCBuZXh0UHJvcHMpOyAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb21wb25lbnREaWRNb3VudEltcGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICogUHVyZUNvbXBvbmVudCdzIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpIG1ldGhvZCBpcyBpZ25vcmVkIGFuZCByZXBsYWNlZCB3aXRoIGEgc2hhbGxvd0VxdWFsKClcbiAgICAgICAgKiBjb21wYXJpc29uIG9mIHByb3BzIGFuZCBzdGF0ZS4gV2UnbGwgaW1wbGVtZW50IG91ciBDb21wb25lbnQncyBzaG91bGRDb21wb25lbnRVcGRhdGUoKSB0b1xuICAgICAgICAqIG1hdGNoIHRoZSB3YXkgUHVyZUNvbXBvbmVudCBpcyBoYW5kbGVkLlxuICAgICAgICAqL1xuICAgICAgICBzaG91bGRDb21wb25lbnRVcGRhdGUgPSAobmV4dFByb3BzOiBUICYgRXh0cmFQcm9wczxUPiwgbmV4dFN0YXRlOiBhbnkpOiBib29sZWFuID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzaG91bGRDb21wb25lbnRVcGRhdGVJbXBsKHRoaXMsIG5leHRQcm9wcywgbmV4dFN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBjb21wb25lbnRXaWxsVW5tb3VudCA9ICgpID0+IHtcbiAgICAgICAgICAgIC8vIHRoaXMudXBkYXRlTGlzdGVuZXJzSGVscGVyKGZhbHNlKTtcbiAgICAgICAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50SW1wbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmVuZGVyID0gKCk6IFJlYWN0LlJlYWN0Tm9kZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVuZGVySW1wbChuYW1lLCB0aGlzLCBvYnNlcnZhYmxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9fSW1wbGVtZW50c0N1c3RvbU5vZGVIaWVyYXJjaHlNYW5hZ2VyX186IHRydWU7XG4gICAgICAgIF9fY3VzdG9tSG9zdENvbmZpZ0FwcGVuZENoaWxkPyA9IChwYXJlbnRJbnN0YW5jZTogVCwgY2hpbGQ6IE9ic2VydmFibGUgfCBpbXBvcnQoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtYmFzZS90ZXh0LWJhc2VcIikuVGV4dEJhc2UpOiBib29sZWFuID0+IHtcbiAgICAgICAgICAgIHJldHVybiBfX2N1c3RvbUhvc3RDb25maWdBcHBlbmRDaGlsZEltcGwocGFyZW50SW5zdGFuY2UsIGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBfX2N1c3RvbUhvc3RDb25maWdSZW1vdmVDaGlsZD8gPSAocGFyZW50SW5zdGFuY2U6IFQsIGNoaWxkOiBPYnNlcnZhYmxlIHwgaW1wb3J0KFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWJhc2UvdGV4dC1iYXNlXCIpLlRleHRCYXNlKTogYm9vbGVhbiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gX19jdXN0b21Ib3N0Q29uZmlnUmVtb3ZlQ2hpbGRJbXBsKHBhcmVudEluc3RhbmNlLCBjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgX19jdXN0b21Ib3N0Q29uZmlnSW5zZXJ0QmVmb3JlPz0gKHBhcmVudEluc3RhbmNlOiBULCBjaGlsZDogT2JzZXJ2YWJsZSB8IGltcG9ydChcInRucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC1iYXNlL3RleHQtYmFzZVwiKS5UZXh0QmFzZSwgYmVmb3JlQ2hpbGQ6IE9ic2VydmFibGUgfCBpbXBvcnQoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtYmFzZS90ZXh0LWJhc2VcIikuVGV4dEJhc2UpOiBib29sZWFuID0+IHtcbiAgICAgICAgICAgIHJldHVybiBfX2N1c3RvbUhvc3RDb25maWdJbnNlcnRCZWZvcmVJbXBsKHBhcmVudEluc3RhbmNlLCBjaGlsZCwgYmVmb3JlQ2hpbGQpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC8qIHVuaXF1ZS8gY29tcGxldGVseSBjdXN0b20gc3R1ZmYuLi4gKi9cbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBvbkRhdGVDaGFuZ2UgPSAoYXJnczogRXZlbnREYXRhKSA9PiB7XG4gICAgICAgICAgICBvbkRhdGFDaGFuZ2VJbXBsKHRoaXMsIGFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG9uU2VsZWN0ZWRJbmRleENoYW5nZSA9IChhcmdzOiBFdmVudERhdGEpID0+IHtcbiAgICAgICAgICAgIG9uU2VsZWN0SW5kZXhDaGFuZ2VJbXBsKHRoaXMsIGFyZ3MpXG4gICAgICAgIH07XG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgb25UZXh0Q2hhbmdlID0gKGFyZ3M6IEV2ZW50RGF0YSkgPT4ge1xuICAgICAgICAgICAgb25UZXh0Q2hhbmdlSW1wbCh0aGlzLCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBvblZhbHVlQ2hhbmdlID0gKGFyZ3M6IEV2ZW50RGF0YSkgPT4ge1xuICAgICAgICAgICAgb25WYWx1ZUNoYW5nZUltcGwodGhpcywgYXJncyk7XG4gICAgICAgIH07XG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgb25Ub2dnbGUgPSAoYXJnczogRXZlbnREYXRhKSA9PiB7IFxuICAgICAgICAgICAgb25Ub2dnbGVJbXBsKHRoaXMsIGFyZ3MpO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgcmV0dXJuIFJlYWN0aWZ5O1xuICAgICAvLyBoYXZlIHRvIGRlY2xhcmUgY2xhc3MgbmFtZSB0byBtYWtlIGRlY29yYXRvcnMgd29yayAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy83MzQyXG59XG5cblxuLy8gUmVhY3QuQ29tcG9uZW50PFQgJiBFeHRyYVByb3BzPFQ+XG5cbi8qIFxuLy8gQXJlIG5vdCBhY3R1YWxseSBuZWVkZWQgPyFcbmZ1bmN0aW9uIEpTWDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4ob2JzZXJ2YWJsZTogbmV3KC4uLmFyZ3M6IGFueVtdKSA9PiBSZWFjdC5Db21wb25lbnQ8VCAmIEV4dHJhUHJvcHM8VD4+KSB7XG4gICAgcmV0dXJuIFJlYWN0LmZvcndhcmRSZWY8VCwgUHJvcHNXaXRob3V0Rm9yd2FyZGVkUmVmPFQgJiBFeHRyYVByb3BzPFQ+Pj4oXG4gICAgICAgIChwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48UHJvcHNXaXRob3V0Rm9yd2FyZGVkUmVmPFQgJiBFeHRyYVByb3BzPFQ+Pj4sIHJlZjogUmVhY3QuUmVmT2JqZWN0PFQ+KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGNoaWxkcmVuLCAuLi5yZXN0IH0gPSBwcm9wcztcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIG9ic2VydmFibGVcbiAgICAgICAgICAgICAgICAsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAuLi5yZXN0LFxuICAgICAgICAgICAgICAgICAgICBmb3J3YXJkZWRSZWY6IHJlZixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgKVxufVxuKi9cblxuXG5cbi8vIGV4cG9ydCBjb25zdCBNeU9ic2VydmFibGU6IFJlYWN0LkNvbXBvbmVudFR5cGU8UHJvcHNXaXRob3V0Rm9yd2FyZGVkUmVmPE9ic2VydmFibGU+ICYgRXh0cmFQcm9wczxPYnNlcnZhYmxlPj4gJiBSZWFjdC5DbGFzc0F0dHJpYnV0ZXM8T2JzZXJ2YWJsZT4gPSBKU1gobmV3IE9ic2VydmFibGUoKSk7XG4vLyBleHBvcnQgY29uc3QgTXlCdXR0b24gPSBKU1gobmV3IEJ1dHRvbigpKTtcbi8vIGV4cG9ydCBjb25zdCBNeUNvbnRlbnRWaWV3OiBSZWFjdC5Db21wb25lbnRUeXBlPFByb3BzV2l0aG91dEZvcndhcmRlZFJlZjxDb250ZW50VmlldyAmIEV4dHJhUHJvcHM8Q29udGVudFZpZXc+Pj4gJiBSZWFjdC5DbGFzc0F0dHJpYnV0ZXM8Q29udGVudFZpZXc+ID0gSlNYKG5ldyBDb250ZW50VmlldygpKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxyXFxuICogQ29udmVuaWVudCBzaW5nbGUgaW1wb3J0IGZvciBsaWdodCB2YXJpYWJsZXNcXHJcXG4gKiBJbmNsdWRlcyBiYXNlIHZhcmlhYmxlcyB3aXRoIGxpZ2h0IG92ZXJyaWRlc1xcclxcbiAqKi9cXG4vKipcXHJcXG4gKiBMaWdodCB2YXJpYWJsZSBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxuICogVGhlbWUgdmFyaWFibGVzIG92ZXJyaWRlc1xcbioqL1xcbi8qKlxcclxcbiAqIENvbG9yIGNsYXNzZXNcXHJcXG4gKiBUaGUgZm9sbG93aW5nIGNyZWF0ZXMgdGhpcyBwYXR0ZXJuOlxcclxcbiAqIC5jLWdyZXl7Y29sb3I6I2UwZTBlMH0uYy1iZy1ncmV5e2JhY2tncm91bmQtY29sb3I6I2UwZTBlMH1cXHJcXG4qKi9cXG4uYy13aGl0ZSB7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5jLWJnLXdoaXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG5cXG4uYy1ibGFjayB7XFxuICBjb2xvcjogIzAwMDsgfVxcblxcbi5jLWJnLWJsYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7IH1cXG5cXG4uYy1hcXVhIHtcXG4gIGNvbG9yOiAjMDBjYWFiOyB9XFxuXFxuLmMtYmctYXF1YSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjYWFiOyB9XFxuXFxuLmMtYmx1ZSB7XFxuICBjb2xvcjogIzNkNWFmZTsgfVxcblxcbi5jLWJnLWJsdWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkNWFmZTsgfVxcblxcbi5jLWNoYXJjb2FsIHtcXG4gIGNvbG9yOiAjMzAzMDMwOyB9XFxuXFxuLmMtYmctY2hhcmNvYWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDsgfVxcblxcbi5jLWJyb3duIHtcXG4gIGNvbG9yOiAjNzk1NTQ4OyB9XFxuXFxuLmMtYmctYnJvd24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc5NTU0ODsgfVxcblxcbi5jLWZvcmVzdCB7XFxuICBjb2xvcjogIzAwNjk2ODsgfVxcblxcbi5jLWJnLWZvcmVzdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2OTY4OyB9XFxuXFxuLmMtZ3JleSB7XFxuICBjb2xvcjogI2UwZTBlMDsgfVxcblxcbi5jLWJnLWdyZXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDsgfVxcblxcbi5jLWdyZXktbGlnaHQge1xcbiAgY29sb3I6ICNiYWJhYmE7IH1cXG5cXG4uYy1iZy1ncmV5LWxpZ2h0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYWJhYmE7IH1cXG5cXG4uYy1ncmV5LWRhcmsge1xcbiAgY29sb3I6ICM1YzY4N2M7IH1cXG5cXG4uYy1iZy1ncmV5LWRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjNjg3YzsgfVxcblxcbi5jLXB1cnBsZSB7XFxuICBjb2xvcjogIzgxMzBmZjsgfVxcblxcbi5jLWJnLXB1cnBsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODEzMGZmOyB9XFxuXFxuLmMtbGVtb24ge1xcbiAgY29sb3I6ICNmZmVhMDA7IH1cXG5cXG4uYy1iZy1sZW1vbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYTAwOyB9XFxuXFxuLmMtbGltZSB7XFxuICBjb2xvcjogI2FlZTQwNjsgfVxcblxcbi5jLWJnLWxpbWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FlZTQwNjsgfVxcblxcbi5jLW9yYW5nZSB7XFxuICBjb2xvcjogI2Y1N2MwMDsgfVxcblxcbi5jLWJnLW9yYW5nZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU3YzAwOyB9XFxuXFxuLmMtcnVieSB7XFxuICBjb2xvcjogI2ZmMTc0NDsgfVxcblxcbi5jLWJnLXJ1Ynkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMTc0NDsgfVxcblxcbi5jLXNreSB7XFxuICBjb2xvcjogIzMwYmNmZjsgfVxcblxcbi5jLWJnLXNreSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzBiY2ZmOyB9XFxuXFxuLyogV2lkdGgvSGVpZ2h0ICovXFxuLnctZnVsbCB7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi53LTEwMCB7XFxuICB3aWR0aDogMTAwOyB9XFxuXFxuLmgtZnVsbCB7XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG4uaC0xMDAge1xcbiAgaGVpZ2h0OiAxMDA7IH1cXG5cXG4vKipcXHJcXG4gKiBNYXJnaW4gYW5kIFBhZGRpbmdcXHJcXG4gKiBUaGUgZm9sbG93aW5nIGNyZWF0ZXMgdGhpcyBwYXR0ZXJuOlxcclxcbiAqIC5tLTB7bWFyZ2luOjB9Lm0tdC0we21hcmdpbi10b3A6MH0ubS1yLTB7bWFyZ2luLXJpZ2h0OjB9Lm0tYi0we21hcmdpbi1ib3R0b206MH0ubS1sLTB7bWFyZ2luLWxlZnQ6MH0ubS14LTB7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLWxlZnQ6MH0ubS15LTB7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH1cXHJcXG4gKiBTYW1lIGZvciBQYWRkaW5nICh1c2luZyB0aGUgJ3AnIGFiYnJldmlhdGlvbilcXHJcXG4gKiBGcm9tIDAsIDIsIDUsIDEwLCAxNSwgMjAsIDI1LCAzMFxcclxcbioqL1xcbi5tLTAge1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuLm0tdC0wIHtcXG4gIG1hcmdpbi10b3A6IDA7IH1cXG5cXG4ubS1yLTAge1xcbiAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuXFxuLm0tYi0wIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7IH1cXG5cXG4ubS1sLTAge1xcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4ubS14LTAge1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4ubS15LTAge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7IH1cXG5cXG4ubS0yIHtcXG4gIG1hcmdpbjogMjsgfVxcblxcbi5tLXQtMiB7XFxuICBtYXJnaW4tdG9wOiAyOyB9XFxuXFxuLm0tci0yIHtcXG4gIG1hcmdpbi1yaWdodDogMjsgfVxcblxcbi5tLWItMiB7XFxuICBtYXJnaW4tYm90dG9tOiAyOyB9XFxuXFxuLm0tbC0yIHtcXG4gIG1hcmdpbi1sZWZ0OiAyOyB9XFxuXFxuLm0teC0yIHtcXG4gIG1hcmdpbi1yaWdodDogMjtcXG4gIG1hcmdpbi1sZWZ0OiAyOyB9XFxuXFxuLm0teS0yIHtcXG4gIG1hcmdpbi10b3A6IDI7XFxuICBtYXJnaW4tYm90dG9tOiAyOyB9XFxuXFxuLm0tNCB7XFxuICBtYXJnaW46IDQ7IH1cXG5cXG4ubS10LTQge1xcbiAgbWFyZ2luLXRvcDogNDsgfVxcblxcbi5tLXItNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDQ7IH1cXG5cXG4ubS1iLTQge1xcbiAgbWFyZ2luLWJvdHRvbTogNDsgfVxcblxcbi5tLWwtNCB7XFxuICBtYXJnaW4tbGVmdDogNDsgfVxcblxcbi5tLXgtNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDQ7XFxuICBtYXJnaW4tbGVmdDogNDsgfVxcblxcbi5tLXktNCB7XFxuICBtYXJnaW4tdG9wOiA0O1xcbiAgbWFyZ2luLWJvdHRvbTogNDsgfVxcblxcbi5tLTUge1xcbiAgbWFyZ2luOiA1OyB9XFxuXFxuLm0tdC01IHtcXG4gIG1hcmdpbi10b3A6IDU7IH1cXG5cXG4ubS1yLTUge1xcbiAgbWFyZ2luLXJpZ2h0OiA1OyB9XFxuXFxuLm0tYi01IHtcXG4gIG1hcmdpbi1ib3R0b206IDU7IH1cXG5cXG4ubS1sLTUge1xcbiAgbWFyZ2luLWxlZnQ6IDU7IH1cXG5cXG4ubS14LTUge1xcbiAgbWFyZ2luLXJpZ2h0OiA1O1xcbiAgbWFyZ2luLWxlZnQ6IDU7IH1cXG5cXG4ubS15LTUge1xcbiAgbWFyZ2luLXRvcDogNTtcXG4gIG1hcmdpbi1ib3R0b206IDU7IH1cXG5cXG4ubS04IHtcXG4gIG1hcmdpbjogODsgfVxcblxcbi5tLXQtOCB7XFxuICBtYXJnaW4tdG9wOiA4OyB9XFxuXFxuLm0tci04IHtcXG4gIG1hcmdpbi1yaWdodDogODsgfVxcblxcbi5tLWItOCB7XFxuICBtYXJnaW4tYm90dG9tOiA4OyB9XFxuXFxuLm0tbC04IHtcXG4gIG1hcmdpbi1sZWZ0OiA4OyB9XFxuXFxuLm0teC04IHtcXG4gIG1hcmdpbi1yaWdodDogODtcXG4gIG1hcmdpbi1sZWZ0OiA4OyB9XFxuXFxuLm0teS04IHtcXG4gIG1hcmdpbi10b3A6IDg7XFxuICBtYXJnaW4tYm90dG9tOiA4OyB9XFxuXFxuLm0tMTAge1xcbiAgbWFyZ2luOiAxMDsgfVxcblxcbi5tLXQtMTAge1xcbiAgbWFyZ2luLXRvcDogMTA7IH1cXG5cXG4ubS1yLTEwIHtcXG4gIG1hcmdpbi1yaWdodDogMTA7IH1cXG5cXG4ubS1iLTEwIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwOyB9XFxuXFxuLm0tbC0xMCB7XFxuICBtYXJnaW4tbGVmdDogMTA7IH1cXG5cXG4ubS14LTEwIHtcXG4gIG1hcmdpbi1yaWdodDogMTA7XFxuICBtYXJnaW4tbGVmdDogMTA7IH1cXG5cXG4ubS15LTEwIHtcXG4gIG1hcmdpbi10b3A6IDEwO1xcbiAgbWFyZ2luLWJvdHRvbTogMTA7IH1cXG5cXG4ubS0xMiB7XFxuICBtYXJnaW46IDEyOyB9XFxuXFxuLm0tdC0xMiB7XFxuICBtYXJnaW4tdG9wOiAxMjsgfVxcblxcbi5tLXItMTIge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMjsgfVxcblxcbi5tLWItMTIge1xcbiAgbWFyZ2luLWJvdHRvbTogMTI7IH1cXG5cXG4ubS1sLTEyIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMjsgfVxcblxcbi5tLXgtMTIge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMjtcXG4gIG1hcmdpbi1sZWZ0OiAxMjsgfVxcblxcbi5tLXktMTIge1xcbiAgbWFyZ2luLXRvcDogMTI7XFxuICBtYXJnaW4tYm90dG9tOiAxMjsgfVxcblxcbi5tLTE1IHtcXG4gIG1hcmdpbjogMTU7IH1cXG5cXG4ubS10LTE1IHtcXG4gIG1hcmdpbi10b3A6IDE1OyB9XFxuXFxuLm0tci0xNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDE1OyB9XFxuXFxuLm0tYi0xNSB7XFxuICBtYXJnaW4tYm90dG9tOiAxNTsgfVxcblxcbi5tLWwtMTUge1xcbiAgbWFyZ2luLWxlZnQ6IDE1OyB9XFxuXFxuLm0teC0xNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDE1O1xcbiAgbWFyZ2luLWxlZnQ6IDE1OyB9XFxuXFxuLm0teS0xNSB7XFxuICBtYXJnaW4tdG9wOiAxNTtcXG4gIG1hcmdpbi1ib3R0b206IDE1OyB9XFxuXFxuLm0tMTYge1xcbiAgbWFyZ2luOiAxNjsgfVxcblxcbi5tLXQtMTYge1xcbiAgbWFyZ2luLXRvcDogMTY7IH1cXG5cXG4ubS1yLTE2IHtcXG4gIG1hcmdpbi1yaWdodDogMTY7IH1cXG5cXG4ubS1iLTE2IHtcXG4gIG1hcmdpbi1ib3R0b206IDE2OyB9XFxuXFxuLm0tbC0xNiB7XFxuICBtYXJnaW4tbGVmdDogMTY7IH1cXG5cXG4ubS14LTE2IHtcXG4gIG1hcmdpbi1yaWdodDogMTY7XFxuICBtYXJnaW4tbGVmdDogMTY7IH1cXG5cXG4ubS15LTE2IHtcXG4gIG1hcmdpbi10b3A6IDE2O1xcbiAgbWFyZ2luLWJvdHRvbTogMTY7IH1cXG5cXG4ubS0yMCB7XFxuICBtYXJnaW46IDIwOyB9XFxuXFxuLm0tdC0yMCB7XFxuICBtYXJnaW4tdG9wOiAyMDsgfVxcblxcbi5tLXItMjAge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMDsgfVxcblxcbi5tLWItMjAge1xcbiAgbWFyZ2luLWJvdHRvbTogMjA7IH1cXG5cXG4ubS1sLTIwIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMDsgfVxcblxcbi5tLXgtMjAge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMDtcXG4gIG1hcmdpbi1sZWZ0OiAyMDsgfVxcblxcbi5tLXktMjAge1xcbiAgbWFyZ2luLXRvcDogMjA7XFxuICBtYXJnaW4tYm90dG9tOiAyMDsgfVxcblxcbi5tLTI0IHtcXG4gIG1hcmdpbjogMjQ7IH1cXG5cXG4ubS10LTI0IHtcXG4gIG1hcmdpbi10b3A6IDI0OyB9XFxuXFxuLm0tci0yNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDI0OyB9XFxuXFxuLm0tYi0yNCB7XFxuICBtYXJnaW4tYm90dG9tOiAyNDsgfVxcblxcbi5tLWwtMjQge1xcbiAgbWFyZ2luLWxlZnQ6IDI0OyB9XFxuXFxuLm0teC0yNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDI0O1xcbiAgbWFyZ2luLWxlZnQ6IDI0OyB9XFxuXFxuLm0teS0yNCB7XFxuICBtYXJnaW4tdG9wOiAyNDtcXG4gIG1hcmdpbi1ib3R0b206IDI0OyB9XFxuXFxuLm0tMjUge1xcbiAgbWFyZ2luOiAyNTsgfVxcblxcbi5tLXQtMjUge1xcbiAgbWFyZ2luLXRvcDogMjU7IH1cXG5cXG4ubS1yLTI1IHtcXG4gIG1hcmdpbi1yaWdodDogMjU7IH1cXG5cXG4ubS1iLTI1IHtcXG4gIG1hcmdpbi1ib3R0b206IDI1OyB9XFxuXFxuLm0tbC0yNSB7XFxuICBtYXJnaW4tbGVmdDogMjU7IH1cXG5cXG4ubS14LTI1IHtcXG4gIG1hcmdpbi1yaWdodDogMjU7XFxuICBtYXJnaW4tbGVmdDogMjU7IH1cXG5cXG4ubS15LTI1IHtcXG4gIG1hcmdpbi10b3A6IDI1O1xcbiAgbWFyZ2luLWJvdHRvbTogMjU7IH1cXG5cXG4ubS0yOCB7XFxuICBtYXJnaW46IDI4OyB9XFxuXFxuLm0tdC0yOCB7XFxuICBtYXJnaW4tdG9wOiAyODsgfVxcblxcbi5tLXItMjgge1xcbiAgbWFyZ2luLXJpZ2h0OiAyODsgfVxcblxcbi5tLWItMjgge1xcbiAgbWFyZ2luLWJvdHRvbTogMjg7IH1cXG5cXG4ubS1sLTI4IHtcXG4gIG1hcmdpbi1sZWZ0OiAyODsgfVxcblxcbi5tLXgtMjgge1xcbiAgbWFyZ2luLXJpZ2h0OiAyODtcXG4gIG1hcmdpbi1sZWZ0OiAyODsgfVxcblxcbi5tLXktMjgge1xcbiAgbWFyZ2luLXRvcDogMjg7XFxuICBtYXJnaW4tYm90dG9tOiAyODsgfVxcblxcbi5tLTMwIHtcXG4gIG1hcmdpbjogMzA7IH1cXG5cXG4ubS10LTMwIHtcXG4gIG1hcmdpbi10b3A6IDMwOyB9XFxuXFxuLm0tci0zMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDMwOyB9XFxuXFxuLm0tYi0zMCB7XFxuICBtYXJnaW4tYm90dG9tOiAzMDsgfVxcblxcbi5tLWwtMzAge1xcbiAgbWFyZ2luLWxlZnQ6IDMwOyB9XFxuXFxuLm0teC0zMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDMwO1xcbiAgbWFyZ2luLWxlZnQ6IDMwOyB9XFxuXFxuLm0teS0zMCB7XFxuICBtYXJnaW4tdG9wOiAzMDtcXG4gIG1hcmdpbi1ib3R0b206IDMwOyB9XFxuXFxuLnAtMCB7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLnAtdC0wIHtcXG4gIHBhZGRpbmctdG9wOiAwOyB9XFxuXFxuLnAtci0wIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7IH1cXG5cXG4ucC1iLTAge1xcbiAgcGFkZGluZy1ib3R0b206IDA7IH1cXG5cXG4ucC1sLTAge1xcbiAgcGFkZGluZy1sZWZ0OiAwOyB9XFxuXFxuLnAteC0wIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7XFxuICBwYWRkaW5nLWxlZnQ6IDA7IH1cXG5cXG4ucC15LTAge1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMDsgfVxcblxcbi5wLTIge1xcbiAgcGFkZGluZzogMjsgfVxcblxcbi5wLXQtMiB7XFxuICBwYWRkaW5nLXRvcDogMjsgfVxcblxcbi5wLXItMiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyOyB9XFxuXFxuLnAtYi0yIHtcXG4gIHBhZGRpbmctYm90dG9tOiAyOyB9XFxuXFxuLnAtbC0yIHtcXG4gIHBhZGRpbmctbGVmdDogMjsgfVxcblxcbi5wLXgtMiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyO1xcbiAgcGFkZGluZy1sZWZ0OiAyOyB9XFxuXFxuLnAteS0yIHtcXG4gIHBhZGRpbmctdG9wOiAyO1xcbiAgcGFkZGluZy1ib3R0b206IDI7IH1cXG5cXG4ucC00IHtcXG4gIHBhZGRpbmc6IDQ7IH1cXG5cXG4ucC10LTQge1xcbiAgcGFkZGluZy10b3A6IDQ7IH1cXG5cXG4ucC1yLTQge1xcbiAgcGFkZGluZy1yaWdodDogNDsgfVxcblxcbi5wLWItNCB7XFxuICBwYWRkaW5nLWJvdHRvbTogNDsgfVxcblxcbi5wLWwtNCB7XFxuICBwYWRkaW5nLWxlZnQ6IDQ7IH1cXG5cXG4ucC14LTQge1xcbiAgcGFkZGluZy1yaWdodDogNDtcXG4gIHBhZGRpbmctbGVmdDogNDsgfVxcblxcbi5wLXktNCB7XFxuICBwYWRkaW5nLXRvcDogNDtcXG4gIHBhZGRpbmctYm90dG9tOiA0OyB9XFxuXFxuLnAtNSB7XFxuICBwYWRkaW5nOiA1OyB9XFxuXFxuLnAtdC01IHtcXG4gIHBhZGRpbmctdG9wOiA1OyB9XFxuXFxuLnAtci01IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDU7IH1cXG5cXG4ucC1iLTUge1xcbiAgcGFkZGluZy1ib3R0b206IDU7IH1cXG5cXG4ucC1sLTUge1xcbiAgcGFkZGluZy1sZWZ0OiA1OyB9XFxuXFxuLnAteC01IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDU7XFxuICBwYWRkaW5nLWxlZnQ6IDU7IH1cXG5cXG4ucC15LTUge1xcbiAgcGFkZGluZy10b3A6IDU7XFxuICBwYWRkaW5nLWJvdHRvbTogNTsgfVxcblxcbi5wLTgge1xcbiAgcGFkZGluZzogODsgfVxcblxcbi5wLXQtOCB7XFxuICBwYWRkaW5nLXRvcDogODsgfVxcblxcbi5wLXItOCB7XFxuICBwYWRkaW5nLXJpZ2h0OiA4OyB9XFxuXFxuLnAtYi04IHtcXG4gIHBhZGRpbmctYm90dG9tOiA4OyB9XFxuXFxuLnAtbC04IHtcXG4gIHBhZGRpbmctbGVmdDogODsgfVxcblxcbi5wLXgtOCB7XFxuICBwYWRkaW5nLXJpZ2h0OiA4O1xcbiAgcGFkZGluZy1sZWZ0OiA4OyB9XFxuXFxuLnAteS04IHtcXG4gIHBhZGRpbmctdG9wOiA4O1xcbiAgcGFkZGluZy1ib3R0b206IDg7IH1cXG5cXG4ucC0xMCB7XFxuICBwYWRkaW5nOiAxMDsgfVxcblxcbi5wLXQtMTAge1xcbiAgcGFkZGluZy10b3A6IDEwOyB9XFxuXFxuLnAtci0xMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMDsgfVxcblxcbi5wLWItMTAge1xcbiAgcGFkZGluZy1ib3R0b206IDEwOyB9XFxuXFxuLnAtbC0xMCB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwOyB9XFxuXFxuLnAteC0xMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMDtcXG4gIHBhZGRpbmctbGVmdDogMTA7IH1cXG5cXG4ucC15LTEwIHtcXG4gIHBhZGRpbmctdG9wOiAxMDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMDsgfVxcblxcbi5wLTEyIHtcXG4gIHBhZGRpbmc6IDEyOyB9XFxuXFxuLnAtdC0xMiB7XFxuICBwYWRkaW5nLXRvcDogMTI7IH1cXG5cXG4ucC1yLTEyIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEyOyB9XFxuXFxuLnAtYi0xMiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTI7IH1cXG5cXG4ucC1sLTEyIHtcXG4gIHBhZGRpbmctbGVmdDogMTI7IH1cXG5cXG4ucC14LTEyIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEyO1xcbiAgcGFkZGluZy1sZWZ0OiAxMjsgfVxcblxcbi5wLXktMTIge1xcbiAgcGFkZGluZy10b3A6IDEyO1xcbiAgcGFkZGluZy1ib3R0b206IDEyOyB9XFxuXFxuLnAtMTUge1xcbiAgcGFkZGluZzogMTU7IH1cXG5cXG4ucC10LTE1IHtcXG4gIHBhZGRpbmctdG9wOiAxNTsgfVxcblxcbi5wLXItMTUge1xcbiAgcGFkZGluZy1yaWdodDogMTU7IH1cXG5cXG4ucC1iLTE1IHtcXG4gIHBhZGRpbmctYm90dG9tOiAxNTsgfVxcblxcbi5wLWwtMTUge1xcbiAgcGFkZGluZy1sZWZ0OiAxNTsgfVxcblxcbi5wLXgtMTUge1xcbiAgcGFkZGluZy1yaWdodDogMTU7XFxuICBwYWRkaW5nLWxlZnQ6IDE1OyB9XFxuXFxuLnAteS0xNSB7XFxuICBwYWRkaW5nLXRvcDogMTU7XFxuICBwYWRkaW5nLWJvdHRvbTogMTU7IH1cXG5cXG4ucC0xNiB7XFxuICBwYWRkaW5nOiAxNjsgfVxcblxcbi5wLXQtMTYge1xcbiAgcGFkZGluZy10b3A6IDE2OyB9XFxuXFxuLnAtci0xNiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNjsgfVxcblxcbi5wLWItMTYge1xcbiAgcGFkZGluZy1ib3R0b206IDE2OyB9XFxuXFxuLnAtbC0xNiB7XFxuICBwYWRkaW5nLWxlZnQ6IDE2OyB9XFxuXFxuLnAteC0xNiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNjtcXG4gIHBhZGRpbmctbGVmdDogMTY7IH1cXG5cXG4ucC15LTE2IHtcXG4gIHBhZGRpbmctdG9wOiAxNjtcXG4gIHBhZGRpbmctYm90dG9tOiAxNjsgfVxcblxcbi5wLTIwIHtcXG4gIHBhZGRpbmc6IDIwOyB9XFxuXFxuLnAtdC0yMCB7XFxuICBwYWRkaW5nLXRvcDogMjA7IH1cXG5cXG4ucC1yLTIwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwOyB9XFxuXFxuLnAtYi0yMCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjA7IH1cXG5cXG4ucC1sLTIwIHtcXG4gIHBhZGRpbmctbGVmdDogMjA7IH1cXG5cXG4ucC14LTIwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwO1xcbiAgcGFkZGluZy1sZWZ0OiAyMDsgfVxcblxcbi5wLXktMjAge1xcbiAgcGFkZGluZy10b3A6IDIwO1xcbiAgcGFkZGluZy1ib3R0b206IDIwOyB9XFxuXFxuLnAtMjQge1xcbiAgcGFkZGluZzogMjQ7IH1cXG5cXG4ucC10LTI0IHtcXG4gIHBhZGRpbmctdG9wOiAyNDsgfVxcblxcbi5wLXItMjQge1xcbiAgcGFkZGluZy1yaWdodDogMjQ7IH1cXG5cXG4ucC1iLTI0IHtcXG4gIHBhZGRpbmctYm90dG9tOiAyNDsgfVxcblxcbi5wLWwtMjQge1xcbiAgcGFkZGluZy1sZWZ0OiAyNDsgfVxcblxcbi5wLXgtMjQge1xcbiAgcGFkZGluZy1yaWdodDogMjQ7XFxuICBwYWRkaW5nLWxlZnQ6IDI0OyB9XFxuXFxuLnAteS0yNCB7XFxuICBwYWRkaW5nLXRvcDogMjQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMjQ7IH1cXG5cXG4ucC0yNSB7XFxuICBwYWRkaW5nOiAyNTsgfVxcblxcbi5wLXQtMjUge1xcbiAgcGFkZGluZy10b3A6IDI1OyB9XFxuXFxuLnAtci0yNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNTsgfVxcblxcbi5wLWItMjUge1xcbiAgcGFkZGluZy1ib3R0b206IDI1OyB9XFxuXFxuLnAtbC0yNSB7XFxuICBwYWRkaW5nLWxlZnQ6IDI1OyB9XFxuXFxuLnAteC0yNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNTtcXG4gIHBhZGRpbmctbGVmdDogMjU7IH1cXG5cXG4ucC15LTI1IHtcXG4gIHBhZGRpbmctdG9wOiAyNTtcXG4gIHBhZGRpbmctYm90dG9tOiAyNTsgfVxcblxcbi5wLTI4IHtcXG4gIHBhZGRpbmc6IDI4OyB9XFxuXFxuLnAtdC0yOCB7XFxuICBwYWRkaW5nLXRvcDogMjg7IH1cXG5cXG4ucC1yLTI4IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI4OyB9XFxuXFxuLnAtYi0yOCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjg7IH1cXG5cXG4ucC1sLTI4IHtcXG4gIHBhZGRpbmctbGVmdDogMjg7IH1cXG5cXG4ucC14LTI4IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI4O1xcbiAgcGFkZGluZy1sZWZ0OiAyODsgfVxcblxcbi5wLXktMjgge1xcbiAgcGFkZGluZy10b3A6IDI4O1xcbiAgcGFkZGluZy1ib3R0b206IDI4OyB9XFxuXFxuLnAtMzAge1xcbiAgcGFkZGluZzogMzA7IH1cXG5cXG4ucC10LTMwIHtcXG4gIHBhZGRpbmctdG9wOiAzMDsgfVxcblxcbi5wLXItMzAge1xcbiAgcGFkZGluZy1yaWdodDogMzA7IH1cXG5cXG4ucC1iLTMwIHtcXG4gIHBhZGRpbmctYm90dG9tOiAzMDsgfVxcblxcbi5wLWwtMzAge1xcbiAgcGFkZGluZy1sZWZ0OiAzMDsgfVxcblxcbi5wLXgtMzAge1xcbiAgcGFkZGluZy1yaWdodDogMzA7XFxuICBwYWRkaW5nLWxlZnQ6IDMwOyB9XFxuXFxuLnAteS0zMCB7XFxuICBwYWRkaW5nLXRvcDogMzA7XFxuICBwYWRkaW5nLWJvdHRvbTogMzA7IH1cXG5cXG4vKiBEaXZpZGVycyAqL1xcbi5oci1saWdodCB7XFxuICBoZWlnaHQ6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uaHItZGFyayB7XFxuICBoZWlnaHQ6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4vKiBBbGlnbm1lbnQgKi9cXG4udGV4dC1sZWZ0IHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cXG5cXG4udGV4dC1yaWdodCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDsgfVxcblxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4udGV4dC1sb3dlcmNhc2Uge1xcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTsgfVxcblxcbi50ZXh0LXVwcGVyY2FzZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLnRleHQtY2FwaXRhbGl6ZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgfVxcblxcbi5mb250LXdlaWdodC1ub3JtYWwge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxcblxcbi5mb250LXdlaWdodC1ib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLmZvbnQtaXRhbGljIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxcblxcbi8qKlxcclxcbiAqIEZvbnQgc2l6ZVxcclxcbiAqIFRoZSBmb2xsb3dpbmcgY3JlYXRlcyB0aGlzIHBhdHRlcm46XFxyXFxuICogLnQtMTB7Zm9udC1zaXplOjEwfVxcclxcbiAqIEZyb20gMTAsIDEyLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5LCAyMFxcclxcbioqL1xcbi50LTEwIHtcXG4gIGZvbnQtc2l6ZTogMTA7IH1cXG5cXG4udC0xMiB7XFxuICBmb250LXNpemU6IDEyOyB9XFxuXFxuLnQtMTQge1xcbiAgZm9udC1zaXplOiAxNDsgfVxcblxcbi50LTE1IHtcXG4gIGZvbnQtc2l6ZTogMTU7IH1cXG5cXG4udC0xNiB7XFxuICBmb250LXNpemU6IDE2OyB9XFxuXFxuLnQtMTcge1xcbiAgZm9udC1zaXplOiAxNzsgfVxcblxcbi50LTE4IHtcXG4gIGZvbnQtc2l6ZTogMTg7IH1cXG5cXG4udC0xOSB7XFxuICBmb250LXNpemU6IDE5OyB9XFxuXFxuLnQtMjAge1xcbiAgZm9udC1zaXplOiAyMDsgfVxcblxcbi50LTI1IHtcXG4gIGZvbnQtc2l6ZTogMjU7IH1cXG5cXG4udC0zMCB7XFxuICBmb250LXNpemU6IDMwOyB9XFxuXFxuLmltZy1yb3VuZGVkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDU7IH1cXG5cXG4uaW1nLWNpcmNsZSB7XFxuICBib3JkZXItcmFkaXVzOiAyMDsgfVxcblxcbi5pbWctdGh1bWJuYWlsIHtcXG4gIGJvcmRlci1yYWRpdXM6IDA7IH1cXG5cXG4uaW52aXNpYmxlIHtcXG4gIHZpc2liaWxpdHk6IGNvbGxhcHNlOyB9XFxuXFxuLnB1bGwtbGVmdCB7XFxuICBob3Jpem9udGFsLWFsaWduOiBsZWZ0OyB9XFxuXFxuLnB1bGwtcmlnaHQge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogcmlnaHQ7IH1cXG5cXG4ubS14LWF1dG8ge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLm0teS1hdXRvIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IH1cXG5cXG4udGV4dC1wcmltYXJ5IHtcXG4gIGNvbG9yOiAjM0E1M0ZGOyB9XFxuXFxuLnRleHQtZGFuZ2VyIHtcXG4gIGNvbG9yOiAjRUQ0NzNGOyB9XFxuXFxuLnRleHQtbXV0ZWQge1xcbiAgY29sb3I6ICM5ZTllOWU7IH1cXG5cXG4uYmctcHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E1M0ZGO1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uYmctZGFuZ2VyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRDQ3M0Y7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5hY3Rpb24tYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7XFxuICBjb2xvcjogI2ZmZjsgfVxcbiAgLmFjdGlvbi1iYXIgLmFjdGlvbi1iYXItdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxNztcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgfVxcbiAgLmFjdGlvbi1iYXIgLmFjdGlvbi1pdGVtIHtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxcblxcbi5hY3Rpdml0eS1pbmRpY2F0b3Ige1xcbiAgY29sb3I6ICMzQTUzRkY7XFxuICB3aWR0aDogMzA7XFxuICBoZWlnaHQ6IDMwOyB9XFxuXFxuLmJ0biB7XFxuICBjb2xvcjogIzNBNTNGRjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgbWluLWhlaWdodDogMzY7XFxuICBtaW4td2lkdGg6IDY0O1xcbiAgcGFkZGluZzogMTAgMTAgMTAgMTA7XFxuICBmb250LXNpemU6IDE4O1xcbiAgbWFyZ2luOiA4IDE2IDggMTY7IH1cXG4gIC5idG4uYnRuLWFjdGl2ZTpoaWdobGlnaHRlZCB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmQ4MGZmOyB9XFxuXFxuLmJ0bi1wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7XFxuICBib3JkZXItY29sb3I6ICMzQTUzRkY7XFxuICBjb2xvcjogI2ZmZjsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1hY3RpdmU6aGlnaGxpZ2h0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDcyNmZmO1xcbiAgICBib3JkZXItY29sb3I6ICMwNzI2ZmY7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tYXF1YSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGNhYWI7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tYmx1ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDVhZmU7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tYnJvd24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk1NTQ4OyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWZvcmVzdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY5Njg7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tZ3JleSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YzY4N2M7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tbGVtb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYTAwO1xcbiAgICBjb2xvcjogIzAwMDsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1saW1lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FlZTQwNjtcXG4gICAgY29sb3I6ICMwMDA7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tb3JhbmdlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1N2MwMDsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1wdXJwbGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODEzMGZmOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLXJ1Ynkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYxNzQ0OyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLXNreSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMGJjZmY7IH1cXG5cXG4uYnRuLW91dGxpbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItY29sb3I6ICMzQTUzRkY7XFxuICBjb2xvcjogIzNBNTNGRjsgfVxcbiAgLmJ0bi1vdXRsaW5lLmJ0bi1hY3RpdmU6aGlnaGxpZ2h0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmQ4MGZmOyB9XFxuXFxuLmJ0bltpc0VuYWJsZWQ9ZmFsc2VdIHtcXG4gIGNvbG9yOiAjYTRhNGE0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gIGJvcmRlci1jb2xvcjogI2UwZTBlMDsgfVxcblxcbi5mYSB7XFxuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWUsIGZvbnRhd2Vzb21lLXdlYmZvbnQ7IH1cXG5cXG4uZm9ybSAuaW5wdXQge1xcbiAgcGFkZGluZzogMTYgOCAxNiA4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gIC5mb3JtIC5pbnB1dC5pbnB1dC1ib3JkZXIge1xcbiAgICBib3JkZXItd2lkdGg6IDE7XFxuICAgIGJvcmRlci1jb2xvcjogI2UwZTBlMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjtcXG4gICAgcGFkZGluZzogMTY7IH1cXG4gIC5mb3JtIC5pbnB1dC5pbnB1dC1yb3VuZGVkIHtcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgICBib3JkZXItY29sb3I6ICNlMGUwZTA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI4O1xcbiAgICBwYWRkaW5nOiAxNjsgfVxcbiAgLmZvcm0gLmlucHV0W2lzRW5hYmxlZD0nZmFsc2UnXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7IH1cXG5cXG4uZm9ybSAuaW5wdXQtZmllbGQge1xcbiAgbWFyZ2luOiA4OyB9XFxuICAuZm9ybSAuaW5wdXQtZmllbGQgLmxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxMjtcXG4gICAgY29sb3I6ICNiYWJhYmE7IH1cXG4gIC5mb3JtIC5pbnB1dC1maWVsZCAuaW5wdXQge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDAgMCA4IDA7IH1cXG4gIC5mb3JtIC5pbnB1dC1maWVsZCAuaHItbGlnaHQuYWN0aXZlLFxcbiAgLmZvcm0gLmlucHV0LWZpZWxkIC5oci1kYXJrLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7IH1cXG4gIC5mb3JtIC5pbnB1dC1maWVsZC5pbnB1dC1zaWRlcyAubGFiZWwge1xcbiAgICBmb250LXNpemU6IDE4O1xcbiAgICBtYXJnaW46IDAgMCA4IDA7IH1cXG5cXG4uaDEsIC5oMiwgLmgzLCAuaDQsIC5oNSwgLmg2IHtcXG4gIG1hcmdpbi1ib3R0b206IDQ7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgY29sb3I6ICMwMjI3MzQ7IH1cXG5cXG4uYm9keSxcXG4uYm9keTIsXFxuLmZvb3Rub3RlIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBjb2xvcjogIzAyMjczNDsgfVxcblxcbi5oMSB7XFxuICBmb250LXNpemU6IDMyOyB9XFxuXFxuLmgyIHtcXG4gIGZvbnQtc2l6ZTogMjI7IH1cXG5cXG4uaDMge1xcbiAgZm9udC1zaXplOiAxNTsgfVxcblxcbi5oNCB7XFxuICBmb250LXNpemU6IDEyOyB9XFxuXFxuLmg1IHtcXG4gIGZvbnQtc2l6ZTogMTE7IH1cXG5cXG4uaDYge1xcbiAgZm9udC1zaXplOiAxMDsgfVxcblxcbi5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTQ7IH1cXG5cXG4uYm9keTIge1xcbiAgZm9udC1zaXplOiAxNzsgfVxcblxcbi5mb290bm90ZSB7XFxuICBmb250LXNpemU6IDEzOyB9XFxuXFxuLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSB7XFxuICBjb2xvcjogIzIxMjEyMTtcXG4gIGZvbnQtc2l6ZTogMTY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAxNjsgfVxcbiAgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSBMYWJlbCB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IH1cXG4gIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0gLnRodW1iIHtcXG4gICAgc3RyZXRjaDogZmlsbDtcXG4gICAgd2lkdGg6IDQwO1xcbiAgICBoZWlnaHQ6IDQwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE2OyB9XFxuICAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7IH1cXG4gIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0gLmxpc3QtZ3JvdXAtaXRlbS10ZXh0IHtcXG4gICAgY29sb3I6ICMwMjI3MzQ7XFxuICAgIGZvbnQtc2l6ZTogMTQ7IH1cXG5cXG4ucGFnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuXFxuLnByb2dyZXNzIHtcXG4gIGNvbG9yOiAjM0E1M0ZGO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JhYmFiYTsgfVxcblxcbi5zZWdtZW50ZWQtYmFyIHtcXG4gIGZvbnQtc2l6ZTogMTM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6ICMyMTIxMjE7XFxuICBzZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yOiAjM0E1M0ZGOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCwgLnNpZGVkcmF3ZXItY2VudGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7IH1cXG5cXG4uc2lkZWRyYXdlci1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG4gIGhlaWdodDogMTQ4O1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uc2lkZWRyYXdlci1sZWZ0IC5zaWRlZHJhd2VyLWhlYWRlciB7XFxuICBwYWRkaW5nOiAxNiAxNiAwIDE2OyB9XFxuXFxuLnNpZGVkcmF3ZXItY2VudGVyIC5zaWRlZHJhd2VyLWhlYWRlciB7XFxuICBwYWRkaW5nOiAyMCAxNSAwIDE1OyB9XFxuXFxuLnNpZGVkcmF3ZXItaGVhZGVyLWltYWdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4uc2lkZWRyYXdlci1sZWZ0IC5zaWRlZHJhd2VyLWhlYWRlci1pbWFnZSB7XFxuICBoZWlnaHQ6IDY0O1xcbiAgd2lkdGg6IDY0O1xcbiAgYm9yZGVyLXJhZGl1czogMzI7XFxuICBob3Jpem9udGFsLWFsaWduOiBsZWZ0O1xcbiAgbWFyZ2luLWJvdHRvbTogMzY7IH1cXG5cXG4uc2lkZWRyYXdlci1jZW50ZXIgLnNpZGVkcmF3ZXItaGVhZGVyLWltYWdlIHtcXG4gIGhlaWdodDogNzQ7XFxuICB3aWR0aDogNzQ7XFxuICBib3JkZXItcmFkaXVzOiAzNztcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDI0OyB9XFxuXFxuLnNpZGVkcmF3ZXItaGVhZGVyLWJyYW5kIHtcXG4gIGNvbG9yOiAjNzM3MzczOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1oZWFkZXItYnJhbmQge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMTQ7IH1cXG5cXG4uc2lkZWRyYXdlci1jZW50ZXIgLnNpZGVkcmF3ZXItaGVhZGVyLWJyYW5kIHtcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTU7IH1cXG5cXG4uc2lkZWRyYXdlci1saXN0LWl0ZW0ge1xcbiAgaGVpZ2h0OiA0ODtcXG4gIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9yaWVudGF0aW9uOiBob3Jpem9udGFsOyB9XFxuICAuc2lkZWRyYXdlci1saXN0LWl0ZW0gLnNpZGVkcmF3ZXItbGlzdC1pdGVtLWljb24ge1xcbiAgICB3aWR0aDogMjQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgaGVpZ2h0OiA0ODtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgfVxcbiAgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLmFjdGl2ZSB7XFxuICAgIGNvbG9yOiAjM0E1M0ZGO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4OyB9XFxuICAgIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS5hY3RpdmUgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLWljb24ge1xcbiAgICAgIGNvbG9yOiAjM0E1M0ZGOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvbiB7XFxuICBtYXJnaW46IDAgMTYgMCAxNjsgfVxcblxcbi5zaWRlZHJhd2VyLWNlbnRlciAuc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvbiB7XFxuICBtYXJnaW46IDAgMCAwIDE1OyB9XFxuXFxuLnNpZGVkcmF3ZXItbGlzdC1pdGVtLXRleHQge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDE1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItd2lkdGg6IDAuMTtcXG4gIHdpZHRoOiA4MCU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1saXN0LWl0ZW0tdGV4dCB7XFxuICBwYWRkaW5nLWxlZnQ6IDE2OyB9XFxuXFxuLnNpZGVkcmF3ZXItY2VudGVyIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS10ZXh0IHtcXG4gIHBhZGRpbmctbGVmdDogMTU7IH1cXG5cXG4uc2xpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7IH1cXG4gIC5zbGlkZXJbaXNFbmFibGVkPWZhbHNlXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICAgIGNvbG9yOiAjZTBlMGUwOyB9XFxuXFxuLnN3aXRjaFtjaGVja2VkPXRydWVdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7XFxuICBjb2xvcjogIzNBNTNGRjsgfVxcblxcbi5zd2l0Y2hbY2hlY2tlZD10cnVlXVtpc0VuYWJsZWQ9ZmFsc2VdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5zd2l0Y2hbaXNFbmFibGVkPWZhbHNlXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4udGFiLXZpZXcge1xcbiAgLypjb2xvcjogJHNlY29uZGFyeTsqL1xcbiAgc2VsZWN0ZWQtY29sb3I6ICMzMGJjZmY7XFxuICB0YWJzLWJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG4gIC50YWItdmlldyAudGFiLXZpZXctaXRlbSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIHRhYnMtYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcblxcbiNsb2dpbi1iYWNrZ3JvdW5kIHtcXG4gIG1hcmdpbi10b3A6IC0yMDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IH1cXG5cXG4ubG9naW4td3JhcCB7XFxuICBwYWRkaW5nOiAwIDQwOyB9XFxuXFxuLmxvZ28td3JhcCB7XFxuICBtYXJnaW46IDYwIDAgMTAgMDtcXG4gIHBhZGRpbmc6IDIwIDA7IH1cXG4gIC5sb2dvLXdyYXAgLmxvZ2luLWxvZ28ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMzA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgY29sb3I6ICMyMTIxMjE7XFxuICAgIG9wYWNpdHk6IC45OyB9XFxuICAubG9nby13cmFwIC5sb2dpbi1sb2dvLXN1YiB7XFxuICAgIGNvbG9yOiAjMjEyMTIxO1xcbiAgICBvcGFjaXR5OiAuODtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmxvZ2luLXdyYXBwZXIge1xcbiAgcGFkZGluZzogMjA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMzsgfVxcbiAgLmxvZ2luLXdyYXBwZXIgVGV4dEZpZWxkIHtcXG4gICAgcGFkZGluZzogMTAgMTA7XFxuICAgIG1hcmdpbjogMTAgMCAwIDA7IH1cXG5cXG4uZ28tYmFjayB7XFxuICBmb250LXNpemU6IDE0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICMyMTIxMjE7XFxuICBtYXJnaW4tdG9wOiAxMDsgfVxcblxcbi8qKlxcclxcbiAqIEltcG9ydCBhbGwgcGxhdGZvcm0gc3BlY2lmaWMgZmlsZXMgaGVyZVxcclxcbiAqL1xcbi5idG4ge1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdTRiBVSSBUZXh0IE1lZGl1bSc7XFxuICBmb250LXNpemU6IDE1OyB9XFxuXFxuLmJ0bi1vdXRsaW5lIHtcXG4gIGJvcmRlci13aWR0aDogMTsgfVxcblxcbi5idG4tcm91bmRlZC1zbSB7XFxuICBib3JkZXItcmFkaXVzOiA0OyB9XFxuXFxuLmJ0bi1yb3VuZGVkLWxnIHtcXG4gIGJvcmRlci1yYWRpdXM6IDE5OyB9XFxuXFxuLmZvcm0ge1xcbiAgZm9udC1mYW1pbHk6ICdTRiBVSSBUZXh0IFJlZ3VsYXInOyB9XFxuICAuZm9ybSAuaW5wdXQge1xcbiAgICBmb250LXNpemU6IDE1OyB9XFxuICAgIC5mb3JtIC5pbnB1dC5pbnB1dC1yb3VuZGVkIHtcXG4gICAgICBib3JkZXItcmFkaXVzOiAyNzsgfVxcblxcbi8qIFRoaXMgaXMgaGVyZSB0ZW1wb3JhcmlseSBiZWNhdXNlIF9pbmRleC5pb3Muc2NzcyBjYW5ub3QgYmUgZW1wdHkgKi9cXG4uaDEge1xcbiAgZm9udC1zaXplOiAzMjsgfVxcblxcbi5zbGlkZXIge1xcbiAgbWFyZ2luOiAxMCAxNTsgfVxcblxcbi5zaWRlZHJhd2VyLWxpc3QtaXRlbS1pY29uLCAuc2lkZWRyYXdlci1saXN0LWl0ZW0ge1xcbiAgY29sb3I6ICMwMjI3MzQ7IH1cXG5cXG4uc3dpdGNoIHtcXG4gIG1hcmdpbjogOCAxNTsgfVxcblxcbi5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0ge1xcbiAgcGFkZGluZzogMTYgMTUgMTYgMTU7IH1cXG4gIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0gLnRodW1iIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNTsgfVxcbiAgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcge1xcbiAgICBtYXJnaW4tYm90dG9tOiA1OyB9XFxuXFxuLnNlZ21lbnRlZC1iYXIge1xcbiAgbWFyZ2luOiAwIDE1O1xcbiAgY29sb3I6ICMzQTUzRkY7IH1cXG5cXG4uZmEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250QXdlc29tZVxcXCI7IH1cXG5cIiwgXCJcIl0pO1xuXG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vYXBwLnNjc3NcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic3R5bGVcIiwgcGF0aDogXCIuL2FwcC5zY3NzXCIgfSk7XG4gICAgfSk7XG59ICIsImltcG9ydCAncmVhY3QtaG90LWxvYWRlcic7IC8vIE11c3QgYmUgaW1wb3J0ZWQgYmVmb3JlIFJlYWN0IGFuZCBSZWFjdE5hdGl2ZVNjcmlwdC5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG4vKiBDb250cm9scyByZWFjdC1uYXRpdmVzY3JpcHQgbG9nIHZlcmJvc2l0eS4gdHJ1ZTogYWxsIGxvZ3M7IGZhbHNlOiBvbmx5IGVycm9yIGxvZ3MuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZ2xvYmFsLCAnX19ERVZfXycsIHsgdmFsdWU6IGZhbHNlIH0pO1xuaW1wb3J0ICogYXMgUmVhY3ROYXRpdmVTY3JpcHQgZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdFwiO1xuaW1wb3J0IEFwcENvbnRhaW5lciBmcm9tIFwiLi9jb21wb25lbnRzL0FwcENvbnRhaW5lclwiO1xuXG5leHBvcnQgY29uc3Qgcm9vdFJlZjogUmVhY3QuUmVmT2JqZWN0PGFueT4gPSBSZWFjdC5jcmVhdGVSZWY8YW55PigpO1xuXG5SZWFjdE5hdGl2ZVNjcmlwdC5zdGFydChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBBcHBDb250YWluZXIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvcndhcmRlZFJlZjogcm9vdFJlZlxuICAgICAgICB9LFxuICAgICAgICBudWxsXG4gICAgKSxcbiAgICAvKiBUaGlzIHJlZiBNVVNUIG1hdGNoIHRoZSByZWYgdGhhdCB5b3UgcGFzcyBpbnRvIHRoZSBiYXNlIGNvbXBvbmVudCBvZiB5b3VyIGFwcCBjb250YWluZXIuICovXG4gICAgcm9vdFJlZlxuKTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcclxcbiAqIENvbnZlbmllbnQgc2luZ2xlIGltcG9ydCBmb3IgbGlnaHQgdmFyaWFibGVzXFxyXFxuICogSW5jbHVkZXMgYmFzZSB2YXJpYWJsZXMgd2l0aCBsaWdodCBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxyXFxuICogTGlnaHQgdmFyaWFibGUgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcbiAqIFRoZW1lIHZhcmlhYmxlcyBvdmVycmlkZXNcXG4qKi9cXG4uZmEge1xcbiAgY29sb3I6ICMzQTUzRkY7IH1cXG5cXG4uaW5mbyB7XFxuICBmb250LXNpemU6IDIwOyB9XFxuXCIsIFwiXCJdKTtcblxuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyLnNjc3NcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic3R5bGVcIiwgcGF0aDogXCIuL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyLnNjc3NcIiB9KTtcbiAgICB9KTtcbn0gIiwiaW1wb3J0IHsgaG90IH0gZnJvbSAncmVhY3QtaG90LWxvYWRlci9yb290JztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgJFBhZ2UsICRMYWJlbCwgJEFjdGlvbkJhciwgJEdyaWRMYXlvdXQsICRGb3JtYXR0ZWRTdHJpbmcsICRTcGFuLCAkU3dpdGNoLCAkRnJhbWUsICRCdXR0b24sICRTdGFja0xheW91dCwgJERhdGVQaWNrZXIsICRUZXh0RmllbGQsICRTZWdtZW50ZWRCYXJJdGVtLCAkU2xpZGVyLCAkQWN0aW9uSXRlbSB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHRcIjtcbmltcG9ydCB7IEl0ZW1TcGVjIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2dyaWQtbGF5b3V0L2dyaWQtbGF5b3V0JztcbmltcG9ydCB7IEZyYW1lLCBQYWdlLCBDb2xvciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvZnJhbWUnO1xuaW1wb3J0IHsgUmVhY3RpZmllZCB9IGZyb20gJ34vUmVhY3RpZmllZC9SZWFjdGlmaWVkJztcblxuaW1wb3J0IHsgX0xhYmVsIGFzIExhYmVsQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L2NvbXBvbmVudHMvTGFiZWxcIjtcbmltcG9ydCB7XG4gICAgQnV0dG9uLFxuICAgIERhdGVQaWNrZXIsXG4gICAgRWRpdGFibGVUZXh0QmFzZSxcbiAgICBUZXh0RmllbGQsXG4gICAgSHRtbFZpZXcsXG4gICAgTGFiZWwsXG4gICAgTGlzdFBpY2tlcixcbiAgICBQbGFjZWhvbGRlcixcbiAgICBTY3JvbGxWaWV3LFxuICAgIFNlYXJjaEJhcixcbiAgICBTZWdtZW50ZWRCYXIsXG4gICAgU2xpZGVyLFxuICAgIFN3aXRjaCxcbiAgICBBY3Rpb25JdGVtXG59IGZyb20gJ3JlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L2NsaWVudC9FbGVtZW50UmVnaXN0cnknO1xuLy8gaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b24vYnV0dG9uJztcblxuY2xhc3MgTXlGYW5jeUJ1dHRvbiBleHRlbmRzIEJ1dHRvbiB7XG5cbn1cblxuXG4vLyBjb25zdCBNeUJ1dHRvbiA9IFJlYWN0aWZpZWQobmV3IEJ1dHRvbigpLCBcImJ1dHRvblwiKTtcblxuY29uc3QgTXlDb21wb25lbnQgPSBSZWFjdGlmaWVkKG5ldyBBY3Rpb25JdGVtKCkpOyBcbmludGVyZmFjZSBQcm9wcyB7XG4gICAgZm9yd2FyZGVkUmVmOiBSZWFjdC5SZWZPYmplY3Q8RnJhbWU+LFxufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuXG59XG5cbmNsYXNzIEFwcENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBhZ2VSZWY6IFJlYWN0LlJlZk9iamVjdDxQYWdlPiA9IFJlYWN0LmNyZWF0ZVJlZjxQYWdlPigpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgbXlGYW5jeUJ1dHRvblJlZjogUmVhY3QuUmVmT2JqZWN0PE15RmFuY3lCdXR0b24+ID0gUmVhY3QuY3JlYXRlUmVmPE15RmFuY3lCdXR0b24+KCk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBteURhdGVQaWNrZXJSZWYgPSBSZWFjdC5jcmVhdGVSZWY8RGF0ZVBpY2tlcj4oKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IG15RWRpdGFibGVUZXh0QmFzZVJlZiA9IFJlYWN0LmNyZWF0ZVJlZjxFZGl0YWJsZVRleHRCYXNlPigpOyAvLyAod29uJ3Qgc2hvdylcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuXG5cbiAgICAgICAgY29uc3QgZnJhbWU6IEZyYW1lID0gdGhpcy5wcm9wcy5mb3J3YXJkZWRSZWYuY3VycmVudCE7XG4gICAgICAgIGZyYW1lLm5hdmlnYXRlKHtcbiAgICAgICAgICAgIGNyZWF0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2U6IFBhZ2UgPSB0aGlzLnBhZ2VSZWYuY3VycmVudCE7XG4gICAgICAgICAgICAgICAgcGFnZS5hZGRDc3NGaWxlKFwiLi9jb21wb25lbnRzL0FwcENvbnRhaW5lci5zY3NzXCIpOyAvLyBQYXRoIGlzIHJlbGF0aXZlIHRvIHRoZSAnYXBwJyBmb2xkZXI7IG5vdCByZWxhdGl2ZSB0byB0aGlzIGZpbGUhXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICBjb25zdCBteUZhbmN5QnV0dG9uID0gdGhpcy5teUZhbmN5QnV0dG9uUmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICBteUZhbmN5QnV0dG9uLmJhY2tncm91bmRDb2xvciA9IG5ldyBDb2xvcihcInNpbHZlclwiKTtcbiAgICAgICAgICAgIG15RmFuY3lCdXR0b24ub24oXCJ0YXBcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0YXBcIik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICBjb25zdCBteURhdGVQaWNrZXIgPSB0aGlzLm15RGF0ZVBpY2tlclJlZi5jdXJyZW50O1xuICAgICAgICAgICAgbXlEYXRlUGlja2VyLmJhY2tncm91bmRDb2xvciA9IG5ldyBDb2xvcihcImdyZWVuXCIpO1xuICAgICAgICAgICAgbXlEYXRlUGlja2VyLm9uKFwidGFwXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGFhYXAhXCIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICovXG5cbiAgICAgICAgfSwyMDAwKVxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zdCB7IGZvcndhcmRlZFJlZiB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPCRGcmFtZSByZWY9e2ZvcndhcmRlZFJlZn0+XG4gICAgICAgICAgICAgICAgPCRQYWdlIHJlZj17dGhpcy5wYWdlUmVmfSBjbGFzc05hbWU9XCJwYWdlXCIgYWN0aW9uQmFySGlkZGVuPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgICAgIDwkQWN0aW9uQmFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCRBY3Rpb25JdGVtIHRleHQ9e1wiQ2hlY2sgdGhpcyBvdXRcIn0gb25UYXA9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRhcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNeUNvbXBvbmVudCB0ZXh0PXtcIm15IGNvbXBvbmVudCFcIn0gb25UYXA9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRhcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19Lz5cbiAgICAgICAgICAgICAgICAgICAgPC8kQWN0aW9uQmFyPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwkU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwkU3dpdGNoIG9uVG9nZ2xlPXsoY2hlY2tlZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2tlZDogXCIgKyBjaGVja2VkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBvblRhcD17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGFwXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvJFN0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgIDwvJFBhZ2U+XG4gICAgICAgICAgICA8LyRGcmFtZT5cbiAgICAgICAgKTtcbiAgICB9XG59XG4vLyBleHBvcnQgZGVmYXVsdCBBcHBDb250YWluZXI7XG5leHBvcnQgZGVmYXVsdCBob3QoQXBwQ29udGFpbmVyKTsgLy8gUmVwbGFjZSB0aGlzIGxpbmUgd2l0aCB0aGUgYWJvdmUgbGluZSBpZiB5b3Ugd2FudCB0byByZW1vdmUgaG90IGxvYWRpbmcuIl0sInNvdXJjZVJvb3QiOiIifQ==