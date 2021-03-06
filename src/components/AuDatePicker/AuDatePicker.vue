<template>

<v-date-picker
  v-model="inputDate"
  :class="componentClasses"
  :mode="pickerType"
  :masks="inputMask"
  is24hr
  locale="ru"
  :is-range="isRange"
  :popover="popover"
>
  <template v-slot="{ inputValue, inputEvents }">
    <au-input
      v-if='!isRange'
      :value="inputValue"
      type="text"
      :events="inputEvents"
      :placeholder="placeholder"
      :label="label"
      :input-errors="inputErrors"
      :required="required"
      :small="small"
      :tiny="tiny"
      :inverse="inverse"
      full-width
      emit-event
      v-on="inputEvents"
    >
      <template #suffix>
        <au-icon v-if="!inputValue" icon="mdi-calendar-month-outline" :size="iconSize" color="#9db9d1"/>
        <au-icon v-show="inputValue" icon="mdi-close" :size="iconSize" color="#9db9d1" @click.native="clearInput"/>
      </template>
    </au-input>

    <!-- Диапазон дат -->
    <div
      v-else
      class="range-wrap"
      :class="wrapClass"
    >
      <div
        v-if="label"
        class="range-wrap-label"
      >
        {{ label }}
        <asterisk v-if="required"/>
      </div>

      <au-input
        :value="inputValue.start"
        type="text"
        class="range-input-left"
        :events="inputEvents.start"
        :placeholder="placeholder"
        :required="required"
        :small="small"
        :tiny="tiny"
        :inverse="inverse"
        emit-event
        v-on="inputEvents.start"
      >
        <template #suffix>
          <au-icon v-if="!inputValue.start" icon="mdi-calendar-month-outline" :size="iconSize" color="#9db9d1"/>
          <au-icon v-show="inputValue.start" icon="mdi-close" :size="iconSize" color="#9db9d1" @click.native="clearInput"/>
        </template>
      </au-input>

      <au-input
        :value="inputValue.end"
        type="text"
        class="range-input-right"
        :events="inputEvents.end"
        :placeholder="placeholder"
        :required="required"
        :small="small"
        :tiny="tiny"
        :inverse="inverse"
        emit-event
        v-on="inputEvents.end"
      >
        <template #suffix>
          <au-icon v-if="!inputValue.end" icon="mdi-calendar-month-outline" :size="iconSize" color="#9db9d1"/>
          <au-icon v-show="inputValue.end" icon="mdi-close" :size="iconSize" color="#9db9d1" @click.native="clearInput"/>
        </template>
      </au-input>
    </div>
  </template>
</v-date-picker>

</template>

<script>
import VDatePicker from 'v-calendar/lib/components/date-picker.umd';
import { VueMaskDirective } from 'v-mask';
import moment from 'moment';

export default {
  name: 'au-date-picker',

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
      type: [String, Number, Object],
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
    isRange: {
      type: Boolean,
      default: false,
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
    small: {
      type: Boolean,
      default: false,
    },
    tiny: {
      type: Boolean,
      default: false,
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
        if (this.isRange) {
          return {
            start: this.value.start ? this.formatMidnight(this.value.start) : null,
            end: this.value.start ? this.formatMidnight(this.value.end) : null,
          };
        }

        if (this.value) return moment(this.value);

        return this.value;
      },

      set(newValue) {
        if (this.isRange) {
          this.$emit('input', {
            start: this.formatMidnight(newValue.start),
            end: this.formatMidnight(newValue.end),
          });
        } else {
          this.$emit('input', this.formatMidnight(newValue));
        }
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

    iconSize() {
      if (this.tiny) return 16;
      if (this.small) return 22;

      return 24;
    },

    wrapClass() {
      return {
        'is-small': this.small,
        'is-tiny': this.tiny,
      };
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

    inputMask() {
      switch (this.type) {
        case 'time':
          return { input: 'HH:mm:ss' };
        case 'datetime':
          return { input: 'DD.MM.YYYY', inputDateTime24hr: 'DD.MM.YYYY HH:mm:ss' };
        case 'date':
        default:
          return { input: 'DD.MM.YYYY' };
      }
    },
    // dateFormat() {
    //   switch (this.type) {
    //     case 'time':
    //       return 'HH:mm:ss';
    //     case 'datetime':
    //       return 'DD.MM.YYYY HH:mm:ss';
    //     case 'date':
    //     default:
    //       return 'DD.MM.YYYY';
    //   }
    // },
  },

  methods: {
    formatMidnight(datetime) {
      return `${moment(datetime).format('YYYY-MM-DD')} 00:00:00`;
    },

    clearInput() {
      if (this.isRange) {
        this.$emit('input', {
          start: null,
          end: null,
        });
      } else {
        this.$emit('input', null);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.au-date-picker {
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
