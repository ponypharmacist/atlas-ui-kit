<template>

<div class="demo-buttons">
  <h2 id="au-dropdown-button">Кнопка-dropdown (при наведении)</h2>
  <div class="demo-item">
    <div class="d-flex">
      <au-dropdown-button
        :list="[{ title: 'Элемент списка' }]"
        icon="mdi-eye"
      >
        Стандартная
      </au-dropdown-button>

      <au-dropdown-button
        :list="[{ title: 'Элемент списка' }]"
        large
        icon="mdi-eye"
      >
        Large
      </au-dropdown-button>

      <au-dropdown-button
        :list="[{ title: 'Элемент списка' }]"
        large
        white
        icon="mdi-eye"
      >
        White
      </au-dropdown-button>
    </div>

    <pre>&lt;au-dropdown-button
  list: Array - [{ title, ... }]
  icon: String
  large
  white
&gt;
  Название (default slot)

  &lt;template #list&gt; (list slot)
&lt;/au-dropdown-button&gt;</pre>
  </div>

  <h2 id="au-dropdown-content-button">Кнопка с выпадающим контентом (при клике)</h2>
  <div class="demo-item">
    <div class="d-flex">
      <au-dropdown-content-button
        label="Нажми меня!"
        :open="false"
      >
        <p style="padding: 16px;">Hello World</p>
      </au-dropdown-content-button>

      <!-- <au-dropdown-content-button
        label="Нажми меня!"
        :open="false"
        icon="mdi-eye"
      >
        <p style="padding: 16px;">Hello World</p>
      </au-dropdown-content-button>

      <au-dropdown-content-button
        label="Нажми меня!"
        :open="false"
        icon="mdi-eye"
        large
      >
        <p style="padding: 16px;">Hello World</p>
      </au-dropdown-content-button> -->
    </div>

    <pre>&lt;au-spinner
  label
  icon - передает иконку в au-icon
  large - для крупной au-button внутри компонента
/&gt;</pre>
  </div>
</div>

</template>

<script>
export default {
  name: 'demo-dropdown-buttons',
};
</script>
