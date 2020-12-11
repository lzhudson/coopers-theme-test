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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lozad/dist/lozad.min.js":
/*!**********************************************!*\
  !*** ./node_modules/lozad/dist/lozad.min.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! lozad.js - v1.16.0 - 2020-09-06
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2020 Apoorv Saxena; Licensed MIT */
!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  "use strict";
  /**
     * Detect IE browser
     * @const {boolean}
     * @private
     */

  var g = "undefined" != typeof document && document.documentMode,
      f = {
    rootMargin: "0px",
    threshold: 0,
    load: function load(t) {
      if ("picture" === t.nodeName.toLowerCase()) {
        var e = t.querySelector("img"),
            r = !1;
        null === e && (e = document.createElement("img"), r = !0), g && t.getAttribute("data-iesrc") && (e.src = t.getAttribute("data-iesrc")), t.getAttribute("data-alt") && (e.alt = t.getAttribute("data-alt")), r && t.append(e);
      }

      if ("video" === t.nodeName.toLowerCase() && !t.getAttribute("data-src") && t.children) {
        for (var a = t.children, o = void 0, i = 0; i <= a.length - 1; i++) {
          (o = a[i].getAttribute("data-src")) && (a[i].src = o);
        }

        t.load();
      }

      t.getAttribute("data-poster") && (t.poster = t.getAttribute("data-poster")), t.getAttribute("data-src") && (t.src = t.getAttribute("data-src")), t.getAttribute("data-srcset") && t.setAttribute("srcset", t.getAttribute("data-srcset"));
      var n = ",";
      if (t.getAttribute("data-background-delimiter") && (n = t.getAttribute("data-background-delimiter")), t.getAttribute("data-background-image")) t.style.backgroundImage = "url('" + t.getAttribute("data-background-image").split(n).join("'),url('") + "')";else if (t.getAttribute("data-background-image-set")) {
        var d = t.getAttribute("data-background-image-set").split(n),
            u = d[0].substr(0, d[0].indexOf(" ")) || d[0]; // Substring before ... 1x

        u = -1 === u.indexOf("url(") ? "url(" + u + ")" : u, 1 === d.length ? t.style.backgroundImage = u : t.setAttribute("style", (t.getAttribute("style") || "") + "background-image: " + u + "; background-image: -webkit-image-set(" + d + "); background-image: image-set(" + d + ")");
      }
      t.getAttribute("data-toggle-class") && t.classList.toggle(t.getAttribute("data-toggle-class"));
    },
    loaded: function loaded() {}
  };

  function A(t) {
    t.setAttribute("data-loaded", !0);
  }

  var m = function m(t) {
    return "true" === t.getAttribute("data-loaded");
  },
      v = function v(t) {
    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : document;
    return t instanceof Element ? [t] : t instanceof NodeList ? t : e.querySelectorAll(t);
  };

  return function () {
    var r,
        a,
        o = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ".lozad",
        t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
        e = Object.assign({}, f, t),
        i = e.root,
        n = e.rootMargin,
        d = e.threshold,
        u = e.load,
        g = e.loaded,
        s = void 0;
    "undefined" != typeof window && window.IntersectionObserver && (s = new IntersectionObserver((r = u, a = g, function (t, e) {
      t.forEach(function (t) {
        (0 < t.intersectionRatio || t.isIntersecting) && (e.unobserve(t.target), m(t.target) || (r(t.target), A(t.target), a(t.target)));
      });
    }), {
      root: i,
      rootMargin: n,
      threshold: d
    }));

    for (var c, l = v(o, i), b = 0; b < l.length; b++) {
      (c = l[b]).getAttribute("data-placeholder-background") && (c.style.background = c.getAttribute("data-placeholder-background"));
    }

    return {
      observe: function observe() {
        for (var t = v(o, i), e = 0; e < t.length; e++) {
          m(t[e]) || (s ? s.observe(t[e]) : (u(t[e]), A(t[e]), g(t[e])));
        }
      },
      triggerLoad: function triggerLoad(t) {
        m(t) || (u(t), A(t), g(t));
      },
      observer: s
    };
  };
});

