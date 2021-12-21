<template>

<div class="demo-collapsible">
  <h2 id="au-collapsible">Сворачиваемый блок</h2>
  <div class="demo-item">
    <au-collapsible
      style="margin-bottom: 16px;"
    >
      <template #header>
        <h4 style="padding: 0;">Default</h4>
      </template>

      <template>
        <pre>&lt;au-collapsible&gt;
  &lt;template #header&gt;
    &lt;h4&gt;Default&lt;/h4&gt;
  &lt;/template&gt;

  &lt;template&gt;
    Hello world
  &lt;/template&gt;
&lt;/au-collapsible&gt;</pre>
      </template>
    </au-collapsible>

    <au-collapsible
      is-switch
      style="margin-bottom: 16px;"
    >
      <template #header>
        <h4 style="padding: 0;">is-switch</h4>
      </template>

      <template>
        Text contents
      </template>
    </au-collapsible>

    <au-collapsible
      :text="['Расчехлить', 'Зачехлить']"
      style="margin-bottom: 16px;"
    >
      <template #header>
        <h4 style="padding: 0;">text: ['Расчехлить', 'Зачехлить']</h4>
      </template>

      <template>
        Text contents
      </template>
    </au-collapsible>

    <au-collapsible
      is-card
      is-switch
    >
      <template #header>
        <h4 style="padding: 0;">is-card</h4>
      </template>

      <template>
        card body
      </template>

      <template #footer>
        au-collapsible #footer
      </template>
    </au-collapsible>

  <pre>&lt;au-collapsible
  open
  hide-arrow
  hide-text
  is-card - делает карточку с бордером, раздельной шапкой, боди и футером
  is-switch - включает au-switch вместо иконки
  text: Array | ['Развернуть', 'Свернуть']
&gt;
  #header - кликабельный активатор блока
  slot - содержимое блока
  #footer - часть содержимого, отгороженый футер
&lt;/au-collapsible&gt;</pre>
  </div>
</div>

</template>

<script>
export default {
  name: 'demo-collapsible',

  data() {
    return {
    };
  },

  methods: {
  },
};
</script>
