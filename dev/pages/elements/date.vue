<template>

<div class="demo-date">
  <h2 id="au-date">Дата и время</h2>
  <div class="demo-item">
    <div style="max-width: 320px;">
      <au-date
        v-model="dateSelected"
        type="date"
        label="type: date"
      />
    </div>

    <div style="max-width: 320px;">
      <au-date
        v-model="datetimeSelected"
        type="datetime"
        label="type: datetime"
      />
    </div>

    <div style="max-width: 320px;">
      <au-date
        v-model="timeSelected"
        type="time"
        label="type: time"
      />
    </div>

    <pre>&lt;au-date
  v-model {{ dateSelected }}
  type: String - 'date | time | datetime'
  label: String
  input-errors: Array

  required
  disabled
  size: String - 'small | tiny'
  inverse

  @input
/&gt;</pre>
  </div>
</div>

</template>

<script>
export default {
  name: 'demo-inputs',

  data() {
    return {
      dateSelected: null,
      dateRangeSelected: { start: null, end: null },
      datetimeSelected: null,
      timeSelected: null,
    };
  },
};
</script>
