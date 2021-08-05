<template>

<div class="demo-popups">
  <h2 id="au-button">Поп-ап справа</h2>
  <div class="demo-item">
    <au-button @click="showPopup = !showPopup" label="Показать поп-ап справа"/>
  </div>

  <au-side-popup
    :open="showPopup"
    @close="showPopup = !showPopup"
  >
    Содержимое default слота попапа.

    <pre>&lt;au-side-popup
  open
  @close
&gt;
  slot - default slot
  #footer - слот футера (для кнопочек)
&lt;/au-side-popup&gt;</pre>

    <template #footer>
      <au-button class="self-right" label="Кнопка в слоте #footer" @click="showPopup = !showPopup"/>
    </template>
  </au-side-popup>

  <pre>&lt;au-side-popup
  open
  @close
&gt;
  slot=
  #footer - слот футера (для кнопочек)
&lt;/au-side-popup&gt;</pre>
</div>

</template>

<script>
export default {
  name: 'demo-popups',

  data() {
    return {
      showPopup: false,
    };
  },
};
</script>
