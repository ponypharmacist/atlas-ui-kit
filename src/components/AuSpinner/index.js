import SpinnerDots from './SpinnerDots.vue';
import SpinnerFadingCircle from './SpinnerFadingCircle.vue';

export default {
  name: 'au-spinner',

  inheritAttrs: false,

  props: {
    size: {
      type: Number,
      required: false,
    },
    color: {
      type: String,
      default: '#999',
    },
    type: {
      type: String,
      default: 'dots',
      validator: (prop) => ['dots', 'fading-circle'].includes(prop),
    },
  },

  render(h) {
    const props = { size: this.size, color: this.color };

    switch (this.type) {
      case 'fading-circle':
        return h(SpinnerFadingCircle, { props });

      case 'dots':
      default:
        return h(SpinnerDots, { props });
    }
  },
};
