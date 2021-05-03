/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/favorites.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/domMethods.js":
/*!*********************************!*\
  !*** ./assets/js/domMethods.js ***!
  \*********************************/
/*! exports provided: renderArticles, createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderArticles\", function() { return renderArticles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony import */ var _indexedDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indexedDb */ \"./assets/js/indexedDb.js\");\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n // Clear the article container and insert placeholder articles\n\nfunction renderPlaceHolders() {\n  var articleContainer = document.querySelector(\".article-container\");\n  var placeholders = createPlaceholders();\n\n  while (articleContainer.firstChild) {\n    articleContainer.removeChild(articleContainer.firstChild);\n  }\n\n  articleContainer.appendChild(placeholders);\n} // Create and return 4 placeholder articles\n\n\nfunction createPlaceholders() {\n  var fragment = document.createDocumentFragment();\n\n  for (var i = 0; i < 4; i++) {\n    var placeholder = createPlaceholder();\n    fragment.appendChild(placeholder);\n  }\n\n  return fragment;\n} // Returns markup for a placeholder article\n\n\nfunction createPlaceholder() {\n  return createElement(\"div\", {\n    \"class\": \"article-skeleton\"\n  }, createElement(\"div\", {\n    \"class\": \"article-skeleton__header\"\n  }, createElement(\"div\", {\n    \"class\": \"article-skeleton__title\"\n  }), createElement(\"div\", {\n    \"class\": \"article-skeleton__published\"\n  })), createElement(\"div\", {\n    \"class\": \"article-skeleton__content\"\n  }, createElement(\"div\", {\n    \"class\": \"article-skeleton__image\"\n  }), createElement(\"div\", {\n    \"class\": \"article-skeleton__text\"\n  }), createElement(\"div\", {\n    \"class\": \"article-skeleton__text\"\n  }), createElement(\"div\", {\n    \"class\": \"article-skeleton__text\"\n  }), createElement(\"div\", {\n    \"class\": \"article-skeleton__text\"\n  }), createElement(\"div\", {\n    \"class\": \"article-skeleton__text\"\n  })));\n} // Empties article container and appends articles\n\n\nfunction renderArticles(articleData, loadPage) {\n  renderPlaceHolders();\n  var articleContainer = document.querySelector(\".article-container\");\n  var topicHeader = document.querySelector(\"header h1\");\n  var articles = createArticles(articleData, loadPage);\n\n  while (articleContainer.firstChild) {\n    articleContainer.removeChild(articleContainer.firstChild);\n  }\n\n  var _getParams = !(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),\n      query = _getParams.query;\n\n  topicHeader.textContent = query;\n  articleContainer.appendChild(articles);\n} // Return HTML for each article provided\n\nfunction createArticles(articleData, loadPage) {\n  var fragment = document.createDocumentFragment();\n  articleData.forEach(function (data) {\n    var article = createArticle(data, loadPage);\n    fragment.appendChild(article);\n  });\n  return fragment;\n} // Returns markup for a single article\n\n\nfunction createArticle(_ref, loadPage) {\n  var source = _ref.source,\n      author = _ref.author,\n      title = _ref.title,\n      description = _ref.description,\n      url = _ref.url,\n      urlToImage = _ref.urlToImage,\n      publishedAt = _ref.publishedAt,\n      _id = _ref._id,\n      favorite = _ref.favorite;\n  return createElement(\"article\", null, createElement(\"div\", {\n    \"class\": \"article-header\"\n  }, createElement(\"div\", {\n    \"class\": \"article-header__title\"\n  }, createElement(\"h3\", null, title)), createElement(\"div\", {\n    \"class\": \"article-header__published\"\n  }, createElement(\"p\", null, author), createElement(\"p\", null, !(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(publishedAt)))), createElement(\"div\", {\n    \"class\": \"article-container\"\n  }, createElement(\"p\", null, urlToImage && createElement(\"img\", {\n    src: urlToImage,\n    alt: title\n  }), description), createElement(\"p\", null, createElement(\"small\", null, \"Continue reading at \", createElement(\"a\", {\n    href: url,\n    target: \"_blank\",\n    rel: \"noopener noreferrer\"\n  }, source.name))), !favorite ? createElement(\"button\", {\n    \"class\": \"button button--primary\",\n    onclick: function onclick() {\n      Object(_indexedDb__WEBPACK_IMPORTED_MODULE_0__[\"useIndexedDb\"])(\"articles\", \"ArticleStore\", \"put\", {\n        source: source,\n        author: author,\n        title: title,\n        description: description,\n        url: url,\n        urlToImage: urlToImage,\n        publishedAt: publishedAt,\n        _id: _id\n      });\n      loadPage();\n    }\n  }, \"Save to Favorites\") : createElement(\"button\", {\n    \"class\": \"button button--danger\",\n    onclick: function onclick() {\n      Object(_indexedDb__WEBPACK_IMPORTED_MODULE_0__[\"useIndexedDb\"])(\"articles\", \"ArticleStore\", \"delete\", {\n        _id: _id\n      });\n      loadPage();\n    }\n  }, \"Remove from Favorites\")));\n} // Helper function for creating elements\n\n\nfunction createElement(type, attributes) {\n  var element = document.createElement(type);\n\n  if (attributes !== null && _typeof(attributes) === \"object\") {\n    for (var key in attributes) {\n      if (key.startsWith(\"on\")) {\n        var event = key.substring(2).toLowerCase();\n        var handler = attributes[key];\n        element.addEventListener(event, handler);\n      } else {\n        element.setAttribute(key, attributes[key]);\n      }\n    }\n  }\n\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  children.forEach(function (child) {\n    if (typeof child === \"boolean\" || child === null || child === undefined) {\n      return;\n    }\n\n    var node;\n\n    if (child instanceof HTMLElement) {\n      node = child;\n    } else {\n      node = document.createTextNode(child);\n    }\n\n    element.appendChild(node);\n  });\n  return element;\n}\n\n//# sourceURL=webpack:///./assets/js/domMethods.js?");

