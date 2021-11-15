import { Node } from '@tiptap/core';
import { VueNodeViewRenderer } from '@tiptap/vue-2';
// import { setInlineBlockType } from 'tiptap-commands';

import InfoStatusComponent from '../InfoStatus.vue';

export default Node.create({
  name: 'info_status',
  group: 'inline',
  inline: true,
  selectable: false,
  draggable: true,

  addAttributes() {
    return {
      type: {
        default: 'default',
      },
      text: {
        default: '',
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'span[data-type-status]',
        preserveWhitespace: 'full',
        getAttrs: (dom) => {
          const type = dom.getAttribute('type') || null;
          const text = dom.getAttribute('text') || null;
          return {
            type, text,
          };
        },
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'span',
      {
        'data-type-status': HTMLAttributes.type,
        type: HTMLAttributes.type,
        class: `info-status__content info-status__content--${HTMLAttributes.type}`,
        draggable: true,
        text: HTMLAttributes.text,
      },
      ['span', {
        class: 'info-status__text',
        ref: 'content',
      }, HTMLAttributes.text],
    ];
  },

  addCommands() {
    return {
      toggleInfoStatus: () => ({ commands }) => {
        // return (attrs) => setInlineBlockType(type, attrs);
        // commands.setNode('info_status');
        commands.insertContent([
          {
            type: this.name,
            text: 'text',
          },
        ]);
      },
    };
  },

  addNodeView() {
    return VueNodeViewRenderer(InfoStatusComponent);
  },
});
