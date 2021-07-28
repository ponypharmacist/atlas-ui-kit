//
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
      type: String
    }
  },
  computed: {
    containerStyle() {
      const size = this.size && `${this.size}px`;
      return {
        width: size,
        height: size
      };
    },

    blobStyle() {
      const size = this.size && `${this.size / 3}px`;
      return {
        color: this.color,
        width: size,
        height: size
      };
    }

  }
};

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

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: _vm.$options.name,
    style: _vm.containerStyle
  }, _vm._l(3, function (i) {
    return _c('div', {
      key: i,
      class: "bounce" + i,
      style: _vm.blobStyle
    });
  }), 0);
};

var __vue_staticRenderFns__$3 = [];
/* style */

const __vue_inject_styles__$3 = function (inject) {
  if (!inject) return;
  inject("data-v-0017c5c1_0", {
    source: ".spinner-dots[data-v-0017c5c1]{font-size:0;text-align:center;white-space:nowrap;display:flex;align-items:center;color:inherit}.spinner-dots>div[data-v-0017c5c1]{background-color:currentColor;border-radius:100%;display:inline-block;animation:sk-bouncedelay-data-v-0017c5c1 1s infinite ease-in-out both}.spinner-dots .bounce1[data-v-0017c5c1]{animation-delay:-.3333333333s}.spinner-dots .bounce2[data-v-0017c5c1]{animation-delay:-.1666666667s}@-webkit-keyframes sk-bouncedelay-data-v-0017c5c1{0%,100%,80%{transform:scale(.37)}40%{transform:scale(.55)}}@keyframes sk-bouncedelay-data-v-0017c5c1{0%,100%,80%{transform:scale(.37)}40%{transform:scale(.55)}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$3 = "data-v-0017c5c1";
/* module identifier */

const __vue_module_identifier__$3 = undefined;
/* functional template */

const __vue_is_functional_template__$3 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$3 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, createInjector, undefined, undefined);

//
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
    style() {
      const size = this.size && `${this.size}px`;
      return {
        width: size,
        height: size
      };
    }

  }
};

/* script */
const __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "sk-fading-circle",
    class: _vm.$options.name,
    style: _vm.style
  }, _vm._l(8, function (i) {
    return _c('div', {
      key: i,
      class: 'sk-circle sk-circle' + i
    });
  }), 0);
};

var __vue_staticRenderFns__$2 = [];
/* style */

const __vue_inject_styles__$2 = function (inject) {
  if (!inject) return;
  inject("data-v-12b74353_0", {
    source: ".sk-fading-circle[data-v-12b74353]{position:relative;width:36px;height:36px;color:currentColor}.sk-fading-circle .sk-circle[data-v-12b74353]{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle .sk-circle[data-v-12b74353]::before{content:\"\";display:block;margin:0 auto;width:4px;height:4px;overflow:hidden;background-color:currentColor;border-radius:2px;animation:sk-circleFadeDelay-data-v-12b74353 .8s infinite ease-in-out both}.sk-fading-circle .sk-circle1[data-v-12b74353]{transform:rotate(0)}.sk-fading-circle .sk-circle1[data-v-12b74353]::before{animation-delay:-.8s}.sk-fading-circle .sk-circle2[data-v-12b74353]{transform:rotate(45deg)}.sk-fading-circle .sk-circle2[data-v-12b74353]::before{animation-delay:-.7s}.sk-fading-circle .sk-circle3[data-v-12b74353]{transform:rotate(90deg)}.sk-fading-circle .sk-circle3[data-v-12b74353]::before{animation-delay:-.6s}.sk-fading-circle .sk-circle4[data-v-12b74353]{transform:rotate(135deg)}.sk-fading-circle .sk-circle4[data-v-12b74353]::before{animation-delay:-.5s}.sk-fading-circle .sk-circle5[data-v-12b74353]{transform:rotate(180deg)}.sk-fading-circle .sk-circle5[data-v-12b74353]::before{animation-delay:-.4s}.sk-fading-circle .sk-circle6[data-v-12b74353]{transform:rotate(225deg)}.sk-fading-circle .sk-circle6[data-v-12b74353]::before{animation-delay:-.3s}.sk-fading-circle .sk-circle7[data-v-12b74353]{transform:rotate(270deg)}.sk-fading-circle .sk-circle7[data-v-12b74353]::before{animation-delay:-.2s}.sk-fading-circle .sk-circle8[data-v-12b74353]{transform:rotate(315deg)}.sk-fading-circle .sk-circle8[data-v-12b74353]::before{animation-delay:-.1s}@keyframes sk-circleFadeDelay-data-v-12b74353{0%,100%,39%{opacity:0}40%{opacity:1}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$2 = "data-v-12b74353";
/* module identifier */

const __vue_module_identifier__$2 = undefined;
/* functional template */

const __vue_is_functional_template__$2 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, createInjector, undefined, undefined);

var AuSpinner = {
  name: 'au-spinner',
  inheritAttrs: false,
  props: {
    size: Number,
    color: String,
    type: {
      type: String,
      default: 'dots',
      validator: prop => ['dots', 'fading-circle'].includes(prop)
    }
  },

  render(h) {
    const props = {
      size: this.size,
      color: this.color
    };

    switch (this.type) {
      case 'fading-circle':
        return h(__vue_component__$2, {
          props
        });

      case 'dots':
      default:
        return h(__vue_component__$3, {
          props
        });
    }
  }

};

//
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
    styles() {
      let style = '';
      if (this.size) style += `width: ${this.size}px; height: ${this.size}px;`;
      if (this.color) style += `background-color: ${this.color};`;
      style += `-webkit-mask: url('${this.getIconUrl}') no-repeat 0 0 / 100% 100%;`;
      style += `mask: url('${this.getIconUrl}') no-repeat 0 0 / 100% 100%;`;
      return style;
    },

    getIconUrl() {
      if (this.icon.includes('mdi-')) {
        const images = require.context('@mdi/svg/svg/', false, /\.svg$/);

        return images(`./${this.icon.slice(4)}.svg`);
      }

      const images = require.context('@/assets/icons/', false, /\.svg$/);

      return images(`./${this.icon}.svg`);
    }

  }
};

