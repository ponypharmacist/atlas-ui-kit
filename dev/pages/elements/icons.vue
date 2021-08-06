<template>

<div class="demo-icons">
  <h2 id="au-icon">Иконки</h2>
  <div class="demo-item">
    <div class="d-flex align-center" style="margin-bottom: 6px;">
      <au-icon icon="mdi-wizard-hat" :size="24"/>
      <div> <code>&lt;au-icon icon="<b>mdi-wizard-hat</b>" size="24"/&gt;</code>
       - берет иконку '<b>wizard-hat.svg</b>' из @mdi/svg/svg</div>
    </div>

    <div class="d-flex align-center" style="margin-bottom: 6px;">
      <au-icon icon="icon-avatar" :size="24"/>
      <div> <code>&lt;au-icon icon="<b>icon-avatar</b>" size="24"/&gt;</code>
       - берет иконку '<b>icon-avatar.svg</b>' из @/assets/icons/ текущего проекта</div>
    </div>

    <div class="d-flex align-center" style="margin-bottom: 6px;">
      <au-icon icon="mdi-eye" :color="'#FF6C59'" title="Eye Icon" :size="24"/>
      <div> <code>&lt;au-icon icon="mdi-eye" <b>color="#FF6C59"</b>/&gt;</code>
       - цвет, если не указан: иконка имеет родной цвет</div>
    </div>

    <div class="d-flex align-center" style="margin-bottom: 6px;">
      <au-icon icon="fa-camera-retro" :color="'#6c59ff'" :size="24"/>
      <div> <code>&lt;au-icon <b>icon="fa-camera-retro"</b> color="#6c59ff"/&gt;</code>
       - иконки из набора FontAwesome (подключить css в main.js не забудьте)</div>
    </div>

    <pre>&lt;au-icon
  icon: String
  title: String
  color: String - если цвет не указан, иконка будет background-image вместо mask
  size: Number | 12 по-умолчанию
  mask - принудительно делает иконку маской (вместо фона)
/&gt;</pre>
  </div>
</div>

</template>

<script>
export default {
  name: 'demo-icons',
};
</script>
