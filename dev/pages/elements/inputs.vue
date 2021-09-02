<template>

<div class="demo-inputs">
  <h2 id="au-input">Поле ввода</h2>
  <div class="demo-item" style="max-width: 600px;">
    <au-input
      v-model="inputModel"
      placeholder="placeholder"
      label="Label"
    />

    <au-input
      value="small"
      icon="mdi-eye"
      small
    />
    <au-input
      v-model="inputModel"
      label="Label small"
      small
    />
    <au-input
      v-model="valueIcon"
      icon="mdi-eye"
      clearable
    />

    <au-input
      value="full-width"
      icon="mdi-eye"
      full-width
    />

    <au-input
      value="inputErrors"
      icon="mdi-eye"
      :inputErrors="[1]"
    />

    <au-input
      value="disabled"
      icon="mdi-eye"
      disabled
    />

    <au-input
      value="readonly"
      icon="mdi-eye"
      full-width
      readonly
    />

    <au-input
      value="Suffix"
      icon="mdi-eye"
      full-width
    >
      <template #suffix>
        <au-icon icon="icon-avatar" :size="18"/>
      </template>
    </au-input>

    <pre>&lt;au-input
  value: [String, Number, Array] {{ inputModel }}
  label: String
  placeholder: String
  icon: String
  name: String
  input-errors: Array
  type: String
  mask: [String, Array, Function]

  required
  disabled
  readonly
  autofocus

  full-width
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
  name: 'demo-inputs',

  data() {
    return {
      inputModel: null,
      valueIcon: 'icon',
    };
  },
};
</script>
