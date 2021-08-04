'use strict';var require$$0=require('vue');function _interopDefaultLegacy(e){return e&&typeof e==='object'&&'default'in e?e:{'default':e}}var require$$0__default=/*#__PURE__*/_interopDefaultLegacy(require$$0);function ownKeys$4(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$4(Object(source), true).forEach(function (key) {
        _defineProperty$3(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$4(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _typeof$3(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$3 = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof$3 = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof$3(obj);
}

function _defineProperty$3(obj, key, value) {
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

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}//
//
//
//
//
//
//
//
//
//
var script$j = {
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
    },
    // Принудительно делаем иконку маской
    mask: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    styles: function styles() {
      var style = '';
      if (this.size) style += "width: ".concat(this.size, "px; height: ").concat(this.size, "px;");
      if (this.color) style += "background-color: ".concat(this.color, ";"); // Оставляем исходные цвета иконки или красим ее в один цвет

      if (!this.color && !this.mask) {
        style += "background: transparent url('".concat(this.getIconUrl, "') no-repeat 50% 50% / contain;");
      } else {
        style += "-webkit-mask: url('".concat(this.getIconUrl, "') no-repeat 50% 50% / contain;");
        style += "mask: url('".concat(this.getIconUrl, "') no-repeat 50% 50% / contain;");
      }

      return style;
    },
    getIconUrl: function getIconUrl() {
      if (this.icon.includes('mdi-')) {
        var _images = require.context('@mdi/svg/svg/', false, /\.svg$/);

        return _images("./".concat(this.icon.slice(4), ".svg"));
      }

      var images = require.context('@/assets/icons/', false, /\.svg$/);

      return images("./".concat(this.icon, ".svg"));
    }
  }
};function normalizeComponent$2(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
}function createInjectorSSR(context) {
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
var __vue_script__$j = script$j;
/* template */

var __vue_render__$j = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm.icon ? _c('div', {
    class: "au-icon icon-" + _vm.icon,
    style: _vm.styles,
    attrs: {
      "title": _vm.title
    }
  }, []) : _vm._e();
};

var __vue_staticRenderFns__$j = [];
/* style */

var __vue_inject_styles__$j = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-4149adc8_0", {
    source: ".au-icon[data-v-4149adc8]{display:inline-block;width:12px;height:12px;min-width:12px;box-sizing:border-box}.au-icon.au-icon-white[data-v-4149adc8]{background-color:#fff}.au-icon.au-icon-blue[data-v-4149adc8]{background-color:#3f6ada}.au-icon.au-icon-error[data-v-4149adc8]{background-color:#ff2c2c!important}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$j = "data-v-4149adc8";
/* module identifier */

var __vue_module_identifier__$h = "data-v-4149adc8";
/* functional template */

var __vue_is_functional_template__$j = false;
/* style inject shadow dom */

var __vue_component__$t = /*#__PURE__*/normalizeComponent$2({
  render: __vue_render__$j,
  staticRenderFns: __vue_staticRenderFns__$j
}, __vue_inject_styles__$j, __vue_script__$j, __vue_scope_id__$j, __vue_is_functional_template__$j, __vue_module_identifier__$h, false, undefined, createInjectorSSR, undefined);

var AuIcon = __vue_component__$t;//
//
//
//
//
//
var script$i = {
  name: 'spinner-dots',
  inheritAttrs: false,
  props: {
    size: {
      type: Number,
      default: 48
    },
    color: {
      type: String,
      required: true
    }
  },
  computed: {
    containerStyle: function containerStyle() {
      var size = this.size && "".concat(this.size, "px");
      return {
        width: size,
        height: size
      };
    },
    blobStyle: function blobStyle() {
      var size = this.size && "".concat(this.size / 3, "px");
      return {
        color: this.color,
        width: size,
        height: size
      };
    }
  }
};/* script */
var __vue_script__$i = script$i;
/* template */

var __vue_render__$i = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: _vm.$options.name,
    style: _vm.containerStyle
  }, [_vm._ssrNode(_vm._ssrList(3, function (i) {
    return "<div" + _vm._ssrClass(null, "bounce" + i) + _vm._ssrStyle(null, _vm.blobStyle, null) + " data-v-5b3d11e0></div>";
  }))]);
};

var __vue_staticRenderFns__$i = [];
/* style */

var __vue_inject_styles__$i = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-5b3d11e0_0", {
    source: ".spinner-dots[data-v-5b3d11e0]{font-size:0;text-align:center;white-space:nowrap;display:flex;align-items:center;color:inherit}.spinner-dots>div[data-v-5b3d11e0]{background-color:currentColor;border-radius:100%;display:inline-block;animation:sk-bouncedelay-data-v-5b3d11e0 1s infinite ease-in-out both}.spinner-dots .bounce1[data-v-5b3d11e0]{animation-delay:-.3333333333s}.spinner-dots .bounce2[data-v-5b3d11e0]{animation-delay:-.1666666667s}@-webkit-keyframes sk-bouncedelay-data-v-5b3d11e0{0%,100%,80%{transform:scale(.37)}40%{transform:scale(.55)}}@keyframes sk-bouncedelay-data-v-5b3d11e0{0%,100%,80%{transform:scale(.37)}40%{transform:scale(.55)}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$i = "data-v-5b3d11e0";
/* module identifier */

var __vue_module_identifier__$g = "data-v-5b3d11e0";
/* functional template */

var __vue_is_functional_template__$i = false;
/* style inject shadow dom */

var __vue_component__$s = /*#__PURE__*/normalizeComponent$2({
  render: __vue_render__$i,
  staticRenderFns: __vue_staticRenderFns__$i
}, __vue_inject_styles__$i, __vue_script__$i, __vue_scope_id__$i, __vue_is_functional_template__$i, __vue_module_identifier__$g, false, undefined, createInjectorSSR, undefined);

var SpinnerDots = __vue_component__$s;//
//
//
//
//
//
var script$h = {
  name: 'spinner-fading-circle',
  inheritAttrs: false,
  props: {
    size: {
      type: Number,
      default: 48
    }
  },
  computed: {
    style: function style() {
      var size = this.size && "".concat(this.size, "px");
      return {
        width: size,
        height: size
      };
    }
  }
};/* script */
var __vue_script__$h = script$h;
/* template */

var __vue_render__$h = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "sk-fading-circle",
    class: _vm.$options.name,
    style: _vm.style
  }, [_vm._ssrNode(_vm._ssrList(8, function (i) {
    return "<div" + _vm._ssrClass(null, 'sk-circle sk-circle' + i) + " data-v-56be54e2></div>";
  }))]);
};

var __vue_staticRenderFns__$h = [];
/* style */

var __vue_inject_styles__$h = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-56be54e2_0", {
    source: ".sk-fading-circle[data-v-56be54e2]{position:relative;width:36px;height:36px;color:currentColor}.sk-fading-circle .sk-circle[data-v-56be54e2]{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle .sk-circle[data-v-56be54e2]::before{content:\"\";display:block;margin:0 auto;width:4px;height:4px;overflow:hidden;background-color:currentColor;border-radius:2px;animation:sk-circleFadeDelay-data-v-56be54e2 .8s infinite ease-in-out both}.sk-fading-circle .sk-circle1[data-v-56be54e2]{transform:rotate(0)}.sk-fading-circle .sk-circle1[data-v-56be54e2]::before{animation-delay:-.8s}.sk-fading-circle .sk-circle2[data-v-56be54e2]{transform:rotate(45deg)}.sk-fading-circle .sk-circle2[data-v-56be54e2]::before{animation-delay:-.7s}.sk-fading-circle .sk-circle3[data-v-56be54e2]{transform:rotate(90deg)}.sk-fading-circle .sk-circle3[data-v-56be54e2]::before{animation-delay:-.6s}.sk-fading-circle .sk-circle4[data-v-56be54e2]{transform:rotate(135deg)}.sk-fading-circle .sk-circle4[data-v-56be54e2]::before{animation-delay:-.5s}.sk-fading-circle .sk-circle5[data-v-56be54e2]{transform:rotate(180deg)}.sk-fading-circle .sk-circle5[data-v-56be54e2]::before{animation-delay:-.4s}.sk-fading-circle .sk-circle6[data-v-56be54e2]{transform:rotate(225deg)}.sk-fading-circle .sk-circle6[data-v-56be54e2]::before{animation-delay:-.3s}.sk-fading-circle .sk-circle7[data-v-56be54e2]{transform:rotate(270deg)}.sk-fading-circle .sk-circle7[data-v-56be54e2]::before{animation-delay:-.2s}.sk-fading-circle .sk-circle8[data-v-56be54e2]{transform:rotate(315deg)}.sk-fading-circle .sk-circle8[data-v-56be54e2]::before{animation-delay:-.1s}@keyframes sk-circleFadeDelay-data-v-56be54e2{0%,100%,39%{opacity:0}40%{opacity:1}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$h = "data-v-56be54e2";
/* module identifier */

var __vue_module_identifier__$f = "data-v-56be54e2";
/* functional template */

var __vue_is_functional_template__$h = false;
/* style inject shadow dom */

var __vue_component__$r = /*#__PURE__*/normalizeComponent$2({
  render: __vue_render__$h,
  staticRenderFns: __vue_staticRenderFns__$h
}, __vue_inject_styles__$h, __vue_script__$h, __vue_scope_id__$h, __vue_is_functional_template__$h, __vue_module_identifier__$f, false, undefined, createInjectorSSR, undefined);

var SpinnerFadingCircle = __vue_component__$r;var AuSpinner = {
  name: 'au-spinner',
  inheritAttrs: false,
  props: {
    size: {
      type: Number,
      required: false
    },
    color: {
      type: String,
      default: '#999'
    },
    type: {
      type: String,
      default: 'dots',
      validator: function validator(prop) {
        return ['dots', 'fading-circle'].includes(prop);
      }
    }
  },
  render: function render(h) {
    var props = {
      size: this.size,
      color: this.color
    };

    switch (this.type) {
      case 'fading-circle':
        return h(SpinnerFadingCircle, {
          props: props
        });

      case 'dots':
      default:
        return h(SpinnerDots, {
          props: props
        });
    }
  }
};var script$g = {
  name: 'au-button',
  components: {
    AuIcon: AuIcon,
    AuSpinner: AuSpinner
  },
  inheritAttrs: false,
  props: {
    to: {
      type: [Object, String],
      default: null
    },
    href: {
      type: String,
      default: null
    },
    tag: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: 'button'
    },
    // Content
    icon: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    // State
    isLoading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // Styling
    link: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: Boolean,
      default: false
    },
    red: {
      type: Boolean,
      default: false
    },
    white: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
    transparent: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classObject: function classObject() {
      var _ref;

      return _ref = {}, _defineProperty$3(_ref, this.$options.name, true), _defineProperty$3(_ref, 'is-red', this.red), _defineProperty$3(_ref, 'is-white', this.white), _defineProperty$3(_ref, 'is-bordered', this.bordered), _defineProperty$3(_ref, 'is-shadow', this.shadow), _defineProperty$3(_ref, 'is-transparent', this.transparent), _defineProperty$3(_ref, 'is-round', this.round), _defineProperty$3(_ref, 'is-full-width', this.fullWidth), _defineProperty$3(_ref, 'is-large', this.large), _defineProperty$3(_ref, 'is-link', this.link), _defineProperty$3(_ref, 'is-loading', this.isLoading), _defineProperty$3(_ref, "disabled", this.disabled), _ref;
    },
    iconClass: function iconClass() {
      if (this.white) return 'au-icon-blue';
      return 'au-icon-white';
    },
    spinnerColor: function spinnerColor() {
      if (this.red || !this.white) return '#FFFFFF';
      return '#3F6ADA';
    },
    iconSize: function iconSize() {
      return this.large ? 16 : 14;
    }
  }
};/* script */
var __vue_script__$g = script$g;
/* template */

var __vue_render__$g = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c(_vm.tag, {
    tag: "component",
    class: _vm.classObject,
    attrs: {
      "to": _vm.to,
      "href": _vm.href,
      "type": _vm.type
    },
    on: {
      "click": function click($event) {
        $event.stopPropagation();
        return _vm.$emit('click', $event);
      }
    }
  }, [_vm._t("icon"), _vm._v(" "), _c('au-icon', {
    class: _vm.iconClass,
    attrs: {
      "icon": _vm.icon,
      "size": _vm.iconSize,
      "mask": ""
    }
  }), _vm._v(" "), _vm.label ? _c('span', {
    staticClass: "label"
  }, [_vm._v(_vm._s(_vm.label))]) : _vm._t("default"), _vm._v(" "), _vm.isLoading ? _c('div', {
    staticClass: "button-loader"
  }, [_c('au-spinner', {
    attrs: {
      "color": _vm.spinnerColor
    }
  })], 1) : _vm._e()], 2);
};

var __vue_staticRenderFns__$g = [];
/* style */

var __vue_inject_styles__$g = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-6a3b1114_0", {
    source: ".au-button[data-v-6a3b1114]{position:relative;display:flex;justify-content:center;align-items:center;font-family:inherit;font-size:12px;font-weight:500;height:32px;border-radius:4px;border:none;outline:0;cursor:pointer;padding:0 16px;color:#fff;background-color:#3f6ada;transition:.3s;background-image:linear-gradient(180deg,rgba(152,210,255,.3) 0,rgba(255,255,255,0) 100%)}.au-button[data-v-6a3b1114]:hover{background-image:linear-gradient(180deg,rgba(63,106,218,.3) 0,rgba(63,106,218,0) 100%)}.au-button[data-v-6a3b1114]  .au-icon{margin-right:8px}.au-button.is-full-width[data-v-6a3b1114]{width:100%}.au-button.is-shadow[data-v-6a3b1114]{box-shadow:0 2px 2px rgba(20,20,20,.15)}.au-button.is-white[data-v-6a3b1114]{color:#3f6ada;background-color:#fff;background-image:none}.au-button.is-link[data-v-6a3b1114]{background-color:transparent!important;background-image:none;color:#3f6ada}.au-button.is-link .au-icon[data-v-6a3b1114]{background-color:#3f6ada!important}.au-button.is-link[data-v-6a3b1114]:hover{color:#2a3f64}.au-button.is-link:hover .au-icon[data-v-6a3b1114]{background-color:#2a3f64!important}.au-button.is-link.is-red[data-v-6a3b1114]{color:#ff6c59}.au-button.is-link.is-red .au-icon[data-v-6a3b1114]{background-color:#ff6c59!important}.au-button.is-link.is-red[data-v-6a3b1114]:hover{color:#eb5f4d}.au-button.is-link.is-red:hover .au-icon[data-v-6a3b1114]{background-color:#eb5f4d!important}.au-button.is-link.is-white[data-v-6a3b1114]{color:#fff}.au-button.is-link.is-white .au-icon[data-v-6a3b1114]{background-color:#fff!important}.au-button.is-link.is-white[data-v-6a3b1114]:hover{color:#fafafa}.au-button.is-link.is-white:hover .au-icon[data-v-6a3b1114]{background-color:#fafafa!important}.au-button.is-large[data-v-6a3b1114]{font-size:14px;height:40px}.au-button.is-bordered[data-v-6a3b1114]{border:1px solid #e0e8f0;transition:border-color .2s,color .2s,background-color .2s}.au-button.is-bordered[data-v-6a3b1114]:hover{border-color:#cfd9e3}.au-button.is-bordered.is-white[data-v-6a3b1114]:hover{color:#fff;background-color:#3f6ada;background-image:linear-gradient(180deg,rgba(63,106,218,.3) 0,rgba(63,106,218,0) 100%)}.au-button.is-red[data-v-6a3b1114]{background-color:#ff6c59;color:#fff;background-image:none}.au-button.is-red[data-v-6a3b1114]:hover{background-color:#eb5f4d}.au-button.disabled[data-v-6a3b1114]{opacity:.5;background-image:none;pointer-events:none}.au-button.disabled.is-white[data-v-6a3b1114]{border:1px solid #fff}.au-button .label[data-v-6a3b1114]{white-space:nowrap}.au-button .button-loader[data-v-6a3b1114]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center}.au-button.is-transparent[data-v-6a3b1114]{background-color:rgba(0,0,0,.2);background-image:none}.au-button.is-transparent[data-v-6a3b1114]:hover{background-color:rgba(0,0,0,.15)}.au-button.is-transparent.is-white[data-v-6a3b1114]{background-color:rgba(255,255,255,.75)}.au-button.is-transparent.is-white[data-v-6a3b1114]:hover{background-color:rgba(255,255,255,.85)}.au-button.is-round[data-v-6a3b1114]{width:32px;border-radius:50%;padding:0;text-align:center}.au-button.is-round.is-large[data-v-6a3b1114]{width:40px}.au-button.is-round .au-icon[data-v-6a3b1114]{margin-right:0}.is-loading .au-icon[data-v-6a3b1114],.is-loading span[data-v-6a3b1114]{opacity:0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$g = "data-v-6a3b1114";
/* module identifier */

var __vue_module_identifier__$e = "data-v-6a3b1114";
/* functional template */

var __vue_is_functional_template__$g = false;
/* style inject shadow dom */

var __vue_component__$p = /*#__PURE__*/normalizeComponent$2({
  render: __vue_render__$g,
  staticRenderFns: __vue_staticRenderFns__$g
}, __vue_inject_styles__$g, __vue_script__$g, __vue_scope_id__$g, __vue_is_functional_template__$g, __vue_module_identifier__$e, false, undefined, createInjectorSSR, undefined);

var __vue_component__$q = __vue_component__$p;function _typeof$2(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$2 = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof$2 = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof$2(obj);
}

function _defineProperty$2(obj, key, value) {
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

function ownKeys$3(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$3(Object(source), true).forEach(function (key) {
        _defineProperty$2(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$3(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var placeholderChar = '_';
var strFunction = 'function';

var emptyArray = [];
function convertMaskToPlaceholder() {
  var mask = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : emptyArray;
  var placeholderChar$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : placeholderChar;

  if (!isArray$1(mask)) {
    throw new Error('Text-mask:convertMaskToPlaceholder; The mask property must be an array.');
  }

  if (mask.indexOf(placeholderChar$1) !== -1) {
    throw new Error('Placeholder character must not be used as part of the mask. Please specify a character ' + 'that is not present in your mask as your placeholder character.\n\n' + "The placeholder character that was received is: ".concat(JSON.stringify(placeholderChar$1), "\n\n") + "The mask that was received is: ".concat(JSON.stringify(mask)));
  }

  return mask.map(function (char) {
    return char instanceof RegExp ? placeholderChar$1 : char;
  }).join('');
}
function isArray$1(value) {
  return Array.isArray && Array.isArray(value) || value instanceof Array;
}
var strCaretTrap = '[]';
function processCaretTraps(mask) {
  var indexes = [];
  var indexOfCaretTrap;

  while (indexOfCaretTrap = mask.indexOf(strCaretTrap), indexOfCaretTrap !== -1) {
    indexes.push(indexOfCaretTrap);
    mask.splice(indexOfCaretTrap, 1);
  }

  return {
    maskWithoutCaretTraps: mask,
    indexes: indexes
  };
}

var emptyArray$1 = [];
var emptyString = '';
function conformToMask() {
  var rawValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : emptyString;
  var mask = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : emptyArray$1;
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!isArray$1(mask)) {
    if (_typeof$2(mask) === strFunction) {
      mask = mask(rawValue, config);
      mask = processCaretTraps(mask).maskWithoutCaretTraps;
    } else {
      throw new Error('Text-mask:conformToMask; The mask property must be an array.');
    }
  }

  var _config$guide = config.guide,
      guide = _config$guide === void 0 ? true : _config$guide,
      _config$previousConfo = config.previousConformedValue,
      previousConformedValue = _config$previousConfo === void 0 ? emptyString : _config$previousConfo,
      _config$placeholderCh = config.placeholderChar,
      placeholderChar$1 = _config$placeholderCh === void 0 ? placeholderChar : _config$placeholderCh,
      _config$placeholder = config.placeholder,
      placeholder = _config$placeholder === void 0 ? convertMaskToPlaceholder(mask, placeholderChar$1) : _config$placeholder,
      currentCaretPosition = config.currentCaretPosition,
      keepCharPositions = config.keepCharPositions;
  var suppressGuide = guide === false && previousConformedValue !== undefined;
  var rawValueLength = rawValue.length;
  var previousConformedValueLength = previousConformedValue.length;
  var placeholderLength = placeholder.length;
  var maskLength = mask.length;
  var editDistance = rawValueLength - previousConformedValueLength;
  var isAddition = editDistance > 0;
  var indexOfFirstChange = currentCaretPosition + (isAddition ? -editDistance : 0);
  var indexOfLastChange = indexOfFirstChange + Math.abs(editDistance);

  if (keepCharPositions === true && !isAddition) {
    var compensatingPlaceholderChars = emptyString;

    for (var i = indexOfFirstChange; i < indexOfLastChange; i++) {
      if (placeholder[i] === placeholderChar$1) {
        compensatingPlaceholderChars += placeholderChar$1;
      }
    }

    rawValue = rawValue.slice(0, indexOfFirstChange) + compensatingPlaceholderChars + rawValue.slice(indexOfFirstChange, rawValueLength);
  }

  var rawValueArr = rawValue.split(emptyString).map(function (char, i) {
    return {
      char: char,
      isNew: i >= indexOfFirstChange && i < indexOfLastChange
    };
  });

  for (var _i = rawValueLength - 1; _i >= 0; _i--) {
    var char = rawValueArr[_i].char;

    if (char !== placeholderChar$1) {
      var shouldOffset = _i >= indexOfFirstChange && previousConformedValueLength === maskLength;

      if (char === placeholder[shouldOffset ? _i - editDistance : _i]) {
        rawValueArr.splice(_i, 1);
      }
    }
  }

  var conformedValue = emptyString;
  var someCharsRejected = false;

  placeholderLoop: for (var _i2 = 0; _i2 < placeholderLength; _i2++) {
    var charInPlaceholder = placeholder[_i2];

    if (charInPlaceholder === placeholderChar$1) {
      if (rawValueArr.length > 0) {
        while (rawValueArr.length > 0) {
          var _rawValueArr$shift = rawValueArr.shift(),
              rawValueChar = _rawValueArr$shift.char,
              isNew = _rawValueArr$shift.isNew;

          if (rawValueChar === placeholderChar$1 && suppressGuide !== true) {
            conformedValue += placeholderChar$1;
            continue placeholderLoop;
          } else if (mask[_i2].test(rawValueChar)) {
            if (keepCharPositions !== true || isNew === false || previousConformedValue === emptyString || guide === false || !isAddition) {
              conformedValue += rawValueChar;
            } else {
              var rawValueArrLength = rawValueArr.length;
              var indexOfNextAvailablePlaceholderChar = null;

              for (var _i3 = 0; _i3 < rawValueArrLength; _i3++) {
                var charData = rawValueArr[_i3];

                if (charData.char !== placeholderChar$1 && charData.isNew === false) {
                  break;
                }

                if (charData.char === placeholderChar$1) {
                  indexOfNextAvailablePlaceholderChar = _i3;
                  break;
                }
              }

              if (indexOfNextAvailablePlaceholderChar !== null) {
                conformedValue += rawValueChar;
                rawValueArr.splice(indexOfNextAvailablePlaceholderChar, 1);
              } else {
                _i2--;
              }
            }

            continue placeholderLoop;
          } else {
            someCharsRejected = true;
          }
        }
      }

      if (suppressGuide === false) {
        conformedValue += placeholder.substr(_i2, placeholderLength);
      }

      break;
    } else {
      conformedValue += charInPlaceholder;
    }
  }

  if (suppressGuide && isAddition === false) {
    var indexOfLastFilledPlaceholderChar = null;

    for (var _i4 = 0; _i4 < conformedValue.length; _i4++) {
      if (placeholder[_i4] === placeholderChar$1) {
        indexOfLastFilledPlaceholderChar = _i4;
      }
    }

    if (indexOfLastFilledPlaceholderChar !== null) {
      conformedValue = conformedValue.substr(0, indexOfLastFilledPlaceholderChar + 1);
    } else {
      conformedValue = emptyString;
    }
  }

  return {
    conformedValue: conformedValue,
    meta: {
      someCharsRejected: someCharsRejected
    }
  };
}

var NEXT_CHAR_OPTIONAL = {
  __nextCharOptional__: true
};
var defaultMaskReplacers = {
  '#': /\d/,
  A: /[a-z]/i,
  N: /[a-z0-9]/i,
  '?': NEXT_CHAR_OPTIONAL,
  X: /./
};

var stringToRegexp = function stringToRegexp(str) {
  var lastSlash = str.lastIndexOf('/');
  return new RegExp(str.slice(1, lastSlash), str.slice(lastSlash + 1));
};

var makeRegexpOptional = function makeRegexpOptional(charRegexp) {
  return stringToRegexp(charRegexp.toString().replace(/.(\/)[gmiyus]{0,6}$/, function (match) {
    return match.replace('/', '?/');
  }));
};

var escapeIfNeeded = function escapeIfNeeded(char) {
  return '[\\^$.|?*+()'.indexOf(char) > -1 ? "\\".concat(char) : char;
};

var charRegexp = function charRegexp(char) {
  return new RegExp("/[".concat(escapeIfNeeded(char), "]/"));
};

var isRegexp = function isRegexp(entity) {
  return entity instanceof RegExp;
};

var castToRegexp = function castToRegexp(char) {
  return isRegexp(char) ? char : charRegexp(char);
};

function maskToRegExpMask(mask) {
  var maskReplacers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultMaskReplacers;
  return mask.map(function (char, index, array) {
    var maskChar = maskReplacers[char] || char;
    var previousChar = array[index - 1];
    var previousMaskChar = maskReplacers[previousChar] || previousChar;

    if (maskChar === NEXT_CHAR_OPTIONAL) {
      return null;
    }

    if (previousMaskChar === NEXT_CHAR_OPTIONAL) {
      return makeRegexpOptional(castToRegexp(maskChar));
    }

    return maskChar;
  }).filter(Boolean);
}

function stringMaskToRegExpMask(stringMask) {
  var maskReplacers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultMaskReplacers;
  return maskToRegExpMask(stringMask.split(''), maskReplacers);
}
function arrayMaskToRegExpMask(arrayMask) {
  var maskReplacers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultMaskReplacers;
  var flattenedMask = arrayMask.map(function (part) {
    if (part instanceof RegExp) {
      return part;
    }

    if (typeof part === 'string') {
      return part.split('');
    }

    return null;
  }).filter(Boolean).reduce(function (mask, part) {
    return mask.concat(part);
  }, []);
  return maskToRegExpMask(flattenedMask, maskReplacers);
}

var trigger = function trigger(el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
};
var queryInputElementInside = function queryInputElementInside(el) {
  return el instanceof HTMLInputElement ? el : el.querySelector('input') || el;
};
var isFunction$2 = function isFunction(val) {
  return typeof val === 'function';
};
var isString = function isString(val) {
  return typeof val === 'string';
};
var isRegexp$1 = function isRegexp(val) {
  return val instanceof RegExp;
};

function createOptions() {
  var elementOptions = new Map();
  var defaultOptions = {
    previousValue: '',
    mask: []
  };

  function get(el) {
    return elementOptions.get(el) || _objectSpread2({}, defaultOptions);
  }

  function partiallyUpdate(el, newOptions) {
    elementOptions.set(el, _objectSpread2(_objectSpread2({}, get(el)), newOptions));
  }

  function remove(el) {
    elementOptions.delete(el);
  }

  return {
    partiallyUpdate: partiallyUpdate,
    remove: remove,
    get: get
  };
}

var options = createOptions();

function triggerInputUpdate(el) {
  trigger(el, 'input');
}

function updateValue(el) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var value = el.value;

  var _options$get = options.get(el),
      previousValue = _options$get.previousValue,
      mask = _options$get.mask;

  var isValueChanged = value !== previousValue;
  var isLengthIncreased = value.length > previousValue.length;
  var isUpdateNeeded = value && isValueChanged && isLengthIncreased;

  if ((force || isUpdateNeeded) && mask) {
    var _conformToMask = conformToMask(value, mask, {
      guide: false
    }),
        conformedValue = _conformToMask.conformedValue;

    el.value = conformedValue;
    triggerInputUpdate(el);
  }

  options.partiallyUpdate(el, {
    previousValue: value
  });
}

function updateMask(el, inputMask, maskReplacers) {
  var mask;

  if (Array.isArray(inputMask)) {
    mask = arrayMaskToRegExpMask(inputMask, maskReplacers);
  } else if (isFunction$2(inputMask)) {
    mask = inputMask;
  } else if (isString(inputMask) && inputMask.length > 0) {
    mask = stringMaskToRegExpMask(inputMask, maskReplacers);
  } else {
    mask = inputMask;
  }

  options.partiallyUpdate(el, {
    mask: mask
  });
}

function extendMaskReplacers(maskReplacers) {
  var baseMaskReplacers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultMaskReplacers;

  if (maskReplacers === null || Array.isArray(maskReplacers) || _typeof$2(maskReplacers) !== 'object') {
    return baseMaskReplacers;
  }

  return Object.keys(maskReplacers).reduce(function (extendedMaskReplacers, key) {
    var value = maskReplacers[key];

    if (value !== null && !(value instanceof RegExp)) {
      return extendedMaskReplacers;
    }

    return _objectSpread2(_objectSpread2({}, extendedMaskReplacers), {}, _defineProperty$2({}, key, value));
  }, baseMaskReplacers);
}

function maskToString(mask) {
  var maskArray = Array.isArray(mask) ? mask : [mask];
  var filteredMaskArray = maskArray.filter(function (part) {
    return isString(part) || isRegexp$1(part);
  });
  return filteredMaskArray.toString();
}

function createDirective() {
  var directiveOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var instanceMaskReplacers = extendMaskReplacers(directiveOptions && directiveOptions.placeholders);
  return {
    bind: function bind(el, _ref) {
      var value = _ref.value;
      el = queryInputElementInside(el);
      updateMask(el, value, instanceMaskReplacers);
      updateValue(el);
    },
    componentUpdated: function componentUpdated(el, _ref2) {
      var value = _ref2.value,
          oldValue = _ref2.oldValue;
      el = queryInputElementInside(el);
      var isMaskChanged = isFunction$2(value) || maskToString(oldValue) !== maskToString(value);

      if (isMaskChanged) {
        updateMask(el, value, instanceMaskReplacers);
      }

      updateValue(el, isMaskChanged);
    },
    unbind: function unbind(el) {
      el = queryInputElementInside(el);
      options.remove(el);
    }
  };
}
var directive$2 = createDirective();var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}/** Detect free variable `global` from Node.js. */

var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;/** Built-in value references. */
var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap;/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;/** Used for built-in method references. */
var objectProto$g = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$d = objectProto$g.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$g.toString;

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$d.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

var _getRawTag = getRawTag;/** Used for built-in method references. */
var objectProto$f = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$f.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

var _objectToString = objectToString;/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;/** `Object#toString` result references. */
var symbolTag$1 = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag$1);
}

var isSymbol_1 = isSymbol;/** Used as references for various `Number` constants. */
var INFINITY$2 = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto$1 = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto$1 ? symbolProto$1.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }
  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$2) ? '-0' : result;
}

