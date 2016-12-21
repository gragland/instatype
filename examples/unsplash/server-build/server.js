/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/assets/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _regenerator = __webpack_require__(3);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _asyncToGenerator2 = __webpack_require__(4);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _path = __webpack_require__(5);

	var _path2 = _interopRequireDefault(_path);

	var _express = __webpack_require__(6);

	var _express2 = _interopRequireDefault(_express);

	var _compression = __webpack_require__(7);

	var _compression2 = _interopRequireDefault(_compression);

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(9);

	var _reactRouter = __webpack_require__(10);

	var _reactHelmet = __webpack_require__(11);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _routes = __webpack_require__(12);

	var _routes2 = _interopRequireDefault(_routes);

	var _Layout = __webpack_require__(91);

	var _Layout2 = _interopRequireDefault(_Layout);

	var _App = __webpack_require__(13);

	var _App2 = _interopRequireDefault(_App);

	var _recursive = __webpack_require__(92);

	var _recursive2 = _interopRequireDefault(_recursive);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var server = (0, _express2.default)();

	server.use((0, _compression2.default)()).use('/assets', _express2.default.static(_path2.default.join(__dirname, './../public/assets'), { index: false, maxAge: 31536000000 })).use(function (req, res, next) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function () {
	    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(error, redirectLocation, renderProps) {
	      var data, body, head;
	      return _regenerator2.default.wrap(function _callee$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              if (!error) {
	                _context.next = 4;
	                break;
	              }

	              res.status(500).send(error.message);
	              _context.next = 19;
	              break;

	            case 4:
	              if (!redirectLocation) {
	                _context.next = 8;
	                break;
	              }

	              res.redirect(301, redirectLocation.pathname + redirectLocation.search);
	              _context.next = 19;
	              break;

	            case 8:
	              if (renderProps) {
	                _context.next = 12;
	                break;
	              }

	              // Should never happen if we have a catch-all (*) error page route
	              res.status(404).send('Page not found');
	              _context.next = 19;
	              break;

	            case 12:
	              _context.next = 14;
	              return (0, _recursive.resolve)(_reactRouter.RouterContext, renderProps);

	            case 14:
	              data = _context.sent;


	              // Render Route component (recursive)
	              //const data = await resolve(RouterContext, renderProps, true);

	              console.log('DATA FETCHED VIA RESOLVE()');

	              body = (0, _server.renderToString)(_react2.default.createElement(
	                _recursive2.default,
	                { data: data },
	                _react2.default.createElement(_reactRouter.RouterContext, renderProps)
	              ));

	              // Extract data for page <head> (title, meta, scripts)
	              // See: https://github.com/nfl/react-helmet#server-usage

	              head = _reactHelmet2.default.rewind();

	              // Render layout and pass in markup, serverData fetched server-side, and head
	              // We use renderToStaticMarkup for layout so react-id dom attributes aren't added

	              res.send((0, _server.renderToStaticMarkup)(_react2.default.createElement(_Layout2.default, { body: body, head: head })));

	            case 19:
	            case 'end':
	              return _context.stop();
	          }
	        }
	      }, _callee, undefined);
	    }));

	    return function (_x, _x2, _x3) {
	      return _ref.apply(this, arguments);
	    };
	  }());
	}).listen(process.env.PORT || 3000, function (err, result) {
	  if (err) {
	    console.log(err);
	  }
	  console.log('Server started');
	});

	module.exports = server;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/regenerator");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("react-helmet");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(10);

	var _App = __webpack_require__(13);

	var _App2 = _interopRequireDefault(_App);

	var _About = __webpack_require__(89);

	var _About2 = _interopRequireDefault(_About);

	var _ = __webpack_require__(90);

	var _2 = _interopRequireDefault(_);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var routes = _react2.default.createElement(
	  'div',
	  null,
	  _react2.default.createElement(_reactRouter.Route, { path: '/', component: _App2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/about', component: _About2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '*', component: _2.default })
	);

	exports.default = routes;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _regenerator = __webpack_require__(3);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _asyncToGenerator2 = __webpack_require__(4);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _getPrototypeOf = __webpack_require__(14);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(15);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(16);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(17);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(18);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp;

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var _reactHelmet = __webpack_require__(11);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _instatype = __webpack_require__(19);

	var _instatype2 = _interopRequireDefault(_instatype);

	var _throttle = __webpack_require__(26);

	var _throttle2 = _interopRequireDefault(_throttle);

	var _reactSimpleGrid = __webpack_require__(27);

	var _reactSimpleGrid2 = _interopRequireDefault(_reactSimpleGrid);

	var _Photo = __webpack_require__(33);

	var _Photo2 = _interopRequireDefault(_Photo);

	var _Infinite = __webpack_require__(38);

	var _Infinite2 = _interopRequireDefault(_Infinite);

	var _ToTop = __webpack_require__(40);

	var _ToTop2 = _interopRequireDefault(_ToTop);

	var _api = __webpack_require__(42);

	var _api2 = _interopRequireDefault(_api);

	var _reactRouter = __webpack_require__(10);

	var _Test = __webpack_require__(44);

	var _Test2 = _interopRequireDefault(_Test);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var App = (_temp = _class = function (_React$PureComponent) {
	  (0, _inherits3.default)(App, _React$PureComponent);

	  function App(props) {
	    (0, _classCallCheck3.default)(this, App);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

	    _this.state = props;

	    _this.getUsersThrottled = (0, _throttle2.default)(_this.getUsers.bind(_this), 300);
	    _this.userSelectedHandler = _this.userSelectedHandler.bind(_this);
	    _this.getNextPage = _this.getNextPage.bind(_this);
	    _this.resetPage = function () {
	      return _this.setState(App.defaultProps);
	    };
	    return _this;
	  }

	  (0, _createClass3.default)(App, [{
	    key: 'getNextPage',
	    value: function () {
	      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
	        var _state, section, page, username, photos, loading, pageData;

	        return _regenerator2.default.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _state = this.state, section = _state.section, page = _state.page, username = _state.username, photos = _state.photos, loading = _state.loading;

	                if (!loading) {
	                  _context.next = 3;
	                  break;
	                }

	                return _context.abrupt('return', false);

	              case 3:

	                this.setState({ loading: true });

	                _context.next = 6;
	                return App.getPage(section, page + 1, username, photos);

	              case 6:
	                pageData = _context.sent;


	                this.setState(pageData);

	              case 8:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this);
	      }));

	      function getNextPage() {
	        return _ref.apply(this, arguments);
	      }

	      return getNextPage;
	    }()

	    // Instatype request handler

	  }, {
	    key: 'getUsers',
	    value: function () {
	      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(query, limit, callback) {
	        var users, usersWithProps;
	        return _regenerator2.default.wrap(function _callee2$(_context2) {
	          while (1) {
	            switch (_context2.prev = _context2.next) {
	              case 0:

	                this.setState({ loadingUsers: true });

	                _context2.next = 3;
	                return _api2.default.getUsers(query);

	              case 3:
	                users = _context2.sent;


	                // Give each user a 'name' and 'image' for Instatype
	                usersWithProps = users.map(function (user) {
	                  user.name = user.name; // Redundant
	                  user.image = user.profile_image.medium;
	                  return user;
	                });


	                this.setState({ loadingUsers: false });

	                callback(usersWithProps);

	              case 7:
	              case 'end':
	                return _context2.stop();
	            }
	          }
	        }, _callee2, this);
	      }));

	      function getUsers(_x, _x2, _x3) {
	        return _ref2.apply(this, arguments);
	      }

	      return getUsers;
	    }()

	    // Instatype selected handler

	  }, {
	    key: 'userSelectedHandler',
	    value: function () {
	      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(user) {
	        var pageData;
	        return _regenerator2.default.wrap(function _callee3$(_context3) {
	          while (1) {
	            switch (_context3.prev = _context3.next) {
	              case 0:

	                this.resetPage();

	                this.refs.instatype.refs.inputComponent.refs.input.value = '';
	                _context3.next = 4;
	                return App.getPage('user', 1, user.username);

	              case 4:
	                pageData = _context3.sent;

	                this.setState(pageData);

	              case 6:
	              case 'end':
	                return _context3.stop();
	            }
	          }
	        }, _callee3, this);
	      }));

	      function userSelectedHandler(_x4) {
	        return _ref3.apply(this, arguments);
	      }

	      return userSelectedHandler;
	    }()
	  }, {
	    key: 'render',
	    value: function render() {
	      var _state2 = this.state,
	          photos = _state2.photos,
	          page = _state2.page,
	          atEnd = _state2.atEnd,
	          loading = _state2.loading,
	          loadingUsers = _state2.loadingUsers;

	      // Grid options for different size screens

	      var photoGridBreakPoints = [{ maxWidth: 400, blocksPerRow: 2, spacing: 1 }, { maxWidth: 700, blocksPerRow: 2, spacing: 2 }, { maxWidth: 1100, blocksPerRow: 3, spacing: 3 }];

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_reactHelmet2.default, { title: 'Unsplash Demo' }),
	        photos && photos.length && _react2.default.createElement(
	          'span',
	          null,
	          _react2.default.createElement(_Test2.default, { parentCount: photos.length }),
	          _react2.default.createElement(_Test2.default, { parentCount: photos.length })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'navbar' },
	          _react2.default.createElement(_instatype2.default, {
	            placeholder: 'Search Unsplash',
	            requestHandler: this.getUsersThrottled,
	            selectedHandler: this.userSelectedHandler,
	            limit: 10,
	            thumbStyle: 'circle',
	            ref: 'instatype' })
	        ),
	        !loadingUsers && _react2.default.createElement(
	          'div',
	          { style: { position: 'absolute', top: '3.6em', right: '4em' } },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/about', style: { textDecoration: 'none', color: '#87b8b9', fontSize: '1.3em' } },
	            'About'
	          )
	        ),
	        photos && photos.length > 0 && _react2.default.createElement(
	          _Infinite2.default,
	          { requestHandler: this.getNextPage, atEnd: atEnd },
	          _react2.default.createElement(
	            _reactSimpleGrid2.default,
	            { blocksPerRow: 4, spacing: 5, breakPoints: photoGridBreakPoints, passBlockWidth: true, hideOuterSpacing: true },
	            photos.map(function (photo) {
	              return _react2.default.createElement(_Photo2.default, { data: photo, key: photo.id });
	            })
	          )
	        ),
	        photos && photos.length === 0 && _react2.default.createElement(
	          'div',
	          { className: 'message' },
	          'This user has no photos \uD83D\uDE41'
	        ),
	        loading && !page && _react2.default.createElement(
	          'div',
	          { className: 'message' },
	          'Loading ...'
	        ),
	        _react2.default.createElement(_ToTop2.default, null)
	      );
	    }
	  }], [{
	    key: 'getInitialProps',


	    // Get initial page data as props
	    // Component will re-mount
	    value: function () {
	      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
	        return _regenerator2.default.wrap(function _callee4$(_context4) {
	          while (1) {
	            switch (_context4.prev = _context4.next) {
	              case 0:
	                _context4.next = 2;
	                return App.getPage('popular', 2);

	              case 2:
	                return _context4.abrupt('return', _context4.sent);

	              case 3:
	              case 'end':
	                return _context4.stop();
	            }
	          }
	        }, _callee4, this);
	      }));

	      function getInitialProps() {
	        return _ref4.apply(this, arguments);
	      }

	      return getInitialProps;
	    }()
	  }, {
	    key: 'getPage',
	    value: function () {
	      var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(section, page, username, currPhotos) {
	        var nextPhotos;
	        return _regenerator2.default.wrap(function _callee5$(_context5) {
	          while (1) {
	            switch (_context5.prev = _context5.next) {
	              case 0:
	                nextPhotos = void 0;
	                _context5.t0 = section;
	                _context5.next = _context5.t0 === 'popular' ? 4 : _context5.t0 === 'user' ? 8 : 11;
	                break;

	              case 4:
	                _context5.next = 6;
	                return _api2.default.getPopularPhotos(page);

	              case 6:
	                nextPhotos = _context5.sent;
	                return _context5.abrupt('break', 11);

	              case 8:
	                _context5.next = 10;
	                return _api2.default.getUserPhotos(username, page);

	              case 10:
	                nextPhotos = _context5.sent;

	              case 11:
	                return _context5.abrupt('return', {
	                  section: section,
	                  photos: currPhotos ? currPhotos.concat(nextPhotos) : nextPhotos,
	                  username: section === 'user' ? username : null,
	                  page: page,
	                  loading: false,
	                  atEnd: nextPhotos.length < _api2.default.photosPerPage
	                });

	              case 12:
	              case 'end':
	                return _context5.stop();
	            }
	          }
	        }, _callee5, this);
	      }));

	      function getPage(_x5, _x6, _x7, _x8) {
	        return _ref5.apply(this, arguments);
	      }

	      return getPage;
	    }()
	  }]);
	  return App;
	}(_react2.default.PureComponent), _class.displayName = 'App', _temp);
	;

	App.defaultProps = {
	  section: null,
	  photos: null,
	  username: null,
	  page: null,
	  loading: true,
	  atEnd: null
	};

	exports.default = App;

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/createClass");

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/inherits");

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var _results = __webpack_require__(20);

	var _results2 = _interopRequireDefault(_results);

	var _input = __webpack_require__(22);

	var _input2 = _interopRequireDefault(_input);

	var _loading = __webpack_require__(23);

	var _loading2 = _interopRequireDefault(_loading);

	var _style = __webpack_require__(25);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// For older versions of React (deprecated in 0.14)
	if (typeof _react2.default.initializeTouchEvents === 'function') {
	  _react2.default.initializeTouchEvents(true);
	}

	var Instatype = function (_React$PureComponent) {
	  _inherits(Instatype, _React$PureComponent);

	  function Instatype(props) {
	    _classCallCheck(this, Instatype);

	    var _this = _possibleConstructorReturn(this, (Instatype.__proto__ || Object.getPrototypeOf(Instatype)).call(this, props));

	    _this.state = {
	      inputValue: '', // Current value of input
	      showResults: false, // Show or hide results
	      loading: false, // Are we currently loading data from server?
	      results: [], // Data populating the results dropdown
	      resultsQuery: null // Search string for displayed results
	    };

	    _this.loadResultsFromServer = _this.loadResultsFromServer.bind(_this);
	    _this.handleSelect = _this.handleSelect.bind(_this);
	    _this.handleChange = _this.handleChange.bind(_this);
	    _this.showResults = _this.showResults.bind(_this);
	    _this.hideResults = _this.hideResults.bind(_this);
	    _this.handleFocus = _this.handleFocus.bind(_this);
	    _this.handleBlur = _this.handleBlur.bind(_this);
	    _this.handleTouch = _this.handleTouch.bind(_this);
	    _this.clearState = _this.clearState.bind(_this);
	    _this.blurInput = _this.blurInput.bind(_this);
	    _this.handleBlur = _this.handleBlur.bind(_this);
	    return _this;
	  }

	  _createClass(Instatype, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {

	      // Blur the input when the user touches (ontouchstart) anywhere on the screen.
	      // This fixes a nasty bug (on ios in phonegap webview) where a natural blur (due to clicking somewhere on screen) ...
	      // ... will result in the input's blinking caret not displaying next time the input is in focus.
	      // Triggering a blur manually ontouchstart seems to solve this problem.
	      // Capture phase (rather than bubbling phase) so that it's called before any other events
	      if (this.props.blurOnTouchStart === true) {
	        document.addEventListener('touchstart', this.blurInput, true);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {

	      // Cancel timeout or we could end up setting state for component that isn't mounted
	      clearTimeout(window.blurHideResultsTimeout);

	      if (this.props.blurOnTouchStart === true) {
	        document.removeEventListener('touchstart', this.blurInput, true);
	      }
	    }
	  }, {
	    key: 'loadResultsFromServer',
	    value: function loadResultsFromServer(query) {
	      var _this2 = this;

	      this.setState({ loading: true });

	      this.props.requestHandler(query, this.props.limit, function (data) {

	        // If inputValue changed prior to request completing don't bother to render
	        if (_this2.state.inputValue != query) {
	          return false;
	        }

	        // Truncate data to specific limit
	        data = data.slice(0, _this2.props.limit);

	        _this2.setState({
	          results: data,
	          resultsQuery: query,
	          loading: false
	        });
	      });
	    }
	  }, {
	    key: 'handleSelect',
	    value: function handleSelect(selectedResult) {
	      this.props.selectedHandler(selectedResult);
	      this.clearState();
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(query) {
	      var _this3 = this;

	      clearTimeout(window.loadResultsTimeout);

	      if (query) {

	        this.setState({ inputValue: query });

	        window.loadResultsTimeout = setTimeout(function () {
	          _this3.loadResultsFromServer(query);
	        }, 200);
	      } else {

	        this.clearState();
	      }
	    }
	  }, {
	    key: 'showResults',
	    value: function showResults() {

	      if (this.state.showResults === false) {
	        this.setState({ showResults: true });
	      }

	      // Cancel any pending hide results timeout
	      clearTimeout(window.blurHideResultsTimeout);
	    }
	  }, {
	    key: 'hideResults',
	    value: function hideResults() {

	      if (this.state.showResults === true) {
	        this.setState({ showResults: false });
	      }

	      // Cancel any pending hide results timeout
	      clearTimeout(window.blurHideResultsTimeout);
	    }
	  }, {
	    key: 'handleFocus',
	    value: function handleFocus() {
	      this.showResults();
	    }
	  }, {
	    key: 'handleBlur',
	    value: function handleBlur(event) {
	      var _this4 = this;

	      // Hide results after a 400ms delay
	      // This gives us the ability to keep results open by canceling this timeout
	      // TODO: Find a cleaner way to do this
	      window.blurHideResultsTimeout = setTimeout(function () {
	        _this4.hideResults(); // Hide
	      }, 400);

	      // Slight timeout so that selectedHandler() gets called before props.onBlur
	      // This is important because if props.onBlur causes Instatype component to be removed from DOM ...
	      // ... then selectedHandler() will never get called
	      if (this.props.onBlur) {
	        setTimeout(function () {
	          _this4.props.onBlur();
	        }, 10);
	      }
	    }

	    // Attached to #instatype div onTouchStart
	    // Cancels delayed hiding of results (see this.handleBlur) so menu stays open when result tapped and scrolling

	  }, {
	    key: 'handleTouch',
	    value: function handleTouch() {

	      // If we are NOT auto-blurring on touch, we need to do it here
	      if (this.props.blurOnTouchStart === false) {
	        this.blurInput();
	      }

	      // Prevents results from hiding
	      clearTimeout(window.blurHideResultsTimeout);
	    }
	  }, {
	    key: 'clearState',
	    value: function clearState() {
	      this.setState({
	        results: [],
	        resultsQuery: null,
	        inputValue: '',
	        loading: false
	      });
	    }
	  }, {
	    key: 'blurInput',
	    value: function blurInput() {
	      this.refs.inputComponent.refs.input.blur();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          defaultInputValue = _props.defaultInputValue,
	          placeholder = _props.placeholder,
	          loadingIcon = _props.loadingIcon,
	          thumbStyle = _props.thumbStyle;
	      var _state = this.state,
	          results = _state.results,
	          resultsQuery = _state.resultsQuery,
	          showResults = _state.showResults,
	          loading = _state.loading;


	      return _react2.default.createElement(
	        'div',
	        { id: 'instatype', onTouchStart: this.handleTouch },
	        _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _style2.default } }),
	        _react2.default.createElement(
	          'div',
	          { className: 'input-wrapper' },
	          _react2.default.createElement(_input2.default, {
	            defaultValue: defaultInputValue,
	            placeholder: placeholder,
	            handleChange: this.handleChange,
	            handleFocus: this.handleFocus,
	            handleBlur: this.handleBlur,
	            ref: 'inputComponent' }),
	          loading && _react2.default.createElement(_loading2.default, { icon: loadingIcon || undefined })
	        ),
	        showResults && _react2.default.createElement(_results2.default, {
	          data: results,
	          resultsId: resultsQuery,
	          handleSelect: this.handleSelect,
	          thumbStyle: thumbStyle })
	      );
	    }
	  }]);

	  return Instatype;
	}(_react2.default.PureComponent);

	;

	Instatype.propTypes = {
	  limit: _react2.default.PropTypes.number,
	  defaultInputValue: _react2.default.PropTypes.string,
	  placeholder: _react2.default.PropTypes.string,
	  thumbStyle: _react2.default.PropTypes.oneOf(['circle', 'square']),
	  loadingIcon: _react2.default.PropTypes.string,
	  blurOnTouchStart: _react2.default.PropTypes.bool,
	  onBlur: _react2.default.PropTypes.func,
	  requestHandler: _react2.default.PropTypes.func.isRequired,
	  selectedHandler: _react2.default.PropTypes.func.isRequired
	};

	Instatype.defaultProps = {
	  limit: 10,
	  defaultInputValue: null,
	  placeholder: 'Search',
	  thumbStyle: 'square',
	  loadingIcon: null,
	  // Blur input ontouchstart. 
	  // Fixes an phonegap/ios bug where input cursor doesn't show up on focus after previously blurring naturally
	  // Don't enable unless experiencing this bug
	  blurOnTouchStart: false
	};

	// NOTE: Don't do an ES6 "export default Instatype" 
	// Otherwise our standalone browser script /dist/instatype.js has the component at instatype.default (rather then just instatype)
	module.exports = Instatype;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var _result = __webpack_require__(21);

	var _result2 = _interopRequireDefault(_result);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Results = function (_React$PureComponent) {
	  _inherits(Results, _React$PureComponent);

	  function Results(props) {
	    _classCallCheck(this, Results);

	    return _possibleConstructorReturn(this, (Results.__proto__ || Object.getPrototypeOf(Results)).call(this, props));
	  }

	  _createClass(Results, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          data = _props.data,
	          handleSelect = _props.handleSelect,
	          thumbStyle = _props.thumbStyle;


	      return _react2.default.createElement(
	        'div',
	        { className: 'resultsContainer' },
	        data && data.length > 0 && _react2.default.createElement(
	          'ul',
	          { className: 'results thumb-' + thumbStyle },
	          data.map(function (result, i) {
	            return _react2.default.createElement(
	              _result2.default,
	              { image: result.image, handleSelect: handleSelect, data: result, key: 'result-' + (result.id || i) },
	              result.name
	            );
	          })
	        )
	      );
	    }
	  }]);

	  return Results;
	}(_react2.default.PureComponent);

	;

	Results.propTypes = {
	  data: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
	    image: _react2.default.PropTypes.string,
	    name: _react2.default.PropTypes.string.isRequired
	  })),
	  handleSelect: _react2.default.PropTypes.func.isRequired,
	  thumbStyle: _react2.default.PropTypes.string.isRequired
	};

	exports.default = Results;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Result = function (_React$PureComponent) {
	  _inherits(Result, _React$PureComponent);

	  function Result(props) {
	    _classCallCheck(this, Result);

	    var _this = _possibleConstructorReturn(this, (Result.__proto__ || Object.getPrototypeOf(Result)).call(this, props));

	    _this.state = { isHovered: false };
	    _this.handleSelect = _this.handleSelect.bind(_this);
	    _this.onMouseOver = _this.onMouseOver.bind(_this);
	    _this.onMouseLeave = _this.onMouseLeave.bind(_this);
	    return _this;
	  }

	  _createClass(Result, [{
	    key: 'handleSelect',
	    value: function handleSelect(event) {
	      this.props.handleSelect(this.props.data);
	      event.preventDefault();
	      event.stopPropagation();
	    }
	  }, {
	    key: 'onMouseOver',
	    value: function onMouseOver() {
	      this.setState({ isHovered: true });
	    }
	  }, {
	    key: 'onMouseLeave',
	    value: function onMouseLeave() {
	      this.setState({ isHovered: false });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          image = _props.image,
	          children = _props.children;
	      var isHovered = this.state.isHovered;


	      return _react2.default.createElement(
	        'li',
	        { className: (isHovered ? 'hovered' : '') + ' clearfix', onClick: this.handleSelect, onMouseOver: this.onMouseOver, onMouseLeave: this.onMouseLeave },
	        image && _react2.default.createElement('img', { src: image }),
	        _react2.default.createElement(
	          'div',
	          null,
	          children
	        )
	      );
	    }
	  }]);

	  return Result;
	}(_react2.default.PureComponent);

	;

	Result.propTypes = {
	  data: _react2.default.PropTypes.object.isRequired,
	  image: _react2.default.PropTypes.string,
	  children: _react2.default.PropTypes.node
	};

	exports.default = Result;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Input = function (_React$Component) {
	  _inherits(Input, _React$Component);

	  function Input(props) {
	    _classCallCheck(this, Input);

	    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

	    _this.handleChange = _this.handleChange.bind(_this);
	    _this.handleFocus = _this.handleFocus.bind(_this);
	    _this.handleBlur = _this.handleBlur.bind(_this);
	    return _this;
	  }

	  // TODO: Remove shouldComponentUpdate
	  // Make this a controlled input and use PureComponent class


	  _createClass(Input, [{
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return false;
	    }
	  }, {
	    key: "handleChange",
	    value: function handleChange(event) {
	      this.props.handleChange(event.target.value);
	    }
	  }, {
	    key: "handleFocus",
	    value: function handleFocus(event) {
	      this.props.handleFocus(event);
	    }
	  }, {
	    key: "handleBlur",
	    value: function handleBlur(event) {
	      this.props.handleBlur(event);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _props = this.props,
	          defaultValue = _props.defaultValue,
	          placeholder = _props.placeholder;


	      return _react2.default.createElement("input", {
	        type: "text",
	        defaultValue: defaultValue,
	        autoCorrect: "off",
	        autoComplete: "off",
	        autoCapitalize: "off",
	        placeholder: placeholder,
	        className: "input-typeahead",
	        onChange: this.handleChange,
	        onFocus: this.handleFocus,
	        onBlur: this.handleBlur,
	        ref: "input" });
	    }
	  }]);

	  return Input;
	}(_react2.default.Component);

	;

	Input.propTypes = {
	  handleChange: _react2.default.PropTypes.func.isRequired,
	  handleFocus: _react2.default.PropTypes.func,
	  handleBlur: _react2.default.PropTypes.func,
	  defaultValue: _react2.default.PropTypes.string,
	  placeholder: _react2.default.PropTypes.string
	};

	exports.default = Input;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var _loading = __webpack_require__(24);

	var _loading2 = _interopRequireDefault(_loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Loading = function Loading(_ref) {
	  var icon = _ref.icon;
	  return _react2.default.createElement('img', { className: 'loading-icon', src: icon });
	};

	Loading.propTypes = {
	  loadingIcon: _react2.default.PropTypes.string
	};

	Loading.defaultProps = {
	  icon: _loading2.default
	};

	exports.default = Loading;

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ4IiBoZWlnaHQ9IjE0OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIGNsYXNzPSJ1aWwtZGVmYXVsdCI+PHBhdGggZmlsbD0ibm9uZSIgY2xhc3M9ImJrIiBkPSJNMCAwaDEwMHYxMDBIMHoiLz48cmVjdCB4PSI0Ni41IiB5PSI0MCIgd2lkdGg9IjciIGhlaWdodD0iMjAiIHJ4PSI1IiByeT0iNSIgZmlsbD0iIzI0MjQyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMzApIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMCIgZHVyPSIxcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPjwvcmVjdD48cmVjdCB4PSI0Ni41IiB5PSI0MCIgd2lkdGg9IjciIGhlaWdodD0iMjAiIHJ4PSI1IiByeT0iNSIgZmlsbD0iIzI0MjQyNCIgdHJhbnNmb3JtPSJyb3RhdGUoMzAgMTA1Ljk4IDY1KSI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAiIGR1cj0iMXMiIGJlZ2luPSIwLjA4MzMzMzMzMzMzMzMzMzMzcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyNDI0MjQiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAiIGR1cj0iMXMiIGJlZ2luPSIwLjE2NjY2NjY2NjY2NjY2NjY2cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyNDI0MjQiIHRyYW5zZm9ybT0icm90YXRlKDkwIDY1IDY1KSI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAiIGR1cj0iMXMiIGJlZ2luPSIwLjI1cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyNDI0MjQiIHRyYW5zZm9ybT0icm90YXRlKDEyMCA1OC42NiA2NSkiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwIiBkdXI9IjFzIiBiZWdpbj0iMC4zMzMzMzMzMzMzMzMzMzMzcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyNDI0MjQiIHRyYW5zZm9ybT0icm90YXRlKDE1MCA1NC4wMiA2NSkiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwIiBkdXI9IjFzIiBiZWdpbj0iMC40MTY2NjY2NjY2NjY2NjY3cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyNDI0MjQiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwIiBkdXI9IjFzIiBiZWdpbj0iMC41cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyNDI0MjQiIHRyYW5zZm9ybT0icm90YXRlKC0xNTAgNDUuOTggNjUpIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMCIgZHVyPSIxcyIgYmVnaW49IjAuNTgzMzMzMzMzMzMzMzMzNHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9yZWN0PjxyZWN0IHg9IjQ2LjUiIHk9IjQwIiB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgcng9IjUiIHJ5PSI1IiBmaWxsPSIjMjQyNDI0IiB0cmFuc2Zvcm09InJvdGF0ZSgtMTIwIDQxLjM0IDY1KSI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAiIGR1cj0iMXMiIGJlZ2luPSIwLjY2NjY2NjY2NjY2NjY2NjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPjwvcmVjdD48cmVjdCB4PSI0Ni41IiB5PSI0MCIgd2lkdGg9IjciIGhlaWdodD0iMjAiIHJ4PSI1IiByeT0iNSIgZmlsbD0iIzI0MjQyNCIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAiIGR1cj0iMXMiIGJlZ2luPSIwLjc1cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyNDI0MjQiIHRyYW5zZm9ybT0icm90YXRlKC02MCAyNC4wMiA2NSkiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwIiBkdXI9IjFzIiBiZWdpbj0iMC44MzMzMzMzMzMzMzMzMzM0cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyNDI0MjQiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwIiBkdXI9IjFzIiBiZWdpbj0iMC45MTY2NjY2NjY2NjY2NjY2cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PC9zdmc+"

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "#instatype {\n  position: relative;\n  display: block;\n  width: 100%;\n}\n#instatype * {\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n}\n#instatype .input-wrapper {\n  position: relative;\n}\n#instatype .input-typeahead {\n  width: 100%;\n  margin: 0;\n  font-size: 2em;\n  padding-top: 0.5em;\n  padding-bottom: 0.5em;\n  padding-left: 0.5em;\n  border-radius: 0;\n}\n#instatype .loading-icon {\n  position: absolute;\n  height: 100%;\n  padding-top: 1em;\n  padding-bottom: 1em;\n  right: 1em;\n}\n#instatype .resultsContainer {\n  position: absolute;\n  z-index: 9997;\n  width: 100%;\n  margin: 0;\n}\n#instatype ul.results {\n  position: absolute;\n  z-index: 9999;\n  top: 0;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-top: none;\n  list-style-type: none;\n}\n#instatype ul.results.hide,\n#instatype ul.results.empty {\n  display: none;\n}\n#instatype ul.results > li {\n  line-height: 4em;\n  padding-top: 0.5em;\n  padding-right: 0;\n  padding-bottom: 0.5em;\n  padding-left: 1em;\n  position: relative;\n  cursor: pointer;\n}\n#instatype ul.results > li:hover {\n  background-color: #FFFEE2;\n}\n#instatype ul.results > li > img {\n  float: left;\n  width: 4em;\n  height: 4em;\n  margin-right: 1em;\n}\n#instatype ul.results.thumb-circle > li > img {\n  border-radius: 4em;\n}\n#instatype ul.results > li > div {\n  float: left;\n  font-size: 2em;\n}\n#instatype .clearfix:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n"

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("lodash/throttle");

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PassBlockWidth = exports.Block = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var _Grid = __webpack_require__(28);

	var _Grid2 = _interopRequireDefault(_Grid);

	var _PassBlockWidth = __webpack_require__(32);

	var _PassBlockWidth2 = _interopRequireDefault(_PassBlockWidth);

	var _GridBlock = __webpack_require__(31);

	var _GridBlock2 = _interopRequireDefault(_GridBlock);

	var _util = __webpack_require__(30);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//import visualizeRender from 'react-render-visualizer-decorator';
	//@visualizeRender
	var GridResponsive = function (_React$PureComponent) {
	  _inherits(GridResponsive, _React$PureComponent);

	  function GridResponsive(props) {
	    _classCallCheck(this, GridResponsive);

	    var _this = _possibleConstructorReturn(this, (GridResponsive.__proto__ || Object.getPrototypeOf(GridResponsive)).call(this, props));

	    _this.state = {
	      blocksPerRow: _this.props.blocksPerRow,
	      spacing: _this.props.spacing,
	      blockWidth: _this.props.blockWidth
	    };

	    _this.setup = _this.setup.bind(_this);
	    _this.breakPoints = _this.breakPoints.bind(_this);
	    _this.gridWidth = _this.gridWidth.bind(_this);
	    return _this;
	  }

	  _createClass(GridResponsive, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setup();
	      window.addEventListener('resize', this.setup);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('resize', this.setup);
	    }
	  }, {
	    key: 'setup',
	    value: function setup() {
	      var _this2 = this;

	      // Compute column count and spacing based on grid width
	      if (this.props.breakPoints) {
	        this.breakPoints();
	      }

	      // Compute column width and pass to child components
	      // Async so that children are rendered before computing column width
	      // Otherwise scroll bar may change actual width and our value will be wrong

	      // ADD TO DOCS: (small link pointing to wiki page):
	      //  - "If you need the width to always be accurate down to the px please read this"
	      //  - Your children will render without a width initially
	      //  - You can have the children not render themself if no width
	      //  - But the actual width may change by ~17px if children then result in scrollbar appearing
	      //  - In most cases this is fine, you don't need an exact width of the grid
	      //  - But if you do (such as if you want to render an image that's the exact px width of its container) ...
	      //  - ... and not have it render and then the actual grid width shrink by 17px when the scrollbar appears ...
	      //  - Then make sure your child has a wrapper component that maintains the aspect ratio of the child
	      //  - Link to example of my <Image> component

	      if (this.props.passBlockWidth) {
	        setTimeout(function () {
	          return _this2.gridWidth();
	        }, 0);
	      }
	    }
	  }, {
	    key: 'breakPoints',
	    value: function breakPoints() {
	      var _props = this.props,
	          blocksPerRow = _props.blocksPerRow,
	          spacing = _props.spacing,
	          blockWidth = _props.blockWidth,
	          breakPoints = _props.breakPoints;

	      var gridWidth = (0, _util.elementWidth)(this.el);

	      var breakPointOptions = (0, _util.nextHighestNumber)(breakPoints, gridWidth, true, false, 'maxWidth');

	      if (breakPoints) {
	        this.setState({
	          blocksPerRow: breakPointOptions.blocksPerRow || blocksPerRow,
	          spacing: breakPointOptions.spacing || spacing,
	          blockWidth: breakPointOptions.blockWidth || blockWidth
	        });
	      }
	    }
	  }, {
	    key: 'gridWidth',
	    value: function gridWidth() {
	      var gridWidthPx = (0, _util.elementWidth)(this.el);
	      //console.log(`[GRID] Grid Width: ${gridWidthPx}`);

	      this.setState({ gridWidthPx: gridWidthPx });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      var _props2 = this.props,
	          children = _props2.children,
	          hideOuterSpacing = _props2.hideOuterSpacing;

	      // This state is set from props in constructor

	      var _state = this.state,
	          blocksPerRow = _state.blocksPerRow,
	          spacing = _state.spacing,
	          blockWidth = _state.blockWidth,
	          gridWidthPx = _state.gridWidthPx;

	      // Wrap with <div> so we can grab DOM node without needing to import findDOMNode from react-dom

	      return _react2.default.createElement(
	        'div',
	        { ref: function ref(el) {
	            _this3.el = el;
	          } },
	        _react2.default.createElement(
	          _Grid2.default,
	          { blocksPerRow: blocksPerRow, gridWidthPx: gridWidthPx, blockWidth: blockWidth, spacing: spacing, hideOuterSpacing: hideOuterSpacing },
	          children
	        )
	      );
	    }
	  }]);

	  return GridResponsive;
	}(_react2.default.PureComponent);

	;

	GridResponsive.defaultProps = {
	  blocksPerRow: 3,
	  spacing: 5,
	  hideOuterSpacing: true,
	  passBlockWidth: true
	};

	GridResponsive.propTypes = {
	  spacing: _react2.default.PropTypes.number,
	  blocksPerRow: _react2.default.PropTypes.number,
	  hideOuterSpacing: _react2.default.PropTypes.bool,
	  passBlockWidth: _react2.default.PropTypes.bool,
	  blockWidth: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.number)]),
	  children: _react2.default.PropTypes.node.isRequired,
	  breakPoints: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
	    maxWidth: _react2.default.PropTypes.number,
	    blocksPerRow: _react2.default.PropTypes.number,
	    spacing: _react2.default.PropTypes.number
	  }))
	};

	exports.default = GridResponsive;
	exports.Block = _GridBlock2.default;
	exports.PassBlockWidth = _PassBlockWidth2.default;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var _GridRow = __webpack_require__(29);

	var _GridRow2 = _interopRequireDefault(_GridRow);

	var _GridBlock = __webpack_require__(31);

	var _GridBlock2 = _interopRequireDefault(_GridBlock);

	var _util = __webpack_require__(30);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Grid = function (_React$PureComponent) {
	  _inherits(Grid, _React$PureComponent);

	  function Grid(props) {
	    _classCallCheck(this, Grid);

	    var _this = _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).call(this, props));

	    _this.computeBlockWidthPx = _this.computeBlockWidthPx.bind(_this);
	    return _this;
	  }

	  // Compute the pixel width of a <Block>


	  _createClass(Grid, [{
	    key: 'computeBlockWidthPx',
	    value: function computeBlockWidthPx(block, numBlocksInRow) {
	      var _props = this.props,
	          spacing = _props.spacing,
	          hideOuterSpacing = _props.hideOuterSpacing,
	          gridWidthPx = _props.gridWidthPx;

	      // If we don't have a width for the grid then return null width

	      if (!gridWidthPx) return null;

	      var gutterCount = numBlocksInRow + (hideOuterSpacing ? -1 : 1);
	      var totalSpacing = gutterCount * spacing;
	      var totalBlockSpace = gridWidthPx - totalSpacing;
	      var blockWidthPx = totalBlockSpace * (block.width / 100);
	      return blockWidthPx;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props2 = this.props,
	          blocksPerRow = _props2.blocksPerRow,
	          blockWidth = _props2.blockWidth,
	          spacing = _props2.spacing,
	          hideOuterSpacing = _props2.hideOuterSpacing,
	          children = _props2.children;


	      var styles = {
	        wrapper: {
	          // Prevent horizontal scroll
	          overflowX: 'hidden'
	        },
	        grid: {
	          paddingTop: spacing + 'px',
	          paddingBottom: spacing + 'px'
	        },
	        gridHideOuterSpacing: {
	          // Expand grid width to hide outer gutters
	          width: 'calc(100% + ' + spacing + 'px)',
	          marginLeft: 'calc(-' + spacing / 2 + 'px)',
	          paddingTop: 0,
	          paddingBottom: 0
	        }
	      };

	      // Get desired blockWidth from <Grid blockWidth> or based on <Grid blocksPerRow> (alternate)
	      // blockWidth can be a number or an array of numbers
	      // This will be overridden by an individual <Block width> if specified
	      var blockWidthFromProps = blockWidth || 1 / blocksPerRow;

	      // Normalize value into an array of percentages
	      var blockWidthArray = (0, _util.isArray)(blockWidthFromProps) ? blockWidthFromProps : [blockWidthFromProps];
	      blockWidthArray = blockWidthArray.map(function (w) {
	        return w * 100;
	      });

	      var blockWidthIterator = {
	        index: 0,
	        widths: blockWidthArray,
	        next: function next() {
	          var width = this.widths[this.index];
	          this.index = this.widths[this.index + 1] ? this.index + 1 : 0;
	          return width;
	        }
	      };

	      /**** BUILD OUR <ROWS> OF <BLOCKS> ****/

	      var rowNodes = [];

	      var rowInProgress = {
	        blocks: [],
	        totalWidth: 0
	      };

	      // Filter out null children such as {/*...*/}
	      var validChildren = children.filter(function (child) {
	        return child;
	      });

	      // Iterate through all children
	      // Fetch props from children that are already <Blocks>
	      _react2.default.Children.forEach(validChildren, function (child, i) {

	        // Begin setting up our block object
	        var block = {
	          spacing: spacing,
	          key: 'block-' + (child.key || i)
	        };

	        // Get the next blockWidth
	        var blockWidth = blockWidthIterator.next();

	        // If child is a <Block> then we use its width and children props
	        if (child.type === _GridBlock2.default) {
	          block.width = child.props.width ? child.props.width * 100 : blockWidth;
	          block.children = child.props.children;
	        } else {
	          block.width = blockWidth;
	          block.children = child;
	        }

	        // If we've gone over 100% width for our rowInProgress ...
	        // Make the current <Block> width smaller so that we're at 100% exactly
	        var amountOver = rowInProgress.totalWidth - 100;
	        if (amountOver > 0) {
	          block.width = block.width - amountOver;
	        }

	        // Add to our row array
	        rowInProgress.blocks.push(block);

	        // Total width of current row
	        rowInProgress.totalWidth += block.width;

	        // See if it's the last block so we can push a final row
	        var isLastBlock = i === validChildren.length - 1;

	        // If the <Row> we are preparing is full then push it!
	        // Or if we're on the last <Block> push an unfinished row
	        // Round up since row might be 99.9999...
	        if (rowInProgress.totalWidth.toFixed(2) >= 100 || isLastBlock) {
	          rowNodes.push(_react2.default.createElement(
	            _GridRow2.default,
	            {
	              spacing: spacing,
	              isLastRow: i === validChildren.length - 1,
	              hideGutters: hideOuterSpacing,
	              key: 'row-' + rowNodes.length },
	            rowInProgress.blocks.map(function (block) {
	              return _react2.default.createElement(
	                _GridBlock2.default,
	                {
	                  spacing: block.spacing,
	                  width: block.width,
	                  widthPx: _this2.computeBlockWidthPx(block, rowInProgress.blocks.length),
	                  key: block.key },
	                block.children
	              );
	            })
	          ));

	          // Reset to prepare a new <Row>
	          rowInProgress.blocks = [];
	          rowInProgress.totalWidth = 0;
	        }
	      });

	      var gridStyle = styles.grid;
	      if (hideOuterSpacing) {
	        gridStyle = (0, _util.merge)(gridStyle, styles.gridHideOuterSpacing);
	      }

	      return _react2.default.createElement(
	        'div',
	        { style: styles.wrapper },
	        _react2.default.createElement(
	          'div',
	          { style: gridStyle },
	          rowNodes
	        )
	      );
	    }
	  }]);

	  return Grid;
	}(_react2.default.PureComponent);

	;

	Grid.propTypes = {
	  blocksPerRow: _react2.default.PropTypes.number,
	  spacing: _react2.default.PropTypes.number,
	  hideOuterSpacing: _react2.default.PropTypes.bool,
	  children: function children(props) {
	    var children = props.children;

	    // Get children that are <Block> components

	    var blocks = children.filter(function (child) {
	      return child && child.type === _GridBlock2.default;
	    });

	    if (blocks.length && blocks.length !== children.length) {
	      throw new Error("<Grid> children must all be <Blocks> (or none should and we'll wrap them in <Blocks> for you). It's all or nothing!");
	    }

	    // Get <Blocks> that have a width specified
	    var blocksWithWidth = blocks.filter(function (child) {
	      return child.props.width > 0;
	    });

	    if (blocksWithWidth.length && blocksWithWidth.length !== blocks.length) {
	      throw new Error("You must specify a width for all <Block> components (or for none of them and it will be divided evenly)");
	    }

	    return null;
	  }
	};

	exports.default = Grid;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var _util = __webpack_require__(30);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Row = function Row(_ref) {
	  var spacing = _ref.spacing,
	      isLastRow = _ref.isLastRow,
	      hideGutters = _ref.hideGutters,
	      children = _ref.children;


	  var styles = {
	    row: {
	      position: 'relative',
	      width: '100%',
	      marginBottom: spacing + 'px',
	      // Half outer spacing because child blocks also have left/right padding
	      paddingLeft: spacing / 2 + 'px',
	      paddingRight: spacing / 2 + 'px',
	      'boxSizing': 'border-box',
	      'WebkitBoxSizing': 'border-box',
	      'MozBoxSizing': 'border-box'
	    },
	    rowLast: {
	      marginBottom: 0
	    },
	    rowHideGutters: {
	      paddingLeft: 0,
	      paddingRight: 0
	    },
	    clearfix: {
	      content: '""',
	      display: 'table',
	      clear: 'both'
	    }
	  };

	  var rowStyle = styles.row;

	  if (isLastRow) {
	    rowStyle = (0, _util.merge)(rowStyle, styles.rowLast);
	  }

	  if (hideGutters && spacing > 0) {
	    rowStyle = (0, _util.merge)(rowStyle, styles.rowHideGutters);
	  }

	  return _react2.default.createElement(
	    'div',
	    { style: rowStyle },
	    children,
	    _react2.default.createElement('div', { style: styles.clearfix })
	  );
	};

	Row.propTypes = {
	  spacing: _react2.default.PropTypes.number,
	  isLastRow: _react2.default.PropTypes.bool,
	  hideGutters: _react2.default.PropTypes.bool,
	  children: _react2.default.PropTypes.node.isRequired
	};

	exports.default = Row;

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.nextHighestNumber = nextHighestNumber;
	exports.isArray = isArray;
	exports.merge = merge;
	exports.elementWidth = elementWidth;
	/**
	 * Find the next equal or higher number within an array
	 * @arr {array} Array to iterate through.
	 * @num {number} Number to compare.
	 * @returnEqual {boolean} Return an equal number if found.
	 * @returnLast {boolean} Return last number if no equal or higher one found.
	 * @prop {string} Indicates @arr contains objects. Get number from object[prop].
	 */
	function nextHighestNumber(arr, num, returnEqual, returnLast, prop) {
	  var i = 0;
	  for (i = 0; i < arr.length; i++) {
	    var arrNum = prop ? arr[i][prop] : arr[i];
	    if (returnEqual && arrNum === num) {
	      return arr[i];
	    } else if (arrNum >= num) {
	      return arr[i];
	    }
	  }
	  if (returnLast) {
	    return arr[i - 1];
	  } else {
	    return false;
	  }
	}

	/**
	 * From http://perfectionkills.com/instanceof-considered-harmful-or-how-to-write-a-robust-isarray/
	 */
	function isArray(o) {
	  return Object.prototype.toString.call(o) === '[object Array]';
	}

	/**
	 * Shallow merge two objects
	 * We're just merging style objects so no need for object-assign ponyfill
	 */
	function merge(obj1, obj2) {
	  for (var attrname in obj2) {
	    obj1[attrname] = obj2[attrname];
	  }

	  return obj1;
	}

	/**
	 * Get the width of a DOM element
	 * TODO: Test this in other browsers
	 */
	function elementWidth(el) {
	  return el.clientWidth;
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Block = function (_React$PureComponent) {
	  _inherits(Block, _React$PureComponent);

	  function Block() {
	    _classCallCheck(this, Block);

	    return _possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).apply(this, arguments));
	  }

	  _createClass(Block, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        parentBlockWidth: this.props.widthPx
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          width = _props.width,
	          spacing = _props.spacing,
	          children = _props.children;


	      var style = {
	        position: 'relative',
	        float: 'left',
	        width: width + '%', // Should be percent
	        paddingLeft: spacing / 2 + 'px',
	        paddingRight: spacing / 2 + 'px',
	        boxSizing: 'border-box',
	        WebkitBoxSizing: 'border-box',
	        MozBoxSizing: 'border-box'
	      };

	      return _react2.default.createElement(
	        'div',
	        { style: style },
	        children
	      );
	    }
	  }]);

	  return Block;
	}(_react2.default.PureComponent);

	;

	Block.childContextTypes = {
	  parentBlockWidth: _react2.default.PropTypes.number
	};

	Block.defaultProps = {
	  width: 0
	};

	Block.propTypes = {
	  // Don't require width and spacing since it will always be added by Grid ...
	  // ... and we need to allow composition: <Grid><Block/><Block/></Grid>
	  width: _react2.default.PropTypes.number,
	  spacing: _react2.default.PropTypes.number,
	  children: _react2.default.PropTypes.node
	};

	exports.default = Block;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* Higher order function that passes context.parentBlockWidth to its child component */

	exports.default = function (WrappedComponent, propName) {

	  // So it's in our HOC functions scope (better way?)
	  var childPropName = propName;

	  var withColumnWidthHOC = function withColumnWidthHOC(props, _ref) {
	    var parentBlockWidth = _ref.parentBlockWidth;


	    var newProps = {};
	    childPropName = childPropName || 'parentBlockWidth';
	    newProps[childPropName] = parentBlockWidth;

	    return _react2.default.createElement(WrappedComponent, _extends({}, newProps, props));
	  };

	  withColumnWidthHOC.contextTypes = {
	    parentBlockWidth: _react2.default.PropTypes.number
	  };

	  return withColumnWidthHOC;
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var _Image = __webpack_require__(34);

	var _Image2 = _interopRequireDefault(_Image);

	var _reactSimpleGrid = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Photo = function Photo(_ref) {
	  var data = _ref.data,
	      parentWidth = _ref.parentWidth;


	  var allowedSrcWidths = [200, 300, 400, 500];

	  return _react2.default.createElement(
	    'a',
	    { href: data.links.html, target: '_blank', style: { display: 'block', background: hexToRGB(data.color, 0.7) } },
	    _react2.default.createElement(_Image2.default, {
	      src: 'https://source.unsplash.com/' + data.id + '/{width}x{height}',
	      parseSrc: true,
	      parseSrcWidth: parentWidth,
	      parseSrcAllowedWidths: allowedSrcWidths,
	      parseSrcDoubleForRetina: true,
	      widthHeightRatio: 1 / 1 }),
	    parentWidth && _react2.default.createElement(
	      'div',
	      { style: { position: 'absolute', top: 10, right: 10, backgroundColor: '#fff', color: '#000', padding: '0.3em 0.6em', opacity: '1' } },
	      parentWidth,
	      'px'
	    )
	  );
	};

	Photo.propTypes = {
	  data: _react2.default.PropTypes.shape({
	    id: _react2.default.PropTypes.string.isRequired,
	    links: _react2.default.PropTypes.shape({
	      html: _react2.default.PropTypes.string.isRequired
	    }).isRequired
	  }).isRequired,
	  width: _react2.default.PropTypes.number,
	  parentWidth: _react2.default.PropTypes.number
	};

	function hexToRGB(hex, alpha) {
	  var r = parseInt(hex.slice(1, 3), 16);
	  var g = parseInt(hex.slice(3, 5), 16);
	  var b = parseInt(hex.slice(5, 7), 16);

	  if (alpha) {
	    return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
	  } else {
	    return 'rgba(' + r + ',' + g + ',' + b + ')';
	  }
	}

	// HOC that gives us <Grid> column width as the prop parentWidth
	exports.default = (0, _reactSimpleGrid.PassBlockWidth)(Photo, 'parentWidth');

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(35);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(36);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	exports.nextHighestNumber = nextHighestNumber;

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var _ImageBlock = __webpack_require__(37);

	var _ImageBlock2 = _interopRequireDefault(_ImageBlock);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Image = function Image(_ref) {
	  var src = _ref.src,
	      widthHeightRatio = _ref.widthHeightRatio,
	      parseSrc = _ref.parseSrc,
	      parseSrcWidth = _ref.parseSrcWidth,
	      parseSrcAllowedWidths = _ref.parseSrcAllowedWidths,
	      parseSrcDoubleForRetina = _ref.parseSrcDoubleForRetina,
	      children = _ref.children,
	      props = (0, _objectWithoutProperties3.default)(_ref, ['src', 'widthHeightRatio', 'parseSrc', 'parseSrcWidth', 'parseSrcAllowedWidths', 'parseSrcDoubleForRetina', 'children']);


	  /** If src parsing is enabled ...
	    * We replace width and height in src url
	    * Skip rendering <img> if no props.parseSrcWidth (may be delayed depending on parent logic)
	    * Always render <block> so that component has correct width and height
	    * Example valid src urls:
	    *  - https://source.unsplash.com/oMpAz-DN-9I/{width}x{height}
	    *  - https://example.com/images/logo_{width}.png 
	    */

	  if (parseSrc && parseSrcWidth) {

	    if (parseSrcDoubleForRetina && isHighDensity()) {
	      // Double image width for high density screens (1.3 or 2dpi)
	      parseSrcWidth = parseSrcWidth * 2;
	    }

	    // Snap parseSrcWidth to next largest width in allowedSrcWidths (wont upscale)
	    // If allowedSrcWidths doesn't contain a larger width then it will be largest available
	    if (parseSrcAllowedWidths) {
	      parseSrcWidth = nextHighestNumber(parseSrcAllowedWidths, parseSrcWidth, true, true);
	    }

	    src = src.replace(/\{width\}/g, parseInt(parseSrcWidth));
	    src = src.replace(/\{height\}/g, parseInt(parseSrcWidth / widthHeightRatio));
	  }

	  var style = {
	    position: 'absolute',
	    top: 0,
	    left: 0,
	    width: '100%'
	  };

	  return _react2.default.createElement(
	    _ImageBlock2.default,
	    { widthHeightRatio: widthHeightRatio },
	    (!parseSrc || parseSrcWidth) && _react2.default.createElement('img', (0, _extends3.default)({ src: src, style: style }, props)),
	    children,
	    parseSrcWidth && _react2.default.createElement(
	      'div',
	      { style: { position: 'absolute', bottom: 10, right: 10, backgroundColor: '#fff', color: '#000', padding: '0.3em 0.6em', opacity: '0.6' } },
	      'Img: ',
	      parseSrcWidth,
	      'px ',
	      parseSrcDoubleForRetina && isHighDensity() && _react2.default.createElement(
	        'span',
	        null,
	        '(@2x)'
	      )
	    )
	  );
	};

	Image.propTypes = {
	  src: _react2.default.PropTypes.string.isRequired,
	  widthHeightRatio: _react2.default.PropTypes.number,
	  parseSrc: _react2.default.PropTypes.bool,
	  parseSrcWidth: _react2.default.PropTypes.number,
	  parseSrcAllowedWidths: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.number),
	  parseSrcDoubleForRetina: _react2.default.PropTypes.bool,
	  children: _react2.default.PropTypes.node
	};

	Image.defaultProps = {
	  widthHeightRatio: 1, // Square
	  parseSrcDoubleForRetina: true
	};

	/**
	 * Check whether screen is high density (1.3 or 2dpi)
	 * From http://stackoverflow.com/a/20413768/56976
	 */
	function isHighDensity() {
	  if (typeof window === 'undefined') return false;
	  return window.matchMedia && (window.matchMedia('only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)').matches) || window.devicePixelRatio && window.devicePixelRatio > 1.3;
	}

	/**
	 * Find the next equal or higher number within an array
	 * @arr {array} Array to iterate through.
	 * @num {number} Number to compare.
	 * @returnEqual {boolean} Return an equal number if found.
	 * @returnLast {boolean} Return last number if no equal or higher one found.
	 * @prop {string} Indicates @arr contains objects. Get number from object[prop].
	 */
	function nextHighestNumber(arr, num, returnEqual, returnLast, prop) {
	  var i = 0;
	  for (i = 0; i < arr.length; i++) {
	    var arrNum = prop ? arr[i][prop] : arr[i];
	    if (returnEqual && arrNum === num) {
	      return arr[i];
	    } else if (arrNum >= num) {
	      return arr[i];
	    }
	  }
	  if (returnLast) {
	    return arr[i - 1];
	  } else {
	    return false;
	  }
	}

	exports.default = Image;

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/extends");

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ImageBlock = function ImageBlock(_ref) {
	  var widthHeightRatio = _ref.widthHeightRatio,
	      children = _ref.children;


	  var style = {
	    position: 'relative',
	    width: '100%',
	    overflow: 'hidden',
	    paddingBottom: 100 / widthHeightRatio + '%'
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: style },
	    children
	  );
	};

	ImageBlock.defaultProps = {
	  widthHeightRatio: 1
	};

	ImageBlock.propTypes = {
	  widthHeightRatio: _react2.default.PropTypes.number,
	  children: _react2.default.PropTypes.node
	};

	exports.default = ImageBlock;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(14);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(15);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(16);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(17);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(18);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var _throttle = __webpack_require__(26);

	var _throttle2 = _interopRequireDefault(_throttle);

	var _loading = __webpack_require__(39);

	var _loading2 = _interopRequireDefault(_loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Infinite = function (_React$PureComponent) {
	  (0, _inherits3.default)(Infinite, _React$PureComponent);

	  function Infinite(props) {
	    (0, _classCallCheck3.default)(this, Infinite);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (Infinite.__proto__ || (0, _getPrototypeOf2.default)(Infinite)).call(this, props));

	    _this.addScrollListener = _this.addScrollListener.bind(_this);
	    _this.checkScroll = _this.checkScroll.bind(_this);
	    _this.scrollListenerThrottled = (0, _throttle2.default)(_this.checkScroll.bind(_this), 500);
	    return _this;
	  }

	  (0, _createClass3.default)(Infinite, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      this.addScrollListener();
	      // Delay the initial check so that child elements are rendered first
	      setTimeout(function () {
	        return _this2.checkScroll();
	      }, 50);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('scroll', this.scrollListenerThrottled);
	    }
	  }, {
	    key: 'addScrollListener',
	    value: function addScrollListener() {
	      window.addEventListener('scroll', this.scrollListenerThrottled);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(nextProps) {
	      // If component updated (prop/state change higher in the chain)
	      // We want to check scroll position since DOM may have changed
	      this.checkScroll();
	    }
	  }, {
	    key: 'checkScroll',
	    value: function checkScroll(trailing) {
	      var _props = this.props,
	          loading = _props.loading,
	          atEnd = _props.atEnd,
	          requestHandler = _props.requestHandler;


	      var minDistanceFromBotton = 50;

	      var body = document.body;
	      var html = document.documentElement;

	      var totalHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
	      var clientHeight = window.innerHeight || document.documentElement.clientHeight;
	      var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	      var scrollDistance = scrollTop + clientHeight;
	      var distanceFromBottom = totalHeight - scrollDistance;

	      //console.log(`[INFINITE] Total height: ${totalHeight}`);
	      //console.log(`[INFINITE] Client height: ${clientHeight}`);
	      //console.log(`[INFINITE] Scroll top: ${scrollTop}`);

	      //console.log(`[INFINITE] Distance from bottom: ${distanceFromBottom}`);

	      var reachedBottom = distanceFromBottom < minDistanceFromBotton;

	      if (atEnd) {
	        //console.log('[INFINITE] No more pages');
	      } else if (reachedBottom && !loading) {
	        //console.log('[INFINITE] Requesting next page');
	        requestHandler();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          atEnd = _props2.atEnd,
	          children = _props2.children,
	          loadingIcon = _props2.loadingIcon;


	      var loadingsStyle = {
	        display: 'block',
	        width: '3em',
	        margin: '2em auto 2em auto'
	      };

	      return _react2.default.createElement(
	        'div',
	        null,
	        children,
	        !atEnd && loadingIcon && _react2.default.createElement('img', { src: loadingIcon, style: loadingsStyle })
	      );
	    }
	  }]);
	  return Infinite;
	}(_react2.default.PureComponent);

	;

	Infinite.defaultProps = {
	  atEnd: false,
	  loading: false,
	  // Could we do a conditional require of our bundled svg ...
	  // ... so that it gets removed by webpack if user specifies a different icon?
	  loadingIcon: _loading2.default
	};

	Infinite.propTypes = {
	  requestHandler: _react2.default.PropTypes.func,
	  loading: _react2.default.PropTypes.bool,
	  atEnd: _react2.default.PropTypes.bool,
	  children: _react2.default.PropTypes.node
	};

	exports.default = Infinite;

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ4IiBoZWlnaHQ9IjE0OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIGNsYXNzPSJ1aWwtZGVmYXVsdCI+PHBhdGggZmlsbD0ibm9uZSIgY2xhc3M9ImJrIiBkPSJNMCAwaDEwMHYxMDBIMHoiLz48cmVjdCB4PSI0Ni41IiB5PSI0MCIgd2lkdGg9IjciIGhlaWdodD0iMjAiIHJ4PSI1IiByeT0iNSIgZmlsbD0iIzI0MjQyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMzApIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMCIgZHVyPSIxcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPjwvcmVjdD48cmVjdCB4PSI0Ni41IiB5PSI0MCIgd2lkdGg9IjciIGhlaWdodD0iMjAiIHJ4PSI1IiByeT0iNSIgZmlsbD0iIzI0MjQyNCIgdHJhbnNmb3JtPSJyb3RhdGUoMzAgMTA1Ljk4IDY1KSI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAiIGR1cj0iMXMiIGJlZ2luPSIwLjA4MzMzMzMzMzMzMzMzMzMzcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyNDI0MjQiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAiIGR1cj0iMXMiIGJlZ2luPSIwLjE2NjY2NjY2NjY2NjY2NjY2cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyNDI0MjQiIHRyYW5zZm9ybT0icm90YXRlKDkwIDY1IDY1KSI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAiIGR1cj0iMXMiIGJlZ2luPSIwLjI1cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyNDI0MjQiIHRyYW5zZm9ybT0icm90YXRlKDEyMCA1OC42NiA2NSkiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwIiBkdXI9IjFzIiBiZWdpbj0iMC4zMzMzMzMzMzMzMzMzMzMzcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyNDI0MjQiIHRyYW5zZm9ybT0icm90YXRlKDE1MCA1NC4wMiA2NSkiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwIiBkdXI9IjFzIiBiZWdpbj0iMC40MTY2NjY2NjY2NjY2NjY3cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyNDI0MjQiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwIiBkdXI9IjFzIiBiZWdpbj0iMC41cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyNDI0MjQiIHRyYW5zZm9ybT0icm90YXRlKC0xNTAgNDUuOTggNjUpIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMCIgZHVyPSIxcyIgYmVnaW49IjAuNTgzMzMzMzMzMzMzMzMzNHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9yZWN0PjxyZWN0IHg9IjQ2LjUiIHk9IjQwIiB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgcng9IjUiIHJ5PSI1IiBmaWxsPSIjMjQyNDI0IiB0cmFuc2Zvcm09InJvdGF0ZSgtMTIwIDQxLjM0IDY1KSI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAiIGR1cj0iMXMiIGJlZ2luPSIwLjY2NjY2NjY2NjY2NjY2NjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPjwvcmVjdD48cmVjdCB4PSI0Ni41IiB5PSI0MCIgd2lkdGg9IjciIGhlaWdodD0iMjAiIHJ4PSI1IiByeT0iNSIgZmlsbD0iIzI0MjQyNCIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAiIGR1cj0iMXMiIGJlZ2luPSIwLjc1cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyNDI0MjQiIHRyYW5zZm9ybT0icm90YXRlKC02MCAyNC4wMiA2NSkiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwIiBkdXI9IjFzIiBiZWdpbj0iMC44MzMzMzMzMzMzMzMzMzM0cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyNDI0MjQiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwIiBkdXI9IjFzIiBiZWdpbj0iMC45MTY2NjY2NjY2NjY2NjY2cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PC9zdmc+"

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var _reactScrollUp = __webpack_require__(41);

	var _reactScrollUp2 = _interopRequireDefault(_reactScrollUp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ToTop = function ToTop() {

	  var componentStyle = {
	    position: 'fixed',
	    bottom: '20px',
	    right: '20px',
	    cursor: 'pointer',
	    transitionDuration: '0.2s',
	    transitionTimingFunction: 'linear',
	    transitionDelay: '0s'
	  };

	  var buttonStyle = {
	    fontSize: '1.2em',
	    padding: '2em 2.2em',
	    backgroundColor: '#FFF',
	    color: '#5a5a5a'
	  };

	  return _react2.default.createElement(
	    _reactScrollUp2.default,
	    { showUnder: 500, style: componentStyle },
	    _react2.default.createElement(
	      'div',
	      { style: buttonStyle },
	      'UP'
	    )
	  );
	};

	exports.default = ToTop;

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = require("react-scroll-up");

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _regenerator = __webpack_require__(3);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _asyncToGenerator2 = __webpack_require__(4);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _classCallCheck2 = __webpack_require__(15);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(16);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _unsplashJs = __webpack_require__(43);

	var _unsplashJs2 = _interopRequireDefault(_unsplashJs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var unsplash = new _unsplashJs2.default({
	  applicationId: '806337d0390512806adf0ab960cb1fbc65b631dfe303a14dcb56432003bd8bfc'
	});

	var api = function () {
	  function api() {
	    (0, _classCallCheck3.default)(this, api);

	    this.photosPerPage = 16;
	    this.localDataFor = {
	      users: false,
	      userPhotos: false,
	      popularPhotos: true
	    };
	  }

	  (0, _createClass3.default)(api, [{
	    key: 'getUsers',
	    value: function () {
	      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(query) {
	        var response, json;
	        return _regenerator2.default.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                if (!this.localDataFor.users) {
	                  _context.next = 2;
	                  break;
	                }

	                return _context.abrupt('return', localData.users.results);

	              case 2:
	                _context.next = 4;
	                return unsplash.search.users(query, 1);

	              case 4:
	                response = _context.sent;
	                _context.next = 7;
	                return response.json();

	              case 7:
	                json = _context.sent;
	                return _context.abrupt('return', json.results);

	              case 9:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this);
	      }));

	      function getUsers(_x) {
	        return _ref.apply(this, arguments);
	      }

	      return getUsers;
	    }()
	  }, {
	    key: 'getPopularPhotos',
	    value: function () {
	      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(page, count) {
	        var response;
	        return _regenerator2.default.wrap(function _callee2$(_context2) {
	          while (1) {
	            switch (_context2.prev = _context2.next) {
	              case 0:
	                if (!(this.localDataFor.popularPhotos && page === 1)) {
	                  _context2.next = 2;
	                  break;
	                }

	                return _context2.abrupt('return', localData.popularPhotos);

	              case 2:
	                _context2.next = 4;
	                return unsplash.photos.listPhotos(page, count || this.photosPerPage, 'popular');

	              case 4:
	                response = _context2.sent;
	                _context2.next = 7;
	                return response.json();

	              case 7:
	                return _context2.abrupt('return', _context2.sent);

	              case 8:
	              case 'end':
	                return _context2.stop();
	            }
	          }
	        }, _callee2, this);
	      }));

	      function getPopularPhotos(_x2, _x3) {
	        return _ref2.apply(this, arguments);
	      }

	      return getPopularPhotos;
	    }()
	  }, {
	    key: 'getUserPhotos',
	    value: function () {
	      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(username, page) {
	        var response;
	        return _regenerator2.default.wrap(function _callee3$(_context3) {
	          while (1) {
	            switch (_context3.prev = _context3.next) {
	              case 0:
	                if (!this.localDataFor.userPhotos) {
	                  _context3.next = 2;
	                  break;
	                }

	                return _context3.abrupt('return', localData.userPhotos);

	              case 2:
	                _context3.next = 4;
	                return unsplash.users.photos(username, page, this.photosPerPage, 'latest');

	              case 4:
	                response = _context3.sent;
	                _context3.next = 7;
	                return response.json();

	              case 7:
	                return _context3.abrupt('return', _context3.sent);

	              case 8:
	              case 'end':
	                return _context3.stop();
	            }
	          }
	        }, _callee3, this);
	      }));

	      function getUserPhotos(_x4, _x5) {
	        return _ref3.apply(this, arguments);
	      }

	      return getUserPhotos;
	    }()
	  }]);
	  return api;
	}();

	var localData = {
	  users: { "total": 5, "total_pages": 1, "results": [{ "id": "gnwb2chNB0Q", "username": "samuelzeller", "name": "Samuel Zeller", "first_name": "Samuel", "last_name": "Zeller", "portfolio_url": "http://www.samuelzeller.ch/", "bio": "Freelance photographer available for projects. On Instagram @zellersamuel - Inquiries: sam@samuelzeller.ch", "location": "Geneva, Switzerland", "total_likes": 52, "total_photos": 210, "total_collections": 3, "followed_by_user": false, "profile_image": { "small": 'https://images.unsplash.com/profile-1459084990923-3f9f152c3799?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=55a9d05123e81facff8540f8dd04f6ac', "medium": 'https://images.unsplash.com/profile-1459084990923-3f9f152c3799?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=b5b6563604a357c81ab7b7d031711621', "large": 'https://images.unsplash.com/profile-1459084990923-3f9f152c3799?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=f2d56cf35c7e667ca84ed0a4dabdc2c6' }, "photos": [{ "id": "j0g8taxHZa0", "created_at": "2015-09-16T08:37:11-04:00", "width": 4342, "height": 2895, "color": "#4B4B4B", "likes": 1664, "liked_by_user": false, "current_user_collections": [], "urls": { "raw": "https://images.unsplash.com/photo-1442406964439-e46ab8eff7c4", "full": 'https://images.unsplash.com/photo-1442406964439-e46ab8eff7c4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=74285702a4dee2862219fdea8cd2045d', "regular": 'https://images.unsplash.com/photo-1442406964439-e46ab8eff7c4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=efd0cad767236aae5bb586a8707e1bb9', "small": 'https://images.unsplash.com/photo-1442406964439-e46ab8eff7c4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=1b8c67f61ce3c4fb38a884d5aae80ea0', "thumb": 'https://images.unsplash.com/photo-1442406964439-e46ab8eff7c4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=89498bd1f283e9538ddc9a4af4349e7b' }, "categories": [{ "id": 2, "title": "Buildings", "photo_count": 22897, "links": { "self": "https://api.unsplash.com/categories/2", "photos": "https://api.unsplash.com/categories/2/photos" } }], "links": { "self": "https://api.unsplash.com/photos/j0g8taxHZa0", "html": "http://unsplash.com/photos/j0g8taxHZa0", "download": "http://unsplash.com/photos/j0g8taxHZa0/download", "download_location": "https://api.unsplash.com/photos/j0g8taxHZa0/download" } }, { "id": "YN_JWPDYVoM", "created_at": "2014-12-10T10:24:36-05:00", "width": 4896, "height": 3264, "color": "#414B4B", "likes": 444, "liked_by_user": false, "current_user_collections": [], "urls": { "raw": "https://images.unsplash.com/photo-1418225043143-90858d2301b4", "full": 'https://images.unsplash.com/photo-1418225043143-90858d2301b4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=658de8656e7e13ea5ad7a8717f5798b5', "regular": 'https://images.unsplash.com/photo-1418225043143-90858d2301b4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=a653e62f43c02b6aed9c5cc94f10c472', "small": 'https://images.unsplash.com/photo-1418225043143-90858d2301b4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=332db30170e57c1491028094fd5624cd', "thumb": 'https://images.unsplash.com/photo-1418225043143-90858d2301b4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=52e7a50b34fdfa519d46660b7e1e57e4' }, "categories": [{ "id": 4, "title": "Nature", "photo_count": 54184, "links": { "self": "https://api.unsplash.com/categories/4", "photos": "https://api.unsplash.com/categories/4/photos" } }, { "id": 6, "title": "People", "photo_count": 18319, "links": { "self": "https://api.unsplash.com/categories/6", "photos": "https://api.unsplash.com/categories/6/photos" } }], "links": { "self": "https://api.unsplash.com/photos/YN_JWPDYVoM", "html": "http://unsplash.com/photos/YN_JWPDYVoM", "download": "http://unsplash.com/photos/YN_JWPDYVoM/download", "download_location": "https://api.unsplash.com/photos/YN_JWPDYVoM/download" } }, { "id": "UyUvM0xcqMA", "created_at": "2014-10-12T18:28:32-04:00", "width": 4237, "height": 2814, "color": "#5E5E5E", "likes": 456, "liked_by_user": false, "current_user_collections": [], "urls": { "raw": "https://images.unsplash.com/uploads/14131528928453585b6dc/829d24cf", "full": 'https://images.unsplash.com/uploads/14131528928453585b6dc/829d24cf?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=851ed16fd973c0a946045b43cf5c49f7', "regular": 'https://images.unsplash.com/uploads/14131528928453585b6dc/829d24cf?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=a3ad2eee0ad6e07d7e694d7af3c69c82', "small": 'https://images.unsplash.com/uploads/14131528928453585b6dc/829d24cf?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=0d75fb535e4517162ce8de7113785b38', "thumb": 'https://images.unsplash.com/uploads/14131528928453585b6dc/829d24cf?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=a0ded1633038b7ae15e9d69e3b84619b' }, "categories": [], "links": { "self": "https://api.unsplash.com/photos/UyUvM0xcqMA", "html": "http://unsplash.com/photos/UyUvM0xcqMA", "download": "http://unsplash.com/photos/UyUvM0xcqMA/download", "download_location": "https://api.unsplash.com/photos/UyUvM0xcqMA/download" } }], "links": { "self": "https://api.unsplash.com/users/samuelzeller", "html": "http://unsplash.com/@samuelzeller", "photos": "https://api.unsplash.com/users/samuelzeller/photos", "likes": "https://api.unsplash.com/users/samuelzeller/likes", "portfolio": "https://api.unsplash.com/users/samuelzeller/portfolio", "following": "https://api.unsplash.com/users/samuelzeller/following", "followers": "https://api.unsplash.com/users/samuelzeller/followers" } }, { "id": "Q4NfGpMNvzs", "username": "samdasherx13", "name": "Samuel Myles", "first_name": "Samuel", "last_name": "Myles", "portfolio_url": "http://samdasherx13.tumblr.com/", "bio": "", "location": "Wichita, Kansas", "total_likes": 166, "total_photos": 11, "total_collections": 0, "followed_by_user": false, "profile_image": { "small": 'https://images.unsplash.com/profile-1450245839093-95fa430f70d0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=c8a9b78219de3f76770bc5de371b3af9', "medium": 'https://images.unsplash.com/profile-1450245839093-95fa430f70d0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=e51f87c95c5f7d0493a5327923b2a584', "large": 'https://images.unsplash.com/profile-1450245839093-95fa430f70d0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=caf9d96cbb762aefca4917120549ec4e' }, "photos": [{ "id": "CdX0FV_hIVA", "created_at": "2016-05-18T12:56:02-04:00", "width": 6000, "height": 4000, "color": "#F2ECCE", "likes": 33, "liked_by_user": false, "current_user_collections": [], "urls": { "raw": "https://images.unsplash.com/photo-1463590469467-c60accd525f3", "full": 'https://images.unsplash.com/photo-1463590469467-c60accd525f3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=f357fe042e3b419b7626bd039262991f', "regular": 'https://images.unsplash.com/photo-1463590469467-c60accd525f3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=3717a16416f43bdd16dbf2c6e098c55c', "small": 'https://images.unsplash.com/photo-1463590469467-c60accd525f3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=4bc80283cb275c0b3b4e173d9f0a9dbf', "thumb": 'https://images.unsplash.com/photo-1463590469467-c60accd525f3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=f2b5335b6561a9f15dc73fabd61b8d85' }, "categories": [{ "id": 4, "title": "Nature", "photo_count": 54184, "links": { "self": "https://api.unsplash.com/categories/4", "photos": "https://api.unsplash.com/categories/4/photos" } }], "links": { "self": "https://api.unsplash.com/photos/CdX0FV_hIVA", "html": "http://unsplash.com/photos/CdX0FV_hIVA", "download": "http://unsplash.com/photos/CdX0FV_hIVA/download", "download_location": "https://api.unsplash.com/photos/CdX0FV_hIVA/download" } }, { "id": "yiJyG4oKNJE", "created_at": "2016-06-28T17:32:43-04:00", "width": 5292, "height": 3506, "color": "#FFFFFF", "likes": 1, "liked_by_user": false, "current_user_collections": [], "urls": { "raw": "https://images.unsplash.com/photo-1467149493705-a2e44ea86609", "full": 'https://images.unsplash.com/photo-1467149493705-a2e44ea86609?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=11c07f9e1c2bbdc9ff797d6dc73fdb4a', "regular": 'https://images.unsplash.com/photo-1467149493705-a2e44ea86609?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=8322e017c772dcf1740adba665927bd3', "small": 'https://images.unsplash.com/photo-1467149493705-a2e44ea86609?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=7af2fbab235c02b702cbfa6a4df84e92', "thumb": 'https://images.unsplash.com/photo-1467149493705-a2e44ea86609?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=1e8cd6d937fa62ab8728873297187f05' }, "categories": [], "links": { "self": "https://api.unsplash.com/photos/yiJyG4oKNJE", "html": "http://unsplash.com/photos/yiJyG4oKNJE", "download": "http://unsplash.com/photos/yiJyG4oKNJE/download", "download_location": "https://api.unsplash.com/photos/yiJyG4oKNJE/download" } }, { "id": "tSH_HLE4lBM", "created_at": "2015-12-16T01:19:59-05:00", "width": 6000, "height": 4000, "color": "#FEFEFC", "likes": 1, "liked_by_user": false, "current_user_collections": [], "urls": { "raw": "https://images.unsplash.com/photo-1450246630295-47deda7b0329", "full": 'https://images.unsplash.com/photo-1450246630295-47deda7b0329?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=69271f09ba6bf65fd721c00b68d4e1e9', "regular": 'https://images.unsplash.com/photo-1450246630295-47deda7b0329?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=1be786f966ea9123dad89671b6edfa47', "small": 'https://images.unsplash.com/photo-1450246630295-47deda7b0329?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=ad24cd5242e22d2d49f85474c2645334', "thumb": 'https://images.unsplash.com/photo-1450246630295-47deda7b0329?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=50e50a06d83f1317a09fda462eff9903' }, "categories": [{ "id": 2, "title": "Buildings", "photo_count": 22897, "links": { "self": "https://api.unsplash.com/categories/2", "photos": "https://api.unsplash.com/categories/2/photos" } }], "links": { "self": "https://api.unsplash.com/photos/tSH_HLE4lBM", "html": "http://unsplash.com/photos/tSH_HLE4lBM", "download": "http://unsplash.com/photos/tSH_HLE4lBM/download", "download_location": "https://api.unsplash.com/photos/tSH_HLE4lBM/download" } }], "links": { "self": "https://api.unsplash.com/users/samdasherx13", "html": "http://unsplash.com/@samdasherx13", "photos": "https://api.unsplash.com/users/samdasherx13/photos", "likes": "https://api.unsplash.com/users/samdasherx13/likes", "portfolio": "https://api.unsplash.com/users/samdasherx13/portfolio", "following": "https://api.unsplash.com/users/samdasherx13/following", "followers": "https://api.unsplash.com/users/samdasherx13/followers" } }, { "id": "JyF-vO22kiA", "username": "samuelmelk", "name": "Samuel Melchioretto", "first_name": "Samuel", "last_name": "Melchioretto", "portfolio_url": null, "bio": "", "location": null, "total_likes": 0, "total_photos": 0, "total_collections": 0, "followed_by_user": false, "profile_image": { "small": 'https://images.unsplash.com/profile-fb-1478352903-65e431199f43.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=3e267280b4a02d1ab0bb93f0dbf6b3c6', "medium": 'https://images.unsplash.com/profile-fb-1478352903-65e431199f43.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=e4b02ec940fadde06e5d90e739b5543d', "large": 'https://images.unsplash.com/profile-fb-1478352903-65e431199f43.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=3d52bcc6a4fa9e3679fc1989e2981a9d' }, "photos": [], "links": { "self": "https://api.unsplash.com/users/samuelmelk", "html": "http://unsplash.com/@samuelmelk", "photos": "https://api.unsplash.com/users/samuelmelk/photos", "likes": "https://api.unsplash.com/users/samuelmelk/likes", "portfolio": "https://api.unsplash.com/users/samuelmelk/portfolio", "following": "https://api.unsplash.com/users/samuelmelk/following", "followers": "https://api.unsplash.com/users/samuelmelk/followers" } }, { "id": "Cc_KHNnaQNU", "username": "samuel_clement", "name": "Samuel Clement", "first_name": "Samuel", "last_name": "Clement", "portfolio_url": null, "bio": "", "location": null, "total_likes": 0, "total_photos": 0, "total_collections": 0, "followed_by_user": false, "profile_image": { "small": 'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=0ad68f44c4725d5a3fda019bab9d3edc', "medium": 'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=356bd4b76a3d4eb97d63f45b818dd358', "large": 'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=ee8bbf5fb8d6e43aaaa238feae2fe90d' }, "photos": [], "links": { "self": "https://api.unsplash.com/users/samuel_clement", "html": "http://unsplash.com/@samuel_clement", "photos": "https://api.unsplash.com/users/samuel_clement/photos", "likes": "https://api.unsplash.com/users/samuel_clement/likes", "portfolio": "https://api.unsplash.com/users/samuel_clement/portfolio", "following": "https://api.unsplash.com/users/samuel_clement/following", "followers": "https://api.unsplash.com/users/samuel_clement/followers" } }, { "id": "x0c8f95Htmo", "username": "samuelmills", "name": "samuel mills", "first_name": "samuel", "last_name": "mills", "portfolio_url": null, "bio": "", "location": null, "total_likes": 0, "total_photos": 0, "total_collections": 0, "followed_by_user": false, "profile_image": { "small": 'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=0ad68f44c4725d5a3fda019bab9d3edc', "medium": 'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=356bd4b76a3d4eb97d63f45b818dd358', "large": 'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=ee8bbf5fb8d6e43aaaa238feae2fe90d' }, "photos": [], "links": { "self": "https://api.unsplash.com/users/samuelmills", "html": "http://unsplash.com/@samuelmills", "photos": "https://api.unsplash.com/users/samuelmills/photos", "likes": "https://api.unsplash.com/users/samuelmills/likes", "portfolio": "https://api.unsplash.com/users/samuelmills/portfolio", "following": "https://api.unsplash.com/users/samuelmills/following", "followers": "https://api.unsplash.com/users/samuelmills/followers" } }] },
	  userPhotos: [{ "id": "9ZwwmGUHXbo", "created_at": "2016-11-29T14:00:15-05:00", "width": 3264, "height": 4896, "color": "#FEEEE8", "likes": 1, "liked_by_user": false, "user": { "id": "gnwb2chNB0Q", "username": "samuelzeller", "name": "Samuel Zeller", "first_name": "Samuel", "last_name": "Zeller", "portfolio_url": "http://www.samuelzeller.ch/", "bio": "Freelance photographer available for projects. On Instagram @zellersamuel - Inquiries: sam@samuelzeller.ch", "location": "Geneva, Switzerland", "total_likes": 52, "total_photos": 210, "total_collections": 3, "profile_image": { "small": 'https://images.unsplash.com/profile-1459084990923-3f9f152c3799?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=55a9d05123e81facff8540f8dd04f6ac', "medium": 'https://images.unsplash.com/profile-1459084990923-3f9f152c3799?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=b5b6563604a357c81ab7b7d031711621', "large": 'https://images.unsplash.com/profile-1459084990923-3f9f152c3799?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=f2d56cf35c7e667ca84ed0a4dabdc2c6' }, "links": { "self": "https://api.unsplash.com/users/samuelzeller", "html": "http://unsplash.com/@samuelzeller", "photos": "https://api.unsplash.com/users/samuelzeller/photos", "likes": "https://api.unsplash.com/users/samuelzeller/likes", "portfolio": "https://api.unsplash.com/users/samuelzeller/portfolio", "following": "https://api.unsplash.com/users/samuelzeller/following", "followers": "https://api.unsplash.com/users/samuelzeller/followers" } }, "current_user_collections": [], "urls": { "raw": "https://images.unsplash.com/photo-1480445832621-23df89ee0fcc", "full": 'https://images.unsplash.com/photo-1480445832621-23df89ee0fcc?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=c45b75f518e8bf7171a81e90c5782b75', "regular": 'https://images.unsplash.com/photo-1480445832621-23df89ee0fcc?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=8ad187e9dce1b3348dcb3fb0befb2f2d', "small": 'https://images.unsplash.com/photo-1480445832621-23df89ee0fcc?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=8a342a954be209f33bc6b882ac83e099', "thumb": 'https://images.unsplash.com/photo-1480445832621-23df89ee0fcc?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=6f2d078c68d7c87e71b4781bc34a046f' }, "categories": [], "links": { "self": "https://api.unsplash.com/photos/9ZwwmGUHXbo", "html": "http://unsplash.com/photos/9ZwwmGUHXbo", "download": "http://unsplash.com/photos/9ZwwmGUHXbo/download", "download_location": "https://api.unsplash.com/photos/9ZwwmGUHXbo/download" } }, { "id": "yn_x_igbgPc", "created_at": "2016-11-28T08:25:28-05:00", "width": 4896, "height": 3264, "color": "#07090C", "likes": 122, "liked_by_user": false, "user": { "id": "gnwb2chNB0Q", "username": "samuelzeller", "name": "Samuel Zeller", "first_name": "Samuel", "last_name": "Zeller", "portfolio_url": "http://www.samuelzeller.ch/", "bio": "Freelance photographer available for projects. On Instagram @zellersamuel - Inquiries: sam@samuelzeller.ch", "location": "Geneva, Switzerland", "total_likes": 52, "total_photos": 210, "total_collections": 3, "profile_image": { "small": 'https://images.unsplash.com/profile-1459084990923-3f9f152c3799?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=55a9d05123e81facff8540f8dd04f6ac', "medium": 'https://images.unsplash.com/profile-1459084990923-3f9f152c3799?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=b5b6563604a357c81ab7b7d031711621', "large": 'https://images.unsplash.com/profile-1459084990923-3f9f152c3799?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=f2d56cf35c7e667ca84ed0a4dabdc2c6' }, "links": { "self": "https://api.unsplash.com/users/samuelzeller", "html": "http://unsplash.com/@samuelzeller", "photos": "https://api.unsplash.com/users/samuelzeller/photos", "likes": "https://api.unsplash.com/users/samuelzeller/likes", "portfolio": "https://api.unsplash.com/users/samuelzeller/portfolio", "following": "https://api.unsplash.com/users/samuelzeller/following", "followers": "https://api.unsplash.com/users/samuelzeller/followers" } }, "current_user_collections": [], "urls": { "raw": "https://images.unsplash.com/photo-1480339066136-cbded9b457ab", "full": 'https://images.unsplash.com/photo-1480339066136-cbded9b457ab?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=65f5a54f33577a1479f3640feeb82db8', "regular": 'https://images.unsplash.com/photo-1480339066136-cbded9b457ab?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=d7452623b77cbe2ec4a0857512149f4f', "small": 'https://images.unsplash.com/photo-1480339066136-cbded9b457ab?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=21d0581ad138786c9899709319071682', "thumb": 'https://images.unsplash.com/photo-1480339066136-cbded9b457ab?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=f9eb2be1f208314961f6f6f51d02ed92' }, "categories": [], "links": { "self": "https://api.unsplash.com/photos/yn_x_igbgPc", "html": "http://unsplash.com/photos/yn_x_igbgPc", "download": "http://unsplash.com/photos/yn_x_igbgPc/download", "download_location": "https://api.unsplash.com/photos/yn_x_igbgPc/download" } }, { "id": "0jw6_7Hy-rM", "created_at": "2016-11-28T06:57:51-05:00", "width": 6000, "height": 4000, "color": "#F2E6D8", "likes": 85, "liked_by_user": false, "user": { "id": "gnwb2chNB0Q", "username": "samuelzeller", "name": "Samuel Zeller", "first_name": "Samuel", "last_name": "Zeller", "portfolio_url": "http://www.samuelzeller.ch/", "bio": "Freelance photographer available for projects. On Instagram @zellersamuel - Inquiries: sam@samuelzeller.ch", "location": "Geneva, Switzerland", "total_likes": 52, "total_photos": 210, "total_collections": 3, "profile_image": { "small": 'https://images.unsplash.com/profile-1459084990923-3f9f152c3799?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=55a9d05123e81facff8540f8dd04f6ac', "medium": 'https://images.unsplash.com/profile-1459084990923-3f9f152c3799?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=b5b6563604a357c81ab7b7d031711621', "large": 'https://images.unsplash.com/profile-1459084990923-3f9f152c3799?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=f2d56cf35c7e667ca84ed0a4dabdc2c6' }, "links": { "self": "https://api.unsplash.com/users/samuelzeller", "html": "http://unsplash.com/@samuelzeller", "photos": "https://api.unsplash.com/users/samuelzeller/photos", "likes": "https://api.unsplash.com/users/samuelzeller/likes", "portfolio": "https://api.unsplash.com/users/samuelzeller/portfolio", "following": "https://api.unsplash.com/users/samuelzeller/following", "followers": "https://api.unsplash.com/users/samuelzeller/followers" } }, "current_user_collections": [], "urls": { "raw": "https://images.unsplash.com/photo-1480334026689-1ee5069c978f", "full": 'https://images.unsplash.com/photo-1480334026689-1ee5069c978f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=a80bb4f83145ba1023483708699190f0', "regular": 'https://images.unsplash.com/photo-1480334026689-1ee5069c978f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=0f690eb532bf2238adacc5bdfe714a30', "small": 'https://images.unsplash.com/photo-1480334026689-1ee5069c978f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=fad9364f8e63fe088a8dc32d09a22294', "thumb": 'https://images.unsplash.com/photo-1480334026689-1ee5069c978f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=0bf5366ca7ff0f575d98030d93269051' }, "categories": [], "links": { "self": "https://api.unsplash.com/photos/0jw6_7Hy-rM", "html": "http://unsplash.com/photos/0jw6_7Hy-rM", "download": "http://unsplash.com/photos/0jw6_7Hy-rM/download", "download_location": "https://api.unsplash.com/photos/0jw6_7Hy-rM/download" } }, { "id": "XOA4SIO6c3I", "created_at": "2016-11-28T06:46:31-05:00", "width": 3156, "height": 4734, "color": "#F7F7F7", "likes": 0, "liked_by_user": false, "user": { "id": "gnwb2chNB0Q", "username": "samuelzeller", "name": "Samuel Zeller", "first_name": "Samuel", "last_name": "Zeller", "portfolio_url": "http://www.samuelzeller.ch/", "bio": "Freelance photographer available for projects. On Instagram @zellersamuel - Inquiries: sam@samuelzeller.ch", "location": "Geneva, Switzerland", "total_likes": 52, "total_photos": 210, "total_collections": 3, "profile_image": { "small": 'https://images.unsplash.com/profile-1459084990923-3f9f152c3799?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=55a9d05123e81facff8540f8dd04f6ac', "medium": 'https://images.unsplash.com/profile-1459084990923-3f9f152c3799?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=b5b6563604a357c81ab7b7d031711621', "large": 'https://images.unsplash.com/profile-1459084990923-3f9f152c3799?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=f2d56cf35c7e667ca84ed0a4dabdc2c6' }, "links": { "self": "https://api.unsplash.com/users/samuelzeller", "html": "http://unsplash.com/@samuelzeller", "photos": "https://api.unsplash.com/users/samuelzeller/photos", "likes": "https://api.unsplash.com/users/samuelzeller/likes", "portfolio": "https://api.unsplash.com/users/samuelzeller/portfolio", "following": "https://api.unsplash.com/users/samuelzeller/following", "followers": "https://api.unsplash.com/users/samuelzeller/followers" } }, "current_user_collections": [], "urls": { "raw": "https://images.unsplash.com/photo-1480333440693-6ef380b9d2f4", "full": 'https://images.unsplash.com/photo-1480333440693-6ef380b9d2f4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=dc4684e4484d36b85fcf9ed9d9d3f2e0', "regular": 'https://images.unsplash.com/photo-1480333440693-6ef380b9d2f4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=c24407d607d87125cfdf0ee68b40544b', "small": 'https://images.unsplash.com/photo-1480333440693-6ef380b9d2f4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=61e510ee5945593f1d5f50ef57c08fa7', "thumb": 'https://images.unsplash.com/photo-1480333440693-6ef380b9d2f4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=01217453cbb9a0d83863086a59608b50' }, "categories": [], "links": { "self": "https://api.unsplash.com/photos/XOA4SIO6c3I", "html": "http://unsplash.com/photos/XOA4SIO6c3I", "download": "http://unsplash.com/photos/XOA4SIO6c3I/download", "download_location": "https://api.unsplash.com/photos/XOA4SIO6c3I/download" } }, { "id": "PdGlBdz8q8U", "created_at": "2016-11-28T06:36:28-05:00", "width": 3161, "height": 4742, "color": "#0C1113", "likes": 31, "liked_by_user": false, "user": { "id": "gnwb2chNB0Q", "username": "samuelzeller", "name": "Samuel Zeller", "first_name": "Samuel", "last_name": "Zeller", "portfolio_url": "http://www.samuelzeller.ch/", "bio": "Freelance photographer available for projects. On Instagram @zellersamuel - Inquiries: sam@samuelzeller.ch", "location": "Geneva, Switzerland", "total_likes": 52, "total_photos": 210, "total_collections": 3, "profile_image": { "small": 'https://images.unsplash.com/profile-1459084990923-3f9f152c3799?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=55a9d05123e81facff8540f8dd04f6ac', "medium": 'https://images.unsplash.com/profile-1459084990923-3f9f152c3799?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=b5b6563604a357c81ab7b7d031711621', "large": 'https://images.unsplash.com/profile-1459084990923-3f9f152c3799?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=f2d56cf35c7e667ca84ed0a4dabdc2c6' }, "links": { "self": "https://api.unsplash.com/users/samuelzeller", "html": "http://unsplash.com/@samuelzeller", "photos": "https://api.unsplash.com/users/samuelzeller/photos", "likes": "https://api.unsplash.com/users/samuelzeller/likes", "portfolio": "https://api.unsplash.com/users/samuelzeller/portfolio", "following": "https://api.unsplash.com/users/samuelzeller/following", "followers": "https://api.unsplash.com/users/samuelzeller/followers" } }, "current_user_collections": [], "urls": { "raw": "https://images.unsplash.com/photo-1480332815230-946779a1f39b", "full": 'https://images.unsplash.com/photo-1480332815230-946779a1f39b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=7548d7f3adeee70bfbce8f07a2a8102d', "regular": 'https://images.unsplash.com/photo-1480332815230-946779a1f39b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=2195e3f8b91300464ed34952872ac2ee', "small": 'https://images.unsplash.com/photo-1480332815230-946779a1f39b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=79d7fd0d38b03167cf7fe68d60ad87be', "thumb": 'https://images.unsplash.com/photo-1480332815230-946779a1f39b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=979690b391d1f4d782b8cdea2de0a0e3' }, "categories": [], "links": { "self": "https://api.unsplash.com/photos/PdGlBdz8q8U", "html": "http://unsplash.com/photos/PdGlBdz8q8U", "download": "http://unsplash.com/photos/PdGlBdz8q8U/download", "download_location": "https://api.unsplash.com/photos/PdGlBdz8q8U/download" } }, { "id": "VK284NKoAVU", "created_at": "2016-11-05T11:05:25-04:00", "width": 4000, "height": 6000, "color": "#FFA08E", "likes": 108, "liked_by_user": false, "user": { "id": "gnwb2chNB0Q", "username": "samuelzeller", "name": "Samuel Zeller", "first_name": "Samuel", "last_name": "Zeller", "portfolio_url": "http://www.samuelzeller.ch/", "bio": "Freelance photographer available for projects. On Instagram @zellersamuel - Inquiries: sam@samuelzeller.ch", "location": "Geneva, Switzerland", "total_likes": 52, "total_photos": 210, "total_collections": 3, "profile_image": { "small": 'https://images.unsplash.com/profile-1459084990923-3f9f152c3799?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=55a9d05123e81facff8540f8dd04f6ac', "medium": 'https://images.unsplash.com/profile-1459084990923-3f9f152c3799?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=b5b6563604a357c81ab7b7d031711621', "large": 'https://images.unsplash.com/profile-1459084990923-3f9f152c3799?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=f2d56cf35c7e667ca84ed0a4dabdc2c6' }, "links": { "self": "https://api.unsplash.com/users/samuelzeller", "html": "http://unsplash.com/@samuelzeller", "photos": "https://api.unsplash.com/users/samuelzeller/photos", "likes": "https://api.unsplash.com/users/samuelzeller/likes", "portfolio": "https://api.unsplash.com/users/samuelzeller/portfolio", "following": "https://api.unsplash.com/users/samuelzeller/following", "followers": "https://api.unsplash.com/users/samuelzeller/followers" } }, "current_user_collections": [], "urls": { "raw": "https://images.unsplash.com/photo-1478358161113-b0e11994a36b", "full": 'https://images.unsplash.com/photo-1478358161113-b0e11994a36b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=b0ad295fcf87d0143708edcf88e97162', "regular": 'https://images.unsplash.com/photo-1478358161113-b0e11994a36b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=545bb25856598ef66864e9b875a15581', "small": 'https://images.unsplash.com/photo-1478358161113-b0e11994a36b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=23108237289fc36c8bc1e2d2787b9e20', "thumb": 'https://images.unsplash.com/photo-1478358161113-b0e11994a36b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=1247cc150620b4a4c9ab53bff6f58962' }, "categories": [], "links": { "self": "https://api.unsplash.com/photos/VK284NKoAVU", "html": "http://unsplash.com/photos/VK284NKoAVU", "download": "http://unsplash.com/photos/VK284NKoAVU/download", "download_location": "https://api.unsplash.com/photos/VK284NKoAVU/download" } }, { "id": "xZd3EUj9fFE", "created_at": "2016-11-01T14:33:53-04:00", "width": 4860, "height": 3240, "color": "#020202", "likes": 63, "liked_by_user": false, "user": { "id": "gnwb2chNB0Q", "username": "samuelzeller", "name": "Samuel Zeller", "first_name": "Samuel", "last_name": "Zeller", "portfolio_url": "http://www.samuelzeller.ch/", "bio": "Freelance photographer available for projects. On Instagram @zellersamuel - Inquiries: sam@samuelzeller.ch", "location": "Geneva, Switzerland", "total_likes": 52, "total_photos": 210, "total_collections": 3, "profile_image": { "small": 'https://images.unsplash.com/profile-1459084990923-3f9f152c3799?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=55a9d05123e81facff8540f8dd04f6ac', "medium": 'https://images.unsplash.com/profile-1459084990923-3f9f152c3799?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=b5b6563604a357c81ab7b7d031711621', "large": 'https://images.unsplash.com/profile-1459084990923-3f9f152c3799?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=f2d56cf35c7e667ca84ed0a4dabdc2c6' }, "links": { "self": "https://api.unsplash.com/users/samuelzeller", "html": "http://unsplash.com/@samuelzeller", "photos": "https://api.unsplash.com/users/samuelzeller/photos", "likes": "https://api.unsplash.com/users/samuelzeller/likes", "portfolio": "https://api.unsplash.com/users/samuelzeller/portfolio", "following": "https://api.unsplash.com/users/samuelzeller/following", "followers": "https://api.unsplash.com/users/samuelzeller/followers" } }, "current_user_collections": [], "urls": { "raw": "https://images.unsplash.com/photo-1478025101087-7f1ce4c83156", "full": 'https://images.unsplash.com/photo-1478025101087-7f1ce4c83156?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=d77b8c201f4315222f4e0a04aa910af7', "regular": 'https://images.unsplash.com/photo-1478025101087-7f1ce4c83156?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=509fc91e8af585293578d2794bd8bbab', "small": 'https://images.unsplash.com/photo-1478025101087-7f1ce4c83156?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=86d76d2e146c4d9dc06e90848c0a4b49', "thumb": 'https://images.unsplash.com/photo-1478025101087-7f1ce4c83156?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=9132b98a6ea891090406b2fbd5b1a2fb' }, "categories": [], "links": { "self": "https://api.unsplash.com/photos/xZd3EUj9fFE", "html": "http://unsplash.com/photos/xZd3EUj9fFE", "download": "http://unsplash.com/photos/xZd3EUj9fFE/download", "download_location": "https://api.unsplash.com/photos/xZd3EUj9fFE/download" } }, { "id": "P0srUaN6CFI", "created_at": "2016-11-01T14:25:51-04:00", "width": 6000, "height": 4000, "color": "#3C2B2B", "likes": 74, "liked_by_user": false, "user": { "id": "gnwb2chNB0Q", "username": "samuelzeller", "name": "Samuel Zeller", "first_name": "Samuel", "last_name": "Zeller", "portfolio_url": "http://www.samuelzeller.ch/", "bio": "Freelance photographer available for projects. On Instagram @zellersamuel - Inquiries: sam@samuelzeller.ch", "location": "Geneva, Switzerland", "total_likes": 52, "total_photos": 210, "total_collections": 3, "profile_image": { "small": 'https://images.unsplash.com/profile-1459084990923-3f9f152c3799?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=55a9d05123e81facff8540f8dd04f6ac', "medium": 'https://images.unsplash.com/profile-1459084990923-3f9f152c3799?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=b5b6563604a357c81ab7b7d031711621', "large": 'https://images.unsplash.com/profile-1459084990923-3f9f152c3799?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=f2d56cf35c7e667ca84ed0a4dabdc2c6' }, "links": { "self": "https://api.unsplash.com/users/samuelzeller", "html": "http://unsplash.com/@samuelzeller", "photos": "https://api.unsplash.com/users/samuelzeller/photos", "likes": "https://api.unsplash.com/users/samuelzeller/likes", "portfolio": "https://api.unsplash.com/users/samuelzeller/portfolio", "following": "https://api.unsplash.com/users/samuelzeller/following", "followers": "https://api.unsplash.com/users/samuelzeller/followers" } }, "current_user_collections": [], "urls": { "raw": "https://images.unsplash.com/photo-1478024646077-8a9b56e5319c", "full": 'https://images.unsplash.com/photo-1478024646077-8a9b56e5319c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=0e5bf8e0ee6dae297572ee26807ed862', "regular": 'https://images.unsplash.com/photo-1478024646077-8a9b56e5319c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=35da6bd699999dc24d0762183ea30e8b', "small": 'https://images.unsplash.com/photo-1478024646077-8a9b56e5319c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=74116fa57462d0645d588010806801eb', "thumb": 'https://images.unsplash.com/photo-1478024646077-8a9b56e5319c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=c94a92764b2b745aa6fb83b942fa26b4' }, "categories": [], "links": { "self": "https://api.unsplash.com/photos/P0srUaN6CFI", "html": "http://unsplash.com/photos/P0srUaN6CFI", "download": "http://unsplash.com/photos/P0srUaN6CFI/download", "download_location": "https://api.unsplash.com/photos/P0srUaN6CFI/download" } }, { "id": "CMIwnrT6ukM", "created_at": "2016-11-01T14:21:08-04:00", "width": 4896, "height": 3264, "color": "#070603", "likes": 36, "liked_by_user": false, "user": { "id": "gnwb2chNB0Q", "username": "samuelzeller", "name": "Samuel Zeller", "first_name": "Samuel", "last_name": "Zeller", "portfolio_url": "http://www.samuelzeller.ch/", "bio": "Freelance photographer available for projects. On Instagram @zellersamuel - Inquiries: sam@samuelzeller.ch", "location": "Geneva, Switzerland", "total_likes": 52, "total_photos": 210, "total_collections": 3, "profile_image": { "small": 'https://images.unsplash.com/profile-1459084990923-3f9f152c3799?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=55a9d05123e81facff8540f8dd04f6ac', "medium": 'https://images.unsplash.com/profile-1459084990923-3f9f152c3799?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=b5b6563604a357c81ab7b7d031711621', "large": 'https://images.unsplash.com/profile-1459084990923-3f9f152c3799?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=f2d56cf35c7e667ca84ed0a4dabdc2c6' }, "links": { "self": "https://api.unsplash.com/users/samuelzeller", "html": "http://unsplash.com/@samuelzeller", "photos": "https://api.unsplash.com/users/samuelzeller/photos", "likes": "https://api.unsplash.com/users/samuelzeller/likes", "portfolio": "https://api.unsplash.com/users/samuelzeller/portfolio", "following": "https://api.unsplash.com/users/samuelzeller/following", "followers": "https://api.unsplash.com/users/samuelzeller/followers" } }, "current_user_collections": [], "urls": { "raw": "https://images.unsplash.com/photo-1478024386625-2c8f6e74c874", "full": 'https://images.unsplash.com/photo-1478024386625-2c8f6e74c874?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=194da7fa55298806b61b4c513f8c53c5', "regular": 'https://images.unsplash.com/photo-1478024386625-2c8f6e74c874?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=07d49b1c37316a9425ab7c7155ff5aff', "small": 'https://images.unsplash.com/photo-1478024386625-2c8f6e74c874?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=4b5bcf1b70b2bf7a1811241c23062251', "thumb": 'https://images.unsplash.com/photo-1478024386625-2c8f6e74c874?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=84fc9de56baad9852d01830dc5f8abe8' }, "categories": [], "links": { "self": "https://api.unsplash.com/photos/CMIwnrT6ukM", "html": "http://unsplash.com/photos/CMIwnrT6ukM", "download": "http://unsplash.com/photos/CMIwnrT6ukM/download", "download_location": "https://api.unsplash.com/photos/CMIwnrT6ukM/download" } }, { "id": "yWvfQwwtXhk", "created_at": "2016-11-01T13:52:21-04:00", "width": 3066, "height": 2300, "color": "#FCFCFC", "likes": 8, "liked_by_user": false, "user": { "id": "gnwb2chNB0Q", "username": "samuelzeller", "name": "Samuel Zeller", "first_name": "Samuel", "last_name": "Zeller", "portfolio_url": "http://www.samuelzeller.ch/", "bio": "Freelance photographer available for projects. On Instagram @zellersamuel - Inquiries: sam@samuelzeller.ch", "location": "Geneva, Switzerland", "total_likes": 52, "total_photos": 210, "total_collections": 3, "profile_image": { "small": 'https://images.unsplash.com/profile-1459084990923-3f9f152c3799?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=55a9d05123e81facff8540f8dd04f6ac', "medium": 'https://images.unsplash.com/profile-1459084990923-3f9f152c3799?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=b5b6563604a357c81ab7b7d031711621', "large": 'https://images.unsplash.com/profile-1459084990923-3f9f152c3799?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=f2d56cf35c7e667ca84ed0a4dabdc2c6' }, "links": { "self": "https://api.unsplash.com/users/samuelzeller", "html": "http://unsplash.com/@samuelzeller", "photos": "https://api.unsplash.com/users/samuelzeller/photos", "likes": "https://api.unsplash.com/users/samuelzeller/likes", "portfolio": "https://api.unsplash.com/users/samuelzeller/portfolio", "following": "https://api.unsplash.com/users/samuelzeller/following", "followers": "https://api.unsplash.com/users/samuelzeller/followers" } }, "current_user_collections": [], "urls": { "raw": "https://images.unsplash.com/photo-1478022599861-7d8a1d4745cd", "full": 'https://images.unsplash.com/photo-1478022599861-7d8a1d4745cd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=d40975963eac4d400c4bb140f8002af8', "regular": 'https://images.unsplash.com/photo-1478022599861-7d8a1d4745cd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=2fb9ba1b6cf079ba2921792a85cad9bd', "small": 'https://images.unsplash.com/photo-1478022599861-7d8a1d4745cd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=0c0ecfc6788f7761a327f628ddff7999', "thumb": 'https://images.unsplash.com/photo-1478022599861-7d8a1d4745cd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3dc5323994e77a2817222724b04ffe82' }, "categories": [], "links": { "self": "https://api.unsplash.com/photos/yWvfQwwtXhk", "html": "http://unsplash.com/photos/yWvfQwwtXhk", "download": "http://unsplash.com/photos/yWvfQwwtXhk/download", "download_location": "https://api.unsplash.com/photos/yWvfQwwtXhk/download" } }],
	  popularPhotos: [{ "id": "jLwVAUtLOAQ", "created_at": "2015-05-28T10:00:01-04:00", "width": 4000, "height": 2667, "color": "#A39F88", "likes": 3849, "liked_by_user": false, "user": { "id": "f-2B9H4K-Yo", "username": "dustinlee", "name": "Dustin Lee", "first_name": "Dustin", "last_name": "Lee", "portfolio_url": "http://www.retrosupply.co", "bio": "I'm a designer and the founder of RetroSupply. RetroSupply offers a suite of high-quality photos, templates, brushes, actions, plug-ins and more. Get 9 best-selling RetroSupply goods free here: http://bit.ly/Free-RetroSupply-Goods ", "location": "The Great State of Washington", "total_likes": 1, "total_photos": 10, "total_collections": 0, "profile_image": { "small": 'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=0ad68f44c4725d5a3fda019bab9d3edc', "medium": 'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=356bd4b76a3d4eb97d63f45b818dd358', "large": 'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=ee8bbf5fb8d6e43aaaa238feae2fe90d' }, "links": { "self": "https://api.unsplash.com/users/dustinlee", "html": "http://unsplash.com/@dustinlee", "photos": "https://api.unsplash.com/users/dustinlee/photos", "likes": "https://api.unsplash.com/users/dustinlee/likes", "portfolio": "https://api.unsplash.com/users/dustinlee/portfolio", "following": "https://api.unsplash.com/users/dustinlee/following", "followers": "https://api.unsplash.com/users/dustinlee/followers" } }, "current_user_collections": [], "urls": { "raw": "https://images.unsplash.com/photo-1432821596592-e2c18b78144f", "full": 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=6bbc5d6405332300b140abd256b066f3', "regular": 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=d9bcb3e9a0c29aaebce247d1c84a2625', "small": 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=a2cb0662ff4cf8f41d2f0e8bb69eb628', "thumb": 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=985faed62252e0339501f9f83cdaa743' }, "categories": [{ "id": 4, "title": "Nature", "photo_count": 54184, "links": { "self": "https://api.unsplash.com/categories/4", "photos": "https://api.unsplash.com/categories/4/photos" } }, { "id": 8, "title": "Objects", "photo_count": 13840, "links": { "self": "https://api.unsplash.com/categories/8", "photos": "https://api.unsplash.com/categories/8/photos" } }, { "id": 7, "title": "Technology", "photo_count": 1407, "links": { "self": "https://api.unsplash.com/categories/7", "photos": "https://api.unsplash.com/categories/7/photos" } }], "links": { "self": "https://api.unsplash.com/photos/jLwVAUtLOAQ", "html": "http://unsplash.com/photos/jLwVAUtLOAQ", "download": "http://unsplash.com/photos/jLwVAUtLOAQ/download", "download_location": "https://api.unsplash.com/photos/jLwVAUtLOAQ/download" } }, { "id": "oMpAz-DN-9I", "created_at": "2015-10-12T22:36:06-04:00", "width": 5616, "height": 3744, "color": "#433329", "likes": 3751, "liked_by_user": false, "user": { "id": "XQqOpGtnD6U", "username": "grakozy", "name": "Greg Rakozy", "first_name": "Greg", "last_name": "Rakozy", "portfolio_url": "http://grakozy.com", "bio": "Photo Taker. Website Maker.", "location": "Provo, Utah", "total_likes": 67, "total_photos": 42, "total_collections": 9, "profile_image": { "small": 'https://images.unsplash.com/profile-1444799905178-f917b68706e2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=68f77c878f138374dfd81816f343a2d8', "medium": 'https://images.unsplash.com/profile-1444799905178-f917b68706e2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=211fe003fc3e207c02f54d15fc336241', "large": 'https://images.unsplash.com/profile-1444799905178-f917b68706e2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=b7741de27bc0d12948b76289c43810f2' }, "links": { "self": "https://api.unsplash.com/users/grakozy", "html": "http://unsplash.com/@grakozy", "photos": "https://api.unsplash.com/users/grakozy/photos", "likes": "https://api.unsplash.com/users/grakozy/likes", "portfolio": "https://api.unsplash.com/users/grakozy/portfolio", "following": "https://api.unsplash.com/users/grakozy/following", "followers": "https://api.unsplash.com/users/grakozy/followers" } }, "current_user_collections": [], "urls": { "raw": "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3", "full": 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=21db8d0c0aca429fa3ec1b61f6fd726d', "regular": 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=16b26b32370aa83d0cab4d145e0d7e98', "small": 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=bec54cf10d444ca04afb9f1f6e6bf3b1', "thumb": 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=a47a6701423640b559bbecb84989ea73' }, "categories": [{ "id": 4, "title": "Nature", "photo_count": 54184, "links": { "self": "https://api.unsplash.com/categories/4", "photos": "https://api.unsplash.com/categories/4/photos" } }, { "id": 6, "title": "People", "photo_count": 18319, "links": { "self": "https://api.unsplash.com/categories/6", "photos": "https://api.unsplash.com/categories/6/photos" } }], "links": { "self": "https://api.unsplash.com/photos/oMpAz-DN-9I", "html": "http://unsplash.com/photos/oMpAz-DN-9I", "download": "http://unsplash.com/photos/oMpAz-DN-9I/download", "download_location": "https://api.unsplash.com/photos/oMpAz-DN-9I/download" } }, { "id": "Oaqk7qqNh_c", "created_at": "2016-03-07T11:57:22-05:00", "width": 5472, "height": 3648, "color": "#32211E", "likes": 2229, "liked_by_user": false, "user": { "id": "8W1rBhqAtMU", "username": "impatrickt", "name": "Patrick Tomasso", "first_name": "Patrick", "last_name": "Tomasso", "portfolio_url": "http://instagram.com/impatrickt", "bio": "FIND ME EVERYWHERE @IMPATRICKT", "location": "Toronto", "total_likes": 61, "total_photos": 37, "total_collections": 2, "profile_image": { "small": 'https://images.unsplash.com/profile-fb-1444241666-4923a57f944a.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=b70b99dcc215e2dbbe811ddf92d1dac3', "medium": 'https://images.unsplash.com/profile-fb-1444241666-4923a57f944a.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=26439789586d9fa2a6251822d86d887b', "large": 'https://images.unsplash.com/profile-fb-1444241666-4923a57f944a.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=d263b37f8dac7266e718f78294364309' }, "links": { "self": "https://api.unsplash.com/users/impatrickt", "html": "http://unsplash.com/@impatrickt", "photos": "https://api.unsplash.com/users/impatrickt/photos", "likes": "https://api.unsplash.com/users/impatrickt/likes", "portfolio": "https://api.unsplash.com/users/impatrickt/portfolio", "following": "https://api.unsplash.com/users/impatrickt/following", "followers": "https://api.unsplash.com/users/impatrickt/followers" } }, "current_user_collections": [], "urls": { "raw": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d", "full": 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=b2c6578bcbf523cb7155dcc894ae32ba', "regular": 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=07a160bf838bae399357b52dd71957ef', "small": 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=1c96aab40f9bf9aa2aa469541bc42db5', "thumb": 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=55514d005618570384b9396bb08723ff' }, "categories": [{ "id": 8, "title": "Objects", "photo_count": 13840, "links": { "self": "https://api.unsplash.com/categories/8", "photos": "https://api.unsplash.com/categories/8/photos" } }], "links": { "self": "https://api.unsplash.com/photos/Oaqk7qqNh_c", "html": "http://unsplash.com/photos/Oaqk7qqNh_c", "download": "http://unsplash.com/photos/Oaqk7qqNh_c/download", "download_location": "https://api.unsplash.com/photos/Oaqk7qqNh_c/download" } }, { "id": "TIrXot28Znc", "created_at": "2014-09-25T21:17:08-04:00", "width": 2291, "height": 3450, "color": "#214678", "likes": 987, "liked_by_user": false, "user": { "id": "dArU7oUY0uU", "username": "juskteez", "name": "Juskteez Vu", "first_name": "Juskteez", "last_name": "Vu", "portfolio_url": "http://500px.com/juskteez", "bio": "", "location": null, "total_likes": 2, "total_photos": 4, "total_collections": 0, "profile_image": { "small": 'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=0ad68f44c4725d5a3fda019bab9d3edc', "medium": 'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=356bd4b76a3d4eb97d63f45b818dd358', "large": 'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=ee8bbf5fb8d6e43aaaa238feae2fe90d' }, "links": { "self": "https://api.unsplash.com/users/juskteez", "html": "http://unsplash.com/@juskteez", "photos": "https://api.unsplash.com/users/juskteez/photos", "likes": "https://api.unsplash.com/users/juskteez/likes", "portfolio": "https://api.unsplash.com/users/juskteez/portfolio", "following": "https://api.unsplash.com/users/juskteez/following", "followers": "https://api.unsplash.com/users/juskteez/followers" } }, "current_user_collections": [], "urls": { "raw": "https://images.unsplash.com/uploads/14116941824817ba1f28e/78c8dff1", "full": 'https://images.unsplash.com/uploads/14116941824817ba1f28e/78c8dff1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=6e2dcaa96e999d922256480d63359cc8', "regular": 'https://images.unsplash.com/uploads/14116941824817ba1f28e/78c8dff1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=5167e54e0d370402b59fa1bdebeff645', "small": 'https://images.unsplash.com/uploads/14116941824817ba1f28e/78c8dff1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=4f59ccdd1fabb9e19c5d5296a261b70d', "thumb": 'https://images.unsplash.com/uploads/14116941824817ba1f28e/78c8dff1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=4fdbcb9637a0cd568f3b9fdf89be2911' }, "categories": [{ "id": 4, "title": "Nature", "photo_count": 54184, "links": { "self": "https://api.unsplash.com/categories/4", "photos": "https://api.unsplash.com/categories/4/photos" } }], "links": { "self": "https://api.unsplash.com/photos/TIrXot28Znc", "html": "http://unsplash.com/photos/TIrXot28Znc", "download": "http://unsplash.com/photos/TIrXot28Znc/download", "download_location": "https://api.unsplash.com/photos/TIrXot28Znc/download" } }, { "id": "9dI3g8owHiI", "created_at": "2014-11-18T14:37:26-05:00", "width": 3820, "height": 2762, "color": "#ADA4A4", "likes": 1123, "liked_by_user": false, "user": { "id": "Ul0QVz12Goo", "username": "ugmonk", "name": "Jeff Sheldon", "first_name": "Jeff", "last_name": "Sheldon", "portfolio_url": "http://ugmonk.com/", "bio": "Founder and designer of Ugmonk", "location": null, "total_likes": 0, "total_photos": 23, "total_collections": 2, "profile_image": { "small": 'https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=7cfe3b93750cb0c93e2f7caec08b5a41', "medium": 'https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=5a9dc749c43ce5bd60870b129a40902f', "large": 'https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=32085a077889586df88bfbe406692202' }, "links": { "self": "https://api.unsplash.com/users/ugmonk", "html": "http://unsplash.com/@ugmonk", "photos": "https://api.unsplash.com/users/ugmonk/photos", "likes": "https://api.unsplash.com/users/ugmonk/likes", "portfolio": "https://api.unsplash.com/users/ugmonk/portfolio", "following": "https://api.unsplash.com/users/ugmonk/following", "followers": "https://api.unsplash.com/users/ugmonk/followers" } }, "current_user_collections": [], "urls": { "raw": "https://images.unsplash.com/photo-1416339442236-8ceb164046f8", "full": 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=6ff5f805987a74c1756554cd770f95a3', "regular": 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=dae18f22e557ce908908d88ea4c331f8', "small": 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=ff5de5b9b0918841634fd070153146fe', "thumb": 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=4d989b61dd70ee857e1173b9622104f2' }, "categories": [{ "id": 8, "title": "Objects", "photo_count": 13840, "links": { "self": "https://api.unsplash.com/categories/8", "photos": "https://api.unsplash.com/categories/8/photos" } }, { "id": 7, "title": "Technology", "photo_count": 1407, "links": { "self": "https://api.unsplash.com/categories/7", "photos": "https://api.unsplash.com/categories/7/photos" } }], "links": { "self": "https://api.unsplash.com/photos/9dI3g8owHiI", "html": "http://unsplash.com/photos/9dI3g8owHiI", "download": "http://unsplash.com/photos/9dI3g8owHiI/download", "download_location": "https://api.unsplash.com/photos/9dI3g8owHiI/download" } }, { "id": "IJ25m7fXqtk", "created_at": "2015-07-07T05:48:33-04:00", "width": 5852, "height": 3901, "color": "#F7C401", "likes": 1879, "liked_by_user": false, "user": { "id": "lWyqqgyrHHw", "username": "frostroomhead", "name": "Rodion Kutsaev", "first_name": "Rodion", "last_name": "Kutsaev", "portfolio_url": "https://www.flickr.com/photos/frostroomhead/", "bio": "www.istockphoto.com/portfolio/frostroomhead creativemarket.com/Frostroomhead", "location": "Ukraine", "total_likes": 232, "total_photos": 123, "total_collections": 0, "profile_image": { "small": 'https://images.unsplash.com/profile-1441485271545-5967d833a329?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=f8c4eafc9a0c2d5b615c6a51191c1607', "medium": 'https://images.unsplash.com/profile-1441485271545-5967d833a329?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=7e22f707fb7a4c6ff30d0dd8154ef585', "large": 'https://images.unsplash.com/profile-1441485271545-5967d833a329?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=86bcb7a771fae4d00989719dbe04bed0' }, "links": { "self": "https://api.unsplash.com/users/frostroomhead", "html": "http://unsplash.com/@frostroomhead", "photos": "https://api.unsplash.com/users/frostroomhead/photos", "likes": "https://api.unsplash.com/users/frostroomhead/likes", "portfolio": "https://api.unsplash.com/users/frostroomhead/portfolio", "following": "https://api.unsplash.com/users/frostroomhead/following", "followers": "https://api.unsplash.com/users/frostroomhead/followers" } }, "current_user_collections": [], "urls": { "raw": "https://images.unsplash.com/photo-1436262513933-a0b06755c784", "full": 'https://images.unsplash.com/photo-1436262513933-a0b06755c784?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=411401e2a11d88d1106f47eb8322c109', "regular": 'https://images.unsplash.com/photo-1436262513933-a0b06755c784?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=4c0aec371acdaabde4447cf1cfae5972', "small": 'https://images.unsplash.com/photo-1436262513933-a0b06755c784?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=03a86509e073b90d8ea623a8d054ce76', "thumb": 'https://images.unsplash.com/photo-1436262513933-a0b06755c784?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=59071567e3f6855c4e9dc0ef3d22484c' }, "categories": [{ "id": 2, "title": "Buildings", "photo_count": 22897, "links": { "self": "https://api.unsplash.com/categories/2", "photos": "https://api.unsplash.com/categories/2/photos" } }, { "id": 6, "title": "People", "photo_count": 18319, "links": { "self": "https://api.unsplash.com/categories/6", "photos": "https://api.unsplash.com/categories/6/photos" } }], "links": { "self": "https://api.unsplash.com/photos/IJ25m7fXqtk", "html": "http://unsplash.com/photos/IJ25m7fXqtk", "download": "http://unsplash.com/photos/IJ25m7fXqtk/download", "download_location": "https://api.unsplash.com/photos/IJ25m7fXqtk/download" } }, { "id": "YIN4xUBaqnk", "created_at": "2015-01-22T23:15:56-05:00", "width": 3936, "height": 2624, "color": "#444B4E", "likes": 1318, "liked_by_user": false, "user": { "id": "PhSMHOt6eWs", "username": "morgansessions", "name": "Morgan Sessions", "first_name": "Morgan", "last_name": "Sessions", "portfolio_url": "http://www.morgansessions.com", "bio": "", "location": null, "total_likes": 0, "total_photos": 15, "total_collections": 0, "profile_image": { "small": 'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=0ad68f44c4725d5a3fda019bab9d3edc', "medium": 'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=356bd4b76a3d4eb97d63f45b818dd358', "large": 'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=ee8bbf5fb8d6e43aaaa238feae2fe90d' }, "links": { "self": "https://api.unsplash.com/users/morgansessions", "html": "http://unsplash.com/@morgansessions", "photos": "https://api.unsplash.com/users/morgansessions/photos", "likes": "https://api.unsplash.com/users/morgansessions/likes", "portfolio": "https://api.unsplash.com/users/morgansessions/portfolio", "following": "https://api.unsplash.com/users/morgansessions/following", "followers": "https://api.unsplash.com/users/morgansessions/followers" } }, "current_user_collections": [], "urls": { "raw": "https://images.unsplash.com/photo-1421986527537-888d998adb74", "full": 'https://images.unsplash.com/photo-1421986527537-888d998adb74?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=55d3fcb420da0e769555e3f34e04c2d6', "regular": 'https://images.unsplash.com/photo-1421986527537-888d998adb74?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=68f6c1ff72e587507e6bd2870e116b30', "small": 'https://images.unsplash.com/photo-1421986527537-888d998adb74?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=dbb43de18afcccc20913b541fdc5be17', "thumb": 'https://images.unsplash.com/photo-1421986527537-888d998adb74?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=fb7e065ee7045d3d774250ffc553bee3' }, "categories": [{ "id": 8, "title": "Objects", "photo_count": 13840, "links": { "self": "https://api.unsplash.com/categories/8", "photos": "https://api.unsplash.com/categories/8/photos" } }, { "id": 6, "title": "People", "photo_count": 18319, "links": { "self": "https://api.unsplash.com/categories/6", "photos": "https://api.unsplash.com/categories/6/photos" } }], "links": { "self": "https://api.unsplash.com/photos/YIN4xUBaqnk", "html": "http://unsplash.com/photos/YIN4xUBaqnk", "download": "http://unsplash.com/photos/YIN4xUBaqnk/download", "download_location": "https://api.unsplash.com/photos/YIN4xUBaqnk/download" } }, { "id": "0LU4vO5iFpM", "created_at": "2015-12-23T00:48:53-05:00", "width": 5615, "height": 2907, "color": "#C595A1", "likes": 2362, "liked_by_user": false, "user": { "id": "XQqOpGtnD6U", "username": "grakozy", "name": "Greg Rakozy", "first_name": "Greg", "last_name": "Rakozy", "portfolio_url": "http://grakozy.com", "bio": "Photo Taker. Website Maker.", "location": "Provo, Utah", "total_likes": 67, "total_photos": 42, "total_collections": 9, "profile_image": { "small": 'https://images.unsplash.com/profile-1444799905178-f917b68706e2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=68f77c878f138374dfd81816f343a2d8', "medium": 'https://images.unsplash.com/profile-1444799905178-f917b68706e2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=211fe003fc3e207c02f54d15fc336241', "large": 'https://images.unsplash.com/profile-1444799905178-f917b68706e2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=b7741de27bc0d12948b76289c43810f2' }, "links": { "self": "https://api.unsplash.com/users/grakozy", "html": "http://unsplash.com/@grakozy", "photos": "https://api.unsplash.com/users/grakozy/photos", "likes": "https://api.unsplash.com/users/grakozy/likes", "portfolio": "https://api.unsplash.com/users/grakozy/portfolio", "following": "https://api.unsplash.com/users/grakozy/following", "followers": "https://api.unsplash.com/users/grakozy/followers" } }, "current_user_collections": [], "urls": { "raw": "https://images.unsplash.com/photo-1450849608880-6f787542c88a", "full": 'https://images.unsplash.com/photo-1450849608880-6f787542c88a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=30fde1cf49569ad77ce5c49cadf432fc', "regular": 'https://images.unsplash.com/photo-1450849608880-6f787542c88a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=acfe666a7a498d6d1fcdf8e25a01157c', "small": 'https://images.unsplash.com/photo-1450849608880-6f787542c88a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=90d0e4a09468679e6920a87eec1976bf', "thumb": 'https://images.unsplash.com/photo-1450849608880-6f787542c88a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=53cf67d2467d56c862972a7afd3f6ee3' }, "categories": [{ "id": 4, "title": "Nature", "photo_count": 54184, "links": { "self": "https://api.unsplash.com/categories/4", "photos": "https://api.unsplash.com/categories/4/photos" } }, { "id": 6, "title": "People", "photo_count": 18319, "links": { "self": "https://api.unsplash.com/categories/6", "photos": "https://api.unsplash.com/categories/6/photos" } }], "links": { "self": "https://api.unsplash.com/photos/0LU4vO5iFpM", "html": "http://unsplash.com/photos/0LU4vO5iFpM", "download": "http://unsplash.com/photos/0LU4vO5iFpM/download", "download_location": "https://api.unsplash.com/photos/0LU4vO5iFpM/download" } }, { "id": "mk7D-4UCfmg", "created_at": "2014-02-04T11:49:12-05:00", "width": 7500, "height": 11000, "color": "#CCCCCD", "likes": 1481, "liked_by_user": false, "user": { "id": "ZbAEdl9dx6k", "username": "florianklauer", "name": "Florian Klauer", "first_name": "Florian", "last_name": "Klauer", "portfolio_url": "http://fontswithlove.com", "bio": "", "location": "Bielefeld, Germany", "total_likes": 0, "total_photos": 11, "total_collections": 0, "profile_image": { "small": 'https://images.unsplash.com/profile-1448471536947-303061bc0e54?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=08a29c118e73c632a60b33de7da6c69b', "medium": 'https://images.unsplash.com/profile-1448471536947-303061bc0e54?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=4fd7bc3c9e2d2385c5e8e180ec08d6b8', "large": 'https://images.unsplash.com/profile-1448471536947-303061bc0e54?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=6e44b5340b73872a32d40f61fef8fb4b' }, "links": { "self": "https://api.unsplash.com/users/florianklauer", "html": "http://unsplash.com/@florianklauer", "photos": "https://api.unsplash.com/users/florianklauer/photos", "likes": "https://api.unsplash.com/users/florianklauer/likes", "portfolio": "https://api.unsplash.com/users/florianklauer/portfolio", "following": "https://api.unsplash.com/users/florianklauer/following", "followers": "https://api.unsplash.com/users/florianklauer/followers" } }, "current_user_collections": [], "urls": { "raw": "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg", "full": 'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=cad114a9ffc156347cfb7477b1295379', "regular": 'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=f1a9c02e2797fae6489142772a546fb5', "small": 'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=f4165d980406df9191cc40c57a82894c', "thumb": 'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=85db4d7af13803cff42db3cea0d0b763' }, "categories": [{ "id": 8, "title": "Objects", "photo_count": 13840, "links": { "self": "https://api.unsplash.com/categories/8", "photos": "https://api.unsplash.com/categories/8/photos" } }, { "id": 7, "title": "Technology", "photo_count": 1407, "links": { "self": "https://api.unsplash.com/categories/7", "photos": "https://api.unsplash.com/categories/7/photos" } }], "links": { "self": "https://api.unsplash.com/photos/mk7D-4UCfmg", "html": "http://unsplash.com/photos/mk7D-4UCfmg", "download": "http://unsplash.com/photos/mk7D-4UCfmg/download", "download_location": "https://api.unsplash.com/photos/mk7D-4UCfmg/download" } }, { "id": "GANqCr1BRTU", "created_at": "2015-01-20T07:35:12-05:00", "width": 4133, "height": 2745, "color": "#818183", "likes": 862, "liked_by_user": false, "user": { "id": "Q6GA18GG4HA", "username": "firmbee", "name": "William Iven", "first_name": "William", "last_name": "Iven", "portfolio_url": "https://firmbee.com/freebies/all", "bio": 'Hi, i\'m William photographer, graphic & web designer at FirmBee. Need some free mockup? Tweet me! twitter.com/firmbeecom', "location": null, "total_likes": 0, "total_photos": 23, "total_collections": 0, "profile_image": { "small": 'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=0ad68f44c4725d5a3fda019bab9d3edc', "medium": 'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=356bd4b76a3d4eb97d63f45b818dd358', "large": 'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=ee8bbf5fb8d6e43aaaa238feae2fe90d' }, "links": { "self": "https://api.unsplash.com/users/firmbee", "html": "http://unsplash.com/@firmbee", "photos": "https://api.unsplash.com/users/firmbee/photos", "likes": "https://api.unsplash.com/users/firmbee/likes", "portfolio": "https://api.unsplash.com/users/firmbee/portfolio", "following": "https://api.unsplash.com/users/firmbee/following", "followers": "https://api.unsplash.com/users/firmbee/followers" } }, "current_user_collections": [], "urls": { "raw": "https://images.unsplash.com/photo-1421757295538-9c80958e75b0", "full": 'https://images.unsplash.com/photo-1421757295538-9c80958e75b0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=db57fba346c5cfa0a651bceaa4106cf4', "regular": 'https://images.unsplash.com/photo-1421757295538-9c80958e75b0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=870af5695114c3a6f30e993c31391a8d', "small": 'https://images.unsplash.com/photo-1421757295538-9c80958e75b0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=0eecf6494c774c306fac16c03c0b6563', "thumb": 'https://images.unsplash.com/photo-1421757295538-9c80958e75b0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=7079ea781e18718cefaf629ceade7c63' }, "categories": [{ "id": 8, "title": "Objects", "photo_count": 13840, "links": { "self": "https://api.unsplash.com/categories/8", "photos": "https://api.unsplash.com/categories/8/photos" } }, { "id": 7, "title": "Technology", "photo_count": 1407, "links": { "self": "https://api.unsplash.com/categories/7", "photos": "https://api.unsplash.com/categories/7/photos" } }], "links": { "self": "https://api.unsplash.com/photos/GANqCr1BRTU", "html": "http://unsplash.com/photos/GANqCr1BRTU", "download": "http://unsplash.com/photos/GANqCr1BRTU/download", "download_location": "https://api.unsplash.com/photos/GANqCr1BRTU/download" } }, { "id": "MZx2uowz-o0", "created_at": "2015-04-14T13:21:22-04:00", "width": 5472, "height": 3648, "color": "#8C847B", "likes": 1410, "liked_by_user": false, "user": { "id": "LJWDIrwFpeA", "username": "albertosaure", "name": "Luis Llerena", "first_name": "Luis", "last_name": "Llerena", "portfolio_url": null, "bio": "", "location": null, "total_likes": 0, "total_photos": 23, "total_collections": 0, "profile_image": { "small": 'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=0ad68f44c4725d5a3fda019bab9d3edc', "medium": 'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=356bd4b76a3d4eb97d63f45b818dd358', "large": 'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=ee8bbf5fb8d6e43aaaa238feae2fe90d' }, "links": { "self": "https://api.unsplash.com/users/albertosaure", "html": "http://unsplash.com/@albertosaure", "photos": "https://api.unsplash.com/users/albertosaure/photos", "likes": "https://api.unsplash.com/users/albertosaure/likes", "portfolio": "https://api.unsplash.com/users/albertosaure/portfolio", "following": "https://api.unsplash.com/users/albertosaure/following", "followers": "https://api.unsplash.com/users/albertosaure/followers" } }, "current_user_collections": [], "urls": { "raw": "https://images.unsplash.com/photo-1429032021766-c6a53949594f", "full": 'https://images.unsplash.com/photo-1429032021766-c6a53949594f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=b3134592909c6247242ef40252683317', "regular": 'https://images.unsplash.com/photo-1429032021766-c6a53949594f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=c80c8b8c864a3ba808ab293305f91bb3', "small": 'https://images.unsplash.com/photo-1429032021766-c6a53949594f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=64a3d24f54f1b999389fc0779e7a8a2a', "thumb": 'https://images.unsplash.com/photo-1429032021766-c6a53949594f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=c78c6f4e59349e41a82eaa3533324eec' }, "categories": [{ "id": 8, "title": "Objects", "photo_count": 13840, "links": { "self": "https://api.unsplash.com/categories/8", "photos": "https://api.unsplash.com/categories/8/photos" } }], "links": { "self": "https://api.unsplash.com/photos/MZx2uowz-o0", "html": "http://unsplash.com/photos/MZx2uowz-o0", "download": "http://unsplash.com/photos/MZx2uowz-o0/download", "download_location": "https://api.unsplash.com/photos/MZx2uowz-o0/download" } }, { "id": "TFyi0QOx08c", "created_at": "2014-12-08T14:04:48-05:00", "width": 2200, "height": 1467, "color": "#929794", "likes": 751, "liked_by_user": false, "user": { "id": "-rcrJA1bVtQ", "username": "jaymantri", "name": "Jay Mantri", "first_name": "Jay", "last_name": "Mantri", "portfolio_url": "http://jaymantri.com/", "bio": "", "location": null, "total_likes": 0, "total_photos": 5, "total_collections": 0, "profile_image": { "small": 'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=0ad68f44c4725d5a3fda019bab9d3edc', "medium": 'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=356bd4b76a3d4eb97d63f45b818dd358', "large": 'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=ee8bbf5fb8d6e43aaaa238feae2fe90d' }, "links": { "self": "https://api.unsplash.com/users/jaymantri", "html": "http://unsplash.com/@jaymantri", "photos": "https://api.unsplash.com/users/jaymantri/photos", "likes": "https://api.unsplash.com/users/jaymantri/likes", "portfolio": "https://api.unsplash.com/users/jaymantri/portfolio", "following": "https://api.unsplash.com/users/jaymantri/following", "followers": "https://api.unsplash.com/users/jaymantri/followers" } }, "current_user_collections": [], "urls": { "raw": "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5", "full": 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=a0f13c03fc42afe730bd25c43092c136', "regular": 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=6dff6e3c57f5cda4e14cd1d2988c5083', "small": 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=da76a54b6b17756c64dfcba6de5d7cd2', "thumb": 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=b273ac7816a7a92fcfdf8b51e6476ee2' }, "categories": [{ "id": 4, "title": "Nature", "photo_count": 54184, "links": { "self": "https://api.unsplash.com/categories/4", "photos": "https://api.unsplash.com/categories/4/photos" } }], "links": { "self": "https://api.unsplash.com/photos/TFyi0QOx08c", "html": "http://unsplash.com/photos/TFyi0QOx08c", "download": "http://unsplash.com/photos/TFyi0QOx08c/download", "download_location": "https://api.unsplash.com/photos/TFyi0QOx08c/download" } }, { "id": "JWiMShWiF14", "created_at": "2014-11-18T14:41:32-05:00", "width": 4000, "height": 3000, "color": "#B58F6D", "likes": 775, "liked_by_user": false, "user": { "id": "Ul0QVz12Goo", "username": "ugmonk", "name": "Jeff Sheldon", "first_name": "Jeff", "last_name": "Sheldon", "portfolio_url": "http://ugmonk.com/", "bio": "Founder and designer of Ugmonk", "location": null, "total_likes": 0, "total_photos": 23, "total_collections": 2, "profile_image": { "small": 'https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=7cfe3b93750cb0c93e2f7caec08b5a41', "medium": 'https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=5a9dc749c43ce5bd60870b129a40902f', "large": 'https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=32085a077889586df88bfbe406692202' }, "links": { "self": "https://api.unsplash.com/users/ugmonk", "html": "http://unsplash.com/@ugmonk", "photos": "https://api.unsplash.com/users/ugmonk/photos", "likes": "https://api.unsplash.com/users/ugmonk/likes", "portfolio": "https://api.unsplash.com/users/ugmonk/portfolio", "following": "https://api.unsplash.com/users/ugmonk/following", "followers": "https://api.unsplash.com/users/ugmonk/followers" } }, "current_user_collections": [], "urls": { "raw": "https://images.unsplash.com/photo-1416339684178-3a239570f315", "full": 'https://images.unsplash.com/photo-1416339684178-3a239570f315?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=6c6f4091310f2c418a2751c42574102f', "regular": 'https://images.unsplash.com/photo-1416339684178-3a239570f315?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=aa58b5bfc195fd0c52ba5360dc6a41e7', "small": 'https://images.unsplash.com/photo-1416339684178-3a239570f315?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=46d134a1b056ce7a12cc67084f5ee668', "thumb": 'https://images.unsplash.com/photo-1416339684178-3a239570f315?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=f27e57744feaa452d3854bb152cb1b7e' }, "categories": [{ "id": 8, "title": "Objects", "photo_count": 13840, "links": { "self": "https://api.unsplash.com/categories/8", "photos": "https://api.unsplash.com/categories/8/photos" } }], "links": { "self": "https://api.unsplash.com/photos/JWiMShWiF14", "html": "http://unsplash.com/photos/JWiMShWiF14", "download": "http://unsplash.com/photos/JWiMShWiF14/download", "download_location": "https://api.unsplash.com/photos/JWiMShWiF14/download" } }, { "id": "VviFtDJakYk", "created_at": "2015-12-03T10:42:25-05:00", "width": 5760, "height": 3840, "color": "#0E0F12", "likes": 1857, "liked_by_user": false, "user": { "id": "6LVqhgq3v1Q", "username": "matthewhenry", "name": "Matthew Henry", "first_name": "Matthew", "last_name": "Henry", "portfolio_url": "https://instagram.com/matt_henry_photo/", "bio": 'videographer (vimeo.com/mtthwhnry) & photographer for Shopify located in Toronto, Canada', "location": "Toronto, Ontario", "total_likes": 214, "total_photos": 59, "total_collections": 9, "profile_image": { "small": 'https://images.unsplash.com/profile-1442074255542-361bdf6cae55?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=98530b29976443a8e4d697428cabf5d1', "medium": 'https://images.unsplash.com/profile-1442074255542-361bdf6cae55?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=a825beb606af42f137c77af51e2c8959', "large": 'https://images.unsplash.com/profile-1442074255542-361bdf6cae55?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=260257c855a0cd5740505dfea725a2d5' }, "links": { "self": "https://api.unsplash.com/users/matthewhenry", "html": "http://unsplash.com/@matthewhenry", "photos": "https://api.unsplash.com/users/matthewhenry/photos", "likes": "https://api.unsplash.com/users/matthewhenry/likes", "portfolio": "https://api.unsplash.com/users/matthewhenry/portfolio", "following": "https://api.unsplash.com/users/matthewhenry/following", "followers": "https://api.unsplash.com/users/matthewhenry/followers" } }, "current_user_collections": [], "urls": { "raw": "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e", "full": 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=496596e4507c4294c309b7476276b311', "regular": 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=3b51135ce94c11a673e83c6ecabf833f', "small": 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=c6d46ab1bbdcda9c940e45acc015ccb6', "thumb": 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=b8601a56ed5135ebd7d82da9f5ad076b' }, "categories": [{ "id": 2, "title": "Buildings", "photo_count": 22897, "links": { "self": "https://api.unsplash.com/categories/2", "photos": "https://api.unsplash.com/categories/2/photos" } }], "links": { "self": "https://api.unsplash.com/photos/VviFtDJakYk", "html": "http://unsplash.com/photos/VviFtDJakYk", "download": "http://unsplash.com/photos/VviFtDJakYk/download", "download_location": "https://api.unsplash.com/photos/VviFtDJakYk/download" } }, { "id": "ywnnwzcdR5o", "created_at": "2015-10-05T07:25:31-04:00", "width": 7149, "height": 4771, "color": "#95918E", "likes": 1713, "liked_by_user": false, "user": { "id": "QqBsxb8C16w", "username": "jonathanbean", "name": "Jonathan Bean", "first_name": "Jonathan", "last_name": "Bean", "portfolio_url": "http://www.jonathan-creative.com", "bio": "Jonathan Bean Freelance Digital UX Website Designer and Developer. Photographer. Climber.", "location": "Whaley Bridge, Peak District, England", "total_likes": 28, "total_photos": 14, "total_collections": 0, "profile_image": { "small": 'https://images.unsplash.com/profile-1444044560032-25f2980a24b7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=ddb35a1ea3812d66861315b626aa6e28', "medium": 'https://images.unsplash.com/profile-1444044560032-25f2980a24b7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=76602a6967637032605ad1094e0b0fb9', "large": 'https://images.unsplash.com/profile-1444044560032-25f2980a24b7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=ed8ae30fd29d404cafcacfaaa8f8ed26' }, "links": { "self": "https://api.unsplash.com/users/jonathanbean", "html": "http://unsplash.com/@jonathanbean", "photos": "https://api.unsplash.com/users/jonathanbean/photos", "likes": "https://api.unsplash.com/users/jonathanbean/likes", "portfolio": "https://api.unsplash.com/users/jonathanbean/portfolio", "following": "https://api.unsplash.com/users/jonathanbean/following", "followers": "https://api.unsplash.com/users/jonathanbean/followers" } }, "current_user_collections": [], "urls": { "raw": "https://images.unsplash.com/photo-1444044205806-38f3ed106c10", "full": 'https://images.unsplash.com/photo-1444044205806-38f3ed106c10?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=620bc39b058ee3dda19613a15b5238d8', "regular": 'https://images.unsplash.com/photo-1444044205806-38f3ed106c10?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=40bbf8ac19016e35f1b474cb09308cc4', "small": 'https://images.unsplash.com/photo-1444044205806-38f3ed106c10?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=2a98666941ff239738e885bcbace6286', "thumb": 'https://images.unsplash.com/photo-1444044205806-38f3ed106c10?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=277724ed19d8e879a402ae0f98439bed' }, "categories": [{ "id": 4, "title": "Nature", "photo_count": 54184, "links": { "self": "https://api.unsplash.com/categories/4", "photos": "https://api.unsplash.com/categories/4/photos" } }], "links": { "self": "https://api.unsplash.com/photos/ywnnwzcdR5o", "html": "http://unsplash.com/photos/ywnnwzcdR5o", "download": "http://unsplash.com/photos/ywnnwzcdR5o/download", "download_location": "https://api.unsplash.com/photos/ywnnwzcdR5o/download" } }, { "id": "B6yDtYs2IgY", "created_at": "2015-11-09T06:44:11-05:00", "width": 6016, "height": 4016, "color": "#7E735A", "likes": 1807, "liked_by_user": false, "user": { "id": "kA9qRJtrtA4", "username": "joannakosinska", "name": "Joanna Kosinska", "first_name": "Joanna", "last_name": "Kosinska", "portfolio_url": "http://www.joannakosinska.com/", "bio": "Freelance Graphic Designer based in West Yorkshire. \r\nFollow me on instagarm www.instagram.com/joannakosinskadotcom", "location": "Leeds", "total_likes": 164, "total_photos": 56, "total_collections": 2, "profile_image": { "small": 'https://images.unsplash.com/profile-1477941848765-f577d5c83681?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=9baf3441d695c017a43408c386a75049', "medium": 'https://images.unsplash.com/profile-1477941848765-f577d5c83681?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=ad0b0afe9a9943d74f98f07a3986940e', "large": 'https://images.unsplash.com/profile-1477941848765-f577d5c83681?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=0ed0dd40d846c4f7fd514af9daebe6fb' }, "links": { "self": "https://api.unsplash.com/users/joannakosinska", "html": "http://unsplash.com/@joannakosinska", "photos": "https://api.unsplash.com/users/joannakosinska/photos", "likes": "https://api.unsplash.com/users/joannakosinska/likes", "portfolio": "https://api.unsplash.com/users/joannakosinska/portfolio", "following": "https://api.unsplash.com/users/joannakosinska/following", "followers": "https://api.unsplash.com/users/joannakosinska/followers" } }, "current_user_collections": [], "urls": { "raw": "https://images.unsplash.com/photo-1447069387593-a5de0862481e", "full": 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=45ac3ef78f838bdba234f87db62177f2', "regular": 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=3e1fb6f159c5eb262a8c727fbe884f38', "small": 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=f4c201441195b7b700048f79a278e04c', "thumb": 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=d2b7cd4de2f027a4b68ffc76e9ba05e3' }, "categories": [{ "id": 8, "title": "Objects", "photo_count": 13840, "links": { "self": "https://api.unsplash.com/categories/8", "photos": "https://api.unsplash.com/categories/8/photos" } }], "links": { "self": "https://api.unsplash.com/photos/B6yDtYs2IgY", "html": "http://unsplash.com/photos/B6yDtYs2IgY", "download": "http://unsplash.com/photos/B6yDtYs2IgY/download", "download_location": "https://api.unsplash.com/photos/B6yDtYs2IgY/download" } }]
	};

	exports.default = new api();

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = require("unsplash-js");

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _regenerator = __webpack_require__(3);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _asyncToGenerator2 = __webpack_require__(4);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _getPrototypeOf = __webpack_require__(14);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(15);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(16);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(17);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(18);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp;

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var _api = __webpack_require__(42);

	var _api2 = _interopRequireDefault(_api);

	var _Test = __webpack_require__(45);

	var _Test2 = _interopRequireDefault(_Test);

	var _reactComponentData = __webpack_require__(46);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Test = (_temp = _class = function (_React$PureComponent) {
	  (0, _inherits3.default)(Test, _React$PureComponent);

	  function Test(props) {
	    (0, _classCallCheck3.default)(this, Test);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (Test.__proto__ || (0, _getPrototypeOf2.default)(Test)).call(this, props));

	    _this.state = {};
	    return _this;
	  }

	  (0, _createClass3.default)(Test, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          myPhotos = _props.myPhotos,
	          parentCount = _props.parentCount;


	      var myPhotosCount = myPhotos ? myPhotos.length : null;

	      return _react2.default.createElement(
	        'div',
	        { style: { marginTop: '3em', textAlign: 'center', border: '1px solid green', padding: '1em' } },
	        'PARENT COUNT: ',
	        parentCount,
	        _react2.default.createElement('br', null),
	        'COUNT: ',
	        myPhotosCount,
	        _react2.default.createElement('br', null),
	        myPhotosCount && _react2.default.createElement(
	          'span',
	          null,
	          _react2.default.createElement(_Test2.default, { key: 0, parentCount: myPhotos.length }),
	          _react2.default.createElement(_Test2.default, { key: 1, parentCount: myPhotos.length })
	        )
	      );
	    }
	  }], [{
	    key: 'getInitialProps',
	    value: function () {
	      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
	        var myPhotos;
	        return _regenerator2.default.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.next = 2;
	                return _api2.default.getPopularPhotos(2, 3);

	              case 2:
	                myPhotos = _context.sent;
	                return _context.abrupt('return', { myPhotos: myPhotos });

	              case 4:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this);
	      }));

	      function getInitialProps() {
	        return _ref.apply(this, arguments);
	      }

	      return getInitialProps;
	    }()
	  }]);
	  return Test;
	}(_react2.default.PureComponent), _class.displayName = 'Test', _temp);
	;

	exports.default = (0, _reactComponentData.withData)(Test);

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _regenerator = __webpack_require__(3);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _asyncToGenerator2 = __webpack_require__(4);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _getPrototypeOf = __webpack_require__(14);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(15);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(16);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(17);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(18);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp;

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var _api = __webpack_require__(42);

	var _api2 = _interopRequireDefault(_api);

	var _reactComponentData = __webpack_require__(46);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Test2 = (_temp = _class = function (_React$PureComponent) {
	  (0, _inherits3.default)(Test2, _React$PureComponent);

	  function Test2(props) {
	    (0, _classCallCheck3.default)(this, Test2);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (Test2.__proto__ || (0, _getPrototypeOf2.default)(Test2)).call(this, props));

	    _this.state = {};
	    return _this;
	  }

	  (0, _createClass3.default)(Test2, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          myPhotos = _props.myPhotos,
	          parentCount = _props.parentCount;


	      var myPhotosCount = myPhotos ? myPhotos.length : null;

	      return _react2.default.createElement(
	        'div',
	        { style: { marginTop: '3em', textAlign: 'center', border: '1px solid red', padding: '1em' } },
	        'Test2 PARENT COUNT: ',
	        parentCount,
	        _react2.default.createElement('br', null),
	        'COUNT: ',
	        myPhotosCount,
	        _react2.default.createElement('br', null)
	      );
	    }
	  }], [{
	    key: 'getInitialProps',
	    value: function () {
	      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
	        var myPhotos;
	        return _regenerator2.default.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.next = 2;
	                return _api2.default.getPopularPhotos(2, 4);

	              case 2:
	                myPhotos = _context.sent;
	                return _context.abrupt('return', { myPhotos: myPhotos });

	              case 4:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this);
	      }));

	      function getInitialProps() {
	        return _ref.apply(this, arguments);
	      }

	      return getInitialProps;
	    }()
	  }]);
	  return Test2;
	}(_react2.default.PureComponent), _class.displayName = 'Test2', _temp);
	;

	exports.default = (0, _reactComponentData.withData)(Test2);

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	(function webpackUniversalModuleDefinition(root, factory) {
		if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory(__webpack_require__(48));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(48)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["ReactComponentData"] = factory(require("React"));else root["ReactComponentData"] = factory(root["React"]);
	})(undefined, function (__WEBPACK_EXTERNAL_MODULE_2__) {
		return (/******/function (modules) {
				// webpackBootstrap
				/******/ // The module cache
				/******/var installedModules = {};

				/******/ // The require function
				/******/function __webpack_require__(moduleId) {

					/******/ // Check if module is in cache
					/******/if (installedModules[moduleId])
						/******/return installedModules[moduleId].exports;

					/******/ // Create a new module (and put it into the cache)
					/******/var module = installedModules[moduleId] = {
						/******/exports: {},
						/******/id: moduleId,
						/******/loaded: false
						/******/ };

					/******/ // Execute the module function
					/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

					/******/ // Flag the module as loaded
					/******/module.loaded = true;

					/******/ // Return the exports of the module
					/******/return module.exports;
					/******/
				}

				/******/ // expose the modules object (__webpack_modules__)
				/******/__webpack_require__.m = modules;

				/******/ // expose the module cache
				/******/__webpack_require__.c = installedModules;

				/******/ // __webpack_public_path__
				/******/__webpack_require__.p = "";

				/******/ // Load entry module and return exports
				/******/return __webpack_require__(0);
				/******/
			}(
			/************************************************************************/
			/******/[
			/* 0 */
			/***/function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.resolve = exports.withData = undefined;

				var _ComponentData = __webpack_require__(1);

				var _resolveSimple = __webpack_require__(9);

				exports.default = _ComponentData.ComponentData;
				exports.withData = _ComponentData.withData;
				exports.resolve = _resolveSimple.resolve;

				/***/
			},
			/* 1 */
			/***/function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.withData = exports.ComponentData = undefined;

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				var _Resolver = __webpack_require__(3);

				var _script = __webpack_require__(4);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}

				/* 
	     - Handles passing of data down the tree and re-hydration between server and client
	     - Wraps child with <Resolver> which mediates getting data from this component via context or fetching it directly if not available ...
	     - Or if child is React Router it adds the createElement hook to Router so that route components always get wrapped with <Resolver>
	     - When rendered on the server:
	       - Saves props.data to state and makes it available via context for <Resolver> components
	       - Renders a <script> tag to the DOM that contains props.data (for client-side re-hydration)
	     - When rendered on the client:
	       - Gets <script> data from DOM (before DOM gets wiped by client-side render)
	       - Saves <script> data to state and makes it available via context for <Resolver> components
	     - TODO:
	       - When browsing to different route the component gets original routes props added to it (since it gets data from context) ...
	       ... We either need to (1) clear state before route change, (2) store an expiration time, or (3) always index data with a reliable key (component.displayname, etc)
	       ... (2) might be the best for now because it also solves the issue of browsing back to the original route, but not wanting it to load its stale data
	       ... When ComponentData hydrates have it set current time to state, then Resolvers can check to see how much time has passed.
	       ... We could start always indexing and include the react router path. Maybe RRPATH_DISPLAYNAME. Then even if it was just "/_" it would at least be unique across routes.
	       ... OR maybe even RRPATH_DISPLAYNAME_ROUNDEDTOCLOSESSECOND (NOPE wouldnt work since server time might be off);
	   */

				var ComponentData = function (_React$PureComponent) {
					_inherits(ComponentData, _React$PureComponent);

					function ComponentData(props, context) {
						_classCallCheck(this, ComponentData);

						var _this = _possibleConstructorReturn(this, (ComponentData.__proto__ || Object.getPrototypeOf(ComponentData)).call(this, props));

						_this.state = {
							data: null
						};
						return _this;
					}

					_createClass(ComponentData, [{
						key: 'getChildContext',
						value: function getChildContext() {
							return {
								method: this.props.method,
								data: this.state.data,
								time: this.state.time
							};
						}
					}, {
						key: 'componentWillMount',
						value: function componentWillMount() {
							var data = void 0;
							var time = void 0;

							// If client-side grab <script> data from DOM before it's wiped clean
							// This way we don't have to require that the library user add the <script> tag themself
							if ((0, _script.isClient)()) {
								data = (0, _script.getScriptData)();

								var d = new Date();
								time = d.getTime();

								// If server-side then we expect all data to be passed in as a prop
							} else {
								data = this.props.data;
							}

							if (data) {
								this.setState({
									data: data,
									time: time
								});
							}
						}
					}, {
						key: 'render',
						value: function render() {
							var data = this.state.data;
							var children = this.props.children;

							var Child = _react2.default.Children.only(children);

							var NewChild = void 0;

							if (Child.type.displayName === 'Router' || Child.type.displayName === 'RouterContext') {
								NewChild = _react2.default.cloneElement(Child, { createElement: routerCreateElement() });
							} else {
								NewChild = wrapWithResolver(Child.type, Child.props);
							}

							return _react2.default.createElement('span', null, NewChild, data && _react2.default.createElement('span', null, (0, _script.getScript)(data)));
						}
					}]);

					return ComponentData;
				}(_react2.default.PureComponent);

				;

				ComponentData.childContextTypes = {
					method: _react2.default.PropTypes.string,
					data: _react2.default.PropTypes.object,
					time: _react2.default.PropTypes.number
				};

				ComponentData.defaultProps = {
					method: 'getInitialProps',
					data: null
				};

				// Value for React Router createElement prop
				// We use location key so that Resolver re-mounts on route change
				function routerCreateElement() {
					return function (Component, props) {
						return wrapWithResolver(Component, props, props.location.key);
					};
				}

				function wrapWithResolver(WrappedComponent, props, key) {
					return _react2.default.createElement(_Resolver.Resolver, { key: key, mainComponent: true }, _react2.default.createElement(WrappedComponent, props));
				}

				// HOC (added manually to nested components)
				// TODO: Merge with wrapWithResolver()
				var withData = function withData(WrappedComponent) {
					return function (props, context) {
						return _react2.default.createElement(_Resolver.Resolver, null, _react2.default.createElement(WrappedComponent, props));
					};
				};

				exports.ComponentData = ComponentData;
				exports.withData = withData;

				/***/
			},
			/* 2 */
			/***/function (module, exports) {

				module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

				/***/
			},
			/* 3 */
			/***/function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.Resolver = undefined;

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				var _script = __webpack_require__(4);

				var _promisePolyfill = __webpack_require__(5);

				var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}

				// Tiny Promise polyfill
				// Much smaller filesize then using async/await and transpiling


				var Resolver = exports.Resolver = function (_React$PureComponent) {
					_inherits(Resolver, _React$PureComponent);

					function Resolver(props, context) {
						_classCallCheck(this, Resolver);

						var _this = _possibleConstructorReturn(this, (Resolver.__proto__ || Object.getPrototypeOf(Resolver)).call(this, props));

						_this.state = {
							propsForChild: null
						};

						_this.log = _this.log.bind(_this);
						_this.clientResolveFromComponent = _this.clientResolveFromComponent.bind(_this);
						return _this;
					}

					_createClass(Resolver, [{
						key: 'componentWillMount',
						value: function componentWillMount() {
							var _this2 = this;

							this.log('Mounted');

							var propsForChild = void 0;

							// Grab data object via context
							var data = this.context ? this.context.data : null;

							if (data) {

								this.log('Have data via context', data);

								// Get props for the child component out of data
								propsForChild = this.getPropsFromData(data);

								if (propsForChild) {
									this.log('Have props from data', propsForChild);
									this.setState({ propsForChild: propsForChild });
								} else {
									this.log('No props from data');
								}
							} else {

								this.log('No data via context');
							}

							// If we're client-size and don't have props then fetch them via child Component.method()
							//
							if (!propsForChild && (0, _script.isClient)()) {
								this.clientResolveFromComponent().then(function (propsForChild) {
									if (propsForChild) {
										_this2.log('Resolved Component.' + _this2.context.method + '()', propsForChild);
										_this2.setState({ propsForChild: propsForChild });
									} else {
										_this2.log('Unable to resolve Component.' + _this2.context.method + '()');
									}
								});
							}
						}
					}, {
						key: 'getChildName',
						value: function getChildName() {
							var child = _react2.default.Children.only(this.props.children);
							return child.type.displayName;
						}
					}, {
						key: 'log',
						value: function log(message, object) {
							var string = '[RESOLVER - ' + this.getChildName() + '] ' + message;
							if (object && (0, _script.isClient)()) {
								console.log(string, object);
							} else {
								console.log(string);
							}
						}
					}, {
						key: 'getPropsFromData',
						value: function getPropsFromData(data) {
							var props = void 0;

							var time = this.context.time;
							var mainComponent = this.props.mainComponent;

							// If more then 0.5 seconds has passed since data was made available via ComponentData context then consider it expired.
							// Re-hydration should realistically take around 1/100th of a second
							// Kinda hacky but this prevents context data from being used when browsing to a new route
							// Once we have a reliable way to index data by a unique component id then this won't be needed ...
							// ... unless we still want to have data expire after a certain amount of time (such as when we browse to a new route and then back)

							var d = new Date();
							var currTime = d.getTime();
							if (currTime - time > 500) {
								return null;
							}

							// If data._resolverComponents exists that means we are using our recursive resolver
							// All components data will be indexed by component displayName
							// TODO: Figure out a better index (combine multiple object properties, maybe all props?)
							if (data && data._resolverComponents) {

								props = data._resolverComponents[this.getChildName()];

								// If not using our recursive resolver and this is the mainComponent.
								// This prevents child components using our withData HOC from being given the same props as the main component ...
								// ... and forces them to fetch their own data client-side. When recursive is off we don't ....
								// ... index data by component.displayName so we need a way for child component to know it's not their data.
							} else if (data && mainComponent === true) {
								props = data;
							} else {
								props = null;
							}

							return props;
						}

						// Call component's static method, save data to state, pass as props to child component

					}, {
						key: 'clientResolveFromComponent',
						value: function clientResolveFromComponent() {
							var Component = _react2.default.Children.only(this.props.children);
							// Check if method is implemented
							if (Component.type[this.context.method]) {
								// Support a promise or standard object by wrapping in Promise.resolve
								return _promisePolyfill2.default.resolve(Component.type[this.context.method]());
							} else {
								return _promisePolyfill2.default.resolve(null);
							}
						}
					}, {
						key: 'render',
						value: function render() {
							var children = this.props.children;
							var propsForChild = this.state.propsForChild;

							var Component = _react2.default.Children.only(children);

							if (propsForChild) {
								var ComponentWithProps = _react2.default.cloneElement(Component, propsForChild);
								// Adding a key so component remounts
								// Easier because no need to implement componentWillReceiveProps
								var ComponentWithKey = _react2.default.cloneElement(ComponentWithProps, { key: 'hasInitialProps' });
								return ComponentWithKey;
							} else {
								return Component;
							}
						}
					}]);

					return Resolver;
				}(_react2.default.PureComponent);

				Resolver.defaultProps = {
					mainComponent: false
				};

				Resolver.contextTypes = {
					method: _react2.default.PropTypes.string,
					data: _react2.default.PropTypes.object,
					time: _react2.default.PropTypes.number
				};

				/***/
			},
			/* 4 */
			/***/function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.isClient = isClient;
				exports.getScript = getScript;
				exports.getScriptData = getScriptData;

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function isClient() {
					return typeof window !== 'undefined';
				}

				function getScript(data) {
					return data && _react2.default.createElement('script', { id: 'COMPONENT_DATA_PAYLOAD', type: 'application/json', dangerouslySetInnerHTML: { __html: safeStringify(data) } });
				}

				function getScriptData() {
					var payloadElement = document.getElementById('COMPONENT_DATA_PAYLOAD');
					return payloadElement ? JSON.parse(payloadElement.innerHTML) : null;
				}

				function safeStringify(obj) {
					return obj ? JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--') : null;
				}

				/***/
			},
			/* 5 */
			/***/function (module, exports, __webpack_require__) {

				/* WEBPACK VAR INJECTION */(function (setImmediate) {
					(function (root) {

						// Store setTimeout reference so promise-polyfill will be unaffected by
						// other code modifying setTimeout (like sinon.useFakeTimers())
						var setTimeoutFunc = setTimeout;

						function noop() {}

						// Polyfill for Function.prototype.bind
						function bind(fn, thisArg) {
							return function () {
								fn.apply(thisArg, arguments);
							};
						}

						function Promise(fn) {
							if (_typeof(this) !== 'object') throw new TypeError('Promises must be constructed via new');
							if (typeof fn !== 'function') throw new TypeError('not a function');
							this._state = 0;
							this._handled = false;
							this._value = undefined;
							this._deferreds = [];

							doResolve(fn, this);
						}

						function handle(self, deferred) {
							while (self._state === 3) {
								self = self._value;
							}
							if (self._state === 0) {
								self._deferreds.push(deferred);
								return;
							}
							self._handled = true;
							Promise._immediateFn(function () {
								var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
								if (cb === null) {
									(self._state === 1 ? resolve : reject)(deferred.promise, self._value);
									return;
								}
								var ret;
								try {
									ret = cb(self._value);
								} catch (e) {
									reject(deferred.promise, e);
									return;
								}
								resolve(deferred.promise, ret);
							});
						}

						function resolve(self, newValue) {
							try {
								// Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
								if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
								if (newValue && ((typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) === 'object' || typeof newValue === 'function')) {
									var then = newValue.then;
									if (newValue instanceof Promise) {
										self._state = 3;
										self._value = newValue;
										finale(self);
										return;
									} else if (typeof then === 'function') {
										doResolve(bind(then, newValue), self);
										return;
									}
								}
								self._state = 1;
								self._value = newValue;
								finale(self);
							} catch (e) {
								reject(self, e);
							}
						}

						function reject(self, newValue) {
							self._state = 2;
							self._value = newValue;
							finale(self);
						}

						function finale(self) {
							if (self._state === 2 && self._deferreds.length === 0) {
								Promise._immediateFn(function () {
									if (!self._handled) {
										Promise._unhandledRejectionFn(self._value);
									}
								});
							}

							for (var i = 0, len = self._deferreds.length; i < len; i++) {
								handle(self, self._deferreds[i]);
							}
							self._deferreds = null;
						}

						function Handler(onFulfilled, onRejected, promise) {
							this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
							this.onRejected = typeof onRejected === 'function' ? onRejected : null;
							this.promise = promise;
						}

						/**
	      * Take a potentially misbehaving resolver function and make sure
	      * onFulfilled and onRejected are only called once.
	      *
	      * Makes no guarantees about asynchrony.
	      */
						function doResolve(fn, self) {
							var done = false;
							try {
								fn(function (value) {
									if (done) return;
									done = true;
									resolve(self, value);
								}, function (reason) {
									if (done) return;
									done = true;
									reject(self, reason);
								});
							} catch (ex) {
								if (done) return;
								done = true;
								reject(self, ex);
							}
						}

						Promise.prototype['catch'] = function (onRejected) {
							return this.then(null, onRejected);
						};

						Promise.prototype.then = function (onFulfilled, onRejected) {
							var prom = new this.constructor(noop);

							handle(this, new Handler(onFulfilled, onRejected, prom));
							return prom;
						};

						Promise.all = function (arr) {
							var args = Array.prototype.slice.call(arr);

							return new Promise(function (resolve, reject) {
								if (args.length === 0) return resolve([]);
								var remaining = args.length;

								function res(i, val) {
									try {
										if (val && ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' || typeof val === 'function')) {
											var then = val.then;
											if (typeof then === 'function') {
												then.call(val, function (val) {
													res(i, val);
												}, reject);
												return;
											}
										}
										args[i] = val;
										if (--remaining === 0) {
											resolve(args);
										}
									} catch (ex) {
										reject(ex);
									}
								}

								for (var i = 0; i < args.length; i++) {
									res(i, args[i]);
								}
							});
						};

						Promise.resolve = function (value) {
							if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.constructor === Promise) {
								return value;
							}

							return new Promise(function (resolve) {
								resolve(value);
							});
						};

						Promise.reject = function (value) {
							return new Promise(function (resolve, reject) {
								reject(value);
							});
						};

						Promise.race = function (values) {
							return new Promise(function (resolve, reject) {
								for (var i = 0, len = values.length; i < len; i++) {
									values[i].then(resolve, reject);
								}
							});
						};

						// Use polyfill for setImmediate for performance gains
						Promise._immediateFn = typeof setImmediate === 'function' && function (fn) {
							setImmediate(fn);
						} || function (fn) {
							setTimeoutFunc(fn, 0);
						};

						Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
							if (typeof console !== 'undefined' && console) {
								console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
							}
						};

						/**
	      * Set the immediate function to execute callbacks
	      * @param fn {function} Function to execute
	      * @deprecated
	      */
						Promise._setImmediateFn = function _setImmediateFn(fn) {
							Promise._immediateFn = fn;
						};

						/**
	      * Change the function to execute on unhandled rejection
	      * @param {function} fn Function to execute on unhandled rejection
	      * @deprecated
	      */
						Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
							Promise._unhandledRejectionFn = fn;
						};

						if (typeof module !== 'undefined' && module.exports) {
							module.exports = Promise;
						} else if (!root.Promise) {
							root.Promise = Promise;
						}
					})(this);

					/* WEBPACK VAR INJECTION */
				}).call(exports, __webpack_require__(6).setImmediate);

				/***/
			},
			/* 6 */
			/***/function (module, exports, __webpack_require__) {

				var apply = Function.prototype.apply;

				// DOM APIs, for completeness

				exports.setTimeout = function () {
					return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
				};
				exports.setInterval = function () {
					return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
				};
				exports.clearTimeout = exports.clearInterval = function (timeout) {
					if (timeout) {
						timeout.close();
					}
				};

				function Timeout(id, clearFn) {
					this._id = id;
					this._clearFn = clearFn;
				}
				Timeout.prototype.unref = Timeout.prototype.ref = function () {};
				Timeout.prototype.close = function () {
					this._clearFn.call(window, this._id);
				};

				// Does not start the time, just sets up the members needed.
				exports.enroll = function (item, msecs) {
					clearTimeout(item._idleTimeoutId);
					item._idleTimeout = msecs;
				};

				exports.unenroll = function (item) {
					clearTimeout(item._idleTimeoutId);
					item._idleTimeout = -1;
				};

				exports._unrefActive = exports.active = function (item) {
					clearTimeout(item._idleTimeoutId);

					var msecs = item._idleTimeout;
					if (msecs >= 0) {
						item._idleTimeoutId = setTimeout(function onTimeout() {
							if (item._onTimeout) item._onTimeout();
						}, msecs);
					}
				};

				// setimmediate attaches itself to the global object
				__webpack_require__(7);
				exports.setImmediate = setImmediate;
				exports.clearImmediate = clearImmediate;

				/***/
			},
			/* 7 */
			/***/function (module, exports, __webpack_require__) {

				/* WEBPACK VAR INJECTION */(function (global, process) {
					(function (global, undefined) {
						"use strict";

						if (global.setImmediate) {
							return;
						}

						var nextHandle = 1; // Spec says greater than zero
						var tasksByHandle = {};
						var currentlyRunningATask = false;
						var doc = global.document;
						var registerImmediate;

						function setImmediate(callback) {
							// Callback can either be a function or a string
							if (typeof callback !== "function") {
								callback = new Function("" + callback);
							}
							// Copy function arguments
							var args = new Array(arguments.length - 1);
							for (var i = 0; i < args.length; i++) {
								args[i] = arguments[i + 1];
							}
							// Store and register the task
							var task = { callback: callback, args: args };
							tasksByHandle[nextHandle] = task;
							registerImmediate(nextHandle);
							return nextHandle++;
						}

						function clearImmediate(handle) {
							delete tasksByHandle[handle];
						}

						function run(task) {
							var callback = task.callback;
							var args = task.args;
							switch (args.length) {
								case 0:
									callback();
									break;
								case 1:
									callback(args[0]);
									break;
								case 2:
									callback(args[0], args[1]);
									break;
								case 3:
									callback(args[0], args[1], args[2]);
									break;
								default:
									callback.apply(undefined, args);
									break;
							}
						}

						function runIfPresent(handle) {
							// From the spec: "Wait until any invocations of this algorithm started before this one have completed."
							// So if we're currently running a task, we'll need to delay this invocation.
							if (currentlyRunningATask) {
								// Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
								// "too much recursion" error.
								setTimeout(runIfPresent, 0, handle);
							} else {
								var task = tasksByHandle[handle];
								if (task) {
									currentlyRunningATask = true;
									try {
										run(task);
									} finally {
										clearImmediate(handle);
										currentlyRunningATask = false;
									}
								}
							}
						}

						function installNextTickImplementation() {
							registerImmediate = function registerImmediate(handle) {
								process.nextTick(function () {
									runIfPresent(handle);
								});
							};
						}

						function canUsePostMessage() {
							// The test against `importScripts` prevents this implementation from being installed inside a web worker,
							// where `global.postMessage` means something completely different and can't be used for this purpose.
							if (global.postMessage && !global.importScripts) {
								var postMessageIsAsynchronous = true;
								var oldOnMessage = global.onmessage;
								global.onmessage = function () {
									postMessageIsAsynchronous = false;
								};
								global.postMessage("", "*");
								global.onmessage = oldOnMessage;
								return postMessageIsAsynchronous;
							}
						}

						function installPostMessageImplementation() {
							// Installs an event handler on `global` for the `message` event: see
							// * https://developer.mozilla.org/en/DOM/window.postMessage
							// * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

							var messagePrefix = "setImmediate$" + Math.random() + "$";
							var onGlobalMessage = function onGlobalMessage(event) {
								if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
									runIfPresent(+event.data.slice(messagePrefix.length));
								}
							};

							if (global.addEventListener) {
								global.addEventListener("message", onGlobalMessage, false);
							} else {
								global.attachEvent("onmessage", onGlobalMessage);
							}

							registerImmediate = function registerImmediate(handle) {
								global.postMessage(messagePrefix + handle, "*");
							};
						}

						function installMessageChannelImplementation() {
							var channel = new MessageChannel();
							channel.port1.onmessage = function (event) {
								var handle = event.data;
								runIfPresent(handle);
							};

							registerImmediate = function registerImmediate(handle) {
								channel.port2.postMessage(handle);
							};
						}

						function installReadyStateChangeImplementation() {
							var html = doc.documentElement;
							registerImmediate = function registerImmediate(handle) {
								// Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
								// into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
								var script = doc.createElement("script");
								script.onreadystatechange = function () {
									runIfPresent(handle);
									script.onreadystatechange = null;
									html.removeChild(script);
									script = null;
								};
								html.appendChild(script);
							};
						}

						function installSetTimeoutImplementation() {
							registerImmediate = function registerImmediate(handle) {
								setTimeout(runIfPresent, 0, handle);
							};
						}

						// If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
						var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
						attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

						// Don't get fooled by e.g. browserify environments.
						if ({}.toString.call(global.process) === "[object process]") {
							// For Node.js before 0.9
							installNextTickImplementation();
						} else if (canUsePostMessage()) {
							// For non-IE10 modern browsers
							installPostMessageImplementation();
						} else if (global.MessageChannel) {
							// For web workers, where supported
							installMessageChannelImplementation();
						} else if (doc && "onreadystatechange" in doc.createElement("script")) {
							// For IE 6–8
							installReadyStateChangeImplementation();
						} else {
							// For older browsers
							installSetTimeoutImplementation();
						}

						attachTo.setImmediate = setImmediate;
						attachTo.clearImmediate = clearImmediate;
					})(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);

					/* WEBPACK VAR INJECTION */
				}).call(exports, function () {
					return this;
				}(), __webpack_require__(8));

				/***/
			},
			/* 8 */
			/***/function (module, exports) {

				// shim for using process in browser
				var process = module.exports = {};

				// cached from whatever global is present so that test runners that stub it
				// don't break things.  But we need to wrap it in a try catch in case it is
				// wrapped in strict mode code which doesn't define any globals.  It's inside a
				// function because try/catches deoptimize in certain engines.

				var cachedSetTimeout;
				var cachedClearTimeout;

				function defaultSetTimout() {
					throw new Error('setTimeout has not been defined');
				}
				function defaultClearTimeout() {
					throw new Error('clearTimeout has not been defined');
				}
				(function () {
					try {
						if (typeof setTimeout === 'function') {
							cachedSetTimeout = setTimeout;
						} else {
							cachedSetTimeout = defaultSetTimout;
						}
					} catch (e) {
						cachedSetTimeout = defaultSetTimout;
					}
					try {
						if (typeof clearTimeout === 'function') {
							cachedClearTimeout = clearTimeout;
						} else {
							cachedClearTimeout = defaultClearTimeout;
						}
					} catch (e) {
						cachedClearTimeout = defaultClearTimeout;
					}
				})();
				function runTimeout(fun) {
					if (cachedSetTimeout === setTimeout) {
						//normal enviroments in sane situations
						return setTimeout(fun, 0);
					}
					// if setTimeout wasn't available but was latter defined
					if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
						cachedSetTimeout = setTimeout;
						return setTimeout(fun, 0);
					}
					try {
						// when when somebody has screwed with setTimeout but no I.E. maddness
						return cachedSetTimeout(fun, 0);
					} catch (e) {
						try {
							// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
							return cachedSetTimeout.call(null, fun, 0);
						} catch (e) {
							// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
							return cachedSetTimeout.call(this, fun, 0);
						}
					}
				}
				function runClearTimeout(marker) {
					if (cachedClearTimeout === clearTimeout) {
						//normal enviroments in sane situations
						return clearTimeout(marker);
					}
					// if clearTimeout wasn't available but was latter defined
					if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
						cachedClearTimeout = clearTimeout;
						return clearTimeout(marker);
					}
					try {
						// when when somebody has screwed with setTimeout but no I.E. maddness
						return cachedClearTimeout(marker);
					} catch (e) {
						try {
							// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
							return cachedClearTimeout.call(null, marker);
						} catch (e) {
							// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
							// Some versions of I.E. have different rules for clearTimeout vs setTimeout
							return cachedClearTimeout.call(this, marker);
						}
					}
				}
				var queue = [];
				var draining = false;
				var currentQueue;
				var queueIndex = -1;

				function cleanUpNextTick() {
					if (!draining || !currentQueue) {
						return;
					}
					draining = false;
					if (currentQueue.length) {
						queue = currentQueue.concat(queue);
					} else {
						queueIndex = -1;
					}
					if (queue.length) {
						drainQueue();
					}
				}

				function drainQueue() {
					if (draining) {
						return;
					}
					var timeout = runTimeout(cleanUpNextTick);
					draining = true;

					var len = queue.length;
					while (len) {
						currentQueue = queue;
						queue = [];
						while (++queueIndex < len) {
							if (currentQueue) {
								currentQueue[queueIndex].run();
							}
						}
						queueIndex = -1;
						len = queue.length;
					}
					currentQueue = null;
					draining = false;
					runClearTimeout(timeout);
				}

				process.nextTick = function (fun) {
					var args = new Array(arguments.length - 1);
					if (arguments.length > 1) {
						for (var i = 1; i < arguments.length; i++) {
							args[i - 1] = arguments[i];
						}
					}
					queue.push(new Item(fun, args));
					if (queue.length === 1 && !draining) {
						runTimeout(drainQueue);
					}
				};

				// v8 likes predictible objects
				function Item(fun, array) {
					this.fun = fun;
					this.array = array;
				}
				Item.prototype.run = function () {
					this.fun.apply(null, this.array);
				};
				process.title = 'browser';
				process.browser = true;
				process.env = {};
				process.argv = [];
				process.version = ''; // empty string to avoid regexp issues
				process.versions = {};

				function noop() {}

				process.on = noop;
				process.addListener = noop;
				process.once = noop;
				process.off = noop;
				process.removeListener = noop;
				process.removeAllListeners = noop;
				process.emit = noop;

				process.binding = function (name) {
					throw new Error('process.binding is not supported');
				};

				process.cwd = function () {
					return '/';
				};
				process.chdir = function (dir) {
					throw new Error('process.chdir is not supported');
				};
				process.umask = function () {
					return 0;
				};

				/***/
			},
			/* 9 */
			/***/function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.resolve = resolve;

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				var _promisePolyfill = __webpack_require__(5);

				var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function resolve(component, props) {

					if (!component.prototype || !component.prototype.isReactComponent) {
						throw new Error('[React Component Data] Resolve expects a valid react component');
					}

					var element = _react2.default.createElement(component, props);

					// If it's a component then call getInitialProps()
					if (element.type.getInitialProps) {
						return _promisePolyfill2.default.resolve(element.type.getInitialProps());
					}

					if (!element.props.router) {
						throw new Error('resolve() expects a React component or a React Router renderProps object');
					}

					var components = element.props.components;

					// Filter out null values

					var valid = components.filter(function (component) {
						return component;
					});

					if (!valid) {
						return null;
					}

					// Get components that have the getInitialProps static method
					var withFunction = valid.filter(function (component) {
						return component.getInitialProps;
					});

					if (!withFunction[0] || !withFunction[0].getInitialProps) {
						return null;
					}

					// Call the first component's getInitialProps method
					// In the future we can consider fetching data for nested components
					return _promisePolyfill2.default.resolve(withFunction[0].getInitialProps());
				}

				/***/
			}
			/******/])
		);
	});
	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(47)(module)))

