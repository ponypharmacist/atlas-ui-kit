<template>

<div class="demo-alerts">
  <h2 id="au-alerts">Уведомления</h2>
  <au-button
    label="Выдать еще одно уведомление"
    @click="pushAlert"
  />

  <div class="demo-item">
    <au-alerts
      v-model="alerts"
      @removeMessage="removeMessage"
    />
  </div>

  <pre>&lt;au-alerts
    v-model: Array
    timeout: Number | задержка перед исчезновением в миллисекундах
    @removeMessage - возвращает index сообщения
/&gt;</pre>
</div>

</template>

<script>
export default {
  name: 'demo-tree',

  data() {
    return {
      alerts: [],
      alertsList: [
        { text: 'Внимание! Это синее уведомление!', type: 'info' },
        { text: 'Внимание! Это желтое предупреждение!', type: 'warning' },
        { text: 'Внимание! Это красная ошибка!', type: 'error' },
      ],
      order: 0,
    };
  },

  methods: {
    pushAlert() {
      if (this.alerts.length > 4) {
        this.alerts.splice(0, 1);
      }

      if (this.order < 2) {
        this.alerts.push(this.alertsList[this.order]);
        this.order += 1;
      } else {
        this.alerts.push(this.alertsList[this.order]);
        this.order = 0;
      }
    },

    removeMessage(index) {
      this.alerts.splice(index, 1);
    },
  },
};
</script>