var _baseToString = baseToString;/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : _baseToString(value);
}

var toString_1 = toString;/** Used to generate unique IDs. */
var idCounter = 0;

/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {string} [prefix=''] The value to prefix the ID with.
 * @returns {string} Returns the unique ID.
 * @example
 *
 * _.uniqueId('contact_');
 * // => 'contact_104'
 *
 * _.uniqueId();
 * // => '105'
 */
function uniqueId(prefix) {
  var id = ++idCounter;
  return toString_1(prefix) + id;
}

var uniqueId_1 = uniqueId;//
var script$f = {
  name: 'au-input',
  model: {
    prop: 'value',
    event: 'input'
  },
  directives: {
    mask: directive$2
  },
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number, Array],
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: uniqueId_1()
    },
    inputErrors: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    type: {
      type: String,
      default: 'text'
    },
    mask: {
      type: [String, Array, Function],
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    inverse: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      isFocused: false
    };
  },
  computed: {
    componentClasses: function componentClasses() {
      return [this.$options.name, {
        'is-focused': this.isFocused,
        'is-full-width': this.fullWidth,
        'is-small': this.small,
        'is-inverse': this.inverse,
        'is-disabled': this.disabled,
        'is-error': this.hasErrors
      }];
    },
    hasErrors: function hasErrors() {
      var _this$inputErrors;

      return (_this$inputErrors = this.inputErrors) === null || _this$inputErrors === void 0 ? void 0 : _this$inputErrors.length;
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (this.autofocus) {
      this.$nextTick(function () {
        _this.$refs.input.focus();
      });
    }
  },
  methods: {
    onChange: function onChange(event) {
      this.$emit('change', event.target.value);
    },
    onInput: function onInput(event) {
      this.$emit('input', event.target.value);
    },
    onFocus: function onFocus(event) {
      this.$emit('focus', event.target.value);
    }
  }
};/* script */
var __vue_script__$f = script$f;
/* template */

var __vue_render__$f = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: _vm.componentClasses,
    on: {
      "click": function click($event) {
        return _vm.$emit('click', $event);
      },
      "mouseover": function mouseover($event) {
        return _vm.$emit('mouseover', $event);
      },
      "mouseenter": function mouseenter($event) {
        return _vm.$emit('mouseenter', $event);
      },
      "mouseleave": function mouseleave($event) {
        return _vm.$emit('mouseleave', $event);
      },
      "mousemove": function mousemove($event) {
        return _vm.$emit('mousemove', $event);
      }
    }
  }, [_vm._ssrNode("<div" + _vm._ssrClass("input-content", {
    'has-icon': !!this.icon || this.$slots.icon
  }) + " data-v-54609198>", "</div>", [_vm._t("icon"), _vm._ssrNode(" "), _c('au-icon', {
    class: {
      'au-icon-error': _vm.hasErrors
    },
    attrs: {
      "icon": _vm.icon,
      "size": _vm.small ? 14 : 16,
      "color": "#3F6ADA"
    }
  }), _vm._ssrNode(" "), _c('input', {
    directives: [{
      name: "mask",
      rawName: "v-mask",
      value: _vm.mask,
      expression: "mask"
    }],
    ref: "input",
    class: [],
    attrs: {
      "type": _vm.type,
      "placeholder": _vm.placeholder,
      "name": _vm.name,
      "required": _vm.required,
      "disabled": _vm.disabled || _vm.readonly,
      "autocomplete": "off"
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "change": _vm.onChange,
      "input": _vm.onInput,
      "focus": _vm.onFocus,
      "focusin": function focusin($event) {
        _vm.isFocused = true;
      },
      "focusout": function focusout($event) {
        _vm.isFocused = false;
      }
    }
  }, [])], 2), _vm._ssrNode(" "), _vm._t("suffix")], 2);
};

var __vue_staticRenderFns__$f = [];
/* style */

var __vue_inject_styles__$f = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-54609198_0", {
    source: ".au-input[data-v-54609198]{position:relative;display:flex;align-items:center;flex-wrap:nowrap;height:40px;width:120px;border-radius:4px;border:1px solid #e0e8f0;background-color:#f0f4fb;transition:.3s}.au-input.is-disabled[data-v-54609198]{opacity:.5;cursor:not-allowed}.au-input.is-inverse[data-v-54609198]{background-color:#fff}.au-input.is-error[data-v-54609198]{border:1px solid #ff2c2c;background-color:#fff1f0}.au-input .input-content[data-v-54609198]{display:flex;align-items:center;padding:10px 12px;width:100%}.au-input .input-content.has-icon[data-v-54609198]{padding:10px 12px 10px 44px}.au-input .input-content>.au-icon[data-v-54609198]{position:absolute;left:16px}.au-input input[data-v-54609198]{height:100%;width:100%;font-size:14px;font-weight:500;outline:0;background-color:transparent;border:none}.au-input input[data-v-54609198]::placeholder{color:#9f9f9f}.au-input input[disabled][data-v-54609198]{pointer-events:none}.au-input.wrong[data-v-54609198]{border:1px solid #ff6c59;box-shadow:1px 0 0 2px rgba(220,53,69,.25)}.au-input.is-focused[data-v-54609198]{border:1px solid #3f6ada;box-shadow:unset}.au-input.is-full-width[data-v-54609198]{width:100%}.au-input.is-small[data-v-54609198]{height:32px;border-radius:2px}.au-input.is-small .input-content[data-v-54609198]{padding:0 10px}.au-input.is-small .input-content.has-icon[data-v-54609198]{padding:0 10px 0 32px}.au-input.is-small .input-content>.au-icon[data-v-54609198]{position:absolute;left:12px;top:50%;transform:translateY(-50%)}.au-input.is-small input[data-v-54609198]{font-size:12px;font-weight:400}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$f = "data-v-54609198";
/* module identifier */

var __vue_module_identifier__$d = "data-v-54609198";
/* functional template */

var __vue_is_functional_template__$f = false;
/* style inject shadow dom */

var __vue_component__$n = /*#__PURE__*/normalizeComponent$2({
  render: __vue_render__$f,
  staticRenderFns: __vue_staticRenderFns__$f
}, __vue_inject_styles__$f, __vue_script__$f, __vue_scope_id__$f, __vue_is_functional_template__$f, __vue_module_identifier__$d, false, undefined, createInjectorSSR, undefined);

var __vue_component__$o = __vue_component__$n;var Vue$1 = require$$0__default['default'];
Vue$1 = 'default' in Vue$1 ? Vue$1['default'] : Vue$1;

var version = '2.2.2';

var compatible = (/^2\./).test(Vue$1.version);
if (!compatible) {
  Vue$1.util.warn('VueClickaway ' + version + ' only supports Vue 2.x, and does not support Vue ' + Vue$1.version);
}



// @SECTION: implementation

var HANDLER = '_vue_clickaway_handler';

function bind$1(el, binding, vnode) {
  unbind(el);

  var vm = vnode.context;

  var callback = binding.value;
  if (typeof callback !== 'function') {
    return;
  }

  // @NOTE: Vue binds directives in microtasks, while UI events are dispatched
  //        in macrotasks. This causes the listener to be set up before
  //        the "origin" click event (the event that lead to the binding of
  //        the directive) arrives at the document root. To work around that,
  //        we ignore events until the end of the "initial" macrotask.
  // @REFERENCE: https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
  // @REFERENCE: https://github.com/simplesmiler/vue-clickaway/issues/8
  var initialMacrotaskEnded = false;
  setTimeout(function() {
    initialMacrotaskEnded = true;
  }, 0);

  el[HANDLER] = function(ev) {
    // @NOTE: this test used to be just `el.containts`, but working with path is better,
    //        because it tests whether the element was there at the time of
    //        the click, not whether it is there now, that the event has arrived
    //        to the top.
    // @NOTE: `.path` is non-standard, the standard way is `.composedPath()`
    var path = ev.path || (ev.composedPath ? ev.composedPath() : undefined);
    if (initialMacrotaskEnded && (path ? path.indexOf(el) < 0 : !el.contains(ev.target))) {
      return callback.call(vm, ev);
    }
  };

  document.documentElement.addEventListener('click', el[HANDLER], false);
}

function unbind(el) {
  document.documentElement.removeEventListener('click', el[HANDLER], false);
  delete el[HANDLER];
}

var directive$1 = {
  bind: bind$1,
  update: function(el, binding) {
    if (binding.value === binding.oldValue) return;
    bind$1(el, binding);
  },
  unbind: unbind,
};
var directive_1 = directive$1;/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray_1(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol_1(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

var _isKey = isKey;/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag$1 = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction$1(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction$1;/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;/** Used for built-in method references. */
var funcProto$2 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$2 = funcProto$2.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
    objectProto$e = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$c = objectProto$e.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$c).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

var _nativeCreate = nativeCreate;/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear;/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete;/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$d = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$b = objectProto$d.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? undefined : result;
  }
  return hasOwnProperty$b.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;/** Used for built-in method references. */
var objectProto$c = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$a = objectProto$c.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$a.call(data, key);
}

var _hashHas = hashHas;/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet;/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

var _Hash = Hash;/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear;/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf;/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete;/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet;/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

var _ListCache = ListCache;/* Built-in method references that are verified to be native. */
var Map$1 = _getNative(_root, 'Map');

var _Map = Map$1;/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}

var _mapCacheClear = mapCacheClear;/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable;/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData;/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete;/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet;/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

var _MapCache = MapCache;/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache;

var memoize_1 = memoize;/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize_1(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped;/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = _memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

var _stringToPath = stringToPath;/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray_1(value)) {
    return value;
  }
  return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
}

var _castPath = castPath;/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol_1(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

var _toKey = toKey;/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = _castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[_toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

var _baseGet = baseGet;/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : _baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get;var transitionContext = {
  to_work: {
    title: 'В работу'
  },
  take_in_work: {
    title: 'Взять в работу'
  },
  to_approving: {
    title: 'Отправить на проверку'
  },
  to_clarification: {
    title: 'Запросить уточнение',
    withComment: true
  },
  to_back_from_clarification: {
    title: 'Уточнить и вернуть',
    withComment: true
  },
  to_close: {
    title: 'Закрыть'
  },
  to_correction: {
    title: 'Вернуть на доработку',
    withComment: true
  }
};
var script$e = {
  name: 'au-select',
  directives: {
    clickaway: directive_1
  },
  model: {
    event: 'change',
    prop: 'value'
  },
  props: {
    value: {
      type: [Number, String, Object, Array],
      default: null
    },
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    placeholder: {
      type: String,
      default: 'Выберите из списка'
    },
    noDataText: {
      type: String,
      default: 'Список пуст'
    },
    idField: {
      type: String,
      default: null
    },
    valueField: {
      type: String,
      default: null
    },
    returnObject: {
      type: Boolean,
      default: false
    },
    closeOnSelect: {
      type: Boolean,
      default: false
    },
    multiselect: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    inverse: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      selectId: uniqueId_1('select'),
      isActive: false,
      searchQuery: null,
      top: false,
      bottom: false,
      resolverArray: ['to_work', 'take_in_work', 'to_approving', 'to_clarification', 'to_back_from_clarification', 'to_close', 'to_correction']
    };
  },
  computed: {
    classObject: function classObject() {
      var _ref;

      return _ref = {}, _defineProperty$3(_ref, this.$options.name, true), _defineProperty$3(_ref, 'is-small', this.small), _defineProperty$3(_ref, 'is-large', this.large), _defineProperty$3(_ref, 'is-inverse', this.inverse), _defineProperty$3(_ref, 'is-disabled', this.disabled), _ref;
    },
    listData: function listData() {
      var _this = this;

      if (!this.searchQuery || this.searchQuery === '') return this.list;
      return this.list.filter(function (item) {
        return _this.getValueField(item).toLowerCase().indexOf(_this.searchQuery.toLowerCase()) !== -1;
      });
    },
    getValueField: function getValueField() {
      var _this2 = this;

      return function (item) {
        if (_this2.resolverArray.includes(item[_this2.valueField])) {
          return get_1(transitionContext, item[_this2.valueField], {
            title: 'Unknown transition code'
          }).title;
        }

        return item[_this2.valueField] || item;
      };
    },
    selectedText: function selectedText() {
      var _this3 = this;

      if (this.resolverArray.includes(this.value)) {
        return get_1(transitionContext, this.value, {
          title: 'Unknown transition code'
        }).title;
      }

      if (Array.isArray(this.value)) {
        return this.value.map(function (_) {
          if (_[_this3.valueField]) return _[_this3.valueField];
          if (_.value) return _.value;

          var reference = _this3.list.find(function (item) {
            return item[_this3.idField] === _;
          });

          if (reference) return reference[_this3.valueField];
          return 'Label not found';
        });
      }

      if (_typeof$3(this.value) === 'object' && this.value !== null) {
        return this.value[this.valueField] || this.value.value;
      }

      var reference = this.list.find(function (_) {
        return _[_this3.idField] === _this3.value;
      });
      if (reference) return reference[this.valueField];
      return this.value;
    },
    isSelected: function isSelected() {
      var _this4 = this;

      return function (item) {
        if (_this4.multiselect) {
          return (_this4.value || []).includes(item[_this4.idField] || item);
        }

        return _this4.value === (item[_this4.idField] || item);
      };
    },
    isValidValue: function isValidValue() {
      if (this.multiselect) return Array.isArray(this.value) && this.value.length;
      return this.value !== null;
    }
  },
  methods: {
    onItemClick: function onItemClick(item) {
      var readyValue = this.getSelectedValue(item);

      if (!this.multiselect && this.value === readyValue) {
        var newValue = null;
        this.$emit('change', newValue);
        return;
      }

      if (this.multiselect && (this.value || []).includes(readyValue)) {
        var index = this.value.findIndex(function (_) {
          return _ === readyValue;
        });

        var _newValue = _toConsumableArray(this.value);

        _newValue.splice(index, 1);

        _newValue = _newValue.filter(Boolean);
        this.$emit('change', _newValue);
        return;
      }

      this.$emit('change', this.multiselect ? [].concat(_toConsumableArray(this.value || []), [readyValue]) : readyValue);

      if (this.closeOnSelect) {
        this.onClickAway();
      }
    },
    getSelectedValue: function getSelectedValue(item) {
      if (this.returnObject && _typeof$3(item) === 'object') return item;

      if (_typeof$3(item) === 'object') {
        return item[this.idField] || item.id;
      }

      return item;
    },
    onClickAway: function onClickAway() {
      this.isActive = false;
      this.searchQuery = null;
    },
    showList: function showList() {
      this.isActive = !this.isActive;

      if (this.isActive === true) {
        this.getPosition();
      }
    },
    getPosition: function getPosition() {
      var _this5 = this;

      // eslint-disable-next-line consistent-return
      this.$nextTick(function () {
        var el = document.querySelector("#au-select--".concat(_this5.selectId));
        var rect = el.getBoundingClientRect();
        var windowHeight = window.innerHeight;

        if (windowHeight - rect.bottom < 290) {
          _this5.bottom = false;
          _this5.top = true;
        } else {
          _this5.top = false;
          _this5.bottom = true;
        }
      });
    }
  }
};/* script */
var __vue_script__$e = script$e;
/* template */

var __vue_render__$e = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    directives: [{
      name: "clickaway",
      rawName: "v-clickaway",
      value: _vm.onClickAway,
      expression: "onClickAway"
    }],
    class: _vm.classObject,
    attrs: {
      "id": "au-select--" + _vm.selectId
    }
  }, [_vm._ssrNode("<div" + _vm._ssrClass("au-select-selected", {
    active: _vm.isActive
  }) + " data-v-97f1ba3e>" + (_vm.isValidValue ? !_vm.multiselect ? _vm._ssrEscape(_vm._s(_vm.selectedText)) : "<div class=\"chips\" data-v-97f1ba3e>" + _vm._ssrList(_vm.selectedText, function (item, index) {
    return "<div class=\"chips-item\" data-v-97f1ba3e>" + _vm._ssrEscape(_vm._s(item)) + "</div>";
  }) + "</div>" : _vm.placeholder ? "<span class=\"au-select-placeholder\" data-v-97f1ba3e>" + _vm._ssrEscape(_vm._s(_vm.placeholder)) + "</span>" : "<!---->") + "</div> "), _vm.isActive ? _vm._ssrNode("<ul" + _vm._ssrClass("au-select-list", [{
    active: _vm.isActive,
    top: _vm.top,
    bottom: _vm.bottom
  }]) + " data-v-97f1ba3e>", "</ul>", [_vm.list.length > 15 || _vm.searchQuery ? _vm._ssrNode("<div class=\"au-select-list__search\" data-v-97f1ba3e>", "</div>", [_c('au-input', {
    attrs: {
      "placeholder": "Поиск по списку",
      "inverse": "",
      "small": "",
      "full-width": ""
    },
    model: {
      value: _vm.searchQuery,
      callback: function callback($$v) {
        _vm.searchQuery = $$v;
      },
      expression: "searchQuery"
    }
  })], 1) : _vm._e(), _vm._ssrNode(" " + (!_vm.listData || !_vm.listData.length ? "<li class=\"au-select-item disabled\" data-v-97f1ba3e>" + _vm._ssrEscape("\n      " + _vm._s(_vm.noDataText) + "\n    ") + "</li>" : "<!---->") + " " + _vm._ssrList(_vm.listData, function (item, index) {
    return "<li" + _vm._ssrClass("au-select-item", {
      selected: _vm.isSelected(item)
    }) + " data-v-97f1ba3e>" + _vm._ssrEscape("\n      " + _vm._s(_vm.getValueField(item)) + "\n    ") + "</li>";
  }))], 2) : _vm._e()], 2);
};

var __vue_staticRenderFns__$e = [];
/* style */

var __vue_inject_styles__$e = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-97f1ba3e_0", {
    source: ".au-select[data-v-97f1ba3e]{position:relative;width:auto;min-height:40px;font-size:14px}.au-select.is-small[data-v-97f1ba3e]{min-height:32px;font-size:12px}.au-select.is-small .au-select-item[data-v-97f1ba3e],.au-select.is-small .au-select-selected[data-v-97f1ba3e]{min-height:32px;margin-top:5px;margin-bottom:5px}.au-select-item[data-v-97f1ba3e],.au-select-selected[data-v-97f1ba3e]{position:relative;display:flex;align-items:center;width:100%;min-height:40px;font-weight:500;background-color:#fff;padding:0 8px;cursor:pointer}.au-select-placeholder[data-v-97f1ba3e]{font-weight:300;color:#9f9f9f}.au-select-selected[data-v-97f1ba3e]{border-radius:2px;border:1px solid #e0e8f0;background-color:#f0f4fb;overflow:hidden;color:#3f6ada;font-weight:400;font-size:12px}.au-select-selected[data-v-97f1ba3e]::before{content:\"\";position:absolute;width:1px;height:100%;background-color:#e0e8f0;right:28px;top:0}.au-select-selected[data-v-97f1ba3e]::after{content:\"\";background:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNi42NzkiIGhlaWdodD0iMjgiPjxwYXRoIGQ9Ik0xNi4zNzEgMTQuNzQ0TDMuNTI4IDI3LjY5MmExLjA1MSAxLjA1MSAwIDAxLTEuNDg3IDBMLjMwOSAyNS45NmExLjA1MSAxLjA1MSAwIDAxMC0xLjQ4N0wxMC42NzUgMTQgLjMwOCAzLjUyOGExLjA1MSAxLjA1MSAwIDAxMC0xLjQ4N0wyLjA0LjMwOWExLjA1MSAxLjA1MSAwIDAxMS40ODcgMGwxMi44NDQgMTIuOTQ3YTEuMDUxIDEuMDUxIDAgMDEwIDEuNDg4eiIvPjwvc3ZnPg==) no-repeat center;background-size:contain;width:6px;height:11px;position:absolute;transform:translate(-50%,-50%) rotate(90deg);top:50%;right:8px;transition:.3s}.au-select-selected.active[data-v-97f1ba3e]{border-radius:2px 2px 0 0}.au-select-selected.active[data-v-97f1ba3e]::after{transform:translate(-50%,-50%) rotate(270deg);transition:.3s}.au-select.is-disabled[data-v-97f1ba3e]{opacity:.7;pointer-events:none}.au-select.is-inverse .au-select-selected[data-v-97f1ba3e]{background-color:#fff}.au-select-item[data-v-97f1ba3e]:hover{background-color:#e0e8f0}.au-select-item.selected[data-v-97f1ba3e]{background-color:rgba(178,184,196,.1);color:#3f6ada}.au-select-item.selected[data-v-97f1ba3e]:hover{background-color:rgba(178,184,196,.3)}.au-select-item.disabled[data-v-97f1ba3e]{pointer-events:none;color:#9f9f9f}.au-select-list[data-v-97f1ba3e]{position:absolute;width:100%;background-color:#fff;border:1px solid #e0e8f0;box-shadow:0 2px 2px rgba(100,100,100,.15);max-height:160px;overflow-x:hidden;overflow-y:scroll;border-radius:0 0 0 2px;pointer-events:none;visibility:hidden;opacity:0;z-index:1}.au-select-list.top[data-v-97f1ba3e]{top:unset;bottom:100%;box-shadow:0 -1px 2px rgba(100,100,100,.15)}.au-select-list.bottom[data-v-97f1ba3e]{top:100%;bottom:unset}.au-select-list.active[data-v-97f1ba3e]{visibility:visible;opacity:1;pointer-events:auto}.au-select-list[data-v-97f1ba3e]::-webkit-scrollbar{-webkit-appearance:none;height:4px;width:4px;cursor:pointer}.au-select-list[data-v-97f1ba3e]::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 4px #f7f7f7;box-shadow:inset 0 0 4px #f7f7f7}.au-select-list[data-v-97f1ba3e]::-webkit-scrollbar-thumb{background-color:#e0e8f0;border-radius:2px;outline:0;background-clip:border-box;cursor:pointer}.au-select .chips[data-v-97f1ba3e]{padding:4px 20px 4px 0;display:flex;flex-wrap:wrap;margin-top:-4px}.au-select .chips-item[data-v-97f1ba3e]{font-size:11px;border:1px solid #e0e8f0;padding:4px;background-color:#fff;border-radius:3px;margin-top:4px;margin-right:4px}.au-select-list__search[data-v-97f1ba3e]{display:flex;flex-wrap:nowrap;padding:8px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$e = "data-v-97f1ba3e";
/* module identifier */

var __vue_module_identifier__$c = "data-v-97f1ba3e";
/* functional template */

var __vue_is_functional_template__$e = false;
/* style inject shadow dom */

var __vue_component__$l = /*#__PURE__*/normalizeComponent$2({
  render: __vue_render__$e,
  staticRenderFns: __vue_staticRenderFns__$e
}, __vue_inject_styles__$e, __vue_script__$e, __vue_scope_id__$e, __vue_is_functional_template__$e, __vue_module_identifier__$c, false, undefined, createInjectorSSR, undefined);

var __vue_component__$m = __vue_component__$l;//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$d = {
  name: 'au-dropdown-button',
  props: {
    list: {
      type: Array,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    large: {
      type: Boolean,
      default: false
    },
    white: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      showList: false,
      top: false,
      bottom: false
    };
  },
  computed: {
    componentClasses: function componentClasses() {
      return [this.$options.name, {
        'is-large': this.large,
        'is-white': this.white,
        'au-dropdown-button--top': this.top,
        'au-dropdown-button--bottom': this.bottom
      }];
    },
    iconSize: function iconSize() {
      return this.large ? 16 : 14;
    },
    iconClass: function iconClass() {
      if (this.white) return 'au-icon-blue';
      return 'au-icon-white';
    }
  },
  methods: {
    showDropList: function showDropList() {
      this.showList = true;
      this.getPosition();
    },
    hideDropList: function hideDropList() {
      this.showList = false;
    },
    getPosition: function getPosition() {
      var _this = this;

      this.$nextTick(function () {
        var el = document.querySelector('.au-dropdown-button');
        var rect = el.getBoundingClientRect();
        var windowHeight = window.innerHeight;

        if (windowHeight - rect.bottom < 290) {
          _this.bottom = false;
          _this.top = true;
        } else {
          _this.top = false;
          _this.bottom = true;
        }
      });
    }
  }
};/* script */
var __vue_script__$d = script$d;
/* template */

var __vue_render__$d = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: _vm.componentClasses,
    on: {
      "mouseenter": _vm.showDropList,
      "mouseleave": _vm.hideDropList
    }
  }, [_vm._ssrNode("<div class=\"au-dropdown-button-main\">", "</div>", [_c('au-icon', {
    class: _vm.iconClass,
    attrs: {
      "icon": _vm.icon,
      "size": _vm.iconSize,
      "mask": ""
    }
  }), _vm._ssrNode(" "), _vm._t("default")], 2), _vm._ssrNode(" "), _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_vm.showList ? _c('ul', {
    staticClass: "au-dropdown-button-list"
  }, [_vm._l(_vm.list, function (item, index) {
    return _c('li', {
      key: index,
      on: {
        "click": function click($event) {
          return _vm.$emit('selected', item);
        }
      }
    }, [_vm._v("\n        " + _vm._s(item.title) + "\n      ")]);
  }), _vm._v(" "), !_vm.list ? _vm._t("list") : _vm._e()], 2) : _vm._e()])], 2);
};

var __vue_staticRenderFns__$d = [];
/* style */

var __vue_inject_styles__$d = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-2468f5fa_0", {
    source: ".au-dropdown-button{display:inline-block;position:relative;height:32px}.au-dropdown-button:hover .au-dropdown-button-main:after{transform:translate(-50%,-50%) rotate(270deg);transition:.3s}.au-dropdown-button .au-dropdown-button-main{position:relative;display:flex;justify-content:center;align-items:center;font-size:12px;font-weight:500;width:100%;height:32px;color:#fff;border-radius:4px;background-color:#3f6ada;background-image:linear-gradient(180deg,rgba(152,210,255,.3) 0,rgba(255,255,255,0) 100%);padding:0 47px 0 15px;overflow:hidden;cursor:pointer}.au-dropdown-button .au-dropdown-button-main:before{content:\"\";position:absolute;width:32px;height:32px;background-color:rgba(255,255,255,.1);right:0;top:0}.au-dropdown-button .au-dropdown-button-main:after{content:\"\";-webkit-mask:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNi42NzkiIGhlaWdodD0iMjgiPjxwYXRoIGQ9Ik0xNi4zNzEgMTQuNzQ0TDMuNTI4IDI3LjY5MmExLjA1MSAxLjA1MSAwIDAxLTEuNDg3IDBMLjMwOSAyNS45NmExLjA1MSAxLjA1MSAwIDAxMC0xLjQ4N0wxMC42NzUgMTQgLjMwOCAzLjUyOGExLjA1MSAxLjA1MSAwIDAxMC0xLjQ4N0wyLjA0LjMwOWExLjA1MSAxLjA1MSAwIDAxMS40ODcgMGwxMi44NDQgMTIuOTQ3YTEuMDUxIDEuMDUxIDAgMDEwIDEuNDg4eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==) no-repeat 0 0/100% 100%;mask:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNi42NzkiIGhlaWdodD0iMjgiPjxwYXRoIGQ9Ik0xNi4zNzEgMTQuNzQ0TDMuNTI4IDI3LjY5MmExLjA1MSAxLjA1MSAwIDAxLTEuNDg3IDBMLjMwOSAyNS45NmExLjA1MSAxLjA1MSAwIDAxMC0xLjQ4N0wxMC42NzUgMTQgLjMwOCAzLjUyOGExLjA1MSAxLjA1MSAwIDAxMC0xLjQ4N0wyLjA0LjMwOWExLjA1MSAxLjA1MSAwIDAxMS40ODcgMGwxMi44NDQgMTIuOTQ3YTEuMDUxIDEuMDUxIDAgMDEwIDEuNDg4eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==) no-repeat 0 0/100% 100%;background-color:#fff;width:6px;height:11px;position:absolute;transform:translate(-50%,-50%) rotate(90deg);top:50%;right:10px;transition:.3s}.au-dropdown-button .au-dropdown-button-main .au-icon{margin-right:6px}.au-dropdown-button .au-dropdown-button-main svg{width:12px;height:12px;fill:#fff}.au-dropdown-button .au-dropdown-button-list{position:absolute;left:0;width:100%;max-height:235px;list-style:none;background-color:#fff;border-radius:4px;overflow-x:hidden;z-index:1000;box-shadow:0 11px 29px rgba(11,66,136,.2),0 -1px 9px rgba(11,66,136,.07)}.au-dropdown-button li:not(.list-header){font-size:12px;line-height:16px;padding:8px 16px;cursor:pointer}.au-dropdown-button li:not(.list-header):hover{background-color:#e0e8f0}.au-dropdown-button li.list-header{font-size:11px;font-weight:500;line-height:16px;padding:8px 16px;cursor:default;border-top:1px solid #e0e8f0}.au-dropdown-button.is-large{height:40px}.au-dropdown-button.is-large .au-dropdown-button-main{height:40px}.au-dropdown-button.is-large .au-dropdown-button-main:before{height:40px}.au-dropdown-button--bottom .au-dropdown-button-list{top:32px}.au-dropdown-button--top .au-dropdown-button-list{bottom:32px;top:unset}.au-dropdown-button--bottom.is-large .au-dropdown-button-list{top:40px}.au-dropdown-button--top.is-large .au-dropdown-button-list{bottom:40px;top:unset}.is-white .au-dropdown-button-main{position:relative;display:flex;justify-content:center;align-items:center;font-size:12px;font-weight:500;width:100%;height:32px;color:#3f6ada;border-radius:4px;background-color:#fff;background-image:none}.is-white .au-dropdown-button-main:before{border-left:thin solid rgba(63,107,218,.25)}.is-white .au-dropdown-button-main:after{background-color:#3f6ada}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$d = undefined;
