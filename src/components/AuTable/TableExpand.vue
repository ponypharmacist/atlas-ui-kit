<template>

<div
  v-if="isExpanded"
  class="au-table-expand cell-content"
>
  <slot>Expanded block!</slot>
</div>

</template>

<script>
export default {
  name: 'au-table',

  props: {
    isExpanded: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
  },

  methods: {
    expand(row) {
      console.log(row);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/partials/params";

.au-table-expand {
  width: 100%;
}
</style>