/***/ },
/* 47 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(49);

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(50);

	var ReactChildren = __webpack_require__(51);
	var ReactComponent = __webpack_require__(70);
	var ReactPureComponent = __webpack_require__(74);
	var ReactClass = __webpack_require__(75);
	var ReactDOMFactories = __webpack_require__(77);
	var ReactElement = __webpack_require__(55);
	var ReactPropTypes = __webpack_require__(85);
	var ReactVersion = __webpack_require__(87);

	var onlyChild = __webpack_require__(88);
	var warning = __webpack_require__(60);

	var createElement = ReactElement.createElement;
	var createFactory = ReactElement.createFactory;
	var cloneElement = ReactElement.cloneElement;

	if (process.env.NODE_ENV !== 'production') {
	  var ReactElementValidator = __webpack_require__(78);
	  createElement = ReactElementValidator.createElement;
	  createFactory = ReactElementValidator.createFactory;
	  cloneElement = ReactElementValidator.cloneElement;
	}

	var __spread = _assign;

	if (process.env.NODE_ENV !== 'production') {
	  var warned = false;
	  __spread = function __spread() {
	    process.env.NODE_ENV !== 'production' ? warning(warned, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.') : void 0;
	    warned = true;
	    return _assign.apply(null, arguments);
	  };
	}

	var React = {

	  // Modern

	  Children: {
	    map: ReactChildren.map,
	    forEach: ReactChildren.forEach,
	    count: ReactChildren.count,
	    toArray: ReactChildren.toArray,
	    only: onlyChild
	  },

	  Component: ReactComponent,
	  PureComponent: ReactPureComponent,

	  createElement: createElement,
	  cloneElement: cloneElement,
	  isValidElement: ReactElement.isValidElement,

	  // Classic

	  PropTypes: ReactPropTypes,
	  createClass: ReactClass.createClass,
	  createFactory: createFactory,
	  createMixin: function createMixin(mixin) {
	    // Currently a noop. Will be used to validate and trace mixins.
	    return mixin;
	  },

	  // This looks DOM specific but these are actually isomorphic helpers
	  // since they are just generating DOM strings.
	  DOM: ReactDOMFactories,

	  version: ReactVersion,

	  // Deprecated hook for JSX spread, don't use this for anything.
	  __spread: __spread
	};

	module.exports = React;

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = require("object-assign");

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var PooledClass = __webpack_require__(52);
	var ReactElement = __webpack_require__(55);

	var emptyFunction = __webpack_require__(64);
	var traverseAllChildren = __webpack_require__(65);

	var twoArgumentPooler = PooledClass.twoArgumentPooler;
	var fourArgumentPooler = PooledClass.fourArgumentPooler;

	var userProvidedKeyEscapeRegex = /\/+/g;
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * traversal. Allows avoiding binding callbacks.
	 *
	 * @constructor ForEachBookKeeping
	 * @param {!function} forEachFunction Function to perform traversal with.
	 * @param {?*} forEachContext Context to perform context with.
	 */
	function ForEachBookKeeping(forEachFunction, forEachContext) {
	  this.func = forEachFunction;
	  this.context = forEachContext;
	  this.count = 0;
	}
	ForEachBookKeeping.prototype.destructor = function () {
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

	function forEachSingleChild(bookKeeping, child, name) {
	  var func = bookKeeping.func,
	      context = bookKeeping.context;

	  func.call(context, child, bookKeeping.count++);
	}

	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachChildren(children, forEachFunc, forEachContext) {
	  if (children == null) {
	    return children;
	  }
	  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
	  traverseAllChildren(children, forEachSingleChild, traverseContext);
	  ForEachBookKeeping.release(traverseContext);
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * mapping. Allows avoiding binding callbacks.
	 *
	 * @constructor MapBookKeeping
	 * @param {!*} mapResult Object containing the ordered map of results.
	 * @param {!function} mapFunction Function to perform mapping with.
	 * @param {?*} mapContext Context to perform mapping with.
	 */
	function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
	  this.result = mapResult;
	  this.keyPrefix = keyPrefix;
	  this.func = mapFunction;
	  this.context = mapContext;
	  this.count = 0;
	}
	MapBookKeeping.prototype.destructor = function () {
	  this.result = null;
	  this.keyPrefix = null;
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);

	function mapSingleChildIntoContext(bookKeeping, child, childKey) {
	  var result = bookKeeping.result,
	      keyPrefix = bookKeeping.keyPrefix,
	      func = bookKeeping.func,
	      context = bookKeeping.context;

	  var mappedChild = func.call(context, child, bookKeeping.count++);
	  if (Array.isArray(mappedChild)) {
	    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
	  } else if (mappedChild != null) {
	    if (ReactElement.isValidElement(mappedChild)) {
	      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
	      // Keep both the (mapped) and old keys if they differ, just as
	      // traverseAllChildren used to do for objects as children
	      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
	    }
	    result.push(mappedChild);
	  }
	}

	function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
	  var escapedPrefix = '';
	  if (prefix != null) {
	    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
	  }
	  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  MapBookKeeping.release(traverseContext);
	}

	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func The map function.
	 * @param {*} context Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
	  return result;
	}

	function forEachSingleChildDummy(traverseContext, child, name) {
	  return null;
	}

	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
	function countChildren(children, context) {
	  return traverseAllChildren(children, forEachSingleChildDummy, null);
	}

	/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
	 */
	function toArray(children) {
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
	  return result;
	}

	var ReactChildren = {
	  forEach: forEachChildren,
	  map: mapChildren,
	  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
	  count: countChildren,
	  toArray: toArray
	};

	module.exports = ReactChildren;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(53);

	var invariant = __webpack_require__(54);

	/**
	 * Static poolers. Several custom versions for each potential number of
	 * arguments. A completely generic pooler is easy to implement, but would
	 * require accessing the `arguments` object. In each of these, `this` refers to
	 * the Class itself, not an instance. If any others are needed, simply add them
	 * here, or in their own files.
	 */
	var oneArgumentPooler = function oneArgumentPooler(copyFieldsFrom) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, copyFieldsFrom);
	    return instance;
	  } else {
	    return new Klass(copyFieldsFrom);
	  }
	};

	var twoArgumentPooler = function twoArgumentPooler(a1, a2) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2);
	    return instance;
	  } else {
	    return new Klass(a1, a2);
	  }
	};

	var threeArgumentPooler = function threeArgumentPooler(a1, a2, a3) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3);
	  }
	};

	var fourArgumentPooler = function fourArgumentPooler(a1, a2, a3, a4) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4);
	  }
	};

	var fiveArgumentPooler = function fiveArgumentPooler(a1, a2, a3, a4, a5) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4, a5);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4, a5);
	  }
	};

	var standardReleaser = function standardReleaser(instance) {
	  var Klass = this;
	  !(instance instanceof Klass) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : _prodInvariant('25') : void 0;
	  instance.destructor();
	  if (Klass.instancePool.length < Klass.poolSize) {
	    Klass.instancePool.push(instance);
	  }
	};

	var DEFAULT_POOL_SIZE = 10;
	var DEFAULT_POOLER = oneArgumentPooler;

	/**
	 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
	 * itself (statically) not adding any prototypical fields. Any CopyConstructor
	 * you give this may have a `poolSize` property, and will look for a
	 * prototypical `destructor` on instances.
	 *
	 * @param {Function} CopyConstructor Constructor that can be used to reset.
	 * @param {Function} pooler Customizable pooler.
	 */
	var addPoolingTo = function addPoolingTo(CopyConstructor, pooler) {
	  // Casting as any so that flow ignores the actual implementation and trusts
	  // it to match the type we declared
	  var NewKlass = CopyConstructor;
	  NewKlass.instancePool = [];
	  NewKlass.getPooled = pooler || DEFAULT_POOLER;
	  if (!NewKlass.poolSize) {
	    NewKlass.poolSize = DEFAULT_POOL_SIZE;
	  }
	  NewKlass.release = standardReleaser;
	  return NewKlass;
	};

	var PooledClass = {
	  addPoolingTo: addPoolingTo,
	  oneArgumentPooler: oneArgumentPooler,
	  twoArgumentPooler: twoArgumentPooler,
	  threeArgumentPooler: threeArgumentPooler,
	  fourArgumentPooler: fourArgumentPooler,
	  fiveArgumentPooler: fiveArgumentPooler
	};

	module.exports = PooledClass;

