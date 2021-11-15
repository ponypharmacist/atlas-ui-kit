<template>

<div class="demo-checkbox">
  <h2 id="au-checkbox">Чекбокс</h2>
  <div class="demo-item">
    <p>Фон для наглядности.</p>
    <div class="checkbox-wrap">
      <au-checkbox
        v-model="checkboxTrue"
        label="По умолчанию"
      />
    </div>
    <div class="checkbox-wrap">
      <au-checkbox
        v-model="checkboxTrue"
        label="disabled"
        disabled
      />
    </div>
    <div class="checkbox-wrap">
      <au-checkbox
        :value="checkboxTrue"
        label="partial"
        partial
      />
    </div>
    <div class="checkbox-wrap">
      <au-checkbox
        v-model="checkboxTrue"
        label="full-width"
        full-width
      />
    </div>
    <div class="checkbox-wrap">
      <au-checkbox
        v-model="checkboxTrue"
        label="label-left"
        label-left
      />
    </div>
    <div class="checkbox-wrap">
      <au-checkbox
        v-model="checkboxTrue"
        label="label-left + full-width"
        label-left
        full-width
      />
    </div>

    <div class="checkbox-wrap">
      <au-checkbox
        v-model="checkboxTrue"
        label="color: salmon"
        color="salmon"
      />
    </div>

    <div class="checkbox-wrap">
      <au-checkbox
        v-model="checkboxTrue"
        label="rounded"
        rounded
      />
    </div>

    <pre>&lt;au-checkbox
  v-model: Boolean
  partial
  label: String
  label-left
  full-width
  disabled
  color
  rounded

  @input
/&gt;</pre>
  </div>

  <h2 id="au-switch">Переключатель</h2>
  <div class="demo-item">
    <div class="d-flex">
      <au-switch v-model="switchValue"/>
      <au-switch v-model="switchValue2"/>
      <au-switch v-model="switchValue2" disabled/>
    </div>

    <pre>&lt;au-switch
  v-model: Boolean
  disabled
/&gt;</pre>
  </div>
</div>

</template>

<script>
export default {
  name: 'demo-checkbox',

  data() {
    return {
      switchValue: false,
      switchValue2: true,
      checkboxTrue: true,
      checkboxFalse: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.checkbox-wrap {
  width: 400px;
  height: 32px;
  flex: 0 0 auto;
  line-height: 16px;
  margin: 6px 0 6px;
  padding: 8px;
  background-color: #F0F4FB;
}
</style>
