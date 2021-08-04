<template>
  <!-- <router-link v-if="!!to" :to="to" :class="classObject">
    <au-icon :icon="icon" :size="iconSize" :class="iconClass" mask />
    <span v-if="label" class="label">{{ label }}</span>
    <slot v-else></slot>
  </router-link>

  <a v-else-if="!!href" :href="href" :class="classObject">
    <au-icon :icon="icon" :size="iconSize" :class="iconClass" mask />
    <span v-if="label" class="label">{{ label }}</span>
    <slot v-else></slot>
  </a>

  <button
    v-else
    :class="classObject"
    :type="type"
    @click.stop="$emit('click', $event)"
  >
    <au-icon :icon="icon" :size="iconSize" :class="iconClass" mask />
    <span v-if="label" class="label">{{ label }}</span>
    <slot v-else></slot>

    <div v-if="isLoading" class="button-loader">
      <au-spinner :color="spinnerColor" />
    </div>
  </button> -->

  <component
    :is="tag"
    :to="to"
    :href="href"
    :type="type"
    :class="classObject"
    @click.stop="$emit('click', $event)"
  >
    <slot name="icon"/>
    <au-icon :icon="icon" :size="iconSize" :class="iconClass" mask />

    <span v-if="label" class="label">{{ label }}</span>
    <slot v-else/>

    <div v-if="isLoading" class="button-loader">
      <au-spinner :color="spinnerColor" />
    </div>
  </component>

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
    to: {
      type: [Object, String],
      default: null,
    },
    href: {
      type: String,
      default: null,
    },
    tag: {
      type: String,
      default: 'button',
    },
    type: {
      type: String,
      default: 'button',
    },

    // Content
    icon: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },

    // State
    isLoading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },

    // Styling
    link: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
    shadow: {
      type: Boolean,
      default: false,
    },
    red: {
      type: Boolean,
      default: false,
    },
    white: {
      type: Boolean,
      default: false,
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    bordered: {
      type: Boolean,
      default: false,
    },
    transparent: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classObject() {
      return {
        [this.$options.name]: true,
        'is-red': this.red,
        'is-white': this.white,
        'is-bordered': this.bordered,
        'is-shadow': this.shadow,
        'is-transparent': this.transparent,
        'is-round': this.round,
        'is-full-width': this.fullWidth,
        'is-large': this.large,
        'is-link': this.link,
        'is-loading': this.isLoading,
        disabled: this.disabled,
      };
    },

    iconClass() {
      if (this.white) return 'au-icon-blue';

      return 'au-icon-white';
    },

    spinnerColor() {
      if (this.red || !this.white) return '#FFFFFF';

      return '#3F6ADA';
    },

    iconSize() {
      return this.large ? 16 : 14;
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
  font-family: inherit;
  font-size: 12px;
  font-weight: 500;
  height: 32px;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0 ($mm-value * 4) + px;

  // Default blue button
  color: $white;
  background-color: $blue;
  transition: .3s;

  background-image: linear-gradient(
    180deg,
    rgba(152, 210, 255, 0.3) 0%,
    rgba(255, 255, 255, 0) 100%
  );

  &:hover {
    background-image: linear-gradient(
      180deg,
      rgba($blue, 0.3) 0%,
      rgba($blue, 0) 100%
    );
  }

  ::v-deep .au-icon {
    margin-right: 8px;
  }

  &.is-full-width {
    width: 100%;
  }

  &.is-shadow {
    box-shadow: 0 2px 2px rgba(20,20,20, 0.15);
  }

  &.is-white {
    color: $blue;
    background-color: $white;
    background-image: none;
  }

  // Link
  &.is-link {
    background-color: transparent!important;
    background-image: none;
    color: $blue;

    .au-icon {
      background-color: $blue !important;
    }

    &:hover {
      color: $darkblue;

      .au-icon {
        background-color: $darkblue !important;
      }
    }

    // red link
    &.is-red {
      color: $red2;

      .au-icon {
        background-color: $red2 !important;
      }

      &:hover {
        color: #eb5f4d;

        .au-icon {
          background-color: #eb5f4d !important;
        }
      }
    }

    // white link
    &.is-white {
      color: $white;

      .au-icon {
        background-color: $white !important;
      }

      &:hover {
        color: #fafafa;

        .au-icon {
          background-color: #fafafa !important;
        }
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

    &:hover {
      border-color: $gray-blue-border-hover;
    }

    &.is-white {
      &:hover {
        color: $white;
        background-color: $blue;
        background-image: linear-gradient(
          180deg,
          rgba($blue, 0.3) 0%,
          rgba($blue, 0) 100%
        );
      }
    }
  }

  &.is-red {
    background-color: $red2;
    color: $white;
    background-image: none;

    &:hover {
      background-color: #eb5f4d;
    }
  }

  &.disabled {
    opacity: .5;
    background-image: none;
    pointer-events: none;
  }

  &.disabled.is-white {
    border: 1px solid #fff;
  }

  .label{
    white-space: nowrap;
  }

  .button-loader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &.is-transparent {
    background-color: rgba(0, 0, 0, 0.20);
    background-image: none;

    &:hover {
      background-color: rgba(0, 0, 0, 0.15);
    }

    &.is-white {
      background-color: rgba(255, 255, 255, 0.75);

      &:hover {
        background-color: rgba(255, 255, 255, 0.85);
      }
    }
  }

  &.is-round {
    width: 32px;
    border-radius: 50%;
    padding: 0;
    text-align: center;

    &.is-large {
      width: 40px;
    }

    .au-icon {
      margin-right: 0;
    }
  }
}

.is-loading {
  .au-icon, span {
    opacity: 0;
  }
}
</style>
