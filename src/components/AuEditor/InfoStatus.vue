<template>

<node-view-wrapper
  class="info-status"
  as="span"
  draggable="true"
  :data-type-status="statusType"
  :text="statusText"
>
  <v-popover
    popoverInnerClass="info-status__popover"
    :class="['info-status__content', `info-status__content--${statusType}`]"
    popover-arrow-class="none"
    trigger="manual"
    :auto-hide="false"
    :open="showId === tooltipId"
    placement="bottom"
    offset="0"
    v-clickaway="onDropdownClickaway"
  >
    <span
      :data-type-status="statusType"
      class="info-status__text"
      @click.stop="changeFocus(tooltipId)"
    >
      {{textUpdate}}
    </span>

    <div
      class="info-status__form"
      slot="popover"
    >
      <au-input
        :value="inputValue"
        class="info-status__form-input"
        placeholder="Введите статус"
        small
        full-width
        @input="changeText"
      />
      <div
        class="info-status__form-color"
      >
        <div
          v-for="(item, key) in colors"
          :key="key"
          :class="[
            'info-status__form-color__item',
            `info-status__form-color__item--${item}`,
            {
              'active': item === statusType
            },
          ]"
          @click="changeType(item)"
        >
          <au-icon
            v-if="item === statusType"
            icon="mdi-check"
            color="#666"
            :size="22"
          />
        </div>
      </div>
    </div>
  </v-popover>
</node-view-wrapper>

</template>

<script>
import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import { directive as clickaway } from 'vue-clickaway';
import { NodeViewWrapper } from '@tiptap/vue-2';
import { VPopover } from 'v-tooltip';

export default {
  name: 'info-status',

  components: {
    NodeViewWrapper,
    VPopover,
  },

  data: () => ({
    status: '',
    showForm: false,
    showId: null,
    tooltipId: null,
    inputFocus: false,
    colors: ['default', 'red', 'blue', 'yellow', 'purple', 'green'],
  }),

  directives: { clickaway },

  props: {
    node: Object,
    editor: Object,
    view: Object,
    getPos: Function,
    updateAttributes: Function,
    selected: Boolean,
  },

  created() {
    this.tooltipId = uniqueId('infoStatus');
  },

  computed: {
    textUpdate() {
      return this.node.attrs.text ? this.node.attrs.text : 'Введите статус';
    },

    inputValue() {
      return this.node.attrs.text ? this.node.attrs.text : '';
    },

    statusType: {
      get() {
        return get(this.node.attrs, 'type');
      },
      set(type) {
        this.updateAttributes({
          type,
        });
      },
    },

    statusText: {
      get() {
        return this.node.attrs.text;
      },
      set(text) {
        this.updateAttributes({
          text,
        });
      },
    },
  },

  methods: {
    onDropdownClickaway(e) {
      const popover = document.querySelectorAll('.info-status__popover');

      // checking for popover, or its closing
      // because popover removing from dom with delay, checking containing with loop
      if (popover) {
        // eslint-disable-next-line no-const-assign,no-plusplus
        for (let i = 0; i < popover.length; i++) {
          if (popover[i].contains(e.target)) {
            this.showPopover = true;
            return null;
          }
        }
      }

      this.showForm = false;
      this.showId = null;
      return null;
    },

    changeType(type) {
      this.statusType = type;
    },

    changeFocus(id) {
      this.showForm = true;
      this.showId = id;
    },

    changeText(text) {
      this.statusText = text;
    },
  },
};
</script>

<style lang="scss">
.tooltip {
  outline: unset;
  .wrapper {
    overflow: visible;
    margin: 8px 0;
  }
}

.info-status {
  position: relative;
  display: inline-block;
  border-radius: 4px;
  padding: 4px 4px 4px 0;

  .editor-information-panel & {
    padding: 4px 12px 4px 0;
  }
}

.info-status__content {
  display: inline-block;
  margin: 0 5px;
  line-height: 1;
  border-radius: 4px;
  cursor: pointer;
  transition: box-shadow .15s ease-in-out;

  .incident-item__description & {
    &:hover {
      cursor: default;
      box-shadow: unset;
    }
    p {
      cursor: text;
      margin-bottom: 0;
    }
  }

  .page__description &, .comment-content & {
    &:hover {
      cursor: default;
      box-shadow: unset;
    }
    p {
      cursor: text;
      margin-bottom: 0;
    }
  }

  &:hover {
    box-shadow: 0px 0px 1px 1px rgba(136, 162, 212, 0.77);
  }

  &.open {
    box-shadow: 0px 0px 1px 1px rgba(136, 162, 212, 0.77);
  }
}

.info-status__text {
  display: inline-flex;
  padding: 4px 6px;
  max-width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #000000;

  &.hidden {
    position: absolute;
    font-size: 0;
  }
}

.info-status__form {
  padding: 0 8px;

  .info-status.has-focus & {
    opacity: 1;
    visibility: visible;
  }
}

.info-status__form-input {
  box-shadow: 0px 0px 0px 1px rgba(20, 20, 20, .15);
}

.info-status__form-color {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
}

.info-status__form-color__item {
  width: 24px;
  height: 24px;
  border-radius: 4px;
  margin-right: 7px;
  cursor: pointer;
  transition: filter .1s ease-in-out, transform .15s ease-in-out;

  &.active {
    filter: brightness(115%);
    transform: scale(1.08);

    &:hover {
      filter: brightness(115%);
      transform: scale(1.08);
    }
  }

  &:hover {
    filter: brightness(105%);
    transform: scale(1.08);
  }

  &:last-child {
    margin-right: 0;
  }
}

.info-status__form-color__item--default, .info-status__content--default {
  background-color: rgb(223, 225, 230);
  border: 1px solid rgb(80, 95, 121);
  color: rgb(80, 95, 121);
}

.info-status__form-color__item--blue,, .info-status__content--blue {
  background-color: rgb(222, 235, 255);
  border: 1px solid rgb(0, 82, 204);
  color: rgb(0, 82, 204);
}

.info-status__form-color__item--yellow, .info-status__content--yellow {
  background-color: rgb(255, 240, 179);
  border: 1px solid rgb(255, 153, 31);
  color: rgb(255, 153, 31);
}

.info-status__form-color__item--red, .info-status__content--red {
  background-color: rgb(255, 235, 230);
  border: 1px solid rgb(222, 53, 11);
  color: rgb(222, 53, 11);
}

.info-status__form-color__item--purple, .info-status__content--purple {
  background-color: rgb(234, 230, 255);
  border: 1px solid rgb(82, 67, 170);
  color: rgb(82, 67, 170);
}

.info-status__form-color__item--green, .info-status__content--green {
  background-color: rgb(227, 252, 239);
  border: 1px solid rgb(0, 135, 90);
  color: rgb(0, 135, 90);
}
</style>