/* module identifier */

var __vue_module_identifier__$b = "data-v-2468f5fa";
/* functional template */

var __vue_is_functional_template__$d = false;
/* style inject shadow dom */

var __vue_component__$j = /*#__PURE__*/normalizeComponent$2({
  render: __vue_render__$d,
  staticRenderFns: __vue_staticRenderFns__$d
}, __vue_inject_styles__$d, __vue_script__$d, __vue_scope_id__$d, __vue_is_functional_template__$d, __vue_module_identifier__$b, false, undefined, createInjectorSSR, undefined);

var __vue_component__$k = __vue_component__$j;function _typeof$1(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$1 = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof$1 = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof$1(obj);
}function _defineProperty$1(obj, key, value) {
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
}function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
}/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce$1 = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE$1(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE$1(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE$1(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE$1(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty$1 = function (obj, key, value) {
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
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE$1(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE$1(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE$1()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty$1(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty$1(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty$1({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty$1({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty$1({}, side, reference[side]),
      end: defineProperty$1({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce$1(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

var Popper$1 = Popper;/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache;
  this.size = 0;
}

var _stackClear = stackClear;/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

var _stackDelete = stackDelete;/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet;/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas;/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE$1 = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache) {
    var pairs = data.__data__;
    if (!_Map || (pairs.length < LARGE_ARRAY_SIZE$1 - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet = stackSet;/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;

var _Stack = Stack;/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

var _setCacheAdd = setCacheAdd;/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

var _setCacheHas = setCacheHas;/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new _MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
SetCache.prototype.has = _setCacheHas;

var _SetCache = SetCache;/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

var _arraySome = arraySome;/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

var _cacheHas = cacheHas;/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$5 = 1,
    COMPARE_UNORDERED_FLAG$3 = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG$3) ? new _SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!_arraySome(other, function(othValue, othIndex) {
            if (!_cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

var _equalArrays = equalArrays;/** Built-in value references. */
var Uint8Array = _root.Uint8Array;

var _Uint8Array = Uint8Array;/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

var _mapToArray = mapToArray;/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

var _setToArray = setToArray;/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$4 = 1,
    COMPARE_UNORDERED_FLAG$2 = 2;

/** `Object#toString` result references. */
var boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    errorTag$1 = '[object Error]',
    mapTag$3 = '[object Map]',
    numberTag$1 = '[object Number]',
    regexpTag$1 = '[object RegExp]',
    setTag$3 = '[object Set]',
    stringTag$1 = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$2 = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$2:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag$1:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag$1:
    case dateTag$1:
    case numberTag$1:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq_1(+object, +other);

    case errorTag$1:
      return object.name == other.name && object.message == other.message;

    case regexpTag$1:
    case stringTag$1:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag$3:
      var convert = _mapToArray;

    case setTag$3:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert || (convert = _setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

var _equalByTag = equalByTag;/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

var _arrayPush = arrayPush;/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
}

var _baseGetAllKeys = baseGetAllKeys;/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

var _arrayFilter = arrayFilter;/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

var stubArray_1 = stubArray;/** Used for built-in method references. */
var objectProto$b = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$b.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray_1 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return _arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable$1.call(object, symbol);
  });
};

var _getSymbols = getSymbols;/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes;/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag$2;
}

var _baseIsArguments = baseIsArguments;/** Used for built-in method references. */
var objectProto$a = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$9 = objectProto$a.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$a.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$9.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments;/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;var isBuffer_1 = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse_1;

module.exports = isBuffer;
});/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex;/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

var isLength_1 = isLength;/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag$2 = '[object Map]',
    numberTag = '[object Number]',
    objectTag$3 = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag$2 = '[object Set]',
    stringTag = '[object String]',
    weakMapTag$1 = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag$2] = typedArrayTags[numberTag] =
typedArrayTags[objectTag$3] = typedArrayTags[regexpTag] =
typedArrayTags[setTag$2] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag$1] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike_1(value) &&
    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray;/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;var _nodeUtil = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

var isTypedArray_1 = isTypedArray;/** Used for built-in method references. */
var objectProto$9 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$9.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_1(value),
      isArg = !isArr && isArguments_1(value),
      isBuff = !isArr && !isArg && isBuffer_1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$8.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           _isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys;/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$8;

  return value === proto;
}

var _isPrototype = isPrototype;/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg(Object.keys, Object);

var _nativeKeys = nativeKeys;/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$7.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$7.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys;/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}

var keys_1 = keys;/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return _baseGetAllKeys(object, keys_1, _getSymbols);
}

var _getAllKeys = getAllKeys;/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$3 = 1;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$6.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3,
      objProps = _getAllKeys(object),
      objLength = objProps.length,
      othProps = _getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$6.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

var _equalObjects = equalObjects;/* Built-in method references that are verified to be native. */
var DataView = _getNative(_root, 'DataView');

var _DataView = DataView;/* Built-in method references that are verified to be native. */
var Promise$1 = _getNative(_root, 'Promise');

var _Promise = Promise$1;/* Built-in method references that are verified to be native. */
var Set = _getNative(_root, 'Set');

var _Set = Set;/* Built-in method references that are verified to be native. */
var WeakMap = _getNative(_root, 'WeakMap');

var _WeakMap = WeakMap;/** `Object#toString` result references. */
var mapTag$1 = '[object Map]',
    objectTag$2 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag$1 = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = _toSource(_DataView),
    mapCtorString = _toSource(_Map),
    promiseCtorString = _toSource(_Promise),
    setCtorString = _toSource(_Set),
    weakMapCtorString = _toSource(_WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (_Map && getTag(new _Map) != mapTag$1) ||
    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
    (_Set && getTag(new _Set) != setTag$1) ||
    (_WeakMap && getTag(new _WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = _baseGetTag(value),
        Ctor = result == objectTag$2 ? value.constructor : undefined,
        ctorString = Ctor ? _toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag$1;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag$1;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

var _getTag = getTag;/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$2 = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag$1 = '[object Object]';

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$5.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray_1(object),
      othIsArr = isArray_1(other),
      objTag = objIsArr ? arrayTag : _getTag(object),
      othTag = othIsArr ? arrayTag : _getTag(other);

  objTag = objTag == argsTag ? objectTag$1 : objTag;
  othTag = othTag == argsTag ? objectTag$1 : othTag;

  var objIsObj = objTag == objectTag$1,
      othIsObj = othTag == objectTag$1,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer_1(object)) {
    if (!isBuffer_1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack);
    return (objIsArr || isTypedArray_1(object))
      ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty$5.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty$5.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new _Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new _Stack);
  return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

var _baseIsEqualDeep = baseIsEqualDeep;/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike_1(value) && !isObjectLike_1(other))) {
    return value !== value && other !== other;
  }
  return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

var _baseIsEqual = baseIsEqual;/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return _baseIsEqual(value, other);
}

var isEqual_1 = isEqual;function getInternetExplorerVersion() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf('MSIE ');

  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');

  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');

  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  } // other browser


  return -1;
}

//
var isIE;

function initCompat() {
  if (!initCompat.init) {
    initCompat.init = true;
    isIE = getInternetExplorerVersion() !== -1;
  }
}

var script$c = {
  name: 'ResizeObserver',
  props: {
    emitOnMount: {
      type: Boolean,
      default: false
    },
    ignoreWidth: {
      type: Boolean,
      default: false
    },
    ignoreHeight: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted() {
    var _this = this;

    initCompat();
    this.$nextTick(function () {
      _this._w = _this.$el.offsetWidth;
      _this._h = _this.$el.offsetHeight;

      if (_this.emitOnMount) {
        _this.emitSize();
      }
    });
    var object = document.createElement('object');
    this._resizeObject = object;
    object.setAttribute('aria-hidden', 'true');
    object.setAttribute('tabindex', -1);
    object.onload = this.addResizeHandlers;
    object.type = 'text/html';

    if (isIE) {
      this.$el.appendChild(object);
    }

    object.data = 'about:blank';

    if (!isIE) {
      this.$el.appendChild(object);
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify: function compareAndNotify() {
      if (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) {
        this._w = this.$el.offsetWidth;
        this._h = this.$el.offsetHeight;
        this.emitSize();
      }
    },
    emitSize: function emitSize() {
      this.$emit('notify', {
        width: this._w,
        height: this._h
      });
    },
    addResizeHandlers: function addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener('resize', this.compareAndNotify);

      this.compareAndNotify();
    },
    removeResizeHandlers: function removeResizeHandlers() {
      if (this._resizeObject && this._resizeObject.onload) {
        if (!isIE && this._resizeObject.contentDocument) {
          this._resizeObject.contentDocument.defaultView.removeEventListener('resize', this.compareAndNotify);
        }

        this.$el.removeChild(this._resizeObject);
        this._resizeObject.onload = null;
        this._resizeObject = null;
      }
    }
  }
};

function normalizeComponent$1(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function (context) {
      style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

/* script */
var __vue_script__$c = script$c;
/* template */

var __vue_render__$c = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "resize-observer",
    attrs: {
      tabindex: "-1"
    }
  });
};

var __vue_staticRenderFns__$c = [];
__vue_render__$c._withStripped = true;
/* style */

var __vue_inject_styles__$c = undefined;
/* scoped */

var __vue_scope_id__$c = "data-v-8859cc6c";
/* module identifier */

var __vue_module_identifier__$a = undefined;
/* functional template */

var __vue_is_functional_template__$c = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$i = /*#__PURE__*/normalizeComponent$1({
  render: __vue_render__$c,
  staticRenderFns: __vue_staticRenderFns__$c
}, __vue_inject_styles__$c, __vue_script__$c, __vue_scope_id__$c, __vue_is_functional_template__$c, __vue_module_identifier__$a, false, undefined, undefined, undefined);

function install$2(Vue) {
  // eslint-disable-next-line vue/component-definition-name-casing
  Vue.component('resize-observer', __vue_component__$i);
  Vue.component('ResizeObserver', __vue_component__$i);
}

var plugin$1 = {
  // eslint-disable-next-line no-undef
  version: "1.0.1",
  install: install$2
};

var GlobalVue$1 = null;

if (typeof window !== 'undefined') {
  GlobalVue$1 = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue$1 = global.Vue;
}

if (GlobalVue$1) {
  GlobalVue$1.use(plugin$1);
}var defineProperty = (function() {
  try {
    var func = _getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

var _defineProperty = defineProperty;/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty) {
    _defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

var _baseAssignValue = baseAssignValue;/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq_1(object[key], value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}

var _assignMergeValue = assignMergeValue;/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

var _createBaseFor = createBaseFor;/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = _createBaseFor();

var _baseFor = baseFor;var _cloneBuffer = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;
});/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
  return result;
}

var _cloneArrayBuffer = cloneArrayBuffer;/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

var _cloneTypedArray = cloneTypedArray;/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

var _copyArray = copyArray;/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject_1(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

var _baseCreate = baseCreate;/** Built-in value references. */
var getPrototype = _overArg(Object.getPrototypeOf, Object);

var _getPrototype = getPrototype;/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !_isPrototype(object))
    ? _baseCreate(_getPrototype(object))
    : {};
}

var _initCloneObject = initCloneObject;/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike_1(value) && isArrayLike_1(value);
}

var isArrayLikeObject_1 = isArrayLikeObject;/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto$4 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$4.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = _getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$4.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

var isPlainObject_1 = isPlainObject;/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

var _safeGet = safeGet;/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$3.call(object, key) && eq_1(objValue, value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}

var _assignValue = assignValue;/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      _baseAssignValue(object, key, newValue);
    } else {
      _assignValue(object, key, newValue);
    }
  }
  return object;
}

var _copyObject = copyObject;/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

var _nativeKeysIn = nativeKeysIn;/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject_1(object)) {
    return _nativeKeysIn(object);
  }
  var isProto = _isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$2.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

var _baseKeysIn = baseKeysIn;/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
}

var keysIn_1 = keysIn;/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return _copyObject(value, keysIn_1(value));
}

var toPlainObject_1 = toPlainObject;/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = _safeGet(object, key),
      srcValue = _safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    _assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray_1(srcValue),
        isBuff = !isArr && isBuffer_1(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray_1(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray_1(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject_1(objValue)) {
        newValue = _copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = _cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = _cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject_1(srcValue) || isArguments_1(srcValue)) {
      newValue = objValue;
      if (isArguments_1(objValue)) {
        newValue = toPlainObject_1(objValue);
      }
      else if (!isObject_1(objValue) || isFunction_1(objValue)) {
        newValue = _initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  _assignMergeValue(object, key, newValue);
}

var _baseMergeDeep = baseMergeDeep;/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  _baseFor(source, function(srcValue, key) {
    stack || (stack = new _Stack);
    if (isObject_1(srcValue)) {
      _baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(_safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      _assignMergeValue(object, key, newValue);
    }
  }, keysIn_1);
}

var _baseMerge = baseMerge;/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

var identity_1 = identity;/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

var _apply = apply;/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return _apply(func, this, otherArgs);
  };
}

var _overRest = overRest;/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

var constant_1 = constant;/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !_defineProperty ? identity_1 : function(func, string) {
  return _defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant_1(string),
    'writable': true
  });
};

var _baseSetToString = baseSetToString;/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

var _shortOut = shortOut;/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = _shortOut(_baseSetToString);

var _setToString = setToString;/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return _setToString(_overRest(func, start, identity_1), func + '');
}

var _baseRest = baseRest;/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject_1(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike_1(object) && _isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq_1(object[index], value);
  }
  return false;
}

var _isIterateeCall = isIterateeCall;/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return _baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && _isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

var _createAssigner = createAssigner;/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = _createAssigner(function(object, source, srcIndex) {
  _baseMerge(object, source, srcIndex);
});

var merge_1 = merge;var SVGAnimatedString = function SVGAnimatedString() {};

if (typeof window !== 'undefined') {
  SVGAnimatedString = window.SVGAnimatedString;
}

function convertToArray(value) {
  if (typeof value === 'string') {
    value = value.split(' ');
  }

  return value;
}
/**
 * Add classes to an element.
 * This method checks to ensure that the classes don't already exist before adding them.
 * It uses el.className rather than classList in order to be IE friendly.
 * @param {object} el - The element to add the classes to.
 * @param {classes} string - List of space separated classes to be added to the element.
 */

function addClasses(el, classes) {
  var newClasses = convertToArray(classes);
  var classList;

  if (el.className instanceof SVGAnimatedString) {
    classList = convertToArray(el.className.baseVal);
  } else {
    classList = convertToArray(el.className);
  }

  newClasses.forEach(function (newClass) {
    if (classList.indexOf(newClass) === -1) {
      classList.push(newClass);
    }
  });

  if (el instanceof SVGElement) {
    el.setAttribute('class', classList.join(' '));
  } else {
    el.className = classList.join(' ');
  }
}
/**
 * Remove classes from an element.
 * It uses el.className rather than classList in order to be IE friendly.
 * @export
 * @param {any} el The element to remove the classes from.
 * @param {any} classes List of space separated classes to be removed from the element.
 */

function removeClasses(el, classes) {
  var newClasses = convertToArray(classes);
  var classList;

  if (el.className instanceof SVGAnimatedString) {
    classList = convertToArray(el.className.baseVal);
  } else {
    classList = convertToArray(el.className);
  }

  newClasses.forEach(function (newClass) {
    var index = classList.indexOf(newClass);

    if (index !== -1) {
      classList.splice(index, 1);
    }
  });

  if (el instanceof SVGElement) {
    el.setAttribute('class', classList.join(' '));
  } else {
    el.className = classList.join(' ');
  }
}
var supportsPassive = false;

if (typeof window !== 'undefined') {
  supportsPassive = false;

  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function get() {
        supportsPassive = true;
      }
    });
    window.addEventListener('test', null, opts);
  } catch (e) {}
}

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var DEFAULT_OPTIONS = {
  container: false,
  delay: 0,
  html: false,
  placement: 'top',
  title: '',
  template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  trigger: 'hover focus',
  offset: 0
};
var openTooltips = [];

var Tooltip = /*#__PURE__*/function () {
  /**
   * Create a new Tooltip.js instance
   * @class Tooltip
   * @param {HTMLElement} reference - The DOM node used as reference of the tooltip (it can be a jQuery element).
   * @param {Object} options
   * @param {String} options.placement=bottom
   *      Placement of the popper accepted values: `top(-start, -end), right(-start, -end), bottom(-start, -end),
   *      left(-start, -end)`
   * @param {HTMLElement|String|false} options.container=false - Append the tooltip to a specific element.
   * @param {Number|Object} options.delay=0
   *      Delay showing and hiding the tooltip (ms) - does not apply to manual trigger type.
   *      If a number is supplied, delay is applied to both hide/show.
   *      Object structure is: `{ show: 500, hide: 100 }`
   * @param {Boolean} options.html=false - Insert HTML into the tooltip. If false, the content will inserted with `innerText`.
   * @param {String|PlacementFunction} options.placement='top' - One of the allowed placements, or a function returning one of them.
   * @param {String} [options.template='<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>']
   *      Base HTML to used when creating the tooltip.
   *      The tooltip's `title` will be injected into the `.tooltip-inner` or `.tooltip__inner`.
   *      `.tooltip-arrow` or `.tooltip__arrow` will become the tooltip's arrow.
   *      The outermost wrapper element should have the `.tooltip` class.
   * @param {String|HTMLElement|TitleFunction} options.title='' - Default title value if `title` attribute isn't present.
   * @param {String} [options.trigger='hover focus']
   *      How tooltip is triggered - click, hover, focus, manual.
   *      You may pass multiple triggers; separate them with a space. `manual` cannot be combined with any other trigger.
   * @param {HTMLElement} options.boundariesElement
   *      The element used as boundaries for the tooltip. For more information refer to Popper.js'
   *      [boundariesElement docs](https://popper.js.org/popper-documentation.html)
   * @param {Number|String} options.offset=0 - Offset of the tooltip relative to its reference. For more information refer to Popper.js'
   *      [offset docs](https://popper.js.org/popper-documentation.html)
   * @param {Object} options.popperOptions={} - Popper options, will be passed directly to popper instance. For more information refer to Popper.js'
   *      [options docs](https://popper.js.org/popper-documentation.html)
   * @param {string} [options.ariaId] Id used for accessibility
   * @return {Object} instance - The generated tooltip instance
   */
  function Tooltip(_reference, _options) {
    var _this = this;

    _classCallCheck$1(this, Tooltip);

    _defineProperty$1(this, "_events", []);

    _defineProperty$1(this, "_setTooltipNodeEvent", function (evt, reference, delay, options) {
      var relatedreference = evt.relatedreference || evt.toElement || evt.relatedTarget;

      var callback = function callback(evt2) {
        var relatedreference2 = evt2.relatedreference || evt2.toElement || evt2.relatedTarget; // Remove event listener after call

        _this._tooltipNode.removeEventListener(evt.type, callback); // If the new reference is not the reference element


        if (!reference.contains(relatedreference2)) {
          // Schedule to hide tooltip
          _this._scheduleHide(reference, options.delay, options, evt2);
        }
      };

      if (_this._tooltipNode.contains(relatedreference)) {
        // listen to mouseleave on the tooltip element to be able to hide the tooltip
        _this._tooltipNode.addEventListener(evt.type, callback);

        return true;
      }

      return false;
    });

    // apply user options over default ones
    _options = _objectSpread$2(_objectSpread$2({}, DEFAULT_OPTIONS), _options);
    _reference.jquery && (_reference = _reference[0]);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this); // cache reference and options

    this.reference = _reference;
    this.options = _options; // set initial state

    this._isOpen = false;

    this._init();
  } //
  // Public methods
  //

  /**
   * Reveals an element's tooltip. This is considered a "manual" triggering of the tooltip.
   * Tooltips with zero-length titles are never displayed.
   * @method Tooltip#show
   * @memberof Tooltip
   */


  _createClass$1(Tooltip, [{
    key: "show",
    value: function show() {
      this._show(this.reference, this.options);
    }
    /**
     * Hides an element’s tooltip. This is considered a “manual” triggering of the tooltip.
     * @method Tooltip#hide
     * @memberof Tooltip
     */

  }, {
    key: "hide",
    value: function hide() {
      this._hide();
    }
    /**
     * Hides and destroys an element’s tooltip.
     * @method Tooltip#dispose
     * @memberof Tooltip
     */

  }, {
    key: "dispose",
    value: function dispose() {
      this._dispose();
    }
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.
     * @method Tooltip#toggle
     * @memberof Tooltip
     */

  }, {
    key: "toggle",
    value: function toggle() {
      if (this._isOpen) {
        return this.hide();
      } else {
        return this.show();
      }
    }
  }, {
    key: "setClasses",
    value: function setClasses(classes) {
      this._classes = classes;
    }
  }, {
    key: "setContent",
    value: function setContent(content) {
      this.options.title = content;

      if (this._tooltipNode) {
        this._setContent(content, this.options);
      }
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      var classesUpdated = false;
      var classes = options && options.classes || directive.options.defaultClass;

      if (!isEqual_1(this._classes, classes)) {
        this.setClasses(classes);
        classesUpdated = true;
      }

      options = getOptions(options);
      var needPopperUpdate = false;
      var needRestart = false;

      if (this.options.offset !== options.offset || this.options.placement !== options.placement) {
        needPopperUpdate = true;
      }

      if (this.options.template !== options.template || this.options.trigger !== options.trigger || this.options.container !== options.container || classesUpdated) {
        needRestart = true;
      }

      for (var key in options) {
        this.options[key] = options[key];
      }

      if (this._tooltipNode) {
        if (needRestart) {
          var isOpen = this._isOpen;
          this.dispose();

          this._init();

          if (isOpen) {
            this.show();
          }
        } else if (needPopperUpdate) {
          this.popperInstance.update();
        }
      }
    } //
    // Private methods
    //

  }, {
    key: "_init",
    value: function _init() {
      // get events list
      var events = typeof this.options.trigger === 'string' ? this.options.trigger.split(' ') : [];
      this._isDisposed = false;
      this._enableDocumentTouch = events.indexOf('manual') === -1;
      events = events.filter(function (trigger) {
        return ['click', 'hover', 'focus'].indexOf(trigger) !== -1;
      }); // set event listeners

      this._setEventListeners(this.reference, events, this.options); // title attribute


      this.$_originalTitle = this.reference.getAttribute('title');
      this.reference.removeAttribute('title');
      this.reference.setAttribute('data-original-title', this.$_originalTitle);
    }
    /**
     * Creates a new tooltip node
     * @memberof Tooltip
     * @private
     * @param {HTMLElement} reference
     * @param {String} template
     * @param {String|HTMLElement|TitleFunction} title
     * @param {Boolean} allowHtml
     * @return {HTMLelement} tooltipNode
     */

  }, {
    key: "_create",
    value: function _create(reference, template) {
      var _this2 = this;

      // create tooltip element
      var tooltipGenerator = window.document.createElement('div');
      tooltipGenerator.innerHTML = template.trim();
      var tooltipNode = tooltipGenerator.childNodes[0]; // add unique ID to our tooltip (needed for accessibility reasons)

      tooltipNode.id = this.options.ariaId || "tooltip_".concat(Math.random().toString(36).substr(2, 10)); // Initially hide the tooltip
      // The attribute will be switched in a next frame so
      // CSS transitions can play

      tooltipNode.setAttribute('aria-hidden', 'true');

      if (this.options.autoHide && this.options.trigger.indexOf('hover') !== -1) {
        tooltipNode.addEventListener('mouseenter', function (evt) {
          return _this2._scheduleHide(reference, _this2.options.delay, _this2.options, evt);
        });
        tooltipNode.addEventListener('click', function (evt) {
          return _this2._scheduleHide(reference, _this2.options.delay, _this2.options, evt);
        });
      } // return the generated tooltip node


      return tooltipNode;
    }
  }, {
    key: "_setContent",
    value: function _setContent(content, options) {
      var _this3 = this;

      this.asyncContent = false;

      this._applyContent(content, options).then(function () {
        if (!_this3.popperInstance) return;

        _this3.popperInstance.update();
      });
    }
  }, {
    key: "_applyContent",
    value: function _applyContent(title, options) {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        var allowHtml = options.html;
        var rootNode = _this4._tooltipNode;
        if (!rootNode) return;
        var titleNode = rootNode.querySelector(_this4.options.innerSelector);

        if (title.nodeType === 1) {
          // if title is a node, append it only if allowHtml is true
          if (allowHtml) {
            while (titleNode.firstChild) {
              titleNode.removeChild(titleNode.firstChild);
            }

            titleNode.appendChild(title);
          }
        } else if (typeof title === 'function') {
          // if title is a function, call it and set innerText or innerHtml depending by `allowHtml` value
          var result = title();

          if (result && typeof result.then === 'function') {
            _this4.asyncContent = true;
            options.loadingClass && addClasses(rootNode, options.loadingClass);

            if (options.loadingContent) {
              _this4._applyContent(options.loadingContent, options);
            }

            result.then(function (asyncResult) {
              options.loadingClass && removeClasses(rootNode, options.loadingClass);
              return _this4._applyContent(asyncResult, options);
            }).then(resolve).catch(reject);
          } else {
            _this4._applyContent(result, options).then(resolve).catch(reject);
          }

          return;
        } else {
          // if it's just a simple text, set innerText or innerHtml depending by `allowHtml` value
          allowHtml ? titleNode.innerHTML = title : titleNode.innerText = title;
        }

        resolve();
      });
    }
  }, {
    key: "_show",
    value: function _show(reference, options) {
      if (options && typeof options.container === 'string') {
        var container = document.querySelector(options.container);
        if (!container) return;
      }

      clearTimeout(this._disposeTimer);
      options = Object.assign({}, options);
      delete options.offset;
      var updateClasses = true;

      if (this._tooltipNode) {
        addClasses(this._tooltipNode, this._classes);
        updateClasses = false;
      }

      var result = this._ensureShown(reference, options);

      if (updateClasses && this._tooltipNode) {
        addClasses(this._tooltipNode, this._classes);
      }

      addClasses(reference, ['v-tooltip-open']);
      return result;
    }
  }, {
    key: "_ensureShown",
    value: function _ensureShown(reference, options) {
      var _this5 = this;

      // don't show if it's already visible
      if (this._isOpen) {
        return this;
      }

      this._isOpen = true;
      openTooltips.push(this); // if the tooltipNode already exists, just show it

      if (this._tooltipNode) {
        this._tooltipNode.style.display = '';

        this._tooltipNode.setAttribute('aria-hidden', 'false');

        this.popperInstance.enableEventListeners();
        this.popperInstance.update();

        if (this.asyncContent) {
          this._setContent(options.title, options);
        }

        return this;
      } // get title


      var title = reference.getAttribute('title') || options.title; // don't show tooltip if no title is defined

      if (!title) {
        return this;
      } // create tooltip node


      var tooltipNode = this._create(reference, options.template);

      this._tooltipNode = tooltipNode; // Add `aria-describedby` to our reference element for accessibility reasons

      reference.setAttribute('aria-describedby', tooltipNode.id); // append tooltip to container

      var container = this._findContainer(options.container, reference);

      this._append(tooltipNode, container);

      var popperOptions = _objectSpread$2(_objectSpread$2({}, options.popperOptions), {}, {
        placement: options.placement
      });

      popperOptions.modifiers = _objectSpread$2(_objectSpread$2({}, popperOptions.modifiers), {}, {
        arrow: {
          element: this.options.arrowSelector
        }
      });

      if (options.boundariesElement) {
        popperOptions.modifiers.preventOverflow = {
          boundariesElement: options.boundariesElement
        };
      }

      this.popperInstance = new Popper$1(reference, tooltipNode, popperOptions);

      this._setContent(title, options); // Fix position


      requestAnimationFrame(function () {
        if (!_this5._isDisposed && _this5.popperInstance) {
          _this5.popperInstance.update(); // Show the tooltip


          requestAnimationFrame(function () {
            if (!_this5._isDisposed) {
              _this5._isOpen && tooltipNode.setAttribute('aria-hidden', 'false');
            } else {
              _this5.dispose();
            }
          });
        } else {
          _this5.dispose();
        }
      });
      return this;
    }
  }, {
    key: "_noLongerOpen",
    value: function _noLongerOpen() {
      var index = openTooltips.indexOf(this);

      if (index !== -1) {
        openTooltips.splice(index, 1);
      }
    }
  }, {
    key: "_hide",
    value: function _hide()
    /* reference, options */
    {
      var _this6 = this;

      // don't hide if it's already hidden
      if (!this._isOpen) {
        return this;
      }

      this._isOpen = false;

      this._noLongerOpen(); // hide tooltipNode


      this._tooltipNode.style.display = 'none';

      this._tooltipNode.setAttribute('aria-hidden', 'true');

      if (this.popperInstance) {
        this.popperInstance.disableEventListeners();
      }

      clearTimeout(this._disposeTimer);
      var disposeTime = directive.options.disposeTimeout;

      if (disposeTime !== null) {
        this._disposeTimer = setTimeout(function () {
          if (_this6._tooltipNode) {
            _this6._tooltipNode.removeEventListener('mouseenter', _this6.hide);

            _this6._tooltipNode.removeEventListener('click', _this6.hide); // Don't remove popper instance, just the HTML element


            _this6._removeTooltipNode();
          }
        }, disposeTime);
      }

      removeClasses(this.reference, ['v-tooltip-open']);
      return this;
    }
  }, {
    key: "_removeTooltipNode",
    value: function _removeTooltipNode() {
      if (!this._tooltipNode) return;
      var parentNode = this._tooltipNode.parentNode;

      if (parentNode) {
        parentNode.removeChild(this._tooltipNode);
        this.reference.removeAttribute('aria-describedby');
      }

      this._tooltipNode = null;
    }
  }, {
    key: "_dispose",
    value: function _dispose() {
      var _this7 = this;

      this._isDisposed = true;
      this.reference.removeAttribute('data-original-title');

      if (this.$_originalTitle) {
        this.reference.setAttribute('title', this.$_originalTitle);
      } // remove event listeners first to prevent any unexpected behaviour


      this._events.forEach(function (_ref) {
        var func = _ref.func,
            event = _ref.event;

        _this7.reference.removeEventListener(event, func);
      });

      this._events = [];

      if (this._tooltipNode) {
        this._hide();

        this._tooltipNode.removeEventListener('mouseenter', this.hide);

        this._tooltipNode.removeEventListener('click', this.hide); // destroy instance


        this.popperInstance.destroy(); // destroy tooltipNode if removeOnDestroy is not set, as popperInstance.destroy() already removes the element

        if (!this.popperInstance.options.removeOnDestroy) {
          this._removeTooltipNode();
        }
      } else {
        this._noLongerOpen();
      }

      return this;
    }
  }, {
    key: "_findContainer",
    value: function _findContainer(container, reference) {
      // if container is a query, get the relative element
      if (typeof container === 'string') {
        container = window.document.querySelector(container);
      } else if (container === false) {
        // if container is `false`, set it to reference parent
        container = reference.parentNode;
      }

      return container;
    }
    /**
     * Append tooltip to container
     * @memberof Tooltip
     * @private
     * @param {HTMLElement} tooltip
     * @param {HTMLElement|String|false} container
     */

  }, {
    key: "_append",
    value: function _append(tooltipNode, container) {
      container.appendChild(tooltipNode);
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners(reference, events, options) {
      var _this8 = this;

      var directEvents = [];
      var oppositeEvents = [];
      events.forEach(function (event) {
        switch (event) {
          case 'hover':
            directEvents.push('mouseenter');
            oppositeEvents.push('mouseleave');
            if (_this8.options.hideOnTargetClick) oppositeEvents.push('click');
            break;

          case 'focus':
            directEvents.push('focus');
            oppositeEvents.push('blur');
            if (_this8.options.hideOnTargetClick) oppositeEvents.push('click');
            break;

          case 'click':
            directEvents.push('click');
            oppositeEvents.push('click');
            break;
        }
      }); // schedule show tooltip

      directEvents.forEach(function (event) {
        var func = function func(evt) {
          if (_this8._isOpen === true) {
            return;
          }

          evt.usedByTooltip = true;

          _this8._scheduleShow(reference, options.delay, options, evt);
        };

        _this8._events.push({
          event: event,
          func: func
        });

        reference.addEventListener(event, func);
      }); // schedule hide tooltip

      oppositeEvents.forEach(function (event) {
        var func = function func(evt) {
          if (evt.usedByTooltip === true) {
            return;
          }

          _this8._scheduleHide(reference, options.delay, options, evt);
        };

        _this8._events.push({
          event: event,
          func: func
        });

        reference.addEventListener(event, func);
      });
    }
  }, {
    key: "_onDocumentTouch",
    value: function _onDocumentTouch(event) {
      if (this._enableDocumentTouch) {
        this._scheduleHide(this.reference, this.options.delay, this.options, event);
      }
    }
  }, {
    key: "_scheduleShow",
    value: function _scheduleShow(reference, delay, options
    /*, evt */
    ) {
      var _this9 = this;

      // defaults to 0
      var computedDelay = delay && delay.show || delay || 0;
      clearTimeout(this._scheduleTimer);
      this._scheduleTimer = window.setTimeout(function () {
        return _this9._show(reference, options);
      }, computedDelay);
    }
  }, {
    key: "_scheduleHide",
    value: function _scheduleHide(reference, delay, options, evt) {
      var _this10 = this;

      // defaults to 0
      var computedDelay = delay && delay.hide || delay || 0;
      clearTimeout(this._scheduleTimer);
      this._scheduleTimer = window.setTimeout(function () {
        if (_this10._isOpen === false) {
          return;
        }

        if (!_this10._tooltipNode.ownerDocument.body.contains(_this10._tooltipNode)) {
          return;
        } // if we are hiding because of a mouseleave, we must check that the new
        // reference isn't the tooltip, because in this case we don't want to hide it


        if (evt.type === 'mouseleave') {
          var isSet = _this10._setTooltipNodeEvent(evt, reference, delay, options); // if we set the new event, don't hide the tooltip yet
          // the new event will take care to hide it if necessary


          if (isSet) {
            return;
          }
        }

        _this10._hide(reference, options);
      }, computedDelay);
    }
  }]);

  return Tooltip;
}(); // Hide tooltips on touch devices

