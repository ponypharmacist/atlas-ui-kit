<template>

<input
  v-model="model"
  :type="type"
  :disabled="disabled"
  class="au-input"
  ref="input"
>

</template>

<script>
import Vue from 'vue';

export default Vue.component('AuInput', {
  name: 'AuInput',

  props: {
    value: {
      type: [String, Number],
      default: null,
    },
    type: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    regex: {
      type: String,
      default: null,
    },
  },

  computed: {
    model: {
      get() {
        return this.value;
      },
      set(val) {
        if (val && this.regex) {
          if (new RegExp(`^${this.regex}$`).test(val)) {
            this.$emit('input', val);
          } else {
            this.$refs.input.value = this.value || '';
          }
        } else {
          this.$emit('input', val);
        }
      },
    },
  },
});
</script>

<style scoped></style>
