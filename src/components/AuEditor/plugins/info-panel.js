// eslint-disable-next-line import/no-extraneous-dependencies
import { Plugin } from 'prosemirror-state';
import { findParentNodeOfType } from 'prosemirror-utils';
import { Node } from '@tiptap/core';

import { VueNodeViewRenderer } from '@tiptap/vue-2';
import InfoPanelComponent from '../InfoPanel.vue';

export default Node.create({
  name: 'info_panel',
  content: 'paragraph+',
  group: 'block',
  draggable: true,

  addAttributes() {
    return {
      type: {
        default: 'success',
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-type]',
        getAttrs: (dom) => {
          const type = dom.getAttribute('data-type') || 'success';
          return {
            type,
          };
        },
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'div',
      {
        type: HTMLAttributes.type,
        'data-type': HTMLAttributes.type,
        class: `editor-information-panel editor-information-panel--${HTMLAttributes.type}`,
      },
      ['div', {
        class: 'editor-information-panel__text',
      }, 0],
    ];
  },

  addCommands() {
    return {
      toggleInfoPanel: () => ({ commands }) => {
        commands.toggleWrap('info_panel');
      },
    };
  },

  addProseMirrorPlugins() {
    return [
      new Plugin({
        props: {
          // eslint-disable-next-line consistent-return
          handleKeyDown: (view, event) => {
            const { selection, schema } = view.state;
            const nodeTypes = [schema.nodes.info_panel, schema.nodes.blockquote];
            const parent = findParentNodeOfType(nodeTypes)(selection);
            if (parent !== undefined) {
              // splitBlock create new line with paragraph
              // liftEmptyBlock move cursor out of block
              if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
                this.editor.commands.splitBlock();
                this.editor.commands.liftEmptyBlock();
                return true;
              }
              if (event.key === 'Enter') {
                return this.editor.commands.splitBlock();
              }
            }
          },
        },
      }),
    ];
  },

  addNodeView() {
    return VueNodeViewRenderer(InfoPanelComponent);
  },
});