if (typeof document !== 'undefined') {
  document.addEventListener('touchstart', function (event) {
    for (var i = 0; i < openTooltips.length; i++) {
      openTooltips[i]._onDocumentTouch(event);
    }
  }, supportsPassive ? {
    passive: true,
    capture: true
  } : true);
}
/**
 * Placement function, its context is the Tooltip instance.
 * @memberof Tooltip
 * @callback PlacementFunction
 * @param {HTMLElement} tooltip - tooltip DOM node.
 * @param {HTMLElement} reference - reference DOM node.
 * @return {String} placement - One of the allowed placement options.
 */

/**
 * Title function, its context is the Tooltip instance.
 * @memberof Tooltip
 * @callback TitleFunction
 * @return {String} placement - The desired title.
 */

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var state = {
  enabled: true
};
var positions = ['top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end'];
var defaultOptions = {
  // Default tooltip placement relative to target element
  defaultPlacement: 'top',
  // Default CSS classes applied to the tooltip element
  defaultClass: 'vue-tooltip-theme',
  // Default CSS classes applied to the target element of the tooltip
  defaultTargetClass: 'has-tooltip',
  // Is the content HTML by default?
  defaultHtml: true,
  // Default HTML template of the tooltip element
  // It must include `tooltip-arrow` & `tooltip-inner` CSS classes (can be configured, see below)
  // Change if the classes conflict with other libraries (for example bootstrap)
  defaultTemplate: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  // Selector used to get the arrow element in the tooltip template
  defaultArrowSelector: '.tooltip-arrow, .tooltip__arrow',
  // Selector used to get the inner content element in the tooltip template
  defaultInnerSelector: '.tooltip-inner, .tooltip__inner',
  // Delay (ms)
  defaultDelay: 0,
  // Default events that trigger the tooltip
  defaultTrigger: 'hover focus',
  // Default position offset (px)
  defaultOffset: 0,
  // Default container where the tooltip will be appended
  defaultContainer: 'body',
  defaultBoundariesElement: undefined,
  defaultPopperOptions: {},
  // Class added when content is loading
  defaultLoadingClass: 'tooltip-loading',
  // Displayed when tooltip content is loading
  defaultLoadingContent: '...',
  // Hide on mouseover tooltip
  autoHide: true,
  // Close tooltip on click on tooltip target?
  defaultHideOnTargetClick: true,
  // Auto destroy tooltip DOM nodes (ms)
  disposeTimeout: 5000,
  // Options for popover
  popover: {
    defaultPlacement: 'bottom',
    // Use the `popoverClass` prop for theming
    defaultClass: 'vue-popover-theme',
    // Base class (change if conflicts with other libraries)
    defaultBaseClass: 'tooltip popover',
    // Wrapper class (contains arrow and inner)
    defaultWrapperClass: 'wrapper',
    // Inner content class
    defaultInnerClass: 'tooltip-inner popover-inner',
    // Arrow class
    defaultArrowClass: 'tooltip-arrow popover-arrow',
    // Class added when popover is open
    defaultOpenClass: 'open',
    defaultDelay: 0,
    defaultTrigger: 'click',
    defaultOffset: 0,
    defaultContainer: 'body',
    defaultBoundariesElement: undefined,
    defaultPopperOptions: {},
    // Hides if clicked outside of popover
    defaultAutoHide: true,
    // Update popper on content resize
    defaultHandleResize: true
  }
};
function getOptions(options) {
  var result = {
    placement: typeof options.placement !== 'undefined' ? options.placement : directive.options.defaultPlacement,
    delay: typeof options.delay !== 'undefined' ? options.delay : directive.options.defaultDelay,
    html: typeof options.html !== 'undefined' ? options.html : directive.options.defaultHtml,
    template: typeof options.template !== 'undefined' ? options.template : directive.options.defaultTemplate,
    arrowSelector: typeof options.arrowSelector !== 'undefined' ? options.arrowSelector : directive.options.defaultArrowSelector,
    innerSelector: typeof options.innerSelector !== 'undefined' ? options.innerSelector : directive.options.defaultInnerSelector,
    trigger: typeof options.trigger !== 'undefined' ? options.trigger : directive.options.defaultTrigger,
    offset: typeof options.offset !== 'undefined' ? options.offset : directive.options.defaultOffset,
    container: typeof options.container !== 'undefined' ? options.container : directive.options.defaultContainer,
    boundariesElement: typeof options.boundariesElement !== 'undefined' ? options.boundariesElement : directive.options.defaultBoundariesElement,
    autoHide: typeof options.autoHide !== 'undefined' ? options.autoHide : directive.options.autoHide,
    hideOnTargetClick: typeof options.hideOnTargetClick !== 'undefined' ? options.hideOnTargetClick : directive.options.defaultHideOnTargetClick,
    loadingClass: typeof options.loadingClass !== 'undefined' ? options.loadingClass : directive.options.defaultLoadingClass,
    loadingContent: typeof options.loadingContent !== 'undefined' ? options.loadingContent : directive.options.defaultLoadingContent,
    popperOptions: _objectSpread$1({}, typeof options.popperOptions !== 'undefined' ? options.popperOptions : directive.options.defaultPopperOptions)
  };

  if (result.offset) {
    var typeofOffset = _typeof$1(result.offset);

    var offset = result.offset; // One value -> switch

    if (typeofOffset === 'number' || typeofOffset === 'string' && offset.indexOf(',') === -1) {
      offset = "0, ".concat(offset);
    }

    if (!result.popperOptions.modifiers) {
      result.popperOptions.modifiers = {};
    }

    result.popperOptions.modifiers.offset = {
      offset: offset
    };
  }

  if (result.trigger && result.trigger.indexOf('click') !== -1) {
    result.hideOnTargetClick = false;
  }

  return result;
}
function getPlacement(value, modifiers) {
  var placement = value.placement;

  for (var i = 0; i < positions.length; i++) {
    var pos = positions[i];

    if (modifiers[pos]) {
      placement = pos;
    }
  }

  return placement;
}
function getContent(value) {
  var type = _typeof$1(value);

  if (type === 'string') {
    return value;
  } else if (value && type === 'object') {
    return value.content;
  } else {
    return false;
  }
}
function createTooltip(el, value) {
  var modifiers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var content = getContent(value);
  var classes = typeof value.classes !== 'undefined' ? value.classes : directive.options.defaultClass;

  var opts = _objectSpread$1({
    title: content
  }, getOptions(_objectSpread$1(_objectSpread$1({}, _typeof$1(value) === 'object' ? value : {}), {}, {
    placement: getPlacement(value, modifiers)
  })));

  var tooltip = el._tooltip = new Tooltip(el, opts);
  tooltip.setClasses(classes);
  tooltip._vueEl = el; // Class on target

  var targetClasses = typeof value.targetClasses !== 'undefined' ? value.targetClasses : directive.options.defaultTargetClass;
  el._tooltipTargetClasses = targetClasses;
  addClasses(el, targetClasses);
  return tooltip;
}
function destroyTooltip(el) {
  if (el._tooltip) {
    el._tooltip.dispose();

    delete el._tooltip;
    delete el._tooltipOldShow;
  }

  if (el._tooltipTargetClasses) {
    removeClasses(el, el._tooltipTargetClasses);
    delete el._tooltipTargetClasses;
  }
}
function bind(el, _ref) {
  var value = _ref.value;
      _ref.oldValue;
      var modifiers = _ref.modifiers;
  var content = getContent(value);

  if (!content || !state.enabled) {
    destroyTooltip(el);
  } else {
    var tooltip;

    if (el._tooltip) {
      tooltip = el._tooltip; // Content

      tooltip.setContent(content); // Options

      tooltip.setOptions(_objectSpread$1(_objectSpread$1({}, value), {}, {
        placement: getPlacement(value, modifiers)
      }));
    } else {
      tooltip = createTooltip(el, value, modifiers);
    } // Manual show


    if (typeof value.show !== 'undefined' && value.show !== el._tooltipOldShow) {
      el._tooltipOldShow = value.show;
      value.show ? tooltip.show() : tooltip.hide();
    }
  }
}
var directive = {
  options: defaultOptions,
  bind: bind,
  update: bind,
  unbind: function unbind(el) {
    destroyTooltip(el);
  }
};

function addListeners(el) {
  el.addEventListener('click', onClick);
  el.addEventListener('touchstart', onTouchStart, supportsPassive ? {
    passive: true
  } : false);
}

function removeListeners(el) {
  el.removeEventListener('click', onClick);
  el.removeEventListener('touchstart', onTouchStart);
  el.removeEventListener('touchend', onTouchEnd);
  el.removeEventListener('touchcancel', onTouchCancel);
}

function onClick(event) {
  var el = event.currentTarget;
  event.closePopover = !el.$_vclosepopover_touch;
  event.closeAllPopover = el.$_closePopoverModifiers && !!el.$_closePopoverModifiers.all;
}

function onTouchStart(event) {
  if (event.changedTouches.length === 1) {
    var el = event.currentTarget;
    el.$_vclosepopover_touch = true;
    var touch = event.changedTouches[0];
    el.$_vclosepopover_touchPoint = touch;
    el.addEventListener('touchend', onTouchEnd);
    el.addEventListener('touchcancel', onTouchCancel);
  }
}

function onTouchEnd(event) {
  var el = event.currentTarget;
  el.$_vclosepopover_touch = false;

  if (event.changedTouches.length === 1) {
    var touch = event.changedTouches[0];
    var firstTouch = el.$_vclosepopover_touchPoint;
    event.closePopover = Math.abs(touch.screenY - firstTouch.screenY) < 20 && Math.abs(touch.screenX - firstTouch.screenX) < 20;
    event.closeAllPopover = el.$_closePopoverModifiers && !!el.$_closePopoverModifiers.all;
  }
}

function onTouchCancel(event) {
  var el = event.currentTarget;
  el.$_vclosepopover_touch = false;
}

var vclosepopover = {
  bind: function bind(el, _ref) {
    var value = _ref.value,
        modifiers = _ref.modifiers;
    el.$_closePopoverModifiers = modifiers;

    if (typeof value === 'undefined' || value) {
      addListeners(el);
    }
  },
  update: function update(el, _ref2) {
    var value = _ref2.value,
        oldValue = _ref2.oldValue,
        modifiers = _ref2.modifiers;
    el.$_closePopoverModifiers = modifiers;

    if (value !== oldValue) {
      if (typeof value === 'undefined' || value) {
        addListeners(el);
      } else {
        removeListeners(el);
      }
    }
  },
  unbind: function unbind(el) {
    removeListeners(el);
  }
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function getDefault(key) {
  var value = directive.options.popover[key];

  if (typeof value === 'undefined') {
    return directive.options[key];
  }

  return value;
}

var isIOS = false;

if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
  isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

var openPopovers = [];

var Element = function Element() {};

if (typeof window !== 'undefined') {
  Element = window.Element;
}

var script$b = {
  name: 'VPopover',
  components: {
    ResizeObserver: __vue_component__$i
  },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      default: function _default() {
        return getDefault('defaultPlacement');
      }
    },
    delay: {
      type: [String, Number, Object],
      default: function _default() {
        return getDefault('defaultDelay');
      }
    },
    offset: {
      type: [String, Number],
      default: function _default() {
        return getDefault('defaultOffset');
      }
    },
    trigger: {
      type: String,
      default: function _default() {
        return getDefault('defaultTrigger');
      }
    },
    container: {
      type: [String, Object, Element, Boolean],
      default: function _default() {
        return getDefault('defaultContainer');
      }
    },
    boundariesElement: {
      type: [String, Element],
      default: function _default() {
        return getDefault('defaultBoundariesElement');
      }
    },
    popperOptions: {
      type: Object,
      default: function _default() {
        return getDefault('defaultPopperOptions');
      }
    },
    popoverClass: {
      type: [String, Array],
      default: function _default() {
        return getDefault('defaultClass');
      }
    },
    popoverBaseClass: {
      type: [String, Array],
      default: function _default() {
        return directive.options.popover.defaultBaseClass;
      }
    },
    popoverInnerClass: {
      type: [String, Array],
      default: function _default() {
        return directive.options.popover.defaultInnerClass;
      }
    },
    popoverWrapperClass: {
      type: [String, Array],
      default: function _default() {
        return directive.options.popover.defaultWrapperClass;
      }
    },
    popoverArrowClass: {
      type: [String, Array],
      default: function _default() {
        return directive.options.popover.defaultArrowClass;
      }
    },
    autoHide: {
      type: Boolean,
      default: function _default() {
        return directive.options.popover.defaultAutoHide;
      }
    },
    handleResize: {
      type: Boolean,
      default: function _default() {
        return directive.options.popover.defaultHandleResize;
      }
    },
    openGroup: {
      type: String,
      default: null
    },
    openClass: {
      type: [String, Array],
      default: function _default() {
        return directive.options.popover.defaultOpenClass;
      }
    },
    ariaId: {
      default: null
    }
  },
  data: function data() {
    return {
      isOpen: false,
      id: Math.random().toString(36).substr(2, 10)
    };
  },
  computed: {
    cssClass: function cssClass() {
      return _defineProperty$1({}, this.openClass, this.isOpen);
    },
    popoverId: function popoverId() {
      return "popover_".concat(this.ariaId != null ? this.ariaId : this.id);
    }
  },
  watch: {
    open: function open(val) {
      if (val) {
        this.show();
      } else {
        this.hide();
      }
    },
    disabled: function disabled(val, oldVal) {
      if (val !== oldVal) {
        if (val) {
          this.hide();
        } else if (this.open) {
          this.show();
        }
      }
    },
    container: function container(val) {
      if (this.isOpen && this.popperInstance) {
        var popoverNode = this.$refs.popover;
        var reference = this.$refs.trigger;
        var container = this.$_findContainer(this.container, reference);

        if (!container) {
          console.warn('No container for popover', this);
          return;
        }

        container.appendChild(popoverNode);
        this.popperInstance.scheduleUpdate();
      }
    },
    trigger: function trigger(val) {
      this.$_removeEventListeners();
      this.$_addEventListeners();
    },
    placement: function placement(val) {
      var _this = this;

      this.$_updatePopper(function () {
        _this.popperInstance.options.placement = val;
      });
    },
    offset: '$_restartPopper',
    boundariesElement: '$_restartPopper',
    popperOptions: {
      handler: '$_restartPopper',
      deep: true
    }
  },
  created: function created() {
    this.$_isDisposed = false;
    this.$_mounted = false;
    this.$_events = [];
    this.$_preventOpen = false;
  },
  mounted: function mounted() {
    var popoverNode = this.$refs.popover;
    popoverNode.parentNode && popoverNode.parentNode.removeChild(popoverNode);
    this.$_init();

    if (this.open) {
      this.show();
    }
  },
  deactivated: function deactivated() {
    this.hide();
  },
  beforeDestroy: function beforeDestroy() {
    this.dispose();
  },
  methods: {
    show: function show() {
      var _this2 = this;

      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          event = _ref2.event;
          _ref2.skipDelay;
          var _ref2$force = _ref2.force,
          force = _ref2$force === void 0 ? false : _ref2$force;

      if (force || !this.disabled) {
        this.$_scheduleShow(event);
        this.$emit('show');
      }

      this.$emit('update:open', true);
      this.$_beingShowed = true;
      requestAnimationFrame(function () {
        _this2.$_beingShowed = false;
      });
    },
    hide: function hide() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          event = _ref3.event;
          _ref3.skipDelay;

      this.$_scheduleHide(event);
      this.$emit('hide');
      this.$emit('update:open', false);
    },
    dispose: function dispose() {
      this.$_isDisposed = true;
      this.$_removeEventListeners();
      this.hide({
        skipDelay: true
      });

      if (this.popperInstance) {
        this.popperInstance.destroy(); // destroy tooltipNode if removeOnDestroy is not set, as popperInstance.destroy() already removes the element

        if (!this.popperInstance.options.removeOnDestroy) {
          var popoverNode = this.$refs.popover;
          popoverNode.parentNode && popoverNode.parentNode.removeChild(popoverNode);
        }
      }

      this.$_mounted = false;
      this.popperInstance = null;
      this.isOpen = false;
      this.$emit('dispose');
    },
    $_init: function $_init() {
      if (this.trigger.indexOf('manual') === -1) {
        this.$_addEventListeners();
      }
    },
    $_show: function $_show() {
      var _this3 = this;

      var reference = this.$refs.trigger;
      var popoverNode = this.$refs.popover;
      clearTimeout(this.$_disposeTimer); // Already open

      if (this.isOpen) {
        return;
      } // Popper is already initialized


      if (this.popperInstance) {
        this.isOpen = true;
        this.popperInstance.enableEventListeners();
        this.popperInstance.scheduleUpdate();
      }

      if (!this.$_mounted) {
        var container = this.$_findContainer(this.container, reference);

        if (!container) {
          console.warn('No container for popover', this);
          return;
        }

        container.appendChild(popoverNode);
        this.$_mounted = true;
        this.isOpen = false;

        if (this.popperInstance) {
          requestAnimationFrame(function () {
            if (!_this3.hidden) {
              _this3.isOpen = true;
            }
          });
        }
      }

      if (!this.popperInstance) {
        var popperOptions = _objectSpread(_objectSpread({}, this.popperOptions), {}, {
          placement: this.placement
        });

        popperOptions.modifiers = _objectSpread(_objectSpread({}, popperOptions.modifiers), {}, {
          arrow: _objectSpread(_objectSpread({}, popperOptions.modifiers && popperOptions.modifiers.arrow), {}, {
            element: this.$refs.arrow
          })
        });

        if (this.offset) {
          var offset = this.$_getOffset();
          popperOptions.modifiers.offset = _objectSpread(_objectSpread({}, popperOptions.modifiers && popperOptions.modifiers.offset), {}, {
            offset: offset
          });
        }

        if (this.boundariesElement) {
          popperOptions.modifiers.preventOverflow = _objectSpread(_objectSpread({}, popperOptions.modifiers && popperOptions.modifiers.preventOverflow), {}, {
            boundariesElement: this.boundariesElement
          });
        }

        this.popperInstance = new Popper$1(reference, popoverNode, popperOptions); // Fix position

        requestAnimationFrame(function () {
          if (_this3.hidden) {
            _this3.hidden = false;

            _this3.$_hide();

            return;
          }

          if (!_this3.$_isDisposed && _this3.popperInstance) {
            _this3.popperInstance.scheduleUpdate(); // Show the tooltip


            requestAnimationFrame(function () {
              if (_this3.hidden) {
                _this3.hidden = false;

                _this3.$_hide();

                return;
              }

              if (!_this3.$_isDisposed) {
                _this3.isOpen = true;
              } else {
                _this3.dispose();
              }
            });
          } else {
            _this3.dispose();
          }
        });
      }

      var openGroup = this.openGroup;

      if (openGroup) {
        var popover;

        for (var i = 0; i < openPopovers.length; i++) {
          popover = openPopovers[i];

          if (popover.openGroup !== openGroup) {
            popover.hide();
            popover.$emit('close-group');
          }
        }
      }

      openPopovers.push(this);
      this.$emit('apply-show');
    },
    $_hide: function $_hide() {
      var _this4 = this;

      // Already hidden
      if (!this.isOpen) {
        return;
      }

      var index = openPopovers.indexOf(this);

      if (index !== -1) {
        openPopovers.splice(index, 1);
      }

      this.isOpen = false;

      if (this.popperInstance) {
        this.popperInstance.disableEventListeners();
      }

      clearTimeout(this.$_disposeTimer);
      var disposeTime = directive.options.popover.disposeTimeout || directive.options.disposeTimeout;

      if (disposeTime !== null) {
        this.$_disposeTimer = setTimeout(function () {
          var popoverNode = _this4.$refs.popover;

          if (popoverNode) {
            // Don't remove popper instance, just the HTML element
            popoverNode.parentNode && popoverNode.parentNode.removeChild(popoverNode);
            _this4.$_mounted = false;
          }
        }, disposeTime);
      }

      this.$emit('apply-hide');
    },
    $_findContainer: function $_findContainer(container, reference) {
      // if container is a query, get the relative element
      if (typeof container === 'string') {
        container = window.document.querySelector(container);
      } else if (container === false) {
        // if container is `false`, set it to reference parent
        container = reference.parentNode;
      }

      return container;
    },
    $_getOffset: function $_getOffset() {
      var typeofOffset = _typeof$1(this.offset);

      var offset = this.offset; // One value -> switch

      if (typeofOffset === 'number' || typeofOffset === 'string' && offset.indexOf(',') === -1) {
        offset = "0, ".concat(offset);
      }

      return offset;
    },
    $_addEventListeners: function $_addEventListeners() {
      var _this5 = this;

      var reference = this.$refs.trigger;
      var directEvents = [];
      var oppositeEvents = [];
      var events = typeof this.trigger === 'string' ? this.trigger.split(' ').filter(function (trigger) {
        return ['click', 'hover', 'focus'].indexOf(trigger) !== -1;
      }) : [];
      events.forEach(function (event) {
        switch (event) {
          case 'hover':
            directEvents.push('mouseenter');
            oppositeEvents.push('mouseleave');
            break;

          case 'focus':
            directEvents.push('focus');
            oppositeEvents.push('blur');
            break;

          case 'click':
            directEvents.push('click');
            oppositeEvents.push('click');
            break;
        }
      }); // schedule show tooltip

      directEvents.forEach(function (event) {
        var func = function func(event) {
          if (_this5.isOpen) {
            return;
          }

          event.usedByTooltip = true;
          !_this5.$_preventOpen && _this5.show({
            event: event
          });
          _this5.hidden = false;
        };

        _this5.$_events.push({
          event: event,
          func: func
        });

        reference.addEventListener(event, func);
      }); // schedule hide tooltip

      oppositeEvents.forEach(function (event) {
        var func = function func(event) {
          if (event.usedByTooltip) {
            return;
          }

          _this5.hide({
            event: event
          });

          _this5.hidden = true;
        };

        _this5.$_events.push({
          event: event,
          func: func
        });

        reference.addEventListener(event, func);
      });
    },
    $_scheduleShow: function $_scheduleShow() {
      var skipDelay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      clearTimeout(this.$_scheduleTimer);

      if (skipDelay) {
        this.$_show();
      } else {
        // defaults to 0
        var computedDelay = parseInt(this.delay && this.delay.show || this.delay || 0);
        this.$_scheduleTimer = setTimeout(this.$_show.bind(this), computedDelay);
      }
    },
    $_scheduleHide: function $_scheduleHide() {
      var _this6 = this;

      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var skipDelay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      clearTimeout(this.$_scheduleTimer);

      if (skipDelay) {
        this.$_hide();
      } else {
        // defaults to 0
        var computedDelay = parseInt(this.delay && this.delay.hide || this.delay || 0);
        this.$_scheduleTimer = setTimeout(function () {
          if (!_this6.isOpen) {
            return;
          } // if we are hiding because of a mouseleave, we must check that the new
          // reference isn't the tooltip, because in this case we don't want to hide it


          if (event && event.type === 'mouseleave') {
            var isSet = _this6.$_setTooltipNodeEvent(event); // if we set the new event, don't hide the tooltip yet
            // the new event will take care to hide it if necessary


            if (isSet) {
              return;
            }
          }

          _this6.$_hide();
        }, computedDelay);
      }
    },
    $_setTooltipNodeEvent: function $_setTooltipNodeEvent(event) {
      var _this7 = this;

      var reference = this.$refs.trigger;
      var popoverNode = this.$refs.popover;
      var relatedreference = event.relatedreference || event.toElement || event.relatedTarget;

      var callback = function callback(event2) {
        var relatedreference2 = event2.relatedreference || event2.toElement || event2.relatedTarget; // Remove event listener after call

        popoverNode.removeEventListener(event.type, callback); // If the new reference is not the reference element

        if (!reference.contains(relatedreference2)) {
          // Schedule to hide tooltip
          _this7.hide({
            event: event2
          });
        }
      };

      if (popoverNode.contains(relatedreference)) {
        // listen to mouseleave on the tooltip element to be able to hide the tooltip
        popoverNode.addEventListener(event.type, callback);
        return true;
      }

      return false;
    },
    $_removeEventListeners: function $_removeEventListeners() {
      var reference = this.$refs.trigger;
      this.$_events.forEach(function (_ref4) {
        var func = _ref4.func,
            event = _ref4.event;
        reference.removeEventListener(event, func);
      });
      this.$_events = [];
    },
    $_updatePopper: function $_updatePopper(cb) {
      if (this.popperInstance) {
        cb();
        if (this.isOpen) this.popperInstance.scheduleUpdate();
      }
    },
    $_restartPopper: function $_restartPopper() {
      if (this.popperInstance) {
        var isOpen = this.isOpen;
        this.dispose();
        this.$_isDisposed = false;
        this.$_init();

        if (isOpen) {
          this.show({
            skipDelay: true,
            force: true
          });
        }
      }
    },
    $_handleGlobalClose: function $_handleGlobalClose(event) {
      var _this8 = this;

      var touch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (this.$_beingShowed) return;
      this.hide({
        event: event
      });

      if (event.closePopover) {
        this.$emit('close-directive');
      } else {
        this.$emit('auto-hide');
      }

      if (touch) {
        this.$_preventOpen = true;
        setTimeout(function () {
          _this8.$_preventOpen = false;
        }, 300);
      }
    },
    $_handleResize: function $_handleResize() {
      if (this.isOpen && this.popperInstance) {
        this.popperInstance.scheduleUpdate();
        this.$emit('resize');
      }
    }
  }
};

