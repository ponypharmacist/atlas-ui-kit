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
      <au-tab-item :id="3" name="Спам" :count="5">
        Содержимое вкладки 3
      </au-tab-item>
    </au-tabs>

    <au-tabs>
      <au-tab-item :id="1" name="Очень много вкладок" :count="12">Содержимое 1</au-tab-item>
      <au-tab-item :id="2" name="Лишние должны прятаться" :count="540">Содержимое 2</au-tab-item>
      <au-tab-item :id="3" name="Вкладка 3" :count="5">Содержимое 3</au-tab-item>
      <au-tab-item :id="4" name="Вкладка 4" :count="5">Содержимое 3</au-tab-item>
      <au-tab-item :id="5" name="Вкладка 5" :count="5">Содержимое 3</au-tab-item>
      <au-tab-item :id="6" name="Вкладка 6" :count="5">Содержимое 3</au-tab-item>
      <au-tab-item :id="7" name="Вкладка 7" :count="5">Содержимое 3</au-tab-item>
      <au-tab-item :id="8" name="Вкладка 8" :count="5">Содержимое 3</au-tab-item>
      <au-tab-item :id="9" name="Вкладка 9" :count="5">Содержимое 3</au-tab-item>
      <au-tab-item :id="10" name="Вкладка 10" :count="5">Содержимое 3</au-tab-item>
      <au-tab-item :id="11" name="Вкладка 11" :count="5">Содержимое 3</au-tab-item>
      <au-tab-item :id="12" name="Вкладка 12" :count="5">Содержимое 3</au-tab-item>
      <au-tab-item :id="13" name="Вкладка 13" :count="5">Содержимое 3</au-tab-item>
      <au-tab-item :id="14" name="Вкладка 14" :count="5">Содержимое 3</au-tab-item>
      <au-tab-item :id="15" name="Вкладка 15" :count="5">Содержимое 3</au-tab-item>
      <au-tab-item :id="16" name="Вкладка 16" :count="5">Содержимое 3</au-tab-item>
    </au-tabs>

  <pre>&lt;au-tabs&gt;
  &lt;au-tab-item
    id: Number | required
    name: String | required
    count: Number
    @tabChange
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
