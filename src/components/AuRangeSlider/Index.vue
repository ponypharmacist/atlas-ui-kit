<template>

<div :class="classObject">
  <div v-if="label" class="range-slider-label">
    {{ label }}
    <asterisk v-if="required" />
  </div>

  <div class="range-slider-box">
    <div v-if="!isSingle" class="range-slider-min">{{ model[0] }}</div>

    <vue-slider
      v-model='model'
      :min="min"
      :max="max"
      :enable-cross="false"
      :interval="interval"
      :height="2"
      tooltip="none"
    >
      <!-- <template #dot="{ index }">
        <div class="dot" v-if="index === 0"/>
        <div class="dot right" v-else-if="index === 1"/>
      </template> -->
    </vue-slider>

    <div class="range-slider-max">{{ isSingle ? model : model[1] }}</div>
  </div>
</div>

</template>

<script>
import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min';

export default {
  name: 'au-range-slider',

  components: { VueSlider },

  props: {
    value: {
      type: [Array, Number],
      default: null,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 0,
    },
    interval: {
      type: Number,
      default: 1,
    },
    label: {
      type: String,
      default: null,
    },

    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    inverse: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    tiny: {
      type: Boolean,
      default: false,
    },
  },

  // data() {
  //   return {
  //     scopeModel: this.value,
  //   };
  // },

  computed: {
    classObject() {
      return {
        [this.$options.name]: true,
        'is-small': this.small,
        'is-tiny': this.tiny,
        'is-inverse': this.inverse,
        'is-disabled': this.disabled,
        'is-single': this.isSingle,
      };
    },

    model: {
      get() {
        return this.value;
      },

      set(newValue) {
        // this.scopeModel = newValue;
        this.$emit('input', newValue);
      },
    },

    isSingle() {
      return typeof this.value === 'number';
    },
  },
};
</script>

<style lang="scss">
@import "../../styles/partials/params";
@import "./slider";

.au-range-slider {
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: inherit;

  // Стили vue-slider-component
  .vue-slider {
    width: 100% !important;
  }

  .vue-slider-dot {
    width: 12px !important;
    height: 12px !important;
    border: 2px solid $blue;
    background-color: #fff;
    border-radius: 50%;
    cursor: pointer;
  }

  .vue-slider-process {
    background-color: $blue;
  }

  // Оформление компонента
  .range-slider-label {
    margin-bottom: 5px;
    font-size: 13px;
    line-height: 16px;
    font-weight: 500;
  }

  .range-slider-box {
    display: flex;
    align-items: center;
    width: 100%;
    height: 32px;
    padding: 0 12px;
    font-size: 13px;
    border-radius: 2px;
    border: 1px solid #ebeff6;
    background-color: #f9fafd;
  }

  .range-slider-min {
    min-width: 7px;
    margin-right: 12px;
    text-align: left;
  }

  .range-slider-max {
    min-width: 14px;
    margin-left: 12px;
    text-align: right;
  }

  &.is-single {
    .range-slider-box {
      padding-left: 14px;
    }

    .vue-slider-rail {
      background-color: $blue;
    }
  }

  &.is-inverse {
    .range-slider-box {
      background-color: #fff;
    }
  }

  &.is-small {
    .range-slider-box {
      height: 32px;
      font-size: 12px;
    }

    .range-slider-label {
      font-size: 12px;
      line-height: 14px;
    }
  }

  &.is-tiny {
    .range-slider-box {
      height: 24px;
      font-size: 12px;
    }

    .range-slider-label {
      font-size: 12px;
      line-height: 14px;
    }
  }

  &.is-disabled {
    user-select: none;
    pointer-events: none;

    .vue-slider-dot {
      border-color: #888;
    }

    .vue-slider-process {
      background-color: #888;
    }

    .vue-slider-rail {
      background-color: #888;
    }
  }
}

</style>
