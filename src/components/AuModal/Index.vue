<template>

<div class="au-modal-activator">
  <slot name="activator" :on="activator"/>

  <div v-if="opened" class="au-modal-wrap" @click="opened = false">
    <div class="au-modal" @click.stop>
      <div class="au-modal-close">
        <au-icon
          icon="mdi-close"
          :size="24"
          color="#bbb"
          @click.native="opened = false"
        />
      </div>

      <slot/>
    </div>
  </div>
</div>

</template>

<script>

export default {
  name: 'au-modal',

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      elActivator: null,
    };
  },

  computed: {
    opened: {
      get() {
        return !!this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },

    activator() {
      return {
        click: this.show,
      };
    },
  },

  methods: {
    show(e) {
      e.stopPropagation();

      this.elActivator = e.currentTarget;
      this.opened = !this.opened;
    },
  },
};
</script>

<style lang="scss">

.au-modal-wrap {
  position: fixed;
  width: 100vw;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  z-index: 10;

  .au-modal {
    position: relative;
    padding: 14px 16px;
    background-color: #fff;
    box-shadow: 0px 0px 70px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    z-index: 15;
    pointer-events: auto;
  }

  .au-modal-close {
    position: absolute;
    right: 12px;
    top: 12px;
    cursor: pointer;
    transition: all 0.25s ease;
    z-index: 16;

    &:hover {
      filter: grayscale(100%);
    }
  }
}

</style>