if (typeof document !== 'undefined' && typeof window !== 'undefined') {
  if (isIOS) {
    document.addEventListener('touchend', handleGlobalTouchend, supportsPassive ? {
      passive: true,
      capture: true
    } : true);
  } else {
    window.addEventListener('click', handleGlobalClick, true);
  }
}

function handleGlobalClick(event) {
  handleGlobalClose(event);
}

function handleGlobalTouchend(event) {
  handleGlobalClose(event, true);
}

function handleGlobalClose(event) {
  var touch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var _loop = function _loop(i) {
    var popover = openPopovers[i];

    if (popover.$refs.popover) {
      var contains = popover.$refs.popover.contains(event.target);
      requestAnimationFrame(function () {
        if (event.closeAllPopover || event.closePopover && contains || popover.autoHide && !contains) {
          popover.$_handleGlobalClose(event, touch);
        }
      });
    }
  };

  // Delay so that close directive has time to set values
  for (var i = 0; i < openPopovers.length; i++) {
    _loop(i);
  }
}

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
}

/* script */
var __vue_script__$b = script$b;
/* template */

var __vue_render__$b = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "v-popover",
    class: _vm.cssClass
  }, [_c("div", {
    ref: "trigger",
    staticClass: "trigger",
    staticStyle: {
      display: "inline-block"
    },
    attrs: {
      "aria-describedby": _vm.isOpen ? _vm.popoverId : undefined,
      tabindex: _vm.trigger.indexOf("focus") !== -1 ? 0 : undefined
    }
  }, [_vm._t("default")], 2), _vm._v(" "), _c("div", {
    ref: "popover",
    class: [_vm.popoverBaseClass, _vm.popoverClass, _vm.cssClass],
    style: {
      visibility: _vm.isOpen ? "visible" : "hidden"
    },
    attrs: {
      id: _vm.popoverId,
      "aria-hidden": _vm.isOpen ? "false" : "true",
      tabindex: _vm.autoHide ? 0 : undefined
    },
    on: {
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) {
          return null;
        }

        _vm.autoHide && _vm.hide();
      }
    }
  }, [_c("div", {
    class: _vm.popoverWrapperClass
  }, [_c("div", {
    ref: "inner",
    class: _vm.popoverInnerClass,
    staticStyle: {
      position: "relative"
    }
  }, [_c("div", [_vm._t("popover", null, {
    isOpen: _vm.isOpen
  })], 2), _vm._v(" "), _vm.handleResize ? _c("ResizeObserver", {
    on: {
      notify: _vm.$_handleResize
    }
  }) : _vm._e()], 1), _vm._v(" "), _c("div", {
    ref: "arrow",
    class: _vm.popoverArrowClass
  })])])]);
};

var __vue_staticRenderFns__$b = [];
__vue_render__$b._withStripped = true;
/* style */

var __vue_inject_styles__$b = undefined;
/* scoped */

var __vue_scope_id__$b = undefined;
/* module identifier */

var __vue_module_identifier__$9 = undefined;
/* functional template */

var __vue_is_functional_template__$b = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$h = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$b,
  staticRenderFns: __vue_staticRenderFns__$b
}, __vue_inject_styles__$b, __vue_script__$b, __vue_scope_id__$b, __vue_is_functional_template__$b, __vue_module_identifier__$9, false, undefined, undefined, undefined);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".resize-observer[data-v-8859cc6c]{position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;border:none;background-color:transparent;pointer-events:none;display:block;overflow:hidden;opacity:0}.resize-observer[data-v-8859cc6c] object{display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1}";
styleInject(css_248z);

function install$1(Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (install$1.installed) return;
  install$1.installed = true;
  var finalOptions = {};
  merge_1(finalOptions, defaultOptions, options);
  plugin.options = finalOptions;
  directive.options = finalOptions;
  Vue.directive('tooltip', directive);
  Vue.directive('close-popover', vclosepopover);
  Vue.component('VPopover', __vue_component__$h);
}
var VPopover = __vue_component__$h;
var plugin = {
  install: install$1,

  get enabled() {
    return state.enabled;
  },

  set enabled(value) {
    state.enabled = value;
  }

}; // Auto-install

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}//
var script$a = {
  name: 'au-dropdown-content-button',
  components: {
    VPopover: VPopover
  },
  props: {
    label: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    large: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      isOpened: false
    };
  },
  methods: {
    hideContent: function hideContent() {
      this.isOpened = false;
    }
  }
};/* script */
var __vue_script__$a = script$a;
/* template */

var __vue_render__$a = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('v-popover', {
    attrs: {
      "open": _vm.isOpened,
      "popover-class": "dropdown-content-button__popover",
      "popover-arrow-class": "none",
      "trigger": "manual",
      "placement": "bottom-start"
    },
    on: {
      "hide": function hide($event) {
        _vm.isOpened = false;
      }
    }
  }, [_c('au-button', {
    attrs: {
      "label": _vm.label,
      "large": _vm.large,
      "icon": _vm.icon
    },
    on: {
      "click": function click($event) {
        _vm.isOpened = true;
      }
    }
  }), _vm._v(" "), _c('template', {
    slot: "popover"
  }, [_vm._t("default", null, {
    "hide": _vm.hideContent
  })], 2)], 2);
};

var __vue_staticRenderFns__$a = [];
/* style */

var __vue_inject_styles__$a = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-9b0c912e_0", {
    source: ".dropdown-content-button__container[data-v-9b0c912e]{width:240px}",
    map: undefined,
    media: undefined
  }), inject("data-v-9b0c912e_1", {
    source: ".dropdown-content-button__popover{min-width:240px;max-width:240px;margin-left:130px;box-shadow:0 11px 29px rgba(11,66,136,.2),0 -1px 9px rgba(11,66,136,.07);background-color:#fff;border-radius:6px}.dropdown-content-button__popover .wrapper{margin:0 0 0 -8px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$a = "data-v-9b0c912e";
/* module identifier */

var __vue_module_identifier__$8 = "data-v-9b0c912e";
/* functional template */

var __vue_is_functional_template__$a = false;
/* style inject shadow dom */

var __vue_component__$f = /*#__PURE__*/normalizeComponent$2({
  render: __vue_render__$a,
  staticRenderFns: __vue_staticRenderFns__$a
}, __vue_inject_styles__$a, __vue_script__$a, __vue_scope_id__$a, __vue_is_functional_template__$a, __vue_module_identifier__$8, false, undefined, createInjectorSSR, undefined);

var __vue_component__$g = __vue_component__$f;//
//
//
//
//
//
//
//
//
var script$9 = {
  name: 'au-tooltip',
  props: {
    position: {
      type: String,
      default: null,
      validator: function validator(value) {
        return ['top', 'left', 'right', 'bottom'].includes(value);
      }
    },
    label: {
      type: String,
      default: null
    }
  }
};/* script */
var __vue_script__$9 = script$9;
/* template */

var __vue_render__$9 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "au-tooltip",
    class: [_vm.position]
  }, [_vm._ssrNode(_vm._ssrEscape("\n  " + _vm._s(_vm.label) + "\n"))]);
};

var __vue_staticRenderFns__$9 = [];
/* style */

var __vue_inject_styles__$9 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-5df85257_0", {
    source: ".tooltip-show{position:relative}.tooltip-show:hover .au-tooltip{opacity:1;visibility:visible}.au-tooltip{position:absolute;display:block;font-size:12px;line-height:1.2;letter-spacing:.2px;font-weight:400;font-style:normal;width:275px;color:#fff;padding:8px 8px;border-radius:6px;background-color:rgba(42,63,100,.9);text-align:left;z-index:10;opacity:0;visibility:hidden;pointer-events:none;transition:.5s}.au-tooltip:after{content:\"\";position:absolute;width:0;height:0;border:6px solid transparent;border-right:6px solid rgba(42,63,100,.9)}.au-tooltip.left{top:50%;left:calc(100% + 8px);transform:translateY(-50%);width:auto;max-width:275px;min-width:130px}.au-tooltip.left:after{top:50%;transform:translateY(-50%);left:-12px}.au-tooltip.right:after{top:50%;transform:translateY(-50%);left:-12px}.au-tooltip.top{bottom:calc(100% + 8px);left:0;width:auto;max-width:275px;min-width:130px}.au-tooltip.top:after{bottom:-12px;transform:translateX(-50%) rotate(-90deg);left:20px}.au-tooltip.bottom:after{top:50%;transform:translateY(-50%);left:-12px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$9 = undefined;
/* module identifier */

var __vue_module_identifier__$7 = "data-v-5df85257";
/* functional template */

var __vue_is_functional_template__$9 = false;
/* style inject shadow dom */

var __vue_component__$d = /*#__PURE__*/normalizeComponent$2({
  render: __vue_render__$9,
  staticRenderFns: __vue_staticRenderFns__$9
}, __vue_inject_styles__$9, __vue_script__$9, __vue_scope_id__$9, __vue_is_functional_template__$9, __vue_module_identifier__$7, false, undefined, createInjectorSSR, undefined);

var __vue_component__$e = __vue_component__$d;//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$8 = {
  name: 'au-tabs',
  data: function data() {
    return {
      activeItem: null,
      isResolved: false,
      tabs: []
    };
  },
  created: function created() {
    this.tabs = this.$children;
  },
  mounted: function mounted() {
    this.tabs = this.$children;

    if (this.tabs.length) {
      this.activeItem = this.tabs[0].id;
      this.onTabClick(this.activeItem, this.tabs[0]);
    }
  },
  methods: {
    onTabClick: function onTabClick(itemId, item) {
      this.tabs.forEach(function (component) {
        // eslint-disable-next-line no-param-reassign
        component.isActive = component.id === itemId;
      });
      this.activeItem = itemId;
      this.$emit('tab-change', item.tabName);
    }
  }
};/* script */
var __vue_script__$8 = script$8;
/* template */

var __vue_render__$8 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: _vm.$options.name
  }, [_vm._ssrNode("<div class=\"au-tabs-list\" data-v-3fce51fe>" + _vm._ssrList(_vm.tabs, function (item) {
    return "<a" + _vm._ssrClass("au-tabs-list-item", {
      active: item.id === _vm.activeItem
    }) + " data-v-3fce51fe><h5 data-v-3fce51fe>" + _vm._ssrEscape(_vm._s(item.name) + " ") + (item.count !== null ? "<sup data-v-3fce51fe>" + _vm._ssrEscape(_vm._s(item.count)) + "</sup>" : "<!---->") + "</h5></a>";
  }) + "</div> "), _vm._ssrNode("<div class=\"au-tabs-item\" data-v-3fce51fe>", "</div>", [_vm._t("default")], 2)], 2);
};

var __vue_staticRenderFns__$8 = [];
/* style */

var __vue_inject_styles__$8 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-3fce51fe_0", {
    source: ".au-tabs[data-v-3fce51fe]{margin-bottom:32px}.au-tabs-list[data-v-3fce51fe]{display:flex;align-items:center;border-bottom:1px solid #e0e8f0}.au-tabs-list-item[data-v-3fce51fe]{position:relative;color:#b2b8c4;padding:12px 0;margin-right:24px;transition:.3s;user-select:none;cursor:pointer}.au-tabs-list-item h5[data-v-3fce51fe]{color:inherit;margin-bottom:0}.au-tabs-list-item[data-v-3fce51fe]:hover{color:#3f6ada}.au-tabs-list-item.active[data-v-3fce51fe]{color:#2a3f64;cursor:default}.au-tabs-list-item.active[data-v-3fce51fe]::before{opacity:1;transition:.3s}.au-tabs-list-item[data-v-3fce51fe]::before{content:\"\";position:absolute;width:100%;height:2px;background-color:#3f6ada;left:0;bottom:-1px;opacity:0;transition:.3s}.au-tabs-item[data-v-3fce51fe]{margin:16px 0 0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$8 = "data-v-3fce51fe";
/* module identifier */

var __vue_module_identifier__$6 = "data-v-3fce51fe";
/* functional template */

var __vue_is_functional_template__$8 = false;
/* style inject shadow dom */

var __vue_component__$c = /*#__PURE__*/normalizeComponent$2({
  render: __vue_render__$8,
  staticRenderFns: __vue_staticRenderFns__$8
}, __vue_inject_styles__$8, __vue_script__$8, __vue_scope_id__$8, __vue_is_functional_template__$8, __vue_module_identifier__$6, false, undefined, createInjectorSSR, undefined);

var AuTabs = __vue_component__$c;//
//
//
//
//
//
//
//
//
//
//
var script$7 = {
  name: 'au-tab-item',
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      default: null
    }
  },
  data: function data() {
    return {
      isActive: false
    };
  }
};/* script */
var __vue_script__$7 = script$7;
/* template */

var __vue_render__$7 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('section', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isActive,
      expression: "isActive"
    }],
    class: _vm.$options.name,
    attrs: {
      "aria-hidden": !_vm.isActive,
      "role": "tabpanel"
    }
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__$7 = [];
/* style */

var __vue_inject_styles__$7 = undefined;
/* scoped */

var __vue_scope_id__$7 = undefined;
/* module identifier */

var __vue_module_identifier__$5 = "data-v-5094a366";
/* functional template */

var __vue_is_functional_template__$7 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$a = /*#__PURE__*/normalizeComponent$2({
  render: __vue_render__$7,
  staticRenderFns: __vue_staticRenderFns__$7
}, __vue_inject_styles__$7, __vue_script__$7, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$5, false, undefined, undefined, undefined);

var __vue_component__$b = __vue_component__$a;/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$1 = 1,
    COMPARE_UNORDERED_FLAG$1 = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new _Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

var _baseIsMatch = baseIsMatch;/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject_1(value);
}

var _isStrictComparable = isStrictComparable;/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys_1(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, _isStrictComparable(value)];
  }
  return result;
}

var _getMatchData = getMatchData;/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

var _matchesStrictComparable = matchesStrictComparable;/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = _getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return _matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || _baseIsMatch(object, source, matchData);
  };
}

var _baseMatches = baseMatches;/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

var _baseHasIn = baseHasIn;/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = _castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = _toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength_1(length) && _isIndex(key, length) &&
    (isArray_1(object) || isArguments_1(object));
}

var _hasPath = hasPath;/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && _hasPath(object, path, _baseHasIn);
}

var hasIn_1 = hasIn;/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (_isKey(path) && _isStrictComparable(srcValue)) {
    return _matchesStrictComparable(_toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get_1(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn_1(object, path)
      : _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

var _baseMatchesProperty = baseMatchesProperty;/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

var _baseProperty = baseProperty;/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return _baseGet(object, path);
  };
}

var _basePropertyDeep = basePropertyDeep;/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return _isKey(path) ? _baseProperty(_toKey(path)) : _basePropertyDeep(path);
}

var property_1 = property;/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity_1;
  }
  if (typeof value == 'object') {
    return isArray_1(value)
      ? _baseMatchesProperty(value[0], value[1])
      : _baseMatches(value);
  }
  return property_1(value);
}

var _baseIteratee = baseIteratee;/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

var _baseFindIndex = baseFindIndex;/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

var _baseIsNaN = baseIsNaN;/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

var _strictIndexOf = strictIndexOf;/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? _strictIndexOf(array, value, fromIndex)
    : _baseFindIndex(array, _baseIsNaN, fromIndex);
}

var _baseIndexOf = baseIndexOf;/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && _baseIndexOf(array, value, 0) > -1;
}

var _arrayIncludes = arrayIncludes;/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

var _arrayIncludesWith = arrayIncludesWith;/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

var noop_1 = noop;/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(_Set && (1 / _setToArray(new _Set([,-0]))[1]) == INFINITY) ? noop_1 : function(values) {
  return new _Set(values);
};

var _createSet = createSet;/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = _arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = _arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : _createSet(array);
    if (set) {
      return _setToArray(set);
    }
    isCommon = false;
    includes = _cacheHas;
    seen = new _SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

var _baseUniq = baseUniq;/**
 * This method is like `_.uniq` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * uniqueness is computed. The order of result values is determined by the
 * order they occur in the array. The iteratee is invoked with one argument:
 * (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
 * // => [2.1, 1.2]
 *
 * // The `_.property` iteratee shorthand.
 * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }, { 'x': 2 }]
 */
function uniqBy(array, iteratee) {
  return (array && array.length) ? _baseUniq(array, _baseIteratee(iteratee)) : [];
}

var uniqBy_1 = uniqBy;/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike_1(value) &&
      (isArray_1(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer_1(value) || isTypedArray_1(value) || isArguments_1(value))) {
    return !value.length;
  }
  var tag = _getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (_isPrototype(value)) {
    return !_baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty$1.call(value, key)) {
      return false;
    }
  }
  return true;
}

var isEmpty_1 = isEmpty;/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * The base implementation of methods like `_.intersection`, without support
 * for iteratee shorthands, that accepts an array of arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of shared values.
 */
function baseIntersection(arrays, iteratee, comparator) {
  var includes = comparator ? _arrayIncludesWith : _arrayIncludes,
      length = arrays[0].length,
      othLength = arrays.length,
      othIndex = othLength,
      caches = Array(othLength),
      maxLength = Infinity,
      result = [];

  while (othIndex--) {
    var array = arrays[othIndex];
    if (othIndex && iteratee) {
      array = _arrayMap(array, _baseUnary(iteratee));
    }
    maxLength = nativeMin(array.length, maxLength);
    caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
      ? new _SetCache(othIndex && array)
      : undefined;
  }
  array = arrays[0];

  var index = -1,
      seen = caches[0];

  outer:
  while (++index < length && result.length < maxLength) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (!(seen
          ? _cacheHas(seen, computed)
          : includes(result, computed, comparator)
        )) {
      othIndex = othLength;
      while (--othIndex) {
        var cache = caches[othIndex];
        if (!(cache
              ? _cacheHas(cache, computed)
              : includes(arrays[othIndex], computed, comparator))
            ) {
          continue outer;
        }
      }
      if (seen) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

var _baseIntersection = baseIntersection;/**
 * Casts `value` to an empty array if it's not an array like object.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array|Object} Returns the cast array-like object.
 */
function castArrayLikeObject(value) {
  return isArrayLikeObject_1(value) ? value : [];
}

var _castArrayLikeObject = castArrayLikeObject;/**
 * Creates an array of unique values that are included in all given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 *
 * _.intersection([2, 1], [2, 3]);
 * // => [2]
 */
var intersection = _baseRest(function(arrays) {
  var mapped = _arrayMap(arrays, _castArrayLikeObject);
  return (mapped.length && mapped[0] === arrays[0])
    ? _baseIntersection(mapped)
    : [];
});

var intersection_1 = intersection;/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}

var _arrayAggregator = arrayAggregator;/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && _baseFor(object, iteratee, keys_1);
}

var _baseForOwn = baseForOwn;/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike_1(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

var _createBaseEach = createBaseEach;/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = _createBaseEach(_baseForOwn);

var _baseEach = baseEach;/**
 * Aggregates elements of `collection` on `accumulator` with keys transformed
 * by `iteratee` and values set by `setter`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function baseAggregator(collection, setter, iteratee, accumulator) {
  _baseEach(collection, function(value, key, collection) {
    setter(accumulator, value, iteratee(value), collection);
  });
  return accumulator;
}

var _baseAggregator = baseAggregator;/**
 * Creates a function like `_.groupBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} [initializer] The accumulator object initializer.
 * @returns {Function} Returns the new aggregator function.
 */
function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var func = isArray_1(collection) ? _arrayAggregator : _baseAggregator,
        accumulator = initializer ? initializer() : {};

    return func(collection, setter, _baseIteratee(iteratee), accumulator);
  };
}

var _createAggregator = createAggregator;/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The order of grouped values
 * is determined by the order they occur in `collection`. The corresponding
 * value of each key is an array of elements responsible for generating the
 * key. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * _.groupBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 *
 * // The `_.property` iteratee shorthand.
 * _.groupBy(['one', 'two', 'three'], 'length');
 * // => { '3': ['one', 'two'], '5': ['three'] }
 */
var groupBy = _createAggregator(function(result, value, key) {
  if (hasOwnProperty.call(result, key)) {
    result[key].push(value);
  } else {
    _baseAssignValue(result, key, [value]);
  }
});

var groupBy_1 = groupBy;/**
 * Every item in array required value field
 * @param columns Array
 */

var columnPropertyValidation = function columnPropertyValidation(columns) {
  return !!columns.map(function (_) {
    return Object.prototype.hasOwnProperty.call(_, 'value');
  }).filter(Boolean).length;
};

var script$6 = {
  name: 'au-table',
  props: {
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    columns: {
      type: Array,
      required: true,
      validator: columnPropertyValidation
    },
    childrenColumns: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    childrenProperty: {
      type: String,
      default: null
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    activeRouteTracker: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    noDataText: {
      type: String,
      default: 'Список пуст'
    },
    currentSort: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    pageSettings: {
      type: Object,
      default: null
    },
    selectable: {
      type: Boolean,
      default: false
    },
    isResetCheckbox: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      preparedColumns: [],
      openedItems: [],
      checkedChildren: [],
      checkedParent: [],
      allTransitions: [],
      filteredTransitions: [],
      filteredParentId: [],
      filteredChildrenId: [],
      iconName: String
    };
  },
  computed: {
    // for detecting children checking/unchecking
    isChildrenChecked: function isChildrenChecked() {
      var _this = this;

      return function (item) {
        if (isEmpty_1(_this.checkedChildren)) {
          return false;
        }

        var checkedLine = _this.checkedChildren.find(function (_) {
          return _.checkedActions.includes(item.id);
        });

        return !!checkedLine;
      };
    },
    // for detecting parent checking/unchecking
    isParentChecked: function isParentChecked() {
      var _this2 = this;

      return function (item) {
        if (isEmpty_1(_this2.checkedParent)) {
          return false;
        }

        var checkedLine = _this2.checkedParent.find(function (_) {
          return _.parentId === item.id;
        });

        return !!checkedLine;
      };
    },
    // for disabling parent checkbox, if all children checked
    isParentDisabled: function isParentDisabled() {
      var _this3 = this;

      return function (rowLine) {
        var checkedLine = _this3.checkedChildren.find(function (_) {
          return _.rowLine === rowLine;
        });

        if (!checkedLine) return null;
        return checkedLine.actionsLength === checkedLine.checkedActions.length;
      };
    },
    // for disabling children checkbox, if parent checked
    isChildrenDisabled: function isChildrenDisabled() {
      var _this4 = this;

      return function (rowLine) {
        var checkedLine = _this4.checkedParent.find(function (_) {
          return _.rowLine === rowLine;
        });

        return !!checkedLine;
      };
    },
    getRowItemClass: function getRowItemClass() {
      var _this5 = this;

      return function (line) {
        return {
          open: _this5.openedItems.includes(line),
          'active-route': _this5.currentActiveRouteParamId && _this5.currentActiveRouteParamId === _this5.getListValue(line, get_1(_this5.activeRouteTrackerNow, 'param'))
        };
      };
    },
    getChildrenRowItemClass: function getChildrenRowItemClass() {
      var _this6 = this;

      return function (rowLine, childrenRowLine) {
        return {
          'active-route': _this6.currentActiveRouteParamId && _this6.currentActiveRouteParamId === _this6.getChildrenValue(rowLine, childrenRowLine, get_1(_this6.activeRouteTrackerNow, _this6.activeRouteTrackerNow.paramGetter))
        };
      };
    },
    getColumnName: function getColumnName() {
      var _this7 = this;

      return function (column) {
        var item = _this7.getItemFromColumns(column);

        return get_1(item, 'name', item.value);
      };
    },
    getColumnIconName: function getColumnIconName() {
      var _this8 = this;

      return function (column) {
        var item = _this8.getItemFromColumns(column);

        var name = get_1(item, 'iconName');
        if (name) _this8.iconName = name;
        return name;
      };
    },
    getColumnWidth: function getColumnWidth() {
      var _this9 = this;

      return function (column) {
        var item = _this9.getItemFromColumns(column); // todo sum for every width value of another columns


        return "".concat(get_1(item, 'width', 100 / _this9.columns.length), "%");
      };
    },
    getColumnWidthByValue: function getColumnWidthByValue() {
      var _this10 = this;

      return function (value) {
        var column = _this10.columns.find(function (_) {
          return _.value === value;
        });

        if (!column) return null;
        return _this10.getColumnWidth(column);
      };
    },
    getColumnAlign: function getColumnAlign() {
      var _this11 = this;

      return function (column) {
        var item = _this11.getItemFromColumns(column);

        return get_1(item, 'align', 'flex-start');
      };
    },
    getColumnAlignByValue: function getColumnAlignByValue() {
      var _this12 = this;

      return function (value) {
        var column = _this12.columns.find(function (_) {
          return _.value === value;
        });

        if (!column) return null;
        return _this12.getColumnAlign(column);
      };
    },
    getItemFromColumns: function getItemFromColumns() {
      var _this13 = this;

      return function (item) {
        var needle = _this13.columns.find(function (_) {
          return _.value === item.value;
        });

        if (needle) return needle;
        throw Error("Columns property doesnt have item with '".concat(item.value, "' value"));
      };
    },
    itemHasChildren: function itemHasChildren() {
      var _this14 = this;

      return function (item) {
        return Object.prototype.hasOwnProperty.call(item, _this14.childrenProperty) && item[_this14.childrenProperty].length;
      };
    },
    getListValue: function getListValue() {
      var _this15 = this;

      return function (index, valueKey) {
        return get_1(_this15.list[index - 1], valueKey, null);
      };
    },
    getChildrenValue: function getChildrenValue() {
      var _this16 = this;

      return function (index, childrenIndex, valueKey) {
        return get_1(_this16.list[index - 1][_this16.childrenProperty][childrenIndex - 1], valueKey, null);
      };
    },
    columnValues: function columnValues() {
      return this.preparedColumns.map(function (_) {
        return _.value;
      });
    },
    childrenColumnValues: function childrenColumnValues() {
      return this.childrenColumns.map(function (_) {
        return _.value;
      });
    },
    hasActiveRouteTracking: function hasActiveRouteTracking() {
      return Array.isArray(this.activeRouteTracker) && this.activeRouteTracker.length;
    },
    activeRouteTrackerNow: function activeRouteTrackerNow() {
      var _this17 = this;

      if (!this.hasActiveRouteTracking) return null;
      var active = this.activeRouteTracker.find(function (_) {
        return _.name === _this17.$route.name;
      });
      if (!active) return null;
      return _objectSpread2$1(_objectSpread2$1({}, active), {}, {
        paramGetter: Object.keys(active).includes('itemParam') ? 'itemParam' : 'item'
      });
    },
    currentActiveRouteParamId: function currentActiveRouteParamId() {
      var active = this.activeRouteTrackerNow;
      if (!active) return null;
      var param = get_1(this.$route.params, active.param, null);
      return param !== null ? parseInt(param, 10) : null;
    }
  },
  watch: {
    pageSettings: {
      immediate: true,
      deep: true,
      handler: function handler() {
        this.resetCheckbox();
      }
    },
    columns: {
      immediate: true,
      handler: function handler(columns) {
        this.preparedColumns = columns.map(function (item) {
          return _objectSpread2$1({
            sort: null
          }, item);
        });
      }
    },
    isResetCheckbox: {
      immediate: true,
      deep: true,
      handler: function handler(val) {
        if (val) {
          this.resetCheckbox();
        }
      }
    },
    allTransitions: {
      immediate: true,
      deep: true,
      handler: function handler() {
        this.checkForTransitions();
      }
    }
  },
  methods: {
    // full reset of checkbox and filter
    resetCheckbox: function resetCheckbox() {
      this.allTransitions = [];
      this.filteredTransitions = [];
      this.filteredChildrenId = [];
      this.filteredParentId = [];
      this.checkedParent = [];
      this.checkedChildren = [];
    },
    // reset only for transitions
    resetFilter: function resetFilter() {
      this.filteredTransitions = [];
      this.filteredChildrenId = [];
      this.filteredParentId = [];
    },
    // eslint-disable-next-line consistent-return
    checkForTransitions: function checkForTransitions() {
      var _this18 = this;

      if (!get_1(this.allTransitions, 'length')) {
        this.$emit('transition-check', []);
        return false;
      }

      this.filteredTransitions = [];
      this.filteredChildrenId = [];
      this.filteredParentId = []; // array of transition types, with modal

      var blockedTypes = ['to_back_from_clarification', 'to_correction', 'to_clarification']; // filtering checked transition and pushing all of them to array
      // eslint-disable-next-line no-const-assign,no-plusplus

      var _loop = function _loop(i) {
        var item = _this18.allTransitions[i];
        var rowTransitions = get_1(item, 'transitions', []);

        if (rowTransitions.length === 0) {
          _this18.resetFilter();

          _this18.$emit('transition-check', []);

          return "break";
        }

        var transitions = Object.keys(groupBy_1(item.transitions, 'name')); // eslint-disable-next-line array-callback-return

        transitions.filter(function (block, key) {
          if (blockedTypes.includes(block)) {
            transitions.splice(key, 1);
          }
        });

        _this18.filteredTransitions.push(transitions);

        if (item.isChildren) {
          var childObj = {
            parentId: item.parentId,
            childId: item.childId
          };

          _this18.filteredChildrenId.push(childObj);
        } else {
          _this18.filteredParentId.push(item.parentId);
        }
      };

      for (var i = 0; i < this.allTransitions.length; i++) {
        var _ret = _loop(i);

        if (_ret === "break") break;
      }

      this.filteredTransitions = intersection_1.apply(void 0, _toConsumableArray(this.filteredTransitions));
      var result = []; // eslint-disable-next-line array-callback-return,consistent-return

      this.filteredTransitions.filter(function (item, key) {
        var transitionObj = {
          transition: item,
          id: key
        };
        result.push(transitionObj);
      });
      this.$emit('transition-check', {
        transitions: uniqBy_1(result, 'transition'),
        parent: this.filteredParentId,
        children: this.filteredChildrenId
      });
    },
    checkParent: function checkParent(isChecked, parent, rowLine) {
      if (!parent.transitions) return;
      var itemObj = {
        parentId: parent.id,
        transitions: _toConsumableArray(parent.transitions),
        rowLine: rowLine
      };

      if (isChecked === true) {
        this.checkedParent.push(itemObj);
        this.allTransitions.push(itemObj);
      } else {
        var index = this.checkedParent.findIndex(function (indexItem) {
          return indexItem.rowLine === rowLine;
        });
        var transitionIndex = this.allTransitions.findIndex(function (item) {
          return item.parentId === parent.id;
        });

        if (index > -1) {
          this.checkedParent.splice(index, 1);
        }

        if (transitionIndex > -1) {
          this.allTransitions.splice(transitionIndex, 1);
        }
      }
    },
    checkChildren: function checkChildren(isChecked, parent, child, rowLine) {
      // object for collecting all checked actions,
      // to disable parent checkbox then,
      // in case if, all children checked
      var itemObj = {
        parentId: parent.id,
        actionsLength: parent.actions.length,
        checkedActions: [child.id],
        rowLine: rowLine
      }; // object for collecting all checked transitions separately

      var transition = {
        transitions: _toConsumableArray(child.transitions),
        parentId: parent.id,
        isChildren: true,
        childId: child.id
      };

      if (isChecked === true) {
        var index = this.checkedChildren.findIndex(function (item) {
          return item.parentId === parent.id;
        });

        if (index > -1) {
          // passing id of checked children to array
          this.$set(this.checkedChildren[index], 'checkedActions', [].concat(_toConsumableArray(this.checkedChildren[index].checkedActions), [child.id]));
        } else {
          this.checkedChildren.push(itemObj);
        }

        this.allTransitions.push(transition);
      } else {
        // eslint-disable-next-line max-len
        var transitionIndex = this.allTransitions.findIndex(function (item) {
          return item.childId === child.id;
        });
        var parentIndex = this.checkedChildren.findIndex(function (item) {
          return item.parentId === parent.id;
        });
        var childIndex = this.checkedChildren[parentIndex].checkedActions.findIndex(function (item) {
          return item === child.id;
        });

        if (childIndex > -1) {
          this.checkedChildren[parentIndex].checkedActions.splice(childIndex, 1);
        }

        if (parentIndex > -1 && this.checkedChildren[parentIndex].checkedActions.length === 0) {
          this.checkedChildren.splice(parentIndex, 1);
        }

        if (transitionIndex > -1) {
          this.allTransitions.splice(transitionIndex, 1);
        }
      }
    },
    resetOpenedFolders: function resetOpenedFolders() {
      this.openedItems = [];
    },
    onFolderClick: function onFolderClick(index) {
      if (!this.itemHasChildren(this.list[index - 1])) return;
      var needleIndex = this.openedItems.findIndex(function (_) {
        return _ === index;
      });

      if (needleIndex === -1) {
        this.openedItems.push(index);
        return;
      }

      this.openedItems.splice(needleIndex, 1);
      this.openedItems = this.openedItems.filter(Boolean);
    },
    onColumnClick: function onColumnClick(item) {
      if (!item.sortable) return;

      var currentSort = _objectSpread2$1({}, this.currentSort);

      var sortProperty = get_1(item, 'sortProperty', item.value);

      if (currentSort.field !== sortProperty) {
        currentSort.dir = null;
      }

      currentSort.field = sortProperty;

      switch (currentSort.dir) {
        case null:
          currentSort.dir = 'asc';
          break;

        case 'asc':
          currentSort.dir = 'desc';
          break;

        case 'desc':
        default:
          currentSort.field = null;
          currentSort.dir = null;
          break;
      }

      this.$emit('sort', _objectSpread2$1({}, currentSort));
    },
    iconSort: function iconSort(item) {
      if (this.currentSort.field === (item.sortProperty || item.value) && this.currentSort.dir === 'asc') {
        return 'icon-sort-asc';
      }

      if (this.currentSort.field === (item.sortProperty || item.value) && this.currentSort.dir === 'desc') {
        return 'icon-sort-desc';
      }

      return 'icon-sort';
    }
  }
};/* script */
var __vue_script__$6 = script$6;
/* template */

