<template>

<div class="demo-percent-bar">
  <h2 id="au-percent-bar">Процентная шкала</h2>
  <div class="demo-item">
    <au-percent-bar :data="barData" rounded show-number number-color="black"/>
    <pre>&lt;au-percent-bar :data="barData" rounded show-number number-color="black"&gt;/</pre>
    <au-percent-bar :data="barData"/>
    <au-percent-bar :data="barData2"/>
    <au-percent-bar :data="barData3" show-tooltips/>

  <pre>&lt;au-percent-bar
  data: Array
  height: Number
  default-color: String
  default-index: Number | Какое из значений будет выведено справа от полоски
  show-number | Показывать число справа от полоски или нет
  number-color: String
  rounded
  borderWidth: Number
  borderColor: String
  show-tooltips
/&gt;</pre>

  <pre>data: [
  { percent: 25, color: 'red' },
  { percent: 50, color: 'green' },
  { percent: 25, color: 'grey' },
]</pre>
  </div>
</div>

</template>

<script>
export default {
  name: 'demo-percent-bar',

  data() {
    return {
      barData: [
        {
          percent: 25,
          color: '#dc2821',
        },
        {
          percent: 50,
          color: '#90e118',
        },
      ],
      barData2: [
        {
          percent: 40,
          color: '#dc2821',
        },
        {
          percent: 30,
          color: '#90e118',
        },
        {
          percent: 30,
          color: '#e1e1e1',
        },
      ],
      barData3: [
        { percent: 10, color: 'salmon' },
        { percent: 10, color: 'orange' },
        { percent: 10, color: 'yellow' },
        { percent: 10, color: 'lime' },
        { percent: 10, color: 'green' },
        { percent: 10, color: 'cyan' },
        { percent: 10, color: 'blue' },
        { percent: 10, color: 'dodgerblue' },
        { percent: 10, color: 'purple' },
        { percent: 10, color: 'brown' },
      ],
    };
  },

  methods: {
  },
};
</script>
