<template>

<div class="demo-inputs">
  <h2 id="au-textarea">Textarea</h2>
  <div class="demo-item" style="max-width: 600px;">
    <au-textarea
      v-model="inputModel"
      placeholder="placeholder"
      label="Label"
    />

    <pre>{{inputModel}}</pre>

    <pre>&lt;au-textarea
  value: [String, Number, Array] {{ inputModel }}
  label: String
  placeholder: String
  name: String
  input-errors: Array
  type: String

  required
  disabled
  readonly
  autofocus

  small
  tiny
  inverse
/&gt;

#icon - slot для кастомного элемента в области иконки
#suffix - slot после поля ввода</pre>
  </div>
</div>

</template>

<script>
export default {
  name: 'demo-textarea',

  data() {
    return {
      inputModel: null,
    };
  },
};
</script>
