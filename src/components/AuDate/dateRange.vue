<template>

<v-date-picker
  v-model="inputDate"
  :class="componentClasses"
  :mode="pickerType"
  :masks="inputMask"
  is24hr
  is-range
  locale="ru"
>
  <template v-slot="{ inputValue, inputEvents }">
  <div
    style="width: 200px; height: 40px; background-color: salmon;"
    v-on="inputEvents.start"
  >
    {{ inputValue }}
  </div>
  </template>
</v-date-picker>

</template>

<script>
import VDatePicker from 'v-calendar/lib/components/date-picker.umd';
import { VueMaskDirective } from 'v-mask';
import moment from 'moment';

export default {
  name: 'au-date-range',

  components: {
    VDatePicker,
  },

  model: {
    prop: 'value',
    event: 'input',
  },

  directives: {
    mask: VueMaskDirective,
  },

  props: {
    value: {
      type: [String, Number, Array, Date, Object],
      default: null,
    },
    type: {
      type: String,
      default: 'date', // 'date | datetime | time'
    },
    label: {
      type: String,
      default: null,
    },
    inputErrors: {
      type: Array,
      default: () => ([]),
    },

    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: null,
    },
    inverse: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
  }),

  computed: {
    inputDate: {
      get() {
        if (this.value) return moment.unix(this.value).toISOString();
        return this.value;
      },
      set(newValue) {
        this.$emit('input', moment(newValue).unix());
      },
    },

    componentClasses() {
      return [
        'au-input',
        {
          'is-disabled': this.disabled,
        },
      ];
    },

    pickerType() {
      switch (this.type) {
        case 'time':
          return 'time';
        case 'datetime':
          return 'dateTime';
        case 'date':
        default:
          return 'date';
      }
    },
    placeholder() {
      switch (this.type) {
        case 'time':
          return 'чч:мм';
        case 'datetime':
          return 'дд.мм.гггг чч:мм';
        case 'date':
        default:
          return 'дд.мм.гггг';
      }
    },
    dateFormat() {
      switch (this.type) {
        case 'time':
          return 'HH:mm:ss';
        case 'datetime':
          return 'YYYY-MM-DD HH:mm:ss';
        case 'date':
        default:
          return 'YYYY-MM-DD';
      }
    },
    inputMask() {
      switch (this.type) {
        case 'time':
          return { input: 'HH:mm:ss' };
        case 'datetime':
          return { input: 'YYYY-MM-DD', inputDateTime24hr: 'YYYY-MM-DD HH:mm:ss' };
        case 'date':
        default:
          return { input: 'YYYY-MM-DD' };
      }
    },
  },
};
</script>

<style lang="scss" scoped>

.au-date {
  position: relative;
}
</style>
