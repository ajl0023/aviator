/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@splidejs/splide/dist/js/splide.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@splidejs/splide/dist/js/splide.esm.js ***!
  \*************************************************************/
/***/ ((module) => {

/*!
 * Splide.js
 * Version  : 2.4.20
 * License  : MIT
 * Copyright: 2020 Naotoshi Fujita
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 311:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_627__) => {

// ESM COMPAT FLAG
__nested_webpack_require_627__.r(__webpack_exports__);

// EXPORTS
__nested_webpack_require_627__.d(__webpack_exports__, {
  "default": () => /* binding */ module_Splide
});

// NAMESPACE OBJECT: ./src/js/constants/states.js
var states_namespaceObject = {};
__nested_webpack_require_627__.r(states_namespaceObject);
__nested_webpack_require_627__.d(states_namespaceObject, {
  "CREATED": () => CREATED,
  "DESTROYED": () => DESTROYED,
  "IDLE": () => IDLE,
  "MOUNTED": () => MOUNTED,
  "MOVING": () => MOVING
});

;// CONCATENATED MODULE: ./src/js/core/event.js
/**
 * The function for providing an Event object simply managing events.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * The function for providing an Event object simply managing events.
 */
/* harmony default export */ const core_event = (function () {
  /**
   * Store all event data.
   *
   * @type {Array}
   */
  var data = [];
  var Event = {
    /**
     * Subscribe the given event(s).
     *
     * @param {string}   events  - An event name. Use space to separate multiple events.
     *                             Also, namespace is accepted by dot, such as 'resize.{namespace}'.
     * @param {function} handler - A callback function.
     * @param {Element}  elm     - Optional. Native event will be listened to when this arg is provided.
     * @param {Object}   options - Optional. Options for addEventListener.
     */
    on: function on(events, handler, elm, options) {
      if (elm === void 0) {
        elm = null;
      }

      if (options === void 0) {
        options = {};
      }

      events.split(' ').forEach(function (event) {
        if (elm) {
          elm.addEventListener(event, handler, options);
        }

        data.push({
          event: event,
          handler: handler,
          elm: elm,
          options: options
        });
      });
    },

    /**
     * Unsubscribe the given event(s).
     *
     * @param {string}  events - A event name or names split by space.
     * @param {Element} elm    - Optional. removeEventListener() will be called when this arg is provided.
     */
    off: function off(events, elm) {
      if (elm === void 0) {
        elm = null;
      }

      events.split(' ').forEach(function (event) {
        data = data.filter(function (item) {
          if (item && item.event === event && item.elm === elm) {
            unsubscribe(item);
            return false;
          }

          return true;
        });
      });
    },

    /**
     * Emit an event.
     * This method is only for custom events.
     *
     * @param {string}  event - An event name.
     * @param {*}       args  - Any number of arguments passed to handlers.
     */
    emit: function emit(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      data.forEach(function (item) {
        if (!item.elm && item.event.split('.')[0] === event) {
          item.handler.apply(item, args);
        }
      });
    },

    /**
     * Clear event data.
     */
    destroy: function destroy() {
      data.forEach(unsubscribe);
      data = [];
    }
  };
  /**
   * Remove the registered event listener.
   *
   * @param {Object} item - An object containing event data.
   */

  function unsubscribe(item) {
    if (item.elm) {
      item.elm.removeEventListener(item.event, item.handler, item.options);
    }
  }

  return Event;
});
;// CONCATENATED MODULE: ./src/js/core/state.js
/**
 * The function providing a super simple state system.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * The function providing a super simple state system.
 *
 * @param {string|number} initialState - Provide the initial state value.
 */
/* harmony default export */ const state = (function (initialState) {
  /**
   * Store the current state.
   *
   * @type {string|number}
   */
  var curr = initialState;
  return {
    /**
     * Change state.
     *
     * @param {string|number} state - A new state.
     */
    set: function set(state) {
      curr = state;
    },

    /**
     * Verify if the current state is given one or not.
     *
     * @param {string|number} state - A state name to be verified.
     *
     * @return {boolean} - True if the current state is the given one.
     */
    is: function is(state) {
      return state === curr;
    }
  };
});
;// CONCATENATED MODULE: ./src/js/utils/object.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Some utility functions related with Object, supporting IE.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */
var keys = Object.keys;
/**
 * Iterate an object like Array.forEach.
 * IE doesn't support forEach of HTMLCollection.
 *
 * @param {Object}    obj       - An object.
 * @param {function}  callback  - A function handling each value. Arguments are value, property and index.
 */

function each(obj, callback) {
  keys(obj).some(function (key, index) {
    return callback(obj[key], key, index);
  });
}
/**
 * Return values of the given object as an array.
 * IE doesn't support Object.values.
 *
 * @param {Object} obj - An object.
 *
 * @return {Array} - An array containing all values of the given object.
 */

function values(obj) {
  return keys(obj).map(function (key) {
    return obj[key];
  });
}
/**
 * Check if the given subject is object or not.
 *
 * @param {*} subject - A subject to be verified.
 *
 * @return {boolean} - True if object, false otherwise.
 */

function isObject(subject) {
  return typeof subject === 'object';
}
/**
 * Merge two objects deeply.
 *
 * @param {Object} to   - An object where "from" is merged.
 * @param {Object} from - An object merged to "to".
 *
 * @return {Object} - A merged object.
 */

function merge(_ref, from) {
  var to = _extends({}, _ref);

  each(from, function (value, key) {
    if (isObject(value)) {
      if (!isObject(to[key])) {
        to[key] = {};
      }

      to[key] = merge(to[key], value);
    } else {
      to[key] = value;
    }
  });
  return to;
}
/**
 * Assign all properties "from" to "to" object.
 *
 * @param {Object} to   - An object where properties are assigned.
 * @param {Object} from - An object whose properties are assigned to "to".
 *
 * @return {Object} - An assigned object.
 */

function object_assign(to, from) {
  keys(from).forEach(function (key) {
    if (!to[key]) {
      Object.defineProperty(to, key, Object.getOwnPropertyDescriptor(from, key));
    }
  });
  return to;
}
;// CONCATENATED MODULE: ./src/js/utils/utils.js
/**
 * A package of some miscellaneous utility functions.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Convert the given value to array.
 *
 * @param {*} value - Any value.
 *
 * @return {*[]} - Array containing the given value.
 */

function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
/**
 * Check if the given value is between min and max.
 * Min will be returned when the value is less than min or max will do when greater than max.
 *
 * @param {number} value - A number to be checked.
 * @param {number} m1    - Minimum or maximum number.
 * @param {number} m2    - Maximum or minimum number.
 *
 * @return {number} - A value itself, min or max.
 */

function between(value, m1, m2) {
  return Math.min(Math.max(value, m1 > m2 ? m2 : m1), m1 > m2 ? m1 : m2);
}
/**
 * The sprintf method with minimum functionality.
 *
 * @param {string}       format       - The string format.
 * @param {string|Array} replacements - Replacements accepting multiple arguments.
 *
 * @returns {string} - Converted string.
 */

function sprintf(format, replacements) {
  var i = 0;
  return format.replace(/%s/g, function () {
    return toArray(replacements)[i++];
  });
}
/**
 * Append px unit to the given subject if necessary.
 *
 * @param {number|string} value - A value that may not include an unit.
 *
 * @return {string} - If the value is string, return itself.
 *                    If number, do value + "px". An empty string, otherwise.
 */

function unit(value) {
  var type = typeof value;

  if (type === 'number' && value > 0) {
    return parseFloat(value) + 'px';
  }

  return type === 'string' ? value : '';
}
/**
 * Pad start with 0.
 *
 * @param {number} number - A number to be filled with 0.
 *
 * @return {string|number} - Padded number.
 */

function pad(number) {
  return number < 10 ? '0' + number : number;
}
/**
 * Convert the given value to pixel.
 *
 * @param {Element}       root  - Root element where a dummy div is appended.
 * @param {string|number} value - CSS value to be converted, such as 10rem.
 *
 * @return {number} - Pixel.
 */

function toPixel(root, value) {
  if (typeof value === 'string') {
    var div = create('div', {});
    applyStyle(div, {
      position: 'absolute',
      width: value
    });
    append(root, div);
    value = div.clientWidth;
    dom_remove(div);
  }

  return +value || 0;
}
;// CONCATENATED MODULE: ./src/js/utils/dom.js
/**
 * Some utility functions related with DOM.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * Find the first element matching the given selector.
 * Be aware that all selectors after a space are ignored.
 *
 * @param {Element|Node}  elm       - An ancestor element.
 * @param {string}        selector  - DOMString.
 *
 * @return {Element|null} - A found element or null.
 */

function find(elm, selector) {
  return elm ? elm.querySelector(selector.split(' ')[0]) : null;
}
/**
 * Find a first child having the given tag or class name.
 *
 * @param {Element} parent         - A parent element.
 * @param {string}  tagOrClassName - A tag or class name.
 *
 * @return {Element|undefined} - A found element on success or undefined on failure.
 */

function child(parent, tagOrClassName) {
  return children(parent, tagOrClassName)[0];
}
/**
 * Return chile elements that matches the provided tag or class name.
 *
 * @param {Element} parent         - A parent element.
 * @param {string}  tagOrClassName - A tag or class name.
 *
 * @return {Element[]} - Found elements.
 */

function children(parent, tagOrClassName) {
  if (parent) {
    return values(parent.children).filter(function (child) {
      return hasClass(child, tagOrClassName.split(' ')[0]) || child.tagName === tagOrClassName;
    });
  }

  return [];
}
/**
 * Create an element with some optional attributes.
 *
 * @param {string} tag   - A tag name.
 * @param {Object} attrs - An object any attribute pairs of name and value.
 *
 * @return {Element} - A created element.
 */

function create(tag, attrs) {
  var elm = document.createElement(tag);
  each(attrs, function (value, key) {
    return setAttribute(elm, key, value);
  });
  return elm;
}
/**
 * Convert HTML string to DOM node.
 *
 * @param {string} html - HTML string.
 *
 * @return {Node} - A created node.
 */

function domify(html) {
  var div = create('div', {});
  div.innerHTML = html;
  return div.firstChild;
}
/**
 * Remove a given element from a DOM tree.
 *
 * @param {Element|Element[]} elms - Element(s) to be removed.
 */

function dom_remove(elms) {
  toArray(elms).forEach(function (elm) {
    if (elm) {
      var parent = elm.parentElement;
      parent && parent.removeChild(elm);
    }
  });
}
/**
 * Append a child to a given element.
 *
 * @param {Element} parent - A parent element.
 * @param {Element} child  - An element to be appended.
 */

function append(parent, child) {
  if (parent) {
    parent.appendChild(child);
  }
}
/**
 * Insert an element before the reference element.
 *
 * @param {Element|Node} ref - A reference element.
 * @param {Element}      elm - An element to be inserted.
 */

function before(elm, ref) {
  if (elm && ref) {
    var parent = ref.parentElement;
    parent && parent.insertBefore(elm, ref);
  }
}
/**
 * Apply styles to the given element.
 *
 * @param {Element} elm     - An element where styles are applied.
 * @param {Object}  styles  - Object containing styles.
 */

function applyStyle(elm, styles) {
  if (elm) {
    each(styles, function (value, prop) {
      if (value !== null) {
        elm.style[prop] = value;
      }
    });
  }
}
/**
 * Add or remove classes to/from the element.
 * This function is for internal usage.
 *
 * @param {Element}         elm     - An element where classes are added.
 * @param {string|string[]} classes - Class names being added.
 * @param {boolean}         remove  - Whether to remove or add classes.
 */

function addOrRemoveClasses(elm, classes, remove) {
  if (elm) {
    toArray(classes).forEach(function (name) {
      if (name) {
        elm.classList[remove ? 'remove' : 'add'](name);
      }
    });
  }
}
/**
 * Add classes to the element.
 *
 * @param {Element}          elm     - An element where classes are added.
 * @param {string|string[]}  classes - Class names being added.
 */


function addClass(elm, classes) {
  addOrRemoveClasses(elm, classes, false);
}
/**
 * Remove a class from the element.
 *
 * @param {Element}         elm     - An element where classes are removed.
 * @param {string|string[]} classes - A class name being removed.
 */

function removeClass(elm, classes) {
  addOrRemoveClasses(elm, classes, true);
}
/**
 * Verify if the provided element has the class or not.
 *
 * @param {Element} elm       - An element.
 * @param {string}  className - A class name.
 *
 * @return {boolean} - True if the element has the class or false if not.
 */

function hasClass(elm, className) {
  return !!elm && elm.classList.contains(className);
}
/**
 * Set attribute to the given element.
 *
 * @param {Element}                 elm   - An element where an attribute is assigned.
 * @param {string}                  name  - Attribute name.
 * @param {string|number|boolean}   value - Attribute value.
 */

function setAttribute(elm, name, value) {
  if (elm) {
    elm.setAttribute(name, value);
  }
}
/**
 * Get attribute from the given element.
 *
 * @param {Element} elm  - An element where an attribute is assigned.
 * @param {string}  name - Attribute name.
 *
 * @return {string} - The value of the given attribute if available. An empty string if not.
 */

function getAttribute(elm, name) {
  return elm ? elm.getAttribute(name) : '';
}
/**
 * Remove attribute from the given element.
 *
 * @param {Element|Element[]} elms  - An element where an attribute is removed.
 * @param {string|string[]}      names - Attribute name.
 */

function removeAttribute(elms, names) {
  toArray(names).forEach(function (name) {
    toArray(elms).forEach(function (elm) {
      return elm && elm.removeAttribute(name);
    });
  });
}
/**
 * Return the Rect object of the provided object.
 *
 * @param {Element} elm - An element.
 *
 * @return {ClientRect|DOMRect} - A rect object.
 */

function getRect(elm) {
  return elm.getBoundingClientRect();
}
/**
 * Trigger the given callback after all images contained by the element are loaded.
 *
 * @param {Element}  elm      - Element that may contain images.
 * @param {Function} callback - Callback function fired right after all images are loaded.
 */

function loaded(elm, callback) {
  var images = elm.querySelectorAll('img');
  var length = images.length;

  if (length) {
    var count = 0;
    each(images, function (img) {
      img.onload = img.onerror = function () {
        if (++count === length) {
          callback();
        }
      };
    });
  } else {
    // Trigger the callback immediately if there is no image.
    callback();
  }
}
;// CONCATENATED MODULE: ./src/js/constants/types.js
/**
 * Export slider types.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Normal slider.
 *
 * @type {string}
 */
var SLIDE = 'slide';
/**
 * Loop after the last slide and before the first one.
 *
 * @type {string}
 */

var LOOP = 'loop';
/**
 * The track doesn't move.
 *
 * @type {string}
 */

var FADE = 'fade';
;// CONCATENATED MODULE: ./src/js/transitions/slide/index.js
/**
 * The component for general slide effect transition.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * The component for general slide effect transition.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const slide = (function (Splide, Components) {
  /**
   * Hold the list element.
   *
   * @type {Element}
   */
  var list;
  /**
   * Hold the onEnd callback function.
   *
   * @type {function}
   */

  var endCallback;
  return {
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      list = Components.Elements.list;
      Splide.on('transitionend', function (e) {
        if (e.target === list && endCallback) {
          endCallback();
        }
      }, list);
    },

    /**
     * Start transition.
     *
     * @param {number}   destIndex - Destination slide index that might be clone's.
     * @param {number}   newIndex  - New index.
     * @param {number}   prevIndex - Previous index.
     * @param {Object}   coord     - Destination coordinates.
     * @param {function} done      - Callback function must be invoked when transition is completed.
     */
    start: function start(destIndex, newIndex, prevIndex, coord, done) {
      var options = Splide.options;
      var edgeIndex = Components.Controller.edgeIndex;
      var speed = options.speed;
      endCallback = done;

      if (Splide.is(SLIDE)) {
        if (prevIndex === 0 && newIndex >= edgeIndex || prevIndex >= edgeIndex && newIndex === 0) {
          speed = options.rewindSpeed || speed;
        }
      }

      applyStyle(list, {
        transition: "transform " + speed + "ms " + options.easing,
        transform: "translate(" + coord.x + "px," + coord.y + "px)"
      });
    }
  };
});
;// CONCATENATED MODULE: ./src/js/transitions/fade/index.js
/**
 * The component for fade transition.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * The component for fade transition.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const fade = (function (Splide, Components) {
  var Fade = {
    /**
     * Called when the component is mounted.
     * Apply transition style to the first slide.
     */
    mount: function mount() {
      apply(Splide.index);
    },

    /**
     * Start transition.
     *
     * @param {number}    destIndex - Destination slide index that might be clone's.
     * @param {number}    newIndex  - New index.
     * @param {number}    prevIndex - Previous index.
     * @param {Object}    coord     - Destination coordinates.
     * @param {function}  done      - Callback function must be invoked when transition is completed.
     */
    start: function start(destIndex, newIndex, prevIndex, coord, done) {
      var track = Components.Elements.track;
      applyStyle(track, {
        height: unit(track.clientHeight)
      });
      apply(newIndex);
      setTimeout(function () {
        done();
        applyStyle(track, {
          height: ''
        });
      });
    }
  };
  /**
   * Apply transition style to the slide specified by the given index.
   *
   * @param {number} index - A slide index.
   */

  function apply(index) {
    var options = Splide.options;
    applyStyle(Components.Elements.slides[index], {
      transition: "opacity " + options.speed + "ms " + options.easing
    });
  }

  return Fade;
});
;// CONCATENATED MODULE: ./src/js/transitions/index.js
/**
 * Export transition components.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


;// CONCATENATED MODULE: ./src/js/core/composer.js
/**
 * Provide a function for composing components.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * Compose components.
 *
 * @param {Splide}   Splide     - Splide instance.
 * @param {Object}   Components - Additional components.
 * @param {function} Transition - Change component for transition.
 *
 * @return {Object} - An object containing all components.
 */

function compose(Splide, Components, Transition) {
  var components = {};
  each(Components, function (Component, name) {
    components[name] = Component(Splide, components, name.toLowerCase());
  });

  if (!Transition) {
    Transition = Splide.is(FADE) ? fade : slide;
  }

  components.Transition = Transition(Splide, components);
  return components;
}
;// CONCATENATED MODULE: ./src/js/utils/error.js
/**
 * Utility functions for outputting logs.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Prefix of an error massage.
 *
 * @type {string}
 */
var MESSAGE_PREFIX = '[SPLIDE]';
/**
 * Display an error message on the browser console.
 *
 * @param {string} message - An error message.
 */

function error(message) {
  console.error(MESSAGE_PREFIX + " " + message);
}
/**
 * Check existence of the given object and throw an error if it doesn't.
 *
 * @throws {Error}
 *
 * @param {*}      subject - A subject to be confirmed.
 * @param {string} message - An error message.
 */

function exist(subject, message) {
  if (!subject) {
    throw new Error(message);
  }
}
;// CONCATENATED MODULE: ./src/js/constants/classes.js
/**
 * Export class names.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * A root class name.
 *
 * @type {string}
 */
var ROOT = 'splide';
/**
 * The definition table of all classes for elements.
 * They might be modified by options.
 *
 * @type {Object}
 */

var ELEMENT_CLASSES = {
  root: ROOT,
  slider: ROOT + "__slider",
  track: ROOT + "__track",
  list: ROOT + "__list",
  slide: ROOT + "__slide",
  container: ROOT + "__slide__container",
  arrows: ROOT + "__arrows",
  arrow: ROOT + "__arrow",
  prev: ROOT + "__arrow--prev",
  next: ROOT + "__arrow--next",
  pagination: ROOT + "__pagination",
  page: ROOT + "__pagination__page",
  clone: ROOT + "__slide--clone",
  progress: ROOT + "__progress",
  bar: ROOT + "__progress__bar",
  autoplay: ROOT + "__autoplay",
  play: ROOT + "__play",
  pause: ROOT + "__pause",
  spinner: ROOT + "__spinner",
  sr: ROOT + "__sr"
};
/**
 * Definitions of status classes.
 *
 * @type {Object}
 */

var STATUS_CLASSES = {
  active: 'is-active',
  visible: 'is-visible',
  loading: 'is-loading'
};
;// CONCATENATED MODULE: ./src/js/constants/i18n.js
/**
 * Export i18n texts as object.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Texts for i18n.
 *
 * @type {Object}
 */
var I18N = {
  prev: 'Previous slide',
  next: 'Next slide',
  first: 'Go to first slide',
  last: 'Go to last slide',
  slideX: 'Go to slide %s',
  pageX: 'Go to page %s',
  play: 'Start autoplay',
  pause: 'Pause autoplay'
};
;// CONCATENATED MODULE: ./src/js/constants/defaults.js
/**
 * Export default options.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


var DEFAULTS = {
  /**
   * Determine a slider type.
   * - 'slide': Regular slider.
   * - 'loop' : Carousel slider.
   * - 'fade' : Change slides with fade transition. perPage, drag options are ignored.
   *
   * @type {string}
   */
  type: 'slide',

  /**
   * Whether to rewind a slider before the first slide or after the last one.
   * In "loop" mode, this option is ignored.
   *
   * @type {boolean}
   */
  rewind: false,

  /**
   * Transition speed in milliseconds.
   *
   * @type {number}
   */
  speed: 400,

  /**
   * Transition speed on rewind in milliseconds.
   *
   * @type {number}
   */
  rewindSpeed: 0,

  /**
   * Whether to prevent any actions while a slider is transitioning.
   * If false, navigation, drag and swipe work while the slider is running.
   * Even so, it will be forced to wait for transition in some cases in the loop mode to shift a slider.
   *
   * @type {boolean}
   */
  waitForTransition: true,

  /**
   * Define slider max width.
   *
   * @type {number}
   */
  width: 0,

  /**
   * Define slider height.
   *
   * @type {number}
   */
  height: 0,

  /**
   * Fix width of slides. CSS format is allowed such as 10em, 80% or 80vw.
   * perPage number will be ignored when this option is falsy.
   *
   * @type {number|string}
   */
  fixedWidth: 0,

  /**
   * Fix height of slides. CSS format is allowed such as 10em, 80vh but % unit is not accepted.
   * heightRatio option will be ignored when this option is falsy.
   *
   * @type {number|string}
   */
  fixedHeight: 0,

  /**
   * Determine height of slides by ratio to a slider width.
   * This will be ignored when the fixedHeight is provided.
   *
   * @type {number}
   */
  heightRatio: 0,

  /**
   * If true, slide width will be determined by the element width itself.
   * - perPage/perMove should be 1.
   *
   * @type {boolean}
   */
  autoWidth: false,

  /**
   * If true, slide height will be determined by the element width itself.
   * - perPage/perMove should be 1.
   *
   * @type {boolean}
   */
  autoHeight: false,

  /**
   * Determine how many slides should be displayed per page.
   *
   * @type {number}
   */
  perPage: 1,

  /**
   * Determine how many slides should be moved when a slider goes to next or perv.
   *
   * @type {number}
   */
  perMove: 0,

  /**
   * Determine manually how many clones should be generated on the left and right side.
   * The total number of clones will be twice of this number.
   *
   * @type {number}
   */
  clones: 0,

  /**
   * Start index.
   *
   * @type {number}
   */
  start: 0,

  /**
   * Determine which slide should be focused if there are multiple slides in a page.
   * A string "center" is acceptable for centering slides.
   *
   * @type {boolean|number|string}
   */
  focus: false,

  /**
   * Gap between slides. CSS format is allowed such as 1em.
   *
   * @type {number|string}
   */
  gap: 0,

  /**
   * Set padding-left/right in horizontal mode or padding-top/bottom in vertical one.
   * Give a single value to set a same size for both sides or
   * do an object for different sizes.
   * Also, CSS format is allowed such as 1em.
   *
   * @example
   * - 10: Number
   * - '1em': CSS format.
   * - { left: 0, right: 20 }: Object for different sizes in horizontal mode.
   * - { top: 0, bottom: 20 }: Object for different sizes in vertical mode.
   *
   * @type {number|string|Object}
   */
  padding: 0,

  /**
   * Whether to append arrows.
   *
   * @type {boolean}
   */
  arrows: true,

  /**
   * Change the arrow SVG path like 'm7.61 0.807-2.12...'.
   *
   * @type {string}
   */
  arrowPath: '',

  /**
   * Whether to append pagination(indicator dots) or not.
   *
   * @type {boolean}
   */
  pagination: true,

  /**
   * Activate autoplay.
   *
   * @type {boolean}
   */
  autoplay: false,

  /**
   * Autoplay interval in milliseconds.
   *
   * @type {number}
   */
  interval: 5000,

  /**
   * Whether to stop autoplay when a slider is hovered.
   *
   * @type {boolean}
   */
  pauseOnHover: true,

  /**
   * Whether to stop autoplay when a slider elements are focused.
   * True is recommended for accessibility.
   *
   * @type {boolean}
   */
  pauseOnFocus: true,

  /**
   * Whether to reset progress of the autoplay timer when resumed.
   *
   * @type {boolean}
   */
  resetProgress: true,

  /**
   * Loading images lazily.
   * Image src must be provided by a data-splide-lazy attribute.
   *
   * - false: Do nothing.
   * - 'nearby': Only images around an active slide will be loaded.
   * - 'sequential': All images will be sequentially loaded.
   *
   * @type {boolean|string}
   */
  lazyLoad: false,

  /**
   * This option works only when a lazyLoad option is "nearby".
   * Determine how many pages(not slides) around an active slide should be loaded beforehand.
   *
   * @type {number}
   */
  preloadPages: 1,

  /**
   * Easing for CSS transition. For example, linear, ease or cubic-bezier().
   *
   * @type {string}
   */
  easing: 'cubic-bezier(.42,.65,.27,.99)',

  /**
   * Whether to enable keyboard shortcuts
   * - true or 'global': Listen to keydown event of the document.
   * - 'focused': Listen to the keydown event of the slider root element. tabindex="0" will be added to the element.
   * - false: Disable keyboard shortcuts.
   *
   * @type {boolean|string}
   */
  keyboard: 'global',

  /**
   * Whether to allow mouse drag and touch swipe.
   *
   * @type {boolean}
   */
  drag: true,

  /**
   * The angle threshold for drag.
   * The slider starts moving only when the drag angle is less than this threshold.
   *
   * @type {number}
   */
  dragAngleThreshold: 30,

  /**
   * Distance threshold for determining if the action is "flick" or "swipe".
   * When a drag distance is over this value, the action will be treated as "swipe", not "flick".
   *
   * @type {number}
   */
  swipeDistanceThreshold: 150,

  /**
   * Velocity threshold for determining if the action is "flick" or "swipe".
   * Around 0.5 is recommended.
   *
   * @type {number}
   */
  flickVelocityThreshold: .6,

  /**
   * Determine power of flick. The larger number this is, the farther a slider runs by flick.
   * Around 500 is recommended.
   *
   * @type {number}
   */
  flickPower: 600,

  /**
   * Limit a number of pages to move by flick.
   *
   * @type {number}
   */
  flickMaxPages: 1,

  /**
   * Slider direction.
   * - 'ltr': Left to right.
   * - 'rtl': Right to left.
   * - 'ttb': Top to bottom.
   *
   * @type {string}
   */
  direction: 'ltr',

  /**
   * Set img src to background-image of its parent element.
   * Images with various sizes can be displayed as same dimension without cropping work.
   * fixedHeight or heightRatio is required.
   *
   * @type {boolean}
   */
  cover: false,

  /**
   * Whether to enable accessibility(aria and screen reader texts) or not.
   *
   * @type {boolean}
   */
  accessibility: true,

  /**
   * Whether to add tabindex="0" to visible slides or not.
   *
   * @type {boolean}
   */
  slideFocus: true,

  /**
   * Determine if a slider is navigation for another.
   * Use "sync" API to synchronize two sliders.
   *
   * @type {boolean}
   */
  isNavigation: false,

  /**
   * Whether to trim spaces before the fist slide or after the last one when "focus" is not 0.
   *
   * @type {boolean}
   */
  trimSpace: true,

  /**
   * The "is-active" class is added after transition as default.
   * If true, it will be added before move.
   *
   * @type {boolean}
   */
  updateOnMove: false,

  /**
   * Throttle duration in milliseconds for the resize event.
   *
   * @type {number}
   */
  throttle: 100,

  /**
   * Whether to destroy a slider or not.
   *
   * @type {boolean}
   */
  destroy: false,

  /**
   * Options for specific breakpoints.
   *
   * @example
   * {
   *   1000: {
   *     perPage: 3,
   *     gap: 20
   *   },
   *   600: {
   *     perPage: 1,
   *     gap: 5,
   *   }
   * }
   *
   * @type {boolean|Object}
   */
  breakpoints: false,

  /**
   * Collection of class names.
   *
   * @see ./classes.js
   *
   * @type {Object}
   */
  classes: ELEMENT_CLASSES,

  /**
   * Collection of i18n texts.
   *
   * @see ./i18n.js
   *
   * @type {Object}
   */
  i18n: I18N
};
;// CONCATENATED MODULE: ./src/js/constants/states.js
/**
 * Export state constants.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Splide has been just created.
 *
 * @type {number}
 */
var CREATED = 1;
/**
 * All components have been mounted and initialized.
 *
 * @type {number}
 */

var MOUNTED = 2;
/**
 * Splide is ready for transition.
 *
 * @type {number}
 */

var IDLE = 3;
/**
 * Splide is moving.
 *
 * @type {number}
 */

var MOVING = 4;
/**
 * Splide is moving.
 *
 * @type {number}
 */

var DESTROYED = 5;
;// CONCATENATED MODULE: ./src/js/splide.js
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The main class for applying Splide to an element.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */








/**
 * The main class for applying Splide to an element,
 * providing some APIs to control the behavior.
 */

var Splide = /*#__PURE__*/function () {
  /**
   * Splide constructor.
   *
   * @throws {Error} When the given root element or selector is invalid.
   *
   * @param {Element|string}  root       - A selector for a root element or an element itself.
   * @param {Object}          options    - Optional. Options to change default behaviour.
   * @param {Object}          Components - Optional. Components.
   */
  function Splide(root, options, Components) {
    if (options === void 0) {
      options = {};
    }

    if (Components === void 0) {
      Components = {};
    }

    this.root = root instanceof Element ? root : document.querySelector(root);
    exist(this.root, 'An invalid element/selector was given.');
    this.Components = null;
    this.Event = core_event();
    this.State = state(CREATED);
    this.STATES = states_namespaceObject;
    this._o = merge(DEFAULTS, options);
    this._i = 0;
    this._c = Components;
    this._e = {}; // Extensions

    this._t = null; // Transition
  }
  /**
   * Compose and mount components.
   *
   * @param {Object}   Extensions - Optional. Additional components.
   * @param {function} Transition - Optional. Set a custom transition component.
   *
   * @return {Splide|undefined} - This instance or undefined if an exception occurred.
   */


  var _proto = Splide.prototype;

  _proto.mount = function mount(Extensions, Transition) {
    var _this = this;

    if (Extensions === void 0) {
      Extensions = this._e;
    }

    if (Transition === void 0) {
      Transition = this._t;
    }

    // Reset the state.
    this.State.set(CREATED);
    this._e = Extensions;
    this._t = Transition;
    this.Components = compose(this, merge(this._c, Extensions), Transition);

    try {
      each(this.Components, function (component, key) {
        var required = component.required;

        if (required === undefined || required) {
          component.mount && component.mount();
        } else {
          delete _this.Components[key];
        }
      });
    } catch (e) {
      error(e.message);
      return;
    }

    var State = this.State;
    State.set(MOUNTED);
    each(this.Components, function (component) {
      component.mounted && component.mounted();
    });
    this.emit('mounted');
    State.set(IDLE);
    this.emit('ready');
    applyStyle(this.root, {
      visibility: 'visible'
    });
    this.on('move drag', function () {
      return State.set(MOVING);
    }).on('moved dragged', function () {
      return State.set(IDLE);
    });
    return this;
  }
  /**
   * Set sync target.
   *
   * @param {Splide} splide - A Splide instance.
   *
   * @return {Splide} - This instance.
   */
  ;

  _proto.sync = function sync(splide) {
    this.sibling = splide;
    return this;
  }
  /**
   * Register callback fired on the given event(s).
   *
   * @param {string}   events  - An event name. Use space to separate multiple events.
   *                             Also, namespace is accepted by dot, such as 'resize.{namespace}'.
   * @param {function} handler - A callback function.
   * @param {Element}  elm     - Optional. Native event will be listened to when this arg is provided.
   * @param {Object}   options - Optional. Options for addEventListener.
   *
   * @return {Splide} - This instance.
   */
  ;

  _proto.on = function on(events, handler, elm, options) {
    if (elm === void 0) {
      elm = null;
    }

    if (options === void 0) {
      options = {};
    }

    this.Event.on(events, handler, elm, options);
    return this;
  }
  /**
   * Unsubscribe the given event.
   *
   * @param {string}  events - A event name.
   * @param {Element} elm    - Optional. removeEventListener() will be called when this arg is provided.
   *
   * @return {Splide} - This instance.
   */
  ;

  _proto.off = function off(events, elm) {
    if (elm === void 0) {
      elm = null;
    }

    this.Event.off(events, elm);
    return this;
  }
  /**
   * Emit an event.
   *
   * @param {string} event - An event name.
   * @param {*}      args  - Any number of arguments passed to handlers.
   */
  ;

  _proto.emit = function emit(event) {
    var _this$Event;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    (_this$Event = this.Event).emit.apply(_this$Event, [event].concat(args));

    return this;
  }
  /**
   * Go to the slide specified by the given control.
   *
   * @param {string|number} control - A control pattern.
   * @param {boolean}       wait    - Optional. Whether to wait for transition.
   */
  ;

  _proto.go = function go(control, wait) {
    if (wait === void 0) {
      wait = this.options.waitForTransition;
    }

    if (this.State.is(IDLE) || this.State.is(MOVING) && !wait) {
      this.Components.Controller.go(control, false);
    }

    return this;
  }
  /**
   * Verify whether the slider type is the given one or not.
   *
   * @param {string} type - A slider type.
   *
   * @return {boolean} - True if the slider type is the provided type or false if not.
   */
  ;

  _proto.is = function is(type) {
    return type === this._o.type;
  }
  /**
   * Insert a slide.
   *
   * @param {Element|string} slide - A slide element to be added.
   * @param {number}         index - A slide will be added at the position.
   */
  ;

  _proto.add = function add(slide, index) {
    if (index === void 0) {
      index = -1;
    }

    this.Components.Elements.add(slide, index, this.refresh.bind(this));
    return this;
  }
  /**
   * Remove the slide designated by the index.
   *
   * @param {number} index - A slide index.
   */
  ;

  _proto.remove = function remove(index) {
    this.Components.Elements.remove(index);
    this.refresh();
    return this;
  }
  /**
   * Destroy all Slide objects and clones and recreate them again.
   */
  ;

  _proto.refresh = function refresh() {
    this.emit('refresh:before').emit('refresh').emit('resize');
    return this;
  }
  /**
   * Destroy the Splide.
   * "Completely" boolean is mainly for breakpoints.
   *
   * @param {boolean} completely - Destroy completely.
   */
  ;

  _proto.destroy = function destroy(completely) {
    var _this2 = this;

    if (completely === void 0) {
      completely = true;
    }

    // Postpone destroy because it should be done after mount.
    if (this.State.is(CREATED)) {
      this.on('ready', function () {
        return _this2.destroy(completely);
      });
      return;
    }

    values(this.Components).reverse().forEach(function (component) {
      component.destroy && component.destroy(completely);
    });
    this.emit('destroy', completely); // Destroy all event handlers, including ones for native events.

    this.Event.destroy();
    this.State.set(DESTROYED);
    return this;
  }
  /**
   * Return the current slide index.
   *
   * @return {number} - The current slide index.
   // */
  ;

  _createClass(Splide, [{
    key: "index",
    get: function get() {
      return this._i;
    }
    /**
     * Set the current slide index.
     *
     * @param {number|string} index - A new index.
     */
    ,
    set: function set(index) {
      this._i = parseInt(index);
    }
    /**
     * Return length of slides.
     * This is an alias of Elements.length.
     *
     * @return {number} - A number of slides.
     */

  }, {
    key: "length",
    get: function get() {
      return this.Components.Elements.length;
    }
    /**
     * Return options.
     *
     * @return {Object} - Options object.
     */

  }, {
    key: "options",
    get: function get() {
      return this._o;
    }
    /**
     * Set options with merging the given object to the current one.
     *
     * @param {Object} options - New options.
     */
    ,
    set: function set(options) {
      var created = this.State.is(CREATED);

      if (!created) {
        this.emit('update');
      }

      this._o = merge(this._o, options);

      if (!created) {
        this.emit('updated', this._o);
      }
    }
    /**
     * Return the class list.
     * This is an alias of Splide.options.classList.
     *
     * @return {Object} - An object containing all class list.
     */

  }, {
    key: "classes",
    get: function get() {
      return this._o.classes;
    }
    /**
     * Return the i18n strings.
     * This is an alias of Splide.options.i18n.
     *
     * @return {Object} - An object containing all i18n strings.
     */

  }, {
    key: "i18n",
    get: function get() {
      return this._o.i18n;
    }
  }]);

  return Splide;
}();


;// CONCATENATED MODULE: ./src/js/components/options/index.js
/**
 * The component for initializing options.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The component for initializing options.
 *
 * @param {Splide} Splide - A Splide instance.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const options = (function (Splide) {
  /**
   * Retrieve options from the data attribute.
   * Note that IE10 doesn't support dataset property.
   *
   * @type {string}
   */
  var options = getAttribute(Splide.root, 'data-splide');

  if (options) {
    try {
      Splide.options = JSON.parse(options);
    } catch (e) {
      error(e.message);
    }
  }

  return {
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      if (Splide.State.is(CREATED)) {
        Splide.index = Splide.options.start;
      }
    }
  };
});
;// CONCATENATED MODULE: ./src/js/constants/directions.js
/**
 * Export layout modes.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Enumerate slides from left to right.
 *
 * @type {string}
 */
var LTR = 'ltr';
/**
 * Enumerate slides from right to left.
 *
 * @type {string}
 */

var RTL = 'rtl';
/**
 * Enumerate slides in a col.
 *
 * @type {string}
 */

var TTB = 'ttb';
;// CONCATENATED MODULE: ./src/js/components/elements/slide.js
/**
 * The sub component for handling each slide.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */






/**
 * Events for restoring original styles.
 *
 * @type {string}
 */

var STYLE_RESTORE_EVENTS = 'update.slide';
/**
 * The sub component for handling each slide.
 *
 * @param {Splide}  Splide    - A Splide instance.
 * @param {number}  index     - An unique slide index.
 * @param {number}  realIndex - Clones should pass a real slide index.
 * @param {Element} slide     - A slide element.
 *
 * @return {Object} - The sub component object.
 */

/* harmony default export */ const elements_slide = (function (Splide, index, realIndex, slide) {
  /**
   * Whether to update "is-active" class before or after transition.
   *
   * @type {boolean}
   */
  var updateOnMove = Splide.options.updateOnMove;
  /**
   * Events when the slide status is updated.
   * Append a namespace to remove listeners later.
   *
   * @type {string}
   */

  var STATUS_UPDATE_EVENTS = 'ready.slide updated.slide resized.slide moved.slide' + (updateOnMove ? ' move.slide' : '');
  /**
   * Slide sub component object.
   *
   * @type {Object}
   */

  var Slide = {
    /**
     * Slide element.
     *
     * @type {Element}
     */
    slide: slide,

    /**
     * Slide index.
     *
     * @type {number}
     */
    index: index,

    /**
     * Real index for clones.
     *
     * @type {number}
     */
    realIndex: realIndex,

    /**
     * Container element if available.
     *
     * @type {Element|undefined}
     */
    container: child(slide, Splide.classes.container),

    /**
     * Whether this is a cloned slide or not.
     *
     * @type {boolean}
     */
    isClone: realIndex > -1,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      var _this = this;

      if (!this.isClone) {
        slide.id = Splide.root.id + "-slide" + pad(index + 1);
      }

      Splide.on(STATUS_UPDATE_EVENTS, function () {
        return _this.update();
      }).on(STYLE_RESTORE_EVENTS, restoreStyles).on('click', function () {
        return Splide.emit('click', _this);
      }, slide);
      /*
       * Add "is-active" class to a clone element temporarily
       * and it will be removed on "moved" event.
       */

      if (updateOnMove) {
        Splide.on('move.slide', function (newIndex) {
          if (newIndex === realIndex) {
            _update(true, false);
          }
        });
      } // Make sure the slide is shown.


      applyStyle(slide, {
        display: ''
      }); // Hold the original styles.

      this.styles = getAttribute(slide, 'style') || '';
    },

    /**
     * Destroy.
     */
    destroy: function destroy() {
      Splide.off(STATUS_UPDATE_EVENTS).off(STYLE_RESTORE_EVENTS).off('click', slide);
      removeClass(slide, values(STATUS_CLASSES));
      restoreStyles();
      removeAttribute(this.container, 'style');
    },

    /**
     * Update active and visible status.
     */
    update: function update() {
      _update(this.isActive(), false);

      _update(this.isVisible(), true);
    },

    /**
     * Check whether this slide is active or not.
     *
     * @return {boolean} - True if the slide is active or false if not.
     */
    isActive: function isActive() {
      return Splide.index === index;
    },

    /**
     * Check whether this slide is visible in the viewport or not.
     *
     * @return {boolean} - True if the slide is visible or false if not.
     */
    isVisible: function isVisible() {
      var active = this.isActive();

      if (Splide.is(FADE) || active) {
        return active;
      }

      var ceil = Math.ceil;
      var trackRect = getRect(Splide.Components.Elements.track);
      var slideRect = getRect(slide);

      if (Splide.options.direction === TTB) {
        return trackRect.top <= slideRect.top && slideRect.bottom <= ceil(trackRect.bottom);
      }

      return trackRect.left <= slideRect.left && slideRect.right <= ceil(trackRect.right);
    },

    /**
     * Calculate how far this slide is from another slide and
     * return true if the distance is within the given number.
     *
     * @param {number} from   - Index of a target slide.
     * @param {number} within - True if the slide is within this number.
     *
     * @return {boolean} - True if the slide is within the number or false otherwise.
     */
    isWithin: function isWithin(from, within) {
      var diff = Math.abs(from - index);

      if (!Splide.is(SLIDE) && !this.isClone) {
        diff = Math.min(diff, Splide.length - diff);
      }

      return diff < within;
    }
  };
  /**
   * Update classes for activity or visibility.
   *
   * @param {boolean} active        - Is active/visible or not.
   * @param {boolean} forVisibility - Toggle classes for activity or visibility.
   */

  function _update(active, forVisibility) {
    var type = forVisibility ? 'visible' : 'active';
    var className = STATUS_CLASSES[type];

    if (active) {
      addClass(slide, className);
      Splide.emit("" + type, Slide);
    } else {
      if (hasClass(slide, className)) {
        removeClass(slide, className);
        Splide.emit("" + (forVisibility ? 'hidden' : 'inactive'), Slide);
      }
    }
  }
  /**
   * Restore the original styles.
   */


  function restoreStyles() {
    setAttribute(slide, 'style', Slide.styles);
  }

  return Slide;
});
;// CONCATENATED MODULE: ./src/js/components/elements/index.js
/**
 * The component for main elements.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */





/**
 * The property name for UID stored in a window object.
 *
 * @type {string}
 */

var UID_NAME = 'uid';
/**
 * The component for main elements.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const components_elements = (function (Splide, Components) {
  /**
   * Hold the root element.
   *
   * @type {Element}
   */
  var root = Splide.root;
  /**
   * Hold the class list.
   *
   * @type {Object}
   */

  var classes = Splide.classes;
  /**
   * Store Slide objects.
   *
   * @type {Array}
   */

  var Slides = [];
  /*
   * Assign unique ID to the root element if it doesn't have the one.
   * Note that IE doesn't support padStart() to fill the uid by 0.
   */

  if (!root.id) {
    window.splide = window.splide || {};
    var uid = window.splide[UID_NAME] || 0;
    window.splide[UID_NAME] = ++uid;
    root.id = "splide" + pad(uid);
  }
  /**
   * Elements component object.
   *
   * @type {Object}
   */


  var Elements = {
    /**
     * Called when the component is mounted.
     * Collect main elements and store them as member properties.
     */
    mount: function mount() {
      var _this = this;

      this.init();
      Splide.on('refresh', function () {
        _this.destroy();

        _this.init();
      }).on('updated', function () {
        removeClass(root, getClasses());
        addClass(root, getClasses());
      });
    },

    /**
     * Destroy.
     */
    destroy: function destroy() {
      Slides.forEach(function (Slide) {
        Slide.destroy();
      });
      Slides = [];
      removeClass(root, getClasses());
    },

    /**
     * Initialization.
     */
    init: function init() {
      var _this2 = this;

      collect();
      addClass(root, getClasses());
      this.slides.forEach(function (slide, index) {
        _this2.register(slide, index, -1);
      });
    },

    /**
     * Register a slide to create a Slide object and handle its behavior.
     *
     * @param {Element} slide     - A slide element.
     * @param {number}  index     - A unique index. This can be negative.
     * @param {number}  realIndex - A real index for clones. Set -1 for real slides.
     */
    register: function register(slide, index, realIndex) {
      var SlideObject = elements_slide(Splide, index, realIndex, slide);
      SlideObject.mount();
      Slides.push(SlideObject);
    },

    /**
     * Return the Slide object designated by the index.
     * Note that "find" is not supported by IE.
     *
     * @return {Object|undefined} - A Slide object if available. Undefined if not.
     */
    getSlide: function getSlide(index) {
      return Slides.filter(function (Slide) {
        return Slide.index === index;
      })[0];
    },

    /**
     * Return all Slide objects.
     *
     * @param {boolean} includeClones - Whether to include cloned slides or not.
     *
     * @return {Object[]} - Slide objects.
     */
    getSlides: function getSlides(includeClones) {
      return includeClones ? Slides : Slides.filter(function (Slide) {
        return !Slide.isClone;
      });
    },

    /**
     * Return Slide objects belonging to the given page.
     *
     * @param {number} page - A page number.
     *
     * @return {Object[]} - An array containing Slide objects.
     */
    getSlidesByPage: function getSlidesByPage(page) {
      var idx = Components.Controller.toIndex(page);
      var options = Splide.options;
      var max = options.focus !== false ? 1 : options.perPage;
      return Slides.filter(function (_ref) {
        var index = _ref.index;
        return idx <= index && index < idx + max;
      });
    },

    /**
     * Insert a slide to a slider.
     * Need to refresh Splide after adding a slide.
     *
     * @param {Node|string} slide    - A slide element to be added.
     * @param {number}      index    - A slide will be added at the position.
     * @param {Function}    callback - Called right after the slide is added to the DOM tree.
     */
    add: function add(slide, index, callback) {
      if (typeof slide === 'string') {
        slide = domify(slide);
      }

      if (slide instanceof Element) {
        var ref = this.slides[index]; // This will be removed in mount() of a Slide component.

        applyStyle(slide, {
          display: 'none'
        });

        if (ref) {
          before(slide, ref);
          this.slides.splice(index, 0, slide);
        } else {
          append(this.list, slide);
          this.slides.push(slide);
        }

        loaded(slide, function () {
          callback && callback(slide);
        });
      }
    },

    /**
     * Remove a slide from a slider.
     * Need to refresh Splide after removing a slide.
     *
     * @param index - Slide index.
     */
    remove: function remove(index) {
      dom_remove(this.slides.splice(index, 1)[0]);
    },

    /**
     * Trigger the provided callback for each Slide object.
     *
     * @param {Function} callback - A callback function. The first argument will be the Slide object.
     */
    each: function each(callback) {
      Slides.forEach(callback);
    },

    /**
     * Return slides length without clones.
     *
     * @return {number} - Slide length.
     */
    get length() {
      return this.slides.length;
    },

    /**
     * Return "SlideObjects" length including clones.
     *
     * @return {number} - Slide length including clones.
     */
    get total() {
      return Slides.length;
    }

  };
  /**
   * Collect elements.
   */

  function collect() {
    Elements.slider = child(root, classes.slider);
    Elements.track = find(root, "." + classes.track);
    Elements.list = child(Elements.track, classes.list);
    exist(Elements.track && Elements.list, 'Track or list was not found.');
    Elements.slides = children(Elements.list, classes.slide);
    var arrows = findParts(classes.arrows);
    Elements.arrows = {
      prev: find(arrows, "." + classes.prev),
      next: find(arrows, "." + classes.next)
    };
    var autoplay = findParts(classes.autoplay);
    Elements.bar = find(findParts(classes.progress), "." + classes.bar);
    Elements.play = find(autoplay, "." + classes.play);
    Elements.pause = find(autoplay, "." + classes.pause);
    Elements.track.id = Elements.track.id || root.id + "-track";
    Elements.list.id = Elements.list.id || root.id + "-list";
  }
  /**
   * Return class names for the root element.
   */


  function getClasses() {
    var rootClass = classes.root;
    var options = Splide.options;
    return [rootClass + "--" + options.type, rootClass + "--" + options.direction, options.drag ? rootClass + "--draggable" : '', options.isNavigation ? rootClass + "--nav" : '', STATUS_CLASSES.active];
  }
  /**
   * Find parts only from children of the root or track.
   *
   * @return {Element} - A found element or undefined.
   */


  function findParts(className) {
    return child(root, className) || child(Elements.slider, className);
  }

  return Elements;
});
;// CONCATENATED MODULE: ./src/js/components/controller/index.js
/**
 * The component for controlling the track.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



var floor = Math.floor;
/**
 * The component for controlling the track.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const controller = (function (Splide, Components) {
  /**
   * Store current options.
   *
   * @type {Object}
   */
  var options;
  /**
   * True if the slide is LOOP mode.
   *
   * @type {boolean}
   */

  var isLoop;
  /**
   * Controller component object.
   *
   * @type {Object}
   */

  var Controller = {
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      options = Splide.options;
      isLoop = Splide.is(LOOP);
      bind();
    },

    /**
     * Make track run by the given control.
     * - "+{i}" : Increment the slide index by i.
     * - "-{i}" : Decrement the slide index by i.
     * - "{i}"  : Go to the slide whose index is i.
     * - ">"    : Go to next page.
     * - "<"    : Go to prev page.
     * - ">{i}" : Go to page i.
     *
     * @param {string|number} control  - A control pattern.
     * @param {boolean}       silently - Go to the destination without event emission.
     */
    go: function go(control, silently) {
      var destIndex = this.trim(this.parse(control));
      Components.Track.go(destIndex, this.rewind(destIndex), silently);
    },

    /**
     * Parse the given control and return the destination index for the track.
     *
     * @param {string} control - A control target pattern.
     *
     * @return {number} - A parsed target.
     */
    parse: function parse(control) {
      var index = Splide.index;
      var matches = String(control).match(/([+\-<>]+)(\d+)?/);
      var indicator = matches ? matches[1] : '';
      var number = matches ? parseInt(matches[2]) : 0;

      switch (indicator) {
        case '+':
          index += number || 1;
          break;

        case '-':
          index -= number || 1;
          break;

        case '>':
        case '<':
          index = parsePage(number, index, indicator === '<');
          break;

        default:
          index = parseInt(control);
      }

      return index;
    },

    /**
     * Compute index from the given page number.
     *
     * @param {number} page - Page number.
     *
     * @return {number} - A computed page number.
     */
    toIndex: function toIndex(page) {
      if (hasFocus()) {
        return page;
      }

      var length = Splide.length;
      var perPage = options.perPage;
      var index = page * perPage;
      index = index - (this.pageLength * perPage - length) * floor(index / length); // Adjustment for the last page.

      if (length - perPage <= index && index < length) {
        index = length - perPage;
      }

      return index;
    },

    /**
     * Compute page number from the given slide index.
     *
     * @param {number} index - Slide index.
     *
     * @return {number} - A computed page number.
     */
    toPage: function toPage(index) {
      if (hasFocus()) {
        return index;
      }

      var length = Splide.length;
      var perPage = options.perPage; // Make the last "perPage" number of slides belong to the last page.

      if (length - perPage <= index && index < length) {
        return floor((length - 1) / perPage);
      }

      return floor(index / perPage);
    },

    /**
     * Trim the given index according to the current mode.
     * Index being returned could be less than 0 or greater than the length in Loop mode.
     *
     * @param {number} index - An index being trimmed.
     *
     * @return {number} - A trimmed index.
     */
    trim: function trim(index) {
      if (!isLoop) {
        index = options.rewind ? this.rewind(index) : between(index, 0, this.edgeIndex);
      }

      return index;
    },

    /**
     * Rewind the given index if it's out of range.
     *
     * @param {number} index - An index.
     *
     * @return {number} - A rewound index.
     */
    rewind: function rewind(index) {
      var edge = this.edgeIndex;

      if (isLoop) {
        while (index > edge) {
          index -= edge + 1;
        }

        while (index < 0) {
          index += edge + 1;
        }
      } else {
        if (index > edge) {
          index = 0;
        } else if (index < 0) {
          index = edge;
        }
      }

      return index;
    },

    /**
     * Check if the direction is "rtl" or not.
     *
     * @return {boolean} - True if "rtl" or false if not.
     */
    isRtl: function isRtl() {
      return options.direction === RTL;
    },

    /**
     * Return the page length.
     *
     * @return {number} - Max page number.
     */
    get pageLength() {
      var length = Splide.length;
      return hasFocus() ? length : Math.ceil(length / options.perPage);
    },

    /**
     * Return the edge index.
     *
     * @return {number} - Edge index.
     */
    get edgeIndex() {
      var length = Splide.length;

      if (!length) {
        return 0;
      }

      if (hasFocus() || options.isNavigation || isLoop) {
        return length - 1;
      }

      return length - options.perPage;
    },

    /**
     * Return the index of the previous slide.
     *
     * @return {number} - The index of the previous slide if available. -1 otherwise.
     */
    get prevIndex() {
      var prev = Splide.index - 1;

      if (isLoop || options.rewind) {
        prev = this.rewind(prev);
      }

      return prev > -1 ? prev : -1;
    },

    /**
     * Return the index of the next slide.
     *
     * @return {number} - The index of the next slide if available. -1 otherwise.
     */
    get nextIndex() {
      var next = Splide.index + 1;

      if (isLoop || options.rewind) {
        next = this.rewind(next);
      }

      return Splide.index < next && next <= this.edgeIndex || next === 0 ? next : -1;
    }

  };
  /**
   * Listen to some events.
   */

  function bind() {
    Splide.on('move', function (newIndex) {
      Splide.index = newIndex;
    }).on('updated refresh', function (newOptions) {
      options = newOptions || options;
      Splide.index = between(Splide.index, 0, Controller.edgeIndex);
    });
  }
  /**
   * Verify if the focus option is available or not.
   *
   * @return {boolean} - True if a slider has the focus option.
   */


  function hasFocus() {
    return options.focus !== false;
  }
  /**
   * Return the next or previous page index computed by the page number and current index.
   *
   * @param {number}  number - Specify the page number.
   * @param {number}  index  - Current index.
   * @param {boolean} prev   - Prev or next.
   *
   * @return {number} - Slide index.
   */


  function parsePage(number, index, prev) {
    if (number > -1) {
      return Controller.toIndex(number);
    }

    var perMove = options.perMove;
    var sign = prev ? -1 : 1;

    if (perMove) {
      return index + perMove * sign;
    }

    return Controller.toIndex(Controller.toPage(index) + sign);
  }

  return Controller;
});
;// CONCATENATED MODULE: ./src/js/components/track/index.js
/**
 * The component for moving list in the track.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */





var abs = Math.abs;
/**
 * The component for moving list in the track.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const track = (function (Splide, Components) {
  /**
   * Hold the Layout component.
   *
   * @type {Object}
   */
  var Layout;
  /**
   * Hold the Layout component.
   *
   * @type {Object}
   */

  var Elements;
  /**
   * Store the list element.
   *
   * @type {Element}
   */

  var list;
  /**
   * Whether the current direction is vertical or not.
   *
   * @type {boolean}
   */

  var isVertical = Splide.options.direction === TTB;
  /**
   * Whether the slider type is FADE or not.
   *
   * @type {boolean}
   */

  var isFade = Splide.is(FADE);
  /**
   * Whether the slider direction is RTL or not.
   *
   * @type {boolean}
   */

  var isRTL = Splide.options.direction === RTL;
  /**
   * This will be true while transitioning from the last index to the first one.
   *
   * @type {boolean}
   */

  var isLoopPending = false;
  /**
   * Sign for the direction. Only RTL mode uses the positive sign.
   *
   * @type {number}
   */

  var sign = isRTL ? 1 : -1;
  /**
   * Track component object.
   *
   * @type {Object}
   */

  var Track = {
    /**
     * Make public the sign defined locally.
     *
     * @type {number}
     */
    sign: sign,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      Elements = Components.Elements;
      Layout = Components.Layout;
      list = Elements.list;
    },

    /**
     * Called after the component is mounted.
     * The resize event must be registered after the Layout's one is done.
     */
    mounted: function mounted() {
      var _this = this;

      if (!isFade) {
        this.jump(0);
        Splide.on('mounted resize updated', function () {
          _this.jump(Splide.index);
        });
      }
    },

    /**
     * Go to the given destination index.
     * After arriving there, the track is jump to the new index without animation, mainly for loop mode.
     *
     * @param {number}  destIndex - A destination index.
     *                              This can be negative or greater than slides length for reaching clones.
     * @param {number}  newIndex  - An actual new index. They are always same in Slide and Rewind mode.
     * @param {boolean} silently  - If true, suppress emitting events.
     */
    go: function go(destIndex, newIndex, silently) {
      var newPosition = getTrimmedPosition(destIndex);
      var prevIndex = Splide.index; // Prevent any actions while transitioning from the last index to the first one for jump.

      if (Splide.State.is(MOVING) && isLoopPending) {
        return;
      }

      isLoopPending = destIndex !== newIndex;

      if (!silently) {
        Splide.emit('move', newIndex, prevIndex, destIndex);
      }

      if (Math.abs(newPosition - this.position) >= 1 || isFade) {
        Components.Transition.start(destIndex, newIndex, prevIndex, this.toCoord(newPosition), function () {
          onTransitionEnd(destIndex, newIndex, prevIndex, silently);
        });
      } else {
        if (destIndex !== prevIndex && Splide.options.trimSpace === 'move') {
          Components.Controller.go(destIndex + destIndex - prevIndex, silently);
        } else {
          onTransitionEnd(destIndex, newIndex, prevIndex, silently);
        }
      }
    },

    /**
     * Move the track to the specified index.
     *
     * @param {number} index - A destination index where the track jumps.
     */
    jump: function jump(index) {
      this.translate(getTrimmedPosition(index));
    },

    /**
     * Set the list position by CSS translate property.
     *
     * @param {number} position - A new position value.
     */
    translate: function translate(position) {
      applyStyle(list, {
        transform: "translate" + (isVertical ? 'Y' : 'X') + "(" + position + "px)"
      });
    },

    /**
     * Cancel the transition and set the list position.
     * Also, loop the slider if necessary.
     */
    cancel: function cancel() {
      if (Splide.is(LOOP)) {
        this.shift();
      } else {
        // Ensure the current position.
        this.translate(this.position);
      }

      applyStyle(list, {
        transition: ''
      });
    },

    /**
     * Shift the slider if it exceeds borders on the edge.
     */
    shift: function shift() {
      var position = abs(this.position);
      var left = abs(this.toPosition(0));
      var right = abs(this.toPosition(Splide.length));
      var innerSize = right - left;

      if (position < left) {
        position += innerSize;
      } else if (position > right) {
        position -= innerSize;
      }

      this.translate(sign * position);
    },

    /**
     * Trim redundant spaces on the left or right edge if necessary.
     *
     * @param {number} position - Position value to be trimmed.
     *
     * @return {number} - Trimmed position.
     */
    trim: function trim(position) {
      if (!Splide.options.trimSpace || Splide.is(LOOP)) {
        return position;
      }

      var edge = sign * (Layout.totalSize() - Layout.size - Layout.gap);
      return between(position, edge, 0);
    },

    /**
     * Calculate the closest slide index from the given position.
     *
     * @param {number} position - A position converted to an slide index.
     *
     * @return {number} - The closest slide index.
     */
    toIndex: function toIndex(position) {
      var _this2 = this;

      var index = 0;
      var minDistance = Infinity;
      Elements.getSlides(true).forEach(function (Slide) {
        var slideIndex = Slide.index;
        var distance = abs(_this2.toPosition(slideIndex) - position);

        if (distance < minDistance) {
          minDistance = distance;
          index = slideIndex;
        }
      });
      return index;
    },

    /**
     * Return coordinates object by the given position.
     *
     * @param {number} position - A position value.
     *
     * @return {Object} - A coordinates object.
     */
    toCoord: function toCoord(position) {
      return {
        x: isVertical ? 0 : position,
        y: isVertical ? position : 0
      };
    },

    /**
     * Calculate the track position by a slide index.
     *
     * @param {number} index - Slide index.
     *
     * @return {Object} - Calculated position.
     */
    toPosition: function toPosition(index) {
      var position = Layout.totalSize(index) - Layout.slideSize(index) - Layout.gap;
      return sign * (position + this.offset(index));
    },

    /**
     * Return the current offset value, considering direction.
     *
     * @return {number} - Offset amount.
     */
    offset: function offset(index) {
      var focus = Splide.options.focus;
      var slideSize = Layout.slideSize(index);

      if (focus === 'center') {
        return -(Layout.size - slideSize) / 2;
      }

      return -(parseInt(focus) || 0) * (slideSize + Layout.gap);
    },

    /**
     * Return the current position.
     * This returns the correct position even while transitioning by CSS.
     *
     * @return {number} - Current position.
     */
    get position() {
      var prop = isVertical ? 'top' : isRTL ? 'right' : 'left';
      return getRect(list)[prop] - (getRect(Elements.track)[prop] - Layout.padding[prop] * sign);
    }

  };
  /**
   * Called whenever slides arrive at a destination.
   *
   * @param {number}  destIndex - A destination index.
   * @param {number}  newIndex  - A new index.
   * @param {number}  prevIndex - A previous index.
   * @param {boolean} silently  - If true, suppress emitting events.
   */

  function onTransitionEnd(destIndex, newIndex, prevIndex, silently) {
    applyStyle(list, {
      transition: ''
    });
    isLoopPending = false;

    if (!isFade) {
      Track.jump(newIndex);
    }

    if (!silently) {
      Splide.emit('moved', newIndex, prevIndex, destIndex);
    }
  }
  /**
   * Convert index to the trimmed position.
   *
   * @return {number} - Trimmed position.
   */


  function getTrimmedPosition(index) {
    return Track.trim(Track.toPosition(index));
  }

  return Track;
});
;// CONCATENATED MODULE: ./src/js/components/clones/index.js
/**
 * The component for cloning some slides for "loop" mode of the track.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */




/**
 * The component for cloning some slides for "loop" mode of the track.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const clones = (function (Splide, Components) {
  /**
   * Store information of all clones.
   *
   * @type {Array}
   */
  var clones = [];
  /**
   * Store the current clone count on one side.
   *
   * @type {number}
   */

  var cloneCount = 0;
  /**
   * Keep Elements component.
   *
   * @type {Object}
   */

  var Elements = Components.Elements;
  /**
   * Clones component object.
   *
   * @type {Object}
   */

  var Clones = {
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      var _this = this;

      if (Splide.is(LOOP)) {
        init();
        Splide.on('refresh:before', function () {
          _this.destroy();
        }).on('refresh', init).on('resize', function () {
          if (cloneCount !== getCloneCount()) {
            // Destroy before refresh not to collect clones by the Elements component.
            _this.destroy();

            Splide.refresh();
          }
        });
      }
    },

    /**
     * Destroy.
     */
    destroy: function destroy() {
      dom_remove(clones);
      clones = [];
    },

    /**
     * Return all clones.
     *
     * @return {Element[]} - Cloned elements.
     */
    get clones() {
      return clones;
    },

    /**
     * Return clone length.
     *
     * @return {number} - A length of clones.
     */
    get length() {
      return clones.length;
    }

  };
  /**
   * Initialization.
   */

  function init() {
    Clones.destroy();
    cloneCount = getCloneCount();
    generateClones(cloneCount);
  }
  /**
   * Generate and append/prepend clones.
   *
   * @param {number} count - The half number of clones.
   */


  function generateClones(count) {
    var length = Elements.length,
        register = Elements.register;

    if (length) {
      var slides = Elements.slides;

      while (slides.length < count) {
        slides = slides.concat(slides);
      } // Clones after the last element.


      slides.slice(0, count).forEach(function (elm, index) {
        var clone = cloneDeeply(elm);
        append(Elements.list, clone);
        clones.push(clone);
        register(clone, index + length, index % length);
      }); // Clones before the first element.

      slides.slice(-count).forEach(function (elm, index) {
        var clone = cloneDeeply(elm);
        before(clone, slides[0]);
        clones.push(clone);
        register(clone, index - count, (length + index - count % length) % length);
      });
    }
  }
  /**
   * Return half count of clones to be generated.
   * Clone count is determined by:
   * - "clones" value in the options.
   * - Number of slides that can be placed in a view in "fixed" mode.
   * - Max pages a flick action can move.
   * - Whether the slide length is enough for perPage.
   *
   * @return {number} - Count for clones.
   */


  function getCloneCount() {
    var options = Splide.options;

    if (options.clones) {
      return options.clones;
    } // Use the slide length in autoWidth mode because the number cannot be calculated.


    var baseCount = options.autoWidth || options.autoHeight ? Elements.length : options.perPage;
    var dimension = options.direction === TTB ? 'Height' : 'Width';
    var fixedSize = toPixel(Splide.root, options["fixed" + dimension]);

    if (fixedSize) {
      // Roughly calculate the count. This needs not to be strict.
      baseCount = Math.ceil(Elements.track["client" + dimension] / fixedSize);
    }

    return baseCount * (options.drag ? options.flickMaxPages + 1 : 1);
  }
  /**
   * Clone deeply the given element.
   *
   * @param {Element} elm - An element being duplicated.
   *
   * @return {Node} - A cloned node(element).
   */


  function cloneDeeply(elm) {
    var clone = elm.cloneNode(true);
    addClass(clone, Splide.classes.clone); // ID should not be duplicated.

    removeAttribute(clone, 'id');
    return clone;
  }

  return Clones;
});
;// CONCATENATED MODULE: ./src/js/components/layout/directions/horizontal.js
/**
 * The resolver component for horizontal layout.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The resolver component for horizontal layout.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The resolver object.
 */

/* harmony default export */ const horizontal = (function (Splide, Components) {
  /**
   * Keep the Elements component.
   *
   * @type {string}
   */
  var Elements = Components.Elements;
  /**
   * Keep the root element.
   *
   * @type {Element}
   */

  var root = Splide.root;
  /**
   * Keep the track element.
   *
   * @type {Element}
   */

  var track;
  /**
   * Keep the latest options.
   *
   * @type {Element}
   */

  var options = Splide.options;
  return {
    /**
     * Margin property name.
     *
     * @type {string}
     */
    margin: 'margin' + (options.direction === RTL ? 'Left' : 'Right'),

    /**
     * Always 0 because the height will be determined by inner contents.
     *
     * @type {number}
     */
    height: 0,

    /**
     * Initialization.
     */
    init: function init() {
      this.resize();
    },

    /**
     * Resize gap and padding.
     * This must be called on init.
     */
    resize: function resize() {
      options = Splide.options;
      track = Elements.track;
      this.gap = toPixel(root, options.gap);
      var padding = options.padding;
      var left = toPixel(root, padding.left || padding);
      var right = toPixel(root, padding.right || padding);
      this.padding = {
        left: left,
        right: right
      };
      applyStyle(track, {
        paddingLeft: unit(left),
        paddingRight: unit(right)
      });
    },

    /**
     * Return total width from the left of the list to the right of the slide specified by the provided index.
     *
     * @param {number} index - Optional. A slide index. If undefined, total width of the slider will be returned.
     *
     * @return {number} - Total width to the right side of the specified slide, or 0 for an invalid index.
     */
    totalWidth: function totalWidth(index) {
      if (index === void 0) {
        index = Splide.length - 1;
      }

      var Slide = Elements.getSlide(index);
      var width = 0;

      if (Slide) {
        var slideRect = getRect(Slide.slide);
        var listRect = getRect(Elements.list);

        if (options.direction === RTL) {
          width = listRect.right - slideRect.left;
        } else {
          width = slideRect.right - listRect.left;
        }

        width += this.gap;
      }

      return width;
    },

    /**
     * Return the slide width in px.
     *
     * @param {number} index - Slide index.
     *
     * @return {number} - The slide width.
     */
    slideWidth: function slideWidth(index) {
      if (options.autoWidth) {
        var Slide = Elements.getSlide(index);
        return Slide ? Slide.slide.offsetWidth : 0;
      }

      var width = options.fixedWidth || (this.width + this.gap) / options.perPage - this.gap;
      return toPixel(root, width);
    },

    /**
     * Return the slide height in px.
     *
     * @return {number} - The slide height.
     */
    slideHeight: function slideHeight() {
      var height = options.height || options.fixedHeight || this.width * options.heightRatio;
      return toPixel(root, height);
    },

    /**
     * Return slider width without padding.
     *
     * @return {number} - Current slider width.
     */
    get width() {
      return track.clientWidth - this.padding.left - this.padding.right;
    }

  };
});
;// CONCATENATED MODULE: ./src/js/components/layout/directions/vertical.js
/**
 * The resolver component for vertical layout.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The resolver component for vertical layout.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The resolver object.
 */

/* harmony default export */ const vertical = (function (Splide, Components) {
  /**
   * Keep the Elements component.
   *
   * @type {string}
   */
  var Elements = Components.Elements;
  /**
   * Keep the root element.
   *
   * @type {Element}
   */

  var root = Splide.root;
  /**
   * Keep the track element.
   *
   * @type {Element}
   */

  var track;
  /**
   * Keep the latest options.
   *
   * @type {Element}
   */

  var options;
  return {
    /**
     * Margin property name.
     *
     * @type {string}
     */
    margin: 'marginBottom',

    /**
     * Initialization.
     */
    init: function init() {
      this.resize();
    },

    /**
     * Resize gap and padding.
     * This must be called on init.
     */
    resize: function resize() {
      options = Splide.options;
      track = Elements.track;
      this.gap = toPixel(root, options.gap);
      var padding = options.padding;
      var top = toPixel(root, padding.top || padding);
      var bottom = toPixel(root, padding.bottom || padding);
      this.padding = {
        top: top,
        bottom: bottom
      };
      applyStyle(track, {
        paddingTop: unit(top),
        paddingBottom: unit(bottom)
      });
    },

    /**
     * Return total height from the top of the list to the bottom of the slide specified by the provided index.
     *
     * @param {number} index - Optional. A slide index. If undefined, total height of the slider will be returned.
     *
     * @return {number} - Total height to the bottom of the specified slide, or 0 for an invalid index.
     */
    totalHeight: function totalHeight(index) {
      if (index === void 0) {
        index = Splide.length - 1;
      }

      var Slide = Elements.getSlide(index);

      if (Slide) {
        return getRect(Slide.slide).bottom - getRect(Elements.list).top + this.gap;
      }

      return 0;
    },

    /**
     * Return the slide width in px.
     *
     * @return {number} - The slide width.
     */
    slideWidth: function slideWidth() {
      return toPixel(root, options.fixedWidth || this.width);
    },

    /**
     * Return the slide height in px.
     *
     * @param {number} index - Slide index.
     *
     * @return {number} - The slide height.
     */
    slideHeight: function slideHeight(index) {
      if (options.autoHeight) {
        var Slide = Elements.getSlide(index);
        return Slide ? Slide.slide.offsetHeight : 0;
      }

      var height = options.fixedHeight || (this.height + this.gap) / options.perPage - this.gap;
      return toPixel(root, height);
    },

    /**
     * Return slider width without padding.
     *
     * @return {number} - Current slider width.
     */
    get width() {
      return track.clientWidth;
    },

    /**
     * Return slide height without padding.
     *
     * @return {number} - Slider height.
     */
    get height() {
      var height = options.height || this.width * options.heightRatio;
      exist(height, '"height" or "heightRatio" is missing.');
      return toPixel(root, height) - this.padding.top - this.padding.bottom;
    }

  };
});
;// CONCATENATED MODULE: ./src/js/utils/time.js
/**
 * A package of utility functions related with time.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Simple throttle function that controls how often the given function is executed.
 *
 * @param {function} func - A function to be throttled.
 * @param {number}   wait - Time in millisecond for interval of execution.
 *
 * @return {Function} - A debounced function.
 */
function throttle(func, wait) {
  var timeout; // Declare function by the "function" keyword to prevent "this" from being inherited.

  return function () {
    if (!timeout) {
      timeout = setTimeout(function () {
        func();
        timeout = null;
      }, wait);
    }
  };
}
/**
 * Custom setInterval function that provides progress rate as callback.
 *
 * @param {function} callback - A callback function fired every time the interval time passes.
 * @param {number}   interval - Interval duration in milliseconds.
 * @param {function} progress - A callback function fired whenever the progress goes.
 *
 * @return {Object} - An object containing play() and pause() functions.
 */

function createInterval(callback, interval, progress) {
  var _window = window,
      requestAnimationFrame = _window.requestAnimationFrame;
  var start,
      elapse,
      rate,
      _pause = true;

  var step = function step(timestamp) {
    if (!_pause) {
      if (!start) {
        start = timestamp;

        if (rate && rate < 1) {
          start -= rate * interval;
        }
      }

      elapse = timestamp - start;
      rate = elapse / interval;

      if (elapse >= interval) {
        start = 0;
        rate = 1;
        callback();
      }

      if (progress) {
        progress(rate);
      }

      requestAnimationFrame(step);
    }
  };

  return {
    pause: function pause() {
      _pause = true;
      start = 0;
    },
    play: function play(reset) {
      start = 0;

      if (reset) {
        rate = 0;
      }

      if (_pause) {
        _pause = false;
        requestAnimationFrame(step);
      }
    }
  };
}
;// CONCATENATED MODULE: ./src/js/components/layout/index.js
/**
 * The component for handing slide layouts and their sizes.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */







/**
 * The component for handing slide layouts and their sizes.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const layout = (function (Splide, Components) {
  /**
   * Keep the Elements component.
   *
   * @type {string}
   */
  var Elements = Components.Elements;
  /**
   * Whether the slider is vertical or not.
   *
   * @type {boolean}
   */

  var isVertical = Splide.options.direction === TTB;
  /**
   * Layout component object.
   *
   * @type {Object}
   */

  var Layout = object_assign({
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      bind();
      init(); // The word "size" means width for a horizontal slider and height for a vertical slider.

      this.totalSize = isVertical ? this.totalHeight : this.totalWidth;
      this.slideSize = isVertical ? this.slideHeight : this.slideWidth;
    },

    /**
     * Destroy the component.
     */
    destroy: function destroy() {
      removeAttribute([Elements.list, Elements.track], 'style');
    },

    /**
     * Return the slider height on the vertical mode or width on the horizontal mode.
     *
     * @return {number}
     */
    get size() {
      return isVertical ? this.height : this.width;
    }

  }, isVertical ? vertical(Splide, Components) : horizontal(Splide, Components));
  /**
   * Init slider styles according to options.
   */

  function init() {
    Layout.init();
    applyStyle(Splide.root, {
      maxWidth: unit(Splide.options.width)
    });
    Elements.each(function (Slide) {
      Slide.slide.style[Layout.margin] = unit(Layout.gap);
    });
    resize();
  }
  /**
   * Listen the resize native event with throttle.
   * Initialize when the component is mounted or options are updated.
   */


  function bind() {
    Splide.on('resize load', throttle(function () {
      Splide.emit('resize');
    }, Splide.options.throttle), window).on('resize', resize).on('updated refresh', init);
  }
  /**
   * Resize the track and slide elements.
   */


  function resize() {
    var options = Splide.options;
    Layout.resize();
    applyStyle(Elements.track, {
      height: unit(Layout.height)
    });
    var slideHeight = options.autoHeight ? null : unit(Layout.slideHeight());
    Elements.each(function (Slide) {
      applyStyle(Slide.container, {
        height: slideHeight
      });
      applyStyle(Slide.slide, {
        width: options.autoWidth ? null : unit(Layout.slideWidth(Slide.index)),
        height: Slide.container ? null : slideHeight
      });
    });
    Splide.emit('resized');
  }

  return Layout;
});
;// CONCATENATED MODULE: ./src/js/components/drag/index.js
/**
 * The component for supporting mouse drag and swipe.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */





var drag_abs = Math.abs;
/**
 * If the absolute velocity is greater thant this value,
 * a slider always goes to a different slide after drag, not allowed to stay on a current slide.
 */

var MIN_VELOCITY = 0.1;
/**
 * Adjust how much the track can be pulled on the first or last page.
 * The larger number this is, the farther the track moves.
 * This should be around 5 - 9.
 *
 * @type {number}
 */

var FRICTION_REDUCER = 7;
/**
 * The component supporting mouse drag and swipe.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const drag = (function (Splide, Components) {
  /**
   * Store the Move component.
   *
   * @type {Object}
   */
  var Track = Components.Track;
  /**
   * Store the Controller component.
   *
   * @type {Object}
   */

  var Controller = Components.Controller;
  /**
   * Coordinate of the track on starting drag.
   *
   * @type {Object}
   */

  var startCoord;
  /**
   * Analyzed info on starting drag.
   *
   * @type {Object|null}
   */

  var startInfo;
  /**
   * Analyzed info being updated while dragging/swiping.
   *
   * @type {Object}
   */

  var currentInfo;
  /**
   * Determine whether slides are being dragged or not.
   *
   * @type {boolean}
   */

  var isDragging;
  /**
   * Whether the slider direction is vertical or not.
   *
   * @type {boolean}
   */

  var isVertical = Splide.options.direction === TTB;
  /**
   * Axis for the direction.
   *
   * @type {string}
   */

  var axis = isVertical ? 'y' : 'x';
  /**
   * Drag component object.
   *
   * @type {Object}
   */

  var Drag = {
    /**
     * Whether dragging is disabled or not.
     *
     * @type {boolean}
     */
    disabled: false,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      var _this = this;

      var Elements = Components.Elements;
      var track = Elements.track;
      Splide.on('touchstart mousedown', start, track).on('touchmove mousemove', move, track, {
        passive: false
      }).on('touchend touchcancel mouseleave mouseup dragend', end, track).on('mounted refresh', function () {
        // Prevent dragging an image or anchor itself.
        each(Elements.list.querySelectorAll('img, a'), function (elm) {
          Splide.off('dragstart', elm).on('dragstart', function (e) {
            e.preventDefault();
          }, elm, {
            passive: false
          });
        });
      }).on('mounted updated', function () {
        _this.disabled = !Splide.options.drag;
      });
    }
  };
  /**
   * Called when the track starts to be dragged.
   *
   * @param {TouchEvent|MouseEvent} e - TouchEvent or MouseEvent object.
   */

  function start(e) {
    if (!Drag.disabled && !isDragging) {
      // These prams are used to evaluate whether the slider should start moving.
      init(e);
    }
  }
  /**
   * Initialize parameters.
   *
   * @param {TouchEvent|MouseEvent} e - TouchEvent or MouseEvent object.
   */


  function init(e) {
    startCoord = Track.toCoord(Track.position);
    startInfo = analyze(e, {});
    currentInfo = startInfo;
  }
  /**
   * Called while the track being dragged.
   *
   * @param {TouchEvent|MouseEvent} e - TouchEvent or MouseEvent object.
   */


  function move(e) {
    if (startInfo) {
      currentInfo = analyze(e, startInfo);

      if (isDragging) {
        if (e.cancelable) {
          e.preventDefault();
        }

        if (!Splide.is(FADE)) {
          var position = startCoord[axis] + currentInfo.offset[axis];
          Track.translate(resist(position));
        }
      } else {
        if (shouldMove(currentInfo)) {
          Splide.emit('drag', startInfo);
          isDragging = true;
          Track.cancel(); // These params are actual drag data.

          init(e);
        }
      }
    }
  }
  /**
   * Determine whether to start moving the track or not by drag angle.
   *
   * @param {Object} info - An information object.
   *
   * @return {boolean} - True if the track should be moved or false if not.
   */


  function shouldMove(_ref) {
    var offset = _ref.offset;

    if (Splide.State.is(MOVING) && Splide.options.waitForTransition) {
      return false;
    }

    var angle = Math.atan(drag_abs(offset.y) / drag_abs(offset.x)) * 180 / Math.PI;

    if (isVertical) {
      angle = 90 - angle;
    }

    return angle < Splide.options.dragAngleThreshold;
  }
  /**
   * Resist dragging the track on the first/last page because there is no more.
   *
   * @param {number} position - A position being applied to the track.
   *
   * @return {Object} - Adjusted position.
   */


  function resist(position) {
    if (Splide.is(SLIDE)) {
      var sign = Track.sign;

      var _start = sign * Track.trim(Track.toPosition(0));

      var _end = sign * Track.trim(Track.toPosition(Controller.edgeIndex));

      position *= sign;

      if (position < _start) {
        position = _start - FRICTION_REDUCER * Math.log(_start - position);
      } else if (position > _end) {
        position = _end + FRICTION_REDUCER * Math.log(position - _end);
      }

      position *= sign;
    }

    return position;
  }
  /**
   * Called when dragging ends.
   */


  function end() {
    startInfo = null;

    if (isDragging) {
      Splide.emit('dragged', currentInfo);
      go(currentInfo);
      isDragging = false;
    }
  }
  /**
   * Go to the slide determined by the analyzed data.
   *
   * @param {Object} info - An info object.
   */


  function go(info) {
    var velocity = info.velocity[axis];
    var absV = drag_abs(velocity);

    if (absV > 0) {
      var options = Splide.options;
      var index = Splide.index;
      var sign = velocity < 0 ? -1 : 1;
      var destIndex = index;

      if (!Splide.is(FADE)) {
        var destination = Track.position;

        if (absV > options.flickVelocityThreshold && drag_abs(info.offset[axis]) < options.swipeDistanceThreshold) {
          destination += sign * Math.min(absV * options.flickPower, Components.Layout.size * (options.flickMaxPages || 1));
        }

        destIndex = Track.toIndex(destination);
      }
      /*
       * Do not allow the track to go to a previous position if there is enough velocity.
       * Always use the adjacent index for the fade mode.
       */


      if (destIndex === index && absV > MIN_VELOCITY) {
        destIndex = index + sign * Track.sign;
      }

      if (Splide.is(SLIDE)) {
        destIndex = between(destIndex, 0, Controller.edgeIndex);
      }

      Controller.go(destIndex, options.isNavigation);
    }
  }
  /**
   * Analyze the given event object and return important information for handling swipe behavior.
   *
   * @param {Event}   e          - Touch or Mouse event object.
   * @param {Object}  startInfo  - Information analyzed on start for calculating difference from the current one.
   *
   * @return {Object} - An object containing analyzed information, such as offset, velocity, etc.
   */


  function analyze(e, startInfo) {
    var timeStamp = e.timeStamp,
        touches = e.touches;

    var _ref2 = touches ? touches[0] : e,
        clientX = _ref2.clientX,
        clientY = _ref2.clientY;

    var _ref3 = startInfo.to || {},
        _ref3$x = _ref3.x,
        fromX = _ref3$x === void 0 ? clientX : _ref3$x,
        _ref3$y = _ref3.y,
        fromY = _ref3$y === void 0 ? clientY : _ref3$y;

    var startTime = startInfo.time || 0;
    var offset = {
      x: clientX - fromX,
      y: clientY - fromY
    };
    var duration = timeStamp - startTime;
    var velocity = {
      x: offset.x / duration,
      y: offset.y / duration
    };
    return {
      to: {
        x: clientX,
        y: clientY
      },
      offset: offset,
      time: timeStamp,
      velocity: velocity
    };
  }

  return Drag;
});
;// CONCATENATED MODULE: ./src/js/components/click/index.js
/**
 * The component for handling a click event.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * The component for handling a click event.
 * Click should be disabled during drag/swipe.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */
/* harmony default export */ const click = (function (Splide, Components) {
  /**
   * Whether click is disabled or not.
   *
   * @type {boolean}
   */
  var disabled = false;
  /**
   * Click component object.
   *
   * @type {Object}
   */

  var Click = {
    /**
     * Mount only when the drag is activated and the slide type is not "fade".
     *
     * @type {boolean}
     */
    required: Splide.options.drag,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      Splide.on('click', onClick, Components.Elements.track, {
        capture: true
      }).on('drag', function () {
        disabled = true;
      }).on('dragged', function () {
        // Make sure the flag is released after the click event is fired.
        setTimeout(function () {
          disabled = false;
        });
      });
    }
  };
  /**
   * Called when a track element is clicked.
   *
   * @param {Event} e - A click event.
   */

  function onClick(e) {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }

  return Click;
});
;// CONCATENATED MODULE: ./src/js/components/autoplay/index.js
/**
 * The component for playing slides automatically.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * Set of pause flags.
 */

var PAUSE_FLAGS = {
  HOVER: 1,
  FOCUS: 2,
  MANUAL: 3
};
/**
 * The component for playing slides automatically.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 * @param {string} name       - A component name as a lowercase string.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const autoplay = (function (Splide, Components, name) {
  /**
   * Store pause flags.
   *
   * @type {Array}
   */
  var flags = [];
  /**
   * Store an interval object.
   *
   * @type {Object};
   */

  var interval;
  /**
   * Keep the Elements component.
   *
   * @type {string}
   */

  var Elements = Components.Elements;
  /**
   * Autoplay component object.
   *
   * @type {Object}
   */

  var Autoplay = {
    /**
     * Required only when the autoplay option is true.
     *
     * @type {boolean}
     */
    required: Splide.options.autoplay,

    /**
     * Called when the component is mounted.
     * Note that autoplay starts only if there are slides over perPage number.
     */
    mount: function mount() {
      var options = Splide.options;

      if (Elements.slides.length > options.perPage) {
        interval = createInterval(function () {
          Splide.go('>');
        }, options.interval, function (rate) {
          Splide.emit(name + ":playing", rate);

          if (Elements.bar) {
            applyStyle(Elements.bar, {
              width: rate * 100 + "%"
            });
          }
        });
        bind();
        this.play();
      }
    },

    /**
     * Start autoplay.
     *
     * @param {number} flag - A pause flag to be removed.
     */
    play: function play(flag) {
      if (flag === void 0) {
        flag = 0;
      }

      flags = flags.filter(function (f) {
        return f !== flag;
      });

      if (!flags.length) {
        Splide.emit(name + ":play");
        interval.play(Splide.options.resetProgress);
      }
    },

    /**
     * Pause autoplay.
     * Note that Array.includes is not supported by IE.
     *
     * @param {number} flag - A pause flag to be added.
     */
    pause: function pause(flag) {
      if (flag === void 0) {
        flag = 0;
      }

      interval.pause();

      if (flags.indexOf(flag) === -1) {
        flags.push(flag);
      }

      if (flags.length === 1) {
        Splide.emit(name + ":pause");
      }
    }
  };
  /**
   * Listen some events.
   */

  function bind() {
    var options = Splide.options;
    var sibling = Splide.sibling;
    var elms = [Splide.root, sibling ? sibling.root : null];

    if (options.pauseOnHover) {
      switchOn(elms, 'mouseleave', PAUSE_FLAGS.HOVER, true);
      switchOn(elms, 'mouseenter', PAUSE_FLAGS.HOVER, false);
    }

    if (options.pauseOnFocus) {
      switchOn(elms, 'focusout', PAUSE_FLAGS.FOCUS, true);
      switchOn(elms, 'focusin', PAUSE_FLAGS.FOCUS, false);
    }

    if (Elements.play) {
      Splide.on('click', function () {
        // Need to be removed a focus flag at first.
        Autoplay.play(PAUSE_FLAGS.FOCUS);
        Autoplay.play(PAUSE_FLAGS.MANUAL);
      }, Elements.play);
    }

    if (Elements.pause) {
      switchOn([Elements.pause], 'click', PAUSE_FLAGS.MANUAL, false);
    }

    Splide.on('move refresh', function () {
      Autoplay.play();
    }) // Rewind the timer.
    .on('destroy', function () {
      Autoplay.pause();
    });
  }
  /**
   * Play or pause on the given event.
   *
   * @param {Element[]} elms  - Elements.
   * @param {string}    event - An event name or names.
   * @param {number}    flag  - A pause flag defined on the top.
   * @param {boolean}   play  - Determine whether to play or pause.
   */


  function switchOn(elms, event, flag, play) {
    elms.forEach(function (elm) {
      Splide.on(event, function () {
        Autoplay[play ? 'play' : 'pause'](flag);
      }, elm);
    });
  }

  return Autoplay;
});
;// CONCATENATED MODULE: ./src/js/components/cover/index.js
/**
 * The component for change an img element to background image of its wrapper.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * The component for change an img element to background image of its wrapper.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const cover = (function (Splide, Components) {
  /**
   * Hold options.
   *
   * @type {Object}
   */
  var options = Splide.options;
  /**
   * Cover component object.
   *
   * @type {Object}
   */

  var Cover = {
    /**
     * Required only when "cover" option is true.
     *
     * @type {boolean}
     */
    required: options.cover,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      Splide.on('lazyload:loaded', function (img) {
        cover(img, false);
      });
      Splide.on('mounted updated refresh', function () {
        return apply(false);
      });
    },

    /**
     * Destroy.
     */
    destroy: function destroy() {
      apply(true);
    }
  };
  /**
   * Apply "cover" to all slides.
   *
   * @param {boolean} uncover - If true, "cover" will be clear.
   */

  function apply(uncover) {
    Components.Elements.each(function (Slide) {
      var img = child(Slide.slide, 'IMG') || child(Slide.container, 'IMG');

      if (img && img.src) {
        cover(img, uncover);
      }
    });
  }
  /**
   * Set background image of the parent element, using source of the given image element.
   *
   * @param {Element} img     - An image element.
   * @param {boolean} uncover - Reset "cover".
   */


  function cover(img, uncover) {
    applyStyle(img.parentElement, {
      background: uncover ? '' : "center/cover no-repeat url(\"" + img.src + "\")"
    });
    applyStyle(img, {
      display: uncover ? '' : 'none'
    });
  }

  return Cover;
});
;// CONCATENATED MODULE: ./src/js/components/arrows/path.js
/**
 * Export vector path for an arrow.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Namespace definition for SVG element.
 *
 * @type {string}
 */
var XML_NAME_SPACE = 'http://www.w3.org/2000/svg';
/**
 * The arrow vector path.
 *
 * @type {number}
 */

var PATH = 'm15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z';
/**
 * SVG width and height.
 *
 * @type {number}
 */

var SIZE = 40;
;// CONCATENATED MODULE: ./src/js/components/arrows/index.js
/**
 * The component for appending prev/next arrows.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The component for appending prev/next arrows.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 * @param {string} name       - A component name as a lowercase string.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const arrows = (function (Splide, Components, name) {
  /**
   * Previous arrow element.
   *
   * @type {Element|undefined}
   */
  var prev;
  /**
   * Next arrow element.
   *
   * @type {Element|undefined}
   */

  var next;
  /**
   * Store the class list.
   *
   * @type {Object}
   */

  var classes = Splide.classes;
  /**
   * Hold the root element.
   *
   * @type {Element}
   */

  var root = Splide.root;
  /**
   * Whether arrows are created programmatically or not.
   *
   * @type {boolean}
   */

  var created;
  /**
   * Hold the Elements component.
   *
   * @type {Object}
   */

  var Elements = Components.Elements;
  /**
   * Arrows component object.
   *
   * @type {Object}
   */

  var Arrows = {
    /**
     * Required when the arrows option is true.
     *
     * @type {boolean}
     */
    required: Splide.options.arrows,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      // Attempt to get arrows from HTML source.
      prev = Elements.arrows.prev;
      next = Elements.arrows.next; // If arrows were not found in HTML, let's generate them.

      if ((!prev || !next) && Splide.options.arrows) {
        prev = createArrow(true);
        next = createArrow(false);
        created = true;
        appendArrows();
      }

      if (prev && next) {
        bind();
      }

      this.arrows = {
        prev: prev,
        next: next
      };
    },

    /**
     * Called after all components are mounted.
     */
    mounted: function mounted() {
      Splide.emit(name + ":mounted", prev, next);
    },

    /**
     * Destroy.
     */
    destroy: function destroy() {
      removeAttribute([prev, next], 'disabled');

      if (created) {
        dom_remove(prev.parentElement);
      }
    }
  };
  /**
   * Listen to native and custom events.
   */

  function bind() {
    Splide.on('click', function () {
      Splide.go('<');
    }, prev).on('click', function () {
      Splide.go('>');
    }, next).on('mounted move updated refresh', updateDisabled);
  }
  /**
   * Update a disabled attribute.
   */


  function updateDisabled() {
    var _Components$Controlle = Components.Controller,
        prevIndex = _Components$Controlle.prevIndex,
        nextIndex = _Components$Controlle.nextIndex;
    var isEnough = Splide.length > Splide.options.perPage || Splide.is(LOOP);
    prev.disabled = prevIndex < 0 || !isEnough;
    next.disabled = nextIndex < 0 || !isEnough;
    Splide.emit(name + ":updated", prev, next, prevIndex, nextIndex);
  }
  /**
   * Create a wrapper element and append arrows.
   */


  function appendArrows() {
    var wrapper = create('div', {
      "class": classes.arrows
    });
    append(wrapper, prev);
    append(wrapper, next);
    var slider = Elements.slider;
    var parent = Splide.options.arrows === 'slider' && slider ? slider : root;
    before(wrapper, parent.firstElementChild);
  }
  /**
   * Create an arrow element.
   *
   * @param {boolean} prev - Determine to create a prev arrow or next arrow.
   *
   * @return {Element} - A created arrow element.
   */


  function createArrow(prev) {
    var arrow = "<button class=\"" + classes.arrow + " " + (prev ? classes.prev : classes.next) + "\" type=\"button\">" + ("<svg xmlns=\"" + XML_NAME_SPACE + "\"\tviewBox=\"0 0 " + SIZE + " " + SIZE + "\"\twidth=\"" + SIZE + "\"\theight=\"" + SIZE + "\">") + ("<path d=\"" + (Splide.options.arrowPath || PATH) + "\" />");
    return domify(arrow);
  }

  return Arrows;
});
;// CONCATENATED MODULE: ./src/js/components/pagination/index.js
/**
 * The component for handling pagination
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * The event name for updating some attributes of pagination nodes.
 *
 * @type {string}
 */

var ATTRIBUTES_UPDATE_EVENT = 'move.page';
/**
 * The event name for recreating pagination.
 *
 * @type {string}
 */

var UPDATE_EVENT = 'updated.page refresh.page';
/**
 * The component for handling pagination
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 * @param {string} name       - A component name as a lowercase string.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const pagination = (function (Splide, Components, name) {
  /**
   * Store all data for pagination.
   * - list: A list element.
   * - items: An array that contains objects(li, button, index, page).
   *
   * @type {Object}
   */
  var data = {};
  /**
   * Hold the Elements component.
   *
   * @type {Object}
   */

  var Elements = Components.Elements;
  /**
   * Pagination component object.
   *
   * @type {Object}
   */

  var Pagination = {
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      var pagination = Splide.options.pagination;

      if (pagination) {
        data = createPagination();
        var slider = Elements.slider;
        var parent = pagination === 'slider' && slider ? slider : Splide.root;
        append(parent, data.list);
        Splide.on(ATTRIBUTES_UPDATE_EVENT, updateAttributes);
      }

      Splide.off(UPDATE_EVENT).on(UPDATE_EVENT, function () {
        Pagination.destroy();

        if (Splide.options.pagination) {
          Pagination.mount();
          Pagination.mounted();
        }
      });
    },

    /**
     * Called after all components are mounted.
     */
    mounted: function mounted() {
      if (Splide.options.pagination) {
        var index = Splide.index;
        Splide.emit(name + ":mounted", data, this.getItem(index));
        updateAttributes(index, -1);
      }
    },

    /**
     * Destroy the pagination.
     * Be aware that node.remove() is not supported by IE.
     */
    destroy: function destroy() {
      dom_remove(data.list);

      if (data.items) {
        data.items.forEach(function (item) {
          Splide.off('click', item.button);
        });
      } // Do not remove UPDATE_EVENT to recreate pagination if needed.


      Splide.off(ATTRIBUTES_UPDATE_EVENT);
      data = {};
    },

    /**
     * Return an item by index.
     *
     * @param {number} index - A slide index.
     *
     * @return {Object|undefined} - An item object on success or undefined on failure.
     */
    getItem: function getItem(index) {
      return data.items[Components.Controller.toPage(index)];
    },

    /**
     * Return object containing pagination data.
     *
     * @return {Object} - Pagination data including list and items.
     */
    get data() {
      return data;
    }

  };
  /**
   * Update attributes.
   *
   * @param {number} index     - Active index.
   * @param {number} prevIndex - Prev index.
   */

  function updateAttributes(index, prevIndex) {
    var prev = Pagination.getItem(prevIndex);
    var curr = Pagination.getItem(index);
    var active = STATUS_CLASSES.active;

    if (prev) {
      removeClass(prev.button, active);
    }

    if (curr) {
      addClass(curr.button, active);
    }

    Splide.emit(name + ":updated", data, prev, curr);
  }
  /**
   * Create a wrapper and button elements.
   *
   * @return {Object} - An object contains all data.
   */


  function createPagination() {
    var options = Splide.options;
    var classes = Splide.classes;
    var list = create('ul', {
      "class": classes.pagination
    });
    var items = Elements.getSlides(false).filter(function (Slide) {
      return options.focus !== false || Slide.index % options.perPage === 0;
    }).map(function (Slide, page) {
      var li = create('li', {});
      var button = create('button', {
        "class": classes.page,
        type: 'button'
      });
      append(li, button);
      append(list, li);
      Splide.on('click', function () {
        Splide.go(">" + page);
      }, button);
      return {
        li: li,
        button: button,
        page: page,
        Slides: Elements.getSlidesByPage(page)
      };
    });
    return {
      list: list,
      items: items
    };
  }

  return Pagination;
});
;// CONCATENATED MODULE: ./src/js/components/lazyload/index.js
/**
 * The component for loading slider images lazily.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The name for a data attribute of src.
 *
 * @type {string}
 */

var SRC_DATA_NAME = 'data-splide-lazy';
/**
 * The name for a data attribute of srcset.
 *
 * @type {string}
 */

var SRCSET_DATA_NAME = 'data-splide-lazy-srcset';
/**
 * The component for loading slider images lazily.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 * @param {string} name       - A component name as a lowercase string.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const lazyload = (function (Splide, Components, name) {
  /**
   * Next index for sequential loading.
   *
   * @type {number}
   */
  var nextIndex;
  /**
   * Store objects containing an img element and a Slide object.
   *
   * @type {Object[]}
   */

  var images;
  /**
   * Store the options.
   *
   * @type {Object}
   */

  var options = Splide.options;
  /**
   * Whether to load images sequentially or not.
   *
   * @type {boolean}
   */

  var isSequential = options.lazyLoad === 'sequential';
  /**
   * Lazyload component object.
   *
   * @type {Object}
   */

  var Lazyload = {
    /**
     * Mount only when the lazyload option is provided.
     *
     * @type {boolean}
     */
    required: options.lazyLoad,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      Splide.on('mounted refresh', function () {
        init();
        Components.Elements.each(function (Slide) {
          each(Slide.slide.querySelectorAll("[" + SRC_DATA_NAME + "], [" + SRCSET_DATA_NAME + "]"), function (img) {
            if (!img.src && !img.srcset) {
              images.push({
                img: img,
                Slide: Slide
              });
              applyStyle(img, {
                display: 'none'
              });
            }
          });
        });

        if (isSequential) {
          loadNext();
        }
      });

      if (!isSequential) {
        Splide.on("mounted refresh moved." + name, check);
      }
    },

    /**
     * Destroy.
     */
    destroy: init
  };
  /**
   * Initialize parameters.
   */

  function init() {
    images = [];
    nextIndex = 0;
  }
  /**
   * Check how close each image is from the active slide and
   * determine whether to start loading or not, according to the distance.
   *
   * @param {number} index - Current index.
   */


  function check(index) {
    index = isNaN(index) ? Splide.index : index;
    images = images.filter(function (image) {
      if (image.Slide.isWithin(index, options.perPage * (options.preloadPages + 1))) {
        load(image.img, image.Slide);
        return false;
      }

      return true;
    }); // Unbind if all images are loaded.

    if (!images[0]) {
      Splide.off("moved." + name);
    }
  }
  /**
   * Start loading an image.
   * Creating a clone of the image element since setting src attribute directly to it
   * often occurs 'hitch', blocking some other processes of a browser.
   *
   * @param {Element} img   - An image element.
   * @param {Object}  Slide - A Slide object.
   */


  function load(img, Slide) {
    addClass(Slide.slide, STATUS_CLASSES.loading);
    var spinner = create('span', {
      "class": Splide.classes.spinner
    });
    append(img.parentElement, spinner);

    img.onload = function () {
      loaded(img, spinner, Slide, false);
    };

    img.onerror = function () {
      loaded(img, spinner, Slide, true);
    };

    setAttribute(img, 'srcset', getAttribute(img, SRCSET_DATA_NAME) || '');
    setAttribute(img, 'src', getAttribute(img, SRC_DATA_NAME) || '');
  }
  /**
   * Start loading a next image in images array.
   */


  function loadNext() {
    if (nextIndex < images.length) {
      var image = images[nextIndex];
      load(image.img, image.Slide);
    }

    nextIndex++;
  }
  /**
   * Called just after the image was loaded or loading was aborted by some error.
   *
   * @param {Element} img     - An image element.
   * @param {Element} spinner - A spinner element.
   * @param {Object}  Slide   - A Slide object.
   * @param {boolean} error   - True if the image was loaded successfully or false on error.
   */


  function loaded(img, spinner, Slide, error) {
    removeClass(Slide.slide, STATUS_CLASSES.loading);

    if (!error) {
      dom_remove(spinner);
      applyStyle(img, {
        display: ''
      });
      Splide.emit(name + ":loaded", img).emit('resize');
    }

    if (isSequential) {
      loadNext();
    }
  }

  return Lazyload;
});
;// CONCATENATED MODULE: ./src/js/constants/a11y.js
/**
 * Export aria attribute names.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Attribute name for aria-current.
 *
 * @type {string}
 */
var ARIA_CURRENRT = 'aria-current';
/**
 * Attribute name for aria-control.
 *
 * @type {string}
 */

var ARIA_CONTROLS = 'aria-controls';
/**
 * Attribute name for aria-control.
 *
 * @type {string}
 */

var ARIA_LABEL = 'aria-label';
/**
 * Attribute name for aria-labelledby.
 *
 * @type {string}
 */

var ARIA_LABELLEDBY = 'aria-labelledby';
/**
 * Attribute name for aria-hidden.
 *
 * @type {string}
 */

var ARIA_HIDDEN = 'aria-hidden';
/**
 * Attribute name for tab-index.
 *
 * @type {string}
 */

var TAB_INDEX = 'tabindex';
;// CONCATENATED MODULE: ./src/js/components/keyboard/index.js
/**
 * The component for controlling slides via keyboard.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * Map a key to a slide control.
 *
 * @type {Object}
 */

var KEY_MAP = {
  ltr: {
    ArrowLeft: '<',
    ArrowRight: '>',
    // For IE.
    Left: '<',
    Right: '>'
  },
  rtl: {
    ArrowLeft: '>',
    ArrowRight: '<',
    // For IE.
    Left: '>',
    Right: '<'
  },
  ttb: {
    ArrowUp: '<',
    ArrowDown: '>',
    // For IE.
    Up: '<',
    Down: '>'
  }
};
/**
 * The component for controlling slides via keyboard.
 *
 * @param {Splide} Splide - A Splide instance.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const keyboard = (function (Splide) {
  /**
   * Hold the target element.
   *
   * @type {Element|Document|undefined}
   */
  var target;
  return {
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      Splide.on('mounted updated', function () {
        var options = Splide.options;
        var root = Splide.root;
        var map = KEY_MAP[options.direction];
        var keyboard = options.keyboard;

        if (target) {
          Splide.off('keydown', target);
          removeAttribute(root, TAB_INDEX);
        }

        if (keyboard) {
          if (keyboard === 'focused') {
            target = root;
            setAttribute(root, TAB_INDEX, 0);
          } else {
            target = document;
          }

          Splide.on('keydown', function (e) {
            if (map[e.key]) {
              Splide.go(map[e.key]);
            }
          }, target);
        }
      });
    }
  };
});
;// CONCATENATED MODULE: ./src/js/components/a11y/index.js
/**
 * The component for enhancing accessibility.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The component for enhancing accessibility.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const a11y = (function (Splide, Components) {
  /**
   * Hold a i18n object.
   *
   * @type {Object}
   */
  var i18n = Splide.i18n;
  /**
   * Hold the Elements component.
   *
   * @type {Object}
   */

  var Elements = Components.Elements;
  /**
   * All attributes related with A11y.
   *
   * @type {string[]}
   */

  var allAttributes = [ARIA_HIDDEN, TAB_INDEX, ARIA_CONTROLS, ARIA_LABEL, ARIA_CURRENRT, 'role'];
  /**
   * A11y component object.
   *
   * @type {Object}
   */

  var A11y = {
    /**
     * Required only when the accessibility option is true.
     *
     * @type {boolean}
     */
    required: Splide.options.accessibility,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      Splide.on('visible', function (Slide) {
        updateSlide(Slide.slide, true);
      }).on('hidden', function (Slide) {
        updateSlide(Slide.slide, false);
      }).on('arrows:mounted', initArrows).on('arrows:updated', updateArrows).on('pagination:mounted', initPagination).on('pagination:updated', updatePagination).on('refresh', function () {
        removeAttribute(Components.Clones.clones, allAttributes);
      });

      if (Splide.options.isNavigation) {
        Splide.on('navigation:mounted navigation:updated', initNavigation).on('active', function (Slide) {
          updateNavigation(Slide, true);
        }).on('inactive', function (Slide) {
          updateNavigation(Slide, false);
        });
      }

      initAutoplay();
    },

    /**
     * Destroy.
     */
    destroy: function destroy() {
      var Arrows = Components.Arrows;
      var arrows = Arrows ? Arrows.arrows : {};
      removeAttribute(Elements.slides.concat([arrows.prev, arrows.next, Elements.play, Elements.pause]), allAttributes);
    }
  };
  /**
   * Update slide attributes when it gets visible or hidden.
   *
   * @param {Element} slide   - A slide element.
   * @param {Boolean} visible - True when the slide gets visible, or false when hidden.
   */

  function updateSlide(slide, visible) {
    setAttribute(slide, ARIA_HIDDEN, !visible);

    if (Splide.options.slideFocus) {
      setAttribute(slide, TAB_INDEX, visible ? 0 : -1);
    }
  }
  /**
   * Initialize arrows if they are available.
   * Append screen reader elements and add aria-controls attribute.
   *
   * @param {Element} prev - Previous arrow element.
   * @param {Element} next - Next arrow element.
   */


  function initArrows(prev, next) {
    var controls = Elements.track.id;
    setAttribute(prev, ARIA_CONTROLS, controls);
    setAttribute(next, ARIA_CONTROLS, controls);
  }
  /**
   * Update arrow attributes.
   *
   * @param {Element} prev      - Previous arrow element.
   * @param {Element} next      - Next arrow element.
   * @param {number}  prevIndex - Previous slide index or -1 when there is no precede slide.
   * @param {number}  nextIndex - Next slide index or -1 when there is no next slide.
   */


  function updateArrows(prev, next, prevIndex, nextIndex) {
    var index = Splide.index;
    var prevLabel = prevIndex > -1 && index < prevIndex ? i18n.last : i18n.prev;
    var nextLabel = nextIndex > -1 && index > nextIndex ? i18n.first : i18n.next;
    setAttribute(prev, ARIA_LABEL, prevLabel);
    setAttribute(next, ARIA_LABEL, nextLabel);
  }
  /**
   * Initialize pagination if it's available.
   * Append a screen reader element and add aria-controls/label attribute to each item.
   *
   * @param {Object} data       - Data object containing all items.
   * @param {Object} activeItem - An initial active item.
   */


  function initPagination(data, activeItem) {
    if (activeItem) {
      setAttribute(activeItem.button, ARIA_CURRENRT, true);
    }

    data.items.forEach(function (item) {
      var options = Splide.options;
      var text = options.focus === false && options.perPage > 1 ? i18n.pageX : i18n.slideX;
      var label = sprintf(text, item.page + 1);
      var button = item.button;
      var controls = item.Slides.map(function (Slide) {
        return Slide.slide.id;
      });
      setAttribute(button, ARIA_CONTROLS, controls.join(' '));
      setAttribute(button, ARIA_LABEL, label);
    });
  }
  /**
   * Update pagination attributes.
   *
   * @param {Object}  data - Data object containing all items.
   * @param {Element} prev - A previous active element.
   * @param {Element} curr - A current active element.
   */


  function updatePagination(data, prev, curr) {
    if (prev) {
      removeAttribute(prev.button, ARIA_CURRENRT);
    }

    if (curr) {
      setAttribute(curr.button, ARIA_CURRENRT, true);
    }
  }
  /**
   * Initialize autoplay buttons.
   */


  function initAutoplay() {
    ['play', 'pause'].forEach(function (name) {
      var elm = Elements[name];

      if (elm) {
        if (!isButton(elm)) {
          setAttribute(elm, 'role', 'button');
        }

        setAttribute(elm, ARIA_CONTROLS, Elements.track.id);
        setAttribute(elm, ARIA_LABEL, i18n[name]);
      }
    });
  }
  /**
   * Initialize navigation slider.
   * Add button role, aria-label, aria-controls to slide elements and append screen reader text to them.
   *
   * @param {Splide} main - A main Splide instance.
   */


  function initNavigation(main) {
    Elements.each(function (Slide) {
      var slide = Slide.slide;
      var realIndex = Slide.realIndex;

      if (!isButton(slide)) {
        setAttribute(slide, 'role', 'button');
      }

      var slideIndex = realIndex > -1 ? realIndex : Slide.index;
      var label = sprintf(i18n.slideX, slideIndex + 1);
      var mainSlide = main.Components.Elements.getSlide(slideIndex);
      setAttribute(slide, ARIA_LABEL, label);

      if (mainSlide) {
        setAttribute(slide, ARIA_CONTROLS, mainSlide.slide.id);
      }
    });
  }
  /**
   * Update navigation attributes.
   *
   * @param {Object}  Slide  - A target Slide object.
   * @param {boolean} active - True if the slide is active or false if inactive.
   */


  function updateNavigation(_ref, active) {
    var slide = _ref.slide;

    if (active) {
      setAttribute(slide, ARIA_CURRENRT, true);
    } else {
      removeAttribute(slide, ARIA_CURRENRT);
    }
  }
  /**
   * Check if the given element is button or not.
   *
   * @param {Element} elm - An element to be checked.
   *
   * @return {boolean} - True if the given element is button.
   */


  function isButton(elm) {
    return elm.tagName === 'BUTTON';
  }

  return A11y;
});
;// CONCATENATED MODULE: ./src/js/components/sync/index.js
/**
 * The component for synchronizing a slider with another.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * The event name for sync.
 *
 * @type {string}
 */

var SYNC_EVENT = 'move.sync';
/**
 * The event names for click navigation.
 * @type {string}
 */

var CLICK_EVENTS = 'mouseup touchend';
/**
 * The keys for triggering the navigation button.
 *
 * @type {String[]}
 */

var TRIGGER_KEYS = [' ', 'Enter', 'Spacebar'];
/**
 * The component for synchronizing a slider with another.
 *
 * @param {Splide} Splide - A Splide instance.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const sync = (function (Splide) {
  /**
   * Keep the sibling Splide instance.
   *
   * @type {Splide}
   */
  var sibling = Splide.sibling;
  /**
   * Whether the sibling slider is navigation or not.
   *
   * @type {Splide|boolean}
   */

  var isNavigation = sibling && sibling.options.isNavigation;
  /**
   * Layout component object.
   *
   * @type {Object}
   */

  var Sync = {
    /**
     * Required only when the sub slider is available.
     *
     * @type {boolean}
     */
    required: !!sibling,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      syncMain();
      syncSibling();

      if (isNavigation) {
        bind();
        Splide.on('refresh', function () {
          setTimeout(function () {
            bind();
            sibling.emit('navigation:updated', Splide);
          });
        });
      }
    },

    /**
     * Called after all components are mounted.
     */
    mounted: function mounted() {
      if (isNavigation) {
        sibling.emit('navigation:mounted', Splide);
      }
    }
  };
  /**
   * Listen the primary slider event to move secondary one.
   * Must unbind a handler at first to avoid infinite loop.
   */

  function syncMain() {
    Splide.on(SYNC_EVENT, function (newIndex, prevIndex, destIndex) {
      sibling.off(SYNC_EVENT).go(sibling.is(LOOP) ? destIndex : newIndex, false);
      syncSibling();
    });
  }
  /**
   * Listen the secondary slider event to move primary one.
   * Must unbind a handler at first to avoid infinite loop.
   */


  function syncSibling() {
    sibling.on(SYNC_EVENT, function (newIndex, prevIndex, destIndex) {
      Splide.off(SYNC_EVENT).go(Splide.is(LOOP) ? destIndex : newIndex, false);
      syncMain();
    });
  }
  /**
   * Listen some events on each slide.
   */


  function bind() {
    sibling.Components.Elements.each(function (_ref) {
      var slide = _ref.slide,
          index = _ref.index;

      /*
       * Listen mouseup and touchend events to handle click.
       */
      Splide.off(CLICK_EVENTS, slide).on(CLICK_EVENTS, function (e) {
        // Ignore a middle or right click.
        if (!e.button || e.button === 0) {
          moveSibling(index);
        }
      }, slide);
      /*
       * Subscribe keyup to handle Enter and Space key.
       * Note that Array.includes is not supported by IE.
       */

      Splide.off('keyup', slide).on('keyup', function (e) {
        if (TRIGGER_KEYS.indexOf(e.key) > -1) {
          e.preventDefault();
          moveSibling(index);
        }
      }, slide, {
        passive: false
      });
    });
  }
  /**
   * Move the sibling to the given index.
   * Need to check "IDLE" status because slides can be moving by Drag component.
   *
   * @param {number} index - Target index.
   */


  function moveSibling(index) {
    if (Splide.State.is(IDLE)) {
      sibling.go(index);
    }
  }

  return Sync;
});
;// CONCATENATED MODULE: ./src/js/components/breakpoints/index.js
/**
 * The component for updating options according to a current window width.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * Interval time for throttle.
 *
 * @type {number}
 */

var THROTTLE = 50;
/**
 * The component for updating options according to a current window width.
 *
 * @param {Splide} Splide - A Splide instance.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const breakpoints = (function (Splide) {
  /**
   * Store breakpoints.
   *
   * @type {Object|boolean}
   */
  var breakpoints = Splide.options.breakpoints;
  /**
   * The check function whose frequency of call is reduced.
   *
   * @type {Function}
   */

  var throttledCheck = throttle(check, THROTTLE);
  /**
   * Keep initial options.
   *
   * @type {Object}
   */

  var initialOptions;
  /**
   * An array containing objects of point and MediaQueryList.
   *
   * @type {Object[]}
   */

  var map = [];
  /**
   * Hold the previous breakpoint.
   *
   * @type {number|undefined}
   */

  var prevPoint;
  /**
   * Breakpoints component object.
   *
   * @type {Object}
   */

  var Breakpoints = {
    /**
     * Required only when the breakpoints definition is provided and browser supports matchMedia.
     *
     * @type {boolean}
     */
    required: breakpoints && matchMedia,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      map = Object.keys(breakpoints).sort(function (n, m) {
        return +n - +m;
      }).map(function (point) {
        return {
          point: point,
          mql: matchMedia("(max-width:" + point + "px)")
        };
      });
      /*
       * To keep monitoring resize event after destruction without "completely",
       * use native addEventListener instead of Splide.on.
       */

      this.destroy(true);
      addEventListener('resize', throttledCheck); // Keep initial options to apply them when no breakpoint matches.

      initialOptions = Splide.options;
      check();
    },

    /**
     * Destroy.
     *
     * @param {boolean} completely - Whether to destroy Splide completely.
     */
    destroy: function destroy(completely) {
      if (completely) {
        removeEventListener('resize', throttledCheck);
      }
    }
  };
  /**
   * Check the breakpoint.
   */

  function check() {
    var point = getPoint();

    if (point !== prevPoint) {
      prevPoint = point;
      var State = Splide.State;
      var options = breakpoints[point] || initialOptions;
      var destroy = options.destroy;

      if (destroy) {
        Splide.options = initialOptions;
        Splide.destroy(destroy === 'completely');
      } else {
        if (State.is(DESTROYED)) {
          Splide.mount();
        }

        Splide.options = options;
      }
    }
  }
  /**
   * Return the breakpoint matching current window width.
   * Note that Array.prototype.find is not supported by IE.
   *
   * @return {number|string} - A breakpoint as number or string. -1 if no point matches.
   */


  function getPoint() {
    var item = map.filter(function (item) {
      return item.mql.matches;
    })[0];
    return item ? item.point : -1;
  }

  return Breakpoints;
});
;// CONCATENATED MODULE: ./src/js/components/index.js
/**
 * Export components.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

















var COMPLETE = {
  Options: options,
  Breakpoints: breakpoints,
  Controller: controller,
  Elements: components_elements,
  Track: track,
  Clones: clones,
  Layout: layout,
  Drag: drag,
  Click: click,
  Autoplay: autoplay,
  Cover: cover,
  Arrows: arrows,
  Pagination: pagination,
  LazyLoad: lazyload,
  Keyboard: keyboard,
  Sync: sync,
  A11y: a11y
};
var LIGHT = {
  Options: options,
  Controller: controller,
  Elements: components_elements,
  Track: track,
  Clones: clones,
  Layout: layout,
  Drag: drag,
  Click: click,
  Arrows: arrows,
  Pagination: pagination,
  A11y: a11y
};
;// CONCATENATED MODULE: ./build/module/module.js
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * Export Splide class for import.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * Export Splide class for import from other projects.
 */

var module_Splide = /*#__PURE__*/function (_Core) {
  _inheritsLoose(Splide, _Core);

  function Splide(root, options) {
    return _Core.call(this, root, options, COMPLETE) || this;
  }

  return Splide;
}(Splide);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_139193__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_139193__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_139193__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_139193__.o(definition, key) && !__nested_webpack_require_139193__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_139193__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_139193__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_139193__(311);
/******/ })()
;
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./main.scss":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./main.scss ***!
  \***********************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_fonts_Capsuula_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/fonts/Capsuula.ttf */ "./src/fonts/Capsuula.ttf");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_src_fonts_Capsuula_ttf__WEBPACK_IMPORTED_MODULE_3__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n@font-face {\n  font-family: \"Capsuula\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"trueType\");\n}\nbody {\n  overflow-x: hidden;\n  width: 100vw;\n  height: 100vh;\n  background-color: black;\n  font-family: Capsuula;\n}\n\n.grid-container .small-bg-white .medium-pt-128 .pt-80 {\n  font-size: 16px;\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  --swiper-theme-color: #007aff;\n  --swiper-navigation-size: 44px;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  padding-right: 2rem;\n  padding-left: 2rem;\n  max-width: 90rem;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 8rem;\n}\n\n.grid-x .grid-margin-x {\n  font-size: 16px;\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  --swiper-theme-color: #007aff;\n  --swiper-navigation-size: 44px;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}", "",{"version":3,"sources":["webpack://./main.scss"],"names":[],"mappings":"AAAA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;AACF;;AACA;EACE,uBAAA;EACA,+DAAA;AAEF;AAAA;EACE,kBAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,qBAAA;AAEF;;AAAA;EACE,eAAA;EACA,iDAAA;EACA,kCAAA;EACA,mCAAA;EACA,6BAAA;EACA,8BAAA;EACA,SAAA;EACA,UAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,iBAAA;AAGF;;AADA;EACE,eAAA;EACA,iDAAA;EACA,kCAAA;EACA,mCAAA;EACA,6BAAA;EACA,8BAAA;EACA,SAAA;EACA,UAAA;EACA,sBAAA;AAIF","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n@font-face {\r\n  font-family: \"Capsuula\";\r\n  src: url(\"./src/fonts/Capsuula.ttf\") format(\"trueType\");\r\n}\r\nbody {\r\n  overflow-x: hidden;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: black;\r\n  font-family: Capsuula;\r\n}\r\n.grid-container .small-bg-white .medium-pt-128 .pt-80 {\r\n  font-size: 16px;\r\n  font-family: Avenir, Helvetica, Arial, sans-serif;\r\n  text-rendering: optimizeLegibility;\r\n  -webkit-font-smoothing: antialiased;\r\n  --swiper-theme-color: #007aff;\r\n  --swiper-navigation-size: 44px;\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  padding-right: 2rem;\r\n  padding-left: 2rem;\r\n  max-width: 90rem;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  padding-top: 8rem;\r\n}\r\n.grid-x .grid-margin-x {\r\n  font-size: 16px;\r\n  font-family: Avenir, Helvetica, Arial, sans-serif;\r\n  text-rendering: optimizeLegibility;\r\n  -webkit-font-smoothing: antialiased;\r\n  --swiper-theme-color: #007aff;\r\n  --swiper-navigation-size: 44px;\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/home/Home.module.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/home/Home.module.scss ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_home_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/home.jpg */ "./src/images/home.jpg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_home_jpg__WEBPACK_IMPORTED_MODULE_3__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Home-module__container--fYjAH {\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n}\n\n.Home-module__logo--F2xrG {\n  position: fixed;\n  top: 50%;\n  /* position the top  edge of the element at the middle of the parent */\n  /* position the left edge of the element at the middle of the parent */\n  width: 600px;\n  left: 50%;\n  z-index: 2;\n  transform: translate(-50%, -50%);\n  object-fit: cover;\n  object-position: center center;\n}", "",{"version":3,"sources":["webpack://./Home.module.scss"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,YAAA;EAEA,UAAA;EACA,4GAAA;EAEA,4BAAA;EACA,4BAAA;EACA,sBAAA;AADF;;AAGA;EACE,eAAA;EACA,QAAA;EAAU,sEAAA;EACV,sEAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,gCAAA;EACA,iBAAA;EACA,8BAAA;AACF","sourcesContent":[".container {\r\n  width: 100%;\r\n  height: 100%;\r\n \r\n  z-index: 2;\r\n  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\r\n    url(\"../../images/home.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n}\r\n.logo {\r\n  position: fixed;\r\n  top: 50%; /* position the top  edge of the element at the middle of the parent */\r\n  /* position the left edge of the element at the middle of the parent */\r\n  width: 600px;\r\n  left: 50%;\r\n  z-index: 2;\r\n  transform: translate(-50%, -50%);\r\n  object-fit: cover;\r\n  object-position: center center;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "Home-module__container--fYjAH",
	"logo": "Home-module__logo--F2xrG"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/hybridCarousel/hybridCarousel.module.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/hybridCarousel/hybridCarousel.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".hybridCarousel-module__container--3f2_S {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 60px;\n  margin-bottom: 400px;\n  position: relative;\n}\n.hybridCarousel-module__container--3f2_S .hybridCarousel-module__content-container--154y6 {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n.hybridCarousel-module__content-image--1_GrM {\n  width: 100%;\n  object-fit: cover;\n  height: auto;\n}\n\n.hybridCarousel-module__text-content-container--3tIqH {\n  position: relative;\n  z-index: 2;\n  padding-right: 80px;\n  padding-bottom: 30px;\n  width: 400px;\n}\n.hybridCarousel-module__text-content-container--3tIqH h5 {\n  font-size: 42.84px;\n  text-align: right;\n  padding-left: 15px;\n  color: #860016;\n  padding-bottom: 40px;\n}\n.hybridCarousel-module__text-content-container--3tIqH p {\n  margin-bottom: 20px;\n  line-height: 1.3;\n  font-size: 18px;\n  text-align: left;\n}\n\n.hybridCarousel-module__banner-container--3UQjo {\n  margin: auto;\n  background-color: white;\n  display: flex;\n  width: calc(41.66667% - 2rem);\n  padding-top: 8rem;\n  position: relative;\n}\n\n.hybridCarousel-module__banner-content--1Ivee:after {\n  content: \"\";\n  position: absolute;\n  top: -8rem;\n  right: -3rem;\n  bottom: -2rem;\n  z-index: 1;\n  width: 100vw;\n  background-color: #fff;\n}", "",{"version":3,"sources":["webpack://./hybridCarousel.module.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,oBAAA;EACA,kBAAA;AACF;AAAE;EACE,aAAA;EACA,sBAAA;EACA,kBAAA;AAEJ;;AACA;EACE,WAAA;EACA,iBAAA;EACA,YAAA;AAEF;;AACA;EACE,kBAAA;EACA,UAAA;EAEA,mBAAA;EACA,oBAAA;EASA,YAAA;AAPF;AAAE;EACE,kBAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;EACA,oBAAA;AAEJ;AACE;EACE,mBAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;AACJ;;AAEA;EACE,YAAA;EACA,uBAAA;EACA,aAAA;EACA,6BAAA;EACA,iBAAA;EACA,kBAAA;AACF;;AAEE;EACE,WAAA;EACA,kBAAA;EACA,UAAA;EAEA,YAAA;EACA,aAAA;EACA,UAAA;EACA,YAAA;EACA,sBAAA;AAAJ","sourcesContent":[".container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 60px;\r\n  margin-bottom: 400px;\r\n  position: relative;\r\n  .content-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: relative;\r\n  }\r\n}\r\n.content-image {\r\n  width: 100%;\r\n  object-fit: cover;\r\n  height: auto;\r\n}\r\n\r\n.text-content-container {\r\n  position: relative;\r\n  z-index: 2;\r\n\r\n  padding-right: 80px;\r\n  padding-bottom: 30px;\r\n\r\n  h5 {\r\n    font-size: 42.84px;\r\n    text-align: right;\r\n    padding-left: 15px;\r\n    color: #860016;\r\n    padding-bottom: 40px;\r\n  }\r\n  width: 400px;\r\n  p {\r\n    margin-bottom: 20px;\r\n    line-height: 1.3;\r\n    font-size: 18px;\r\n    text-align: left;\r\n  }\r\n}\r\n.banner-container {\r\n  margin: auto;\r\n  background-color: white;\r\n  display: flex;\r\n  width: calc(41.66667% - 2rem);\r\n  padding-top: 8rem;\r\n  position: relative;\r\n}\r\n.banner-content {\r\n  &:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: -8rem;\r\n\r\n    right: -3rem;\r\n    bottom: -2rem;\r\n    z-index: 1;\r\n    width: 100vw;\r\n    background-color: #fff;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "hybridCarousel-module__container--3f2_S",
	"content-container": "hybridCarousel-module__content-container--154y6",
	"content-image": "hybridCarousel-module__content-image--1_GrM",
	"text-content-container": "hybridCarousel-module__text-content-container--3tIqH",
	"banner-container": "hybridCarousel-module__banner-container--3UQjo",
	"banner-content": "hybridCarousel-module__banner-content--1Ivee"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/hybridImage/hybridImage.module.scss":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/hybridImage/hybridImage.module.scss ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".hybridImage-module__container--ARXJq {\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  margin-top: 140px;\n  margin-bottom: 180px;\n}\n\n.hybridImage-module__content-image-container--BoGss {\n  width: 1317px;\n  height: 40rem;\n  margin: auto;\n}\n.hybridImage-module__content-image-container--BoGss .hybridImage-module__content-image--1WzRN {\n  display: block;\n  width: 100%;\n  height: 100%;\n  margin-top: -4rem;\n  object-position: center center;\n  object-fit: cover;\n}\n\n.hybridImage-module__text-container--3SY5q {\n  overflow: visible;\n  /* left:auto; */\n  /* right:-3rem; */\n  z-index: -1;\n  position: relative;\n  background-color: white;\n  border: 1px solid rgba(0, 1, 2, 0.226);\n  margin-left: 1rem;\n  margin-right: 1rem;\n  top: -12rem;\n}\n.hybridImage-module__text-container--3SY5q::after {\n  content: \"\";\n  position: absolute;\n  top: -8rem;\n  bottom: -13rem;\n  z-index: -1;\n  width: 100vw;\n  background-color: #fff;\n}\n\n.hybridImage-module__text-content-container--b0OHY {\n  position: relative;\n  z-index: 2;\n  padding-left: 60px;\n  width: 400px;\n}\n.hybridImage-module__text-content-container--b0OHY h5 {\n  font-size: 42.84px;\n  text-align: left;\n  padding-left: 15px;\n  color: #860016;\n  padding-bottom: 40px;\n}\n.hybridImage-module__text-content-container--b0OHY p {\n  margin-bottom: 20px;\n  line-height: 1.3;\n  font-size: 18px;\n  text-align: left;\n}\n\n.hybridImage-module__banner-container--1Iys7 {\n  margin: auto;\n  background-color: white;\n  display: flex;\n  width: calc(41.66667% - 2rem);\n  position: relative;\n}\n\n.hybridImage-module__banner-content--1Ldo6:after {\n  content: \"\";\n  position: absolute;\n  top: -8rem;\n  left: auto;\n  /* right: -3rem; */\n  bottom: -2rem;\n  z-index: 1;\n  width: 100vw;\n  background-color: #fff;\n}", "",{"version":3,"sources":["webpack://./hybridImage.module.scss"],"names":[],"mappings":"AAAA;EACE,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,iBAAA;EAEA,oBAAA;AAAF;;AAEA;EACE,aAAA;EACA,aAAA;EACA,YAAA;AACF;AAAE;EACE,cAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,8BAAA;EACA,iBAAA;AAEJ;;AACA;EACE,iBAAA;EAEA,eAAA;EACA,iBAAA;EAEA,WAAA;EAEA,kBAAA;EACA,uBAAA;EAEA,sCAAA;EACA,iBAAA;EACA,kBAAA;EACA,WAAA;AAFF;AAGE;EACE,WAAA;EACA,kBAAA;EACA,UAAA;EAEA,cAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;AAFJ;;AAKA;EACE,kBAAA;EACA,UAAA;EACA,kBAAA;EASA,YAAA;AAVF;AAGE;EACE,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,cAAA;EACA,oBAAA;AADJ;AAIE;EACE,mBAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;AAFJ;;AAKA;EACE,YAAA;EACA,uBAAA;EACA,aAAA;EACA,6BAAA;EAEA,kBAAA;AAHF;;AAME;EACE,WAAA;EACA,kBAAA;EACA,UAAA;EACA,UAAA;EACA,kBAAA;EACA,aAAA;EACA,UAAA;EACA,YAAA;EACA,sBAAA;AAHJ","sourcesContent":[".container {\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100vw;\r\n  margin-top: 140px;\r\n\r\n  margin-bottom: 180px;\r\n}\r\n.content-image-container {\r\n  width: 1317px;\r\n  height: 40rem;\r\n  margin: auto;\r\n  .content-image {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    margin-top: -4rem;\r\n    object-position: center center;\r\n    object-fit: cover;\r\n  }\r\n}\r\n.text-container {\r\n  overflow: visible;\r\n\r\n  /* left:auto; */\r\n  /* right:-3rem; */\r\n\r\n  z-index: -1;\r\n\r\n  position: relative;\r\n  background-color: white;\r\n\r\n  border: 1px solid rgba(0, 1, 2, 0.226);\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n  top: -12rem;\r\n  &::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: -8rem;\r\n\r\n    bottom: -13rem;\r\n    z-index: -1;\r\n    width: 100vw;\r\n    background-color: #fff;\r\n  }\r\n}\r\n.text-content-container {\r\n  position: relative;\r\n  z-index: 2;\r\n  padding-left: 60px;\r\n \r\n  h5 {\r\n    font-size: 42.84px;\r\n    text-align: left;\r\n    padding-left: 15px;\r\n    color: #860016;\r\n    padding-bottom: 40px;\r\n  }\r\n  width: 400px;\r\n  p {\r\n    margin-bottom: 20px;\r\n    line-height: 1.3;\r\n    font-size: 18px;\r\n    text-align: left;\r\n  }\r\n}\r\n.banner-container {\r\n  margin: auto;\r\n  background-color: white;\r\n  display: flex;\r\n  width: calc(41.66667% - 2rem);\r\n\r\n  position: relative;\r\n}\r\n.banner-content {\r\n  &:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: -8rem;\r\n    left: auto;\r\n    /* right: -3rem; */\r\n    bottom: -2rem;\r\n    z-index: 1;\r\n    width: 100vw;\r\n    background-color: #fff;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "hybridImage-module__container--ARXJq",
	"content-image-container": "hybridImage-module__content-image-container--BoGss",
	"content-image": "hybridImage-module__content-image--1WzRN",
	"text-container": "hybridImage-module__text-container--3SY5q",
	"text-content-container": "hybridImage-module__text-content-container--b0OHY",
	"banner-container": "hybridImage-module__banner-container--1Iys7",
	"banner-content": "hybridImage-module__banner-content--1Ldo6"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/navbar/navbar.module.scss":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/navbar/navbar.module.scss ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".navbar-module__nav-wrapper--1OWRe {\n  position: fixed;\n  width: 100%;\n  z-index: 5;\n}\n.navbar-module__nav-wrapper--1OWRe .navbar-module__container--19Kbc {\n  top: 0;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  object-fit: cover;\n}\n.navbar-module__nav-wrapper--1OWRe .navbar-module__container--19Kbc .navbar-module__content-container--1DK8g {\n  padding: 30px;\n}\n.navbar-module__nav-wrapper--1OWRe .navbar-module__container--19Kbc .navbar-module__logo-container--13fOX {\n  width: 200px;\n}\n.navbar-module__nav-wrapper--1OWRe .navbar-module__container--19Kbc .navbar-module__logo-container--13fOX svg {\n  opacity: 70%;\n  fill: white;\n  transition: all 0.4s ease;\n}\n.navbar-module__nav-wrapper--1OWRe:after {\n  content: \"\";\n  /* This is necessary for the pseudo element to work. */\n  display: block;\n  /* This will put the pseudo element on its own line. */\n  margin: 0 auto;\n  /* This will center the border. */\n  width: 50%;\n  /* Change this to whatever width you want. */\n  /* This creates some space between the element and the border. */\n  border-bottom: 1px solid rgba(255, 255, 255, 0.25);\n  /* This creates the border. Replace black with whatever color you want. */\n}", "",{"version":3,"sources":["webpack://./navbar.module.scss"],"names":[],"mappings":"AAAA;EACE,eAAA;EACA,WAAA;EACA,UAAA;AACF;AAAE;EACE,MAAA;EACA,WAAA;EACA,aAAA;EAEA,uBAAA;EAMA,iBAAA;AAJJ;AAAI;EACE,aAAA;AAEN;AAEI;EACE,YAAA;AAAN;AAEM;EACE,YAAA;EACA,WAAA;EACA,yBAAA;AAAR;AAIE;EACE,WAAA;EAAa,sDAAA;EACb,cAAA;EAAgB,sDAAA;EAChB,cAAA;EAAgB,iCAAA;EAChB,UAAA;EAAY,4CAAA;EACZ,gEAAA;EACA,kDAAA;EAAoD,yEAAA;AAGxD","sourcesContent":[".nav-wrapper {\r\n  position: fixed;\r\n  width: 100%;\r\n  z-index: 5;\r\n  .container {\r\n    top: 0;\r\n    width: 100%;\r\n    display: flex;\r\n    \r\n    justify-content: center;\r\n\r\n    .content-container {\r\n      padding: 30px;\r\n    }\r\n\r\n    object-fit: cover;\r\n    .logo-container {\r\n      width: 200px;\r\n\r\n      svg {\r\n        opacity: 70%;\r\n        fill: white;\r\n        transition: all 0.4s ease;\r\n      }\r\n    }\r\n  }\r\n  &:after {\r\n    content: \"\"; /* This is necessary for the pseudo element to work. */\r\n    display: block; /* This will put the pseudo element on its own line. */\r\n    margin: 0 auto; /* This will center the border. */\r\n    width: 50%; /* Change this to whatever width you want. */\r\n    /* This creates some space between the element and the border. */\r\n    border-bottom: 1px solid rgba(255, 255, 255, 0.25); /* This creates the border. Replace black with whatever color you want. */\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"nav-wrapper": "navbar-module__nav-wrapper--1OWRe",
	"container": "navbar-module__container--19Kbc",
	"content-container": "navbar-module__content-container--1DK8g",
	"logo-container": "navbar-module__logo-container--13fOX"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/quote/quote.module.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/quote/quote.module.scss ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".quote-module__container--2hLlW {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  position: relative;\n}\n.quote-module__container--2hLlW .quote-module__content-container--S0QAl {\n  width: 800px;\n}\n\n.quote-module__content-image--1Hort {\n  width: 100%;\n}", "",{"version":3,"sources":["webpack://./quote.module.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EAEA,kBAAA;AAAF;AACE;EACE,YAAA;AACJ;;AAEA;EACE,WAAA;AACF","sourcesContent":[".container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100%;\r\n\r\n  position: relative;\r\n  .content-container {\r\n    width: 800px;\r\n  }\r\n}\r\n.content-image {\r\n  width: 100%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "quote-module__container--2hLlW",
	"content-container": "quote-module__content-container--S0QAl",
	"content-image": "quote-module__content-image--1Hort"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/wrapper/wrapper.module.scss":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/wrapper/wrapper.module.scss ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".wrapper-module__container--3-lcI {\n  background-color: black;\n  width: 100%;\n  position: relative;\n  z-index: 4;\n  height: 100%;\n}\n\n.wrapper-module__scroll-header--RdRbC {\n  position: fixed;\n  top: -130px;\n  transition: all 0.4s ease;\n  background-color: white;\n  height: 130px;\n  width: 100%;\n  z-index: 1;\n}", "",{"version":3,"sources":["webpack://./wrapper.module.scss"],"names":[],"mappings":"AAAA;EAEE,uBAAA;EACA,WAAA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;AAAF;;AAEA;EACE,eAAA;EACA,WAAA;EAEA,yBAAA;EACA,uBAAA;EACA,aAAA;EACA,WAAA;EACA,UAAA;AAAF","sourcesContent":[".container {\r\n  // background-color: #f9f7f7;\r\n  background-color: black;\r\n  width: 100%;\r\n  position: relative;\r\n  z-index: 4;\r\n  height: 100%;\r\n}\r\n.scroll-header {\r\n  position: fixed;\r\n  top: -130px;\r\n\r\n  transition: all 0.4s ease;\r\n  background-color: white;\r\n  height: 130px;\r\n  width: 100%;\r\n  z-index: 1;\r\n}\r\n.content-container {\r\n\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "wrapper-module__container--3-lcI",
	"scroll-header": "wrapper-module__scroll-header--RdRbC"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/gallerySlider/gallerySlider.module.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/gallerySlider/gallerySlider.module.scss ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".gallerySlider-module__image-container--UkFCj {\n  width: 100%;\n  background-color: grey;\n  height: 100%;\n}\n.gallerySlider-module__image-container--UkFCj .gallerySlider-module__gallery-image--23pjG {\n  width: 100%;\n  object-position: center center;\n  object-fit: cover;\n}\n\n.gallerySlider-module__gallery-container--AVMHj {\n  left: 50%;\n  margin: auto;\n  width: 800px;\n  margin-top: -90px;\n}\n\n.gallerySlider-module__hybrid-gallery-container--2kzW5 {\n  display: block;\n  width: 800px;\n}\n\n.gallerySlider-module__left--bIcDA {\n  left: -5em;\n}\n.gallerySlider-module__left--bIcDA svg {\n  transform: scaleX(-1);\n}\n\n.gallerySlider-module__right--1wEa1 {\n  right: -5em;\n}", "",{"version":3,"sources":["webpack://./gallerySlider.module.scss"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,sBAAA;EACA,YAAA;AACF;AAAE;EACE,WAAA;EAEA,8BAAA;EACA,iBAAA;AACJ;;AAEA;EAEE,SAAA;EACF,YAAA;EACE,YAAA;EACA,iBAAA;AAAF;;AAGA;EACE,cAAA;EACA,YAAA;AAAF;;AAEA;EACE,UAAA;AACF;AAAE;EACE,qBAAA;AAEJ;;AACA;EACE,WAAA;AAEF","sourcesContent":[".image-container {\r\n  width: 100%;\r\n  background-color: grey;\r\n  height: 100%;\r\n  .gallery-image {\r\n    width: 100%;\r\n    \r\n    object-position: center center;\r\n    object-fit: cover;\r\n  }\r\n}\r\n.gallery-container {\r\n\r\n  left: 50%;\r\nmargin: auto;\r\n  width: 800px;\r\n  margin-top: -90px;\r\n\r\n}\r\n.hybrid-gallery-container {\r\n  display: block;\r\n  width: 800px;\r\n}\r\n.left {\r\n  left: -5em;\r\n  svg {\r\n    transform: scaleX(-1);\r\n  }\r\n}\r\n.right {\r\n  right: -5em;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"image-container": "gallerySlider-module__image-container--UkFCj",
	"gallery-image": "gallerySlider-module__gallery-image--23pjG",
	"gallery-container": "gallerySlider-module__gallery-container--AVMHj",
	"hybrid-gallery-container": "gallerySlider-module__hybrid-gallery-container--2kzW5",
	"left": "gallerySlider-module__left--bIcDA",
	"right": "gallerySlider-module__right--1wEa1"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./main.scss":
/*!*******************!*\
  !*** ./main.scss ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./main.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/home/Home.module.scss":
/*!**********************************************!*\
  !*** ./src/components/home/Home.module.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_Home_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js!./Home.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/home/Home.module.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_Home_module_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_Home_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/hybridCarousel/hybridCarousel.module.scss":
/*!******************************************************************!*\
  !*** ./src/components/hybridCarousel/hybridCarousel.module.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_hybridCarousel_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js!./hybridCarousel.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/hybridCarousel/hybridCarousel.module.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_hybridCarousel_module_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_hybridCarousel_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/hybridImage/hybridImage.module.scss":
/*!************************************************************!*\
  !*** ./src/components/hybridImage/hybridImage.module.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_hybridImage_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js!./hybridImage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/hybridImage/hybridImage.module.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_hybridImage_module_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_hybridImage_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/navbar/navbar.module.scss":
/*!**************************************************!*\
  !*** ./src/components/navbar/navbar.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_navbar_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js!./navbar.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/navbar/navbar.module.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_navbar_module_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_navbar_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/quote/quote.module.scss":
/*!************************************************!*\
  !*** ./src/components/quote/quote.module.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_quote_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js!./quote.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/quote/quote.module.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_quote_module_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_quote_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/wrapper/wrapper.module.scss":
/*!****************************************************!*\
  !*** ./src/components/wrapper/wrapper.module.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_wrapper_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js!./wrapper.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/wrapper/wrapper.module.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_wrapper_module_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_wrapper_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/gallerySlider/gallerySlider.module.scss":
/*!*****************************************************!*\
  !*** ./src/gallerySlider/gallerySlider.module.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_gallerySlider_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js!./gallerySlider.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/gallerySlider/gallerySlider.module.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_gallerySlider_module_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_gallerySlider_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/images/logo.svg":
/*!*****************************!*\
  !*** ./src/images/logo.svg ***!
  \*****************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.0\" viewBox=\"0 0 350.000000 111.000000\" preserveAspectRatio=\"xMidYMid meet\"><g transform=\"translate(0.000000,111.000000) scale(0.100000,-0.100000)\" stroke=\"none\"><path d=\"M70 740 c0 -363 0 -370 20 -370 20 0 20 7 20 370 0 363 0 370 -20 370 -20 0 -20 -7 -20 -370z\"></path><path d=\"M120 740 c0 -363 0 -370 20 -370 20 0 20 7 20 370 0 363 0 370 -20 370 -20 0 -20 -7 -20 -370z\"></path><path d=\"M240 740 l0 -370 35 0 35 0 0 370 0 370 -35 0 -35 0 0 -370z\"></path><path d=\"M380 740 l0 -370 45 0 45 0 0 370 0 370 -45 0 -45 0 0 -370z\"></path><path d=\"M490 740 l0 -370 50 0 50 0 0 370 0 370 -50 0 -50 0 0 -370z\"></path><path d=\"M620 1105 c0 -3 0 -168 0 -367 l-1 -363 26 -3 25 -3 0 370 0 371 -25 0 c-14 0 -25 -2 -25 -5z\"></path><path d=\"M697 1104 c-4 -4 -7 -171 -7 -371 l0 -364 23 3 22 3 0 365 c0 321 -2 365 -15 368 -9 1 -19 0 -23 -4z\"></path><path d=\"M800 740 l0 -370 35 0 35 0 0 370 0 370 -35 0 -35 0 0 -370z\"></path><path d=\"M890 740 c0 -363 0 -370 20 -370 20 0 20 7 20 370 0 363 0 370 -20 370 -20 0 -20 -7 -20 -370z\"></path><path d=\"M1000 740 c0 -328 2 -371 15 -368 14 3 16 48 16 368 0 320 -2 365 -16 368 -13 3 -15 -40 -15 -368z\"></path><path d=\"M1110 1105 c0 -3 0 -168 0 -367 l-1 -363 36 -3 35 -3 0 370 0 371 -35 0 c-19 0 -35 -2 -35 -5z\"></path><path d=\"M1200 740 l0 -370 45 0 45 0 0 370 0 370 -45 0 -45 0 0 -370z\"></path><path d=\"M1615 1097 c-3 -6 -4 -172 -3 -367 3 -329 4 -355 21 -358 16 -3 17 20 17 367 0 327 -2 371 -15 371 -9 0 -18 -6 -20 -13z\"></path><path d=\"M1730 740 l0 -370 30 0 30 0 0 370 0 370 -30 0 -30 0 0 -370z\"></path><path d=\"M1870 740 c0 -348 1 -371 18 -368 16 3 17 29 17 368 0 339 -1 365 -17 368 -17 3 -18 -20 -18 -368z\"></path><path d=\"M1930 1105 c0 -3 0 -168 0 -367 l-1 -363 31 -3 30 -3 0 370 0 371 -30 0 c-16 0 -30 -2 -30 -5z\"></path><path d=\"M2060 740 c0 -363 0 -370 20 -370 20 0 20 7 20 370 0 363 0 370 -20 370 -20 0 -20 -7 -20 -370z\"></path><path d=\"M2120 740 l0 -370 45 0 45 0 0 370 0 370 -45 0 -45 0 0 -370z\"></path><path d=\"M2240 740 c0 -322 2 -370 15 -370 13 0 15 48 15 370 0 322 -2 370 -15 370 -13 0 -15 -48 -15 -370z\"></path><path d=\"M2300 740 c0 -322 2 -370 15 -370 13 0 15 48 15 370 0 322 -2 370 -15 370 -13 0 -15 -48 -15 -370z\"></path><path d=\"M2410 1105 c0 -3 0 -168 0 -367 l-1 -363 31 -3 30 -3 0 370 0 371 -30 0 c-16 0 -30 -2 -30 -5z\"></path><path d=\"M2540 740 c0 -363 0 -370 20 -370 20 0 20 7 20 370 0 363 0 370 -20 370 -20 0 -20 -7 -20 -370z\"></path><path d=\"M2600 740 l0 -370 45 0 45 0 0 370 0 370 -45 0 -45 0 0 -370z\"></path><path d=\"M2770 1105 c0 -3 0 -168 0 -367 l-1 -363 31 -3 30 -3 0 370 0 371 -30 0 c-16 0 -30 -2 -30 -5z\"></path><path d=\"M2857 1103 c-4 -3 -7 -170 -7 -370 0 -356 0 -363 20 -363 20 0 20 7 20 370 0 302 -2 370 -13 370 -8 0 -17 -3 -20 -7z\"></path><path d=\"M2960 740 l0 -370 25 0 25 0 0 370 0 370 -25 0 -25 0 0 -370z\"></path><path d=\"M3080 740 l0 -370 30 0 30 0 0 370 0 370 -30 0 -30 0 0 -370z\"></path><path d=\"M3160 740 c0 -363 0 -370 20 -370 20 0 20 7 20 370 0 363 0 370 -20 370 -20 0 -20 -7 -20 -370z\"></path><path d=\"M3270 740 l0 -370 50 0 50 0 0 370 0 370 -50 0 -50 0 0 -370z\"></path><path d=\"M3390 740 l0 -370 30 0 30 0 0 370 0 370 -30 0 -30 0 0 -370z\"></path><path d=\"M2179 336 c-27 -13 -37 -57 -17 -73 7 -6 27 -15 43 -20 22 -7 30 -16 30 -34 0 -30 -42 -40 -61 -14 -20 26 -37 14 -19 -13 29 -41 115 -22 115 26 0 26 -12 38 -55 58 -22 11 -40 26 -40 34 0 22 43 25 66 4 16 -15 19 -15 19 -2 0 32 -47 51 -81 34z\"></path><path d=\"M3333 335 c-35 -15 -43 -31 -43 -91 0 -55 25 -84 74 -84 25 0 39 7 51 22 11 16 12 24 4 27 -7 2 -16 -4 -21 -13 -13 -23 -54 -20 -72 6 -18 26 -21 71 -6 99 13 24 57 25 82 2 24 -22 36 -8 14 16 -24 26 -48 31 -83 16z\"></path><path d=\"M135 328 c-11 -29 -55 -162 -55 -165 0 -2 5 -3 10 -3 6 0 15 11 20 25 8 20 16 25 43 25 26 0 36 -6 45 -25 12 -25 38 -36 30 -12 -50 140 -63 167 -75 167 -7 0 -16 -6 -18 -12z m38 -90 c-2 -5 -13 -8 -24 -8 -18 0 -20 4 -14 33 4 17 10 36 13 41 6 11 31 -55 25 -66z\"></path><path d=\"M290 250 c0 -108 18 -122 22 -17 l3 72 24 -72 c14 -40 30 -73 36 -73 6 0 22 33 36 73 l24 72 3 -72 c4 -105 22 -91 22 17 0 80 -2 90 -18 90 -14 0 -24 -18 -42 -72 l-23 -73 -24 73 c-19 56 -29 72 -44 72 -17 0 -19 -8 -19 -90z\"></path><path d=\"M540 250 c0 -73 3 -90 15 -90 12 0 15 17 15 90 0 73 -3 90 -15 90 -12 0 -15 -17 -15 -90z\"></path><path d=\"M630 330 c0 -5 11 -10 25 -10 25 0 25 -1 25 -81 0 -60 3 -80 13 -77 8 3 13 31 15 81 3 74 4 77 27 77 14 0 25 5 25 10 0 6 -28 10 -65 10 -37 0 -65 -4 -65 -10z\"></path><path d=\"M932 251 c-17 -50 -26 -91 -21 -91 5 0 15 11 21 25 9 19 19 25 45 25 27 0 35 -5 43 -25 12 -30 34 -34 25 -4 -61 191 -71 197 -113 70z m68 -8 c0 -15 -36 -18 -44 -4 -3 5 -1 24 6 42 l12 34 12 -30 c7 -17 13 -36 14 -42z\"></path><path d=\"M1112 253 c2 -58 7 -88 16 -91 8 -2 12 8 12 31 0 33 2 35 40 41 51 8 70 44 45 82 -13 20 -24 24 -66 24 l-51 0 4 -87z m93 37 c0 -21 -5 -26 -32 -28 -31 -3 -33 -1 -33 28 0 29 2 31 33 28 27 -2 32 -7 32 -28z\"></path><path d=\"M1300 250 l0 -90 60 0 c33 0 60 4 60 10 0 6 -20 10 -45 10 -44 0 -45 1 -45 33 0 32 1 32 40 29 32 -3 40 -1 40 12 0 12 -10 16 -40 16 -36 0 -40 3 -40 25 0 22 4 25 39 25 22 0 43 5 46 10 4 6 -17 10 -54 10 l-61 0 0 -90z\"></path><path d=\"M1490 250 l0 -90 49 0 c28 0 53 5 56 10 4 6 -12 10 -39 10 l-46 0 0 80 c0 47 -4 80 -10 80 -6 0 -10 -37 -10 -90z\"></path><path d=\"M1760 250 l0 -90 39 0 c53 0 69 8 86 41 38 73 1 139 -80 139 l-45 0 0 -90z m93 58 c48 -36 17 -128 -44 -128 l-29 0 0 70 0 70 28 0 c16 0 36 -6 45 -12z\"></path><path d=\"M1970 250 l0 -90 55 0 c30 0 55 5 55 10 0 6 -21 10 -46 10 -45 0 -45 0 -42 32 3 29 6 32 38 32 51 1 53 20 3 24 -38 3 -43 6 -43 28 0 22 4 24 45 24 25 0 45 5 45 10 0 6 -25 10 -55 10 l-55 0 0 -90z\"></path><path d=\"M2340 250 c0 -53 4 -90 10 -90 6 0 10 37 10 90 0 53 -4 90 -10 90 -6 0 -10 -37 -10 -90z\"></path><path d=\"M2451 314 c-46 -58 -13 -154 53 -154 17 0 37 5 44 12 9 9 12 9 12 0 0 -7 5 -12 10 -12 6 0 10 23 10 50 l0 50 -35 0 c-39 0 -48 -17 -12 -22 16 -2 21 -9 19 -23 -5 -24 -19 -35 -48 -35 -31 0 -47 24 -47 70 0 22 6 46 13 55 17 20 59 19 82 -2 25 -22 36 -8 13 17 -28 31 -88 27 -114 -6z\"></path><path d=\"M2660 250 c0 -107 18 -122 22 -19 l3 72 40 -72 c22 -39 46 -71 53 -71 9 0 12 25 12 90 0 53 -4 90 -10 90 -6 0 -10 -31 -10 -72 l0 -73 -40 73 c-56 100 -70 96 -70 -18z\"></path><path d=\"M2970 249 c0 -61 4 -89 11 -87 16 5 18 178 2 178 -10 0 -13 -25 -13 -91z\"></path><path d=\"M3080 250 c0 -107 18 -122 22 -18 l3 73 40 -70 c22 -38 48 -71 58 -73 15 -3 17 6 17 87 0 77 -2 91 -16 91 -14 0 -16 -11 -12 -70 2 -38 3 -70 2 -70 -1 0 -20 32 -43 70 -58 97 -71 93 -71 -20z\"></path><path d=\"M93 75 c0 -27 2 -38 4 -22 2 15 2 37 0 50 -2 12 -4 0 -4 -28z\"></path><path d=\"M241 98 c-5 -13 -12 -33 -16 -46 -6 -21 -5 -22 13 -11 17 10 24 10 38 -2 15 -13 16 -12 9 11 -14 47 -24 70 -30 70 -3 0 -9 -10 -14 -22z m19 -19 c0 -11 -4 -18 -10 -14 -5 3 -7 12 -3 20 7 21 13 19 13 -6z\"></path><path d=\"M1062 75 c0 -34 2 -42 7 -26 9 35 29 37 34 4 4 -27 4 -27 6 5 1 25 -3 32 -18 32 -11 0 -22 8 -24 18 -3 9 -5 -5 -5 -33z\"></path><path d=\"M1172 75 c0 -41 2 -45 7 -20 l7 30 7 -27 c9 -36 23 -36 33 -1 l7 28 7 -30 c7 -25 8 -22 8 20 1 46 0 48 -13 31 -8 -11 -15 -26 -15 -33 0 -7 -4 -13 -10 -13 -5 0 -10 6 -10 13 0 7 -7 22 -15 33 -13 17 -14 15 -13 -31z\"></path><path d=\"M1322 108 c-20 -20 -15 -66 9 -79 17 -9 25 -8 37 5 14 14 13 15 -14 13 -23 -2 -30 3 -32 19 -4 31 23 50 46 33 15 -13 16 -12 3 4 -16 20 -32 22 -49 5z\"></path><path d=\"M1403 75 c0 -27 2 -40 4 -27 6 29 43 31 43 2 0 -11 3 -20 8 -20 4 0 7 18 7 40 0 22 -3 40 -7 40 -5 0 -8 -7 -8 -15 0 -25 -38 -18 -43 8 -2 12 -4 0 -4 -28z\"></path><path d=\"M1497 75 c-9 -25 -12 -45 -6 -45 5 0 9 5 9 10 0 6 9 10 20 10 11 0 20 -5 20 -12 0 -6 3 -9 6 -5 7 7 -14 75 -26 82 -4 3 -15 -15 -23 -40z m33 -6 c0 -5 -4 -9 -10 -9 -5 0 -10 7 -10 16 0 8 5 12 10 9 6 -3 10 -10 10 -16z\"></path><path d=\"M1570 76 c0 -39 3 -44 25 -48 14 -3 25 -1 25 3 0 5 -9 9 -20 9 -27 0 -25 28 3 33 l22 4 -22 2 c-13 0 -23 7 -23 15 0 8 10 17 23 19 19 4 18 4 -5 6 -27 1 -28 -1 -28 -43z\"></path><path d=\"M1640 77 c0 -47 0 -47 33 -46 31 2 31 2 4 6 -25 4 -28 8 -26 38 2 19 0 37 -4 41 -4 4 -7 -14 -7 -39z\"></path><path d=\"M1750 74 c0 -44 1 -45 28 -42 22 2 27 8 28 33 2 36 -11 55 -37 55 -16 0 -19 -8 -19 -46z m40 21 c0 -8 -7 -15 -15 -15 -8 0 -15 7 -15 15 0 8 7 15 15 15 8 0 15 -7 15 -15z m3 -40 c1 -5 -6 -11 -15 -13 -11 -2 -18 3 -18 13 0 17 30 18 33 0z\"></path><path d=\"M1890 75 c0 -25 4 -45 9 -45 10 0 23 69 15 82 -13 21 -24 4 -24 -37z\"></path><path d=\"M1949 83 c-11 -33 -13 -35 -20 -18 -8 18 -8 17 -6 -4 3 -35 23 -37 32 -4 l8 28 7 -30 c7 -26 8 -24 9 18 1 56 -13 61 -30 10z\"></path><path d=\"M2008 75 c-10 -25 -13 -45 -8 -45 6 0 10 5 10 10 0 6 9 10 20 10 11 0 20 -4 20 -10 0 -5 4 -10 9 -10 6 0 3 20 -6 45 -8 25 -18 45 -22 45 -4 0 -14 -20 -23 -45z m28 -2 c-10 -10 -19 5 -10 18 6 11 8 11 12 0 2 -7 1 -15 -2 -18z\"></path><path d=\"M2087 114 c-13 -13 -7 -71 9 -85 17 -14 44 -3 53 22 3 9 -2 8 -13 -4 -23 -23 -48 -5 -44 32 3 29 35 41 50 19 8 -10 9 -10 5 2 -4 16 -48 26 -60 14z\"></path><path d=\"M2172 79 c-2 -42 0 -47 23 -51 14 -3 25 -1 25 3 0 5 -9 9 -19 9 -16 0 -21 8 -24 43 l-4 42 -1 -46z\"></path><path d=\"M2249 75 c-9 -25 -13 -45 -9 -45 4 0 11 7 14 16 6 15 8 15 31 0 14 -9 25 -14 25 -11 0 12 -33 85 -39 85 -3 0 -13 -20 -22 -45z m27 -2 c-10 -10 -19 5 -10 18 6 11 8 11 12 0 2 -7 1 -15 -2 -18z\"></path><path d=\"M2329 118 c-6 -40 -5 -88 2 -88 5 0 9 9 9 20 0 13 7 20 20 20 13 0 20 -7 20 -20 0 -11 4 -20 9 -20 5 0 8 19 7 43 -2 39 -4 42 -34 45 -18 2 -32 2 -33 0z m51 -23 c0 -8 -9 -15 -20 -15 -11 0 -20 7 -20 15 0 8 9 15 20 15 11 0 20 -7 20 -15z\"></path><path d=\"M2417 113 c-2 -5 -5 -25 -5 -45 -1 -38 -1 -38 36 -37 30 2 32 3 10 6 -16 2 -28 10 -28 18 0 8 12 16 28 18 l27 4 -27 2 c-37 1 -37 28 0 34 26 4 25 4 -5 6 -17 0 -34 -2 -36 -6z\"></path><path d=\"M2499 109 c0 -8 -1 -29 -2 -47 -1 -17 1 -32 6 -32 4 0 7 15 7 33 l0 32 21 -32 c29 -45 39 -41 39 13 0 30 -4 43 -11 38 -6 -3 -9 -17 -6 -30 5 -28 -9 -32 -18 -5 -8 27 -35 48 -36 30z\"></path><path d=\"M2626 80 c-21 -52 -20 -53 8 -35 23 15 25 15 35 -2 14 -24 14 -9 -1 38 -6 22 -14 39 -18 39 -5 0 -15 -18 -24 -40z m28 5 c3 -8 1 -15 -4 -15 -6 0 -10 7 -10 15 0 8 2 15 4 15 2 0 6 -7 10 -15z\"></path><path d=\"M2737 113 c-11 -10 -8 -83 3 -83 6 0 10 20 10 45 0 46 -2 50 -13 38z\"></path><path d=\"M2816 80 c-19 -48 -20 -61 -3 -40 15 20 35 19 47 0 15 -24 12 5 -4 45 -8 19 -17 35 -19 35 -3 0 -12 -18 -21 -40z m28 5 c3 -8 1 -15 -4 -15 -6 0 -10 7 -10 15 0 8 2 15 4 15 2 0 6 -7 10 -15z\"></path><path d=\"M2961 78 c-10 -24 -16 -45 -13 -48 2 -3 7 1 9 8 3 6 12 12 22 12 9 0 23 -6 30 -12 11 -11 12 -8 6 12 -14 45 -24 70 -30 70 -3 0 -14 -19 -24 -42z m29 7 c0 -8 -4 -15 -10 -15 -5 0 -7 7 -4 15 4 8 8 15 10 15 2 0 4 -7 4 -15z\"></path><path d=\"M3139 118 c-2 -13 -1 -57 1 -75 1 -10 5 -5 9 11 8 39 24 39 32 1 l7 -30 1 33 c1 23 -4 35 -16 39 -10 4 -21 11 -25 17 -4 6 -8 8 -9 4z\"></path><path d=\"M659 99 c-2 -28 3 -64 11 -72 4 -5 6 10 4 33 -3 41 -13 67 -15 39z\"></path><path d=\"M1020 76 c0 -43 16 -56 22 -17 5 32 0 51 -13 51 -5 0 -9 -15 -9 -34z\"></path><path d=\"M1270 70 c0 -22 5 -40 10 -40 6 0 10 18 10 40 0 22 -4 40 -10 40 -5 0 -10 -18 -10 -40z\"></path><path d=\"M3239 105 c-7 -6 2 -75 10 -75 3 0 6 16 5 35 -1 35 -6 49 -15 40z\"></path><path d=\"M3400 76 c0 -19 5 -38 10 -41 6 -4 10 10 10 34 0 23 -4 41 -10 41 -5 0 -10 -15 -10 -34z\"></path><path d=\"M138 93 c-12 -3 -18 -14 -18 -34 0 -16 4 -29 8 -29 5 0 8 10 8 21 -1 33 22 34 27 2 4 -27 4 -27 6 4 1 35 -5 42 -31 36z\"></path><path d=\"M313 84 c-3 -8 3 -21 13 -29 19 -14 18 -14 0 -15 -15 0 -17 -3 -9 -11 6 -6 16 -8 22 -5 17 11 13 33 -6 41 -17 7 -17 8 1 14 18 7 18 8 2 14 -10 4 -19 1 -23 -9z\"></path><path d=\"M373 84 c-4 -10 1 -20 11 -26 9 -5 14 -14 11 -19 -4 -5 -12 -6 -18 -3 -9 5 -9 4 0 -6 13 -14 33 -5 33 15 0 7 -8 16 -17 20 -17 7 -17 8 1 14 18 7 18 8 2 14 -11 4 -19 1 -23 -9z\"></path><path d=\"M436 85 c-20 -20 -20 -26 -2 -50 12 -16 16 -17 30 -6 20 17 21 45 2 60 -11 9 -18 8 -30 -4z m32 -27 c-2 -13 -7 -23 -13 -23 -5 0 -11 10 -13 23 -2 15 2 22 13 22 11 0 15 -7 13 -22z\"></path><path d=\"M506 84 c-20 -20 -20 -38 -1 -54 12 -10 19 -10 27 -2 9 9 8 12 -5 12 -11 0 -17 8 -17 21 0 17 4 19 22 13 20 -6 21 -5 9 10 -16 20 -16 20 -35 0z\"></path><path d=\"M600 90 c-12 -8 -12 -10 4 -10 16 0 16 -2 -4 -18 -21 -17 -21 -19 -4 -32 16 -13 17 -13 11 2 -3 10 -2 20 3 23 6 4 10 -1 10 -9 0 -9 5 -16 10 -16 15 0 12 46 -3 58 -8 7 -18 7 -27 2z\"></path><path d=\"M813 93 c-7 -3 -12 -19 -12 -36 2 -31 2 -31 6 -4 5 33 25 31 34 -4 l7 -24 1 26 c1 29 -17 49 -36 42z\"></path><path d=\"M3031 61 c1 -28 3 -30 6 -11 3 14 9 30 14 36 5 7 3 11 -6 11 -11 0 -15 -11 -14 -36z\"></path><path d=\"M3082 88 c-16 -16 -15 -43 3 -58 15 -12 35 -6 35 12 0 7 -4 7 -13 -1 -16 -13 -27 -5 -27 20 0 24 20 35 32 18 8 -12 9 -12 6 0 -6 20 -21 24 -36 9z\"></path><path d=\"M3277 94 c-13 -14 -7 -62 9 -68 18 -7 34 0 34 16 0 7 -4 7 -13 -1 -8 -6 -17 -8 -20 -4 -13 12 -7 23 14 23 14 0 19 5 17 17 -3 19 -29 29 -41 17z m33 -14 c0 -5 -7 -10 -16 -10 -8 0 -12 5 -9 10 3 6 10 10 16 10 5 0 9 -4 9 -10z\"></path><path d=\"M3347 94 c-10 -10 -9 -62 2 -68 12 -8 41 4 41 16 0 6 -6 5 -15 -2 -12 -10 -16 -9 -21 4 -3 9 -3 23 0 32 5 14 9 14 23 3 14 -12 16 -12 11 1 -5 17 -30 25 -41 14z\"></path><path d=\"M562 60 c0 -19 2 -27 5 -17 2 9 2 25 0 35 -3 9 -5 1 -5 -18z\"></path><path d=\"M702 60 c0 -19 2 -27 5 -17 2 9 2 25 0 35 -3 9 -5 1 -5 -18z\"></path><path d=\"M727 84 c-12 -12 -8 -41 8 -54 20 -17 47 5 43 34 -3 21 -37 34 -51 20z m39 -15 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z\"></path><path d=\"M901 60 c10 -27 29 -33 29 -9 0 6 -4 7 -10 4 -5 -3 -10 3 -10 14 0 12 -4 21 -9 21 -6 0 -6 -12 0 -30z\"></path><path d=\"M930 78 c0 -8 6 -23 14 -34 14 -18 15 -18 26 10 6 16 8 31 5 34 -2 3 -9 -6 -14 -19 -7 -16 -10 -19 -10 -7 -1 20 -21 35 -21 16z\"></path><path d=\"M990 60 c0 -16 4 -30 8 -30 5 0 7 13 4 30 -2 17 -6 30 -8 30 -2 0 -4 -13 -4 -30z\"></path><path d=\"M3200 60 c0 -16 5 -30 10 -30 6 0 10 14 10 30 0 17 -4 30 -10 30 -5 0 -10 -13 -10 -30z\"></path></g></svg>"

/***/ }),

/***/ "./src/components/home/Home.js":
/*!*************************************!*\
  !*** ./src/components/home/Home.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHome": () => (/* binding */ renderHome)
/* harmony export */ });
/* harmony import */ var _Home_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.module.scss */ "./src/components/home/Home.module.scss");
/* harmony import */ var _images_home_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/home.jpg */ "./src/images/home.jpg");
/* harmony import */ var _images_Alec_Aviator_Logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/Alec Aviator Logo.png */ "./src/images/Alec Aviator Logo.png");



const element = document.createElement("div");

const renderHome = (fragment) => {
  element.innerHTML = /* HTML */ `
    
      <div class=${_Home_module_scss__WEBPACK_IMPORTED_MODULE_0__.default.container}>
        <img class=${_Home_module_scss__WEBPACK_IMPORTED_MODULE_0__.default.logo} src=${_images_Alec_Aviator_Logo_png__WEBPACK_IMPORTED_MODULE_2__} alt="" />
      </div>

  `;
  console.log(element.firstElementChild);
  fragment.appendChild(element.firstElementChild);
};


/***/ }),

/***/ "./src/components/hybridCarousel/hybridCarousel.js":
/*!*********************************************************!*\
  !*** ./src/components/hybridCarousel/hybridCarousel.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderhybridCarousel": () => (/* binding */ renderhybridCarousel)
/* harmony export */ });
/* harmony import */ var _hybridCarousel_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hybridCarousel.module.scss */ "./src/components/hybridCarousel/hybridCarousel.module.scss");
/* harmony import */ var _images_Goodyear_WoolseyFire_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/Goodyear-WoolseyFire.jpg */ "./src/images/Goodyear-WoolseyFire.jpg");
/* harmony import */ var _gallerySlider_gallerySlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../gallerySlider/gallerySlider */ "./src/gallerySlider/gallerySlider.js");




const renderhybridCarousel = (fragment) => {
  const element = /* HTML */ `
    <div class=${_hybridCarousel_module_scss__WEBPACK_IMPORTED_MODULE_0__.default.container}>
      <div class=${_hybridCarousel_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["content-container"]}>
        <div class=${_hybridCarousel_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["content-image"]}>
          ${(0,_gallerySlider_gallerySlider__WEBPACK_IMPORTED_MODULE_2__.rendergallerySlider)("hybrid-gallery-container", "hybrid")}
        </div>
        <div class=${_hybridCarousel_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["banner-container"]}>
          <div class=${_hybridCarousel_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["banner-content"]}>
            <div class=${_hybridCarousel_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["text-container"]}>
              <div class=${_hybridCarousel_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["text-content-container"]}>
                <h5>The Concept</h5>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Illum ipsam repellendus deleniti iusto, repellat fuga sequi
                  consectetur possimus ea natus aliquid saepe adipisci veniam
                  soluta impedit officia laboriosam eaque nihil.
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Illum ipsam repellendus deleniti iusto, repellat fuga sequi
                  consectetur possimus ea natus aliquid saepe adipisci veniam
                  soluta impedit officia laboriosam eaque nihil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  return element;
};


/***/ }),

/***/ "./src/components/hybridImage/hybridImage.js":
/*!***************************************************!*\
  !*** ./src/components/hybridImage/hybridImage.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderhybridImage": () => (/* binding */ renderhybridImage)
/* harmony export */ });
/* harmony import */ var _hybridImage_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hybridImage.module.scss */ "./src/components/hybridImage/hybridImage.module.scss");
/* harmony import */ var _images_Goodyear_WoolseyFire_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/Goodyear-WoolseyFire.jpg */ "./src/images/Goodyear-WoolseyFire.jpg");
/* harmony import */ var _images_renders_CAYMAN_AVIATOR_20210722_6_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/renders/CAYMAN AVIATOR 20210722 (6).jpg */ "./src/images/renders/CAYMAN AVIATOR 20210722 (6).jpg");



const eles = [
  {
    img: _images_Goodyear_WoolseyFire_jpg__WEBPACK_IMPORTED_MODULE_1__,
    text: /* HTML */ `<h5>The Background</h5>
      <p>
        The 2019 Woolsey Malibu fire wiped out many structures, one of which was
        a dome-like building (like an observatory). What was left was a secluded
        property with a breathtaking 360-degree view of the Pacific Ocean and
        the Malibu mountains.
      </p>
      <p>
        Apel Design accepted the challenge of creating a piece of architecture
        that would have a minimal environment impact and yet evoke and complete
        the site conditions. The site dictated three major criteria, first that
        it was a fire-rebuilt home, second the challenges of accessibility to
        the site and finally, it must be an “off the grid” home.
      </p>`,
  },
  {
    img: _images_renders_CAYMAN_AVIATOR_20210722_6_jpg__WEBPACK_IMPORTED_MODULE_2__,
    text: /* HTML */ `<h5>The Impact</h5>
      <p>
        Conceptually, Apel Design wanted to create the notion that the
        architecture of building continues beyond, in a sense, the forms flow
        throughout and never stop. The architecture forms emerge from the ground
        extent to the horizon and divide into two beautiful irregular volumetric
        elements as if the architecture was slicing the space emphasizing the
        gorgeous views of the Malibu mountains and the Pacific Ocean.
      </p>
      <p>
        The bird-like building program also incorporates the ideas of flow and
        continuation; the first level proposes an open floor plan with a glass
        facade that opens up the space to beautiful deck and a second floor for
        bedroom that are elevated from the ground to again emphasize this notion
        of flow and lightness.
      </p>`,
  },
];
const renderhybridImage = (i) => {
  const element = /* HTML */ `
    <div class=${_hybridImage_module_scss__WEBPACK_IMPORTED_MODULE_0__.default.container}>
      <div class=${_hybridImage_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["content-image-container"]}>
        <img src=${eles[i].img} class=${_hybridImage_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["content-image"]} alt="" />
      </div>

      <div class=${_hybridImage_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["banner-container"]}>
        <div class=${_hybridImage_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["banner-content"]}>
          <div class=${_hybridImage_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["text-content-container"]}>${eles[i].text}</div>
        </div>
      </div>
    </div>
  `;
  return element;
};
//           // <div class=${styles["text-content-container"]}>${eles[i].text}</div>


/***/ }),

/***/ "./src/components/navbar/navbar.js":
/*!*****************************************!*\
  !*** ./src/components/navbar/navbar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderNav": () => (/* binding */ renderNav)
/* harmony export */ });
/* harmony import */ var _navbar_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.module.scss */ "./src/components/navbar/navbar.module.scss");
/* harmony import */ var _images_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/logo.svg */ "./src/images/logo.svg");
/* harmony import */ var _images_logo_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_logo_svg__WEBPACK_IMPORTED_MODULE_1__);


const element = document.createElement("div");

const renderNav = (fragment) => {
  element.innerHTML = /* HTML */ `
    <div class=${_navbar_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["nav-wrapper"]}>
      <nav name="nav-container" class=${_navbar_module_scss__WEBPACK_IMPORTED_MODULE_0__.default.container}>
        <div class=${_navbar_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["content-container"]}>
          <div class=${_navbar_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["logo-container"]}>${(_images_logo_svg__WEBPACK_IMPORTED_MODULE_1___default())}</div>
        </div>
      </nav>
    </div>
  `;
  fragment.appendChild(element.firstElementChild);
};


/***/ }),

/***/ "./src/components/quote/quote.js":
/*!***************************************!*\
  !*** ./src/components/quote/quote.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderquote": () => (/* binding */ renderquote)
/* harmony export */ });
/* harmony import */ var _quote_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quote.module.scss */ "./src/components/quote/quote.module.scss");
/* harmony import */ var _images_Phoenix_Quote_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/Phoenix Quote.png */ "./src/images/Phoenix Quote.png");



const renderquote = (fragment) => {
  const element = /* HTML */ `
    <div class=${_quote_module_scss__WEBPACK_IMPORTED_MODULE_0__.default.container}>
      <div class=${_quote_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["content-container"]}>
        <img class=${_quote_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["content-image"]} src=${_images_Phoenix_Quote_png__WEBPACK_IMPORTED_MODULE_1__} alt="" />
      </div>
    </div>
  `;
  return element;
};


/***/ }),

/***/ "./src/components/wrapper/wrapper.js":
/*!*******************************************!*\
  !*** ./src/components/wrapper/wrapper.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderwrapper": () => (/* binding */ renderwrapper)
/* harmony export */ });
/* harmony import */ var _wrapper_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapper.module.scss */ "./src/components/wrapper/wrapper.module.scss");
/* harmony import */ var _quote_quote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quote/quote */ "./src/components/quote/quote.js");
/* harmony import */ var _gallerySlider_gallerySlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../gallerySlider/gallerySlider */ "./src/gallerySlider/gallerySlider.js");
/* harmony import */ var _hybridImage_hybridImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hybridImage/hybridImage */ "./src/components/hybridImage/hybridImage.js");
/* harmony import */ var _hybridCarousel_hybridCarousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hybridCarousel/hybridCarousel */ "./src/components/hybridCarousel/hybridCarousel.js");






const element = document.createElement("div");

const renderwrapper = (fragment) => {
  element.innerHTML = /* HTML */ `
    <div class=${_wrapper_module_scss__WEBPACK_IMPORTED_MODULE_0__.default.container}>
      <div id="scroll-header" class=${_wrapper_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["scroll-header"]}></div>
      ${(0,_quote_quote__WEBPACK_IMPORTED_MODULE_1__.renderquote)()}
      <div class=${_wrapper_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["content-container"]}>
        ${(0,_gallerySlider_gallerySlider__WEBPACK_IMPORTED_MODULE_2__.rendergallerySlider)("gallery-container", "")} ${(0,_hybridImage_hybridImage__WEBPACK_IMPORTED_MODULE_3__.renderhybridImage)(0)}
        ${(0,_hybridCarousel_hybridCarousel__WEBPACK_IMPORTED_MODULE_4__.renderhybridCarousel)()} ${(0,_hybridImage_hybridImage__WEBPACK_IMPORTED_MODULE_3__.renderhybridImage)(1)}
      </div>
    </div>
  `;
  fragment.appendChild(element.firstElementChild);
};
//         //  

/***/ }),

/***/ "./src/gallerySlider/gallerySlider.js":
/*!********************************************!*\
  !*** ./src/gallerySlider/gallerySlider.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rendergallerySlider": () => (/* binding */ rendergallerySlider)
/* harmony export */ });
/* harmony import */ var _gallerySlider_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallerySlider.module.scss */ "./src/gallerySlider/gallerySlider.module.scss");

const cache = {};
const bluePrintImagesCache = {};
function importAll(imports) {
  imports.forEach((r) => {
    r.keys().forEach((key) => (cache[key] = r(key)));
  });
}

importAll([
  __webpack_require__("./src/images/renders sync \\.(png|jpe?g|svg)$"),
  __webpack_require__("./src/images/blueprints sync \\.(png|jpe?g|svg)$"),
]);

const renders = Object.keys(cache).map((name) => {
  return cache[name];
});

const rendergallerySlider = (className, location) => {
  const element = /* HTML */ `
    <div class=${_gallerySlider_module_scss__WEBPACK_IMPORTED_MODULE_0__.default[className]}>
      <div class="splide">
        <div class="splide__track">
          <ul class="splide__list"></ul>
        </div>
      </div>
    </div>
  `;

  const container = document.createElement("div");
  container.innerHTML = element;
  const sliderContainer = container.getElementsByTagName("ul");
  console.log(location === "hybrid" ? 5 : renders.length, "testing");
  for (
    let i = location === "hybrid" ? 5 : 0;
    i < (location === "hybrid" ? renders.length - 1 : 5);
    i++
  ) {
    const container = document.createElement("div");
    const slide = /* HTML */ ` <li class="splide__slide">
      <div class=${_gallerySlider_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["image-container"]}>
        <img class=${_gallerySlider_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["gallery-image"]} src=${renders[i]} alt="" />
      </div>
    </li>`;
    container.innerHTML = slide;
    sliderContainer[0].appendChild(container.firstElementChild);
  }

  return container.firstElementChild.outerHTML;
};


/***/ }),

/***/ "./src/images/blueprints sync \\.(png|jpe?g|svg)$":
/*!*********************************************************************!*\
  !*** ./src/images/blueprints/ sync nonrecursive \.(png|jpe?g|svg)$ ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Depth.png": "./src/images/blueprints/Depth.png",
	"./Geometry .png": "./src/images/blueprints/Geometry .png",
	"./Take Off Color.png": "./src/images/blueprints/Take Off Color.png",
	"./Take Off.png": "./src/images/blueprints/Take Off.png",
	"./Telescope.png": "./src/images/blueprints/Telescope.png",
	"./Waypoint.png": "./src/images/blueprints/Waypoint.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images/blueprints sync \\.(png|jpe?g|svg)$";

/***/ }),

/***/ "./src/images/renders sync \\.(png|jpe?g|svg)$":
/*!******************************************************************!*\
  !*** ./src/images/renders/ sync nonrecursive \.(png|jpe?g|svg)$ ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./CAYMAN AVIATOR 20210722 (1).jpg": "./src/images/renders/CAYMAN AVIATOR 20210722 (1).jpg",
	"./CAYMAN AVIATOR 20210722 (3).jpg": "./src/images/renders/CAYMAN AVIATOR 20210722 (3).jpg",
	"./CAYMAN AVIATOR 20210722 (4).jpg": "./src/images/renders/CAYMAN AVIATOR 20210722 (4).jpg",
	"./CAYMAN AVIATOR 20210722 (5).jpg": "./src/images/renders/CAYMAN AVIATOR 20210722 (5).jpg",
	"./CAYMAN AVIATOR 20210722 (6).jpg": "./src/images/renders/CAYMAN AVIATOR 20210722 (6).jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images/renders sync \\.(png|jpe?g|svg)$";

/***/ }),

/***/ "./src/scrollAnimation.js":
/*!********************************!*\
  !*** ./src/scrollAnimation.js ***!
  \********************************/
/***/ (() => {

const scrollHeader = document.getElementById("scroll-header");
const navContainer = document.querySelector("nav");
const navLogo = navContainer.querySelector("svg");

window.addEventListener("scroll", function (e) {
  if (this.window.scrollY > 0) {
    scrollHeader.style.transform = `translateY(${navContainer.offsetHeight}px)`;
    navLogo.style.fill = "black";
  } else {
    navLogo.style.fill = "white";
    scrollHeader.style.transform = "translateY(0)";
  }
});


/***/ }),

/***/ "./src/fonts/Capsuula.ttf":
/*!********************************!*\
  !*** ./src/fonts/Capsuula.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "489e2dfc049c0450e41c.ttf";

/***/ }),

/***/ "./src/images/Alec Aviator Logo.png":
/*!******************************************!*\
  !*** ./src/images/Alec Aviator Logo.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9f6327fffa25a158694a.png";

/***/ }),

/***/ "./src/images/Goodyear-WoolseyFire.jpg":
/*!*********************************************!*\
  !*** ./src/images/Goodyear-WoolseyFire.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a769676043157fe290b3.jpg";

/***/ }),

/***/ "./src/images/Phoenix Quote.png":
/*!**************************************!*\
  !*** ./src/images/Phoenix Quote.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1281d5d85f1e67578bd2.png";

/***/ }),

/***/ "./src/images/blueprints/Depth.png":
/*!*****************************************!*\
  !*** ./src/images/blueprints/Depth.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d558d7dd378fbc5376bf.png";

/***/ }),

/***/ "./src/images/blueprints/Geometry .png":
/*!*********************************************!*\
  !*** ./src/images/blueprints/Geometry .png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5f9d0bf44eb78a045b8c.png";

/***/ }),

/***/ "./src/images/blueprints/Take Off Color.png":
/*!**************************************************!*\
  !*** ./src/images/blueprints/Take Off Color.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a91aeee3c523ffc39931.png";

/***/ }),

/***/ "./src/images/blueprints/Take Off.png":
/*!********************************************!*\
  !*** ./src/images/blueprints/Take Off.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fd9fe8f10e0c1f389dfc.png";

/***/ }),

/***/ "./src/images/blueprints/Telescope.png":
/*!*********************************************!*\
  !*** ./src/images/blueprints/Telescope.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "33511a5c0137cf80ccee.png";

/***/ }),

/***/ "./src/images/blueprints/Waypoint.png":
/*!********************************************!*\
  !*** ./src/images/blueprints/Waypoint.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b506bff2f55a2b70a005.png";

/***/ }),

/***/ "./src/images/home.jpg":
/*!*****************************!*\
  !*** ./src/images/home.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "49a164a3401fc6d83465.jpg";

/***/ }),

/***/ "./src/images/renders/CAYMAN AVIATOR 20210722 (1).jpg":
/*!************************************************************!*\
  !*** ./src/images/renders/CAYMAN AVIATOR 20210722 (1).jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cee7a617c98b6a3912f1.jpg";

/***/ }),

/***/ "./src/images/renders/CAYMAN AVIATOR 20210722 (3).jpg":
/*!************************************************************!*\
  !*** ./src/images/renders/CAYMAN AVIATOR 20210722 (3).jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5d912548f6c2d1b805f0.jpg";

/***/ }),

/***/ "./src/images/renders/CAYMAN AVIATOR 20210722 (4).jpg":
/*!************************************************************!*\
  !*** ./src/images/renders/CAYMAN AVIATOR 20210722 (4).jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "74a00d0edf7f43573dcb.jpg";

/***/ }),

/***/ "./src/images/renders/CAYMAN AVIATOR 20210722 (5).jpg":
/*!************************************************************!*\
  !*** ./src/images/renders/CAYMAN AVIATOR 20210722 (5).jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "dee6bdcc6b0d24377233.jpg";

/***/ }),

/***/ "./src/images/renders/CAYMAN AVIATOR 20210722 (6).jpg":
/*!************************************************************!*\
  !*** ./src/images/renders/CAYMAN AVIATOR 20210722 (6).jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2861f608fc441ef92bb7.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_navbar_navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navbar/navbar */ "./src/components/navbar/navbar.js");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.scss */ "./main.scss");
/* harmony import */ var _components_home_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/Home */ "./src/components/home/Home.js");
/* harmony import */ var _components_wrapper_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/wrapper/wrapper */ "./src/components/wrapper/wrapper.js");
/* harmony import */ var _splidejs_splide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @splidejs/splide */ "./node_modules/@splidejs/splide/dist/js/splide.esm.js");
/* harmony import */ var _splidejs_splide__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_splidejs_splide__WEBPACK_IMPORTED_MODULE_4__);








const docFrag = new DocumentFragment();
const body = document.createElement("div");

body.setAttribute("id", "#root");
(0,_components_navbar_navbar__WEBPACK_IMPORTED_MODULE_0__.renderNav)(docFrag);
(0,_components_home_Home__WEBPACK_IMPORTED_MODULE_2__.renderHome)(docFrag);

(0,_components_wrapper_wrapper__WEBPACK_IMPORTED_MODULE_3__.renderwrapper)(docFrag);
document.body.appendChild(docFrag);
__webpack_require__(/*! ./scrollAnimation */ "./src/scrollAnimation.js");
console.log(document.querySelector("div.splide"));

const styles = __webpack_require__(/*! ./gallerySlider/gallerySlider.module.scss */ "./src/gallerySlider/gallerySlider.module.scss").default;
var elms = document.getElementsByClassName("splide");
console.log(styles);
// new Splide(".splide", {
//   height: "auto",
//   arrows: "false",

//   cover: true,
//   classes: {
//     prev: styles["left"],
//     next: styles["right"],
//   },
// }).mount();
for (var i = 0, len = elms.length; i < len; i++) {
  new (_splidejs_splide__WEBPACK_IMPORTED_MODULE_4___default())(elms[i], {
    height: "auto",
  }).mount();
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsb0JBQW9CO0FBQzdCO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztB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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFlBQVksUUFBUTtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEOztBQUVsRDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZUFBZTtBQUM3Qjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0QsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsZ0RBQWdELDBEQUEwRCwyQ0FBMkM7O0FBRXJKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7OztBQUlELE9BQU87O0FBRVAsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUNBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxpQ0FBbUI7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxpQ0FBbUI7QUFDOUI7QUFDQSxnQkFBZ0IsaUNBQW1CLHdCQUF3QixpQ0FBbUI7QUFDOUUsb0RBQW9ELHdDQUF3QztBQUM1RjtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVyxpQ0FBbUI7QUFDOUIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxpQ0FBbUI7QUFDOUI7QUFDQSxrRUFBa0UsaUJBQWlCO0FBQ25GO0FBQ0EsMkRBQTJELGFBQWE7QUFDeEU7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpQ0FBbUI7QUFDcEMsVUFBVTtBQUNWO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3B4TEQ7QUFDcUg7QUFDN0I7QUFDTztBQUMxQjtBQUNyRSw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0IsQ0FBQyxvREFBNkI7QUFDdEc7QUFDQSw2Q0FBNkMsY0FBYyxlQUFlLDJCQUEyQixHQUFHLGdCQUFnQiw4QkFBOEIsOEVBQThFLEdBQUcsUUFBUSx1QkFBdUIsaUJBQWlCLGtCQUFrQiw0QkFBNEIsMEJBQTBCLEdBQUcsMkRBQTJELG9CQUFvQixzREFBc0QsdUNBQXVDLHdDQUF3QyxrQ0FBa0MsbUNBQW1DLGNBQWMsZUFBZSwyQkFBMkIsd0JBQXdCLHVCQUF1QixxQkFBcUIsc0JBQXNCLHVCQUF1QixzQkFBc0IsR0FBRyw0QkFBNEIsb0JBQW9CLHNEQUFzRCx1Q0FBdUMsd0NBQXdDLGtDQUFrQyxtQ0FBbUMsY0FBYyxlQUFlLDJCQUEyQixHQUFHLE9BQU8sNEVBQTRFLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLDRCQUE0QixnQkFBZ0IsaUJBQWlCLDZCQUE2QixLQUFLLGdCQUFnQixnQ0FBZ0Msa0VBQWtFLEtBQUssVUFBVSx5QkFBeUIsbUJBQW1CLG9CQUFvQiw4QkFBOEIsNEJBQTRCLEtBQUssMkRBQTJELHNCQUFzQix3REFBd0QseUNBQXlDLDBDQUEwQyxvQ0FBb0MscUNBQXFDLGdCQUFnQixpQkFBaUIsNkJBQTZCLDBCQUEwQix5QkFBeUIsdUJBQXVCLHdCQUF3Qix5QkFBeUIsd0JBQXdCLEtBQUssNEJBQTRCLHNCQUFzQix3REFBd0QseUNBQXlDLDBDQUEwQyxvQ0FBb0MscUNBQXFDLGdCQUFnQixpQkFBaUIsNkJBQTZCLEtBQUssdUJBQXVCO0FBQ3R4RjtBQUNBO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWHZDO0FBQzRIO0FBQzdCO0FBQ087QUFDcEM7QUFDbEUsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCLENBQUMsNkNBQTZCO0FBQ3RHO0FBQ0EsMEVBQTBFLGdCQUFnQixpQkFBaUIsZUFBZSx5SEFBeUgsaUNBQWlDLGlDQUFpQywyQkFBMkIsR0FBRywrQkFBK0Isb0JBQW9CLGFBQWEsdUtBQXVLLGNBQWMsZUFBZSxxQ0FBcUMsc0JBQXNCLG1DQUFtQyxHQUFHLE9BQU8sbUZBQW1GLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcscUNBQXFDLGtCQUFrQixtQkFBbUIsc0JBQXNCLGlIQUFpSCxtQ0FBbUMsbUNBQW1DLDZCQUE2QixLQUFLLFdBQVcsc0JBQXNCLGdCQUFnQix1S0FBdUssZ0JBQWdCLGlCQUFpQix1Q0FBdUMsd0JBQXdCLHFDQUFxQyxLQUFLLHVCQUF1QjtBQUNsb0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2R2QztBQUM0SDtBQUM3QjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0Esb0ZBQW9GLGtCQUFrQiw0QkFBNEIsd0JBQXdCLHFCQUFxQix5QkFBeUIsdUJBQXVCLEdBQUcsNkZBQTZGLGtCQUFrQiwyQkFBMkIsdUJBQXVCLEdBQUcsa0RBQWtELGdCQUFnQixzQkFBc0IsaUJBQWlCLEdBQUcsMkRBQTJELHVCQUF1QixlQUFlLHdCQUF3Qix5QkFBeUIsaUJBQWlCLEdBQUcsNERBQTRELHVCQUF1QixzQkFBc0IsdUJBQXVCLG1CQUFtQix5QkFBeUIsR0FBRywyREFBMkQsd0JBQXdCLHFCQUFxQixvQkFBb0IscUJBQXFCLEdBQUcscURBQXFELGlCQUFpQiw0QkFBNEIsa0JBQWtCLGtDQUFrQyxzQkFBc0IsdUJBQXVCLEdBQUcseURBQXlELGtCQUFrQix1QkFBdUIsZUFBZSxpQkFBaUIsa0JBQWtCLGVBQWUsaUJBQWlCLDJCQUEyQixHQUFHLE9BQU8sNkZBQTZGLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLHFDQUFxQyxvQkFBb0IsOEJBQThCLDBCQUEwQix1QkFBdUIsMkJBQTJCLHlCQUF5QiwwQkFBMEIsc0JBQXNCLCtCQUErQiwyQkFBMkIsT0FBTyxLQUFLLG9CQUFvQixrQkFBa0Isd0JBQXdCLG1CQUFtQixLQUFLLGlDQUFpQyx5QkFBeUIsaUJBQWlCLDhCQUE4QiwyQkFBMkIsY0FBYywyQkFBMkIsMEJBQTBCLDJCQUEyQix1QkFBdUIsNkJBQTZCLE9BQU8sbUJBQW1CLFNBQVMsNEJBQTRCLHlCQUF5Qix3QkFBd0IseUJBQXlCLE9BQU8sS0FBSyx1QkFBdUIsbUJBQW1CLDhCQUE4QixvQkFBb0Isb0NBQW9DLHdCQUF3Qix5QkFBeUIsS0FBSyxxQkFBcUIsZUFBZSxzQkFBc0IsMkJBQTJCLG1CQUFtQix5QkFBeUIsc0JBQXNCLG1CQUFtQixxQkFBcUIsK0JBQStCLE9BQU8sS0FBSyx1QkFBdUI7QUFDbnJHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Z2QztBQUM0SDtBQUM3QjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsaUZBQWlGLDRCQUE0Qix3QkFBd0IsaUJBQWlCLHNCQUFzQix5QkFBeUIsR0FBRyx5REFBeUQsa0JBQWtCLGtCQUFrQixpQkFBaUIsR0FBRyxpR0FBaUcsbUJBQW1CLGdCQUFnQixpQkFBaUIsc0JBQXNCLG1DQUFtQyxzQkFBc0IsR0FBRyxnREFBZ0Qsc0JBQXNCLGtCQUFrQixzQkFBc0Isa0JBQWtCLHVCQUF1Qiw0QkFBNEIsMkNBQTJDLHNCQUFzQix1QkFBdUIsZ0JBQWdCLEdBQUcscURBQXFELGtCQUFrQix1QkFBdUIsZUFBZSxtQkFBbUIsZ0JBQWdCLGlCQUFpQiwyQkFBMkIsR0FBRyx3REFBd0QsdUJBQXVCLGVBQWUsdUJBQXVCLGlCQUFpQixHQUFHLHlEQUF5RCx1QkFBdUIscUJBQXFCLHVCQUF1QixtQkFBbUIseUJBQXlCLEdBQUcsd0RBQXdELHdCQUF3QixxQkFBcUIsb0JBQW9CLHFCQUFxQixHQUFHLGtEQUFrRCxpQkFBaUIsNEJBQTRCLGtCQUFrQixrQ0FBa0MsdUJBQXVCLEdBQUcsc0RBQXNELGtCQUFrQix1QkFBdUIsZUFBZSxlQUFlLHFCQUFxQixvQkFBb0IsZUFBZSxpQkFBaUIsMkJBQTJCLEdBQUcsT0FBTywwRkFBMEYsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxxQ0FBcUMsOEJBQThCLDBCQUEwQixtQkFBbUIsd0JBQXdCLCtCQUErQixLQUFLLDhCQUE4QixvQkFBb0Isb0JBQW9CLG1CQUFtQixzQkFBc0IsdUJBQXVCLG9CQUFvQixxQkFBcUIsMEJBQTBCLHVDQUF1QywwQkFBMEIsT0FBTyxLQUFLLHFCQUFxQix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0IsNkJBQTZCLDhCQUE4QixpREFBaUQsd0JBQXdCLHlCQUF5QixrQkFBa0IsZ0JBQWdCLHNCQUFzQiwyQkFBMkIsbUJBQW1CLDJCQUEyQixvQkFBb0IscUJBQXFCLCtCQUErQixPQUFPLEtBQUssNkJBQTZCLHlCQUF5QixpQkFBaUIseUJBQXlCLGVBQWUsMkJBQTJCLHlCQUF5QiwyQkFBMkIsdUJBQXVCLDZCQUE2QixPQUFPLG1CQUFtQixTQUFTLDRCQUE0Qix5QkFBeUIsd0JBQXdCLHlCQUF5QixPQUFPLEtBQUssdUJBQXVCLG1CQUFtQiw4QkFBOEIsb0JBQW9CLG9DQUFvQyw2QkFBNkIsS0FBSyxxQkFBcUIsZUFBZSxzQkFBc0IsMkJBQTJCLG1CQUFtQixtQkFBbUIseUJBQXlCLHdCQUF3QixtQkFBbUIscUJBQXFCLCtCQUErQixPQUFPLEtBQUssdUJBQXVCO0FBQzkxSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCdkM7QUFDNEg7QUFDN0I7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLDhFQUE4RSxvQkFBb0IsZ0JBQWdCLGVBQWUsR0FBRyx1RUFBdUUsV0FBVyxnQkFBZ0Isa0JBQWtCLDRCQUE0QixzQkFBc0IsR0FBRyxnSEFBZ0gsa0JBQWtCLEdBQUcsNkdBQTZHLGlCQUFpQixHQUFHLGlIQUFpSCxpQkFBaUIsZ0JBQWdCLDhCQUE4QixHQUFHLDRDQUE0QyxrQkFBa0IsOEVBQThFLDhFQUE4RSxxREFBcUQsNktBQTZLLGlGQUFpRixPQUFPLHFGQUFxRixVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLHdDQUF3QyxzQkFBc0Isa0JBQWtCLGlCQUFpQixrQkFBa0IsZUFBZSxvQkFBb0Isc0JBQXNCLHdDQUF3QyxnQ0FBZ0Msd0JBQXdCLFNBQVMsOEJBQThCLHlCQUF5Qix1QkFBdUIsbUJBQW1CLHlCQUF5Qix3QkFBd0Isc0NBQXNDLFdBQVcsU0FBUyxPQUFPLGVBQWUsdUJBQXVCLCtFQUErRSwrRUFBK0Usc0RBQXNELGtMQUFrTCxpRkFBaUYsS0FBSyx1QkFBdUI7QUFDam9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYnZDO0FBQzRIO0FBQzdCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSwyRUFBMkUsa0JBQWtCLDRCQUE0Qix3QkFBd0IsaUJBQWlCLHVCQUF1QixHQUFHLDJFQUEyRSxpQkFBaUIsR0FBRyx5Q0FBeUMsZ0JBQWdCLEdBQUcsT0FBTyxvRkFBb0YsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLHFDQUFxQyxvQkFBb0IsOEJBQThCLDBCQUEwQixtQkFBbUIsNkJBQTZCLDBCQUEwQixxQkFBcUIsT0FBTyxLQUFLLG9CQUFvQixrQkFBa0IsS0FBSyx1QkFBdUI7QUFDOXlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1p2QztBQUM0SDtBQUM3QjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsNkVBQTZFLDRCQUE0QixnQkFBZ0IsdUJBQXVCLGVBQWUsaUJBQWlCLEdBQUcsMkNBQTJDLG9CQUFvQixnQkFBZ0IsOEJBQThCLDRCQUE0QixrQkFBa0IsZ0JBQWdCLGVBQWUsR0FBRyxPQUFPLHNGQUFzRixXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUscUNBQXFDLG1DQUFtQyw4QkFBOEIsa0JBQWtCLHlCQUF5QixpQkFBaUIsbUJBQW1CLEtBQUssb0JBQW9CLHNCQUFzQixrQkFBa0Isb0NBQW9DLDhCQUE4QixvQkFBb0Isa0JBQWtCLGlCQUFpQixLQUFLLHdCQUF3QixTQUFTLHVCQUF1QjtBQUNoZ0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1h2QztBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EseUZBQXlGLGdCQUFnQiwyQkFBMkIsaUJBQWlCLEdBQUcsNkZBQTZGLGdCQUFnQixtQ0FBbUMsc0JBQXNCLEdBQUcscURBQXFELGNBQWMsaUJBQWlCLGlCQUFpQixzQkFBc0IsR0FBRyw0REFBNEQsbUJBQW1CLGlCQUFpQixHQUFHLHdDQUF3QyxlQUFlLEdBQUcsMENBQTBDLDBCQUEwQixHQUFHLHlDQUF5QyxnQkFBZ0IsR0FBRyxPQUFPLDRGQUE0RixVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSwyQ0FBMkMsa0JBQWtCLDZCQUE2QixtQkFBbUIsc0JBQXNCLG9CQUFvQiwrQ0FBK0MsMEJBQTBCLE9BQU8sS0FBSyx3QkFBd0Isb0JBQW9CLGlCQUFpQixtQkFBbUIsd0JBQXdCLFNBQVMsK0JBQStCLHFCQUFxQixtQkFBbUIsS0FBSyxXQUFXLGlCQUFpQixXQUFXLDhCQUE4QixPQUFPLEtBQUssWUFBWSxrQkFBa0IsS0FBSyx1QkFBdUI7QUFDamxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7QUNmMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQ2pFYTs7QUFFYixrQ0FBa0M7O0FBRWxDLDhCQUE4Qjs7QUFFOUIsa0RBQWtELGdCQUFnQixnRUFBZ0Usd0RBQXdELDZEQUE2RCxzREFBc0Q7O0FBRTdTLHVDQUF1Qyx1REFBdUQsdUNBQXVDLFNBQVMsT0FBTyxvQkFBb0I7O0FBRXpLLHlDQUF5Qyw4RkFBOEYsd0JBQXdCLGVBQWUsZUFBZSxnQkFBZ0IsWUFBWSxNQUFNLHdCQUF3QiwrQkFBK0IsYUFBYSxxQkFBcUIsdUNBQXVDLGNBQWMsV0FBVyxZQUFZLFVBQVUsTUFBTSxtREFBbUQsVUFBVSxzQkFBc0I7O0FBRXZlLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbkNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDd0Y7QUFDeEYsWUFBb007O0FBRXBNOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLHlMQUFPOzs7O0FBSXhCLGlFQUFlLGdNQUFjLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1o0RDtBQUMvRixZQUFnTzs7QUFFaE87O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsZ01BQU87Ozs7QUFJeEIsaUVBQWUsdU1BQWMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWjREO0FBQy9GLFlBQTBPOztBQUUxTzs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQywwTUFBTzs7OztBQUl4QixpRUFBZSxpTkFBYyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaNEQ7QUFDL0YsWUFBdU87O0FBRXZPOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLHVNQUFPOzs7O0FBSXhCLGlFQUFlLDhNQUFjLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1o0RDtBQUMvRixZQUFrTzs7QUFFbE87O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsa01BQU87Ozs7QUFJeEIsaUVBQWUseU1BQWMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWjREO0FBQy9GLFlBQWlPOztBQUVqTzs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyxpTUFBTzs7OztBQUl4QixpRUFBZSx3TUFBYyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaNEQ7QUFDL0YsWUFBbU87O0FBRW5POztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLG1NQUFPOzs7O0FBSXhCLGlFQUFlLDBNQUFjLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1p5RDtBQUM1RixZQUFnTzs7QUFFaE87O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMseU1BQU87Ozs7QUFJeEIsaUVBQWUsZ05BQWMsTUFBTTs7Ozs7Ozs7Ozs7QUNadEI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHFFQUFxRSxxQkFBcUIsY0FBYzs7QUFFeEc7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXdDO0FBQ0k7QUFDVTtBQUN0RDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsbUJBQW1CLGdFQUFtQixDQUFDO0FBQ3ZDLHFCQUFxQiwyREFBYyxFQUFFLE1BQU0sMERBQUksRUFBRTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNma0Q7QUFDWTtBQUNVO0FBQ3hFO0FBQ087QUFDUDtBQUNBLGlCQUFpQiwwRUFBbUIsQ0FBQztBQUNyQyxtQkFBbUIscUZBQTJCLENBQUM7QUFDL0MscUJBQXFCLGlGQUF1QixDQUFDO0FBQzdDLFlBQVksaUZBQW1CO0FBQy9CO0FBQ0EscUJBQXFCLG9GQUEwQixDQUFDO0FBQ2hELHVCQUF1QixrRkFBd0IsQ0FBQztBQUNoRCx5QkFBeUIsa0ZBQXdCLENBQUM7QUFDbEQsMkJBQTJCLDBGQUFnQyxDQUFDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQytDO0FBQ2U7QUFDWTtBQUMxRTtBQUNBO0FBQ0EsU0FBUyw2REFBUztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsU0FBUywwRUFBTTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDTztBQUNQO0FBQ0EsaUJBQWlCLHVFQUFtQixDQUFDO0FBQ3JDLG1CQUFtQix3RkFBaUMsQ0FBQztBQUNyRCxtQkFBbUIsYUFBYSxRQUFRLDhFQUF1QixFQUFFO0FBQ2pFO0FBQ0E7QUFDQSxtQkFBbUIsaUZBQTBCLENBQUM7QUFDOUMscUJBQXFCLCtFQUF3QixDQUFDO0FBQzlDLHVCQUF1Qix1RkFBZ0MsQ0FBQyxHQUFHLGFBQWE7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGlDQUFpQyxHQUFHLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RHBDO0FBQ0Q7QUFDekM7QUFDQTtBQUNPO0FBQ1A7QUFDQSxpQkFBaUIsdUVBQXFCLENBQUM7QUFDdkMsd0NBQXdDLGtFQUFtQixDQUFDO0FBQzVELHFCQUFxQiw2RUFBMkIsQ0FBQztBQUNqRCx1QkFBdUIsMEVBQXdCLENBQUMsR0FBRyx5REFBSSxDQUFDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnlDO0FBQ1U7QUFDbkQ7QUFDTztBQUNQO0FBQ0EsaUJBQWlCLGlFQUFtQixDQUFDO0FBQ3JDLG1CQUFtQiw0RUFBMkIsQ0FBQztBQUMvQyxxQkFBcUIsd0VBQXVCLEVBQUUsTUFBTSxzREFBSyxFQUFFO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1oyQztBQUNFO0FBQzJCO0FBQ1Q7QUFDUztBQUN4RTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsaUJBQWlCLG1FQUFtQixDQUFDO0FBQ3JDLHNDQUFzQywwRUFBdUIsQ0FBQztBQUM5RCxRQUFRLHlEQUFXO0FBQ25CLG1CQUFtQiw4RUFBMkIsQ0FBQztBQUMvQyxVQUFVLGlGQUFtQiwyQkFBMkIsRUFBRSwyRUFBaUI7QUFDM0UsVUFBVSxvRkFBb0IsSUFBSSxFQUFFLDJFQUFpQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQmlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRSxvRUFBaUU7QUFDbkUsRUFBRSx1RUFBb0U7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDTztBQUNQO0FBQ0EsaUJBQWlCLCtEQUFNLFlBQVk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0ZBQXlCLENBQUM7QUFDN0MscUJBQXFCLGdGQUF1QixFQUFFLE1BQU0sWUFBWTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsMEJBQTBCO0FBQzNFO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ1pEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmb0M7QUFDZDtBQUN0QjtBQUN1RDtBQUNIO0FBQ1M7QUFDdkI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFTO0FBQ1QsaUVBQVU7QUFDVjtBQUNBLDBFQUFhO0FBQ2I7QUFDQSxtQkFBTyxDQUFDLG1EQUFtQjtBQUMzQjtBQUNBO0FBQ0EsZUFBZSw2SEFBNEQ7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sSUFBSTtBQUNKLG1DQUFtQyxTQUFTO0FBQzVDLE1BQU0seURBQU07QUFDWjtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2F2aWF0b3IvLi9ub2RlX21vZHVsZXMvQHNwbGlkZWpzL3NwbGlkZS9kaXN0L2pzL3NwbGlkZS5lc20uanMiLCJ3ZWJwYWNrOi8vYXZpYXRvci8uL21haW4uc2NzcyIsIndlYnBhY2s6Ly9hdmlhdG9yLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9Ib21lLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2F2aWF0b3IvLi9zcmMvY29tcG9uZW50cy9oeWJyaWRDYXJvdXNlbC9oeWJyaWRDYXJvdXNlbC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9hdmlhdG9yLy4vc3JjL2NvbXBvbmVudHMvaHlicmlkSW1hZ2UvaHlicmlkSW1hZ2UubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYXZpYXRvci8uL3NyYy9jb21wb25lbnRzL25hdmJhci9uYXZiYXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYXZpYXRvci8uL3NyYy9jb21wb25lbnRzL3F1b3RlL3F1b3RlLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2F2aWF0b3IvLi9zcmMvY29tcG9uZW50cy93cmFwcGVyL3dyYXBwZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYXZpYXRvci8uL3NyYy9nYWxsZXJ5U2xpZGVyL2dhbGxlcnlTbGlkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYXZpYXRvci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYXZpYXRvci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2F2aWF0b3IvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2F2aWF0b3IvLi9tYWluLnNjc3M/ZDE1YyIsIndlYnBhY2s6Ly9hdmlhdG9yLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9Ib21lLm1vZHVsZS5zY3NzP2RlNmYiLCJ3ZWJwYWNrOi8vYXZpYXRvci8uL3NyYy9jb21wb25lbnRzL2h5YnJpZENhcm91c2VsL2h5YnJpZENhcm91c2VsLm1vZHVsZS5zY3NzP2I5MDAiLCJ3ZWJwYWNrOi8vYXZpYXRvci8uL3NyYy9jb21wb25lbnRzL2h5YnJpZEltYWdlL2h5YnJpZEltYWdlLm1vZHVsZS5zY3NzPzQ3OTUiLCJ3ZWJwYWNrOi8vYXZpYXRvci8uL3NyYy9jb21wb25lbnRzL25hdmJhci9uYXZiYXIubW9kdWxlLnNjc3M/YzllZCIsIndlYnBhY2s6Ly9hdmlhdG9yLy4vc3JjL2NvbXBvbmVudHMvcXVvdGUvcXVvdGUubW9kdWxlLnNjc3M/Mjk4YSIsIndlYnBhY2s6Ly9hdmlhdG9yLy4vc3JjL2NvbXBvbmVudHMvd3JhcHBlci93cmFwcGVyLm1vZHVsZS5zY3NzP2ZjZWIiLCJ3ZWJwYWNrOi8vYXZpYXRvci8uL3NyYy9nYWxsZXJ5U2xpZGVyL2dhbGxlcnlTbGlkZXIubW9kdWxlLnNjc3M/ZmI3MCIsIndlYnBhY2s6Ly9hdmlhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2F2aWF0b3IvLi9zcmMvaW1hZ2VzL2xvZ28uc3ZnIiwid2VicGFjazovL2F2aWF0b3IvLi9zcmMvY29tcG9uZW50cy9ob21lL0hvbWUuanMiLCJ3ZWJwYWNrOi8vYXZpYXRvci8uL3NyYy9jb21wb25lbnRzL2h5YnJpZENhcm91c2VsL2h5YnJpZENhcm91c2VsLmpzIiwid2VicGFjazovL2F2aWF0b3IvLi9zcmMvY29tcG9uZW50cy9oeWJyaWRJbWFnZS9oeWJyaWRJbWFnZS5qcyIsIndlYnBhY2s6Ly9hdmlhdG9yLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5qcyIsIndlYnBhY2s6Ly9hdmlhdG9yLy4vc3JjL2NvbXBvbmVudHMvcXVvdGUvcXVvdGUuanMiLCJ3ZWJwYWNrOi8vYXZpYXRvci8uL3NyYy9jb21wb25lbnRzL3dyYXBwZXIvd3JhcHBlci5qcyIsIndlYnBhY2s6Ly9hdmlhdG9yLy4vc3JjL2dhbGxlcnlTbGlkZXIvZ2FsbGVyeVNsaWRlci5qcyIsIndlYnBhY2s6Ly9hdmlhdG9yLy4vc3JjL2ltYWdlcy9ibHVlcHJpbnRzfHN5bmN8bm9ucmVjdXJzaXZlfC8uKHBuZ3xqcGUiLCJ3ZWJwYWNrOi8vYXZpYXRvci8uL3NyYy9pbWFnZXMvcmVuZGVyc3xzeW5jfG5vbnJlY3Vyc2l2ZXwvLihwbmd8anBlIiwid2VicGFjazovL2F2aWF0b3IvLi9zcmMvc2Nyb2xsQW5pbWF0aW9uLmpzIiwid2VicGFjazovL2F2aWF0b3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXZpYXRvci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9hdmlhdG9yL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hdmlhdG9yL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYXZpYXRvci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2F2aWF0b3Ivd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hdmlhdG9yL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2F2aWF0b3IvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBTcGxpZGUuanNcbiAqIFZlcnNpb24gIDogMi40LjIwXG4gKiBMaWNlbnNlICA6IE1JVFxuICogQ29weXJpZ2h0OiAyMDIwIE5hb3Rvc2hpIEZ1aml0YVxuICovXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTcGxpZGVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiU3BsaWRlXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKCgpID0+IHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHRcInVzZSBzdHJpY3RcIjtcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVzX18gPSAoe1xuXG4vKioqLyAzMTE6XG4vKioqLyAoKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSA9PiB7XG5cbi8vIEVTTSBDT01QQVQgRkxBR1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuXG4vLyBFWFBPUlRTXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywge1xuICBcImRlZmF1bHRcIjogKCkgPT4gLyogYmluZGluZyAqLyBtb2R1bGVfU3BsaWRlXG59KTtcblxuLy8gTkFNRVNQQUNFIE9CSkVDVDogLi9zcmMvanMvY29uc3RhbnRzL3N0YXRlcy5qc1xudmFyIHN0YXRlc19uYW1lc3BhY2VPYmplY3QgPSB7fTtcbl9fd2VicGFja19yZXF1aXJlX18ucihzdGF0ZXNfbmFtZXNwYWNlT2JqZWN0KTtcbl9fd2VicGFja19yZXF1aXJlX18uZChzdGF0ZXNfbmFtZXNwYWNlT2JqZWN0LCB7XG4gIFwiQ1JFQVRFRFwiOiAoKSA9PiBDUkVBVEVELFxuICBcIkRFU1RST1lFRFwiOiAoKSA9PiBERVNUUk9ZRUQsXG4gIFwiSURMRVwiOiAoKSA9PiBJRExFLFxuICBcIk1PVU5URURcIjogKCkgPT4gTU9VTlRFRCxcbiAgXCJNT1ZJTkdcIjogKCkgPT4gTU9WSU5HXG59KTtcblxuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvcmUvZXZlbnQuanNcbi8qKlxyXG4gKiBUaGUgZnVuY3Rpb24gZm9yIHByb3ZpZGluZyBhbiBFdmVudCBvYmplY3Qgc2ltcGx5IG1hbmFnaW5nIGV2ZW50cy5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG4vKipcclxuICogVGhlIGZ1bmN0aW9uIGZvciBwcm92aWRpbmcgYW4gRXZlbnQgb2JqZWN0IHNpbXBseSBtYW5hZ2luZyBldmVudHMuXHJcbiAqL1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBjb3JlX2V2ZW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgLyoqXHJcbiAgICogU3RvcmUgYWxsIGV2ZW50IGRhdGEuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7QXJyYXl9XHJcbiAgICovXG4gIHZhciBkYXRhID0gW107XG4gIHZhciBFdmVudCA9IHtcbiAgICAvKipcclxuICAgICAqIFN1YnNjcmliZSB0aGUgZ2l2ZW4gZXZlbnQocykuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICAgZXZlbnRzICAtIEFuIGV2ZW50IG5hbWUuIFVzZSBzcGFjZSB0byBzZXBhcmF0ZSBtdWx0aXBsZSBldmVudHMuXHJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWxzbywgbmFtZXNwYWNlIGlzIGFjY2VwdGVkIGJ5IGRvdCwgc3VjaCBhcyAncmVzaXplLntuYW1lc3BhY2V9Jy5cclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXIgLSBBIGNhbGxiYWNrIGZ1bmN0aW9uLlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSAgZWxtICAgICAtIE9wdGlvbmFsLiBOYXRpdmUgZXZlbnQgd2lsbCBiZSBsaXN0ZW5lZCB0byB3aGVuIHRoaXMgYXJnIGlzIHByb3ZpZGVkLlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICAgb3B0aW9ucyAtIE9wdGlvbmFsLiBPcHRpb25zIGZvciBhZGRFdmVudExpc3RlbmVyLlxyXG4gICAgICovXG4gICAgb246IGZ1bmN0aW9uIG9uKGV2ZW50cywgaGFuZGxlciwgZWxtLCBvcHRpb25zKSB7XG4gICAgICBpZiAoZWxtID09PSB2b2lkIDApIHtcbiAgICAgICAgZWxtID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgICBvcHRpb25zID0ge307XG4gICAgICB9XG5cbiAgICAgIGV2ZW50cy5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChlbG0pIHtcbiAgICAgICAgICBlbG0uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhLnB1c2goe1xuICAgICAgICAgIGV2ZW50OiBldmVudCxcbiAgICAgICAgICBoYW5kbGVyOiBoYW5kbGVyLFxuICAgICAgICAgIGVsbTogZWxtLFxuICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBVbnN1YnNjcmliZSB0aGUgZ2l2ZW4gZXZlbnQocykuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICBldmVudHMgLSBBIGV2ZW50IG5hbWUgb3IgbmFtZXMgc3BsaXQgYnkgc3BhY2UuXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsbSAgICAtIE9wdGlvbmFsLiByZW1vdmVFdmVudExpc3RlbmVyKCkgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGlzIGFyZyBpcyBwcm92aWRlZC5cclxuICAgICAqL1xuICAgIG9mZjogZnVuY3Rpb24gb2ZmKGV2ZW50cywgZWxtKSB7XG4gICAgICBpZiAoZWxtID09PSB2b2lkIDApIHtcbiAgICAgICAgZWxtID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgZXZlbnRzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgaWYgKGl0ZW0gJiYgaXRlbS5ldmVudCA9PT0gZXZlbnQgJiYgaXRlbS5lbG0gPT09IGVsbSkge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmUoaXRlbSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogRW1pdCBhbiBldmVudC5cclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIG9ubHkgZm9yIGN1c3RvbSBldmVudHMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICBldmVudCAtIEFuIGV2ZW50IG5hbWUuXHJcbiAgICAgKiBAcGFyYW0geyp9ICAgICAgIGFyZ3MgIC0gQW55IG51bWJlciBvZiBhcmd1bWVudHMgcGFzc2VkIHRvIGhhbmRsZXJzLlxyXG4gICAgICovXG4gICAgZW1pdDogZnVuY3Rpb24gZW1pdChldmVudCkge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGlmICghaXRlbS5lbG0gJiYgaXRlbS5ldmVudC5zcGxpdCgnLicpWzBdID09PSBldmVudCkge1xuICAgICAgICAgIGl0ZW0uaGFuZGxlci5hcHBseShpdGVtLCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogQ2xlYXIgZXZlbnQgZGF0YS5cclxuICAgICAqL1xuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICBkYXRhLmZvckVhY2godW5zdWJzY3JpYmUpO1xuICAgICAgZGF0YSA9IFtdO1xuICAgIH1cbiAgfTtcbiAgLyoqXHJcbiAgICogUmVtb3ZlIHRoZSByZWdpc3RlcmVkIGV2ZW50IGxpc3RlbmVyLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gLSBBbiBvYmplY3QgY29udGFpbmluZyBldmVudCBkYXRhLlxyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGl0ZW0pIHtcbiAgICBpZiAoaXRlbS5lbG0pIHtcbiAgICAgIGl0ZW0uZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoaXRlbS5ldmVudCwgaXRlbS5oYW5kbGVyLCBpdGVtLm9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBFdmVudDtcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvcmUvc3RhdGUuanNcbi8qKlxyXG4gKiBUaGUgZnVuY3Rpb24gcHJvdmlkaW5nIGEgc3VwZXIgc2ltcGxlIHN0YXRlIHN5c3RlbS5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG4vKipcclxuICogVGhlIGZ1bmN0aW9uIHByb3ZpZGluZyBhIHN1cGVyIHNpbXBsZSBzdGF0ZSBzeXN0ZW0uXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gaW5pdGlhbFN0YXRlIC0gUHJvdmlkZSB0aGUgaW5pdGlhbCBzdGF0ZSB2YWx1ZS5cclxuICovXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IHN0YXRlID0gKGZ1bmN0aW9uIChpbml0aWFsU3RhdGUpIHtcbiAgLyoqXHJcbiAgICogU3RvcmUgdGhlIGN1cnJlbnQgc3RhdGUuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfG51bWJlcn1cclxuICAgKi9cbiAgdmFyIGN1cnIgPSBpbml0aWFsU3RhdGU7XG4gIHJldHVybiB7XG4gICAgLyoqXHJcbiAgICAgKiBDaGFuZ2Ugc3RhdGUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBzdGF0ZSAtIEEgbmV3IHN0YXRlLlxyXG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RhdGUpIHtcbiAgICAgIGN1cnIgPSBzdGF0ZTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBWZXJpZnkgaWYgdGhlIGN1cnJlbnQgc3RhdGUgaXMgZ2l2ZW4gb25lIG9yIG5vdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IHN0YXRlIC0gQSBzdGF0ZSBuYW1lIHRvIGJlIHZlcmlmaWVkLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gVHJ1ZSBpZiB0aGUgY3VycmVudCBzdGF0ZSBpcyB0aGUgZ2l2ZW4gb25lLlxyXG4gICAgICovXG4gICAgaXM6IGZ1bmN0aW9uIGlzKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGUgPT09IGN1cnI7XG4gICAgfVxuICB9O1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvdXRpbHMvb2JqZWN0LmpzXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG4vKipcclxuICogU29tZSB1dGlsaXR5IGZ1bmN0aW9ucyByZWxhdGVkIHdpdGggT2JqZWN0LCBzdXBwb3J0aW5nIElFLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG52YXIga2V5cyA9IE9iamVjdC5rZXlzO1xuLyoqXHJcbiAqIEl0ZXJhdGUgYW4gb2JqZWN0IGxpa2UgQXJyYXkuZm9yRWFjaC5cclxuICogSUUgZG9lc24ndCBzdXBwb3J0IGZvckVhY2ggb2YgSFRNTENvbGxlY3Rpb24uXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSAgICBvYmogICAgICAgLSBBbiBvYmplY3QuXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259ICBjYWxsYmFjayAgLSBBIGZ1bmN0aW9uIGhhbmRsaW5nIGVhY2ggdmFsdWUuIEFyZ3VtZW50cyBhcmUgdmFsdWUsIHByb3BlcnR5IGFuZCBpbmRleC5cclxuICovXG5cbmZ1bmN0aW9uIGVhY2gob2JqLCBjYWxsYmFjaykge1xuICBrZXlzKG9iaikuc29tZShmdW5jdGlvbiAoa2V5LCBpbmRleCkge1xuICAgIHJldHVybiBjYWxsYmFjayhvYmpba2V5XSwga2V5LCBpbmRleCk7XG4gIH0pO1xufVxuLyoqXHJcbiAqIFJldHVybiB2YWx1ZXMgb2YgdGhlIGdpdmVuIG9iamVjdCBhcyBhbiBhcnJheS5cclxuICogSUUgZG9lc24ndCBzdXBwb3J0IE9iamVjdC52YWx1ZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSBBbiBvYmplY3QuXHJcbiAqXHJcbiAqIEByZXR1cm4ge0FycmF5fSAtIEFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIHZhbHVlcyBvZiB0aGUgZ2l2ZW4gb2JqZWN0LlxyXG4gKi9cblxuZnVuY3Rpb24gdmFsdWVzKG9iaikge1xuICByZXR1cm4ga2V5cyhvYmopLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9KTtcbn1cbi8qKlxyXG4gKiBDaGVjayBpZiB0aGUgZ2l2ZW4gc3ViamVjdCBpcyBvYmplY3Qgb3Igbm90LlxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHN1YmplY3QgLSBBIHN1YmplY3QgdG8gYmUgdmVyaWZpZWQuXHJcbiAqXHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59IC0gVHJ1ZSBpZiBvYmplY3QsIGZhbHNlIG90aGVyd2lzZS5cclxuICovXG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHN1YmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBzdWJqZWN0ID09PSAnb2JqZWN0Jztcbn1cbi8qKlxyXG4gKiBNZXJnZSB0d28gb2JqZWN0cyBkZWVwbHkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB0byAgIC0gQW4gb2JqZWN0IHdoZXJlIFwiZnJvbVwiIGlzIG1lcmdlZC5cclxuICogQHBhcmFtIHtPYmplY3R9IGZyb20gLSBBbiBvYmplY3QgbWVyZ2VkIHRvIFwidG9cIi5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIEEgbWVyZ2VkIG9iamVjdC5cclxuICovXG5cbmZ1bmN0aW9uIG1lcmdlKF9yZWYsIGZyb20pIHtcbiAgdmFyIHRvID0gX2V4dGVuZHMoe30sIF9yZWYpO1xuXG4gIGVhY2goZnJvbSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICBpZiAoIWlzT2JqZWN0KHRvW2tleV0pKSB7XG4gICAgICAgIHRvW2tleV0gPSB7fTtcbiAgICAgIH1cblxuICAgICAgdG9ba2V5XSA9IG1lcmdlKHRvW2tleV0sIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9ba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0bztcbn1cbi8qKlxyXG4gKiBBc3NpZ24gYWxsIHByb3BlcnRpZXMgXCJmcm9tXCIgdG8gXCJ0b1wiIG9iamVjdC5cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHRvICAgLSBBbiBvYmplY3Qgd2hlcmUgcHJvcGVydGllcyBhcmUgYXNzaWduZWQuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBmcm9tIC0gQW4gb2JqZWN0IHdob3NlIHByb3BlcnRpZXMgYXJlIGFzc2lnbmVkIHRvIFwidG9cIi5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIEFuIGFzc2lnbmVkIG9iamVjdC5cclxuICovXG5cbmZ1bmN0aW9uIG9iamVjdF9hc3NpZ24odG8sIGZyb20pIHtcbiAga2V5cyhmcm9tKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoIXRvW2tleV0pIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0bywga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGZyb20sIGtleSkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0bztcbn1cbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy91dGlscy91dGlscy5qc1xuLyoqXHJcbiAqIEEgcGFja2FnZSBvZiBzb21lIG1pc2NlbGxhbmVvdXMgdXRpbGl0eSBmdW5jdGlvbnMuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuLyoqXHJcbiAqIENvbnZlcnQgdGhlIGdpdmVuIHZhbHVlIHRvIGFycmF5LlxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gQW55IHZhbHVlLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHsqW119IC0gQXJyYXkgY29udGFpbmluZyB0aGUgZ2l2ZW4gdmFsdWUuXHJcbiAqL1xuXG5mdW5jdGlvbiB0b0FycmF5KHZhbHVlKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXTtcbn1cbi8qKlxyXG4gKiBDaGVjayBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYmV0d2VlbiBtaW4gYW5kIG1heC5cclxuICogTWluIHdpbGwgYmUgcmV0dXJuZWQgd2hlbiB0aGUgdmFsdWUgaXMgbGVzcyB0aGFuIG1pbiBvciBtYXggd2lsbCBkbyB3aGVuIGdyZWF0ZXIgdGhhbiBtYXguXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAtIEEgbnVtYmVyIHRvIGJlIGNoZWNrZWQuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtMSAgICAtIE1pbmltdW0gb3IgbWF4aW11bSBudW1iZXIuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtMiAgICAtIE1heGltdW0gb3IgbWluaW11bSBudW1iZXIuXHJcbiAqXHJcbiAqIEByZXR1cm4ge251bWJlcn0gLSBBIHZhbHVlIGl0c2VsZiwgbWluIG9yIG1heC5cclxuICovXG5cbmZ1bmN0aW9uIGJldHdlZW4odmFsdWUsIG0xLCBtMikge1xuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIG0xID4gbTIgPyBtMiA6IG0xKSwgbTEgPiBtMiA/IG0xIDogbTIpO1xufVxuLyoqXHJcbiAqIFRoZSBzcHJpbnRmIG1ldGhvZCB3aXRoIG1pbmltdW0gZnVuY3Rpb25hbGl0eS5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgIGZvcm1hdCAgICAgICAtIFRoZSBzdHJpbmcgZm9ybWF0LlxyXG4gKiBAcGFyYW0ge3N0cmluZ3xBcnJheX0gcmVwbGFjZW1lbnRzIC0gUmVwbGFjZW1lbnRzIGFjY2VwdGluZyBtdWx0aXBsZSBhcmd1bWVudHMuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IC0gQ29udmVydGVkIHN0cmluZy5cclxuICovXG5cbmZ1bmN0aW9uIHNwcmludGYoZm9ybWF0LCByZXBsYWNlbWVudHMpIHtcbiAgdmFyIGkgPSAwO1xuICByZXR1cm4gZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdG9BcnJheShyZXBsYWNlbWVudHMpW2krK107XG4gIH0pO1xufVxuLyoqXHJcbiAqIEFwcGVuZCBweCB1bml0IHRvIHRoZSBnaXZlbiBzdWJqZWN0IGlmIG5lY2Vzc2FyeS5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSB2YWx1ZSAtIEEgdmFsdWUgdGhhdCBtYXkgbm90IGluY2x1ZGUgYW4gdW5pdC5cclxuICpcclxuICogQHJldHVybiB7c3RyaW5nfSAtIElmIHRoZSB2YWx1ZSBpcyBzdHJpbmcsIHJldHVybiBpdHNlbGYuXHJcbiAqICAgICAgICAgICAgICAgICAgICBJZiBudW1iZXIsIGRvIHZhbHVlICsgXCJweFwiLiBBbiBlbXB0eSBzdHJpbmcsIG90aGVyd2lzZS5cclxuICovXG5cbmZ1bmN0aW9uIHVuaXQodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG5cbiAgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIHZhbHVlID4gMCkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKSArICdweCc7XG4gIH1cblxuICByZXR1cm4gdHlwZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6ICcnO1xufVxuLyoqXHJcbiAqIFBhZCBzdGFydCB3aXRoIDAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgLSBBIG51bWJlciB0byBiZSBmaWxsZWQgd2l0aCAwLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtzdHJpbmd8bnVtYmVyfSAtIFBhZGRlZCBudW1iZXIuXHJcbiAqL1xuXG5mdW5jdGlvbiBwYWQobnVtYmVyKSB7XG4gIHJldHVybiBudW1iZXIgPCAxMCA/ICcwJyArIG51bWJlciA6IG51bWJlcjtcbn1cbi8qKlxyXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiB2YWx1ZSB0byBwaXhlbC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSAgICAgICByb290ICAtIFJvb3QgZWxlbWVudCB3aGVyZSBhIGR1bW15IGRpdiBpcyBhcHBlbmRlZC5cclxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSB2YWx1ZSAtIENTUyB2YWx1ZSB0byBiZSBjb252ZXJ0ZWQsIHN1Y2ggYXMgMTByZW0uXHJcbiAqXHJcbiAqIEByZXR1cm4ge251bWJlcn0gLSBQaXhlbC5cclxuICovXG5cbmZ1bmN0aW9uIHRvUGl4ZWwocm9vdCwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgZGl2ID0gY3JlYXRlKCdkaXYnLCB7fSk7XG4gICAgYXBwbHlTdHlsZShkaXYsIHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgd2lkdGg6IHZhbHVlXG4gICAgfSk7XG4gICAgYXBwZW5kKHJvb3QsIGRpdik7XG4gICAgdmFsdWUgPSBkaXYuY2xpZW50V2lkdGg7XG4gICAgZG9tX3JlbW92ZShkaXYpO1xuICB9XG5cbiAgcmV0dXJuICt2YWx1ZSB8fCAwO1xufVxuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL3V0aWxzL2RvbS5qc1xuLyoqXHJcbiAqIFNvbWUgdXRpbGl0eSBmdW5jdGlvbnMgcmVsYXRlZCB3aXRoIERPTS5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cbi8qKlxyXG4gKiBGaW5kIHRoZSBmaXJzdCBlbGVtZW50IG1hdGNoaW5nIHRoZSBnaXZlbiBzZWxlY3Rvci5cclxuICogQmUgYXdhcmUgdGhhdCBhbGwgc2VsZWN0b3JzIGFmdGVyIGEgc3BhY2UgYXJlIGlnbm9yZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudHxOb2RlfSAgZWxtICAgICAgIC0gQW4gYW5jZXN0b3IgZWxlbWVudC5cclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICBzZWxlY3RvciAgLSBET01TdHJpbmcuXHJcbiAqXHJcbiAqIEByZXR1cm4ge0VsZW1lbnR8bnVsbH0gLSBBIGZvdW5kIGVsZW1lbnQgb3IgbnVsbC5cclxuICovXG5cbmZ1bmN0aW9uIGZpbmQoZWxtLCBzZWxlY3Rvcikge1xuICByZXR1cm4gZWxtID8gZWxtLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3Iuc3BsaXQoJyAnKVswXSkgOiBudWxsO1xufVxuLyoqXHJcbiAqIEZpbmQgYSBmaXJzdCBjaGlsZCBoYXZpbmcgdGhlIGdpdmVuIHRhZyBvciBjbGFzcyBuYW1lLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHBhcmVudCAgICAgICAgIC0gQSBwYXJlbnQgZWxlbWVudC5cclxuICogQHBhcmFtIHtzdHJpbmd9ICB0YWdPckNsYXNzTmFtZSAtIEEgdGFnIG9yIGNsYXNzIG5hbWUuXHJcbiAqXHJcbiAqIEByZXR1cm4ge0VsZW1lbnR8dW5kZWZpbmVkfSAtIEEgZm91bmQgZWxlbWVudCBvbiBzdWNjZXNzIG9yIHVuZGVmaW5lZCBvbiBmYWlsdXJlLlxyXG4gKi9cblxuZnVuY3Rpb24gY2hpbGQocGFyZW50LCB0YWdPckNsYXNzTmFtZSkge1xuICByZXR1cm4gY2hpbGRyZW4ocGFyZW50LCB0YWdPckNsYXNzTmFtZSlbMF07XG59XG4vKipcclxuICogUmV0dXJuIGNoaWxlIGVsZW1lbnRzIHRoYXQgbWF0Y2hlcyB0aGUgcHJvdmlkZWQgdGFnIG9yIGNsYXNzIG5hbWUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gcGFyZW50ICAgICAgICAgLSBBIHBhcmVudCBlbGVtZW50LlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gIHRhZ09yQ2xhc3NOYW1lIC0gQSB0YWcgb3IgY2xhc3MgbmFtZS5cclxuICpcclxuICogQHJldHVybiB7RWxlbWVudFtdfSAtIEZvdW5kIGVsZW1lbnRzLlxyXG4gKi9cblxuZnVuY3Rpb24gY2hpbGRyZW4ocGFyZW50LCB0YWdPckNsYXNzTmFtZSkge1xuICBpZiAocGFyZW50KSB7XG4gICAgcmV0dXJuIHZhbHVlcyhwYXJlbnQuY2hpbGRyZW4pLmZpbHRlcihmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIHJldHVybiBoYXNDbGFzcyhjaGlsZCwgdGFnT3JDbGFzc05hbWUuc3BsaXQoJyAnKVswXSkgfHwgY2hpbGQudGFnTmFtZSA9PT0gdGFnT3JDbGFzc05hbWU7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gW107XG59XG4vKipcclxuICogQ3JlYXRlIGFuIGVsZW1lbnQgd2l0aCBzb21lIG9wdGlvbmFsIGF0dHJpYnV0ZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgICAtIEEgdGFnIG5hbWUuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRycyAtIEFuIG9iamVjdCBhbnkgYXR0cmlidXRlIHBhaXJzIG9mIG5hbWUgYW5kIHZhbHVlLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtFbGVtZW50fSAtIEEgY3JlYXRlZCBlbGVtZW50LlxyXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlKHRhZywgYXR0cnMpIHtcbiAgdmFyIGVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgZWFjaChhdHRycywgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICByZXR1cm4gc2V0QXR0cmlidXRlKGVsbSwga2V5LCB2YWx1ZSk7XG4gIH0pO1xuICByZXR1cm4gZWxtO1xufVxuLyoqXHJcbiAqIENvbnZlcnQgSFRNTCBzdHJpbmcgdG8gRE9NIG5vZGUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBodG1sIC0gSFRNTCBzdHJpbmcuXHJcbiAqXHJcbiAqIEByZXR1cm4ge05vZGV9IC0gQSBjcmVhdGVkIG5vZGUuXHJcbiAqL1xuXG5mdW5jdGlvbiBkb21pZnkoaHRtbCkge1xuICB2YXIgZGl2ID0gY3JlYXRlKCdkaXYnLCB7fSk7XG4gIGRpdi5pbm5lckhUTUwgPSBodG1sO1xuICByZXR1cm4gZGl2LmZpcnN0Q2hpbGQ7XG59XG4vKipcclxuICogUmVtb3ZlIGEgZ2l2ZW4gZWxlbWVudCBmcm9tIGEgRE9NIHRyZWUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudHxFbGVtZW50W119IGVsbXMgLSBFbGVtZW50KHMpIHRvIGJlIHJlbW92ZWQuXHJcbiAqL1xuXG5mdW5jdGlvbiBkb21fcmVtb3ZlKGVsbXMpIHtcbiAgdG9BcnJheShlbG1zKS5mb3JFYWNoKGZ1bmN0aW9uIChlbG0pIHtcbiAgICBpZiAoZWxtKSB7XG4gICAgICB2YXIgcGFyZW50ID0gZWxtLnBhcmVudEVsZW1lbnQ7XG4gICAgICBwYXJlbnQgJiYgcGFyZW50LnJlbW92ZUNoaWxkKGVsbSk7XG4gICAgfVxuICB9KTtcbn1cbi8qKlxyXG4gKiBBcHBlbmQgYSBjaGlsZCB0byBhIGdpdmVuIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gcGFyZW50IC0gQSBwYXJlbnQgZWxlbWVudC5cclxuICogQHBhcmFtIHtFbGVtZW50fSBjaGlsZCAgLSBBbiBlbGVtZW50IHRvIGJlIGFwcGVuZGVkLlxyXG4gKi9cblxuZnVuY3Rpb24gYXBwZW5kKHBhcmVudCwgY2hpbGQpIHtcbiAgaWYgKHBhcmVudCkge1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gIH1cbn1cbi8qKlxyXG4gKiBJbnNlcnQgYW4gZWxlbWVudCBiZWZvcmUgdGhlIHJlZmVyZW5jZSBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR8Tm9kZX0gcmVmIC0gQSByZWZlcmVuY2UgZWxlbWVudC5cclxuICogQHBhcmFtIHtFbGVtZW50fSAgICAgIGVsbSAtIEFuIGVsZW1lbnQgdG8gYmUgaW5zZXJ0ZWQuXHJcbiAqL1xuXG5mdW5jdGlvbiBiZWZvcmUoZWxtLCByZWYpIHtcbiAgaWYgKGVsbSAmJiByZWYpIHtcbiAgICB2YXIgcGFyZW50ID0gcmVmLnBhcmVudEVsZW1lbnQ7XG4gICAgcGFyZW50ICYmIHBhcmVudC5pbnNlcnRCZWZvcmUoZWxtLCByZWYpO1xuICB9XG59XG4vKipcclxuICogQXBwbHkgc3R5bGVzIHRvIHRoZSBnaXZlbiBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsbSAgICAgLSBBbiBlbGVtZW50IHdoZXJlIHN0eWxlcyBhcmUgYXBwbGllZC5cclxuICogQHBhcmFtIHtPYmplY3R9ICBzdHlsZXMgIC0gT2JqZWN0IGNvbnRhaW5pbmcgc3R5bGVzLlxyXG4gKi9cblxuZnVuY3Rpb24gYXBwbHlTdHlsZShlbG0sIHN0eWxlcykge1xuICBpZiAoZWxtKSB7XG4gICAgZWFjaChzdHlsZXMsIGZ1bmN0aW9uICh2YWx1ZSwgcHJvcCkge1xuICAgICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIGVsbS5zdHlsZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4vKipcclxuICogQWRkIG9yIHJlbW92ZSBjbGFzc2VzIHRvL2Zyb20gdGhlIGVsZW1lbnQuXHJcbiAqIFRoaXMgZnVuY3Rpb24gaXMgZm9yIGludGVybmFsIHVzYWdlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9ICAgICAgICAgZWxtICAgICAtIEFuIGVsZW1lbnQgd2hlcmUgY2xhc3NlcyBhcmUgYWRkZWQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBjbGFzc2VzIC0gQ2xhc3MgbmFtZXMgYmVpbmcgYWRkZWQuXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gICAgICAgICByZW1vdmUgIC0gV2hldGhlciB0byByZW1vdmUgb3IgYWRkIGNsYXNzZXMuXHJcbiAqL1xuXG5mdW5jdGlvbiBhZGRPclJlbW92ZUNsYXNzZXMoZWxtLCBjbGFzc2VzLCByZW1vdmUpIHtcbiAgaWYgKGVsbSkge1xuICAgIHRvQXJyYXkoY2xhc3NlcykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgZWxtLmNsYXNzTGlzdFtyZW1vdmUgPyAncmVtb3ZlJyA6ICdhZGQnXShuYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuLyoqXHJcbiAqIEFkZCBjbGFzc2VzIHRvIHRoZSBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9ICAgICAgICAgIGVsbSAgICAgLSBBbiBlbGVtZW50IHdoZXJlIGNsYXNzZXMgYXJlIGFkZGVkLlxyXG4gKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gIGNsYXNzZXMgLSBDbGFzcyBuYW1lcyBiZWluZyBhZGRlZC5cclxuICovXG5cblxuZnVuY3Rpb24gYWRkQ2xhc3MoZWxtLCBjbGFzc2VzKSB7XG4gIGFkZE9yUmVtb3ZlQ2xhc3NlcyhlbG0sIGNsYXNzZXMsIGZhbHNlKTtcbn1cbi8qKlxyXG4gKiBSZW1vdmUgYSBjbGFzcyBmcm9tIHRoZSBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9ICAgICAgICAgZWxtICAgICAtIEFuIGVsZW1lbnQgd2hlcmUgY2xhc3NlcyBhcmUgcmVtb3ZlZC5cclxuICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGNsYXNzZXMgLSBBIGNsYXNzIG5hbWUgYmVpbmcgcmVtb3ZlZC5cclxuICovXG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsbSwgY2xhc3Nlcykge1xuICBhZGRPclJlbW92ZUNsYXNzZXMoZWxtLCBjbGFzc2VzLCB0cnVlKTtcbn1cbi8qKlxyXG4gKiBWZXJpZnkgaWYgdGhlIHByb3ZpZGVkIGVsZW1lbnQgaGFzIHRoZSBjbGFzcyBvciBub3QuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxtICAgICAgIC0gQW4gZWxlbWVudC5cclxuICogQHBhcmFtIHtzdHJpbmd9ICBjbGFzc05hbWUgLSBBIGNsYXNzIG5hbWUuXHJcbiAqXHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59IC0gVHJ1ZSBpZiB0aGUgZWxlbWVudCBoYXMgdGhlIGNsYXNzIG9yIGZhbHNlIGlmIG5vdC5cclxuICovXG5cbmZ1bmN0aW9uIGhhc0NsYXNzKGVsbSwgY2xhc3NOYW1lKSB7XG4gIHJldHVybiAhIWVsbSAmJiBlbG0uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG59XG4vKipcclxuICogU2V0IGF0dHJpYnV0ZSB0byB0aGUgZ2l2ZW4gZWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSAgICAgICAgICAgICAgICAgZWxtICAgLSBBbiBlbGVtZW50IHdoZXJlIGFuIGF0dHJpYnV0ZSBpcyBhc3NpZ25lZC5cclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgbmFtZSAgLSBBdHRyaWJ1dGUgbmFtZS5cclxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfGJvb2xlYW59ICAgdmFsdWUgLSBBdHRyaWJ1dGUgdmFsdWUuXHJcbiAqL1xuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGUoZWxtLCBuYW1lLCB2YWx1ZSkge1xuICBpZiAoZWxtKSB7XG4gICAgZWxtLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH1cbn1cbi8qKlxyXG4gKiBHZXQgYXR0cmlidXRlIGZyb20gdGhlIGdpdmVuIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxtICAtIEFuIGVsZW1lbnQgd2hlcmUgYW4gYXR0cmlidXRlIGlzIGFzc2lnbmVkLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gIG5hbWUgLSBBdHRyaWJ1dGUgbmFtZS5cclxuICpcclxuICogQHJldHVybiB7c3RyaW5nfSAtIFRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gYXR0cmlidXRlIGlmIGF2YWlsYWJsZS4gQW4gZW1wdHkgc3RyaW5nIGlmIG5vdC5cclxuICovXG5cbmZ1bmN0aW9uIGdldEF0dHJpYnV0ZShlbG0sIG5hbWUpIHtcbiAgcmV0dXJuIGVsbSA/IGVsbS5nZXRBdHRyaWJ1dGUobmFtZSkgOiAnJztcbn1cbi8qKlxyXG4gKiBSZW1vdmUgYXR0cmlidXRlIGZyb20gdGhlIGdpdmVuIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudHxFbGVtZW50W119IGVsbXMgIC0gQW4gZWxlbWVudCB3aGVyZSBhbiBhdHRyaWJ1dGUgaXMgcmVtb3ZlZC5cclxuICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119ICAgICAgbmFtZXMgLSBBdHRyaWJ1dGUgbmFtZS5cclxuICovXG5cbmZ1bmN0aW9uIHJlbW92ZUF0dHJpYnV0ZShlbG1zLCBuYW1lcykge1xuICB0b0FycmF5KG5hbWVzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdG9BcnJheShlbG1zKS5mb3JFYWNoKGZ1bmN0aW9uIChlbG0pIHtcbiAgICAgIHJldHVybiBlbG0gJiYgZWxtLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICB9KTtcbiAgfSk7XG59XG4vKipcclxuICogUmV0dXJuIHRoZSBSZWN0IG9iamVjdCBvZiB0aGUgcHJvdmlkZWQgb2JqZWN0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsbSAtIEFuIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEByZXR1cm4ge0NsaWVudFJlY3R8RE9NUmVjdH0gLSBBIHJlY3Qgb2JqZWN0LlxyXG4gKi9cblxuZnVuY3Rpb24gZ2V0UmVjdChlbG0pIHtcbiAgcmV0dXJuIGVsbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbn1cbi8qKlxyXG4gKiBUcmlnZ2VyIHRoZSBnaXZlbiBjYWxsYmFjayBhZnRlciBhbGwgaW1hZ2VzIGNvbnRhaW5lZCBieSB0aGUgZWxlbWVudCBhcmUgbG9hZGVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9ICBlbG0gICAgICAtIEVsZW1lbnQgdGhhdCBtYXkgY29udGFpbiBpbWFnZXMuXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gQ2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgcmlnaHQgYWZ0ZXIgYWxsIGltYWdlcyBhcmUgbG9hZGVkLlxyXG4gKi9cblxuZnVuY3Rpb24gbG9hZGVkKGVsbSwgY2FsbGJhY2spIHtcbiAgdmFyIGltYWdlcyA9IGVsbS5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKTtcbiAgdmFyIGxlbmd0aCA9IGltYWdlcy5sZW5ndGg7XG5cbiAgaWYgKGxlbmd0aCkge1xuICAgIHZhciBjb3VudCA9IDA7XG4gICAgZWFjaChpbWFnZXMsIGZ1bmN0aW9uIChpbWcpIHtcbiAgICAgIGltZy5vbmxvYWQgPSBpbWcub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCsrY291bnQgPT09IGxlbmd0aCkge1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVHJpZ2dlciB0aGUgY2FsbGJhY2sgaW1tZWRpYXRlbHkgaWYgdGhlcmUgaXMgbm8gaW1hZ2UuXG4gICAgY2FsbGJhY2soKTtcbiAgfVxufVxuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbnN0YW50cy90eXBlcy5qc1xuLyoqXHJcbiAqIEV4cG9ydCBzbGlkZXIgdHlwZXMuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuLyoqXHJcbiAqIE5vcm1hbCBzbGlkZXIuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xudmFyIFNMSURFID0gJ3NsaWRlJztcbi8qKlxyXG4gKiBMb29wIGFmdGVyIHRoZSBsYXN0IHNsaWRlIGFuZCBiZWZvcmUgdGhlIGZpcnN0IG9uZS5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG5cbnZhciBMT09QID0gJ2xvb3AnO1xuLyoqXHJcbiAqIFRoZSB0cmFjayBkb2Vzbid0IG1vdmUuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xuXG52YXIgRkFERSA9ICdmYWRlJztcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy90cmFuc2l0aW9ucy9zbGlkZS9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGdlbmVyYWwgc2xpZGUgZWZmZWN0IHRyYW5zaXRpb24uXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgZ2VuZXJhbCBzbGlkZSBlZmZlY3QgdHJhbnNpdGlvbi5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudHMgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IHNsaWRlID0gKGZ1bmN0aW9uIChTcGxpZGUsIENvbXBvbmVudHMpIHtcbiAgLyoqXHJcbiAgICogSG9sZCB0aGUgbGlzdCBlbGVtZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge0VsZW1lbnR9XHJcbiAgICovXG4gIHZhciBsaXN0O1xuICAvKipcclxuICAgKiBIb2xkIHRoZSBvbkVuZCBjYWxsYmFjayBmdW5jdGlvbi5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtmdW5jdGlvbn1cclxuICAgKi9cblxuICB2YXIgZW5kQ2FsbGJhY2s7XG4gIHJldHVybiB7XG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICBsaXN0ID0gQ29tcG9uZW50cy5FbGVtZW50cy5saXN0O1xuICAgICAgU3BsaWRlLm9uKCd0cmFuc2l0aW9uZW5kJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBsaXN0ICYmIGVuZENhbGxiYWNrKSB7XG4gICAgICAgICAgZW5kQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfSwgbGlzdCk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogU3RhcnQgdHJhbnNpdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gICBkZXN0SW5kZXggLSBEZXN0aW5hdGlvbiBzbGlkZSBpbmRleCB0aGF0IG1pZ2h0IGJlIGNsb25lJ3MuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gICBuZXdJbmRleCAgLSBOZXcgaW5kZXguXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gICBwcmV2SW5kZXggLSBQcmV2aW91cyBpbmRleC5cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAgIGNvb3JkICAgICAtIERlc3RpbmF0aW9uIGNvb3JkaW5hdGVzLlxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZG9uZSAgICAgIC0gQ2FsbGJhY2sgZnVuY3Rpb24gbXVzdCBiZSBpbnZva2VkIHdoZW4gdHJhbnNpdGlvbiBpcyBjb21wbGV0ZWQuXHJcbiAgICAgKi9cbiAgICBzdGFydDogZnVuY3Rpb24gc3RhcnQoZGVzdEluZGV4LCBuZXdJbmRleCwgcHJldkluZGV4LCBjb29yZCwgZG9uZSkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcbiAgICAgIHZhciBlZGdlSW5kZXggPSBDb21wb25lbnRzLkNvbnRyb2xsZXIuZWRnZUluZGV4O1xuICAgICAgdmFyIHNwZWVkID0gb3B0aW9ucy5zcGVlZDtcbiAgICAgIGVuZENhbGxiYWNrID0gZG9uZTtcblxuICAgICAgaWYgKFNwbGlkZS5pcyhTTElERSkpIHtcbiAgICAgICAgaWYgKHByZXZJbmRleCA9PT0gMCAmJiBuZXdJbmRleCA+PSBlZGdlSW5kZXggfHwgcHJldkluZGV4ID49IGVkZ2VJbmRleCAmJiBuZXdJbmRleCA9PT0gMCkge1xuICAgICAgICAgIHNwZWVkID0gb3B0aW9ucy5yZXdpbmRTcGVlZCB8fCBzcGVlZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBhcHBseVN0eWxlKGxpc3QsIHtcbiAgICAgICAgdHJhbnNpdGlvbjogXCJ0cmFuc2Zvcm0gXCIgKyBzcGVlZCArIFwibXMgXCIgKyBvcHRpb25zLmVhc2luZyxcbiAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZShcIiArIGNvb3JkLnggKyBcInB4LFwiICsgY29vcmQueSArIFwicHgpXCJcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL3RyYW5zaXRpb25zL2ZhZGUvaW5kZXguanNcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBmYWRlIHRyYW5zaXRpb24uXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgZmFkZSB0cmFuc2l0aW9uLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlICAgICAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gQ29tcG9uZW50cyAtIEFuIG9iamVjdCBjb250YWluaW5nIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgY29tcG9uZW50IG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgZmFkZSA9IChmdW5jdGlvbiAoU3BsaWRlLCBDb21wb25lbnRzKSB7XG4gIHZhciBGYWRlID0ge1xuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICogQXBwbHkgdHJhbnNpdGlvbiBzdHlsZSB0byB0aGUgZmlyc3Qgc2xpZGUuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICBhcHBseShTcGxpZGUuaW5kZXgpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFN0YXJ0IHRyYW5zaXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9ICAgIGRlc3RJbmRleCAtIERlc3RpbmF0aW9uIHNsaWRlIGluZGV4IHRoYXQgbWlnaHQgYmUgY2xvbmUncy5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSAgICBuZXdJbmRleCAgLSBOZXcgaW5kZXguXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gICAgcHJldkluZGV4IC0gUHJldmlvdXMgaW5kZXguXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gICAgY29vcmQgICAgIC0gRGVzdGluYXRpb24gY29vcmRpbmF0ZXMuXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSAgZG9uZSAgICAgIC0gQ2FsbGJhY2sgZnVuY3Rpb24gbXVzdCBiZSBpbnZva2VkIHdoZW4gdHJhbnNpdGlvbiBpcyBjb21wbGV0ZWQuXHJcbiAgICAgKi9cbiAgICBzdGFydDogZnVuY3Rpb24gc3RhcnQoZGVzdEluZGV4LCBuZXdJbmRleCwgcHJldkluZGV4LCBjb29yZCwgZG9uZSkge1xuICAgICAgdmFyIHRyYWNrID0gQ29tcG9uZW50cy5FbGVtZW50cy50cmFjaztcbiAgICAgIGFwcGx5U3R5bGUodHJhY2ssIHtcbiAgICAgICAgaGVpZ2h0OiB1bml0KHRyYWNrLmNsaWVudEhlaWdodClcbiAgICAgIH0pO1xuICAgICAgYXBwbHkobmV3SW5kZXgpO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgICAgYXBwbHlTdHlsZSh0cmFjaywge1xuICAgICAgICAgIGhlaWdodDogJydcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIC8qKlxyXG4gICAqIEFwcGx5IHRyYW5zaXRpb24gc3R5bGUgdG8gdGhlIHNsaWRlIHNwZWNpZmllZCBieSB0aGUgZ2l2ZW4gaW5kZXguXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBBIHNsaWRlIGluZGV4LlxyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGFwcGx5KGluZGV4KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcbiAgICBhcHBseVN0eWxlKENvbXBvbmVudHMuRWxlbWVudHMuc2xpZGVzW2luZGV4XSwge1xuICAgICAgdHJhbnNpdGlvbjogXCJvcGFjaXR5IFwiICsgb3B0aW9ucy5zcGVlZCArIFwibXMgXCIgKyBvcHRpb25zLmVhc2luZ1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIEZhZGU7XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy90cmFuc2l0aW9ucy9pbmRleC5qc1xuLyoqXHJcbiAqIEV4cG9ydCB0cmFuc2l0aW9uIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29yZS9jb21wb3Nlci5qc1xuLyoqXHJcbiAqIFByb3ZpZGUgYSBmdW5jdGlvbiBmb3IgY29tcG9zaW5nIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG5cbi8qKlxyXG4gKiBDb21wb3NlIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSAgIFNwbGlkZSAgICAgLSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSAgIENvbXBvbmVudHMgLSBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFRyYW5zaXRpb24gLSBDaGFuZ2UgY29tcG9uZW50IGZvciB0cmFuc2l0aW9uLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIGNvbXBvbmVudHMuXHJcbiAqL1xuXG5mdW5jdGlvbiBjb21wb3NlKFNwbGlkZSwgQ29tcG9uZW50cywgVHJhbnNpdGlvbikge1xuICB2YXIgY29tcG9uZW50cyA9IHt9O1xuICBlYWNoKENvbXBvbmVudHMsIGZ1bmN0aW9uIChDb21wb25lbnQsIG5hbWUpIHtcbiAgICBjb21wb25lbnRzW25hbWVdID0gQ29tcG9uZW50KFNwbGlkZSwgY29tcG9uZW50cywgbmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgfSk7XG5cbiAgaWYgKCFUcmFuc2l0aW9uKSB7XG4gICAgVHJhbnNpdGlvbiA9IFNwbGlkZS5pcyhGQURFKSA/IGZhZGUgOiBzbGlkZTtcbiAgfVxuXG4gIGNvbXBvbmVudHMuVHJhbnNpdGlvbiA9IFRyYW5zaXRpb24oU3BsaWRlLCBjb21wb25lbnRzKTtcbiAgcmV0dXJuIGNvbXBvbmVudHM7XG59XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvdXRpbHMvZXJyb3IuanNcbi8qKlxyXG4gKiBVdGlsaXR5IGZ1bmN0aW9ucyBmb3Igb3V0cHV0dGluZyBsb2dzLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cbi8qKlxyXG4gKiBQcmVmaXggb2YgYW4gZXJyb3IgbWFzc2FnZS5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG52YXIgTUVTU0FHRV9QUkVGSVggPSAnW1NQTElERV0nO1xuLyoqXHJcbiAqIERpc3BsYXkgYW4gZXJyb3IgbWVzc2FnZSBvbiB0aGUgYnJvd3NlciBjb25zb2xlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSAtIEFuIGVycm9yIG1lc3NhZ2UuXHJcbiAqL1xuXG5mdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7XG4gIGNvbnNvbGUuZXJyb3IoTUVTU0FHRV9QUkVGSVggKyBcIiBcIiArIG1lc3NhZ2UpO1xufVxuLyoqXHJcbiAqIENoZWNrIGV4aXN0ZW5jZSBvZiB0aGUgZ2l2ZW4gb2JqZWN0IGFuZCB0aHJvdyBhbiBlcnJvciBpZiBpdCBkb2Vzbid0LlxyXG4gKlxyXG4gKiBAdGhyb3dzIHtFcnJvcn1cclxuICpcclxuICogQHBhcmFtIHsqfSAgICAgIHN1YmplY3QgLSBBIHN1YmplY3QgdG8gYmUgY29uZmlybWVkLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSAtIEFuIGVycm9yIG1lc3NhZ2UuXHJcbiAqL1xuXG5mdW5jdGlvbiBleGlzdChzdWJqZWN0LCBtZXNzYWdlKSB7XG4gIGlmICghc3ViamVjdCkge1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfVxufVxuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbnN0YW50cy9jbGFzc2VzLmpzXG4vKipcclxuICogRXhwb3J0IGNsYXNzIG5hbWVzLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cbi8qKlxyXG4gKiBBIHJvb3QgY2xhc3MgbmFtZS5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG52YXIgUk9PVCA9ICdzcGxpZGUnO1xuLyoqXHJcbiAqIFRoZSBkZWZpbml0aW9uIHRhYmxlIG9mIGFsbCBjbGFzc2VzIGZvciBlbGVtZW50cy5cclxuICogVGhleSBtaWdodCBiZSBtb2RpZmllZCBieSBvcHRpb25zLlxyXG4gKlxyXG4gKiBAdHlwZSB7T2JqZWN0fVxyXG4gKi9cblxudmFyIEVMRU1FTlRfQ0xBU1NFUyA9IHtcbiAgcm9vdDogUk9PVCxcbiAgc2xpZGVyOiBST09UICsgXCJfX3NsaWRlclwiLFxuICB0cmFjazogUk9PVCArIFwiX190cmFja1wiLFxuICBsaXN0OiBST09UICsgXCJfX2xpc3RcIixcbiAgc2xpZGU6IFJPT1QgKyBcIl9fc2xpZGVcIixcbiAgY29udGFpbmVyOiBST09UICsgXCJfX3NsaWRlX19jb250YWluZXJcIixcbiAgYXJyb3dzOiBST09UICsgXCJfX2Fycm93c1wiLFxuICBhcnJvdzogUk9PVCArIFwiX19hcnJvd1wiLFxuICBwcmV2OiBST09UICsgXCJfX2Fycm93LS1wcmV2XCIsXG4gIG5leHQ6IFJPT1QgKyBcIl9fYXJyb3ctLW5leHRcIixcbiAgcGFnaW5hdGlvbjogUk9PVCArIFwiX19wYWdpbmF0aW9uXCIsXG4gIHBhZ2U6IFJPT1QgKyBcIl9fcGFnaW5hdGlvbl9fcGFnZVwiLFxuICBjbG9uZTogUk9PVCArIFwiX19zbGlkZS0tY2xvbmVcIixcbiAgcHJvZ3Jlc3M6IFJPT1QgKyBcIl9fcHJvZ3Jlc3NcIixcbiAgYmFyOiBST09UICsgXCJfX3Byb2dyZXNzX19iYXJcIixcbiAgYXV0b3BsYXk6IFJPT1QgKyBcIl9fYXV0b3BsYXlcIixcbiAgcGxheTogUk9PVCArIFwiX19wbGF5XCIsXG4gIHBhdXNlOiBST09UICsgXCJfX3BhdXNlXCIsXG4gIHNwaW5uZXI6IFJPT1QgKyBcIl9fc3Bpbm5lclwiLFxuICBzcjogUk9PVCArIFwiX19zclwiXG59O1xuLyoqXHJcbiAqIERlZmluaXRpb25zIG9mIHN0YXR1cyBjbGFzc2VzLlxyXG4gKlxyXG4gKiBAdHlwZSB7T2JqZWN0fVxyXG4gKi9cblxudmFyIFNUQVRVU19DTEFTU0VTID0ge1xuICBhY3RpdmU6ICdpcy1hY3RpdmUnLFxuICB2aXNpYmxlOiAnaXMtdmlzaWJsZScsXG4gIGxvYWRpbmc6ICdpcy1sb2FkaW5nJ1xufTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb25zdGFudHMvaTE4bi5qc1xuLyoqXHJcbiAqIEV4cG9ydCBpMThuIHRleHRzIGFzIG9iamVjdC5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG4vKipcclxuICogVGV4dHMgZm9yIGkxOG4uXHJcbiAqXHJcbiAqIEB0eXBlIHtPYmplY3R9XHJcbiAqL1xudmFyIEkxOE4gPSB7XG4gIHByZXY6ICdQcmV2aW91cyBzbGlkZScsXG4gIG5leHQ6ICdOZXh0IHNsaWRlJyxcbiAgZmlyc3Q6ICdHbyB0byBmaXJzdCBzbGlkZScsXG4gIGxhc3Q6ICdHbyB0byBsYXN0IHNsaWRlJyxcbiAgc2xpZGVYOiAnR28gdG8gc2xpZGUgJXMnLFxuICBwYWdlWDogJ0dvIHRvIHBhZ2UgJXMnLFxuICBwbGF5OiAnU3RhcnQgYXV0b3BsYXknLFxuICBwYXVzZTogJ1BhdXNlIGF1dG9wbGF5J1xufTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb25zdGFudHMvZGVmYXVsdHMuanNcbi8qKlxyXG4gKiBFeHBvcnQgZGVmYXVsdCBvcHRpb25zLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxudmFyIERFRkFVTFRTID0ge1xuICAvKipcclxuICAgKiBEZXRlcm1pbmUgYSBzbGlkZXIgdHlwZS5cclxuICAgKiAtICdzbGlkZSc6IFJlZ3VsYXIgc2xpZGVyLlxyXG4gICAqIC0gJ2xvb3AnIDogQ2Fyb3VzZWwgc2xpZGVyLlxyXG4gICAqIC0gJ2ZhZGUnIDogQ2hhbmdlIHNsaWRlcyB3aXRoIGZhZGUgdHJhbnNpdGlvbi4gcGVyUGFnZSwgZHJhZyBvcHRpb25zIGFyZSBpZ25vcmVkLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cbiAgdHlwZTogJ3NsaWRlJyxcblxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIHJld2luZCBhIHNsaWRlciBiZWZvcmUgdGhlIGZpcnN0IHNsaWRlIG9yIGFmdGVyIHRoZSBsYXN0IG9uZS5cclxuICAgKiBJbiBcImxvb3BcIiBtb2RlLCB0aGlzIG9wdGlvbiBpcyBpZ25vcmVkLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIHJld2luZDogZmFsc2UsXG5cbiAgLyoqXHJcbiAgICogVHJhbnNpdGlvbiBzcGVlZCBpbiBtaWxsaXNlY29uZHMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuICBzcGVlZDogNDAwLFxuXG4gIC8qKlxyXG4gICAqIFRyYW5zaXRpb24gc3BlZWQgb24gcmV3aW5kIGluIG1pbGxpc2Vjb25kcy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXG4gIHJld2luZFNwZWVkOiAwLFxuXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gcHJldmVudCBhbnkgYWN0aW9ucyB3aGlsZSBhIHNsaWRlciBpcyB0cmFuc2l0aW9uaW5nLlxyXG4gICAqIElmIGZhbHNlLCBuYXZpZ2F0aW9uLCBkcmFnIGFuZCBzd2lwZSB3b3JrIHdoaWxlIHRoZSBzbGlkZXIgaXMgcnVubmluZy5cclxuICAgKiBFdmVuIHNvLCBpdCB3aWxsIGJlIGZvcmNlZCB0byB3YWl0IGZvciB0cmFuc2l0aW9uIGluIHNvbWUgY2FzZXMgaW4gdGhlIGxvb3AgbW9kZSB0byBzaGlmdCBhIHNsaWRlci5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICB3YWl0Rm9yVHJhbnNpdGlvbjogdHJ1ZSxcblxuICAvKipcclxuICAgKiBEZWZpbmUgc2xpZGVyIG1heCB3aWR0aC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXG4gIHdpZHRoOiAwLFxuXG4gIC8qKlxyXG4gICAqIERlZmluZSBzbGlkZXIgaGVpZ2h0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cbiAgaGVpZ2h0OiAwLFxuXG4gIC8qKlxyXG4gICAqIEZpeCB3aWR0aCBvZiBzbGlkZXMuIENTUyBmb3JtYXQgaXMgYWxsb3dlZCBzdWNoIGFzIDEwZW0sIDgwJSBvciA4MHZ3LlxyXG4gICAqIHBlclBhZ2UgbnVtYmVyIHdpbGwgYmUgaWdub3JlZCB3aGVuIHRoaXMgb3B0aW9uIGlzIGZhbHN5LlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcnxzdHJpbmd9XHJcbiAgICovXG4gIGZpeGVkV2lkdGg6IDAsXG5cbiAgLyoqXHJcbiAgICogRml4IGhlaWdodCBvZiBzbGlkZXMuIENTUyBmb3JtYXQgaXMgYWxsb3dlZCBzdWNoIGFzIDEwZW0sIDgwdmggYnV0ICUgdW5pdCBpcyBub3QgYWNjZXB0ZWQuXHJcbiAgICogaGVpZ2h0UmF0aW8gb3B0aW9uIHdpbGwgYmUgaWdub3JlZCB3aGVuIHRoaXMgb3B0aW9uIGlzIGZhbHN5LlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcnxzdHJpbmd9XHJcbiAgICovXG4gIGZpeGVkSGVpZ2h0OiAwLFxuXG4gIC8qKlxyXG4gICAqIERldGVybWluZSBoZWlnaHQgb2Ygc2xpZGVzIGJ5IHJhdGlvIHRvIGEgc2xpZGVyIHdpZHRoLlxyXG4gICAqIFRoaXMgd2lsbCBiZSBpZ25vcmVkIHdoZW4gdGhlIGZpeGVkSGVpZ2h0IGlzIHByb3ZpZGVkLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cbiAgaGVpZ2h0UmF0aW86IDAsXG5cbiAgLyoqXHJcbiAgICogSWYgdHJ1ZSwgc2xpZGUgd2lkdGggd2lsbCBiZSBkZXRlcm1pbmVkIGJ5IHRoZSBlbGVtZW50IHdpZHRoIGl0c2VsZi5cclxuICAgKiAtIHBlclBhZ2UvcGVyTW92ZSBzaG91bGQgYmUgMS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICBhdXRvV2lkdGg6IGZhbHNlLFxuXG4gIC8qKlxyXG4gICAqIElmIHRydWUsIHNsaWRlIGhlaWdodCB3aWxsIGJlIGRldGVybWluZWQgYnkgdGhlIGVsZW1lbnQgd2lkdGggaXRzZWxmLlxyXG4gICAqIC0gcGVyUGFnZS9wZXJNb3ZlIHNob3VsZCBiZSAxLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIGF1dG9IZWlnaHQ6IGZhbHNlLFxuXG4gIC8qKlxyXG4gICAqIERldGVybWluZSBob3cgbWFueSBzbGlkZXMgc2hvdWxkIGJlIGRpc3BsYXllZCBwZXIgcGFnZS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXG4gIHBlclBhZ2U6IDEsXG5cbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lIGhvdyBtYW55IHNsaWRlcyBzaG91bGQgYmUgbW92ZWQgd2hlbiBhIHNsaWRlciBnb2VzIHRvIG5leHQgb3IgcGVydi5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXG4gIHBlck1vdmU6IDAsXG5cbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lIG1hbnVhbGx5IGhvdyBtYW55IGNsb25lcyBzaG91bGQgYmUgZ2VuZXJhdGVkIG9uIHRoZSBsZWZ0IGFuZCByaWdodCBzaWRlLlxyXG4gICAqIFRoZSB0b3RhbCBudW1iZXIgb2YgY2xvbmVzIHdpbGwgYmUgdHdpY2Ugb2YgdGhpcyBudW1iZXIuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuICBjbG9uZXM6IDAsXG5cbiAgLyoqXHJcbiAgICogU3RhcnQgaW5kZXguXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuICBzdGFydDogMCxcblxuICAvKipcclxuICAgKiBEZXRlcm1pbmUgd2hpY2ggc2xpZGUgc2hvdWxkIGJlIGZvY3VzZWQgaWYgdGhlcmUgYXJlIG11bHRpcGxlIHNsaWRlcyBpbiBhIHBhZ2UuXHJcbiAgICogQSBzdHJpbmcgXCJjZW50ZXJcIiBpcyBhY2NlcHRhYmxlIGZvciBjZW50ZXJpbmcgc2xpZGVzLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW58bnVtYmVyfHN0cmluZ31cclxuICAgKi9cbiAgZm9jdXM6IGZhbHNlLFxuXG4gIC8qKlxyXG4gICAqIEdhcCBiZXR3ZWVuIHNsaWRlcy4gQ1NTIGZvcm1hdCBpcyBhbGxvd2VkIHN1Y2ggYXMgMWVtLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcnxzdHJpbmd9XHJcbiAgICovXG4gIGdhcDogMCxcblxuICAvKipcclxuICAgKiBTZXQgcGFkZGluZy1sZWZ0L3JpZ2h0IGluIGhvcml6b250YWwgbW9kZSBvciBwYWRkaW5nLXRvcC9ib3R0b20gaW4gdmVydGljYWwgb25lLlxyXG4gICAqIEdpdmUgYSBzaW5nbGUgdmFsdWUgdG8gc2V0IGEgc2FtZSBzaXplIGZvciBib3RoIHNpZGVzIG9yXHJcbiAgICogZG8gYW4gb2JqZWN0IGZvciBkaWZmZXJlbnQgc2l6ZXMuXHJcbiAgICogQWxzbywgQ1NTIGZvcm1hdCBpcyBhbGxvd2VkIHN1Y2ggYXMgMWVtLlxyXG4gICAqXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiAtIDEwOiBOdW1iZXJcclxuICAgKiAtICcxZW0nOiBDU1MgZm9ybWF0LlxyXG4gICAqIC0geyBsZWZ0OiAwLCByaWdodDogMjAgfTogT2JqZWN0IGZvciBkaWZmZXJlbnQgc2l6ZXMgaW4gaG9yaXpvbnRhbCBtb2RlLlxyXG4gICAqIC0geyB0b3A6IDAsIGJvdHRvbTogMjAgfTogT2JqZWN0IGZvciBkaWZmZXJlbnQgc2l6ZXMgaW4gdmVydGljYWwgbW9kZS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ8c3RyaW5nfE9iamVjdH1cclxuICAgKi9cbiAgcGFkZGluZzogMCxcblxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIGFwcGVuZCBhcnJvd3MuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cbiAgYXJyb3dzOiB0cnVlLFxuXG4gIC8qKlxyXG4gICAqIENoYW5nZSB0aGUgYXJyb3cgU1ZHIHBhdGggbGlrZSAnbTcuNjEgMC44MDctMi4xMi4uLicuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqL1xuICBhcnJvd1BhdGg6ICcnLFxuXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gYXBwZW5kIHBhZ2luYXRpb24oaW5kaWNhdG9yIGRvdHMpIG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICBwYWdpbmF0aW9uOiB0cnVlLFxuXG4gIC8qKlxyXG4gICAqIEFjdGl2YXRlIGF1dG9wbGF5LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIGF1dG9wbGF5OiBmYWxzZSxcblxuICAvKipcclxuICAgKiBBdXRvcGxheSBpbnRlcnZhbCBpbiBtaWxsaXNlY29uZHMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuICBpbnRlcnZhbDogNTAwMCxcblxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIHN0b3AgYXV0b3BsYXkgd2hlbiBhIHNsaWRlciBpcyBob3ZlcmVkLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcblxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIHN0b3AgYXV0b3BsYXkgd2hlbiBhIHNsaWRlciBlbGVtZW50cyBhcmUgZm9jdXNlZC5cclxuICAgKiBUcnVlIGlzIHJlY29tbWVuZGVkIGZvciBhY2Nlc3NpYmlsaXR5LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIHBhdXNlT25Gb2N1czogdHJ1ZSxcblxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIHJlc2V0IHByb2dyZXNzIG9mIHRoZSBhdXRvcGxheSB0aW1lciB3aGVuIHJlc3VtZWQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cbiAgcmVzZXRQcm9ncmVzczogdHJ1ZSxcblxuICAvKipcclxuICAgKiBMb2FkaW5nIGltYWdlcyBsYXppbHkuXHJcbiAgICogSW1hZ2Ugc3JjIG11c3QgYmUgcHJvdmlkZWQgYnkgYSBkYXRhLXNwbGlkZS1sYXp5IGF0dHJpYnV0ZS5cclxuICAgKlxyXG4gICAqIC0gZmFsc2U6IERvIG5vdGhpbmcuXHJcbiAgICogLSAnbmVhcmJ5JzogT25seSBpbWFnZXMgYXJvdW5kIGFuIGFjdGl2ZSBzbGlkZSB3aWxsIGJlIGxvYWRlZC5cclxuICAgKiAtICdzZXF1ZW50aWFsJzogQWxsIGltYWdlcyB3aWxsIGJlIHNlcXVlbnRpYWxseSBsb2FkZWQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbnxzdHJpbmd9XHJcbiAgICovXG4gIGxhenlMb2FkOiBmYWxzZSxcblxuICAvKipcclxuICAgKiBUaGlzIG9wdGlvbiB3b3JrcyBvbmx5IHdoZW4gYSBsYXp5TG9hZCBvcHRpb24gaXMgXCJuZWFyYnlcIi5cclxuICAgKiBEZXRlcm1pbmUgaG93IG1hbnkgcGFnZXMobm90IHNsaWRlcykgYXJvdW5kIGFuIGFjdGl2ZSBzbGlkZSBzaG91bGQgYmUgbG9hZGVkIGJlZm9yZWhhbmQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuICBwcmVsb2FkUGFnZXM6IDEsXG5cbiAgLyoqXHJcbiAgICogRWFzaW5nIGZvciBDU1MgdHJhbnNpdGlvbi4gRm9yIGV4YW1wbGUsIGxpbmVhciwgZWFzZSBvciBjdWJpYy1iZXppZXIoKS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICovXG4gIGVhc2luZzogJ2N1YmljLWJlemllciguNDIsLjY1LC4yNywuOTkpJyxcblxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIGVuYWJsZSBrZXlib2FyZCBzaG9ydGN1dHNcclxuICAgKiAtIHRydWUgb3IgJ2dsb2JhbCc6IExpc3RlbiB0byBrZXlkb3duIGV2ZW50IG9mIHRoZSBkb2N1bWVudC5cclxuICAgKiAtICdmb2N1c2VkJzogTGlzdGVuIHRvIHRoZSBrZXlkb3duIGV2ZW50IG9mIHRoZSBzbGlkZXIgcm9vdCBlbGVtZW50LiB0YWJpbmRleD1cIjBcIiB3aWxsIGJlIGFkZGVkIHRvIHRoZSBlbGVtZW50LlxyXG4gICAqIC0gZmFsc2U6IERpc2FibGUga2V5Ym9hcmQgc2hvcnRjdXRzLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW58c3RyaW5nfVxyXG4gICAqL1xuICBrZXlib2FyZDogJ2dsb2JhbCcsXG5cbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBhbGxvdyBtb3VzZSBkcmFnIGFuZCB0b3VjaCBzd2lwZS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICBkcmFnOiB0cnVlLFxuXG4gIC8qKlxyXG4gICAqIFRoZSBhbmdsZSB0aHJlc2hvbGQgZm9yIGRyYWcuXHJcbiAgICogVGhlIHNsaWRlciBzdGFydHMgbW92aW5nIG9ubHkgd2hlbiB0aGUgZHJhZyBhbmdsZSBpcyBsZXNzIHRoYW4gdGhpcyB0aHJlc2hvbGQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuICBkcmFnQW5nbGVUaHJlc2hvbGQ6IDMwLFxuXG4gIC8qKlxyXG4gICAqIERpc3RhbmNlIHRocmVzaG9sZCBmb3IgZGV0ZXJtaW5pbmcgaWYgdGhlIGFjdGlvbiBpcyBcImZsaWNrXCIgb3IgXCJzd2lwZVwiLlxyXG4gICAqIFdoZW4gYSBkcmFnIGRpc3RhbmNlIGlzIG92ZXIgdGhpcyB2YWx1ZSwgdGhlIGFjdGlvbiB3aWxsIGJlIHRyZWF0ZWQgYXMgXCJzd2lwZVwiLCBub3QgXCJmbGlja1wiLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cbiAgc3dpcGVEaXN0YW5jZVRocmVzaG9sZDogMTUwLFxuXG4gIC8qKlxyXG4gICAqIFZlbG9jaXR5IHRocmVzaG9sZCBmb3IgZGV0ZXJtaW5pbmcgaWYgdGhlIGFjdGlvbiBpcyBcImZsaWNrXCIgb3IgXCJzd2lwZVwiLlxyXG4gICAqIEFyb3VuZCAwLjUgaXMgcmVjb21tZW5kZWQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuICBmbGlja1ZlbG9jaXR5VGhyZXNob2xkOiAuNixcblxuICAvKipcclxuICAgKiBEZXRlcm1pbmUgcG93ZXIgb2YgZmxpY2suIFRoZSBsYXJnZXIgbnVtYmVyIHRoaXMgaXMsIHRoZSBmYXJ0aGVyIGEgc2xpZGVyIHJ1bnMgYnkgZmxpY2suXHJcbiAgICogQXJvdW5kIDUwMCBpcyByZWNvbW1lbmRlZC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXG4gIGZsaWNrUG93ZXI6IDYwMCxcblxuICAvKipcclxuICAgKiBMaW1pdCBhIG51bWJlciBvZiBwYWdlcyB0byBtb3ZlIGJ5IGZsaWNrLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cbiAgZmxpY2tNYXhQYWdlczogMSxcblxuICAvKipcclxuICAgKiBTbGlkZXIgZGlyZWN0aW9uLlxyXG4gICAqIC0gJ2x0cic6IExlZnQgdG8gcmlnaHQuXHJcbiAgICogLSAncnRsJzogUmlnaHQgdG8gbGVmdC5cclxuICAgKiAtICd0dGInOiBUb3AgdG8gYm90dG9tLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cbiAgZGlyZWN0aW9uOiAnbHRyJyxcblxuICAvKipcclxuICAgKiBTZXQgaW1nIHNyYyB0byBiYWNrZ3JvdW5kLWltYWdlIG9mIGl0cyBwYXJlbnQgZWxlbWVudC5cclxuICAgKiBJbWFnZXMgd2l0aCB2YXJpb3VzIHNpemVzIGNhbiBiZSBkaXNwbGF5ZWQgYXMgc2FtZSBkaW1lbnNpb24gd2l0aG91dCBjcm9wcGluZyB3b3JrLlxyXG4gICAqIGZpeGVkSGVpZ2h0IG9yIGhlaWdodFJhdGlvIGlzIHJlcXVpcmVkLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIGNvdmVyOiBmYWxzZSxcblxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIGVuYWJsZSBhY2Nlc3NpYmlsaXR5KGFyaWEgYW5kIHNjcmVlbiByZWFkZXIgdGV4dHMpIG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICBhY2Nlc3NpYmlsaXR5OiB0cnVlLFxuXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gYWRkIHRhYmluZGV4PVwiMFwiIHRvIHZpc2libGUgc2xpZGVzIG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICBzbGlkZUZvY3VzOiB0cnVlLFxuXG4gIC8qKlxyXG4gICAqIERldGVybWluZSBpZiBhIHNsaWRlciBpcyBuYXZpZ2F0aW9uIGZvciBhbm90aGVyLlxyXG4gICAqIFVzZSBcInN5bmNcIiBBUEkgdG8gc3luY2hyb25pemUgdHdvIHNsaWRlcnMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cbiAgaXNOYXZpZ2F0aW9uOiBmYWxzZSxcblxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIHRyaW0gc3BhY2VzIGJlZm9yZSB0aGUgZmlzdCBzbGlkZSBvciBhZnRlciB0aGUgbGFzdCBvbmUgd2hlbiBcImZvY3VzXCIgaXMgbm90IDAuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cbiAgdHJpbVNwYWNlOiB0cnVlLFxuXG4gIC8qKlxyXG4gICAqIFRoZSBcImlzLWFjdGl2ZVwiIGNsYXNzIGlzIGFkZGVkIGFmdGVyIHRyYW5zaXRpb24gYXMgZGVmYXVsdC5cclxuICAgKiBJZiB0cnVlLCBpdCB3aWxsIGJlIGFkZGVkIGJlZm9yZSBtb3ZlLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIHVwZGF0ZU9uTW92ZTogZmFsc2UsXG5cbiAgLyoqXHJcbiAgICogVGhyb3R0bGUgZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzIGZvciB0aGUgcmVzaXplIGV2ZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cbiAgdGhyb3R0bGU6IDEwMCxcblxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIGRlc3Ryb3kgYSBzbGlkZXIgb3Igbm90LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIGRlc3Ryb3k6IGZhbHNlLFxuXG4gIC8qKlxyXG4gICAqIE9wdGlvbnMgZm9yIHNwZWNpZmljIGJyZWFrcG9pbnRzLlxyXG4gICAqXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiB7XHJcbiAgICogICAxMDAwOiB7XHJcbiAgICogICAgIHBlclBhZ2U6IDMsXHJcbiAgICogICAgIGdhcDogMjBcclxuICAgKiAgIH0sXHJcbiAgICogICA2MDA6IHtcclxuICAgKiAgICAgcGVyUGFnZTogMSxcclxuICAgKiAgICAgZ2FwOiA1LFxyXG4gICAqICAgfVxyXG4gICAqIH1cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufE9iamVjdH1cclxuICAgKi9cbiAgYnJlYWtwb2ludHM6IGZhbHNlLFxuXG4gIC8qKlxyXG4gICAqIENvbGxlY3Rpb24gb2YgY2xhc3MgbmFtZXMuXHJcbiAgICpcclxuICAgKiBAc2VlIC4vY2xhc3Nlcy5qc1xyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cbiAgY2xhc3NlczogRUxFTUVOVF9DTEFTU0VTLFxuXG4gIC8qKlxyXG4gICAqIENvbGxlY3Rpb24gb2YgaTE4biB0ZXh0cy5cclxuICAgKlxyXG4gICAqIEBzZWUgLi9pMThuLmpzXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuICBpMThuOiBJMThOXG59O1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbnN0YW50cy9zdGF0ZXMuanNcbi8qKlxyXG4gKiBFeHBvcnQgc3RhdGUgY29uc3RhbnRzLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cbi8qKlxyXG4gKiBTcGxpZGUgaGFzIGJlZW4ganVzdCBjcmVhdGVkLlxyXG4gKlxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKi9cbnZhciBDUkVBVEVEID0gMTtcbi8qKlxyXG4gKiBBbGwgY29tcG9uZW50cyBoYXZlIGJlZW4gbW91bnRlZCBhbmQgaW5pdGlhbGl6ZWQuXHJcbiAqXHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqL1xuXG52YXIgTU9VTlRFRCA9IDI7XG4vKipcclxuICogU3BsaWRlIGlzIHJlYWR5IGZvciB0cmFuc2l0aW9uLlxyXG4gKlxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKi9cblxudmFyIElETEUgPSAzO1xuLyoqXHJcbiAqIFNwbGlkZSBpcyBtb3ZpbmcuXHJcbiAqXHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqL1xuXG52YXIgTU9WSU5HID0gNDtcbi8qKlxyXG4gKiBTcGxpZGUgaXMgbW92aW5nLlxyXG4gKlxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKi9cblxudmFyIERFU1RST1lFRCA9IDU7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvc3BsaWRlLmpzXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbi8qKlxyXG4gKiBUaGUgbWFpbiBjbGFzcyBmb3IgYXBwbHlpbmcgU3BsaWRlIHRvIGFuIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG5cblxuXG5cblxuXG4vKipcclxuICogVGhlIG1haW4gY2xhc3MgZm9yIGFwcGx5aW5nIFNwbGlkZSB0byBhbiBlbGVtZW50LFxyXG4gKiBwcm92aWRpbmcgc29tZSBBUElzIHRvIGNvbnRyb2wgdGhlIGJlaGF2aW9yLlxyXG4gKi9cblxudmFyIFNwbGlkZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKlxyXG4gICAqIFNwbGlkZSBjb25zdHJ1Y3Rvci5cclxuICAgKlxyXG4gICAqIEB0aHJvd3Mge0Vycm9yfSBXaGVuIHRoZSBnaXZlbiByb290IGVsZW1lbnQgb3Igc2VsZWN0b3IgaXMgaW52YWxpZC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RWxlbWVudHxzdHJpbmd9ICByb290ICAgICAgIC0gQSBzZWxlY3RvciBmb3IgYSByb290IGVsZW1lbnQgb3IgYW4gZWxlbWVudCBpdHNlbGYuXHJcbiAgICogQHBhcmFtIHtPYmplY3R9ICAgICAgICAgIG9wdGlvbnMgICAgLSBPcHRpb25hbC4gT3B0aW9ucyB0byBjaGFuZ2UgZGVmYXVsdCBiZWhhdmlvdXIuXHJcbiAgICogQHBhcmFtIHtPYmplY3R9ICAgICAgICAgIENvbXBvbmVudHMgLSBPcHRpb25hbC4gQ29tcG9uZW50cy5cclxuICAgKi9cbiAgZnVuY3Rpb24gU3BsaWRlKHJvb3QsIG9wdGlvbnMsIENvbXBvbmVudHMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgaWYgKENvbXBvbmVudHMgPT09IHZvaWQgMCkge1xuICAgICAgQ29tcG9uZW50cyA9IHt9O1xuICAgIH1cblxuICAgIHRoaXMucm9vdCA9IHJvb3QgaW5zdGFuY2VvZiBFbGVtZW50ID8gcm9vdCA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iocm9vdCk7XG4gICAgZXhpc3QodGhpcy5yb290LCAnQW4gaW52YWxpZCBlbGVtZW50L3NlbGVjdG9yIHdhcyBnaXZlbi4nKTtcbiAgICB0aGlzLkNvbXBvbmVudHMgPSBudWxsO1xuICAgIHRoaXMuRXZlbnQgPSBjb3JlX2V2ZW50KCk7XG4gICAgdGhpcy5TdGF0ZSA9IHN0YXRlKENSRUFURUQpO1xuICAgIHRoaXMuU1RBVEVTID0gc3RhdGVzX25hbWVzcGFjZU9iamVjdDtcbiAgICB0aGlzLl9vID0gbWVyZ2UoREVGQVVMVFMsIG9wdGlvbnMpO1xuICAgIHRoaXMuX2kgPSAwO1xuICAgIHRoaXMuX2MgPSBDb21wb25lbnRzO1xuICAgIHRoaXMuX2UgPSB7fTsgLy8gRXh0ZW5zaW9uc1xuXG4gICAgdGhpcy5fdCA9IG51bGw7IC8vIFRyYW5zaXRpb25cbiAgfVxuICAvKipcclxuICAgKiBDb21wb3NlIGFuZCBtb3VudCBjb21wb25lbnRzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9ICAgRXh0ZW5zaW9ucyAtIE9wdGlvbmFsLiBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gVHJhbnNpdGlvbiAtIE9wdGlvbmFsLiBTZXQgYSBjdXN0b20gdHJhbnNpdGlvbiBjb21wb25lbnQuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtTcGxpZGV8dW5kZWZpbmVkfSAtIFRoaXMgaW5zdGFuY2Ugb3IgdW5kZWZpbmVkIGlmIGFuIGV4Y2VwdGlvbiBvY2N1cnJlZC5cclxuICAgKi9cblxuXG4gIHZhciBfcHJvdG8gPSBTcGxpZGUucHJvdG90eXBlO1xuXG4gIF9wcm90by5tb3VudCA9IGZ1bmN0aW9uIG1vdW50KEV4dGVuc2lvbnMsIFRyYW5zaXRpb24pIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKEV4dGVuc2lvbnMgPT09IHZvaWQgMCkge1xuICAgICAgRXh0ZW5zaW9ucyA9IHRoaXMuX2U7XG4gICAgfVxuXG4gICAgaWYgKFRyYW5zaXRpb24gPT09IHZvaWQgMCkge1xuICAgICAgVHJhbnNpdGlvbiA9IHRoaXMuX3Q7XG4gICAgfVxuXG4gICAgLy8gUmVzZXQgdGhlIHN0YXRlLlxuICAgIHRoaXMuU3RhdGUuc2V0KENSRUFURUQpO1xuICAgIHRoaXMuX2UgPSBFeHRlbnNpb25zO1xuICAgIHRoaXMuX3QgPSBUcmFuc2l0aW9uO1xuICAgIHRoaXMuQ29tcG9uZW50cyA9IGNvbXBvc2UodGhpcywgbWVyZ2UodGhpcy5fYywgRXh0ZW5zaW9ucyksIFRyYW5zaXRpb24pO1xuXG4gICAgdHJ5IHtcbiAgICAgIGVhY2godGhpcy5Db21wb25lbnRzLCBmdW5jdGlvbiAoY29tcG9uZW50LCBrZXkpIHtcbiAgICAgICAgdmFyIHJlcXVpcmVkID0gY29tcG9uZW50LnJlcXVpcmVkO1xuXG4gICAgICAgIGlmIChyZXF1aXJlZCA9PT0gdW5kZWZpbmVkIHx8IHJlcXVpcmVkKSB7XG4gICAgICAgICAgY29tcG9uZW50Lm1vdW50ICYmIGNvbXBvbmVudC5tb3VudCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBfdGhpcy5Db21wb25lbnRzW2tleV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGVycm9yKGUubWVzc2FnZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIFN0YXRlID0gdGhpcy5TdGF0ZTtcbiAgICBTdGF0ZS5zZXQoTU9VTlRFRCk7XG4gICAgZWFjaCh0aGlzLkNvbXBvbmVudHMsIGZ1bmN0aW9uIChjb21wb25lbnQpIHtcbiAgICAgIGNvbXBvbmVudC5tb3VudGVkICYmIGNvbXBvbmVudC5tb3VudGVkKCk7XG4gICAgfSk7XG4gICAgdGhpcy5lbWl0KCdtb3VudGVkJyk7XG4gICAgU3RhdGUuc2V0KElETEUpO1xuICAgIHRoaXMuZW1pdCgncmVhZHknKTtcbiAgICBhcHBseVN0eWxlKHRoaXMucm9vdCwge1xuICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnXG4gICAgfSk7XG4gICAgdGhpcy5vbignbW92ZSBkcmFnJywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIFN0YXRlLnNldChNT1ZJTkcpO1xuICAgIH0pLm9uKCdtb3ZlZCBkcmFnZ2VkJywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIFN0YXRlLnNldChJRExFKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcclxuICAgKiBTZXQgc3luYyB0YXJnZXQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1NwbGlkZX0gc3BsaWRlIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtTcGxpZGV9IC0gVGhpcyBpbnN0YW5jZS5cclxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5zeW5jID0gZnVuY3Rpb24gc3luYyhzcGxpZGUpIHtcbiAgICB0aGlzLnNpYmxpbmcgPSBzcGxpZGU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXHJcbiAgICogUmVnaXN0ZXIgY2FsbGJhY2sgZmlyZWQgb24gdGhlIGdpdmVuIGV2ZW50KHMpLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9ICAgZXZlbnRzICAtIEFuIGV2ZW50IG5hbWUuIFVzZSBzcGFjZSB0byBzZXBhcmF0ZSBtdWx0aXBsZSBldmVudHMuXHJcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFsc28sIG5hbWVzcGFjZSBpcyBhY2NlcHRlZCBieSBkb3QsIHN1Y2ggYXMgJ3Jlc2l6ZS57bmFtZXNwYWNlfScuXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlciAtIEEgY2FsbGJhY2sgZnVuY3Rpb24uXHJcbiAgICogQHBhcmFtIHtFbGVtZW50fSAgZWxtICAgICAtIE9wdGlvbmFsLiBOYXRpdmUgZXZlbnQgd2lsbCBiZSBsaXN0ZW5lZCB0byB3aGVuIHRoaXMgYXJnIGlzIHByb3ZpZGVkLlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAgIG9wdGlvbnMgLSBPcHRpb25hbC4gT3B0aW9ucyBmb3IgYWRkRXZlbnRMaXN0ZW5lci5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge1NwbGlkZX0gLSBUaGlzIGluc3RhbmNlLlxyXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLm9uID0gZnVuY3Rpb24gb24oZXZlbnRzLCBoYW5kbGVyLCBlbG0sIG9wdGlvbnMpIHtcbiAgICBpZiAoZWxtID09PSB2b2lkIDApIHtcbiAgICAgIGVsbSA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIHRoaXMuRXZlbnQub24oZXZlbnRzLCBoYW5kbGVyLCBlbG0sIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxyXG4gICAqIFVuc3Vic2NyaWJlIHRoZSBnaXZlbiBldmVudC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgZXZlbnRzIC0gQSBldmVudCBuYW1lLlxyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxtICAgIC0gT3B0aW9uYWwuIHJlbW92ZUV2ZW50TGlzdGVuZXIoKSB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoaXMgYXJnIGlzIHByb3ZpZGVkLlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7U3BsaWRlfSAtIFRoaXMgaW5zdGFuY2UuXHJcbiAgICovXG4gIDtcblxuICBfcHJvdG8ub2ZmID0gZnVuY3Rpb24gb2ZmKGV2ZW50cywgZWxtKSB7XG4gICAgaWYgKGVsbSA9PT0gdm9pZCAwKSB7XG4gICAgICBlbG0gPSBudWxsO1xuICAgIH1cblxuICAgIHRoaXMuRXZlbnQub2ZmKGV2ZW50cywgZWxtKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcclxuICAgKiBFbWl0IGFuIGV2ZW50LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IC0gQW4gZXZlbnQgbmFtZS5cclxuICAgKiBAcGFyYW0geyp9ICAgICAgYXJncyAgLSBBbnkgbnVtYmVyIG9mIGFyZ3VtZW50cyBwYXNzZWQgdG8gaGFuZGxlcnMuXHJcbiAgICovXG4gIDtcblxuICBfcHJvdG8uZW1pdCA9IGZ1bmN0aW9uIGVtaXQoZXZlbnQpIHtcbiAgICB2YXIgX3RoaXMkRXZlbnQ7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICAoX3RoaXMkRXZlbnQgPSB0aGlzLkV2ZW50KS5lbWl0LmFwcGx5KF90aGlzJEV2ZW50LCBbZXZlbnRdLmNvbmNhdChhcmdzKSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcclxuICAgKiBHbyB0byB0aGUgc2xpZGUgc3BlY2lmaWVkIGJ5IHRoZSBnaXZlbiBjb250cm9sLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBjb250cm9sIC0gQSBjb250cm9sIHBhdHRlcm4uXHJcbiAgICogQHBhcmFtIHtib29sZWFufSAgICAgICB3YWl0ICAgIC0gT3B0aW9uYWwuIFdoZXRoZXIgdG8gd2FpdCBmb3IgdHJhbnNpdGlvbi5cclxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5nbyA9IGZ1bmN0aW9uIGdvKGNvbnRyb2wsIHdhaXQpIHtcbiAgICBpZiAod2FpdCA9PT0gdm9pZCAwKSB7XG4gICAgICB3YWl0ID0gdGhpcy5vcHRpb25zLndhaXRGb3JUcmFuc2l0aW9uO1xuICAgIH1cblxuICAgIGlmICh0aGlzLlN0YXRlLmlzKElETEUpIHx8IHRoaXMuU3RhdGUuaXMoTU9WSU5HKSAmJiAhd2FpdCkge1xuICAgICAgdGhpcy5Db21wb25lbnRzLkNvbnRyb2xsZXIuZ28oY29udHJvbCwgZmFsc2UpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxyXG4gICAqIFZlcmlmeSB3aGV0aGVyIHRoZSBzbGlkZXIgdHlwZSBpcyB0aGUgZ2l2ZW4gb25lIG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gQSBzbGlkZXIgdHlwZS5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gVHJ1ZSBpZiB0aGUgc2xpZGVyIHR5cGUgaXMgdGhlIHByb3ZpZGVkIHR5cGUgb3IgZmFsc2UgaWYgbm90LlxyXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmlzID0gZnVuY3Rpb24gaXModHlwZSkge1xuICAgIHJldHVybiB0eXBlID09PSB0aGlzLl9vLnR5cGU7XG4gIH1cbiAgLyoqXHJcbiAgICogSW5zZXJ0IGEgc2xpZGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0VsZW1lbnR8c3RyaW5nfSBzbGlkZSAtIEEgc2xpZGUgZWxlbWVudCB0byBiZSBhZGRlZC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gICAgICAgICBpbmRleCAtIEEgc2xpZGUgd2lsbCBiZSBhZGRlZCBhdCB0aGUgcG9zaXRpb24uXHJcbiAgICovXG4gIDtcblxuICBfcHJvdG8uYWRkID0gZnVuY3Rpb24gYWRkKHNsaWRlLCBpbmRleCkge1xuICAgIGlmIChpbmRleCA9PT0gdm9pZCAwKSB7XG4gICAgICBpbmRleCA9IC0xO1xuICAgIH1cblxuICAgIHRoaXMuQ29tcG9uZW50cy5FbGVtZW50cy5hZGQoc2xpZGUsIGluZGV4LCB0aGlzLnJlZnJlc2guYmluZCh0aGlzKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXHJcbiAgICogUmVtb3ZlIHRoZSBzbGlkZSBkZXNpZ25hdGVkIGJ5IHRoZSBpbmRleC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIEEgc2xpZGUgaW5kZXguXHJcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKGluZGV4KSB7XG4gICAgdGhpcy5Db21wb25lbnRzLkVsZW1lbnRzLnJlbW92ZShpbmRleCk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXHJcbiAgICogRGVzdHJveSBhbGwgU2xpZGUgb2JqZWN0cyBhbmQgY2xvbmVzIGFuZCByZWNyZWF0ZSB0aGVtIGFnYWluLlxyXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnJlZnJlc2ggPSBmdW5jdGlvbiByZWZyZXNoKCkge1xuICAgIHRoaXMuZW1pdCgncmVmcmVzaDpiZWZvcmUnKS5lbWl0KCdyZWZyZXNoJykuZW1pdCgncmVzaXplJyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXHJcbiAgICogRGVzdHJveSB0aGUgU3BsaWRlLlxyXG4gICAqIFwiQ29tcGxldGVseVwiIGJvb2xlYW4gaXMgbWFpbmx5IGZvciBicmVha3BvaW50cy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gY29tcGxldGVseSAtIERlc3Ryb3kgY29tcGxldGVseS5cclxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveShjb21wbGV0ZWx5KSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBpZiAoY29tcGxldGVseSA9PT0gdm9pZCAwKSB7XG4gICAgICBjb21wbGV0ZWx5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBQb3N0cG9uZSBkZXN0cm95IGJlY2F1c2UgaXQgc2hvdWxkIGJlIGRvbmUgYWZ0ZXIgbW91bnQuXG4gICAgaWYgKHRoaXMuU3RhdGUuaXMoQ1JFQVRFRCkpIHtcbiAgICAgIHRoaXMub24oJ3JlYWR5JywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLmRlc3Ryb3koY29tcGxldGVseSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YWx1ZXModGhpcy5Db21wb25lbnRzKS5yZXZlcnNlKCkuZm9yRWFjaChmdW5jdGlvbiAoY29tcG9uZW50KSB7XG4gICAgICBjb21wb25lbnQuZGVzdHJveSAmJiBjb21wb25lbnQuZGVzdHJveShjb21wbGV0ZWx5KTtcbiAgICB9KTtcbiAgICB0aGlzLmVtaXQoJ2Rlc3Ryb3knLCBjb21wbGV0ZWx5KTsgLy8gRGVzdHJveSBhbGwgZXZlbnQgaGFuZGxlcnMsIGluY2x1ZGluZyBvbmVzIGZvciBuYXRpdmUgZXZlbnRzLlxuXG4gICAgdGhpcy5FdmVudC5kZXN0cm95KCk7XG4gICAgdGhpcy5TdGF0ZS5zZXQoREVTVFJPWUVEKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcclxuICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgc2xpZGUgaW5kZXguXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gVGhlIGN1cnJlbnQgc2xpZGUgaW5kZXguXHJcbiAgIC8vICovXG4gIDtcblxuICBfY3JlYXRlQ2xhc3MoU3BsaWRlLCBbe1xuICAgIGtleTogXCJpbmRleFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2k7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoZSBjdXJyZW50IHNsaWRlIGluZGV4LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gaW5kZXggLSBBIG5ldyBpbmRleC5cclxuICAgICAqL1xuICAgICxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChpbmRleCkge1xuICAgICAgdGhpcy5faSA9IHBhcnNlSW50KGluZGV4KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gbGVuZ3RoIG9mIHNsaWRlcy5cclxuICAgICAqIFRoaXMgaXMgYW4gYWxpYXMgb2YgRWxlbWVudHMubGVuZ3RoLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBBIG51bWJlciBvZiBzbGlkZXMuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImxlbmd0aFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuQ29tcG9uZW50cy5FbGVtZW50cy5sZW5ndGg7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIG9wdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fSAtIE9wdGlvbnMgb2JqZWN0LlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvcHRpb25zXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBTZXQgb3B0aW9ucyB3aXRoIG1lcmdpbmcgdGhlIGdpdmVuIG9iamVjdCB0byB0aGUgY3VycmVudCBvbmUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBOZXcgb3B0aW9ucy5cclxuICAgICAqL1xuICAgICxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChvcHRpb25zKSB7XG4gICAgICB2YXIgY3JlYXRlZCA9IHRoaXMuU3RhdGUuaXMoQ1JFQVRFRCk7XG5cbiAgICAgIGlmICghY3JlYXRlZCkge1xuICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9vID0gbWVyZ2UodGhpcy5fbywgb3B0aW9ucyk7XG5cbiAgICAgIGlmICghY3JlYXRlZCkge1xuICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZWQnLCB0aGlzLl9vKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdGhlIGNsYXNzIGxpc3QuXHJcbiAgICAgKiBUaGlzIGlzIGFuIGFsaWFzIG9mIFNwbGlkZS5vcHRpb25zLmNsYXNzTGlzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIGNsYXNzIGxpc3QuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNsYXNzZXNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9vLmNsYXNzZXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBpMThuIHN0cmluZ3MuXHJcbiAgICAgKiBUaGlzIGlzIGFuIGFsaWFzIG9mIFNwbGlkZS5vcHRpb25zLmkxOG4uXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fSAtIEFuIG9iamVjdCBjb250YWluaW5nIGFsbCBpMThuIHN0cmluZ3MuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImkxOG5cIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9vLmkxOG47XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNwbGlkZTtcbn0oKTtcblxuXG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9vcHRpb25zL2luZGV4LmpzXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgaW5pdGlhbGl6aW5nIG9wdGlvbnMuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG5cbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBpbml0aWFsaXppbmcgb3B0aW9ucy5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IG9wdGlvbnMgPSAoZnVuY3Rpb24gKFNwbGlkZSkge1xuICAvKipcclxuICAgKiBSZXRyaWV2ZSBvcHRpb25zIGZyb20gdGhlIGRhdGEgYXR0cmlidXRlLlxyXG4gICAqIE5vdGUgdGhhdCBJRTEwIGRvZXNuJ3Qgc3VwcG9ydCBkYXRhc2V0IHByb3BlcnR5LlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cbiAgdmFyIG9wdGlvbnMgPSBnZXRBdHRyaWJ1dGUoU3BsaWRlLnJvb3QsICdkYXRhLXNwbGlkZScpO1xuXG4gIGlmIChvcHRpb25zKSB7XG4gICAgdHJ5IHtcbiAgICAgIFNwbGlkZS5vcHRpb25zID0gSlNPTi5wYXJzZShvcHRpb25zKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICBpZiAoU3BsaWRlLlN0YXRlLmlzKENSRUFURUQpKSB7XG4gICAgICAgIFNwbGlkZS5pbmRleCA9IFNwbGlkZS5vcHRpb25zLnN0YXJ0O1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbnN0YW50cy9kaXJlY3Rpb25zLmpzXG4vKipcclxuICogRXhwb3J0IGxheW91dCBtb2Rlcy5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG4vKipcclxuICogRW51bWVyYXRlIHNsaWRlcyBmcm9tIGxlZnQgdG8gcmlnaHQuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xudmFyIExUUiA9ICdsdHInO1xuLyoqXHJcbiAqIEVudW1lcmF0ZSBzbGlkZXMgZnJvbSByaWdodCB0byBsZWZ0LlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cblxudmFyIFJUTCA9ICdydGwnO1xuLyoqXHJcbiAqIEVudW1lcmF0ZSBzbGlkZXMgaW4gYSBjb2wuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xuXG52YXIgVFRCID0gJ3R0Yic7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9lbGVtZW50cy9zbGlkZS5qc1xuLyoqXHJcbiAqIFRoZSBzdWIgY29tcG9uZW50IGZvciBoYW5kbGluZyBlYWNoIHNsaWRlLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuXG5cblxuXG4vKipcclxuICogRXZlbnRzIGZvciByZXN0b3Jpbmcgb3JpZ2luYWwgc3R5bGVzLlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cblxudmFyIFNUWUxFX1JFU1RPUkVfRVZFTlRTID0gJ3VwZGF0ZS5zbGlkZSc7XG4vKipcclxuICogVGhlIHN1YiBjb21wb25lbnQgZm9yIGhhbmRsaW5nIGVhY2ggc2xpZGUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSAgU3BsaWRlICAgIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSAgaW5kZXggICAgIC0gQW4gdW5pcXVlIHNsaWRlIGluZGV4LlxyXG4gKiBAcGFyYW0ge251bWJlcn0gIHJlYWxJbmRleCAtIENsb25lcyBzaG91bGQgcGFzcyBhIHJlYWwgc2xpZGUgaW5kZXguXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gc2xpZGUgICAgIC0gQSBzbGlkZSBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIHN1YiBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBlbGVtZW50c19zbGlkZSA9IChmdW5jdGlvbiAoU3BsaWRlLCBpbmRleCwgcmVhbEluZGV4LCBzbGlkZSkge1xuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIHVwZGF0ZSBcImlzLWFjdGl2ZVwiIGNsYXNzIGJlZm9yZSBvciBhZnRlciB0cmFuc2l0aW9uLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIHZhciB1cGRhdGVPbk1vdmUgPSBTcGxpZGUub3B0aW9ucy51cGRhdGVPbk1vdmU7XG4gIC8qKlxyXG4gICAqIEV2ZW50cyB3aGVuIHRoZSBzbGlkZSBzdGF0dXMgaXMgdXBkYXRlZC5cclxuICAgKiBBcHBlbmQgYSBuYW1lc3BhY2UgdG8gcmVtb3ZlIGxpc3RlbmVycyBsYXRlci5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICovXG5cbiAgdmFyIFNUQVRVU19VUERBVEVfRVZFTlRTID0gJ3JlYWR5LnNsaWRlIHVwZGF0ZWQuc2xpZGUgcmVzaXplZC5zbGlkZSBtb3ZlZC5zbGlkZScgKyAodXBkYXRlT25Nb3ZlID8gJyBtb3ZlLnNsaWRlJyA6ICcnKTtcbiAgLyoqXHJcbiAgICogU2xpZGUgc3ViIGNvbXBvbmVudCBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBTbGlkZSA9IHtcbiAgICAvKipcclxuICAgICAqIFNsaWRlIGVsZW1lbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge0VsZW1lbnR9XHJcbiAgICAgKi9cbiAgICBzbGlkZTogc2xpZGUsXG5cbiAgICAvKipcclxuICAgICAqIFNsaWRlIGluZGV4LlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cbiAgICBpbmRleDogaW5kZXgsXG5cbiAgICAvKipcclxuICAgICAqIFJlYWwgaW5kZXggZm9yIGNsb25lcy5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXG4gICAgcmVhbEluZGV4OiByZWFsSW5kZXgsXG5cbiAgICAvKipcclxuICAgICAqIENvbnRhaW5lciBlbGVtZW50IGlmIGF2YWlsYWJsZS5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7RWxlbWVudHx1bmRlZmluZWR9XHJcbiAgICAgKi9cbiAgICBjb250YWluZXI6IGNoaWxkKHNsaWRlLCBTcGxpZGUuY2xhc3Nlcy5jb250YWluZXIpLFxuXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRoaXMgaXMgYSBjbG9uZWQgc2xpZGUgb3Igbm90LlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICovXG4gICAgaXNDbG9uZTogcmVhbEluZGV4ID4gLTEsXG5cbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmICghdGhpcy5pc0Nsb25lKSB7XG4gICAgICAgIHNsaWRlLmlkID0gU3BsaWRlLnJvb3QuaWQgKyBcIi1zbGlkZVwiICsgcGFkKGluZGV4ICsgMSk7XG4gICAgICB9XG5cbiAgICAgIFNwbGlkZS5vbihTVEFUVVNfVVBEQVRFX0VWRU5UUywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMudXBkYXRlKCk7XG4gICAgICB9KS5vbihTVFlMRV9SRVNUT1JFX0VWRU5UUywgcmVzdG9yZVN0eWxlcykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gU3BsaWRlLmVtaXQoJ2NsaWNrJywgX3RoaXMpO1xuICAgICAgfSwgc2xpZGUpO1xuICAgICAgLypcclxuICAgICAgICogQWRkIFwiaXMtYWN0aXZlXCIgY2xhc3MgdG8gYSBjbG9uZSBlbGVtZW50IHRlbXBvcmFyaWx5XHJcbiAgICAgICAqIGFuZCBpdCB3aWxsIGJlIHJlbW92ZWQgb24gXCJtb3ZlZFwiIGV2ZW50LlxyXG4gICAgICAgKi9cblxuICAgICAgaWYgKHVwZGF0ZU9uTW92ZSkge1xuICAgICAgICBTcGxpZGUub24oJ21vdmUuc2xpZGUnLCBmdW5jdGlvbiAobmV3SW5kZXgpIHtcbiAgICAgICAgICBpZiAobmV3SW5kZXggPT09IHJlYWxJbmRleCkge1xuICAgICAgICAgICAgX3VwZGF0ZSh0cnVlLCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gLy8gTWFrZSBzdXJlIHRoZSBzbGlkZSBpcyBzaG93bi5cblxuXG4gICAgICBhcHBseVN0eWxlKHNsaWRlLCB7XG4gICAgICAgIGRpc3BsYXk6ICcnXG4gICAgICB9KTsgLy8gSG9sZCB0aGUgb3JpZ2luYWwgc3R5bGVzLlxuXG4gICAgICB0aGlzLnN0eWxlcyA9IGdldEF0dHJpYnV0ZShzbGlkZSwgJ3N0eWxlJykgfHwgJyc7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogRGVzdHJveS5cclxuICAgICAqL1xuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICBTcGxpZGUub2ZmKFNUQVRVU19VUERBVEVfRVZFTlRTKS5vZmYoU1RZTEVfUkVTVE9SRV9FVkVOVFMpLm9mZignY2xpY2snLCBzbGlkZSk7XG4gICAgICByZW1vdmVDbGFzcyhzbGlkZSwgdmFsdWVzKFNUQVRVU19DTEFTU0VTKSk7XG4gICAgICByZXN0b3JlU3R5bGVzKCk7XG4gICAgICByZW1vdmVBdHRyaWJ1dGUodGhpcy5jb250YWluZXIsICdzdHlsZScpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSBhY3RpdmUgYW5kIHZpc2libGUgc3RhdHVzLlxyXG4gICAgICovXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgICBfdXBkYXRlKHRoaXMuaXNBY3RpdmUoKSwgZmFsc2UpO1xuXG4gICAgICBfdXBkYXRlKHRoaXMuaXNWaXNpYmxlKCksIHRydWUpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIENoZWNrIHdoZXRoZXIgdGhpcyBzbGlkZSBpcyBhY3RpdmUgb3Igbm90LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gVHJ1ZSBpZiB0aGUgc2xpZGUgaXMgYWN0aXZlIG9yIGZhbHNlIGlmIG5vdC5cclxuICAgICAqL1xuICAgIGlzQWN0aXZlOiBmdW5jdGlvbiBpc0FjdGl2ZSgpIHtcbiAgICAgIHJldHVybiBTcGxpZGUuaW5kZXggPT09IGluZGV4O1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIENoZWNrIHdoZXRoZXIgdGhpcyBzbGlkZSBpcyB2aXNpYmxlIGluIHRoZSB2aWV3cG9ydCBvciBub3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gLSBUcnVlIGlmIHRoZSBzbGlkZSBpcyB2aXNpYmxlIG9yIGZhbHNlIGlmIG5vdC5cclxuICAgICAqL1xuICAgIGlzVmlzaWJsZTogZnVuY3Rpb24gaXNWaXNpYmxlKCkge1xuICAgICAgdmFyIGFjdGl2ZSA9IHRoaXMuaXNBY3RpdmUoKTtcblxuICAgICAgaWYgKFNwbGlkZS5pcyhGQURFKSB8fCBhY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuIGFjdGl2ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNlaWwgPSBNYXRoLmNlaWw7XG4gICAgICB2YXIgdHJhY2tSZWN0ID0gZ2V0UmVjdChTcGxpZGUuQ29tcG9uZW50cy5FbGVtZW50cy50cmFjayk7XG4gICAgICB2YXIgc2xpZGVSZWN0ID0gZ2V0UmVjdChzbGlkZSk7XG5cbiAgICAgIGlmIChTcGxpZGUub3B0aW9ucy5kaXJlY3Rpb24gPT09IFRUQikge1xuICAgICAgICByZXR1cm4gdHJhY2tSZWN0LnRvcCA8PSBzbGlkZVJlY3QudG9wICYmIHNsaWRlUmVjdC5ib3R0b20gPD0gY2VpbCh0cmFja1JlY3QuYm90dG9tKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRyYWNrUmVjdC5sZWZ0IDw9IHNsaWRlUmVjdC5sZWZ0ICYmIHNsaWRlUmVjdC5yaWdodCA8PSBjZWlsKHRyYWNrUmVjdC5yaWdodCk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogQ2FsY3VsYXRlIGhvdyBmYXIgdGhpcyBzbGlkZSBpcyBmcm9tIGFub3RoZXIgc2xpZGUgYW5kXHJcbiAgICAgKiByZXR1cm4gdHJ1ZSBpZiB0aGUgZGlzdGFuY2UgaXMgd2l0aGluIHRoZSBnaXZlbiBudW1iZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGZyb20gICAtIEluZGV4IG9mIGEgdGFyZ2V0IHNsaWRlLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpdGhpbiAtIFRydWUgaWYgdGhlIHNsaWRlIGlzIHdpdGhpbiB0aGlzIG51bWJlci5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSAtIFRydWUgaWYgdGhlIHNsaWRlIGlzIHdpdGhpbiB0aGUgbnVtYmVyIG9yIGZhbHNlIG90aGVyd2lzZS5cclxuICAgICAqL1xuICAgIGlzV2l0aGluOiBmdW5jdGlvbiBpc1dpdGhpbihmcm9tLCB3aXRoaW4pIHtcbiAgICAgIHZhciBkaWZmID0gTWF0aC5hYnMoZnJvbSAtIGluZGV4KTtcblxuICAgICAgaWYgKCFTcGxpZGUuaXMoU0xJREUpICYmICF0aGlzLmlzQ2xvbmUpIHtcbiAgICAgICAgZGlmZiA9IE1hdGgubWluKGRpZmYsIFNwbGlkZS5sZW5ndGggLSBkaWZmKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRpZmYgPCB3aXRoaW47XG4gICAgfVxuICB9O1xuICAvKipcclxuICAgKiBVcGRhdGUgY2xhc3NlcyBmb3IgYWN0aXZpdHkgb3IgdmlzaWJpbGl0eS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gYWN0aXZlICAgICAgICAtIElzIGFjdGl2ZS92aXNpYmxlIG9yIG5vdC5cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGZvclZpc2liaWxpdHkgLSBUb2dnbGUgY2xhc3NlcyBmb3IgYWN0aXZpdHkgb3IgdmlzaWJpbGl0eS5cclxuICAgKi9cblxuICBmdW5jdGlvbiBfdXBkYXRlKGFjdGl2ZSwgZm9yVmlzaWJpbGl0eSkge1xuICAgIHZhciB0eXBlID0gZm9yVmlzaWJpbGl0eSA/ICd2aXNpYmxlJyA6ICdhY3RpdmUnO1xuICAgIHZhciBjbGFzc05hbWUgPSBTVEFUVVNfQ0xBU1NFU1t0eXBlXTtcblxuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIGFkZENsYXNzKHNsaWRlLCBjbGFzc05hbWUpO1xuICAgICAgU3BsaWRlLmVtaXQoXCJcIiArIHR5cGUsIFNsaWRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhc0NsYXNzKHNsaWRlLCBjbGFzc05hbWUpKSB7XG4gICAgICAgIHJlbW92ZUNsYXNzKHNsaWRlLCBjbGFzc05hbWUpO1xuICAgICAgICBTcGxpZGUuZW1pdChcIlwiICsgKGZvclZpc2liaWxpdHkgPyAnaGlkZGVuJyA6ICdpbmFjdGl2ZScpLCBTbGlkZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxyXG4gICAqIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHN0eWxlcy5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHJlc3RvcmVTdHlsZXMoKSB7XG4gICAgc2V0QXR0cmlidXRlKHNsaWRlLCAnc3R5bGUnLCBTbGlkZS5zdHlsZXMpO1xuICB9XG5cbiAgcmV0dXJuIFNsaWRlO1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9lbGVtZW50cy9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIG1haW4gZWxlbWVudHMuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG5cblxuXG4vKipcclxuICogVGhlIHByb3BlcnR5IG5hbWUgZm9yIFVJRCBzdG9yZWQgaW4gYSB3aW5kb3cgb2JqZWN0LlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cblxudmFyIFVJRF9OQU1FID0gJ3VpZCc7XG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgbWFpbiBlbGVtZW50cy5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudHMgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IGNvbXBvbmVudHNfZWxlbWVudHMgPSAoZnVuY3Rpb24gKFNwbGlkZSwgQ29tcG9uZW50cykge1xuICAvKipcclxuICAgKiBIb2xkIHRoZSByb290IGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RWxlbWVudH1cclxuICAgKi9cbiAgdmFyIHJvb3QgPSBTcGxpZGUucm9vdDtcbiAgLyoqXHJcbiAgICogSG9sZCB0aGUgY2xhc3MgbGlzdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIGNsYXNzZXMgPSBTcGxpZGUuY2xhc3NlcztcbiAgLyoqXHJcbiAgICogU3RvcmUgU2xpZGUgb2JqZWN0cy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtBcnJheX1cclxuICAgKi9cblxuICB2YXIgU2xpZGVzID0gW107XG4gIC8qXHJcbiAgICogQXNzaWduIHVuaXF1ZSBJRCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGl0IGRvZXNuJ3QgaGF2ZSB0aGUgb25lLlxyXG4gICAqIE5vdGUgdGhhdCBJRSBkb2Vzbid0IHN1cHBvcnQgcGFkU3RhcnQoKSB0byBmaWxsIHRoZSB1aWQgYnkgMC5cclxuICAgKi9cblxuICBpZiAoIXJvb3QuaWQpIHtcbiAgICB3aW5kb3cuc3BsaWRlID0gd2luZG93LnNwbGlkZSB8fCB7fTtcbiAgICB2YXIgdWlkID0gd2luZG93LnNwbGlkZVtVSURfTkFNRV0gfHwgMDtcbiAgICB3aW5kb3cuc3BsaWRlW1VJRF9OQU1FXSA9ICsrdWlkO1xuICAgIHJvb3QuaWQgPSBcInNwbGlkZVwiICsgcGFkKHVpZCk7XG4gIH1cbiAgLyoqXHJcbiAgICogRWxlbWVudHMgY29tcG9uZW50IG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cblxuICB2YXIgRWxlbWVudHMgPSB7XG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKiBDb2xsZWN0IG1haW4gZWxlbWVudHMgYW5kIHN0b3JlIHRoZW0gYXMgbWVtYmVyIHByb3BlcnRpZXMuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB0aGlzLmluaXQoKTtcbiAgICAgIFNwbGlkZS5vbigncmVmcmVzaCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuZGVzdHJveSgpO1xuXG4gICAgICAgIF90aGlzLmluaXQoKTtcbiAgICAgIH0pLm9uKCd1cGRhdGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZW1vdmVDbGFzcyhyb290LCBnZXRDbGFzc2VzKCkpO1xuICAgICAgICBhZGRDbGFzcyhyb290LCBnZXRDbGFzc2VzKCkpO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogRGVzdHJveS5cclxuICAgICAqL1xuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICBTbGlkZXMuZm9yRWFjaChmdW5jdGlvbiAoU2xpZGUpIHtcbiAgICAgICAgU2xpZGUuZGVzdHJveSgpO1xuICAgICAgfSk7XG4gICAgICBTbGlkZXMgPSBbXTtcbiAgICAgIHJlbW92ZUNsYXNzKHJvb3QsIGdldENsYXNzZXMoKSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6YXRpb24uXHJcbiAgICAgKi9cbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGNvbGxlY3QoKTtcbiAgICAgIGFkZENsYXNzKHJvb3QsIGdldENsYXNzZXMoKSk7XG4gICAgICB0aGlzLnNsaWRlcy5mb3JFYWNoKGZ1bmN0aW9uIChzbGlkZSwgaW5kZXgpIHtcbiAgICAgICAgX3RoaXMyLnJlZ2lzdGVyKHNsaWRlLCBpbmRleCwgLTEpO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYSBzbGlkZSB0byBjcmVhdGUgYSBTbGlkZSBvYmplY3QgYW5kIGhhbmRsZSBpdHMgYmVoYXZpb3IuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBzbGlkZSAgICAgLSBBIHNsaWRlIGVsZW1lbnQuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gIGluZGV4ICAgICAtIEEgdW5pcXVlIGluZGV4LiBUaGlzIGNhbiBiZSBuZWdhdGl2ZS5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSAgcmVhbEluZGV4IC0gQSByZWFsIGluZGV4IGZvciBjbG9uZXMuIFNldCAtMSBmb3IgcmVhbCBzbGlkZXMuXHJcbiAgICAgKi9cbiAgICByZWdpc3RlcjogZnVuY3Rpb24gcmVnaXN0ZXIoc2xpZGUsIGluZGV4LCByZWFsSW5kZXgpIHtcbiAgICAgIHZhciBTbGlkZU9iamVjdCA9IGVsZW1lbnRzX3NsaWRlKFNwbGlkZSwgaW5kZXgsIHJlYWxJbmRleCwgc2xpZGUpO1xuICAgICAgU2xpZGVPYmplY3QubW91bnQoKTtcbiAgICAgIFNsaWRlcy5wdXNoKFNsaWRlT2JqZWN0KTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdGhlIFNsaWRlIG9iamVjdCBkZXNpZ25hdGVkIGJ5IHRoZSBpbmRleC5cclxuICAgICAqIE5vdGUgdGhhdCBcImZpbmRcIiBpcyBub3Qgc3VwcG9ydGVkIGJ5IElFLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge09iamVjdHx1bmRlZmluZWR9IC0gQSBTbGlkZSBvYmplY3QgaWYgYXZhaWxhYmxlLiBVbmRlZmluZWQgaWYgbm90LlxyXG4gICAgICovXG4gICAgZ2V0U2xpZGU6IGZ1bmN0aW9uIGdldFNsaWRlKGluZGV4KSB7XG4gICAgICByZXR1cm4gU2xpZGVzLmZpbHRlcihmdW5jdGlvbiAoU2xpZGUpIHtcbiAgICAgICAgcmV0dXJuIFNsaWRlLmluZGV4ID09PSBpbmRleDtcbiAgICAgIH0pWzBdO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiBhbGwgU2xpZGUgb2JqZWN0cy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVDbG9uZXMgLSBXaGV0aGVyIHRvIGluY2x1ZGUgY2xvbmVkIHNsaWRlcyBvciBub3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0W119IC0gU2xpZGUgb2JqZWN0cy5cclxuICAgICAqL1xuICAgIGdldFNsaWRlczogZnVuY3Rpb24gZ2V0U2xpZGVzKGluY2x1ZGVDbG9uZXMpIHtcbiAgICAgIHJldHVybiBpbmNsdWRlQ2xvbmVzID8gU2xpZGVzIDogU2xpZGVzLmZpbHRlcihmdW5jdGlvbiAoU2xpZGUpIHtcbiAgICAgICAgcmV0dXJuICFTbGlkZS5pc0Nsb25lO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIFNsaWRlIG9iamVjdHMgYmVsb25naW5nIHRvIHRoZSBnaXZlbiBwYWdlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlIC0gQSBwYWdlIG51bWJlci5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3RbXX0gLSBBbiBhcnJheSBjb250YWluaW5nIFNsaWRlIG9iamVjdHMuXHJcbiAgICAgKi9cbiAgICBnZXRTbGlkZXNCeVBhZ2U6IGZ1bmN0aW9uIGdldFNsaWRlc0J5UGFnZShwYWdlKSB7XG4gICAgICB2YXIgaWR4ID0gQ29tcG9uZW50cy5Db250cm9sbGVyLnRvSW5kZXgocGFnZSk7XG4gICAgICB2YXIgb3B0aW9ucyA9IFNwbGlkZS5vcHRpb25zO1xuICAgICAgdmFyIG1heCA9IG9wdGlvbnMuZm9jdXMgIT09IGZhbHNlID8gMSA6IG9wdGlvbnMucGVyUGFnZTtcbiAgICAgIHJldHVybiBTbGlkZXMuZmlsdGVyKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciBpbmRleCA9IF9yZWYuaW5kZXg7XG4gICAgICAgIHJldHVybiBpZHggPD0gaW5kZXggJiYgaW5kZXggPCBpZHggKyBtYXg7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBJbnNlcnQgYSBzbGlkZSB0byBhIHNsaWRlci5cclxuICAgICAqIE5lZWQgdG8gcmVmcmVzaCBTcGxpZGUgYWZ0ZXIgYWRkaW5nIGEgc2xpZGUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtOb2RlfHN0cmluZ30gc2xpZGUgICAgLSBBIHNsaWRlIGVsZW1lbnQgdG8gYmUgYWRkZWQuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gICAgICBpbmRleCAgICAtIEEgc2xpZGUgd2lsbCBiZSBhZGRlZCBhdCB0aGUgcG9zaXRpb24uXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSAgICBjYWxsYmFjayAtIENhbGxlZCByaWdodCBhZnRlciB0aGUgc2xpZGUgaXMgYWRkZWQgdG8gdGhlIERPTSB0cmVlLlxyXG4gICAgICovXG4gICAgYWRkOiBmdW5jdGlvbiBhZGQoc2xpZGUsIGluZGV4LCBjYWxsYmFjaykge1xuICAgICAgaWYgKHR5cGVvZiBzbGlkZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgc2xpZGUgPSBkb21pZnkoc2xpZGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2xpZGUgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgIHZhciByZWYgPSB0aGlzLnNsaWRlc1tpbmRleF07IC8vIFRoaXMgd2lsbCBiZSByZW1vdmVkIGluIG1vdW50KCkgb2YgYSBTbGlkZSBjb21wb25lbnQuXG5cbiAgICAgICAgYXBwbHlTdHlsZShzbGlkZSwge1xuICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVmKSB7XG4gICAgICAgICAgYmVmb3JlKHNsaWRlLCByZWYpO1xuICAgICAgICAgIHRoaXMuc2xpZGVzLnNwbGljZShpbmRleCwgMCwgc2xpZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFwcGVuZCh0aGlzLmxpc3QsIHNsaWRlKTtcbiAgICAgICAgICB0aGlzLnNsaWRlcy5wdXNoKHNsaWRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvYWRlZChzbGlkZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHNsaWRlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIGEgc2xpZGUgZnJvbSBhIHNsaWRlci5cclxuICAgICAqIE5lZWQgdG8gcmVmcmVzaCBTcGxpZGUgYWZ0ZXIgcmVtb3ZpbmcgYSBzbGlkZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaW5kZXggLSBTbGlkZSBpbmRleC5cclxuICAgICAqL1xuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKGluZGV4KSB7XG4gICAgICBkb21fcmVtb3ZlKHRoaXMuc2xpZGVzLnNwbGljZShpbmRleCwgMSlbMF0pO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFRyaWdnZXIgdGhlIHByb3ZpZGVkIGNhbGxiYWNrIGZvciBlYWNoIFNsaWRlIG9iamVjdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIEEgY2FsbGJhY2sgZnVuY3Rpb24uIFRoZSBmaXJzdCBhcmd1bWVudCB3aWxsIGJlIHRoZSBTbGlkZSBvYmplY3QuXHJcbiAgICAgKi9cbiAgICBlYWNoOiBmdW5jdGlvbiBlYWNoKGNhbGxiYWNrKSB7XG4gICAgICBTbGlkZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHNsaWRlcyBsZW5ndGggd2l0aG91dCBjbG9uZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIFNsaWRlIGxlbmd0aC5cclxuICAgICAqL1xuICAgIGdldCBsZW5ndGgoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zbGlkZXMubGVuZ3RoO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiBcIlNsaWRlT2JqZWN0c1wiIGxlbmd0aCBpbmNsdWRpbmcgY2xvbmVzLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBTbGlkZSBsZW5ndGggaW5jbHVkaW5nIGNsb25lcy5cclxuICAgICAqL1xuICAgIGdldCB0b3RhbCgpIHtcbiAgICAgIHJldHVybiBTbGlkZXMubGVuZ3RoO1xuICAgIH1cblxuICB9O1xuICAvKipcclxuICAgKiBDb2xsZWN0IGVsZW1lbnRzLlxyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGNvbGxlY3QoKSB7XG4gICAgRWxlbWVudHMuc2xpZGVyID0gY2hpbGQocm9vdCwgY2xhc3Nlcy5zbGlkZXIpO1xuICAgIEVsZW1lbnRzLnRyYWNrID0gZmluZChyb290LCBcIi5cIiArIGNsYXNzZXMudHJhY2spO1xuICAgIEVsZW1lbnRzLmxpc3QgPSBjaGlsZChFbGVtZW50cy50cmFjaywgY2xhc3Nlcy5saXN0KTtcbiAgICBleGlzdChFbGVtZW50cy50cmFjayAmJiBFbGVtZW50cy5saXN0LCAnVHJhY2sgb3IgbGlzdCB3YXMgbm90IGZvdW5kLicpO1xuICAgIEVsZW1lbnRzLnNsaWRlcyA9IGNoaWxkcmVuKEVsZW1lbnRzLmxpc3QsIGNsYXNzZXMuc2xpZGUpO1xuICAgIHZhciBhcnJvd3MgPSBmaW5kUGFydHMoY2xhc3Nlcy5hcnJvd3MpO1xuICAgIEVsZW1lbnRzLmFycm93cyA9IHtcbiAgICAgIHByZXY6IGZpbmQoYXJyb3dzLCBcIi5cIiArIGNsYXNzZXMucHJldiksXG4gICAgICBuZXh0OiBmaW5kKGFycm93cywgXCIuXCIgKyBjbGFzc2VzLm5leHQpXG4gICAgfTtcbiAgICB2YXIgYXV0b3BsYXkgPSBmaW5kUGFydHMoY2xhc3Nlcy5hdXRvcGxheSk7XG4gICAgRWxlbWVudHMuYmFyID0gZmluZChmaW5kUGFydHMoY2xhc3Nlcy5wcm9ncmVzcyksIFwiLlwiICsgY2xhc3Nlcy5iYXIpO1xuICAgIEVsZW1lbnRzLnBsYXkgPSBmaW5kKGF1dG9wbGF5LCBcIi5cIiArIGNsYXNzZXMucGxheSk7XG4gICAgRWxlbWVudHMucGF1c2UgPSBmaW5kKGF1dG9wbGF5LCBcIi5cIiArIGNsYXNzZXMucGF1c2UpO1xuICAgIEVsZW1lbnRzLnRyYWNrLmlkID0gRWxlbWVudHMudHJhY2suaWQgfHwgcm9vdC5pZCArIFwiLXRyYWNrXCI7XG4gICAgRWxlbWVudHMubGlzdC5pZCA9IEVsZW1lbnRzLmxpc3QuaWQgfHwgcm9vdC5pZCArIFwiLWxpc3RcIjtcbiAgfVxuICAvKipcclxuICAgKiBSZXR1cm4gY2xhc3MgbmFtZXMgZm9yIHRoZSByb290IGVsZW1lbnQuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBnZXRDbGFzc2VzKCkge1xuICAgIHZhciByb290Q2xhc3MgPSBjbGFzc2VzLnJvb3Q7XG4gICAgdmFyIG9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcbiAgICByZXR1cm4gW3Jvb3RDbGFzcyArIFwiLS1cIiArIG9wdGlvbnMudHlwZSwgcm9vdENsYXNzICsgXCItLVwiICsgb3B0aW9ucy5kaXJlY3Rpb24sIG9wdGlvbnMuZHJhZyA/IHJvb3RDbGFzcyArIFwiLS1kcmFnZ2FibGVcIiA6ICcnLCBvcHRpb25zLmlzTmF2aWdhdGlvbiA/IHJvb3RDbGFzcyArIFwiLS1uYXZcIiA6ICcnLCBTVEFUVVNfQ0xBU1NFUy5hY3RpdmVdO1xuICB9XG4gIC8qKlxyXG4gICAqIEZpbmQgcGFydHMgb25seSBmcm9tIGNoaWxkcmVuIG9mIHRoZSByb290IG9yIHRyYWNrLlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7RWxlbWVudH0gLSBBIGZvdW5kIGVsZW1lbnQgb3IgdW5kZWZpbmVkLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gZmluZFBhcnRzKGNsYXNzTmFtZSkge1xuICAgIHJldHVybiBjaGlsZChyb290LCBjbGFzc05hbWUpIHx8IGNoaWxkKEVsZW1lbnRzLnNsaWRlciwgY2xhc3NOYW1lKTtcbiAgfVxuXG4gIHJldHVybiBFbGVtZW50cztcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvY29udHJvbGxlci9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGNvbnRyb2xsaW5nIHRoZSB0cmFjay5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cblxudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBjb250cm9sbGluZyB0aGUgdHJhY2suXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgICAgIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBDb21wb25lbnRzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgY29tcG9uZW50cy5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBjb250cm9sbGVyID0gKGZ1bmN0aW9uIChTcGxpZGUsIENvbXBvbmVudHMpIHtcbiAgLyoqXHJcbiAgICogU3RvcmUgY3VycmVudCBvcHRpb25zLlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cbiAgdmFyIG9wdGlvbnM7XG4gIC8qKlxyXG4gICAqIFRydWUgaWYgdGhlIHNsaWRlIGlzIExPT1AgbW9kZS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuXG4gIHZhciBpc0xvb3A7XG4gIC8qKlxyXG4gICAqIENvbnRyb2xsZXIgY29tcG9uZW50IG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIENvbnRyb2xsZXIgPSB7XG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICBvcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG4gICAgICBpc0xvb3AgPSBTcGxpZGUuaXMoTE9PUCk7XG4gICAgICBiaW5kKCk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogTWFrZSB0cmFjayBydW4gYnkgdGhlIGdpdmVuIGNvbnRyb2wuXHJcbiAgICAgKiAtIFwiK3tpfVwiIDogSW5jcmVtZW50IHRoZSBzbGlkZSBpbmRleCBieSBpLlxyXG4gICAgICogLSBcIi17aX1cIiA6IERlY3JlbWVudCB0aGUgc2xpZGUgaW5kZXggYnkgaS5cclxuICAgICAqIC0gXCJ7aX1cIiAgOiBHbyB0byB0aGUgc2xpZGUgd2hvc2UgaW5kZXggaXMgaS5cclxuICAgICAqIC0gXCI+XCIgICAgOiBHbyB0byBuZXh0IHBhZ2UuXHJcbiAgICAgKiAtIFwiPFwiICAgIDogR28gdG8gcHJldiBwYWdlLlxyXG4gICAgICogLSBcIj57aX1cIiA6IEdvIHRvIHBhZ2UgaS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGNvbnRyb2wgIC0gQSBjb250cm9sIHBhdHRlcm4uXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59ICAgICAgIHNpbGVudGx5IC0gR28gdG8gdGhlIGRlc3RpbmF0aW9uIHdpdGhvdXQgZXZlbnQgZW1pc3Npb24uXHJcbiAgICAgKi9cbiAgICBnbzogZnVuY3Rpb24gZ28oY29udHJvbCwgc2lsZW50bHkpIHtcbiAgICAgIHZhciBkZXN0SW5kZXggPSB0aGlzLnRyaW0odGhpcy5wYXJzZShjb250cm9sKSk7XG4gICAgICBDb21wb25lbnRzLlRyYWNrLmdvKGRlc3RJbmRleCwgdGhpcy5yZXdpbmQoZGVzdEluZGV4KSwgc2lsZW50bHkpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFBhcnNlIHRoZSBnaXZlbiBjb250cm9sIGFuZCByZXR1cm4gdGhlIGRlc3RpbmF0aW9uIGluZGV4IGZvciB0aGUgdHJhY2suXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRyb2wgLSBBIGNvbnRyb2wgdGFyZ2V0IHBhdHRlcm4uXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIEEgcGFyc2VkIHRhcmdldC5cclxuICAgICAqL1xuICAgIHBhcnNlOiBmdW5jdGlvbiBwYXJzZShjb250cm9sKSB7XG4gICAgICB2YXIgaW5kZXggPSBTcGxpZGUuaW5kZXg7XG4gICAgICB2YXIgbWF0Y2hlcyA9IFN0cmluZyhjb250cm9sKS5tYXRjaCgvKFsrXFwtPD5dKykoXFxkKyk/Lyk7XG4gICAgICB2YXIgaW5kaWNhdG9yID0gbWF0Y2hlcyA/IG1hdGNoZXNbMV0gOiAnJztcbiAgICAgIHZhciBudW1iZXIgPSBtYXRjaGVzID8gcGFyc2VJbnQobWF0Y2hlc1syXSkgOiAwO1xuXG4gICAgICBzd2l0Y2ggKGluZGljYXRvcikge1xuICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICBpbmRleCArPSBudW1iZXIgfHwgMTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICBpbmRleCAtPSBudW1iZXIgfHwgMTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICc+JzpcbiAgICAgICAgY2FzZSAnPCc6XG4gICAgICAgICAgaW5kZXggPSBwYXJzZVBhZ2UobnVtYmVyLCBpbmRleCwgaW5kaWNhdG9yID09PSAnPCcpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaW5kZXggPSBwYXJzZUludChjb250cm9sKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIENvbXB1dGUgaW5kZXggZnJvbSB0aGUgZ2l2ZW4gcGFnZSBudW1iZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBhZ2UgLSBQYWdlIG51bWJlci5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gQSBjb21wdXRlZCBwYWdlIG51bWJlci5cclxuICAgICAqL1xuICAgIHRvSW5kZXg6IGZ1bmN0aW9uIHRvSW5kZXgocGFnZSkge1xuICAgICAgaWYgKGhhc0ZvY3VzKCkpIHtcbiAgICAgICAgcmV0dXJuIHBhZ2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBsZW5ndGggPSBTcGxpZGUubGVuZ3RoO1xuICAgICAgdmFyIHBlclBhZ2UgPSBvcHRpb25zLnBlclBhZ2U7XG4gICAgICB2YXIgaW5kZXggPSBwYWdlICogcGVyUGFnZTtcbiAgICAgIGluZGV4ID0gaW5kZXggLSAodGhpcy5wYWdlTGVuZ3RoICogcGVyUGFnZSAtIGxlbmd0aCkgKiBmbG9vcihpbmRleCAvIGxlbmd0aCk7IC8vIEFkanVzdG1lbnQgZm9yIHRoZSBsYXN0IHBhZ2UuXG5cbiAgICAgIGlmIChsZW5ndGggLSBwZXJQYWdlIDw9IGluZGV4ICYmIGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgIGluZGV4ID0gbGVuZ3RoIC0gcGVyUGFnZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIENvbXB1dGUgcGFnZSBudW1iZXIgZnJvbSB0aGUgZ2l2ZW4gc2xpZGUgaW5kZXguXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gU2xpZGUgaW5kZXguXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIEEgY29tcHV0ZWQgcGFnZSBudW1iZXIuXHJcbiAgICAgKi9cbiAgICB0b1BhZ2U6IGZ1bmN0aW9uIHRvUGFnZShpbmRleCkge1xuICAgICAgaWYgKGhhc0ZvY3VzKCkpIHtcbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgfVxuXG4gICAgICB2YXIgbGVuZ3RoID0gU3BsaWRlLmxlbmd0aDtcbiAgICAgIHZhciBwZXJQYWdlID0gb3B0aW9ucy5wZXJQYWdlOyAvLyBNYWtlIHRoZSBsYXN0IFwicGVyUGFnZVwiIG51bWJlciBvZiBzbGlkZXMgYmVsb25nIHRvIHRoZSBsYXN0IHBhZ2UuXG5cbiAgICAgIGlmIChsZW5ndGggLSBwZXJQYWdlIDw9IGluZGV4ICYmIGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmbG9vcigobGVuZ3RoIC0gMSkgLyBwZXJQYWdlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZsb29yKGluZGV4IC8gcGVyUGFnZSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogVHJpbSB0aGUgZ2l2ZW4gaW5kZXggYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IG1vZGUuXHJcbiAgICAgKiBJbmRleCBiZWluZyByZXR1cm5lZCBjb3VsZCBiZSBsZXNzIHRoYW4gMCBvciBncmVhdGVyIHRoYW4gdGhlIGxlbmd0aCBpbiBMb29wIG1vZGUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gQW4gaW5kZXggYmVpbmcgdHJpbW1lZC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gQSB0cmltbWVkIGluZGV4LlxyXG4gICAgICovXG4gICAgdHJpbTogZnVuY3Rpb24gdHJpbShpbmRleCkge1xuICAgICAgaWYgKCFpc0xvb3ApIHtcbiAgICAgICAgaW5kZXggPSBvcHRpb25zLnJld2luZCA/IHRoaXMucmV3aW5kKGluZGV4KSA6IGJldHdlZW4oaW5kZXgsIDAsIHRoaXMuZWRnZUluZGV4KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJld2luZCB0aGUgZ2l2ZW4gaW5kZXggaWYgaXQncyBvdXQgb2YgcmFuZ2UuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gQW4gaW5kZXguXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIEEgcmV3b3VuZCBpbmRleC5cclxuICAgICAqL1xuICAgIHJld2luZDogZnVuY3Rpb24gcmV3aW5kKGluZGV4KSB7XG4gICAgICB2YXIgZWRnZSA9IHRoaXMuZWRnZUluZGV4O1xuXG4gICAgICBpZiAoaXNMb29wKSB7XG4gICAgICAgIHdoaWxlIChpbmRleCA+IGVkZ2UpIHtcbiAgICAgICAgICBpbmRleCAtPSBlZGdlICsgMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChpbmRleCA8IDApIHtcbiAgICAgICAgICBpbmRleCArPSBlZGdlICsgMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGluZGV4ID4gZWRnZSkge1xuICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICBpbmRleCA9IGVkZ2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRoZSBkaXJlY3Rpb24gaXMgXCJydGxcIiBvciBub3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gLSBUcnVlIGlmIFwicnRsXCIgb3IgZmFsc2UgaWYgbm90LlxyXG4gICAgICovXG4gICAgaXNSdGw6IGZ1bmN0aW9uIGlzUnRsKCkge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuZGlyZWN0aW9uID09PSBSVEw7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBwYWdlIGxlbmd0aC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gTWF4IHBhZ2UgbnVtYmVyLlxyXG4gICAgICovXG4gICAgZ2V0IHBhZ2VMZW5ndGgoKSB7XG4gICAgICB2YXIgbGVuZ3RoID0gU3BsaWRlLmxlbmd0aDtcbiAgICAgIHJldHVybiBoYXNGb2N1cygpID8gbGVuZ3RoIDogTWF0aC5jZWlsKGxlbmd0aCAvIG9wdGlvbnMucGVyUGFnZSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBlZGdlIGluZGV4LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBFZGdlIGluZGV4LlxyXG4gICAgICovXG4gICAgZ2V0IGVkZ2VJbmRleCgpIHtcbiAgICAgIHZhciBsZW5ndGggPSBTcGxpZGUubGVuZ3RoO1xuXG4gICAgICBpZiAoIWxlbmd0aCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKGhhc0ZvY3VzKCkgfHwgb3B0aW9ucy5pc05hdmlnYXRpb24gfHwgaXNMb29wKSB7XG4gICAgICAgIHJldHVybiBsZW5ndGggLSAxO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGVuZ3RoIC0gb3B0aW9ucy5wZXJQYWdlO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgaW5kZXggb2YgdGhlIHByZXZpb3VzIHNsaWRlLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBUaGUgaW5kZXggb2YgdGhlIHByZXZpb3VzIHNsaWRlIGlmIGF2YWlsYWJsZS4gLTEgb3RoZXJ3aXNlLlxyXG4gICAgICovXG4gICAgZ2V0IHByZXZJbmRleCgpIHtcbiAgICAgIHZhciBwcmV2ID0gU3BsaWRlLmluZGV4IC0gMTtcblxuICAgICAgaWYgKGlzTG9vcCB8fCBvcHRpb25zLnJld2luZCkge1xuICAgICAgICBwcmV2ID0gdGhpcy5yZXdpbmQocHJldik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2ID4gLTEgPyBwcmV2IDogLTE7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBpbmRleCBvZiB0aGUgbmV4dCBzbGlkZS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gVGhlIGluZGV4IG9mIHRoZSBuZXh0IHNsaWRlIGlmIGF2YWlsYWJsZS4gLTEgb3RoZXJ3aXNlLlxyXG4gICAgICovXG4gICAgZ2V0IG5leHRJbmRleCgpIHtcbiAgICAgIHZhciBuZXh0ID0gU3BsaWRlLmluZGV4ICsgMTtcblxuICAgICAgaWYgKGlzTG9vcCB8fCBvcHRpb25zLnJld2luZCkge1xuICAgICAgICBuZXh0ID0gdGhpcy5yZXdpbmQobmV4dCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBTcGxpZGUuaW5kZXggPCBuZXh0ICYmIG5leHQgPD0gdGhpcy5lZGdlSW5kZXggfHwgbmV4dCA9PT0gMCA/IG5leHQgOiAtMTtcbiAgICB9XG5cbiAgfTtcbiAgLyoqXHJcbiAgICogTGlzdGVuIHRvIHNvbWUgZXZlbnRzLlxyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGJpbmQoKSB7XG4gICAgU3BsaWRlLm9uKCdtb3ZlJywgZnVuY3Rpb24gKG5ld0luZGV4KSB7XG4gICAgICBTcGxpZGUuaW5kZXggPSBuZXdJbmRleDtcbiAgICB9KS5vbigndXBkYXRlZCByZWZyZXNoJywgZnVuY3Rpb24gKG5ld09wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBuZXdPcHRpb25zIHx8IG9wdGlvbnM7XG4gICAgICBTcGxpZGUuaW5kZXggPSBiZXR3ZWVuKFNwbGlkZS5pbmRleCwgMCwgQ29udHJvbGxlci5lZGdlSW5kZXgpO1xuICAgIH0pO1xuICB9XG4gIC8qKlxyXG4gICAqIFZlcmlmeSBpZiB0aGUgZm9jdXMgb3B0aW9uIGlzIGF2YWlsYWJsZSBvciBub3QuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtib29sZWFufSAtIFRydWUgaWYgYSBzbGlkZXIgaGFzIHRoZSBmb2N1cyBvcHRpb24uXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBoYXNGb2N1cygpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5mb2N1cyAhPT0gZmFsc2U7XG4gIH1cbiAgLyoqXHJcbiAgICogUmV0dXJuIHRoZSBuZXh0IG9yIHByZXZpb3VzIHBhZ2UgaW5kZXggY29tcHV0ZWQgYnkgdGhlIHBhZ2UgbnVtYmVyIGFuZCBjdXJyZW50IGluZGV4LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9ICBudW1iZXIgLSBTcGVjaWZ5IHRoZSBwYWdlIG51bWJlci5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gIGluZGV4ICAtIEN1cnJlbnQgaW5kZXguXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBwcmV2ICAgLSBQcmV2IG9yIG5leHQuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gU2xpZGUgaW5kZXguXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBwYXJzZVBhZ2UobnVtYmVyLCBpbmRleCwgcHJldikge1xuICAgIGlmIChudW1iZXIgPiAtMSkge1xuICAgICAgcmV0dXJuIENvbnRyb2xsZXIudG9JbmRleChudW1iZXIpO1xuICAgIH1cblxuICAgIHZhciBwZXJNb3ZlID0gb3B0aW9ucy5wZXJNb3ZlO1xuICAgIHZhciBzaWduID0gcHJldiA/IC0xIDogMTtcblxuICAgIGlmIChwZXJNb3ZlKSB7XG4gICAgICByZXR1cm4gaW5kZXggKyBwZXJNb3ZlICogc2lnbjtcbiAgICB9XG5cbiAgICByZXR1cm4gQ29udHJvbGxlci50b0luZGV4KENvbnRyb2xsZXIudG9QYWdlKGluZGV4KSArIHNpZ24pO1xuICB9XG5cbiAgcmV0dXJuIENvbnRyb2xsZXI7XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL3RyYWNrL2luZGV4LmpzXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgbW92aW5nIGxpc3QgaW4gdGhlIHRyYWNrLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuXG5cblxudmFyIGFicyA9IE1hdGguYWJzO1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIG1vdmluZyBsaXN0IGluIHRoZSB0cmFjay5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudHMgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IHRyYWNrID0gKGZ1bmN0aW9uIChTcGxpZGUsIENvbXBvbmVudHMpIHtcbiAgLyoqXHJcbiAgICogSG9sZCB0aGUgTGF5b3V0IGNvbXBvbmVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG4gIHZhciBMYXlvdXQ7XG4gIC8qKlxyXG4gICAqIEhvbGQgdGhlIExheW91dCBjb21wb25lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBFbGVtZW50cztcbiAgLyoqXHJcbiAgICogU3RvcmUgdGhlIGxpc3QgZWxlbWVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtFbGVtZW50fVxyXG4gICAqL1xuXG4gIHZhciBsaXN0O1xuICAvKipcclxuICAgKiBXaGV0aGVyIHRoZSBjdXJyZW50IGRpcmVjdGlvbiBpcyB2ZXJ0aWNhbCBvciBub3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cblxuICB2YXIgaXNWZXJ0aWNhbCA9IFNwbGlkZS5vcHRpb25zLmRpcmVjdGlvbiA9PT0gVFRCO1xuICAvKipcclxuICAgKiBXaGV0aGVyIHRoZSBzbGlkZXIgdHlwZSBpcyBGQURFIG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuXG4gIHZhciBpc0ZhZGUgPSBTcGxpZGUuaXMoRkFERSk7XG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdGhlIHNsaWRlciBkaXJlY3Rpb24gaXMgUlRMIG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuXG4gIHZhciBpc1JUTCA9IFNwbGlkZS5vcHRpb25zLmRpcmVjdGlvbiA9PT0gUlRMO1xuICAvKipcclxuICAgKiBUaGlzIHdpbGwgYmUgdHJ1ZSB3aGlsZSB0cmFuc2l0aW9uaW5nIGZyb20gdGhlIGxhc3QgaW5kZXggdG8gdGhlIGZpcnN0IG9uZS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuXG4gIHZhciBpc0xvb3BQZW5kaW5nID0gZmFsc2U7XG4gIC8qKlxyXG4gICAqIFNpZ24gZm9yIHRoZSBkaXJlY3Rpb24uIE9ubHkgUlRMIG1vZGUgdXNlcyB0aGUgcG9zaXRpdmUgc2lnbi5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXG5cbiAgdmFyIHNpZ24gPSBpc1JUTCA/IDEgOiAtMTtcbiAgLyoqXHJcbiAgICogVHJhY2sgY29tcG9uZW50IG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIFRyYWNrID0ge1xuICAgIC8qKlxyXG4gICAgICogTWFrZSBwdWJsaWMgdGhlIHNpZ24gZGVmaW5lZCBsb2NhbGx5LlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cbiAgICBzaWduOiBzaWduLFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICBFbGVtZW50cyA9IENvbXBvbmVudHMuRWxlbWVudHM7XG4gICAgICBMYXlvdXQgPSBDb21wb25lbnRzLkxheW91dDtcbiAgICAgIGxpc3QgPSBFbGVtZW50cy5saXN0O1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIENhbGxlZCBhZnRlciB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKiBUaGUgcmVzaXplIGV2ZW50IG11c3QgYmUgcmVnaXN0ZXJlZCBhZnRlciB0aGUgTGF5b3V0J3Mgb25lIGlzIGRvbmUuXHJcbiAgICAgKi9cbiAgICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKCFpc0ZhZGUpIHtcbiAgICAgICAgdGhpcy5qdW1wKDApO1xuICAgICAgICBTcGxpZGUub24oJ21vdW50ZWQgcmVzaXplIHVwZGF0ZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMuanVtcChTcGxpZGUuaW5kZXgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBHbyB0byB0aGUgZ2l2ZW4gZGVzdGluYXRpb24gaW5kZXguXHJcbiAgICAgKiBBZnRlciBhcnJpdmluZyB0aGVyZSwgdGhlIHRyYWNrIGlzIGp1bXAgdG8gdGhlIG5ldyBpbmRleCB3aXRob3V0IGFuaW1hdGlvbiwgbWFpbmx5IGZvciBsb29wIG1vZGUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9ICBkZXN0SW5kZXggLSBBIGRlc3RpbmF0aW9uIGluZGV4LlxyXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGNhbiBiZSBuZWdhdGl2ZSBvciBncmVhdGVyIHRoYW4gc2xpZGVzIGxlbmd0aCBmb3IgcmVhY2hpbmcgY2xvbmVzLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9ICBuZXdJbmRleCAgLSBBbiBhY3R1YWwgbmV3IGluZGV4LiBUaGV5IGFyZSBhbHdheXMgc2FtZSBpbiBTbGlkZSBhbmQgUmV3aW5kIG1vZGUuXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNpbGVudGx5ICAtIElmIHRydWUsIHN1cHByZXNzIGVtaXR0aW5nIGV2ZW50cy5cclxuICAgICAqL1xuICAgIGdvOiBmdW5jdGlvbiBnbyhkZXN0SW5kZXgsIG5ld0luZGV4LCBzaWxlbnRseSkge1xuICAgICAgdmFyIG5ld1Bvc2l0aW9uID0gZ2V0VHJpbW1lZFBvc2l0aW9uKGRlc3RJbmRleCk7XG4gICAgICB2YXIgcHJldkluZGV4ID0gU3BsaWRlLmluZGV4OyAvLyBQcmV2ZW50IGFueSBhY3Rpb25zIHdoaWxlIHRyYW5zaXRpb25pbmcgZnJvbSB0aGUgbGFzdCBpbmRleCB0byB0aGUgZmlyc3Qgb25lIGZvciBqdW1wLlxuXG4gICAgICBpZiAoU3BsaWRlLlN0YXRlLmlzKE1PVklORykgJiYgaXNMb29wUGVuZGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlzTG9vcFBlbmRpbmcgPSBkZXN0SW5kZXggIT09IG5ld0luZGV4O1xuXG4gICAgICBpZiAoIXNpbGVudGx5KSB7XG4gICAgICAgIFNwbGlkZS5lbWl0KCdtb3ZlJywgbmV3SW5kZXgsIHByZXZJbmRleCwgZGVzdEluZGV4KTtcbiAgICAgIH1cblxuICAgICAgaWYgKE1hdGguYWJzKG5ld1Bvc2l0aW9uIC0gdGhpcy5wb3NpdGlvbikgPj0gMSB8fCBpc0ZhZGUpIHtcbiAgICAgICAgQ29tcG9uZW50cy5UcmFuc2l0aW9uLnN0YXJ0KGRlc3RJbmRleCwgbmV3SW5kZXgsIHByZXZJbmRleCwgdGhpcy50b0Nvb3JkKG5ld1Bvc2l0aW9uKSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIG9uVHJhbnNpdGlvbkVuZChkZXN0SW5kZXgsIG5ld0luZGV4LCBwcmV2SW5kZXgsIHNpbGVudGx5KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZGVzdEluZGV4ICE9PSBwcmV2SW5kZXggJiYgU3BsaWRlLm9wdGlvbnMudHJpbVNwYWNlID09PSAnbW92ZScpIHtcbiAgICAgICAgICBDb21wb25lbnRzLkNvbnRyb2xsZXIuZ28oZGVzdEluZGV4ICsgZGVzdEluZGV4IC0gcHJldkluZGV4LCBzaWxlbnRseSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb25UcmFuc2l0aW9uRW5kKGRlc3RJbmRleCwgbmV3SW5kZXgsIHByZXZJbmRleCwgc2lsZW50bHkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogTW92ZSB0aGUgdHJhY2sgdG8gdGhlIHNwZWNpZmllZCBpbmRleC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBBIGRlc3RpbmF0aW9uIGluZGV4IHdoZXJlIHRoZSB0cmFjayBqdW1wcy5cclxuICAgICAqL1xuICAgIGp1bXA6IGZ1bmN0aW9uIGp1bXAoaW5kZXgpIHtcbiAgICAgIHRoaXMudHJhbnNsYXRlKGdldFRyaW1tZWRQb3NpdGlvbihpbmRleCkpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgbGlzdCBwb3NpdGlvbiBieSBDU1MgdHJhbnNsYXRlIHByb3BlcnR5LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwb3NpdGlvbiAtIEEgbmV3IHBvc2l0aW9uIHZhbHVlLlxyXG4gICAgICovXG4gICAgdHJhbnNsYXRlOiBmdW5jdGlvbiB0cmFuc2xhdGUocG9zaXRpb24pIHtcbiAgICAgIGFwcGx5U3R5bGUobGlzdCwge1xuICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlXCIgKyAoaXNWZXJ0aWNhbCA/ICdZJyA6ICdYJykgKyBcIihcIiArIHBvc2l0aW9uICsgXCJweClcIlxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogQ2FuY2VsIHRoZSB0cmFuc2l0aW9uIGFuZCBzZXQgdGhlIGxpc3QgcG9zaXRpb24uXHJcbiAgICAgKiBBbHNvLCBsb29wIHRoZSBzbGlkZXIgaWYgbmVjZXNzYXJ5LlxyXG4gICAgICovXG4gICAgY2FuY2VsOiBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgICBpZiAoU3BsaWRlLmlzKExPT1ApKSB7XG4gICAgICAgIHRoaXMuc2hpZnQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEVuc3VyZSB0aGUgY3VycmVudCBwb3NpdGlvbi5cbiAgICAgICAgdGhpcy50cmFuc2xhdGUodGhpcy5wb3NpdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGFwcGx5U3R5bGUobGlzdCwge1xuICAgICAgICB0cmFuc2l0aW9uOiAnJ1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogU2hpZnQgdGhlIHNsaWRlciBpZiBpdCBleGNlZWRzIGJvcmRlcnMgb24gdGhlIGVkZ2UuXHJcbiAgICAgKi9cbiAgICBzaGlmdDogZnVuY3Rpb24gc2hpZnQoKSB7XG4gICAgICB2YXIgcG9zaXRpb24gPSBhYnModGhpcy5wb3NpdGlvbik7XG4gICAgICB2YXIgbGVmdCA9IGFicyh0aGlzLnRvUG9zaXRpb24oMCkpO1xuICAgICAgdmFyIHJpZ2h0ID0gYWJzKHRoaXMudG9Qb3NpdGlvbihTcGxpZGUubGVuZ3RoKSk7XG4gICAgICB2YXIgaW5uZXJTaXplID0gcmlnaHQgLSBsZWZ0O1xuXG4gICAgICBpZiAocG9zaXRpb24gPCBsZWZ0KSB7XG4gICAgICAgIHBvc2l0aW9uICs9IGlubmVyU2l6ZTtcbiAgICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPiByaWdodCkge1xuICAgICAgICBwb3NpdGlvbiAtPSBpbm5lclNpemU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudHJhbnNsYXRlKHNpZ24gKiBwb3NpdGlvbik7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogVHJpbSByZWR1bmRhbnQgc3BhY2VzIG9uIHRoZSBsZWZ0IG9yIHJpZ2h0IGVkZ2UgaWYgbmVjZXNzYXJ5LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwb3NpdGlvbiAtIFBvc2l0aW9uIHZhbHVlIHRvIGJlIHRyaW1tZWQuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIFRyaW1tZWQgcG9zaXRpb24uXHJcbiAgICAgKi9cbiAgICB0cmltOiBmdW5jdGlvbiB0cmltKHBvc2l0aW9uKSB7XG4gICAgICBpZiAoIVNwbGlkZS5vcHRpb25zLnRyaW1TcGFjZSB8fCBTcGxpZGUuaXMoTE9PUCkpIHtcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgZWRnZSA9IHNpZ24gKiAoTGF5b3V0LnRvdGFsU2l6ZSgpIC0gTGF5b3V0LnNpemUgLSBMYXlvdXQuZ2FwKTtcbiAgICAgIHJldHVybiBiZXR3ZWVuKHBvc2l0aW9uLCBlZGdlLCAwKTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxjdWxhdGUgdGhlIGNsb3Nlc3Qgc2xpZGUgaW5kZXggZnJvbSB0aGUgZ2l2ZW4gcG9zaXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uIC0gQSBwb3NpdGlvbiBjb252ZXJ0ZWQgdG8gYW4gc2xpZGUgaW5kZXguXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIFRoZSBjbG9zZXN0IHNsaWRlIGluZGV4LlxyXG4gICAgICovXG4gICAgdG9JbmRleDogZnVuY3Rpb24gdG9JbmRleChwb3NpdGlvbikge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgbWluRGlzdGFuY2UgPSBJbmZpbml0eTtcbiAgICAgIEVsZW1lbnRzLmdldFNsaWRlcyh0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgICB2YXIgc2xpZGVJbmRleCA9IFNsaWRlLmluZGV4O1xuICAgICAgICB2YXIgZGlzdGFuY2UgPSBhYnMoX3RoaXMyLnRvUG9zaXRpb24oc2xpZGVJbmRleCkgLSBwb3NpdGlvbik7XG5cbiAgICAgICAgaWYgKGRpc3RhbmNlIDwgbWluRGlzdGFuY2UpIHtcbiAgICAgICAgICBtaW5EaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgICAgICAgIGluZGV4ID0gc2xpZGVJbmRleDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIGNvb3JkaW5hdGVzIG9iamVjdCBieSB0aGUgZ2l2ZW4gcG9zaXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uIC0gQSBwb3NpdGlvbiB2YWx1ZS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IC0gQSBjb29yZGluYXRlcyBvYmplY3QuXHJcbiAgICAgKi9cbiAgICB0b0Nvb3JkOiBmdW5jdGlvbiB0b0Nvb3JkKHBvc2l0aW9uKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB4OiBpc1ZlcnRpY2FsID8gMCA6IHBvc2l0aW9uLFxuICAgICAgICB5OiBpc1ZlcnRpY2FsID8gcG9zaXRpb24gOiAwXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIENhbGN1bGF0ZSB0aGUgdHJhY2sgcG9zaXRpb24gYnkgYSBzbGlkZSBpbmRleC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBTbGlkZSBpbmRleC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IC0gQ2FsY3VsYXRlZCBwb3NpdGlvbi5cclxuICAgICAqL1xuICAgIHRvUG9zaXRpb246IGZ1bmN0aW9uIHRvUG9zaXRpb24oaW5kZXgpIHtcbiAgICAgIHZhciBwb3NpdGlvbiA9IExheW91dC50b3RhbFNpemUoaW5kZXgpIC0gTGF5b3V0LnNsaWRlU2l6ZShpbmRleCkgLSBMYXlvdXQuZ2FwO1xuICAgICAgcmV0dXJuIHNpZ24gKiAocG9zaXRpb24gKyB0aGlzLm9mZnNldChpbmRleCkpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgY3VycmVudCBvZmZzZXQgdmFsdWUsIGNvbnNpZGVyaW5nIGRpcmVjdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gT2Zmc2V0IGFtb3VudC5cclxuICAgICAqL1xuICAgIG9mZnNldDogZnVuY3Rpb24gb2Zmc2V0KGluZGV4KSB7XG4gICAgICB2YXIgZm9jdXMgPSBTcGxpZGUub3B0aW9ucy5mb2N1cztcbiAgICAgIHZhciBzbGlkZVNpemUgPSBMYXlvdXQuc2xpZGVTaXplKGluZGV4KTtcblxuICAgICAgaWYgKGZvY3VzID09PSAnY2VudGVyJykge1xuICAgICAgICByZXR1cm4gLShMYXlvdXQuc2l6ZSAtIHNsaWRlU2l6ZSkgLyAyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gLShwYXJzZUludChmb2N1cykgfHwgMCkgKiAoc2xpZGVTaXplICsgTGF5b3V0LmdhcCk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBjdXJyZW50IHBvc2l0aW9uLlxyXG4gICAgICogVGhpcyByZXR1cm5zIHRoZSBjb3JyZWN0IHBvc2l0aW9uIGV2ZW4gd2hpbGUgdHJhbnNpdGlvbmluZyBieSBDU1MuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIEN1cnJlbnQgcG9zaXRpb24uXHJcbiAgICAgKi9cbiAgICBnZXQgcG9zaXRpb24oKSB7XG4gICAgICB2YXIgcHJvcCA9IGlzVmVydGljYWwgPyAndG9wJyA6IGlzUlRMID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgICAgIHJldHVybiBnZXRSZWN0KGxpc3QpW3Byb3BdIC0gKGdldFJlY3QoRWxlbWVudHMudHJhY2spW3Byb3BdIC0gTGF5b3V0LnBhZGRpbmdbcHJvcF0gKiBzaWduKTtcbiAgICB9XG5cbiAgfTtcbiAgLyoqXHJcbiAgICogQ2FsbGVkIHdoZW5ldmVyIHNsaWRlcyBhcnJpdmUgYXQgYSBkZXN0aW5hdGlvbi5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSAgZGVzdEluZGV4IC0gQSBkZXN0aW5hdGlvbiBpbmRleC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gIG5ld0luZGV4ICAtIEEgbmV3IGluZGV4LlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSAgcHJldkluZGV4IC0gQSBwcmV2aW91cyBpbmRleC5cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNpbGVudGx5ICAtIElmIHRydWUsIHN1cHByZXNzIGVtaXR0aW5nIGV2ZW50cy5cclxuICAgKi9cblxuICBmdW5jdGlvbiBvblRyYW5zaXRpb25FbmQoZGVzdEluZGV4LCBuZXdJbmRleCwgcHJldkluZGV4LCBzaWxlbnRseSkge1xuICAgIGFwcGx5U3R5bGUobGlzdCwge1xuICAgICAgdHJhbnNpdGlvbjogJydcbiAgICB9KTtcbiAgICBpc0xvb3BQZW5kaW5nID0gZmFsc2U7XG5cbiAgICBpZiAoIWlzRmFkZSkge1xuICAgICAgVHJhY2suanVtcChuZXdJbmRleCk7XG4gICAgfVxuXG4gICAgaWYgKCFzaWxlbnRseSkge1xuICAgICAgU3BsaWRlLmVtaXQoJ21vdmVkJywgbmV3SW5kZXgsIHByZXZJbmRleCwgZGVzdEluZGV4KTtcbiAgICB9XG4gIH1cbiAgLyoqXHJcbiAgICogQ29udmVydCBpbmRleCB0byB0aGUgdHJpbW1lZCBwb3NpdGlvbi5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge251bWJlcn0gLSBUcmltbWVkIHBvc2l0aW9uLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gZ2V0VHJpbW1lZFBvc2l0aW9uKGluZGV4KSB7XG4gICAgcmV0dXJuIFRyYWNrLnRyaW0oVHJhY2sudG9Qb3NpdGlvbihpbmRleCkpO1xuICB9XG5cbiAgcmV0dXJuIFRyYWNrO1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9jbG9uZXMvaW5kZXguanNcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBjbG9uaW5nIHNvbWUgc2xpZGVzIGZvciBcImxvb3BcIiBtb2RlIG9mIHRoZSB0cmFjay5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cblxuXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgY2xvbmluZyBzb21lIHNsaWRlcyBmb3IgXCJsb29wXCIgbW9kZSBvZiB0aGUgdHJhY2suXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgICAgIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBDb21wb25lbnRzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgY29tcG9uZW50cy5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBjbG9uZXMgPSAoZnVuY3Rpb24gKFNwbGlkZSwgQ29tcG9uZW50cykge1xuICAvKipcclxuICAgKiBTdG9yZSBpbmZvcm1hdGlvbiBvZiBhbGwgY2xvbmVzLlxyXG4gICAqXHJcbiAgICogQHR5cGUge0FycmF5fVxyXG4gICAqL1xuICB2YXIgY2xvbmVzID0gW107XG4gIC8qKlxyXG4gICAqIFN0b3JlIHRoZSBjdXJyZW50IGNsb25lIGNvdW50IG9uIG9uZSBzaWRlLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cblxuICB2YXIgY2xvbmVDb3VudCA9IDA7XG4gIC8qKlxyXG4gICAqIEtlZXAgRWxlbWVudHMgY29tcG9uZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgRWxlbWVudHMgPSBDb21wb25lbnRzLkVsZW1lbnRzO1xuICAvKipcclxuICAgKiBDbG9uZXMgY29tcG9uZW50IG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIENsb25lcyA9IHtcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmIChTcGxpZGUuaXMoTE9PUCkpIHtcbiAgICAgICAgaW5pdCgpO1xuICAgICAgICBTcGxpZGUub24oJ3JlZnJlc2g6YmVmb3JlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgfSkub24oJ3JlZnJlc2gnLCBpbml0KS5vbigncmVzaXplJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChjbG9uZUNvdW50ICE9PSBnZXRDbG9uZUNvdW50KCkpIHtcbiAgICAgICAgICAgIC8vIERlc3Ryb3kgYmVmb3JlIHJlZnJlc2ggbm90IHRvIGNvbGxlY3QgY2xvbmVzIGJ5IHRoZSBFbGVtZW50cyBjb21wb25lbnQuXG4gICAgICAgICAgICBfdGhpcy5kZXN0cm95KCk7XG5cbiAgICAgICAgICAgIFNwbGlkZS5yZWZyZXNoKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBEZXN0cm95LlxyXG4gICAgICovXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIGRvbV9yZW1vdmUoY2xvbmVzKTtcbiAgICAgIGNsb25lcyA9IFtdO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiBhbGwgY2xvbmVzLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge0VsZW1lbnRbXX0gLSBDbG9uZWQgZWxlbWVudHMuXHJcbiAgICAgKi9cbiAgICBnZXQgY2xvbmVzKCkge1xuICAgICAgcmV0dXJuIGNsb25lcztcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gY2xvbmUgbGVuZ3RoLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBBIGxlbmd0aCBvZiBjbG9uZXMuXHJcbiAgICAgKi9cbiAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgcmV0dXJuIGNsb25lcy5sZW5ndGg7XG4gICAgfVxuXG4gIH07XG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemF0aW9uLlxyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgQ2xvbmVzLmRlc3Ryb3koKTtcbiAgICBjbG9uZUNvdW50ID0gZ2V0Q2xvbmVDb3VudCgpO1xuICAgIGdlbmVyYXRlQ2xvbmVzKGNsb25lQ291bnQpO1xuICB9XG4gIC8qKlxyXG4gICAqIEdlbmVyYXRlIGFuZCBhcHBlbmQvcHJlcGVuZCBjbG9uZXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gY291bnQgLSBUaGUgaGFsZiBudW1iZXIgb2YgY2xvbmVzLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVDbG9uZXMoY291bnQpIHtcbiAgICB2YXIgbGVuZ3RoID0gRWxlbWVudHMubGVuZ3RoLFxuICAgICAgICByZWdpc3RlciA9IEVsZW1lbnRzLnJlZ2lzdGVyO1xuXG4gICAgaWYgKGxlbmd0aCkge1xuICAgICAgdmFyIHNsaWRlcyA9IEVsZW1lbnRzLnNsaWRlcztcblxuICAgICAgd2hpbGUgKHNsaWRlcy5sZW5ndGggPCBjb3VudCkge1xuICAgICAgICBzbGlkZXMgPSBzbGlkZXMuY29uY2F0KHNsaWRlcyk7XG4gICAgICB9IC8vIENsb25lcyBhZnRlciB0aGUgbGFzdCBlbGVtZW50LlxuXG5cbiAgICAgIHNsaWRlcy5zbGljZSgwLCBjb3VudCkuZm9yRWFjaChmdW5jdGlvbiAoZWxtLCBpbmRleCkge1xuICAgICAgICB2YXIgY2xvbmUgPSBjbG9uZURlZXBseShlbG0pO1xuICAgICAgICBhcHBlbmQoRWxlbWVudHMubGlzdCwgY2xvbmUpO1xuICAgICAgICBjbG9uZXMucHVzaChjbG9uZSk7XG4gICAgICAgIHJlZ2lzdGVyKGNsb25lLCBpbmRleCArIGxlbmd0aCwgaW5kZXggJSBsZW5ndGgpO1xuICAgICAgfSk7IC8vIENsb25lcyBiZWZvcmUgdGhlIGZpcnN0IGVsZW1lbnQuXG5cbiAgICAgIHNsaWRlcy5zbGljZSgtY291bnQpLmZvckVhY2goZnVuY3Rpb24gKGVsbSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGNsb25lID0gY2xvbmVEZWVwbHkoZWxtKTtcbiAgICAgICAgYmVmb3JlKGNsb25lLCBzbGlkZXNbMF0pO1xuICAgICAgICBjbG9uZXMucHVzaChjbG9uZSk7XG4gICAgICAgIHJlZ2lzdGVyKGNsb25lLCBpbmRleCAtIGNvdW50LCAobGVuZ3RoICsgaW5kZXggLSBjb3VudCAlIGxlbmd0aCkgJSBsZW5ndGgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8qKlxyXG4gICAqIFJldHVybiBoYWxmIGNvdW50IG9mIGNsb25lcyB0byBiZSBnZW5lcmF0ZWQuXHJcbiAgICogQ2xvbmUgY291bnQgaXMgZGV0ZXJtaW5lZCBieTpcclxuICAgKiAtIFwiY2xvbmVzXCIgdmFsdWUgaW4gdGhlIG9wdGlvbnMuXHJcbiAgICogLSBOdW1iZXIgb2Ygc2xpZGVzIHRoYXQgY2FuIGJlIHBsYWNlZCBpbiBhIHZpZXcgaW4gXCJmaXhlZFwiIG1vZGUuXHJcbiAgICogLSBNYXggcGFnZXMgYSBmbGljayBhY3Rpb24gY2FuIG1vdmUuXHJcbiAgICogLSBXaGV0aGVyIHRoZSBzbGlkZSBsZW5ndGggaXMgZW5vdWdoIGZvciBwZXJQYWdlLlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7bnVtYmVyfSAtIENvdW50IGZvciBjbG9uZXMuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBnZXRDbG9uZUNvdW50KCkge1xuICAgIHZhciBvcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG5cbiAgICBpZiAob3B0aW9ucy5jbG9uZXMpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmNsb25lcztcbiAgICB9IC8vIFVzZSB0aGUgc2xpZGUgbGVuZ3RoIGluIGF1dG9XaWR0aCBtb2RlIGJlY2F1c2UgdGhlIG51bWJlciBjYW5ub3QgYmUgY2FsY3VsYXRlZC5cblxuXG4gICAgdmFyIGJhc2VDb3VudCA9IG9wdGlvbnMuYXV0b1dpZHRoIHx8IG9wdGlvbnMuYXV0b0hlaWdodCA/IEVsZW1lbnRzLmxlbmd0aCA6IG9wdGlvbnMucGVyUGFnZTtcbiAgICB2YXIgZGltZW5zaW9uID0gb3B0aW9ucy5kaXJlY3Rpb24gPT09IFRUQiA/ICdIZWlnaHQnIDogJ1dpZHRoJztcbiAgICB2YXIgZml4ZWRTaXplID0gdG9QaXhlbChTcGxpZGUucm9vdCwgb3B0aW9uc1tcImZpeGVkXCIgKyBkaW1lbnNpb25dKTtcblxuICAgIGlmIChmaXhlZFNpemUpIHtcbiAgICAgIC8vIFJvdWdobHkgY2FsY3VsYXRlIHRoZSBjb3VudC4gVGhpcyBuZWVkcyBub3QgdG8gYmUgc3RyaWN0LlxuICAgICAgYmFzZUNvdW50ID0gTWF0aC5jZWlsKEVsZW1lbnRzLnRyYWNrW1wiY2xpZW50XCIgKyBkaW1lbnNpb25dIC8gZml4ZWRTaXplKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYmFzZUNvdW50ICogKG9wdGlvbnMuZHJhZyA/IG9wdGlvbnMuZmxpY2tNYXhQYWdlcyArIDEgOiAxKTtcbiAgfVxuICAvKipcclxuICAgKiBDbG9uZSBkZWVwbHkgdGhlIGdpdmVuIGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsbSAtIEFuIGVsZW1lbnQgYmVpbmcgZHVwbGljYXRlZC5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge05vZGV9IC0gQSBjbG9uZWQgbm9kZShlbGVtZW50KS5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGNsb25lRGVlcGx5KGVsbSkge1xuICAgIHZhciBjbG9uZSA9IGVsbS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgYWRkQ2xhc3MoY2xvbmUsIFNwbGlkZS5jbGFzc2VzLmNsb25lKTsgLy8gSUQgc2hvdWxkIG5vdCBiZSBkdXBsaWNhdGVkLlxuXG4gICAgcmVtb3ZlQXR0cmlidXRlKGNsb25lLCAnaWQnKTtcbiAgICByZXR1cm4gY2xvbmU7XG4gIH1cblxuICByZXR1cm4gQ2xvbmVzO1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9sYXlvdXQvZGlyZWN0aW9ucy9ob3Jpem9udGFsLmpzXG4vKipcclxuICogVGhlIHJlc29sdmVyIGNvbXBvbmVudCBmb3IgaG9yaXpvbnRhbCBsYXlvdXQuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG5cbi8qKlxyXG4gKiBUaGUgcmVzb2x2ZXIgY29tcG9uZW50IGZvciBob3Jpem9udGFsIGxheW91dC5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudHMgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIHJlc29sdmVyIG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgaG9yaXpvbnRhbCA9IChmdW5jdGlvbiAoU3BsaWRlLCBDb21wb25lbnRzKSB7XG4gIC8qKlxyXG4gICAqIEtlZXAgdGhlIEVsZW1lbnRzIGNvbXBvbmVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICovXG4gIHZhciBFbGVtZW50cyA9IENvbXBvbmVudHMuRWxlbWVudHM7XG4gIC8qKlxyXG4gICAqIEtlZXAgdGhlIHJvb3QgZWxlbWVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtFbGVtZW50fVxyXG4gICAqL1xuXG4gIHZhciByb290ID0gU3BsaWRlLnJvb3Q7XG4gIC8qKlxyXG4gICAqIEtlZXAgdGhlIHRyYWNrIGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RWxlbWVudH1cclxuICAgKi9cblxuICB2YXIgdHJhY2s7XG4gIC8qKlxyXG4gICAqIEtlZXAgdGhlIGxhdGVzdCBvcHRpb25zLlxyXG4gICAqXHJcbiAgICogQHR5cGUge0VsZW1lbnR9XHJcbiAgICovXG5cbiAgdmFyIG9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcbiAgcmV0dXJuIHtcbiAgICAvKipcclxuICAgICAqIE1hcmdpbiBwcm9wZXJ0eSBuYW1lLlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAgKi9cbiAgICBtYXJnaW46ICdtYXJnaW4nICsgKG9wdGlvbnMuZGlyZWN0aW9uID09PSBSVEwgPyAnTGVmdCcgOiAnUmlnaHQnKSxcblxuICAgIC8qKlxyXG4gICAgICogQWx3YXlzIDAgYmVjYXVzZSB0aGUgaGVpZ2h0IHdpbGwgYmUgZGV0ZXJtaW5lZCBieSBpbm5lciBjb250ZW50cy5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXG4gICAgaGVpZ2h0OiAwLFxuXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXphdGlvbi5cclxuICAgICAqL1xuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICB0aGlzLnJlc2l6ZSgpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJlc2l6ZSBnYXAgYW5kIHBhZGRpbmcuXHJcbiAgICAgKiBUaGlzIG11c3QgYmUgY2FsbGVkIG9uIGluaXQuXHJcbiAgICAgKi9cbiAgICByZXNpemU6IGZ1bmN0aW9uIHJlc2l6ZSgpIHtcbiAgICAgIG9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcbiAgICAgIHRyYWNrID0gRWxlbWVudHMudHJhY2s7XG4gICAgICB0aGlzLmdhcCA9IHRvUGl4ZWwocm9vdCwgb3B0aW9ucy5nYXApO1xuICAgICAgdmFyIHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmc7XG4gICAgICB2YXIgbGVmdCA9IHRvUGl4ZWwocm9vdCwgcGFkZGluZy5sZWZ0IHx8IHBhZGRpbmcpO1xuICAgICAgdmFyIHJpZ2h0ID0gdG9QaXhlbChyb290LCBwYWRkaW5nLnJpZ2h0IHx8IHBhZGRpbmcpO1xuICAgICAgdGhpcy5wYWRkaW5nID0ge1xuICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICByaWdodDogcmlnaHRcbiAgICAgIH07XG4gICAgICBhcHBseVN0eWxlKHRyYWNrLCB7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiB1bml0KGxlZnQpLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IHVuaXQocmlnaHQpXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdG90YWwgd2lkdGggZnJvbSB0aGUgbGVmdCBvZiB0aGUgbGlzdCB0byB0aGUgcmlnaHQgb2YgdGhlIHNsaWRlIHNwZWNpZmllZCBieSB0aGUgcHJvdmlkZWQgaW5kZXguXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gT3B0aW9uYWwuIEEgc2xpZGUgaW5kZXguIElmIHVuZGVmaW5lZCwgdG90YWwgd2lkdGggb2YgdGhlIHNsaWRlciB3aWxsIGJlIHJldHVybmVkLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBUb3RhbCB3aWR0aCB0byB0aGUgcmlnaHQgc2lkZSBvZiB0aGUgc3BlY2lmaWVkIHNsaWRlLCBvciAwIGZvciBhbiBpbnZhbGlkIGluZGV4LlxyXG4gICAgICovXG4gICAgdG90YWxXaWR0aDogZnVuY3Rpb24gdG90YWxXaWR0aChpbmRleCkge1xuICAgICAgaWYgKGluZGV4ID09PSB2b2lkIDApIHtcbiAgICAgICAgaW5kZXggPSBTcGxpZGUubGVuZ3RoIC0gMTtcbiAgICAgIH1cblxuICAgICAgdmFyIFNsaWRlID0gRWxlbWVudHMuZ2V0U2xpZGUoaW5kZXgpO1xuICAgICAgdmFyIHdpZHRoID0gMDtcblxuICAgICAgaWYgKFNsaWRlKSB7XG4gICAgICAgIHZhciBzbGlkZVJlY3QgPSBnZXRSZWN0KFNsaWRlLnNsaWRlKTtcbiAgICAgICAgdmFyIGxpc3RSZWN0ID0gZ2V0UmVjdChFbGVtZW50cy5saXN0KTtcblxuICAgICAgICBpZiAob3B0aW9ucy5kaXJlY3Rpb24gPT09IFJUTCkge1xuICAgICAgICAgIHdpZHRoID0gbGlzdFJlY3QucmlnaHQgLSBzbGlkZVJlY3QubGVmdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aWR0aCA9IHNsaWRlUmVjdC5yaWdodCAtIGxpc3RSZWN0LmxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICB3aWR0aCArPSB0aGlzLmdhcDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgc2xpZGUgd2lkdGggaW4gcHguXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gU2xpZGUgaW5kZXguXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIFRoZSBzbGlkZSB3aWR0aC5cclxuICAgICAqL1xuICAgIHNsaWRlV2lkdGg6IGZ1bmN0aW9uIHNsaWRlV2lkdGgoaW5kZXgpIHtcbiAgICAgIGlmIChvcHRpb25zLmF1dG9XaWR0aCkge1xuICAgICAgICB2YXIgU2xpZGUgPSBFbGVtZW50cy5nZXRTbGlkZShpbmRleCk7XG4gICAgICAgIHJldHVybiBTbGlkZSA/IFNsaWRlLnNsaWRlLm9mZnNldFdpZHRoIDogMDtcbiAgICAgIH1cblxuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucy5maXhlZFdpZHRoIHx8ICh0aGlzLndpZHRoICsgdGhpcy5nYXApIC8gb3B0aW9ucy5wZXJQYWdlIC0gdGhpcy5nYXA7XG4gICAgICByZXR1cm4gdG9QaXhlbChyb290LCB3aWR0aCk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBzbGlkZSBoZWlnaHQgaW4gcHguXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIFRoZSBzbGlkZSBoZWlnaHQuXHJcbiAgICAgKi9cbiAgICBzbGlkZUhlaWdodDogZnVuY3Rpb24gc2xpZGVIZWlnaHQoKSB7XG4gICAgICB2YXIgaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgfHwgb3B0aW9ucy5maXhlZEhlaWdodCB8fCB0aGlzLndpZHRoICogb3B0aW9ucy5oZWlnaHRSYXRpbztcbiAgICAgIHJldHVybiB0b1BpeGVsKHJvb3QsIGhlaWdodCk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHNsaWRlciB3aWR0aCB3aXRob3V0IHBhZGRpbmcuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIEN1cnJlbnQgc2xpZGVyIHdpZHRoLlxyXG4gICAgICovXG4gICAgZ2V0IHdpZHRoKCkge1xuICAgICAgcmV0dXJuIHRyYWNrLmNsaWVudFdpZHRoIC0gdGhpcy5wYWRkaW5nLmxlZnQgLSB0aGlzLnBhZGRpbmcucmlnaHQ7XG4gICAgfVxuXG4gIH07XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL2xheW91dC9kaXJlY3Rpb25zL3ZlcnRpY2FsLmpzXG4vKipcclxuICogVGhlIHJlc29sdmVyIGNvbXBvbmVudCBmb3IgdmVydGljYWwgbGF5b3V0LlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuXG4vKipcclxuICogVGhlIHJlc29sdmVyIGNvbXBvbmVudCBmb3IgdmVydGljYWwgbGF5b3V0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlICAgICAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gQ29tcG9uZW50cyAtIEFuIG9iamVjdCBjb250YWluaW5nIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgcmVzb2x2ZXIgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCB2ZXJ0aWNhbCA9IChmdW5jdGlvbiAoU3BsaWRlLCBDb21wb25lbnRzKSB7XG4gIC8qKlxyXG4gICAqIEtlZXAgdGhlIEVsZW1lbnRzIGNvbXBvbmVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICovXG4gIHZhciBFbGVtZW50cyA9IENvbXBvbmVudHMuRWxlbWVudHM7XG4gIC8qKlxyXG4gICAqIEtlZXAgdGhlIHJvb3QgZWxlbWVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtFbGVtZW50fVxyXG4gICAqL1xuXG4gIHZhciByb290ID0gU3BsaWRlLnJvb3Q7XG4gIC8qKlxyXG4gICAqIEtlZXAgdGhlIHRyYWNrIGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RWxlbWVudH1cclxuICAgKi9cblxuICB2YXIgdHJhY2s7XG4gIC8qKlxyXG4gICAqIEtlZXAgdGhlIGxhdGVzdCBvcHRpb25zLlxyXG4gICAqXHJcbiAgICogQHR5cGUge0VsZW1lbnR9XHJcbiAgICovXG5cbiAgdmFyIG9wdGlvbnM7XG4gIHJldHVybiB7XG4gICAgLyoqXHJcbiAgICAgKiBNYXJnaW4gcHJvcGVydHkgbmFtZS5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgICovXG4gICAgbWFyZ2luOiAnbWFyZ2luQm90dG9tJyxcblxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6YXRpb24uXHJcbiAgICAgKi9cbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXNpemUgZ2FwIGFuZCBwYWRkaW5nLlxyXG4gICAgICogVGhpcyBtdXN0IGJlIGNhbGxlZCBvbiBpbml0LlxyXG4gICAgICovXG4gICAgcmVzaXplOiBmdW5jdGlvbiByZXNpemUoKSB7XG4gICAgICBvcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG4gICAgICB0cmFjayA9IEVsZW1lbnRzLnRyYWNrO1xuICAgICAgdGhpcy5nYXAgPSB0b1BpeGVsKHJvb3QsIG9wdGlvbnMuZ2FwKTtcbiAgICAgIHZhciBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nO1xuICAgICAgdmFyIHRvcCA9IHRvUGl4ZWwocm9vdCwgcGFkZGluZy50b3AgfHwgcGFkZGluZyk7XG4gICAgICB2YXIgYm90dG9tID0gdG9QaXhlbChyb290LCBwYWRkaW5nLmJvdHRvbSB8fCBwYWRkaW5nKTtcbiAgICAgIHRoaXMucGFkZGluZyA9IHtcbiAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgIGJvdHRvbTogYm90dG9tXG4gICAgICB9O1xuICAgICAgYXBwbHlTdHlsZSh0cmFjaywge1xuICAgICAgICBwYWRkaW5nVG9wOiB1bml0KHRvcCksXG4gICAgICAgIHBhZGRpbmdCb3R0b206IHVuaXQoYm90dG9tKVxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRvdGFsIGhlaWdodCBmcm9tIHRoZSB0b3Agb2YgdGhlIGxpc3QgdG8gdGhlIGJvdHRvbSBvZiB0aGUgc2xpZGUgc3BlY2lmaWVkIGJ5IHRoZSBwcm92aWRlZCBpbmRleC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBPcHRpb25hbC4gQSBzbGlkZSBpbmRleC4gSWYgdW5kZWZpbmVkLCB0b3RhbCBoZWlnaHQgb2YgdGhlIHNsaWRlciB3aWxsIGJlIHJldHVybmVkLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBUb3RhbCBoZWlnaHQgdG8gdGhlIGJvdHRvbSBvZiB0aGUgc3BlY2lmaWVkIHNsaWRlLCBvciAwIGZvciBhbiBpbnZhbGlkIGluZGV4LlxyXG4gICAgICovXG4gICAgdG90YWxIZWlnaHQ6IGZ1bmN0aW9uIHRvdGFsSGVpZ2h0KGluZGV4KSB7XG4gICAgICBpZiAoaW5kZXggPT09IHZvaWQgMCkge1xuICAgICAgICBpbmRleCA9IFNwbGlkZS5sZW5ndGggLSAxO1xuICAgICAgfVxuXG4gICAgICB2YXIgU2xpZGUgPSBFbGVtZW50cy5nZXRTbGlkZShpbmRleCk7XG5cbiAgICAgIGlmIChTbGlkZSkge1xuICAgICAgICByZXR1cm4gZ2V0UmVjdChTbGlkZS5zbGlkZSkuYm90dG9tIC0gZ2V0UmVjdChFbGVtZW50cy5saXN0KS50b3AgKyB0aGlzLmdhcDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDA7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBzbGlkZSB3aWR0aCBpbiBweC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gVGhlIHNsaWRlIHdpZHRoLlxyXG4gICAgICovXG4gICAgc2xpZGVXaWR0aDogZnVuY3Rpb24gc2xpZGVXaWR0aCgpIHtcbiAgICAgIHJldHVybiB0b1BpeGVsKHJvb3QsIG9wdGlvbnMuZml4ZWRXaWR0aCB8fCB0aGlzLndpZHRoKTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdGhlIHNsaWRlIGhlaWdodCBpbiBweC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBTbGlkZSBpbmRleC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gVGhlIHNsaWRlIGhlaWdodC5cclxuICAgICAqL1xuICAgIHNsaWRlSGVpZ2h0OiBmdW5jdGlvbiBzbGlkZUhlaWdodChpbmRleCkge1xuICAgICAgaWYgKG9wdGlvbnMuYXV0b0hlaWdodCkge1xuICAgICAgICB2YXIgU2xpZGUgPSBFbGVtZW50cy5nZXRTbGlkZShpbmRleCk7XG4gICAgICAgIHJldHVybiBTbGlkZSA/IFNsaWRlLnNsaWRlLm9mZnNldEhlaWdodCA6IDA7XG4gICAgICB9XG5cbiAgICAgIHZhciBoZWlnaHQgPSBvcHRpb25zLmZpeGVkSGVpZ2h0IHx8ICh0aGlzLmhlaWdodCArIHRoaXMuZ2FwKSAvIG9wdGlvbnMucGVyUGFnZSAtIHRoaXMuZ2FwO1xuICAgICAgcmV0dXJuIHRvUGl4ZWwocm9vdCwgaGVpZ2h0KTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gc2xpZGVyIHdpZHRoIHdpdGhvdXQgcGFkZGluZy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gQ3VycmVudCBzbGlkZXIgd2lkdGguXHJcbiAgICAgKi9cbiAgICBnZXQgd2lkdGgoKSB7XG4gICAgICByZXR1cm4gdHJhY2suY2xpZW50V2lkdGg7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHNsaWRlIGhlaWdodCB3aXRob3V0IHBhZGRpbmcuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIFNsaWRlciBoZWlnaHQuXHJcbiAgICAgKi9cbiAgICBnZXQgaGVpZ2h0KCkge1xuICAgICAgdmFyIGhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0IHx8IHRoaXMud2lkdGggKiBvcHRpb25zLmhlaWdodFJhdGlvO1xuICAgICAgZXhpc3QoaGVpZ2h0LCAnXCJoZWlnaHRcIiBvciBcImhlaWdodFJhdGlvXCIgaXMgbWlzc2luZy4nKTtcbiAgICAgIHJldHVybiB0b1BpeGVsKHJvb3QsIGhlaWdodCkgLSB0aGlzLnBhZGRpbmcudG9wIC0gdGhpcy5wYWRkaW5nLmJvdHRvbTtcbiAgICB9XG5cbiAgfTtcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL3V0aWxzL3RpbWUuanNcbi8qKlxyXG4gKiBBIHBhY2thZ2Ugb2YgdXRpbGl0eSBmdW5jdGlvbnMgcmVsYXRlZCB3aXRoIHRpbWUuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuLyoqXHJcbiAqIFNpbXBsZSB0aHJvdHRsZSBmdW5jdGlvbiB0aGF0IGNvbnRyb2xzIGhvdyBvZnRlbiB0aGUgZ2l2ZW4gZnVuY3Rpb24gaXMgZXhlY3V0ZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmMgLSBBIGZ1bmN0aW9uIHRvIGJlIHRocm90dGxlZC5cclxuICogQHBhcmFtIHtudW1iZXJ9ICAgd2FpdCAtIFRpbWUgaW4gbWlsbGlzZWNvbmQgZm9yIGludGVydmFsIG9mIGV4ZWN1dGlvbi5cclxuICpcclxuICogQHJldHVybiB7RnVuY3Rpb259IC0gQSBkZWJvdW5jZWQgZnVuY3Rpb24uXHJcbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCkge1xuICB2YXIgdGltZW91dDsgLy8gRGVjbGFyZSBmdW5jdGlvbiBieSB0aGUgXCJmdW5jdGlvblwiIGtleXdvcmQgdG8gcHJldmVudCBcInRoaXNcIiBmcm9tIGJlaW5nIGluaGVyaXRlZC5cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGltZW91dCkge1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jKCk7XG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgfSwgd2FpdCk7XG4gICAgfVxuICB9O1xufVxuLyoqXHJcbiAqIEN1c3RvbSBzZXRJbnRlcnZhbCBmdW5jdGlvbiB0aGF0IHByb3ZpZGVzIHByb2dyZXNzIHJhdGUgYXMgY2FsbGJhY2suXHJcbiAqXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gQSBjYWxsYmFjayBmdW5jdGlvbiBmaXJlZCBldmVyeSB0aW1lIHRoZSBpbnRlcnZhbCB0aW1lIHBhc3Nlcy5cclxuICogQHBhcmFtIHtudW1iZXJ9ICAgaW50ZXJ2YWwgLSBJbnRlcnZhbCBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMuXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb2dyZXNzIC0gQSBjYWxsYmFjayBmdW5jdGlvbiBmaXJlZCB3aGVuZXZlciB0aGUgcHJvZ3Jlc3MgZ29lcy5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIEFuIG9iamVjdCBjb250YWluaW5nIHBsYXkoKSBhbmQgcGF1c2UoKSBmdW5jdGlvbnMuXHJcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVJbnRlcnZhbChjYWxsYmFjaywgaW50ZXJ2YWwsIHByb2dyZXNzKSB7XG4gIHZhciBfd2luZG93ID0gd2luZG93LFxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gX3dpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG4gIHZhciBzdGFydCxcbiAgICAgIGVsYXBzZSxcbiAgICAgIHJhdGUsXG4gICAgICBfcGF1c2UgPSB0cnVlO1xuXG4gIHZhciBzdGVwID0gZnVuY3Rpb24gc3RlcCh0aW1lc3RhbXApIHtcbiAgICBpZiAoIV9wYXVzZSkge1xuICAgICAgaWYgKCFzdGFydCkge1xuICAgICAgICBzdGFydCA9IHRpbWVzdGFtcDtcblxuICAgICAgICBpZiAocmF0ZSAmJiByYXRlIDwgMSkge1xuICAgICAgICAgIHN0YXJ0IC09IHJhdGUgKiBpbnRlcnZhbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBlbGFwc2UgPSB0aW1lc3RhbXAgLSBzdGFydDtcbiAgICAgIHJhdGUgPSBlbGFwc2UgLyBpbnRlcnZhbDtcblxuICAgICAgaWYgKGVsYXBzZSA+PSBpbnRlcnZhbCkge1xuICAgICAgICBzdGFydCA9IDA7XG4gICAgICAgIHJhdGUgPSAxO1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgcHJvZ3Jlc3MocmF0ZSk7XG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwYXVzZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICBfcGF1c2UgPSB0cnVlO1xuICAgICAgc3RhcnQgPSAwO1xuICAgIH0sXG4gICAgcGxheTogZnVuY3Rpb24gcGxheShyZXNldCkge1xuICAgICAgc3RhcnQgPSAwO1xuXG4gICAgICBpZiAocmVzZXQpIHtcbiAgICAgICAgcmF0ZSA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChfcGF1c2UpIHtcbiAgICAgICAgX3BhdXNlID0gZmFsc2U7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9sYXlvdXQvaW5kZXguanNcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBoYW5kaW5nIHNsaWRlIGxheW91dHMgYW5kIHRoZWlyIHNpemVzLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuXG5cblxuXG5cbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBoYW5kaW5nIHNsaWRlIGxheW91dHMgYW5kIHRoZWlyIHNpemVzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlICAgICAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gQ29tcG9uZW50cyAtIEFuIG9iamVjdCBjb250YWluaW5nIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgY29tcG9uZW50IG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgbGF5b3V0ID0gKGZ1bmN0aW9uIChTcGxpZGUsIENvbXBvbmVudHMpIHtcbiAgLyoqXHJcbiAgICogS2VlcCB0aGUgRWxlbWVudHMgY29tcG9uZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cbiAgdmFyIEVsZW1lbnRzID0gQ29tcG9uZW50cy5FbGVtZW50cztcbiAgLyoqXHJcbiAgICogV2hldGhlciB0aGUgc2xpZGVyIGlzIHZlcnRpY2FsIG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuXG4gIHZhciBpc1ZlcnRpY2FsID0gU3BsaWRlLm9wdGlvbnMuZGlyZWN0aW9uID09PSBUVEI7XG4gIC8qKlxyXG4gICAqIExheW91dCBjb21wb25lbnQgb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgTGF5b3V0ID0gb2JqZWN0X2Fzc2lnbih7XG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICBiaW5kKCk7XG4gICAgICBpbml0KCk7IC8vIFRoZSB3b3JkIFwic2l6ZVwiIG1lYW5zIHdpZHRoIGZvciBhIGhvcml6b250YWwgc2xpZGVyIGFuZCBoZWlnaHQgZm9yIGEgdmVydGljYWwgc2xpZGVyLlxuXG4gICAgICB0aGlzLnRvdGFsU2l6ZSA9IGlzVmVydGljYWwgPyB0aGlzLnRvdGFsSGVpZ2h0IDogdGhpcy50b3RhbFdpZHRoO1xuICAgICAgdGhpcy5zbGlkZVNpemUgPSBpc1ZlcnRpY2FsID8gdGhpcy5zbGlkZUhlaWdodCA6IHRoaXMuc2xpZGVXaWR0aDtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBEZXN0cm95IHRoZSBjb21wb25lbnQuXHJcbiAgICAgKi9cbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgcmVtb3ZlQXR0cmlidXRlKFtFbGVtZW50cy5saXN0LCBFbGVtZW50cy50cmFja10sICdzdHlsZScpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgc2xpZGVyIGhlaWdodCBvbiB0aGUgdmVydGljYWwgbW9kZSBvciB3aWR0aCBvbiB0aGUgaG9yaXpvbnRhbCBtb2RlLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgICAqL1xuICAgIGdldCBzaXplKCkge1xuICAgICAgcmV0dXJuIGlzVmVydGljYWwgPyB0aGlzLmhlaWdodCA6IHRoaXMud2lkdGg7XG4gICAgfVxuXG4gIH0sIGlzVmVydGljYWwgPyB2ZXJ0aWNhbChTcGxpZGUsIENvbXBvbmVudHMpIDogaG9yaXpvbnRhbChTcGxpZGUsIENvbXBvbmVudHMpKTtcbiAgLyoqXHJcbiAgICogSW5pdCBzbGlkZXIgc3R5bGVzIGFjY29yZGluZyB0byBvcHRpb25zLlxyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgTGF5b3V0LmluaXQoKTtcbiAgICBhcHBseVN0eWxlKFNwbGlkZS5yb290LCB7XG4gICAgICBtYXhXaWR0aDogdW5pdChTcGxpZGUub3B0aW9ucy53aWR0aClcbiAgICB9KTtcbiAgICBFbGVtZW50cy5lYWNoKGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgU2xpZGUuc2xpZGUuc3R5bGVbTGF5b3V0Lm1hcmdpbl0gPSB1bml0KExheW91dC5nYXApO1xuICAgIH0pO1xuICAgIHJlc2l6ZSgpO1xuICB9XG4gIC8qKlxyXG4gICAqIExpc3RlbiB0aGUgcmVzaXplIG5hdGl2ZSBldmVudCB3aXRoIHRocm90dGxlLlxyXG4gICAqIEluaXRpYWxpemUgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQgb3Igb3B0aW9ucyBhcmUgdXBkYXRlZC5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGJpbmQoKSB7XG4gICAgU3BsaWRlLm9uKCdyZXNpemUgbG9hZCcsIHRocm90dGxlKGZ1bmN0aW9uICgpIHtcbiAgICAgIFNwbGlkZS5lbWl0KCdyZXNpemUnKTtcbiAgICB9LCBTcGxpZGUub3B0aW9ucy50aHJvdHRsZSksIHdpbmRvdykub24oJ3Jlc2l6ZScsIHJlc2l6ZSkub24oJ3VwZGF0ZWQgcmVmcmVzaCcsIGluaXQpO1xuICB9XG4gIC8qKlxyXG4gICAqIFJlc2l6ZSB0aGUgdHJhY2sgYW5kIHNsaWRlIGVsZW1lbnRzLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gcmVzaXplKCkge1xuICAgIHZhciBvcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG4gICAgTGF5b3V0LnJlc2l6ZSgpO1xuICAgIGFwcGx5U3R5bGUoRWxlbWVudHMudHJhY2ssIHtcbiAgICAgIGhlaWdodDogdW5pdChMYXlvdXQuaGVpZ2h0KVxuICAgIH0pO1xuICAgIHZhciBzbGlkZUhlaWdodCA9IG9wdGlvbnMuYXV0b0hlaWdodCA/IG51bGwgOiB1bml0KExheW91dC5zbGlkZUhlaWdodCgpKTtcbiAgICBFbGVtZW50cy5lYWNoKGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgYXBwbHlTdHlsZShTbGlkZS5jb250YWluZXIsIHtcbiAgICAgICAgaGVpZ2h0OiBzbGlkZUhlaWdodFxuICAgICAgfSk7XG4gICAgICBhcHBseVN0eWxlKFNsaWRlLnNsaWRlLCB7XG4gICAgICAgIHdpZHRoOiBvcHRpb25zLmF1dG9XaWR0aCA/IG51bGwgOiB1bml0KExheW91dC5zbGlkZVdpZHRoKFNsaWRlLmluZGV4KSksXG4gICAgICAgIGhlaWdodDogU2xpZGUuY29udGFpbmVyID8gbnVsbCA6IHNsaWRlSGVpZ2h0XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBTcGxpZGUuZW1pdCgncmVzaXplZCcpO1xuICB9XG5cbiAgcmV0dXJuIExheW91dDtcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvZHJhZy9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIHN1cHBvcnRpbmcgbW91c2UgZHJhZyBhbmQgc3dpcGUuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG5cblxuXG52YXIgZHJhZ19hYnMgPSBNYXRoLmFicztcbi8qKlxyXG4gKiBJZiB0aGUgYWJzb2x1dGUgdmVsb2NpdHkgaXMgZ3JlYXRlciB0aGFudCB0aGlzIHZhbHVlLFxyXG4gKiBhIHNsaWRlciBhbHdheXMgZ29lcyB0byBhIGRpZmZlcmVudCBzbGlkZSBhZnRlciBkcmFnLCBub3QgYWxsb3dlZCB0byBzdGF5IG9uIGEgY3VycmVudCBzbGlkZS5cclxuICovXG5cbnZhciBNSU5fVkVMT0NJVFkgPSAwLjE7XG4vKipcclxuICogQWRqdXN0IGhvdyBtdWNoIHRoZSB0cmFjayBjYW4gYmUgcHVsbGVkIG9uIHRoZSBmaXJzdCBvciBsYXN0IHBhZ2UuXHJcbiAqIFRoZSBsYXJnZXIgbnVtYmVyIHRoaXMgaXMsIHRoZSBmYXJ0aGVyIHRoZSB0cmFjayBtb3Zlcy5cclxuICogVGhpcyBzaG91bGQgYmUgYXJvdW5kIDUgLSA5LlxyXG4gKlxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKi9cblxudmFyIEZSSUNUSU9OX1JFRFVDRVIgPSA3O1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgc3VwcG9ydGluZyBtb3VzZSBkcmFnIGFuZCBzd2lwZS5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudHMgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IGRyYWcgPSAoZnVuY3Rpb24gKFNwbGlkZSwgQ29tcG9uZW50cykge1xuICAvKipcclxuICAgKiBTdG9yZSB0aGUgTW92ZSBjb21wb25lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuICB2YXIgVHJhY2sgPSBDb21wb25lbnRzLlRyYWNrO1xuICAvKipcclxuICAgKiBTdG9yZSB0aGUgQ29udHJvbGxlciBjb21wb25lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBDb250cm9sbGVyID0gQ29tcG9uZW50cy5Db250cm9sbGVyO1xuICAvKipcclxuICAgKiBDb29yZGluYXRlIG9mIHRoZSB0cmFjayBvbiBzdGFydGluZyBkcmFnLlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgc3RhcnRDb29yZDtcbiAgLyoqXHJcbiAgICogQW5hbHl6ZWQgaW5mbyBvbiBzdGFydGluZyBkcmFnLlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdHxudWxsfVxyXG4gICAqL1xuXG4gIHZhciBzdGFydEluZm87XG4gIC8qKlxyXG4gICAqIEFuYWx5emVkIGluZm8gYmVpbmcgdXBkYXRlZCB3aGlsZSBkcmFnZ2luZy9zd2lwaW5nLlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgY3VycmVudEluZm87XG4gIC8qKlxyXG4gICAqIERldGVybWluZSB3aGV0aGVyIHNsaWRlcyBhcmUgYmVpbmcgZHJhZ2dlZCBvciBub3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cblxuICB2YXIgaXNEcmFnZ2luZztcbiAgLyoqXHJcbiAgICogV2hldGhlciB0aGUgc2xpZGVyIGRpcmVjdGlvbiBpcyB2ZXJ0aWNhbCBvciBub3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cblxuICB2YXIgaXNWZXJ0aWNhbCA9IFNwbGlkZS5vcHRpb25zLmRpcmVjdGlvbiA9PT0gVFRCO1xuICAvKipcclxuICAgKiBBeGlzIGZvciB0aGUgZGlyZWN0aW9uLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cblxuICB2YXIgYXhpcyA9IGlzVmVydGljYWwgPyAneScgOiAneCc7XG4gIC8qKlxyXG4gICAqIERyYWcgY29tcG9uZW50IG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIERyYWcgPSB7XG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIGRyYWdnaW5nIGlzIGRpc2FibGVkIG9yIG5vdC5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqL1xuICAgIGRpc2FibGVkOiBmYWxzZSxcblxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIEVsZW1lbnRzID0gQ29tcG9uZW50cy5FbGVtZW50cztcbiAgICAgIHZhciB0cmFjayA9IEVsZW1lbnRzLnRyYWNrO1xuICAgICAgU3BsaWRlLm9uKCd0b3VjaHN0YXJ0IG1vdXNlZG93bicsIHN0YXJ0LCB0cmFjaykub24oJ3RvdWNobW92ZSBtb3VzZW1vdmUnLCBtb3ZlLCB0cmFjaywge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgfSkub24oJ3RvdWNoZW5kIHRvdWNoY2FuY2VsIG1vdXNlbGVhdmUgbW91c2V1cCBkcmFnZW5kJywgZW5kLCB0cmFjaykub24oJ21vdW50ZWQgcmVmcmVzaCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gUHJldmVudCBkcmFnZ2luZyBhbiBpbWFnZSBvciBhbmNob3IgaXRzZWxmLlxuICAgICAgICBlYWNoKEVsZW1lbnRzLmxpc3QucXVlcnlTZWxlY3RvckFsbCgnaW1nLCBhJyksIGZ1bmN0aW9uIChlbG0pIHtcbiAgICAgICAgICBTcGxpZGUub2ZmKCdkcmFnc3RhcnQnLCBlbG0pLm9uKCdkcmFnc3RhcnQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH0sIGVsbSwge1xuICAgICAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KS5vbignbW91bnRlZCB1cGRhdGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5kaXNhYmxlZCA9ICFTcGxpZGUub3B0aW9ucy5kcmFnO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICAvKipcclxuICAgKiBDYWxsZWQgd2hlbiB0aGUgdHJhY2sgc3RhcnRzIHRvIGJlIGRyYWdnZWQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1RvdWNoRXZlbnR8TW91c2VFdmVudH0gZSAtIFRvdWNoRXZlbnQgb3IgTW91c2VFdmVudCBvYmplY3QuXHJcbiAgICovXG5cbiAgZnVuY3Rpb24gc3RhcnQoZSkge1xuICAgIGlmICghRHJhZy5kaXNhYmxlZCAmJiAhaXNEcmFnZ2luZykge1xuICAgICAgLy8gVGhlc2UgcHJhbXMgYXJlIHVzZWQgdG8gZXZhbHVhdGUgd2hldGhlciB0aGUgc2xpZGVyIHNob3VsZCBzdGFydCBtb3ZpbmcuXG4gICAgICBpbml0KGUpO1xuICAgIH1cbiAgfVxuICAvKipcclxuICAgKiBJbml0aWFsaXplIHBhcmFtZXRlcnMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1RvdWNoRXZlbnR8TW91c2VFdmVudH0gZSAtIFRvdWNoRXZlbnQgb3IgTW91c2VFdmVudCBvYmplY3QuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBpbml0KGUpIHtcbiAgICBzdGFydENvb3JkID0gVHJhY2sudG9Db29yZChUcmFjay5wb3NpdGlvbik7XG4gICAgc3RhcnRJbmZvID0gYW5hbHl6ZShlLCB7fSk7XG4gICAgY3VycmVudEluZm8gPSBzdGFydEluZm87XG4gIH1cbiAgLyoqXHJcbiAgICogQ2FsbGVkIHdoaWxlIHRoZSB0cmFjayBiZWluZyBkcmFnZ2VkLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtUb3VjaEV2ZW50fE1vdXNlRXZlbnR9IGUgLSBUb3VjaEV2ZW50IG9yIE1vdXNlRXZlbnQgb2JqZWN0LlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gbW92ZShlKSB7XG4gICAgaWYgKHN0YXJ0SW5mbykge1xuICAgICAgY3VycmVudEluZm8gPSBhbmFseXplKGUsIHN0YXJ0SW5mbyk7XG5cbiAgICAgIGlmIChpc0RyYWdnaW5nKSB7XG4gICAgICAgIGlmIChlLmNhbmNlbGFibGUpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIVNwbGlkZS5pcyhGQURFKSkge1xuICAgICAgICAgIHZhciBwb3NpdGlvbiA9IHN0YXJ0Q29vcmRbYXhpc10gKyBjdXJyZW50SW5mby5vZmZzZXRbYXhpc107XG4gICAgICAgICAgVHJhY2sudHJhbnNsYXRlKHJlc2lzdChwb3NpdGlvbikpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc2hvdWxkTW92ZShjdXJyZW50SW5mbykpIHtcbiAgICAgICAgICBTcGxpZGUuZW1pdCgnZHJhZycsIHN0YXJ0SW5mbyk7XG4gICAgICAgICAgaXNEcmFnZ2luZyA9IHRydWU7XG4gICAgICAgICAgVHJhY2suY2FuY2VsKCk7IC8vIFRoZXNlIHBhcmFtcyBhcmUgYWN0dWFsIGRyYWcgZGF0YS5cblxuICAgICAgICAgIGluaXQoZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lIHdoZXRoZXIgdG8gc3RhcnQgbW92aW5nIHRoZSB0cmFjayBvciBub3QgYnkgZHJhZyBhbmdsZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBpbmZvIC0gQW4gaW5mb3JtYXRpb24gb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gLSBUcnVlIGlmIHRoZSB0cmFjayBzaG91bGQgYmUgbW92ZWQgb3IgZmFsc2UgaWYgbm90LlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gc2hvdWxkTW92ZShfcmVmKSB7XG4gICAgdmFyIG9mZnNldCA9IF9yZWYub2Zmc2V0O1xuXG4gICAgaWYgKFNwbGlkZS5TdGF0ZS5pcyhNT1ZJTkcpICYmIFNwbGlkZS5vcHRpb25zLndhaXRGb3JUcmFuc2l0aW9uKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGFuZ2xlID0gTWF0aC5hdGFuKGRyYWdfYWJzKG9mZnNldC55KSAvIGRyYWdfYWJzKG9mZnNldC54KSkgKiAxODAgLyBNYXRoLlBJO1xuXG4gICAgaWYgKGlzVmVydGljYWwpIHtcbiAgICAgIGFuZ2xlID0gOTAgLSBhbmdsZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYW5nbGUgPCBTcGxpZGUub3B0aW9ucy5kcmFnQW5nbGVUaHJlc2hvbGQ7XG4gIH1cbiAgLyoqXHJcbiAgICogUmVzaXN0IGRyYWdnaW5nIHRoZSB0cmFjayBvbiB0aGUgZmlyc3QvbGFzdCBwYWdlIGJlY2F1c2UgdGhlcmUgaXMgbm8gbW9yZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwb3NpdGlvbiAtIEEgcG9zaXRpb24gYmVpbmcgYXBwbGllZCB0byB0aGUgdHJhY2suXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtPYmplY3R9IC0gQWRqdXN0ZWQgcG9zaXRpb24uXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiByZXNpc3QocG9zaXRpb24pIHtcbiAgICBpZiAoU3BsaWRlLmlzKFNMSURFKSkge1xuICAgICAgdmFyIHNpZ24gPSBUcmFjay5zaWduO1xuXG4gICAgICB2YXIgX3N0YXJ0ID0gc2lnbiAqIFRyYWNrLnRyaW0oVHJhY2sudG9Qb3NpdGlvbigwKSk7XG5cbiAgICAgIHZhciBfZW5kID0gc2lnbiAqIFRyYWNrLnRyaW0oVHJhY2sudG9Qb3NpdGlvbihDb250cm9sbGVyLmVkZ2VJbmRleCkpO1xuXG4gICAgICBwb3NpdGlvbiAqPSBzaWduO1xuXG4gICAgICBpZiAocG9zaXRpb24gPCBfc3RhcnQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBfc3RhcnQgLSBGUklDVElPTl9SRURVQ0VSICogTWF0aC5sb2coX3N0YXJ0IC0gcG9zaXRpb24pO1xuICAgICAgfSBlbHNlIGlmIChwb3NpdGlvbiA+IF9lbmQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBfZW5kICsgRlJJQ1RJT05fUkVEVUNFUiAqIE1hdGgubG9nKHBvc2l0aW9uIC0gX2VuZCk7XG4gICAgICB9XG5cbiAgICAgIHBvc2l0aW9uICo9IHNpZ247XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG4gIC8qKlxyXG4gICAqIENhbGxlZCB3aGVuIGRyYWdnaW5nIGVuZHMuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBlbmQoKSB7XG4gICAgc3RhcnRJbmZvID0gbnVsbDtcblxuICAgIGlmIChpc0RyYWdnaW5nKSB7XG4gICAgICBTcGxpZGUuZW1pdCgnZHJhZ2dlZCcsIGN1cnJlbnRJbmZvKTtcbiAgICAgIGdvKGN1cnJlbnRJbmZvKTtcbiAgICAgIGlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgLyoqXHJcbiAgICogR28gdG8gdGhlIHNsaWRlIGRldGVybWluZWQgYnkgdGhlIGFuYWx5emVkIGRhdGEuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gaW5mbyAtIEFuIGluZm8gb2JqZWN0LlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gZ28oaW5mbykge1xuICAgIHZhciB2ZWxvY2l0eSA9IGluZm8udmVsb2NpdHlbYXhpc107XG4gICAgdmFyIGFic1YgPSBkcmFnX2Ficyh2ZWxvY2l0eSk7XG5cbiAgICBpZiAoYWJzViA+IDApIHtcbiAgICAgIHZhciBvcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG4gICAgICB2YXIgaW5kZXggPSBTcGxpZGUuaW5kZXg7XG4gICAgICB2YXIgc2lnbiA9IHZlbG9jaXR5IDwgMCA/IC0xIDogMTtcbiAgICAgIHZhciBkZXN0SW5kZXggPSBpbmRleDtcblxuICAgICAgaWYgKCFTcGxpZGUuaXMoRkFERSkpIHtcbiAgICAgICAgdmFyIGRlc3RpbmF0aW9uID0gVHJhY2sucG9zaXRpb247XG5cbiAgICAgICAgaWYgKGFic1YgPiBvcHRpb25zLmZsaWNrVmVsb2NpdHlUaHJlc2hvbGQgJiYgZHJhZ19hYnMoaW5mby5vZmZzZXRbYXhpc10pIDwgb3B0aW9ucy5zd2lwZURpc3RhbmNlVGhyZXNob2xkKSB7XG4gICAgICAgICAgZGVzdGluYXRpb24gKz0gc2lnbiAqIE1hdGgubWluKGFic1YgKiBvcHRpb25zLmZsaWNrUG93ZXIsIENvbXBvbmVudHMuTGF5b3V0LnNpemUgKiAob3B0aW9ucy5mbGlja01heFBhZ2VzIHx8IDEpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlc3RJbmRleCA9IFRyYWNrLnRvSW5kZXgoZGVzdGluYXRpb24pO1xuICAgICAgfVxuICAgICAgLypcclxuICAgICAgICogRG8gbm90IGFsbG93IHRoZSB0cmFjayB0byBnbyB0byBhIHByZXZpb3VzIHBvc2l0aW9uIGlmIHRoZXJlIGlzIGVub3VnaCB2ZWxvY2l0eS5cclxuICAgICAgICogQWx3YXlzIHVzZSB0aGUgYWRqYWNlbnQgaW5kZXggZm9yIHRoZSBmYWRlIG1vZGUuXHJcbiAgICAgICAqL1xuXG5cbiAgICAgIGlmIChkZXN0SW5kZXggPT09IGluZGV4ICYmIGFic1YgPiBNSU5fVkVMT0NJVFkpIHtcbiAgICAgICAgZGVzdEluZGV4ID0gaW5kZXggKyBzaWduICogVHJhY2suc2lnbjtcbiAgICAgIH1cblxuICAgICAgaWYgKFNwbGlkZS5pcyhTTElERSkpIHtcbiAgICAgICAgZGVzdEluZGV4ID0gYmV0d2VlbihkZXN0SW5kZXgsIDAsIENvbnRyb2xsZXIuZWRnZUluZGV4KTtcbiAgICAgIH1cblxuICAgICAgQ29udHJvbGxlci5nbyhkZXN0SW5kZXgsIG9wdGlvbnMuaXNOYXZpZ2F0aW9uKTtcbiAgICB9XG4gIH1cbiAgLyoqXHJcbiAgICogQW5hbHl6ZSB0aGUgZ2l2ZW4gZXZlbnQgb2JqZWN0IGFuZCByZXR1cm4gaW1wb3J0YW50IGluZm9ybWF0aW9uIGZvciBoYW5kbGluZyBzd2lwZSBiZWhhdmlvci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RXZlbnR9ICAgZSAgICAgICAgICAtIFRvdWNoIG9yIE1vdXNlIGV2ZW50IG9iamVjdC5cclxuICAgKiBAcGFyYW0ge09iamVjdH0gIHN0YXJ0SW5mbyAgLSBJbmZvcm1hdGlvbiBhbmFseXplZCBvbiBzdGFydCBmb3IgY2FsY3VsYXRpbmcgZGlmZmVyZW5jZSBmcm9tIHRoZSBjdXJyZW50IG9uZS5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge09iamVjdH0gLSBBbiBvYmplY3QgY29udGFpbmluZyBhbmFseXplZCBpbmZvcm1hdGlvbiwgc3VjaCBhcyBvZmZzZXQsIHZlbG9jaXR5LCBldGMuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBhbmFseXplKGUsIHN0YXJ0SW5mbykge1xuICAgIHZhciB0aW1lU3RhbXAgPSBlLnRpbWVTdGFtcCxcbiAgICAgICAgdG91Y2hlcyA9IGUudG91Y2hlcztcblxuICAgIHZhciBfcmVmMiA9IHRvdWNoZXMgPyB0b3VjaGVzWzBdIDogZSxcbiAgICAgICAgY2xpZW50WCA9IF9yZWYyLmNsaWVudFgsXG4gICAgICAgIGNsaWVudFkgPSBfcmVmMi5jbGllbnRZO1xuXG4gICAgdmFyIF9yZWYzID0gc3RhcnRJbmZvLnRvIHx8IHt9LFxuICAgICAgICBfcmVmMyR4ID0gX3JlZjMueCxcbiAgICAgICAgZnJvbVggPSBfcmVmMyR4ID09PSB2b2lkIDAgPyBjbGllbnRYIDogX3JlZjMkeCxcbiAgICAgICAgX3JlZjMkeSA9IF9yZWYzLnksXG4gICAgICAgIGZyb21ZID0gX3JlZjMkeSA9PT0gdm9pZCAwID8gY2xpZW50WSA6IF9yZWYzJHk7XG5cbiAgICB2YXIgc3RhcnRUaW1lID0gc3RhcnRJbmZvLnRpbWUgfHwgMDtcbiAgICB2YXIgb2Zmc2V0ID0ge1xuICAgICAgeDogY2xpZW50WCAtIGZyb21YLFxuICAgICAgeTogY2xpZW50WSAtIGZyb21ZXG4gICAgfTtcbiAgICB2YXIgZHVyYXRpb24gPSB0aW1lU3RhbXAgLSBzdGFydFRpbWU7XG4gICAgdmFyIHZlbG9jaXR5ID0ge1xuICAgICAgeDogb2Zmc2V0LnggLyBkdXJhdGlvbixcbiAgICAgIHk6IG9mZnNldC55IC8gZHVyYXRpb25cbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICB0bzoge1xuICAgICAgICB4OiBjbGllbnRYLFxuICAgICAgICB5OiBjbGllbnRZXG4gICAgICB9LFxuICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICB0aW1lOiB0aW1lU3RhbXAsXG4gICAgICB2ZWxvY2l0eTogdmVsb2NpdHlcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIERyYWc7XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL2NsaWNrL2luZGV4LmpzXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgaGFuZGxpbmcgYSBjbGljayBldmVudC5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgaGFuZGxpbmcgYSBjbGljayBldmVudC5cclxuICogQ2xpY2sgc2hvdWxkIGJlIGRpc2FibGVkIGR1cmluZyBkcmFnL3N3aXBlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlICAgICAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gQ29tcG9uZW50cyAtIEFuIG9iamVjdCBjb250YWluaW5nIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgY29tcG9uZW50IG9iamVjdC5cclxuICovXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IGNsaWNrID0gKGZ1bmN0aW9uIChTcGxpZGUsIENvbXBvbmVudHMpIHtcbiAgLyoqXHJcbiAgICogV2hldGhlciBjbGljayBpcyBkaXNhYmxlZCBvciBub3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cbiAgdmFyIGRpc2FibGVkID0gZmFsc2U7XG4gIC8qKlxyXG4gICAqIENsaWNrIGNvbXBvbmVudCBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBDbGljayA9IHtcbiAgICAvKipcclxuICAgICAqIE1vdW50IG9ubHkgd2hlbiB0aGUgZHJhZyBpcyBhY3RpdmF0ZWQgYW5kIHRoZSBzbGlkZSB0eXBlIGlzIG5vdCBcImZhZGVcIi5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqL1xuICAgIHJlcXVpcmVkOiBTcGxpZGUub3B0aW9ucy5kcmFnLFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICBTcGxpZGUub24oJ2NsaWNrJywgb25DbGljaywgQ29tcG9uZW50cy5FbGVtZW50cy50cmFjaywge1xuICAgICAgICBjYXB0dXJlOiB0cnVlXG4gICAgICB9KS5vbignZHJhZycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgfSkub24oJ2RyYWdnZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgZmxhZyBpcyByZWxlYXNlZCBhZnRlciB0aGUgY2xpY2sgZXZlbnQgaXMgZmlyZWQuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICAvKipcclxuICAgKiBDYWxsZWQgd2hlbiBhIHRyYWNrIGVsZW1lbnQgaXMgY2xpY2tlZC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RXZlbnR9IGUgLSBBIGNsaWNrIGV2ZW50LlxyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIENsaWNrO1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9hdXRvcGxheS9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIHBsYXlpbmcgc2xpZGVzIGF1dG9tYXRpY2FsbHkuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG4vKipcclxuICogU2V0IG9mIHBhdXNlIGZsYWdzLlxyXG4gKi9cblxudmFyIFBBVVNFX0ZMQUdTID0ge1xuICBIT1ZFUjogMSxcbiAgRk9DVVM6IDIsXG4gIE1BTlVBTDogM1xufTtcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBwbGF5aW5nIHNsaWRlcyBhdXRvbWF0aWNhbGx5LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlICAgICAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gQ29tcG9uZW50cyAtIEFuIG9iamVjdCBjb250YWluaW5nIGNvbXBvbmVudHMuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lICAgICAgIC0gQSBjb21wb25lbnQgbmFtZSBhcyBhIGxvd2VyY2FzZSBzdHJpbmcuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgY29tcG9uZW50IG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgYXV0b3BsYXkgPSAoZnVuY3Rpb24gKFNwbGlkZSwgQ29tcG9uZW50cywgbmFtZSkge1xuICAvKipcclxuICAgKiBTdG9yZSBwYXVzZSBmbGFncy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtBcnJheX1cclxuICAgKi9cbiAgdmFyIGZsYWdzID0gW107XG4gIC8qKlxyXG4gICAqIFN0b3JlIGFuIGludGVydmFsIG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9O1xyXG4gICAqL1xuXG4gIHZhciBpbnRlcnZhbDtcbiAgLyoqXHJcbiAgICogS2VlcCB0aGUgRWxlbWVudHMgY29tcG9uZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cblxuICB2YXIgRWxlbWVudHMgPSBDb21wb25lbnRzLkVsZW1lbnRzO1xuICAvKipcclxuICAgKiBBdXRvcGxheSBjb21wb25lbnQgb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgQXV0b3BsYXkgPSB7XG4gICAgLyoqXHJcbiAgICAgKiBSZXF1aXJlZCBvbmx5IHdoZW4gdGhlIGF1dG9wbGF5IG9wdGlvbiBpcyB0cnVlLlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICovXG4gICAgcmVxdWlyZWQ6IFNwbGlkZS5vcHRpb25zLmF1dG9wbGF5LFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKiBOb3RlIHRoYXQgYXV0b3BsYXkgc3RhcnRzIG9ubHkgaWYgdGhlcmUgYXJlIHNsaWRlcyBvdmVyIHBlclBhZ2UgbnVtYmVyLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcblxuICAgICAgaWYgKEVsZW1lbnRzLnNsaWRlcy5sZW5ndGggPiBvcHRpb25zLnBlclBhZ2UpIHtcbiAgICAgICAgaW50ZXJ2YWwgPSBjcmVhdGVJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgU3BsaWRlLmdvKCc+Jyk7XG4gICAgICAgIH0sIG9wdGlvbnMuaW50ZXJ2YWwsIGZ1bmN0aW9uIChyYXRlKSB7XG4gICAgICAgICAgU3BsaWRlLmVtaXQobmFtZSArIFwiOnBsYXlpbmdcIiwgcmF0ZSk7XG5cbiAgICAgICAgICBpZiAoRWxlbWVudHMuYmFyKSB7XG4gICAgICAgICAgICBhcHBseVN0eWxlKEVsZW1lbnRzLmJhciwge1xuICAgICAgICAgICAgICB3aWR0aDogcmF0ZSAqIDEwMCArIFwiJVwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBiaW5kKCk7XG4gICAgICAgIHRoaXMucGxheSgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFN0YXJ0IGF1dG9wbGF5LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBmbGFnIC0gQSBwYXVzZSBmbGFnIHRvIGJlIHJlbW92ZWQuXHJcbiAgICAgKi9cbiAgICBwbGF5OiBmdW5jdGlvbiBwbGF5KGZsYWcpIHtcbiAgICAgIGlmIChmbGFnID09PSB2b2lkIDApIHtcbiAgICAgICAgZmxhZyA9IDA7XG4gICAgICB9XG5cbiAgICAgIGZsYWdzID0gZmxhZ3MuZmlsdGVyKGZ1bmN0aW9uIChmKSB7XG4gICAgICAgIHJldHVybiBmICE9PSBmbGFnO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICghZmxhZ3MubGVuZ3RoKSB7XG4gICAgICAgIFNwbGlkZS5lbWl0KG5hbWUgKyBcIjpwbGF5XCIpO1xuICAgICAgICBpbnRlcnZhbC5wbGF5KFNwbGlkZS5vcHRpb25zLnJlc2V0UHJvZ3Jlc3MpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFBhdXNlIGF1dG9wbGF5LlxyXG4gICAgICogTm90ZSB0aGF0IEFycmF5LmluY2x1ZGVzIGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGZsYWcgLSBBIHBhdXNlIGZsYWcgdG8gYmUgYWRkZWQuXHJcbiAgICAgKi9cbiAgICBwYXVzZTogZnVuY3Rpb24gcGF1c2UoZmxhZykge1xuICAgICAgaWYgKGZsYWcgPT09IHZvaWQgMCkge1xuICAgICAgICBmbGFnID0gMDtcbiAgICAgIH1cblxuICAgICAgaW50ZXJ2YWwucGF1c2UoKTtcblxuICAgICAgaWYgKGZsYWdzLmluZGV4T2YoZmxhZykgPT09IC0xKSB7XG4gICAgICAgIGZsYWdzLnB1c2goZmxhZyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChmbGFncy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgU3BsaWRlLmVtaXQobmFtZSArIFwiOnBhdXNlXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgLyoqXHJcbiAgICogTGlzdGVuIHNvbWUgZXZlbnRzLlxyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGJpbmQoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcbiAgICB2YXIgc2libGluZyA9IFNwbGlkZS5zaWJsaW5nO1xuICAgIHZhciBlbG1zID0gW1NwbGlkZS5yb290LCBzaWJsaW5nID8gc2libGluZy5yb290IDogbnVsbF07XG5cbiAgICBpZiAob3B0aW9ucy5wYXVzZU9uSG92ZXIpIHtcbiAgICAgIHN3aXRjaE9uKGVsbXMsICdtb3VzZWxlYXZlJywgUEFVU0VfRkxBR1MuSE9WRVIsIHRydWUpO1xuICAgICAgc3dpdGNoT24oZWxtcywgJ21vdXNlZW50ZXInLCBQQVVTRV9GTEFHUy5IT1ZFUiwgZmFsc2UpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLnBhdXNlT25Gb2N1cykge1xuICAgICAgc3dpdGNoT24oZWxtcywgJ2ZvY3Vzb3V0JywgUEFVU0VfRkxBR1MuRk9DVVMsIHRydWUpO1xuICAgICAgc3dpdGNoT24oZWxtcywgJ2ZvY3VzaW4nLCBQQVVTRV9GTEFHUy5GT0NVUywgZmFsc2UpO1xuICAgIH1cblxuICAgIGlmIChFbGVtZW50cy5wbGF5KSB7XG4gICAgICBTcGxpZGUub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBOZWVkIHRvIGJlIHJlbW92ZWQgYSBmb2N1cyBmbGFnIGF0IGZpcnN0LlxuICAgICAgICBBdXRvcGxheS5wbGF5KFBBVVNFX0ZMQUdTLkZPQ1VTKTtcbiAgICAgICAgQXV0b3BsYXkucGxheShQQVVTRV9GTEFHUy5NQU5VQUwpO1xuICAgICAgfSwgRWxlbWVudHMucGxheSk7XG4gICAgfVxuXG4gICAgaWYgKEVsZW1lbnRzLnBhdXNlKSB7XG4gICAgICBzd2l0Y2hPbihbRWxlbWVudHMucGF1c2VdLCAnY2xpY2snLCBQQVVTRV9GTEFHUy5NQU5VQUwsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBTcGxpZGUub24oJ21vdmUgcmVmcmVzaCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIEF1dG9wbGF5LnBsYXkoKTtcbiAgICB9KSAvLyBSZXdpbmQgdGhlIHRpbWVyLlxuICAgIC5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIEF1dG9wbGF5LnBhdXNlKCk7XG4gICAgfSk7XG4gIH1cbiAgLyoqXHJcbiAgICogUGxheSBvciBwYXVzZSBvbiB0aGUgZ2l2ZW4gZXZlbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0VsZW1lbnRbXX0gZWxtcyAgLSBFbGVtZW50cy5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gICAgZXZlbnQgLSBBbiBldmVudCBuYW1lIG9yIG5hbWVzLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSAgICBmbGFnICAtIEEgcGF1c2UgZmxhZyBkZWZpbmVkIG9uIHRoZSB0b3AuXHJcbiAgICogQHBhcmFtIHtib29sZWFufSAgIHBsYXkgIC0gRGV0ZXJtaW5lIHdoZXRoZXIgdG8gcGxheSBvciBwYXVzZS5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHN3aXRjaE9uKGVsbXMsIGV2ZW50LCBmbGFnLCBwbGF5KSB7XG4gICAgZWxtcy5mb3JFYWNoKGZ1bmN0aW9uIChlbG0pIHtcbiAgICAgIFNwbGlkZS5vbihldmVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBBdXRvcGxheVtwbGF5ID8gJ3BsYXknIDogJ3BhdXNlJ10oZmxhZyk7XG4gICAgICB9LCBlbG0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIEF1dG9wbGF5O1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9jb3Zlci9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGNoYW5nZSBhbiBpbWcgZWxlbWVudCB0byBiYWNrZ3JvdW5kIGltYWdlIG9mIGl0cyB3cmFwcGVyLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBjaGFuZ2UgYW4gaW1nIGVsZW1lbnQgdG8gYmFja2dyb3VuZCBpbWFnZSBvZiBpdHMgd3JhcHBlci5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudHMgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IGNvdmVyID0gKGZ1bmN0aW9uIChTcGxpZGUsIENvbXBvbmVudHMpIHtcbiAgLyoqXHJcbiAgICogSG9sZCBvcHRpb25zLlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cbiAgdmFyIG9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcbiAgLyoqXHJcbiAgICogQ292ZXIgY29tcG9uZW50IG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIENvdmVyID0ge1xuICAgIC8qKlxyXG4gICAgICogUmVxdWlyZWQgb25seSB3aGVuIFwiY292ZXJcIiBvcHRpb24gaXMgdHJ1ZS5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqL1xuICAgIHJlcXVpcmVkOiBvcHRpb25zLmNvdmVyLFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICBTcGxpZGUub24oJ2xhenlsb2FkOmxvYWRlZCcsIGZ1bmN0aW9uIChpbWcpIHtcbiAgICAgICAgY292ZXIoaW1nLCBmYWxzZSk7XG4gICAgICB9KTtcbiAgICAgIFNwbGlkZS5vbignbW91bnRlZCB1cGRhdGVkIHJlZnJlc2gnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcHBseShmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBEZXN0cm95LlxyXG4gICAgICovXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIGFwcGx5KHRydWUpO1xuICAgIH1cbiAgfTtcbiAgLyoqXHJcbiAgICogQXBwbHkgXCJjb3ZlclwiIHRvIGFsbCBzbGlkZXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVuY292ZXIgLSBJZiB0cnVlLCBcImNvdmVyXCIgd2lsbCBiZSBjbGVhci5cclxuICAgKi9cblxuICBmdW5jdGlvbiBhcHBseSh1bmNvdmVyKSB7XG4gICAgQ29tcG9uZW50cy5FbGVtZW50cy5lYWNoKGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgdmFyIGltZyA9IGNoaWxkKFNsaWRlLnNsaWRlLCAnSU1HJykgfHwgY2hpbGQoU2xpZGUuY29udGFpbmVyLCAnSU1HJyk7XG5cbiAgICAgIGlmIChpbWcgJiYgaW1nLnNyYykge1xuICAgICAgICBjb3ZlcihpbWcsIHVuY292ZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8qKlxyXG4gICAqIFNldCBiYWNrZ3JvdW5kIGltYWdlIG9mIHRoZSBwYXJlbnQgZWxlbWVudCwgdXNpbmcgc291cmNlIG9mIHRoZSBnaXZlbiBpbWFnZSBlbGVtZW50LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtFbGVtZW50fSBpbWcgICAgIC0gQW4gaW1hZ2UgZWxlbWVudC5cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVuY292ZXIgLSBSZXNldCBcImNvdmVyXCIuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBjb3ZlcihpbWcsIHVuY292ZXIpIHtcbiAgICBhcHBseVN0eWxlKGltZy5wYXJlbnRFbGVtZW50LCB7XG4gICAgICBiYWNrZ3JvdW5kOiB1bmNvdmVyID8gJycgOiBcImNlbnRlci9jb3ZlciBuby1yZXBlYXQgdXJsKFxcXCJcIiArIGltZy5zcmMgKyBcIlxcXCIpXCJcbiAgICB9KTtcbiAgICBhcHBseVN0eWxlKGltZywge1xuICAgICAgZGlzcGxheTogdW5jb3ZlciA/ICcnIDogJ25vbmUnXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gQ292ZXI7XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL2Fycm93cy9wYXRoLmpzXG4vKipcclxuICogRXhwb3J0IHZlY3RvciBwYXRoIGZvciBhbiBhcnJvdy5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG4vKipcclxuICogTmFtZXNwYWNlIGRlZmluaXRpb24gZm9yIFNWRyBlbGVtZW50LlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cbnZhciBYTUxfTkFNRV9TUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG4vKipcclxuICogVGhlIGFycm93IHZlY3RvciBwYXRoLlxyXG4gKlxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKi9cblxudmFyIFBBVEggPSAnbTE1LjUgMC45MzItNC4zIDQuMzggMTQuNSAxNC42LTE0LjUgMTQuNSA0LjMgNC40IDE0LjYtMTQuNiA0LjQtNC4zLTQuNC00LjQtMTQuNi0xNC42eic7XG4vKipcclxuICogU1ZHIHdpZHRoIGFuZCBoZWlnaHQuXHJcbiAqXHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqL1xuXG52YXIgU0laRSA9IDQwO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvYXJyb3dzL2luZGV4LmpzXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgYXBwZW5kaW5nIHByZXYvbmV4dCBhcnJvd3MuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG5cbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBhcHBlbmRpbmcgcHJldi9uZXh0IGFycm93cy5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudHMgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb21wb25lbnRzLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAgICAgICAtIEEgY29tcG9uZW50IG5hbWUgYXMgYSBsb3dlcmNhc2Ugc3RyaW5nLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IGFycm93cyA9IChmdW5jdGlvbiAoU3BsaWRlLCBDb21wb25lbnRzLCBuYW1lKSB7XG4gIC8qKlxyXG4gICAqIFByZXZpb3VzIGFycm93IGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RWxlbWVudHx1bmRlZmluZWR9XHJcbiAgICovXG4gIHZhciBwcmV2O1xuICAvKipcclxuICAgKiBOZXh0IGFycm93IGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RWxlbWVudHx1bmRlZmluZWR9XHJcbiAgICovXG5cbiAgdmFyIG5leHQ7XG4gIC8qKlxyXG4gICAqIFN0b3JlIHRoZSBjbGFzcyBsaXN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgY2xhc3NlcyA9IFNwbGlkZS5jbGFzc2VzO1xuICAvKipcclxuICAgKiBIb2xkIHRoZSByb290IGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RWxlbWVudH1cclxuICAgKi9cblxuICB2YXIgcm9vdCA9IFNwbGlkZS5yb290O1xuICAvKipcclxuICAgKiBXaGV0aGVyIGFycm93cyBhcmUgY3JlYXRlZCBwcm9ncmFtbWF0aWNhbGx5IG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuXG4gIHZhciBjcmVhdGVkO1xuICAvKipcclxuICAgKiBIb2xkIHRoZSBFbGVtZW50cyBjb21wb25lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBFbGVtZW50cyA9IENvbXBvbmVudHMuRWxlbWVudHM7XG4gIC8qKlxyXG4gICAqIEFycm93cyBjb21wb25lbnQgb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgQXJyb3dzID0ge1xuICAgIC8qKlxyXG4gICAgICogUmVxdWlyZWQgd2hlbiB0aGUgYXJyb3dzIG9wdGlvbiBpcyB0cnVlLlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICovXG4gICAgcmVxdWlyZWQ6IFNwbGlkZS5vcHRpb25zLmFycm93cyxcblxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgLy8gQXR0ZW1wdCB0byBnZXQgYXJyb3dzIGZyb20gSFRNTCBzb3VyY2UuXG4gICAgICBwcmV2ID0gRWxlbWVudHMuYXJyb3dzLnByZXY7XG4gICAgICBuZXh0ID0gRWxlbWVudHMuYXJyb3dzLm5leHQ7IC8vIElmIGFycm93cyB3ZXJlIG5vdCBmb3VuZCBpbiBIVE1MLCBsZXQncyBnZW5lcmF0ZSB0aGVtLlxuXG4gICAgICBpZiAoKCFwcmV2IHx8ICFuZXh0KSAmJiBTcGxpZGUub3B0aW9ucy5hcnJvd3MpIHtcbiAgICAgICAgcHJldiA9IGNyZWF0ZUFycm93KHRydWUpO1xuICAgICAgICBuZXh0ID0gY3JlYXRlQXJyb3coZmFsc2UpO1xuICAgICAgICBjcmVhdGVkID0gdHJ1ZTtcbiAgICAgICAgYXBwZW5kQXJyb3dzKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcmV2ICYmIG5leHQpIHtcbiAgICAgICAgYmluZCgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFycm93cyA9IHtcbiAgICAgICAgcHJldjogcHJldixcbiAgICAgICAgbmV4dDogbmV4dFxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgYWZ0ZXIgYWxsIGNvbXBvbmVudHMgYXJlIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgICAgU3BsaWRlLmVtaXQobmFtZSArIFwiOm1vdW50ZWRcIiwgcHJldiwgbmV4dCk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogRGVzdHJveS5cclxuICAgICAqL1xuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICByZW1vdmVBdHRyaWJ1dGUoW3ByZXYsIG5leHRdLCAnZGlzYWJsZWQnKTtcblxuICAgICAgaWYgKGNyZWF0ZWQpIHtcbiAgICAgICAgZG9tX3JlbW92ZShwcmV2LnBhcmVudEVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgLyoqXHJcbiAgICogTGlzdGVuIHRvIG5hdGl2ZSBhbmQgY3VzdG9tIGV2ZW50cy5cclxuICAgKi9cblxuICBmdW5jdGlvbiBiaW5kKCkge1xuICAgIFNwbGlkZS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBTcGxpZGUuZ28oJzwnKTtcbiAgICB9LCBwcmV2KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBTcGxpZGUuZ28oJz4nKTtcbiAgICB9LCBuZXh0KS5vbignbW91bnRlZCBtb3ZlIHVwZGF0ZWQgcmVmcmVzaCcsIHVwZGF0ZURpc2FibGVkKTtcbiAgfVxuICAvKipcclxuICAgKiBVcGRhdGUgYSBkaXNhYmxlZCBhdHRyaWJ1dGUuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiB1cGRhdGVEaXNhYmxlZCgpIHtcbiAgICB2YXIgX0NvbXBvbmVudHMkQ29udHJvbGxlID0gQ29tcG9uZW50cy5Db250cm9sbGVyLFxuICAgICAgICBwcmV2SW5kZXggPSBfQ29tcG9uZW50cyRDb250cm9sbGUucHJldkluZGV4LFxuICAgICAgICBuZXh0SW5kZXggPSBfQ29tcG9uZW50cyRDb250cm9sbGUubmV4dEluZGV4O1xuICAgIHZhciBpc0Vub3VnaCA9IFNwbGlkZS5sZW5ndGggPiBTcGxpZGUub3B0aW9ucy5wZXJQYWdlIHx8IFNwbGlkZS5pcyhMT09QKTtcbiAgICBwcmV2LmRpc2FibGVkID0gcHJldkluZGV4IDwgMCB8fCAhaXNFbm91Z2g7XG4gICAgbmV4dC5kaXNhYmxlZCA9IG5leHRJbmRleCA8IDAgfHwgIWlzRW5vdWdoO1xuICAgIFNwbGlkZS5lbWl0KG5hbWUgKyBcIjp1cGRhdGVkXCIsIHByZXYsIG5leHQsIHByZXZJbmRleCwgbmV4dEluZGV4KTtcbiAgfVxuICAvKipcclxuICAgKiBDcmVhdGUgYSB3cmFwcGVyIGVsZW1lbnQgYW5kIGFwcGVuZCBhcnJvd3MuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBhcHBlbmRBcnJvd3MoKSB7XG4gICAgdmFyIHdyYXBwZXIgPSBjcmVhdGUoJ2RpdicsIHtcbiAgICAgIFwiY2xhc3NcIjogY2xhc3Nlcy5hcnJvd3NcbiAgICB9KTtcbiAgICBhcHBlbmQod3JhcHBlciwgcHJldik7XG4gICAgYXBwZW5kKHdyYXBwZXIsIG5leHQpO1xuICAgIHZhciBzbGlkZXIgPSBFbGVtZW50cy5zbGlkZXI7XG4gICAgdmFyIHBhcmVudCA9IFNwbGlkZS5vcHRpb25zLmFycm93cyA9PT0gJ3NsaWRlcicgJiYgc2xpZGVyID8gc2xpZGVyIDogcm9vdDtcbiAgICBiZWZvcmUod3JhcHBlciwgcGFyZW50LmZpcnN0RWxlbWVudENoaWxkKTtcbiAgfVxuICAvKipcclxuICAgKiBDcmVhdGUgYW4gYXJyb3cgZWxlbWVudC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcHJldiAtIERldGVybWluZSB0byBjcmVhdGUgYSBwcmV2IGFycm93IG9yIG5leHQgYXJyb3cuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtFbGVtZW50fSAtIEEgY3JlYXRlZCBhcnJvdyBlbGVtZW50LlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyb3cocHJldikge1xuICAgIHZhciBhcnJvdyA9IFwiPGJ1dHRvbiBjbGFzcz1cXFwiXCIgKyBjbGFzc2VzLmFycm93ICsgXCIgXCIgKyAocHJldiA/IGNsYXNzZXMucHJldiA6IGNsYXNzZXMubmV4dCkgKyBcIlxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj5cIiArIChcIjxzdmcgeG1sbnM9XFxcIlwiICsgWE1MX05BTUVfU1BBQ0UgKyBcIlxcXCJcXHR2aWV3Qm94PVxcXCIwIDAgXCIgKyBTSVpFICsgXCIgXCIgKyBTSVpFICsgXCJcXFwiXFx0d2lkdGg9XFxcIlwiICsgU0laRSArIFwiXFxcIlxcdGhlaWdodD1cXFwiXCIgKyBTSVpFICsgXCJcXFwiPlwiKSArIChcIjxwYXRoIGQ9XFxcIlwiICsgKFNwbGlkZS5vcHRpb25zLmFycm93UGF0aCB8fCBQQVRIKSArIFwiXFxcIiAvPlwiKTtcbiAgICByZXR1cm4gZG9taWZ5KGFycm93KTtcbiAgfVxuXG4gIHJldHVybiBBcnJvd3M7XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL3BhZ2luYXRpb24vaW5kZXguanNcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBoYW5kbGluZyBwYWdpbmF0aW9uXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG4vKipcclxuICogVGhlIGV2ZW50IG5hbWUgZm9yIHVwZGF0aW5nIHNvbWUgYXR0cmlidXRlcyBvZiBwYWdpbmF0aW9uIG5vZGVzLlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cblxudmFyIEFUVFJJQlVURVNfVVBEQVRFX0VWRU5UID0gJ21vdmUucGFnZSc7XG4vKipcclxuICogVGhlIGV2ZW50IG5hbWUgZm9yIHJlY3JlYXRpbmcgcGFnaW5hdGlvbi5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG5cbnZhciBVUERBVEVfRVZFTlQgPSAndXBkYXRlZC5wYWdlIHJlZnJlc2gucGFnZSc7XG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgaGFuZGxpbmcgcGFnaW5hdGlvblxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlICAgICAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gQ29tcG9uZW50cyAtIEFuIG9iamVjdCBjb250YWluaW5nIGNvbXBvbmVudHMuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lICAgICAgIC0gQSBjb21wb25lbnQgbmFtZSBhcyBhIGxvd2VyY2FzZSBzdHJpbmcuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgY29tcG9uZW50IG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgcGFnaW5hdGlvbiA9IChmdW5jdGlvbiAoU3BsaWRlLCBDb21wb25lbnRzLCBuYW1lKSB7XG4gIC8qKlxyXG4gICAqIFN0b3JlIGFsbCBkYXRhIGZvciBwYWdpbmF0aW9uLlxyXG4gICAqIC0gbGlzdDogQSBsaXN0IGVsZW1lbnQuXHJcbiAgICogLSBpdGVtczogQW4gYXJyYXkgdGhhdCBjb250YWlucyBvYmplY3RzKGxpLCBidXR0b24sIGluZGV4LCBwYWdlKS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG4gIHZhciBkYXRhID0ge307XG4gIC8qKlxyXG4gICAqIEhvbGQgdGhlIEVsZW1lbnRzIGNvbXBvbmVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIEVsZW1lbnRzID0gQ29tcG9uZW50cy5FbGVtZW50cztcbiAgLyoqXHJcbiAgICogUGFnaW5hdGlvbiBjb21wb25lbnQgb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgUGFnaW5hdGlvbiA9IHtcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIHZhciBwYWdpbmF0aW9uID0gU3BsaWRlLm9wdGlvbnMucGFnaW5hdGlvbjtcblxuICAgICAgaWYgKHBhZ2luYXRpb24pIHtcbiAgICAgICAgZGF0YSA9IGNyZWF0ZVBhZ2luYXRpb24oKTtcbiAgICAgICAgdmFyIHNsaWRlciA9IEVsZW1lbnRzLnNsaWRlcjtcbiAgICAgICAgdmFyIHBhcmVudCA9IHBhZ2luYXRpb24gPT09ICdzbGlkZXInICYmIHNsaWRlciA/IHNsaWRlciA6IFNwbGlkZS5yb290O1xuICAgICAgICBhcHBlbmQocGFyZW50LCBkYXRhLmxpc3QpO1xuICAgICAgICBTcGxpZGUub24oQVRUUklCVVRFU19VUERBVEVfRVZFTlQsIHVwZGF0ZUF0dHJpYnV0ZXMpO1xuICAgICAgfVxuXG4gICAgICBTcGxpZGUub2ZmKFVQREFURV9FVkVOVCkub24oVVBEQVRFX0VWRU5ULCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFBhZ2luYXRpb24uZGVzdHJveSgpO1xuXG4gICAgICAgIGlmIChTcGxpZGUub3B0aW9ucy5wYWdpbmF0aW9uKSB7XG4gICAgICAgICAgUGFnaW5hdGlvbi5tb3VudCgpO1xuICAgICAgICAgIFBhZ2luYXRpb24ubW91bnRlZCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgYWZ0ZXIgYWxsIGNvbXBvbmVudHMgYXJlIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgICAgaWYgKFNwbGlkZS5vcHRpb25zLnBhZ2luYXRpb24pIHtcbiAgICAgICAgdmFyIGluZGV4ID0gU3BsaWRlLmluZGV4O1xuICAgICAgICBTcGxpZGUuZW1pdChuYW1lICsgXCI6bW91bnRlZFwiLCBkYXRhLCB0aGlzLmdldEl0ZW0oaW5kZXgpKTtcbiAgICAgICAgdXBkYXRlQXR0cmlidXRlcyhpbmRleCwgLTEpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIERlc3Ryb3kgdGhlIHBhZ2luYXRpb24uXHJcbiAgICAgKiBCZSBhd2FyZSB0aGF0IG5vZGUucmVtb3ZlKCkgaXMgbm90IHN1cHBvcnRlZCBieSBJRS5cclxuICAgICAqL1xuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICBkb21fcmVtb3ZlKGRhdGEubGlzdCk7XG5cbiAgICAgIGlmIChkYXRhLml0ZW1zKSB7XG4gICAgICAgIGRhdGEuaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIFNwbGlkZS5vZmYoJ2NsaWNrJywgaXRlbS5idXR0b24pO1xuICAgICAgICB9KTtcbiAgICAgIH0gLy8gRG8gbm90IHJlbW92ZSBVUERBVEVfRVZFTlQgdG8gcmVjcmVhdGUgcGFnaW5hdGlvbiBpZiBuZWVkZWQuXG5cblxuICAgICAgU3BsaWRlLm9mZihBVFRSSUJVVEVTX1VQREFURV9FVkVOVCk7XG4gICAgICBkYXRhID0ge307XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIGFuIGl0ZW0gYnkgaW5kZXguXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gQSBzbGlkZSBpbmRleC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R8dW5kZWZpbmVkfSAtIEFuIGl0ZW0gb2JqZWN0IG9uIHN1Y2Nlc3Mgb3IgdW5kZWZpbmVkIG9uIGZhaWx1cmUuXHJcbiAgICAgKi9cbiAgICBnZXRJdGVtOiBmdW5jdGlvbiBnZXRJdGVtKGluZGV4KSB7XG4gICAgICByZXR1cm4gZGF0YS5pdGVtc1tDb21wb25lbnRzLkNvbnRyb2xsZXIudG9QYWdlKGluZGV4KV07XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIG9iamVjdCBjb250YWluaW5nIHBhZ2luYXRpb24gZGF0YS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IC0gUGFnaW5hdGlvbiBkYXRhIGluY2x1ZGluZyBsaXN0IGFuZCBpdGVtcy5cclxuICAgICAqL1xuICAgIGdldCBkYXRhKCkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gIH07XG4gIC8qKlxyXG4gICAqIFVwZGF0ZSBhdHRyaWJ1dGVzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4ICAgICAtIEFjdGl2ZSBpbmRleC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gcHJldkluZGV4IC0gUHJldiBpbmRleC5cclxuICAgKi9cblxuICBmdW5jdGlvbiB1cGRhdGVBdHRyaWJ1dGVzKGluZGV4LCBwcmV2SW5kZXgpIHtcbiAgICB2YXIgcHJldiA9IFBhZ2luYXRpb24uZ2V0SXRlbShwcmV2SW5kZXgpO1xuICAgIHZhciBjdXJyID0gUGFnaW5hdGlvbi5nZXRJdGVtKGluZGV4KTtcbiAgICB2YXIgYWN0aXZlID0gU1RBVFVTX0NMQVNTRVMuYWN0aXZlO1xuXG4gICAgaWYgKHByZXYpIHtcbiAgICAgIHJlbW92ZUNsYXNzKHByZXYuYnV0dG9uLCBhY3RpdmUpO1xuICAgIH1cblxuICAgIGlmIChjdXJyKSB7XG4gICAgICBhZGRDbGFzcyhjdXJyLmJ1dHRvbiwgYWN0aXZlKTtcbiAgICB9XG5cbiAgICBTcGxpZGUuZW1pdChuYW1lICsgXCI6dXBkYXRlZFwiLCBkYXRhLCBwcmV2LCBjdXJyKTtcbiAgfVxuICAvKipcclxuICAgKiBDcmVhdGUgYSB3cmFwcGVyIGFuZCBidXR0b24gZWxlbWVudHMuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtPYmplY3R9IC0gQW4gb2JqZWN0IGNvbnRhaW5zIGFsbCBkYXRhLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gY3JlYXRlUGFnaW5hdGlvbigpIHtcbiAgICB2YXIgb3B0aW9ucyA9IFNwbGlkZS5vcHRpb25zO1xuICAgIHZhciBjbGFzc2VzID0gU3BsaWRlLmNsYXNzZXM7XG4gICAgdmFyIGxpc3QgPSBjcmVhdGUoJ3VsJywge1xuICAgICAgXCJjbGFzc1wiOiBjbGFzc2VzLnBhZ2luYXRpb25cbiAgICB9KTtcbiAgICB2YXIgaXRlbXMgPSBFbGVtZW50cy5nZXRTbGlkZXMoZmFsc2UpLmZpbHRlcihmdW5jdGlvbiAoU2xpZGUpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmZvY3VzICE9PSBmYWxzZSB8fCBTbGlkZS5pbmRleCAlIG9wdGlvbnMucGVyUGFnZSA9PT0gMDtcbiAgICB9KS5tYXAoZnVuY3Rpb24gKFNsaWRlLCBwYWdlKSB7XG4gICAgICB2YXIgbGkgPSBjcmVhdGUoJ2xpJywge30pO1xuICAgICAgdmFyIGJ1dHRvbiA9IGNyZWF0ZSgnYnV0dG9uJywge1xuICAgICAgICBcImNsYXNzXCI6IGNsYXNzZXMucGFnZSxcbiAgICAgICAgdHlwZTogJ2J1dHRvbidcbiAgICAgIH0pO1xuICAgICAgYXBwZW5kKGxpLCBidXR0b24pO1xuICAgICAgYXBwZW5kKGxpc3QsIGxpKTtcbiAgICAgIFNwbGlkZS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFNwbGlkZS5nbyhcIj5cIiArIHBhZ2UpO1xuICAgICAgfSwgYnV0dG9uKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxpOiBsaSxcbiAgICAgICAgYnV0dG9uOiBidXR0b24sXG4gICAgICAgIHBhZ2U6IHBhZ2UsXG4gICAgICAgIFNsaWRlczogRWxlbWVudHMuZ2V0U2xpZGVzQnlQYWdlKHBhZ2UpXG4gICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBsaXN0OiBsaXN0LFxuICAgICAgaXRlbXM6IGl0ZW1zXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBQYWdpbmF0aW9uO1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9sYXp5bG9hZC9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGxvYWRpbmcgc2xpZGVyIGltYWdlcyBsYXppbHkuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG5cbi8qKlxyXG4gKiBUaGUgbmFtZSBmb3IgYSBkYXRhIGF0dHJpYnV0ZSBvZiBzcmMuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xuXG52YXIgU1JDX0RBVEFfTkFNRSA9ICdkYXRhLXNwbGlkZS1sYXp5Jztcbi8qKlxyXG4gKiBUaGUgbmFtZSBmb3IgYSBkYXRhIGF0dHJpYnV0ZSBvZiBzcmNzZXQuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xuXG52YXIgU1JDU0VUX0RBVEFfTkFNRSA9ICdkYXRhLXNwbGlkZS1sYXp5LXNyY3NldCc7XG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgbG9hZGluZyBzbGlkZXIgaW1hZ2VzIGxhemlseS5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudHMgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb21wb25lbnRzLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAgICAgICAtIEEgY29tcG9uZW50IG5hbWUgYXMgYSBsb3dlcmNhc2Ugc3RyaW5nLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IGxhenlsb2FkID0gKGZ1bmN0aW9uIChTcGxpZGUsIENvbXBvbmVudHMsIG5hbWUpIHtcbiAgLyoqXHJcbiAgICogTmV4dCBpbmRleCBmb3Igc2VxdWVudGlhbCBsb2FkaW5nLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cbiAgdmFyIG5leHRJbmRleDtcbiAgLyoqXHJcbiAgICogU3RvcmUgb2JqZWN0cyBjb250YWluaW5nIGFuIGltZyBlbGVtZW50IGFuZCBhIFNsaWRlIG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3RbXX1cclxuICAgKi9cblxuICB2YXIgaW1hZ2VzO1xuICAvKipcclxuICAgKiBTdG9yZSB0aGUgb3B0aW9ucy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIG9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBsb2FkIGltYWdlcyBzZXF1ZW50aWFsbHkgb3Igbm90LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG5cbiAgdmFyIGlzU2VxdWVudGlhbCA9IG9wdGlvbnMubGF6eUxvYWQgPT09ICdzZXF1ZW50aWFsJztcbiAgLyoqXHJcbiAgICogTGF6eWxvYWQgY29tcG9uZW50IG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIExhenlsb2FkID0ge1xuICAgIC8qKlxyXG4gICAgICogTW91bnQgb25seSB3aGVuIHRoZSBsYXp5bG9hZCBvcHRpb24gaXMgcHJvdmlkZWQuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgKi9cbiAgICByZXF1aXJlZDogb3B0aW9ucy5sYXp5TG9hZCxcblxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgU3BsaWRlLm9uKCdtb3VudGVkIHJlZnJlc2gnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluaXQoKTtcbiAgICAgICAgQ29tcG9uZW50cy5FbGVtZW50cy5lYWNoKGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgICAgIGVhY2goU2xpZGUuc2xpZGUucXVlcnlTZWxlY3RvckFsbChcIltcIiArIFNSQ19EQVRBX05BTUUgKyBcIl0sIFtcIiArIFNSQ1NFVF9EQVRBX05BTUUgKyBcIl1cIiksIGZ1bmN0aW9uIChpbWcpIHtcbiAgICAgICAgICAgIGlmICghaW1nLnNyYyAmJiAhaW1nLnNyY3NldCkge1xuICAgICAgICAgICAgICBpbWFnZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgaW1nOiBpbWcsXG4gICAgICAgICAgICAgICAgU2xpZGU6IFNsaWRlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBhcHBseVN0eWxlKGltZywge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGlzU2VxdWVudGlhbCkge1xuICAgICAgICAgIGxvYWROZXh0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIWlzU2VxdWVudGlhbCkge1xuICAgICAgICBTcGxpZGUub24oXCJtb3VudGVkIHJlZnJlc2ggbW92ZWQuXCIgKyBuYW1lLCBjaGVjayk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogRGVzdHJveS5cclxuICAgICAqL1xuICAgIGRlc3Ryb3k6IGluaXRcbiAgfTtcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZSBwYXJhbWV0ZXJzLlxyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgaW1hZ2VzID0gW107XG4gICAgbmV4dEluZGV4ID0gMDtcbiAgfVxuICAvKipcclxuICAgKiBDaGVjayBob3cgY2xvc2UgZWFjaCBpbWFnZSBpcyBmcm9tIHRoZSBhY3RpdmUgc2xpZGUgYW5kXHJcbiAgICogZGV0ZXJtaW5lIHdoZXRoZXIgdG8gc3RhcnQgbG9hZGluZyBvciBub3QsIGFjY29yZGluZyB0byB0aGUgZGlzdGFuY2UuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBDdXJyZW50IGluZGV4LlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gY2hlY2soaW5kZXgpIHtcbiAgICBpbmRleCA9IGlzTmFOKGluZGV4KSA/IFNwbGlkZS5pbmRleCA6IGluZGV4O1xuICAgIGltYWdlcyA9IGltYWdlcy5maWx0ZXIoZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICBpZiAoaW1hZ2UuU2xpZGUuaXNXaXRoaW4oaW5kZXgsIG9wdGlvbnMucGVyUGFnZSAqIChvcHRpb25zLnByZWxvYWRQYWdlcyArIDEpKSkge1xuICAgICAgICBsb2FkKGltYWdlLmltZywgaW1hZ2UuU2xpZGUpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pOyAvLyBVbmJpbmQgaWYgYWxsIGltYWdlcyBhcmUgbG9hZGVkLlxuXG4gICAgaWYgKCFpbWFnZXNbMF0pIHtcbiAgICAgIFNwbGlkZS5vZmYoXCJtb3ZlZC5cIiArIG5hbWUpO1xuICAgIH1cbiAgfVxuICAvKipcclxuICAgKiBTdGFydCBsb2FkaW5nIGFuIGltYWdlLlxyXG4gICAqIENyZWF0aW5nIGEgY2xvbmUgb2YgdGhlIGltYWdlIGVsZW1lbnQgc2luY2Ugc2V0dGluZyBzcmMgYXR0cmlidXRlIGRpcmVjdGx5IHRvIGl0XHJcbiAgICogb2Z0ZW4gb2NjdXJzICdoaXRjaCcsIGJsb2NraW5nIHNvbWUgb3RoZXIgcHJvY2Vzc2VzIG9mIGEgYnJvd3Nlci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gaW1nICAgLSBBbiBpbWFnZSBlbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAgU2xpZGUgLSBBIFNsaWRlIG9iamVjdC5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGxvYWQoaW1nLCBTbGlkZSkge1xuICAgIGFkZENsYXNzKFNsaWRlLnNsaWRlLCBTVEFUVVNfQ0xBU1NFUy5sb2FkaW5nKTtcbiAgICB2YXIgc3Bpbm5lciA9IGNyZWF0ZSgnc3BhbicsIHtcbiAgICAgIFwiY2xhc3NcIjogU3BsaWRlLmNsYXNzZXMuc3Bpbm5lclxuICAgIH0pO1xuICAgIGFwcGVuZChpbWcucGFyZW50RWxlbWVudCwgc3Bpbm5lcik7XG5cbiAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgbG9hZGVkKGltZywgc3Bpbm5lciwgU2xpZGUsIGZhbHNlKTtcbiAgICB9O1xuXG4gICAgaW1nLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBsb2FkZWQoaW1nLCBzcGlubmVyLCBTbGlkZSwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIHNldEF0dHJpYnV0ZShpbWcsICdzcmNzZXQnLCBnZXRBdHRyaWJ1dGUoaW1nLCBTUkNTRVRfREFUQV9OQU1FKSB8fCAnJyk7XG4gICAgc2V0QXR0cmlidXRlKGltZywgJ3NyYycsIGdldEF0dHJpYnV0ZShpbWcsIFNSQ19EQVRBX05BTUUpIHx8ICcnKTtcbiAgfVxuICAvKipcclxuICAgKiBTdGFydCBsb2FkaW5nIGEgbmV4dCBpbWFnZSBpbiBpbWFnZXMgYXJyYXkuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBsb2FkTmV4dCgpIHtcbiAgICBpZiAobmV4dEluZGV4IDwgaW1hZ2VzLmxlbmd0aCkge1xuICAgICAgdmFyIGltYWdlID0gaW1hZ2VzW25leHRJbmRleF07XG4gICAgICBsb2FkKGltYWdlLmltZywgaW1hZ2UuU2xpZGUpO1xuICAgIH1cblxuICAgIG5leHRJbmRleCsrO1xuICB9XG4gIC8qKlxyXG4gICAqIENhbGxlZCBqdXN0IGFmdGVyIHRoZSBpbWFnZSB3YXMgbG9hZGVkIG9yIGxvYWRpbmcgd2FzIGFib3J0ZWQgYnkgc29tZSBlcnJvci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gaW1nICAgICAtIEFuIGltYWdlIGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtFbGVtZW50fSBzcGlubmVyIC0gQSBzcGlubmVyIGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtPYmplY3R9ICBTbGlkZSAgIC0gQSBTbGlkZSBvYmplY3QuXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBlcnJvciAgIC0gVHJ1ZSBpZiB0aGUgaW1hZ2Ugd2FzIGxvYWRlZCBzdWNjZXNzZnVsbHkgb3IgZmFsc2Ugb24gZXJyb3IuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBsb2FkZWQoaW1nLCBzcGlubmVyLCBTbGlkZSwgZXJyb3IpIHtcbiAgICByZW1vdmVDbGFzcyhTbGlkZS5zbGlkZSwgU1RBVFVTX0NMQVNTRVMubG9hZGluZyk7XG5cbiAgICBpZiAoIWVycm9yKSB7XG4gICAgICBkb21fcmVtb3ZlKHNwaW5uZXIpO1xuICAgICAgYXBwbHlTdHlsZShpbWcsIHtcbiAgICAgICAgZGlzcGxheTogJydcbiAgICAgIH0pO1xuICAgICAgU3BsaWRlLmVtaXQobmFtZSArIFwiOmxvYWRlZFwiLCBpbWcpLmVtaXQoJ3Jlc2l6ZScpO1xuICAgIH1cblxuICAgIGlmIChpc1NlcXVlbnRpYWwpIHtcbiAgICAgIGxvYWROZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIExhenlsb2FkO1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29uc3RhbnRzL2ExMXkuanNcbi8qKlxyXG4gKiBFeHBvcnQgYXJpYSBhdHRyaWJ1dGUgbmFtZXMuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuLyoqXHJcbiAqIEF0dHJpYnV0ZSBuYW1lIGZvciBhcmlhLWN1cnJlbnQuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xudmFyIEFSSUFfQ1VSUkVOUlQgPSAnYXJpYS1jdXJyZW50Jztcbi8qKlxyXG4gKiBBdHRyaWJ1dGUgbmFtZSBmb3IgYXJpYS1jb250cm9sLlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cblxudmFyIEFSSUFfQ09OVFJPTFMgPSAnYXJpYS1jb250cm9scyc7XG4vKipcclxuICogQXR0cmlidXRlIG5hbWUgZm9yIGFyaWEtY29udHJvbC5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG5cbnZhciBBUklBX0xBQkVMID0gJ2FyaWEtbGFiZWwnO1xuLyoqXHJcbiAqIEF0dHJpYnV0ZSBuYW1lIGZvciBhcmlhLWxhYmVsbGVkYnkuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xuXG52YXIgQVJJQV9MQUJFTExFREJZID0gJ2FyaWEtbGFiZWxsZWRieSc7XG4vKipcclxuICogQXR0cmlidXRlIG5hbWUgZm9yIGFyaWEtaGlkZGVuLlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cblxudmFyIEFSSUFfSElEREVOID0gJ2FyaWEtaGlkZGVuJztcbi8qKlxyXG4gKiBBdHRyaWJ1dGUgbmFtZSBmb3IgdGFiLWluZGV4LlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cblxudmFyIFRBQl9JTkRFWCA9ICd0YWJpbmRleCc7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9rZXlib2FyZC9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGNvbnRyb2xsaW5nIHNsaWRlcyB2aWEga2V5Ym9hcmQuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG4vKipcclxuICogTWFwIGEga2V5IHRvIGEgc2xpZGUgY29udHJvbC5cclxuICpcclxuICogQHR5cGUge09iamVjdH1cclxuICovXG5cbnZhciBLRVlfTUFQID0ge1xuICBsdHI6IHtcbiAgICBBcnJvd0xlZnQ6ICc8JyxcbiAgICBBcnJvd1JpZ2h0OiAnPicsXG4gICAgLy8gRm9yIElFLlxuICAgIExlZnQ6ICc8JyxcbiAgICBSaWdodDogJz4nXG4gIH0sXG4gIHJ0bDoge1xuICAgIEFycm93TGVmdDogJz4nLFxuICAgIEFycm93UmlnaHQ6ICc8JyxcbiAgICAvLyBGb3IgSUUuXG4gICAgTGVmdDogJz4nLFxuICAgIFJpZ2h0OiAnPCdcbiAgfSxcbiAgdHRiOiB7XG4gICAgQXJyb3dVcDogJzwnLFxuICAgIEFycm93RG93bjogJz4nLFxuICAgIC8vIEZvciBJRS5cbiAgICBVcDogJzwnLFxuICAgIERvd246ICc+J1xuICB9XG59O1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGNvbnRyb2xsaW5nIHNsaWRlcyB2aWEga2V5Ym9hcmQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBrZXlib2FyZCA9IChmdW5jdGlvbiAoU3BsaWRlKSB7XG4gIC8qKlxyXG4gICAqIEhvbGQgdGhlIHRhcmdldCBlbGVtZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge0VsZW1lbnR8RG9jdW1lbnR8dW5kZWZpbmVkfVxyXG4gICAqL1xuICB2YXIgdGFyZ2V0O1xuICByZXR1cm4ge1xuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgU3BsaWRlLm9uKCdtb3VudGVkIHVwZGF0ZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG4gICAgICAgIHZhciByb290ID0gU3BsaWRlLnJvb3Q7XG4gICAgICAgIHZhciBtYXAgPSBLRVlfTUFQW29wdGlvbnMuZGlyZWN0aW9uXTtcbiAgICAgICAgdmFyIGtleWJvYXJkID0gb3B0aW9ucy5rZXlib2FyZDtcblxuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgU3BsaWRlLm9mZigna2V5ZG93bicsIHRhcmdldCk7XG4gICAgICAgICAgcmVtb3ZlQXR0cmlidXRlKHJvb3QsIFRBQl9JTkRFWCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5Ym9hcmQpIHtcbiAgICAgICAgICBpZiAoa2V5Ym9hcmQgPT09ICdmb2N1c2VkJykge1xuICAgICAgICAgICAgdGFyZ2V0ID0gcm9vdDtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZShyb290LCBUQUJfSU5ERVgsIDApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXQgPSBkb2N1bWVudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBTcGxpZGUub24oJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKG1hcFtlLmtleV0pIHtcbiAgICAgICAgICAgICAgU3BsaWRlLmdvKG1hcFtlLmtleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvYTExeS9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGVuaGFuY2luZyBhY2Nlc3NpYmlsaXR5LlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgZW5oYW5jaW5nIGFjY2Vzc2liaWxpdHkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgICAgIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBDb21wb25lbnRzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgY29tcG9uZW50cy5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBhMTF5ID0gKGZ1bmN0aW9uIChTcGxpZGUsIENvbXBvbmVudHMpIHtcbiAgLyoqXHJcbiAgICogSG9sZCBhIGkxOG4gb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cbiAgdmFyIGkxOG4gPSBTcGxpZGUuaTE4bjtcbiAgLyoqXHJcbiAgICogSG9sZCB0aGUgRWxlbWVudHMgY29tcG9uZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgRWxlbWVudHMgPSBDb21wb25lbnRzLkVsZW1lbnRzO1xuICAvKipcclxuICAgKiBBbGwgYXR0cmlidXRlcyByZWxhdGVkIHdpdGggQTExeS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmdbXX1cclxuICAgKi9cblxuICB2YXIgYWxsQXR0cmlidXRlcyA9IFtBUklBX0hJRERFTiwgVEFCX0lOREVYLCBBUklBX0NPTlRST0xTLCBBUklBX0xBQkVMLCBBUklBX0NVUlJFTlJULCAncm9sZSddO1xuICAvKipcclxuICAgKiBBMTF5IGNvbXBvbmVudCBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBBMTF5ID0ge1xuICAgIC8qKlxyXG4gICAgICogUmVxdWlyZWQgb25seSB3aGVuIHRoZSBhY2Nlc3NpYmlsaXR5IG9wdGlvbiBpcyB0cnVlLlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICovXG4gICAgcmVxdWlyZWQ6IFNwbGlkZS5vcHRpb25zLmFjY2Vzc2liaWxpdHksXG5cbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIFNwbGlkZS5vbigndmlzaWJsZScsIGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgICB1cGRhdGVTbGlkZShTbGlkZS5zbGlkZSwgdHJ1ZSk7XG4gICAgICB9KS5vbignaGlkZGVuJywgZnVuY3Rpb24gKFNsaWRlKSB7XG4gICAgICAgIHVwZGF0ZVNsaWRlKFNsaWRlLnNsaWRlLCBmYWxzZSk7XG4gICAgICB9KS5vbignYXJyb3dzOm1vdW50ZWQnLCBpbml0QXJyb3dzKS5vbignYXJyb3dzOnVwZGF0ZWQnLCB1cGRhdGVBcnJvd3MpLm9uKCdwYWdpbmF0aW9uOm1vdW50ZWQnLCBpbml0UGFnaW5hdGlvbikub24oJ3BhZ2luYXRpb246dXBkYXRlZCcsIHVwZGF0ZVBhZ2luYXRpb24pLm9uKCdyZWZyZXNoJywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZW1vdmVBdHRyaWJ1dGUoQ29tcG9uZW50cy5DbG9uZXMuY2xvbmVzLCBhbGxBdHRyaWJ1dGVzKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoU3BsaWRlLm9wdGlvbnMuaXNOYXZpZ2F0aW9uKSB7XG4gICAgICAgIFNwbGlkZS5vbignbmF2aWdhdGlvbjptb3VudGVkIG5hdmlnYXRpb246dXBkYXRlZCcsIGluaXROYXZpZ2F0aW9uKS5vbignYWN0aXZlJywgZnVuY3Rpb24gKFNsaWRlKSB7XG4gICAgICAgICAgdXBkYXRlTmF2aWdhdGlvbihTbGlkZSwgdHJ1ZSk7XG4gICAgICAgIH0pLm9uKCdpbmFjdGl2ZScsIGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgICAgIHVwZGF0ZU5hdmlnYXRpb24oU2xpZGUsIGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGluaXRBdXRvcGxheSgpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIERlc3Ryb3kuXHJcbiAgICAgKi9cbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgdmFyIEFycm93cyA9IENvbXBvbmVudHMuQXJyb3dzO1xuICAgICAgdmFyIGFycm93cyA9IEFycm93cyA/IEFycm93cy5hcnJvd3MgOiB7fTtcbiAgICAgIHJlbW92ZUF0dHJpYnV0ZShFbGVtZW50cy5zbGlkZXMuY29uY2F0KFthcnJvd3MucHJldiwgYXJyb3dzLm5leHQsIEVsZW1lbnRzLnBsYXksIEVsZW1lbnRzLnBhdXNlXSksIGFsbEF0dHJpYnV0ZXMpO1xuICAgIH1cbiAgfTtcbiAgLyoqXHJcbiAgICogVXBkYXRlIHNsaWRlIGF0dHJpYnV0ZXMgd2hlbiBpdCBnZXRzIHZpc2libGUgb3IgaGlkZGVuLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtFbGVtZW50fSBzbGlkZSAgIC0gQSBzbGlkZSBlbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmlzaWJsZSAtIFRydWUgd2hlbiB0aGUgc2xpZGUgZ2V0cyB2aXNpYmxlLCBvciBmYWxzZSB3aGVuIGhpZGRlbi5cclxuICAgKi9cblxuICBmdW5jdGlvbiB1cGRhdGVTbGlkZShzbGlkZSwgdmlzaWJsZSkge1xuICAgIHNldEF0dHJpYnV0ZShzbGlkZSwgQVJJQV9ISURERU4sICF2aXNpYmxlKTtcblxuICAgIGlmIChTcGxpZGUub3B0aW9ucy5zbGlkZUZvY3VzKSB7XG4gICAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsIFRBQl9JTkRFWCwgdmlzaWJsZSA/IDAgOiAtMSk7XG4gICAgfVxuICB9XG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemUgYXJyb3dzIGlmIHRoZXkgYXJlIGF2YWlsYWJsZS5cclxuICAgKiBBcHBlbmQgc2NyZWVuIHJlYWRlciBlbGVtZW50cyBhbmQgYWRkIGFyaWEtY29udHJvbHMgYXR0cmlidXRlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtFbGVtZW50fSBwcmV2IC0gUHJldmlvdXMgYXJyb3cgZWxlbWVudC5cclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IG5leHQgLSBOZXh0IGFycm93IGVsZW1lbnQuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBpbml0QXJyb3dzKHByZXYsIG5leHQpIHtcbiAgICB2YXIgY29udHJvbHMgPSBFbGVtZW50cy50cmFjay5pZDtcbiAgICBzZXRBdHRyaWJ1dGUocHJldiwgQVJJQV9DT05UUk9MUywgY29udHJvbHMpO1xuICAgIHNldEF0dHJpYnV0ZShuZXh0LCBBUklBX0NPTlRST0xTLCBjb250cm9scyk7XG4gIH1cbiAgLyoqXHJcbiAgICogVXBkYXRlIGFycm93IGF0dHJpYnV0ZXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHByZXYgICAgICAtIFByZXZpb3VzIGFycm93IGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtFbGVtZW50fSBuZXh0ICAgICAgLSBOZXh0IGFycm93IGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9ICBwcmV2SW5kZXggLSBQcmV2aW91cyBzbGlkZSBpbmRleCBvciAtMSB3aGVuIHRoZXJlIGlzIG5vIHByZWNlZGUgc2xpZGUuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9ICBuZXh0SW5kZXggLSBOZXh0IHNsaWRlIGluZGV4IG9yIC0xIHdoZW4gdGhlcmUgaXMgbm8gbmV4dCBzbGlkZS5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUFycm93cyhwcmV2LCBuZXh0LCBwcmV2SW5kZXgsIG5leHRJbmRleCkge1xuICAgIHZhciBpbmRleCA9IFNwbGlkZS5pbmRleDtcbiAgICB2YXIgcHJldkxhYmVsID0gcHJldkluZGV4ID4gLTEgJiYgaW5kZXggPCBwcmV2SW5kZXggPyBpMThuLmxhc3QgOiBpMThuLnByZXY7XG4gICAgdmFyIG5leHRMYWJlbCA9IG5leHRJbmRleCA+IC0xICYmIGluZGV4ID4gbmV4dEluZGV4ID8gaTE4bi5maXJzdCA6IGkxOG4ubmV4dDtcbiAgICBzZXRBdHRyaWJ1dGUocHJldiwgQVJJQV9MQUJFTCwgcHJldkxhYmVsKTtcbiAgICBzZXRBdHRyaWJ1dGUobmV4dCwgQVJJQV9MQUJFTCwgbmV4dExhYmVsKTtcbiAgfVxuICAvKipcclxuICAgKiBJbml0aWFsaXplIHBhZ2luYXRpb24gaWYgaXQncyBhdmFpbGFibGUuXHJcbiAgICogQXBwZW5kIGEgc2NyZWVuIHJlYWRlciBlbGVtZW50IGFuZCBhZGQgYXJpYS1jb250cm9scy9sYWJlbCBhdHRyaWJ1dGUgdG8gZWFjaCBpdGVtLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgICAgICAgLSBEYXRhIG9iamVjdCBjb250YWluaW5nIGFsbCBpdGVtcy5cclxuICAgKiBAcGFyYW0ge09iamVjdH0gYWN0aXZlSXRlbSAtIEFuIGluaXRpYWwgYWN0aXZlIGl0ZW0uXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBpbml0UGFnaW5hdGlvbihkYXRhLCBhY3RpdmVJdGVtKSB7XG4gICAgaWYgKGFjdGl2ZUl0ZW0pIHtcbiAgICAgIHNldEF0dHJpYnV0ZShhY3RpdmVJdGVtLmJ1dHRvbiwgQVJJQV9DVVJSRU5SVCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgZGF0YS5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IFNwbGlkZS5vcHRpb25zO1xuICAgICAgdmFyIHRleHQgPSBvcHRpb25zLmZvY3VzID09PSBmYWxzZSAmJiBvcHRpb25zLnBlclBhZ2UgPiAxID8gaTE4bi5wYWdlWCA6IGkxOG4uc2xpZGVYO1xuICAgICAgdmFyIGxhYmVsID0gc3ByaW50Zih0ZXh0LCBpdGVtLnBhZ2UgKyAxKTtcbiAgICAgIHZhciBidXR0b24gPSBpdGVtLmJ1dHRvbjtcbiAgICAgIHZhciBjb250cm9scyA9IGl0ZW0uU2xpZGVzLm1hcChmdW5jdGlvbiAoU2xpZGUpIHtcbiAgICAgICAgcmV0dXJuIFNsaWRlLnNsaWRlLmlkO1xuICAgICAgfSk7XG4gICAgICBzZXRBdHRyaWJ1dGUoYnV0dG9uLCBBUklBX0NPTlRST0xTLCBjb250cm9scy5qb2luKCcgJykpO1xuICAgICAgc2V0QXR0cmlidXRlKGJ1dHRvbiwgQVJJQV9MQUJFTCwgbGFiZWwpO1xuICAgIH0pO1xuICB9XG4gIC8qKlxyXG4gICAqIFVwZGF0ZSBwYWdpbmF0aW9uIGF0dHJpYnV0ZXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gIGRhdGEgLSBEYXRhIG9iamVjdCBjb250YWluaW5nIGFsbCBpdGVtcy5cclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHByZXYgLSBBIHByZXZpb3VzIGFjdGl2ZSBlbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gY3VyciAtIEEgY3VycmVudCBhY3RpdmUgZWxlbWVudC5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVBhZ2luYXRpb24oZGF0YSwgcHJldiwgY3Vycikge1xuICAgIGlmIChwcmV2KSB7XG4gICAgICByZW1vdmVBdHRyaWJ1dGUocHJldi5idXR0b24sIEFSSUFfQ1VSUkVOUlQpO1xuICAgIH1cblxuICAgIGlmIChjdXJyKSB7XG4gICAgICBzZXRBdHRyaWJ1dGUoY3Vyci5idXR0b24sIEFSSUFfQ1VSUkVOUlQsIHRydWUpO1xuICAgIH1cbiAgfVxuICAvKipcclxuICAgKiBJbml0aWFsaXplIGF1dG9wbGF5IGJ1dHRvbnMuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBpbml0QXV0b3BsYXkoKSB7XG4gICAgWydwbGF5JywgJ3BhdXNlJ10uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdmFyIGVsbSA9IEVsZW1lbnRzW25hbWVdO1xuXG4gICAgICBpZiAoZWxtKSB7XG4gICAgICAgIGlmICghaXNCdXR0b24oZWxtKSkge1xuICAgICAgICAgIHNldEF0dHJpYnV0ZShlbG0sICdyb2xlJywgJ2J1dHRvbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0QXR0cmlidXRlKGVsbSwgQVJJQV9DT05UUk9MUywgRWxlbWVudHMudHJhY2suaWQpO1xuICAgICAgICBzZXRBdHRyaWJ1dGUoZWxtLCBBUklBX0xBQkVMLCBpMThuW25hbWVdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvKipcclxuICAgKiBJbml0aWFsaXplIG5hdmlnYXRpb24gc2xpZGVyLlxyXG4gICAqIEFkZCBidXR0b24gcm9sZSwgYXJpYS1sYWJlbCwgYXJpYS1jb250cm9scyB0byBzbGlkZSBlbGVtZW50cyBhbmQgYXBwZW5kIHNjcmVlbiByZWFkZXIgdGV4dCB0byB0aGVtLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTcGxpZGV9IG1haW4gLSBBIG1haW4gU3BsaWRlIGluc3RhbmNlLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gaW5pdE5hdmlnYXRpb24obWFpbikge1xuICAgIEVsZW1lbnRzLmVhY2goZnVuY3Rpb24gKFNsaWRlKSB7XG4gICAgICB2YXIgc2xpZGUgPSBTbGlkZS5zbGlkZTtcbiAgICAgIHZhciByZWFsSW5kZXggPSBTbGlkZS5yZWFsSW5kZXg7XG5cbiAgICAgIGlmICghaXNCdXR0b24oc2xpZGUpKSB7XG4gICAgICAgIHNldEF0dHJpYnV0ZShzbGlkZSwgJ3JvbGUnLCAnYnV0dG9uJyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzbGlkZUluZGV4ID0gcmVhbEluZGV4ID4gLTEgPyByZWFsSW5kZXggOiBTbGlkZS5pbmRleDtcbiAgICAgIHZhciBsYWJlbCA9IHNwcmludGYoaTE4bi5zbGlkZVgsIHNsaWRlSW5kZXggKyAxKTtcbiAgICAgIHZhciBtYWluU2xpZGUgPSBtYWluLkNvbXBvbmVudHMuRWxlbWVudHMuZ2V0U2xpZGUoc2xpZGVJbmRleCk7XG4gICAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsIEFSSUFfTEFCRUwsIGxhYmVsKTtcblxuICAgICAgaWYgKG1haW5TbGlkZSkge1xuICAgICAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsIEFSSUFfQ09OVFJPTFMsIG1haW5TbGlkZS5zbGlkZS5pZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgLyoqXHJcbiAgICogVXBkYXRlIG5hdmlnYXRpb24gYXR0cmlidXRlcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAgU2xpZGUgIC0gQSB0YXJnZXQgU2xpZGUgb2JqZWN0LlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gYWN0aXZlIC0gVHJ1ZSBpZiB0aGUgc2xpZGUgaXMgYWN0aXZlIG9yIGZhbHNlIGlmIGluYWN0aXZlLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gdXBkYXRlTmF2aWdhdGlvbihfcmVmLCBhY3RpdmUpIHtcbiAgICB2YXIgc2xpZGUgPSBfcmVmLnNsaWRlO1xuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgc2V0QXR0cmlidXRlKHNsaWRlLCBBUklBX0NVUlJFTlJULCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlQXR0cmlidXRlKHNsaWRlLCBBUklBX0NVUlJFTlJUKTtcbiAgICB9XG4gIH1cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIGVsZW1lbnQgaXMgYnV0dG9uIG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxtIC0gQW4gZWxlbWVudCB0byBiZSBjaGVja2VkLlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gLSBUcnVlIGlmIHRoZSBnaXZlbiBlbGVtZW50IGlzIGJ1dHRvbi5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGlzQnV0dG9uKGVsbSkge1xuICAgIHJldHVybiBlbG0udGFnTmFtZSA9PT0gJ0JVVFRPTic7XG4gIH1cblxuICByZXR1cm4gQTExeTtcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvc3luYy9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIHN5bmNocm9uaXppbmcgYSBzbGlkZXIgd2l0aCBhbm90aGVyLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuLyoqXHJcbiAqIFRoZSBldmVudCBuYW1lIGZvciBzeW5jLlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cblxudmFyIFNZTkNfRVZFTlQgPSAnbW92ZS5zeW5jJztcbi8qKlxyXG4gKiBUaGUgZXZlbnQgbmFtZXMgZm9yIGNsaWNrIG5hdmlnYXRpb24uXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xuXG52YXIgQ0xJQ0tfRVZFTlRTID0gJ21vdXNldXAgdG91Y2hlbmQnO1xuLyoqXHJcbiAqIFRoZSBrZXlzIGZvciB0cmlnZ2VyaW5nIHRoZSBuYXZpZ2F0aW9uIGJ1dHRvbi5cclxuICpcclxuICogQHR5cGUge1N0cmluZ1tdfVxyXG4gKi9cblxudmFyIFRSSUdHRVJfS0VZUyA9IFsnICcsICdFbnRlcicsICdTcGFjZWJhciddO1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIHN5bmNocm9uaXppbmcgYSBzbGlkZXIgd2l0aCBhbm90aGVyLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgY29tcG9uZW50IG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3Qgc3luYyA9IChmdW5jdGlvbiAoU3BsaWRlKSB7XG4gIC8qKlxyXG4gICAqIEtlZXAgdGhlIHNpYmxpbmcgU3BsaWRlIGluc3RhbmNlLlxyXG4gICAqXHJcbiAgICogQHR5cGUge1NwbGlkZX1cclxuICAgKi9cbiAgdmFyIHNpYmxpbmcgPSBTcGxpZGUuc2libGluZztcbiAgLyoqXHJcbiAgICogV2hldGhlciB0aGUgc2libGluZyBzbGlkZXIgaXMgbmF2aWdhdGlvbiBvciBub3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7U3BsaWRlfGJvb2xlYW59XHJcbiAgICovXG5cbiAgdmFyIGlzTmF2aWdhdGlvbiA9IHNpYmxpbmcgJiYgc2libGluZy5vcHRpb25zLmlzTmF2aWdhdGlvbjtcbiAgLyoqXHJcbiAgICogTGF5b3V0IGNvbXBvbmVudCBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBTeW5jID0ge1xuICAgIC8qKlxyXG4gICAgICogUmVxdWlyZWQgb25seSB3aGVuIHRoZSBzdWIgc2xpZGVyIGlzIGF2YWlsYWJsZS5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqL1xuICAgIHJlcXVpcmVkOiAhIXNpYmxpbmcsXG5cbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIHN5bmNNYWluKCk7XG4gICAgICBzeW5jU2libGluZygpO1xuXG4gICAgICBpZiAoaXNOYXZpZ2F0aW9uKSB7XG4gICAgICAgIGJpbmQoKTtcbiAgICAgICAgU3BsaWRlLm9uKCdyZWZyZXNoJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYmluZCgpO1xuICAgICAgICAgICAgc2libGluZy5lbWl0KCduYXZpZ2F0aW9uOnVwZGF0ZWQnLCBTcGxpZGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgYWZ0ZXIgYWxsIGNvbXBvbmVudHMgYXJlIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgICAgaWYgKGlzTmF2aWdhdGlvbikge1xuICAgICAgICBzaWJsaW5nLmVtaXQoJ25hdmlnYXRpb246bW91bnRlZCcsIFNwbGlkZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICAvKipcclxuICAgKiBMaXN0ZW4gdGhlIHByaW1hcnkgc2xpZGVyIGV2ZW50IHRvIG1vdmUgc2Vjb25kYXJ5IG9uZS5cclxuICAgKiBNdXN0IHVuYmluZCBhIGhhbmRsZXIgYXQgZmlyc3QgdG8gYXZvaWQgaW5maW5pdGUgbG9vcC5cclxuICAgKi9cblxuICBmdW5jdGlvbiBzeW5jTWFpbigpIHtcbiAgICBTcGxpZGUub24oU1lOQ19FVkVOVCwgZnVuY3Rpb24gKG5ld0luZGV4LCBwcmV2SW5kZXgsIGRlc3RJbmRleCkge1xuICAgICAgc2libGluZy5vZmYoU1lOQ19FVkVOVCkuZ28oc2libGluZy5pcyhMT09QKSA/IGRlc3RJbmRleCA6IG5ld0luZGV4LCBmYWxzZSk7XG4gICAgICBzeW5jU2libGluZygpO1xuICAgIH0pO1xuICB9XG4gIC8qKlxyXG4gICAqIExpc3RlbiB0aGUgc2Vjb25kYXJ5IHNsaWRlciBldmVudCB0byBtb3ZlIHByaW1hcnkgb25lLlxyXG4gICAqIE11c3QgdW5iaW5kIGEgaGFuZGxlciBhdCBmaXJzdCB0byBhdm9pZCBpbmZpbml0ZSBsb29wLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gc3luY1NpYmxpbmcoKSB7XG4gICAgc2libGluZy5vbihTWU5DX0VWRU5ULCBmdW5jdGlvbiAobmV3SW5kZXgsIHByZXZJbmRleCwgZGVzdEluZGV4KSB7XG4gICAgICBTcGxpZGUub2ZmKFNZTkNfRVZFTlQpLmdvKFNwbGlkZS5pcyhMT09QKSA/IGRlc3RJbmRleCA6IG5ld0luZGV4LCBmYWxzZSk7XG4gICAgICBzeW5jTWFpbigpO1xuICAgIH0pO1xuICB9XG4gIC8qKlxyXG4gICAqIExpc3RlbiBzb21lIGV2ZW50cyBvbiBlYWNoIHNsaWRlLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gYmluZCgpIHtcbiAgICBzaWJsaW5nLkNvbXBvbmVudHMuRWxlbWVudHMuZWFjaChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIHNsaWRlID0gX3JlZi5zbGlkZSxcbiAgICAgICAgICBpbmRleCA9IF9yZWYuaW5kZXg7XG5cbiAgICAgIC8qXHJcbiAgICAgICAqIExpc3RlbiBtb3VzZXVwIGFuZCB0b3VjaGVuZCBldmVudHMgdG8gaGFuZGxlIGNsaWNrLlxyXG4gICAgICAgKi9cbiAgICAgIFNwbGlkZS5vZmYoQ0xJQ0tfRVZFTlRTLCBzbGlkZSkub24oQ0xJQ0tfRVZFTlRTLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyBJZ25vcmUgYSBtaWRkbGUgb3IgcmlnaHQgY2xpY2suXG4gICAgICAgIGlmICghZS5idXR0b24gfHwgZS5idXR0b24gPT09IDApIHtcbiAgICAgICAgICBtb3ZlU2libGluZyhpbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHNsaWRlKTtcbiAgICAgIC8qXHJcbiAgICAgICAqIFN1YnNjcmliZSBrZXl1cCB0byBoYW5kbGUgRW50ZXIgYW5kIFNwYWNlIGtleS5cclxuICAgICAgICogTm90ZSB0aGF0IEFycmF5LmluY2x1ZGVzIGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUUuXHJcbiAgICAgICAqL1xuXG4gICAgICBTcGxpZGUub2ZmKCdrZXl1cCcsIHNsaWRlKS5vbigna2V5dXAnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoVFJJR0dFUl9LRVlTLmluZGV4T2YoZS5rZXkpID4gLTEpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgbW92ZVNpYmxpbmcoaW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9LCBzbGlkZSwge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgLyoqXHJcbiAgICogTW92ZSB0aGUgc2libGluZyB0byB0aGUgZ2l2ZW4gaW5kZXguXHJcbiAgICogTmVlZCB0byBjaGVjayBcIklETEVcIiBzdGF0dXMgYmVjYXVzZSBzbGlkZXMgY2FuIGJlIG1vdmluZyBieSBEcmFnIGNvbXBvbmVudC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIFRhcmdldCBpbmRleC5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIG1vdmVTaWJsaW5nKGluZGV4KSB7XG4gICAgaWYgKFNwbGlkZS5TdGF0ZS5pcyhJRExFKSkge1xuICAgICAgc2libGluZy5nbyhpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFN5bmM7XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL2JyZWFrcG9pbnRzL2luZGV4LmpzXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgdXBkYXRpbmcgb3B0aW9ucyBhY2NvcmRpbmcgdG8gYSBjdXJyZW50IHdpbmRvdyB3aWR0aC5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cbi8qKlxyXG4gKiBJbnRlcnZhbCB0aW1lIGZvciB0aHJvdHRsZS5cclxuICpcclxuICogQHR5cGUge251bWJlcn1cclxuICovXG5cbnZhciBUSFJPVFRMRSA9IDUwO1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIHVwZGF0aW5nIG9wdGlvbnMgYWNjb3JkaW5nIHRvIGEgY3VycmVudCB3aW5kb3cgd2lkdGguXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBicmVha3BvaW50cyA9IChmdW5jdGlvbiAoU3BsaWRlKSB7XG4gIC8qKlxyXG4gICAqIFN0b3JlIGJyZWFrcG9pbnRzLlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdHxib29sZWFufVxyXG4gICAqL1xuICB2YXIgYnJlYWtwb2ludHMgPSBTcGxpZGUub3B0aW9ucy5icmVha3BvaW50cztcbiAgLyoqXHJcbiAgICogVGhlIGNoZWNrIGZ1bmN0aW9uIHdob3NlIGZyZXF1ZW5jeSBvZiBjYWxsIGlzIHJlZHVjZWQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RnVuY3Rpb259XHJcbiAgICovXG5cbiAgdmFyIHRocm90dGxlZENoZWNrID0gdGhyb3R0bGUoY2hlY2ssIFRIUk9UVExFKTtcbiAgLyoqXHJcbiAgICogS2VlcCBpbml0aWFsIG9wdGlvbnMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBpbml0aWFsT3B0aW9ucztcbiAgLyoqXHJcbiAgICogQW4gYXJyYXkgY29udGFpbmluZyBvYmplY3RzIG9mIHBvaW50IGFuZCBNZWRpYVF1ZXJ5TGlzdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3RbXX1cclxuICAgKi9cblxuICB2YXIgbWFwID0gW107XG4gIC8qKlxyXG4gICAqIEhvbGQgdGhlIHByZXZpb3VzIGJyZWFrcG9pbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfHVuZGVmaW5lZH1cclxuICAgKi9cblxuICB2YXIgcHJldlBvaW50O1xuICAvKipcclxuICAgKiBCcmVha3BvaW50cyBjb21wb25lbnQgb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgQnJlYWtwb2ludHMgPSB7XG4gICAgLyoqXHJcbiAgICAgKiBSZXF1aXJlZCBvbmx5IHdoZW4gdGhlIGJyZWFrcG9pbnRzIGRlZmluaXRpb24gaXMgcHJvdmlkZWQgYW5kIGJyb3dzZXIgc3VwcG9ydHMgbWF0Y2hNZWRpYS5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqL1xuICAgIHJlcXVpcmVkOiBicmVha3BvaW50cyAmJiBtYXRjaE1lZGlhLFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICBtYXAgPSBPYmplY3Qua2V5cyhicmVha3BvaW50cykuc29ydChmdW5jdGlvbiAobiwgbSkge1xuICAgICAgICByZXR1cm4gK24gLSArbTtcbiAgICAgIH0pLm1hcChmdW5jdGlvbiAocG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwb2ludDogcG9pbnQsXG4gICAgICAgICAgbXFsOiBtYXRjaE1lZGlhKFwiKG1heC13aWR0aDpcIiArIHBvaW50ICsgXCJweClcIilcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgLypcclxuICAgICAgICogVG8ga2VlcCBtb25pdG9yaW5nIHJlc2l6ZSBldmVudCBhZnRlciBkZXN0cnVjdGlvbiB3aXRob3V0IFwiY29tcGxldGVseVwiLFxyXG4gICAgICAgKiB1c2UgbmF0aXZlIGFkZEV2ZW50TGlzdGVuZXIgaW5zdGVhZCBvZiBTcGxpZGUub24uXHJcbiAgICAgICAqL1xuXG4gICAgICB0aGlzLmRlc3Ryb3kodHJ1ZSk7XG4gICAgICBhZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aHJvdHRsZWRDaGVjayk7IC8vIEtlZXAgaW5pdGlhbCBvcHRpb25zIHRvIGFwcGx5IHRoZW0gd2hlbiBubyBicmVha3BvaW50IG1hdGNoZXMuXG5cbiAgICAgIGluaXRpYWxPcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG4gICAgICBjaGVjaygpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIERlc3Ryb3kuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBjb21wbGV0ZWx5IC0gV2hldGhlciB0byBkZXN0cm95IFNwbGlkZSBjb21wbGV0ZWx5LlxyXG4gICAgICovXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveShjb21wbGV0ZWx5KSB7XG4gICAgICBpZiAoY29tcGxldGVseSkge1xuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aHJvdHRsZWRDaGVjayk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICAvKipcclxuICAgKiBDaGVjayB0aGUgYnJlYWtwb2ludC5cclxuICAgKi9cblxuICBmdW5jdGlvbiBjaGVjaygpIHtcbiAgICB2YXIgcG9pbnQgPSBnZXRQb2ludCgpO1xuXG4gICAgaWYgKHBvaW50ICE9PSBwcmV2UG9pbnQpIHtcbiAgICAgIHByZXZQb2ludCA9IHBvaW50O1xuICAgICAgdmFyIFN0YXRlID0gU3BsaWRlLlN0YXRlO1xuICAgICAgdmFyIG9wdGlvbnMgPSBicmVha3BvaW50c1twb2ludF0gfHwgaW5pdGlhbE9wdGlvbnM7XG4gICAgICB2YXIgZGVzdHJveSA9IG9wdGlvbnMuZGVzdHJveTtcblxuICAgICAgaWYgKGRlc3Ryb3kpIHtcbiAgICAgICAgU3BsaWRlLm9wdGlvbnMgPSBpbml0aWFsT3B0aW9ucztcbiAgICAgICAgU3BsaWRlLmRlc3Ryb3koZGVzdHJveSA9PT0gJ2NvbXBsZXRlbHknKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChTdGF0ZS5pcyhERVNUUk9ZRUQpKSB7XG4gICAgICAgICAgU3BsaWRlLm1vdW50KCk7XG4gICAgICAgIH1cblxuICAgICAgICBTcGxpZGUub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxyXG4gICAqIFJldHVybiB0aGUgYnJlYWtwb2ludCBtYXRjaGluZyBjdXJyZW50IHdpbmRvdyB3aWR0aC5cclxuICAgKiBOb3RlIHRoYXQgQXJyYXkucHJvdG90eXBlLmZpbmQgaXMgbm90IHN1cHBvcnRlZCBieSBJRS5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge251bWJlcnxzdHJpbmd9IC0gQSBicmVha3BvaW50IGFzIG51bWJlciBvciBzdHJpbmcuIC0xIGlmIG5vIHBvaW50IG1hdGNoZXMuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBnZXRQb2ludCgpIHtcbiAgICB2YXIgaXRlbSA9IG1hcC5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtLm1xbC5tYXRjaGVzO1xuICAgIH0pWzBdO1xuICAgIHJldHVybiBpdGVtID8gaXRlbS5wb2ludCA6IC0xO1xuICB9XG5cbiAgcmV0dXJuIEJyZWFrcG9pbnRzO1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9pbmRleC5qc1xuLyoqXHJcbiAqIEV4cG9ydCBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxudmFyIENPTVBMRVRFID0ge1xuICBPcHRpb25zOiBvcHRpb25zLFxuICBCcmVha3BvaW50czogYnJlYWtwb2ludHMsXG4gIENvbnRyb2xsZXI6IGNvbnRyb2xsZXIsXG4gIEVsZW1lbnRzOiBjb21wb25lbnRzX2VsZW1lbnRzLFxuICBUcmFjazogdHJhY2ssXG4gIENsb25lczogY2xvbmVzLFxuICBMYXlvdXQ6IGxheW91dCxcbiAgRHJhZzogZHJhZyxcbiAgQ2xpY2s6IGNsaWNrLFxuICBBdXRvcGxheTogYXV0b3BsYXksXG4gIENvdmVyOiBjb3ZlcixcbiAgQXJyb3dzOiBhcnJvd3MsXG4gIFBhZ2luYXRpb246IHBhZ2luYXRpb24sXG4gIExhenlMb2FkOiBsYXp5bG9hZCxcbiAgS2V5Ym9hcmQ6IGtleWJvYXJkLFxuICBTeW5jOiBzeW5jLFxuICBBMTF5OiBhMTF5XG59O1xudmFyIExJR0hUID0ge1xuICBPcHRpb25zOiBvcHRpb25zLFxuICBDb250cm9sbGVyOiBjb250cm9sbGVyLFxuICBFbGVtZW50czogY29tcG9uZW50c19lbGVtZW50cyxcbiAgVHJhY2s6IHRyYWNrLFxuICBDbG9uZXM6IGNsb25lcyxcbiAgTGF5b3V0OiBsYXlvdXQsXG4gIERyYWc6IGRyYWcsXG4gIENsaWNrOiBjbGljayxcbiAgQXJyb3dzOiBhcnJvd3MsXG4gIFBhZ2luYXRpb246IHBhZ2luYXRpb24sXG4gIEExMXk6IGExMXlcbn07XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9idWlsZC9tb2R1bGUvbW9kdWxlLmpzXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXHJcbiAqIEV4cG9ydCBTcGxpZGUgY2xhc3MgZm9yIGltcG9ydC5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cbi8qKlxyXG4gKiBFeHBvcnQgU3BsaWRlIGNsYXNzIGZvciBpbXBvcnQgZnJvbSBvdGhlciBwcm9qZWN0cy5cclxuICovXG5cbnZhciBtb2R1bGVfU3BsaWRlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29yZSkge1xuICBfaW5oZXJpdHNMb29zZShTcGxpZGUsIF9Db3JlKTtcblxuICBmdW5jdGlvbiBTcGxpZGUocm9vdCwgb3B0aW9ucykge1xuICAgIHJldHVybiBfQ29yZS5jYWxsKHRoaXMsIHJvb3QsIG9wdGlvbnMsIENPTVBMRVRFKSB8fCB0aGlzO1xuICB9XG5cbiAgcmV0dXJuIFNwbGlkZTtcbn0oU3BsaWRlKTtcblxuXG5cbi8qKiovIH0pXG5cbi8qKioqKiovIFx0fSk7XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqLyBcdFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzICovXG4vKioqKioqLyBcdCgoKSA9PiB7XG4vKioqKioqLyBcdFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG4vKioqKioqLyBcdFx0XHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG4vKioqKioqLyBcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHR9KSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCAqL1xuLyoqKioqKi8gXHQoKCkgPT4ge1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApXG4vKioqKioqLyBcdH0pKCk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0ICovXG4vKioqKioqLyBcdCgoKSA9PiB7XG4vKioqKioqLyBcdFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG4vKioqKioqLyBcdFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdH0pKCk7XG4vKioqKioqLyBcdFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8qKioqKiovIFx0Ly8gc3RhcnR1cFxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMzExKTtcbi8qKioqKiovIH0pKClcbjtcbn0pOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi9zcmMvZm9udHMvQ2Fwc3V1bGEudHRmXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkNhcHN1dWxhXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcInRydWVUeXBlXFxcIik7XFxufVxcbmJvZHkge1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgZm9udC1mYW1pbHk6IENhcHN1dWxhO1xcbn1cXG5cXG4uZ3JpZC1jb250YWluZXIgLnNtYWxsLWJnLXdoaXRlIC5tZWRpdW0tcHQtMTI4IC5wdC04MCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LWZhbWlseTogQXZlbmlyLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLS1zd2lwZXItdGhlbWUtY29sb3I6ICMwMDdhZmY7XFxuICAtLXN3aXBlci1uYXZpZ2F0aW9uLXNpemU6IDQ0cHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICBtYXgtd2lkdGg6IDkwcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBwYWRkaW5nLXRvcDogOHJlbTtcXG59XFxuXFxuLmdyaWQteCAuZ3JpZC1tYXJnaW4teCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LWZhbWlseTogQXZlbmlyLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLS1zd2lwZXItdGhlbWUtY29sb3I6ICMwMDdhZmY7XFxuICAtLXN3aXBlci1uYXZpZ2F0aW9uLXNpemU6IDQ0cHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbWFpbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUNBO0VBQ0UsdUJBQUE7RUFDQSwrREFBQTtBQUVGO0FBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLGlEQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBR0Y7O0FBREE7RUFDRSxlQUFBO0VBQ0EsaURBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFJRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ2Fwc3V1bGFcXFwiO1xcclxcbiAgc3JjOiB1cmwoXFxcIi4vc3JjL2ZvbnRzL0NhcHN1dWxhLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZVR5cGVcXFwiKTtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBmb250LWZhbWlseTogQ2Fwc3V1bGE7XFxyXFxufVxcclxcbi5ncmlkLWNvbnRhaW5lciAuc21hbGwtYmctd2hpdGUgLm1lZGl1bS1wdC0xMjggLnB0LTgwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBdmVuaXIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcclxcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuICAtLXN3aXBlci10aGVtZS1jb2xvcjogIzAwN2FmZjtcXHJcXG4gIC0tc3dpcGVyLW5hdmlnYXRpb24tc2l6ZTogNDRweDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXHJcXG4gIG1heC13aWR0aDogOTByZW07XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gIHBhZGRpbmctdG9wOiA4cmVtO1xcclxcbn1cXHJcXG4uZ3JpZC14IC5ncmlkLW1hcmdpbi14IHtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBdmVuaXIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcclxcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuICAtLXN3aXBlci10aGVtZS1jb2xvcjogIzAwN2FmZjtcXHJcXG4gIC0tc3dpcGVyLW5hdmlnYXRpb24tc2l6ZTogNDRweDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHt9O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uLy4uL2ltYWdlcy9ob21lLmpwZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Ib21lLW1vZHVsZV9fY29udGFpbmVyLS1mWWpBSCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IDI7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDAuNSkpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uSG9tZS1tb2R1bGVfX2xvZ28tLUYyeHJHIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgLyogcG9zaXRpb24gdGhlIHRvcCAgZWRnZSBvZiB0aGUgZWxlbWVudCBhdCB0aGUgbWlkZGxlIG9mIHRoZSBwYXJlbnQgKi9cXG4gIC8qIHBvc2l0aW9uIHRoZSBsZWZ0IGVkZ2Ugb2YgdGhlIGVsZW1lbnQgYXQgdGhlIG1pZGRsZSBvZiB0aGUgcGFyZW50ICovXFxuICB3aWR0aDogNjAwcHg7XFxuICBsZWZ0OiA1MCU7XFxuICB6LWluZGV4OiAyO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vSG9tZS5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsVUFBQTtFQUNBLDRHQUFBO0VBRUEsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBREY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUFVLHNFQUFBO0VBQ1Ysc0VBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiBcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDAuNSkpLFxcclxcbiAgICB1cmwoXFxcIi4uLy4uL2ltYWdlcy9ob21lLmpwZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG4ubG9nbyB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDUwJTsgLyogcG9zaXRpb24gdGhlIHRvcCAgZWRnZSBvZiB0aGUgZWxlbWVudCBhdCB0aGUgbWlkZGxlIG9mIHRoZSBwYXJlbnQgKi9cXHJcXG4gIC8qIHBvc2l0aW9uIHRoZSBsZWZ0IGVkZ2Ugb2YgdGhlIGVsZW1lbnQgYXQgdGhlIG1pZGRsZSBvZiB0aGUgcGFyZW50ICovXFxyXFxuICB3aWR0aDogNjAwcHg7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZS1tb2R1bGVfX2NvbnRhaW5lci0tZllqQUhcIixcblx0XCJsb2dvXCI6IFwiSG9tZS1tb2R1bGVfX2xvZ28tLUYyeHJHXCJcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmh5YnJpZENhcm91c2VsLW1vZHVsZV9fY29udGFpbmVyLS0zZjJfUyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogNjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDQwMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uaHlicmlkQ2Fyb3VzZWwtbW9kdWxlX19jb250YWluZXItLTNmMl9TIC5oeWJyaWRDYXJvdXNlbC1tb2R1bGVfX2NvbnRlbnQtY29udGFpbmVyLS0xNTR5NiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmh5YnJpZENhcm91c2VsLW1vZHVsZV9fY29udGVudC1pbWFnZS0tMV9Hck0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmh5YnJpZENhcm91c2VsLW1vZHVsZV9fdGV4dC1jb250ZW50LWNvbnRhaW5lci0tM3RJcUgge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMjtcXG4gIHBhZGRpbmctcmlnaHQ6IDgwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG4gIHdpZHRoOiA0MDBweDtcXG59XFxuLmh5YnJpZENhcm91c2VsLW1vZHVsZV9fdGV4dC1jb250ZW50LWNvbnRhaW5lci0tM3RJcUggaDUge1xcbiAgZm9udC1zaXplOiA0Mi44NHB4O1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBjb2xvcjogIzg2MDAxNjtcXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xcbn1cXG4uaHlicmlkQ2Fyb3VzZWwtbW9kdWxlX190ZXh0LWNvbnRlbnQtY29udGFpbmVyLS0zdElxSCBwIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBsaW5lLWhlaWdodDogMS4zO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmh5YnJpZENhcm91c2VsLW1vZHVsZV9fYmFubmVyLWNvbnRhaW5lci0tM1VRam8ge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IGNhbGMoNDEuNjY2NjclIC0gMnJlbSk7XFxuICBwYWRkaW5nLXRvcDogOHJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmh5YnJpZENhcm91c2VsLW1vZHVsZV9fYmFubmVyLWNvbnRlbnQtLTFJdmVlOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtOHJlbTtcXG4gIHJpZ2h0OiAtM3JlbTtcXG4gIGJvdHRvbTogLTJyZW07XFxuICB6LWluZGV4OiAxO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vaHlicmlkQ2Fyb3VzZWwubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBRUEsbUJBQUE7RUFDQSxvQkFBQTtFQVNBLFlBQUE7QUFQRjtBQUFFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBRUo7QUFDRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFBSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiA2MHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNDAwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAuY29udGVudC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB9XFxyXFxufVxcclxcbi5jb250ZW50LWltYWdlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWNvbnRlbnQtY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuXFxyXFxuICBwYWRkaW5nLXJpZ2h0OiA4MHB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxyXFxuXFxyXFxuICBoNSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDIuODRweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXHJcXG4gICAgY29sb3I6ICM4NjAwMTY7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xcclxcbiAgfVxcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgcCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmJhbm5lci1jb250YWluZXIge1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IGNhbGMoNDEuNjY2NjclIC0gMnJlbSk7XFxyXFxuICBwYWRkaW5nLXRvcDogOHJlbTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLmJhbm5lci1jb250ZW50IHtcXHJcXG4gICY6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IC04cmVtO1xcclxcblxcclxcbiAgICByaWdodDogLTNyZW07XFxyXFxuICAgIGJvdHRvbTogLTJyZW07XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiaHlicmlkQ2Fyb3VzZWwtbW9kdWxlX19jb250YWluZXItLTNmMl9TXCIsXG5cdFwiY29udGVudC1jb250YWluZXJcIjogXCJoeWJyaWRDYXJvdXNlbC1tb2R1bGVfX2NvbnRlbnQtY29udGFpbmVyLS0xNTR5NlwiLFxuXHRcImNvbnRlbnQtaW1hZ2VcIjogXCJoeWJyaWRDYXJvdXNlbC1tb2R1bGVfX2NvbnRlbnQtaW1hZ2UtLTFfR3JNXCIsXG5cdFwidGV4dC1jb250ZW50LWNvbnRhaW5lclwiOiBcImh5YnJpZENhcm91c2VsLW1vZHVsZV9fdGV4dC1jb250ZW50LWNvbnRhaW5lci0tM3RJcUhcIixcblx0XCJiYW5uZXItY29udGFpbmVyXCI6IFwiaHlicmlkQ2Fyb3VzZWwtbW9kdWxlX19iYW5uZXItY29udGFpbmVyLS0zVVFqb1wiLFxuXHRcImJhbm5lci1jb250ZW50XCI6IFwiaHlicmlkQ2Fyb3VzZWwtbW9kdWxlX19iYW5uZXItY29udGVudC0tMUl2ZWVcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaHlicmlkSW1hZ2UtbW9kdWxlX19jb250YWluZXItLUFSWEpxIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1hcmdpbi10b3A6IDE0MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTgwcHg7XFxufVxcblxcbi5oeWJyaWRJbWFnZS1tb2R1bGVfX2NvbnRlbnQtaW1hZ2UtY29udGFpbmVyLS1Cb0dzcyB7XFxuICB3aWR0aDogMTMxN3B4O1xcbiAgaGVpZ2h0OiA0MHJlbTtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuLmh5YnJpZEltYWdlLW1vZHVsZV9fY29udGVudC1pbWFnZS1jb250YWluZXItLUJvR3NzIC5oeWJyaWRJbWFnZS1tb2R1bGVfX2NvbnRlbnQtaW1hZ2UtLTFXelJOIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAtNHJlbTtcXG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4uaHlicmlkSW1hZ2UtbW9kdWxlX190ZXh0LWNvbnRhaW5lci0tM1NZNXEge1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAvKiBsZWZ0OmF1dG87ICovXFxuICAvKiByaWdodDotM3JlbTsgKi9cXG4gIHotaW5kZXg6IC0xO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDEsIDIsIDAuMjI2KTtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgdG9wOiAtMTJyZW07XFxufVxcbi5oeWJyaWRJbWFnZS1tb2R1bGVfX3RleHQtY29udGFpbmVyLS0zU1k1cTo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC04cmVtO1xcbiAgYm90dG9tOiAtMTNyZW07XFxuICB6LWluZGV4OiAtMTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi5oeWJyaWRJbWFnZS1tb2R1bGVfX3RleHQtY29udGVudC1jb250YWluZXItLWIwT0hZIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDI7XFxuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxufVxcbi5oeWJyaWRJbWFnZS1tb2R1bGVfX3RleHQtY29udGVudC1jb250YWluZXItLWIwT0hZIGg1IHtcXG4gIGZvbnQtc2l6ZTogNDIuODRweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBjb2xvcjogIzg2MDAxNjtcXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xcbn1cXG4uaHlicmlkSW1hZ2UtbW9kdWxlX190ZXh0LWNvbnRlbnQtY29udGFpbmVyLS1iME9IWSBwIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBsaW5lLWhlaWdodDogMS4zO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmh5YnJpZEltYWdlLW1vZHVsZV9fYmFubmVyLWNvbnRhaW5lci0tMUl5czcge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IGNhbGMoNDEuNjY2NjclIC0gMnJlbSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5oeWJyaWRJbWFnZS1tb2R1bGVfX2Jhbm5lci1jb250ZW50LS0xTGRvNjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLThyZW07XFxuICBsZWZ0OiBhdXRvO1xcbiAgLyogcmlnaHQ6IC0zcmVtOyAqL1xcbiAgYm90dG9tOiAtMnJlbTtcXG4gIHotaW5kZXg6IDE7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9oeWJyaWRJbWFnZS5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFFQSxvQkFBQTtBQUFGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFBRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUNBO0VBQ0UsaUJBQUE7RUFFQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxXQUFBO0VBRUEsa0JBQUE7RUFDQSx1QkFBQTtFQUVBLHNDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFGRjtBQUdFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBRko7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQVNBLFlBQUE7QUFWRjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBREo7QUFJRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFLQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUVBLGtCQUFBO0FBSEY7O0FBTUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFISlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVyIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIG1hcmdpbi10b3A6IDE0MHB4O1xcclxcblxcclxcbiAgbWFyZ2luLWJvdHRvbTogMTgwcHg7XFxyXFxufVxcclxcbi5jb250ZW50LWltYWdlLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTMxN3B4O1xcclxcbiAgaGVpZ2h0OiA0MHJlbTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIC5jb250ZW50LWltYWdlIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi10b3A6IC00cmVtO1xcclxcbiAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgfVxcclxcbn1cXHJcXG4udGV4dC1jb250YWluZXIge1xcclxcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxyXFxuXFxyXFxuICAvKiBsZWZ0OmF1dG87ICovXFxyXFxuICAvKiByaWdodDotM3JlbTsgKi9cXHJcXG5cXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcblxcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuXFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDEsIDIsIDAuMjI2KTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbiAgdG9wOiAtMTJyZW07XFxyXFxuICAmOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogLThyZW07XFxyXFxuXFxyXFxuICAgIGJvdHRvbTogLTEzcmVtO1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgfVxcclxcbn1cXHJcXG4udGV4dC1jb250ZW50LWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgcGFkZGluZy1sZWZ0OiA2MHB4O1xcclxcbiBcXHJcXG4gIGg1IHtcXHJcXG4gICAgZm9udC1zaXplOiA0Mi44NHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxyXFxuICAgIGNvbG9yOiAjODYwMDE2O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcXHJcXG4gIH1cXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIHAge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4zO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbi5iYW5uZXItY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiBjYWxjKDQxLjY2NjY3JSAtIDJyZW0pO1xcclxcblxcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4uYmFubmVyLWNvbnRlbnQge1xcclxcbiAgJjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogLThyZW07XFxyXFxuICAgIGxlZnQ6IGF1dG87XFxyXFxuICAgIC8qIHJpZ2h0OiAtM3JlbTsgKi9cXHJcXG4gICAgYm90dG9tOiAtMnJlbTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJoeWJyaWRJbWFnZS1tb2R1bGVfX2NvbnRhaW5lci0tQVJYSnFcIixcblx0XCJjb250ZW50LWltYWdlLWNvbnRhaW5lclwiOiBcImh5YnJpZEltYWdlLW1vZHVsZV9fY29udGVudC1pbWFnZS1jb250YWluZXItLUJvR3NzXCIsXG5cdFwiY29udGVudC1pbWFnZVwiOiBcImh5YnJpZEltYWdlLW1vZHVsZV9fY29udGVudC1pbWFnZS0tMVd6Uk5cIixcblx0XCJ0ZXh0LWNvbnRhaW5lclwiOiBcImh5YnJpZEltYWdlLW1vZHVsZV9fdGV4dC1jb250YWluZXItLTNTWTVxXCIsXG5cdFwidGV4dC1jb250ZW50LWNvbnRhaW5lclwiOiBcImh5YnJpZEltYWdlLW1vZHVsZV9fdGV4dC1jb250ZW50LWNvbnRhaW5lci0tYjBPSFlcIixcblx0XCJiYW5uZXItY29udGFpbmVyXCI6IFwiaHlicmlkSW1hZ2UtbW9kdWxlX19iYW5uZXItY29udGFpbmVyLS0xSXlzN1wiLFxuXHRcImJhbm5lci1jb250ZW50XCI6IFwiaHlicmlkSW1hZ2UtbW9kdWxlX19iYW5uZXItY29udGVudC0tMUxkbzZcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubmF2YmFyLW1vZHVsZV9fbmF2LXdyYXBwZXItLTFPV1JlIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogNTtcXG59XFxuLm5hdmJhci1tb2R1bGVfX25hdi13cmFwcGVyLS0xT1dSZSAubmF2YmFyLW1vZHVsZV9fY29udGFpbmVyLS0xOUtiYyB7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG4ubmF2YmFyLW1vZHVsZV9fbmF2LXdyYXBwZXItLTFPV1JlIC5uYXZiYXItbW9kdWxlX19jb250YWluZXItLTE5S2JjIC5uYXZiYXItbW9kdWxlX19jb250ZW50LWNvbnRhaW5lci0tMURLOGcge1xcbiAgcGFkZGluZzogMzBweDtcXG59XFxuLm5hdmJhci1tb2R1bGVfX25hdi13cmFwcGVyLS0xT1dSZSAubmF2YmFyLW1vZHVsZV9fY29udGFpbmVyLS0xOUtiYyAubmF2YmFyLW1vZHVsZV9fbG9nby1jb250YWluZXItLTEzZk9YIHtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuLm5hdmJhci1tb2R1bGVfX25hdi13cmFwcGVyLS0xT1dSZSAubmF2YmFyLW1vZHVsZV9fY29udGFpbmVyLS0xOUtiYyAubmF2YmFyLW1vZHVsZV9fbG9nby1jb250YWluZXItLTEzZk9YIHN2ZyB7XFxuICBvcGFjaXR5OiA3MCU7XFxuICBmaWxsOiB3aGl0ZTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XFxufVxcbi5uYXZiYXItbW9kdWxlX19uYXYtd3JhcHBlci0tMU9XUmU6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICAvKiBUaGlzIGlzIG5lY2Vzc2FyeSBmb3IgdGhlIHBzZXVkbyBlbGVtZW50IHRvIHdvcmsuICovXFxuICBkaXNwbGF5OiBibG9jaztcXG4gIC8qIFRoaXMgd2lsbCBwdXQgdGhlIHBzZXVkbyBlbGVtZW50IG9uIGl0cyBvd24gbGluZS4gKi9cXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgLyogVGhpcyB3aWxsIGNlbnRlciB0aGUgYm9yZGVyLiAqL1xcbiAgd2lkdGg6IDUwJTtcXG4gIC8qIENoYW5nZSB0aGlzIHRvIHdoYXRldmVyIHdpZHRoIHlvdSB3YW50LiAqL1xcbiAgLyogVGhpcyBjcmVhdGVzIHNvbWUgc3BhY2UgYmV0d2VlbiB0aGUgZWxlbWVudCBhbmQgdGhlIGJvcmRlci4gKi9cXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xcbiAgLyogVGhpcyBjcmVhdGVzIHRoZSBib3JkZXIuIFJlcGxhY2UgYmxhY2sgd2l0aCB3aGF0ZXZlciBjb2xvciB5b3Ugd2FudC4gKi9cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbmF2YmFyLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBQ0Y7QUFBRTtFQUNFLE1BQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUVBLHVCQUFBO0VBTUEsaUJBQUE7QUFKSjtBQUFJO0VBQ0UsYUFBQTtBQUVOO0FBRUk7RUFDRSxZQUFBO0FBQU47QUFFTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFBUjtBQUlFO0VBQ0UsV0FBQTtFQUFhLHNEQUFBO0VBQ2IsY0FBQTtFQUFnQixzREFBQTtFQUNoQixjQUFBO0VBQWdCLGlDQUFBO0VBQ2hCLFVBQUE7RUFBWSw0Q0FBQTtFQUNaLGdFQUFBO0VBQ0Esa0RBQUE7RUFBb0QseUVBQUE7QUFHeERcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm5hdi13cmFwcGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgei1pbmRleDogNTtcXHJcXG4gIC5jb250YWluZXIge1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIC5jb250ZW50LWNvbnRhaW5lciB7XFxyXFxuICAgICAgcGFkZGluZzogMzBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgLmxvZ28tY29udGFpbmVyIHtcXHJcXG4gICAgICB3aWR0aDogMjAwcHg7XFxyXFxuXFxyXFxuICAgICAgc3ZnIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDcwJTtcXHJcXG4gICAgICAgIGZpbGw6IHdoaXRlO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICY6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjsgLyogVGhpcyBpcyBuZWNlc3NhcnkgZm9yIHRoZSBwc2V1ZG8gZWxlbWVudCB0byB3b3JrLiAqL1xcclxcbiAgICBkaXNwbGF5OiBibG9jazsgLyogVGhpcyB3aWxsIHB1dCB0aGUgcHNldWRvIGVsZW1lbnQgb24gaXRzIG93biBsaW5lLiAqL1xcclxcbiAgICBtYXJnaW46IDAgYXV0bzsgLyogVGhpcyB3aWxsIGNlbnRlciB0aGUgYm9yZGVyLiAqL1xcclxcbiAgICB3aWR0aDogNTAlOyAvKiBDaGFuZ2UgdGhpcyB0byB3aGF0ZXZlciB3aWR0aCB5b3Ugd2FudC4gKi9cXHJcXG4gICAgLyogVGhpcyBjcmVhdGVzIHNvbWUgc3BhY2UgYmV0d2VlbiB0aGUgZWxlbWVudCBhbmQgdGhlIGJvcmRlci4gKi9cXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7IC8qIFRoaXMgY3JlYXRlcyB0aGUgYm9yZGVyLiBSZXBsYWNlIGJsYWNrIHdpdGggd2hhdGV2ZXIgY29sb3IgeW91IHdhbnQuICovXFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIm5hdi13cmFwcGVyXCI6IFwibmF2YmFyLW1vZHVsZV9fbmF2LXdyYXBwZXItLTFPV1JlXCIsXG5cdFwiY29udGFpbmVyXCI6IFwibmF2YmFyLW1vZHVsZV9fY29udGFpbmVyLS0xOUtiY1wiLFxuXHRcImNvbnRlbnQtY29udGFpbmVyXCI6IFwibmF2YmFyLW1vZHVsZV9fY29udGVudC1jb250YWluZXItLTFESzhnXCIsXG5cdFwibG9nby1jb250YWluZXJcIjogXCJuYXZiYXItbW9kdWxlX19sb2dvLWNvbnRhaW5lci0tMTNmT1hcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucXVvdGUtbW9kdWxlX19jb250YWluZXItLTJoTGxXIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5xdW90ZS1tb2R1bGVfX2NvbnRhaW5lci0tMmhMbFcgLnF1b3RlLW1vZHVsZV9fY29udGVudC1jb250YWluZXItLVMwUUFsIHtcXG4gIHdpZHRoOiA4MDBweDtcXG59XFxuXFxuLnF1b3RlLW1vZHVsZV9fY29udGVudC1pbWFnZS0tMUhvcnQge1xcbiAgd2lkdGg6IDEwMCU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3F1b3RlLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBRUEsa0JBQUE7QUFBRjtBQUNFO0VBQ0UsWUFBQTtBQUNKOztBQUVBO0VBQ0UsV0FBQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIC5jb250ZW50LWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA4MDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmNvbnRlbnQtaW1hZ2Uge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcInF1b3RlLW1vZHVsZV9fY29udGFpbmVyLS0yaExsV1wiLFxuXHRcImNvbnRlbnQtY29udGFpbmVyXCI6IFwicXVvdGUtbW9kdWxlX19jb250ZW50LWNvbnRhaW5lci0tUzBRQWxcIixcblx0XCJjb250ZW50LWltYWdlXCI6IFwicXVvdGUtbW9kdWxlX19jb250ZW50LWltYWdlLS0xSG9ydFwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi53cmFwcGVyLW1vZHVsZV9fY29udGFpbmVyLS0zLWxjSSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogNDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLndyYXBwZXItbW9kdWxlX19zY3JvbGwtaGVhZGVyLS1SZFJiQyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IC0xMzBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogMTMwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDE7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3dyYXBwZXIubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFFRSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBQUY7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUVBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFBRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVyIHtcXHJcXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNmOWY3Zjc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgei1pbmRleDogNDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuLnNjcm9sbC1oZWFkZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAtMTMwcHg7XFxyXFxuXFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBoZWlnaHQ6IDEzMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG4uY29udGVudC1jb250YWluZXIge1xcclxcblxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJ3cmFwcGVyLW1vZHVsZV9fY29udGFpbmVyLS0zLWxjSVwiLFxuXHRcInNjcm9sbC1oZWFkZXJcIjogXCJ3cmFwcGVyLW1vZHVsZV9fc2Nyb2xsLWhlYWRlci0tUmRSYkNcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZ2FsbGVyeVNsaWRlci1tb2R1bGVfX2ltYWdlLWNvbnRhaW5lci0tVWtGQ2oge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uZ2FsbGVyeVNsaWRlci1tb2R1bGVfX2ltYWdlLWNvbnRhaW5lci0tVWtGQ2ogLmdhbGxlcnlTbGlkZXItbW9kdWxlX19nYWxsZXJ5LWltYWdlLS0yM3BqRyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4uZ2FsbGVyeVNsaWRlci1tb2R1bGVfX2dhbGxlcnktY29udGFpbmVyLS1BVk1IaiB7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogODAwcHg7XFxuICBtYXJnaW4tdG9wOiAtOTBweDtcXG59XFxuXFxuLmdhbGxlcnlTbGlkZXItbW9kdWxlX19oeWJyaWQtZ2FsbGVyeS1jb250YWluZXItLTJrelc1IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDgwMHB4O1xcbn1cXG5cXG4uZ2FsbGVyeVNsaWRlci1tb2R1bGVfX2xlZnQtLWJJY0RBIHtcXG4gIGxlZnQ6IC01ZW07XFxufVxcbi5nYWxsZXJ5U2xpZGVyLW1vZHVsZV9fbGVmdC0tYkljREEgc3ZnIHtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcXG59XFxuXFxuLmdhbGxlcnlTbGlkZXItbW9kdWxlX19yaWdodC0tMXdFYTEge1xcbiAgcmlnaHQ6IC01ZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2dhbGxlcnlTbGlkZXIubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFBRTtFQUNFLFdBQUE7RUFFQSw4QkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFFRSxTQUFBO0VBQ0YsWUFBQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUFBRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjtBQUFFO0VBQ0UscUJBQUE7QUFFSjs7QUFDQTtFQUNFLFdBQUE7QUFFRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaW1hZ2UtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIC5nYWxsZXJ5LWltYWdlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIFxcclxcbiAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgfVxcclxcbn1cXHJcXG4uZ2FsbGVyeS1jb250YWluZXIge1xcclxcblxcclxcbiAgbGVmdDogNTAlO1xcclxcbm1hcmdpbjogYXV0bztcXHJcXG4gIHdpZHRoOiA4MDBweDtcXHJcXG4gIG1hcmdpbi10b3A6IC05MHB4O1xcclxcblxcclxcbn1cXHJcXG4uaHlicmlkLWdhbGxlcnktY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDgwMHB4O1xcclxcbn1cXHJcXG4ubGVmdCB7XFxyXFxuICBsZWZ0OiAtNWVtO1xcclxcbiAgc3ZnIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xcclxcbiAgfVxcclxcbn1cXHJcXG4ucmlnaHQge1xcclxcbiAgcmlnaHQ6IC01ZW07XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImltYWdlLWNvbnRhaW5lclwiOiBcImdhbGxlcnlTbGlkZXItbW9kdWxlX19pbWFnZS1jb250YWluZXItLVVrRkNqXCIsXG5cdFwiZ2FsbGVyeS1pbWFnZVwiOiBcImdhbGxlcnlTbGlkZXItbW9kdWxlX19nYWxsZXJ5LWltYWdlLS0yM3BqR1wiLFxuXHRcImdhbGxlcnktY29udGFpbmVyXCI6IFwiZ2FsbGVyeVNsaWRlci1tb2R1bGVfX2dhbGxlcnktY29udGFpbmVyLS1BVk1IalwiLFxuXHRcImh5YnJpZC1nYWxsZXJ5LWNvbnRhaW5lclwiOiBcImdhbGxlcnlTbGlkZXItbW9kdWxlX19oeWJyaWQtZ2FsbGVyeS1jb250YWluZXItLTJrelc1XCIsXG5cdFwibGVmdFwiOiBcImdhbGxlcnlTbGlkZXItbW9kdWxlX19sZWZ0LS1iSWNEQVwiLFxuXHRcInJpZ2h0XCI6IFwiZ2FsbGVyeVNsaWRlci1tb2R1bGVfX3JpZ2h0LS0xd0VhMVwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1swXS51c2VbMV0hLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSG9tZS5tb2R1bGUuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2h5YnJpZENhcm91c2VsLm1vZHVsZS5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaHlicmlkSW1hZ2UubW9kdWxlLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXZiYXIubW9kdWxlLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9xdW90ZS5tb2R1bGUuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dyYXBwZXIubW9kdWxlLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYWxsZXJ5U2xpZGVyLm1vZHVsZS5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZlcnNpb249XFxcIjEuMFxcXCIgdmlld0JveD1cXFwiMCAwIDM1MC4wMDAwMDAgMTExLjAwMDAwMFxcXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cXFwieE1pZFlNaWQgbWVldFxcXCI+PGcgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoMC4wMDAwMDAsMTExLjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKVxcXCIgc3Ryb2tlPVxcXCJub25lXFxcIj48cGF0aCBkPVxcXCJNNzAgNzQwIGMwIC0zNjMgMCAtMzcwIDIwIC0zNzAgMjAgMCAyMCA3IDIwIDM3MCAwIDM2MyAwIDM3MCAtMjAgMzcwIC0yMCAwIC0yMCAtNyAtMjAgLTM3MHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTIwIDc0MCBjMCAtMzYzIDAgLTM3MCAyMCAtMzcwIDIwIDAgMjAgNyAyMCAzNzAgMCAzNjMgMCAzNzAgLTIwIDM3MCAtMjAgMCAtMjAgLTcgLTIwIC0zNzB6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTI0MCA3NDAgbDAgLTM3MCAzNSAwIDM1IDAgMCAzNzAgMCAzNzAgLTM1IDAgLTM1IDAgMCAtMzcwelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0zODAgNzQwIGwwIC0zNzAgNDUgMCA0NSAwIDAgMzcwIDAgMzcwIC00NSAwIC00NSAwIDAgLTM3MHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNNDkwIDc0MCBsMCAtMzcwIDUwIDAgNTAgMCAwIDM3MCAwIDM3MCAtNTAgMCAtNTAgMCAwIC0zNzB6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTYyMCAxMTA1IGMwIC0zIDAgLTE2OCAwIC0zNjcgbC0xIC0zNjMgMjYgLTMgMjUgLTMgMCAzNzAgMCAzNzEgLTI1IDAgYy0xNCAwIC0yNSAtMiAtMjUgLTV6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTY5NyAxMTA0IGMtNCAtNCAtNyAtMTcxIC03IC0zNzEgbDAgLTM2NCAyMyAzIDIyIDMgMCAzNjUgYzAgMzIxIC0yIDM2NSAtMTUgMzY4IC05IDEgLTE5IDAgLTIzIC00elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk04MDAgNzQwIGwwIC0zNzAgMzUgMCAzNSAwIDAgMzcwIDAgMzcwIC0zNSAwIC0zNSAwIDAgLTM3MHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNODkwIDc0MCBjMCAtMzYzIDAgLTM3MCAyMCAtMzcwIDIwIDAgMjAgNyAyMCAzNzAgMCAzNjMgMCAzNzAgLTIwIDM3MCAtMjAgMCAtMjAgLTcgLTIwIC0zNzB6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTEwMDAgNzQwIGMwIC0zMjggMiAtMzcxIDE1IC0zNjggMTQgMyAxNiA0OCAxNiAzNjggMCAzMjAgLTIgMzY1IC0xNiAzNjggLTEzIDMgLTE1IC00MCAtMTUgLTM2OHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTExMCAxMTA1IGMwIC0zIDAgLTE2OCAwIC0zNjcgbC0xIC0zNjMgMzYgLTMgMzUgLTMgMCAzNzAgMCAzNzEgLTM1IDAgYy0xOSAwIC0zNSAtMiAtMzUgLTV6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTEyMDAgNzQwIGwwIC0zNzAgNDUgMCA0NSAwIDAgMzcwIDAgMzcwIC00NSAwIC00NSAwIDAgLTM3MHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTYxNSAxMDk3IGMtMyAtNiAtNCAtMTcyIC0zIC0zNjcgMyAtMzI5IDQgLTM1NSAyMSAtMzU4IDE2IC0zIDE3IDIwIDE3IDM2NyAwIDMyNyAtMiAzNzEgLTE1IDM3MSAtOSAwIC0xOCAtNiAtMjAgLTEzelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xNzMwIDc0MCBsMCAtMzcwIDMwIDAgMzAgMCAwIDM3MCAwIDM3MCAtMzAgMCAtMzAgMCAwIC0zNzB6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTE4NzAgNzQwIGMwIC0zNDggMSAtMzcxIDE4IC0zNjggMTYgMyAxNyAyOSAxNyAzNjggMCAzMzkgLTEgMzY1IC0xNyAzNjggLTE3IDMgLTE4IC0yMCAtMTggLTM2OHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTkzMCAxMTA1IGMwIC0zIDAgLTE2OCAwIC0zNjcgbC0xIC0zNjMgMzEgLTMgMzAgLTMgMCAzNzAgMCAzNzEgLTMwIDAgYy0xNiAwIC0zMCAtMiAtMzAgLTV6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTIwNjAgNzQwIGMwIC0zNjMgMCAtMzcwIDIwIC0zNzAgMjAgMCAyMCA3IDIwIDM3MCAwIDM2MyAwIDM3MCAtMjAgMzcwIC0yMCAwIC0yMCAtNyAtMjAgLTM3MHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMjEyMCA3NDAgbDAgLTM3MCA0NSAwIDQ1IDAgMCAzNzAgMCAzNzAgLTQ1IDAgLTQ1IDAgMCAtMzcwelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0yMjQwIDc0MCBjMCAtMzIyIDIgLTM3MCAxNSAtMzcwIDEzIDAgMTUgNDggMTUgMzcwIDAgMzIyIC0yIDM3MCAtMTUgMzcwIC0xMyAwIC0xNSAtNDggLTE1IC0zNzB6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTIzMDAgNzQwIGMwIC0zMjIgMiAtMzcwIDE1IC0zNzAgMTMgMCAxNSA0OCAxNSAzNzAgMCAzMjIgLTIgMzcwIC0xNSAzNzAgLTEzIDAgLTE1IC00OCAtMTUgLTM3MHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMjQxMCAxMTA1IGMwIC0zIDAgLTE2OCAwIC0zNjcgbC0xIC0zNjMgMzEgLTMgMzAgLTMgMCAzNzAgMCAzNzEgLTMwIDAgYy0xNiAwIC0zMCAtMiAtMzAgLTV6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTI1NDAgNzQwIGMwIC0zNjMgMCAtMzcwIDIwIC0zNzAgMjAgMCAyMCA3IDIwIDM3MCAwIDM2MyAwIDM3MCAtMjAgMzcwIC0yMCAwIC0yMCAtNyAtMjAgLTM3MHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMjYwMCA3NDAgbDAgLTM3MCA0NSAwIDQ1IDAgMCAzNzAgMCAzNzAgLTQ1IDAgLTQ1IDAgMCAtMzcwelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0yNzcwIDExMDUgYzAgLTMgMCAtMTY4IDAgLTM2NyBsLTEgLTM2MyAzMSAtMyAzMCAtMyAwIDM3MCAwIDM3MSAtMzAgMCBjLTE2IDAgLTMwIC0yIC0zMCAtNXpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMjg1NyAxMTAzIGMtNCAtMyAtNyAtMTcwIC03IC0zNzAgMCAtMzU2IDAgLTM2MyAyMCAtMzYzIDIwIDAgMjAgNyAyMCAzNzAgMCAzMDIgLTIgMzcwIC0xMyAzNzAgLTggMCAtMTcgLTMgLTIwIC03elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0yOTYwIDc0MCBsMCAtMzcwIDI1IDAgMjUgMCAwIDM3MCAwIDM3MCAtMjUgMCAtMjUgMCAwIC0zNzB6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTMwODAgNzQwIGwwIC0zNzAgMzAgMCAzMCAwIDAgMzcwIDAgMzcwIC0zMCAwIC0zMCAwIDAgLTM3MHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMzE2MCA3NDAgYzAgLTM2MyAwIC0zNzAgMjAgLTM3MCAyMCAwIDIwIDcgMjAgMzcwIDAgMzYzIDAgMzcwIC0yMCAzNzAgLTIwIDAgLTIwIC03IC0yMCAtMzcwelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0zMjcwIDc0MCBsMCAtMzcwIDUwIDAgNTAgMCAwIDM3MCAwIDM3MCAtNTAgMCAtNTAgMCAwIC0zNzB6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTMzOTAgNzQwIGwwIC0zNzAgMzAgMCAzMCAwIDAgMzcwIDAgMzcwIC0zMCAwIC0zMCAwIDAgLTM3MHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMjE3OSAzMzYgYy0yNyAtMTMgLTM3IC01NyAtMTcgLTczIDcgLTYgMjcgLTE1IDQzIC0yMCAyMiAtNyAzMCAtMTYgMzAgLTM0IDAgLTMwIC00MiAtNDAgLTYxIC0xNCAtMjAgMjYgLTM3IDE0IC0xOSAtMTMgMjkgLTQxIDExNSAtMjIgMTE1IDI2IDAgMjYgLTEyIDM4IC01NSA1OCAtMjIgMTEgLTQwIDI2IC00MCAzNCAwIDIyIDQzIDI1IDY2IDQgMTYgLTE1IDE5IC0xNSAxOSAtMiAwIDMyIC00NyA1MSAtODEgMzR6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTMzMzMgMzM1IGMtMzUgLTE1IC00MyAtMzEgLTQzIC05MSAwIC01NSAyNSAtODQgNzQgLTg0IDI1IDAgMzkgNyA1MSAyMiAxMSAxNiAxMiAyNCA0IDI3IC03IDIgLTE2IC00IC0yMSAtMTMgLTEzIC0yMyAtNTQgLTIwIC03MiA2IC0xOCAyNiAtMjEgNzEgLTYgOTkgMTMgMjQgNTcgMjUgODIgMiAyNCAtMjIgMzYgLTggMTQgMTYgLTI0IDI2IC00OCAzMSAtODMgMTZ6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTEzNSAzMjggYy0xMSAtMjkgLTU1IC0xNjIgLTU1IC0xNjUgMCAtMiA1IC0zIDEwIC0zIDYgMCAxNSAxMSAyMCAyNSA4IDIwIDE2IDI1IDQzIDI1IDI2IDAgMzYgLTYgNDUgLTI1IDEyIC0yNSAzOCAtMzYgMzAgLTEyIC01MCAxNDAgLTYzIDE2NyAtNzUgMTY3IC03IDAgLTE2IC02IC0xOCAtMTJ6IG0zOCAtOTAgYy0yIC01IC0xMyAtOCAtMjQgLTggLTE4IDAgLTIwIDQgLTE0IDMzIDQgMTcgMTAgMzYgMTMgNDEgNiAxMSAzMSAtNTUgMjUgLTY2elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0yOTAgMjUwIGMwIC0xMDggMTggLTEyMiAyMiAtMTcgbDMgNzIgMjQgLTcyIGMxNCAtNDAgMzAgLTczIDM2IC03MyA2IDAgMjIgMzMgMzYgNzMgbDI0IDcyIDMgLTcyIGM0IC0xMDUgMjIgLTkxIDIyIDE3IDAgODAgLTIgOTAgLTE4IDkwIC0xNCAwIC0yNCAtMTggLTQyIC03MiBsLTIzIC03MyAtMjQgNzMgYy0xOSA1NiAtMjkgNzIgLTQ0IDcyIC0xNyAwIC0xOSAtOCAtMTkgLTkwelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk01NDAgMjUwIGMwIC03MyAzIC05MCAxNSAtOTAgMTIgMCAxNSAxNyAxNSA5MCAwIDczIC0zIDkwIC0xNSA5MCAtMTIgMCAtMTUgLTE3IC0xNSAtOTB6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTYzMCAzMzAgYzAgLTUgMTEgLTEwIDI1IC0xMCAyNSAwIDI1IC0xIDI1IC04MSAwIC02MCAzIC04MCAxMyAtNzcgOCAzIDEzIDMxIDE1IDgxIDMgNzQgNCA3NyAyNyA3NyAxNCAwIDI1IDUgMjUgMTAgMCA2IC0yOCAxMCAtNjUgMTAgLTM3IDAgLTY1IC00IC02NSAtMTB6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTkzMiAyNTEgYy0xNyAtNTAgLTI2IC05MSAtMjEgLTkxIDUgMCAxNSAxMSAyMSAyNSA5IDE5IDE5IDI1IDQ1IDI1IDI3IDAgMzUgLTUgNDMgLTI1IDEyIC0zMCAzNCAtMzQgMjUgLTQgLTYxIDE5MSAtNzEgMTk3IC0xMTMgNzB6IG02OCAtOCBjMCAtMTUgLTM2IC0xOCAtNDQgLTQgLTMgNSAtMSAyNCA2IDQyIGwxMiAzNCAxMiAtMzAgYzcgLTE3IDEzIC0zNiAxNCAtNDJ6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTExMTIgMjUzIGMyIC01OCA3IC04OCAxNiAtOTEgOCAtMiAxMiA4IDEyIDMxIDAgMzMgMiAzNSA0MCA0MSA1MSA4IDcwIDQ0IDQ1IDgyIC0xMyAyMCAtMjQgMjQgLTY2IDI0IGwtNTEgMCA0IC04N3ogbTkzIDM3IGMwIC0yMSAtNSAtMjYgLTMyIC0yOCAtMzEgLTMgLTMzIC0xIC0zMyAyOCAwIDI5IDIgMzEgMzMgMjggMjcgLTIgMzIgLTcgMzIgLTI4elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xMzAwIDI1MCBsMCAtOTAgNjAgMCBjMzMgMCA2MCA0IDYwIDEwIDAgNiAtMjAgMTAgLTQ1IDEwIC00NCAwIC00NSAxIC00NSAzMyAwIDMyIDEgMzIgNDAgMjkgMzIgLTMgNDAgLTEgNDAgMTIgMCAxMiAtMTAgMTYgLTQwIDE2IC0zNiAwIC00MCAzIC00MCAyNSAwIDIyIDQgMjUgMzkgMjUgMjIgMCA0MyA1IDQ2IDEwIDQgNiAtMTcgMTAgLTU0IDEwIGwtNjEgMCAwIC05MHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTQ5MCAyNTAgbDAgLTkwIDQ5IDAgYzI4IDAgNTMgNSA1NiAxMCA0IDYgLTEyIDEwIC0zOSAxMCBsLTQ2IDAgMCA4MCBjMCA0NyAtNCA4MCAtMTAgODAgLTYgMCAtMTAgLTM3IC0xMCAtOTB6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTE3NjAgMjUwIGwwIC05MCAzOSAwIGM1MyAwIDY5IDggODYgNDEgMzggNzMgMSAxMzkgLTgwIDEzOSBsLTQ1IDAgMCAtOTB6IG05MyA1OCBjNDggLTM2IDE3IC0xMjggLTQ0IC0xMjggbC0yOSAwIDAgNzAgMCA3MCAyOCAwIGMxNiAwIDM2IC02IDQ1IC0xMnpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTk3MCAyNTAgbDAgLTkwIDU1IDAgYzMwIDAgNTUgNSA1NSAxMCAwIDYgLTIxIDEwIC00NiAxMCAtNDUgMCAtNDUgMCAtNDIgMzIgMyAyOSA2IDMyIDM4IDMyIDUxIDEgNTMgMjAgMyAyNCAtMzggMyAtNDMgNiAtNDMgMjggMCAyMiA0IDI0IDQ1IDI0IDI1IDAgNDUgNSA0NSAxMCAwIDYgLTI1IDEwIC01NSAxMCBsLTU1IDAgMCAtOTB6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTIzNDAgMjUwIGMwIC01MyA0IC05MCAxMCAtOTAgNiAwIDEwIDM3IDEwIDkwIDAgNTMgLTQgOTAgLTEwIDkwIC02IDAgLTEwIC0zNyAtMTAgLTkwelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0yNDUxIDMxNCBjLTQ2IC01OCAtMTMgLTE1NCA1MyAtMTU0IDE3IDAgMzcgNSA0NCAxMiA5IDkgMTIgOSAxMiAwIDAgLTcgNSAtMTIgMTAgLTEyIDYgMCAxMCAyMyAxMCA1MCBsMCA1MCAtMzUgMCBjLTM5IDAgLTQ4IC0xNyAtMTIgLTIyIDE2IC0yIDIxIC05IDE5IC0yMyAtNSAtMjQgLTE5IC0zNSAtNDggLTM1IC0zMSAwIC00NyAyNCAtNDcgNzAgMCAyMiA2IDQ2IDEzIDU1IDE3IDIwIDU5IDE5IDgyIC0yIDI1IC0yMiAzNiAtOCAxMyAxNyAtMjggMzEgLTg4IDI3IC0xMTQgLTZ6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTI2NjAgMjUwIGMwIC0xMDcgMTggLTEyMiAyMiAtMTkgbDMgNzIgNDAgLTcyIGMyMiAtMzkgNDYgLTcxIDUzIC03MSA5IDAgMTIgMjUgMTIgOTAgMCA1MyAtNCA5MCAtMTAgOTAgLTYgMCAtMTAgLTMxIC0xMCAtNzIgbDAgLTczIC00MCA3MyBjLTU2IDEwMCAtNzAgOTYgLTcwIC0xOHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMjk3MCAyNDkgYzAgLTYxIDQgLTg5IDExIC04NyAxNiA1IDE4IDE3OCAyIDE3OCAtMTAgMCAtMTMgLTI1IC0xMyAtOTF6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTMwODAgMjUwIGMwIC0xMDcgMTggLTEyMiAyMiAtMTggbDMgNzMgNDAgLTcwIGMyMiAtMzggNDggLTcxIDU4IC03MyAxNSAtMyAxNyA2IDE3IDg3IDAgNzcgLTIgOTEgLTE2IDkxIC0xNCAwIC0xNiAtMTEgLTEyIC03MCAyIC0zOCAzIC03MCAyIC03MCAtMSAwIC0yMCAzMiAtNDMgNzAgLTU4IDk3IC03MSA5MyAtNzEgLTIwelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk05MyA3NSBjMCAtMjcgMiAtMzggNCAtMjIgMiAxNSAyIDM3IDAgNTAgLTIgMTIgLTQgMCAtNCAtMjh6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTI0MSA5OCBjLTUgLTEzIC0xMiAtMzMgLTE2IC00NiAtNiAtMjEgLTUgLTIyIDEzIC0xMSAxNyAxMCAyNCAxMCAzOCAtMiAxNSAtMTMgMTYgLTEyIDkgMTEgLTE0IDQ3IC0yNCA3MCAtMzAgNzAgLTMgMCAtOSAtMTAgLTE0IC0yMnogbTE5IC0xOSBjMCAtMTEgLTQgLTE4IC0xMCAtMTQgLTUgMyAtNyAxMiAtMyAyMCA3IDIxIDEzIDE5IDEzIC02elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xMDYyIDc1IGMwIC0zNCAyIC00MiA3IC0yNiA5IDM1IDI5IDM3IDM0IDQgNCAtMjcgNCAtMjcgNiA1IDEgMjUgLTMgMzIgLTE4IDMyIC0xMSAwIC0yMiA4IC0yNCAxOCAtMyA5IC01IC01IC01IC0zM3pcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTE3MiA3NSBjMCAtNDEgMiAtNDUgNyAtMjAgbDcgMzAgNyAtMjcgYzkgLTM2IDIzIC0zNiAzMyAtMSBsNyAyOCA3IC0zMCBjNyAtMjUgOCAtMjIgOCAyMCAxIDQ2IDAgNDggLTEzIDMxIC04IC0xMSAtMTUgLTI2IC0xNSAtMzMgMCAtNyAtNCAtMTMgLTEwIC0xMyAtNSAwIC0xMCA2IC0xMCAxMyAwIDcgLTcgMjIgLTE1IDMzIC0xMyAxNyAtMTQgMTUgLTEzIC0zMXpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTMyMiAxMDggYy0yMCAtMjAgLTE1IC02NiA5IC03OSAxNyAtOSAyNSAtOCAzNyA1IDE0IDE0IDEzIDE1IC0xNCAxMyAtMjMgLTIgLTMwIDMgLTMyIDE5IC00IDMxIDIzIDUwIDQ2IDMzIDE1IC0xMyAxNiAtMTIgMyA0IC0xNiAyMCAtMzIgMjIgLTQ5IDV6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTE0MDMgNzUgYzAgLTI3IDIgLTQwIDQgLTI3IDYgMjkgNDMgMzEgNDMgMiAwIC0xMSAzIC0yMCA4IC0yMCA0IDAgNyAxOCA3IDQwIDAgMjIgLTMgNDAgLTcgNDAgLTUgMCAtOCAtNyAtOCAtMTUgMCAtMjUgLTM4IC0xOCAtNDMgOCAtMiAxMiAtNCAwIC00IC0yOHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTQ5NyA3NSBjLTkgLTI1IC0xMiAtNDUgLTYgLTQ1IDUgMCA5IDUgOSAxMCAwIDYgOSAxMCAyMCAxMCAxMSAwIDIwIC01IDIwIC0xMiAwIC02IDMgLTkgNiAtNSA3IDcgLTE0IDc1IC0yNiA4MiAtNCAzIC0xNSAtMTUgLTIzIC00MHogbTMzIC02IGMwIC01IC00IC05IC0xMCAtOSAtNSAwIC0xMCA3IC0xMCAxNiAwIDggNSAxMiAxMCA5IDYgLTMgMTAgLTEwIDEwIC0xNnpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTU3MCA3NiBjMCAtMzkgMyAtNDQgMjUgLTQ4IDE0IC0zIDI1IC0xIDI1IDMgMCA1IC05IDkgLTIwIDkgLTI3IDAgLTI1IDI4IDMgMzMgbDIyIDQgLTIyIDIgYy0xMyAwIC0yMyA3IC0yMyAxNSAwIDggMTAgMTcgMjMgMTkgMTkgNCAxOCA0IC01IDYgLTI3IDEgLTI4IC0xIC0yOCAtNDN6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTE2NDAgNzcgYzAgLTQ3IDAgLTQ3IDMzIC00NiAzMSAyIDMxIDIgNCA2IC0yNSA0IC0yOCA4IC0yNiAzOCAyIDE5IDAgMzcgLTQgNDEgLTQgNCAtNyAtMTQgLTcgLTM5elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xNzUwIDc0IGMwIC00NCAxIC00NSAyOCAtNDIgMjIgMiAyNyA4IDI4IDMzIDIgMzYgLTExIDU1IC0zNyA1NSAtMTYgMCAtMTkgLTggLTE5IC00NnogbTQwIDIxIGMwIC04IC03IC0xNSAtMTUgLTE1IC04IDAgLTE1IDcgLTE1IDE1IDAgOCA3IDE1IDE1IDE1IDggMCAxNSAtNyAxNSAtMTV6IG0zIC00MCBjMSAtNSAtNiAtMTEgLTE1IC0xMyAtMTEgLTIgLTE4IDMgLTE4IDEzIDAgMTcgMzAgMTggMzMgMHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTg5MCA3NSBjMCAtMjUgNCAtNDUgOSAtNDUgMTAgMCAyMyA2OSAxNSA4MiAtMTMgMjEgLTI0IDQgLTI0IC0zN3pcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTk0OSA4MyBjLTExIC0zMyAtMTMgLTM1IC0yMCAtMTggLTggMTggLTggMTcgLTYgLTQgMyAtMzUgMjMgLTM3IDMyIC00IGw4IDI4IDcgLTMwIGM3IC0yNiA4IC0yNCA5IDE4IDEgNTYgLTEzIDYxIC0zMCAxMHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMjAwOCA3NSBjLTEwIC0yNSAtMTMgLTQ1IC04IC00NSA2IDAgMTAgNSAxMCAxMCAwIDYgOSAxMCAyMCAxMCAxMSAwIDIwIC00IDIwIC0xMCAwIC01IDQgLTEwIDkgLTEwIDYgMCAzIDIwIC02IDQ1IC04IDI1IC0xOCA0NSAtMjIgNDUgLTQgMCAtMTQgLTIwIC0yMyAtNDV6IG0yOCAtMiBjLTEwIC0xMCAtMTkgNSAtMTAgMTggNiAxMSA4IDExIDEyIDAgMiAtNyAxIC0xNSAtMiAtMTh6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTIwODcgMTE0IGMtMTMgLTEzIC03IC03MSA5IC04NSAxNyAtMTQgNDQgLTMgNTMgMjIgMyA5IC0yIDggLTEzIC00IC0yMyAtMjMgLTQ4IC01IC00NCAzMiAzIDI5IDM1IDQxIDUwIDE5IDggLTEwIDkgLTEwIDUgMiAtNCAxNiAtNDggMjYgLTYwIDE0elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0yMTcyIDc5IGMtMiAtNDIgMCAtNDcgMjMgLTUxIDE0IC0zIDI1IC0xIDI1IDMgMCA1IC05IDkgLTE5IDkgLTE2IDAgLTIxIDggLTI0IDQzIGwtNCA0MiAtMSAtNDZ6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTIyNDkgNzUgYy05IC0yNSAtMTMgLTQ1IC05IC00NSA0IDAgMTEgNyAxNCAxNiA2IDE1IDggMTUgMzEgMCAxNCAtOSAyNSAtMTQgMjUgLTExIDAgMTIgLTMzIDg1IC0zOSA4NSAtMyAwIC0xMyAtMjAgLTIyIC00NXogbTI3IC0yIGMtMTAgLTEwIC0xOSA1IC0xMCAxOCA2IDExIDggMTEgMTIgMCAyIC03IDEgLTE1IC0yIC0xOHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMjMyOSAxMTggYy02IC00MCAtNSAtODggMiAtODggNSAwIDkgOSA5IDIwIDAgMTMgNyAyMCAyMCAyMCAxMyAwIDIwIC03IDIwIC0yMCAwIC0xMSA0IC0yMCA5IC0yMCA1IDAgOCAxOSA3IDQzIC0yIDM5IC00IDQyIC0zNCA0NSAtMTggMiAtMzIgMiAtMzMgMHogbTUxIC0yMyBjMCAtOCAtOSAtMTUgLTIwIC0xNSAtMTEgMCAtMjAgNyAtMjAgMTUgMCA4IDkgMTUgMjAgMTUgMTEgMCAyMCAtNyAyMCAtMTV6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTI0MTcgMTEzIGMtMiAtNSAtNSAtMjUgLTUgLTQ1IC0xIC0zOCAtMSAtMzggMzYgLTM3IDMwIDIgMzIgMyAxMCA2IC0xNiAyIC0yOCAxMCAtMjggMTggMCA4IDEyIDE2IDI4IDE4IGwyNyA0IC0yNyAyIGMtMzcgMSAtMzcgMjggMCAzNCAyNiA0IDI1IDQgLTUgNiAtMTcgMCAtMzQgLTIgLTM2IC02elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0yNDk5IDEwOSBjMCAtOCAtMSAtMjkgLTIgLTQ3IC0xIC0xNyAxIC0zMiA2IC0zMiA0IDAgNyAxNSA3IDMzIGwwIDMyIDIxIC0zMiBjMjkgLTQ1IDM5IC00MSAzOSAxMyAwIDMwIC00IDQzIC0xMSAzOCAtNiAtMyAtOSAtMTcgLTYgLTMwIDUgLTI4IC05IC0zMiAtMTggLTUgLTggMjcgLTM1IDQ4IC0zNiAzMHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMjYyNiA4MCBjLTIxIC01MiAtMjAgLTUzIDggLTM1IDIzIDE1IDI1IDE1IDM1IC0yIDE0IC0yNCAxNCAtOSAtMSAzOCAtNiAyMiAtMTQgMzkgLTE4IDM5IC01IDAgLTE1IC0xOCAtMjQgLTQweiBtMjggNSBjMyAtOCAxIC0xNSAtNCAtMTUgLTYgMCAtMTAgNyAtMTAgMTUgMCA4IDIgMTUgNCAxNSAyIDAgNiAtNyAxMCAtMTV6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTI3MzcgMTEzIGMtMTEgLTEwIC04IC04MyAzIC04MyA2IDAgMTAgMjAgMTAgNDUgMCA0NiAtMiA1MCAtMTMgMzh6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTI4MTYgODAgYy0xOSAtNDggLTIwIC02MSAtMyAtNDAgMTUgMjAgMzUgMTkgNDcgMCAxNSAtMjQgMTIgNSAtNCA0NSAtOCAxOSAtMTcgMzUgLTE5IDM1IC0zIDAgLTEyIC0xOCAtMjEgLTQweiBtMjggNSBjMyAtOCAxIC0xNSAtNCAtMTUgLTYgMCAtMTAgNyAtMTAgMTUgMCA4IDIgMTUgNCAxNSAyIDAgNiAtNyAxMCAtMTV6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTI5NjEgNzggYy0xMCAtMjQgLTE2IC00NSAtMTMgLTQ4IDIgLTMgNyAxIDkgOCAzIDYgMTIgMTIgMjIgMTIgOSAwIDIzIC02IDMwIC0xMiAxMSAtMTEgMTIgLTggNiAxMiAtMTQgNDUgLTI0IDcwIC0zMCA3MCAtMyAwIC0xNCAtMTkgLTI0IC00MnogbTI5IDcgYzAgLTggLTQgLTE1IC0xMCAtMTUgLTUgMCAtNyA3IC00IDE1IDQgOCA4IDE1IDEwIDE1IDIgMCA0IC03IDQgLTE1elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0zMTM5IDExOCBjLTIgLTEzIC0xIC01NyAxIC03NSAxIC0xMCA1IC01IDkgMTEgOCAzOSAyNCAzOSAzMiAxIGw3IC0zMCAxIDMzIGMxIDIzIC00IDM1IC0xNiAzOSAtMTAgNCAtMjEgMTEgLTI1IDE3IC00IDYgLTggOCAtOSA0elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk02NTkgOTkgYy0yIC0yOCAzIC02NCAxMSAtNzIgNCAtNSA2IDEwIDQgMzMgLTMgNDEgLTEzIDY3IC0xNSAzOXpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTAyMCA3NiBjMCAtNDMgMTYgLTU2IDIyIC0xNyA1IDMyIDAgNTEgLTEzIDUxIC01IDAgLTkgLTE1IC05IC0zNHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTI3MCA3MCBjMCAtMjIgNSAtNDAgMTAgLTQwIDYgMCAxMCAxOCAxMCA0MCAwIDIyIC00IDQwIC0xMCA0MCAtNSAwIC0xMCAtMTggLTEwIC00MHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMzIzOSAxMDUgYy03IC02IDIgLTc1IDEwIC03NSAzIDAgNiAxNiA1IDM1IC0xIDM1IC02IDQ5IC0xNSA0MHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMzQwMCA3NiBjMCAtMTkgNSAtMzggMTAgLTQxIDYgLTQgMTAgMTAgMTAgMzQgMCAyMyAtNCA0MSAtMTAgNDEgLTUgMCAtMTAgLTE1IC0xMCAtMzR6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTEzOCA5MyBjLTEyIC0zIC0xOCAtMTQgLTE4IC0zNCAwIC0xNiA0IC0yOSA4IC0yOSA1IDAgOCAxMCA4IDIxIC0xIDMzIDIyIDM0IDI3IDIgNCAtMjcgNCAtMjcgNiA0IDEgMzUgLTUgNDIgLTMxIDM2elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0zMTMgODQgYy0zIC04IDMgLTIxIDEzIC0yOSAxOSAtMTQgMTggLTE0IDAgLTE1IC0xNSAwIC0xNyAtMyAtOSAtMTEgNiAtNiAxNiAtOCAyMiAtNSAxNyAxMSAxMyAzMyAtNiA0MSAtMTcgNyAtMTcgOCAxIDE0IDE4IDcgMTggOCAyIDE0IC0xMCA0IC0xOSAxIC0yMyAtOXpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMzczIDg0IGMtNCAtMTAgMSAtMjAgMTEgLTI2IDkgLTUgMTQgLTE0IDExIC0xOSAtNCAtNSAtMTIgLTYgLTE4IC0zIC05IDUgLTkgNCAwIC02IDEzIC0xNCAzMyAtNSAzMyAxNSAwIDcgLTggMTYgLTE3IDIwIC0xNyA3IC0xNyA4IDEgMTQgMTggNyAxOCA4IDIgMTQgLTExIDQgLTE5IDEgLTIzIC05elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk00MzYgODUgYy0yMCAtMjAgLTIwIC0yNiAtMiAtNTAgMTIgLTE2IDE2IC0xNyAzMCAtNiAyMCAxNyAyMSA0NSAyIDYwIC0xMSA5IC0xOCA4IC0zMCAtNHogbTMyIC0yNyBjLTIgLTEzIC03IC0yMyAtMTMgLTIzIC01IDAgLTExIDEwIC0xMyAyMyAtMiAxNSAyIDIyIDEzIDIyIDExIDAgMTUgLTcgMTMgLTIyelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk01MDYgODQgYy0yMCAtMjAgLTIwIC0zOCAtMSAtNTQgMTIgLTEwIDE5IC0xMCAyNyAtMiA5IDkgOCAxMiAtNSAxMiAtMTEgMCAtMTcgOCAtMTcgMjEgMCAxNyA0IDE5IDIyIDEzIDIwIC02IDIxIC01IDkgMTAgLTE2IDIwIC0xNiAyMCAtMzUgMHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNNjAwIDkwIGMtMTIgLTggLTEyIC0xMCA0IC0xMCAxNiAwIDE2IC0yIC00IC0xOCAtMjEgLTE3IC0yMSAtMTkgLTQgLTMyIDE2IC0xMyAxNyAtMTMgMTEgMiAtMyAxMCAtMiAyMCAzIDIzIDYgNCAxMCAtMSAxMCAtOSAwIC05IDUgLTE2IDEwIC0xNiAxNSAwIDEyIDQ2IC0zIDU4IC04IDcgLTE4IDcgLTI3IDJ6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTgxMyA5MyBjLTcgLTMgLTEyIC0xOSAtMTIgLTM2IDIgLTMxIDIgLTMxIDYgLTQgNSAzMyAyNSAzMSAzNCAtNCBsNyAtMjQgMSAyNiBjMSAyOSAtMTcgNDkgLTM2IDQyelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0zMDMxIDYxIGMxIC0yOCAzIC0zMCA2IC0xMSAzIDE0IDkgMzAgMTQgMzYgNSA3IDMgMTEgLTYgMTEgLTExIDAgLTE1IC0xMSAtMTQgLTM2elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0zMDgyIDg4IGMtMTYgLTE2IC0xNSAtNDMgMyAtNTggMTUgLTEyIDM1IC02IDM1IDEyIDAgNyAtNCA3IC0xMyAtMSAtMTYgLTEzIC0yNyAtNSAtMjcgMjAgMCAyNCAyMCAzNSAzMiAxOCA4IC0xMiA5IC0xMiA2IDAgLTYgMjAgLTIxIDI0IC0zNiA5elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0zMjc3IDk0IGMtMTMgLTE0IC03IC02MiA5IC02OCAxOCAtNyAzNCAwIDM0IDE2IDAgNyAtNCA3IC0xMyAtMSAtOCAtNiAtMTcgLTggLTIwIC00IC0xMyAxMiAtNyAyMyAxNCAyMyAxNCAwIDE5IDUgMTcgMTcgLTMgMTkgLTI5IDI5IC00MSAxN3ogbTMzIC0xNCBjMCAtNSAtNyAtMTAgLTE2IC0xMCAtOCAwIC0xMiA1IC05IDEwIDMgNiAxMCAxMCAxNiAxMCA1IDAgOSAtNCA5IC0xMHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMzM0NyA5NCBjLTEwIC0xMCAtOSAtNjIgMiAtNjggMTIgLTggNDEgNCA0MSAxNiAwIDYgLTYgNSAtMTUgLTIgLTEyIC0xMCAtMTYgLTkgLTIxIDQgLTMgOSAtMyAyMyAwIDMyIDUgMTQgOSAxNCAyMyAzIDE0IC0xMiAxNiAtMTIgMTEgMSAtNSAxNyAtMzAgMjUgLTQxIDE0elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk01NjIgNjAgYzAgLTE5IDIgLTI3IDUgLTE3IDIgOSAyIDI1IDAgMzUgLTMgOSAtNSAxIC01IC0xOHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNNzAyIDYwIGMwIC0xOSAyIC0yNyA1IC0xNyAyIDkgMiAyNSAwIDM1IC0zIDkgLTUgMSAtNSAtMTh6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTcyNyA4NCBjLTEyIC0xMiAtOCAtNDEgOCAtNTQgMjAgLTE3IDQ3IDUgNDMgMzQgLTMgMjEgLTM3IDM0IC01MSAyMHogbTM5IC0xNSBjMTAgLTE3IC0xMyAtMzYgLTI3IC0yMiAtMTIgMTIgLTQgMzMgMTEgMzMgNSAwIDEyIC01IDE2IC0xMXpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNOTAxIDYwIGMxMCAtMjcgMjkgLTMzIDI5IC05IDAgNiAtNCA3IC0xMCA0IC01IC0zIC0xMCAzIC0xMCAxNCAwIDEyIC00IDIxIC05IDIxIC02IDAgLTYgLTEyIDAgLTMwelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk05MzAgNzggYzAgLTggNiAtMjMgMTQgLTM0IDE0IC0xOCAxNSAtMTggMjYgMTAgNiAxNiA4IDMxIDUgMzQgLTIgMyAtOSAtNiAtMTQgLTE5IC03IC0xNiAtMTAgLTE5IC0xMCAtNyAtMSAyMCAtMjEgMzUgLTIxIDE2elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk05OTAgNjAgYzAgLTE2IDQgLTMwIDggLTMwIDUgMCA3IDEzIDQgMzAgLTIgMTcgLTYgMzAgLTggMzAgLTIgMCAtNCAtMTMgLTQgLTMwelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0zMjAwIDYwIGMwIC0xNiA1IC0zMCAxMCAtMzAgNiAwIDEwIDE0IDEwIDMwIDAgMTcgLTQgMzAgLTEwIDMwIC01IDAgLTEwIC0xMyAtMTAgLTMwelxcXCI+PC9wYXRoPjwvZz48L3N2Zz5cIiIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vSG9tZS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgaG9tZUltZyBmcm9tIFwiLi4vLi4vaW1hZ2VzL2hvbWUuanBnXCI7XHJcbmltcG9ydCBsb2dvIGZyb20gXCIuLi8uLi9pbWFnZXMvQWxlYyBBdmlhdG9yIExvZ28ucG5nXCI7XHJcbmNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlckhvbWUgPSAoZnJhZ21lbnQpID0+IHtcclxuICBlbGVtZW50LmlubmVySFRNTCA9IC8qIEhUTUwgKi8gYFxyXG4gICAgXHJcbiAgICAgIDxkaXYgY2xhc3M9JHtzdHlsZXNbXCJjb250YWluZXJcIl19PlxyXG4gICAgICAgIDxpbWcgY2xhc3M9JHtzdHlsZXNbXCJsb2dvXCJdfSBzcmM9JHtsb2dvfSBhbHQ9XCJcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgYDtcclxuICBjb25zb2xlLmxvZyhlbGVtZW50LmZpcnN0RWxlbWVudENoaWxkKTtcclxuICBmcmFnbWVudC5hcHBlbmRDaGlsZChlbGVtZW50LmZpcnN0RWxlbWVudENoaWxkKTtcclxufTtcclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9oeWJyaWRDYXJvdXNlbC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgZmlyZUltYWdlIGZyb20gXCIuLi8uLi9pbWFnZXMvR29vZHllYXItV29vbHNleUZpcmUuanBnXCI7XHJcbmltcG9ydCB7IHJlbmRlcmdhbGxlcnlTbGlkZXIgfSBmcm9tIFwiLi4vLi4vZ2FsbGVyeVNsaWRlci9nYWxsZXJ5U2xpZGVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyaHlicmlkQ2Fyb3VzZWwgPSAoZnJhZ21lbnQpID0+IHtcclxuICBjb25zdCBlbGVtZW50ID0gLyogSFRNTCAqLyBgXHJcbiAgICA8ZGl2IGNsYXNzPSR7c3R5bGVzW1wiY29udGFpbmVyXCJdfT5cclxuICAgICAgPGRpdiBjbGFzcz0ke3N0eWxlc1tcImNvbnRlbnQtY29udGFpbmVyXCJdfT5cclxuICAgICAgICA8ZGl2IGNsYXNzPSR7c3R5bGVzW1wiY29udGVudC1pbWFnZVwiXX0+XHJcbiAgICAgICAgICAke3JlbmRlcmdhbGxlcnlTbGlkZXIoXCJoeWJyaWQtZ2FsbGVyeS1jb250YWluZXJcIiwgXCJoeWJyaWRcIil9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0ke3N0eWxlc1tcImJhbm5lci1jb250YWluZXJcIl19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz0ke3N0eWxlc1tcImJhbm5lci1jb250ZW50XCJdfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ke3N0eWxlc1tcInRleHQtY29udGFpbmVyXCJdfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSR7c3R5bGVzW1widGV4dC1jb250ZW50LWNvbnRhaW5lclwiXX0+XHJcbiAgICAgICAgICAgICAgICA8aDU+VGhlIENvbmNlcHQ8L2g1PlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIExvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG4gICAgICAgICAgICAgICAgICBJbGx1bSBpcHNhbSByZXBlbGxlbmR1cyBkZWxlbml0aSBpdXN0bywgcmVwZWxsYXQgZnVnYSBzZXF1aVxyXG4gICAgICAgICAgICAgICAgICBjb25zZWN0ZXR1ciBwb3NzaW11cyBlYSBuYXR1cyBhbGlxdWlkIHNhZXBlIGFkaXBpc2NpIHZlbmlhbVxyXG4gICAgICAgICAgICAgICAgICBzb2x1dGEgaW1wZWRpdCBvZmZpY2lhIGxhYm9yaW9zYW0gZWFxdWUgbmloaWwuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICAgICAgICAgIElsbHVtIGlwc2FtIHJlcGVsbGVuZHVzIGRlbGVuaXRpIGl1c3RvLCByZXBlbGxhdCBmdWdhIHNlcXVpXHJcbiAgICAgICAgICAgICAgICAgIGNvbnNlY3RldHVyIHBvc3NpbXVzIGVhIG5hdHVzIGFsaXF1aWQgc2FlcGUgYWRpcGlzY2kgdmVuaWFtXHJcbiAgICAgICAgICAgICAgICAgIHNvbHV0YSBpbXBlZGl0IG9mZmljaWEgbGFib3Jpb3NhbSBlYXF1ZSBuaWhpbC5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgO1xyXG5cclxuICByZXR1cm4gZWxlbWVudDtcclxufTtcclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9oeWJyaWRJbWFnZS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgZmlyZUltYWdlIGZyb20gXCIuLi8uLi9pbWFnZXMvR29vZHllYXItV29vbHNleUZpcmUuanBnXCI7XHJcbmltcG9ydCBjYXltYW4gZnJvbSBcIi4uLy4uL2ltYWdlcy9yZW5kZXJzL0NBWU1BTiBBVklBVE9SIDIwMjEwNzIyICg2KS5qcGdcIjtcclxuY29uc3QgZWxlcyA9IFtcclxuICB7XHJcbiAgICBpbWc6IGZpcmVJbWFnZSxcclxuICAgIHRleHQ6IC8qIEhUTUwgKi8gYDxoNT5UaGUgQmFja2dyb3VuZDwvaDU+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIFRoZSAyMDE5IFdvb2xzZXkgTWFsaWJ1IGZpcmUgd2lwZWQgb3V0IG1hbnkgc3RydWN0dXJlcywgb25lIG9mIHdoaWNoIHdhc1xyXG4gICAgICAgIGEgZG9tZS1saWtlIGJ1aWxkaW5nIChsaWtlIGFuIG9ic2VydmF0b3J5KS4gV2hhdCB3YXMgbGVmdCB3YXMgYSBzZWNsdWRlZFxyXG4gICAgICAgIHByb3BlcnR5IHdpdGggYSBicmVhdGh0YWtpbmcgMzYwLWRlZ3JlZSB2aWV3IG9mIHRoZSBQYWNpZmljIE9jZWFuIGFuZFxyXG4gICAgICAgIHRoZSBNYWxpYnUgbW91bnRhaW5zLlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIEFwZWwgRGVzaWduIGFjY2VwdGVkIHRoZSBjaGFsbGVuZ2Ugb2YgY3JlYXRpbmcgYSBwaWVjZSBvZiBhcmNoaXRlY3R1cmVcclxuICAgICAgICB0aGF0IHdvdWxkIGhhdmUgYSBtaW5pbWFsIGVudmlyb25tZW50IGltcGFjdCBhbmQgeWV0IGV2b2tlIGFuZCBjb21wbGV0ZVxyXG4gICAgICAgIHRoZSBzaXRlIGNvbmRpdGlvbnMuIFRoZSBzaXRlIGRpY3RhdGVkIHRocmVlIG1ham9yIGNyaXRlcmlhLCBmaXJzdCB0aGF0XHJcbiAgICAgICAgaXQgd2FzIGEgZmlyZS1yZWJ1aWx0IGhvbWUsIHNlY29uZCB0aGUgY2hhbGxlbmdlcyBvZiBhY2Nlc3NpYmlsaXR5IHRvXHJcbiAgICAgICAgdGhlIHNpdGUgYW5kIGZpbmFsbHksIGl0IG11c3QgYmUgYW4g4oCcb2ZmIHRoZSBncmlk4oCdIGhvbWUuXHJcbiAgICAgIDwvcD5gLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1nOiBjYXltYW4sXHJcbiAgICB0ZXh0OiAvKiBIVE1MICovIGA8aDU+VGhlIEltcGFjdDwvaDU+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIENvbmNlcHR1YWxseSwgQXBlbCBEZXNpZ24gd2FudGVkIHRvIGNyZWF0ZSB0aGUgbm90aW9uIHRoYXQgdGhlXHJcbiAgICAgICAgYXJjaGl0ZWN0dXJlIG9mIGJ1aWxkaW5nIGNvbnRpbnVlcyBiZXlvbmQsIGluIGEgc2Vuc2UsIHRoZSBmb3JtcyBmbG93XHJcbiAgICAgICAgdGhyb3VnaG91dCBhbmQgbmV2ZXIgc3RvcC4gVGhlIGFyY2hpdGVjdHVyZSBmb3JtcyBlbWVyZ2UgZnJvbSB0aGUgZ3JvdW5kXHJcbiAgICAgICAgZXh0ZW50IHRvIHRoZSBob3Jpem9uIGFuZCBkaXZpZGUgaW50byB0d28gYmVhdXRpZnVsIGlycmVndWxhciB2b2x1bWV0cmljXHJcbiAgICAgICAgZWxlbWVudHMgYXMgaWYgdGhlIGFyY2hpdGVjdHVyZSB3YXMgc2xpY2luZyB0aGUgc3BhY2UgZW1waGFzaXppbmcgdGhlXHJcbiAgICAgICAgZ29yZ2VvdXMgdmlld3Mgb2YgdGhlIE1hbGlidSBtb3VudGFpbnMgYW5kIHRoZSBQYWNpZmljIE9jZWFuLlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIFRoZSBiaXJkLWxpa2UgYnVpbGRpbmcgcHJvZ3JhbSBhbHNvIGluY29ycG9yYXRlcyB0aGUgaWRlYXMgb2YgZmxvdyBhbmRcclxuICAgICAgICBjb250aW51YXRpb247IHRoZSBmaXJzdCBsZXZlbCBwcm9wb3NlcyBhbiBvcGVuIGZsb29yIHBsYW4gd2l0aCBhIGdsYXNzXHJcbiAgICAgICAgZmFjYWRlIHRoYXQgb3BlbnMgdXAgdGhlIHNwYWNlIHRvIGJlYXV0aWZ1bCBkZWNrIGFuZCBhIHNlY29uZCBmbG9vciBmb3JcclxuICAgICAgICBiZWRyb29tIHRoYXQgYXJlIGVsZXZhdGVkIGZyb20gdGhlIGdyb3VuZCB0byBhZ2FpbiBlbXBoYXNpemUgdGhpcyBub3Rpb25cclxuICAgICAgICBvZiBmbG93IGFuZCBsaWdodG5lc3MuXHJcbiAgICAgIDwvcD5gLFxyXG4gIH0sXHJcbl07XHJcbmV4cG9ydCBjb25zdCByZW5kZXJoeWJyaWRJbWFnZSA9IChpKSA9PiB7XHJcbiAgY29uc3QgZWxlbWVudCA9IC8qIEhUTUwgKi8gYFxyXG4gICAgPGRpdiBjbGFzcz0ke3N0eWxlc1tcImNvbnRhaW5lclwiXX0+XHJcbiAgICAgIDxkaXYgY2xhc3M9JHtzdHlsZXNbXCJjb250ZW50LWltYWdlLWNvbnRhaW5lclwiXX0+XHJcbiAgICAgICAgPGltZyBzcmM9JHtlbGVzW2ldLmltZ30gY2xhc3M9JHtzdHlsZXNbXCJjb250ZW50LWltYWdlXCJdfSBhbHQ9XCJcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9JHtzdHlsZXNbXCJiYW5uZXItY29udGFpbmVyXCJdfT5cclxuICAgICAgICA8ZGl2IGNsYXNzPSR7c3R5bGVzW1wiYmFubmVyLWNvbnRlbnRcIl19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz0ke3N0eWxlc1tcInRleHQtY29udGVudC1jb250YWluZXJcIl19PiR7ZWxlc1tpXS50ZXh0fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGA7XHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn07XHJcbi8vICAgICAgICAgICAvLyA8ZGl2IGNsYXNzPSR7c3R5bGVzW1widGV4dC1jb250ZW50LWNvbnRhaW5lclwiXX0+JHtlbGVzW2ldLnRleHR9PC9kaXY+XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vbmF2YmFyLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBsb2dvIGZyb20gXCIuLi8uLi9pbWFnZXMvbG9nby5zdmdcIjtcclxuY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyTmF2ID0gKGZyYWdtZW50KSA9PiB7XHJcbiAgZWxlbWVudC5pbm5lckhUTUwgPSAvKiBIVE1MICovIGBcclxuICAgIDxkaXYgY2xhc3M9JHtzdHlsZXNbXCJuYXYtd3JhcHBlclwiXX0+XHJcbiAgICAgIDxuYXYgbmFtZT1cIm5hdi1jb250YWluZXJcIiBjbGFzcz0ke3N0eWxlc1tcImNvbnRhaW5lclwiXX0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0ke3N0eWxlc1tcImNvbnRlbnQtY29udGFpbmVyXCJdfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9JHtzdHlsZXNbXCJsb2dvLWNvbnRhaW5lclwiXX0+JHtsb2dvfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvZGl2PlxyXG4gIGA7XHJcbiAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCk7XHJcbn07XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcXVvdGUubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHF1b3RlIGZyb20gXCIuLi8uLi9pbWFnZXMvUGhvZW5peCBRdW90ZS5wbmdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJxdW90ZSA9IChmcmFnbWVudCkgPT4ge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSAvKiBIVE1MICovIGBcclxuICAgIDxkaXYgY2xhc3M9JHtzdHlsZXNbXCJjb250YWluZXJcIl19PlxyXG4gICAgICA8ZGl2IGNsYXNzPSR7c3R5bGVzW1wiY29udGVudC1jb250YWluZXJcIl19PlxyXG4gICAgICAgIDxpbWcgY2xhc3M9JHtzdHlsZXNbXCJjb250ZW50LWltYWdlXCJdfSBzcmM9JHtxdW90ZX0gYWx0PVwiXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgO1xyXG4gIHJldHVybiBlbGVtZW50O1xyXG59O1xyXG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL3dyYXBwZXIubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgcmVuZGVycXVvdGUgfSBmcm9tIFwiLi4vcXVvdGUvcXVvdGVcIjtcclxuaW1wb3J0IHsgcmVuZGVyZ2FsbGVyeVNsaWRlciB9IGZyb20gXCIuLi8uLi9nYWxsZXJ5U2xpZGVyL2dhbGxlcnlTbGlkZXJcIjtcclxuaW1wb3J0IHsgcmVuZGVyaHlicmlkSW1hZ2UgfSBmcm9tIFwiLi4vaHlicmlkSW1hZ2UvaHlicmlkSW1hZ2VcIjtcclxuaW1wb3J0IHsgcmVuZGVyaHlicmlkQ2Fyb3VzZWwgfSBmcm9tIFwiLi4vaHlicmlkQ2Fyb3VzZWwvaHlicmlkQ2Fyb3VzZWxcIjtcclxuXHJcbmNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlcndyYXBwZXIgPSAoZnJhZ21lbnQpID0+IHtcclxuICBlbGVtZW50LmlubmVySFRNTCA9IC8qIEhUTUwgKi8gYFxyXG4gICAgPGRpdiBjbGFzcz0ke3N0eWxlc1tcImNvbnRhaW5lclwiXX0+XHJcbiAgICAgIDxkaXYgaWQ9XCJzY3JvbGwtaGVhZGVyXCIgY2xhc3M9JHtzdHlsZXNbXCJzY3JvbGwtaGVhZGVyXCJdfT48L2Rpdj5cclxuICAgICAgJHtyZW5kZXJxdW90ZSgpfVxyXG4gICAgICA8ZGl2IGNsYXNzPSR7c3R5bGVzW1wiY29udGVudC1jb250YWluZXJcIl19PlxyXG4gICAgICAgICR7cmVuZGVyZ2FsbGVyeVNsaWRlcihcImdhbGxlcnktY29udGFpbmVyXCIsIFwiXCIpfSAke3JlbmRlcmh5YnJpZEltYWdlKDApfVxyXG4gICAgICAgICR7cmVuZGVyaHlicmlkQ2Fyb3VzZWwoKX0gJHtyZW5kZXJoeWJyaWRJbWFnZSgxKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgO1xyXG4gIGZyYWdtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpO1xyXG59O1xyXG4vLyAgICAgICAgIC8vICAiLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL2dhbGxlcnlTbGlkZXIubW9kdWxlLnNjc3NcIjtcclxuY29uc3QgY2FjaGUgPSB7fTtcclxuY29uc3QgYmx1ZVByaW50SW1hZ2VzQ2FjaGUgPSB7fTtcclxuZnVuY3Rpb24gaW1wb3J0QWxsKGltcG9ydHMpIHtcclxuICBpbXBvcnRzLmZvckVhY2goKHIpID0+IHtcclxuICAgIHIua2V5cygpLmZvckVhY2goKGtleSkgPT4gKGNhY2hlW2tleV0gPSByKGtleSkpKTtcclxuICB9KTtcclxufVxyXG5cclxuaW1wb3J0QWxsKFtcclxuICByZXF1aXJlLmNvbnRleHQoXCIuLi9pbWFnZXMvcmVuZGVyc1wiLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKSxcclxuICByZXF1aXJlLmNvbnRleHQoXCIuLi9pbWFnZXMvYmx1ZXByaW50c1wiLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKSxcclxuXSk7XHJcblxyXG5jb25zdCByZW5kZXJzID0gT2JqZWN0LmtleXMoY2FjaGUpLm1hcCgobmFtZSkgPT4ge1xyXG4gIHJldHVybiBjYWNoZVtuYW1lXTtcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyZ2FsbGVyeVNsaWRlciA9IChjbGFzc05hbWUsIGxvY2F0aW9uKSA9PiB7XHJcbiAgY29uc3QgZWxlbWVudCA9IC8qIEhUTUwgKi8gYFxyXG4gICAgPGRpdiBjbGFzcz0ke3N0eWxlc1tjbGFzc05hbWVdfT5cclxuICAgICAgPGRpdiBjbGFzcz1cInNwbGlkZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGxpZGVfX3RyYWNrXCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3M9XCJzcGxpZGVfX2xpc3RcIj48L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGA7XHJcblxyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IGVsZW1lbnQ7XHJcbiAgY29uc3Qgc2xpZGVyQ29udGFpbmVyID0gY29udGFpbmVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidWxcIik7XHJcbiAgY29uc29sZS5sb2cobG9jYXRpb24gPT09IFwiaHlicmlkXCIgPyA1IDogcmVuZGVycy5sZW5ndGgsIFwidGVzdGluZ1wiKTtcclxuICBmb3IgKFxyXG4gICAgbGV0IGkgPSBsb2NhdGlvbiA9PT0gXCJoeWJyaWRcIiA/IDUgOiAwO1xyXG4gICAgaSA8IChsb2NhdGlvbiA9PT0gXCJoeWJyaWRcIiA/IHJlbmRlcnMubGVuZ3RoIC0gMSA6IDUpO1xyXG4gICAgaSsrXHJcbiAgKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3Qgc2xpZGUgPSAvKiBIVE1MICovIGAgPGxpIGNsYXNzPVwic3BsaWRlX19zbGlkZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPSR7c3R5bGVzW1wiaW1hZ2UtY29udGFpbmVyXCJdfT5cclxuICAgICAgICA8aW1nIGNsYXNzPSR7c3R5bGVzW1wiZ2FsbGVyeS1pbWFnZVwiXX0gc3JjPSR7cmVuZGVyc1tpXX0gYWx0PVwiXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2xpPmA7XHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gc2xpZGU7XHJcbiAgICBzbGlkZXJDb250YWluZXJbMF0uYXBwZW5kQ2hpbGQoY29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQub3V0ZXJIVE1MO1xyXG59O1xyXG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vRGVwdGgucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2JsdWVwcmludHMvRGVwdGgucG5nXCIsXG5cdFwiLi9HZW9tZXRyeSAucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2JsdWVwcmludHMvR2VvbWV0cnkgLnBuZ1wiLFxuXHRcIi4vVGFrZSBPZmYgQ29sb3IucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2JsdWVwcmludHMvVGFrZSBPZmYgQ29sb3IucG5nXCIsXG5cdFwiLi9UYWtlIE9mZi5wbmdcIjogXCIuL3NyYy9pbWFnZXMvYmx1ZXByaW50cy9UYWtlIE9mZi5wbmdcIixcblx0XCIuL1RlbGVzY29wZS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvYmx1ZXByaW50cy9UZWxlc2NvcGUucG5nXCIsXG5cdFwiLi9XYXlwb2ludC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvYmx1ZXByaW50cy9XYXlwb2ludC5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzL2JsdWVwcmludHMgc3luYyBcXFxcLihwbmd8anBlP2d8c3ZnKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vQ0FZTUFOIEFWSUFUT1IgMjAyMTA3MjIgKDEpLmpwZ1wiOiBcIi4vc3JjL2ltYWdlcy9yZW5kZXJzL0NBWU1BTiBBVklBVE9SIDIwMjEwNzIyICgxKS5qcGdcIixcblx0XCIuL0NBWU1BTiBBVklBVE9SIDIwMjEwNzIyICgzKS5qcGdcIjogXCIuL3NyYy9pbWFnZXMvcmVuZGVycy9DQVlNQU4gQVZJQVRPUiAyMDIxMDcyMiAoMykuanBnXCIsXG5cdFwiLi9DQVlNQU4gQVZJQVRPUiAyMDIxMDcyMiAoNCkuanBnXCI6IFwiLi9zcmMvaW1hZ2VzL3JlbmRlcnMvQ0FZTUFOIEFWSUFUT1IgMjAyMTA3MjIgKDQpLmpwZ1wiLFxuXHRcIi4vQ0FZTUFOIEFWSUFUT1IgMjAyMTA3MjIgKDUpLmpwZ1wiOiBcIi4vc3JjL2ltYWdlcy9yZW5kZXJzL0NBWU1BTiBBVklBVE9SIDIwMjEwNzIyICg1KS5qcGdcIixcblx0XCIuL0NBWU1BTiBBVklBVE9SIDIwMjEwNzIyICg2KS5qcGdcIjogXCIuL3NyYy9pbWFnZXMvcmVuZGVycy9DQVlNQU4gQVZJQVRPUiAyMDIxMDcyMiAoNikuanBnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcy9yZW5kZXJzIHN5bmMgXFxcXC4ocG5nfGpwZT9nfHN2ZykkXCI7IiwiY29uc3Qgc2Nyb2xsSGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY3JvbGwtaGVhZGVyXCIpO1xyXG5jb25zdCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpO1xyXG5jb25zdCBuYXZMb2dvID0gbmF2Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJzdmdcIik7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIGlmICh0aGlzLndpbmRvdy5zY3JvbGxZID4gMCkge1xyXG4gICAgc2Nyb2xsSGVhZGVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7bmF2Q29udGFpbmVyLm9mZnNldEhlaWdodH1weClgO1xyXG4gICAgbmF2TG9nby5zdHlsZS5maWxsID0gXCJibGFja1wiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBuYXZMb2dvLnN0eWxlLmZpbGwgPSBcIndoaXRlXCI7XHJcbiAgICBzY3JvbGxIZWFkZXIuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKDApXCI7XHJcbiAgfVxyXG59KTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgXCIuL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhclwiO1xyXG5pbXBvcnQgXCIuLi9tYWluLnNjc3NcIjtcclxuXHJcbmltcG9ydCB7IHJlbmRlck5hdiB9IGZyb20gXCIuL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhclwiO1xyXG5pbXBvcnQgeyByZW5kZXJIb21lIH0gZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL0hvbWVcIjtcclxuaW1wb3J0IHsgcmVuZGVyd3JhcHBlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvd3JhcHBlci93cmFwcGVyXCI7XHJcbmltcG9ydCBTcGxpZGUgZnJvbSBcIkBzcGxpZGVqcy9zcGxpZGVcIjtcclxuXHJcbmNvbnN0IGRvY0ZyYWcgPSBuZXcgRG9jdW1lbnRGcmFnbWVudCgpO1xyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbmJvZHkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCIjcm9vdFwiKTtcclxucmVuZGVyTmF2KGRvY0ZyYWcpO1xyXG5yZW5kZXJIb21lKGRvY0ZyYWcpO1xyXG5cclxucmVuZGVyd3JhcHBlcihkb2NGcmFnKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb2NGcmFnKTtcclxucmVxdWlyZShcIi4vc2Nyb2xsQW5pbWF0aW9uXCIpO1xyXG5jb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LnNwbGlkZVwiKSk7XHJcblxyXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKFwiLi9nYWxsZXJ5U2xpZGVyL2dhbGxlcnlTbGlkZXIubW9kdWxlLnNjc3NcIikuZGVmYXVsdDtcclxudmFyIGVsbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic3BsaWRlXCIpO1xyXG5jb25zb2xlLmxvZyhzdHlsZXMpO1xyXG4vLyBuZXcgU3BsaWRlKFwiLnNwbGlkZVwiLCB7XHJcbi8vICAgaGVpZ2h0OiBcImF1dG9cIixcclxuLy8gICBhcnJvd3M6IFwiZmFsc2VcIixcclxuXHJcbi8vICAgY292ZXI6IHRydWUsXHJcbi8vICAgY2xhc3Nlczoge1xyXG4vLyAgICAgcHJldjogc3R5bGVzW1wibGVmdFwiXSxcclxuLy8gICAgIG5leHQ6IHN0eWxlc1tcInJpZ2h0XCJdLFxyXG4vLyAgIH0sXHJcbi8vIH0pLm1vdW50KCk7XHJcbmZvciAodmFyIGkgPSAwLCBsZW4gPSBlbG1zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgbmV3IFNwbGlkZShlbG1zW2ldLCB7XHJcbiAgICBoZWlnaHQ6IFwiYXV0b1wiLFxyXG4gIH0pLm1vdW50KCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9