/* script */
const __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: "au-icon icon-" + _vm.icon,
    style: _vm.styles,
    attrs: {
      "title": _vm.title
    }
  });
};

var __vue_staticRenderFns__$1 = [];
/* style */

const __vue_inject_styles__$1 = function (inject) {
  if (!inject) return;
  inject("data-v-1d10a681_0", {
    source: ".au-icon[data-v-1d10a681]{display:inline-block;width:12px;height:12px;min-width:12px;background-color:#000;box-sizing:border-box}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$1 = "data-v-1d10a681";
/* module identifier */

const __vue_module_identifier__$1 = undefined;
/* functional template */

const __vue_is_functional_template__$1 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, createInjector, undefined, undefined);

//
var script = {
  name: 'au-button',
  components: {
    AuIcon: __vue_component__$1,
    AuSpinner
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
    red: Boolean,
    fullWidth: Boolean,
    bordered: Boolean
  },
  computed: {
    classObject() {
      return {
        [this.$options.name]: true,
        'is-red': this.red,
        'is-shadow': this.shadow,
        'is-full-width': this.fullWidth,
        'is-inverse': this.inverse,
        'is-large': this.large,
        'is-bordered': this.bordered,
        'is-link': this.link,
        'is-loading': this.isLoading,
        disabled: this.disabled
      };
    },

    spinnerColor() {
      if (this.inverse || this.red) return '#FFFFFF';
      return '#3F6ADA';
    }

  }
};

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
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
      "click": function ($event) {
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

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-4a96f9a0_0", {
    source: ".au-button[data-v-4a96f9a0]{position:relative;display:flex;justify-content:center;align-items:center;font-size:12px;font-weight:500;color:#3f6ada;background-color:#fff;height:32px;border-radius:4px;border:none;outline:0;cursor:pointer;padding:0 16px}.au-button.is-full-width[data-v-4a96f9a0]{width:100%}.au-button.is-shadow[data-v-4a96f9a0]{box-shadow:0 2px 2px rgba(20,20,20,.15)}.au-button.is-inverse[data-v-4a96f9a0]{background-color:#3f6ada;transition:.3s;background-image:linear-gradient(180deg,rgba(152,210,255,.3) 0,rgba(255,255,255,0) 100%);color:#fff}.au-button.is-inverse[data-v-4a96f9a0]:hover{background-image:linear-gradient(180deg,rgba(63,106,218,.3) 0,rgba(63,106,218,0) 100%)}.au-button.is-link[data-v-4a96f9a0]{background-color:transparent!important}.au-button.is-link.is-red[data-v-4a96f9a0]{color:#ff6c59}.au-button.is-link.is-red[data-v-4a96f9a0]:hover{color:#eb5f4d}.au-button.is-large[data-v-4a96f9a0]{font-size:14px;height:40px}.au-button.is-bordered[data-v-4a96f9a0]{border:1px solid #e0e8f0;transition:border-color .2s,color .2s,background-color .2s}.au-button.is-bordered[data-v-4a96f9a0]:hover{background-color:#3f6ada;background-image:linear-gradient(180deg,rgba(152,210,255,.3) 0,rgba(255,255,255,0) 100%);color:#fff}.au-button.is-red[data-v-4a96f9a0]{background-color:#ff6c59;color:#fff}.au-button.is-red[data-v-4a96f9a0]:hover{background-color:#eb5f4d}.au-button.disabled[data-v-4a96f9a0]{opacity:.5;background-image:none;pointer-events:none}.au-button.disabled[data-v-4a96f9a0]:not(.is-inverse){border:1px solid #fff}.au-button.is-add[data-v-4a96f9a0]{position:absolute;top:0;right:0;margin-right:0;min-width:207px}.au-button .label[data-v-4a96f9a0]{white-space:nowrap}.au-button .button-loader[data-v-4a96f9a0]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center}.au-icon[data-v-4a96f9a0]{margin-right:8px;background-color:#3f6ada}.is-loading .au-icon[data-v-4a96f9a0],.is-loading span[data-v-4a96f9a0]{opacity:0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-4a96f9a0";
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  AuButton: __vue_component__,
  AuIcon: __vue_component__$1,
  AuSpinner: AuSpinner
});

// Import vue components

const install = function installAtlasUiKit(Vue) {
  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export default install;
export { __vue_component__ as AuButton, __vue_component__$1 as AuIcon, AuSpinner };
