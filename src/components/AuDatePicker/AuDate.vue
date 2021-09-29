<template>

<span>
  {{ date }}
</span>

</template>

<script>
import moment from 'moment';

export default {
  name: 'au-date',

  props: {
    value: {
      type: [String, Number, Object],
      default: null,
    },
    format: {
      type: String,
      default: 'DD.MM.YYYY',
    },
  },

  computed: {
    date() {
      if (this.value) return moment(this.value).format(this.format);

      return this.value;
    },
  },
};
</script>

<style lang="scss" scoped>
.au-date {
  position: relative;
}

.range-wrap-label {
  width: 100%;
  margin-bottom: 5px;
  font-size: 13px;
  line-height: 16px;
  font-weight: 500;
}

.range-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  &.is-small {
    .range-wrap-label {
      font-size: 12px;
      line-height: 14px;
    }
  }
  &.is-tiny {
    .range-wrap-label {
      display: none;
    }
  }
}

.range-input-left,
.range-input-right {
  width: 48%;
}
</style>
