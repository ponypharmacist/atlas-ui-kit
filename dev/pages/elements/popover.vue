<template>

<div class="demo-popover">
  <h2 id="au-popover">Поповер</h2>
  <div class="demo-item">

    <div class="d-flex align-center">
      <au-popover placement="bottom">
        <au-button icon="mdi-arrow-down" label="bottom"/>
        <template #popover>
          <div>Недоступные действия</div>
        </template>
      </au-popover>

      <au-popover placement="right">
        <au-button icon="mdi-arrow-right" label="right"/>
        <template #popover>
          <div>Недоступные <br/> действия</div>
        </template>
      </au-popover>

      <au-popover placement="top">
        <au-button icon="mdi-arrow-up" label="top"/>
        <template #popover>
          <div>Недоступные <br/> действия</div>
        </template>
      </au-popover>

      <au-popover placement="left">
        <au-button icon="mdi-arrow-left" label="left"/>
        <template #popover>
          <div>Недоступные <br/> действия</div>
        </template>
      </au-popover>

      <au-popover placement="top" trigger="click">
        <au-icon icon="mdi-cursor-default-click" :size="24" color="salmon"/>
        <template #popover>
          <div>Недоступные <br/> действия</div>
        </template>
      </au-popover>
    </div>

    <pre>&lt;au-popover
  placement: 'bottom | auto | top | right | left | [left]-start | [left]-end'
  trigger: 'hover | click | manual'
  disabled
&gt;
  slot - default slot
  #popover - слот для содержимого поповера
&lt;au-popover/&gt;</pre>
  </div>

  <h2 id="au-tooltip">Тултип</h2>
  <div class="demo-item">
    <div class="d-flex">
      <au-tooltip content="Hello, world!">
        <au-button label="Hover me!"/>
      </au-tooltip>
    </div>

    <pre>&lt;au-tooltip
  placement: String
  content: String
  offset: Number
&gt;
  slot
&lt;/au-tooltip&gt;</pre>
  </div>
</div>

</template>

<script>
export default {
  name: 'demo-popover',
};
</script>