/***/ }),

/***/ "./assets/js/favorites.js":
/*!********************************!*\
  !*** ./assets/js/favorites.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _indexedDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indexedDb */ \"./assets/js/indexedDb.js\");\n/* harmony import */ var _domMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domMethods */ \"./assets/js/domMethods.js\");\n// @TODO Add remove from favorites functionality\n\n\n\nfunction loadPage() {\n  if (Object(_indexedDb__WEBPACK_IMPORTED_MODULE_0__[\"checkForIndexedDb\"])()) {\n    Object(_indexedDb__WEBPACK_IMPORTED_MODULE_0__[\"useIndexedDb\"])(\"articles\", \"ArticleStore\", \"get\").then(function (results) {\n      results.forEach(function (favorite) {\n        favorite.favorite = true;\n      });\n      Object(_domMethods__WEBPACK_IMPORTED_MODULE_1__[\"renderArticles\"])(results, loadPage);\n    });\n  }\n}\n\nloadPage();\n\n//# sourceURL=webpack:///./assets/js/favorites.js?");

/***/ }),

/***/ "./assets/js/indexedDb.js":
/*!********************************!*\
  !*** ./assets/js/indexedDb.js ***!
  \********************************/
/*! exports provided: checkForIndexedDb, useIndexedDb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkForIndexedDb\", function() { return checkForIndexedDb; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useIndexedDb\", function() { return useIndexedDb; });\nfunction checkForIndexedDb() {\n  if (!window.indexedDB) {\n    console.log(\"Your browser doesn't support a stable version of IndexedDB.\");\n    return false;\n  }\n\n  return true;\n}\nfunction useIndexedDb(databaseName, storeName, method, object) {\n  return new Promise(function (resolve, reject) {\n    var request = window.indexedDB.open(databaseName, 1);\n    var db, tx, store;\n\n    request.onupgradeneeded = function (e) {\n      var db = request.result;\n      db.createObjectStore(storeName, {\n        keyPath: \"_id\"\n      });\n    };\n\n    request.onerror = function (e) {\n      console.log(\"There was an error\");\n    };\n\n    request.onsuccess = function (e) {\n      db = request.result;\n      tx = db.transaction(storeName, \"readwrite\");\n      store = tx.objectStore(storeName);\n\n      db.onerror = function (e) {\n        console.log(\"error\");\n      };\n\n      if (method === \"put\") {\n        store.put(object);\n      } else if (method === \"get\") {\n        var all = store.getAll();\n\n        all.onsuccess = function () {\n          resolve(all.result);\n        };\n      } else if (method === \"delete\") {\n        store[\"delete\"](object._id);\n      }\n\n      tx.oncomplete = function () {\n        db.close();\n      };\n    };\n  });\n}\n\n//# sourceURL=webpack:///./assets/js/indexedDb.js?");

/***/ })

/******/ });