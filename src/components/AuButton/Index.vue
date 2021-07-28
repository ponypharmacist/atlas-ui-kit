<template>
  <router-link v-if="!!to" :to="to" :tag="tag" :class="classObject">
    <slot>
      <au-icon v-if="icon" :icon="icon" />
      <span v-if="label" class="label">{{ label }}</span>
      <span v-if="!icon && !label">Submit</span>
    </slot>
  </router-link>

  <a v-else-if="!!href" :href="href" :class="classObject">
    <slot>
      <au-icon v-if="icon" :icon="icon" />
      <span v-if="label" class="label">{{ label }}</span>
      <span v-if="!icon && !label">Submit</span>
    </slot>
  </a>

  <button
    v-else
    :class="classObject"
    :type="type"
    @click.stop="$emit('click', $event)"
  >
    <slot>
      <au-icon v-if="icon" :icon="icon" />
      <span v-if="label" class="label">{{ label }}</span>
      <span v-if="!icon && !label">Submit</span>

      <div v-if="isLoading" class="button-loader">
        <au-spinner :color="spinnerColor" />
      </div>
    </slot>
  </button>

</template>

<script>
import AuSpinner from '@/components/AuSpinner';
import AuIcon from '@/components/AuIcon';

export default {
  name: 'au-button',

  components: {
    AuIcon,
    AuSpinner,
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
      default: 'a',
    },
    type: {
      type: String,
      default: 'button',
    },
    red: Boolean,
    fullWidth: Boolean,
    bordered: Boolean,
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
        disabled: this.disabled,
      };
    },

    spinnerColor() {
      if (this.inverse || this.red) return '#FFFFFF';

      return '#3F6ADA';
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/partials/params";
@import "../../styles/partials/mixins";

.au-button {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  color: $blue;
  background-color: $white;
  height: 32px;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0 ($mm-value * 4) + px;

  &.is-full-width {
    width: 100%;
  }

  &.is-shadow {
    box-shadow: 0 2px 2px rgba(20,20,20, 0.15);
  }

  &.is-inverse {
    background-color: $blue;
    transition: .3s;
    background-image: linear-gradient(
        180deg,
        rgba(152, 210, 255, 0.3) 0%,
        rgba(255, 255, 255, 0) 100%
    );
    color: $white;
    &:hover {
      background-image: linear-gradient(
          180deg,
          rgba($blue, 0.3) 0%,
          rgba($blue, 0) 100%
      );
    }
  }

  &.is-link {
    background-color: transparent!important;

    &.is-red {
      color: $red2;

      &:hover {
        color: #eb5f4d;
      }
    }
  }

  &.is-large {
    font-size: 14px;
    height: 40px;
  }

  &.is-bordered {
    border: 1px solid $gray-blue-border;
    transition: border-color .2s, color .2s, background-color .2s;
  }

  &.is-bordered:hover {
    background-color: $blue;
    background-image: linear-gradient(
        180deg,
        rgba(152, 210, 255, 0.3) 0%,
        rgba(255, 255, 255, 0) 100%
    );
    color: $white;
  }

  &.is-red {
    background-color: $red2;
    color: $white;

    &:hover {
      background-color: #eb5f4d;
    }
  }

  &.disabled {
    opacity: .5;
    background-image: none;
    pointer-events: none;
  }

  &.disabled:not(.is-inverse) {
    border: 1px solid #fff;
  }

  &.is-add {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 0;
    min-width: 207px;
  }

  & .label{
    white-space: nowrap;
  }

  & .button-loader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.au-icon {
  margin-right: 8px;
  background-color: $blue;
}

.is-loading {
  .au-icon, span {
    opacity: 0;
  }
}
</style>
