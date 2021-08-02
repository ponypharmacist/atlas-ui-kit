<template>
  <section
    v-show="isActive"
    :aria-hidden="!isActive"
    :class="$options.name"
    role="tabpanel"
  >
    <slot />
  </section>
</template>

<script>
export default {
  name: 'au-tab-item',

  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      default: null,
    },
  },

  data: () => ({
    isActive: false,
  }),
};
</script>
