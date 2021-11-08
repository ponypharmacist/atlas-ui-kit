<template>

<div class="demo-editor">
  <h2 id="au-editor">Редактор TipTap</h2>
  <div class="demo-item">
    <au-editor-toolbar
      v-if="editor"
      :editor="editor"
    />

    <au-editor
      v-model="editorContent"
      @ready="onEditorReady"
    />
  </div>

  <p style="font-family: monospace;">{{ editorContent }}</p>
  <br/>

  <pre>&lt;au-editor
    v-model: String
    @input</pre>

  <pre>&lt;au-editor-toolbar
    editor
    schema</pre>

  <p>Схема кнопок для тулбара редактора выглядит примерно так.</p>
  <p>Хочешь свою схему? Скопируй default-схему, сделай как надо и скорми тулбару через проп schema.</p>

  <pre>defaultSchema: {
  bold: {
    icon: 'format-bold', (название из mdi-icons)
    command: 'toggleBold', (команда из tiptap)
    title: 'Полужирный',
    children: [
      {
        name: '',
        command: '',
        icon: '',
        title: '',
      }
    ],
  },
},</pre>
</div>

</template>

<script>
export default {
  name: 'demo-editor',

  data() {
    return {
      editorContent: '<p>Hello work!</p>',
      editor: null,
    };
  },

  methods: {
    onEditorReady(editor) {
      this.editor = editor;
    },
  },
};
</script>