var __vue_render__$6 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: _vm.$options.name
  }, [_vm._ssrNode("<div class=\"au-table__topic\" data-v-409a966a>", "</div>", _vm._l(_vm.preparedColumns, function (item, index) {
    return _vm._ssrNode("<div class=\"au-table__topic-item\"" + _vm._ssrStyle(null, {
      width: _vm.getColumnWidth(item)
    }, null) + " data-v-409a966a>", "</div>", [_vm._ssrNode((!_vm.getColumnIconName(item) ? "<p data-v-409a966a>" + _vm._ssrEscape("\n        " + _vm._s(_vm.getColumnName(item)) + "\n      ") + "</p>" : "<!---->") + " "), _vm.getColumnIconName(item) ? _c('au-icon', {
      attrs: {
        "icon": _vm.getColumnIconName(item),
        "size": 15,
        "color": "#333"
      }
    }) : _vm._e(), _vm._ssrNode(" "), item.sortable ? _vm._ssrNode("<div" + _vm._ssrClass("column-sorting", ["" + (item.sort || '')]) + " data-v-409a966a>", "</div>", [_c('au-icon', {
      attrs: {
        "size": 10,
        "icon": _vm.iconSort(item)
      }
    })], 1) : _vm._e()], 2);
  }), 0), _vm._ssrNode(" "), _vm.list && _vm.list.length ? _vm._ssrNode("<ul class=\"au-table__list\" data-v-409a966a>", "</ul>", _vm._l(_vm.list.length, function (rowLine) {
    return _vm._ssrNode("<li" + _vm._ssrClass("au-table__item", _vm.getRowItemClass(rowLine)) + " data-v-409a966a>", "</li>", [_vm._ssrNode("<div class=\"au-table__item-box table-row\" data-v-409a966a>", "</div>", _vm._l(_vm.columnValues, function (key, index) {
      return _vm._ssrNode("<div class=\"au-table__item-col\"" + _vm._ssrStyle(null, {
        width: _vm.getColumnWidthByValue(key),
        justifyContent: _vm.getColumnAlignByValue(key)
      }, null) + " data-v-409a966a>", "</div>", [_vm._ssrNode((index === 0 ? (_vm.selectable ? "<label" + _vm._ssrClass(null, ['checkbox', {
        'checkbox--disabled': _vm.isParentDisabled(rowLine)
      }]) + " data-v-409a966a><input type=\"checkbox\" name=\"fake\"" + _vm._ssrAttr("checked", _vm.isParentChecked(_vm.list[rowLine - 1])) + _vm._ssrAttr("value", !!_vm.list[rowLine - 1].id) + " data-v-409a966a> <div class=\"checkbox__box\" data-v-409a966a></div></label>" : "<!---->") + " " + (_vm.childrenProperty ? "<div" + _vm._ssrClass("au-table__item-folder folder", {
        open: _vm.openedItems.includes(rowLine),
        disabled: !_vm.itemHasChildren(_vm.list[rowLine - 1])
      }) + " data-v-409a966a></div>" : "<!---->") : "<!---->") + " "), _vm._t("item." + key, function () {
        return [_vm._v("\n            " + _vm._s(_vm.getListValue(rowLine, key)) + "\n          ")];
      }, {
        "item": _vm.list[rowLine - 1]
      })], 2);
    }), 0), _vm._ssrNode(" "), _vm.itemHasChildren(_vm.list[rowLine - 1]) ? _vm._ssrNode("<div class=\"au-table__item-children\" data-v-409a966a>", "</div>", _vm._l(_vm.list[rowLine - 1][_vm.childrenProperty].length, function (childrenRowLine) {
      return _vm._ssrNode("<div" + _vm._ssrClass("au-table__item-box", _vm.getChildrenRowItemClass(rowLine, childrenRowLine)) + " data-v-409a966a>", "</div>", _vm._l(_vm.columnValues, function (key, index) {
        return _vm._ssrNode("<div class=\"au-table__item-col\"" + _vm._ssrStyle(null, {
          width: _vm.getColumnWidthByValue(key),
          justifyContent: _vm.getColumnAlignByValue(key)
        }, null) + " data-v-409a966a>", "</div>", [_vm._ssrNode((index === 0 ? (_vm.selectable ? "<label" + _vm._ssrClass(null, ['checkbox', {
          'checkbox--disabled': _vm.isChildrenDisabled(rowLine)
        }]) + " data-v-409a966a><input type=\"checkbox\" name=\"fake\"" + _vm._ssrAttr("checked", _vm.isChildrenChecked(_vm.list[rowLine - 1][_vm.childrenProperty][childrenRowLine - 1])) + " data-v-409a966a> <div class=\"checkbox__box\" data-v-409a966a></div></label>" : "<!---->") + " <div class=\"au-table__item-folder subfolder\" data-v-409a966a></div>" : "<!---->") + " "), _vm._t("children." + key, function () {
          return [_vm._v("\n              " + _vm._s(_vm.getChildrenValue(rowLine, childrenRowLine, key)) + "\n            ")];
        }, {
          "item": _vm.list[rowLine - 1][_vm.childrenProperty][childrenRowLine - 1],
          "parent": _vm.list[rowLine - 1]
        })], 2);
      }), 0);
    }), 0) : _vm._e()], 2);
  }), 0) : _vm._ssrNode("<div class=\"no-data\" data-v-409a966a>", "</div>", [_vm.isLoading ? _c('au-spinner', {
    attrs: {
      "size": 56,
      "color": "#2A3F64"
    }
  }) : [_vm._v(_vm._s(_vm.noDataText))]], 2)], 2);
};

var __vue_staticRenderFns__$6 = [];
/* style */

var __vue_inject_styles__$6 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-409a966a_0", {
    source: ".au-table__topic[data-v-409a966a]{position:relative;display:flex;background-color:#f0f4fb;border:1px solid #e0e8f0;border-radius:4px}.au-table__topic .au-table__topic-item[data-v-409a966a]{position:relative;display:flex;align-items:center;font-size:12px;font-weight:500;letter-spacing:-.1px;height:36px;border-left:1px solid #e0e8f0;padding:0 10px;cursor:pointer;justify-content:space-between}.au-table__topic .au-table__topic-item[data-v-409a966a]:first-child{border-left:0}.au-table__list[data-v-409a966a]{position:relative;list-style:none}.au-table__item[data-v-409a966a]{position:relative;border:1px solid transparent;border-radius:4px;transition:border-color .3s}.au-table__item[data-v-409a966a]::after{content:\"\"}.au-table__item:nth-child(odd)>.au-table__item-box[data-v-409a966a]{background-color:#fff}.au-table__item:nth-child(even)>.au-table__item-box[data-v-409a966a]{background-color:#f8fafb}.au-table__item:hover>.au-table__item-box[data-v-409a966a]{background-color:rgba(234,242,255,.77);box-shadow:inset 0 0 0 1px #d5dff1}.au-table__item>.au-table__item-box[data-v-409a966a]{border-radius:1px}.au-table__item>.au-table__item-box .au-table__item-folder.folder[data-v-409a966a]{position:relative}.au-table__item>.au-table__item-box .au-table__item-folder.folder[data-v-409a966a]::before{content:\"\";position:absolute;width:1px;height:0;background-color:#98bce1;top:calc(100% + 5px);left:7px;overflow:hidden;opacity:0;transition:opacity .5s ease-out}.au-table__item .au-table__item-children .au-table__item-box .au-table__item-folder[data-v-409a966a]::before{content:\"\";position:absolute;width:1px;height:calc(100% + 2px);background-color:#98bce1;top:-1px;left:40px;opacity:0;transition:opacity .3s}.au-table__item .au-table__item-children .au-table__item-box .au-table__item-folder[data-v-409a966a]::after{content:\"\";position:absolute;width:10px;height:1px;background-color:#98bce1;top:calc(50% - 1px);left:40px;opacity:0;transition:opacity .3s}.au-table__item .au-table__item-children .au-table__item-box:last-child .au-table__item-folder[data-v-409a966a]::before{height:calc(50% + 1px)}.au-table__item.open[data-v-409a966a]{box-shadow:0 3px 7px rgba(103,149,176,.21);border:1px solid #e0e8f0}.au-table__item.open>.au-table__item-box[data-v-409a966a]{border-bottom-left-radius:0;border-bottom-right-radius:0}.au-table__item.open>.au-table__item-box .au-table__item-folder.folder[data-v-409a966a]::before{opacity:1;height:66px;overflow:visible;transition:opacity .5s ease-in}.au-table__item.open .au-table__item-children[data-v-409a966a]{max-height:100vh;overflow:visible;transition:max-height .5s ease-in}.au-table__item.open .au-table__item-children .au-table__item-box[data-v-409a966a]{opacity:1;overflow:visible;transition:opacity .5s ease-in}.au-table__item.open .au-table__item-children .au-table__item-box .au-table__item-folder[data-v-409a966a]::before{opacity:1;transition:opacity .3s}.au-table__item.open .au-table__item-children .au-table__item-box .au-table__item-folder[data-v-409a966a]::after{opacity:1;transition:opacity .3s}.au-table__item.open .au-table__item-children .au-table__item-box[data-v-409a966a]:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.au-table__item.open .au-table__item-children .au-table__item-box:last-child .au-table__item-folder[data-v-409a966a]::before{height:calc(50% + 1px)}.au-table__item.active-route[data-v-409a966a]{border:1px solid rgba(63,106,218,.23)}.au-table__item.active-route[data-v-409a966a]::after{position:absolute;top:0;right:-1px;width:4px;height:100%;background-color:#3f6ada;border-top-right-radius:1px;border-bottom-right-radius:1px}.au-table__item-box[data-v-409a966a]{position:relative;display:flex;align-items:center;min-height:40px}.au-table__item-box[data-v-409a966a] .status-action-buttons{position:relative;justify-content:flex-end;width:100%}.au-table__item-box[data-v-409a966a] .status-action-buttons .btn-component{position:relative;justify-content:flex-start;max-width:max-content;flex:1 1 auto;overflow:hidden;transition:flex .5s}.au-table__item-box[data-v-409a966a] .status-action-buttons .btn-component:hover{flex:1 0 auto;transition:flex .5s;z-index:2}.au-table__item-box[data-v-409a966a] .status-action-buttons .btn-component:hover:after{background:linear-gradient(to right,rgba(0,0,0,0),#3f6ada 80%);opacity:0;width:0;transition:width .5s,background .5s,opacity .5s}.au-table__item-box[data-v-409a966a] .status-action-buttons .btn-component:after{content:\"\";position:absolute;background:linear-gradient(to right,rgba(0,0,0,0),#fff 80%);height:100%;width:20px;top:0;right:0;opacity:1;transition:width .5s,background .5s,opacity .5s}.au-table__item-box .au-table__item-col[data-v-409a966a]{min-height:40px}.au-table__item-col[data-v-409a966a]{position:relative;display:flex;align-items:center;padding:8px;font-size:12px;line-height:16px}.au-table__item-folder[data-v-409a966a]{min-width:15px;width:15px;height:13px;margin-right:8px}.au-table__item-folder.folder[data-v-409a966a]{background:url(../../assets/icons/icon-folder-closed.svg) no-repeat center;background-size:contain;cursor:pointer;transition:.3s}.au-table__item-folder.folder.open[data-v-409a966a]{background:url(../../assets/icons/icon-folder-open.svg) no-repeat center;background-size:contain;transition:.3s}.au-table__item-folder.folder.disabled[data-v-409a966a]{pointer-events:none;opacity:.5}.administration-templates-view .au-table__item-folder.folder[data-v-409a966a]{display:none}.au-table__item-folder.subfolder[data-v-409a966a]{background:url(../../assets/icons/icon-subfolder.svg) no-repeat;background-position:center;background-size:contain;cursor:default;margin-left:23px}.au-table__item-name[data-v-409a966a]{font-size:12px;line-height:16px;max-height:48px;color:#000;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;transition:.3s}.au-table__item-name[data-v-409a966a]:hover{color:#3f6ada;transition:.3s}.au-table__item-importance[data-v-409a966a]{display:flex;justify-content:center;align-items:center;font-size:12px;width:26px;height:26px;border-radius:50%;border:2px solid #fff}.au-table__item-importance.none[data-v-409a966a]{display:none}.au-table__item-importance.one[data-v-409a966a]{background-color:#a2e118}.au-table__item-importance.two[data-v-409a966a]{background-color:#fd0}.au-table__item-author[data-v-409a966a],.au-table__item-created[data-v-409a966a]{display:flex;justify-content:center;align-items:center;font-size:12px;line-height:16px}.au-table__item-responsible[data-v-409a966a]{font-size:12px;line-height:16px}.au-table__item-responsible span[data-v-409a966a]{font-weight:500;margin-right:4px}.au-table__item-status[data-v-409a966a]{position:relative;display:flex;justify-content:center;align-items:center;min-height:26px;max-width:100%;padding:1px 10px 1px 90px;border-radius:2px}.au-table__item-status.new[data-v-409a966a]{background-color:#e0e8f0}.au-table__item-status.work[data-v-409a966a]{background-color:#fd0}.au-table__item-time[data-v-409a966a]{position:absolute;display:flex;align-items:center;font-size:11px;font-weight:500;background-color:#fff;color:#000;height:24px;width:71px;padding:2px 0 0 22px;border-radius:2px 0 0 2px;left:1px;top:1px}.au-table__item-time[data-v-409a966a]::before{content:\"\";position:absolute;left:5px;top:50%;transform:translateY(-50%) rotate(-90deg);width:12px;height:12px;background:url(../../assets/icons/icon-time-black.svg) no-repeat;background-position:center;background-size:contain}.au-table__item-time[data-v-409a966a]::after{content:\"\";position:absolute;right:-16px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:12px solid transparent;border-right:8px solid transparent;border-bottom:12px solid transparent;border-left:8px solid #fff}.au-table__item-time.red[data-v-409a966a]{background-color:#ff2c2c;color:#fff}.au-table__item-time.red[data-v-409a966a]::before{background:url(../../assets/icons/icon-time-white.svg) no-repeat;background-position:center;background-size:contain}.au-table__item-time.red[data-v-409a966a]::after{border-left:8px solid #ff2c2c}.au-table__item-type[data-v-409a966a]{font-size:11px;text-align:center}.au-table__item-children[data-v-409a966a]{position:relative;overflow:hidden;transition:max-height .5s ease-out;max-height:0}.au-table__item-children .au-table__item-box[data-v-409a966a]{min-height:50px;background-color:#fff;border-top:1px solid #e0e8f0;overflow:hidden;opacity:0;transition:opacity .5s ease-out}.au-table__item-children .au-table__item-box[data-v-409a966a]::after{content:\"\"}.au-table__item-children .au-table__item-box.active-route[data-v-409a966a]::after{position:absolute;top:0;right:0;width:3px;height:100%;background-color:#3f6ada}.au-table__item-children .au-table__item-box .au-table__item-col[data-v-409a966a]{min-height:50px}.no-data[data-v-409a966a]{height:120px;display:flex;justify-content:center;align-items:center;font-size:14px;color:#b2b8c4}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$6 = "data-v-409a966a";
/* module identifier */

var __vue_module_identifier__$4 = "data-v-409a966a";
/* functional template */

var __vue_is_functional_template__$6 = false;
/* style inject shadow dom */

var __vue_component__$8 = /*#__PURE__*/normalizeComponent$2({
  render: __vue_render__$6,
  staticRenderFns: __vue_staticRenderFns__$6
}, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$4, false, undefined, createInjectorSSR, undefined);

var __vue_component__$9 = __vue_component__$8;//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$5 = {
  name: 'au-pagination',
  props: {
    page: {
      type: Number,
      default: 1
    },
    perPage: {
      type: Number,
      default: null
    },
    total: {
      type: Number,
      default: null
    },
    pagesCount: {
      type: Number,
      default: null
    }
  },
  computed: {
    paginationItems: function paginationItems() {
      var delta = 3;
      var left = this.page - delta;
      var right = this.page + delta + 1;
      var result = Array.from({
        length: this.pagesCount
      }, function (v, k) {
        return k + 1;
      }).filter(function (i) {
        return i && i >= left && i < right;
      });

      if (result.length > 1) {
        if (result[0] > 1) {
          if (result[0] > 2) {
            result.unshift('...');
          }

          result.unshift(1);
        }

        if (result[result.length - 1] < this.pagesCount) {
          if (result[result.length - 1] !== this.pagesCount - 1) {
            result.push('...');
          }

          result.push(this.pagesCount);
        }
      }

      return result;
    }
  }
};/* script */
var __vue_script__$5 = script$5;
/* template */

var __vue_render__$5 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('nav', {
    class: _vm.$options.name
  }, [_vm._e(), _vm._ssrNode(" "), _vm._e(), _vm._ssrNode(" " + _vm._ssrList(_vm.paginationItems, function (pageItem) {
    return "<a href=\"#\"" + _vm._ssrClass("au-pagination__item", {
      active: pageItem === _vm.page,
      disabled: pageItem === '...'
    }) + " data-v-22da4450>" + _vm._ssrEscape(_vm._s(pageItem)) + "</a>";
  }) + " "), _vm._ssrNode("<a" + _vm._ssrClass("au-pagination__item next", {
    disabled: _vm.page + 1 > _vm.pagesCount
  }) + " data-v-22da4450>", "</a>", [_c('au-icon', {
    attrs: {
      "size": 10,
      "icon": "icon-arrow"
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<a" + _vm._ssrClass("au-pagination__item end", {
    disabled: _vm.page === _vm.pagesCount
  }) + " data-v-22da4450>", "</a>", [_c('au-icon', {
    attrs: {
      "size": 10,
      "icon": "icon-arrow-double"
    }
  })], 1)], 2);
};

var __vue_staticRenderFns__$5 = [];
/* style */

var __vue_inject_styles__$5 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-22da4450_0", {
    source: ".au-pagination[data-v-22da4450]{display:flex;align-items:center}.au-pagination__item[data-v-22da4450]{position:relative;display:flex;justify-content:center;align-items:center;font-size:12px;font-weight:500;background-color:#fff;border:1px solid #e0e8f0;border-left:none;width:32px;height:32px;transition:background-color .3s}.au-pagination__item[data-v-22da4450]:first-child{border-left:1px solid #e0e8f0}.au-pagination__item.active[data-v-22da4450]{background-color:#f0f4fb;pointer-events:none}.au-pagination__item.disabled[data-v-22da4450]{pointer-events:none;color:#e6e6e6}.au-pagination__item[data-v-22da4450]:hover{background-color:#f8fafb;color:#3f6ada}.au-pagination__item.prev[data-v-22da4450]  .icon,.au-pagination__item.start[data-v-22da4450]  .icon{transform:rotate(180deg)}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$5 = "data-v-22da4450";
/* module identifier */

var __vue_module_identifier__$3 = "data-v-22da4450";
/* functional template */

var __vue_is_functional_template__$5 = false;
/* style inject shadow dom */

var __vue_component__$6 = /*#__PURE__*/normalizeComponent$2({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$3, false, undefined, createInjectorSSR, undefined);

var __vue_component__$7 = __vue_component__$6;//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$4 = {
  name: 'au-user-popover',
  props: {
    user: {
      type: Object,
      required: true
    }
  }
};/* script */
var __vue_script__$4 = script$4;
/* template */

var __vue_render__$4 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: _vm.$options.name
  }, [_vm._ssrNode("<div class=\"au-user-popover__left\" data-v-17e8d5ea>", "</div>", [_vm._ssrNode("<div class=\"au-user-popover__avatar\" data-v-17e8d5ea>", "</div>", [_c('au-icon', {
    attrs: {
      "size": 35,
      "icon": "icon-avatar"
    }
  })], 1), _vm._ssrNode(" <div class=\"au-user-popover__info\" data-v-17e8d5ea><div class=\"au-user-popover__info-name\" data-v-17e8d5ea>" + _vm._ssrEscape("\n        " + _vm._s(_vm.user.firstName) + " " + _vm._s(_vm.user.lastName) + "\n      ") + "</div></div> <div" + _vm._ssrClass("au-user-popover__status", {
    online: _vm.user.isOnline
  }) + " data-v-17e8d5ea></div>")], 2), _vm._ssrNode(" <div class=\"au-user-popover__right\" data-v-17e8d5ea></div>")], 2);
};

var __vue_staticRenderFns__$4 = [];
/* style */

var __vue_inject_styles__$4 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-17e8d5ea_0", {
    source: ".au-user-popover[data-v-17e8d5ea]{position:relative;display:flex;justify-content:space-between;width:210px;padding:2px;background-color:#fff;border-radius:4px}.au-user-popover__status[data-v-17e8d5ea]::before{content:\"\";position:absolute;bottom:-1px;left:-1px;background-color:#b2b8c4;border-radius:50%;border:2px solid #fff;width:12px;height:12px;z-index:2}.au-user-popover__status.online[data-v-17e8d5ea]::before{background-color:#a2e118}.au-user-popover__left[data-v-17e8d5ea]{position:relative;display:flex;align-items:center;justify-content:space-between}.au-user-popover__avatar[data-v-17e8d5ea]{position:relative;border-radius:6px 0 0 6px;overflow:hidden;width:60px;min-width:60px;height:60px;background:#f0f4fb}.au-user-popover__avatar .au-icon[data-v-17e8d5ea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);color:#cfdbe8}.au-user-popover__avatar img[data-v-17e8d5ea]{width:100%}.au-user-popover__info[data-v-17e8d5ea]{padding:12px;width:calc(100% - 60px)}.au-user-popover__info-name[data-v-17e8d5ea]{font-family:Ruda,sans-serif;font-weight:800;font-size:12px;line-height:16px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$4 = "data-v-17e8d5ea";
/* module identifier */

var __vue_module_identifier__$2 = "data-v-17e8d5ea";
/* functional template */

var __vue_is_functional_template__$4 = false;
/* style inject shadow dom */

var __vue_component__$4 = /*#__PURE__*/normalizeComponent$2({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$2, false, undefined, createInjectorSSR, undefined);

var __vue_component__$5 = __vue_component__$4;//
var script$3 = {
  name: 'info-popover',
  components: {
    VPopover: VPopover
  },
  data: function data() {
    return {
      showInnerPopover: null
    };
  },
  props: {
    blockedTransitions: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    placement: {
      type: String,
      default: 'bottom'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    showPopover: function showPopover(key) {
      this.showInnerPopover = key;
    },
    closePopover: function closePopover(key) {
      this.showInnerPopover = key;
    }
  }
};/* script */
var __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_c('v-popover', {
    class: _vm.$options.name,
    attrs: {
      "trigger": "hover",
      "placement": _vm.placement,
      "disabled": _vm.disabled
    }
  }, [_c('au-icon', {
    staticClass: "block-rights-tip icon",
    attrs: {
      "icon": "mdi-eye",
      "size": 24
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "block-rights-tip__popover",
    attrs: {
      "slot": "popover"
    },
    slot: "popover"
  }, [_c('span', [_vm._v("Недоступные действия")]), _vm._v(" "), _vm._l(_vm.blockedTransitions, function (data, key) {
    return _c('div', {
      key: key,
      staticClass: "block-rights-tip__item",
      on: {
        "mouseenter": function mouseenter($event) {
          return _vm.showPopover(key);
        },
        "mouseleave": function mouseleave($event) {
          return _vm.closePopover(null);
        }
      }
    }, [_vm._v("\n        " + _vm._s(data.transition.title) + "\n        "), _c('au-icon', {
      staticClass: "block-rights-lock icon",
      attrs: {
        "icon": "icon-lock",
        "size": 14
      }
    }), _vm._v(" "), data.messages ? _c('div', {
      class: ['block-rights-tip__item__message', {
        active: _vm.showInnerPopover === key
      }]
    }, _vm._l(data.messages, function (message, key) {
      return _c('p', {
        key: key
      }, [_vm._v("\n            " + _vm._s(message) + "\n          ")]);
    }), 0) : _vm._e()], 1);
  })], 2)], 1)], 1);
};

var __vue_staticRenderFns__$3 = [];
/* style */

var __vue_inject_styles__$3 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-1037b4c9_0", {
    source: ".block-rights-tip__popover{padding-top:7px;font-size:14px}.block-rights-tip__popover span{display:block;text-align:center;padding:0 15px 7px 15px;border-bottom:1px solid #e0e8f0}.info-popover>.trigger{display:flex!important}",
    map: undefined,
    media: undefined
  }), inject("data-v-1037b4c9_1", {
    source: ".block-rights-tip[data-v-1037b4c9]{fill:#3f6ada;margin-left:5px;cursor:pointer;transition:filter .2s ease-in-out,transform .1s ease-in-out}.block-rights-tip[data-v-1037b4c9]:hover{filter:opacity(1.2);transform:scale(1.2)}.block-rights-lock[data-v-1037b4c9]{fill:#9db9d1;margin-left:10px;transition:fill .2s ease-in-out}.block-rights-tip__item[data-v-1037b4c9]{position:relative;display:flex;align-items:center;justify-content:space-between;color:#b2b8c4;padding:7px 15px;border-bottom:1px solid #e0e8f0}.block-rights-tip__item[data-v-1037b4c9]:hover{background:#f0f4fb;cursor:default}.block-rights-tip__item:hover .block-rights-lock[data-v-1037b4c9]{fill:#4672e3}.block-rights-tip__item[data-v-1037b4c9]:last-child{border-bottom:unset}.block-rights-tip__item__message[data-v-1037b4c9]{position:absolute;left:-320px;max-width:300px;border-radius:4px;padding:10px;background:#2a3f64;opacity:0;visibility:hidden;transition:all .2s ease-in-out}.block-rights-tip__item__message[data-v-1037b4c9]:before{display:block;content:\"\";position:absolute;right:-10px;top:50%;transform:translateY(-50%);width:0;height:0;border-style:solid;border-width:10px 0 10px 10px;border-color:transparent transparent transparent #2a3f64}.block-rights-tip__item__message p[data-v-1037b4c9]{color:#f0f4fb}.block-rights-tip__item__message.active[data-v-1037b4c9]{opacity:1;visibility:visible}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$3 = "data-v-1037b4c9";
/* module identifier */

var __vue_module_identifier__$1 = "data-v-1037b4c9";
/* functional template */

var __vue_is_functional_template__$3 = false;
/* style inject shadow dom */

var __vue_component__$2 = /*#__PURE__*/normalizeComponent$2({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$1, false, undefined, createInjectorSSR, undefined);

var __vue_component__$3 = __vue_component__$2;/**
    * Verte v0.0.12
    * (c) 2019 Baianat
    * @license MIT
    */
/**
  * color-fns v0.0.10
  * (c) 2019 Baianat
  * @license MIT
  */
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) { descriptor.writable = true; }
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) { _defineProperties(Constructor.prototype, protoProps); }
  if (staticProps) { _defineProperties(Constructor, staticProps); }
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) { _setPrototypeOf(subClass, superClass); }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) { break; }
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) { return; }
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function getColorModel(color) {
  if (_typeof(color) === 'object' && color.model) {
    return color.model;
  }

  if (color.slice(0, 1) === '#' && (color.length === 4 || color.length === 7)) {
    return 'hex';
  }

  if (color.slice(0, 1) === '#' && (color.length === 6 || color.length === 9)) {
    return 'hex';
  }

  if (color.slice(0, 4).toUpperCase() === 'RGBA') {
    return 'rgb';
  }

  if (color.slice(0, 3).toUpperCase() === 'RGB') {
    return 'rgb';
  }

  if (color.slice(0, 4).toUpperCase() === 'HSLA') {
    return 'hsl';
  }

  if (color.slice(0, 3).toUpperCase() === 'HSL') {
    return 'hsl';
  }

  return false;
}