/***/ }),

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/slider */ "./src/js/components/slider.js");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_slider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_lazy_load_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/lazy-load-images */ "./src/js/components/lazy-load-images.js");
/* harmony import */ var _components_lazy_load_images__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_lazy_load_images__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lozad */ "./node_modules/lozad/dist/lozad.min.js");
/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lozad__WEBPACK_IMPORTED_MODULE_2__);



var el = document.querySelectorAll('img');
var observer = lozad__WEBPACK_IMPORTED_MODULE_2___default()(el, {
  rootMargin: '10px 0px',
  // syntax similar to that of CSS Margin
  threshold: 0.1,
  // ratio of element convergence
  enableAutoReload: true // it will reload the new image when validating attributes changes

});
observer.observe();
console.log('Lazy Load');
console.log('bundle');

/***/ }),

/***/ "./src/js/components/lazy-load-images.js":
/*!***********************************************!*\
  !*** ./src/js/components/lazy-load-images.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/js/components/slider.js":
/*!*************************************!*\
  !*** ./src/js/components/slider.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

console.log('slider');

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/js/bundle.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Hudson\Local Sites\cooperstheme\app\public\wp-content\themes\coopers\src\js\bundle.js */"./src/js/bundle.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvemFkL2Rpc3QvbG96YWQubWluLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc2xpZGVyLmpzIl0sIm5hbWVzIjpbInQiLCJlIiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmluZSIsImciLCJkb2N1bWVudCIsImRvY3VtZW50TW9kZSIsImYiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwibG9hZCIsIm5vZGVOYW1lIiwidG9Mb3dlckNhc2UiLCJxdWVyeVNlbGVjdG9yIiwiciIsImNyZWF0ZUVsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJzcmMiLCJhbHQiLCJhcHBlbmQiLCJjaGlsZHJlbiIsImEiLCJvIiwiaSIsImxlbmd0aCIsInBvc3RlciIsInNldEF0dHJpYnV0ZSIsIm4iLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsInNwbGl0Iiwiam9pbiIsImQiLCJ1Iiwic3Vic3RyIiwiaW5kZXhPZiIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImxvYWRlZCIsIkEiLCJtIiwidiIsImFyZ3VtZW50cyIsIkVsZW1lbnQiLCJOb2RlTGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJPYmplY3QiLCJhc3NpZ24iLCJyb290IiwicyIsIndpbmRvdyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZm9yRWFjaCIsImludGVyc2VjdGlvblJhdGlvIiwiaXNJbnRlcnNlY3RpbmciLCJ1bm9ic2VydmUiLCJ0YXJnZXQiLCJjIiwibCIsImIiLCJiYWNrZ3JvdW5kIiwib2JzZXJ2ZSIsInRyaWdnZXJMb2FkIiwib2JzZXJ2ZXIiLCJlbCIsImxvemFkIiwiZW5hYmxlQXV0b1JlbG9hZCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNB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QixFQUFFLElBSE8sQ0FHRjs7QUFIRSxDQUFMLENBQXRCO0FBS0FILFFBQVEsQ0FBQ0YsT0FBVDtBQUNBTSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0FELE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBRCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLyohIGxvemFkLmpzIC0gdjEuMTYuMCAtIDIwMjAtMDktMDZcbiogaHR0cHM6Ly9naXRodWIuY29tL0Fwb29ydlNheGVuYS9sb3phZC5qc1xuKiBDb3B5cmlnaHQgKGMpIDIwMjAgQXBvb3J2IFNheGVuYTsgTGljZW5zZWQgTUlUICovXG4hZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKTp0LmxvemFkPWUoKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO1xuLyoqXG4gICAqIERldGVjdCBJRSBicm93c2VyXG4gICAqIEBjb25zdCB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovdmFyIGc9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50JiZkb2N1bWVudC5kb2N1bWVudE1vZGUsZj17cm9vdE1hcmdpbjpcIjBweFwiLHRocmVzaG9sZDowLGxvYWQ6ZnVuY3Rpb24odCl7aWYoXCJwaWN0dXJlXCI9PT10Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpe3ZhciBlPXQucXVlcnlTZWxlY3RvcihcImltZ1wiKSxyPSExO251bGw9PT1lJiYoZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpLHI9ITApLGcmJnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZXNyY1wiKSYmKGUuc3JjPXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZXNyY1wiKSksdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFsdFwiKSYmKGUuYWx0PXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1hbHRcIikpLHImJnQuYXBwZW5kKGUpfWlmKFwidmlkZW9cIj09PXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSYmIXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zcmNcIikmJnQuY2hpbGRyZW4pe2Zvcih2YXIgYT10LmNoaWxkcmVuLG89dm9pZCAwLGk9MDtpPD1hLmxlbmd0aC0xO2krKykobz1hW2ldLmdldEF0dHJpYnV0ZShcImRhdGEtc3JjXCIpKSYmKGFbaV0uc3JjPW8pO3QubG9hZCgpfXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wb3N0ZXJcIikmJih0LnBvc3Rlcj10LmdldEF0dHJpYnV0ZShcImRhdGEtcG9zdGVyXCIpKSx0LmdldEF0dHJpYnV0ZShcImRhdGEtc3JjXCIpJiYodC5zcmM9dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNyY1wiKSksdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNyY3NldFwiKSYmdC5zZXRBdHRyaWJ1dGUoXCJzcmNzZXRcIix0LmdldEF0dHJpYnV0ZShcImRhdGEtc3Jjc2V0XCIpKTt2YXIgbj1cIixcIjtpZih0LmdldEF0dHJpYnV0ZShcImRhdGEtYmFja2dyb3VuZC1kZWxpbWl0ZXJcIikmJihuPXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1iYWNrZ3JvdW5kLWRlbGltaXRlclwiKSksdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJhY2tncm91bmQtaW1hZ2VcIikpdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9XCJ1cmwoJ1wiK3QuZ2V0QXR0cmlidXRlKFwiZGF0YS1iYWNrZ3JvdW5kLWltYWdlXCIpLnNwbGl0KG4pLmpvaW4oXCInKSx1cmwoJ1wiKStcIicpXCI7ZWxzZSBpZih0LmdldEF0dHJpYnV0ZShcImRhdGEtYmFja2dyb3VuZC1pbWFnZS1zZXRcIikpe3ZhciBkPXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1iYWNrZ3JvdW5kLWltYWdlLXNldFwiKS5zcGxpdChuKSx1PWRbMF0uc3Vic3RyKDAsZFswXS5pbmRleE9mKFwiIFwiKSl8fGRbMF07Ly8gU3Vic3RyaW5nIGJlZm9yZSAuLi4gMXhcbnU9LTE9PT11LmluZGV4T2YoXCJ1cmwoXCIpP1widXJsKFwiK3UrXCIpXCI6dSwxPT09ZC5sZW5ndGg/dC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9dTp0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsKHQuZ2V0QXR0cmlidXRlKFwic3R5bGVcIil8fFwiXCIpK1wiYmFja2dyb3VuZC1pbWFnZTogXCIrdStcIjsgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1pbWFnZS1zZXQoXCIrZCtcIik7IGJhY2tncm91bmQtaW1hZ2U6IGltYWdlLXNldChcIitkK1wiKVwiKX10LmdldEF0dHJpYnV0ZShcImRhdGEtdG9nZ2xlLWNsYXNzXCIpJiZ0LmNsYXNzTGlzdC50b2dnbGUodC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRvZ2dsZS1jbGFzc1wiKSl9LGxvYWRlZDpmdW5jdGlvbigpe319O2Z1bmN0aW9uIEEodCl7dC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWxvYWRlZFwiLCEwKX12YXIgbT1mdW5jdGlvbih0KXtyZXR1cm5cInRydWVcIj09PXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1sb2FkZWRcIil9LHY9ZnVuY3Rpb24odCl7dmFyIGU9MTxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOmRvY3VtZW50O3JldHVybiB0IGluc3RhbmNlb2YgRWxlbWVudD9bdF06dCBpbnN0YW5jZW9mIE5vZGVMaXN0P3Q6ZS5xdWVyeVNlbGVjdG9yQWxsKHQpfTtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgcixhLG89MDxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOlwiLmxvemFkXCIsdD0xPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e30sZT1PYmplY3QuYXNzaWduKHt9LGYsdCksaT1lLnJvb3Qsbj1lLnJvb3RNYXJnaW4sZD1lLnRocmVzaG9sZCx1PWUubG9hZCxnPWUubG9hZGVkLHM9dm9pZCAwO1widW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJndpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciYmKHM9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChyPXUsYT1nLGZ1bmN0aW9uKHQsZSl7dC5mb3JFYWNoKGZ1bmN0aW9uKHQpeygwPHQuaW50ZXJzZWN0aW9uUmF0aW98fHQuaXNJbnRlcnNlY3RpbmcpJiYoZS51bm9ic2VydmUodC50YXJnZXQpLG0odC50YXJnZXQpfHwocih0LnRhcmdldCksQSh0LnRhcmdldCksYSh0LnRhcmdldCkpKX0pfSkse3Jvb3Q6aSxyb290TWFyZ2luOm4sdGhyZXNob2xkOmR9KSk7Zm9yKHZhciBjLGw9dihvLGkpLGI9MDtiPGwubGVuZ3RoO2IrKykoYz1sW2JdKS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBsYWNlaG9sZGVyLWJhY2tncm91bmRcIikmJihjLnN0eWxlLmJhY2tncm91bmQ9Yy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBsYWNlaG9sZGVyLWJhY2tncm91bmRcIikpO3JldHVybntvYnNlcnZlOmZ1bmN0aW9uKCl7Zm9yKHZhciB0PXYobyxpKSxlPTA7ZTx0Lmxlbmd0aDtlKyspbSh0W2VdKXx8KHM/cy5vYnNlcnZlKHRbZV0pOih1KHRbZV0pLEEodFtlXSksZyh0W2VdKSkpfSx0cmlnZ2VyTG9hZDpmdW5jdGlvbih0KXttKHQpfHwodSh0KSxBKHQpLGcodCkpfSxvYnNlcnZlcjpzfX19KTtcbiIsImltcG9ydCAnLi9jb21wb25lbnRzL3NsaWRlcic7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2xhenktbG9hZC1pbWFnZXMnO1xyXG5pbXBvcnQgbG96YWQgZnJvbSAnbG96YWQnO1xyXG5jb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpO1xyXG5jb25zdCBvYnNlcnZlciA9IGxvemFkKGVsLCB7XHJcbiAgcm9vdE1hcmdpbjogJzEwcHggMHB4JywgLy8gc3ludGF4IHNpbWlsYXIgdG8gdGhhdCBvZiBDU1MgTWFyZ2luXHJcbiAgdGhyZXNob2xkOiAwLjEsIC8vIHJhdGlvIG9mIGVsZW1lbnQgY29udmVyZ2VuY2VcclxuICBlbmFibGVBdXRvUmVsb2FkOiB0cnVlIC8vIGl0IHdpbGwgcmVsb2FkIHRoZSBuZXcgaW1hZ2Ugd2hlbiB2YWxpZGF0aW5nIGF0dHJpYnV0ZXMgY2hhbmdlc1xyXG59KTtcclxub2JzZXJ2ZXIub2JzZXJ2ZSgpO1xyXG5jb25zb2xlLmxvZygnTGF6eSBMb2FkJyk7XHJcbmNvbnNvbGUubG9nKCdidW5kbGUnKTsiLCJjb25zb2xlLmxvZygnc2xpZGVyJyk7Il0sInNvdXJjZVJvb3QiOiIifQ==