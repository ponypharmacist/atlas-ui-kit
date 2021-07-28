'use strict';function _defineProperty(obj, key, value) {
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
//
//
//
//
//
var script$3 = {
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
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
var __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: _vm.$options.name,
    style: _vm.containerStyle
  }, [_vm._ssrNode(_vm._ssrList(3, function (i) {
    return "<div" + _vm._ssrClass(null, "bounce" + i) + _vm._ssrStyle(null, _vm.blobStyle, null) + " data-v-81ede83c></div>";
  }))]);
};

var __vue_staticRenderFns__$3 = [];
/* style */

var __vue_inject_styles__$3 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-81ede83c_0", {
    source: ".spinner-dots[data-v-81ede83c]{font-size:0;text-align:center;white-space:nowrap;display:flex;align-items:center;color:inherit}.spinner-dots>div[data-v-81ede83c]{background-color:currentColor;border-radius:100%;display:inline-block;animation:sk-bouncedelay-data-v-81ede83c 1s infinite ease-in-out both}.spinner-dots .bounce1[data-v-81ede83c]{animation-delay:-.3333333333s}.spinner-dots .bounce2[data-v-81ede83c]{animation-delay:-.1666666667s}@-webkit-keyframes sk-bouncedelay-data-v-81ede83c{0%,100%,80%{transform:scale(.37)}40%{transform:scale(.55)}}@keyframes sk-bouncedelay-data-v-81ede83c{0%,100%,80%{transform:scale(.37)}40%{transform:scale(.55)}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$3 = "data-v-81ede83c";
/* module identifier */

var __vue_module_identifier__$3 = "data-v-81ede83c";
/* functional template */

var __vue_is_functional_template__$3 = false;
/* style inject shadow dom */

var __vue_component__$3 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
var script$2 = {
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
var __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "sk-fading-circle",
    class: _vm.$options.name,
    style: _vm.style
  }, [_vm._ssrNode(_vm._ssrList(8, function (i) {
    return "<div" + _vm._ssrClass(null, 'sk-circle sk-circle' + i) + " data-v-1ae830c1></div>";
  }))]);
};

var __vue_staticRenderFns__$2 = [];
/* style */

var __vue_inject_styles__$2 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-1ae830c1_0", {
    source: ".sk-fading-circle[data-v-1ae830c1]{position:relative;width:36px;height:36px;color:currentColor}.sk-fading-circle .sk-circle[data-v-1ae830c1]{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle .sk-circle[data-v-1ae830c1]::before{content:\"\";display:block;margin:0 auto;width:4px;height:4px;overflow:hidden;background-color:currentColor;border-radius:2px;animation:sk-circleFadeDelay-data-v-1ae830c1 .8s infinite ease-in-out both}.sk-fading-circle .sk-circle1[data-v-1ae830c1]{transform:rotate(0)}.sk-fading-circle .sk-circle1[data-v-1ae830c1]::before{animation-delay:-.8s}.sk-fading-circle .sk-circle2[data-v-1ae830c1]{transform:rotate(45deg)}.sk-fading-circle .sk-circle2[data-v-1ae830c1]::before{animation-delay:-.7s}.sk-fading-circle .sk-circle3[data-v-1ae830c1]{transform:rotate(90deg)}.sk-fading-circle .sk-circle3[data-v-1ae830c1]::before{animation-delay:-.6s}.sk-fading-circle .sk-circle4[data-v-1ae830c1]{transform:rotate(135deg)}.sk-fading-circle .sk-circle4[data-v-1ae830c1]::before{animation-delay:-.5s}.sk-fading-circle .sk-circle5[data-v-1ae830c1]{transform:rotate(180deg)}.sk-fading-circle .sk-circle5[data-v-1ae830c1]::before{animation-delay:-.4s}.sk-fading-circle .sk-circle6[data-v-1ae830c1]{transform:rotate(225deg)}.sk-fading-circle .sk-circle6[data-v-1ae830c1]::before{animation-delay:-.3s}.sk-fading-circle .sk-circle7[data-v-1ae830c1]{transform:rotate(270deg)}.sk-fading-circle .sk-circle7[data-v-1ae830c1]::before{animation-delay:-.2s}.sk-fading-circle .sk-circle8[data-v-1ae830c1]{transform:rotate(315deg)}.sk-fading-circle .sk-circle8[data-v-1ae830c1]::before{animation-delay:-.1s}@keyframes sk-circleFadeDelay-data-v-1ae830c1{0%,100%,39%{opacity:0}40%{opacity:1}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$2 = "data-v-1ae830c1";
