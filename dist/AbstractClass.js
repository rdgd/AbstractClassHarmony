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
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AbstractClass = function () {
	  function AbstractClass(contract) {
	    _classCallCheck(this, AbstractClass);

	    // An abstract class does us no good if it is empty. Must have contract.
	    if (!contract) {
	      return false;
	    }

	    //  We must always have the following three pieces.
	    var implementation = Object.getPrototypeOf(this);
	    var definition = Object.getPrototypeOf(implementation);
	    var enforcer = Object.getPrototypeOf(definition);

	    /*
	      To minimize abstract class definition footprint,
	      we set these attributes for the developer.
	    */
	    definition.methods = !contract.methods ? [] : contract.methods;
	    definition.attributes = !contract.attributes ? [] : contract.attributes;

	    // Using the name of this class elsewhere is confusing
	    if (this.constructor.name === enforcer.constructor.name) {
	      throw 'You may not name your class "' + this.constructor.name + '"';
	    }

	    /*
	      The abstract class definition and this class cannot be instatiated directly
	      or in other words, the developer must use an appropriately named implementation
	    */
	    if (this.constructor === AbstractClass || this.constructor === definition.constructor) {
	      throw 'You may not instantiate an abstract class directly.';
	    }

	    /*
	      If any setup needs to be done before an integrity check, you may do so
	      by implementing the static methods preMethodCheck and preAttrCheck in your
	      class definition
	    */
	    if (definition.constructor.preMethodCheck) {
	      definition.constructor.preMethodCheck.call(Object.getPrototypeOf(this));
	    }
	    this.checkMethods();

	    if (definition.constructor.preAttrCheck) {
	      definition.constructor.preAttrCheck.call(Object.getPrototypeOf(this));
	    }
	    this.checkAttrs();
	  }

	  /*
	    Iterating over the abstract class definition's required methods, and checking
	    the implementation for them.
	  */


	  _createClass(AbstractClass, [{
	    key: 'checkMethods',
	    value: function checkMethods() {
	      var implemented = true;
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = Object.getPrototypeOf(this).methods[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var method = _step.value;

	          implemented = this[method];
	          if (!implemented) {
	            throw 'You must implement the method "' + method + '" specified by the abstract class';
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    }

	    /*
	      Abstract properties are not common, but I figured I would create the option
	      for them, should somebody find it useful. Kind of like C# without enforcing
	      a getter function.
	    */

	  }, {
	    key: 'checkAttrs',
	    value: function checkAttrs() {
	      var implemented = true;
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;

	      try {
	        for (var _iterator2 = Object.getPrototypeOf(this).attributes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var property = _step2.value;

	          implemented = Object.getPrototypeOf(this).hasOwnProperty(property);
	          if (!implemented) {
	            throw 'You must implement the property "' + property + '" specified by the abstract class';
	          }
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2.return) {
	            _iterator2.return();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }
	    }
	  }]);

	  return AbstractClass;
	}();

	exports.default = AbstractClass;

/***/ }
/******/ ]);