/***/ },
/* 53 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	'use strict';

	/**
	 * WARNING: DO NOT manually require this module.
	 * This is a replacement for `invariant(...)` used by the error code system
	 * and will _only_ be required by the corresponding babel pass.
	 * It always throws.
	 */

	function reactProdInvariant(code) {
	  var argCount = arguments.length - 1;

	  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

	  for (var argIdx = 0; argIdx < argCount; argIdx++) {
	    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
	  }

	  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

	  var error = new Error(message);
	  error.name = 'Invariant Violation';
	  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

	  throw error;
	}

	module.exports = reactProdInvariant;

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = require("fbjs/lib/invariant");

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _typeof2 = __webpack_require__(56);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _freeze = __webpack_require__(57);

	var _freeze2 = _interopRequireDefault(_freeze);

	var _getOwnPropertyDescriptor = __webpack_require__(58);

	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _assign = __webpack_require__(50);

	var ReactCurrentOwner = __webpack_require__(59);

	var warning = __webpack_require__(60);
	var canDefineProperty = __webpack_require__(61);
	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var REACT_ELEMENT_TYPE = __webpack_require__(62);

	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};

	var specialPropKeyWarningShown, specialPropRefWarningShown;

	function hasValidRef(config) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = (0, _getOwnPropertyDescriptor2.default)(config, 'ref').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = (0, _getOwnPropertyDescriptor2.default)(config, 'key').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.key !== undefined;
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  var warnAboutAccessingKey = function warnAboutAccessingKey() {
	    if (!specialPropKeyWarningShown) {
	      specialPropKeyWarningShown = true;
	      process.env.NODE_ENV !== 'production' ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
	    }
	  };
	  warnAboutAccessingKey.isReactWarning = true;
	  Object.defineProperty(props, 'key', {
	    get: warnAboutAccessingKey,
	    configurable: true
	  });
	}

	function defineRefPropWarningGetter(props, displayName) {
	  var warnAboutAccessingRef = function warnAboutAccessingRef() {
	    if (!specialPropRefWarningShown) {
	      specialPropRefWarningShown = true;
	      process.env.NODE_ENV !== 'production' ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
	    }
	  };
	  warnAboutAccessingRef.isReactWarning = true;
	  Object.defineProperty(props, 'ref', {
	    get: warnAboutAccessingRef,
	    configurable: true
	  });
	}

	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, no instanceof check
	 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @param {*} owner
	 * @param {*} props
	 * @internal
	 */
	var ReactElement = function ReactElement(type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allow us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,

	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,

	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  if (process.env.NODE_ENV !== 'production') {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {};

	    // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.
	    if (canDefineProperty) {
	      Object.defineProperty(element._store, 'validated', {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: false
	      });
	      // self and source are DEV only properties.
	      Object.defineProperty(element, '_self', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: self
	      });
	      // Two elements created in two different places should be considered
	      // equal for testing purposes and therefore we hide it from enumeration.
	      Object.defineProperty(element, '_source', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: source
	      });
	    } else {
	      element._store.validated = false;
	      element._self = self;
	      element._source = source;
	    }
	    if (_freeze2.default) {
	      (0, _freeze2.default)(element.props);
	      (0, _freeze2.default)(element);
	    }
	  }

	  return element;
	};

	/**
	 * Create and return a new ReactElement of the given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
	 */
	ReactElement.createElement = function (type, config, children) {
	  var propName;

	  // Reserved names are extracted
	  var props = {};

	  var key = null;
	  var ref = null;
	  var self = null;
	  var source = null;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      ref = config.ref;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    self = config.__self === undefined ? null : config.__self;
	    source = config.__source === undefined ? null : config.__source;
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    if (process.env.NODE_ENV !== 'production') {
	      if (_freeze2.default) {
	        (0, _freeze2.default)(childArray);
	      }
	    }
	    props.children = childArray;
	  }

	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (props[propName] === undefined) {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    if (key || ref) {
	      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
	        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
	        if (key) {
	          defineKeyPropWarningGetter(props, displayName);
	        }
	        if (ref) {
	          defineRefPropWarningGetter(props, displayName);
	        }
	      }
	    }
	  }
	  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	};

	/**
	 * Return a function that produces ReactElements of a given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
	 */
	ReactElement.createFactory = function (type) {
	  var factory = ReactElement.createElement.bind(null, type);
	  // Expose the type on the factory and the prototype so that it can be
	  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
	  // This should not be named `constructor` since this may not be the function
	  // that created the element, and it may not even be a constructor.
	  // Legacy hook TODO: Warn if this is accessed
	  factory.type = type;
	  return factory;
	};

	ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
	  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

	  return newElement;
	};

	/**
	 * Clone and return a new ReactElement using element as the starting point.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
	 */
	ReactElement.cloneElement = function (element, config, children) {
	  var propName;

	  // Original props are copied
	  var props = _assign({}, element.props);

	  // Reserved names are extracted
	  var key = element.key;
	  var ref = element.ref;
	  // Self is preserved since the owner is preserved.
	  var self = element._self;
	  // Source is preserved since cloneElement is unlikely to be targeted by a
	  // transpiler, and the original source is probably a better indicator of the
	  // true owner.
	  var source = element._source;

	  // Owner will be preserved, unless ref is overridden
	  var owner = element._owner;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner.current;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    // Remaining properties override existing props
	    var defaultProps;
	    if (element.type && element.type.defaultProps) {
	      defaultProps = element.type.defaultProps;
	    }
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        if (config[propName] === undefined && defaultProps !== undefined) {
	          // Resolve default props
	          props[propName] = defaultProps[propName];
	        } else {
	          props[propName] = config[propName];
	        }
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }

	  return ReactElement(element.type, key, ref, self, source, owner, props);
	};

	/**
	 * Verifies the object is a ReactElement.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
	ReactElement.isValidElement = function (object) {
	  return (typeof object === 'undefined' ? 'undefined' : (0, _typeof3.default)(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	};

	module.exports = ReactElement;

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/typeof");

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/core-js/object/freeze");

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/core-js/object/get-own-property-descriptor");

/***/ },
/* 59 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */

	var ReactCurrentOwner = {

	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null

	};

	module.exports = ReactCurrentOwner;

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = require("fbjs/lib/warning");

