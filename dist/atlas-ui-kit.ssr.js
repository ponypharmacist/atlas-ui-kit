'use strict';var Vue=require('vue');function _interopDefaultLegacy(e){return e&&typeof e==='object'&&'default'in e?e:{'default':e}}var Vue__default=/*#__PURE__*/_interopDefaultLegacy(Vue);function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}//
var script$2 = Vue__default['default'].component('AuInput', {
  name: 'AuInput',
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    type: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    regex: {
      type: String,
      default: null
    }
  },
  computed: {
    model: {
      get: function get() {
        return this.value;
      },
      set: function set(val) {
        if (val && this.regex) {
          if (new RegExp("^".concat(this.regex, "$")).test(val)) {
            this.$emit('input', val);
          } else {
            this.$refs.input.value = this.value || '';
          }
        } else {
          this.$emit('input', val);
        }
      }
    }
  }
});function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}/* script */
var __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm.type === 'checkbox' ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.model,
      expression: "model"
    }],
    ref: "input",
    staticClass: "au-input",
    attrs: {
      "disabled": _vm.disabled,
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.model) ? _vm._i(_vm.model, null) > -1 : _vm.model
    },
    on: {
      "change": function change($event) {
        var $$a = _vm.model,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;

        if (Array.isArray($$a)) {
          var $$v = null,
              $$i = _vm._i($$a, $$v);

          if ($$el.checked) {
            $$i < 0 && (_vm.model = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.model = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.model = $$c;
        }
      }
    }
  }) : _vm.type === 'radio' ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.model,
      expression: "model"
    }],
    ref: "input",
    staticClass: "au-input",
    attrs: {
      "disabled": _vm.disabled,
      "type": "radio"
    },
    domProps: {
      "checked": _vm._q(_vm.model, null)
    },
    on: {
      "change": function change($event) {
        _vm.model = null;
      }
    }
  }, []) : _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.model,
      expression: "model"
    }],
    ref: "input",
    staticClass: "au-input",
    attrs: {
      "disabled": _vm.disabled,
      "type": _vm.type
    },
    domProps: {
      "value": _vm.model
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) {
          return;
        }

        _vm.model = $event.target.value;
      }
    }
  }, []);
};

var __vue_staticRenderFns__$2 = [];
/* style */

var __vue_inject_styles__$2 = undefined;
/* scoped */

var __vue_scope_id__$2 = "data-v-3b2ccaaa";
/* module identifier */

var __vue_module_identifier__$2 = "data-v-3b2ccaaa";
/* functional template */

var __vue_is_functional_template__$2 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
var script$1 = {
  name: 'icon',
  inheritAttrs: false,
  props: {
    icon: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    size: {
      type: Number,
      default: null
    },
    color: {
      type: String,
      default: null
    }
  },
  computed: {
    styles: function styles() {
      return "width: ".concat(this.size, "px; height: ").concat(this.size, "px;");
    }
  }
};function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group = css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: "au-icon icon-" + _vm.icon,
    style: _vm.styles,
    attrs: {
      "title": _vm.title
    }
  }, []);
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-4307f145_0", {
    source: ".icon-account-group[data-v-4307f145]{mask:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0ibWRpLWFjY291bnQtZ3JvdXAiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIsNS41QTMuNSwzLjUgMCAwLDEgMTUuNSw5QTMuNSwzLjUgMCAwLDEgMTIsMTIuNUEzLjUsMy41IDAgMCwxIDguNSw5QTMuNSwzLjUgMCAwLDEgMTIsNS41TTUsOEM1LjU2LDggNi4wOCw4LjE1IDYuNTMsOC40MkM2LjM4LDkuODUgNi44LDExLjI3IDcuNjYsMTIuMzhDNy4xNiwxMy4zNCA2LjE2LDE0IDUsMTRBMywzIDAgMCwxIDIsMTFBMywzIDAgMCwxIDUsOE0xOSw4QTMsMyAwIDAsMSAyMiwxMUEzLDMgMCAwLDEgMTksMTRDMTcuODQsMTQgMTYuODQsMTMuMzQgMTYuMzQsMTIuMzhDMTcuMiwxMS4yNyAxNy42Miw5Ljg1IDE3LjQ3LDguNDJDMTcuOTIsOC4xNSAxOC40NCw4IDE5LDhNNS41LDE4LjI1QzUuNSwxNi4xOCA4LjQxLDE0LjUgMTIsMTQuNUMxNS41OSwxNC41IDE4LjUsMTYuMTggMTguNSwxOC4yNVYyMEg1LjVWMTguMjVNMCwyMFYxOC41QzAsMTcuMTEgMS44OSwxNS45NCA0LjQ1LDE1LjZDMy44NiwxNi4yOCAzLjUsMTcuMjIgMy41LDE4LjI1VjIwSDBNMjQsMjBIMjAuNVYxOC4yNUMyMC41LDE3LjIyIDIwLjE0LDE2LjI4IDE5LjU1LDE1LjZDMjIuMTEsMTUuOTQgMjQsMTcuMTEgMjQsMTguNVYyMFoiIC8+PC9zdmc+) no-repeat 0 0/100% 100%}.au-icon[data-v-4307f145]{display:inline-block;width:12px;height:12px;min-width:12px;background-color:#000;box-sizing:border-box}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$1 = "data-v-4307f145";