function hexNumToDec(hexNum) {
  if (isNaN(parseInt(hexNum, 16))) {
    return 0;
  }

  return parseInt(hexNum, 16);
}

function isBetween(lb, ub) {
  return function (value) {
    return value >= lb && value <= ub;
  };
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function mixValue(val1, val2) {
  var ratio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.5;
  return Number((val1 * (1 - ratio) + val2 * ratio).toFixed(2));
}
function isValidAlpha(alpha) {
  return !(alpha === undefined || isNaN(alpha) || alpha < 0 || alpha > 1);
}

var Color =
/*#__PURE__*/
function () {
  function Color(components) {
    var _this = this;

    _classCallCheck(this, Color);

    this.invalid = !this.validate(components);

    if (!this.invalid) {
      Object.keys(components).forEach(function (c) {
        _this[c] = components[c];
      });
    }

    this.init();
  }

  _createClass(Color, [{
    key: "init",
    value: function init() {}
  }, {
    key: "validate",
    value: function validate(components) {
      return !!components && _typeof(components) === 'object';
    }
  }]);

  return Color;
}();
var RgbColor =
/*#__PURE__*/
function (_Color) {
  _inherits(RgbColor, _Color);

  function RgbColor() {
    _classCallCheck(this, RgbColor);

    return _possibleConstructorReturn(this, _getPrototypeOf(RgbColor).apply(this, arguments));
  }

  _createClass(RgbColor, [{
    key: "validate",
    value: function validate(components) {
      if (!_get(_getPrototypeOf(RgbColor.prototype), "validate", this).call(this, components)) {
        return false;
      }

      var isInRange = isBetween(0, 255);
      return isInRange(components.red) && isInRange(components.green) && isInRange(components.blue);
    }
  }, {
    key: "init",
    value: function init() {
      this.model = 'rgb';
      this.alpha = isValidAlpha(this.alpha) ? this.alpha : 1;
    }
  }, {
    key: "toString",
    value: function toString() {
      if (this.invalid) {
        return 'Invalid Color';
      }

      if (isBetween(0, 0.999)(this.alpha)) {
        return "rgba(".concat(this.red, ",").concat(this.green, ",").concat(this.blue, ",").concat(this.alpha, ")");
      }

      return "rgb(".concat(this.red, ",").concat(this.green, ",").concat(this.blue, ")");
    }
  }]);

  return RgbColor;
}(Color);
var HslColor =
/*#__PURE__*/
function (_Color2) {
  _inherits(HslColor, _Color2);

  function HslColor() {
    _classCallCheck(this, HslColor);

    return _possibleConstructorReturn(this, _getPrototypeOf(HslColor).apply(this, arguments));
  }

  _createClass(HslColor, [{
    key: "validate",
    value: function validate(components) {
      if (!_get(_getPrototypeOf(HslColor.prototype), "validate", this).call(this, components)) {
        return false;
      }

      var isPercentage = isBetween(0, 100);
      return isBetween(0, 360)(components.hue) && isPercentage(components.lum) && isPercentage(components.sat);
    }
  }, {
    key: "init",
    value: function init() {
      this.model = 'hsl';
      this.alpha = isValidAlpha(this.alpha) ? this.alpha : 1;
    }
  }, {
    key: "toString",
    value: function toString() {
      if (this.invalid) {
        return 'Invalid Color';
      }

      if (isBetween(0, 0.999)(this.alpha)) {
        return "hsla(".concat(this.hue, ",").concat(this.sat, "%,").concat(this.lum, "%,").concat(this.alpha, ")");
      }

      return "hsl(".concat(this.hue, ",").concat(this.sat, "%,").concat(this.lum, "%)");
    }
  }]);

  return HslColor;
}(Color);
var HexColor =
/*#__PURE__*/
function (_Color3) {
  _inherits(HexColor, _Color3);

  function HexColor() {
    _classCallCheck(this, HexColor);

    return _possibleConstructorReturn(this, _getPrototypeOf(HexColor).apply(this, arguments));
  }

  _createClass(HexColor, [{
    key: "validate",
    value: function validate(components) {
      if (!_get(_getPrototypeOf(HexColor.prototype), "validate", this).call(this, components)) {
        return false;
      }

      return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test("#".concat(components.red).concat(components.green).concat(components.blue));
    }
  }, {
    key: "init",
    value: function init() {
      this.model = 'hex';
      this.alpha = this.alpha !== undefined ? this.alpha : 'ff';
    }
  }, {
    key: "toString",
    value: function toString() {
      if (this.invalid) {
        return 'Invalid Color';
      }

      if (isBetween(0, 0.999)(hexNumToDec(this.alpha) / 255)) {
        return "#".concat(this.red).concat(this.green).concat(this.blue).concat(this.alpha);
      }

      return "#".concat(this.red).concat(this.green).concat(this.blue);
    }
  }]);

  return HexColor;
}(Color);

var Colors = /*#__PURE__*/Object.freeze({
  Color: Color,
  RgbColor: RgbColor,
  HslColor: HslColor,
  HexColor: HexColor
});

function parseRgb(rgb) {
  if (_typeof(rgb) === 'object') {
    return rgb;
  } // will consider rgb/rgba color prefix as a valid input color
  // while the output will be a valid web colors
  // valid input colors examples 'rgb(100, 0, 0, 0.5)', 'rgba(0, 0, 0)'
  // the output for the inputted examples 'rgba(100, 0, 0, 0.5)', 'rgb(0, 0, 0)'


  var match = rgb.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,*\s*(\d*(?:\.\d+)*)*\)/i);

  if (!match || match.length < 4) {
    return new RgbColor();
  }

  return new RgbColor({
    red: Number(match[1]),
    green: Number(match[2]),
    blue: Number(match[3]),
    alpha: Number(match[4])
  });
}

function expandHexShorthand(hex) {
  var regex = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])*$/i;

  if ((hex.length === 5 || hex.length === 4) && regex.test(hex)) {
    hex = hex.replace(regex, function (m, r, g, b, a) {
      return "#".concat(r).concat(r).concat(g).concat(g).concat(b).concat(b).concat(a ? "".concat(a).concat(a) : '');
    });
  }

  return hex;
}

function parseHex(hex) {
  if (_typeof(hex) === 'object') {
    return hex;
  }

  var expanded = expandHexShorthand(hex);
  var match = expanded.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})*/i);

  if (!match || match.length < 4) {
    return new HexColor();
  }

  return new HexColor({
    hex: expanded,
    red: match[1],
    green: match[2],
    blue: match[3],
    alpha: match[4]
  });
}

function parseHsl(hsl) {
  if (_typeof(hsl) === 'object') {
    return hsl;
  } // will consider hsl/hsla color prefix as a valid input color
  // while the output will be a valid web colors
  // valid input colors examples 'hsl(255, 100%, 50%, 0.5)', 'hsla(100, 100%, 50%)'
  // the output for the inputted examples 'hsla(255, 100%, 50%, 0.5)', 'hsl(100, 100%, 50%)'


  var match = hsl.match(/^hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,*\s*(\d*(?:\.\d+)*)*\)/i);

  if (!match || match.length < 4) {
    return new HslColor();
  }

  return new HslColor({
    hue: Number(match[1]),
    sat: Number(match[2]),
    lum: Number(match[3]),
    alpha: Number(match[4])
  });
}

/**
 * Checks if the given color string is valid (parsable).
 *
 * @param {String} color The color string to be checked.
 */

function isValidColor(color) {
  var model = getColorModel(color);

  if (model === 'rgb') {
    return !parseRgb(color).invalid;
  }

  if (model === 'hex') {
    return !parseHex(color).invalid;
  }

  if (model === 'hsl') {
    return !parseHsl(color).invalid;
  }

  return false;
}

function decNumToHex(decNum) {
  decNum = Math.floor(decNum);

  if (isNaN(decNum)) {
    return '00';
  }

  return ('0' + decNum.toString(16)).slice(-2);
}

function rgbToHex(rgb) {
  if (!rgb) {
    return new HexColor();
  }

  rgb = parseRgb(rgb);
  var _ref = [decNumToHex(rgb.red), decNumToHex(rgb.green), decNumToHex(rgb.blue), rgb.alpha ? decNumToHex(rgb.alpha * 255) : null],
      rr = _ref[0],
      gg = _ref[1],
      bb = _ref[2],
      aa = _ref[3];
  return new HexColor({
    red: rr,
    green: gg,
    blue: bb,
    alpha: aa || 'ff'
  });
}

function rgb2Hsl(rgb) {
  if (!rgb) {
    return new HslColor();
  }

  rgb = parseRgb(rgb); // Convert the RGB values to the range 0-1

  var _ref = [rgb.red / 255, rgb.green / 255, rgb.blue / 255, rgb.alpha],
      red = _ref[0],
      green = _ref[1],
      blue = _ref[2],
      alpha = _ref[3];
  var hue = 0,
      sat = 0,
      lum = 0; // Find the minimum and maximum values of R, G and B.

  var min = Math.min(red, green, blue);
  var max = Math.max(red, green, blue); // Calculate the lightness value

  lum = (min + max) / 2; // Calculate the saturation.

  if (min !== max) {
    sat = lum > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min);
  } // calculate the hue


  if (red >= max && min !== max) {
    hue = 60 * ((green - blue) / (max - min));
  }

  if (green >= max && min !== max) {
    hue = 60 * (2.0 + (blue - red) / (max - min));
  }

  if (blue >= max && min !== max) {
    hue = 60 * (4.0 + (red - green) / (max - min));
  } // normalize values


  hue = hue < 0 ? Math.floor(hue + 360) : Math.floor(hue);
  sat = Math.floor(sat * 100);
  lum = Math.floor(lum * 100);
  return new HslColor({
    hue: hue,
    sat: sat,
    lum: lum,
    alpha: alpha
  });
}

function hexToRgb(hex) {
  if (!hex) {
    return new RgbColor();
  }

  var _parseHex = parseHex(hex),
      red = _parseHex.red,
      green = _parseHex.green,
      blue = _parseHex.blue,
      alpha = _parseHex.alpha;

  return new RgbColor({
    red: hexNumToDec(red),
    green: hexNumToDec(green),
    blue: hexNumToDec(blue),
    alpha: alpha === undefined ? 1 : Number((hexNumToDec(alpha) / 255).toFixed(2))
  });
}

function normalizeDecNum(value) {
  return Math.min(Math.max(parseInt(value), 0), 255);
}

function hslToRgb(hsl) {
  if (!hsl) {
    return new RgbColor();
  }
  hsl = parseHsl(hsl);
  var _ref = [hsl.hue / 360, hsl.sat / 100, hsl.lum / 100, hsl.alpha],
      hue = _ref[0],
      sat = _ref[1],
      lgh = _ref[2],
      alpha = _ref[3];
  var red = 0,
      green = 0,
      blue = 0;

  if (sat === 0) {
    red = green = blue = normalizeDecNum(lgh * 255);
  }

  if (sat !== 0) {
    var temp1 = lgh >= 50 ? lgh + sat - lgh * sat : lgh * (1 + sat);
    var temp2 = 2 * lgh - temp1;

    var testHue = function testHue(test) {
      if (test < 0) { test += 1; }
      if (test > 1) { test -= 1; }
      if (test < 1 / 6) { return temp2 + (temp1 - temp2) * 6 * test; }
      if (test < 1 / 2) { return temp1; }
      if (test < 2 / 3) { return temp2 + (temp1 - temp2) * (2 / 3 - test) * 6; }
      return temp2;
    };

    red = normalizeDecNum(255 * testHue(hue + 1 / 3));
    green = normalizeDecNum(255 * testHue(hue));
    blue = normalizeDecNum(255 * testHue(hue - 1 / 3));
  }

  return new RgbColor({
    red: red,
    green: green,
    blue: blue,
    alpha: alpha
  });
}

function hexToHsl(hex) {
  if (!hex) {
    return new HslColor();
  }

  return rgb2Hsl(hexToRgb(hex));
}

function hslToHex(hsl) {
  if (!hsl) {
    return new HexColor();
  }

  return rgbToHex(hslToRgb(hsl));
}

/**
 * Parses the given color string into a RGB color object.
 *
 * @param {String} color The color to be parsed and converted.
 */

function toRgb(color) {
  var model = getColorModel(color);

  if (model === 'hex') {
    return hexToRgb(color);
  }

  if (model === 'hsl') {
    return hslToRgb(color);
  }

  if (model === 'rgb' && typeof color === 'string') {
    return parseRgb(color);
  }

  if (model === 'rgb' && _typeof(color) === 'object') {
    return color;
  }

  return new RgbColor();
}

/**
 * Parses the given color string into a HSL color object.
 *
 * @param {String} color The color to be parsed and converted.
 */

function toHsl(color) {
  var model = getColorModel(color);

  if (model === 'hex') {
    return hexToHsl(color);
  }

  if (model === 'rgb') {
    return rgb2Hsl(color);
  }

  if (model === 'hsl' && typeof color === 'string') {
    return parseHsl(color);
  }

  if (model === 'hsl' && _typeof(color) === 'object') {
    return color;
  }

  return new HslColor();
}

/**
 * Parses the given color string into a Hex color object.
 *
 * @param {String} color The color to be parsed and converted.
 */

function toHex(color) {
  var model = getColorModel(color);

  if (model === 'rgb') {
    return rgbToHex(color);
  }

  if (model === 'hsl') {
    return hslToHex(color);
  }

  if (model === 'hex' && typeof color === 'string') {
    return parseHex(color);
  }

  if (model === 'hex' && _typeof(color) === 'object') {
    return color;
  }

  return new HexColor();
}

function getRandomColor() {
  return "rgb(".concat(getRandomInt(0, 255), ", ").concat(getRandomInt(0, 255), ", ").concat(getRandomInt(0, 255), ")");
}

function mixColors(color1, color2, ratio) {
  color1 = toRgb(color1);
  color2 = toRgb(color2);
  var red = Math.floor(mixValue(color1.red, color2.red, ratio));
  var green = Math.floor(mixValue(color1.green, color2.green, ratio));
  var blue = Math.floor(mixValue(color1.blue, color2.blue, ratio));
  var alpha = mixValue(color1.alpha, color2.alpha, ratio);
  return new RgbColor({
    red: red,
    green: green,
    blue: blue,
    alpha: alpha
  });
}

/**
 * Utilities
 */
function newArray (length, valueSource) {
  var array = [];
  for (var i = 0; i < length; i++) {
    var value = typeof valueSource === 'function' ? valueSource() : valueSource;
    array.push(value);
  }

  return array;
}

function debounce (func, immediate) {
  if ( immediate === void 0 ) immediate = false;

  var timeout;
  return function () {
    var arguments$1 = arguments;

    var later = function () {
      timeout = null;
      if (!immediate) { func.apply(void 0, arguments$1); }
    };
    var callNow = immediate && !timeout;
    window.cancelAnimationFrame(timeout);
    timeout = window.requestAnimationFrame(later);
    if (callNow) { func.apply(void 0, arguments); }
  };
}

function isElementClosest (element, wrapper) {
  while (element !== document && element !== null) {
    if (element === wrapper) { return true; }
    element = element.parentNode;
  }

  return false;
}

function getClosestValue (array, value) {
  return array.reduce(function (prev, curr) {
    return Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev;
  });
}

function getPolarCoords (x, y) {
  return {
    r: Math.sqrt((x * x) + (y * y)),
    theta: Math.atan2(y, x) * 180 / Math.PI
  };
}

function getCartesianCoords (r, theta) {
  return {
    x: r * Math.cos(theta * Math.PI * 2),
    y: r * Math.sin(theta * Math.PI * 2)
  };
}

function warn (message) {
  console.warn(("[Verte]: " + message));
}

function makeListValidator (propName, list) {
  return function (value) {
    var isValid = list.indexOf(value) !== -1;
    if (!isValid && "production" !== 'production') {
      warn(("The \"" + propName + "\" property can be only one of: " + (list.map(function (l) { return "'" + l + "'"; }).join(', ')) + "."));
    }

    return isValid;
  };
}
function getEventCords (event) {
  if (event.type.match(/^touch/i)) {
    var touch = event.touches[0];
    return { x: touch.clientX, y: touch.clientY };
  }
  if (event.type.match(/^mouse/i)) {
    return { x: event.clientX, y: event.clientY };
  }
  return { x: 0, y: 0 };
}

//

var script$1 = {
  name: 'VerteSlider',
  props: {
    gradient: Array,
    classes: Array,
    colorCode: { type: Boolean, default: false },
    editable: { type: Boolean, default: true },
    reverse: { type: Boolean, default: false },
    label: { type: Boolean, default: false },
    trackSlide: { type: Boolean, default: true },
    min: { type: Number, default: 0 },
    max: { type: Number, default: 255 },
    step: { type: Number, default: 1 },
    value: { type: Number, default: 0 },
    handlesValue: { type: Array, default: function () { return [0]; } }
  },
  data: function () { return ({
    fill: {
      translate: 0,
      scale: 0
    },
    multiple: false,
    currentValue: 0,
    handles: [],
    values: []
  }); },
  watch: {
    gradient: function gradient (val) {
      this.initGradient(val);
      this.reloadHandlesColor();
    },
    values: function values () {
      this.multiple = this.values.length > 1;
      this.fill = this.multiple ? false : this.fill || {};
    },
    value: function value (val, oldVal) {
      if (val === oldVal || val === this.currentValue) { return; }

      this.updateValue(this.value, true);
    }
  },
  methods: {
    init: function init () {
      var this$1$1 = this;

      this.$emitInputEvent = debounce(function () {
        this$1$1.$emit('input', this$1$1.currentValue);
      });
      this.multiple = this.values.length > 1;
      this.values = this.handlesValue;
      this.handles = this.handlesValue.map(function (value, index) {
        return { value: value, position: 0, color: '#fff' };
      });
      if (this.values.length === 1) {
        this.values[0] = Number(this.value);
      }
      this.values.sort();

      this.initElements();
      if (this.gradient) {
        this.initGradient(this.gradient);
      }
      this.initEvents();
      this.values.forEach(function (handle, index) {
        this$1$1.activeHandle = index;
        this$1$1.updateValue(handle, true);
      });
    },
    initElements: function initElements () {
      var ref;

      this.wrapper = this.$refs.wrapper;
      this.track = this.$refs.track;
      this.fill = this.$refs.fill;

      this.wrapper.classList.toggle('slider--editable', this.editable);
      this.wrapper.classList.toggle('slider--reverse', this.reverse);
      if (this.classes) {
        (ref = this.wrapper.classList).add.apply(ref, this.classes);
      }
    },
    initGradient: function initGradient (gradient) {
      if (gradient.length > 1) {
        this.fill.style.backgroundImage = "linear-gradient(90deg, " + gradient + ")";
        return;
      }
      this.fill.style.backgroundImage = '';
      this.fill.style.backgroundColor = gradient[0];
      this.handles.forEach(function (handle) {
        handle.style.color = gradient[0];
      });
    },
    handleResize: function handleResize () {
      this.updateWidth();
      this.updateValue(this.currentValue, true);
    },
    initEvents: function initEvents () {
      window.addEventListener('resize', this.handleResize);
    },
    /**
     * fire select events
     */
    select: function select (event) {
      event.preventDefault();
      event.stopPropagation();
      // check if  left mouse is clicked
      if (event.buttons === 2) { return; }

      this.updateWidth();
      this.track.classList.add('slider--dragging');
      this.ticking = false;

      var stepValue = this.getStepValue(event);

      if (this.multiple) {
        var closest = getClosestValue(this.values, stepValue);
        this.activeHandle = this.values.indexOf(closest);
      }
      this.updateValue(stepValue);

      this.tempDrag = this.dragging.bind(this);
      this.tempRelease = this.release.bind(this);
      document.addEventListener('mousemove', this.tempDrag);
      document.addEventListener('touchmove', this.tempDrag);
      document.addEventListener('touchend', this.tempRelease);
      document.addEventListener('mouseup', this.tempRelease);
    },
    /**
     * dragging motion
     */
    dragging: function dragging (event) {
      var this$1$1 = this;

      var stepValue = this.getStepValue(event);
      if (!this.ticking) {
        window.requestAnimationFrame(function () {
          this$1$1.updateValue(stepValue);
          this$1$1.ticking = false;
        });

        this.ticking = true;
      }
    },
    /**
     * release handler
     */
    release: function release () {
      this.track.classList.remove('slider--dragging');
      document.removeEventListener('mousemove', this.tempDrag);
      document.removeEventListener('touchmove', this.tempDrag);
      document.removeEventListener('mouseup', this.tempRelease);
      document.removeEventListener('touchend', this.tempRelease);
    },
    getStepValue: function getStepValue (event) {
      var ref = getEventCords(event);
      var x = ref.x;

      var mouseValue = (x - this.currentX);
      var stepCount = parseInt((mouseValue / this.stepWidth) + 0.5, 10);
      var stepValue = (stepCount * this.step) + this.min;
      if (!this.decimalsCount) {
        return stepValue;
      }
      return Number(stepValue.toFixed(this.decimalsCount));
    },
    updateWidth: function updateWidth () {
      var trackRect = this.track.getBoundingClientRect();
      this.currentX = trackRect.left;
      this.width = trackRect.width;
      this.stepWidth = (this.width / (this.max - this.min)) * this.step;
    },
    /**
     * get the filled area percentage
     * @param  {Object} slider
     * @param  {Number} value
     * @return {Number}
     */
    getPositionPercentage: function getPositionPercentage (value) {
      return ((value - this.min) / (this.max - this.min)).toFixed(2);
    },
    normalizeValue: function normalizeValue (value) {
      if (isNaN(Number(value))) {
        return this.value;
      }
      if (this.multiple) {
        var prevValue = this.values[this.activeHandle - 1] || this.min;
        var nextValue = this.values[this.activeHandle + 1] || this.max;
        value = Math.min(Math.max(Number(value), prevValue), nextValue);
      }
      return Math.min(Math.max(Number(value), this.min), this.max);
    },
    addHandle: function addHandle (value) {
      var closest = getClosestValue(this.values, value);
      var closestIndex = this.values.indexOf(closest);
      var closestValue = this.values[closestIndex];
      var newIndex = closestValue <= value ? closestIndex + 1 : closestIndex;
      this.handles.splice(newIndex, 0, {
        value: value,
        position: 0,
        color: '#fff'
      });
      this.values.splice(newIndex, 0, value);

      this.activeHandle = newIndex;
      this.currentValue = null;
      this.updateValue(value);
    },
    removeHandle: function removeHandle (index) {
      this.handles.splice(index, 1);
      this.values.splice(index, 1);
      this.activeHandle = index === 0 ? index + 1 : index - 1;
    },
    /**
     * get the handle color
     * @param  {Number} positionPercentage
     * @return {Number} handle hex color code
     */
    getHandleColor: function getHandleColor (positionPercentage) {
      var this$1$1 = this;

      var colorCount = this.gradient.length - 1;
      var region = positionPercentage;
      for (var i = 1; i <= colorCount; i++) {
        // check the current zone
        if (region >= ((i - 1) / colorCount) && region <= (i / colorCount)) {
          // get the active color percentage
          var colorPercentage = (region - ((i - 1) / colorCount)) / (1 / colorCount);
          // return the mixed color based on the zone boundary colors
          return mixColors(this$1$1.gradient[i - 1], this$1$1.gradient[i], colorPercentage);
        }
      }
      return 'rgb(0, 0, 0)';
    },
    /**
     * update the slider fill, value and color
     * @param {Number} value
     */

    reloadHandlesColor: function reloadHandlesColor () {
      var this$1$1 = this;

      this.handles.forEach(function (handle, index) {
        var positionPercentage = this$1$1.getPositionPercentage(handle.value);
        var color = this$1$1.getHandleColor(positionPercentage);
        this$1$1.handles[index].color = color.toString();
      });
    },

    updateValue: function updateValue (value, muted) {
      var this$1$1 = this;
      if ( muted === void 0 ) muted = false;

      // if (Number(value) === this.value) return;

      window.requestAnimationFrame(function () {
        var normalized = this$1$1.normalizeValue(value);
        var positionPercentage = this$1$1.getPositionPercentage(normalized);

        if (this$1$1.fill) {
          this$1$1.fill.translate = positionPercentage * this$1$1.width;
          this$1$1.fill.scale = 1 - positionPercentage;
        }

        this$1$1.values[this$1$1.activeHandle] = normalized;
        this$1$1.handles[this$1$1.activeHandle].value = normalized;
        this$1$1.handles[this$1$1.activeHandle].position = positionPercentage * this$1$1.width;
        this$1$1.currentValue = normalized;
        this$1$1.$refs.input.value = this$1$1.currentValue;

        if (this$1$1.gradient) {
          var color = this$1$1.getHandleColor(positionPercentage);
          this$1$1.handles[this$1$1.activeHandle].color = color.toString();
          if (this$1$1.colorCode) {
            this$1$1.currentValue = color;
          }
        }

        if (muted) { return; }
        this$1$1.$emitInputEvent();
      });
    }
  },
  created: function created () {
    var stepSplited = this.step.toString().split('.')[1];
    this.currentValue = this.value;
    this.decimalsCount = stepSplited ? stepSplited.length : 0;
  },
  mounted: function mounted () {
    var this$1$1 = this;

    this.init();
    this.$nextTick(function () {
      this$1$1.updateWidth();
      this$1$1.updateValue(undefined, true);
    });
  },
  destroyed: function destroyed () {
    window.removeEventListener('resize', this.handleResize);
  },
};

/* script */
            var __vue_script__$1 = script$1;
/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { ref: "wrapper", staticClass: "slider" }, [
    _c(
      "div",
      _vm._g(
        { ref: "track", staticClass: "slider__track" },
        _vm.trackSlide ? { mousedown: _vm.select, touchstart: _vm.select } : {}
      ),
      [
        _c("div", { ref: "fill", staticClass: "slider__fill" }),
        _vm._l(_vm.handles, function(handle) {
          return _c(
            "div",
            {
              staticClass: "slider__handle",
              style:
                "transform: translate(" +
                handle.position +
                "px, 0); background-color: " +
                handle.color +
                ";",
              on: { mousedown: _vm.select, touchstart: _vm.select }
            },
            [
              _vm.label
                ? _c("div", { staticClass: "slider__label" }, [
                    _vm._v(_vm._s(handle.value))
                  ])
                : _vm._e()
            ]
          )
        })
      ],
      2
    ),
    _c("input", {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.editable,
          expression: "editable"
        }
      ],
      ref: "input",
      staticClass: "slider__input",
      attrs: { type: _vm.colorCode ? "text" : "number" },
      on: {
        change: function($event) {
          _vm.updateValue($event.target.value);
        }
      }
    })
  ])
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  var __vue_inject_styles__$1 = undefined;
  /* scoped */
  var __vue_scope_id__$1 = undefined;
  /* functional template */
  var __vue_is_functional_template__$1 = false;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    {
      component.__file = "/mnt/c/Users/Abdelrahman/Projects/verte/src/components/Slider.vue";
    }

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject SSR */
  

  
  var Slider = __vue_normalize__(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1);

//