/***/ },
/* 61 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var canDefineProperty = false;
	if (process.env.NODE_ENV !== 'production') {
	  try {
	    // $FlowFixMe https://github.com/facebook/flow/issues/285
	    Object.defineProperty({}, 'x', { get: function get() {} });
	    canDefineProperty = true;
	  } catch (x) {
	    // IE will fail on defineProperty
	  }
	}

	module.exports = canDefineProperty;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	// The Symbol used to tag the ReactElement type. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.

	var _symbol = __webpack_require__(63);

	var _symbol2 = _interopRequireDefault(_symbol);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var REACT_ELEMENT_TYPE = typeof _symbol2.default === 'function' && _symbol2.default['for'] && _symbol2.default['for']('react.element') || 0xeac7;

	module.exports = REACT_ELEMENT_TYPE;

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/core-js/symbol");

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = require("fbjs/lib/emptyFunction");

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _keys = __webpack_require__(66);

	var _keys2 = _interopRequireDefault(_keys);

	var _typeof2 = __webpack_require__(56);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _prodInvariant = __webpack_require__(53);

	var ReactCurrentOwner = __webpack_require__(59);
	var REACT_ELEMENT_TYPE = __webpack_require__(62);

	var getIteratorFn = __webpack_require__(67);
	var invariant = __webpack_require__(54);
	var KeyEscapeUtils = __webpack_require__(69);
	var warning = __webpack_require__(60);

	var SEPARATOR = '.';
	var SUBSEPARATOR = ':';

	/**
	 * This is inlined from ReactElement since this file is shared between
	 * isomorphic and renderers. We could extract this to a
	 *
	 */

	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */

	var didWarnAboutMaps = false;

	/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
	function getComponentKey(component, index) {
	  // Do some typechecking here since we call this blindly. We want to ensure
	  // that we don't block potential future ES APIs.
	  if (component && (typeof component === 'undefined' ? 'undefined' : (0, _typeof3.default)(component)) === 'object' && component.key != null) {
	    // Explicit key
	    return KeyEscapeUtils.escape(component.key);
	  }
	  // Implicit key determined by the index in the set
	  return index.toString(36);
	}

	/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
	  var type = typeof children === 'undefined' ? 'undefined' : (0, _typeof3.default)(children);

	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }

	  if (children === null || type === 'string' || type === 'number' ||
	  // The following is inlined from ReactElement. This means we can optimize
	  // some checks. React Fiber also inlines this logic for similar purposes.
	  type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
	    callback(traverseContext, children,
	    // If it's the only child, treat the name as if it was wrapped in an array
	    // so that it's consistent if the number of children grows.
	    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
	    return 1;
	  }

	  var child;
	  var nextName;
	  var subtreeCount = 0; // Count of children found in the current subtree.
	  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = nextNamePrefix + getComponentKey(child, i);
	      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	    }
	  } else {
	    var iteratorFn = getIteratorFn(children);
	    if (iteratorFn) {
	      var iterator = iteratorFn.call(children);
	      var step;
	      if (iteratorFn !== children.entries) {
	        var ii = 0;
	        while (!(step = iterator.next()).done) {
	          child = step.value;
	          nextName = nextNamePrefix + getComponentKey(child, ii++);
	          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	        }
	      } else {
	        if (process.env.NODE_ENV !== 'production') {
	          var mapsAsChildrenAddendum = '';
	          if (ReactCurrentOwner.current) {
	            var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName();
	            if (mapsAsChildrenOwnerName) {
	              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
	            }
	          }
	          process.env.NODE_ENV !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
	          didWarnAboutMaps = true;
	        }
	        // Iterator will provide entry [k,v] tuples rather than values.
	        while (!(step = iterator.next()).done) {
	          var entry = step.value;
	          if (entry) {
	            child = entry[1];
	            nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
	            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	          }
	        }
	      }
	    } else if (type === 'object') {
	      var addendum = '';
	      if (process.env.NODE_ENV !== 'production') {
	        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
	        if (children._isReactElement) {
	          addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
	        }
	        if (ReactCurrentOwner.current) {
	          var name = ReactCurrentOwner.current.getName();
	          if (name) {
	            addendum += ' Check the render method of `' + name + '`.';
	          }
	        }
	      }
	      var childrenString = String(children);
	       true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + (0, _keys2.default)(children).join(', ') + '}' : childrenString, addendum) : _prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + (0, _keys2.default)(children).join(', ') + '}' : childrenString, addendum) : void 0;
	    }
	  }

	  return subtreeCount;
	}

	/**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }

	  return traverseAllChildrenImpl(children, '', callback, traverseContext);
	}

	module.exports = traverseAllChildren;

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/core-js/object/keys");

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	/* global Symbol */

	var _iterator = __webpack_require__(68);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(63);

	var _symbol2 = _interopRequireDefault(_symbol);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ITERATOR_SYMBOL = typeof _symbol2.default === 'function' && _iterator2.default;
	var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	/**
	 * Returns the iterator method function contained on the iterable object.
	 *
	 * Be sure to invoke the function with the iterable as context:
	 *
	 *     var iteratorFn = getIteratorFn(myIterable);
	 *     if (iteratorFn) {
	 *       var iterator = iteratorFn.call(myIterable);
	 *       ...
	 *     }
	 *
	 * @param {?object} maybeIterable
	 * @return {?function}
	 */
	function getIteratorFn(maybeIterable) {
	  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	  if (typeof iteratorFn === 'function') {
	    return iteratorFn;
	  }
	}

	module.exports = getIteratorFn;

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/core-js/symbol/iterator");

