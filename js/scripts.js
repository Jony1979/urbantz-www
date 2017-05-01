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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	window.app = angular.module('urbantz', ['ngMaterial', 'firebase']);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);
	app.controller('HomeController', ["$scope", "$http", "$mdSidenav", function($scope, $http, $mdSidenav) {
	  console.log('Bootstrapping app...');
	  $scope.view = $scope.view || {};
	  $scope.view.submitDemoForm = function(answer) {
	    $scope.view.formSubmitted = true;
	    $http({
	      method: 'POST',
	      url: 'https://nexuxw7zte.execute-api.eu-west-1.amazonaws.com/production',
	      headers: {
	        'Content-Type': 'application/json',
	        'X-Api-Key': 'Jhpps7TDHj3O9ZQMz38Gx2cGQv06L51Z56fuOT1f'
	      },
	      data: answer
	    }).then(function() {}, function() {
	      alert('An unexpected error occured. Contact our support team at support@urbantz.com. Thank you.');
	      $scope.view.formSubmitted = false;
	    });
	  };
	  $scope.view.hello = 'World';
	  $scope.view.submitSupportForm = function(f) {
	    $http({
	      method: 'POST',
	      url: 'https://hosvq66q80.execute-api.eu-west-1.amazonaws.com/production',
	      headers: {
	        'Content-Type': 'application/json',
	        'X-Api-Key': 'Jhpps7TDHj3O9ZQMz38Gx2cGQv06L51Z56fuOT1f'
	      },
	      data: {"helpdesk_ticket": {
	          "description": (f.description || f.message) + ' (PHONE=' + f.phone + ')',
	          "subject": [f.firstName, f.lastName].filter((function(x) {
	            return x;
	          })).join(' ') + ': ' + (f.subject || 'Contact Request'),
	          "email": f.email,
	          "priority": 1,
	          "status": 2
	        }}
	    }).then(function(response) {
	      $scope.view.supportFormSubmitted = true;
	      $scope.supportTicket = response.data.helpdesk_ticket.display_id;
	    }, function() {
	      alert('An unexpected error occured. Contact our support team at support@urbantz.com. Thank you.');
	      $scope.view.supportFormSubmitted = false;
	    });
	  };
	  $scope.view.submitEmailForm = function(f) {
	    console.log(f);
	    $http({
	      method: 'POST',
	      url: 'https://a4vvb2px10.execute-api.eu-west-1.amazonaws.com/production',
	      headers: {
	        'Content-Type': 'application/json',
	        'X-Api-Key': 'Jhpps7TDHj3O9ZQMz38Gx2cGQv06L51Z56fuOT1f'
	      },
	      data: f
	    }).then(function(response) {
	      $scope.view.formSubmitted = true;
	    }, function() {
	      alert('An unexpected error occured. Contact our support team at support@urbantz.com. Thank you.');
	      $scope.view.formSubmitted = false;
	    });
	  };
	  $scope.$watch('view.language', function(lang, prev) {
	    if (lang != prev && prev) {
	      location.href = ("/" + lang + "/");
	    }
	  });
	  $scope.view.go = function(url) {
	    location.href = url;
	  };
	  $scope.view.openLeftMenu = function() {
	    $mdSidenav('left').toggle();
	  };
	  $scope.view.doDownload = function() {
	    $scope.view.updateClicked = true;
	    var a = document.createElement('a');
	    if ($scope.view.os === 'ios') {
	      if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
	        a.href = 'itms-services://?action=download-manifest&url=http://static.urbantz.com.s3-website-eu-west-1.amazonaws.com/app/eu-west-1.plist';
	      } else {
	        a.href = 'http://static.urbantz.com.s3-website-eu-west-1.amazonaws.com/app/urbantz-eu-west-1.ipa';
	      }
	      a.download = true;
	      console.log(a);
	    } else if ($scope.view.os === 'android') {
	      a.href = 'https://play.google.com/store/apps/details?id=com.urbantz';
	      a.target = '_blank';
	    }
	    a.click();
	  };
	}]);
	app.config(["$httpProvider", function($httpProvider) {
	  $httpProvider.defaults.useXDomain = true;
	}]);
	app.run(["$http", function($http) {
	  $http.defaults.useXDomain = true;
	}]);
	app.config(["$mdThemingProvider", function($mdThemingProvider) {
	  $mdThemingProvider.theme('default').primaryPalette('cyan').accentPalette('pink');
	}]);
	angular.element(document).ready(function() {
	  setTimeout((function() {
	    if (document.body.scrollTop === 0)
	      bringIntoView(document.querySelector('nav'), 200);
	  }), 1000);
	});
	app.directive('onVideoEnded', function() {
	  return function($scope, $element, $attrs) {
	    $element[0].addEventListener('ended', function(e) {
	      var x = $attrs.onVideoEnded.split('=');
	      var eq = x.shift();
	      console.log(eq, $scope.$eval(x.join('=')));
	      if (eq) {
	        $scope[eq] = $scope.$eval(x.join('='));
	      } else {
	        $scope.$eval($attrs.onVideoEnded);
	      }
	      $scope.$apply();
	    }, false);
	  };
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {(function(global) {
	  'use strict';
	  if (global.$traceurRuntime) {
	    return;
	  }
	  var $Object = Object;
	  var $TypeError = TypeError;
	  var $create = $Object.create;
	  var $defineProperties = $Object.defineProperties;
	  var $defineProperty = $Object.defineProperty;
	  var $freeze = $Object.freeze;
	  var $getOwnPropertyDescriptor = $Object.getOwnPropertyDescriptor;
	  var $getOwnPropertyNames = $Object.getOwnPropertyNames;
	  var $keys = $Object.keys;
	  var $hasOwnProperty = $Object.prototype.hasOwnProperty;
	  var $toString = $Object.prototype.toString;
	  var $preventExtensions = Object.preventExtensions;
	  var $seal = Object.seal;
	  var $isExtensible = Object.isExtensible;
	  function nonEnum(value) {
	    return {
	      configurable: true,
	      enumerable: false,
	      value: value,
	      writable: true
	    };
	  }
	  var types = {
	    void: function voidType() {},
	    any: function any() {},
	    string: function string() {},
	    number: function number() {},
	    boolean: function boolean() {}
	  };
	  var method = nonEnum;
	  var counter = 0;
	  function newUniqueString() {
	    return '__$' + Math.floor(Math.random() * 1e9) + '$' + ++counter + '$__';
	  }
	  var symbolInternalProperty = newUniqueString();
	  var symbolDescriptionProperty = newUniqueString();
	  var symbolDataProperty = newUniqueString();
	  var symbolValues = $create(null);
	  var privateNames = $create(null);
	  function createPrivateName() {
	    var s = newUniqueString();
	    privateNames[s] = true;
	    return s;
	  }
	  function isSymbol(symbol) {
	    return typeof symbol === 'object' && symbol instanceof SymbolValue;
	  }
	  function typeOf(v) {
	    if (isSymbol(v))
	      return 'symbol';
	    return typeof v;
	  }
	  function Symbol(description) {
	    var value = new SymbolValue(description);
	    if (!(this instanceof Symbol))
	      return value;
	    throw new TypeError('Symbol cannot be new\'ed');
	  }
	  $defineProperty(Symbol.prototype, 'constructor', nonEnum(Symbol));
	  $defineProperty(Symbol.prototype, 'toString', method(function() {
	    var symbolValue = this[symbolDataProperty];
	    if (!getOption('symbols'))
	      return symbolValue[symbolInternalProperty];
	    if (!symbolValue)
	      throw TypeError('Conversion from symbol to string');
	    var desc = symbolValue[symbolDescriptionProperty];
	    if (desc === undefined)
	      desc = '';
	    return 'Symbol(' + desc + ')';
	  }));
	  $defineProperty(Symbol.prototype, 'valueOf', method(function() {
	    var symbolValue = this[symbolDataProperty];
	    if (!symbolValue)
	      throw TypeError('Conversion from symbol to string');
	    if (!getOption('symbols'))
	      return symbolValue[symbolInternalProperty];
	    return symbolValue;
	  }));
	  function SymbolValue(description) {
	    var key = newUniqueString();
	    $defineProperty(this, symbolDataProperty, {value: this});
	    $defineProperty(this, symbolInternalProperty, {value: key});
	    $defineProperty(this, symbolDescriptionProperty, {value: description});
	    freeze(this);
	    symbolValues[key] = this;
	  }
	  $defineProperty(SymbolValue.prototype, 'constructor', nonEnum(Symbol));
	  $defineProperty(SymbolValue.prototype, 'toString', {
	    value: Symbol.prototype.toString,
	    enumerable: false
	  });
	  $defineProperty(SymbolValue.prototype, 'valueOf', {
	    value: Symbol.prototype.valueOf,
	    enumerable: false
	  });
	  var hashProperty = createPrivateName();
	  var hashPropertyDescriptor = {value: undefined};
	  var hashObjectProperties = {
	    hash: {value: undefined},
	    self: {value: undefined}
	  };
	  var hashCounter = 0;
	  function getOwnHashObject(object) {
	    var hashObject = object[hashProperty];
	    if (hashObject && hashObject.self === object)
	      return hashObject;
	    if ($isExtensible(object)) {
	      hashObjectProperties.hash.value = hashCounter++;
	      hashObjectProperties.self.value = object;
	      hashPropertyDescriptor.value = $create(null, hashObjectProperties);
	      $defineProperty(object, hashProperty, hashPropertyDescriptor);
	      return hashPropertyDescriptor.value;
	    }
	    return undefined;
	  }
	  function freeze(object) {
	    getOwnHashObject(object);
	    return $freeze.apply(this, arguments);
	  }
	  function preventExtensions(object) {
	    getOwnHashObject(object);
	    return $preventExtensions.apply(this, arguments);
	  }
	  function seal(object) {
	    getOwnHashObject(object);
	    return $seal.apply(this, arguments);
	  }
	  Symbol.iterator = Symbol();
	  freeze(SymbolValue.prototype);
	  function toProperty(name) {
	    if (isSymbol(name))
	      return name[symbolInternalProperty];
	    return name;
	  }
	  function getOwnPropertyNames(object) {
	    var rv = [];
	    var names = $getOwnPropertyNames(object);
	    for (var i = 0; i < names.length; i++) {
	      var name = names[i];
	      if (!symbolValues[name] && !privateNames[name])
	        rv.push(name);
	    }
	    return rv;
	  }
	  function getOwnPropertyDescriptor(object, name) {
	    return $getOwnPropertyDescriptor(object, toProperty(name));
	  }
	  function getOwnPropertySymbols(object) {
	    var rv = [];
	    var names = $getOwnPropertyNames(object);
	    for (var i = 0; i < names.length; i++) {
	      var symbol = symbolValues[names[i]];
	      if (symbol)
	        rv.push(symbol);
	    }
	    return rv;
	  }
	  function hasOwnProperty(name) {
	    return $hasOwnProperty.call(this, toProperty(name));
	  }
	  function getOption(name) {
	    return global.traceur && global.traceur.options[name];
	  }
	  function setProperty(object, name, value) {
	    var sym,
	        desc;
	    if (isSymbol(name)) {
	      sym = name;
	      name = name[symbolInternalProperty];
	    }
	    object[name] = value;
	    if (sym && (desc = $getOwnPropertyDescriptor(object, name)))
	      $defineProperty(object, name, {enumerable: false});
	    return value;
	  }
	  function defineProperty(object, name, descriptor) {
	    if (isSymbol(name)) {
	      if (descriptor.enumerable) {
	        descriptor = $create(descriptor, {enumerable: {value: false}});
	      }
	      name = name[symbolInternalProperty];
	    }
	    $defineProperty(object, name, descriptor);
	    return object;
	  }
	  function polyfillObject(Object) {
	    $defineProperty(Object, 'defineProperty', {value: defineProperty});
	    $defineProperty(Object, 'getOwnPropertyNames', {value: getOwnPropertyNames});
	    $defineProperty(Object, 'getOwnPropertyDescriptor', {value: getOwnPropertyDescriptor});
	    $defineProperty(Object.prototype, 'hasOwnProperty', {value: hasOwnProperty});
	    $defineProperty(Object, 'freeze', {value: freeze});
	    $defineProperty(Object, 'preventExtensions', {value: preventExtensions});
	    $defineProperty(Object, 'seal', {value: seal});
	    Object.getOwnPropertySymbols = getOwnPropertySymbols;
	  }
	  function exportStar(object) {
	    for (var i = 1; i < arguments.length; i++) {
	      var names = $getOwnPropertyNames(arguments[i]);
	      for (var j = 0; j < names.length; j++) {
	        var name = names[j];
	        if (privateNames[name])
	          continue;
	        (function(mod, name) {
	          $defineProperty(object, name, {
	            get: function() {
	              return mod[name];
	            },
	            enumerable: true
	          });
	        })(arguments[i], names[j]);
	      }
	    }
	    return object;
	  }
	  function isObject(x) {
	    return x != null && (typeof x === 'object' || typeof x === 'function');
	  }
	  function toObject(x) {
	    if (x == null)
	      throw $TypeError();
	    return $Object(x);
	  }
	  function checkObjectCoercible(argument) {
	    if (argument == null) {
	      throw new TypeError('Value cannot be converted to an Object');
	    }
	    return argument;
	  }
	  function setupGlobals(global) {
	    global.Symbol = Symbol;
	    global.Reflect = global.Reflect || {};
	    global.Reflect.global = global.Reflect.global || global;
	    polyfillObject(global.Object);
	  }
	  setupGlobals(global);
	  global.$traceurRuntime = {
	    createPrivateName: createPrivateName,
	    exportStar: exportStar,
	    getOwnHashObject: getOwnHashObject,
	    privateNames: privateNames,
	    setProperty: setProperty,
	    setupGlobals: setupGlobals,
	    toObject: toObject,
	    isObject: isObject,
	    toProperty: toProperty,
	    type: types,
	    typeof: typeOf,
	    checkObjectCoercible: checkObjectCoercible,
	    hasOwnProperty: function(o, p) {
	      return hasOwnProperty.call(o, p);
	    },
	    defineProperties: $defineProperties,
	    defineProperty: $defineProperty,
	    getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	    getOwnPropertyNames: $getOwnPropertyNames,
	    keys: $keys
	  };
	})(typeof global !== 'undefined' ? global : this);
	(function() {
	  'use strict';
	  function spread() {
	    var rv = [],
	        j = 0,
	        iterResult;
	    for (var i = 0; i < arguments.length; i++) {
	      var valueToSpread = $traceurRuntime.checkObjectCoercible(arguments[i]);
	      if (typeof valueToSpread[$traceurRuntime.toProperty(Symbol.iterator)] !== 'function') {
	        throw new TypeError('Cannot spread non-iterable object.');
	      }
	      var iter = valueToSpread[$traceurRuntime.toProperty(Symbol.iterator)]();
	      while (!(iterResult = iter.next()).done) {
	        rv[j++] = iterResult.value;
	      }
	    }
	    return rv;
	  }
	  $traceurRuntime.spread = spread;
	})();
	(function() {
	  'use strict';
	  var $Object = Object;
	  var $TypeError = TypeError;
	  var $create = $Object.create;
	  var $defineProperties = $traceurRuntime.defineProperties;
	  var $defineProperty = $traceurRuntime.defineProperty;
	  var $getOwnPropertyDescriptor = $traceurRuntime.getOwnPropertyDescriptor;
	  var $getOwnPropertyNames = $traceurRuntime.getOwnPropertyNames;
	  var $getPrototypeOf = Object.getPrototypeOf;
	  function superDescriptor(homeObject, name) {
	    var proto = $getPrototypeOf(homeObject);
	    do {
	      var result = $getOwnPropertyDescriptor(proto, name);
	      if (result)
	        return result;
	      proto = $getPrototypeOf(proto);
	    } while (proto);
	    return undefined;
	  }
	  function superCall(self, homeObject, name, args) {
	    return superGet(self, homeObject, name).apply(self, args);
	  }
	  function superGet(self, homeObject, name) {
	    var descriptor = superDescriptor(homeObject, name);
	    if (descriptor) {
	      if (!descriptor.get)
	        return descriptor.value;
	      return descriptor.get.call(self);
	    }
	    return undefined;
	  }
	  function superSet(self, homeObject, name, value) {
	    var descriptor = superDescriptor(homeObject, name);
	    if (descriptor && descriptor.set) {
	      descriptor.set.call(self, value);
	      return value;
	    }
	    throw $TypeError("super has no setter '" + name + "'.");
	  }
	  function getDescriptors(object) {
	    var descriptors = {},
	        name,
	        names = $getOwnPropertyNames(object);
	    for (var i = 0; i < names.length; i++) {
	      var name = names[i];
	      descriptors[name] = $getOwnPropertyDescriptor(object, name);
	    }
	    return descriptors;
	  }
	  function createClass(ctor, object, staticObject, superClass) {
	    $defineProperty(object, 'constructor', {
	      value: ctor,
	      configurable: true,
	      enumerable: false,
	      writable: true
	    });
	    if (arguments.length > 3) {
	      if (typeof superClass === 'function')
	        ctor.__proto__ = superClass;
	      ctor.prototype = $create(getProtoParent(superClass), getDescriptors(object));
	    } else {
	      ctor.prototype = object;
	    }
	    $defineProperty(ctor, 'prototype', {
	      configurable: false,
	      writable: false
	    });
	    return $defineProperties(ctor, getDescriptors(staticObject));
	  }
	  function getProtoParent(superClass) {
	    if (typeof superClass === 'function') {
	      var prototype = superClass.prototype;
	      if ($Object(prototype) === prototype || prototype === null)
	        return superClass.prototype;
	      throw new $TypeError('super prototype must be an Object or null');
	    }
	    if (superClass === null)
	      return null;
	    throw new $TypeError(("Super expression must either be null or a function, not " + typeof superClass + "."));
	  }
	  function defaultSuperCall(self, homeObject, args) {
	    if ($getPrototypeOf(homeObject) !== null)
	      superCall(self, homeObject, 'constructor', args);
	  }
	  $traceurRuntime.createClass = createClass;
	  $traceurRuntime.defaultSuperCall = defaultSuperCall;
	  $traceurRuntime.superCall = superCall;
	  $traceurRuntime.superGet = superGet;
	  $traceurRuntime.superSet = superSet;
	})();
	(function() {
	  'use strict';
	  var createPrivateName = $traceurRuntime.createPrivateName;
	  var $defineProperties = $traceurRuntime.defineProperties;
	  var $defineProperty = $traceurRuntime.defineProperty;
	  var $create = Object.create;
	  var $TypeError = TypeError;
	  function nonEnum(value) {
	    return {
	      configurable: true,
	      enumerable: false,
	      value: value,
	      writable: true
	    };
	  }
	  var ST_NEWBORN = 0;
	  var ST_EXECUTING = 1;
	  var ST_SUSPENDED = 2;
	  var ST_CLOSED = 3;
	  var END_STATE = -2;
	  var RETHROW_STATE = -3;
	  function getInternalError(state) {
	    return new Error('Traceur compiler bug: invalid state in state machine: ' + state);
	  }
	  function GeneratorContext() {
	    this.state = 0;
	    this.GState = ST_NEWBORN;
	    this.storedException = undefined;
	    this.finallyFallThrough = undefined;
	    this.sent_ = undefined;
	    this.returnValue = undefined;
	    this.tryStack_ = [];
	  }
	  GeneratorContext.prototype = {
	    pushTry: function(catchState, finallyState) {
	      if (finallyState !== null) {
	        var finallyFallThrough = null;
	        for (var i = this.tryStack_.length - 1; i >= 0; i--) {
	          if (this.tryStack_[i].catch !== undefined) {
	            finallyFallThrough = this.tryStack_[i].catch;
	            break;
	          }
	        }
	        if (finallyFallThrough === null)
	          finallyFallThrough = RETHROW_STATE;
	        this.tryStack_.push({
	          finally: finallyState,
	          finallyFallThrough: finallyFallThrough
	        });
	      }
	      if (catchState !== null) {
	        this.tryStack_.push({catch: catchState});
	      }
	    },
	    popTry: function() {
	      this.tryStack_.pop();
	    },
	    get sent() {
	      this.maybeThrow();
	      return this.sent_;
	    },
	    set sent(v) {
	      this.sent_ = v;
	    },
	    get sentIgnoreThrow() {
	      return this.sent_;
	    },
	    maybeThrow: function() {
	      if (this.action === 'throw') {
	        this.action = 'next';
	        throw this.sent_;
	      }
	    },
	    end: function() {
	      switch (this.state) {
	        case END_STATE:
	          return this;
	        case RETHROW_STATE:
	          throw this.storedException;
	        default:
	          throw getInternalError(this.state);
	      }
	    },
	    handleException: function(ex) {
	      this.GState = ST_CLOSED;
	      this.state = END_STATE;
	      throw ex;
	    }
	  };
	  function nextOrThrow(ctx, moveNext, action, x) {
	    switch (ctx.GState) {
	      case ST_EXECUTING:
	        throw new Error(("\"" + action + "\" on executing generator"));
	      case ST_CLOSED:
	        if (action == 'next') {
	          return {
	            value: undefined,
	            done: true
	          };
	        }
	        throw x;
	      case ST_NEWBORN:
	        if (action === 'throw') {
	          ctx.GState = ST_CLOSED;
	          throw x;
	        }
	        if (x !== undefined)
	          throw $TypeError('Sent value to newborn generator');
	      case ST_SUSPENDED:
	        ctx.GState = ST_EXECUTING;
	        ctx.action = action;
	        ctx.sent = x;
	        var value = moveNext(ctx);
	        var done = value === ctx;
	        if (done)
	          value = ctx.returnValue;
	        ctx.GState = done ? ST_CLOSED : ST_SUSPENDED;
	        return {
	          value: value,
	          done: done
	        };
	    }
	  }
	  var ctxName = createPrivateName();
	  var moveNextName = createPrivateName();
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	  GeneratorFunction.prototype = GeneratorFunctionPrototype;
	  $defineProperty(GeneratorFunctionPrototype, 'constructor', nonEnum(GeneratorFunction));
	  GeneratorFunctionPrototype.prototype = {
	    constructor: GeneratorFunctionPrototype,
	    next: function(v) {
	      return nextOrThrow(this[ctxName], this[moveNextName], 'next', v);
	    },
	    throw: function(v) {
	      return nextOrThrow(this[ctxName], this[moveNextName], 'throw', v);
	    }
	  };
	  $defineProperties(GeneratorFunctionPrototype.prototype, {
	    constructor: {enumerable: false},
	    next: {enumerable: false},
	    throw: {enumerable: false}
	  });
	  Object.defineProperty(GeneratorFunctionPrototype.prototype, Symbol.iterator, nonEnum(function() {
	    return this;
	  }));
	  function createGeneratorInstance(innerFunction, functionObject, self) {
	    var moveNext = getMoveNext(innerFunction, self);
	    var ctx = new GeneratorContext();
	    var object = $create(functionObject.prototype);
	    object[ctxName] = ctx;
	    object[moveNextName] = moveNext;
	    return object;
	  }
	  function initGeneratorFunction(functionObject) {
	    functionObject.prototype = $create(GeneratorFunctionPrototype.prototype);
	    functionObject.__proto__ = GeneratorFunctionPrototype;
	    return functionObject;
	  }
	  function AsyncFunctionContext() {
	    GeneratorContext.call(this);
	    this.err = undefined;
	    var ctx = this;
	    ctx.result = new Promise(function(resolve, reject) {
	      ctx.resolve = resolve;
	      ctx.reject = reject;
	    });
	  }
	  AsyncFunctionContext.prototype = $create(GeneratorContext.prototype);
	  AsyncFunctionContext.prototype.end = function() {
	    switch (this.state) {
	      case END_STATE:
	        this.resolve(this.returnValue);
	        break;
	      case RETHROW_STATE:
	        this.reject(this.storedException);
	        break;
	      default:
	        this.reject(getInternalError(this.state));
	    }
	  };
	  AsyncFunctionContext.prototype.handleException = function() {
	    this.state = RETHROW_STATE;
	  };
	  function asyncWrap(innerFunction, self) {
	    var moveNext = getMoveNext(innerFunction, self);
	    var ctx = new AsyncFunctionContext();
	    ctx.createCallback = function(newState) {
	      return function(value) {
	        ctx.state = newState;
	        ctx.value = value;
	        moveNext(ctx);
	      };
	    };
	    ctx.errback = function(err) {
	      handleCatch(ctx, err);
	      moveNext(ctx);
	    };
	    moveNext(ctx);
	    return ctx.result;
	  }
	  function getMoveNext(innerFunction, self) {
	    return function(ctx) {
	      while (true) {
	        try {
	          return innerFunction.call(self, ctx);
	        } catch (ex) {
	          handleCatch(ctx, ex);
	        }
	      }
	    };
	  }
	  function handleCatch(ctx, ex) {
	    ctx.storedException = ex;
	    var last = ctx.tryStack_[ctx.tryStack_.length - 1];
	    if (!last) {
	      ctx.handleException(ex);
	      return;
	    }
	    ctx.state = last.catch !== undefined ? last.catch : last.finally;
	    if (last.finallyFallThrough !== undefined)
	      ctx.finallyFallThrough = last.finallyFallThrough;
	  }
	  $traceurRuntime.asyncWrap = asyncWrap;
	  $traceurRuntime.initGeneratorFunction = initGeneratorFunction;
	  $traceurRuntime.createGeneratorInstance = createGeneratorInstance;
	})();
	(function() {
	  function buildFromEncodedParts(opt_scheme, opt_userInfo, opt_domain, opt_port, opt_path, opt_queryData, opt_fragment) {
	    var out = [];
	    if (opt_scheme) {
	      out.push(opt_scheme, ':');
	    }
	    if (opt_domain) {
	      out.push('//');
	      if (opt_userInfo) {
	        out.push(opt_userInfo, '@');
	      }
	      out.push(opt_domain);
	      if (opt_port) {
	        out.push(':', opt_port);
	      }
	    }
	    if (opt_path) {
	      out.push(opt_path);
	    }
	    if (opt_queryData) {
	      out.push('?', opt_queryData);
	    }
	    if (opt_fragment) {
	      out.push('#', opt_fragment);
	    }
	    return out.join('');
	  }
	  ;
	  var splitRe = new RegExp('^' + '(?:' + '([^:/?#.]+)' + ':)?' + '(?://' + '(?:([^/?#]*)@)?' + '([\\w\\d\\-\\u0100-\\uffff.%]*)' + '(?::([0-9]+))?' + ')?' + '([^?#]+)?' + '(?:\\?([^#]*))?' + '(?:#(.*))?' + '$');
	  var ComponentIndex = {
	    SCHEME: 1,
	    USER_INFO: 2,
	    DOMAIN: 3,
	    PORT: 4,
	    PATH: 5,
	    QUERY_DATA: 6,
	    FRAGMENT: 7
	  };
	  function split(uri) {
	    return (uri.match(splitRe));
	  }
	  function removeDotSegments(path) {
	    if (path === '/')
	      return '/';
	    var leadingSlash = path[0] === '/' ? '/' : '';
	    var trailingSlash = path.slice(-1) === '/' ? '/' : '';
	    var segments = path.split('/');
	    var out = [];
	    var up = 0;
	    for (var pos = 0; pos < segments.length; pos++) {
	      var segment = segments[pos];
	      switch (segment) {
	        case '':
	        case '.':
	          break;
	        case '..':
	          if (out.length)
	            out.pop();
	          else
	            up++;
	          break;
	        default:
	          out.push(segment);
	      }
	    }
	    if (!leadingSlash) {
	      while (up-- > 0) {
	        out.unshift('..');
	      }
	      if (out.length === 0)
	        out.push('.');
	    }
	    return leadingSlash + out.join('/') + trailingSlash;
	  }
	  function joinAndCanonicalizePath(parts) {
	    var path = parts[ComponentIndex.PATH] || '';
	    path = removeDotSegments(path);
	    parts[ComponentIndex.PATH] = path;
	    return buildFromEncodedParts(parts[ComponentIndex.SCHEME], parts[ComponentIndex.USER_INFO], parts[ComponentIndex.DOMAIN], parts[ComponentIndex.PORT], parts[ComponentIndex.PATH], parts[ComponentIndex.QUERY_DATA], parts[ComponentIndex.FRAGMENT]);
	  }
	  function canonicalizeUrl(url) {
	    var parts = split(url);
	    return joinAndCanonicalizePath(parts);
	  }
	  function resolveUrl(base, url) {
	    var parts = split(url);
	    var baseParts = split(base);
	    if (parts[ComponentIndex.SCHEME]) {
	      return joinAndCanonicalizePath(parts);
	    } else {
	      parts[ComponentIndex.SCHEME] = baseParts[ComponentIndex.SCHEME];
	    }
	    for (var i = ComponentIndex.SCHEME; i <= ComponentIndex.PORT; i++) {
	      if (!parts[i]) {
	        parts[i] = baseParts[i];
	      }
	    }
	    if (parts[ComponentIndex.PATH][0] == '/') {
	      return joinAndCanonicalizePath(parts);
	    }
	    var path = baseParts[ComponentIndex.PATH];
	    var index = path.lastIndexOf('/');
	    path = path.slice(0, index + 1) + parts[ComponentIndex.PATH];
	    parts[ComponentIndex.PATH] = path;
	    return joinAndCanonicalizePath(parts);
	  }
	  function isAbsolute(name) {
	    if (!name)
	      return false;
	    if (name[0] === '/')
	      return true;
	    var parts = split(name);
	    if (parts[ComponentIndex.SCHEME])
	      return true;
	    return false;
	  }
	  $traceurRuntime.canonicalizeUrl = canonicalizeUrl;
	  $traceurRuntime.isAbsolute = isAbsolute;
	  $traceurRuntime.removeDotSegments = removeDotSegments;
	  $traceurRuntime.resolveUrl = resolveUrl;
	})();
	(function(global) {
	  'use strict';
	  var $__2 = $traceurRuntime,
	      canonicalizeUrl = $__2.canonicalizeUrl,
	      resolveUrl = $__2.resolveUrl,
	      isAbsolute = $__2.isAbsolute;
	  var moduleInstantiators = Object.create(null);
	  var baseURL;
	  if (global.location && global.location.href)
	    baseURL = resolveUrl(global.location.href, './');
	  else
	    baseURL = '';
	  var UncoatedModuleEntry = function UncoatedModuleEntry(url, uncoatedModule) {
	    this.url = url;
	    this.value_ = uncoatedModule;
	  };
	  ($traceurRuntime.createClass)(UncoatedModuleEntry, {}, {});
	  var ModuleEvaluationError = function ModuleEvaluationError(erroneousModuleName, cause) {
	    this.message = this.constructor.name + (cause ? ': \'' + cause + '\'' : '') + ' in ' + erroneousModuleName;
	  };
	  ($traceurRuntime.createClass)(ModuleEvaluationError, {loadedBy: function(moduleName) {
	      this.message += '\n loaded by ' + moduleName;
	    }}, {}, Error);
	  var UncoatedModuleInstantiator = function UncoatedModuleInstantiator(url, func) {
	    $traceurRuntime.superCall(this, $UncoatedModuleInstantiator.prototype, "constructor", [url, null]);
	    this.func = func;
	  };
	  var $UncoatedModuleInstantiator = UncoatedModuleInstantiator;
	  ($traceurRuntime.createClass)(UncoatedModuleInstantiator, {getUncoatedModule: function() {
	      if (this.value_)
	        return this.value_;
	      try {
	        return this.value_ = this.func.call(global);
	      } catch (ex) {
	        if (ex instanceof ModuleEvaluationError) {
	          ex.loadedBy(this.url);
	          throw ex;
	        }
	        throw new ModuleEvaluationError(this.url, ex);
	      }
	    }}, {}, UncoatedModuleEntry);
	  function getUncoatedModuleInstantiator(name) {
	    if (!name)
	      return;
	    var url = ModuleStore.normalize(name);
	    return moduleInstantiators[url];
	  }
	  ;
	  var moduleInstances = Object.create(null);
	  var liveModuleSentinel = {};
	  function Module(uncoatedModule) {
	    var isLive = arguments[1];
	    var coatedModule = Object.create(null);
	    Object.getOwnPropertyNames(uncoatedModule).forEach((function(name) {
	      var getter,
	          value;
	      if (isLive === liveModuleSentinel) {
	        var descr = Object.getOwnPropertyDescriptor(uncoatedModule, name);
	        if (descr.get)
	          getter = descr.get;
	      }
	      if (!getter) {
	        value = uncoatedModule[name];
	        getter = function() {
	          return value;
	        };
	      }
	      Object.defineProperty(coatedModule, name, {
	        get: getter,
	        enumerable: true
	      });
	    }));
	    Object.preventExtensions(coatedModule);
	    return coatedModule;
	  }
	  var ModuleStore = {
	    normalize: function(name, refererName, refererAddress) {
	      if (typeof name !== "string")
	        throw new TypeError("module name must be a string, not " + typeof name);
	      if (isAbsolute(name))
	        return canonicalizeUrl(name);
	      if (/[^\.]\/\.\.\//.test(name)) {
	        throw new Error('module name embeds /../: ' + name);
	      }
	      if (name[0] === '.' && refererName)
	        return resolveUrl(refererName, name);
	      return canonicalizeUrl(name);
	    },
	    get: function(normalizedName) {
	      var m = getUncoatedModuleInstantiator(normalizedName);
	      if (!m)
	        return undefined;
	      var moduleInstance = moduleInstances[m.url];
	      if (moduleInstance)
	        return moduleInstance;
	      moduleInstance = Module(m.getUncoatedModule(), liveModuleSentinel);
	      return moduleInstances[m.url] = moduleInstance;
	    },
	    set: function(normalizedName, module) {
	      normalizedName = String(normalizedName);
	      moduleInstantiators[normalizedName] = new UncoatedModuleInstantiator(normalizedName, (function() {
	        return module;
	      }));
	      moduleInstances[normalizedName] = module;
	    },
	    get baseURL() {
	      return baseURL;
	    },
	    set baseURL(v) {
	      baseURL = String(v);
	    },
	    registerModule: function(name, func) {
	      var normalizedName = ModuleStore.normalize(name);
	      if (moduleInstantiators[normalizedName])
	        throw new Error('duplicate module named ' + normalizedName);
	      moduleInstantiators[normalizedName] = new UncoatedModuleInstantiator(normalizedName, func);
	    },
	    bundleStore: Object.create(null),
	    register: function(name, deps, func) {
	      if (!deps || !deps.length && !func.length) {
	        this.registerModule(name, func);
	      } else {
	        this.bundleStore[name] = {
	          deps: deps,
	          execute: function() {
	            var $__0 = arguments;
	            var depMap = {};
	            deps.forEach((function(dep, index) {
	              return depMap[dep] = $__0[index];
	            }));
	            var registryEntry = func.call(this, depMap);
	            registryEntry.execute.call(this);
	            return registryEntry.exports;
	          }
	        };
	      }
	    },
	    getAnonymousModule: function(func) {
	      return new Module(func.call(global), liveModuleSentinel);
	    },
	    getForTesting: function(name) {
	      var $__0 = this;
	      if (!this.testingPrefix_) {
	        Object.keys(moduleInstances).some((function(key) {
	          var m = /(traceur@[^\/]*\/)/.exec(key);
	          if (m) {
	            $__0.testingPrefix_ = m[1];
	            return true;
	          }
	        }));
	      }
	      return this.get(this.testingPrefix_ + name);
	    }
	  };
	  ModuleStore.set('@traceur/src/runtime/ModuleStore', new Module({ModuleStore: ModuleStore}));
	  var setupGlobals = $traceurRuntime.setupGlobals;
	  $traceurRuntime.setupGlobals = function(global) {
	    setupGlobals(global);
	  };
	  $traceurRuntime.ModuleStore = ModuleStore;
	  global.System = {
	    register: ModuleStore.register.bind(ModuleStore),
	    get: ModuleStore.get,
	    set: ModuleStore.set,
	    normalize: ModuleStore.normalize
	  };
	  $traceurRuntime.getModuleImpl = function(name) {
	    var instantiator = getUncoatedModuleInstantiator(name);
	    return instantiator && instantiator.getUncoatedModule();
	  };
	})(typeof global !== 'undefined' ? global : this);
	System.register("traceur-runtime@0.0.58/src/runtime/polyfills/utils", [], function() {
	  "use strict";
	  var __moduleName = "traceur-runtime@0.0.58/src/runtime/polyfills/utils";
	  var $ceil = Math.ceil;
	  var $floor = Math.floor;
	  var $isFinite = isFinite;
	  var $isNaN = isNaN;
	  var $pow = Math.pow;
	  var $min = Math.min;
	  var toObject = $traceurRuntime.toObject;
	  function toUint32(x) {
	    return x >>> 0;
	  }
	  function isObject(x) {
	    return x && (typeof x === 'object' || typeof x === 'function');
	  }
	  function isCallable(x) {
	    return typeof x === 'function';
	  }
	  function isNumber(x) {
	    return typeof x === 'number';
	  }
	  function toInteger(x) {
	    x = +x;
	    if ($isNaN(x))
	      return 0;
	    if (x === 0 || !$isFinite(x))
	      return x;
	    return x > 0 ? $floor(x) : $ceil(x);
	  }
	  var MAX_SAFE_LENGTH = $pow(2, 53) - 1;
	  function toLength(x) {
	    var len = toInteger(x);
	    return len < 0 ? 0 : $min(len, MAX_SAFE_LENGTH);
	  }
	  function checkIterable(x) {
	    return !isObject(x) ? undefined : x[Symbol.iterator];
	  }
	  function isConstructor(x) {
	    return isCallable(x);
	  }
	  function createIteratorResultObject(value, done) {
	    return {
	      value: value,
	      done: done
	    };
	  }
	  function maybeDefine(object, name, descr) {
	    if (!(name in object)) {
	      Object.defineProperty(object, name, descr);
	    }
	  }
	  function maybeDefineMethod(object, name, value) {
	    maybeDefine(object, name, {
	      value: value,
	      configurable: true,
	      enumerable: false,
	      writable: true
	    });
	  }
	  function maybeDefineConst(object, name, value) {
	    maybeDefine(object, name, {
	      value: value,
	      configurable: false,
	      enumerable: false,
	      writable: false
	    });
	  }
	  function maybeAddFunctions(object, functions) {
	    for (var i = 0; i < functions.length; i += 2) {
	      var name = functions[i];
	      var value = functions[i + 1];
	      maybeDefineMethod(object, name, value);
	    }
	  }
	  function maybeAddConsts(object, consts) {
	    for (var i = 0; i < consts.length; i += 2) {
	      var name = consts[i];
	      var value = consts[i + 1];
	      maybeDefineConst(object, name, value);
	    }
	  }
	  function maybeAddIterator(object, func, Symbol) {
	    if (!Symbol || !Symbol.iterator || object[Symbol.iterator])
	      return;
	    if (object['@@iterator'])
	      func = object['@@iterator'];
	    Object.defineProperty(object, Symbol.iterator, {
	      value: func,
	      configurable: true,
	      enumerable: false,
	      writable: true
	    });
	  }
	  var polyfills = [];
	  function registerPolyfill(func) {
	    polyfills.push(func);
	  }
	  function polyfillAll(global) {
	    polyfills.forEach((function(f) {
	      return f(global);
	    }));
	  }
	  return {
	    get toObject() {
	      return toObject;
	    },
	    get toUint32() {
	      return toUint32;
	    },
	    get isObject() {
	      return isObject;
	    },
	    get isCallable() {
	      return isCallable;
	    },
	    get isNumber() {
	      return isNumber;
	    },
	    get toInteger() {
	      return toInteger;
	    },
	    get toLength() {
	      return toLength;
	    },
	    get checkIterable() {
	      return checkIterable;
	    },
	    get isConstructor() {
	      return isConstructor;
	    },
	    get createIteratorResultObject() {
	      return createIteratorResultObject;
	    },
	    get maybeDefine() {
	      return maybeDefine;
	    },
	    get maybeDefineMethod() {
	      return maybeDefineMethod;
	    },
	    get maybeDefineConst() {
	      return maybeDefineConst;
	    },
	    get maybeAddFunctions() {
	      return maybeAddFunctions;
	    },
	    get maybeAddConsts() {
	      return maybeAddConsts;
	    },
	    get maybeAddIterator() {
	      return maybeAddIterator;
	    },
	    get registerPolyfill() {
	      return registerPolyfill;
	    },
	    get polyfillAll() {
	      return polyfillAll;
	    }
	  };
	});
	System.register("traceur-runtime@0.0.58/src/runtime/polyfills/Map", [], function() {
	  "use strict";
	  var __moduleName = "traceur-runtime@0.0.58/src/runtime/polyfills/Map";
	  var $__3 = System.get("traceur-runtime@0.0.58/src/runtime/polyfills/utils"),
	      isObject = $__3.isObject,
	      maybeAddIterator = $__3.maybeAddIterator,
	      registerPolyfill = $__3.registerPolyfill;
	  var getOwnHashObject = $traceurRuntime.getOwnHashObject;
	  var $hasOwnProperty = Object.prototype.hasOwnProperty;
	  var deletedSentinel = {};
	  function lookupIndex(map, key) {
	    if (isObject(key)) {
	      var hashObject = getOwnHashObject(key);
	      return hashObject && map.objectIndex_[hashObject.hash];
	    }
	    if (typeof key === 'string')
	      return map.stringIndex_[key];
	    return map.primitiveIndex_[key];
	  }
	  function initMap(map) {
	    map.entries_ = [];
	    map.objectIndex_ = Object.create(null);
	    map.stringIndex_ = Object.create(null);
	    map.primitiveIndex_ = Object.create(null);
	    map.deletedCount_ = 0;
	  }
	  var Map = function Map() {
	    var iterable = arguments[0];
	    if (!isObject(this))
	      throw new TypeError('Map called on incompatible type');
	    if ($hasOwnProperty.call(this, 'entries_')) {
	      throw new TypeError('Map can not be reentrantly initialised');
	    }
	    initMap(this);
	    if (iterable !== null && iterable !== undefined) {
	      for (var $__5 = iterable[Symbol.iterator](),
	          $__6; !($__6 = $__5.next()).done; ) {
	        var $__7 = $__6.value,
	            key = $__7[0],
	            value = $__7[1];
	        {
	          this.set(key, value);
	        }
	      }
	    }
	  };
	  ($traceurRuntime.createClass)(Map, {
	    get size() {
	      return this.entries_.length / 2 - this.deletedCount_;
	    },
	    get: function(key) {
	      var index = lookupIndex(this, key);
	      if (index !== undefined)
	        return this.entries_[index + 1];
	    },
	    set: function(key, value) {
	      var objectMode = isObject(key);
	      var stringMode = typeof key === 'string';
	      var index = lookupIndex(this, key);
	      if (index !== undefined) {
	        this.entries_[index + 1] = value;
	      } else {
	        index = this.entries_.length;
	        this.entries_[index] = key;
	        this.entries_[index + 1] = value;
	        if (objectMode) {
	          var hashObject = getOwnHashObject(key);
	          var hash = hashObject.hash;
	          this.objectIndex_[hash] = index;
	        } else if (stringMode) {
	          this.stringIndex_[key] = index;
	        } else {
	          this.primitiveIndex_[key] = index;
	        }
	      }
	      return this;
	    },
	    has: function(key) {
	      return lookupIndex(this, key) !== undefined;
	    },
	    delete: function(key) {
	      var objectMode = isObject(key);
	      var stringMode = typeof key === 'string';
	      var index;
	      var hash;
	      if (objectMode) {
	        var hashObject = getOwnHashObject(key);
	        if (hashObject) {
	          index = this.objectIndex_[hash = hashObject.hash];
	          delete this.objectIndex_[hash];
	        }
	      } else if (stringMode) {
	        index = this.stringIndex_[key];
	        delete this.stringIndex_[key];
	      } else {
	        index = this.primitiveIndex_[key];
	        delete this.primitiveIndex_[key];
	      }
	      if (index !== undefined) {
	        this.entries_[index] = deletedSentinel;
	        this.entries_[index + 1] = undefined;
	        this.deletedCount_++;
	      }
	    },
	    clear: function() {
	      initMap(this);
	    },
	    forEach: function(callbackFn) {
	      var thisArg = arguments[1];
	      for (var i = 0,
	          len = this.entries_.length; i < len; i += 2) {
	        var key = this.entries_[i];
	        var value = this.entries_[i + 1];
	        if (key === deletedSentinel)
	          continue;
	        callbackFn.call(thisArg, value, key, this);
	      }
	    },
	    entries: $traceurRuntime.initGeneratorFunction(function $__8() {
	      var i,
	          len,
	          key,
	          value;
	      return $traceurRuntime.createGeneratorInstance(function($ctx) {
	        while (true)
	          switch ($ctx.state) {
	            case 0:
	              i = 0, len = this.entries_.length;
	              $ctx.state = 12;
	              break;
	            case 12:
	              $ctx.state = (i < len) ? 8 : -2;
	              break;
	            case 4:
	              i += 2;
	              $ctx.state = 12;
	              break;
	            case 8:
	              key = this.entries_[i];
	              value = this.entries_[i + 1];
	              $ctx.state = 9;
	              break;
	            case 9:
	              $ctx.state = (key === deletedSentinel) ? 4 : 6;
	              break;
	            case 6:
	              $ctx.state = 2;
	              return [key, value];
	            case 2:
	              $ctx.maybeThrow();
	              $ctx.state = 4;
	              break;
	            default:
	              return $ctx.end();
	          }
	      }, $__8, this);
	    }),
	    keys: $traceurRuntime.initGeneratorFunction(function $__9() {
	      var i,
	          len,
	          key,
	          value;
	      return $traceurRuntime.createGeneratorInstance(function($ctx) {
	        while (true)
	          switch ($ctx.state) {
	            case 0:
	              i = 0, len = this.entries_.length;
	              $ctx.state = 12;
	              break;
	            case 12:
	              $ctx.state = (i < len) ? 8 : -2;
	              break;
	            case 4:
	              i += 2;
	              $ctx.state = 12;
	              break;
	            case 8:
	              key = this.entries_[i];
	              value = this.entries_[i + 1];
	              $ctx.state = 9;
	              break;
	            case 9:
	              $ctx.state = (key === deletedSentinel) ? 4 : 6;
	              break;
	            case 6:
	              $ctx.state = 2;
	              return key;
	            case 2:
	              $ctx.maybeThrow();
	              $ctx.state = 4;
	              break;
	            default:
	              return $ctx.end();
	          }
	      }, $__9, this);
	    }),
	    values: $traceurRuntime.initGeneratorFunction(function $__10() {
	      var i,
	          len,
	          key,
	          value;
	      return $traceurRuntime.createGeneratorInstance(function($ctx) {
	        while (true)
	          switch ($ctx.state) {
	            case 0:
	              i = 0, len = this.entries_.length;
	              $ctx.state = 12;
	              break;
	            case 12:
	              $ctx.state = (i < len) ? 8 : -2;
	              break;
	            case 4:
	              i += 2;
	              $ctx.state = 12;
	              break;
	            case 8:
	              key = this.entries_[i];
	              value = this.entries_[i + 1];
	              $ctx.state = 9;
	              break;
	            case 9:
	              $ctx.state = (key === deletedSentinel) ? 4 : 6;
	              break;
	            case 6:
	              $ctx.state = 2;
	              return value;
	            case 2:
	              $ctx.maybeThrow();
	              $ctx.state = 4;
	              break;
	            default:
	              return $ctx.end();
	          }
	      }, $__10, this);
	    })
	  }, {});
	  Object.defineProperty(Map.prototype, Symbol.iterator, {
	    configurable: true,
	    writable: true,
	    value: Map.prototype.entries
	  });
	  function polyfillMap(global) {
	    var $__7 = global,
	        Object = $__7.Object,
	        Symbol = $__7.Symbol;
	    if (!global.Map)
	      global.Map = Map;
	    var mapPrototype = global.Map.prototype;
	    if (mapPrototype.entries) {
	      maybeAddIterator(mapPrototype, mapPrototype.entries, Symbol);
	      maybeAddIterator(Object.getPrototypeOf(new global.Map().entries()), function() {
	        return this;
	      }, Symbol);
	    }
	  }
	  registerPolyfill(polyfillMap);
	  return {
	    get Map() {
	      return Map;
	    },
	    get polyfillMap() {
	      return polyfillMap;
	    }
	  };
	});
	System.get("traceur-runtime@0.0.58/src/runtime/polyfills/Map" + '');
	System.register("traceur-runtime@0.0.58/src/runtime/polyfills/Set", [], function() {
	  "use strict";
	  var __moduleName = "traceur-runtime@0.0.58/src/runtime/polyfills/Set";
	  var $__11 = System.get("traceur-runtime@0.0.58/src/runtime/polyfills/utils"),
	      isObject = $__11.isObject,
	      maybeAddIterator = $__11.maybeAddIterator,
	      registerPolyfill = $__11.registerPolyfill;
	  var Map = System.get("traceur-runtime@0.0.58/src/runtime/polyfills/Map").Map;
	  var getOwnHashObject = $traceurRuntime.getOwnHashObject;
	  var $hasOwnProperty = Object.prototype.hasOwnProperty;
	  function initSet(set) {
	    set.map_ = new Map();
	  }
	  var Set = function Set() {
	    var iterable = arguments[0];
	    if (!isObject(this))
	      throw new TypeError('Set called on incompatible type');
	    if ($hasOwnProperty.call(this, 'map_')) {
	      throw new TypeError('Set can not be reentrantly initialised');
	    }
	    initSet(this);
	    if (iterable !== null && iterable !== undefined) {
	      for (var $__15 = iterable[Symbol.iterator](),
	          $__16; !($__16 = $__15.next()).done; ) {
	        var item = $__16.value;
	        {
	          this.add(item);
	        }
	      }
	    }
	  };
	  ($traceurRuntime.createClass)(Set, {
	    get size() {
	      return this.map_.size;
	    },
	    has: function(key) {
	      return this.map_.has(key);
	    },
	    add: function(key) {
	      return this.map_.set(key, key);
	    },
	    delete: function(key) {
	      return this.map_.delete(key);
	    },
	    clear: function() {
	      return this.map_.clear();
	    },
	    forEach: function(callbackFn) {
	      var thisArg = arguments[1];
	      var $__13 = this;
	      return this.map_.forEach((function(value, key) {
	        callbackFn.call(thisArg, key, key, $__13);
	      }));
	    },
	    values: $traceurRuntime.initGeneratorFunction(function $__18() {
	      var $__19,
	          $__20;
	      return $traceurRuntime.createGeneratorInstance(function($ctx) {
	        while (true)
	          switch ($ctx.state) {
	            case 0:
	              $__19 = this.map_.keys()[Symbol.iterator]();
	              $ctx.sent = void 0;
	              $ctx.action = 'next';
	              $ctx.state = 12;
	              break;
	            case 12:
	              $__20 = $__19[$ctx.action]($ctx.sentIgnoreThrow);
	              $ctx.state = 9;
	              break;
	            case 9:
	              $ctx.state = ($__20.done) ? 3 : 2;
	              break;
	            case 3:
	              $ctx.sent = $__20.value;
	              $ctx.state = -2;
	              break;
	            case 2:
	              $ctx.state = 12;
	              return $__20.value;
	            default:
	              return $ctx.end();
	          }
	      }, $__18, this);
	    }),
	    entries: $traceurRuntime.initGeneratorFunction(function $__21() {
	      var $__22,
	          $__23;
	      return $traceurRuntime.createGeneratorInstance(function($ctx) {
	        while (true)
	          switch ($ctx.state) {
	            case 0:
	              $__22 = this.map_.entries()[Symbol.iterator]();
	              $ctx.sent = void 0;
	              $ctx.action = 'next';
	              $ctx.state = 12;
	              break;
	            case 12:
	              $__23 = $__22[$ctx.action]($ctx.sentIgnoreThrow);
	              $ctx.state = 9;
	              break;
	            case 9:
	              $ctx.state = ($__23.done) ? 3 : 2;
	              break;
	            case 3:
	              $ctx.sent = $__23.value;
	              $ctx.state = -2;
	              break;
	            case 2:
	              $ctx.state = 12;
	              return $__23.value;
	            default:
	              return $ctx.end();
	          }
	      }, $__21, this);
	    })
	  }, {});
	  Object.defineProperty(Set.prototype, Symbol.iterator, {
	    configurable: true,
	    writable: true,
	    value: Set.prototype.values
	  });
	  Object.defineProperty(Set.prototype, 'keys', {
	    configurable: true,
	    writable: true,
	    value: Set.prototype.values
	  });
	  function polyfillSet(global) {
	    var $__17 = global,
	        Object = $__17.Object,
	        Symbol = $__17.Symbol;
	    if (!global.Set)
	      global.Set = Set;
	    var setPrototype = global.Set.prototype;
	    if (setPrototype.values) {
	      maybeAddIterator(setPrototype, setPrototype.values, Symbol);
	      maybeAddIterator(Object.getPrototypeOf(new global.Set().values()), function() {
	        return this;
	      }, Symbol);
	    }
	  }
	  registerPolyfill(polyfillSet);
	  return {
	    get Set() {
	      return Set;
	    },
	    get polyfillSet() {
	      return polyfillSet;
	    }
	  };
	});
	System.get("traceur-runtime@0.0.58/src/runtime/polyfills/Set" + '');
	System.register("traceur-runtime@0.0.58/node_modules/rsvp/lib/rsvp/asap", [], function() {
	  "use strict";
	  var __moduleName = "traceur-runtime@0.0.58/node_modules/rsvp/lib/rsvp/asap";
	  function asap(callback, arg) {
	    var length = queue.push([callback, arg]);
	    if (length === 1) {
	      scheduleFlush();
	    }
	  }
	  var $__default = asap;
	  ;
	  var browserGlobal = (typeof window !== 'undefined') ? window : {};
	  var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
	  function useNextTick() {
	    return function() {
	      process.nextTick(flush);
	    };
	  }
	  function useMutationObserver() {
	    var iterations = 0;
	    var observer = new BrowserMutationObserver(flush);
	    var node = document.createTextNode('');
	    observer.observe(node, {characterData: true});
	    return function() {
	      node.data = (iterations = ++iterations % 2);
	    };
	  }
	  function useSetTimeout() {
	    return function() {
	      setTimeout(flush, 1);
	    };
	  }
	  var queue = [];
	  function flush() {
	    for (var i = 0; i < queue.length; i++) {
	      var tuple = queue[i];
	      var callback = tuple[0],
	          arg = tuple[1];
	      callback(arg);
	    }
	    queue = [];
	  }
	  var scheduleFlush;
	  if (typeof process !== 'undefined' && {}.toString.call(process) === '[object process]') {
	    scheduleFlush = useNextTick();
	  } else if (BrowserMutationObserver) {
	    scheduleFlush = useMutationObserver();
	  } else {
	    scheduleFlush = useSetTimeout();
	  }
	  return {get default() {
	      return $__default;
	    }};
	});
	System.register("traceur-runtime@0.0.58/src/runtime/polyfills/Promise", [], function() {
	  "use strict";
	  var __moduleName = "traceur-runtime@0.0.58/src/runtime/polyfills/Promise";
	  var async = System.get("traceur-runtime@0.0.58/node_modules/rsvp/lib/rsvp/asap").default;
	  var registerPolyfill = System.get("traceur-runtime@0.0.58/src/runtime/polyfills/utils").registerPolyfill;
	  var promiseRaw = {};
	  function isPromise(x) {
	    return x && typeof x === 'object' && x.status_ !== undefined;
	  }
	  function idResolveHandler(x) {
	    return x;
	  }
	  function idRejectHandler(x) {
	    throw x;
	  }
	  function chain(promise) {
	    var onResolve = arguments[1] !== (void 0) ? arguments[1] : idResolveHandler;
	    var onReject = arguments[2] !== (void 0) ? arguments[2] : idRejectHandler;
	    var deferred = getDeferred(promise.constructor);
	    switch (promise.status_) {
	      case undefined:
	        throw TypeError;
	      case 0:
	        promise.onResolve_.push(onResolve, deferred);
	        promise.onReject_.push(onReject, deferred);
	        break;
	      case +1:
	        promiseEnqueue(promise.value_, [onResolve, deferred]);
	        break;
	      case -1:
	        promiseEnqueue(promise.value_, [onReject, deferred]);
	        break;
	    }
	    return deferred.promise;
	  }
	  function getDeferred(C) {
	    if (this === $Promise) {
	      var promise = promiseInit(new $Promise(promiseRaw));
	      return {
	        promise: promise,
	        resolve: (function(x) {
	          promiseResolve(promise, x);
	        }),
	        reject: (function(r) {
	          promiseReject(promise, r);
	        })
	      };
	    } else {
	      var result = {};
	      result.promise = new C((function(resolve, reject) {
	        result.resolve = resolve;
	        result.reject = reject;
	      }));
	      return result;
	    }
	  }
	  function promiseSet(promise, status, value, onResolve, onReject) {
	    promise.status_ = status;
	    promise.value_ = value;
	    promise.onResolve_ = onResolve;
	    promise.onReject_ = onReject;
	    return promise;
	  }
	  function promiseInit(promise) {
	    return promiseSet(promise, 0, undefined, [], []);
	  }
	  var Promise = function Promise(resolver) {
	    if (resolver === promiseRaw)
	      return;
	    if (typeof resolver !== 'function')
	      throw new TypeError;
	    var promise = promiseInit(this);
	    try {
	      resolver((function(x) {
	        promiseResolve(promise, x);
	      }), (function(r) {
	        promiseReject(promise, r);
	      }));
	    } catch (e) {
	      promiseReject(promise, e);
	    }
	  };
	  ($traceurRuntime.createClass)(Promise, {
	    catch: function(onReject) {
	      return this.then(undefined, onReject);
	    },
	    then: function(onResolve, onReject) {
	      if (typeof onResolve !== 'function')
	        onResolve = idResolveHandler;
	      if (typeof onReject !== 'function')
	        onReject = idRejectHandler;
	      var that = this;
	      var constructor = this.constructor;
	      return chain(this, function(x) {
	        x = promiseCoerce(constructor, x);
	        return x === that ? onReject(new TypeError) : isPromise(x) ? x.then(onResolve, onReject) : onResolve(x);
	      }, onReject);
	    }
	  }, {
	    resolve: function(x) {
	      if (this === $Promise) {
	        return promiseSet(new $Promise(promiseRaw), +1, x);
	      } else {
	        return new this(function(resolve, reject) {
	          resolve(x);
	        });
	      }
	    },
	    reject: function(r) {
	      if (this === $Promise) {
	        return promiseSet(new $Promise(promiseRaw), -1, r);
	      } else {
	        return new this((function(resolve, reject) {
	          reject(r);
	        }));
	      }
	    },
	    cast: function(x) {
	      if (x instanceof this)
	        return x;
	      if (isPromise(x)) {
	        var result = getDeferred(this);
	        chain(x, result.resolve, result.reject);
	        return result.promise;
	      }
	      return this.resolve(x);
	    },
	    all: function(values) {
	      var deferred = getDeferred(this);
	      var resolutions = [];
	      try {
	        var count = values.length;
	        if (count === 0) {
	          deferred.resolve(resolutions);
	        } else {
	          for (var i = 0; i < values.length; i++) {
	            this.resolve(values[i]).then(function(i, x) {
	              resolutions[i] = x;
	              if (--count === 0)
	                deferred.resolve(resolutions);
	            }.bind(undefined, i), (function(r) {
	              deferred.reject(r);
	            }));
	          }
	        }
	      } catch (e) {
	        deferred.reject(e);
	      }
	      return deferred.promise;
	    },
	    race: function(values) {
	      var deferred = getDeferred(this);
	      try {
	        for (var i = 0; i < values.length; i++) {
	          this.resolve(values[i]).then((function(x) {
	            deferred.resolve(x);
	          }), (function(r) {
	            deferred.reject(r);
	          }));
	        }
	      } catch (e) {
	        deferred.reject(e);
	      }
	      return deferred.promise;
	    }
	  });
	  var $Promise = Promise;
	  var $PromiseReject = $Promise.reject;
	  function promiseResolve(promise, x) {
	    promiseDone(promise, +1, x, promise.onResolve_);
	  }
	  function promiseReject(promise, r) {
	    promiseDone(promise, -1, r, promise.onReject_);
	  }
	  function promiseDone(promise, status, value, reactions) {
	    if (promise.status_ !== 0)
	      return;
	    promiseEnqueue(value, reactions);
	    promiseSet(promise, status, value);
	  }
	  function promiseEnqueue(value, tasks) {
	    async((function() {
	      for (var i = 0; i < tasks.length; i += 2) {
	        promiseHandle(value, tasks[i], tasks[i + 1]);
	      }
	    }));
	  }
	  function promiseHandle(value, handler, deferred) {
	    try {
	      var result = handler(value);
	      if (result === deferred.promise)
	        throw new TypeError;
	      else if (isPromise(result))
	        chain(result, deferred.resolve, deferred.reject);
	      else
	        deferred.resolve(result);
	    } catch (e) {
	      try {
	        deferred.reject(e);
	      } catch (e) {}
	    }
	  }
	  var thenableSymbol = '@@thenable';
	  function isObject(x) {
	    return x && (typeof x === 'object' || typeof x === 'function');
	  }
	  function promiseCoerce(constructor, x) {
	    if (!isPromise(x) && isObject(x)) {
	      var then;
	      try {
	        then = x.then;
	      } catch (r) {
	        var promise = $PromiseReject.call(constructor, r);
	        x[thenableSymbol] = promise;
	        return promise;
	      }
	      if (typeof then === 'function') {
	        var p = x[thenableSymbol];
	        if (p) {
	          return p;
	        } else {
	          var deferred = getDeferred(constructor);
	          x[thenableSymbol] = deferred.promise;
	          try {
	            then.call(x, deferred.resolve, deferred.reject);
	          } catch (r) {
	            deferred.reject(r);
	          }
	          return deferred.promise;
	        }
	      }
	    }
	    return x;
	  }
	  function polyfillPromise(global) {
	    if (!global.Promise)
	      global.Promise = Promise;
	  }
	  registerPolyfill(polyfillPromise);
	  return {
	    get Promise() {
	      return Promise;
	    },
	    get polyfillPromise() {
	      return polyfillPromise;
	    }
	  };
	});
	System.get("traceur-runtime@0.0.58/src/runtime/polyfills/Promise" + '');
	System.register("traceur-runtime@0.0.58/src/runtime/polyfills/StringIterator", [], function() {
	  "use strict";
	  var $__29;
	  var __moduleName = "traceur-runtime@0.0.58/src/runtime/polyfills/StringIterator";
	  var $__27 = System.get("traceur-runtime@0.0.58/src/runtime/polyfills/utils"),
	      createIteratorResultObject = $__27.createIteratorResultObject,
	      isObject = $__27.isObject;
	  var $__30 = $traceurRuntime,
	      hasOwnProperty = $__30.hasOwnProperty,
	      toProperty = $__30.toProperty;
	  var iteratedString = Symbol('iteratedString');
	  var stringIteratorNextIndex = Symbol('stringIteratorNextIndex');
	  var StringIterator = function StringIterator() {};
	  ($traceurRuntime.createClass)(StringIterator, ($__29 = {}, Object.defineProperty($__29, "next", {
	    value: function() {
	      var o = this;
	      if (!isObject(o) || !hasOwnProperty(o, iteratedString)) {
	        throw new TypeError('this must be a StringIterator object');
	      }
	      var s = o[toProperty(iteratedString)];
	      if (s === undefined) {
	        return createIteratorResultObject(undefined, true);
	      }
	      var position = o[toProperty(stringIteratorNextIndex)];
	      var len = s.length;
	      if (position >= len) {
	        o[toProperty(iteratedString)] = undefined;
	        return createIteratorResultObject(undefined, true);
	      }
	      var first = s.charCodeAt(position);
	      var resultString;
	      if (first < 0xD800 || first > 0xDBFF || position + 1 === len) {
	        resultString = String.fromCharCode(first);
	      } else {
	        var second = s.charCodeAt(position + 1);
	        if (second < 0xDC00 || second > 0xDFFF) {
	          resultString = String.fromCharCode(first);
	        } else {
	          resultString = String.fromCharCode(first) + String.fromCharCode(second);
	        }
	      }
	      o[toProperty(stringIteratorNextIndex)] = position + resultString.length;
	      return createIteratorResultObject(resultString, false);
	    },
	    configurable: true,
	    enumerable: true,
	    writable: true
	  }), Object.defineProperty($__29, Symbol.iterator, {
	    value: function() {
	      return this;
	    },
	    configurable: true,
	    enumerable: true,
	    writable: true
	  }), $__29), {});
	  function createStringIterator(string) {
	    var s = String(string);
	    var iterator = Object.create(StringIterator.prototype);
	    iterator[toProperty(iteratedString)] = s;
	    iterator[toProperty(stringIteratorNextIndex)] = 0;
	    return iterator;
	  }
	  return {get createStringIterator() {
	      return createStringIterator;
	    }};
	});
	System.register("traceur-runtime@0.0.58/src/runtime/polyfills/String", [], function() {
	  "use strict";
	  var __moduleName = "traceur-runtime@0.0.58/src/runtime/polyfills/String";
	  var createStringIterator = System.get("traceur-runtime@0.0.58/src/runtime/polyfills/StringIterator").createStringIterator;
	  var $__32 = System.get("traceur-runtime@0.0.58/src/runtime/polyfills/utils"),
	      maybeAddFunctions = $__32.maybeAddFunctions,
	      maybeAddIterator = $__32.maybeAddIterator,
	      registerPolyfill = $__32.registerPolyfill;
	  var $toString = Object.prototype.toString;
	  var $indexOf = String.prototype.indexOf;
	  var $lastIndexOf = String.prototype.lastIndexOf;
	  function startsWith(search) {
	    var string = String(this);
	    if (this == null || $toString.call(search) == '[object RegExp]') {
	      throw TypeError();
	    }
	    var stringLength = string.length;
	    var searchString = String(search);
	    var searchLength = searchString.length;
	    var position = arguments.length > 1 ? arguments[1] : undefined;
	    var pos = position ? Number(position) : 0;
	    if (isNaN(pos)) {
	      pos = 0;
	    }
	    var start = Math.min(Math.max(pos, 0), stringLength);
	    return $indexOf.call(string, searchString, pos) == start;
	  }
	  function endsWith(search) {
	    var string = String(this);
	    if (this == null || $toString.call(search) == '[object RegExp]') {
	      throw TypeError();
	    }
	    var stringLength = string.length;
	    var searchString = String(search);
	    var searchLength = searchString.length;
	    var pos = stringLength;
	    if (arguments.length > 1) {
	      var position = arguments[1];
	      if (position !== undefined) {
	        pos = position ? Number(position) : 0;
	        if (isNaN(pos)) {
	          pos = 0;
	        }
	      }
	    }
	    var end = Math.min(Math.max(pos, 0), stringLength);
	    var start = end - searchLength;
	    if (start < 0) {
	      return false;
	    }
	    return $lastIndexOf.call(string, searchString, start) == start;
	  }
	  function contains(search) {
	    if (this == null) {
	      throw TypeError();
	    }
	    var string = String(this);
	    var stringLength = string.length;
	    var searchString = String(search);
	    var searchLength = searchString.length;
	    var position = arguments.length > 1 ? arguments[1] : undefined;
	    var pos = position ? Number(position) : 0;
	    if (isNaN(pos)) {
	      pos = 0;
	    }
	    var start = Math.min(Math.max(pos, 0), stringLength);
	    return $indexOf.call(string, searchString, pos) != -1;
	  }
	  function repeat(count) {
	    if (this == null) {
	      throw TypeError();
	    }
	    var string = String(this);
	    var n = count ? Number(count) : 0;
	    if (isNaN(n)) {
	      n = 0;
	    }
	    if (n < 0 || n == Infinity) {
	      throw RangeError();
	    }
	    if (n == 0) {
	      return '';
	    }
	    var result = '';
	    while (n--) {
	      result += string;
	    }
	    return result;
	  }
	  function codePointAt(position) {
	    if (this == null) {
	      throw TypeError();
	    }
	    var string = String(this);
	    var size = string.length;
	    var index = position ? Number(position) : 0;
	    if (isNaN(index)) {
	      index = 0;
	    }
	    if (index < 0 || index >= size) {
	      return undefined;
	    }
	    var first = string.charCodeAt(index);
	    var second;
	    if (first >= 0xD800 && first <= 0xDBFF && size > index + 1) {
	      second = string.charCodeAt(index + 1);
	      if (second >= 0xDC00 && second <= 0xDFFF) {
	        return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
	      }
	    }
	    return first;
	  }
	  function raw(callsite) {
	    var raw = callsite.raw;
	    var len = raw.length >>> 0;
	    if (len === 0)
	      return '';
	    var s = '';
	    var i = 0;
	    while (true) {
	      s += raw[i];
	      if (i + 1 === len)
	        return s;
	      s += arguments[++i];
	    }
	  }
	  function fromCodePoint() {
	    var codeUnits = [];
	    var floor = Math.floor;
	    var highSurrogate;
	    var lowSurrogate;
	    var index = -1;
	    var length = arguments.length;
	    if (!length) {
	      return '';
	    }
	    while (++index < length) {
	      var codePoint = Number(arguments[index]);
	      if (!isFinite(codePoint) || codePoint < 0 || codePoint > 0x10FFFF || floor(codePoint) != codePoint) {
	        throw RangeError('Invalid code point: ' + codePoint);
	      }
	      if (codePoint <= 0xFFFF) {
	        codeUnits.push(codePoint);
	      } else {
	        codePoint -= 0x10000;
	        highSurrogate = (codePoint >> 10) + 0xD800;
	        lowSurrogate = (codePoint % 0x400) + 0xDC00;
	        codeUnits.push(highSurrogate, lowSurrogate);
	      }
	    }
	    return String.fromCharCode.apply(null, codeUnits);
	  }
	  function stringPrototypeIterator() {
	    var o = $traceurRuntime.checkObjectCoercible(this);
	    var s = String(o);
	    return createStringIterator(s);
	  }
	  function polyfillString(global) {
	    var String = global.String;
	    maybeAddFunctions(String.prototype, ['codePointAt', codePointAt, 'contains', contains, 'endsWith', endsWith, 'startsWith', startsWith, 'repeat', repeat]);
	    maybeAddFunctions(String, ['fromCodePoint', fromCodePoint, 'raw', raw]);
	    maybeAddIterator(String.prototype, stringPrototypeIterator, Symbol);
	  }
	  registerPolyfill(polyfillString);
	  return {
	    get startsWith() {
	      return startsWith;
	    },
	    get endsWith() {
	      return endsWith;
	    },
	    get contains() {
	      return contains;
	    },
	    get repeat() {
	      return repeat;
	    },
	    get codePointAt() {
	      return codePointAt;
	    },
	    get raw() {
	      return raw;
	    },
	    get fromCodePoint() {
	      return fromCodePoint;
	    },
	    get stringPrototypeIterator() {
	      return stringPrototypeIterator;
	    },
	    get polyfillString() {
	      return polyfillString;
	    }
	  };
	});
	System.get("traceur-runtime@0.0.58/src/runtime/polyfills/String" + '');
	System.register("traceur-runtime@0.0.58/src/runtime/polyfills/ArrayIterator", [], function() {
	  "use strict";
	  var $__36;
	  var __moduleName = "traceur-runtime@0.0.58/src/runtime/polyfills/ArrayIterator";
	  var $__34 = System.get("traceur-runtime@0.0.58/src/runtime/polyfills/utils"),
	      toObject = $__34.toObject,
	      toUint32 = $__34.toUint32,
	      createIteratorResultObject = $__34.createIteratorResultObject;
	  var ARRAY_ITERATOR_KIND_KEYS = 1;
	  var ARRAY_ITERATOR_KIND_VALUES = 2;
	  var ARRAY_ITERATOR_KIND_ENTRIES = 3;
	  var ArrayIterator = function ArrayIterator() {};
	  ($traceurRuntime.createClass)(ArrayIterator, ($__36 = {}, Object.defineProperty($__36, "next", {
	    value: function() {
	      var iterator = toObject(this);
	      var array = iterator.iteratorObject_;
	      if (!array) {
	        throw new TypeError('Object is not an ArrayIterator');
	      }
	      var index = iterator.arrayIteratorNextIndex_;
	      var itemKind = iterator.arrayIterationKind_;
	      var length = toUint32(array.length);
	      if (index >= length) {
	        iterator.arrayIteratorNextIndex_ = Infinity;
	        return createIteratorResultObject(undefined, true);
	      }
	      iterator.arrayIteratorNextIndex_ = index + 1;
	      if (itemKind == ARRAY_ITERATOR_KIND_VALUES)
	        return createIteratorResultObject(array[index], false);
	      if (itemKind == ARRAY_ITERATOR_KIND_ENTRIES)
	        return createIteratorResultObject([index, array[index]], false);
	      return createIteratorResultObject(index, false);
	    },
	    configurable: true,
	    enumerable: true,
	    writable: true
	  }), Object.defineProperty($__36, Symbol.iterator, {
	    value: function() {
	      return this;
	    },
	    configurable: true,
	    enumerable: true,
	    writable: true
	  }), $__36), {});
	  function createArrayIterator(array, kind) {
	    var object = toObject(array);
	    var iterator = new ArrayIterator;
	    iterator.iteratorObject_ = object;
	    iterator.arrayIteratorNextIndex_ = 0;
	    iterator.arrayIterationKind_ = kind;
	    return iterator;
	  }
	  function entries() {
	    return createArrayIterator(this, ARRAY_ITERATOR_KIND_ENTRIES);
	  }
	  function keys() {
	    return createArrayIterator(this, ARRAY_ITERATOR_KIND_KEYS);
	  }
	  function values() {
	    return createArrayIterator(this, ARRAY_ITERATOR_KIND_VALUES);
	  }
	  return {
	    get entries() {
	      return entries;
	    },
	    get keys() {
	      return keys;
	    },
	    get values() {
	      return values;
	    }
	  };
	});
	System.register("traceur-runtime@0.0.58/src/runtime/polyfills/Array", [], function() {
	  "use strict";
	  var __moduleName = "traceur-runtime@0.0.58/src/runtime/polyfills/Array";
	  var $__37 = System.get("traceur-runtime@0.0.58/src/runtime/polyfills/ArrayIterator"),
	      entries = $__37.entries,
	      keys = $__37.keys,
	      values = $__37.values;
	  var $__38 = System.get("traceur-runtime@0.0.58/src/runtime/polyfills/utils"),
	      checkIterable = $__38.checkIterable,
	      isCallable = $__38.isCallable,
	      isConstructor = $__38.isConstructor,
	      maybeAddFunctions = $__38.maybeAddFunctions,
	      maybeAddIterator = $__38.maybeAddIterator,
	      registerPolyfill = $__38.registerPolyfill,
	      toInteger = $__38.toInteger,
	      toLength = $__38.toLength,
	      toObject = $__38.toObject;
	  function from(arrLike) {
	    var mapFn = arguments[1];
	    var thisArg = arguments[2];
	    var C = this;
	    var items = toObject(arrLike);
	    var mapping = mapFn !== undefined;
	    var k = 0;
	    var arr,
	        len;
	    if (mapping && !isCallable(mapFn)) {
	      throw TypeError();
	    }
	    if (checkIterable(items)) {
	      arr = isConstructor(C) ? new C() : [];
	      for (var $__39 = items[Symbol.iterator](),
	          $__40; !($__40 = $__39.next()).done; ) {
	        var item = $__40.value;
	        {
	          if (mapping) {
	            arr[k] = mapFn.call(thisArg, item, k);
	          } else {
	            arr[k] = item;
	          }
	          k++;
	        }
	      }
	      arr.length = k;
	      return arr;
	    }
	    len = toLength(items.length);
	    arr = isConstructor(C) ? new C(len) : new Array(len);
	    for (; k < len; k++) {
	      if (mapping) {
	        arr[k] = typeof thisArg === 'undefined' ? mapFn(items[k], k) : mapFn.call(thisArg, items[k], k);
	      } else {
	        arr[k] = items[k];
	      }
	    }
	    arr.length = len;
	    return arr;
	  }
	  function of() {
	    for (var items = [],
	        $__41 = 0; $__41 < arguments.length; $__41++)
	      items[$__41] = arguments[$__41];
	    var C = this;
	    var len = items.length;
	    var arr = isConstructor(C) ? new C(len) : new Array(len);
	    for (var k = 0; k < len; k++) {
	      arr[k] = items[k];
	    }
	    arr.length = len;
	    return arr;
	  }
	  function fill(value) {
	    var start = arguments[1] !== (void 0) ? arguments[1] : 0;
	    var end = arguments[2];
	    var object = toObject(this);
	    var len = toLength(object.length);
	    var fillStart = toInteger(start);
	    var fillEnd = end !== undefined ? toInteger(end) : len;
	    fillStart = fillStart < 0 ? Math.max(len + fillStart, 0) : Math.min(fillStart, len);
	    fillEnd = fillEnd < 0 ? Math.max(len + fillEnd, 0) : Math.min(fillEnd, len);
	    while (fillStart < fillEnd) {
	      object[fillStart] = value;
	      fillStart++;
	    }
	    return object;
	  }
	  function find(predicate) {
	    var thisArg = arguments[1];
	    return findHelper(this, predicate, thisArg);
	  }
	  function findIndex(predicate) {
	    var thisArg = arguments[1];
	    return findHelper(this, predicate, thisArg, true);
	  }
	  function findHelper(self, predicate) {
	    var thisArg = arguments[2];
	    var returnIndex = arguments[3] !== (void 0) ? arguments[3] : false;
	    var object = toObject(self);
	    var len = toLength(object.length);
	    if (!isCallable(predicate)) {
	      throw TypeError();
	    }
	    for (var i = 0; i < len; i++) {
	      if (i in object) {
	        var value = object[i];
	        if (predicate.call(thisArg, value, i, object)) {
	          return returnIndex ? i : value;
	        }
	      }
	    }
	    return returnIndex ? -1 : undefined;
	  }
	  function polyfillArray(global) {
	    var $__42 = global,
	        Array = $__42.Array,
	        Object = $__42.Object,
	        Symbol = $__42.Symbol;
	    maybeAddFunctions(Array.prototype, ['entries', entries, 'keys', keys, 'values', values, 'fill', fill, 'find', find, 'findIndex', findIndex]);
	    maybeAddFunctions(Array, ['from', from, 'of', of]);
	    maybeAddIterator(Array.prototype, values, Symbol);
	    maybeAddIterator(Object.getPrototypeOf([].values()), function() {
	      return this;
	    }, Symbol);
	  }
	  registerPolyfill(polyfillArray);
	  return {
	    get from() {
	      return from;
	    },
	    get of() {
	      return of;
	    },
	    get fill() {
	      return fill;
	    },
	    get find() {
	      return find;
	    },
	    get findIndex() {
	      return findIndex;
	    },
	    get polyfillArray() {
	      return polyfillArray;
	    }
	  };
	});
	System.get("traceur-runtime@0.0.58/src/runtime/polyfills/Array" + '');
	System.register("traceur-runtime@0.0.58/src/runtime/polyfills/Object", [], function() {
	  "use strict";
	  var __moduleName = "traceur-runtime@0.0.58/src/runtime/polyfills/Object";
	  var $__43 = System.get("traceur-runtime@0.0.58/src/runtime/polyfills/utils"),
	      maybeAddFunctions = $__43.maybeAddFunctions,
	      registerPolyfill = $__43.registerPolyfill;
	  var $__44 = $traceurRuntime,
	      defineProperty = $__44.defineProperty,
	      getOwnPropertyDescriptor = $__44.getOwnPropertyDescriptor,
	      getOwnPropertyNames = $__44.getOwnPropertyNames,
	      keys = $__44.keys,
	      privateNames = $__44.privateNames;
	  function is(left, right) {
	    if (left === right)
	      return left !== 0 || 1 / left === 1 / right;
	    return left !== left && right !== right;
	  }
	  function assign(target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];
	      var props = keys(source);
	      var p,
	          length = props.length;
	      for (p = 0; p < length; p++) {
	        var name = props[p];
	        if (privateNames[name])
	          continue;
	        target[name] = source[name];
	      }
	    }
	    return target;
	  }
	  function mixin(target, source) {
	    var props = getOwnPropertyNames(source);
	    var p,
	        descriptor,
	        length = props.length;
	    for (p = 0; p < length; p++) {
	      var name = props[p];
	      if (privateNames[name])
	        continue;
	      descriptor = getOwnPropertyDescriptor(source, props[p]);
	      defineProperty(target, props[p], descriptor);
	    }
	    return target;
	  }
	  function polyfillObject(global) {
	    var Object = global.Object;
	    maybeAddFunctions(Object, ['assign', assign, 'is', is, 'mixin', mixin]);
	  }
	  registerPolyfill(polyfillObject);
	  return {
	    get is() {
	      return is;
	    },
	    get assign() {
	      return assign;
	    },
	    get mixin() {
	      return mixin;
	    },
	    get polyfillObject() {
	      return polyfillObject;
	    }
	  };
	});
	System.get("traceur-runtime@0.0.58/src/runtime/polyfills/Object" + '');
	System.register("traceur-runtime@0.0.58/src/runtime/polyfills/Number", [], function() {
	  "use strict";
	  var __moduleName = "traceur-runtime@0.0.58/src/runtime/polyfills/Number";
	  var $__45 = System.get("traceur-runtime@0.0.58/src/runtime/polyfills/utils"),
	      isNumber = $__45.isNumber,
	      maybeAddConsts = $__45.maybeAddConsts,
	      maybeAddFunctions = $__45.maybeAddFunctions,
	      registerPolyfill = $__45.registerPolyfill,
	      toInteger = $__45.toInteger;
	  var $abs = Math.abs;
	  var $isFinite = isFinite;
	  var $isNaN = isNaN;
	  var MAX_SAFE_INTEGER = Math.pow(2, 53) - 1;
	  var MIN_SAFE_INTEGER = -Math.pow(2, 53) + 1;
	  var EPSILON = Math.pow(2, -52);
	  function NumberIsFinite(number) {
	    return isNumber(number) && $isFinite(number);
	  }
	  ;
	  function isInteger(number) {
	    return NumberIsFinite(number) && toInteger(number) === number;
	  }
	  function NumberIsNaN(number) {
	    return isNumber(number) && $isNaN(number);
	  }
	  ;
	  function isSafeInteger(number) {
	    if (NumberIsFinite(number)) {
	      var integral = toInteger(number);
	      if (integral === number)
	        return $abs(integral) <= MAX_SAFE_INTEGER;
	    }
	    return false;
	  }
	  function polyfillNumber(global) {
	    var Number = global.Number;
	    maybeAddConsts(Number, ['MAX_SAFE_INTEGER', MAX_SAFE_INTEGER, 'MIN_SAFE_INTEGER', MIN_SAFE_INTEGER, 'EPSILON', EPSILON]);
	    maybeAddFunctions(Number, ['isFinite', NumberIsFinite, 'isInteger', isInteger, 'isNaN', NumberIsNaN, 'isSafeInteger', isSafeInteger]);
	  }
	  registerPolyfill(polyfillNumber);
	  return {
	    get MAX_SAFE_INTEGER() {
	      return MAX_SAFE_INTEGER;
	    },
	    get MIN_SAFE_INTEGER() {
	      return MIN_SAFE_INTEGER;
	    },
	    get EPSILON() {
	      return EPSILON;
	    },
	    get isFinite() {
	      return NumberIsFinite;
	    },
	    get isInteger() {
	      return isInteger;
	    },
	    get isNaN() {
	      return NumberIsNaN;
	    },
	    get isSafeInteger() {
	      return isSafeInteger;
	    },
	    get polyfillNumber() {
	      return polyfillNumber;
	    }
	  };
	});
	System.get("traceur-runtime@0.0.58/src/runtime/polyfills/Number" + '');
	System.register("traceur-runtime@0.0.58/src/runtime/polyfills/polyfills", [], function() {
	  "use strict";
	  var __moduleName = "traceur-runtime@0.0.58/src/runtime/polyfills/polyfills";
	  var polyfillAll = System.get("traceur-runtime@0.0.58/src/runtime/polyfills/utils").polyfillAll;
	  polyfillAll(this);
	  var setupGlobals = $traceurRuntime.setupGlobals;
	  $traceurRuntime.setupGlobals = function(global) {
	    setupGlobals(global);
	    polyfillAll(global);
	  };
	  return {};
	});
	System.get("traceur-runtime@0.0.58/src/runtime/polyfills/polyfills" + '');

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	var process = module.exports = {};
	var cachedSetTimeout;
	var cachedClearTimeout;
	function defaultSetTimout() {
	  throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	  throw new Error('clearTimeout has not been defined');
	}
	(function() {
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
	}());
	function runTimeout(fun) {
	  if (cachedSetTimeout === setTimeout) {
	    return setTimeout(fun, 0);
	  }
	  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	    cachedSetTimeout = setTimeout;
	    return setTimeout(fun, 0);
	  }
	  try {
	    return cachedSetTimeout(fun, 0);
	  } catch (e) {
	    try {
	      return cachedSetTimeout.call(null, fun, 0);
	    } catch (e) {
	      return cachedSetTimeout.call(this, fun, 0);
	    }
	  }
	}
	function runClearTimeout(marker) {
	  if (cachedClearTimeout === clearTimeout) {
	    return clearTimeout(marker);
	  }
	  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	    cachedClearTimeout = clearTimeout;
	    return clearTimeout(marker);
	  }
	  try {
	    return cachedClearTimeout(marker);
	  } catch (e) {
	    try {
	      return cachedClearTimeout.call(null, marker);
	    } catch (e) {
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
	process.nextTick = function(fun) {
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
	function Item(fun, array) {
	  this.fun = fun;
	  this.array = array;
	}
	Item.prototype.run = function() {
	  this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = '';
	process.versions = {};
	function noop() {}
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.binding = function(name) {
	  throw new Error('process.binding is not supported');
	};
	process.cwd = function() {
	  return '/';
	};
	process.chdir = function(dir) {
	  throw new Error('process.chdir is not supported');
	};
	process.umask = function() {
	  return 0;
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	app.filter('unit', function() {
	  return function(p) {
	    if (isNaN(p))
	      return p;
	    return '€' + p + ' per task';
	  };
	});


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	window.getScrollTop = function() {
	  return document.body.scrollTop || document.documentElement.scrollTop;
	};
	window.setScrollTop = function(t) {
	  document.body.scrollTop = t;
	  document.documentElement.scrollTop = t;
	};
	window.moveScrollTop = function(dt) {
	  document.body.scrollTop += dt;
	  document.documentElement.scrollTop += dt;
	};
	window.bringIntoView_started = 0;
	window.bringIntoView_ends = 0;
	window.bringIntoView_y = 0;
	window.bringIntoView_tick = function() {
	  var distanceLeft,
	      dt,
	      duration,
	      t,
	      travel;
	  t = Date.now();
	  if (t < window.bringIntoView_ends) {
	    dt = t - window.bringIntoView_started;
	    duration = window.bringIntoView_ends - window.bringIntoView_started;
	    distanceLeft = window.bringIntoView_y - getScrollTop();
	    travel = distanceLeft * (dt / duration);
	    moveScrollTop(travel);
	    window.requestAnimationFrame(window.bringIntoView_tick);
	  } else {
	    setScrollTop(window.bringIntoView_y);
	  }
	};
	window.bringIntoView = function(e, duration) {
	  window.bringIntoView_started = Date.now();
	  window.bringIntoView_ends = window.bringIntoView_started + duration;
	  window.bringIntoView_y = e.tagName ? Math.min(document.body.scrollTop + e.getBoundingClientRect().top, document.body.scrollHeight - window.innerHeight) : Math.min(e, document.body.scrollHeight - window.innerHeight);
	  window.requestAnimationFrame(window.bringIntoView_tick);
	};
	app.directive('scrollTo', function() {
	  return function($scope, $element, $attrs) {
	    $element.on('click', function() {
	      var element = document.querySelector($attrs.scrollTo);
	      bringIntoView(element, 1200);
	    });
	  };
	});
	app.directive('intoView', function() {
	  var registers = [];
	  function isVisible(el) {
	    var elemTop = el.getBoundingClientRect().top;
	    return elemTop > 0 && elemTop < window.innerHeight;
	  }
	  window.addEventListener('scroll', function() {
	    registers.forEach(function(i) {
	      i.visible = isVisible(i.el);
	    });
	    for (var k = 0; k < registers.length; k++) {
	      var i = registers[k],
	          done;
	      if (i.visible && !done) {
	        i.scope.intoView({
	          value: i.el.getAttribute('name'),
	          inView: true
	        });
	        done = true;
	      } else {
	        i.scope.intoView({
	          value: i.el.getAttribute('name'),
	          inView: false
	        });
	      }
	    }
	  }, false);
	  return {
	    restrict: 'A',
	    scope: {intoView: '&'},
	    link: function($scope, $element, $attrs) {
	      registers.push({
	        el: $element[0],
	        scope: $scope
	      });
	    }
	  };
	});
	app.directive('classIntoView', function() {
	  var registers = [];
	  function isVisible(el) {
	    var elemTop = el.getBoundingClientRect().top;
	    return elemTop > 0 && elemTop < window.innerHeight;
	  }
	  window.addEventListener('scroll', function() {
	    registers.forEach((function(i) {
	      return i.visible = isVisible(i.el);
	    }));
	    for (var k = 0; k < registers.length; k++) {
	      var i = registers[k],
	          done;
	      if (i.visible && !done) {
	        i.el.classList.add(i.scope.classIntoView);
	        done = true;
	      }
	    }
	  }, false);
	  return {
	    restrict: 'A',
	    scope: {classIntoView: '@'},
	    link: function($scope, $element, $attrs) {
	      registers.push({
	        el: $element[0],
	        scope: $scope
	      });
	    }
	  };
	});
	app.directive('classScroll', function() {
	  return {
	    restrict: 'A',
	    link: function($scope, $element, $attrs) {
	      document.onscroll = function() {
	        if (document.body.scrollTop > (parseInt($attrs.classScroll || 0))) {
	          $element[0].classList.add('scrolled');
	        } else {
	          $element[0].classList.remove('scrolled');
	        }
	      };
	    }
	  };
	});


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	app.directive('regroup', ["$compile", function($compile) {
	  return {
	    restrict: 'A',
	    link: function($scope, $element, $attrs) {
	      var tag = $attrs.regroup,
	          group,
	          groups = [];
	      var prevText;
	      for (var i = 0; i < $element.children().length; i++) {
	        var child = $element.children()[i];
	        if (child.tagName == tag.toUpperCase()) {
	          group = [];
	          groups.push(group);
	          group.title = child;
	          group.isNew = child.innerText !== prevText;
	          prevText = child.innerText;
	        } else {
	          if (group)
	            group.push(child);
	        }
	      }
	      var parent = document.createElement('div');
	      var index = document.createElement('ol');
	      index.classList.add('index');
	      $scope.go = function(hash) {
	        var t = document.body.scrollTop + document.querySelector('a[name="' + hash + '"]').getBoundingClientRect().top - 100;
	        bringIntoView(t, 1200);
	      };
	      $scope.intoView = function(value, inView) {
	        inView ? document.querySelector('[hook="' + value + '"]').classList.add('md-primary') : document.querySelector('[hook="' + value + '"]').classList.remove('md-primary');
	      };
	      function createListItem(txt, i) {
	        var t = document.createElement('li');
	        t.setAttribute('ng-click', 'go("' + encodeURIComponent(txt) + '")');
	        t.setAttribute('hook', encodeURIComponent(txt));
	        if (txt.indexOf('-') > -1) {
	          t.innerText = txt.split('-').pop();
	          t.classList.add('indented');
	        } else {
	          t.innerText = txt;
	        }
	        return t;
	      }
	      var count = 1;
	      groups.forEach(function(g, i) {
	        var div = document.createElement('div');
	        div.classList.add('group');
	        var id = encodeURIComponent(g.title.innerText);
	        var aa = document.createElement('a');
	        aa.innerText = g.title.innerText;
	        aa.setAttribute('name', id);
	        aa.setAttribute('into-view', 'intoView(value, inView)');
	        g.title.innerText = "";
	        g.title.appendChild(aa);
	        if (g.isNew) {
	          parent.appendChild(g.title);
	        } else {
	          angular.element(g.title).remove();
	        }
	        if (g.isNew) {
	          var li = createListItem(g.title.innerText, count);
	          index.appendChild(li);
	        }
	        g.forEach(function(e) {
	          div.appendChild(e);
	        });
	        if (g.isNew)
	          count++;
	        parent.appendChild(div);
	      });
	      var e = $compile(index)($scope);
	      angular.element(document.querySelector('.table-index')).append(e);
	      $element.append($compile(parent)($scope));
	    }
	  };
	}]);


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	'use strict';
	app.directive('priceCard', ["$timeout", function($timeout) {
	  var pricings = [{
	    min: 0,
	    max: 1000,
	    unit: 0,
	    name: 'Brussels',
	    icon: 'brussels_atomium',
	    support: 'world'
	  }, {
	    min: 1000,
	    max: 3000,
	    unit: 0.25,
	    name: 'Dubai',
	    icon: 'dubai_hotel',
	    support: 'world email'
	  }, {
	    min: 3000,
	    max: 10000,
	    unit: 0.19,
	    name: 'Sidney',
	    icon: 'sidney_opera',
	    support: 'world email telephone'
	  }, {
	    min: 10000,
	    max: 25000,
	    unit: 0.18,
	    name: 'Paris',
	    icon: 'paris_eiffel',
	    support: 'world email telephone person'
	  }, {
	    min: 25000,
	    max: 50000,
	    unit: 0.17,
	    name: 'London',
	    icon: 'london_bridge',
	    support: 'world email telephone person'
	  }, {
	    min: 50000,
	    max: 100000,
	    unit: 0.15,
	    name: 'New-York',
	    icon: 'newyork_manhattan',
	    support: 'world email telephone person'
	  }, {
	    min: 100000,
	    max: 100001,
	    unit: '?',
	    name: 'Tokyo',
	    icon: 'pagoda',
	    message: 'More',
	    pricing: 'TALK TO US',
	    support: 'world email telephone person'
	  }];
	  return {
	    restrict: 'E',
	    bindToController: true,
	    controllerAs: 'view',
	    template: "\n\t\t<div layout=\"column\" layout-align=\"start center\">\n\t\t\t<img style=\"opacity: 0.5;width:100px;\" ng-src=\"/user/themes/halcyon/img/landmarks/black-128x128/{{view.pricing.icon}}.png\">\n\t\t\t<h1 style=\"margin: 0;\">{{view.text}}</h1>\n\t\t\t<span style=\"font-weight: 300;color: #aaa;\">Slide left or right</span>\n\t\t\t<md-slider autofocus flex=\"100\" style=\"width: 400px\" min=\"1000\" max=\"{{view.maxPrice}}\" ng-model=\"view.parcels\" step=\"100\" aria-label=\"red\"></md-slider>\t\t\t\n\t\t</div>\n\n\t\t<table class=\"pricing-table\">\n\t\t\t<tr>\n\t\t\t\t<th>Plan</th>\n\t\t\t\t<th>Monthly volume</th>\n\t\t\t\t<th>Price per task</th>\n\t\t\t\t<th>Support</th>\n\t\t\t</tr>\n\t\t\t<tr ng-repeat=\"p in view.pricings\" ng-class=\"{active: view.pricing.name === p.name}\" ng-click=\"view.setParcels(p.max)\">\n\t\t\t\t<td>{{p.name}}</td>\n\t\t\t\t<td>{{p.message || (p.max | number)}}</td>\n\t\t\t\t<td>{{p.pricing || '€'+(p.unit | number: 2)}}</td>\n\t\t\t\t<td><i ng-repeat=\"s in p.support.split(' ')\" class=\"ion-ios-{{s}}-outline\"></i></td>\n\t\t\t</tr>\n\t\t</table>\n\t\t",
	    controller: ["$scope", function($scope) {
	      var $__0 = this;
	      this.parcels = 1000;
	      this.pricings = pricings;
	      this.maxPrice = pricings[pricings.length - 1].max;
	      this.setParcels = (function(p) {
	        return $__0.parcels = p;
	      });
	      var hasChanged = null;
	      $scope.$watch('view.parcels', (function(numParcels) {
	        var price = 0,
	            dp;
	        for (var i = 0; i < pricings.length; i++) {
	          if (pricings[i].min < numParcels && numParcels <= pricings[i].max) {
	            dp = pricings[i].unit * (numParcels - (i ? pricings[i - 1].max : 0));
	            price += dp;
	            $__0.price = price;
	            $__0.pricing = pricings[i];
	            break;
	          } else {
	            dp = pricings[i].unit * (pricings[i].max - pricings[i].min);
	            price += dp;
	          }
	        }
	        if (hasChanged)
	          $timeout.cancel(hasChanged);
	        $__0.text = numParcels;
	        hasChanged = $timeout((function() {
	          $__0.text = $__0.pricing.name;
	        }), 1000);
	      }));
	    }],
	    link: function($scope) {}
	  };
	}]);


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	function changeBackground(i, key) {
	  if (i) {
	    var url = '/user/themes/halcyon/img/backgrounds/' + key + '-min.jpg';
	    i.style.backgroundImage = 'url(' + url + ')';
	  }
	}
	var backgrounds = ['bg', 'paris', 'london', 'tokyo', 'rio', 'moscow'];
	app.directive('slideAnimation', function() {
	  return {
	    restrict: 'E',
	    link: function($scope, $element, $attrs) {
	      var index = 0;
	      var s = backgrounds.map(function(b) {
	        var e = document.createElement('div');
	        changeBackground(e, b);
	        return e;
	      });
	      s.forEach(function(e) {
	        e.classList.add('animated');
	        $element.append(e);
	      });
	      $element[0].style.width = (backgrounds.length * 100) + 'vw';
	      function slide() {
	        s.forEach(function(e, i) {
	          var k = index % backgrounds.length;
	          var p = k * 100;
	          $element[0].style.transform = 'translate3d(-' + p + 'vw,0,0)';
	        });
	        index++;
	      }
	      slide();
	      setInterval(slide, 5000);
	    }
	  };
	});


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	app.directive('img', function() {
	  var viewer = document.createElement('img');
	  viewer.classList.add('image-viewer');
	  document.body.appendChild(viewer);
	  angular.element(viewer).on('click', function() {
	    viewer.classList.remove('opened');
	  });
	  window.addEventListener('keydown', function(e) {
	    if (e.keyCode === 27) {
	      viewer.classList.remove('opened');
	    }
	  });
	  return {
	    restrict: 'E',
	    link: function($scope, $element, $attrs) {
	      if ($element && $element[0].classList.contains('thumbnail')) {
	        $element.on('click', function() {
	          viewer.classList.add('opened');
	          viewer.src = $element[0].src;
	        });
	      }
	    }
	  };
	});


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	app.directive('googleMap', function() {
	  return {
	    restrict: 'E',
	    template: '<div style="min-height: 150px"></div>',
	    replace: true,
	    link: function($scope, $element, $attrs) {
	      angular.element(document).ready(function() {
	        var lat = parseFloat($attrs.latitude);
	        var lng = parseFloat($attrs.longitude);
	        var map = new google.maps.Map($element[0], {
	          center: {
	            lat: lat,
	            lng: lng
	          },
	          zoom: parseFloat($attrs.zoom) || 10,
	          disableDefaultUI: true
	        });
	        var marker = new google.maps.Marker({
	          position: {
	            lat: lat,
	            lng: lng
	          },
	          map: map,
	          animation: google.maps.Animation.DROP,
	          title: 'URBANTZ'
	        });
	        if ($attrs.info) {
	          var infowindow = new google.maps.InfoWindow({content: $attrs.info});
	          marker.addListener('click', function() {
	            infowindow.open(map, marker);
	          });
	          infowindow.open(map, marker);
	        }
	      });
	    }
	  };
	});


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	function initTwitter() {
	  window.twttr = (function(d, s, id) {
	    var js,
	        fjs = d.getElementsByTagName(s)[0],
	        t = window.twttr || {};
	    if (d.getElementById(id))
	      return t;
	    js = d.createElement(s);
	    js.id = id;
	    js.src = "https://platform.twitter.com/widgets.js";
	    fjs.parentNode.insertBefore(js, fjs);
	    t._e = [];
	    t.ready = function(f) {
	      t._e.push(f);
	    };
	    return t;
	  }(document, "script", "twitter-wjs"));
	}
	app.directive('twitterTimeline', function() {
	  return {
	    restrict: 'E',
	    template: '<div></div>',
	    link: function($scope, $element, $attrs) {
	      if (!window.twttr)
	        initTwitter();
	      twttr.ready(function(twttr) {
	        twttr.widgets.load($element[0]);
	        twttr.widgets.createTimeline({
	          sourceType: "profile",
	          screenName: $attrs.user
	        }, $element[0], {
	          width: '350',
	          height: '400',
	          related: $attrs.user
	        }).then(function(el) {
	          console.log("Embedded a timeline.");
	        });
	      });
	    }
	  };
	});
	app.directive('twitterFollow', function() {
	  return {
	    restrict: 'E',
	    template: "<a data-show-count=\"false\" data-size=\"large\"></a>",
	    replace: true,
	    scope: {user: '@'},
	    link: function($scope, $element, $attrs) {
	      if (!window.twttr)
	        initTwitter();
	      twttr.ready(function(twttr) {
	        twttr.widgets.createFollowButton($attrs.user, $element[0], {
	          showCount: false,
	          size: 'large'
	        });
	      });
	    }
	  };
	});


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	var STATUSES = {
	  all: {
	    icon: 'ion-ios-checkmark-outline',
	    label: 'All systems'
	  },
	  api: {
	    icon: 'ion-ios-gear-outline',
	    label: 'API'
	  },
	  db: {
	    icon: 'ion-ios-pie-outline',
	    label: 'DB'
	  },
	  web: {
	    icon: 'ion-ios-person-outline',
	    label: 'WEB'
	  },
	  arcgis: {
	    icon: 'ion-ios-world-outline',
	    label: 'OPTIM'
	  },
	  ftp: {
	    icon: 'ion-ios-cloud-upload-outline',
	    label: 'FTP'
	  }
	};
	app.filter('serviceDef', function() {
	  return function(key) {
	    return STATUSES[key];
	  };
	});
	app.directive('status', ["$rootScope", "$timeout", function($rootScope, $timeout) {
	  return {
	    restrict: 'E',
	    replace: true,
	    template: "<div class=\"status-board\">\n                <span ng-repeat=\"s in inferredStatuses\" class=\"{{s.status}}\">\n                    <span><i class=\"{{s.icon}}\"></i></span>\n                    <span>{{s.label}}</span>\n                </span>\n            </div>",
	    scope: {
	      items: '@',
	      statuses: '<'
	    },
	    link: function($scope, $element, $attrs) {
	      $scope.$watchCollection('statuses', (function(statuses) {
	        $scope.inferredStatuses = $scope.items.split(',').map((function(x) {
	          return x.trim().toLowerCase();
	        })).map((function(x) {
	          return STATUSES[x];
	        }));
	      }));
	    }
	  };
	}]);
	app.controller('StatusController', ["$scope", "$firebaseArray", function($scope, $firebaseArray) {
	  var ref = new Firebase("https://urbantz-status-page.firebaseio.com/event");
	  $scope.statuses = $firebaseArray(ref.orderByChild("date").limitToLast(100));
	  function update(statuses) {
	    console.log(statuses);
	    if ($scope.statuses && $scope.statuses.length) {
	      var reversed = angular.copy($scope.statuses).filter((function(s) {
	        return s.environment === ($scope.sandbox ? 'sandbox' : 'production').toLowerCase();
	      })).reverse();
	      Object.keys(STATUSES).forEach((function(key) {
	        var status = reversed.find((function(s) {
	          return s.service === key;
	        }));
	        if (!status || status.state === 'OK') {
	          STATUSES[key].status = 'ok';
	        } else {
	          STATUSES[key].status = status.state === 'ALARM' ? 'alert' : 'amber';
	        }
	      }));
	      if (STATUSES.api.status !== 'ok' || STATUSES.db.status !== 'ok') {
	        STATUSES.all.status = 'alert';
	      } else if (STATUSES.arcgis.status !== 'ok' || STATUSES.ftp.status !== 'ok') {
	        STATUSES.all.status = 'amber';
	      } else {
	        STATUSES.all.status = 'ok';
	      }
	      STATUSES.all.icon = {
	        ok: 'ion-ios-checkmark-empty',
	        amber: 'ion-ios-minus-empty',
	        alert: 'ion-ios-close-empty'
	      }[STATUSES.all.status];
	      $scope.filteredStatuses = reversed;
	    }
	  }
	  $scope.$watchCollection('statuses', update);
	  $scope.$watch('sandbox', update);
	}]);


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	function _initTalkTo() {
	  var Tawk_API = Tawk_API || {},
	      Tawk_LoadStart = new Date();
	  (function() {
	    var s1 = document.createElement("script"),
	        s0 = document.getElementsByTagName("script")[0];
	    s1.async = true;
	    s1.src = 'https://embed.tawk.to/57e79d37bb785b3a47caa287/default';
	    s1.charset = 'UTF-8';
	    s1.setAttribute('crossorigin', '*');
	    s0.parentNode.insertBefore(s1, s0);
	  })();
	}
	_initTalkTo();


/***/ }
/******/ ]);