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
      :show-toolbar="true"
      @ready="onEditorReady"
    />
  </div>

  <p style="font-family: monospace;">{{ editorContent }}</p>
  <br/>

  <pre>&lt;au-editor
  v-model: String
  show-toolbar
  schema        (заменяет default схему)
  extend-schema (дополняет default схему)
  extensions    (доп. расширения для самого редактора)
  @input
/&gt;
&nbsp;</pre>

  <pre>&lt;au-editor-toolbar
  editor
  schema        (заменяет default схему)
  extend-schema (дополняет default схему)
/&gt;</pre>

  <p>Схема кнопок для тулбара редактора выглядит примерно так.</p>
  <p>Хочешь свою схему? Скопируй default-схему, сделай как надо и скорми тулбару через проп schema.</p>
  <p>Через проп extend-schema можно добавить элементы, не меняя базовую схему.</p>

  <pre>defaultSchema: {
  bold: {
    icon: 'format-bold',    (название из mdi-icons)
    command: 'toggleBold',  (команда из tiptap)
    arg: '{ level: 1 }',    (аргумент для сложных команд)
    title: 'Полужирный',
    component               (компонент для кастомных кнопок)
    children: [
      {
        name: '',
        command: '',
        arg: {},
        icon: '',
        title: '',
        disabled: false (принудительно отключить проверку для кастомных компонентов)
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
