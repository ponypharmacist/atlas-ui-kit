<template>

<div class="au-editor">
  <editor-content class="au-editor-tiptap" :editor="editor"/>
</div>

</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-2';
import StarterKit from '@tiptap/starter-kit';
import ExtensionImage from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';

export default {
  name: 'au-editor',

  components: {
    EditorContent,
  },

  props: {
    value: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      editor: null,
    };
  },

  watch: {
    value(value) {
      const isSame = this.editor.getHTML() === value;

      if (isSame) return;

      this.editor.commands.setContent(this.value, false);
    },
  },

  mounted() {
    const self = this;

    this.editor = new Editor({
      extensions: [
        StarterKit,
        ExtensionImage,
        Link,
        Table,
        TableRow,
        TableCell,
        TableHeader,
      ],
      content: this.value,
      onUpdate: () => {
        self.$emit('input', this.editor.getHTML());
      },
      onCreate() {
        self.$emit('ready', this);
      },
    });
  },

  beforeUnmount() {
    this.editor.destroy();
  },

  computed: {
  },

  methods: {
  },
};
</script>

<style lang="scss" scoped>
.au-editor {
  width: 100%;
  min-height: 160px;
  padding: 0 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fafafa;
}

::v-deep .au-editor-tiptap > div {
  outline: none!important;
}

// Типографика в редакторе
::v-deep .au-editor-tiptap {
  b, strong {
    font-weight: 500;
  }

  i, em {
    font-style: italic;
  }

  ul, ol {
    li {
      margin-left: 24px;
    }
  }

  p {
    margin: 12px 0;
  }

  /* Table-specific styling */
  table {
    border-collapse: collapse;
    table-layout: fixed;
    margin: 12px 0;
    overflow: hidden;

    p {
      margin: 0;
      padding: 0;
    }

    td,
    th {
      min-width: 1em;
      border: 1px solid #ced4da;
      padding: 4px 6px;
      vertical-align: top;
      box-sizing: border-box;
      position: relative;

      > * {
        margin-bottom: 0;
      }
    }

    th {
      font-weight: bold;
      text-align: left;
      background-color: #f1f3f5;
    }

    .selectedCell:after {
      z-index: 2;
      position: absolute;
      content: "";
      left: 0; right: 0; top: 0; bottom: 0;
      background: rgba(200, 200, 255, 0.4);
      pointer-events: none;
    }

    .column-resize-handle {
      position: absolute;
      right: -2px;
      top: 0;
      bottom: -2px;
      width: 4px;
      background-color: #adf;
      pointer-events: none;
    }
  }
}
</style>
