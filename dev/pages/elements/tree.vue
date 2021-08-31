<template>

<div class="demo-tree">
  <h2 id="au-tree">Дерево элементов</h2>
  <div class="demo-item" style="width: 400px;">
    <au-tree v-model="items">
      <!--
        <template #link>
        </template>
       -->
    </au-tree>
  </div>

  <pre>&lt;au-tree
    v-model: Array

    #link1 - цифра, это уровень вложенности, для более точного контроля за слотами
             по умолчанию в слоте #link лежит node.title
/&gt;</pre>
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
                    { id: 1111, title: 'Правнучатый' },
                    { id: 1111, title: 'Правнучатый' },
                    { id: 1111, title: 'Правнучатый' },
                    { id: 1111, title: 'Правнучатый' },
                  ],
                },
              ],
            },
            {
              id: 12,
              title: 'Дочерний',
              children: [
                { id: 121, title: 'Внучатый' },
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
          title: 'Элемент',
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
          title: 'Элемент',
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
          title: 'Элемент',
          children: [
            {
              id: 14,
              title: 'Дочерний',
            },
          ],
        },
        {
          id: 5,
          title: 'Элемент',
        },
      ],
    };
  },
};
</script>