var script$1$1 = {
  name: 'VertePicker',
  components: {
    Slider: Slider
  },
  props: {
    mode: { type: String, default: 'square' },
    edge: { type: Number, default: 250 },
    diameter: { type: Number, default: 180 },
    satSlider: { type: Boolean, default: true },
    alpha: { type: Number, default: 1 },
    value: { type: String, default: '#fff' }
  },
  data: function () { return ({
    currentHue: 0,
    currentSat: 0,
    currentColor: '',
    cursor: {},
    preventUpdating: false,
    preventEcho: false
  }); },
  watch: {
    // handles external changes.
    value: function value (val) {
      if (this.preventUpdating) {
        this.preventUpdating = false;
        return;
      }
      this.handleValue(val, true);
    },
    currentSat: function currentSat () {
      this.updateWheelColors();
      this.updateColor();
    },
    currentHue: function currentHue () {
      this.updateSquareColors();
      this.updateColor();
    }
  },
  methods: {
    initSquare: function initSquare () {
      // setup canvas
      var edge = this.edge;
      this.$refs.canvas.width = edge;
      this.$refs.canvas.height = edge - 100;
      this.ctx = this.$refs.canvas.getContext('2d');
      this.updateSquareColors();
    },
    initWheel: function initWheel () {
      // setup canvas
      this.$refs.canvas.width = this.diameter;
      this.$refs.canvas.height = this.diameter;
      this.ctx = this.$refs.canvas.getContext('2d');

      // draw wheel circle path
      this.circle = {
        path: new Path2D(), // eslint-disable-line
        xCords: this.diameter / 2,
        yCords: this.diameter / 2,
        radius: this.diameter / 2
      };
      this.circle.path.moveTo(this.circle.xCords, this.circle.yCords);
      this.circle.path.arc(
        this.circle.xCords,
        this.circle.yCords,
        this.circle.radius,
        0,
        360
      );
      this.circle.path.closePath();
      this.updateWheelColors();
    },
    // this function calls when the color changed from outside the picker
    handleValue: function handleValue (color, muted) {

      var ref = this.pickerRect;
      var width = ref.width;
      var height = ref.height;
      this.currentColor = toHsl(color);
      // prvent upadtion picker slider for causing
      // echo udationg to the current color value
      this.preventEcho = true;

      if (this.mode === 'wheel') {
        var r = (100 - this.currentColor.lum) * (this.diameter / 200);
        var radius = this.diameter / 2;
        var coords = getCartesianCoords(r, this.currentColor.hue / 360);
        this.cursor = { x: coords.x + radius, y: coords.y + radius };
        this.currentSat = this.currentColor.sat;
      }

      if (this.mode === 'square') {
        var x = (this.currentColor.sat / 100) * width;
        var y = ((100 - this.currentColor.lum) / 100) * height;
        this.cursor = { x: x, y: y };
        this.currentHue = this.currentColor.hue;
      }
    },
    updateCursorPosition: function updateCursorPosition (ref) {
      var x = ref.x;
      var y = ref.y;

      var ref$1 = this.pickerRect;
      var left = ref$1.left;
      var top = ref$1.top;
      var width = ref$1.width;
      var height = ref$1.height;
      var normalized = {
        x: Math.min(Math.max(x - left, 0), width),
        y: Math.min(Math.max(y - top, 0), height)
      };

      if (
        this.mode === 'wheel'&&
        !this.ctx.isPointInPath(this.circle.path, normalized.x, normalized.y)
      ) {
        return;
      }

      this.cursor = normalized;
      this.updateColor();
    },
    // select color and update it to verte component
    // this function calls when the color changed from the picker
    updateColor: function updateColor (muted) {

      if (this.preventEcho) {
        this.preventEcho = false;
        return;
      }

      this.currentColor = this.getCanvasColor();
      this.preventUpdating = true;
      this.$emit('change', this.currentColor);
      this.$emit('input', this.currentColor);
    },
    updateWheelColors: function updateWheelColors () {
      var this$1$1 = this;

      if (!this.circle) { return; }
      var ref = this.pickerRect;
      var width = ref.width;
      var height = ref.height;

      var x = this.circle.xCords;
      var y = this.circle.yCords;
      var radius = this.circle.radius;
      var sat = this.satSlider ? this.currentSat : 100;
      this.ctx.clearRect(0, 0, width, height);

      for (var angle = 0; angle < 360; angle += 1) {
        var gradient = this$1$1.ctx.createRadialGradient(x, y, 0, x, y, radius);
        var startAngle = (angle - 2) * Math.PI / 180;
        var endAngle = (angle + 2) * Math.PI / 180;

        this$1$1.ctx.beginPath();
        this$1$1.ctx.moveTo(x, y);
        this$1$1.ctx.arc(x, y, radius, startAngle, endAngle);
        this$1$1.ctx.closePath();

        gradient.addColorStop(0, ("hsl(" + angle + ", " + sat + "%, 100%)"));
        gradient.addColorStop(0.5, ("hsl(" + angle + ", " + sat + "%, 50%)"));
        gradient.addColorStop(1, ("hsl(" + angle + ", " + sat + "%, 0%)"));
        this$1$1.ctx.fillStyle = gradient;
        this$1$1.ctx.fill();
      }
    },
    updateSquareColors: function updateSquareColors () {
      var ref = this.pickerRect;
      var width = ref.width;
      var height = ref.height;
      this.ctx.clearRect(0, 0, width, height);

      this.ctx.fillStyle = "hsl(" + (this.currentHue) + ", 100%, 50%)";
      this.ctx.fillRect(0, 0, width, height);

      var grdBlack = this.ctx.createLinearGradient(0, 0, width, 0);
      grdBlack.addColorStop(0, "hsl(0, 0%, 50%)");
      grdBlack.addColorStop(1, "hsla(0, 0%, 50%, 0)");
      this.ctx.fillStyle = grdBlack;
      this.ctx.fillRect(0, 0, width, height);

      var grdWhite = this.ctx.createLinearGradient(0, 0, 0, height);
      grdWhite.addColorStop(0, "hsl(0, 0%, 100%)");
      grdWhite.addColorStop(0.5, "hsla(0, 0%, 100%, 0)");
      grdWhite.addColorStop(0.5, "hsla(0, 0%, 0%, 0)");
      grdWhite.addColorStop(1, "hsl(0, 0%, 0%) ");
      this.ctx.fillStyle = grdWhite;
      this.ctx.fillRect(0, 0, width, height);
    },
    getCanvasColor: function getCanvasColor () {
      var ref = this.cursor;
      var x = ref.x;
      var y = ref.y;
      var sat = 0;
      var lum = 0;
      var hue = 0;

      if (this.mode === 'wheel') {
        var radius = this.diameter / 2;
        var xShitft = x - radius;
        var yShitft = (y - radius) * -1;
        var ref$1 = getPolarCoords(xShitft, yShitft);
        var r = ref$1.r;
        var theta = ref$1.theta;
        lum = (radius - r) * 100 / radius;
        hue = !~Math.sign(theta) ? -theta : 360 - theta;
        sat = this.currentSat;
      }

      if (this.mode === 'square') {
        var ref$2 = this.pickerRect;
        var width = ref$2.width;
        var height = ref$2.height;
        sat = x * 100 / width;
        lum = 100 - (y * 100 / height);
        hue = this.currentHue;
      }
    
      return new Colors.HslColor({
        alpha: this.alpha,
        hue: Math.round(hue),
        sat: Math.round(sat),
        lum: Math.round(lum)
      });
    },
    handleSelect: function handleSelect (event) {
      var this$1$1 = this;

      event.preventDefault();
      this.pickerRect = this.$refs.canvas.getBoundingClientRect();
      this.updateCursorPosition(getEventCords(event));
      var tempFunc = function (evnt) {
        window.requestAnimationFrame(function () {
          this$1$1.updateCursorPosition(getEventCords(evnt));
        });
      };
      var handleRelase = function () {
        document.removeEventListener('mousemove', tempFunc);
        document.removeEventListener('touchmove', tempFunc);
        document.removeEventListener('mouseup', handleRelase);
        document.removeEventListener('touchend', handleRelase);
      };
      document.addEventListener('mousemove', tempFunc);
      document.addEventListener('touchmove', tempFunc);
      document.addEventListener('mouseup', handleRelase);
      document.addEventListener('touchend', handleRelase);
    }
  },
  mounted: function mounted () {
    var this$1$1 = this;

    this.pickerRect = this.$refs.canvas.getBoundingClientRect();
    if (this.mode === 'wheel') {
      this.initWheel();
    }
    if (this.mode === 'square') {
      this.initSquare();
    }
    this.$nextTick(function () {
      this$1$1.handleValue(this$1$1.value);
    });
  }
};

/* script */
            var __vue_script__$1$1 = script$1$1;
/* template */
var __vue_render__$1$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      ref: "picker",
      staticClass: "verte-picker",
      class: "verte-picker--" + _vm.mode
    },
    [
      _c("div", { ref: "origin", staticClass: "verte-picker__origin" }, [
        _c("canvas", {
          ref: "canvas",
          staticClass: "verte-picker__canvas",
          on: { mousedown: _vm.handleSelect, touchstart: _vm.handleSelect }
        }),
        _c("div", {
          ref: "cursor",
          staticClass: "verte-picker__cursor",
          style:
            "transform: translate3d(" +
            _vm.cursor.x +
            "px, " +
            _vm.cursor.y +
            "px, 0)"
        })
      ]),
      _vm.mode === "square"
        ? _c("slider", {
            staticClass: "verte-picker__slider",
            attrs: {
              gradient: [
                "#f00",
                "#ff0",
                "#0f0",
                "#0ff",
                "#00f",
                "#f0f",
                "#f00"
              ],
              editable: false,
              max: 360
            },
            model: {
              value: _vm.currentHue,
              callback: function($$v) {
                _vm.currentHue = $$v;
              },
              expression: "currentHue"
            }
          })
        : _vm._e(),
      _vm.mode === "wheel"
        ? _c("slider", {
            staticClass: "verte-picker__slider",
            attrs: {
              gradient: [
                "hsl(" +
                  _vm.currentColor.hue +
                  ",0%," +
                  _vm.currentColor.lum +
                  "%)",
                "hsl(" +
                  _vm.currentColor.hue +
                  ",100%," +
                  _vm.currentColor.lum +
                  "%)"
              ],
              editable: false,
              max: 100
            },
            model: {
              value: _vm.currentSat,
              callback: function($$v) {
                _vm.currentSat = $$v;
              },
              expression: "currentSat"
            }
          })
        : _vm._e()
    ],
    1
  )
};
var __vue_staticRenderFns__$1$1 = [];
__vue_render__$1$1._withStripped = true;

  /* style */
  var __vue_inject_styles__$1$1 = undefined;
  /* scoped */
  var __vue_scope_id__$1$1 = undefined;
  /* functional template */
  var __vue_is_functional_template__$1$1 = false;
  /* component normalizer */
  function __vue_normalize__$1(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    {
      component.__file = "/mnt/c/Users/Abdelrahman/Projects/verte/src/components/Picker.vue";
    }

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject SSR */
  

  
  var Picker = __vue_normalize__$1(
    { render: __vue_render__$1$1, staticRenderFns: __vue_staticRenderFns__$1$1 },
    __vue_inject_styles__$1$1,
    __vue_script__$1$1,
    __vue_scope_id__$1$1,
    __vue_is_functional_template__$1$1);

var MAX_COLOR_HISTROY = 6;
var Vue;
var store;

function initStore (_Vue, opts) {
  if (store) {
    return store;
  }

  opts = opts || {};
  var recentColors = opts.recentColors;
  var onRecentColorsChange = opts.onRecentColorsChange;

  Vue = _Vue;
  store = new Vue({
    data: function () { return ({
      recentColors: recentColors || newArray(6, getRandomColor)
    }); },
    methods: {
      addRecentColor: function addRecentColor (newColor) {
        if (this.recentColors.includes(newColor)) {
          return;
        }

        if (this.recentColors.length >= MAX_COLOR_HISTROY) {
          this.recentColors.pop();
        }

        this.recentColors.unshift(newColor);
        if (onRecentColorsChange) {
          onRecentColorsChange(this.recentColors);
        }
      }
    }
  });

  return store;
}

//

var script$2 = {
  name: 'Verte',
  components: {
    Picker: Picker,
    Slider: Slider
  },
  props: {
    picker: {
      type: String,
      default: 'square',
      validator: makeListValidator('picker', ['wheel', 'square'])
    },
    value: {
      type: String,
      default: '#000'
    },
    model: {
      type: String,
      default: 'hsl',
      validator: makeListValidator('model', ['rgb', 'hex', 'hsl'])
    },
    display: {
      type: String,
      default: 'picker',
      validator: makeListValidator('display', ['picker', 'widget'])
    },
    menuPosition: {
      type: String,
      default: 'bottom',
      validator: makeListValidator('menuPosition', ['top', 'bottom', 'left', 'right', 'center'])
    },
    showHistory: {
      type: Boolean,
      default: true
    },
    colorHistory: {
      type: Array,
      default: null
    },
    enableAlpha: {
      type: Boolean,
      default: true
    },
    rgbSliders: {
      type: Boolean,
      default: false
    },
    draggable: {
      type: Boolean,
      default: true
    }
  },
  data: function () { return ({
    isMenuActive: true,
    isLoading: true,
    rgb: toRgb('#000'),
    hex: toHex('#000'),
    hsl: toHsl('#000'),
    delta: { x: 0, y: 0 },
    currentModel: '',
    internalColorHistory: []
  }); },
  computed: {
    $_verteStore: function $_verteStore () {
      // Should return the store singleton instance.
      return initStore();
    },
    historySource: function historySource () {
      if (this.colorHistory) {
        return this.internalColorHistory;
      }

      return this.$_verteStore.recentColors;
    },
    currentColor: {
      get: function get () {
        if (!this[this.model] && "production" !== 'production') {
          warn(("You are using a non-supported color model: \"" + (this.model) + "\", the supported models are: \"rgb\", \"hsl\" and \"hex\"."));
          return "rgb(0, 0, 0)";
        }

        return this[this.model].toString();
      },
      set: function set (val) {
        this.selectColor(val);
      }
    },
    alpha: {
      get: function get () {
        if (!this[this.model]) {
          return 1;
        }

        if (isNaN(this[this.model].alpha)) {
          return 1;
        }

        return this[this.model].alpha;
      },
      set: function set (val) {
        this[this.model].alpha = val;
        this.selectColor(this[this.model]);
      }
    },
    menuOnly: function menuOnly () {
      return this.display === 'widget';
    }
  },
  watch: {
    value: function value (val, oldVal) {
      if (val === oldVal || val === this.currentColor) { return; }

      // value was updated externally.
      this.selectColor(val);
    },
    rgb: {
      handler: function handler (val) {
        this.hex = toHex(val.toString());
        this.$emit('input', this.currentColor);
      },
      deep: true
    },
    colorHistory: function colorHistory (val) {
      if (this.internalColorHistory !== val) {
        this.internalColorHistory = [].concat( val );
      }
    }
  },
  beforeCreate: function beforeCreate () {
    // initialize the store early, _base is the vue constructor.
    initStore(this.$options._base);
  },
  // When used as a target for Vue.use
  install: function install (Vue, opts) {
    initStore(Vue, opts);
    Vue.component('Verte', this); // install self
  },
  created: function created () {
    if (this.colorHistory) {
      this.internalColorHistory = [].concat( this.colorHistory );
    }

    this.selectColor(this.value || '#000', true);
    this.currentModel = this.model;
  },
  mounted: function mounted () {
    var this$1$1 = this;

    // give sliders time to
    // calculate its visible width
    this.$nextTick(function () {
      this$1$1.isLoading = false;
      if (this$1$1.menuOnly) { return; }
      this$1$1.isMenuActive = false;
    });
  },
  methods: {
    selectColor: function selectColor (color, muted) {
      if ( muted === void 0 ) muted = false;

      if (!isValidColor(color)) { return; }

      this.rgb = toRgb(color);
      this.hex = toHex(color);
      this.hsl = toHsl(color);

      if (muted) { return; }
      this.$emit('input', this.currentColor);
    },
    switchModel: function switchModel () {
      var models = ['hex', 'rgb', 'hsl'];
      var indx = models.indexOf(this.currentModel);
      this.currentModel = models[indx + 1] || models[0];
    },
    handleMenuDrag: function handleMenuDrag (event) {
      var this$1$1 = this;

      if (event.button === 2) { return; }
      event.preventDefault();

      var lastMove = Object.assign({}, this.delta);
      var startPosition = getEventCords(event);

      var handleDragging = function (evnt) {
        window.requestAnimationFrame(function () {
          var endPosition = getEventCords(evnt);

          this$1$1.delta.x = lastMove.x + endPosition.x - startPosition.x;
          this$1$1.delta.y = lastMove.y + endPosition.y - startPosition.y;
        });
      };
      var handleRelase = function () {
        document.removeEventListener('mousemove', handleDragging);
        document.removeEventListener('mouseup', handleRelase);
        document.removeEventListener('touchmove', handleDragging);
        document.removeEventListener('touchup', handleRelase);
      };
      document.addEventListener('mousemove', handleDragging);
      document.addEventListener('mouseup', handleRelase);
      document.addEventListener('touchmove', handleDragging);
      document.addEventListener('touchup', handleRelase);
    },
    submit: function submit () {
      this.$emit('beforeSubmit', this.currentColor);
      this.addColorToHistory(this.currentColor);
      this.$emit('input', this.currentColor);
      this.$emit('submit', this.currentColor);
    },
    addColorToHistory: function addColorToHistory (color) {
      if (this.colorHistory) {
        if (this.internalColorHistory.length >= MAX_COLOR_HISTROY) {
          this.internalColorHistory.pop();
        }

        this.internalColorHistory.unshift(color);
        this.$emit('update:colorHistory', this.internalColorHistory);
        return;
      }

      this.$_verteStore.addRecentColor(this.currentColor);
    },
    inputChanged: function inputChanged (event, value) {
      var el = event.target;
      if (this.currentModel === 'hex') {
        this.selectColor(el.value);
        return;
      }
      var normalized = Math.min(Math.max(el.value, el.min), el.max);
      this[this.currentModel][value] = normalized;
      this.selectColor(this[this.currentModel]);
    },
    toggleMenu: function toggleMenu () {
      if (this.isMenuActive) {
        this.closeMenu();
        return;
      }
      this.openMenu();
    },
    closeMenu: function closeMenu () {
      this.isMenuActive = false;
      document.removeEventListener('mousedown', this.closeCallback);
      this.$emit('close', this.currentColor);
    },
    openMenu: function openMenu () {
      var this$1$1 = this;

      this.isMenuActive = true;
      this.closeCallback = function (evnt) {
        if (
          !isElementClosest(evnt.target, this$1$1.$refs.menu) &&
          !isElementClosest(evnt.target, this$1$1.$refs.guide)
        ) {
          this$1$1.closeMenu();
        }
      };
      document.addEventListener('mousedown', this.closeCallback);
    }
  }
};

/* script */
            var __vue_script__$2 = script$2;
/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "verte", class: { "verte--loading": _vm.isLoading } },
    [
      !_vm.menuOnly
        ? _c(
            "button",
            {
              ref: "guide",
              staticClass: "verte__guide",
              style:
                "color: " +
                _vm.currentColor +
                "; fill: " +
                _vm.currentColor +
                ";",
              attrs: { type: "button" },
              on: { click: _vm.toggleMenu }
            },
            [
              _vm._t("default", [
                _c(
                  "svg",
                  {
                    staticClass: "verte__icon",
                    attrs: { viewBox: "0 0 24 24" }
                  },
                  [
                    _c(
                      "pattern",
                      {
                        attrs: {
                          id: "checkerboard",
                          width: "6",
                          height: "6",
                          patternUnits: "userSpaceOnUse",
                          fill: "FFF"
                        }
                      },
                      [
                        _c("rect", {
                          attrs: {
                            fill: "#7080707f",
                            x: "0",
                            width: "3",
                            height: "3",
                            y: "0"
                          }
                        }),
                        _c("rect", {
                          attrs: {
                            fill: "#7080707f",
                            x: "3",
                            width: "3",
                            height: "3",
                            y: "3"
                          }
                        })
                      ]
                    ),
                    _c("circle", {
                      attrs: {
                        cx: "12",
                        cy: "12",
                        r: "12",
                        fill: "url(#checkerboard)"
                      }
                    }),
                    _c("circle", { attrs: { cx: "12", cy: "12", r: "12" } })
                  ]
                )
              ])
            ],
            2
          )
        : _vm._e(),
      _c(
        "div",
        {
          staticClass: "verte__menu-origin",
          class: [
            "verte__menu-origin--" + _vm.menuPosition,
            {
              "verte__menu-origin--static": _vm.menuOnly,
              "verte__menu-origin--active": _vm.isMenuActive
            }
          ]
        },
        [
          _c(
            "div",
            {
              ref: "menu",
              staticClass: "verte__menu",
              style:
                "transform: translate(" +
                _vm.delta.x +
                "px, " +
                _vm.delta.y +
                "px)",
              attrs: { tabindex: "-1" }
            },
            [
              !_vm.menuOnly
                ? _c(
                    "button",
                    {
                      staticClass: "verte__close",
                      attrs: { type: "button" },
                      on: { click: _vm.closeMenu }
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "verte__icon verte__icon--small",
                          attrs: { viewBox: "0 0 24 24" }
                        },
                        [
                          _c("title", [_vm._v("Close Icon")]),
                          _c("path", {
                            attrs: {
                              d:
                                "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                            }
                          })
                        ]
                      )
                    ]
                  )
                : _vm._e(),
              _vm.draggable && !_vm.menuOnly
                ? _c("div", {
                    staticClass: "verte__draggable",
                    on: {
                      mousedown: _vm.handleMenuDrag,
                      touchstart: _vm.handleMenuDrag
                    }
                  })
                : _vm._e(),
              _c("Picker", {
                attrs: { mode: _vm.picker, alpha: _vm.alpha },
                model: {
                  value: _vm.currentColor,
                  callback: function($$v) {
                    _vm.currentColor = $$v;
                  },
                  expression: "currentColor"
                }
              }),
              _c(
                "div",
                { staticClass: "verte__controller" },
                [
                  _vm.enableAlpha
                    ? _c("Slider", {
                        attrs: {
                          gradient: [
                            "rgba(" +
                              _vm.rgb.red +
                              ", " +
                              _vm.rgb.green +
                              ", " +
                              _vm.rgb.blue +
                              ", 0)",
                            "rgba(" +
                              _vm.rgb.red +
                              ", " +
                              _vm.rgb.green +
                              ", " +
                              _vm.rgb.blue +
                              ", 1)"
                          ],
                          min: 0,
                          max: 1,
                          step: 0.01,
                          editable: false
                        },
                        model: {
                          value: _vm.alpha,
                          callback: function($$v) {
                            _vm.alpha = $$v;
                          },
                          expression: "alpha"
                        }
                      })
                    : _vm._e(),
                  _vm.rgbSliders
                    ? [
                        _c("Slider", {
                          attrs: {
                            gradient: [
                              "rgb(0," +
                                _vm.rgb.green +
                                "," +
                                _vm.rgb.blue +
                                ")",
                              "rgb(255," +
                                _vm.rgb.green +
                                "," +
                                _vm.rgb.blue +
                                ")"
                            ]
                          },
                          model: {
                            value: _vm.rgb.red,
                            callback: function($$v) {
                              _vm.$set(_vm.rgb, "red", $$v);
                            },
                            expression: "rgb.red"
                          }
                        }),
                        _c("Slider", {
                          attrs: {
                            gradient: [
                              "rgb(" + _vm.rgb.red + ",0," + _vm.rgb.blue + ")",
                              "rgb(" +
                                _vm.rgb.red +
                                ",255," +
                                _vm.rgb.blue +
                                ")"
                            ]
                          },
                          model: {
                            value: _vm.rgb.green,
                            callback: function($$v) {
                              _vm.$set(_vm.rgb, "green", $$v);
                            },
                            expression: "rgb.green"
                          }
                        }),
                        _c("Slider", {
                          attrs: {
                            gradient: [
                              "rgb(" +
                                _vm.rgb.red +
                                "," +
                                _vm.rgb.green +
                                ",0)",
                              "rgb(" +
                                _vm.rgb.red +
                                "," +
                                _vm.rgb.green +
                                ",255)"
                            ]
                          },
                          model: {
                            value: _vm.rgb.blue,
                            callback: function($$v) {
                              _vm.$set(_vm.rgb, "blue", $$v);
                            },
                            expression: "rgb.blue"
                          }
                        })
                      ]
                    : _vm._e(),
                  _c(
                    "div",
                    { staticClass: "verte__inputs" },
                    [
                      _c(
                        "button",
                        {
                          staticClass: "verte__model",
                          attrs: { type: "button" },
                          on: { click: _vm.switchModel }
                        },
                        [_vm._v(_vm._s(_vm.currentModel))]
                      ),
                      _vm.currentModel === "hsl"
                        ? [
                            _c("input", {
                              staticClass: "verte__input",
                              attrs: { type: "number", max: "360", min: "0" },
                              domProps: { value: _vm.hsl.hue },
                              on: {
                                change: function($event) {
                                  _vm.inputChanged($event, "hue");
                                }
                              }
                            }),
                            _c("input", {
                              staticClass: "verte__input",
                              attrs: { type: "number", min: "0", max: "100" },
                              domProps: { value: _vm.hsl.sat },
                              on: {
                                change: function($event) {
                                  _vm.inputChanged($event, "sat");
                                }
                              }
                            }),
                            _c("input", {
                              staticClass: "verte__input",
                              attrs: { type: "number", min: "0", max: "100" },
                              domProps: { value: _vm.hsl.lum },
                              on: {
                                change: function($event) {
                                  _vm.inputChanged($event, "lum");
                                }
                              }
                            })
                          ]
                        : _vm._e(),
                      _vm.currentModel === "rgb"
                        ? [
                            _c("input", {
                              staticClass: "verte__input",
                              attrs: { type: "number", min: "0", max: "255" },
                              domProps: { value: _vm.rgb.red },
                              on: {
                                change: function($event) {
                                  _vm.inputChanged($event, "red");
                                }
                              }
                            }),
                            _c("input", {
                              staticClass: "verte__input",
                              attrs: { type: "number", min: "0", max: "255" },
                              domProps: { value: _vm.rgb.green },
                              on: {
                                change: function($event) {
                                  _vm.inputChanged($event, "green");
                                }
                              }
                            }),
                            _c("input", {
                              staticClass: "verte__input",
                              attrs: { type: "number", min: "0", max: "255" },
                              domProps: { value: _vm.rgb.blue },
                              on: {
                                change: function($event) {
                                  _vm.inputChanged($event, "blue");
                                }
                              }
                            })
                          ]
                        : _vm._e(),
                      _vm.currentModel === "hex"
                        ? [
                            _c("input", {
                              staticClass: "verte__input",
                              attrs: { type: "text" },
                              domProps: { value: _vm.hex },
                              on: {
                                change: function($event) {
                                  _vm.inputChanged($event, "hex");
                                }
                              }
                            })
                          ]
                        : _vm._e(),
                      _c(
                        "button",
                        {
                          staticClass: "verte__submit",
                          attrs: { type: "button" },
                          on: { click: _vm.submit }
                        },
                        [
                          _c("title", [_vm._v("Submit Icon")]),
                          _c(
                            "svg",
                            {
                              staticClass: "verte__icon",
                              attrs: { viewBox: "0 0 24 24" }
                            },
                            [
                              _c("path", {
                                attrs: {
                                  d:
                                    "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                                }
                              })
                            ]
                          )
                        ]
                      )
                    ],
                    2
                  ),
                  _vm.showHistory
                    ? _c(
                        "div",
                        { ref: "recent", staticClass: "verte__recent" },
                        _vm._l(_vm.historySource, function(clr) {
                          return _c("a", {
                            staticClass: "verte__recent-color",
                            style: "color: " + clr,
                            attrs: { role: "button", href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault();
                                _vm.selectColor(clr);
                              }
                            }
                          })
                        })
                      )
                    : _vm._e()
                ],
                2
              )
            ],
            1
          )
        ]
      )
    ]
  )
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  var __vue_inject_styles__$2 = undefined;
  /* scoped */
  var __vue_scope_id__$2 = undefined;
  /* functional template */
  var __vue_is_functional_template__$2 = false;
  /* component normalizer */
  function __vue_normalize__$2(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    {
      component.__file = "/mnt/c/Users/Abdelrahman/Projects/verte/src/components/Verte.vue";
    }

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject SSR */
  

  
  var Verte = __vue_normalize__$2(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2);//
var script = {
  name: 'au-color-picker',
  components: {
    Verte: Verte
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: String,
      default: null
    },
    small: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      showPicker: false,
      containerPosition: {
        x: null,
        y: null
      }
    };
  }
};/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: _vm.$options.name
  }, [_c('au-input', {
    ref: "input",
    attrs: {
      "value": _vm.value,
      "full-width": _vm.fullWidth,
      "small": "",
      "readonly": ""
    },
    on: {
      "click": function click($event) {
        _vm.showPicker = true;
      }
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function fn() {
        return [_vm.value ? _c('div', {
          staticClass: "color-value",
          style: {
            backgroundColor: _vm.value
          }
        }) : _vm._e()];
      },
      proxy: true
    }])
  }), _vm._ssrNode(" "), _vm.showPicker ? _vm._ssrNode("<div class=\"color-picker__container\" data-v-78ce4caa>", "</div>", [_c('verte', {
    attrs: {
      "value": _vm.value,
      "display": "widget",
      "model": "hex"
    },
    on: {
      "input": function input($event) {
        return _vm.$emit('change', $event);
      }
    }
  })], 1) : _vm._e()], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-78ce4caa_0", {
    source: ".au-color-picker[data-v-78ce4caa]{position:relative;overflow:unset;box-sizing:border-box;cursor:pointer}.color-value[data-v-78ce4caa]{position:absolute;left:8px;top:50%;transform:translateY(-50%);display:flex;width:18px;height:18px;border-radius:3px;border:1px solid #fff;background-image:linear-gradient(0deg,rgba(255,255,255,0) 14%,rgba(255,255,255,.5) 100%)}.color-picker__container[data-v-78ce4caa]{position:absolute;top:-6px;left:-6px;z-index:1}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-78ce4caa";
/* module identifier */

var __vue_module_identifier__ = "data-v-78ce4caa";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent$2({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);

var __vue_component__$1 = __vue_component__;// Интерактивные элементы и их части
var components$1=/*#__PURE__*/Object.freeze({__proto__:null,AuIcon: AuIcon,AuButton: __vue_component__$q,AuInput: __vue_component__$o,AuSelect: __vue_component__$m,AuDropdownButton: __vue_component__$k,AuDropdownContentButton: __vue_component__$g,AuSpinner: AuSpinner,AuTooltip: __vue_component__$e,AuTabs: AuTabs,AuTabItem: __vue_component__$b,AuTable: __vue_component__$9,AuPagination: __vue_component__$7,AuUserPopover: __vue_component__$5,AuInfoPopover: __vue_component__$3,AuColorPicker: __vue_component__$1});var install = function installAtlasUiKit(Vue) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()
var components=/*#__PURE__*/Object.freeze({__proto__:null,'default': install,AuIcon: AuIcon,AuButton: __vue_component__$q,AuInput: __vue_component__$o,AuSelect: __vue_component__$m,AuDropdownButton: __vue_component__$k,AuDropdownContentButton: __vue_component__$g,AuSpinner: AuSpinner,AuTooltip: __vue_component__$e,AuTabs: AuTabs,AuTabItem: __vue_component__$b,AuTable: __vue_component__$9,AuPagination: __vue_component__$7,AuUserPopover: __vue_component__$5,AuInfoPopover: __vue_component__$3,AuColorPicker: __vue_component__$1});// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)

Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== 'default') {
    install[componentName] = component;
  }
});module.exports=install;