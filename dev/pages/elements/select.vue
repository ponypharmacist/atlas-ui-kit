<template>

<div class="demo-select">

  <h2 id="au-select">Выпадающий список</h2>
  <div class="demo-item">
    <div style="width: 300px;">
    <au-select style="margin-bottom: 8px;"
      v-model="selectModel"
      :list="selectListDemo"
      value-field="title"
      id-field="id"
      placeholder="Bla bla bla bla bla bla bla"
    />
    </div>
    <au-select
      v-model="selectModelMulti"
      :list="selectListDemo"
      value-field="title"
      id-field="id"
      multiselect
    />
    <au-select :placeholder="null" noDataText="`:placeholder='null' - если нужен пустой плейсхолдер`" />
    <au-select
      value="inverse"
      inverse
    />
    <au-select
      value="disabled"
      label="Label"
      disabled
    />
    <au-select
      value="small: 32px"
      label="Label + small"
      small
    />
    <au-select
      value="tiny: 24px"
      tiny
    />

    <pre>&lt;au-select
  value: [Number, String, Object, Array]
  list: Array
  label: String
  placeholder: String | default: 'Выберите из списка' - null если хотим без
  no-data-text: String | default: 'Список пуст'
  id-field: String
  value-field: String

  return-object
  close-on-select

  multiselect
  clearable
  disabled
  inverse
  small
  tiny

  @change
  @showList
/&gt;

#item={ item } - slot, кастомный шаблон для элемента списка</pre>
  </div>
</div>

</template>

<script>
export default {
  name: 'demo-select',

  data() {
    return {
      selectModel: null,
      selectModelMulti: null,
      selectListDemo: [
        { id: 1, title: 'Option One' },
        { id: 2, title: 'Option Two' },
        { id: 3, title: 'Option Three' },
        { id: 4, title: 'Option Four' },
      ],
    };
  },
};
</script>
