<template>

<div class="demo-select">

  <h2 id="au-select">Выпадающий список</h2>
  <div class="demo-item">
    <au-select
      v-model="selectModel"
      :list="selectListDemo"
      value-field="title"
      id-field="id"
    />
    <au-select
      v-model="selectModel"
      :list="selectListDemo"
      value-field="title"
      id-field="id"
      multiselect
    />
    <au-select
      value="inverse"
      inverse
    />
    <au-select
      value="disabled"
      disabled
    />
    <au-select
      value="small"
      small
    />
    <au-select :placeholder="null" noDataText="`:placeholder='null' - если нужен пустой плейсхолдер`" />

    <pre>&lt;au-select
  value: [Number, String, Object, Array]
  list: Array
  placeholder: String | default: 'Выберите из списка' - null если хотим без
  no-data-text: String | default: 'Список пуст'
  id-field: String
  value-field: String

  return-object
  close-on-select

  multiselect
  disabled
  inverse
  small
  large - сейчас не поддерживается
/&gt;</pre>
  </div>
</div>

</template>

<script>
export default {
  name: 'demo-select',

  data() {
    return {
      selectModel: null,
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
