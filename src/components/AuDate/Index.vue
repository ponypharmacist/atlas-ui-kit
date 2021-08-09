<template>

<v-date-picker
  v-model="inputDate"
  :class="componentClasses"
  :mode="pickerType"
  :masks="inputMask"
  is24hr
  locale="ru"
  :popover="popover"
>
  <template v-slot="{ inputValue, inputEvents }">
    <au-input
      :value="inputValue"
      type="text"
      :events="inputEvents"
      :placeholder="placeholder"
      :label="label"
      :input-errors="inputErrors"
      :required="required"
      :small="size === 'small'"
      :tiny="size === 'tiny'"
      :inverse="inverse"
      full-width
      readonly
      v-on="inputEvents"
    >
      <template #suffix>
        <au-icon icon="mdi-calendar-month-outline" :size="24" color="#9db9d1"/>
      </template>
    </au-input>
  </template>
</v-date-picker>

</template>

<script>
import VDatePicker from 'v-calendar/lib/components/date-picker.umd';
import { VueMaskDirective } from 'v-mask';
// import moment from 'moment';

export default {
  name: 'au-date',

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
    popover: {
      positionFixed: true,
    },
  }),

  computed: {
    inputDate: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit('input', newValue);
        // this.inputDate = moment(this.value, this.dateFormat).toISOString();
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
