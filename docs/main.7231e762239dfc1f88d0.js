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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n@font-face {\n  font-family: \"Capsuula\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"trueType\");\n}\nbody {\n  overflow-x: hidden;\n  width: 100vw;\n  height: 100vh;\n  background-color: #f9f7f7;\n  font-family: Capsuula;\n}", "",{"version":3,"sources":["webpack://./main.scss"],"names":[],"mappings":"AAAA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;AACF;;AACA;EACE,uBAAA;EACA,+DAAA;AAEF;AAAA;EACE,kBAAA;EACA,YAAA;EACA,aAAA;EACA,yBAAA;EACA,qBAAA;AAEF","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n@font-face {\r\n  font-family: \"Capsuula\";\r\n  src: url(\"./src/fonts/Capsuula.ttf\") format(\"trueType\");\r\n}\r\nbody {\r\n  overflow-x: hidden;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: #f9f7f7;\r\n  font-family: Capsuula;\r\n}\r\n\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".Home-module__container--fYjAH {\n  width: 100%;\n  height: 100%;\n  animation-duration: 3s;\n  z-index: 2;\n  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n}\n@keyframes Home-module__fade--1fEeI {\n  0% {\n    background: black;\n    opacity: 1;\n  }\n  50% {\n    background: black;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.Home-module__fade-cover--323dH {\n  width: 100vw;\n  height: 100vh;\n  animation: Home-module__fade--1fEeI 1s linear 1;\n}\n\n.Home-module__logo--F2xrG {\n  position: fixed;\n  top: 50%;\n  /* position the top  edge of the element at the middle of the parent */\n  /* position the left edge of the element at the middle of the parent */\n  width: 600px;\n  left: 50%;\n  z-index: 2;\n  transform: translate(-50%, -50%);\n  object-fit: cover;\n  object-position: center center;\n}", "",{"version":3,"sources":["webpack://./Home.module.scss"],"names":[],"mappings":"AAQA;EAcE,WAAA;EACA,YAAA;EACA,sBAAA;EAEA,UAAA;EACA,4GAAA;EAEA,4BAAA;EACA,4BAAA;EACA,sBAAA;AAtBF;AARE;EASE;IACE,iBAAA;IACA,UAAA;EAEJ;EAAE;IACE,iBAAA;EAEJ;EAAE;IACE,UAAA;EAEJ;AACF;;AAYA;EACE,YAAA;EACA,aAAA;EA7BA,+CAAA;AAqBF;;AAYA;EACE,eAAA;EACA,QAAA;EAAU,sEAAA;EACV,sEAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,gCAAA;EACA,iBAAA;EACA,8BAAA;AARF","sourcesContent":["@mixin keyframes($name) {\r\n  @keyframes #{$name} {\r\n    @content;\r\n  }\r\n}\r\n@mixin animate($animation, $duration, $method, $times) {\r\n  animation: $animation $duration $method $times;\r\n}\r\n.container {\r\n  @include keyframes(fade) {\r\n    0% {\r\n      background: black;\r\n      opacity: 1;\r\n    }\r\n    50% {\r\n      background: black;\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n    }\r\n  }\r\n\r\n  width: 100%;\r\n  height: 100%;\r\n  animation-duration: 3s;\r\n\r\n  z-index: 2;\r\n  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\r\n    url(\"../../images/home.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n}\r\n.fade-cover {\r\n  width: 100vw;\r\n  height: 100vh;\r\n\r\n  @include animate(fade, 1s, linear, 1);\r\n}\r\n.logo {\r\n  position: fixed;\r\n  top: 50%; /* position the top  edge of the element at the middle of the parent */\r\n  /* position the left edge of the element at the middle of the parent */\r\n  width: 600px;\r\n  left: 50%;\r\n  z-index: 2;\r\n  transform: translate(-50%, -50%);\r\n  object-fit: cover;\r\n  object-position: center center;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "Home-module__container--fYjAH",
	"fade-cover": "Home-module__fade-cover--323dH",
	"fade": "Home-module__fade--1fEeI",
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
___CSS_LOADER_EXPORT___.push([module.id, ".hybridCarousel-module__container--3f2_S {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 60px;\n  position: relative;\n}\n.hybridCarousel-module__container--3f2_S .hybridCarousel-module__content-container--154y6 {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n.hybridCarousel-module__content-image--1_GrM {\n  width: 100%;\n  object-fit: cover;\n  height: auto;\n}\n\n.hybridCarousel-module__text-content-container--3tIqH {\n  position: relative;\n  z-index: 2;\n  padding-right: 80px;\n  padding-bottom: 30px;\n  width: 400px;\n}\n.hybridCarousel-module__text-content-container--3tIqH h5 {\n  font-size: 42.84px;\n  text-align: right;\n  padding-left: 15px;\n  color: #860016;\n  padding-bottom: 40px;\n}\n.hybridCarousel-module__text-content-container--3tIqH p {\n  margin-bottom: 20px;\n  line-height: 1.3;\n  font-size: 18px;\n  text-align: left;\n}\n\n.hybridCarousel-module__banner-container--3UQjo {\n  margin: auto;\n  display: flex;\n  width: calc(41.66667% - 2rem);\n  position: relative;\n}\n\n.hybridCarousel-module__banner-content--1Ivee:after {\n  content: \"\";\n  position: absolute;\n  top: -8rem;\n  right: -1rem;\n  bottom: -2rem;\n  z-index: 1;\n  width: 100vw;\n  background-color: #fff;\n}", "",{"version":3,"sources":["webpack://./hybridCarousel.module.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EAEA,kBAAA;AAAF;AACE;EACE,aAAA;EACA,sBAAA;EACA,kBAAA;AACJ;;AAEA;EACE,WAAA;EACA,iBAAA;EACA,YAAA;AACF;;AAEA;EACE,kBAAA;EACA,UAAA;EAEA,mBAAA;EACA,oBAAA;EASA,YAAA;AARF;AACE;EACE,kBAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;EACA,oBAAA;AACJ;AAEE;EACE,mBAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;AAAJ;;AAGA;EACE,YAAA;EAEA,aAAA;EACA,6BAAA;EAEA,kBAAA;AAFF;;AAME;EACE,WAAA;EACA,kBAAA;EACA,UAAA;EAEA,YAAA;EACA,aAAA;EACA,UAAA;EACA,YAAA;EACA,sBAAA;AAJJ","sourcesContent":[".container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 60px;\r\n\r\n  position: relative;\r\n  .content-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: relative;\r\n  }\r\n}\r\n.content-image {\r\n  width: 100%;\r\n  object-fit: cover;\r\n  height: auto;\r\n}\r\n\r\n.text-content-container {\r\n  position: relative;\r\n  z-index: 2;\r\n\r\n  padding-right: 80px;\r\n  padding-bottom: 30px;\r\n\r\n  h5 {\r\n    font-size: 42.84px;\r\n    text-align: right;\r\n    padding-left: 15px;\r\n    color: #860016;\r\n    padding-bottom: 40px;\r\n  }\r\n  width: 400px;\r\n  p {\r\n    margin-bottom: 20px;\r\n    line-height: 1.3;\r\n    font-size: 18px;\r\n    text-align: left;\r\n  }\r\n}\r\n.banner-container {\r\n  margin: auto;\r\n\r\n  display: flex;\r\n  width: calc(41.66667% - 2rem);\r\n \r\n  position: relative;\r\n\r\n}\r\n.banner-content {\r\n  &:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: -8rem;\r\n\r\n    right: -1rem;\r\n    bottom: -2rem;\r\n    z-index: 1;\r\n    width: 100vw;\r\n    background-color: #fff;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".hybridImage-module__container--ARXJq {\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n}\n\n.hybridImage-module__extra-padding--BCB5k {\n  display: none;\n  padding-right: 60px;\n}\n\n.hybridImage-module__content-image-container--BoGss {\n  width: 1317px;\n  height: 40rem;\n  margin: auto;\n}\n.hybridImage-module__content-image-container--BoGss .hybridImage-module__content-image--1WzRN {\n  display: block;\n  width: 100%;\n  height: 100%;\n  margin-top: -4rem;\n  object-position: center center;\n  object-fit: cover;\n}\n\n.hybridImage-module__text-container--3SY5q {\n  overflow: visible;\n  /* left:auto; */\n  /* right:-3rem; */\n  z-index: -1;\n  position: relative;\n  background-color: white;\n  border: 1px solid rgba(0, 1, 2, 0.226);\n  margin-left: 1rem;\n  margin-right: 1rem;\n  top: -12rem;\n}\n.hybridImage-module__text-container--3SY5q::after {\n  content: \"\";\n  position: absolute;\n  top: -8rem;\n  bottom: -13rem;\n  z-index: -1;\n  width: 100vw;\n  background-color: #fff;\n}\n\n.hybridImage-module__text-content-container--b0OHY {\n  position: relative;\n  z-index: 2;\n  padding-left: 60px;\n  width: 400px;\n}\n.hybridImage-module__text-content-container--b0OHY h5 {\n  font-size: 42.84px;\n  text-align: left;\n  padding-left: 15px;\n  color: #860016;\n  padding-bottom: 40px;\n}\n.hybridImage-module__text-content-container--b0OHY p {\n  margin-bottom: 20px;\n  line-height: 1.3;\n  font-size: 18px;\n  text-align: left;\n}\n\n.hybridImage-module__banner-container--1Iys7 {\n  margin: auto;\n  background-color: white;\n  display: flex;\n  width: calc(41.66667% - 2rem);\n  position: relative;\n}\n\n.hybridImage-module__banner-content--1Ldo6:after {\n  content: \"\";\n  position: absolute;\n  top: -4rem;\n  left: auto;\n  /* right: -3rem; */\n  bottom: -2rem;\n  z-index: 1;\n  width: 100vw;\n  background-color: #fff;\n}", "",{"version":3,"sources":["webpack://./hybridImage.module.scss"],"names":[],"mappings":"AAAA;EACE,uBAAA;EACA,mBAAA;EACA,YAAA;AACF;;AAEA;EACE,aAAA;EACC,mBAAA;AACH;;AACA;EACE,aAAA;EACA,aAAA;EACA,YAAA;AAEF;AADE;EACE,cAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,8BAAA;EACA,iBAAA;AAGJ;;AAAA;EACE,iBAAA;EAEA,eAAA;EACA,iBAAA;EAEA,WAAA;EAEA,kBAAA;EACA,uBAAA;EAEA,sCAAA;EACA,iBAAA;EACA,kBAAA;EACA,WAAA;AADF;AAEE;EACE,WAAA;EACA,kBAAA;EACA,UAAA;EAEA,cAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;AADJ;;AAIA;EACE,kBAAA;EACA,UAAA;EACA,kBAAA;EASA,YAAA;AATF;AAEE;EACE,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,cAAA;EACA,oBAAA;AAAJ;AAGE;EACE,mBAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;AADJ;;AAIA;EACE,YAAA;EACA,uBAAA;EACA,aAAA;EACA,6BAAA;EAEA,kBAAA;AAFF;;AAKE;EACE,WAAA;EACA,kBAAA;EACA,UAAA;EACA,UAAA;EACA,kBAAA;EACA,aAAA;EACA,UAAA;EACA,YAAA;EACA,sBAAA;AAFJ","sourcesContent":[".container {\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100vw;\r\n\r\n}\r\n.extra-padding{\r\n  display: none;\r\n   padding-right: 60px;\r\n}\r\n.content-image-container {\r\n  width: 1317px;\r\n  height: 40rem;\r\n  margin: auto;\r\n  .content-image {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    margin-top: -4rem;\r\n    object-position: center center;\r\n    object-fit: cover;\r\n  }\r\n}\r\n.text-container {\r\n  overflow: visible;\r\n\r\n  /* left:auto; */\r\n  /* right:-3rem; */\r\n\r\n  z-index: -1;\r\n\r\n  position: relative;\r\n  background-color: white;\r\n\r\n  border: 1px solid rgba(0, 1, 2, 0.226);\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n  top: -12rem;\r\n  &::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: -8rem;\r\n\r\n    bottom: -13rem;\r\n    z-index: -1;\r\n    width: 100vw;\r\n    background-color: #fff;\r\n  }\r\n}\r\n.text-content-container {\r\n  position: relative;\r\n  z-index: 2;\r\n  padding-left: 60px;\r\n \r\n  h5 {\r\n    font-size: 42.84px;\r\n    text-align: left;\r\n    padding-left: 15px;\r\n    color: #860016;\r\n    padding-bottom: 40px;\r\n  }\r\n  width: 400px;\r\n  p {\r\n    margin-bottom: 20px;\r\n    line-height: 1.3;\r\n    font-size: 18px;\r\n    text-align: left;\r\n  }\r\n}\r\n.banner-container {\r\n  margin: auto;\r\n  background-color: white;\r\n  display: flex;\r\n  width: calc(41.66667% - 2rem);\r\n\r\n  position: relative;\r\n}\r\n.banner-content {\r\n  &:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: -4rem;\r\n    left: auto;\r\n    /* right: -3rem; */\r\n    bottom: -2rem;\r\n    z-index: 1;\r\n    width: 100vw;\r\n    background-color: #fff;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "hybridImage-module__container--ARXJq",
	"extra-padding": "hybridImage-module__extra-padding--BCB5k",
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
___CSS_LOADER_EXPORT___.push([module.id, ".navbar-module__nav-wrapper--1OWRe {\n  position: fixed;\n  width: 100%;\n  z-index: 5;\n}\n.navbar-module__nav-wrapper--1OWRe .navbar-module__container--19Kbc {\n  top: 0;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  object-fit: cover;\n}\n.navbar-module__nav-wrapper--1OWRe .navbar-module__container--19Kbc .navbar-module__content-container--1DK8g {\n  padding: 30px;\n}\n.navbar-module__nav-wrapper--1OWRe .navbar-module__container--19Kbc .navbar-module__logo-container--13fOX {\n  width: 200px;\n}\n.navbar-module__nav-wrapper--1OWRe .navbar-module__container--19Kbc .navbar-module__logo-container--13fOX svg {\n  opacity: 70%;\n  fill: white;\n  transition: all 0.4s ease;\n}\n.navbar-module__nav-wrapper--1OWRe:after {\n  content: \"\";\n  /* This is necessary for the pseudo element to work. */\n  display: block;\n  /* This will put the pseudo element on its own line. */\n  margin: 0 auto;\n  /* This will center the border. */\n  width: 50%;\n  /* Change this to whatever width you want. */\n  /* This creates some space between the element and the border. */\n  border-bottom: 1px solid rgba(255, 255, 255, 0.25);\n  /* This creates the border. Replace black with whatever color you want. */\n}", "",{"version":3,"sources":["webpack://./navbar.module.scss"],"names":[],"mappings":"AAAA;EACE,eAAA;EACA,WAAA;EACA,UAAA;AACF;AAAE;EACE,MAAA;EACA,WAAA;EACA,aAAA;EAEA,uBAAA;EAMA,iBAAA;AAJJ;AAAI;EACE,aAAA;AAEN;AAEI;EACE,YAAA;AAAN;AAEM;EACE,YAAA;EACA,WAAA;EACA,yBAAA;AAAR;AAIE;EACE,WAAA;EAAa,sDAAA;EACb,cAAA;EAAgB,sDAAA;EAChB,cAAA;EAAgB,iCAAA;EAChB,UAAA;EAAY,4CAAA;EACZ,gEAAA;EACA,kDAAA;EAAoD,yEAAA;AAGxD","sourcesContent":[".nav-wrapper {\r\n  position: fixed;\r\n  width: 100%;\r\n  z-index: 5;\r\n  .container {\r\n    top: 0;\r\n    width: 100%;\r\n    display: flex;\r\n\r\n    justify-content: center;\r\n\r\n    .content-container {\r\n      padding: 30px;\r\n    }\r\n\r\n    object-fit: cover;\r\n    .logo-container {\r\n      width: 200px;\r\n\r\n      svg {\r\n        opacity: 70%;\r\n        fill: white;\r\n        transition: all 0.4s ease;\r\n      }\r\n    }\r\n  }\r\n  &:after {\r\n    content: \"\"; /* This is necessary for the pseudo element to work. */\r\n    display: block; /* This will put the pseudo element on its own line. */\r\n    margin: 0 auto; /* This will center the border. */\r\n    width: 50%; /* Change this to whatever width you want. */\r\n    /* This creates some space between the element and the border. */\r\n    border-bottom: 1px solid rgba(255, 255, 255, 0.25); /* This creates the border. Replace black with whatever color you want. */\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/socials/socials.module.scss":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/socials/socials.module.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".socials-module__container--1YVEX {\n  z-index: 3;\n  width: 100%;\n  padding: 80px;\n  display: flex;\n  justify-content: center;\n  gap: 18px;\n  object-fit: cover;\n}\n.socials-module__container--1YVEX .socials-module__content-container--1bKUv {\n  display: flex;\n  justify-content: space-around;\n  gap: 90px;\n}\n.socials-module__container--1YVEX .socials-module__content-container--1bKUv svg {\n  height: 40px;\n  width: 40px;\n  fill: black !important;\n}", "",{"version":3,"sources":["webpack://./socials.module.scss"],"names":[],"mappings":"AAAA;EACE,UAAA;EAEA,WAAA;EACA,aAAA;EACA,aAAA;EACA,uBAAA;EACA,SAAA;EAEA,iBAAA;AADF;AAEE;EACE,aAAA;EACA,6BAAA;EACA,SAAA;AAAJ;AACI;EACE,YAAA;EACA,WAAA;EAEA,sBAAA;AAAN","sourcesContent":[".container {\r\n  z-index: 3;\r\n\r\n  width: 100%;\r\n  padding: 80px;\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 18px;\r\n\r\n  object-fit: cover;\r\n  .content-container {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    gap: 90px;\r\n    svg {\r\n      height: 40px;\r\n      width: 40px;\r\n\r\n      fill: black !important;\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "socials-module__container--1YVEX",
	"content-container": "socials-module__content-container--1bKUv"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/videoRender/videoRender.module.scss":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/videoRender/videoRender.module.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".videoRender-module__container--2qYgm {\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  margin-top: 20rem;\n}\n\n.videoRender-module__content-image-container--3MHpR {\n  width: 1317px;\n  height: 40rem;\n  margin: auto;\n}\n.videoRender-module__content-image-container--3MHpR .videoRender-module__content-image--O3sZb {\n  display: block;\n  width: 100%;\n  height: 100%;\n  margin-top: -4rem;\n  object-position: center center;\n  object-fit: cover;\n}\n\n.videoRender-module__text-container--2b2r1 {\n  overflow: visible;\n  /* left:auto; */\n  /* right:-3rem; */\n  z-index: -1;\n  position: relative;\n  background-color: white;\n  border: 1px solid rgba(0, 1, 2, 0.226);\n  margin-left: 1rem;\n  margin-right: 1rem;\n  top: -12rem;\n}\n\n.videoRender-module__text-content-container--AkVm6 {\n  position: relative;\n  z-index: 2;\n  padding-left: 60px;\n  width: 400px;\n}\n.videoRender-module__text-content-container--AkVm6 h5 {\n  position: absolute;\n  top: -750px;\n  font-size: 42.84px;\n  right: 450px;\n  text-align: left;\n  padding-left: 15px;\n  color: #860016;\n  white-space: nowrap;\n  padding-bottom: 40px;\n}\n.videoRender-module__text-content-container--AkVm6 p {\n  margin-bottom: 20px;\n  line-height: 1.3;\n  font-size: 18px;\n  text-align: left;\n}\n\n.videoRender-module__banner-container--3zJRc {\n  margin: auto;\n  background-color: white;\n  display: flex;\n  width: calc(41.66667% - 60rem);\n  position: relative;\n}\n\n.videoRender-module__banner-content--26XmC:after {\n  content: \"\";\n  position: absolute;\n  top: -49rem;\n  left: auto;\n  right: -1rem;\n  bottom: 20rem;\n  z-index: -1;\n  width: 100vw;\n  background-color: #fff;\n}", "",{"version":3,"sources":["webpack://./videoRender.module.scss"],"names":[],"mappings":"AAAA;EACE,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,iBAAA;AACF;;AACA;EACE,aAAA;EACA,aAAA;EACA,YAAA;AAEF;AAAE;EACE,cAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,8BAAA;EACA,iBAAA;AAEJ;;AACA;EACE,iBAAA;EAEA,eAAA;EACA,iBAAA;EAEA,WAAA;EAEA,kBAAA;EACA,uBAAA;EAEA,sCAAA;EACA,iBAAA;EACA,kBAAA;EACA,WAAA;AAFF;;AAIA;EACE,kBAAA;EACA,UAAA;EACA,kBAAA;EAcA,YAAA;AAdF;AAEE;EACE,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,YAAA;EAEA,gBAAA;EACA,kBAAA;EACA,cAAA;EACC,mBAAA;EACD,oBAAA;AADJ;AAIE;EACE,mBAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;AAFJ;;AAKA;EACE,YAAA;EACA,uBAAA;EACA,aAAA;EACA,8BAAA;EAEA,kBAAA;AAHF;;AAME;EACE,WAAA;EACA,kBAAA;EACA,WAAA;EACA,UAAA;EACA,YAAA;EACA,aAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;AAHJ","sourcesContent":[".container {\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100vw;\r\n  margin-top: 20rem;\r\n}\r\n.content-image-container {\r\n  width: 1317px;\r\n  height: 40rem;\r\n  margin: auto;\r\n\r\n  .content-image {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    margin-top: -4rem;\r\n    object-position: center center;\r\n    object-fit: cover;\r\n  }\r\n}\r\n.text-container {\r\n  overflow: visible;\r\n\r\n  /* left:auto; */\r\n  /* right:-3rem; */\r\n\r\n  z-index: -1;\r\n\r\n  position: relative;\r\n  background-color: white;\r\n\r\n  border: 1px solid rgba(0, 1, 2, 0.226);\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n  top: -12rem;\r\n}\r\n.text-content-container {\r\n  position: relative;\r\n  z-index: 2;\r\n  padding-left: 60px;\r\n\r\n  h5 {\r\n    position: absolute;\r\n    top: -750px;\r\n    font-size: 42.84px;\r\n    right: 450px;\r\n    \r\n    text-align: left;\r\n    padding-left: 15px;\r\n    color: #860016;\r\n     white-space: nowrap;\r\n    padding-bottom: 40px;\r\n  }\r\n  width: 400px;\r\n  p {\r\n    margin-bottom: 20px;\r\n    line-height: 1.3;\r\n    font-size: 18px;\r\n    text-align: left;\r\n  }\r\n}\r\n.banner-container {\r\n  margin: auto;\r\n  background-color: white;\r\n  display: flex;\r\n  width: calc(41.66667% - 60rem);\r\n\r\n  position: relative;\r\n}\r\n.banner-content {\r\n  &:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: -49rem;\r\n    left: auto;\r\n    right: -1rem;\r\n    bottom: 20rem;\r\n    z-index: -1;\r\n    width: 100vw;\r\n    background-color: #fff;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "videoRender-module__container--2qYgm",
	"content-image-container": "videoRender-module__content-image-container--3MHpR",
	"content-image": "videoRender-module__content-image--O3sZb",
	"text-container": "videoRender-module__text-container--2b2r1",
	"text-content-container": "videoRender-module__text-content-container--AkVm6",
	"banner-container": "videoRender-module__banner-container--3zJRc",
	"banner-content": "videoRender-module__banner-content--26XmC"
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
___CSS_LOADER_EXPORT___.push([module.id, ".wrapper-module__container--3-lcI {\n  background-color: #f9f7f7;\n  width: 100%;\n  position: relative;\n  z-index: 4;\n  height: 100%;\n}\n\n.wrapper-module__scroll-header--RdRbC {\n  position: fixed;\n  top: -130px;\n  transition: all 0.4s ease;\n  background-color: white;\n  height: 130px;\n  width: 100%;\n  z-index: 6;\n}\n\n.wrapper-module__content-container--RU8po {\n  padding: auto 80px auto 80px;\n}", "",{"version":3,"sources":["webpack://./wrapper.module.scss"],"names":[],"mappings":"AAAA;EACE,yBAAA;EAEA,WAAA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;AAAF;;AAGA;EACE,eAAA;EACA,WAAA;EAEA,yBAAA;EACA,uBAAA;EACA,aAAA;EACA,WAAA;EACA,UAAA;AADF;;AAGA;EAEE,4BAAA;AADF","sourcesContent":[".container {\r\n  background-color: #f9f7f7;\r\n\r\n  width: 100%;\r\n  position: relative;\r\n  z-index: 4;\r\n  height: 100%;\r\n  \r\n}\r\n.scroll-header {\r\n  position: fixed;\r\n  top: -130px;\r\n\r\n  transition: all 0.4s ease;\r\n  background-color: white;\r\n  height: 130px;\r\n  width: 100%;\r\n  z-index: 6;\r\n}\r\n.content-container {\r\n\r\n  padding: auto 80px auto 80px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "wrapper-module__container--3-lcI",
	"scroll-header": "wrapper-module__scroll-header--RdRbC",
	"content-container": "wrapper-module__content-container--RU8po"
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
___CSS_LOADER_EXPORT___.push([module.id, ".gallerySlider-module__image-container--UkFCj {\n  width: 100%;\n  background-color: grey;\n  height: 100%;\n}\n.gallerySlider-module__image-container--UkFCj .gallerySlider-module__gallery-image--23pjG {\n  width: 100%;\n  object-position: center center;\n  object-fit: cover;\n}\n\n.gallerySlider-module__gallery-container--AVMHj {\n  left: 50%;\n  margin: auto;\n  width: 1194px;\n  margin-top: -90px;\n}\n\n.gallerySlider-module__hybrid-gallery-container--2kzW5 {\n  display: block;\n  width: 1164px;\n}\n\n.gallerySlider-module__left--bIcDA {\n  left: -5em;\n}\n.gallerySlider-module__left--bIcDA svg {\n  transform: scaleX(-1);\n}\n\n.gallerySlider-module__right--1wEa1 {\n  right: -5em;\n}\n\n.gallerySlider-module__hybrid-carousel-left--1rYsW {\n  bottom: 0;\n  top: auto;\n  right: 60px;\n}\n.gallerySlider-module__hybrid-carousel-left--1rYsW svg {\n  transform: scaleX(-1);\n}\n\n.gallerySlider-module__hybrid-carousel-right--zkBWM {\n  bottom: 0;\n  top: auto;\n  right: 20px;\n}", "",{"version":3,"sources":["webpack://./gallerySlider.module.scss"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,sBAAA;EACA,YAAA;AACF;AAAE;EACE,WAAA;EAEA,8BAAA;EACA,iBAAA;AACJ;;AAEA;EACE,SAAA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;AACF;;AACA;EACE,cAAA;EACA,aAAA;AAEF;;AAAA;EACE,UAAA;AAGF;AAFE;EACE,qBAAA;AAIJ;;AADA;EACE,WAAA;AAIF;;AAFA;EACE,SAAA;EACA,SAAA;EACA,WAAA;AAKF;AAJE;EACE,qBAAA;AAMJ;;AAHA;EACE,SAAA;EACA,SAAA;EACA,WAAA;AAMF","sourcesContent":[".image-container {\r\n  width: 100%;\r\n  background-color: grey;\r\n  height: 100%;\r\n  .gallery-image {\r\n    width: 100%;\r\n\r\n    object-position: center center;\r\n    object-fit: cover;\r\n  }\r\n}\r\n.gallery-container {\r\n  left: 50%;\r\n  margin: auto;\r\n  width: 1194px;\r\n  margin-top: -90px;\r\n}\r\n.hybrid-gallery-container {\r\n  display: block;\r\n  width: 1164px;\r\n}\r\n.left {\r\n  left: -5em;\r\n  svg {\r\n    transform: scaleX(-1);\r\n  }\r\n}\r\n.right {\r\n  right: -5em;\r\n}\r\n.hybrid-carousel-left {\r\n  bottom: 0;\r\n  top: auto;\r\n  right: 60px;\r\n  svg {\r\n    transform: scaleX(-1);\r\n  }\r\n}\r\n.hybrid-carousel-right {\r\n  bottom: 0;\r\n  top: auto;\r\n  right: 20px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"image-container": "gallerySlider-module__image-container--UkFCj",
	"gallery-image": "gallerySlider-module__gallery-image--23pjG",
	"gallery-container": "gallerySlider-module__gallery-container--AVMHj",
	"hybrid-gallery-container": "gallerySlider-module__hybrid-gallery-container--2kzW5",
	"left": "gallerySlider-module__left--bIcDA",
	"right": "gallerySlider-module__right--1wEa1",
	"hybrid-carousel-left": "gallerySlider-module__hybrid-carousel-left--1rYsW",
	"hybrid-carousel-right": "gallerySlider-module__hybrid-carousel-right--zkBWM"
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

/***/ "./src/components/socials/socials.module.scss":
/*!****************************************************!*\
  !*** ./src/components/socials/socials.module.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_socials_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js!./socials.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/socials/socials.module.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_socials_module_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_socials_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/videoRender/videoRender.module.scss":
/*!************************************************************!*\
  !*** ./src/components/videoRender/videoRender.module.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_videoRender_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js!./videoRender.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/videoRender/videoRender.module.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_videoRender_module_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_videoRender_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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

/***/ "./src/components/socials/images/facebook.svg":
/*!****************************************************!*\
  !*** ./src/components/socials/images/facebook.svg ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<svg role=\"img\" fill=\"white\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>Facebook</title><path d=\"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z\"></path></svg>"

/***/ }),

/***/ "./src/components/socials/images/instagram.svg":
/*!*****************************************************!*\
  !*** ./src/components/socials/images/instagram.svg ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "<svg role=\"img\" fill=\"white\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>Instagram</title><path d=\"M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z\"></path></svg>"

/***/ }),

/***/ "./src/components/socials/images/linkedin.svg":
/*!****************************************************!*\
  !*** ./src/components/socials/images/linkedin.svg ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<svg role=\"img\" fill=\"white\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>LinkedIn</title><path d=\"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z\"></path></svg>"

/***/ }),

/***/ "./src/components/socials/images/twitter.svg":
/*!***************************************************!*\
  !*** ./src/components/socials/images/twitter.svg ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "<svg role=\"img\" fill=\"white\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>Twitter</title><path d=\"M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z\"></path></svg>"

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
      <div class=${_Home_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["fade-cover"]}></div>
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
    <div style="margin-top:180px" class=${_hybridCarousel_module_scss__WEBPACK_IMPORTED_MODULE_0__.default.container}>
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
    classes: "extra-padding",
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
    <div
      style=${i === 0 ? "margin-top:200px" : "margin-top:220px"}
      class=${_hybridImage_module_scss__WEBPACK_IMPORTED_MODULE_0__.default.container}
    >
      <div class=${_hybridImage_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["content-image-container"]}>
        <img
          src=${eles[i].img}
          class="${_hybridImage_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["content-image"] + " " + _hybridImage_module_scss__WEBPACK_IMPORTED_MODULE_0__.default[eles[i].classes]}"
          alt=""
        />
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

/***/ "./src/components/socials/images sync \\.(png|jpe?g|svg)$":
/*!*****************************************************************************!*\
  !*** ./src/components/socials/images/ sync nonrecursive \.(png|jpe?g|svg)$ ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./facebook.svg": "./src/components/socials/images/facebook.svg",
	"./instagram.svg": "./src/components/socials/images/instagram.svg",
	"./linkedin.svg": "./src/components/socials/images/linkedin.svg",
	"./twitter.svg": "./src/components/socials/images/twitter.svg"
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
webpackContext.id = "./src/components/socials/images sync \\.(png|jpe?g|svg)$";

/***/ }),

/***/ "./src/components/socials/socials.js":
/*!*******************************************!*\
  !*** ./src/components/socials/socials.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderSocialBar": () => (/* binding */ renderSocialBar)
/* harmony export */ });
/* harmony import */ var _socials_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./socials.module.scss */ "./src/components/socials/socials.module.scss");
/* harmony import */ var _images_facebook_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/facebook.svg */ "./src/components/socials/images/facebook.svg");
/* harmony import */ var _images_facebook_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_facebook_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_instagram_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/instagram.svg */ "./src/components/socials/images/instagram.svg");
/* harmony import */ var _images_instagram_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_instagram_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_linkedin_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/linkedin.svg */ "./src/components/socials/images/linkedin.svg");
/* harmony import */ var _images_linkedin_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_linkedin_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_twitter_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/twitter.svg */ "./src/components/socials/images/twitter.svg");
/* harmony import */ var _images_twitter_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_twitter_svg__WEBPACK_IMPORTED_MODULE_4__);





const cache = {};

function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key)));
}
// Note from the docs -> Warning: The arguments passed to require.context must be literals!
importAll(__webpack_require__("./src/components/socials/images sync \\.(png|jpe?g|svg)$"));

const imagesArr = Object.entries(cache).map((module) => module[0]);
console.log(imagesArr);
const renderSocialBar = (fragment) => {
  const element = /* HTML */ `
    <div class=${_socials_module_scss__WEBPACK_IMPORTED_MODULE_0__.default.container}>
      <div class=${_socials_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["content-container"]}>
        <div>${(_images_instagram_svg__WEBPACK_IMPORTED_MODULE_2___default())}</div>
        <div>${(_images_facebook_svg__WEBPACK_IMPORTED_MODULE_1___default())}</div>
        <div>${(_images_twitter_svg__WEBPACK_IMPORTED_MODULE_4___default())}</div>
        <div>${(_images_linkedin_svg__WEBPACK_IMPORTED_MODULE_3___default())}</div>
      </div>
    </div>
  `;

  return element;
};


/***/ }),

/***/ "./src/components/videoRender/videoRender.js":
/*!***************************************************!*\
  !*** ./src/components/videoRender/videoRender.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderVideoPage": () => (/* binding */ renderVideoPage)
/* harmony export */ });
/* harmony import */ var _videoRender_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videoRender.module.scss */ "./src/components/videoRender/videoRender.module.scss");


const element = document.createElement("div");

const renderVideoPage = (i) => {
  const element = /* HTML */ `
    <div class=${_videoRender_module_scss__WEBPACK_IMPORTED_MODULE_0__.default.container}>
      <div class=${_videoRender_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["content-image-container"]}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/iWGFuMg-RA0?enablejsapi=1&version=3&playerapiid=ytplayer"
          title="YouTube video player"
          id="main-video-player"
          allowfullscreen
        ></iframe>
      </div>

      <div class=${_videoRender_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["banner-container"]}>
        <div class=${_videoRender_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["banner-content"]}>
          <div class=${_videoRender_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["text-content-container"]}>
          <h5>Video Render</h5>
          </div>
        </div>
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
/* harmony import */ var _videoRender_videoRender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../videoRender/videoRender */ "./src/components/videoRender/videoRender.js");
/* harmony import */ var _socials_socials__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../socials/socials */ "./src/components/socials/socials.js");








const element = document.createElement("div");

const renderwrapper = (fragment) => {
  element.innerHTML = /* HTML */ `
    <div class=${_wrapper_module_scss__WEBPACK_IMPORTED_MODULE_0__.default.container}>
      <div id="scroll-header" class=${_wrapper_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["scroll-header"]}></div>
      ${(0,_quote_quote__WEBPACK_IMPORTED_MODULE_1__.renderquote)()}
      <div class=${_wrapper_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["content-container"]}>
        ${(0,_gallerySlider_gallerySlider__WEBPACK_IMPORTED_MODULE_2__.rendergallerySlider)("gallery-container", "")} ${(0,_hybridImage_hybridImage__WEBPACK_IMPORTED_MODULE_3__.renderhybridImage)(0)}
        ${(0,_hybridCarousel_hybridCarousel__WEBPACK_IMPORTED_MODULE_4__.renderhybridCarousel)()} ${(0,_hybridImage_hybridImage__WEBPACK_IMPORTED_MODULE_3__.renderhybridImage)(1)} ${(0,_videoRender_videoRender__WEBPACK_IMPORTED_MODULE_5__.renderVideoPage)()}
        ${(0,_socials_socials__WEBPACK_IMPORTED_MODULE_6__.renderSocialBar)()}
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
  if (i === 0) {
    new (_splidejs_splide__WEBPACK_IMPORTED_MODULE_4___default())(elms[i], {
      height: "auto",
      classes: {
        prev: styles["left"],
        next: styles["right"],
      },
    }).mount();
  } else {
    new (_splidejs_splide__WEBPACK_IMPORTED_MODULE_4___default())(elms[i], {
      height: "auto",
      pagination: false,
      classes: {
        prev: styles["hybrid-carousel-left"],
        next: styles["hybrid-carousel-right"],
      },
    }).mount();
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsb0JBQW9CO0FBQzdCO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztB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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFlBQVksUUFBUTtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtB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Ozs7Ozs7Ozs7Ozs7QUNmb0M7QUFDZDtBQUN0QjtBQUN1RDtBQUNIO0FBQ1M7QUFDdkI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFTO0FBQ1QsaUVBQVU7QUFDVjtBQUNBLDBFQUFhO0FBQ2I7QUFDQSxtQkFBTyxDQUFDLG1EQUFtQjtBQUMzQjtBQUNBO0FBQ0EsZUFBZSw2SEFBNEQ7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sSUFBSTtBQUNKLG1DQUFtQyxTQUFTO0FBQzVDO0FBQ0EsUUFBUSx5REFBTTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxJQUFJO0FBQ0osUUFBUSx5REFBTTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdmlhdG9yLy4vbm9kZV9tb2R1bGVzL0BzcGxpZGVqcy9zcGxpZGUvZGlzdC9qcy9zcGxpZGUuZXNtLmpzIiwid2VicGFjazovL2F2aWF0b3IvLi9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vYXZpYXRvci8uL3NyYy9jb21wb25lbnRzL2hvbWUvSG9tZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9hdmlhdG9yLy4vc3JjL2NvbXBvbmVudHMvaHlicmlkQ2Fyb3VzZWwvaHlicmlkQ2Fyb3VzZWwubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYXZpYXRvci8uL3NyYy9jb21wb25lbnRzL2h5YnJpZEltYWdlL2h5YnJpZEltYWdlLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2F2aWF0b3IvLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2F2aWF0b3IvLi9zcmMvY29tcG9uZW50cy9xdW90ZS9xdW90ZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9hdmlhdG9yLy4vc3JjL2NvbXBvbmVudHMvc29jaWFscy9zb2NpYWxzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2F2aWF0b3IvLi9zcmMvY29tcG9uZW50cy92aWRlb1JlbmRlci92aWRlb1JlbmRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9hdmlhdG9yLy4vc3JjL2NvbXBvbmVudHMvd3JhcHBlci93cmFwcGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2F2aWF0b3IvLi9zcmMvZ2FsbGVyeVNsaWRlci9nYWxsZXJ5U2xpZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2F2aWF0b3IvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2F2aWF0b3IvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9hdmlhdG9yLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9hdmlhdG9yLy4vbWFpbi5zY3NzP2QxNWMiLCJ3ZWJwYWNrOi8vYXZpYXRvci8uL3NyYy9jb21wb25lbnRzL2hvbWUvSG9tZS5tb2R1bGUuc2Nzcz9kZTZmIiwid2VicGFjazovL2F2aWF0b3IvLi9zcmMvY29tcG9uZW50cy9oeWJyaWRDYXJvdXNlbC9oeWJyaWRDYXJvdXNlbC5tb2R1bGUuc2Nzcz9iOTAwIiwid2VicGFjazovL2F2aWF0b3IvLi9zcmMvY29tcG9uZW50cy9oeWJyaWRJbWFnZS9oeWJyaWRJbWFnZS5tb2R1bGUuc2Nzcz80Nzk1Iiwid2VicGFjazovL2F2aWF0b3IvLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLm1vZHVsZS5zY3NzP2M5ZWQiLCJ3ZWJwYWNrOi8vYXZpYXRvci8uL3NyYy9jb21wb25lbnRzL3F1b3RlL3F1b3RlLm1vZHVsZS5zY3NzPzI5OGEiLCJ3ZWJwYWNrOi8vYXZpYXRvci8uL3NyYy9jb21wb25lbnRzL3NvY2lhbHMvc29jaWFscy5tb2R1bGUuc2Nzcz84M2I0Iiwid2VicGFjazovL2F2aWF0b3IvLi9zcmMvY29tcG9uZW50cy92aWRlb1JlbmRlci92aWRlb1JlbmRlci5tb2R1bGUuc2Nzcz9mNWM4Iiwid2VicGFjazovL2F2aWF0b3IvLi9zcmMvY29tcG9uZW50cy93cmFwcGVyL3dyYXBwZXIubW9kdWxlLnNjc3M/ZmNlYiIsIndlYnBhY2s6Ly9hdmlhdG9yLy4vc3JjL2dhbGxlcnlTbGlkZXIvZ2FsbGVyeVNsaWRlci5tb2R1bGUuc2Nzcz9mYjcwIiwid2VicGFjazovL2F2aWF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYXZpYXRvci8uL3NyYy9jb21wb25lbnRzL3NvY2lhbHMvaW1hZ2VzL2ZhY2Vib29rLnN2ZyIsIndlYnBhY2s6Ly9hdmlhdG9yLy4vc3JjL2NvbXBvbmVudHMvc29jaWFscy9pbWFnZXMvaW5zdGFncmFtLnN2ZyIsIndlYnBhY2s6Ly9hdmlhdG9yLy4vc3JjL2NvbXBvbmVudHMvc29jaWFscy9pbWFnZXMvbGlua2VkaW4uc3ZnIiwid2VicGFjazovL2F2aWF0b3IvLi9zcmMvY29tcG9uZW50cy9zb2NpYWxzL2ltYWdlcy90d2l0dGVyLnN2ZyIsIndlYnBhY2s6Ly9hdmlhdG9yLy4vc3JjL2ltYWdlcy9sb2dvLnN2ZyIsIndlYnBhY2s6Ly9hdmlhdG9yLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9Ib21lLmpzIiwid2VicGFjazovL2F2aWF0b3IvLi9zcmMvY29tcG9uZW50cy9oeWJyaWRDYXJvdXNlbC9oeWJyaWRDYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly9hdmlhdG9yLy4vc3JjL2NvbXBvbmVudHMvaHlicmlkSW1hZ2UvaHlicmlkSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vYXZpYXRvci8uL3NyYy9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vYXZpYXRvci8uL3NyYy9jb21wb25lbnRzL3F1b3RlL3F1b3RlLmpzIiwid2VicGFjazovL2F2aWF0b3IvLi9zcmMvY29tcG9uZW50cy9zb2NpYWxzL2ltYWdlc3xzeW5jfG5vbnJlY3Vyc2l2ZXwvLihwbmd8anBlIiwid2VicGFjazovL2F2aWF0b3IvLi9zcmMvY29tcG9uZW50cy9zb2NpYWxzL3NvY2lhbHMuanMiLCJ3ZWJwYWNrOi8vYXZpYXRvci8uL3NyYy9jb21wb25lbnRzL3ZpZGVvUmVuZGVyL3ZpZGVvUmVuZGVyLmpzIiwid2VicGFjazovL2F2aWF0b3IvLi9zcmMvY29tcG9uZW50cy93cmFwcGVyL3dyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vYXZpYXRvci8uL3NyYy9nYWxsZXJ5U2xpZGVyL2dhbGxlcnlTbGlkZXIuanMiLCJ3ZWJwYWNrOi8vYXZpYXRvci8uL3NyYy9pbWFnZXMvYmx1ZXByaW50c3xzeW5jfG5vbnJlY3Vyc2l2ZXwvLihwbmd8anBlIiwid2VicGFjazovL2F2aWF0b3IvLi9zcmMvaW1hZ2VzL3JlbmRlcnN8c3luY3xub25yZWN1cnNpdmV8Ly4ocG5nfGpwZSIsIndlYnBhY2s6Ly9hdmlhdG9yLy4vc3JjL3Njcm9sbEFuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly9hdmlhdG9yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2F2aWF0b3Ivd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYXZpYXRvci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXZpYXRvci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2F2aWF0b3Ivd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hdmlhdG9yL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXZpYXRvci93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9hdmlhdG9yLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogU3BsaWRlLmpzXG4gKiBWZXJzaW9uICA6IDIuNC4yMFxuICogTGljZW5zZSAgOiBNSVRcbiAqIENvcHlyaWdodDogMjAyMCBOYW90b3NoaSBGdWppdGFcbiAqL1xuKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiU3BsaWRlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlNwbGlkZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovICgoKSA9PiB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0XCJ1c2Ugc3RyaWN0XCI7XG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlc19fID0gKHtcblxuLyoqKi8gMzExOlxuLyoqKi8gKChfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykgPT4ge1xuXG4vLyBFU00gQ09NUEFUIEZMQUdcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcblxuLy8gRVhQT1JUU1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIHtcbiAgXCJkZWZhdWx0XCI6ICgpID0+IC8qIGJpbmRpbmcgKi8gbW9kdWxlX1NwbGlkZVxufSk7XG5cbi8vIE5BTUVTUEFDRSBPQkpFQ1Q6IC4vc3JjL2pzL2NvbnN0YW50cy9zdGF0ZXMuanNcbnZhciBzdGF0ZXNfbmFtZXNwYWNlT2JqZWN0ID0ge307XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoc3RhdGVzX25hbWVzcGFjZU9iamVjdCk7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQoc3RhdGVzX25hbWVzcGFjZU9iamVjdCwge1xuICBcIkNSRUFURURcIjogKCkgPT4gQ1JFQVRFRCxcbiAgXCJERVNUUk9ZRURcIjogKCkgPT4gREVTVFJPWUVELFxuICBcIklETEVcIjogKCkgPT4gSURMRSxcbiAgXCJNT1VOVEVEXCI6ICgpID0+IE1PVU5URUQsXG4gIFwiTU9WSU5HXCI6ICgpID0+IE1PVklOR1xufSk7XG5cbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb3JlL2V2ZW50LmpzXG4vKipcclxuICogVGhlIGZ1bmN0aW9uIGZvciBwcm92aWRpbmcgYW4gRXZlbnQgb2JqZWN0IHNpbXBseSBtYW5hZ2luZyBldmVudHMuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuLyoqXHJcbiAqIFRoZSBmdW5jdGlvbiBmb3IgcHJvdmlkaW5nIGFuIEV2ZW50IG9iamVjdCBzaW1wbHkgbWFuYWdpbmcgZXZlbnRzLlxyXG4gKi9cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgY29yZV9ldmVudCA9IChmdW5jdGlvbiAoKSB7XG4gIC8qKlxyXG4gICAqIFN0b3JlIGFsbCBldmVudCBkYXRhLlxyXG4gICAqXHJcbiAgICogQHR5cGUge0FycmF5fVxyXG4gICAqL1xuICB2YXIgZGF0YSA9IFtdO1xuICB2YXIgRXZlbnQgPSB7XG4gICAgLyoqXHJcbiAgICAgKiBTdWJzY3JpYmUgdGhlIGdpdmVuIGV2ZW50KHMpLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgIGV2ZW50cyAgLSBBbiBldmVudCBuYW1lLiBVc2Ugc3BhY2UgdG8gc2VwYXJhdGUgbXVsdGlwbGUgZXZlbnRzLlxyXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFsc28sIG5hbWVzcGFjZSBpcyBhY2NlcHRlZCBieSBkb3QsIHN1Y2ggYXMgJ3Jlc2l6ZS57bmFtZXNwYWNlfScuXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyIC0gQSBjYWxsYmFjayBmdW5jdGlvbi5cclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gIGVsbSAgICAgLSBPcHRpb25hbC4gTmF0aXZlIGV2ZW50IHdpbGwgYmUgbGlzdGVuZWQgdG8gd2hlbiB0aGlzIGFyZyBpcyBwcm92aWRlZC5cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAgIG9wdGlvbnMgLSBPcHRpb25hbC4gT3B0aW9ucyBmb3IgYWRkRXZlbnRMaXN0ZW5lci5cclxuICAgICAqL1xuICAgIG9uOiBmdW5jdGlvbiBvbihldmVudHMsIGhhbmRsZXIsIGVsbSwgb3B0aW9ucykge1xuICAgICAgaWYgKGVsbSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGVsbSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgfVxuXG4gICAgICBldmVudHMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZWxtKSB7XG4gICAgICAgICAgZWxtLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YS5wdXNoKHtcbiAgICAgICAgICBldmVudDogZXZlbnQsXG4gICAgICAgICAgaGFuZGxlcjogaGFuZGxlcixcbiAgICAgICAgICBlbG06IGVsbSxcbiAgICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogVW5zdWJzY3JpYmUgdGhlIGdpdmVuIGV2ZW50KHMpLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgZXZlbnRzIC0gQSBldmVudCBuYW1lIG9yIG5hbWVzIHNwbGl0IGJ5IHNwYWNlLlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbG0gICAgLSBPcHRpb25hbC4gcmVtb3ZlRXZlbnRMaXN0ZW5lcigpIHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhpcyBhcmcgaXMgcHJvdmlkZWQuXHJcbiAgICAgKi9cbiAgICBvZmY6IGZ1bmN0aW9uIG9mZihldmVudHMsIGVsbSkge1xuICAgICAgaWYgKGVsbSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGVsbSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGV2ZW50cy5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIGlmIChpdGVtICYmIGl0ZW0uZXZlbnQgPT09IGV2ZW50ICYmIGl0ZW0uZWxtID09PSBlbG0pIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlKGl0ZW0pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIEVtaXQgYW4gZXZlbnQuXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBvbmx5IGZvciBjdXN0b20gZXZlbnRzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgZXZlbnQgLSBBbiBldmVudCBuYW1lLlxyXG4gICAgICogQHBhcmFtIHsqfSAgICAgICBhcmdzICAtIEFueSBudW1iZXIgb2YgYXJndW1lbnRzIHBhc3NlZCB0byBoYW5kbGVycy5cclxuICAgICAqL1xuICAgIGVtaXQ6IGZ1bmN0aW9uIGVtaXQoZXZlbnQpIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpZiAoIWl0ZW0uZWxtICYmIGl0ZW0uZXZlbnQuc3BsaXQoJy4nKVswXSA9PT0gZXZlbnQpIHtcbiAgICAgICAgICBpdGVtLmhhbmRsZXIuYXBwbHkoaXRlbSwgYXJncyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIENsZWFyIGV2ZW50IGRhdGEuXHJcbiAgICAgKi9cbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgZGF0YS5mb3JFYWNoKHVuc3Vic2NyaWJlKTtcbiAgICAgIGRhdGEgPSBbXTtcbiAgICB9XG4gIH07XG4gIC8qKlxyXG4gICAqIFJlbW92ZSB0aGUgcmVnaXN0ZXJlZCBldmVudCBsaXN0ZW5lci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgZXZlbnQgZGF0YS5cclxuICAgKi9cblxuICBmdW5jdGlvbiB1bnN1YnNjcmliZShpdGVtKSB7XG4gICAgaWYgKGl0ZW0uZWxtKSB7XG4gICAgICBpdGVtLmVsbS5yZW1vdmVFdmVudExpc3RlbmVyKGl0ZW0uZXZlbnQsIGl0ZW0uaGFuZGxlciwgaXRlbS5vcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gRXZlbnQ7XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb3JlL3N0YXRlLmpzXG4vKipcclxuICogVGhlIGZ1bmN0aW9uIHByb3ZpZGluZyBhIHN1cGVyIHNpbXBsZSBzdGF0ZSBzeXN0ZW0uXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuLyoqXHJcbiAqIFRoZSBmdW5jdGlvbiBwcm92aWRpbmcgYSBzdXBlciBzaW1wbGUgc3RhdGUgc3lzdGVtLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGluaXRpYWxTdGF0ZSAtIFByb3ZpZGUgdGhlIGluaXRpYWwgc3RhdGUgdmFsdWUuXHJcbiAqL1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBzdGF0ZSA9IChmdW5jdGlvbiAoaW5pdGlhbFN0YXRlKSB7XG4gIC8qKlxyXG4gICAqIFN0b3JlIHRoZSBjdXJyZW50IHN0YXRlLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ3xudW1iZXJ9XHJcbiAgICovXG4gIHZhciBjdXJyID0gaW5pdGlhbFN0YXRlO1xuICByZXR1cm4ge1xuICAgIC8qKlxyXG4gICAgICogQ2hhbmdlIHN0YXRlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gc3RhdGUgLSBBIG5ldyBzdGF0ZS5cclxuICAgICAqL1xuICAgIHNldDogZnVuY3Rpb24gc2V0KHN0YXRlKSB7XG4gICAgICBjdXJyID0gc3RhdGU7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogVmVyaWZ5IGlmIHRoZSBjdXJyZW50IHN0YXRlIGlzIGdpdmVuIG9uZSBvciBub3QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBzdGF0ZSAtIEEgc3RhdGUgbmFtZSB0byBiZSB2ZXJpZmllZC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSAtIFRydWUgaWYgdGhlIGN1cnJlbnQgc3RhdGUgaXMgdGhlIGdpdmVuIG9uZS5cclxuICAgICAqL1xuICAgIGlzOiBmdW5jdGlvbiBpcyhzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlID09PSBjdXJyO1xuICAgIH1cbiAgfTtcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL3V0aWxzL29iamVjdC5qc1xuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuLyoqXHJcbiAqIFNvbWUgdXRpbGl0eSBmdW5jdGlvbnMgcmVsYXRlZCB3aXRoIE9iamVjdCwgc3VwcG9ydGluZyBJRS5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xudmFyIGtleXMgPSBPYmplY3Qua2V5cztcbi8qKlxyXG4gKiBJdGVyYXRlIGFuIG9iamVjdCBsaWtlIEFycmF5LmZvckVhY2guXHJcbiAqIElFIGRvZXNuJ3Qgc3VwcG9ydCBmb3JFYWNoIG9mIEhUTUxDb2xsZWN0aW9uLlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gICAgb2JqICAgICAgIC0gQW4gb2JqZWN0LlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSAgY2FsbGJhY2sgIC0gQSBmdW5jdGlvbiBoYW5kbGluZyBlYWNoIHZhbHVlLiBBcmd1bWVudHMgYXJlIHZhbHVlLCBwcm9wZXJ0eSBhbmQgaW5kZXguXHJcbiAqL1xuXG5mdW5jdGlvbiBlYWNoKG9iaiwgY2FsbGJhY2spIHtcbiAga2V5cyhvYmopLnNvbWUoZnVuY3Rpb24gKGtleSwgaW5kZXgpIHtcbiAgICByZXR1cm4gY2FsbGJhY2sob2JqW2tleV0sIGtleSwgaW5kZXgpO1xuICB9KTtcbn1cbi8qKlxyXG4gKiBSZXR1cm4gdmFsdWVzIG9mIHRoZSBnaXZlbiBvYmplY3QgYXMgYW4gYXJyYXkuXHJcbiAqIElFIGRvZXNuJ3Qgc3VwcG9ydCBPYmplY3QudmFsdWVzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gQW4gb2JqZWN0LlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtBcnJheX0gLSBBbiBhcnJheSBjb250YWluaW5nIGFsbCB2YWx1ZXMgb2YgdGhlIGdpdmVuIG9iamVjdC5cclxuICovXG5cbmZ1bmN0aW9uIHZhbHVlcyhvYmopIHtcbiAgcmV0dXJuIGtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfSk7XG59XG4vKipcclxuICogQ2hlY2sgaWYgdGhlIGdpdmVuIHN1YmplY3QgaXMgb2JqZWN0IG9yIG5vdC5cclxuICpcclxuICogQHBhcmFtIHsqfSBzdWJqZWN0IC0gQSBzdWJqZWN0IHRvIGJlIHZlcmlmaWVkLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtib29sZWFufSAtIFRydWUgaWYgb2JqZWN0LCBmYWxzZSBvdGhlcndpc2UuXHJcbiAqL1xuXG5mdW5jdGlvbiBpc09iamVjdChzdWJqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygc3ViamVjdCA9PT0gJ29iamVjdCc7XG59XG4vKipcclxuICogTWVyZ2UgdHdvIG9iamVjdHMgZGVlcGx5LlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gdG8gICAtIEFuIG9iamVjdCB3aGVyZSBcImZyb21cIiBpcyBtZXJnZWQuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBmcm9tIC0gQW4gb2JqZWN0IG1lcmdlZCB0byBcInRvXCIuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBBIG1lcmdlZCBvYmplY3QuXHJcbiAqL1xuXG5mdW5jdGlvbiBtZXJnZShfcmVmLCBmcm9tKSB7XG4gIHZhciB0byA9IF9leHRlbmRzKHt9LCBfcmVmKTtcblxuICBlYWNoKGZyb20sIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgaWYgKCFpc09iamVjdCh0b1trZXldKSkge1xuICAgICAgICB0b1trZXldID0ge307XG4gICAgICB9XG5cbiAgICAgIHRvW2tleV0gPSBtZXJnZSh0b1trZXldLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdG87XG59XG4vKipcclxuICogQXNzaWduIGFsbCBwcm9wZXJ0aWVzIFwiZnJvbVwiIHRvIFwidG9cIiBvYmplY3QuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB0byAgIC0gQW4gb2JqZWN0IHdoZXJlIHByb3BlcnRpZXMgYXJlIGFzc2lnbmVkLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gZnJvbSAtIEFuIG9iamVjdCB3aG9zZSBwcm9wZXJ0aWVzIGFyZSBhc3NpZ25lZCB0byBcInRvXCIuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBBbiBhc3NpZ25lZCBvYmplY3QuXHJcbiAqL1xuXG5mdW5jdGlvbiBvYmplY3RfYXNzaWduKHRvLCBmcm9tKSB7XG4gIGtleXMoZnJvbSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKCF0b1trZXldKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodG8sIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihmcm9tLCBrZXkpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdG87XG59XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvdXRpbHMvdXRpbHMuanNcbi8qKlxyXG4gKiBBIHBhY2thZ2Ugb2Ygc29tZSBtaXNjZWxsYW5lb3VzIHV0aWxpdHkgZnVuY3Rpb25zLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cbi8qKlxyXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiB2YWx1ZSB0byBhcnJheS5cclxuICpcclxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIEFueSB2YWx1ZS5cclxuICpcclxuICogQHJldHVybiB7KltdfSAtIEFycmF5IGNvbnRhaW5pbmcgdGhlIGdpdmVuIHZhbHVlLlxyXG4gKi9cblxuZnVuY3Rpb24gdG9BcnJheSh2YWx1ZSkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV07XG59XG4vKipcclxuICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGJldHdlZW4gbWluIGFuZCBtYXguXHJcbiAqIE1pbiB3aWxsIGJlIHJldHVybmVkIHdoZW4gdGhlIHZhbHVlIGlzIGxlc3MgdGhhbiBtaW4gb3IgbWF4IHdpbGwgZG8gd2hlbiBncmVhdGVyIHRoYW4gbWF4LlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSBBIG51bWJlciB0byBiZSBjaGVja2VkLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbTEgICAgLSBNaW5pbXVtIG9yIG1heGltdW0gbnVtYmVyLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbTIgICAgLSBNYXhpbXVtIG9yIG1pbmltdW0gbnVtYmVyLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtudW1iZXJ9IC0gQSB2YWx1ZSBpdHNlbGYsIG1pbiBvciBtYXguXHJcbiAqL1xuXG5mdW5jdGlvbiBiZXR3ZWVuKHZhbHVlLCBtMSwgbTIpIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCBtMSA+IG0yID8gbTIgOiBtMSksIG0xID4gbTIgPyBtMSA6IG0yKTtcbn1cbi8qKlxyXG4gKiBUaGUgc3ByaW50ZiBtZXRob2Qgd2l0aCBtaW5pbXVtIGZ1bmN0aW9uYWxpdHkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICBmb3JtYXQgICAgICAgLSBUaGUgc3RyaW5nIGZvcm1hdC5cclxuICogQHBhcmFtIHtzdHJpbmd8QXJyYXl9IHJlcGxhY2VtZW50cyAtIFJlcGxhY2VtZW50cyBhY2NlcHRpbmcgbXVsdGlwbGUgYXJndW1lbnRzLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSAtIENvbnZlcnRlZCBzdHJpbmcuXHJcbiAqL1xuXG5mdW5jdGlvbiBzcHJpbnRmKGZvcm1hdCwgcmVwbGFjZW1lbnRzKSB7XG4gIHZhciBpID0gMDtcbiAgcmV0dXJuIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRvQXJyYXkocmVwbGFjZW1lbnRzKVtpKytdO1xuICB9KTtcbn1cbi8qKlxyXG4gKiBBcHBlbmQgcHggdW5pdCB0byB0aGUgZ2l2ZW4gc3ViamVjdCBpZiBuZWNlc3NhcnkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gdmFsdWUgLSBBIHZhbHVlIHRoYXQgbWF5IG5vdCBpbmNsdWRlIGFuIHVuaXQuXHJcbiAqXHJcbiAqIEByZXR1cm4ge3N0cmluZ30gLSBJZiB0aGUgdmFsdWUgaXMgc3RyaW5nLCByZXR1cm4gaXRzZWxmLlxyXG4gKiAgICAgICAgICAgICAgICAgICAgSWYgbnVtYmVyLCBkbyB2YWx1ZSArIFwicHhcIi4gQW4gZW1wdHkgc3RyaW5nLCBvdGhlcndpc2UuXHJcbiAqL1xuXG5mdW5jdGlvbiB1bml0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuXG4gIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiB2YWx1ZSA+IDApIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSkgKyAncHgnO1xuICB9XG5cbiAgcmV0dXJuIHR5cGUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiAnJztcbn1cbi8qKlxyXG4gKiBQYWQgc3RhcnQgd2l0aCAwLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIC0gQSBudW1iZXIgdG8gYmUgZmlsbGVkIHdpdGggMC5cclxuICpcclxuICogQHJldHVybiB7c3RyaW5nfG51bWJlcn0gLSBQYWRkZWQgbnVtYmVyLlxyXG4gKi9cblxuZnVuY3Rpb24gcGFkKG51bWJlcikge1xuICByZXR1cm4gbnVtYmVyIDwgMTAgPyAnMCcgKyBudW1iZXIgOiBudW1iZXI7XG59XG4vKipcclxuICogQ29udmVydCB0aGUgZ2l2ZW4gdmFsdWUgdG8gcGl4ZWwuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gICAgICAgcm9vdCAgLSBSb290IGVsZW1lbnQgd2hlcmUgYSBkdW1teSBkaXYgaXMgYXBwZW5kZWQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gdmFsdWUgLSBDU1MgdmFsdWUgdG8gYmUgY29udmVydGVkLCBzdWNoIGFzIDEwcmVtLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtudW1iZXJ9IC0gUGl4ZWwuXHJcbiAqL1xuXG5mdW5jdGlvbiB0b1BpeGVsKHJvb3QsIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIGRpdiA9IGNyZWF0ZSgnZGl2Jywge30pO1xuICAgIGFwcGx5U3R5bGUoZGl2LCB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHdpZHRoOiB2YWx1ZVxuICAgIH0pO1xuICAgIGFwcGVuZChyb290LCBkaXYpO1xuICAgIHZhbHVlID0gZGl2LmNsaWVudFdpZHRoO1xuICAgIGRvbV9yZW1vdmUoZGl2KTtcbiAgfVxuXG4gIHJldHVybiArdmFsdWUgfHwgMDtcbn1cbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy91dGlscy9kb20uanNcbi8qKlxyXG4gKiBTb21lIHV0aWxpdHkgZnVuY3Rpb25zIHJlbGF0ZWQgd2l0aCBET00uXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG4vKipcclxuICogRmluZCB0aGUgZmlyc3QgZWxlbWVudCBtYXRjaGluZyB0aGUgZ2l2ZW4gc2VsZWN0b3IuXHJcbiAqIEJlIGF3YXJlIHRoYXQgYWxsIHNlbGVjdG9ycyBhZnRlciBhIHNwYWNlIGFyZSBpZ25vcmVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR8Tm9kZX0gIGVsbSAgICAgICAtIEFuIGFuY2VzdG9yIGVsZW1lbnQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgc2VsZWN0b3IgIC0gRE9NU3RyaW5nLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtFbGVtZW50fG51bGx9IC0gQSBmb3VuZCBlbGVtZW50IG9yIG51bGwuXHJcbiAqL1xuXG5mdW5jdGlvbiBmaW5kKGVsbSwgc2VsZWN0b3IpIHtcbiAgcmV0dXJuIGVsbSA/IGVsbS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yLnNwbGl0KCcgJylbMF0pIDogbnVsbDtcbn1cbi8qKlxyXG4gKiBGaW5kIGEgZmlyc3QgY2hpbGQgaGF2aW5nIHRoZSBnaXZlbiB0YWcgb3IgY2xhc3MgbmFtZS5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSBwYXJlbnQgICAgICAgICAtIEEgcGFyZW50IGVsZW1lbnQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgdGFnT3JDbGFzc05hbWUgLSBBIHRhZyBvciBjbGFzcyBuYW1lLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtFbGVtZW50fHVuZGVmaW5lZH0gLSBBIGZvdW5kIGVsZW1lbnQgb24gc3VjY2VzcyBvciB1bmRlZmluZWQgb24gZmFpbHVyZS5cclxuICovXG5cbmZ1bmN0aW9uIGNoaWxkKHBhcmVudCwgdGFnT3JDbGFzc05hbWUpIHtcbiAgcmV0dXJuIGNoaWxkcmVuKHBhcmVudCwgdGFnT3JDbGFzc05hbWUpWzBdO1xufVxuLyoqXHJcbiAqIFJldHVybiBjaGlsZSBlbGVtZW50cyB0aGF0IG1hdGNoZXMgdGhlIHByb3ZpZGVkIHRhZyBvciBjbGFzcyBuYW1lLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHBhcmVudCAgICAgICAgIC0gQSBwYXJlbnQgZWxlbWVudC5cclxuICogQHBhcmFtIHtzdHJpbmd9ICB0YWdPckNsYXNzTmFtZSAtIEEgdGFnIG9yIGNsYXNzIG5hbWUuXHJcbiAqXHJcbiAqIEByZXR1cm4ge0VsZW1lbnRbXX0gLSBGb3VuZCBlbGVtZW50cy5cclxuICovXG5cbmZ1bmN0aW9uIGNoaWxkcmVuKHBhcmVudCwgdGFnT3JDbGFzc05hbWUpIHtcbiAgaWYgKHBhcmVudCkge1xuICAgIHJldHVybiB2YWx1ZXMocGFyZW50LmNoaWxkcmVuKS5maWx0ZXIoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICByZXR1cm4gaGFzQ2xhc3MoY2hpbGQsIHRhZ09yQ2xhc3NOYW1lLnNwbGl0KCcgJylbMF0pIHx8IGNoaWxkLnRhZ05hbWUgPT09IHRhZ09yQ2xhc3NOYW1lO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIFtdO1xufVxuLyoqXHJcbiAqIENyZWF0ZSBhbiBlbGVtZW50IHdpdGggc29tZSBvcHRpb25hbCBhdHRyaWJ1dGVzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnICAgLSBBIHRhZyBuYW1lLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cnMgLSBBbiBvYmplY3QgYW55IGF0dHJpYnV0ZSBwYWlycyBvZiBuYW1lIGFuZCB2YWx1ZS5cclxuICpcclxuICogQHJldHVybiB7RWxlbWVudH0gLSBBIGNyZWF0ZWQgZWxlbWVudC5cclxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZSh0YWcsIGF0dHJzKSB7XG4gIHZhciBlbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIGVhY2goYXR0cnMsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgcmV0dXJuIHNldEF0dHJpYnV0ZShlbG0sIGtleSwgdmFsdWUpO1xuICB9KTtcbiAgcmV0dXJuIGVsbTtcbn1cbi8qKlxyXG4gKiBDb252ZXJ0IEhUTUwgc3RyaW5nIHRvIERPTSBub2RlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gaHRtbCAtIEhUTUwgc3RyaW5nLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtOb2RlfSAtIEEgY3JlYXRlZCBub2RlLlxyXG4gKi9cblxuZnVuY3Rpb24gZG9taWZ5KGh0bWwpIHtcbiAgdmFyIGRpdiA9IGNyZWF0ZSgnZGl2Jywge30pO1xuICBkaXYuaW5uZXJIVE1MID0gaHRtbDtcbiAgcmV0dXJuIGRpdi5maXJzdENoaWxkO1xufVxuLyoqXHJcbiAqIFJlbW92ZSBhIGdpdmVuIGVsZW1lbnQgZnJvbSBhIERPTSB0cmVlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR8RWxlbWVudFtdfSBlbG1zIC0gRWxlbWVudChzKSB0byBiZSByZW1vdmVkLlxyXG4gKi9cblxuZnVuY3Rpb24gZG9tX3JlbW92ZShlbG1zKSB7XG4gIHRvQXJyYXkoZWxtcykuZm9yRWFjaChmdW5jdGlvbiAoZWxtKSB7XG4gICAgaWYgKGVsbSkge1xuICAgICAgdmFyIHBhcmVudCA9IGVsbS5wYXJlbnRFbGVtZW50O1xuICAgICAgcGFyZW50ICYmIHBhcmVudC5yZW1vdmVDaGlsZChlbG0pO1xuICAgIH1cbiAgfSk7XG59XG4vKipcclxuICogQXBwZW5kIGEgY2hpbGQgdG8gYSBnaXZlbiBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHBhcmVudCAtIEEgcGFyZW50IGVsZW1lbnQuXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gY2hpbGQgIC0gQW4gZWxlbWVudCB0byBiZSBhcHBlbmRlZC5cclxuICovXG5cbmZ1bmN0aW9uIGFwcGVuZChwYXJlbnQsIGNoaWxkKSB7XG4gIGlmIChwYXJlbnQpIHtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICB9XG59XG4vKipcclxuICogSW5zZXJ0IGFuIGVsZW1lbnQgYmVmb3JlIHRoZSByZWZlcmVuY2UgZWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fE5vZGV9IHJlZiAtIEEgcmVmZXJlbmNlIGVsZW1lbnQuXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gICAgICBlbG0gLSBBbiBlbGVtZW50IHRvIGJlIGluc2VydGVkLlxyXG4gKi9cblxuZnVuY3Rpb24gYmVmb3JlKGVsbSwgcmVmKSB7XG4gIGlmIChlbG0gJiYgcmVmKSB7XG4gICAgdmFyIHBhcmVudCA9IHJlZi5wYXJlbnRFbGVtZW50O1xuICAgIHBhcmVudCAmJiBwYXJlbnQuaW5zZXJ0QmVmb3JlKGVsbSwgcmVmKTtcbiAgfVxufVxuLyoqXHJcbiAqIEFwcGx5IHN0eWxlcyB0byB0aGUgZ2l2ZW4gZWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSBlbG0gICAgIC0gQW4gZWxlbWVudCB3aGVyZSBzdHlsZXMgYXJlIGFwcGxpZWQuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSAgc3R5bGVzICAtIE9iamVjdCBjb250YWluaW5nIHN0eWxlcy5cclxuICovXG5cbmZ1bmN0aW9uIGFwcGx5U3R5bGUoZWxtLCBzdHlsZXMpIHtcbiAgaWYgKGVsbSkge1xuICAgIGVhY2goc3R5bGVzLCBmdW5jdGlvbiAodmFsdWUsIHByb3ApIHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICBlbG0uc3R5bGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuLyoqXHJcbiAqIEFkZCBvciByZW1vdmUgY2xhc3NlcyB0by9mcm9tIHRoZSBlbGVtZW50LlxyXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGZvciBpbnRlcm5hbCB1c2FnZS5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSAgICAgICAgIGVsbSAgICAgLSBBbiBlbGVtZW50IHdoZXJlIGNsYXNzZXMgYXJlIGFkZGVkLlxyXG4gKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gY2xhc3NlcyAtIENsYXNzIG5hbWVzIGJlaW5nIGFkZGVkLlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59ICAgICAgICAgcmVtb3ZlICAtIFdoZXRoZXIgdG8gcmVtb3ZlIG9yIGFkZCBjbGFzc2VzLlxyXG4gKi9cblxuZnVuY3Rpb24gYWRkT3JSZW1vdmVDbGFzc2VzKGVsbSwgY2xhc3NlcywgcmVtb3ZlKSB7XG4gIGlmIChlbG0pIHtcbiAgICB0b0FycmF5KGNsYXNzZXMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIGVsbS5jbGFzc0xpc3RbcmVtb3ZlID8gJ3JlbW92ZScgOiAnYWRkJ10obmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbi8qKlxyXG4gKiBBZGQgY2xhc3NlcyB0byB0aGUgZWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSAgICAgICAgICBlbG0gICAgIC0gQW4gZWxlbWVudCB3aGVyZSBjbGFzc2VzIGFyZSBhZGRlZC5cclxuICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119ICBjbGFzc2VzIC0gQ2xhc3MgbmFtZXMgYmVpbmcgYWRkZWQuXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGFkZENsYXNzKGVsbSwgY2xhc3Nlcykge1xuICBhZGRPclJlbW92ZUNsYXNzZXMoZWxtLCBjbGFzc2VzLCBmYWxzZSk7XG59XG4vKipcclxuICogUmVtb3ZlIGEgY2xhc3MgZnJvbSB0aGUgZWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSAgICAgICAgIGVsbSAgICAgLSBBbiBlbGVtZW50IHdoZXJlIGNsYXNzZXMgYXJlIHJlbW92ZWQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBjbGFzc2VzIC0gQSBjbGFzcyBuYW1lIGJlaW5nIHJlbW92ZWQuXHJcbiAqL1xuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhlbG0sIGNsYXNzZXMpIHtcbiAgYWRkT3JSZW1vdmVDbGFzc2VzKGVsbSwgY2xhc3NlcywgdHJ1ZSk7XG59XG4vKipcclxuICogVmVyaWZ5IGlmIHRoZSBwcm92aWRlZCBlbGVtZW50IGhhcyB0aGUgY2xhc3Mgb3Igbm90LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsbSAgICAgICAtIEFuIGVsZW1lbnQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgY2xhc3NOYW1lIC0gQSBjbGFzcyBuYW1lLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtib29sZWFufSAtIFRydWUgaWYgdGhlIGVsZW1lbnQgaGFzIHRoZSBjbGFzcyBvciBmYWxzZSBpZiBub3QuXHJcbiAqL1xuXG5mdW5jdGlvbiBoYXNDbGFzcyhlbG0sIGNsYXNzTmFtZSkge1xuICByZXR1cm4gISFlbG0gJiYgZWxtLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xufVxuLyoqXHJcbiAqIFNldCBhdHRyaWJ1dGUgdG8gdGhlIGdpdmVuIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gICAgICAgICAgICAgICAgIGVsbSAgIC0gQW4gZWxlbWVudCB3aGVyZSBhbiBhdHRyaWJ1dGUgaXMgYXNzaWduZWQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgIG5hbWUgIC0gQXR0cmlidXRlIG5hbWUuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcnxib29sZWFufSAgIHZhbHVlIC0gQXR0cmlidXRlIHZhbHVlLlxyXG4gKi9cblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlKGVsbSwgbmFtZSwgdmFsdWUpIHtcbiAgaWYgKGVsbSkge1xuICAgIGVsbS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICB9XG59XG4vKipcclxuICogR2V0IGF0dHJpYnV0ZSBmcm9tIHRoZSBnaXZlbiBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsbSAgLSBBbiBlbGVtZW50IHdoZXJlIGFuIGF0dHJpYnV0ZSBpcyBhc3NpZ25lZC5cclxuICogQHBhcmFtIHtzdHJpbmd9ICBuYW1lIC0gQXR0cmlidXRlIG5hbWUuXHJcbiAqXHJcbiAqIEByZXR1cm4ge3N0cmluZ30gLSBUaGUgdmFsdWUgb2YgdGhlIGdpdmVuIGF0dHJpYnV0ZSBpZiBhdmFpbGFibGUuIEFuIGVtcHR5IHN0cmluZyBpZiBub3QuXHJcbiAqL1xuXG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGUoZWxtLCBuYW1lKSB7XG4gIHJldHVybiBlbG0gPyBlbG0uZ2V0QXR0cmlidXRlKG5hbWUpIDogJyc7XG59XG4vKipcclxuICogUmVtb3ZlIGF0dHJpYnV0ZSBmcm9tIHRoZSBnaXZlbiBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR8RWxlbWVudFtdfSBlbG1zICAtIEFuIGVsZW1lbnQgd2hlcmUgYW4gYXR0cmlidXRlIGlzIHJlbW92ZWQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSAgICAgIG5hbWVzIC0gQXR0cmlidXRlIG5hbWUuXHJcbiAqL1xuXG5mdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGUoZWxtcywgbmFtZXMpIHtcbiAgdG9BcnJheShuYW1lcykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIHRvQXJyYXkoZWxtcykuZm9yRWFjaChmdW5jdGlvbiAoZWxtKSB7XG4gICAgICByZXR1cm4gZWxtICYmIGVsbS5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgfSk7XG4gIH0pO1xufVxuLyoqXHJcbiAqIFJldHVybiB0aGUgUmVjdCBvYmplY3Qgb2YgdGhlIHByb3ZpZGVkIG9iamVjdC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSBlbG0gLSBBbiBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtDbGllbnRSZWN0fERPTVJlY3R9IC0gQSByZWN0IG9iamVjdC5cclxuICovXG5cbmZ1bmN0aW9uIGdldFJlY3QoZWxtKSB7XG4gIHJldHVybiBlbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG59XG4vKipcclxuICogVHJpZ2dlciB0aGUgZ2l2ZW4gY2FsbGJhY2sgYWZ0ZXIgYWxsIGltYWdlcyBjb250YWluZWQgYnkgdGhlIGVsZW1lbnQgYXJlIGxvYWRlZC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSAgZWxtICAgICAgLSBFbGVtZW50IHRoYXQgbWF5IGNvbnRhaW4gaW1hZ2VzLlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIENhbGxiYWNrIGZ1bmN0aW9uIGZpcmVkIHJpZ2h0IGFmdGVyIGFsbCBpbWFnZXMgYXJlIGxvYWRlZC5cclxuICovXG5cbmZ1bmN0aW9uIGxvYWRlZChlbG0sIGNhbGxiYWNrKSB7XG4gIHZhciBpbWFnZXMgPSBlbG0ucXVlcnlTZWxlY3RvckFsbCgnaW1nJyk7XG4gIHZhciBsZW5ndGggPSBpbWFnZXMubGVuZ3RoO1xuXG4gIGlmIChsZW5ndGgpIHtcbiAgICB2YXIgY291bnQgPSAwO1xuICAgIGVhY2goaW1hZ2VzLCBmdW5jdGlvbiAoaW1nKSB7XG4gICAgICBpbWcub25sb2FkID0gaW1nLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgrK2NvdW50ID09PSBsZW5ndGgpIHtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIC8vIFRyaWdnZXIgdGhlIGNhbGxiYWNrIGltbWVkaWF0ZWx5IGlmIHRoZXJlIGlzIG5vIGltYWdlLlxuICAgIGNhbGxiYWNrKCk7XG4gIH1cbn1cbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb25zdGFudHMvdHlwZXMuanNcbi8qKlxyXG4gKiBFeHBvcnQgc2xpZGVyIHR5cGVzLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cbi8qKlxyXG4gKiBOb3JtYWwgc2xpZGVyLlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cbnZhciBTTElERSA9ICdzbGlkZSc7XG4vKipcclxuICogTG9vcCBhZnRlciB0aGUgbGFzdCBzbGlkZSBhbmQgYmVmb3JlIHRoZSBmaXJzdCBvbmUuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xuXG52YXIgTE9PUCA9ICdsb29wJztcbi8qKlxyXG4gKiBUaGUgdHJhY2sgZG9lc24ndCBtb3ZlLlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cblxudmFyIEZBREUgPSAnZmFkZSc7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvdHJhbnNpdGlvbnMvc2xpZGUvaW5kZXguanNcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBnZW5lcmFsIHNsaWRlIGVmZmVjdCB0cmFuc2l0aW9uLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGdlbmVyYWwgc2xpZGUgZWZmZWN0IHRyYW5zaXRpb24uXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgICAgIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBDb21wb25lbnRzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgY29tcG9uZW50cy5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBzbGlkZSA9IChmdW5jdGlvbiAoU3BsaWRlLCBDb21wb25lbnRzKSB7XG4gIC8qKlxyXG4gICAqIEhvbGQgdGhlIGxpc3QgZWxlbWVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtFbGVtZW50fVxyXG4gICAqL1xuICB2YXIgbGlzdDtcbiAgLyoqXHJcbiAgICogSG9sZCB0aGUgb25FbmQgY2FsbGJhY2sgZnVuY3Rpb24uXHJcbiAgICpcclxuICAgKiBAdHlwZSB7ZnVuY3Rpb259XHJcbiAgICovXG5cbiAgdmFyIGVuZENhbGxiYWNrO1xuICByZXR1cm4ge1xuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgbGlzdCA9IENvbXBvbmVudHMuRWxlbWVudHMubGlzdDtcbiAgICAgIFNwbGlkZS5vbigndHJhbnNpdGlvbmVuZCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gbGlzdCAmJiBlbmRDYWxsYmFjaykge1xuICAgICAgICAgIGVuZENhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGxpc3QpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFN0YXJ0IHRyYW5zaXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9ICAgZGVzdEluZGV4IC0gRGVzdGluYXRpb24gc2xpZGUgaW5kZXggdGhhdCBtaWdodCBiZSBjbG9uZSdzLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9ICAgbmV3SW5kZXggIC0gTmV3IGluZGV4LlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9ICAgcHJldkluZGV4IC0gUHJldmlvdXMgaW5kZXguXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gICBjb29yZCAgICAgLSBEZXN0aW5hdGlvbiBjb29yZGluYXRlcy5cclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGRvbmUgICAgICAtIENhbGxiYWNrIGZ1bmN0aW9uIG11c3QgYmUgaW52b2tlZCB3aGVuIHRyYW5zaXRpb24gaXMgY29tcGxldGVkLlxyXG4gICAgICovXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIHN0YXJ0KGRlc3RJbmRleCwgbmV3SW5kZXgsIHByZXZJbmRleCwgY29vcmQsIGRvbmUpIHtcbiAgICAgIHZhciBvcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG4gICAgICB2YXIgZWRnZUluZGV4ID0gQ29tcG9uZW50cy5Db250cm9sbGVyLmVkZ2VJbmRleDtcbiAgICAgIHZhciBzcGVlZCA9IG9wdGlvbnMuc3BlZWQ7XG4gICAgICBlbmRDYWxsYmFjayA9IGRvbmU7XG5cbiAgICAgIGlmIChTcGxpZGUuaXMoU0xJREUpKSB7XG4gICAgICAgIGlmIChwcmV2SW5kZXggPT09IDAgJiYgbmV3SW5kZXggPj0gZWRnZUluZGV4IHx8IHByZXZJbmRleCA+PSBlZGdlSW5kZXggJiYgbmV3SW5kZXggPT09IDApIHtcbiAgICAgICAgICBzcGVlZCA9IG9wdGlvbnMucmV3aW5kU3BlZWQgfHwgc3BlZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYXBwbHlTdHlsZShsaXN0LCB7XG4gICAgICAgIHRyYW5zaXRpb246IFwidHJhbnNmb3JtIFwiICsgc3BlZWQgKyBcIm1zIFwiICsgb3B0aW9ucy5lYXNpbmcsXG4gICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoXCIgKyBjb29yZC54ICsgXCJweCxcIiArIGNvb3JkLnkgKyBcInB4KVwiXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy90cmFuc2l0aW9ucy9mYWRlL2luZGV4LmpzXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgZmFkZSB0cmFuc2l0aW9uLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGZhZGUgdHJhbnNpdGlvbi5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudHMgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IGZhZGUgPSAoZnVuY3Rpb24gKFNwbGlkZSwgQ29tcG9uZW50cykge1xuICB2YXIgRmFkZSA9IHtcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuICAgICAqIEFwcGx5IHRyYW5zaXRpb24gc3R5bGUgdG8gdGhlIGZpcnN0IHNsaWRlLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgYXBwbHkoU3BsaWRlLmluZGV4KTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydCB0cmFuc2l0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSAgICBkZXN0SW5kZXggLSBEZXN0aW5hdGlvbiBzbGlkZSBpbmRleCB0aGF0IG1pZ2h0IGJlIGNsb25lJ3MuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gICAgbmV3SW5kZXggIC0gTmV3IGluZGV4LlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9ICAgIHByZXZJbmRleCAtIFByZXZpb3VzIGluZGV4LlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICAgIGNvb3JkICAgICAtIERlc3RpbmF0aW9uIGNvb3JkaW5hdGVzLlxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gIGRvbmUgICAgICAtIENhbGxiYWNrIGZ1bmN0aW9uIG11c3QgYmUgaW52b2tlZCB3aGVuIHRyYW5zaXRpb24gaXMgY29tcGxldGVkLlxyXG4gICAgICovXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIHN0YXJ0KGRlc3RJbmRleCwgbmV3SW5kZXgsIHByZXZJbmRleCwgY29vcmQsIGRvbmUpIHtcbiAgICAgIHZhciB0cmFjayA9IENvbXBvbmVudHMuRWxlbWVudHMudHJhY2s7XG4gICAgICBhcHBseVN0eWxlKHRyYWNrLCB7XG4gICAgICAgIGhlaWdodDogdW5pdCh0cmFjay5jbGllbnRIZWlnaHQpXG4gICAgICB9KTtcbiAgICAgIGFwcGx5KG5ld0luZGV4KTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBkb25lKCk7XG4gICAgICAgIGFwcGx5U3R5bGUodHJhY2ssIHtcbiAgICAgICAgICBoZWlnaHQ6ICcnXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICAvKipcclxuICAgKiBBcHBseSB0cmFuc2l0aW9uIHN0eWxlIHRvIHRoZSBzbGlkZSBzcGVjaWZpZWQgYnkgdGhlIGdpdmVuIGluZGV4LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gQSBzbGlkZSBpbmRleC5cclxuICAgKi9cblxuICBmdW5jdGlvbiBhcHBseShpbmRleCkge1xuICAgIHZhciBvcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG4gICAgYXBwbHlTdHlsZShDb21wb25lbnRzLkVsZW1lbnRzLnNsaWRlc1tpbmRleF0sIHtcbiAgICAgIHRyYW5zaXRpb246IFwib3BhY2l0eSBcIiArIG9wdGlvbnMuc3BlZWQgKyBcIm1zIFwiICsgb3B0aW9ucy5lYXNpbmdcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBGYWRlO1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvdHJhbnNpdGlvbnMvaW5kZXguanNcbi8qKlxyXG4gKiBFeHBvcnQgdHJhbnNpdGlvbiBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvcmUvY29tcG9zZXIuanNcbi8qKlxyXG4gKiBQcm92aWRlIGEgZnVuY3Rpb24gZm9yIGNvbXBvc2luZyBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuXG4vKipcclxuICogQ29tcG9zZSBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gICBTcGxpZGUgICAgIC0gU3BsaWRlIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gICBDb21wb25lbnRzIC0gQWRkaXRpb25hbCBjb21wb25lbnRzLlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBUcmFuc2l0aW9uIC0gQ2hhbmdlIGNvbXBvbmVudCBmb3IgdHJhbnNpdGlvbi5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIEFuIG9iamVjdCBjb250YWluaW5nIGFsbCBjb21wb25lbnRzLlxyXG4gKi9cblxuZnVuY3Rpb24gY29tcG9zZShTcGxpZGUsIENvbXBvbmVudHMsIFRyYW5zaXRpb24pIHtcbiAgdmFyIGNvbXBvbmVudHMgPSB7fTtcbiAgZWFjaChDb21wb25lbnRzLCBmdW5jdGlvbiAoQ29tcG9uZW50LCBuYW1lKSB7XG4gICAgY29tcG9uZW50c1tuYW1lXSA9IENvbXBvbmVudChTcGxpZGUsIGNvbXBvbmVudHMsIG5hbWUudG9Mb3dlckNhc2UoKSk7XG4gIH0pO1xuXG4gIGlmICghVHJhbnNpdGlvbikge1xuICAgIFRyYW5zaXRpb24gPSBTcGxpZGUuaXMoRkFERSkgPyBmYWRlIDogc2xpZGU7XG4gIH1cblxuICBjb21wb25lbnRzLlRyYW5zaXRpb24gPSBUcmFuc2l0aW9uKFNwbGlkZSwgY29tcG9uZW50cyk7XG4gIHJldHVybiBjb21wb25lbnRzO1xufVxuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL3V0aWxzL2Vycm9yLmpzXG4vKipcclxuICogVXRpbGl0eSBmdW5jdGlvbnMgZm9yIG91dHB1dHRpbmcgbG9ncy5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG4vKipcclxuICogUHJlZml4IG9mIGFuIGVycm9yIG1hc3NhZ2UuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xudmFyIE1FU1NBR0VfUFJFRklYID0gJ1tTUExJREVdJztcbi8qKlxyXG4gKiBEaXNwbGF5IGFuIGVycm9yIG1lc3NhZ2Ugb24gdGhlIGJyb3dzZXIgY29uc29sZS5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgLSBBbiBlcnJvciBtZXNzYWdlLlxyXG4gKi9cblxuZnVuY3Rpb24gZXJyb3IobWVzc2FnZSkge1xuICBjb25zb2xlLmVycm9yKE1FU1NBR0VfUFJFRklYICsgXCIgXCIgKyBtZXNzYWdlKTtcbn1cbi8qKlxyXG4gKiBDaGVjayBleGlzdGVuY2Ugb2YgdGhlIGdpdmVuIG9iamVjdCBhbmQgdGhyb3cgYW4gZXJyb3IgaWYgaXQgZG9lc24ndC5cclxuICpcclxuICogQHRocm93cyB7RXJyb3J9XHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gICAgICBzdWJqZWN0IC0gQSBzdWJqZWN0IHRvIGJlIGNvbmZpcm1lZC5cclxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgLSBBbiBlcnJvciBtZXNzYWdlLlxyXG4gKi9cblxuZnVuY3Rpb24gZXhpc3Qoc3ViamVjdCwgbWVzc2FnZSkge1xuICBpZiAoIXN1YmplY3QpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIH1cbn1cbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb25zdGFudHMvY2xhc3Nlcy5qc1xuLyoqXHJcbiAqIEV4cG9ydCBjbGFzcyBuYW1lcy5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG4vKipcclxuICogQSByb290IGNsYXNzIG5hbWUuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xudmFyIFJPT1QgPSAnc3BsaWRlJztcbi8qKlxyXG4gKiBUaGUgZGVmaW5pdGlvbiB0YWJsZSBvZiBhbGwgY2xhc3NlcyBmb3IgZWxlbWVudHMuXHJcbiAqIFRoZXkgbWlnaHQgYmUgbW9kaWZpZWQgYnkgb3B0aW9ucy5cclxuICpcclxuICogQHR5cGUge09iamVjdH1cclxuICovXG5cbnZhciBFTEVNRU5UX0NMQVNTRVMgPSB7XG4gIHJvb3Q6IFJPT1QsXG4gIHNsaWRlcjogUk9PVCArIFwiX19zbGlkZXJcIixcbiAgdHJhY2s6IFJPT1QgKyBcIl9fdHJhY2tcIixcbiAgbGlzdDogUk9PVCArIFwiX19saXN0XCIsXG4gIHNsaWRlOiBST09UICsgXCJfX3NsaWRlXCIsXG4gIGNvbnRhaW5lcjogUk9PVCArIFwiX19zbGlkZV9fY29udGFpbmVyXCIsXG4gIGFycm93czogUk9PVCArIFwiX19hcnJvd3NcIixcbiAgYXJyb3c6IFJPT1QgKyBcIl9fYXJyb3dcIixcbiAgcHJldjogUk9PVCArIFwiX19hcnJvdy0tcHJldlwiLFxuICBuZXh0OiBST09UICsgXCJfX2Fycm93LS1uZXh0XCIsXG4gIHBhZ2luYXRpb246IFJPT1QgKyBcIl9fcGFnaW5hdGlvblwiLFxuICBwYWdlOiBST09UICsgXCJfX3BhZ2luYXRpb25fX3BhZ2VcIixcbiAgY2xvbmU6IFJPT1QgKyBcIl9fc2xpZGUtLWNsb25lXCIsXG4gIHByb2dyZXNzOiBST09UICsgXCJfX3Byb2dyZXNzXCIsXG4gIGJhcjogUk9PVCArIFwiX19wcm9ncmVzc19fYmFyXCIsXG4gIGF1dG9wbGF5OiBST09UICsgXCJfX2F1dG9wbGF5XCIsXG4gIHBsYXk6IFJPT1QgKyBcIl9fcGxheVwiLFxuICBwYXVzZTogUk9PVCArIFwiX19wYXVzZVwiLFxuICBzcGlubmVyOiBST09UICsgXCJfX3NwaW5uZXJcIixcbiAgc3I6IFJPT1QgKyBcIl9fc3JcIlxufTtcbi8qKlxyXG4gKiBEZWZpbml0aW9ucyBvZiBzdGF0dXMgY2xhc3Nlcy5cclxuICpcclxuICogQHR5cGUge09iamVjdH1cclxuICovXG5cbnZhciBTVEFUVVNfQ0xBU1NFUyA9IHtcbiAgYWN0aXZlOiAnaXMtYWN0aXZlJyxcbiAgdmlzaWJsZTogJ2lzLXZpc2libGUnLFxuICBsb2FkaW5nOiAnaXMtbG9hZGluZydcbn07XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29uc3RhbnRzL2kxOG4uanNcbi8qKlxyXG4gKiBFeHBvcnQgaTE4biB0ZXh0cyBhcyBvYmplY3QuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuLyoqXHJcbiAqIFRleHRzIGZvciBpMThuLlxyXG4gKlxyXG4gKiBAdHlwZSB7T2JqZWN0fVxyXG4gKi9cbnZhciBJMThOID0ge1xuICBwcmV2OiAnUHJldmlvdXMgc2xpZGUnLFxuICBuZXh0OiAnTmV4dCBzbGlkZScsXG4gIGZpcnN0OiAnR28gdG8gZmlyc3Qgc2xpZGUnLFxuICBsYXN0OiAnR28gdG8gbGFzdCBzbGlkZScsXG4gIHNsaWRlWDogJ0dvIHRvIHNsaWRlICVzJyxcbiAgcGFnZVg6ICdHbyB0byBwYWdlICVzJyxcbiAgcGxheTogJ1N0YXJ0IGF1dG9wbGF5JyxcbiAgcGF1c2U6ICdQYXVzZSBhdXRvcGxheSdcbn07XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29uc3RhbnRzL2RlZmF1bHRzLmpzXG4vKipcclxuICogRXhwb3J0IGRlZmF1bHQgb3B0aW9ucy5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cbnZhciBERUZBVUxUUyA9IHtcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lIGEgc2xpZGVyIHR5cGUuXHJcbiAgICogLSAnc2xpZGUnOiBSZWd1bGFyIHNsaWRlci5cclxuICAgKiAtICdsb29wJyA6IENhcm91c2VsIHNsaWRlci5cclxuICAgKiAtICdmYWRlJyA6IENoYW5nZSBzbGlkZXMgd2l0aCBmYWRlIHRyYW5zaXRpb24uIHBlclBhZ2UsIGRyYWcgb3B0aW9ucyBhcmUgaWdub3JlZC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICovXG4gIHR5cGU6ICdzbGlkZScsXG5cbiAgLyoqXHJcbiAgICogV2hldGhlciB0byByZXdpbmQgYSBzbGlkZXIgYmVmb3JlIHRoZSBmaXJzdCBzbGlkZSBvciBhZnRlciB0aGUgbGFzdCBvbmUuXHJcbiAgICogSW4gXCJsb29wXCIgbW9kZSwgdGhpcyBvcHRpb24gaXMgaWdub3JlZC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICByZXdpbmQ6IGZhbHNlLFxuXG4gIC8qKlxyXG4gICAqIFRyYW5zaXRpb24gc3BlZWQgaW4gbWlsbGlzZWNvbmRzLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cbiAgc3BlZWQ6IDQwMCxcblxuICAvKipcclxuICAgKiBUcmFuc2l0aW9uIHNwZWVkIG9uIHJld2luZCBpbiBtaWxsaXNlY29uZHMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuICByZXdpbmRTcGVlZDogMCxcblxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIHByZXZlbnQgYW55IGFjdGlvbnMgd2hpbGUgYSBzbGlkZXIgaXMgdHJhbnNpdGlvbmluZy5cclxuICAgKiBJZiBmYWxzZSwgbmF2aWdhdGlvbiwgZHJhZyBhbmQgc3dpcGUgd29yayB3aGlsZSB0aGUgc2xpZGVyIGlzIHJ1bm5pbmcuXHJcbiAgICogRXZlbiBzbywgaXQgd2lsbCBiZSBmb3JjZWQgdG8gd2FpdCBmb3IgdHJhbnNpdGlvbiBpbiBzb21lIGNhc2VzIGluIHRoZSBsb29wIG1vZGUgdG8gc2hpZnQgYSBzbGlkZXIuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cbiAgd2FpdEZvclRyYW5zaXRpb246IHRydWUsXG5cbiAgLyoqXHJcbiAgICogRGVmaW5lIHNsaWRlciBtYXggd2lkdGguXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuICB3aWR0aDogMCxcblxuICAvKipcclxuICAgKiBEZWZpbmUgc2xpZGVyIGhlaWdodC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXG4gIGhlaWdodDogMCxcblxuICAvKipcclxuICAgKiBGaXggd2lkdGggb2Ygc2xpZGVzLiBDU1MgZm9ybWF0IGlzIGFsbG93ZWQgc3VjaCBhcyAxMGVtLCA4MCUgb3IgODB2dy5cclxuICAgKiBwZXJQYWdlIG51bWJlciB3aWxsIGJlIGlnbm9yZWQgd2hlbiB0aGlzIG9wdGlvbiBpcyBmYWxzeS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ8c3RyaW5nfVxyXG4gICAqL1xuICBmaXhlZFdpZHRoOiAwLFxuXG4gIC8qKlxyXG4gICAqIEZpeCBoZWlnaHQgb2Ygc2xpZGVzLiBDU1MgZm9ybWF0IGlzIGFsbG93ZWQgc3VjaCBhcyAxMGVtLCA4MHZoIGJ1dCAlIHVuaXQgaXMgbm90IGFjY2VwdGVkLlxyXG4gICAqIGhlaWdodFJhdGlvIG9wdGlvbiB3aWxsIGJlIGlnbm9yZWQgd2hlbiB0aGlzIG9wdGlvbiBpcyBmYWxzeS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ8c3RyaW5nfVxyXG4gICAqL1xuICBmaXhlZEhlaWdodDogMCxcblxuICAvKipcclxuICAgKiBEZXRlcm1pbmUgaGVpZ2h0IG9mIHNsaWRlcyBieSByYXRpbyB0byBhIHNsaWRlciB3aWR0aC5cclxuICAgKiBUaGlzIHdpbGwgYmUgaWdub3JlZCB3aGVuIHRoZSBmaXhlZEhlaWdodCBpcyBwcm92aWRlZC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXG4gIGhlaWdodFJhdGlvOiAwLFxuXG4gIC8qKlxyXG4gICAqIElmIHRydWUsIHNsaWRlIHdpZHRoIHdpbGwgYmUgZGV0ZXJtaW5lZCBieSB0aGUgZWxlbWVudCB3aWR0aCBpdHNlbGYuXHJcbiAgICogLSBwZXJQYWdlL3Blck1vdmUgc2hvdWxkIGJlIDEuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cbiAgYXV0b1dpZHRoOiBmYWxzZSxcblxuICAvKipcclxuICAgKiBJZiB0cnVlLCBzbGlkZSBoZWlnaHQgd2lsbCBiZSBkZXRlcm1pbmVkIGJ5IHRoZSBlbGVtZW50IHdpZHRoIGl0c2VsZi5cclxuICAgKiAtIHBlclBhZ2UvcGVyTW92ZSBzaG91bGQgYmUgMS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICBhdXRvSGVpZ2h0OiBmYWxzZSxcblxuICAvKipcclxuICAgKiBEZXRlcm1pbmUgaG93IG1hbnkgc2xpZGVzIHNob3VsZCBiZSBkaXNwbGF5ZWQgcGVyIHBhZ2UuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuICBwZXJQYWdlOiAxLFxuXG4gIC8qKlxyXG4gICAqIERldGVybWluZSBob3cgbWFueSBzbGlkZXMgc2hvdWxkIGJlIG1vdmVkIHdoZW4gYSBzbGlkZXIgZ29lcyB0byBuZXh0IG9yIHBlcnYuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuICBwZXJNb3ZlOiAwLFxuXG4gIC8qKlxyXG4gICAqIERldGVybWluZSBtYW51YWxseSBob3cgbWFueSBjbG9uZXMgc2hvdWxkIGJlIGdlbmVyYXRlZCBvbiB0aGUgbGVmdCBhbmQgcmlnaHQgc2lkZS5cclxuICAgKiBUaGUgdG90YWwgbnVtYmVyIG9mIGNsb25lcyB3aWxsIGJlIHR3aWNlIG9mIHRoaXMgbnVtYmVyLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cbiAgY2xvbmVzOiAwLFxuXG4gIC8qKlxyXG4gICAqIFN0YXJ0IGluZGV4LlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cbiAgc3RhcnQ6IDAsXG5cbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lIHdoaWNoIHNsaWRlIHNob3VsZCBiZSBmb2N1c2VkIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSBzbGlkZXMgaW4gYSBwYWdlLlxyXG4gICAqIEEgc3RyaW5nIFwiY2VudGVyXCIgaXMgYWNjZXB0YWJsZSBmb3IgY2VudGVyaW5nIHNsaWRlcy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufG51bWJlcnxzdHJpbmd9XHJcbiAgICovXG4gIGZvY3VzOiBmYWxzZSxcblxuICAvKipcclxuICAgKiBHYXAgYmV0d2VlbiBzbGlkZXMuIENTUyBmb3JtYXQgaXMgYWxsb3dlZCBzdWNoIGFzIDFlbS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ8c3RyaW5nfVxyXG4gICAqL1xuICBnYXA6IDAsXG5cbiAgLyoqXHJcbiAgICogU2V0IHBhZGRpbmctbGVmdC9yaWdodCBpbiBob3Jpem9udGFsIG1vZGUgb3IgcGFkZGluZy10b3AvYm90dG9tIGluIHZlcnRpY2FsIG9uZS5cclxuICAgKiBHaXZlIGEgc2luZ2xlIHZhbHVlIHRvIHNldCBhIHNhbWUgc2l6ZSBmb3IgYm90aCBzaWRlcyBvclxyXG4gICAqIGRvIGFuIG9iamVjdCBmb3IgZGlmZmVyZW50IHNpemVzLlxyXG4gICAqIEFsc28sIENTUyBmb3JtYXQgaXMgYWxsb3dlZCBzdWNoIGFzIDFlbS5cclxuICAgKlxyXG4gICAqIEBleGFtcGxlXHJcbiAgICogLSAxMDogTnVtYmVyXHJcbiAgICogLSAnMWVtJzogQ1NTIGZvcm1hdC5cclxuICAgKiAtIHsgbGVmdDogMCwgcmlnaHQ6IDIwIH06IE9iamVjdCBmb3IgZGlmZmVyZW50IHNpemVzIGluIGhvcml6b250YWwgbW9kZS5cclxuICAgKiAtIHsgdG9wOiAwLCBib3R0b206IDIwIH06IE9iamVjdCBmb3IgZGlmZmVyZW50IHNpemVzIGluIHZlcnRpY2FsIG1vZGUuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfHN0cmluZ3xPYmplY3R9XHJcbiAgICovXG4gIHBhZGRpbmc6IDAsXG5cbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBhcHBlbmQgYXJyb3dzLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIGFycm93czogdHJ1ZSxcblxuICAvKipcclxuICAgKiBDaGFuZ2UgdGhlIGFycm93IFNWRyBwYXRoIGxpa2UgJ203LjYxIDAuODA3LTIuMTIuLi4nLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cbiAgYXJyb3dQYXRoOiAnJyxcblxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIGFwcGVuZCBwYWdpbmF0aW9uKGluZGljYXRvciBkb3RzKSBvciBub3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cbiAgcGFnaW5hdGlvbjogdHJ1ZSxcblxuICAvKipcclxuICAgKiBBY3RpdmF0ZSBhdXRvcGxheS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICBhdXRvcGxheTogZmFsc2UsXG5cbiAgLyoqXHJcbiAgICogQXV0b3BsYXkgaW50ZXJ2YWwgaW4gbWlsbGlzZWNvbmRzLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cbiAgaW50ZXJ2YWw6IDUwMDAsXG5cbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBzdG9wIGF1dG9wbGF5IHdoZW4gYSBzbGlkZXIgaXMgaG92ZXJlZC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICBwYXVzZU9uSG92ZXI6IHRydWUsXG5cbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBzdG9wIGF1dG9wbGF5IHdoZW4gYSBzbGlkZXIgZWxlbWVudHMgYXJlIGZvY3VzZWQuXHJcbiAgICogVHJ1ZSBpcyByZWNvbW1lbmRlZCBmb3IgYWNjZXNzaWJpbGl0eS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICBwYXVzZU9uRm9jdXM6IHRydWUsXG5cbiAgLyoqXHJcbiAgICogV2hldGhlciB0byByZXNldCBwcm9ncmVzcyBvZiB0aGUgYXV0b3BsYXkgdGltZXIgd2hlbiByZXN1bWVkLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIHJlc2V0UHJvZ3Jlc3M6IHRydWUsXG5cbiAgLyoqXHJcbiAgICogTG9hZGluZyBpbWFnZXMgbGF6aWx5LlxyXG4gICAqIEltYWdlIHNyYyBtdXN0IGJlIHByb3ZpZGVkIGJ5IGEgZGF0YS1zcGxpZGUtbGF6eSBhdHRyaWJ1dGUuXHJcbiAgICpcclxuICAgKiAtIGZhbHNlOiBEbyBub3RoaW5nLlxyXG4gICAqIC0gJ25lYXJieSc6IE9ubHkgaW1hZ2VzIGFyb3VuZCBhbiBhY3RpdmUgc2xpZGUgd2lsbCBiZSBsb2FkZWQuXHJcbiAgICogLSAnc2VxdWVudGlhbCc6IEFsbCBpbWFnZXMgd2lsbCBiZSBzZXF1ZW50aWFsbHkgbG9hZGVkLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW58c3RyaW5nfVxyXG4gICAqL1xuICBsYXp5TG9hZDogZmFsc2UsXG5cbiAgLyoqXHJcbiAgICogVGhpcyBvcHRpb24gd29ya3Mgb25seSB3aGVuIGEgbGF6eUxvYWQgb3B0aW9uIGlzIFwibmVhcmJ5XCIuXHJcbiAgICogRGV0ZXJtaW5lIGhvdyBtYW55IHBhZ2VzKG5vdCBzbGlkZXMpIGFyb3VuZCBhbiBhY3RpdmUgc2xpZGUgc2hvdWxkIGJlIGxvYWRlZCBiZWZvcmVoYW5kLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cbiAgcHJlbG9hZFBhZ2VzOiAxLFxuXG4gIC8qKlxyXG4gICAqIEVhc2luZyBmb3IgQ1NTIHRyYW5zaXRpb24uIEZvciBleGFtcGxlLCBsaW5lYXIsIGVhc2Ugb3IgY3ViaWMtYmV6aWVyKCkuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqL1xuICBlYXNpbmc6ICdjdWJpYy1iZXppZXIoLjQyLC42NSwuMjcsLjk5KScsXG5cbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBlbmFibGUga2V5Ym9hcmQgc2hvcnRjdXRzXHJcbiAgICogLSB0cnVlIG9yICdnbG9iYWwnOiBMaXN0ZW4gdG8ga2V5ZG93biBldmVudCBvZiB0aGUgZG9jdW1lbnQuXHJcbiAgICogLSAnZm9jdXNlZCc6IExpc3RlbiB0byB0aGUga2V5ZG93biBldmVudCBvZiB0aGUgc2xpZGVyIHJvb3QgZWxlbWVudC4gdGFiaW5kZXg9XCIwXCIgd2lsbCBiZSBhZGRlZCB0byB0aGUgZWxlbWVudC5cclxuICAgKiAtIGZhbHNlOiBEaXNhYmxlIGtleWJvYXJkIHNob3J0Y3V0cy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufHN0cmluZ31cclxuICAgKi9cbiAga2V5Ym9hcmQ6ICdnbG9iYWwnLFxuXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gYWxsb3cgbW91c2UgZHJhZyBhbmQgdG91Y2ggc3dpcGUuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cbiAgZHJhZzogdHJ1ZSxcblxuICAvKipcclxuICAgKiBUaGUgYW5nbGUgdGhyZXNob2xkIGZvciBkcmFnLlxyXG4gICAqIFRoZSBzbGlkZXIgc3RhcnRzIG1vdmluZyBvbmx5IHdoZW4gdGhlIGRyYWcgYW5nbGUgaXMgbGVzcyB0aGFuIHRoaXMgdGhyZXNob2xkLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cbiAgZHJhZ0FuZ2xlVGhyZXNob2xkOiAzMCxcblxuICAvKipcclxuICAgKiBEaXN0YW5jZSB0aHJlc2hvbGQgZm9yIGRldGVybWluaW5nIGlmIHRoZSBhY3Rpb24gaXMgXCJmbGlja1wiIG9yIFwic3dpcGVcIi5cclxuICAgKiBXaGVuIGEgZHJhZyBkaXN0YW5jZSBpcyBvdmVyIHRoaXMgdmFsdWUsIHRoZSBhY3Rpb24gd2lsbCBiZSB0cmVhdGVkIGFzIFwic3dpcGVcIiwgbm90IFwiZmxpY2tcIi5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXG4gIHN3aXBlRGlzdGFuY2VUaHJlc2hvbGQ6IDE1MCxcblxuICAvKipcclxuICAgKiBWZWxvY2l0eSB0aHJlc2hvbGQgZm9yIGRldGVybWluaW5nIGlmIHRoZSBhY3Rpb24gaXMgXCJmbGlja1wiIG9yIFwic3dpcGVcIi5cclxuICAgKiBBcm91bmQgMC41IGlzIHJlY29tbWVuZGVkLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cbiAgZmxpY2tWZWxvY2l0eVRocmVzaG9sZDogLjYsXG5cbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lIHBvd2VyIG9mIGZsaWNrLiBUaGUgbGFyZ2VyIG51bWJlciB0aGlzIGlzLCB0aGUgZmFydGhlciBhIHNsaWRlciBydW5zIGJ5IGZsaWNrLlxyXG4gICAqIEFyb3VuZCA1MDAgaXMgcmVjb21tZW5kZWQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuICBmbGlja1Bvd2VyOiA2MDAsXG5cbiAgLyoqXHJcbiAgICogTGltaXQgYSBudW1iZXIgb2YgcGFnZXMgdG8gbW92ZSBieSBmbGljay5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXG4gIGZsaWNrTWF4UGFnZXM6IDEsXG5cbiAgLyoqXHJcbiAgICogU2xpZGVyIGRpcmVjdGlvbi5cclxuICAgKiAtICdsdHInOiBMZWZ0IHRvIHJpZ2h0LlxyXG4gICAqIC0gJ3J0bCc6IFJpZ2h0IHRvIGxlZnQuXHJcbiAgICogLSAndHRiJzogVG9wIHRvIGJvdHRvbS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICovXG4gIGRpcmVjdGlvbjogJ2x0cicsXG5cbiAgLyoqXHJcbiAgICogU2V0IGltZyBzcmMgdG8gYmFja2dyb3VuZC1pbWFnZSBvZiBpdHMgcGFyZW50IGVsZW1lbnQuXHJcbiAgICogSW1hZ2VzIHdpdGggdmFyaW91cyBzaXplcyBjYW4gYmUgZGlzcGxheWVkIGFzIHNhbWUgZGltZW5zaW9uIHdpdGhvdXQgY3JvcHBpbmcgd29yay5cclxuICAgKiBmaXhlZEhlaWdodCBvciBoZWlnaHRSYXRpbyBpcyByZXF1aXJlZC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICBjb3ZlcjogZmFsc2UsXG5cbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBlbmFibGUgYWNjZXNzaWJpbGl0eShhcmlhIGFuZCBzY3JlZW4gcmVhZGVyIHRleHRzKSBvciBub3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cbiAgYWNjZXNzaWJpbGl0eTogdHJ1ZSxcblxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIGFkZCB0YWJpbmRleD1cIjBcIiB0byB2aXNpYmxlIHNsaWRlcyBvciBub3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cbiAgc2xpZGVGb2N1czogdHJ1ZSxcblxuICAvKipcclxuICAgKiBEZXRlcm1pbmUgaWYgYSBzbGlkZXIgaXMgbmF2aWdhdGlvbiBmb3IgYW5vdGhlci5cclxuICAgKiBVc2UgXCJzeW5jXCIgQVBJIHRvIHN5bmNocm9uaXplIHR3byBzbGlkZXJzLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIGlzTmF2aWdhdGlvbjogZmFsc2UsXG5cbiAgLyoqXHJcbiAgICogV2hldGhlciB0byB0cmltIHNwYWNlcyBiZWZvcmUgdGhlIGZpc3Qgc2xpZGUgb3IgYWZ0ZXIgdGhlIGxhc3Qgb25lIHdoZW4gXCJmb2N1c1wiIGlzIG5vdCAwLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIHRyaW1TcGFjZTogdHJ1ZSxcblxuICAvKipcclxuICAgKiBUaGUgXCJpcy1hY3RpdmVcIiBjbGFzcyBpcyBhZGRlZCBhZnRlciB0cmFuc2l0aW9uIGFzIGRlZmF1bHQuXHJcbiAgICogSWYgdHJ1ZSwgaXQgd2lsbCBiZSBhZGRlZCBiZWZvcmUgbW92ZS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICB1cGRhdGVPbk1vdmU6IGZhbHNlLFxuXG4gIC8qKlxyXG4gICAqIFRocm90dGxlIGR1cmF0aW9uIGluIG1pbGxpc2Vjb25kcyBmb3IgdGhlIHJlc2l6ZSBldmVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXG4gIHRocm90dGxlOiAxMDAsXG5cbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBkZXN0cm95IGEgc2xpZGVyIG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICBkZXN0cm95OiBmYWxzZSxcblxuICAvKipcclxuICAgKiBPcHRpb25zIGZvciBzcGVjaWZpYyBicmVha3BvaW50cy5cclxuICAgKlxyXG4gICAqIEBleGFtcGxlXHJcbiAgICoge1xyXG4gICAqICAgMTAwMDoge1xyXG4gICAqICAgICBwZXJQYWdlOiAzLFxyXG4gICAqICAgICBnYXA6IDIwXHJcbiAgICogICB9LFxyXG4gICAqICAgNjAwOiB7XHJcbiAgICogICAgIHBlclBhZ2U6IDEsXHJcbiAgICogICAgIGdhcDogNSxcclxuICAgKiAgIH1cclxuICAgKiB9XHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbnxPYmplY3R9XHJcbiAgICovXG4gIGJyZWFrcG9pbnRzOiBmYWxzZSxcblxuICAvKipcclxuICAgKiBDb2xsZWN0aW9uIG9mIGNsYXNzIG5hbWVzLlxyXG4gICAqXHJcbiAgICogQHNlZSAuL2NsYXNzZXMuanNcclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG4gIGNsYXNzZXM6IEVMRU1FTlRfQ0xBU1NFUyxcblxuICAvKipcclxuICAgKiBDb2xsZWN0aW9uIG9mIGkxOG4gdGV4dHMuXHJcbiAgICpcclxuICAgKiBAc2VlIC4vaTE4bi5qc1xyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cbiAgaTE4bjogSTE4TlxufTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb25zdGFudHMvc3RhdGVzLmpzXG4vKipcclxuICogRXhwb3J0IHN0YXRlIGNvbnN0YW50cy5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG4vKipcclxuICogU3BsaWRlIGhhcyBiZWVuIGp1c3QgY3JlYXRlZC5cclxuICpcclxuICogQHR5cGUge251bWJlcn1cclxuICovXG52YXIgQ1JFQVRFRCA9IDE7XG4vKipcclxuICogQWxsIGNvbXBvbmVudHMgaGF2ZSBiZWVuIG1vdW50ZWQgYW5kIGluaXRpYWxpemVkLlxyXG4gKlxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKi9cblxudmFyIE1PVU5URUQgPSAyO1xuLyoqXHJcbiAqIFNwbGlkZSBpcyByZWFkeSBmb3IgdHJhbnNpdGlvbi5cclxuICpcclxuICogQHR5cGUge251bWJlcn1cclxuICovXG5cbnZhciBJRExFID0gMztcbi8qKlxyXG4gKiBTcGxpZGUgaXMgbW92aW5nLlxyXG4gKlxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKi9cblxudmFyIE1PVklORyA9IDQ7XG4vKipcclxuICogU3BsaWRlIGlzIG1vdmluZy5cclxuICpcclxuICogQHR5cGUge251bWJlcn1cclxuICovXG5cbnZhciBERVNUUk9ZRUQgPSA1O1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL3NwbGlkZS5qc1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG4vKipcclxuICogVGhlIG1haW4gY2xhc3MgZm9yIGFwcGx5aW5nIFNwbGlkZSB0byBhbiBlbGVtZW50LlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuXG5cblxuXG5cblxuLyoqXHJcbiAqIFRoZSBtYWluIGNsYXNzIGZvciBhcHBseWluZyBTcGxpZGUgdG8gYW4gZWxlbWVudCxcclxuICogcHJvdmlkaW5nIHNvbWUgQVBJcyB0byBjb250cm9sIHRoZSBiZWhhdmlvci5cclxuICovXG5cbnZhciBTcGxpZGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKipcclxuICAgKiBTcGxpZGUgY29uc3RydWN0b3IuXHJcbiAgICpcclxuICAgKiBAdGhyb3dzIHtFcnJvcn0gV2hlbiB0aGUgZ2l2ZW4gcm9vdCBlbGVtZW50IG9yIHNlbGVjdG9yIGlzIGludmFsaWQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0VsZW1lbnR8c3RyaW5nfSAgcm9vdCAgICAgICAtIEEgc2VsZWN0b3IgZm9yIGEgcm9vdCBlbGVtZW50IG9yIGFuIGVsZW1lbnQgaXRzZWxmLlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAgICAgICAgICBvcHRpb25zICAgIC0gT3B0aW9uYWwuIE9wdGlvbnMgdG8gY2hhbmdlIGRlZmF1bHQgYmVoYXZpb3VyLlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAgICAgICAgICBDb21wb25lbnRzIC0gT3B0aW9uYWwuIENvbXBvbmVudHMuXHJcbiAgICovXG4gIGZ1bmN0aW9uIFNwbGlkZShyb290LCBvcHRpb25zLCBDb21wb25lbnRzKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIGlmIChDb21wb25lbnRzID09PSB2b2lkIDApIHtcbiAgICAgIENvbXBvbmVudHMgPSB7fTtcbiAgICB9XG5cbiAgICB0aGlzLnJvb3QgPSByb290IGluc3RhbmNlb2YgRWxlbWVudCA/IHJvb3QgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJvb3QpO1xuICAgIGV4aXN0KHRoaXMucm9vdCwgJ0FuIGludmFsaWQgZWxlbWVudC9zZWxlY3RvciB3YXMgZ2l2ZW4uJyk7XG4gICAgdGhpcy5Db21wb25lbnRzID0gbnVsbDtcbiAgICB0aGlzLkV2ZW50ID0gY29yZV9ldmVudCgpO1xuICAgIHRoaXMuU3RhdGUgPSBzdGF0ZShDUkVBVEVEKTtcbiAgICB0aGlzLlNUQVRFUyA9IHN0YXRlc19uYW1lc3BhY2VPYmplY3Q7XG4gICAgdGhpcy5fbyA9IG1lcmdlKERFRkFVTFRTLCBvcHRpb25zKTtcbiAgICB0aGlzLl9pID0gMDtcbiAgICB0aGlzLl9jID0gQ29tcG9uZW50cztcbiAgICB0aGlzLl9lID0ge307IC8vIEV4dGVuc2lvbnNcblxuICAgIHRoaXMuX3QgPSBudWxsOyAvLyBUcmFuc2l0aW9uXG4gIH1cbiAgLyoqXHJcbiAgICogQ29tcG9zZSBhbmQgbW91bnQgY29tcG9uZW50cy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAgIEV4dGVuc2lvbnMgLSBPcHRpb25hbC4gQWRkaXRpb25hbCBjb21wb25lbnRzLlxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFRyYW5zaXRpb24gLSBPcHRpb25hbC4gU2V0IGEgY3VzdG9tIHRyYW5zaXRpb24gY29tcG9uZW50LlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7U3BsaWRlfHVuZGVmaW5lZH0gLSBUaGlzIGluc3RhbmNlIG9yIHVuZGVmaW5lZCBpZiBhbiBleGNlcHRpb24gb2NjdXJyZWQuXHJcbiAgICovXG5cblxuICB2YXIgX3Byb3RvID0gU3BsaWRlLnByb3RvdHlwZTtcblxuICBfcHJvdG8ubW91bnQgPSBmdW5jdGlvbiBtb3VudChFeHRlbnNpb25zLCBUcmFuc2l0aW9uKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmIChFeHRlbnNpb25zID09PSB2b2lkIDApIHtcbiAgICAgIEV4dGVuc2lvbnMgPSB0aGlzLl9lO1xuICAgIH1cblxuICAgIGlmIChUcmFuc2l0aW9uID09PSB2b2lkIDApIHtcbiAgICAgIFRyYW5zaXRpb24gPSB0aGlzLl90O1xuICAgIH1cblxuICAgIC8vIFJlc2V0IHRoZSBzdGF0ZS5cbiAgICB0aGlzLlN0YXRlLnNldChDUkVBVEVEKTtcbiAgICB0aGlzLl9lID0gRXh0ZW5zaW9ucztcbiAgICB0aGlzLl90ID0gVHJhbnNpdGlvbjtcbiAgICB0aGlzLkNvbXBvbmVudHMgPSBjb21wb3NlKHRoaXMsIG1lcmdlKHRoaXMuX2MsIEV4dGVuc2lvbnMpLCBUcmFuc2l0aW9uKTtcblxuICAgIHRyeSB7XG4gICAgICBlYWNoKHRoaXMuQ29tcG9uZW50cywgZnVuY3Rpb24gKGNvbXBvbmVudCwga2V5KSB7XG4gICAgICAgIHZhciByZXF1aXJlZCA9IGNvbXBvbmVudC5yZXF1aXJlZDtcblxuICAgICAgICBpZiAocmVxdWlyZWQgPT09IHVuZGVmaW5lZCB8fCByZXF1aXJlZCkge1xuICAgICAgICAgIGNvbXBvbmVudC5tb3VudCAmJiBjb21wb25lbnQubW91bnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgX3RoaXMuQ29tcG9uZW50c1trZXldO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlcnJvcihlLm1lc3NhZ2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBTdGF0ZSA9IHRoaXMuU3RhdGU7XG4gICAgU3RhdGUuc2V0KE1PVU5URUQpO1xuICAgIGVhY2godGhpcy5Db21wb25lbnRzLCBmdW5jdGlvbiAoY29tcG9uZW50KSB7XG4gICAgICBjb21wb25lbnQubW91bnRlZCAmJiBjb21wb25lbnQubW91bnRlZCgpO1xuICAgIH0pO1xuICAgIHRoaXMuZW1pdCgnbW91bnRlZCcpO1xuICAgIFN0YXRlLnNldChJRExFKTtcbiAgICB0aGlzLmVtaXQoJ3JlYWR5Jyk7XG4gICAgYXBwbHlTdHlsZSh0aGlzLnJvb3QsIHtcbiAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJ1xuICAgIH0pO1xuICAgIHRoaXMub24oJ21vdmUgZHJhZycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBTdGF0ZS5zZXQoTU9WSU5HKTtcbiAgICB9KS5vbignbW92ZWQgZHJhZ2dlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBTdGF0ZS5zZXQoSURMRSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXHJcbiAgICogU2V0IHN5bmMgdGFyZ2V0LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTcGxpZGV9IHNwbGlkZSAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7U3BsaWRlfSAtIFRoaXMgaW5zdGFuY2UuXHJcbiAgICovXG4gIDtcblxuICBfcHJvdG8uc3luYyA9IGZ1bmN0aW9uIHN5bmMoc3BsaWRlKSB7XG4gICAgdGhpcy5zaWJsaW5nID0gc3BsaWRlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVyIGNhbGxiYWNrIGZpcmVkIG9uIHRoZSBnaXZlbiBldmVudChzKS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgIGV2ZW50cyAgLSBBbiBldmVudCBuYW1lLiBVc2Ugc3BhY2UgdG8gc2VwYXJhdGUgbXVsdGlwbGUgZXZlbnRzLlxyXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbHNvLCBuYW1lc3BhY2UgaXMgYWNjZXB0ZWQgYnkgZG90LCBzdWNoIGFzICdyZXNpemUue25hbWVzcGFjZX0nLlxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXIgLSBBIGNhbGxiYWNrIGZ1bmN0aW9uLlxyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gIGVsbSAgICAgLSBPcHRpb25hbC4gTmF0aXZlIGV2ZW50IHdpbGwgYmUgbGlzdGVuZWQgdG8gd2hlbiB0aGlzIGFyZyBpcyBwcm92aWRlZC5cclxuICAgKiBAcGFyYW0ge09iamVjdH0gICBvcHRpb25zIC0gT3B0aW9uYWwuIE9wdGlvbnMgZm9yIGFkZEV2ZW50TGlzdGVuZXIuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtTcGxpZGV9IC0gVGhpcyBpbnN0YW5jZS5cclxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5vbiA9IGZ1bmN0aW9uIG9uKGV2ZW50cywgaGFuZGxlciwgZWxtLCBvcHRpb25zKSB7XG4gICAgaWYgKGVsbSA9PT0gdm9pZCAwKSB7XG4gICAgICBlbG0gPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICB0aGlzLkV2ZW50Lm9uKGV2ZW50cywgaGFuZGxlciwgZWxtLCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcclxuICAgKiBVbnN1YnNjcmliZSB0aGUgZ2l2ZW4gZXZlbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gIGV2ZW50cyAtIEEgZXZlbnQgbmFtZS5cclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsbSAgICAtIE9wdGlvbmFsLiByZW1vdmVFdmVudExpc3RlbmVyKCkgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGlzIGFyZyBpcyBwcm92aWRlZC5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge1NwbGlkZX0gLSBUaGlzIGluc3RhbmNlLlxyXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLm9mZiA9IGZ1bmN0aW9uIG9mZihldmVudHMsIGVsbSkge1xuICAgIGlmIChlbG0gPT09IHZvaWQgMCkge1xuICAgICAgZWxtID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLkV2ZW50Lm9mZihldmVudHMsIGVsbSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXHJcbiAgICogRW1pdCBhbiBldmVudC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCAtIEFuIGV2ZW50IG5hbWUuXHJcbiAgICogQHBhcmFtIHsqfSAgICAgIGFyZ3MgIC0gQW55IG51bWJlciBvZiBhcmd1bWVudHMgcGFzc2VkIHRvIGhhbmRsZXJzLlxyXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmVtaXQgPSBmdW5jdGlvbiBlbWl0KGV2ZW50KSB7XG4gICAgdmFyIF90aGlzJEV2ZW50O1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgKF90aGlzJEV2ZW50ID0gdGhpcy5FdmVudCkuZW1pdC5hcHBseShfdGhpcyRFdmVudCwgW2V2ZW50XS5jb25jYXQoYXJncykpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXHJcbiAgICogR28gdG8gdGhlIHNsaWRlIHNwZWNpZmllZCBieSB0aGUgZ2l2ZW4gY29udHJvbC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gY29udHJvbCAtIEEgY29udHJvbCBwYXR0ZXJuLlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gICAgICAgd2FpdCAgICAtIE9wdGlvbmFsLiBXaGV0aGVyIHRvIHdhaXQgZm9yIHRyYW5zaXRpb24uXHJcbiAgICovXG4gIDtcblxuICBfcHJvdG8uZ28gPSBmdW5jdGlvbiBnbyhjb250cm9sLCB3YWl0KSB7XG4gICAgaWYgKHdhaXQgPT09IHZvaWQgMCkge1xuICAgICAgd2FpdCA9IHRoaXMub3B0aW9ucy53YWl0Rm9yVHJhbnNpdGlvbjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5TdGF0ZS5pcyhJRExFKSB8fCB0aGlzLlN0YXRlLmlzKE1PVklORykgJiYgIXdhaXQpIHtcbiAgICAgIHRoaXMuQ29tcG9uZW50cy5Db250cm9sbGVyLmdvKGNvbnRyb2wsIGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcclxuICAgKiBWZXJpZnkgd2hldGhlciB0aGUgc2xpZGVyIHR5cGUgaXMgdGhlIGdpdmVuIG9uZSBvciBub3QuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIEEgc2xpZGVyIHR5cGUuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtib29sZWFufSAtIFRydWUgaWYgdGhlIHNsaWRlciB0eXBlIGlzIHRoZSBwcm92aWRlZCB0eXBlIG9yIGZhbHNlIGlmIG5vdC5cclxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5pcyA9IGZ1bmN0aW9uIGlzKHR5cGUpIHtcbiAgICByZXR1cm4gdHlwZSA9PT0gdGhpcy5fby50eXBlO1xuICB9XG4gIC8qKlxyXG4gICAqIEluc2VydCBhIHNsaWRlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtFbGVtZW50fHN0cmluZ30gc2xpZGUgLSBBIHNsaWRlIGVsZW1lbnQgdG8gYmUgYWRkZWQuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9ICAgICAgICAgaW5kZXggLSBBIHNsaWRlIHdpbGwgYmUgYWRkZWQgYXQgdGhlIHBvc2l0aW9uLlxyXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmFkZCA9IGZ1bmN0aW9uIGFkZChzbGlkZSwgaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPT09IHZvaWQgMCkge1xuICAgICAgaW5kZXggPSAtMTtcbiAgICB9XG5cbiAgICB0aGlzLkNvbXBvbmVudHMuRWxlbWVudHMuYWRkKHNsaWRlLCBpbmRleCwgdGhpcy5yZWZyZXNoLmJpbmQodGhpcykpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxyXG4gICAqIFJlbW92ZSB0aGUgc2xpZGUgZGVzaWduYXRlZCBieSB0aGUgaW5kZXguXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBBIHNsaWRlIGluZGV4LlxyXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShpbmRleCkge1xuICAgIHRoaXMuQ29tcG9uZW50cy5FbGVtZW50cy5yZW1vdmUoaW5kZXgpO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxyXG4gICAqIERlc3Ryb3kgYWxsIFNsaWRlIG9iamVjdHMgYW5kIGNsb25lcyBhbmQgcmVjcmVhdGUgdGhlbSBhZ2Fpbi5cclxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5yZWZyZXNoID0gZnVuY3Rpb24gcmVmcmVzaCgpIHtcbiAgICB0aGlzLmVtaXQoJ3JlZnJlc2g6YmVmb3JlJykuZW1pdCgncmVmcmVzaCcpLmVtaXQoJ3Jlc2l6ZScpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxyXG4gICAqIERlc3Ryb3kgdGhlIFNwbGlkZS5cclxuICAgKiBcIkNvbXBsZXRlbHlcIiBib29sZWFuIGlzIG1haW5seSBmb3IgYnJlYWtwb2ludHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNvbXBsZXRlbHkgLSBEZXN0cm95IGNvbXBsZXRlbHkuXHJcbiAgICovXG4gIDtcblxuICBfcHJvdG8uZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koY29tcGxldGVseSkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgaWYgKGNvbXBsZXRlbHkgPT09IHZvaWQgMCkge1xuICAgICAgY29tcGxldGVseSA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gUG9zdHBvbmUgZGVzdHJveSBiZWNhdXNlIGl0IHNob3VsZCBiZSBkb25lIGFmdGVyIG1vdW50LlxuICAgIGlmICh0aGlzLlN0YXRlLmlzKENSRUFURUQpKSB7XG4gICAgICB0aGlzLm9uKCdyZWFkeScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5kZXN0cm95KGNvbXBsZXRlbHkpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFsdWVzKHRoaXMuQ29tcG9uZW50cykucmV2ZXJzZSgpLmZvckVhY2goZnVuY3Rpb24gKGNvbXBvbmVudCkge1xuICAgICAgY29tcG9uZW50LmRlc3Ryb3kgJiYgY29tcG9uZW50LmRlc3Ryb3koY29tcGxldGVseSk7XG4gICAgfSk7XG4gICAgdGhpcy5lbWl0KCdkZXN0cm95JywgY29tcGxldGVseSk7IC8vIERlc3Ryb3kgYWxsIGV2ZW50IGhhbmRsZXJzLCBpbmNsdWRpbmcgb25lcyBmb3IgbmF0aXZlIGV2ZW50cy5cblxuICAgIHRoaXMuRXZlbnQuZGVzdHJveSgpO1xuICAgIHRoaXMuU3RhdGUuc2V0KERFU1RST1lFRCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXHJcbiAgICogUmV0dXJuIHRoZSBjdXJyZW50IHNsaWRlIGluZGV4LlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7bnVtYmVyfSAtIFRoZSBjdXJyZW50IHNsaWRlIGluZGV4LlxyXG4gICAvLyAqL1xuICA7XG5cbiAgX2NyZWF0ZUNsYXNzKFNwbGlkZSwgW3tcbiAgICBrZXk6IFwiaW5kZXhcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgY3VycmVudCBzbGlkZSBpbmRleC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IGluZGV4IC0gQSBuZXcgaW5kZXguXHJcbiAgICAgKi9cbiAgICAsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoaW5kZXgpIHtcbiAgICAgIHRoaXMuX2kgPSBwYXJzZUludChpbmRleCk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIGxlbmd0aCBvZiBzbGlkZXMuXHJcbiAgICAgKiBUaGlzIGlzIGFuIGFsaWFzIG9mIEVsZW1lbnRzLmxlbmd0aC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gQSBudW1iZXIgb2Ygc2xpZGVzLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJsZW5ndGhcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLkNvbXBvbmVudHMuRWxlbWVudHMubGVuZ3RoO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFJldHVybiBvcHRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge09iamVjdH0gLSBPcHRpb25zIG9iamVjdC5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib3B0aW9uc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX287XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogU2V0IG9wdGlvbnMgd2l0aCBtZXJnaW5nIHRoZSBnaXZlbiBvYmplY3QgdG8gdGhlIGN1cnJlbnQgb25lLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gTmV3IG9wdGlvbnMuXHJcbiAgICAgKi9cbiAgICAsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQob3B0aW9ucykge1xuICAgICAgdmFyIGNyZWF0ZWQgPSB0aGlzLlN0YXRlLmlzKENSRUFURUQpO1xuXG4gICAgICBpZiAoIWNyZWF0ZWQpIHtcbiAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fbyA9IG1lcmdlKHRoaXMuX28sIG9wdGlvbnMpO1xuXG4gICAgICBpZiAoIWNyZWF0ZWQpIHtcbiAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGVkJywgdGhpcy5fbyk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBjbGFzcyBsaXN0LlxyXG4gICAgICogVGhpcyBpcyBhbiBhbGlhcyBvZiBTcGxpZGUub3B0aW9ucy5jbGFzc0xpc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fSAtIEFuIG9iamVjdCBjb250YWluaW5nIGFsbCBjbGFzcyBsaXN0LlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjbGFzc2VzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fby5jbGFzc2VzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgaTE4biBzdHJpbmdzLlxyXG4gICAgICogVGhpcyBpcyBhbiBhbGlhcyBvZiBTcGxpZGUub3B0aW9ucy5pMThuLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge09iamVjdH0gLSBBbiBvYmplY3QgY29udGFpbmluZyBhbGwgaTE4biBzdHJpbmdzLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpMThuXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fby5pMThuO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTcGxpZGU7XG59KCk7XG5cblxuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvb3B0aW9ucy9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGluaXRpYWxpemluZyBvcHRpb25zLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgaW5pdGlhbGl6aW5nIG9wdGlvbnMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBvcHRpb25zID0gKGZ1bmN0aW9uIChTcGxpZGUpIHtcbiAgLyoqXHJcbiAgICogUmV0cmlldmUgb3B0aW9ucyBmcm9tIHRoZSBkYXRhIGF0dHJpYnV0ZS5cclxuICAgKiBOb3RlIHRoYXQgSUUxMCBkb2Vzbid0IHN1cHBvcnQgZGF0YXNldCBwcm9wZXJ0eS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICovXG4gIHZhciBvcHRpb25zID0gZ2V0QXR0cmlidXRlKFNwbGlkZS5yb290LCAnZGF0YS1zcGxpZGUnKTtcblxuICBpZiAob3B0aW9ucykge1xuICAgIHRyeSB7XG4gICAgICBTcGxpZGUub3B0aW9ucyA9IEpTT04ucGFyc2Uob3B0aW9ucyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZXJyb3IoZS5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgaWYgKFNwbGlkZS5TdGF0ZS5pcyhDUkVBVEVEKSkge1xuICAgICAgICBTcGxpZGUuaW5kZXggPSBTcGxpZGUub3B0aW9ucy5zdGFydDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb25zdGFudHMvZGlyZWN0aW9ucy5qc1xuLyoqXHJcbiAqIEV4cG9ydCBsYXlvdXQgbW9kZXMuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuLyoqXHJcbiAqIEVudW1lcmF0ZSBzbGlkZXMgZnJvbSBsZWZ0IHRvIHJpZ2h0LlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cbnZhciBMVFIgPSAnbHRyJztcbi8qKlxyXG4gKiBFbnVtZXJhdGUgc2xpZGVzIGZyb20gcmlnaHQgdG8gbGVmdC5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG5cbnZhciBSVEwgPSAncnRsJztcbi8qKlxyXG4gKiBFbnVtZXJhdGUgc2xpZGVzIGluIGEgY29sLlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cblxudmFyIFRUQiA9ICd0dGInO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvZWxlbWVudHMvc2xpZGUuanNcbi8qKlxyXG4gKiBUaGUgc3ViIGNvbXBvbmVudCBmb3IgaGFuZGxpbmcgZWFjaCBzbGlkZS5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cblxuXG5cblxuLyoqXHJcbiAqIEV2ZW50cyBmb3IgcmVzdG9yaW5nIG9yaWdpbmFsIHN0eWxlcy5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG5cbnZhciBTVFlMRV9SRVNUT1JFX0VWRU5UUyA9ICd1cGRhdGUuc2xpZGUnO1xuLyoqXHJcbiAqIFRoZSBzdWIgY29tcG9uZW50IGZvciBoYW5kbGluZyBlYWNoIHNsaWRlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gIFNwbGlkZSAgICAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gIGluZGV4ICAgICAtIEFuIHVuaXF1ZSBzbGlkZSBpbmRleC5cclxuICogQHBhcmFtIHtudW1iZXJ9ICByZWFsSW5kZXggLSBDbG9uZXMgc2hvdWxkIHBhc3MgYSByZWFsIHNsaWRlIGluZGV4LlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHNsaWRlICAgICAtIEEgc2xpZGUgZWxlbWVudC5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSBzdWIgY29tcG9uZW50IG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgZWxlbWVudHNfc2xpZGUgPSAoZnVuY3Rpb24gKFNwbGlkZSwgaW5kZXgsIHJlYWxJbmRleCwgc2xpZGUpIHtcbiAgLyoqXHJcbiAgICogV2hldGhlciB0byB1cGRhdGUgXCJpcy1hY3RpdmVcIiBjbGFzcyBiZWZvcmUgb3IgYWZ0ZXIgdHJhbnNpdGlvbi5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICB2YXIgdXBkYXRlT25Nb3ZlID0gU3BsaWRlLm9wdGlvbnMudXBkYXRlT25Nb3ZlO1xuICAvKipcclxuICAgKiBFdmVudHMgd2hlbiB0aGUgc2xpZGUgc3RhdHVzIGlzIHVwZGF0ZWQuXHJcbiAgICogQXBwZW5kIGEgbmFtZXNwYWNlIHRvIHJlbW92ZSBsaXN0ZW5lcnMgbGF0ZXIuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqL1xuXG4gIHZhciBTVEFUVVNfVVBEQVRFX0VWRU5UUyA9ICdyZWFkeS5zbGlkZSB1cGRhdGVkLnNsaWRlIHJlc2l6ZWQuc2xpZGUgbW92ZWQuc2xpZGUnICsgKHVwZGF0ZU9uTW92ZSA/ICcgbW92ZS5zbGlkZScgOiAnJyk7XG4gIC8qKlxyXG4gICAqIFNsaWRlIHN1YiBjb21wb25lbnQgb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgU2xpZGUgPSB7XG4gICAgLyoqXHJcbiAgICAgKiBTbGlkZSBlbGVtZW50LlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtFbGVtZW50fVxyXG4gICAgICovXG4gICAgc2xpZGU6IHNsaWRlLFxuXG4gICAgLyoqXHJcbiAgICAgKiBTbGlkZSBpbmRleC5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXG4gICAgaW5kZXg6IGluZGV4LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZWFsIGluZGV4IGZvciBjbG9uZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xuICAgIHJlYWxJbmRleDogcmVhbEluZGV4LFxuXG4gICAgLyoqXHJcbiAgICAgKiBDb250YWluZXIgZWxlbWVudCBpZiBhdmFpbGFibGUuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge0VsZW1lbnR8dW5kZWZpbmVkfVxyXG4gICAgICovXG4gICAgY29udGFpbmVyOiBjaGlsZChzbGlkZSwgU3BsaWRlLmNsYXNzZXMuY29udGFpbmVyKSxcblxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0aGlzIGlzIGEgY2xvbmVkIHNsaWRlIG9yIG5vdC5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqL1xuICAgIGlzQ2xvbmU6IHJlYWxJbmRleCA+IC0xLFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAoIXRoaXMuaXNDbG9uZSkge1xuICAgICAgICBzbGlkZS5pZCA9IFNwbGlkZS5yb290LmlkICsgXCItc2xpZGVcIiArIHBhZChpbmRleCArIDEpO1xuICAgICAgfVxuXG4gICAgICBTcGxpZGUub24oU1RBVFVTX1VQREFURV9FVkVOVFMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnVwZGF0ZSgpO1xuICAgICAgfSkub24oU1RZTEVfUkVTVE9SRV9FVkVOVFMsIHJlc3RvcmVTdHlsZXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFNwbGlkZS5lbWl0KCdjbGljaycsIF90aGlzKTtcbiAgICAgIH0sIHNsaWRlKTtcbiAgICAgIC8qXHJcbiAgICAgICAqIEFkZCBcImlzLWFjdGl2ZVwiIGNsYXNzIHRvIGEgY2xvbmUgZWxlbWVudCB0ZW1wb3JhcmlseVxyXG4gICAgICAgKiBhbmQgaXQgd2lsbCBiZSByZW1vdmVkIG9uIFwibW92ZWRcIiBldmVudC5cclxuICAgICAgICovXG5cbiAgICAgIGlmICh1cGRhdGVPbk1vdmUpIHtcbiAgICAgICAgU3BsaWRlLm9uKCdtb3ZlLnNsaWRlJywgZnVuY3Rpb24gKG5ld0luZGV4KSB7XG4gICAgICAgICAgaWYgKG5ld0luZGV4ID09PSByZWFsSW5kZXgpIHtcbiAgICAgICAgICAgIF91cGRhdGUodHJ1ZSwgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IC8vIE1ha2Ugc3VyZSB0aGUgc2xpZGUgaXMgc2hvd24uXG5cblxuICAgICAgYXBwbHlTdHlsZShzbGlkZSwge1xuICAgICAgICBkaXNwbGF5OiAnJ1xuICAgICAgfSk7IC8vIEhvbGQgdGhlIG9yaWdpbmFsIHN0eWxlcy5cblxuICAgICAgdGhpcy5zdHlsZXMgPSBnZXRBdHRyaWJ1dGUoc2xpZGUsICdzdHlsZScpIHx8ICcnO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIERlc3Ryb3kuXHJcbiAgICAgKi9cbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgU3BsaWRlLm9mZihTVEFUVVNfVVBEQVRFX0VWRU5UUykub2ZmKFNUWUxFX1JFU1RPUkVfRVZFTlRTKS5vZmYoJ2NsaWNrJywgc2xpZGUpO1xuICAgICAgcmVtb3ZlQ2xhc3Moc2xpZGUsIHZhbHVlcyhTVEFUVVNfQ0xBU1NFUykpO1xuICAgICAgcmVzdG9yZVN0eWxlcygpO1xuICAgICAgcmVtb3ZlQXR0cmlidXRlKHRoaXMuY29udGFpbmVyLCAnc3R5bGUnKTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgYWN0aXZlIGFuZCB2aXNpYmxlIHN0YXR1cy5cclxuICAgICAqL1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgICAgX3VwZGF0ZSh0aGlzLmlzQWN0aXZlKCksIGZhbHNlKTtcblxuICAgICAgX3VwZGF0ZSh0aGlzLmlzVmlzaWJsZSgpLCB0cnVlKTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayB3aGV0aGVyIHRoaXMgc2xpZGUgaXMgYWN0aXZlIG9yIG5vdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSAtIFRydWUgaWYgdGhlIHNsaWRlIGlzIGFjdGl2ZSBvciBmYWxzZSBpZiBub3QuXHJcbiAgICAgKi9cbiAgICBpc0FjdGl2ZTogZnVuY3Rpb24gaXNBY3RpdmUoKSB7XG4gICAgICByZXR1cm4gU3BsaWRlLmluZGV4ID09PSBpbmRleDtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayB3aGV0aGVyIHRoaXMgc2xpZGUgaXMgdmlzaWJsZSBpbiB0aGUgdmlld3BvcnQgb3Igbm90LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gVHJ1ZSBpZiB0aGUgc2xpZGUgaXMgdmlzaWJsZSBvciBmYWxzZSBpZiBub3QuXHJcbiAgICAgKi9cbiAgICBpc1Zpc2libGU6IGZ1bmN0aW9uIGlzVmlzaWJsZSgpIHtcbiAgICAgIHZhciBhY3RpdmUgPSB0aGlzLmlzQWN0aXZlKCk7XG5cbiAgICAgIGlmIChTcGxpZGUuaXMoRkFERSkgfHwgYWN0aXZlKSB7XG4gICAgICAgIHJldHVybiBhY3RpdmU7XG4gICAgICB9XG5cbiAgICAgIHZhciBjZWlsID0gTWF0aC5jZWlsO1xuICAgICAgdmFyIHRyYWNrUmVjdCA9IGdldFJlY3QoU3BsaWRlLkNvbXBvbmVudHMuRWxlbWVudHMudHJhY2spO1xuICAgICAgdmFyIHNsaWRlUmVjdCA9IGdldFJlY3Qoc2xpZGUpO1xuXG4gICAgICBpZiAoU3BsaWRlLm9wdGlvbnMuZGlyZWN0aW9uID09PSBUVEIpIHtcbiAgICAgICAgcmV0dXJuIHRyYWNrUmVjdC50b3AgPD0gc2xpZGVSZWN0LnRvcCAmJiBzbGlkZVJlY3QuYm90dG9tIDw9IGNlaWwodHJhY2tSZWN0LmJvdHRvbSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cmFja1JlY3QubGVmdCA8PSBzbGlkZVJlY3QubGVmdCAmJiBzbGlkZVJlY3QucmlnaHQgPD0gY2VpbCh0cmFja1JlY3QucmlnaHQpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIENhbGN1bGF0ZSBob3cgZmFyIHRoaXMgc2xpZGUgaXMgZnJvbSBhbm90aGVyIHNsaWRlIGFuZFxyXG4gICAgICogcmV0dXJuIHRydWUgaWYgdGhlIGRpc3RhbmNlIGlzIHdpdGhpbiB0aGUgZ2l2ZW4gbnVtYmVyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tICAgLSBJbmRleCBvZiBhIHRhcmdldCBzbGlkZS5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aXRoaW4gLSBUcnVlIGlmIHRoZSBzbGlkZSBpcyB3aXRoaW4gdGhpcyBudW1iZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gLSBUcnVlIGlmIHRoZSBzbGlkZSBpcyB3aXRoaW4gdGhlIG51bWJlciBvciBmYWxzZSBvdGhlcndpc2UuXHJcbiAgICAgKi9cbiAgICBpc1dpdGhpbjogZnVuY3Rpb24gaXNXaXRoaW4oZnJvbSwgd2l0aGluKSB7XG4gICAgICB2YXIgZGlmZiA9IE1hdGguYWJzKGZyb20gLSBpbmRleCk7XG5cbiAgICAgIGlmICghU3BsaWRlLmlzKFNMSURFKSAmJiAhdGhpcy5pc0Nsb25lKSB7XG4gICAgICAgIGRpZmYgPSBNYXRoLm1pbihkaWZmLCBTcGxpZGUubGVuZ3RoIC0gZGlmZik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkaWZmIDwgd2l0aGluO1xuICAgIH1cbiAgfTtcbiAgLyoqXHJcbiAgICogVXBkYXRlIGNsYXNzZXMgZm9yIGFjdGl2aXR5IG9yIHZpc2liaWxpdHkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGFjdGl2ZSAgICAgICAgLSBJcyBhY3RpdmUvdmlzaWJsZSBvciBub3QuXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBmb3JWaXNpYmlsaXR5IC0gVG9nZ2xlIGNsYXNzZXMgZm9yIGFjdGl2aXR5IG9yIHZpc2liaWxpdHkuXHJcbiAgICovXG5cbiAgZnVuY3Rpb24gX3VwZGF0ZShhY3RpdmUsIGZvclZpc2liaWxpdHkpIHtcbiAgICB2YXIgdHlwZSA9IGZvclZpc2liaWxpdHkgPyAndmlzaWJsZScgOiAnYWN0aXZlJztcbiAgICB2YXIgY2xhc3NOYW1lID0gU1RBVFVTX0NMQVNTRVNbdHlwZV07XG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICBhZGRDbGFzcyhzbGlkZSwgY2xhc3NOYW1lKTtcbiAgICAgIFNwbGlkZS5lbWl0KFwiXCIgKyB0eXBlLCBTbGlkZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXNDbGFzcyhzbGlkZSwgY2xhc3NOYW1lKSkge1xuICAgICAgICByZW1vdmVDbGFzcyhzbGlkZSwgY2xhc3NOYW1lKTtcbiAgICAgICAgU3BsaWRlLmVtaXQoXCJcIiArIChmb3JWaXNpYmlsaXR5ID8gJ2hpZGRlbicgOiAnaW5hY3RpdmUnKSwgU2xpZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcclxuICAgKiBSZXN0b3JlIHRoZSBvcmlnaW5hbCBzdHlsZXMuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiByZXN0b3JlU3R5bGVzKCkge1xuICAgIHNldEF0dHJpYnV0ZShzbGlkZSwgJ3N0eWxlJywgU2xpZGUuc3R5bGVzKTtcbiAgfVxuXG4gIHJldHVybiBTbGlkZTtcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvZWxlbWVudHMvaW5kZXguanNcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBtYWluIGVsZW1lbnRzLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuXG5cblxuLyoqXHJcbiAqIFRoZSBwcm9wZXJ0eSBuYW1lIGZvciBVSUQgc3RvcmVkIGluIGEgd2luZG93IG9iamVjdC5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG5cbnZhciBVSURfTkFNRSA9ICd1aWQnO1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIG1haW4gZWxlbWVudHMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgICAgIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBDb21wb25lbnRzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgY29tcG9uZW50cy5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBjb21wb25lbnRzX2VsZW1lbnRzID0gKGZ1bmN0aW9uIChTcGxpZGUsIENvbXBvbmVudHMpIHtcbiAgLyoqXHJcbiAgICogSG9sZCB0aGUgcm9vdCBlbGVtZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge0VsZW1lbnR9XHJcbiAgICovXG4gIHZhciByb290ID0gU3BsaWRlLnJvb3Q7XG4gIC8qKlxyXG4gICAqIEhvbGQgdGhlIGNsYXNzIGxpc3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBjbGFzc2VzID0gU3BsaWRlLmNsYXNzZXM7XG4gIC8qKlxyXG4gICAqIFN0b3JlIFNsaWRlIG9iamVjdHMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7QXJyYXl9XHJcbiAgICovXG5cbiAgdmFyIFNsaWRlcyA9IFtdO1xuICAvKlxyXG4gICAqIEFzc2lnbiB1bmlxdWUgSUQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBpdCBkb2Vzbid0IGhhdmUgdGhlIG9uZS5cclxuICAgKiBOb3RlIHRoYXQgSUUgZG9lc24ndCBzdXBwb3J0IHBhZFN0YXJ0KCkgdG8gZmlsbCB0aGUgdWlkIGJ5IDAuXHJcbiAgICovXG5cbiAgaWYgKCFyb290LmlkKSB7XG4gICAgd2luZG93LnNwbGlkZSA9IHdpbmRvdy5zcGxpZGUgfHwge307XG4gICAgdmFyIHVpZCA9IHdpbmRvdy5zcGxpZGVbVUlEX05BTUVdIHx8IDA7XG4gICAgd2luZG93LnNwbGlkZVtVSURfTkFNRV0gPSArK3VpZDtcbiAgICByb290LmlkID0gXCJzcGxpZGVcIiArIHBhZCh1aWQpO1xuICB9XG4gIC8qKlxyXG4gICAqIEVsZW1lbnRzIGNvbXBvbmVudCBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG5cbiAgdmFyIEVsZW1lbnRzID0ge1xuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICogQ29sbGVjdCBtYWluIGVsZW1lbnRzIGFuZCBzdG9yZSB0aGVtIGFzIG1lbWJlciBwcm9wZXJ0aWVzLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdGhpcy5pbml0KCk7XG4gICAgICBTcGxpZGUub24oJ3JlZnJlc2gnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLmRlc3Ryb3koKTtcblxuICAgICAgICBfdGhpcy5pbml0KCk7XG4gICAgICB9KS5vbigndXBkYXRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVtb3ZlQ2xhc3Mocm9vdCwgZ2V0Q2xhc3NlcygpKTtcbiAgICAgICAgYWRkQ2xhc3Mocm9vdCwgZ2V0Q2xhc3NlcygpKTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIERlc3Ryb3kuXHJcbiAgICAgKi9cbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgU2xpZGVzLmZvckVhY2goZnVuY3Rpb24gKFNsaWRlKSB7XG4gICAgICAgIFNsaWRlLmRlc3Ryb3koKTtcbiAgICAgIH0pO1xuICAgICAgU2xpZGVzID0gW107XG4gICAgICByZW1vdmVDbGFzcyhyb290LCBnZXRDbGFzc2VzKCkpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemF0aW9uLlxyXG4gICAgICovXG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBjb2xsZWN0KCk7XG4gICAgICBhZGRDbGFzcyhyb290LCBnZXRDbGFzc2VzKCkpO1xuICAgICAgdGhpcy5zbGlkZXMuZm9yRWFjaChmdW5jdGlvbiAoc2xpZGUsIGluZGV4KSB7XG4gICAgICAgIF90aGlzMi5yZWdpc3RlcihzbGlkZSwgaW5kZXgsIC0xKTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIGEgc2xpZGUgdG8gY3JlYXRlIGEgU2xpZGUgb2JqZWN0IGFuZCBoYW5kbGUgaXRzIGJlaGF2aW9yLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gc2xpZGUgICAgIC0gQSBzbGlkZSBlbGVtZW50LlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9ICBpbmRleCAgICAgLSBBIHVuaXF1ZSBpbmRleC4gVGhpcyBjYW4gYmUgbmVnYXRpdmUuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gIHJlYWxJbmRleCAtIEEgcmVhbCBpbmRleCBmb3IgY2xvbmVzLiBTZXQgLTEgZm9yIHJlYWwgc2xpZGVzLlxyXG4gICAgICovXG4gICAgcmVnaXN0ZXI6IGZ1bmN0aW9uIHJlZ2lzdGVyKHNsaWRlLCBpbmRleCwgcmVhbEluZGV4KSB7XG4gICAgICB2YXIgU2xpZGVPYmplY3QgPSBlbGVtZW50c19zbGlkZShTcGxpZGUsIGluZGV4LCByZWFsSW5kZXgsIHNsaWRlKTtcbiAgICAgIFNsaWRlT2JqZWN0Lm1vdW50KCk7XG4gICAgICBTbGlkZXMucHVzaChTbGlkZU9iamVjdCk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBTbGlkZSBvYmplY3QgZGVzaWduYXRlZCBieSB0aGUgaW5kZXguXHJcbiAgICAgKiBOb3RlIHRoYXQgXCJmaW5kXCIgaXMgbm90IHN1cHBvcnRlZCBieSBJRS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R8dW5kZWZpbmVkfSAtIEEgU2xpZGUgb2JqZWN0IGlmIGF2YWlsYWJsZS4gVW5kZWZpbmVkIGlmIG5vdC5cclxuICAgICAqL1xuICAgIGdldFNsaWRlOiBmdW5jdGlvbiBnZXRTbGlkZShpbmRleCkge1xuICAgICAgcmV0dXJuIFNsaWRlcy5maWx0ZXIoZnVuY3Rpb24gKFNsaWRlKSB7XG4gICAgICAgIHJldHVybiBTbGlkZS5pbmRleCA9PT0gaW5kZXg7XG4gICAgICB9KVswXTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gYWxsIFNsaWRlIG9iamVjdHMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpbmNsdWRlQ2xvbmVzIC0gV2hldGhlciB0byBpbmNsdWRlIGNsb25lZCBzbGlkZXMgb3Igbm90LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge09iamVjdFtdfSAtIFNsaWRlIG9iamVjdHMuXHJcbiAgICAgKi9cbiAgICBnZXRTbGlkZXM6IGZ1bmN0aW9uIGdldFNsaWRlcyhpbmNsdWRlQ2xvbmVzKSB7XG4gICAgICByZXR1cm4gaW5jbHVkZUNsb25lcyA/IFNsaWRlcyA6IFNsaWRlcy5maWx0ZXIoZnVuY3Rpb24gKFNsaWRlKSB7XG4gICAgICAgIHJldHVybiAhU2xpZGUuaXNDbG9uZTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiBTbGlkZSBvYmplY3RzIGJlbG9uZ2luZyB0byB0aGUgZ2l2ZW4gcGFnZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGFnZSAtIEEgcGFnZSBudW1iZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0W119IC0gQW4gYXJyYXkgY29udGFpbmluZyBTbGlkZSBvYmplY3RzLlxyXG4gICAgICovXG4gICAgZ2V0U2xpZGVzQnlQYWdlOiBmdW5jdGlvbiBnZXRTbGlkZXNCeVBhZ2UocGFnZSkge1xuICAgICAgdmFyIGlkeCA9IENvbXBvbmVudHMuQ29udHJvbGxlci50b0luZGV4KHBhZ2UpO1xuICAgICAgdmFyIG9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcbiAgICAgIHZhciBtYXggPSBvcHRpb25zLmZvY3VzICE9PSBmYWxzZSA/IDEgOiBvcHRpb25zLnBlclBhZ2U7XG4gICAgICByZXR1cm4gU2xpZGVzLmZpbHRlcihmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICB2YXIgaW5kZXggPSBfcmVmLmluZGV4O1xuICAgICAgICByZXR1cm4gaWR4IDw9IGluZGV4ICYmIGluZGV4IDwgaWR4ICsgbWF4O1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogSW5zZXJ0IGEgc2xpZGUgdG8gYSBzbGlkZXIuXHJcbiAgICAgKiBOZWVkIHRvIHJlZnJlc2ggU3BsaWRlIGFmdGVyIGFkZGluZyBhIHNsaWRlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7Tm9kZXxzdHJpbmd9IHNsaWRlICAgIC0gQSBzbGlkZSBlbGVtZW50IHRvIGJlIGFkZGVkLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9ICAgICAgaW5kZXggICAgLSBBIHNsaWRlIHdpbGwgYmUgYWRkZWQgYXQgdGhlIHBvc2l0aW9uLlxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gICAgY2FsbGJhY2sgLSBDYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIHNsaWRlIGlzIGFkZGVkIHRvIHRoZSBET00gdHJlZS5cclxuICAgICAqL1xuICAgIGFkZDogZnVuY3Rpb24gYWRkKHNsaWRlLCBpbmRleCwgY2FsbGJhY2spIHtcbiAgICAgIGlmICh0eXBlb2Ygc2xpZGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHNsaWRlID0gZG9taWZ5KHNsaWRlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNsaWRlIGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICB2YXIgcmVmID0gdGhpcy5zbGlkZXNbaW5kZXhdOyAvLyBUaGlzIHdpbGwgYmUgcmVtb3ZlZCBpbiBtb3VudCgpIG9mIGEgU2xpZGUgY29tcG9uZW50LlxuXG4gICAgICAgIGFwcGx5U3R5bGUoc2xpZGUsIHtcbiAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJlZikge1xuICAgICAgICAgIGJlZm9yZShzbGlkZSwgcmVmKTtcbiAgICAgICAgICB0aGlzLnNsaWRlcy5zcGxpY2UoaW5kZXgsIDAsIHNsaWRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhcHBlbmQodGhpcy5saXN0LCBzbGlkZSk7XG4gICAgICAgICAgdGhpcy5zbGlkZXMucHVzaChzbGlkZSk7XG4gICAgICAgIH1cblxuICAgICAgICBsb2FkZWQoc2xpZGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhzbGlkZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBhIHNsaWRlIGZyb20gYSBzbGlkZXIuXHJcbiAgICAgKiBOZWVkIHRvIHJlZnJlc2ggU3BsaWRlIGFmdGVyIHJlbW92aW5nIGEgc2xpZGUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGluZGV4IC0gU2xpZGUgaW5kZXguXHJcbiAgICAgKi9cbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShpbmRleCkge1xuICAgICAgZG9tX3JlbW92ZSh0aGlzLnNsaWRlcy5zcGxpY2UoaW5kZXgsIDEpWzBdKTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBUcmlnZ2VyIHRoZSBwcm92aWRlZCBjYWxsYmFjayBmb3IgZWFjaCBTbGlkZSBvYmplY3QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBBIGNhbGxiYWNrIGZ1bmN0aW9uLiBUaGUgZmlyc3QgYXJndW1lbnQgd2lsbCBiZSB0aGUgU2xpZGUgb2JqZWN0LlxyXG4gICAgICovXG4gICAgZWFjaDogZnVuY3Rpb24gZWFjaChjYWxsYmFjaykge1xuICAgICAgU2xpZGVzLmZvckVhY2goY2FsbGJhY2spO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiBzbGlkZXMgbGVuZ3RoIHdpdGhvdXQgY2xvbmVzLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBTbGlkZSBsZW5ndGguXHJcbiAgICAgKi9cbiAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2xpZGVzLmxlbmd0aDtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gXCJTbGlkZU9iamVjdHNcIiBsZW5ndGggaW5jbHVkaW5nIGNsb25lcy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gU2xpZGUgbGVuZ3RoIGluY2x1ZGluZyBjbG9uZXMuXHJcbiAgICAgKi9cbiAgICBnZXQgdG90YWwoKSB7XG4gICAgICByZXR1cm4gU2xpZGVzLmxlbmd0aDtcbiAgICB9XG5cbiAgfTtcbiAgLyoqXHJcbiAgICogQ29sbGVjdCBlbGVtZW50cy5cclxuICAgKi9cblxuICBmdW5jdGlvbiBjb2xsZWN0KCkge1xuICAgIEVsZW1lbnRzLnNsaWRlciA9IGNoaWxkKHJvb3QsIGNsYXNzZXMuc2xpZGVyKTtcbiAgICBFbGVtZW50cy50cmFjayA9IGZpbmQocm9vdCwgXCIuXCIgKyBjbGFzc2VzLnRyYWNrKTtcbiAgICBFbGVtZW50cy5saXN0ID0gY2hpbGQoRWxlbWVudHMudHJhY2ssIGNsYXNzZXMubGlzdCk7XG4gICAgZXhpc3QoRWxlbWVudHMudHJhY2sgJiYgRWxlbWVudHMubGlzdCwgJ1RyYWNrIG9yIGxpc3Qgd2FzIG5vdCBmb3VuZC4nKTtcbiAgICBFbGVtZW50cy5zbGlkZXMgPSBjaGlsZHJlbihFbGVtZW50cy5saXN0LCBjbGFzc2VzLnNsaWRlKTtcbiAgICB2YXIgYXJyb3dzID0gZmluZFBhcnRzKGNsYXNzZXMuYXJyb3dzKTtcbiAgICBFbGVtZW50cy5hcnJvd3MgPSB7XG4gICAgICBwcmV2OiBmaW5kKGFycm93cywgXCIuXCIgKyBjbGFzc2VzLnByZXYpLFxuICAgICAgbmV4dDogZmluZChhcnJvd3MsIFwiLlwiICsgY2xhc3Nlcy5uZXh0KVxuICAgIH07XG4gICAgdmFyIGF1dG9wbGF5ID0gZmluZFBhcnRzKGNsYXNzZXMuYXV0b3BsYXkpO1xuICAgIEVsZW1lbnRzLmJhciA9IGZpbmQoZmluZFBhcnRzKGNsYXNzZXMucHJvZ3Jlc3MpLCBcIi5cIiArIGNsYXNzZXMuYmFyKTtcbiAgICBFbGVtZW50cy5wbGF5ID0gZmluZChhdXRvcGxheSwgXCIuXCIgKyBjbGFzc2VzLnBsYXkpO1xuICAgIEVsZW1lbnRzLnBhdXNlID0gZmluZChhdXRvcGxheSwgXCIuXCIgKyBjbGFzc2VzLnBhdXNlKTtcbiAgICBFbGVtZW50cy50cmFjay5pZCA9IEVsZW1lbnRzLnRyYWNrLmlkIHx8IHJvb3QuaWQgKyBcIi10cmFja1wiO1xuICAgIEVsZW1lbnRzLmxpc3QuaWQgPSBFbGVtZW50cy5saXN0LmlkIHx8IHJvb3QuaWQgKyBcIi1saXN0XCI7XG4gIH1cbiAgLyoqXHJcbiAgICogUmV0dXJuIGNsYXNzIG5hbWVzIGZvciB0aGUgcm9vdCBlbGVtZW50LlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NlcygpIHtcbiAgICB2YXIgcm9vdENsYXNzID0gY2xhc3Nlcy5yb290O1xuICAgIHZhciBvcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG4gICAgcmV0dXJuIFtyb290Q2xhc3MgKyBcIi0tXCIgKyBvcHRpb25zLnR5cGUsIHJvb3RDbGFzcyArIFwiLS1cIiArIG9wdGlvbnMuZGlyZWN0aW9uLCBvcHRpb25zLmRyYWcgPyByb290Q2xhc3MgKyBcIi0tZHJhZ2dhYmxlXCIgOiAnJywgb3B0aW9ucy5pc05hdmlnYXRpb24gPyByb290Q2xhc3MgKyBcIi0tbmF2XCIgOiAnJywgU1RBVFVTX0NMQVNTRVMuYWN0aXZlXTtcbiAgfVxuICAvKipcclxuICAgKiBGaW5kIHBhcnRzIG9ubHkgZnJvbSBjaGlsZHJlbiBvZiB0aGUgcm9vdCBvciB0cmFjay5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge0VsZW1lbnR9IC0gQSBmb3VuZCBlbGVtZW50IG9yIHVuZGVmaW5lZC5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGZpbmRQYXJ0cyhjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gY2hpbGQocm9vdCwgY2xhc3NOYW1lKSB8fCBjaGlsZChFbGVtZW50cy5zbGlkZXIsIGNsYXNzTmFtZSk7XG4gIH1cblxuICByZXR1cm4gRWxlbWVudHM7XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL2NvbnRyb2xsZXIvaW5kZXguanNcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBjb250cm9sbGluZyB0aGUgdHJhY2suXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG5cbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgY29udHJvbGxpbmcgdGhlIHRyYWNrLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlICAgICAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gQ29tcG9uZW50cyAtIEFuIG9iamVjdCBjb250YWluaW5nIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgY29tcG9uZW50IG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgY29udHJvbGxlciA9IChmdW5jdGlvbiAoU3BsaWRlLCBDb21wb25lbnRzKSB7XG4gIC8qKlxyXG4gICAqIFN0b3JlIGN1cnJlbnQgb3B0aW9ucy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG4gIHZhciBvcHRpb25zO1xuICAvKipcclxuICAgKiBUcnVlIGlmIHRoZSBzbGlkZSBpcyBMT09QIG1vZGUuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cblxuICB2YXIgaXNMb29wO1xuICAvKipcclxuICAgKiBDb250cm9sbGVyIGNvbXBvbmVudCBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBDb250cm9sbGVyID0ge1xuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgb3B0aW9ucyA9IFNwbGlkZS5vcHRpb25zO1xuICAgICAgaXNMb29wID0gU3BsaWRlLmlzKExPT1ApO1xuICAgICAgYmluZCgpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIE1ha2UgdHJhY2sgcnVuIGJ5IHRoZSBnaXZlbiBjb250cm9sLlxyXG4gICAgICogLSBcIit7aX1cIiA6IEluY3JlbWVudCB0aGUgc2xpZGUgaW5kZXggYnkgaS5cclxuICAgICAqIC0gXCIte2l9XCIgOiBEZWNyZW1lbnQgdGhlIHNsaWRlIGluZGV4IGJ5IGkuXHJcbiAgICAgKiAtIFwie2l9XCIgIDogR28gdG8gdGhlIHNsaWRlIHdob3NlIGluZGV4IGlzIGkuXHJcbiAgICAgKiAtIFwiPlwiICAgIDogR28gdG8gbmV4dCBwYWdlLlxyXG4gICAgICogLSBcIjxcIiAgICA6IEdvIHRvIHByZXYgcGFnZS5cclxuICAgICAqIC0gXCI+e2l9XCIgOiBHbyB0byBwYWdlIGkuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBjb250cm9sICAtIEEgY29udHJvbCBwYXR0ZXJuLlxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSAgICAgICBzaWxlbnRseSAtIEdvIHRvIHRoZSBkZXN0aW5hdGlvbiB3aXRob3V0IGV2ZW50IGVtaXNzaW9uLlxyXG4gICAgICovXG4gICAgZ286IGZ1bmN0aW9uIGdvKGNvbnRyb2wsIHNpbGVudGx5KSB7XG4gICAgICB2YXIgZGVzdEluZGV4ID0gdGhpcy50cmltKHRoaXMucGFyc2UoY29udHJvbCkpO1xuICAgICAgQ29tcG9uZW50cy5UcmFjay5nbyhkZXN0SW5kZXgsIHRoaXMucmV3aW5kKGRlc3RJbmRleCksIHNpbGVudGx5KTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBQYXJzZSB0aGUgZ2l2ZW4gY29udHJvbCBhbmQgcmV0dXJuIHRoZSBkZXN0aW5hdGlvbiBpbmRleCBmb3IgdGhlIHRyYWNrLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb250cm9sIC0gQSBjb250cm9sIHRhcmdldCBwYXR0ZXJuLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBBIHBhcnNlZCB0YXJnZXQuXHJcbiAgICAgKi9cbiAgICBwYXJzZTogZnVuY3Rpb24gcGFyc2UoY29udHJvbCkge1xuICAgICAgdmFyIGluZGV4ID0gU3BsaWRlLmluZGV4O1xuICAgICAgdmFyIG1hdGNoZXMgPSBTdHJpbmcoY29udHJvbCkubWF0Y2goLyhbK1xcLTw+XSspKFxcZCspPy8pO1xuICAgICAgdmFyIGluZGljYXRvciA9IG1hdGNoZXMgPyBtYXRjaGVzWzFdIDogJyc7XG4gICAgICB2YXIgbnVtYmVyID0gbWF0Y2hlcyA/IHBhcnNlSW50KG1hdGNoZXNbMl0pIDogMDtcblxuICAgICAgc3dpdGNoIChpbmRpY2F0b3IpIHtcbiAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgaW5kZXggKz0gbnVtYmVyIHx8IDE7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgaW5kZXggLT0gbnVtYmVyIHx8IDE7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnPic6XG4gICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgIGluZGV4ID0gcGFyc2VQYWdlKG51bWJlciwgaW5kZXgsIGluZGljYXRvciA9PT0gJzwnKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGluZGV4ID0gcGFyc2VJbnQoY29udHJvbCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBDb21wdXRlIGluZGV4IGZyb20gdGhlIGdpdmVuIHBhZ2UgbnVtYmVyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlIC0gUGFnZSBudW1iZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIEEgY29tcHV0ZWQgcGFnZSBudW1iZXIuXHJcbiAgICAgKi9cbiAgICB0b0luZGV4OiBmdW5jdGlvbiB0b0luZGV4KHBhZ2UpIHtcbiAgICAgIGlmIChoYXNGb2N1cygpKSB7XG4gICAgICAgIHJldHVybiBwYWdlO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGVuZ3RoID0gU3BsaWRlLmxlbmd0aDtcbiAgICAgIHZhciBwZXJQYWdlID0gb3B0aW9ucy5wZXJQYWdlO1xuICAgICAgdmFyIGluZGV4ID0gcGFnZSAqIHBlclBhZ2U7XG4gICAgICBpbmRleCA9IGluZGV4IC0gKHRoaXMucGFnZUxlbmd0aCAqIHBlclBhZ2UgLSBsZW5ndGgpICogZmxvb3IoaW5kZXggLyBsZW5ndGgpOyAvLyBBZGp1c3RtZW50IGZvciB0aGUgbGFzdCBwYWdlLlxuXG4gICAgICBpZiAobGVuZ3RoIC0gcGVyUGFnZSA8PSBpbmRleCAmJiBpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICBpbmRleCA9IGxlbmd0aCAtIHBlclBhZ2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBDb21wdXRlIHBhZ2UgbnVtYmVyIGZyb20gdGhlIGdpdmVuIHNsaWRlIGluZGV4LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIFNsaWRlIGluZGV4LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBBIGNvbXB1dGVkIHBhZ2UgbnVtYmVyLlxyXG4gICAgICovXG4gICAgdG9QYWdlOiBmdW5jdGlvbiB0b1BhZ2UoaW5kZXgpIHtcbiAgICAgIGlmIChoYXNGb2N1cygpKSB7XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgIH1cblxuICAgICAgdmFyIGxlbmd0aCA9IFNwbGlkZS5sZW5ndGg7XG4gICAgICB2YXIgcGVyUGFnZSA9IG9wdGlvbnMucGVyUGFnZTsgLy8gTWFrZSB0aGUgbGFzdCBcInBlclBhZ2VcIiBudW1iZXIgb2Ygc2xpZGVzIGJlbG9uZyB0byB0aGUgbGFzdCBwYWdlLlxuXG4gICAgICBpZiAobGVuZ3RoIC0gcGVyUGFnZSA8PSBpbmRleCAmJiBpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmxvb3IoKGxlbmd0aCAtIDEpIC8gcGVyUGFnZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmbG9vcihpbmRleCAvIHBlclBhZ2UpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFRyaW0gdGhlIGdpdmVuIGluZGV4IGFjY29yZGluZyB0byB0aGUgY3VycmVudCBtb2RlLlxyXG4gICAgICogSW5kZXggYmVpbmcgcmV0dXJuZWQgY291bGQgYmUgbGVzcyB0aGFuIDAgb3IgZ3JlYXRlciB0aGFuIHRoZSBsZW5ndGggaW4gTG9vcCBtb2RlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIEFuIGluZGV4IGJlaW5nIHRyaW1tZWQuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIEEgdHJpbW1lZCBpbmRleC5cclxuICAgICAqL1xuICAgIHRyaW06IGZ1bmN0aW9uIHRyaW0oaW5kZXgpIHtcbiAgICAgIGlmICghaXNMb29wKSB7XG4gICAgICAgIGluZGV4ID0gb3B0aW9ucy5yZXdpbmQgPyB0aGlzLnJld2luZChpbmRleCkgOiBiZXR3ZWVuKGluZGV4LCAwLCB0aGlzLmVkZ2VJbmRleCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXdpbmQgdGhlIGdpdmVuIGluZGV4IGlmIGl0J3Mgb3V0IG9mIHJhbmdlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIEFuIGluZGV4LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBBIHJld291bmQgaW5kZXguXHJcbiAgICAgKi9cbiAgICByZXdpbmQ6IGZ1bmN0aW9uIHJld2luZChpbmRleCkge1xuICAgICAgdmFyIGVkZ2UgPSB0aGlzLmVkZ2VJbmRleDtcblxuICAgICAgaWYgKGlzTG9vcCkge1xuICAgICAgICB3aGlsZSAoaW5kZXggPiBlZGdlKSB7XG4gICAgICAgICAgaW5kZXggLT0gZWRnZSArIDE7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgaW5kZXggKz0gZWRnZSArIDE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpbmRleCA+IGVkZ2UpIHtcbiAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgaW5kZXggPSBlZGdlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgZGlyZWN0aW9uIGlzIFwicnRsXCIgb3Igbm90LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gVHJ1ZSBpZiBcInJ0bFwiIG9yIGZhbHNlIGlmIG5vdC5cclxuICAgICAqL1xuICAgIGlzUnRsOiBmdW5jdGlvbiBpc1J0bCgpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmRpcmVjdGlvbiA9PT0gUlRMO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgcGFnZSBsZW5ndGguXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIE1heCBwYWdlIG51bWJlci5cclxuICAgICAqL1xuICAgIGdldCBwYWdlTGVuZ3RoKCkge1xuICAgICAgdmFyIGxlbmd0aCA9IFNwbGlkZS5sZW5ndGg7XG4gICAgICByZXR1cm4gaGFzRm9jdXMoKSA/IGxlbmd0aCA6IE1hdGguY2VpbChsZW5ndGggLyBvcHRpb25zLnBlclBhZ2UpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgZWRnZSBpbmRleC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gRWRnZSBpbmRleC5cclxuICAgICAqL1xuICAgIGdldCBlZGdlSW5kZXgoKSB7XG4gICAgICB2YXIgbGVuZ3RoID0gU3BsaWRlLmxlbmd0aDtcblxuICAgICAgaWYgKCFsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChoYXNGb2N1cygpIHx8IG9wdGlvbnMuaXNOYXZpZ2F0aW9uIHx8IGlzTG9vcCkge1xuICAgICAgICByZXR1cm4gbGVuZ3RoIC0gMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxlbmd0aCAtIG9wdGlvbnMucGVyUGFnZTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBwcmV2aW91cyBzbGlkZS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gVGhlIGluZGV4IG9mIHRoZSBwcmV2aW91cyBzbGlkZSBpZiBhdmFpbGFibGUuIC0xIG90aGVyd2lzZS5cclxuICAgICAqL1xuICAgIGdldCBwcmV2SW5kZXgoKSB7XG4gICAgICB2YXIgcHJldiA9IFNwbGlkZS5pbmRleCAtIDE7XG5cbiAgICAgIGlmIChpc0xvb3AgfHwgb3B0aW9ucy5yZXdpbmQpIHtcbiAgICAgICAgcHJldiA9IHRoaXMucmV3aW5kKHByZXYpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldiA+IC0xID8gcHJldiA6IC0xO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgaW5kZXggb2YgdGhlIG5leHQgc2xpZGUuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIFRoZSBpbmRleCBvZiB0aGUgbmV4dCBzbGlkZSBpZiBhdmFpbGFibGUuIC0xIG90aGVyd2lzZS5cclxuICAgICAqL1xuICAgIGdldCBuZXh0SW5kZXgoKSB7XG4gICAgICB2YXIgbmV4dCA9IFNwbGlkZS5pbmRleCArIDE7XG5cbiAgICAgIGlmIChpc0xvb3AgfHwgb3B0aW9ucy5yZXdpbmQpIHtcbiAgICAgICAgbmV4dCA9IHRoaXMucmV3aW5kKG5leHQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gU3BsaWRlLmluZGV4IDwgbmV4dCAmJiBuZXh0IDw9IHRoaXMuZWRnZUluZGV4IHx8IG5leHQgPT09IDAgPyBuZXh0IDogLTE7XG4gICAgfVxuXG4gIH07XG4gIC8qKlxyXG4gICAqIExpc3RlbiB0byBzb21lIGV2ZW50cy5cclxuICAgKi9cblxuICBmdW5jdGlvbiBiaW5kKCkge1xuICAgIFNwbGlkZS5vbignbW92ZScsIGZ1bmN0aW9uIChuZXdJbmRleCkge1xuICAgICAgU3BsaWRlLmluZGV4ID0gbmV3SW5kZXg7XG4gICAgfSkub24oJ3VwZGF0ZWQgcmVmcmVzaCcsIGZ1bmN0aW9uIChuZXdPcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gbmV3T3B0aW9ucyB8fCBvcHRpb25zO1xuICAgICAgU3BsaWRlLmluZGV4ID0gYmV0d2VlbihTcGxpZGUuaW5kZXgsIDAsIENvbnRyb2xsZXIuZWRnZUluZGV4KTtcbiAgICB9KTtcbiAgfVxuICAvKipcclxuICAgKiBWZXJpZnkgaWYgdGhlIGZvY3VzIG9wdGlvbiBpcyBhdmFpbGFibGUgb3Igbm90LlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gLSBUcnVlIGlmIGEgc2xpZGVyIGhhcyB0aGUgZm9jdXMgb3B0aW9uLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gaGFzRm9jdXMoKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMuZm9jdXMgIT09IGZhbHNlO1xuICB9XG4gIC8qKlxyXG4gICAqIFJldHVybiB0aGUgbmV4dCBvciBwcmV2aW91cyBwYWdlIGluZGV4IGNvbXB1dGVkIGJ5IHRoZSBwYWdlIG51bWJlciBhbmQgY3VycmVudCBpbmRleC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSAgbnVtYmVyIC0gU3BlY2lmeSB0aGUgcGFnZSBudW1iZXIuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9ICBpbmRleCAgLSBDdXJyZW50IGluZGV4LlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcHJldiAgIC0gUHJldiBvciBuZXh0LlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7bnVtYmVyfSAtIFNsaWRlIGluZGV4LlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gcGFyc2VQYWdlKG51bWJlciwgaW5kZXgsIHByZXYpIHtcbiAgICBpZiAobnVtYmVyID4gLTEpIHtcbiAgICAgIHJldHVybiBDb250cm9sbGVyLnRvSW5kZXgobnVtYmVyKTtcbiAgICB9XG5cbiAgICB2YXIgcGVyTW92ZSA9IG9wdGlvbnMucGVyTW92ZTtcbiAgICB2YXIgc2lnbiA9IHByZXYgPyAtMSA6IDE7XG5cbiAgICBpZiAocGVyTW92ZSkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgcGVyTW92ZSAqIHNpZ247XG4gICAgfVxuXG4gICAgcmV0dXJuIENvbnRyb2xsZXIudG9JbmRleChDb250cm9sbGVyLnRvUGFnZShpbmRleCkgKyBzaWduKTtcbiAgfVxuXG4gIHJldHVybiBDb250cm9sbGVyO1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy90cmFjay9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIG1vdmluZyBsaXN0IGluIHRoZSB0cmFjay5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cblxuXG5cbnZhciBhYnMgPSBNYXRoLmFicztcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBtb3ZpbmcgbGlzdCBpbiB0aGUgdHJhY2suXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgICAgIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBDb21wb25lbnRzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgY29tcG9uZW50cy5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCB0cmFjayA9IChmdW5jdGlvbiAoU3BsaWRlLCBDb21wb25lbnRzKSB7XG4gIC8qKlxyXG4gICAqIEhvbGQgdGhlIExheW91dCBjb21wb25lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuICB2YXIgTGF5b3V0O1xuICAvKipcclxuICAgKiBIb2xkIHRoZSBMYXlvdXQgY29tcG9uZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgRWxlbWVudHM7XG4gIC8qKlxyXG4gICAqIFN0b3JlIHRoZSBsaXN0IGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RWxlbWVudH1cclxuICAgKi9cblxuICB2YXIgbGlzdDtcbiAgLyoqXHJcbiAgICogV2hldGhlciB0aGUgY3VycmVudCBkaXJlY3Rpb24gaXMgdmVydGljYWwgb3Igbm90LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG5cbiAgdmFyIGlzVmVydGljYWwgPSBTcGxpZGUub3B0aW9ucy5kaXJlY3Rpb24gPT09IFRUQjtcbiAgLyoqXHJcbiAgICogV2hldGhlciB0aGUgc2xpZGVyIHR5cGUgaXMgRkFERSBvciBub3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cblxuICB2YXIgaXNGYWRlID0gU3BsaWRlLmlzKEZBREUpO1xuICAvKipcclxuICAgKiBXaGV0aGVyIHRoZSBzbGlkZXIgZGlyZWN0aW9uIGlzIFJUTCBvciBub3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cblxuICB2YXIgaXNSVEwgPSBTcGxpZGUub3B0aW9ucy5kaXJlY3Rpb24gPT09IFJUTDtcbiAgLyoqXHJcbiAgICogVGhpcyB3aWxsIGJlIHRydWUgd2hpbGUgdHJhbnNpdGlvbmluZyBmcm9tIHRoZSBsYXN0IGluZGV4IHRvIHRoZSBmaXJzdCBvbmUuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cblxuICB2YXIgaXNMb29wUGVuZGluZyA9IGZhbHNlO1xuICAvKipcclxuICAgKiBTaWduIGZvciB0aGUgZGlyZWN0aW9uLiBPbmx5IFJUTCBtb2RlIHVzZXMgdGhlIHBvc2l0aXZlIHNpZ24uXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuXG4gIHZhciBzaWduID0gaXNSVEwgPyAxIDogLTE7XG4gIC8qKlxyXG4gICAqIFRyYWNrIGNvbXBvbmVudCBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBUcmFjayA9IHtcbiAgICAvKipcclxuICAgICAqIE1ha2UgcHVibGljIHRoZSBzaWduIGRlZmluZWQgbG9jYWxseS5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXG4gICAgc2lnbjogc2lnbixcblxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgRWxlbWVudHMgPSBDb21wb25lbnRzLkVsZW1lbnRzO1xuICAgICAgTGF5b3V0ID0gQ29tcG9uZW50cy5MYXlvdXQ7XG4gICAgICBsaXN0ID0gRWxlbWVudHMubGlzdDtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgYWZ0ZXIgdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICogVGhlIHJlc2l6ZSBldmVudCBtdXN0IGJlIHJlZ2lzdGVyZWQgYWZ0ZXIgdGhlIExheW91dCdzIG9uZSBpcyBkb25lLlxyXG4gICAgICovXG4gICAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmICghaXNGYWRlKSB7XG4gICAgICAgIHRoaXMuanVtcCgwKTtcbiAgICAgICAgU3BsaWRlLm9uKCdtb3VudGVkIHJlc2l6ZSB1cGRhdGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzLmp1bXAoU3BsaWRlLmluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogR28gdG8gdGhlIGdpdmVuIGRlc3RpbmF0aW9uIGluZGV4LlxyXG4gICAgICogQWZ0ZXIgYXJyaXZpbmcgdGhlcmUsIHRoZSB0cmFjayBpcyBqdW1wIHRvIHRoZSBuZXcgaW5kZXggd2l0aG91dCBhbmltYXRpb24sIG1haW5seSBmb3IgbG9vcCBtb2RlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSAgZGVzdEluZGV4IC0gQSBkZXN0aW5hdGlvbiBpbmRleC5cclxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBjYW4gYmUgbmVnYXRpdmUgb3IgZ3JlYXRlciB0aGFuIHNsaWRlcyBsZW5ndGggZm9yIHJlYWNoaW5nIGNsb25lcy5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSAgbmV3SW5kZXggIC0gQW4gYWN0dWFsIG5ldyBpbmRleC4gVGhleSBhcmUgYWx3YXlzIHNhbWUgaW4gU2xpZGUgYW5kIFJld2luZCBtb2RlLlxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBzaWxlbnRseSAgLSBJZiB0cnVlLCBzdXBwcmVzcyBlbWl0dGluZyBldmVudHMuXHJcbiAgICAgKi9cbiAgICBnbzogZnVuY3Rpb24gZ28oZGVzdEluZGV4LCBuZXdJbmRleCwgc2lsZW50bHkpIHtcbiAgICAgIHZhciBuZXdQb3NpdGlvbiA9IGdldFRyaW1tZWRQb3NpdGlvbihkZXN0SW5kZXgpO1xuICAgICAgdmFyIHByZXZJbmRleCA9IFNwbGlkZS5pbmRleDsgLy8gUHJldmVudCBhbnkgYWN0aW9ucyB3aGlsZSB0cmFuc2l0aW9uaW5nIGZyb20gdGhlIGxhc3QgaW5kZXggdG8gdGhlIGZpcnN0IG9uZSBmb3IganVtcC5cblxuICAgICAgaWYgKFNwbGlkZS5TdGF0ZS5pcyhNT1ZJTkcpICYmIGlzTG9vcFBlbmRpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpc0xvb3BQZW5kaW5nID0gZGVzdEluZGV4ICE9PSBuZXdJbmRleDtcblxuICAgICAgaWYgKCFzaWxlbnRseSkge1xuICAgICAgICBTcGxpZGUuZW1pdCgnbW92ZScsIG5ld0luZGV4LCBwcmV2SW5kZXgsIGRlc3RJbmRleCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChNYXRoLmFicyhuZXdQb3NpdGlvbiAtIHRoaXMucG9zaXRpb24pID49IDEgfHwgaXNGYWRlKSB7XG4gICAgICAgIENvbXBvbmVudHMuVHJhbnNpdGlvbi5zdGFydChkZXN0SW5kZXgsIG5ld0luZGV4LCBwcmV2SW5kZXgsIHRoaXMudG9Db29yZChuZXdQb3NpdGlvbiksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBvblRyYW5zaXRpb25FbmQoZGVzdEluZGV4LCBuZXdJbmRleCwgcHJldkluZGV4LCBzaWxlbnRseSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGRlc3RJbmRleCAhPT0gcHJldkluZGV4ICYmIFNwbGlkZS5vcHRpb25zLnRyaW1TcGFjZSA9PT0gJ21vdmUnKSB7XG4gICAgICAgICAgQ29tcG9uZW50cy5Db250cm9sbGVyLmdvKGRlc3RJbmRleCArIGRlc3RJbmRleCAtIHByZXZJbmRleCwgc2lsZW50bHkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9uVHJhbnNpdGlvbkVuZChkZXN0SW5kZXgsIG5ld0luZGV4LCBwcmV2SW5kZXgsIHNpbGVudGx5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIE1vdmUgdGhlIHRyYWNrIHRvIHRoZSBzcGVjaWZpZWQgaW5kZXguXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gQSBkZXN0aW5hdGlvbiBpbmRleCB3aGVyZSB0aGUgdHJhY2sganVtcHMuXHJcbiAgICAgKi9cbiAgICBqdW1wOiBmdW5jdGlvbiBqdW1wKGluZGV4KSB7XG4gICAgICB0aGlzLnRyYW5zbGF0ZShnZXRUcmltbWVkUG9zaXRpb24oaW5kZXgpKTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIGxpc3QgcG9zaXRpb24gYnkgQ1NTIHRyYW5zbGF0ZSBwcm9wZXJ0eS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcG9zaXRpb24gLSBBIG5ldyBwb3NpdGlvbiB2YWx1ZS5cclxuICAgICAqL1xuICAgIHRyYW5zbGF0ZTogZnVuY3Rpb24gdHJhbnNsYXRlKHBvc2l0aW9uKSB7XG4gICAgICBhcHBseVN0eWxlKGxpc3QsIHtcbiAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVwiICsgKGlzVmVydGljYWwgPyAnWScgOiAnWCcpICsgXCIoXCIgKyBwb3NpdGlvbiArIFwicHgpXCJcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIENhbmNlbCB0aGUgdHJhbnNpdGlvbiBhbmQgc2V0IHRoZSBsaXN0IHBvc2l0aW9uLlxyXG4gICAgICogQWxzbywgbG9vcCB0aGUgc2xpZGVyIGlmIG5lY2Vzc2FyeS5cclxuICAgICAqL1xuICAgIGNhbmNlbDogZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgICAgaWYgKFNwbGlkZS5pcyhMT09QKSkge1xuICAgICAgICB0aGlzLnNoaWZ0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBFbnN1cmUgdGhlIGN1cnJlbnQgcG9zaXRpb24uXG4gICAgICAgIHRoaXMudHJhbnNsYXRlKHRoaXMucG9zaXRpb24pO1xuICAgICAgfVxuXG4gICAgICBhcHBseVN0eWxlKGxpc3QsIHtcbiAgICAgICAgdHJhbnNpdGlvbjogJydcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFNoaWZ0IHRoZSBzbGlkZXIgaWYgaXQgZXhjZWVkcyBib3JkZXJzIG9uIHRoZSBlZGdlLlxyXG4gICAgICovXG4gICAgc2hpZnQ6IGZ1bmN0aW9uIHNoaWZ0KCkge1xuICAgICAgdmFyIHBvc2l0aW9uID0gYWJzKHRoaXMucG9zaXRpb24pO1xuICAgICAgdmFyIGxlZnQgPSBhYnModGhpcy50b1Bvc2l0aW9uKDApKTtcbiAgICAgIHZhciByaWdodCA9IGFicyh0aGlzLnRvUG9zaXRpb24oU3BsaWRlLmxlbmd0aCkpO1xuICAgICAgdmFyIGlubmVyU2l6ZSA9IHJpZ2h0IC0gbGVmdDtcblxuICAgICAgaWYgKHBvc2l0aW9uIDwgbGVmdCkge1xuICAgICAgICBwb3NpdGlvbiArPSBpbm5lclNpemU7XG4gICAgICB9IGVsc2UgaWYgKHBvc2l0aW9uID4gcmlnaHQpIHtcbiAgICAgICAgcG9zaXRpb24gLT0gaW5uZXJTaXplO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRyYW5zbGF0ZShzaWduICogcG9zaXRpb24pO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFRyaW0gcmVkdW5kYW50IHNwYWNlcyBvbiB0aGUgbGVmdCBvciByaWdodCBlZGdlIGlmIG5lY2Vzc2FyeS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcG9zaXRpb24gLSBQb3NpdGlvbiB2YWx1ZSB0byBiZSB0cmltbWVkLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBUcmltbWVkIHBvc2l0aW9uLlxyXG4gICAgICovXG4gICAgdHJpbTogZnVuY3Rpb24gdHJpbShwb3NpdGlvbikge1xuICAgICAgaWYgKCFTcGxpZGUub3B0aW9ucy50cmltU3BhY2UgfHwgU3BsaWRlLmlzKExPT1ApKSB7XG4gICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGVkZ2UgPSBzaWduICogKExheW91dC50b3RhbFNpemUoKSAtIExheW91dC5zaXplIC0gTGF5b3V0LmdhcCk7XG4gICAgICByZXR1cm4gYmV0d2Vlbihwb3NpdGlvbiwgZWRnZSwgMCk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogQ2FsY3VsYXRlIHRoZSBjbG9zZXN0IHNsaWRlIGluZGV4IGZyb20gdGhlIGdpdmVuIHBvc2l0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwb3NpdGlvbiAtIEEgcG9zaXRpb24gY29udmVydGVkIHRvIGFuIHNsaWRlIGluZGV4LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBUaGUgY2xvc2VzdCBzbGlkZSBpbmRleC5cclxuICAgICAqL1xuICAgIHRvSW5kZXg6IGZ1bmN0aW9uIHRvSW5kZXgocG9zaXRpb24pIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgdmFyIG1pbkRpc3RhbmNlID0gSW5maW5pdHk7XG4gICAgICBFbGVtZW50cy5nZXRTbGlkZXModHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoU2xpZGUpIHtcbiAgICAgICAgdmFyIHNsaWRlSW5kZXggPSBTbGlkZS5pbmRleDtcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gYWJzKF90aGlzMi50b1Bvc2l0aW9uKHNsaWRlSW5kZXgpIC0gcG9zaXRpb24pO1xuXG4gICAgICAgIGlmIChkaXN0YW5jZSA8IG1pbkRpc3RhbmNlKSB7XG4gICAgICAgICAgbWluRGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICAgICAgICBpbmRleCA9IHNsaWRlSW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiBjb29yZGluYXRlcyBvYmplY3QgYnkgdGhlIGdpdmVuIHBvc2l0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwb3NpdGlvbiAtIEEgcG9zaXRpb24gdmFsdWUuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fSAtIEEgY29vcmRpbmF0ZXMgb2JqZWN0LlxyXG4gICAgICovXG4gICAgdG9Db29yZDogZnVuY3Rpb24gdG9Db29yZChwb3NpdGlvbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeDogaXNWZXJ0aWNhbCA/IDAgOiBwb3NpdGlvbixcbiAgICAgICAgeTogaXNWZXJ0aWNhbCA/IHBvc2l0aW9uIDogMFxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxjdWxhdGUgdGhlIHRyYWNrIHBvc2l0aW9uIGJ5IGEgc2xpZGUgaW5kZXguXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gU2xpZGUgaW5kZXguXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fSAtIENhbGN1bGF0ZWQgcG9zaXRpb24uXHJcbiAgICAgKi9cbiAgICB0b1Bvc2l0aW9uOiBmdW5jdGlvbiB0b1Bvc2l0aW9uKGluZGV4KSB7XG4gICAgICB2YXIgcG9zaXRpb24gPSBMYXlvdXQudG90YWxTaXplKGluZGV4KSAtIExheW91dC5zbGlkZVNpemUoaW5kZXgpIC0gTGF5b3V0LmdhcDtcbiAgICAgIHJldHVybiBzaWduICogKHBvc2l0aW9uICsgdGhpcy5vZmZzZXQoaW5kZXgpKTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgb2Zmc2V0IHZhbHVlLCBjb25zaWRlcmluZyBkaXJlY3Rpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIE9mZnNldCBhbW91bnQuXHJcbiAgICAgKi9cbiAgICBvZmZzZXQ6IGZ1bmN0aW9uIG9mZnNldChpbmRleCkge1xuICAgICAgdmFyIGZvY3VzID0gU3BsaWRlLm9wdGlvbnMuZm9jdXM7XG4gICAgICB2YXIgc2xpZGVTaXplID0gTGF5b3V0LnNsaWRlU2l6ZShpbmRleCk7XG5cbiAgICAgIGlmIChmb2N1cyA9PT0gJ2NlbnRlcicpIHtcbiAgICAgICAgcmV0dXJuIC0oTGF5b3V0LnNpemUgLSBzbGlkZVNpemUpIC8gMjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIC0ocGFyc2VJbnQoZm9jdXMpIHx8IDApICogKHNsaWRlU2l6ZSArIExheW91dC5nYXApO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgY3VycmVudCBwb3NpdGlvbi5cclxuICAgICAqIFRoaXMgcmV0dXJucyB0aGUgY29ycmVjdCBwb3NpdGlvbiBldmVuIHdoaWxlIHRyYW5zaXRpb25pbmcgYnkgQ1NTLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBDdXJyZW50IHBvc2l0aW9uLlxyXG4gICAgICovXG4gICAgZ2V0IHBvc2l0aW9uKCkge1xuICAgICAgdmFyIHByb3AgPSBpc1ZlcnRpY2FsID8gJ3RvcCcgOiBpc1JUTCA/ICdyaWdodCcgOiAnbGVmdCc7XG4gICAgICByZXR1cm4gZ2V0UmVjdChsaXN0KVtwcm9wXSAtIChnZXRSZWN0KEVsZW1lbnRzLnRyYWNrKVtwcm9wXSAtIExheW91dC5wYWRkaW5nW3Byb3BdICogc2lnbik7XG4gICAgfVxuXG4gIH07XG4gIC8qKlxyXG4gICAqIENhbGxlZCB3aGVuZXZlciBzbGlkZXMgYXJyaXZlIGF0IGEgZGVzdGluYXRpb24uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gIGRlc3RJbmRleCAtIEEgZGVzdGluYXRpb24gaW5kZXguXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9ICBuZXdJbmRleCAgLSBBIG5ldyBpbmRleC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gIHByZXZJbmRleCAtIEEgcHJldmlvdXMgaW5kZXguXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBzaWxlbnRseSAgLSBJZiB0cnVlLCBzdXBwcmVzcyBlbWl0dGluZyBldmVudHMuXHJcbiAgICovXG5cbiAgZnVuY3Rpb24gb25UcmFuc2l0aW9uRW5kKGRlc3RJbmRleCwgbmV3SW5kZXgsIHByZXZJbmRleCwgc2lsZW50bHkpIHtcbiAgICBhcHBseVN0eWxlKGxpc3QsIHtcbiAgICAgIHRyYW5zaXRpb246ICcnXG4gICAgfSk7XG4gICAgaXNMb29wUGVuZGluZyA9IGZhbHNlO1xuXG4gICAgaWYgKCFpc0ZhZGUpIHtcbiAgICAgIFRyYWNrLmp1bXAobmV3SW5kZXgpO1xuICAgIH1cblxuICAgIGlmICghc2lsZW50bHkpIHtcbiAgICAgIFNwbGlkZS5lbWl0KCdtb3ZlZCcsIG5ld0luZGV4LCBwcmV2SW5kZXgsIGRlc3RJbmRleCk7XG4gICAgfVxuICB9XG4gIC8qKlxyXG4gICAqIENvbnZlcnQgaW5kZXggdG8gdGhlIHRyaW1tZWQgcG9zaXRpb24uXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gVHJpbW1lZCBwb3NpdGlvbi5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGdldFRyaW1tZWRQb3NpdGlvbihpbmRleCkge1xuICAgIHJldHVybiBUcmFjay50cmltKFRyYWNrLnRvUG9zaXRpb24oaW5kZXgpKTtcbiAgfVxuXG4gIHJldHVybiBUcmFjaztcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvY2xvbmVzL2luZGV4LmpzXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgY2xvbmluZyBzb21lIHNsaWRlcyBmb3IgXCJsb29wXCIgbW9kZSBvZiB0aGUgdHJhY2suXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG5cblxuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGNsb25pbmcgc29tZSBzbGlkZXMgZm9yIFwibG9vcFwiIG1vZGUgb2YgdGhlIHRyYWNrLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlICAgICAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gQ29tcG9uZW50cyAtIEFuIG9iamVjdCBjb250YWluaW5nIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgY29tcG9uZW50IG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgY2xvbmVzID0gKGZ1bmN0aW9uIChTcGxpZGUsIENvbXBvbmVudHMpIHtcbiAgLyoqXHJcbiAgICogU3RvcmUgaW5mb3JtYXRpb24gb2YgYWxsIGNsb25lcy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtBcnJheX1cclxuICAgKi9cbiAgdmFyIGNsb25lcyA9IFtdO1xuICAvKipcclxuICAgKiBTdG9yZSB0aGUgY3VycmVudCBjbG9uZSBjb3VudCBvbiBvbmUgc2lkZS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXG5cbiAgdmFyIGNsb25lQ291bnQgPSAwO1xuICAvKipcclxuICAgKiBLZWVwIEVsZW1lbnRzIGNvbXBvbmVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIEVsZW1lbnRzID0gQ29tcG9uZW50cy5FbGVtZW50cztcbiAgLyoqXHJcbiAgICogQ2xvbmVzIGNvbXBvbmVudCBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBDbG9uZXMgPSB7XG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAoU3BsaWRlLmlzKExPT1ApKSB7XG4gICAgICAgIGluaXQoKTtcbiAgICAgICAgU3BsaWRlLm9uKCdyZWZyZXNoOmJlZm9yZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIH0pLm9uKCdyZWZyZXNoJywgaW5pdCkub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoY2xvbmVDb3VudCAhPT0gZ2V0Q2xvbmVDb3VudCgpKSB7XG4gICAgICAgICAgICAvLyBEZXN0cm95IGJlZm9yZSByZWZyZXNoIG5vdCB0byBjb2xsZWN0IGNsb25lcyBieSB0aGUgRWxlbWVudHMgY29tcG9uZW50LlxuICAgICAgICAgICAgX3RoaXMuZGVzdHJveSgpO1xuXG4gICAgICAgICAgICBTcGxpZGUucmVmcmVzaCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogRGVzdHJveS5cclxuICAgICAqL1xuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICBkb21fcmVtb3ZlKGNsb25lcyk7XG4gICAgICBjbG9uZXMgPSBbXTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gYWxsIGNsb25lcy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50W119IC0gQ2xvbmVkIGVsZW1lbnRzLlxyXG4gICAgICovXG4gICAgZ2V0IGNsb25lcygpIHtcbiAgICAgIHJldHVybiBjbG9uZXM7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIGNsb25lIGxlbmd0aC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gQSBsZW5ndGggb2YgY2xvbmVzLlxyXG4gICAgICovXG4gICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgIHJldHVybiBjbG9uZXMubGVuZ3RoO1xuICAgIH1cblxuICB9O1xuICAvKipcclxuICAgKiBJbml0aWFsaXphdGlvbi5cclxuICAgKi9cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIENsb25lcy5kZXN0cm95KCk7XG4gICAgY2xvbmVDb3VudCA9IGdldENsb25lQ291bnQoKTtcbiAgICBnZW5lcmF0ZUNsb25lcyhjbG9uZUNvdW50KTtcbiAgfVxuICAvKipcclxuICAgKiBHZW5lcmF0ZSBhbmQgYXBwZW5kL3ByZXBlbmQgY2xvbmVzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50IC0gVGhlIGhhbGYgbnVtYmVyIG9mIGNsb25lcy5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlQ2xvbmVzKGNvdW50KSB7XG4gICAgdmFyIGxlbmd0aCA9IEVsZW1lbnRzLmxlbmd0aCxcbiAgICAgICAgcmVnaXN0ZXIgPSBFbGVtZW50cy5yZWdpc3RlcjtcblxuICAgIGlmIChsZW5ndGgpIHtcbiAgICAgIHZhciBzbGlkZXMgPSBFbGVtZW50cy5zbGlkZXM7XG5cbiAgICAgIHdoaWxlIChzbGlkZXMubGVuZ3RoIDwgY291bnQpIHtcbiAgICAgICAgc2xpZGVzID0gc2xpZGVzLmNvbmNhdChzbGlkZXMpO1xuICAgICAgfSAvLyBDbG9uZXMgYWZ0ZXIgdGhlIGxhc3QgZWxlbWVudC5cblxuXG4gICAgICBzbGlkZXMuc2xpY2UoMCwgY291bnQpLmZvckVhY2goZnVuY3Rpb24gKGVsbSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGNsb25lID0gY2xvbmVEZWVwbHkoZWxtKTtcbiAgICAgICAgYXBwZW5kKEVsZW1lbnRzLmxpc3QsIGNsb25lKTtcbiAgICAgICAgY2xvbmVzLnB1c2goY2xvbmUpO1xuICAgICAgICByZWdpc3RlcihjbG9uZSwgaW5kZXggKyBsZW5ndGgsIGluZGV4ICUgbGVuZ3RoKTtcbiAgICAgIH0pOyAvLyBDbG9uZXMgYmVmb3JlIHRoZSBmaXJzdCBlbGVtZW50LlxuXG4gICAgICBzbGlkZXMuc2xpY2UoLWNvdW50KS5mb3JFYWNoKGZ1bmN0aW9uIChlbG0sIGluZGV4KSB7XG4gICAgICAgIHZhciBjbG9uZSA9IGNsb25lRGVlcGx5KGVsbSk7XG4gICAgICAgIGJlZm9yZShjbG9uZSwgc2xpZGVzWzBdKTtcbiAgICAgICAgY2xvbmVzLnB1c2goY2xvbmUpO1xuICAgICAgICByZWdpc3RlcihjbG9uZSwgaW5kZXggLSBjb3VudCwgKGxlbmd0aCArIGluZGV4IC0gY291bnQgJSBsZW5ndGgpICUgbGVuZ3RoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICAvKipcclxuICAgKiBSZXR1cm4gaGFsZiBjb3VudCBvZiBjbG9uZXMgdG8gYmUgZ2VuZXJhdGVkLlxyXG4gICAqIENsb25lIGNvdW50IGlzIGRldGVybWluZWQgYnk6XHJcbiAgICogLSBcImNsb25lc1wiIHZhbHVlIGluIHRoZSBvcHRpb25zLlxyXG4gICAqIC0gTnVtYmVyIG9mIHNsaWRlcyB0aGF0IGNhbiBiZSBwbGFjZWQgaW4gYSB2aWV3IGluIFwiZml4ZWRcIiBtb2RlLlxyXG4gICAqIC0gTWF4IHBhZ2VzIGEgZmxpY2sgYWN0aW9uIGNhbiBtb3ZlLlxyXG4gICAqIC0gV2hldGhlciB0aGUgc2xpZGUgbGVuZ3RoIGlzIGVub3VnaCBmb3IgcGVyUGFnZS5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge251bWJlcn0gLSBDb3VudCBmb3IgY2xvbmVzLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gZ2V0Q2xvbmVDb3VudCgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IFNwbGlkZS5vcHRpb25zO1xuXG4gICAgaWYgKG9wdGlvbnMuY2xvbmVzKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5jbG9uZXM7XG4gICAgfSAvLyBVc2UgdGhlIHNsaWRlIGxlbmd0aCBpbiBhdXRvV2lkdGggbW9kZSBiZWNhdXNlIHRoZSBudW1iZXIgY2Fubm90IGJlIGNhbGN1bGF0ZWQuXG5cblxuICAgIHZhciBiYXNlQ291bnQgPSBvcHRpb25zLmF1dG9XaWR0aCB8fCBvcHRpb25zLmF1dG9IZWlnaHQgPyBFbGVtZW50cy5sZW5ndGggOiBvcHRpb25zLnBlclBhZ2U7XG4gICAgdmFyIGRpbWVuc2lvbiA9IG9wdGlvbnMuZGlyZWN0aW9uID09PSBUVEIgPyAnSGVpZ2h0JyA6ICdXaWR0aCc7XG4gICAgdmFyIGZpeGVkU2l6ZSA9IHRvUGl4ZWwoU3BsaWRlLnJvb3QsIG9wdGlvbnNbXCJmaXhlZFwiICsgZGltZW5zaW9uXSk7XG5cbiAgICBpZiAoZml4ZWRTaXplKSB7XG4gICAgICAvLyBSb3VnaGx5IGNhbGN1bGF0ZSB0aGUgY291bnQuIFRoaXMgbmVlZHMgbm90IHRvIGJlIHN0cmljdC5cbiAgICAgIGJhc2VDb3VudCA9IE1hdGguY2VpbChFbGVtZW50cy50cmFja1tcImNsaWVudFwiICsgZGltZW5zaW9uXSAvIGZpeGVkU2l6ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJhc2VDb3VudCAqIChvcHRpb25zLmRyYWcgPyBvcHRpb25zLmZsaWNrTWF4UGFnZXMgKyAxIDogMSk7XG4gIH1cbiAgLyoqXHJcbiAgICogQ2xvbmUgZGVlcGx5IHRoZSBnaXZlbiBlbGVtZW50LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbG0gLSBBbiBlbGVtZW50IGJlaW5nIGR1cGxpY2F0ZWQuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtOb2RlfSAtIEEgY2xvbmVkIG5vZGUoZWxlbWVudCkuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBjbG9uZURlZXBseShlbG0pIHtcbiAgICB2YXIgY2xvbmUgPSBlbG0uY2xvbmVOb2RlKHRydWUpO1xuICAgIGFkZENsYXNzKGNsb25lLCBTcGxpZGUuY2xhc3Nlcy5jbG9uZSk7IC8vIElEIHNob3VsZCBub3QgYmUgZHVwbGljYXRlZC5cblxuICAgIHJlbW92ZUF0dHJpYnV0ZShjbG9uZSwgJ2lkJyk7XG4gICAgcmV0dXJuIGNsb25lO1xuICB9XG5cbiAgcmV0dXJuIENsb25lcztcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvbGF5b3V0L2RpcmVjdGlvbnMvaG9yaXpvbnRhbC5qc1xuLyoqXHJcbiAqIFRoZSByZXNvbHZlciBjb21wb25lbnQgZm9yIGhvcml6b250YWwgbGF5b3V0LlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuXG4vKipcclxuICogVGhlIHJlc29sdmVyIGNvbXBvbmVudCBmb3IgaG9yaXpvbnRhbCBsYXlvdXQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgICAgIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBDb21wb25lbnRzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgY29tcG9uZW50cy5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSByZXNvbHZlciBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IGhvcml6b250YWwgPSAoZnVuY3Rpb24gKFNwbGlkZSwgQ29tcG9uZW50cykge1xuICAvKipcclxuICAgKiBLZWVwIHRoZSBFbGVtZW50cyBjb21wb25lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqL1xuICB2YXIgRWxlbWVudHMgPSBDb21wb25lbnRzLkVsZW1lbnRzO1xuICAvKipcclxuICAgKiBLZWVwIHRoZSByb290IGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RWxlbWVudH1cclxuICAgKi9cblxuICB2YXIgcm9vdCA9IFNwbGlkZS5yb290O1xuICAvKipcclxuICAgKiBLZWVwIHRoZSB0cmFjayBlbGVtZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge0VsZW1lbnR9XHJcbiAgICovXG5cbiAgdmFyIHRyYWNrO1xuICAvKipcclxuICAgKiBLZWVwIHRoZSBsYXRlc3Qgb3B0aW9ucy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtFbGVtZW50fVxyXG4gICAqL1xuXG4gIHZhciBvcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG4gIHJldHVybiB7XG4gICAgLyoqXHJcbiAgICAgKiBNYXJnaW4gcHJvcGVydHkgbmFtZS5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgICovXG4gICAgbWFyZ2luOiAnbWFyZ2luJyArIChvcHRpb25zLmRpcmVjdGlvbiA9PT0gUlRMID8gJ0xlZnQnIDogJ1JpZ2h0JyksXG5cbiAgICAvKipcclxuICAgICAqIEFsd2F5cyAwIGJlY2F1c2UgdGhlIGhlaWdodCB3aWxsIGJlIGRldGVybWluZWQgYnkgaW5uZXIgY29udGVudHMuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xuICAgIGhlaWdodDogMCxcblxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6YXRpb24uXHJcbiAgICAgKi9cbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXNpemUgZ2FwIGFuZCBwYWRkaW5nLlxyXG4gICAgICogVGhpcyBtdXN0IGJlIGNhbGxlZCBvbiBpbml0LlxyXG4gICAgICovXG4gICAgcmVzaXplOiBmdW5jdGlvbiByZXNpemUoKSB7XG4gICAgICBvcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG4gICAgICB0cmFjayA9IEVsZW1lbnRzLnRyYWNrO1xuICAgICAgdGhpcy5nYXAgPSB0b1BpeGVsKHJvb3QsIG9wdGlvbnMuZ2FwKTtcbiAgICAgIHZhciBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nO1xuICAgICAgdmFyIGxlZnQgPSB0b1BpeGVsKHJvb3QsIHBhZGRpbmcubGVmdCB8fCBwYWRkaW5nKTtcbiAgICAgIHZhciByaWdodCA9IHRvUGl4ZWwocm9vdCwgcGFkZGluZy5yaWdodCB8fCBwYWRkaW5nKTtcbiAgICAgIHRoaXMucGFkZGluZyA9IHtcbiAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgcmlnaHQ6IHJpZ2h0XG4gICAgICB9O1xuICAgICAgYXBwbHlTdHlsZSh0cmFjaywge1xuICAgICAgICBwYWRkaW5nTGVmdDogdW5pdChsZWZ0KSxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiB1bml0KHJpZ2h0KVxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRvdGFsIHdpZHRoIGZyb20gdGhlIGxlZnQgb2YgdGhlIGxpc3QgdG8gdGhlIHJpZ2h0IG9mIHRoZSBzbGlkZSBzcGVjaWZpZWQgYnkgdGhlIHByb3ZpZGVkIGluZGV4LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIE9wdGlvbmFsLiBBIHNsaWRlIGluZGV4LiBJZiB1bmRlZmluZWQsIHRvdGFsIHdpZHRoIG9mIHRoZSBzbGlkZXIgd2lsbCBiZSByZXR1cm5lZC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gVG90YWwgd2lkdGggdG8gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIHNwZWNpZmllZCBzbGlkZSwgb3IgMCBmb3IgYW4gaW52YWxpZCBpbmRleC5cclxuICAgICAqL1xuICAgIHRvdGFsV2lkdGg6IGZ1bmN0aW9uIHRvdGFsV2lkdGgoaW5kZXgpIHtcbiAgICAgIGlmIChpbmRleCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGluZGV4ID0gU3BsaWRlLmxlbmd0aCAtIDE7XG4gICAgICB9XG5cbiAgICAgIHZhciBTbGlkZSA9IEVsZW1lbnRzLmdldFNsaWRlKGluZGV4KTtcbiAgICAgIHZhciB3aWR0aCA9IDA7XG5cbiAgICAgIGlmIChTbGlkZSkge1xuICAgICAgICB2YXIgc2xpZGVSZWN0ID0gZ2V0UmVjdChTbGlkZS5zbGlkZSk7XG4gICAgICAgIHZhciBsaXN0UmVjdCA9IGdldFJlY3QoRWxlbWVudHMubGlzdCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuZGlyZWN0aW9uID09PSBSVEwpIHtcbiAgICAgICAgICB3aWR0aCA9IGxpc3RSZWN0LnJpZ2h0IC0gc2xpZGVSZWN0LmxlZnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2lkdGggPSBzbGlkZVJlY3QucmlnaHQgLSBsaXN0UmVjdC5sZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgd2lkdGggKz0gdGhpcy5nYXA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdGhlIHNsaWRlIHdpZHRoIGluIHB4LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIFNsaWRlIGluZGV4LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBUaGUgc2xpZGUgd2lkdGguXHJcbiAgICAgKi9cbiAgICBzbGlkZVdpZHRoOiBmdW5jdGlvbiBzbGlkZVdpZHRoKGluZGV4KSB7XG4gICAgICBpZiAob3B0aW9ucy5hdXRvV2lkdGgpIHtcbiAgICAgICAgdmFyIFNsaWRlID0gRWxlbWVudHMuZ2V0U2xpZGUoaW5kZXgpO1xuICAgICAgICByZXR1cm4gU2xpZGUgPyBTbGlkZS5zbGlkZS5vZmZzZXRXaWR0aCA6IDA7XG4gICAgICB9XG5cbiAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMuZml4ZWRXaWR0aCB8fCAodGhpcy53aWR0aCArIHRoaXMuZ2FwKSAvIG9wdGlvbnMucGVyUGFnZSAtIHRoaXMuZ2FwO1xuICAgICAgcmV0dXJuIHRvUGl4ZWwocm9vdCwgd2lkdGgpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgc2xpZGUgaGVpZ2h0IGluIHB4LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBUaGUgc2xpZGUgaGVpZ2h0LlxyXG4gICAgICovXG4gICAgc2xpZGVIZWlnaHQ6IGZ1bmN0aW9uIHNsaWRlSGVpZ2h0KCkge1xuICAgICAgdmFyIGhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0IHx8IG9wdGlvbnMuZml4ZWRIZWlnaHQgfHwgdGhpcy53aWR0aCAqIG9wdGlvbnMuaGVpZ2h0UmF0aW87XG4gICAgICByZXR1cm4gdG9QaXhlbChyb290LCBoZWlnaHQpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiBzbGlkZXIgd2lkdGggd2l0aG91dCBwYWRkaW5nLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBDdXJyZW50IHNsaWRlciB3aWR0aC5cclxuICAgICAqL1xuICAgIGdldCB3aWR0aCgpIHtcbiAgICAgIHJldHVybiB0cmFjay5jbGllbnRXaWR0aCAtIHRoaXMucGFkZGluZy5sZWZ0IC0gdGhpcy5wYWRkaW5nLnJpZ2h0O1xuICAgIH1cblxuICB9O1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9sYXlvdXQvZGlyZWN0aW9ucy92ZXJ0aWNhbC5qc1xuLyoqXHJcbiAqIFRoZSByZXNvbHZlciBjb21wb25lbnQgZm9yIHZlcnRpY2FsIGxheW91dC5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cblxuLyoqXHJcbiAqIFRoZSByZXNvbHZlciBjb21wb25lbnQgZm9yIHZlcnRpY2FsIGxheW91dC5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudHMgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIHJlc29sdmVyIG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgdmVydGljYWwgPSAoZnVuY3Rpb24gKFNwbGlkZSwgQ29tcG9uZW50cykge1xuICAvKipcclxuICAgKiBLZWVwIHRoZSBFbGVtZW50cyBjb21wb25lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqL1xuICB2YXIgRWxlbWVudHMgPSBDb21wb25lbnRzLkVsZW1lbnRzO1xuICAvKipcclxuICAgKiBLZWVwIHRoZSByb290IGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RWxlbWVudH1cclxuICAgKi9cblxuICB2YXIgcm9vdCA9IFNwbGlkZS5yb290O1xuICAvKipcclxuICAgKiBLZWVwIHRoZSB0cmFjayBlbGVtZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge0VsZW1lbnR9XHJcbiAgICovXG5cbiAgdmFyIHRyYWNrO1xuICAvKipcclxuICAgKiBLZWVwIHRoZSBsYXRlc3Qgb3B0aW9ucy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtFbGVtZW50fVxyXG4gICAqL1xuXG4gIHZhciBvcHRpb25zO1xuICByZXR1cm4ge1xuICAgIC8qKlxyXG4gICAgICogTWFyZ2luIHByb3BlcnR5IG5hbWUuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICAqL1xuICAgIG1hcmdpbjogJ21hcmdpbkJvdHRvbScsXG5cbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemF0aW9uLlxyXG4gICAgICovXG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmVzaXplIGdhcCBhbmQgcGFkZGluZy5cclxuICAgICAqIFRoaXMgbXVzdCBiZSBjYWxsZWQgb24gaW5pdC5cclxuICAgICAqL1xuICAgIHJlc2l6ZTogZnVuY3Rpb24gcmVzaXplKCkge1xuICAgICAgb3B0aW9ucyA9IFNwbGlkZS5vcHRpb25zO1xuICAgICAgdHJhY2sgPSBFbGVtZW50cy50cmFjaztcbiAgICAgIHRoaXMuZ2FwID0gdG9QaXhlbChyb290LCBvcHRpb25zLmdhcCk7XG4gICAgICB2YXIgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZztcbiAgICAgIHZhciB0b3AgPSB0b1BpeGVsKHJvb3QsIHBhZGRpbmcudG9wIHx8IHBhZGRpbmcpO1xuICAgICAgdmFyIGJvdHRvbSA9IHRvUGl4ZWwocm9vdCwgcGFkZGluZy5ib3R0b20gfHwgcGFkZGluZyk7XG4gICAgICB0aGlzLnBhZGRpbmcgPSB7XG4gICAgICAgIHRvcDogdG9wLFxuICAgICAgICBib3R0b206IGJvdHRvbVxuICAgICAgfTtcbiAgICAgIGFwcGx5U3R5bGUodHJhY2ssIHtcbiAgICAgICAgcGFkZGluZ1RvcDogdW5pdCh0b3ApLFxuICAgICAgICBwYWRkaW5nQm90dG9tOiB1bml0KGJvdHRvbSlcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiB0b3RhbCBoZWlnaHQgZnJvbSB0aGUgdG9wIG9mIHRoZSBsaXN0IHRvIHRoZSBib3R0b20gb2YgdGhlIHNsaWRlIHNwZWNpZmllZCBieSB0aGUgcHJvdmlkZWQgaW5kZXguXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gT3B0aW9uYWwuIEEgc2xpZGUgaW5kZXguIElmIHVuZGVmaW5lZCwgdG90YWwgaGVpZ2h0IG9mIHRoZSBzbGlkZXIgd2lsbCBiZSByZXR1cm5lZC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gVG90YWwgaGVpZ2h0IHRvIHRoZSBib3R0b20gb2YgdGhlIHNwZWNpZmllZCBzbGlkZSwgb3IgMCBmb3IgYW4gaW52YWxpZCBpbmRleC5cclxuICAgICAqL1xuICAgIHRvdGFsSGVpZ2h0OiBmdW5jdGlvbiB0b3RhbEhlaWdodChpbmRleCkge1xuICAgICAgaWYgKGluZGV4ID09PSB2b2lkIDApIHtcbiAgICAgICAgaW5kZXggPSBTcGxpZGUubGVuZ3RoIC0gMTtcbiAgICAgIH1cblxuICAgICAgdmFyIFNsaWRlID0gRWxlbWVudHMuZ2V0U2xpZGUoaW5kZXgpO1xuXG4gICAgICBpZiAoU2xpZGUpIHtcbiAgICAgICAgcmV0dXJuIGdldFJlY3QoU2xpZGUuc2xpZGUpLmJvdHRvbSAtIGdldFJlY3QoRWxlbWVudHMubGlzdCkudG9wICsgdGhpcy5nYXA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAwO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgc2xpZGUgd2lkdGggaW4gcHguXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIFRoZSBzbGlkZSB3aWR0aC5cclxuICAgICAqL1xuICAgIHNsaWRlV2lkdGg6IGZ1bmN0aW9uIHNsaWRlV2lkdGgoKSB7XG4gICAgICByZXR1cm4gdG9QaXhlbChyb290LCBvcHRpb25zLmZpeGVkV2lkdGggfHwgdGhpcy53aWR0aCk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBzbGlkZSBoZWlnaHQgaW4gcHguXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gU2xpZGUgaW5kZXguXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIFRoZSBzbGlkZSBoZWlnaHQuXHJcbiAgICAgKi9cbiAgICBzbGlkZUhlaWdodDogZnVuY3Rpb24gc2xpZGVIZWlnaHQoaW5kZXgpIHtcbiAgICAgIGlmIChvcHRpb25zLmF1dG9IZWlnaHQpIHtcbiAgICAgICAgdmFyIFNsaWRlID0gRWxlbWVudHMuZ2V0U2xpZGUoaW5kZXgpO1xuICAgICAgICByZXR1cm4gU2xpZGUgPyBTbGlkZS5zbGlkZS5vZmZzZXRIZWlnaHQgOiAwO1xuICAgICAgfVxuXG4gICAgICB2YXIgaGVpZ2h0ID0gb3B0aW9ucy5maXhlZEhlaWdodCB8fCAodGhpcy5oZWlnaHQgKyB0aGlzLmdhcCkgLyBvcHRpb25zLnBlclBhZ2UgLSB0aGlzLmdhcDtcbiAgICAgIHJldHVybiB0b1BpeGVsKHJvb3QsIGhlaWdodCk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHNsaWRlciB3aWR0aCB3aXRob3V0IHBhZGRpbmcuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIEN1cnJlbnQgc2xpZGVyIHdpZHRoLlxyXG4gICAgICovXG4gICAgZ2V0IHdpZHRoKCkge1xuICAgICAgcmV0dXJuIHRyYWNrLmNsaWVudFdpZHRoO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiBzbGlkZSBoZWlnaHQgd2l0aG91dCBwYWRkaW5nLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBTbGlkZXIgaGVpZ2h0LlxyXG4gICAgICovXG4gICAgZ2V0IGhlaWdodCgpIHtcbiAgICAgIHZhciBoZWlnaHQgPSBvcHRpb25zLmhlaWdodCB8fCB0aGlzLndpZHRoICogb3B0aW9ucy5oZWlnaHRSYXRpbztcbiAgICAgIGV4aXN0KGhlaWdodCwgJ1wiaGVpZ2h0XCIgb3IgXCJoZWlnaHRSYXRpb1wiIGlzIG1pc3NpbmcuJyk7XG4gICAgICByZXR1cm4gdG9QaXhlbChyb290LCBoZWlnaHQpIC0gdGhpcy5wYWRkaW5nLnRvcCAtIHRoaXMucGFkZGluZy5ib3R0b207XG4gICAgfVxuXG4gIH07XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy91dGlscy90aW1lLmpzXG4vKipcclxuICogQSBwYWNrYWdlIG9mIHV0aWxpdHkgZnVuY3Rpb25zIHJlbGF0ZWQgd2l0aCB0aW1lLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cbi8qKlxyXG4gKiBTaW1wbGUgdGhyb3R0bGUgZnVuY3Rpb24gdGhhdCBjb250cm9scyBob3cgb2Z0ZW4gdGhlIGdpdmVuIGZ1bmN0aW9uIGlzIGV4ZWN1dGVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jIC0gQSBmdW5jdGlvbiB0byBiZSB0aHJvdHRsZWQuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSAgIHdhaXQgLSBUaW1lIGluIG1pbGxpc2Vjb25kIGZvciBpbnRlcnZhbCBvZiBleGVjdXRpb24uXHJcbiAqXHJcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSAtIEEgZGVib3VuY2VkIGZ1bmN0aW9uLlxyXG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHdhaXQpIHtcbiAgdmFyIHRpbWVvdXQ7IC8vIERlY2xhcmUgZnVuY3Rpb24gYnkgdGhlIFwiZnVuY3Rpb25cIiBrZXl3b3JkIHRvIHByZXZlbnQgXCJ0aGlzXCIgZnJvbSBiZWluZyBpbmhlcml0ZWQuXG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRpbWVvdXQpIHtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuYygpO1xuICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIH0sIHdhaXQpO1xuICAgIH1cbiAgfTtcbn1cbi8qKlxyXG4gKiBDdXN0b20gc2V0SW50ZXJ2YWwgZnVuY3Rpb24gdGhhdCBwcm92aWRlcyBwcm9ncmVzcyByYXRlIGFzIGNhbGxiYWNrLlxyXG4gKlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIEEgY2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgZXZlcnkgdGltZSB0aGUgaW50ZXJ2YWwgdGltZSBwYXNzZXMuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSAgIGludGVydmFsIC0gSW50ZXJ2YWwgZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzLlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9ncmVzcyAtIEEgY2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgd2hlbmV2ZXIgdGhlIHByb2dyZXNzIGdvZXMuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBBbiBvYmplY3QgY29udGFpbmluZyBwbGF5KCkgYW5kIHBhdXNlKCkgZnVuY3Rpb25zLlxyXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlSW50ZXJ2YWwoY2FsbGJhY2ssIGludGVydmFsLCBwcm9ncmVzcykge1xuICB2YXIgX3dpbmRvdyA9IHdpbmRvdyxcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IF93aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuICB2YXIgc3RhcnQsXG4gICAgICBlbGFwc2UsXG4gICAgICByYXRlLFxuICAgICAgX3BhdXNlID0gdHJ1ZTtcblxuICB2YXIgc3RlcCA9IGZ1bmN0aW9uIHN0ZXAodGltZXN0YW1wKSB7XG4gICAgaWYgKCFfcGF1c2UpIHtcbiAgICAgIGlmICghc3RhcnQpIHtcbiAgICAgICAgc3RhcnQgPSB0aW1lc3RhbXA7XG5cbiAgICAgICAgaWYgKHJhdGUgJiYgcmF0ZSA8IDEpIHtcbiAgICAgICAgICBzdGFydCAtPSByYXRlICogaW50ZXJ2YWw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZWxhcHNlID0gdGltZXN0YW1wIC0gc3RhcnQ7XG4gICAgICByYXRlID0gZWxhcHNlIC8gaW50ZXJ2YWw7XG5cbiAgICAgIGlmIChlbGFwc2UgPj0gaW50ZXJ2YWwpIHtcbiAgICAgICAgc3RhcnQgPSAwO1xuICAgICAgICByYXRlID0gMTtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2dyZXNzKSB7XG4gICAgICAgIHByb2dyZXNzKHJhdGUpO1xuICAgICAgfVxuXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcGF1c2U6IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgX3BhdXNlID0gdHJ1ZTtcbiAgICAgIHN0YXJ0ID0gMDtcbiAgICB9LFxuICAgIHBsYXk6IGZ1bmN0aW9uIHBsYXkocmVzZXQpIHtcbiAgICAgIHN0YXJ0ID0gMDtcblxuICAgICAgaWYgKHJlc2V0KSB7XG4gICAgICAgIHJhdGUgPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3BhdXNlKSB7XG4gICAgICAgIF9wYXVzZSA9IGZhbHNlO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvbGF5b3V0L2luZGV4LmpzXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgaGFuZGluZyBzbGlkZSBsYXlvdXRzIGFuZCB0aGVpciBzaXplcy5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cblxuXG5cblxuXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgaGFuZGluZyBzbGlkZSBsYXlvdXRzIGFuZCB0aGVpciBzaXplcy5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudHMgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IGxheW91dCA9IChmdW5jdGlvbiAoU3BsaWRlLCBDb21wb25lbnRzKSB7XG4gIC8qKlxyXG4gICAqIEtlZXAgdGhlIEVsZW1lbnRzIGNvbXBvbmVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICovXG4gIHZhciBFbGVtZW50cyA9IENvbXBvbmVudHMuRWxlbWVudHM7XG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdGhlIHNsaWRlciBpcyB2ZXJ0aWNhbCBvciBub3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cblxuICB2YXIgaXNWZXJ0aWNhbCA9IFNwbGlkZS5vcHRpb25zLmRpcmVjdGlvbiA9PT0gVFRCO1xuICAvKipcclxuICAgKiBMYXlvdXQgY29tcG9uZW50IG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIExheW91dCA9IG9iamVjdF9hc3NpZ24oe1xuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgYmluZCgpO1xuICAgICAgaW5pdCgpOyAvLyBUaGUgd29yZCBcInNpemVcIiBtZWFucyB3aWR0aCBmb3IgYSBob3Jpem9udGFsIHNsaWRlciBhbmQgaGVpZ2h0IGZvciBhIHZlcnRpY2FsIHNsaWRlci5cblxuICAgICAgdGhpcy50b3RhbFNpemUgPSBpc1ZlcnRpY2FsID8gdGhpcy50b3RhbEhlaWdodCA6IHRoaXMudG90YWxXaWR0aDtcbiAgICAgIHRoaXMuc2xpZGVTaXplID0gaXNWZXJ0aWNhbCA/IHRoaXMuc2xpZGVIZWlnaHQgOiB0aGlzLnNsaWRlV2lkdGg7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogRGVzdHJveSB0aGUgY29tcG9uZW50LlxyXG4gICAgICovXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIHJlbW92ZUF0dHJpYnV0ZShbRWxlbWVudHMubGlzdCwgRWxlbWVudHMudHJhY2tdLCAnc3R5bGUnKTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdGhlIHNsaWRlciBoZWlnaHQgb24gdGhlIHZlcnRpY2FsIG1vZGUgb3Igd2lkdGggb24gdGhlIGhvcml6b250YWwgbW9kZS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAgICAgKi9cbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgIHJldHVybiBpc1ZlcnRpY2FsID8gdGhpcy5oZWlnaHQgOiB0aGlzLndpZHRoO1xuICAgIH1cblxuICB9LCBpc1ZlcnRpY2FsID8gdmVydGljYWwoU3BsaWRlLCBDb21wb25lbnRzKSA6IGhvcml6b250YWwoU3BsaWRlLCBDb21wb25lbnRzKSk7XG4gIC8qKlxyXG4gICAqIEluaXQgc2xpZGVyIHN0eWxlcyBhY2NvcmRpbmcgdG8gb3B0aW9ucy5cclxuICAgKi9cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIExheW91dC5pbml0KCk7XG4gICAgYXBwbHlTdHlsZShTcGxpZGUucm9vdCwge1xuICAgICAgbWF4V2lkdGg6IHVuaXQoU3BsaWRlLm9wdGlvbnMud2lkdGgpXG4gICAgfSk7XG4gICAgRWxlbWVudHMuZWFjaChmdW5jdGlvbiAoU2xpZGUpIHtcbiAgICAgIFNsaWRlLnNsaWRlLnN0eWxlW0xheW91dC5tYXJnaW5dID0gdW5pdChMYXlvdXQuZ2FwKTtcbiAgICB9KTtcbiAgICByZXNpemUoKTtcbiAgfVxuICAvKipcclxuICAgKiBMaXN0ZW4gdGhlIHJlc2l6ZSBuYXRpdmUgZXZlbnQgd2l0aCB0aHJvdHRsZS5cclxuICAgKiBJbml0aWFsaXplIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkIG9yIG9wdGlvbnMgYXJlIHVwZGF0ZWQuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBiaW5kKCkge1xuICAgIFNwbGlkZS5vbigncmVzaXplIGxvYWQnLCB0aHJvdHRsZShmdW5jdGlvbiAoKSB7XG4gICAgICBTcGxpZGUuZW1pdCgncmVzaXplJyk7XG4gICAgfSwgU3BsaWRlLm9wdGlvbnMudGhyb3R0bGUpLCB3aW5kb3cpLm9uKCdyZXNpemUnLCByZXNpemUpLm9uKCd1cGRhdGVkIHJlZnJlc2gnLCBpbml0KTtcbiAgfVxuICAvKipcclxuICAgKiBSZXNpemUgdGhlIHRyYWNrIGFuZCBzbGlkZSBlbGVtZW50cy5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHJlc2l6ZSgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IFNwbGlkZS5vcHRpb25zO1xuICAgIExheW91dC5yZXNpemUoKTtcbiAgICBhcHBseVN0eWxlKEVsZW1lbnRzLnRyYWNrLCB7XG4gICAgICBoZWlnaHQ6IHVuaXQoTGF5b3V0LmhlaWdodClcbiAgICB9KTtcbiAgICB2YXIgc2xpZGVIZWlnaHQgPSBvcHRpb25zLmF1dG9IZWlnaHQgPyBudWxsIDogdW5pdChMYXlvdXQuc2xpZGVIZWlnaHQoKSk7XG4gICAgRWxlbWVudHMuZWFjaChmdW5jdGlvbiAoU2xpZGUpIHtcbiAgICAgIGFwcGx5U3R5bGUoU2xpZGUuY29udGFpbmVyLCB7XG4gICAgICAgIGhlaWdodDogc2xpZGVIZWlnaHRcbiAgICAgIH0pO1xuICAgICAgYXBwbHlTdHlsZShTbGlkZS5zbGlkZSwge1xuICAgICAgICB3aWR0aDogb3B0aW9ucy5hdXRvV2lkdGggPyBudWxsIDogdW5pdChMYXlvdXQuc2xpZGVXaWR0aChTbGlkZS5pbmRleCkpLFxuICAgICAgICBoZWlnaHQ6IFNsaWRlLmNvbnRhaW5lciA/IG51bGwgOiBzbGlkZUhlaWdodFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgU3BsaWRlLmVtaXQoJ3Jlc2l6ZWQnKTtcbiAgfVxuXG4gIHJldHVybiBMYXlvdXQ7XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL2RyYWcvaW5kZXguanNcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBzdXBwb3J0aW5nIG1vdXNlIGRyYWcgYW5kIHN3aXBlLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuXG5cblxudmFyIGRyYWdfYWJzID0gTWF0aC5hYnM7XG4vKipcclxuICogSWYgdGhlIGFic29sdXRlIHZlbG9jaXR5IGlzIGdyZWF0ZXIgdGhhbnQgdGhpcyB2YWx1ZSxcclxuICogYSBzbGlkZXIgYWx3YXlzIGdvZXMgdG8gYSBkaWZmZXJlbnQgc2xpZGUgYWZ0ZXIgZHJhZywgbm90IGFsbG93ZWQgdG8gc3RheSBvbiBhIGN1cnJlbnQgc2xpZGUuXHJcbiAqL1xuXG52YXIgTUlOX1ZFTE9DSVRZID0gMC4xO1xuLyoqXHJcbiAqIEFkanVzdCBob3cgbXVjaCB0aGUgdHJhY2sgY2FuIGJlIHB1bGxlZCBvbiB0aGUgZmlyc3Qgb3IgbGFzdCBwYWdlLlxyXG4gKiBUaGUgbGFyZ2VyIG51bWJlciB0aGlzIGlzLCB0aGUgZmFydGhlciB0aGUgdHJhY2sgbW92ZXMuXHJcbiAqIFRoaXMgc2hvdWxkIGJlIGFyb3VuZCA1IC0gOS5cclxuICpcclxuICogQHR5cGUge251bWJlcn1cclxuICovXG5cbnZhciBGUklDVElPTl9SRURVQ0VSID0gNztcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IHN1cHBvcnRpbmcgbW91c2UgZHJhZyBhbmQgc3dpcGUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgICAgIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBDb21wb25lbnRzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgY29tcG9uZW50cy5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBkcmFnID0gKGZ1bmN0aW9uIChTcGxpZGUsIENvbXBvbmVudHMpIHtcbiAgLyoqXHJcbiAgICogU3RvcmUgdGhlIE1vdmUgY29tcG9uZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cbiAgdmFyIFRyYWNrID0gQ29tcG9uZW50cy5UcmFjaztcbiAgLyoqXHJcbiAgICogU3RvcmUgdGhlIENvbnRyb2xsZXIgY29tcG9uZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgQ29udHJvbGxlciA9IENvbXBvbmVudHMuQ29udHJvbGxlcjtcbiAgLyoqXHJcbiAgICogQ29vcmRpbmF0ZSBvZiB0aGUgdHJhY2sgb24gc3RhcnRpbmcgZHJhZy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIHN0YXJ0Q29vcmQ7XG4gIC8qKlxyXG4gICAqIEFuYWx5emVkIGluZm8gb24gc3RhcnRpbmcgZHJhZy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R8bnVsbH1cclxuICAgKi9cblxuICB2YXIgc3RhcnRJbmZvO1xuICAvKipcclxuICAgKiBBbmFseXplZCBpbmZvIGJlaW5nIHVwZGF0ZWQgd2hpbGUgZHJhZ2dpbmcvc3dpcGluZy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIGN1cnJlbnRJbmZvO1xuICAvKipcclxuICAgKiBEZXRlcm1pbmUgd2hldGhlciBzbGlkZXMgYXJlIGJlaW5nIGRyYWdnZWQgb3Igbm90LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG5cbiAgdmFyIGlzRHJhZ2dpbmc7XG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdGhlIHNsaWRlciBkaXJlY3Rpb24gaXMgdmVydGljYWwgb3Igbm90LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG5cbiAgdmFyIGlzVmVydGljYWwgPSBTcGxpZGUub3B0aW9ucy5kaXJlY3Rpb24gPT09IFRUQjtcbiAgLyoqXHJcbiAgICogQXhpcyBmb3IgdGhlIGRpcmVjdGlvbi5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICovXG5cbiAgdmFyIGF4aXMgPSBpc1ZlcnRpY2FsID8gJ3knIDogJ3gnO1xuICAvKipcclxuICAgKiBEcmFnIGNvbXBvbmVudCBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBEcmFnID0ge1xuICAgIC8qKlxyXG4gICAgICogV2hldGhlciBkcmFnZ2luZyBpcyBkaXNhYmxlZCBvciBub3QuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgKi9cbiAgICBkaXNhYmxlZDogZmFsc2UsXG5cbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBFbGVtZW50cyA9IENvbXBvbmVudHMuRWxlbWVudHM7XG4gICAgICB2YXIgdHJhY2sgPSBFbGVtZW50cy50cmFjaztcbiAgICAgIFNwbGlkZS5vbigndG91Y2hzdGFydCBtb3VzZWRvd24nLCBzdGFydCwgdHJhY2spLm9uKCd0b3VjaG1vdmUgbW91c2Vtb3ZlJywgbW92ZSwgdHJhY2ssIHtcbiAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgIH0pLm9uKCd0b3VjaGVuZCB0b3VjaGNhbmNlbCBtb3VzZWxlYXZlIG1vdXNldXAgZHJhZ2VuZCcsIGVuZCwgdHJhY2spLm9uKCdtb3VudGVkIHJlZnJlc2gnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFByZXZlbnQgZHJhZ2dpbmcgYW4gaW1hZ2Ugb3IgYW5jaG9yIGl0c2VsZi5cbiAgICAgICAgZWFjaChFbGVtZW50cy5saXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZywgYScpLCBmdW5jdGlvbiAoZWxtKSB7XG4gICAgICAgICAgU3BsaWRlLm9mZignZHJhZ3N0YXJ0JywgZWxtKS5vbignZHJhZ3N0YXJ0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9LCBlbG0sIHtcbiAgICAgICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSkub24oJ21vdW50ZWQgdXBkYXRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuZGlzYWJsZWQgPSAhU3BsaWRlLm9wdGlvbnMuZHJhZztcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgLyoqXHJcbiAgICogQ2FsbGVkIHdoZW4gdGhlIHRyYWNrIHN0YXJ0cyB0byBiZSBkcmFnZ2VkLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtUb3VjaEV2ZW50fE1vdXNlRXZlbnR9IGUgLSBUb3VjaEV2ZW50IG9yIE1vdXNlRXZlbnQgb2JqZWN0LlxyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHN0YXJ0KGUpIHtcbiAgICBpZiAoIURyYWcuZGlzYWJsZWQgJiYgIWlzRHJhZ2dpbmcpIHtcbiAgICAgIC8vIFRoZXNlIHByYW1zIGFyZSB1c2VkIHRvIGV2YWx1YXRlIHdoZXRoZXIgdGhlIHNsaWRlciBzaG91bGQgc3RhcnQgbW92aW5nLlxuICAgICAgaW5pdChlKTtcbiAgICB9XG4gIH1cbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZSBwYXJhbWV0ZXJzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtUb3VjaEV2ZW50fE1vdXNlRXZlbnR9IGUgLSBUb3VjaEV2ZW50IG9yIE1vdXNlRXZlbnQgb2JqZWN0LlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gaW5pdChlKSB7XG4gICAgc3RhcnRDb29yZCA9IFRyYWNrLnRvQ29vcmQoVHJhY2sucG9zaXRpb24pO1xuICAgIHN0YXJ0SW5mbyA9IGFuYWx5emUoZSwge30pO1xuICAgIGN1cnJlbnRJbmZvID0gc3RhcnRJbmZvO1xuICB9XG4gIC8qKlxyXG4gICAqIENhbGxlZCB3aGlsZSB0aGUgdHJhY2sgYmVpbmcgZHJhZ2dlZC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7VG91Y2hFdmVudHxNb3VzZUV2ZW50fSBlIC0gVG91Y2hFdmVudCBvciBNb3VzZUV2ZW50IG9iamVjdC5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIG1vdmUoZSkge1xuICAgIGlmIChzdGFydEluZm8pIHtcbiAgICAgIGN1cnJlbnRJbmZvID0gYW5hbHl6ZShlLCBzdGFydEluZm8pO1xuXG4gICAgICBpZiAoaXNEcmFnZ2luZykge1xuICAgICAgICBpZiAoZS5jYW5jZWxhYmxlKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFTcGxpZGUuaXMoRkFERSkpIHtcbiAgICAgICAgICB2YXIgcG9zaXRpb24gPSBzdGFydENvb3JkW2F4aXNdICsgY3VycmVudEluZm8ub2Zmc2V0W2F4aXNdO1xuICAgICAgICAgIFRyYWNrLnRyYW5zbGF0ZShyZXNpc3QocG9zaXRpb24pKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHNob3VsZE1vdmUoY3VycmVudEluZm8pKSB7XG4gICAgICAgICAgU3BsaWRlLmVtaXQoJ2RyYWcnLCBzdGFydEluZm8pO1xuICAgICAgICAgIGlzRHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICAgIFRyYWNrLmNhbmNlbCgpOyAvLyBUaGVzZSBwYXJhbXMgYXJlIGFjdHVhbCBkcmFnIGRhdGEuXG5cbiAgICAgICAgICBpbml0KGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxyXG4gICAqIERldGVybWluZSB3aGV0aGVyIHRvIHN0YXJ0IG1vdmluZyB0aGUgdHJhY2sgb3Igbm90IGJ5IGRyYWcgYW5nbGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gaW5mbyAtIEFuIGluZm9ybWF0aW9uIG9iamVjdC5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gVHJ1ZSBpZiB0aGUgdHJhY2sgc2hvdWxkIGJlIG1vdmVkIG9yIGZhbHNlIGlmIG5vdC5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHNob3VsZE1vdmUoX3JlZikge1xuICAgIHZhciBvZmZzZXQgPSBfcmVmLm9mZnNldDtcblxuICAgIGlmIChTcGxpZGUuU3RhdGUuaXMoTU9WSU5HKSAmJiBTcGxpZGUub3B0aW9ucy53YWl0Rm9yVHJhbnNpdGlvbikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBhbmdsZSA9IE1hdGguYXRhbihkcmFnX2FicyhvZmZzZXQueSkgLyBkcmFnX2FicyhvZmZzZXQueCkpICogMTgwIC8gTWF0aC5QSTtcblxuICAgIGlmIChpc1ZlcnRpY2FsKSB7XG4gICAgICBhbmdsZSA9IDkwIC0gYW5nbGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFuZ2xlIDwgU3BsaWRlLm9wdGlvbnMuZHJhZ0FuZ2xlVGhyZXNob2xkO1xuICB9XG4gIC8qKlxyXG4gICAqIFJlc2lzdCBkcmFnZ2luZyB0aGUgdHJhY2sgb24gdGhlIGZpcnN0L2xhc3QgcGFnZSBiZWNhdXNlIHRoZXJlIGlzIG5vIG1vcmUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gcG9zaXRpb24gLSBBIHBvc2l0aW9uIGJlaW5nIGFwcGxpZWQgdG8gdGhlIHRyYWNrLlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7T2JqZWN0fSAtIEFkanVzdGVkIHBvc2l0aW9uLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gcmVzaXN0KHBvc2l0aW9uKSB7XG4gICAgaWYgKFNwbGlkZS5pcyhTTElERSkpIHtcbiAgICAgIHZhciBzaWduID0gVHJhY2suc2lnbjtcblxuICAgICAgdmFyIF9zdGFydCA9IHNpZ24gKiBUcmFjay50cmltKFRyYWNrLnRvUG9zaXRpb24oMCkpO1xuXG4gICAgICB2YXIgX2VuZCA9IHNpZ24gKiBUcmFjay50cmltKFRyYWNrLnRvUG9zaXRpb24oQ29udHJvbGxlci5lZGdlSW5kZXgpKTtcblxuICAgICAgcG9zaXRpb24gKj0gc2lnbjtcblxuICAgICAgaWYgKHBvc2l0aW9uIDwgX3N0YXJ0KSB7XG4gICAgICAgIHBvc2l0aW9uID0gX3N0YXJ0IC0gRlJJQ1RJT05fUkVEVUNFUiAqIE1hdGgubG9nKF9zdGFydCAtIHBvc2l0aW9uKTtcbiAgICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPiBfZW5kKSB7XG4gICAgICAgIHBvc2l0aW9uID0gX2VuZCArIEZSSUNUSU9OX1JFRFVDRVIgKiBNYXRoLmxvZyhwb3NpdGlvbiAtIF9lbmQpO1xuICAgICAgfVxuXG4gICAgICBwb3NpdGlvbiAqPSBzaWduO1xuICAgIH1cblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuICAvKipcclxuICAgKiBDYWxsZWQgd2hlbiBkcmFnZ2luZyBlbmRzLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gZW5kKCkge1xuICAgIHN0YXJ0SW5mbyA9IG51bGw7XG5cbiAgICBpZiAoaXNEcmFnZ2luZykge1xuICAgICAgU3BsaWRlLmVtaXQoJ2RyYWdnZWQnLCBjdXJyZW50SW5mbyk7XG4gICAgICBnbyhjdXJyZW50SW5mbyk7XG4gICAgICBpc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIC8qKlxyXG4gICAqIEdvIHRvIHRoZSBzbGlkZSBkZXRlcm1pbmVkIGJ5IHRoZSBhbmFseXplZCBkYXRhLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGluZm8gLSBBbiBpbmZvIG9iamVjdC5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGdvKGluZm8pIHtcbiAgICB2YXIgdmVsb2NpdHkgPSBpbmZvLnZlbG9jaXR5W2F4aXNdO1xuICAgIHZhciBhYnNWID0gZHJhZ19hYnModmVsb2NpdHkpO1xuXG4gICAgaWYgKGFic1YgPiAwKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IFNwbGlkZS5vcHRpb25zO1xuICAgICAgdmFyIGluZGV4ID0gU3BsaWRlLmluZGV4O1xuICAgICAgdmFyIHNpZ24gPSB2ZWxvY2l0eSA8IDAgPyAtMSA6IDE7XG4gICAgICB2YXIgZGVzdEluZGV4ID0gaW5kZXg7XG5cbiAgICAgIGlmICghU3BsaWRlLmlzKEZBREUpKSB7XG4gICAgICAgIHZhciBkZXN0aW5hdGlvbiA9IFRyYWNrLnBvc2l0aW9uO1xuXG4gICAgICAgIGlmIChhYnNWID4gb3B0aW9ucy5mbGlja1ZlbG9jaXR5VGhyZXNob2xkICYmIGRyYWdfYWJzKGluZm8ub2Zmc2V0W2F4aXNdKSA8IG9wdGlvbnMuc3dpcGVEaXN0YW5jZVRocmVzaG9sZCkge1xuICAgICAgICAgIGRlc3RpbmF0aW9uICs9IHNpZ24gKiBNYXRoLm1pbihhYnNWICogb3B0aW9ucy5mbGlja1Bvd2VyLCBDb21wb25lbnRzLkxheW91dC5zaXplICogKG9wdGlvbnMuZmxpY2tNYXhQYWdlcyB8fCAxKSk7XG4gICAgICAgIH1cblxuICAgICAgICBkZXN0SW5kZXggPSBUcmFjay50b0luZGV4KGRlc3RpbmF0aW9uKTtcbiAgICAgIH1cbiAgICAgIC8qXHJcbiAgICAgICAqIERvIG5vdCBhbGxvdyB0aGUgdHJhY2sgdG8gZ28gdG8gYSBwcmV2aW91cyBwb3NpdGlvbiBpZiB0aGVyZSBpcyBlbm91Z2ggdmVsb2NpdHkuXHJcbiAgICAgICAqIEFsd2F5cyB1c2UgdGhlIGFkamFjZW50IGluZGV4IGZvciB0aGUgZmFkZSBtb2RlLlxyXG4gICAgICAgKi9cblxuXG4gICAgICBpZiAoZGVzdEluZGV4ID09PSBpbmRleCAmJiBhYnNWID4gTUlOX1ZFTE9DSVRZKSB7XG4gICAgICAgIGRlc3RJbmRleCA9IGluZGV4ICsgc2lnbiAqIFRyYWNrLnNpZ247XG4gICAgICB9XG5cbiAgICAgIGlmIChTcGxpZGUuaXMoU0xJREUpKSB7XG4gICAgICAgIGRlc3RJbmRleCA9IGJldHdlZW4oZGVzdEluZGV4LCAwLCBDb250cm9sbGVyLmVkZ2VJbmRleCk7XG4gICAgICB9XG5cbiAgICAgIENvbnRyb2xsZXIuZ28oZGVzdEluZGV4LCBvcHRpb25zLmlzTmF2aWdhdGlvbik7XG4gICAgfVxuICB9XG4gIC8qKlxyXG4gICAqIEFuYWx5emUgdGhlIGdpdmVuIGV2ZW50IG9iamVjdCBhbmQgcmV0dXJuIGltcG9ydGFudCBpbmZvcm1hdGlvbiBmb3IgaGFuZGxpbmcgc3dpcGUgYmVoYXZpb3IuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0V2ZW50fSAgIGUgICAgICAgICAgLSBUb3VjaCBvciBNb3VzZSBldmVudCBvYmplY3QuXHJcbiAgICogQHBhcmFtIHtPYmplY3R9ICBzdGFydEluZm8gIC0gSW5mb3JtYXRpb24gYW5hbHl6ZWQgb24gc3RhcnQgZm9yIGNhbGN1bGF0aW5nIGRpZmZlcmVuY2UgZnJvbSB0aGUgY3VycmVudCBvbmUuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtPYmplY3R9IC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgYW5hbHl6ZWQgaW5mb3JtYXRpb24sIHN1Y2ggYXMgb2Zmc2V0LCB2ZWxvY2l0eSwgZXRjLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gYW5hbHl6ZShlLCBzdGFydEluZm8pIHtcbiAgICB2YXIgdGltZVN0YW1wID0gZS50aW1lU3RhbXAsXG4gICAgICAgIHRvdWNoZXMgPSBlLnRvdWNoZXM7XG5cbiAgICB2YXIgX3JlZjIgPSB0b3VjaGVzID8gdG91Y2hlc1swXSA6IGUsXG4gICAgICAgIGNsaWVudFggPSBfcmVmMi5jbGllbnRYLFxuICAgICAgICBjbGllbnRZID0gX3JlZjIuY2xpZW50WTtcblxuICAgIHZhciBfcmVmMyA9IHN0YXJ0SW5mby50byB8fCB7fSxcbiAgICAgICAgX3JlZjMkeCA9IF9yZWYzLngsXG4gICAgICAgIGZyb21YID0gX3JlZjMkeCA9PT0gdm9pZCAwID8gY2xpZW50WCA6IF9yZWYzJHgsXG4gICAgICAgIF9yZWYzJHkgPSBfcmVmMy55LFxuICAgICAgICBmcm9tWSA9IF9yZWYzJHkgPT09IHZvaWQgMCA/IGNsaWVudFkgOiBfcmVmMyR5O1xuXG4gICAgdmFyIHN0YXJ0VGltZSA9IHN0YXJ0SW5mby50aW1lIHx8IDA7XG4gICAgdmFyIG9mZnNldCA9IHtcbiAgICAgIHg6IGNsaWVudFggLSBmcm9tWCxcbiAgICAgIHk6IGNsaWVudFkgLSBmcm9tWVxuICAgIH07XG4gICAgdmFyIGR1cmF0aW9uID0gdGltZVN0YW1wIC0gc3RhcnRUaW1lO1xuICAgIHZhciB2ZWxvY2l0eSA9IHtcbiAgICAgIHg6IG9mZnNldC54IC8gZHVyYXRpb24sXG4gICAgICB5OiBvZmZzZXQueSAvIGR1cmF0aW9uXG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgdG86IHtcbiAgICAgICAgeDogY2xpZW50WCxcbiAgICAgICAgeTogY2xpZW50WVxuICAgICAgfSxcbiAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgdGltZTogdGltZVN0YW1wLFxuICAgICAgdmVsb2NpdHk6IHZlbG9jaXR5XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBEcmFnO1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9jbGljay9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGhhbmRsaW5nIGEgY2xpY2sgZXZlbnQuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGhhbmRsaW5nIGEgY2xpY2sgZXZlbnQuXHJcbiAqIENsaWNrIHNob3VsZCBiZSBkaXNhYmxlZCBkdXJpbmcgZHJhZy9zd2lwZS5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudHMgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBjbGljayA9IChmdW5jdGlvbiAoU3BsaWRlLCBDb21wb25lbnRzKSB7XG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgY2xpY2sgaXMgZGlzYWJsZWQgb3Igbm90LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIHZhciBkaXNhYmxlZCA9IGZhbHNlO1xuICAvKipcclxuICAgKiBDbGljayBjb21wb25lbnQgb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgQ2xpY2sgPSB7XG4gICAgLyoqXHJcbiAgICAgKiBNb3VudCBvbmx5IHdoZW4gdGhlIGRyYWcgaXMgYWN0aXZhdGVkIGFuZCB0aGUgc2xpZGUgdHlwZSBpcyBub3QgXCJmYWRlXCIuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgKi9cbiAgICByZXF1aXJlZDogU3BsaWRlLm9wdGlvbnMuZHJhZyxcblxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgU3BsaWRlLm9uKCdjbGljaycsIG9uQ2xpY2ssIENvbXBvbmVudHMuRWxlbWVudHMudHJhY2ssIHtcbiAgICAgICAgY2FwdHVyZTogdHJ1ZVxuICAgICAgfSkub24oJ2RyYWcnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH0pLm9uKCdkcmFnZ2VkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIGZsYWcgaXMgcmVsZWFzZWQgYWZ0ZXIgdGhlIGNsaWNrIGV2ZW50IGlzIGZpcmVkLlxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBkaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgLyoqXHJcbiAgICogQ2FsbGVkIHdoZW4gYSB0cmFjayBlbGVtZW50IGlzIGNsaWNrZWQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0V2ZW50fSBlIC0gQSBjbGljayBldmVudC5cclxuICAgKi9cblxuICBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBDbGljaztcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvYXV0b3BsYXkvaW5kZXguanNcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBwbGF5aW5nIHNsaWRlcyBhdXRvbWF0aWNhbGx5LlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuLyoqXHJcbiAqIFNldCBvZiBwYXVzZSBmbGFncy5cclxuICovXG5cbnZhciBQQVVTRV9GTEFHUyA9IHtcbiAgSE9WRVI6IDEsXG4gIEZPQ1VTOiAyLFxuICBNQU5VQUw6IDNcbn07XG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgcGxheWluZyBzbGlkZXMgYXV0b21hdGljYWxseS5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudHMgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb21wb25lbnRzLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAgICAgICAtIEEgY29tcG9uZW50IG5hbWUgYXMgYSBsb3dlcmNhc2Ugc3RyaW5nLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IGF1dG9wbGF5ID0gKGZ1bmN0aW9uIChTcGxpZGUsIENvbXBvbmVudHMsIG5hbWUpIHtcbiAgLyoqXHJcbiAgICogU3RvcmUgcGF1c2UgZmxhZ3MuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7QXJyYXl9XHJcbiAgICovXG4gIHZhciBmbGFncyA9IFtdO1xuICAvKipcclxuICAgKiBTdG9yZSBhbiBpbnRlcnZhbCBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fTtcclxuICAgKi9cblxuICB2YXIgaW50ZXJ2YWw7XG4gIC8qKlxyXG4gICAqIEtlZXAgdGhlIEVsZW1lbnRzIGNvbXBvbmVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICovXG5cbiAgdmFyIEVsZW1lbnRzID0gQ29tcG9uZW50cy5FbGVtZW50cztcbiAgLyoqXHJcbiAgICogQXV0b3BsYXkgY29tcG9uZW50IG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIEF1dG9wbGF5ID0ge1xuICAgIC8qKlxyXG4gICAgICogUmVxdWlyZWQgb25seSB3aGVuIHRoZSBhdXRvcGxheSBvcHRpb24gaXMgdHJ1ZS5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqL1xuICAgIHJlcXVpcmVkOiBTcGxpZGUub3B0aW9ucy5hdXRvcGxheSxcblxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICogTm90ZSB0aGF0IGF1dG9wbGF5IHN0YXJ0cyBvbmx5IGlmIHRoZXJlIGFyZSBzbGlkZXMgb3ZlciBwZXJQYWdlIG51bWJlci5cclxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIHZhciBvcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG5cbiAgICAgIGlmIChFbGVtZW50cy5zbGlkZXMubGVuZ3RoID4gb3B0aW9ucy5wZXJQYWdlKSB7XG4gICAgICAgIGludGVydmFsID0gY3JlYXRlSW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIFNwbGlkZS5nbygnPicpO1xuICAgICAgICB9LCBvcHRpb25zLmludGVydmFsLCBmdW5jdGlvbiAocmF0ZSkge1xuICAgICAgICAgIFNwbGlkZS5lbWl0KG5hbWUgKyBcIjpwbGF5aW5nXCIsIHJhdGUpO1xuXG4gICAgICAgICAgaWYgKEVsZW1lbnRzLmJhcikge1xuICAgICAgICAgICAgYXBwbHlTdHlsZShFbGVtZW50cy5iYXIsIHtcbiAgICAgICAgICAgICAgd2lkdGg6IHJhdGUgKiAxMDAgKyBcIiVcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYmluZCgpO1xuICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydCBhdXRvcGxheS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZmxhZyAtIEEgcGF1c2UgZmxhZyB0byBiZSByZW1vdmVkLlxyXG4gICAgICovXG4gICAgcGxheTogZnVuY3Rpb24gcGxheShmbGFnKSB7XG4gICAgICBpZiAoZmxhZyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGZsYWcgPSAwO1xuICAgICAgfVxuXG4gICAgICBmbGFncyA9IGZsYWdzLmZpbHRlcihmdW5jdGlvbiAoZikge1xuICAgICAgICByZXR1cm4gZiAhPT0gZmxhZztcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIWZsYWdzLmxlbmd0aCkge1xuICAgICAgICBTcGxpZGUuZW1pdChuYW1lICsgXCI6cGxheVwiKTtcbiAgICAgICAgaW50ZXJ2YWwucGxheShTcGxpZGUub3B0aW9ucy5yZXNldFByb2dyZXNzKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBQYXVzZSBhdXRvcGxheS5cclxuICAgICAqIE5vdGUgdGhhdCBBcnJheS5pbmNsdWRlcyBpcyBub3Qgc3VwcG9ydGVkIGJ5IElFLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBmbGFnIC0gQSBwYXVzZSBmbGFnIHRvIGJlIGFkZGVkLlxyXG4gICAgICovXG4gICAgcGF1c2U6IGZ1bmN0aW9uIHBhdXNlKGZsYWcpIHtcbiAgICAgIGlmIChmbGFnID09PSB2b2lkIDApIHtcbiAgICAgICAgZmxhZyA9IDA7XG4gICAgICB9XG5cbiAgICAgIGludGVydmFsLnBhdXNlKCk7XG5cbiAgICAgIGlmIChmbGFncy5pbmRleE9mKGZsYWcpID09PSAtMSkge1xuICAgICAgICBmbGFncy5wdXNoKGZsYWcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmxhZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIFNwbGlkZS5lbWl0KG5hbWUgKyBcIjpwYXVzZVwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIC8qKlxyXG4gICAqIExpc3RlbiBzb21lIGV2ZW50cy5cclxuICAgKi9cblxuICBmdW5jdGlvbiBiaW5kKCkge1xuICAgIHZhciBvcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG4gICAgdmFyIHNpYmxpbmcgPSBTcGxpZGUuc2libGluZztcbiAgICB2YXIgZWxtcyA9IFtTcGxpZGUucm9vdCwgc2libGluZyA/IHNpYmxpbmcucm9vdCA6IG51bGxdO1xuXG4gICAgaWYgKG9wdGlvbnMucGF1c2VPbkhvdmVyKSB7XG4gICAgICBzd2l0Y2hPbihlbG1zLCAnbW91c2VsZWF2ZScsIFBBVVNFX0ZMQUdTLkhPVkVSLCB0cnVlKTtcbiAgICAgIHN3aXRjaE9uKGVsbXMsICdtb3VzZWVudGVyJywgUEFVU0VfRkxBR1MuSE9WRVIsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5wYXVzZU9uRm9jdXMpIHtcbiAgICAgIHN3aXRjaE9uKGVsbXMsICdmb2N1c291dCcsIFBBVVNFX0ZMQUdTLkZPQ1VTLCB0cnVlKTtcbiAgICAgIHN3aXRjaE9uKGVsbXMsICdmb2N1c2luJywgUEFVU0VfRkxBR1MuRk9DVVMsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAoRWxlbWVudHMucGxheSkge1xuICAgICAgU3BsaWRlLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gTmVlZCB0byBiZSByZW1vdmVkIGEgZm9jdXMgZmxhZyBhdCBmaXJzdC5cbiAgICAgICAgQXV0b3BsYXkucGxheShQQVVTRV9GTEFHUy5GT0NVUyk7XG4gICAgICAgIEF1dG9wbGF5LnBsYXkoUEFVU0VfRkxBR1MuTUFOVUFMKTtcbiAgICAgIH0sIEVsZW1lbnRzLnBsYXkpO1xuICAgIH1cblxuICAgIGlmIChFbGVtZW50cy5wYXVzZSkge1xuICAgICAgc3dpdGNoT24oW0VsZW1lbnRzLnBhdXNlXSwgJ2NsaWNrJywgUEFVU0VfRkxBR1MuTUFOVUFMLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgU3BsaWRlLm9uKCdtb3ZlIHJlZnJlc2gnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBBdXRvcGxheS5wbGF5KCk7XG4gICAgfSkgLy8gUmV3aW5kIHRoZSB0aW1lci5cbiAgICAub24oJ2Rlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgICBBdXRvcGxheS5wYXVzZSgpO1xuICAgIH0pO1xuICB9XG4gIC8qKlxyXG4gICAqIFBsYXkgb3IgcGF1c2Ugb24gdGhlIGdpdmVuIGV2ZW50LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtFbGVtZW50W119IGVsbXMgIC0gRWxlbWVudHMuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9ICAgIGV2ZW50IC0gQW4gZXZlbnQgbmFtZSBvciBuYW1lcy5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gICAgZmxhZyAgLSBBIHBhdXNlIGZsYWcgZGVmaW5lZCBvbiB0aGUgdG9wLlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gICBwbGF5ICAtIERldGVybWluZSB3aGV0aGVyIHRvIHBsYXkgb3IgcGF1c2UuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBzd2l0Y2hPbihlbG1zLCBldmVudCwgZmxhZywgcGxheSkge1xuICAgIGVsbXMuZm9yRWFjaChmdW5jdGlvbiAoZWxtKSB7XG4gICAgICBTcGxpZGUub24oZXZlbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgQXV0b3BsYXlbcGxheSA/ICdwbGF5JyA6ICdwYXVzZSddKGZsYWcpO1xuICAgICAgfSwgZWxtKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBBdXRvcGxheTtcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvY292ZXIvaW5kZXguanNcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBjaGFuZ2UgYW4gaW1nIGVsZW1lbnQgdG8gYmFja2dyb3VuZCBpbWFnZSBvZiBpdHMgd3JhcHBlci5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgY2hhbmdlIGFuIGltZyBlbGVtZW50IHRvIGJhY2tncm91bmQgaW1hZ2Ugb2YgaXRzIHdyYXBwZXIuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgICAgIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBDb21wb25lbnRzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgY29tcG9uZW50cy5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBjb3ZlciA9IChmdW5jdGlvbiAoU3BsaWRlLCBDb21wb25lbnRzKSB7XG4gIC8qKlxyXG4gICAqIEhvbGQgb3B0aW9ucy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG4gIHZhciBvcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG4gIC8qKlxyXG4gICAqIENvdmVyIGNvbXBvbmVudCBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBDb3ZlciA9IHtcbiAgICAvKipcclxuICAgICAqIFJlcXVpcmVkIG9ubHkgd2hlbiBcImNvdmVyXCIgb3B0aW9uIGlzIHRydWUuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgKi9cbiAgICByZXF1aXJlZDogb3B0aW9ucy5jb3ZlcixcblxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgU3BsaWRlLm9uKCdsYXp5bG9hZDpsb2FkZWQnLCBmdW5jdGlvbiAoaW1nKSB7XG4gICAgICAgIGNvdmVyKGltZywgZmFsc2UpO1xuICAgICAgfSk7XG4gICAgICBTcGxpZGUub24oJ21vdW50ZWQgdXBkYXRlZCByZWZyZXNoJywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXBwbHkoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogRGVzdHJveS5cclxuICAgICAqL1xuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICBhcHBseSh0cnVlKTtcbiAgICB9XG4gIH07XG4gIC8qKlxyXG4gICAqIEFwcGx5IFwiY292ZXJcIiB0byBhbGwgc2xpZGVzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtib29sZWFufSB1bmNvdmVyIC0gSWYgdHJ1ZSwgXCJjb3ZlclwiIHdpbGwgYmUgY2xlYXIuXHJcbiAgICovXG5cbiAgZnVuY3Rpb24gYXBwbHkodW5jb3Zlcikge1xuICAgIENvbXBvbmVudHMuRWxlbWVudHMuZWFjaChmdW5jdGlvbiAoU2xpZGUpIHtcbiAgICAgIHZhciBpbWcgPSBjaGlsZChTbGlkZS5zbGlkZSwgJ0lNRycpIHx8IGNoaWxkKFNsaWRlLmNvbnRhaW5lciwgJ0lNRycpO1xuXG4gICAgICBpZiAoaW1nICYmIGltZy5zcmMpIHtcbiAgICAgICAgY292ZXIoaW1nLCB1bmNvdmVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvKipcclxuICAgKiBTZXQgYmFja2dyb3VuZCBpbWFnZSBvZiB0aGUgcGFyZW50IGVsZW1lbnQsIHVzaW5nIHNvdXJjZSBvZiB0aGUgZ2l2ZW4gaW1hZ2UgZWxlbWVudC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gaW1nICAgICAtIEFuIGltYWdlIGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtib29sZWFufSB1bmNvdmVyIC0gUmVzZXQgXCJjb3ZlclwiLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gY292ZXIoaW1nLCB1bmNvdmVyKSB7XG4gICAgYXBwbHlTdHlsZShpbWcucGFyZW50RWxlbWVudCwge1xuICAgICAgYmFja2dyb3VuZDogdW5jb3ZlciA/ICcnIDogXCJjZW50ZXIvY292ZXIgbm8tcmVwZWF0IHVybChcXFwiXCIgKyBpbWcuc3JjICsgXCJcXFwiKVwiXG4gICAgfSk7XG4gICAgYXBwbHlTdHlsZShpbWcsIHtcbiAgICAgIGRpc3BsYXk6IHVuY292ZXIgPyAnJyA6ICdub25lJ1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIENvdmVyO1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9hcnJvd3MvcGF0aC5qc1xuLyoqXHJcbiAqIEV4cG9ydCB2ZWN0b3IgcGF0aCBmb3IgYW4gYXJyb3cuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuLyoqXHJcbiAqIE5hbWVzcGFjZSBkZWZpbml0aW9uIGZvciBTVkcgZWxlbWVudC5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG52YXIgWE1MX05BTUVfU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuLyoqXHJcbiAqIFRoZSBhcnJvdyB2ZWN0b3IgcGF0aC5cclxuICpcclxuICogQHR5cGUge251bWJlcn1cclxuICovXG5cbnZhciBQQVRIID0gJ20xNS41IDAuOTMyLTQuMyA0LjM4IDE0LjUgMTQuNi0xNC41IDE0LjUgNC4zIDQuNCAxNC42LTE0LjYgNC40LTQuMy00LjQtNC40LTE0LjYtMTQuNnonO1xuLyoqXHJcbiAqIFNWRyB3aWR0aCBhbmQgaGVpZ2h0LlxyXG4gKlxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKi9cblxudmFyIFNJWkUgPSA0MDtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL2Fycm93cy9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGFwcGVuZGluZyBwcmV2L25leHQgYXJyb3dzLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgYXBwZW5kaW5nIHByZXYvbmV4dCBhcnJvd3MuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgICAgIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBDb21wb25lbnRzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgY29tcG9uZW50cy5cclxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgICAgICAgLSBBIGNvbXBvbmVudCBuYW1lIGFzIGEgbG93ZXJjYXNlIHN0cmluZy5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBhcnJvd3MgPSAoZnVuY3Rpb24gKFNwbGlkZSwgQ29tcG9uZW50cywgbmFtZSkge1xuICAvKipcclxuICAgKiBQcmV2aW91cyBhcnJvdyBlbGVtZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge0VsZW1lbnR8dW5kZWZpbmVkfVxyXG4gICAqL1xuICB2YXIgcHJldjtcbiAgLyoqXHJcbiAgICogTmV4dCBhcnJvdyBlbGVtZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge0VsZW1lbnR8dW5kZWZpbmVkfVxyXG4gICAqL1xuXG4gIHZhciBuZXh0O1xuICAvKipcclxuICAgKiBTdG9yZSB0aGUgY2xhc3MgbGlzdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIGNsYXNzZXMgPSBTcGxpZGUuY2xhc3NlcztcbiAgLyoqXHJcbiAgICogSG9sZCB0aGUgcm9vdCBlbGVtZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge0VsZW1lbnR9XHJcbiAgICovXG5cbiAgdmFyIHJvb3QgPSBTcGxpZGUucm9vdDtcbiAgLyoqXHJcbiAgICogV2hldGhlciBhcnJvd3MgYXJlIGNyZWF0ZWQgcHJvZ3JhbW1hdGljYWxseSBvciBub3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cblxuICB2YXIgY3JlYXRlZDtcbiAgLyoqXHJcbiAgICogSG9sZCB0aGUgRWxlbWVudHMgY29tcG9uZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgRWxlbWVudHMgPSBDb21wb25lbnRzLkVsZW1lbnRzO1xuICAvKipcclxuICAgKiBBcnJvd3MgY29tcG9uZW50IG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIEFycm93cyA9IHtcbiAgICAvKipcclxuICAgICAqIFJlcXVpcmVkIHdoZW4gdGhlIGFycm93cyBvcHRpb24gaXMgdHJ1ZS5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqL1xuICAgIHJlcXVpcmVkOiBTcGxpZGUub3B0aW9ucy5hcnJvd3MsXG5cbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIC8vIEF0dGVtcHQgdG8gZ2V0IGFycm93cyBmcm9tIEhUTUwgc291cmNlLlxuICAgICAgcHJldiA9IEVsZW1lbnRzLmFycm93cy5wcmV2O1xuICAgICAgbmV4dCA9IEVsZW1lbnRzLmFycm93cy5uZXh0OyAvLyBJZiBhcnJvd3Mgd2VyZSBub3QgZm91bmQgaW4gSFRNTCwgbGV0J3MgZ2VuZXJhdGUgdGhlbS5cblxuICAgICAgaWYgKCghcHJldiB8fCAhbmV4dCkgJiYgU3BsaWRlLm9wdGlvbnMuYXJyb3dzKSB7XG4gICAgICAgIHByZXYgPSBjcmVhdGVBcnJvdyh0cnVlKTtcbiAgICAgICAgbmV4dCA9IGNyZWF0ZUFycm93KGZhbHNlKTtcbiAgICAgICAgY3JlYXRlZCA9IHRydWU7XG4gICAgICAgIGFwcGVuZEFycm93cygpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJldiAmJiBuZXh0KSB7XG4gICAgICAgIGJpbmQoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hcnJvd3MgPSB7XG4gICAgICAgIHByZXY6IHByZXYsXG4gICAgICAgIG5leHQ6IG5leHRcbiAgICAgIH07XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIGFmdGVyIGFsbCBjb21wb25lbnRzIGFyZSBtb3VudGVkLlxyXG4gICAgICovXG4gICAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICAgIFNwbGlkZS5lbWl0KG5hbWUgKyBcIjptb3VudGVkXCIsIHByZXYsIG5leHQpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIERlc3Ryb3kuXHJcbiAgICAgKi9cbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgcmVtb3ZlQXR0cmlidXRlKFtwcmV2LCBuZXh0XSwgJ2Rpc2FibGVkJyk7XG5cbiAgICAgIGlmIChjcmVhdGVkKSB7XG4gICAgICAgIGRvbV9yZW1vdmUocHJldi5wYXJlbnRFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIC8qKlxyXG4gICAqIExpc3RlbiB0byBuYXRpdmUgYW5kIGN1c3RvbSBldmVudHMuXHJcbiAgICovXG5cbiAgZnVuY3Rpb24gYmluZCgpIHtcbiAgICBTcGxpZGUub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgU3BsaWRlLmdvKCc8Jyk7XG4gICAgfSwgcHJldikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgU3BsaWRlLmdvKCc+Jyk7XG4gICAgfSwgbmV4dCkub24oJ21vdW50ZWQgbW92ZSB1cGRhdGVkIHJlZnJlc2gnLCB1cGRhdGVEaXNhYmxlZCk7XG4gIH1cbiAgLyoqXHJcbiAgICogVXBkYXRlIGEgZGlzYWJsZWQgYXR0cmlidXRlLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gdXBkYXRlRGlzYWJsZWQoKSB7XG4gICAgdmFyIF9Db21wb25lbnRzJENvbnRyb2xsZSA9IENvbXBvbmVudHMuQ29udHJvbGxlcixcbiAgICAgICAgcHJldkluZGV4ID0gX0NvbXBvbmVudHMkQ29udHJvbGxlLnByZXZJbmRleCxcbiAgICAgICAgbmV4dEluZGV4ID0gX0NvbXBvbmVudHMkQ29udHJvbGxlLm5leHRJbmRleDtcbiAgICB2YXIgaXNFbm91Z2ggPSBTcGxpZGUubGVuZ3RoID4gU3BsaWRlLm9wdGlvbnMucGVyUGFnZSB8fCBTcGxpZGUuaXMoTE9PUCk7XG4gICAgcHJldi5kaXNhYmxlZCA9IHByZXZJbmRleCA8IDAgfHwgIWlzRW5vdWdoO1xuICAgIG5leHQuZGlzYWJsZWQgPSBuZXh0SW5kZXggPCAwIHx8ICFpc0Vub3VnaDtcbiAgICBTcGxpZGUuZW1pdChuYW1lICsgXCI6dXBkYXRlZFwiLCBwcmV2LCBuZXh0LCBwcmV2SW5kZXgsIG5leHRJbmRleCk7XG4gIH1cbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgd3JhcHBlciBlbGVtZW50IGFuZCBhcHBlbmQgYXJyb3dzLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gYXBwZW5kQXJyb3dzKCkge1xuICAgIHZhciB3cmFwcGVyID0gY3JlYXRlKCdkaXYnLCB7XG4gICAgICBcImNsYXNzXCI6IGNsYXNzZXMuYXJyb3dzXG4gICAgfSk7XG4gICAgYXBwZW5kKHdyYXBwZXIsIHByZXYpO1xuICAgIGFwcGVuZCh3cmFwcGVyLCBuZXh0KTtcbiAgICB2YXIgc2xpZGVyID0gRWxlbWVudHMuc2xpZGVyO1xuICAgIHZhciBwYXJlbnQgPSBTcGxpZGUub3B0aW9ucy5hcnJvd3MgPT09ICdzbGlkZXInICYmIHNsaWRlciA/IHNsaWRlciA6IHJvb3Q7XG4gICAgYmVmb3JlKHdyYXBwZXIsIHBhcmVudC5maXJzdEVsZW1lbnRDaGlsZCk7XG4gIH1cbiAgLyoqXHJcbiAgICogQ3JlYXRlIGFuIGFycm93IGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHByZXYgLSBEZXRlcm1pbmUgdG8gY3JlYXRlIGEgcHJldiBhcnJvdyBvciBuZXh0IGFycm93LlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7RWxlbWVudH0gLSBBIGNyZWF0ZWQgYXJyb3cgZWxlbWVudC5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycm93KHByZXYpIHtcbiAgICB2YXIgYXJyb3cgPSBcIjxidXR0b24gY2xhc3M9XFxcIlwiICsgY2xhc3Nlcy5hcnJvdyArIFwiIFwiICsgKHByZXYgPyBjbGFzc2VzLnByZXYgOiBjbGFzc2VzLm5leHQpICsgXCJcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+XCIgKyAoXCI8c3ZnIHhtbG5zPVxcXCJcIiArIFhNTF9OQU1FX1NQQUNFICsgXCJcXFwiXFx0dmlld0JveD1cXFwiMCAwIFwiICsgU0laRSArIFwiIFwiICsgU0laRSArIFwiXFxcIlxcdHdpZHRoPVxcXCJcIiArIFNJWkUgKyBcIlxcXCJcXHRoZWlnaHQ9XFxcIlwiICsgU0laRSArIFwiXFxcIj5cIikgKyAoXCI8cGF0aCBkPVxcXCJcIiArIChTcGxpZGUub3B0aW9ucy5hcnJvd1BhdGggfHwgUEFUSCkgKyBcIlxcXCIgLz5cIik7XG4gICAgcmV0dXJuIGRvbWlmeShhcnJvdyk7XG4gIH1cblxuICByZXR1cm4gQXJyb3dzO1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9wYWdpbmF0aW9uL2luZGV4LmpzXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgaGFuZGxpbmcgcGFnaW5hdGlvblxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuLyoqXHJcbiAqIFRoZSBldmVudCBuYW1lIGZvciB1cGRhdGluZyBzb21lIGF0dHJpYnV0ZXMgb2YgcGFnaW5hdGlvbiBub2Rlcy5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG5cbnZhciBBVFRSSUJVVEVTX1VQREFURV9FVkVOVCA9ICdtb3ZlLnBhZ2UnO1xuLyoqXHJcbiAqIFRoZSBldmVudCBuYW1lIGZvciByZWNyZWF0aW5nIHBhZ2luYXRpb24uXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xuXG52YXIgVVBEQVRFX0VWRU5UID0gJ3VwZGF0ZWQucGFnZSByZWZyZXNoLnBhZ2UnO1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGhhbmRsaW5nIHBhZ2luYXRpb25cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudHMgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb21wb25lbnRzLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAgICAgICAtIEEgY29tcG9uZW50IG5hbWUgYXMgYSBsb3dlcmNhc2Ugc3RyaW5nLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IHBhZ2luYXRpb24gPSAoZnVuY3Rpb24gKFNwbGlkZSwgQ29tcG9uZW50cywgbmFtZSkge1xuICAvKipcclxuICAgKiBTdG9yZSBhbGwgZGF0YSBmb3IgcGFnaW5hdGlvbi5cclxuICAgKiAtIGxpc3Q6IEEgbGlzdCBlbGVtZW50LlxyXG4gICAqIC0gaXRlbXM6IEFuIGFycmF5IHRoYXQgY29udGFpbnMgb2JqZWN0cyhsaSwgYnV0dG9uLCBpbmRleCwgcGFnZSkuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuICB2YXIgZGF0YSA9IHt9O1xuICAvKipcclxuICAgKiBIb2xkIHRoZSBFbGVtZW50cyBjb21wb25lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBFbGVtZW50cyA9IENvbXBvbmVudHMuRWxlbWVudHM7XG4gIC8qKlxyXG4gICAqIFBhZ2luYXRpb24gY29tcG9uZW50IG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIFBhZ2luYXRpb24gPSB7XG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB2YXIgcGFnaW5hdGlvbiA9IFNwbGlkZS5vcHRpb25zLnBhZ2luYXRpb247XG5cbiAgICAgIGlmIChwYWdpbmF0aW9uKSB7XG4gICAgICAgIGRhdGEgPSBjcmVhdGVQYWdpbmF0aW9uKCk7XG4gICAgICAgIHZhciBzbGlkZXIgPSBFbGVtZW50cy5zbGlkZXI7XG4gICAgICAgIHZhciBwYXJlbnQgPSBwYWdpbmF0aW9uID09PSAnc2xpZGVyJyAmJiBzbGlkZXIgPyBzbGlkZXIgOiBTcGxpZGUucm9vdDtcbiAgICAgICAgYXBwZW5kKHBhcmVudCwgZGF0YS5saXN0KTtcbiAgICAgICAgU3BsaWRlLm9uKEFUVFJJQlVURVNfVVBEQVRFX0VWRU5ULCB1cGRhdGVBdHRyaWJ1dGVzKTtcbiAgICAgIH1cblxuICAgICAgU3BsaWRlLm9mZihVUERBVEVfRVZFTlQpLm9uKFVQREFURV9FVkVOVCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBQYWdpbmF0aW9uLmRlc3Ryb3koKTtcblxuICAgICAgICBpZiAoU3BsaWRlLm9wdGlvbnMucGFnaW5hdGlvbikge1xuICAgICAgICAgIFBhZ2luYXRpb24ubW91bnQoKTtcbiAgICAgICAgICBQYWdpbmF0aW9uLm1vdW50ZWQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIGFmdGVyIGFsbCBjb21wb25lbnRzIGFyZSBtb3VudGVkLlxyXG4gICAgICovXG4gICAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICAgIGlmIChTcGxpZGUub3B0aW9ucy5wYWdpbmF0aW9uKSB7XG4gICAgICAgIHZhciBpbmRleCA9IFNwbGlkZS5pbmRleDtcbiAgICAgICAgU3BsaWRlLmVtaXQobmFtZSArIFwiOm1vdW50ZWRcIiwgZGF0YSwgdGhpcy5nZXRJdGVtKGluZGV4KSk7XG4gICAgICAgIHVwZGF0ZUF0dHJpYnV0ZXMoaW5kZXgsIC0xKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBEZXN0cm95IHRoZSBwYWdpbmF0aW9uLlxyXG4gICAgICogQmUgYXdhcmUgdGhhdCBub2RlLnJlbW92ZSgpIGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUUuXHJcbiAgICAgKi9cbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgZG9tX3JlbW92ZShkYXRhLmxpc3QpO1xuXG4gICAgICBpZiAoZGF0YS5pdGVtcykge1xuICAgICAgICBkYXRhLml0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICBTcGxpZGUub2ZmKCdjbGljaycsIGl0ZW0uYnV0dG9uKTtcbiAgICAgICAgfSk7XG4gICAgICB9IC8vIERvIG5vdCByZW1vdmUgVVBEQVRFX0VWRU5UIHRvIHJlY3JlYXRlIHBhZ2luYXRpb24gaWYgbmVlZGVkLlxuXG5cbiAgICAgIFNwbGlkZS5vZmYoQVRUUklCVVRFU19VUERBVEVfRVZFTlQpO1xuICAgICAgZGF0YSA9IHt9O1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiBhbiBpdGVtIGJ5IGluZGV4LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIEEgc2xpZGUgaW5kZXguXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fHVuZGVmaW5lZH0gLSBBbiBpdGVtIG9iamVjdCBvbiBzdWNjZXNzIG9yIHVuZGVmaW5lZCBvbiBmYWlsdXJlLlxyXG4gICAgICovXG4gICAgZ2V0SXRlbTogZnVuY3Rpb24gZ2V0SXRlbShpbmRleCkge1xuICAgICAgcmV0dXJuIGRhdGEuaXRlbXNbQ29tcG9uZW50cy5Db250cm9sbGVyLnRvUGFnZShpbmRleCldO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiBvYmplY3QgY29udGFpbmluZyBwYWdpbmF0aW9uIGRhdGEuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fSAtIFBhZ2luYXRpb24gZGF0YSBpbmNsdWRpbmcgbGlzdCBhbmQgaXRlbXMuXHJcbiAgICAgKi9cbiAgICBnZXQgZGF0YSgpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICB9O1xuICAvKipcclxuICAgKiBVcGRhdGUgYXR0cmlidXRlcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAgICAgLSBBY3RpdmUgaW5kZXguXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHByZXZJbmRleCAtIFByZXYgaW5kZXguXHJcbiAgICovXG5cbiAgZnVuY3Rpb24gdXBkYXRlQXR0cmlidXRlcyhpbmRleCwgcHJldkluZGV4KSB7XG4gICAgdmFyIHByZXYgPSBQYWdpbmF0aW9uLmdldEl0ZW0ocHJldkluZGV4KTtcbiAgICB2YXIgY3VyciA9IFBhZ2luYXRpb24uZ2V0SXRlbShpbmRleCk7XG4gICAgdmFyIGFjdGl2ZSA9IFNUQVRVU19DTEFTU0VTLmFjdGl2ZTtcblxuICAgIGlmIChwcmV2KSB7XG4gICAgICByZW1vdmVDbGFzcyhwcmV2LmJ1dHRvbiwgYWN0aXZlKTtcbiAgICB9XG5cbiAgICBpZiAoY3Vycikge1xuICAgICAgYWRkQ2xhc3MoY3Vyci5idXR0b24sIGFjdGl2ZSk7XG4gICAgfVxuXG4gICAgU3BsaWRlLmVtaXQobmFtZSArIFwiOnVwZGF0ZWRcIiwgZGF0YSwgcHJldiwgY3Vycik7XG4gIH1cbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgd3JhcHBlciBhbmQgYnV0dG9uIGVsZW1lbnRzLlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7T2JqZWN0fSAtIEFuIG9iamVjdCBjb250YWlucyBhbGwgZGF0YS5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVBhZ2luYXRpb24oKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcbiAgICB2YXIgY2xhc3NlcyA9IFNwbGlkZS5jbGFzc2VzO1xuICAgIHZhciBsaXN0ID0gY3JlYXRlKCd1bCcsIHtcbiAgICAgIFwiY2xhc3NcIjogY2xhc3Nlcy5wYWdpbmF0aW9uXG4gICAgfSk7XG4gICAgdmFyIGl0ZW1zID0gRWxlbWVudHMuZ2V0U2xpZGVzKGZhbHNlKS5maWx0ZXIoZnVuY3Rpb24gKFNsaWRlKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5mb2N1cyAhPT0gZmFsc2UgfHwgU2xpZGUuaW5kZXggJSBvcHRpb25zLnBlclBhZ2UgPT09IDA7XG4gICAgfSkubWFwKGZ1bmN0aW9uIChTbGlkZSwgcGFnZSkge1xuICAgICAgdmFyIGxpID0gY3JlYXRlKCdsaScsIHt9KTtcbiAgICAgIHZhciBidXR0b24gPSBjcmVhdGUoJ2J1dHRvbicsIHtcbiAgICAgICAgXCJjbGFzc1wiOiBjbGFzc2VzLnBhZ2UsXG4gICAgICAgIHR5cGU6ICdidXR0b24nXG4gICAgICB9KTtcbiAgICAgIGFwcGVuZChsaSwgYnV0dG9uKTtcbiAgICAgIGFwcGVuZChsaXN0LCBsaSk7XG4gICAgICBTcGxpZGUub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBTcGxpZGUuZ28oXCI+XCIgKyBwYWdlKTtcbiAgICAgIH0sIGJ1dHRvbik7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsaTogbGksXG4gICAgICAgIGJ1dHRvbjogYnV0dG9uLFxuICAgICAgICBwYWdlOiBwYWdlLFxuICAgICAgICBTbGlkZXM6IEVsZW1lbnRzLmdldFNsaWRlc0J5UGFnZShwYWdlKVxuICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgbGlzdDogbGlzdCxcbiAgICAgIGl0ZW1zOiBpdGVtc1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gUGFnaW5hdGlvbjtcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvbGF6eWxvYWQvaW5kZXguanNcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBsb2FkaW5nIHNsaWRlciBpbWFnZXMgbGF6aWx5LlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuXG4vKipcclxuICogVGhlIG5hbWUgZm9yIGEgZGF0YSBhdHRyaWJ1dGUgb2Ygc3JjLlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cblxudmFyIFNSQ19EQVRBX05BTUUgPSAnZGF0YS1zcGxpZGUtbGF6eSc7XG4vKipcclxuICogVGhlIG5hbWUgZm9yIGEgZGF0YSBhdHRyaWJ1dGUgb2Ygc3Jjc2V0LlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cblxudmFyIFNSQ1NFVF9EQVRBX05BTUUgPSAnZGF0YS1zcGxpZGUtbGF6eS1zcmNzZXQnO1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGxvYWRpbmcgc2xpZGVyIGltYWdlcyBsYXppbHkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgICAgIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBDb21wb25lbnRzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgY29tcG9uZW50cy5cclxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgICAgICAgLSBBIGNvbXBvbmVudCBuYW1lIGFzIGEgbG93ZXJjYXNlIHN0cmluZy5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBsYXp5bG9hZCA9IChmdW5jdGlvbiAoU3BsaWRlLCBDb21wb25lbnRzLCBuYW1lKSB7XG4gIC8qKlxyXG4gICAqIE5leHQgaW5kZXggZm9yIHNlcXVlbnRpYWwgbG9hZGluZy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXG4gIHZhciBuZXh0SW5kZXg7XG4gIC8qKlxyXG4gICAqIFN0b3JlIG9iamVjdHMgY29udGFpbmluZyBhbiBpbWcgZWxlbWVudCBhbmQgYSBTbGlkZSBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0W119XHJcbiAgICovXG5cbiAgdmFyIGltYWdlcztcbiAgLyoqXHJcbiAgICogU3RvcmUgdGhlIG9wdGlvbnMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBvcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gbG9hZCBpbWFnZXMgc2VxdWVudGlhbGx5IG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuXG4gIHZhciBpc1NlcXVlbnRpYWwgPSBvcHRpb25zLmxhenlMb2FkID09PSAnc2VxdWVudGlhbCc7XG4gIC8qKlxyXG4gICAqIExhenlsb2FkIGNvbXBvbmVudCBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBMYXp5bG9hZCA9IHtcbiAgICAvKipcclxuICAgICAqIE1vdW50IG9ubHkgd2hlbiB0aGUgbGF6eWxvYWQgb3B0aW9uIGlzIHByb3ZpZGVkLlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICovXG4gICAgcmVxdWlyZWQ6IG9wdGlvbnMubGF6eUxvYWQsXG5cbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIFNwbGlkZS5vbignbW91bnRlZCByZWZyZXNoJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpbml0KCk7XG4gICAgICAgIENvbXBvbmVudHMuRWxlbWVudHMuZWFjaChmdW5jdGlvbiAoU2xpZGUpIHtcbiAgICAgICAgICBlYWNoKFNsaWRlLnNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbXCIgKyBTUkNfREFUQV9OQU1FICsgXCJdLCBbXCIgKyBTUkNTRVRfREFUQV9OQU1FICsgXCJdXCIpLCBmdW5jdGlvbiAoaW1nKSB7XG4gICAgICAgICAgICBpZiAoIWltZy5zcmMgJiYgIWltZy5zcmNzZXQpIHtcbiAgICAgICAgICAgICAgaW1hZ2VzLnB1c2goe1xuICAgICAgICAgICAgICAgIGltZzogaW1nLFxuICAgICAgICAgICAgICAgIFNsaWRlOiBTbGlkZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgYXBwbHlTdHlsZShpbWcsIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChpc1NlcXVlbnRpYWwpIHtcbiAgICAgICAgICBsb2FkTmV4dCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKCFpc1NlcXVlbnRpYWwpIHtcbiAgICAgICAgU3BsaWRlLm9uKFwibW91bnRlZCByZWZyZXNoIG1vdmVkLlwiICsgbmFtZSwgY2hlY2spO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIERlc3Ryb3kuXHJcbiAgICAgKi9cbiAgICBkZXN0cm95OiBpbml0XG4gIH07XG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemUgcGFyYW1ldGVycy5cclxuICAgKi9cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIGltYWdlcyA9IFtdO1xuICAgIG5leHRJbmRleCA9IDA7XG4gIH1cbiAgLyoqXHJcbiAgICogQ2hlY2sgaG93IGNsb3NlIGVhY2ggaW1hZ2UgaXMgZnJvbSB0aGUgYWN0aXZlIHNsaWRlIGFuZFxyXG4gICAqIGRldGVybWluZSB3aGV0aGVyIHRvIHN0YXJ0IGxvYWRpbmcgb3Igbm90LCBhY2NvcmRpbmcgdG8gdGhlIGRpc3RhbmNlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gQ3VycmVudCBpbmRleC5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGNoZWNrKGluZGV4KSB7XG4gICAgaW5kZXggPSBpc05hTihpbmRleCkgPyBTcGxpZGUuaW5kZXggOiBpbmRleDtcbiAgICBpbWFnZXMgPSBpbWFnZXMuZmlsdGVyKGZ1bmN0aW9uIChpbWFnZSkge1xuICAgICAgaWYgKGltYWdlLlNsaWRlLmlzV2l0aGluKGluZGV4LCBvcHRpb25zLnBlclBhZ2UgKiAob3B0aW9ucy5wcmVsb2FkUGFnZXMgKyAxKSkpIHtcbiAgICAgICAgbG9hZChpbWFnZS5pbWcsIGltYWdlLlNsaWRlKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTsgLy8gVW5iaW5kIGlmIGFsbCBpbWFnZXMgYXJlIGxvYWRlZC5cblxuICAgIGlmICghaW1hZ2VzWzBdKSB7XG4gICAgICBTcGxpZGUub2ZmKFwibW92ZWQuXCIgKyBuYW1lKTtcbiAgICB9XG4gIH1cbiAgLyoqXHJcbiAgICogU3RhcnQgbG9hZGluZyBhbiBpbWFnZS5cclxuICAgKiBDcmVhdGluZyBhIGNsb25lIG9mIHRoZSBpbWFnZSBlbGVtZW50IHNpbmNlIHNldHRpbmcgc3JjIGF0dHJpYnV0ZSBkaXJlY3RseSB0byBpdFxyXG4gICAqIG9mdGVuIG9jY3VycyAnaGl0Y2gnLCBibG9ja2luZyBzb21lIG90aGVyIHByb2Nlc3NlcyBvZiBhIGJyb3dzZXIuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGltZyAgIC0gQW4gaW1hZ2UgZWxlbWVudC5cclxuICAgKiBAcGFyYW0ge09iamVjdH0gIFNsaWRlIC0gQSBTbGlkZSBvYmplY3QuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBsb2FkKGltZywgU2xpZGUpIHtcbiAgICBhZGRDbGFzcyhTbGlkZS5zbGlkZSwgU1RBVFVTX0NMQVNTRVMubG9hZGluZyk7XG4gICAgdmFyIHNwaW5uZXIgPSBjcmVhdGUoJ3NwYW4nLCB7XG4gICAgICBcImNsYXNzXCI6IFNwbGlkZS5jbGFzc2VzLnNwaW5uZXJcbiAgICB9KTtcbiAgICBhcHBlbmQoaW1nLnBhcmVudEVsZW1lbnQsIHNwaW5uZXIpO1xuXG4gICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGxvYWRlZChpbWcsIHNwaW5uZXIsIFNsaWRlLCBmYWxzZSk7XG4gICAgfTtcblxuICAgIGltZy5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgbG9hZGVkKGltZywgc3Bpbm5lciwgU2xpZGUsIHRydWUpO1xuICAgIH07XG5cbiAgICBzZXRBdHRyaWJ1dGUoaW1nLCAnc3Jjc2V0JywgZ2V0QXR0cmlidXRlKGltZywgU1JDU0VUX0RBVEFfTkFNRSkgfHwgJycpO1xuICAgIHNldEF0dHJpYnV0ZShpbWcsICdzcmMnLCBnZXRBdHRyaWJ1dGUoaW1nLCBTUkNfREFUQV9OQU1FKSB8fCAnJyk7XG4gIH1cbiAgLyoqXHJcbiAgICogU3RhcnQgbG9hZGluZyBhIG5leHQgaW1hZ2UgaW4gaW1hZ2VzIGFycmF5LlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gbG9hZE5leHQoKSB7XG4gICAgaWYgKG5leHRJbmRleCA8IGltYWdlcy5sZW5ndGgpIHtcbiAgICAgIHZhciBpbWFnZSA9IGltYWdlc1tuZXh0SW5kZXhdO1xuICAgICAgbG9hZChpbWFnZS5pbWcsIGltYWdlLlNsaWRlKTtcbiAgICB9XG5cbiAgICBuZXh0SW5kZXgrKztcbiAgfVxuICAvKipcclxuICAgKiBDYWxsZWQganVzdCBhZnRlciB0aGUgaW1hZ2Ugd2FzIGxvYWRlZCBvciBsb2FkaW5nIHdhcyBhYm9ydGVkIGJ5IHNvbWUgZXJyb3IuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGltZyAgICAgLSBBbiBpbWFnZSBlbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gc3Bpbm5lciAtIEEgc3Bpbm5lciBlbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAgU2xpZGUgICAtIEEgU2xpZGUgb2JqZWN0LlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZXJyb3IgICAtIFRydWUgaWYgdGhlIGltYWdlIHdhcyBsb2FkZWQgc3VjY2Vzc2Z1bGx5IG9yIGZhbHNlIG9uIGVycm9yLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gbG9hZGVkKGltZywgc3Bpbm5lciwgU2xpZGUsIGVycm9yKSB7XG4gICAgcmVtb3ZlQ2xhc3MoU2xpZGUuc2xpZGUsIFNUQVRVU19DTEFTU0VTLmxvYWRpbmcpO1xuXG4gICAgaWYgKCFlcnJvcikge1xuICAgICAgZG9tX3JlbW92ZShzcGlubmVyKTtcbiAgICAgIGFwcGx5U3R5bGUoaW1nLCB7XG4gICAgICAgIGRpc3BsYXk6ICcnXG4gICAgICB9KTtcbiAgICAgIFNwbGlkZS5lbWl0KG5hbWUgKyBcIjpsb2FkZWRcIiwgaW1nKS5lbWl0KCdyZXNpemUnKTtcbiAgICB9XG5cbiAgICBpZiAoaXNTZXF1ZW50aWFsKSB7XG4gICAgICBsb2FkTmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBMYXp5bG9hZDtcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbnN0YW50cy9hMTF5LmpzXG4vKipcclxuICogRXhwb3J0IGFyaWEgYXR0cmlidXRlIG5hbWVzLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cbi8qKlxyXG4gKiBBdHRyaWJ1dGUgbmFtZSBmb3IgYXJpYS1jdXJyZW50LlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cbnZhciBBUklBX0NVUlJFTlJUID0gJ2FyaWEtY3VycmVudCc7XG4vKipcclxuICogQXR0cmlidXRlIG5hbWUgZm9yIGFyaWEtY29udHJvbC5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG5cbnZhciBBUklBX0NPTlRST0xTID0gJ2FyaWEtY29udHJvbHMnO1xuLyoqXHJcbiAqIEF0dHJpYnV0ZSBuYW1lIGZvciBhcmlhLWNvbnRyb2wuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xuXG52YXIgQVJJQV9MQUJFTCA9ICdhcmlhLWxhYmVsJztcbi8qKlxyXG4gKiBBdHRyaWJ1dGUgbmFtZSBmb3IgYXJpYS1sYWJlbGxlZGJ5LlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cblxudmFyIEFSSUFfTEFCRUxMRURCWSA9ICdhcmlhLWxhYmVsbGVkYnknO1xuLyoqXHJcbiAqIEF0dHJpYnV0ZSBuYW1lIGZvciBhcmlhLWhpZGRlbi5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG5cbnZhciBBUklBX0hJRERFTiA9ICdhcmlhLWhpZGRlbic7XG4vKipcclxuICogQXR0cmlidXRlIG5hbWUgZm9yIHRhYi1pbmRleC5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG5cbnZhciBUQUJfSU5ERVggPSAndGFiaW5kZXgnO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMva2V5Ym9hcmQvaW5kZXguanNcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBjb250cm9sbGluZyBzbGlkZXMgdmlhIGtleWJvYXJkLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuLyoqXHJcbiAqIE1hcCBhIGtleSB0byBhIHNsaWRlIGNvbnRyb2wuXHJcbiAqXHJcbiAqIEB0eXBlIHtPYmplY3R9XHJcbiAqL1xuXG52YXIgS0VZX01BUCA9IHtcbiAgbHRyOiB7XG4gICAgQXJyb3dMZWZ0OiAnPCcsXG4gICAgQXJyb3dSaWdodDogJz4nLFxuICAgIC8vIEZvciBJRS5cbiAgICBMZWZ0OiAnPCcsXG4gICAgUmlnaHQ6ICc+J1xuICB9LFxuICBydGw6IHtcbiAgICBBcnJvd0xlZnQ6ICc+JyxcbiAgICBBcnJvd1JpZ2h0OiAnPCcsXG4gICAgLy8gRm9yIElFLlxuICAgIExlZnQ6ICc+JyxcbiAgICBSaWdodDogJzwnXG4gIH0sXG4gIHR0Yjoge1xuICAgIEFycm93VXA6ICc8JyxcbiAgICBBcnJvd0Rvd246ICc+JyxcbiAgICAvLyBGb3IgSUUuXG4gICAgVXA6ICc8JyxcbiAgICBEb3duOiAnPidcbiAgfVxufTtcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBjb250cm9sbGluZyBzbGlkZXMgdmlhIGtleWJvYXJkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgY29tcG9uZW50IG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3Qga2V5Ym9hcmQgPSAoZnVuY3Rpb24gKFNwbGlkZSkge1xuICAvKipcclxuICAgKiBIb2xkIHRoZSB0YXJnZXQgZWxlbWVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtFbGVtZW50fERvY3VtZW50fHVuZGVmaW5lZH1cclxuICAgKi9cbiAgdmFyIHRhcmdldDtcbiAgcmV0dXJuIHtcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIFNwbGlkZS5vbignbW91bnRlZCB1cGRhdGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IFNwbGlkZS5vcHRpb25zO1xuICAgICAgICB2YXIgcm9vdCA9IFNwbGlkZS5yb290O1xuICAgICAgICB2YXIgbWFwID0gS0VZX01BUFtvcHRpb25zLmRpcmVjdGlvbl07XG4gICAgICAgIHZhciBrZXlib2FyZCA9IG9wdGlvbnMua2V5Ym9hcmQ7XG5cbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgIFNwbGlkZS5vZmYoJ2tleWRvd24nLCB0YXJnZXQpO1xuICAgICAgICAgIHJlbW92ZUF0dHJpYnV0ZShyb290LCBUQUJfSU5ERVgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleWJvYXJkKSB7XG4gICAgICAgICAgaWYgKGtleWJvYXJkID09PSAnZm9jdXNlZCcpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IHJvb3Q7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGUocm9vdCwgVEFCX0lOREVYLCAwKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0ID0gZG9jdW1lbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgU3BsaWRlLm9uKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChtYXBbZS5rZXldKSB7XG4gICAgICAgICAgICAgIFNwbGlkZS5nbyhtYXBbZS5rZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL2ExMXkvaW5kZXguanNcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBlbmhhbmNpbmcgYWNjZXNzaWJpbGl0eS5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cblxuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGVuaGFuY2luZyBhY2Nlc3NpYmlsaXR5LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlICAgICAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gQ29tcG9uZW50cyAtIEFuIG9iamVjdCBjb250YWluaW5nIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgY29tcG9uZW50IG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgYTExeSA9IChmdW5jdGlvbiAoU3BsaWRlLCBDb21wb25lbnRzKSB7XG4gIC8qKlxyXG4gICAqIEhvbGQgYSBpMThuIG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG4gIHZhciBpMThuID0gU3BsaWRlLmkxOG47XG4gIC8qKlxyXG4gICAqIEhvbGQgdGhlIEVsZW1lbnRzIGNvbXBvbmVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIEVsZW1lbnRzID0gQ29tcG9uZW50cy5FbGVtZW50cztcbiAgLyoqXHJcbiAgICogQWxsIGF0dHJpYnV0ZXMgcmVsYXRlZCB3aXRoIEExMXkuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nW119XHJcbiAgICovXG5cbiAgdmFyIGFsbEF0dHJpYnV0ZXMgPSBbQVJJQV9ISURERU4sIFRBQl9JTkRFWCwgQVJJQV9DT05UUk9MUywgQVJJQV9MQUJFTCwgQVJJQV9DVVJSRU5SVCwgJ3JvbGUnXTtcbiAgLyoqXHJcbiAgICogQTExeSBjb21wb25lbnQgb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgQTExeSA9IHtcbiAgICAvKipcclxuICAgICAqIFJlcXVpcmVkIG9ubHkgd2hlbiB0aGUgYWNjZXNzaWJpbGl0eSBvcHRpb24gaXMgdHJ1ZS5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqL1xuICAgIHJlcXVpcmVkOiBTcGxpZGUub3B0aW9ucy5hY2Nlc3NpYmlsaXR5LFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICBTcGxpZGUub24oJ3Zpc2libGUnLCBmdW5jdGlvbiAoU2xpZGUpIHtcbiAgICAgICAgdXBkYXRlU2xpZGUoU2xpZGUuc2xpZGUsIHRydWUpO1xuICAgICAgfSkub24oJ2hpZGRlbicsIGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgICB1cGRhdGVTbGlkZShTbGlkZS5zbGlkZSwgZmFsc2UpO1xuICAgICAgfSkub24oJ2Fycm93czptb3VudGVkJywgaW5pdEFycm93cykub24oJ2Fycm93czp1cGRhdGVkJywgdXBkYXRlQXJyb3dzKS5vbigncGFnaW5hdGlvbjptb3VudGVkJywgaW5pdFBhZ2luYXRpb24pLm9uKCdwYWdpbmF0aW9uOnVwZGF0ZWQnLCB1cGRhdGVQYWdpbmF0aW9uKS5vbigncmVmcmVzaCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVtb3ZlQXR0cmlidXRlKENvbXBvbmVudHMuQ2xvbmVzLmNsb25lcywgYWxsQXR0cmlidXRlcyk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKFNwbGlkZS5vcHRpb25zLmlzTmF2aWdhdGlvbikge1xuICAgICAgICBTcGxpZGUub24oJ25hdmlnYXRpb246bW91bnRlZCBuYXZpZ2F0aW9uOnVwZGF0ZWQnLCBpbml0TmF2aWdhdGlvbikub24oJ2FjdGl2ZScsIGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgICAgIHVwZGF0ZU5hdmlnYXRpb24oU2xpZGUsIHRydWUpO1xuICAgICAgICB9KS5vbignaW5hY3RpdmUnLCBmdW5jdGlvbiAoU2xpZGUpIHtcbiAgICAgICAgICB1cGRhdGVOYXZpZ2F0aW9uKFNsaWRlLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpbml0QXV0b3BsYXkoKTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBEZXN0cm95LlxyXG4gICAgICovXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIHZhciBBcnJvd3MgPSBDb21wb25lbnRzLkFycm93cztcbiAgICAgIHZhciBhcnJvd3MgPSBBcnJvd3MgPyBBcnJvd3MuYXJyb3dzIDoge307XG4gICAgICByZW1vdmVBdHRyaWJ1dGUoRWxlbWVudHMuc2xpZGVzLmNvbmNhdChbYXJyb3dzLnByZXYsIGFycm93cy5uZXh0LCBFbGVtZW50cy5wbGF5LCBFbGVtZW50cy5wYXVzZV0pLCBhbGxBdHRyaWJ1dGVzKTtcbiAgICB9XG4gIH07XG4gIC8qKlxyXG4gICAqIFVwZGF0ZSBzbGlkZSBhdHRyaWJ1dGVzIHdoZW4gaXQgZ2V0cyB2aXNpYmxlIG9yIGhpZGRlbi5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gc2xpZGUgICAtIEEgc2xpZGUgZWxlbWVudC5cclxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZpc2libGUgLSBUcnVlIHdoZW4gdGhlIHNsaWRlIGdldHMgdmlzaWJsZSwgb3IgZmFsc2Ugd2hlbiBoaWRkZW4uXHJcbiAgICovXG5cbiAgZnVuY3Rpb24gdXBkYXRlU2xpZGUoc2xpZGUsIHZpc2libGUpIHtcbiAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsIEFSSUFfSElEREVOLCAhdmlzaWJsZSk7XG5cbiAgICBpZiAoU3BsaWRlLm9wdGlvbnMuc2xpZGVGb2N1cykge1xuICAgICAgc2V0QXR0cmlidXRlKHNsaWRlLCBUQUJfSU5ERVgsIHZpc2libGUgPyAwIDogLTEpO1xuICAgIH1cbiAgfVxuICAvKipcclxuICAgKiBJbml0aWFsaXplIGFycm93cyBpZiB0aGV5IGFyZSBhdmFpbGFibGUuXHJcbiAgICogQXBwZW5kIHNjcmVlbiByZWFkZXIgZWxlbWVudHMgYW5kIGFkZCBhcmlhLWNvbnRyb2xzIGF0dHJpYnV0ZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gcHJldiAtIFByZXZpb3VzIGFycm93IGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtFbGVtZW50fSBuZXh0IC0gTmV4dCBhcnJvdyBlbGVtZW50LlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gaW5pdEFycm93cyhwcmV2LCBuZXh0KSB7XG4gICAgdmFyIGNvbnRyb2xzID0gRWxlbWVudHMudHJhY2suaWQ7XG4gICAgc2V0QXR0cmlidXRlKHByZXYsIEFSSUFfQ09OVFJPTFMsIGNvbnRyb2xzKTtcbiAgICBzZXRBdHRyaWJ1dGUobmV4dCwgQVJJQV9DT05UUk9MUywgY29udHJvbHMpO1xuICB9XG4gIC8qKlxyXG4gICAqIFVwZGF0ZSBhcnJvdyBhdHRyaWJ1dGVzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtFbGVtZW50fSBwcmV2ICAgICAgLSBQcmV2aW91cyBhcnJvdyBlbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gbmV4dCAgICAgIC0gTmV4dCBhcnJvdyBlbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSAgcHJldkluZGV4IC0gUHJldmlvdXMgc2xpZGUgaW5kZXggb3IgLTEgd2hlbiB0aGVyZSBpcyBubyBwcmVjZWRlIHNsaWRlLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSAgbmV4dEluZGV4IC0gTmV4dCBzbGlkZSBpbmRleCBvciAtMSB3aGVuIHRoZXJlIGlzIG5vIG5leHQgc2xpZGUuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiB1cGRhdGVBcnJvd3MocHJldiwgbmV4dCwgcHJldkluZGV4LCBuZXh0SW5kZXgpIHtcbiAgICB2YXIgaW5kZXggPSBTcGxpZGUuaW5kZXg7XG4gICAgdmFyIHByZXZMYWJlbCA9IHByZXZJbmRleCA+IC0xICYmIGluZGV4IDwgcHJldkluZGV4ID8gaTE4bi5sYXN0IDogaTE4bi5wcmV2O1xuICAgIHZhciBuZXh0TGFiZWwgPSBuZXh0SW5kZXggPiAtMSAmJiBpbmRleCA+IG5leHRJbmRleCA/IGkxOG4uZmlyc3QgOiBpMThuLm5leHQ7XG4gICAgc2V0QXR0cmlidXRlKHByZXYsIEFSSUFfTEFCRUwsIHByZXZMYWJlbCk7XG4gICAgc2V0QXR0cmlidXRlKG5leHQsIEFSSUFfTEFCRUwsIG5leHRMYWJlbCk7XG4gIH1cbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZSBwYWdpbmF0aW9uIGlmIGl0J3MgYXZhaWxhYmxlLlxyXG4gICAqIEFwcGVuZCBhIHNjcmVlbiByZWFkZXIgZWxlbWVudCBhbmQgYWRkIGFyaWEtY29udHJvbHMvbGFiZWwgYXR0cmlidXRlIHRvIGVhY2ggaXRlbS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhICAgICAgIC0gRGF0YSBvYmplY3QgY29udGFpbmluZyBhbGwgaXRlbXMuXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGFjdGl2ZUl0ZW0gLSBBbiBpbml0aWFsIGFjdGl2ZSBpdGVtLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gaW5pdFBhZ2luYXRpb24oZGF0YSwgYWN0aXZlSXRlbSkge1xuICAgIGlmIChhY3RpdmVJdGVtKSB7XG4gICAgICBzZXRBdHRyaWJ1dGUoYWN0aXZlSXRlbS5idXR0b24sIEFSSUFfQ1VSUkVOUlQsIHRydWUpO1xuICAgIH1cblxuICAgIGRhdGEuaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcbiAgICAgIHZhciB0ZXh0ID0gb3B0aW9ucy5mb2N1cyA9PT0gZmFsc2UgJiYgb3B0aW9ucy5wZXJQYWdlID4gMSA/IGkxOG4ucGFnZVggOiBpMThuLnNsaWRlWDtcbiAgICAgIHZhciBsYWJlbCA9IHNwcmludGYodGV4dCwgaXRlbS5wYWdlICsgMSk7XG4gICAgICB2YXIgYnV0dG9uID0gaXRlbS5idXR0b247XG4gICAgICB2YXIgY29udHJvbHMgPSBpdGVtLlNsaWRlcy5tYXAoZnVuY3Rpb24gKFNsaWRlKSB7XG4gICAgICAgIHJldHVybiBTbGlkZS5zbGlkZS5pZDtcbiAgICAgIH0pO1xuICAgICAgc2V0QXR0cmlidXRlKGJ1dHRvbiwgQVJJQV9DT05UUk9MUywgY29udHJvbHMuam9pbignICcpKTtcbiAgICAgIHNldEF0dHJpYnV0ZShidXR0b24sIEFSSUFfTEFCRUwsIGxhYmVsKTtcbiAgICB9KTtcbiAgfVxuICAvKipcclxuICAgKiBVcGRhdGUgcGFnaW5hdGlvbiBhdHRyaWJ1dGVzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9ICBkYXRhIC0gRGF0YSBvYmplY3QgY29udGFpbmluZyBhbGwgaXRlbXMuXHJcbiAgICogQHBhcmFtIHtFbGVtZW50fSBwcmV2IC0gQSBwcmV2aW91cyBhY3RpdmUgZWxlbWVudC5cclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGN1cnIgLSBBIGN1cnJlbnQgYWN0aXZlIGVsZW1lbnQuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiB1cGRhdGVQYWdpbmF0aW9uKGRhdGEsIHByZXYsIGN1cnIpIHtcbiAgICBpZiAocHJldikge1xuICAgICAgcmVtb3ZlQXR0cmlidXRlKHByZXYuYnV0dG9uLCBBUklBX0NVUlJFTlJUKTtcbiAgICB9XG5cbiAgICBpZiAoY3Vycikge1xuICAgICAgc2V0QXR0cmlidXRlKGN1cnIuYnV0dG9uLCBBUklBX0NVUlJFTlJULCB0cnVlKTtcbiAgICB9XG4gIH1cbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZSBhdXRvcGxheSBidXR0b25zLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gaW5pdEF1dG9wbGF5KCkge1xuICAgIFsncGxheScsICdwYXVzZSddLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHZhciBlbG0gPSBFbGVtZW50c1tuYW1lXTtcblxuICAgICAgaWYgKGVsbSkge1xuICAgICAgICBpZiAoIWlzQnV0dG9uKGVsbSkpIHtcbiAgICAgICAgICBzZXRBdHRyaWJ1dGUoZWxtLCAncm9sZScsICdidXR0b24nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldEF0dHJpYnV0ZShlbG0sIEFSSUFfQ09OVFJPTFMsIEVsZW1lbnRzLnRyYWNrLmlkKTtcbiAgICAgICAgc2V0QXR0cmlidXRlKGVsbSwgQVJJQV9MQUJFTCwgaTE4bltuYW1lXSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZSBuYXZpZ2F0aW9uIHNsaWRlci5cclxuICAgKiBBZGQgYnV0dG9uIHJvbGUsIGFyaWEtbGFiZWwsIGFyaWEtY29udHJvbHMgdG8gc2xpZGUgZWxlbWVudHMgYW5kIGFwcGVuZCBzY3JlZW4gcmVhZGVyIHRleHQgdG8gdGhlbS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3BsaWRlfSBtYWluIC0gQSBtYWluIFNwbGlkZSBpbnN0YW5jZS5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGluaXROYXZpZ2F0aW9uKG1haW4pIHtcbiAgICBFbGVtZW50cy5lYWNoKGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgdmFyIHNsaWRlID0gU2xpZGUuc2xpZGU7XG4gICAgICB2YXIgcmVhbEluZGV4ID0gU2xpZGUucmVhbEluZGV4O1xuXG4gICAgICBpZiAoIWlzQnV0dG9uKHNsaWRlKSkge1xuICAgICAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsICdyb2xlJywgJ2J1dHRvbicpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2xpZGVJbmRleCA9IHJlYWxJbmRleCA+IC0xID8gcmVhbEluZGV4IDogU2xpZGUuaW5kZXg7XG4gICAgICB2YXIgbGFiZWwgPSBzcHJpbnRmKGkxOG4uc2xpZGVYLCBzbGlkZUluZGV4ICsgMSk7XG4gICAgICB2YXIgbWFpblNsaWRlID0gbWFpbi5Db21wb25lbnRzLkVsZW1lbnRzLmdldFNsaWRlKHNsaWRlSW5kZXgpO1xuICAgICAgc2V0QXR0cmlidXRlKHNsaWRlLCBBUklBX0xBQkVMLCBsYWJlbCk7XG5cbiAgICAgIGlmIChtYWluU2xpZGUpIHtcbiAgICAgICAgc2V0QXR0cmlidXRlKHNsaWRlLCBBUklBX0NPTlRST0xTLCBtYWluU2xpZGUuc2xpZGUuaWQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8qKlxyXG4gICAqIFVwZGF0ZSBuYXZpZ2F0aW9uIGF0dHJpYnV0ZXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gIFNsaWRlICAtIEEgdGFyZ2V0IFNsaWRlIG9iamVjdC5cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGFjdGl2ZSAtIFRydWUgaWYgdGhlIHNsaWRlIGlzIGFjdGl2ZSBvciBmYWxzZSBpZiBpbmFjdGl2ZS5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHVwZGF0ZU5hdmlnYXRpb24oX3JlZiwgYWN0aXZlKSB7XG4gICAgdmFyIHNsaWRlID0gX3JlZi5zbGlkZTtcblxuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIHNldEF0dHJpYnV0ZShzbGlkZSwgQVJJQV9DVVJSRU5SVCwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZUF0dHJpYnV0ZShzbGlkZSwgQVJJQV9DVVJSRU5SVCk7XG4gICAgfVxuICB9XG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIHRoZSBnaXZlbiBlbGVtZW50IGlzIGJ1dHRvbiBvciBub3QuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsbSAtIEFuIGVsZW1lbnQgdG8gYmUgY2hlY2tlZC5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gVHJ1ZSBpZiB0aGUgZ2l2ZW4gZWxlbWVudCBpcyBidXR0b24uXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBpc0J1dHRvbihlbG0pIHtcbiAgICByZXR1cm4gZWxtLnRhZ05hbWUgPT09ICdCVVRUT04nO1xuICB9XG5cbiAgcmV0dXJuIEExMXk7XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL3N5bmMvaW5kZXguanNcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBzeW5jaHJvbml6aW5nIGEgc2xpZGVyIHdpdGggYW5vdGhlci5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cbi8qKlxyXG4gKiBUaGUgZXZlbnQgbmFtZSBmb3Igc3luYy5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG5cbnZhciBTWU5DX0VWRU5UID0gJ21vdmUuc3luYyc7XG4vKipcclxuICogVGhlIGV2ZW50IG5hbWVzIGZvciBjbGljayBuYXZpZ2F0aW9uLlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cblxudmFyIENMSUNLX0VWRU5UUyA9ICdtb3VzZXVwIHRvdWNoZW5kJztcbi8qKlxyXG4gKiBUaGUga2V5cyBmb3IgdHJpZ2dlcmluZyB0aGUgbmF2aWdhdGlvbiBidXR0b24uXHJcbiAqXHJcbiAqIEB0eXBlIHtTdHJpbmdbXX1cclxuICovXG5cbnZhciBUUklHR0VSX0tFWVMgPSBbJyAnLCAnRW50ZXInLCAnU3BhY2ViYXInXTtcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBzeW5jaHJvbml6aW5nIGEgc2xpZGVyIHdpdGggYW5vdGhlci5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IHN5bmMgPSAoZnVuY3Rpb24gKFNwbGlkZSkge1xuICAvKipcclxuICAgKiBLZWVwIHRoZSBzaWJsaW5nIFNwbGlkZSBpbnN0YW5jZS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtTcGxpZGV9XHJcbiAgICovXG4gIHZhciBzaWJsaW5nID0gU3BsaWRlLnNpYmxpbmc7XG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdGhlIHNpYmxpbmcgc2xpZGVyIGlzIG5hdmlnYXRpb24gb3Igbm90LlxyXG4gICAqXHJcbiAgICogQHR5cGUge1NwbGlkZXxib29sZWFufVxyXG4gICAqL1xuXG4gIHZhciBpc05hdmlnYXRpb24gPSBzaWJsaW5nICYmIHNpYmxpbmcub3B0aW9ucy5pc05hdmlnYXRpb247XG4gIC8qKlxyXG4gICAqIExheW91dCBjb21wb25lbnQgb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgU3luYyA9IHtcbiAgICAvKipcclxuICAgICAqIFJlcXVpcmVkIG9ubHkgd2hlbiB0aGUgc3ViIHNsaWRlciBpcyBhdmFpbGFibGUuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgKi9cbiAgICByZXF1aXJlZDogISFzaWJsaW5nLFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICBzeW5jTWFpbigpO1xuICAgICAgc3luY1NpYmxpbmcoKTtcblxuICAgICAgaWYgKGlzTmF2aWdhdGlvbikge1xuICAgICAgICBiaW5kKCk7XG4gICAgICAgIFNwbGlkZS5vbigncmVmcmVzaCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGJpbmQoKTtcbiAgICAgICAgICAgIHNpYmxpbmcuZW1pdCgnbmF2aWdhdGlvbjp1cGRhdGVkJywgU3BsaWRlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIGFmdGVyIGFsbCBjb21wb25lbnRzIGFyZSBtb3VudGVkLlxyXG4gICAgICovXG4gICAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICAgIGlmIChpc05hdmlnYXRpb24pIHtcbiAgICAgICAgc2libGluZy5lbWl0KCduYXZpZ2F0aW9uOm1vdW50ZWQnLCBTcGxpZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgLyoqXHJcbiAgICogTGlzdGVuIHRoZSBwcmltYXJ5IHNsaWRlciBldmVudCB0byBtb3ZlIHNlY29uZGFyeSBvbmUuXHJcbiAgICogTXVzdCB1bmJpbmQgYSBoYW5kbGVyIGF0IGZpcnN0IHRvIGF2b2lkIGluZmluaXRlIGxvb3AuXHJcbiAgICovXG5cbiAgZnVuY3Rpb24gc3luY01haW4oKSB7XG4gICAgU3BsaWRlLm9uKFNZTkNfRVZFTlQsIGZ1bmN0aW9uIChuZXdJbmRleCwgcHJldkluZGV4LCBkZXN0SW5kZXgpIHtcbiAgICAgIHNpYmxpbmcub2ZmKFNZTkNfRVZFTlQpLmdvKHNpYmxpbmcuaXMoTE9PUCkgPyBkZXN0SW5kZXggOiBuZXdJbmRleCwgZmFsc2UpO1xuICAgICAgc3luY1NpYmxpbmcoKTtcbiAgICB9KTtcbiAgfVxuICAvKipcclxuICAgKiBMaXN0ZW4gdGhlIHNlY29uZGFyeSBzbGlkZXIgZXZlbnQgdG8gbW92ZSBwcmltYXJ5IG9uZS5cclxuICAgKiBNdXN0IHVuYmluZCBhIGhhbmRsZXIgYXQgZmlyc3QgdG8gYXZvaWQgaW5maW5pdGUgbG9vcC5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHN5bmNTaWJsaW5nKCkge1xuICAgIHNpYmxpbmcub24oU1lOQ19FVkVOVCwgZnVuY3Rpb24gKG5ld0luZGV4LCBwcmV2SW5kZXgsIGRlc3RJbmRleCkge1xuICAgICAgU3BsaWRlLm9mZihTWU5DX0VWRU5UKS5nbyhTcGxpZGUuaXMoTE9PUCkgPyBkZXN0SW5kZXggOiBuZXdJbmRleCwgZmFsc2UpO1xuICAgICAgc3luY01haW4oKTtcbiAgICB9KTtcbiAgfVxuICAvKipcclxuICAgKiBMaXN0ZW4gc29tZSBldmVudHMgb24gZWFjaCBzbGlkZS5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGJpbmQoKSB7XG4gICAgc2libGluZy5Db21wb25lbnRzLkVsZW1lbnRzLmVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBzbGlkZSA9IF9yZWYuc2xpZGUsXG4gICAgICAgICAgaW5kZXggPSBfcmVmLmluZGV4O1xuXG4gICAgICAvKlxyXG4gICAgICAgKiBMaXN0ZW4gbW91c2V1cCBhbmQgdG91Y2hlbmQgZXZlbnRzIHRvIGhhbmRsZSBjbGljay5cclxuICAgICAgICovXG4gICAgICBTcGxpZGUub2ZmKENMSUNLX0VWRU5UUywgc2xpZGUpLm9uKENMSUNLX0VWRU5UUywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gSWdub3JlIGEgbWlkZGxlIG9yIHJpZ2h0IGNsaWNrLlxuICAgICAgICBpZiAoIWUuYnV0dG9uIHx8IGUuYnV0dG9uID09PSAwKSB7XG4gICAgICAgICAgbW92ZVNpYmxpbmcoaW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9LCBzbGlkZSk7XG4gICAgICAvKlxyXG4gICAgICAgKiBTdWJzY3JpYmUga2V5dXAgdG8gaGFuZGxlIEVudGVyIGFuZCBTcGFjZSBrZXkuXHJcbiAgICAgICAqIE5vdGUgdGhhdCBBcnJheS5pbmNsdWRlcyBpcyBub3Qgc3VwcG9ydGVkIGJ5IElFLlxyXG4gICAgICAgKi9cblxuICAgICAgU3BsaWRlLm9mZigna2V5dXAnLCBzbGlkZSkub24oJ2tleXVwJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKFRSSUdHRVJfS0VZUy5pbmRleE9mKGUua2V5KSA+IC0xKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIG1vdmVTaWJsaW5nKGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgfSwgc2xpZGUsIHtcbiAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIC8qKlxyXG4gICAqIE1vdmUgdGhlIHNpYmxpbmcgdG8gdGhlIGdpdmVuIGluZGV4LlxyXG4gICAqIE5lZWQgdG8gY2hlY2sgXCJJRExFXCIgc3RhdHVzIGJlY2F1c2Ugc2xpZGVzIGNhbiBiZSBtb3ZpbmcgYnkgRHJhZyBjb21wb25lbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBUYXJnZXQgaW5kZXguXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBtb3ZlU2libGluZyhpbmRleCkge1xuICAgIGlmIChTcGxpZGUuU3RhdGUuaXMoSURMRSkpIHtcbiAgICAgIHNpYmxpbmcuZ28oaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBTeW5jO1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9icmVha3BvaW50cy9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIHVwZGF0aW5nIG9wdGlvbnMgYWNjb3JkaW5nIHRvIGEgY3VycmVudCB3aW5kb3cgd2lkdGguXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG4vKipcclxuICogSW50ZXJ2YWwgdGltZSBmb3IgdGhyb3R0bGUuXHJcbiAqXHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqL1xuXG52YXIgVEhST1RUTEUgPSA1MDtcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciB1cGRhdGluZyBvcHRpb25zIGFjY29yZGluZyB0byBhIGN1cnJlbnQgd2luZG93IHdpZHRoLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgY29tcG9uZW50IG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgYnJlYWtwb2ludHMgPSAoZnVuY3Rpb24gKFNwbGlkZSkge1xuICAvKipcclxuICAgKiBTdG9yZSBicmVha3BvaW50cy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R8Ym9vbGVhbn1cclxuICAgKi9cbiAgdmFyIGJyZWFrcG9pbnRzID0gU3BsaWRlLm9wdGlvbnMuYnJlYWtwb2ludHM7XG4gIC8qKlxyXG4gICAqIFRoZSBjaGVjayBmdW5jdGlvbiB3aG9zZSBmcmVxdWVuY3kgb2YgY2FsbCBpcyByZWR1Y2VkLlxyXG4gICAqXHJcbiAgICogQHR5cGUge0Z1bmN0aW9ufVxyXG4gICAqL1xuXG4gIHZhciB0aHJvdHRsZWRDaGVjayA9IHRocm90dGxlKGNoZWNrLCBUSFJPVFRMRSk7XG4gIC8qKlxyXG4gICAqIEtlZXAgaW5pdGlhbCBvcHRpb25zLlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgaW5pdGlhbE9wdGlvbnM7XG4gIC8qKlxyXG4gICAqIEFuIGFycmF5IGNvbnRhaW5pbmcgb2JqZWN0cyBvZiBwb2ludCBhbmQgTWVkaWFRdWVyeUxpc3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0W119XHJcbiAgICovXG5cbiAgdmFyIG1hcCA9IFtdO1xuICAvKipcclxuICAgKiBIb2xkIHRoZSBwcmV2aW91cyBicmVha3BvaW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcnx1bmRlZmluZWR9XHJcbiAgICovXG5cbiAgdmFyIHByZXZQb2ludDtcbiAgLyoqXHJcbiAgICogQnJlYWtwb2ludHMgY29tcG9uZW50IG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIEJyZWFrcG9pbnRzID0ge1xuICAgIC8qKlxyXG4gICAgICogUmVxdWlyZWQgb25seSB3aGVuIHRoZSBicmVha3BvaW50cyBkZWZpbml0aW9uIGlzIHByb3ZpZGVkIGFuZCBicm93c2VyIHN1cHBvcnRzIG1hdGNoTWVkaWEuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgKi9cbiAgICByZXF1aXJlZDogYnJlYWtwb2ludHMgJiYgbWF0Y2hNZWRpYSxcblxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgbWFwID0gT2JqZWN0LmtleXMoYnJlYWtwb2ludHMpLnNvcnQoZnVuY3Rpb24gKG4sIG0pIHtcbiAgICAgICAgcmV0dXJuICtuIC0gK207XG4gICAgICB9KS5tYXAoZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcG9pbnQ6IHBvaW50LFxuICAgICAgICAgIG1xbDogbWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6XCIgKyBwb2ludCArIFwicHgpXCIpXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIC8qXHJcbiAgICAgICAqIFRvIGtlZXAgbW9uaXRvcmluZyByZXNpemUgZXZlbnQgYWZ0ZXIgZGVzdHJ1Y3Rpb24gd2l0aG91dCBcImNvbXBsZXRlbHlcIixcclxuICAgICAgICogdXNlIG5hdGl2ZSBhZGRFdmVudExpc3RlbmVyIGluc3RlYWQgb2YgU3BsaWRlLm9uLlxyXG4gICAgICAgKi9cblxuICAgICAgdGhpcy5kZXN0cm95KHRydWUpO1xuICAgICAgYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhyb3R0bGVkQ2hlY2spOyAvLyBLZWVwIGluaXRpYWwgb3B0aW9ucyB0byBhcHBseSB0aGVtIHdoZW4gbm8gYnJlYWtwb2ludCBtYXRjaGVzLlxuXG4gICAgICBpbml0aWFsT3B0aW9ucyA9IFNwbGlkZS5vcHRpb25zO1xuICAgICAgY2hlY2soKTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBEZXN0cm95LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gY29tcGxldGVseSAtIFdoZXRoZXIgdG8gZGVzdHJveSBTcGxpZGUgY29tcGxldGVseS5cclxuICAgICAqL1xuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koY29tcGxldGVseSkge1xuICAgICAgaWYgKGNvbXBsZXRlbHkpIHtcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhyb3R0bGVkQ2hlY2spO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgLyoqXHJcbiAgICogQ2hlY2sgdGhlIGJyZWFrcG9pbnQuXHJcbiAgICovXG5cbiAgZnVuY3Rpb24gY2hlY2soKSB7XG4gICAgdmFyIHBvaW50ID0gZ2V0UG9pbnQoKTtcblxuICAgIGlmIChwb2ludCAhPT0gcHJldlBvaW50KSB7XG4gICAgICBwcmV2UG9pbnQgPSBwb2ludDtcbiAgICAgIHZhciBTdGF0ZSA9IFNwbGlkZS5TdGF0ZTtcbiAgICAgIHZhciBvcHRpb25zID0gYnJlYWtwb2ludHNbcG9pbnRdIHx8IGluaXRpYWxPcHRpb25zO1xuICAgICAgdmFyIGRlc3Ryb3kgPSBvcHRpb25zLmRlc3Ryb3k7XG5cbiAgICAgIGlmIChkZXN0cm95KSB7XG4gICAgICAgIFNwbGlkZS5vcHRpb25zID0gaW5pdGlhbE9wdGlvbnM7XG4gICAgICAgIFNwbGlkZS5kZXN0cm95KGRlc3Ryb3kgPT09ICdjb21wbGV0ZWx5Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoU3RhdGUuaXMoREVTVFJPWUVEKSkge1xuICAgICAgICAgIFNwbGlkZS5tb3VudCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgU3BsaWRlLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcclxuICAgKiBSZXR1cm4gdGhlIGJyZWFrcG9pbnQgbWF0Y2hpbmcgY3VycmVudCB3aW5kb3cgd2lkdGguXHJcbiAgICogTm90ZSB0aGF0IEFycmF5LnByb3RvdHlwZS5maW5kIGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUUuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtudW1iZXJ8c3RyaW5nfSAtIEEgYnJlYWtwb2ludCBhcyBudW1iZXIgb3Igc3RyaW5nLiAtMSBpZiBubyBwb2ludCBtYXRjaGVzLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gZ2V0UG9pbnQoKSB7XG4gICAgdmFyIGl0ZW0gPSBtYXAuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbS5tcWwubWF0Y2hlcztcbiAgICB9KVswXTtcbiAgICByZXR1cm4gaXRlbSA/IGl0ZW0ucG9pbnQgOiAtMTtcbiAgfVxuXG4gIHJldHVybiBCcmVha3BvaW50cztcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvaW5kZXguanNcbi8qKlxyXG4gKiBFeHBvcnQgY29tcG9uZW50cy5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbnZhciBDT01QTEVURSA9IHtcbiAgT3B0aW9uczogb3B0aW9ucyxcbiAgQnJlYWtwb2ludHM6IGJyZWFrcG9pbnRzLFxuICBDb250cm9sbGVyOiBjb250cm9sbGVyLFxuICBFbGVtZW50czogY29tcG9uZW50c19lbGVtZW50cyxcbiAgVHJhY2s6IHRyYWNrLFxuICBDbG9uZXM6IGNsb25lcyxcbiAgTGF5b3V0OiBsYXlvdXQsXG4gIERyYWc6IGRyYWcsXG4gIENsaWNrOiBjbGljayxcbiAgQXV0b3BsYXk6IGF1dG9wbGF5LFxuICBDb3ZlcjogY292ZXIsXG4gIEFycm93czogYXJyb3dzLFxuICBQYWdpbmF0aW9uOiBwYWdpbmF0aW9uLFxuICBMYXp5TG9hZDogbGF6eWxvYWQsXG4gIEtleWJvYXJkOiBrZXlib2FyZCxcbiAgU3luYzogc3luYyxcbiAgQTExeTogYTExeVxufTtcbnZhciBMSUdIVCA9IHtcbiAgT3B0aW9uczogb3B0aW9ucyxcbiAgQ29udHJvbGxlcjogY29udHJvbGxlcixcbiAgRWxlbWVudHM6IGNvbXBvbmVudHNfZWxlbWVudHMsXG4gIFRyYWNrOiB0cmFjayxcbiAgQ2xvbmVzOiBjbG9uZXMsXG4gIExheW91dDogbGF5b3V0LFxuICBEcmFnOiBkcmFnLFxuICBDbGljazogY2xpY2ssXG4gIEFycm93czogYXJyb3dzLFxuICBQYWdpbmF0aW9uOiBwYWdpbmF0aW9uLFxuICBBMTF5OiBhMTF5XG59O1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vYnVpbGQvbW9kdWxlL21vZHVsZS5qc1xuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qKlxyXG4gKiBFeHBvcnQgU3BsaWRlIGNsYXNzIGZvciBpbXBvcnQuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG4vKipcclxuICogRXhwb3J0IFNwbGlkZSBjbGFzcyBmb3IgaW1wb3J0IGZyb20gb3RoZXIgcHJvamVjdHMuXHJcbiAqL1xuXG52YXIgbW9kdWxlX1NwbGlkZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvcmUpIHtcbiAgX2luaGVyaXRzTG9vc2UoU3BsaWRlLCBfQ29yZSk7XG5cbiAgZnVuY3Rpb24gU3BsaWRlKHJvb3QsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gX0NvcmUuY2FsbCh0aGlzLCByb290LCBvcHRpb25zLCBDT01QTEVURSkgfHwgdGhpcztcbiAgfVxuXG4gIHJldHVybiBTcGxpZGU7XG59KFNwbGlkZSk7XG5cblxuXG4vKioqLyB9KVxuXG4vKioqKioqLyBcdH0pO1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi8gXHRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyAqL1xuLyoqKioqKi8gXHQoKCkgPT4ge1xuLyoqKioqKi8gXHRcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuLyoqKioqKi8gXHRcdFx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuLyoqKioqKi8gXHRcdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0fSkoKTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQgKi9cbi8qKioqKiovIFx0KCgpID0+IHtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKVxuLyoqKioqKi8gXHR9KSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCAqL1xuLyoqKioqKi8gXHQoKCkgPT4ge1xuLyoqKioqKi8gXHRcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuLyoqKioqKi8gXHRcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHR9KSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vKioqKioqLyBcdC8vIHN0YXJ0dXBcbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDMxMSk7XG4vKioqKioqLyB9KSgpXG47XG59KTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4vc3JjL2ZvbnRzL0NhcHN1dWxhLnR0ZlwiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDYXBzdXVsYVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVlVHlwZVxcXCIpO1xcbn1cXG5ib2R5IHtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmN2Y3O1xcbiAgZm9udC1mYW1pbHk6IENhcHN1dWxhO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9tYWluLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx1QkFBQTtFQUNBLCtEQUFBO0FBRUY7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBRUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkNhcHN1dWxhXFxcIjtcXHJcXG4gIHNyYzogdXJsKFxcXCIuL3NyYy9mb250cy9DYXBzdXVsYS50dGZcXFwiKSBmb3JtYXQoXFxcInRydWVUeXBlXFxcIik7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY3Zjc7XFxyXFxuICBmb250LWZhbWlseTogQ2Fwc3V1bGE7XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge307XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vLi4vaW1hZ2VzL2hvbWUuanBnXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkhvbWUtbW9kdWxlX19jb250YWluZXItLWZZakFIIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcXG4gIHotaW5kZXg6IDI7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDAuNSkpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5Aa2V5ZnJhbWVzIEhvbWUtbW9kdWxlX19mYWRlLS0xZkVlSSB7XFxuICAwJSB7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuLkhvbWUtbW9kdWxlX19mYWRlLWNvdmVyLS0zMjNkSCB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYW5pbWF0aW9uOiBIb21lLW1vZHVsZV9fZmFkZS0tMWZFZUkgMXMgbGluZWFyIDE7XFxufVxcblxcbi5Ib21lLW1vZHVsZV9fbG9nby0tRjJ4ckcge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICAvKiBwb3NpdGlvbiB0aGUgdG9wICBlZGdlIG9mIHRoZSBlbGVtZW50IGF0IHRoZSBtaWRkbGUgb2YgdGhlIHBhcmVudCAqL1xcbiAgLyogcG9zaXRpb24gdGhlIGxlZnQgZWRnZSBvZiB0aGUgZWxlbWVudCBhdCB0aGUgbWlkZGxlIG9mIHRoZSBwYXJlbnQgKi9cXG4gIHdpZHRoOiA2MDBweDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHotaW5kZXg6IDI7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9Ib21lLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVFBO0VBY0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUVBLFVBQUE7RUFDQSw0R0FBQTtFQUVBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQXRCRjtBQVJFO0VBU0U7SUFDRSxpQkFBQTtJQUNBLFVBQUE7RUFFSjtFQUFFO0lBQ0UsaUJBQUE7RUFFSjtFQUFFO0lBQ0UsVUFBQTtFQUVKO0FBQ0Y7O0FBWUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQTdCQSwrQ0FBQTtBQXFCRjs7QUFZQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQVUsc0VBQUE7RUFDVixzRUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQVJGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtaXhpbiBrZXlmcmFtZXMoJG5hbWUpIHtcXHJcXG4gIEBrZXlmcmFtZXMgI3skbmFtZX0ge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIGFuaW1hdGUoJGFuaW1hdGlvbiwgJGR1cmF0aW9uLCAkbWV0aG9kLCAkdGltZXMpIHtcXHJcXG4gIGFuaW1hdGlvbjogJGFuaW1hdGlvbiAkZHVyYXRpb24gJG1ldGhvZCAkdGltZXM7XFxyXFxufVxcclxcbi5jb250YWluZXIge1xcclxcbiAgQGluY2x1ZGUga2V5ZnJhbWVzKGZhZGUpIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG4gICAgNTAlIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiBibGFjaztcXHJcXG4gICAgfVxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XFxyXFxuXFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwLjUpKSxcXHJcXG4gICAgdXJsKFxcXCIuLi8uLi9pbWFnZXMvaG9tZS5qcGdcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuLmZhZGUtY292ZXIge1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIGFuaW1hdGUoZmFkZSwgMXMsIGxpbmVhciwgMSk7XFxyXFxufVxcclxcbi5sb2dvIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNTAlOyAvKiBwb3NpdGlvbiB0aGUgdG9wICBlZGdlIG9mIHRoZSBlbGVtZW50IGF0IHRoZSBtaWRkbGUgb2YgdGhlIHBhcmVudCAqL1xcclxcbiAgLyogcG9zaXRpb24gdGhlIGxlZnQgZWRnZSBvZiB0aGUgZWxlbWVudCBhdCB0aGUgbWlkZGxlIG9mIHRoZSBwYXJlbnQgKi9cXHJcXG4gIHdpZHRoOiA2MDBweDtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lLW1vZHVsZV9fY29udGFpbmVyLS1mWWpBSFwiLFxuXHRcImZhZGUtY292ZXJcIjogXCJIb21lLW1vZHVsZV9fZmFkZS1jb3Zlci0tMzIzZEhcIixcblx0XCJmYWRlXCI6IFwiSG9tZS1tb2R1bGVfX2ZhZGUtLTFmRWVJXCIsXG5cdFwibG9nb1wiOiBcIkhvbWUtbW9kdWxlX19sb2dvLS1GMnhyR1wiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5oeWJyaWRDYXJvdXNlbC1tb2R1bGVfX2NvbnRhaW5lci0tM2YyX1Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDYwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5oeWJyaWRDYXJvdXNlbC1tb2R1bGVfX2NvbnRhaW5lci0tM2YyX1MgLmh5YnJpZENhcm91c2VsLW1vZHVsZV9fY29udGVudC1jb250YWluZXItLTE1NHk2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaHlicmlkQ2Fyb3VzZWwtbW9kdWxlX19jb250ZW50LWltYWdlLS0xX0dyTSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uaHlicmlkQ2Fyb3VzZWwtbW9kdWxlX190ZXh0LWNvbnRlbnQtY29udGFpbmVyLS0zdElxSCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAyO1xcbiAgcGFkZGluZy1yaWdodDogODBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbiAgd2lkdGg6IDQwMHB4O1xcbn1cXG4uaHlicmlkQ2Fyb3VzZWwtbW9kdWxlX190ZXh0LWNvbnRlbnQtY29udGFpbmVyLS0zdElxSCBoNSB7XFxuICBmb250LXNpemU6IDQyLjg0cHg7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIGNvbG9yOiAjODYwMDE2O1xcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XFxufVxcbi5oeWJyaWRDYXJvdXNlbC1tb2R1bGVfX3RleHQtY29udGVudC1jb250YWluZXItLTN0SXFIIHAge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uaHlicmlkQ2Fyb3VzZWwtbW9kdWxlX19iYW5uZXItY29udGFpbmVyLS0zVVFqbyB7XFxuICBtYXJnaW46IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IGNhbGMoNDEuNjY2NjclIC0gMnJlbSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5oeWJyaWRDYXJvdXNlbC1tb2R1bGVfX2Jhbm5lci1jb250ZW50LS0xSXZlZTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLThyZW07XFxuICByaWdodDogLTFyZW07XFxuICBib3R0b206IC0ycmVtO1xcbiAgei1pbmRleDogMTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2h5YnJpZENhcm91c2VsLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUVBLGtCQUFBO0FBQUY7QUFDRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFFQSxtQkFBQTtFQUNBLG9CQUFBO0VBU0EsWUFBQTtBQVJGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFDSjtBQUVFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBQ0UsWUFBQTtFQUVBLGFBQUE7RUFDQSw2QkFBQTtFQUVBLGtCQUFBO0FBRkY7O0FBTUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBSkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogNjBweDtcXHJcXG5cXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIC5jb250ZW50LWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmNvbnRlbnQtaW1hZ2Uge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtY29udGVudC1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG5cXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDgwcHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXHJcXG5cXHJcXG4gIGg1IHtcXHJcXG4gICAgZm9udC1zaXplOiA0Mi44NHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcclxcbiAgICBjb2xvcjogIzg2MDAxNjtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XFxyXFxuICB9XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBwIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMztcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgfVxcclxcbn1cXHJcXG4uYmFubmVyLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IGNhbGMoNDEuNjY2NjclIC0gMnJlbSk7XFxyXFxuIFxcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbn1cXHJcXG4uYmFubmVyLWNvbnRlbnQge1xcclxcbiAgJjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogLThyZW07XFxyXFxuXFxyXFxuICAgIHJpZ2h0OiAtMXJlbTtcXHJcXG4gICAgYm90dG9tOiAtMnJlbTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJoeWJyaWRDYXJvdXNlbC1tb2R1bGVfX2NvbnRhaW5lci0tM2YyX1NcIixcblx0XCJjb250ZW50LWNvbnRhaW5lclwiOiBcImh5YnJpZENhcm91c2VsLW1vZHVsZV9fY29udGVudC1jb250YWluZXItLTE1NHk2XCIsXG5cdFwiY29udGVudC1pbWFnZVwiOiBcImh5YnJpZENhcm91c2VsLW1vZHVsZV9fY29udGVudC1pbWFnZS0tMV9Hck1cIixcblx0XCJ0ZXh0LWNvbnRlbnQtY29udGFpbmVyXCI6IFwiaHlicmlkQ2Fyb3VzZWwtbW9kdWxlX190ZXh0LWNvbnRlbnQtY29udGFpbmVyLS0zdElxSFwiLFxuXHRcImJhbm5lci1jb250YWluZXJcIjogXCJoeWJyaWRDYXJvdXNlbC1tb2R1bGVfX2Jhbm5lci1jb250YWluZXItLTNVUWpvXCIsXG5cdFwiYmFubmVyLWNvbnRlbnRcIjogXCJoeWJyaWRDYXJvdXNlbC1tb2R1bGVfX2Jhbm5lci1jb250ZW50LS0xSXZlZVwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5oeWJyaWRJbWFnZS1tb2R1bGVfX2NvbnRhaW5lci0tQVJYSnEge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4uaHlicmlkSW1hZ2UtbW9kdWxlX19leHRyYS1wYWRkaW5nLS1CQ0I1ayB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcGFkZGluZy1yaWdodDogNjBweDtcXG59XFxuXFxuLmh5YnJpZEltYWdlLW1vZHVsZV9fY29udGVudC1pbWFnZS1jb250YWluZXItLUJvR3NzIHtcXG4gIHdpZHRoOiAxMzE3cHg7XFxuICBoZWlnaHQ6IDQwcmVtO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG4uaHlicmlkSW1hZ2UtbW9kdWxlX19jb250ZW50LWltYWdlLWNvbnRhaW5lci0tQm9Hc3MgLmh5YnJpZEltYWdlLW1vZHVsZV9fY29udGVudC1pbWFnZS0tMVd6Uk4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IC00cmVtO1xcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5oeWJyaWRJbWFnZS1tb2R1bGVfX3RleHQtY29udGFpbmVyLS0zU1k1cSB7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIC8qIGxlZnQ6YXV0bzsgKi9cXG4gIC8qIHJpZ2h0Oi0zcmVtOyAqL1xcbiAgei1pbmRleDogLTE7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMSwgMiwgMC4yMjYpO1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICB0b3A6IC0xMnJlbTtcXG59XFxuLmh5YnJpZEltYWdlLW1vZHVsZV9fdGV4dC1jb250YWluZXItLTNTWTVxOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLThyZW07XFxuICBib3R0b206IC0xM3JlbTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLmh5YnJpZEltYWdlLW1vZHVsZV9fdGV4dC1jb250ZW50LWNvbnRhaW5lci0tYjBPSFkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMjtcXG4gIHBhZGRpbmctbGVmdDogNjBweDtcXG4gIHdpZHRoOiA0MDBweDtcXG59XFxuLmh5YnJpZEltYWdlLW1vZHVsZV9fdGV4dC1jb250ZW50LWNvbnRhaW5lci0tYjBPSFkgaDUge1xcbiAgZm9udC1zaXplOiA0Mi44NHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIGNvbG9yOiAjODYwMDE2O1xcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XFxufVxcbi5oeWJyaWRJbWFnZS1tb2R1bGVfX3RleHQtY29udGVudC1jb250YWluZXItLWIwT0hZIHAge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uaHlicmlkSW1hZ2UtbW9kdWxlX19iYW5uZXItY29udGFpbmVyLS0xSXlzNyB7XFxuICBtYXJnaW46IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogY2FsYyg0MS42NjY2NyUgLSAycmVtKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmh5YnJpZEltYWdlLW1vZHVsZV9fYmFubmVyLWNvbnRlbnQtLTFMZG82OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtNHJlbTtcXG4gIGxlZnQ6IGF1dG87XFxuICAvKiByaWdodDogLTNyZW07ICovXFxuICBib3R0b206IC0ycmVtO1xcbiAgei1pbmRleDogMTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2h5YnJpZEltYWdlLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQyxtQkFBQTtBQUNIOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBRUY7QUFERTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQUdKOztBQUFBO0VBQ0UsaUJBQUE7RUFFQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxXQUFBO0VBRUEsa0JBQUE7RUFDQSx1QkFBQTtFQUVBLHNDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFERjtBQUVFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBREo7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQVNBLFlBQUE7QUFURjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBQUo7QUFHRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUVBLGtCQUFBO0FBRkY7O0FBS0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFGSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVyIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG5cXHJcXG59XFxyXFxuLmV4dHJhLXBhZGRpbmd7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XFxyXFxufVxcclxcbi5jb250ZW50LWltYWdlLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTMxN3B4O1xcclxcbiAgaGVpZ2h0OiA0MHJlbTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIC5jb250ZW50LWltYWdlIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi10b3A6IC00cmVtO1xcclxcbiAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgfVxcclxcbn1cXHJcXG4udGV4dC1jb250YWluZXIge1xcclxcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxyXFxuXFxyXFxuICAvKiBsZWZ0OmF1dG87ICovXFxyXFxuICAvKiByaWdodDotM3JlbTsgKi9cXHJcXG5cXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcblxcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuXFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDEsIDIsIDAuMjI2KTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbiAgdG9wOiAtMTJyZW07XFxyXFxuICAmOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogLThyZW07XFxyXFxuXFxyXFxuICAgIGJvdHRvbTogLTEzcmVtO1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgfVxcclxcbn1cXHJcXG4udGV4dC1jb250ZW50LWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgcGFkZGluZy1sZWZ0OiA2MHB4O1xcclxcbiBcXHJcXG4gIGg1IHtcXHJcXG4gICAgZm9udC1zaXplOiA0Mi44NHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxyXFxuICAgIGNvbG9yOiAjODYwMDE2O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcXHJcXG4gIH1cXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIHAge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4zO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbi5iYW5uZXItY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiBjYWxjKDQxLjY2NjY3JSAtIDJyZW0pO1xcclxcblxcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4uYmFubmVyLWNvbnRlbnQge1xcclxcbiAgJjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogLTRyZW07XFxyXFxuICAgIGxlZnQ6IGF1dG87XFxyXFxuICAgIC8qIHJpZ2h0OiAtM3JlbTsgKi9cXHJcXG4gICAgYm90dG9tOiAtMnJlbTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJoeWJyaWRJbWFnZS1tb2R1bGVfX2NvbnRhaW5lci0tQVJYSnFcIixcblx0XCJleHRyYS1wYWRkaW5nXCI6IFwiaHlicmlkSW1hZ2UtbW9kdWxlX19leHRyYS1wYWRkaW5nLS1CQ0I1a1wiLFxuXHRcImNvbnRlbnQtaW1hZ2UtY29udGFpbmVyXCI6IFwiaHlicmlkSW1hZ2UtbW9kdWxlX19jb250ZW50LWltYWdlLWNvbnRhaW5lci0tQm9Hc3NcIixcblx0XCJjb250ZW50LWltYWdlXCI6IFwiaHlicmlkSW1hZ2UtbW9kdWxlX19jb250ZW50LWltYWdlLS0xV3pSTlwiLFxuXHRcInRleHQtY29udGFpbmVyXCI6IFwiaHlicmlkSW1hZ2UtbW9kdWxlX190ZXh0LWNvbnRhaW5lci0tM1NZNXFcIixcblx0XCJ0ZXh0LWNvbnRlbnQtY29udGFpbmVyXCI6IFwiaHlicmlkSW1hZ2UtbW9kdWxlX190ZXh0LWNvbnRlbnQtY29udGFpbmVyLS1iME9IWVwiLFxuXHRcImJhbm5lci1jb250YWluZXJcIjogXCJoeWJyaWRJbWFnZS1tb2R1bGVfX2Jhbm5lci1jb250YWluZXItLTFJeXM3XCIsXG5cdFwiYmFubmVyLWNvbnRlbnRcIjogXCJoeWJyaWRJbWFnZS1tb2R1bGVfX2Jhbm5lci1jb250ZW50LS0xTGRvNlwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5uYXZiYXItbW9kdWxlX19uYXYtd3JhcHBlci0tMU9XUmUge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiA1O1xcbn1cXG4ubmF2YmFyLW1vZHVsZV9fbmF2LXdyYXBwZXItLTFPV1JlIC5uYXZiYXItbW9kdWxlX19jb250YWluZXItLTE5S2JjIHtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcbi5uYXZiYXItbW9kdWxlX19uYXYtd3JhcHBlci0tMU9XUmUgLm5hdmJhci1tb2R1bGVfX2NvbnRhaW5lci0tMTlLYmMgLm5hdmJhci1tb2R1bGVfX2NvbnRlbnQtY29udGFpbmVyLS0xREs4ZyB7XFxuICBwYWRkaW5nOiAzMHB4O1xcbn1cXG4ubmF2YmFyLW1vZHVsZV9fbmF2LXdyYXBwZXItLTFPV1JlIC5uYXZiYXItbW9kdWxlX19jb250YWluZXItLTE5S2JjIC5uYXZiYXItbW9kdWxlX19sb2dvLWNvbnRhaW5lci0tMTNmT1gge1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG4ubmF2YmFyLW1vZHVsZV9fbmF2LXdyYXBwZXItLTFPV1JlIC5uYXZiYXItbW9kdWxlX19jb250YWluZXItLTE5S2JjIC5uYXZiYXItbW9kdWxlX19sb2dvLWNvbnRhaW5lci0tMTNmT1ggc3ZnIHtcXG4gIG9wYWNpdHk6IDcwJTtcXG4gIGZpbGw6IHdoaXRlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcXG59XFxuLm5hdmJhci1tb2R1bGVfX25hdi13cmFwcGVyLS0xT1dSZTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIC8qIFRoaXMgaXMgbmVjZXNzYXJ5IGZvciB0aGUgcHNldWRvIGVsZW1lbnQgdG8gd29yay4gKi9cXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgLyogVGhpcyB3aWxsIHB1dCB0aGUgcHNldWRvIGVsZW1lbnQgb24gaXRzIG93biBsaW5lLiAqL1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICAvKiBUaGlzIHdpbGwgY2VudGVyIHRoZSBib3JkZXIuICovXFxuICB3aWR0aDogNTAlO1xcbiAgLyogQ2hhbmdlIHRoaXMgdG8gd2hhdGV2ZXIgd2lkdGggeW91IHdhbnQuICovXFxuICAvKiBUaGlzIGNyZWF0ZXMgc29tZSBzcGFjZSBiZXR3ZWVuIHRoZSBlbGVtZW50IGFuZCB0aGUgYm9yZGVyLiAqL1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XFxuICAvKiBUaGlzIGNyZWF0ZXMgdGhlIGJvcmRlci4gUmVwbGFjZSBibGFjayB3aXRoIHdoYXRldmVyIGNvbG9yIHlvdSB3YW50LiAqL1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9uYXZiYXIubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFDRjtBQUFFO0VBQ0UsTUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBRUEsdUJBQUE7RUFNQSxpQkFBQTtBQUpKO0FBQUk7RUFDRSxhQUFBO0FBRU47QUFFSTtFQUNFLFlBQUE7QUFBTjtBQUVNO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUFSO0FBSUU7RUFDRSxXQUFBO0VBQWEsc0RBQUE7RUFDYixjQUFBO0VBQWdCLHNEQUFBO0VBQ2hCLGNBQUE7RUFBZ0IsaUNBQUE7RUFDaEIsVUFBQTtFQUFZLDRDQUFBO0VBQ1osZ0VBQUE7RUFDQSxrREFBQTtFQUFvRCx5RUFBQTtBQUd4RFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubmF2LXdyYXBwZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB6LWluZGV4OiA1O1xcclxcbiAgLmNvbnRhaW5lciB7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgICAuY29udGVudC1jb250YWluZXIge1xcclxcbiAgICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgIC5sb2dvLWNvbnRhaW5lciB7XFxyXFxuICAgICAgd2lkdGg6IDIwMHB4O1xcclxcblxcclxcbiAgICAgIHN2ZyB7XFxyXFxuICAgICAgICBvcGFjaXR5OiA3MCU7XFxyXFxuICAgICAgICBmaWxsOiB3aGl0ZTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmOmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7IC8qIFRoaXMgaXMgbmVjZXNzYXJ5IGZvciB0aGUgcHNldWRvIGVsZW1lbnQgdG8gd29yay4gKi9cXHJcXG4gICAgZGlzcGxheTogYmxvY2s7IC8qIFRoaXMgd2lsbCBwdXQgdGhlIHBzZXVkbyBlbGVtZW50IG9uIGl0cyBvd24gbGluZS4gKi9cXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87IC8qIFRoaXMgd2lsbCBjZW50ZXIgdGhlIGJvcmRlci4gKi9cXHJcXG4gICAgd2lkdGg6IDUwJTsgLyogQ2hhbmdlIHRoaXMgdG8gd2hhdGV2ZXIgd2lkdGggeW91IHdhbnQuICovXFxyXFxuICAgIC8qIFRoaXMgY3JlYXRlcyBzb21lIHNwYWNlIGJldHdlZW4gdGhlIGVsZW1lbnQgYW5kIHRoZSBib3JkZXIuICovXFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpOyAvKiBUaGlzIGNyZWF0ZXMgdGhlIGJvcmRlci4gUmVwbGFjZSBibGFjayB3aXRoIHdoYXRldmVyIGNvbG9yIHlvdSB3YW50LiAqL1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJuYXYtd3JhcHBlclwiOiBcIm5hdmJhci1tb2R1bGVfX25hdi13cmFwcGVyLS0xT1dSZVwiLFxuXHRcImNvbnRhaW5lclwiOiBcIm5hdmJhci1tb2R1bGVfX2NvbnRhaW5lci0tMTlLYmNcIixcblx0XCJjb250ZW50LWNvbnRhaW5lclwiOiBcIm5hdmJhci1tb2R1bGVfX2NvbnRlbnQtY29udGFpbmVyLS0xREs4Z1wiLFxuXHRcImxvZ28tY29udGFpbmVyXCI6IFwibmF2YmFyLW1vZHVsZV9fbG9nby1jb250YWluZXItLTEzZk9YXCJcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnF1b3RlLW1vZHVsZV9fY29udGFpbmVyLS0yaExsVyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ucXVvdGUtbW9kdWxlX19jb250YWluZXItLTJoTGxXIC5xdW90ZS1tb2R1bGVfX2NvbnRlbnQtY29udGFpbmVyLS1TMFFBbCB7XFxuICB3aWR0aDogODAwcHg7XFxufVxcblxcbi5xdW90ZS1tb2R1bGVfX2NvbnRlbnQtaW1hZ2UtLTFIb3J0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9xdW90ZS5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0FBQUY7QUFDRTtFQUNFLFlBQUE7QUFDSjs7QUFFQTtFQUNFLFdBQUE7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuXFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAuY29udGVudC1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogODAwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcbi5jb250ZW50LWltYWdlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJxdW90ZS1tb2R1bGVfX2NvbnRhaW5lci0tMmhMbFdcIixcblx0XCJjb250ZW50LWNvbnRhaW5lclwiOiBcInF1b3RlLW1vZHVsZV9fY29udGVudC1jb250YWluZXItLVMwUUFsXCIsXG5cdFwiY29udGVudC1pbWFnZVwiOiBcInF1b3RlLW1vZHVsZV9fY29udGVudC1pbWFnZS0tMUhvcnRcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc29jaWFscy1tb2R1bGVfX2NvbnRhaW5lci0tMVlWRVgge1xcbiAgei1pbmRleDogMztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogODBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMThweDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG4uc29jaWFscy1tb2R1bGVfX2NvbnRhaW5lci0tMVlWRVggLnNvY2lhbHMtbW9kdWxlX19jb250ZW50LWNvbnRhaW5lci0tMWJLVXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZ2FwOiA5MHB4O1xcbn1cXG4uc29jaWFscy1tb2R1bGVfX2NvbnRhaW5lci0tMVlWRVggLnNvY2lhbHMtbW9kdWxlX19jb250ZW50LWNvbnRhaW5lci0tMWJLVXYgc3ZnIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgZmlsbDogYmxhY2sgIWltcG9ydGFudDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc29jaWFscy5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQUE7RUFFQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFFQSxpQkFBQTtBQURGO0FBRUU7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0FBQUo7QUFDSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBRUEsc0JBQUE7QUFBTlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVyIHtcXHJcXG4gIHotaW5kZXg6IDM7XFxyXFxuXFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDgwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDE4cHg7XFxyXFxuXFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gIC5jb250ZW50LWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBnYXA6IDkwcHg7XFxyXFxuICAgIHN2ZyB7XFxyXFxuICAgICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICAgIHdpZHRoOiA0MHB4O1xcclxcblxcclxcbiAgICAgIGZpbGw6IGJsYWNrICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwic29jaWFscy1tb2R1bGVfX2NvbnRhaW5lci0tMVlWRVhcIixcblx0XCJjb250ZW50LWNvbnRhaW5lclwiOiBcInNvY2lhbHMtbW9kdWxlX19jb250ZW50LWNvbnRhaW5lci0tMWJLVXZcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIudmlkZW9SZW5kZXItbW9kdWxlX19jb250YWluZXItLTJxWWdtIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1hcmdpbi10b3A6IDIwcmVtO1xcbn1cXG5cXG4udmlkZW9SZW5kZXItbW9kdWxlX19jb250ZW50LWltYWdlLWNvbnRhaW5lci0tM01IcFIge1xcbiAgd2lkdGg6IDEzMTdweDtcXG4gIGhlaWdodDogNDByZW07XFxuICBtYXJnaW46IGF1dG87XFxufVxcbi52aWRlb1JlbmRlci1tb2R1bGVfX2NvbnRlbnQtaW1hZ2UtY29udGFpbmVyLS0zTUhwUiAudmlkZW9SZW5kZXItbW9kdWxlX19jb250ZW50LWltYWdlLS1PM3NaYiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogLTRyZW07XFxuICBvYmplY3QtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLnZpZGVvUmVuZGVyLW1vZHVsZV9fdGV4dC1jb250YWluZXItLTJiMnIxIHtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgLyogbGVmdDphdXRvOyAqL1xcbiAgLyogcmlnaHQ6LTNyZW07ICovXFxuICB6LWluZGV4OiAtMTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAxLCAyLCAwLjIyNik7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIHRvcDogLTEycmVtO1xcbn1cXG5cXG4udmlkZW9SZW5kZXItbW9kdWxlX190ZXh0LWNvbnRlbnQtY29udGFpbmVyLS1Ba1ZtNiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAyO1xcbiAgcGFkZGluZy1sZWZ0OiA2MHB4O1xcbiAgd2lkdGg6IDQwMHB4O1xcbn1cXG4udmlkZW9SZW5kZXItbW9kdWxlX190ZXh0LWNvbnRlbnQtY29udGFpbmVyLS1Ba1ZtNiBoNSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC03NTBweDtcXG4gIGZvbnQtc2l6ZTogNDIuODRweDtcXG4gIHJpZ2h0OiA0NTBweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBjb2xvcjogIzg2MDAxNjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcXG59XFxuLnZpZGVvUmVuZGVyLW1vZHVsZV9fdGV4dC1jb250ZW50LWNvbnRhaW5lci0tQWtWbTYgcCB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuMztcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi52aWRlb1JlbmRlci1tb2R1bGVfX2Jhbm5lci1jb250YWluZXItLTN6SlJjIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiBjYWxjKDQxLjY2NjY3JSAtIDYwcmVtKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnZpZGVvUmVuZGVyLW1vZHVsZV9fYmFubmVyLWNvbnRlbnQtLTI2WG1DOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtNDlyZW07XFxuICBsZWZ0OiBhdXRvO1xcbiAgcmlnaHQ6IC0xcmVtO1xcbiAgYm90dG9tOiAyMHJlbTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vdmlkZW9SZW5kZXIubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFFRjtBQUFFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQ0E7RUFDRSxpQkFBQTtFQUVBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLFdBQUE7RUFFQSxrQkFBQTtFQUNBLHVCQUFBO0VBRUEsc0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUZGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFjQSxZQUFBO0FBZEY7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0MsbUJBQUE7RUFDRCxvQkFBQTtBQURKO0FBSUU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0E7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFFQSxrQkFBQTtBQUhGOztBQU1FO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFISlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVyIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIG1hcmdpbi10b3A6IDIwcmVtO1xcclxcbn1cXHJcXG4uY29udGVudC1pbWFnZS1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEzMTdweDtcXHJcXG4gIGhlaWdodDogNDByZW07XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuXFxyXFxuICAuY29udGVudC1pbWFnZSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAtNHJlbTtcXHJcXG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLnRleHQtY29udGFpbmVyIHtcXHJcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcblxcclxcbiAgLyogbGVmdDphdXRvOyAqL1xcclxcbiAgLyogcmlnaHQ6LTNyZW07ICovXFxyXFxuXFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG5cXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcblxcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAxLCAyLCAwLjIyNik7XFxyXFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG4gIHRvcDogLTEycmVtO1xcclxcbn1cXHJcXG4udGV4dC1jb250ZW50LWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgcGFkZGluZy1sZWZ0OiA2MHB4O1xcclxcblxcclxcbiAgaDUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogLTc1MHB4O1xcclxcbiAgICBmb250LXNpemU6IDQyLjg0cHg7XFxyXFxuICAgIHJpZ2h0OiA0NTBweDtcXHJcXG4gICAgXFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXHJcXG4gICAgY29sb3I6ICM4NjAwMTY7XFxyXFxuICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcXHJcXG4gIH1cXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIHAge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4zO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbi5iYW5uZXItY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiBjYWxjKDQxLjY2NjY3JSAtIDYwcmVtKTtcXHJcXG5cXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLmJhbm5lci1jb250ZW50IHtcXHJcXG4gICY6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IC00OXJlbTtcXHJcXG4gICAgbGVmdDogYXV0bztcXHJcXG4gICAgcmlnaHQ6IC0xcmVtO1xcclxcbiAgICBib3R0b206IDIwcmVtO1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJ2aWRlb1JlbmRlci1tb2R1bGVfX2NvbnRhaW5lci0tMnFZZ21cIixcblx0XCJjb250ZW50LWltYWdlLWNvbnRhaW5lclwiOiBcInZpZGVvUmVuZGVyLW1vZHVsZV9fY29udGVudC1pbWFnZS1jb250YWluZXItLTNNSHBSXCIsXG5cdFwiY29udGVudC1pbWFnZVwiOiBcInZpZGVvUmVuZGVyLW1vZHVsZV9fY29udGVudC1pbWFnZS0tTzNzWmJcIixcblx0XCJ0ZXh0LWNvbnRhaW5lclwiOiBcInZpZGVvUmVuZGVyLW1vZHVsZV9fdGV4dC1jb250YWluZXItLTJiMnIxXCIsXG5cdFwidGV4dC1jb250ZW50LWNvbnRhaW5lclwiOiBcInZpZGVvUmVuZGVyLW1vZHVsZV9fdGV4dC1jb250ZW50LWNvbnRhaW5lci0tQWtWbTZcIixcblx0XCJiYW5uZXItY29udGFpbmVyXCI6IFwidmlkZW9SZW5kZXItbW9kdWxlX19iYW5uZXItY29udGFpbmVyLS0zekpSY1wiLFxuXHRcImJhbm5lci1jb250ZW50XCI6IFwidmlkZW9SZW5kZXItbW9kdWxlX19iYW5uZXItY29udGVudC0tMjZYbUNcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIud3JhcHBlci1tb2R1bGVfX2NvbnRhaW5lci0tMy1sY0kge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjdmNztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogNDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLndyYXBwZXItbW9kdWxlX19zY3JvbGwtaGVhZGVyLS1SZFJiQyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IC0xMzBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogMTMwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDY7XFxufVxcblxcbi53cmFwcGVyLW1vZHVsZV9fY29udGVudC1jb250YWluZXItLVJVOHBvIHtcXG4gIHBhZGRpbmc6IGF1dG8gODBweCBhdXRvIDgwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3dyYXBwZXIubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBQTtFQUVBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUVBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFERjs7QUFHQTtFQUVFLDRCQUFBO0FBREZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmN2Y3O1xcclxcblxcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB6LWluZGV4OiA0O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgXFxyXFxufVxcclxcbi5zY3JvbGwtaGVhZGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogLTEzMHB4O1xcclxcblxcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgaGVpZ2h0OiAxMzBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgei1pbmRleDogNjtcXHJcXG59XFxyXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXHJcXG5cXHJcXG4gIHBhZGRpbmc6IGF1dG8gODBweCBhdXRvIDgwcHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIndyYXBwZXItbW9kdWxlX19jb250YWluZXItLTMtbGNJXCIsXG5cdFwic2Nyb2xsLWhlYWRlclwiOiBcIndyYXBwZXItbW9kdWxlX19zY3JvbGwtaGVhZGVyLS1SZFJiQ1wiLFxuXHRcImNvbnRlbnQtY29udGFpbmVyXCI6IFwid3JhcHBlci1tb2R1bGVfX2NvbnRlbnQtY29udGFpbmVyLS1SVThwb1wiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5nYWxsZXJ5U2xpZGVyLW1vZHVsZV9faW1hZ2UtY29udGFpbmVyLS1Va0ZDaiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5nYWxsZXJ5U2xpZGVyLW1vZHVsZV9faW1hZ2UtY29udGFpbmVyLS1Va0ZDaiAuZ2FsbGVyeVNsaWRlci1tb2R1bGVfX2dhbGxlcnktaW1hZ2UtLTIzcGpHIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5nYWxsZXJ5U2xpZGVyLW1vZHVsZV9fZ2FsbGVyeS1jb250YWluZXItLUFWTUhqIHtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiAxMTk0cHg7XFxuICBtYXJnaW4tdG9wOiAtOTBweDtcXG59XFxuXFxuLmdhbGxlcnlTbGlkZXItbW9kdWxlX19oeWJyaWQtZ2FsbGVyeS1jb250YWluZXItLTJrelc1IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDExNjRweDtcXG59XFxuXFxuLmdhbGxlcnlTbGlkZXItbW9kdWxlX19sZWZ0LS1iSWNEQSB7XFxuICBsZWZ0OiAtNWVtO1xcbn1cXG4uZ2FsbGVyeVNsaWRlci1tb2R1bGVfX2xlZnQtLWJJY0RBIHN2ZyB7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XFxufVxcblxcbi5nYWxsZXJ5U2xpZGVyLW1vZHVsZV9fcmlnaHQtLTF3RWExIHtcXG4gIHJpZ2h0OiAtNWVtO1xcbn1cXG5cXG4uZ2FsbGVyeVNsaWRlci1tb2R1bGVfX2h5YnJpZC1jYXJvdXNlbC1sZWZ0LS0xcllzVyB7XFxuICBib3R0b206IDA7XFxuICB0b3A6IGF1dG87XFxuICByaWdodDogNjBweDtcXG59XFxuLmdhbGxlcnlTbGlkZXItbW9kdWxlX19oeWJyaWQtY2Fyb3VzZWwtbGVmdC0tMXJZc1cgc3ZnIHtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcXG59XFxuXFxuLmdhbGxlcnlTbGlkZXItbW9kdWxlX19oeWJyaWQtY2Fyb3VzZWwtcmlnaHQtLXprQldNIHtcXG4gIGJvdHRvbTogMDtcXG4gIHRvcDogYXV0bztcXG4gIHJpZ2h0OiAyMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9nYWxsZXJ5U2xpZGVyLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQUU7RUFDRSxXQUFBO0VBRUEsOEJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0UsU0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0FBRUY7O0FBQUE7RUFDRSxVQUFBO0FBR0Y7QUFGRTtFQUNFLHFCQUFBO0FBSUo7O0FBREE7RUFDRSxXQUFBO0FBSUY7O0FBRkE7RUFDRSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFLRjtBQUpFO0VBQ0UscUJBQUE7QUFNSjs7QUFIQTtFQUNFLFNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQU1GXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5pbWFnZS1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgLmdhbGxlcnktaW1hZ2Uge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmdhbGxlcnktY29udGFpbmVyIHtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHdpZHRoOiAxMTk0cHg7XFxyXFxuICBtYXJnaW4tdG9wOiAtOTBweDtcXHJcXG59XFxyXFxuLmh5YnJpZC1nYWxsZXJ5LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAxMTY0cHg7XFxyXFxufVxcclxcbi5sZWZ0IHtcXHJcXG4gIGxlZnQ6IC01ZW07XFxyXFxuICBzdmcge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XFxyXFxuICB9XFxyXFxufVxcclxcbi5yaWdodCB7XFxyXFxuICByaWdodDogLTVlbTtcXHJcXG59XFxyXFxuLmh5YnJpZC1jYXJvdXNlbC1sZWZ0IHtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHRvcDogYXV0bztcXHJcXG4gIHJpZ2h0OiA2MHB4O1xcclxcbiAgc3ZnIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xcclxcbiAgfVxcclxcbn1cXHJcXG4uaHlicmlkLWNhcm91c2VsLXJpZ2h0IHtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHRvcDogYXV0bztcXHJcXG4gIHJpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJpbWFnZS1jb250YWluZXJcIjogXCJnYWxsZXJ5U2xpZGVyLW1vZHVsZV9faW1hZ2UtY29udGFpbmVyLS1Va0ZDalwiLFxuXHRcImdhbGxlcnktaW1hZ2VcIjogXCJnYWxsZXJ5U2xpZGVyLW1vZHVsZV9fZ2FsbGVyeS1pbWFnZS0tMjNwakdcIixcblx0XCJnYWxsZXJ5LWNvbnRhaW5lclwiOiBcImdhbGxlcnlTbGlkZXItbW9kdWxlX19nYWxsZXJ5LWNvbnRhaW5lci0tQVZNSGpcIixcblx0XCJoeWJyaWQtZ2FsbGVyeS1jb250YWluZXJcIjogXCJnYWxsZXJ5U2xpZGVyLW1vZHVsZV9faHlicmlkLWdhbGxlcnktY29udGFpbmVyLS0ya3pXNVwiLFxuXHRcImxlZnRcIjogXCJnYWxsZXJ5U2xpZGVyLW1vZHVsZV9fbGVmdC0tYkljREFcIixcblx0XCJyaWdodFwiOiBcImdhbGxlcnlTbGlkZXItbW9kdWxlX19yaWdodC0tMXdFYTFcIixcblx0XCJoeWJyaWQtY2Fyb3VzZWwtbGVmdFwiOiBcImdhbGxlcnlTbGlkZXItbW9kdWxlX19oeWJyaWQtY2Fyb3VzZWwtbGVmdC0tMXJZc1dcIixcblx0XCJoeWJyaWQtY2Fyb3VzZWwtcmlnaHRcIjogXCJnYWxsZXJ5U2xpZGVyLW1vZHVsZV9faHlicmlkLWNhcm91c2VsLXJpZ2h0LS16a0JXTVwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1swXS51c2VbMV0hLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSG9tZS5tb2R1bGUuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2h5YnJpZENhcm91c2VsLm1vZHVsZS5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaHlicmlkSW1hZ2UubW9kdWxlLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXZiYXIubW9kdWxlLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9xdW90ZS5tb2R1bGUuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NvY2lhbHMubW9kdWxlLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi92aWRlb1JlbmRlci5tb2R1bGUuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dyYXBwZXIubW9kdWxlLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYWxsZXJ5U2xpZGVyLm1vZHVsZS5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyByb2xlPVxcXCJpbWdcXFwiIGZpbGw9XFxcIndoaXRlXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHRpdGxlPkZhY2Vib29rPC90aXRsZT48cGF0aCBkPVxcXCJNMjQgMTIuMDczYzAtNi42MjctNS4zNzMtMTItMTItMTJzLTEyIDUuMzczLTEyIDEyYzAgNS45OSA0LjM4OCAxMC45NTQgMTAuMTI1IDExLjg1NHYtOC4zODVINy4wNzh2LTMuNDdoMy4wNDdWOS40M2MwLTMuMDA3IDEuNzkyLTQuNjY5IDQuNTMzLTQuNjY5IDEuMzEyIDAgMi42ODYuMjM1IDIuNjg2LjIzNXYyLjk1M0gxNS44M2MtMS40OTEgMC0xLjk1Ni45MjUtMS45NTYgMS44NzR2Mi4yNWgzLjMyOGwtLjUzMiAzLjQ3aC0yLjc5NnY4LjM4NUMxOS42MTIgMjMuMDI3IDI0IDE4LjA2MiAyNCAxMi4wNzN6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyByb2xlPVxcXCJpbWdcXFwiIGZpbGw9XFxcIndoaXRlXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHRpdGxlPkluc3RhZ3JhbTwvdGl0bGU+PHBhdGggZD1cXFwiTTEyIDBDOC43NCAwIDguMzMzLjAxNSA3LjA1My4wNzIgNS43NzUuMTMyIDQuOTA1LjMzMyA0LjE0LjYzYy0uNzg5LjMwNi0xLjQ1OS43MTctMi4xMjYgMS4zODRTLjkzNSAzLjM1LjYzIDQuMTRDLjMzMyA0LjkwNS4xMzEgNS43NzUuMDcyIDcuMDUzLjAxMiA4LjMzMyAwIDguNzQgMCAxMnMuMDE1IDMuNjY3LjA3MiA0Ljk0N2MuMDYgMS4yNzcuMjYxIDIuMTQ4LjU1OCAyLjkxMy4zMDYuNzg4LjcxNyAxLjQ1OSAxLjM4NCAyLjEyNi42NjcuNjY2IDEuMzM2IDEuMDc5IDIuMTI2IDEuMzg0Ljc2Ni4yOTYgMS42MzYuNDk5IDIuOTEzLjU1OEM4LjMzMyAyMy45ODggOC43NCAyNCAxMiAyNHMzLjY2Ny0uMDE1IDQuOTQ3LS4wNzJjMS4yNzctLjA2IDIuMTQ4LS4yNjIgMi45MTMtLjU1OC43ODgtLjMwNiAxLjQ1OS0uNzE4IDIuMTI2LTEuMzg0LjY2Ni0uNjY3IDEuMDc5LTEuMzM1IDEuMzg0LTIuMTI2LjI5Ni0uNzY1LjQ5OS0xLjYzNi41NTgtMi45MTMuMDYtMS4yOC4wNzItMS42ODcuMDcyLTQuOTQ3cy0uMDE1LTMuNjY3LS4wNzItNC45NDdjLS4wNi0xLjI3Ny0uMjYyLTIuMTQ5LS41NTgtMi45MTMtLjMwNi0uNzg5LS43MTgtMS40NTktMS4zODQtMi4xMjZDMjEuMzE5IDEuMzQ3IDIwLjY1MS45MzUgMTkuODYuNjNjLS43NjUtLjI5Ny0xLjYzNi0uNDk5LTIuOTEzLS41NThDMTUuNjY3LjAxMiAxNS4yNiAwIDEyIDB6bTAgMi4xNmMzLjIwMyAwIDMuNTg1LjAxNiA0Ljg1LjA3MSAxLjE3LjA1NSAxLjgwNS4yNDkgMi4yMjcuNDE1LjU2Mi4yMTcuOTYuNDc3IDEuMzgyLjg5Ni40MTkuNDIuNjc5LjgxOS44OTYgMS4zODEuMTY0LjQyMi4zNiAxLjA1Ny40MTMgMi4yMjcuMDU3IDEuMjY2LjA3IDEuNjQ2LjA3IDQuODVzLS4wMTUgMy41ODUtLjA3NCA0Ljg1Yy0uMDYxIDEuMTctLjI1NiAxLjgwNS0uNDIxIDIuMjI3LS4yMjQuNTYyLS40NzkuOTYtLjg5OSAxLjM4Mi0uNDE5LjQxOS0uODI0LjY3OS0xLjM4Ljg5Ni0uNDIuMTY0LTEuMDY1LjM2LTIuMjM1LjQxMy0xLjI3NC4wNTctMS42NDkuMDctNC44NTkuMDctMy4yMTEgMC0zLjU4Ni0uMDE1LTQuODU5LS4wNzQtMS4xNzEtLjA2MS0xLjgxNi0uMjU2LTIuMjM2LS40MjEtLjU2OS0uMjI0LS45Ni0uNDc5LTEuMzc5LS44OTktLjQyMS0uNDE5LS42OS0uODI0LS45LTEuMzgtLjE2NS0uNDItLjM1OS0xLjA2NS0uNDItMi4yMzUtLjA0NS0xLjI2LS4wNjEtMS42NDktLjA2MS00Ljg0NCAwLTMuMTk2LjAxNi0zLjU4Ni4wNjEtNC44NjEuMDYxLTEuMTcuMjU1LTEuODE0LjQyLTIuMjM0LjIxLS41Ny40NzktLjk2LjktMS4zODEuNDE5LS40MTkuODEtLjY4OSAxLjM3OS0uODk4LjQyLS4xNjYgMS4wNTEtLjM2MSAyLjIyMS0uNDIxIDEuMjc1LS4wNDUgMS42NS0uMDYgNC44NTktLjA2bC4wNDUuMDN6bTAgMy42NzhjLTMuNDA1IDAtNi4xNjIgMi43Ni02LjE2MiA2LjE2MiAwIDMuNDA1IDIuNzYgNi4xNjIgNi4xNjIgNi4xNjIgMy40MDUgMCA2LjE2Mi0yLjc2IDYuMTYyLTYuMTYyIDAtMy40MDUtMi43Ni02LjE2Mi02LjE2Mi02LjE2MnpNMTIgMTZjLTIuMjEgMC00LTEuNzktNC00czEuNzktNCA0LTQgNCAxLjc5IDQgNC0xLjc5IDQtNCA0em03Ljg0Ni0xMC40MDVjMCAuNzk1LS42NDYgMS40NC0xLjQ0IDEuNDQtLjc5NSAwLTEuNDQtLjY0Ni0xLjQ0LTEuNDQgMC0uNzk0LjY0Ni0xLjQzOSAxLjQ0LTEuNDM5Ljc5My0uMDAxIDEuNDQuNjQ1IDEuNDQgMS40Mzl6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyByb2xlPVxcXCJpbWdcXFwiIGZpbGw9XFxcIndoaXRlXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHRpdGxlPkxpbmtlZEluPC90aXRsZT48cGF0aCBkPVxcXCJNMjAuNDQ3IDIwLjQ1MmgtMy41NTR2LTUuNTY5YzAtMS4zMjgtLjAyNy0zLjAzNy0xLjg1Mi0zLjAzNy0xLjg1MyAwLTIuMTM2IDEuNDQ1LTIuMTM2IDIuOTM5djUuNjY3SDkuMzUxVjloMy40MTR2MS41NjFoLjA0NmMuNDc3LS45IDEuNjM3LTEuODUgMy4zNy0xLjg1IDMuNjAxIDAgNC4yNjcgMi4zNyA0LjI2NyA1LjQ1NXY2LjI4NnpNNS4zMzcgNy40MzNjLTEuMTQ0IDAtMi4wNjMtLjkyNi0yLjA2My0yLjA2NSAwLTEuMTM4LjkyLTIuMDYzIDIuMDYzLTIuMDYzIDEuMTQgMCAyLjA2NC45MjUgMi4wNjQgMi4wNjMgMCAxLjEzOS0uOTI1IDIuMDY1LTIuMDY0IDIuMDY1em0xLjc4MiAxMy4wMTlIMy41NTVWOWgzLjU2NHYxMS40NTJ6TTIyLjIyNSAwSDEuNzcxQy43OTIgMCAwIC43NzQgMCAxLjcyOXYyMC41NDJDMCAyMy4yMjcuNzkyIDI0IDEuNzcxIDI0aDIwLjQ1MUMyMy4yIDI0IDI0IDIzLjIyNyAyNCAyMi4yNzFWMS43MjlDMjQgLjc3NCAyMy4yIDAgMjIuMjIyIDBoLjAwM3pcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHJvbGU9XFxcImltZ1xcXCIgZmlsbD1cXFwid2hpdGVcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48dGl0bGU+VHdpdHRlcjwvdGl0bGU+PHBhdGggZD1cXFwiTTIzLjk1MyA0LjU3YTEwIDEwIDAgMDEtMi44MjUuNzc1IDQuOTU4IDQuOTU4IDAgMDAyLjE2My0yLjcyM2MtLjk1MS41NTUtMi4wMDUuOTU5LTMuMTI3IDEuMTg0YTQuOTIgNC45MiAwIDAwLTguMzg0IDQuNDgyQzcuNjkgOC4wOTUgNC4wNjcgNi4xMyAxLjY0IDMuMTYyYTQuODIyIDQuODIyIDAgMDAtLjY2NiAyLjQ3NWMwIDEuNzEuODcgMy4yMTMgMi4xODggNC4wOTZhNC45MDQgNC45MDQgMCAwMS0yLjIyOC0uNjE2di4wNmE0LjkyMyA0LjkyMyAwIDAwMy45NDYgNC44MjcgNC45OTYgNC45OTYgMCAwMS0yLjIxMi4wODUgNC45MzYgNC45MzYgMCAwMDQuNjA0IDMuNDE3IDkuODY3IDkuODY3IDAgMDEtNi4xMDIgMi4xMDVjLS4zOSAwLS43NzktLjAyMy0xLjE3LS4wNjdhMTMuOTk1IDEzLjk5NSAwIDAwNy41NTcgMi4yMDljOS4wNTMgMCAxMy45OTgtNy40OTYgMTMuOTk4LTEzLjk4NSAwLS4yMSAwLS40Mi0uMDE1LS42M0E5LjkzNSA5LjkzNSAwIDAwMjQgNC41OXpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmVyc2lvbj1cXFwiMS4wXFxcIiB2aWV3Qm94PVxcXCIwIDAgMzUwLjAwMDAwMCAxMTEuMDAwMDAwXFxcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVxcXCJ4TWlkWU1pZCBtZWV0XFxcIj48ZyB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgwLjAwMDAwMCwxMTEuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApXFxcIiBzdHJva2U9XFxcIm5vbmVcXFwiPjxwYXRoIGQ9XFxcIk03MCA3NDAgYzAgLTM2MyAwIC0zNzAgMjAgLTM3MCAyMCAwIDIwIDcgMjAgMzcwIDAgMzYzIDAgMzcwIC0yMCAzNzAgLTIwIDAgLTIwIC03IC0yMCAtMzcwelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xMjAgNzQwIGMwIC0zNjMgMCAtMzcwIDIwIC0zNzAgMjAgMCAyMCA3IDIwIDM3MCAwIDM2MyAwIDM3MCAtMjAgMzcwIC0yMCAwIC0yMCAtNyAtMjAgLTM3MHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMjQwIDc0MCBsMCAtMzcwIDM1IDAgMzUgMCAwIDM3MCAwIDM3MCAtMzUgMCAtMzUgMCAwIC0zNzB6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTM4MCA3NDAgbDAgLTM3MCA0NSAwIDQ1IDAgMCAzNzAgMCAzNzAgLTQ1IDAgLTQ1IDAgMCAtMzcwelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk00OTAgNzQwIGwwIC0zNzAgNTAgMCA1MCAwIDAgMzcwIDAgMzcwIC01MCAwIC01MCAwIDAgLTM3MHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNNjIwIDExMDUgYzAgLTMgMCAtMTY4IDAgLTM2NyBsLTEgLTM2MyAyNiAtMyAyNSAtMyAwIDM3MCAwIDM3MSAtMjUgMCBjLTE0IDAgLTI1IC0yIC0yNSAtNXpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNNjk3IDExMDQgYy00IC00IC03IC0xNzEgLTcgLTM3MSBsMCAtMzY0IDIzIDMgMjIgMyAwIDM2NSBjMCAzMjEgLTIgMzY1IC0xNSAzNjggLTkgMSAtMTkgMCAtMjMgLTR6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTgwMCA3NDAgbDAgLTM3MCAzNSAwIDM1IDAgMCAzNzAgMCAzNzAgLTM1IDAgLTM1IDAgMCAtMzcwelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk04OTAgNzQwIGMwIC0zNjMgMCAtMzcwIDIwIC0zNzAgMjAgMCAyMCA3IDIwIDM3MCAwIDM2MyAwIDM3MCAtMjAgMzcwIC0yMCAwIC0yMCAtNyAtMjAgLTM3MHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTAwMCA3NDAgYzAgLTMyOCAyIC0zNzEgMTUgLTM2OCAxNCAzIDE2IDQ4IDE2IDM2OCAwIDMyMCAtMiAzNjUgLTE2IDM2OCAtMTMgMyAtMTUgLTQwIC0xNSAtMzY4elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xMTEwIDExMDUgYzAgLTMgMCAtMTY4IDAgLTM2NyBsLTEgLTM2MyAzNiAtMyAzNSAtMyAwIDM3MCAwIDM3MSAtMzUgMCBjLTE5IDAgLTM1IC0yIC0zNSAtNXpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTIwMCA3NDAgbDAgLTM3MCA0NSAwIDQ1IDAgMCAzNzAgMCAzNzAgLTQ1IDAgLTQ1IDAgMCAtMzcwelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xNjE1IDEwOTcgYy0zIC02IC00IC0xNzIgLTMgLTM2NyAzIC0zMjkgNCAtMzU1IDIxIC0zNTggMTYgLTMgMTcgMjAgMTcgMzY3IDAgMzI3IC0yIDM3MSAtMTUgMzcxIC05IDAgLTE4IC02IC0yMCAtMTN6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTE3MzAgNzQwIGwwIC0zNzAgMzAgMCAzMCAwIDAgMzcwIDAgMzcwIC0zMCAwIC0zMCAwIDAgLTM3MHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTg3MCA3NDAgYzAgLTM0OCAxIC0zNzEgMTggLTM2OCAxNiAzIDE3IDI5IDE3IDM2OCAwIDMzOSAtMSAzNjUgLTE3IDM2OCAtMTcgMyAtMTggLTIwIC0xOCAtMzY4elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xOTMwIDExMDUgYzAgLTMgMCAtMTY4IDAgLTM2NyBsLTEgLTM2MyAzMSAtMyAzMCAtMyAwIDM3MCAwIDM3MSAtMzAgMCBjLTE2IDAgLTMwIC0yIC0zMCAtNXpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMjA2MCA3NDAgYzAgLTM2MyAwIC0zNzAgMjAgLTM3MCAyMCAwIDIwIDcgMjAgMzcwIDAgMzYzIDAgMzcwIC0yMCAzNzAgLTIwIDAgLTIwIC03IC0yMCAtMzcwelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0yMTIwIDc0MCBsMCAtMzcwIDQ1IDAgNDUgMCAwIDM3MCAwIDM3MCAtNDUgMCAtNDUgMCAwIC0zNzB6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTIyNDAgNzQwIGMwIC0zMjIgMiAtMzcwIDE1IC0zNzAgMTMgMCAxNSA0OCAxNSAzNzAgMCAzMjIgLTIgMzcwIC0xNSAzNzAgLTEzIDAgLTE1IC00OCAtMTUgLTM3MHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMjMwMCA3NDAgYzAgLTMyMiAyIC0zNzAgMTUgLTM3MCAxMyAwIDE1IDQ4IDE1IDM3MCAwIDMyMiAtMiAzNzAgLTE1IDM3MCAtMTMgMCAtMTUgLTQ4IC0xNSAtMzcwelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0yNDEwIDExMDUgYzAgLTMgMCAtMTY4IDAgLTM2NyBsLTEgLTM2MyAzMSAtMyAzMCAtMyAwIDM3MCAwIDM3MSAtMzAgMCBjLTE2IDAgLTMwIC0yIC0zMCAtNXpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMjU0MCA3NDAgYzAgLTM2MyAwIC0zNzAgMjAgLTM3MCAyMCAwIDIwIDcgMjAgMzcwIDAgMzYzIDAgMzcwIC0yMCAzNzAgLTIwIDAgLTIwIC03IC0yMCAtMzcwelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0yNjAwIDc0MCBsMCAtMzcwIDQ1IDAgNDUgMCAwIDM3MCAwIDM3MCAtNDUgMCAtNDUgMCAwIC0zNzB6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTI3NzAgMTEwNSBjMCAtMyAwIC0xNjggMCAtMzY3IGwtMSAtMzYzIDMxIC0zIDMwIC0zIDAgMzcwIDAgMzcxIC0zMCAwIGMtMTYgMCAtMzAgLTIgLTMwIC01elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0yODU3IDExMDMgYy00IC0zIC03IC0xNzAgLTcgLTM3MCAwIC0zNTYgMCAtMzYzIDIwIC0zNjMgMjAgMCAyMCA3IDIwIDM3MCAwIDMwMiAtMiAzNzAgLTEzIDM3MCAtOCAwIC0xNyAtMyAtMjAgLTd6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTI5NjAgNzQwIGwwIC0zNzAgMjUgMCAyNSAwIDAgMzcwIDAgMzcwIC0yNSAwIC0yNSAwIDAgLTM3MHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMzA4MCA3NDAgbDAgLTM3MCAzMCAwIDMwIDAgMCAzNzAgMCAzNzAgLTMwIDAgLTMwIDAgMCAtMzcwelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0zMTYwIDc0MCBjMCAtMzYzIDAgLTM3MCAyMCAtMzcwIDIwIDAgMjAgNyAyMCAzNzAgMCAzNjMgMCAzNzAgLTIwIDM3MCAtMjAgMCAtMjAgLTcgLTIwIC0zNzB6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTMyNzAgNzQwIGwwIC0zNzAgNTAgMCA1MCAwIDAgMzcwIDAgMzcwIC01MCAwIC01MCAwIDAgLTM3MHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMzM5MCA3NDAgbDAgLTM3MCAzMCAwIDMwIDAgMCAzNzAgMCAzNzAgLTMwIDAgLTMwIDAgMCAtMzcwelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0yMTc5IDMzNiBjLTI3IC0xMyAtMzcgLTU3IC0xNyAtNzMgNyAtNiAyNyAtMTUgNDMgLTIwIDIyIC03IDMwIC0xNiAzMCAtMzQgMCAtMzAgLTQyIC00MCAtNjEgLTE0IC0yMCAyNiAtMzcgMTQgLTE5IC0xMyAyOSAtNDEgMTE1IC0yMiAxMTUgMjYgMCAyNiAtMTIgMzggLTU1IDU4IC0yMiAxMSAtNDAgMjYgLTQwIDM0IDAgMjIgNDMgMjUgNjYgNCAxNiAtMTUgMTkgLTE1IDE5IC0yIDAgMzIgLTQ3IDUxIC04MSAzNHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMzMzMyAzMzUgYy0zNSAtMTUgLTQzIC0zMSAtNDMgLTkxIDAgLTU1IDI1IC04NCA3NCAtODQgMjUgMCAzOSA3IDUxIDIyIDExIDE2IDEyIDI0IDQgMjcgLTcgMiAtMTYgLTQgLTIxIC0xMyAtMTMgLTIzIC01NCAtMjAgLTcyIDYgLTE4IDI2IC0yMSA3MSAtNiA5OSAxMyAyNCA1NyAyNSA4MiAyIDI0IC0yMiAzNiAtOCAxNCAxNiAtMjQgMjYgLTQ4IDMxIC04MyAxNnpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTM1IDMyOCBjLTExIC0yOSAtNTUgLTE2MiAtNTUgLTE2NSAwIC0yIDUgLTMgMTAgLTMgNiAwIDE1IDExIDIwIDI1IDggMjAgMTYgMjUgNDMgMjUgMjYgMCAzNiAtNiA0NSAtMjUgMTIgLTI1IDM4IC0zNiAzMCAtMTIgLTUwIDE0MCAtNjMgMTY3IC03NSAxNjcgLTcgMCAtMTYgLTYgLTE4IC0xMnogbTM4IC05MCBjLTIgLTUgLTEzIC04IC0yNCAtOCAtMTggMCAtMjAgNCAtMTQgMzMgNCAxNyAxMCAzNiAxMyA0MSA2IDExIDMxIC01NSAyNSAtNjZ6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTI5MCAyNTAgYzAgLTEwOCAxOCAtMTIyIDIyIC0xNyBsMyA3MiAyNCAtNzIgYzE0IC00MCAzMCAtNzMgMzYgLTczIDYgMCAyMiAzMyAzNiA3MyBsMjQgNzIgMyAtNzIgYzQgLTEwNSAyMiAtOTEgMjIgMTcgMCA4MCAtMiA5MCAtMTggOTAgLTE0IDAgLTI0IC0xOCAtNDIgLTcyIGwtMjMgLTczIC0yNCA3MyBjLTE5IDU2IC0yOSA3MiAtNDQgNzIgLTE3IDAgLTE5IC04IC0xOSAtOTB6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTU0MCAyNTAgYzAgLTczIDMgLTkwIDE1IC05MCAxMiAwIDE1IDE3IDE1IDkwIDAgNzMgLTMgOTAgLTE1IDkwIC0xMiAwIC0xNSAtMTcgLTE1IC05MHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNNjMwIDMzMCBjMCAtNSAxMSAtMTAgMjUgLTEwIDI1IDAgMjUgLTEgMjUgLTgxIDAgLTYwIDMgLTgwIDEzIC03NyA4IDMgMTMgMzEgMTUgODEgMyA3NCA0IDc3IDI3IDc3IDE0IDAgMjUgNSAyNSAxMCAwIDYgLTI4IDEwIC02NSAxMCAtMzcgMCAtNjUgLTQgLTY1IC0xMHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNOTMyIDI1MSBjLTE3IC01MCAtMjYgLTkxIC0yMSAtOTEgNSAwIDE1IDExIDIxIDI1IDkgMTkgMTkgMjUgNDUgMjUgMjcgMCAzNSAtNSA0MyAtMjUgMTIgLTMwIDM0IC0zNCAyNSAtNCAtNjEgMTkxIC03MSAxOTcgLTExMyA3MHogbTY4IC04IGMwIC0xNSAtMzYgLTE4IC00NCAtNCAtMyA1IC0xIDI0IDYgNDIgbDEyIDM0IDEyIC0zMCBjNyAtMTcgMTMgLTM2IDE0IC00MnpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTExMiAyNTMgYzIgLTU4IDcgLTg4IDE2IC05MSA4IC0yIDEyIDggMTIgMzEgMCAzMyAyIDM1IDQwIDQxIDUxIDggNzAgNDQgNDUgODIgLTEzIDIwIC0yNCAyNCAtNjYgMjQgbC01MSAwIDQgLTg3eiBtOTMgMzcgYzAgLTIxIC01IC0yNiAtMzIgLTI4IC0zMSAtMyAtMzMgLTEgLTMzIDI4IDAgMjkgMiAzMSAzMyAyOCAyNyAtMiAzMiAtNyAzMiAtMjh6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTEzMDAgMjUwIGwwIC05MCA2MCAwIGMzMyAwIDYwIDQgNjAgMTAgMCA2IC0yMCAxMCAtNDUgMTAgLTQ0IDAgLTQ1IDEgLTQ1IDMzIDAgMzIgMSAzMiA0MCAyOSAzMiAtMyA0MCAtMSA0MCAxMiAwIDEyIC0xMCAxNiAtNDAgMTYgLTM2IDAgLTQwIDMgLTQwIDI1IDAgMjIgNCAyNSAzOSAyNSAyMiAwIDQzIDUgNDYgMTAgNCA2IC0xNyAxMCAtNTQgMTAgbC02MSAwIDAgLTkwelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xNDkwIDI1MCBsMCAtOTAgNDkgMCBjMjggMCA1MyA1IDU2IDEwIDQgNiAtMTIgMTAgLTM5IDEwIGwtNDYgMCAwIDgwIGMwIDQ3IC00IDgwIC0xMCA4MCAtNiAwIC0xMCAtMzcgLTEwIC05MHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTc2MCAyNTAgbDAgLTkwIDM5IDAgYzUzIDAgNjkgOCA4NiA0MSAzOCA3MyAxIDEzOSAtODAgMTM5IGwtNDUgMCAwIC05MHogbTkzIDU4IGM0OCAtMzYgMTcgLTEyOCAtNDQgLTEyOCBsLTI5IDAgMCA3MCAwIDcwIDI4IDAgYzE2IDAgMzYgLTYgNDUgLTEyelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xOTcwIDI1MCBsMCAtOTAgNTUgMCBjMzAgMCA1NSA1IDU1IDEwIDAgNiAtMjEgMTAgLTQ2IDEwIC00NSAwIC00NSAwIC00MiAzMiAzIDI5IDYgMzIgMzggMzIgNTEgMSA1MyAyMCAzIDI0IC0zOCAzIC00MyA2IC00MyAyOCAwIDIyIDQgMjQgNDUgMjQgMjUgMCA0NSA1IDQ1IDEwIDAgNiAtMjUgMTAgLTU1IDEwIGwtNTUgMCAwIC05MHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMjM0MCAyNTAgYzAgLTUzIDQgLTkwIDEwIC05MCA2IDAgMTAgMzcgMTAgOTAgMCA1MyAtNCA5MCAtMTAgOTAgLTYgMCAtMTAgLTM3IC0xMCAtOTB6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTI0NTEgMzE0IGMtNDYgLTU4IC0xMyAtMTU0IDUzIC0xNTQgMTcgMCAzNyA1IDQ0IDEyIDkgOSAxMiA5IDEyIDAgMCAtNyA1IC0xMiAxMCAtMTIgNiAwIDEwIDIzIDEwIDUwIGwwIDUwIC0zNSAwIGMtMzkgMCAtNDggLTE3IC0xMiAtMjIgMTYgLTIgMjEgLTkgMTkgLTIzIC01IC0yNCAtMTkgLTM1IC00OCAtMzUgLTMxIDAgLTQ3IDI0IC00NyA3MCAwIDIyIDYgNDYgMTMgNTUgMTcgMjAgNTkgMTkgODIgLTIgMjUgLTIyIDM2IC04IDEzIDE3IC0yOCAzMSAtODggMjcgLTExNCAtNnpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMjY2MCAyNTAgYzAgLTEwNyAxOCAtMTIyIDIyIC0xOSBsMyA3MiA0MCAtNzIgYzIyIC0zOSA0NiAtNzEgNTMgLTcxIDkgMCAxMiAyNSAxMiA5MCAwIDUzIC00IDkwIC0xMCA5MCAtNiAwIC0xMCAtMzEgLTEwIC03MiBsMCAtNzMgLTQwIDczIGMtNTYgMTAwIC03MCA5NiAtNzAgLTE4elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0yOTcwIDI0OSBjMCAtNjEgNCAtODkgMTEgLTg3IDE2IDUgMTggMTc4IDIgMTc4IC0xMCAwIC0xMyAtMjUgLTEzIC05MXpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMzA4MCAyNTAgYzAgLTEwNyAxOCAtMTIyIDIyIC0xOCBsMyA3MyA0MCAtNzAgYzIyIC0zOCA0OCAtNzEgNTggLTczIDE1IC0zIDE3IDYgMTcgODcgMCA3NyAtMiA5MSAtMTYgOTEgLTE0IDAgLTE2IC0xMSAtMTIgLTcwIDIgLTM4IDMgLTcwIDIgLTcwIC0xIDAgLTIwIDMyIC00MyA3MCAtNTggOTcgLTcxIDkzIC03MSAtMjB6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTkzIDc1IGMwIC0yNyAyIC0zOCA0IC0yMiAyIDE1IDIgMzcgMCA1MCAtMiAxMiAtNCAwIC00IC0yOHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMjQxIDk4IGMtNSAtMTMgLTEyIC0zMyAtMTYgLTQ2IC02IC0yMSAtNSAtMjIgMTMgLTExIDE3IDEwIDI0IDEwIDM4IC0yIDE1IC0xMyAxNiAtMTIgOSAxMSAtMTQgNDcgLTI0IDcwIC0zMCA3MCAtMyAwIC05IC0xMCAtMTQgLTIyeiBtMTkgLTE5IGMwIC0xMSAtNCAtMTggLTEwIC0xNCAtNSAzIC03IDEyIC0zIDIwIDcgMjEgMTMgMTkgMTMgLTZ6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTEwNjIgNzUgYzAgLTM0IDIgLTQyIDcgLTI2IDkgMzUgMjkgMzcgMzQgNCA0IC0yNyA0IC0yNyA2IDUgMSAyNSAtMyAzMiAtMTggMzIgLTExIDAgLTIyIDggLTI0IDE4IC0zIDkgLTUgLTUgLTUgLTMzelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xMTcyIDc1IGMwIC00MSAyIC00NSA3IC0yMCBsNyAzMCA3IC0yNyBjOSAtMzYgMjMgLTM2IDMzIC0xIGw3IDI4IDcgLTMwIGM3IC0yNSA4IC0yMiA4IDIwIDEgNDYgMCA0OCAtMTMgMzEgLTggLTExIC0xNSAtMjYgLTE1IC0zMyAwIC03IC00IC0xMyAtMTAgLTEzIC01IDAgLTEwIDYgLTEwIDEzIDAgNyAtNyAyMiAtMTUgMzMgLTEzIDE3IC0xNCAxNSAtMTMgLTMxelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xMzIyIDEwOCBjLTIwIC0yMCAtMTUgLTY2IDkgLTc5IDE3IC05IDI1IC04IDM3IDUgMTQgMTQgMTMgMTUgLTE0IDEzIC0yMyAtMiAtMzAgMyAtMzIgMTkgLTQgMzEgMjMgNTAgNDYgMzMgMTUgLTEzIDE2IC0xMiAzIDQgLTE2IDIwIC0zMiAyMiAtNDkgNXpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTQwMyA3NSBjMCAtMjcgMiAtNDAgNCAtMjcgNiAyOSA0MyAzMSA0MyAyIDAgLTExIDMgLTIwIDggLTIwIDQgMCA3IDE4IDcgNDAgMCAyMiAtMyA0MCAtNyA0MCAtNSAwIC04IC03IC04IC0xNSAwIC0yNSAtMzggLTE4IC00MyA4IC0yIDEyIC00IDAgLTQgLTI4elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xNDk3IDc1IGMtOSAtMjUgLTEyIC00NSAtNiAtNDUgNSAwIDkgNSA5IDEwIDAgNiA5IDEwIDIwIDEwIDExIDAgMjAgLTUgMjAgLTEyIDAgLTYgMyAtOSA2IC01IDcgNyAtMTQgNzUgLTI2IDgyIC00IDMgLTE1IC0xNSAtMjMgLTQweiBtMzMgLTYgYzAgLTUgLTQgLTkgLTEwIC05IC01IDAgLTEwIDcgLTEwIDE2IDAgOCA1IDEyIDEwIDkgNiAtMyAxMCAtMTAgMTAgLTE2elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xNTcwIDc2IGMwIC0zOSAzIC00NCAyNSAtNDggMTQgLTMgMjUgLTEgMjUgMyAwIDUgLTkgOSAtMjAgOSAtMjcgMCAtMjUgMjggMyAzMyBsMjIgNCAtMjIgMiBjLTEzIDAgLTIzIDcgLTIzIDE1IDAgOCAxMCAxNyAyMyAxOSAxOSA0IDE4IDQgLTUgNiAtMjcgMSAtMjggLTEgLTI4IC00M3pcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTY0MCA3NyBjMCAtNDcgMCAtNDcgMzMgLTQ2IDMxIDIgMzEgMiA0IDYgLTI1IDQgLTI4IDggLTI2IDM4IDIgMTkgMCAzNyAtNCA0MSAtNCA0IC03IC0xNCAtNyAtMzl6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTE3NTAgNzQgYzAgLTQ0IDEgLTQ1IDI4IC00MiAyMiAyIDI3IDggMjggMzMgMiAzNiAtMTEgNTUgLTM3IDU1IC0xNiAwIC0xOSAtOCAtMTkgLTQ2eiBtNDAgMjEgYzAgLTggLTcgLTE1IC0xNSAtMTUgLTggMCAtMTUgNyAtMTUgMTUgMCA4IDcgMTUgMTUgMTUgOCAwIDE1IC03IDE1IC0xNXogbTMgLTQwIGMxIC01IC02IC0xMSAtMTUgLTEzIC0xMSAtMiAtMTggMyAtMTggMTMgMCAxNyAzMCAxOCAzMyAwelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xODkwIDc1IGMwIC0yNSA0IC00NSA5IC00NSAxMCAwIDIzIDY5IDE1IDgyIC0xMyAyMSAtMjQgNCAtMjQgLTM3elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xOTQ5IDgzIGMtMTEgLTMzIC0xMyAtMzUgLTIwIC0xOCAtOCAxOCAtOCAxNyAtNiAtNCAzIC0zNSAyMyAtMzcgMzIgLTQgbDggMjggNyAtMzAgYzcgLTI2IDggLTI0IDkgMTggMSA1NiAtMTMgNjEgLTMwIDEwelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0yMDA4IDc1IGMtMTAgLTI1IC0xMyAtNDUgLTggLTQ1IDYgMCAxMCA1IDEwIDEwIDAgNiA5IDEwIDIwIDEwIDExIDAgMjAgLTQgMjAgLTEwIDAgLTUgNCAtMTAgOSAtMTAgNiAwIDMgMjAgLTYgNDUgLTggMjUgLTE4IDQ1IC0yMiA0NSAtNCAwIC0xNCAtMjAgLTIzIC00NXogbTI4IC0yIGMtMTAgLTEwIC0xOSA1IC0xMCAxOCA2IDExIDggMTEgMTIgMCAyIC03IDEgLTE1IC0yIC0xOHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMjA4NyAxMTQgYy0xMyAtMTMgLTcgLTcxIDkgLTg1IDE3IC0xNCA0NCAtMyA1MyAyMiAzIDkgLTIgOCAtMTMgLTQgLTIzIC0yMyAtNDggLTUgLTQ0IDMyIDMgMjkgMzUgNDEgNTAgMTkgOCAtMTAgOSAtMTAgNSAyIC00IDE2IC00OCAyNiAtNjAgMTR6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTIxNzIgNzkgYy0yIC00MiAwIC00NyAyMyAtNTEgMTQgLTMgMjUgLTEgMjUgMyAwIDUgLTkgOSAtMTkgOSAtMTYgMCAtMjEgOCAtMjQgNDMgbC00IDQyIC0xIC00NnpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMjI0OSA3NSBjLTkgLTI1IC0xMyAtNDUgLTkgLTQ1IDQgMCAxMSA3IDE0IDE2IDYgMTUgOCAxNSAzMSAwIDE0IC05IDI1IC0xNCAyNSAtMTEgMCAxMiAtMzMgODUgLTM5IDg1IC0zIDAgLTEzIC0yMCAtMjIgLTQ1eiBtMjcgLTIgYy0xMCAtMTAgLTE5IDUgLTEwIDE4IDYgMTEgOCAxMSAxMiAwIDIgLTcgMSAtMTUgLTIgLTE4elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0yMzI5IDExOCBjLTYgLTQwIC01IC04OCAyIC04OCA1IDAgOSA5IDkgMjAgMCAxMyA3IDIwIDIwIDIwIDEzIDAgMjAgLTcgMjAgLTIwIDAgLTExIDQgLTIwIDkgLTIwIDUgMCA4IDE5IDcgNDMgLTIgMzkgLTQgNDIgLTM0IDQ1IC0xOCAyIC0zMiAyIC0zMyAweiBtNTEgLTIzIGMwIC04IC05IC0xNSAtMjAgLTE1IC0xMSAwIC0yMCA3IC0yMCAxNSAwIDggOSAxNSAyMCAxNSAxMSAwIDIwIC03IDIwIC0xNXpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMjQxNyAxMTMgYy0yIC01IC01IC0yNSAtNSAtNDUgLTEgLTM4IC0xIC0zOCAzNiAtMzcgMzAgMiAzMiAzIDEwIDYgLTE2IDIgLTI4IDEwIC0yOCAxOCAwIDggMTIgMTYgMjggMTggbDI3IDQgLTI3IDIgYy0zNyAxIC0zNyAyOCAwIDM0IDI2IDQgMjUgNCAtNSA2IC0xNyAwIC0zNCAtMiAtMzYgLTZ6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTI0OTkgMTA5IGMwIC04IC0xIC0yOSAtMiAtNDcgLTEgLTE3IDEgLTMyIDYgLTMyIDQgMCA3IDE1IDcgMzMgbDAgMzIgMjEgLTMyIGMyOSAtNDUgMzkgLTQxIDM5IDEzIDAgMzAgLTQgNDMgLTExIDM4IC02IC0zIC05IC0xNyAtNiAtMzAgNSAtMjggLTkgLTMyIC0xOCAtNSAtOCAyNyAtMzUgNDggLTM2IDMwelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0yNjI2IDgwIGMtMjEgLTUyIC0yMCAtNTMgOCAtMzUgMjMgMTUgMjUgMTUgMzUgLTIgMTQgLTI0IDE0IC05IC0xIDM4IC02IDIyIC0xNCAzOSAtMTggMzkgLTUgMCAtMTUgLTE4IC0yNCAtNDB6IG0yOCA1IGMzIC04IDEgLTE1IC00IC0xNSAtNiAwIC0xMCA3IC0xMCAxNSAwIDggMiAxNSA0IDE1IDIgMCA2IC03IDEwIC0xNXpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMjczNyAxMTMgYy0xMSAtMTAgLTggLTgzIDMgLTgzIDYgMCAxMCAyMCAxMCA0NSAwIDQ2IC0yIDUwIC0xMyAzOHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMjgxNiA4MCBjLTE5IC00OCAtMjAgLTYxIC0zIC00MCAxNSAyMCAzNSAxOSA0NyAwIDE1IC0yNCAxMiA1IC00IDQ1IC04IDE5IC0xNyAzNSAtMTkgMzUgLTMgMCAtMTIgLTE4IC0yMSAtNDB6IG0yOCA1IGMzIC04IDEgLTE1IC00IC0xNSAtNiAwIC0xMCA3IC0xMCAxNSAwIDggMiAxNSA0IDE1IDIgMCA2IC03IDEwIC0xNXpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMjk2MSA3OCBjLTEwIC0yNCAtMTYgLTQ1IC0xMyAtNDggMiAtMyA3IDEgOSA4IDMgNiAxMiAxMiAyMiAxMiA5IDAgMjMgLTYgMzAgLTEyIDExIC0xMSAxMiAtOCA2IDEyIC0xNCA0NSAtMjQgNzAgLTMwIDcwIC0zIDAgLTE0IC0xOSAtMjQgLTQyeiBtMjkgNyBjMCAtOCAtNCAtMTUgLTEwIC0xNSAtNSAwIC03IDcgLTQgMTUgNCA4IDggMTUgMTAgMTUgMiAwIDQgLTcgNCAtMTV6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTMxMzkgMTE4IGMtMiAtMTMgLTEgLTU3IDEgLTc1IDEgLTEwIDUgLTUgOSAxMSA4IDM5IDI0IDM5IDMyIDEgbDcgLTMwIDEgMzMgYzEgMjMgLTQgMzUgLTE2IDM5IC0xMCA0IC0yMSAxMSAtMjUgMTcgLTQgNiAtOCA4IC05IDR6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTY1OSA5OSBjLTIgLTI4IDMgLTY0IDExIC03MiA0IC01IDYgMTAgNCAzMyAtMyA0MSAtMTMgNjcgLTE1IDM5elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xMDIwIDc2IGMwIC00MyAxNiAtNTYgMjIgLTE3IDUgMzIgMCA1MSAtMTMgNTEgLTUgMCAtOSAtMTUgLTkgLTM0elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xMjcwIDcwIGMwIC0yMiA1IC00MCAxMCAtNDAgNiAwIDEwIDE4IDEwIDQwIDAgMjIgLTQgNDAgLTEwIDQwIC01IDAgLTEwIC0xOCAtMTAgLTQwelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0zMjM5IDEwNSBjLTcgLTYgMiAtNzUgMTAgLTc1IDMgMCA2IDE2IDUgMzUgLTEgMzUgLTYgNDkgLTE1IDQwelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0zNDAwIDc2IGMwIC0xOSA1IC0zOCAxMCAtNDEgNiAtNCAxMCAxMCAxMCAzNCAwIDIzIC00IDQxIC0xMCA0MSAtNSAwIC0xMCAtMTUgLTEwIC0zNHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTM4IDkzIGMtMTIgLTMgLTE4IC0xNCAtMTggLTM0IDAgLTE2IDQgLTI5IDggLTI5IDUgMCA4IDEwIDggMjEgLTEgMzMgMjIgMzQgMjcgMiA0IC0yNyA0IC0yNyA2IDQgMSAzNSAtNSA0MiAtMzEgMzZ6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTMxMyA4NCBjLTMgLTggMyAtMjEgMTMgLTI5IDE5IC0xNCAxOCAtMTQgMCAtMTUgLTE1IDAgLTE3IC0zIC05IC0xMSA2IC02IDE2IC04IDIyIC01IDE3IDExIDEzIDMzIC02IDQxIC0xNyA3IC0xNyA4IDEgMTQgMTggNyAxOCA4IDIgMTQgLTEwIDQgLTE5IDEgLTIzIC05elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0zNzMgODQgYy00IC0xMCAxIC0yMCAxMSAtMjYgOSAtNSAxNCAtMTQgMTEgLTE5IC00IC01IC0xMiAtNiAtMTggLTMgLTkgNSAtOSA0IDAgLTYgMTMgLTE0IDMzIC01IDMzIDE1IDAgNyAtOCAxNiAtMTcgMjAgLTE3IDcgLTE3IDggMSAxNCAxOCA3IDE4IDggMiAxNCAtMTEgNCAtMTkgMSAtMjMgLTl6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTQzNiA4NSBjLTIwIC0yMCAtMjAgLTI2IC0yIC01MCAxMiAtMTYgMTYgLTE3IDMwIC02IDIwIDE3IDIxIDQ1IDIgNjAgLTExIDkgLTE4IDggLTMwIC00eiBtMzIgLTI3IGMtMiAtMTMgLTcgLTIzIC0xMyAtMjMgLTUgMCAtMTEgMTAgLTEzIDIzIC0yIDE1IDIgMjIgMTMgMjIgMTEgMCAxNSAtNyAxMyAtMjJ6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTUwNiA4NCBjLTIwIC0yMCAtMjAgLTM4IC0xIC01NCAxMiAtMTAgMTkgLTEwIDI3IC0yIDkgOSA4IDEyIC01IDEyIC0xMSAwIC0xNyA4IC0xNyAyMSAwIDE3IDQgMTkgMjIgMTMgMjAgLTYgMjEgLTUgOSAxMCAtMTYgMjAgLTE2IDIwIC0zNSAwelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk02MDAgOTAgYy0xMiAtOCAtMTIgLTEwIDQgLTEwIDE2IDAgMTYgLTIgLTQgLTE4IC0yMSAtMTcgLTIxIC0xOSAtNCAtMzIgMTYgLTEzIDE3IC0xMyAxMSAyIC0zIDEwIC0yIDIwIDMgMjMgNiA0IDEwIC0xIDEwIC05IDAgLTkgNSAtMTYgMTAgLTE2IDE1IDAgMTIgNDYgLTMgNTggLTggNyAtMTggNyAtMjcgMnpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNODEzIDkzIGMtNyAtMyAtMTIgLTE5IC0xMiAtMzYgMiAtMzEgMiAtMzEgNiAtNCA1IDMzIDI1IDMxIDM0IC00IGw3IC0yNCAxIDI2IGMxIDI5IC0xNyA0OSAtMzYgNDJ6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTMwMzEgNjEgYzEgLTI4IDMgLTMwIDYgLTExIDMgMTQgOSAzMCAxNCAzNiA1IDcgMyAxMSAtNiAxMSAtMTEgMCAtMTUgLTExIC0xNCAtMzZ6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTMwODIgODggYy0xNiAtMTYgLTE1IC00MyAzIC01OCAxNSAtMTIgMzUgLTYgMzUgMTIgMCA3IC00IDcgLTEzIC0xIC0xNiAtMTMgLTI3IC01IC0yNyAyMCAwIDI0IDIwIDM1IDMyIDE4IDggLTEyIDkgLTEyIDYgMCAtNiAyMCAtMjEgMjQgLTM2IDl6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTMyNzcgOTQgYy0xMyAtMTQgLTcgLTYyIDkgLTY4IDE4IC03IDM0IDAgMzQgMTYgMCA3IC00IDcgLTEzIC0xIC04IC02IC0xNyAtOCAtMjAgLTQgLTEzIDEyIC03IDIzIDE0IDIzIDE0IDAgMTkgNSAxNyAxNyAtMyAxOSAtMjkgMjkgLTQxIDE3eiBtMzMgLTE0IGMwIC01IC03IC0xMCAtMTYgLTEwIC04IDAgLTEyIDUgLTkgMTAgMyA2IDEwIDEwIDE2IDEwIDUgMCA5IC00IDkgLTEwelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0zMzQ3IDk0IGMtMTAgLTEwIC05IC02MiAyIC02OCAxMiAtOCA0MSA0IDQxIDE2IDAgNiAtNiA1IC0xNSAtMiAtMTIgLTEwIC0xNiAtOSAtMjEgNCAtMyA5IC0zIDIzIDAgMzIgNSAxNCA5IDE0IDIzIDMgMTQgLTEyIDE2IC0xMiAxMSAxIC01IDE3IC0zMCAyNSAtNDEgMTR6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTU2MiA2MCBjMCAtMTkgMiAtMjcgNSAtMTcgMiA5IDIgMjUgMCAzNSAtMyA5IC01IDEgLTUgLTE4elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk03MDIgNjAgYzAgLTE5IDIgLTI3IDUgLTE3IDIgOSAyIDI1IDAgMzUgLTMgOSAtNSAxIC01IC0xOHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNNzI3IDg0IGMtMTIgLTEyIC04IC00MSA4IC01NCAyMCAtMTcgNDcgNSA0MyAzNCAtMyAyMSAtMzcgMzQgLTUxIDIweiBtMzkgLTE1IGMxMCAtMTcgLTEzIC0zNiAtMjcgLTIyIC0xMiAxMiAtNCAzMyAxMSAzMyA1IDAgMTIgLTUgMTYgLTExelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk05MDEgNjAgYzEwIC0yNyAyOSAtMzMgMjkgLTkgMCA2IC00IDcgLTEwIDQgLTUgLTMgLTEwIDMgLTEwIDE0IDAgMTIgLTQgMjEgLTkgMjEgLTYgMCAtNiAtMTIgMCAtMzB6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTkzMCA3OCBjMCAtOCA2IC0yMyAxNCAtMzQgMTQgLTE4IDE1IC0xOCAyNiAxMCA2IDE2IDggMzEgNSAzNCAtMiAzIC05IC02IC0xNCAtMTkgLTcgLTE2IC0xMCAtMTkgLTEwIC03IC0xIDIwIC0yMSAzNSAtMjEgMTZ6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTk5MCA2MCBjMCAtMTYgNCAtMzAgOCAtMzAgNSAwIDcgMTMgNCAzMCAtMiAxNyAtNiAzMCAtOCAzMCAtMiAwIC00IC0xMyAtNCAtMzB6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTMyMDAgNjAgYzAgLTE2IDUgLTMwIDEwIC0zMCA2IDAgMTAgMTQgMTAgMzAgMCAxNyAtNCAzMCAtMTAgMzAgLTUgMCAtMTAgLTEzIC0xMCAtMzB6XFxcIj48L3BhdGg+PC9nPjwvc3ZnPlwiIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Ib21lLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBob21lSW1nIGZyb20gXCIuLi8uLi9pbWFnZXMvaG9tZS5qcGdcIjtcclxuaW1wb3J0IGxvZ28gZnJvbSBcIi4uLy4uL2ltYWdlcy9BbGVjIEF2aWF0b3IgTG9nby5wbmdcIjtcclxuY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVySG9tZSA9IChmcmFnbWVudCkgPT4ge1xyXG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gLyogSFRNTCAqLyBgXHJcbiAgICA8ZGl2IGNsYXNzPSR7c3R5bGVzW1wiY29udGFpbmVyXCJdfT5cclxuICAgICAgPGRpdiBjbGFzcz0ke3N0eWxlc1tcImZhZGUtY292ZXJcIl19PjwvZGl2PlxyXG4gICAgICA8aW1nIGNsYXNzPSR7c3R5bGVzW1wibG9nb1wiXX0gc3JjPSR7bG9nb30gYWx0PVwiXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gIGA7XHJcbiAgY29uc29sZS5sb2coZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCk7XHJcbiAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCk7XHJcbn07XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaHlicmlkQ2Fyb3VzZWwubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IGZpcmVJbWFnZSBmcm9tIFwiLi4vLi4vaW1hZ2VzL0dvb2R5ZWFyLVdvb2xzZXlGaXJlLmpwZ1wiO1xyXG5pbXBvcnQgeyByZW5kZXJnYWxsZXJ5U2xpZGVyIH0gZnJvbSBcIi4uLy4uL2dhbGxlcnlTbGlkZXIvZ2FsbGVyeVNsaWRlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlcmh5YnJpZENhcm91c2VsID0gKGZyYWdtZW50KSA9PiB7XHJcbiAgY29uc3QgZWxlbWVudCA9IC8qIEhUTUwgKi8gYFxyXG4gICAgPGRpdiBzdHlsZT1cIm1hcmdpbi10b3A6MTgwcHhcIiBjbGFzcz0ke3N0eWxlc1tcImNvbnRhaW5lclwiXX0+XHJcbiAgICAgIDxkaXYgY2xhc3M9JHtzdHlsZXNbXCJjb250ZW50LWNvbnRhaW5lclwiXX0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0ke3N0eWxlc1tcImNvbnRlbnQtaW1hZ2VcIl19PlxyXG4gICAgICAgICAgJHtyZW5kZXJnYWxsZXJ5U2xpZGVyKFwiaHlicmlkLWdhbGxlcnktY29udGFpbmVyXCIsIFwiaHlicmlkXCIpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9JHtzdHlsZXNbXCJiYW5uZXItY29udGFpbmVyXCJdfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9JHtzdHlsZXNbXCJiYW5uZXItY29udGVudFwiXX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9JHtzdHlsZXNbXCJ0ZXh0LWNvbnRhaW5lclwiXX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ke3N0eWxlc1tcInRleHQtY29udGVudC1jb250YWluZXJcIl19PlxyXG4gICAgICAgICAgICAgICAgPGg1PlRoZSBDb25jZXB0PC9oNT5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgICAgICAgICAgICAgICAgSWxsdW0gaXBzYW0gcmVwZWxsZW5kdXMgZGVsZW5pdGkgaXVzdG8sIHJlcGVsbGF0IGZ1Z2Egc2VxdWlcclxuICAgICAgICAgICAgICAgICAgY29uc2VjdGV0dXIgcG9zc2ltdXMgZWEgbmF0dXMgYWxpcXVpZCBzYWVwZSBhZGlwaXNjaSB2ZW5pYW1cclxuICAgICAgICAgICAgICAgICAgc29sdXRhIGltcGVkaXQgb2ZmaWNpYSBsYWJvcmlvc2FtIGVhcXVlIG5paGlsLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIExvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG4gICAgICAgICAgICAgICAgICBJbGx1bSBpcHNhbSByZXBlbGxlbmR1cyBkZWxlbml0aSBpdXN0bywgcmVwZWxsYXQgZnVnYSBzZXF1aVxyXG4gICAgICAgICAgICAgICAgICBjb25zZWN0ZXR1ciBwb3NzaW11cyBlYSBuYXR1cyBhbGlxdWlkIHNhZXBlIGFkaXBpc2NpIHZlbmlhbVxyXG4gICAgICAgICAgICAgICAgICBzb2x1dGEgaW1wZWRpdCBvZmZpY2lhIGxhYm9yaW9zYW0gZWFxdWUgbmloaWwuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYDtcclxuXHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn07XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaHlicmlkSW1hZ2UubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IGZpcmVJbWFnZSBmcm9tIFwiLi4vLi4vaW1hZ2VzL0dvb2R5ZWFyLVdvb2xzZXlGaXJlLmpwZ1wiO1xyXG5pbXBvcnQgY2F5bWFuIGZyb20gXCIuLi8uLi9pbWFnZXMvcmVuZGVycy9DQVlNQU4gQVZJQVRPUiAyMDIxMDcyMiAoNikuanBnXCI7XHJcbmNvbnN0IGVsZXMgPSBbXHJcbiAge1xyXG4gICAgaW1nOiBmaXJlSW1hZ2UsXHJcbiAgICB0ZXh0OiAvKiBIVE1MICovIGA8aDU+VGhlIEJhY2tncm91bmQ8L2g1PlxyXG4gICAgICA8cD5cclxuICAgICAgICBUaGUgMjAxOSBXb29sc2V5IE1hbGlidSBmaXJlIHdpcGVkIG91dCBtYW55IHN0cnVjdHVyZXMsIG9uZSBvZiB3aGljaCB3YXNcclxuICAgICAgICBhIGRvbWUtbGlrZSBidWlsZGluZyAobGlrZSBhbiBvYnNlcnZhdG9yeSkuIFdoYXQgd2FzIGxlZnQgd2FzIGEgc2VjbHVkZWRcclxuICAgICAgICBwcm9wZXJ0eSB3aXRoIGEgYnJlYXRodGFraW5nIDM2MC1kZWdyZWUgdmlldyBvZiB0aGUgUGFjaWZpYyBPY2VhbiBhbmRcclxuICAgICAgICB0aGUgTWFsaWJ1IG1vdW50YWlucy5cclxuICAgICAgPC9wPlxyXG4gICAgICA8cD5cclxuICAgICAgICBBcGVsIERlc2lnbiBhY2NlcHRlZCB0aGUgY2hhbGxlbmdlIG9mIGNyZWF0aW5nIGEgcGllY2Ugb2YgYXJjaGl0ZWN0dXJlXHJcbiAgICAgICAgdGhhdCB3b3VsZCBoYXZlIGEgbWluaW1hbCBlbnZpcm9ubWVudCBpbXBhY3QgYW5kIHlldCBldm9rZSBhbmQgY29tcGxldGVcclxuICAgICAgICB0aGUgc2l0ZSBjb25kaXRpb25zLiBUaGUgc2l0ZSBkaWN0YXRlZCB0aHJlZSBtYWpvciBjcml0ZXJpYSwgZmlyc3QgdGhhdFxyXG4gICAgICAgIGl0IHdhcyBhIGZpcmUtcmVidWlsdCBob21lLCBzZWNvbmQgdGhlIGNoYWxsZW5nZXMgb2YgYWNjZXNzaWJpbGl0eSB0b1xyXG4gICAgICAgIHRoZSBzaXRlIGFuZCBmaW5hbGx5LCBpdCBtdXN0IGJlIGFuIOKAnG9mZiB0aGUgZ3JpZOKAnSBob21lLlxyXG4gICAgICA8L3A+YCxcclxuICAgIGNsYXNzZXM6IFwiZXh0cmEtcGFkZGluZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1nOiBjYXltYW4sXHJcbiAgICB0ZXh0OiAvKiBIVE1MICovIGA8aDU+VGhlIEltcGFjdDwvaDU+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIENvbmNlcHR1YWxseSwgQXBlbCBEZXNpZ24gd2FudGVkIHRvIGNyZWF0ZSB0aGUgbm90aW9uIHRoYXQgdGhlXHJcbiAgICAgICAgYXJjaGl0ZWN0dXJlIG9mIGJ1aWxkaW5nIGNvbnRpbnVlcyBiZXlvbmQsIGluIGEgc2Vuc2UsIHRoZSBmb3JtcyBmbG93XHJcbiAgICAgICAgdGhyb3VnaG91dCBhbmQgbmV2ZXIgc3RvcC4gVGhlIGFyY2hpdGVjdHVyZSBmb3JtcyBlbWVyZ2UgZnJvbSB0aGUgZ3JvdW5kXHJcbiAgICAgICAgZXh0ZW50IHRvIHRoZSBob3Jpem9uIGFuZCBkaXZpZGUgaW50byB0d28gYmVhdXRpZnVsIGlycmVndWxhciB2b2x1bWV0cmljXHJcbiAgICAgICAgZWxlbWVudHMgYXMgaWYgdGhlIGFyY2hpdGVjdHVyZSB3YXMgc2xpY2luZyB0aGUgc3BhY2UgZW1waGFzaXppbmcgdGhlXHJcbiAgICAgICAgZ29yZ2VvdXMgdmlld3Mgb2YgdGhlIE1hbGlidSBtb3VudGFpbnMgYW5kIHRoZSBQYWNpZmljIE9jZWFuLlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIFRoZSBiaXJkLWxpa2UgYnVpbGRpbmcgcHJvZ3JhbSBhbHNvIGluY29ycG9yYXRlcyB0aGUgaWRlYXMgb2YgZmxvdyBhbmRcclxuICAgICAgICBjb250aW51YXRpb247IHRoZSBmaXJzdCBsZXZlbCBwcm9wb3NlcyBhbiBvcGVuIGZsb29yIHBsYW4gd2l0aCBhIGdsYXNzXHJcbiAgICAgICAgZmFjYWRlIHRoYXQgb3BlbnMgdXAgdGhlIHNwYWNlIHRvIGJlYXV0aWZ1bCBkZWNrIGFuZCBhIHNlY29uZCBmbG9vciBmb3JcclxuICAgICAgICBiZWRyb29tIHRoYXQgYXJlIGVsZXZhdGVkIGZyb20gdGhlIGdyb3VuZCB0byBhZ2FpbiBlbXBoYXNpemUgdGhpcyBub3Rpb25cclxuICAgICAgICBvZiBmbG93IGFuZCBsaWdodG5lc3MuXHJcbiAgICAgIDwvcD5gLFxyXG4gIH0sXHJcbl07XHJcbmV4cG9ydCBjb25zdCByZW5kZXJoeWJyaWRJbWFnZSA9IChpKSA9PiB7XHJcbiAgY29uc3QgZWxlbWVudCA9IC8qIEhUTUwgKi8gYFxyXG4gICAgPGRpdlxyXG4gICAgICBzdHlsZT0ke2kgPT09IDAgPyBcIm1hcmdpbi10b3A6MjAwcHhcIiA6IFwibWFyZ2luLXRvcDoyMjBweFwifVxyXG4gICAgICBjbGFzcz0ke3N0eWxlc1tcImNvbnRhaW5lclwiXX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzcz0ke3N0eWxlc1tcImNvbnRlbnQtaW1hZ2UtY29udGFpbmVyXCJdfT5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9JHtlbGVzW2ldLmltZ31cclxuICAgICAgICAgIGNsYXNzPVwiJHtzdHlsZXNbXCJjb250ZW50LWltYWdlXCJdICsgXCIgXCIgKyBzdHlsZXNbZWxlc1tpXS5jbGFzc2VzXX1cIlxyXG4gICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9JHtzdHlsZXNbXCJiYW5uZXItY29udGFpbmVyXCJdfT5cclxuICAgICAgICA8ZGl2IGNsYXNzPSR7c3R5bGVzW1wiYmFubmVyLWNvbnRlbnRcIl19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz0ke3N0eWxlc1tcInRleHQtY29udGVudC1jb250YWluZXJcIl19PiR7ZWxlc1tpXS50ZXh0fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGA7XHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn07XHJcbi8vICAgICAgICAgICAvLyA8ZGl2IGNsYXNzPSR7c3R5bGVzW1widGV4dC1jb250ZW50LWNvbnRhaW5lclwiXX0+JHtlbGVzW2ldLnRleHR9PC9kaXY+XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vbmF2YmFyLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBsb2dvIGZyb20gXCIuLi8uLi9pbWFnZXMvbG9nby5zdmdcIjtcclxuY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyTmF2ID0gKGZyYWdtZW50KSA9PiB7XHJcbiAgZWxlbWVudC5pbm5lckhUTUwgPSAvKiBIVE1MICovIGBcclxuICAgIDxkaXYgY2xhc3M9JHtzdHlsZXNbXCJuYXYtd3JhcHBlclwiXX0+XHJcbiAgICAgIDxuYXYgbmFtZT1cIm5hdi1jb250YWluZXJcIiBjbGFzcz0ke3N0eWxlc1tcImNvbnRhaW5lclwiXX0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0ke3N0eWxlc1tcImNvbnRlbnQtY29udGFpbmVyXCJdfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9JHtzdHlsZXNbXCJsb2dvLWNvbnRhaW5lclwiXX0+JHtsb2dvfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvZGl2PlxyXG4gIGA7XHJcbiAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCk7XHJcbn07XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcXVvdGUubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHF1b3RlIGZyb20gXCIuLi8uLi9pbWFnZXMvUGhvZW5peCBRdW90ZS5wbmdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJxdW90ZSA9IChmcmFnbWVudCkgPT4ge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSAvKiBIVE1MICovIGBcclxuICAgIDxkaXYgY2xhc3M9JHtzdHlsZXNbXCJjb250YWluZXJcIl19PlxyXG4gICAgICA8ZGl2IGNsYXNzPSR7c3R5bGVzW1wiY29udGVudC1jb250YWluZXJcIl19PlxyXG4gICAgICAgIDxpbWcgY2xhc3M9JHtzdHlsZXNbXCJjb250ZW50LWltYWdlXCJdfSBzcmM9JHtxdW90ZX0gYWx0PVwiXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgO1xyXG4gIHJldHVybiBlbGVtZW50O1xyXG59O1xyXG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vZmFjZWJvb2suc3ZnXCI6IFwiLi9zcmMvY29tcG9uZW50cy9zb2NpYWxzL2ltYWdlcy9mYWNlYm9vay5zdmdcIixcblx0XCIuL2luc3RhZ3JhbS5zdmdcIjogXCIuL3NyYy9jb21wb25lbnRzL3NvY2lhbHMvaW1hZ2VzL2luc3RhZ3JhbS5zdmdcIixcblx0XCIuL2xpbmtlZGluLnN2Z1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvc29jaWFscy9pbWFnZXMvbGlua2VkaW4uc3ZnXCIsXG5cdFwiLi90d2l0dGVyLnN2Z1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvc29jaWFscy9pbWFnZXMvdHdpdHRlci5zdmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvY29tcG9uZW50cy9zb2NpYWxzL2ltYWdlcyBzeW5jIFxcXFwuKHBuZ3xqcGU/Z3xzdmcpJFwiOyIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc29jaWFscy5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgZmFjZWJvb2sgZnJvbSBcIi4vaW1hZ2VzL2ZhY2Vib29rLnN2Z1wiO1xyXG5pbXBvcnQgaW5zdGFncmFtIGZyb20gXCIuL2ltYWdlcy9pbnN0YWdyYW0uc3ZnXCI7XHJcbmltcG9ydCBsaW5rZWRpbiBmcm9tIFwiLi9pbWFnZXMvbGlua2VkaW4uc3ZnXCI7XHJcbmltcG9ydCB0d2l0dGVyIGZyb20gXCIuL2ltYWdlcy90d2l0dGVyLnN2Z1wiO1xyXG5jb25zdCBjYWNoZSA9IHt9O1xyXG5cclxuZnVuY3Rpb24gaW1wb3J0QWxsKHIpIHtcclxuICByLmtleXMoKS5mb3JFYWNoKChrZXkpID0+IChjYWNoZVtrZXldID0gcihrZXkpKSk7XHJcbn1cclxuLy8gTm90ZSBmcm9tIHRoZSBkb2NzIC0+IFdhcm5pbmc6IFRoZSBhcmd1bWVudHMgcGFzc2VkIHRvIHJlcXVpcmUuY29udGV4dCBtdXN0IGJlIGxpdGVyYWxzIVxyXG5pbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KFwiLi9pbWFnZXNcIiwgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHN2ZykkLykpO1xyXG5cclxuY29uc3QgaW1hZ2VzQXJyID0gT2JqZWN0LmVudHJpZXMoY2FjaGUpLm1hcCgobW9kdWxlKSA9PiBtb2R1bGVbMF0pO1xyXG5jb25zb2xlLmxvZyhpbWFnZXNBcnIpO1xyXG5leHBvcnQgY29uc3QgcmVuZGVyU29jaWFsQmFyID0gKGZyYWdtZW50KSA9PiB7XHJcbiAgY29uc3QgZWxlbWVudCA9IC8qIEhUTUwgKi8gYFxyXG4gICAgPGRpdiBjbGFzcz0ke3N0eWxlc1tcImNvbnRhaW5lclwiXX0+XHJcbiAgICAgIDxkaXYgY2xhc3M9JHtzdHlsZXNbXCJjb250ZW50LWNvbnRhaW5lclwiXX0+XHJcbiAgICAgICAgPGRpdj4ke2luc3RhZ3JhbX08L2Rpdj5cclxuICAgICAgICA8ZGl2PiR7ZmFjZWJvb2t9PC9kaXY+XHJcbiAgICAgICAgPGRpdj4ke3R3aXR0ZXJ9PC9kaXY+XHJcbiAgICAgICAgPGRpdj4ke2xpbmtlZGlufTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGA7XHJcblxyXG4gIHJldHVybiBlbGVtZW50O1xyXG59O1xyXG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL3ZpZGVvUmVuZGVyLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5jb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJWaWRlb1BhZ2UgPSAoaSkgPT4ge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSAvKiBIVE1MICovIGBcclxuICAgIDxkaXYgY2xhc3M9JHtzdHlsZXNbXCJjb250YWluZXJcIl19PlxyXG4gICAgICA8ZGl2IGNsYXNzPSR7c3R5bGVzW1wiY29udGVudC1pbWFnZS1jb250YWluZXJcIl19PlxyXG4gICAgICAgIDxpZnJhbWVcclxuICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL2lXR0Z1TWctUkEwP2VuYWJsZWpzYXBpPTEmdmVyc2lvbj0zJnBsYXllcmFwaWlkPXl0cGxheWVyXCJcclxuICAgICAgICAgIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIlxyXG4gICAgICAgICAgaWQ9XCJtYWluLXZpZGVvLXBsYXllclwiXHJcbiAgICAgICAgICBhbGxvd2Z1bGxzY3JlZW5cclxuICAgICAgICA+PC9pZnJhbWU+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz0ke3N0eWxlc1tcImJhbm5lci1jb250YWluZXJcIl19PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9JHtzdHlsZXNbXCJiYW5uZXItY29udGVudFwiXX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPSR7c3R5bGVzW1widGV4dC1jb250ZW50LWNvbnRhaW5lclwiXX0+XHJcbiAgICAgICAgICA8aDU+VmlkZW8gUmVuZGVyPC9oNT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGA7XHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn07XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vd3JhcHBlci5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyByZW5kZXJxdW90ZSB9IGZyb20gXCIuLi9xdW90ZS9xdW90ZVwiO1xyXG5pbXBvcnQgeyByZW5kZXJnYWxsZXJ5U2xpZGVyIH0gZnJvbSBcIi4uLy4uL2dhbGxlcnlTbGlkZXIvZ2FsbGVyeVNsaWRlclwiO1xyXG5pbXBvcnQgeyByZW5kZXJoeWJyaWRJbWFnZSB9IGZyb20gXCIuLi9oeWJyaWRJbWFnZS9oeWJyaWRJbWFnZVwiO1xyXG5pbXBvcnQgeyByZW5kZXJoeWJyaWRDYXJvdXNlbCB9IGZyb20gXCIuLi9oeWJyaWRDYXJvdXNlbC9oeWJyaWRDYXJvdXNlbFwiO1xyXG5pbXBvcnQgeyByZW5kZXJWaWRlb1BhZ2UgfSBmcm9tIFwiLi4vdmlkZW9SZW5kZXIvdmlkZW9SZW5kZXJcIjtcclxuaW1wb3J0IHsgcmVuZGVyU29jaWFsQmFyIH0gZnJvbSBcIi4uL3NvY2lhbHMvc29jaWFsc1wiO1xyXG5cclxuY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyd3JhcHBlciA9IChmcmFnbWVudCkgPT4ge1xyXG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gLyogSFRNTCAqLyBgXHJcbiAgICA8ZGl2IGNsYXNzPSR7c3R5bGVzW1wiY29udGFpbmVyXCJdfT5cclxuICAgICAgPGRpdiBpZD1cInNjcm9sbC1oZWFkZXJcIiBjbGFzcz0ke3N0eWxlc1tcInNjcm9sbC1oZWFkZXJcIl19PjwvZGl2PlxyXG4gICAgICAke3JlbmRlcnF1b3RlKCl9XHJcbiAgICAgIDxkaXYgY2xhc3M9JHtzdHlsZXNbXCJjb250ZW50LWNvbnRhaW5lclwiXX0+XHJcbiAgICAgICAgJHtyZW5kZXJnYWxsZXJ5U2xpZGVyKFwiZ2FsbGVyeS1jb250YWluZXJcIiwgXCJcIil9ICR7cmVuZGVyaHlicmlkSW1hZ2UoMCl9XHJcbiAgICAgICAgJHtyZW5kZXJoeWJyaWRDYXJvdXNlbCgpfSAke3JlbmRlcmh5YnJpZEltYWdlKDEpfSAke3JlbmRlclZpZGVvUGFnZSgpfVxyXG4gICAgICAgICR7cmVuZGVyU29jaWFsQmFyKCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYDtcclxuICBmcmFnbWVudC5hcHBlbmRDaGlsZChlbGVtZW50LmZpcnN0RWxlbWVudENoaWxkKTtcclxufTtcclxuLy8gICAgICAgICAvL1xyXG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL2dhbGxlcnlTbGlkZXIubW9kdWxlLnNjc3NcIjtcclxuY29uc3QgY2FjaGUgPSB7fTtcclxuY29uc3QgYmx1ZVByaW50SW1hZ2VzQ2FjaGUgPSB7fTtcclxuZnVuY3Rpb24gaW1wb3J0QWxsKGltcG9ydHMpIHtcclxuICBpbXBvcnRzLmZvckVhY2goKHIpID0+IHtcclxuICAgIHIua2V5cygpLmZvckVhY2goKGtleSkgPT4gKGNhY2hlW2tleV0gPSByKGtleSkpKTtcclxuICB9KTtcclxufVxyXG5cclxuaW1wb3J0QWxsKFtcclxuICByZXF1aXJlLmNvbnRleHQoXCIuLi9pbWFnZXMvcmVuZGVyc1wiLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKSxcclxuICByZXF1aXJlLmNvbnRleHQoXCIuLi9pbWFnZXMvYmx1ZXByaW50c1wiLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKSxcclxuXSk7XHJcblxyXG5jb25zdCByZW5kZXJzID0gT2JqZWN0LmtleXMoY2FjaGUpLm1hcCgobmFtZSkgPT4ge1xyXG4gIHJldHVybiBjYWNoZVtuYW1lXTtcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyZ2FsbGVyeVNsaWRlciA9IChjbGFzc05hbWUsIGxvY2F0aW9uKSA9PiB7XHJcbiAgY29uc3QgZWxlbWVudCA9IC8qIEhUTUwgKi8gYFxyXG4gICAgPGRpdiBjbGFzcz0ke3N0eWxlc1tjbGFzc05hbWVdfT5cclxuICAgICAgPGRpdiBjbGFzcz1cInNwbGlkZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGxpZGVfX3RyYWNrXCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3M9XCJzcGxpZGVfX2xpc3RcIj48L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGA7XHJcblxyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IGVsZW1lbnQ7XHJcbiAgY29uc3Qgc2xpZGVyQ29udGFpbmVyID0gY29udGFpbmVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidWxcIik7XHJcbiAgY29uc29sZS5sb2cobG9jYXRpb24gPT09IFwiaHlicmlkXCIgPyA1IDogcmVuZGVycy5sZW5ndGgsIFwidGVzdGluZ1wiKTtcclxuICBmb3IgKFxyXG4gICAgbGV0IGkgPSBsb2NhdGlvbiA9PT0gXCJoeWJyaWRcIiA/IDUgOiAwO1xyXG4gICAgaSA8IChsb2NhdGlvbiA9PT0gXCJoeWJyaWRcIiA/IHJlbmRlcnMubGVuZ3RoIC0gMSA6IDUpO1xyXG4gICAgaSsrXHJcbiAgKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3Qgc2xpZGUgPSAvKiBIVE1MICovIGAgPGxpIGNsYXNzPVwic3BsaWRlX19zbGlkZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPSR7c3R5bGVzW1wiaW1hZ2UtY29udGFpbmVyXCJdfT5cclxuICAgICAgICA8aW1nIGNsYXNzPSR7c3R5bGVzW1wiZ2FsbGVyeS1pbWFnZVwiXX0gc3JjPSR7cmVuZGVyc1tpXX0gYWx0PVwiXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2xpPmA7XHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gc2xpZGU7XHJcbiAgICBzbGlkZXJDb250YWluZXJbMF0uYXBwZW5kQ2hpbGQoY29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQub3V0ZXJIVE1MO1xyXG59O1xyXG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vRGVwdGgucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2JsdWVwcmludHMvRGVwdGgucG5nXCIsXG5cdFwiLi9HZW9tZXRyeSAucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2JsdWVwcmludHMvR2VvbWV0cnkgLnBuZ1wiLFxuXHRcIi4vVGFrZSBPZmYgQ29sb3IucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2JsdWVwcmludHMvVGFrZSBPZmYgQ29sb3IucG5nXCIsXG5cdFwiLi9UYWtlIE9mZi5wbmdcIjogXCIuL3NyYy9pbWFnZXMvYmx1ZXByaW50cy9UYWtlIE9mZi5wbmdcIixcblx0XCIuL1RlbGVzY29wZS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvYmx1ZXByaW50cy9UZWxlc2NvcGUucG5nXCIsXG5cdFwiLi9XYXlwb2ludC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvYmx1ZXByaW50cy9XYXlwb2ludC5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzL2JsdWVwcmludHMgc3luYyBcXFxcLihwbmd8anBlP2d8c3ZnKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vQ0FZTUFOIEFWSUFUT1IgMjAyMTA3MjIgKDEpLmpwZ1wiOiBcIi4vc3JjL2ltYWdlcy9yZW5kZXJzL0NBWU1BTiBBVklBVE9SIDIwMjEwNzIyICgxKS5qcGdcIixcblx0XCIuL0NBWU1BTiBBVklBVE9SIDIwMjEwNzIyICgzKS5qcGdcIjogXCIuL3NyYy9pbWFnZXMvcmVuZGVycy9DQVlNQU4gQVZJQVRPUiAyMDIxMDcyMiAoMykuanBnXCIsXG5cdFwiLi9DQVlNQU4gQVZJQVRPUiAyMDIxMDcyMiAoNCkuanBnXCI6IFwiLi9zcmMvaW1hZ2VzL3JlbmRlcnMvQ0FZTUFOIEFWSUFUT1IgMjAyMTA3MjIgKDQpLmpwZ1wiLFxuXHRcIi4vQ0FZTUFOIEFWSUFUT1IgMjAyMTA3MjIgKDUpLmpwZ1wiOiBcIi4vc3JjL2ltYWdlcy9yZW5kZXJzL0NBWU1BTiBBVklBVE9SIDIwMjEwNzIyICg1KS5qcGdcIixcblx0XCIuL0NBWU1BTiBBVklBVE9SIDIwMjEwNzIyICg2KS5qcGdcIjogXCIuL3NyYy9pbWFnZXMvcmVuZGVycy9DQVlNQU4gQVZJQVRPUiAyMDIxMDcyMiAoNikuanBnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcy9yZW5kZXJzIHN5bmMgXFxcXC4ocG5nfGpwZT9nfHN2ZykkXCI7IiwiY29uc3Qgc2Nyb2xsSGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY3JvbGwtaGVhZGVyXCIpO1xyXG5jb25zdCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpO1xyXG5jb25zdCBuYXZMb2dvID0gbmF2Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJzdmdcIik7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIGlmICh0aGlzLndpbmRvdy5zY3JvbGxZID4gMCkge1xyXG4gICAgc2Nyb2xsSGVhZGVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7bmF2Q29udGFpbmVyLm9mZnNldEhlaWdodH1weClgO1xyXG4gICAgbmF2TG9nby5zdHlsZS5maWxsID0gXCJibGFja1wiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBuYXZMb2dvLnN0eWxlLmZpbGwgPSBcIndoaXRlXCI7XHJcbiAgICBzY3JvbGxIZWFkZXIuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKDApXCI7XHJcbiAgfVxyXG59KTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgXCIuL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhclwiO1xyXG5pbXBvcnQgXCIuLi9tYWluLnNjc3NcIjtcclxuXHJcbmltcG9ydCB7IHJlbmRlck5hdiB9IGZyb20gXCIuL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhclwiO1xyXG5pbXBvcnQgeyByZW5kZXJIb21lIH0gZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL0hvbWVcIjtcclxuaW1wb3J0IHsgcmVuZGVyd3JhcHBlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvd3JhcHBlci93cmFwcGVyXCI7XHJcbmltcG9ydCBTcGxpZGUgZnJvbSBcIkBzcGxpZGVqcy9zcGxpZGVcIjtcclxuXHJcbmNvbnN0IGRvY0ZyYWcgPSBuZXcgRG9jdW1lbnRGcmFnbWVudCgpO1xyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbmJvZHkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCIjcm9vdFwiKTtcclxucmVuZGVyTmF2KGRvY0ZyYWcpO1xyXG5yZW5kZXJIb21lKGRvY0ZyYWcpO1xyXG5cclxucmVuZGVyd3JhcHBlcihkb2NGcmFnKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb2NGcmFnKTtcclxucmVxdWlyZShcIi4vc2Nyb2xsQW5pbWF0aW9uXCIpO1xyXG5jb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LnNwbGlkZVwiKSk7XHJcblxyXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKFwiLi9nYWxsZXJ5U2xpZGVyL2dhbGxlcnlTbGlkZXIubW9kdWxlLnNjc3NcIikuZGVmYXVsdDtcclxudmFyIGVsbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic3BsaWRlXCIpO1xyXG5jb25zb2xlLmxvZyhzdHlsZXMpO1xyXG4vLyBuZXcgU3BsaWRlKFwiLnNwbGlkZVwiLCB7XHJcbi8vICAgaGVpZ2h0OiBcImF1dG9cIixcclxuLy8gICBhcnJvd3M6IFwiZmFsc2VcIixcclxuXHJcbi8vICAgY292ZXI6IHRydWUsXHJcbi8vICAgY2xhc3Nlczoge1xyXG4vLyAgICAgcHJldjogc3R5bGVzW1wibGVmdFwiXSxcclxuLy8gICAgIG5leHQ6IHN0eWxlc1tcInJpZ2h0XCJdLFxyXG4vLyAgIH0sXHJcbi8vIH0pLm1vdW50KCk7XHJcbmZvciAodmFyIGkgPSAwLCBsZW4gPSBlbG1zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgaWYgKGkgPT09IDApIHtcclxuICAgIG5ldyBTcGxpZGUoZWxtc1tpXSwge1xyXG4gICAgICBoZWlnaHQ6IFwiYXV0b1wiLFxyXG4gICAgICBjbGFzc2VzOiB7XHJcbiAgICAgICAgcHJldjogc3R5bGVzW1wibGVmdFwiXSxcclxuICAgICAgICBuZXh0OiBzdHlsZXNbXCJyaWdodFwiXSxcclxuICAgICAgfSxcclxuICAgIH0pLm1vdW50KCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIG5ldyBTcGxpZGUoZWxtc1tpXSwge1xyXG4gICAgICBoZWlnaHQ6IFwiYXV0b1wiLFxyXG4gICAgICBwYWdpbmF0aW9uOiBmYWxzZSxcclxuICAgICAgY2xhc3Nlczoge1xyXG4gICAgICAgIHByZXY6IHN0eWxlc1tcImh5YnJpZC1jYXJvdXNlbC1sZWZ0XCJdLFxyXG4gICAgICAgIG5leHQ6IHN0eWxlc1tcImh5YnJpZC1jYXJvdXNlbC1yaWdodFwiXSxcclxuICAgICAgfSxcclxuICAgIH0pLm1vdW50KCk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==