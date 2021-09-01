<template>

<div class="demo-tree">
  <h2 id="au-tree">Дерево элементов</h2>
  <div class="demo-item" style="width: 400px; min-height: 200px;">
    <au-tree v-model="items">
      <!--
        <template #link1>
        </template>
       -->
    </au-tree>
  </div>

  <pre>&lt;au-tree
    v-model: Array
    show-search - показывать строку поиска или нет

    #link1 - цифра, это уровень вложенности, для более точного контроля за слотами
             по умолчанию в слоте #link лежит node.title
/&gt;</pre>

  <br/>

  <pre>items: [
  {
    id: 1,
    title: 'Элемент',
    children: [],
  },
],</pre>
</div>

</template>

<script>
export default {
  name: 'demo-tree',

  data() {
    return {
      items: [
        {
          id: 1,
          title: 'Элемент',
          children: [
            {
              id: 11,
              title: 'Дочерний',
              children: [
                {
                  id: 111,
                  title: 'Внучатый',
                  children: [
                    { id: 1111, title: 'Правнучатый раз' },
                    { id: 1112, title: 'Правнучатый дуо' },
                    { id: 1113, title: 'Правнучатый тер' },
                    { id: 1114, title: 'Правнучатый четр' },
                  ],
                },
              ],
            },
            {
              id: 12,
              title: 'Дочерний',
              children: [
                { id: 121, title: 'ХитроВнучатый' },
              ],
            },
            {
              id: 13,
              title: 'Дочерний',
              children: [
                { id: 131, title: 'Внучатый' },
              ],
            },
          ],
        },
        {
          id: 2,
          title: 'Двалемент',
          children: [
            {
              id: 12,
              title: 'Дочерний',
              children: [
                { id: 22, title: 'Внучатый' },
              ],
            },
          ],
        },
        {
          id: 3,
          title: 'Трилемент',
          children: [
            {
              id: 13,
              title: 'Дочерний',
              children: [
                { id: 23, title: 'Внучатый' },
              ],
            },
          ],
        },
        {
          id: 4,
          title: 'Четырелемент',
          children: [
            {
              id: 14,
              title: 'Дочерний',
            },
          ],
        },
        {
          id: 5,
          title: 'Пятый э лемент',
        },
      ],
    };
  },
};
</script>