/***/ },
/* 69 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	/**
	 * Escape and wrap key so it is safe to use as a reactid
	 *
	 * @param {string} key to be escaped.
	 * @return {string} the escaped key.
	 */

	function escape(key) {
	  var escapeRegex = /[=:]/g;
	  var escaperLookup = {
	    '=': '=0',
	    ':': '=2'
	  };
	  var escapedString = ('' + key).replace(escapeRegex, function (match) {
	    return escaperLookup[match];
	  });

	  return '$' + escapedString;
	}

	/**
	 * Unescape and unwrap key for human-readable display
	 *
	 * @param {string} key to unescape.
	 * @return {string} the unescaped key.
	 */
	function unescape(key) {
	  var unescapeRegex = /(=0|=2)/g;
	  var unescaperLookup = {
	    '=0': '=',
	    '=2': ':'
	  };
	  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);

	  return ('' + keySubstring).replace(unescapeRegex, function (match) {
	    return unescaperLookup[match];
	  });
	}

	var KeyEscapeUtils = {
	  escape: escape,
	  unescape: unescape
	};

	module.exports = KeyEscapeUtils;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _defineProperty = __webpack_require__(71);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	var _typeof2 = __webpack_require__(56);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _prodInvariant = __webpack_require__(53);

	var ReactNoopUpdateQueue = __webpack_require__(72);

	var canDefineProperty = __webpack_require__(61);
	var emptyObject = __webpack_require__(73);
	var invariant = __webpack_require__(54);
	var warning = __webpack_require__(60);

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	ReactComponent.prototype.isReactComponent = {};

	/**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.setState = function (partialState, callback) {
	  !((typeof partialState === 'undefined' ? 'undefined' : (0, _typeof3.default)(partialState)) === 'object' || typeof partialState === 'function' || partialState == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : _prodInvariant('85') : void 0;
	  this.updater.enqueueSetState(this, partialState);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'setState');
	  }
	};

	/**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'forceUpdate');
	  }
	};

	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */
	if (process.env.NODE_ENV !== 'production') {
	  var deprecatedAPIs = {
	    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
	  };
	  var defineDeprecationWarning = function defineDeprecationWarning(methodName, info) {
	    if (canDefineProperty) {
	      (0, _defineProperty2.default)(ReactComponent.prototype, methodName, {
	        get: function get() {
	          process.env.NODE_ENV !== 'production' ? warning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]) : void 0;
	          return undefined;
	        }
	      });
	    }
	  };
	  for (var fnName in deprecatedAPIs) {
	    if (deprecatedAPIs.hasOwnProperty(fnName)) {
	      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	    }
	  }
	}

	module.exports = ReactComponent;

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/core-js/object/define-property");

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var warning = __webpack_require__(60);

	function warnNoop(publicInstance, callerName) {
	  if (process.env.NODE_ENV !== 'production') {
	    var constructor = publicInstance.constructor;
	    process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
	  }
	}

	/**
	 * This is the abstract API for an update queue.
	 */
	var ReactNoopUpdateQueue = {

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function isMounted(publicInstance) {
	    return false;
	  },

	  /**
	   * Enqueue a callback that will be executed after all the pending updates
	   * have processed.
	   *
	   * @param {ReactClass} publicInstance The instance to use as `this` context.
	   * @param {?function} callback Called after state is updated.
	   * @internal
	   */
	  enqueueCallback: function enqueueCallback(publicInstance, callback) {},

	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @internal
	   */
	  enqueueForceUpdate: function enqueueForceUpdate(publicInstance) {
	    warnNoop(publicInstance, 'forceUpdate');
	  },

	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @internal
	   */
	  enqueueReplaceState: function enqueueReplaceState(publicInstance, completeState) {
	    warnNoop(publicInstance, 'replaceState');
	  },

	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @internal
	   */
	  enqueueSetState: function enqueueSetState(publicInstance, partialState) {
	    warnNoop(publicInstance, 'setState');
	  }
	};

	module.exports = ReactNoopUpdateQueue;

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = require("fbjs/lib/emptyObject");

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(50);

	var ReactComponent = __webpack_require__(70);
	var ReactNoopUpdateQueue = __webpack_require__(72);

	var emptyObject = __webpack_require__(73);

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactPureComponent(props, context, updater) {
	  // Duplicated from ReactComponent.
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	function ComponentDummy() {}
	ComponentDummy.prototype = ReactComponent.prototype;
	ReactPureComponent.prototype = new ComponentDummy();
	ReactPureComponent.prototype.constructor = ReactPureComponent;
	// Avoid an extra prototype jump for these methods.
	_assign(ReactPureComponent.prototype, ReactComponent.prototype);
	ReactPureComponent.prototype.isPureReactComponent = true;

	module.exports = ReactPureComponent;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _typeof2 = __webpack_require__(56);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _prodInvariant = __webpack_require__(53),
	    _assign = __webpack_require__(50);

	var ReactComponent = __webpack_require__(70);
	var ReactElement = __webpack_require__(55);
	var ReactPropTypeLocationNames = __webpack_require__(76);
	var ReactNoopUpdateQueue = __webpack_require__(72);

	var emptyObject = __webpack_require__(73);
	var invariant = __webpack_require__(54);
	var warning = __webpack_require__(60);

	var MIXINS_KEY = 'mixins';

	// Helper function to allow the creation of anonymous functions which do not
	// have .name set to the name of the variable being assigned to.
	function identity(fn) {
	  return fn;
	}

	/**
	 * Policies that describe methods in `ReactClassInterface`.
	 */

	var injectedMixins = [];

	/**
	 * Composite components are higher-level components that compose other composite
	 * or host components.
	 *
	 * To create a new type of `ReactClass`, pass a specification of
	 * your new class to `React.createClass`. The only requirement of your class
	 * specification is that you implement a `render` method.
	 *
	 *   var MyComponent = React.createClass({
	 *     render: function() {
	 *       return <div>Hello World</div>;
	 *     }
	 *   });
	 *
	 * The class specification supports a specific protocol of methods that have
	 * special meaning (e.g. `render`). See `ReactClassInterface` for
	 * more the comprehensive protocol. Any other properties and methods in the
	 * class specification will be available on the prototype.
	 *
	 * @interface ReactClassInterface
	 * @internal
	 */
	var ReactClassInterface = {

	  /**
	   * An array of Mixin objects to include when defining your component.
	   *
	   * @type {array}
	   * @optional
	   */
	  mixins: 'DEFINE_MANY',

	  /**
	   * An object containing properties and methods that should be defined on
	   * the component's constructor instead of its prototype (static methods).
	   *
	   * @type {object}
	   * @optional
	   */
	  statics: 'DEFINE_MANY',

	  /**
	   * Definition of prop types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  propTypes: 'DEFINE_MANY',

	  /**
	   * Definition of context types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  contextTypes: 'DEFINE_MANY',

	  /**
	   * Definition of context types this component sets for its children.
	   *
	   * @type {object}
	   * @optional
	   */
	  childContextTypes: 'DEFINE_MANY',

	  // ==== Definition methods ====

	  /**
	   * Invoked when the component is mounted. Values in the mapping will be set on
	   * `this.props` if that prop is not specified (i.e. using an `in` check).
	   *
	   * This method is invoked before `getInitialState` and therefore cannot rely
	   * on `this.state` or use `this.setState`.
	   *
	   * @return {object}
	   * @optional
	   */
	  getDefaultProps: 'DEFINE_MANY_MERGED',

	  /**
	   * Invoked once before the component is mounted. The return value will be used
	   * as the initial value of `this.state`.
	   *
	   *   getInitialState: function() {
	   *     return {
	   *       isOn: false,
	   *       fooBaz: new BazFoo()
	   *     }
	   *   }
	   *
	   * @return {object}
	   * @optional
	   */
	  getInitialState: 'DEFINE_MANY_MERGED',

	  /**
	   * @return {object}
	   * @optional
	   */
	  getChildContext: 'DEFINE_MANY_MERGED',

	  /**
	   * Uses props from `this.props` and state from `this.state` to render the
	   * structure of the component.
	   *
	   * No guarantees are made about when or how often this method is invoked, so
	   * it must not have side effects.
	   *
	   *   render: function() {
	   *     var name = this.props.name;
	   *     return <div>Hello, {name}!</div>;
	   *   }
	   *
	   * @return {ReactComponent}
	   * @nosideeffects
	   * @required
	   */
	  render: 'DEFINE_ONCE',

	  // ==== Delegate methods ====

	  /**
	   * Invoked when the component is initially created and about to be mounted.
	   * This may have side effects, but any external subscriptions or data created
	   * by this method must be cleaned up in `componentWillUnmount`.
	   *
	   * @optional
	   */
	  componentWillMount: 'DEFINE_MANY',

	  /**
	   * Invoked when the component has been mounted and has a DOM representation.
	   * However, there is no guarantee that the DOM node is in the document.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been mounted (initialized and rendered) for the first time.
	   *
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidMount: 'DEFINE_MANY',

	  /**
	   * Invoked before the component receives new props.
	   *
	   * Use this as an opportunity to react to a prop transition by updating the
	   * state using `this.setState`. Current props are accessed via `this.props`.
	   *
	   *   componentWillReceiveProps: function(nextProps, nextContext) {
	   *     this.setState({
	   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	   *     });
	   *   }
	   *
	   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	   * transition may cause a state change, but the opposite is not true. If you
	   * need it, you are probably looking for `componentWillUpdate`.
	   *
	   * @param {object} nextProps
	   * @optional
	   */
	  componentWillReceiveProps: 'DEFINE_MANY',

	  /**
	   * Invoked while deciding if the component should be updated as a result of
	   * receiving new props, state and/or context.
	   *
	   * Use this as an opportunity to `return false` when you're certain that the
	   * transition to the new props/state/context will not require a component
	   * update.
	   *
	   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	   *     return !equal(nextProps, this.props) ||
	   *       !equal(nextState, this.state) ||
	   *       !equal(nextContext, this.context);
	   *   }
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @return {boolean} True if the component should update.
	   * @optional
	   */
	  shouldComponentUpdate: 'DEFINE_ONCE',

	  /**
	   * Invoked when the component is about to update due to a transition from
	   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	   * and `nextContext`.
	   *
	   * Use this as an opportunity to perform preparation before an update occurs.
	   *
	   * NOTE: You **cannot** use `this.setState()` in this method.
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @param {ReactReconcileTransaction} transaction
	   * @optional
	   */
	  componentWillUpdate: 'DEFINE_MANY',

	  /**
	   * Invoked when the component's DOM representation has been updated.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been updated.
	   *
	   * @param {object} prevProps
	   * @param {?object} prevState
	   * @param {?object} prevContext
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidUpdate: 'DEFINE_MANY',

	  /**
	   * Invoked when the component is about to be removed from its parent and have
	   * its DOM representation destroyed.
	   *
	   * Use this as an opportunity to deallocate any external resources.
	   *
	   * NOTE: There is no `componentDidUnmount` since your component will have been
	   * destroyed by that point.
	   *
	   * @optional
	   */
	  componentWillUnmount: 'DEFINE_MANY',

	  // ==== Advanced methods ====

	  /**
	   * Updates the component's currently mounted DOM representation.
	   *
	   * By default, this implements React's rendering and reconciliation algorithm.
	   * Sophisticated clients may wish to override this.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   * @overridable
	   */
	  updateComponent: 'OVERRIDE_BASE'

	};

	/**
	 * Mapping from class specification keys to special processing functions.
	 *
	 * Although these are declared like instance properties in the specification
	 * when defining classes using `React.createClass`, they are actually static
	 * and are accessible on the constructor instead of the prototype. Despite
	 * being static, they must be defined outside of the "statics" key under
	 * which all other static methods are defined.
	 */
	var RESERVED_SPEC_KEYS = {
	  displayName: function displayName(Constructor, _displayName) {
	    Constructor.displayName = _displayName;
	  },
	  mixins: function mixins(Constructor, _mixins) {
	    if (_mixins) {
	      for (var i = 0; i < _mixins.length; i++) {
	        mixSpecIntoComponent(Constructor, _mixins[i]);
	      }
	    }
	  },
	  childContextTypes: function childContextTypes(Constructor, _childContextTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, _childContextTypes, 'childContext');
	    }
	    Constructor.childContextTypes = _assign({}, Constructor.childContextTypes, _childContextTypes);
	  },
	  contextTypes: function contextTypes(Constructor, _contextTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, _contextTypes, 'context');
	    }
	    Constructor.contextTypes = _assign({}, Constructor.contextTypes, _contextTypes);
	  },
	  /**
	   * Special case getDefaultProps which should move into statics but requires
	   * automatic merging.
	   */
	  getDefaultProps: function getDefaultProps(Constructor, _getDefaultProps) {
	    if (Constructor.getDefaultProps) {
	      Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, _getDefaultProps);
	    } else {
	      Constructor.getDefaultProps = _getDefaultProps;
	    }
	  },
	  propTypes: function propTypes(Constructor, _propTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, _propTypes, 'prop');
	    }
	    Constructor.propTypes = _assign({}, Constructor.propTypes, _propTypes);
	  },
	  statics: function statics(Constructor, _statics) {
	    mixStaticSpecIntoComponent(Constructor, _statics);
	  },
	  autobind: function autobind() {} };

	function validateTypeDef(Constructor, typeDef, location) {
	  for (var propName in typeDef) {
	    if (typeDef.hasOwnProperty(propName)) {
	      // use a warning instead of an invariant so components
	      // don't show up in prod but only in __DEV__
	      process.env.NODE_ENV !== 'production' ? warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames[location], propName) : void 0;
	    }
	  }
	}

	function validateMethodOverride(isAlreadyDefined, name) {
	  var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;

	  // Disallow overriding of base class methods unless explicitly allowed.
	  if (ReactClassMixin.hasOwnProperty(name)) {
	    !(specPolicy === 'OVERRIDE_BASE') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.', name) : _prodInvariant('73', name) : void 0;
	  }

	  // Disallow defining methods more than once unless explicitly allowed.
	  if (isAlreadyDefined) {
	    !(specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('74', name) : void 0;
	  }
	}

	/**
	 * Mixin helper which handles policy validation and reserved
	 * specification keys when building React classes.
	 */
	function mixSpecIntoComponent(Constructor, spec) {
	  if (!spec) {
	    if (process.env.NODE_ENV !== 'production') {
	      var typeofSpec = typeof spec === 'undefined' ? 'undefined' : (0, _typeof3.default)(spec);
	      var isMixinValid = typeofSpec === 'object' && spec !== null;

	      process.env.NODE_ENV !== 'production' ? warning(isMixinValid, '%s: You\'re attempting to include a mixin that is either null ' + 'or not an object. Check the mixins included by the component, ' + 'as well as any mixins they include themselves. ' + 'Expected object but got %s.', Constructor.displayName || 'ReactClass', spec === null ? null : typeofSpec) : void 0;
	    }

	    return;
	  }

	  !(typeof spec !== 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to use a component class or function as a mixin. Instead, just use a regular object.') : _prodInvariant('75') : void 0;
	  !!ReactElement.isValidElement(spec) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to use a component as a mixin. Instead, just use a regular object.') : _prodInvariant('76') : void 0;

	  var proto = Constructor.prototype;
	  var autoBindPairs = proto.__reactAutoBindPairs;

	  // By handling mixins before any other properties, we ensure the same
	  // chaining order is applied to methods with DEFINE_MANY policy, whether
	  // mixins are listed before or after these methods in the spec.
	  if (spec.hasOwnProperty(MIXINS_KEY)) {
	    RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	  }

	  for (var name in spec) {
	    if (!spec.hasOwnProperty(name)) {
	      continue;
	    }

	    if (name === MIXINS_KEY) {
	      // We have already handled mixins in a special case above.
	      continue;
	    }

	    var property = spec[name];
	    var isAlreadyDefined = proto.hasOwnProperty(name);
	    validateMethodOverride(isAlreadyDefined, name);

	    if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	      RESERVED_SPEC_KEYS[name](Constructor, property);
	    } else {
	      // Setup methods on prototype:
	      // The following member methods should not be automatically bound:
	      // 1. Expected ReactClass methods (in the "interface").
	      // 2. Overridden methods (that were mixed in).
	      var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	      var isFunction = typeof property === 'function';
	      var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;

	      if (shouldAutoBind) {
	        autoBindPairs.push(name, property);
	        proto[name] = property;
	      } else {
	        if (isAlreadyDefined) {
	          var specPolicy = ReactClassInterface[name];

	          // These cases should already be caught by validateMethodOverride.
	          !(isReactClassMethod && (specPolicy === 'DEFINE_MANY_MERGED' || specPolicy === 'DEFINE_MANY')) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.', specPolicy, name) : _prodInvariant('77', specPolicy, name) : void 0;

	          // For methods which are defined more than once, call the existing
	          // methods before calling the new property, merging if appropriate.
	          if (specPolicy === 'DEFINE_MANY_MERGED') {
	            proto[name] = createMergedResultFunction(proto[name], property);
	          } else if (specPolicy === 'DEFINE_MANY') {
	            proto[name] = createChainedFunction(proto[name], property);
	          }
	        } else {
	          proto[name] = property;
	          if (process.env.NODE_ENV !== 'production') {
	            // Add verbose displayName to the function, which helps when looking
	            // at profiling tools.
	            if (typeof property === 'function' && spec.displayName) {
	              proto[name].displayName = spec.displayName + '_' + name;
	            }
	          }
	        }
	      }
	    }
	  }
	}

	function mixStaticSpecIntoComponent(Constructor, statics) {
	  if (!statics) {
	    return;
	  }
	  for (var name in statics) {
	    var property = statics[name];
	    if (!statics.hasOwnProperty(name)) {
	      continue;
	    }

	    var isReserved = name in RESERVED_SPEC_KEYS;
	    !!isReserved ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', name) : _prodInvariant('78', name) : void 0;

	    var isInherited = name in Constructor;
	    !!isInherited ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('79', name) : void 0;
	    Constructor[name] = property;
	  }
	}

	/**
	 * Merge two objects, but throw if both contain the same key.
	 *
	 * @param {object} one The first object, which is mutated.
	 * @param {object} two The second object
	 * @return {object} one after it has been mutated to contain everything in two.
	 */
	function mergeIntoWithNoDuplicateKeys(one, two) {
	  !(one && two && (typeof one === 'undefined' ? 'undefined' : (0, _typeof3.default)(one)) === 'object' && (typeof two === 'undefined' ? 'undefined' : (0, _typeof3.default)(two)) === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : _prodInvariant('80') : void 0;

	  for (var key in two) {
	    if (two.hasOwnProperty(key)) {
	      !(one[key] === undefined) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.', key) : _prodInvariant('81', key) : void 0;
	      one[key] = two[key];
	    }
	  }
	  return one;
	}

	/**
	 * Creates a function that invokes two functions and merges their return values.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createMergedResultFunction(one, two) {
	  return function mergedResult() {
	    var a = one.apply(this, arguments);
	    var b = two.apply(this, arguments);
	    if (a == null) {
	      return b;
	    } else if (b == null) {
	      return a;
	    }
	    var c = {};
	    mergeIntoWithNoDuplicateKeys(c, a);
	    mergeIntoWithNoDuplicateKeys(c, b);
	    return c;
	  };
	}

	/**
	 * Creates a function that invokes two functions and ignores their return vales.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createChainedFunction(one, two) {
	  return function chainedFunction() {
	    one.apply(this, arguments);
	    two.apply(this, arguments);
	  };
	}

	/**
	 * Binds a method to the component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 * @param {function} method Method to be bound.
	 * @return {function} The bound method.
	 */
	function bindAutoBindMethod(component, method) {
	  var boundMethod = method.bind(component);
	  if (process.env.NODE_ENV !== 'production') {
	    boundMethod.__reactBoundContext = component;
	    boundMethod.__reactBoundMethod = method;
	    boundMethod.__reactBoundArguments = null;
	    var componentName = component.constructor.displayName;
	    var _bind = boundMethod.bind;
	    boundMethod.bind = function (newThis) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      // User is trying to bind() an autobound method; we effectively will
	      // ignore the value of "this" that the user is trying to use, so
	      // let's warn.
	      if (newThis !== component && newThis !== null) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : void 0;
	      } else if (!args.length) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : void 0;
	        return boundMethod;
	      }
	      var reboundMethod = _bind.apply(boundMethod, arguments);
	      reboundMethod.__reactBoundContext = component;
	      reboundMethod.__reactBoundMethod = method;
	      reboundMethod.__reactBoundArguments = args;
	      return reboundMethod;
	    };
	  }
	  return boundMethod;
	}

	/**
	 * Binds all auto-bound methods in a component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 */
	function bindAutoBindMethods(component) {
	  var pairs = component.__reactAutoBindPairs;
	  for (var i = 0; i < pairs.length; i += 2) {
	    var autoBindKey = pairs[i];
	    var method = pairs[i + 1];
	    component[autoBindKey] = bindAutoBindMethod(component, method);
	  }
	}

	/**
	 * Add more to the ReactClass base class. These are all legacy features and
	 * therefore not already part of the modern ReactComponent.
	 */
	var ReactClassMixin = {

	  /**
	   * TODO: This will be deprecated because state should always keep a consistent
	   * type signature and the only use case for this, is to avoid that.
	   */
	  replaceState: function replaceState(newState, callback) {
	    this.updater.enqueueReplaceState(this, newState);
	    if (callback) {
	      this.updater.enqueueCallback(this, callback, 'replaceState');
	    }
	  },

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function isMounted() {
	    return this.updater.isMounted(this);
	  }
	};

	var ReactClassComponent = function ReactClassComponent() {};
	_assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);

	/**
	 * Module for creating composite components.
	 *
	 * @class ReactClass
	 */
	var ReactClass = {

	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  createClass: function createClass(spec) {
	    // To keep our warnings more understandable, we'll use a little hack here to
	    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
	    // unnecessarily identify a class without displayName as 'Constructor'.
	    var Constructor = identity(function (props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.

	      if (process.env.NODE_ENV !== 'production') {
	        process.env.NODE_ENV !== 'production' ? warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory') : void 0;
	      }

	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }

	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;

	      this.state = null;

	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.

	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (process.env.NODE_ENV !== 'production') {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (initialState === undefined && this.getInitialState._isMockFunction) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      !((typeof initialState === 'undefined' ? 'undefined' : (0, _typeof3.default)(initialState)) === 'object' && !Array.isArray(initialState)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : _prodInvariant('82', Constructor.displayName || 'ReactCompositeComponent') : void 0;

	      this.state = initialState;
	    });
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];

	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

	    mixSpecIntoComponent(Constructor, spec);

	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }

	    !Constructor.prototype.render ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createClass(...): Class specification must implement a `render` method.') : _prodInvariant('83') : void 0;

	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : void 0;
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component') : void 0;
	    }

	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }

	    return Constructor;
	  },

	  injection: {
	    injectMixin: function injectMixin(mixin) {
	      injectedMixins.push(mixin);
	    }
	  }

	};

	module.exports = ReactClass;