/* module identifier */

var __vue_module_identifier__$2 = "data-v-1ae830c1";
/* functional template */

var __vue_is_functional_template__$2 = false;
/* style inject shadow dom */

var __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, createInjectorSSR, undefined);var AuSpinner = {
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
        return h(__vue_component__$2, {
          props: props
        });

      case 'dots':
      default:
        return h(__vue_component__$3, {
          props: props
        });
    }
  }
};//
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
      default: null,
      required: true
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
      var style = '';
      if (this.size) style += "width: ".concat(this.size, "px; height: ").concat(this.size, "px;");
      if (this.color) style += "background-color: ".concat(this.color, ";");
      style += "-webkit-mask: url('".concat(this.getIconUrl, "') no-repeat 0 0 / 100% 100%;");
      style += "mask: url('".concat(this.getIconUrl, "') no-repeat 0 0 / 100% 100%;");
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
};/* script */
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
  inject("data-v-1d10a681_0", {
    source: ".au-icon[data-v-1d10a681]{display:inline-block;width:12px;height:12px;min-width:12px;background-color:#000;box-sizing:border-box}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$1 = "data-v-1d10a681";
/* module identifier */

var __vue_module_identifier__$1 = "data-v-1d10a681";
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject shadow dom */

var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, createInjectorSSR, undefined);var script = {
  name: 'au-button',
  components: {
    AuIcon: __vue_component__$1,
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
      default: 'a'
    },
    type: {
      type: String,
      default: 'button'
    },
    // Content
    icon: String,
    label: String,
    // State
    isLoading: Boolean,
    disabled: Boolean,
    // Styling
    link: Boolean,
    small: Boolean,
    large: Boolean,
    shadow: Boolean,
    red: Boolean,
    white: Boolean,
    fullWidth: Boolean,
    bordered: Boolean
  },
  computed: {
    classObject: function classObject() {
      var _ref;

      return _ref = {}, _defineProperty(_ref, this.$options.name, true), _defineProperty(_ref, 'is-red', this.red), _defineProperty(_ref, 'is-white', this.white), _defineProperty(_ref, 'is-shadow', this.shadow), _defineProperty(_ref, 'is-full-width', this.fullWidth), _defineProperty(_ref, 'is-large', this.large), _defineProperty(_ref, 'is-bordered', this.bordered), _defineProperty(_ref, 'is-link', this.link), _defineProperty(_ref, 'is-loading', this.isLoading), _defineProperty(_ref, "disabled", this.disabled), _ref;
    },
    spinnerColor: function spinnerColor() {
      if (this.red || !this.white) return '#FFFFFF';
      return '#3F6ADA';
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
  }, [_vm.icon ? _c('au-icon', {
    attrs: {
      "icon": _vm.icon
    }
  }) : _vm._e(), _vm._v(" "), _vm.label ? _c('span', {
    staticClass: "label"
  }, [_vm._v(_vm._s(_vm.label))]) : _vm._t("default", function () {
    return [_vm._v("Submit")];
  })], 2) : !!_vm.href ? _c('a', {
    class: _vm.classObject,
    attrs: {
      "href": _vm.href
    }
  }, [_vm.icon ? _c('au-icon', {
    attrs: {
      "icon": _vm.icon
    }
  }) : _vm._e(), _vm._v(" "), _vm.label ? _c('span', {
    staticClass: "label"
  }, [_vm._v(_vm._s(_vm.label))]) : _vm._t("default", function () {
    return [_vm._v("Submit")];
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
  }, [_vm.icon ? _c('au-icon', {
    attrs: {
      "icon": _vm.icon
    }
  }) : _vm._e(), _vm._v(" "), _vm.label ? _c('span', {
    staticClass: "label"
  }, [_vm._v(_vm._s(_vm.label))]) : _vm._t("default", function () {
    return [_vm._v("Submit")];
  }), _vm._v(" "), _vm.isLoading ? _c('div', {
    staticClass: "button-loader"
  }, [_c('au-spinner', {
    attrs: {
      "color": _vm.spinnerColor
    }
  })], 1) : _vm._e()], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-7bd699ac_0", {
    source: ".au-button[data-v-7bd699ac]{position:relative;display:flex;justify-content:center;align-items:center;font-size:12px;font-weight:500;height:32px;border-radius:4px;border:none;outline:0;cursor:pointer;padding:0 16px;color:#fff;background-color:#3f6ada;transition:.3s;background-image:linear-gradient(180deg,rgba(152,210,255,.3) 0,rgba(255,255,255,0) 100%)}.au-button[data-v-7bd699ac]:hover{background-image:linear-gradient(180deg,rgba(63,106,218,.3) 0,rgba(63,106,218,0) 100%)}.au-button .au-icon[data-v-7bd699ac]{margin-right:8px;background-color:#fff}.au-button.is-full-width[data-v-7bd699ac]{width:100%}.au-button.is-shadow[data-v-7bd699ac]{box-shadow:0 2px 2px rgba(20,20,20,.15)}.au-button.is-white[data-v-7bd699ac]{color:#3f6ada;background-color:#fff;background-image:none}.au-button.is-white .au-icon[data-v-7bd699ac]{background-color:#3f6ada}.au-button.is-link[data-v-7bd699ac]{background-color:transparent!important;background-image:none;color:#3f6ada}.au-button.is-link .au-icon[data-v-7bd699ac]{background-color:#3f6ada}.au-button.is-link[data-v-7bd699ac]:hover{color:#2a3f64}.au-button.is-link:hover .au-icon[data-v-7bd699ac]{background-color:#2a3f64}.au-button.is-link.is-red[data-v-7bd699ac]{color:#ff6c59}.au-button.is-link.is-red .au-icon[data-v-7bd699ac]{background-color:#ff6c59}.au-button.is-link.is-red[data-v-7bd699ac]:hover{color:#eb5f4d}.au-button.is-link.is-red:hover .au-icon[data-v-7bd699ac]{background-color:#eb5f4d}.au-button.is-link.is-white[data-v-7bd699ac]{color:#fff}.au-button.is-link.is-white .au-icon[data-v-7bd699ac]{background-color:#fff}.au-button.is-link.is-white[data-v-7bd699ac]:hover{color:#fafafa}.au-button.is-link.is-white:hover .au-icon[data-v-7bd699ac]{background-color:#fafafa}.au-button.is-large[data-v-7bd699ac]{font-size:14px;height:40px}.au-button.is-bordered[data-v-7bd699ac]{border:1px solid #e0e8f0;transition:border-color .2s,color .2s,background-color .2s}.au-button.is-bordered[data-v-7bd699ac]:hover{border-color:#cfd9e3}.au-button.is-red[data-v-7bd699ac]{background-color:#ff6c59;color:#fff;background-image:none}.au-button.is-red[data-v-7bd699ac]:hover{background-color:#eb5f4d}.au-button.disabled[data-v-7bd699ac]{opacity:.5;background-image:none;pointer-events:none}.au-button.disabled.is-white[data-v-7bd699ac]{border:1px solid #fff}.au-button.is-add[data-v-7bd699ac]{position:absolute;top:0;right:0;margin-right:0;min-width:207px}.au-button .label[data-v-7bd699ac]{white-space:nowrap}.au-button .button-loader[data-v-7bd699ac]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center}.is-loading .au-icon[data-v-7bd699ac],.is-loading span[data-v-7bd699ac]{opacity:0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-7bd699ac";
/* module identifier */

var __vue_module_identifier__ = "data-v-7bd699ac";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);var components$1=/*#__PURE__*/Object.freeze({__proto__:null,AuButton: __vue_component__,AuIcon: __vue_component__$1,AuSpinner: AuSpinner});var install = function installAtlasUiKit(Vue) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()
var components=/*#__PURE__*/Object.freeze({__proto__:null,'default': install,AuButton: __vue_component__,AuIcon: __vue_component__$1,AuSpinner: AuSpinner});// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)

Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== 'default') {
    install[componentName] = component;
  }
});module.exports=install;