<template>

<div class="demo-date">
  <h2 id="au-date-picker">Дата и время</h2>
  <div class="demo-item">
    <div style="max-width: 320px;">
      <au-date-picker
        v-model="dateRangeSelected"
        type="date"
        label="type: date, is-range"
        is-range
      />
    </div>

    <pre>{{ dateRangeSelected }}</pre>

    <div style="max-width: 320px;">
      <au-date-picker
        v-model="dateSelected"
        type="date"
        label="type: date"
      />
    </div>

    <div style="max-width: 320px;">
      <au-date-picker
        v-model="datetimeSelected"
        type="datetime"
        label="type: datetime"
      />
    </div>

    <div style="max-width: 320px;">
      <au-date-picker
        v-model="timeSelected"
        type="time"
        label="type: time"
      />
    </div>

    <pre>&lt;au-date-picker
  v-model {{ dateSelected }}
  type: String - 'date | time | datetime'
  label: String
  is-range
  input-errors: Array

  required
  disabled
  inverse
  small
  tiny

  @input
/&gt;</pre>
  </div>

  <h2 id="au-date">Отображение даты</h2>
  <div class="demo-item">
    <au-date
      :value="dateSelected || '2021-09-29 11:29:30'"
    />
  </div>

  <pre>&lt;au-date
    value: String, Number, Object
    format: String | 'DD.MM.YYYY'
/&gt;</pre>
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
