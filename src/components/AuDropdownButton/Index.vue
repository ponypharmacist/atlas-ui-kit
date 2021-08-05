<template>
  <div
    :class="componentClasses"
    @mouseenter="showDropList"
    @mouseleave="hideDropList"
  >
    <div class="au-dropdown-button-main">
      <au-icon :icon="icon" :size="iconSize" :class="iconClass" mask/>
      <slot></slot>
    </div>

    <transition name="fade">
      <ul
        v-if="showList"
        class="au-dropdown-button-list"
      >
        <li
          v-for="(item, index) in list"
          :key="index"
          @click="$emit('selected', item)"
        >
          {{ item.title }}
        </li>

        <slot v-if="!list" name="list"></slot>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'au-dropdown-button',

  props: {
    list: {
      type: Array,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
    large: {
      type: Boolean,
      default: false,
    },
    white: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    showList: false,
    top: false,
    bottom: false,
  }),

  computed: {
    componentClasses() {
      return [
        this.$options.name,
        {
          'is-large': this.large,
          'is-white': this.white,
          'au-dropdown-button--top': this.top,
          'au-dropdown-button--bottom': this.bottom,
        },
      ];
    },

    iconSize() {
      return this.large ? 16 : 14;
    },

    iconClass() {
      if (this.white) return 'au-icon-blue';

      return 'au-icon-white';
    },
  },

  methods: {
    showDropList() {
      this.showList = true;
      this.getPosition();
    },

    hideDropList() {
      this.showList = false;
    },

    getPosition() {
      this.$nextTick(() => {
        const el = document.querySelector('.au-dropdown-button');
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (windowHeight - rect.bottom < 290) {
          this.bottom = false;
          this.top = true;
        } else {
          this.top = false;
          this.bottom = true;
        }
      });
    },
  },
};
</script>

<style lang="scss">
@import "../../styles/partials/params";
@import "../../styles/partials/mixins";

.au-dropdown-button {
  display: inline-block;
  position: relative;
  height: 32px;

  &:hover {
    .au-dropdown-button-main {
      &:after {
        transform: translate(-50%, -50%) rotate(270deg);
        transition: 0.3s;
      }
    }
  }

  .au-dropdown-button-main{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 500;
    width: 100%;
    height: 32px;
    color: $white;
    border-radius: 4px;
    background-color: $blue;
    background-image: linear-gradient(
        180deg,
        rgba(152, 210, 255, 0.3) 0%,
        rgba(255, 255, 255, 0) 100%
    );
    padding: 0 47px 0 15px;
    overflow: hidden;
    cursor: pointer;

    &:before{
      content: "";
      position: absolute;
      width: 32px;
      height: 32px;
      background-color: transparentize(#fff, .90);
      right: 0;
      top: 0;
    }

    &:after{
      content: "";
      -webkit-mask: $icon-arrow;
      mask: $icon-arrow;
      background-color: #fff;
      width: 6px;
      height: 11px;
      position: absolute;
      transform: translate(-50%, -50%) rotate(90deg);
      top: 50%;
      right: 10px;
      transition: 0.3s;
    }

    .au-icon{
      margin-right: 6px;
    }

    svg{
      width: 12px;
      height: 12px;
      fill: $white;
    }
  }

  .au-dropdown-button-list{
    position: absolute;
    left: 0;
    width: 100%;
    max-height: 235px;
    list-style: none;
    background-color: $white;
    border-radius: 4px;
    overflow-x: hidden;
    z-index: 1000;
    box-shadow: 0 11px 29px rgba(11, 66, 136, 0.2), 0 -1px 9px rgba(11, 66, 136, 0.07);
  }

  li:not(.list-header){
    font-size: 12px;
    line-height: 16px;
    padding: 8px 16px;
    cursor: pointer;

    &:hover{
      background-color: $gray-blue-border;
    }
  }

  li.list-header{
    font-size: 11px;
    font-weight: 500;
    line-height: 16px;
    padding: 8px 16px;
    cursor: default;
    border-top: 1px solid $gray-blue-border;
  }
}

.au-dropdown-button.is-large {
  height: 40px;

  .au-dropdown-button-main {
    height: 40px;

    &:before {
      height: 40px;
    }
  }
}

.au-dropdown-button-list {
  .au-dropdown-button--bottom & {
    top: 32px;
  }
}

.au-dropdown-button-list {
  .au-dropdown-button--top & {
    bottom: 32px;
    top: unset;
  }
}

.au-dropdown-button-list {
  .au-dropdown-button--bottom.is-large & {
    top: 40px;
  }
}

.au-dropdown-button-list {
  .au-dropdown-button--top.is-large & {
    bottom: 40px;
    top: unset;
  }
}

.is-white {
  .au-dropdown-button-main {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 500;
    width: 100%;
    height: 32px;
    color: $blue;
    border-radius: 4px;
    background-color: $white;
    background-image: none;

    &:before {
      border-left: thin solid rgba(63, 107, 218, 0.25);
    }

    &:after {
      background-color: $blue;
    }
  }
}
</style>