/* module identifier */

var __vue_module_identifier__$1 = "data-v-4307f145";
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject shadow dom */

var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, createInjectorSSR, undefined);var script = {
  name: 'au-button',
  components: {
    AuIcon: __vue_component__$1
  },
  inheritAttrs: false,
  props: {
    icon: String,
    label: String,
    isLoading: Boolean,
    disabled: Boolean,
    small: Boolean,
    large: Boolean,
    shadow: Boolean,
    inverse: Boolean,
    link: Boolean,
    to: [Object, String],
    href: String,
    tag: {
      type: String,
      default: 'a'
    },
    type: {
      type: String,
      default: 'button'
    },
    blockedRights: Array,
    red: Boolean,
    fullWidth: Boolean,
    bordered: Boolean
  },
  computed: {
    classObject: function classObject() {
      var _ref;

      return _ref = {}, _defineProperty(_ref, this.$options.name, true), _defineProperty(_ref, 'is-red', this.red), _defineProperty(_ref, 'is-shadow', this.shadow), _defineProperty(_ref, 'is-full-width', this.fullWidth), _defineProperty(_ref, 'is-inverse', this.inverse), _defineProperty(_ref, 'is-large', this.large), _defineProperty(_ref, 'is-bordered', this.bordered), _defineProperty(_ref, 'is-link', this.link), _defineProperty(_ref, 'is-loading', this.isLoading), _defineProperty(_ref, "disabled", this.disabled), _ref;
    }
  }
};/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return !!_vm.to ? _c('router-link', {
    class: _vm.classObject,
    attrs: {
      "to": _vm.to,
      "tag": _vm.tag
    }
  }, [_vm._t("default", function () {
    return [[_vm.icon ? _c('au-icon', {
      attrs: {
        "name": _vm.icon
      }
    }) : _vm._e(), _vm._v(" "), _vm.label ? _c('span', {
      staticClass: "label"
    }, [_vm._v(_vm._s(_vm.label))]) : _vm._e(), _vm._v(" "), !_vm.icon && !_vm.label ? _c('span', [_vm._v("Submit")]) : _vm._e()]];
  })], 2) : !!_vm.href ? _c('a', {
    class: _vm.classObject,
    attrs: {
      "href": _vm.href
    }
  }, [_vm._t("default", function () {
    return [[_vm.icon ? _c('au-icon', {
      attrs: {
        "name": _vm.icon
      }
    }) : _vm._e(), _vm._v(" "), _vm.label ? _c('span', {
      staticClass: "label"
    }, [_vm._v(_vm._s(_vm.label))]) : _vm._e(), _vm._v(" "), !_vm.icon && !_vm.label ? _c('span', [_vm._v("Submit")]) : _vm._e()]];
  })], 2) : _c('button', {
    class: _vm.classObject,
    attrs: {
      "type": _vm.type
    },
    on: {
      "click": function click($event) {
        $event.stopPropagation();
        return _vm.$emit('click', $event);
      }
    }
  }, [_vm._t("default", function () {
    return [[_vm.icon ? _c('au-icon', {
      attrs: {
        "name": _vm.icon
      }
    }) : _vm._e(), _vm._v(" "), _vm.label ? _c('span', {
      staticClass: "label"
    }, [_vm._v(_vm._s(_vm.label))]) : _vm._e(), _vm._v(" "), !_vm.icon && !_vm.label ? _c('span', [_vm._v("Submit")]) : _vm._e()], _vm._v(" "), _vm.isLoading ? _c('div', {
      staticClass: "button-loader"
    }) : _vm._e()];
  })], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-28493ce4_0", {
    source: ".au-button[data-v-28493ce4]{position:relative;display:flex;justify-content:center;align-items:center;font-size:12px;font-weight:500;color:#3f6ada;background-color:#fff;height:32px;border-radius:4px;border:none;outline:0;cursor:pointer;padding:0 16px}.au-button.is-loading .au-icon[data-v-28493ce4],.au-button.is-loading span[data-v-28493ce4]{opacity:0}.au-button.is-full-width[data-v-28493ce4]{width:100%}.au-button.is-shadow[data-v-28493ce4]{box-shadow:0 2px 2px rgba(20,20,20,.15)}.au-button.is-inverse[data-v-28493ce4]{background-color:#3f6ada;transition:.3s;background-image:linear-gradient(180deg,rgba(152,210,255,.3) 0,rgba(255,255,255,0) 100%);color:#fff}.au-button.is-inverse[data-v-28493ce4]:hover{background-image:linear-gradient(180deg,rgba(63,106,218,.3) 0,rgba(63,106,218,0) 100%)}.au-button.is-link[data-v-28493ce4]{background-color:transparent!important}.au-button.is-link.is-red[data-v-28493ce4]{color:#ff6c59}.au-button.is-link.is-red[data-v-28493ce4]:hover{color:#eb5f4d}.au-button.is-large[data-v-28493ce4]{font-size:14px;height:40px}.au-button.is-bordered[data-v-28493ce4]{border:1px solid #e0e8f0;transition:border-color .2s,color .2s,background-color .2s}.au-button.is-bordered[data-v-28493ce4]:hover{background-color:#3f6ada;background-image:linear-gradient(180deg,rgba(152,210,255,.3) 0,rgba(255,255,255,0) 100%);color:#fff}.au-button.is-red[data-v-28493ce4]{background-color:#ff6c59;color:#fff}.au-button.is-red[data-v-28493ce4]:hover{background-color:#eb5f4d}.au-button.disabled[data-v-28493ce4]{opacity:.5;background-image:none;pointer-events:none}.au-button.disabled[data-v-28493ce4]:not(.is-inverse){border:1px solid #fff}.au-button.is-add[data-v-28493ce4]{position:absolute;top:0;right:0;margin-right:0;min-width:207px}.au-button .au-icon[data-v-28493ce4]{margin-right:8px}.au-button .label[data-v-28493ce4]{white-space:nowrap}.au-button .button-loader[data-v-28493ce4]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-28493ce4";
/* module identifier */

var __vue_module_identifier__ = "data-v-28493ce4";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);var components$1=/*#__PURE__*/Object.freeze({__proto__:null,AuInput: __vue_component__$2,AuButton: __vue_component__,AuIcon: __vue_component__$1});var install = function installAtlasUiKit(Vue) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()
var components=/*#__PURE__*/Object.freeze({__proto__:null,'default': install,AuInput: __vue_component__$2,AuButton: __vue_component__,AuIcon: __vue_component__$1});// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)

Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== 'default') {
    install[componentName] = component;
  }
});module.exports=install;