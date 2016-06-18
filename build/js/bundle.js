(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var ResultsComponent = __webpack_require__(3);
	var InputComponent = __webpack_require__(5);
	var LoadingComponent = __webpack_require__(6);

	// Results in "Module build failed: CssSyntaxError"
	// But this is how you're supposed to use webpack css-loader
	// Why does leaving it out work fine?
	//require("css!./../css/style.css");
	if (typeof window !== 'undefined') {
	  __webpack_require__(7);
	}

	if (typeof React.initializeTouchEvents == 'function') React.initializeTouchEvents(true); // Removed in React 0.14

	var InstaTypeComponent = React.createClass({
	  displayName: 'InstaTypeComponent',

	  getInitialState: function getInitialState() {
	    return {
	      inputValue: '',
	      showResults: false, // Show or hide the ResultsComponent
	      loading: false, // Are we currently loading data from server?
	      results: [],
	      resultsId: null // Unique identifier for set of results (used by ResultsComponent.shouldComponentUpdate)
	    };
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      text: false,
	      limit: 10,
	      defaultInputValue: null,
	      placeholder: 'Search',
	      thumbStyle: 'square',
	      loadingIcon: '/images/loading.gif',
	      // Blur input ontouchstart.
	      // Fixes an phonegap/ios bug where input cursor doesn't show up on focus after previously blurring naturally
	      // Don't enable unless experiencing this bug
	      blurOnTouchStart: false
	    };
	  },
	  propTypes: {
	    limit: React.PropTypes.number,
	    placeholder: React.PropTypes.string,
	    thumbStyle: React.PropTypes.oneOf(['circle', 'square']),
	    requestHandler: React.PropTypes.func.isRequired,
	    selectedHandler: React.PropTypes.func.isRequired,
	    onBlur: React.PropTypes.func
	  },
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	    return this.state.resultsId !== nextState.resultsId || this.state.loading !== nextState.loading || this.state.showResults !== nextState.showResults;
	  },
	  loadResultsFromServer: function loadResultsFromServer(query) {

	    this.setState({ loading: true });

	    this.props.requestHandler(query, this.props.limit, function (data) {

	      // If inputValue changed prior to request completing don't bother to render
	      if (this.state.inputValue != query) {
	        return false;
	      }

	      // Truncate data to specific limit
	      data = data.slice(0, this.props.limit);

	      this.setState({
	        results: data,
	        resultsId: query,
	        loading: false
	      });
	    }.bind(this));
	  },
	  handleSelect: function handleSelect(selectedResult) {
	    this.props.selectedHandler(selectedResult);
	    this.clearState();
	  },
	  handleChange: function handleChange(query) {

	    clearTimeout(window.loadResultsTimeout);

	    if (query) {

	      this.setState({ inputValue: query });

	      window.loadResultsTimeout = setTimeout(function () {
	        this.loadResultsFromServer(query);
	      }.bind(this), 200);
	    } else {

	      this.clearState();
	    }
	  },
	  showResults: function showResults() {

	    if (this.state.showResults === false) this.setState({ showResults: true });

	    // Cancel any pending hide results timeout
	    clearTimeout(window.blurHideResultsTimeout);
	  },
	  hideResults: function hideResults() {

	    if (this.state.showResults === true) this.setState({ showResults: false });

	    // Cancel any pending hide results timeout
	    clearTimeout(window.blurHideResultsTimeout);
	  },
	  handleFocus: function handleFocus() {

	    this.showResults();
	  },

	  handleBlur: function handleBlur(event) {

	    // Hide results after a 400ms delay
	    // This gives us the ability to keep results open by canceling this timeout
	    // TODO: Find a cleaner way to do this
	    window.blurHideResultsTimeout = setTimeout(function () {

	      this.hideResults(); // Hide
	    }.bind(this), 400);

	    // Slight timeout so that selectedHandler() gets called before props.onBlur
	    // This is important because if props.onBlur causes Instatype component to be removed from DOM ...
	    // ... then selectedHandler() will never get called
	    if (this.props.onBlur) {
	      setTimeout(function () {
	        this.props.onBlur();
	      }.bind(this), 10);
	    }
	  },
	  // Attached to #instatype div onTouchStart
	  // Cancels delayed hiding of results (see this.handleBlur) so menu stays open when result tapped and scrolling
	  handleTouch: function handleTouch() {

	    // If we are NOT auto-blurring on touch, we need to do it here
	    if (this.props.blurOnTouchStart === false) this.blurInput();

	    // Prevents results from hiding
	    clearTimeout(window.blurHideResultsTimeout);
	  },
	  clearState: function clearState() {

	    this.setState({ results: [], resultsId: null, inputValue: '', loading: false });
	  },
	  blurInput: function blurInput() {

	    this.refs.inputComponent.refs.input.getDOMNode().blur();
	  },
	  componentDidMount: function componentDidMount() {

	    // Blur the input when the user touches (ontouchstart) anywhere on the screen.
	    // This fixes a nasty bug (on ios in phonegap webview) where a natural blur (due to clicking somewhere on screen) ...
	    // ... will result in the input's blinking caret not displaying next time the input is in focus.
	    // Triggering a blur manually ontouchstart seems to solve this problem.
	    // Capture phase (rather than bubbling phase) so that it's called before any other events
	    if (this.props.blurOnTouchStart === true) document.addEventListener('touchstart', this.blurInput, true);
	  },
	  componentWillUnmount: function componentWillUnmount() {

	    // Cancel timeout or we could end up setting state for component that isn't mounted
	    clearTimeout(window.blurHideResultsTimeout);

	    if (this.props.blurOnTouchStart === true) document.removeEventListener('touchstart', this.blurInput, true);
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      { id: 'instatype', onTouchStart: this.handleTouch },
	      React.createElement(
	        'div',
	        { className: 'input-wrapper' },
	        React.createElement(InputComponent, {
	          defaultValue: this.props.defaultInputValue,
	          placeholder: this.props.placeholder,
	          handleChange: this.handleChange,
	          handleFocus: this.handleFocus,
	          handleBlur: this.handleBlur,
	          ref: 'inputComponent' }),
	        this.state.loading && React.createElement(LoadingComponent, { icon: this.props.loadingIcon })
	      ),
	      this.state.showResults && React.createElement(ResultsComponent, {
	        data: this.state.results,
	        resultsId: this.state.resultsId,
	        handleSelect: this.handleSelect,
	        thumbStyle: this.props.thumbStyle })
	    );
	  }
	});

	module.exports = InstaTypeComponent;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var Result = __webpack_require__(4);

	var ResultsComponent = React.createClass({
	  displayName: 'ResultsComponent',


	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	    if (this.props.resultsId || nextProps.resultsId) {
	      // If we are passing a resultsId (unique identifier for the results)
	      return this.props.resultsId !== nextProps.resultsId; // Return true if resultsId has changed
	    } else {
	        return true; // Always try to update if we have no resultsId to compare
	      }
	  },
	  render: function render() {

	    var resultNodes = this.props.data.map(function (result) {
	      return React.createElement(
	        Result,
	        { image: result.image, handleSelect: this.props.handleSelect, data: result, key: result.id },
	        result.name
	      );
	    }.bind(this));

	    var resultsClass = 'results thumb-' + this.props.thumbStyle;

	    return React.createElement(
	      'div',
	      { className: 'resultsContainer' },
	      this.props.data.length > 0 && React.createElement(
	        'ul',
	        { className: resultsClass },
	        resultNodes
	      )
	    );
	  }
	});

	module.exports = ResultsComponent;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);

	var Result = React.createClass({
	  displayName: 'Result',

	  getInitialState: function getInitialState() {
	    return {
	      isHovered: false
	    };
	  },
	  handleSelect: function handleSelect(event) {
	    this.props.handleSelect(this.props.data);
	    event.preventDefault();
	    event.stopPropagation();
	  },
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	    return !this.props.data.id || // Always update if we have no data.id to identify whether result changed
	    this.props.data.id !== nextProps.data.id || // Update if data.id did change
	    this.state.isHovered !== nextState.isHovered; // Update if hover state changed
	  },
	  onMouseOver: function onMouseOver() {
	    this.setState({ isHovered: true });
	  },
	  onMouseLeave: function onMouseLeave() {
	    this.setState({ isHovered: false });
	  },
	  render: function render() {

	    var className = 'clearfix';
	    if (this.state.isHovered) className += ' hovered';

	    return React.createElement(
	      'li',
	      { className: className, onClick: this.handleSelect, onMouseOver: this.onMouseOver, onMouseLeave: this.onMouseLeave },
	      this.props.image && React.createElement('img', { src: this.props.image }),
	      React.createElement(
	        'div',
	        null,
	        this.props.children
	      )
	    );
	  }
	});

	module.exports = Result;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(2);

	var InputComponent = React.createClass({
	  displayName: "InputComponent",

	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	    return false;
	  },
	  handleChange: function handleChange(event) {
	    this.props.handleChange(event.target.value);
	  },
	  handleFocus: function handleFocus(event) {
	    this.props.handleFocus(event);
	  },
	  handleBlur: function handleBlur(event) {
	    this.props.handleBlur(event);
	  },
	  render: function render() {
	    return React.createElement("input", {
	      type: "text",
	      defaultValue: this.props.defaultValue,
	      autoCorrect: "off",
	      autoComplete: "off",
	      autoCapitalize: "off",
	      placeholder: this.props.placeholder,
	      className: "input-typeahead",
	      onChange: this.handleChange,
	      onFocus: this.handleFocus,
	      onBlur: this.handleBlur,
	      ref: "input" });
	  }
	});

	module.exports = InputComponent;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(2);

	var LoadingComponent = React.createClass({
	    displayName: "LoadingComponent",

	    shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	        return false;
	    },
	    render: function render() {
	        return React.createElement("img", { className: "loading-icon", src: this.props.icon });
	    }
	});

	module.exports = LoadingComponent;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports


	// module
	exports.push([module.id, "#instatype * {\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n}\n\n#instatype {\n    position: relative;\n    display: block;\n    width: 100%;\n}\n\n#instatype .input-wrapper {\n    position: relative;\n}\n\n#instatype .input-typeahead {\n    width: 100%;\n    margin: 0;\n    font-size: 2em;\n    padding-left: 0.5em;\n    padding-top: 0.5em;\n    padding-bottom: 0.5em;\n    border-radius: 0;\n}\n\n#instatype .loading-icon{\n    position: absolute;\n    height: 100%;\n    padding-top: 1em;\n    padding-bottom: 1em;\n    right: 1em;\n}\n\n#instatype .resultsContainer {\n    position: absolute;\n    z-index: 9997;\n    width: 100%;\n    margin: 0;\n    background-color:red;\n}\n\n#instatype ul.results{\n    position: absolute;\n    z-index: 9999;\n    top:0;\n    width:100%;\n    margin: 0;\n    padding: 0;\n    background-color: #fff;\n    border: 1px solid #ccc;\n    border-top: none;\n    list-style-type: none;\n}\n\n#instatype ul.results.hide, ul.results.empty{\n    display: none;\n}\n\n#instatype ul.results > li{\n    line-height: 4em;\n    padding: 0.5em 0 0.5em 1em;\n    position: relative;\n    cursor: pointer;\n}\n\n#instatype ul.results > li.hovered{\n    background-color: #FFFEE2;\n}\n\n#instatype ul.results > li > img{\n    float: left;\n    width: 4em;\n    height: 4em;\n    margin-right: 1em;\n}\n\n#instatype ul.results.thumb-circle > li > img{\n    border-radius: 4em;\n}\n\n#instatype ul.results > li > div{\n    float: left;\n    font-size: 2em;\n}\n\n#instatype .clearfix:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n", ""]);

	// exports


/***/ },
/* 9 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;