/***/ },
/* 76 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var ReactPropTypeLocationNames = {};

	if (process.env.NODE_ENV !== 'production') {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	}

	module.exports = ReactPropTypeLocationNames;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var ReactElement = __webpack_require__(55);

	/**
	 * Create a factory that creates HTML tag elements.
	 *
	 * @private
	 */
	var createDOMFactory = ReactElement.createFactory;
	if (process.env.NODE_ENV !== 'production') {
	  var ReactElementValidator = __webpack_require__(78);
	  createDOMFactory = ReactElementValidator.createFactory;
	}

	/**
	 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	 * This is also accessible via `React.DOM`.
	 *
	 * @public
	 */
	var ReactDOMFactories = {
	  a: createDOMFactory('a'),
	  abbr: createDOMFactory('abbr'),
	  address: createDOMFactory('address'),
	  area: createDOMFactory('area'),
	  article: createDOMFactory('article'),
	  aside: createDOMFactory('aside'),
	  audio: createDOMFactory('audio'),
	  b: createDOMFactory('b'),
	  base: createDOMFactory('base'),
	  bdi: createDOMFactory('bdi'),
	  bdo: createDOMFactory('bdo'),
	  big: createDOMFactory('big'),
	  blockquote: createDOMFactory('blockquote'),
	  body: createDOMFactory('body'),
	  br: createDOMFactory('br'),
	  button: createDOMFactory('button'),
	  canvas: createDOMFactory('canvas'),
	  caption: createDOMFactory('caption'),
	  cite: createDOMFactory('cite'),
	  code: createDOMFactory('code'),
	  col: createDOMFactory('col'),
	  colgroup: createDOMFactory('colgroup'),
	  data: createDOMFactory('data'),
	  datalist: createDOMFactory('datalist'),
	  dd: createDOMFactory('dd'),
	  del: createDOMFactory('del'),
	  details: createDOMFactory('details'),
	  dfn: createDOMFactory('dfn'),
	  dialog: createDOMFactory('dialog'),
	  div: createDOMFactory('div'),
	  dl: createDOMFactory('dl'),
	  dt: createDOMFactory('dt'),
	  em: createDOMFactory('em'),
	  embed: createDOMFactory('embed'),
	  fieldset: createDOMFactory('fieldset'),
	  figcaption: createDOMFactory('figcaption'),
	  figure: createDOMFactory('figure'),
	  footer: createDOMFactory('footer'),
	  form: createDOMFactory('form'),
	  h1: createDOMFactory('h1'),
	  h2: createDOMFactory('h2'),
	  h3: createDOMFactory('h3'),
	  h4: createDOMFactory('h4'),
	  h5: createDOMFactory('h5'),
	  h6: createDOMFactory('h6'),
	  head: createDOMFactory('head'),
	  header: createDOMFactory('header'),
	  hgroup: createDOMFactory('hgroup'),
	  hr: createDOMFactory('hr'),
	  html: createDOMFactory('html'),
	  i: createDOMFactory('i'),
	  iframe: createDOMFactory('iframe'),
	  img: createDOMFactory('img'),
	  input: createDOMFactory('input'),
	  ins: createDOMFactory('ins'),
	  kbd: createDOMFactory('kbd'),
	  keygen: createDOMFactory('keygen'),
	  label: createDOMFactory('label'),
	  legend: createDOMFactory('legend'),
	  li: createDOMFactory('li'),
	  link: createDOMFactory('link'),
	  main: createDOMFactory('main'),
	  map: createDOMFactory('map'),
	  mark: createDOMFactory('mark'),
	  menu: createDOMFactory('menu'),
	  menuitem: createDOMFactory('menuitem'),
	  meta: createDOMFactory('meta'),
	  meter: createDOMFactory('meter'),
	  nav: createDOMFactory('nav'),
	  noscript: createDOMFactory('noscript'),
	  object: createDOMFactory('object'),
	  ol: createDOMFactory('ol'),
	  optgroup: createDOMFactory('optgroup'),
	  option: createDOMFactory('option'),
	  output: createDOMFactory('output'),
	  p: createDOMFactory('p'),
	  param: createDOMFactory('param'),
	  picture: createDOMFactory('picture'),
	  pre: createDOMFactory('pre'),
	  progress: createDOMFactory('progress'),
	  q: createDOMFactory('q'),
	  rp: createDOMFactory('rp'),
	  rt: createDOMFactory('rt'),
	  ruby: createDOMFactory('ruby'),
	  s: createDOMFactory('s'),
	  samp: createDOMFactory('samp'),
	  script: createDOMFactory('script'),
	  section: createDOMFactory('section'),
	  select: createDOMFactory('select'),
	  small: createDOMFactory('small'),
	  source: createDOMFactory('source'),
	  span: createDOMFactory('span'),
	  strong: createDOMFactory('strong'),
	  style: createDOMFactory('style'),
	  sub: createDOMFactory('sub'),
	  summary: createDOMFactory('summary'),
	  sup: createDOMFactory('sup'),
	  table: createDOMFactory('table'),
	  tbody: createDOMFactory('tbody'),
	  td: createDOMFactory('td'),
	  textarea: createDOMFactory('textarea'),
	  tfoot: createDOMFactory('tfoot'),
	  th: createDOMFactory('th'),
	  thead: createDOMFactory('thead'),
	  time: createDOMFactory('time'),
	  title: createDOMFactory('title'),
	  tr: createDOMFactory('tr'),
	  track: createDOMFactory('track'),
	  u: createDOMFactory('u'),
	  ul: createDOMFactory('ul'),
	  'var': createDOMFactory('var'),
	  video: createDOMFactory('video'),
	  wbr: createDOMFactory('wbr'),

	  // SVG
	  circle: createDOMFactory('circle'),
	  clipPath: createDOMFactory('clipPath'),
	  defs: createDOMFactory('defs'),
	  ellipse: createDOMFactory('ellipse'),
	  g: createDOMFactory('g'),
	  image: createDOMFactory('image'),
	  line: createDOMFactory('line'),
	  linearGradient: createDOMFactory('linearGradient'),
	  mask: createDOMFactory('mask'),
	  path: createDOMFactory('path'),
	  pattern: createDOMFactory('pattern'),
	  polygon: createDOMFactory('polygon'),
	  polyline: createDOMFactory('polyline'),
	  radialGradient: createDOMFactory('radialGradient'),
	  rect: createDOMFactory('rect'),
	  stop: createDOMFactory('stop'),
	  svg: createDOMFactory('svg'),
	  text: createDOMFactory('text'),
	  tspan: createDOMFactory('tspan')
	};

	module.exports = ReactDOMFactories;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	/**
	 * ReactElementValidator provides a wrapper around a element factory
	 * which validates the props passed to the element. This is intended to be
	 * used only in DEV and could be replaced by a static type checker for languages
	 * that support it.
	 */

	'use strict';

	var _typeof2 = __webpack_require__(56);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ReactCurrentOwner = __webpack_require__(59);
	var ReactComponentTreeHook = __webpack_require__(79);
	var ReactElement = __webpack_require__(55);

	var checkReactTypeSpec = __webpack_require__(83);

	var canDefineProperty = __webpack_require__(61);
	var getIteratorFn = __webpack_require__(67);
	var warning = __webpack_require__(60);

	function getDeclarationErrorAddendum() {
	  if (ReactCurrentOwner.current) {
	    var name = ReactCurrentOwner.current.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */
	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  var info = getDeclarationErrorAddendum();

	  if (!info) {
	    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
	    if (parentName) {
	      info = ' Check the top-level render call using <' + parentName + '>.';
	    }
	  }
	  return info;
	}

	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */
	function validateExplicitKey(element, parentType) {
	  if (!element._store || element._store.validated || element.key != null) {
	    return;
	  }
	  element._store.validated = true;

	  var memoizer = ownerHasKeyUseWarning.uniqueKey || (ownerHasKeyUseWarning.uniqueKey = {});

	  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
	  if (memoizer[currentComponentErrorInfo]) {
	    return;
	  }
	  memoizer[currentComponentErrorInfo] = true;

	  // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.
	  var childOwner = '';
	  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
	    // Give the component that originally created this child.
	    childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
	  }

	  process.env.NODE_ENV !== 'production' ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, ReactComponentTreeHook.getCurrentStackAddendum(element)) : void 0;
	}

	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */
	function validateChildKeys(node, parentType) {
	  if ((typeof node === 'undefined' ? 'undefined' : (0, _typeof3.default)(node)) !== 'object') {
	    return;
	  }
	  if (Array.isArray(node)) {
	    for (var i = 0; i < node.length; i++) {
	      var child = node[i];
	      if (ReactElement.isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (ReactElement.isValidElement(node)) {
	    // This element was passed in a valid location.
	    if (node._store) {
	      node._store.validated = true;
	    }
	  } else if (node) {
	    var iteratorFn = getIteratorFn(node);
	    // Entry iterators provide implicit keys.
	    if (iteratorFn) {
	      if (iteratorFn !== node.entries) {
	        var iterator = iteratorFn.call(node);
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (ReactElement.isValidElement(step.value)) {
	            validateExplicitKey(step.value, parentType);
	          }
	        }
	      }
	    }
	  }
	}

	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */
	function validatePropTypes(element) {
	  var componentClass = element.type;
	  if (typeof componentClass !== 'function') {
	    return;
	  }
	  var name = componentClass.displayName || componentClass.name;
	  if (componentClass.propTypes) {
	    checkReactTypeSpec(componentClass.propTypes, element.props, 'prop', name, element, null);
	  }
	  if (typeof componentClass.getDefaultProps === 'function') {
	    process.env.NODE_ENV !== 'production' ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
	  }
	}

	var ReactElementValidator = {

	  createElement: function createElement(type, props, children) {
	    var validType = typeof type === 'string' || typeof type === 'function';
	    // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.
	    if (!validType) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'React.createElement: type should not be null, undefined, boolean, or ' + 'number. It should be a string (for DOM elements) or a ReactClass ' + '(for composite components).%s', getDeclarationErrorAddendum()) : void 0;
	    }

	    var element = ReactElement.createElement.apply(this, arguments);

	    // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.
	    if (element == null) {
	      return element;
	    }

	    // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)
	    if (validType) {
	      for (var i = 2; i < arguments.length; i++) {
	        validateChildKeys(arguments[i], type);
	      }
	    }

	    validatePropTypes(element);

	    return element;
	  },

	  createFactory: function createFactory(type) {
	    var validatedFactory = ReactElementValidator.createElement.bind(null, type);
	    // Legacy hook TODO: Warn if this is accessed
	    validatedFactory.type = type;

	    if (process.env.NODE_ENV !== 'production') {
	      if (canDefineProperty) {
	        Object.defineProperty(validatedFactory, 'type', {
	          enumerable: false,
	          get: function get() {
	            process.env.NODE_ENV !== 'production' ? warning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.') : void 0;
	            Object.defineProperty(this, 'type', {
	              value: type
	            });
	            return type;
	          }
	        });
	      }
	    }

	    return validatedFactory;
	  },

	  cloneElement: function cloneElement(element, props, children) {
	    var newElement = ReactElement.cloneElement.apply(this, arguments);
	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], newElement.type);
	    }
	    validatePropTypes(newElement);
	    return newElement;
	  }

	};

	module.exports = ReactElementValidator;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _typeof2 = __webpack_require__(56);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _keys = __webpack_require__(66);

	var _keys2 = _interopRequireDefault(_keys);

	var _set = __webpack_require__(80);

	var _set2 = _interopRequireDefault(_set);

	var _map = __webpack_require__(81);

	var _map2 = _interopRequireDefault(_map);

	var _from = __webpack_require__(82);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _prodInvariant = __webpack_require__(53);

	var ReactCurrentOwner = __webpack_require__(59);

	var invariant = __webpack_require__(54);
	var warning = __webpack_require__(60);

	function isNative(fn) {
	  // Based on isNative() from Lodash
	  var funcToString = Function.prototype.toString;
	  var hasOwnProperty = Object.prototype.hasOwnProperty;
	  var reIsNative = RegExp('^' + funcToString
	  // Take an example native function source for comparison
	  .call(hasOwnProperty)
	  // Strip regex characters so we can use it for regex
	  .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  // Remove hasOwnProperty from the template to make it generic
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
	  try {
	    var source = funcToString.call(fn);
	    return reIsNative.test(source);
	  } catch (err) {
	    return false;
	  }
	}

	var canUseCollections =
	// Array.from
	typeof _from2.default === 'function' &&
	// Map
	typeof _map2.default === 'function' && isNative(_map2.default) &&
	// Map.prototype.keys
	_map2.default.prototype != null && typeof _map2.default.prototype.keys === 'function' && isNative(_map2.default.prototype.keys) &&
	// Set
	typeof _set2.default === 'function' && isNative(_set2.default) &&
	// Set.prototype.keys
	_set2.default.prototype != null && typeof _set2.default.prototype.keys === 'function' && isNative(_set2.default.prototype.keys);

	var setItem;
	var getItem;
	var removeItem;
	var getItemIDs;
	var addRoot;
	var removeRoot;
	var getRootIDs;

	if (canUseCollections) {
	  var itemMap = new _map2.default();
	  var rootIDSet = new _set2.default();

	  setItem = function setItem(id, item) {
	    itemMap.set(id, item);
	  };
	  getItem = function getItem(id) {
	    return itemMap.get(id);
	  };
	  removeItem = function removeItem(id) {
	    itemMap['delete'](id);
	  };
	  getItemIDs = function getItemIDs() {
	    return (0, _from2.default)(itemMap.keys());
	  };

	  addRoot = function addRoot(id) {
	    rootIDSet.add(id);
	  };
	  removeRoot = function removeRoot(id) {
	    rootIDSet['delete'](id);
	  };
	  getRootIDs = function getRootIDs() {
	    return (0, _from2.default)(rootIDSet.keys());
	  };
	} else {
	  var itemByKey = {};
	  var rootByKey = {};

	  // Use non-numeric keys to prevent V8 performance issues:
	  // https://github.com/facebook/react/pull/7232
	  var getKeyFromID = function getKeyFromID(id) {
	    return '.' + id;
	  };
	  var getIDFromKey = function getIDFromKey(key) {
	    return parseInt(key.substr(1), 10);
	  };

	  setItem = function setItem(id, item) {
	    var key = getKeyFromID(id);
	    itemByKey[key] = item;
	  };
	  getItem = function getItem(id) {
	    var key = getKeyFromID(id);
	    return itemByKey[key];
	  };
	  removeItem = function removeItem(id) {
	    var key = getKeyFromID(id);
	    delete itemByKey[key];
	  };
	  getItemIDs = function getItemIDs() {
	    return (0, _keys2.default)(itemByKey).map(getIDFromKey);
	  };

	  addRoot = function addRoot(id) {
	    var key = getKeyFromID(id);
	    rootByKey[key] = true;
	  };
	  removeRoot = function removeRoot(id) {
	    var key = getKeyFromID(id);
	    delete rootByKey[key];
	  };
	  getRootIDs = function getRootIDs() {
	    return (0, _keys2.default)(rootByKey).map(getIDFromKey);
	  };
	}

	var unmountedIDs = [];

	function purgeDeep(id) {
	  var item = getItem(id);
	  if (item) {
	    var childIDs = item.childIDs;

	    removeItem(id);
	    childIDs.forEach(purgeDeep);
	  }
	}

	function describeComponentFrame(name, source, ownerName) {
	  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
	}

	function _getDisplayName(element) {
	  if (element == null) {
	    return '#empty';
	  } else if (typeof element === 'string' || typeof element === 'number') {
	    return '#text';
	  } else if (typeof element.type === 'string') {
	    return element.type;
	  } else {
	    return element.type.displayName || element.type.name || 'Unknown';
	  }
	}

	function describeID(id) {
	  var name = ReactComponentTreeHook.getDisplayName(id);
	  var element = ReactComponentTreeHook.getElement(id);
	  var ownerID = ReactComponentTreeHook.getOwnerID(id);
	  var ownerName;
	  if (ownerID) {
	    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
	  }
	  process.env.NODE_ENV !== 'production' ? warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : void 0;
	  return describeComponentFrame(name, element && element._source, ownerName);
	}

	var ReactComponentTreeHook = {
	  onSetChildren: function onSetChildren(id, nextChildIDs) {
	    var item = getItem(id);
	    !item ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
	    item.childIDs = nextChildIDs;

	    for (var i = 0; i < nextChildIDs.length; i++) {
	      var nextChildID = nextChildIDs[i];
	      var nextChild = getItem(nextChildID);
	      !nextChild ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('140') : void 0;
	      !(nextChild.childIDs != null || (0, _typeof3.default)(nextChild.element) !== 'object' || nextChild.element == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : _prodInvariant('141') : void 0;
	      !nextChild.isMounted ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('71') : void 0;
	      if (nextChild.parentID == null) {
	        nextChild.parentID = id;
	        // TODO: This shouldn't be necessary but mounting a new root during in
	        // componentWillMount currently causes not-yet-mounted components to
	        // be purged from our tree data so their parent id is missing.
	      }
	      !(nextChild.parentID === id) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : _prodInvariant('142', nextChildID, nextChild.parentID, id) : void 0;
	    }
	  },
	  onBeforeMountComponent: function onBeforeMountComponent(id, element, parentID) {
	    var item = {
	      element: element,
	      parentID: parentID,
	      text: null,
	      childIDs: [],
	      isMounted: false,
	      updateCount: 0
	    };
	    setItem(id, item);
	  },
	  onBeforeUpdateComponent: function onBeforeUpdateComponent(id, element) {
	    var item = getItem(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.element = element;
	  },
	  onMountComponent: function onMountComponent(id) {
	    var item = getItem(id);
	    !item ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
	    item.isMounted = true;
	    var isRoot = item.parentID === 0;
	    if (isRoot) {
	      addRoot(id);
	    }
	  },
	  onUpdateComponent: function onUpdateComponent(id) {
	    var item = getItem(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.updateCount++;
	  },
	  onUnmountComponent: function onUnmountComponent(id) {
	    var item = getItem(id);
	    if (item) {
	      // We need to check if it exists.
	      // `item` might not exist if it is inside an error boundary, and a sibling
	      // error boundary child threw while mounting. Then this instance never
	      // got a chance to mount, but it still gets an unmounting event during
	      // the error boundary cleanup.
	      item.isMounted = false;
	      var isRoot = item.parentID === 0;
	      if (isRoot) {
	        removeRoot(id);
	      }
	    }
	    unmountedIDs.push(id);
	  },
	  purgeUnmountedComponents: function purgeUnmountedComponents() {
	    if (ReactComponentTreeHook._preventPurging) {
	      // Should only be used for testing.
	      return;
	    }

	    for (var i = 0; i < unmountedIDs.length; i++) {
	      var id = unmountedIDs[i];
	      purgeDeep(id);
	    }
	    unmountedIDs.length = 0;
	  },
	  isMounted: function isMounted(id) {
	    var item = getItem(id);
	    return item ? item.isMounted : false;
	  },
	  getCurrentStackAddendum: function getCurrentStackAddendum(topElement) {
	    var info = '';
	    if (topElement) {
	      var name = _getDisplayName(topElement);
	      var owner = topElement._owner;
	      info += describeComponentFrame(name, topElement._source, owner && owner.getName());
	    }

	    var currentOwner = ReactCurrentOwner.current;
	    var id = currentOwner && currentOwner._debugID;

	    info += ReactComponentTreeHook.getStackAddendumByID(id);
	    return info;
	  },
	  getStackAddendumByID: function getStackAddendumByID(id) {
	    var info = '';
	    while (id) {
	      info += describeID(id);
	      id = ReactComponentTreeHook.getParentID(id);
	    }
	    return info;
	  },
	  getChildIDs: function getChildIDs(id) {
	    var item = getItem(id);
	    return item ? item.childIDs : [];
	  },
	  getDisplayName: function getDisplayName(id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element) {
	      return null;
	    }
	    return _getDisplayName(element);
	  },
	  getElement: function getElement(id) {
	    var item = getItem(id);
	    return item ? item.element : null;
	  },
	  getOwnerID: function getOwnerID(id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element || !element._owner) {
	      return null;
	    }
	    return element._owner._debugID;
	  },
	  getParentID: function getParentID(id) {
	    var item = getItem(id);
	    return item ? item.parentID : null;
	  },
	  getSource: function getSource(id) {
	    var item = getItem(id);
	    var element = item ? item.element : null;
	    var source = element != null ? element._source : null;
	    return source;
	  },
	  getText: function getText(id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (typeof element === 'string') {
	      return element;
	    } else if (typeof element === 'number') {
	      return '' + element;
	    } else {
	      return null;
	    }
	  },
	  getUpdateCount: function getUpdateCount(id) {
	    var item = getItem(id);
	    return item ? item.updateCount : 0;
	  },

	  getRootIDs: getRootIDs,
	  getRegisteredIDs: getItemIDs
	};

	module.exports = ReactComponentTreeHook;

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/core-js/set");

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/core-js/map");

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/core-js/array/from");

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _typeof2 = __webpack_require__(56);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _prodInvariant = __webpack_require__(53);

	var ReactPropTypeLocationNames = __webpack_require__(76);
	var ReactPropTypesSecret = __webpack_require__(84);

	var invariant = __webpack_require__(54);
	var warning = __webpack_require__(60);

	var ReactComponentTreeHook;

	if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'test') {
	  // Temporary hack.
	  // Inline requires don't work well with Jest:
	  // https://github.com/facebook/react/issues/7240
	  // Remove the inline requires when we don't need them anymore:
	  // https://github.com/facebook/react/pull/7178
	  ReactComponentTreeHook = __webpack_require__(79);
	}

	var loggedTypeFailures = {};

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?object} element The React element that is being type-checked
	 * @param {?number} debugID The React component instance that is being type-checked
	 * @private
	 */
	function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
	  for (var typeSpecName in typeSpecs) {
	    if (typeSpecs.hasOwnProperty(typeSpecName)) {
	      var error;
	      // Prop type validation may throw. In case they do, we don't want to
	      // fail the render phase where it didn't fail before. So we log it.
	      // After these have been cleaned up, we'll let them throw.
	      try {
	        // This is intentionally an invariant that gets caught. It's the same
	        // behavior as without this statement except with a better message.
	        !(typeof typeSpecs[typeSpecName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : _prodInvariant('84', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : void 0;
	        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	      } catch (ex) {
	        error = ex;
	      }
	      process.env.NODE_ENV !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName, typeof error === 'undefined' ? 'undefined' : (0, _typeof3.default)(error)) : void 0;
	      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	        // Only monitor this failure once because there tends to be a lot of the
	        // same error.
	        loggedTypeFailures[error.message] = true;

	        var componentStackInfo = '';

	        if (process.env.NODE_ENV !== 'production') {
	          if (!ReactComponentTreeHook) {
	            ReactComponentTreeHook = __webpack_require__(79);
	          }
	          if (debugID !== null) {
	            componentStackInfo = ReactComponentTreeHook.getStackAddendumByID(debugID);
	          } else if (element !== null) {
	            componentStackInfo = ReactComponentTreeHook.getCurrentStackAddendum(element);
	          }
	        }

	        process.env.NODE_ENV !== 'production' ? warning(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo) : void 0;
	      }
	    }
	  }
	}

	module.exports = checkReactTypeSpec;

