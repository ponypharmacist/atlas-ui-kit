<template>

<div class="demo-tabs">
  <h2 id="au-tabs">Вкладки, табы</h2>
  <div class="demo-item">
    <au-tabs>
      <au-tab-item :id="1" name="Непрочитанные" :count="12">
        Содержимое первой вкладки
      </au-tab-item>
      <au-tab-item :id="2" name="Все уведомления" :count="540">
        Содержимое вкладки номер два
      </au-tab-item>
    </au-tabs>

  <pre>&lt;au-tabs&gt;
  &lt;au-tab-item
    id: Number | required
    name: String | required
    count: Number
  &gt;
    Содержимое первой вкладки
  &lt;/au-tab-item&gt;
&lt;/au-tabs&gt;</pre>
  </div>
</div>

</template>

<script>
export default {
  name: 'demo-tabs',
};
</script>