/***/ },
/* 84 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _symbol = __webpack_require__(63);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof2 = __webpack_require__(56);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _stringify = __webpack_require__(86);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ReactElement = __webpack_require__(55);
	var ReactPropTypeLocationNames = __webpack_require__(76);
	var ReactPropTypesSecret = __webpack_require__(84);

	var emptyFunction = __webpack_require__(64);
	var getIteratorFn = __webpack_require__(67);
	var warning = __webpack_require__(60);

	/**
	 * Collection of methods that allow declaration and validation of props that are
	 * supplied to React components. Example usage:
	 *
	 *   var Props = require('ReactPropTypes');
	 *   var MyArticle = React.createClass({
	 *     propTypes: {
	 *       // An optional string prop named "description".
	 *       description: Props.string,
	 *
	 *       // A required enum prop named "category".
	 *       category: Props.oneOf(['News','Photos']).isRequired,
	 *
	 *       // A prop named "dialog" that requires an instance of Dialog.
	 *       dialog: Props.instanceOf(Dialog).isRequired
	 *     },
	 *     render: function() { ... }
	 *   });
	 *
	 * A more formal specification of how these methods are used:
	 *
	 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	 *   decl := ReactPropTypes.{type}(.isRequired)?
	 *
	 * Each and every declaration produces a function with the same signature. This
	 * allows the creation of custom validation functions. For example:
	 *
	 *  var MyLink = React.createClass({
	 *    propTypes: {
	 *      // An optional string or URI prop named "href".
	 *      href: function(props, propName, componentName) {
	 *        var propValue = props[propName];
	 *        if (propValue != null && typeof propValue !== 'string' &&
	 *            !(propValue instanceof URI)) {
	 *          return new Error(
	 *            'Expected a string or an URI for ' + propName + ' in ' +
	 *            componentName
	 *          );
	 *        }
	 *      }
	 *    },
	 *    render: function() {...}
	 *  });
	 *
	 * @internal
	 */

	var ANONYMOUS = '<<anonymous>>';

	var ReactPropTypes = {
	  array: createPrimitiveTypeChecker('array'),
	  bool: createPrimitiveTypeChecker('boolean'),
	  func: createPrimitiveTypeChecker('function'),
	  number: createPrimitiveTypeChecker('number'),
	  object: createPrimitiveTypeChecker('object'),
	  string: createPrimitiveTypeChecker('string'),
	  symbol: createPrimitiveTypeChecker('symbol'),

	  any: createAnyTypeChecker(),
	  arrayOf: createArrayOfTypeChecker,
	  element: createElementTypeChecker(),
	  instanceOf: createInstanceTypeChecker,
	  node: createNodeChecker(),
	  objectOf: createObjectOfTypeChecker,
	  oneOf: createEnumTypeChecker,
	  oneOfType: createUnionTypeChecker,
	  shape: createShapeTypeChecker
	};

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	/*eslint-disable no-self-compare*/
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    return x !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}
	/*eslint-enable no-self-compare*/

	/**
	 * We use an Error-like object for backward compatibility as people may call
	 * PropTypes directly and inspect their output. However we don't use real
	 * Errors anymore. We don't inspect their stack anyway, and creating them
	 * is prohibitively expensive if they are created too often, such as what
	 * happens in oneOfType() for any type before the one that matched.
	 */
	function PropTypeError(message) {
	  this.message = message;
	  this.stack = '';
	}
	// Make `instanceof Error` still work for returned errors.
	PropTypeError.prototype = Error.prototype;

	function createChainableTypeChecker(validate) {
	  if (process.env.NODE_ENV !== 'production') {
	    var manualPropTypeCallCache = {};
	  }
	  function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	    componentName = componentName || ANONYMOUS;
	    propFullName = propFullName || propName;
	    if (process.env.NODE_ENV !== 'production') {
	      if (secret !== ReactPropTypesSecret && typeof console !== 'undefined') {
	        var cacheKey = componentName + ':' + propName;
	        if (!manualPropTypeCallCache[cacheKey]) {
	          process.env.NODE_ENV !== 'production' ? warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will not work in production with the next major version. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.', propFullName, componentName) : void 0;
	          manualPropTypeCallCache[cacheKey] = true;
	        }
	      }
	    }
	    if (props[propName] == null) {
	      var locationName = ReactPropTypeLocationNames[location];
	      if (isRequired) {
	        if (props[propName] === null) {
	          return new PropTypeError('The ' + locationName + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	        }
	        return new PropTypeError('The ' + locationName + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	      }
	      return null;
	    } else {
	      return validate(props, propName, componentName, location, propFullName);
	    }
	  }

	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);

	  return chainedCheckType;
	}

	function createPrimitiveTypeChecker(expectedType) {
	  function validate(props, propName, componentName, location, propFullName, secret) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== expectedType) {
	      var locationName = ReactPropTypeLocationNames[location];
	      // `propValue` being instance of, say, date/regexp, pass the 'object'
	      // check, but we can offer a more precise error message here rather than
	      // 'of type `object`'.
	      var preciseType = getPreciseType(propValue);

	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createAnyTypeChecker() {
	  return createChainableTypeChecker(emptyFunction.thatReturns(null));
	}

	function createArrayOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (typeof typeChecker !== 'function') {
	      return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	    }
	    var propValue = props[propName];
	    if (!Array.isArray(propValue)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var propType = getPropType(propValue);
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	    }
	    for (var i = 0; i < propValue.length; i++) {
	      var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	      if (error instanceof Error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createElementTypeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    if (!ReactElement.isValidElement(propValue)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var propType = getPropType(propValue);
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createInstanceTypeChecker(expectedClass) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!(props[propName] instanceof expectedClass)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var expectedClassName = expectedClass.name || ANONYMOUS;
	      var actualClassName = getClassName(props[propName]);
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createEnumTypeChecker(expectedValues) {
	  if (!Array.isArray(expectedValues)) {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	    return emptyFunction.thatReturnsNull;
	  }

	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    for (var i = 0; i < expectedValues.length; i++) {
	      if (is(propValue, expectedValues[i])) {
	        return null;
	      }
	    }

	    var locationName = ReactPropTypeLocationNames[location];
	    var valuesString = (0, _stringify2.default)(expectedValues);
	    return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	  }
	  return createChainableTypeChecker(validate);
	}

	function createObjectOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (typeof typeChecker !== 'function') {
	      return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	    }
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	    }
	    for (var key in propValue) {
	      if (propValue.hasOwnProperty(key)) {
	        var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createUnionTypeChecker(arrayOfTypeCheckers) {
	  if (!Array.isArray(arrayOfTypeCheckers)) {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	    return emptyFunction.thatReturnsNull;
	  }

	  function validate(props, propName, componentName, location, propFullName) {
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	        return null;
	      }
	    }

	    var locationName = ReactPropTypeLocationNames[location];
	    return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	  }
	  return createChainableTypeChecker(validate);
	}

	function createNodeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!isNode(props[propName])) {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createShapeTypeChecker(shapeTypes) {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	    }
	    for (var key in shapeTypes) {
	      var checker = shapeTypes[key];
	      if (!checker) {
	        continue;
	      }
	      var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	      if (error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function isNode(propValue) {
	  switch (typeof propValue === 'undefined' ? 'undefined' : (0, _typeof3.default)(propValue)) {
	    case 'number':
	    case 'string':
	    case 'undefined':
	      return true;
	    case 'boolean':
	      return !propValue;
	    case 'object':
	      if (Array.isArray(propValue)) {
	        return propValue.every(isNode);
	      }
	      if (propValue === null || ReactElement.isValidElement(propValue)) {
	        return true;
	      }

	      var iteratorFn = getIteratorFn(propValue);
	      if (iteratorFn) {
	        var iterator = iteratorFn.call(propValue);
	        var step;
	        if (iteratorFn !== propValue.entries) {
	          while (!(step = iterator.next()).done) {
	            if (!isNode(step.value)) {
	              return false;
	            }
	          }
	        } else {
	          // Iterator will provide entry [k,v] tuples rather than values.
	          while (!(step = iterator.next()).done) {
	            var entry = step.value;
	            if (entry) {
	              if (!isNode(entry[1])) {
	                return false;
	              }
	            }
	          }
	        }
	      } else {
	        return false;
	      }

	      return true;
	    default:
	      return false;
	  }
	}

	function isSymbol(propType, propValue) {
	  // Native Symbol.
	  if (propType === 'symbol') {
	    return true;
	  }

	  // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	  if (propValue['@@toStringTag'] === 'Symbol') {
	    return true;
	  }

	  // Fallback for non-spec compliant Symbols which are polyfilled.
	  if (typeof _symbol2.default === 'function' && propValue instanceof _symbol2.default) {
	    return true;
	  }

	  return false;
	}

	// Equivalent of `typeof` but with special handling for array and regexp.
	function getPropType(propValue) {
	  var propType = typeof propValue === 'undefined' ? 'undefined' : (0, _typeof3.default)(propValue);
	  if (Array.isArray(propValue)) {
	    return 'array';
	  }
	  if (propValue instanceof RegExp) {
	    // Old webkits (at least until Android 4.0) return 'function' rather than
	    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	    // passes PropTypes.object.
	    return 'object';
	  }
	  if (isSymbol(propType, propValue)) {
	    return 'symbol';
	  }
	  return propType;
	}

	// This handles more types than `getPropType`. Only used for error messages.
	// See `createPrimitiveTypeChecker`.
	function getPreciseType(propValue) {
	  var propType = getPropType(propValue);
	  if (propType === 'object') {
	    if (propValue instanceof Date) {
	      return 'date';
	    } else if (propValue instanceof RegExp) {
	      return 'regexp';
	    }
	  }
	  return propType;
	}

	// Returns class name of the object, if any.
	function getClassName(propValue) {
	  if (!propValue.constructor || !propValue.constructor.name) {
	    return ANONYMOUS;
	  }
	  return propValue.constructor.name;
	}

	module.exports = ReactPropTypes;

/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/core-js/json/stringify");

/***/ },
/* 87 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	module.exports = '15.4.1';

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	'use strict';

	var _prodInvariant = __webpack_require__(53);

	var ReactElement = __webpack_require__(55);

	var invariant = __webpack_require__(54);

	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
	 *
	 * The current implementation of this function assumes that a single child gets
	 * passed without a wrapper, but the purpose of this helper function is to
	 * abstract away the particular structure of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactElement} The first and only `ReactElement` contained in the
	 * structure.
	 */
	function onlyChild(children) {
	  !ReactElement.isValidElement(children) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'React.Children.only expected to receive a single React element child.') : _prodInvariant('143') : void 0;
	  return children;
	}

	module.exports = onlyChild;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(14);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(15);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(16);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(17);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(18);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var _reactHelmet = __webpack_require__(11);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _reactRouter = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var About = function (_React$PureComponent) {
	  (0, _inherits3.default)(About, _React$PureComponent);

	  function About(props) {
	    (0, _classCallCheck3.default)(this, About);
	    return (0, _possibleConstructorReturn3.default)(this, (About.__proto__ || (0, _getPrototypeOf2.default)(About)).call(this, props));
	  }

	  (0, _createClass3.default)(About, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { style: { marginTop: '3em', textAlign: 'center' } },
	        _react2.default.createElement(_reactHelmet2.default, { title: 'About' }),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/', style: { textDecoration: 'none', color: '#87b8b9', fontSize: '1.4em' } },
	            'Home'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: { maxWidth: '700px', padding: '0 2em', margin: '2em auto 0 auto', fontSize: '1.6em' } },
	          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	        )
	      );
	    }
	  }]);
	  return About;
	}(_react2.default.PureComponent);

	;

	exports.default = About;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(14);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(15);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(16);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(17);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(18);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var _reactHelmet = __webpack_require__(11);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _reactRouter = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NotFound = function (_React$PureComponent) {
	  (0, _inherits3.default)(NotFound, _React$PureComponent);

	  function NotFound(props) {
	    (0, _classCallCheck3.default)(this, NotFound);
	    return (0, _possibleConstructorReturn3.default)(this, (NotFound.__proto__ || (0, _getPrototypeOf2.default)(NotFound)).call(this, props));
	  }

	  (0, _createClass3.default)(NotFound, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { style: { marginTop: '3em', textAlign: 'center' } },
	        _react2.default.createElement(_reactHelmet2.default, { title: '404' }),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/', style: { textDecoration: 'none', color: '#87b8b9', fontSize: '1.4em' } },
	            'Home'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: { maxWidth: '700px', padding: '0 2em', margin: '2em auto 0 auto', fontSize: '1.6em' } },
	          'The page could not be found \uD83D\uDE41'
	        )
	      );
	    }
	  }]);
	  return NotFound;
	}(_react2.default.PureComponent);

	;

	exports.default = NotFound;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Layout = function Layout(_ref) {
	  var body = _ref.body,
	      head = _ref.head,
	      script = _ref.script;
	  return _react2.default.createElement(
	    'html',
	    null,
	    _react2.default.createElement(
	      'head',
	      null,
	      _react2.default.createElement('meta', { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' }),
	      _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' }),
	      _react2.default.createElement('link', { rel: 'icon', href: 'data:;base64,=' }),
	      head.title.toComponent(),
	      head.meta.toComponent(),
	      _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/assets/style.css' })
	    ),
	    _react2.default.createElement(
	      'body',
	      null,
	      _react2.default.createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: body } }),
	      script,
	      _react2.default.createElement('script', { src: '/assets/bundle.js' })
	    )
	  );
	};

	exports.default = Layout;

/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports = require("react-component-data/recursive");

/***/ }
/******/ ]);